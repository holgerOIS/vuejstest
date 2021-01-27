<template>
  <div id="app">
    <div class="topnav">
      <router-link class="active" to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to ="/testBoarding">Boarding</router-link>
      <button @click="huhu" class="br">Hi</button>
      <input type="text" placeholder="Search...." v-model="hi" class="br" />
    </div>
    <div class="sidenav snLeft">
      <a href="#">Arrival</a>
      <a href="#">Departure</a>

      <a href="#">Contact</a>
      
    </div>
    <div class="sidenav snRight">
      <p>{{ selectedFlight }}</p>
      <members></members>
    </div>

    <div class="main">
      <router-view />
    </div>
    <div class="bottomnav">
      <div class="bl">Server: 192.168.178.10:8080 connected</div>
      <div class="bl">Time: UTC</div>
      <div class="br" style="font-weight: bold">Phone: 01636310699</div>
      <div class="br" @click="toggleTheme">theme:</div>
      <div class="br">User: U509605</div>
      <div class="br">
        selectedFlight: {{ this.$store.getters.selectedFlightNumber }}
      </div>
    </div>
  </div>
</template>
<script>
import Members from "./components/ui/Members.vue";
export default {
  data() {
    return {
      hi: "",
    };
  },
  components: { Members },
  computed: {
    selectedFlight() {
      return this.$store.getters.selectedFlightNumber || "NFS";
    },
  },
  methods: {
    huhu() {
      alert(this.$store.getters.selectedFlightNumber + " /// /// " + this.hi);
    },
    toggleTheme() {
      console.log(document.documentElement.getAttribute("data-theme"));
      if (document.documentElement.getAttribute("data-theme")) {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
}
html,
body {
  height: 100%;
  color: var(--font-color);
  background-color: var(--bg-color);
}
a{
  color:var(--font-color);
}
#app {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
.main {
  padding: 40px;
  margin-top: 30px;
  margin-bottom: 20px;
  height: 100%;
}

.sidenav {
  /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 2; /* Stay on top */
  top: 60px; /* Stay at the top */

  /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  padding-bottom: 20px;
}
.snLeft {
  left: 0;
}
.snRight {
  right: 0;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;

  display: block;
}

.topnav {
  overflow: hidden;

  display: fixed;
  z-index: 1;
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  padding: 10px;
}

.topnav a {
  float: left;

  text-align: center;
  padding: 3px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  color: white;
}

.topnav a.active {
  border: solid 1px;
  border-color: grey;
  border-radius: 3px;
}

.bottomnav {
  border-top: solid 1px;
  border-color: #31455a;
  overflow: hidden;

  position: fixed;
  bottom: 0;
  height: 35px;
  width: 100%;
  z-index: 1;
}
.bottomnav div {
  padding: 10px 12px;
  font-size: 12px;
}
.bl {
  float: left;
}
.br {
  float: right;
  margin-right: 20px;
}
:root {
  --primary-color: #302ae6;
  --secondary-color: #9fa886;
  --font-color: #424242;
  --bg-color: rgb(177, 184, 120);
  --heading-color: #292922;
}
[data-theme="dark"] {
  --primary-color: #9a97f3;
  --secondary-color: #27292e;
  --font-color: #e1e1ff;
  --bg-color: #161625;
  --heading-color: #818cab;
}
</style>
