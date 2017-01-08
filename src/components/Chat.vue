<template>
  <li class="chat-item">
    <div class="chat-background" v-bind:class="{'current-user-chat': chat.isCurrentUser}">
      <img v-bind:src=chat.avatar class="chat-avatar">
      <p>
        <span class="chat-username">{{chat.username}}</span>
        <span class="chat-time">{{chat.time}}</span>
        <span class="chat-message">{{chat.message}}</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Room',
  props: ['chat'],
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.chat-item {
  list-style-type: none;
  padding: 4px 12px;
  width: 100%;
}
.chat-username {
  font-weight: bold;
}
.chat-time {
  font-style: italic;
}

.chat-username + .chat-time {
  padding-left: 8px;
}

.chat-message {
  display: block;
}

.chat-avatar {
  padding-right: 1em;
  border-radius: 20px 0 0 0;
}

.current-user-chat .chat-avatar {
  padding-right: 0;
  padding-left: 1em;
  border-radius: 0 20px 0 0;
}

.chat-background {
  display: flex;
  background: rgba(254,222,231,0.9);
  border-radius: 20px;
  width: 45%;
}

.current-user-chat {
  flex-direction: row-reverse;
  text-align: right;
  margin-left: auto;
  background: rgba(212,234,251,0.9);
}
</style>
