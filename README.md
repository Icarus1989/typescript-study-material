Guida TypeScript Start2Impact

# Introduction - Start2Impact

Riassunto:

- Configurazione ambiente di sviluppo
- "Hello, World" in TypeScript
- Type in TypeScript
- Statement di controllo del flusso
- Funzioni
- Classi
- Interfacce
- Tipi avanzati
- Moduli

## 1. Introduzione a TypeScript

TypeScript, sviluppato da Microsoft nel 2012, da Anders Hejlsberg, già parte delllo sviluppo di C# e Delphi.
Dall'introduzione il linguaggio é stato accolto con entusiansmo, grazie alla capacità di migliorare lo sviluppo di applicazioni JavaScript su larga scala.

Concepito inizialmente per affrontare le sfide di applicazioni complesse con JavaScript, diventato rapidamente strumento essenziale.
Decisione di Microsoft di renderlo open source, accelerazione nell'adozione.

L'incremento della popolarità é dovuto in gran parte alla capacità di fornire un ambiente di sviluppo sicuro e alla sua compatibilità con l'ecosistema JavaScript esistente.

**---> TypeScript é un linguaggio di programmazione o meglio un'estensione di JavaScript. Il linguaggio estende la sintassi di JavaScript in modo che qualunque programma scritto in JavaScript sia in grado di funzionare con TypeScript senza alcuna modifica.<---**

E' stato progettato per lo sviluppo di grandi applicazioni ed é destinato ad essere transpilato in JavaScript per poter essere interpretato da qualunque browser o app.

**---> La transpilazione (compilazione) é infatti un passaggio fontamentale nello sviluppo di applicazioni TypeScript: il transpilatore svolge questo compito leggendo il codice TypeScript scritto dallo sviluppatore e genera un codice JavaScript equivalente che rispetta la logica del programma originale ma senza le annotazioni di tipo e le sintassi specifiche di TypeScript <---**

Si può immaginare TypeScript come un affinato erede di JavaScript, arricchito di tipi, classi e interfacce per conferire una maggiore coerenza e sicurezza al tuo codice.

A differenza del typing dinamico di JavaScript, dove le variabili si adattano al valore assegnato loro, **TypeScript abbraccia un approccio statico**.
I type vengono definiti nel "compile time", garantendo che le variabili rispettino rigorosamente le regole del loro type.

---> [Playlist TypeScript](https://www.youtube.com/watch?v=CZlEWUjOyNE)

**DA DOCUMENTAZIONE - informazioni aggiuntive**

TypeScript é un superset di JavaScript, scritto basandosi su di esso.

Perché TypeScript?
Gli obiettivi principali di TypeScript sono:

- Introdurre i types opzionali in JavaScript
- Implementare le feature del futuro JavaScript nel JavaScript corrente

I Types sono visti come un modo per aumentare la produttività di codice, grazie al controllo effettuato, in modo da prevenire che avvenga in runtime.

Con TypeScript si possono usare le feature delle future implementazioni ECMA prima che i browser le supportino completamente.
Le fasi per l'approvazione di una modifica ECMA in genere sono:

- Stage 0: Strawperson
- Stage 1: Proposal
- Stage 2: Draft
- Stage 3: Candidate
- Stage 4: Finished

TypeScript supporta le feature che sono nello stage 3.

## 2. "Hello, World!" in TypeScript

**TypeScript rappresenta un'estensione di JavaScript, che introduce elementi aggiuntivi per migliorarne la struttura e la robustezza.**
Mentre JavaScript é un linguaggio interpretato, eseguito in tempo reale dai browser web o da ambienti come Node.js, TypeScript richiede un processo di transpilazione per essere eseguito.

JavaScript, essendo interpretato, viene letto ed eseguito direttamente dall'applicazione che lo ospita, come ad esempio un browser.

TypeScript, al contrario, introduce types statici e altre caratteristiche avanzate che non sono native di JavaSript.
**Per eseguire codice TypeScript, é necessario utilizzare un "transpilatore", che traduce il codice TypeScript in JavaScript standard.**
Un transpilatore esegue anche controlli durante questa operazione, verificando la coerenza dei tipi delle variabili e dei contenuti del codice.

Il processo di transpilazione produce un file JavaScript risultante, come esempio basico app.js. Questo file verrà poi facilemnte incluso nelle pagine web o eseguito su un ambiente come Node.js.

Inoltre, il transpilatore fornisce feedback sugli eventuali errori nel codice TypeScript, garantendo che il codice risultante sia corretto e compatibile con l'ambiente di esecuzione JavaScript.

In sintesi, TypeScript offre la possibilità di utilizzare un linguaggio simile a JavaScript, ma con l'aggiunta di funzionalità avanzate e types statici. Per eseguire il codice TypeScript é necessario un transpilatore che traduca il codice in JavaScript nativo, garantendo al contempo la coerenza e la correttezza del codice.

---> **Passaggi per primo esercizio "Hello, World!":**

- cartella con all'interno file "app.ts"

- scrivere all'intenrno del file:

  let message: string = "Hello, World!";
  console.log("message);

- salva e da terminale eseguire tsc app.ts (ora --->
  npx tsc app.ts )

- ora averrà il processo di transpilazione

- al termine sarà stato creato il file app.js

- al suo interno trovermo del semplice codice JavaScript facilmente interpretabile dal browser

- possibilità test con browser o node.js

- possibilità hot reload al salvataggio

**DA DOCUMENTAZIONE - informazioni aggiuntive**

> [!TIP]
> Mai modificare direttamente app.js, una volta transpilato il nuovo codice si perderanno i cambiamenti.

**Perché usare TypeScript**

Vi sono due ragioni principali:

- TypeScript aggiunge un sistema di type per aiutare ad evitare problemi con i type dinamici in JavaScript.

- TypeScript implementa le feature future di JavaScript.

**Capire il type dinamico in JavaScript**

JavaScript é tipizzato dinamicamente. A differenza dei linguaggi tipizzati staticamente come Java o C#, **le values hanno dei types invece che le varaibili**.

Per esempio:

<code>
  "Hello!"
</code>

Dalla value, si può dire che il type é string.

Vedendo invece quest'esempio:

<code>
  let box;
  box = "hello";
  box = 100;
</code>

Il type della variabile box cambia in base alla value che le viene assegnata.
Per determinare il type della varaibile al runtime, si può usare l'operatore typeof.

<code>
  let box;
  console.log(typeof(box)); // undefined
  box = "Hello";
  console.log(typeof(box)); // string
  box = 100;
  console.log(typeof(box)); // number
</code>

in quest'esempio, la prima dichiarazione definisce la variabile senza assegnarle una value. Il type é undefined.
Poi assegnamo "Hello" alla variabile e diviene string.
Infine assegnamo 100 e cambia ancora in number.
Come si può notare, appena la value viene assegnata, il type della variabile cambia.
E non vi é alcuna necessità di dire esplicitamente a JavaScript il type. JavaScript dedurrà automaticamente il type dalla value.

Il type dinamico offre flessibilità, ma porta anche a problemi.

**Problemi con i type dinamici**

Supponiamo di avere una funzione che restituisca un object "product" basato su un id:

<code>
  function getProduct(id){
    return {
      id: id,
      name: `Awesome gadget ${id}`,
      price: 99.5
    }
  }
</code>

Il codice seguente usa la funzione getProduct() per recuperare il prodotto con id 1 e mostrarne i dati:

<code>
  const product = getProduct(1);
  console.log(`The product ${product.Name} costs $${product.price}`)
</code>

---> Output: The product undefined costs $99.5

Il problema con questo codice é che l'object "product" non ha una property "Name" ma "name". Questo lo si potrà notare in console solo una volta eseguito lo script.

Riferirsi ad una property che non esiste sull'object é un errore comune quando si lavora con JavaScript.

L'esempio seguente definisce una nuova funzione che restituisce le infomazioni sul product alla console:

<code>
  const showProduct = (name, price) => {
    console.log(`The product ${name} costs $${price}`)
  }
</code>

E il seguente usa le funzioni getPRoduct() e showProduct():

<code>
  const product = getPRoduct(1);
  showProduct(product.price, product.name);
</code>

---> Output:
---> The product 99.5 costs $Awesome Gadget 1

Questa volta passiamo gli arguments nell'ordine errato alla funzione showProduct(). Questo é un altro problema comune che spesso si può avere lavorando con JavaScript.

Ecco dove interviene TypeScript.

**Come TypeScript risolve i problemi dei dynamic types**

Per risolvere il problema del riferirsi ad una property che non esiste in un object, si possono seguire i seguenti passi:

**Primo**, definire la "forma" dell'object "product" usando un'**interface**. Si vedrà l'interface nello specifico più avanti.

<code>
  interface Product {
    id: number,
    name: string,
    price: number
  };
</code>

**Secondo**, esplicitare il type Product come type di ritorno della funzione getProduct():

<code>
  function getProduct(id) : Product {
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }
</code>

Se ci si riferisse ad una property che non esiste, l'editor del codice informerà immediatamente:

<code>
  const product = getProduct(1);
  console.log(`The product ${product.Name} costs $${product.price}`);
</code>

L'Editor evidenzierà l'errore nella property Name e vi sarà un suggerimento per la risoluzione.

Per risolvere il problema degli arguments passati nell'ordine errato, si possono assegnare esplicitamente dei types ai parametri della funzione:

<code>
  const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs $${price}.`);
  };
</code>

E quando si passeranno gli arguments del type sbagliato alla funzione showProduct, si riceverà un errore.

## 3. I Types in TypeScript

**In TypeScript ogni elemento che introduciamo nel codice, come variabili, funzioni, objects e array, é un identificatore e può avere un type associato.**
Questa caratteristica é fondamentale poiché permette di sfruttare a pieno il sistema di tipizzazione statica.

Ciò significa che ogni volta che dichiariamo una variabile o definiamo una funzione, possiamo specificare il tipo di dati che essa gestirà o restituirà. Questo approccio aiuta a scrivere codice più sicuro e facile da comprendere e mantenere.

**L'annotazione di Type in TypeScript avviene mediante l'uso del simbolo due punti ( : ) seguito dal type desiderato.**

Per esempio, quando dichiariamo:

<code>
  let num : number;
</code>

stiamo dicendo a TypeScript che la variabile numero conterrà dati di type numerico.

Questo ci aiuta a evitare errori comuni come assegnare accidentalmente una stringa a una variabile che dovrebbe contenere solo numeri.

Vediamo un altro esempio:

<code>
  let firstVar : any;
  let secondVar : number = 2;
  const firstConst : string = "start2impact";
</code>

In quest'esempio abbiamo tre diverse dichiarazioni che illustrano come assegnare types specifici agli indicatori.

Partiamo da "firstVar", alla quale abbiamo assegnato il type **any**. Questo significa che **firstVar** può accetttare un valore di qualsiasi type, siano essi numbers, strings o objects.
L'uso del type **any** é flessibile ma andrebbe utilizzato con cautela perché **elude i controlli di type di TypeScript**, potenzialmente introducendo incertezze nel codice.

Di seguito abbiamo "secondVar", inizializzata con la value 2 e dichiarata con type **number**. Questa dichiarazione garantisce che **secondVar** possa contenere solo values numeriche.

Infine abbiamo "firstConst", una costante con value "start2impact" di type **string**. Essendo una costante, la sua value non può essere modificata dopo l'inizializzazione. La specifica del type **string** assicura che firstConst possa contenere solo values di type string.

**Queste dichiarazioni dimostrano la potenza e la flessibilità di TypeScript**, permettendo di scrivere codice più chiaro e mantenibile, riducendo al contempo la possibilità di errori.

Operando in questo modo, cioé tipizzando correttamente gli identificatori, rendiamo il nostro codice molto più robusto e ottimizzato: se per errore valorizzassimo una variabile con una value differente dal type assegnatole, TypeScript in fase di transpilazione restituirebbe un errore.

Abbiamo a disposizione moltissimi types per i nostri identificatori:

- Primitives
- Literal
- Data Structures
- Union
- Intersection
- Any Type
- No Type
- Void Type

### Primitives - Primitivi

**I type primitives sono quelli più famigliari: number, string e boolean.** Sono i types che, al di fuori degli objects, vengono utilizzati anche in JavaScript.

Un esempio:

<code>
  let isBeatiful: boolean;
  isBeatiful = true;
</code>

### Literal

**I Literal sono type con uno o più valori specifici possibili.**

Per esempio se definissimo:

<code>
  type name = "Evy";
</code>

L'unico e solo valore possibile per la variabile "name" sarebbe solo e unicamente "Evy", senza la possibilità di assegnare nessuna altra value.

**Questo approccio é molto utile quando dobbiamo lavorare con values specifiche di un'applicazione o values configurabili che non dovrebbero cambiare.**

Inoltre TypeScript permette anche di indicare più values possibili, e solo quelle, per la variabile "name":

<code>
  type name = "Evy" | "Lalelo" | "Icarus";
</code>

### Data Structure

In TypeScript é anche possibile definire altri types di dati più complessi come:

- **Objects** - un insieme con un numero definito di keys, potenzialmente tutti di type diverso tra loro.

- **Array** - classico vettore (Array), di dimensione non definita, avente tutti gli elements dello stesso type.

- **Tuple** - un array di values con un numero fisso di elements, i quali possono avere types distinti.

- **Record** - fusione tra Objects e Array nel quale non é presente una dimensione definita e contengono delle coppie key-value aventi tutti gli elements dello stesso type.

### DA DOCUMENTAZIONE - informazioni aggiuntive

#### Cos'é un type in TypeScript

In TypeScript, un type é un modo conveniente di riferisi a diverse properties e funzioni che una value ha.

Una value é tutto quello che si può assegnare ad una variabile, per esempio una string, un array, un object e una funzione.

Per esempio si veda la seguente value:

<code>
  "Hello"
</code>

Quando si vede questa value, si può dire che una string. Questa value ha properties e metodi che una string ha.

Per esempio, la value "Hello" ha una property chimata length.
Ha inoltre metodi come match(), indexOf() e toLocaleUpperCase().

Quando si vuole cercare la value "Hello" e descriverla elencando le sue properties ed i metodi, sarebbe sconveniente.

Un modo più breve per riferirsi ad una value é assegnare a questa un type. Per esempio si dice che "Hello" é una string. Poi, si sa che si possono usare i metodi e le properties di una string per la value "Hello".

In conclusione:

- un type é una label che descrive le differenti properties e methods che una value ha.

- ogni value ha un type.

#### Types in TypeScript

TypeScript eredita i types integrati da JavaScript. I Types in TypeScript sono categorizzati in:

- Primitive Types
- Object Types

##### Primitive Types

I primitive types sono i vari type di value in JavaScript: string, number, boolean, null, undefined, symbol, tranne objects.

##### Per Object Types

Gli object types sono funzioni, array, classes ecc. Più avanti si imparerà come creare degli object types personalizzati.

#### Scopo dei types in TypeScript

Vi sono due scopi principali dei types in TypeScript:

- primo, i types sono usati dal compilatore di TypeScript per analizzare il codice per gli errori.

- secondo, i types permettono di capire quali values sono associate con le variabili.

#### Esempi di types di TypeScript

L'esempio seguente usa il metodo querySelector() per selezionare un element h1:

<code>
  const heading = documentt.querySelector("h1");
</code>

La console mostrerà una lista di metodi per il type HTMLHeadingElement ai quali la variabile heading avrà accesso.
(Vedi immagine).

Se si proverà ad accedere a delle properties o methods che non esistono il compiler TypeScript mostrerà un errore.

#### Capire i Type Annnotations in TypeScript

##### Cos'é il Type Annotation in TypeScript

TypeScript usa il type annotation per specificare dei types espliciti per gli identifiers come le variabili, le funzioni, gli objects ecc.

TypeScript usa la sintassi **:type** dopo l'identifier come type annotation, dove type può essere ogni type valido.

Una volta che un identifier viene annotato con un type, può essere usato solamente come quel type. Se l'identifier viene usato con un type diverso, il compiler TypeScript segnalerà un errore.

##### Type Annotations in variabili e constanti

La seguente sintassi mostra come specificare le type annotations per le variabili e le costanti:

<code>
  let variableName : type;
  let variabelName : type = value;
  const constantName : type = value;
</code>

In questa sintassi la type annotation viene dopo il name della variabile o della costante e viene preceduto da un colon " : ".

Il seguente esempio usa l'annotation number per una variabile:

<code>
  let counter: number;
</code>

Dopo di questa, si può solo assegnare un number alla variabile **counter**:

<code>
  counter = 1;
</code>

Se si assegna una string alla variabile counter, si otterrà un errore:

<code>
  let counter : number;
  counter = "Hello"; // compile error
</code>

Errore:
---> Type '"Hello"' is not assignable to type 'number'.

Si può usare insieme una type annotation per una variabile e inizializzarla in una songola dichiarazione come:

<code>
  let counter : number = 1;
</code>

In quest'esempio usiamo la number annotation per la variabile counter e la inizializziamo.

Questi sono altri esempi di type annotations primitive:

<code>
  let name : string = "John";
  let age : number = 23;
  let active : boolean = true;
</code>

In quest'esempio, la variabile name ottiene un type **string**, la variabile age ottiene un type **number** e la variabile active ottiene un type **boolean**.

#### Type annotation examples

##### Arrays

Per annotare un array type si usa un type specifico seguito da una square bracket **: type[]**:

<code>
  let arrayName: type[];
</code>

Per esempio, questo dichiara un Array di strings:

<code>
  let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
</code>

##### Objects

Per specificare un type per un object, si usa l'object type annotation. Per esempio:

<code>
  let person: {
    name: string;
    age: number;
  };
  person = {
    name: "John",
    age: 23
  }; // valido
</code>

In quest'esempio, l'Object person accetta solamente un object che ha due properties: **name** con un type **string** e **age** con un type **number**.

##### Function arguments & return types

Il seguente esempio mostra una function annotation con un parameter type annotation e return type annotation:

<code>
  let greeting : (name: string) => string;
</code>

In quest'esempio si può assegnare ogni funzione che accetti una string e restituisca una string alla variabile **greeting**:

<code>
  greeting = function (name : string) {
    return `Hi ${name}`;
  }
</code>

La seguente invece causerà un errore perché la funzione che viene assegnata alla variabile **greeting** non incontra il suo **type function**.

<code>
  greeting = function () {
    console.log("hello");
  }
</code>

Errore:
---> Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.

### TypeScript Number

Tutti i numbers in TypeScript sono o floating-point values o big integers.
I Floating-point numbers hanno il type **number** mentre i big integers ottengono type **bigint**.

#### Il type number

Il seguente esempio mostra come dichiarare una variabile che contenga una floating-point value:

<code>
  let price : number;
</code>

O si può inizializzare la variabile **price** ad un number:

<code>
  let price = 9.95;
</code>

come in JavaScript, TypeScript supporta i number literals per decimale, esadecimale, binario e octale literals.

##### Decimal numbers

Gli esempi seguenti mostrano dei numbers in base decimale:

<code>
  let counter: number = 0;
  let x: number = 100,
      y: number = 200;
</code>

##### Binary Numbers

I numeri binari iniziano con uno 0 seguito da una B, maiuscola o minuscola:

<code>
  let bin = 0b100;
  let anotherBin : number = 0B010;
</code>

Si noti che i numeri dopo lo 0b devono essere 0 o 1.

##### Octal Numbers

Un numero octale usa uno 0 iniziale seguito dalla lettera o. I numeri dopo 0o sono numeri da 0 a 7:

<code>
  let octal : number = 0o10;
</code>

##### Hexadecimal Numbers

I numeri Hexadecimali usano uno 0 iniziale seguito da una x maiuscola o minuscola. I numeri dopo 0x vanno nel range da 0 a F (0123456789ABCDEF).

<code>
  let hexadecimal : number = 0XA;
</code>

JavaScript ha il type Number che si riferisce ad object boxed non primitive. Non si dovrebbe usare il type Number di JavaScript per quanto possibile in TypeScript.

#### Big Integers

I big integers rappresentano i numeri interi più grandi di 2^53 - 1. Un Big integer literal ha il character **n** alla fine come questo:

<code>
  let big : bigint = 9007199254740991n;
</code>

### TypeScript String

Come JavaScript, TypeScript usa le doppie o singole quotes per avvolgere le string literals:

<code>
  let firstName: string = "John";
  let title: string = "Web Developer";
</code>

TypeScript, come JavaScript, supporta inoltre le template strings con le backtick (``).

Le template strings permettono di creare strings multilinea e forniscono le feature di interpolazione.

L'esempio seguente mostra come creare una string multilinea usando le backticks:

<code>
  let description = `This TypeScript string can 
  span multiple
  lines
  `;
</code>

Le interpolazioni della string permettono di inserire le variabili nella string in questo modo:

<code>
  let firstName: string = "John";
  let title: string = `Web Developer`;
  let profile: string = `I'm ${firstName}.
  I'm a ${title}`;
  console.log(profile);
</code>

Output:
--->
I'm John.
I'm a Web Developer.

### TypeScript Boolean

In TypeScript il type **boolean** ha due values: true e false. Il type boolean é uno dei type primitive in TypeScript.

##### Declaring boolean variables

In TypeScript, si può dichiarare una variabile boolean usando la keyword **boolean**.
Per esempio

<code>
  let peending: boolean;
  pending = true;
  ...
  pending = false;
</code>

##### Boolean operator

Per manipolare le values boolean, si usano gli operatori booleani. TypeScript supporta:

- && - operatore AND logico
- || - operatore OR logico
- ! - operatore NOT logico

Per esempio:

<code>
  const pending: boolean = true;
  // NOT
  const notPending = !pending; // false
  const hasError: boolean = false;
  const completed: boolean = true;
  // AND
  let result = completed && hasError;
  console.log(result); // false
  // OR
  result = completed || hasError;
  console.log(result); // true
</code>

#### Type annotations for boolean

Come visto negli esempi precedenti, si può usare la keyword **boolean** per annotare i types per le variabili boolean:

<code>
  let completed: boolean = true;
</code>

Comunque, TypeScript deduce i type automaticamente, quindi la type annotation potrebbe non essere necessaria:

<code>
  let completed = true;
</code>

Come per una variabile, si possono annotare i parametri boolean o restituire il type di una funzione usando la keyword **boolean**:

<code>
  function changeStatus(status: boolean): boolean {
    //...
  }
</code>

#### Boolean Type

JavaScript ha il type Boolean che si riferisce ad un boxed object non-primitive. Il type Boolean di JavaScript ha la B maiuscola, da non confodere con il type boolean di TypeScript con la b minuscola. E' una good practice evitare di usare il type Boolean.

### TypeScript String Literal Types

I string literal types permettono di definire un type che accetta solo una specifica string literal.

L'esempio seguente definisce un string literal type che accetta una string literal "click":

<code>
  let click: "click";
</code>

La variabile **click** é un string literal type che accetta solo la string-literal "click". Se si assegna la string literal "click" alla variabile **click**, sarà valida:

<code>
  click = "click"; // valid
</code>

Al contrario, quando si assegna un'altra string literal alla variabile **click**, il complilatore TypeScript segnalerà un errore. Per esempio:

<code>
  click = "dbclick"; // compiler error
</code>

Error:
---> Type '"dblclick"' is not assignable to type '"click"'.

Il string literal type é utile per limitare una possibile value string che una variabile può archiviare.

I string literal types si possono combinare ottimamente con i union types per definire un set di string literal values per una variabile:

<code>
  let mouseEvent: "click" | "dbclick" | "mouseup" | "mousedown";
  mouseEvent = "click"; // valid
  mouseEvent = "dbclick"; // valid
  mouseEvent = "mouseup"; // valid
  mouseEvent = "mousedown"; // valid
  mouseEvent = "mouseover"; // compiler error
</code>

Se si usano i string literal types in molteplici posti, può risultare prolisso.

Per evitare questo, si possono usare gli alias dei types (types alieses). Per esempio:

<code>
  type MyMouseEvent = "click" | "dbclick" | "mouseup" | "mousedown";
  let mouseEvent: MyMouseEvent;
  mouseEvent = "click";
  mouseEvent = "dbclick";
  mouseEvent = "mouseup"; // valid
  mouseEvent = "mousedown"; // valid
  mouseEvent = "mouseover"; // compiler error
  let anotherEvent: MyMouseEvent;
</code>

### TypeScript object Type

L'object type di TypeScript rappresenta tutte le values che non sono in primitive types.

Questi sono i primitive types in TypeScript:

- number
- bigint
- string
- boolean
- null
- undefined
- symbol

Il seguente esempio mostra come dichiarare una variabile che ospita un object:

<code>
  let employee: object;
  employee = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    jobTitle: "Web Developer"
  };
  console.log(employee);
</code>

Output:
--->
{
firstName: 'John',  
 lastName: 'Doe',
age: 25,
jobTitle: 'Web Developer'
}

Se si assegna una value primitive all'object employee, si otterrà un errore:

<code>
  employee = "John";
</code>

Error:
---> error TS2322: Type '"John"' is not assignable to type 'object'.

L'object **employee** é un object type con una lista fissa di properties. Se si prova ad accedere ad una pproperty che non esiste nell'object **employee** si otterrà un errore:

<code>
  console.log(employee.hireDate);
</code>

Error:
---> error TS2339: Property 'hireDate' does not exist on type 'object'.

> [!IMPORTANT]
> Si noti che la dichiarazione soprastante funziona perfettamente bene in JavaScript e restituisce undefined.

Per specificare esplicitamente le properties dell'object **employee**, occorre prima usare la seguente sintassi alternativa per dichiarare l'object:

<code>
  let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
  };
</code>

E poi assegnare l'object **employee** a un literal object con le properties descritte:

<code>
  employee = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    jobTitle: "Web Developer"
  };
</code>

Oppure si può combinare le due sintassi nella stessa dichiarazione in questo modo:

<code>
  let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
  } = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    jobTitle: "Web Developer"
  }
</code>

#### object vs. Object

TypeScript ha un altro type chiamato **Object** con la lettera maiuscola. E' importante capire la differenza tra di loro.

L'object type rappresenta tutte le values non-primitive mentre il type **Object** le funzionalità di tutti gli object.

Per esempio, l'**Object** type ha i metodi toString() e valueOf() ai quali tutti gli objects possono accedere.

#### The empty type {}

TypeScript ha un altro type chiamato empty type denotato da **{}**, che é molto similare all'object type.

L'empty type {} descrive un object che non ha properties di per se. Se si prova ad accedere ad una property in tale object, TypeScript segnalerà un errore in fase di compilazione:

<code>
  let vacant: {};
  vacant.firstName = "John";
</code>

Error:
---> error TS2339: Property 'firstName' does not exist on type '{}'.

Ma se si può accedere a tutte le properties ed i metodi dichiarati nell'Object type, che é disponibile sull'object dalla prototype chain:

<code>
  let vacant: {} = {};
  console.log(vacant.toString());
</code>

Output:
---> [object Object]

### TypeScript Array Type

Un **array** TypeScript é una lista ordinata di dati. Per dichiarare un array che ospiti values di un type specifico, si può usare la seguente sintassi:

<code>
  let arrayName: type[];
</code>

Per esempio, la riga seguente dichiara un array di **strings**:

<code>
  let skills: string[] = [];
</code>

E si possono aggiungere una o più stringhe all'array:

<code>
  skills[0] = "Problem solving";
  skills[1] = "Programming";
</code>

O usare il metodo **push()**:

<code>
  skills.push("Software Design");
</code>

La seguente riga dichiara una variabile e assegna un array di stringhe a questa:

<code>
  let skills = ["Problem solving", "Programming", "Software Design"];
</code>

In quest'esempio TypeScript deduce che l'array **skills** é un array di strings. E' equivalente al seguente:

<code>
  let skills: string[];
  skills = ["Problem solving", "Programming", "Software Design"];
</code>

Una volta definito un array di un type specifico, TypeScript preverrà l'aggiunta di values incopatibili ad esso. Per esempio, la seguente dichiarazione causerà un errore:

<code>
  skills.push(100);
</code>

...perché stiamo provando ad aggiungere un number ad un array di stringhe.

Error:
---> Argument of type 'number' is not assignable to parameter of type 'string'.

Quando si estrae un element dall'array, TypeScript può fare la **type inference**. Per esempio:

<code>
  let skill = skills[0];
  console.log(typeof(skill));
</code>

Output:
---> string

In quest'esempio, estraiamo il primo element dall'array **skills** e lo assegnamo alla variabile **skill**.

Visto che un element in uno string array é una string, TypeScript deduce il type della variabile **skill** a string come mostrato nell'output.

#### TypeScript array properties and methods

Gli array di TypeScript possono accedere alle properties e ad i metodo di JavaScript. Per esempio, la seguente dichiarazione usa la property **length** per ottenere il numero di elements in un array:

<code>
  let series = [1, 2, 3];
  let doucleIt = series.map(e => e * 2);
  console.log(doubleIt);
</code>

Output:
---> [2, 4, 6]

#### Storing values of mixed types

La dichiarazione seguente illusta come dichiarare un array che ospiti sia strings che numbers:

<code>
  let scores = ["Programming", 5, "Software Design", 4];
</code>

In questo caso, TypeScript deduce l'array **scores** come un array di **string | number**.

E' equivalente rispetto a questo:

<code>
  let scores: (string | number)[];
  scores = ["Programming", 5, "Software Design", 4];
</code>

### TypeScript Tuple

Un tuple funziona come un array con alcune considerazioni addizionali:

- Il numero di elements nel tutle é fisso
- I types degli elements sono conosciuti, e non necessitano di essere gli stessi

Per esempio, si può usare un tuple per rappresentare una value come una coppia di string e number:

<code>
  let skill: [string, number];
  skill = ["Programming", 5];
</code>

L'ordine delle values in un tuple é importante. Se si cambia l'ordine delle values del tuple **skill** a [5, "Programming"], si otterrà un error:

<code>
  let skill: [string, number];
  skill = [5, "Programming"];
</code>

Error:
---> error TS2322: Type 'string' is not assignable to type 'number'.

Per questo motivo, é una good practice usare i tuples con dati che sono relazionati l'un l'altro in uno specifico ordine.

Per esempio, si può usare un tuple per definire un colore RGB che si presenta sempre con un pattern di tre numeri:

<code>
  let color: [number, number, number] = [255, 0, 0];
</code>

I **color[0]**, **color[1]** e **color[2]** saranno logicamente mappati alle values di colore Red, Green e Blue.

#### Optional Tuple Elements

Fin da TypeScript 3.0, un tuple può avere degli elements opzionali specificati usando il question mark ? a posteriori.

Per esempio, si può definire un tuple RGBA con la value opzionale per il canale alpha:

<code>
  let bgColor, headerColor : [number, number, number, number?];
  bgColor = [0, 255, 255, 0.5];
  headerColor = [0, 255, 255];
</code>

Il tuple in sintesi é un array con un numero fisso di elements i quali types sono conosciuti.

## 4. Union

**L'operatore Union, rappresentato dal simbolo pipe " | ", é l'equivalente dell'operatore insiemistico dell'unione.**

Considerando due types come due insiemi, l'operatore unione prende tutti i types dei due insiemi, escludendo i duplicati:

<code>
  type cars = "Peugeot" | "Toyota" | "Fiat";
  type bikes = "Ducati" | "Piaggio" | "Harley Davidson";
  type carsAndBikes = cars | bikes;
  ---> contiene / permette "Peugeot" | "Toyota" | "Fiat" | "Ducati" | "Piaggio" | "Harley Davidson";
</code>

### TypeScript union Type

A volte, si incontreranno funzioni che si possono aspettare un parametro che possa essere o un numero o una string, per esempio:

<code>
  function add(a: any, b: any){
    if(typeof a === "number" && typeof b === "number"){
      return a + b;
    }
    if(typeof a === "string" && typeof b === "string"){
      return a.concat(b);
    } 
    throw new Error('Parameters must be numbers or strings');
  }
</code>

In quest'esempio, la funzione **add()** calcola la somma dei suoi parametri se sono numbers. Se i parametri sono strings, li concatenerà in un unica string. Se i parametri non sono ne numbers ne strings, la funzione **add()** restituirà un errore.

Il problema con il parametri della funzione **add()** é che hanno il type **any**. Questo significa che si può chiamare la funzione con arguments che possono essere sia numbers che stringhe, e a TypeScript andrà bene.

Questo codice sarà compilato con successo ma causerà un errore in runtime:

<code>
  add(true, false);
</code>

Per risolvere questa problematica, si può usare lo **union type** di TypeScript. il type union permette di combinare molteplici types in un unico type.

Per esempio, la seguente variabile é di type number o string:

<code>
  let result = number | string;
  result = 10; // OK
  result = "Hi"; // OK
  result = false; // non OK
</code>

Uno union type descrive un value che può essere uno di vari type, non solo tra due. Per esempio **number | string | boolean**.

Tornando all'esempio della funzione **add()**, si possono cambiare i types dei parametri da **any** a union così:

<code>
  function add(a: number | string, b: number | string){
    if(typeof a === "number" && typeof b === "number"){
      return a + b;
    }
    if(typeof a === "string" && typeof b === "string"){
      return a.concat(b);
    } 
    throw new Error('Parameters must be numbers or strings');
  }
</code>

Possiamo specificare lo union type per la funzione add:

<code>
  function add(a: number | string, b: number | string) : number | string {
    if(typeof a === "number" && typeof b === "number"){
      return a + b;
    }
    if(typeof a === "string" && typeof b === "string"){
      return a.concat(b);
    } 
    throw new Error('Parameters must be numbers or strings');
  }
</code>

Più avanti si impareranno le nozioni del generic type per gestire queste situazioni più elegantemente.

## 5. Intersection

**L'operatore Intersection " & " consente di combinare due o più types esistenti in un unico type che ha tutte le properties di entrambi i types.**

Pensando di avere due objects ("Person" e "Student" intesi qui come objects interface), utilizzando l'operatore di intersezione "&", possiamo combinare i type Person e Student per creare un nuovo type che li unisca e che abbia tutte le properties di entrambi.

L'operatore di intersezione può essere utilizzato anche con altri type, per esempio con i type Literal (letterali), i type di funzione ed i type generici.

Questo lo rende molto flessibile e potente per definire type personalizzati e complessi, come di può vedere nell'esempio:

<code>
  interface Person {
    name: string;
    age: number;
  }
  inteface Student {
    id: number;
    department: string;
    year: number;
  }
  type PersonStudent = Person & Student;
  const studentPerson: PersonStudent = {
    name: "Jack",
    age: 33,
    id: 123456,
    department: "IT",
    year: 5,
  } 
</code>

## 6. Any

**Il type "any" in TypeScript é un type molto potente che, come suggerisce il nome, può rappresentare quasiasi type di value.**

Questo può essere molto utile quando si lavora con parti del codeci dove il type di dati non é noto fino al run time o quando si lavora con librerie JavaScript esistenti per le quali non si dispone di tipizzazioni.

Tuttavia, **l'uso del type any dovrebbe essere limitato il più possibile**, poiché rende vano lo scopo di TypeScript, che é quello di fornire tipizzazione statica per il codice JavaScript.

Quando si assegna il type any ad una variabile, si sta dicendo a TypeScript di bypassare i controlli di type su quella variabile. Ciò significa che qualsiasi operazione su tale variabile sarà consentita senza errori di compilazione.

In quest'esempio, la variabile "notSure" può essere assegnata a qualsiasi type di value, e TypeScript non solleverà errori di type, anche quando invochiamo metodi che potrebbero non esistere sul valore corrente di "notSure". D'altra parte, "prettySure" é di type Object, che é molto più restrittivo rispetto ad "any" e non permetterà chiamate di metodo arbitrarie:

<code>
  let notSure : any = 4;
  notSure = "maybe a string";
  notSure = false; // maybe a boolean
  // Possiamo anche chiamare qualsiasi metodo su di esso, o assegnarlo a (o da) un type diverso
  notSure.ifItExists();
  // ok, ifItExists potrebbe esistere al runtime
  notSure.toFixed();
  // ok, toFixed esiste ma in compilatore non verifica
</code>

<code>
  let prettySure: object = 4;
  prettySure.toFixed();
  // Error: La property "toFixed" non esiste nel type Object
</code>

### TypeScript any Type

A volte si può aver bisogno di archiviare una value in una variabile. Ma non si conosce il suo type quando scriviamo il programma. E la value sconosciuta può provenire da un'API di terze parti o dall'input di un utente.

In questo caso, si può voler uscire dal controllo del type e permettere alla value di passare attraverso il controllo in fase di compilazione.

Per farlo, si usi il type **any**. Il type **any** permette di assegnare una value di qualsiasi type ad una variabile. Per esempio:

<code>
  // il json potrebbe provenire da un'API di terze parti
  const json = `{"latitude": 10.11, "longitude":12.12}`;
  // parse JSON per trovare la location
  const currentLocation = JSON.parse(json);
  console.log(currentLocation);
</code>

Output:
---> { latitude: 10.11, longitude: 12.12 }

In quest'esempio, la variabile currentLocation viene assegnata ad un object restituito dalla funzione **JSON.parse()**.

Comunque, quando si usa la variabile currentLocation per accedere alle properties dell'object, TypeSCript non si occuperà di nessun controllo:

<code>
  console.log(currentLocation.x);
</code>

Output:
---> undefined

Il compilatore TypeScript non segnalerà alcun errore.

Il type **any** permette di lavorare con la codebase esistente JavaScript. Permette di entrare ed uscire gradualmente dal type-checking durante la compilazione. Quindi, si può usare il type **any** per migrare da un progetto JavaScript a TypeScript.

#### TypeScript any: implicit typing

Se si dichiara una variabile senza specificare un type, TypeScript presuppone che si stia usando il type **any**. Questa feature viene chiamata **type inference** (deduzione del type). TypeScript deduce il type di una variabile. Per esempio:

<code>
  let result;
</code>

In quest'esempio, TypeScript deduce (infers) il type. Questa pratica viene chiamata **implicit typing**.

> [!IMPORTANT]
> Si noti che per disabilitare l'implicit typing al type **any**, occorra cambiare l'option **noImplicitAny** nel file tsconfig.json a true. Si imparerà altro sul file tsconfig.json più avanti.

## 7. Never

**Il type Never rappresenta il type di values che mai si verificano.**
Viene utilizzato in situazioni dove, in base al flusso del codice, un'espressione o una variabile non può assumere alcun valore.
Il never può sembrare un concetto astratto all'inizio, ma é molto utile per la gestione degli errori e per assicurarsi che alcuni parti del codice non vengano mai eseguite.

In questo caso la funzione "error" non restituisce mai una value perché lancia sempre un'eccezione. Pertanto il suo type di ritorno é "never":

<code>
  function error(message: string): never {
    throw new Error(message);
  }
</code>

In quest'altro esempio "assertNever" verifica che tutti i possibili casi dell'union type "Shape" siano gestiti.

Se aggiungiamo un nuovo type a "Shape" e dimentichiamo di gestirlo in "area", TypeScript genererà un errore dicendo che il type non può essere assegnato a "never":

<code>
  type Shape = Circle | Square;
  function assertNEver(x : never): never {
    throw new Error("Unexpected object: " + x);
  }
  function area(s : Shape) {
    switch(s.kind){
      case "circle":
        return Math.PI * s.radius ** 2;
      case "square":
        return s.side * s.side;
      default:
        return assertNever(s):
        // Se dimentichiamo un caso, TypeScript ci avvisa qui.
    }
  }
</code>

### TypeScript never Type

Il **never** type viene usato per reppresentare una value che non avviene mai. A causa di questo, non si può assegnare alcuna value ad una variabile con un type **never**.

Di solito, si usa il type **never** per rappresentare il type restituito da una funzione che restituisce sempre un error. Per esempio:

<code>
  function raiseError(message: string): never {
    thorow new Error(message);
  }
</code>

Se si ha una funzione che contiene un loop indefinito, il suo type di return dovrebbe essere **never** type. Per esempio:

<code>
  function forever(): never {
    while(true) {}
  }
</code>

I quest'esempio, il type di return della funzione **forever()** é **never**.

Le variabili possono acnche acquisire il type **never** quando vengono limitate nel loro type da una type guard che non può mai essere vera.

Per esempio, senza il **never** type, la seguente funzione causerebbe un errore perché non tutti i percorsi del codice resituiscono una value:

<code>
  function fn(a: string | number) : boolean {
    if(typeof a === "string"){
      return true;
    } else if(typeof a === "number") {
      return false;
    }
  }
</code>

Error:
---> Function lacks ending return statement and return type does not include 'undefined'.

Per rendere il codice valido, si può lanciare un errore dentro la funzione fn:

<code>
  function fn(a: string | number) : boolean {
    if(typeof a === "string"){
      return true;
    } else if(typeof a === "number") {
      return false;
    }
    throw new Error("Invalid type");
  }
</code>

Alternativamente, si può definire una funzione la quale abbia come type di ritorno **never** e venga restituita una sua chiamata nella funzione fn, in questo modo:

<code>
  function raiseError(msg: string): never {
    throw new Error(msg);
  }
  function fn(a: string | number) : boolean {
    if(typeof a === "string"){
      return true;
    } else if(typeof a === "number") {
      return false;
    }
    return raiseError("Invalid type");
  }
</code>

La funzione fn prende un argument che può essere o una string o un number e restituisce un boolean. Il codice che cade nel raiseError non dovrebbe verificarsi data la ristrettezza del type.

Ma perché usare raiseError?

Questo aiuta nel rendere a prova di futuro la funzione, se si aggiungono nuovi types allo union type dell'argument, la gestione dell'errore segnalerà immediatamente che il nuovo type necessita di essere considerato nella dichiarazione dell'if.

Inoltre, includere raiseError comunica chiaramente il nostro intento che ogni altro type dell'argument a é invalido e non dovrebbe avvenire, rendendo il codice più facile da mantenere.

#### never type vs. void type

La seguente tabella sottolinea le differenze chiave tra i types **void** e **never** in TypeScript:

void - Definition
Rappresenta l'assenza di una value di return.
never - Definition
Rappresenta una value che non avviene mai.

void - Use Case
Funzioni che non restituiscono una value.
never - Use Case
Funzioni che normalmente non vengono completate (sollevano un'eccezione o hanno un loop indefinito)

void - Function Behavior
Si esegue completamente senza restituire una value
never - Function Behavior
Non si esegue mai completamente (throw error/infinite loop)

void - Return value
Può essere undefined.
never - Return value
Non può restituire nulla.

void - Type Inference
Usato per funzioni che eseguono azioni.
never - Type Inference
Usato per percorsi di codice non raggiungibile, come nel caso di un else che non deve mai verificarsi.

## 8. Void

**Il type void, in TypeScript, viene usato per indicare l'assenza di un type**.
E' comunemente utilizzato come type di ritorno per le funzioni che non restituiscono una value.

Mentre any permette ogni type di value e never indica che una value non esiste mai, void viene utilizzato per funzioni che effettivamente vengono eseguite ma non restituiscono nulla.
Questo concetto é particolarmente utile per chiarire l'intenzione del codice e la programmazione funzionale in TypeScript.

In questo esempio, "logMessage" é una funzione che esegue un'azione (in questo caso, log nella console) ma non restituisce una value. Il type di ritorno **void** esplicita questa caratteristica:

<code>
  function processArray(arr : number[], callback: (n: number) => void) : void {
    for (const item of arr){
      callback(item);
    }
  }
</code>

### TypeScript void Type

Il **void** type denota il non avere alcun type. Tipicamente, si usa il type **void** come return type per funzioni che non restituiscono una value. Per esempio:

<code>
  function log(message): void {
    console.log(message);
  }
</code>

E' una good practice aggiungere il type **void** come return type ad una funzione o ad un metodo che non restituiscono alcuna value. Facendo questo, si possono ottenere i seguenti vantaggi:

- Aumenta la chiarezza del codice: non occorre leggere tutto il body della funzione per vedere se restituisce qualcosa.

- Garantisce il type-safe: non si assegnerà mai la funzione con il return type **void** ad una variabile.

Si noti infatti che se si usa il type **void** per una variabile, si può assegnare solo undefined a tale variabile. In questo caso il type **void** non é utile. Per esempio:

<code>
  let useless: void = undefined;
  useless = 1; // error
</code>

Se la flag **--strictNullChecks** non é specificata, si può assegnare useless a null.

<code>
  useless = null; // OK se --strictNullChecks non é specificato
</code>

In sintesi, si usa il type **void** come return type per funzioni che non restituiscono alcuna value.

## 9. Test fine sezione

4 / 5 Corrette. Errore s2i nella prima domanda del test, risposta corretta é errata.

## 10. Esercizio pratico Types

Il tuo obiettivo in questo esercizio pratico è di creare delle variabili utilizzando tipi primitivi in TypeScript e assegnarvi dei valori.

Per questo esercizio dovrai:

- Dichiarare una variabile di tipo number e assegnarle un valore.
- Dichiarare una variabile di tipo string e assegnarle un valore.
- Dichiarare una variabile di tipo boolean e assegnarle un valore.

Number:

<code>
  let num: number = 23; // Perfetto
  oppure:
  let secondNum: number;
  secondNum = 23;
</code>

Per Big int:

<code>
  let bigInt: bigint = 12342435135135123;
</code>

String:

<code>
  let msg: string = "Hello"; // Perfetto
  oppure:
  let secondMsg: string = 'Hello';
  oppure:
  let thirdMsg: string = `Hello`;
  oppure:
  let fourthMsg: string;
  fourthMsg = "Hello";
</code>

Boolean:

<code>
  let pending: boolean = true; // Perfetto
  oppure:
  let pending: boolean;
  pending = false;
</code>

// Perfetto

## 11. Statement di controllo del flusso

Come ogni linguaggio di programmazione che si rispetti, anche TypeScript, estendendo JavaScript, supporta nativamente gli statement di controllo del flusso del codice.
Gli statement sono fondamentali poiché permettono di gestire le logiche di programmazione in maniera diretta ed efficiente.

I più comuni:

- if...else
- switch...case
- for..of
- while
- do...while
- break
- continue

## 12. if...else

Il più famoso tra gli statement di controllo del flusso é sicuramente il costrutto **if...else** che permette di valutare una o più condizioni comportandosi differentemente in base alle logiche indicategli.

La sintassi é molto semplice:

<code>
  if( condition ) {
    // if - statement
  }
</code>

Per esempio, poniamo di avere una variabile denominata energy, che rappresenta l'energia corrente disponibile e che parte da 0. maxEnergy invece, il massimo dell'energia, é impostato a 100.

Possiamo far aumentare l'energia fino a non superare la soglia massima:

<code>
  let energy: number = 0;
  let maxEnergy: number = 100;
  if( energy < maxEnergy ){
    energy++;
  }
</code>

### TypeScript if else

#### TypeScript if

Una dichiarazione **if** esegue una dichiarazione in base ad una condizione. Se la condizione é vera, l'if statement eseguirà le dichiarazioni dentro il body:

<code>
  const max = 100;
  let counter = 0;
  if(counter < max){
    counter++;
  }
  console.log(counter);
</code>

Outout:
---> 1

In quest'esempio, visto che la variabile **counter** comincia da 0, é minore della costante **max**. L'espressione counter < max viene valutata a true quindi la dichiarazione if esegue la dichiarazione counter++;

Inizializziamo ora la variabile counter a 100:

<code>
  const max = 100;
  let counter = 100;
  if(counter < max){
    counter++;
  }
  console.log(counter); // 100
</code>

Output:
---> 100

In quest'esempio, l'espressione counter < max viene valutata come false. L'if statement non esegue counter++. Quindi l'output é 100.

#### TypeScript if...else statement

Se si vogliono eseguire degli altri statements quando la condizione nell'if statement risulta false, allora si può usare lo statement if...else:

<code>
  if(condition){
    // statements dell'if
  } else {
    // statements dell'else
  }
</code>

Il seguente esempio illustra un modo d'uso dell'if...else statement:

<code>
  const max = 100;
  let counter = 100;
  if(counter < max){
    counter++;
  } else {
    counter = 1;
  }
  console.log(counter);
</code>

Output:
---> 1

In quest'esempio, l'espressione counter < max viene valutata come false quindi la dichiarazione nel branch else si esegue e resetta la variabile **counter** a 1.

#### Ternary operator

In praticam se si ha una condizione semplice (NO. corta nel senso che occupi poco spazio, male interpretazione della documentazione originale JavaScript), si può usare il ternary operator **? :** piuttosto che uno statemente **if...else** per rendere il codice più corto, come:

<code>
  const max: number = 100;
  let counter: number = 100;
  counter < max ? counter++ : counter = 1;
  console.log(counter);
</code>

#### TypeScript if...else if...else statement

Quando si vuole eseguire del codice basato su molteplici condizioni, si può usare lo statement **if...else if...else**.

La dichiarazione if...else if...else può avere uno più branches **else if** e solo un **else**.

Per esempio:

<code>
  let discount: number;
  let itemCount = 11;
  if(itemCount > 0 && itemCount <= 5){
    discount = 5; // 5%
  } else if(itemCount > 5 && itemCount <= 10){
    discount = 10;
  } else {
    discount = 15;
  }
  console.log(`You got ${discount}% discount. `)
</code>

Output:
---> You got 15% discount.

Questo esempio usa lo statement if...else if...else per determinare lo sconto in base al numero di oggetti.

In quest'esempio, assumiamo che il numero di oggetti sia sempre più grande di zero. Comunque, se il numero di oggetti é minore di zero o più grande di 10, lo sconto sarà del 15%.

Per rendere il codice robusto, si può usare un altro **else if** invece del **branch** else.

<code>
  let discount: number;
  let itemCount = 11;
  if(itemCount > 0 && itemCount <= 5){
    discount = 5; // 5%
  } else if(itemCount > 5 && itemCount <= 10){
    discount = 10;
  } else if(itemCount > 10) {
    discount = 15;
  } else {
    throw new Error('The number of items cannot be negative!');
  }
  console.log(`You got ${discount}% discount. `)
</code>

In quest'esempio, quando il numero di oggetti é maggiore di 10, lo sconto sarà del 15%. Lo statement nel secondo branch else if si esegue.

Se il numero di oggetti fosse minore di zero, lo statement nel branch **else** si eseguirebbe.

## 13. Switch...case

Lo switch (no switch...case) é un costrutto di programmazione utile in varie situazioni e che porta diversi vantaggi:

- quando si hanno molte condizioni if-else basate sullo stesso valore o espressione, lo switch rende il codice (ma anche no) più pulito e leggibile.

- quando si lavora con valori enumerati (enum). In questo caso, ogni case dello switch può corripondere ad un valore dell'enum.

- migliora (insomma) la leggibilità del codice quando confronti lo stesso valore con diverse costanti o valori letterali.

- in alcuni linguaggi e situazioni, lo switch può essere più efficente rispetto a molteplici istruzioni if-else, sopratutto quando il numero di case é elevato.

- risulta (insomma) più facile da mantenere e modificare. Aggiungere o rimuovere un case é (insomma) geneeralmente più semplice rispetto alla modifica di una serie di if-else annidati.

- permette l'uso di un caso default che viene eseguito quando nessuno degli altri casi corrisponde. Questo può essere utile per gestire situazioni impreviste o valori di input non validi.

Tuttavia é importante notare che lo switch case non é sempre la scelta migliore. Per esempio, non é ideale per condizioni complesse che richiedono valutazioni logiche multiple (come combinazioni di operatori AND e OR). In questi casi, un approccio basato su if-else potrebbe essere più indicato.

---

NOTA: Esempio non rappresentativo della differenza if-else switch, dove si cerca di indicare il migliore uso di switch dimostrando solamente che if-else sarebbe migliore, più sintetico e chiaro.

![alt text](https://talent.start2impact.it/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxtTXpFMk16RmxNQzFtTjJFMkxUUXdORFV0T0RKa01TMDNaVGs0T1dFM1l6bGhZekVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0%3D--4a68efff06dbb7bef1ab0993afb17d9050b60a98/codice%20ts%205.png?disposition%3Dattachment)

In sintesi da tutte le informazioni prese in questi anni, soprattutto raccolte ascoltando conferenze di persone molto più esperte di me, usare if-else o switch é esattamente la stessa cosa, dipende dallo sviluppatore. Non inficia l'uso di uno o dell'altro né sulla mentenibilità, né sulla leggibilità, né tantomeno sulle prestazioni.
Questo mio pensiero é confermato dal fatto che nella documentazione suggerita non vi é alcun accenno a quanto elencato da chi ha scritto il corso, ma solo una descrizione tecnica dello switch.

---

## 14. For

Il ciclo for é una struttura di controllo fondamentale nella programmazione, utilizzata per ripetere un blocco di codice un numero definito di volte.

E' particolarmente utile in diverse situazioni:

- Il ciclo for é ideale per iterare su elements di array, liste, stringhe o quasi qualsisi tipo di collezione. Permette di eseguire operazioni su ciascun elemento della collezione.

- Quando si ha bisogno di eseguire un blocco di codice un certo numero di volte, il ciclo for é una scelta eccellente. Per esempio, eseguire un'operazione 10 volte.

- Risorse utile per l'elaborazione di dati sequenziali, come leggere o scrivere su file, dove ogni element deve essere processato uno dopo l'altro.

- Nelle operazioni che richiedono calcoli ripetitivi, come il calcolo di serie matematiche o l'implementazione di algoritmi, il ciclo for é spesso impiegato.

- Quando un compito deve essere svolto in passi definiti, dove ciascun passo é una iterazione del ciclo.

- Offre una sintassi chiara e concisa che rende il codice facilmente comprensibile, specialmente in situazioni in cui il numero delle iterazioni é noto in anticipo.

- Permette di controllare facilemente l'indice di iterazione, che può essere utilizzato per accedere agli elementi di una collezione o per eseguire calcoli.

Il ciclo for é uno strumento versatile e potente per gestire operazioni ripetitive in modo efficiente e chiaro.

Tuttavia, in situazioni in cui il numero di iterazioni non é noto in anticipo o dipende da condizioni variabili, altre strutture come il ciclo while potrebbero essere più appropriate.

### TypeScript for

Il seguente esempio mostra la sintassi per la dichiarazione **for loop** di TypeScript:

<code>
  for(initialization; condition; expression) {
    <!-- statement -->
  }
</code>

Il **for loop** statement crea un loop. Consiste in tre espressioni separate da semicolons (;) e chiuse tra parentesi:

- **initialization**: é un espressione valutata una volta che il loop comincia. Tipicamente, si utilizza l'**initialization** per inizializzare un counter del loop.

- **condition** - é un'espressione che viene valutata alla fine di ogni iterazione del loop. Se **condition** é true, gli statements nel body del loop si eseguono.

- **expression** - é un espressione che viene valutata prima che la **condition** venga valutata alla fine di ogni iterazione del loop. Generalmente, si usa l'**expression** per aggiornare il counter del loop.

Tutte e tre le expressions nel **for loop** sonon opzionali. Significa che si può usare la dichiarazione **for loop** così:

<code>
  for(;;){
    <!-- do something -->
  }
</code>

In pratica, si dovrebbe usare un for loop se si sa quante volte il loop dovrebbe eseguirsi. Se si vuole fermare il loop in base ad una condizione rispetto al numero di volte in cui il loop si esegue, si dovrebbe usare un **while loop**.

TypeScript permette di omettere completamente il body come segue:

<code>
  for(initialization; condition; expression);
</code>

Comunque, viene raramente usato in pratica perché rende il codice più difficile da leggere e da mantenere.

#### TypeScript for examples

##### 1. Simple TypeScript for example

Il seguente esempio usa la dichiarazione for loop per avere l'output di 10 numeri da 0 a 9 in console:

<code>
  for(let i = 0; i < 10; i++) {
    conosole.log(i);
  }
</code>

##### 2. Optional block

Il seguente esempio mostra lo stesso output dell'esempio soprastante, tuttavia il for loop non ha il block di **initialization**:

<code>
  let i = 0;
  for( ;i < 10; i++){
    console.log(i);
  }
</code>

Come per l'**initialization** block, si può omettere anche il **condition** block.

Comunque, occore uscire dal loop quando una condizione é raggiunta usando gli statements **if** e **break**. Altrimenti, si creerà un infinite loop che causerà l'esecuzione ripetuta fino al crash.

<code>
  for(let i = 0; ; i++){
    console.log(i);
    if(i > 9) break;
  }
</code>

L'esempio seguente illustra un **for loop** che omette tutti e tre i blocchi:

<code>
  let i = 0;
  for( ; ; ){
    console.log(i);
    i++;
    if(i > 9) break;
  }
</code>

Come funziona:

- primo, dichiara un counter del loop i inizializzato a 0 prima di entrare nel for loop.
- secondo, in ogni iterazione del loop, si da l'output di i in console, incrementando di uno, e si rompe il loop se i diviene più grande di 9.

## 15. while

Il while loop esegue un blocco di codice finché una condizione specificata é vera. A differenza del do...while loop il while verifica la condizione prima di eseguire il blocco di codice per la prima volta. Se la condizione é false fin dall'inizio, il blocco di codice all'interno delwhile loop potrebbe non essere mai eseguito.

I quest'esempio, inizializziamo una variabile counter con value 1. Il while loop controlla se counter é minore o uguale a 5 e, se loé, entrerà nel loop mostrando il valore nella console ed incrementandolo di 1 ogni volta; ripeterà questa iterazione fintanto che counter non sarà uguale o maggiore di 5.

<code>
  let counter: number = 1;
  while (counter <= 5){
    console.log("Iterazione numero " + counter);
    counter++;
  }
</code>

### TypeScript while

Lo statement **while** permette di creare un loop che esegue un blocco di codice fintanto che una condizione é vera.

Il seguente esempio mostra la sintassi della dichiarazione **while** in TypeScript:

<code>
  while(condition){
    <!-- do something -->
  }
</code>

Lo statement **while** valuta la condizione **prima** di ogni iterazione del loop.

Se la **condition** viene valutata come true, la dichiarazione **while** esegue il codice nel body tra parentesi grafe { }.

Quando la **condition** viene valuta come false, l'esecuzione continua con le dichiarazioni dopo quella **while**.

Visto che la dichiarazione **while** valuta la **condition** prima che il body venga eseguito, un **while** loop viene anche chiamato **pretest loop**.

Per rompere il loop prematuramente in base ad un'altra condizione, si usano le dichiarazioni **if** e **break**:

<code>
  while(condition){
    <!-- do something -->
    if(anotherCondition){
      break;
    }
  }
</code>

Se si vuole eseguire un loop un numero definito di volte, si dovrebbe usare lo statement **for** di TypeScript.

#### TypeScript while statement examples

##### TypeScript while: a simple example

Il seguente esempio usa lo statement **while** per avere l'output di un numero nella console fino a che é minore di 5:

<code>
  let counter = 0;
  while (counter < 5){
    console.log(counter);
    counter++;
  }
</code>

Come funziona:+

- prima, dichiara una variabile **counter** e la inizializza a 0.

- poi, controlla se **counter** é minore di 5 prima di entrare nel loop. Se lo é, verrà mostrato l'output in console ed incrementata di uno.

- infine, si ripete il passo precedente fino a che conter é minore di 5.

##### TypeScript while loop practical example

Diciamo di avere la seguente lista di element in un documento HTML:

<code>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</code>

Il seguente esmepio mostra come usare lo statement **while** per rimuovere tutti gli element "li" dell'element "ul":

<code>
  let list = document.querySelector('#list');
  while(list.firstChild){
    list.removeChils(list.firstChild);
  }
</code>

Come dovrebbe teoricamente funzionare:

- prima, selezione l'element ul in base all'id con querySelector()

- poi, controlla se **firstChild** di **list** é disponibile e lo rimuove. Una volta che il node first child é stato rimossom il successivo child node viene automaticamente promosso a forst child node. Quindi, il **while statement** rimuove tutti i child nodes dell'element **list**.

## 16. do...while

Il do...while loop é una struttura di controllo che esegue un blocco di codice almeno una volta, e poi continua a eseguirlo finché una condizione specificata é vera.

La peculiarità di questo loop é che la condizione viene valutata alla fine di ogni iterazione, invece che all'inizio come nel while loop. Questo significa che il blocco di codice all'interno del do...while viene eseguito almeno una volta, indipendentemente dalla condizione.

### TypeScript do while

Il seguente esempio mostra la sintassi dello statement **do...while**:

<code>
  do {
    <!-- do something -->
  } while(condition);
</code>

La dichiarazione **do...while** esegue le dichiarazioni nel suo body tra curly braces { } fino a che **condition** non viene valutata come false.

La dichiarazione **do...while** esegue sempre il body del loop almeno una volta.

A differenza della dichiarazione **while**, la **do...while** valuta la condizione dopo ogni iterazione del loop, quindi, viene chiamato **post-test loop**.

#### TypeScript do...while statement example

Il seguente esempio usa il **do...while** statement per ottenere l'output in console dei numeri da 0 a 9:

<code>
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 10);
</code>

Come funziona:

- prima, dichiara una variabile i e la inizializza a zero prima di entrare nel loop.

- poi, mostra l'output di i in console, incrementa di uno, e controlla se questa e minore di 10. Se lo é, ripete il loop fino a che i non é maggiore o uguale a 10.

## 17. break

Il comando **break** é utilizzato per terminare l'esecuzione di un loop (come for, while o do..while) (in alternativa anche return) prima che raggiunga la sua condizione naturale di terminazione. E' particolarmente utile quando si vuole interrrompere un loop in base ad un condizione specifica che si può verificare all'interno del loop stesso.

### TypeScript break

#### Using TypeScript break to terminate a loop

La dichiarazione break permette di terminare un loop e passare il controllo del programma sullo statement successivo a tale loop.

Si può usare la dichiarazione break dentro alle dichiarazioni di loop **do**, **while** e **do...while**.

Il seguente esempio mostra come usare la dichiarazione break dentro ad un loop:

<code>
  let products = [
    {name: "phone", price: 700},
    {name: "tablet", price: 900},
    {name: "laptop", price: 1200}
  ];
  for(let i = 0; i < products.length; i++){
    if(products[i].price === 900) break;
  }
  console.log(products[i]);
</code>

Output:
---> {name: "tablet", price: 900}

Come funziona:

- prima, inizializza una lista di prodotti con name e price come properties.
- poi, cerca il product il quale prezzo é 900 e tremina il loop una volta che il product viene trovato usando lo statement **break**.
- Infine, mostra il prodotto trovato nella console.

#### Using the break statement to break a switch

Il seguente esempio restituisce lo sconto di uno specifico prodotto. Usa ll statement **break** per uscire fuori da uno **switch**:

<code>
  let products = [
    {name: "phone", price: 700},
    {name: "tablet", price: 900},
    {name: "laptop", price: 1200}
  ];
  let discount = 0;
  let product = products[1];
  switch(product.name){
    case 'phone':
      discount = 5;
      break;
    case 'tablet':
      discount = 10;
      break;
    case 'laptop':
    discount = 15;
    break;
  }
</code>

> [!IMPORTANT]
> Si noti che oltre ad un loop o uno switch, la dichiarazione **break** può essere usata per uscire da una dichiarazione etichettata (labeled). Comunque, viene raramente usata nella pratica quindi non occorre trattarla qui.

## 18. continue

Il comando continue viene utilizzato all'interno di un loop per saltare l'iterazione corrente e procedere direttamente alla successiva. A differenza del comando **break**, che interrompe definitivamente il loop, continue semplicemente interrompe l'iterazione corrente e passa (continue) alla successiva.

### TypeScript continue

Lo statement **continue** viene usato per controllare un loop come un **for loop**, un **while loop** o un **do...while loop**:

La dichiarazione **continue** salta alla fine del loop e continua alla seguente iterazione.

#### Using the TypeScript continue statement inside a for loop

Il seguente esempio illustra come usare lo statement **continue** dentro un **for loop**:

<code>
  let (let indedx = 0; index < 9; i++){
    // se l'index é dispari, saltalo
    if (index % 2){
      continue;
    }
    // il codice seguente verrà saltato per i numeri dispari
    console.log(index);
  }
</code>

In quest'esempio:

- prima, esegui il loop sui numeri da 0 a 9.

- dopo, se il numerom attuale é un numero dispari, salta l'output del numero in console usando lo statement **continue**. Con index % 2 i numeri pari danno false quindi verrà completato il loop con l'output in console.

#### Using the TypeScript continue statement inside a while loop

Il seguente esempio mostra come usare lo statement **continue** in un **while loop**. Restituisce lo stesso risultato dell'esempio precedente:

<code>
  let index = -1;
  while(index < 9){
    index = index + 1;
    if(index % 2){
      continue;
    }
    console.log(index);
  }
</code>

#### Using the TypeScript continue statement inside a do while loop

Il seguente esempio dimostra come usare lo statement **continue** in un **do...while loop**. Restituisce il numero di numeri pari da 9 a 99:

<code>
  let index = 9;
  let count = 0;
  do {
    index += 1;
    if(index % 2){
      continue;
    } 
    count += 1; 
  } while (index < 99);
</code>

## 19. Verifica conoscenze

- 4 / 5

## 20. Esercizio - Statement

Il tuo obiettivo in questo esercizio è di scrivere statement di controllo del flusso per gestire una decisione semplice e un’interazione.

Data una variabile numero con un valore assegnato, scrivi uno statement if per controllare se il numero è pari.

Se è pari, stampa "Pari", altrimenti stampa "Dispari".

Dopodichè, utilizza un ciclo for per stampare i numeri da 1 a 5.

Soluzione:

<code>
  const num: number = 2:
  if(num % 2 === 0) {
    console.log('Pari');
  } else {
    console.log('Dispari');
  }
  oppure:
  if(num % 2){
    console.log('Dispari');
  } else {
    console.log('Pari');
  }
</code>

<code>
  for(let i = 1; i <= 5; i++){
    console.log(i);
  }
  oppure:
  let i = 1;
  for(; i <= 5; i++){
    console.log(i);
  }
  oppure:
  for(let i = 1; i < 6; i++){
    console.log(i);
  }
</code>

Perfetto.

## 21. Funzioni

Le funzioni sono uno dei costrutti fondamentali per strutturare il codice in blocchi riutilizzabili e organizzati.

Una funzione può essere vista come un insieme di istruzioni che esegue un compito specifico e può essere chiamata da altra parti del codice.

Le funzioni possono essere definite in diversi modi, e grazie alla natura tipizzata di TypeScript, offrono il vantaggio di poter specificare i types di dati sia per i parametri in ingresso che per le values di ritorno. Questo migliora la leggibilità del codice e riduce gli errori in runtime dovuti alle incompatibilità di tipo.

### TypeScript Functions

Le funzioni di TypeScript sono blocchi di codice leggibile, mantenibile e riusabile.

Come JavaScript, si usa la keyword **function** per dichiarare una funzione in TypeScript:

<code>
  function name(parameter: type. parameter: type, ...):returnType {
    // function body
  }
</code>

A differenza di JavaScript, TypeScript permette di usare le type annotations nei parametri e nella value restituita da una funzione:

Vediamo il seguente esempio con la funzione **add()**:

<code>
  function add(a: number, b: number): number {
    return a + b;
  }
</code>

In quest'esempio, la funzione **add()** accetta due parametri con il type **number**.

Quando si chiama la funzione **add()**, il compilatore TypeScript controlla ogni argument passato alla funzione per assicurarsi che siano numbers.

Nell'esempio della funzione **add()**, si possono passare solo numeri a questa, non values di altri types.

Il codice seguente mostrerà un errore, visto che passa due strings:

<code>
  let sum = add('10', '20');
</code>

Error:
---> error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'.

Il types dei parametri della funzione sono disponibili anche nel body della funzione per il type checking.

Il **:number** dopo le parentesi tonde della dichiarazione indica il return type. La funzione **add()** restituisce una value di type number in questo caso.

Quando una funzione non restituisce una value, si può usare il type **void** come return type. La keyword **void** indica che la funzione non restituisce alcuna value. Per esempio:

<code>
  function echo(message: string): void {
    console.log('message.toUpperCase()');
  }
</code>

Il **void** previene la restituzione di una value da parte del codice all'interno della funzione e ferma la chiamata della funzione dall'assegnare il result della funzione ad una variabile.

Quando non viene annotato il return type, TypeScript proverà a dedurre (type infer) un type appropriato. Per esempio:

<code>
  function add(a: number, b: number){
    return a + b;
  }
</code>

In quest'esempio, il compilatore TypeScript prova a dedurre il type di return per la funzione add() al **number** type, che é ciò che ci si aspetta.

Comunque, se una funzione a diversi branches che restituiscono type differenti, il compilatore TypeScript potrebbe dedurre (infer) lo **union type** o l'**any type**.

In ogni caso, é importante aggiungere le type annotations ad una funzione il più possibile.

## 22. Parametri di default

In TypeScript, i parametri di default, noti anche come valori predefiniti dei parametri, consentono di assegnare un valore di default ai parametri di una funzione.

Questo significa che se un argument non viene fornito, quando la funzione viene chiamata, verrà utilizzato la value di default predefinita nella dichiarazione.

Questa caratteristica é particolarmente utile per creare funzioni più flessibili e per gestire situazioni in cui alcuni argomenti potrebbero non essere forniti.

Un parametro con una value di default viene definito assegnando una value direttamente nella dichiarazione della funzione. Questo valore verrà utilizzato qualora la chiamata alla funzione ometta tale parametro.

E' importante notare che i parametri con valori di default possono essere seguiti da altri parametri, ma questi altri parametri devono essere passati esplicitamente o come undefined per poter accedere al valore di default del parametro precedente.

L'uso dei parametri di dafault semplifica la gestione di diverse situazioni nelle quali alcuni dati potrebbero non essere disponibili, rendendo le funzioni più robuste e meno soggette a errori dovuti ad arguments mancanti nelle chiamate. Inoltre contribuisce a ridurre la necessità di sovraccaricare funzioni (function overload) o di scrivere codice aggiuntivo per gestire casi nei quali gli arguments non vengono forniti.

### TypeScript default parameters

JavaScript supporta i parametri di default dall'ES6 con la seguente sintassi:

<code>
  function name(parameter1=defaultValue1,...){
    // function body
  }
</code>

I questa sintassi, se non si passano arguments o si passa undefined nella funzione alla chiamata, la funzione prenderà le values di default inizializzate per i parametri omessi. Per esempio:

<code>
  function applyDiscount(price, discount = 0.05){
    return price * (1 - discount);
  }
  console.log(applyDiscount(100)); 
  // 95
</code>

In quest'esempio, la funzione applyDiscount ha il parametro discount come un parametro con value di default.

Quando non si passa una value per l'argument discount alla chiamata della funzione applyDiscount(), la funzione usa una value di deafult che é 0.05.

Similarmente a JavaScript, si possono usare i parametri di default in TypeScript con la stessa sintassi:

<code>
  function name(parameter1: type = defaultValue1, parameter2: type = defaultValue2, ...){
    // function body
  }
</code>

Il seguente esempio usa i parametri di default per la funzione applyDiscount():

<code>
  function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
  }
  console.log(applyDiscount(100)); 
  // 95
</code>

Si noti che non si possono includere i parametri di default nelle definizioni dei type nelle function expression. Il seguente codice risulterà darà un errore:

<code>
  let promotion: (price: number, discount: number = 0.05) => number;
</code>

Error:
---> error TS2371: A parameter initializer is only allowed in a function or constructor implementation.

#### Default parameters and Optional parameters

Come gli optional parameters, i parametri di default sono opzionali. Significa che si possono omettere i parametri di default quando chiamiamo una funzione.

In più, sia i parametri di default che quelli finali condividono lo stesso type. Per esempio, la seguente funzione:

<code>
  function applyDisocunt(price: number, discount: number = 0.05): number {
    // function body
  }
</code>

e questa:

<code>
  function applyDiscount(price: number, discount?:number): number {
    // function body
  }
</code>

Condividono lo stesso type:

<code>
  (price: number, discount?: number) => number
</code>

I parametri opzionali devono essere inseriti dopo i parametri necessari richiesti. Mentre, i parametri di default non devono per forza essere inseriti dopo quelli richiesti.

Quando un parametro di default viene messo prima di quello necessario occorre passare esplicitamente **undefined** per ottenere la value di default con il quale é stato inizializzato.

La seguente funzione restituisce il numero di giorni in uno specifico mese ed anno:

<code>
  function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
  }
</code>

In quest'esempio, la value di dafault del corrente anno é l'anno corrente se non si passa un argument o si passa la value undefined.

Il seguente esempio usa la funzione getDay() per ottenere il numerno di giorni di febbraio del 2019:

<code>
  let day = getDay(2019, 2);
  console.log(day); 
  // 28
</code>

Per ottenere il numero di giorni di febbraio dell'anno corrente, si ha bisogno di passare undefined al parametro dell'anno:

<code>
  let day = getDay(undefined, 2);
  console.log(day);
</code>

Si usi quindi la sintassi per i parametri di default:
parameter: type = defaultValue se si vuole impostare una value di default per il parametro all'inizializzazione.
Si ricordi che sono opzionali.
Per utilizzare la value di default occorre omettere la value dell'argument alla chiamata della funzione o passarvi undefined.

## 23. Parametri opzionali

I parametri opzionali in TypeScript offrono una flessibilità notevole nella definizione delle funzioni, permettendo di specificare arguments che possono o non possono essere forniti quando la funzione viene chiamata. Questo é particolarmente utile in scenari dove una funzione deve gestire diverse combinazioni di input, o quando si desidera fornire valori predefiniti per alcuni parametri.

Le principali caratteristiche dei parametri opzionali sono:

- un parametro opzionale é indicato da un question mark ? dopo il name del parametro nelle definizione della funzione.

- i parametri opzionali devono essere collocati dopo i parametri obbligatori.

- se un parametro opzionale non viene fornito al momento della chiamata della funzione, il suo valore sarà undefined, a meno che non sia specificato un valore predefinito.

- la possibilità di omettere alcuni parametri rende le funzioni più flessibili e adattabili a diversi casi d'uso.

Mentre i parametri opzionali possono rendere una funzione più flessibile, un eccessivo utilizzo può rendere il codice meno chiaro e più difficile da capire. E' importante trovare un equilibrio tra flessibilità e leggibilità.

I parametri opzionali possono essere combinati con le values di default per fornire un comportamento standard quando non vengono specificati.

In TypeScript, l'uso dei parametri opzionali é particolarmente utile perché consente di mantenere la sicurezza del type anche quando alcuni arguments non vengono forniti.

I parametri opzionali, quindi, sono uno strumento potente per creare funzioni con una maggiore capacità di adattamento a diversi scenari di chiamata, migliorando al contempo la gestione del codice e mantendo la sicurezza del type.

### TypeScript Optional Parameters

In TypeScript, si può chiamare una funzione senza passare nessun argument anche se la funzione specifica dei parametri. Inoltre, JavaScript supporta i parametri opzionali di default.

In TypeScript, il compilatore controlla ogni chiamata della funzione e segnala un errore nei seguenti casi:

- il numero di arguments é differente dal numero dei parametri specificato nella dichiarazione della funzione.

- o i types degli arguments non sono compatibili con i types dei parametri della funzione.

Visto che il compilatore controlla approfonditamente gli arguments passati, occorre annotare i parametri opzionali per istruire il compilatore a non segnalare un errore quando ometteremo degli arguments.

Per rendere una funzione con parametri opzionali, si usa il question mark ? dopo il name del parametro. Per esempio:

<code>
  function multiply( a: number, b: number, c?: number): number {
    if(typeof c !== "undefined"){
      return a * b * c;
    }
    return a * b;
  }
</code>

Come funziona:

- prima, si usa il question mark ? dopo il parametro **c**
- poi, controlla se l'argument viene passato alla funzione usando l'espressione **typeof c !== "undefined"**.

> [!IMPORTANT]
> Si noti che se si usa l'espressione if(c) per controllare se un argument non é inizializzato, i valori zero e empty string verranno trattati come undefined.

I parametri opzionali devono essere inseriti dopo i parametri richiesti nella lista dei parametri della dichiarazione della funzione tra parentesi tonde.

Per esempio, se si rende b un parametro opzionale, e c un parametro richiesto, il compilatore TypeScript segnalerà un errore:

<code>
  function multiply(a: number, b?: number, c: number): number {
    // function body
  }
</code>

Error:
---> error TS1016: A required parameter cannot follow an optional parameter.

In sintesi si usi la sintassi

<code>
  parameter?: type = value per rendere un parametro opzionale.
</code>

Si usi poi un'espressione typeof(parameter) !== "undefined" per controllare se il parametro é stato inizializzato.

## 24. Rest parameters

I rest parameters rappresentano un modo estremamente flessibile di gestire un numero indeterminato di arguments di una funzione. Questi permettono di definire funzioni che possono ricevere qualsiasi quantità di input, il che é utile in scenari nei quali non é possibile predeterminare il numero di arguments dei quali la funzione potrebbe necessitare.

Un rest parameter si distingue per l'uso di tre puntini (...) prima del name, indicando che la funzione può accogliere un numero arbitrario di arguments.

Per illustrarli, consideriamo una funzione che somma un numero variabile di numeri. Utilizzando un rest parameter possiamo definire la funzione in modo che accetti un numero qualsiasi di arguments numerici. All'interno della funzione, questi arguments vanno trattati come un array, consentendo di utilizzare metodi come reduce per elaborarli.

Per esempio una funzione totalSum che utilizza un rest parameter può facilmente sommare una serie di numeri, indipendentemente da loro numero.

La bellezza dei rest parameters sta nella loro capacità di rendere le funzioni molto più adattabili. Tuttavia, é importante usare questa caratteristica con cautela.

Un uso eccessivo può complicare la comprensione del codice, sopratutto in funzioni con molteplici arguments o logica complessa.
Inoltre, pur essendo potenti, i rest parameters devono essere collocati alla fine della lista dei parametri di una funzione, mantenendo così la chiarezza e l'organizzazione del codice.

I rest parameter offrono una soluzione efficace per gestire funzioni con input varaibili. Consentono di scrivere codice più flessibile e riutilizzabile, pur mantenendo la sicurezza del type e la chiarezza che caratterizzano TypeScript.

### TypeScript rest parameters

Un rest parameter permette ad una funzione di accettare zero o più arguments di uno specifico type. In TypeScript, i rest parameters seguono queste regole:

- una funzione ha solo un rest parameter.
- il rest parameter compare come ultimo parametro della lista dei parametri
- il type del rest parameter é un array type.

#### Rest parameters with a single type

Per dichiarare un rest parameter, si usa il prefisso dei tre dots (...) e si usa un array type come type annotation:

<code>
  function fn(...rest: type[]){
    // function body
  }
</code>

Il seguente esempio mostra come usare il rest parameter:

<code>
  function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.map((num) => total += num);
    return total;
  }
</code>

In quest'esempio, la funzione getTotal() calcola il totale dei numbers che le vengono passati.
Visto che il parametro numbers é un rest parameter, si possono passare uno o più numeri per calcolarne il totale:

<code>
  console.log(getTotal()); // 0
  console.log(getTotal(10, 13)); // 23
  console.log(getTotal(10, 20, 30)); // 60
</code>

#### Rest parameters with multiple types

TypeScript permette di gestire i rest parameters con molteplici types usando gli union types. Per esempio:

<code>
  function combine(...args: (number | string)[]): [number, string]{
    let total = 0;
    let str = '';
    args.map((arg) => {
      if(typeof arg === "number"){
        total += arg;
      } else if(typeof arg === "string"){
        str += arg;
      }
    });
    return [total, str]; 
  }
  const [total, str] = combine(1, "Happy", 2, 3, " New Year!" );
  console.log({total});
  console.log({str});
</code>

Output:
---> {total: 6}
---> {str: "Happy New Year"}

In quest'esempio, definiamom una funzione **combine()** che prende un numero varaibile di arguments usando i rest parameters che possono essere sia numbers che strings:

<code>
  ...args: (number | string)[]
</code>

La funzione fa due cose:

- somma tutti i numeri
- concatena tutte le strings

Poi, restituisca un tuple contenente la somma totale dei numeri e la string concatenata.

In sintesi:

- Si usino i rest parameters per permettere ad una funzione di accettare un numero variabile di arguments con lo stesso o differente type. I rest parameters sono sempre un array.
- Si usi la sintassi **...args: type[]** per definire i rest parameters con lo stesso type.
- Si usi la sintassi **...args: (type1 | type2)[]** per definire i rest parameters con differenti types.

## 25. Function overloading

Il function overloading é una caratteristica dei linguaggi di programmazione come TypeScript che permette di avere più funzioni con lo stesso name ma con liste di parametri differenti. Questo permette di chiamare la stessa funzione in modi diversi, a seconda del numero o dei types di arguments passati.

E' importante notare che TypeScript realizza l'overloading delle funzioni a livello di type piuttosto che a livello di implementazione come in altri linguaggi.

In TypeScript, l'overloading si ottiene definendo più firme per la stessa funzione. Queste firme sono solo delle dichiarazioni: non contengono logica funzionante. Dopo le firme, si scrive l'implementazione della funzione, che deve essere compatibile con tutte le firme dichirate.

Il function overloading é utile per creare interfacce di funzione flessibili e leggibili. Consente di gestire diversi type di dati con una singola funzione, riducendo la necessità di avere names di funzione diversi per lo stesso tipo di operazione.

Tuttavia, é importante gestire correttamente l'implementazione per assicurarsi che la funzione gestisca correttamente tutti i type di input previsti dalle firme.

In quest'esempio, la funzione add é sovraccaricata con due firme: una che accetta due numbers e una che accetta due strings. L'implementazione della funzione utilizza il type **any**, che é compatibile con entrambe le firme.

Quando la funzione viene chiamata, TypeScript determina quale firma si sta cercando di usare in base ai type degli arguments passati:

<code>
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: any, b: any): any {
    return a + b;
  }
  let addNumbers = add(5, 10); // 15
  let addStrings = add("Ciao", "mondo"); // Ciao mondo
</code>

### TypeScript function overloading

Il function overloading permette di definire molteplici signatures (firme) per una singola funzione e fornisce un'implementazione che gestisce tutte le signatures definite.

Il function overloading abilita una funzione a gestire differenti types di arguments.
Inoltre, il compilatore TypeScript usa le signatures della funzione per eseguire un type-checking in fase di compilazione per assicurare il type safety.

> [!IMPORTANT]
> Si noti che il function overloading di TypeScript é differente da quello supportato da altri linguaggi tipizzati staticamente come Java.

#### TypeScript function overloading example

Cominciamo con una semplice funzione che restituisce la somma di due numbers o strings.

Prima definiamo le overloaded signatures:

<code>
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
</code>

Per secondo, forniamo l'implementazione per funzione **add**:

<code>
  function add(a: any, b: any): any {
    if(typeof a === 'number' && typeof b === 'number'){
      return a + b;
    } else if(typeof a === 'string' && typeof b === 'string'){
      return a + b;
    }
    throw new Error('Invalid arguments');
  }
</code>

Terzo, usare l'overloaded function:

<code>
  console.log(add(10, 13)); // 23
  console.log(add('Hello ', 'World')); // Hello World
</code>

#### Function overloading with optional parameters

Quando si esegue overload di una funzione, il numero di parametri richiesto dovrebbe essere lo stesso. Se un overload ha più parametri di un altro, occorre rendere i parametri addizionali opzionali nell'implementazione. Per esempio:

<code>
  function sum(a: number, b: number): number;
  function sum(a: number, b: number, c: number);
  function sum(a: number, b: number, c?: number): number {
    if(c) return a + b + c;
    return a + b;
  }
</code>

La funzione **sum()** accetta sia due che tre numeri. Il terzo parametro é opzionale. Se non lo si rende opzionale, si otterrà un errore.

#### Method overloading

Quando una funzione é una property di una class, viene chiamato metodo. TypeScript supporta il method overloading oltre al function overloading. Per esempio:

<code>
  class Counter {
    private current = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
      if(target) {
        let values: number[] = [];
        for(let start = this.current; start <= target; start++) {
          values.push(start);
        }
        // imposta current a target
        this.current = target;
        return values;
      }
      return ++this.current;
    }
  }
</code>

La funzione **count()** può restituire un numero o un array in base al numero di arguments che gli si passa alla chiamata:

<code>
  let counter = new Counter();
  console.log(counter.count()); // return a number
  console.log(counter.count(5)); // return an array
</code>

Output:
---> 1
---> [1, 2, 3, 4, 5]

In sintesi, si usi il function overloading per definire molteplici signatures per una singola funzione o metodo per assicurare il type safety. Poi si gestiscano i vari type nella dichiarazione effettiva della funzione.

## 26. Verifica conoscenze

5 / 5 - prima domanda con risposta corretta errata. Il question mark va dopo il name del parametro.

## 27. Video Tutorial Functions

Riassunto Video Tutorial parte 7:

- Types nelle funzioni
- parametri di default
- differenze types di return
- assegnare ad una variabile il type Function

## 28. Esercizio - Funzioni

Traccia:

Il tuo obiettivo in questo esercizio è di scrivere diverse funzioni in TypeScript che dimostrino l'uso di parametri obbligatori, opzionali, di default e rest parameter.

Definisci una funzione somma che accetta due parametri numerici e restituisce la loro somma.

Modifica la funzione somma per accettare un terzo parametro numerico opzionale. Se il terzo parametro viene fornito, aggiungilo alla somma dei primi due.

Definisci una funzione saluto che accetta un nome (stringa) e un messaggio di saluto (stringa) con un valore di default "Ciao". La funzione restituisce un saluto personalizzato.

Definisci una funzione mediaNumeri che accetta un numero qualsiasi di argomenti numerici e restituisce la loro media.

Soluzioni:

- Prima parte

<code>
  function sum(firstNum: number, secondNum: number): number {
    return a + b;
  }
</code>

- Seconda parte

<code>
  function sum(firstNum: number, secondNum: number, thirdNum?: number): number {
    if(typeof thirdNum !== undefined){
      return a + b + c;
    } else {
      return a + b;
    }
  }
  console.log(sum(1, 2));
</code>

oppure:

<code>
  function sum(firstNum: number, secondNum: number, thirdNum?: number): number {
    if(thirdNum !== false){
      return a + b + c;
    } else {
      return a + b;
    }
  }
  console.log(sum(1, 2));
  console.log(sum(1, 2, 3));
</code>

- Terza parte

<code>
  function greetings(name: string, message: string = "Ciao"): string {
    return `${message}, ${name}`;
  }
</code>

oppure:

<code>
  function greetings(name: string, message: string = "Ciao"): string {
    return message + ", " + name;
  }
  console.log(greetings("Evy"));
  console.log(greetings("Evy", "Buongiorno"));
</code>

- Quarta parte

<code>
  function averageNum(...nums: number[]): number {
    let sum = 0;
    nums.map((num) => {
      return num + sum;
    })
    return sum / nums.length;
  }
  console.log(averageNum(1, 2, 3));
</code>

oppure:

<code>
  function averageNum(...nums: number[]): number {
    const sum = nums.reduce((acc, value) => {
      return acc + value;
    }, 0)
    return sum / nums.length;;
  }
  console.log(averageNum(1, 2, 3));
</code>

Controllo

- Prima parte - Perfetto
- Seconda parte - Perfetto
- Terza parte - Perfetto
- Quarta parte - Quasi perfetto, procedimento perfetto, calcolo media letto male, valutato come somma mancava
  / nums.lenght.

## 29. Classi

Le classi sono un concetto fondamentale che permette di strutturare il codice in modi che facilitano la programmazione orientata agli oggetti. Una classe può essere vista come un blueprint per creare objects ( istanze ) con properties e methods specifici.

Le classi in TypeScript estendono le funzionalità delle classi JavaScript, aggiungendo caratteristiche come la tipizzazione statica e la visibilità dei membri (public, private, protected).

### Esempio di classe TypeScript

Una classe tipica in TypeScript include un constructor e una serie di properties e methods:

Ecco un esempio di base:

<code>
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
      this.name = name;
      this.age = age;
    },
    greetings(){
      console.log(`Ciao, mi chiamo ${this.name} e ho ${this.age} anni.`);
    }
  }
  let personOne = new Person("Alice", 30);
  personOne.greetings();
  // ---> Ciao, mi chiamo Alice e ho 30 anni.
</code>

In quest'esempio abbiamo una classe Person con due properties (name ed age) ed un metodo (grettings).

Il constructor é un metodo speciale che viene chiamato quando si crea una nuova istanza della class.

### Tipizzazione e visibilità

TypeScript permette di specificare i types per le properties ed i methods, aumentando così la robustezza del codice.

Inoltre, si può controllare l'accesso ai membri della class usando le parole chiave **public**, **private** e **protected**.

- **public** - i membri publici sono accessibili a chiunque
- **private** - I membri privati sono accessibili solo all'interno della class in cui sono definiti
- **protected** - i membri sono accessibili all'interno della class e in tutte le sottoclassi dichiarate in seguito.

### Ereditarietà

Le classes in JavaScript e TypeScript possono ereditare da altre classes, un concetto noto come ereditarietà. Una subclass (sottoclassse) eredita properties e methods dalla class base, e può avere anche ulteriori proprietà e metodi o sovrascrivere quelli esistenti.

In quest'esempio, Student é una sottoclasse di Person e aggiunge una property course. Sovrascrive anche il metodo greetings per aggiungere infomazioni aggiuntive.

<code>
  class Student extends Person {
    course: string;
    constructor(name: string, age: number, course: string ){
      super(name, age); // richiama il contructor della 
      // classe base
      this.course = course;
    }
    greetings(){
      super.greetings(); // chiama il metodo greetings della 
      // classe base
      console.log(`Studio ${this.course}.`);
    }
  }
  let studentOne = new Student("Bob", 20, "Informatica");
  studentOne.greetings();
  // ---> Ciao, mi chiamo Bob e ho 20 anni.
  // ---> Studio informatica.
</code>

Le classes in TypeScript offrono un modo potente e flessibile per organizzare e strutturare il codice, sfruttando i principi della programmazione orientata agli oggetti e fornendo una tipizzazione forte che aiuta a prevenire molti errori comuni in fase di sviluppo.

### TypeScript Class

JavaScript non ha un concetto di class come gli altri linguaggi di programmazione come Java e C#. In ES5, si possono usare una constructor function e l'ereditarietà prototipale (prototype inheritance) per creare una "class".

Per esempio, per creare una class Person che ha tre properties: ssn, firstName e lastName, si può usare la seguente constructor function:

<code>
  function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.forstName = firstName;
    this.lastName = lastName;
  }
</code>

Poi, si può definire un prototype method per ottenere il fullName della person concatenando il firstName ed il lastName così:

<code>
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
</code>

Poi, si può usare la class Person per creare un nuovo object:

<code>
  let person = new Person("171-28-0926", "John", "DOE");
  console.log(person.getFullName());
</code>

Output:
---> John Doe

ES6 permette di definire una class, che é semplicemte del syntatic sugar per creare delle constructor functions e la prototypal inheritance:

<code>
  class Person {
    ssn;
    firstName;
    lastName;
    constructor(ssn, firstName, lastName){
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
</code>

Nella sintassi della class, il constructor viene chiaramente definito e piazzato dentro alla class. Il seguente codice aggiunge il metodo getFullName() alla class:

<code>
  class Person {
    ssn;
    firstName;
    lastName;
    constructor(ssn, firstName, laastName){
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName(){
      return `${this.firstName} ${this.lastName}`;
    }
  }
</code>

Usando la class Person é la stessa cosa che usare la constructor function Person:

<code>
  let person = new Person('171-28-0926','John','Doe');
  console.log(person.getFullName());
</code>

Le classes di TypeScript aggiungono i type annotations alle properties ed ai methods delle classes. Il codice seguente mostra la class Person in TypeScript:

<code>
  class Person {
    ssn: string;
    firstName: string;
    lastName: string;
    constructor(ssn: string, firstName: string, lastName: string){
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
</code>

Quando si annotano i types alle propertiesm ai constructors ed ai metodi, il compilatore TypeScript si occuperà di prendersi cura dei controlli dei types corrispondenti.

Per esempio, non si può inizializzare la property ssn con un number. Il codice seguente segnalerà un errore:

<code>
  let person = new Person(171280923, "John", "Doe");
</code>

In sintesi:

- si usi la keyword **class** per definire una classe in TypeScript

- TypeScript sfrutta la sintassi delle classi ES6 e aggiunge le type annotations per rendere la class più robusta.

### TypeScript Inheritance

Una class può riusare le properties ed i metodi di un'altra class. Questa viene chaiamta **inheritance** (ereditarietà) in JavaScript e TypeScript.

La class che eredita le properties ed i methods viene chiamata **child class**. La class le quali properties e methods vengono ereditati viene definita **parent class**.

L'inheritance permette di riusare le funzionalità di una class esistente senza riscriverla.

JavaScript usa la prototypal inheritance, non la classica inheritance come Java o C#. ES6 introduce la sintassi class che é semplicemente del syntatic sugar dell'ereditarietà prototipale. TypeScript supporta l'inheritance come ES6.

Si supponga di avere la seguente class Person:

<code>
  class Person {
    constructor(private firstName: string, private lastName: string){}
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
      return `This is ${this.firstName} ${this.lastName}.`
    }
  }
</code>

Per ereditare da una class, si usi la keyword **extends**. Per esempio la seguente class Employee eredita dalla class Person:

<code>
  class Employee extends Person {
    // ...
  }
</code>

In quest'esempio, Employee é una child class mentre Person é una parent class.

#### Constructor

Visto che la class Person ha un constructor che inizializza le properties firstName e lastName, si ha bisogno di inizializzare queste properties nel constructor della class Employee chiamando il constructor della class parent.

Per chiamare il constructor della class parent nel constructor della class child, si usi la sintassi **super()**. Per esempio:

<code>
  class Employee extends Person {
    constructor(
      firstName: string,
      lastName: string,
      private jobTitle: string
    ) {
      super(firstName, lastName);
    }
  }
</code>

Il codice seguente crea un istanza della class Employee:

<code>
  let employee = new Employee("John", "Doe", "Web Developer");
  console.log(employee.getFullName());
  console.log(employee.describe());
</code>

Output:
---> John Doe
---> Web Developer

#### Method overriding

Quando si chiama il metodo employee.describe() sull'object employee, il metodo describe() della class Person viene eseguito e mostra il seguente messaggio: This is John Doe.

Se si volesse che la class Employee avesse la propria versione del metodo describe(), si può definirlo nella class Employee in questo modo:

<code>
  class Employee extends Person {
    constructor(
      firstName: string,
      lastName: string,
      private jobTitle: string
    ) {
      super(firstName, lastName);
    }
    describe(): string {
      return super.describe() + `I'm a ${this.jobTitle}.`;
    }
  }
</code>

Nel metodo describe(), chiamiamo il metodo describe() della class parent usando la sintassi:
**super.methodInParentClass()**

Se si chiama poi il metodo describe() sull'object employee, verrà invocato il metodo describe() nella class Employee:

 <code>
  let employee = new Employee("John", "Doe", "Web Developer");
  console.log(employee.describe());
 </code>

Output:
---> This is John Doe. I'm a Web Developer.

In sintesi:

- Si usi la keyword extends per permettere ad una class di ereditare da un altra class.

- Si usi super() per chiamare il constructor della class parent nel constructor della child class. Inoltre, si usi la sintassi super.methodInParentClass() per invocare il metodo methodInParentClass() in un metodo della child class.

### TypeScript Access Modifiers

Gli access modifiers (modificatori d'accesso) cambiano la visibilità delle properties e dei methods di una class. TypeScript fornisce tre access modifiers:

- private
- protected
- public

Si noti che TypeScript controlla l'accesso logico al momento della compilazione, non in runtime.

#### The private modifier

Il modifier **private** limita la visibilità solamente alla stessa class. Quando si aggiunge il modifier **private** ad una property o ad un method, si può accedere a tale property o method dall'interno di quella stessa class.
Ogni tentativo di accedere alle properties o ai methods private fuori dalla class risulterà un error in compile time.

Il seguente esempio mostra come usare il modifier **private** con le properties snn, firstName e lastName della class Person:

<code>
  class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;
    // ...
  }
</code>

Una volta che la property private é inserita, si può accedere alla property **ssn** nel constructor o nei metodi della class Person. Per esempio:

<code>
  class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;
    constructor(ssn: string, firstName: string, lastName: string){
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
</code>

Questo dimostra un tentativo di accedere alla property ssn fuori dalla class:

<code>
  let person = new Person('153-07-3130', 'John', 'Doe');
  console.log(person.ssn); // compile error
</code>

#### The public modifier

Il modifier **public** permette di rendere le properties ed i methods accessibili da tutte le posizioni. Se non si specifica nessun access modifier per le properties ed i methods, verrà preso il modifier **public** di default.

Per esempio, il metodo getFullName() della class Person vista precedentemente ha il modifier public. Il seguente esempio aggiunge esplicitamente il modifier **public** al metodo getFullName():

<code>
  class Person {
    // ...
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`; 
    }
  }
</code>

Si ottiene lo stesso effetto che se la keyword **public** fosse omessa.

#### The protected modifier

Il modifier **protected** permette alle properties ed ai methods di una class di essere accessibili attraverso la stessa class e le subclasses.

Quando una child class eredita da un'altra class, si definisce subclass.

Il compilatore TypeScript segnalerà un errore se si tenterà di accedere a proprietà e motodi da qualsiasi altro posto.

Per aggiungere il modifier **protected** ad una proprietà o ad un metodo, si usi la keyword **protected**. Per esempio:

<code>
  class Person {
    protected ssn: string;
    // ...
  }
</code>

La property ssn é ora protected. Sarà accessibile dalla class Person e ad ogni class che eredita dalla class Person.

La class Person dichiara le due properties private e una property protected. Il suo contructor inizializza queste properties a tre arguments:

<code>
  class Person {
    protected ssn: string;
    private firstName: string;
    private lastName: string;
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName(): string{
      return `${this.firstName} ${this.lastName}`;
    }
  }
</code>

Per rendere il codice più corto, TypeScript permette di dichiarare le properties ed inizializzarle nel constructor così:

<code>
  class Person {
    constructor(
      protected ssn: string,
      private firstName: string,
      private lastName: string
    ) {}
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
</code>

Quando si considera la visibilità delle proprietà e dei metodi, é una good practice cominciare con il modifier meno visibile, che é il modifier **private**.

In sintesi:

- TypeScript fornisce tre access modifiers per le properties ed i methods delle class: **private**, **protected** e **public**.

- Il modifier **private** permette l'accesso dalla stessa class.

- Il modifier **protected** permette l'accesso dalla stessa class e dalle subclasses.

- Il modifier **public** permette l'accesso da ogni location nel codice.

- Le properties ed i methods hanno accesso **public** se si omettono gli access modifiers.

## 30. Getter e setter

I getter ed i setter sono dei tipi di metodo speciali che forniscono un modo per accedere e modificare le properties di un object. Sono utili per il controllo dell'accesso: i getter permettono di leggere i valori delle properties, mentre i setter permettono di modificarli.

Questi metodi sono particolarmente utili per aggiungere logica di validazione o elaborazione quando si accede o si modifica una value di una property.

### Getter

Un getter é un metodo che viene utilizzato per ottenere il valore di una property privata o protetta. Viene definito con la parola chiave **get** seguita da un nome di funzione.

I getter non prendono arguments e devono restituire un valore.

### Setter

Un setter é un metodo che imposta il valore di una property privata o protetta. Viene definito con la parola **set** seguita da un nome di funzione.

I setter prendono esattamente un parametro, che é il valore da impostare, e non restituiscono nulla.

### Vantaggi nell'uso di getter e setter

Vediamo ora alcuni vantaggi:

- aiutano a mantenere l'incapsulamento delle properties, nascondendo i dettagli dell'implementazione.

- consentono di aggiungere logica di validazione quando si imposta una value.

- forniscono una flessibilità maggiore rispetto all'accesso diretto alla property, in quanto é possibile modificare la logica interna senza influenzare il codice che utilizza la classe.

- consentono di cambiare i requisiti interni senza modificare l'interfaccia publica della class.

In quest'esempio, la class Person ha un property private \_name (per consuetudine le properties private hanno,l'underscore iniziale nel name).

Il getter name permette di accedere al valore di \_name, mentre il setter name permette di modificare il valore di \_name con una logica di validazione che impedisce di impostare un name vuoto:

<code>
  class Person {
    private _name: string;
    constructor(name: string){
      this.name = name;
    }
    // Getter
    get name(): string {
      return this._name;
    }
    // Setter
    set name(value: string) {
      if(value.length > 0){
        this._name = value;
      } else {
        console.log("Errore: il name non può essere vuoto");
      }
    }
  }
  let person = new Person("Alice");
  console.log(person.name); // utilizza il getter
  person.name = "Bob"; // utilizza il setter
  console.log(person.name); // Bob
  person.name = ""; // Errore: il name non può essere vuoto
</code>

### TypeScript Getters & Setters

Il codice seguente mostra un semplice class Person con tre properties: **age**, **firstName** e **lastName**:

<code>
  class Person {
    public age: number;
    public firstName: string;
    public lastName: string;
    constructor(age: number, firstName: string, lastName: string){
      this.age = age;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
</code>

Per accedere a qualsiasi property della class Person, si può fare così:

<code>
  let person = new Person(22, "John", "Doe");
  person.age = 23;
</code>

Si supponga di assegnare una value che provenga dall'input di uno user alla property **age**:

<code>
  person.age = inputAge;
</code>

L'**inputAge** può essere qualsiasi number. Per assicurarsi la validità di age, si può occuparsene prima dell'assegnamento come segue:

<code>
  if(inputAge > 0 && inputAge < 200){
    person.age = inputAge;
  }
</code>

Usando questo controllo in tutti i posti può essere ridondante e tedioso.

Per evitare il controllo ripetuto, si possono usare i setters ed i getters. I getters e i setters permettono di controllare l'accesso alle properties di una class.

Per ogni property:

- Un metodo getter restituisce la value della property. Un getter viene anche chiamato un accessor.

- Un metodo setter aggiorna la value della property. Un setter viene anche chiamato un mutator.

Un metodo getter comincia con la keyword **get** e un metodo setter comincia con la keyword **set**.

<code>
  class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;
    // -----
    constructor(age: number, firstName: string, lastName: string){
      this._age = age;
      this._firstName = firstName;
      this._lastName = lastName;
    }
    // -----
    public get age(){
      return this._age;
    }
    public set age(theAge: number){
      if(theAge <= 0 || theAge >= 200){
        throw new Error("The age is invalid.");
      }
      this._age = theAge;
    }
    public getFullName(): string {
      return `${this._firstName} ${this._lastName}`;
    }
  }
</code>

Ecco come funziona:

- primo, si cambiano gli access modifiers delle properties **age**, **firstName** e **lastName** da **public** a **private**.

- secondo, cambia la property da **age** ad **\_age**.

- terzo, creare dei methods getter e setter per la property **\_age**. Nel setter method, si controlla la validità di un input age prima di assegnarlo alla property **\_age**.

Ora, si può accedere al setter method **age** come segue:

<code>
  let person = new Person(22, "John", "Doe");
  person.age = 23
</code>

Si noti che la chiamata al setter non ha le parentesi come i metodi regolari. Quando si chiama person.age, il metodo **setter age** viene invocato. Se si assegna una value **age** invalida, il setter segnalerà un errore:

<code>
  person.age = 0;
</code>

Error:
---> Error: The age is invalid

Quando si accede alla property person.age, il **getter age** viene invocato:

<code>
  console.log(person.age);
</code>

Il seguente codice aggiunge i getter ed i setters alle properties **firstName** e **lastName**:

<code>
  class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;
    constructor(age: number, firstName: string, lastName: string){
      this._age = age;
      this._firstName = firstName;
      this._lastName = lastName;
    }
    public get age(){
      return this._age;
    }
    public set age(theAge: number){
      if(theAge <= 0 || theAge >= 200){
        throw new Error("The age is invelid");
      }
      this._age = theAge;
    }
    public set firstName(theFirstName: string){
      if(!theFirstName){
        throw new Error("Invalid first name.");
      }
      this._firstName = theFirstName;
    }
    public get lastName(){
      return this._lastName;
    }
    public set lastName(theLastName: string){
      if(!theLastName){
        throw new Error("Invalid last name.");
      }
      this._lastName = theLastName;
    }
    public get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
    public set fullName(name: string) {
      let parts = name.split(" ");
      if(parts.length !== 2){
        throw new Error("Invalid name format: first last");
      }
      this._firstName = parts[0];
      this._lastName = parts[1];
    }
  }
</code>

Come funziona:

- il metodo getter restituisce la concatenazione del first name e del last name.

- il metodo setter accetta una string come full name con il formato first last e assegna la prima parte alla property first name e la seconda parte alla property last name.

Ora, si può accedere al setter ed al getter fullName come una property di una class regolare:

<code>
  let person = new Person(23, "John", "Doe");
  person.fullName = "Jane Smith";
  console.log(person.fullName); // Jane Smith
</code>

In sintesi:

- Si usino i getters ed i setters di TypeScript per controllare l'accesso alle properties di una class.

- I getters ed i setters sono anche conosciuti come accessors / mutators.

## 31. Classi astratte

Le classi astratte sono un concetto avanzato che serve a definire classi di base che non sono destinate a essere istanziate direttamente, quanto piuttosto ad essere estese da altre classi.

Una classe astratta può fornire una struttura e un'implementazione parziale, lasciando che le classi derivate completino l'implementazione specifica.

Le classi astratte hanno le seguenti caratteristiche:

- Non é possibile creare direttamente un istanza di una classe astratta. Il tentativo di farlo genererà un errore.

- Una classe astratta può contenere metodi astratti, che sono metodi dichiarati senza un'implementazione. Le classi derivate devono fornire un'implementazione concreta per questi metodi.

- Può anche contenere un'implementazione parziale o completa, consentendo alle subclass di utilizzare o sovrascrivere questi metodi.

In quest'esempio. la class Animal é una classe astratta che contiene un metodo astratto makeSound e un metodo con implementazione sleep. La classe Dog estende Animal e fornisce un'implementazione concreta per il metodo astratto makeSound.

<code>
  abstract class Animal {
    // metodo astratto
    abstract makeSound(): void;
    // metodo con implementazione
    sleep(): void {
      console.log("The animal is sleeping.");
    }
  }
  class Dog extends Animal {
    makeSound(): void {
      console.log("Bau");
    }
  }
  let myAnimal = new Animal(); // Error
  // non é possibile istanziare la classe astratta Animal
  let myDog = new Dog();
  myDog.makeSound(); // Output: ---> Bau
  myDog.sleep();  // Output: ---> The animal is sleeping.
</code>

Le classi astratte sono particolarmente utili in scenari dove diverse classi hanno caratteristiche comuni, ma ci sono anche aspetti che devono essere unici per ogni subclass.
Forniscono un modo per definire un contratto per le subclasses, obbligandole ad implementare determinati metodi, pur fornendo un'implementazione di base per altri. Questo aiuta a ridurre la duplicazione del codice e migliora la coerenza.

Le classi astratte in TypeScript sono di supporto per la progettazione e l'architettura software, promuovendo il riutilizzo del codice e l'incapsulamento, pur fornendo un livello elevato di astrazione e flessibilità.

### TypeScript Abstract Classes

Un'abstract class viene tipicamente usata per definire comportamenti comuni per le classi derivate da estendere.
A differenza delle classes regolari, un'abstract class non può essere istanziata direttamente.

Per dichiarare un'abstract class, si usa la keyword **abstract**:

<code>
  abstract class Employee {
    // ...
  }
</code>

Di prassi, un'abstract class contiene uno o più metodi.

Un metodo astratto non contiene implementazione. Definisce solamente la signature del metodo senza includerne il body. Un metodo astratto deve essere implementato della class derivata.

L'esempio seguente mostra l'abstract class Employee che ha il metodo astratto getSalary():

<code>
  abstract class Employee {
    constructor(private firstName: string, private lastName: string){}
    abstract getSalary(): number;
    get fullName(): string {
      return `$(this.firstName) ${this.lastName}`;
    }
    compensationStatement(): string {
      return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
  }
</code>

Nella class Employee:

- il constructor dichiara le properties firstName e lastName.
- il metodo **getSalary()** é un metodo astratto. La class derivata implementerà la logica basata sul tipo di employee.
- i metodi **getFullName()** e **compensationStatement()** contegono delle implementazioni dettagliate. Si noti che il metodo **compensationStatement()** chiama il metodo **getSalary()**.

Visto che la class Employee é astratta, non si può creare un nuovo object da questo. Il seguente statement causa un errore:

<code>
  let employee = new Emplyee("John", "Doe");
</code>

Error:
---> error TS2511: Cannot create an instance of an abstract class.

La seguente class FullTimeEmployee eredita dalla class Employee:

<code>
  class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number){
      super(firstName, lastName);
    }
    getSalary(): number {
      return this.salary;
    }
  }
</code>

In questa class FullTimeEmployee, il salary viene impostato nel constructor. Visto che **getSalary()** é un metodo astratto della class Employee, la class FullTimeEmployee necessita di implementazione di questo metodo. In quest'esempio restituisce solamente il salary senza nessun calcolo.

L'esempio seguente mostra la class Contractor che eredita dalla class Employee:

<code>
  class Contractor extends Employee {
    constructor(
      firstName: string,
      lastName: string,
      private rate: number,
      private hours: number
    ) {
      super(firstName, lastName);
    }
    getSalary(): number {
      return this.rate * this.hours;
    }
  }
</code>

Nella class Contractor, il constructor inizializza le properties rate e hours. Il metodo **getSalary()** calcola il salary moltiplicando le due properties.

Quanto segue prima crea un object FullTimeEmployee e un Contractor object e poi mostra la compensationStatement nella console:

<code>
  let john = new FullTimeEmployee("John", "Doe", 12000);
  let jane = new Contractor("Jane", "Doe", 100, 160);
  console.log(john.compensationStatement());
  console.log(jane.compensationStatement());
</code>

Output:
---> John Doe makes 12000 a month.
---> Jane Doe makes 16000 a month.

E' una good practice usare le abstract classes quando si vuole condividere codice attraverso delle classi relazionate.

In sintesi:

- Le abstract classes non possono essere istanziate.
- Un'abstract class ha almeno un abstract method.
- Per usare un abstract class, si ha bisogno di ereditare da esso e fornire l'implementazione per gli abstract methods.

## 32. Verifica conoscenze

6 / 6 Perfetto.

## 33. Video Tutorial Classi

Tutorial 09 Playlist TypeScript.

Aggiunta appunti classes:

### Property readonly

Partendo da un codice:

<code>
  class Person {
    constructor(private readonly name: string, private lastName: string){}

    presents():void {
      conso.log("Ciao, sono ${this.name} ${this.lastName}")
    }
    sayHi(person: Person): void {
      console.log("Ciao ${person.name} ${person.lastName}, molto piacere)
    }

}
let persona1: Person = new Person("Luca", "Rossi");
</code>

La property readonly dichiarata nella property del constructor name:
private readonly name: string
Blocca la possibilità di modificare tale property. Una volta dichiarata non sarà più possibile modificarla.
Se creassimo un metodo all'interno della class:

<code>
  class Person {
    // ...
    changeName(){
      this.name = "new value";
    }
  }
</code>

Risulterebbe un errore dal compilatore.

### static properties and methods

Le properties ed i metodi statici possono essere chiamati senza creare un'istanza dell'Object. Un esempio può essere Math, che per essere usato non necessita di essere istanziato ma basta una chiamata ad un suo metodo o proprietà, come Math.PI, per ottenere un valore di ritorno. In questo caso specifico PI é una static property.

Si definiscono aggiungendo static prima del name della property o del method.

Per esempio:

<code>
  class Person {
      constructor(private readonly name: string, private lastName: string){}
      presents():void {
        conso.log("Ciao, sono ${this.name} ${this.lastName}")
      }
      static sayHi(person: Person): void {
        console.log("Ciao ${person.name} ${person.lastName}, molto piacere)
      }
  }
  class Student extends Person {
    constructor(
      name: string,
      lastName: string,
      private favoriteSubj
    ){}
    change(){
      this.name = "Yellow";
    }
  }
</code>

Se si usasse l'object istanziato per usare il metodo:

<code>
  let student: Student = new Student("luca", "rossi", "storia");
  student.sayHi(); // Error
</code>

Ma chiamando direttamente la class Student con il metodo static funziona:

<code>
  let student: Student = new Student("luca", "rossi", "storia");
  Student.sayHi();
</code>

### Singleton

Il singleton é un pattern di programmazione che ci impone di usare un unica istanza di una class.

Potrebbe riverlarsi necessario in alcune situazioni il suo utilizzo. Questo permetterà si creare una ed una sola istanza della class e una qualsiasi altra istanza genererà un error.

Per capire come funziona nello specifico partiamo da una class Principal che deve essere unica, non devono essercene altre.

In fasi usando il private constructor e le static instance:

- partiamo da una semplice base:

<code>
  class Principal {
    constructor(private name: string, private lastName: string){}
  }
  let principal: Principal = new Principal("marco", "verdi");
  let principal2: Principal = new Principal("marco", "rossi");
  let principal3: Principal = new Principal("marco", "neri");
</code>

- aggiungiamo quindi la keyword private per rendere il constructor privato:

<code>
  class Principal {
    private constructor(private name: string, private lastName: string){}
  }
  let principal: Principal = new Principal("marco", "verdi");
  let principal2: Principal = new Principal("marco", "rossi");
  let principal3: Principal = new Principal("marco", "neri");
</code>

- da qui non possiamo accedere al costructor dall'esterno della classe, visto l'utilizzo dell'accessor modifier (modificatore d'accesso).

- quindi creiamo una property **istance** static di type Principal, che sarà quindi istanza di Principal che ci serve per poter usare la class, ma all'interno della class stessa grazie al private, da mettere subito sopra al constructor:

<code>
  class Principal {
    ---> private static istance: Principal
    private constructor(private name: string, private lastName: string){}
  }
  let principal: Principal = new Principal("marco", "verdi");
  let principal2: Principal = new Principal("marco", "rossi");
  let principal3: Principal = new Principal("marco", "neri");
</code>

- così facendo abbiamo creato una property istance statica.

- così facendo l'ambiente é chiuso e anche la property instance (non é una keyword, é una good practice chiamarla così) non può essere usata dall'esterno

- creiamo ora un metodo statico getIstance() (sempre name getIstance per good practice), qui controlleremo l'esistenza dell'istanza:

<code>
  class Principal {
    private static istance: Principal
    private constructor(private name: string, private lastName: string){}
    ---> static getIstance(){
      if(Principal.istance){
        return this.istance;
      }
    }
  }
  let principal: Principal = new Principal("marco", "verdi");
  let principal2: Principal = new Principal("marco", "rossi");
  let principal3: Principal = new Principal("marco", "neri");
</code>

- nello specifico, se l'istanza esiste, verrà richiamata la property istance della class con:

<code>
  if(Principal.istance){
        return this.istance;
      }
</code>

- altrimenti la si andrà a creare, assegnando alla property **istance** un'istanza della class Principal con i parametri dichiarati e restituiamo la property stessa:

<code>
  if(Principal.istance){
        return this.istance;
      }
      this.istance = new Principal("marco", "verdi");
      return this.istance;
</code>

- quindi:

<code>
  class Principal {
    private static istance: Principal
    private constructor(private name: string, private lastName: string){}
    static getIstance(){
      if(Principal.istance){
        return this.istance;
      }
      this.istance = new Principal("marco", "verdi");
      return this.istance;
    }
  }
</code>

- così facendo diverrà possibile l'esistenza di una sola istanza di Principal, che avrà la possibilità di essere utilizzata all'esterno tramite il metodo static getInstance(), ma non potrà essere ricreata nuovamente.

- Aggiungiamo un metodo per dimostrarne il funzionamento:

<code>
  class Principal {
    private static istance: Principal
    private constructor(private name: string, private lastName: string){}
    static getIstance(){
      if(Principal.istance){
        return this.istance;
      }
      this.istance = new Principal("marco", "verdi");
      return this.istance;
    }
    ---> present(){
      console.log(`Buongiorno, sono il preside ${this.name} ${this.lastName}`);
    }
  }
</code>

- E usiamolo passando dalla chiamata del metodo static getInstance:

<code>
  class Principal {
    private static istance: Principal
    private constructor(private name: string, private lastName: string){}
    static getIstance(){
      if(Principal.istance){
        return this.istance;
      }
      this.istance = new Principal("marco", "verdi");
      return this.istance;
    }
    present(){
      console.log(`Buongiorno, sono il preside ${this.name} ${this.lastName}`);
    }
  }
  ---> Principal.getInstance().present();
</code>

- Qui non vi é bisogno di creare un istanza object, perché non si può. L'istanza dell'object già esiste all'interno della class, e una volta creato viene archiviato all'interno della class e tramite il controllo in getInstance se esite non viene ricreato ma richiamata la property instance.

- Per evitare che venga chiamato da fuori dalla class ma solo dall'interno della class, viene reso private tramite access modifier.

- in console quindi risulterà:

---> Buongiorno, sono il preside marco verdi

## 34. Esercizio - Classi

Il tuo obiettivo in questo esercizio è di scrivere una gerarchia di classi in TypeScript che dimostri l'uso di classi astratte, ereditarietà, e l'incapsulamento tramite getter e setter.

- La classe astratta Veicolo deve avere una proprietà protetta \_marca (stringa) e un metodo astratto displayMarca() che stampa la marca del veicolo. Aggiungi un metodo concreto muovi() che stampa "Il veicolo si sta muovendo."

- La classe Automobile estende Veicolo e implementa il metodo displayMarca().

- Aggiungi una proprietà privata \_modello e utilizza getter e setter per accedervi. Il setter deve includere una logica di validazione che impedisce l'assegnazione di una stringa vuota.

Crea un'istanza della classe Automobile, imposta marca e modello tramite il costruttore e i setter, e poi utilizza i metodi definiti per visualizzare le informazioni e muovere il veicolo.

- Prima parte:

<code>
  abstract class Vehicle {
    constructor(protected _brand: string){}
    abstract displayBrand(): void;
    move(): void {
      console.log("Il veicolo si sta muovendo");
    }
  }
</code>

Oppure prolissa:

<code>
  abstract class Vehicle {
    protected _brand: string;
    constructor(brand: string){
      this._brand = brand;
    }
    abstract displayBrand(): void;
    move(): void{
      console.log("Il veicolo si sta muovendo");
    }
  }
</code>

- Seconda parte e terza parte:

<code>
  class Car extends Vehicle {
    private _model: string;
    constructor(_brand: string, model: string){
      super(_brand);
      this._model = model;
      
    }
    displayBrand(): void {
      console.log(this._brand);
    }
    public get model(){
      return this._model;
    }
    public set model(newModel: string){
      if(newModel.length <= 0 ){
        throw new Error("La stringa non può essere vuota.")
      }
      this._model = newModel;
    }
  }
</code>

- Quarta parte:

<code>
  let car: Car = new Car("Mini", "Eletric");
  car.model = "Cooper";
  car.displayBrand(); // ---> "Mini"
  car.move(); // ---> "Il veicolo si sta muovendo"
</code>

Piccola discrepanza nel naming model nella terza parte, tutto il resto perfetto.
Invertito
this.\_model = model;
super(\_brand);
invece di:
super(\_brand);
this.\_model = model;

Non eccessivamente rilevante.

## 35. Interfacce

Le interfacce sono uno strumento di progettazione che aiuta a definire la struttura degli objects. Fungono da contratti nel codice e sono utilizzate per definire la forma che un object dovrebbe avere. Ciò include la definizione di properties, types e methods che un object deve implementare.

Le loro caratteristiche principali sono:

- Le interfacce definiscono la struttura di un object senza implementare alcuna logica. Specificano quali properties e methods deve avere ed i loro types.

- Una class può implementare un'interfaccia, il che signofica che la class deve fornire un'implementazione concreta per tutte per proprietà ed i metodi definiti nell'interfaccia.

- Le interfacce possono estendere altre interfacce, consentendo di comporre interfacce complesse a partire da interfacce più semplici.

In quest'esempio, l'interfaccia Animal definisce la struttura che ogni istanza dovrebbe avere, includendo proprietà come name ed age e un metodo makeSound. La class Dog implementa l'interface Animal, fornendo un'implementazione concreta per le properties ed i methods definiti:

<code>
  interface Animal {
    name: string;
    age: number;
    makeSound(): void;
  }
</code>
<code>
  class Dog implements Animal {
    name: string;
    age: number;
    constructor(name: string, age: number){
      this.name = name;
      this.age = age;
    }
    makeSound(): void {
      console.log("Bau.");
    }
  }
  let myDog = new Dog("Buddy", 5);
  myDog.makeSound();
</code>

Output:
---> Bau.

Le interface sono particolarmente utili per:

- Garantire che determinate classes condividano la stessa struttura di base.

- Creare codice che lavora con objects che condividono la stessa forma, come in funzioni che accettano parametri type interface.

- Fornire una specie di "contratto" per la programmazione, garantendo che specifici metodi e proprietà siano disponibili sugli objects.

Le interface in TypeScript non esistono in runtime; vengono utilizzate solo al momento della compilazione per il type check. Questo significa che non hanno alcun impatto sul codice JavaScript risultante, ma collaborano nel mantenere il codice TypeScript pulito, organizzato e facilmente mantenibile.

### TypeScript interface

Le interfaces di TypeScript definiscono i contratti nel codice. Forniscono inoltre dei names specifici per il type checking.

Cominciamo con un esempio semplice:

<code>
  function getFullName(person: {
    firstName: string;
    lastName: string;
  }) {
    return `${person.firstName} ${person.lastName}`
  }
  let person = {
    firstName: "John",
    lastName: "Doe"
  };
  console.log(getFullName(person));
</code>

Output:
---> John Doe

In quest'esempio, il compilatore TypeScript controlla l'argument passato nella funzione getFullName().

Se l'argument ha due properties firstName e lastName ed i loro types sono strings, allora il compilatore TypeScript farà passare il controllo. Altrimenti segnalerà un errore.

La type annotation dell'argument della funzione rende il codice difficile da leggere. Per indirizzare al meglio questo problema, TypeScript introduce il concetto di interfacce.

Il codice seguente usa un'interface Person che ha due properties string:

<code>
  interface Person {
    firstName: string;
    lastName: string;
  }
</code>

Per convenzione, i name delle interface sono in **PascalCase**.

Dopo la definizione dell'**interface Person** si può usarla come un type. Per esempio, si può annotare il parametro della funzione con il name della interface:

<code>
  function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
  }
</code>

<code>
  let john = {
    firstName = "John",
    lastName= "Doe"
  };
  console.log(getFullName(john));
</code>

Il codice ora é molto più semplice da leggere.

Per rendere il codice più conciso, si può usare l'object destructuring di JavaScript:

<code>
  function getFullName({firstName, lastName}: Person){
    return `${firstName} ${lastName}`;
  }
</code>

Nell'argument, destrutturiamo le properties dell'object person:

<code>
 { firstName, lastName }: Person
</code>

La funzione getFullName() accetterà qualsiasi object che abbia almeno due properties di type string con i name **firstName** e **lastName**.

Per esempio il codice seguente dichiara un object che ha quattro properties:

<code>
  let jane = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Doe",
    age: 23
  }
</code>

Visto che l'object **jane** ha due properties string **firstName** e **lastName**, si può passarle alla funzione **getFullName()** come segue:

<code>
  let fullName = getFullName(jane);
  console.log(fullName);
</code>

#### Optional properties

Un'interface può avere delle properties opzionali. Per dichiarare un'optional property, si usa il question mark ( ? ) alla fine del name della property nella dichiarazione, come:

<code>
  interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
  }
</code>

In quest'esempio, l'interface Person ha due properties necessarie e una property opzionale.

E il seguente mostra come usare l'interface Person nella funzione getFullName():

<code>
  function getFullName(person: Person){
    if(person.middleName){
      return `${person.firstName} ${person.middleName} ${person.lastName}`;
    } 
    return `${person.firstName} ${person.lastName}`;
  }
</code>

#### Readonly propeties

Se le properties dovessero poter essere modificabili solo quando l'object viene creato per la prima volta, si può usare la keyword **readonly** prima del name della property:

<code>
  interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;
  }
  let person: Person;
  person = {
    ssn: '171-28-0926',
    firstName: "John",
    lastName: "Doe"
  };
</code>

In quest'esempio la property **ssn** non può essere cambiata:

<code>
  person.ssn = "000000";
</code>

Output:
---> Error:
---> error TS2540: Cannot assign to 'ssn' because it is a read-only property.

#### Function types

In aggiunta al descrivere un object con properties, le interfaces permettono di reppresentatare dei function types.

Per descrivere un function type, si assegna l'interfaccia alla signature della funzione che contiene la lista dei parametri con types e types restituiti. Per esempio:

<code>
  interface StringFormat {
    (str: string, isUpper: boolean): string
  }
</code>

Ora, si può usare questa function-type interface.
L'esempio seguente illusta come dichiarare una variabile di un fi un type function e assegnarle una value function dello stesso type:

<code>
  let format: StringFormat;
  format = function (str: string, isUpper: boolean) {
    return isUppper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
  };
  console.log(format('hi', true));
</code>

Output:
---> HI

Si noti che il parametro name non necessita di coincidere con la signature della function. Il seguente esempio é equivalente a quello soprastante:

<code>
  let format: StringFormat;
  format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
  };
  console.log(format("hi", true));
</code>

L'**interface** assicura che tutti i chiamanti della funzione che la implementano passino gli arguments richiesti: una **string** ed un **boolean**.

Anche il codice seguente funziona perfettamente bene anche se **lowerCase** viene assegnato ad una funzione che non ha il secondo arguement:

<code>
  let lowerCase: StringFormat;
  lowerCase = function (str: string) {
    return str.toLowerCase();
  }
  console.log(lowerCase("Hi", false));
</code>

Si noti che il secondo argument viene passato quando la funzione **lowerCase()** viene chiamata.

#### Class types

Se si ha mai lavorato con Java o C#, si scoprirà che l'uso principale dell'**interface** é definire un contratto tra le classes.

Per esempio, la seguente interface **Json** può essere implementata da ogni class:

<code>
  interface Json {
    toJson(): string;
  }
</code>

Qui si dichiara una class che implementa l'interface **Json** tramite la keyword **implements**:

<code>
  class Person implements Json {
    constructor(
      private firstName: string,
      private lastName: string
    ){}
    toJson(): string {
      return JSON.stringify(this);
    }
  }
</code>

Nella class Person, abbiamo implementato il metodo toJson() dell'interface Json.
Il seguente esempio mostra come usare la class Person:

<code>
  let person = new Person("John", "Doe");
  console.log(person.toJson());
</code>

Output:
---> {"firstName": "John", "lastName": "Doe"};

In sintesi:

- Le interfaces di TypeScript definiscono contratti nel codice e forniscono names espiciti per il type checking.

- Le interfaces possono avere parametri opzionali e proprietà read-only.

- Le interfaces possono essere usate come function types.

- Le interfaces sono tipicamente usate come class types che crea un contratto tra classes non relazionate.

### How to Extend Interfaces in TypeScript

Approfondimento, da studiare in seguito.

## 36. Differenza tra classes astratte e interfacce

In TypeScript la distinzione tra interfacce e classi astratte é significativa, benché entrambe servano a stabilire pattern e strutture per altre classes. Questa distinzione si riflette nel modo i cui sono utilizzate e nelle loro capacità intrinseche.

NOTA: da documentazione una distinzione semplice da notare é che dalle interface si possono istanziare anche funzioni, dalle classes astratte solo classes.

Le interfaces, in TypeScript, sono simili a contratti.
Definiscono una struttura che altre entità devono seguire, specificando un insieme di proprietà e metodi che devono essere implementati, ma senza fornire alcuna implementazione concreta. Ciò le rende ideali per situazioni in cui diverse classes devono condividere una forma comune, ma possono avere implementazioni molto diverse.

Le interfaces possono essere estese o combinate, permettendo una grande flessibilità nella definizione di types complessi. **In pratica, un'interfaccia é come un modello che promette determinate funzionalità o caratteristiche.**

D'altra parte, le classes astratte sono usate per fornire una base condivisa par altre classes. A differenza delle interfaces, le classes astratte possono contenere implementazioni parziali, il che significa che possono fornire una funzionalità predefinita. Inoltre, una class astratta può includere membri completi (sia metodi che proprietà) e definire constructors.

Questo le rende adatte per situazioni in cui diverse classes condividono non solo struttura, ma anche del comportamento e dello stato comune. Tuttavia, una class in TypeScript può estendere solo una singola class astratta, il che impone una certa limitazione nell'ereditarietà.

In termini di scelta tra le due, la decisione si riduce spesso allo scopo e alla natura del problema che si sta cercando di risolvere. Se il focus é sulla definizione di un "contratto" che varie entità devono rispettare, senza preoccuparsi di come queste entità realizzino questo contratto, allora le interfaces sono la scelta appropriata.

Se invece é necessario fornire una base comune che include un'implementazione, parziale o completa, condividendo comportamenti o stati, allora le classes astratte sono più indicate.

NOTA: si consideri che da documentazione precedente una class comunque può implementare ( implements ) un'interface.

La comprensione delle differenze e delle applicazioni di interfacce e classi astratte é fondamentale per utilizzare in modo efficace TypeScript, un linguaggio che offre robuste capacità di programmazione orientata agli oggetti. Questa comprensione aiuta a strutturare il codice sfruttando al meglio le caratteristiche del linguaggio per creare applicazioni ben organizzate e mantenibili.

### TypeScript Interfaces vs Abstract Classes

Sia le interfaces che le abstract classes sono strumenti potenti in TypeScript per il design del codice e la sua organizzazione, ma hanno scopi leggermente diversi.

La seguente tabella illustra le differenze tra interfaces e abstract classes:

|           Aspect           |                      Interfaces                       |                        Abstract Classes                        |
| :------------------------: | :---------------------------------------------------: | :------------------------------------------------------------: |
| -------------------------- | ----------------------------------------------------- | -------------------------------------------------------------- |
|           Scopo            |            Definire strutture contrattuali            |            Fornire funzionalità comuni e struttura             |
|      Implementazione       |         Contiene solo le signature dei metodi         |       Possono contenere metodi implementati ed estratti        |
|    Multiple inheritance    |    Implementazione interfaces multiple supportata     |             Supportano la single class inheritance             |
| Implementation Flexibility |  Nessuna implementazione di codice nelle interfaces   |      Si possono mescolare metodi implementati ed astratti      |
|       Extensibility        | Facilmente estendibili aggiungendo proprietà e metodi |    Possono fornire metodi condivisi per le classes derivate    |
|        Constructors        |          Nessun constructor nelle interfaces          |       Possono avere constructors per l'inizializzazione        |
|       Type Checking        |  Assicura che gli objects aderiscano alla struttura   |            Forniscono un type comune e funzionalità            |
|       Instantiation        |      Le interfaces non possono essere istanziate      | Le classes astratte non possono essere istanziate direttamente |
|           Usage            |        Progettazione dei contracts e struttura        |      Condividere funzionalità tra le classes relazionate       |

## 37. Video Tutorial Interfaces

Appunti da video:

- si possono considerare tutti i metodi delle interfaces come metodi abstract delle classes, sempre senza implementazione.

- Possibile combinazione:

<code>
  class Y extends Y implements FirstInterface, SecondInterface {
    // ...
  }
</code>

Nella creazione di classes si può ereditare da una sola class ma implementare molteplici interfacce

## 38. Esercizio - Interfacce

Il tuo obiettivo in questo esercizio è di scrivere codice TypeScript che dimostri l'utilizzo di interfacce per definire la struttura degli oggetti e come queste possono essere implementate da classi, inclusa una classe astratta.

L'interfaccia Veicolo deve avere le proprietà marca (stringa) e modello (stringa), e un metodo displayDettagli() senza implementazione.

Per questo esercizio dovrai:

Definire una classe astratta VeicoloBase: la classe astratta VeicoloBase implementa l'interfaccia Veicolo e fornisce un'implementazione parziale. Deve includere un metodo astratto tipoVeicolo() che restituisca una stringa.
Definire una sottoclasse Auto: la classe Auto estende la classe astratta VeicoloBase e fornisce implementazioni concrete per i metodi astratti. Deve sovrascrivere displayDettagli() per stampare dettagli specifici dell'auto, inclusi marca, modello e tipo di veicolo.
Utilizzare classi e interfacce: creare un'istanza della classe Auto, assegnare i valori alle proprietà e chiamare il metodo displayDettagli().

<code>
  interface Vehicle {
	brand: string;
	model: string;
	viewDetails(): void;
}
abstract class BaseVehicle implements Vehicle {
	brand: string;
	model: string;
	constructor(brand: string, model: string) {
		this.brand = brand;
		this.model = model;
	}
	viewDetails(): void {
		console.log(`The vehicle is a ${this.brand}, ${this.model}`);
	}
	abstract vehicleType(): string;
}
class Car extends BaseVehicle {
	brand: string;
	model: string;
	typology: string;
	constructor(brand: string, model: string, typology: string) {
		super(brand, model);
		this.brand = brand;
		this.model = model;
		this.typology = typology;
	}
	viewDetails(): void {
		console.log(`The ${this.typology} is a ${this.brand}, model ${this.model}`);
	}
	vehicleType(): string {
		return `The ${this.typology} is a ${this.brand}, model ${this.model}`;
	}
}
let car: Car = new Car("Mini", "Electric", "Car");
car.viewDetails();
</code>

- prima parte perfetta

- seconda parte perfetta

- terza parte differenzia leggermente ma correta

## 39. Tipi avanzati

I tipi avanzati, o advanced types, in TypeScript, aiutano a scrivere codice più flessibile e sicuro.

Esploriamo alcuni di questi concetti collegati:

- Intersection type

- Type guard

- Type casting

- Type assertion

## 40. Intersection type

Gli intersection type permettono di combianare più type in uno solo. Sono utili quando si vuole che un object o una variabile abbiano le caratteristiche di più type contemporaneamente.

In quest'esempio, ManagerEmployee combina le proprietà di Employee e Manager:

<code>
  type Employee = {
    name: string;
    startDate: string;
  };
  type Manager = {
    name: string;
    department: string;
  };
  type ManagerEmployee = Employee & Manager;
  let newManager: ManagerEmployee = {
    name: "Alice",
    startDate: new Date().toString(),
    department: "HR"
  };
</code>

### TypeScript Intersection Types

Un intersection type crea un nuovo type combinando molteplici types esistenti. Il nuovo type ha tutte le features dei types esistenti.

Per combinare i types si usa l'operatore **&** come segue:

<code>
  type typeAB = typeA & typeB;
</code>

Il typeAB avrà tutte le properties sia da typeA che da typeB.

Si noti che lo union type usa l'operatore | che definisce una variabile che può ospitare una value o del typeA o del typeB.

<code>
  let varName = typeA | typeB;
</code>

Si supponga ora di avere tre interfaces: **BusinessPartner**, **Identity** e **Contact**.

<code>
  interface BusinessPartner {
    name: string;
    credit: number;
  }
  interface Identity {
    id: number;
    name: string;
  }
  interface Contact {
    email: string;
    phone: string;
  }
</code>

Le seguenti dichiarazioni definiscono due intersection types:

<code>
  type Employee = Identity & Contact;
  type Customer = BusinessPartner & Contact;
</code>

Il type Employee contiene ora tutte le properties del type **Identity** e **Contact**:

<code>
  let c: Customer = {
    name: "ABC Inc",
    credit: 100000,
    email: "sales@abcinc.come",
    phone: '(408)-897-5735'
  }
</code>

Si noti che entrambe le interfaces BusinessPartner e Identity hanno la property **name** con lo stesso type. Se non lo fossero, si avrebbe un errore.

#### Type Order

Quando si usa l'intersect dei type, l'ordine dei types sottoposti non ha importanza. Per esempio:

<code>
  type typeAB = typeA & typeB;
  type typeBA = typeB & typeA;
</code>

In quest'esempio. typeAB e typeBA hanno le stesse properties.

In sintesi:

- un intersection type combina due o più types per creare un nuovo type che ha tutte le properties dei types esistenti.

- l'ordine dei type non ha importanza quando si combinano i types.

## 41. Type guard

Le type guard sono espressioni che eseguono un controllo in runtime sul type di una variabile, garantendo che tale variabile sia di un type specifico all'interno di un blocco di codice.

Per esempio:

<code>
  function isEmployee(x: any): x is Employee {
    return x && typeof x.name === "string" && x.startDate instanceof Date;
  }
  function getDepartment(emp: Employee | Manager) {
    if (isEmployee(emp)) {
      // emp viene trattato come Employee qui
      console.log(emp.startDate);
    } else {
      // emp viene trattato come Manager qui
      console.log(emp.department);
    }
  }
</code>

### TypeScript Type Guards

Le Type Guards permettono di restringere il type di una variabile attraverso un blocco condizionale.

#### Using typeof

Vediamo il seguente esempio:

<code>
  type alphanumeric = string | number;
  function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error(
      "Invalid arguments. Both arguments must be either numbers or strings."
    );
  }
</code>

Come funziona:

- prima, definisce il type alphanumeric che può ospitare una string o un number.

- poi, dichiara una funzione che somma le due variabili a e b se il loro type é alphanumeric.

- poi, controlla se entrambi i types degli arguments sono numeri usando il typeof operator. Se é così, allora calcolerà la simma degli arguments usando l'opertore +.

- dopo di questo, controlla se entrambi i types degli arguments sono di type string usando l'operatore typeof. Se é così, allora i due arguments verranno concatenati.

- Infine, restituisce un errore se gli arguments non sono ne numbers ne strings.

In quest'esempio, TypeScript conosce l'uso dell'operatore typeof nei blocchi condizionali. Dentro il seguente blocco if, TypeScript realizza che a e b sono numbers.

<code>
  if (typeof a === "number" && typeof b === "number"){
    return a + b;
  }
</code>

Similarmente, nel seguente blocco if, TypeScript tratta a e b come strings, quindi le concatenerà in una unica:

<code>
  if (typeof a === "string" && typeof b === "number") {
    return a.concat(b);
  }
</code>

#### Using instanceof

Similarmente all'operatore typeof, TypeScript conosce anche l'uso dell'operatore instanceof. Per esempio:

<code>
  class CustomerAccount {
	isCreditAllowed(): boolean {
		// ...
		return true;
	  }
  }
  class Supplier {
    isInShortList(): boolean {
      // ...
      return true;
    }
  }
  type PartnerBusiness = CustomerAccount | Supplier;
  function signContract(partner: PartnerBusiness): string {
    let message: string;
    if (partner instanceof CustomerAccount) {
      message = partner.isCreditAllowed()
        ? "Sign a new contract with the customer"
        : "Credit issue";
    }
    if (partner instanceof Supplier) {
      message = partner.isInShortList()
        ? "Sign a new contract the supplier"
        : "Need to evaluate further";
    }
    return message;
  }
</code>

NOTA: ATTENZIONE esempio non funzionante.

Come funziona:

- primo, dichiara le classes CustomerAccount e Supplier.

- secondo, crea un alias type BusinessPartner che uno union type tra CustomerAccount e Supplier.

- terzo, dichiara una funzione signContract() che accetta un parametro con il type BusinessPartner.

- infine, controlla se il partner é un'istanza di CustomerAccount e Supplier, e poi fornire la rispettiva logica.

Dentro il seguente blocco if, TypeScript sa che il partner é un'istanza del type CustomerAccount grazie all'operator instanceof:

<code>
  if(partner instanceof CustomerAccount){
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
  }
</code>

Quando un if restringe un type, TypeScript sa che nell'else al suo interno non c'é quel type ma l'altro. Per esempio:

<code>
  function signContract(partner: PartnerBusiness): string {
    let message: string;
    if (partner instanceof CustomerAccount) {
      message = partner.isCreditAllowed()
        ? "Sign a new contract with the customer"
        : "Credit issue";
    }
    if (partner instanceof Supplier) {
      message = partner.isInShortList()
        ? "Sign a new contract the supplier"
        : "Need to evaluate further";
    }
    return message;
  }
</code>

#### Using in

L'operatore **in** si occupa di un controllo sicuro per l'esistenza di una property di un object. Lo si può usare come una type guard. Per esempio:

<code>
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
</code>

#### User-defined Type Guards

Le type guerds User-defined permettono di definire una type guard o aiutare TypeScript a dedurre un type quando si usa una funzione.

Una type guard User-defined é una funzione che semplicemente restituisce **arg is aType**. Per esempio:

<code>
  function isCustomer(partner: any): partner is CustomerAccount {
    return partner instanceof CustomerAccount;
  }
</code>

In quest'esempio, isCustomer() é una type guard user-defined function. Ora la si può usare come segue:

<code>
  function signNewContract(partner: BusinessPartner): string {
    let message: string;
    if (isCustomer(partner)) {
      message = partner.isCreditAllowed()
        ? "Sign a new contract with the customer"
        : "Credit issue";
    } else {
      message = partner.isShortList()
        ? "Sign a new contract the supplier"
        : "Need to evaluate further";
    }
    return message;
  }
</code>

In sintesi:

- Le type guards restringono il type di una variabile tra blocchi condizionali.

- Si usino gli operatori **typeof** e **instanceof** per implementare le type guards nei blocchi condizionali.

## 42. Type casting

Il Type casting é il processo di esplicita conversione di una variabile da un type ad un altro.

In TypeScript, il type casting può essere realizzato in due modi: usando l'operatore **<type>** o con **as type**.

Vediamo un esempio:

<code>
  let input = document.getElementById("myInput") as HTMLInputElement;
</code>

oppure:

<code>
  let secondInput = <HTMLInputElement>document.getElementById("mySecondInput");
  secondInput.value = "Hello, World!";
</code>

### TypeScript Type Assertions

Le type assertions istruiscono il compilatore TypeScript a trattare una value come uno specifico type. In TypeSCript, si può usare la keyword **as** o l'operatore **<>** per le type assertions.

#### Type assertions using the as keyword

La dichiarazione seguente selezione il primo element input sul document HTML usando il metodo querySelector():

<code>
  let el = document.querySelector('input["type="text"]');
</code>

Visto che il type del metodo document.querySelector() é l'Element type, il codice seguente causa un errore in fase di compilazione:

<code>
  console.log(el.value);
</code>

Error:
---> Property 'value' does not exist on type 'Element'.

Il motivo é che tale value non esiste nell'Element type. Esiste solo nel type HTMLInputElement type.

Per risolvere tale probelma, si può istruire il compilatore TypeScript per trattare il type dell'element el come HTMLInputElement usando la keyword **as** in questo modo:

<code>
    const el = document.querySelector('input["type="text"]');
    const input = el as HTMLInputElement;
</code>

Ora la variabile **input** é di type HTMLInputElement. Quindi accedere alla sua property value non causerà un errore.
Il seguente codice funziona:

<code>
  console.log(input.value);
</code>

Un altro modo per assegnare il type HTMLInputElement ad un object Element é quando si accede alla property come segue:

<code>
  let enteredText = (el as HTMLInputElement).value;
</code>

Si noti che il type HTMLInputElement estende il type HTMLElement che estende il type Element.

La sintassi per il type assertion di una variabile da typeA a typeB é come segue:

<code>
  let a: typeA;
  let b = a as typeB;
</code>

#### Type assertion using the <> operator

Oltre alla keyword **as**, si può usare l'operatore <> per eseguire un type assertion. Per esempio:

<code>
  let input = <HTMLInputElement>document.querySelector('input[type="text"]');
  console.log(input.value);
</code>

La sintassi per il type assertion usando l'operatore <> é quella che segue:

<code>
  let a: typeA;
  let b = <typeB>a;
</code>

#### Type assertion result

Se un type assertion fallisce, differenti tipi di errori possono accadere in base a come si usa la type assertion e gli attuali tipi di runtime.

##### 1- Compile-time errors

Quando si prova ad eseguire una type assertion tra types incompatibili, il compilatore TypeScript potrebbe restituire un errore o un avviso. Per esempio:

<code>
  let price = '9.99';
  let netPrice = price as number; // error
</code>

In quest'esempio, tentiamo di assegnare un type number ad una string, il compilatore TypeScript segnala il seguente errore in fase di compilazione:

Error:
---> Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

##### 2- Runtime errors

Quando si esegue una type assertion di un object ad un type che non corrisponde con la sua struttura e si tenta di accede ad una property che non esiste, si otterrà un errore in runtime. Per esempio:

<code>
  let el = document.querySelector('#name');
  let input = el as HTMLInputElement;
  console.log(input.value.length);
</code>

In quest'esempio, se l'element con id #name non fosse un input element, input.value sarebbe undefined in runtime. Quindi accedere alla sua property length della value causerà un errore in fase di runtime:

Error:
---> TypeError: Cannot read properties of undefined (reading 'length')

##### 3- Unexpected behaviors

Se una type assertion é incorretta, si potrebbe non ottenere un errore in fase di compilazione o di runtime, ma si potrebbero verificare comportamenti non previsti più tardi nel codice. Questo potrebbe portare ad un debug impegnativo perché l'errore potrebbe non accadere nel punto della type assertion.

In sintesi:

- Le type assertion permettono di assegnare un nuovo type ad una value.

- Si usi la keyword **as** o l'operatore **<>** per eseguire una type assertion.

## 43. Type assertion

Le type assertions sono simili al type casting, ma non eseguono nessuna conversione di type a runtime. Sono un modo per dire al compilatore "tratta questa variabile come fosse di questo type".

NOTA: Da documentazione invece sembra effettivamente una conversione, non come descritto qui.

In quest'esempio, usiamo le type assetions per affermare che someValue é una string, in modo da poter accedere in modo sicuro alla sua property length.

<code>
  let someValue: any = "this is a string.";
  let strLength: number = (someValue as string).length;
  // oppure
  let strLengthTwo: number = (<string>someValue).length;
</code>

Questi strumenti avanzati offrono un controllo maggiore sulla tipizzazione in TypeScript, consentendo di gestire situazione complesse e garantendo che il codice si comporti come previsto. L'uso appropriato di questi strumenti può aiutare a prevenire bug e rendere il codice leggibile e mantenibile.

### TypeScript Type Assertions

Stesso capitolo della sezione precedente.

## 44. Moduli

In TypeScript, i moduli rappresentano un elemento fondamentale nell'organizzazione del codice, specialmente in progetti di grandi dimensioni.

Attraverso l'utilizzo di moduli, TypeScript consente di dividere il codice in diversi file o unità logiche, facilitando così la gestione, la mantenibilità e la riusabilità del codice.

Quando parliamo di moduli in TypeScript, ci riferiamo essenzialmente a file che contengono definizioni di classes, interfacce, funzioni o variabili.

Ogni modulo può esportare alcune o tutte queste entità, rendendole disponibili per essere importate e utilizzate in altri moduli.

Questo meccanismo di esportazione ed importazione é al cuore della gestione modulare del codice in TypeScript.

Per esempio, immagina di avere un modulo denominato "employee.ts", che contiene una classe Employee e una funzione work. Questo modulo può esportare sia la classe che la funzione, consentendo ad altri file, come "main.ts", di importarli e utilizzarli. In questo modo, puoi creare un'istanza della classe Employee e chiamare la funzione work nel modulo "main.ts", mantenendo il codice organizzato e separato in base alla sua funzionalità.

Prendiamo l'esempio de modulo "Employee" e vediamo come potrebbe essere strutturato in TypeScript, suddividendolo in due parti: la definizione della classe "Employee" in un modulo e l'utilizzo di questa classe in un altro modulo.

<code>
  // emloyee.ts
  export class Employee {
    private name: string;
    private position: string;
    constructor(name: string, position: string){
      this.name = name;
      this.position = position;
    }
    public describe(): string {
      return `{this.name} lavora come ${this.position}`;
    }
  }
  // main.ts
  import { Employee } from "./employee";
  let employee = new Employee("ALice", "Ingegnere del Softaware");
  console.log(employee.describe()); 
  // Output. ALice lavora come ingegnere del software
</code>

Questa separazione in moduli non solo aiuta a mantenere il codice organizzato e facile da navigare, ma contribuisce anche a incapsulare e proteggere il codice. Le entità che non vengono esplicitamente esportate da un modulo rimangono private a quel modulo, garantendo che il codice sia esposto solo dove e quando é necessario.

Un altro aspetto importante dei moduli in TypeScript é la risoluzione delle dipendenze. TypeScript si occupa di risolvere le dipendenze tra i vari moduli in fase di compilazione, garantendo che ogni modulo venga caricato e utilizzato correttamente all'interno dell'applicazione.
Questo sistema di gestione delle dipendenze garantisce che il codice sia non solo ben organizzato, ma anche sicuro e affidabile in termini di interdipendenze tra le varie parti dell'applicazione.

Inoltre TypeScript supporta l'importazione dinamica di moduli, che può essere particolarmente utile per caricare moduli in modo asincrono, ottimizzando così le performance dell'applicazione, specialmente in contesti web.

I moduli in TypeScript offrono un meccanismo per organizzare il codice in unità logiche separate, migliorando il codice in progetti sia piccoli sia di grandi dimensioni. Questa capacità di segmentare e incapsulare il codice in moduli distinti é fondamentale per lo sviluppo di applicazioni moderne e complesse.

NOTA: le caratteristiche elencate sono una prerogativa di JavaScript, per reali differenze leggere documentazione sottostante dove si specifica appunto questo.

### TypeScript Modules

Sin da l'ES6, JavaScript ha cominciato a supportare i moduli come parte nativa del linguaggio. TypeScript condivide lo stesso concetto dei moduli di JavaScript.

Un modulo TypeScript può contenere sia dichiarazioni che codice. Un modulo esegue all'interno del proprio scope, non nello scope globale. Significa che quando si dichiarano delle variabili, funzioni, classes, interfaces e altro in un modulo, non sono visibili all'esterno di quel modulo a meno che non vengano esportate esplicitamente usando la dichiarazione **export**.

Dall'altra parte, se si vuole avere accesso a variabili, funzioni, classes ecc da un modulo, si avrà la necessità di importarli usando lo statement **import**.

Come ES6, un file TypeScript contenente un import o un export al top-level verrà trattato come un modulo.

#### Creating a new module

Le dichiarazioni seguenti creano un nuovo module chiamato **Validator.ts** e dichiara un interfaccia chiamata Validator:

<code>
  export interface Validator {
    isValies(s: string): boolean
  }
</code>

In questo modulo, piazziamo la keyword **export** prima della keyword **interface** per esporlo ad altri moduli.

In altre parole, se non si usa la keyword **export**, l'interface **Validator** sarà privata nel modulo **Validator.ts**, altrimenti non potrà essere usato da altri moduli.

#### Export statements

Un altro modo di esportare una dichiarazioen da un modulo é usare lo statement **export**. Per esempio:

<code>
  interface ValidatorTwo {
    isValid(s: string): boolean;
  }
  export { ValidatorTwo };
</code>

TypeScript permette inoltre di rinominare le dichiarazioni per gli utilizzatori dei moduli, come:

<code>
  interface ValidatorThree {
    isValid(s: string): boolean;
  }
  export { ValidatorThree as StringValidator };
</code>

In quest'esempio, gli altri moduli usaranno l'interface Validator come interface StringValidator.

#### Importing a new module

Per utilizzare un modulo, si usi la dichiarazione **import**. L'esempio seguente crea un nuovo modulo EmailValidator che usa il modulo Validator.ts:

<code>
  import {ValidatorThree} from "./ValidatorThree";
  class EmailValidator implements ValidatorThree {
    isValid(s: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(s);
    }
  }
  export { EmailValidator };
</code>

Quando si importa un modulo, lo si può rinominare come segue:

<code>
  import {Validator as StringValidator} from "./Validator";
</code>

Dentro il modulo EmailValidator, si userà poi l'interface Validator come interface StringValidator:

<code>
  import {ValidatorThree as StringValidator} from "./Validator";
  class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(s);
    }
  }
  export { EmailValidator };
</code>

Il codice seguente illustra come usare il modulo EmailValidator nel file App.ts:

<code>
  import { EmailValidator } from "./EmailValidator";
  let email = 'john.doe@typescripttutorial.net';
  let validator = new EmailValidator();
  let result = validator.isValid(email);
  console.log(result);
</code>

Output:
---> true

#### Importing types

Il codice seguente dichiara un type chiamato alphanumeric nel modulo Types.ts :

<code>
  export type alphanumeric = string | number;
</code>

Per importare il type **alphanumeric** dal modulo Types.ts, si può usare lo statement **import type**:

<code>
  import type { alphanumeric } from "./Types";
</code>

Si noti che TypeScript ha supportato lo statement **import type** fin dalla versione 3.8. Se si utilizzano versioni precedenti, si necessiterà di usare lo statement **import** semplice al suo posto:

<code>
  import { alphanumeric } from "./Types";
</code>

#### Importing everything from a module

Per importare tutto da un modulo, si usi la seguente sintassi:

<code>
  import * from "module_name";
</code>

#### Re-exports

Il codice seguente crea un nuovo modulo chiamato **ZipCodeValidator.ts** che usa il modulo Validator.ts:

<code>
  import {ValidatorThree} from "./Validator";
  class ZipCodeValidator implements ValidatorThree {
    isValid(s: string): boolean {
      const numberRegexp = /^[0-9]+$/;
      return s.length === 5 && numberRegexp.test(s);
    }
  }
  export { ZipCodeValidator };
</code>

Si possono avvolgere i moduli EmailValidator e ZIpCodeValidator in un nuovo modulo combinando tutti i loro exports usando la seguente sintassi:

<code>
  export * from "module_name";
</code>

Il seguente esempio illustra come avvolgere i moduli EmailValidator.ts e ZipCodeValidator.ts nel modulo FormValidator:

<code>
  export * from "./EmailValidator";
  export * from "./ZipCodeValidator";
</code>

#### Default Exports

TypeScript permette ad ogni modulo di avere un export di default. Per rendere un export di default si usi la keyword **default**.

Il codice seguente mostra come esportare **ZipCodeValidator** come un export di default:

<code>
  import { Validator } from "./ValidatorThree";
  export default class ZipCodeValidator implements ValidatorThree {
    isValid(s: string): boolean {
      const numberRegexp = /^[0-9]+$/;
      return s.length === 5 && numberRegexp.test(s);
    }
  }
</code>

Per importare un export di dafault si usa una sintasi di import differente come questa:

<code>
  import default_export from "module_name";
</code>

Il codice seguente mostra come usare un export di default da ZipCodeValidator nel file App.ts:

<code>  
  import ZipCodeValidator from "./ValidatorThree";
  let validator = new ZipCodeValidator();
  let result = validator.isValid("95134);
  conosole.log(result);
</code>

In sintesi:

- TypeScript condivide lo stesso concetto di moduli con i modules ES6. Un modulo può contenere sia dichiarazioni che codice.

- In un modulo, variabili, funzioni, classes, interfaces ecc. si eseguono nel proprio scope, non nello scope globale.

- Si usi lo statement **export** per esportare le variabili, funzioni, classe, interfaces, types ecc. da un modulo.

- Si usi lo statement **import** per accedere agli exports da altri moduli.

# Video Corso

# CodingGarden
