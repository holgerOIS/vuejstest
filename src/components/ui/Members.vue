<template>
  <base-card border="yes">
      <div class="members" >
             
            <a href="tel:+491745856462" class="tel">RampsAgent</a>
            <a href="tel:**620" class="tel">Gate</a>
            <a href="tel:+1234" class="tel">OC</a>
            <a href="tel:+1234" class="tel">Supervisor</a>
            <a href="tel:+1234" class="tel">Cockpit</a>
            <a href="tel:+1234" class="tel">Cabin</a>
      </div>
  </base-card>
</template>

<script>
export default {};
</script>

<style scoped>
.tel {
  text-decoration: none;
  font-size: 15px;
  
  display: block;
  color:var(--font-color);
}
.members {
  
  height: 200px;
  margin-left: 0px;
  margin-right: auto;
  display: table;
  text-align: left;
}

</style>