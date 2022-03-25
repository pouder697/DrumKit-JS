"use strict"
window.addEventListener('keydown', reproducirSonido); //agrerga un evento que informa cuando se pulas una tecla
window.addEventListener('click', reproducirSonido);

//función reproducirSonido() para reproducir y animar botones
function reproducirSonido(a){
    const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`); //selecciona el audio correspondiente al código ascii

    const key = document.querySelector(`.key[data-key="${a.keyCode}"]`); //selecciona la tecla correspondiente al código ascii


    if (!audio){
        return; //detiene la funcion en su totalidad
    }  
    audio.currentTime = 0; //el sonido vuelve a comenzar
    audio.play(); //reproduce el audio
    key.classList.add('reproduciendo'); //agrega a la "key" seleccionada la clase "reproduciendo"
    
}


//función removerTransición() para eliminar clase "reproducendo"
const removerTransicion = function(a){
    if (a.propertyName !== 'transform') //saltea la key si no posee la propiedad "transform"
        return
      this.classList.remove('reproduciendo');
    }

//selección de "keys" para escuchar cada una de ellas
const keys = document.querySelectorAll('.key');
console.log(keys) //nos permite ver en consola una lista con todas las keys
keys.forEach(key => key.addEventListener('transitionend', removerTransicion));
