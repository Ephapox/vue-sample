<template>
  <div class="hello">
    <chat-list 
        :friendList='friendList'
        @updateFriendEvent='updateFriendEvent'
        @deleteFriendEvent='deleteFriendEvent'>
    </chat-list>
  </div>
</template>

<script>
import FriendService from './../services/FriendService.js'

export default {
  name: 'home',
  data () {
    return {
      friendList: []
    }
  },
  created () {
    FriendService
    .getFriendList()
    .then(data => {
      this.friendList = data.friend_list
    })
  },
  methods: {
    updateFriendEvent () {
      FriendService
      .updateFriendList(this.friendList)
      .then(data => console.log(data))
    },
    deleteFriendEvent (id) {
      const friend = this.friendList.filter(friend => friend.id === id)
      const friendIndex = this.friendList.indexOf(friend)
      this.friendList.splice(friendIndex, 1)
      FriendService
      .updateFriendList(this.friendList)
      .then(data => console.log(data))
    }
  }
}
</script>

<style>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
