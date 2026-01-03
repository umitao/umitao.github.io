export type LayoutType = "grid" | "list" | "sections";

export interface Category {
  id: string;
  label: string;
  color: string;
  span?: number;
  layout: LayoutType;
}

export interface Item {
  id: string;
  categoryId: string; // Links to the Category ID
  title: string;
  subtitle?: string; // e.g., "1999" for Movies, "Chemistry" for Formulas
  group?: string; // OPTIONAL: e.g., "Love", "Hate", "Hardware", "Software"
  rating?: string; // e.g., "10/10", "Masterpiece"

  // NEW FIELDS
  story?: string; // Personal story/markdown
  images?: string[]; // Array of image paths
  link?: string; // External URL
  hasDetail?: boolean; // If true, generates internal detail page
}

export const CATEGORIES: Category[] = [
  // --- Theme 1: Deep Blue (Logic/Science) ---
  // Assigned: Molecules, Formulas, Tech, Software, Products, Cars, Brands
  {
    id: "molecules",
    label: "Molecules",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "list",
  },
  {
    id: "formulas",
    label: "Formulas",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "list",
  },
  {
    id: "research",
    label: "Research",
    color: "bg-gradient-to-br from-emerald-950 to-black",
    layout: "list",
  }, // Pure Science
  {
    id: "time",
    label: "History",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "list",
  },
  {
    id: "software",
    label: "Software",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "sections",
  },
  {
    id: "products",
    label: "Products",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "grid",
  },
  {
    id: "tech",
    label: "Tech & Code",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "grid",
  },
  {
    id: "websites",
    label: "Web Discovery",
    color: "bg-gradient-to-br from-violet-950 to-black",
    layout: "grid",
  }, // Nodes to StumbleUpon
  {
    id: "cars",
    label: "Cars",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "grid",
  },
  {
    id: "brands",
    label: "Brands",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "sections",
  },

  // --- Theme 2: Subtle Pink (Creative/Art) ---
  // Assigned: Music, Art, Movies, TV Shows, Games, Books
  {
    id: "music",
    label: "Music",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "books",
    label: "Books",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },
  {
    id: "movies",
    label: "Movies",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },
  {
    id: "tvshows",
    label: "TV Shows",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "games",
    label: "Games",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },
  {
    id: "art",
    label: "Art",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },

  // --- Theme 3: Deep Teal (Sensory/Place) ---
  // Assigned: Travel, Scents, Gastronomy
  {
    id: "scents",
    label: "Scents",
    color: "bg-gradient-to-br from-teal-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "gastronomy",
    label: "Gastronomy",
    color: "bg-gradient-to-br from-teal-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "travel",
    label: "Places",
    color: "bg-gradient-to-br from-teal-950 to-neutral-900",
    layout: "grid",
  },

  // --- Theme 4: Warm Stone (Human/Time) ---
  // Assigned: People, Quotes, Points in Time (moved here), Languages
  {
    id: "people",
    label: "People",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "sections",
  },
  {
    id: "quotes",
    label: "Quotes",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "list",
  },
  {
    id: "languages",
    label: "Languages",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "list",
  },
];

// --- Dummy Data ---
// This would eventually come from a CMS or Database
export const ITEMS: Item[] = [
  // --- MOLECULES (Chemistry Background) ---
  {
    id: "mol-1",
    categoryId: "molecules",
    title: "Caffeine",
    subtitle: "C8H10N4O2",
    story: "The engine of the 21st century.",
  },
  {
    id: "mol-2",
    categoryId: "molecules",
    title: "Ethanol",
    subtitle: "C2H6O",
    story: "The social lubricant.",
  },
  {
    id: "mol-3",
    categoryId: "molecules",
    title: "Benzene",
    subtitle: "C6H6",
    story: "Perfect symmetry. The Ouroboros of chemistry.",
  },
  {
    id: "mol-4",
    categoryId: "molecules",
    title: "Dopamine",
    subtitle: "C8H11NO2",
    story: "The chase.",
  },
  {
    id: "mol-5",
    categoryId: "molecules",
    title: "Serotonin",
    subtitle: "C10H12N2O",
    story: "The stabilizer.",
  },
  {
    id: "mol-6",
    categoryId: "molecules",
    title: "Capsaicin",
    subtitle: "C18H27NO3",
    story: "Pain, but flavorful.",
  },
  {
    id: "mol-7",
    categoryId: "molecules",
    title: "Water",
    subtitle: "H2O",
    story: "The universal solvent.",
  },

  // --- FORMULAS (Physics Interest) ---
  {
    id: "for-1",
    categoryId: "formulas",
    title: "Euler's Identity",
    subtitle: "e^(iπ) + 1 = 0",
    story: "The most beautiful equation in math.",
  },
  {
    id: "for-2",
    categoryId: "formulas",
    title: "Schrödinger Equation",
    subtitle: "Quantum Mechanics",
    story: "The wave function of the universe.",
  },
  {
    id: "for-3",
    categoryId: "formulas",
    title: "Maxwell's Equations",
    subtitle: "Electromagnetism",
    story: "Let there be light.",
  },
  {
    id: "for-4",
    categoryId: "formulas",
    title: "Mass-Energy Equivalence",
    subtitle: "E = mc^2",
    story: "The bomb and the sun.",
  },
  {
    id: "for-5",
    categoryId: "formulas",
    title: "Bayes' Theorem",
    subtitle: "Probability",
    story: "Updating beliefs with new evidence (ML Sales days).",
  },

  // --- POINTS IN TIME (History/Personal) ---
  {
    id: "time-1",
    categoryId: "time",
    title: "1987",
    subtitle: "Istanbul",
    story: "Origin.",
  },
  {
    id: "time-2",
    categoryId: "time",
    title: "1997-1998",
    subtitle: "Internet Cafés",
    story:
      "The smell of cigarettes and CRT monitors. ICQ, mIRC, and Counter-Strike.",
  },
  {
    id: "time-3",
    categoryId: "time",
    title: "2009",
    subtitle: "Lund, Sweden",
    story: "The Spotify parties. A defining era.",
  },
  {
    id: "time-4",
    categoryId: "time",
    title: "2020",
    subtitle: "The Pivot",
    story: "Leaving Sales. Entering Code.",
  },

  // --- SOFTWARE (The Personal Journey) ---
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

  // --- TECH & CODE (The New Era) ---
  {
    id: "tc-1",
    categoryId: "tech",
    title: "CS50x",
    subtitle: "MIT (2019)",
    story: "Where I properly learned C and realized I *could* do this.",
  },
  {
    id: "tc-2",
    categoryId: "tech",
    title: "Python",
    subtitle: "Data Science",
    story: "Picked it up during ML Sales. Can read it, can script it.",
  },
  {
    id: "tc-3",
    categoryId: "tech",
    title: "React",
    subtitle: "Library",
    story: "Component thinking.",
  },
  {
    id: "tc-4",
    categoryId: "tech",
    title: "TypeScript",
    subtitle: "Language",
    story: "JavaScript that scales. Safety first.",
  },
  {
    id: "tc-5",
    categoryId: "tech",
    title: "RxJS",
    subtitle: "Library",
    story: "Observables. Thinking in streams.",
  },
  {
    id: "tc-6",
    categoryId: "tech",
    title: "Next.js",
    subtitle: "Framework",
    story: "Fullstack React.",
  },
  {
    id: "tc-7",
    categoryId: "tech",
    title: "Linux",
    subtitle: "OS",
    story: "From the brief stint in Sweden to WSL today.",
  },
  {
    id: "tc-8",
    categoryId: "tech",
    title: "Git",
    subtitle: "Tool",
    story: "Time machine for code.",
  },
  {
    id: "tc-9",
    categoryId: "tech",
    title: "Tailwind",
    subtitle: "CSS",
    story: "Utility-first speed.",
  },

  // --- GAMES (Gamer since age 6) ---
  {
    id: "game-1",
    categoryId: "games",
    title: "Counter-Strike 1.6",
    subtitle: "PC",
    group: "PC Era",
    story: "Internet Café culture in Istanbul. Dust2.",
  },
  {
    id: "game-2",
    categoryId: "games",
    title: "Half-Life",
    subtitle: "PC",
    group: "PC Era",
    story: "Wake up, Mr. Freeman.",
  },
  {
    id: "game-3",
    categoryId: "games",
    title: "Metal Gear Solid",
    subtitle: "PS1",
    group: "Masterpieces",
    story: "Tactical Espionage Action.",
  },
  {
    id: "game-4",
    categoryId: "games",
    title: "Age of Empires II",
    subtitle: "PC",
    group: "PC Era",
    story: "Wololo.",
  },
  {
    id: "game-5",
    categoryId: "games",
    title: "Final Fantasy VII",
    subtitle: "PS1",
    group: "Masterpieces",
    story: "That opening bombing mission.",
  },

  // --- MUSIC (Eclectic) ---
  {
    id: "mus-1",
    categoryId: "music",
    title: "Radiohead",
    subtitle: "OK Computer",
    story: "The perfect intersection of rock and tech.",
  },
  {
    id: "mus-2",
    categoryId: "music",
    title: "Daft Punk",
    subtitle: "Discovery",
    story: "Electronic symphony.",
  },
  {
    id: "mus-3",
    categoryId: "music",
    title: "Duman",
    subtitle: "Belki Alışman Lazım",
    story: "Istanbul grunge/rock anthem.",
  },
  {
    id: "mus-4",
    categoryId: "music",
    title: "Barış Manço",
    subtitle: "Legend",
    story: "The father of Turkish rock.",
  },
  {
    id: "mus-5",
    categoryId: "music",
    title: "Hans Zimmer",
    subtitle: "Interstellar OST",
    story: "Focus music.",
  },
  // --- BRANDS (Love & Hate) ---
  {
    id: "br-01",
    categoryId: "brands",
    title: "Red Bull",
    group: "Love",
    hasDetail: true,
    story:
      "Red Bull Gravity Challenge 2007. 2nd Place. Prize won: Red Bull as much as your weight. I measured around 60-65 kilos tops back then and I still do, but our friend who weighed around 100 kg sat on the scale, and it took 384 Red Bull cans to get him up in the scale.",
  },
  {
    id: "br-02",
    categoryId: "brands",
    title: "BMW",
    group: "Love",
    story: "The E46 era. Pure driving dynamics.",
  },
  {
    id: "br-03",
    categoryId: "brands",
    title: "Nike",
    group: "Love",
    story: 'Iconic design language and the "Just Do It" spirit.',
  },
  {
    id: "br-04",
    categoryId: "brands",
    title: "Sony",
    group: "Hate",
    story: "The absolute masterclass in lifestyle marketing.",
  },
  {
    id: "br-05",
    categoryId: "brands",
    title: "Sony",
    group: "Love",
    story: "Evil company.",
  },

  // --- BOOKS (Sci-Fi & Thought) ---
  {
    id: "bk-1",
    categoryId: "books",
    title: "The Dispossessed",
    subtitle: "Ursula K. Le Guin",
    story: "Anarchist utopia.",
  },
  {
    id: "bk-2",
    categoryId: "books",
    title: "Dune",
    subtitle: "Frank Herbert",
    story: "The spice must flow.",
  },
  {
    id: "bk-3",
    categoryId: "books",
    title: "Sapiens",
    subtitle: "Yuval Noah Harari",
    story: "Brief history of us.",
  },

  // --- MOVIES (Sci-Fi Focus) ---
  {
    id: "mov-1",
    categoryId: "movies",
    title: "Blade Runner 2049",
    subtitle: "2017",
    story: "Visually perfect.",
  },
  {
    id: "mov-2",
    categoryId: "movies",
    title: "Interstellar",
    subtitle: "2014",
    story: "Love transcends dimensions.",
  },
  {
    id: "mov-3",
    categoryId: "movies",
    title: "The Matrix",
    subtitle: "1999",
    story: "It changed everything.",
  },

  // --- TRAVEL (Places) ---
  {
    id: "trv-1",
    categoryId: "travel",
    title: "Istanbul",
    group: "Home",
    story: "Chaos and beauty. The center of the world.",
  },
  {
    id: "trv-2",
    categoryId: "travel",
    title: "Valencia",
    group: "Home",
    story: "Sun, oranges, and calm.",
  },
  {
    id: "trv-3",
    categoryId: "travel",
    title: "Lund",
    group: "Sweden",
    story: "The Student Life. Biking in snow.",
  },

  // --- SCENTS ---
  {
    id: "sct-1",
    categoryId: "scents",
    title: "Petrichor",
    subtitle: "Rain on soil",
    story: "Geosmin molecules.",
  },
  {
    id: "sct-3",
    categoryId: "scents",
    title: "The Bosphorus",
    subtitle: "Sea/Salt",
    story: "The smell of Istanbul.",
  },
  {
    id: "sct-6",
    categoryId: "scents",
    title: "Solder Fumes",
    subtitle: "Rosin",
    story: "Electronics workshop smell.",
  },
  // --- RESEARCH (Pure Science & Papers) ---
  {
    id: "res-1",
    categoryId: "research",
    title: "The Structure of Scientific Revolutions",
    subtitle: "Thomas Kuhn",
    story: "Paradigm shifts. How science actually progresses.",
  },
  {
    id: "res-2",
    categoryId: "research",
    title: "AlphaFold Protein Structure Database",
    subtitle: "DeepMind",
    story: "Solving the folding problem. A turning point for biology.",
  },

  // --- WEBSITES (StumbleUpon Vibes) ---
  {
    id: "web-1",
    categoryId: "websites",
    title: "Astronomy Picture of the Day",
    subtitle: "NASA",
    link: "https://apod.nasa.gov",
    story: "The old internet. Simple HTML, infinite wonder.",
  },
  {
    id: "web-2",
    categoryId: "websites",
    title: "Hacker News",
    subtitle: "Y Combinator",
    link: "https://news.ycombinator.com",
    story: "The orange site. Pure text, high signal.",
  },
];

export async function getCategory(slug: string): Promise<Category | undefined> {
  return CATEGORIES.find((c) => c.id === slug);
}

export async function getItems(categoryId: string): Promise<Item[]> {
  return ITEMS.filter((i) => i.categoryId === categoryId);
}
