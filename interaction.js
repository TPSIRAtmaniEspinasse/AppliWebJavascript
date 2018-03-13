
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    
    // Coordonnées de la position initiale du DnD
    this.initX = 0;
    this.initY = 0;
    // Coordonnées de la position finale du DnD
    this.finalX = 0;
    this.finalY = 0;
    
    this.mouseDown=false;


	// 3 fonctions gérant les événements
    // Pression souris
    this.maFctGerantLaPression = function(evt) {
        if (this.mouseDown == false) {
            this.mouseDown = true;
            this.initX = getMousePosition(canvas,evt).x;
            this.initY = getMousePosition(canvas,evt).y;
            pencil.onInteractionStart(this);

        console.log("Press");
        console.log(this.initX);
        console.log(this.initY);
        }
    }.bind(this);
    
    // Déplacement souris
    this.maFctGerantLeDeplacement = function(evt) {
        if (this.mouseDown == true) {
            this.finalX = getMousePosition(canvas,evt).x;
            this.finalY = getMousePosition(canvas,evt).y;
            pencil.onInteractionUpdate(this);
        console.log("Move");
        console.log(this.initX);
        console.log(this.initY);
        }

    }.bind(this);
    
    // Relâchement souris
    this.maFctGerantLeRelachement = function(evt) {
        if (this.mouseDown == true){
			this.mouseDown = false;
            pencil.onInteractionEnd(this);

            this.initX = 0;
            this.initY = 0;
            this.finalX = 0;
            this.finalY = 0;
        
        console.log("Release");
        console.log(this.initX);
        console.log(this.initY);
        }
    }.bind(this);
    
	// Associer les fonctions précédentes aux évènements du canvas.
	var Canvas = document.getElementById("myCanvas");
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



