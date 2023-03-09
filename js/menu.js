function ejecutar (id){  
    
    var intro = document.getElementById('informacionPersonal');
    intro.style.cssText = 'visibility: hidden; position: relative; height: 1px;';

    var intro = document.getElementById('ExperienciaLaboral');
    intro.style.cssText = 'visibility: hidden; position: relative; height: 1px;';

    var intro = document.getElementById('Formacion');
    intro.style.cssText = 'visibility: hidden; position: relative; height: 1px;';

    var intro = document.getElementById('Cursos');
    intro.style.cssText = 'visibility: hidden; position: relative; height: 1px;';

    var intro = document.getElementById('Habilidades');
    intro.style.cssText = 'visibility: hidden; position: relative; height: 1px;';

    var intro = document.getElementById(id);
    intro.style.cssText = 'visibility: visible;';
}