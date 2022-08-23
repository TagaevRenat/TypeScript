//Generic

const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5,]
const arrayOfStrings: Array<string> = ['hello', 'its me']

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)