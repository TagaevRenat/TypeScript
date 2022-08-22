//Классы и модификаторы
class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}: TypeScript version is  ${this.version}]`
    }
}


class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}
//Альтренативный вариант создания класса
// class Car {
//     readonly numberOfWeels: number = 4
//     constructor(readonly model: string){}
// }

class Animal {
    protected voice: string = ''
    color: string = 'grey'
    private go() {
        console.log('Go!')
    }
}

class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
//Поля protected доступны классу Animal и всем дочерним
//Поля private доступны только классу Animal

//Абстрактные классы 
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return `This is info`
    }
}