const zodiacFortunesByMonth = {
    "January": {
        sign: "Capricorn",
        symbol: "♑",
        fortunes: [
            "Discipline will open doors you've been knocking on.",
            "New goals bring unexpected rewards.",
            "Someone respects your hard work more than you realize."
        ]
    },
    "February": {
        sign: "Aquarius",
        symbol: "♒",
        fortunes: [
            "Your unique ideas will inspire those around you.",
            "Let your creativity run wild — it'll pay off.",
            "Stay curious, and you'll uncover something important."
        ]
    },
    "March": {
        sign: "Pisces",
        symbol: "♓",
        fortunes: [
            "Dreams you've been chasing are closer than you think.",
            "Trust your emotions — they hold wisdom.",
            "A peaceful time is coming — enjoy it fully."
        ]
    },
    "April": {
        sign: "Aries",
        symbol: "♈",
        fortunes: [
            "Your courage will lead you to a bold breakthrough.",
            "Take initiative — the universe is on your side.",
            "Energy is your strength — use it wisely."
        ]
    },
    "May": {
        sign: "Taurus",
        symbol: "♉",
        fortunes: [
            "Steady progress will bring unexpected rewards.",
            "Patience will unlock a long-awaited opportunity.",
            "A small comfort brings great joy."
        ]
    },
    "June": {
        sign: "Gemini",
        symbol: "♊",
        fortunes: [
            "New connections will expand your horizons.",
            "Communication opens a surprising door.",
            "Your curiosity leads to a lucky break."
        ]
    },
    "July": {
        sign: "Cancer",
        symbol: "♋",
        fortunes: [
            "Emotional clarity will guide an important decision.",
            "Home brings healing this month.",
            "Open your heart — someone is ready to listen."
        ]
    },
    "August": {
        sign: "Leo",
        symbol: "♌",
        fortunes: [
            "Your passion will light the way to success.",
            "Let your light shine — others are watching.",
            "Be bold — fortune favors the brave."
        ]
    },
    "September": {
        sign: "Virgo",
        symbol: "♍",
        fortunes: [
            "Your attention to detail will save the day.",
            "Organization brings peace of mind.",
            "A fresh plan will lead to success."
        ]
    },
    "October": {
        sign: "Libra",
        symbol: "♎",
        fortunes: [
            "Balance will return where chaos once ruled.",
            "Fairness will guide you to the right choice.",
            "Harmony leads to opportunity."
        ]
    },
    "November": {
        sign: "Scorpio",
        symbol: "♏",
        fortunes: [
            "Secrets revealed will bring powerful growth.",
            "Your intensity inspires others — don't hold back.",
            "Something hidden will soon be clear."
        ]
    },
    "December": {
        sign: "Sagittarius",
        symbol: "♐",
        fortunes: [
            "Adventure awaits — trust the journey ahead.",
            "Explore something new — it’ll change you.",
            "Optimism will open the right door."
        ]
    }
};

let userMonth = 'May'

if (zodiacFortunesByMonth[userMonth]) {
    const zodiac = zodiacFortunesByMonth[userMonth];
    const randomIndex = Math.floor(Math.random() * zodiac.fortunes.length);
    const fortune = zodiac.fortunes[randomIndex];

    console.log("You were born in:", userMonth);
    console.log("Your sign is:", zodiac.sign, zodiac.symbol);
    console.log("🔮 Your fortune:", fortune);
} else {
    console.log("❌ That’s not a valid month. Please try again.");
}
