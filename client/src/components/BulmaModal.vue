<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <button v-if="action" class="button is-info" @click="$emit('click')">{{ action }}</button>
        <button class="button" @click="$emit('cancel')">Cancel</button>
      </footer>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default{
    name:"BulmaModal",
    props:['title','action'],
    data(){
      return{
      }
    }
  }
</script>
