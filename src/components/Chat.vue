<template>
  <div id="chat" ref="chatCard" class="chat-container">
    <Bubble v-for="(message, index) in messages" :message="message" :key="index"></Bubble>
    <div class="buttons-wrapper" v-if="!y">
      <button class="btn" @click="yes">Yes 🎉</button>
      <button class="btn" @click="no">No 💩</button>
    </div>
    <div class="buttons-wrapper" v-if="y">
      <button class="btn" @click="showConfetti">Awesome 🎉</button>
      <button class="btn" @click="restart">Restart</button>
    </div>
  </div>
</template>

<script>
import { getTime } from "../data/tasks.js";
import { getRandom } from "../data/tasks.js";
import Bubble from "./Bubble.vue";
import { setTimeout } from 'timers';

const defaultMessage = [
  {
    user: "I am bored, HELP!!!",
    bot: getRandom(),
    time: getTime()
  }
];
export default {
  components: {
    Bubble
  },
  data() {
    return {
      messages: [...defaultMessage],
      y: false,
      confettiRate: 10
    };
  },

  methods: {
    yes() {
      let accept = {
        user: "Yes 👍",
        bot: "Go on, go do the thing!!",
        time: getTime()
      };
      this.messages.push(accept);
      this.y = true;
      this.$confetti.start();
    },

    no() {
      let reject = {
        user: "No 👎",
        bot: getRandom(),
        time: getTime()
      };
      this.scrollToBottom();
      this.messages.push(reject);
    },

    showConfetti() {
      if (this.confettiRate < 35) {
        this.confettiRate++;
      }

      this.$confetti.update({
        dropRate: this.confettiRate
      });
    },

    restart() {
      this.y = false;
      this.messages = [
        {
          user: "I am bored, HELP!!!",
          bot: getRandom(),
          time: getTime()
        }
      ];
      this.$confetti.stop();
    },

    scrollToBottom() {
      setTimeout(()=>{
        console.log("timing")
        this.$refs.chatCard.scrollTop += 5000;
      },5)
    }
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
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 50px 20px 20px;
  background: #fff;
  border-radius: 50px;
  z-index: 3;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
}

.buttons-wrapper {
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
}

.btn {
  min-height: 20px;
  min-width: 60px;
  justify-self: flex-end;
  color: rgb(84, 85, 108);
  box-shadow: rgba(210, 210, 210, 0.5) 0px 2px 4px 0px;
  cursor: pointer;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 16px;
  margin: 0px 1em 1em 0px;
  background: white;
  border-radius: 20px;
  font-size: 16px;
  transition: transform 250ms ease 0s, box-shadow 250ms ease 0s;
}

.btn:hover,
.btn:focus {
  transform: translate3d(0px, -2px, 0px);
  box-shadow: rgba(110, 110, 110, 0.5) 0px 2px 6px 0px;
  outline: none;
}
</style>