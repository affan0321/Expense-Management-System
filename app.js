let id = document.getElementById("id");
let item = document.getElementById("item");
let amount = document.getElementById("amount");
let listEl = document.getElementById("list-container");

let itemsList = [];

function addExpense(){
    let idEl = id.value;
    let itemEl = item.value;
    let amountEl = amount.value;

    let expense = {
        id: idEl,
        item: itemEl,
        amount : parseFloat(amountEl)
    }

    itemsList.push(expense);
    
    
    
    id.value = "";
    item.value = "";
    amount.value =  "";

    renderList();

}

function renderList(){
listEl.innerHTML = "";
itemsList.forEach ((expense,index)=>{
    listEl.innerHTML += `
    <li>
    ID : ${expense.id},  Item : ${expense.item} ,   Amount : ${expense.amount.toFixed(2)}
    <button style="margin-bottom : 20px; background-color:#d62828" class = "btn2" onclick="deleteBtn(${index})">Delete</button>
    <button style = "background-color : #70e000" class = "btn2" onclick="editItem(${index})">Edit</button>
    <li/>
    `
})
}

function deleteBtn(index){
itemsList.splice(index,1);
renderList();
}

function editItem(index){
    let newId = prompt("New ID :", itemsList[index].id)
    let newItem = prompt("New Item :", itemsList[index].item)
    let newAmount = prompt("New Amount :", itemsList[index].amount)

    if (newId !== null && newId !== "") {
        itemsList[index].id = newId;
    }
    if (newItem !== null && newItem !== "") {
        itemsList[index].item = newItem;
    }
    if (newAmount !== null && newAmount !== "") {
        itemsList[index].amount = parseFloat(newAmount);
    }
    renderList();
}

function calculateTotal(){
    let totalAmount = 0;
    itemsList.forEach(expense =>{
    totalAmount += expense.amount
    });
    console.log("the total amount :", totalAmount.toFixed(2));
    alert("Total Amount: $" + totalAmount.toFixed(2));
    renderList();
}
