interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(args: IPersonData) {
        this._name = args.name;
        this._secondName = args.secondName;
        this._age = args.age;
    }

    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;

    constructor(args: IStudentData) {
        super(args);
        this._phone = args.phone;
    }

    getData(): IStudentData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
    }
}
