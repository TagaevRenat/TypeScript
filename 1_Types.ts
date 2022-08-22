// Типы данных в TS
//boolean
const isfetching: boolean = true
const isLoading: boolean = false
//number
const int: number = 42
//string
const message: string = 'Hello TypeScript'
//Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
//Tuple
const contact: [string, number] = ['Renat', 89992463475]
//Изменение типа с помощью Any
let variable: any = 42
variable = 'string'
//Тип данных в агрументах функции
function sayMyName(name: string): void {
    console.log(name)
}
//Never
function throwError(message: string): never {
    throw new Error(message)
}
throwError('Acses denied')
//Type
type Login = string
const login: Login = ('Renat')
type ID = string | number
const id1: ID = 123
const id2: ID = 'Renat'