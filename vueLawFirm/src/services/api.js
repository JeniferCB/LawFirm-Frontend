import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'https://api-lawfirm.onrender.com/api'
})

async function signup(newUser) {
  try {
    const { data } = await API.post('/auth/signup', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function login(newUser) {
  try {
    const { data } = await API.post('/auth/login', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function getAllPendingAppointments() {
  const store = useAuthStore()
  const res = await API.get('/appointments/client', {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res.data
}

async function addAppointment(appointment) {
  const store = useAuthStore()
  const res = await API.post('/appointments', {
    client: store.userId,
    ...appointment
  }, {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res
}

async function deleteAppointment(id) {
  const store = useAuthStore()
  const res = await API.delete(`/appointments/${id}`, {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res
}

async function getUsers() {
  const store = useAuthStore()
  const res = await API.get('/users/list', {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res
}
async function getAllClients() {
  const store = useAuthStore()
  const res = await API.get('/users/clients', {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res.data
}
async function getAllAppointments() {
  const store = useAuthStore()
  const res = await API.get('/appointments', {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res.data
}
async function getAllPendingOneClient(id) {
  const store = useAuthStore()
  const res = await API.get(`/appointments/${id}`, {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res.data
}

async function getAllNotes() {
  const store = useAuthStore()
  const res = await API.get('/notes', {
    headers: {
      Authorization: `Bearer ${store.userToken}`
    }
  })
  return res.data
}

export default {
  signup,
  login,
  getAllPendingAppointments,
  getUsers,
  addAppointment,
  deleteAppointment,
  getAllClients,
  getAllAppointments,
  getAllPendingOneClient,
  getAllNotes
}