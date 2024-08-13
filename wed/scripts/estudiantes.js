let nombres=[["33642612","Carlos Adrian"],[ "15957531","Erik Scala"],[ "32549844","Melani Velasque"]]
console.log(nombres)

function mostrar_agregar_estudiantes(){
    let add=document.getElementById("add_student");
    add.style.display="block";
    let buscar=document.getElementById("search_student");
    buscar.style.display="none";
    let eliminar = document.getElementById("delete_student");
    eliminar.style.display="none";
}


function mostrar_buscar_estudiantes(){
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


function guardar_listado(){
    let listado = document.getElementById("Listado");
    listado.innerHTML = "";

    nombres.forEach(nombre=>{
            let item=document.createElement("p");
            item.textContent= `C.I. ${nombre[0]}, ${nombre[1]},`;
            listado.appendChild(item);

});
}
function agregarEstudiante(){
    let cedula = document.getElementById("ci").value;
    let nombre = document.getElementById("nombre").value;
    alert(cedula)
    nombres.push([cedula,nombre]);
    alert("se ha guardado");

}

function buscar_Estudiante(){
    let buscar = document.getElementById("buscar-ci").value;
    let encontrado = false;
    nombres.forEach(nombre=>{
        if(nombre[0]==buscar){
            alert("se a encontrado el estudiante");
            encontrado = true;
            }
        });
        if(encontrado==false){
    alert("no se ha encontrado el estudiante");

}
}
function eliminar_Estudiante(){
    let eliminado =nombres.pop();
    alert("se ha eliminado el estudiante"+eliminado[0]+" "+eliminado[1]);
    listado_estudiante();
    
}