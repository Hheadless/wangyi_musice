const state = {
    count: 0,
    name: "hhh"
}

const getters = {
    comp(state) {
        return state.count * 2;
    }
}

// 模块 同步改变
const mutations = {
    changeNum(state, { payload }) {
        // console.log(state, payload)
        payload === '+' ? state.count++ : state.count--;
    }
}

// 模块 异步改变。异步触发smutations 里的方法
const actions = {
    changeAsync(context, action) {
        // 第一参数 context 相当于缩小的本模块
        // console.log(context, action, '23333')

        // 异步操作中可以返回多个promise 当异步操作完成后通知组件
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('changeNum', action)
                resolve();
            }, 1000)
        })
    }
}

export default {
    namespaced: true, // 命名空间。具体指定本模块
    state,
    mutations,
    actions,
    getters
}