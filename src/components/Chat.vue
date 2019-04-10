<template>
  <div id="chat" ref="chatCard" class="chat-container">
      <Bubble v-for="(message, index) in messages" :message ="message"></Bubble>
    <div v-if="!y">
      <button @click="yes">yes</button>
      <button @click="no">no</button>
    </div>
  </div>
</template>

<script>
import { getTime } from "../data/tasks.js";
import { getRandom } from "../data/tasks.js";
import Bubble from "./Bubble.vue";
const defaultMessage = [
  {
    user: "I am bored",
    bot: "lol",
    time: "00:00"
  }
];
export default {
  components: {
    Bubble
  },
  data() {
    return {
      messages: [
        {
          user: "I am bored",
          bot: getRandom(),
          time: getTime()
        }
      ],
      y: false
    };
  },

  mounted() {
    console.log(this.$el);
  },

  methods: {
    yes() {
      alert("yes");
      this.y = true;
    },

    no() {
      let reject = {
        user: "No 👎",
        bot: getRandom(),
        time: getTime()
      };
      this.messages.push(reject);
    },

    scrollToBottom() {
      let container = this.$el.querySelector("chat");
      container.scrollTop = container.scrollHeight;
    },

    confetti() {},

    restart() {}
  }
};
</script>

<style>
.chat-container {
  position: relative;
  margin-left: 50px;
  z-index: 1;
  min-width: 320px;
  max-width: 375px;
  height: 500px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 50px 20px 20px;
  background: #fff;
  border-radius: 50px;
  z-index: 3;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
}
</style>