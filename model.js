
// Dessin    
function Drawing() {
    // Array - forms list 
    this.forms = new Array();
    
    this.getForms = function() {
        return this.forms;
    }.bind(this);
    
    // Add a form in the array 
    this.addForm = function(form) {
        this.forms.push(form);
    }.bind(this);
    
    // Remove a form using the index
    this.removeForm = function(index) {
        this.forms.splice(index,1);
    }.bind(this);
    
};
    
// Forme
function Form(epaisseur,couleur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

// Rectangle    
function Rectangle(topleftcornerX, topleftcornerY, width, height, epaisseur, couleur) {
    Form.call(this, epaisseur, couleur);

    this.topleftcornerX = topleftcornerX;
    this.topleftcornerY = topleftcornerY;
    this.width = width;
    this.height = height;
};

// Line
function Line(initX, initY, finalX, finalY, epaisseur, couleur) {
    Form.call(this,epaisseur, couleur);
    
    this.initX = initX;
    this.initY = initY;
    this.finalX = finalX;
    this.finalY = finalY;
};

// Square    
function Square(topleftcornerX, topleftcornerY, width, height, epaisseur, couleur) {
    Form.call(this, epaisseur, couleur);

    this.topleftcornerX = topleftcornerX;
    this.topleftcornerY = topleftcornerY;
    this.width = height;
    this.height = height;
};