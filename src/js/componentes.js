
import {Todo} from '../classes'

import {todoList} from '../index'
//referencia de html
const divTodoList = document.querySelector('.todo-list');

const textInput = document.querySelector('.new-todo');

const bntBorrar = document.querySelector('.clear-completed')

const ulfiltro = document.querySelector('.filters');

const selecFiltro = document.querySelectorAll('.filtro')

export const creartodoHtml = ({tarea,completado,id}) => {

    const todoHtml = `<li class="${ (completado? 'completed':'')}" data-id="${id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(completado? 'checked':'')}>
        <label>${tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li> `;

    const div = document.createElement('div');

    div.innerHTML = todoHtml;

    divTodoList.append(div.firstElementChild);



}


textInput.addEventListener('keyup',(e)=>{
    if(e.keyCode == 13 && textInput.value.length >0 ){
        const todo = new Todo(textInput.value);

        todoList.nuevoTodo(todo);
        creartodoHtml(todo);

        textInput.value = '';
       

    }
})

divTodoList.addEventListener('click',(e)=>{

    const nombreElemento = e.target.localName;
    const todoElemento = e.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);

        todoElemento.classList.toggle('completed');

    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    
    console.log(todoList);
    console.log(todoId);
    console.log(todoElemento);
})


bntBorrar.addEventListener('click',() =>{

    todoList.eliminarCompletados();
    
    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }

    }
    
})

ulfiltro.addEventListener('click',(e) =>{
    console.log(e.target.text);

    const filtro = e.target.text;


    if(!filtro){ // si tiene algo //!filtro si tiene algo que se false y si no tiene algo que se true
        return;
    }

    selecFiltro.forEach( elem => elem.classList.remove('selected'));

    e.target.classList.add('selected');

    for(const elemento of divTodoList.children ){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
})