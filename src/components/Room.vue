<template>
  <li class="room-item" v-bind:class="{'selected-room': room.isSelected}">
      <h3 class="room-title">{{room.title}}</h3>
  </li>
</template>

<script>
export default {
  name: 'Room',
  props: ['room'],
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.room-item {
  list-style-type: none;
  width: 90%;
  height: 200px;
  background-color: rgba(136, 142, 153, 0.6);
  margin: 4px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  box-shadow: 1px 1px 3px #888;
}
.room-title {
  align-self: center;
}

.selected-room {
  opacity: 0.5;
}

</style>
