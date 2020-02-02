/* jslint browser:true */
/* global document HTMLElement customElements */

declare function require(filename:string): string;
declare var module: any;

let html = require("./test-component.html");
require("./test-component.scss");

export class TestComponent extends HTMLElement {
  constructor()
  {
    super();
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

  connectedCallback() : void {
    this.innerHTML = html;
    let button = <HTMLElement>this.querySelector('.bouton');
    let resultat = <HTMLElement>this.querySelector('.resultat');
    button.addEventListener('click', () => this.buttonAction(resultat), false);
    button.innerHTML = this.libelle;
  }

}

customElements.define('test-component', TestComponent)