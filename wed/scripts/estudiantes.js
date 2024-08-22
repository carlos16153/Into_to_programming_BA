let nombres= [
    ["19769790", "Jean Andrade"],
    ["19876543", "María Pérez"],
    ["19987654", "Carlos García"],
    ["20098765", "Ana Rodríguez"],
    ["20109876", "Luis Fernández"],
    ["20210987", "Lucía Martínez"],
    ["20321098", "Miguel Gómez"],
    ["20432109", "Elena Sánchez"],
    ["20543210", "Javier Ramírez"],
    ["20654321", "Sofía Torres"],
    ["20765432", "Andrés Vargas"],
    ["20876543", "Paula Romero"],
    ["20987654", "Ricardo Jiménez"],
    ["21098765", "Gabriela Castillo"],
    ["21109876", "Fernando Ríos"],
    ["21210987", "Natalia Herrera"],
    ["21321098", "Diego Morales"],
    ["21432109", "Claudia Ortiz"],
    ["21543210", "Santiago Paredes"],
    ["21654321", "Laura Domínguez"]
];
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
    eliminar.style.display="block";
    let add=document.getElementById("add_student");
    add.style.display="none";
    let buscar=document.getElementById("search_student");
    buscar.style.display="none";
    
    
    }


function mostrar_listado(){
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
    let eliminar_ci = document.getElementById("eliminar-ci").value;
    let eliminado=""
    if(eliminar_ci==""){
        eliminado =nombres.pop();
    } 
    else{
        let index=nombres.findIndex(est => est[0]===eliminar_ci);
        if(index!==-1){
            elimina=nombres[index];
            nombres.splice(index,1);
        } else {
            alert("no se ha encontrado el estudiante");
        }
    }
    alert("se ha eliminado el estudiante"+eliminado[0]+" "+eliminado[1]);
    mostrar_listado();


}
function guardarEnArchivo() {
    let contenido = nombres.map(nombre => `${nombre[0]},${nombre[1]}`).join('\n');
    
    // Crear un Blob con el contenido
    let blob = new Blob([contenido], { type: 'text/csv' });
    
    // Crear un enlace para descargar el archivo
    let enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'estudiantes.csv';
    enlace.click();
}
function cargarDesdeArchivo(event) {
    let archivo = event.target.files[0];
    if (!archivo) return;
    let lector = new FileReader();
    lector.onload = function(e) {
        let contenido = e.target.result;
        let lineas = contenido.split('\n');
        
        nombres = lineas.map(linea => {
            let [ci, nombre] = linea.split(',');
            return [ci.trim(), nombre.trim()];
        });
        alert('Estudiantes cargados con éxito.');
        mostrar_listado();
    };
    
    lector.readAsText(archivo);
}