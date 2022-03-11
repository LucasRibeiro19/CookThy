const numbers = [1, 2, 3]

const addBegin = (arr, elm) => {
    return [elm, ...arr]
}

const addEnd = (arr, elm) => {
    return [...arr, elm]
}

const insertMiddle = (arr, elm) => {
    const out = arr
    console.log(out)
    out.splice(1, 0, 0)
    console.log(out)
    return (arr.length %2 == 0) ? out.splice(arr.length/2, 0, elm) : out.splice(Math.floor(arr.length/2),0,elm)
}

//console.log(insertMiddle(numbers,0))

let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
prime_numbers.splice(4, 0, 13);

const arr = ['Coucou', 'Hello', 'Guten Tag']
arr.concat(prime_numbers)
console.log(arr)

const str = arr.join('&heath=')
console.log(str)


let url = 'a';
url += 'b';
console.log(url)