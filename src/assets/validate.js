export const validateCPF = (cpf, set, valid) => {
  const regex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/
  if (!regex.test(cpf)) {
    return false
  }

  cpf = cpf.replace(/\D/g, '')
  set(true)
  return valid
}
