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
    venueMapUrl: "https://www.openstreetmap.org/?#map=18/-18.941153/47.501305",

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
   
    { time: "09:00 - 09:30", tag: "Talk", tagClass: "tag-talk", title: "Scaling Health Systems with Postgres: Powering HMIS for Reliability and Insight", desc: "Head of Support Engineering, Afya Bridge PLC, Dar es Salaam, Tanzania", speaker: "Fabian Kimambo" },
   
    { time: "09:30 - 10:00", tag: "Talk", tagClass: "tag-talk", title: "PostgreSQL/PostGIS Behind a National Address System in Madagascar", desc: "GIS Developer, Antananarivo, Madagascar.", speaker: "Lova Andriarimalala" },
   
    { time: "10:00 - 10:30", tag: "Talk", tagClass: "tag-talk", title: "Just use Postgresql!", desc: "Expert PostgreSQL chez Dalibo France", speaker: "Damien Clochard" },
   
    { time: "10:30 - 11:00", tag: "Talk", tagClass: "tag-talk", title: "Performance Tricks in PostgreSQL You Might Not Have Seen Before", desc: "CEO CYBERTEC PostgreSQL International GmbH, basée à Vienne", speaker: "Hans-Jürgen Schönig" },
   
    { time: "11:00 - 11:30", tag: "Talk", tagClass: "tag-talk", title: "PostgreSQL au cœur des solutions IA souveraines d'entreprise : Cas de OWNAI®", desc: "co-fondateur NEADS S.A.R.L", speaker: "Dr. Nicaise Choungmo Fofack" },
   
    { time: "11:30 - 12:15", tag: "Q&R", tagClass: "tag-talk", title: "Questions & Réponses", desc: "", speaker: "" },
   
    { time: "12:15 - 13:00", tag: "Networking", tagClass: "tag-networking", title: "Réseautage et collation", desc: "Échanges communautaires autour d’un déjeuner léger.", speaker: "Communauté PostgreSQL Madagascar" }
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
      name: "Bodoarivola",
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

  // ============================================
  // SPONSORS & PARTENAIRES
  // Pour ajouter un logo : ajoutez une entrée dans "sponsorsPartners"
  // avec le bon "tier" (doit correspondre à une clé de "sponsorTiers").
  // Déposez l'image dans assets/images/sponsors/
  // Les tiers vides ne s'affichent pas automatiquement.
  // ============================================
  sponsorTiers: [
    { key: "platine", label: "Platine", icon: "💎" },
    { key: "gold", label: "Gold", icon: "🥇" },
    { key: "silver", label: "Silver", icon: "🥈" },
    { key: "bronze", label: "Bronze", icon: "🥉" },
    { key: "partenaire", label: "Partenaires", icon: "🤝" }
  ],

  sponsorsPartners: [
    { name: "AthenaEvent", tier: "gold", logo: "assets/images/sponsors/AthenaEvent.png", url: "https://athena-event.com/fr" },
    { name: "Cybertec", tier: "platine", logo: "assets/images/sponsors/CYBERTEC_Logo.webp", url: "https://www.cybertec-postgresql.com/en/" },
    { name: "DALIBO", tier: "bronze", logo: "assets/images/sponsors/Dalibo.png", url: "https://www.dalibo.com" },
    { name: "Nic MG", tier: "bronze", logo: "assets/images/sponsors/Logo NIC.MG.png", url: "https://nic.mg" },
    { name: "PgUS", tier: "platine", logo: "assets/images/sponsors/PgUS.jpeg", url: "https://postgresql.us/" },
    { name: "BlackPythonDevs", tier: "platine", logo: "assets/images/sponsors/blackDevpythons.jpeg", url: "https://blackpythondevs.com/" },
    { name: "Navicat", tier: "silver", logo: "assets/images/sponsors/Navicat.png", url: "https://www.navicat.com/en/products/navicat-for-postgresql" },
    { name: "Afya Bridge", tier: "bronze", logo: "assets/images/sponsors/afyaBridge.jpeg", url: "https://www.afyabridge.com/" }
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
