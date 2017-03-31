<template>
  <div class="hello">
    <h3>Friend List</h3>
    <chat-list :friendList='friendList'></chat-list>
    <button @click="addFriend">Add Friend</button>
  </div>
</template>

<script>
function Friend () {
  return {
    firstName: '',
    lastName: '',
    birthday: '',
    id: Math.random() * Date.now(),
    state: {
      editing: true,
      viewing: false
    }
  }
}

export default {
  name: 'home',
  data () {
    return {
      friendList: [
        {
          id: 232,
          firstName: 'Ryan',
          lastName: 'Quey',
          birthday: '1991-03-25T08:00:00.000Z'
        },
        {
          id: 3020,
          firstName: 'David',
          lastName: 'Om',
          birthday: '1989-05-04T08:00:00.000Z'
        }
      ]
    }
  },
  methods: {
    addFriend: function () {
      this.friendList.push(new Friend())
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
