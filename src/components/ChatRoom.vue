<template>
<div class="chat-room">
  <h1>{{roomName}}</h1>

  <div class="chat-messages-wrapper">
    <ul class="chat-messages">
      <chat
       v-for="chat in chats"
       v-bind:chat="chat">
      </chat>
    </ul>
  </div>

  <section class="chat-text-input">
    <form class="chat-form">
      <div class="chat-input-group">
        <input type="text" class="chat-input" placeholder="enter chat message" autofocus>
        <button class="chat-button" type="button">Chat</button>
      </div>
    </form>
  </section>
</div>
</template>

<script>
import Chat from './Chat'

export default {
  name: 'ChatRoom',
  data () {
    return {
      roomName: 'Videos',
      chats: [{
        'username': 'jon',
        'message': 'are you gong to the party?',
        'time': '53 minutes ago',
        'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/jakemoore/128.jpg',
        'isCurrentUser': false
      }, {
        'username': 'matt',
        'message': 'not sure... is she going to be there',
        'time': '52 minutes ago',
        'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/vladyn/128.jpg',
        'isCurrentUser': true
      }, {
        'username': 'jen',
        'message': 'you guys do know im in this chat still, right?',
        'time': '22 seconds ago',
        'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg',
        'isCurrentUser': false
      }]
    }
  },
  components: {
    Chat
  }
}
</script>
<style scoped>
.chat-room {
  width: 70%;
  display: flex;
  height: 100%;
  flex-direction: column;
}

.chat-messages-wrapper {
  flex: 3;
  overflow-y: auto;
  margin-bottom: 20px;
  border-radius: 3px;
}

.chat-messages {
  margin-bottom: 20px;
  padding: 20px;
}
</style>
