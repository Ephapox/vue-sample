<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ChatList {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 200px;
  max-width: 400px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
}

.ChatHeader {
  display: flex;
  color: #666;
  padding: 10px 0;
}

.ChatHeader__text {
  margin: 0px;
  margin-right: 10px;
}

.ChatHeader__add {
  font-weight: lighter;
  font-size: 16px;
  text-align: center;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 0px;
  background: none;
}
</style>

<template>
  <div class="ChatList">
    <div class="ChatHeader">
      <h3 class="ChatHeader__text">Friend</h3>
      <button class='ChatHeader__add' @click="addFriend">&plus;</button>
    </div>
    <friend 
        v-for='friend in friendList'
        :friend='friend' 
        :key='friend.id'
        @deleteFriendEvent='deleteFriendEvent'
        @updateFriendEvent='updateFriendEvent'>
    </friend>
  </div>
</template>

<script>
import FriendService from './../services/FriendService.js'

export default {
  name: 'chat-list',
  props: ['friendList'],
  computed: {
    orderByName () {
      return this.friendList.sort((friend, previous) => {
        if (friend.firstName < previous.firstName) return -1
        if (friend.firstName > previous.firstName) return 1
        return 0
      })
    }
  },
  methods: {
    addFriend () {
      this.friendList.push(new FriendService.Friend())
    },
    deleteFriendEvent: function (id) {
      this.$emit('deleteFriendEvent', id)
    },
    updateFriendEvent: function () {
      this.$emit('updateFriendEvent')
      this.friendList.sort((friend, previous) => {
        if (friend.firstName < previous.firstName) return -1
        if (friend.firstName > previous.firstName) return 1
        return 0
      })
    }
  }
}
</script>

