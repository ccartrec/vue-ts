<template>
  <div id="app">
    <div id="nav">
      <router-link to="/new" class="nav-link new">Новое сообщение</router-link>
      <router-link to="/" class="nav-link incoming">Входящие</router-link>
      <router-link to="/outgoing" class="nav-link outgoing">Исходящие</router-link>
    </div>
    <div class="app-body">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../src/css/style.scss';
</style>
