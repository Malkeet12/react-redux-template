const getLocalStorageMethods = () => {
  try {
    if (window.localStorage) {
      return {
        get: key => {
          let val
          try {
            val = JSON.parse(window.localStorage.getItem(key))
          } catch (e) {
            console.log('Error in parsing JSON. Tried to parse:', key)
          }
          return val
        },
        remove: key => {
          return window.localStorage.removeItem(key)
        },
        set: (key, data) => {
          return window.localStorage.setItem(key, JSON.stringify(data))
        },
        clear: () => {
          return window.localStorage.clear()
        }
      }
    }
  } catch (e) {
    console.log(e)
    alert('Please allow 3rd party cookies for this site in your browser\'s Site Settings.')
    return {}
  }
}

const DataUtil = {
  localStorageMethods: getLocalStorageMethods()
}

export default DataUtil
