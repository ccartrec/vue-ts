<template>
  <div>
    <h1>Исходящие</h1>
    <div class="letters-item" v-for="(letter, idx) in letters" :key="idx" @click="viewMessage('outgoing', letter.subject, letter.recipient, letter.message)">
      <div class="date">{{ letter.date }}</div>
      <div class="sender">{{ letter.recipient }}</div>
      <div class="subject">{{ letter.subject }}</div>
      <div class="actions">
        <button title="Удалить" @click.stop="deleteMessage(1, letter.id)"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import axios from 'axios';

    export default {
        name: 'app',
        data() {
            return {
                letters: [],
                date: '',
                recipient: '',
                subject: '',
                message: '',
            };
        },
        mounted() {
            axios
                .get('http://localhost:3000/outgoing')
                .then(response => (this.letters = (response.data)));
        }
    };
</script>