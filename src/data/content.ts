import type { LucideIcon } from "lucide-react";
import {
  ScanSearch,
  Droplets,
  Layers,
  Siren,
  Factory,
  Zap,
  Building2,
  Building,
  HardHat,
  Store,
  ShieldCheck,
  BadgeCheck,
  Award,
  FileCheck2,
  Landmark,
} from "lucide-react";

/* ———————————————————————— Brand ———————————————————————— */

export const BRAND = {
  name: "Innerline",
  full: "Innerline Engineering",
  tag: "an IE-EI Company",
  phone: "909-285-1228",
  phoneHref: "tel:+19092851228",
  email: "anasri@innerlineengineering.com",
  hq: "Riverside, CA",
  usdot: "USDOT #2616082",
  ca: "CA #323428",
  serviceAreas: [
    "Inland Empire",
    "Riverside County",
    "Orange County",
    "Long Beach",
    "Los Angeles Basin",
    "Central Valley",
    "Fresno",
    "San Diego County",
  ],
};

/* ———————————————————————— Imagery (Pexels) ———————————————————————— */

const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroPipes: px(24245335, 2100), // large pipes staged at job site, machinery at sunset
  canalTunnel: px(5532197), // dark canal tunnel reflections — CCTV
  ringTunnel: px(28057028), // circular tunnel w/ blue light
  pipeTunnel: px(32655945), // curved tunnel with overhead pipes
  hoseSteam: px(36090543), // gloved hand, industrial hose, steam
  pressureWash: px(12919779), // pressure washer at work
  pipeworkYard: px(29274530), // urban pipe installation close-up
  excavatorSunset: px(31762068), // yellow excavator at sunset
  excavatorUrban: px(34960818), // urban excavation with barricades
  treatmentNight: px(13016004), // aerial night water treatment plant
  treatmentAerial: px(11452356), // aerial wastewater treatment plant
  tanksDrone: px(18843272), // drone shot of industrial tanks
  pylonDrama: px(35201578, 2000), // electricity pylon silhouette
  bridgeAerial: px(32598872), // highway bridge construction aerial
  campusModern: px(27238168), // modern university building
  steelForge: px(5845933), // blacksmith / hot metal
  factoryQC: px(19895881), // factory worker inspecting machinery
  workerVest: px(7565176), // portrait — man in work vest
  workerTruck: px(9322228), // worker beside truck, urban site
  roadCrew: px(18263701), // crew paving road
  outfallPipe: px(17882790), // large pipeline discharge
};

export const AVATARS = {
  m1: px(10417388, 400),
  m2: px(28773362, 400),
  m3: px(26834972, 400),
  m4: px(14589344, 400),
  m5: px(37148308, 400),
  w1: px(5804206, 400),
  m6: px(12311537, 400),
  m7: px(33331334, 400),
  m8: px(18165006, 400),
  m9: px(12311564, 400),
};

/* ———————————————————————— Services ———————————————————————— */

export interface Service {
  id: string;
  index: string;
  line: string;
  title: string;
  short: string;
  description: string[];
  features: string[];
  stats: { value: string; label: string }[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: "cctv-inspection",
    index: "01",
    line: "Inspection",
    title: "CCTV Underground Inspection",
    short:
      "Know exactly what's happening underground before you spend on repairs.",
    description: [
      "As the CCTV inspection industry evolves, Innerline has stayed at the forefront of change — the first company in California to go fully digital, back in 2001. Every operator on our crews is NASSCO PACP trained, and every foot of footage is reviewed by our in-house quality control department before it reaches your desk.",
      "Our remote inspection capability spans mains, laterals, and storm systems — with self-up-righting mini cameras, mainline crawlers, scissor-lift storm drain crawlers, and floating platforms for large-diameter lines under high flow.",
    ],
    features: [
      "Sewer & storm drain CCTV",
      "Mainline & lateral inspection",
      "Pre / post-rehab verification",
      "Root & blockage identification",
      "Manhole & structure inspection",
      "Digital condition reports — WinCan, POSM, Flexidata",
    ],
    stats: [
      { value: "1.5″–106″", label: "Diameter range inspected" },
      { value: "2M+ LF", label: "Pipeline televised" },
      { value: "PACP", label: "NASSCO-trained operators" },
    ],
    icon: ScanSearch,
    image: IMG.canalTunnel,
    imageAlt: "CCTV operator's view inside a dark underground canal tunnel with water reflections",
  },
  {
    id: "industrial-cleaning",
    index: "02",
    line: "Cleaning",
    title: "Industrial Cleaning & Hydro Jetting",
    short:
      "Keep plants and facilities running with safe, efficient industrial cleaning.",
    description: [
      "Our jetter operators are factory trained and applications certified to perform where others cannot. We study the science of pipe cleaning — matching nozzle design, GPM, hose diameter and pressure to each line — so you're never paying for idle tank refills or the wrong tool for the job.",
      "Combination trucks are inspected daily; the tools vital to each machine are tested weekly. From heavy debris and roots to grease and scale, our crews clean pipelines up to 72 inches in diameter.",
    ],
    features: [
      "Tank, sump & clarifier cleaning",
      "Trench drain & catch basin service",
      "High-pressure hydro jetting",
      "Storm drain & sewer main cleaning",
      "Vacuum & hydro excavation",
      "Utility locating & potholing",
    ],
    stats: [
      { value: "72″", label: "Max pipe diameter cleaned" },
      { value: "Daily", label: "Truck inspection cycle" },
      { value: "4,000 PSI", label: "Jetting capability" },
    ],
    icon: Droplets,
    image: IMG.hoseSteam,
    imageAlt: "Gloved hand guiding an industrial water hose with steam rising in a plant",
  },
  {
    id: "trenchless-repair",
    index: "03",
    line: "Repair",
    title: "CIPP Trenchless Pipe Repair",
    short:
      "Rehabilitate damaged pipe from the inside — no open trench, no torn-up site.",
    description: [
      "Cured-in-place pipe rehabilitation rebuilds failing sewer and storm lines from the inside out. No excavation, no surface restoration, no weeks of traffic control — just a new structural pipe inside the old one, verified on camera before we leave.",
      "Because the same crew that inspects your system performs the repair, nothing is lost between vendors. Pre- and post-lining CCTV verification is included on every liner we install.",
    ],
    features: [
      "Cured-in-place pipe (CIPP) rehab",
      "Sewer & storm drain rehabilitation",
      "Trenchless point repairs",
      "Lateral rehabilitation",
      "Pre / post CCTV verification",
      "Minimal surface disruption",
    ],
    stats: [
      { value: "0", label: "Open trenches required" },
      { value: "50 yr", label: "Design life of liner" },
      { value: "1 day", label: "Typical point repair" },
    ],
    icon: Layers,
    image: IMG.pipeworkYard,
    imageAlt: "New pipe sections staged at an urban trenchless rehabilitation site",
  },
  {
    id: "environmental-response",
    index: "04",
    line: "Response",
    title: "Environmental & Emergency Response",
    short:
      "Stay compliant and protect your site, your customers and your community.",
    description: [
      "Hydro excavation is the safer alternative for nondestructive digging — water loosens the soil while a high-flow vacuum removes it, without touching the utilities below. A single 10-inch pothole can verify a line at depths up to 25 feet in minutes, eliminating the financial and safety risk of a utility strike.",
      "When something goes wrong, our crews roll around the clock: spill response support, sediment and debris removal, waste management, and the compliance documentation your regulators expect.",
    ],
    features: [
      "Spill response support",
      "Waste & material management",
      "Sediment & debris removal",
      "Slot trenching & pole setting",
      "Compliance documentation",
      "24-hour emergency dispatch",
    ],
    stats: [
      { value: "24/7", label: "Emergency response" },
      { value: "25 ft", label: "Pothole verification depth" },
      { value: "10″", label: "Precision pothole diameter" },
    ],
    icon: Siren,
    image: IMG.treatmentNight,
    imageAlt: "Aerial night view of an illuminated water treatment facility",
  },
];

/* ———————————————————————— Sectors ———————————————————————— */

export interface Sector {
  id: string;
  title: string;
  blurb: string;
  scopes: string[];
  icon: LucideIcon;
  image: string;
}

export const SECTORS: Sector[] = [
  {
    id: "industrial",
    title: "Industrial & Distribution",
    blurb:
      "Manufacturing plants, distribution centers and processing facilities — kept clean and compliant with minimal downtime to operations.",
    scopes: ["Tank & clarifier cleaning", "Trench drains & sumps", "Scheduled shutdown work"],
    icon: Factory,
    image: IMG.tanksDrone,
  },
  {
    id: "utility",
    title: "Utility Companies",
    blurb:
      "Underground pipelines, vaults and utility systems — potholing, pre-construction inspection and scheduled maintenance programs.",
    scopes: ["Utility locating & potholing", "Vault & structure cleaning", "Pre-construction CCTV"],
    icon: Zap,
    image: IMG.pylonDrama,
  },
  {
    id: "municipal",
    title: "Municipalities & Public Works",
    blurb:
      "Sanitary sewer and stormwater systems, drainage programs and citywide CCTV assessment — NASSCO-coded and audit-ready.",
    scopes: ["CCTV assessment programs", "Storm drain cleaning", "PAC / MAC / LAC coding"],
    icon: Landmark,
    image: IMG.bridgeAerial,
  },
  {
    id: "facilities",
    title: "Facility & Property Managers",
    blurb:
      "Campuses, office parks, schools and healthcare sites that need a reliable partner on a schedule — not a vendor they chase.",
    scopes: ["Recurring service plans", "Catch basin programs", "After-hours availability"],
    icon: Building,
    image: IMG.campusModern,
  },
  {
    id: "contractors",
    title: "Contractors & Developers",
    blurb:
      "Construction support from groundbreaking to closeout — pre-construction cleaning, rehabilitation and final turnover video.",
    scopes: ["Pre-construction cleaning", "Rehab & point repair", "Closeout documentation"],
    icon: HardHat,
    image: IMG.excavatorSunset,
  },
  {
    id: "commercial",
    title: "Retail & Commercial",
    blurb:
      "Big-box stores, shopping centers and multi-site portfolios — grease lines, storm systems and parking-lot drainage handled.",
    scopes: ["Grease line jetting", "Multi-site maintenance", "Storm system compliance"],
    icon: Store,
    image: IMG.workerTruck,
  },
];

/* ———————————————————————— Certifications ———————————————————————— */

export interface Certification {
  id: string;
  abbr: string;
  name: string;
  desc: string;
  qualifies: string[];
  icon: LucideIcon;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "wbe",
    abbr: "WBE",
    name: "Woman-Owned Business Enterprise",
    desc: "Certified woman-owned business — qualifying your spend toward supplier-diversity goals on public and private contracts.",
    qualifies: ["Supplier-diversity spend", "Public contract set-asides", "Corporate diversity programs"],
    icon: BadgeCheck,
  },
  {
    id: "go156",
    abbr: "CPUC GO 156",
    name: "CPUC General Order 156 Diverse Supplier",
    desc: "Recognized under the California Public Utilities Commission's supplier diversity program — clearing the way for utility procurement.",
    qualifies: ["Utility procurement", "GO 156 reporting credit", "Clearinghouse-verified status"],
    icon: FileCheck2,
  },
  {
    id: "nassco",
    abbr: "NASSCO",
    name: "PACP · MACP · LACP Certified Crews",
    desc: "Every inspection is coded to national Pipeline, Manhole and Lateral Assessment Certification Program standards — consistent, defensible data.",
    qualifies: ["PACP pipeline coding", "MACP manhole coding", "LACP lateral coding"],
    icon: Award,
  },
  {
    id: "isn",
    abbr: "ISNetworld",
    name: "Member Contractor",
    desc: "Safety programs, insurance and training records audited and maintained in ISNetworld — pre-qualified for industrial and utility owners.",
    qualifies: ["Owner pre-qualification", "Audited safety programs", "Insurance verification"],
    icon: ShieldCheck,
  },
  {
    id: "sb",
    abbr: "CA SB",
    name: "California Certified Small Business",
    desc: "State-certified small business — supporting small-business participation goals on California public works.",
    qualifies: ["State SB participation", "Public works bidding", "Local agency goals"],
    icon: Building2,
  },
];

/* ———————————————————————— Case Studies ———————————————————————— */

export interface CaseStudy {
  id: string;
  client: string;
  location: string;
  title: string;
  summary: string;
  challenge: string;
  scope: string[];
  outcome: string;
  results: { value: string; label: string }[];
  image: string;
  featured?: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "pge",
    client: "PG&E",
    location: "Riverside & Fresno, CA",
    title: "Scheduled Underground Maintenance for a Major California Utility",
    summary:
      "Ongoing CCTV inspection and cleaning across two service regions, delivered by dedicated Innerline crews under a multi-year program.",
    challenge:
      "A statewide utility needed a pre-qualified, safety-audited contractor to maintain underground infrastructure across two distant service regions — without disrupting operations or blowing the maintenance budget.",
    scope: [
      "Recurring CCTV inspection of conduit & vault systems",
      "High-pressure jetting and vacuum cleaning",
      "NASSCO-coded condition reporting for capital planning",
      "Dedicated crew assignment, both service regions",
    ],
    outcome:
      "A single accountable crew now covers both regions on a predictable cadence — with uniform documentation the utility's engineers can plan against.",
    results: [
      { value: "2", label: "Service regions covered" },
      { value: "365", label: "Days of scheduled coverage" },
      { value: "1", label: "Dedicated crew, start to finish" },
    ],
    image: IMG.pylonDrama,
    featured: true,
  },
  {
    id: "cdcr",
    client: "CA Dept. of Corrections & Rehabilitation",
    location: "State Correctional Facility, CA",
    title: "CCTV Inspection Program for a State Correctional Facility",
    summary:
      "Full condition assessment and documentation of the facility's underground systems, feeding directly into capital planning.",
    challenge:
      "A secure state facility needed its aging sewer and storm infrastructure assessed end-to-end — under strict security protocols, escorted access and zero tolerance for schedule slip.",
    scope: [
      "Cleared and escorted crew operations on-site",
      "Mainline and lateral CCTV across the facility",
      "Manhole and structure inspections (MACP)",
      "Prioritized defect reports for capital planning",
    ],
    outcome:
      "Delivered a complete, coded condition database that let facility engineers sequence repairs by risk — not by guesswork.",
    results: [
      { value: "100%", label: "System footage delivered" },
      { value: "MACP", label: "Structure-level coding" },
      { value: "0", label: "Security incidents" },
    ],
    image: IMG.pipeTunnel,
  },
  {
    id: "calpoly",
    client: "Cal Poly Pomona",
    location: "Pomona, CA",
    title: "Campus Facility Maintenance Partnership",
    summary:
      "Recurring inspection and cleaning across a full university campus — storm systems, sewer mains and building laterals.",
    challenge:
      "A 1,400-acre campus with decades of mixed-age infrastructure needed a partner who could work around class schedules, events and the daily life of 30,000 students.",
    scope: [
      "Campus-wide storm drain & sewer CCTV",
      "Scheduled jetting of high-use lines",
      "Catch basin and trench drain programs",
      "After-hours and break-period scheduling",
    ],
    outcome:
      "The campus moved from reactive callouts to a planned maintenance rhythm — with every line mapped, graded and scheduled.",
    results: [
      { value: "1,400", label: "Acre campus covered" },
      { value: "0", label: "Class disruptions" },
      { value: "Annual", label: "Recurring program" },
    ],
    image: IMG.campusModern,
  },
  {
    id: "calsteel",
    client: "California Steel Industries",
    location: "Fontana, CA",
    title: "Industrial Site Cleaning at Scale",
    summary:
      "High-volume tank, trench drain and catch basin cleaning for one of the Inland Empire's largest steel operations.",
    challenge:
      "A working steel mill generates scale, slag and sediment faster than most contractors can remove it — and every hour of downtime carries a real production cost.",
    scope: [
      "High-volume vacuum removal of scale & debris",
      "Trench drain and catch basin cleaning",
      "Tank and sump services during planned outages",
      "Waste manifest & compliance documentation",
    ],
    outcome:
      "Cleaning windows now land inside planned production pauses — the mill stays on schedule, and drainage stays ahead of buildup.",
    results: [
      { value: "24 hr", label: "Turnaround on outages" },
      { value: "Tons", label: "Of material removed per visit" },
      { value: "ISN", label: "Pre-qualified on site" },
    ],
    image: IMG.steelForge,
  },
  {
    id: "yorbalinda",
    client: "City of Yorba Linda",
    location: "Yorba Linda, CA",
    title: "Citywide Storm Drain Assessment",
    summary:
      "CCTV condition assessment of the city's storm system ahead of a multi-year rehabilitation capital plan.",
    challenge:
      "The city needed defensible condition data across its storm network to prioritize rehabilitation spend — fast, and without tearing up residential streets.",
    scope: [
      "Storm main CCTV with PACP coding",
      "Scissor-lift crawler deployment on box culverts",
      "GIS-linked defect mapping",
      "Rehabilitation prioritization matrix",
    ],
    outcome:
      "A ranked, budget-ready rehabilitation plan — every dollar of the capital program tied to coded, time-stamped video evidence.",
    results: [
      { value: "PACP", label: "Citywide coding standard" },
      { value: "GIS", label: "Linked deliverables" },
      { value: "Multi-yr", label: "Capital plan supported" },
    ],
    image: IMG.roadCrew,
  },
];

/* ———————————————————————— Testimonials ———————————————————————— */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Innerline's crew cleaned and televised our 36-inch trunk line ahead of schedule — and the documentation was the cleanest our engineers have ever received.",
    name: "Robert Castillo",
    role: "Public Works Superintendent · Riverside County",
    avatar: AVATARS.m1,
  },
  {
    quote:
      "They work inside our production windows instead of against them. Tanks, trench drains, catch basins — one call, one crew, done right.",
    name: "Marcus Whitfield",
    role: "Facilities Director · Steel Manufacturing",
    avatar: AVATARS.m2,
  },
  {
    quote:
      "The potholing precision is remarkable. Ten-inch holes, twenty feet down, utilities verified — our strike risk effectively went to zero.",
    name: "Dana Whitmore",
    role: "Utility Program Manager · Energy Sector",
    avatar: AVATARS.w1,
  },
  {
    quote:
      "As a WBE and CPUC GO 156 supplier they check every box on our diversity requirements — but we keep renewing because the work is simply excellent.",
    name: "Priya Raman",
    role: "Procurement Lead · Investor-Owned Utility",
    avatar: AVATARS.m3,
  },
  {
    quote:
      "Their CCTV footage holds up in front of our board, our regulators and our auditors. That level of quality control is rare in this trade.",
    name: "James Okafor",
    role: "District Engineer · Water Authority",
    avatar: AVATARS.m6,
  },
  {
    quote:
      "Forty thousand feet of feeder line inspected in four days. They brought the right equipment, the right plan, and zero excuses.",
    name: "Elena Vasquez",
    role: "Capital Projects Manager · Water District",
    avatar: AVATARS.m4,
  },
];

/* ———————————————————————— Trusted by ———————————————————————— */

export const CLIENTS = [
  "PG&E",
  "California Steel Industries",
  "CA Dept. of Corrections & Rehabilitation",
  "Santa Ana Water Protection Agency",
  "Cal Poly Pomona",
  "City of Yorba Linda",
  "Metropolitan Water District",
  "Orange County Sanitation District",
];

/* ———————————————————————— Leadership ———————————————————————— */

export const LEADERSHIP = [
  { name: "GF Chang", role: "Chief Executive Officer", avatar: AVATARS.m8 },
  { name: "JC Yeh", role: "Chief Financial Officer", avatar: AVATARS.m4 },
  { name: "Bryce Swanson", role: "General Manager", avatar: AVATARS.m5 },
  { name: "Amal Nasri", role: "Project Manager", avatar: AVATARS.m7 },
  { name: "Allen Souza", role: "CCTV Project Manager", avatar: AVATARS.m3 },
  { name: "Moe Nasri", role: "Field Manager", avatar: AVATARS.m9 },
];

/* ———————————————————————— Navigation ———————————————————————— */

export const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "Certifications", to: "/certifications" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
