import { useEffect, useState } from 'react'
import './App.css'
import { addUser, deleteUser, editUser, getUser } from './assets/crud'

function App() {
  const [users, setUsers] = useState()
  const nome = 'Nome 1'
  const descricao = 'Descricao 2'

  const nomeEdited = 'Nome 1 Editada'
  const descricaoEdited = 'Descricao 2 Editada'

  useEffect(() => {
    getUser(setUsers)
  }, [])

  if (!users) {
    return (
      <div className="App">
        <header className="App-header">Carregando</header>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {users ? (
          users.map((user, index) => (
            <div key={index}>
              <p>{user?.nome}</p>
              <p>{user?.descricao}</p>

              <button
                onClick={() =>
                  editUser(
                    user?.id,
                    setUsers,
                    nomeEdited,
                    descricaoEdited,
                    users,
                  )
                }
              >
                Editar Post
              </button>
              <button onClick={() => deleteUser(setUsers, user?.id)}>
                Deletar Post
              </button>
            </div>
          ))
        ) : (
          <div className="App">
            <header className="App-header">Carregando</header>
          </div>
        )}
        <button onClick={() => addUser(setUsers, nome, descricao, users)}>
          Create Post
        </button>
      </header>
    </div>
  )
}

export default App
