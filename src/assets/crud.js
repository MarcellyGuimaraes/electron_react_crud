import api from './api'

export const getUser = (set) => {
  api
    .get('/usuarios')
    .then((response) => set(response.data))
    .catch((err) => {
      console.error('ops! ocorreu um erro (GetUsers): ' + err)
    })
}

export const addUser = (set, nome, cpf, users) => {
  api
    .post('/usuarios', {
      nome,
      cpf,
    })
    .then((response) => {
      set([...users, response.data])
      getUser(set)
    })
    .catch((err) => {
      console.error('ops! ocorreu um erro (AddUser): ' + err)
    })
}

export const editUser = (id, set, nome, cpf, users) => {
  api
    .put(`/usuarios/${id}`, {
      nome,
      cpf,
    })
    .then((response) => {
      set([...users, response.data])
      getUser(set)
    })
    .catch((err) => {
      console.error('ops! ocorreu um erro (EditUser): ' + err)
    })
}

export const deleteUser = (set, id, users) => {
  // eslint-disable-next-line no-restricted-globals
  if (confirm(`Deseja realmente excluir o usuário ${id}?`)) {
    api
      .delete(`/usuarios/${id}`)
      .then(() => {
        alert('Post deleted!')
        set([...users])
        getUser(set)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro (DeleteUser): ' + err)
      })
  } else {
    return null
  }
}
