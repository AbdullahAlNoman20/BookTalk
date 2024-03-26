


const getStoredBook = () =>{
    const storedBook = localStorage.getItem('listed-book');
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [];
}


const saveBook = id =>{

    const storedBook = getStoredBook()
    const exists = storedBook.find(bookId => bookId ===id);
    if(!exists){
        storedBook.push(id);
        localStorage.setItem('listed-book', JSON.stringify(storedBook))
    }
}

export {saveBook , getStoredBook}