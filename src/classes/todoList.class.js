import { Todo } from "./todo.class";


export class TodoList {

    constructor(){
        this.cargarLocateStorage();
        
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocateStorage();
    }

    eliminarTodo(id){
      this.todos =  this.todos.filter(todo => todo.id != id);
      this.guardarLocateStorage();
    }

    marcarCompletado(id){

        for(const todo of this.todos) {   // es una tabla que tiene varios registro y es como where
            
            if(this.todos.id == id){   // aqui la codicion si encuentra un registro igual a ese;

                todo.completado = !todo.completado;
                guardarLocateStorage();
                break;
            }
        }
    }
    eliminarCompletados(){
        this.todos =  this.todos.filter(todo => !todo.completado);
        this.guardarLocateStorage();
    }

    guardarLocateStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocateStorage(){

        this.todos = (localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo')) 
        : [];

        this.todos = this.todos.map(Todo.fromJson);

    }
    
}

