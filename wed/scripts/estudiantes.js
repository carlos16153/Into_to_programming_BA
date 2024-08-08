let nombres=[["33642612","Carlos Adrian"],[ "15957531","Erik Scala"],[ "32549844","Melani Velasque"]]
console.log(nombres)

function agregar_estudiantes(){
    let add=document.getElementById("add_student");
    add.style.display="block";
    let buscar=document.getElementById("search_student");
    buscar.style.display="none";
    let eliminar = document.getElementById("delete_student");
    eliminar.style.display="none";
}


function buscar_estudiantes(){
    let add=document.getElementById("add_student");
    add.style.display="none";
    let buscar=document.getElementById("search_student");
    buscar.style.display="block";
    let eliminar = document.getElementById("delete_student");
    eliminar.style.display="none";
}

function eliminar_estudiante(){
    let eliminar=document.getElementById("delete_student");
    eliminar.style.display="block";let add=document.getElementById("add_student");
    add.style.display="none";
    let buscar=document.getElementById("search_student");
    buscar.style.display="none";
    

}
