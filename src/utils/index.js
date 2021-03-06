/**
 * setNavigatorLanguage
 * @function
 * @description retorno el lenguage para el primer render
 */
export const setNavigatorLanguage = () => {
  const value = JSON.parse(window.localStorage.getItem("language"))
  return value !== null
    ? value
    : navigator.language.includes("es")
    ? "es"
    : "en"
}

/**
 * handleMapArrayProducts
 * @function
 * @description cuento cuantos elemntos como item hay en el carrito
 * @param {array}
 * @returns {array}
 */
export const handleMapArrayProducts = (cartItems) => {
  // obtengo contadores de elementos repetidos
  const counters = cartItems.reduce((acc, item) => {
    acc[item.id] = ++acc[item.id] || 1
    return acc
  }, {})

  // elimino repetidos
  const idArr = cartItems.map((item) => item.id)
  const newArr = new Set(idArr)
  const idArrNoRepeat = [...newArr]

  // nuevo array con info y contador
  const auxArr = []
  for (let i = 0; i < idArrNoRepeat.length; i++) {
    const data = cartItems.find((itemCart) => {
      return itemCart.id === idArrNoRepeat[i]
    })
    let newData = data
    newData = { ...data, count: counters[data.id] }
    data && auxArr.push(newData)
  }

  return auxArr
}

/**
 * handleMapArraySelectFormat
 * @function
 * @param {array} data
 * @returns {array}
 * @description retorna un nuevo array con el formato usado en el componente CustomSelect
 */
export const handleMapArraySelectFormat = (data) =>
  data && data.length && data.map((item) => ({ value: item, text: item }))

/**
 * handleTotalPrice
 * @function
 * @description Calculo el total del carrito
 * @param {array} products
 * @returns {number} total
 */
export const handleTotalPrice = (products) => {
  const initialValue = 0
  return (
    products &&
    products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    )
  )
}
