
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    
    // Coordonnées de la position initiale du DnD
    this.initPositionX = 0;
    this.initPositionY = 0;
    // Coordonnées de la position finale du DnD
    this.finalPositionX = 0;
    this.finalPositionY = 0;

	// 3 fonctions gérant les événements
    // Pression souris
    this.maFctGerantLaPression = function(evt) {
        this.coordoneesX = getMousePosition(canvas,evt).x;
        this.coordoneesY = getMousePosition(canvas,evt).y;

//        console.log("Press");
//        console.log(this.coordoneesX);
//        console.log(this.coordoneesY);
    }.bind(this);
    
    // Déplacement souris
    this.maFctGerantLeDeplacement = function(evt) {
        this.coordoneesX = getMousePosition(canvas,evt).x;
        this.coordoneesY = getMousePosition(canvas,evt).y;
        
//        console.log("Move");
//        console.log(this.coordoneesX);
//        console.log(this.coordoneesY);
    }.bind(this);
    
    // Relâchement souris
    this.maFctGerantLeRelachement = function(evt) {
        this.coordoneesX = getMousePosition(canvas,evt).x;
        this.coordoneesY = getMousePosition(canvas,evt).y;
        
//        console.log("Release");
//        console.log(this.coordoneesX);
//        console.log(this.coordoneesY);
    }.bind(this);
    
	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
    canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.x - rect.left,
    y: evt.y - rect.top
  };
};



