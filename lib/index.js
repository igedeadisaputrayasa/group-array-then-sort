import sortBy from 'sort-by'

export default (array, groupByKey, sortByKey) => {
  return new Promise((resolve, reject) => {
    try {
      let returnObject = {}
      array.forEach((value, index) => {
        // No key present in value, skip this iteration
        if (!value[groupByKey]) return

        // Ensure the key is present in the returnObject
        if (!returnObject[value[groupByKey]]) {
          returnObject[value[groupByKey]] = []
        }

        // Push the value into the array
        returnObject[value[groupByKey]].push(value)
      })
      let objKeys = Object.keys(returnObject)
      let i = 0
      for (let key in returnObject) {
        returnObject[key] = returnObject[key].sort(sortBy(sortByKey))
        if( i === objKeys.length ){
          return resolve(returnObject)
        }
      }
    } catch (e) {
      console.log(e)
      reject(e)
    }
  })
}