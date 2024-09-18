// let message: string = "Hello, World!";
// console.log(message);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface Vehicle {
// 	brand: string;
// 	model: string;
// 	viewDetails(): void;
// }
// abstract class BaseVehicle implements Vehicle {
// 	brand: string;
// 	model: string;
// 	constructor(brand: string, model: string) {
// 		this.brand = brand;
// 		this.model = model;
// 	}
// 	viewDetails(): void {
// 		console.log(`The vehicle is a ${this.brand}, ${this.model}`);
// 	}
// 	abstract vehicleType(): string;
// }
// class Car extends BaseVehicle {
// 	brand: string;
// 	model: string;
// 	typology: string;
// 	constructor(brand: string, model: string, typology: string) {
// 		super(brand, model);
// 		this.brand = brand;
// 		this.model = model;
// 		this.typology = typology;
// 	}
// 	viewDetails(): void {
// 		console.log(`The ${this.typology} is a ${this.brand}, model ${this.model}`);
// 	}
// 	vehicleType(): string {
// 		return `The ${this.typology} is a ${this.brand}, model ${this.model}`;
// 	}
// }
// let car: Car = new Car("Mini", "Electric", "Car");
// car.viewDetails();
// console.log(car);
// type Employee = {
// 	name: string;
// 	startDate: string;
// };
// type Manager = {
// 	name: string;
// 	department: string;
// };
// type ManagerEmployee = Employee & Manager;
// let newManager: ManagerEmployee = {
// 	name: "Alice",
// 	startDate: new Date().toString(),
// 	department: "HR"
// };
// // Intersection type
// let typeAB: string & number;
// // Union type
// let varName: string | number;
// // Example
// interface BusinessPartner {
// 	name: string;
// 	credit: number;
// }
// interface Identity {
// 	id: number;
// 	name: string;
// }
// interface Contact {
// 	email: string;
// 	phone: string;
// }
// type PersonEmployee = Identity & Contact;
// type Customer = BusinessPartner & Contact;
// function isEmployee(x: any): x is Employee {
// 	return x && typeof x.name === "string" && x.startDate instanceof Date;
// }
// function getDepartment(emp: Employee | Manager) {
// 	if (isEmployee(emp)) {
// 		// emp viene trattato come Employee qui
// 		console.log(emp.startDate);
// 	} else {
// 		// emp viene trattato come Manager qui
// 		console.log(emp.department);
// 	}
// }
// type alphanumeric = string | number;
// function add(a: alphanumeric, b: alphanumeric) {
// 	if (typeof a === "number" && typeof b === "number") {
// 		return a + b;
// 	}
// 	if (typeof a === "string" && typeof b === "string") {
// 		return a.concat(b);
// 	}
// 	throw new Error(
// 		"Invalid arguments. Both arguments must be either numbers or strings."
// 	);
// }
// class CustomerAccount {
// 	isCreditAllowed(): boolean {
// 		// ...
// 		return true;
// 	}
// }
// class Supplier {
// 	isInShortList(): boolean {
// 		// ...
// 		return true;
// 	}
// }
// type PartnerBusiness = CustomerAccount | Supplier;
// // function signContract(partner: PartnerBusiness): string {
// // 	let message: string;
// // 	if (partner instanceof CustomerAccount) {
// // 		message = partner.isCreditAllowed()
// // 			? "Sign a new contract with the customer"
// // 			: "Credit issue";
// // 	}
// // 	if (partner instanceof Supplier) {
// // 		message = partner.isInShortList()
// // 			? "Sign a new contract the supplier"
// // 			: "Need to evaluate further";
// // 	}
// // 	return message;
// // }
// function isCustomer(partner: any): partner is CustomerAccount {
// 	return partner instanceof CustomerAccount;
// }
// // function signNewContract(partner: BusinessPartner): string {
// // 	let message: string;
// // 	if (isCustomer(partner)) {
// // 		message = partner.isCreditAllowed()
// // 			? "Sign a new contract with the customer"
// // 			: "Credit issue";
// // 	} else {
// // 		message = partner.isShortList()
// // 			? "Sign a new contract the supplier"
// // 			: "Need to evaluate further";
// // 	}
// // 	return message;
// // }
// let input = document.getElementById("myInput") as HTMLInputElement;
// let secondInput = <HTMLInputElement>document.getElementById("mySecondInput");
// secondInput.value = "Hello, World!";
// let someValue: any = "this is a string.";
// let strLength: number = (someValue as string).length;
// let strLengthTwo: number = (<string>someValue).length;
// export interface Validator {
// 	isValies(s: string): boolean;
// }
// interface ValidatorTwo {
// 	isValid(s: string): boolean;
// }
// export { ValidatorTwo };
// interface ValidatorThree {
// 	isValid(s: string): boolean;
// }
// export { ValidatorThree as StringValidator };
// class EmailValidator implements ValidatorThree {
// 	isValid(s: string): boolean {
// 		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 		return emailRegex.test(s);
// 	}
// }
// export { EmailValidator };
// class ZipCodeValidator implements ValidatorThree {
// 	isValid(s: string): boolean {
// 		const numberRegexp = /^[0-9]+$/;
// 		return s.length === 5 && numberRegexp.test(s);
// 	}
// }
// export { ZipCodeValidator };
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greetings = function () {
        console.log("Ciao, mi chiamo ".concat(this.name, " e ho ").concat(this.age, " anni."));
    };
    return Person;
}());
var personOne = new Person("X", 23);
personOne.greetings();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, course) {
        var _this = _super.call(this, name, age) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.greetings = function () {
        _super.prototype.greetings.call(this);
        console.log("Studio ".concat(this.course));
    };
    return Student;
}(Person));
var studentOne = new Student("Bob", 23, "Web Development");
studentOne.greetings();
// metodo basico di creazione classes prima del constructor
// appena visto
function PersonConstructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
PersonConstructor.prototype.getFullName = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
};
// metodo moderno
// class in JavaScript
var PersonGuideJS = /** @class */ (function () {
    function PersonGuideJS(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonGuideJS.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonGuideJS;
}());
// class in TypeScript
var PersonGuideTS = /** @class */ (function () {
    function PersonGuideTS(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonGuideTS.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonGuideTS;
}());
var personFromGuide = new PersonGuideTS("171-28-0926", "John", "Doe");
console.log(personFromGuide.getFullName());
// ereditariertà delle classes
var ParentPerson = /** @class */ (function () {
    function ParentPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ParentPerson.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    ParentPerson.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return ParentPerson;
}());
var ChildEmployee = /** @class */ (function (_super) {
    __extends(ChildEmployee, _super);
    function ChildEmployee(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    ChildEmployee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + "I'm a ".concat(this.jobTitle, ".");
    };
    return ChildEmployee;
}(ParentPerson));
var childEmployee = new ChildEmployee("John", "Doe", "Web Developer");
console.log(childEmployee.describe());
// Output:
// ---> This is John Doe. I'm a Web Developer.
// access modifers
// private modifier
var PrivatePerson = /** @class */ (function () {
    function PrivatePerson(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PrivatePerson.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PrivatePerson;
}());
// public modifier - di default se vuoto
var PublicMethodPerson = /** @class */ (function () {
    function PublicMethodPerson(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PublicMethodPerson.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PublicMethodPerson;
}());
// protectd modifier
var ProtectedPerson = /** @class */ (function () {
    function ProtectedPerson(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ProtectedPerson.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return ProtectedPerson;
}());
// sintetic class
var SinteticPerson = /** @class */ (function () {
    function SinteticPerson(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    SinteticPerson.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return SinteticPerson;
}());
// getter and setter
var GetSetPerson = /** @class */ (function () {
    function GetSetPerson(name) {
        this._name = name;
    }
    Object.defineProperty(GetSetPerson.prototype, "name", {
        // Getter
        get: function () {
            return this._name;
        },
        // Setter
        set: function (value) {
            if (value.length > 0) {
                this._name = value;
            }
            else {
                console.log("Errore: il name non può essere vuoto");
            }
        },
        enumerable: false,
        configurable: true
    });
    return GetSetPerson;
}());
var getSetPerson = new GetSetPerson("Alice");
console.log(getSetPerson.name); // utilizza il getter
getSetPerson.name = "Bob"; // utilizza il setter
console.log(getSetPerson.name); // Bob
// getSetPerson.name = ""; // Errore il name non può essere vuoto
// ulteriore esempio getter / setter
var SetGetPerson = /** @class */ (function () {
    // properties private con _name
    function SetGetPerson(age, firstName, lastName) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(SetGetPerson.prototype, "age", {
        // metodo getter
        get: function () {
            return this._age;
        },
        // metodo setter
        set: function (theAge) {
            // controllo validità prima di impostazione
            if (theAge <= 0 || theAge >= 200) {
                throw new Error("The age is invalid");
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    SetGetPerson.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return SetGetPerson;
}());
var setGetPerson = new SetGetPerson(22, "John", "Doe");
// uso del setter, 23 é la value da impostare
setGetPerson.age = 23;
// uso del getter
console.log(setGetPerson.age);
var GetterSetterPerson = /** @class */ (function () {
    function GetterSetterPerson(age, firstName, lastName) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(GetterSetterPerson.prototype, "age", {
        get: function () {
            // accessor
            return this._age;
        },
        set: function (theAge) {
            // mutator
            if (theAge <= 0 || theAge >= 200) {
                throw new Error("The age is invelid");
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GetterSetterPerson.prototype, "firstName", {
        get: function () {
            // accessor
            return this._firstName;
        },
        set: function (theFirstName) {
            // mutator
            if (!theFirstName) {
                throw new Error("Invalid first name.");
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GetterSetterPerson.prototype, "lastName", {
        get: function () {
            // accessor
            return this._lastName;
        },
        set: function (theLastName) {
            // mutator
            if (!theLastName) {
                throw new Error("Invalid last name.");
            }
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GetterSetterPerson.prototype, "fullName", {
        get: function () {
            // accessor
            return "".concat(this.firstName, " ").concat(this._lastName);
        },
        set: function (name) {
            // mutator
            var parts = name.split(" ");
            if (parts.length !== 2) {
                throw new Error("Invalid name format: first last");
            }
            this._firstName = parts[0];
            this._lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    return GetterSetterPerson;
}());
var getterSetterPerson = new GetterSetterPerson(23, "Jane", "Doe");
getterSetterPerson.fullName = "Jane Smith";
console.log(getterSetterPerson.fullName); // Jane Smith
// abstract class
var AnimalClass = /** @class */ (function () {
    function AnimalClass() {
    }
    // metodo con implementazione
    AnimalClass.prototype.sleep = function () {
        console.log("The animal is sleeping.");
    };
    return AnimalClass;
}());
var DogClass = /** @class */ (function (_super) {
    __extends(DogClass, _super);
    function DogClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogClass.prototype.makeSound = function () {
        console.log("Bau");
    };
    return DogClass;
}(AnimalClass));
// let myAnimal = new AnimalClass() // Error
var myDog = new DogClass();
myDog.makeSound(); // Bau
myDog.sleep(); // The animal is sleeping.
// abstract class documentation
var EmployeeClass = /** @class */ (function () {
    function EmployeeClass(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(EmployeeClass.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        enumerable: false,
        configurable: true
    });
    EmployeeClass.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month.");
    };
    return EmployeeClass;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(_firstName, _lastName, _salary) {
        var _this = _super.call(this, _firstName, _lastName) || this;
        _this._salary = _salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this._salary;
    };
    return FullTimeEmployee;
}(EmployeeClass));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(_firstName, _lastName, _rate, _hours) {
        var _this = _super.call(this, _firstName, _lastName) || this;
        _this._rate = _rate;
        _this._hours = _hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this._rate * this._hours;
    };
    return Contractor;
}(EmployeeClass));
var john = new FullTimeEmployee("John", "Doe", 12000);
var jane = new Contractor("Jane", "Doe", 100, 160);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
var VideoPerson = /** @class */ (function () {
    function VideoPerson(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    VideoPerson.prototype.presents = function () {
        console.log("Ciao, sono ".concat(this.name, " ").concat(this.lastName));
    };
    VideoPerson.prototype.sayHi = function (person) {
        console.log("Ciao ".concat(person.name, " ").concat(person.lastName, ", molto piacere."));
    };
    VideoPerson.sayGoodbye = function (person) {
        console.log("Ciao ".concat(person.name, " ").concat(person.lastName, ", molto piacere."));
    };
    return VideoPerson;
}());
var person1 = new VideoPerson("Luca", "Rossi");
var person2 = new VideoPerson("Mario", "Verdi");
person1.presents();
person1.sayHi(person2);
person1.sayHi(person1);
var VideoStudent = /** @class */ (function (_super) {
    __extends(VideoStudent, _super);
    function VideoStudent(name, lastName, favoriteSubj) {
        var _this = _super.call(this, name, lastName) || this;
        _this.favoriteSubj = favoriteSubj;
        return _this;
    }
    VideoStudent.prototype.showFavorite = function () {
        console.log("Adoro ".concat(this.favoriteSubj));
    };
    VideoStudent.prototype.change = function () {
        this.favoriteSubj = "Yellow";
    };
    return VideoStudent;
}(VideoPerson));
var videoStudent = new VideoStudent("Giovanni", "Neri", "Storia");
videoStudent.sayHi(person1);
// videoStudent.sayGoodbye(person1); // Error
VideoStudent.sayGoodbye(person2);
// VideoStudent.showFavorite(); // Error
videoStudent.showFavorite();
// singleton
var SingletonPrincipal = /** @class */ (function () {
    function SingletonPrincipal(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    SingletonPrincipal.getInstance = function () {
        if (SingletonPrincipal.instance) {
            return this.instance;
        }
        this.instance = new SingletonPrincipal("Marco", "Verdi");
        return this.instance;
    };
    SingletonPrincipal.prototype.present = function () {
        console.log("Buongiorno, sono il preside ".concat(this.name, " ").concat(this.lastName));
    };
    return SingletonPrincipal;
}());
SingletonPrincipal.getInstance().present();
// let testPrincipal = new SingletonPrincipal(); // Error
// esercizio start2impact classes / abstract classes
var ExerciseVehicle = /** @class */ (function () {
    function ExerciseVehicle(brand) {
        this._brand = brand;
    }
    ExerciseVehicle.prototype.move = function () {
        console.log("The vehicle is moving.");
    };
    return ExerciseVehicle;
}());
var ExerciseCar = /** @class */ (function (_super) {
    __extends(ExerciseCar, _super);
    function ExerciseCar(_brand, _model) {
        var _this = _super.call(this, _brand) || this;
        _this._model = _model;
        return _this;
    }
    // displayBrand(): void {
    // 	console.log(`This car is a ${this._brand} ${this._model}`);
    // }
    ExerciseCar.prototype.displayBrand = function () {
        return "This car is a ".concat(this._brand, " ").concat(this._model);
    };
    Object.defineProperty(ExerciseCar.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            if (value.length === 0) {
                throw new Error("Invalid name");
            }
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    return ExerciseCar;
}(ExerciseVehicle));
var exerciseCar = new ExerciseCar("Mini Cooper", "Eletric");
console.log(exerciseCar.displayBrand());
exerciseCar.model = "Full Eletric";
// exerciseCar.displayBrand();
// oppure
console.log(exerciseCar.displayBrand());
exerciseCar.move();
var DogInterfaceClass = /** @class */ (function () {
    function DogInterfaceClass(name, age) {
        this.name = name;
        this.age = age;
    }
    DogInterfaceClass.prototype.makeSound = function () {
        console.log("Bau.");
    };
    return DogInterfaceClass;
}());
var myInterfaceDog = new DogInterfaceClass("Buddy", 5);
myInterfaceDog.makeSound();
// console.log("Here");
// interfaces documentation
// esempio funzione basico
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var personFunc = {
    firstName: "John",
    lastName: "Function"
};
console.log(getFullName(personFunc));
function getFullNameFromInterface(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var johnInterface = {
    firstName: "John",
    lastName: "Interface"
};
console.log(getFullNameFromInterface(johnInterface));
// oppure
function getFullNameSintetic(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName, " ").concat(lastName);
}
// verrà accettato qualsiasi object con le properties firstName e lastName
var janeInterface = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Interface",
    age: 23
};
var janeFullName = getFullNameSintetic(janeInterface);
console.log(janeFullName);
function getFullNameWithOptional(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var janeWithOptional = getFullNameWithOptional(janeInterface);
console.log(janeWithOptional);
var readOnlyPerson;
readOnlyPerson = {
    ssn: "171-28-0926",
    firstName: "John",
    lastName: "Readonly"
};
console.log(readOnlyPerson);
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("Hi", true));
// anche con names differenti - esempio equivalente a quello soprastante
var formatTwo;
formatTwo = function (src, upper) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};
console.log(formatTwo("hi", true));
var JsonPerson = /** @class */ (function () {
    function JsonPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    JsonPerson.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return JsonPerson;
}());
var jsonPerson = new JsonPerson("John", "Doe");
console.log(jsonPerson.toJson());
var BaseVehicleClass = /** @class */ (function () {
    function BaseVehicleClass(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    BaseVehicleClass.prototype.showDetails = function () {
        console.log("This is a vehicle.");
    };
    return BaseVehicleClass;
}());
var CarClass = /** @class */ (function (_super) {
    __extends(CarClass, _super);
    function CarClass(vehicleType, brand, model) {
        var _this = _super.call(this, brand, model) || this;
        _this.vehicleType = vehicleType;
        return _this;
    }
    CarClass.prototype.typeVehicle = function () {
        return "This is a ".concat(this.vehicleType);
    };
    CarClass.prototype.showDetails = function () {
        console.log("This ".concat(this.vehicleType, " is a ").concat(this.brand, " ").concat(this.model));
    };
    return CarClass;
}(BaseVehicleClass));
var testVehicle = new CarClass("Car", "Mini Cooper", "Full Eletric");
testVehicle.showDetails();
console.log(testVehicle.typeVehicle());
// 2. Definizione della Classe Astratta VeicoloBase
var VeicoloBase = /** @class */ (function () {
    function VeicoloBase(marca, modello) {
        this.marca = marca;
        this.modello = modello;
    }
    // Implementazione di displayDettagli dell'interfaccia Veicolo
    VeicoloBase.prototype.displayDettagli = function () {
        console.log("Marca: ".concat(this.marca, ", Modello: ").concat(this.modello, ", Tipo: ").concat(this.tipoVeicolo()));
    };
    return VeicoloBase;
}());
// 3. Definizione della Sottoclasse Auto
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Auto.prototype.tipoVeicolo = function () {
        return "Auto";
    };
    return Auto;
}(VeicoloBase));
// 4. Utilizzo delle Classi e Interfacce
var miaAuto = new Auto("Fiat", "500");
miaAuto.displayDettagli(); // Output: Marca: Fiat, Modello: 500, Tipo: Auto
var newManagerTwo = {
    name: "Alice",
    startDate: new Date().toString(),
    department: "HR"
};
console.log(newManagerTwo);
// ---> combina
// union type
var varEmployee;
var customerTest = {
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735"
};
console.log(customerTest);
// note: se stessa proeprty in più interface si necessita stesso...
// type
// type guard primo esempio
function isEmployeeFunc(x) {
    return x && typeof x.name === "string" && x.startDate instanceof Date;
}
function getDepartmentFunc(emp) {
    if (isEmployeeFunc(emp)) {
        console.log(emp.startDate);
    }
    else {
        console.log(emp.department);
    }
}
// si definisce un type alphanumeric che può ospitare string o number
function addFunc(a, b) {
    // add usa due parametri che sono entrambi di type alphanumeric
    if (typeof a === "number" && typeof b === "number") {
        // controlla se sono numeri
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        // controlla se sono stringhe
        return a.concat(b);
    }
    throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");
}
// usando instanceof
// ---------------------
var CustomerAccountClass = /** @class */ (function () {
    function CustomerAccountClass() {
    }
    CustomerAccountClass.prototype.isCreditAllowed = function () {
        return true;
    };
    return CustomerAccountClass;
}());
var SupplierClass = /** @class */ (function () {
    function SupplierClass() {
    }
    SupplierClass.prototype.isInShortList = function () {
        return true;
    };
    return SupplierClass;
}());
// function signContractFunc(partner: PartnerBusinessType): string {
// 	let message: string;
// 	if (partner instanceof CustomerAccountClass) {
// 		message = partner.isCreditAllowed()
// 			? "Sign a new contract with the customer"
// 			: "Credit issue";
// 	}
// 	if (partner instanceof SupplierClass) {
// 		message = partner.isInShortList()
// 			? "Sign a new contract the supplier"
// 			: "Need to evaluate further";
// 	}
// 	return message;
// }
// Esempio non funzionante, solo teorico
// ---------------------
// usando in
function signContractIn(partner) {
    var message;
    if ("isCreditAllowed" in partner) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    else {
        message = partner.isInShortList()
            ? "Sign a new contract the supplier"
            : "Need to evaluate further";
    }
    return message;
}
// user-defined type guards
function isCustomerFunc(partner) {
    return partner instanceof CustomerAccountClass;
}
function signNewContractFunc(partner) {
    var message;
    if (isCustomerFunc(partner)) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    else {
        message = partner.isInShortList()
            ? "Sign a new contract the supplier"
            : "Need to evaluate further";
    }
    return message;
}
// type casting
// realizzabile con <type> o con as type
var firstInput = document.getElementById("myInput");
console.log(firstInput);
var secondInput = document.getElementById("mySecondInput");
console.log(secondInput);
// type casting / type assertion
// const firstElem = document.querySelector("input['type=text']");
// const assetInput = firstElem as HTMLInputElement;
// console.log(assetInput.value);
var secondElem = document.querySelector("body");
var assetBody = secondElem;
console.log(assetBody.children);
// altro modo
// let enteredText = (firstElem as HTMLInputElement).value;
// sintassi type assertion
// let a: typeA;
// let b = a as typeB;
// type assertion con operatore <>
var inputBrackets = (document.querySelector("input[type='text']"));
// console.log(inputBrackets.value);
// sintassi
// let a: typeA;
// let b = <typeA>a;
// type assertion start2impact
var someValueTest = "this is a string";
var strLengthTest = someValueTest.length;
console.log(strLengthTest);
// oppure
var strLengthTestTwo = someValueTest.length;
console.log(strLengthTestTwo);
