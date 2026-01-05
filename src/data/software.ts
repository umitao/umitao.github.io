import { SoftwareItem } from "../types";

export const software: SoftwareItem[] = [
  // The Early Days (Origins)
  {
    id: "soft-01",
    categoryId: "software",
    title: "Turbo Pascal",
    group: "Origins",
    subtitle: "Pre-2000",
    story:
      "My first syntax. Wrote a prompt-based calculator for geometric volumes (cube, sphere) before I even knew what coding really was.",
  },
  {
    id: "soft-02",
    categoryId: "software",
    title: "Microsoft FrontPage",
    group: "Origins",
    subtitle: "2000s",
    story:
      "The \"What You See Is What You Get\" trap. I could drag and drop, but couldn't write HTML. It made me think software wasn't for me.",
  },
  {
    id: "soft-03",
    categoryId: "software",
    title: "QuickBasic",
    group: "Origins",
    subtitle: "2007",
    story:
      "The Monte Carlo incident. I found a critical bug in my professor's radionuclide decay research code: missing `RANDOMIZE TIMER`.",
  },

  // The Nostalgia Stack (P2P & Utilities)
  {
    id: "soft-04",
    categoryId: "software",
    title: "HJ Split",
    group: "Nostalgia",
    story:
      "Splitting large files to fit onto multiple floppy disks. The struggle was real.",
  },
  {
    id: "soft-05",
    categoryId: "software",
    title: "Napster",
    group: "Nostalgia",
    story: "Barely caught it before it closed, but it changed everything.",
  },
  {
    id: "soft-06",
    categoryId: "software",
    title: "Kazaa & iMesh",
    group: "Nostalgia",
    story: "The P2P wild west. Download a song, get a virus.",
  },
  {
    id: "soft-07",
    categoryId: "software",
    title: "ICQ & mIRC",
    group: "Nostalgia",
    story: "The golden age of chat.",
  },
  {
    id: "soft-08",
    categoryId: "software",
    title: "ACDSee",
    group: "Nostalgia",
    story: "The ultimate image viewer before Windows got good at it.",
  },

  // The Scientific Era
  {
    id: "soft-09",
    categoryId: "software",
    title: "GEANT4",
    group: "Science",
    subtitle: "Lund 2011",
    story:
      "Particle physics simulator on Linux. I wasn't coding the engine, but I was driving the simulation.",
  },

  // Daily Drivers (Love & Hate)
  {
    id: "soft-10",
    categoryId: "software",
    title: "Spotify",
    group: "Love",
    subtitle: "Since 2009",
    story:
      "A true Lovemark. From the parties in Lund to today. It has never failed me.",
    hasDetail: true,
  },
  {
    id: "soft-11",
    categoryId: "software",
    title: "OneNote",
    group: "Daily",
    subtitle: "Since Inception",
    story:
      "Chaotic but indispensable. I've tried others, but I always come back.",
  },
  {
    id: "soft-12",
    categoryId: "software",
    title: "VLC",
    group: "Daily",
    story: "Simply the best. Open Source glory. It plays everything.",
  },
  {
    id: "soft-13",
    categoryId: "software",
    title: "Calibre",
    group: "Daily",
    story: "My personal digital library.",
  },
  {
    id: "soft-14",
    categoryId: "software",
    title: "Salesforce",
    group: "Hate",
    story: "The CRM days. Never again.",
  },
];
