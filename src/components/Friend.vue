<template>
  <div class="Friend">
    <div class="friend-details">
      <div>
        <p v-if="!friend.state.editing">{{fullName}}</p>
        <div class="name-container" v-if='friend.state.editing'>
          <input 
              class="first-name-input"
              type="text" 
              :value="friend.firstName" 
              v-model="friend.firstName" />
          <input 
              class="last-name-input"
              type="text" 
              :value="friend.lastName" 
              v-model="friend.lastName" />
        </div>
      </div>
      <div>
        <p v-if="!friend.state.editing">{{formatBirthday}}</p>
        <input 
            type="date" 
            :value="formatBirthday" 
            v-if="friend.state.editing" 
            v-model="formatBirthday" />
      </div>
    </div>
    <div class="friend-buttons">
      <button class="friend-button" @click="toggleEditMode" v-if='!friend.state.editing'>Edit</button>
      <button class="friend-button" @click="updateFriend" v-if='friend.state.editing'>Update</button>
      <button class="friend-button" @click="deleteFriend">Remove</button>
    </div>
  </div>
</template>

<style scoped>
.Friend {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.friend-details {
  flex: 1;
}

.friend-details p {
  margin: 0;
}

.friend-details input {
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  font-family: 'Avenir';
}

.name-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.first-name-input,
.last-name-input {
  width: 30%;
}

.friend-buttons {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.Friend:last-child {
  margin-bottom: 0;
}
</style>

<script>
function formatDate (date) {
  var d = new Date(date)
  var month = '' + (d.getMonth() + 1)
  var day = '' + d.getDate()
  var year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

export default {
  name: 'friend',
  props: ['friend'],
  created: function () {
    if (!this.friend.state) {
      this.$set(this.friend, 'state', {
        editing: false,
        viewing: false
      })
    }
  },
  methods: {
    toggleEditMode: function () {
      this.$set(this.friend.state, 'editing', !this.friend.state.editing)
    },
    updateFriend: function () {
      this.$set(this.friend.state, 'editing', !this.friend.state.editing)
      this.$emit('updateFriendEvent')
    },
    deleteFriend: function () {
      this.$emit('deleteFriendEvent', this.friend.id)
    }
  },
  computed: {
    fullName: {
      get: function () {
        return `${this.friend.firstName} ${this.friend.lastName}`
      }
    },
    formatBirthday: {
      get: function () {
        return formatDate(this.friend.birthday)
      },
      set: function (newValue) {
        try {
          var jsonDate = new Date(newValue).toJSON()
          this.friend.birthday = jsonDate
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>
