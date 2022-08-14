console.log(" Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată");

const TITLE = "Pizza";
const SLICE = 4;
const INGREDIENTS = ["sunca", "cas", "ketchup"];

const culinaryRecipe = (title, slice, ingredients) => {
    const recipe = {
        titlu: title,
        portii: slice,
        ingrediente: ingredients
    }
    return recipe;
}

const displayRecipe = culinaryRecipe(TITLE, SLICE, INGREDIENTS);
console.log(displayRecipe);

console.log('\n');

console.log("Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate");

const a = 1;
const b = 2;

const object = {
    a: a,
    b: b,
}

const removeElement = (object, b) => {
    delete object.b
    return object;
}

const result = removeElement(object, b);
console.log(result);

console.log('\n');

console.log("Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).");

const books = [
    {
        title: "Hobbitul",
        author: "J.R.R. Tolkien",
        read: 1
    },    
    {
        title: "Crimă și pedeapsă",
        author: "Feodor Dostoievski",
        read: 1
    }, 
    {
        title: "Tata bogat, tata sarac",
        author: "ROBERT T. KIYOSAKI",
        read: 0
    }
];

const displayBooks = (setBooks) => {
    for (const book of setBooks) {
        if (book.read === 1) {
            console.log(`${book.title} de ${book.author} \n Ai citit deja ${book.title} de ${book.author}`);
        } else if (book.read === 0) {
            console.log(`${book.title} de ${book.author} \n Trebuie sa citesti ${book.title} de ${book.author}`);
        }
    }    
}

const getBooks = displayBooks(books);
console.log(getBooks);
