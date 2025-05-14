const bodyInp = document.querySelector(".bodyInp");
const add = document.getElementById("add");
const need = document.getElementById('need');



const needArr = [
  {
    id:0,
    checkbox: true,
    text: "Прочитать книгу",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id:1,
    checkbox: true,
    text: "Купить продукты",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id:2,
    checkbox: true,
    text: "Позвонить родителям",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id:3,
    checkbox: true,
    text: "Выйти на пробежку",
    buttonPen: "&#10000",
    button: "x",
  },
  {
    id:4,
    checkbox: true,
    text: "Приготовить ужин",
    buttonPen: "&#10000",
    button: "x",
  },
];

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
    need.value = ""; // очищаем поле
    renderTodos(); // перерисовываем список
  } 
}



function delElement(index) {
  needArr.splice(index, 1);
  renderTodos();
}

//function editElement(index) {
//  const inputs = document.querySelectorAll(".needEdit");
//  const text = document.querySelectorAll(".need");
//  console.log(inputs,text)
//if(  inputs[index].style.display === "none"){
//  inputs[index].style.display = "block";
//  text[index].style.display = "none";
//}

//}

//function rewersEditElement(index){
//  const inputs = document.querySelectorAll(".needEdit");
//  const text = document.querySelectorAll(".need");
//  const newValue = inputs[index].value;
//  needArr[index].text = newValue;
//  inputs[index].style.display = "none";
//  text[index].style.display = "block";
  
//  renderTodos();
//}

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
  
  renderTodos();
}

const renderTodos = () => {
  bodyInp.innerHTML = "";

  needArr.forEach((element, index) => {

    bodyInp.innerHTML += `

         <div class="cheked">
         
          <input type="checkbox" class="styleadd" name="" 
          ${element.checkbox ? "checked" : ""}>

          <p class="needs" onclick="editElement(${index})">${element.text}</p>

          <input class="needEdit" type="text" style="display: none;" value="${element.text}"/>

          <button class="styleadd" onclick="editElement(${index})">
          ${element.buttonPen}</button> 

          <button class="styleadd" onclick="delElement(${index})">
          ${element.button}</button>

      </div>
                 `;
        console.log('я отрисовал первый елемнт',element)

       
                
  });
};

renderTodos();


