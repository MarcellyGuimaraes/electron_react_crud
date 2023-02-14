import { useEffect, useState } from 'react'
import './App.css'
import { deleteUser, editUser, getUser } from './assets/crud'
import Header from './components/Header'
import ModalAdd from './components/ModalAdd'
import ModalEdit from './components/ModalEdit'

function App() {
  const [users, setUsers] = useState()
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

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
    <div class="flex flex-col">
      <Header openModal={() => setShowAdd(true)} />
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <thead class="border-b bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Cpf
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr class="bg-white border-b" key={index}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.nome}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.cpf}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={
                          () => setShowEdit(true)
                          // editUser(user.id, setUsers, nome, cpf, users)
                        }
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteUser(setUsers, user.id, users)}
                      >
                        Deletar
                      </button>
                    </td>
                    <ModalEdit
                      get={setUsers}
                      show={showEdit}
                      onClose={() => setShowEdit(false)}
                      users={users}
                      id={user.id}
                      nomeInicial={user.nome}
                      cpfInicial={user.cpf}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalAdd
        get={setUsers}
        show={showAdd}
        onClose={() => setShowAdd(false)}
        users={users}
      />
    </div>
  )
}

export default App
