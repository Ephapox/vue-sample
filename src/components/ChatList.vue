<template>
  <div class="ChatList">
    <friend 
        v-for='friend in friendList' 
        :friend='friend' 
        :key='friend.id'
        @deleteFriend='deleteFriend'>
    </friend>
  </div>
</template>

<script>
export default {
  name: 'chat-list',
  props: ['friendList'],
  methods: {
    deleteFriend: function (id) {
      const friend = this.friendList.filter(friend => friend.id === id)
      const friendIndex = this.friendList.indexOf(friend)
      this.friendList.splice(friendIndex, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ChatList {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 200px;
  max-width: 400px;
}
</style>
