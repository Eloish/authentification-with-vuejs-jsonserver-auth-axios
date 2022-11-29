import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    
    status:'',
    token: localStorage.getItem('token') || '',
    user: [],
    allusers:[],
    url:'http://127.0.0.1:8000/api'
  },
  getters: {
    user:state=>state.user,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    allusers:state=>state.allusers,
    alltask:state=>state.todolist
    
  },
  
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    
    // todo app mutations 
    GETLIST(state,alltodo)
        {
            state.todolist=alltodo
        }
        ,//addnewto
        ADDNEWTODO(state,newtodo){
            state.todolist.unshift(newtodo)
        },
   
    
  },
  actions: {
   
    

    
    //register
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: `${this.state.url}/register`, data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token: token, user: user })
          resolve(resp)
        }).catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    login({commit}, user) {
      return new Promise((resolve,reject) => {
        commit('auth_request')
        axios({ url: `${this.state.url}/login`, data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token: token, user: user })
          resolve(resp)
        }).catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    async getalltodo({commit}) {
      try {
         const response=await axios.get(`${this.state.url}/todo`)
          commit('GETLIST',response.data)
      }catch (error) {
          console.log(error)
          
      }
  
      },
      async newtask({commit},newtodo){
          try {
              const response=await axios.post(`${this.state.url}/todo`,{name:newtodo})
              commit('ADDNEWTODO',response.data)
  
              
          } catch (error) {
              console.log(error)
              
          }
      },
  },
  //endregiter
  //login action

 
 


  modules: {
    
  }
})
