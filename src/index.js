import { Todo, TodoList } from './classes/index';
import { creartodoHtml } from './js/componentes';

import './styles.css';




export const todoList = new TodoList();



todoList.todos.forEach(creartodoHtml);


console.log(todoList)
