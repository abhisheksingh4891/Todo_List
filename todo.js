
// to insert data into todo list i.e. title and description and submit
function getAndUpdate(){
    console.log("Updating list.....")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null){
        itemsJsonArray = [];
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemsJsonArray = JSON.parse(itemJsonArrayStr);
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
        
    }
    update();
}

function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemsJsonArray = JSON.parse(itemJsonArrayStr);
        
    }
    // populate table
    let tableBody = document.getElementById("tableBody");
    let str = ""
    itemsJsonArray.forEach((element, index) => {
        str+=`
        <tr>
            <th scope="row">${index +1 }</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button type="submit" class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });

    tableBody.innerHTML = str;

}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemsJsonArray = JSON.parse(itemJsonArrayStr); 
    // dlete item index element from the array
    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    update();
}

function clearstr(){
    if(confirm("Your list will be deleted")){
    console.log("Clearing the storage")
    localStorage.clear();
    update();
    }
}

//

