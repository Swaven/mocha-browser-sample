'use strict'

class Myclass{

  foo(value){
    return 2 * value
  }

  prom(value){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value === 'coin')
          reject('invalid value')
        else
          resolve(value)
      }, 500)
    })
  }
}