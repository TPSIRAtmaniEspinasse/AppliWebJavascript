
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
	ctx.linethickness = this.linethickness;
	ctx.colour = this.colour;
    
    ctx.rect(this.topleftcornerX, this.topleftcornerY, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
	ctx.linethickness = this.linethickness;
	ctx.colour = this.colour;

    ctx.moveTo(this.initX, this.initY);
    ctx.lineTo(this.finalX, this.finalY);
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

// Affiche la liste des formes
Drawing.prototype.updateShapeList = function(form){
    var myShapeList = document.getElementById('shapeList');
}