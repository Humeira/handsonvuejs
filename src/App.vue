<template>
  <div id="app">
    <div class="card">
      <Welcome></Welcome>
      <Chat></Chat>
    </div>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Chat from "./components/Chat.vue";

export default {
  name: "app",
  components: {
    Welcome,
    Chat
  }
};
</script>

<style>
body {
  background-color: #fff;
}

#app {
  display: flex;
  height: 100%;
  margin: 40px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

h1 {
  color: #ff5f38;
  font-size: 30px;
  margin: 0;
  line-height: 1.5;
}

h2 {
  color: #fff;
  line-height: 1.5;
  font-size: 28px;
  margin: 0;
}
p,
a {
  color: #f2f2f2;
  line-height: 1.5;
  margin: 0;
}

a:hover,
a:focus {
  color: #222;
  outline: none;
}

.card {
  display: flex;
  flex-direction: row;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background: #181844;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
  border-radius: 30px;
  justify-content: space-between;
}
</style>
