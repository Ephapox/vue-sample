const ROOT = 'https://jsonblob.com/api/jsonblob'
const endpoints = {
  friendList: `${ROOT}/861ba0e2-1658-11e7-a0ba-410f4d80cec8`
}

export default {
  __json (res) {
    return res.json()
  },
  getFriendList () {
    return fetch(endpoints.friendList)
  },
  updateFriendList (friendList) {
    const data = {
      payload: {
        friend_list: friendList
      }
    }
    return fetch(endpoints.friendList, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    })
  }
}
