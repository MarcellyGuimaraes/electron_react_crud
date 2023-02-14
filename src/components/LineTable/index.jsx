import React, { useState } from 'react'
import { deleteUser } from '../../assets/crud'
import ModalEdit from '../ModalEdit'

const LineTable = ({ id, nome, cpf, setUsers, users }) => {
  const [showEdit, setShowEdit] = useState(false)
  const [modalEdit, setModalEdit] = useState()

  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
        {nome}
      </td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {cpf}
      </td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => {
            setShowEdit(true)
            setModalEdit(modalEdit)
          }}
        >
          Editar
        </button>
        <button
          className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => deleteUser(setUsers, id, users)}
        >
          Deletar
        </button>
      </td>
      <ModalEdit
        refresh={setUsers}
        show={showEdit}
        onClose={() => setShowEdit(false)}
        users={users}
        id={id}
        nomeInicial={nome}
        cpfInicial={cpf}
      />
    </tr>
  )
}

export default LineTable
