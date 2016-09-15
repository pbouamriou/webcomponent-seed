/* jslint browser:true */
/* global document HTMLElement */

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
    let template = <HTMLTemplateElement>documentOwner.querySelector('#base');
    let clone  = <Element>(documentOwner.importNode(template.content, true));
    let button = <HTMLElement>clone.querySelector('#bouton');
    let resultat = <HTMLElement>clone.querySelector('#resultat');
    button.addEventListener('click', () => this.buttonAction(resultat), false);
    button.innerHTML = this.libelle;

    this.appendChild(clone)
  }

}


(<any>document).registerElement('test-component', TestComponent);