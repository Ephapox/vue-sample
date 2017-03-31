<template>
  <div class="Friend">
    <div class="friend-details">
      <div>
        <p v-if="!friend.state.editing">{{fullName}}</p>
        <input type="text" :value="fullName" v-if="friend.state.editing" v-model="fullName">
      </div>
      <div>
        <p v-if="!friend.state.editing">{{formatBirthday}}</p>
        <input type="date" :value="formatBirthday" v-if="friend.state.editing" v-model="formatBirthday">
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
    },
    deleteFriend: function () {
      this.$emit('deleteFriend', this.friend.id)
    }
  },
  computed: {
    fullName: {
      get: function () {
        return `${this.friend.firstName} ${this.friend.lastName}`
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.friend.firstName = names[0]
        this.friend.lastName = names[names.length - 1]
      }
    },
    formatBirthday: {
      get: function () {
        return new Date(this.friend.birthday).toLocaleDateString()
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
