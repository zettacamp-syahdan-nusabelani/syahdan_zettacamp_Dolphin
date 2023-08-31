// Define the initial state of the application

const state = {
    inventory: [],

    // indicates whether the application is currently in an "edit" mode or not.
    is_edit: false,
    // indicates whether the application is in "add" mode or not. 
    is_add: false
}

// Create a storage object with methods to manage local storage
const storage = {
    create: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    read: (key) => JSON.parse(localStorage.getItem(key)),
    update: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    delete: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear()
}


//// Define a Book constructor function to create book objects

const Book = function (title, author, description, count) {
    this.id = state.inventory.length + 1
    this.title = title
    this.author = author
    this.description = description
    this.count = count
}

// Define the BookModel object with methods to manipulate the book inventory
const BookModel = {
    // Method to add a new book to the inventory
    addBook: (title, author, description, count) => {
        // Create a new Book instance and add it to the inventory
        state.inventory.push(new Book(title, author, description, count));
        // Update the inventory data in local storage
        storage.update('inventory', state.inventory);
    },
    
    // Method to read all books from the inventory
    readBooks: () => state.inventory,
    
    // Method to read a specific book by its id
    readBook: (id) => state.inventory.filter(book => book.id === id),
    
    // Method to update the details of a specific book
    updateBook: (id, title, author, description, count) => {
        // Update the book's details in the state's inventory
        state.inventory = state.inventory.map(book => {
            // function iterates over each element in the state.
            //inventory array and creates a new array -->
            //where each book is transformed based on the logic inside the provided function.
            if (book.id === id) {
                book.title = title;
                book.author = author;
                book.description = description;
                book.count = count;
            }
            return book;
        });
        // Update the inventory data in local storage
        storage.update('inventory', state.inventory);
    },
    
    // Method to delete a specific book from the inventory
    deleteBook: (id) => {
        // Remove the book with the specified id from the inventory
        state.inventory = state.inventory.filter(book => book.id !== id);
        // Update the inventory data in local storage
        storage.update('inventory', state.inventory);
    },
    
    // Method to delete all books from the inventory
    deleteBooks: () => {
        // Clear the entire inventory data from local storage
        storage.clear();
    }
};



const handleEdit = (id) => {
    // Get the row element of the book with the specified id
    const bookRow = document.getElementById('book-' + id);
    // Select all input elements within the book row
    const input = bookRow.querySelectorAll('input');

    // Set 'is_edit' in local storage to true
    storage.update('is_edit', true);

    // Enable/disable input elements based on 'is_edit' value from local storage
    Array.from(input).forEach(item => {
        // Toggle the 'disabled' attribute based on 'is_edit' value
        item.disabled = !storage.read('is_edit');
    });

    // Enable/disable textarea based on 'is_edit' value from local storage
    const textarea = bookRow.querySelector('textarea');
    textarea.disabled = !storage.read('is_edit');

    // Hide the 'Edit' button and show the 'Save' and 'Cancel' buttons
    bookRow.querySelector('.action--edit').className = "action--edit hide";
    bookRow.querySelector('.action--save').className = "action--save";
    bookRow.querySelector('.action--cancel').className = "action--cancel";
    bookRow.querySelector('.action--delete').className = "action--delete hide";
};



const handleSave = (id) => {
    // Get the row element of the book with the specified id
    const bookRow = document.getElementById('book-' + id);
    // Select all input elements within the book row
    const input = bookRow.querySelectorAll('input');

    // Set 'is_edit' in local storage to false
    storage.update('is_edit', false);

    // Enable/disable input elements based on 'is_edit' value from local storage
    Array.from(input).forEach(item => {
        // Toggle the 'disabled' attribute based on 'is_edit' value
        item.disabled = !storage.read('is_edit');
    });

    // Enable/disable textarea based on 'is_edit' value from local storage
    const textarea = bookRow.querySelector('textarea');
    textarea.disabled = !storage.read('is_edit');

    // Show the 'Edit' button and hide the 'Save' and 'Cancel' buttons
    bookRow.querySelector('.action--edit').className = "action--edit";
    bookRow.querySelector('.action--save').className = "action--save hide";
    bookRow.querySelector('.action--cancel').className = "action--cancel hide";
    bookRow.querySelector('.action--delete').className = "action--delete";

    // Extract input values and textarea value
    const [title, author, count] = Array.from(input).map(({ value }) => value);
    const desc = textarea.value;

    // Update the book details using the BookModel
    BookModel.updateBook(id, title, author, desc, count);
};



const handleCancel = (id) => {
    // Get the row element of the book with the specified id
    const bookRow = document.getElementById('book-' + id);
    // Select all input elements within the book row
    const input = bookRow.querySelectorAll('input');

    // Set 'is_edit' in local storage to false
    storage.update('is_edit', false);

    // Enable/disable input elements based on 'is_edit' value from local storage
    Array.from(input).forEach(item => {
        // Toggle the 'disabled' attribute based on 'is_edit' value
        item.disabled = !storage.read('is_edit');
    });

    // Enable/disable textarea based on 'is_edit' value from local storage
    const textarea = bookRow.querySelector('textarea');
    textarea.disabled = !storage.read('is_edit');

    // Show the 'Edit' button and hide the 'Save' and 'Cancel' buttons
    bookRow.querySelector('.action--edit').className = "action--edit";
    bookRow.querySelector('.action--save').className = "action--save hide";
    bookRow.querySelector('.action--cancel').className = "action--cancel hide";
    bookRow.querySelector('.action--delete').className = "action--delete";

    // Refresh the row with the original book details
    RefreshRow(id);
};



const handleDelete = (id) => {
    // Get the row element of the book with the specified id
    const bookRow = document.getElementById('book-' + id);
    // Select all input elements within the book row
    const input = bookRow.querySelectorAll('input');

    // Extract the title from the input fields
    const [title] = Array.from(input).filter(item => item.name == 'book-' + id + '-title').map(({ value }) => value);

    // Ask for user confirmation before deleting
    const deleteConfirmation = confirm(`Are you sure to delete ${title}?`);
    if (deleteConfirmation) {
        // If user confirms, delete the book using BookModel
        BookModel.deleteBook(id);
    }
};




const handleAdd = () => {
    // Select the element with the id 'book-add'
    const element = document.querySelector('#book-add');
    // Set the display style to 'table-row', making it visible
    element.style.display = 'table-row';
};



const handleAddSave = () => {
    // Select the element with the id 'book-add'
    const element = document.querySelector('#book-add');
    // Select all input elements within the 'book-add' element
    const input = element.querySelectorAll('input');
    // Extract values from the input elements
    const [title, author, count] = Array.from(input).map(({ value }) => value);
    // Select the textarea element within the 'book-add' element
    const textarea = element.querySelector('textarea');
    // Extract the value of the textarea
    const desc = textarea.value;

    // Add a new book using BookModel's addBook method
    BookModel.addBook(title, author, desc, count);

    // Call handleAddCancel to reset the form and hide it
    handleAddCancel();

    // Refresh the table to display the updated inventory
    RefreshTable();
};



const handleAddCancel = () => {
    // Select the element with the id 'book-add'
    const element = document.querySelector('#book-add');
    // Hide the element by setting the display style to 'none'
    element.style.display = 'none';

    // Select all input elements within the 'book-add' element
    const input = element.querySelectorAll('input');
    // Reset the value of each input element to an empty string
    Array.from(input).forEach(item => {
        item.value = "";
    });

    // Select the textarea element within the 'book-add' element
    const textarea = element.querySelector('textarea');
    // Reset the value of the textarea to an empty string
    textarea.value = "";
};



const handleClear = () => {
    const clearConfirmation = confirm(`Are you sure to clear the inventory?`)
    if (clearConfirmation){
        storage.clear()
        RefreshTable()
    }
}


const RefreshRow = (id) => {
    console.log('refresh now!');
    
    // Get the row element of the book with the specified id
    const bookRow = document.getElementById('book-' + id);
    const input = bookRow.querySelectorAll('input');

    // Read the current book details using the BookModel
    const currentBook = BookModel.readBook(id);
    console.log(currentBook);

    // Update the input fields with the current book's details
    Array.from(input).forEach(item => {
        if (item.name == 'book-' + id + '-title') item.value = currentBook[0].title;
        if (item.name == 'book-' + id + '-author') item.value = currentBook[0].author;
        if (item.name == 'book-' + id + '-number') item.value = currentBook[0].count;
    });

    // Update the textarea with the current book's description
    const textarea = bookRow.querySelector('textarea');
    textarea.value = currentBook[0].description;
};

const RefreshTable = () => {
    const table = document.getElementById('book__table__body');
    // Remove all existing rows from the table
    Array.from(table.children).forEach(item => {
        table.removeChild(item);
    });

    // Iterate through the book inventory and add each book as a table row
    Array.from(state.inventory).forEach(({ id, title, author, description, count }) => {
        table.appendChild(PrepareTableItem(id, title, author, description, count));
    });
};


//Prepare to display
const PrepareTableItem = (id, title, author, description, count) => {
    // Create a new <tr> element for the table row
    const row = document.createElement("tr");
    // Set the id attribute of the row element
    row.id = 'book-' + id;

    // Set the innerHTML of the row using a template string
    row.innerHTML = `<form action="#" name="book-${id}-form" id="book-${id}-form">
        <td>${id}</td>
        <td>
            <input type="text" name="book-${id}-title" value="${title}" disabled>
        </td>
        <td>
            <input type="text" name="book-${id}-author" value="${author}" disabled>
        </td>
        <td>
            <textarea cols="30" rows="1" name="book-${id}-desc" disabled>${description}</textarea>
        </td>
        <td>
            <input type="number" name="book-${id}-number" value="${count}" disabled>
        </td>
        <td>
            <ul>
                <li class='action--edit'>
                    <span onclick="handleEdit(${id})">Edit</span>
                </li>
                <li class='action--save hide'>
                    <span onclick="handleSave(${id})">Save</span>
                </li>
                <li class='action--cancel hide'>
                    <span onclick="handleCancel(${id})">Cancel</span>
                </li>
                <li class='action--delete'>
                    <span onclick="handleDelete(${id})">Delete</span>
                </li>
            </ul>
        </td>
    </form>`;

    // Return the created row element
    return row;
};


const main = () => {

    if (storage.read('inventory')) {
        state.inventory = storage.read('inventory')
    } else {
        storage.create('inventory', [])
    }

    RefreshTable()
}

main()