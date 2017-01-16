# Objectif du projet

L'objectif de ce projet est de fournir un squelette minimal pour débuter un projet utilisant :
   + Les webcomponents (natif ou non)
   + Le langage TypeScript
   + Le langage SASS
   + Le gestionnaire de bundle webpack

Il est possible de produire pour le développement (dans ce cas, le serveur webpack compile à la volée), ou pour la production (dans ce cas, le bundle généré est optimisé en taille).

A noter que les templates "html" utilisés par les composants sont aussi intégré au bundle.

# Utilisation du projet

**Téléchargement du dépôt** :

```shell
git clone https://github.com/pbouamriou/webcomponent-seed.git
```

**Installation des dépendances** :

```shell
npm install
```

**Démarrage du serveur webpack qui prend en compte les modifications à chaud (environement de développement)** :

```shell
npm start
```

**Génération du bundle** :

```shell
npm build
```

ou en version de production :

```shell
PROD_ENV=1 npm build
```
