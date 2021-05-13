<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>

export default{
  methods:{
    clearTodo(){
      this.$emit('removeAll')
    }
  }
}

</script>

<style>
  .clearAllContainer{
    width: 8.5rem;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn{
    color: rgb(255, 73, 41);
    display: block;
  }

  .clearAllContainer:hover{
    background: linear-gradient(45deg, #46a9eb, #636dfb);
  }

  .clearAllBtn:hover{
    color:#fff;
  }
</style>
