import groupArrayThenSort from '../'

const obj = [{
  name: 'John',
  colours: [
    'brown',
    'blue',
    'green'
  ]
}, {
  name: 'Janine',
  colours: [
    'pink'
  ]
}, {
  name: 'Janine',
  colours: [
    'crimson',
    'maroon'
  ]
}, {
  name: 'Bob',
  colours: [
    'plum',
    'blue',
    'indigo'
  ]
}]

describe('Check the grouping and sorting', () => {
  it('Grouping by name creates a single object with the following three keys John Janine Bob', async (done) => {
    groupArrayThenSort(obj, 'name').then((sortedObj) => {
      let keys = Object.keys(sortedObj)
      console.log(sortedObj)
      console.log(123)
      if (keys.length === 3) {
        if (keys.indexOf('John') !== -1 && keys.indexOf('Janine') !== -1 && keys.indexOf('Bob') !== -1) {
          done()
        } else {
          done('Expected keys not found')
        }
      } else {
        done('Expected qty keys not found')
      }
    }).catch((e) => {
      done(e)
    })

  })
})
