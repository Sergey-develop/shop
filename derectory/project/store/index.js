export const state = () => ({
  bCount: 0,
  bOpen: false,
  bItem: [],
})



export const mutations = {

  checkCache(state) {
    if (localStorage.getItem("historyBasketCount") !== null && localStorage.getItem("historyBasketPosition") !== null) {
      state.bCount = JSON.parse(localStorage.getItem("historyBasketCount"))
      state.bItem = JSON.parse(localStorage.getItem("historyBasketPosition"))
    }
  },

  setCount(state, bCount) {
    state.bCount = bCount
  },

  bOpen(state) {
    state.bOpen = !state.bOpen
    document.body.classList.toggle('overflow-hidden')
  },

  bPush(state, bItem) {
    state.bCount++
    state.bItem.push(bItem)
    localStorage.setItem("historyBasketCount", state.bCount)
    localStorage.setItem("historyBasketPosition", JSON.stringify(state.bItem) )
  },

  bDell(state, itemId) {
    state.bCount--
    state.bItem = state.bItem.filter(e => itemId !== e.id)
    localStorage.setItem("historyBasketCount", state.bCount)
    localStorage.setItem("historyBasketPosition", JSON.stringify(state.bItem) )
  },

  bClear(state) {
    state.bItem = []
    state.bCount = 0
    localStorage.setItem("historyBasketCount", state.bCount)
    localStorage.setItem("historyBasketPosition", JSON.stringify(state.bItem) )
  }
}

export const getters = {
  GetCount(state) {
    return state.bCount
  },
}


// localStorage.setItem("historyMessage", $('.chat-body').innerHTML)
//
// localStorage.getItem("historyMessage")
