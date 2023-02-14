import { useState } from 'react'
import { addUser } from '../../assets/crud'
import { validateCPF } from '../../assets/validate'

const ModalAdd = ({ show, onClose, get, users }) => {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [isValidCpf, setIsValidCpf] = useState(null)

  if (!show) {
    return null
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={onClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg dark:bg-slate-800">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Adicionar novo usuário
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Nome Usuário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cpf"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CPF
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                  />
                </div>

                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={() => {
                    if (validateCPF(cpf, setIsValidCpf, isValidCpf) === true) {
                      addUser(get, nome, cpf, users)
                      setNome('')
                      setCpf('')
                      onClose()
                    } else {
                      console.log('Digite um cpf válido')
                    }
                  }}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Adicionar usuário
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalAdd
