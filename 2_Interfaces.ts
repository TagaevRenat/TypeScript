//Интерфейсы в TS
interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 15,
        height: 20
    },
}

rect1.color = 'blue'

const rect2 = {} as Rect
const rect3 = <Rect>{}

//Наследование интерфейсов
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '1234',
    size: {
        width: 10,
        height: 42
    },
    getArea(): number {
        return this.size.height * this.size.height
    }
}

//Создание класса от интерфейса
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date
    }
}

//Расширение интерфейса
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    margin: '15px',
    backgroundColor: '#ccc'
}