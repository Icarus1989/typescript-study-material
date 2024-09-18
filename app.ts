// let message: string = "Hello, World!";
// console.log(message);

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

class Person {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	greetings(): void {
		console.log(`Ciao, mi chiamo ${this.name} e ho ${this.age} anni.`);
	}
}

let personOne = new Person("X", 23);
personOne.greetings();

class Student extends Person {
	course: string;
	constructor(name: string, age: number, course: string) {
		super(name, age);
		this.course = course;
	}
	greetings(): void {
		super.greetings();
		console.log(`Studio ${this.course}`);
	}
}

let studentOne = new Student("Bob", 23, "Web Development");
studentOne.greetings();

// metodo basico di creazione classes prima del constructor
// appena visto

function PersonConstructor(ssn, firstName, lastName) {
	this.ssn = ssn;
	this.firstName = firstName;
	this.lastName = lastName;
}

PersonConstructor.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

// metodo moderno

// class in JavaScript

class PersonGuideJS {
	ssn;
	firstName;
	lastName;
	constructor(ssn, firstName, lastName) {
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// class in TypeScript

class PersonGuideTS {
	ssn: string;
	firstName: string;
	lastName: string;
	constructor(ssn: string, firstName: string, lastName: string) {
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
let personFromGuide = new PersonGuideTS("171-28-0926", "John", "Doe");
console.log(personFromGuide.getFullName());

// ereditariertà delle classes

class ParentPerson {
	constructor(private firstName: string, private lastName: string) {}
	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
	describe(): string {
		return `This is ${this.firstName} ${this.lastName}.`;
	}
}

class ChildEmployee extends ParentPerson {
	constructor(firstName: string, lastName: string, private jobTitle: string) {
		super(firstName, lastName);
	}
	describe(): string {
		return super.describe() + `I'm a ${this.jobTitle}.`;
	}
}

let childEmployee = new ChildEmployee("John", "Doe", "Web Developer");
console.log(childEmployee.describe());

// Output:
// ---> This is John Doe. I'm a Web Developer.

// access modifers

// private modifier

class PrivatePerson {
	private ssn: string;
	private firstName: string;
	private lastName: string;
	constructor(ssn: string, firstName: string, lastName: string) {
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
	// properties non accessibili al di fuori della class
}

// public modifier - di default se vuoto

class PublicMethodPerson {
	private ssn: string;
	private firstName: string;
	private lastName: string;
	constructor(ssn: string, firstName: string, lastName: string) {
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

// protectd modifier

class ProtectedPerson {
	protected ssn: string;
	private firstName: string;
	private lastName: string;
	constructor(ssn: string, firstName: string, lastName: string) {
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	// let properties saranno accessibili dalla class e le subclasses
}

// sintetic class

class SinteticPerson {
	constructor(
		protected ssn: string,
		private firstName: string,
		private lastName: string
	) {
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

// getter and setter

class GetSetPerson {
	private _name: string;
	constructor(name: string) {
		this._name = name;
	}
	// Getter
	get name(): string {
		return this._name;
	}
	// Setter
	set name(value: string) {
		if (value.length > 0) {
			this._name = value;
		} else {
			console.log("Errore: il name non può essere vuoto");
		}
	}
}

let getSetPerson = new GetSetPerson("Alice");
console.log(getSetPerson.name); // utilizza il getter
getSetPerson.name = "Bob"; // utilizza il setter
console.log(getSetPerson.name); // Bob
// getSetPerson.name = ""; // Errore il name non può essere vuoto

// ulteriore esempio getter / setter

class SetGetPerson {
	private _age: number;
	private _firstName: string;
	private _lastName: string;
	// properties private con _name
	constructor(age: number, firstName: string, lastName: string) {
		this._age = age;
		this._firstName = firstName;
		this._lastName = lastName;
	}
	// metodo getter
	public get age() {
		return this._age;
	}
	// metodo setter
	public set age(theAge: number) {
		// controllo validità prima di impostazione
		if (theAge <= 0 || theAge >= 200) {
			throw new Error("The age is invalid");
		}
		this._age = theAge;
	}
	public getFullName(): string {
		return `${this._firstName} ${this._lastName}`;
	}
}

let setGetPerson = new SetGetPerson(22, "John", "Doe");
// uso del setter, 23 é la value da impostare
setGetPerson.age = 23;
// uso del getter
console.log(setGetPerson.age);

class GetterSetterPerson {
	private _age: number;
	private _firstName: string;
	private _lastName: string;
	constructor(age: number, firstName: string, lastName: string) {
		this._age = age;
		this._firstName = firstName;
		this._lastName = lastName;
	}
	public get age() {
		// accessor
		return this._age;
	}
	public set age(theAge: number) {
		// mutator
		if (theAge <= 0 || theAge >= 200) {
			throw new Error("The age is invelid");
		}
		this._age = theAge;
	}
	public get firstName() {
		// accessor
		return this._firstName;
	}
	public set firstName(theFirstName: string) {
		// mutator
		if (!theFirstName) {
			throw new Error("Invalid first name.");
		}
		this._firstName = theFirstName;
	}
	public get lastName() {
		// accessor
		return this._lastName;
	}
	public set lastName(theLastName: string) {
		// mutator
		if (!theLastName) {
			throw new Error("Invalid last name.");
		}
		this._lastName = theLastName;
	}
	public get fullName() {
		// accessor
		return `${this.firstName} ${this._lastName}`;
	}
	public set fullName(name: string) {
		// mutator
		let parts = name.split(" ");
		if (parts.length !== 2) {
			throw new Error("Invalid name format: first last");
		}
		this._firstName = parts[0];
		this._lastName = parts[1];
	}
}

let getterSetterPerson = new GetterSetterPerson(23, "Jane", "Doe");
getterSetterPerson.fullName = "Jane Smith";
console.log(getterSetterPerson.fullName); // Jane Smith

// abstract class

abstract class AnimalClass {
	// metodo astratto
	abstract makeSound(): void;
	// metodo con implementazione
	sleep(): void {
		console.log("The animal is sleeping.");
	}
}

class DogClass extends AnimalClass {
	makeSound(): void {
		console.log("Bau");
	}
}

// let myAnimal = new AnimalClass() // Error
let myDog = new DogClass();
myDog.makeSound(); // Bau
myDog.sleep(); // The animal is sleeping.

// abstract class documentation

abstract class EmployeeClass {
	constructor(private _firstName: string, private _lastName: string) {}
	abstract getSalary(): number;
	get fullName(): string {
		return `${this._firstName} ${this._lastName}`;
	}
	compensationStatement(): string {
		return `${this.fullName} makes ${this.getSalary()} a month.`;
	}
}

class FullTimeEmployee extends EmployeeClass {
	constructor(_firstName: string, _lastName: string, private _salary: number) {
		super(_firstName, _lastName);
	}
	getSalary(): number {
		return this._salary;
	}
}

class Contractor extends EmployeeClass {
	constructor(
		_firstName: string,
		_lastName: string,
		private _rate: number,
		private _hours: number
	) {
		super(_firstName, _lastName);
	}
	getSalary(): number {
		return this._rate * this._hours;
	}
}

let john = new FullTimeEmployee("John", "Doe", 12000);
let jane = new Contractor("Jane", "Doe", 100, 160);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());

class VideoPerson {
	constructor(private readonly name: string, private lastName: string) {}
	presents(): void {
		console.log(`Ciao, sono ${this.name} ${this.lastName}`);
	}
	sayHi(person: VideoPerson): void {
		console.log(`Ciao ${person.name} ${person.lastName}, molto piacere.`);
	}

	static sayGoodbye(person: VideoPerson): void {
		console.log(`Ciao ${person.name} ${person.lastName}, molto piacere.`);
	}
}

let person1: VideoPerson = new VideoPerson("Luca", "Rossi");
let person2: VideoPerson = new VideoPerson("Mario", "Verdi");

person1.presents();
person1.sayHi(person2);
person1.sayHi(person1);

class VideoStudent extends VideoPerson {
	constructor(name: string, lastName: string, private favoriteSubj: string) {
		super(name, lastName);
	}
	showFavorite(): void {
		console.log(`Adoro ${this.favoriteSubj}`);
	}
	change() {
		this.favoriteSubj = "Yellow";
	}
}

let videoStudent: VideoStudent = new VideoStudent("Giovanni", "Neri", "Storia");
videoStudent.sayHi(person1);
// videoStudent.sayGoodbye(person1); // Error
VideoStudent.sayGoodbye(person2);
// VideoStudent.showFavorite(); // Error
videoStudent.showFavorite();

// singleton

class SingletonPrincipal {
	private static instance: SingletonPrincipal;
	private constructor(private name: string, private lastName: string) {}
	static getInstance() {
		if (SingletonPrincipal.instance) {
			return this.instance;
		}
		this.instance = new SingletonPrincipal("Marco", "Verdi");
		return this.instance;
	}
	present(): void {
		console.log(`Buongiorno, sono il preside ${this.name} ${this.lastName}`);
	}
}

SingletonPrincipal.getInstance().present();
// let testPrincipal = new SingletonPrincipal(); // Error

// esercizio start2impact classes / abstract classes

abstract class ExerciseVehicle {
	protected _brand: string;
	constructor(brand: string) {
		this._brand = brand;
	}
	// abstract displayBrand(): void;
	// oppure
	abstract displayBrand(): string;
	move(): void {
		console.log("The vehicle is moving.");
	}
}

class ExerciseCar extends ExerciseVehicle {
	private _model: string;
	constructor(_brand: string, _model: string) {
		super(_brand);
		this._model = _model;
	}
	// displayBrand(): void {
	// 	console.log(`This car is a ${this._brand} ${this._model}`);
	// }
	displayBrand(): string {
		return `This car is a ${this._brand} ${this._model}`;
	}
	get model() {
		return this._model;
	}
	set model(value: string) {
		if (value.length === 0) {
			throw new Error("Invalid name");
		}
		this._model = value;
	}
}

let exerciseCar = new ExerciseCar("Mini Cooper", "Eletric");
console.log(exerciseCar.displayBrand());
exerciseCar.model = "Full Eletric";
// exerciseCar.displayBrand();
// oppure
console.log(exerciseCar.displayBrand());
exerciseCar.move();
// exerciseCar.model = ""; // Error come atteso

// Perfetto, naming dato dalla soluzione errato, meglio _name per private

// interfaces

interface InterfaceAnimal {
	name: string;
	age: number;
	makeSound(): void;
}

class DogInterfaceClass implements InterfaceAnimal {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	makeSound(): void {
		console.log("Bau.");
	}
}

let myInterfaceDog = new DogInterfaceClass("Buddy", 5);
myInterfaceDog.makeSound();
// console.log("Here");

// interfaces documentation

// esempio funzione basico

function getFullName(person: { firstName: string; lastName: string }) {
	return `${person.firstName} ${person.lastName}`;
}
let personFunc = {
	firstName: "John",
	lastName: "Function"
};
console.log(getFullName(personFunc));
// console.log("hey");

// esempio di evoluzione usando interface

interface InterfacePerson {
	// name delle interface in PascalCase
	firstName: string;
	lastName: string;
}

function getFullNameFromInterface(person: InterfacePerson) {
	return `${person.firstName} ${person.lastName}`;
}

let johnInterface = {
	firstName: "John",
	lastName: "Interface"
};
console.log(getFullNameFromInterface(johnInterface));

// oppure

function getFullNameSintetic({ firstName, lastName }: InterfacePerson) {
	return `${firstName} ${lastName}`;
}

// verrà accettato qualsiasi object con le properties firstName e lastName

let janeInterface = {
	firstName: "Jane",
	middleName: "K.",
	lastName: "Interface",
	age: 23
};

let janeFullName = getFullNameSintetic(janeInterface);
console.log(janeFullName);

// interface optional properties

interface PersonWithOptional {
	firstName: string;
	middleName?: string;
	lastName: string;
}

function getFullNameWithOptional(person: PersonWithOptional) {
	if (person.middleName) {
		return `${person.firstName} ${person.middleName} ${person.lastName}`;
	}
	return `${person.firstName} ${person.lastName}`;
}

let janeWithOptional = getFullNameWithOptional(janeInterface);
console.log(janeWithOptional);

// interface with readonly

interface PersonReadOnly {
	readonly ssn: string;
	firstName: string;
	lastName: string;
}
let readOnlyPerson: PersonReadOnly;
readOnlyPerson = {
	ssn: "171-28-0926",
	firstName: "John",
	lastName: "Readonly"
};

console.log(readOnlyPerson);

// interface function type

interface StringFormat {
	(str: string, isUpper: boolean): string;
}

let format: StringFormat;
format = function (str: string, isUpper: boolean) {
	return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("Hi", true));

// anche con names differenti - esempio equivalente a quello soprastante

let formatTwo: StringFormat;
formatTwo = function (src: string, upper: boolean) {
	return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};
console.log(formatTwo("hi", true));

// class types

// le interfaces possono essere implementate da ogni class

interface Json {
	toJson(): string;
}

class JsonPerson implements Json {
	constructor(private firstName: string, private lastName: string) {}
	toJson(): string {
		return JSON.stringify(this);
	}
}

let jsonPerson = new JsonPerson("John", "Doe");
console.log(jsonPerson.toJson());

// esercizio interfaces

interface VehicleInterface {
	brand: string;
	model: string;
	showDetails(): void;
}

abstract class BaseVehicleClass implements VehicleInterface {
	brand: string;
	model: string;
	constructor(brand: string, model: string) {
		this.brand = brand;
		this.model = model;
	}
	abstract typeVehicle(): string;
	showDetails(): void {
		console.log(`This is a vehicle.`);
	}
}

class CarClass extends BaseVehicleClass {
	vehicleType: string;
	brand: string;
	model: string;
	constructor(vehicleType: string, brand: string, model: string) {
		super(brand, model);
		this.vehicleType = vehicleType;
	}
	typeVehicle(): string {
		return `This is a ${this.vehicleType}`;
	}

	showDetails(): void {
		console.log(`This ${this.vehicleType} is a ${this.brand} ${this.model}`);
	}
}

let testVehicle: CarClass = new CarClass("Car", "Mini Cooper", "Full Eletric");
testVehicle.showDetails();
console.log(testVehicle.typeVehicle());

// soluzione differisce un po'. Leggere più attentamente consegna,
// this.vehicleType é ricavabile anche da un metodo typeVehicle()

// 1. Definizione dell'Interfaccia Veicolo
interface Veicolo {
	marca: string;
	modello: string;
	displayDettagli(): void;
}

// 2. Definizione della Classe Astratta VeicoloBase
abstract class VeicoloBase implements Veicolo {
	marca: string;
	modello: string;

	constructor(marca: string, modello: string) {
		this.marca = marca;
		this.modello = modello;
	}

	// Implementazione di displayDettagli dell'interfaccia Veicolo
	displayDettagli(): void {
		console.log(
			`Marca: ${this.marca}, Modello: ${
				this.modello
			}, Tipo: ${this.tipoVeicolo()}`
		);
	}

	// Metodo astratto che sarà implementato dalle sottoclassi
	abstract tipoVeicolo(): string;
}

// 3. Definizione della Sottoclasse Auto
class Auto extends VeicoloBase {
	tipoVeicolo(): string {
		return "Auto";
	}
}

// 4. Utilizzo delle Classi e Interfacce
let miaAuto = new Auto("Fiat", "500");
miaAuto.displayDettagli(); // Output: Marca: Fiat, Modello: 500, Tipo: Auto

// intersection type

type EmployeeType = {
	name: string;
	startDate: string;
};

type ManagerType = {
	name: string;
	department: string;
};

type ManagerEmployeeType = EmployeeType & ManagerType;

let newManagerTwo: ManagerEmployeeType = {
	name: "Alice",
	startDate: new Date().toString(),
	department: "HR"
};

console.log(newManagerTwo);

// differenze con union type

// intersection

type ManagerAndEmployee = EmployeeType & ManagerType;
// ---> combina

// union type

let varEmployee: EmployeeType | ManagerType;
// ---> uno o l'altro

// altro esempio intersection

interface BusinessPartnerInterface {
	name: string;
	credit: number;
}

interface IdentityInterface {
	id: number;
	name: string;
}

interface ContactInterface {
	email: string;
	phone: string;
}

type EmplType = IdentityInterface & ContactInterface;
// ---> intersection
type CustType = BusinessPartnerInterface & ContactInterface;

let customerTest: CustType = {
	name: "ABC Inc.",
	credit: 1000000,
	email: "sales@abcinc.com",
	phone: "(408)-897-5735"
};

console.log(customerTest);

// note: se stessa proeprty in più interface si necessita stesso...
// type

// type guard primo esempio

function isEmployeeFunc(x: any): x is EmployeeType {
	return x && typeof x.name === "string" && x.startDate instanceof Date;
}

function getDepartmentFunc(emp: EmployeeType | ManagerType) {
	if (isEmployeeFunc(emp)) {
		console.log(emp.startDate);
	} else {
		console.log(emp.department);
	}
}

// type guard secondo esempio da documentation

// usando typeof

type alphanumericType = string | number;
// si definisce un type alphanumeric che può ospitare string o number
function addFunc(a: alphanumericType, b: alphanumericType) {
	// add usa due parametri che sono entrambi di type alphanumeric
	if (typeof a === "number" && typeof b === "number") {
		// controlla se sono numeri
		return a + b;
	}
	if (typeof a === "string" && typeof b === "string") {
		// controlla se sono stringhe
		return a.concat(b);
	}
	throw new Error(
		"Invalid arguments. Both arguments must be either numbers or strings."
	);
}

// usando instanceof

// ---------------------

class CustomerAccountClass {
	isCreditAllowed(): boolean {
		return true;
	}
}

class SupplierClass {
	isInShortList(): boolean {
		return true;
	}
}

type PartnerBusinessType = CustomerAccountClass | SupplierClass;

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

function signContractIn(partner: PartnerBusinessType): string {
	let message: string;
	if ("isCreditAllowed" in partner) {
		message = partner.isCreditAllowed()
			? "Sign a new contract with the customer"
			: "Credit issue";
	} else {
		message = partner.isInShortList()
			? "Sign a new contract the supplier"
			: "Need to evaluate further";
	}
	return message;
}

// user-defined type guards

function isCustomerFunc(partner: any): partner is CustomerAccountClass {
	return partner instanceof CustomerAccountClass;
}

function signNewContractFunc(partner: PartnerBusinessType): string {
	let message: string;
	if (isCustomerFunc(partner)) {
		message = partner.isCreditAllowed()
			? "Sign a new contract with the customer"
			: "Credit issue";
	} else {
		message = partner.isInShortList()
			? "Sign a new contract the supplier"
			: "Need to evaluate further";
	}
	return message;
}

// type casting
// realizzabile con <type> o con as type

let firstInput = document.getElementById("myInput") as HTMLInputElement;
console.log(firstInput);

let secondInput = <HTMLInputElement>document.getElementById("mySecondInput");
console.log(secondInput);

// type casting / type assertion

// const firstElem = document.querySelector("input['type=text']");
// const assetInput = firstElem as HTMLInputElement;

// console.log(assetInput.value);

const secondElem = document.querySelector("body");
const assetBody = secondElem as HTMLBodyElement;
console.log(assetBody.children);

// altro modo
// let enteredText = (firstElem as HTMLInputElement).value;

// sintassi type assertion
// let a: typeA;
// let b = a as typeB;

// type assertion con operatore <>

let inputBrackets = <HTMLInputElement>(
	document.querySelector("input[type='text']")
);
// console.log(inputBrackets.value);

// sintassi

// let a: typeA;
// let b = <typeA>a;

// type assertion start2impact

let someValueTest: any = "this is a string";
let strLengthTest: number = (someValueTest as string).length;
console.log(strLengthTest);

// oppure

let strLengthTestTwo: number = (<string>someValueTest).length;
console.log(strLengthTestTwo);
