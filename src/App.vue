<template>
  <body>
    <div id="id">
      <TodoHeader></TodoHeader>
      <TodoInput v-on:addTodo="addTodo"></TodoInput>
      <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
      <TodoFooter v-on:removeAll="removeAll"></TodoFooter>
    </div>
  </body>
</template>

<script>

import TodoHeader from './components/TodoHeader'
import TodoInput  from './components/TodoInput'
import TodoList   from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  props:['propsdata'],
  data(){
    return{
      todoItems: []
    }
  },
  created(){
    if (localStorage.length > 0){
      for( var i=0; i<localStorage.length; i++){
        if (localStorage.key(i) != 'loglevel:webpack-dev-server')
          this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods:{
    removeAll(){
      localStorage.clear();
      this.todoItems = [];
    },

    addTodo(todoItem){
      //로컬 스토리지에 데이터를 추가
      localStorage.setItem(todoItem,todoItem);
      this.todoItems.push(todoItem)
    },

    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1)
    }

  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput'  : TodoInput,
    'TodoList'   : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
  body{
    width: 90%;
    text-align: center;
    background-color: #f6f6f8;
    margin: 0 auto;
  }

  input{
    border-style: groove;
    width: 200px;
  }

  button{
    border: groove;
  }

  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
  }
</style>
