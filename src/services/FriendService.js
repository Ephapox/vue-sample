import ApiFacadeService from './ApiFacadeService.js'

export default {
  Friend () {
    return {
      firstName: '',
      lastName: '',
      birthday: '1-1-1970',
      id: Math.random() * Date.now(),
      state: {
        editing: true,
        viewing: false
      }
    }
  },
  getFriendList () {
    return new Promise((resolve, reject) => {
      ApiFacadeService
      .getFriendList()
      .then(ApiFacadeService.__json)
      .then(data => data.payload)
      .then(resolve)
      .catch(reject)
    })
  },
  updateFriendList (friendList) {
    return new Promise((resolve, reject) => {
      ApiFacadeService
      .updateFriendList(friendList)
      .then(ApiFacadeService.__json)
      .then(resolve)
      .catch(reject)
    })
  }
}
