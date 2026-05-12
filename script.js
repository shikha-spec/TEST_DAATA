function addBook() {
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;

    if(bookName === "" || authorName === ""){
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${bookName} by ${authorName} 
    <button onclick="this.parentElement.remove()">Remove</button>`;

    document.getElementById("bookList").appendChild(li);

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}