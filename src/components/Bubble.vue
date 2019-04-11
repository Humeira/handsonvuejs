<template>
  <div>
    <div class="list" v-if="message">
      <div>
        <div class="bubble">{{message.user}}</div>
        <div class="time">{{message.time}}</div>
      </div>
    </div>
    <div class="list list--robot">
      <div>
        <div class="avatar">🤖</div>
      </div>
      <div>
        <div class="bubble bubble--robot">{{message.bot}}</div>
        <div class="time time--robot">{{message.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bubble",
  props: ["message"]
};
</script>

<style>
.bubble {
  min-height: 20px;
  max-width: 200px;
  margin-bottom: 8px;
  align-self: flex-start;
  color: rgb(84, 85, 108);
  box-shadow: rgba(210, 210, 210, 0.5) 0px 2px 4px 0px;
  padding: 1em;
  background: #fff;
  border-radius: 20px;
}

.avatar {
  display: flex;
  margin-right: 7px;
}

.bubble--robot {
  align-items: "flex-start";
  background-color: #181844;
  color: #fff;
}

.time {
  font-size: 14px;
  color: #181844;
  margin-bottom: 16px;
  text-align: right;
  padding: 0px 4px;
}

.time--robot {
  text-align: left;
}

.list {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 100%;
}

.list--robot {
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>