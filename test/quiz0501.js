var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    message2: '새롱누 데이터 추가 {{}} 데이터 바인딩 하기',
    
    uid: 20,

    flag: false
  },

  methods: {
    clickBtn(){
      console.log('hi');
    },

    clickBtn2(){
      console.log('btn2 is clicked');
    }
  }
});