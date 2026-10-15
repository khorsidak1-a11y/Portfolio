import robotDetail from "@/assets/robotarm-cad-detalje.png.asset.json";
import kar from "@/assets/sop-forsog.jpg.asset.json";
import karDetail from "@/assets/sop-kar.jpg.asset.json";
import cfdLaminar from "@/assets/sop-cfd-laminar.jpg.asset.json";
import cfdTurbulent from "@/assets/sop-cfd-turbulent.jpg.asset.json";
import flyvning from "@/assets/rc-fly-flyvning.jpg.asset.json";
import flyStart from "@/assets/rc-fly-start.jpg.asset.json";
import flyElektronik from "@/assets/rc-fly-elektronik.jpg.asset.json";
import flyVingeribber from "@/assets/rc-fly-vingeribber.jpg.asset.json";
import telefon from "@/assets/gsm-program.png.asset.json";
import telefonCode from "@/assets/gsm-kode.png.asset.json";
import tFly from "@/assets/rc-krop-tegning.png.asset.json";
import fuselage from "@/assets/rc-fuselage-tegning.png.asset.json";
import wings from "@/assets/rc-vinger-tegning.png.asset.json";
import motor from "@/assets/rc-motorholder-cad.png.asset.json";
import motorDrawing from "@/assets/rc-motorholder-tegning.png.asset.json";
import sopReport from "@/assets/sop-rapport.pdf.asset.json";
import gsmDocumentation from "@/assets/gsm-dokumentation.docx.asset.json";
import gsmSynopsis from "@/assets/gsm-synopsis.docx.asset.json";
import fysikReport from "@/assets/fysik-eksamensprojekt-tmd.pdf.asset.json";
import ballofixBrief from "@/assets/ballofix-opgavebeskrivelse.pdf.asset.json";
import ballofixSnit from "@/assets/ballofix-snit.png.asset.json";
import tmdForsoeg from "@/assets/tmd-forsoeg.jpg.asset.json";
import tmdGraf from "@/assets/tmd-graf.png.asset.json";

export type ProjectImage = { url: string; caption: string };

export type Project = {
  slug: string;
  no: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  image: string;
  drawing?: string;
  gallery?: ProjectImage[];
  drawings?: ProjectImage[];
  documents?: { url: string; label: string; format: string; note?: string }[];
  problem: string;
  inspiration?: { label: string; url: string };
  tools: string[];
  role: string;
  challenge: string;
  process: string[];
  result: string;
  learned: string;
  report?: { url?: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "robotarm",
    no: "01",
    title: "Robotarm med griber",
    year: "2024",
    category: "Konstruktion · Mekanisme",
    summary: "CAD-konstruktion og invers kinematik til en fysisk bygget robotarm og griber.",
    image: robotDetail.url,
    problem:
      "Hvordan når man steder, som er svære eller umulige at komme til? Vi byggede en fleksibel, blæksprutte-inspireret arm, der kan bevæge sig ind i snævre rum – et princip, der kan bruges i medicinsk udstyr (fx minimalt invasiv kirurgi) og i industrien til inspektion og håndtering.",
    inspiration: { label: "Inspiration: blæksprutte-inspireret robotik (ScienceDirect)", url: "https://www.sciencedirect.com/science/article/pii/S2666998624006033" },
    tools: ["Fusion 360", "Invers kinematik", "3D-print", "Servomotorer"],
    role: "CAD-konstruktion og kinematik",
    challenge:
      "At designe en robotarm med griber, der kunne bygges med 3D-printede dele og styres præcist til en given position.",
    process: [
      "Modellerede led, beslag og griber som samling i Fusion 360.",
      "Udledte invers kinematik, så armens vinkler kunne beregnes ud fra en ønsket position.",
      "Printede, samlede og testede prototypen og justerede tolerancer undervejs.",
    ],
    result: "Prototypen blev bygget, testet og præsenteret ved HTX åbent hus. Projektkarakter: 12.",
    learned: "Hvordan tolerancer, materialevalg og monteringsrækkefølge påvirker en fysisk mekanisme.",
  },
  {
    slug: "rc-fly",
    no: "02",
    title: "RC-fly prototype",
    year: "2026",
    category: "Konstruktion · Beregning",
    summary: "CAD-modeller og konstruktion understøttet af matematiske og fysiske beregninger.",
    image: flyvning.url,
    drawing: tFly.url,
    gallery: [
      { url: flyStart.url, caption: "Start af prototypen på testflyvningen — krop, vinger og to motorer." },
      { url: flyElektronik.url, caption: "Elektronik og motorer set ovenfra — servos, batterier og kabelføring." },
      { url: flyVingeribber.url, caption: "Laserskårne vingeribber, der danner vingens profil." },
      { url: motor.url, caption: "Motorholder — CAD-model i Fusion 360." },
    ],
    drawings: [
      { url: tFly.url, caption: "Flyets krop — arbejdstegning." },
      { url: fuselage.url, caption: "Fuselage — arbejdstegning med mål." },
      { url: wings.url, caption: "Vinger — arbejdstegning." },
      { url: motorDrawing.url, caption: "Motorholder — arbejdstegning." },
    ],
    problem:
      "Hvordan leverer man blod og medicin hurtigt og sikkert til områder, der er svære at nå? Inspireret af Ziplines medicinske droner arbejdede vi på et RC-fly med en AI-styret drop-mekanisme – og på sigt AI-styret flyvning, så leverancen kan automatiseres.",
    inspiration: { label: "Inspiration: Zipline medicinske droner", url: "https://www.zipline.com" },
    tools: ["Fusion 360", "Mathcad", "3D-print", "Scrum / Trello"],
    role: "CAD, beregninger og projektstyring",
    challenge: "At konstruere et RC-fly, hvor vægt, opdrift og styrke balanceres gennem beregninger.",
    process: [
      "Udviklede CAD-modeller af krop, vinger og montagedele.",
      "Lavede beregninger af opdrift, vægtfordeling og tyngdepunkt.",
      "Styrede projektet med roller, Scrum og Trello i gruppen.",
    ],
    result:
      "Prototypen kom ikke i luften – men vi analyserede årsagerne og lagde en plan for forbedringer til næste prototype. Eksamenskarakter: 12.",
    learned: "At en fejlet test er data. Iteration og ærlig evaluering er en del af ingeniørarbejdet.",
  },
  {
    slug: "koblede-kar",
    no: "03",
    title: "Koblede kar – CFD og modellering",
    year: "2026",
    category: "Analyse · CFD",
    summary: "Koblede differentialligninger, Python-visualisering og CFD i SimScale.",
    image: cfdLaminar.url,
    gallery: [
      { url: kar.url, caption: "Forsøgsopstillingen med de tilsluttede kar." },
      { url: karDetail.url, caption: "Nærmere billede af karrene og målestokken til videoanalyse." },
      { url: cfdTurbulent.url, caption: "CFD-resultat fra SOP-rapportens bilag." },
    ],
    problem:
      "Kan matematik beskrive virkeligheden? Jeg opstillede koblede differentialligninger for et system af forbundne kar og testede dem mod et fysisk forsøg. Modellen kunne ikke forklare alt, der reelt skete – derfor brugte jeg CFD i SimScale, med sparring fra en af deres ingeniører, til at vise, hvor de forenklede antagelser bryder sammen, og hvorfor Navier–Stokes-ligningerne er nødvendige for at beskrive strømningen.",
    tools: ["Python", "Excel", "Fusion 360", "SimScale"],
    role: "Studieområdeprojekt (SOP)",
    challenge: "At forudsige vandhøjderne i tre vertikalt forbundne kar over tid og sammenligne model med forsøg.",
    process: [
      "Opstillede og løste koblede differentialligninger og visualiserede forløbet i Python.",
      "Behandlede forsøgsdata og beregnede Reynolds-tal i Excel.",
      "Udarbejdede geometri i Fusion 360 og opsatte CFD i SimScale med sparring fra en SimScale-ingeniør.",
    ],
    result: "En sammenhængende sammenligning mellem analytisk model, simulering og fysisk forsøg.",
    learned: "Hvordan man validerer en simulering mod virkelige målinger.",
    report: { url: sopReport.url, label: "Se SOP-rapport" },
  },
  {
    slug: "telefonloesning",
    no: "04",
    title: "Telefonløsning med Python og GSM",
    year: "2025",
    category: "Software · Hardware",
    summary: "AI-baseret kundeopkald til et flyttefirma med viderestilling til medarbejder.",
    image: telefon.url,
    gallery: [{ url: telefonCode.url, caption: "Python-kode og brugerflade — test af fejlvisning uden forbindelse til GSM-modulet." }],
    documents: [
      { url: gsmDocumentation.url, label: "Download GSM-dokumentation", format: "Word", note: "Udviklingsforløb, programstruktur og brugerflade. Telefonnumre er anonymiseret." },
      { url: gsmSynopsis.url, label: "Download GSM-synopsis", format: "Word · kladde", note: "Den indsendte synopsis indeholder stadig pladsholdere." },
    ],
    problem:
      "Et flyttefirma mistede tid og kunder på ubesvarede opkald. Opgaven var at automatisere de typiske henvendelser med AI – uden at miste den personlige kontakt, når en kunde har brug for et menneske.",
    tools: ["Python", "GSM-modul", "AI-samtale"],
    role: "Udvikler (sammen med en ven)",
    challenge: "At automatisere kundeopkald for et flyttefirma uden at miste den personlige kontakt.",
    process: [
      "Koblede et GSM-modul til en computer og styrede det med Python.",
      "Byggede en AI-baseret samtale, der kunne håndtere typiske henvendelser.",
      "Viderestillede automatisk til en medarbejder ved følsomme oplysninger.",
    ],
    result: "Et fungerende system rettet mod et rigtigt flyttefirmas behov.",
    learned: "At kombinere hardware og software – og at designe efter brugerens behov.",
  },
  {
    slug: "fysik-tmd",
    no: "05",
    title: "Dæmpning af svingninger med Tuned Mass Damper",
    year: "2026",
    category: "Fysik A · Eksamensprojekt",
    summary: "Pendulbaseret tuned mass damper på en modelbygning – teori, forsøg og databehandling.",
    image: tmdForsoeg.url,
    gallery: [
      { url: tmdGraf.url, caption: "Målt svingningsforløb uden TMD — amplituden aftager eksponentielt." },
    ],
    problem:
      "Hvordan dæmper man svingninger i en bygning? Vi byggede en modelbygning og testede en pendulbaseret Tuned Mass Damper (TMD) – samme princip som i Taipei 101 – for at se, om et tunet pendul kan tage energien ud af bygningens svingninger.",
    tools: ["Differentialligninger", "Python", "Excel", "Afstandssensor (VL53L0X)"],
    role: "Gruppeprojekt i Fysik A, HTX Næstved",
    challenge:
      "At opstille en teoretisk model for bygningens dæmpede svingninger og vurdere TMD'ens effekt ved at sammenligne dæmpningskoefficienten med og uden pendul.",
    process: [
      "Opstillede og løste differentialligningen for bygningen som dæmpet harmonisk oscillator – med og uden koblet pendul.",
      "Byggede forsøgsopstillingen med modelbygning, pendul og afstandssensor og indsamlede svingningsdata.",
      "Behandlede data i Python og Excel: amplitude, periodetid, dæmpning og logaritmisk decrement.",
    ],
    result:
      "Alle tre analysemetoder viste samme hovedtendens: dæmpningskoefficienten var større med TMD end uden. Eksamenskarakter: 12.",
    learned:
      "At sammenligne en teoretisk model med målinger – og at vurdere fejlkilder og afvigelser ærligt.",
    report: { url: fysikReport.url, label: "Se eksamensprojekt" },
  },
  {
    slug: "ballofix-ventil",
    no: "06",
    title: "Ballofix kugleventil – CAD og teknisk dokumentation",
    year: "2026",
    category: "DTU 62143 · Igangværende",
    summary: "Komplet CAD-modellering af en Ballofix kugleventil med samlingstegning og rendering i SolidWorks.",
    image: ballofixSnit.url,
    drawing: ballofixSnit.url,
    problem:
      "Hvordan dokumenterer man et industrielt produkt, så det kan fremstilles? Opgaven er at modellere alle komponenter i en Ballofix kugleventil – fra ventilhus og kugle til O-ringe og greb – og levere en komplet teknisk dokumentationspakke.",
    tools: ["SolidWorks", "Samlingstegning", "Exploded view / BOM", "MMTH"],
    role: "Individuelt projekt, DTU 62143 Mekanisk produktdokumentation og -analyse",
    challenge:
      "At modellere alle otte komponenter korrekt med kosmetiske gevind og materialeegenskaber og samle dem i en funktionsdygtig assembly, hvor ventilen kan åbnes og lukkes.",
    process: [
      "Modellerer alle parter: ventilhus, låseskrue, O-ringe, støtteringe, greb, skrue og ventilkugle.",
      "Samler komponenterne i en assembly med undersamlinger, så ventilens bevægelse kan illustreres.",
      "Laver fotorealistisk rendering, samlingstegning med snit og exploded view samt maskintegning af låseskruen.",
    ],
    result: "Projektet er igangværende og afleveres november 2026.",
    learned: "God CAD-skik: kosmetiske gevind, undersamlinger og korrekt tegningspraksis efter MMTH.",
    documents: [
      { url: ballofixBrief.url, label: "Se opgavebeskrivelse", format: "PDF", note: "Den officielle opgave fra DTU – min besvarelse er under udarbejdelse." },
    ],
  },
];

