function showinfo(element) {
    const info = element.querySelector('.info')
    const rect = element.getBoundingClientRect();
    const windowWidth = window.innerWidth;


    // console.log("Rect: " + rect.right)
    // console.log("Window width: " + windowWidth);
    // console.log("info width: " + info.offsetWidth);


    // Detectar si el planeta está cerca del borde derecho
    // Sumo 400 de offset asi tambien se aplica el efecto en jupiter
    if (rect.right + info.offsetWidth + 400 > windowWidth) {

        // Posiciona la infomracion a la izquierda
        info.style.left = "auto"; //Sin esto no funciona
        info.style.right = '120%'; 
    } else {
        //Posicion la informacion a la derecha
        info.style.right = "auto"; //Sin esto no funciona
        info.style.left = '120%';  
    }
}