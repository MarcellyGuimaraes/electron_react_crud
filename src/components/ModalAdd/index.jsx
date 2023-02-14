import { useState } from 'react'
import { addUser } from '../../assets/crud'
import { validateCPF } from '../../assets/validate'
import Input from '../Input'

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
                <Input
                  value={nome}
                  set={setNome}
                  id="nome"
                  placeholder="Digite o nome"
                />

                <Input
                  value={cpf}
                  set={setCpf}
                  id="cpf"
                  placeholder="Digite o cpf"
                />

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
