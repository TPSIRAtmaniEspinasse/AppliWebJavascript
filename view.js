
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
	
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    
    ctx.rect(this.topleftcornerX, this.topleftcornerY, this.width, this.height);
    ctx.stroke();
};

Square.prototype.paint = function(ctx) {
    ctx.beginPath();
	
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    
    ctx.rect(this.topleftcornerX, this.topleftcornerY, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
	
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;

    ctx.moveTo(this.initX, this.initY);
    ctx.lineTo(this.finalX, this.finalY);
    ctx.stroke();
};

// Affiche la liste des formes
Drawing.prototype.updateShapeList = function(form){
	
	var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
	var colour= document.getElementById('colour');
	var spinnerWidth= document.getElementById('spinnerWidth');
	var x = tableRef.childNodes.length;
	var newRow   = tableRef.insertRow(tableRef.rows.length);
	var newCell1  = newRow.insertCell(0);
	var newCell2  = newRow.insertCell(1);
	var newCell3  = newRow.insertCell(2);
	var newCell4  = newRow.insertCell(3);

	if(form instanceof Rectangle){
        
		var newText1  = document.createTextNode('Rectangle');
    } else if (form instanceof Line){
        
		var newText1  = document.createTextNode('Ligne');
		
	} else if (form instanceof Square){
        
		var newText1  = document.createTextNode('Square');
		
	}
	var newText3  = document.createTextNode(spinnerWidth.value);
	var newText2  = document.createTextNode(colour.value);
    var newText4  = document.createTextNode(' Supprimer');


    var newButton = document.createElement('button');
    newButton.id = x;
    newButton.setAttribute('class','btn btn-default glyphicon glyphicon-remove-sign');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('onClick', 'drawing.removeShapeFromList(id)');
    var newSpan = document.createElement('span');

    
	newCell1.appendChild(newText1);
	newCell2.appendChild(newText2);
	newCell3.appendChild(newText3);
	newCell4.appendChild(newButton);
    newCell4.appendChild(newText4);

    
};

// Supprime la forme correspondante
Drawing.prototype.removeShapeFromList = function(index) {
    
    this.removeForm(index);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawing.paint(ctx, canvas);
    var shapeList = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    while( shapeList.firstChild) {  
        shapeList.removeChild( shapeList.firstChild);
    }
    for(var x= 0, nb=drawing.forms.length;x<nb;x++){  
        drawing.updateShapeList(drawing.forms[x]);
    }
}

