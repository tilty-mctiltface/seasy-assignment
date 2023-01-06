const t9 = new Map()
t9.set('2', ['a', 'b', 'c'])
t9.set('3', ['d', 'e', 'f'])
t9.set('4', ['g', 'h', 'i'])
t9.set('5', ['j', 'k', 'l'])
t9.set('6', ['m', 'n', 'o'])
t9.set('7', ['p', 'q', 'r', 's'])
t9.set('8', ['t', 'u', 'v'])
t9.set('9', ['w', 'x', 'y', 'z'])

export const getT9Combination = (fromNumber: string) => {
    
    let numberArrays = fromNumber.toString().split('')
                        .map((num: string) => t9.get(num) || ['']);

    return numberArrays.reduce((currentArray, nextArray) => {
      const results: string[] = []
      currentArray.reduce((_: any, nextValue: string) => {
       [...nextArray].map(num => results.push(`${nextValue}${num}`))
      }, '')
      return results
    })
}