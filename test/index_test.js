import groupArrayThenSort from '../'

const obj = [{
  name: 'John',
  subject: 'English',
  score: 76,
  teacher: 'Mr Bob'
}, {
  name: 'John',
  subject: 'Science',
  score: 77,
  teacher: 'Mr Jim'
}, {
  name: 'John',
  subject: 'Maths',
  score: 56,
  teacher: 'Mr Ben'
}, {
  name: 'Janine',
  subject: 'Science',
  score: 62,
  teacher: 'Mr Jim'
}, {
  name: 'Janine',
  subject: 'Maths',
  score: 41,
  teacher: 'Mr Ben'
}]

describe('Check the grouping and sorting', () => {
  it('Grouping by name creates a single object with the following three keys John Janine Bob', (done) => {
    groupArrayThenSort(obj, 'name').then((sortedObj) => {
      let keys = Object.keys(sortedObj)
      if (keys.length === 2) {
        if (keys.indexOf('John') !== -1 && keys.indexOf('Janine') !== -1) {
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

  it('Group by name then sort child object by key subject returns expected order', (done) => {
    groupArrayThenSort(obj, 'name', 'subject').then((sortedObj) => {
      if (sortedObj['John'][0]['subject'] === 'English') {
        done()
      } else {
        done('Incorrect order from ordering on string values')
      }
    }).catch((e) => {
      done(e)
    })
  })

  it('Group by name then sort child object by key score returns expected order', (done) => {
    groupArrayThenSort(obj, 'name', 'score').then((sortedObj) => {
      if (sortedObj['John'][0]['subject'] === 'Science') {
        done()
      } else {
        done('Incorrect order from ordering on numeric values')
      }
    }).catch((e) => {
      done(e)
    })
  })

  it('Group by name then sort child object by key score order descending returns expected order in revers', (done) => {
    groupArrayThenSort(obj, 'name', 'score', 'desc').then((sortedObj) => {
      if (sortedObj['John'][0]['subject'] === 'Maths') {
        done()
      } else {
        done('Incorrect order from ordering on numeric values')
      }
    }).catch((e) => {
      done(e)
    })
  })

  it('Group by name then sort child object by key subject order descending returns expected order in revers', (done) => {
    groupArrayThenSort(obj, 'name', 'subject', 'desc').then((sortedObj) => {
      console.log(sortedObj)
      if (sortedObj['John'][0]['subject'] === 'Science') {
        done()
      } else {
        done('Incorrect order from ordering on numeric values')
      }
    }).catch((e) => {
      done(e)
    })
  })
})