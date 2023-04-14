----------------------------
## AGULAR CLASSROOM - 002 ##
## DIRECTIVES IN ANGULAR  ##
----------------------------

In Angular, directives are used to extend the functionality of HTML by attaching custom behaviors to elements and attributes. There are three types of directives in Angular:

Component Directives: 
=====================
Component Directives are used to create reusable UI components that can be used throughout an application. They are defined using the @Component decorator.

Attribute Directives: 
=====================

Attribute Directives are used to change the appearance or behavior of an element. They are defined using the @Directive decorator.

Structural Directives: 
======================

Structural Directives are used to add or remove elements from the DOM based on certain conditions. They are defined using the * prefix, for example *ngIf, *ngFor, etc.
-------------------------------
TYPES OF STRUCTURAL DIRECTIVES:
-------------------------------
1. *ngIf:
ngIf is used to display or hide the DOM Element based on the expression value assigned to it. The expression value may be either true or false.
Syntax:
<div *ngIf="boolean"> </div>

+ *ngFor:
*ngFor is used to loop through the dynamic lists in the DOM. Simply, it is used to build data presentation lists and tables in HTML DOM.
Syntax:
<div *ngFor="let item of item-list">  </div>

+ *ngSwitch :
ngSwitch is used to choose between multiple case statements defined by the expressions inside the *ngSwitchCase and display on the DOM Element according to that. If no expression is matched, the default case DOM Element is displayed. 
Syntax:
<div [ngSwitch]="expression">
  <div *ngSwitchCase="expression_1"></div>  
  <div *ngSwitchCase="expression_2"></div>  
  <div *ngSwitchDefault></div>  
</div>

Directives can be used in templates by adding them to an element or attribute. For example, the ngIf directive is used to conditionally show or hide an element based on a boolean expression:

EXAMPLE CODE
************
<div *ngIf="showMessage">
  This message is shown if showMessage is true.
</div>

Directives can also accept inputs, which can be used to pass data from the component to the directive. For example, the ngStyle directive accepts an object of CSS styles as an input:

EXAMPLE CODE
************
<div [ngStyle]="{'color': textColor, 'background-color': bgColor}">
  This text has custom styles.
</div>

Overall, directives provide a powerful way to extend the functionality of HTML and create reusable UI components in Angular.



