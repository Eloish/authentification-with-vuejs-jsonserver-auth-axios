import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    
    status:'',
    token: localStorage.getItem('token') || '',
    user: {},
    allusers:[],
  },
  getters: {
    user:state=>state.user,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    allusers:state=>state.allusers,
    
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
    
    //
   
    
  },
  actions: {

    users(){
      return new Promise((resolve)=>{
        axios({url:'http://localhost:3002/users',method:'get'})
        .then(response=>{
          this.state.allusers=response.data
          resolve(response)
          console.log(response)
  
        })
      })

    },
    
    //register
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:3002/register', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.accessToken
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
        axios({ url: 'http://localhost:3002/login', data: user, method: 'post' })
        .then(resp => {
          const token = resp.data.accessToken
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
  },
  //endregiter
  //login action
 


  modules: {
  }
})
