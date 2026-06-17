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
    dateLabel: "Samedi 18 juillet 2026 — 08:30 à 13:30",
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
    programmeAvailable: true
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
// ==============================================================
  programme: [
    { time: "08:30 - 08:50", tag: "Accueil", tagClass: "tag-pause", title: "Accueil des participants", desc: "Enregistrement, remise des badges et café de bienvenue.", speaker: "" },
    { time: "08:50 - 08:55", tag: "Ouverture", tagClass: "tag-opening", title: "Introduction de la communauté MG-PUG", desc: "Présentation de la communauté PostgreSQL Madagascar.", speaker: "MG-PUG" },
    { time: "08:55 - 09:00", tag: "Ouverture", tagClass: "tag-opening", title: "Introduction Ingenosya", desc: "Mot de bienvenue et présentation du sponsor.", speaker: "Ingenosya" },
   
    { time: "09:00 - 09:25", tag: "Talk", tagClass: "tag-talk", title: "Administration et optimisation PostgreSQL", desc: "Bonnes pratiques d’administration, tuning et optimisation des performances.", speaker: "À définir" },
    { time: "09:25 - 09:30", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "09:30 - 09:55", tag: "Talk", tagClass: "tag-talk", title: "Sécurité des bases de données PostgreSQL", desc: "Gestion des droits, chiffrement, audits et bonnes pratiques de sécurisation.", speaker: "À définir" },
    { time: "09:55 - 10:00", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "10:00 - 10:25", tag: "Talk", tagClass: "tag-talk", title: "Sauvegarde et réplication PostgreSQL", desc: "Stratégies de backup, PITR, réplication logique et haute disponibilité.", speaker: "À définir" },
    { time: "10:25 - 10:30", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "10:30 - 10:45", tag: "Pause", tagClass: "tag-pause", title: "Pause café", desc: "Échanges entre participants.", speaker: "" },
   
    { time: "10:45 - 11:10", tag: "Talk", tagClass: "tag-talk", title: "PostgreSQL et le Cloud", desc: "Déploiement, gestion et optimisation de PostgreSQL dans les environnements cloud.", speaker: "À définir" },
    { time: "11:10 - 11:15", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "11:15 - 11:40", tag: "Talk", tagClass: "tag-talk", title: "PostgreSQL et la cartographie avec PostGIS", desc: "Cas d’usage géospatiaux et analyse de données géographiques.", speaker: "Baovola Marie Anna" },
    { time: "11:40 - 11:45", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "11:45 - 12:10", tag: "Talk", tagClass: "tag-talk", title: "Développement d’API avec PostgreSQL", desc: "Bonnes pratiques pour exposer et consommer des données PostgreSQL via des APIs modernes.", speaker: " " },
    { time: "12:10 - 12:15", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "12:15 - 12:25", tag: "Talk", tagClass: "tag-talk", title: "Retours d’expériences en entreprise & IA", desc: "Cas concrets d’usage PostgreSQL en entreprise et intégration avec l’intelligence artificielle.", speaker: " " },
    { time: "12:25 - 12:30", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "12:30 - 13:00", tag: "Networking", tagClass: "tag-networking", title: "Réseautage et collation", desc: "Échanges communautaires autour d’un déjeuner léger.", speaker: "Communauté PostgreSQL Madagascar" }
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
