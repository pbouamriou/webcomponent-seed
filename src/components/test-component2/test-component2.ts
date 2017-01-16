/* jslint browser:true */
/* global document HTMLElement */

declare function require(filename:string): string;
declare var module: any;

let html = require("./test-component2.html");
require("./test-component2.scss");

export class TestComponent2 extends HTMLElement {
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


(<any>document).registerElement('test-component2', TestComponent2);