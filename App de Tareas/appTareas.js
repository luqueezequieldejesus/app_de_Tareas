(function(){
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

//Funciones

var agregarTarea = function(){
   var tarea = tareaInput.value,
       nuevaTarea = document.createElement("li"),
       enlace = document.createElement("a"),
       contenido = document.createTextNode(tarea);

    if(tarea===""){
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida... ");
        tareaInput.className ="error";
        return false;
    }
    //agregar contenido al enlace
    enlace.appendChild(contenido);
    
    enlace.setAttribute("href", "#" );
    //agregamos enlase a la nueva tarea
    nuevaTarea.appendChild(enlace);
    //agregamos nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for(var i  = 0; i <= lista.children.length - 1 ; i++ ){

        lista.children[i].addEventListener("click", function(){

        this.parentNode.removeChild(this);

        });
        
        
        
        }

    };
var comprobarInput = function(){
  tareaInput.className = "";
  tareaInput.setAttribute("placeholder", "Agregar tu tarea" );
};
var eliminarTareas = function(){
   //acceder al elecemnto padre
    this.parentNode.removeChild(this);
};

//Eventos que van a ejecutar las acciones


//Agregar tarea 


btnNuevaTarea.addEventListener("click", agregarTarea);




//Comprobar input

tareaInput.addEventListener("click", comprobarInput);


for(var i  = 0; i <= lista.children.length - 1 ; i++ ){

lista.children[i].addEventListener("click", eliminarTareas);



}




}());