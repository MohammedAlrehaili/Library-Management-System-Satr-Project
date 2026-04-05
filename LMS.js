function AddToBooks(array, BookID, BookTitle, Author, Price, Quantity) {
    array.push([BookID, BookTitle, Author, Price, Quantity]);
}

function SearchBook(array, searchTerm) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == searchTerm || array[i][1] === searchTerm || array[i][2] === searchTerm) {
            return { 
                book: array[i],
                index: i 
            };
        }
    }
    return null;
}

function BuyBook(array, BookTitle, Quantity, Balance) {
    if (array.length === 0) {
        console.log("Sorry, the Library is Empty");
        return;
    }

    const searchResult = SearchBook(array, BookTitle);
    
    if (searchResult) {
        let book = searchResult.book;
        let index = searchResult.index;
        let price = book[3];
        let stock = book[4];

        if (stock >= Quantity) {
            let totalCost = Quantity * price;
            if (Balance >= totalCost) {
                array[index][4] -= Quantity; 

                console.log("--- Invoice ---");
                console.log(`Book: ${book[1]}`);
                console.log(`Quantity: ${Quantity}`);
                console.log(`Total: ${totalCost}$`);
                console.log(`Remaining Balance: ${Balance - totalCost}$`);
                console.log("----------------");
            } else {
                console.log("Error: Your balance is insufficient.");
            }
        } else {
            console.log("Error: Out of stock or quantity not available.");
        }
    } else {
        console.log("Error: Book not found.");
    }
}

const Library = [];

AddToBooks(Library, 1, "Start with why", "Simon Sinek", 80, 13);
AddToBooks(Library, 2, 'But how do it know', 'J. Clark Scott', 59, 22);
AddToBooks(Library, 3, 'Clean Code', 'Robert Cecil Martin', 50, 5);
AddToBooks(Library, 4, 'Zero to One', 'Peter Thiel', 45, 12);
AddToBooks(Library, 5, 'You dont know JS', 'Kyle Simpson', 39, 9);

BuyBook(Library, 'Start with why', 2, 500);

console.log("Updated Library:", Library);