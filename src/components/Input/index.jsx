import React from 'react'

const Input = ({ value, set, placeholder, id }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Nome
      </label>
      <input
        type="text"
        name={id}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        value={value}
        onChange={(e) => set(e.target.value)}
        required
      />
    </div>
  )
}

export default Input
