// ═══════════════════════════════════════════════════════
//  data.js — SEUL FICHIER À MODIFIER
//  Pour ajouter un projet : ajouter un objet dans PROJECTS
//  Pour ajouter une cert  : ajouter un objet dans CERTIFICATIONS
// ═══════════════════════════════════════════════════════

const PORTFOLIO = {

  // ── PROFIL ────────────────────────────────────────────
  profile: {
    name:     "Nombré Alidou Salim",
    title:    "Technicien Systèmes & Réseaux",
    subtitle: "Sécurité · Infrastructure · Automatisation",
    location: "Fès, Maroc",
    bio:      "En dernière année de formation TSR, je conçois des infrastructures réseau robustes et des systèmes de sécurité automatisés. Mon approche : diagnostiquer vite, déployer proprement, automatiser intelligemment.",
    email:    "salimnombre4@gmail.com",
    linkedin: "https://linkedin.com/in/salim-nombre",
    github:   "https://github.com/Salim698",
    stats: [
      { value: "10+", label: "Projets réalisés" },
      { value: "13",  label: "Certifications"   },
      { value: "100+", label: "Postes déployés" },
      { value: "2",   label: "Workflows n8n"    }
    ]
  },

  // ── PROJETS ───────────────────────────────────────────
  // category : "reseau" | "securite" | "systeme" | "automatisation"
  // contact  : true = bouton "Demander une démo" affiché
  // slug     : nom du dossier dans /projects/ (laisser "" si pas encore créé)
  projects: [

    // ── AUTOMATISATION ────────────────────────────────
    {
      id:          "soc-analyzer",
      title:       "SOC IP Analyzer",
      category:    "automatisation",
      tags:        ["n8n", "IPQualityScore", "GreyNoise", "ip-api", "Telegram", "Docker"],
      description: "Analyse automatique d'IP suspectes en temps réel. Score de risque combiné depuis 3 sources threat intel. Alertes Telegram et Email en 2 secondes.",
      results:     ["Score CRITICAL / HIGH / MEDIUM / LOW automatique", "Flags : VPN, TOR, BOT, Proxy, Scanner détectés", "Alertes Telegram + Email formatées"],
      slug:        "soc-analyzer",
      contact:     true
    },
    {
      id:          "network-scanner",
      title:       "Network Vulnerability Scanner",
      category:    "automatisation",
      tags:        ["n8n", "Nmap", "NVD/CVE", "wkhtmltopdf", "Docker", "Python"],
      description: "Scanner de vulnérabilités réseau complet. Nmap + enrichissement CVE via API NVD NIST. Génère un rapport PDF professionnel envoyé par Telegram et Email.",
      results:     ["Scan de ports + services + versions automatique", "Enrichissement CVE avec scores CVSS 3.1", "Rapport PDF protégé par mot de passe"],
      slug:        "network-scanner",
      contact:     true
    },

    // ── RÉSEAU ────────────────────────────────────────
    {
      id:          "ospf-multiarea",
      title:       "Réseau Entreprise — OSPF Multi-area",
      category:    "reseau",
      tags:        ["OSPF", "VLAN", "Cisco", "Multi-area", "Trunk", "Inter-VLAN"],
      description: "Infrastructure réseau multi-sites pour entreprise multi-départements. Routage dynamique OSPF en multi-area, segmentation VLAN et adressage hiérarchique.",
      results:     ["Isolation complète du trafic inter-départemental", "Convergence réseau automatique en cas de panne", "Infrastructure évolutive documentée"],
      slug:        "ospf-multiarea",
      contact:     false
    },
    {
      id:          "vtp-hsrp",
      title:       "Infrastructure CCNA — VTP & HSRP",
      category:    "reseau",
      tags:        ["VTP", "HSRP", "Redondance", "VLAN", "Trunk", "CCNA"],
      description: "Infrastructure redondante avec gestion centralisée des VLANs via VTP et haute disponibilité des passerelles via HSRP.",
      results:     ["Basculement automatique de passerelle en cas de panne", "Propagation VLANs sans reconfiguration manuelle", "Conforme standards CCNA"],
      slug:        "vtp-hsrp",
      contact:     false
    },
    {
      id:          "nat-lacp-dmz",
      title:       "Connectivité Internet — NAT + LACP + DMZ",
      category:    "reseau",
      tags:        ["NAT", "LACP", "EtherChannel", "OSPF", "DMZ", "IoT"],
      description: "Infrastructure d'entreprise avec agrégation de liens LACP, routage OSPF multi-sites, NAT dynamique vers FAI et zone DMZ pour serveur public.",
      results:     ["Bande passante augmentée par agrégation LACP", "Isolation réseau IoT", "Serveur DMZ public sans exposer le réseau interne"],
      slug:        "nat-lacp-dmz",
      contact:     false
    },
    {
      id:          "nat-ipv4",
      title:       "Translation d'adresses — NAT IPv4",
      category:    "reseau",
      tags:        ["NAT statique", "NAT dynamique", "PAT", "FAI", "Routeur bordure"],
      description: "Mise en œuvre complète du NAT IPv4 : statique pour serveurs publics, dynamique avec PAT pour l'ensemble des postes clients.",
      results:     ["Connectivité Internet opérationnelle", "Adresses privées non exposées", "Architecture conforme production"],
      slug:        "nat-ipv4",
      contact:     false
    },

    // ── SÉCURITÉ ──────────────────────────────────────
    {
      id:          "acl-etendues",
      title:       "Contrôle d'accès — ACL Étendues",
      category:    "securite",
      tags:        ["ACL", "Filtrage", "HTTP", "DNS", "ICMP", "Sécurité périmétrique"],
      description: "Sécurisation des flux entre deux LANs d'entreprise. Filtrage sélectif par protocole, port et adresse source/destination sur routeurs Cisco.",
      results:     ["Surface d'attaque inter-segments réduite", "Trafic autorisé uniquement sur ports explicites", "Politique de sécurité documentée"],
      slug:        "acl-etendues",
      contact:     false
    },
    {
      id:          "securite-avancee",
      title:       "Sécurité Avancée — ACL + OSPF + Port-Security",
      category:    "securite",
      tags:        ["OSPF", "ACL", "Port-Security", "MAC flooding", "Défense en profondeur"],
      description: "Sécurisation réseau 3 zones : filtrage applicatif FTP/Telnet, routage OSPF inter-zones et protection contre MAC flooding par Port-Security.",
      results:     ["Protection contre accès non autorisés aux services sensibles", "Blocage attaques MAC flooding", "Politique défensive en profondeur"],
      slug:        "securite-avancee",
      contact:     false
    },

    // ── SYSTÈME ───────────────────────────────────────
    {
      id:          "nfs-linux",
      title:       "Partage de fichiers réseau — NFS",
      category:    "systeme",
      tags:        ["NFS", "Linux", "Partage réseau", "/etc/exports", "Permissions"],
      description: "Service de partage de fichiers centralisé entre machines Linux. Configuration NFS serveur/client avec gestion des droits d'accès.",
      results:     ["Accès transparent aux fichiers depuis les machines clientes", "Centralisation des données", "Réduction de la redondance de stockage"],
      slug:        "nfs-linux",
      contact:     false
    },
    {
      id:          "ssh-securise",
      title:       "Administration distante — SSH sécurisé",
      category:    "systeme",
      tags:        ["SSH", "RSA", "sshd", "Linux", "Clé publique", "Chiffrement"],
      description: "Remplacement de Telnet par SSH sécurisé. Génération de paires de clés RSA, désactivation root login, restrictions d'accès sur serveur Linux.",
      results:     ["Accès administrateur chiffré de bout en bout", "Authentification par clé plus robuste que mot de passe", "Surface d'attaque réduite"],
      slug:        "ssh-securise",
      contact:     false
    }

    // ── AJOUTER UN NOUVEAU PROJET ICI ─────────────────
    // {
    //   id:          "mon-nouveau-projet",
    //   title:       "Titre du projet",
    //   category:    "reseau",
    //   tags:        ["Tag1", "Tag2"],
    //   description: "Description courte...",
    //   results:     ["Résultat 1", "Résultat 2"],
    //   slug:        "mon-nouveau-projet",
    //   contact:     false
    // }

  ],

  // ── CERTIFICATIONS ────────────────────────────────────
  // category : "cisco" | "security" | "dev" | "cloud" | "other"
  certifications: [
    { title: "CCNA 1 — Introduction to Networks",            issuer: "Cisco Networking Academy", category: "cisco"    },
    { title: "CCNA 2 — Switching, Routing & WLANs",          issuer: "Cisco Networking Academy", category: "cisco"    },
    { title: "Python Essentials 1 & 2",                      issuer: "Cisco Networking Academy", category: "dev"      },
    { title: "Networking Basics",                            issuer: "Cisco Networking Academy", category: "cisco"    },
    { title: "Introduction to Cybersecurity",                issuer: "Cisco Networking Academy", category: "security" },
    { title: "Introduction to Artificial Intelligence",      issuer: "Cisco Networking Academy", category: "other"    },
    { title: "Cybersecurity Fundamentals",                   issuer: "IBM SkillsBuild",          category: "security" },
    { title: "Cybersecurity & Data",                         issuer: "IBM SkillsBuild",          category: "security" },
    { title: "Information Security — Cryptography & Network Security", issuer: "Saylor Academy", category: "security" },
    { title: "Network Security",                             issuer: "Saylor Academy",           category: "security" },
    { title: "Project Management",                           issuer: "Saylor Academy",           category: "other"    },
    { title: "English Language",                             issuer: "Formation Internationale", category: "other"    },
    { title: "Attestation Import-Export (Chine)",            issuer: "Formation Internationale", category: "other"    }
  ],

  // ── EXPÉRIENCE ────────────────────────────────────────
  experience: [
    {
      company:  "Brandly",
      role:     "Technicien Support & Maintenance IT",
      type:     "Stage",
      period:   "11/2025 — 01/2026",
      location: "Fès",
      tasks: [
        "Déploiement de 100+ postes Windows 10/11 avec images optimisées",
        "Diagnostic et dépannage de pannes matérielles et logicielles",
        "Optimisation système avant mise en service",
        "Configuration d'imprimantes réseau et périphériques",
        "Maintenance préventive et curative du parc interne (15+ postes)"
      ],
      tags: ["Windows 10/11", "Déploiement", "Support L1/L2", "Maintenance"]
    },
    {
      company:  "Nafaspace BF",
      role:     "Co-fondateur",
      type:     "Entrepreneur",
      period:   "2024",
      location: "Remote",
      tasks: [
        "Configuration DNS, hébergement et mise en production de la plateforme",
        "Supervision de la disponibilité et des performances (uptime)",
        "Stratégie d'acquisition des premiers utilisateurs",
        "Coordination entre aspects techniques et marketing"
      ],
      tags: ["DNS", "Hébergement", "Infrastructure Web", "Marketing Digital"]
    },
    {
      company:  "Velmya",
      role:     "Fondateur",
      type:     "Entrepreneur",
      period:   "2024",
      location: "Remote",
      tasks: [
        "Déploiement et configuration complète de la boutique e-commerce (YouCan)",
        "Intégration des solutions de paiement et gestion de domaine",
        "Gestion des campagnes Facebook Ads & Google Ads",
        "Analyse des KPIs et optimisation du tunnel de conversion"
      ],
      tags: ["YouCan", "DNS/Domaine", "Facebook Ads", "Google Ads", "Analyse KPIs"]
    }
  ]

}; // fin PORTFOLIO
