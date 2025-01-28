// Flatten object keys into an array so that we search the entire object by the input value
const flattenObjectValuesIntoArray = (arrOfObjs) => {
  let flattenedObj;
  const flattenedObjsArr = [];
  for (let obj = 0; obj < arrOfObjs.length; obj++) {
    const objValues = Object.values(arrOfObjs[obj]);
    flattenedObj = [...objValues.flat()];
    flattenedObjsArr.push(flattenedObj);
  }
  return flattenedObjsArr;
};

// Structure filtered books as HTML and return
const structureBookAsHtml = (book) => {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("class", "bookDiv");

  const bookTitle = document.createElement("h2");
  bookTitle.innerHTML = book.title;
  bookTitle.setAttribute("class", "bookTitle");

  const bookAuthor = document.createElement("h3");
  bookAuthor.innerHTML = book.author;

  const bookTags = document.createElement("p");
  bookTags.innerHTML = book.tags.join(", ");

  bookDiv.append(bookTitle, bookAuthor, bookTags);

  return bookDiv;
};

const renderBooksToDom = (elements) => {
  const bookListContainer = document.querySelector("#bookList");
  bookListContainer.innerHTML = "";

  bookListContainer.append(...elements);
};
