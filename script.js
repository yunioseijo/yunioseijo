let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    /*accedo al alemento section que tiene la clase skills, que dentro tine una fila y dos columnas
    con las skills tecnicas y las soft*/
    const allSkills = document.querySelector('#skills .fila');
    //console.log('skills',techSkills);
    // const skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - allSkills.getBoundingClientRect().top;
    // guardo en la variable hijos los elementos que contienen la información de las dos columanas
    let hijos=allSkills.children;
    
    let listaSkills;
    
    
    if(distancia_skills >= 300){
        if (!hasScrolled) {
            for (const child of hijos) {
                /*Selecciono todos los elemento con la clase progreso por cada columna para poder luego hacer la animación */
                let habilidades = child.getElementsByClassName("progreso");
                /*Accedo a la lista de skills puedo acceder al span con el nombre de la skill */
                listaSkills = child.querySelectorAll('.skill ');
                
                for (let index = 0; index < listaSkills.length; index++) {
                    
                    habilidades[index].classList.add(listaSkills[index].querySelector('span').textContent.split(" ").shift());
                    /*Accedo al valor numérico que tiene el span con el porcentaje */
                    let porcentaje = parseInt(habilidades[index].querySelector('.progreso span').textContent.slice(0, -1));
                    //Creo la animación para cada progreso
                    let width = 0;
                    const interval = setInterval(() => {
                        if (width >=  porcentaje){
                            clearInterval(interval);
                        }
                        width += 1;
                        habilidades[index].style.width = `${width}%`;
                    }, 20); // Fin del interval

                }// Fin del for lista de skills
            }// fin del for que recorre las dos columnas
           
            hasScrolled = true;
          }
    } // fin del if distancia
}

let hasScrolled = false;
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
