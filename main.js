// Book library and cosnstructor
class Book {
	myLibrary = [];
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
	addBookToLibrary(book) {
		const tableBody = document.getElementById('table-body');
		this.myLibrary.push(book);

		tableBody.innerHTML += `
					<tr> 
					  <td class='book-title'>${book.title}</td>
					  <td class='book-author'>${book.author}</td>
					  <td class='book-pages'>${book.pages}</td>
					  <td class='book-isRead'>${book.read}</td>
					  
					</tr>`;
	}
}

// submission function
(function submission() {
	const submitBtn = document.getElementById('submit');

	submitBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const bookTitle = document.getElementById('title');
		const author = document.getElementById('author');
		const pages = document.getElementById('pages');
		const isRead = document.querySelectorAll('.radio');

		// javascript check for validity
		const formModal = document.getElementById('form-modal');
		if (!formModal.reportValidity()) {
			return;
		}

		isRead.forEach((r) => {
			if (r.checked) {
				isRead.value = r.value;
				isRead.checked = false;
			}
		});

		// create new book instance
		let newBook = new Book(
			bookTitle.value,
			author.value,
			pages.value,
			isRead.value
		);

		// add book to library
		newBook.addBookToLibrary(newBook);

		closeDialog();
		clearValues(bookTitle, author, pages, isRead);
	});
})();

// Close the dialog
function closeDialog() {
	const dialog = document.getElementById('dialog');
	dialog.close();
}

// open the dialog
function openDialog() {
	const dialog = document.getElementById('dialog');
	dialog.showModal();
}

// Clear input fields
function clearValues(bookTitle, author, pages, isRead) {
	bookTitle.value = '';
	author.value = '';
	pages.value = '';
	isRead.forEach((r) => {
		r.checked = false;
	});
}

// initialize program
const init = (() => {
	const addBookBtn = document.getElementById('add-book');
	addBookBtn.addEventListener('click', openDialog);
})();
