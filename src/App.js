import { useEffect, useState } from 'react'
import { getUser } from './assets/crud'
import Header from './components/Header'
import LineTable from './components/LineTable'
import ModalAdd from './components/ModalAdd'

function App() {
  const [users, setUsers] = useState()
  const [showAdd, setShowAdd] = useState(false)

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
    <div className="flex flex-col">
      <Header openModal={() => setShowAdd(true)} />
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="text-md font-medium text-white px-6 py-4"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-white px-6 py-4"
                  >
                    Cpf
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-white px-6 py-4"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <LineTable
                    key={user.id}
                    id={user.id}
                    nome={user.nome}
                    cpf={user.cpf}
                    setUsers={setUsers}
                    users={users}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalAdd
        refresh={setUsers}
        show={showAdd}
        onClose={() => setShowAdd(false)}
        users={users}
      />
    </div>
  )
}

export default App
