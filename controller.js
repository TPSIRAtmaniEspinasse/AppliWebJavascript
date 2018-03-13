
var editingMode = { rect: 0, line: 1, square: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 1;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    
    // Start
    this.onInteractionStart = function(DnD) {
        
        var butRect = document.getElementById('butRect');
		var butLine = document.getElementById('butLine');
		var butSquare = document.getElementById('butSquare');
		var spinnerWidth = document.getElementById('spinnerWidth');
		var colour = document.getElementById('colour');
        
        this.currLineWidth = spinnerWidth.value;
        this.currColour = colour.value;
    		
        // Check whether it's a rectangle or a line 
		if (butRect.checked) {
			this.currEditingMode = editingMode.rect;
		} else if (butLine.checked) {
			this.currEditingMode = editingMode.line;
		} else if (butSquare.checked) {
			this.currEditingMode = editingMode.square;
		}

		// Creation of the selected form
		switch (this.currEditingMode) {
            
            // Rectangle creation
            case editingMode.rect: {
                var width = DnD.finalX - DnD.initX;
                var height =  DnD.finalY - DnD.initY;
                this.currentShape = new Rectangle(DnD.initX, DnD.initY,width, height, this.currLineWidth, this.currColour);
                break;
            }
                		
			// Line creation
            case editingMode.line: {
                this.currentShape = new Line(DnD.initX, DnD.initY,DnD.finalX, DnD.finalY, this.currLineWidth, this.currColour);
                break;
            }
                
            // Square creation
            case editingMode.rect: {
                var width = DnD.finalX - DnD.initX;
                var height =  DnD.finalY - DnD.initY;
                this.currentShape = new Square(DnD.initX, DnD.initY,width, height, this.currLineWidth, this.currColour);
                break;
            }
		}
	}.bind(this);
    
    // Update
	this.onInteractionUpdate = function(DnD) {

		if (butRect.checked) {
			// Rectangle creation
			var width = DnD.finalX - DnD.initX;
			var height = DnD.finalY - DnD.initY;
			this.currentShape = new Rectangle(DnD.initX, DnD.initY, width, height, this.currLineWidth, this.currColour);
		} else if (butLine.checked) {
			// Line creation
			this.currentShape = new Line(DnD.initX, DnD.initY, DnD.finalX, DnD.finalY, this.currLineWidth, this.currColour);
		} else if (butSquare.checked) {
			// Rectangle creation
			var width = DnD.finalX - DnD.initX;
			var height = DnD.finalY - DnD.initY;
			this.currentShape = new Square(DnD.initX, DnD.initY, width, height, this.currLineWidth, this.currColour);
		}

        ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);

	}.bind(this);

    // End
	this.onInteractionEnd = function(DnD) {
        
		if (butRect.checked) {
			// Rectangle creation
			var width = DnD.finalX - DnD.initX;
			var height = DnD.finalY - DnD.initY;
			this.currentShape = new Rectangle(DnD.initX, DnD.initY, width, height, this.currLineWidth, this.currColour);
		} else if (butLine.checked) {
			// Line creation
			this.currentShape = new Line(DnD.initX, DnD.initY, DnD.finalX, DnD.finalY, this.currLineWidth, this.currColour);
		}else if (butSquare.checked) {
			// Rectangle creation
			var width = DnD.finalX - DnD.initX;
			var height = DnD.finalY - DnD.initY;
			this.currentShape = new Square(DnD.initX, DnD.initY, width, height, this.currLineWidth, this.currColour);
		}

        ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.addForm(this.currentShape);
		drawing.paint(ctx, canvas);
		drawing.updateShapeList(this.currentShape);
		this.currentShape = null;

	}.bind(this);
};

