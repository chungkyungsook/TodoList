Vue.component('sibling-component',{
  props:['siblingdata'],
  template: '<div>{{siblingdata}}</div>'
})

Vue.component('child-component',{
  props:['propsdata'],
  template: '<p>{{propsdata}}</p>'
});

var app = new Vue({
  el:'#app',
  data:{
    message: 'Hello Vue! passed from Parent Component',
    anotherMessage: 'this is anothoerMessage'
  }
})