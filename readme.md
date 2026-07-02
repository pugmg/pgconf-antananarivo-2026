# PGConf Antananarivo 2026

Site officiel de la rencontre de la communauté PostgreSQL de Madagascar.

**Date :** Samedi 18 juillet 2026  
**Lieu :** Chez l'INGENOSYA, Anosizato, Antananarivo

🔗 **Site en ligne :** [https://pugmg.github.io/pgconf-antananarivo-2026/](https://pugmg.github.io/pgconf-antananarivo-2026/)

---

## À propos

Ce site est une page statique (HTML / CSS / JavaScript vanilla) présentant la conférence PGConf Antananarivo 2026. Il est conçu pour être hébergé gratuitement sur **GitHub Pages**, sans backend ni base de données.

---

## Stack technique

- **HTML5** sémantique
- **CSS3** avec variables et animations (`IntersectionObserver`)
- **JavaScript vanilla** (pas de framework)
- **Hébergement :** GitHub Pages

---

## Structure du projet
/
├── index.html              # Page principale
├── data.js                 # Configuration centrale (programme, membres, liens)
├── README.md
└── assets/
├── images/
│   ├── qr-code-lieu.jpeg
│   ├── become_a_sponsor.jpg
│   ├── prospectus.pdf
│   └── photos-organisateurs/
│       ├── baovola.jpg
│       ├── dominique.jpg
│       └── ...
plain

---

## Modifier le contenu

Toutes les données textuelles (programme, membres, liens Google Forms, etc.) se trouvent dans le fichier **`data.js`**.  
Pour mettre à jour le site, éditez uniquement ce fichier — aucune modification du HTML n'est nécessaire.

### Activer le programme détaillé

Le programme est actuellement masqué (mode *"A VENIR / STAY TUNED"*). Pour l'afficher :

1. Ouvrez `data.js`
2. Décommentez le bloc `programme: [...]`
3. Passez `programmeAvailable: true`

---

## Déploiement

Le site est automatiquement déployé via **GitHub Pages** depuis la branche `main` (dossier racine).

### Activer GitHub Pages
1. Repo → **Settings** → **Pages**
2. Source : *Deploy from a branch*
3. Branch : `main` / `root`
4. Enregistrer

---

## Code de conduite

Cet événement adhère au [Code de Conduite de la communauté PostgreSQL](https://www.postgresql.org/about/policies/coc/fr/).

---

© 2026 — Communauté PostgreSQL Madagascar
