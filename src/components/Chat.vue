<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" key="index" class="list">
        <div class="bubble">{{message.user}}</div>
        <div class="bubble bubble--robot">{{message.bot}}</div>
      </li>
      <li v-if="y">
        <button @click="confetti">Awesome</button>
        <button @click="restart">restart</button>
      </li>
    </ul>

    <div v-if="!y">
      <button @click="yes">yes</button>
      <button @click="no">no</button>
    </div>
  </div>
</template>

<script>
import { getTime } from "../data/tasks.js";
import { getRandom } from "../data/tasks.js";
const defaultMessage = [
  {
    user: "I am bored",
    bot: "lol",
    time: "00:00"
  }
];
export default {
  data() {
    return {
      messages: [
        {
          user: "I am bored",
          bot: getRandom(),
          time: "00:00"
        }
      ],
      y: false
    };
  },
  methods: {
    yes() {
      alert("yes");
      this.y = true;
    },

    no() {
      let reject = {
        user: "No",
        bot: getRandom(),
        time: "00:00"
      };
      this.messages.push(reject);
    },

    confetti() {},

    restart() {}
  }
};
</script>

<style>
.bubble {
  min-height: 20px;
  max-width: 200px;
  padding: 1em;
  margin-bottom: 8px;
  align-items: "flex-end";
  background-color: #fff;
  color: #181844;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.5);
}

.bubble--robot {
  align-items: "flex-start";
  background-color: #ff5f38;
  color: #fff;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: "flex-end";
  width: 100%;
}
</style>