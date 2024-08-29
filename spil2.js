const spillepladeWindow = document.querySelector('.spilleplade-window');
spillepladeWindow.scrollTop = spillepladeWindow.scrollHeight;

// SPØRGSMÅL OBJEKTER

//Interface Design Spørgsmål
const interfacedesignSpørgsmål = {
    1: {
        spørgsmål: 'Hvad er hovedformålet med en målstyret designproces i interfacedesign?',
        svar: ['At maksimere æstetikken i designet', 'At sikre, at designet opfylder brugernes og forretningens mål', 'At reducere omkostningerne ved udvikling', 'At fokusere udelukkende på visuel appel'],
        rigtigSvar: 'At sikre, at designet opfylder brugernes og forretningens mål'
    },
    2: {
        spørgsmål: 'Hvordan opdeles en effektiv designproces typisk, når man arbejder med interfaces?',
        svar: ['I faser som idéudvikling, skitsering, layout og test', 'I trin som udvikling, markedsføring og salg', 'I sekvenser af kodning, debugging og lancering', 'I stadier af brainstorming og endelig udgivelse'],
        rigtigSvar: 'I faser som idéudvikling, skitsering, layout og test'
    },
    3: {
        spørgsmål: 'Hvordan kan brugeranalyse informere designbeslutninger i et målstyret design?',
        svar: ['Ved at ignorere brugernes feedback', 'Ved at fokusere på virksomhedens interne behov', 'Ved at identificere brugernes behov og mål for at styre designretningen', 'Ved at lade designteamet træffe beslutninger uden input'],
        rigtigSvar: 'Ved at identificere brugernes behov og mål for at styre designretningen'
    },
    4: {
        spørgsmål: 'Hvilke teknikker kan anvendes til at fremme idéudvikling inden for digitalt design?',
        svar: ['Kodning fra start uden planlægning', 'Brainstorming og mind mapping', 'Direkte implementering af konkurrenternes design', 'At udskyde idéudvikling indtil testfasen'],
        rigtigSvar: 'Brainstorming og mind mapping'
    },
    5: {
        spørgsmål: 'Hvad er formålet med skitsering i den tidlige fase af designudviklingen?',
        svar: ['At skabe færdige prototyper', 'At visualisere og eksperimentere med designideer', 'At starte kodning af det endelige produkt', 'At undgå detaljerede overvejelser'],
        rigtigSvar: 'At visualisere og eksperimentere med designideer'
    },
    6: {
        spørgsmål: 'Hvordan adskiller sig konceptet wireframes fra digitale prototyper inden for designteori?',
        svar: ['Wireframes er simple, skeletagtige layouts; prototyper er mere detaljerede og interaktive', 'Wireframes er færdige produkter; prototyper er kun skitser', 'Wireframes fokuserer på farver; prototyper fokuserer på indhold', 'Wireframes er kun til printmedier; prototyper er til digitale medier'],
        rigtigSvar: 'Wireframes er simple, skeletagtige layouts; prototyper er mere detaljerede og interaktive'
    },
    7: {
        spørgsmål: 'Hvad er et task flow, og hvordan bruges det til at forbedre brugeroplevelsen?',
        svar: ['Det er en kodningsplan for udviklere', 'En markedsføringsstrategi for produktlancering', 'En beskrivelse af brugerens vej gennem systemet for at nå et mål', 'En liste over fejl i systemet'],
        rigtigSvar: 'En beskrivelse af brugerens vej gennem systemet for at nå et mål'
    },
    8: {
        spørgsmål: 'Hvordan påvirker typografivalg brugeroplevelsen i digitalt design?',
        svar: ['Typografi har ingen indflydelse på brugeroplevelsen', 'Kun farven på teksten er vigtig', 'Typografi påvirker læsbarhed, hierarki og æstetik', 'Typografi er kun relevant i trykte materialer'],
        rigtigSvar: 'Typografi påvirker læsbarhed, hierarki og æstetik'
    },
    9: {
        spørgsmål: 'Hvilken rolle spiller farveteori i design af brugergrænseflader?',
        svar: ['Farveteori er irrelevant for moderne design', 'Farver bruges kun til dekoration', 'Farver skal altid være neutrale', 'Farver påvirker brugerens følelsesmæssige reaktion og læsbarhed'],
        rigtigSvar: 'Farver påvirker brugerens følelsesmæssige reaktion og læsbarhed'
    },
    10: {
        spørgsmål: 'Hvordan påvirker navigationsdesign brugervenligheden i digitale systemer?',
        svar: ['Navigation er kun vigtig i komplekse systemer', 'Godt navigationsdesign gør det nemt for brugere at finde information og udføre opgaver', 'Navigation bør være skjult for at undgå forstyrrelser', 'Navigation har ingen indflydelse på brugeroplevelsen'],
        rigtigSvar: 'Godt navigationsdesign gør det nemt for brugere at finde information og udføre opgaver'
    },
    11: {
        spørgsmål: 'Hvad forstås ved "tankeløs handling" i konteksten af brugeradfærd?',
        svar: ['Når brugere kan gennemføre opgaver intuitivt uden bevidst at tænke over dem', 'Når brugere laver fejl på grund af dårlig interface', 'Når brugere ignorerer navigationselementer', 'Når brugere ikke forstår interfaceet'],
        rigtigSvar: 'Når brugere kan gennemføre opgaver intuitivt uden bevidst at tænke over dem'
    },
    12: {
        spørgsmål: 'Hvordan kan "style tiles" hjælpe i designprocessen for at sikre konsistens?',
        svar: ['Style tiles bruges til at kode backend-systemer', 'Style tiles er en form for færdige layoutskabeloner', 'Style tiles præsenterer visuelle stilretninger som typografi, farver og UI-elementer for at guide designet', 'Style tiles er kun relevante i printdesign'],
        rigtigSvar: 'Style tiles præsenterer visuelle stilretninger som typografi, farver og UI-elementer for at guide designet'
    },
    13: {
        spørgsmål: 'Hvilke principper ligger bag simplificering af brugerinteraktioner?',
        svar: ['Fjernelse af unødvendige trin og forenkling af interfaceelementer', 'Tilføjelse af flere funktioner for at tilbyde valgmuligheder', 'Skjule vigtig information for at undgå forvirring', 'Gøre interfaceet så komplekst som muligt'],
        rigtigSvar: 'Fjernelse af unødvendige trin og forenkling af interfaceelementer'
    },
    14: {
        spørgsmål: 'Hvorfor er brugertests afgørende for evalueringen af et digitalt interface?',
        svar: ['For at bekræfte udviklernes antagelser uden brugerinvolvering', 'For at identificere problemer og forbedre brugeroplevelsen baseret på faktisk brugerfeedback', 'For at skære ned på udviklingstiden', 'For at lancere produktet hurtigere'],
        rigtigSvar: 'For at identificere problemer og forbedre brugeroplevelsen baseret på faktisk brugerfeedback'
    },
    15: {
        spørgsmål: 'Hvordan kan animationer bruges til at forbedre eller forværre brugeroplevelsen i interaktioner?',
        svar: ['Animationer kan lede brugeren gennem handlinger eller distrahere og frustrere, afhængigt af deres anvendelse', 'Animationer er kun til dekoration', 'Animationer bør undgås i alle designs', 'Animationer har ingen effekt på brugeroplevelsen'],
        rigtigSvar: 'Animationer kan lede brugeren gennem handlinger eller distrahere og frustrere, afhængigt af deres anvendelse'
    },
    16: {
        spørgsmål: 'Hvad er vigtigst at overveje ved design af input- og feedbackmekanismer?',
        svar: ['At ignorere brugerens handlinger', 'At sikre, at brugeren forstår systemets reaktion på deres input gennem klar og konsistent feedback', 'At gøre feedbacken så subtil, at den er usynlig', 'At fokusere på æstetik frem for funktionalitet'],
        rigtigSvar: 'At sikre, at brugeren forstår systemets reaktion på deres input gennem klar og konsistent feedback'
    },
    17: {
        spørgsmål: 'Hvordan kan en organisations afsenderidentitet reflekteres i det digitale interface?',
        svar: ['Gennem konsistent brug af brandfarver, typografi og tone-of-voice', 'Ved at kopiere konkurrenters design', 'Ved at bruge tilfældige designvalg uden hensyn til brand', 'Ved at undgå brandrelaterede elementer helt'],
        rigtigSvar: 'Gennem konsistent brug af brandfarver, typografi og tone-of-voice'
    },
    18: {
        spørgsmål: 'Hvilke outputs bør man forvente i forskellige faser af designprocessen?',
        svar: ['Kode i idéfasen', 'Prototyper før skitsering', 'Skitser, wireframes, style tiles og prototyper afhængig af fasen', 'Markedsføringsplaner under skitsering'],
        rigtigSvar: 'Skitser, wireframes, style tiles og prototyper afhængig af fasen'
    },
    19: {
        spørgsmål: 'Hvilken rolle spiller æstetik i forhold til funktionalitet i designteorier?',
        svar: ['Æstetik er vigtigere end funktionalitet', 'Funktionalitet er vigtigere end æstetik', 'Æstetik og funktionalitet bør integreres for at skabe en helhedsorienteret brugeroplevelse', 'Æstetik er irrelevant i digitalt design'],
        rigtigSvar: 'Æstetik og funktionalitet bør integreres for at skabe en helhedsorienteret brugeroplevelse'
    },
    20: {
        spørgsmål: 'Hvordan interagerer brugeroplevelsen med designprincipperne i et effektivt interface?',
        svar: ['Brugeroplevelsen er uafhængig af designprincipper', 'Designprincipper som brugervenlighed, æstetik og funktionalitet er afgørende for en positiv brugeroplevelse', 'Brugeroplevelsen er kun baseret på visuel appel', 'Brugeroplevelsen påvirkes ikke af designbeslutninger'],
        rigtigSvar: 'Designprincipper som brugervenlighed, æstetik og funktionalitet er afgørende for en positiv brugeroplevelse'
    }
}

//Webtilgængelighed spørgsmål
const webtilgængelighedSpørgsmål = {
    1: {
        spørgsmål: 'Hvad betyder webtilgængelighed?',
        svar: ['At sikre, at et website er usynligt for søgemaskiner', 'At gøre et website brugbart for personer med forskellige funktionsnedsættelser', 'At designe hjemmesider med kun sort og hvid farve', 'At begrænse adgangen til websider baseret på geografisk placering'],
        rigtigSvar: 'At gøre et website brugbart for personer med forskellige funktionsnedsættelser'
    },
    2: {
        spørgsmål: 'Hvad er formålet med alternativ tekst (alt-tekst) til billeder?',
        svar: ['At dekorere billedet med tekst', 'At beskrive billedet for brugere, der ikke kan se det', 'At tilføje skjulte søgeord til SEO', 'At ændre billedets farve'],
        rigtigSvar: 'At beskrive billedet for brugere, der ikke kan se det'
    },
    3: {
        spørgsmål: 'Hvilket værktøj bruges til at teste tilgængeligheden af en hjemmeside?',
        svar: ['Paint', 'Microsoft Word', 'WAVE Web Accessibility Evaluation Tool', 'Windows Media Player'],
        rigtigSvar: 'WAVE Web Accessibility Evaluation Tool'
    },
    4: {
        spørgsmål: 'Hvad er en skærmlæser?',
        svar: ['En app til at tage skærmbilleder', 'Et program, der læser indholdet på skærmen højt for brugere med synsnedsættelser', 'En værktøj til at zoome ind på billeder', 'En videoafspiller'],
        rigtigSvar: 'Et program, der læser indholdet på skærmen højt for brugere med synsnedsættelser'
    },
    5: {
        spørgsmål: 'Hvad betyder WCAG?',
        svar: ['Web Content Accessibility Guidelines', 'Web Content Adjustment Group', 'Web Coding Accessibility Goals', 'Website Color Adjustment Guidelines'],
        rigtigSvar: 'Web Content Accessibility Guidelines'
    },
    6: {
        spørgsmål: 'Hvilket af følgende er en WCAG-princip?',
        svar: ['Komplicerede brugergrænseflader', 'Opfattelighed', 'Inkorrekte fejlkoder', 'Lav kontrast tekst'],
        rigtigSvar: 'Opfattelighed'
    },
    7: {
        spørgsmål: 'Hvad skal farvekontrasten mellem tekst og baggrund være for at være tilgængelig?',
        svar: ['Tilstrækkelig høj for at sikre læsbarhed', 'Så lav som muligt for at være behagelig for øjnene', 'Der er ingen regler for farvekontrast', 'Brug altid kun blå og grøn'],
        rigtigSvar: 'Tilstrækkelig høj for at sikre læsbarhed'
    },
    8: {
        spørgsmål: 'Hvorfor er det vigtigt at kunne navigere på et websted med tastaturet?',
        svar: ['Fordi musen kan gå i stykker', 'Fordi nogle brugere ikke kan bruge en mus og har brug for tastaturnavigation', 'For at gøre hjemmesiden langsommere', 'For at forhindre hackere i at bruge musen'],
        rigtigSvar: 'Fordi nogle brugere ikke kan bruge en mus og har brug for tastaturnavigation'
    },
    9: {
        spørgsmål: 'Hvilken HTML-attribut bruges til at angive, at en formularfelt er obligatorisk?',
        svar: ['disabled', 'autocomplete', 'required', 'color'],
        rigtigSvar: 'required'
    },
    10: {
        spørgsmål: 'Hvad betyder begrebet "tab-order"?',
        svar: ['Den rækkefølge, hvori fanebladene vises i en webbrowser', 'Den rækkefølge, hvori elementer får fokus, når man navigerer med tabulatortasten', 'En funktion til at skifte mellem browserfaner', 'En måde at oprette nye browserfaner på'],
        rigtigSvar: 'Den rækkefølge, hvori elementer får fokus, når man navigerer med tabulatortasten'
    },
    11: {
        spørgsmål: 'Hvad er formålet med at bruge ARIA-roller?',
        svar: ['At ændre farverne på en hjemmeside', 'At oprette links mellem sider', 'At give skærmlæsere yderligere oplysninger om elementers funktioner', 'At øge antallet af billeder på en side'],
        rigtigSvar: 'At give skærmlæsere yderligere oplysninger om elementers funktioner'
    },
    12: {
        spørgsmål: 'Hvad er "skip links"?',
        svar: ['Links, der automatisk springer reklamer over', 'Links, der tillader brugere at springe direkte til hovedindholdet på en side', 'Links, der springer over hele hjemmesiden', 'Links, der springer til en anden hjemmeside'],
        rigtigSvar: 'Links, der tillader brugere at springe direkte til hovedindholdet på en side'
    },
    13: {
        spørgsmål: 'Hvad er en "focus indicator"?',
        svar: ['En visuel markering, der viser, hvilket element der er i fokus, når man navigerer med tastaturet', 'En enhed, der fokuserer kameraet på en skærm', 'Et værktøj til at forstørre tekst', 'En knap til at øge lydstyrken på en hjemmeside'],
        rigtigSvar: 'En visuel markering, der viser, hvilket element der er i fokus, når man navigerer med tastaturet'
    },
    14: {
        spørgsmål: 'Hvorfor bør videoer på en hjemmeside have undertekster?',
        svar: ['For at tilføje flere ord til siden', 'For at gøre videoindholdet tilgængeligt for døve eller hørehæmmede brugere', 'For at ændre videoens sprog', 'For at forbedre videokvaliteten'],
        rigtigSvar: 'For at gøre videoindholdet tilgængeligt for døve eller hørehæmmede brugere'
    },
    15: {
        spørgsmål: 'Hvad betyder "alt-tekst" på et billede?',
        svar: ['En tekst, der vises, når musen holdes over billedet', 'En tekst, der beskriver billedet for brugere med synsnedsættelser', 'En erstatning for billedteksten', 'En måde at ændre billedets størrelse på'],
        rigtigSvar: 'En tekst, der beskriver billedet for brugere med synsnedsættelser'
    },
    16: {
        spørgsmål: 'Hvad er formålet med at bruge semantisk HTML?',
        svar: ['At tilføje flere billeder på en side', 'At lave teksten større', 'At gøre indholdet mere forståeligt for skærmlæsere og søgemaskiner', 'At ændre hjemmesidens baggrundsfarve'],
        rigtigSvar: 'At gøre indholdet mere forståeligt for skærmlæsere og søgemaskiner'
    },
    17: {
        spørgsmål: 'Hvorfor bør man undgå at bruge kun farve til at formidle vigtig information?',
        svar: ['Farver kan gøre websiden langsommere', 'Fordi farveblinde brugere måske ikke kan skelne mellem farverne', 'Fordi det er kedeligt', 'Fordi det kræver mere datalagring'],
        rigtigSvar: 'Fordi farveblinde brugere måske ikke kan skelne mellem farverne'
    },
    18: {
        spørgsmål: 'Hvad er en "responsive" hjemmeside?',
        svar: ['En hjemmeside, der tilpasser sig forskellige skærmstørrelser og enheder', 'En hjemmeside, der kun fungerer på én bestemt browser', 'En hjemmeside, der kun kan ses på en computer', 'En hjemmeside, der reagerer hurtigt på alle input'],
        rigtigSvar: 'En hjemmeside, der tilpasser sig forskellige skærmstørrelser og enheder'
    },
    19: {
        spørgsmål: 'Hvorfor er det vigtigt, at formularfelter har labels?',
        svar: ['For at brugere med skærmlæsere kan forstå, hvad hvert felt er til', 'For at ændre tekstens farve', 'For at gøre feltet større', 'For at tilføje billeder til formularen'],
        rigtigSvar: 'For at brugere med skærmlæsere kan forstå, hvad hvert felt er til'
    },
    20: {
        spørgsmål: 'Hvad er "contrast ratio" i webdesign?',
        svar: ['Forholdet mellem forskellige farver på en side', 'Forholdet mellem lys og mørk farve for at sikre læsbarhed', 'Forholdet mellem antallet af billeder og tekst på en side', 'En måde at reducere antallet af farver på en hjemmeside'],
        rigtigSvar: 'Forholdet mellem lys og mørk farve for at sikre læsbarhed'
    }
}

//Webudvikling spørgsmål
const webudviklingSpørgsmål = {
    1: {
        spørgsmål: 'Hvad står forkortelsen HTML for?',
        svar: ['Hyperlinks Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makeup Language'],
        rigtigSvar: 'Hyper Text Markup Language'
    },
    2: {
        spørgsmål: 'Hvilket HTML-tag bruges til at indsætte et linjeskift?',
        svar: ['&lt;break&gt;', '&lt;br&gt;', '&lt;lb&gt;', '&lt;line&gt;'],
        rigtigSvar: '&lt;br&gt;'
    },
    3: {
        spørgsmål: 'Hvilket tag bruges til at lave den største overskrift i HTML?',
        svar: ['&lt;h1&gt;', '&lt;heading&gt;', '&lt;head&gt;', '&lt;h6&gt;'],
        rigtigSvar: '&lt;h1&gt;'
    },
    4: {
        spørgsmål: 'Hvordan indsætter man et billede i en HTML-side?',
        svar: ['&lt;image src="image.jpg"&gt;', '&lt;img href="image.jpg"&gt;', '&lt;img src="image.jpg"&gt;', '&lt;picture src="image.jpg"&gt;'],
        rigtigSvar: '&lt;img src="image.jpg"&gt;'
    },
    5: {
        spørgsmål: 'Hvilket HTML-tag bruges til at oprette en uordnet liste?',
        svar: ['&lt;ol&gt;', '&lt;ul&gt;', '&lt;list&gt;', '&lt;li&gt;'],
        rigtigSvar: '&lt;ul&gt;'
    },
    6: {
        spørgsmål: 'Hvilken attribut bruges til at angive et links destination i et &lt;a&gt; tag?',
        svar: ['src', 'href', 'link', 'dest'],
        rigtigSvar: 'href'
    },
    7: {
        spørgsmål: 'Hvilket tag bruges til at definere en tabelrække i HTML?',
        svar: ['&lt;table&gt;', '&lt;td&gt;', '&lt;th&gt;', '&lt;tr&gt;'],
        rigtigSvar: '&lt;tr&gt;'
    },
    8: {
        spørgsmål: 'Hvad står forkortelsen CSS for?',
        svar: ['Computer Style Sheets', 'Creative Style System', 'Cascading Style Sheets', 'Colorful Style Scripts'],
        rigtigSvar: 'Cascading Style Sheets'
    },
    9: {
        spørgsmål: 'Hvilken CSS-egenskab bruges til at ændre tekstfarven?',
        svar: ['font-color', 'color', 'text-style', 'text-color'],
        rigtigSvar: 'color'
    },
    10: {
        spørgsmål: 'Hvordan refererer man til et element med id="header" i CSS?',
        svar: ['header { }', '.header { }', '#header { }', '*header { }'],
        rigtigSvar: '#header { }'
    },
    11: {
        spørgsmål: 'Hvilken CSS-egenskab bruges til at ændre baggrundsfarven?',
        svar: ['color-background', 'bgcolor', 'background-color', 'back-color'],
        rigtigSvar: 'background-color'
    },
    12: {
        spørgsmål: 'Hvad er den korrekte måde at inkludere en ekstern CSS-fil i et HTML-dokument?',
        svar: ['&lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;', '&lt;style src="styles.css"&gt;', '&lt;css href="styles.css"&gt;', '&lt;stylesheet&gt;styles.css&lt;/stylesheet&gt;'],
        rigtigSvar: '&lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;'
    },
    13: {
        spørgsmål: 'Hvordan gør man al tekst i et &lt;p&gt; element skrifttypen Arial ved hjælp af CSS?',
        svar: ['text-font: arial;', 'font-family: Arial;', 'font-type: arial;', 'font-style: arial;'],
        rigtigSvar: 'font-family: Arial;'
    },
    14: {
        spørgsmål: 'Hvad betyder værdien block for CSS-egenskaben display?',
        svar: ['Elementet skjules', 'Elementet vises inline med andre elementer', 'Elementet starter på en ny linje og tager hele bredden', 'Elementet flyder til højre'],
        rigtigSvar: 'Elementet starter på en ny linje og tager hele bredden'
    },
    15: {
        spørgsmål: 'Hvordan skriver man "Hello World" i en alert-boks i JavaScript?',
        svar: ['msgBox("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");'],
        rigtigSvar: 'alert("Hello World");'
    },
    16: {
        spørgsmål: 'Hvad er den korrekte syntaks for at referere til et eksternt JavaScript-fil?',
        svar: ['&lt;script src="script.js"&gt;&lt;/script&gt;', '&lt;script href="script.js"&gt;&lt;/script&gt;', '&lt;script ref="script.js"&gt;&lt;/script&gt;', '&lt;script name="script.js"&gt;&lt;/script&gt;'],
        rigtigSvar: '&lt;script src="script.js"&gt;&lt;/script&gt;'
    },
    17: {
        spørgsmål: 'Hvordan definerer man en funktion i JavaScript?',
        svar: ['function: myFunction() { }', 'function myFunction() { }', 'def myFunction() { }', 'function = myFunction() { }'],
        rigtigSvar: 'function myFunction() { }'
    },
    18: {
        spørgsmål: 'Hvordan skriver man en betingelse, der tjekker om variablen "i" er lig med 5?',
        svar: ['if i = 5', 'if (i <> 5)', 'if (i == 5)', 'if (i != 5)'],
        rigtigSvar: 'if (i == 5)'
    },
    19: {
        spørgsmål: 'Hvilken af følgende er en måde at kommentere en enkelt linje på i JavaScript?',
        svar: ['&lt;!-- This is a comment --&gt;', '// This is a comment', '/* This is a comment */', '** This is a comment **'],
        rigtigSvar: '// This is a comment'
    },
    20: {
        spørgsmål: 'Hvordan kan man tilføje et element til slutningen af en array i JavaScript?',
        svar: ['array.add("element");', 'array.push("element");', 'array.insert("element");', 'array.append("element");'],
        rigtigSvar: 'array.push("element");'
    }
};

//WordPress Spørgsmål
const wordpressSpørgsmål = {
    1: {
        spørgsmål: 'Hvad er WordPress?',
        svar: ['Et billedredigeringsprogram', 'En musikafspiller', 'Et content management system (CMS)', 'En videoafspiller'],
        rigtigSvar: 'Et content management system (CMS)'
    },
    2: {
        spørgsmål: 'Hvad bruges en "theme" til i WordPress?',
        svar: ['At ændre udseendet og layoutet på din hjemmeside', 'At installere sikkerhedsopdateringer', 'At slette indlæg på din blog', 'At uploade videoer'],
        rigtigSvar: 'At ændre udseendet og layoutet på din hjemmeside'
    },
    3: {
        spørgsmål: 'Hvordan tilføjer du en ny plugin til din WordPress hjemmeside?',
        svar: ['Ved at redigere din computers registreringsdatabase', 'Ved at gå til Plugins-menuen og vælge "Add New"', 'Ved at købe en ny computer', 'Ved at genstarte din browser'],
        rigtigSvar: 'Ved at gå til Plugins-menuen og vælge "Add New"'
    },
    4: {
        spørgsmål: 'Hvad er en widget i WordPress?',
        svar: ['En skærmskåner', 'En type malware', 'Et lille modul, der tilføjer funktioner til sidebjælker og footers', 'En backup-fil'],
        rigtigSvar: 'Et lille modul, der tilføjer funktioner til sidebjælker og footers'
    },
    5: {
        spørgsmål: 'Hvordan kan du ændre permalink-strukturen i WordPress?',
        svar: ['Ved at slette hele hjemmesiden', 'Ved at ændre farven på hjemmesiden', 'Ved at gå til "Settings" og derefter "Permalinks"', 'Ved at downloade en Word-dokument'],
        rigtigSvar: 'Ved at gå til "Settings" og derefter "Permalinks"'
    },
    6: {
        spørgsmål: 'Hvad er "responsive design" i forhold til WordPress?',
        svar: ['En måde at lave et website, der kun fungerer på desktop', 'Et design, der automatisk tilpasser sig forskellige skærmstørrelser', 'Et plugin, der tilføjer musik til hjemmesiden', 'Et tema, der bruger kun sort/hvid farver'],
        rigtigSvar: 'Et design, der automatisk tilpasser sig forskellige skærmstørrelser'
    },
    7: {
        spørgsmål: 'Hvad er formålet med WordPress “Customizer”?',
        svar: ['At lave ændringer i udseendet af dit website i realtid', 'At opdatere dine plugins', 'At eksportere dit website som PDF', 'At oversætte dit website til fransk'],
        rigtigSvar: 'At lave ændringer i udseendet af dit website i realtid'
    },
    8: {
        spørgsmål: 'Hvordan kan du sikre din WordPress hjemmeside?',
        svar: ['Ved at ignorere sikkerhedsopdateringer', 'Ved at installere et sikkerhedsplugin som Wordfence', 'Ved at dele dine adgangskoder med alle', 'Ved at deaktivere al sikkerhed'],
        rigtigSvar: 'Ved at installere et sikkerhedsplugin som Wordfence'
    },
    9: {
        spørgsmål: 'Hvad er et child theme i WordPress?',
        svar: ['En underordnet version af et tema, der kan tilpasses uden at ændre hovedtemaet', 'Et tema, der kun er for børn', 'En backup-fil', 'En version af temaet til brug på tablets'],
        rigtigSvar: 'En underordnet version af et tema, der kan tilpasses uden at ændre hovedtemaet'
    },
    10: {
        spørgsmål: 'Hvordan opretter du en ny side i WordPress?',
        svar: ['Gå til "Pages" og klik på "Add New"', 'Ved at genstarte computeren', 'Ved at deaktivere alle plugins', 'Ved at formatere harddisken'],
        rigtigSvar: 'Gå til "Pages" og klik på "Add New"'
    },
    11: {
        spørgsmål: 'Hvad er en permalink i WordPress?',
        svar: ['En permanent URL til en specifik side eller post', 'Et værktøj til at justere billeder', 'En fil, der opbevares på din computer', 'En type af cookies'],
        rigtigSvar: 'En permanent URL til en specifik side eller post'
    },
    12: {
        spørgsmål: 'Hvad er en post i WordPress?',
        svar: ['Et billede på forsiden af et blad', 'En e-mail', 'En type indhold, der typisk bruges til blogindlæg', 'En videoafspiller'],
        rigtigSvar: 'En type indhold, der typisk bruges til blogindlæg'
    },
    13: {
        spørgsmål: 'Hvad bruges en "page builder" plugin som Elementor til?',
        svar: ['At skabe og designe sider ved hjælp af en træk-og-slip editor', 'At downloade billeder fra internettet', 'At slette indlæg fra din blog', 'At opdatere dine browser plugins'],
        rigtigSvar: 'At skabe og designe sider ved hjælp af en træk-og-slip editor'
    },
    14: {
        spørgsmål: 'Hvordan kan du ændre titlen på din WordPress hjemmeside?',
        svar: ['Ved at ændre computernavnet', 'Ved at nulstille din browser', 'Gå til "Settings" og derefter "General" for at ændre Site Title', 'Ved at ændre farven på dit tema'],
        rigtigSvar: 'Gå til "Settings" og derefter "General" for at ændre Site Title'
    },
    15: {
        spørgsmål: 'Hvad er formålet med en kontaktformular på en WordPress hjemmeside?',
        svar: ['At slette gamle e-mails', 'At give besøgende mulighed for at sende dig beskeder direkte fra hjemmesiden', 'At uploade videoer', 'At oprette nye blogindlæg'],
        rigtigSvar: 'At give besøgende mulighed for at sende dig beskeder direkte fra hjemmesiden'
    },
    16: {
        spørgsmål: 'Hvad er en multisite installation i WordPress?',
        svar: ['At have flere browsere åbne samtidig', 'At installere flere temaer på én gang', 'At administrere flere WordPress-websteder fra en enkelt installation', 'At opdatere flere plugins samtidigt'],
        rigtigSvar: 'At administrere flere WordPress-websteder fra en enkelt installation'
    },
    17: {
        spørgsmål: 'Hvordan opretter du en menu i WordPress?',
        svar: ['Ved at gå til "Appearance" og vælge "Menus"', 'Ved at downloade en PDF', 'Ved at skifte computeren ud', 'Ved at opdatere dit tema'],
        rigtigSvar: 'Ved at gå til "Appearance" og vælge "Menus"'
    },
    18: {
        spørgsmål: 'Hvad er en SSL-certifikat, og hvorfor er det vigtigt for din WordPress hjemmeside?',
        svar: ['En måde at ændre hjemmesidens baggrundsfarve', 'Et sikkerhedscertifikat, der krypterer data mellem browseren og serveren', 'En type server, der hoster dit website', 'En slags antivirusprogram'],
        rigtigSvar: 'Et sikkerhedscertifikat, der krypterer data mellem browseren og serveren'
    },
    19: {
        spørgsmål: 'Hvad er en “slug” i WordPress?',
        svar: ['En type skadeligt program', 'Den del af URLen, der kommer efter domænenavnet og identificerer en specifik side eller indlæg', 'Et andet ord for tema', 'Et plugin til at slette billeder'],
        rigtigSvar: 'Den del af URLen, der kommer efter domænenavnet og identificerer en specifik side eller indlæg'
    },
    20: {
        spørgsmål: 'Hvad bruges en "cache plugin" som W3 Total Cache til?',
        svar: ['At øge hjemmesidens hastighed ved at gemme midlertidige kopier af sider', 'At slette gamle blogindlæg', 'At tilføje musik til hjemmesiden', 'At ændre hjemmesidens domænenavn'],
        rigtigSvar: 'At øge hjemmesidens hastighed ved at gemme midlertidige kopier af sider'
    }
};

//Spørgsmåls-kategori-knapper
const interfacedesignKnap = document.getElementById('interfacedesign-knap');
const webtilgængelighedKnap = document.getElementById('webtilgængelighed-knap'); 
const webudviklingKnap = document.getElementById('webudvikling-knap');
const wordpressKnap = document.getElementById('wordpress-knap');

// EventListeners på kategori-knapper
interfacedesignKnap.addEventListener('click', function() {
    visSpørgsmål(interfacedesignSpørgsmål);
});
webtilgængelighedKnap.addEventListener('click', function() {
    visSpørgsmål(webtilgængelighedSpørgsmål);
});
webudviklingKnap.addEventListener('click', function () {
    visSpørgsmål(webudviklingSpørgsmål);
})
wordpressKnap.addEventListener('click', function () {
    visSpørgsmål(wordpressSpørgsmål);
})

//Spørgsmål-kort
const spørgsmålKort = document.getElementById('spørgsmål-kort');

//Spørgsmål-kort som udgangspunkt gemt
spørgsmålKort.style.display = 'none';

//Vis Spørgsmål funktion
function visSpørgsmål(kategori) {
    const kortKategori = document.getElementById('spørgsmålsoverskrift');
    const spørgsmål = document.getElementById('spørgsmål');
    const svarKasser = document.querySelectorAll('.svar');

    //Vis spørgsmål kort
    spørgsmålKort.style.display = 'flex';

    //Skygge på boks og spørgsmålsoverskrift
    if (kategori === interfacedesignSpørgsmål) {
        spørgsmålKort.className = 'rød-skygge';
        kortKategori.innerHTML = 'Interfacedesign';
    } else if (kategori === webtilgængelighedSpørgsmål) {
        spørgsmålKort.className = 'grøn-skygge';
        kortKategori.innerHTML = 'Webtilgængelighed';
    } else if (kategori === webudviklingSpørgsmål) {
        spørgsmålKort.className = 'blå-skygge';
        kortKategori.innerHTML = 'Webudvikling';
    } else {
        spørgsmålKort.className = 'sort-skygge';
        kortKategori.innerHTML = 'Wordpress';
    };

    //Tilbageværende spørgsmål efter allerede vist spørgsmål er blevet slettet
    const tilbageværendeSpørgsmål = Object.keys(kategori);

    //Generér random nummer
    const randomNummer = Math.floor(Math.random() * tilbageværendeSpørgsmål.length);

    //Få navn på Key på random nummers index
    const randomKey = tilbageværendeSpørgsmål[randomNummer];

    //Display spørgsmål
    spørgsmål.innerHTML = kategori[randomKey].spørgsmål;

    //Definér korrekt svar
    const korrektSvar = kategori[randomKey].rigtigSvar;

    //Display svar
    let svarMuligheder = kategori[randomKey].svar;

    svarKasser.forEach(function(element, index) {
        element.innerHTML = svarMuligheder[index];

        //slet evt bg-farve
        element.style.backgroundColor = ''; //indsæt normal bg-farve

        element.addEventListener('click', reagérPåSvar);
    });

    function reagérPåSvar (event) {
        let valgtSvar = event.target.innerHTML;
    
        if (valgtSvar === korrektSvar) {
            event.target.style.backgroundColor = 'green';
            // TILFØJ NOGET DER SIGER AT DU MÅ SLÅ MED TERNING OG RYKKE
        } else {
            event.target.style.backgroundColor = 'red';
            // TILFØJ NOGET DER SIGER AT TUREN SKIFTER
        }
        
        //Fjern eventListeners efter at svar er givet 
        svarKasser.forEach(function(element) {
            element.removeEventListener('click', reagérPåSvar);
        })
    }

    //Slet allerede vist spørgsmål
    delete kategori[randomKey];

    const kortKryds = document.getElementById('luk-knap');
    kortKryds.addEventListener('click', function () {
        spørgsmålKort.style.display = 'none';
    })
}

// Brikker
const brikker = document.querySelectorAll('.brik');

// Gør brikkerne draggable
brikker.forEach(function (element) {

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    function startDrag(e) {
        e.preventDefault();

        const event = e.type.startsWith('touch') ? e.touches[0] : e;

        // Get the current mouse/touch position relative to the element
        offsetX = event.clientX - element.offsetLeft;
        offsetY = event.clientY - element.offsetTop;
        isDragging = true;
    }

    function doDrag(e) {
        if (isDragging) {
            e.preventDefault();

            const event = e.type.startsWith('touch') ? e.touches[0] : e;

            // Update element's position to follow the mouse/touch
            element.style.left = `${event.clientX - offsetX}px`;
            element.style.top = `${event.clientY - offsetY}px`;
        }
    }

    function endDrag() {
        isDragging = false;
    }

    // Mouse events
    element.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', endDrag);

    // Touch events
    element.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', doDrag);
    document.addEventListener('touchend', endDrag);
});

//Terning
const terning = document.getElementById('terning');

//Terningeslag
terning.addEventListener('click', function () {
    let terningeSlag = Math.floor(Math.random() * 6) + 1;
    terning.innerHTML = terningeSlag;

    if (spørgsmålKort.style.display === 'flex') {
        spørgsmålKort.style.display = 'none';
    }
})


