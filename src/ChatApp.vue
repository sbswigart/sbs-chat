<template>
  <div id="chat-app">
    <rooms></rooms>
    <chat-room></chat-room>
  </div>
</template>

<script>
import Rooms from './components/Rooms'
import ChatRoom from './components/ChatRoom'
export default {
  name: 'ChatApp',
  components: {
    Rooms,
    ChatRoom
  }
}
</script>

<style>
#chat-app {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
  height: 100%;
  display: flex;
}

.chat-input-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
}

.chat-input {
  height: 38px;
  padding: 7px 14px;
  font-size: 15px;
  margin-bottom: 0;
  flex: 8 0 0;
}

.chat-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 4;
  border-color: #ccc;
  display: inline-block;
  padding: 7px 14px;
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  flex: 1 0 0;
}
</style>
