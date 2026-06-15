// data.js
// ============================================
// CONFIGURATION CENTRALE — PGConf Antananarivo 2026
// Pour mettre à jour le site, modifiez UNIQUEMENT ce fichier.
// ============================================

window.PGDAY_DATA = {
  event: {
    name: "Rencontre de la communauté PostgreSQL de Madagascar 2026",
    subtitle: "Conférence PostgreSQL à Madagascar",
    badge: "Édition en présentiel",
    // Facilement modifiable : changez la date ou les horaires ici
    dateLabel: "Samedi 18 juillet 2026 — 08:30 à 17:15",
    locationLabel: "Chez l'INGENOSYA Anosizato, Antananarivo, Madagascar",
    venueName: "Chez l'INGENOSYA",
    venueAddress: "4ème Etage de l'Immeuble Record Anosizato, Antananarivo 101, Madagascar",
    venueMapUrl: "https://www.openstreetmap.org/?mlat=-18.8792&mlon=47.5079",

    // Texte d'intro pour la section Programme (reste simple)
    programmeIntro: "Moments de partage, conférences techniques et networking autour de PostgreSQL.",

    // Texte d'intro pour la section À propos (avec lien HTML vers le code de conduite)
    aboutLead: "Cette conférence s'adresse à toutes les personnes utilisatrices du logiciel PostgreSQL : étudiants, administrateurs systèmes, DBA, développeurs, chefs de projet, décideurs, etc., dans le respect des valeurs énoncées dans le <a href='https://www.postgresql.org/about/policies/coc/fr/' target='_blank' rel='noopener noreferrer'>CODE DE CONDUITE</a>.",

    membersIntro: "Découvrez les organisateurs et le comité de programme bénévoles, dévoués à la communauté PostgreSQL Madagascar.",
    // Liens externes — s'ouvrent en popup/fenêtre centrée
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeuFilhzd_-a1UpjDPc7_QtRkxfVmDdR8NQUT398HLxL9E_tQ/viewform",
    sponsorUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfS5z5GETNEqVhZH3Sn28fzEEAyzr84zGEQn9JC-ky2dPlfqg/viewform",
    prospectusUrl: "assets/images/prospectus.pdf",

    // Assets images (placés dans assets/images/ selon l'arborescence demandée)
    qrCodePath: "assets/images/qr-code-lieu.jpeg",
    sponsorImage: "assets/images/become_a_sponsor.jpg",

    // Bascule facile du programme :
    // false = affiche "A VENIR / STAY TUNED" (mise à jour ultra simple)
    // true  = affiche le tableau 'programme' ci-dessous
    programmeAvailable: false
  },

  stats: [
    { value: "1", label: "Conférence" },
    { value: "6", label: "Sessions" },
    { value: "50+", label: "Participants" },
    { value: "100%", label: "PostgreSQL" }
  ],

  aboutCards: [
    {
      icon: "🐘",
      title: "PostgreSQL",
      text: "Le système de base de données open-source le plus avancé, robuste et reconnu au monde."
    },
    {
      icon: "🌍",
      title: "Communauté locale",
      text: "Créer des ponts entre développeurs, DBA, data engineers, étudiants et entreprises à Madagascar."
    },
    {
      icon: "🧭",
      title: "Evènement marquant",
      text: "Présentations sélectionnées par le comité de programme sous les valeurs de l'open-source."
    },
    {
      icon: "🤝",
      title: "Partage & networking",
      text: "Favoriser les retours d'expérience et les rencontres entre passionnés de technologies open-source."
    }
  ],

  // // ============================================================
  // PROGRAMME — COMMENTÉ CAR NON FINALISÉ
  // Décommentez ce bloc et mettez programmeAvailable: true
  // quand le programme sera confirmé.
  // ==============================================================
  // Si vous videz le tableau et mettez programmeAvailable: false,
  // le site affichera automatiquement "A VENIR / STAY TUNED".
  programme: [
    { time: "08:30 - 09:00", tag: "Accueil", tagClass: "tag-pause", title: "Enregistrement et café d'accueil", desc: "Accueil des participants, remise des badges et café de bienvenue.", speaker: "" },
    { time: "09:00 - 09:15", tag: "Ouverture", tagClass: "tag-opening", title: "Mots de bienvenue", desc: "Introduction du PGDay Antananarivo 2026 et présentation de la communauté.", speaker: "Comité d'organisation" },
    { time: "09:15 - 10:00", tag: "Keynote", tagClass: "tag-keynote", title: "PostgreSQL : le choix open-source pour les données critiques", desc: "Pourquoi PostgreSQL est un pilier fiable pour les applications modernes.", speaker: "À définir" },
    { time: "10:00 - 10:30", tag: "Talk", tagClass: "tag-talk", title: "PostGIS au service de la gouvernance géospatiale", desc: "Cas pratiques de gestion et analyse de données géographiques avec PostGIS.", speaker: "Baovola Marie Anna" },
    { time: "10:30 - 10:45", tag: "Pause", tagClass: "tag-pause", title: "Pause café", desc: "Moment d'échange entre participants et partenaires.", speaker: "" },
    { time: "10:45 - 11:30", tag: "Talk", tagClass: "tag-talk", title: "Développement géomatique avec PostgreSQL", desc: "Retour d'expérience sur les usages de PostgreSQL dans des projets géospatiaux.", speaker: "Dominique RAKOTONIRINA" },
    { time: "11:30 - 12:15", tag: "Talk", tagClass: "tag-talk", title: "Construire des interfaces modernes autour des données PostgreSQL", desc: "Bonnes pratiques frontend pour visualiser et valoriser des données PostgreSQL.", speaker: "RAVAKINIAINA Tokifanantenana" },
    { time: "12:15 - 13:30", tag: "Pause", tagClass: "tag-pause", title: "Pause déjeuner", desc: "Déjeuner et networking.", speaker: "" },
    { time: "13:30 - 14:30", tag: "Workshop", tagClass: "tag-workshop", title: "Atelier pratique PostgreSQL", desc: "Session guidée : requêtes, indexation, extensions et bonnes pratiques.", speaker: "À définir" },
    { time: "14:30 - 15:15", tag: "Talk", tagClass: "tag-talk", title: "Performance, index et optimisation", desc: "Comprendre les plans d'exécution et optimiser les requêtes.", speaker: "À définir" },
    { time: "15:15 - 15:30", tag: "Pause", tagClass: "tag-pause", title: "Pause café", desc: "Échanges informels et networking.", speaker: "" },
    { time: "15:30 - 16:15", tag: "Talk", tagClass: "tag-talk", title: "PostgreSQL en production", desc: "Sauvegarde, supervision, maintenance et bonnes pratiques.", speaker: "À définir" },
    { time: "16:15 - 17:00", tag: "Networking", tagClass: "tag-networking", title: "Échanges communautaires", desc: "Discussion ouverte sur les besoins et perspectives de la communauté.", speaker: "Communauté PostgreSQL Madagascar" },
    { time: "17:00 - 17:15", tag: "Clôture", tagClass: "tag-closing", title: "Clôture du PGDay Antananarivo 2026", desc: "Synthèse de la journée, remerciements et prochaines étapes.", speaker: "Comité d'organisation" }
  ],


  // Membres — ajoutez simplement la propriété 'photo' avec le chemin vers l'image.
  // Si l'image est absente, un avatar avec les initiales s'affiche automatiquement.
  membres: [
    {
      name: "Baovola Marie Anna",
      role: "Information System and Data Geospatial Documentation Officer",
      institution: "FTM",
      category: "Organisateur / Organizer",
      photo: "assets/images/photos-organisateurs/baovola.jpg"
    },
    {
      name: "Dominique RAKOTONIRINA",
      role: "Dev géomaticien",
      institution: "Copilotas",
      category: "Organisateur / Organizer",
      photo: "assets/images/photos-organisateurs/dominique.png"
    },
    {
      name: "RAVAKINIAINA Tokifanantenana",
      role: "Front End Dev",
      institution: "TWEN IT",
      category: "Organisateur / Organizer",
      photo: "assets/images/photos-organisateurs/tokifanantenana.jpg"
    },
    {
      name: "Bodoharivola",
      role: "Computer Scientist",
      institution: "MATSF",
      category: "Comité de sélection / Program Committee",
      photo: "assets/images/photos-organisateurs/bodo.jpg"
    },
    {
      name: "Jerson Raheriniaina",
      role: "Dev Front end - Expert integration landing page",
      institution: "CFIM",
      category: "Comité de sélection / Program Committee",
      placeholder: true,
      photo: "assets/images/photos-organisateurs/jerson.jpg"
    },
    {
      name: "Vahatra",
      role: "Data Analyst",
      institution: "CFIM",
      category: "Comité de sélection / Program Committee",
      placeholder: true,
      photo: "assets/images/photos-organisateurs/vahatra.jpg"
    },
    {
      name: "Toky Fandresena MANOVOSOA",
      role: "Computer Scientist",
      institution: "MEN",
      category: "Comité de sélection / Program Committee",
      placeholder: true,
      photo: "assets/images/photos-organisateurs/toky.jpg"
    },
    {
      name: "Mexin ANDRIANASOLO",
      role: "Admin réseau",
      institution: "CISDT",
      category: "Comité de sélection / Program Committee",
      placeholder: true,
      photo: "assets/images/photos-organisateurs/mexin.jpg"
    }
  ],

  venueFeatures: [
    "Accès facile depuis le centre d'Antananarivo",
    "Espace adapté aux conférences et ateliers",
    "Networking et échanges communautaires"
  ],

  ticketPerks: [
    "Accès à toutes les sessions et keynotes",
    "Pauses café et déjeuner inclus",
    "Supports de présentation (slides)",
    "Session networking dédiée"
  ],

  codeOfConduct: {
    title: "Code de bonne conduite",
    text: "La PGConf - Conférence PostgreSQL Antananarivo s'engage à fournir une expérience de conférence sûre, inclusive et respectueuse pour tous les participants, quelle que soit leur identité, leur origine, leur niveau d'expérience ou leurs croyances.",
    points: [
      "Traiter tout le monde avec respect, bienveillance et courtoisie",
      "Aucune tolérance pour le harcèlement, la discrimination ou les comportements intimidants",
      "Respecter les opinions, les différences et les choix technologiques d'autrui",
      "Signaler immédiatement tout comportement inapproprié aux organisateurs sur place"
    ],
    contact: "postgresusermg@gmail.com"
  }
};
