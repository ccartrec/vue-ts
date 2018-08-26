<template>
  <div id="app">
    <div id="nav">
      <router-link to="/new" class="nav-link new">Новое сообщение</router-link>
      <router-link to="/" class="nav-link incoming">Входящие</router-link>
      <router-link to="/outgoing" class="nav-link outgoing">Исходящие</router-link>

      <div class="letters-item" v-for="letter in incoming">
        <div class="subject">{{ letter.subject }}</div>
      </div>
      <div class="letters-item" v-for="letters in outgoing">
        <div class="subject">{{ letters.subject }}</div>
      </div>
      <div class="btn" @click="getData()">get data</div>
    </div>
    <div class="app-body">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../src/css/style.scss';
</style>

<script lang="ts">

    import { db } from './main';

    export default {
        name: 'app',
        data() {
            return {
                outgoing: [],
                incoming: [],
                date: '',
                sender: '',
                recipient: '',
                subject: '',
                message: '',
            };
        },
        firestore() {
            return {
                incoming: db.collection('incoming'),
                outgoing: db.collection('outgoing'),
            };
        },
        created() {
            console.log('created called.');
            // console.log(this.$store.state.db)
            db.collection('outgoing').get().then(function(querySnapshot) {
                querySnapshot.forEach((doc) => console.log(doc.data()));
            });
        },
        methods: {
            getData() {
                db.collection('outgoing').get().then(function(querySnapshot) {
                    querySnapshot.forEach((doc) => console.log(doc.data()));
                });
            },
        },

    };
</script>