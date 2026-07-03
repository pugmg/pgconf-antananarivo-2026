# Section Sponsors & Partenaires — Changelog & guide de mise à jour

## Ce qui a changé

### Nouvelle section
Une section **"Nos Sponsors & Partenaires"** a été ajoutée sur la page d'accueil, au-dessus du bloc "Devenir Sponsor" existant (qui reste inchangé).

### Design
- Style **éditorial et sobre** : chaque tier (Platine / Gold / Bronze / Partenaires) est présenté comme une ligne de titre — *"GOLD ————"* — suivie des logos, sans carte, pilule ni emoji.
- **Hiérarchie par la taille** : les logos Platine sont les plus grands, puis Gold, Bronze, Partenaires — pas besoin de badge coloré pour indiquer l'importance du sponsor.
- Les logos **Partenaires** s'affichent en niveaux de gris et reprennent leur couleur au survol (convention classique, discret).
- Un tier sans aucun sponsor **ne s'affiche pas** automatiquement (pas de section vide).

### Logos
- **AthenaEvent** et **Afya Bridge** avaient un fond plein (bleu marine / noir) intégré à l'image. Ils ont été **détourés en PNG transparent** pour s'intégrer proprement au fond du site.
- **DALIBO** avait déjà un fond transparent, aucune retouche nécessaire.

### Fichiers modifiés
| Fichier | Rôle |
|---|---|
| `index.html` | Structure HTML, CSS de la section, script de rendu dynamique |
| `data.js` | Données des sponsors (nom, tier, logo, lien) — **le seul fichier à toucher pour une mise à jour courante** |
| `assets/images/sponsors/AthenaEvent.png` | Logo Gold, détouré |
| `assets/images/sponsors/afyaBridge.png` | Logo Bronze, détouré |
| `assets/images/sponsors/dalibo.png` | Logo Bronze |

---

## Comment mettre à jour

### Ajouter, modifier ou retirer un sponsor
Tout se passe dans `data.js`, dans le tableau `sponsorsPartners` :

```js
sponsorsPartners: [
  { name: "AthenaEvent", tier: "gold",   logo: "assets/images/sponsors/AthenaEvent.png", url: "https://athena-event.com/fr" },
  { name: "DALIBO",      tier: "bronze", logo: "assets/images/sponsors/dalibo.png",       url: "https://www.dalibo.com" },
  { name: "Afya Bridge", tier: "bronze", logo: "assets/images/sponsors/afyaBridge.png",   url: "https://www.afyabridge.com/" }
]
```

**Pour ajouter un sponsor :**
1. Déposez son logo dans `assets/images/sponsors/` (voir conseils logo ci-dessous).
2. Ajoutez une ligne dans `sponsorsPartners` avec :
   - `name` — nom affiché en repli si l'image ne charge pas
   - `tier` — une des clés définies dans `sponsorTiers` : `"platine"`, `"gold"`, `"bronze"` ou `"partenaire"`
   - `logo` — chemin vers le fichier image
   - `url` — lien du site du sponsor (laissez `""` si aucun lien souhaité, le logo ne sera alors pas cliquable)

**Pour retirer un sponsor :** supprimez simplement sa ligne.

**Pour changer un tier ou un lien :** modifiez directement les valeurs `tier` ou `url` de la ligne concernée.

### Ajouter un nouveau tier (ex: Platine déjà prêt, Argent à créer)
Les tiers eux-mêmes sont définis juste au-dessus, dans `sponsorTiers` :

```js
sponsorTiers: [
  { key: "platine", label: "Platine" },
  { key: "gold", label: "Gold" },
  { key: "bronze", label: "Bronze" },
  { key: "partenaire", label: "Partenaires" }
]
```

Pour créer un nouveau tier (ex. "Argent"), ajoutez une entrée ici avec une `key` unique, puis utilisez cette même `key` dans les entrées `sponsorsPartners` correspondantes. L'ordre du tableau détermine l'ordre d'affichage sur la page.

### Conseils pour les logos
- **Format recommandé : PNG avec fond transparent.** C'est ce qui garantit un rendu propre quel que soit le fond de la page.
- Si un sponsor ne fournit qu'un logo avec fond plein (couleur unie), demandez si possible une version détourée — sinon, il faudra refaire un détourage manuel comme pour AthenaEvent et Afya Bridge.
- Pas besoin de redimensionner précisément : les images sont affichées en `height` fixe par tier et s'adaptent automatiquement en largeur (`object-fit: contain`).

---

## Ce qui n'a pas changé
- La carte "Devenir Sponsor" (bouton, texte, image) reste identique et continue de fonctionner comme avant.
- Aucun autre fichier ou section du site n'a été modifié.
