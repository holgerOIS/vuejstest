<template>
  <div @click="selectFlightNumber(flight.flightNumber)">
    <td class="flightnumber">
      {{ this.flight.flightNumber }}
    </td>
    <td class="registration">{{ flight.registration }}</td>
    <td class="std">{{ getSTD }}</td>
    <td class="pos">{{ flight.position }}</td>
    <td class="destination">{{ flight.destination }}</td>
    <td class="gate">{{ flight.gate }}</td>
    <td :class="al1" class="remaining">{{ this.getRemaining }}</td>
    <td class="remaining">{{ this.$store.getters.userCount }}</td>

  </div>
</template>

<script>
export default {
  props: ["flight"],
  components: {},
  data() {
    return {
      timer:null,
      now:null,
      selectedFlight: "",
    };
  },
  methods: {
    selectFlightNumber(a) {
      console.log(a);
      this.$store.dispatch("selectFlightNumber", a);
    },
    updateDateTime() {
      console.log("IUIU");
      this.now = new Date();
      this.$options.timer = window.setTimeout(this.updateDateTime, 10000);
    },
    
  },
    computed: {
      getRemaining() {
        
        const flightDate = new Date(this.flight.std);
        
        return ((flightDate - this.now) / 1000 /60).toFixed(0);
      },
      al1(){
        if (this.getRemaining < -65){
          return "al1";
        }
        return "al0";
      },
      getSTD() {
        const dt = new Date(this.flight.std);
        return dt.getHours() + ":" + String(dt.getMinutes()).padStart(2, "0");
      },
    },
    mounted() {
    this.$options.timer = window.setTimeout(this.updateDateTime, 100);
  },
  
};
</script>

<style scoped>
.flightnumber {
  padding: 10px 0px;
  width: 70px;
  
}
.registration {
  width: 60px;
}
.std {
  width: 50px;
}
.pos {
  width: 50px;
}
.destination {
  width: 70px;
}
.gate {
  width: 70px;
}
.remaining {
  width: 70px;
}


a:link {
  text-decoration: none;
  color: #2c3e50;
}
.listItem {
  text-align: left;
  display: flex;
}
.al0{
  color:yellow;
}
.al1{
  color:red;
  font-weight: bold;
  font-size:18px;
}
</style>