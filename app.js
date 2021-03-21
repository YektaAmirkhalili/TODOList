//NewToDo
//Helper
function createElement(tagName, attributes, content) {
  var el = document.createElement(tagName);

  for (var key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  if (typeof (content) !== 'undefined') {
    if (content instanceof HTMLElement) {
      el.appendChild(content);
    } else {
      el.innerText = content;
    }
  }

  return el;
};


function createDoneBTN(){
  let doneBtn = createElement('button', {
    class: 'done-btn', 
  }, 'Done');
  return doneBtn;
}

function createDelBtn(){
  let delBtn = createElement('button', {
    class: 'delete-btn'
  }, 'Delete');
  return delBtn;
}

//ToDoBox 
function createToDoBox(todoText, id) {
  let listItem = createElement('li', {class:'todo-item', id: id},);
  let textOf = createElement('p',{}, todoText);
  let doneBtn = createDoneBTN();
  let delBtn = createDelBtn();

  listItem.appendChild(textOf);
  listItem.appendChild(doneBtn);
  listItem.appendChild(delBtn);
  // listToDo.appendChild(listItem);

  return listItem;
}

const addNewToDoTask = () => {
  var num = 0;
  let inputSpace = document.getElementById('inp');
  let addBtn = document.querySelector('.add-todo-btn');
  var listToDo = document.querySelector('.todo-list');
  
  addBtn.addEventListener('click', () => {
    num += 1;
    listToDo.appendChild(createToDoBox(inputSpace.value, num));
    let parentofBtn = document.getElementById(num);
    let doneBtn =  parentofBtn.querySelector('.done-btn');
    doneBtn.addEventListener('click', (e) => {
      document.getElementById(e.target.parentElement.id).classList.add('done-task');
    })
    inputSpace.value = '';
    inputSpace.focus();
  })

}

addNewToDoTask();

// var doneButton = document.querySelector('.done-btn');
// doneButton.addEventListener('click', (e) => {
//   document.getElementById(e.currentTarget.parentNode.id).classList.add('done-task');
//   // document.getElementById(id).classList.add('hide');
// })

// function editToDos() {
  
// }

// editToDos();
