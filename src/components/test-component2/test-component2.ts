/* jslint browser:true */
/* global document HTMLElement */

declare function require(filename:string): string;
declare var module: any;

let html = require("./test-component2.html");
require("./test-component2.scss");

export class TestComponent2 extends HTMLElement {
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

  buttonAction(): void {
    this.changeMessage(this.message);
    setTimeout(() => this.changeMessage(""), 2000);
  }

  changeMessage(text: string):void {
    let resultat = <HTMLElement>this.querySelector('.part2 .resultat');
    resultat.innerHTML = "<b>" + text + "</b>";
  }

  connectedCallback() : void {
    this.innerHTML = html;
    let button = <HTMLElement>this.querySelector('.part2 .bouton');
    button.addEventListener('click', () => this.buttonAction(), false);
    button.innerHTML = this.libelle;
  }

}

customElements.define('test-component2', TestComponent2)