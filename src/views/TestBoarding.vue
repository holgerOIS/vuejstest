<template>

  <div>
    <base-card border="yes">
        <div is="transition-group">
            <div style="display:table; width:100%" v-for="user in this.$store.getters.users" class="user" :key="user['.key']">
          
              <div style="display:table-row;">
                <div style="display:table-cell;width:180px; text-align:left">{{user.name}}</div>
                <div style="display:table-cell;width:280px; text-align:left">{{user.email}}</div>
                
                <div style="display:table-cell;width:auto; text-align:right">
                  <button v-on:click="removeUser(user)">X</button>
                </div>
              </div>
          
            </div>
        </div>
    </base-card>
    <base-card border="yes">
        <form id="form" v-on:submit.prevent="addUser">
          <input type="text" v-model="newUser.name" placeholder="Username" />
          <input
            type="email"
            v-model="newUser.email"
            placeholder="email@email.com"
          />
          <input type="submit" value="Add User" />
        </form>
        <ol class="errors">
          <li >Name cannot be empty.</li>
          <li >Please provide a valid email address.</li>
        </ol>
    </base-card>
  </div>
</template>
    <script>


export default {
  data() {
    return {
      newUser: {
        name: "",
        email: "",
      },
    };
  },
  computed: {
  },
  created() {
      this.$store.dispatch('setItemsRef')
  },
  methods: {
    addUser: function () {
        this.$store.dispatch('addUser', this.newUser);
    },
    removeUser: function (user) {
      this.$store.dispatch('deleteUser', user);
    },
  },
};
</script>