/* jslint browser:true */
/* global document HTMLElement */

declare var require: any;

let html = require("./test-component.html");

let currentScript = (<any>document)._currentScript || (<any>document).currentScript;
let documentOwner: Document = currentScript.ownerDocument;
declare var module: any;

class TestComponent extends HTMLElement {
  constructor(libelle:string, message:string)
  {
    super();
    this.libelle = libelle;
    this.message = message;

    if(module.hot) {
      module.hot.accept()
      module.hot.dispose( () => {
        let resultat = <HTMLElement>(<Element>this.parentNode).querySelector('#resultat');
        resultat.innerHTML = "";
      })

    }
  }

  set libelle(libelle: string) {
    this.setAttribute("libelle", libelle);
  }

  set message(message: string) {
    this.setAttribute("message", message);
  }

  get libelle() : string {
    return this.getAttribute("libelle");
  }

  get message() : string {
    return this.getAttribute("message");
  }

  buttonAction(resultat : HTMLElement): void {
    resultat.innerHTML = "<b>" + this.message + "</b>";
  }

  createdCallback() : void {
    this.innerHTML = html;
    let button = <HTMLElement>this.querySelector('#bouton');
    let resultat = <HTMLElement>this.querySelector('#resultat');
    button.addEventListener('click', () => this.buttonAction(resultat), false);
    button.innerHTML = this.libelle;
  }

}


(<any>document).registerElement('test-component', TestComponent);