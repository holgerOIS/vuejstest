<template>
  <div class="about">
    

    <base-card border="yes">
      <table class="flightList">
        <tr v-for="flight  in flights"  :key="flight.flightNumber" class="flightrow" >
          <flight-line :flight="flight"></flight-line>
        </tr>
      </table>
    </base-card>
  
    
      <base-card border="yes" >
        <h1>Hallo Julia</h1>
        <h2>Hallo Leute</h2>
        <h2>Hello World!</h2>
      </base-card>
   
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      
      flights: [
        {
          flightNumber: "LH1234",
          registration: "DAIHK",
          std:'22 Jan 2021 22:00:00 GMT',
          destination:'LAX',
          position:'255',
          gate:'J21'
        },
        {
          flightNumber: "LH2344",
          registration: "DAIXI",
          std:'22 Jan 2021 22:05:00 GMT',
          destination:'NRT',
          position:'208',
          gate:'H33'
        },
        {
          flightNumber: "LH099",
          registration: "DAINA",
          std:'22 Jan 2021 22:10:00 GMT',
          destination:'FRA',
          position:'201',
          gate:'G12'
        },
        {
          flightNumber: "LH1906",
          registration: "DAILA",
          std:'22 Jan 2021 22:10:00 GMT',
          destination:'BER',
          position:'207',
          gate:'G41'
        },
        
        
      ],
    };
  },
  
};
</script>
<style scoped>
tr:nth-child(even) {
  background-color: var(--secondary-color);
}
.flightList{
  width:100%;
  text-align: left;
}
</style>
