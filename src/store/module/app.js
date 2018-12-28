const state = {
    count: 0,
    name: "hhh"
}

const mutations = {
    changeNum(state, { payload }) {
        console.log(state, payload)
        payload === '+' ? state.count++ : state.count--;
    }
}

export default {
    state,
    mutations
}