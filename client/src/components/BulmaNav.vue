<template>
  <nav class="navbar is-primary is-spaced has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
          <div class="navbar-brand">
          <a class="navbar-item" href="/">
              <img src="/assets/img/logo_ansible_forms_full_white.svg" />
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarAnsibleForms" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
          </div>

          <div id="navbarAnsibleForms" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
              <div class="navbar-end">
                <router-link class="navbar-item" to="/jobs" v-if="authenticated">
                  <span class="icon"><font-awesome-icon icon="history" /></span><span>Job history</span>
                </router-link>
                <router-link class="navbar-item" to="/designer" v-if="isAdmin && authenticated">
                  <span class="icon"><font-awesome-icon icon="edit" /></span><span>Designer</span>
                </router-link>

                  <div class="navbar-item has-dropdown is-hoverable" v-if="isAdmin && authenticated" >
                      <a class="navbar-link"><span class="icon"><font-awesome-icon icon="cog" /></span> <span>Settings</span></a>
                      <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/groups">
                          <span class="icon"><font-awesome-icon icon="users" /></span><span>Groups</span>
                        </router-link>
                        <router-link class="navbar-item" to="/users">
                          <span class="icon"><font-awesome-icon icon="user" /></span><span>Users</span>
                        </router-link>
                        <router-link class="navbar-item" to="/ldap">
                          <span class="icon"><font-awesome-icon icon="id-card" /></span><span>Ldap Connection</span>
                        </router-link>
                        <router-link class="navbar-item" to="/awx">
                          <span class="icon"><font-awesome-icon icon="star" /></span><span>Awx Connection</span>
                        </router-link>
                        <router-link class="navbar-item" to="/credentials">
                          <span class="icon"><font-awesome-icon icon="lock" /></span><span>Credentials</span>
                        </router-link>
                      </div>
                  </div>
                  <div class="navbar-item" v-if="authenticated">
                    <span class="icon"><font-awesome-icon icon="user" /></span> <span>{{ profile}}</span>
                  </div>
                  <div class="navbar-item">
                    <div class="buttons">
                      <router-link class="button is-light" v-if="authenticated" to="/login" v-on:click.native="logout()" replace><span class="icon"><font-awesome-icon icon="sign-out-alt" /></span><span>Logout</span></router-link>
                      <a class="button is-light is-primary" v-if="authenticated" href="/api-docs" target="_blank">
                        <span class="icon"><font-awesome-icon icon="code" /></span><span>Api docs</span>
                      </a>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
</template>
<script>
  import Vue from 'vue'
  import TokenStorage from '../lib/TokenStorage'
  export default{
    name:"BulmaNav",
    props:{
      authenticated:{type:Boolean},
      isAdmin:{type:Boolean},
      profile:{type:String},
    },
    data(){
      return  {
          showNav: false
      }
    },methods:{
      logout(){
        this.$emit("logout");
      }
    },mounted(){
    }
  }
</script>
<style scoped>
</style>
