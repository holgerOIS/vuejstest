<template>
  <div :class="bordered">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:['border'],
  computed: {
    bordered() {
      if(this.border ==='yes'){
        return "card";
      } else {
        return "noBorderCard";
      }
    }
  },
}

</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.7rem;
  margin: 1rem auto;
  max-width: 40rem;
}
.noBorderCard {
  
  
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
/* .card:hover{
    background-color: darkgrey;
    color:white;
} */
</style>