const bodyInp = document.querySelector(".bodyInp");
const add = document.getElementById("add");
const need = document.getElementById("need");

let needArr = [
  {
    id: 0,
    checkbox: true,
    text: "Прочитать книгу",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id: 1,
    checkbox: false,
    text: "Купить продукты",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id: 2,
    checkbox: false,
    text: "Позвонить родителям",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id: 3,
    checkbox: false,
    text: "Выйти на пробежку",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id: 4,
    checkbox: false,
    text: "Приготовить ужин",
    buttonPen: "&#10000",
    button: "x",
  },
];

// Загружаем из localStorage, если есть
const saved = localStorage.getItem("toDo");
if (saved) {
  try {
    needArr = JSON.parse(saved);
  } catch (e) {
    console.error("Ошибка парсинга localStorage", e);
  }
}

// Функция для сохранения в localStorage
function saveToLocal() {
  localStorage.setItem("toDo", JSON.stringify(needArr));
}

//функция для сохранения чекбокса
function toggleCheckbox(index) {
  needArr[index].checkbox = !needArr[index].checkbox;
  saveToLocal();
}

document.getElementById("add").addEventListener("click", addPush);
function addPush() {
  const newText = need.value.trim(); // получаем текст из input и убираем лишние пробелы

  if (newText !== "") {
    const newId = needArr.length > 0 ? needArr[needArr.length - 1].id + 1 : 0; // уникальный id
    const newTask = {
      id: newId,
      checkbox: false,
      text: newText,
      buttonPen: "&#10000", // или что нужно
      button: "x",
    };

    needArr.push(newTask); // добавляем в массив
    saveToLocal(); // сохраняем
    need.value = ""; // очищаем поле
    renderTodos();
  }
}

function delElement(index) {
  needArr.splice(index, 1);
  renderTodos();
}

function editElement(index) {
  const inputs = document.querySelectorAll(".needEdit");
  const text = document.querySelectorAll(".needs");

  inputs[index].style.display = "block";
  text[index].style.display = "none";

  inputs[index].focus();
  inputs[index].addEventListener("blur", () => rewersEditElement(index));
}

function rewersEditElement(index) {
  const inputs = document.querySelectorAll(".needEdit");
  // Получаем новое значение из input
  const newValue = inputs[index].value;

  // Обновляем текст в массиве
  needArr[index].text = newValue;

  inputs[index].style.display = "none";

  saveToLocal(); // сохраняем
  renderTodos();
}

const renderTodos = () => {
  bodyInp.innerHTML = "";

  needArr.forEach((element, index) => {
    bodyInp.innerHTML += `

         <div class="cheked">
         
          <input type="checkbox" class="styleadd" 
      ${element.checkbox ? "checked" : ""} 
      onchange="toggleCheckbox(${index})">

          <p class="needs" onclick="editElement(${index})">${element.text}</p>

          <input class="needEdit" type="text" style="display: none;" value="${
            element.text
          }"/>

          <button class="styleadd" onclick="editElement(${index})">
          ${element.buttonPen}</button> 

          <button class="styleadd" onclick="delElement(${index})">
          ${element.button}</button>

      </div>
                 `;

    console.log("я отрисовал первый елемнт", element);
  });
};

renderTodos();
