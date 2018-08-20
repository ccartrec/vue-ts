<template>
  <div id="app">
    <div id="nav">
      <router-link to="/new" class="btn">Новое сообщение</router-link>
      <router-link to="/">Входящие</router-link>
      <router-link to="/about">Исходящие</router-link>
    </div>
    <div class="app-body">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../src/css/style.scss';
</style>
