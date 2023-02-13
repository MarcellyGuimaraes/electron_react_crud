import api from './api'

export const getUser = (set) => {
  api
    .get('/produtos')
    .then((response) => set(response.data))
    .catch((err) => {
      console.error('ops! ocorreu um erro (GetUsers): ' + err)
    })
}

export const addUser = (set, nome, descricao, users) => {
  api
    .post('/produtos', {
      nome,
      descricao,
    })
    .then((response) => {
      set([...users, response.data])
      getUser(set)
    })
    .catch((err) => {
      console.error('ops! ocorreu um erro (AddUser): ' + err)
    })
}

export const editUser = (id, set, nome, descricao, users) => {
  api
    .put(`produtos/${id}`, {
      nome,
      descricao,
    })
    .then((response) => {
      set([...users, response.data])
      getUser(set)
    })
    .catch((err) => {
      console.error('ops! ocorreu um erro (EditUser): ' + err)
    })
}

export const deleteUser = (set, id) => {
  api
    .delete(`/produtos/${id}`)
    .then(() => {
      alert('Post deleted!')
      set(null)
      getUser(set)
    })
    .catch((err) => {
      console.error('ops! ocorreu um erro (DeleteUser): ' + err)
    })
}
