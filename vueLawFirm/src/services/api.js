import axios from 'axios'

const API = axios.create({
    baseURL:'https://api-lawfirm.onrender.com/api'
})

async function signup(newUser) {
  const { data: { token, email, rol, id } } = await API.post('/auth/signup', newUser)
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  localStorage.setItem('id', id)
  localStorage.setItem('rol', rol)
  return token
}

async function login(newUser) {
  const { data: { token, email, rol, id } } = await API.post('/auth/login', newUser)
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  localStorage.setItem('id', id)
  localStorage.setItem('rol', rol)
  return token
}

async function getAllPendingAppointments(){
  const res = await API.get('/appointments/client', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  return res
}

async function addAppointment(appoint){
  const res = await API.post('/appointments', appoint, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  return res
}



async function getUsers(){
  const res = await API.get('/users/list', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  return res
  }

export default {
    signup,
    login,
    getAllPendingAppointments,
    getUsers,
    addAppointment

  }