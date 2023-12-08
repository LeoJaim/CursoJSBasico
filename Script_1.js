let nombre = 'Leo'
nombre = 'Pedro'
const apellido = 'Gonzalez'
suscripcion = []
tiposSuscripcion = {
  Free:"Solo puedes tomar cursos gratis",
  Basic:"Solo puedes tomar cursos durante un mes",
  Expert:"Solo puedes tomar cursos durante un año",
  ExpertDuo:"Tu y alguien mas pueden tomar cursos durante un año"
}

function gettipoSuscripcion(suscripcion){
        if (suscripcion === 'Free'){
            console.log("Solo puedes tomar cursos gratis");
           }
        if (suscripcion === 'Basic'){
            console.log("Solo puedes tomar cursos durante un mes");
            }
        if (suscripcion === 'Expert'){
            console.log("Solo puedes tomar cursos durante un año");
            }
        if (suscripcion === 'ExpertDuo'){
            console.log("Tu y alguien mas pueden tomar cursos durante un año");
           }
    } 
//gettipoSuscripcion("Expert");
if(tiposSuscripcion["ExpertDuo"]) {
  console.log(tiposSuscripcion[suscripcion]);
}
