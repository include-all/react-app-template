import { createStore } from 'redux'  //  引入createStore方法
import reducer from './reducer'
const store = createStore(reducer) // 创建数据存储仓库

store.subscribe(() =>
  console.log(store.getState())
);

export default store   //暴露出去