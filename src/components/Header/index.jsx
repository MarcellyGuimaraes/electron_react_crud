import React from 'react'

const Header = ({ openModal }) => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Lista Usuários
          </span>
        </span>
        <div class="flex md:order-2">
          <button
            type="button"
            onClick={openModal}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Adicionar usuário
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
