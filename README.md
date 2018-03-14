# TP 5 de SIR

TP Web : Javascript et HTML5

Binôme : Dimas ESPINASSE - Inès ATMANI

## interaction.js
Dans ce fichier, on a implémenté une interaction homme-machine, le Drag-n-Drop (glisser-déposer, DnD) avec 4 attributs initialisés à 0.
```
// Coordonnées de la position initiale du DnD
    this.initX = 0;
    this.initY = 0;
// Coordonnées de la position finale du DnD
    this.finalX = 0;
    this.finalY = 0;
```
Ensuite, on a déclaré 3 fonctions à cette classes correspondant aux 3 types d'événements à gérer :
```
- pression
- déplacement
- relâchement
```
## controller.js
Dans ce fichier, on a implémenté les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd. Il est lié à interaction.js. L'utilisateur peut ainsi manipuler l'application afin de réaliser ces actions.
## model.js
Dans notre modèle nous avons choisi de permettre à l'utilisateur de représenter un dessin (classe Drawing) se composant de formes :
```
- un  rectangle (classe Rectangle)
- un carré (classe Square)
- une ligne (classe Line)
```
Comme défini dans le sujet, une forme possède une couleur et une épaisseur de trait. Un rectangle possède des coordonnées de son point haut-gauche, une largeur et une hauteur. Une ligne possède les coordonnées de ses deux points.

## view.js
Ce fichier permet une représentation graphique de notre modèle en affichant les formes créées par l'utilisateur. Nous avons décidé d'ajouter un tableau permettant de visualiser les formes créées ainsi que l'option de supprimer la forme voulue.

## Problème graphique
Si l’on sélectionne un rectangle ou un carré et que l’on commence à dessiner, ça fait un bug graphique en affichant plusieurs bords et en les superposant. Ce bug n'apparait que lorsqu'on commence à dessiner une de ces deux formes mais si on commence par une ligne et ensuite un rectangle ou un carré, le bug n'apparaîtra pas.