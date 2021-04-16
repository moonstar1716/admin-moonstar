import { createStore } from 'vuex'

export default createStore({
  // 定义状态(变量)
  state: {
	  tokenid:'' || localStorage.getItem('tokenid')
  },
  // 修改state里面的变量(修改变量的值)
  mutations: {
	  
	  setTokenid(state,val){
		  state.tokenid = val
		  localStorage.setItem('tokenid', val)
		  return (state.tokenid)
	  },
	 
  },
  
  // Action 触发 mutation 函数,从而修改状态
  actions: {
  },
  
  // Module 当状态很多时,把状态分开来管理
  modules: {
  }
})
