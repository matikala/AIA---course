function addBook() {
    let tableBody = document.getElementById("tbody_cont")
    let rowNum = tableBody.rows.length

    let newRow = tableBody.insertRow(-1)
    let newAuthor = newRow.insertCell(0)
    let newTitle = newRow.insertCell(1)
    let newButtons = newRow.insertCell(2)
    newRow.id = "tr" + rowNum
    let newAuthorInput = document.createElement("input")
    newAuthorInput.type = "text"
    newAuthorInput.id = "author" + rowNum
    newAuthor.appendChild(newAuthorInput)

    let newTitleInput = document.createElement("input")
    newTitleInput.type = "text"
    newTitleInput.id = "title" + rowNum
    newTitle.appendChild(newTitleInput)

    let saveButton = document.createElement("button")
    saveButton.type = "button"
    saveButton.innerHTML = "Save"
    saveButton.id="save_button" + rowNum
    saveButton.setAttribute("onclick", "saveBook(this)")
    newButtons.appendChild(saveButton)

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerHTML = "Remove"
    removeButton.id="remove_button" + rowNum
    removeButton.setAttribute("onclick", "removeBook(this)")
    newButtons.appendChild(removeButton)

}


function saveBook(button) {
    let rowNum = button.id.slice(-1)
    let row = document.getElementById("tr" + rowNum)

    let authorTd = row.children[0]
    let authorValue = authorTd.children[0].value
    authorTd.innerHTML = ""
    let authorP = document.createElement("p")
    authorP.id = "author" + rowNum
    authorP.innerHTML = authorValue
    authorTd.appendChild(authorP)

    let titleTd = row.children[1]
    let titleValue = titleTd.children[0].value
    titleTd.innerHTML = ""
    let titleP = document.createElement("p")
    titleP.id = "title" + rowNum
    titleP.innerHTML = titleValue
    titleTd.appendChild(titleP)

    let buttonTd = row.children[2]
    let saveButton = buttonTd.children[0]
    saveButton.setAttribute("id", "edit_button" + rowNum)
    saveButton.innerHTML = "Edit"
    saveButton.setAttribute("onclick", "editBook(this)")
}


function editBook(button) {
    let rowNum = button.id.slice(-1)
    let row = document.getElementById("tr" + rowNum)

    let authorTd = row.children[0]
    let authorValue = authorTd.children[0].innerHTML
    authorTd.innerHTML = ""
    let authorInput = document.createElement("input")
    authorInput.id = "author" + rowNum
    authorInput.value = authorValue
    authorTd.appendChild(authorInput)

    let titleTd = row.children[1]
    let titleValue = titleTd.children[0].innerHTML
    titleTd.innerHTML = ""
    let titleInput = document.createElement("input")
    titleInput.id = "title" + rowNum
    titleInput.value = titleValue
    titleTd.appendChild(titleInput)

    let buttonTd = row.children[2]
    let saveButton = buttonTd.children[0]
    saveButton.setAttribute("id", "save_button" + rowNum)
    saveButton.innerHTML = "Save"
    saveButton.setAttribute("onclick", "saveBook(this)")
}


function removeBook(button) {
    let removeRow = button.parentNode.parentNode
    removeRow.parentNode.removeChild(removeRow)
}