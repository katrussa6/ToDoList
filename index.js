const bodyInp = document.querySelector(".bodyInp");
const add = document.getElementById("add");

const needArr = [
  {
    checkbox: true,
    text: "Прочитать книгу",
    input: "",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    checkbox: true,
    text: "Купить собаке еду",
    input: "",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    checkbox: true,
    text: "Позвонить родителям",
    input: "",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    checkbox: true,
    text: "Выйти на пробежку",
    input: "",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    checkbox: true,
    text: "Съесть таблетки",
    input: "",
    buttonPen: "&#10000",
    button: "x",
  },
];

function delElement(index) {
  needArr.splice(index, 1);
  renderTodos();
}

const renderTodos = () => {
  bodyInp.innerHTML = "";
  needArr.forEach((element, index) => {
    bodyInp.innerHTML += `
        <div class="cheked">

            <input type="checkbox" class="styleadd" name="" 
            ${element.checkbox ? "checked" : ""}>

            <p class="need" onclick="editElement(${index})">${element.text}</p>

            <input class="needEdit" type="text" style="display: none;"/>

            <button class="styleadd" onclick="editElement(${index})">
            ${element.buttonPen}</button> 

            <button class="styleadd" onclick="delElement(${index})">
            ${element.button}</button>

        </div>
                 `;
  });
};

renderTodos();

function editElement(index) {
  // Находим все элементы с классом 'needEdit и need'
  const inputs = document.querySelectorAll('.needEdit');
  const text = document.querySelectorAll('.need');
  //показываем и скрываем
  inputs[index].style.display = 'block';
  text[index].style.display = 'none';
}
