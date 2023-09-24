import { Component } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  allTodos:any = [];

  constructor(private api:APIService) { }

  async ngOnInit() {
    await this.listTodos()
  }

  async createTodo(todoName: any){
    if(todoName.value.length){ 
      const newTodo = {
        name: todoName.value,
        description: 'sample description'
      }
      await this.api.CreateTodo(newTodo);   
      todoName.value = null;
      await this.listTodos()
    }
    
  }

  async listTodos(){
    let result = await this.api.ListTodos();
    this.allTodos = result.items;
  }
}
