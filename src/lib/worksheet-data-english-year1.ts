import type { WorksheetItem } from "./worksheet-types";

export const year1EnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Blends & Digraphs ───────────────────────────────
  {
    slug: "blends-and-digraphs",
    title: "Blends and Digraphs",
    strand: "Language",
    description:
      "Read and spell words with consonant blends (bl, cr, st) and digraphs (sh, ch, th) — expanding phonics knowledge beyond simple CVC words.",
    learningGuide: {
      concept:
        "A blend is two consonants side by side where both sounds are heard (bl, cr, st). A digraph is two letters that make one new sound (sh = /sh/, ch = /ch/, th = /th/). Mastering these unlocks hundreds of new words for reading and writing.",
      activation:
        "Ask your child: 'Can you read the word SHOP? Let's try: sh makes /sh/, then o, then p — shop!' Say these mouth-feel comparisons: 's' alone versus 'sh' together — notice how the mouth changes?",
      check:
        "Write 5 words using blends and digraphs (e.g. ship, clap, this, stop, chop). Can your child decode them independently by blending each phoneme?",
    },
    lesson: {
      title: "Blends and Digraphs — Two Letters, One Sound",
      objective:
        "Read and spell one-syllable words containing consonant blends and common digraphs.",
      materials: [
        "Pencil and paper",
        "Index cards or cut paper pieces (for word sorting)",
        "A highlighter or coloured pencil",
      ],
      intro: {
        title: "Two Letters Working Together",
        script:
          "You know your alphabet sounds really well now. Today we are going to look at letters that team up! When 's' and 'h' work together, they make a brand new sound — /sh/. Say /sh/ with me. Now try /ch/ — like at the start of cheese. And /th/ — like at the start of this. These are called digraphs. Now try blends: /bl/ like blue, /cr/ like crab, /st/ like stop. In a blend, you can still hear both letters — just squished together!",
        action:
          "Highlight the digraph or blend in the example words: shop, chip, this, blue, crab, stop. Let your child say each word slowly.",
      },
      mainActivity: {
        title: "Sort Words by their Blend or Digraph",
        script:
          "I am going to give you some words and your job is to find the blend or digraph at the start. Sort them into the right group. Ready? Ship — what are the first two letters? S and H — that is sh, so it goes in the digraph group!",
        action:
          "Write these words on slips of paper: shop, chip, thin, blue, crab, stop, shed, chin, three, black, cream, step. Sort them into blend vs. digraph columns.",
      },
      wrapUp: {
        title: "Build a Blend Word",
        script:
          "Now let us build some words from scratch. I will give you a blend or digraph and you add sounds to make a real word. Blend: /st/ — what can you add? ...op! Stop! /sh/ + ... ip! Ship! Let us see how many we can make!",
        action:
          "Take turns calling out a blend or digraph and both player add letters to make a real word. Keep a list of all the words you make.",
      },
      parentTip:
        "Highlight the digraph or blend in two-letter pairs using a different colour when your child writes — this draws visual attention to the combination and reinforces the pattern. Always connect to real words your child uses in speech.",
      extension:
        "Go on a blend and digraph hunt in a picture book or newspaper. How many words with 'sh', 'ch', 'th', 'bl', 'cr' and 'st' can you find? Underline them in pencil. This aligns with AC V9 Year 1 — blending digraphs to read one-syllable words.",
      resources: [
        {
          title: "Starfall — Digraphs and Blends",
          url: "https://www.starfall.com/h/learn-to-read/",
          description:
            "Interactive phonics activities specifically targeting blends and digraphs for Year 1 students.",
        },
        {
          title: "ABC Education — Phonics Year 1",
          url: "https://www.abc.net.au/education/learn-english/phonics/",
          description:
            "Australian Curriculum-aligned phonics videos and activities for Year 1.",
        },
        {
          title: "Reading Eggs — Blends and Digraphs",
          url: "https://readingeggs.com.au/",
          description:
            "Structured lessons covering consonant blends and digraphs with automatic progress tracking.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): sh, ch, th digraphs ───
      // 1
      { type: "circle-correct" as const, title: "What Sound Does It Start With? (Set A)", instruction: "Say each word. Circle the beginning sound.", parentTip: "A digraph is two letters making one new sound: sh, ch, th.", questions: [ { prompt: "ship", options: ["sh", "ch", "th"] }, { prompt: "chin", options: ["sh", "ch", "th"] }, { prompt: "thin", options: ["sh", "ch", "th"] } ] },
      // 2
      { type: "circle-correct" as const, title: "What Sound Does It Start With? (Set B)", instruction: "Circle the digraph at the beginning of each word.", questions: [ { prompt: "shed", options: ["sh", "ch", "th"] }, { prompt: "chop", options: ["sh", "ch", "th"] }, { prompt: "three", options: ["sh", "ch", "th"] }, { prompt: "shop", options: ["sh", "ch", "th"] } ] },
      // 3
      { type: "matching" as const, title: "Match Digraphs to Words (Set A)", instruction: "Draw a line from each digraph to a word that starts with it.", parentTip: "Say the digraph sound aloud before looking at the words.", left: ["sh", "ch", "th"], right: ["chin", "ship", "this"] },
      // 4
      { type: "sorting" as const, title: "Sort Digraph Words (Set A)", instruction: "Sort each word by its beginning digraph.", columns: ["sh- words", "ch- words", "th- words"], items: [ { label: "shop" }, { label: "chip" }, { label: "thin" }, { label: "shed" }, { label: "chin" }, { label: "three" } ] },
      // 5
      { type: "open-response" as const, title: "Write Digraph Words (Set A)", instruction: "Write a word that starts with each digraph.", parentTip: "Let your child think of their own words. Struggling is valuable learning.", prompts: [ { text: "sh- word: ______", type: "lines" as const, lines: 1 }, { text: "ch- word: ______", type: "lines" as const, lines: 1 }, { text: "th- word: ______", type: "lines" as const, lines: 1 } ] },
      // 6
      { type: "circle-correct" as const, title: "Complete the Word (Set A)", instruction: "Circle the digraph that completes each word.", questions: [ { prompt: "___ip (a type of boat)", options: ["sh", "ch", "bl"] }, { prompt: "___op (to cut)", options: ["ch", "th", "st"] }, { prompt: "___is (not that)", options: ["th", "sh", "cr"] } ] },
      // 7
      { type: "matching" as const, title: "Match Digraphs to Words (Set B)", instruction: "Draw a line from each digraph to a word.", left: ["sh", "ch", "th"], right: ["that", "shell", "chest"] },
      // 8
      { type: "open-response" as const, title: "Sound Boxes: Digraphs (Set A)", instruction: "Write the sounds in each word. The digraph goes in ONE box.", parentTip: "sh-i-p has 3 sounds but starts with a digraph (2 letters, 1 sound).", prompts: [ { text: "[__][__][__] → ship", type: "lines" as const, lines: 1 }, { text: "[__][__][__] → chop", type: "lines" as const, lines: 1 }, { text: "[__][__][__] → thin", type: "lines" as const, lines: 1 } ] },
      // 9
      { type: "sorting" as const, title: "Sort Digraph Words (Set B)", instruction: "Sort each word by its beginning digraph.", columns: ["sh-", "ch-", "th-"], items: [ { label: "shall" }, { label: "check" }, { label: "thick" }, { label: "shout" }, { label: "cheer" }, { label: "thank" } ] },
      // 10
      { type: "circle-correct" as const, title: "Which Word Starts With sh?", instruction: "Circle the word that starts with sh.", questions: [ { prompt: "Which starts with sh?", options: ["shop", "chop", "top"] }, { prompt: "Which starts with sh?", options: ["chin", "thin", "shin"] }, { prompt: "Which starts with sh?", options: ["shell", "tell", "bell"] } ] },
      // 11
      { type: "matching" as const, title: "Match Words to Clues: Digraphs", instruction: "Draw a line from each clue to the correct digraph word.", left: ["A place to buy things", "You put food on it (not flat)", "A number after two"], right: ["three", "shop", "chip"] },
      // 12
      { type: "open-response" as const, title: "Draw and Write Digraph Words", instruction: "Draw a picture for each digraph word. Write the word underneath.", prompts: [ { text: "Draw: ship", type: "box" as const }, { text: "Draw: cheese", type: "box" as const } ] },
      // 13
      { type: "circle-correct" as const, title: "Complete the Word (Set B)", instruction: "Circle the correct digraph.", parentTip: "Sound out each option before choosing.", questions: [ { prompt: "___ell (something you find at the beach)", options: ["sh", "ch", "th"] }, { prompt: "___ick (not thin)", options: ["th", "sh", "ch"] }, { prompt: "___air (you sit on it)", options: ["ch", "sh", "th"] }, { prompt: "___oe (you wear it on your foot)", options: ["sh", "ch", "th"] } ] },
      // 14
      { type: "sequence" as const, title: "Build Digraph Words (Set A)", instruction: "Put the sounds in order to spell the word.", parentTip: "Say each sound, then blend them left to right.", items: [ { label: "sh + o + p = ______ (where you buy things)" }, { label: "ch + i + p = ______ (a crunchy snack)" }, { label: "th + i + n = ______ (not fat)" } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Tip: Digraphs — Two Letters, One Sound!", instruction: "A digraph is when two letters team up to make ONE new sound. 'sh' makes /sh/ (like in ship). 'ch' makes /ch/ (like in chin). 'th' makes /th/ (like in this). Remember: you cannot hear the separate letters — they make a brand new sound together!", parentTip: "Emphasise that the two letters make a completely different sound from either letter alone.", prompts: [ { text: "Write 3 words with sh: ______", type: "lines" as const, lines: 1 }, { text: "Write 3 words with ch: ______", type: "lines" as const, lines: 1 } ] },
      // 16
      { type: "sorting" as const, title: "Sort: Digraph at the Start or End?", instruction: "Some digraphs can appear at the END of a word too! Sort each word.", columns: ["Digraph at START", "Digraph at END"], items: [ { label: "shop" }, { label: "fish" }, { label: "chip" }, { label: "much" }, { label: "this" }, { label: "bath" } ] },
      // 17
      { type: "circle-correct" as const, title: "Ending Digraphs (Set A)", instruction: "Circle the digraph at the END of each word.", questions: [ { prompt: "fish", options: ["sh", "ch", "th"] }, { prompt: "much", options: ["sh", "ch", "th"] }, { prompt: "bath", options: ["sh", "ch", "th"] }, { prompt: "wish", options: ["sh", "ch", "th"] } ] },
      // 18
      { type: "open-response" as const, title: "Write Words with Ending Digraphs", instruction: "Write a word that ENDS with each digraph.", prompts: [ { text: "Ends with -sh: ______", type: "lines" as const, lines: 1 }, { text: "Ends with -ch: ______", type: "lines" as const, lines: 1 }, { text: "Ends with -th: ______", type: "lines" as const, lines: 1 } ] },
      // 19
      { type: "matching" as const, title: "Match Words with Same Digraph", instruction: "Draw a line to match words that share the same digraph.", left: ["ship", "chin", "this", "fish", "much"], right: ["bath", "shop", "chop", "wish", "that"] },
      // 20 — SPARK
      { type: "open-response" as const, title: "Digraph Spark: Digraphs All Around!", instruction: "Look around the room. Can you find or think of something that has a digraph (sh, ch, th) in its name? A shoe? A chair? Think of as many as you can!", parentTip: "Connecting phonics to real objects makes the learning stick.", prompts: [ { text: "Objects with digraphs: ___________________________", type: "lines" as const, lines: 2 } ] },
      // ─── DEVELOPING (21–50): Blends (bl, cl, cr, st, br, gr, fl, etc.) ───
      // 21
      { type: "circle-correct" as const, title: "What Blend Does It Start With? (Set A)", instruction: "Circle the blend at the beginning of each word.", parentTip: "A blend is two consonants where you can hear BOTH sounds: bl, cr, st.", questions: [ { prompt: "blue", options: ["bl", "cl", "cr"] }, { prompt: "stop", options: ["st", "sp", "sl"] }, { prompt: "crab", options: ["cr", "cl", "gr"] } ] },
      // 22
      { type: "sorting" as const, title: "Sort Blend Words (Set A)", instruction: "Sort each word by its beginning blend.", columns: ["bl-", "cl-", "st-", "cr-"], items: [ { label: "blue" }, { label: "clap" }, { label: "stop" }, { label: "crab" }, { label: "black" }, { label: "class" }, { label: "step" }, { label: "crash" } ] },
      // 23
      { type: "matching" as const, title: "Match Blends to Words (Set A)", instruction: "Draw a line from each blend to a word that starts with it.", left: ["bl", "cr", "st", "cl", "br"], right: ["clap", "brown", "crab", "blue", "stop"] },
      // 24
      { type: "open-response" as const, title: "Write Blend Words (Set A)", instruction: "Write a word that starts with each blend.", prompts: [ { text: "bl- word: ______", type: "lines" as const, lines: 1 }, { text: "cr- word: ______", type: "lines" as const, lines: 1 }, { text: "st- word: ______", type: "lines" as const, lines: 1 }, { text: "cl- word: ______", type: "lines" as const, lines: 1 } ] },
      // 25
      { type: "circle-correct" as const, title: "Complete the Word: Blends (Set A)", instruction: "Circle the blend that completes each word.", questions: [ { prompt: "___ue (a colour)", options: ["bl", "cl", "fl"] }, { prompt: "___op (do not go)", options: ["st", "sp", "sl"] }, { prompt: "___ab (a sea creature)", options: ["cr", "gr", "br"] }, { prompt: "___ap (hands together)", options: ["cl", "bl", "fl"] } ] },
      // 26
      { type: "circle-correct" as const, title: "What Blend Does It Start With? (Set B)", instruction: "Circle the beginning blend.", questions: [ { prompt: "green", options: ["gr", "gl", "cr"] }, { prompt: "frog", options: ["fl", "fr", "br"] }, { prompt: "brave", options: ["br", "bl", "cr"] }, { prompt: "slide", options: ["sl", "st", "sp"] } ] },
      // 27
      { type: "sorting" as const, title: "Sort Blend Words (Set B)", instruction: "Sort words by their beginning blend.", columns: ["br-", "gr-", "fr-", "fl-"], items: [ { label: "brown" }, { label: "green" }, { label: "frog" }, { label: "flag" }, { label: "brick" }, { label: "grass" }, { label: "fresh" }, { label: "flat" } ] },
      // 28
      { type: "matching" as const, title: "Match Blends to Words (Set B)", instruction: "Draw a line to match each blend to a word.", left: ["br", "gr", "fr", "fl", "sp"], right: ["flag", "from", "brown", "spell", "green"] },
      // 29
      { type: "open-response" as const, title: "Write Blend Words (Set B)", instruction: "Write a word that starts with each blend.", parentTip: "If your child is stuck, give a clue: 'What colour starts with gr?'", prompts: [ { text: "br- word: ______", type: "lines" as const, lines: 1 }, { text: "gr- word: ______", type: "lines" as const, lines: 1 }, { text: "fr- word: ______", type: "lines" as const, lines: 1 }, { text: "fl- word: ______", type: "lines" as const, lines: 1 } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Tip: Blends vs Digraphs — What Is the Difference?", instruction: "In a BLEND you can hear BOTH letters: bl = /b/ + /l/ (blue). In a DIGRAPH the two letters make one NEW sound: sh = /sh/ (not /s/ + /h/). This is an important difference! Listen carefully to tell them apart.", parentTip: "This distinction is crucial for accurate decoding.", prompts: [ { text: "Is 'shop' a blend or digraph? ______", type: "lines" as const, lines: 1 }, { text: "Is 'blue' a blend or digraph? ______", type: "lines" as const, lines: 1 } ] },
      // 31
      { type: "sorting" as const, title: "Sort: Blend or Digraph?", instruction: "Sort each word: does it start with a BLEND or a DIGRAPH?", parentTip: "Ask: Can I hear both letters? (blend) Or is it a new sound? (digraph)", columns: ["Starts with a BLEND", "Starts with a DIGRAPH"], items: [ { label: "shop" }, { label: "blue" }, { label: "chip" }, { label: "stop" }, { label: "thin" }, { label: "crab" }, { label: "shed" }, { label: "clap" } ] },
      // 32
      { type: "circle-correct" as const, title: "Blend or Digraph?", instruction: "Circle BLEND or DIGRAPH for each word.", questions: [ { prompt: "green", options: ["Blend", "Digraph"] }, { prompt: "shell", options: ["Blend", "Digraph"] }, { prompt: "fresh", options: ["Blend", "Digraph"] }, { prompt: "chair", options: ["Blend", "Digraph"] }, { prompt: "black", options: ["Blend", "Digraph"] } ] },
      // 33
      { type: "open-response" as const, title: "Sound Boxes: Blends (Set A)", instruction: "Write the sounds in each word. The blend stays together in one box.", prompts: [ { text: "[__][__][__] → stop", type: "lines" as const, lines: 1 }, { text: "[__][__][__] → clap", type: "lines" as const, lines: 1 }, { text: "[__][__][__][__] → crab", type: "lines" as const, lines: 1 } ] },
      // 34
      { type: "matching" as const, title: "Match Words to Clues: Blends", instruction: "Draw a line from each clue to the correct blend word.", left: ["A sea creature with claws", "A colour", "Hands together to make noise", "Do not go any further"], right: ["stop", "blue", "crab", "clap"] },
      // 35
      { type: "sequence" as const, title: "Build Blend Words (Set A)", instruction: "Put the sounds in order to spell the word.", items: [ { label: "cl + a + p = ______ (hands together)" }, { label: "st + o + p = ______ (do not go)" }, { label: "cr + a + b = ______ (a sea creature)" }, { label: "bl + a + ck = ______ (a dark colour)" } ] },
      // 36
      { type: "sorting" as const, title: "Sort: All Blends and Digraphs (Set A)", instruction: "Sort each word into the correct column.", columns: ["sh-", "ch-", "th-", "bl/cl-", "st/cr-"], items: [ { label: "shop" }, { label: "chip" }, { label: "thin" }, { label: "blue" }, { label: "stop" }, { label: "shed" }, { label: "chin" }, { label: "three" }, { label: "clap" }, { label: "crab" } ] },
      // 37
      { type: "circle-correct" as const, title: "Complete the Word: Mixed (Set A)", instruction: "Circle the blend or digraph that completes each word.", questions: [ { prompt: "___ue (a colour)", options: ["bl", "sh", "th"] }, { prompt: "___op (a place to buy things)", options: ["sh", "bl", "st"] }, { prompt: "___ee (a number)", options: ["th", "ch", "cr"] }, { prompt: "___ab (a sea creature)", options: ["cr", "sh", "ch"] } ] },
      // 38
      { type: "open-response" as const, title: "Write Sentences with Blends (Set A)", instruction: "Write a sentence using each blend word.", parentTip: "Encourage saying the sentence aloud before writing.", prompts: [ { text: "blue: ___________________________", type: "lines" as const, lines: 2 }, { text: "stop: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 39
      { type: "matching" as const, title: "Match All Blends and Digraphs to Words", instruction: "Draw a line from each blend or digraph to a word.", left: ["sh-", "ch-", "th-", "bl-", "cr-", "gr-", "fr-"], right: ["green", "frog", "three", "crab", "shop", "chip", "black"] },
      // 40 — SPARK
      { type: "open-response" as const, title: "Blend Spark: Blend and Digraph Hunt!", instruction: "Go on a hunt in a book or around your home. Find as many words as you can that start with a blend or digraph. Write them in the correct column.", parentTip: "Real-world word hunts connect phonics to authentic reading.", prompts: [ { text: "Digraph words (sh, ch, th): ___________________________", type: "lines" as const, lines: 2 }, { text: "Blend words (bl, cr, st, gr, etc.): ___________________________", type: "lines" as const, lines: 2 } ] },
      // ─── CONSOLIDATING (41–70): Mixed practice, spelling, reading fluency ───
      // 41
      { type: "circle-correct" as const, title: "Real or Nonsense? Blend Words", instruction: "Read each word. Circle REAL or NONSENSE.", parentTip: "This builds decoding fluency.", questions: [ { prompt: "shop", options: ["REAL", "NONSENSE"] }, { prompt: "blim", options: ["REAL", "NONSENSE"] }, { prompt: "crab", options: ["REAL", "NONSENSE"] }, { prompt: "thop", options: ["REAL", "NONSENSE"] }, { prompt: "green", options: ["REAL", "NONSENSE"] }, { prompt: "frib", options: ["REAL", "NONSENSE"] } ] },
      // 42
      { type: "open-response" as const, title: "Write Sentences with Digraphs (Set A)", instruction: "Write a sentence using each digraph word.", prompts: [ { text: "ship: ___________________________", type: "lines" as const, lines: 2 }, { text: "cheese: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 43
      { type: "sorting" as const, title: "Sort by Ending Blend or Digraph", instruction: "Some words end with a blend or digraph. Sort these words.", columns: ["Ends with -sh", "Ends with -ch", "Ends with -st", "Ends with -nd"], items: [ { label: "fish" }, { label: "much" }, { label: "fast" }, { label: "hand" }, { label: "wish" }, { label: "such" }, { label: "must" }, { label: "sand" } ] },
      // 44
      { type: "circle-correct" as const, title: "What Ending Sound? (Set A)", instruction: "Circle the blend or digraph at the END of each word.", questions: [ { prompt: "fast", options: ["-st", "-sh", "-ch"] }, { prompt: "hand", options: ["-nd", "-sh", "-st"] }, { prompt: "fish", options: ["-sh", "-ch", "-st"] }, { prompt: "jump", options: ["-mp", "-nd", "-st"] } ] },
      // 45 — TIP
      { type: "open-response" as const, title: "Tip: Look for Blends and Digraphs Everywhere!", instruction: "Blends and digraphs appear at the BEGINNING and END of words! 'Shop' starts with sh. 'Fish' ends with sh. When you see two consonants together, ask yourself: is it a blend (hear both) or a digraph (new sound)? This will help you read hundreds of new words!", parentTip: "Explicitly teaching positional awareness (initial vs final) aids decoding.", prompts: [ { text: "Find the blend or digraph: splash → start: ______ end: ______", type: "lines" as const, lines: 1 } ] },
      // 46
      { type: "matching" as const, title: "Match Words with Same Beginning Sound", instruction: "Draw a line to match words that start with the same blend or digraph.", left: ["shell", "brown", "green", "stop", "chin"], right: ["step", "check", "grass", "ship", "brick"] },
      // 47
      { type: "open-response" as const, title: "Word Families: Blends (Set A)", instruction: "Write as many words as you can for each blend family.", prompts: [ { text: "Words starting with bl-: ___________________________", type: "lines" as const, lines: 1 }, { text: "Words starting with cr-: ___________________________", type: "lines" as const, lines: 1 }, { text: "Words starting with st-: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 48
      { type: "circle-correct" as const, title: "Which Word Fits the Sentence? (Set A)", instruction: "Circle the word with the correct blend or digraph.", questions: [ { prompt: "The sky is ____.", options: ["blue", "clue", "true"] }, { prompt: "I went to the ____ to buy bread.", options: ["stop", "shop", "chop"] }, { prompt: "The ____ is in the sea.", options: ["grab", "crab", "blab"] }, { prompt: "I ____ my hands.", options: ["slap", "clap", "flap"] } ] },
      // 49
      { type: "sorting" as const, title: "Grand Sort: Blends and Digraphs (Set A)", instruction: "Sort all words by their beginning pattern.", columns: ["Digraph (sh/ch/th)", "Blend (bl/cl/cr/st/br/gr/fr)"], items: [ { label: "shell" }, { label: "blue" }, { label: "cheese" }, { label: "crash" }, { label: "three" }, { label: "green" }, { label: "fresh" }, { label: "church" }, { label: "black" }, { label: "shout" } ] },
      // 50
      { type: "open-response" as const, title: "Write a Blend and Digraph Story (Set A)", instruction: "Write a short story using at least 4 blend or digraph words.", parentTip: "Integrating phonics into writing cements the patterns.", prompts: [ { text: "My story:", type: "lines" as const, lines: 4 } ] },
      // 51
      { type: "circle-correct" as const, title: "Complete the Word: Mixed (Set B)", instruction: "Circle the blend or digraph.", questions: [ { prompt: "___een (a colour of grass)", options: ["gr", "gl", "cr"] }, { prompt: "___og (a small jumping animal)", options: ["fr", "fl", "br"] }, { prompt: "___ell (a sound from a bell)", options: ["sh", "sp", "ch"] }, { prompt: "___own (a colour)", options: ["br", "bl", "cr"] }, { prompt: "___ide (to move on ice)", options: ["sl", "st", "sp"] } ] },
      // 52
      { type: "matching" as const, title: "Match Blend Words to Clues (Set A)", instruction: "Draw a line from each clue to the correct word.", left: ["A colour of the sky", "A sea creature", "Do not go any further", "Hands together for noise", "A colour of grass"], right: ["clap", "green", "stop", "blue", "crab"] },
      // 53
      { type: "open-response" as const, title: "Change the Blend (Set A)", instruction: "Change the blend or digraph to make a new word.", prompts: [ { text: "shop → change sh to ch → ______", type: "lines" as const, lines: 1 }, { text: "blue → change bl to cl → ______", type: "lines" as const, lines: 1 }, { text: "crab → change cr to gr → ______", type: "lines" as const, lines: 1 }, { text: "stop → change st to cl → ______", type: "lines" as const, lines: 1 } ] },
      // 54
      { type: "sorting" as const, title: "Sort sp-, sn-, sw- Words", instruction: "Sort each word by its beginning blend.", columns: ["sp-", "sn-", "sw-"], items: [ { label: "spin" }, { label: "snap" }, { label: "swim" }, { label: "spell" }, { label: "snake" }, { label: "sweet" } ] },
      // 55
      { type: "circle-correct" as const, title: "Complete the Word (Set C)", instruction: "Circle the correct blend.", questions: [ { prompt: "___im (to move in water)", options: ["sw", "sn", "sp"] }, { prompt: "___ell (to use your nose)", options: ["sm", "sn", "sp"] }, { prompt: "___ake (a slithering reptile)", options: ["sn", "sl", "sp"] }, { prompt: "___oon (you eat with it)", options: ["sp", "sn", "sw"] } ] },
      // 56
      { type: "open-response" as const, title: "Write Words for Each Blend Family", instruction: "Write 2 words for each blend.", prompts: [ { text: "sp- words: ______ ______", type: "lines" as const, lines: 1 }, { text: "sn- words: ______ ______", type: "lines" as const, lines: 1 }, { text: "sw- words: ______ ______", type: "lines" as const, lines: 1 }, { text: "sl- words: ______ ______", type: "lines" as const, lines: 1 } ] },
      // 57
      { type: "matching" as const, title: "Match Words to Pictures: Blends (Set A)", instruction: "Draw a line from each blend word to its meaning.", left: ["frog", "crab", "drum", "flag", "star"], right: ["in the sky at night", "you wave it", "a hopping animal", "you play it", "lives in the sea"] },
      // 58
      { type: "circle-correct" as const, title: "Speed Read: Blend and Digraph Words", instruction: "Read each word quickly. Circle REAL or NONSENSE.", questions: [ { prompt: "fresh", options: ["REAL", "NONSENSE"] }, { prompt: "crub", options: ["REAL", "NONSENSE"] }, { prompt: "black", options: ["REAL", "NONSENSE"] }, { prompt: "shep", options: ["REAL", "NONSENSE"] }, { prompt: "green", options: ["REAL", "NONSENSE"] }, { prompt: "thrip", options: ["REAL", "NONSENSE"] } ] },
      // 59
      { type: "open-response" as const, title: "Write Sentences (Set B)", instruction: "Write a sentence using each word.", prompts: [ { text: "green: ___________________________", type: "lines" as const, lines: 2 }, { text: "three: ___________________________", type: "lines" as const, lines: 2 }, { text: "frog: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 60 — HOME ACTIVITY
      { type: "home-activity" as const, title: "Blend and Digraph Hunt", instruction: "Find blends and digraphs in everyday reading.", parentTip: "Read cereal boxes, shopping lists or picture books and hunt for target patterns.", suggestions: [ "Read a short book and highlight every sh, ch or th you find.", "Play Word Tennis: one person says a blend (sh-) and the other says a word.", "Make a word wall — one strip per pattern. Add new words as you find them.", "Play I Spy with blends: I spy something that starts with /st/." ] },
      // ─── EXTENDING (61–100): Complex blends, multisyllabic words, application ───
      // 61
      { type: "sorting" as const, title: "Sort Three-Letter Blends", instruction: "Some words start with THREE consonants! Sort these words.", parentTip: "Three-letter blends: str, spr, scr, spl.", columns: ["str-", "spr-", "scr-", "spl-"], items: [ { label: "string" }, { label: "spring" }, { label: "scream" }, { label: "splash" }, { label: "strong" }, { label: "spray" }, { label: "scratch" }, { label: "split" } ] },
      // 62
      { type: "circle-correct" as const, title: "Three-Letter Blends (Set A)", instruction: "Circle the three-letter blend at the start of each word.", questions: [ { prompt: "string", options: ["str", "st", "sr"] }, { prompt: "spring", options: ["spr", "sp", "sr"] }, { prompt: "scratch", options: ["scr", "sc", "sr"] }, { prompt: "splash", options: ["spl", "sp", "sl"] } ] },
      // 63
      { type: "open-response" as const, title: "Write Three-Letter Blend Words", instruction: "Write a word that starts with each three-letter blend.", prompts: [ { text: "str- word: ______", type: "lines" as const, lines: 1 }, { text: "spr- word: ______", type: "lines" as const, lines: 1 }, { text: "scr- word: ______", type: "lines" as const, lines: 1 } ] },
      // 64
      { type: "matching" as const, title: "Match Three-Letter Blends to Words", instruction: "Draw a line from each blend to a word.", left: ["str-", "spr-", "scr-", "spl-"], right: ["splash", "scream", "strong", "spring"] },
      // 65
      { type: "circle-correct" as const, title: "Which Word Fits? (Set B)", instruction: "Circle the correct word.", questions: [ { prompt: "The cat ____ water everywhere.", options: ["splashed", "crashed", "flashed"] }, { prompt: "I can hear a bird ____.", options: ["singing", "springing", "stringing"] }, { prompt: "The rope is very ____.", options: ["string", "strong", "spring"] } ] },
      // 66
      { type: "open-response" as const, title: "Blend and Digraph Word Families", instruction: "Write as many words as you can for each beginning pattern.", prompts: [ { text: "sh- words: ___________________________", type: "lines" as const, lines: 1 }, { text: "ch- words: ___________________________", type: "lines" as const, lines: 1 }, { text: "th- words: ___________________________", type: "lines" as const, lines: 1 }, { text: "bl- words: ___________________________", type: "lines" as const, lines: 1 }, { text: "cr- words: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 67
      { type: "sorting" as const, title: "Grand Sort: All Patterns", instruction: "Sort every word by its beginning pattern type.", columns: ["Digraph", "Two-letter Blend", "Three-letter Blend"], items: [ { label: "ship" }, { label: "blue" }, { label: "string" }, { label: "chin" }, { label: "green" }, { label: "splash" }, { label: "three" }, { label: "frog" }, { label: "scratch" } ] },
      // 68
      { type: "circle-correct" as const, title: "Blend and Digraph in Longer Words", instruction: "Circle the blend or digraph in each longer word.", parentTip: "This extends phonics knowledge to multisyllabic words.", questions: [ { prompt: "chicken: the digraph is...", options: ["ch", "ck", "en"] }, { prompt: "brother: the blend is...", options: ["br", "th", "er"] }, { prompt: "sticker: the blend is...", options: ["st", "ck", "er"] }, { prompt: "shining: the digraph is...", options: ["sh", "ng", "in"] } ] },
      // 69
      { type: "open-response" as const, title: "Write a Story Using Blends and Digraphs (Set B)", instruction: "Write a story using at least 6 blend or digraph words. Underline each one.", prompts: [ { text: "My story:", type: "lines" as const, lines: 5 } ] },
      // 70
      { type: "matching" as const, title: "Grand Match: 10 Words to Clues", instruction: "Draw a line from each word to its meaning.", left: ["shop", "crab", "green", "three", "frog", "black", "drum", "cheese", "chair", "splash"], right: ["you sit on it", "a number", "a colour of grass", "a hopping animal", "a dark colour", "where you buy things", "a sea creature", "you eat it on toast", "water flying around", "you play it with sticks"] },
      // 71
      { type: "circle-correct" as const, title: "Which Pattern? Grand Quiz", instruction: "Identify the blend or digraph.", questions: [ { prompt: "The beginning of 'throne'", options: ["th", "tr", "hr"] }, { prompt: "The beginning of 'cream'", options: ["cr", "ch", "cl"] }, { prompt: "The beginning of 'shrimp'", options: ["shr", "sh", "sr"] }, { prompt: "The end of 'bench'", options: ["-ch", "-sh", "-th"] } ] },
      // 72
      { type: "open-response" as const, title: "Blend Challenge: Write 20 Words", instruction: "Write 20 words that start with a blend or digraph.", prompts: [ { text: "My 20 blend/digraph words:", type: "lines" as const, lines: 4 } ] },
      // 73
      { type: "sorting" as const, title: "Sort Words I Can Read vs Still Learning", instruction: "Sort these blend and digraph words honestly.", columns: ["I Can Read It!", "Still Learning"], items: [ { label: "ship" }, { label: "splash" }, { label: "cheese" }, { label: "scratch" }, { label: "green" }, { label: "through" }, { label: "black" }, { label: "string" } ] },
      // 74
      { type: "open-response" as const, title: "Blend and Digraph Riddles", instruction: "Solve each riddle. The answer contains a blend or digraph!", prompts: [ { text: "I am green and I hop. I am a ______.", type: "lines" as const, lines: 1 }, { text: "I have claws and live in the sea. I am a ______.", type: "lines" as const, lines: 1 }, { text: "You use me to buy things. I am a ______.", type: "lines" as const, lines: 1 }, { text: "I am a number between two and four. I am ______.", type: "lines" as const, lines: 1 } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Tip: Reading Longer Words with Blends", instruction: "When you see a long word, look for the blends and digraphs first. They help you break the word into chunks. For example: 'splash' → spl-a-sh. Finding the patterns makes reading easier!", parentTip: "This strategy prepares children for multisyllabic word reading.", prompts: [ { text: "Break this word: 'shrimp' → ______", type: "lines" as const, lines: 1 }, { text: "Break this word: 'string' → ______", type: "lines" as const, lines: 1 } ] },
      // 76
      { type: "circle-correct" as const, title: "Which Word Completes the Sentence? (Set B)", instruction: "Circle the correct blend or digraph word.", questions: [ { prompt: "The ____ swam in the pond.", options: ["frog", "flag", "drag"] }, { prompt: "She wore a ____ dress.", options: ["blue", "clue", "glue"] }, { prompt: "The ____ was very cold.", options: ["snow", "show", "slow"] }, { prompt: "He ____ down the hill.", options: ["slid", "split", "slit"] } ] },
      // 77
      { type: "open-response" as const, title: "Write Sentences (Set C)", instruction: "Write a sentence for each word.", prompts: [ { text: "splash: ___________________________", type: "lines" as const, lines: 2 }, { text: "strong: ___________________________", type: "lines" as const, lines: 2 }, { text: "cheese: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 78
      { type: "matching" as const, title: "Match Beginning to Ending", instruction: "Draw a line to match each beginning to the correct ending to make a real word.", left: ["sh-", "ch-", "bl-", "cr-", "str-"], right: ["-ong", "-ack", "-oss", "-eep", "-eam"] },
      // 79
      { type: "sorting" as const, title: "Sort: Beginning vs Ending Pattern", instruction: "Does the blend or digraph appear at the start or end of the word?", columns: ["Pattern at START", "Pattern at END"], items: [ { label: "ship" }, { label: "fish" }, { label: "black" }, { label: "bench" }, { label: "three" }, { label: "bath" }, { label: "green" }, { label: "fast" } ] },
      // 80 — SPARK
      { type: "open-response" as const, title: "Blend Spark: Create Your Own Blend Word!", instruction: "Can you invent a brand new word that starts with a blend or digraph? What would it mean? Draw it!", parentTip: "Invented words show phonics mastery — the child must apply blend/digraph knowledge creatively.", prompts: [ { text: "My made-up blend word: ______ It means: ______", type: "lines" as const, lines: 1 }, { text: "Draw it:", type: "box" as const } ] },
      // 81
      { type: "open-response" as const, title: "Dictation: Blend and Digraph Words", instruction: "Your parent will say a word. Listen carefully and write it.", parentTip: "Say: ship, crab, green, three, splash, black, fresh, strong.", prompts: [ { text: "1. ______ 2. ______ 3. ______ 4. ______", type: "lines" as const, lines: 1 }, { text: "5. ______ 6. ______ 7. ______ 8. ______", type: "lines" as const, lines: 1 } ] },
      // 82
      { type: "circle-correct" as const, title: "Grand Blend Quiz (Set A)", instruction: "Circle the correct answer.", questions: [ { prompt: "Which starts with a digraph?", options: ["ship", "slip", "drip"] }, { prompt: "Which starts with a blend?", options: ["chin", "grin", "thin"] }, { prompt: "Which ends with a digraph?", options: ["fish", "fist", "fast"] }, { prompt: "Which starts with a three-letter blend?", options: ["spring", "bring", "swing"] } ] },
      // 83
      { type: "open-response" as const, title: "Blend and Digraph Sentences (Set D)", instruction: "Write the most interesting sentence you can using 3 blend or digraph words.", prompts: [ { text: "My sentence: ___________________________", type: "lines" as const, lines: 2 }, { text: "My blend/digraph words were: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 84
      { type: "sorting" as const, title: "Sort: All Patterns Grand Challenge", instruction: "Sort every word by pattern type.", columns: ["sh", "ch", "th", "bl/cl", "cr/gr/br", "st/sp/sw/sl", "str/spr/scr"], items: [ { label: "ship" }, { label: "cheese" }, { label: "three" }, { label: "blue" }, { label: "green" }, { label: "stop" }, { label: "string" }, { label: "clap" }, { label: "brown" }, { label: "swim" }, { label: "splash" }, { label: "shed" } ] },
      // 85
      { type: "open-response" as const, title: "Write a Paragraph Using Blends and Digraphs", instruction: "Write a paragraph (3 to 4 sentences) about going to the beach. Use as many blend and digraph words as possible.", prompts: [ { text: "My beach paragraph:", type: "lines" as const, lines: 5 } ] },
      // 86
      { type: "matching" as const, title: "Match Words with Same Ending Pattern", instruction: "Draw a line to match words that end with the same blend or digraph.", left: ["fish", "fast", "bench", "hand", "jump"], right: ["sand", "wish", "punch", "last", "bump"] },
      // 87
      { type: "circle-correct" as const, title: "Grand Blend Quiz (Set B)", instruction: "Answer each question.", questions: [ { prompt: "How many sounds in 'ship'?", options: ["2", "3", "4"] }, { prompt: "How many sounds in 'splash'?", options: ["4", "5", "6"] }, { prompt: "Is 'th' a blend or a digraph?", options: ["Blend", "Digraph"] }, { prompt: "Is 'bl' a blend or a digraph?", options: ["Blend", "Digraph"] } ] },
      // 88
      { type: "open-response" as const, title: "Create Your Own Word Sort", instruction: "Choose 3 blends or digraphs. Write the column headings and 3 words for each column.", parentTip: "Creating a sort is harder than completing one — it requires generating examples.", prompts: [ { text: "Column 1: ______ Words: ______, ______, ______", type: "lines" as const, lines: 1 }, { text: "Column 2: ______ Words: ______, ______, ______", type: "lines" as const, lines: 1 }, { text: "Column 3: ______ Words: ______, ______, ______", type: "lines" as const, lines: 1 } ] },
      // 89
      { type: "sequence" as const, title: "Unscramble Blend Words", instruction: "The letters are mixed up. Write them in the correct order.", items: [ { label: "r-c-a-b → ______ (sea creature)" }, { label: "e-r-e-h-t → ______ (a number)" }, { label: "p-o-h-s → ______ (buy things)" }, { label: "e-e-n-r-g → ______ (a colour)" }, { label: "a-l-s-p-h-s → ______ (water flying)" } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Tip: You Are a Phonics Expert!", instruction: "You can now read words with digraphs (sh, ch, th), two-letter blends (bl, cr, st, gr, fr...) and even three-letter blends (str, spr, scr)! These patterns appear in thousands of English words. Keep looking for them everywhere you read!", parentTip: "This affirms phonics growth and encourages transfer to independent reading.", prompts: [ { text: "I am proud that I can read words like: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 91
      { type: "open-response" as const, title: "Blend and Digraph Challenge: 25 Words", instruction: "Write 25 words that contain a blend or digraph. Use as many different patterns as you can!", prompts: [ { text: "My 25 words:", type: "lines" as const, lines: 5 } ] },
      // 92
      { type: "circle-correct" as const, title: "Which Pattern? Quick Fire!", instruction: "Name the blend or digraph in each word — fast!", questions: [ { prompt: "brush", options: ["br", "sh", "both br and sh"] }, { prompt: "crunch", options: ["cr", "ch", "both cr and ch"] }, { prompt: "shrimp", options: ["sh", "shr", "mp"] }, { prompt: "thrash", options: ["th", "sh", "both th and sh"] } ] },
      // 93
      { type: "sorting" as const, title: "Sort: Words with TWO Patterns", instruction: "Some words have a blend or digraph at the start AND end! Sort these.", columns: ["Pattern at start only", "Pattern at end only", "Pattern at BOTH"], items: [ { label: "blue" }, { label: "fish" }, { label: "crash" }, { label: "bench" }, { label: "thrash" }, { label: "crunch" } ] },
      // 94
      { type: "open-response" as const, title: "Blend and Digraph Assessment", instruction: "Read each word aloud. Write the blend or digraph you hear.", prompts: [ { text: "shop → beginning pattern: ______", type: "lines" as const, lines: 1 }, { text: "splash → beginning pattern: ______", type: "lines" as const, lines: 1 }, { text: "fish → ending pattern: ______", type: "lines" as const, lines: 1 }, { text: "string → beginning pattern: ______", type: "lines" as const, lines: 1 }, { text: "crunch → beginning: ______ ending: ______", type: "lines" as const, lines: 1 } ] },
      // 95
      { type: "matching" as const, title: "Grand Match: Patterns to Words", instruction: "Draw a line from each pattern to a word that contains it.", left: ["sh-", "ch-", "th-", "str-", "spl-", "-sh", "-ch", "-st"], right: ["fast", "splash", "church", "string", "three", "wish", "shell", "chip"] },
      // 96
      { type: "open-response" as const, title: "Write Your Best Blend and Digraph Story", instruction: "Write your best story yet! Use as many blends and digraphs as you can. Underline each one.", prompts: [ { text: "My story:", type: "lines" as const, lines: 6 } ] },
      // 97
      { type: "circle-correct" as const, title: "Grand Blend and Digraph Quiz", instruction: "Final quiz on everything you have learned!", questions: [ { prompt: "A digraph makes...", options: ["two sounds", "one new sound", "no sound"] }, { prompt: "A blend lets you hear...", options: ["one sound", "both letter sounds", "no sounds"] }, { prompt: "'sh' is a...", options: ["blend", "digraph", "vowel"] }, { prompt: "'bl' is a...", options: ["blend", "digraph", "vowel"] }, { prompt: "'str' is a...", options: ["digraph", "two-letter blend", "three-letter blend"] } ] },
      // 98
      { type: "home-activity" as const, title: "Blend and Digraph Champion", instruction: "You are a blend and digraph champion! Keep practising.", suggestions: [ "Read a page of a book and count all the blends and digraphs you spot.", "Play Blend Bingo with family members.", "Write a shopping list using only blend and digraph words.", "Teach someone else the difference between a blend and a digraph." ] },
      // 99
      { type: "open-response" as const, title: "Blend and Digraph Self-Assessment", instruction: "Rate yourself on each pattern. Write: confident, getting there, or need practice.", prompts: [ { text: "sh: ______  ch: ______  th: ______", type: "lines" as const, lines: 1 }, { text: "bl: ______  cr: ______  st: ______", type: "lines" as const, lines: 1 }, { text: "br: ______  gr: ______  fr: ______", type: "lines" as const, lines: 1 }, { text: "str: ______  spr: ______  scr: ______", type: "lines" as const, lines: 1 } ] },
      // 100 — SPARK
      { type: "open-response" as const, title: "Blend Spark: What Will You Read Next?", instruction: "You can now read words with blends and digraphs! That means you can read SO many more words than before. What book would you like to read next? What new words are you excited to discover?", parentTip: "This forward-looking spark connects phonics mastery to the joy of reading.", prompts: [ { text: "I want to read: ___________________________", type: "lines" as const, lines: 1 }, { text: "A new word I want to learn: ___________________________", type: "lines" as const, lines: 1 } ] },
    ],
  },

  // ── WS 2: Sight Words ─────────────────────────────────────
  {
    slug: "sight-words",
    title: "High Frequency Sight Words",
    strand: "Language",
    description:
      "Read and spell common high frequency words automatically — building reading fluency and writing accuracy.",
    learningGuide: {
      concept:
        "Sight words are high-frequency words that appear constantly in reading and writing. Some can be decoded phonically (can, it, in), while others have irregular patterns (the, said, was). Automating these words frees up mental energy for comprehension.",
      activation:
        "Flash a familiar sight word (e.g. 'the') and ask: 'How fast can you read this? Let's see!' Praise instant recognition. Then ask: 'Can you use it in a sentence?' Connect words to real reading contexts.",
      check:
        "Flash 10 sight words one at a time. Can your child read each one within 2 seconds? Record which ones need more practice.",
    },
    lesson: {
      title: "Words We See Every Day",
      objective:
        "Read and write at least 15 high-frequency words automatically and use them in simple sentences.",
      materials: [
        "Index cards or cut-up paper pieces",
        "A pencil and marker",
        "A glass jar or small box (for word games)",
      ],
      intro: {
        title: "Why Sight Words Matter",
        script:
          "Did you know that just 100 common words make up about half of everything we read? If we can read those words really FAST — without having to sound them out — then reading feels so much easier! Today we are going to practise some of those super-common words until they jump into our heads instantly. Ready?",
        action:
          "Write the sight words on cards: the, and, is, it, in, at, he, she, we, my, can, go, to, do, said. Flash them one at a time, both of you saying the word quickly.",
      },
      mainActivity: {
        title: "Sight Word Drills and Games",
        script:
          "We are going to play some games with these words! First, let us sort them into ones we know really well and ones we need to practise more. Then we will play a game with the practice ones.",
        action:
          "Sort sight word cards into 'know it' and 'need practice' piles. Then play Snap, Memory or Go Fish using only the practice pile cards.",
      },
      wrapUp: {
        title: "Use Them in Sentences",
        script:
          "Now for the real test! You are going to pick 3 sight words and write each one in a sentence. Your sentence has to make sense — and remember your capital letter at the start and a full stop at the end!",
        action:
          "Your child selects 3 sight words and writes a sentence for each. Provide line-ruled paper for support.",
      },
      parentTip:
        "10 minutes of daily sight word practice is far more effective than one long weekly session. Use spare moments — breakfast, car rides — to flash 5 to 6 cards. Once a word is instant, retire it and introduce a new one.",
      extension:
        "Go on a sight word hunt in a favourite book. Tally how many times you find 'the', 'and', 'is' and 'said'. Which appeared most often? This covers AC V9 Year 1 — reading an increasing number of high-frequency words.",
      resources: [
        {
          title: "Dolch Sight Word Lists — Scholastic",
          url: "https://www.scholastic.com/teachers/articles/teaching-content/100-most-common-sight-words/",
          description:
            "The 100 most common sight words with printable lists, organised by frequency.",
        },
        {
          title: "Starfall — Sight Words",
          url: "https://www.starfall.com/",
          description:
            "Free interactive sight word practice in an engaging, child-friendly format.",
        },
        {
          title: "Reading Eggs — Sight Words",
          url: "https://readingeggs.com.au/",
          description:
            "Sight word lessons integrated into a structured reading program for Year 1.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Core sight words — the, and, is, it, in, at, he, she, we, my ───
      // 1
      { type: "matching" as const, title: "Match Sight Words (Set A)", instruction: "Draw a line to match the sight word on the left to the same word on the right.", parentTip: "The child should READ each word, not look for visual similarities.", left: ["the", "and", "is"], right: ["is", "the", "and"] },
      // 2
      { type: "circle-correct" as const, title: "Find the Sight Word (Set A)", instruction: "Circle the correct spelling of each sight word.", questions: [ { prompt: "the", options: ["teh", "the", "hte"] }, { prompt: "and", options: ["adn", "nad", "and"] }, { prompt: "is", options: ["iz", "is", "si"] } ] },
      // 3
      { type: "open-response" as const, title: "Write Each Word Three Times (Set A)", instruction: "Practise writing each sight word three times.", parentTip: "Say the word aloud as you write it. This builds the connection between sound and spelling.", prompts: [ { text: "the: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "and: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "is: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 4
      { type: "matching" as const, title: "Match Sight Words (Set B)", instruction: "Draw a line to match each word.", left: ["it", "in", "at", "he"], right: ["at", "he", "it", "in"] },
      // 5
      { type: "circle-correct" as const, title: "Find the Sight Word (Set B)", instruction: "Circle the correct spelling.", questions: [ { prompt: "it", options: ["ti", "it", "et"] }, { prompt: "in", options: ["in", "ni", "en"] }, { prompt: "at", options: ["ta", "at", "et"] }, { prompt: "he", options: ["eh", "he", "hee"] } ] },
      // 6
      { type: "open-response" as const, title: "Write Each Word Three Times (Set B)", instruction: "Write each sight word three times.", prompts: [ { text: "it: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "in: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "at: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "he: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 7
      { type: "matching" as const, title: "Match Sight Words (Set C)", instruction: "Match each word to the same word.", left: ["she", "we", "my", "can"], right: ["can", "she", "my", "we"] },
      // 8
      { type: "circle-correct" as const, title: "Find the Sight Word (Set C)", instruction: "Circle the correct spelling.", questions: [ { prompt: "she", options: ["seh", "she", "shee"] }, { prompt: "we", options: ["wee", "we", "ew"] }, { prompt: "my", options: ["mi", "my", "mie"] }, { prompt: "can", options: ["kan", "can", "cna"] } ] },
      // 9
      { type: "open-response" as const, title: "Use in a Sentence (Set A)", instruction: "Write each sight word in a sentence.", parentTip: "If stuck, ask: Can you think of a sentence about something we did today?", prompts: [ { text: "the: ___________________________", type: "lines" as const, lines: 2 }, { text: "and: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 10
      { type: "sorting" as const, title: "Sort: Words I Know vs Need Practice (Set A)", instruction: "Read each word. Sort it honestly.", columns: ["I Know It!", "Need Practice"], items: [ { label: "the" }, { label: "and" }, { label: "is" }, { label: "it" }, { label: "in" }, { label: "at" }, { label: "he" }, { label: "she" }, { label: "we" }, { label: "my" } ] },
      // 11
      { type: "circle-correct" as const, title: "Which Word Completes the Sentence? (Set A)", instruction: "Circle the sight word that fits.", questions: [ { prompt: "___ cat sat on the mat.", options: ["The", "At", "Is"] }, { prompt: "I ___ see a bird.", options: ["is", "can", "the"] }, { prompt: "___ is my friend.", options: ["At", "She", "And"] } ] },
      // 12
      { type: "open-response" as const, title: "Write Each Word Three Times (Set C)", instruction: "Write each sight word three times.", prompts: [ { text: "she: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "we: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "my: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "can: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 13
      { type: "matching" as const, title: "Match All 10 Core Sight Words", instruction: "Draw a line to match each word.", left: ["the", "and", "is", "it", "in", "at", "he", "she", "we", "my"], right: ["we", "at", "he", "the", "my", "is", "she", "and", "in", "it"] },
      // 14
      { type: "open-response" as const, title: "Use in a Sentence (Set B)", instruction: "Write each sight word in a sentence.", prompts: [ { text: "he: ___________________________", type: "lines" as const, lines: 2 }, { text: "she: ___________________________", type: "lines" as const, lines: 2 }, { text: "we: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Tip: Sight Words Are Everywhere!", instruction: "Sight words are the most common words in English. Words like 'the', 'and', 'is' appear on almost every page of every book! The faster you can read them, the easier reading becomes. Practise reading them as fast as you can!", parentTip: "10 minutes of daily sight word practice is far more effective than one long session.", prompts: [ { text: "Read these as fast as you can: the, and, is, it, in, at, he, she, we, my, can", type: "lines" as const, lines: 1 } ] },
      // 16
      { type: "circle-correct" as const, title: "Speed Read: Sight Words (Set A)", instruction: "Read each word. Circle YES if you read it instantly, NO if you had to think.", questions: [ { prompt: "the", options: ["YES — instant!", "NO — had to think"] }, { prompt: "and", options: ["YES — instant!", "NO — had to think"] }, { prompt: "is", options: ["YES — instant!", "NO — had to think"] }, { prompt: "said", options: ["YES — instant!", "NO — had to think"] }, { prompt: "was", options: ["YES — instant!", "NO — had to think"] } ] },
      // 17
      { type: "sorting" as const, title: "Sort: Can I Sound It Out?", instruction: "Some sight words can be sounded out (like 'can'). Others have tricky spellings (like 'said'). Sort them.", parentTip: "This builds phonics awareness alongside sight word knowledge.", columns: ["Can sound it out", "Must memorise it"], items: [ { label: "can" }, { label: "said" }, { label: "in" }, { label: "the" }, { label: "it" }, { label: "was" }, { label: "at" }, { label: "they" } ] },
      // 18
      { type: "open-response" as const, title: "Rainbow Write (Set A)", instruction: "Write each word in three different colours (use coloured pencils). This helps your brain remember the spelling.", parentTip: "Multi-sensory approaches cement tricky spellings.", prompts: [ { text: "the (3 colours): ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "said (3 colours): ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "was (3 colours): ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 19
      { type: "sequence" as const, title: "Alphabetical Order (Set A)", instruction: "Write these sight words in alphabetical order.", parentTip: "Sing the alphabet slowly while pointing to each first letter.", items: [ { label: "the, and, is, can, he, my" }, { label: "1. ______ 2. ______ 3. ______" }, { label: "4. ______ 5. ______ 6. ______" } ] },
      // 20 — SPARK
      { type: "open-response" as const, title: "Sight Word Spark: How Many Can You Find?", instruction: "Open any book to one page. Count how many times you see the sight words 'the', 'and', 'is' on that page. You will be amazed!", parentTip: "This shows children why sight words matter — they appear everywhere.", prompts: [ { text: "Book title: ______", type: "lines" as const, lines: 1 }, { text: "the: _____ times  and: _____ times  is: _____ times", type: "lines" as const, lines: 1 } ] },
      // ─── DEVELOPING (21–50): Tricky sight words — said, was, they, have, come, go, to, do, you, are ───
      // 21
      { type: "circle-correct" as const, title: "Spot the Correct Spelling (Set A)", instruction: "Circle the correct spelling of each sight word.", questions: [ { prompt: "Past tense of 'say':", options: ["sed", "said", "sayd"] }, { prompt: "Past tense of 'are':", options: ["waz", "wos", "was"] }, { prompt: "More than one person:", options: ["thay", "they", "tey"] } ] },
      // 22
      { type: "matching" as const, title: "Match Tricky Sight Words (Set A)", instruction: "Draw a line to match each word.", left: ["said", "was", "they", "have", "come"], right: ["have", "said", "come", "they", "was"] },
      // 23
      { type: "open-response" as const, title: "Write Tricky Words Three Times (Set A)", instruction: "Write each tricky sight word three times.", prompts: [ { text: "said: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "was: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "they: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "have: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 24
      { type: "circle-correct" as const, title: "Spot the Correct Spelling (Set B)", instruction: "Circle the correct spelling.", questions: [ { prompt: "To possess:", options: ["hav", "have", "haev"] }, { prompt: "To arrive:", options: ["cum", "come", "com"] }, { prompt: "To move toward:", options: ["too", "two", "to"] }, { prompt: "To perform:", options: ["doo", "do", "doe"] } ] },
      // 25
      { type: "open-response" as const, title: "Use Tricky Words in Sentences (Set A)", instruction: "Write a sentence using each tricky sight word.", prompts: [ { text: "said: ___________________________", type: "lines" as const, lines: 2 }, { text: "they: ___________________________", type: "lines" as const, lines: 2 }, { text: "have: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 26
      { type: "sorting" as const, title: "Sort: Tricky or Regular? (Set A)", instruction: "Sort: can you sound out the word normally, or is the spelling tricky?", columns: ["Regular (can sound out)", "Tricky (must memorise)"], items: [ { label: "go" }, { label: "said" }, { label: "to" }, { label: "come" }, { label: "do" }, { label: "was" }, { label: "can" }, { label: "they" } ] },
      // 27
      { type: "circle-correct" as const, title: "Which Word Fits? (Set A)", instruction: "Circle the correct sight word.", questions: [ { prompt: "'Come here,' ___ Mum.", options: ["sed", "said", "sayed"] }, { prompt: "The dog ___ very happy.", options: ["wos", "waz", "was"] }, { prompt: "___ went to the park.", options: ["Thay", "They", "Tey"] }, { prompt: "I ___ a new book.", options: ["hav", "have", "haev"] } ] },
      // 28
      { type: "matching" as const, title: "Match Sight Words to Clues (Set A)", instruction: "Draw a line to match each sight word to its meaning.", left: ["said", "was", "they", "have", "come", "to"], right: ["more than one person", "past tense of 'say'", "moving toward", "to possess or own", "past tense of 'is'", "to arrive"] },
      // 29
      { type: "open-response" as const, title: "Fill in the Missing Sight Word (Set A)", instruction: "Write the missing sight word in each sentence.", prompts: [ { text: "Mum ______ 'time for bed.'", type: "lines" as const, lines: 1 }, { text: "The cat ______ on the mat.", type: "lines" as const, lines: 1 }, { text: "______ are going to the park.", type: "lines" as const, lines: 1 }, { text: "I ______ a pet dog.", type: "lines" as const, lines: 1 } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Tip: Look, Say, Cover, Write, Check!", instruction: "Here is the best way to learn tricky sight words: 1. LOOK at the word carefully. 2. SAY the word aloud. 3. COVER the word. 4. WRITE it from memory. 5. CHECK — did you spell it right? Try this with 'said'.", parentTip: "This multisensory strategy is the gold standard for learning irregular spellings.", prompts: [ { text: "Practise: said → cover → write: ______ → check!", type: "lines" as const, lines: 1 }, { text: "Practise: was → cover → write: ______ → check!", type: "lines" as const, lines: 1 }, { text: "Practise: they → cover → write: ______ → check!", type: "lines" as const, lines: 1 } ] },
      // 31
      { type: "circle-correct" as const, title: "Spot the Correct Spelling (Set C)", instruction: "Circle the correct spelling.", questions: [ { prompt: "you", options: ["yoo", "you", "yew"] }, { prompt: "are", options: ["ar", "are", "arr"] }, { prompt: "my", options: ["mi", "my", "miy"] }, { prompt: "we", options: ["wee", "we", "wi"] } ] },
      // 32
      { type: "open-response" as const, title: "Write New Sight Words Three Times", instruction: "Write each word three times.", prompts: [ { text: "you: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "are: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "come: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "do: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 33
      { type: "matching" as const, title: "Match 10 Sight Words (Set A)", instruction: "Draw a line to match each word.", left: ["the", "said", "was", "they", "have", "come", "go", "to", "do", "you"], right: ["you", "come", "go", "have", "said", "to", "they", "was", "do", "the"] },
      // 34
      { type: "open-response" as const, title: "Use in Sentences (Set C)", instruction: "Write a sentence using each word.", prompts: [ { text: "you: ___________________________", type: "lines" as const, lines: 2 }, { text: "are: ___________________________", type: "lines" as const, lines: 2 }, { text: "come: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 35
      { type: "sorting" as const, title: "Sort: 2-Letter vs 3-Letter vs 4-Letter Sight Words", instruction: "Sort each sight word by how many letters it has.", columns: ["2 letters", "3 letters", "4 letters"], items: [ { label: "is" }, { label: "the" }, { label: "said" }, { label: "it" }, { label: "was" }, { label: "they" }, { label: "at" }, { label: "can" }, { label: "have" }, { label: "we" }, { label: "she" }, { label: "come" } ] },
      // 36
      { type: "circle-correct" as const, title: "Which Word Fits? (Set B)", instruction: "Circle the correct sight word.", questions: [ { prompt: "___ you like ice cream?", options: ["Do", "To", "Go"] }, { prompt: "Please ___ to my house.", options: ["go", "do", "come"] }, { prompt: "___ are my best friend.", options: ["You", "Do", "Go"] }, { prompt: "We ___ going to the shops.", options: ["is", "are", "was"] } ] },
      // 37
      { type: "open-response" as const, title: "Fill in the Missing Word (Set B)", instruction: "Write the missing sight word.", prompts: [ { text: "Can ______ help me?", type: "lines" as const, lines: 1 }, { text: "We ______ going to the beach.", type: "lines" as const, lines: 1 }, { text: "Please ______ here quickly.", type: "lines" as const, lines: 1 }, { text: "What ______ you want to eat?", type: "lines" as const, lines: 1 } ] },
      // 38
      { type: "matching" as const, title: "Match Sentences to Sight Words", instruction: "Draw a line to match each sentence gap to the correct sight word.", left: ["___ cat is fluffy.", "She ___ happy.", "I ___ a sister.", "___ went to the park."], right: ["They", "The", "have", "was"] },
      // 39
      { type: "open-response" as const, title: "Sight Word Dictation (Set A)", instruction: "Your parent will say each word. Write it from memory.", parentTip: "Say: the, said, was, they, have, come, you, are.", prompts: [ { text: "1. ______ 2. ______ 3. ______ 4. ______", type: "lines" as const, lines: 1 }, { text: "5. ______ 6. ______ 7. ______ 8. ______", type: "lines" as const, lines: 1 } ] },
      // 40 — SPARK
      { type: "open-response" as const, title: "Sight Word Spark: Sight Words in Your Writing!", instruction: "Write 3 sentences about your day. Then go back and circle every sight word you used. You probably used more than you think!", parentTip: "This shows children that sight words are not just for practice — they use them naturally.", prompts: [ { text: "My 3 sentences:", type: "lines" as const, lines: 4 }, { text: "I used ______ sight words!", type: "lines" as const, lines: 1 } ] },
      // ─── CONSOLIDATING (41–70): Expanded set, fluency, sentences, games ───
      // 41
      { type: "circle-correct" as const, title: "Spot the Correct Spelling (Set D)", instruction: "Circle the correct spelling.", questions: [ { prompt: "like", options: ["lik", "like", "liek"] }, { prompt: "some", options: ["sum", "som", "some"] }, { prompt: "were", options: ["wer", "were", "wher"] }, { prompt: "there", options: ["ther", "there", "thier"] }, { prompt: "what", options: ["wat", "wot", "what"] } ] },
      // 42
      { type: "matching" as const, title: "Match New Sight Words (Set A)", instruction: "Draw a line to match each word.", left: ["like", "some", "were", "there", "what", "when"], right: ["when", "like", "there", "some", "were", "what"] },
      // 43
      { type: "open-response" as const, title: "Write New Sight Words Three Times", instruction: "Write each word three times.", prompts: [ { text: "like: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "some: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "were: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "there: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 44
      { type: "sorting" as const, title: "Sort: Tricky or Regular? (Set B)", instruction: "Sort each word.", columns: ["Regular", "Tricky"], items: [ { label: "like" }, { label: "some" }, { label: "were" }, { label: "there" }, { label: "what" }, { label: "when" }, { label: "not" }, { label: "one" } ] },
      // 45 — TIP
      { type: "open-response" as const, title: "Tip: Read Sight Words in Context!", instruction: "The best way to get FAST at sight words is to read real books! Every time you see a sight word in a story, your brain gets faster at recognising it. So keep reading every day — the more you read, the faster you get!", parentTip: "Reading in context is the ultimate sight word practice.", prompts: [ { text: "A book I am reading: ______", type: "lines" as const, lines: 1 }, { text: "Sight words I spotted: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 46
      { type: "circle-correct" as const, title: "Which Word Fits? (Set C)", instruction: "Circle the correct sight word.", questions: [ { prompt: "I would ___ to play.", options: ["lik", "like", "liek"] }, { prompt: "Can I have ___ water?", options: ["sum", "some", "som"] }, { prompt: "They ___ at the park.", options: ["wer", "were", "where"] }, { prompt: "___ is a cat outside.", options: ["Their", "There", "Ther"] } ] },
      // 47
      { type: "open-response" as const, title: "Use in Sentences (Set D)", instruction: "Write a sentence using each sight word.", prompts: [ { text: "like: ___________________________", type: "lines" as const, lines: 2 }, { text: "some: ___________________________", type: "lines" as const, lines: 2 }, { text: "what: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 48
      { type: "circle-correct" as const, title: "Confusing Pairs: there/their", instruction: "Circle the correct word.", parentTip: "'There' = a place. 'Their' = belonging to them.", questions: [ { prompt: "___ dog is big.", options: ["There", "Their"] }, { prompt: "The ball is over ___.", options: ["there", "their"] }, { prompt: "___ house is blue.", options: ["There", "Their"] }, { prompt: "I put it ___.", options: ["there", "their"] } ] },
      // 49
      { type: "sorting" as const, title: "Sort: All Sight Words So Far", instruction: "Sort all your sight words: Know It or Need Practice?", columns: ["Know It!", "Need Practice"], items: [ { label: "the" }, { label: "said" }, { label: "was" }, { label: "they" }, { label: "have" }, { label: "come" }, { label: "like" }, { label: "some" }, { label: "were" }, { label: "there" }, { label: "what" }, { label: "when" } ] },
      // 50
      { type: "open-response" as const, title: "Sight Word Story (Set A)", instruction: "Write a short story using as many sight words as you can. Circle each one.", parentTip: "Using sight words in context cements them in long-term memory.", prompts: [ { text: "Word box: the, and, said, was, they, have, come, is, go, my, like, some, were, there", type: "lines" as const, lines: 1 }, { text: "My story:", type: "lines" as const, lines: 5 }, { text: "How many sight words? ______", type: "lines" as const, lines: 1 } ] },
      // 51
      { type: "circle-correct" as const, title: "Spot the Correct Spelling (Set E)", instruction: "Circle the correct spelling.", questions: [ { prompt: "could", options: ["coud", "could", "culd"] }, { prompt: "would", options: ["woud", "would", "wuld"] }, { prompt: "should", options: ["shuld", "should", "shoud"] }, { prompt: "because", options: ["becuse", "becoz", "because"] } ] },
      // 52
      { type: "open-response" as const, title: "Write New Sight Words (Set B)", instruction: "Write each word three times.", prompts: [ { text: "could: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "would: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "should: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "because: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 53
      { type: "matching" as const, title: "Match -ould Words", instruction: "Draw a line to match each word to its meaning.", left: ["could", "would", "should"], right: ["it would be a good idea to", "was able to", "was willing to"] },
      // 54
      { type: "circle-correct" as const, title: "Which Word Fits? (Set D)", instruction: "Circle the correct word.", questions: [ { prompt: "I ___ run very fast.", options: ["coud", "could", "culd"] }, { prompt: "___ you like some cake?", options: ["Woud", "Would", "Wuld"] }, { prompt: "You ___ brush your teeth.", options: ["shuld", "should", "shoud"] }, { prompt: "I am tired ___ I ran a lot.", options: ["becuse", "becoz", "because"] } ] },
      // 55
      { type: "open-response" as const, title: "Use in Sentences (Set E)", instruction: "Write a sentence using each word.", prompts: [ { text: "could: ___________________________", type: "lines" as const, lines: 2 }, { text: "would: ___________________________", type: "lines" as const, lines: 2 }, { text: "because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 56
      { type: "sorting" as const, title: "Sort by Number of Letters", instruction: "Sort each sight word.", columns: ["2-3 letters", "4 letters", "5+ letters"], items: [ { label: "is" }, { label: "said" }, { label: "could" }, { label: "the" }, { label: "were" }, { label: "should" }, { label: "my" }, { label: "they" }, { label: "because" }, { label: "we" }, { label: "have" }, { label: "would" } ] },
      // 57
      { type: "circle-correct" as const, title: "Confusing Pairs: to/too/two", instruction: "Circle the correct word.", parentTip: "'to' = toward. 'too' = also/very. 'two' = the number 2.", questions: [ { prompt: "I went ___ the shop.", options: ["to", "too", "two"] }, { prompt: "I have ___ cats.", options: ["to", "too", "two"] }, { prompt: "It is ___ hot today.", options: ["to", "too", "two"] }, { prompt: "Can I come ___?", options: ["to", "too", "two"] } ] },
      // 58
      { type: "open-response" as const, title: "Fill in the Missing Word (Set C)", instruction: "Write the correct sight word.", prompts: [ { text: "I ______ like to go to the park.", type: "lines" as const, lines: 1 }, { text: "She ______ not come to school.", type: "lines" as const, lines: 1 }, { text: "We ______ eat our vegetables.", type: "lines" as const, lines: 1 }, { text: "He was late ______ the bus was slow.", type: "lines" as const, lines: 1 } ] },
      // 59
      { type: "matching" as const, title: "Match Sight Words to Sentences", instruction: "Draw a line from each sight word to the sentence where it fits.", left: ["said", "because", "would", "there"], right: ["I want to go ___ it is fun.", "She ___ 'hello' to me.", "I ___ like a drink, please.", "___ is a cat on the roof."] },
      // 60 — SPARK
      { type: "open-response" as const, title: "Sight Word Spark: Teach Someone!", instruction: "Choose 5 sight words. Teach them to someone in your family using the Look-Say-Cover-Write-Check method. How did they do?", parentTip: "Teaching others is the deepest level of learning.", prompts: [ { text: "I taught: ______", type: "lines" as const, lines: 1 }, { text: "Words I taught: ___________________________", type: "lines" as const, lines: 1 }, { text: "They got _____ out of 5 correct!", type: "lines" as const, lines: 1 } ] },
      // 61
      { type: "home-activity" as const, title: "Sight Word Practice", instruction: "Daily games to build sight word automaticity.", parentTip: "Aim for 10 minutes daily. Flash cards at breakfast or in the car.", suggestions: [ "Flash 5 sight words each morning at breakfast.", "Play Sight Word Snap or Memory using homemade cards.", "Write a sight word in sand, salt or flour.", "Hide sight word cards around the house — read the word to collect it." ] },
      // 62
      { type: "circle-correct" as const, title: "Spot the Correct Spelling (Set F)", instruction: "Circle the correct spelling.", questions: [ { prompt: "many", options: ["meny", "many", "manny"] }, { prompt: "people", options: ["peple", "people", "pepol"] }, { prompt: "other", options: ["uther", "other", "othur"] }, { prompt: "about", options: ["abowt", "about", "abot"] } ] },
      // 63
      { type: "open-response" as const, title: "Write New Words Three Times (Set C)", instruction: "Write each word three times.", prompts: [ { text: "many: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "people: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "other: ______ ______ ______", type: "lines" as const, lines: 1 }, { text: "about: ______ ______ ______", type: "lines" as const, lines: 1 } ] },
      // 64
      { type: "matching" as const, title: "Match New Sight Words (Set B)", instruction: "Match each word.", left: ["many", "people", "other", "about", "after"], right: ["about", "after", "people", "many", "other"] },
      // 65
      { type: "open-response" as const, title: "Use in Sentences (Set F)", instruction: "Write a sentence using each word.", prompts: [ { text: "many: ___________________________", type: "lines" as const, lines: 2 }, { text: "people: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 66
      { type: "circle-correct" as const, title: "Which Word Fits? (Set E)", instruction: "Circle the correct sight word.", questions: [ { prompt: "There are ___ birds in the tree.", options: ["meny", "many", "manny"] }, { prompt: "The ___ at the park were happy.", options: ["peple", "people", "pepol"] }, { prompt: "I chose the ___ one.", options: ["uther", "other", "othur"] }, { prompt: "Tell me ___ your day.", options: ["abowt", "about", "abot"] } ] },
      // 67
      { type: "sorting" as const, title: "Grand Sort: All Sight Words", instruction: "Sort: know it or need practice?", columns: ["Know It!", "Need Practice"], items: [ { label: "the" }, { label: "said" }, { label: "could" }, { label: "because" }, { label: "many" }, { label: "people" }, { label: "other" }, { label: "about" }, { label: "were" }, { label: "would" } ] },
      // 68
      { type: "open-response" as const, title: "Sight Word Story (Set B)", instruction: "Write a story using at least 10 sight words. Circle each one.", prompts: [ { text: "My story:", type: "lines" as const, lines: 5 }, { text: "I used ______ sight words!", type: "lines" as const, lines: 1 } ] },
      // 69
      { type: "sequence" as const, title: "Alphabetical Order (Set B)", instruction: "Put these sight words in alphabetical order.", items: [ { label: "said, come, there, about, like, people, because, would" }, { label: "1. ______ 2. ______ 3. ______ 4. ______" }, { label: "5. ______ 6. ______ 7. ______ 8. ______" } ] },
      // 70
      { type: "open-response" as const, title: "Sight Word Crossword Clues", instruction: "Read each clue and write the sight word answer.", prompts: [ { text: "Past tense of 'say': ______", type: "lines" as const, lines: 1 }, { text: "Past tense of 'is': ______", type: "lines" as const, lines: 1 }, { text: "The reason why: ______", type: "lines" as const, lines: 1 }, { text: "The number of something big: ______", type: "lines" as const, lines: 1 } ] },
      // ─── EXTENDING (71–100): Fluency, application, assessment ───
      // 71
      { type: "circle-correct" as const, title: "Spot the Correct Spelling (Set G)", instruction: "Circle the correct spelling.", questions: [ { prompt: "again", options: ["agen", "again", "agin"] }, { prompt: "every", options: ["evry", "every", "evrey"] }, { prompt: "does", options: ["duz", "dose", "does"] }, { prompt: "know", options: ["no", "know", "noe"] }, { prompt: "once", options: ["wunce", "once", "ounce"] } ] },
      // 72
      { type: "open-response" as const, title: "Dictation Challenge (Set A)", instruction: "Your parent says each word. Write it from memory.", parentTip: "Say: said, because, could, people, again, every, does, know.", prompts: [ { text: "1. ______ 2. ______ 3. ______ 4. ______", type: "lines" as const, lines: 1 }, { text: "5. ______ 6. ______ 7. ______ 8. ______", type: "lines" as const, lines: 1 } ] },
      // 73
      { type: "matching" as const, title: "Match Sight Words to Clues (Set B)", instruction: "Draw a line from each clue to the correct sight word.", left: ["one more time", "each and all", "to be aware of", "one time only"], right: ["once", "know", "again", "every"] },
      // 74
      { type: "open-response" as const, title: "Use in Sentences (Set G)", instruction: "Write a sentence using each word.", prompts: [ { text: "again: ___________________________", type: "lines" as const, lines: 2 }, { text: "every: ___________________________", type: "lines" as const, lines: 2 }, { text: "know: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Tip: Tricky Words Have Tricky Parts!", instruction: "Many sight words have one tricky part. In 'said', the tricky part is 'ai' (it sounds like /e/ not /ay/). In 'people', the tricky part is 'eo'. When learning a tricky word, find the tricky part and give it extra attention!", parentTip: "Identifying the tricky part focuses memory on the critical letters.", prompts: [ { text: "The tricky part of 'said' is: ______", type: "lines" as const, lines: 1 }, { text: "The tricky part of 'because' is: ______", type: "lines" as const, lines: 1 }, { text: "The tricky part of 'people' is: ______", type: "lines" as const, lines: 1 } ] },
      // 76
      { type: "sorting" as const, title: "Sort: Find the Tricky Part", instruction: "Sort: does the word have a tricky spelling or is it regular?", columns: ["Tricky spelling", "Regular spelling"], items: [ { label: "said (ai=/e/)" }, { label: "can" }, { label: "people (eo)" }, { label: "in" }, { label: "because (au)" }, { label: "go" }, { label: "once (o=/w/)" }, { label: "at" } ] },
      // 77
      { type: "circle-correct" as const, title: "Which Word Fits? (Set F)", instruction: "Circle the correct word.", questions: [ { prompt: "Can we do that ___?", options: ["agen", "again", "agin"] }, { prompt: "___ day I read a book.", options: ["Evry", "Every", "Evrey"] }, { prompt: "She ___ not like spiders.", options: ["duz", "dose", "does"] }, { prompt: "I ___ the answer!", options: ["no", "know", "noe"] } ] },
      // 78
      { type: "open-response" as const, title: "Write a Paragraph Using 15 Sight Words", instruction: "Write a paragraph using at least 15 different sight words. Underline each one.", parentTip: "This integrates sight word knowledge into extended writing.", prompts: [ { text: "My paragraph:", type: "lines" as const, lines: 5 }, { text: "Sight words used: ______", type: "lines" as const, lines: 1 } ] },
      // 79
      { type: "matching" as const, title: "Confusing Pairs Match", instruction: "Draw a line to match each word to its meaning.", left: ["there (place)", "their (belonging)", "to (toward)", "too (also)", "two (number)", "know (aware)", "no (opposite of yes)"], right: ["not yes", "the number 2", "also", "toward a place", "to be aware", "belonging to them", "a place"] },
      // 80 — SPARK
      { type: "open-response" as const, title: "Sight Word Spark: How Many Do You Know?", instruction: "Here is a list of 30 sight words. Read each one as fast as you can. Tick the ones you know instantly. How many can you get?", parentTip: "This self-assessment celebrates growth and identifies remaining practice words.", prompts: [ { text: "the __ and __ is __ said __ was __ they __ have __ come __ to __ do __", type: "lines" as const, lines: 1 }, { text: "like __ some __ were __ there __ could __ would __ should __ because __", type: "lines" as const, lines: 1 }, { text: "many __ people __ other __ about __ again __ every __ does __ know __", type: "lines" as const, lines: 1 }, { text: "I got ______ out of 28!", type: "lines" as const, lines: 1 } ] },
      // 81
      { type: "open-response" as const, title: "Sight Word Story (Set C)", instruction: "Write your best story yet! Use as many sight words as possible.", prompts: [ { text: "My story:", type: "lines" as const, lines: 6 }, { text: "Sight words I used: ______", type: "lines" as const, lines: 1 } ] },
      // 82
      { type: "circle-correct" as const, title: "Grand Sight Word Quiz (Set A)", instruction: "Circle the correct spelling.", questions: [ { prompt: "said", options: ["sed", "said", "siad"] }, { prompt: "because", options: ["becuz", "because", "becose"] }, { prompt: "people", options: ["peepol", "people", "pepul"] }, { prompt: "could", options: ["cood", "could", "culd"] }, { prompt: "would", options: ["wud", "would", "wold"] } ] },
      // 83
      { type: "open-response" as const, title: "Look-Say-Cover-Write-Check Grand Challenge", instruction: "Use the strategy on these 6 tricky words.", prompts: [ { text: "said → write: ______ correct? ______", type: "lines" as const, lines: 1 }, { text: "because → write: ______ correct? ______", type: "lines" as const, lines: 1 }, { text: "people → write: ______ correct? ______", type: "lines" as const, lines: 1 }, { text: "should → write: ______ correct? ______", type: "lines" as const, lines: 1 }, { text: "again → write: ______ correct? ______", type: "lines" as const, lines: 1 }, { text: "every → write: ______ correct? ______", type: "lines" as const, lines: 1 } ] },
      // 84
      { type: "sorting" as const, title: "Grand Sort: All 30 Sight Words", instruction: "Sort all your sight words: confident or still practising?", columns: ["Confident", "Still Practising"], items: [ { label: "the" }, { label: "said" }, { label: "was" }, { label: "because" }, { label: "could" }, { label: "people" }, { label: "again" }, { label: "every" }, { label: "know" }, { label: "once" } ] },
      // 85
      { type: "open-response" as const, title: "Write Sight Words from Memory", instruction: "Cover the word list. Write as many sight words as you can from memory!", prompts: [ { text: "Sight words from memory:", type: "lines" as const, lines: 4 }, { text: "I remembered ______ words!", type: "lines" as const, lines: 1 } ] },
      // 86
      { type: "circle-correct" as const, title: "Grand Sight Word Quiz (Set B)", instruction: "Which word completes each sentence?", questions: [ { prompt: "'Hello,' ______ the teacher.", options: ["sed", "said", "siad"] }, { prompt: "I ____ not go to school ____ I was sick.", options: ["could, because", "coud, becuz", "could, becose"] }, { prompt: "______ person in the class got a sticker.", options: ["Evry", "Every", "Evrey"] } ] },
      // 87
      { type: "matching" as const, title: "Grand Sight Word Match", instruction: "Match 12 sight words.", left: ["the", "said", "was", "because", "could", "people", "again", "every", "know", "once", "should", "would"], right: ["once", "again", "the", "every", "would", "could", "know", "people", "should", "was", "said", "because"] },
      // 88
      { type: "open-response" as const, title: "Sight Word Sentences Grand Challenge", instruction: "Write one sentence for each of these tricky sight words.", prompts: [ { text: "said: ___________________________", type: "lines" as const, lines: 1 }, { text: "because: ___________________________", type: "lines" as const, lines: 1 }, { text: "people: ___________________________", type: "lines" as const, lines: 1 }, { text: "every: ___________________________", type: "lines" as const, lines: 1 }, { text: "again: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 89
      { type: "sequence" as const, title: "Alphabetical Order: Grand Challenge", instruction: "Put these 10 sight words in alphabetical order.", items: [ { label: "said, because, could, every, again, people, know, would, once, should" }, { label: "1. ______ 2. ______ 3. ______ 4. ______ 5. ______" }, { label: "6. ______ 7. ______ 8. ______ 9. ______ 10. ______" } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Tip: You Are a Sight Word Champion!", instruction: "You can now read and spell many high-frequency words! These words appear on almost every page of every book. The faster you can read them, the easier and more enjoyable reading becomes. Keep practising — and keep reading!", parentTip: "This affirms the child's progress and encourages continued practice.", prompts: [ { text: "I am proud that I can spell: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 91
      { type: "open-response" as const, title: "Write 30 Sight Words from Memory", instruction: "Write as many sight words as you can from memory. Aim for 30!", prompts: [ { text: "My sight words:", type: "lines" as const, lines: 5 }, { text: "Total: ______", type: "lines" as const, lines: 1 } ] },
      // 92
      { type: "circle-correct" as const, title: "Speed Test: Instant or Not?", instruction: "Read each word. Is it INSTANT or do you need to THINK?", questions: [ { prompt: "said", options: ["Instant", "Need to think"] }, { prompt: "because", options: ["Instant", "Need to think"] }, { prompt: "people", options: ["Instant", "Need to think"] }, { prompt: "would", options: ["Instant", "Need to think"] }, { prompt: "every", options: ["Instant", "Need to think"] }, { prompt: "again", options: ["Instant", "Need to think"] } ] },
      // 93
      { type: "open-response" as const, title: "Dictation Grand Challenge", instruction: "Your parent says each word. Write it from memory.", parentTip: "Say: said, because, could, would, should, people, every, again, once, know.", prompts: [ { text: "1. ______ 2. ______ 3. ______ 4. ______ 5. ______", type: "lines" as const, lines: 1 }, { text: "6. ______ 7. ______ 8. ______ 9. ______ 10. ______", type: "lines" as const, lines: 1 }, { text: "I got ______ out of 10 correct!", type: "lines" as const, lines: 1 } ] },
      // 94
      { type: "sorting" as const, title: "Sort: My Best and Trickiest Words", instruction: "Which sight words are you best at? Which are trickiest?", columns: ["My best words", "My trickiest words"], items: [ { label: "the" }, { label: "said" }, { label: "because" }, { label: "could" }, { label: "people" }, { label: "every" }, { label: "again" }, { label: "know" }, { label: "once" }, { label: "should" } ] },
      // 95
      { type: "open-response" as const, title: "Sight Word Mini Book", instruction: "Plan a mini book using sight words. Write one sentence per page.", prompts: [ { text: "Page 1: ___________________________", type: "lines" as const, lines: 1 }, { text: "Page 2: ___________________________", type: "lines" as const, lines: 1 }, { text: "Page 3: ___________________________", type: "lines" as const, lines: 1 }, { text: "Page 4: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 96
      { type: "matching" as const, title: "Final Match: All Confusing Pairs", instruction: "Draw a line to match each word to the correct meaning.", left: ["there", "their", "to", "too", "two", "know", "no"], right: ["the number 2", "toward", "also", "belonging to them", "a place", "not yes", "to be aware of"] },
      // 97
      { type: "open-response" as const, title: "Write Your Best Sight Word Story", instruction: "Write the longest, most interesting story you can. Use at least 20 sight words. Underline each one!", prompts: [ { text: "My best story:", type: "lines" as const, lines: 7 } ] },
      // 98
      { type: "home-activity" as const, title: "Sight Word Champion Challenge", instruction: "You are a sight word champion! Keep practising.", suggestions: [ "Read every day — the more you read, the faster your sight words become.", "Play Sight Word Bingo with your family.", "Write a letter using as many sight words as you can.", "Teach a younger child 5 sight words using Look-Say-Cover-Write-Check." ] },
      // 99
      { type: "open-response" as const, title: "Sight Word Self-Assessment", instruction: "Rate yourself on each sight word group.", prompts: [ { text: "Core words (the, and, is, it, in): ______", type: "lines" as const, lines: 1 }, { text: "Tricky words (said, was, they, have): ______", type: "lines" as const, lines: 1 }, { text: "-ould words (could, would, should): ______", type: "lines" as const, lines: 1 }, { text: "Hard words (because, people, every, again): ______", type: "lines" as const, lines: 1 }, { text: "Confusing pairs (there/their, to/too/two): ______", type: "lines" as const, lines: 1 } ] },
      // 100 — SPARK
      { type: "open-response" as const, title: "Sight Word Spark: Words Open Doors!", instruction: "Sight words are the keys that unlock reading. The more words you can read instantly, the more books you can enjoy. What book are you excited to read now that you know so many words?", parentTip: "This connects sight word mastery to the joy of independent reading.", prompts: [ { text: "I want to read: ___________________________", type: "lines" as const, lines: 1 }, { text: "I can read ______ sight words instantly!", type: "lines" as const, lines: 1 } ] },
    ],
  },

  // ── WS 3: Sentences — Punctuation ─────────────────────────
  {
    slug: "sentence-punctuation",
    title: "Sentences That Make Sense",
    strand: "Language",
    description:
      "Write simple sentences using capital letters, full stops and question marks — building foundational writing conventions.",
    learningGuide: {
      concept:
        "A sentence is a group of words that expresses a complete thought. It must start with a capital letter and end with a full stop (or question mark or exclamation mark). Understanding sentence boundaries is essential for both reading and writing.",
      activation:
        "Read aloud a short sentence in a flat monotone, then read it with proper phrasing and emphasis. Ask: 'Which sounded better? What do the full stops and capitals help us do?' This builds the connection between punctuation and spoken rhythm.",
      check:
        "Show your child a paragraph from a familiar book. Can they find and name each type of punctuation? Can they explain why each piece of punctuation is there?",
    },
    lesson: {
      title: "Capital Letters and Full Stops",
      objective:
        "Write simple sentences with correct sentence boundary punctuation (capital letter and full stop/question mark).",
      materials: [
        "Pencil and ruler",
        "Lined paper",
        "A red pen or pencil for checking",
        "Any picture book (to find examples of punctuation)",
      ],
      intro: {
        title: "Sentences Are Like Rooms",
        script:
          "A sentence is like a room in a house. A room has a door you walk in through — that is the capital letter at the start. And a room has a wall at the end — that is the full stop. Without the door and the wall, everything would run together! Let us find some sentences in this book. See how every single one starts with a capital and ends with a full stop or question mark?",
        action:
          "Open any picture book and point to 5 sentences. Have your child identify the capital letter and ending punctuation in each one.",
      },
      mainActivity: {
        title: "Fix the Sentences",
        script:
          "I have written some sentences but I forgot the capitals and full stops — oh dear! Can you be the editor and fix them for me? Read each one, decide what type of ending it needs, and add the correct punctuation.",
        action:
          "Write 5 to 6 sentences missing their capitals and end punctuation on paper. Your child fixes them with a red pencil.",
      },
      wrapUp: {
        title: "Write Your Own",
        script:
          "Now you are going to write your own sentences. I want to see your best handwriting AND your best punctuation. Three sentences — ready, set, go!",
        action:
          "Your child writes 3 original sentences from a prompt (e.g. 'Write about your favourite animal'). Check for capital letters and full stops together.",
      },
      parentTip:
        "When proofreading your child's writing, focus on one convention at a time — first capital letters, then full stops. Do not overwhelm with too many corrections at once. Ask: 'Does every sentence start with a capital? Where is the full stop?'",
      extension:
        "Play 'Sentence Surgeon': write jumbled words on strips of paper and ask your child to rearrange them into a sensible sentence with correct punctuation. This covers AC V9 Year 1 — writing simple sentences with sentence boundary punctuation.",
      resources: [
        {
          title: "ABC Education — Sentences and Punctuation",
          url: "https://www.abc.net.au/education/learn-english/writing/",
          description:
            "Video explanations and activities covering sentences and punctuation for Year 1.",
        },
        {
          title: "Khan Academy Kids — Writing Sentences",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive activities building sentence construction skills for early writers.",
        },
        {
          title: "Reading Eggs — Grammar",
          url: "https://readingeggs.com.au/",
          description:
            "Grammar lessons integrated with reading, including sentence structure and punctuation.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Sentence recognition, capital letters & full stops ───
      // 1
      { type: "circle-correct" as const, title: "Sentence or Not? (Set A)", instruction: "Circle S if it is a complete sentence. Circle N if it is not.", parentTip: "Ask your child: 'Does it tell me something complete? Can it stand on its own?'", questions: [ { prompt: "The dog ran fast.", options: ["S", "N"] }, { prompt: "jumped over the", options: ["S", "N"] }, { prompt: "My cat likes fish.", options: ["S", "N"] } ] },
      // 2
      { type: "circle-correct" as const, title: "Sentence or Not? (Set B)", instruction: "Circle S if it is a complete sentence. Circle N if it is not.", questions: [ { prompt: "the big red", options: ["S", "N"] }, { prompt: "We went to the park.", options: ["S", "N"] }, { prompt: "Running and jumping", options: ["S", "N"] } ] },
      // 3
      { type: "circle-correct" as const, title: "Find the Capital Letter", instruction: "Circle the word that should have a capital letter at the start of each sentence.", parentTip: "Every sentence begins with a capital letter. Names of people and places also get capitals.", questions: [ { prompt: "the cat sat on the mat.", options: ["the", "cat", "mat"] }, { prompt: "my name is Jack.", options: ["my", "name", "Jack"] }, { prompt: "we like to swim.", options: ["we", "like", "swim"] } ] },
      // 4
      { type: "matching" as const, title: "Match the Sentence to Its Punctuation", instruction: "Draw a line from each sentence to the correct ending mark.", parentTip: "Read each sentence aloud — your voice helps you hear whether it is a statement, question or exclamation.", left: ["The sun is hot", "Where is my hat", "We are going home", "What a great day"], right: [".", "?", ".", "!"] },
      // 5
      { type: "open-response" as const, title: "Add the Full Stop (Set A)", instruction: "Each sentence is missing its full stop. Write the sentence and add the full stop at the end.", prompts: [ { text: "The bird is in the tree  ←add .", type: "lines" as const, lines: 1 }, { text: "I like to run fast  ←add .", type: "lines" as const, lines: 1 }, { text: "My mum has a red bag  ←add .", type: "lines" as const, lines: 1 } ] },
      // 6
      { type: "circle-correct" as const, title: "Spot the Correct Sentence (Set A)", instruction: "Circle the sentence that uses a capital letter and full stop correctly.", parentTip: "Only one option has BOTH the capital at the start AND the full stop at the end.", questions: [ { prompt: "Which is correct?", options: ["the dog is big.", "The dog is big.", "The dog is big"] }, { prompt: "Which is correct?", options: ["I can run fast.", "i can run fast.", "I can run fast"] } ] },
      // 7
      { type: "sorting" as const, title: "Correct or Incorrect? (Set A)", instruction: "Sort each sentence: is the punctuation correct or does it need fixing?", columns: ["Correct", "Needs fixing"], items: [ { label: "The cat is fluffy." }, { label: "my dog can run" }, { label: "She likes apples." }, { label: "we went to school" }, { label: "He is tall." }, { label: "the sun is hot" } ] },
      // 8
      { type: "open-response" as const, title: "Fix the Capitals (Set A)", instruction: "Rewrite each sentence with the correct capital letter at the start.", parentTip: "Cover the incorrect version after your child reads it, so they write from memory with the fix.", prompts: [ { text: "the cat sat on the mat → ______", type: "lines" as const, lines: 1 }, { text: "my dog is very fluffy → ______", type: "lines" as const, lines: 1 }, { text: "she can jump high → ______", type: "lines" as const, lines: 1 } ] },
      // 9
      { type: "sequence" as const, title: "Unscramble the Sentence (Set A)", instruction: "Put the words in the correct order. Write the sentence with a capital letter and full stop.", parentTip: "Ask your child to say it aloud in different orders until it sounds right.", items: [ { label: "fast / dog / ran / the → ______" }, { label: "likes / my / fish / cat → ______" }, { label: "big / is / sun / the → ______" } ] },
      // 10
      { type: "circle-correct" as const, title: "Full Stop or Question Mark? (Set A)", instruction: "Circle the correct ending punctuation for each sentence.", questions: [ { prompt: "The sun is shining today", options: [".", "?"] }, { prompt: "What is your name", options: [".", "?"] }, { prompt: "She has a blue bag", options: [".", "?"] }, { prompt: "Where do you live", options: [".", "?"] } ] },
      // 11
      { type: "open-response" as const, title: "Write a Sentence About the Picture", instruction: "Look at the word below. Write one sentence about it. Use a capital letter and a full stop.", parentTip: "Encourage your child to say the sentence aloud before writing.", prompts: [ { text: "Write a sentence about: a cat", type: "lines" as const, lines: 2 }, { text: "Write a sentence about: the sun", type: "lines" as const, lines: 2 } ] },
      // 12
      { type: "matching" as const, title: "Match Sentence Halves (Set A)", instruction: "Draw a line to join each beginning to its best ending.", left: ["The bird sat", "I can run", "My mum likes", "The fish swam"], right: ["very fast.", "in the tree.", "in the pond.", "to read books."] },
      // 13
      { type: "circle-correct" as const, title: "Spot the Correct Sentence (Set B)", instruction: "Circle the sentence that is written correctly.", questions: [ { prompt: "Which is correct?", options: ["she is my friend.", "She is my friend.", "She is my friend"] }, { prompt: "Which is correct?", options: ["We can play.", "we can play.", "we can play"] }, { prompt: "Which is correct?", options: ["he has a hat", "He has a hat.", "he has a hat."] } ] },
      // 14
      { type: "open-response" as const, title: "Fix the Full Stops (Set A)", instruction: "These sentences are missing their full stops. Rewrite them correctly.", parentTip: "Read the sentence aloud — when your voice drops and pauses, that is where the full stop goes.", prompts: [ { text: "I have a red ball  → ______", type: "lines" as const, lines: 1 }, { text: "The dog likes to dig  → ______", type: "lines" as const, lines: 1 }, { text: "We play in the garden  → ______", type: "lines" as const, lines: 1 } ] },
      // 15 — TIP
      { type: "sorting" as const, title: "Statement or Question? (Set A)", instruction: "Sort each sentence: is it a statement (telling) or a question (asking)?", parentTip: "Tip: A statement tells you something. A question asks you something. Read each one aloud and listen to your voice — does it go up at the end (question) or stay flat (statement)?", columns: ["Statement (.)", "Question (?)"], items: [ { label: "The cat is black" }, { label: "Where is the ball" }, { label: "I like ice cream" }, { label: "What is your name" }, { label: "She has a hat" }, { label: "Do you like dogs" } ] },
      // 16
      { type: "circle-correct" as const, title: "Choose the Ending Mark (Set A)", instruction: "Circle the best punctuation mark for each sentence.", questions: [ { prompt: "How old are you", options: [".", "?", "!"] }, { prompt: "My favourite colour is blue", options: [".", "?", "!"] }, { prompt: "Watch out for the bee", options: [".", "?", "!"] }, { prompt: "She has a new dress", options: [".", "?", "!"] } ] },
      // 17
      { type: "open-response" as const, title: "Write Two Questions", instruction: "Write two questions. Remember to start with a capital and end with a question mark.", parentTip: "Suggest question starters: What, Where, Who, Why, How, Do, Can, Is.", prompts: [ { text: "Question 1:", type: "lines" as const, lines: 2 }, { text: "Question 2:", type: "lines" as const, lines: 2 } ] },
      // 18
      { type: "sequence" as const, title: "Unscramble the Sentence (Set B)", instruction: "Put the words in the correct order. Add the capital and full stop.", items: [ { label: "to / we / park / went / the → ______" }, { label: "hat / red / a / wore / she → ______" }, { label: "a / found / I / shell → ______" } ] },
      // 19
      { type: "circle-correct" as const, title: "Which Needs a Question Mark?", instruction: "Circle the sentence that is a question.", parentTip: "Questions ASK something. They usually start with who, what, where, when, why, how, do, can, or is.", questions: [ { prompt: "Which is a question?", options: ["I like cats.", "Do you like cats?", "Cats are soft."] }, { prompt: "Which is a question?", options: ["Where is my hat?", "My hat is red.", "I lost my hat."] } ] },
      // 20 — SPARK
      { type: "home-activity" as const, title: "Punctuation Hunt", instruction: "Go on a punctuation hunt! Look around your house for full stops, capital letters and question marks.", parentTip: "Spark: Punctuation is everywhere! Can you find full stops on a cereal box, a book, or a letter? How many different punctuation marks can you find in your kitchen?", suggestions: [ "Find 5 full stops on food packaging and read the sentences aloud.", "Look at a page in a picture book and count all the capital letters.", "Find a question mark anywhere in your home — what does the question ask?", "Write your name with a big capital letter — stick it on your bedroom door." ] },
      // ─── DEVELOPING (21–50): Exclamation marks, multiple sentences, proofreading ───
      // 21
      { type: "circle-correct" as const, title: "Statement, Question or Exclamation? (Set A)", instruction: "Circle the correct punctuation for each sentence.", parentTip: "An exclamation shows strong feeling: surprise, excitement, warning.", questions: [ { prompt: "I can see a rainbow", options: [".", "?", "!"] }, { prompt: "What time is it", options: [".", "?", "!"] }, { prompt: "Look out for the car", options: [".", "?", "!"] }, { prompt: "The bus is here", options: [".", "?", "!"] } ] },
      // 22
      { type: "sorting" as const, title: "Sort the Sentences by Mark (Set A)", instruction: "Sort each sentence by the punctuation mark it needs at the end.", columns: ["Full stop .", "Question mark ?", "Exclamation mark !"], items: [ { label: "The bird sat in the tree" }, { label: "Where is my lunch box" }, { label: "Watch out for the bee" }, { label: "My favourite colour is green" }, { label: "Can you help me please" }, { label: "Wow, that was amazing" } ] },
      // 23
      { type: "open-response" as const, title: "Add All Three Marks", instruction: "Write one sentence that ends with a full stop, one with a question mark, and one with an exclamation mark.", parentTip: "Model an example of each type before your child writes.", prompts: [ { text: "Statement (.): ______", type: "lines" as const, lines: 2 }, { text: "Question (?): ______", type: "lines" as const, lines: 2 }, { text: "Exclamation (!): ______", type: "lines" as const, lines: 2 } ] },
      // 24
      { type: "circle-correct" as const, title: "Fix the Error (Set A)", instruction: "One thing is wrong in each sentence. Circle what needs fixing.", questions: [ { prompt: "the cat is on the mat.", options: ["Capital missing", "Full stop missing", "All correct"] }, { prompt: "My dog is fluffy", options: ["Capital missing", "Full stop missing", "All correct"] }, { prompt: "She has a red hat.", options: ["Capital missing", "Full stop missing", "All correct"] } ] },
      // 25
      { type: "open-response" as const, title: "Proofread and Fix (Set A)", instruction: "Each sentence has one mistake. Rewrite it correctly.", parentTip: "Ask your child to read the sentence first and find the error before rewriting.", prompts: [ { text: "the dog ran fast. → ______", type: "lines" as const, lines: 1 }, { text: "I like apples → ______", type: "lines" as const, lines: 1 }, { text: "where is my shoe. → ______", type: "lines" as const, lines: 1 }, { text: "she is My friend. → ______", type: "lines" as const, lines: 1 } ] },
      // 26
      { type: "matching" as const, title: "Match Sentence Halves (Set B)", instruction: "Draw a line to join each beginning to its best ending.", parentTip: "Read each combination aloud to check it makes sense.", left: ["We went to", "The baby is", "My friend can", "Dad cooked"], right: ["run very fast.", "the beach.", "sleeping now.", "dinner for us."] },
      // 27
      { type: "circle-correct" as const, title: "Statement, Question or Exclamation? (Set B)", instruction: "Circle the correct ending mark.", questions: [ { prompt: "That is so cool", options: [".", "?", "!"] }, { prompt: "Where are my shoes", options: [".", "?", "!"] }, { prompt: "The train is late", options: [".", "?", "!"] }, { prompt: "Help me please", options: [".", "?", "!"] }, { prompt: "Do you have a pet", options: [".", "?", "!"] } ] },
      // 28
      { type: "open-response" as const, title: "Write About Your Pet (or Dream Pet)", instruction: "Write 3 sentences about a pet you have or would like to have. Check each sentence has a capital and an ending mark.", prompts: [ { text: "Sentence 1:", type: "lines" as const, lines: 2 }, { text: "Sentence 2:", type: "lines" as const, lines: 2 }, { text: "Sentence 3:", type: "lines" as const, lines: 2 } ] },
      // 29
      { type: "sorting" as const, title: "Correct or Incorrect? (Set B)", instruction: "Sort each sentence: does it have correct punctuation or not?", parentTip: "Check two things: capital letter at the start AND correct mark at the end.", columns: ["Correct", "Needs fixing"], items: [ { label: "Do you like fish?" }, { label: "the tree is tall." }, { label: "She can swim." }, { label: "where is my bag" }, { label: "Watch out!" }, { label: "i am six years old" } ] },
      // 30 — TIP
      { type: "sequence" as const, title: "Unscramble the Sentence (Set C)", instruction: "Put the words in the correct order. Add the capital letter and correct ending mark.", parentTip: "Tip: When you write a sentence, always check: Does it start with a capital? Does it end with the right mark? Does it make sense when I read it aloud?", items: [ { label: "your / is / what / name → ______?", }, { label: "the / fish / in / swam / pond / the → ______.", }, { label: "out / watch / for / the / ball → ______!", } ] },
      // 31
      { type: "circle-correct" as const, title: "How Many Sentences? (Set A)", instruction: "Read the group of words. Circle how many sentences there are.", parentTip: "Count the full stops and question marks — each one marks the end of a sentence.", questions: [ { prompt: "The cat sat. The dog ran.", options: ["1", "2", "3"] }, { prompt: "I like fish. She likes chips. We are hungry.", options: ["1", "2", "3"] }, { prompt: "My hat is red.", options: ["1", "2", "3"] } ] },
      // 32
      { type: "open-response" as const, title: "Add the Missing Capitals and Stops", instruction: "This passage is missing capital letters and full stops. Rewrite it correctly.", parentTip: "Read the passage aloud first — pause where you naturally stop speaking.", prompts: [ { text: "the sun is hot i like to swim we go to the beach → Rewrite:", type: "lines" as const, lines: 3 } ] },
      // 33
      { type: "matching" as const, title: "Match the Question to Its Answer", instruction: "Draw a line from each question to the correct answer.", left: ["What is your name?", "How old are you?", "Where do you live?", "Do you have a pet?"], right: ["I am six.", "Yes, I have a cat.", "My name is Sam.", "I live in Sydney."] },
      // 34
      { type: "circle-correct" as const, title: "Choose the Ending Mark (Set B)", instruction: "Circle the best ending mark for each sentence.", questions: [ { prompt: "The frog jumped into the pond", options: [".", "?", "!"] }, { prompt: "Is it raining outside", options: [".", "?", "!"] }, { prompt: "That spider is huge", options: [".", "?", "!"] }, { prompt: "My brother is taller than me", options: [".", "?", "!"] }, { prompt: "Can I have a biscuit", options: [".", "?", "!"] } ] },
      // 35
      { type: "open-response" as const, title: "Write Questions About a Picture", instruction: "Think of a picture from a book you like. Write 3 questions someone could ask about it.", parentTip: "Give question starters if needed: What is...? Where is...? Why did...? How many...?", prompts: [ { text: "Question 1:", type: "lines" as const, lines: 2 }, { text: "Question 2:", type: "lines" as const, lines: 2 }, { text: "Question 3:", type: "lines" as const, lines: 2 } ] },
      // 36
      { type: "sorting" as const, title: "Sort the Sentences by Mark (Set B)", instruction: "Sort each sentence by its ending punctuation mark.", columns: ["Full stop .", "Question mark ?", "Exclamation mark !"], items: [ { label: "We won the race" }, { label: "How old are you" }, { label: "That was so surprising" }, { label: "I have a red pencil" }, { label: "Who took my book" }, { label: "Run as fast as you can" } ] },
      // 37
      { type: "open-response" as const, title: "Proofread and Fix (Set B)", instruction: "Each sentence has one or two mistakes. Rewrite it correctly.", prompts: [ { text: "my brother is tall → ______", type: "lines" as const, lines: 1 }, { text: "do you like apples → ______", type: "lines" as const, lines: 1 }, { text: "the Bird can fly. → ______", type: "lines" as const, lines: 1 }, { text: "look Out for the snake → ______", type: "lines" as const, lines: 1 } ] },
      // 38
      { type: "circle-correct" as const, title: "Which Sentence Is Correct? (Set A)", instruction: "Circle the sentence that uses all punctuation correctly.", questions: [ { prompt: "Which is correct?", options: ["the ball is Red.", "The ball is red.", "The ball is red"] }, { prompt: "Which is correct?", options: ["can you swim?", "Can you swim?", "Can you swim."] }, { prompt: "Which is correct?", options: ["Watch out!", "watch out!", "Watch out."] } ] },
      // 39
      { type: "sequence" as const, title: "Unscramble the Question", instruction: "Put the words in the correct order to make a question. Add a capital and question mark.", items: [ { label: "you / do / like / apples → ______?", }, { label: "is / where / my / hat → ______?", }, { label: "old / how / you / are → ______?", }, { label: "we / can / play / outside → ______?", } ] },
      // 40 — SPARK
      { type: "home-activity" as const, title: "Punctuation in the Real World", instruction: "Explore how punctuation works in everyday life around you.", parentTip: "Spark: Think about it — without punctuation, how would you know when to pause or stop when reading? What would a book look like with NO full stops? Try reading a whole paragraph without pausing — how confusing is it?", suggestions: [ "Write a message to someone in your family using at least one full stop, one question mark and one exclamation mark.", "Find a sign or poster that uses an exclamation mark — why did the writer use it?", "Read a page from any book aloud with expression — pause at full stops and raise your voice for questions.", "Play Punctuation Police: look at your own writing from this week and check every sentence." ] },
      // 41
      { type: "open-response" as const, title: "Two Sentences From One (Set A)", instruction: "Each group of words is actually TWO sentences squished together. Rewrite them as two separate sentences with correct punctuation.", parentTip: "Read the words aloud — where your voice naturally pauses is where the first sentence ends.", prompts: [ { text: "the cat ran the dog barked → ______", type: "lines" as const, lines: 2 }, { text: "I like apples she likes grapes → ______", type: "lines" as const, lines: 2 }, { text: "the sun is hot we need hats → ______", type: "lines" as const, lines: 2 } ] },
      // 42
      { type: "circle-correct" as const, title: "How Many Sentences? (Set B)", instruction: "Read the passage. Circle how many sentences there are.", questions: [ { prompt: "My dog is brown. He can run fast. He likes to play.", options: ["1", "2", "3"] }, { prompt: "We went to the shop. Mum got milk.", options: ["1", "2", "3"] }, { prompt: "The bird sang a song. It was in the tree. The cat watched it.", options: ["1", "2", "3"] } ] },
      // 43
      { type: "matching" as const, title: "Match Sentence Halves (Set C)", instruction: "Draw a line to join each beginning to its best ending.", parentTip: "Read each combination to check it makes a sensible, complete thought.", left: ["The teacher read", "We played football", "My sister drew", "I ate my lunch"], right: ["at the park.", "a story to us.", "in the classroom.", "a picture of a cat."] },
      // 44
      { type: "open-response" as const, title: "Write a Mini Paragraph", instruction: "Write 3 sentences about what you did today. Remember: each sentence needs a capital and an ending mark.", parentTip: "A paragraph is a group of sentences about the same topic. This is your child's first practice at connected writing.", prompts: [ { text: "What I did today (3 sentences):", type: "lines" as const, lines: 6 } ] },
      // 45 — TIP
      { type: "circle-correct" as const, title: "Fix the Error (Set B)", instruction: "Find the mistake in each sentence and circle what needs fixing.", parentTip: "Tip: The three most common punctuation mistakes are: (1) forgetting the capital letter, (2) forgetting the full stop, and (3) using the wrong ending mark. Check for all three every time you write.", questions: [ { prompt: "we like to swim.", options: ["Capital missing", "Full stop wrong", "All correct"] }, { prompt: "Do you like cats.", options: ["Capital missing", "Full stop wrong", "All correct"] }, { prompt: "My mum is kind.", options: ["Capital missing", "Full stop wrong", "All correct"] }, { prompt: "she can Run fast.", options: ["Capital wrong", "Random capital", "All correct"] } ] },
      // 46
      { type: "sorting" as const, title: "Statement or Question? (Set B)", instruction: "Sort each sentence: is it telling (statement) or asking (question)?", columns: ["Statement (.)", "Question (?)"], items: [ { label: "Can I have some water" }, { label: "The park is close to my house" }, { label: "Where did you put the ball" }, { label: "My teacher is very nice" }, { label: "Is it time to go home" }, { label: "I finished my work" } ] },
      // 47
      { type: "open-response" as const, title: "Change Statements to Questions", instruction: "Turn each statement into a question. The first one is done for you.", parentTip: "Show how flipping the word order can turn a statement into a question: 'You can swim' becomes 'Can you swim?'", prompts: [ { text: "The cat is black. → Is the cat black? (example)", type: "lines" as const, lines: 1 }, { text: "You like pizza. → ______", type: "lines" as const, lines: 1 }, { text: "She can run fast. → ______", type: "lines" as const, lines: 1 }, { text: "He has a dog. → ______", type: "lines" as const, lines: 1 } ] },
      // 48
      { type: "circle-correct" as const, title: "Which Sentence Is Correct? (Set B)", instruction: "Circle the sentence that uses all punctuation correctly.", questions: [ { prompt: "Which is correct?", options: ["i have a cat.", "I have a Cat.", "I have a cat."] }, { prompt: "Which is correct?", options: ["where is the dog?", "Where is the dog?", "Where is the Dog?"] }, { prompt: "Which is correct?", options: ["That is amazing!", "that is amazing!", "That is Amazing!"] } ] },
      // 49
      { type: "open-response" as const, title: "Proofread and Fix (Set C)", instruction: "Find and fix all the mistakes in these sentences.", prompts: [ { text: "my sister is six she likes to Dance → ______", type: "lines" as const, lines: 2 }, { text: "the cat and the dog are Friends → ______", type: "lines" as const, lines: 2 }, { text: "can you see the bird it is in the tree → ______", type: "lines" as const, lines: 2 } ] },
      // 50
      { type: "matching" as const, title: "Match Questions to Answers (Set B)", instruction: "Draw a line from each question to the correct answer.", left: ["What colour is the sky?", "How many legs does a spider have?", "Where do fish live?", "Who is your best friend?"], right: ["In water.", "Blue.", "Eight.", "(Your answer)"] },
      // ─── CONSOLIDATING (51–80): Names, longer sentences, commas in lists ───
      // 51
      { type: "circle-correct" as const, title: "Capital Letters for Names (Set A)", instruction: "Circle the words that need a capital letter because they are names.", parentTip: "Names of people, places and pets always start with a capital letter — even in the middle of a sentence.", questions: [ { prompt: "I went to see jack.", options: ["I", "jack", "see"] }, { prompt: "My dog is called rex.", options: ["My", "dog", "rex"] }, { prompt: "We live in sydney.", options: ["We", "live", "sydney"] } ] },
      // 52
      { type: "open-response" as const, title: "Fix the Names (Set A)", instruction: "Rewrite each sentence with the correct capital letters for names.", prompts: [ { text: "my friend emma lives in brisbane. → ______", type: "lines" as const, lines: 1 }, { text: "We went to visit grandma rose. → ______", type: "lines" as const, lines: 1 }, { text: "my cat fluffy likes to sleep. → ______", type: "lines" as const, lines: 1 } ] },
      // 53
      { type: "sorting" as const, title: "Capital for a Name or Start of Sentence?", instruction: "Sort each capital letter: is it there because it starts a sentence or because it is a name?", columns: ["Start of sentence", "A name"], items: [ { label: "The (in: The bird sang.)" }, { label: "Jack (in: I saw Jack.)" }, { label: "She (in: She can swim.)" }, { label: "Sydney (in: We live in Sydney.)" }, { label: "My (in: My hat is red.)" }, { label: "Rex (in: Rex is my dog.)" } ] },
      // 54
      { type: "open-response" as const, title: "Write Sentences With Names", instruction: "Write a sentence about each person or place. Use capital letters for names.", parentTip: "Remind your child: 'the' and 'a' do not get capitals unless they start the sentence.", prompts: [ { text: "A sentence about your best friend:", type: "lines" as const, lines: 2 }, { text: "A sentence about where you live:", type: "lines" as const, lines: 2 }, { text: "A sentence about a pet (real or imagined):", type: "lines" as const, lines: 2 } ] },
      // 55
      { type: "circle-correct" as const, title: "Commas in Lists (Set A)", instruction: "Circle the sentence that uses commas in a list correctly.", parentTip: "In a list of three or more things, put a comma between each item (except before 'and').", questions: [ { prompt: "Which uses commas correctly?", options: ["I like cats dogs and fish.", "I like cats, dogs and fish.", "I like, cats dogs, and fish."] }, { prompt: "Which uses commas correctly?", options: ["She has a red, blue and green hat.", "She has a red blue and green hat.", "She, has a red blue, and green hat."] } ] },
      // 56
      { type: "open-response" as const, title: "Add Commas to Lists (Set A)", instruction: "Rewrite each sentence adding commas in the correct places.", prompts: [ { text: "I packed a hat a drink and a sandwich. → ______", type: "lines" as const, lines: 1 }, { text: "We saw birds fish and butterflies. → ______", type: "lines" as const, lines: 1 }, { text: "My bag has books pencils and a ruler. → ______", type: "lines" as const, lines: 1 } ] },
      // 57
      { type: "matching" as const, title: "Match Sentence Halves (Set D)", instruction: "Draw a line to join each beginning to its best ending.", left: ["On Monday we went", "The cake had chocolate,", "My favourite animals are", "Mum bought apples,"], right: ["cats, dogs and rabbits.", "to the zoo.", "cream and sprinkles.", "bananas and grapes."] },
      // 58
      { type: "open-response" as const, title: "Write a List Sentence (Set A)", instruction: "Write a sentence that includes a list of three things. Use commas correctly.", parentTip: "Give examples: 'I like pizza, pasta and rice.' or 'The bag has a book, a pen and an eraser.'", prompts: [ { text: "Three foods I like:", type: "lines" as const, lines: 2 }, { text: "Three colours I can see:", type: "lines" as const, lines: 2 }, { text: "Three things in my bedroom:", type: "lines" as const, lines: 2 } ] },
      // 59
      { type: "circle-correct" as const, title: "Capital Letters for Names (Set B)", instruction: "Circle the name that needs a capital letter.", questions: [ { prompt: "my teacher is mrs smith.", options: ["my", "teacher", "mrs smith"] }, { prompt: "We went to perth for the holidays.", options: ["We", "perth", "holidays"] }, { prompt: "I read a book by dr seuss.", options: ["I", "book", "dr seuss"] } ] },
      // 60 — SPARK
      { type: "home-activity" as const, title: "Capital Letter Detectives", instruction: "Hunt for capital letters in the real world and figure out WHY they are there.", parentTip: "Spark: Why do you think names get capital letters but other words do not? If everything was capitalised, would it be easier or harder to read? Try writing a sentence in ALL CAPITALS — how does it look and feel different?", suggestions: [ "Look at a street sign — why do the words have capital letters?", "Find 5 capital letters in a book and decide: is it a name or the start of a sentence?", "Write a sentence about someone in your family using their name correctly.", "Make a list of all the proper nouns (names) you can think of in 2 minutes." ] },
      // 61
      { type: "open-response" as const, title: "Two Sentences From One (Set B)", instruction: "These are two sentences joined together. Rewrite them as two separate sentences.", prompts: [ { text: "My brother likes soccer he plays every Saturday → ______", type: "lines" as const, lines: 2 }, { text: "The cat jumped on the bed it went to sleep → ______", type: "lines" as const, lines: 2 }, { text: "We had pizza for dinner it was yummy → ______", type: "lines" as const, lines: 2 } ] },
      // 62
      { type: "circle-correct" as const, title: "Which Sentence Is Correct? (Set C)", instruction: "Circle the sentence that uses all punctuation correctly.", parentTip: "Check: capital at start, correct ending mark, capitals for names, commas in lists.", questions: [ { prompt: "Which is correct?", options: ["My friend Jack lives in Melbourne.", "my friend jack lives in melbourne.", "My friend Jack lives in melbourne."] }, { prompt: "Which is correct?", options: ["I have a cat, a dog and a fish.", "I have a cat a dog and a fish.", "I have, a cat a dog, and a fish."] } ] },
      // 63
      { type: "sorting" as const, title: "Sort the Sentences by Mark (Set C)", instruction: "Sort each sentence by its ending punctuation mark.", columns: ["Full stop .", "Question mark ?", "Exclamation mark !"], items: [ { label: "My best friend is called Mia" }, { label: "Did you remember your lunch" }, { label: "That goal was incredible" }, { label: "We went to the shops on Saturday" }, { label: "What time does school start" }, { label: "Be careful on the stairs" } ] },
      // 64
      { type: "open-response" as const, title: "Proofread and Fix (Set D)", instruction: "Find and fix ALL the mistakes in each sentence.", parentTip: "Challenge your child to find every error before rewriting. Count the errors aloud together.", prompts: [ { text: "me and emma went to the Park → ______", type: "lines" as const, lines: 1 }, { text: "have you seen my Hat → ______", type: "lines" as const, lines: 1 }, { text: "we had soup bread and Cake for lunch → ______", type: "lines" as const, lines: 1 }, { text: "jack and i live in brisbane → ______", type: "lines" as const, lines: 1 } ] },
      // 65
      { type: "matching" as const, title: "Match Questions to Answers (Set C)", instruction: "Draw a line from each question to the correct answer.", left: ["What day is it today?", "How many letters in 'cat'?", "Where is Australia?", "Who wrote your favourite book?"], right: ["Three.", "(Your answer)", "(Your answer)", "(Day of the week)"] },
      // 66
      { type: "open-response" as const, title: "Write About Your Weekend", instruction: "Write 4 sentences about your weekend (real or imagined). Use capital letters, full stops and at least one question or exclamation.", prompts: [ { text: "My weekend:", type: "lines" as const, lines: 8 } ] },
      // 67
      { type: "circle-correct" as const, title: "Commas in Lists (Set B)", instruction: "Circle the sentence that uses commas in a list correctly.", questions: [ { prompt: "Which is correct?", options: ["We need glue scissors and paper.", "We need glue, scissors and paper.", "We, need glue scissors, and paper."] }, { prompt: "Which is correct?", options: ["The farm had cows, pigs and chickens.", "The farm had, cows pigs and chickens.", "The farm had cows pigs, and chickens."] }, { prompt: "Which is correct?", options: ["I play soccer, netball and tennis.", "I play, soccer netball, and tennis.", "I play soccer netball and tennis."] } ] },
      // 68
      { type: "open-response" as const, title: "Add Commas to Lists (Set B)", instruction: "Rewrite each sentence adding commas in the correct places.", prompts: [ { text: "She wore a hat scarf and gloves. → ______", type: "lines" as const, lines: 1 }, { text: "We visited Sydney Melbourne and Perth. → ______", type: "lines" as const, lines: 1 }, { text: "My lunch had a sandwich an apple and a drink. → ______", type: "lines" as const, lines: 1 } ] },
      // 69
      { type: "sequence" as const, title: "Unscramble the Sentence (Set D)", instruction: "Put the words in the correct order. Add correct punctuation.", items: [ { label: "favourite / my / is / colour / blue → ______.", }, { label: "where / live / does / jack → ______?", }, { label: "apples / I / oranges / and / like / grapes → ______, ______ and ______.", }, { label: "incredible / that / was → ______!", } ] },
      // 70
      { type: "open-response" as const, title: "Write a Short Letter", instruction: "Write a short letter to a friend or family member. Use at least one statement, one question and one exclamation. Include commas in a list if you can.", parentTip: "Letters are a real-world reason to use proper punctuation. Help your child see the purpose.", prompts: [ { text: "Dear ______,", type: "lines" as const, lines: 8 }, { text: "From, ______", type: "lines" as const, lines: 1 } ] },
      // 71
      { type: "circle-correct" as const, title: "Fix the Error (Set C)", instruction: "Find the punctuation mistake in each sentence.", questions: [ { prompt: "My mum, dad and I went to the beach", options: ["Comma wrong", "Full stop missing", "Capital missing"] }, { prompt: "where did you put my Book?", options: ["Capital at start", "Random capital", "Both wrong"] }, { prompt: "Jack and emma are best friends.", options: ["Capital for name", "Full stop wrong", "All correct"] } ] },
      // 72
      { type: "sorting" as const, title: "Correct or Incorrect? (Set C)", instruction: "Sort each sentence: is the punctuation correct or does it need fixing?", columns: ["Correct", "Needs fixing"], items: [ { label: "My friend Zara is funny." }, { label: "we went to Melbourne." }, { label: "Can I have some water?" }, { label: "I like dogs cats and birds." }, { label: "Dad cooked pasta for dinner." }, { label: "sam and I play together" } ] },
      // 73
      { type: "open-response" as const, title: "Proofread and Fix (Set E)", instruction: "Find and fix all mistakes. There may be more than one per sentence.", parentTip: "Use a checklist: (1) Capital at start? (2) Capitals for names? (3) Correct ending mark? (4) Commas in lists?", prompts: [ { text: "jack and lily went to sydney → ______", type: "lines" as const, lines: 1 }, { text: "we had cake lollies and juice at the party → ______", type: "lines" as const, lines: 1 }, { text: "have you Met my cat fluffy → ______", type: "lines" as const, lines: 1 } ] },
      // 74
      { type: "open-response" as const, title: "Write a Menu", instruction: "Imagine you have a restaurant. Write the name of three dishes on your menu. Write a sentence about each dish using correct punctuation.", parentTip: "This connects writing conventions to a fun real-world task.", prompts: [ { text: "Dish 1: ______ — sentence about it:", type: "lines" as const, lines: 2 }, { text: "Dish 2: ______ — sentence about it:", type: "lines" as const, lines: 2 }, { text: "Dish 3: ______ — sentence about it:", type: "lines" as const, lines: 2 } ] },
      // 75 — TIP
      { type: "circle-correct" as const, title: "Which Sentence Is Correct? (Set D)", instruction: "Circle the sentence with perfect punctuation.", parentTip: "Tip: Great writers proofread their work. After writing, always read your sentences aloud and check: capital at start, full stop at end, capitals for names, commas in lists. These four checks will fix most mistakes!", questions: [ { prompt: "Which is correct?", options: ["my friend Jack and I went to Melbourne.", "My friend Jack and I went to Melbourne.", "My Friend jack and i went to Melbourne."] }, { prompt: "Which is correct?", options: ["we had apples, bananas and grapes.", "We had apples, bananas and grapes.", "We had Apples Bananas and Grapes."] } ] },
      // 76
      { type: "open-response" as const, title: "Dictation Practice (Set A)", instruction: "Ask someone to read these sentences to you. Write them down with correct punctuation.", parentTip: "Read each sentence twice: once for understanding, once for writing. Pause at punctuation marks.", prompts: [ { text: "Sentence 1: (ask your helper to dictate)", type: "lines" as const, lines: 2 }, { text: "Sentence 2: (ask your helper to dictate)", type: "lines" as const, lines: 2 }, { text: "Sentence 3: (ask your helper to dictate)", type: "lines" as const, lines: 2 } ] },
      // 77
      { type: "matching" as const, title: "Match Sentence Halves (Set E)", instruction: "Draw a line to join each beginning to its best ending.", left: ["On Saturday, we went", "Mum packed sandwiches,", "The zoo had lions,", "After lunch, we saw"], right: ["the monkey show.", "to the zoo.", "fruit and water.", "tigers and elephants."] },
      // 78
      { type: "open-response" as const, title: "Write About a Trip", instruction: "Write 4 sentences about a trip or outing you have been on. Use statements, at least one question and at least one list with commas.", prompts: [ { text: "My trip:", type: "lines" as const, lines: 8 } ] },
      // 79
      { type: "circle-correct" as const, title: "Statement, Question or Exclamation? (Set C)", instruction: "Circle the correct ending mark.", questions: [ { prompt: "I wonder if it will rain tomorrow", options: [".", "?", "!"] }, { prompt: "The fireworks were so beautiful", options: [".", "?", "!"] }, { prompt: "Have you ever been to the beach", options: [".", "?", "!"] }, { prompt: "My birthday is in June", options: [".", "?", "!"] }, { prompt: "Quick, get inside before the rain", options: [".", "?", "!"] } ] },
      // 80 — SPARK
      { type: "home-activity" as const, title: "Punctuation Power-Up", instruction: "Challenge yourself to use perfect punctuation in everything you write this week.", parentTip: "Spark: Did you know that in Spanish, they put an upside-down question mark at the START of every question too? Different languages use punctuation in different ways. What other punctuation marks have you seen that we have not studied yet? (Think about colons, semicolons, dashes, quotation marks...)", suggestions: [ "Write a postcard to a real or imaginary friend — use at least 5 sentences with perfect punctuation.", "Be the family Punctuation Police for a day — check notes, messages and shopping lists!", "Read a newspaper article and find examples of statements, questions and exclamations.", "Create a punctuation poster showing: full stop, question mark, exclamation mark, comma — with an example of each." ] },
      // ─── EXTENDING (81–100): Joining sentences, apostrophes preview, proofreading longer text ───
      // 81
      { type: "circle-correct" as const, title: "Joining Words (Set A)", instruction: "Circle the best joining word (conjunction) to connect these two sentences.", parentTip: "Joining words like 'and', 'but', 'so' and 'because' connect ideas within a sentence.", questions: [ { prompt: "I was hungry ___ I ate a sandwich.", options: ["so", "but", "and"] }, { prompt: "She likes cats ___ she does not like dogs.", options: ["so", "but", "and"] }, { prompt: "We went to the park ___ played on the swings.", options: ["so", "but", "and"] } ] },
      // 82
      { type: "open-response" as const, title: "Join Two Sentences (Set A)", instruction: "Use 'and', 'but' or 'so' to join each pair of sentences into one longer sentence.", prompts: [ { text: "The dog ran. The cat hid. → ______", type: "lines" as const, lines: 2 }, { text: "I like pizza. I do not like olives. → ______", type: "lines" as const, lines: 2 }, { text: "It was raining. We took an umbrella. → ______", type: "lines" as const, lines: 2 } ] },
      // 83
      { type: "sorting" as const, title: "Sort the Joining Words", instruction: "Sort each joining word by what it does.", columns: ["Adds information (and)", "Shows contrast (but)", "Shows result (so)"], items: [ { label: "and" }, { label: "but" }, { label: "so" }, { label: "and also" }, { label: "however (like but)" }, { label: "therefore (like so)" } ] },
      // 84
      { type: "circle-correct" as const, title: "Joining Words (Set B)", instruction: "Circle the best joining word.", questions: [ { prompt: "I wanted an ice cream ___ the shop was closed.", options: ["and", "but", "so"] }, { prompt: "She practised every day ___ she got better.", options: ["and", "but", "so"] }, { prompt: "He likes reading ___ writing stories.", options: ["and", "but", "so"] }, { prompt: "The sun came out ___ we went outside.", options: ["and", "but", "so"] } ] },
      // 85
      { type: "open-response" as const, title: "Apostrophe Introduction (Set A)", instruction: "An apostrophe shows ownership. Rewrite each phrase using an apostrophe. Example: the tail of the dog → the dog's tail.", parentTip: "For Year 1, focus only on singular possessives (one owner). Plural possessives come later.", prompts: [ { text: "the hat of the girl → the girl's ______", type: "lines" as const, lines: 1 }, { text: "the ball of the boy → the boy's ______", type: "lines" as const, lines: 1 }, { text: "the bone of the dog → the dog's ______", type: "lines" as const, lines: 1 }, { text: "the tail of the cat → the cat's ______", type: "lines" as const, lines: 1 } ] },
      // 86
      { type: "matching" as const, title: "Match the Possessive (Set A)", instruction: "Draw a line to match each phrase with its shorter possessive form.", left: ["the bag of Mum", "the toy of the baby", "the car of Dad", "the nest of the bird"], right: ["the baby's toy", "Mum's bag", "the bird's nest", "Dad's car"] },
      // 87
      { type: "circle-correct" as const, title: "Apostrophe or Not?", instruction: "Circle the sentence that uses the apostrophe correctly.", parentTip: "At Year 1, an apostrophe shows who owns something: Jack's hat = the hat belonging to Jack.", questions: [ { prompt: "Which is correct?", options: ["The girl's hat is red.", "The girls hat is red.", "The girl hat's is red."] }, { prompt: "Which is correct?", options: ["Sams dog is big.", "Sam's dog is big.", "Sams' dog is big."] }, { prompt: "Which is correct?", options: ["The cats tail is long.", "The cat's tail is long.", "The cats' tail is long."] } ] },
      // 88
      { type: "open-response" as const, title: "Join Two Sentences (Set B)", instruction: "Use 'and', 'but', 'so' or 'because' to join each pair into one sentence.", parentTip: "Encourage your child to read the joined sentence aloud to check it sounds natural.", prompts: [ { text: "We went to the beach. It was a hot day. → ______", type: "lines" as const, lines: 2 }, { text: "I finished my homework. I watched TV. → ______", type: "lines" as const, lines: 2 }, { text: "She was tired. She kept running. → ______", type: "lines" as const, lines: 2 } ] },
      // 89
      { type: "open-response" as const, title: "Proofread a Paragraph (Set A)", instruction: "This paragraph has 6 mistakes. Find and fix all of them. Rewrite the whole paragraph correctly.", prompts: [ { text: "on Saturday me and jack went to the zoo we saw lions tigers and elephants jack liked the monkeys best i liked the penguins it was a great Day → Rewrite:", type: "lines" as const, lines: 8 } ] },
      // 90 — TIP
      { type: "circle-correct" as const, title: "Which Sentence Is Correct? (Set E)", instruction: "Circle the sentence with perfect punctuation and grammar.", parentTip: "Tip: When you have finished writing, read your work aloud slowly. Check these five things: (1) capital letter at the start, (2) correct ending mark, (3) capitals for names and places, (4) commas in lists of three or more, (5) apostrophes for ownership. If all five are correct, you are a punctuation champion!", questions: [ { prompt: "Which is correct?", options: ["Jack's dog ran to the park, but it was too hot so they came home.", "jacks dog ran to the park but it was too hot so they came home", "Jack's dog ran to the Park, But it was too Hot so they came Home."] }, { prompt: "Which is correct?", options: ["We packed hats sunscreen and water because it was sunny.", "We packed hats, sunscreen and water because it was sunny.", "we packed hats, sunscreen and water Because it was Sunny."] } ] },
      // 91
      { type: "open-response" as const, title: "Write a News Report", instruction: "Imagine you are a news reporter. Write 4 to 5 sentences about something that happened (real or imagined). Use capitals for names and places, commas in lists and correct ending marks.", prompts: [ { text: "My news report:", type: "lines" as const, lines: 8 } ] },
      // 92
      { type: "sorting" as const, title: "Sort the Punctuation Rules", instruction: "Sort each rule into the correct category.", columns: ["Capital letter rules", "Ending mark rules", "Comma rules"], items: [ { label: "Start every sentence with one" }, { label: "Use . for statements" }, { label: "Put between items in a list" }, { label: "Use for names of people" }, { label: "Use ? for questions" }, { label: "Use for names of places" }, { label: "Use ! for exclamations" }, { label: "Put before 'and' in a long list (optional)" } ] },
      // 93
      { type: "open-response" as const, title: "Proofread a Paragraph (Set B)", instruction: "This paragraph has mistakes. Find and fix all of them. Rewrite correctly.", parentTip: "Count the errors first before rewriting. This paragraph has about 5 mistakes.", prompts: [ { text: "last week mum took me and sophie to the park we played on the swings slides and monkey bars sophie fell off the swing but she was ok we had sandwiches juice and fruit for lunch → Rewrite:", type: "lines" as const, lines: 8 } ] },
      // 94
      { type: "circle-correct" as const, title: "Joining Words (Set C)", instruction: "Circle the best joining word.", questions: [ { prompt: "I like apples ___ I do not like bananas.", options: ["and", "but", "so"] }, { prompt: "It was cold ___ I wore a jumper.", options: ["and", "but", "so"] }, { prompt: "She sang ___ danced at the concert.", options: ["and", "but", "so"] }, { prompt: "The ice cream melted ___ it was a hot day.", options: ["and", "but", "because"] } ] },
      // 95
      { type: "open-response" as const, title: "Write an Invitation", instruction: "Write an invitation to a party. Include: who it is for, when it is, where it is, and what to bring. Use correct punctuation throughout.", parentTip: "Invitations use multiple sentence types — statements, questions and exclamations all fit naturally.", prompts: [ { text: "My party invitation:", type: "lines" as const, lines: 8 } ] },
      // 96
      { type: "matching" as const, title: "Match the Rule to the Example", instruction: "Draw a line from each punctuation rule to an example sentence that demonstrates it.", left: ["Capital for names", "Question mark", "Comma in a list", "Exclamation mark", "Joining with 'but'"], right: ["I like cats, dogs and fish.", "What is your name?", "I was tired but I kept going.", "Watch out!", "My friend Zara lives in Perth."] },
      // 97
      { type: "open-response" as const, title: "Proofread a Paragraph (Set C)", instruction: "This is the hardest paragraph yet! Find and fix all the mistakes.", prompts: [ { text: "yesterday jack emma and i went to sydney we caught the train because mums car was broken when we got there we saw the harbour bridge the opera house and lots of boats jack said wow this is amazing we had fish and chips for lunch and then we went home i cant wait to go again → Rewrite:", type: "lines" as const, lines: 10 } ] },
      // 98
      { type: "open-response" as const, title: "Write a Diary Entry", instruction: "Write a diary entry about today. Use at least 5 sentences with a mix of statements, questions and exclamations. Include names, commas in lists and at least one joining word.", prompts: [ { text: "Dear Diary,", type: "lines" as const, lines: 10 } ] },
      // 99
      { type: "open-response" as const, title: "Punctuation Self-Check", instruction: "Look at a piece of writing you did this week. Check it against these rules and fix any mistakes.", parentTip: "This metacognitive activity builds lifelong proofreading habits.", prompts: [ { text: "Does every sentence start with a capital? (yes/no):", type: "lines" as const, lines: 1 }, { text: "Does every sentence end with . or ? or !? (yes/no):", type: "lines" as const, lines: 1 }, { text: "Do all names have capitals? (yes/no):", type: "lines" as const, lines: 1 }, { text: "Are commas used in lists? (yes/no):", type: "lines" as const, lines: 1 }, { text: "Write one sentence you fixed:", type: "lines" as const, lines: 2 } ] },
      // 100 — SPARK
      { type: "home-activity" as const, title: "Punctuation Challenge Week", instruction: "Set yourself a punctuation challenge for the whole week!", parentTip: "Spark: Imagine a world without any punctuation marks at all. How would you know when a sentence ends? How would you know if someone is asking a question or making a statement? Punctuation is like the traffic lights of writing — it tells readers when to stop, pause, slow down or get excited. What punctuation mark do you think is the most important, and why?", suggestions: [ "Write a letter to a family member who lives far away using perfect punctuation.", "Create a mini book (3 to 4 pages) with a title page, story and 'About the Author' page — check every sentence.", "Interview a family member with 5 questions, write down their answers, then check all the punctuation.", "Read a page from your favourite book and count every type of punctuation mark — make a tally chart." ] },
    ],
  },

  // ── WS 4: Reading Comprehension ───────────────────────────
  {
    slug: "reading-comprehension",
    title: "Understanding What We Read",
    strand: "Literacy",
    description:
      "Read a short passage and answer questions about characters, events and feelings — building literal and inferential comprehension.",
    learningGuide: {
      concept:
        "Comprehension is the ultimate goal of reading. Year 1 students are moving from decoding words to understanding meaning. Literal questions ask what the text says directly. Inferential questions ask what the text implies (feelings, reasons, predictions).",
      activation:
        "Before reading, look at the title and any pictures together. Ask: 'What do you think this will be about? What clues does the picture give us?' This activates schema and sets a purpose for reading.",
      check:
        "After reading, ask 3 types of questions: right-there (literal), think-and-search (implicit) and on-your-own (personal connection). A strong reader can handle all three.",
    },
    lesson: {
      title: "Read, Think, Answer",
      objective:
        "Read and understand a short text, answering literal and simple inferential questions.",
      materials: [
        "Any short picture book or simple reader from your shelf",
        "Pencil",
        "Sticky notes (optional, for marking passages)",
      ],
      intro: {
        title: "Read It Like a Detective",
        script:
          "A great reader is like a detective! You do not just say the words — you think about what they MEAN. When we read today, I want you to ask yourself three questions: Who is in the story? What is happening? How does the character feel? Let us read together and keep these detective questions in our minds.",
        action:
          "Read the short passage on the worksheet aloud together first. Then have your child read it independently if capable.",
      },
      mainActivity: {
        title: "Answer the Questions",
        script:
          "Now it is time to answer some questions about what we read. Some questions have answers right in the text — look for them! Some questions ask you to think about what was NOT said but what you can figure out. Take your time and go back to the text if you need to.",
        action:
          "Work through the comprehension questions. Encourage your child to point to the part of the text that helped them answer each question.",
      },
      wrapUp: {
        title: "Think About the Story",
        script:
          "You have done some brilliant detective thinking today! Now tell me — what do you think will happen next in this story? Or what would YOU do if you were the character? There is no wrong answer here — it is your thinking that matters!",
        action:
          "Discuss the prediction or personal response question together. Validate all thoughtful responses.",
      },
      parentTip:
        "Always read the text together before asking questions. The goal is comprehension, not reading difficulty. If your child stumbles on a word while reading, supply it and keep the meaning-making flow going — do not stop for every unknown word.",
      extension:
        "After reading any picture book, ask your child to create a simple 4-panel comic showing the beginning, problem, solution and end. This covers AC V9 Year 1 — reading and comprehending texts, monitoring meaning.",
      resources: [
        {
          title: "Storyline Online",
          url: "https://storylineonline.net/",
          description:
            "Free video read-alouds of children's books — great for comprehension discussions after watching.",
        },
        {
          title: "ABC Education — Reading Comprehension",
          url: "https://www.abc.net.au/education/learn-english/stories/",
          description:
            "Texts and comprehension activities aligned to Year 1 Australian Curriculum.",
        },
        {
          title: "Reading Eggs — Comprehension",
          url: "https://readingeggs.com.au/",
          description:
            "Structured reading comprehension activities with immediate feedback for Year 1.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Literal comprehension — Story A (Sam and Rex) ───
      // 1
      { type: "open-response" as const, title: "Read and Answer: Sam and Rex", instruction: "Read this short story. Then answer the questions below.", parentTip: "Read the passage together first. Encourage your child to re-read to find answers rather than guessing.", prompts: [ { text: "Sam has a little dog called Rex. Rex loves to run in the park. One day, Rex found a big stick and would not drop it! Sam said, 'Rex, drop it!' But Rex just wagged his tail and ran away. Sam laughed and ran after him.", type: "lines" as const, lines: 1 }, { text: "Who is the story about?", type: "lines" as const, lines: 1 }, { text: "What did Rex find in the park?", type: "lines" as const, lines: 1 } ] },
      // 2
      { type: "circle-correct" as const, title: "True or False? (Story A — Set 1)", instruction: "Circle TRUE if the statement matches the story, or FALSE if it does not.", parentTip: "Point to the sentence in the story that supports each answer.", questions: [ { prompt: "Rex is a little dog.", options: ["TRUE", "FALSE"] }, { prompt: "Rex found a big stick.", options: ["TRUE", "FALSE"] }, { prompt: "Rex dropped the stick when Sam asked.", options: ["TRUE", "FALSE"] } ] },
      // 3
      { type: "circle-correct" as const, title: "True or False? (Story A — Set 2)", instruction: "Circle TRUE or FALSE for each statement about the story.", questions: [ { prompt: "Sam laughed at the end of the story.", options: ["TRUE", "FALSE"] }, { prompt: "Sam and Rex were at a beach.", options: ["TRUE", "FALSE"] }, { prompt: "Rex wagged his tail.", options: ["TRUE", "FALSE"] } ] },
      // 4
      { type: "matching" as const, title: "Match Question to Answer (Story A)", instruction: "Draw a line from each question to its answer. Use the story to help.", parentTip: "This practises the skill of locating specific information in a text.", left: ["Who is the dog?", "What did Rex find?", "What did Sam say?", "How did Sam feel?"], right: ["He laughed.", "Rex", "Drop it!", "A big stick"] },
      // 5
      { type: "sequence" as const, title: "Put Events in Order (Story A)", instruction: "Number these events 1 to 4, from what happened first to last.", parentTip: "Find each event in the story before numbering.", items: [ { label: "Sam laughed and ran after Rex." }, { label: "Sam went to the park with Rex." }, { label: "Sam said 'Drop it!' but Rex kept the stick." }, { label: "Rex found a big stick." } ] },
      // 6
      { type: "open-response" as const, title: "Draw and Write (Story A)", instruction: "Draw your favourite moment from the story. Write one sentence about it.", parentTip: "Drawing before writing helps children organise their thoughts.", prompts: [ { text: "Draw your favourite moment:", type: "box" as const }, { text: "My sentence:", type: "lines" as const, lines: 2 } ] },
      // 7
      { type: "open-response" as const, title: "Read and Answer: The Red Hen", instruction: "Read this short story. Then answer the questions.", prompts: [ { text: "A little red hen lived on a farm. She found some seeds on the ground. 'Who will help me plant these seeds?' she asked. 'Not I,' said the cat. 'Not I,' said the dog. So the little red hen planted the seeds all by herself.", type: "lines" as const, lines: 1 }, { text: "Where does the hen live?", type: "lines" as const, lines: 1 }, { text: "What did the hen find?", type: "lines" as const, lines: 1 }, { text: "Did the cat or dog help? How do you know?", type: "lines" as const, lines: 2 } ] },
      // 8
      { type: "circle-correct" as const, title: "True or False? (Story B)", instruction: "Circle TRUE or FALSE for each statement about The Red Hen.", questions: [ { prompt: "The hen found some seeds.", options: ["TRUE", "FALSE"] }, { prompt: "The cat helped plant the seeds.", options: ["TRUE", "FALSE"] }, { prompt: "The hen lived on a farm.", options: ["TRUE", "FALSE"] }, { prompt: "The dog said 'I will help!'", options: ["TRUE", "FALSE"] } ] },
      // 9
      { type: "matching" as const, title: "Match Character to Action (Story B)", instruction: "Draw a line from each character to what they did.", left: ["The red hen", "The cat", "The dog"], right: ["Said 'Not I'", "Planted the seeds", "Said 'Not I'"] },
      // 10
      { type: "circle-correct" as const, title: "Who Said It? (Story B)", instruction: "Circle the character who said each quote.", parentTip: "Go back to the story and find the exact words to check.", questions: [ { prompt: "'Who will help me plant these seeds?'", options: ["The hen", "The cat", "The dog"] }, { prompt: "'Not I'", options: ["The hen", "The cat and dog", "Nobody"] } ] },
      // 11
      { type: "open-response" as const, title: "Read and Answer: Mia's Rainy Day", instruction: "Read the story and answer the questions.", prompts: [ { text: "Mia looked out the window. It was raining hard. 'Oh no,' she said. 'I wanted to play outside!' Mum smiled and said, 'Why don't we bake a cake instead?' Mia clapped her hands. 'Yes, please!' she said.", type: "lines" as const, lines: 1 }, { text: "What was the weather like?", type: "lines" as const, lines: 1 }, { text: "What did Mia want to do?", type: "lines" as const, lines: 1 }, { text: "What did Mum suggest?", type: "lines" as const, lines: 1 } ] },
      // 12
      { type: "circle-correct" as const, title: "True or False? (Story C)", instruction: "Circle TRUE or FALSE.", questions: [ { prompt: "It was a sunny day.", options: ["TRUE", "FALSE"] }, { prompt: "Mia wanted to play outside.", options: ["TRUE", "FALSE"] }, { prompt: "Mum suggested baking a cake.", options: ["TRUE", "FALSE"] }, { prompt: "Mia was sad about the cake idea.", options: ["TRUE", "FALSE"] } ] },
      // 13
      { type: "sequence" as const, title: "Put Events in Order (Story C)", instruction: "Number these events 1 to 4.", items: [ { label: "Mia clapped her hands and said 'Yes please!'" }, { label: "Mia looked out the window and saw rain." }, { label: "Mum suggested baking a cake." }, { label: "Mia said she wanted to play outside." } ] },
      // 14
      { type: "open-response" as const, title: "How Did They Feel? (Story C)", instruction: "Think about how the characters felt. Write your answers.", parentTip: "Feelings are not always stated directly — your child must infer from clues like actions and dialogue.", prompts: [ { text: "How did Mia feel when she saw the rain?", type: "lines" as const, lines: 2 }, { text: "How did Mia feel about baking a cake?", type: "lines" as const, lines: 2 }, { text: "What clue in the story tells you Mia was happy?", type: "lines" as const, lines: 2 } ] },
      // 15 — TIP
      { type: "circle-correct" as const, title: "Right There or Think About It?", instruction: "Is the answer right there in the story, or do you have to think about it?", parentTip: "Tip: There are two types of questions. 'Right there' questions have the answer written in the text. 'Think about it' questions need you to use clues from the story plus your own thinking. Both types are important!", questions: [ { prompt: "'What did Rex find?' (Sam and Rex story)", options: ["Right there", "Think about it"] }, { prompt: "'How did Sam feel?' (Sam and Rex story)", options: ["Right there", "Think about it"] }, { prompt: "'Where does the hen live?' (Red Hen story)", options: ["Right there", "Think about it"] }, { prompt: "'Why didn't the cat help?' (Red Hen story)", options: ["Right there", "Think about it"] } ] },
      // 16
      { type: "open-response" as const, title: "Read and Answer: The Lost Toy", instruction: "Read the story and answer the questions.", prompts: [ { text: "Ben could not find his teddy bear. He looked under the bed. He looked in the cupboard. He even looked in the garden. Then he heard a giggle. His baby sister was sitting behind the couch, hugging the teddy!", type: "lines" as const, lines: 1 }, { text: "What was Ben looking for?", type: "lines" as const, lines: 1 }, { text: "Where did Ben look? (Name 3 places)", type: "lines" as const, lines: 2 }, { text: "Who had the teddy bear?", type: "lines" as const, lines: 1 } ] },
      // 17
      { type: "circle-correct" as const, title: "True or False? (Story D)", instruction: "Circle TRUE or FALSE.", questions: [ { prompt: "Ben was looking for his toy car.", options: ["TRUE", "FALSE"] }, { prompt: "Ben looked under the bed.", options: ["TRUE", "FALSE"] }, { prompt: "His baby sister had the teddy.", options: ["TRUE", "FALSE"] }, { prompt: "The teddy was in the garden.", options: ["TRUE", "FALSE"] } ] },
      // 18
      { type: "matching" as const, title: "Match the Place to What Happened (Story D)", instruction: "Draw a line from each place to what Ben found (or did not find) there.", left: ["Under the bed", "In the cupboard", "In the garden", "Behind the couch"], right: ["Nothing", "Nothing", "Nothing", "Baby sister with teddy"] },
      // 19
      { type: "open-response" as const, title: "What Happened Next? (Story D)", instruction: "The story does not tell us what happened after Ben found his teddy. Write what you think happened next.", parentTip: "Any sensible answer is correct. Encourage your child to use clues from the story.", prompts: [ { text: "What do you think Ben did when he found his teddy?", type: "lines" as const, lines: 3 } ] },
      // 20 — SPARK
      { type: "home-activity" as const, title: "Story Detectives at Home", instruction: "Build comprehension skills through daily reading.", parentTip: "Spark: When you read a story, you are like a detective looking for clues! The author does not always tell you everything — sometimes you have to figure things out from the words AND from what you already know. Can you think of a time you figured out something in a story before the character did?", suggestions: [ "Before reading: look at the cover and predict what the story will be about.", "During reading: stop at an exciting moment and ask what might happen next.", "After reading: ask 'Who? What? Where? Why? How?' questions together.", "Draw the most important event from a story and explain your choice." ] },
      // ─── DEVELOPING (21–50): Inferential comprehension, longer texts, character feelings ───
      // 21
      { type: "open-response" as const, title: "Read and Answer: The New Student", instruction: "Read the story and answer the questions.", prompts: [ { text: "A new boy came to class today. His name was Kai. He stood at the door and looked at the floor. Mrs Lee smiled and said, 'Come in, Kai. You can sit next to Zara.' Zara moved her pencils to make room. 'Hi,' she whispered. Kai gave a small smile.", type: "lines" as const, lines: 1 }, { text: "Who is the new student?", type: "lines" as const, lines: 1 }, { text: "How do you think Kai felt when he arrived? What clue tells you?", type: "lines" as const, lines: 2 }, { text: "Was Zara kind? What did she do to show it?", type: "lines" as const, lines: 2 } ] },
      // 22
      { type: "circle-correct" as const, title: "True or False? (Story E)", instruction: "Circle TRUE or FALSE.", questions: [ { prompt: "The new student's name was Kai.", options: ["TRUE", "FALSE"] }, { prompt: "Kai was excited and ran into the room.", options: ["TRUE", "FALSE"] }, { prompt: "Mrs Lee told Kai to sit next to Zara.", options: ["TRUE", "FALSE"] }, { prompt: "Zara did not speak to Kai.", options: ["TRUE", "FALSE"] } ] },
      // 23
      { type: "circle-correct" as const, title: "Why Do You Think...? (Story E)", instruction: "Circle the best answer. Use clues from the story.", parentTip: "These are inferential questions — the answer is not stated directly.", questions: [ { prompt: "Why did Kai look at the floor?", options: ["He was shy or nervous", "He lost something", "He was angry"] }, { prompt: "Why did Zara move her pencils?", options: ["She was cleaning up", "To make room for Kai", "She was drawing"] }, { prompt: "Why did Kai give a small smile?", options: ["He thought of a joke", "Zara's kindness made him feel better", "He was pretending"] } ] },
      // 24
      { type: "open-response" as const, title: "Read and Answer: The Spider", instruction: "Read and answer.", prompts: [ { text: "Lily saw a spider on the wall. She screamed and jumped back. Dad came running. 'It is just a tiny spider,' said Dad. 'It will not hurt you.' He carefully put a glass over it and slid a piece of paper underneath. Then he carried it outside. 'There you go, little spider,' he said.", type: "lines" as const, lines: 1 }, { text: "How did Lily feel when she saw the spider?", type: "lines" as const, lines: 1 }, { text: "What did Dad do with the spider?", type: "lines" as const, lines: 2 }, { text: "Do you think Dad was scared? Why or why not?", type: "lines" as const, lines: 2 } ] },
      // 25
      { type: "sequence" as const, title: "Put Events in Order (Story F)", instruction: "Number these events 1 to 5.", items: [ { label: "Dad carried the spider outside." }, { label: "Lily saw a spider on the wall." }, { label: "Dad put a glass over the spider." }, { label: "Lily screamed and jumped back." }, { label: "Dad came running." } ] },
      // 26
      { type: "matching" as const, title: "Match Character to Feeling (Stories)", instruction: "Draw a line from each character to how they probably felt.", parentTip: "Feelings must be inferred — look for action and dialogue clues.", left: ["Kai at the door", "Lily seeing the spider", "Dad catching the spider", "Zara saying 'Hi'"], right: ["Friendly and welcoming", "Nervous or shy", "Scared or surprised", "Calm and gentle"] },
      // 27
      { type: "open-response" as const, title: "Read and Answer: The Picnic", instruction: "Read and answer.", prompts: [ { text: "On Sunday, our family went to the park for a picnic. We spread a big blanket under a tree. Mum made sandwiches, fruit salad and juice. My brother Tom kicked the football with Dad. I read my book in the shade. Then dark clouds came. 'Quick, pack up!' said Mum. We ran to the car just before the rain started.", type: "lines" as const, lines: 1 }, { text: "Where did the family go?", type: "lines" as const, lines: 1 }, { text: "What food did they bring? (Name all three)", type: "lines" as const, lines: 1 }, { text: "Why did they pack up quickly?", type: "lines" as const, lines: 1 }, { text: "Did they get wet? How do you know?", type: "lines" as const, lines: 2 } ] },
      // 28
      { type: "circle-correct" as const, title: "True or False? (Story G)", instruction: "Circle TRUE or FALSE.", questions: [ { prompt: "The picnic was on Saturday.", options: ["TRUE", "FALSE"] }, { prompt: "They sat under a tree.", options: ["TRUE", "FALSE"] }, { prompt: "Tom read a book.", options: ["TRUE", "FALSE"] }, { prompt: "It started to rain.", options: ["TRUE", "FALSE"] }, { prompt: "They got very wet.", options: ["TRUE", "FALSE"] } ] },
      // 29
      { type: "sorting" as const, title: "Who Did What? (Story G)", instruction: "Sort each action by who did it.", columns: ["Mum", "Tom", "I (the narrator)", "Dad"], items: [ { label: "Made sandwiches" }, { label: "Read a book" }, { label: "Kicked the football" }, { label: "Said 'Quick, pack up!'" }, { label: "Kicked the football (with Tom)" } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Retell in Your Own Words (Story G)", instruction: "Retell the picnic story in your own words. Write 3 to 4 sentences.", parentTip: "Tip: When retelling a story, use these steps: (1) Who was in the story? (2) Where did it happen? (3) What happened first, next, and last? (4) How did it end? This framework helps you include all the important parts.", prompts: [ { text: "My retelling:", type: "lines" as const, lines: 6 } ] },
      // 31
      { type: "open-response" as const, title: "Read and Answer: The Library", instruction: "Read and answer.", prompts: [ { text: "Every Thursday after school, Dad takes me to the library. I always go straight to the picture book shelf. Last Thursday, I found a book about dinosaurs. It had amazing pictures of a T-Rex! I borrowed it and read it three times that night. I even dreamed about dinosaurs.", type: "lines" as const, lines: 1 }, { text: "When does the narrator go to the library?", type: "lines" as const, lines: 1 }, { text: "What book did they find?", type: "lines" as const, lines: 1 }, { text: "How do you know the narrator really liked the book? (Give two clues)", type: "lines" as const, lines: 2 } ] },
      // 32
      { type: "circle-correct" as const, title: "What Does It Mean? (Story H)", instruction: "Circle the best meaning for each phrase from the story.", parentTip: "Understanding phrases in context is an important comprehension skill.", questions: [ { prompt: "'I always go straight to the picture book shelf' means:", options: ["I walk in a straight line", "I go there first, right away", "I run to the shelf"] }, { prompt: "'I read it three times that night' tells us:", options: ["It was a long book", "The narrator really enjoyed it", "The narrator reads slowly"] } ] },
      // 33
      { type: "open-response" as const, title: "Read and Answer: The Garden", instruction: "Read and answer.", prompts: [ { text: "Grandpa and I planted tomatoes in the garden. We dug holes, put in the seedlings and watered them every day. After three weeks, tiny green tomatoes appeared. 'Be patient,' said Grandpa. 'They need sun to turn red.' Six weeks later, we picked big red tomatoes. The salad we made was delicious!", type: "lines" as const, lines: 1 }, { text: "What did Grandpa and the narrator plant?", type: "lines" as const, lines: 1 }, { text: "How long did it take for tomatoes to appear?", type: "lines" as const, lines: 1 }, { text: "Why did Grandpa say 'Be patient'?", type: "lines" as const, lines: 2 }, { text: "What did they make with the tomatoes?", type: "lines" as const, lines: 1 } ] },
      // 34
      { type: "sequence" as const, title: "Put Events in Order (Story I)", instruction: "Number these events 1 to 5.", items: [ { label: "They made a delicious salad." }, { label: "Grandpa and I dug holes." }, { label: "Big red tomatoes grew." }, { label: "Tiny green tomatoes appeared." }, { label: "We put in the seedlings and watered them." } ] },
      // 35
      { type: "circle-correct" as const, title: "Why Questions (Story I)", instruction: "Circle the best answer.", questions: [ { prompt: "Why did they water the seedlings every day?", options: ["Plants need water to grow", "They liked getting wet", "Grandpa told them to stop"] }, { prompt: "Why were the tomatoes green at first?", options: ["They were a different plant", "They were not ripe yet", "Someone painted them"] }, { prompt: "What does 'Be patient' mean in the story?", options: ["Wait, it takes time", "Be very quiet", "Plant more seeds"] } ] },
      // 36
      { type: "open-response" as const, title: "Read and Answer: Sports Day", instruction: "Read and answer.", parentTip: "This passage is longer — encourage your child to read it twice.", prompts: [ { text: "It was Sports Day at school. I was in the running race. My heart was beating fast as I waited at the starting line. When the whistle blew, I ran as fast as I could. My friend Aisha was right beside me. Near the finish line, I tripped on a stone! Aisha stopped and helped me up. We crossed the finish line together, holding hands.", type: "lines" as const, lines: 1 }, { text: "What event was the narrator in?", type: "lines" as const, lines: 1 }, { text: "What happened near the finish line?", type: "lines" as const, lines: 1 }, { text: "What did Aisha do? Was she a good friend? Explain.", type: "lines" as const, lines: 3 } ] },
      // 37
      { type: "circle-correct" as const, title: "True or False? (Story J)", instruction: "Circle TRUE or FALSE.", questions: [ { prompt: "The narrator was in the swimming race.", options: ["TRUE", "FALSE"] }, { prompt: "The narrator's heart was beating fast.", options: ["TRUE", "FALSE"] }, { prompt: "Aisha kept running and won the race alone.", options: ["TRUE", "FALSE"] }, { prompt: "They crossed the finish line together.", options: ["TRUE", "FALSE"] } ] },
      // 38
      { type: "open-response" as const, title: "Character Feelings (Story J)", instruction: "Think about how the characters felt at different moments.", parentTip: "Encourage your child to identify the specific words or actions that reveal feelings.", prompts: [ { text: "How did the narrator feel at the starting line? What clue tells you?", type: "lines" as const, lines: 2 }, { text: "How did the narrator feel after tripping?", type: "lines" as const, lines: 2 }, { text: "How do you think both friends felt at the finish line?", type: "lines" as const, lines: 2 } ] },
      // 39
      { type: "matching" as const, title: "Match the Clue to the Feeling", instruction: "Draw a line from each clue to the feeling it suggests.", left: ["My heart was beating fast", "I tripped on a stone", "Aisha stopped and helped me up", "We crossed the finish line holding hands"], right: ["Friendship and happiness", "Nervous or excited", "Embarrassed or upset", "Kind and caring"] },
      // 40 — SPARK
      { type: "home-activity" as const, title: "Be a Reading Detective", instruction: "Practise detective reading skills with any book you choose.", parentTip: "Spark: Good readers are like detectives — they look for clues in the words, the pictures and even the way characters speak. When someone says something in a 'whisper', that tells you they might be scared or keeping a secret. When someone 'slams' a door, they might be angry. What other action words give you clues about feelings?", suggestions: [ "Choose a picture book and find 3 'right there' facts and 2 'think about it' answers.", "Stop reading before the ending and predict how the story will end — then check.", "After reading, draw a feelings timeline showing how the main character felt at the beginning, middle and end.", "Find a sentence in a book where a character shows a feeling through their actions (not just saying 'I am sad')." ] },
      // 41
      { type: "open-response" as const, title: "Read and Answer: The Beach", instruction: "Read and answer.", prompts: [ { text: "We went to the beach on a hot summer day. The sand was burning under my feet! I ran to the cool water and jumped in the waves. My sister built a huge sandcastle with three towers. She decorated it with shells and seaweed. When the tide came in, the water washed the castle away. My sister looked sad for a moment, then she smiled and said, 'I will build an even bigger one tomorrow!'", type: "lines" as const, lines: 1 }, { text: "Why did the narrator run to the water?", type: "lines" as const, lines: 1 }, { text: "Describe the sandcastle. (Use details from the story)", type: "lines" as const, lines: 2 }, { text: "How did the sister react when the castle was washed away?", type: "lines" as const, lines: 2 } ] },
      // 42
      { type: "circle-correct" as const, title: "What Does It Mean? (Story K)", instruction: "Circle the best meaning.", questions: [ { prompt: "'The sand was burning under my feet' means:", options: ["The sand was on fire", "The sand was very hot", "The sand was wet"] }, { prompt: "'The tide came in' means:", options: ["The water level rose and moved closer", "The waves stopped", "It started raining"] }, { prompt: "When the sister said 'I will build an even bigger one tomorrow', this shows she is:", options: ["Angry", "Positive and determined", "Not interested anymore"] } ] },
      // 43
      { type: "sorting" as const, title: "Story Details (Story K)", instruction: "Sort these details: which ones are in the story and which are not?", columns: ["In the story", "Not in the story"], items: [ { label: "The sand was hot" }, { label: "They had ice cream" }, { label: "The sister built a sandcastle" }, { label: "They went swimming with dolphins" }, { label: "The sandcastle had shells" }, { label: "The castle was washed away" } ] },
      // 44
      { type: "open-response" as const, title: "Read and Answer: The Sleepover", instruction: "Read and answer.", prompts: [ { text: "I went to my friend Ollie's house for a sleepover. We ate pizza and watched a movie about robots. Then we built a blanket fort in the lounge room. We used every pillow and blanket in the house! At bedtime, we lay in our sleeping bags inside the fort. Ollie told a funny joke and we laughed so hard that Ollie's mum told us to be quiet.", type: "lines" as const, lines: 1 }, { text: "Where was the sleepover?", type: "lines" as const, lines: 1 }, { text: "What did they build?", type: "lines" as const, lines: 1 }, { text: "What happened at bedtime?", type: "lines" as const, lines: 2 }, { text: "Do you think the narrator had fun? What clues tell you?", type: "lines" as const, lines: 2 } ] },
      // 45 — TIP
      { type: "circle-correct" as const, title: "Find the Main Idea (Set A)", instruction: "Read the short passage. Circle the sentence that best describes the main idea.", parentTip: "Tip: The main idea is what the story is mostly about. It is not a tiny detail — it is the big picture. Ask yourself: 'If I had to describe this story in one sentence, what would I say?'", questions: [ { prompt: "Passage: 'Mia loves animals. She has a cat, two fish and a rabbit. She reads books about animals. She wants to be a vet when she grows up.' Main idea:", options: ["Mia has two fish.", "Mia loves animals and wants to be a vet.", "Mia reads books."] }, { prompt: "Passage: 'It rained all day. We could not play outside. We played board games and baked cookies instead. It was actually a really fun day!' Main idea:", options: ["It rained all day.", "They played board games.", "Even though it rained, they had a fun day inside."] } ] },
      // 46
      { type: "open-response" as const, title: "Read and Answer: My Grandma", instruction: "Read and answer.", prompts: [ { text: "My grandma lives on a farm. She has chickens, sheep and a horse called Dusty. Every school holidays, I stay with her. In the morning, we collect eggs from the chicken coop. Grandma teaches me to make pancakes with the fresh eggs. In the afternoon, I ride Dusty around the paddock. I love visiting Grandma's farm.", type: "lines" as const, lines: 1 }, { text: "Where does Grandma live?", type: "lines" as const, lines: 1 }, { text: "What animals does she have?", type: "lines" as const, lines: 1 }, { text: "What do the narrator and Grandma do in the morning?", type: "lines" as const, lines: 1 }, { text: "What is the main idea of this passage?", type: "lines" as const, lines: 2 } ] },
      // 47
      { type: "circle-correct" as const, title: "True or False? (Story L)", instruction: "Circle TRUE or FALSE.", questions: [ { prompt: "Grandma lives in a city.", options: ["TRUE", "FALSE"] }, { prompt: "The horse is called Dusty.", options: ["TRUE", "FALSE"] }, { prompt: "They make pancakes with fresh eggs.", options: ["TRUE", "FALSE"] }, { prompt: "The narrator visits during term time.", options: ["TRUE", "FALSE"] }, { prompt: "The narrator loves visiting the farm.", options: ["TRUE", "FALSE"] } ] },
      // 48
      { type: "open-response" as const, title: "Compare Two Stories", instruction: "Think about the Picnic story (Story G) and the Beach story (Story K). Compare them.", parentTip: "Comparing texts is a higher-order skill. Accept any thoughtful comparison.", prompts: [ { text: "One thing that is the SAME about both stories:", type: "lines" as const, lines: 2 }, { text: "One thing that is DIFFERENT:", type: "lines" as const, lines: 2 } ] },
      // 49
      { type: "matching" as const, title: "Match the Story to Its Main Idea", instruction: "Draw a line from each story to its main idea.", left: ["Sam and Rex", "The Red Hen", "The Picnic", "Sports Day"], right: ["True friends help each other.", "A day out with family.", "A playful dog who would not listen.", "Do not expect others to do your work."] },
      // 50
      { type: "open-response" as const, title: "Draw Your Favourite Story", instruction: "Choose your favourite story from this worksheet. Draw the most important scene and explain why you chose it.", prompts: [ { text: "Story I chose:", type: "lines" as const, lines: 1 }, { text: "Draw the most important scene:", type: "box" as const }, { text: "Why I chose this story:", type: "lines" as const, lines: 3 } ] },
      // ─── CONSOLIDATING (51–80): Non-fiction, cause and effect, vocabulary in context ───
      // 51
      { type: "open-response" as const, title: "Read and Answer: Kangaroos (Non-fiction)", instruction: "Read this information text and answer the questions.", parentTip: "Non-fiction texts are structured differently from stories. Help your child notice facts rather than plot.", prompts: [ { text: "Kangaroos are Australian animals. They have strong back legs and a long tail. Baby kangaroos are called joeys. A joey lives in its mother's pouch until it is big enough to hop on its own. Kangaroos can hop very fast — up to 70 kilometres per hour!", type: "lines" as const, lines: 1 }, { text: "What are baby kangaroos called?", type: "lines" as const, lines: 1 }, { text: "Where does a joey live?", type: "lines" as const, lines: 1 }, { text: "How fast can kangaroos hop?", type: "lines" as const, lines: 1 } ] },
      // 52
      { type: "circle-correct" as const, title: "True or False? (Kangaroos)", instruction: "Circle TRUE or FALSE.", questions: [ { prompt: "Kangaroos live in Africa.", options: ["TRUE", "FALSE"] }, { prompt: "Baby kangaroos are called joeys.", options: ["TRUE", "FALSE"] }, { prompt: "Kangaroos have short tails.", options: ["TRUE", "FALSE"] }, { prompt: "Kangaroos can hop up to 70 km/h.", options: ["TRUE", "FALSE"] } ] },
      // 53
      { type: "open-response" as const, title: "Read and Answer: Penguins (Non-fiction)", instruction: "Read and answer.", prompts: [ { text: "Penguins are birds that cannot fly. They are excellent swimmers! Penguins live in cold places. Their black and white feathers keep them warm in icy water. Emperor penguins are the tallest — they can be over a metre tall. Penguin parents take turns keeping the egg warm.", type: "lines" as const, lines: 1 }, { text: "Can penguins fly?", type: "lines" as const, lines: 1 }, { text: "What helps penguins stay warm?", type: "lines" as const, lines: 1 }, { text: "Which type of penguin is the tallest?", type: "lines" as const, lines: 1 }, { text: "How do penguin parents care for their egg?", type: "lines" as const, lines: 1 } ] },
      // 54
      { type: "sorting" as const, title: "Kangaroo or Penguin?", instruction: "Sort each fact: does it belong to kangaroos or penguins?", columns: ["Kangaroo", "Penguin"], items: [ { label: "Has strong back legs" }, { label: "Cannot fly" }, { label: "Baby lives in a pouch" }, { label: "Excellent swimmer" }, { label: "Can hop up to 70 km/h" }, { label: "Has black and white feathers" } ] },
      // 55
      { type: "open-response" as const, title: "Read and Answer: The Fire Station", instruction: "Read and answer.", prompts: [ { text: "Our class visited the fire station. A firefighter called Jake showed us the fire truck. It was big, red and shiny. Jake let us try on a helmet — it was very heavy! He told us that firefighters help people when there is a fire or an accident. Jake said the most important thing is to have a fire escape plan at home. We all said 'thank you' when we left.", type: "lines" as const, lines: 1 }, { text: "Who showed the class around?", type: "lines" as const, lines: 1 }, { text: "What did the fire truck look like?", type: "lines" as const, lines: 1 }, { text: "What was the most important thing Jake told them?", type: "lines" as const, lines: 2 } ] },
      // 56
      { type: "circle-correct" as const, title: "Cause and Effect (Set A)", instruction: "Circle the best effect (what happened next) for each cause.", parentTip: "Cause and effect means: because THIS happened, THAT happened next.", questions: [ { prompt: "Because it rained (The Picnic story)...", options: ["They played more football", "They packed up and ran to the car", "They built a sandcastle"] }, { prompt: "Because Kai was nervous (New Student story)...", options: ["He looked at the floor", "He laughed loudly", "He ran around the room"] }, { prompt: "Because the narrator tripped (Sports Day story)...", options: ["Aisha kept running", "Aisha stopped and helped", "The race was cancelled"] } ] },
      // 57
      { type: "open-response" as const, title: "Cause and Effect (Set B)", instruction: "For each event, write what caused it or what happened because of it.", prompts: [ { text: "The sandcastle was washed away. Why? Because ______", type: "lines" as const, lines: 1 }, { text: "Mia clapped her hands. Why? Because ______", type: "lines" as const, lines: 1 }, { text: "Sam laughed. Why? Because ______", type: "lines" as const, lines: 1 } ] },
      // 58
      { type: "open-response" as const, title: "Read and Answer: Honey Bees (Non-fiction)", instruction: "Read and answer.", prompts: [ { text: "Honey bees are very important insects. They visit flowers to collect nectar, which they turn into honey. While visiting flowers, bees carry pollen from one flower to another. This helps new plants grow! A bee colony can have up to 60,000 bees. The queen bee is the most important bee — she lays all the eggs.", type: "lines" as const, lines: 1 }, { text: "What do bees collect from flowers?", type: "lines" as const, lines: 1 }, { text: "How do bees help new plants grow?", type: "lines" as const, lines: 2 }, { text: "How many bees can be in one colony?", type: "lines" as const, lines: 1 } ] },
      // 59
      { type: "circle-correct" as const, title: "Vocabulary in Context (Set A)", instruction: "Use clues from the passage to choose the best meaning for each word.", parentTip: "Encourage your child to re-read the sentence containing the word before choosing.", questions: [ { prompt: "In the bee passage, 'nectar' is:", options: ["A sweet liquid from flowers", "A type of honey", "A bee's wing"] }, { prompt: "In the bee passage, 'colony' means:", options: ["A type of flower", "A large group of bees living together", "A bee's home"] }, { prompt: "In the kangaroo passage, 'pouch' is:", options: ["A type of tail", "A pocket on the mother's tummy", "A kangaroo's foot"] } ] },
      // 60 — SPARK
      { type: "home-activity" as const, title: "Non-Fiction Reading Challenge", instruction: "Explore the world of non-fiction reading!", parentTip: "Spark: Stories are not the only things we read! Non-fiction texts tell us true facts about real things. Think about all the non-fiction you read every day without realising: recipes, signs, labels, instructions, menus, weather reports. What is your favourite topic to learn about? Could you find a non-fiction book about it at the library?", suggestions: [ "Borrow a non-fiction book from the library about an animal, place or topic you love.", "Read a recipe together and identify the facts (ingredients, quantities, steps).", "Find an interesting fact in a non-fiction book and tell someone about it in your own words.", "Write 3 facts about your favourite animal after reading about it." ] },
      // 61
      { type: "open-response" as const, title: "Read and Answer: The Dentist", instruction: "Read and answer.", prompts: [ { text: "I had to go to the dentist today. I did not want to go because the last time it hurt a little bit. Mum held my hand in the waiting room. When Dr Chen called my name, I walked slowly to the chair. She was very kind and explained everything before she did it. She said my teeth were healthy! I got a sticker at the end. Maybe the dentist is not so bad after all.", type: "lines" as const, lines: 1 }, { text: "Why did the narrator not want to go?", type: "lines" as const, lines: 1 }, { text: "What was Dr Chen like? (Use evidence from the story)", type: "lines" as const, lines: 2 }, { text: "How did the narrator's feelings change from the beginning to the end?", type: "lines" as const, lines: 3 } ] },
      // 62
      { type: "circle-correct" as const, title: "How Did Feelings Change? (Story M)", instruction: "Circle the best description of how feelings changed.", questions: [ { prompt: "At the start, the narrator felt:", options: ["Happy and excited", "Worried and scared", "Angry and upset"] }, { prompt: "At the end, the narrator felt:", options: ["Still scared", "Better — maybe it was not so bad", "Angry at the dentist"] } ] },
      // 63
      { type: "open-response" as const, title: "Read and Answer: Making a Sandwich", instruction: "Read and answer.", prompts: [ { text: "How to Make a Cheese Sandwich: First, get two slices of bread. Next, spread butter on one side of each slice. Then, put a slice of cheese on the buttered side of one slice. You can add tomato or lettuce if you like. Finally, put the other slice of bread on top, buttered side down. Cut the sandwich in half and enjoy!", type: "lines" as const, lines: 1 }, { text: "What is the first step?", type: "lines" as const, lines: 1 }, { text: "Where do you put the cheese?", type: "lines" as const, lines: 1 }, { text: "Is this a story or an instruction? How do you know?", type: "lines" as const, lines: 2 } ] },
      // 64
      { type: "sequence" as const, title: "Put the Steps in Order (Sandwich)", instruction: "Number these steps 1 to 5.", items: [ { label: "Cut the sandwich in half." }, { label: "Get two slices of bread." }, { label: "Put cheese on the buttered bread." }, { label: "Spread butter on the bread." }, { label: "Put the top slice on." } ] },
      // 65
      { type: "open-response" as const, title: "Read and Answer: The Thunderstorm", instruction: "Read and answer.", prompts: [ { text: "The sky went dark. Thunder boomed and lightning flashed across the sky. My little brother Max hid under the blanket. 'Do not worry,' I said. 'Thunder is just a loud noise — it cannot hurt you.' I counted the seconds between the flash and the boom. 'One, two, three... BOOM! The storm is three kilometres away,' I told Max. He peeked out from under the blanket. By bedtime, the storm had passed and the stars were out.", type: "lines" as const, lines: 1 }, { text: "What did Max do when he heard thunder?", type: "lines" as const, lines: 1 }, { text: "How did the narrator help Max feel better?", type: "lines" as const, lines: 2 }, { text: "How did the weather change by bedtime?", type: "lines" as const, lines: 1 } ] },
      // 66
      { type: "circle-correct" as const, title: "Vocabulary in Context (Set B)", instruction: "Use clues from the passage to choose the best meaning.", questions: [ { prompt: "'Thunder boomed' — 'boomed' means:", options: ["Made a very loud sound", "Whispered", "Disappeared"] }, { prompt: "'Max peeked out' — 'peeked' means:", options: ["Looked quickly and carefully", "Ran away", "Fell asleep"] }, { prompt: "'The storm had passed' means:", options: ["The storm was gone", "The storm got worse", "A new storm started"] } ] },
      // 67
      { type: "matching" as const, title: "Match the Text Type to the Example", instruction: "Draw a line from each text type to its example.", parentTip: "Understanding different text types helps comprehension — we read differently depending on what we are reading.", left: ["Story (fiction)", "Information (non-fiction)", "Instructions", "Letter"], right: ["First, get two slices of bread...", "Dear Grandma, I miss you...", "Once there was a little red hen...", "Kangaroos are Australian animals..."] },
      // 68
      { type: "open-response" as const, title: "Read and Answer: Australia Day", instruction: "Read and answer.", prompts: [ { text: "Every year on January 26, Australians celebrate Australia Day. Many families go to the beach, have barbecues or watch fireworks. Some people attend citizenship ceremonies where new Australians make a promise to their country. In our family, we always have a barbecue with sausages, salad and lamingtons. Last year, we watched the fireworks from the hill near our house.", type: "lines" as const, lines: 1 }, { text: "When is Australia Day?", type: "lines" as const, lines: 1 }, { text: "What do some families do on Australia Day? (Name 3 things)", type: "lines" as const, lines: 2 }, { text: "What does the narrator's family always do?", type: "lines" as const, lines: 1 } ] },
      // 69
      { type: "open-response" as const, title: "Personal Connection (Set A)", instruction: "Think about a story you read on this worksheet. Connect it to your own life.", parentTip: "Personal connections deepen comprehension — they make the text meaningful.", prompts: [ { text: "The story I am connecting to:", type: "lines" as const, lines: 1 }, { text: "Something in the story that is like something in MY life:", type: "lines" as const, lines: 3 }, { text: "How my experience was the same or different:", type: "lines" as const, lines: 3 } ] },
      // 70
      { type: "circle-correct" as const, title: "Find the Main Idea (Set B)", instruction: "Circle the sentence that best describes the main idea of each passage.", questions: [ { prompt: "Passage about the fire station visit:", options: ["The helmet was heavy.", "The class learned about how firefighters help people.", "Jake showed them the truck."] }, { prompt: "Passage about honey bees:", options: ["Bees make honey.", "Honey bees are important because they help plants grow and make honey.", "The queen bee lays eggs."] }, { prompt: "Passage about the dentist:", options: ["The narrator got a sticker.", "The narrator was scared but learned the dentist is not so bad.", "Dr Chen is a dentist."] } ] },
      // 71
      { type: "open-response" as const, title: "Read and Answer: The Lost Kitten", instruction: "Read and answer.", prompts: [ { text: "On the way home from school, I heard a tiny meow coming from behind a bin. I looked and found a small grey kitten. It was shivering and looked hungry. I gently picked it up and carried it home. Mum helped me give it some warm milk and a soft towel to lie on. We put up posters around the neighbourhood. Two days later, a lady called Mrs Park came to our door. 'That is my kitten, Misty!' she said. She was so happy, she gave me a box of chocolates as a thank you.", type: "lines" as const, lines: 1 }, { text: "Where did the narrator find the kitten?", type: "lines" as const, lines: 1 }, { text: "What did the narrator and Mum do to help?", type: "lines" as const, lines: 2 }, { text: "How did they find the owner?", type: "lines" as const, lines: 1 }, { text: "What was the kitten's name?", type: "lines" as const, lines: 1 } ] },
      // 72
      { type: "circle-correct" as const, title: "Cause and Effect (Set C)", instruction: "Circle the correct effect for each cause.", questions: [ { prompt: "Because the kitten was shivering and hungry...", options: ["They gave it warm milk and a towel", "They left it outside", "They called the police"] }, { prompt: "Because they put up posters...", options: ["Nobody called", "The owner found them", "The kitten ran away"] }, { prompt: "Because Mrs Park was so happy...", options: ["She called the school", "She gave them chocolates", "She was angry"] } ] },
      // 73
      { type: "open-response" as const, title: "Retell a Story (Set A)", instruction: "Choose ANY story from this worksheet. Retell it in your own words in 4 to 5 sentences.", parentTip: "Include: who, where, what happened (beginning, middle, end), and how it ended.", prompts: [ { text: "Story I chose:", type: "lines" as const, lines: 1 }, { text: "My retelling:", type: "lines" as const, lines: 8 } ] },
      // 74
      { type: "open-response" as const, title: "Read and Answer: Wombats (Non-fiction)", instruction: "Read and answer.", prompts: [ { text: "Wombats are Australian marsupials. They live in underground burrows that they dig with their strong claws. Wombats are nocturnal, which means they come out at night to eat grass and roots. A wombat's pouch faces backwards so dirt does not get in when it digs. Wombats can run up to 40 kilometres per hour in short bursts!", type: "lines" as const, lines: 1 }, { text: "Where do wombats live?", type: "lines" as const, lines: 1 }, { text: "What does 'nocturnal' mean?", type: "lines" as const, lines: 1 }, { text: "Why does the wombat's pouch face backwards?", type: "lines" as const, lines: 2 } ] },
      // 75 — TIP
      { type: "circle-correct" as const, title: "Fiction or Non-fiction?", instruction: "Read each description. Circle whether it is fiction (made up) or non-fiction (true facts).", parentTip: "Tip: When reading, always ask yourself: is this a made-up story or real information? You read them differently! For fiction, think about characters and feelings. For non-fiction, look for facts and key information. Both types are important!", questions: [ { prompt: "A passage about how kangaroos live", options: ["Fiction", "Non-fiction"] }, { prompt: "A story about a boy and his dog at the park", options: ["Fiction", "Non-fiction"] }, { prompt: "Facts about honey bees and how they make honey", options: ["Fiction", "Non-fiction"] }, { prompt: "A story about a new student who was nervous", options: ["Fiction", "Non-fiction"] }, { prompt: "Information about wombats and their burrows", options: ["Fiction", "Non-fiction"] } ] },
      // 76
      { type: "open-response" as const, title: "Read and Answer: The School Concert", instruction: "Read and answer.", prompts: [ { text: "Our class performed a play at the school concert. I had to dress up as a tree. I felt a bit silly at first but my costume was actually really cool — it had paper leaves and brown fabric for the trunk. During the play, I had to stand very still while the other characters walked around me. The hardest part was not laughing when my friend Ollie forgot his words! The audience clapped loudly at the end and Mum said it was the best tree she had ever seen.", type: "lines" as const, lines: 1 }, { text: "What did the narrator dress up as?", type: "lines" as const, lines: 1 }, { text: "What was the hardest part?", type: "lines" as const, lines: 1 }, { text: "How did the narrator's feelings change during the concert?", type: "lines" as const, lines: 3 } ] },
      // 77
      { type: "matching" as const, title: "Match the Story to Its Setting", instruction: "Draw a line from each story to where it mainly happened.", left: ["Sam and Rex", "The Fire Station", "My Grandma", "Sports Day", "The Thunderstorm"], right: ["A farm", "At home", "The park", "A fire station", "School oval"] },
      // 78
      { type: "open-response" as const, title: "Compare Fiction and Non-fiction", instruction: "You read about kangaroos (non-fiction) and about Sam and Rex (fiction). Compare the two.", prompts: [ { text: "How is the kangaroo passage DIFFERENT from the Sam and Rex story?", type: "lines" as const, lines: 3 }, { text: "Which type do you prefer reading? Why?", type: "lines" as const, lines: 3 } ] },
      // 79
      { type: "open-response" as const, title: "Summarise a Non-fiction Text", instruction: "Choose one non-fiction passage from this worksheet (Kangaroos, Penguins, Bees, or Wombats). Write 3 key facts you learned.", parentTip: "Summarising means picking out the most important information — not every detail.", prompts: [ { text: "I chose the passage about:", type: "lines" as const, lines: 1 }, { text: "Fact 1:", type: "lines" as const, lines: 1 }, { text: "Fact 2:", type: "lines" as const, lines: 1 }, { text: "Fact 3:", type: "lines" as const, lines: 1 } ] },
      // 80 — SPARK
      { type: "home-activity" as const, title: "Reading Across the Week", instruction: "Read different types of texts this week and practise your comprehension skills.", parentTip: "Spark: Think about how many different things you read in a single day: signs, labels, books, screens, instructions, messages. Each one is a text that requires comprehension! What is the most unusual thing you have read today? Did you understand it? What helped you understand it?", suggestions: [ "Read a story and a non-fiction text this week — tell someone 3 things from each.", "Read a recipe and follow the instructions to make something simple.", "Find an interesting fact in a book or website and explain it to a family member.", "Read a story and draw a 4-panel comic showing beginning, problem, solution and end." ] },
      // ─── EXTENDING (81–100): Multi-text comparison, inference, summarising, critical thinking ───
      // 81
      { type: "open-response" as const, title: "Read and Answer: Two Friends (Longer Text)", instruction: "Read this longer story carefully. Answer the questions using evidence from the text.", parentTip: "This is a longer passage. Your child may need to read it more than once.", prompts: [ { text: "Maya and Priya were best friends. They did everything together — walking to school, eating lunch and playing at recess. One day, a new girl called Isla joined their class. Priya started playing with Isla at lunchtime. Maya felt left out. She sat alone and did not eat her lunch. The next day, Priya came over and said, 'Maya, come and meet Isla! She loves drawing too!' Maya was nervous but she went over. Isla showed her an amazing drawing of a dragon. 'That is so cool!' said Maya. Soon the three of them were drawing together, laughing and sharing pencils. Maya realised that having a new friend did not mean losing an old one.", type: "lines" as const, lines: 1 }, { text: "Why did Maya feel left out?", type: "lines" as const, lines: 2 }, { text: "What did Priya do to fix the problem?", type: "lines" as const, lines: 2 }, { text: "What lesson did Maya learn?", type: "lines" as const, lines: 2 } ] },
      // 82
      { type: "circle-correct" as const, title: "Character Traits (Story N)", instruction: "Circle the word that best describes each character.", questions: [ { prompt: "Maya at the start of the story was:", options: ["Jealous and lonely", "Happy and excited", "Angry and mean"] }, { prompt: "Priya was being:", options: ["Unkind", "Thoughtful and inclusive", "Selfish"] }, { prompt: "Isla was:", options: ["Rude", "Shy and unfriendly", "Friendly and talented"] } ] },
      // 83
      { type: "open-response" as const, title: "Read and Answer: The Kookaburra (Non-fiction)", instruction: "Read and answer.", prompts: [ { text: "The laughing kookaburra is one of Australia's most well-known birds. Its call sounds like a loud laugh — ha ha ha ha! Kookaburras eat insects, small lizards and sometimes snakes. They live in family groups and often call together at dawn and dusk. Aboriginal Australians have a Dreamtime story about the kookaburra — its laugh was meant to wake up the sun each morning.", type: "lines" as const, lines: 1 }, { text: "What does the kookaburra's call sound like?", type: "lines" as const, lines: 1 }, { text: "What do kookaburras eat?", type: "lines" as const, lines: 1 }, { text: "According to the Dreamtime story, what was the laugh meant to do?", type: "lines" as const, lines: 2 } ] },
      // 84
      { type: "sorting" as const, title: "Compare Australian Animals", instruction: "Sort each fact under the correct animal.", columns: ["Kangaroo", "Wombat", "Kookaburra"], items: [ { label: "Hops on strong back legs" }, { label: "Lives in an underground burrow" }, { label: "Has a call like a laugh" }, { label: "Joey lives in a pouch" }, { label: "Is nocturnal" }, { label: "Eats insects and lizards" } ] },
      // 85
      { type: "open-response" as const, title: "Read and Answer: The Camping Trip", instruction: "Read and answer.", prompts: [ { text: "Last holidays, our family went camping near a river. We put up the tent together but it fell down twice! Dad was getting frustrated but we all laughed. At night, we cooked sausages on the campfire. I could see a million stars above us — way more than at home. We heard a possum in the tree and saw its big eyes shining in the torchlight. In the morning, a kookaburra woke us up with its loud laugh. Mum said it was better than an alarm clock!", type: "lines" as const, lines: 1 }, { text: "Where did the family go camping?", type: "lines" as const, lines: 1 }, { text: "What problems did they have with the tent?", type: "lines" as const, lines: 1 }, { text: "Why could the narrator see more stars than at home?", type: "lines" as const, lines: 2 }, { text: "Find a sentence that uses humour. Write it here.", type: "lines" as const, lines: 2 } ] },
      // 86
      { type: "circle-correct" as const, title: "Author's Purpose (Set A)", instruction: "Why did the author write each text? Circle the main purpose.", parentTip: "Authors write to entertain (fiction), inform (non-fiction) or persuade (opinion).", questions: [ { prompt: "The kangaroo passage was written to:", options: ["Entertain", "Inform", "Persuade"] }, { prompt: "The Sam and Rex story was written to:", options: ["Entertain", "Inform", "Persuade"] }, { prompt: "The sandwich instructions were written to:", options: ["Entertain", "Inform / Instruct", "Persuade"] } ] },
      // 87
      { type: "open-response" as const, title: "Write Your Own Comprehension Questions", instruction: "Choose a story from this worksheet. Write 3 questions about it — one 'right there' question, one 'think about it' question, and one opinion question.", parentTip: "Creating questions is a high-level comprehension skill — it shows deep understanding of the text.", prompts: [ { text: "Story I chose:", type: "lines" as const, lines: 1 }, { text: "Right there question (answer is in the text):", type: "lines" as const, lines: 2 }, { text: "Think about it question (needs inference):", type: "lines" as const, lines: 2 }, { text: "Opinion question (no right or wrong answer):", type: "lines" as const, lines: 2 } ] },
      // 88
      { type: "matching" as const, title: "Match the Vocabulary Word to Its Meaning", instruction: "Draw a line from each word to its meaning. Use context clues from the passages you have read.", left: ["nocturnal", "nectar", "colony", "marsupial", "burrow"], right: ["A sweet liquid from flowers", "An underground tunnel home", "Active at night", "A large group living together", "An animal with a pouch"] },
      // 89
      { type: "open-response" as const, title: "Read and Answer: The Surprise Party", instruction: "Read and answer.", prompts: [ { text: "It was Grandpa's birthday. The whole family planned a surprise party. We hid behind the couch and turned off the lights. When Grandpa opened the door, we all jumped out and yelled 'Surprise!' Grandpa's eyes went wide and he put his hand on his heart. 'You scared me!' he said, but he was smiling from ear to ear. We had cake with 70 candles. It took three people to blow them all out!", type: "lines" as const, lines: 1 }, { text: "Why did the family hide?", type: "lines" as const, lines: 1 }, { text: "'Smiling from ear to ear' — what does this expression mean?", type: "lines" as const, lines: 2 }, { text: "Was Grandpa really scared or was he happy? How do you know?", type: "lines" as const, lines: 2 } ] },
      // 90 — TIP
      { type: "circle-correct" as const, title: "Figurative Language (Set A)", instruction: "Some phrases do not mean exactly what the words say. Circle the real meaning.", parentTip: "Tip: Sometimes authors use words in creative ways. 'Smiling from ear to ear' does not mean someone's smile literally goes from one ear to the other — it means they were smiling very widely. This is called figurative language. When you come across a phrase that does not make sense literally, think about what the author is really trying to say.", questions: [ { prompt: "'Smiling from ear to ear' means:", options: ["Having a very big smile", "Having very large ears", "Smiling at someone's ears"] }, { prompt: "'It was raining cats and dogs' means:", options: ["Animals fell from the sky", "It was raining very heavily", "Cats and dogs were outside"] }, { prompt: "'I could see a million stars' means:", options: ["Exactly one million stars", "There were a great many stars", "Stars were falling"] } ] },
      // 91
      { type: "open-response" as const, title: "Read and Answer: Two Points of View", instruction: "Read BOTH versions of the same event, then answer.", prompts: [ { text: "VERSION A (Lily): 'I saw the tiniest spider on the wall. I screamed because spiders are scary. Dad had to come and take it away.' VERSION B (Dad): 'Lily screamed about a tiny spider — it was no bigger than my fingernail. I gently took it outside. I wish she knew that spiders help us by eating mosquitoes.'", type: "lines" as const, lines: 1 }, { text: "How does Lily feel about the spider?", type: "lines" as const, lines: 1 }, { text: "How does Dad feel about the spider?", type: "lines" as const, lines: 1 }, { text: "Whose point of view do you agree with? Why?", type: "lines" as const, lines: 3 } ] },
      // 92
      { type: "open-response" as const, title: "Summarise a Whole Story", instruction: "Choose the longest story from this worksheet. Summarise it in exactly 3 sentences: beginning, middle, end.", parentTip: "Summarising is hard! The challenge is leaving out details and keeping only the most important parts.", prompts: [ { text: "Story I chose:", type: "lines" as const, lines: 1 }, { text: "Beginning:", type: "lines" as const, lines: 2 }, { text: "Middle:", type: "lines" as const, lines: 2 }, { text: "End:", type: "lines" as const, lines: 2 } ] },
      // 93
      { type: "circle-correct" as const, title: "Best Title for the Story (Set A)", instruction: "Read the short passage. Circle the best title.", questions: [ { prompt: "A boy found a kitten behind a bin. He took it home, cared for it, and found the owner.", options: ["The Bin", "The Kind Boy and the Lost Kitten", "A Cat"] }, { prompt: "Two friends ran a race. One tripped, the other stopped to help. They finished together.", options: ["The Running Race", "True Friendship at Sports Day", "School"] }, { prompt: "A family went camping, cooked sausages, saw stars and were woken by a kookaburra.", options: ["Sausages", "A Wonderful Camping Adventure", "Trees and Stars"] } ] },
      // 94
      { type: "open-response" as const, title: "Read and Answer: The Letter", instruction: "Read this letter and answer.", prompts: [ { text: "Dear Mia, I hope you are having a good holiday. We went to the Gold Coast! I went on the biggest waterslide ever — it was so fast I screamed the whole way down. Mum said I was too loud but I could not help it! We also saw dolphins from the beach. I took a photo for you. See you at school next week! From, Zara", type: "lines" as const, lines: 1 }, { text: "Who wrote the letter? Who is it for?", type: "lines" as const, lines: 1 }, { text: "Where did Zara go on holiday?", type: "lines" as const, lines: 1 }, { text: "How do you think Zara felt on the waterslide? What clue tells you?", type: "lines" as const, lines: 2 } ] },
      // 95
      { type: "open-response" as const, title: "Write a Reply to the Letter", instruction: "Imagine you are Mia. Write a short reply to Zara's letter. Ask at least one question.", prompts: [ { text: "Dear Zara,", type: "lines" as const, lines: 6 }, { text: "From, Mia", type: "lines" as const, lines: 1 } ] },
      // 96
      { type: "sorting" as const, title: "Sort by Text Type (Review)", instruction: "Sort each passage from this worksheet by its text type.", columns: ["Fiction (story)", "Non-fiction (information)", "Instructions", "Letter"], items: [ { label: "Sam and Rex at the park" }, { label: "Kangaroos are Australian animals" }, { label: "How to make a cheese sandwich" }, { label: "Dear Mia, I hope you are having a good holiday" }, { label: "The new student Kai was nervous" }, { label: "Honey bees collect nectar from flowers" } ] },
      // 97
      { type: "open-response" as const, title: "My Reading Reflection", instruction: "Think about all the reading you have done on this worksheet. Answer honestly.", prompts: [ { text: "My favourite story was ______ because:", type: "lines" as const, lines: 2 }, { text: "The most interesting fact I learned was:", type: "lines" as const, lines: 2 }, { text: "Something I found tricky was:", type: "lines" as const, lines: 2 }, { text: "A comprehension skill I have improved:", type: "lines" as const, lines: 2 } ] },
      // 98
      { type: "open-response" as const, title: "Create a Story Map", instruction: "Choose any fiction story from this worksheet. Create a story map.", prompts: [ { text: "Story title:", type: "lines" as const, lines: 1 }, { text: "Characters:", type: "lines" as const, lines: 1 }, { text: "Setting (where and when):", type: "lines" as const, lines: 1 }, { text: "Problem:", type: "lines" as const, lines: 2 }, { text: "Solution:", type: "lines" as const, lines: 2 }, { text: "Ending:", type: "lines" as const, lines: 2 } ] },
      // 99
      { type: "open-response" as const, title: "Write Your Own Short Story", instruction: "Write a short story (5 to 6 sentences) that someone could answer comprehension questions about. Include a character, setting, problem and solution.", parentTip: "This is the ultimate comprehension activity — if you can write a text that others can comprehend, you truly understand how texts work.", prompts: [ { text: "My story:", type: "lines" as const, lines: 10 } ] },
      // 100 — SPARK
      { type: "home-activity" as const, title: "Comprehension Champion", instruction: "You have completed 100 reading comprehension activities! Celebrate your learning.", parentTip: "Spark: You are now a Reading Detective, a Fact Finder and a Story Expert! Think about all the different types of texts you have read: stories, facts, instructions and letters. Think about all the skills you have used: finding facts, inferring feelings, ordering events, understanding vocabulary, comparing texts and summarising. Which skill are you best at? Which one do you want to keep practising? Remember — every time you read ANYTHING, you are using comprehension skills!", suggestions: [ "Visit the library and choose a book you have never read before — use your detective skills on it.", "Read a newspaper article and find: who, what, where, when, why.", "Write 3 comprehension questions about a story you read and give them to a family member to answer.", "Start a reading journal: after each book, write the title, your rating (out of 5) and one sentence about what you liked." ] },
    ],
  },

  // ── WS 5: Creative Writing ────────────────────────────────
  {
    slug: "creative-writing",
    title: "Write a Short Story",
    strand: "Literature",
    description:
      "Write a short imaginative story with a character, setting and simple event — using describing words and correct sentence punctuation.",
    learningGuide: {
      concept:
        "Creative writing at Year 1 focuses on generating ideas, sequencing events and using language to paint pictures in a reader's mind. Describing words (adjectives and action words/verbs) make writing vivid. The key structure is: Who + Where + What happened.",
      activation:
        "Show your child a interesting picture (from a magazine, book or drawn by you). Ask: 'Who might live in this place? What might happen to them?' Spend 3 minutes brainstorming before writing — this filling of the 'ideas bucket' is the most important step.",
      check:
        "Does the story have a character, a setting and at least one event? Are there some describing words? Does every sentence start with a capital and end with a full stop?",
    },
    lesson: {
      title: "Be an Author!",
      objective:
        "Plan and write a short imaginative story with a character, setting and event, using describing words.",
      materials: [
        "Pencil and crayons",
        "A plain piece of paper (for planning and drawing)",
        "Lined paper for the final story",
        "Any picture that could inspire a story (magazine, book, or child's own drawing)",
      ],
      intro: {
        title: "Every Author Has a Plan",
        script:
          "Do you know how authors think before they write? They plan! They ask three questions: Who is my story about? Where does it happen? What happens? Let us answer those questions now before we write a single word. Ready? Tell me — who is going to be in your story? Give me a name and something interesting about them.",
        action:
          "Help your child fill in a simple story map on a piece of paper: WHO (character + one describing word), WHERE (setting + one describing word), WHAT HAPPENS (one simple event).",
      },
      mainActivity: {
        title: "Write It!",
        script:
          "Now we have our plan — let us write! Remember: every sentence starts with a capital letter and ends with a full stop. Try to include at least one describing word — a colour, a size, a feeling word. And remember, your story needs a beginning (who, where), a middle (what happens) and an end (how it finishes). Off you go — you are an author!",
        action:
          "Your child writes their story. If they get stuck, ask: 'What happened next? How did the character feel? How did it end?' Do not write for them — prompt with questions.",
      },
      wrapUp: {
        title: "Read Your Story Aloud",
        script:
          "You have written a real story! Now read it to me like a storyteller — with feeling! When you get to a full stop, pause. When you see an exclamation mark, make your voice exciting. Let us hear your story!",
        action:
          "Your child reads their completed story aloud. Ask one genuine question about the story to show interest.",
      },
      parentTip:
        "Quantity matters less than quality at this stage. One well-crafted sentence with a describing word is worth more than five plain ones. If your child struggles, reduce expectations — even two sentences and a drawing constitutes a real creative writing piece at Year 1.",
      extension:
        "Bind the story with a cover page, author bio (name and photo or self-portrait) and an illustrator page. Post it somewhere visible or send it to a grandparent. Real audiences motivate real writers. This covers AC V9 Year 1 — creating short written texts including recounts with characters.",
      resources: [
        {
          title: "ABC Education — Creative Writing",
          url: "https://www.abc.net.au/education/learn-english/writing/",
          description:
            "Writing prompts, tips and examples for Year 1 creative writing.",
        },
        {
          title: "Storyline Online",
          url: "https://storylineonline.net/",
          description:
            "Inspiring picture book read-alouds that model rich language and storytelling structure.",
        },
        {
          title: "Khan Academy Kids — Stories",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Creative story-making activities for early writers.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Story planning, describing words, sentence building ───
      // 1
      { type: "circle-correct" as const, title: "What Makes a Story?", instruction: "Every story needs three things. Circle the three things a story must have.", parentTip: "The three essentials are: a character (who), a setting (where), and an event (what happens).", questions: [ { prompt: "A story must have:", options: ["A character (who)", "A table", "A song"] }, { prompt: "A story must have:", options: ["A pencil", "A setting (where)", "A chair"] }, { prompt: "A story must have:", options: ["An apple", "A number", "An event (what happens)"] } ] },
      // 2
      { type: "matching" as const, title: "Match Story Parts (Set A)", instruction: "Draw a line from each story part to its example.", left: ["Character (who)", "Setting (where)", "Event (what happens)"], right: ["In a deep, dark forest", "A brave little mouse", "The mouse found a golden key"] },
      // 3
      { type: "open-response" as const, title: "Plan Your Story (Set A)", instruction: "Fill in the story map to plan a story BEFORE writing.", parentTip: "Spend at least 5 minutes on the plan before writing begins. A good plan makes a much better story.", prompts: [ { text: "WHO is my story about? (name + one describing word):", type: "lines" as const, lines: 1 }, { text: "WHERE does it happen? (place + one describing word):", type: "lines" as const, lines: 1 }, { text: "WHAT happens? (one event):", type: "lines" as const, lines: 1 } ] },
      // 4
      { type: "circle-correct" as const, title: "Choose the Best Describing Word (Set A)", instruction: "Circle the describing word that best fits each sentence.", parentTip: "Describing words (adjectives) tell us about size, colour, shape or feeling.", questions: [ { prompt: "The ___ cat climbed the tree.", options: ["tiny", "purple", "wooden"] }, { prompt: "She wore a ___ dress to the party.", options: ["sparkling", "sleeping", "fast"] }, { prompt: "The ___ giant stomped through the forest.", options: ["enormous", "quiet", "tasty"] } ] },
      // 5
      { type: "open-response" as const, title: "Add Describing Words (Set A)", instruction: "These sentences are a bit dull. Add a describing word to make each one more exciting.", parentTip: "Ask: 'What did it look like? What colour? How big?' These prompts generate adjectives.", prompts: [ { text: "The dog ran away. -> The _______ dog ran away.", type: "lines" as const, lines: 1 }, { text: "A cat sat on the mat. -> A _______ cat sat on the mat.", type: "lines" as const, lines: 1 }, { text: "She found a flower. -> She found a _______ flower.", type: "lines" as const, lines: 1 } ] },
      // 6
      { type: "sorting" as const, title: "Sort Words into Story Parts (Set A)", instruction: "Sort each sentence into Beginning, Middle or End.", parentTip: "Beginning = who and where. Middle = what happens. End = how it finishes.", columns: ["Beginning", "Middle", "End"], items: [ { label: "Once there was a small red dragon who lived in a cave." }, { label: "The dragon tried and tried but could not find his way home." }, { label: "At last, a friendly bird showed him the path back." }, { label: "One day, the dragon flew too far and got lost." }, { label: "The dragon lived happily ever after." }, { label: "The cave was deep in a tall green mountain." } ] },
      // 7
      { type: "open-response" as const, title: "Write Your First Story", instruction: "Use your plan from activity 3 (or make a new one). Write a story with at least 3 sentences: a beginning, a middle and an end.", parentTip: "Say each sentence aloud before writing. This oral rehearsal step is essential.", prompts: [ { text: "My story:", type: "lines" as const, lines: 8 } ] },
      // 8
      { type: "circle-correct" as const, title: "Choose the Best Describing Word (Set B)", instruction: "Circle the describing word that fits best.", questions: [ { prompt: "He found a ___ shell on the beach.", options: ["striped", "running", "heavy"] }, { prompt: "A ___ wind blew through the window.", options: ["cold", "yellow", "happy"] }, { prompt: "The ___ baby cried all night.", options: ["little", "square", "fast"] } ] },
      // 9
      { type: "open-response" as const, title: "Story Beginning: Set the Scene (Set A)", instruction: "Write a strong opening sentence for each story idea. Include the character's name and one describing word.", parentTip: "Model first: 'Tiny Mia the mouse crept across the dark kitchen floor.'", prompts: [ { text: "Story idea: A dragon who cannot breathe fire", type: "lines" as const, lines: 2 }, { text: "Story idea: A girl who finds a magic door", type: "lines" as const, lines: 2 } ] },
      // 10
      { type: "matching" as const, title: "Match the Character to the Setting", instruction: "Draw a line from each character to the best setting.", left: ["A brave pirate", "A lost penguin", "A friendly alien", "A tiny fairy"], right: ["A garden of flowers", "A spaceship", "The icy South Pole", "A ship on the ocean"] },
      // 11
      { type: "open-response" as const, title: "Add Describing Words (Set B)", instruction: "Add TWO describing words to each sentence.", prompts: [ { text: "The boy laughed. -> The _______, _______ boy laughed.", type: "lines" as const, lines: 1 }, { text: "A bird sat in the tree. -> A _______, _______ bird sat in the tree.", type: "lines" as const, lines: 1 }, { text: "The house was old. -> The _______, _______ house was old.", type: "lines" as const, lines: 1 } ] },
      // 12
      { type: "circle-correct" as const, title: "Which Is a Better Sentence?", instruction: "Circle the sentence that paints a better picture in the reader's mind.", parentTip: "The sentence with more detail and describing words creates a stronger image.", questions: [ { prompt: "Which is better?", options: ["The dog ran.", "The fluffy brown dog ran across the muddy park."] }, { prompt: "Which is better?", options: ["A scary, enormous dragon flew over the castle.", "A dragon flew."] }, { prompt: "Which is better?", options: ["She had a dress.", "She wore a shiny blue dress with silver stars."] } ] },
      // 13
      { type: "open-response" as const, title: "Expand the Sentence (Set A)", instruction: "Make each short sentence longer by adding details. Who? What did they look like? Where?", prompts: [ { text: "The cat ran. -> ______", type: "lines" as const, lines: 2 }, { text: "A man walked. -> ______", type: "lines" as const, lines: 2 }, { text: "The ball bounced. -> ______", type: "lines" as const, lines: 2 } ] },
      // 14
      { type: "sorting" as const, title: "Describing Words: Size, Colour or Feeling?", instruction: "Sort each describing word by what it describes.", columns: ["Size", "Colour", "Feeling"], items: [ { label: "tiny" }, { label: "red" }, { label: "happy" }, { label: "enormous" }, { label: "blue" }, { label: "scared" }, { label: "small" }, { label: "golden" }, { label: "brave" } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Draw Your Character", instruction: "Draw a character for a story. Then write 3 sentences describing them.", parentTip: "Tip: Good writers plan before they write. Before starting a story, always think about WHO is in your story, WHERE it happens, and WHAT the problem or event is. Drawing your character first helps you see them in your mind — and that makes your describing words much better!", prompts: [ { text: "Draw your character here:", type: "box" as const }, { text: "My character's name is:", type: "lines" as const, lines: 1 }, { text: "Three describing sentences about my character:", type: "lines" as const, lines: 4 } ] },
      // 16
      { type: "open-response" as const, title: "Setting Description (Set A)", instruction: "Describe each setting using at least two describing words.", prompts: [ { text: "A beach:", type: "lines" as const, lines: 2 }, { text: "A spooky forest:", type: "lines" as const, lines: 2 }, { text: "A busy city:", type: "lines" as const, lines: 2 } ] },
      // 17
      { type: "circle-correct" as const, title: "Action Words (Set A)", instruction: "Circle the most interesting action word for each sentence.", parentTip: "Strong verbs (action words) make writing exciting: 'crept' is more interesting than 'walked'.", questions: [ { prompt: "The cat ___ up the tree.", options: ["went", "scrambled", "was"] }, { prompt: "The boy ___ across the room.", options: ["walked", "tiptoed", "moved"] }, { prompt: "The dragon ___ into the sky.", options: ["went", "soared", "was"] } ] },
      // 18
      { type: "open-response" as const, title: "Replace Boring Words (Set A)", instruction: "Replace the underlined word with a more interesting one.", prompts: [ { text: "'The dog went to the park.' Replace 'went' with a better word:", type: "lines" as const, lines: 1 }, { text: "'She said hello.' Replace 'said' with a better word:", type: "lines" as const, lines: 1 }, { text: "'The bird went into the sky.' Replace 'went' with a better word:", type: "lines" as const, lines: 1 } ] },
      // 19
      { type: "matching" as const, title: "Match Boring Words to Better Words", instruction: "Draw a line from each boring word to a more interesting replacement.", left: ["said", "big", "went", "nice", "good"], right: ["wonderful", "whispered", "enormous", "excellent", "raced"] },
      // 20 — SPARK
      { type: "home-activity" as const, title: "Story Starters at Home", instruction: "Use these prompts to spark creative writing at home!", parentTip: "Spark: Every great author started by writing one sentence. J.K. Rowling wrote the first Harry Potter story on napkins in a cafe! You do not need fancy paper or a quiet room to write — you just need an idea and a pencil. Where is the most unusual place you could write a story? Try writing a sentence in the bathtub (on waterproof paper), in a tree, or under a blanket fort!", suggestions: [ "Story starter: 'One morning, I woke up and everything was made of...' — continue!", "Draw a character first, then write a story about them.", "Tell a story out loud together — one sentence each. Then write it down.", "Keep a family 'story jar' — write ideas on slips and draw one when stuck." ] },
      // ─── DEVELOPING (21–50): Story structure, dialogue, character feelings ───
      // 21
      { type: "open-response" as const, title: "Plan Your Story (Set B)", instruction: "Plan a new story using this extended story map.", parentTip: "This story map adds a problem — this is the engine that drives the story forward.", prompts: [ { text: "Character (who + 2 describing words):", type: "lines" as const, lines: 1 }, { text: "Setting (where + 2 describing words):", type: "lines" as const, lines: 1 }, { text: "Problem (what goes wrong?):", type: "lines" as const, lines: 2 }, { text: "Solution (how is it fixed?):", type: "lines" as const, lines: 2 }, { text: "Ending (how does it finish?):", type: "lines" as const, lines: 1 } ] },
      // 22
      { type: "open-response" as const, title: "Write a Story With a Problem", instruction: "Use your plan from activity 21. Write a story with a beginning (character + setting), middle (problem) and end (solution).", prompts: [ { text: "My story (at least 5 sentences):", type: "lines" as const, lines: 10 } ] },
      // 23
      { type: "circle-correct" as const, title: "What Is the Problem?", instruction: "Circle the problem in each story idea.", questions: [ { prompt: "A rabbit wanted to cross the river, but the bridge was broken.", options: ["The rabbit wanted to cross", "The bridge was broken", "There was a river"] }, { prompt: "A girl lost her favourite book at school and could not find it anywhere.", options: ["She was at school", "She lost her favourite book", "She had a book"] }, { prompt: "A dog was hungry but his food bowl was empty and no one was home.", options: ["The dog was at home", "His food bowl was empty and no one was home", "The dog existed"] } ] },
      // 24
      { type: "open-response" as const, title: "Think of a Problem (Set A)", instruction: "For each character and setting, think of a problem that could happen.", parentTip: "The problem is the most exciting part of a story! Without a problem, nothing interesting happens.", prompts: [ { text: "A pirate on a ship — problem:", type: "lines" as const, lines: 2 }, { text: "A cat in a garden — problem:", type: "lines" as const, lines: 2 }, { text: "A child at school — problem:", type: "lines" as const, lines: 2 } ] },
      // 25
      { type: "open-response" as const, title: "Think of a Solution (Set A)", instruction: "For each problem, think of a solution.", prompts: [ { text: "Problem: The bridge is broken. Solution:", type: "lines" as const, lines: 2 }, { text: "Problem: The dog is lost. Solution:", type: "lines" as const, lines: 2 }, { text: "Problem: The cake is burnt. Solution:", type: "lines" as const, lines: 2 } ] },
      // 26
      { type: "sorting" as const, title: "Sort Words into Story Parts (Set B)", instruction: "Sort each sentence strip into Beginning, Middle or End.", columns: ["Beginning", "Middle", "End"], items: [ { label: "Once upon a time, a tiny mouse lived in a cosy hole." }, { label: "One day, a big cat blocked the entrance to the hole." }, { label: "The mouse was trapped and very scared." }, { label: "Clever Mouse had an idea — she sang a song like a bird!" }, { label: "The cat looked up at the sky, confused, and Mouse ran away." }, { label: "From that day on, Mouse always had a song ready, just in case." } ] },
      // 27
      { type: "open-response" as const, title: "Dialogue: What Did They Say? (Set A)", instruction: "Add speech to each scene. What would the character say?", parentTip: "Speech marks go around the exact words spoken: 'Hello!' said the boy.", prompts: [ { text: "A boy finds a puppy in the rain. He says: '______'", type: "lines" as const, lines: 1 }, { text: "A girl sees a rainbow. She says: '______'", type: "lines" as const, lines: 1 }, { text: "A dragon sneezes and accidentally starts a fire. He says: '______'", type: "lines" as const, lines: 1 } ] },
      // 28
      { type: "circle-correct" as const, title: "Which Dialogue Fits?", instruction: "Circle the dialogue that best fits the character and moment.", questions: [ { prompt: "A scared child in a dark room:", options: ["'This is fun!'", "'Is anyone there?'", "'I want pizza.'"] }, { prompt: "A happy winner of a race:", options: ["'Oh no!'", "'I give up.'", "'I did it! I won!'"] }, { prompt: "A tired mum at bedtime:", options: ["'Time for bed, little one.'", "'Let us go to the park!'", "'I am very angry.'"] } ] },
      // 29
      { type: "open-response" as const, title: "Write a Story With Dialogue", instruction: "Write a short story (4 to 5 sentences) that includes at least one line of dialogue (speech). Remember to use speech marks.", prompts: [ { text: "My story with dialogue:", type: "lines" as const, lines: 8 } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Show, Don't Tell (Set A)", instruction: "Instead of TELLING the reader how a character feels, SHOW it through actions.", parentTip: "Tip: Great writers do not just say 'He was scared.' They SHOW the feeling through actions: 'His hands trembled. His eyes went wide. He pressed his back against the wall.' This is called 'Show, Don't Tell' and it makes writing come alive!", prompts: [ { text: "Instead of 'She was happy', show it: ______", type: "lines" as const, lines: 2 }, { text: "Instead of 'He was scared', show it: ______", type: "lines" as const, lines: 2 }, { text: "Instead of 'The dog was excited', show it: ______", type: "lines" as const, lines: 2 } ] },
      // 31
      { type: "matching" as const, title: "Match the Feeling to the Action", instruction: "Draw a line from each feeling to an action that shows it.", left: ["Happy", "Scared", "Angry", "Surprised", "Sad"], right: ["Slammed the door", "Jumped up and down", "Mouth fell open", "Tears rolled down her cheeks", "Hid under the blanket"] },
      // 32
      { type: "open-response" as const, title: "Story Openings (Set A)", instruction: "Write 3 different opening sentences for stories. Make each one interesting and exciting.", parentTip: "Good openings hook the reader in. Try starting with action, a question, or a sound.", prompts: [ { text: "Opening that starts with an action:", type: "lines" as const, lines: 2 }, { text: "Opening that starts with a question:", type: "lines" as const, lines: 2 }, { text: "Opening that starts with a sound:", type: "lines" as const, lines: 2 } ] },
      // 33
      { type: "circle-correct" as const, title: "Which Is a Better Opening?", instruction: "Circle the story opening that would make you want to keep reading.", questions: [ { prompt: "Which opening is better?", options: ["There was a boy.", "CRASH! The door burst open and a boy stumbled in, covered in mud."] }, { prompt: "Which opening is better?", options: ["Once, a tiny kitten was left all alone on a dark, rainy night.", "There was a kitten."] }, { prompt: "Which opening is better?", options: ["A girl went to school.", "Have you ever found something magical in your lunchbox? Well, one Tuesday, Zara did."] } ] },
      // 34
      { type: "open-response" as const, title: "Story Endings (Set A)", instruction: "Write a strong ending sentence for each story idea.", parentTip: "Good endings leave the reader feeling satisfied. They can be happy, surprising, funny or thoughtful.", prompts: [ { text: "Story about a lost kitten that finds its way home:", type: "lines" as const, lines: 2 }, { text: "Story about a child who wins a race:", type: "lines" as const, lines: 2 }, { text: "Story about two friends who have an argument and make up:", type: "lines" as const, lines: 2 } ] },
      // 35
      { type: "open-response" as const, title: "Write a Story: The Magic Box", instruction: "Write a story about finding a magic box. Use the plan below, then write.", prompts: [ { text: "Where did you find the box?", type: "lines" as const, lines: 1 }, { text: "What was inside?", type: "lines" as const, lines: 1 }, { text: "What happened when you opened it?", type: "lines" as const, lines: 1 }, { text: "My story (at least 5 sentences):", type: "lines" as const, lines: 10 } ] },
      // 36
      { type: "circle-correct" as const, title: "Action Words (Set B)", instruction: "Circle the most interesting action word.", questions: [ { prompt: "The snake ___ through the grass.", options: ["went", "slithered", "moved"] }, { prompt: "The baby ___ with laughter.", options: ["made noise", "giggled", "was loud"] }, { prompt: "The wind ___ through the trees.", options: ["went", "was", "howled"] }, { prompt: "She ___ the ball across the field.", options: ["sent", "kicked", "moved"] } ] },
      // 37
      { type: "open-response" as const, title: "Replace Boring Words (Set B)", instruction: "Replace the underlined word with a more interesting one.", prompts: [ { text: "'The boy got the ball.' Replace 'got': ______", type: "lines" as const, lines: 1 }, { text: "'She looked at the stars.' Replace 'looked': ______", type: "lines" as const, lines: 1 }, { text: "'The monster ate the food.' Replace 'ate': ______", type: "lines" as const, lines: 1 }, { text: "'He was happy.' Replace 'happy': ______", type: "lines" as const, lines: 1 } ] },
      // 38
      { type: "open-response" as const, title: "Senses in Writing (Set A)", instruction: "Good writers use the five senses: see, hear, smell, taste, touch. Write a sentence about each setting using a different sense.", parentTip: "Model an example: 'At the beach, I heard the waves crashing on the sand.' (sense of hearing)", prompts: [ { text: "At the beach (hearing):", type: "lines" as const, lines: 2 }, { text: "In the kitchen (smell):", type: "lines" as const, lines: 2 }, { text: "In a garden (sight):", type: "lines" as const, lines: 2 } ] },
      // 39
      { type: "matching" as const, title: "Match the Sense to the Description", instruction: "Draw a line from each sentence to the sense it uses.", left: ["The cake smelled like chocolate.", "The ice was freezing cold.", "I heard the birds singing.", "The sunset was orange and pink.", "The lemon tasted sour."], right: ["Taste", "Hearing", "Smell", "Sight", "Touch"] },
      // 40 — SPARK
      { type: "home-activity" as const, title: "Be an Author!", instruction: "Try these creative writing challenges at home.", parentTip: "Spark: Did you know that many famous books started as stories told aloud? Roald Dahl used to tell his children bedtime stories, and those stories became books like Charlie and the Chocolate Factory! The stories inside YOUR head could become books too. What story would YOU write if you could write about absolutely anything? There are no rules in your imagination!", suggestions: [ "Write a story and make it into a mini book with a cover, title page and pictures.", "Tell a story to a family member using puppets or toys — then write it down.", "Start a story jar: write interesting characters, settings and problems on slips. Pull one of each and write a story!", "Write a letter from a character in your favourite book to another character." ] },
      // 41
      { type: "open-response" as const, title: "Character Profile (Set A)", instruction: "Create a detailed character for a story. Fill in every section.", prompts: [ { text: "Name:", type: "lines" as const, lines: 1 }, { text: "What they look like (at least 3 details):", type: "lines" as const, lines: 2 }, { text: "What they like:", type: "lines" as const, lines: 1 }, { text: "What they are scared of:", type: "lines" as const, lines: 1 }, { text: "Their special talent:", type: "lines" as const, lines: 1 }, { text: "Their biggest wish:", type: "lines" as const, lines: 1 } ] },
      // 42
      { type: "open-response" as const, title: "Write a Story About Your Character", instruction: "Use the character you created in activity 41. Write a story where your character faces a problem.", prompts: [ { text: "My story (at least 6 sentences):", type: "lines" as const, lines: 10 } ] },
      // 43
      { type: "circle-correct" as const, title: "Story Starters: Which Is Best?", instruction: "Circle the most interesting story starter.", questions: [ { prompt: "Which starter makes you want to read more?", options: ["There was a castle.", "Deep in the mountains, a crumbling castle hid a terrible secret.", "A castle was there and it was old."] }, { prompt: "Which starter makes you want to read more?", options: ["Max never expected to find a dragon in his school bag.", "Max had a school bag.", "A boy went to school one day."] } ] },
      // 44
      { type: "open-response" as const, title: "Continue the Story (Set A)", instruction: "Read the story starter and continue it. Write at least 4 more sentences.", prompts: [ { text: "Starter: 'The old wooden door creaked open. Inside, the room was dark except for a glowing light in the corner. I took a deep breath and stepped inside...'", type: "lines" as const, lines: 1 }, { text: "Continue the story:", type: "lines" as const, lines: 8 } ] },
      // 45 — TIP
      { type: "open-response" as const, title: "Show, Don't Tell (Set B)", instruction: "Rewrite each sentence to SHOW the feeling instead of telling it.", parentTip: "Tip: The best stories make you FEEL what the character feels. Instead of saying 'She was cold', try 'She hugged her arms tight and her teeth chattered like a wind-up toy.' Can you see the difference? The second version makes you shiver! Always try to show feelings through actions, body language and small details.", prompts: [ { text: "'He was angry.' Show it: ______", type: "lines" as const, lines: 2 }, { text: "'She was cold.' Show it: ______", type: "lines" as const, lines: 2 }, { text: "'The baby was tired.' Show it: ______", type: "lines" as const, lines: 2 } ] },
      // 46
      { type: "sorting" as const, title: "Strong or Weak Writing?", instruction: "Sort each sentence: is it strong (detailed, interesting) or weak (boring, plain)?", columns: ["Strong writing", "Weak writing"], items: [ { label: "The enormous, rusty robot clanked across the moonlit field." }, { label: "There was a robot." }, { label: "A girl walked." }, { label: "Tiny Maya crept through the whispering forest, her heart hammering." }, { label: "He was sad." }, { label: "Tears dripped down his face as he clutched the broken toy." } ] },
      // 47
      { type: "open-response" as const, title: "Dialogue: What Did They Say? (Set B)", instruction: "Write dialogue for each character. Use speech marks.", prompts: [ { text: "A pirate finds treasure. He says: '______'", type: "lines" as const, lines: 1 }, { text: "A teacher welcomes a new student. She says: '______'", type: "lines" as const, lines: 1 }, { text: "Two friends see a shooting star. One says: '______'", type: "lines" as const, lines: 1 }, { text: "A knight faces a dragon. He says: '______'", type: "lines" as const, lines: 1 } ] },
      // 48
      { type: "open-response" as const, title: "Write a Story: The Talking Animal", instruction: "Write a story about an animal that can talk. Include dialogue, describing words and a problem.", prompts: [ { text: "Which animal talks?", type: "lines" as const, lines: 1 }, { text: "What is the problem?", type: "lines" as const, lines: 1 }, { text: "My story (at least 6 sentences, with dialogue):", type: "lines" as const, lines: 10 } ] },
      // 49
      { type: "open-response" as const, title: "Senses in Writing (Set B)", instruction: "Describe each setting using at least 2 different senses.", prompts: [ { text: "A campfire at night:", type: "lines" as const, lines: 3 }, { text: "A busy playground:", type: "lines" as const, lines: 3 } ] },
      // 50
      { type: "open-response" as const, title: "Write a Story: The Storm", instruction: "Write a story about being caught in a big storm. Use senses, describing words and a problem.", prompts: [ { text: "My storm story (at least 6 sentences):", type: "lines" as const, lines: 10 } ] },
      // ─── CONSOLIDATING (51–80): Extended stories, editing, varied sentence structure ───
      // 51
      { type: "open-response" as const, title: "Plan an Extended Story (Set A)", instruction: "Plan a longer story using this detailed story map.", parentTip: "Longer stories need more planning. This map helps organise the whole story before writing begins.", prompts: [ { text: "Title:", type: "lines" as const, lines: 1 }, { text: "Main character (name + 3 details):", type: "lines" as const, lines: 2 }, { text: "Setting (where + when + details):", type: "lines" as const, lines: 2 }, { text: "Beginning (how does the story start?):", type: "lines" as const, lines: 2 }, { text: "Problem (what goes wrong?):", type: "lines" as const, lines: 2 }, { text: "Steps to solve the problem:", type: "lines" as const, lines: 2 }, { text: "Ending (how does it finish?):", type: "lines" as const, lines: 2 } ] },
      // 52
      { type: "open-response" as const, title: "Write Your Extended Story", instruction: "Use your plan from activity 51. Write a longer story — aim for 8 to 10 sentences.", prompts: [ { text: "My story:", type: "lines" as const, lines: 14 } ] },
      // 53
      { type: "circle-correct" as const, title: "Varied Sentence Starters", instruction: "Good writers start sentences in different ways. Circle the version that has more variety.", parentTip: "Avoid starting every sentence with the same word (e.g. 'The' or 'I').", questions: [ { prompt: "Which has more variety?", options: ["I went to the park. I played on the swings. I had an ice cream.", "After school, I went to the park. The swings were my favourite. Later, I had an ice cream."] }, { prompt: "Which has more variety?", options: ["Suddenly, a noise came from the attic. The old door creaked open. Out walked a tiny grey cat.", "The noise came. The door opened. The cat came out."] } ] },
      // 54
      { type: "open-response" as const, title: "Fix the Boring Paragraph", instruction: "This paragraph uses the same sentence starter every time. Rewrite it with varied starters.", prompts: [ { text: "Original: 'The boy walked to school. The boy saw a dog. The boy patted the dog. The boy was late for school.' Rewrite with varied starters:", type: "lines" as const, lines: 6 } ] },
      // 55
      { type: "open-response" as const, title: "Write a Story: The Surprise", instruction: "Write a story about a big surprise. Plan it first, then write. Include dialogue and describing words.", prompts: [ { text: "Quick plan — Character:", type: "lines" as const, lines: 1 }, { text: "What is the surprise?", type: "lines" as const, lines: 1 }, { text: "My story (at least 7 sentences):", type: "lines" as const, lines: 10 } ] },
      // 56
      { type: "matching" as const, title: "Match the Sentence Starter to the Situation", instruction: "Draw a line from each story moment to a good sentence starter.", left: ["Something unexpected happens", "Describing the setting", "Showing time passing", "Introducing a character", "Building suspense"], right: ["In the quiet village of...", "Suddenly,...", "Hours later,...", "There was a girl called...", "Slowly, the door began to..."] },
      // 57
      { type: "open-response" as const, title: "Time Words in Stories", instruction: "Rewrite this story adding time words to connect the events: first, next, then, after that, finally.", parentTip: "Time connectives help the reader follow the sequence of events.", prompts: [ { text: "Original: 'We went to the zoo. We saw the lions. We ate lunch. We went to the gift shop. We went home.' Rewrite with time words:", type: "lines" as const, lines: 6 } ] },
      // 58
      { type: "open-response" as const, title: "Edit Your Writing (Set A)", instruction: "Read this paragraph. Find 5 things to improve (boring words, missing details, repeated starters). Rewrite it better.", prompts: [ { text: "Original: 'The cat went to the shops. The cat got some food. The cat went home. The cat ate the food. It was nice.' Improved version:", type: "lines" as const, lines: 8 } ] },
      // 59
      { type: "circle-correct" as const, title: "Which Word Is More Interesting?", instruction: "Circle the more interesting word to use in a story.", questions: [ { prompt: "Instead of 'big':", options: ["massive", "large", "enormous"] }, { prompt: "Instead of 'said':", options: ["whispered", "told", "exclaimed"] }, { prompt: "Instead of 'walked':", options: ["stumbled", "marched", "trudged"] }, { prompt: "Instead of 'nice':", options: ["lovely", "delightful", "wonderful"] } ] },
      // 60 — SPARK
      { type: "home-activity" as const, title: "Writing Adventures", instruction: "Take your writing skills into the real world!", parentTip: "Spark: What if YOU could be a character in any story ever written? Which story would you jump into? What would you do differently from the main character? Writers have a superpower — they can create entire worlds with just words on a page. What world would you create if you had unlimited pages to write on?", suggestions: [ "Write a story set in YOUR house but with one magical change (e.g. the furniture comes alive).", "Interview a family member about an interesting memory, then write it as a story.", "Write a story from the point of view of your pet (or an animal you wish you had).", "Create a comic strip version of a story — draw it first, then write the words." ] },
      // 61
      { type: "open-response" as const, title: "Character Profile (Set B)", instruction: "Create a villain or a tricky character.", prompts: [ { text: "Name:", type: "lines" as const, lines: 1 }, { text: "What they look like:", type: "lines" as const, lines: 2 }, { text: "What makes them tricky or villainous:", type: "lines" as const, lines: 2 }, { text: "A secret about them that nobody knows:", type: "lines" as const, lines: 2 } ] },
      // 62
      { type: "open-response" as const, title: "Write a Story: Hero vs Villain", instruction: "Write a story where a hero faces the villain you created. Include a problem, a confrontation and a solution.", prompts: [ { text: "My story (at least 8 sentences):", type: "lines" as const, lines: 12 } ] },
      // 63
      { type: "open-response" as const, title: "Continue the Story (Set B)", instruction: "Read the starter and write what happens next.", prompts: [ { text: "Starter: 'Nobody believed me when I said I could talk to animals. But one morning, when the old grey cat on our fence looked at me and said, Very nice weather today, I knew I was not imagining things...'", type: "lines" as const, lines: 1 }, { text: "Continue:", type: "lines" as const, lines: 8 } ] },
      // 64
      { type: "sorting" as const, title: "Beginning, Middle or End Words?", instruction: "Sort each time word or phrase by where it usually appears in a story.", columns: ["Beginning", "Middle", "End"], items: [ { label: "Once upon a time" }, { label: "Then" }, { label: "Finally" }, { label: "One day" }, { label: "After that" }, { label: "In the end" }, { label: "Long ago" }, { label: "Meanwhile" }, { label: "Happily ever after" } ] },
      // 65
      { type: "open-response" as const, title: "Write a Story: The Race", instruction: "Write a story about a race (running, swimming, cycling or anything else). Include feelings, actions and an ending.", prompts: [ { text: "My race story:", type: "lines" as const, lines: 10 } ] },
      // 66
      { type: "open-response" as const, title: "Similes (Set A)", instruction: "A simile compares two things using 'like' or 'as'. Finish each simile.", parentTip: "Similes make writing vivid: 'as fast as a cheetah' or 'eyes like stars'.", prompts: [ { text: "As fast as a ______", type: "lines" as const, lines: 1 }, { text: "As quiet as a ______", type: "lines" as const, lines: 1 }, { text: "Her smile was like ______", type: "lines" as const, lines: 1 }, { text: "The moon looked like ______", type: "lines" as const, lines: 1 } ] },
      // 67
      { type: "open-response" as const, title: "Write a Poem", instruction: "Write a short poem (4 to 6 lines) about an animal. Use at least one simile and one describing word.", parentTip: "Poems do not have to rhyme! Focus on interesting language and images.", prompts: [ { text: "My poem:", type: "lines" as const, lines: 8 } ] },
      // 68
      { type: "open-response" as const, title: "Write a Story: The Unusual Pet", instruction: "Write a story about someone who has a very unusual pet (e.g. a dragon, a unicorn, a talking frog).", prompts: [ { text: "What is the unusual pet?", type: "lines" as const, lines: 1 }, { text: "What problem does it cause?", type: "lines" as const, lines: 1 }, { text: "My story (at least 7 sentences):", type: "lines" as const, lines: 10 } ] },
      // 69
      { type: "open-response" as const, title: "Edit Your Writing (Set B)", instruction: "Read your story from activity 68. Check these things and rewrite any parts that need improving.", prompts: [ { text: "Does every sentence start with a capital? (yes/no)", type: "lines" as const, lines: 1 }, { text: "Did I use at least 5 describing words? (yes/no)", type: "lines" as const, lines: 1 }, { text: "Did I include dialogue? (yes/no)", type: "lines" as const, lines: 1 }, { text: "Write one sentence you improved:", type: "lines" as const, lines: 2 } ] },
      // 70
      { type: "open-response" as const, title: "Write a Different Ending (Set A)", instruction: "Think of a fairy tale you know (e.g. Goldilocks, Three Little Pigs). Write a DIFFERENT ending for it.", parentTip: "Retelling familiar stories with changes builds narrative creativity.", prompts: [ { text: "The fairy tale I chose:", type: "lines" as const, lines: 1 }, { text: "My different ending:", type: "lines" as const, lines: 8 } ] },
      // 71
      { type: "open-response" as const, title: "Setting Description (Set B)", instruction: "Write a detailed setting description (5 sentences) using senses and describing words.", prompts: [ { text: "Describe an enchanted garden:", type: "lines" as const, lines: 6 } ] },
      // 72
      { type: "open-response" as const, title: "Write a Story: The Time Machine", instruction: "Write a story about going back in time. Where did you go? What did you see? What happened?", prompts: [ { text: "Where and when did you travel to?", type: "lines" as const, lines: 1 }, { text: "My story (at least 8 sentences):", type: "lines" as const, lines: 12 } ] },
      // 73
      { type: "circle-correct" as const, title: "Which Ending Is Best?", instruction: "Circle the strongest ending for each story.", questions: [ { prompt: "Story about a lost dog finding its way home:", options: ["The dog went home.", "At last, the scruffy little dog pushed through the garden gate and leapt into his owner's arms.", "The end."] }, { prompt: "Story about two friends solving a mystery:", options: ["They solved it.", "The friends high-fived, grinning — they had cracked the case!", "It was over."] } ] },
      // 74
      { type: "open-response" as const, title: "Write a Story: My Best Day Ever", instruction: "Write about your best day ever (real or imagined). Make it vivid with details, feelings and dialogue.", prompts: [ { text: "My best day ever:", type: "lines" as const, lines: 12 } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Self-Editing Checklist", instruction: "Go back to ANY story you have written on this worksheet. Use this checklist to improve it.", parentTip: "Tip: All real authors edit their work! A first draft is never the final version. Professional writers revise their stories many times. When you finish writing, always read your story aloud and ask: Did I use interesting describing words? Did I start sentences in different ways? Did I show feelings through actions? Is there dialogue? Does the ending feel satisfying?", prompts: [ { text: "Story I am editing:", type: "lines" as const, lines: 1 }, { text: "I added more describing words: (yes/no)", type: "lines" as const, lines: 1 }, { text: "I replaced a boring word with a better one: (yes/no)", type: "lines" as const, lines: 1 }, { text: "I varied my sentence starters: (yes/no)", type: "lines" as const, lines: 1 }, { text: "The best improvement I made:", type: "lines" as const, lines: 3 } ] },
      // 76
      { type: "open-response" as const, title: "Write a Story: The Treasure Map", instruction: "Write a story about finding a treasure map. Plan first, then write.", prompts: [ { text: "Where did you find the map?", type: "lines" as const, lines: 1 }, { text: "Where does the map lead?", type: "lines" as const, lines: 1 }, { text: "What challenges do you face?", type: "lines" as const, lines: 1 }, { text: "My treasure story (at least 8 sentences):", type: "lines" as const, lines: 12 } ] },
      // 77
      { type: "open-response" as const, title: "Write a Letter From a Character", instruction: "Choose a character from one of your stories. Write a letter from that character to another character.", prompts: [ { text: "Dear ______,", type: "lines" as const, lines: 8 }, { text: "From, ______", type: "lines" as const, lines: 1 } ] },
      // 78
      { type: "open-response" as const, title: "Similes (Set B)", instruction: "Write your own similes. Then use one in a sentence.", prompts: [ { text: "As brave as a ______", type: "lines" as const, lines: 1 }, { text: "As soft as ______", type: "lines" as const, lines: 1 }, { text: "The thunder sounded like ______", type: "lines" as const, lines: 1 }, { text: "Write a sentence using one of your similes:", type: "lines" as const, lines: 2 } ] },
      // 79
      { type: "open-response" as const, title: "Write a Story From a Picture", instruction: "Look at something around you right now. Write a story inspired by it.", prompts: [ { text: "What I see:", type: "lines" as const, lines: 1 }, { text: "My story inspired by what I see (at least 6 sentences):", type: "lines" as const, lines: 10 } ] },
      // 80 — SPARK
      { type: "home-activity" as const, title: "Creative Writing Challenge Week", instruction: "Challenge yourself to write something every day this week!", parentTip: "Spark: Writing is a muscle — the more you use it, the stronger it gets! Professional authors write every single day, even when they do not feel inspired. Some days the writing is great, and some days it is not — but every day of practice makes you a better writer. What if you kept a writing journal and wrote just ONE paragraph every day? In a year, you would have 365 paragraphs!", suggestions: [ "Monday: Write a story about a dream you had.", "Tuesday: Write a poem about your favourite food.", "Wednesday: Write a story where YOU are the hero.", "Thursday: Write a description of someone in your family — so detailed that a stranger could recognise them.", "Friday: Write a story with a surprise twist ending." ] },
      // ─── EXTENDING (81–100): Multiple genres, revision, publishing ───
      // 81
      { type: "open-response" as const, title: "Write a Recount", instruction: "A recount tells about something that really happened. Write a recount of something you did recently, in order.", parentTip: "Recounts use past tense and time words: first, then, next, after that, finally.", prompts: [ { text: "Title: The Day I...", type: "lines" as const, lines: 1 }, { text: "My recount (at least 6 sentences):", type: "lines" as const, lines: 10 } ] },
      // 82
      { type: "sorting" as const, title: "Story or Recount?", instruction: "Sort each piece of writing: is it a story (fiction) or a recount (true events)?", columns: ["Story (fiction)", "Recount (true events)"], items: [ { label: "A dragon flew over the castle and breathed fire." }, { label: "On Saturday, we went to the beach and swam." }, { label: "A magic door appeared in my bedroom wall." }, { label: "Yesterday, I had pizza for dinner with my family." }, { label: "The robot came to life and started dancing." }, { label: "Last week, we visited Grandma in Perth." } ] },
      // 83
      { type: "open-response" as const, title: "Write a Narrative Poem", instruction: "Write a poem that tells a story (a narrative poem). It can rhyme if you want, but it does not have to.", prompts: [ { text: "My narrative poem:", type: "lines" as const, lines: 10 } ] },
      // 84
      { type: "open-response" as const, title: "Write a Story: The Wish", instruction: "Write a story where a character gets ONE wish. What do they wish for? Does it turn out the way they expected?", prompts: [ { text: "Character:", type: "lines" as const, lines: 1 }, { text: "The wish:", type: "lines" as const, lines: 1 }, { text: "My story (at least 8 sentences):", type: "lines" as const, lines: 12 } ] },
      // 85
      { type: "open-response" as const, title: "Write Two Points of View", instruction: "Write about the same event from TWO different characters' points of view.", parentTip: "This builds understanding that different people see the same event differently.", prompts: [ { text: "The event: A ball breaks a window.", type: "lines" as const, lines: 1 }, { text: "Point of view 1 (the child who kicked the ball):", type: "lines" as const, lines: 4 }, { text: "Point of view 2 (the person whose window broke):", type: "lines" as const, lines: 4 } ] },
      // 86
      { type: "open-response" as const, title: "Write a Story: Under the Sea", instruction: "Write a story set under the sea. Include interesting sea creatures, a problem and sensory details.", prompts: [ { text: "My underwater story:", type: "lines" as const, lines: 12 } ] },
      // 87
      { type: "open-response" as const, title: "Revise and Improve (Set A)", instruction: "Take the story you wrote in activity 86. Make it even better by adding or changing at least 3 things.", prompts: [ { text: "Change 1 — I added/changed:", type: "lines" as const, lines: 2 }, { text: "Change 2 — I added/changed:", type: "lines" as const, lines: 2 }, { text: "Change 3 — I added/changed:", type: "lines" as const, lines: 2 } ] },
      // 88
      { type: "open-response" as const, title: "Write a Story: The Day I Became Invisible", instruction: "Write a story about waking up invisible one morning. What happened? Was it fun or scary?", prompts: [ { text: "My story:", type: "lines" as const, lines: 12 } ] },
      // 89
      { type: "open-response" as const, title: "Write a Story for Someone Else", instruction: "Write a short story as a gift for someone you love. Think about what THEY would enjoy reading.", parentTip: "Writing for a real audience motivates real quality.", prompts: [ { text: "Who am I writing for?", type: "lines" as const, lines: 1 }, { text: "What do they like? (this will help me choose a topic)", type: "lines" as const, lines: 1 }, { text: "My story for them:", type: "lines" as const, lines: 12 } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Author Reflection", instruction: "Think about yourself as a writer. Answer these questions honestly.", parentTip: "Tip: Every writer has strengths and areas to grow. Even famous authors say they are always learning! The most important thing is to KEEP WRITING. The more you write, the better you get. Be proud of how far you have come — look back at your first story on this worksheet and compare it to your latest one. You will see amazing growth!", prompts: [ { text: "My favourite story I have written on this worksheet:", type: "lines" as const, lines: 1 }, { text: "What am I good at as a writer?", type: "lines" as const, lines: 2 }, { text: "What do I want to improve?", type: "lines" as const, lines: 2 }, { text: "My favourite describing word I have used:", type: "lines" as const, lines: 1 } ] },
      // 91
      { type: "open-response" as const, title: "Write a Story: The New Planet", instruction: "Write a story about discovering a new planet. What is it called? What lives there? What happens?", prompts: [ { text: "Planet name:", type: "lines" as const, lines: 1 }, { text: "My story:", type: "lines" as const, lines: 12 } ] },
      // 92
      { type: "open-response" as const, title: "Write a Sequel", instruction: "Choose one of your favourite stories from this worksheet. Write a sequel — what happens AFTER the original story ends?", prompts: [ { text: "Original story:", type: "lines" as const, lines: 1 }, { text: "My sequel:", type: "lines" as const, lines: 12 } ] },
      // 93
      { type: "open-response" as const, title: "Write a Fairy Tale", instruction: "Write your own fairy tale. Include: a hero, a villain, a magical element, a problem and a happy ending.", prompts: [ { text: "My fairy tale:", type: "lines" as const, lines: 14 } ] },
      // 94
      { type: "open-response" as const, title: "Write a Story: The Swap", instruction: "Write a story where two characters swap lives for a day (e.g. a child and a teacher, a cat and a dog). What happens?", prompts: [ { text: "Who swaps?", type: "lines" as const, lines: 1 }, { text: "My story:", type: "lines" as const, lines: 12 } ] },
      // 95
      { type: "open-response" as const, title: "Publish Your Best Story", instruction: "Choose your absolute best story from this entire worksheet. Copy it out neatly as a final published version.", parentTip: "Publishing gives writing a real audience and purpose. Display it, post it or give it to someone.", prompts: [ { text: "Title:", type: "lines" as const, lines: 1 }, { text: "By (your name):", type: "lines" as const, lines: 1 }, { text: "My published story:", type: "lines" as const, lines: 14 } ] },
      // 96
      { type: "open-response" as const, title: "Design a Book Cover", instruction: "Design a front cover for your published story. Include the title, your name as author, and a picture.", prompts: [ { text: "Draw your book cover here:", type: "box" as const }, { text: "Write a blurb (a short description to make people want to read it):", type: "lines" as const, lines: 4 } ] },
      // 97
      { type: "open-response" as const, title: "Write an About the Author Page", instruction: "Pretend you are a famous author. Write your 'About the Author' page for the back of your book.", prompts: [ { text: "About the Author:", type: "lines" as const, lines: 6 } ] },
      // 98
      { type: "open-response" as const, title: "Write a Story: Free Choice", instruction: "Write about ANYTHING you want. This is your story, your rules. Make it your best writing yet.", prompts: [ { text: "My free-choice story:", type: "lines" as const, lines: 14 } ] },
      // 99
      { type: "open-response" as const, title: "Writing Portfolio Reflection", instruction: "Look back at all the stories you have written on this worksheet. Reflect on your growth as a writer.", prompts: [ { text: "The total number of stories I wrote:", type: "lines" as const, lines: 1 }, { text: "My favourite story and why:", type: "lines" as const, lines: 2 }, { text: "The writing skill I improved the most:", type: "lines" as const, lines: 2 }, { text: "A writing goal for next term:", type: "lines" as const, lines: 2 } ] },
      // 100 — SPARK
      { type: "home-activity" as const, title: "Keep Writing Forever!", instruction: "You have completed 100 creative writing activities! Now keep the writing habit going.", parentTip: "Spark: You are now officially an AUTHOR! You have planned stories, created characters, built settings, solved problems, written dialogue, used similes, edited your work and even published a story. These are the same skills that every professional author uses. The only difference between you and a published author is practice and time. So keep writing! Write in a journal, write stories for your friends, write letters, write poems, write scripts for plays. Every word you write makes you a stronger, more creative thinker. What will your next story be about?", suggestions: [ "Start a daily writing journal — even just 3 sentences a day.", "Write and illustrate a picture book for a younger child.", "Start writing a chapter book — write one chapter per week.", "Enter a writing competition at school or your local library.", "Create a class newspaper or family newsletter." ] },
    ],
  },

  // ── WS 6: Speaking and Listening ──────────────────────────
  {
    slug: "speaking-and-listening",
    title: "Speaking and Listening",
    strand: "Literacy",
    description:
      "Develop confident oral communication skills — listening carefully, taking turns and speaking clearly to an audience.",
    learningGuide: {
      concept:
        "Oral language is the foundation for all literacy. Year 1 students develop skills in taking turns in conversation, listening with purpose, sequencing ideas when speaking, and using appropriate volume and expression. These skills transfer directly to reading comprehension and writing quality.",
      activation:
        "Play the telephone/whisper game: whisper a sentence to your child and ask them to whisper it back. Did the message stay the same? This shows the importance of careful listening.",
      check:
        "Can your child speak in complete sentences? Do they make eye contact with the listener? Can they listen to a short explanation and then repeat the key points back?",
    },
    lesson: {
      title: "Brilliant Talkers and Listeners",
      objective:
        "Listen attentively, take turns in conversation and speak clearly in sentences to a real or imagined audience.",
      materials: [
        "No special materials needed",
        "A mirror (optional — for practising expression and voice)",
        "A stuffed toy or doll as a pretend audience (optional)",
      ],
      intro: {
        title: "What Makes a Good Listener?",
        script:
          "Before we learn about talking, we need to learn about listening — because you can not have a conversation without BOTH! Let us think: what does a good listener do? Eyes — they look at the speaker. Ears — they really hear the words. Brain — they think about what is being said. Body — it is still and turned toward the speaker. Can we show me what a super listener looks like right now?",
        action:
          "Your child demonstrates super listening posture. Give genuine praise. Ask them to tell you what good listening looks like in their own words.",
      },
      mainActivity: {
        title: "Show and Tell",
        script:
          "You are going to do a mini show and tell! Choose one thing that is important to you — a toy, a book, a pet, or even something you can just describe. You are going to tell me three things about it: what it is, why it matters to you, and one interesting thing about it. Speak in sentences, face me, and use your best voice. I will be your audience — I am all ears!",
        action:
          "Your child gives a 1 to 2 minute oral presentation on their chosen item or topic. You listen without interrupting, then ask 2 genuine questions.",
      },
      wrapUp: {
        title: "Feedback Time",
        script:
          "That was wonderful! Now let me give you some feedback — two things you did really well, and one thing to try even better next time. And then I want YOU to do the same for me — I will do a short talk too, and you give me feedback!",
        action:
          "Model giving and receiving feedback respectfully. Take your turn doing a short talk about something you love, so your child practises being an audience.",
      },
      parentTip:
        "Daily conversations are the most powerful speaking and listening practice. Ask open-ended questions: 'Tell me more about that... What happened next?... How did that make you feel?' These moves show your child their thoughts are valued and build oral language skills naturally.",
      extension:
        "Record a 1-minute interview together — you interview your child about their favourite book, food or day. Play it back and listen together. Children love hearing themselves speak, and it builds metacognitive awareness about their communication. Covers AC V9 Year 1 — interacting with others to recount or report on events.",
      resources: [
        {
          title: "ABC Education — Speaking and Listening",
          url: "https://www.abc.net.au/education/learn-english/speaking/",
          description:
            "Activities and video examples for developing oral language skills at Year 1.",
        },
        {
          title: "Khan Academy Kids — Communication Skills",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive activities building speaking and listening skills for early learners.",
        },
        {
          title: "Storyline Online",
          url: "https://storylineonline.net/",
          description:
            "Professional read-alouds that model excellent speaking expression, pacing and tone.",
        },
      ],
    },
    activities: [
      {
        type: "open-response" as const,
        title: "Plan Your Show and Tell",
        instruction:
          "Plan what you will say in your Show and Tell. Then present it to your family!",
        parentTip:
          "Encourage your child to refer to their notes but speak naturally — not read word for word.",
        prompts: [
          { text: "What I am showing or talking about: ___________________________", type: "lines" as const, lines: 1 },
          { text: "Three things I want to say about it:", type: "lines" as const, lines: 4 },
          { text: "After my talk, one question I could ask my audience:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Good Listener Checklist",
        instruction:
          "After listening to someone speak, fill in this checklist.",
        parentTip:
          "Use this after your child listens to YOU do a short talk — this makes the listening skill concrete and measurable.",
        prompts: [
          { text: "The speaker was talking about: ___________________________", type: "lines" as const, lines: 2 },
          { text: "One interesting thing I heard: ___________________________", type: "lines" as const, lines: 2 },
          { text: "One question I want to ask: ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Talk and Listen Every Day",
        instruction: "Build speaking and listening skills through daily interactions.",
        parentTip:
          "Turn off screens during meals and use that time for structured conversation — ask, listen, respond, expand.",
        suggestions: [
          "At dinner, everyone shares: one thing that happened today, one feeling they had, one question they want to ask.",
          "Play 20 Questions — one person thinks of something, others ask yes/no questions to guess.",
          "Take turns telling a story — one sentence each. See where it goes!",
          "Listen to an audiobook or podcast episode together, then discuss what you heard.",
        ],
      },
      {
        type: "sorting" as const,
        title: "Good Speaker or Needs Improving?",
        instruction:
          "Read each behaviour. Sort it into the column that describes a good speaker or a behaviour to improve.",
        parentTip:
          "Approach this positively — frame the 'needs improving' column as things we all work on, not things to feel bad about.",
        columns: ["Good speaker behaviour", "Needs improving"],
        items: [
          { label: "Looks at the audience while talking" },
          { label: "Mumbles and looks at the floor" },
          { label: "Speaks loudly enough for everyone to hear" },
          { label: "Talks over other people" },
          { label: "Waits for their turn to speak" },
          { label: "Uses complete sentences" },
          { label: "Talks very fast with no pauses" },
          { label: "Listens while others are speaking" },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Good Listening or Not?",
        instruction:
          "Read each scenario. Circle L if the person is being a good listener, or N if they are not listening well.",
        parentTip:
          "Discuss each scenario together after circling. Ask: 'What could that person do differently to be a better listener?'",
        questions: [
          { prompt: "Mia looks at her book while her friend is talking.", options: ["L", "N"] },
          { prompt: "Jack nods and looks at the speaker.", options: ["L", "N"] },
          { prompt: "Tom keeps interrupting before his friend finishes.", options: ["L", "N"] },
          { prompt: "Zara asks a question about what was just said.", options: ["L", "N"] },
          { prompt: "Leo walks away while his parent is giving instructions.", options: ["L", "N"] },
          { prompt: "Ava waits quietly and then repeats back what she heard.", options: ["L", "N"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Tell Me About Your Day",
        instruction:
          "Practise speaking in complete sentences by answering these questions about your day. Say your answer aloud first, then write it.",
        parentTip:
          "Model a complete sentence answer yourself before asking your child. This demonstrates the expectation: 'Today I felt excited because we went to the park' rather than just 'excited'.",
        prompts: [
          { text: "Something I did today was:", type: "lines" as const, lines: 2 },
          { text: "I felt _______________ today because:", type: "lines" as const, lines: 2 },
          { text: "Something I want to tell someone about today:", type: "lines" as const, lines: 2 },
        ],
      },
    ],
  },

  // ── WS 7: Two-Syllable Words ──────────────────────────────
  {
    slug: "two-syllable-words",
    title: "Reading Two-Syllable Words",
    strand: "Language",
    description:
      "Read and spell one- and two-syllable words with common letter patterns — extending phonics skills to longer words.",
    learningGuide: {
      concept:
        "Once children can decode CVC words, they need strategies for longer words. The key skill is syllable chunking: break the word into syllables, read each part, then blend them together. This unlocks the entire vocabulary of two-syllable words.",
      activation:
        "Show the word 'rabbit'. Ask: 'This looks long! Let us chop it into bites — like eating a big sandwich one bite at a time. Rab-bit. Two bites. Now let us read each bite and blend them: rab... bit... rabbit!' This makes the strategy concrete.",
      check:
        "Give your child 5 unfamiliar two-syllable words (e.g. basket, biscuit, garden, pencil, napkin). Can they use the chunk-and-blend strategy to decode each one independently?",
    },
    lesson: {
      title: "Chunking Long Words",
      objective:
        "Apply the chunk-and-blend strategy to read one- and two-syllable words with common letter patterns.",
      materials: [
        "Pencil",
        "Lined paper",
        "A simple reader with two-syllable words, or the word list provided",
        "Scissors (optional — to physically cut words into syllables)",
      ],
      intro: {
        title: "Chop the Word!",
        script:
          "Whenever you see a word that looks LONG and tricky, the secret is to chop it into smaller pieces. Each piece is called a syllable. You already know how to read small words — so if you can chop the big word into small ones, you can read anything! Let us practise: rabbit — chop! rab-bit. Basket — chop! bas-ket. Pencil — chop! pen-cil. Now you try!",
        action:
          "Write 5 two-syllable words on paper. Use a vertical line or scissors to split them into syllables. Read each half, then blend.",
      },
      mainActivity: {
        title: "Chunk and Read",
        script:
          "Here are some two-syllable words. For each one, draw a line to divide it into two parts, then read each part, then say the whole word. Let us go through the first one together: rabbit. Where would you draw the line? Between the two bs — rab | bit. Now read it: rab... bit... rabbit! Perfect!",
        action:
          "Work through the word list together. Mark the syllable division with a pencil slash. Your child reads each chunk then blends.",
      },
      wrapUp: {
        title: "Silly Long Word Challenge",
        script:
          "Now for the challenge! I am going to give you some longer words and I want to see if you can use the chunking strategy all by yourself. Ready? Here comes the first one: window... umbrella... finger... sandwich. Chop and read!",
        action:
          "Dictate 4 to 5 two-syllable words from everyday life. Your child chunks and reads each one independently.",
      },
      parentTip:
        "The most powerful practice is in real reading: when your child encounters a long word in a book, do not tell them immediately — say 'chop it' and give them 5 to 10 seconds to try the strategy. Only help if they are genuinely stuck.",
      extension:
        "Make a two-syllable word book: fold 5 pages together and title it 'Long Words I Can Read'. Add one new two-syllable word per day as you encounter them in real reading. This covers AC V9 Year 1 — reading one- and two-syllable words with common letter patterns.",
      resources: [
        {
          title: "Starfall — Reading Longer Words",
          url: "https://www.starfall.com/h/learn-to-read/",
          description:
            "Phonics activities that build toward reading multisyllabic words.",
        },
        {
          title: "Reading Eggs — Year 1 Reading",
          url: "https://readingeggs.com.au/",
          description:
            "Structured lessons progressing from CVC words to two-syllable words for Year 1.",
        },
        {
          title: "ABC Education — Word Study",
          url: "https://www.abc.net.au/education/learn-english/phonics/",
          description:
            "Word study activities covering letter patterns and syllable structure for Year 1.",
        },
      ],
    },
    activities: [
      {
        type: "open-response" as const,
        title: "Chop and Read",
        instruction:
          "Draw a line to split each word into two syllables. Then write each syllable separately and read the whole word.",
        parentTip:
          "If your child is unsure where to split, ask them to say the word slowly and listen for the two beats.",
        prompts: [
          { text: "rabbit -> rab | bit", type: "lines" as const, lines: 1 },
          { text: "basket -> ___ | ___", type: "lines" as const, lines: 1 },
          { text: "pencil -> ___ | ___", type: "lines" as const, lines: 1 },
          { text: "garden -> ___ | ___", type: "lines" as const, lines: 1 },
          { text: "finger -> ___ | ___", type: "lines" as const, lines: 1 },
          { text: "winter -> ___ | ___", type: "lines" as const, lines: 1 },
        ],
      },
      {
        type: "sorting" as const,
        title: "One or Two Syllables?",
        instruction:
          "Sort each word into the correct column: 1 syllable or 2 syllables.",
        parentTip:
          "Clap it out if unsure! One clap = one syllable, two claps = two syllables.",
        columns: ["1 syllable", "2 syllables"],
        items: [
          { label: "cat" },
          { label: "rabbit" },
          { label: "jump" },
          { label: "garden" },
          { label: "sun" },
          { label: "pencil" },
          { label: "dog" },
          { label: "basket" },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Two-Syllable Word Spotting",
        instruction: "Build the habit of chunking long words in real reading.",
        parentTip:
          "Make chunking a habit — every time you encounter a long word in a book or sign, say 'Chop it!' together.",
        suggestions: [
          "Find 5 two-syllable words in a picture book. Write them down and draw the split line.",
          "Look at food labels and find two-syllable ingredient or food names.",
          "Say a two-syllable word and take turns clapping the syllables before reading it.",
          "Play Word Builder: give your child a syllable (e.g. 'bas-') and they add a second syllable to make a word.",
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Syllable Halves",
        instruction:
          "Draw a line to join the two syllables that make a real word.",
        parentTip:
          "Say each half aloud before combining. If the blended result sounds like a real word your child knows, it is probably correct.",
        left: ["rab-", "gar-", "win-", "bas-", "pen-"],
        right: ["-cil", "-ket", "-bit", "-den", "-ter"],
      },
      {
        type: "circle-correct" as const,
        title: "How Many Syllables?",
        instruction:
          "Clap each word and circle the correct number of syllables.",
        parentTip:
          "Place a hand under the chin — each time the jaw drops for a vowel sound, that is one syllable. This physical cue is very reliable for young learners.",
        questions: [
          { prompt: "basket", options: ["1", "2", "3"] },
          { prompt: "dog", options: ["1", "2", "3"] },
          { prompt: "umbrella", options: ["1", "2", "3"] },
          { prompt: "garden", options: ["1", "2", "3"] },
          { prompt: "sun", options: ["1", "2", "3"] },
          { prompt: "finger", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Your Own Two-Syllable Words",
        instruction:
          "Think of two-syllable words for each category. Write the word and draw the syllable split line.",
        parentTip:
          "If your child is stuck, suggest they think of an animal, a food, or something in the house. Everyday vocabulary is full of two-syllable words.",
        prompts: [
          { text: "A two-syllable animal: ________ | ________", type: "lines" as const, lines: 1 },
          { text: "A two-syllable food: ________ | ________", type: "lines" as const, lines: 1 },
          { text: "A two-syllable thing in a classroom: ________ | ________", type: "lines" as const, lines: 1 },
          { text: "Write a sentence using one of your two-syllable words:", type: "lines" as const, lines: 2 },
        ],
      },
    ],
  },

  // ── WS 8: Making Predictions ──────────────────────────────
  {
    slug: "making-predictions",
    title: "What Happens Next?",
    strand: "Literacy",
    description:
      "Use clues from a text to make sensible predictions — building inferential thinking and active reading habits.",
    learningGuide: {
      concept:
        "Prediction is a metacognitive reading strategy. Good readers actively anticipate what will happen next using clues from the text and their own knowledge. This keeps readers engaged and trains them to read for meaning, not just words.",
      activation:
        "Hold up a picture book with the title covered. Show only the cover illustration and ask: 'What do you think this book is about? What clues did you use to decide?' Reveal the title and see if they were right. This makes the skill of using evidence visible.",
      check:
        "While reading, pause at key moments and ask: 'What do you think will happen next? Why do you think that?' A confident predictor gives reasons based on the text, not random guesses.",
    },
    lesson: {
      title: "Reading with Your Brain On",
      objective:
        "Make and justify simple predictions about texts using evidence from pictures and words.",
      materials: [
        "Any picture book your child has not read before",
        "Pencil",
        "Sticky notes (optional — for writing predictions during reading)",
      ],
      intro: {
        title: "Being a Thinking Reader",
        script:
          "Great readers do not just read the words — they read with their BRAIN fully switched on! They are always thinking: What might happen next? Why is the character doing that? What will this lead to? This is called making a prediction — and it is like being a detective who figures things out BEFORE they happen. Today we are going to practise making predictions and then check them as we read!",
        action:
          "Look at the cover of the chosen book together. Make two predictions before opening it. Write them on sticky notes to check later.",
      },
      mainActivity: {
        title: "Stop, Predict, Check",
        script:
          "We are going to read this book together, but we will stop three times. Each time we stop, you make a prediction about what will happen next. Then we keep reading to find out if you were right. Predictions do not have to be correct — they just have to make sense! Ready? Let us go.",
        action:
          "Read the book, stopping at 3 key moments. At each pause, your child makes a written or oral prediction. After reading, review all predictions together.",
      },
      wrapUp: {
        title: "Were You Right?",
        script:
          "Let us look back at your predictions. Were any of them right? Were any of them close? Were any completely different? It does not matter if you were right or not — what matters is that you used CLUES from the text to make a sensible guess. That is real reading!",
        action:
          "Review each prediction. Mark with a tick (correct), a cross (incorrect) or a tilde (close). Discuss why the text went in the direction it did.",
      },
      parentTip:
        "Reward the reasoning, not the accuracy. Say: 'I love why you thought that — that was a really clever use of the clue on page 3.' A prediction that turns out wrong but was well-reasoned is more valuable than a lucky guess.",
      extension:
        "After finishing a picture book, ask your child: 'If there were a second book about this character, what do you think would happen? Write or draw your prediction.' This covers AC V9 Year 1 Literacy — reading and comprehending texts, monitoring meaning.",
      resources: [
        {
          title: "Storyline Online",
          url: "https://storylineonline.net/",
          description:
            "High-quality video read-alouds where you can pause and predict together.",
        },
        {
          title: "ABC Education — Reading Comprehension",
          url: "https://www.abc.net.au/education/learn-english/stories/",
          description:
            "Texts and activities that build inferential reading skills for Year 1.",
        },
        {
          title: "Khan Academy Kids — Reading",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive reading activities developing comprehension and prediction skills.",
        },
      ],
    },
    activities: [
      {
        type: "open-response" as const,
        title: "My Predictions",
        instruction:
          "Make a prediction before reading, then check it after reading. Write your thoughts below.",
        parentTip:
          "Model making a prediction yourself first: 'I think... because the picture shows...' This gives your child a sentence frame to use.",
        prompts: [
          { text: "Book or story title: ___________________________", type: "lines" as const, lines: 1 },
          { text: "BEFORE reading — I think this story will be about:", type: "lines" as const, lines: 2 },
          { text: "My clue: (what made me think that?)", type: "lines" as const, lines: 2 },
          { text: "AFTER reading — Was my prediction right? What actually happened?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Stop and Predict",
        instruction:
          "While reading, stop at an exciting moment and write what you think will happen next.",
        parentTip:
          "Choose a page where there is a problem, a surprise or a cliff-hanger moment. That is the best place to pause.",
        prompts: [
          { text: "I stopped reading on page: ______", type: "lines" as const, lines: 1 },
          { text: "What has happened so far:", type: "lines" as const, lines: 2 },
          { text: "My prediction — what will happen next:", type: "lines" as const, lines: 3 },
          { text: "My clue from the text:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Predict While You Read",
        instruction: "Make predicting a habit every time you read together.",
        parentTip:
          "The habit of predicting makes every reading session more engaging and builds critical thinking.",
        suggestions: [
          "Before opening any new book, look at the cover for 30 seconds and make 2 predictions.",
          "Pause before turning each page and ask: 'What do you think we will see on the next page?'",
          "Watch the first 5 minutes of a new show together, then predict what will happen before watching more.",
          "After a prediction turns out wrong, ask: 'What clue in the text tells us what really happened?'",
        ],
      },
      {
        type: "sorting" as const,
        title: "Good Prediction or Wild Guess?",
        instruction:
          "Read each prediction about the story of Rex the dog. Sort each one into the correct column — is it a good prediction (based on clues) or a wild guess (no evidence)?",
        parentTip:
          "A good prediction does not have to be correct — it just has to be based on something in the text or picture. This is the key concept to reinforce.",
        columns: ["Good prediction (has a clue)", "Wild guess (no evidence)"],
        items: [
          { label: "Rex will run away because the story says he loves to run." },
          { label: "Rex will turn into a cat." },
          { label: "Sam will laugh because Sam seems to find Rex funny." },
          { label: "A rocket ship will land in the park." },
          { label: "Rex will find another stick because he loves sticks." },
          { label: "Sam will go to space next." },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Prediction Uses a Clue?",
        instruction:
          "Read the story opening, then circle the prediction that is best supported by clues in the text.",
        parentTip:
          "Read each mini-story snippet aloud together before attempting the questions. Discuss what clues are visible in the text.",
        questions: [
          {
            prompt: "Lily looked at the dark clouds and grabbed her umbrella. She stepped outside. What will happen next?",
            options: ["It will rain.", "She will fly away.", "A dragon appears."],
          },
          {
            prompt: "Tom opened his lunchbox and frowned. It was empty! What will Tom probably do?",
            options: ["Tom will go to sleep.", "Tom will look for food.", "Tom will build a rocket."],
          },
          {
            prompt: "The puppy heard a strange noise behind the bush. Its ears pricked up. What will the puppy do?",
            options: ["The puppy will swim.", "The puppy will investigate the bush.", "The puppy will read a book."],
          },
          {
            prompt: "Mia had been practising her dance for weeks. The big show was tomorrow. How does Mia probably feel?",
            options: ["Bored", "Nervous and excited", "Sleepy"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Draw and Write Your Prediction",
        instruction:
          "Choose a book you are reading. Stop at an exciting moment. Draw what you think will happen next, then write one sentence explaining your prediction.",
        parentTip:
          "Ask your child to identify the specific clue that led to their prediction. Naming the clue is the skill — the picture makes the thinking visible.",
        prompts: [
          { text: "Draw what you think will happen next:", type: "box" as const },
          { text: "My prediction in one sentence:", type: "lines" as const, lines: 2 },
          { text: "The clue I used:", type: "lines" as const, lines: 2 },
        ],
      },
    ],
  },
];

export function getYear1EnglishWorksheet(
  slug: string
): WorksheetItem | undefined {
  return year1EnglishWorksheets.find((ws) => ws.slug === slug);
}
