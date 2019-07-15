
export default {

  namespace: 'apps',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
// namespace 是该 model 的命名空间，同时也是全局 state 上的一个属性，只能是字符串，不支持使用 . 创建多层命名空间。
// state 是状态的初始值。
// reducer 类似于 redux 中的 reducer，它是一个纯函数，用于处理同步操作，是唯一可以修改 state 的地方，
// 由 action 触发，它有 state 和 action 两个参数。
// effects 用于处理异步操作，不能直接修改 state，由 action 触发，也可触发 action。
// 它只能是 generator 函数，并且有 action 和 effects 两个参数。第二个参数 effects 包含 put、call 和 select 三个字段，put 用于触发 action，call 用于调用异步处理逻辑，select 用于从 state 中获取数据。
// subscriptions 用于订阅某些数据源，并根据情况 dispatch 某些 action
// ，格式为 ({ dispatch, history }, done) => unlistenFunction。
// 如上的一个 model，监听路由变化，当进入 /user 页面时，执行 effects 
// 中的 fetch，以从服务端获取用户列表，然后 fetch 中触发 reducers 中的 save 将从服务端获取到的数据保存到 state 中。
// 注意，在 model 中触发这个 model 中的 action 时不需要写命名空间，
// 比如在 fetch 中触发 save 时是 { type: 'save' }。而在组件中触发 action 时就需要带上命名空间了，
// 比如在某个组件中触发 fetch 时，应该是 { type: 'user/fetch' }。

