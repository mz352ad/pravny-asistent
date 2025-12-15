export const initialChatState = {
  messages: [],
  isTyping: false,
  currentConversationId: null
};

export const sampleConversations = [
  {
    id: "conv-1",
    title: "Výpoveď z pracovného pomeru",
    timestamp: "2024-12-11T14:30:00",
    messages: [
      {
        id: "msg-1",
        role: "user",
        content: "Aké sú moje práva ako zamestnanca pri výpovedi z pracovného pomeru?",
        timestamp: "2024-12-11T14:30:00"
      },
      {
        id: "msg-2",
        role: "assistant",
        content: "Na základe slovenských súdnych rozhodnutí a Zákonníka práce máte ako zamestnanec pri výpovedi nasledovné práva:\n\n**1. Výpovedná doba**\nPodľa § 62 Zákonníka práce máte nárok na výpovednú dobu, ktorá je najmenej jeden mesiac. Ak pracovný pomer trval najmenej jeden rok, výpovedná doba je najmenej dva mesiace.\n\n**2. Odstupné**\nPri výpovedi zo strany zamestnávateľa z organizačných dôvodov máte nárok na odstupné podľa § 76 Zákonníka práce.\n\n**3. Formálne náležitosti**\nVýpoveď musí byť písomná a doručená, inak je neplatná (viď rozhodnutie 3Cdo/123/2022).",
        timestamp: "2024-12-11T14:30:15",
        sources: [
          {
            id: "3Cdo/123/2022",
            title: "Neplatnosť výpovede z pracovného pomeru",
            court: "Najvyšší súd SR"
          }
        ]
      }
    ]
  },
  {
    id: "conv-2",
    title: "Náhrada škody",
    timestamp: "2024-12-10T10:15:00",
    messages: [
      {
        id: "msg-3",
        role: "user",
        content: "Ako sa určuje výška náhrady škody pri pracovnom úraze?",
        timestamp: "2024-12-10T10:15:00"
      },
      {
        id: "msg-4",
        role: "assistant",
        content: "Výška náhrady škody pri pracovnom úraze sa určuje na základe viacerých faktorov, ktoré vychádzajú z rozhodnutí Najvyššieho súdu SR:\n\n**Skutočná škoda**\nZahŕňa náklady na liečenie, rehabilitáciu a ďalšie výdavky priamo spojené s úrazom.\n\n**Ušlý zisk**\nRozdiel medzi príjmom pred úrazom a príjmom po úraze, vrátane nemocenských dávok.\n\n**Bolestné a sťaženie spoločenského uplatnenia**\nStanovuje sa bodovým systémom podľa lekárskeho posudku.",
        timestamp: "2024-12-10T10:15:20",
        sources: [
          {
            id: "1Cdo/45/2023",
            title: "Náhrada škody pri pracovnom úraze",
            court: "Najvyšší súd SR"
          }
        ]
      }
    ]
  }
];

export const generateAssistantResponse = (userMessage) => {
  // Simulated responses based on keywords
  const responses = {
    výpoveď: {
      content: "Na základe slovenských súdnych rozhodnutí vám môžem poskytnúť informácie o výpovedi z pracovného pomeru.\n\n**Kľúčové body:**\n\n1. **Písomná forma** - Výpoveď musí byť vždy písomná\n2. **Doručenie** - Musí byť riadne doručená druhej strane\n3. **Výpovedná doba** - Začína plynúť od prvého dňa nasledujúceho mesiaca\n4. **Dôvody** - Zamestnávateľ musí uviesť zákonný dôvod výpovede\n\nPodľa rozhodnutia Najvyššieho súdu SR (3Cdo/123/2022) je výpoveď bez dodržania formálnych náležitostí neplatná.",
      sources: [
        { id: "3Cdo/123/2022", title: "Neplatnosť výpovede", court: "Najvyšší súd SR" }
      ]
    },
    škoda: {
      content: "Problematika náhrady škody je upravená v Občianskom zákonníku a špecificky v pracovnoprávnych vzťahoch Zákonníkom práce.\n\n**Druhy náhrady škody:**\n\n1. **Skutočná škoda** - Preukázateľné zníženie majetku\n2. **Ušlý zisk** - Zisk, ktorý by poškodený dosiahol\n3. **Nemajetková ujma** - Pri zásahu do osobnostných práv\n\nSúdna prax potvrdzuje, že škoda musí byť preukázaná a jej výška vyčíslená.",
      sources: [
        { id: "1Cdo/45/2023", title: "Náhrada škody pri pracovnom úraze", court: "Najvyšší súd SR" },
        { id: "2Cdo/89/2023", title: "Náhrada nemajetkovej ujmy", court: "Najvyšší súd SR" }
      ]
    },
    zmluva: {
      content: "Platnosť zmluvy podľa slovenského práva vyžaduje splnenie niekoľkých podmienok:\n\n**Základné náležitosti:**\n\n1. **Spôsobilosť strán** - Zmluvné strany musia byť spôsobilé na právne úkony\n2. **Slobodná vôľa** - Prejav vôle nesmie byť vynútený\n3. **Určitosť obsahu** - Predmet zmluvy musí byť jasne vymedzený\n4. **Zákonnosť** - Zmluva nesmie odporovať zákonu\n\nNedodržanie týchto podmienok môže viesť k neplatnosti zmluvy.",
      sources: [
        { id: "5Obdo/67/2023", title: "Zodpovednosť za plnenie zmluvy", court: "Najvyšší súd SR" }
      ]
    },
    default: {
      content: "Ďakujem za vašu otázku. Na základe dostupných súdnych rozhodnutí slovenských súdov vám môžem poskytnúť relevantné informácie.\n\n**Upozornenie:**\nTieto informácie majú informatívny charakter a nenahrádzajú právne poradenstvo. Pre konkrétny prípad odporúčam konzultáciu s advokátom.\n\nMôžete mi položiť konkrétnejšiu otázku týkajúcu sa:\n- Pracovného práva\n- Občianskeho práva\n- Obchodného práva\n- Trestného práva",
      sources: []
    }
  };

  const messageLower = userMessage.toLowerCase();
  
  if (messageLower.includes("výpoveď") || messageLower.includes("vypoved")) {
    return responses.výpoveď;
  } else if (messageLower.includes("škod") || messageLower.includes("nahra")) {
    return responses.škoda;
  } else if (messageLower.includes("zmluv") || messageLower.includes("zmluvy")) {
    return responses.zmluva;
  }
  
  return responses.default;
};