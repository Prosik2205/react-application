// window.addEventListener('load', () => {
//  document.getElementById('id-1').innerText = "This is text";
// });
// window.addEventListener('load', function () {
//  document.getElementById('id-1').innerText = "This is text";
// });
// let func = () => console.log(45);
// func();
// func = (a, b) => console.log(a, b);


const todoItemTemplate = document.getElementById('todo-item');

const newItemInput = document.getElementById('new-item-text');
const todoList = document.getElementById('todo-list');

let itemIdCounter = 0;

const save = (items) => {
 localStorage.setItem('todoItems', JSON.stringify(items));
};

const createTodoElem = (text) => {
 const newItem = todoItemTemplate.content.cloneNode(true);
 /**
  * newItem:
  * <div class="row">
           <div class="col-10">
             <li id="todo-item-text"> eat pizza</li>
           </div>
           <div class="col-2 align-self-center text-center">
             <img src="./imgs/bin.png">
           </div>
         </div>
  */
 newItem.querySelector('#todo-item-text').innerText = text;
 const trashIcon = newItem.querySelector('img');
 const id = 'item_' + itemIdCounter;
 itemIdCounter += 1;
 newItem.querySelector('.row').id = id;
 todoList.appendChild(newItem);

 trashIcon.addEventListener('click', () => {
  const item = document.getElementById(id);
  item.remove();
 });
};

const itemsString = localStorage.getItem('todoItems') || '';
let items = [];
if (itemsString) {
 items = JSON.parse(itemsString);
}

if (items.length) {
 items.forEach(item => {
  createTodoElem(item.text);
 });
}


document.getElementById('new-item-btn')
 .addEventListener('click', () => {
  const text = newItemInput.value;
  if (!text) {
   return;
  }
  items.push({ text });
  save(items);
  createTodoElem(text);
  newItemInput.value = '';
 });
 
  document.getElementById('search-bar').addEventListener('click',() =>
  {
       
    const vart=document.getElementsByClassName('row_todo_item')
   
    const search_text=document.getElementById('search-bar-value').value
   

    
   
    

    for(var i=0; i<vart.length; i++)
    {
      
      if(vart[i].innerText==search_text)
    {
      console.log(vart[i].innerText);
    }

    }



  } )
  

