import { SoftwareItem } from "../types";

export const software: SoftwareItem[] = [
  // The Early Days (Origins)
  {
    id: "eea8d55b-aa4d-40c3-8183-fe1378f6f80b",
    categoryId: "software",
    title: "Turbo Pascal",
    group: "Origins",
    subtitle: "Pre-2000",
    story:
      "My first syntax. Wrote a prompt-based calculator for geometric volumes (cube, sphere) before I even knew what coding really was.",
  },
  {
    id: "1851ffa3-c620-4c39-81e3-ca06fe1c90de",
    categoryId: "software",
    title: "Microsoft FrontPage",
    group: "Origins",
    subtitle: "2000s",
    story:
      "The \"What You See Is What You Get\" trap. I could drag and drop, but couldn't write HTML. It made me think software wasn't for me.",
  },
  {
    id: "9c53f35b-ac94-477a-af7a-125abd2b1960",
    categoryId: "software",
    title: "QuickBasic",
    group: "Origins",
    subtitle: "2007",
    story:
      "The Monte Carlo incident. I found a critical bug in my professor's radionuclide decay research code: missing `RANDOMIZE TIMER`.",
  },

  // The Nostalgia Stack (P2P & Utilities)
  {
    id: "ff8fc9f8-c39b-44b3-9ecb-5ba40ed059e0",
    categoryId: "software",
    title: "HJ Split",
    group: "Nostalgia",
    story:
      "Splitting large files to fit onto multiple floppy disks. The struggle was real.",
  },
  {
    id: "95004a40-475a-4f87-8563-15bb755e2e35",
    categoryId: "software",
    title: "Napster",
    group: "Nostalgia",
    story: "Barely caught it before it closed, but it changed everything.",
  },
  {
    id: "39059139-bd50-457e-a258-d6bbed576259",
    categoryId: "software",
    title: "Kazaa & iMesh",
    group: "Nostalgia",
    story: "The P2P wild west. Download a song, get a virus.",
  },
  {
    id: "570d3cce-88db-4023-975e-67913ce47bce",
    categoryId: "software",
    title: "ICQ & mIRC",
    group: "Nostalgia",
    story: "The golden age of chat.",
  },
  {
    id: "7328a36c-2bc6-446e-9abd-2772cd00c798",
    categoryId: "software",
    title: "ACDSee",
    group: "Nostalgia",
    story: "The ultimate image viewer before Windows got good at it.",
  },

  // The Scientific Era
  {
    id: "0c039e3e-3807-4a9b-8d29-3ca3e62d6ad1",
    categoryId: "software",
    title: "GEANT4",
    group: "Science",
    subtitle: "Lund 2011",
    story:
      "Particle physics simulator on Linux. I wasn't coding the engine, but I was driving the simulation.",
  },

  // Daily Drivers (Love & Hate)
  {
    id: "428525de-3646-45c2-8ffe-92ee3f77c9ad",
    categoryId: "software",
    title: "Spotify",
    group: "Love",
    subtitle: "Since 2009",
    story:
      "A true Lovemark. From the parties in Lund to today. It has never failed me.",
    hasDetail: true,
  },
  {
    id: "7452a815-8bc6-4288-a269-7e06b05c84d5",
    categoryId: "software",
    title: "OneNote",
    group: "Daily",
    subtitle: "Since Inception",
    story:
      "Chaotic but indispensable. I've tried others, but I always come back.",
  },
  {
    id: "1bbb2a68-94b8-4e68-b71e-40cb8f231eec",
    categoryId: "software",
    title: "VLC",
    group: "Daily",
    story: "Simply the best. Open Source glory. It plays everything.",
  },
  {
    id: "928e08a1-8575-4a5f-8ff9-47bcb3e509e0",
    categoryId: "software",
    title: "Calibre",
    group: "Daily",
    story: "My personal digital library.",
  },
  {
    id: "54673bb0-f1bb-4e2b-85ca-6f52a537f5ed",
    categoryId: "software",
    title: "Salesforce",
    group: "Hate",
    story: "The CRM days. Never again.",
  },
];
