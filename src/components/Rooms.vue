<template>
<div class="rooms">

  <div class="rooms-wrapper">
    <ul class="rooms-list">
      <room v-for="room in rooms" v-bind:room="room">
      </room>
    </ul>
  </div>
  <section class="room-text-input">
    <form class="chat-form">
      <div class="chat-input-group">
        <input type="text" class="chat-input" placeholder="create new room" autofocus>
        <button class="chat-button" type="button">Create</button>
      </div>
    </form>
  </section>
</div>
</template>

<script>
import Room from './Room'

export default {
  name: 'Rooms',
  data () {
    return {
      rooms: [{
        title: 'Soccer',
        isSelected: false
      }, {
        title: 'Videos',
        isSelected: true
      }, {
        title: 'Surfing',
        isSelected: false
      }, {
        title: 'Concerts',
        isSelected: false
      }]
    }
  },
  components: {
    Room
  }
}
</script>

<style scoped>
.rooms {
  width: 30%;
  display: flex;
  height: 100%;
  flex-direction: column;
}

.rooms-wrapper {
  flex: 3;
  overflow-y: auto;
  border-color: #ddd;
  margin-bottom: 20px;
  border-radius: 3px;
}
</style>
