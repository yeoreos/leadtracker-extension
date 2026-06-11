let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputButton.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}
