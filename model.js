
// Dessin    
function Drawing() {
    // Array - forms list 
    this.forms = new Array();
    
    // Add a form in the array 
    this.addForm = function(form) {
        this.forms.push(form);
    };
    
    // Remove a form using the index
    this.removeForm = function(index) {
        this.forms.splice(index,1);
    };
    
    this.getForms = function(){
    	return forms;
    }
};
    
// Forme
function Form(colour, linethickness) {
    this.colour = colour;
    this.linethickness = linethickness;
};

// Rectangle    
function Rectangle(topleftcornerX, topleftcornerY, width, height, colour, linethickness) {
    Form.call(this, colour, linethickness);

    this.topleftcornerX = topleftcornerX;
    this.topleftcornerY = topleftcornerY;
    this.width = width;
    this.height = height;
};

// Line
function Line(coordX1, coordY1, coordX2, coordY2, colour, linethickness) {
    Form.call(this, colour, linethickness);
    
    this.coordX1 = coordX1;
    this.coordY1 = coordY1;
    this.coordX2 = coordX2;
    this.coordY2 = coordY2;
};
