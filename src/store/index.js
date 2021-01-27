import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firebaseAction } from 'vuexfire'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'

Vue.use(Vuex)
Vue.use(firestorePlugin)


if (!firebase.apps.length) {
  firebase.initializeApp ({
    apiKey: "AIzaSyBDPTX2Ij3mNQMIXT_4wXWtCS1jrwnTrj8",
      authDomain: "wasgeht-aab46.firebaseapp.com",
      databaseURL: "https://wasgeht-aab46-default-rtdb.firebaseio.com",
  });
}else {
  firebase.app(); // if already initialized, use that one
}

var usersRef = firebase.database().ref('users')
export default new Vuex.Store({
  state: {
    selectedFlightNumber: '',
    users:[],
  },
  mutations: {
    selectFlightNumber(state, payload) {
      state.selectedFlightNumber = payload;
    },
    ...vuexfireMutations,
  },
  actions: {
    selectFlightNumber(context, payload) {
      context.commit('selectFlightNumber', payload);
    },
    setItemsRef: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef( 'users',usersRef )
    }),
    addUser(_, payload) {
      usersRef.push(payload);
    },
    deleteUser(_, payload) {
      usersRef.child(payload[".key"]).remove();
    }
  },
  getters: {
    selectedFlightNumber(state) {
      return state.selectedFlightNumber;
    },
    users(state) {
      return state.users;
    },
    userCount(state) {
      return state.users.length;
    }
  },


  modules: {
  },

})
