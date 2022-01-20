const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let formData = new FormData(form);
    let tablaRef = document.getElementById("tablaGusto");
    let newTablaRow = tablaRef.insertRow(-1);

    newTypeCell = newTablaRow.insertCell(0)
    newTypeCell.textContent = formData.get("gusto");

    newTypeCell = newTablaRow.insertCell(1)
    newTypeCell.textContent = "0"

    newTypeCell = newTablaRow.insertCell(2)
    newTypeCell.anyContent = "editar"
}
)
