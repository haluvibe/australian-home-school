import type { WorksheetItem } from "./worksheet-types";

export const year5EnglishWorksheets: WorksheetItem[] = [
  {
    slug: "figurative-language-etymology",
    title: "Figurative Language & Word Origins",
    strand: "Language",
    description:
      "Explore figurative language and discover how knowing a word's origin helps you understand and remember its meaning.",
    learningGuide: {
      concept:
        "Figurative language uses words in a non-literal way — including idioms (the ball is in your court), hyperbole (I've told you a million times) and personification (the wind whispered). Etymology is the study of word origins. Many English words come from Latin, Greek and French roots, and knowing a root helps you unlock the meaning of dozens of related words.",
      activation:
        "Ask your child: What do you think the word 'telephone' means if 'tele' means far and 'phone' means voice? Then brainstorm other tele- words together — telescope, television, teleport.",
      check:
        "After the worksheet, ask your child to find one idiom and one piece of hyperbole in a book or TV show they enjoy this week.",
    },
    lesson: {
      title: "Word Detectives: Origins and Figures",
      objective:
        "Identify and interpret figurative language including idioms, hyperbole and personification, and use etymology to unlock the meaning of unfamiliar words.",
      materials: [
        "This worksheet",
        "A pencil",
        "A dictionary with word origins (or an online etymology site such as etymonline.com)",
      ],
      intro: {
        title: "Where Did That Word Come From?",
        script:
          "Every word has a history — a story about where it came from and how it changed over time. The word disaster, for example, comes from the Italian disastro, meaning bad star. People used to think that when a star was in the wrong position, bad things would happen. Today we call any terrible event a disaster. Knowing word origins is like having a superpower — you can often guess the meaning of a new word just by recognising its root. Let us look at some Latin and Greek roots that appear in hundreds of English words.",
        action:
          "Write the following root words on paper with their meanings: port (carry), aud (hear), vis/vid (see), dict (say), graph (write). Ask your child to think of two words for each root.",
      },
      mainActivity: {
        title: "Crack the Code",
        script:
          "Now let us look at figurative language — words that mean something different from their literal meaning. When someone says it is raining cats and dogs, no actual animals are falling from the sky. That is an idiom — a phrase whose meaning you have to learn as a whole. Hyperbole is deliberate exaggeration: I am so hungry I could eat a horse. Personification gives human qualities to non-human things: the sun smiled down on us. Each type of figurative language creates a different effect in writing.",
        action:
          "Read examples of each type from a picture book or the worksheet. Ask your child: What image does this create? Why might the author have chosen to say it this way?",
      },
      wrapUp: {
        title: "Build a Word Family",
        script:
          "Choose one root from the intro activity. How many words can you build from it? Write them in a spider diagram. Then write a sentence using one of the figurative language techniques we practised today.",
        action:
          "Help your child create a root word spider diagram in their notebook. Keep it as a reference for future writing.",
      },
      parentTip:
        "When your child encounters an unfamiliar word in their reading, pause before reaching for the dictionary and ask: Can you see a root, prefix or suffix you recognise? This builds independent vocabulary strategies.",
      extension:
        "Research five words that came into English from another language — French, Italian, Japanese or any language your family has a connection to. Present your findings as a word origin mini-poster.",
      resources: [
        {
          title: "Online Etymology Dictionary",
          url: "https://www.etymonline.com/",
          description:
            "Free resource for exploring word histories and origins — bookmarkable for ongoing vocabulary research.",
        },
        {
          title: "ReadWriteThink — Figurative Language Poems",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/recognizing-using-figurative-language",
          description:
            "Lesson exploring idioms, similes and personification through poetry.",
        },
        {
          title: "Khan Academy — Figurative Language",
          url: "https://www.khanacademy.org/ela/cc-5th-grade-reading-vocab/xe2c54a99ede11c03:vocabulary/xe2c54a99ede11c03:figurative-language/e/figurative-language",
          description:
            "Interactive exercises on figurative language for Year 5 level.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "matching" as const,
        title: "Match the Figurative Language Type",
        instruction: "Draw a line to match each example with the correct type of figurative language.",
        left: [
          "I have told you a million times.",
          "The trees danced in the breeze.",
          "It is raining cats and dogs.",
          "Her voice was as smooth as honey.",
          "Break a leg!",
          "The ocean roared its fury.",
        ],
        right: ["Hyperbole", "Personification", "Idiom", "Simile", "Idiom", "Personification"],
      },
      // 2
      {
        type: "circle-correct" as const,
        title: "Name That Figurative Language (Set A)",
        instruction: "Read each sentence. Circle the correct type of figurative language.",
        parentTip: "Ask your child to explain the literal meaning and the intended meaning for each example before circling.",
        questions: [
          { prompt: "The thunder clapped its hands with delight.", options: ["Simile", "Personification", "Hyperbole", "Idiom"] },
          { prompt: "I am so tired I could sleep for a thousand years.", options: ["Metaphor", "Idiom", "Hyperbole", "Simile"] },
          { prompt: "Her laughter was music to his ears.", options: ["Personification", "Idiom", "Simile", "Hyperbole"] },
          { prompt: "The new student was a fish out of water.", options: ["Hyperbole", "Personification", "Idiom", "Simile"] },
          { prompt: "His voice was as rough as gravel.", options: ["Metaphor", "Simile", "Idiom", "Personification"] },
          { prompt: "The stars winked at us through the clouds.", options: ["Simile", "Hyperbole", "Personification", "Idiom"] },
        ],
      },
      // 3
      {
        type: "true-false" as const,
        title: "True or False: Figurative Language Basics",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "An idiom means exactly what the words say.", answer: false },
          { text: "Personification gives human qualities to non-human things.", answer: true },
          { text: "Hyperbole is a deliberate exaggeration for effect.", answer: true },
          { text: "A simile compares two things using the word 'is' directly.", answer: false },
          { text: "The phrase 'bite the bullet' is an example of an idiom.", answer: true },
          { text: "Metaphor and simile both compare things, but simile uses 'like' or 'as'.", answer: true },
        ],
      },
      // 4
      {
        type: "sorting" as const,
        title: "Sort by Figurative Language Type (Set A)",
        instruction: "Sort each phrase into the correct column.",
        columns: ["Idiom", "Hyperbole", "Personification", "Simile"],
        items: [
          { label: "The wind whispered secrets." },
          { label: "I have a mountain of homework." },
          { label: "She is as brave as a lion." },
          { label: "It cost me an arm and a leg." },
          { label: "The sun smiled down on us." },
          { label: "I am so hungry I could eat a horse." },
          { label: "His smile was like sunshine." },
          { label: "Hit the nail on the head." },
        ],
      },
      // 5
      {
        type: "fill-in-blank" as const,
        title: "Complete the Figurative Language",
        instruction: "Fill in the blank to complete each example of figurative language. Use the word bank: danced / mouse / million / walk / spluttered.",
        parentTip: "Encourage your child to read the whole sentence aloud before choosing the word, and think about what image or effect the author is creating.",
        sentences: [
          { text: "The rain _______ on the rooftop all night long. (personification)", blanks: ["danced"] },
          { text: "She was as quiet as a _______. (simile)", blanks: ["mouse"] },
          { text: "I have told you a _______ times! (hyperbole)", blanks: ["million"] },
          { text: "Learning a new skill takes time — you can't run before you _______. (idiom)", blanks: ["walk"] },
          { text: "The old car _______ to life with a loud cough. (personification)", blanks: ["spluttered"] },
        ],
      },
      // 6
      {
        type: "multiple-choice" as const,
        title: "What Does This Idiom Mean?",
        instruction: "Choose the correct meaning of each idiom.",
        questions: [
          { prompt: "She decided to bite the bullet and get the injection.", options: ["To chew something hard", "To endure something painful bravely", "To be very hungry", "To run away quickly"], answer: "To endure something painful bravely" },
          { prompt: "The project is back to square one.", options: ["Starting over from the beginning", "Moving to a new location", "Finishing on time", "Working in a square room"], answer: "Starting over from the beginning" },
          { prompt: "He let the cat out of the bag.", options: ["He found a lost cat", "He revealed a secret", "He opened a bag of food", "He was very untidy"], answer: "He revealed a secret" },
          { prompt: "Don't judge a book by its cover.", options: ["Libraries are important", "Do not read books", "Do not judge things by their appearance", "Books have attractive covers"], answer: "Do not judge things by their appearance" },
        ],
      },
      // 7
      {
        type: "open-response" as const,
        title: "Crack the Root Word Code (Set A)",
        instruction: "Use the root word meaning to work out the meaning of each English word. Write one more word that uses the same root.",
        prompts: [
          { text: "Root: PORT (to carry)\nWord: transport\nMeaning: _______________  Another port word: _______________", type: "lines", lines: 2 },
          { text: "Root: AUD (to hear)\nWord: auditorium\nMeaning: _______________  Another aud word: _______________", type: "lines", lines: 2 },
          { text: "Root: GRAPH (to write)\nWord: biography\nMeaning: _______________  Another graph word: _______________", type: "lines", lines: 2 },
          { text: "Root: DICT (to say or tell)\nWord: predict\nMeaning: _______________  Another dict word: _______________", type: "lines", lines: 2 },
        ],
      },
      // 8
      {
        type: "matching" as const,
        title: "Match the Root to Its Meaning",
        instruction: "Draw a line from each Latin or Greek root to its meaning.",
        parentTip: "Knowing just 20 common roots unlocks the meaning of hundreds of English words. Keep a root word notebook as an ongoing vocabulary tool.",
        left: ["port", "aud", "graph", "dict", "vis", "scrib / script"],
        right: ["to write", "to carry", "to see", "to hear", "to write / written", "to say or tell"],
      },
      // 9
      {
        type: "sorting" as const,
        title: "Sort the Root Word Families",
        instruction: "Sort each word into the column that matches its Latin or Greek root.",
        parentTip: "If your child is unsure, encourage them to say the word aloud and identify the part that sounds like the root. Connecting the sound of a root to its meaning is a powerful independent vocabulary strategy.",
        columns: ["PORT (carry)", "AUD (hear)", "GRAPH (write)", "DICT (say or tell)"],
        items: [
          { label: "export" }, { label: "audience" }, { label: "autograph" }, { label: "dictate" },
          { label: "portable" }, { label: "audible" }, { label: "paragraph" }, { label: "contradict" },
          { label: "import" }, { label: "inaudible" }, { label: "photograph" }, { label: "predict" },
        ],
      },
      // 10
      {
        type: "fill-in-blank" as const,
        title: "Root Word Fill-In (Set A)",
        instruction: "Use your knowledge of roots to fill in the missing word.",
        sentences: [
          { text: "A device that makes sound louder (aud + related parts) is called an _______.", blanks: ["amplifier"] },
          { text: "To _______ a word means to carry it across languages (trans + port).", blanks: ["transport"] },
          { text: "A _______ is a written description of someone's life (bio + graph + y).", blanks: ["biography"] },
          { text: "A _______ is a device for seeing far away (tele + scope).", blanks: ["telescope"] },
        ],
      },
      // 11
      {
        type: "circle-correct" as const,
        title: "Simile or Metaphor?",
        instruction: "Circle whether each sentence is a simile or a metaphor.",
        questions: [
          { prompt: "Life is a rollercoaster.", options: ["Simile", "Metaphor"] },
          { prompt: "She ran like the wind.", options: ["Simile", "Metaphor"] },
          { prompt: "The classroom was a zoo.", options: ["Simile", "Metaphor"] },
          { prompt: "His eyes were as blue as the ocean.", options: ["Simile", "Metaphor"] },
          { prompt: "Time is a thief.", options: ["Simile", "Metaphor"] },
          { prompt: "The baby's skin was like velvet.", options: ["Simile", "Metaphor"] },
        ],
      },
      // 12
      {
        type: "multiple-choice" as const,
        title: "Word Origins: Which Language?",
        instruction: "Each word came into English from another language. Choose the correct origin.",
        parentTip: "Exploring word origins across languages helps children understand that English is a rich mix of many cultures and histories.",
        questions: [
          { prompt: "The word 'disaster' (meaning terrible event) comes from:", options: ["Latin — bad star", "French — bad weather", "Greek — falling rock", "Italian — dark day"], answer: "Latin — bad star" },
          { prompt: "The word 'kindergarten' (a class for young children) comes from:", options: ["French", "Spanish", "German", "Japanese"], answer: "German" },
          { prompt: "The word 'ballet' (a type of dance) comes from:", options: ["Italian", "French", "Latin", "Greek"], answer: "French" },
          { prompt: "The word 'typhoon' (a tropical storm) comes from:", options: ["Arabic", "Chinese / Greek", "French", "Spanish"], answer: "Chinese / Greek" },
        ],
      },
      // 13
      {
        type: "open-response" as const,
        title: "Write Your Own Figurative Language",
        instruction: "Write one original example of each type of figurative language. Make each one vivid and interesting.",
        prompts: [
          { text: "Simile (comparing using 'like' or 'as'):", type: "lines", lines: 2 },
          { text: "Metaphor (direct comparison):", type: "lines", lines: 2 },
          { text: "Personification (giving human qualities to a non-human thing):", type: "lines", lines: 2 },
          { text: "Hyperbole (deliberate exaggeration):", type: "lines", lines: 2 },
          { text: "Idiom (a phrase with a non-literal meaning):", type: "lines", lines: 2 },
        ],
      },
      // 14
      {
        type: "sequence" as const,
        title: "Build a Word Family from a Root",
        instruction: "Each row shows a root growing into a word family. Read the sequence from simplest to most complex.",
        items: [
          { label: "vis → visible → visibility → visually → visualise" },
          { label: "port → portable → transport → transportation → deportation" },
          { label: "graph → graphic → photograph → photography → photographer" },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: How to Spot Figurative Language",
        content: "Ask yourself: Could this sentence be literally true? If the answer is no, it is probably figurative. 'The wind whispered' — can wind literally whisper? No — so it is personification. 'She ran like the wind' — is she actually wind? No — so it is a simile. Always ask: What image does this create, and why did the author choose to say it this way?",
      },
      // 16
      {
        type: "true-false" as const,
        title: "True or False: Root Words",
        instruction: "Circle True or False for each statement about root words.",
        statements: [
          { text: "The root 'port' means to hear.", answer: false },
          { text: "Knowing a root word can help you work out the meaning of unfamiliar words.", answer: true },
          { text: "The word 'export' contains the root 'port'.", answer: true },
          { text: "Latin and Greek roots only appear in science words.", answer: false },
          { text: "The root 'aud' appears in the word 'audible'.", answer: true },
          { text: "Etymology is the study of the history of words.", answer: true },
        ],
      },
      // 17
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language in Context",
        instruction: "Fill in the blank with the correct figurative language technique from the word bank: idiom / simile / metaphor / personification / hyperbole.",
        parentTip: "Encourage your child to identify the figurative language first, then check by asking what literal and intended meanings are.",
        sentences: [
          { text: "The phrase 'over the moon' is an _______.", blanks: ["idiom"] },
          { text: "'She sings like an angel' is a _______.", blanks: ["simile"] },
          { text: "'The classroom was a jungle' is a _______.", blanks: ["metaphor"] },
          { text: "'The fire devoured the building' is _______.", blanks: ["personification"] },
          { text: "'I have a billion things to do today' is _______.", blanks: ["hyperbole"] },
        ],
      },
      // 18
      {
        type: "sorting" as const,
        title: "Sort: Literal or Figurative?",
        instruction: "Sort each phrase into the correct column.",
        columns: ["Literal meaning", "Figurative meaning"],
        items: [
          { label: "The dog barked loudly." },
          { label: "She has a heart of gold." },
          { label: "It is raining heavily." },
          { label: "It is raining cats and dogs." },
          { label: "The sun set behind the hills." },
          { label: "The sun kissed the horizon." },
          { label: "He ate three sandwiches." },
          { label: "He ate a mountain of food." },
        ],
      },
      // 19
      {
        type: "home-activity" as const,
        title: "Figurative Language Spotter",
        instruction: "Try these activities over the next few days to practise finding figurative language in the real world.",
        parentTip: "Point out figurative language in books, songs and conversations as you come across them — normalising the observation makes it a habit rather than a task.",
        suggestions: [
          "Read a chapter of any novel and use sticky notes to mark every example of figurative language you find. Count how many of each type the author uses.",
          "Listen to a song and write down all the figurative language in the lyrics. Identify the technique used for each one.",
          "Look at three advertisements — on TV, in a magazine or online. Write down any figurative language used and explain the effect it has on the audience.",
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Word Detective Challenge",
        content: "Choose five words from your current reading book that you have never seen before. Use an etymology dictionary (etymonline.com is free) to find where each word came from. Can you find a root that links any of them to other words you know? Create a word detective card for each: word, origin, root meaning, and two related words. Display them somewhere you will see them every day this week.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "multiple-choice" as const,
        title: "Greek and Latin Roots (Set A)",
        instruction: "Choose the correct meaning for each root.",
        parentTip: "These roots appear in science, history and maths vocabulary too — connecting them across subjects reinforces learning.",
        questions: [
          { prompt: "What does the Greek root 'tele' mean?", options: ["Small", "Far", "Fast", "Under"], answer: "Far" },
          { prompt: "What does the Latin root 'terr' mean?", options: ["Water", "Sky", "Earth", "Fire"], answer: "Earth" },
          { prompt: "What does the Greek root 'bio' mean?", options: ["Book", "Life", "Light", "Stone"], answer: "Life" },
          { prompt: "What does the Latin root 'aqua' mean?", options: ["Earth", "Fire", "Air", "Water"], answer: "Water" },
        ],
      },
      // 22
      {
        type: "sorting" as const,
        title: "Sort Words by Root: TERR, BIO, AQUA, TELE",
        instruction: "Sort each word into the column that matches its root.",
        columns: ["TERR (earth)", "BIO (life)", "AQUA (water)", "TELE (far)"],
        items: [
          { label: "territory" }, { label: "biology" }, { label: "aquarium" }, { label: "telescope" },
          { label: "terrain" }, { label: "biome" }, { label: "aquatic" }, { label: "television" },
          { label: "terrarium" }, { label: "biography" }, { label: "aqueduct" }, { label: "telephone" },
        ],
      },
      // 23
      {
        type: "fill-in-blank" as const,
        title: "Complete the Sentence with the Right Root Word",
        instruction: "Use the root clues to fill in the correct word.",
        sentences: [
          { text: "A _______ (terra + rium) is a glass container for growing plants or keeping small animals.", blanks: ["terrarium"] },
          { text: "An _______ (aqua + tic) animal lives in water.", blanks: ["aquatic"] },
          { text: "A _______ (tele + phone) lets you communicate over long distances.", blanks: ["telephone"] },
          { text: "_______ (bio + logy) is the study of living things.", blanks: ["Biology"] },
        ],
      },
      // 24
      {
        type: "circle-correct" as const,
        title: "Choose the More Effective Figurative Language",
        instruction: "Read each pair of sentences. Circle the one that uses figurative language more effectively.",
        questions: [
          { prompt: "Which is more vivid?", options: ["The wind was strong.", "The wind howled like a wolf at midnight."] },
          { prompt: "Which is more effective?", options: ["She was very happy.", "She was over the moon."] },
          { prompt: "Which is more powerful?", options: ["The crowd was noisy.", "The crowd roared like thunder, shaking the very ground."] },
          { prompt: "Which is stronger?", options: ["He was very tired.", "He was so tired he could have slept for a century."] },
        ],
      },
      // 25
      {
        type: "open-response" as const,
        title: "Explain the Figurative Language",
        instruction: "For each sentence, explain what the figurative language means and what effect it creates for the reader.",
        parentTip: "Explaining the effect — not just the label — shows deeper understanding. Ask: Does it create a feeling? A picture? A sense of urgency?",
        prompts: [
          { text: "Sentence: 'The deadline was a ticking time bomb.'\nType: _______________\nMeaning and effect:", type: "lines", lines: 3 },
          { text: "Sentence: 'She had butterflies in her stomach.'\nType: _______________\nMeaning and effect:", type: "lines", lines: 3 },
          { text: "Sentence: 'The ancient oak stood like a silent guardian.'\nType: _______________\nMeaning and effect:", type: "lines", lines: 3 },
        ],
      },
      // 26
      {
        type: "true-false" as const,
        title: "True or False: Advanced Figurative Language",
        instruction: "Circle True or False.",
        statements: [
          { text: "A metaphor always uses the word 'like' or 'as'.", answer: false },
          { text: "Onomatopoeia is when a word sounds like what it describes.", answer: true },
          { text: "Alliteration is when words in a phrase begin with the same consonant sound.", answer: true },
          { text: "An extended metaphor is used across only one sentence.", answer: false },
          { text: "Pathetic fallacy is when weather or nature reflects the mood of a character.", answer: true },
          { text: "A euphemism is a harsh or offensive way of saying something.", answer: false },
        ],
      },
      // 27
      {
        type: "matching" as const,
        title: "Match the Advanced Figurative Technique",
        instruction: "Draw a line to match each technique with its correct definition.",
        parentTip: "These more advanced techniques will appear in literary texts your child reads. Learning the terms helps them discuss and analyse texts with confidence.",
        left: ["Onomatopoeia", "Alliteration", "Pathetic fallacy", "Euphemism", "Extended metaphor", "Oxymoron"],
        right: [
          "A polite or indirect way of saying something unpleasant",
          "A word that sounds like the thing it describes (buzz, crash)",
          "Two contradictory words used together (deafening silence)",
          "When the weather or nature reflects a character's emotions",
          "Words in a group that start with the same sound",
          "A metaphor developed over several lines or a whole text",
        ],
      },
      // 28
      {
        type: "fill-in-blank" as const,
        title: "Advanced Techniques in Context",
        instruction: "Identify the figurative technique used in each example.",
        sentences: [
          { text: "The bees _______ around the flowers. (Write the onomatopoeia sound word)", blanks: ["buzzed"] },
          { text: "Peter Piper plucked a peck of peppers. (This is an example of _______)", blanks: ["alliteration"] },
          { text: "'He passed away peacefully' is a _______ for the word died.", blanks: ["euphemism"] },
          { text: "The stormy weather matched the character's stormy mood. This is called _______ _______.", blanks: ["pathetic fallacy"] },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Root Word Spidergram",
        instruction: "Choose one root from the box: VIS, SCRIB, TERR, BIO. Write the root in the centre, then add six words that contain that root around it. Write a brief meaning for each word.",
        prompts: [
          { text: "My chosen root: _______________", type: "lines", lines: 1 },
          { text: "My spidergram (draw it in the box and label each word with its meaning):", type: "box", lines: 14 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Using Figurative Language in Your Own Writing",
        content: "When you write a figurative language technique, always ask: Does this create a clear image? Does it sound natural? Does it fit the mood? A forced or clichéd comparison (as old as the hills) is weaker than a fresh, original one. Challenge yourself to create comparisons that no one has used before — that is what makes writing memorable.",
      },
      // 31
      {
        type: "circle-correct" as const,
        title: "Name That Technique (Set B — Advanced)",
        instruction: "Circle the correct literary technique used in each example.",
        questions: [
          { prompt: "The silver snake of the river wound through the valley.", options: ["Simile", "Metaphor", "Onomatopoeia", "Hyperbole"] },
          { prompt: "Sizzling sausages filled the still summer air.", options: ["Alliteration", "Personification", "Idiom", "Simile"] },
          { prompt: "The dark clouds gathered as she opened the letter.", options: ["Hyperbole", "Metaphor", "Pathetic fallacy", "Alliteration"] },
          { prompt: "He was a living legend.", options: ["Idiom", "Oxymoron", "Simile", "Metaphor"] },
          { prompt: "The thunder crashed and the rain hissed on the roof.", options: ["Alliteration", "Onomatopoeia", "Personification", "Euphemism"] },
        ],
      },
      // 32
      {
        type: "sorting" as const,
        title: "Sort by Language Technique (Set B)",
        instruction: "Sort each example into the correct column.",
        columns: ["Alliteration", "Onomatopoeia", "Pathetic fallacy", "Oxymoron"],
        items: [
          { label: "The bees buzzed busily." },
          { label: "The crack of thunder split the air." },
          { label: "Rain fell as she walked into the empty house." },
          { label: "A deafening silence filled the room." },
          { label: "Fierce flames flickered and fell." },
          { label: "The door creaked open." },
          { label: "Bright sunshine greeted her happy news." },
          { label: "The icy warmth of his smile confused her." },
        ],
      },
      // 33
      {
        type: "multiple-choice" as const,
        title: "Prefix and Root Combinations",
        instruction: "Use your knowledge of prefixes and roots to work out the meaning of each word.",
        parentTip: "Common prefixes: un- (not), re- (again), pre- (before), sub- (under), inter- (between).",
        questions: [
          { prompt: "What does 'submarine' most likely mean? (sub = under, mare = sea)", options: ["An underwater vessel", "A type of sandwich", "A surface ship", "A sea creature"], answer: "An underwater vessel" },
          { prompt: "What does 'preview' most likely mean? (pre = before, view = see)", options: ["Seeing something after it happens", "Seeing something before it is released", "A very short film", "A type of review"], answer: "Seeing something before it is released" },
          { prompt: "What does 'interact' mean? (inter = between, act = do)", options: ["To act alone", "To act before others", "To act together or with each other", "To refuse to act"], answer: "To act together or with each other" },
          { prompt: "What does 'rehydrate' mean? (re = again, hydra = water)", options: ["To dry something out", "To restore water to something", "To study water", "To move across water"], answer: "To restore water to something" },
        ],
      },
      // 34
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language Cloze Passage",
        instruction: "Fill in the blanks using the word bank to complete this figurative language-rich paragraph. Word bank: treasure chest / danced / fog / escape.",
        parentTip: "Read the whole passage first before filling in any blanks — the context of surrounding sentences is the best clue.",
        sentences: [
          { text: "The old library was a _______ of stories waiting to be discovered.", blanks: ["treasure chest"] },
          { text: "Dust _______ in the pale light that filtered through the tall windows.", blanks: ["danced"] },
          { text: "The silence was as thick as _______, wrapping around every shelf.", blanks: ["fog"] },
          { text: "Every book was a doorway — open one and you could _______ to another world.", blanks: ["escape"] },
        ],
      },
      // 35
      {
        type: "open-response" as const,
        title: "Write with Figurative Language (Set A)",
        instruction: "Write a short paragraph (4 to 5 sentences) about a storm, a sporting event or a busy day. Include at least one idiom, one example of hyperbole and one example of personification. Label each in the margin.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "box", lines: 12 },
        ],
      },
      // 36
      {
        type: "multiple-choice" as const,
        title: "Etymology in Action",
        instruction: "Use your knowledge of roots to choose the most likely meaning of each word.",
        questions: [
          { prompt: "What does 'audiology' mean? (aud = hear, -ology = study of)", options: ["Study of music", "Study of hearing", "Study of the ear's structure only", "Study of speech"], answer: "Study of hearing" },
          { prompt: "What does 'scriptorium' mean? (script = written, -orium = a place for)", options: ["A type of letter", "A room for reading aloud", "A room where writing was done", "A publishing company"], answer: "A room where writing was done" },
          { prompt: "What does 'geothermal' mean? (geo = earth, therm = heat)", options: ["Heat from the earth", "Cold underground", "The study of rocks", "Movement of tectonic plates"], answer: "Heat from the earth" },
          { prompt: "What does 'chronology' mean? (chrono = time, -ology = study of)", options: ["Study of colour", "Study of time and the order of events", "Study of ancient clocks", "Study of the future"], answer: "Study of time and the order of events" },
        ],
      },
      // 37
      {
        type: "sorting" as const,
        title: "Sort: Prefix, Root or Suffix?",
        instruction: "Sort each word part into the correct column.",
        columns: ["Prefix (beginning)", "Root (core meaning)", "Suffix (ending)"],
        items: [
          { label: "un-" }, { label: "port" }, { label: "-tion" },
          { label: "pre-" }, { label: "aud" }, { label: "-ment" },
          { label: "re-" }, { label: "vis" }, { label: "-ful" },
          { label: "sub-" }, { label: "graph" }, { label: "-ness" },
        ],
      },
      // 38
      {
        type: "true-false" as const,
        title: "True or False: Etymology and Figurative Language",
        instruction: "Circle True or False.",
        statements: [
          { text: "The root 'chron' relates to time.", answer: true },
          { text: "A suffix comes at the beginning of a word.", answer: false },
          { text: "The word 'astronomy' contains the root 'astro' meaning star.", answer: true },
          { text: "Figurative language always makes writing harder to understand.", answer: false },
          { text: "Alliteration uses repeated vowel sounds at the start of words.", answer: false },
          { text: "An oxymoron places two contradictory words together.", answer: true },
        ],
      },
      // 39
      {
        type: "open-response" as const,
        title: "Analyse Figurative Language in a Text",
        instruction: "Find a paragraph in your current reading book that contains at least two examples of figurative language. Copy the paragraph, underline the figurative language, and explain the effect of each example.",
        parentTip: "If your child struggles to find examples, newspapers, picture books and song lyrics are rich sources of figurative language. Any text will do.",
        prompts: [
          { text: "Source (book title and page number):", type: "lines", lines: 1 },
          { text: "Paragraph (copy here):", type: "box", lines: 6 },
          { text: "Example 1 — technique and effect:", type: "lines", lines: 3 },
          { text: "Example 2 — technique and effect:", type: "lines", lines: 3 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Etymology Across Languages",
        content: "English has borrowed words from more than 350 languages. Choose five words that you suspect came from another language — perhaps words related to food, sport, music or science. Research each one using etymonline.com. Create a mini-poster: write each word, its origin language, its original meaning and how that meaning changed in English. What surprised you most?",
      },
      // ── DEVELOPING → CONSOLIDATING bridge (41–50) ────────────────────────
      // 41
      {
        type: "fill-in-blank" as const,
        title: "Greek Roots in Science Vocabulary",
        instruction: "Use the Greek roots to complete each science term.",
        parentTip: "Science vocabulary is heavily rooted in Greek and Latin. Learning the roots makes new science words far easier to decode.",
        sentences: [
          { text: "The _______ (micro + scope) is used to see very small things.", blanks: ["microscope"] },
          { text: "_______ (photo + synthesis) is the process by which plants make food from light.", blanks: ["Photosynthesis"] },
          { text: "The study of living things is called _______ (bio + logy).", blanks: ["biology"] },
          { text: "A _______ (thermo + meter) measures temperature.", blanks: ["thermometer"] },
        ],
      },
      // 42
      {
        type: "multiple-choice" as const,
        title: "Extended Metaphor: What Is It?",
        instruction: "Read each passage and answer the question.",
        questions: [
          {
            prompt: "Life is a journey. We face mountains and valleys, crossroads and dead ends. Sometimes we travel with companions; at other times we must walk alone. What we carry on the journey matters as much as the destination. Which technique is used throughout this passage?",
            options: ["Alliteration", "Extended metaphor", "Hyperbole", "Personification"],
            answer: "Extended metaphor",
          },
          {
            prompt: "In an extended metaphor, the comparison is developed across:",
            options: ["A single word", "One sentence only", "Multiple sentences or a whole text", "A list of similes"],
            answer: "Multiple sentences or a whole text",
          },
          {
            prompt: "Which of the following is an example of an extended metaphor?",
            options: [
              "She was as fast as a cheetah.",
              "The school was a jungle — teachers were hunters, tests were traps, and every corridor was a dangerous trail.",
              "The wind howled.",
              "He bit the bullet.",
            ],
            answer: "The school was a jungle — teachers were hunters, tests were traps, and every corridor was a dangerous trail.",
          },
        ],
      },
      // 43
      {
        type: "open-response" as const,
        title: "Write an Extended Metaphor",
        instruction: "Choose one of the metaphors below and extend it across a full paragraph (5 to 7 sentences). Every sentence should develop the comparison in a new way.",
        parentTip: "Model an extended metaphor aloud first — for example, 'The classroom is a beehive' — and brainstorm together what else in the classroom could link to the beehive metaphor before your child writes.",
        prompts: [
          { text: "Choose a starting metaphor:\n  A) Reading is a journey.\n  B) The mind is a garden.\n  C) Learning is climbing a mountain.\n  D) My own idea: _______________", type: "lines", lines: 1 },
          { text: "My extended metaphor paragraph:", type: "box", lines: 14 },
        ],
      },
      // 44
      {
        type: "sorting" as const,
        title: "Sort by Level of Formality",
        instruction: "Idioms and figurative language vary in formality. Sort these expressions from most informal to most formal.",
        columns: ["Very informal / colloquial", "Neutral / everyday", "Formal / literary"],
        items: [
          { label: "It cost a bomb." },
          { label: "It was expensive." },
          { label: "The expense was considerable." },
          { label: "She gave him a piece of her mind." },
          { label: "She expressed her frustration." },
          { label: "She articulated her dissatisfaction with measured precision." },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Choosing the Right Figurative Language for Your Audience",
        content: "Figurative language affects your writing differently depending on your audience. Idioms and informal comparisons suit conversational writing; extended metaphors and literary techniques suit formal essays and creative writing. Always ask: Who am I writing for, and what effect do I want to create? Matching the technique to the context is the mark of a skilled writer.",
      },
      // 46
      {
        type: "circle-correct" as const,
        title: "Identify the Effect",
        instruction: "Read each sentence. Circle the most accurate description of the effect created by the figurative language.",
        questions: [
          { prompt: "The abandoned house crouched at the end of the street, watching.", options: ["Creates a sense of warmth and safety", "Creates a sense of menace and unease", "Creates a sense of excitement", "Creates a comical effect"] },
          { prompt: "She was a ray of sunshine in the darkest room.", options: ["Suggests she was literally glowing", "Suggests she brought happiness and warmth to others", "Suggests she was standing near a window", "Suggests she was very hot"] },
          { prompt: "His words were daggers, each one perfectly aimed.", options: ["Suggests he was a skilled surgeon", "Suggests his words were literally sharp objects", "Suggests his words were extremely hurtful", "Suggests he was speaking quickly"] },
          { prompt: "I have told you a million times not to do that.", options: ["Literally means one million repetitions", "Emphasises the speaker's frustration through exaggeration", "Suggests a very long time period", "Is a factual statement about how many times it was said"] },
        ],
      },
      // 47
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language in Advertising",
        instruction: "Advertisers use figurative language to make slogans memorable. Fill in the technique name for each example.",
        sentences: [
          { text: "A slogan that uses repeated beginning sounds like 'Snap, Crackle, Pop' uses _______.", blanks: ["onomatopoeia"] },
          { text: "'The best a man can get' uses a _______ (type of comparison without 'like' or 'as').", blanks: ["metaphor"] },
          { text: "'Finger lickin' good' is an example of _______ and informal language.", blanks: ["hyperbole"] },
          { text: "A slogan that makes you picture a feeling — 'Reach for the stars' — uses a _______.", blanks: ["metaphor"] },
        ],
      },
      // 48
      {
        type: "open-response" as const,
        title: "Analyse an Idiom's History",
        instruction: "Choose one idiom from the box and research its origin. Explain where it came from and how its meaning has changed over time.",
        parentTip: "Use phrases.org.uk or etymonline.com to research idiom origins. This is a great opportunity to model using reliable online sources for research.",
        prompts: [
          { text: "Idiom choices: 'Bite the bullet' / 'Under the weather' / 'Kick the bucket' / 'Spill the beans'\nMy chosen idiom:", type: "lines", lines: 1 },
          { text: "Its origin story (where and when did it come from?):", type: "lines", lines: 4 },
          { text: "How is it used today?", type: "lines", lines: 3 },
        ],
      },
      // 49
      {
        type: "multiple-choice" as const,
        title: "Root Words in Context (Set B)",
        instruction: "Use the root meaning to identify the most likely meaning of each word.",
        questions: [
          { prompt: "What does 'benevolent' mean? (bene = well/good, vol = wish)", options: ["Wishing others well; kind and generous", "Wishing others harm", "Wishing for money", "Wishing for power"], answer: "Wishing others well; kind and generous" },
          { prompt: "What does 'malfunction' mean? (mal = bad, function = work)", options: ["A bad smell", "To work extremely well", "To work badly or fail", "A special function"], answer: "To work badly or fail" },
          { prompt: "What does 'omnivore' mean? (omni = all, vor = eat)", options: ["An animal that eats only plants", "An animal that eats only meat", "An animal that eats all types of food", "A very large animal"], answer: "An animal that eats all types of food" },
          { prompt: "What does 'circumnavigate' mean? (circum = around, navigate = sail/travel)", options: ["To travel very quickly", "To travel all the way around something", "To travel underground", "To navigate using a compass"], answer: "To travel all the way around something" },
        ],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Write a Figurative Language Poem",
        instruction: "Write a short poem (8 to 10 lines) on any topic you choose. You must include at least four different figurative language techniques. Label each technique in the margin using abbreviations: S (simile), M (metaphor), P (personification), H (hyperbole), A (alliteration), O (onomatopoeia).",
        parentTip: "Free verse (no rhyme required) removes the pressure of rhyming and allows your child to focus on the figurative language. Encourage risk-taking with language.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My poem:", type: "box", lines: 16 },
          { text: "Techniques I used (list each one):", type: "lines", lines: 3 },
        ],
      },
      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────
      // 51
      {
        type: "sorting" as const,
        title: "Sort: Figurative Technique by Purpose",
        instruction: "Sort each technique into the column that best describes its primary purpose in writing.",
        columns: ["Create vivid imagery", "Show emotion or mood", "Add rhythm or sound", "Make comparison"],
        items: [
          { label: "Alliteration" }, { label: "Pathetic fallacy" }, { label: "Simile" }, { label: "Onomatopoeia" },
          { label: "Metaphor" }, { label: "Hyperbole" }, { label: "Extended metaphor" }, { label: "Personification" },
        ],
      },
      // 52
      {
        type: "true-false" as const,
        title: "True or False: Word Origins",
        instruction: "Circle True or False.",
        statements: [
          { text: "The word 'salary' comes from the Latin word for salt, because Roman soldiers were sometimes paid in salt.", answer: true },
          { text: "The word 'window' comes from Old Norse meaning 'wind eye'.", answer: true },
          { text: "The word 'robot' was invented in the 18th century.", answer: false },
          { text: "Many English words for government and law come from French.", answer: true },
          { text: "The word 'pyjamas' comes from a Persian word.", answer: true },
          { text: "Greek roots are only found in medical and scientific vocabulary.", answer: false },
        ],
      },
      // 53
      {
        type: "multiple-choice" as const,
        title: "Figurative Language in Poetry",
        instruction: "Read each extract and answer the question.",
        parentTip: "Poetry is the richest source of figurative language. Reading poetry aloud together helps children hear the techniques as well as see them.",
        questions: [
          { prompt: "The fog comes on little cat feet. (Carl Sandburg)\nWhat technique is used?", options: ["Hyperbole", "Extended metaphor / personification", "Idiom", "Alliteration"], answer: "Extended metaphor / personification" },
          { prompt: "'I wandered lonely as a cloud' (Wordsworth)\nWhat technique is used?", options: ["Metaphor", "Simile", "Idiom", "Hyperbole"], answer: "Simile" },
          { prompt: "'Season of mists and mellow fruitfulness' (Keats)\nWhat technique is highlighted?", options: ["Onomatopoeia", "Metaphor", "Alliteration", "Idiom"], answer: "Alliteration" },
        ],
      },
      // 54
      {
        type: "fill-in-blank" as const,
        title: "Prefixes That Change Meaning",
        instruction: "Add the correct prefix to change the meaning of each base word.",
        sentences: [
          { text: "If something is not visible, it is _______visible.", blanks: ["in"] },
          { text: "If you write something again, you _______write it.", blanks: ["re"] },
          { text: "Something that happens before the war is _______war.", blanks: ["pre"] },
          { text: "A manager who is below a senior manager is a _______manager.", blanks: ["sub"] },
          { text: "If two countries cooperate between themselves, they _______act.", blanks: ["inter"] },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Rewrite Using Better Figurative Language",
        instruction: "Each sentence below is flat and literal. Rewrite it using vivid figurative language to make it more engaging. Try to use a different technique for each.",
        parentTip: "Share your own rewrites with your child and compare — whose version creates a stronger image? This models the craft of revision.",
        prompts: [
          { text: "Original: The forest was dark and quiet.\nRewrite:", type: "lines", lines: 2 },
          { text: "Original: She was very nervous before the performance.\nRewrite:", type: "lines", lines: 2 },
          { text: "Original: The market was very busy.\nRewrite:", type: "lines", lines: 2 },
          { text: "Original: He was very happy when he won.\nRewrite:", type: "lines", lines: 2 },
        ],
      },
      // 56
      {
        type: "circle-correct" as const,
        title: "Which Root Is in This Word?",
        instruction: "Circle the root that each word contains.",
        questions: [
          { prompt: "chronological", options: ["chron (time)", "log (word)", "ical (relating to)", "chrono (colour)"] },
          { prompt: "thermometer", options: ["thermo (heat)", "meter (water)", "therm (measure)", "metro (city)"] },
          { prompt: "circumference", options: ["circum (around)", "ference (carry around)", "circum (circle)", "circum (measure)"] },
          { prompt: "psychology", options: ["psych (mind)", "ology (body)", "psych (speak)", "logo (study)"] },
          { prompt: "hydrophobic", options: ["hydro (water)", "phobic (loving)", "hydro (fire)", "phobic (fear of)"] },
        ],
      },
      // 57
      {
        type: "sorting" as const,
        title: "Sort: Cliche or Fresh Figurative Language?",
        instruction: "Some figurative language has been used so often it has become a cliche. Sort each example.",
        columns: ["Cliche (overused)", "Fresh and original"],
        items: [
          { label: "As old as the hills." },
          { label: "The library swallowed her whole, digesting her page by page." },
          { label: "It was raining cats and dogs." },
          { label: "The city exhaled its tired commuters into the evening air." },
          { label: "Every cloud has a silver lining." },
          { label: "The clock ate the hours one minute at a time." },
        ],
      },
      // 58
      {
        type: "multiple-choice" as const,
        title: "Suffixes and Their Meanings",
        instruction: "Choose the correct meaning for each suffix.",
        questions: [
          { prompt: "What does the suffix '-ology' mean?", options: ["Study of", "Fear of", "Full of", "Without"], answer: "Study of" },
          { prompt: "What does the suffix '-phobia' mean?", options: ["Love of", "Study of", "Fear of", "Full of"], answer: "Fear of" },
          { prompt: "What does the suffix '-ment' mean?", options: ["Relating to", "The state or result of", "Without", "One who"], answer: "The state or result of" },
          { prompt: "What does the suffix '-ist' mean?", options: ["A place where", "Without", "A person who", "Relating to"], answer: "A person who" },
        ],
      },
      // 59
      {
        type: "open-response" as const,
        title: "Figurative Language Revision: Label and Explain",
        instruction: "Read the passage below. Find and label five examples of figurative language. Explain the technique and its effect for each one.",
        parentTip: "This type of analytical work is excellent preparation for secondary school English. Praise the quality of reasoning, not just the identification of the technique.",
        prompts: [
          {
            text: "PASSAGE:\nThe river was an old man, slow and deliberate, winding through the valley as if it had all the time in the world. On its banks, willow trees wept silently into the water. The summer heat was a heavy blanket draped over everything, stifling and still. Even the birds had given up their singing — the sky was as empty as a forgotten promise.\n\nExample 1 — quote, technique, effect:",
            type: "lines", lines: 3,
          },
          { text: "Example 2 — quote, technique, effect:", type: "lines", lines: 3 },
          { text: "Example 3 — quote, technique, effect:", type: "lines", lines: 3 },
          { text: "Example 4 — quote, technique, effect:", type: "lines", lines: 3 },
          { text: "Example 5 — quote, technique, effect:", type: "lines", lines: 3 },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Tip: Analysing Figurative Language in Four Steps",
        content: "When analysing figurative language in any text, use these four steps: 1. Identify — name the technique. 2. Quote — write the exact words. 3. Explain — describe what the words mean literally and what they suggest figuratively. 4. Effect — explain what this creates for the reader (an image, an emotion, a sense of pace). This structure works for any literary analysis task you will ever face.",
      },
      // 61 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Write Your Own Cliche Buster",
        content: "Take five of the most overused expressions in English — as cold as ice, time flies, better late than never, the tip of the iceberg, every cloud has a silver lining — and rewrite each one as a brand new, original figurative expression that means the same thing. Challenge: can you make your versions so vivid that a reader could picture them immediately? Share your favourite with someone.",
      },
      // 62
      {
        type: "fill-in-blank" as const,
        title: "Roots from the Natural World",
        instruction: "Many English words about nature come from Latin and Greek. Fill in the correct word using the root clues.",
        sentences: [
          { text: "_______ (luna + r) means relating to the moon.", blanks: ["Lunar"] },
          { text: "_______ (sol + ar) means relating to the sun.", blanks: ["Solar"] },
          { text: "An _______ (aqua + naut) is an underwater explorer.", blanks: ["aquanaut"] },
          { text: "_______ (flor + al) means relating to flowers.", blanks: ["Floral"] },
          { text: "A _______ (terr + ace) is a raised flat platform of earth.", blanks: ["terrace"] },
        ],
      },
      // 63
      {
        type: "circle-correct" as const,
        title: "Tone and Figurative Language",
        instruction: "Figurative language shapes the tone of a text. Circle the tone each example creates.",
        parentTip: "Tone is the author's attitude expressed through word choices. Helping your child connect figurative language to tone is a key step in literary analysis.",
        questions: [
          { prompt: "The sun beamed down on the laughing children, and the world was golden.", options: ["Dark and menacing", "Warm and joyful", "Tense and anxious", "Sad and reflective"] },
          { prompt: "The house stood like a broken tooth against the grey sky, hollow and rotting.", options: ["Playful and fun", "Warm and welcoming", "Gloomy and unsettling", "Peaceful and calm"] },
          { prompt: "She bounced into the room, her laughter fizzing like a shaken bottle of lemonade.", options: ["Sad and melancholy", "Calm and reflective", "Energetic and cheerful", "Angry and frustrated"] },
          { prompt: "Time crawled. Every second stretched into a minute; every minute into an hour.", options: ["Exciting and fast-paced", "Tense and slow-moving", "Happy and light", "Confused and disoriented"] },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Design a Root Word Reference Card",
        instruction: "Create a reference card for five roots of your choice. For each root write: the root, its language of origin, its meaning, three English words that contain it, and a memory trick to help you remember it.",
        prompts: [
          { text: "Root 1:", type: "lines", lines: 4 },
          { text: "Root 2:", type: "lines", lines: 4 },
          { text: "Root 3:", type: "lines", lines: 4 },
        ],
      },
      // 65
      {
        type: "multiple-choice" as const,
        title: "Figurative Language in Non-Fiction",
        instruction: "Non-fiction texts also use figurative language. Identify the technique in each example.",
        questions: [
          { prompt: "From a science article: 'The immune system is the body's army, defending against invasion.' What technique is used?", options: ["Idiom", "Extended metaphor", "Alliteration", "Hyperbole"], answer: "Extended metaphor" },
          { prompt: "From a geography textbook: 'Rivers carry their load like labourers, depositing sediment when their energy runs out.' What technique?", options: ["Simile", "Personification", "Oxymoron", "Onomatopoeia"], answer: "Simile" },
          { prompt: "From a history text: 'The war consumed an entire generation.' What technique?", options: ["Alliteration", "Simile", "Metaphor / personification", "Hyperbole"], answer: "Metaphor / personification" },
        ],
      },
      // 66
      {
        type: "sorting" as const,
        title: "Sort: Which Subject Uses This Root Most?",
        instruction: "Sort each root word into the subject area where it appears most often. Some may fit more than one — choose the most common.",
        columns: ["Science / Biology", "History / Humanities", "Maths / Measurement", "Literature / Language"],
        items: [
          { label: "bio (life)" }, { label: "chron (time)" }, { label: "geo (earth)" }, { label: "meter (measure)" },
          { label: "graph (write)" }, { label: "aqua (water)" }, { label: "terr (land)" }, { label: "dict (say)" },
        ],
      },
      // 67
      {
        type: "true-false" as const,
        title: "True or False: Figurative Language in Different Texts",
        instruction: "Circle True or False.",
        statements: [
          { text: "Figurative language only appears in poetry and fiction.", answer: false },
          { text: "Advertising texts often use idioms to sound friendly and relatable.", answer: true },
          { text: "Personification can be used in persuasive writing to make an argument more emotional.", answer: true },
          { text: "Scientific writing should always avoid figurative language entirely.", answer: false },
          { text: "Metaphors can help explain complex scientific concepts to general audiences.", answer: true },
          { text: "Extended metaphors are only suitable for very long texts.", answer: false },
        ],
      },
      // 68
      {
        type: "fill-in-blank" as const,
        title: "Alliteration and Onomatopoeia in Action",
        instruction: "Complete each sentence to create alliteration or onomatopoeia as instructed.",
        sentences: [
          { text: "Alliteration: 'The silver snake slithered silently through the _______.' (Fill in a word that starts with s)", blanks: ["shadows"] },
          { text: "Onomatopoeia: 'The angry bees _______ around the hive.' (Choose a sound word)", blanks: ["buzzed"] },
          { text: "Alliteration: 'Five fierce foxes _______ through the forest.' (fill in an alliterative verb)", blanks: ["fled"] },
          { text: "Onomatopoeia: 'Rain _______ against the window pane all night.' (sound word)", blanks: ["drummed"] },
        ],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Word Origins: English from Around the World",
        instruction: "Research five words that came into English from other languages. For each, record the word, its origin language and original meaning, and how we use it today.",
        parentTip: "This task can be a wonderful conversation about your family's own language heritage. If your family speaks another language, explore words that have crossed between that language and English.",
        prompts: [
          { text: "Word 1 (word, origin language, original meaning, current use):", type: "lines", lines: 3 },
          { text: "Word 2:", type: "lines", lines: 3 },
          { text: "Word 3:", type: "lines", lines: 3 },
          { text: "Word 4:", type: "lines", lines: 3 },
          { text: "Word 5:", type: "lines", lines: 3 },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Figurative Language in the World Around You",
        instruction: "Try these activities this week to practise figurative language beyond the worksheet.",
        parentTip: "Keep a shared family notebook where you collect interesting figurative language from books, conversations, films and news. Review it weekly.",
        suggestions: [
          "Watch the news or a documentary and write down three examples of figurative language used by journalists or commentators. Explain the technique and effect of each.",
          "Read the headlines of a newspaper or news website. Identify any idioms, metaphors or hyperbole. Rewrite three headlines using literal language and compare the effect.",
          "Play 'Figurative Language Swap': take turns choosing a sentence and challenging each other to replace any literal language with a figurative version using a different technique each time.",
        ],
      },
      // ── EXTENDING 71–100 ─────────────────────────────────────────────────
      // 71
      {
        type: "multiple-choice" as const,
        title: "Advanced Etymology: Word Families",
        instruction: "Use your knowledge of roots, prefixes and suffixes to answer each question.",
        questions: [
          { prompt: "Which word does NOT belong in the same word family as 'graphic, photograph, biography'?", options: ["autograph", "paragraph", "geography", "automobile"], answer: "automobile" },
          { prompt: "Which pair of words shares the same root?", options: ["dictionary / dedication", "auditorium / audible", "transport / transfer", "Both B and C"], answer: "Both B and C" },
          { prompt: "The word 'benediction' contains which two roots?", options: ["bene (good) + dict (say)", "ben (book) + diction (speak)", "bene (life) + dict (write)", "beni (good) + diction (read)"], answer: "bene (good) + dict (say)" },
        ],
      },
      // 72
      {
        type: "open-response" as const,
        title: "Literary Analysis: Figurative Language Essay Paragraph",
        instruction: "Write a formal analytical paragraph about how an author uses figurative language in a text of your choice. Use this structure: Point (make a claim) → Evidence (quote from the text) → Explanation (explain the technique) → Effect (describe the impact on the reader).",
        parentTip: "The Point-Evidence-Explanation-Effect structure is the foundation of literary essay writing at secondary school. Practising it now gives your child a significant advantage.",
        prompts: [
          { text: "Text title and author:", type: "lines", lines: 1 },
          { text: "My analytical paragraph (use Point → Evidence → Explanation → Effect):", type: "box", lines: 16 },
        ],
      },
      // 73
      {
        type: "sorting" as const,
        title: "Sort: Etymology Across Disciplines",
        instruction: "Sort each word into the academic discipline where its root appears most prominently.",
        columns: ["Medicine", "Law / Government", "Mathematics", "Environmental Science"],
        items: [
          { label: "cardiology (cardio = heart)" }, { label: "legislation (legis = law)" },
          { label: "circumference (circum = around)" }, { label: "ecology (eco = house/environment)" },
          { label: "neurology (neuro = nerve)" }, { label: "democracy (demos = people)" },
          { label: "polygon (poly = many)" }, { label: "biodiversity (bio = life)" },
        ],
      },
      // 74
      {
        type: "true-false" as const,
        title: "True or False: Advanced Language Analysis",
        instruction: "Circle True or False.",
        statements: [
          { text: "The purpose of figurative language is always to make text more complex and difficult.", answer: false },
          { text: "A writer can use multiple figurative techniques in a single sentence.", answer: true },
          { text: "The effect of figurative language depends partly on the reader's own experiences and knowledge.", answer: true },
          { text: "Avoiding all cliches is always the right choice in creative writing.", answer: false },
          { text: "Etymology can help a reader decode unfamiliar words in any subject area.", answer: true },
          { text: "A skilled writer chooses figurative language deliberately to create a specific effect.", answer: true },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Building a Vocabulary Toolkit for Secondary School",
        content: "The best vocabulary strategy is building word families. When you learn a new word, find its root, then look for five other words that share that root. For example, learning 'psychology' introduces you to: psychological, psychologist, psyche, psychiatry, psychosis. One root unlocks five words. Over a year, this compounds into hundreds of words — an enormous advantage in every subject.",
      },
      // 76
      {
        type: "fill-in-blank" as const,
        title: "Greek Roots in Technology and Modern Life",
        instruction: "Use the root clues to complete each modern technology word.",
        sentences: [
          { text: "A _______ (cyber + space) is the virtual environment of the internet.", blanks: ["cyberspace"] },
          { text: "A _______ (micro + chip) is a tiny electronic component.", blanks: ["microchip"] },
          { text: "_______ (digit + al) technology converts information into numbers.", blanks: ["Digital"] },
          { text: "A _______ (tele + vision) transmits images over distance.", blanks: ["television"] },
        ],
      },
      // 77
      {
        type: "multiple-choice" as const,
        title: "Figurative Language and Author Intent",
        instruction: "Read each question about author choices and select the best answer.",
        parentTip: "Understanding why an author chooses a particular technique — not just what it is — is the highest level of literary thinking. This is the distinction between identifying and analysing.",
        questions: [
          { prompt: "An author describes a politician as 'a wolf in sheep's clothing'. Why might the author have chosen this metaphor rather than saying the politician was dishonest?", options: ["To make the text shorter", "To avoid using the word dishonest", "To create a vivid and memorable image that implies the politician pretends to be harmless while being dangerous", "To make the text more informal"], answer: "To create a vivid and memorable image that implies the politician pretends to be harmless while being dangerous" },
          { prompt: "A poet uses pathetic fallacy — rain and storms — when a character receives bad news. What is the most likely reason?", options: ["The poet lived in a rainy climate", "To help the reader feel the character's emotional state through the environment", "To show that the weather was actually bad that day", "To make the poem longer"], answer: "To help the reader feel the character's emotional state through the environment" },
          { prompt: "An author uses alliteration in a villain's name: 'Silas Slade'. What effect does this create?", options: ["It makes the name easier to spell", "It makes the villain seem friendly", "It creates a sinister, hissing sound that reinforces the character's threatening nature", "It is just a coincidence"], answer: "It creates a sinister, hissing sound that reinforces the character's threatening nature" },
        ],
      },
      // 78
      {
        type: "open-response" as const,
        title: "Create a Figurative Language Mentor Text",
        instruction: "Write a descriptive passage of 8 to 12 sentences on any topic. Deliberately include at least six different figurative language techniques. Then create an answer key listing every technique you used, where it appears, and the effect you intended.",
        parentTip: "Writing a mentor text with an answer key shows the highest level of understanding — your child must consciously choose and deploy techniques, then reflect on their own choices. This is a genuine creative and analytical challenge.",
        prompts: [
          { text: "My descriptive passage:", type: "box", lines: 16 },
          { text: "Answer key (technique, quote, intended effect):", type: "box", lines: 12 },
        ],
      },
      // 79
      {
        type: "circle-correct" as const,
        title: "Strong Analysis or Weak Analysis?",
        instruction: "Read each analytical statement. Circle whether it is a strong analysis (clear point + evidence + effect) or a weak analysis (just identification with no explanation).",
        questions: [
          { prompt: "The author uses personification.", options: ["Strong analysis", "Weak — no explanation of effect"] },
          { prompt: "The metaphor 'the city was a beast' creates a sense of overwhelming, inhuman power, suggesting the character feels consumed by urban life.", options: ["Strong analysis", "Weak — no explanation of effect"] },
          { prompt: "There is alliteration in 'silent, silver stars'.", options: ["Strong analysis", "Weak — no explanation of effect"] },
          { prompt: "The alliteration 'silent, silver stars' creates a soft, hushed sound effect that mirrors the peaceful, still atmosphere of the scene.", options: ["Strong analysis", "Weak — no explanation of effect"] },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Etymology Family Tree",
        content: "Choose one Latin or Greek root — for example SCRIB/SCRIPT (to write), SPEC (to see), or VOCA (voice/call). Create a visual family tree showing: the root at the top, prefixes that combine with it, and at least 12 real English words in the branches. For each word, write a brief definition and use it in a sentence. Display your tree and see if family members can suggest more words to add.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Figurative Language Critique: Compare Two Texts",
        instruction: "Find two short passages on the same topic — one from a novel or poem and one from a newspaper or non-fiction article. Analyse how each text uses figurative language differently and explain why the differences suit each text's purpose.",
        parentTip: "Comparing texts is a high-order analytical skill. Encourage your child to consider audience, purpose and context when explaining why different texts use figurative language differently.",
        prompts: [
          { text: "Text 1 title, type and source:", type: "lines", lines: 1 },
          { text: "Figurative language techniques found in Text 1 (quote + technique + effect):", type: "box", lines: 8 },
          { text: "Text 2 title, type and source:", type: "lines", lines: 1 },
          { text: "Figurative language techniques found in Text 2 (quote + technique + effect):", type: "box", lines: 8 },
          { text: "How and why does the use of figurative language differ between the two texts?", type: "box", lines: 6 },
        ],
      },
      // 82
      {
        type: "fill-in-blank" as const,
        title: "Advanced Suffixes and Word Formation",
        instruction: "Add the correct suffix to form the requested word type.",
        sentences: [
          { text: "The noun form of 'predict' (predict + ion) is _______.", blanks: ["prediction"] },
          { text: "The adjective form of 'biology' is _______ (bio + logic + al).", blanks: ["biological"] },
          { text: "The adverb form of 'audible' is _______ (audible + y).", blanks: ["audibly"] },
          { text: "The noun meaning 'the act of transporting' is _______ (transport + ation).", blanks: ["transportation"] },
          { text: "The adjective meaning 'relating to vision' is _______ (vis + ual).", blanks: ["visual"] },
        ],
      },
      // 83
      {
        type: "multiple-choice" as const,
        title: "Figurative Language and Persuasion",
        instruction: "Analyse how figurative language is used persuasively in each example.",
        questions: [
          { prompt: "A charity campaign uses the slogan: 'Every child deserves to be a star.' What does this metaphor achieve?", options: ["It makes children want to be in films", "It suggests every child has equal worth and deserves to shine — creating an emotional appeal", "It literally means children should study astronomy", "It is a weak slogan with no clear meaning"], answer: "It suggests every child has equal worth and deserves to shine — creating an emotional appeal" },
          { prompt: "An environmental campaign says: 'The Earth is choking.' What effect does the personification create?", options: ["It is factually accurate about the atmosphere", "It creates a sense of urgency and suffering, making the environmental crisis feel immediate and personal", "It suggests the Earth is a person who can complain", "It is an example of hyperbole with no emotional impact"], answer: "It creates a sense of urgency and suffering, making the environmental crisis feel immediate and personal" },
        ],
      },
      // 84
      {
        type: "sorting" as const,
        title: "Sort: Register and Figurative Language",
        instruction: "Match each piece of writing to the type of figurative language most suited to it.",
        columns: ["Formal / academic writing", "Creative / literary writing", "Persuasive writing", "Everyday conversation"],
        items: [
          { label: "Extended metaphor across a whole essay" },
          { label: "A well-worn idiom: 'at the end of the day'" },
          { label: "Emotive personification: 'the planet is crying out'" },
          { label: "Precise simile in a report: 'a sharp rise in the data'" },
          { label: "Vivid pathetic fallacy in a short story" },
          { label: "Hyperbole for humour: 'I have told you a thousand times'" },
          { label: "Alliteration in a campaign slogan" },
          { label: "Technical root-word vocabulary: 'the aqueduct transported water'" },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Write a Persuasive Text Using Figurative Language",
        instruction: "Write a persuasive letter (3 paragraphs) to your school council arguing for a change you believe in. Deliberately use at least five figurative language techniques to strengthen your arguments. Label each technique in the margin.",
        parentTip: "Remind your child that in persuasive writing, figurative language must serve the argument — it should illuminate and strengthen, not distract. Review the draft together and ask: Does each technique make the argument stronger?",
        prompts: [
          { text: "My argument (what change am I arguing for?):", type: "lines", lines: 2 },
          { text: "My persuasive letter:", type: "box", lines: 20 },
          { text: "Figurative language techniques I used (label and quote each):", type: "lines", lines: 5 },
        ],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Language, Power and Figurative Expression",
        instruction: "Circle True or False.",
        statements: [
          { text: "Political speeches often use figurative language to create emotional impact.", answer: true },
          { text: "Figurative language is more powerful in spoken language than written language.", answer: false },
          { text: "The same figurative expression can be interpreted differently by different readers.", answer: true },
          { text: "Cultural background never affects how a reader interprets figurative language.", answer: false },
          { text: "Some idioms are unique to Australian English.", answer: true },
          { text: "Understanding figurative language is only useful for English classes.", answer: false },
        ],
      },
      // 87
      {
        type: "circle-correct" as const,
        title: "Which Technique Serves This Purpose Best?",
        instruction: "A writer wants to achieve a specific effect. Circle the technique that would work best.",
        questions: [
          { prompt: "The writer wants the reader to feel the beauty and loneliness of an empty landscape.", options: ["Hyperbole", "Pathetic fallacy and extended metaphor", "Idiom", "Alliteration only"] },
          { prompt: "The writer wants to create a sense of danger and speed in an action scene.", options: ["Long, complex metaphors", "Short alliterative phrases and onomatopoeia", "A list of idioms", "Euphemism"] },
          { prompt: "The writer wants to make a scientific concept accessible to a general audience.", options: ["Technical jargon with no figurative language", "A simple, clear metaphor or analogy", "Oxymoron", "Multiple mixed metaphors"] },
          { prompt: "The writer wants to show a character is pretending to be calm but is deeply afraid.", options: ["Direct statement: 'She was afraid'", "Contrast: calm exterior actions described alongside trembling details", "Hyperbole about her courage", "An extended simile about calmness"] },
        ],
      },
      // 88
      {
        type: "fill-in-blank" as const,
        title: "Complex Root Word Combinations",
        instruction: "Combine the roots and affixes to form a real English word, then write its meaning.",
        sentences: [
          { text: "omni + vor + ous = _______ (meaning: eating all types of food)", blanks: ["omnivorous"] },
          { text: "circum + nav + ig + ate = _______ (meaning: to travel all the way around)", blanks: ["circumnavigate"] },
          { text: "bene + vol + ent = _______ (meaning: wishing good to others; kind)", blanks: ["benevolent"] },
          { text: "mal + ad + just + ment = _______ (meaning: a poor adjustment to circumstances)", blanks: ["maladjustment"] },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Glossary of Figurative Language Techniques",
        instruction: "Create a personal glossary of figurative language techniques. For each term, write: the definition, an example from a text you have read, and your own original example.",
        parentTip: "A personal glossary is one of the most useful study tools your child can create. Encourage them to add to it throughout the year as they encounter new techniques.",
        prompts: [
          { text: "Simile — definition, text example, my own example:", type: "lines", lines: 4 },
          { text: "Metaphor — definition, text example, my own example:", type: "lines", lines: 4 },
          { text: "Extended metaphor — definition, text example, my own example:", type: "lines", lines: 4 },
          { text: "Pathetic fallacy — definition, text example, my own example:", type: "lines", lines: 4 },
          { text: "Oxymoron — definition, text example, my own example:", type: "lines", lines: 4 },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Preparing for Secondary School English",
        content: "At secondary school, English assessments frequently ask you to: identify figurative language techniques, quote from the text, explain the technique, and analyse its effect on the reader. The key word is 'analyse' — not 'describe'. Practise writing full analytical sentences now: 'The metaphor X suggests Y, creating the effect of Z for the reader.' This structure will serve you in every English essay you write.",
      },
      // 91
      {
        type: "multiple-choice" as const,
        title: "Figurative Language in Historical Texts",
        instruction: "Read each historical quotation and identify the technique used.",
        questions: [
          { prompt: "'I have a dream that my four little children will one day live in a nation where they will not be judged by the colour of their skin but by the content of their character.' (Martin Luther King Jr) — What technique structures this speech?", options: ["Alliteration", "Extended metaphor", "Anaphora (repetition of a phrase at the beginning of sentences)", "Hyperbole"], answer: "Anaphora (repetition of a phrase at the beginning of sentences)" },
          { prompt: "'All the world's a stage, and all the men and women merely players.' (Shakespeare) — What technique is used?", options: ["Simile", "Extended metaphor", "Hyperbole", "Idiom"], answer: "Extended metaphor" },
          { prompt: "'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields...' (Churchill) — What technique?", options: ["Pathetic fallacy", "Alliteration", "Anaphora", "Onomatopoeia"], answer: "Anaphora" },
        ],
      },
      // 92
      {
        type: "sorting" as const,
        title: "Sort: Etymology Strategy — Which Clue Helps Most?",
        instruction: "When encountering an unknown word, different strategies help in different ways. Sort each strategy into the column that best describes when to use it.",
        columns: ["Best for finding core meaning", "Best for understanding nuance", "Best for confirming usage"],
        items: [
          { label: "Identify the Latin or Greek root" },
          { label: "Look at the context of the surrounding sentences" },
          { label: "Check the word in a dictionary" },
          { label: "Identify the prefix and suffix" },
          { label: "Find the word's etymology using etymonline.com" },
          { label: "Find three example sentences in different texts" },
        ],
      },
      // 93
      {
        type: "open-response" as const,
        title: "Independent Research: Australian English Idioms",
        instruction: "Australian English has many unique idioms and expressions. Research five Australian English idioms that are not common in British or American English. For each one: write the idiom, explain its meaning, and explain its likely origin.",
        parentTip: "This task is a wonderful opportunity to explore Australian identity through language. Discuss expressions your own family uses — regional or cultural idioms are part of living language.",
        prompts: [
          { text: "Idiom 1 (expression, meaning, origin):", type: "lines", lines: 4 },
          { text: "Idiom 2:", type: "lines", lines: 4 },
          { text: "Idiom 3:", type: "lines", lines: 4 },
          { text: "Idiom 4:", type: "lines", lines: 3 },
          { text: "Idiom 5:", type: "lines", lines: 3 },
        ],
      },
      // 94
      {
        type: "circle-correct" as const,
        title: "Evaluate the Quality of the Writing",
        instruction: "Read each pair of sentences. Circle the one that uses figurative language more skilfully — with a specific, fresh image and clear effect.",
        questions: [
          { prompt: "Which is more skilfully written?", options: ["The old man was as slow as a snail.", "The old man moved like a tide going out — unhurried, inevitable, carrying the weight of decades."] },
          { prompt: "Which is more effective?", options: ["Fear gripped her heart like a vice, cold and unrelenting.", "She was really, really scared."] },
          { prompt: "Which shows better control of figurative language?", options: ["The city was a jungle, but also a machine, and also a beast — he hated it.", "The city was a machine that never slept, grinding its gears through the night, indifferent to those caught between its teeth."] },
          { prompt: "Which is the stronger descriptive sentence?", options: ["The sunset was beautiful.", "The horizon bled crimson and gold, the sun drowning slowly in the sea."] },
        ],
      },
      // 95
      {
        type: "fill-in-blank" as const,
        title: "Latin Phrases Used in English",
        instruction: "Many Latin phrases are used directly in English, especially in academic and legal writing. Fill in the correct Latin phrase from the word bank.",
        sentences: [
          { text: "_______ means 'and other things' and is used when listing items (abbreviated etc.).", blanks: ["Et cetera"] },
          { text: "_______ means 'note well' and is used to draw attention to something important (abbreviated NB).", blanks: ["Nota bene"] },
          { text: "_______ means 'by the fact itself' — something that is automatically true.", blanks: ["Ipso facto"] },
          { text: "_______ means 'in good faith' — acting honestly and sincerely.", blanks: ["Bona fide"] },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Figurative Language in a Science Context",
        instruction: "Figurative language is used in science to explain complex concepts. Read each scientific explanation and then write your own figurative explanation of the same concept using a different technique.",
        parentTip: "Using metaphors and analogies to explain science is a mark of deep understanding. Scientists and science communicators use this skill constantly.",
        prompts: [
          { text: "Scientific explanation: The nucleus of an atom is at the centre, surrounded by electrons at great distances, like a tiny solar system.\nYour own figurative explanation using a different image:", type: "lines", lines: 3 },
          { text: "Scientific explanation: DNA is a set of instructions coded in chemical letters that tells cells how to function.\nYour own figurative explanation:", type: "lines", lines: 3 },
          { text: "Scientific explanation: The immune system detects and destroys foreign invaders in the body.\nYour own figurative explanation:", type: "lines", lines: 3 },
        ],
      },
      // 97
      {
        type: "multiple-choice" as const,
        title: "Mastery Check: Figurative Language and Etymology",
        instruction: "Demonstrate your mastery by answering these challenge questions.",
        questions: [
          { prompt: "Which statement best describes what makes figurative language effective in writing?", options: ["Using as many techniques as possible in every sentence", "Choosing the technique that best serves the purpose and audience, and deploying it precisely", "Always using similes because they are the easiest to understand", "Avoiding figurative language in non-fiction writing"], answer: "Choosing the technique that best serves the purpose and audience, and deploying it precisely" },
          { prompt: "How does etymology help readers with comprehension?", options: ["It tells you the exact current definition of a word", "It helps you recognise shared roots between words, allowing you to make educated guesses about unfamiliar words", "It replaces the need for a dictionary", "It only helps with words from Latin languages"], answer: "It helps you recognise shared roots between words, allowing you to make educated guesses about unfamiliar words" },
          { prompt: "What is the difference between identifying figurative language and analysing it?", options: ["There is no difference", "Identifying names the technique; analysing explains how and why it creates a specific effect for the reader", "Analysing means finding more examples", "Identifying is harder than analysing"], answer: "Identifying names the technique; analysing explains how and why it creates a specific effect for the reader" },
        ],
      },
      // 98
      {
        type: "home-activity" as const,
        title: "Extended Project: Language Detectives",
        instruction: "Over the next two weeks, complete this extended language detective project.",
        parentTip: "This extended project develops sustained research and writing skills. Support the process by discussing findings at each stage rather than waiting until the final product.",
        suggestions: [
          "Week 1 — Etymology: Choose a theme (sport, food, technology, or your favourite subject area). Find 10 words on that theme and research the etymology of each. Create a visual display showing each word's journey into English.",
          "Week 2 — Figurative Language Anthology: Collect 10 examples of figurative language from different text types (novel, poem, newspaper, advertisement, speech, non-fiction book). Annotate each one with the technique and its effect. Write a one-page reflection on what you noticed about how different text types use figurative language.",
          "Final step: Choose your three favourite figurative language examples from your anthology and use them as inspiration to write an original descriptive paragraph. Share it with a family member and discuss the choices you made.",
        ],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Reflection: My Growth as a Word Learner",
        instruction: "Reflect on what you have learned about figurative language and etymology throughout this worksheet. Answer each question thoughtfully.",
        prompts: [
          { text: "Which figurative language technique do you find most powerful in writing, and why?", type: "lines", lines: 4 },
          { text: "Which root word has been most useful for understanding unfamiliar words? Give three examples of words it helped you with.", type: "lines", lines: 4 },
          { text: "How has learning about word origins changed the way you read or write?", type: "lines", lines: 4 },
          { text: "Set yourself a vocabulary goal for next month. What will you do to reach it?", type: "lines", lines: 3 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Write a Language Manifesto",
        content: "A manifesto is a public declaration of beliefs and intentions. Write a one-page Language Manifesto — a passionate, figurative-language-rich declaration about why words matter. Include your beliefs about reading, writing, word origins and the power of language. Use at least eight figurative language techniques deliberately. This is your chance to write something that truly reflects how you think and feel about language. Keep it — it is the beginning of your voice as a writer.",
      },
    ],
  },
  {
    slug: "verb-tenses-consistency",
    title: "Verb Tenses: Writing Consistently",
    strand: "Language",
    description:
      "Use verb tenses consistently in writing and understand how shifts in tense affect meaning.",
    learningGuide: {
      concept:
        "Verb tense tells us when an action happens — past, present or future. Consistent tense means not switching unnecessarily between tenses in the same piece of writing. Common forms include simple past (ran), simple present (runs), simple future (will run), past continuous (was running), and present perfect (has run).",
      activation:
        "Ask your child to tell you about something they did yesterday. Notice which tenses they use naturally. Then ask them to retell the same event as if it is happening right now.",
      check:
        "After the worksheet, ask your child to highlight every verb in a paragraph they have written and check whether the tenses are consistent throughout.",
    },
    lesson: {
      title: "Time Travellers: Mastering Tense",
      objective:
        "Identify and correct tense shifts in writing, and apply consistent tense in an original paragraph.",
      materials: ["This worksheet", "A pencil", "A highlighter in two colours"],
      intro: {
        title: "Jumping Through Time",
        script:
          "Imagine you are reading an exciting story and suddenly — without warning — it jumps from past tense to present tense. The hero ran across the field, then he jumps over the fence. Something feels wrong, right? That is because the tense shifted unexpectedly. Good writers choose a tense and stick with it throughout a piece of writing — unless they have a deliberate reason to change. Today we are going to become tense detectives and fix some time-jumping writing.",
        action:
          "Write the three core tenses on paper with example sentences: Simple past — She walked to school. Simple present — She walks to school. Simple future — She will walk to school. Ask your child to convert each sentence into the other two tenses.",
      },
      mainActivity: {
        title: "The Tense Toolbox",
        script:
          "Beyond simple past, present and future, English has continuous and perfect forms. Past continuous — She was walking — shows an action in progress. Present perfect — She has walked — shows an action that started in the past and connects to now. These forms add nuance and precision. Let us look at the activities and identify which tense form is used and whether it is used consistently.",
        action:
          "Work through the first activity together. Use one highlighter colour for past tense verbs and another for present tense verbs to visually show the inconsistency.",
      },
      wrapUp: {
        title: "Tense Edit",
        script:
          "Now take a piece of your own writing. Read through it and highlight every verb. Are all the tenses consistent? If not, choose which tense is correct for that piece and fix the errors. Good editing is a skill that all writers need.",
        action:
          "Sit with your child and review one paragraph of their writing together for tense consistency.",
      },
      parentTip:
        "When watching a film or TV show together, ask: Is this story told in past tense or present tense? How can you tell? This builds metalinguistic awareness in a fun, low-stakes context.",
      extension:
        "Rewrite the same short scene (4 to 5 sentences) three times — once in simple past, once in simple present and once using past continuous throughout. Compare how each version feels.",
      resources: [
        {
          title: "Khan Academy — Verb Tenses",
          url: "https://www.khanacademy.org/ela/cc-5th-grade-reading-vocab/xe2c54a99ede11c03:grammar/xe2c54a99ede11c03:verb-tenses/e/verb-tenses",
          description: "Practice exercises on consistent verb tense use.",
        },
        {
          title: "ReadWriteThink — Verb Tense Lesson",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/verb-tense-timeline",
          description:
            "Visual timeline lesson for understanding and applying verb tenses.",
        },
        {
          title: "ABC Education — Grammar Skills",
          url: "https://www.abc.net.au/education/learn-english/grammar/",
          description:
            "Grammar explanations and activities including verb tense for upper primary.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "matching" as const,
        title: "Match the Tense to Its Name",
        instruction: "Draw a line to match each example sentence with the correct verb tense name.",
        parentTip: "Read each sentence aloud with your child before matching — hearing the tense often makes it easier to identify than reading silently.",
        left: [
          "She runs to school every day.",
          "He was reading when the phone rang.",
          "They will arrive tomorrow.",
          "We have visited that museum before.",
          "The dog barked all night.",
          "I am writing a story right now.",
        ],
        right: ["Simple present", "Past continuous", "Simple future", "Present perfect", "Simple past", "Present continuous"],
      },
      // 2
      {
        type: "circle-correct" as const,
        title: "Choose the Correct Tense Form (Set A)",
        instruction: "Circle the verb form that keeps the tense consistent with the rest of the sentence.",
        questions: [
          { prompt: "Yesterday, the team played well but they ___ the final point.", options: ["miss", "missed", "will miss"] },
          { prompt: "Every morning she ___ her teeth before breakfast.", options: ["brushed", "brushes", "will brush"] },
          { prompt: "By the time we arrived, the show ___ already started.", options: ["has", "had", "have"] },
          { prompt: "Right now, the children ___ in the garden.", options: ["played", "are playing", "will play"] },
          { prompt: "Since last year, he ___ three books.", options: ["read", "has read", "reads"] },
        ],
      },
      // 3
      {
        type: "true-false" as const,
        title: "True or False: Tense Basics",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "Simple past tense is used to describe actions that happened and finished in the past.", answer: true },
          { text: "Simple present tense can describe habitual actions.", answer: true },
          { text: "Switching from past to present tense mid-paragraph is always correct.", answer: false },
          { text: "The verb 'is' is present tense.", answer: true },
          { text: "Past continuous tense uses 'was/were + -ing'.", answer: true },
          { text: "Present perfect tense uses 'had + past participle'.", answer: false },
        ],
      },
      // 4
      {
        type: "sorting" as const,
        title: "Sort Sentences by Tense (Set A)",
        instruction: "Sort each sentence into the correct tense column.",
        columns: ["Simple past", "Simple present", "Simple future"],
        items: [
          { label: "She walked to the park." },
          { label: "He reads every night." },
          { label: "They will travel next week." },
          { label: "The cat sat on the mat." },
          { label: "I write in my journal daily." },
          { label: "We will finish the project soon." },
          { label: "He cooked dinner last night." },
          { label: "She sings beautifully." },
          { label: "The bus will arrive at noon." },
        ],
      },
      // 5
      {
        type: "open-response" as const,
        title: "Spot the Tense Shift (Set A)",
        instruction: "Read the paragraph below. Find and underline every verb. Then circle the verbs that are the wrong tense. Rewrite the paragraph with consistent past tense.",
        prompts: [
          {
            text: "PARAGRAPH:\nYesterday, Maya woke up early and runs downstairs. She ate breakfast quickly because the bus is coming at eight. She packed her bag and rushes out the door. The cold air hits her face as she jogged to the bus stop.\n\nRewrite with consistent past tense:",
            type: "box",
            lines: 8,
          },
        ],
      },
      // 6
      {
        type: "fill-in-blank" as const,
        title: "Complete the Sentence in Past Tense",
        instruction: "Fill in the blank with the correct simple past tense form of the verb in brackets.",
        parentTip: "If your child is unsure of irregular past tense forms, help them notice: go → went, see → saw, buy → bought. Irregular verbs must be memorised.",
        sentences: [
          { text: "She _______ (walk) to school every day last term.", blanks: ["walked"] },
          { text: "He _______ (eat) all of his lunch.", blanks: ["ate"] },
          { text: "They _______ (run) across the oval.", blanks: ["ran"] },
          { text: "I _______ (write) three pages in my journal.", blanks: ["wrote"] },
          { text: "The dog _______ (bark) at the postman.", blanks: ["barked"] },
        ],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Simple Present or Simple Past?",
        instruction: "Circle whether each sentence is in simple present or simple past tense.",
        questions: [
          { prompt: "She plays tennis every Saturday.", options: ["Simple present", "Simple past"] },
          { prompt: "He finished his homework before dinner.", options: ["Simple present", "Simple past"] },
          { prompt: "They travel to Canberra twice a year.", options: ["Simple present", "Simple past"] },
          { prompt: "The team won the championship.", options: ["Simple present", "Simple past"] },
          { prompt: "I read for thirty minutes every night.", options: ["Simple present", "Simple past"] },
          { prompt: "She baked a cake for the party.", options: ["Simple present", "Simple past"] },
        ],
      },
      // 8
      {
        type: "sequence" as const,
        title: "Order the Tense Timeline",
        instruction: "Number these sentences 1 to 5 to put them in the correct order from earliest to latest in time, based on the tense and time clues in each sentence.",
        parentTip: "Encourage your child to underline the time clue words first — such as ago, last weekend, already, right now, next Friday — before deciding on the order.",
        items: [
          { label: "She will present her project to the class next Friday." },
          { label: "She has already written the introduction." },
          { label: "She was researching her topic last weekend." },
          { label: "She chose her topic two weeks ago." },
          { label: "She is editing the final draft right now." },
        ],
      },
      // 9
      {
        type: "fill-in-blank" as const,
        title: "Convert to Present Tense",
        instruction: "Rewrite each past tense sentence in simple present tense.",
        sentences: [
          { text: "She walked to the library every afternoon.\nPresent: She _______ to the library every afternoon.", blanks: ["walks"] },
          { text: "He ate breakfast at seven o'clock.\nPresent: He _______ breakfast at seven o'clock.", blanks: ["eats"] },
          { text: "The children played outside after school.\nPresent: The children _______ outside after school.", blanks: ["play"] },
          { text: "The bus arrived at eight sharp.\nPresent: The bus _______ at eight sharp.", blanks: ["arrives"] },
        ],
      },
      // 10
      {
        type: "multiple-choice" as const,
        title: "Identify the Tense Shift Error",
        instruction: "Read each sentence. Choose the version that corrects the tense shift.",
        parentTip: "A tense shift error feels jarring when read aloud. Encourage your child to read each option aloud before choosing.",
        questions: [
          {
            prompt: "The cat climbed the tree and then jumps down. (error: tense shift)",
            options: ["The cat climbed the tree and then jumped down.", "The cat climbs the tree and then jumped down.", "The cat will climb the tree and then jumped down."],
            answer: "The cat climbed the tree and then jumped down.",
          },
          {
            prompt: "He opens the door and walked inside. (error: tense shift)",
            options: ["He opened the door and walked inside.", "He opens the door and walks inside.", "Both A and B are correct in different contexts"],
            answer: "Both A and B are correct in different contexts",
          },
          {
            prompt: "She studies hard all year and then passed the exam. (error: tense shift)",
            options: ["She studied hard all year and then passed the exam.", "She studies hard all year and then passes the exam.", "Both A and B are correct in different contexts"],
            answer: "Both A and B are correct in different contexts",
          },
        ],
      },
      // 11
      {
        type: "sorting" as const,
        title: "Sort by Tense: Past, Present and Future",
        instruction: "Sort each verb phrase into the correct tense column.",
        columns: ["Past tense", "Present tense", "Future tense"],
        items: [
          { label: "will travel" }, { label: "has eaten" }, { label: "is running" },
          { label: "ran quickly" }, { label: "will finish" }, { label: "reads every day" },
          { label: "wrote a letter" }, { label: "are studying" }, { label: "will have finished" },
        ],
      },
      // 12
      {
        type: "open-response" as const,
        title: "Rewrite in Past Tense",
        instruction: "This passage is written in present tense. Rewrite it entirely in simple past tense. Change every verb.",
        prompts: [
          {
            text: "PASSAGE (present tense):\nEvery morning, Sam wakes up at six and eats a bowl of cereal. He brushes his teeth, picks up his bag and walks to the corner. His friend Priya meets him there and together they race to the bus stop.\n\nRewrite in past tense:",
            type: "box",
            lines: 10,
          },
        ],
      },
      // 13
      {
        type: "matching" as const,
        title: "Match Tense Forms: Regular Verbs",
        instruction: "Draw a line to match each base verb with its correct simple past form.",
        left: ["walk", "jump", "carry", "stop", "try", "plan"],
        right: ["stopped", "jumped", "tried", "carried", "planned", "walked"],
      },
      // 14
      {
        type: "circle-correct" as const,
        title: "Irregular Past Tense (Set A)",
        instruction: "Circle the correct simple past tense form of each irregular verb.",
        parentTip: "Irregular verbs do not follow the standard -ed rule. Keep a list of common irregular past tenses on display in your learning space.",
        questions: [
          { prompt: "go (simple past)", options: ["goed", "went", "gone"] },
          { prompt: "see (simple past)", options: ["sawed", "seed", "saw"] },
          { prompt: "take (simple past)", options: ["taked", "took", "taken"] },
          { prompt: "write (simple past)", options: ["writed", "wrote", "written"] },
          { prompt: "run (simple past)", options: ["runned", "ran", "run"] },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: How to Check Tense Consistency",
        content: "When you finish a piece of writing, read it through specifically looking at verbs. Use a highlighter to mark every verb. Are they all in the same tense? If you find a shift, ask: Did I change tense deliberately to show a different time, or was it an accident? If it was an accident, correct it. If it was deliberate (such as a flashback), make sure a time clue makes the change clear for the reader.",
      },
      // 16
      {
        type: "fill-in-blank" as const,
        title: "Continuous Tenses",
        instruction: "Fill in the blank with the correct continuous tense form.",
        sentences: [
          { text: "Right now, she _______ (read) a book. (present continuous)", blanks: ["is reading"] },
          { text: "When the phone rang, he _______ (cook) dinner. (past continuous)", blanks: ["was cooking"] },
          { text: "They _______ (play) outside when it started raining. (past continuous)", blanks: ["were playing"] },
          { text: "At this time tomorrow, I _______ (fly) to Brisbane. (future continuous)", blanks: ["will be flying"] },
        ],
      },
      // 17
      {
        type: "true-false" as const,
        title: "True or False: Continuous and Perfect Tenses",
        instruction: "Circle True or False.",
        statements: [
          { text: "Present continuous uses 'am/is/are + verb-ing'.", answer: true },
          { text: "Past perfect tense uses 'had + past participle'.", answer: true },
          { text: "Present perfect tense always refers to the distant past.", answer: false },
          { text: "'She has been running' is an example of present perfect continuous.", answer: true },
          { text: "Past continuous can only be used to describe a single completed action.", answer: false },
          { text: "Future simple tense uses 'will + base verb'.", answer: true },
        ],
      },
      // 18
      {
        type: "sorting" as const,
        title: "Sort by Tense Form: Simple, Continuous, Perfect",
        instruction: "Sort each verb phrase into the correct category.",
        columns: ["Simple (one word)", "Continuous (-ing form)", "Perfect (has/have/had)"],
        items: [
          { label: "walked" }, { label: "is walking" }, { label: "has walked" },
          { label: "ran" }, { label: "was running" }, { label: "had run" },
          { label: "writes" }, { label: "will be writing" }, { label: "have written" },
        ],
      },
      // 19
      {
        type: "open-response" as const,
        title: "Write a Consistent Past Tense Paragraph",
        instruction: "Write a paragraph of 6 to 8 sentences about an adventure — real or imagined. Choose simple past tense and use it consistently throughout. Underline every verb when you have finished.",
        prompts: [{ text: "My adventure paragraph:", type: "box", lines: 14 }],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Tense as a Storytelling Tool",
        content: "Some of the most powerful novels are written in present tense — as if the action is happening right now. Find a novel written in present tense (many popular teen and young adult novels use it). Read two or three pages and then rewrite a paragraph in past tense. Which version feels more immediate? Which creates more distance? Write a short paragraph explaining which tense you prefer to write in and why.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "fill-in-blank" as const,
        title: "Perfect Tenses: Present and Past",
        instruction: "Fill in the blank with the correct perfect tense form.",
        parentTip: "Present perfect (has/have + past participle) connects past to present. Past perfect (had + past participle) shows one past action happened before another.",
        sentences: [
          { text: "She _______ (finish) her homework, so she can go out now. (present perfect)", blanks: ["has finished"] },
          { text: "By the time he arrived, the concert _______ (start). (past perfect)", blanks: ["had started"] },
          { text: "They _______ (visit) Paris three times. (present perfect)", blanks: ["have visited"] },
          { text: "I _______ (never, see) such a beautiful sunset before. (past perfect)", blanks: ["had never seen"] },
          { text: "She _______ (already, eat) when we arrived. (past perfect)", blanks: ["had already eaten"] },
        ],
      },
      // 22
      {
        type: "circle-correct" as const,
        title: "Present Perfect or Simple Past?",
        instruction: "Circle the correct tense for each sentence.",
        questions: [
          { prompt: "She ___ to Paris last summer.", options: ["went (simple past)", "has gone (present perfect)"] },
          { prompt: "___ you ever tried sushi?", options: ["Did (simple past)", "Have (present perfect)"] },
          { prompt: "He ___ the book yesterday.", options: ["finished (simple past)", "has finished (present perfect)"] },
          { prompt: "I ___ in this house for ten years and I love it.", options: ["lived (simple past)", "have lived (present perfect)"] },
          { prompt: "She ___ ill since Monday.", options: ["was (simple past)", "has been (present perfect)"] },
        ],
      },
      // 23
      {
        type: "open-response" as const,
        title: "Spot and Fix the Tense Shifts (Set B)",
        instruction: "Read each paragraph. Identify ALL the tense shifts and rewrite the paragraph with consistent tense.",
        prompts: [
          {
            text: "PARAGRAPH 1 (should be past tense):\nThe explorer set out at dawn. He walks for hours through dense jungle. Suddenly, he stops and listens. A strange sound comes from the trees above him. He reached for his torch.\n\nRewrite:",
            type: "box",
            lines: 8,
          },
          {
            text: "PARAGRAPH 2 (should be present tense):\nEvery Sunday, the family drove to the beach. Mum packs the bags while Dad loads the car. The children fought over who gets the front seat. When they arrived, everyone ran straight to the water.\n\nRewrite:",
            type: "box",
            lines: 8,
          },
        ],
      },
      // 24
      {
        type: "multiple-choice" as const,
        title: "Which Tense Is Most Appropriate Here?",
        instruction: "Read each writing context. Choose the most appropriate tense to use.",
        questions: [
          { prompt: "You are writing a recount of a school excursion that happened last week.", options: ["Simple present", "Simple past", "Future tense"], answer: "Simple past" },
          { prompt: "You are writing a set of instructions for how to make a sandwich.", options: ["Simple present (imperative)", "Simple past", "Past perfect"], answer: "Simple present (imperative)" },
          { prompt: "You are writing a review of a film you saw recently.", options: ["Future tense only", "Simple present for plot, past for your experience", "Past perfect only"], answer: "Simple present for plot, past for your experience" },
          { prompt: "You are writing a persuasive essay about what schools should do next year.", options: ["Simple past", "Future and conditional tense", "Past continuous"], answer: "Future and conditional tense" },
        ],
      },
      // 25
      {
        type: "open-response" as const,
        title: "Convert the Tense Throughout",
        instruction: "Rewrite this present tense passage in present perfect tense. Think carefully about how each verb changes.",
        parentTip: "This exercise highlights how tense choice changes the relationship between actions and their timing. Present perfect says 'this relates to now'; simple past says 'this is finished'.",
        prompts: [
          {
            text: "ORIGINAL (simple present):\nShe trains for the marathon every day. She runs twenty kilometres before breakfast and lifts weights in the evening. Her dedication impresses her coaches.\n\nRewrite in present perfect:",
            type: "box",
            lines: 8,
          },
        ],
      },
      // 26
      {
        type: "sorting" as const,
        title: "Sort: Which Time Clue Goes with Which Tense?",
        instruction: "Sort each time clue word or phrase into the tense it most commonly signals.",
        parentTip: "Time clue words (sometimes called time markers or temporal adverbs) are a key reading strategy for identifying tense and sequencing events.",
        columns: ["Past tense signals", "Present tense signals", "Future tense signals", "Perfect tense signals"],
        items: [
          { label: "yesterday" }, { label: "every day" }, { label: "tomorrow" }, { label: "already" },
          { label: "last year" }, { label: "right now" }, { label: "next week" }, { label: "since last month" },
          { label: "in 1999" }, { label: "currently" }, { label: "soon" }, { label: "just" },
        ],
      },
      // 27
      {
        type: "fill-in-blank" as const,
        title: "Irregular Past Tense (Set B)",
        instruction: "Write the simple past tense form of each irregular verb.",
        sentences: [
          { text: "bring → _______", blanks: ["brought"] },
          { text: "think → _______", blanks: ["thought"] },
          { text: "catch → _______", blanks: ["caught"] },
          { text: "teach → _______", blanks: ["taught"] },
          { text: "buy → _______", blanks: ["bought"] },
          { text: "fight → _______", blanks: ["fought"] },
        ],
      },
      // 28
      {
        type: "true-false" as const,
        title: "True or False: Tense in Different Text Types",
        instruction: "Circle True or False.",
        statements: [
          { text: "Narrative texts are usually written in past tense.", answer: true },
          { text: "Procedural texts (instructions) are usually written in future tense.", answer: false },
          { text: "News articles often use past tense to describe events.", answer: true },
          { text: "A persuasive essay should switch tenses frequently to create variety.", answer: false },
          { text: "Present tense can create a sense of immediacy in storytelling.", answer: true },
          { text: "Film scripts are usually written in past tense.", answer: false },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Write in Three Tenses",
        instruction: "Write the same event (something ordinary, like making breakfast) three times — once in simple past, once in simple present and once in present perfect. Compare how each version reads.",
        parentTip: "This exercise reveals how tense changes the feel of the same content. Discuss with your child: Which version feels most immediate? Which feels most like a story? Which would suit a report?",
        prompts: [
          { text: "Simple past version:", type: "box", lines: 6 },
          { text: "Simple present version:", type: "box", lines: 6 },
          { text: "Present perfect version:", type: "box", lines: 6 },
          { text: "Which version do you prefer and why?", type: "lines", lines: 3 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: When Is a Tense Shift Deliberate?",
        content: "Not all tense shifts are errors. In narrative writing, you may use a flashback (shift to an earlier time) or a flash-forward (shift to a later time). When you do this deliberately, help your reader by using a clear time signal: 'Three years earlier...' or 'Later, when she was grown...' Without a signal, the tense shift will simply look like a mistake. The key question is always: Will my reader know why I changed tense?",
      },
      // 31
      {
        type: "circle-correct" as const,
        title: "Tense Shift: Error or Deliberate?",
        instruction: "Read each passage. Circle whether the tense shift is an error or a deliberate, well-signalled technique.",
        questions: [
          {
            prompt: "She walked into the room and smiles at everyone. Her confidence amazed them.",
            options: ["Error — accidental tense shift", "Deliberate — well signalled"],
          },
          {
            prompt: "He sat down heavily. Twenty years earlier, he had stood in this same spot as a young man, full of hope.",
            options: ["Error — accidental tense shift", "Deliberate — well signalled flashback"],
          },
          {
            prompt: "They played in the park all afternoon and then runs home for dinner.",
            options: ["Error — accidental tense shift", "Deliberate — well signalled"],
          },
          {
            prompt: "She opened the letter slowly. She already knew what it would say — she had received the same letter every year for the past decade.",
            options: ["Error — accidental tense shift", "Deliberate — well signalled"],
          },
        ],
      },
      // 32
      {
        type: "matching" as const,
        title: "Match the Tense to the Text Type",
        instruction: "Draw a line to match each text type with the tense most commonly used to write it.",
        parentTip: "Understanding which tense suits which text type helps children make intentional choices rather than guessing.",
        left: ["Personal narrative / recount", "Set of instructions", "Present-tense novel", "Science experiment write-up", "Persuasive essay about future action", "Book review"],
        right: [
          "Simple present (imperative for commands)",
          "Simple past",
          "Simple present",
          "Past tense (for method); present (for conclusions)",
          "Future and conditional",
          "Mixed: present for plot summary, past for personal response",
        ],
      },
      // 33
      {
        type: "fill-in-blank" as const,
        title: "Past Perfect: Before and After",
        instruction: "Use past perfect (had + past participle) to show which action happened first.",
        sentences: [
          { text: "By the time I arrived, they _______ (leave) already.", blanks: ["had left"] },
          { text: "She _______ (never, see) the ocean before her first trip to the coast.", blanks: ["had never seen"] },
          { text: "He remembered that he _______ (forget) his keys.", blanks: ["had forgotten"] },
          { text: "When the teacher entered, the students _______ (finish) the test.", blanks: ["had finished"] },
        ],
      },
      // 34
      {
        type: "open-response" as const,
        title: "Edit for Tense Consistency",
        instruction: "Read the paragraph below. Every sentence has at least one tense error. Underline each error and then rewrite the whole paragraph with consistent past tense.",
        prompts: [
          {
            text: "PARAGRAPH:\nLast Saturday, our family decided to go camping. We pack the car the night before and everyone is excited. Dad drives for three hours while Mum reads the map. When we arrive at the campsite, the sun already sets. We set up the tent in the dark and then eat cold sandwiches for dinner. Despite everything, it will be a wonderful night.\n\nCorrected version:",
            type: "box",
            lines: 12,
          },
        ],
      },
      // 35
      {
        type: "multiple-choice" as const,
        title: "The Conditional Tense",
        instruction: "The conditional tense describes what would happen if something else were true. Choose the correct verb form for each conditional sentence.",
        parentTip: "Conditional sentences often use 'if'. First conditional (real possibility): if + present, will + base. Second conditional (imagined): if + past, would + base.",
        questions: [
          { prompt: "If she studies hard, she ___ pass the test. (first conditional — real possibility)", options: ["will", "would", "had"], answer: "will" },
          { prompt: "If I had more time, I ___ read more books. (second conditional — imagined)", options: ["will", "would", "had"], answer: "would" },
          { prompt: "If it rains tomorrow, we ___ stay inside. (first conditional)", options: ["would", "will", "had"], answer: "will" },
          { prompt: "If I ___ a dog, I would walk it every day. (second conditional)", options: ["have", "had", "has"], answer: "had" },
        ],
      },
      // 36
      {
        type: "sorting" as const,
        title: "Sort: First or Second Conditional?",
        instruction: "Sort each conditional sentence into the correct column.",
        columns: ["First conditional (real / likely)", "Second conditional (imagined / unlikely)"],
        items: [
          { label: "If it is sunny, we will go to the beach." },
          { label: "If I were a bird, I would fly to Antarctica." },
          { label: "If she practises, she will improve." },
          { label: "If I had a million dollars, I would buy a boat." },
          { label: "If you eat well, you will feel better." },
          { label: "If cats could talk, they would complain constantly." },
        ],
      },
      // 37
      {
        type: "open-response" as const,
        title: "Tense in Informational Writing",
        instruction: "Write a short informational paragraph (5 to 7 sentences) about an animal, a place or a historical event. Choose the most appropriate tense and use it consistently. Explain why you chose that tense.",
        parentTip: "Facts about animals typically use present tense (they live in, they eat). Historical events use past tense. Discussing your topic with your child before they write improves the quality of the tense decision.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "The tense I will use and why:", type: "lines", lines: 2 },
          { text: "My informational paragraph:", type: "box", lines: 10 },
        ],
      },
      // 38
      {
        type: "circle-correct" as const,
        title: "Irregular Past Tense (Set B)",
        instruction: "Circle the correct past tense form of each irregular verb.",
        questions: [
          { prompt: "bite (simple past)", options: ["bited", "bit", "bitten"] },
          { prompt: "draw (simple past)", options: ["drawed", "drew", "drawn"] },
          { prompt: "fly (simple past)", options: ["flied", "flew", "flown"] },
          { prompt: "grow (simple past)", options: ["growed", "grew", "grown"] },
          { prompt: "shake (simple past)", options: ["shaked", "shook", "shaken"] },
          { prompt: "steal (simple past)", options: ["stealed", "stole", "stolen"] },
        ],
      },
      // 39
      {
        type: "true-false" as const,
        title: "True or False: Tense in Writing",
        instruction: "Circle True or False.",
        statements: [
          { text: "Every verb in a paragraph must be in exactly the same tense with no exceptions.", answer: false },
          { text: "A speech tag like 'she said' is usually in past tense even in a present-tense story.", answer: true },
          { text: "Direct speech does not need to follow the tense of the surrounding narrative.", answer: true },
          { text: "The past perfect tense can be used to show a backstory or earlier event.", answer: true },
          { text: "Habitual actions in the past can be shown using 'used to' + base verb.", answer: true },
          { text: "Tense errors are the most common grammatical mistake in student writing.", answer: true },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Same Story, Three Times",
        content: "Choose a simple event — buying something at a market, finding something lost, meeting someone new. Write it three times: first as a past tense recount (it happened), then as a present tense news report (it is happening now), then as a future tense prediction (it will happen). Compare the three versions. Which creates the most tension? Which feels most personal? Which sounds most formal? Write a paragraph reflecting on what tense does to a story.",
      },
      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────
      // 41
      {
        type: "fill-in-blank" as const,
        title: "Passive Voice and Tense",
        instruction: "The passive voice changes who or what is the focus of the sentence. Fill in the correct passive form.",
        parentTip: "Passive voice is formed with 'to be' + past participle. It is commonly used in scientific and formal writing.",
        sentences: [
          { text: "The cake _______ (eat) by the children. (past passive)", blanks: ["was eaten"] },
          { text: "The results _______ (record) in the notebook. (past passive)", blanks: ["were recorded"] },
          { text: "The letter _______ (write) yesterday. (past passive)", blanks: ["was written"] },
          { text: "The experiment _______ (conduct) carefully. (past passive)", blanks: ["was conducted"] },
        ],
      },
      // 42
      {
        type: "open-response" as const,
        title: "Analyse Tense in a Published Text",
        instruction: "Choose a page from a novel, newspaper or non-fiction book. Copy two paragraphs. Highlight every verb. Write a short analysis of the tense choices: which tenses are used, are they consistent, and is there any deliberate tense shift?",
        prompts: [
          { text: "Source (title, author, page):", type: "lines", lines: 1 },
          { text: "Copied paragraphs:", type: "box", lines: 8 },
          { text: "My tense analysis (which tenses, consistency, any deliberate shifts):", type: "box", lines: 8 },
        ],
      },
      // 43
      {
        type: "multiple-choice" as const,
        title: "Active and Passive Voice",
        instruction: "Identify whether each sentence is active or passive voice.",
        parentTip: "Active voice: the subject does the action. Passive voice: the subject receives the action.",
        questions: [
          { prompt: "The dog chased the cat.", options: ["Active voice", "Passive voice"], answer: "Active voice" },
          { prompt: "The cat was chased by the dog.", options: ["Active voice", "Passive voice"], answer: "Passive voice" },
          { prompt: "Scientists discovered a new planet.", options: ["Active voice", "Passive voice"], answer: "Active voice" },
          { prompt: "A new planet was discovered by scientists.", options: ["Active voice", "Passive voice"], answer: "Passive voice" },
          { prompt: "The trophy was presented to the winning team.", options: ["Active voice", "Passive voice"], answer: "Passive voice" },
        ],
      },
      // 44
      {
        type: "sorting" as const,
        title: "Sort: Active or Passive Voice?",
        instruction: "Sort each sentence into the correct column.",
        columns: ["Active voice (subject does the action)", "Passive voice (subject receives the action)"],
        items: [
          { label: "The chef cooked the meal." },
          { label: "The meal was cooked by the chef." },
          { label: "She wrote the report." },
          { label: "The report was written overnight." },
          { label: "The students completed the experiment." },
          { label: "The experiment was completed in one hour." },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Active vs Passive Voice — When to Use Each",
        content: "Active voice is usually clearer and more direct: 'The council approved the plan.' Passive voice is useful when the doer of the action is unknown or unimportant: 'The window was broken' (we do not know by whom). In formal or scientific writing, passive voice is common: 'The samples were tested.' In creative writing, active voice is usually stronger. The key is choosing deliberately, not by accident.",
      },
      // 46
      {
        type: "circle-correct" as const,
        title: "Choose the More Effective Verb Form",
        instruction: "Read each pair. Circle the version that uses tense and voice more effectively for the context given.",
        questions: [
          { prompt: "For a formal science report about results:", options: ["We tested the samples.", "The samples were tested."] },
          { prompt: "For an exciting action story:", options: ["The lion leapt towards her.", "She was leapt at by the lion."] },
          { prompt: "For a formal letter of complaint:", options: ["Someone broke the window.", "The window was broken on the evening of Friday the 12th."] },
          { prompt: "For a personal recount:", options: ["I swam across the lake in twenty minutes.", "The lake was swum across by me in twenty minutes."] },
        ],
      },
      // 47
      {
        type: "open-response" as const,
        title: "Write in Two Voices",
        instruction: "Write the same event (a science experiment, a game or a race) twice — once in active voice and once in passive voice. Then explain which version is more appropriate and for what kind of text.",
        prompts: [
          { text: "My event:", type: "lines", lines: 1 },
          { text: "Active voice version:", type: "box", lines: 6 },
          { text: "Passive voice version:", type: "box", lines: 6 },
          { text: "Which is better and for what purpose?", type: "lines", lines: 3 },
        ],
      },
      // 48
      {
        type: "fill-in-blank" as const,
        title: "Modal Verbs and Tense",
        instruction: "Modal verbs (can, could, will, would, may, might, must, should) work with other verbs to indicate possibility, necessity or permission. Fill in the correct modal verb.",
        sentences: [
          { text: "You _______ finish this by Friday if you work hard. (possibility in future)", blanks: ["could"] },
          { text: "Students _______ wear their uniform every day. (necessity — rule)", blanks: ["must"] },
          { text: "It _______ rain tomorrow — the sky looks dark. (strong probability)", blanks: ["might"] },
          { text: "She _______ speak three languages when she was ten. (past ability)", blanks: ["could"] },
        ],
      },
      // 49
      {
        type: "multiple-choice" as const,
        title: "Reported Speech and Tense Backshift",
        instruction: "When reporting what someone said, verbs usually shift back in tense. Choose the correct reported speech version.",
        parentTip: "This is called 'tense backshift' in reported speech: present → past, past → past perfect, will → would.",
        questions: [
          { prompt: "Direct speech: 'I am tired,' she said.\nWhich is the correct reported speech?", options: ["She said she is tired.", "She said she was tired.", "She said she were tired."], answer: "She said she was tired." },
          { prompt: "Direct speech: 'I will come tomorrow,' he said.\nWhich is correct reported speech?", options: ["He said he will come the next day.", "He said he would come the next day.", "He said he comes the next day."], answer: "He said he would come the next day." },
          { prompt: "Direct speech: 'We have finished,' they said.\nWhich is correct reported speech?", options: ["They said they finished.", "They said they have finished.", "They said they had finished."], answer: "They said they had finished." },
        ],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Convert Direct to Reported Speech",
        instruction: "Rewrite each piece of direct speech as reported speech. Remember to backshift the tense and change pronouns as needed.",
        parentTip: "Model the first one together before your child attempts the rest independently. Say the sentence aloud in direct speech, then report it as if you are telling someone else later.",
        prompts: [
          { text: "1. 'I am going to the market,' said Mum.\nReported speech:", type: "lines", lines: 2 },
          { text: "2. 'We have already eaten,' said the children.\nReported speech:", type: "lines", lines: 2 },
          { text: "3. 'I will finish the project by Friday,' said the student.\nReported speech:", type: "lines", lines: 2 },
          { text: "4. 'The storm is getting worse,' the captain warned.\nReported speech:", type: "lines", lines: 2 },
        ],
      },
      // ── CONSOLIDATING continued 51–80 ─────────────────────────────────────
      // 51
      {
        type: "sorting" as const,
        title: "Sort: Direct or Reported Speech?",
        instruction: "Sort each sentence into the correct column.",
        columns: ["Direct speech (exact words in quotes)", "Reported speech (no quote marks)"],
        items: [
          { label: "'I love reading,' said Maya." },
          { label: "Maya said that she loved reading." },
          { label: "'We are winning!' the crowd shouted." },
          { label: "The crowd shouted that they were winning." },
          { label: "He told me he had seen the film twice." },
          { label: "'I have seen that film twice,' he said." },
        ],
      },
      // 52
      {
        type: "true-false" as const,
        title: "True or False: Reported Speech",
        instruction: "Circle True or False.",
        statements: [
          { text: "In reported speech, present tense usually shifts to past tense.", answer: true },
          { text: "Direct speech always uses quotation marks.", answer: true },
          { text: "In reported speech, pronouns often change (I → he/she).", answer: true },
          { text: "Time expressions may change in reported speech (now → then).", answer: true },
          { text: "Reported speech always requires a tense backshift.", answer: false },
          { text: "Reporting verbs include: said, told, explained, warned, admitted.", answer: true },
        ],
      },
      // 53
      {
        type: "open-response" as const,
        title: "Tense and Mood: The Subjunctive",
        instruction: "The subjunctive mood expresses wishes, hypotheticals and formal suggestions. It often uses 'were' instead of 'was'. Read the examples then answer the questions.",
        parentTip: "The subjunctive is rarely taught at primary school but appears in formal English. Even introducing the concept gives your child an advantage when they encounter it in secondary school texts.",
        prompts: [
          { text: "Examples of the subjunctive:\n'If I were you, I would study more.' (hypothetical)\n'She wishes she were taller.' (wish)\n'It is important that he be present.' (formal suggestion)\n\nIn your own words, explain what is unusual about the verb form in these sentences:", type: "lines", lines: 3 },
          { text: "Write two sentences of your own using the subjunctive mood:", type: "lines", lines: 4 },
        ],
      },
      // 54
      {
        type: "multiple-choice" as const,
        title: "Tense in Formal Writing",
        instruction: "Formal writing often uses specific tense conventions. Choose the most appropriate option for each formal writing context.",
        questions: [
          { prompt: "In an academic essay analysing a novel, you usually refer to the plot in:", options: ["Past tense", "Present tense (literary present)", "Future tense"], answer: "Present tense (literary present)" },
          { prompt: "A historical essay about events in World War Two uses:", options: ["Present tense", "Past tense", "Future tense"], answer: "Past tense" },
          { prompt: "A formal recommendation for future policy uses:", options: ["Past tense", "Present and future tense", "Past perfect only"], answer: "Present and future tense" },
          { prompt: "A scientific report about a completed experiment uses:", options: ["Present tense for all sections", "Past tense for method; present for results and conclusions", "Future tense for all sections"], answer: "Past tense for method; present for results and conclusions" },
        ],
      },
      // 55
      {
        type: "fill-in-blank" as const,
        title: "Tense Consistency in Complex Sentences",
        instruction: "Fill in the blank with the correct verb form to maintain tense consistency within each complex sentence.",
        sentences: [
          { text: "Although she _______ (feel) nervous, she walked onto the stage and smiled.", blanks: ["felt"] },
          { text: "Before they _______ (leave) the house, they checked that all the windows were closed.", blanks: ["left"] },
          { text: "The results surprised everyone because no one _______ (expect) such a dramatic change.", blanks: ["had expected"] },
          { text: "She runs every morning because she _______ (find) it clears her mind for the day.", blanks: ["finds"] },
        ],
      },
      // 56
      {
        type: "open-response" as const,
        title: "Proofread for Tense",
        instruction: "A student wrote this paragraph but made eight tense errors. Find every error, underline it, and write the correction above it. Then rewrite the full corrected paragraph below.",
        prompts: [
          {
            text: "STUDENT PARAGRAPH:\nLast Tuesday, our class visited the science museum. We arrive at nine o'clock and immediately went to the space exhibit. Our teacher explain all about the solar system while we look at the models. I especially like the model of the International Space Station — it will have been huge! Afterwards, we eat lunch in the courtyard before we will leave at two o'clock.\n\nCorrected paragraph:",
            type: "box",
            lines: 12,
          },
        ],
      },
      // 57
      {
        type: "circle-correct" as const,
        title: "Choose the Correct Reporting Verb Tense",
        instruction: "Circle the correct verb form in each reported speech sentence.",
        questions: [
          { prompt: "She said she ___ happy.", options: ["is", "was", "will be"] },
          { prompt: "He told us he ___ the book the previous night.", options: ["reads", "had read", "has read"] },
          { prompt: "They explained that the experiment ___ several hours to complete.", options: ["takes", "will take", "had taken"] },
          { prompt: "The teacher announced that the test ___ on Friday.", options: ["is", "was", "would be"] },
          { prompt: "She admitted that she ___ to finish on time.", options: ["is struggling", "had been struggling", "will struggle"] },
        ],
      },
      // 58
      {
        type: "matching" as const,
        title: "Match the Verb Form to the Tense Name",
        instruction: "Draw a line to match each verb form to the correct tense name.",
        parentTip: "Knowing the formal names for tense forms helps your child communicate about grammar clearly, which is essential for editing conferences and secondary school English.",
        left: [
          "She had eaten.",
          "She will have eaten.",
          "She was eating.",
          "She has been eating.",
          "She would eat.",
          "She eats.",
        ],
        right: [
          "Present perfect continuous",
          "Past perfect",
          "Future perfect",
          "Simple present",
          "Past continuous",
          "Conditional",
        ],
      },
      // 59
      {
        type: "open-response" as const,
        title: "Tense in Narrative: Write a Flashback",
        instruction: "Write a short narrative passage (8 to 10 sentences) set in the present. At a key moment, include a clearly signalled flashback to the past using past perfect tense. Then return to present tense. Label where each tense shift occurs.",
        parentTip: "Reading published examples of flashbacks helps — many novels use this technique. The key is the signal phrase: 'She remembered the day when...' or 'Three years earlier...'.",
        prompts: [
          { text: "My narrative with flashback:", type: "box", lines: 16 },
          { text: "Where did I signal the tense shifts?", type: "lines", lines: 3 },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Tip: The Literary Present Tense",
        content: "When analysing literature, English teachers expect you to write in the literary present tense — as if the events of the story are happening now, even if the novel was written hundreds of years ago. For example: 'In Charlotte's Web, Charlotte sacrifices herself for Wilbur.' Not 'Charlotte sacrificed herself.' This convention applies to all literary analysis essays. Practise it now so it becomes a habit before secondary school.",
      },
      // 61
      {
        type: "true-false" as const,
        title: "True or False: Advanced Tense Concepts",
        instruction: "Circle True or False.",
        statements: [
          { text: "The literary present tense is used when analysing fiction.", answer: true },
          { text: "Passive voice is always grammatically incorrect.", answer: false },
          { text: "Modal verbs change meaning depending on tense and context.", answer: true },
          { text: "Backshift in reported speech is optional in informal conversation.", answer: true },
          { text: "The subjunctive mood is identical to the indicative mood in modern English.", answer: false },
          { text: "Tense errors in formal writing can undermine the writer's credibility.", answer: true },
        ],
      },
      // 62 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Tense Across Cultures",
        content: "Not all languages express time through verb tenses the way English does. In Mandarin Chinese, for example, time is indicated by context words rather than changing the verb itself. In French, there are more than ten distinct tenses. Research one other language and find out how it expresses past, present and future time. Write a one-page comparison of how that language handles tense versus how English does it. What does this tell you about the relationship between language and time?",
      },
      // 63
      {
        type: "fill-in-blank" as const,
        title: "Complex Tense Sequences",
        instruction: "In complex narratives, different tenses must work together logically. Fill in each blank with the most logical tense form.",
        sentences: [
          { text: "She _______ (read) the letter twice before she finally _______ (understand) what it meant.", blanks: ["had read", "understood"] },
          { text: "By the time we _______ (reach) the top, the sun _______ (already, set).", blanks: ["reached", "had already set"] },
          { text: "He _______ (live) in three different countries and _______ (speak) four languages by the time he was twelve.", blanks: ["had lived", "spoke"] },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Literary Analysis: Tense in a Passage",
        instruction: "Find a passage in your current reading book of at least three paragraphs. Analyse the tense use: identify every tense used, discuss any tense shifts and explain what they signal, and evaluate whether the author handles tense consistently and effectively.",
        parentTip: "Literary analysis requires students to discuss author choices. Ask: Did the author use tense deliberately? What effect does it create? Encouraging this kind of questioning builds higher-order thinking.",
        prompts: [
          { text: "Source (title, author, page numbers):", type: "lines", lines: 1 },
          { text: "Tenses used in the passage:", type: "lines", lines: 2 },
          { text: "Any tense shifts — where, and what do they signal?", type: "lines", lines: 3 },
          { text: "Is the tense use consistent and effective? Explain:", type: "lines", lines: 4 },
        ],
      },
      // 65
      {
        type: "multiple-choice" as const,
        title: "Tense, Aspect and Meaning",
        instruction: "Tense and aspect combine to create precise meanings. Choose the most accurate description of each verb form.",
        questions: [
          { prompt: "What does 'has been running' (present perfect continuous) communicate?", options: ["A single completed action in the past", "An ongoing action that started in the past and continues to the present", "A future intention", "A habitual past action"], answer: "An ongoing action that started in the past and continues to the present" },
          { prompt: "What does 'had been waiting' (past perfect continuous) communicate?", options: ["A future plan", "An action that was ongoing before another past action", "A completed past action", "A present habit"], answer: "An action that was ongoing before another past action" },
          { prompt: "What is the key difference between 'she studied' and 'she was studying'?", options: ["No difference — they are interchangeable", "'She studied' suggests a completed action; 'she was studying' suggests it was in progress when something else happened", "'She was studying' is past perfect", "'She studied' is present tense"], answer: "'She studied' suggests a completed action; 'she was studying' suggests it was in progress when something else happened" },
        ],
      },
      // 66
      {
        type: "sorting" as const,
        title: "Sort by Aspect: Completed or Ongoing?",
        instruction: "Sort each verb phrase based on whether it describes a completed or ongoing action.",
        columns: ["Completed action", "Ongoing or continuing action"],
        items: [
          { label: "She finished the book." },
          { label: "She was reading the book." },
          { label: "He has been working all day." },
          { label: "He completed the task." },
          { label: "They had been waiting for an hour." },
          { label: "They arrived at noon." },
          { label: "I have been learning guitar for two years." },
          { label: "I learnt a new chord yesterday." },
        ],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Peer Edit for Tense",
        instruction: "Below is a paragraph written by a student. Act as a peer editor: identify every tense issue, explain what is wrong and rewrite the corrected version.",
        prompts: [
          {
            text: "STUDENT PARAGRAPH:\nThe drought in Australia in 2019 was severe. Farmers will struggle to keep their animals alive. Rivers had dried up and crops fail. Government will introduce emergency water measures, but many farmers said it comes too late. Despite the hardship, communities come together and support each other through the crisis.\n\nYour peer edit (list each issue and your suggested fix):",
            type: "box",
            lines: 10,
          },
          { text: "Corrected paragraph:", type: "box", lines: 10 },
        ],
      },
      // 68
      {
        type: "circle-correct" as const,
        title: "Tense in Different Sentence Types",
        instruction: "Circle the correct tense for each context.",
        questions: [
          { prompt: "Stating a scientific fact: 'Water ___ at 100 degrees Celsius.'", options: ["boiled", "boils", "will boil"] },
          { prompt: "Writing about a historical event: 'The First Fleet ___ in 1788.'", options: ["arrives", "arrived", "will arrive"] },
          { prompt: "Giving instructions in a recipe: '___ the butter until it melts.'", options: ["Melted", "Melt", "Will melt"] },
          { prompt: "Discussing a novel: 'In this chapter, the character ___ a difficult choice.'", options: ["faced", "faces", "will face"] },
        ],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Write a Multi-Tense Narrative",
        instruction: "Write a narrative of 12 to 15 sentences that deliberately uses at least four different tenses correctly. Label each tense in the margin. Your narrative must use: simple past, past continuous, past perfect and present perfect.",
        parentTip: "This task requires sustained control of multiple tense forms. Read the draft aloud together to check that tense shifts feel logical and are well-signalled.",
        prompts: [
          { text: "My multi-tense narrative:", type: "box", lines: 20 },
          { text: "Tenses I used and where:", type: "lines", lines: 4 },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Tense Detectives: Finding Tenses in the Wild",
        instruction: "Practise recognising tenses in real-world texts this week.",
        parentTip: "When your child has completed each task, discuss the findings together. Real-world examples are far more memorable than invented ones.",
        suggestions: [
          "Read a page from a novel and list every verb you find. Identify the tense of each one. Are they consistent? Note any deliberate tense shifts.",
          "Watch a news report and notice what tenses the journalists use. Do they shift between present and past? When and why?",
          "Read a recipe and a recount of a sporting event. Compare the tenses used. Write a short paragraph explaining how the purpose of each text shapes its tense choices.",
        ],
      },
      // ── EXTENDING 71–100 ─────────────────────────────────────────────────
      // 71
      {
        type: "multiple-choice" as const,
        title: "Tense and Meaning: Advanced Distinctions",
        instruction: "Choose the answer that best explains the subtle difference in meaning.",
        questions: [
          { prompt: "What is the subtle difference between 'I lived in Sydney' and 'I have lived in Sydney'?", options: ["No difference", "'I lived in Sydney' implies I no longer live there; 'I have lived' implies a connection to the present", "'I have lived' is past perfect", "'I lived' is more formal"], answer: "'I lived in Sydney' implies I no longer live there; 'I have lived' implies a connection to the present" },
          { prompt: "What is the difference between 'she was walking' and 'she walked'?", options: ["'Was walking' suggests the action was in progress; 'walked' suggests a completed action", "No meaningful difference", "'Walked' is more formal", "'Was walking' implies she stopped"], answer: "'Was walking' suggests the action was in progress; 'walked' suggests a completed action" },
        ],
      },
      // 72
      {
        type: "open-response" as const,
        title: "Tense and Narrative Voice",
        instruction: "The same story can feel very different depending on the narrative tense and person. Write the opening paragraph of a story twice: first in third-person past tense (He walked...) and then in first-person present tense (I walk...). Analyse the difference in feeling and effect.",
        parentTip: "This is a sophisticated craft exercise. Discuss: which feels more immediate? More distant? More literary? There is no right answer — the goal is awareness of craft.",
        prompts: [
          { text: "Third-person past tense version:", type: "box", lines: 8 },
          { text: "First-person present tense version:", type: "box", lines: 8 },
          { text: "Analysis — how does the tense and person change the effect?", type: "box", lines: 6 },
        ],
      },
      // 73
      {
        type: "sorting" as const,
        title: "Sort: When Is Each Tense Most Useful?",
        instruction: "Match each tense to its most common and effective use case.",
        columns: ["Simple past", "Present perfect", "Past perfect", "Present continuous"],
        items: [
          { label: "Describing a completed event at a specific time in the past" },
          { label: "Describing an experience without specifying when" },
          { label: "Showing which of two past events happened first" },
          { label: "Describing something happening right now" },
          { label: "Recounting a historical event in chronological order" },
          { label: "Describing an action that began in the past and continues" },
          { label: "Setting the scene when something else happened" },
          { label: "Describing a background action interrupted by another" },
        ],
      },
      // 74
      {
        type: "true-false" as const,
        title: "True or False: Mastery Level Tense Concepts",
        instruction: "Circle True or False.",
        statements: [
          { text: "The future perfect tense describes an action that will be completed before a specific future time.", answer: true },
          { text: "In English, there is a grammatically distinct future tense verb form.", answer: false },
          { text: "Modal verbs like 'might', 'could' and 'should' can express future possibility.", answer: true },
          { text: "The continuous aspect always implies the action is still happening now.", answer: false },
          { text: "Choosing the wrong tense in a job application or formal essay can make the writer appear less credible.", answer: true },
          { text: "Tense and aspect are the same grammatical concept.", answer: false },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Editing for Tense — A Professional Approach",
        content: "Professional editors always read a manuscript at least once specifically for tense. Here is their process: 1. Read through and highlight every verb. 2. Check that all verbs in a single section share a consistent tense unless a shift is clearly signalled. 3. Check that tense shifts in complex sentences are logical and intentional. 4. Read the highlighted verbs alone, skipping all other words — do they tell a coherent time story? Adopt this professional approach for your own writing.",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Tense in Academic Writing",
        instruction: "Academic writing uses tense conventions carefully. Write a short academic-style paragraph (5 to 8 sentences) about a topic you have studied this year. Use the correct academic tense conventions: present tense for facts, past tense for completed research, and present perfect for research that has ongoing relevance.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My academic paragraph:", type: "box", lines: 12 },
          { text: "Which tenses did I use and why?", type: "lines", lines: 3 },
        ],
      },
      // 77
      {
        type: "multiple-choice" as const,
        title: "Tense in Journalism",
        instruction: "Journalists use tense in specific and intentional ways. Answer each question about tense in news writing.",
        parentTip: "Reading newspaper articles with your child and discussing the tense choices is an excellent critical literacy activity that also builds general knowledge.",
        questions: [
          { prompt: "Why do newspaper headlines often use present tense even for past events?", options: ["Because journalists do not know past tense", "Because present tense creates immediacy and makes the story feel relevant now", "Because present tense is faster to type", "Because all newspaper articles are about current events"], answer: "Because present tense creates immediacy and makes the story feel relevant now" },
          { prompt: "In the body of a news article, the main event is usually described in:", options: ["Future tense", "Present tense", "Past tense", "Present perfect"], answer: "Past tense" },
          { prompt: "Why might a journalist use present perfect ('has decided', 'have announced') rather than simple past?", options: ["It is always more formal", "It connects the past event to the present and suggests ongoing relevance", "It is easier to write", "It is required by style guides"], answer: "It connects the past event to the present and suggests ongoing relevance" },
        ],
      },
      // 78
      {
        type: "fill-in-blank" as const,
        title: "Tense in Complex Argument Writing",
        instruction: "Fill in each blank with the correct tense to maintain consistency in this formal argument passage.",
        sentences: [
          { text: "Research consistently _______ (show) that children who read daily develop stronger vocabulary.", blanks: ["shows"] },
          { text: "A 2022 study _______ (find) that students who read for 30 minutes a night _______ (score) 20% higher on comprehension tests.", blanks: ["found", "scored"] },
          { text: "Educators who _______ (implement) daily reading programmes _______ (report) improvements in student engagement.", blanks: ["have implemented", "report"] },
          { text: "If schools _______ (prioritise) reading time, student outcomes _______ (improve) significantly.", blanks: ["prioritised", "would improve"] },
        ],
      },
      // 79
      {
        type: "circle-correct" as const,
        title: "Mastery Check: Tense Identification",
        instruction: "Identify the tense and aspect of each underlined verb phrase.",
        questions: [
          { prompt: "She has been studying for three hours.", options: ["Present perfect continuous", "Past perfect continuous", "Present continuous", "Past continuous"] },
          { prompt: "By next year, they will have completed the project.", options: ["Future simple", "Future perfect", "Future continuous", "Present perfect"] },
          { prompt: "He had been waiting for an hour when she finally arrived.", options: ["Past perfect continuous", "Past perfect simple", "Past continuous", "Present perfect continuous"] },
          { prompt: "The committee would consider all applications fairly.", options: ["Past simple", "Present conditional", "Conditional (would)", "Future simple"] },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Write a Time-Travelling Paragraph",
        content: "Write a paragraph that deliberately uses every major English tense — at least six — in a way that makes chronological sense. You might write about a character who travels through time, or a narrator reflecting on past, present and future. Every tense shift must be signalled clearly. Label each tense in the margin. This is one of the hardest tense challenges in English — mastering it shows genuine grammatical sophistication.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Comparative Tense Analysis",
        instruction: "Find two published texts that cover the same subject (for example, two news articles about the same event, or an encyclopaedia entry and a novel excerpt on the same topic). Compare how each text uses tense: which tenses are used, are they consistent, and what does the tense choice reveal about each text's purpose and audience?",
        parentTip: "Comparative analysis is a sophisticated skill that requires holding two texts in mind simultaneously. Support your child by discussing each text separately before attempting the comparison.",
        prompts: [
          { text: "Text 1 (title, type, source):", type: "lines", lines: 1 },
          { text: "Tense analysis for Text 1:", type: "box", lines: 6 },
          { text: "Text 2 (title, type, source):", type: "lines", lines: 1 },
          { text: "Tense analysis for Text 2:", type: "box", lines: 6 },
          { text: "Comparison — how do the tense choices differ and why?", type: "box", lines: 6 },
        ],
      },
      // 82
      {
        type: "multiple-choice" as const,
        title: "Tense and Reliability in Argument",
        instruction: "Tense can affect how convincing an argument sounds. Choose the most persuasive option for each context.",
        questions: [
          { prompt: "Which version of this claim is most credible and precise?", options: ["Studies will show that exercise is good.", "Studies showed exercise was good once.", "Studies consistently show that regular exercise improves both physical and mental health.", "Exercise is probably good."], answer: "Studies consistently show that regular exercise improves both physical and mental health." },
          { prompt: "Which tense is most appropriate for a recommendation?", options: ["Schools will implement reading programmes.", "Schools should implement reading programmes.", "Schools implemented reading programmes.", "Schools have implemented reading programmes."], answer: "Schools should implement reading programmes." },
        ],
      },
      // 83
      {
        type: "sorting" as const,
        title: "Sort: Tense Errors and Their Fixes",
        instruction: "Sort each incorrect sentence into the column that describes the type of tense error it contains.",
        columns: ["Accidental tense shift", "Wrong tense for context", "Unnecessary passive"],
        items: [
          { label: "She ran across the field and then waves at us." },
          { label: "In his novel, Dickens described Oliver Twist as a hungry child. (literary present should be used)" },
          { label: "The ball was kicked by him across the room. (active would be clearer)" },
          { label: "They played all afternoon and then it gets dark." },
          { label: "The experiment was performed by the students yesterday. (active would be clearer)" },
          { label: "Scientists discovered in 1928 that penicillin kills bacteria. (should be present for current fact)" },
        ],
      },
      // 84
      {
        type: "open-response" as const,
        title: "Write a Formal Report with Correct Tense",
        instruction: "Write a short formal report (3 short paragraphs) about any topic you have studied this year. Use correct tense conventions: past tense for completed events, present tense for current facts and findings, and future or conditional for recommendations.",
        parentTip: "Report writing is an essential skill for secondary school and university. Discuss the tense conventions before your child begins, and review the draft together section by section.",
        prompts: [
          { text: "Report topic:", type: "lines", lines: 1 },
          { text: "Paragraph 1 — Background (past tense):", type: "box", lines: 6 },
          { text: "Paragraph 2 — Findings (present tense for facts):", type: "box", lines: 6 },
          { text: "Paragraph 3 — Recommendations (future or conditional):", type: "box", lines: 6 },
        ],
      },
      // 85
      {
        type: "fill-in-blank" as const,
        title: "Future Perfect and Future Continuous",
        instruction: "Fill in the blank with the correct future tense form.",
        sentences: [
          { text: "By Friday, she _______ (finish) the entire project. (future perfect)", blanks: ["will have finished"] },
          { text: "At this time tomorrow, they _______ (fly) over the Pacific. (future continuous)", blanks: ["will be flying"] },
          { text: "By the time you read this, I _______ (leave) for Brisbane. (future perfect)", blanks: ["will have left"] },
          { text: "This time next year, he _______ (study) at university. (future continuous)", blanks: ["will be studying"] },
        ],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Mastery Challenge",
        instruction: "Circle True or False.",
        statements: [
          { text: "Future perfect continuous describes an action that will still be in progress at a point in the future.", answer: true },
          { text: "Tense choice is a grammatical rule with no creative dimension.", answer: false },
          { text: "Spoken English often uses fewer tense distinctions than written formal English.", answer: true },
          { text: "In Australian English, 'used to' indicates a habitual past action that no longer occurs.", answer: true },
          { text: "Overusing passive voice in creative writing is generally considered a stylistic weakness.", answer: true },
          { text: "A narrative can never switch tenses without becoming confusing.", answer: false },
        ],
      },
      // 87
      {
        type: "circle-correct" as const,
        title: "Subtle Tense Distinctions",
        instruction: "Circle the sentence in each pair that uses tense more precisely for the given context.",
        questions: [
          { prompt: "Expressing a past habit that no longer occurs:", options: ["She walked to school.", "She used to walk to school."] },
          { prompt: "Expressing an action completed just before another past action:", options: ["She studied hard and passed the exam.", "She had studied for weeks before she sat the exam."] },
          { prompt: "Expressing an ongoing state that started in the past and continues:", options: ["She lives in Melbourne.", "She has lived in Melbourne since 2015."] },
          { prompt: "Expressing an action still in progress at a past moment:", options: ["He read when I called.", "He was reading when I called."] },
        ],
      },
      // 88
      {
        type: "open-response" as const,
        title: "Verb Tense Glossary",
        instruction: "Create a personal reference glossary for the eight most important English tenses. For each one, write: the tense name, how it is formed, when to use it, and one clear example sentence.",
        parentTip: "A personal grammar glossary is a powerful revision and reference tool. Encourage your child to revisit and add to it throughout the year.",
        prompts: [
          { text: "Simple past — form, use, example:", type: "lines", lines: 3 },
          { text: "Simple present — form, use, example:", type: "lines", lines: 3 },
          { text: "Simple future — form, use, example:", type: "lines", lines: 3 },
          { text: "Past continuous — form, use, example:", type: "lines", lines: 3 },
          { text: "Present perfect — form, use, example:", type: "lines", lines: 3 },
          { text: "Past perfect — form, use, example:", type: "lines", lines: 3 },
          { text: "Future perfect — form, use, example:", type: "lines", lines: 3 },
          { text: "Conditional (would) — form, use, example:", type: "lines", lines: 3 },
        ],
      },
      // 89
      {
        type: "home-activity" as const,
        title: "Extended Project: Tense Through the Ages",
        instruction: "Over the next two weeks, investigate how tense is used across different historical periods and text types.",
        parentTip: "This project builds both grammatical knowledge and historical literacy. Working through it together over two weeks — rather than all at once — allows your child to reflect between stages.",
        suggestions: [
          "Find three short texts from very different eras: an ancient or classical text, a Victorian-era text and a modern text. Analyse the tense use in each and discuss: has the way English uses tense changed over time? How?",
          "Choose a historical event. Write about it three ways: as a past tense narrative, as a present tense dramatic monologue from the perspective of someone living it, and as a future tense prediction written by someone before the event. Share all three versions with a family member.",
          "Reflection: Write a one-page essay answering the question: 'Why does tense matter?' Use everything you have learned about tense in this worksheet to construct a clear, well-evidenced argument.",
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Five Tense Rules Every Writer Must Know",
        content: "1. Choose a base tense for each piece and stick to it unless you have a deliberate reason to shift. 2. Signal every deliberate tense shift with a clear time clue. 3. In literary analysis, always use the literary present tense. 4. In science and formal reports, use past for completed method, present for current findings. 5. In reported speech, backshift one tense: present becomes past, past becomes past perfect. These five rules will serve you through secondary school and beyond.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Reflection: My Tense Learning Journey",
        instruction: "Reflect on what you have learned about verb tenses throughout this worksheet. Answer each question thoughtfully.",
        prompts: [
          { text: "Which tense concept did you find most difficult? How did you work through it?", type: "lines", lines: 4 },
          { text: "Which tense concept was most new or surprising to you?", type: "lines", lines: 3 },
          { text: "How will you check for tense consistency in your own writing from now on?", type: "lines", lines: 3 },
          { text: "Name a text type you write regularly. What is the correct tense for that text type and why?", type: "lines", lines: 3 },
        ],
      },
      // 92
      {
        type: "multiple-choice" as const,
        title: "Mastery Check: Tense Application",
        instruction: "Apply your knowledge to each real-world writing scenario.",
        questions: [
          { prompt: "You are writing a recount of a bushwalk you did last weekend. Which tense family should you use?", options: ["Future tenses", "Past tenses (simple, continuous, perfect as needed)", "Present tenses only", "A mix of all tenses equally"], answer: "Past tenses (simple, continuous, perfect as needed)" },
          { prompt: "You are writing an information report about the water cycle for a science assignment. Which tense is most appropriate for describing how the water cycle works?", options: ["Future tense", "Simple past", "Simple present", "Past perfect"], answer: "Simple present" },
          { prompt: "You are discussing a theme in a novel you have been studying. What tense should you use to discuss the plot?", options: ["Simple past", "Literary present tense", "Future tense", "Past perfect"], answer: "Literary present tense" },
        ],
      },
      // 93
      {
        type: "sorting" as const,
        title: "Sort: Tense Errors in Student Writing",
        instruction: "A student made tense errors throughout their essay. Sort each sentence into the column that identifies the type of tense problem.",
        columns: ["Accidental tense shift", "Wrong tense for text type", "Inconsistent reported speech"],
        items: [
          { label: "In the novel, Pip wanted to become a gentleman, so he leaves his home. (literary present violated)" },
          { label: "The teacher said that the test is on Friday. (should be 'was')" },
          { label: "She ran towards the door and then looks back." },
          { label: "Scientists discovered that the Earth orbits the sun. (fact should be present)" },
          { label: "He told us he will be late. (should be 'would be')" },
          { label: "The children played happily until it suddenly starts raining." },
        ],
      },
      // 94
      {
        type: "circle-correct" as const,
        title: "Final Tense Challenge: Choose the Best Version",
        instruction: "Read each context and circle the sentence that uses tense most accurately and effectively.",
        questions: [
          { prompt: "For a science report conclusion:", options: ["The experiment showed that plants grow faster with more light.", "The experiment shows that plants grew faster with more light.", "The experiment shows that plants grow faster with more light."] },
          { prompt: "For a literary essay about a novel:", options: ["Atticus Finch defended Tom Robinson in court.", "Atticus Finch defends Tom Robinson in court and his courage inspires his children.", "Atticus Finch will defend Tom Robinson."] },
          { prompt: "For a historical recount:", options: ["In 1788, the First Fleet arrives in Sydney Cove.", "In 1788, the First Fleet arrived in Sydney Cove.", "In 1788, the First Fleet has arrived in Sydney Cove."] },
          { prompt: "For a persuasive essay about a current issue:", options: ["Climate change is threatening biodiversity worldwide.", "Climate change threatened biodiversity worldwide.", "Climate change will have threatened biodiversity."] },
        ],
      },
      // 95
      {
        type: "fill-in-blank" as const,
        title: "Mastery Fill-In: Mixed Tenses",
        instruction: "Fill in each blank with the most appropriate tense form based on the context clues.",
        sentences: [
          { text: "She _______ (study) for three years by the time she _______ (sit) the final exam.", blanks: ["had been studying", "sat"] },
          { text: "The report _______ (conclude) that schools _______ (benefit) from greater investment in libraries.", blanks: ["concludes", "benefit"] },
          { text: "When the storm _______ (hit), the team _______ (already, pack) their equipment.", blanks: ["hit", "had already packed"] },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Argument: Why Tense Matters in Communication",
        instruction: "Write a persuasive paragraph arguing why verb tense is one of the most important grammatical tools a writer has. Use specific examples to support your argument.",
        parentTip: "This task requires your child to synthesise everything they have learned. Encourage them to plan their argument before writing: what is their main claim? What three examples will they use as evidence?",
        prompts: [
          { text: "My persuasive paragraph:", type: "box", lines: 14 },
        ],
      },
      // 97
      {
        type: "multiple-choice" as const,
        title: "Tense in Spoken vs Written English",
        instruction: "Spoken and written English handle tense differently. Choose the best answer.",
        questions: [
          { prompt: "Which of the following is more typical of spoken English than written English?", options: ["Strict use of the literary present for discussing books", "Using simple past when present perfect would be more technically correct ('I already told you' instead of 'I have already told you')", "Careful use of passive voice", "Precise use of past perfect"], answer: "Using simple past when present perfect would be more technically correct ('I already told you' instead of 'I have already told you')" },
          { prompt: "Why might a skilled writer occasionally bend tense rules deliberately?", options: ["Because they do not know the rules", "To create a specific stylistic effect, such as immediacy or intimacy", "Because tense rules do not apply to creative writing", "To confuse the reader"], answer: "To create a specific stylistic effect, such as immediacy or intimacy" },
        ],
      },
      // 98
      {
        type: "home-activity" as const,
        title: "Tense Audit of Your Own Writing",
        instruction: "Apply everything you have learned to your own recent writing.",
        parentTip: "Reviewing their own past work with new eyes is one of the most powerful learning activities a student can do. Sit alongside your child for this one.",
        suggestions: [
          "Find three pieces of your own writing from the past month. Highlight every verb in each piece. Are the tenses consistent? Are there any accidental tense shifts? Make a list of every error you find.",
          "Choose the piece of writing with the most tense errors. Rewrite it in full, correcting all tense issues and improving the tense variety where appropriate.",
          "Write a one-page reflection on what you notice about your own tense habits. What are your most common errors? What will you do differently in your next piece of writing?",
        ],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Create a Tense Teaching Resource",
        instruction: "Create a one-page tense guide that could help a younger student understand the most important tense concepts. Include: a clear explanation of at least five tenses with examples, a common error to watch out for, and a simple checklist for editing tense in their own writing.",
        parentTip: "Teaching something to someone else is the deepest form of learning. If possible, have your child present this guide to a younger sibling or family member.",
        prompts: [
          { text: "My tense guide (write it below as if you are writing for a Year 3 student):", type: "box", lines: 20 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Tense Manifesto",
        content: "Write a one-page creative piece in which EVERY sentence begins with a different verb tense. You have approximately 12 common English tense forms to work with: simple present, present continuous, present perfect, present perfect continuous, simple past, past continuous, past perfect, past perfect continuous, simple future, future continuous, future perfect, and conditional. Label each tense at the beginning of its sentence. Can you make it read as a coherent piece of writing despite the tense changes? This is the ultimate tense mastery challenge.",
      },
    ],
  },
  {
    slug: "relative-clauses",
    title: "Relative Clauses",
    strand: "Language",
    description:
      "Use relative clauses with who, which and that to add detail and precision to sentences.",
    learningGuide: {
      concept:
        "A relative clause adds information about a noun using a relative pronoun — who (for people), which (for things), that (for people or things). A defining relative clause identifies which person or thing we mean. A non-defining relative clause adds extra information and is separated by commas.",
      activation:
        "Point to an object in the room and ask your child to describe it using who, which or that — for example, That is the chair which we bought last year. Practise with a few examples before starting the worksheet.",
      check:
        "After the worksheet, ask your child to write three sentences — one with who, one with which, one with that — about people or objects in their home.",
    },
    lesson: {
      title: "Adding the Detail",
      objective:
        "Identify and write defining and non-defining relative clauses using who, which and that.",
      materials: ["This worksheet", "A pencil"],
      intro: {
        title: "The Clause That Adds Information",
        script:
          "Here is a sentence: The dog barked. It gives us information, but which dog? We can add a relative clause: The dog that lives next door barked all night. Now we know exactly which dog. The relative clause — that lives next door — gives us the information we need to identify the noun. Relative clauses using who, which or that help us write precisely without needing two separate sentences.",
        action:
          "Write five simple sentences on paper. Ask your child to expand each one with a relative clause, choosing who, which or that appropriately.",
      },
      mainActivity: {
        title: "Defining vs Non-defining",
        script:
          "There are two types of relative clause. A defining clause tells us which specific person or thing we mean — we do not use commas. A non-defining clause adds extra information about something we have already identified — we use commas. Listen: My brother who lives in Brisbane is visiting — this implies I have more than one brother. My brother, who lives in Brisbane, is visiting — this implies I have one brother, and we are adding extra information about him. Can you hear the difference? The commas change the meaning completely.",
        action:
          "Say the two sentences above aloud and ask your child to explain what each implies about the number of brothers. Discuss two or three more examples.",
      },
      wrapUp: {
        title: "Sentence Expansion Race",
        script:
          "Let us have a race. I will say a simple sentence and you have 20 seconds to expand it with a relative clause. Ready? The scientist discovered a new planet. Go! Good — now your turn to give me a simple sentence to expand.",
        action:
          "Play three rounds each and review the relative clauses for correctness and whether commas were needed.",
      },
      parentTip:
        "During everyday conversation, occasionally rephrase a simple sentence into one with a relative clause and ask your child to notice. For example: We saw a koala at the park — I can also say: We saw a koala, which was sleeping in a eucalyptus tree, at the park.",
      extension:
        "Find five relative clauses in a novel or non-fiction book. Write them down, identify whether they are defining or non-defining, and explain how removing the clause changes the meaning.",
      resources: [
        {
          title: "Khan Academy — Relative Clauses",
          url: "https://www.khanacademy.org/ela/cc-5th-grade-reading-vocab/xe2c54a99ede11c03:grammar/xe2c54a99ede11c03:relative-clauses/e/relative-clauses",
          description: "Interactive exercises on relative clause construction.",
        },
        {
          title: "ReadWriteThink — Sentence Combining",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/sentence-combining-show-relationships",
          description:
            "Lesson on combining sentences using subordinate and relative clauses.",
        },
        {
          title: "ABC Education — Learn English",
          url: "https://www.abc.net.au/education/learn-english/",
          description:
            "Grammar and sentence structure resources from ABC Education.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "circle-correct" as const,
        title: "Choose Who, Which or That (Set A)",
        instruction: "Circle the correct relative pronoun to complete each sentence.",
        questions: [
          { prompt: "The scientist ___ discovered penicillin was Alexander Fleming.", options: ["who", "which", "what"] },
          { prompt: "The book ___ I borrowed from the library was fascinating.", options: ["who", "which", "what"] },
          { prompt: "The children ___ finished early were allowed to read.", options: ["which", "who", "what"] },
          { prompt: "The bridge ___ was built in 1932 is still standing.", options: ["who", "which", "what"] },
          { prompt: "Is this the dog ___ won the competition?", options: ["who", "that", "what"] },
        ],
      },
      // 2
      {
        type: "true-false" as const,
        title: "True or False: Relative Clause Basics",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "A relative clause adds information about a noun.", answer: true },
          { text: "'Who' is used as a relative pronoun for things.", answer: false },
          { text: "'Which' is used as a relative pronoun for things.", answer: true },
          { text: "'That' can be used for both people and things.", answer: true },
          { text: "A relative clause can stand alone as a complete sentence.", answer: false },
          { text: "Relative pronouns include who, which, that, whose and whom.", answer: true },
        ],
      },
      // 3
      {
        type: "matching" as const,
        title: "Match the Relative Pronoun to Its Use",
        instruction: "Draw a line to match each relative pronoun with its correct use.",
        parentTip: "Keep this rule simple: who = people, which = things, that = people or things (in defining clauses), whose = possession.",
        left: ["who", "which", "that", "whose", "where", "when"],
        right: [
          "Used for time (the year __ they met)",
          "Used for people",
          "Used for things, especially non-defining",
          "Used for possession (the girl __ cat is missing)",
          "Used for things or people in defining clauses",
          "Used for places",
        ],
      },
      // 4
      {
        type: "sorting" as const,
        title: "Sort: Defining or Non-defining? (Set A)",
        instruction: "Sort each sentence into the correct column. Defining relative clauses tell us which specific person or thing — no commas needed. Non-defining relative clauses add extra information — commas required.",
        parentTip: "A useful test: if you can remove the clause and still know which person or thing is meant, it is likely non-defining. If removing it makes the sentence unclear, it is defining.",
        columns: ["Defining (no commas)", "Non-defining (uses commas)"],
        items: [
          { label: "The car that is parked outside belongs to our neighbour." },
          { label: "My grandmother, who lives in Perth, is visiting next month." },
          { label: "The student who scored highest received a certificate." },
          { label: "The Great Barrier Reef, which stretches 2,300 km, is under threat." },
          { label: "Athletes who train daily improve faster than those who do not." },
          { label: "Our dog, which we rescued two years ago, loves the beach." },
        ],
      },
      // 5
      {
        type: "fill-in-blank" as const,
        title: "Fill in the Relative Pronoun (Set A)",
        instruction: "Fill in the blank with the correct relative pronoun: who, which, that, whose or where.",
        parentTip: "When your child is unsure, ask: Is the noun a person or a thing? Then apply the rule: person = who, thing = which or that.",
        sentences: [
          { text: "The book ___ I read last week was excellent.", blanks: ["that / which"] },
          { text: "The woman ___ gave us directions was very helpful.", blanks: ["who"] },
          { text: "The park ___ we used to play has been redeveloped.", blanks: ["where"] },
          { text: "I found the keys ___ were missing.", blanks: ["that / which"] },
          { text: "The student ___ work was chosen will receive a prize.", blanks: ["whose"] },
        ],
      },
      // 6
      {
        type: "open-response" as const,
        title: "Combine the Sentences (Set A)",
        instruction: "Combine each pair of sentences into one using a relative clause with who, which or that.",
        prompts: [
          { text: "1. The woman won the race. She had been training for a year.\nAnswer:", type: "lines", lines: 3 },
          { text: "2. The laptop belongs to my dad. It has a cracked screen.\nAnswer:", type: "lines", lines: 3 },
          { text: "3. The building was demolished last year. It used to be a cinema.\nAnswer:", type: "lines", lines: 3 },
          { text: "4. My neighbour keeps chickens. She gives us eggs every week.\nAnswer:", type: "lines", lines: 3 },
        ],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Does This Sentence Need Commas?",
        instruction: "Circle Yes (needs commas — non-defining) or No (no commas — defining) for each sentence.",
        questions: [
          { prompt: "The dog that bit the postman was taken to a vet.", options: ["Yes — add commas", "No — no commas needed"] },
          { prompt: "My sister who lives in Adelaide is a doctor.", options: ["Yes — add commas (if only one sister)", "No — no commas needed"] },
          { prompt: "The house that we lived in has been sold.", options: ["Yes — add commas", "No — no commas needed"] },
          { prompt: "Sydney which is Australia's largest city is on the east coast.", options: ["Yes — add commas", "No — no commas needed"] },
          { prompt: "Students who complete the extension task will earn a bonus point.", options: ["Yes — add commas", "No — no commas needed"] },
        ],
      },
      // 8
      {
        type: "open-response" as const,
        title: "Expand and Improve (Set A)",
        instruction: "Rewrite each simple sentence by adding a relative clause to make it more precise and interesting. Choose the correct relative pronoun and decide whether commas are needed.",
        parentTip: "Remind your child that a relative clause should add meaningful information. Ask: Does this clause help the reader understand more clearly?",
        prompts: [
          { text: "1. The explorer made an important discovery.\nExpanded:", type: "lines", lines: 3 },
          { text: "2. The library has a new reading room.\nExpanded:", type: "lines", lines: 3 },
          { text: "3. My teacher gave us extra homework.\nExpanded:", type: "lines", lines: 3 },
          { text: "4. The documentary was very interesting.\nExpanded:", type: "lines", lines: 3 },
        ],
      },
      // 9
      {
        type: "matching" as const,
        title: "Match: Which Relative Pronoun Is Used?",
        instruction: "Read each sentence. Draw a line to the relative pronoun used in it.",
        left: [
          "The house where I grew up has been painted.",
          "The year when she was born was very cold.",
          "The friend whose book I borrowed has moved away.",
          "The cat that climbed the tree refused to come down.",
          "My uncle, who is a chef, visited us last week.",
        ],
        right: ["that", "who", "whose", "where", "when"],
      },
      // 10
      {
        type: "fill-in-blank" as const,
        title: "Add the Missing Relative Clause",
        instruction: "Each sentence below is missing a relative clause. Fill in the blank with a suitable clause that adds meaningful detail.",
        sentences: [
          { text: "The teacher ___ had a calm, encouraging manner that everyone appreciated.", blanks: ["who taught Year 5"] },
          { text: "The book ___ was full of exciting adventures and unexpected twists.", blanks: ["that I borrowed"] },
          { text: "The park ___ was always full of families on weekends.", blanks: ["where we used to play"] },
          { text: "The scientist ___ received the Nobel Prize last year.", blanks: ["who made the discovery"] },
        ],
      },
      // 11
      {
        type: "circle-correct" as const,
        title: "Relative Pronoun or Something Else?",
        instruction: "In each sentence, decide whether the underlined word is used as a relative pronoun or in a different way.",
        questions: [
          { prompt: "The book THAT she read was excellent.", options: ["Relative pronoun", "Conjunction", "Demonstrative pronoun"] },
          { prompt: "WHAT he said surprised everyone.", options: ["Relative pronoun", "Interrogative pronoun", "Demonstrative pronoun"] },
          { prompt: "The scientist WHO won the prize was very humble.", options: ["Relative pronoun", "Interrogative pronoun", "Conjunction"] },
          { prompt: "WHICH way did they go?", options: ["Relative pronoun", "Interrogative adjective", "Conjunction"] },
          { prompt: "The letter WHICH arrived this morning was from overseas.", options: ["Relative pronoun", "Interrogative pronoun", "Conjunction"] },
        ],
      },
      // 12
      {
        type: "open-response" as const,
        title: "Write Your Own Relative Clauses (Set A)",
        instruction: "Write six sentences about people or places you know. Each sentence must contain a relative clause using who, which or that. Label each clause — D for defining or ND for non-defining.",
        prompts: [
          { text: "1.", type: "lines", lines: 2 },
          { text: "2.", type: "lines", lines: 2 },
          { text: "3.", type: "lines", lines: 2 },
          { text: "4.", type: "lines", lines: 2 },
          { text: "5.", type: "lines", lines: 2 },
          { text: "6.", type: "lines", lines: 2 },
        ],
      },
      // 13
      {
        type: "multiple-choice" as const,
        title: "Defining or Non-defining: What Changes?",
        instruction: "Read each pair of sentences. Answer the question about how the comma changes the meaning.",
        parentTip: "The comma rule for relative clauses is one of the most commonly misapplied punctuation rules in English. Spending time on it now will pay dividends in all future writing.",
        questions: [
          {
            prompt: "Sentence A: My brother who lives in Brisbane is a teacher.\nSentence B: My brother, who lives in Brisbane, is a teacher.\nWhat does the comma in Sentence B imply?",
            options: ["The speaker has only one brother and is adding extra information about him", "The speaker has more than one brother and is specifying which one", "There is no difference in meaning", "The comma is a grammar error"],
            answer: "The speaker has only one brother and is adding extra information about him",
          },
          {
            prompt: "Which sentence implies the speaker has more than one sister?",
            options: ["My sister, who works as a nurse, visited us.", "My sister who works as a nurse visited us."],
            answer: "My sister who works as a nurse visited us.",
          },
        ],
      },
      // 14
      {
        type: "sequence" as const,
        title: "Build a Sentence with a Relative Clause",
        instruction: "Rearrange each set of words and phrases into a grammatically correct sentence containing a relative clause.",
        items: [
          { label: "the dog / that / barked all night / belongs to / our new neighbours" },
          { label: "the painting / which / hangs in the hall / was / a gift from my grandmother" },
          { label: "the student / who / studied hardest / won / the science prize" },
          { label: "Mount Kosciuszko / which / is the highest peak in Australia / is in / New South Wales" },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: The Comma Test for Relative Clauses",
        content: "Here is a quick test to decide if commas are needed in a relative clause. Try removing the clause. If the sentence still makes complete sense and refers to a specific noun, use commas (non-defining). If removing the clause makes the sentence vague or unclear, no commas are needed (defining). Example: 'My cat, which is orange, loves tuna' — you know which cat (there is only one), so commas are needed. 'The cat that lives next door is friendly' — removing 'that lives next door' makes it unclear which cat, so no commas.",
      },
      // 16
      {
        type: "fill-in-blank" as const,
        title: "Relative Pronouns: Whose and Where",
        instruction: "Fill in the blank with whose or where.",
        sentences: [
          { text: "The girl ___ dog won first prize was very proud.", blanks: ["whose"] },
          { text: "The town ___ I was born is small but beautiful.", blanks: ["where"] },
          { text: "The author ___ book became a film is Australian.", blanks: ["whose"] },
          { text: "The restaurant ___ we had lunch last year has closed down.", blanks: ["where"] },
          { text: "He is the kind of person ___ generosity inspires everyone around him.", blanks: ["whose"] },
        ],
      },
      // 17
      {
        type: "sorting" as const,
        title: "Sort: Who, Which, That, Whose or Where?",
        instruction: "Sort each sentence into the column that shows which relative pronoun would complete it.",
        columns: ["who", "which", "that / who", "whose", "where"],
        items: [
          { label: "The teacher ___ taught me Year 4 was very patient." },
          { label: "The letter ___ arrived this morning was from the school." },
          { label: "The park ___ we walk our dog is nearby." },
          { label: "The child ___ painting won first prize was delighted." },
          { label: "That is the film ___ won three awards." },
          { label: "The city ___ she was born has changed a lot." },
          { label: "The player ___ scored the winning goal celebrated with her team." },
          { label: "Australia, ___ has a unique biodiversity, is home to many native species." },
        ],
      },
      // 18
      {
        type: "open-response" as const,
        title: "Relative Clauses in Descriptive Writing",
        instruction: "Write a descriptive paragraph (6 to 8 sentences) about a place you know well — your home, your local park, your favourite room. Include at least three relative clauses. Label each one in the margin.",
        prompts: [
          { text: "My place:", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "box", lines: 14 },
        ],
      },
      // 19
      {
        type: "true-false" as const,
        title: "True or False: Relative Clauses in Use",
        instruction: "Circle True or False.",
        statements: [
          { text: "Defining relative clauses are enclosed by commas.", answer: false },
          { text: "You can use 'that' in non-defining relative clauses.", answer: false },
          { text: "The relative pronoun can sometimes be omitted in defining clauses when it is the object.", answer: true },
          { text: "'Whose' is used to show possession in a relative clause.", answer: true },
          { text: "'Where' can be used as a relative pronoun to refer to a place.", answer: true },
          { text: "A non-defining relative clause changes which person or thing we are talking about.", answer: false },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Relative Clause Challenge",
        content: "Open any novel to a random page and find five sentences that contain relative clauses. For each one: write the sentence, underline the clause, identify the relative pronoun used, and decide if it is defining or non-defining. Then write your own five sentences on the same topic as the book, each containing a different type of relative clause. Can you use all five relative pronouns — who, which, that, whose, where — at least once?",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "multiple-choice" as const,
        title: "Omitting the Relative Pronoun",
        instruction: "In defining relative clauses, the relative pronoun can sometimes be omitted when it is the object of the clause. Identify which sentences allow omission.",
        parentTip: "The pronoun can be dropped only when it is the object of the relative clause, not the subject. 'The book that I read' → 'The book I read' (pronoun is object). 'The book that won the prize' — cannot drop 'that' (it is the subject).",
        questions: [
          { prompt: "Can you omit the relative pronoun? 'The letter that I wrote was never sent.'", options: ["Yes — 'The letter I wrote was never sent.'", "No — the pronoun must stay"], answer: "Yes — 'The letter I wrote was never sent.'" },
          { prompt: "Can you omit the relative pronoun? 'The scientist who discovered penicillin was Fleming.'", options: ["Yes", "No — 'who' is the subject of the clause"], answer: "No — 'who' is the subject of the clause" },
          { prompt: "Can you omit the relative pronoun? 'The film that we watched last night was brilliant.'", options: ["Yes — 'The film we watched last night was brilliant.'", "No — the pronoun must stay"], answer: "Yes — 'The film we watched last night was brilliant.'" },
        ],
      },
      // 22
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses with Whom",
        instruction: "Fill in the blank with who or whom. Use whom when the relative pronoun is the object of the clause.",
        parentTip: "A simple test: replace the relative pronoun with he/she (→ use who) or him/her (→ use whom). 'The person who/whom I admire' — I admire him → whom.",
        sentences: [
          { text: "The author ___ I most admire is Jane Austen.", blanks: ["whom"] },
          { text: "The teacher ___ taught me most was Mr Carlisle.", blanks: ["who"] },
          { text: "The volunteer ___ we thanked was deeply moved.", blanks: ["whom"] },
          { text: "The scientist ___ won the Nobel Prize gave a speech.", blanks: ["who"] },
        ],
      },
      // 23
      {
        type: "open-response" as const,
        title: "Combine Four Sentences Using Relative Clauses",
        instruction: "Combine these four short sentences into one or two longer, fluent sentences using relative clauses. You may use any relative pronoun.",
        prompts: [
          {
            text: "The ancient library was built in 1890. It stood on the corner of King Street. Many famous writers studied there. It was demolished last year.\n\nCombined:",
            type: "box",
            lines: 6,
          },
          {
            text: "Our science teacher is Mrs Hadley. She studied at Melbourne University. She wrote a book about native birds. The book was awarded a prize.\n\nCombined:",
            type: "box",
            lines: 6,
          },
        ],
      },
      // 24
      {
        type: "sorting" as const,
        title: "Sort: Relative Clause Position",
        instruction: "A relative clause can appear in different positions in a sentence. Sort each sentence by where the relative clause appears.",
        columns: ["Clause after the subject noun", "Clause after the object noun", "Clause after a preposition phrase"],
        items: [
          { label: "The girl who won the race trained every day." },
          { label: "I gave the trophy to the student who worked hardest." },
          { label: "She lived in the house that stood at the end of the lane." },
          { label: "The dog that barked all night finally fell asleep." },
          { label: "He handed the envelope to the person whose name was written on it." },
          { label: "We visited the museum where the exhibition was held." },
        ],
      },
      // 25
      {
        type: "open-response" as const,
        title: "Relative Clauses and Sentence Variety",
        instruction: "Rewrite this passage to add at least four relative clauses. The passage should become more detailed and precise. Label each relative clause you add.",
        parentTip: "Adding relative clauses is one of the most effective ways to increase sentence complexity without losing clarity. Read the finished passage aloud to check it flows well.",
        prompts: [
          {
            text: "ORIGINAL PASSAGE:\nThe bakery is on Main Street. It is run by a woman. She bakes bread early every morning. The bread sells out by nine o'clock. The bakery has a cat. It sleeps in the window.\n\nRewritten passage with relative clauses:",
            type: "box",
            lines: 12,
          },
        ],
      },
      // 26
      {
        type: "true-false" as const,
        title: "True or False: Using Relative Clauses Well",
        instruction: "Circle True or False.",
        statements: [
          { text: "Overusing relative clauses can make sentences too long and hard to follow.", answer: true },
          { text: "A relative clause always comes immediately after the noun it modifies.", answer: true },
          { text: "You can use a relative clause to replace an entire sentence.", answer: true },
          { text: "Relative clauses improve writing only in formal texts.", answer: false },
          { text: "A well-placed relative clause can eliminate the need for a separate sentence.", answer: true },
          { text: "Non-defining relative clauses are more common in spoken English than written English.", answer: true },
        ],
      },
      // 27
      {
        type: "circle-correct" as const,
        title: "Choose Who, Which or That (Set B)",
        instruction: "Circle the correct relative pronoun.",
        questions: [
          { prompt: "Australia is a country ___ has a unique range of wildlife.", options: ["who", "which", "what"] },
          { prompt: "The surgeon ___ operated on her was highly experienced.", options: ["which", "who", "what"] },
          { prompt: "They stayed in a hotel ___ had a rooftop pool.", options: ["who", "which", "what"] },
          { prompt: "She is the type of person ___ always makes time for others.", options: ["which", "who", "what"] },
          { prompt: "Is this the road ___ leads to the lighthouse?", options: ["who", "that", "what"] },
          { prompt: "The reason ___ she was late is still unclear.", options: ["why", "which", "who"] },
        ],
      },
      // 28
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses with Prepositions",
        instruction: "Some relative clauses use a preposition before the relative pronoun. Fill in the blank with the correct preposition + relative pronoun combination.",
        sentences: [
          { text: "The company ___ I work has recently expanded. (for which / that I work for)", blanks: ["for which"] },
          { text: "The friend ___ I told you has moved to Perth. (of whom / that I told you about)", blanks: ["of whom"] },
          { text: "The issue ___ they were debating was resolved. (about which / that they were debating)", blanks: ["about which"] },
          { text: "The teacher ___ she had the most respect was kind and patient. (for whom)", blanks: ["for whom"] },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Relative Clauses in Information Writing",
        instruction: "Write a short informational paragraph (6 to 8 sentences) about an animal, a historical figure or a natural landmark. Include at least three relative clauses. Your relative clauses must add genuinely useful information.",
        parentTip: "Information writing with relative clauses reads more fluidly than lists of short sentences. Compare a version with relative clauses to the original short-sentence version to show the difference.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "box", lines: 12 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Relative Clauses and Sentence Complexity",
        content: "One of the easiest ways to make your writing sound more mature is to combine short sentences using relative clauses. 'Mary Shelley wrote Frankenstein. She was only eighteen when she wrote it.' These two sentences can become: 'Mary Shelley, who was only eighteen when she wrote it, created Frankenstein.' One sentence, more information, better flow. Practise combining at least five pairs of simple sentences every week.",
      },
      // 31
      {
        type: "multiple-choice" as const,
        title: "Identify the Error in the Relative Clause",
        instruction: "Each sentence contains an error in the relative clause. Choose the correct version.",
        questions: [
          { prompt: "ERROR: The dog which is next door always barks at night.", options: ["The dog who is next door always barks at night.", "The dog that is next door always barks at night.", "The dog which, is next door, always barks at night."], answer: "The dog that is next door always barks at night." },
          { prompt: "ERROR: My sister, which is a nurse, works night shifts.", options: ["My sister, who is a nurse, works night shifts.", "My sister who is a nurse works night shifts.", "My sister that is a nurse works night shifts."], answer: "My sister, who is a nurse, works night shifts." },
          { prompt: "ERROR: The town which I was born is very small.", options: ["The town where I was born is very small.", "The town that I was born is very small.", "The town who I was born is very small."], answer: "The town where I was born is very small." },
        ],
      },
      // 32
      {
        type: "sorting" as const,
        title: "Sort: Correct or Incorrect Use of Relative Pronoun?",
        instruction: "Sort each sentence into the correct column.",
        columns: ["Correct", "Incorrect — wrong relative pronoun"],
        items: [
          { label: "The scientist which discovered penicillin was Fleming." },
          { label: "The scientist who discovered penicillin was Fleming." },
          { label: "The city where she was born has changed a lot." },
          { label: "The city which she was born has changed a lot." },
          { label: "The student whose work won the prize was delighted." },
          { label: "The student which work won the prize was delighted." },
        ],
      },
      // 33
      {
        type: "open-response" as const,
        title: "Correct the Relative Clause Errors",
        instruction: "Each sentence below has an error in its relative clause. Identify the error and rewrite the correct sentence.",
        parentTip: "Identifying and explaining errors is harder than writing correctly from scratch — it requires metalinguistic awareness. Praise careful reasoning.",
        prompts: [
          { text: "1. The house which my grandparents live is on a hill.\nError: _______________\nCorrected:", type: "lines", lines: 3 },
          { text: "2. The student which won the prize was very surprised.\nError: _______________\nCorrected:", type: "lines", lines: 3 },
          { text: "3. She is a person who's ideas are always interesting.\nError: _______________\nCorrected:", type: "lines", lines: 3 },
          { text: "4. The film, that we saw last week, was brilliant.\nError: _______________\nCorrected:", type: "lines", lines: 3 },
        ],
      },
      // 34
      {
        type: "fill-in-blank" as const,
        title: "Complete the Non-defining Relative Clause",
        instruction: "Complete each non-defining relative clause by adding suitable information. Remember to use commas correctly.",
        sentences: [
          { text: "My favourite book, ___, has been made into a film.", blanks: ["which I have read three times"] },
          { text: "Our science teacher, ___, has won several teaching awards.", blanks: ["who has a PhD in biology"] },
          { text: "The Sydney Opera House, ___, is one of Australia's most recognisable landmarks.", blanks: ["which was completed in 1973"] },
          { text: "My next-door neighbour, ___, always brings us produce from her garden.", blanks: ["who grows her own vegetables"] },
        ],
      },
      // 35
      {
        type: "open-response" as const,
        title: "Relative Clauses in a Persuasive Argument",
        instruction: "Write a persuasive paragraph (6 to 8 sentences) arguing for or against a cause you care about. Include at least three relative clauses to add precision and detail to your argument.",
        parentTip: "Relative clauses in persuasive writing allow writers to pack precise, relevant detail into their arguments without writing very long sentences. They signal a sophisticated writer.",
        prompts: [
          { text: "My argument (for or against what?):", type: "lines", lines: 1 },
          { text: "My persuasive paragraph:", type: "box", lines: 12 },
          { text: "Relative clauses I used (underline in your paragraph and list here):", type: "lines", lines: 3 },
        ],
      },
      // 36
      {
        type: "multiple-choice" as const,
        title: "Which Relative Clause Is More Precise?",
        instruction: "Read each pair of sentences. Choose the one that uses a relative clause more precisely and effectively.",
        questions: [
          { prompt: "Which is more precise?", options: ["The man came to the door. He was wearing a coat.", "The man who came to the door was wearing a heavy navy coat."] },
          { prompt: "Which flows better as one sentence?", options: ["She is a person who works hard and she always helps others.", "She is a person who works hard and always helps others."] },
          { prompt: "Which relative clause adds more useful information?", options: ["The town, which exists, has a market.", "The town, which dates back to the 1860s, hosts a weekly market."] },
        ],
      },
      // 37
      {
        type: "true-false" as const,
        title: "True or False: Relative Clauses in Different Text Types",
        instruction: "Circle True or False.",
        statements: [
          { text: "Relative clauses are used only in formal writing.", answer: false },
          { text: "In spoken English, people often use 'that' where formal grammar requires 'who'.", answer: true },
          { text: "News articles often use defining relative clauses to identify specific people and places.", answer: true },
          { text: "Adding too many relative clauses to a single sentence always improves it.", answer: false },
          { text: "Non-defining relative clauses are more common in written than spoken English.", answer: true },
          { text: "A relative clause can be used to define, identify, or add background information about a noun.", answer: true },
        ],
      },
      // 38
      {
        type: "open-response" as const,
        title: "Spot and Collect: Relative Clauses in Published Texts",
        instruction: "Find five relative clauses in newspapers, non-fiction books or novels. Copy each sentence, underline the relative clause, and identify whether it is defining or non-defining.",
        prompts: [
          { text: "1. Source and sentence (with clause underlined), defining or non-defining:", type: "lines", lines: 3 },
          { text: "2.", type: "lines", lines: 3 },
          { text: "3.", type: "lines", lines: 3 },
          { text: "4.", type: "lines", lines: 3 },
          { text: "5.", type: "lines", lines: 3 },
        ],
      },
      // 39
      {
        type: "circle-correct" as const,
        title: "Punctuate the Relative Clause Correctly",
        instruction: "Read each sentence. Circle the correctly punctuated version.",
        questions: [
          { prompt: "Choose the correctly punctuated version:", options: ["The Eiffel Tower which is in Paris attracts millions of tourists.", "The Eiffel Tower, which is in Paris, attracts millions of tourists."] },
          { prompt: "Choose the correctly punctuated version:", options: ["Students, who study regularly, tend to perform better.", "Students who study regularly tend to perform better."] },
          { prompt: "Choose the correctly punctuated version:", options: ["The car that I drive needs a service.", "The car, that I drive, needs a service."] },
          { prompt: "Choose the correctly punctuated version:", options: ["My grandfather, who was born in 1942, still loves cricket.", "My grandfather who was born in 1942 still loves cricket."] },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Art of the Long Sentence",
        content: "Some of the most beautiful sentences in English literature contain multiple relative clauses. Find a sentence in any novel that contains at least two relative clauses. Copy it out, label each clause, and analyse why the author chose to build such a complex sentence rather than writing several short ones. Then write your own complex sentence — at least 40 words long — containing three relative clauses. Read it aloud and revise until it flows naturally.",
      },
      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────
      // 41
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses Across Text Types",
        instruction: "Complete each sentence with a suitable relative clause. Match the style to the text type given.",
        sentences: [
          { text: "(Formal report) The data, ___, suggests a significant improvement.", blanks: ["which was collected over six months"] },
          { text: "(Narrative) The old house ___ stood at the end of the road had dark, shuttered windows.", blanks: ["that / which"] },
          { text: "(Persuasive essay) Students ___ participate in regular physical activity perform better academically.", blanks: ["who"] },
          { text: "(News article) The councillor, ___, announced a new community grant.", blanks: ["who chairs the planning committee"] },
        ],
      },
      // 42
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses vs Participial Phrases",
        instruction: "A participial phrase can sometimes replace a relative clause. Choose the correct alternative.",
        parentTip: "Participial phrases (-ing or -ed) can be elegant alternatives to relative clauses. 'The dog that was barking' → 'The barking dog'. Introducing this variation expands your child's stylistic options.",
        questions: [
          { prompt: "Which participial phrase replaces 'the letter that was written in haste'?", options: ["The writing letter", "The letter written in haste", "The letter that writes in haste"], answer: "The letter written in haste" },
          { prompt: "Which participial phrase replaces 'the child who was crying in the corner'?", options: ["The crying child in the corner", "The child cried in the corner", "The child who cries"], answer: "The crying child in the corner" },
          { prompt: "Which relative clause does 'the award-winning scientist' expand to?", options: ["The scientist who was awarded", "The scientist who won the award", "The scientist whose award"], answer: "The scientist who won the award" },
        ],
      },
      // 43
      {
        type: "open-response" as const,
        title: "Transform: Relative Clause to Participial Phrase",
        instruction: "Rewrite each sentence by replacing the relative clause with a participial phrase. Discuss with your parent whether the new version sounds better, worse or just different.",
        parentTip: "There is no single right answer here — the goal is awareness of stylistic choice. Both versions may be equally correct; the question is which is more appropriate for the context.",
        prompts: [
          { text: "1. The dog that was barking at the gate finally quietened down.\nParticipial phrase version:", type: "lines", lines: 2 },
          { text: "2. The student who had passed the exam was congratulated.\nParticipial phrase version:", type: "lines", lines: 2 },
          { text: "3. The house that was built in the 1920s is now a heritage site.\nParticipial phrase version:", type: "lines", lines: 2 },
          { text: "4. The team that was training for the championships worked incredibly hard.\nParticipial phrase version:", type: "lines", lines: 2 },
        ],
      },
      // 44
      {
        type: "sorting" as const,
        title: "Sort: Relative Clause or Participial Phrase?",
        instruction: "Sort each sentence modifier into the correct column.",
        columns: ["Relative clause (who/which/that/whose/where)", "Participial phrase (-ing or -ed)"],
        items: [
          { label: "...who discovered the vaccine..." },
          { label: "...covered in mud..." },
          { label: "...which was awarded a prize..." },
          { label: "...running towards the finish line..." },
          { label: "...whose research changed medicine..." },
          { label: "...exhausted after the long journey..." },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Avoiding the 'Dangling Relative Clause'",
        content: "A relative clause must be placed immediately after the noun it modifies. If it is separated from its noun, the meaning becomes unclear or even absurd. For example: 'She gave the book to her friend that she had read twice' — this implies the friend was read twice! The correct version is: 'She gave her friend the book that she had read twice.' Always check: is my relative clause right next to the noun it describes?",
      },
      // 46
      {
        type: "circle-correct" as const,
        title: "Misplaced Relative Clause: Find the Error",
        instruction: "Each sentence has a misplaced relative clause. Circle the version that corrects it.",
        questions: [
          { prompt: "ERROR: I found a coin in the park that was very old.", options: ["I found a very old coin in the park.", "I found a coin that was very old in the park.", "In the park, I found a coin that was very old."] },
          { prompt: "ERROR: She bought a vase from the antique shop which was cracked.", options: ["From the antique shop, she bought a vase which was cracked.", "She bought a cracked vase from the antique shop.", "She bought a vase which was cracked from the antique shop."] },
          { prompt: "ERROR: He gave the medal to his father, who had worked so hard, at the ceremony.", options: ["He gave the medal, which his father had worked so hard for, to him at the ceremony.", "At the ceremony, he gave the medal to his father, who had worked so hard.", "He gave his father, who had worked so hard, the medal at the ceremony."] },
        ],
      },
      // 47
      {
        type: "open-response" as const,
        title: "Fix the Misplaced Relative Clauses",
        instruction: "Rewrite each sentence to fix the misplaced relative clause so the meaning is clear.",
        prompts: [
          { text: "1. She gave a cake to her teacher that was covered in chocolate.\nFixed:", type: "lines", lines: 2 },
          { text: "2. I saw a dog in the street which had only three legs.\nFixed:", type: "lines", lines: 2 },
          { text: "3. He lent his umbrella to a stranger that he never saw again.\nFixed:", type: "lines", lines: 2 },
          { text: "4. We watched a film about a scientist which lasted three hours.\nFixed:", type: "lines", lines: 2 },
        ],
      },
      // 48
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses in Literature",
        instruction: "Read each sentence from a published text. Answer the question about the relative clause.",
        questions: [
          { prompt: "Sentence: 'It was the best of times, it was the worst of times... it was the spring of hope, it was the winter of despair...' (Dickens) — What grammatical feature does 'It was the spring of hope' use that is related to relative clause structure?", options: ["Defining relative clause", "Metaphor used as an appositive (noun phrase describing a noun)", "Non-defining relative clause", "Conditional clause"], answer: "Metaphor used as an appositive (noun phrase describing a noun)" },
          { prompt: "Sentence: 'The old man, whose hands were brown and weathered, sat at the window.' What type of relative clause is 'whose hands were brown and weathered'?", options: ["Defining", "Non-defining", "Neither — it is a participial phrase", "A conditional clause"], answer: "Non-defining" },
        ],
      },
      // 49
      {
        type: "true-false" as const,
        title: "True or False: Relative Clauses at Higher Level",
        instruction: "Circle True or False.",
        statements: [
          { text: "Stacking too many relative clauses in one sentence is usually considered poor style.", answer: true },
          { text: "A reduced relative clause is a full relative clause that has been shortened (e.g. 'the book written by her' instead of 'the book that was written by her').", answer: true },
          { text: "Relative clauses can never be used to describe time or reason.", answer: false },
          { text: "The relative pronoun 'why' can be used to describe a reason: 'the reason why she left'.", answer: true },
          { text: "In very formal English, 'whom' is still widely used as the object form of 'who'.", answer: true },
          { text: "Misplacing a relative clause can completely change the meaning of a sentence.", answer: true },
        ],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Write a Character Description Using Relative Clauses",
        instruction: "Write a character description of a person you invent or know. The description should be 8 to 10 sentences long and include at least four relative clauses — at least two defining and at least two non-defining. Label each one in the margin.",
        parentTip: "Character descriptions are an excellent context for relative clauses: 'She was the kind of person who never forgot a birthday...' 'Her house, which she had inherited from her grandmother, was full of books...'",
        prompts: [
          { text: "My character:", type: "box", lines: 16 },
        ],
      },
      // ── CONSOLIDATING continued 51–80 ─────────────────────────────────────
      // 51
      {
        type: "sorting" as const,
        title: "Sort: Relative Clause or Subordinate Clause?",
        instruction: "Sort each underlined clause into the correct column.",
        columns: ["Relative clause (introduced by relative pronoun)", "Subordinate clause (introduced by conjunction: because, although, if, when, etc.)"],
        items: [
          { label: "The student who studied every day passed the test." },
          { label: "She passed the test because she studied every day." },
          { label: "The book which she read changed her life." },
          { label: "Although it was raining, they went for a walk." },
          { label: "The park where they used to play has been redeveloped." },
          { label: "If she studies hard, she will succeed." },
        ],
      },
      // 52
      {
        type: "fill-in-blank" as const,
        title: "Embed Relative Clauses into Complex Sentences",
        instruction: "Expand each kernel sentence into a complex sentence by adding both a relative clause AND a subordinate clause.",
        sentences: [
          { text: "The scientist ___ (relative clause) announced new findings ___ (subordinate clause).", blanks: ["who led the research", "although they were controversial"] },
          { text: "The library ___ (relative clause) was closed for renovation ___ (subordinate clause).", blanks: ["which stood on King Street", "because the roof needed repairs"] },
        ],
      },
      // 53
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses in Formal Writing",
        instruction: "In formal writing, certain conventions apply to relative clauses. Choose the most appropriate version for each formal context.",
        parentTip: "In formal writing, 'which' is preferred over 'that' for non-defining clauses, and 'whom' is used as the object form of 'who'. Knowing these conventions gives your child an edge in formal assessments.",
        questions: [
          { prompt: "Formal academic writing — which is more appropriate?", options: ["The study that was conducted by Smith found...", "The study, which was conducted by Smith, found..."] },
          { prompt: "Which version is most formal?", options: ["The person that I was speaking to agreed.", "The person with whom I was speaking agreed.", "The person who I spoke to agreed."] },
          { prompt: "Which uses the correct relative pronoun for a thing in formal writing?", options: ["The policy which the government introduced has been effective.", "The policy that the government introduced has been effective.", "Both are acceptable in formal writing"], answer: "Both are acceptable in formal writing" },
        ],
      },
      // 54
      {
        type: "open-response" as const,
        title: "Relative Clauses and Sentence Rhythm",
        instruction: "Read these two versions of the same paragraph. Then answer the analysis questions.",
        prompts: [
          {
            text: "VERSION A (no relative clauses):\nThe museum was built in 1895. It stands on Flinders Street. It houses over 10,000 artefacts. These artefacts document the history of Victoria. The curator is a woman. She has worked there for thirty years.\n\nVERSION B (with relative clauses):\nThe museum, which was built in 1895, stands on Flinders Street and houses over 10,000 artefacts that document the history of Victoria. The curator, who has worked there for thirty years, oversees the entire collection.\n\n1. Which version is easier to read and why?",
            type: "lines",
            lines: 4,
          },
          { text: "2. How many relative clauses are in Version B? List them.", type: "lines", lines: 3 },
          { text: "3. Are the relative clauses in Version B defining or non-defining? Explain.", type: "lines", lines: 3 },
        ],
      },
      // 55
      {
        type: "circle-correct" as const,
        title: "Choose the Best Relative Clause for the Context",
        instruction: "Read each sentence. Circle the relative clause that best completes it in terms of precision, relevance and style.",
        questions: [
          { prompt: "The award was given to the student ___.", options: ["who was nice", "who demonstrated exceptional creativity and commitment throughout the year", "that existed"] },
          { prompt: "The new park, ___, has become a popular community gathering space.", options: ["which is green", "which replaced a former industrial site, has been planted with native species and", "which is outside"] },
          { prompt: "She consulted a specialist ___ before making a final decision.", options: ["who was there", "who had published extensively on the topic", "that she liked"] },
        ],
      },
      // 56
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses and Appositives",
        instruction: "An appositive is a noun phrase that renames or describes a nearby noun — similar to a non-defining relative clause. Convert each appositive into a non-defining relative clause.",
        sentences: [
          { text: "Marie Curie, a pioneering scientist, won two Nobel Prizes.\nConverted (use 'who'): Marie Curie, _______, won two Nobel Prizes.", blanks: ["who was a pioneering scientist"] },
          { text: "The Great Wall, a 21,000 km fortification, was built over many centuries.\nConverted (use 'which'): The Great Wall, _______, was built over many centuries.", blanks: ["which stretches over 21,000 km"] },
        ],
      },
      // 57
      {
        type: "open-response" as const,
        title: "Relative Clauses in an Analytical Essay Paragraph",
        instruction: "Write a formal analytical paragraph (6 to 8 sentences) about a topic you have studied. Use at least three relative clauses to add precision and detail. Aim for the kind of sentence complexity expected at secondary school level.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My analytical paragraph:", type: "box", lines: 14 },
          { text: "Relative clauses I used (list them):", type: "lines", lines: 3 },
        ],
      },
      // 58
      {
        type: "multiple-choice" as const,
        title: "Relative Clause vs Appositive: What Is the Difference?",
        instruction: "Choose the best answer for each question.",
        questions: [
          { prompt: "What is an appositive?", options: ["A type of verb form", "A noun phrase that renames or describes the noun beside it", "A clause introduced by a relative pronoun", "A type of adverb"], answer: "A noun phrase that renames or describes the noun beside it" },
          { prompt: "Which sentence uses an appositive (not a relative clause)?", options: ["The river, which flows through the city, is often flooded.", "The river, Australia's longest waterway, flows through the city.", "The river that flows through the city is often flooded."], answer: "The river, Australia's longest waterway, flows through the city." },
          { prompt: "What do relative clauses and appositives have in common?", options: ["Both must use relative pronouns", "Both can add non-essential information about a noun, set off by commas", "Both must be defining", "Neither can be used in formal writing"], answer: "Both can add non-essential information about a noun, set off by commas" },
        ],
      },
      // 59
      {
        type: "true-false" as const,
        title: "True or False: Relative Clauses Mastery Check",
        instruction: "Circle True or False.",
        statements: [
          { text: "You can use 'that' in a non-defining relative clause.", answer: false },
          { text: "In very formal or literary English, 'whom' is correct when the relative pronoun is the object.", answer: true },
          { text: "A reduced relative clause often uses a past participle: 'the book written by her'.", answer: true },
          { text: "A relative clause and its noun must always appear in the same sentence.", answer: true },
          { text: "Participial phrases are completely unrelated to relative clauses.", answer: false },
          { text: "In informal speech, people often drop the relative pronoun: 'The book I read was great'.", answer: true },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Tip: Relative Clauses as a Sentence Variety Tool",
        content: "Skilled writers vary their sentence structures deliberately. If you notice that all your sentences begin with the subject followed by a verb, try starting with a relative clause or embedding one in the middle of a sentence. For example: 'The explorer, who had spent three years in the jungle, finally returned home' starts with the noun but creates interest by nesting information inside. Variety in sentence structure is one of the most important features of sophisticated writing.",
      },
      // 61 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Relative Clause Investigation",
        content: "Investigate how relative clauses are used differently in news writing, literary fiction and academic writing. Find one paragraph from each text type. In each paragraph, highlight every relative clause and count them. Write a short report (one page) comparing: the frequency of relative clauses in each text type, whether defining or non-defining clauses are more common in each, and what this tells us about the purpose and audience of each text type.",
      },
      // 62
      {
        type: "open-response" as const,
        title: "Write Using All Five Relative Pronouns",
        instruction: "Write a paragraph of 8 to 10 sentences on any topic. In your paragraph, use all five relative pronouns at least once: who, which, that, whose, where. Underline each relative pronoun.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "box", lines: 14 },
          { text: "Which pronoun was hardest to use naturally? Why?", type: "lines", lines: 2 },
        ],
      },
      // 63
      {
        type: "sorting" as const,
        title: "Sort: Sentence Complexity Level",
        instruction: "Sort each sentence from least to most complex based on its use of relative clauses and other embedded information.",
        columns: ["Simple (no embedded clauses)", "Moderate (one relative clause)", "Complex (two or more embedded clauses)"],
        items: [
          { label: "The dog barked." },
          { label: "The dog that lives next door barked all night." },
          { label: "The dog, which belongs to our neighbour who recently moved in, barked all night despite the cold." },
          { label: "She read." },
          { label: "She read the book that won the prize." },
          { label: "She read the book that won the Booker Prize, which is awarded annually to the best novel published in English." },
        ],
      },
      // 64
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses in Scientific Writing",
        instruction: "Science writing often uses relative clauses to define and classify. Fill in the correct relative pronoun for each sentence.",
        sentences: [
          { text: "A mammal is an animal ___ is warm-blooded and feeds its young on milk.", blanks: ["that / which"] },
          { text: "The stratosphere, ___ lies above the troposphere, contains the ozone layer.", blanks: ["which"] },
          { text: "Scientists ___ study marine biology often work in remote coastal locations.", blanks: ["who"] },
          { text: "The reef ecosystem, ___ biodiversity is remarkable, supports thousands of species.", blanks: ["whose"] },
          { text: "A black hole is a region of space ___ gravity is so strong that even light cannot escape.", blanks: ["where"] },
        ],
      },
      // 65
      {
        type: "circle-correct" as const,
        title: "Formal vs Informal: Which Relative Clause Form?",
        instruction: "Circle the more formal version of each relative clause.",
        questions: [
          { prompt: "Which is more formal?", options: ["The person that I was talking to agreed.", "The person to whom I was speaking agreed."] },
          { prompt: "Which is more formal?", options: ["The policy which the council introduced was controversial.", "The policy that the council brought in was controversial."] },
          { prompt: "Which is more formal?", options: ["The researcher who wrote the report also led the study.", "The researcher that did the report also ran the study."] },
          { prompt: "Which is more formal for academic writing?", options: ["The issue which researchers have studied is complex.", "The issue that researchers have looked at is complex."] },
        ],
      },
      // 66
      {
        type: "open-response" as const,
        title: "Rewrite the Passage at Two Complexity Levels",
        instruction: "Rewrite the passage below twice: once as a simple text (short sentences, no relative clauses) for a Year 2 reader, and once as a complex text (with relative clauses and embedded information) for a secondary school reader.",
        parentTip: "This exercise teaches your child to consciously match sentence complexity to audience — one of the most important writing skills there is.",
        prompts: [
          { text: "ORIGINAL PASSAGE:\nMigrating birds travel long distances. Some travel thousands of kilometres. They use the stars to navigate. They also use the Earth's magnetic field. Some species have been doing this for millions of years.\n\nSimple version (Year 2):", type: "box", lines: 6 },
          { text: "Complex version (secondary level):", type: "box", lines: 6 },
        ],
      },
      // 67
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses and Literary Analysis",
        instruction: "Answer these questions about how authors use relative clauses in published literature.",
        questions: [
          { prompt: "Why might an author prefer a non-defining relative clause for describing a main character?", options: ["To save space", "To add a biographical detail that enriches the reader's understanding without changing who the character is", "Because it is grammatically required", "To confuse the reader"], answer: "To add a biographical detail that enriches the reader's understanding without changing who the character is" },
          { prompt: "An author writes: 'The house, which had stood empty for a century, seemed to breathe.' What does the non-defining relative clause add?", options: ["It identifies which house is meant", "It adds atmospheric history that deepens the mood and setting", "It corrects a factual error", "It changes the subject of the sentence"], answer: "It adds atmospheric history that deepens the mood and setting" },
        ],
      },
      // 68
      {
        type: "open-response" as const,
        title: "Peer Review: Assess a Paragraph for Relative Clause Use",
        instruction: "Read the paragraph below. Write a peer review commenting on: how well relative clauses are used, whether they are correctly punctuated, whether they add value, and any improvements you would suggest.",
        prompts: [
          {
            text: "STUDENT PARAGRAPH:\nAustralia, who has a population of about 26 million, is a large country. The country, that has many unique animals, is known for kangaroos and koalas. The Great Barrier Reef which is a coral reef is in Queensland. Scientists that study the reef say it is under threat from climate change, which is a big problem.\n\nYour peer review:",
            type: "box",
            lines: 12,
          },
        ],
      },
      // 69
      {
        type: "fill-in-blank" as const,
        title: "Reduced Relative Clauses",
        instruction: "A reduced relative clause shortens a full relative clause by removing the relative pronoun and 'be'. Reduce each relative clause.",
        sentences: [
          { text: "The document that was signed by both parties is legally binding.\nReduced: The document _______ by both parties is legally binding.", blanks: ["signed"] },
          { text: "The student who was sitting at the back asked a question.\nReduced: The student _______ at the back asked a question.", blanks: ["sitting"] },
          { text: "The money that was raised by the event went to charity.\nReduced: The money _______ by the event went to charity.", blanks: ["raised"] },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Relative Clause Hunt and Build",
        instruction: "Try these activities to practise relative clauses in everyday life.",
        parentTip: "The more your child encounters and uses relative clauses in real contexts, the more natural they will feel. Celebrate every genuine use in conversation.",
        suggestions: [
          "Describe five objects in your house using a sentence that contains a defining relative clause for each. For example: 'The mug that has the blue handle belongs to Dad.'",
          "Read a newspaper article and highlight every relative clause you can find. Classify each as defining or non-defining. Count which type is more common.",
          "In conversation with a family member, try to use at least five relative clauses naturally. Ask your family member to count how many you used. Discuss whether they sounded natural or awkward.",
        ],
      },
      // ── EXTENDING 71–100 ─────────────────────────────────────────────────
      // 71
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses: Advanced Analysis",
        instruction: "Choose the best answer to each advanced question.",
        questions: [
          { prompt: "What is a 'sentential relative clause'?", options: ["A relative clause that refers to a whole idea or sentence, not just a noun", "A relative clause in the middle of a sentence", "A reduced relative clause", "A relative clause using 'that'"], answer: "A relative clause that refers to a whole idea or sentence, not just a noun" },
          { prompt: "Example: 'She arrived late, which surprised everyone.' What does 'which' refer to?", options: ["Her", "Arriving late (the whole action)", "Everyone", "Surprise"], answer: "Arriving late (the whole action)" },
          { prompt: "In formal written English, which version is preferred?", options: ["The committee that I reported to was supportive.", "The committee to which I reported was supportive.", "The committee which I reported to was supportive."], answer: "The committee to which I reported was supportive." },
        ],
      },
      // 72
      {
        type: "open-response" as const,
        title: "Write a Profile Using Relative Clauses",
        instruction: "Write a 12 to 15 sentence profile of a real or invented person — a scientist, artist, athlete or historical figure. Use at least six relative clauses of different types (defining, non-defining, with whose, where, and one reduced relative clause). Label each one in the margin.",
        parentTip: "Profiles are excellent authentic writing contexts for relative clauses. If your child has a favourite historical figure or athlete, this task will feel personally meaningful.",
        prompts: [
          { text: "Profile subject:", type: "lines", lines: 1 },
          { text: "My profile:", type: "box", lines: 20 },
          { text: "Relative clauses used (list them):", type: "lines", lines: 5 },
        ],
      },
      // 73
      {
        type: "sorting" as const,
        title: "Sort: Effect of Relative Clause Placement",
        instruction: "Each sentence has the relative clause in a different position. Sort them from the version that flows most naturally to least naturally.",
        columns: ["Flows most naturally", "Acceptable but slightly awkward", "Awkward or unclear"],
        items: [
          { label: "The explorer who had spent years in the Amazon finally published her findings." },
          { label: "The explorer finally published her findings who had spent years in the Amazon." },
          { label: "Her findings, which were published last year, changed how scientists understand the rainforest." },
          { label: "Her findings which changed how scientists understand the rainforest were published last year." },
        ],
      },
      // 74
      {
        type: "true-false" as const,
        title: "True or False: Relative Clauses at Secondary School Level",
        instruction: "Circle True or False.",
        statements: [
          { text: "In secondary school English essays, relative clauses are an important tool for demonstrating analytical depth.", answer: true },
          { text: "Secondary school teachers expect students to use only short, simple sentences.", answer: false },
          { text: "Embedding a non-defining relative clause mid-sentence is a sign of sophisticated sentence control.", answer: true },
          { text: "Using too many relative clauses in a formal essay always improves it.", answer: false },
          { text: "A relative clause can help a writer avoid repetition by combining two separate facts into one sentence.", answer: true },
          { text: "The formal written standard requires 'whom' in all cases where 'who' is used as an object.", answer: true },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Using Relative Clauses in Analytical and Argumentative Writing",
        content: "In analytical and argumentative essays, relative clauses help you add evidence and clarification smoothly without breaking the flow of your argument. Instead of: 'The scientist was Fleming. He discovered penicillin. He worked in the early 20th century.' You can write: 'Alexander Fleming, who discovered penicillin in 1928, was working at St Mary's Hospital in London.' One sentence, all the relevant information, maintained argumentative flow. Practise embedding background information this way in every formal paragraph you write.",
      },
      // 76
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses in Poetry and Figurative Writing",
        instruction: "Fill in the blank to complete each sentence from a figurative or poetic context with a suitable relative clause.",
        sentences: [
          { text: "The oak tree, ___, had witnessed every joy and sorrow of the house it guarded.", blanks: ["whose roots ran deeper than memory"] },
          { text: "She was a woman ___ carried her grief like a stone in a pocket — heavy, always present, rarely spoken of.", blanks: ["who"] },
          { text: "The city, ___, breathed a different air at midnight.", blanks: ["which never truly slept"] },
          { text: "He returned to the town ___ as if the years between had been nothing more than a long dream.", blanks: ["where he was born"] },
        ],
      },
      // 77
      {
        type: "open-response" as const,
        title: "Write with Intentional Sentence Variety",
        instruction: "Write a descriptive passage of 10 to 14 sentences about a natural or urban environment. Deliberately vary your sentence structures: use short sentences for impact, long sentences with relative clauses for detail, and at least one sentence that begins with a relative clause mid-structure. Mark each sentence type in the margin.",
        parentTip: "Reading the passage aloud is the best way to check sentence variety. If every sentence sounds the same length and rhythm, more variation is needed.",
        prompts: [
          { text: "My setting:", type: "lines", lines: 1 },
          { text: "My passage:", type: "box", lines: 20 },
        ],
      },
      // 78
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses and Pronoun Reference",
        instruction: "Relative pronouns must refer clearly to the noun they modify. Choose the version that avoids ambiguity.",
        questions: [
          { prompt: "Which sentence is clearer?", options: ["She sent the letter to her mother that she had written last year.", "She sent her mother the letter that she had written last year."] },
          { prompt: "Which version is unambiguous?", options: ["The coach told the player who had missed training that she was dropped.", "The coach, who had told the player about the training, said she was dropped."] },
          { prompt: "Which version avoids the dangling relative clause?", options: ["He gave the book to his friend, which had a torn cover.", "He gave his friend the book, which had a torn cover."] },
        ],
      },
      // 79
      {
        type: "circle-correct" as const,
        title: "Advanced Relative Clause Selection",
        instruction: "Circle the most precise and grammatically correct option for each formal sentence.",
        questions: [
          { prompt: "The report was written by the committee ___.", options: ["that oversees environmental policy", "which oversees environmental policy", "Both are correct in this context"] },
          { prompt: "The prime minister, ___, addressed the nation.", options: ["who had just returned from overseas", "which had just returned from overseas", "that had just returned from overseas"] },
          { prompt: "She cited the scientist ___ research changed the field.", options: ["that", "whose", "who"] },
          { prompt: "The year ___ the discovery was made was 1953.", options: ["when", "where", "which"] },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Write a Sentence of 100 Words",
        content: "The longest sentence in published English literature runs over 13,000 words. This is not a goal — but control of long sentences IS. Challenge yourself to write one grammatically correct sentence of at least 100 words that contains at least four relative clauses, uses correct punctuation throughout, and still makes complete, clear sense when read aloud. Read it to a family member. Can they follow it? If not, revise. If yes, you have demonstrated genuine sentence mastery.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Relative Clause Use in Two Texts",
        instruction: "Find one paragraph from a novel and one from a formal essay or report on the same topic. Analyse how each uses relative clauses: frequency, type, purpose and effect. Write a comparative analysis paragraph.",
        parentTip: "Comparative analysis is a secondary school skill that can be introduced effectively at upper primary. Keep the expectations realistic: look for patterns rather than exhaustive analysis.",
        prompts: [
          { text: "Novel source and paragraph:", type: "box", lines: 6 },
          { text: "Essay/report source and paragraph:", type: "box", lines: 6 },
          { text: "Comparative analysis — how does each text use relative clauses and why?", type: "box", lines: 8 },
        ],
      },
      // 82
      {
        type: "fill-in-blank" as const,
        title: "Embedding Relative Clauses in Formal Argument",
        instruction: "Complete each formal argument sentence with a precise, relevant relative clause.",
        sentences: [
          { text: "The research, ___, demonstrates a clear link between reading habits and vocabulary development.", blanks: ["which was conducted over five years"] },
          { text: "Students ___ read widely for pleasure consistently outperform those who do not.", blanks: ["who"] },
          { text: "The school's new library, ___, has already increased borrowing rates by 40%.", blanks: ["which opened in March"] },
          { text: "The policy ___ the council introduced last year has been widely praised.", blanks: ["that / which"] },
        ],
      },
      // 83
      {
        type: "multiple-choice" as const,
        title: "Mastery Questions: Relative Clauses",
        instruction: "Choose the best answer for each mastery-level question.",
        questions: [
          { prompt: "What is the key difference between a defining and a non-defining relative clause in terms of punctuation and meaning?", options: ["Defining clauses use commas; non-defining do not", "Non-defining clauses use commas and add extra information; defining clauses do not use commas and identify which noun is meant", "There is no difference in meaning", "Defining clauses can use 'that'; non-defining clauses cannot use 'that'"], answer: "Non-defining clauses use commas and add extra information; defining clauses do not use commas and identify which noun is meant" },
          { prompt: "Why should 'that' not be used in non-defining relative clauses?", options: ["Because 'that' is informal", "Because 'that' is only used in defining clauses; using it in non-defining clauses is a grammatical error in formal English", "Because 'that' refers only to people", "Because 'that' always needs a comma"], answer: "Because 'that' is only used in defining clauses; using it in non-defining clauses is a grammatical error in formal English" },
        ],
      },
      // 84
      {
        type: "sorting" as const,
        title: "Sort: Strong or Weak Use of Relative Clauses?",
        instruction: "Sort each example based on whether the relative clause adds meaningful precision or is unnecessary.",
        columns: ["Strong — adds genuine precision or detail", "Weak — unnecessary or vague"],
        items: [
          { label: "The ocean, which is wet, covers most of the Earth." },
          { label: "Marie Curie, who was the first woman to win a Nobel Prize, changed the field of chemistry." },
          { label: "The park, which exists, is near our house." },
          { label: "The treaty, which was signed in 1648, ended the Thirty Years War." },
          { label: "She gave it to the person that was there." },
          { label: "She gave the award to the student whose work had shown the most remarkable improvement over the year." },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Edit a Student Essay for Relative Clause Errors",
        instruction: "This student paragraph has five errors involving relative clauses (wrong pronouns, missing or misplaced commas, dangling placement). Find all five, explain each error, and rewrite the corrected paragraph.",
        prompts: [
          {
            text: "STUDENT PARAGRAPH:\nFrederick Douglass was an American leader who's autobiography became a classic. He escaped from slavery in 1838 which was a life-threatening act. The book, that he published in 1845, shocked readers with its vivid honesty. Douglass became a speaker who he inspired thousands. He met Abraham Lincoln, which was the President, twice during the Civil War.\n\nList the five errors and explain each:",
            type: "box",
            lines: 10,
          },
          { text: "Corrected paragraph:", type: "box", lines: 10 },
        ],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Relative Clauses in Australian Curriculum Year 5",
        instruction: "Circle True or False.",
        statements: [
          { text: "The Australian Curriculum expects Year 5 students to use subordinate and relative clauses to add precision.", answer: true },
          { text: "Relative clauses are only assessed in Year 7 and above.", answer: false },
          { text: "Correctly punctuating non-defining relative clauses with commas is a Year 5 expectation.", answer: true },
          { text: "Using complex sentences that include relative clauses is a marker of developing writing proficiency.", answer: true },
          { text: "Identifying defining and non-defining clauses is above Year 5 level.", answer: false },
          { text: "Year 5 students are expected to understand how relative clauses help expand noun groups.", answer: true },
        ],
      },
      // 87
      {
        type: "circle-correct" as const,
        title: "Relative Clauses: Final Review (Set A)",
        instruction: "Choose the best answer for each question.",
        questions: [
          { prompt: "Which sentence is grammatically correct?", options: ["The student who's work was chosen received a prize.", "The student whose work was chosen received a prize.", "The student which work was chosen received a prize."] },
          { prompt: "Which sentence uses commas correctly?", options: ["Australia which is in the southern hemisphere, has a hot summer.", "Australia, which is in the southern hemisphere, has a hot summer.", "Australia, which is in the southern hemisphere has a hot summer."] },
          { prompt: "Which sentence correctly omits the relative pronoun?", options: ["The song I heard last night was beautiful.", "The singer who I heard last night was beautiful.", "The song that was written last night I heard was beautiful."] },
          { prompt: "Which sentence uses 'whom' correctly?", options: ["The author whom I admire most is Tim Winton.", "The author who I admire most is Tim Winton.", "Both are correct in informal writing"] },
        ],
      },
      // 88
      {
        type: "open-response" as const,
        title: "Reflection: Relative Clauses in My Writing",
        instruction: "Choose a piece of your own writing from the past month. Analyse it for relative clause use and then revise it.",
        prompts: [
          { text: "Title of my piece:", type: "lines", lines: 1 },
          { text: "How many relative clauses did I use? List them:", type: "lines", lines: 3 },
          { text: "Were they correctly punctuated? What errors did I find?", type: "lines", lines: 3 },
          { text: "Revised version of one paragraph (improved using relative clauses):", type: "box", lines: 10 },
        ],
      },
      // 89
      {
        type: "home-activity" as const,
        title: "Extended Project: Relative Clauses Across Subjects",
        instruction: "Investigate how relative clauses function in the academic writing of different subjects.",
        parentTip: "This cross-curricular task shows your child that grammar is not just an English skill — it matters in every subject. Connect it to whatever non-fiction writing your child is doing across their studies.",
        suggestions: [
          "Choose a topic from science, history or geography. Write three different paragraphs about it — one using no relative clauses, one using three defining relative clauses, and one using three non-defining relative clauses. Compare how each version reads and discuss with a family member which version is most appropriate for an academic report.",
          "Find an academic article or textbook chapter on a topic you have studied this year. Count the relative clauses in three consecutive paragraphs. Are more of them defining or non-defining? What does this tell you about academic writing conventions?",
          "Create a reference card titled 'Relative Clauses at a Glance' that summarises the key rules, gives examples of each type, and lists two common errors to avoid. Keep it in your writing folder.",
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Relative Clauses — A Checklist for Your Writing",
        content: "Before submitting any piece of formal writing, check your relative clauses using this five-point checklist: 1. Have I used 'who' for people and 'which' for things? 2. Have I used commas around non-defining clauses? 3. Have I avoided using 'that' in non-defining clauses? 4. Is each relative clause placed immediately after the noun it modifies? 5. Have I considered whether a participial phrase would be more elegant than a full relative clause? A minute spent on this checklist will improve every formal piece you write.",
      },
      // 91
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses: Final Review (Set B)",
        instruction: "Choose the best answer.",
        questions: [
          { prompt: "What is the most important difference between 'Students who work hard succeed' and 'Students, who work hard, succeed'?", options: ["No difference", "The first implies only hardworking students succeed; the second implies all students work hard and all succeed", "The second has a grammatical error", "The first uses a non-defining clause"], answer: "The first implies only hardworking students succeed; the second implies all students work hard and all succeed" },
          { prompt: "Which statement about reduced relative clauses is correct?", options: ["They always use relative pronouns", "They shorten the full clause by removing the relative pronoun and the verb 'be'", "They are only possible with defining clauses", "They always come at the end of a sentence"], answer: "They shorten the full clause by removing the relative pronoun and the verb 'be'" },
          { prompt: "In the sentence 'It was the kind of day that makes you glad to be alive', what type of clause is 'that makes you glad to be alive'?", options: ["Non-defining relative clause", "Defining relative clause", "Adverbial clause", "Participial phrase"], answer: "Defining relative clause" },
        ],
      },
      // 92
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses Mastery: Complex Sentences",
        instruction: "Complete each complex academic sentence with the most precise and grammatically appropriate relative clause.",
        sentences: [
          { text: "The Industrial Revolution, ___, transformed the economic and social landscape of the 19th century.", blanks: ["which began in Britain in the late 18th century"] },
          { text: "Charles Darwin, ___, published On the Origin of Species in 1859.", blanks: ["whose theory of evolution changed how humans understood life on Earth"] },
          { text: "The Amazon Rainforest, ___, is estimated to contain 10% of all species on Earth.", blanks: ["which covers over 5.5 million square kilometres"] },
        ],
      },
      // 93
      {
        type: "open-response" as const,
        title: "Write a Research Summary Using Relative Clauses",
        instruction: "Choose a topic you have researched this year. Write a 10 to 12 sentence research summary. Include at least five relative clauses of different types. Your summary should be accurate, formally written and demonstrate full control of relative clause punctuation.",
        parentTip: "A research summary is an authentic academic writing task. If your child has recently completed a topic in history, science or geography, this is the ideal moment to write a polished summary of what they have learned.",
        prompts: [
          { text: "Research topic:", type: "lines", lines: 1 },
          { text: "My research summary:", type: "box", lines: 20 },
        ],
      },
      // 94
      {
        type: "circle-correct" as const,
        title: "Choose the Most Effective Sentence",
        instruction: "Read each set of options. Circle the sentence that uses a relative clause most effectively for the given purpose.",
        questions: [
          { prompt: "Purpose: to write a formal biography opening.", options: ["Nelson Mandela was a person who was very important.", "Nelson Mandela, who spent 27 years in prison before becoming South Africa's first democratically elected president, is one of the 20th century's most significant figures.", "Nelson Mandela did important things."] },
          { prompt: "Purpose: to write a scientific definition.", options: ["A volcano is a hole in the ground.", "A volcano is a geological formation where molten rock from the Earth's mantle erupts through the surface.", "A volcano that is dangerous erupts."] },
          { prompt: "Purpose: to write an engaging story opening.", options: ["There was a house on a hill.", "At the end of the lane stood a house whose windows seemed to watch the road below.", "A house that was there had windows."] },
        ],
      },
      // 95
      {
        type: "true-false" as const,
        title: "True or False: Final Mastery Check",
        instruction: "Circle True or False.",
        statements: [
          { text: "Using relative clauses well is a significant marker of writing maturity.", answer: true },
          { text: "Non-defining relative clauses always use commas.", answer: true },
          { text: "Defining relative clauses can use either 'that' or 'which'.", answer: true },
          { text: "In Australian Curriculum terms, relative clauses fall under the strand of Language: Grammar.", answer: true },
          { text: "The only purpose of relative clauses is to make sentences longer.", answer: false },
          { text: "Relative clauses serve the purpose of adding information, precision and descriptive depth.", answer: true },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Create a Relative Clause Teaching Poster",
        instruction: "Create a teaching poster that explains relative clauses to a Year 3 student. Your poster should include: a clear definition, examples of defining and non-defining clauses, the rules for when to use commas, and at least three examples from real published texts.",
        parentTip: "Creating a teaching resource requires the deepest level of understanding — your child must explain clearly, simply and accurately. Display the finished poster in your learning space.",
        prompts: [
          { text: "Rough draft of my teaching poster (plan the layout and content here):", type: "box", lines: 20 },
        ],
      },
      // 97
      {
        type: "multiple-choice" as const,
        title: "Relative Clauses and Thinking About Language",
        instruction: "Answer these higher-order questions about language and relative clauses.",
        questions: [
          { prompt: "Why might understanding relative clauses help you read more difficult texts?", options: ["Because knowing grammar makes you smarter", "Because recognising the structure of complex sentences helps you understand long, embedded information without getting confused", "Because relative clauses appear in every sentence", "Because grammar rules are tested in exams"], answer: "Because recognising the structure of complex sentences helps you understand long, embedded information without getting confused" },
          { prompt: "How does using relative clauses make your writing more precise?", options: ["They add length", "They allow you to add specific identifying or descriptive information directly next to the noun it describes, avoiding vagueness", "They replace adjectives", "They make every sentence formal"], answer: "They allow you to add specific identifying or descriptive information directly next to the noun it describes, avoiding vagueness" },
        ],
      },
      // 98
      {
        type: "home-activity" as const,
        title: "Relative Clause Mastery Project",
        instruction: "Complete this two-week mastery project to consolidate your relative clause skills.",
        parentTip: "This project asks your child to write, collect and reflect — three complementary learning modes. Discuss each stage as you go rather than leaving feedback until the end.",
        suggestions: [
          "Week 1 — Collection: Collect 10 sentences containing relative clauses from published texts (novels, newspapers, textbooks). Classify each as defining or non-defining, identify the relative pronoun used, and rate the sentence as 'simple', 'moderate' or 'complex'. Display your collection with annotations.",
          "Week 2 — Production: Write an original piece of at least 20 sentences on any topic of your choice. Deliberately include at least eight relative clauses using a variety of pronouns and clause types. Colour-code them in the finished piece (different colours for defining vs non-defining).",
          "Reflection: Write a half-page personal reflection answering: What did I learn about relative clauses this week? What was hardest? How will I use relative clauses more intentionally in my future writing?",
        ],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Reflection: Relative Clauses and My Voice as a Writer",
        instruction: "Reflect carefully on what you have learned about relative clauses through this worksheet.",
        prompts: [
          { text: "Which type of relative clause (defining or non-defining) do you find most useful in your own writing? Why?", type: "lines", lines: 4 },
          { text: "What was the most challenging concept to master? How did you work through it?", type: "lines", lines: 4 },
          { text: "How will you use relative clauses differently in your writing from now on?", type: "lines", lines: 3 },
          { text: "Name one text type where relative clauses are especially important and explain why.", type: "lines", lines: 3 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Infinite Nesting",
        content: "Here is a famous linguistic thought experiment: can you create a grammatically correct sentence by infinitely nesting relative clauses? Try starting with 'This is the cat' and build — 'This is the cat that ate the rat that lived in the house that Jack built' — and keep going as far as you can. At what point does the sentence become impossible to follow? Write the sentence, mark where understanding breaks down, and write a short paragraph reflecting on what this reveals about the limits of language and memory.",
      },
    ],
  },
  {
    slug: "inferencing-theme-point-of-view",
    title: "Inferencing, Theme & Point of View",
    strand: "Literature",
    description:
      "Read between the lines to make inferences, identify the theme of a text, and explain how point of view shapes a story.",
    learningGuide: {
      concept:
        "Inferencing means using clues in the text plus your own knowledge to work out what the author implies but does not state directly. Theme is the central message or big idea of a text — not just what it is about, but what it teaches. Point of view is the perspective from which a story is told — first person (I), third person limited (he/she, one character's thoughts), or third person omniscient (all characters' thoughts).",
      activation:
        "Read a page from your child's current book and stop at a tense moment. Ask: What do you think will happen next? How do you know? (Inferencing.) What do you think this story is really about? (Theme.)",
      check:
        "After the worksheet, ask your child to name the point of view of their current reading book, one inference they made this week, and the central theme.",
    },
    lesson: {
      title: "Reading Between the Lines",
      objective:
        "Make text-based inferences, identify theme, and explain how point of view affects how a story is told.",
      materials: [
        "This worksheet",
        "A current reading book",
        "A pencil and sticky notes (optional)",
      ],
      intro: {
        title: "What the Author Does Not Say",
        script:
          "Great authors do not tell you everything — they trust you to work things out. When a character slams a door and walks out without speaking, the author does not need to write she was furious. You know because of the clues. That is called inferencing. It combines what the text tells you with what you already know about the world. Inferencing is one of the most important reading skills you will ever develop, and today we are going to practise it deliberately.",
        action:
          "Read two or three sentences from your child's current book that imply something without stating it. Ask: What do we know? What does the text tell us? What can we infer from the clues?",
      },
      mainActivity: {
        title: "Theme vs Topic",
        script:
          "Many students confuse topic and theme. The topic of Charlotte's Web is a spider and a pig on a farm. The theme is friendship, sacrifice and the value of a life. Theme is always a statement about human experience — it is what the story means, not just what it is about. And point of view matters too — if Charlotte's Web was told from the farmer's point of view, it would be a very different story! Let us look at a short extract on the worksheet and practise identifying all three: inference, theme and point of view.",
        action:
          "Read the extract together. Ask about each: What can we infer? What is the theme? Who is narrating and how does their perspective shape what we know?",
      },
      wrapUp: {
        title: "The Theme Statement",
        script:
          "Now let us write a theme statement for your current reading book. A theme statement is a sentence that expresses the big idea — not a single word like friendship, but a full sentence: True friendship means being willing to sacrifice something for the people you love. Write your theme statement and share one piece of evidence from the text that supports it.",
        action:
          "Sit with your child and work on the theme statement together. Post it above their reading spot as a reminder.",
      },
      parentTip:
        "After reading any book, film or TV episode together, ask: What do you think the theme is? What makes you say that? These conversations build literary thinking without any pressure.",
      extension:
        "Retell two scenes from your current book from a different character's point of view. Discuss how the story changes when we see it through different eyes.",
      resources: [
        {
          title: "ReadWriteThink — Inferencing Lesson",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/making-inferences-using-text",
          description:
            "Guided lesson on making text-based inferences with supporting activities.",
        },
        {
          title: "Khan Academy — Point of View",
          url: "https://www.khanacademy.org/ela/cc-5th-grade-reading-vocab/xe2c54a99ede11c03:reading-literary-text/xe2c54a99ede11c03:point-of-view/e/point-of-view",
          description:
            "Exercises on identifying and analysing point of view in literary texts.",
        },
        {
          title: "ABC Education — Reading Comprehension",
          url: "https://www.abc.net.au/education/programs/behind-the-news/",
          description:
            "Age-appropriate texts for comprehension practice and inferencing discussion.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "matching" as const,
        title: "Match the Literary Term",
        instruction: "Draw a line to match each literary term with its correct definition.",
        parentTip: "Encourage your child to cover the right column, read each term aloud, and try to recall the definition before looking — this active retrieval strategy strengthens memory.",
        left: ["Inference", "Theme", "First person point of view", "Third person omniscient", "Topic", "Third person limited"],
        right: [
          "The central message or big idea of a text",
          "A conclusion drawn from clues in the text and background knowledge",
          "What a story is about (not the message)",
          "Narrated using 'I'; told from one character's direct perspective",
          "Narrated using 'he/she'; the narrator knows all characters' thoughts",
          "Narrated using 'he/she'; only one character's thoughts are known",
        ],
      },
      // 2
      {
        type: "circle-correct" as const,
        title: "Identify the Point of View (Set A)",
        instruction: "Read each short extract. Circle the point of view from which it is narrated.",
        parentTip: "Point of view affects what a reader is allowed to know. Ask your child: What would change if this passage was told from a different character's perspective?",
        questions: [
          { prompt: "I crept along the hallway, my heart hammering. I did not know what I would find behind the door.", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "Sara felt nervous as she stepped onto the stage, though the audience had no idea she was trembling inside.", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "In the kitchen, Mum worried about the bills. Meanwhile, upstairs, Dad was pretending everything was fine. Neither of them knew the other was afraid.", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "Marcus grabbed his bag and ran. He had no way of knowing that the parcel he carried would change everything.", options: ["First person", "Third person limited", "Third person omniscient"] },
        ],
      },
      // 3
      {
        type: "true-false" as const,
        title: "True or False: Inferencing, Theme and Point of View Basics",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "An inference is a conclusion you reach using clues in the text and your background knowledge.", answer: true },
          { text: "Theme is the same as the topic of a text.", answer: false },
          { text: "First person narration uses 'I' and 'we'.", answer: true },
          { text: "Third person omniscient narrators know the thoughts of all characters.", answer: true },
          { text: "A theme can usually be expressed in a single word like 'friendship'.", answer: false },
          { text: "An author can choose point of view deliberately to control what information the reader receives.", answer: true },
        ],
      },
      // 4
      {
        type: "sorting" as const,
        title: "Sort: Topic or Theme?",
        instruction: "A topic is what a story is about. A theme is the message or big idea. Sort each statement into the correct column.",
        columns: ["Topic (what it is about)", "Theme (the message)"],
        items: [
          { label: "A young girl lost in the woods." },
          { label: "Courage means acting even when you are afraid." },
          { label: "A sports team that keeps losing." },
          { label: "Perseverance leads to success even after failure." },
          { label: "Two children from rival families." },
          { label: "Kindness can break down the barriers that divide people." },
          { label: "A boy who discovers he has magical powers." },
          { label: "Growing up means accepting that the world is more complex than you believed." },
        ],
      },
      // 5
      {
        type: "open-response" as const,
        title: "Making Inferences (Set A)",
        instruction: "Read the extract below. Answer each question using evidence from the text and your own knowledge.",
        prompts: [
          {
            text: "EXTRACT:\nLukas stared at the envelope for a long time before he picked it up. His name was written in his mother's handwriting — the looping letters he had not seen for three years. His hands were steady but his heart was not.\n\nWhat can you infer about Lukas's relationship with his mother? Cite the evidence.",
            type: "lines", lines: 4,
          },
          { text: "What emotions do you think Lukas is feeling? How do you know?", type: "lines", lines: 4 },
          { text: "From whose point of view is this passage told? How does this affect what information we receive?", type: "lines", lines: 3 },
        ],
      },
      // 6
      {
        type: "fill-in-blank" as const,
        title: "Complete the Inference Statement",
        instruction: "Fill in the blank to complete each inference statement. Use the text clue to guide you.",
        parentTip: "Model the inference process aloud: 'The text says X. I already know Y. So I can infer Z.' This three-step process helps children make their reasoning visible.",
        sentences: [
          { text: "Text clue: She kept glancing at the clock. Inference: She was probably feeling _______ about something.", blanks: ["anxious / impatient"] },
          { text: "Text clue: He walked in without knocking. Inference: He probably _______ about waiting to be invited.", blanks: ["did not care"] },
          { text: "Text clue: The house was dark and the curtains were drawn at noon. Inference: The family was probably _______.", blanks: ["away / sleeping / in mourning"] },
          { text: "Text clue: She put the letter back in the envelope without reading it. Inference: She probably _______ what it said.", blanks: ["already knew / was afraid of"] },
        ],
      },
      // 7
      {
        type: "multiple-choice" as const,
        title: "Which Is the Best Inference?",
        instruction: "Read each text clue. Choose the inference best supported by the evidence.",
        questions: [
          { prompt: "Text clue: He had not eaten since yesterday and his hands were shaking. What can you infer?", options: ["He was cold", "He was hungry and possibly unwell from lack of food", "He was nervous about a speech", "He was very old"], answer: "He was hungry and possibly unwell from lack of food" },
          { prompt: "Text clue: She smiled but her eyes were wet. What can you infer?", options: ["She was happy", "She was sad", "She was experiencing complex or mixed emotions", "She had something in her eye"], answer: "She was experiencing complex or mixed emotions" },
          { prompt: "Text clue: All the photos had been turned face down. What can you infer?", options: ["The room needed cleaning", "Someone wanted to avoid seeing or thinking about the people in the photos", "The frames were broken", "The photos were new"], answer: "Someone wanted to avoid seeing or thinking about the people in the photos" },
        ],
      },
      // 8
      {
        type: "open-response" as const,
        title: "Theme Statement for Your Reading Book",
        instruction: "Write a theme statement for your current or most recently finished reading book. Support it with two pieces of evidence from the text.",
        prompts: [
          { text: "Book title and author:", type: "lines", lines: 1 },
          { text: "Theme statement (a full sentence that expresses the big idea — not just a single word):", type: "lines", lines: 3 },
          { text: "Evidence 1 from the text:", type: "lines", lines: 3 },
          { text: "Evidence 2 from the text:", type: "lines", lines: 3 },
        ],
      },
      // 9
      {
        type: "sorting" as const,
        title: "Sort: First Person, Third Limited, Third Omniscient",
        instruction: "Sort each extract into the correct point of view column.",
        columns: ["First person", "Third person limited", "Third person omniscient"],
        items: [
          { label: "I had always feared the dark, but this night was different." },
          { label: "She knew something was wrong, though she could not say exactly what." },
          { label: "James was nervous. What he did not know was that across town, Emma was planning a surprise." },
          { label: "We ran as fast as our legs would carry us down the slope." },
          { label: "The general scanned the battlefield. He felt calm; his troops, however, were terrified." },
          { label: "My palms were sweating as I reached for the door handle." },
        ],
      },
      // 10
      {
        type: "fill-in-blank" as const,
        title: "Identify the Literary Term",
        instruction: "Fill in the correct literary term for each definition.",
        sentences: [
          { text: "Using clues from the text and your own knowledge to reach a conclusion = _______", blanks: ["inference"] },
          { text: "The central message or big idea expressed by a text = _______", blanks: ["theme"] },
          { text: "What a story is about, described without evaluating its meaning = _______", blanks: ["topic"] },
          { text: "The perspective from which a story is told = _______ _______", blanks: ["point of view"] },
          { text: "A narrator who knows the thoughts of only one character = _______ person _______", blanks: ["third", "limited"] },
        ],
      },
      // 11
      {
        type: "multiple-choice" as const,
        title: "Theme: Single Word or Full Statement?",
        instruction: "A theme is always expressed as a full statement about human experience, not a single word. Choose the best theme statement for each story.",
        parentTip: "The difference between 'friendship' (topic element) and 'true friendship requires sacrifice' (theme statement) is a critical distinction. Practise this until it is instinctive.",
        questions: [
          { prompt: "Story: A girl gives up her dream to care for her sick brother. Best theme statement:", options: ["Sacrifice", "Love and sacrifice sometimes require us to give up what we want most.", "Family is important.", "The girl was sad."], answer: "Love and sacrifice sometimes require us to give up what we want most." },
          { prompt: "Story: Two strangers help each other survive a natural disaster. Best theme statement:", options: ["Survival", "Natural disasters are dangerous.", "In times of crisis, strangers can become allies — and even friends.", "Bushfires are common in Australia."], answer: "In times of crisis, strangers can become allies — and even friends." },
          { prompt: "Story: A boy lies to protect someone he loves but the lie grows and causes more harm. Best theme statement:", options: ["Lying", "Even well-intentioned lies can cause more damage than the truth.", "The boy was dishonest.", "Truth"], answer: "Even well-intentioned lies can cause more damage than the truth." },
        ],
      },
      // 12
      {
        type: "open-response" as const,
        title: "Inference Using Visual Clues",
        instruction: "Read this description of a scene and answer the inferencing questions.",
        prompts: [
          {
            text: "SCENE DESCRIPTION:\nThe kitchen table was set for three — three glasses of juice, three plates of half-eaten toast. A child's coat hung by the door but no other coats. School bags sat in the hallway. On the bench, a phone was lit up with seventeen missed calls, all from the same number.\n\n1. What can you infer about who lives in this house?",
            type: "lines", lines: 3,
          },
          { text: "2. What can you infer has happened recently? What clues support this?", type: "lines", lines: 3 },
          { text: "3. What mood or atmosphere does the description create? How does the author create it without stating it directly?", type: "lines", lines: 3 },
        ],
      },
      // 13
      {
        type: "circle-correct" as const,
        title: "Point of View: What Can the Narrator Know?",
        instruction: "Based on the point of view, circle what the narrator is allowed to tell the reader.",
        questions: [
          { prompt: "First person narrator:", options: ["The thoughts and feelings of all characters", "Only their own thoughts, feelings and what they observe", "Future events", "Events happening in other locations they cannot see"] },
          { prompt: "Third person limited narrator:", options: ["The inner thoughts of one character only", "The inner thoughts of all characters", "Only external events and dialogue", "Events happening simultaneously in different places"] },
          { prompt: "Third person omniscient narrator:", options: ["Only what one character observes", "Only dialogue", "The thoughts, feelings and actions of all characters", "Only past events"] },
        ],
      },
      // 14
      {
        type: "open-response" as const,
        title: "Point of View: How Does It Change the Story?",
        instruction: "Read this brief scene. Rewrite it from a different point of view and explain what changes.",
        prompts: [
          {
            text: "ORIGINAL (third person limited — from Mia's point of view):\nMia watched her brother eat the last slice of cake. He did not even look up. She felt her jaw tighten, though she said nothing. Nobody ever noticed when she was angry — that was the problem.\n\nRewrite from the brother's first person point of view:",
            type: "box", lines: 8,
          },
          { text: "What information does the original version give that your rewrite cannot? What new information does your rewrite give?", type: "lines", lines: 4 },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: The Three-Step Inference Process",
        content: "When making an inference, use these three steps: 1. Text evidence — what does the text actually say? Quote or paraphrase it. 2. Background knowledge — what do you already know that helps you interpret this? 3. Inference — combining these two, what can you conclude that the author has not stated directly? Writing out all three steps makes your inference visible and testable. If you cannot find text evidence, it is not a valid inference — it is a guess.",
      },
      // 16
      {
        type: "true-false" as const,
        title: "True or False: Making Inferences",
        instruction: "Circle True or False.",
        statements: [
          { text: "An inference must always be supported by evidence from the text.", answer: true },
          { text: "You can infer whatever you like as long as it seems possible.", answer: false },
          { text: "Background knowledge can help you interpret text clues to make an inference.", answer: true },
          { text: "An inference is the same as a prediction.", answer: false },
          { text: "Strong readers make inferences automatically as they read.", answer: true },
          { text: "An inference is something the author states directly.", answer: false },
        ],
      },
      // 17
      {
        type: "sorting" as const,
        title: "Sort: Valid Inference or Unsupported Guess?",
        instruction: "Read each inference about the extract below. Sort each into the correct column.\n\nEXTRACT: The boy had not eaten. He sat outside the locked door for a long time, then slowly walked away.",
        columns: ["Valid inference (supported by text clues)", "Unsupported guess (no text evidence)"],
        items: [
          { label: "The boy was hungry." },
          { label: "The boy had been hoping someone would open the door." },
          { label: "The boy was eight years old." },
          { label: "Someone inside was aware the boy was there." },
          { label: "The boy felt disappointed or resigned." },
          { label: "The boy had red hair." },
        ],
      },
      // 18
      {
        type: "open-response" as const,
        title: "Identify Theme in a Short Text",
        instruction: "Read the text below. Identify the theme and support it with evidence.",
        prompts: [
          {
            text: "SHORT TEXT:\nFor twenty years, she had kept the letter in the bottom of her jewellery box, sealed. She had told herself she would open it when she was ready — but ready never came. On the morning of her fortieth birthday, she sat alone at the kitchen table, poured herself a cup of tea, and finally broke the seal. Whatever it said, she decided, she could face it now.\n\nWhat is the theme of this text? Write a theme statement (a full sentence, not a single word):",
            type: "lines", lines: 3,
          },
          { text: "What evidence from the text supports your theme statement?", type: "lines", lines: 3 },
          { text: "From what point of view is this text told? What do we know and not know because of this?", type: "lines", lines: 3 },
        ],
      },
      // 19
      {
        type: "home-activity" as const,
        title: "Inference Spotter",
        instruction: "Try these activities this week to practise inferencing beyond the worksheet.",
        parentTip: "Inferencing conversations are best had in the moment — pausing during a read-aloud or film is far more effective than discussing it afterwards from memory.",
        suggestions: [
          "As you read with your child this week, pause at a tense or important moment and ask: What do you think is happening? What evidence in the text made you think that? What do you know from your own experience that helps you interpret it?",
          "Watch a film or TV show together. Pause at a moment of tension or mystery and ask: What can we infer about this character's motivation? Can we prove it from what we have seen?",
          "Find a newspaper photograph (no caption) and make three inferences about what is happening. Then check the caption — were your inferences supported?",
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Unreliable Narrator",
        content: "Some stories are told by narrators who lie to us, or who do not understand what is really happening — these are called unreliable narrators. Famous examples include the narrator of 'The Tell-Tale Heart' by Edgar Allan Poe and Holden Caulfield in 'The Catcher in the Rye'. Read the opening of a story by a first-person narrator. Ask: Can I trust this narrator? What clues suggest they might not be telling the whole truth? Then write a short passage of your own with a narrator who is hiding something.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "multiple-choice" as const,
        title: "Inference vs Interpretation vs Summary",
        instruction: "Choose the best description for each reading response.",
        parentTip: "Distinguishing between summary (what happened), inference (what it implies) and interpretation (what it means overall) is a key higher-order reading skill.",
        questions: [
          { prompt: "Response: 'In this extract, a boy receives a letter from his absent mother and feels conflicted.' What type of response is this?", options: ["Inference", "Summary", "Theme statement"], answer: "Summary" },
          { prompt: "Response: 'Lukas's steady hands but unsteady heart suggest he is trying to appear calm while feeling deeply emotional.' What type of response is this?", options: ["Summary", "Inference", "Topic identification"], answer: "Inference" },
          { prompt: "Response: 'This extract explores the theme that unresolved family relationships continue to affect us long after the physical separation.' What type of response is this?", options: ["Summary", "Inference", "Theme interpretation"], answer: "Theme interpretation" },
        ],
      },
      // 22
      {
        type: "open-response" as const,
        title: "Three Levels of Response",
        instruction: "Read the passage and then write all three types of response: a summary, an inference and a theme statement.",
        prompts: [
          {
            text: "PASSAGE:\nElla had won every race that season — and hated it. Winning was easy; it was the silence afterwards that killed her. Her coach celebrated, her parents beamed, her teammates clapped. Nobody asked her how she felt. She stood on the podium and smiled and smiled and smiled, until her face ached with the effort.\n\nSummary (what happens):",
            type: "lines", lines: 3,
          },
          { text: "Inference (what the text implies but does not state):", type: "lines", lines: 3 },
          { text: "Theme statement (the big idea this text explores):", type: "lines", lines: 3 },
        ],
      },
      // 23
      {
        type: "sorting" as const,
        title: "Sort: Clue or Not a Clue?",
        instruction: "A reader is trying to infer whether a character is anxious before a performance. Sort each detail from the text as a useful clue or not a useful clue for this inference.",
        columns: ["Useful clue (supports the inference)", "Not a useful clue (irrelevant or contradicts it)"],
        items: [
          { label: "She kept tapping her foot." },
          { label: "The auditorium had blue curtains." },
          { label: "She rehearsed her opening line over and over in her head." },
          { label: "Her sandwich was uneaten on the table." },
          { label: "She had been to this auditorium before." },
          { label: "Her hands were cold despite the warm room." },
          { label: "She took three deep breaths." },
          { label: "The seats were made of red velvet." },
        ],
      },
      // 24
      {
        type: "circle-correct" as const,
        title: "Identify the Point of View (Set B)",
        instruction: "Circle the correct point of view.",
        questions: [
          { prompt: "The explorer had no idea that the villagers watching him were afraid — not of the jungle, but of him.", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "I pressed myself against the wall and waited. My heart was so loud I was sure they could hear it.", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "She walked through the door, not knowing what she would find. She told herself it would be fine.", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "From above, the valley looked peaceful. But below, three different families were each making a decision that would change all their lives forever.", options: ["First person", "Third person limited", "Third person omniscient"] },
        ],
      },
      // 25
      {
        type: "open-response" as const,
        title: "Retell from a Different Point of View",
        instruction: "Choose a scene from your current reading book. Briefly summarise it in 2 to 3 sentences. Then retell it from the perspective of a different character in the scene. Discuss how the retelling changes what we know and feel.",
        parentTip: "Perspective-taking activities build both empathy and literary thinking. There is no wrong answer — the quality of the child's reasoning matters more than which perspective they choose.",
        prompts: [
          { text: "Original scene (2-3 sentence summary):", type: "lines", lines: 3 },
          { text: "Original point of view:", type: "lines", lines: 1 },
          { text: "Retelling from a different perspective:", type: "box", lines: 10 },
          { text: "How does the new perspective change what the reader knows or feels?", type: "lines", lines: 3 },
        ],
      },
      // 26
      {
        type: "true-false" as const,
        title: "True or False: Theme and Point of View",
        instruction: "Circle True or False.",
        statements: [
          { text: "A text can have more than one theme.", answer: true },
          { text: "Point of view and perspective are exactly the same concept.", answer: false },
          { text: "Third person limited point of view can create dramatic irony when the reader knows more than the narrator.", answer: false },
          { text: "Third person omniscient can create dramatic irony because the narrator knows more than individual characters.", answer: true },
          { text: "First person narration always makes a story more trustworthy.", answer: false },
          { text: "The author's choice of point of view shapes what the reader can and cannot know.", answer: true },
        ],
      },
      // 27
      {
        type: "multiple-choice" as const,
        title: "Dramatic Irony and Point of View",
        instruction: "Dramatic irony occurs when the reader knows something a character does not. Identify which point of view most easily creates dramatic irony.",
        questions: [
          { prompt: "Which point of view most easily creates dramatic irony?", options: ["First person — because the narrator tells us everything", "Third person omniscient — because the narrator knows all characters' thoughts and can reveal information one character does not know", "Third person limited — because the narrator only knows one character's thoughts", "All point of view types create dramatic irony equally"], answer: "Third person omniscient — because the narrator knows all characters' thoughts and can reveal information one character does not know" },
          { prompt: "Example: 'Emma smiled as she walked towards the surprise party. What she didn't know was that everyone was already hiding.' What effect does this create for the reader?", options: ["Suspense", "Dramatic irony — the reader knows more than Emma does", "A theme statement", "An inference"], answer: "Dramatic irony — the reader knows more than Emma does" },
        ],
      },
      // 28
      {
        type: "fill-in-blank" as const,
        title: "Complete the Analysis Sentence",
        instruction: "Complete each analysis sentence using the correct literary term.",
        sentences: [
          { text: "The author uses _______ person point of view, which means the reader has access to the thoughts of all characters.", blanks: ["third omniscient"] },
          { text: "By writing from _______ person perspective, the author creates immediacy and makes the reader feel as if they are the character.", blanks: ["first"] },
          { text: "The author chooses a _______ person limited narrator, which means we can only know what the main character thinks and observes.", blanks: ["third"] },
          { text: "The _______ of this novel explores the idea that true courage requires acknowledging your fear.", blanks: ["theme"] },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Inference Chain",
        instruction: "An inference chain shows how one inference can lead to another. Read the passage and build an inference chain: start with a text clue, make an inference, then use that inference to make a further inference.",
        parentTip: "Building inference chains mirrors the way skilled readers naturally think. Praise the process of reasoning, even when conclusions are uncertain.",
        prompts: [
          {
            text: "PASSAGE:\nThe lights in the old man's house had been off for a week. His newspaper was still on the step. The neighbour had knocked twice — no answer. She stood at the gate, unsure whether to call someone.\n\nText clue 1:",
            type: "lines", lines: 1,
          },
          { text: "Inference 1 (based on clue 1):", type: "lines", lines: 2 },
          { text: "Further inference (based on inference 1 and additional clues):", type: "lines", lines: 2 },
          { text: "What emotion does the author create and how?", type: "lines", lines: 3 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Themes Are Universal Human Experiences",
        content: "A strong theme statement captures a universal human experience — something true not just for the characters in the story but for all of us. Weak: 'Charlotte's Web is about friendship.' Strong: 'True friendship means being willing to make great sacrifices for those you love, even when they cannot repay you.' The second version could apply to many texts, many lives. When writing a theme statement, ask: Is this true only for these characters, or does it say something about what it means to be human?",
      },
      // 31
      {
        type: "sorting" as const,
        title: "Sort: Weak or Strong Theme Statement?",
        instruction: "Sort each theme statement based on its quality.",
        columns: ["Weak (too vague, topic-based, or not universal)", "Strong (specific, universal, full sentence)"],
        items: [
          { label: "The story is about courage." },
          { label: "Courage is not the absence of fear, but acting despite it." },
          { label: "Friendship is good." },
          { label: "True friendship survives distance, change and misunderstanding." },
          { label: "The book is about a dog." },
          { label: "Loyalty to those we love can drive us to extraordinary acts of bravery." },
          { label: "Growing up is hard." },
          { label: "Adolescence forces us to choose between who we are told to be and who we truly are." },
        ],
      },
      // 32
      {
        type: "multiple-choice" as const,
        title: "Point of View and the Reliability of Information",
        instruction: "Different points of view give readers different kinds of information. Answer each question.",
        questions: [
          { prompt: "A first person narrator describes someone they dislike. Should the reader take this description as completely reliable?", options: ["Yes — first person narrators always tell the truth", "No — first person narrators may be biased or limited in what they observe", "Yes — first person is the most reliable point of view", "It depends on whether the author is reliable"], answer: "No — first person narrators may be biased or limited in what they observe" },
          { prompt: "Which point of view allows an author to provide the most balanced perspective on a conflict between two characters?", options: ["First person from one character's view", "Third person limited", "Third person omniscient", "Second person"], answer: "Third person omniscient" },
          { prompt: "In a story told from a child's first person perspective, what kind of information might the narrator miss or misinterpret?", options: ["Basic events and dialogue", "Complex adult motivations and context they do not fully understand", "What they eat and wear", "The names of other characters"], answer: "Complex adult motivations and context they do not fully understand" },
        ],
      },
      // 33
      {
        type: "open-response" as const,
        title: "Analyse Theme Across Two Texts",
        instruction: "Think of two stories you have read that share a similar theme. Compare how each story explores the theme differently.",
        parentTip: "Comparing texts on a thematic level is an advanced literary thinking skill. Start with stories your child knows well — comparing known texts is easier than comparing unfamiliar ones.",
        prompts: [
          { text: "Text 1 (title and author):", type: "lines", lines: 1 },
          { text: "Text 2 (title and author):", type: "lines", lines: 1 },
          { text: "Shared theme (expressed as a full sentence):", type: "lines", lines: 2 },
          { text: "How does Text 1 explore this theme?", type: "lines", lines: 3 },
          { text: "How does Text 2 explore this theme?", type: "lines", lines: 3 },
          { text: "How are the two explorations of the theme different?", type: "lines", lines: 3 },
        ],
      },
      // 34
      {
        type: "fill-in-blank" as const,
        title: "Inference Language: Hedging Your Certainty",
        instruction: "When making inferences, skilled readers use language that shows they are drawing a conclusion, not stating a fact. Fill in the blank with an appropriate inference phrase.",
        sentences: [
          { text: "The text suggests that the character is _______.", blanks: ["lonely / afraid / hiding something"] },
          { text: "Based on the evidence that _______, we can infer that...", blanks: ["[a detail from the text]"] },
          { text: "This _______ that the relationship between the two characters has broken down.", blanks: ["implies / suggests"] },
          { text: "Although not stated directly, the reader can deduce that _______.", blanks: ["[an implied meaning]"] },
        ],
      },
      // 35
      {
        type: "open-response" as const,
        title: "Write an Inference-Based Response",
        instruction: "Read the passage. Write a full paragraph that makes at least two inferences and supports each with evidence from the text.",
        parentTip: "A well-structured inference response uses: quote or paraphrase → inference → explanation. Guide your child to connect each piece of evidence explicitly to their conclusion.",
        prompts: [
          {
            text: "PASSAGE:\nShe had been careful. She had memorised every exit. She had planned it for months — the day she would finally leave. But now, standing at the door with her bag in her hand, she found her feet would not move.\n\nWrite your inference paragraph:",
            type: "box", lines: 12,
          },
        ],
      },
      // 36
      {
        type: "circle-correct" as const,
        title: "Identify the Theme",
        instruction: "Read each brief story description. Circle the theme statement that best fits.",
        questions: [
          { prompt: "Story: A child helps a stray animal despite being told not to. In the end, both are better for it.", options: ["Animals should not be strays.", "Acts of compassion, however small, can change lives.", "Children should follow rules."] },
          { prompt: "Story: Two rivals compete fiercely for years. When one falls ill, the other visits and they become friends.", options: ["Competition is dangerous.", "Sport is important.", "Our greatest rivals can sometimes become our most important friends."] },
          { prompt: "Story: A girl raised in poverty works hard, earns a scholarship, and leaves for university.", options: ["Universities are good.", "Hard work and determination can overcome even the most difficult circumstances.", "Money does not buy happiness."] },
        ],
      },
      // 37
      {
        type: "true-false" as const,
        title: "True or False: Literary Thinking",
        instruction: "Circle True or False.",
        statements: [
          { text: "Dramatic irony requires the reader to know something a character does not.", answer: true },
          { text: "A theme statement should be specific enough to apply to other texts and life experiences.", answer: true },
          { text: "The most important information in a text is always stated explicitly.", answer: false },
          { text: "Good readers read between the lines to find implied meaning.", answer: true },
          { text: "The author's choice of point of view affects what the reader can infer.", answer: true },
          { text: "All valid inferences are equally well-supported by evidence.", answer: false },
        ],
      },
      // 38
      {
        type: "open-response" as const,
        title: "Create an Inference-Rich Passage",
        instruction: "Write a short passage (6 to 8 sentences) in which you show rather than tell the reader three things about a character: their emotional state, their relationship with someone else, and something about their past. Do NOT state any of these things directly — let the reader infer them.",
        parentTip: "Show-don't-tell is one of the most important creative writing skills. After your child has written their passage, swap roles: you try to identify the three things they were showing, and they check if you got them right.",
        prompts: [
          { text: "Three things I am showing (but NOT telling) — for your reference only:", type: "lines", lines: 3 },
          { text: "My passage:", type: "box", lines: 14 },
        ],
      },
      // 39
      {
        type: "matching" as const,
        title: "Match the Point of View Effect",
        instruction: "Draw a line to match each point of view with the effect it creates for the reader.",
        parentTip: "This kind of analytical thinking about author craft is exactly what English teachers at secondary school expect. Building this habit now is enormously valuable.",
        left: ["First person narration", "Third person limited", "Third person omniscient", "Unreliable first person narrator", "Close third person (intimate)"],
        right: [
          "Creates suspense because readers know more than some characters",
          "Creates intimacy; reader feels they ARE the character",
          "Creates a puzzle; reader must decide what is true",
          "Creates intimacy; reader feels close to one character's perspective",
          "Provides breadth; allows multiple characters' perspectives",
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Theme Hunting",
        content: "Choose three completely different texts you have read this year — a novel, a non-fiction book and a film or TV episode. Can you find a single theme that all three explore, even if in very different ways? Write a one-page reflection: state the theme, explain how each text explores it, and discuss what is different about each exploration. What does comparing these three texts tell you about why that theme keeps appearing in the things humans create?",
      },
      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────
      // 41
      {
        type: "fill-in-blank" as const,
        title: "Inferencing in Non-Fiction",
        instruction: "Inferencing applies to non-fiction too. Read each non-fiction text clue and complete the inference.",
        sentences: [
          { text: "Non-fiction clue: In 2019, Australia recorded its hottest ever average temperature. Inference: This suggests that _______.", blanks: ["climate change is having measurable effects in Australia"] },
          { text: "Non-fiction clue: The rainforest has been cleared, but the creek still flows. Inference: The creek may be _______.", blanks: ["at risk / affected / changed by the loss of vegetation"] },
          { text: "Non-fiction clue: The survey showed 78% of children prefer watching videos to reading books. Inference: This could suggest that _______.", blanks: ["traditional reading habits are declining / screen-based media is more engaging for many children"] },
        ],
      },
      // 42
      {
        type: "multiple-choice" as const,
        title: "Point of View in Non-Fiction",
        instruction: "Non-fiction texts also have a point of view. Answer each question about perspective in non-fiction.",
        questions: [
          { prompt: "A newspaper article about a protest written by a journalist who supports the cause will likely:", options: ["Be completely neutral and factual", "Reflect the author's sympathies in language choice and what is emphasised", "Avoid any point of view", "Only report the police's perspective"], answer: "Reflect the author's sympathies in language choice and what is emphasised" },
          { prompt: "What does it mean to evaluate an author's perspective in a non-fiction text?", options: ["To check whether the facts are correct", "To identify who the author is and what they believe, and how this shapes the text", "To summarise the main points", "To identify the genre"], answer: "To identify who the author is and what they believe, and how this shapes the text" },
          { prompt: "An account of an historical event written by a soldier who fought in it differs from one written by a historian because:", options: ["Soldiers cannot write well", "The soldier's account is a primary source with personal perspective; the historian's is secondary with analytical distance", "Historians are always more accurate", "The soldier's account is always more reliable"], answer: "The soldier's account is a primary source with personal perspective; the historian's is secondary with analytical distance" },
        ],
      },
      // 43
      {
        type: "open-response" as const,
        title: "Evaluating Author Perspective in Non-Fiction",
        instruction: "Find a short non-fiction article or extract on any topic. Evaluate the author's perspective: Who are they? What is their position? What language choices reveal their point of view?",
        parentTip: "Evaluating perspective in non-fiction is a critical media literacy skill. Help your child see that every text — even a 'factual' one — reflects a perspective.",
        prompts: [
          { text: "Title and source of the article:", type: "lines", lines: 1 },
          { text: "Who is the author and what is their position or background?", type: "lines", lines: 2 },
          { text: "What point of view does the author express?", type: "lines", lines: 2 },
          { text: "What language choices reveal their perspective? (Quote at least two examples)", type: "box", lines: 6 },
          { text: "How does the author's perspective affect the information they include or exclude?", type: "lines", lines: 3 },
        ],
      },
      // 44
      {
        type: "sorting" as const,
        title: "Sort: Explicit, Implicit or Inferred?",
        instruction: "Sort each statement about a text into the correct column.",
        columns: ["Explicitly stated (directly in the text)", "Implicitly suggested (hinted at)", "Reader inference (using clues + background knowledge)"],
        items: [
          { label: "The text states: 'She was twelve years old.'" },
          { label: "The text describes a character repeatedly checking their watch — suggesting impatience." },
          { label: "Because the character is impatient AND the deadline is tomorrow, we can infer she will not finish on time." },
          { label: "The text states: 'It was raining heavily.'" },
          { label: "The character takes an umbrella when leaving — suggesting she checked the weather." },
          { label: "Because the character takes an umbrella, she is likely organised and plan-oriented." },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Theme Is Not Moral",
        content: "Students sometimes confuse theme with moral. A moral is a simple lesson or rule: 'Be kind' or 'Honesty is the best policy.' A theme is a more complex, nuanced statement about human experience that does not tell the reader what to do. 'Growing up requires accepting loss' is a theme. 'Be brave' is a moral. Themes acknowledge complexity and ambiguity. They do not provide easy answers — they invite reflection. When you write a theme statement, ask: Does this tell the reader what to do, or does it make them think about something true and complex about life?",
      },
      // 46
      {
        type: "open-response" as const,
        title: "Moral or Theme?",
        instruction: "For each example, identify whether it is a moral (a simple lesson) or a theme (a complex statement about human experience) and explain the difference.",
        prompts: [
          { text: "'Always tell the truth.' — Moral or theme? Explain:", type: "lines", lines: 3 },
          { text: "'Silence can be a form of complicity.' — Moral or theme? Explain:", type: "lines", lines: 3 },
          { text: "'Never judge a book by its cover.' — Moral or theme? Explain:", type: "lines", lines: 3 },
          { text: "'Identity is shaped by the communities we belong to and the ones we are excluded from.' — Moral or theme? Explain:", type: "lines", lines: 3 },
        ],
      },
      // 47
      {
        type: "circle-correct" as const,
        title: "Point of View and Its Effect on Theme",
        instruction: "Read each question and circle the best answer.",
        questions: [
          { prompt: "How does first person narration affect the reader's access to theme?", options: ["It makes theme explicit and clear", "It gives theme through one character's subjective experience, which may be limited or biased", "It prevents the reader from identifying any theme", "It always produces a clear moral lesson"] },
          { prompt: "Why might an author choose third person omniscient for a story about a community divided by conflict?", options: ["To show only one side of the conflict", "To give the reader access to all perspectives and make the complexity of the situation clear", "To hide the resolution from the reader", "Because it is the easiest point of view to write in"] },
          { prompt: "If an author wants the reader to realise something a character does not, which point of view is most effective?", options: ["First person from that character's perspective", "Third person omniscient or close third person with narrative distance", "Second person", "First person from a different character"] },
        ],
      },
      // 48
      {
        type: "open-response" as const,
        title: "Write a Literary Analysis Paragraph",
        instruction: "Write a formal literary analysis paragraph about a text you have recently read. Focus on how the author uses point of view to convey theme. Use this structure: Point → Evidence → Explanation → Effect.",
        parentTip: "The Point-Evidence-Explanation-Effect (PEEL) paragraph structure is the standard for secondary school literary analysis. If your child can write it confidently now, they are already ahead.",
        prompts: [
          { text: "Text title and author:", type: "lines", lines: 1 },
          { text: "My literary analysis paragraph (use PEEL structure):", type: "box", lines: 16 },
        ],
      },
      // 49
      {
        type: "true-false" as const,
        title: "True or False: Literary Analysis",
        instruction: "Circle True or False.",
        statements: [
          { text: "A valid inference requires text evidence plus background knowledge.", answer: true },
          { text: "All texts have exactly one theme.", answer: false },
          { text: "Theme can be expressed differently in different parts of the same text.", answer: true },
          { text: "Point of view is a neutral technical choice with no effect on meaning.", answer: false },
          { text: "Reading between the lines is a metaphor for inferencing — finding implied meaning.", answer: true },
          { text: "An author can use an unreliable narrator to create irony and distance between what is said and what is true.", answer: true },
        ],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Design an Inferencing Task",
        instruction: "Write a short passage (6 to 8 sentences) and then create three inferencing questions based on it. Write a model answer for each question that demonstrates the three-step process: text evidence → background knowledge → inference.",
        parentTip: "Creating questions about a text requires the deepest understanding of it. This task asks your child to think like a teacher — an extremely effective learning strategy.",
        prompts: [
          { text: "My passage:", type: "box", lines: 10 },
          { text: "Inferencing question 1 + model answer:", type: "box", lines: 6 },
          { text: "Inferencing question 2 + model answer:", type: "box", lines: 6 },
          { text: "Inferencing question 3 + model answer:", type: "box", lines: 6 },
        ],
      },
      // ── CONSOLIDATING continued 51–80 ─────────────────────────────────────
      // 51
      {
        type: "sorting" as const,
        title: "Sort: What Can Each Narrator Tell Us?",
        instruction: "Sort each type of information by whether a first person narrator, third person limited narrator, or third person omniscient narrator can provide it.",
        columns: ["First person only", "Third person limited only", "Third person omniscient only", "Any narrator (if relevant)"],
        items: [
          { label: "The narrator's own internal thoughts." },
          { label: "What another character is secretly planning without the main character knowing." },
          { label: "Direct observations of events the narrator witnesses." },
          { label: "The main character's emotions and motivations." },
          { label: "The simultaneous thoughts of two characters in different locations." },
          { label: "What happened in the past, before the story began." },
        ],
      },
      // 52
      {
        type: "open-response" as const,
        title: "Explore an Unreliable Narrator",
        instruction: "Read the passage below. Identify evidence that the narrator may be unreliable. Discuss what the reader might actually be able to infer despite the narrator's claims.",
        prompts: [
          {
            text: "PASSAGE (first person narrator):\nI never did anything wrong. Not once. I was always polite, always fair, always the first to offer help. If people did not like me, that was their problem. It had nothing to do with anything I did or said. The way I see it, if others had simply been more reasonable, none of it would have happened. I have no regrets.\n\nEvidence that this narrator may be unreliable:",
            type: "lines", lines: 4,
          },
          { text: "What might the reader be able to infer despite what the narrator claims?", type: "lines", lines: 4 },
          { text: "What technique is the author using and what effect does it create?", type: "lines", lines: 3 },
        ],
      },
      // 53
      {
        type: "multiple-choice" as const,
        title: "Theme in Different Genres",
        instruction: "Answer these questions about how theme appears across different genres.",
        questions: [
          { prompt: "A thriller novel and a nature documentary both explore the same theme: 'Survival requires adaptation.' What does this tell us about theme?", options: ["Themes are unique to fiction", "Themes can cross genres and text types — they are universal human ideas", "Thrillers and documentaries are the same genre", "All texts share the same themes"], answer: "Themes can cross genres and text types — they are universal human ideas" },
          { prompt: "Why might a dystopian novel like George Orwell's 1984 have multiple themes?", options: ["Because it is very long", "Because complex texts explore multiple dimensions of human experience simultaneously", "Because dystopian fiction always has exactly four themes", "Because the author was confused about the story's meaning"], answer: "Because complex texts explore multiple dimensions of human experience simultaneously" },
        ],
      },
      // 54
      {
        type: "open-response" as const,
        title: "Track Theme Development",
        instruction: "Choose a novel you have read recently. Track how the theme develops from beginning to middle to end. How does the author develop and complicate the theme across the whole text?",
        parentTip: "Tracking how a theme develops across a text is a sophisticated analytical skill. For this task, your child should think about key scenes or turning points that change the reader's understanding of the theme.",
        prompts: [
          { text: "Novel title and author:", type: "lines", lines: 1 },
          { text: "Theme (expressed as a full sentence):", type: "lines", lines: 2 },
          { text: "How is the theme introduced at the beginning?", type: "lines", lines: 3 },
          { text: "How does the theme develop or become complicated in the middle?", type: "lines", lines: 3 },
          { text: "How is the theme resolved or left open-ended at the end?", type: "lines", lines: 3 },
        ],
      },
      // 55
      {
        type: "circle-correct" as const,
        title: "Inference from Dialogue",
        instruction: "Read each piece of dialogue and circle the best inference.",
        questions: [
          { prompt: "'I am fine,' she said, not looking up from her book.\nBest inference:", options: ["She is genuinely fine.", "She does not want to discuss how she is really feeling.", "She loves reading more than talking.", "She is lying about being sick."] },
          { prompt: "'Oh, you are still here?' said Mrs Hawkes.\nBest inference:", options: ["Mrs Hawkes is pleased to see the character.", "Mrs Hawkes expected or hoped the character would have left.", "Mrs Hawkes is confused about the time.", "Mrs Hawkes is asking a simple factual question."] },
          { prompt: "'It does not matter,' he said, carefully folding the letter and placing it in his pocket.\nBest inference:", options: ["The letter truly does not matter to him.", "The letter matters very much — he is trying to hide this.", "He plans to throw the letter away.", "The letter is from a stranger."] },
        ],
      },
      // 56
      {
        type: "fill-in-blank" as const,
        title: "Inference Language Toolkit",
        instruction: "Strong analytical writing uses precise language to express inferences. Complete each sentence with the most appropriate inference phrase.",
        sentences: [
          { text: "The author _______ that the character is concealing a secret through the repeated use of evasive language.", blanks: ["implies / suggests"] },
          { text: "The repeated motif of water in this text _______ the theme of cleansing and renewal.", blanks: ["reinforces / symbolises"] },
          { text: "The reader can _______ from the character's behaviour that she has experienced this situation before.", blanks: ["infer / deduce"] },
          { text: "The _______ narrative voice creates a sense of intimacy, making the reader feel complicit in the character's choices.", blanks: ["first person / close third person"] },
        ],
      },
      // 57
      {
        type: "open-response" as const,
        title: "Write a Theme-Based Book Review",
        instruction: "Write a book review (4 to 5 paragraphs) of a novel you have recently read. Focus your review on the theme — how does the author develop it? Is it explored effectively? Does the text change how you think about this theme in your own life?",
        parentTip: "A theme-based review develops both critical thinking and writing skills simultaneously. If your child struggles with the format, suggest: Paragraph 1 — overview, Paragraph 2 — theme, Paragraph 3 — how the theme is developed, Paragraph 4 — your evaluation, Paragraph 5 — recommendation.",
        prompts: [
          { text: "My theme-based book review:", type: "box", lines: 24 },
        ],
      },
      // 58
      {
        type: "sorting" as const,
        title: "Sort: Inference Quality",
        instruction: "Sort each inference based on its quality — how well it is supported by evidence and how precisely it is expressed.",
        columns: ["High quality — specific, evidence-based, precise language", "Moderate — correct but vague", "Low quality — guessing or unsupported"],
        items: [
          { label: "The character is sad." },
          { label: "The character's refusal to eat and her repeated glances at the empty chair imply she is grieving someone she expected to be present." },
          { label: "I think she is upset because of something bad." },
          { label: "She might be angry." },
          { label: "The detail that she has worn the same coat for three days suggests she is not paying attention to her appearance, which may indicate she is in distress." },
          { label: "The character seems to feel some kind of negative emotion." },
        ],
      },
      // 59
      {
        type: "multiple-choice" as const,
        title: "Perspective and Empathy",
        instruction: "Answer these questions about the connection between point of view and empathy.",
        parentTip: "One of the profound purposes of literature is to build empathy by allowing readers to inhabit other perspectives. This conversation is worth having explicitly with your child.",
        questions: [
          { prompt: "Why might a novelist choose to tell a story from the perspective of a marginalised or overlooked character?", options: ["To make the story easier to write", "To force readers to inhabit a perspective they might otherwise ignore, building empathy and understanding", "Because that character is always the most interesting", "To avoid having to describe other characters"], answer: "To force readers to inhabit a perspective they might otherwise ignore, building empathy and understanding" },
          { prompt: "What does it mean to say that reading fiction builds empathy?", options: ["Fiction always has kind characters", "Reading fiction allows you to experience life through others' eyes, deepening your understanding of experiences different from your own", "Fiction makes you feel sad", "Fiction is always morally instructive"], answer: "Reading fiction allows you to experience life through others' eyes, deepening your understanding of experiences different from your own" },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Tip: The PEEL Paragraph for Literary Analysis",
        content: "Every literary analysis paragraph should follow this structure: Point — make a specific claim about the text (theme, technique, effect). Evidence — quote or closely paraphrase the text. Explanation — unpack the evidence (what technique is used, what it means). Effect — explain the impact on the reader. For example: 'The author develops the theme of isolation through the recurring image of the empty house (Point). When the narrator describes coming home to find every room exactly as she left it (Evidence), the precision of 'exactly' implies no one has been there — the house is a monument to absence (Explanation). This creates a profound sense of loneliness that mirrors the narrator's emotional state (Effect).'",
      },
      // 61 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Write a Story to Demonstrate a Theme",
        content: "Choose a theme you feel strongly about — something you believe to be true about human experience. Write a short story (one to two pages) that explores this theme WITHOUT stating it explicitly anywhere in the text. Every scene, image and character choice should work towards expressing the theme, but the word 'theme' and the theme itself should never appear in the words. Share it with a family member and ask them to identify the theme. If they get it, your storytelling is working.",
      },
      // 62
      {
        type: "open-response" as const,
        title: "Inference from Setting",
        instruction: "Read the description and answer the inferencing questions about what the setting implies.",
        prompts: [
          {
            text: "SETTING DESCRIPTION:\nThe waiting room had plastic chairs bolted to the floor. A television in the corner played the same loop of cheerful morning news. The coffee machine had an 'Out of Order' sign that looked permanent. A child drew pictures on a notepad while her mother stared at nothing in particular.\n\nWhat type of place might this be? What clues support your inference?",
            type: "lines", lines: 4,
          },
          { text: "What can you infer about the emotional experience of the people in this room? What details support this?", type: "lines", lines: 4 },
          { text: "How does the author create a mood without explicitly describing feelings?", type: "lines", lines: 3 },
        ],
      },
      // 63
      {
        type: "true-false" as const,
        title: "True or False: Advanced Literary Thinking",
        instruction: "Circle True or False.",
        statements: [
          { text: "A reliable narrator always tells the literal truth.", answer: false },
          { text: "Subtext is the meaning beneath the surface of what characters say and do.", answer: true },
          { text: "The reader's personal background can affect how they interpret a theme.", answer: true },
          { text: "An author must state the theme explicitly for readers to identify it.", answer: false },
          { text: "Recurring symbols or motifs in a text can reinforce the theme.", answer: true },
          { text: "Point of view is a purely technical choice with no effect on theme or meaning.", answer: false },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Symbol and Theme",
        instruction: "In many literary texts, symbols (recurring objects or images) reinforce the theme. Choose a symbol from a text you have read and analyse how it connects to the theme.",
        parentTip: "Symbols in literature range from obvious (a wilting flower = death) to subtle (a recurring colour, a type of weather). Help your child look for patterns and repetition in the texts they read.",
        prompts: [
          { text: "Text title:", type: "lines", lines: 1 },
          { text: "The symbol I identified:", type: "lines", lines: 1 },
          { text: "How does the symbol appear and develop in the text?", type: "lines", lines: 3 },
          { text: "How does the symbol connect to the theme?", type: "lines", lines: 3 },
          { text: "Why might the author have chosen this symbol rather than stating the theme directly?", type: "lines", lines: 3 },
        ],
      },
      // 65
      {
        type: "multiple-choice" as const,
        title: "Inference from Silence and Omission",
        instruction: "What an author chooses NOT to say can be as meaningful as what they do say. Answer these questions.",
        questions: [
          { prompt: "A character is asked a direct question and changes the subject. What can the reader infer?", options: ["The character did not hear the question", "The character is deliberately avoiding the topic — likely because the answer is uncomfortable or revealing", "The character does not understand the question", "The character is hard of hearing"], answer: "The character is deliberately avoiding the topic — likely because the answer is uncomfortable or revealing" },
          { prompt: "An author describes a family dinner with great detail but never mentions the absent father. What can the reader infer?", options: ["The father is at work", "The absence is significant and the author wants the reader to notice it without stating it directly", "The author forgot to include the father", "The father is not important to the story"], answer: "The absence is significant and the author wants the reader to notice it without stating it directly" },
          { prompt: "What literary device involves meaning created through what is left unsaid or implied?", options: ["Hyperbole", "Subtext", "Alliteration", "Simile"], answer: "Subtext" },
        ],
      },
      // 66
      {
        type: "open-response" as const,
        title: "Write About Subtext",
        instruction: "Write a short scene (6 to 8 sentences) between two characters who are arguing about something trivial (like who forgot to buy milk) but the real issue they are avoiding is something deeper (like a broken promise or a long-held resentment). The surface argument should be present; the deeper conflict should be visible only through implication and inference.",
        parentTip: "This is a sophisticated creative task that requires understanding subtext. Discuss a real-life parallel first — times when an argument about something small is really about something much bigger.",
        prompts: [
          { text: "The surface argument (what they are saying):", type: "lines", lines: 1 },
          { text: "The real underlying issue (what it is really about):", type: "lines", lines: 1 },
          { text: "My scene:", type: "box", lines: 14 },
        ],
      },
      // 67
      {
        type: "circle-correct" as const,
        title: "Theme and the Author's Perspective",
        instruction: "An author's perspective, values and lived experience can shape the themes they explore. Circle the best answer.",
        questions: [
          { prompt: "Why might the life experiences of an author affect the themes in their writing?", options: ["Authors always write about themselves", "Authors draw on what they know and care about; their perspective shapes which ideas feel urgent and true", "Life experience makes authors less creative", "Only autobiography reflects an author's perspective"] },
          { prompt: "If two readers from very different cultural backgrounds read the same novel, might they identify different themes?", options: ["No — themes are objective facts", "Yes — different life experiences can lead to different but equally valid interpretations of a theme", "Yes — but only one of them can be correct", "No — the author's intended theme is the only valid one"] },
          { prompt: "What should you do if your interpretation of a theme differs from your teacher's or another reader's?", options: ["Assume you are wrong", "Accept the teacher's interpretation without question", "Defend your interpretation with evidence from the text and remain open to other perspectives", "Ignore other interpretations entirely"] },
        ],
      },
      // 68
      {
        type: "fill-in-blank" as const,
        title: "Analytical Vocabulary for Inferencing and Theme",
        instruction: "Fill in the blank with the most appropriate analytical term from the word bank.",
        sentences: [
          { text: "The author _______ a mood of unease through the description of the empty house. (evokes / eliminates)", blanks: ["evokes"] },
          { text: "The repeated symbol of the locked door _______ the theme of suppressed emotion. (reinforces / contradicts)", blanks: ["reinforces"] },
          { text: "The reader can _______ that the character is hiding something based on her evasive responses. (infer / summarise)", blanks: ["infer"] },
          { text: "The _______ of the first person narrator limits what the reader can know about other characters' motivations. (perspective / grammar)", blanks: ["perspective"] },
        ],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Reflection on a Text's Point of View Choice",
        instruction: "Choose a novel or short story. Write a reflective paragraph explaining why you think the author chose the specific point of view they used, and how the story would change if told from a different point of view.",
        parentTip: "This is a classic secondary school English question. Practising it now builds the analytical habit of connecting authorial choices to their effects.",
        prompts: [
          { text: "Text title and author:", type: "lines", lines: 1 },
          { text: "Point of view used:", type: "lines", lines: 1 },
          { text: "Why I think the author made this choice:", type: "lines", lines: 4 },
          { text: "How the story would change if told from a different point of view:", type: "lines", lines: 4 },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Literary Thinking Beyond the Worksheet",
        instruction: "Try these activities this week to develop your skills in inferencing, theme and point of view.",
        parentTip: "These activities are most effective when done alongside your child — sharing your own thinking models the process and creates a genuine conversation about literature.",
        suggestions: [
          "After finishing a chapter or episode of a TV show, discuss: What did we infer that was not stated directly? What clues led us to that inference? Was our inference correct by the end?",
          "Choose a news story. Identify: What facts are stated? What is implied but not stated? What point of view does the reporter seem to hold? How might the story look from the perspective of someone on the opposite side?",
          "Look at a famous painting or photograph. Write three inferences about what is happening, what happened before and what might happen next. Support each with visual clues.",
        ],
      },
      // ── EXTENDING 71–100 ─────────────────────────────────────────────────
      // 71
      {
        type: "multiple-choice" as const,
        title: "Advanced Literary Analysis Concepts",
        instruction: "Choose the best answer for each higher-order question.",
        questions: [
          { prompt: "What is the difference between a text's stated meaning and its subtext?", options: ["There is no difference", "Stated meaning is what the text explicitly says; subtext is the implied meaning beneath the surface", "Stated meaning is false; subtext is always true", "Subtext only appears in poetry"], answer: "Stated meaning is what the text explicitly says; subtext is the implied meaning beneath the surface" },
          { prompt: "Why might an author deliberately choose an unreliable narrator?", options: ["To make the story easier to write", "To create irony, ambiguity and make the reader an active participant in interpreting what really happened", "Because reliable narrators are boring", "To avoid having to develop other characters"], answer: "To create irony, ambiguity and make the reader an active participant in interpreting what really happened" },
          { prompt: "When we say a text is 'polyphonic', we mean:", options: ["It has a musical element", "Multiple voices or perspectives are present, creating a complex and layered meaning", "It is told entirely in dialogue", "It has no clear narrator"], answer: "Multiple voices or perspectives are present, creating a complex and layered meaning" },
        ],
      },
      // 72
      {
        type: "open-response" as const,
        title: "Extended Literary Analysis Essay",
        instruction: "Write a 4 to 5 paragraph literary analysis essay about a text you have read. Focus your essay on how the author uses point of view to develop a specific theme. Your essay should include: an introduction with a thesis statement, two to three body paragraphs using PEEL structure, and a conclusion.",
        parentTip: "This is a full essay task — the most demanding on this worksheet. If needed, support your child through the planning stage: thesis statement first, then the evidence for each body paragraph, then write.",
        prompts: [
          { text: "Text title and author:", type: "lines", lines: 1 },
          { text: "My thesis statement (how does the author use point of view to develop a theme?):", type: "lines", lines: 3 },
          { text: "My essay:", type: "box", lines: 28 },
        ],
      },
      // 73
      {
        type: "sorting" as const,
        title: "Sort: Techniques for Conveying Theme",
        instruction: "Sort each technique by how directly it conveys theme.",
        columns: ["Direct statement of theme", "Symbol or motif", "Character arc", "Implied through subtext / reader inference"],
        items: [
          { label: "A character explicitly says: 'I have learned that love requires sacrifice.'" },
          { label: "A recurring image of birds in cages throughout the novel." },
          { label: "A character begins selfish and ends generous through their experiences." },
          { label: "A character's reluctance to open letters — never explained — that the reader must interpret." },
          { label: "A story title: 'The Weight We Carry'" },
          { label: "A character's changing relationship with a broken mirror over the course of the story." },
          { label: "A journey narrative in which each stage of the physical journey mirrors an internal change." },
          { label: "The ending is ambiguous — the reader must decide what it means." },
        ],
      },
      // 74
      {
        type: "true-false" as const,
        title: "True or False: Mastery Level",
        instruction: "Circle True or False.",
        statements: [
          { text: "Literary analysis always requires only one correct interpretation.", answer: false },
          { text: "A strong literary argument is always supported by evidence from the text.", answer: true },
          { text: "The author's intended meaning is always the most valid interpretation of a text.", answer: false },
          { text: "Readers bring their own experiences and values to a text, which affects how they interpret it.", answer: true },
          { text: "Themes in literature always resolve clearly by the end of a text.", answer: false },
          { text: "A skilled reader can identify theme even when it is not stated explicitly.", answer: true },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Reading Literature Actively",
        content: "Active reading is what distinguishes a skilled literary thinker from a passive consumer of story. Active readers ask questions constantly: Why did the author choose this word? Why this point of view? What is not being said? What does this image suggest? They write in the margins, use sticky notes, mark patterns and revisit earlier passages when a later development changes the meaning. If you read a book once and never return to it, you have only experienced the story. Active rereading reveals the craft.",
      },
      // 76
      {
        type: "fill-in-blank" as const,
        title: "Write About Theme Using Precise Analytical Language",
        instruction: "Fill in each blank with a precise analytical term or phrase.",
        sentences: [
          { text: "The author _______ the theme of isolation through the repeated image of locked doors.", blanks: ["develops / reinforces"] },
          { text: "The first person narrator's _______ account of events creates dramatic irony when the reader understands more than the narrator does.", blanks: ["limited / unreliable"] },
          { text: "The _______ of the novel — its central message about the cost of silence — is conveyed through the protagonist's inability to speak the truth.", blanks: ["theme"] },
          { text: "By choosing a _______ narrator, the author is able to reveal the private thoughts of all characters, creating a sense of _______ irony.", blanks: ["third person omniscient", "dramatic"] },
        ],
      },
      // 77
      {
        type: "open-response" as const,
        title: "Analyse Theme in a Non-Fiction Text",
        instruction: "Choose a non-fiction text — a biography, a documentary, an essay or a speech. Identify at least two themes and analyse how they are developed. Use evidence from the text to support your analysis.",
        parentTip: "Applying literary thinking skills to non-fiction is an important extension. It shows that these are not just 'English class' skills — they apply to all reading and communication.",
        prompts: [
          { text: "Non-fiction text (title, type, source):", type: "lines", lines: 1 },
          { text: "Theme 1 (full sentence):", type: "lines", lines: 2 },
          { text: "Evidence and analysis for Theme 1:", type: "box", lines: 6 },
          { text: "Theme 2 (full sentence):", type: "lines", lines: 2 },
          { text: "Evidence and analysis for Theme 2:", type: "box", lines: 6 },
        ],
      },
      // 78
      {
        type: "multiple-choice" as const,
        title: "The Reader's Role in Constructing Meaning",
        instruction: "Modern literary theory emphasises that meaning is created in the interaction between text and reader. Answer these questions.",
        questions: [
          { prompt: "What is meant by the idea that 'the reader completes the text'?", options: ["The reader writes the ending", "The text only achieves full meaning when a reader actively engages with and interprets it", "Readers are more important than authors", "The reader corrects the author's errors"], answer: "The text only achieves full meaning when a reader actively engages with and interprets it" },
          { prompt: "Why might two equally skilled readers produce different valid interpretations of the same theme?", options: ["One of them must be wrong", "Different life experiences, cultural contexts and knowledge produce different but equally valid readings", "Themes are always ambiguous and unresolvable", "Only one interpretation can be correct"], answer: "Different life experiences, cultural contexts and knowledge produce different but equally valid readings" },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Close Reading: Full Analysis of a Short Passage",
        instruction: "Read the passage carefully multiple times. Write a detailed analysis that discusses: the point of view, at least two inferences with evidence, the theme, and the techniques the author uses to convey meaning. Aim for at least 200 words.",
        parentTip: "Close reading is a core secondary and university English skill. Praise the depth and specificity of evidence use, not just the identification of techniques.",
        prompts: [
          {
            text: "PASSAGE:\nHe had kept the key for thirty years in a drawer he rarely opened. He was not sure, on most days, what it unlocked — perhaps a door that no longer existed, perhaps a box long since lost. But throwing it away had never seemed possible. Some things, he had decided, are not for throwing away. You carry them instead, and you learn to call the weight something other than grief.\n\nMy close reading analysis:",
            type: "box", lines: 20,
          },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Reading as Empathy",
        content: "The novelist Chimamanda Ngozi Adichie says: 'Stories matter. Many stories matter. Stories have been used to dispossess and to malign, but stories can also be used to empower and to humanise.' Choose one text you have read this year that genuinely changed how you think or feel about something. Write a one-page reflection: What did you believe before you read it? What do you believe now? What inference, theme or perspective shift caused the change? This reflection is evidence that literature is not just entertainment — it is how we grow.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Comparative Essay: Theme Across Two Texts",
        instruction: "Write a comparative literary essay (4 to 5 paragraphs) exploring how a common theme is developed in two different texts. Your essay should argue a specific thesis about how the two texts approach the theme similarly or differently.",
        parentTip: "Comparative essays are a staple of secondary English assessments. The key skill is keeping both texts present throughout — not writing about one and then the other, but comparing them paragraph by paragraph.",
        prompts: [
          { text: "Text 1 title and author:", type: "lines", lines: 1 },
          { text: "Text 2 title and author:", type: "lines", lines: 1 },
          { text: "Common theme (full sentence):", type: "lines", lines: 2 },
          { text: "Thesis statement (how do the texts approach this theme similarly or differently?):", type: "lines", lines: 3 },
          { text: "My comparative essay:", type: "box", lines: 28 },
        ],
      },
      // 82
      {
        type: "fill-in-blank" as const,
        title: "Advanced Inference Vocabulary",
        instruction: "Fill in the blank with the most precise term.",
        sentences: [
          { text: "The term for meaning implied beneath the surface of dialogue and action is _______.", blanks: ["subtext"] },
          { text: "When the reader knows more than a character, creating tension, this is called _______ _______.", blanks: ["dramatic irony"] },
          { text: "A narrator whose account of events cannot be fully trusted is called an _______ narrator.", blanks: ["unreliable"] },
          { text: "The technique of showing something without stating it directly is known as '_______  _______  tell'.", blanks: ["show don't"] },
          { text: "A symbol that recurs throughout a text and reinforces the theme is called a _______.", blanks: ["motif"] },
        ],
      },
      // 83
      {
        type: "multiple-choice" as const,
        title: "Mastery Check: Literary Analysis",
        instruction: "Demonstrate your mastery by answering these challenge questions.",
        questions: [
          { prompt: "What distinguishes a strong literary analysis from a weak one?", options: ["A strong analysis is longer", "A strong analysis makes a specific argument supported by precise textual evidence and explains the effect", "A strong analysis identifies more techniques", "A strong analysis uses difficult vocabulary"], answer: "A strong analysis makes a specific argument supported by precise textual evidence and explains the effect" },
          { prompt: "If you are asked to analyse how point of view shapes meaning in a text, what should your response include?", options: ["Only the identification of the point of view type", "A description of what happens in the text", "The type of point of view, how it limits or expands the reader's access to information, and how this creates specific effects related to theme and character", "A list of every character's name"], answer: "The type of point of view, how it limits or expands the reader's access to information, and how this creates specific effects related to theme and character" },
        ],
      },
      // 84
      {
        type: "sorting" as const,
        title: "Sort: Inference, Summary or Analysis?",
        instruction: "Sort each response to a text into the correct column.",
        columns: ["Summary (what happens)", "Inference (what is implied)", "Analysis (how and why — technique and effect)"],
        items: [
          { label: "The character leaves the party early." },
          { label: "Her early departure suggests she is uncomfortable in social situations, perhaps due to anxiety or a previous negative experience." },
          { label: "The author uses the detail of the early departure to develop the theme of isolation, showing how the character's internal world prevents her from connecting with others." },
          { label: "The boy does not speak for three chapters." },
          { label: "The boy's silence implies something traumatic has happened that he is unable or unwilling to process verbally." },
          { label: "The sustained silence is a formal technique — the author withholds the character's voice to mirror his emotional shutdown, creating dramatic tension for the reader." },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Independent Reading Response: Apply All Three Skills",
        instruction: "Choose a chapter or section from your current reading book. Write a response that demonstrates all three skills: (1) an inference with evidence, (2) a theme statement with evidence, and (3) an analysis of how the point of view shapes what the reader can know.",
        parentTip: "This task integrates all three strands of this worksheet. It mirrors the type of extended response expected in secondary school English assessments.",
        prompts: [
          { text: "Text title, author and chapter/section:", type: "lines", lines: 1 },
          { text: "1. My inference (with evidence):", type: "box", lines: 6 },
          { text: "2. My theme statement (with evidence):", type: "box", lines: 6 },
          { text: "3. My analysis of point of view and its effect:", type: "box", lines: 6 },
        ],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Reading and Thinking at Secondary School Level",
        instruction: "Circle True or False.",
        statements: [
          { text: "At secondary school, teachers expect students to both identify and analyse literary techniques.", answer: true },
          { text: "A one-word theme like 'hope' is sufficient for a secondary school essay.", answer: false },
          { text: "Point of view analysis should include the effect the point of view creates, not just its identification.", answer: true },
          { text: "Making an inference means stating what you think without providing evidence.", answer: false },
          { text: "The ability to discuss subtext and implied meaning is a marker of advanced literary thinking.", answer: true },
          { text: "All texts have a definitive, correct interpretation that every reader should agree on.", answer: false },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Write a Character Study Using Inference",
        instruction: "Write a detailed character study (8 to 10 sentences) of a character from your current reading book. Focus entirely on what you can INFER about them from their actions, speech and relationships — do not simply describe events. Every inference must be linked to specific text evidence.",
        parentTip: "A character study based on inference requires careful selection of significant details. Help your child distinguish between details that reveal character (inferential) and events that simply happen (plot summary).",
        prompts: [
          { text: "Character name and text:", type: "lines", lines: 1 },
          { text: "My inference-based character study:", type: "box", lines: 18 },
        ],
      },
      // 88
      {
        type: "multiple-choice" as const,
        title: "Tying It All Together: Theme, Inference, Point of View",
        instruction: "Answer these integrative questions that bring together all three concepts.",
        questions: [
          { prompt: "How do inference, theme and point of view work together in a literary text?", options: ["They are three separate unrelated skills", "Point of view shapes what information is available; inference allows readers to find hidden meaning; theme is the big idea that emerges from both — the three skills are deeply interconnected", "Inference is about plot; theme is about character; point of view is about setting", "Only theme matters for literary analysis"], answer: "Point of view shapes what information is available; inference allows readers to find hidden meaning; theme is the big idea that emerges from both — the three skills are deeply interconnected" },
          { prompt: "A first person narrator states that they are perfectly happy. But they spend every chapter returning to memories of a particular summer. What is the most insightful literary response?", options: ["The narrator is happy as they say.", "The reader can infer from the repeated return to that summer that the narrator has unresolved feelings; this unreliable narration develops the theme that we cannot always face or name our deepest losses.", "The narrator is lying.", "The summer was probably just a nice memory."], answer: "The reader can infer from the repeated return to that summer that the narrator has unresolved feelings; this unreliable narration develops the theme that we cannot always face or name our deepest losses." },
        ],
      },
      // 89
      {
        type: "home-activity" as const,
        title: "Extended Literary Project: Read, Analyse, Create",
        instruction: "Over the next three weeks, complete this extended literary project.",
        parentTip: "This project integrates reading, analysis and creative writing. The three-week timeline allows for deep engagement rather than rushed completion. Check in at each stage.",
        suggestions: [
          "Week 1 — Close Reading: Choose a short story or chapter you have not read before. Read it twice: once for enjoyment, once for analysis. Annotate it: underline inferences you made, circle techniques that develop theme, note the point of view and any shifts.",
          "Week 2 — Analysis: Write a detailed analytical essay (3 to 4 paragraphs) on the short story or chapter. Focus on how the author uses point of view to develop theme. Use at least five pieces of textual evidence.",
          "Week 3 — Creative Response: Write a creative response to the text: either a retelling from a different point of view, or an alternative ending that changes the theme. Write a brief reflection explaining the choices you made and how they changed the meaning.",
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Five Habits of a Literary Thinker",
        content: "1. Always ask 'Why?' — Why did the author make this choice? 2. Look for what is NOT there — absence and silence are as meaningful as presence. 3. Connect the local to the universal — how does this scene connect to the whole text's theme? 4. Trust your responses — a strong emotional or intellectual reaction often points to something worth analysing. 5. Return to the text — every time you re-read, you will notice something new. These five habits will serve you through secondary school, university and a lifetime of reading.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Write About a Text That Changed How You Think",
        instruction: "Write a personal literary essay (3 to 4 paragraphs) about a text that genuinely affected how you think about something. What did the text make you infer, what theme did it explore, and how did it change your perspective?",
        parentTip: "This is the most personal and authentic form of literary response — connecting the text to the reader's own life and thinking. There are no wrong answers, only more or less developed ones.",
        prompts: [
          { text: "My personal literary essay:", type: "box", lines: 24 },
        ],
      },
      // 92
      {
        type: "circle-correct" as const,
        title: "Advanced Point of View Analysis",
        instruction: "Circle the best analytical statement for each example.",
        questions: [
          { prompt: "In a story about war, the author chooses a child narrator. What is the most insightful analysis of this choice?", options: ["Children are simpler to write", "The child's point of view limits the reader's access to political context, forcing them to experience the war's emotional reality without adult justification — this serves the theme that war's true cost is felt most by the innocent", "Child narrators are always unreliable", "It makes the story easier for young readers"] },
          { prompt: "A novel switches between two first person narrators who have conflicting perspectives on the same events. What effect does this create?", options: ["Confusion", "The structural device of dual narration develops the theme that truth is subjective and perspective-dependent — readers must actively decide what to believe", "It doubles the length of the novel", "It makes both characters equally unreliable"] },
        ],
      },
      // 93
      {
        type: "sorting" as const,
        title: "Sort: Evidence Strength for Inferences",
        instruction: "Sort each piece of evidence by how strongly it supports the inference that a character is afraid.",
        columns: ["Strong evidence", "Moderate evidence", "Weak or irrelevant evidence"],
        items: [
          { label: "The character's hands were trembling." },
          { label: "The character was wearing a grey coat." },
          { label: "She took three steadying breaths before opening the door." },
          { label: "The weather was cold." },
          { label: "She walked slower than usual, pausing at each corner." },
          { label: "She had eaten breakfast that morning." },
          { label: "Her voice, when she finally spoke, was barely above a whisper." },
          { label: "She glanced behind her three times before entering the building." },
        ],
      },
      // 94
      {
        type: "multiple-choice" as const,
        title: "Narrative Distance and Its Effect",
        instruction: "Narrative distance refers to how 'close' the narrator feels to the characters. Choose the best answer.",
        questions: [
          { prompt: "Which point of view creates the most narrative distance (the narrator feels furthest from the characters)?", options: ["First person", "Close third person", "Omniscient third person with reflective, analytical commentary", "Second person"], answer: "Omniscient third person with reflective, analytical commentary" },
          { prompt: "What effect does close narrative distance (intimate, immediate) create for the reader?", options: ["The reader feels like an observer watching from outside", "The reader feels as if they are inside the character's experience — creating empathy and immediacy", "The reader has access to all characters' thoughts simultaneously", "The reader can trust the narrator completely"], answer: "The reader feels as if they are inside the character's experience — creating empathy and immediacy" },
        ],
      },
      // 95
      {
        type: "open-response" as const,
        title: "Design Your Own Analytical Question",
        instruction: "Design three analytical questions about a text you have read. Each question should require a response that uses inference, theme analysis or point of view analysis. Write a model answer for one of your questions.",
        parentTip: "Designing questions is one of the highest-order learning tasks. Your child must have deep understanding to construct questions that require analytical thinking rather than simple recall.",
        prompts: [
          { text: "Text title and author:", type: "lines", lines: 1 },
          { text: "Question 1 (inference-based):", type: "lines", lines: 2 },
          { text: "Question 2 (theme-based):", type: "lines", lines: 2 },
          { text: "Question 3 (point of view-based):", type: "lines", lines: 2 },
          { text: "Model answer for Question ___ (choose one):", type: "box", lines: 12 },
        ],
      },
      // 96
      {
        type: "fill-in-blank" as const,
        title: "Mastery Vocabulary Check",
        instruction: "Fill in the blank with the correct literary term.",
        sentences: [
          { text: "A _______ is a central image, symbol or idea that recurs throughout a text and reinforces the theme.", blanks: ["motif"] },
          { text: "A narrator who seems to tell the truth but whose account is questionable or limited is called an _______ narrator.", blanks: ["unreliable"] },
          { text: "The technique where readers know more than a character, creating tension, is called _______ _______.", blanks: ["dramatic irony"] },
          { text: "The meaning beneath the surface of what characters say and do is called _______.", blanks: ["subtext"] },
          { text: "The overall message or central idea of a text, expressed as a full sentence about human experience, is called the _______.", blanks: ["theme"] },
        ],
      },
      // 97
      {
        type: "open-response" as const,
        title: "Reflection: My Development as a Literary Thinker",
        instruction: "Reflect on what you have learned throughout this worksheet and how your thinking about texts has developed.",
        prompts: [
          { text: "Which of the three skills — inferencing, theme, or point of view — do you find most challenging? How have you improved?", type: "lines", lines: 4 },
          { text: "What has changed about the way you read since starting this worksheet?", type: "lines", lines: 4 },
          { text: "Name a text you want to re-read with your new analytical skills. What do you expect to notice that you missed the first time?", type: "lines", lines: 3 },
        ],
      },
      // 98
      {
        type: "home-activity" as const,
        title: "Reading Journal",
        instruction: "Start a reading journal to capture your literary thinking as you read.",
        parentTip: "A reading journal becomes an invaluable resource for secondary school English. Help your child start it now and make it a genuine habit rather than a chore.",
        suggestions: [
          "After each reading session, write at least two inferences you made with the text evidence that supported them. Over time, this builds the habit of reading actively rather than passively.",
          "At the end of each book, write a one-paragraph theme statement and a one-paragraph point of view analysis. Keep these in your journal — they are the beginning of a personal library of literary thinking.",
          "Once a month, look back through your journal. What patterns do you notice? Are there themes that keep appearing across different texts you read? What does this tell you about your own reading interests and values?",
        ],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Create a Literary Thinking Guide",
        instruction: "Create a one-page guide titled 'How to Think Like a Literary Scholar'. Include: definitions and examples for inference, theme, point of view and subtext; the PEEL paragraph structure; and your top five tips for reading analytically.",
        parentTip: "Creating a summary guide is a powerful consolidation task. Display it prominently — it will be used as a reference for secondary school English for years.",
        prompts: [
          { text: "My Literary Thinking Guide:", type: "box", lines: 24 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Write a Story That Explores a Theme You Believe In",
        content: "You have now spent significant time analysing how other authors use inferencing, theme and point of view. It is time to turn these skills on yourself as a writer. Think of a theme you genuinely believe in — something true about human experience that you want to share. Write a short story of two to three pages that explores this theme entirely through character, action and imagery — never stating the theme directly. Choose your point of view deliberately: which narrator gives the reader the best access to the theme? Create at least three moments that invite the reader to make an inference. This is the most important writing challenge on this worksheet — the one that asks you to be an author, not just a student.",
      },
    ],
  },
  {
    slug: "expository-writing",
    title: "Expository Writing: Informative Paragraphs",
    strand: "Literacy",
    description:
      "Write clear informative paragraphs with a strong topic sentence, supporting evidence and a concluding statement.",
    learningGuide: {
      concept:
        "Expository writing explains or informs. A well-structured expository paragraph begins with a topic sentence (the main idea), continues with evidence and explanation, and ends with a concluding statement. Transition words such as furthermore, in addition, as a result and in conclusion help connect ideas smoothly.",
      activation:
        "Ask your child to explain one topic they know well — their sport, hobby or a recent history project — as if explaining it to someone who knows nothing about it. Notice how they structure the explanation.",
      check:
        "After the worksheet, ask your child to read their paragraph aloud and check: Does the first sentence clearly state the topic? Is each piece of evidence followed by an explanation? Does the last sentence summarise or conclude?",
    },
    lesson: {
      title: "Explain It Clearly",
      objective:
        "Plan and write a structured expository paragraph using a topic sentence, evidence and a concluding statement.",
      materials: [
        "This worksheet",
        "A pencil",
        "Reference materials on your chosen topic (optional)",
      ],
      intro: {
        title: "The Information Sandwich",
        script:
          "Imagine an information sandwich. The top slice of bread is your topic sentence — it tells the reader exactly what this paragraph is about. The filling is your evidence and explanation — the facts, statistics and examples that prove your point. The bottom slice is your concluding sentence — it wraps up the idea and sometimes links to what comes next. Without a bottom slice, the sandwich falls apart! Today we are going to build some information sandwiches.",
        action:
          "Sketch a sandwich on paper with the three layers labelled: topic sentence, evidence and explanation, concluding statement. Keep it visible as a visual prompt throughout the lesson.",
      },
      mainActivity: {
        title: "Transition Word Toolkit",
        script:
          "One thing that separates average expository writing from excellent expository writing is the use of transition words. These are words and phrases that connect your ideas smoothly. For adding information: furthermore, in addition, moreover. For showing cause and effect: as a result, therefore, consequently. For concluding: in conclusion, overall, to summarise. Let us look at an example paragraph and identify where the author used transition words and whether they improved the flow.",
        action:
          "Read the model paragraph on the worksheet together. Ask your child to circle every transition word and discuss its effect.",
      },
      wrapUp: {
        title: "The Expert Paragraph",
        script:
          "Now you are going to write an expository paragraph on a topic where you are the expert. This could be your sport, your hobby, your pet, a place you have visited or a topic from your curriculum. Use the information sandwich structure and include at least two transition words.",
        action:
          "Check the paragraph together using the checklist on the worksheet.",
      },
      parentTip:
        "Ask your child to explain how something works — a recipe, a sport, a science concept — as a spoken explanation before writing. Verbalising helps organise thinking before the pen hits the paper.",
      extension:
        "Write a three-paragraph expository piece on a topic of your choice. Each paragraph should have its own topic sentence, and the paragraphs should flow together using linking sentences.",
      resources: [
        {
          title: "ReadWriteThink — Expository Writing",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/expository-writing-model",
          description:
            "Structured lesson for planning and writing expository paragraphs.",
        },
        {
          title: "Khan Academy — Informative Writing",
          url: "https://www.khanacademy.org/ela/cc-5th-grade-reading-vocab/xe2c54a99ede11c03:writing/xe2c54a99ede11c03:informative-writing/e/informative-writing",
          description:
            "Guided practice for Year 5 level informative and expository writing.",
        },
        {
          title: "ABC Education — Writing Skills",
          url: "https://www.abc.net.au/education/learn-english/writing/",
          description:
            "Writing tips and model texts for upper primary students.",
        },
      ],
    },
    activities: [
      // 1
      {
        type: "multiple-choice" as const,
        title: "What Is Expository Writing?",
        instruction: "Choose the best answer for each question about expository writing.",
        parentTip: "Expository writing is the backbone of academic success. At Year 5, students write reports, explanations and essays — all expository forms. Building this skill now pays dividends across every subject.",
        questions: [
          { prompt: "What is the main purpose of expository writing?", options: ["To entertain readers with an imaginative story", "To persuade readers to change their opinion", "To inform or explain a topic clearly and accurately", "To express personal feelings about an experience"], answer: "To inform or explain a topic clearly and accurately" },
          { prompt: "Which of these is an example of an expository text?", options: ["A fairy tale about a dragon", "A science report about the water cycle", "A poem about autumn leaves", "A diary entry about a camping trip"], answer: "A science report about the water cycle" },
          { prompt: "An expository paragraph is built around:", options: ["A hook that grabs the reader's attention", "A main idea stated in a topic sentence", "A sequence of events in time order", "A comparison between two characters"], answer: "A main idea stated in a topic sentence" },
        ],
      },
      // 2
      {
        type: "true-false" as const,
        title: "True or False: Expository Writing Basics",
        instruction: "Mark each statement True or False.",
        parentTip: "Before checking answers together, ask your child to explain their reasoning for each statement. Justifying thinking is as important as the answer.",
        statements: [
          { text: "A topic sentence states the main idea of the paragraph.", answer: true },
          { text: "Expository writing always tells a story with characters.", answer: false },
          { text: "Evidence in an expository paragraph can be facts, statistics or examples.", answer: true },
          { text: "Every sentence in an expository paragraph should introduce a new topic.", answer: false },
          { text: "A concluding statement wraps up the main idea of the paragraph.", answer: true },
        ],
      },
      // 3
      {
        type: "matching" as const,
        title: "Match the Paragraph Parts",
        instruction: "Draw a line to match each paragraph part to its description.",
        left: ["Topic sentence", "Evidence", "Explanation", "Transition word", "Concluding statement"],
        right: ["A fact, statistic or example that supports the main idea", "Tells the reader what the paragraph is about", "Shows how ideas connect — e.g. furthermore, therefore", "Explains why the evidence matters", "Wraps up the idea and links to what comes next"],
      },
      // 4
      {
        type: "circle-correct" as const,
        title: "Identify the Topic Sentence",
        instruction: "Read each paragraph. Circle the letter of the sentence that is the topic sentence.",
        parentTip: "A topic sentence is usually — but not always — the first sentence of the paragraph. Good readers can spot it even when it appears in the middle or at the end.",
        questions: [
          { prompt: "A) Koalas sleep up to 22 hours per day. B) The koala's diet of eucalyptus leaves provides very little energy, which explains many of its unusual behaviours. C) They move slowly and stay still for long periods. D) They have a specialised digestive system to process the toxins in the leaves.", options: ["A", "B", "C", "D"] },
          { prompt: "A) Every morning, students line up outside. B) Many children arrive early before school begins. C) School routines help students feel safe and ready to learn. D) Teachers greet students at the door.", options: ["A", "B", "C", "D"] },
        ],
      },
      // 5
      {
        type: "fill-in-blank" as const,
        title: "Complete the Expository Paragraph",
        instruction: "Fill in each blank with the correct word from the box: therefore, furthermore, evidence, topic sentence, concluding statement.",
        sentences: [
          { text: "The first sentence of an expository paragraph is called the _____.", blanks: ["topic sentence"] },
          { text: "A writer uses _____ such as facts and statistics to support the main idea.", blanks: ["evidence"] },
          { text: "The word _____ signals that a cause-and-effect relationship is being shown.", blanks: ["therefore"] },
          { text: "_____ is used to add another piece of supporting information.", blanks: ["furthermore"] },
          { text: "The final sentence is the _____, which wraps up the paragraph's main idea.", blanks: ["concluding statement"] },
        ],
      },
      // 6
      {
        type: "sorting" as const,
        title: "Sort the Transition Words",
        instruction: "Sort each transition word or phrase into the correct category based on its purpose.",
        parentTip: "Transition words are the glue of expository writing. After sorting, challenge your child to use one from each column in a sentence about any topic they are studying.",
        columns: ["Adding information", "Cause and effect", "Contrasting", "Concluding"],
        items: [
          { label: "furthermore" },
          { label: "as a result" },
          { label: "however" },
          { label: "in conclusion" },
          { label: "in addition" },
          { label: "therefore" },
          { label: "on the other hand" },
          { label: "overall" },
          { label: "moreover" },
          { label: "consequently" },
          { label: "although" },
          { label: "to summarise" },
        ],
      },
      // 7
      {
        type: "open-response" as const,
        title: "Label the Paragraph Structure",
        instruction: "Read the model paragraph. Label each sentence with TS (topic sentence), E (evidence), EX (explanation) or CS (concluding statement).",
        prompts: [
          { text: "PARAGRAPH:\nRegular physical activity is essential for the health of primary school students. Research by the Australian Institute of Health and Welfare shows that children who exercise at least 60 minutes daily have better concentration and lower rates of anxiety. This matters because learning is harder when students are stressed or unable to focus. Furthermore, active children tend to sleep better, which improves their mood and memory. Overall, building physical activity into the school day benefits both the body and the mind.\n\nWrite the label (TS, E, EX or CS) for each sentence:", type: "lines", lines: 5 },
        ],
      },
      // 8
      {
        type: "multiple-choice" as const,
        title: "Strong vs Weak Topic Sentences",
        instruction: "Choose the stronger topic sentence in each pair.",
        parentTip: "A strong topic sentence is specific enough to guide the whole paragraph but broad enough to need more than one sentence of support.",
        questions: [
          { prompt: "Which is the stronger topic sentence for a paragraph about exercise?", options: ["Exercise is good for you.", "Regular physical activity strengthens the heart, improves mood and sharpens concentration."], answer: "Regular physical activity strengthens the heart, improves mood and sharpens concentration." },
          { prompt: "Which is the stronger topic sentence for a paragraph about the Great Barrier Reef?", options: ["The Great Barrier Reef is one of Australia's most significant natural wonders, supporting thousands of marine species.", "The Great Barrier Reef is in Queensland."], answer: "The Great Barrier Reef is one of Australia's most significant natural wonders, supporting thousands of marine species." },
          { prompt: "Which is the stronger topic sentence for a paragraph about screen time?", options: ["Excessive screen time before bed disrupts sleep patterns and reduces the quality of rest for young people.", "Screens are everywhere today."], answer: "Excessive screen time before bed disrupts sleep patterns and reduces the quality of rest for young people." },
        ],
      },
      // 9
      {
        type: "open-response" as const,
        title: "Write Three Topic Sentences",
        instruction: "Write a strong topic sentence for each of the following expository paragraph topics. Make each one specific and interesting.",
        parentTip: "If your child struggles, suggest they think about: What is the most important thing I could say about this topic? That thought often becomes the topic sentence.",
        prompts: [
          { text: "Topic: The importance of water for the human body", type: "lines", lines: 2 },
          { text: "Topic: Why rainforests are important to the planet", type: "lines", lines: 2 },
          { text: "Topic: How libraries benefit a community", type: "lines", lines: 2 },
        ],
      },
      // 10
      {
        type: "circle-correct" as const,
        title: "Choose the Best Topic Sentence",
        instruction: "Circle the sentence that would make the best topic sentence for an expository paragraph on each topic.",
        questions: [
          { prompt: "Topic: Coral reefs", options: ["Coral reefs are found in warm, shallow water.", "Coral reefs are among the most biodiverse ecosystems on Earth, yet they face serious threats from climate change.", "Some coral has bleached due to warm water."] },
          { prompt: "Topic: Reading", options: ["Reading is good.", "Many students read books at school.", "Reading regularly builds vocabulary, improves concentration and develops empathy."] },
          { prompt: "Topic: Renewable energy", options: ["Solar panels use the sun.", "Wind turbines are tall.", "Renewable energy sources such as solar and wind power offer a cleaner alternative to fossil fuels."] },
        ],
      },
      // 11
      {
        type: "fill-in-blank" as const,
        title: "Transition Word Gap Fill",
        instruction: "Choose the best transition word from the box to complete each sentence: however, therefore, in addition, as a result, to summarise.",
        parentTip: "Reading the sentence with each option aloud helps children choose the right transition word — the one that makes the sentence sound natural and logical.",
        sentences: [
          { text: "The town has a new library. _____, residents now have easy access to thousands of books.", blanks: ["Therefore"] },
          { text: "Exercise improves physical health. _____, it also benefits mental wellbeing.", blanks: ["In addition"] },
          { text: "The rainforest provides habitat for millions of species. _____, it also regulates the Earth's climate.", blanks: ["In addition"] },
          { text: "The students studied hard all term. _____, their test results improved significantly.", blanks: ["As a result"] },
          { text: "Solar energy is clean and renewable. _____, it can be expensive to install.", blanks: ["However"] },
        ],
      },
      // 12
      {
        type: "true-false" as const,
        title: "True or False: Using Evidence",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "A statistic is a type of evidence that uses numbers to support a point.", answer: true },
          { text: "A personal feeling counts as strong evidence in an expository paragraph.", answer: false },
          { text: "An example is a specific instance that illustrates the main idea.", answer: true },
          { text: "A quote from an expert can be used as evidence in expository writing.", answer: true },
          { text: "Expository writing does not need evidence — the topic sentence is enough.", answer: false },
        ],
      },
      // 13
      {
        type: "sorting" as const,
        title: "Evidence or Opinion?",
        instruction: "Sort each statement into the correct column — Evidence (can be verified) or Opinion (personal view).",
        columns: ["Evidence", "Opinion"],
        items: [
          { label: "Australia has over 500 species of eucalyptus trees." },
          { label: "Eucalyptus trees are the most beautiful plants in the world." },
          { label: "The Great Barrier Reef stretches over 2,300 kilometres." },
          { label: "Snorkelling in the reef is the best experience imaginable." },
          { label: "On average, Australians eat 1.9 kg of red meat per week." },
          { label: "Vegetarian food is more delicious than meat." },
        ],
      },
      // 14
      {
        type: "open-response" as const,
        title: "Improve the Evidence",
        instruction: "Read each weak evidence statement. Rewrite it as a stronger piece of evidence by adding a specific fact, statistic or expert example.",
        prompts: [
          { text: "WEAK: 'Many people exercise regularly.' STRONGER:", type: "lines", lines: 2 },
          { text: "WEAK: 'Reading is popular among students.' STRONGER:", type: "lines", lines: 2 },
          { text: "WEAK: 'The environment is being damaged.' STRONGER:", type: "lines", lines: 2 },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Evidence Ladder",
        content: "Strong expository writing uses a variety of evidence types — statistics, examples, expert quotes and anecdotes. Encourage your child to notice what kinds of evidence are used in the non-fiction books and articles they read. Ask: 'Is that a fact, a statistic, an example or an expert's opinion?' Developing this critical eye makes both reading and writing stronger.",
      },
      // 16
      {
        type: "matching" as const,
        title: "Match Evidence to Explanation",
        instruction: "Draw a line to match each piece of evidence to the explanation that tells the reader why it matters.",
        parentTip: "The explanation (the 'so what' sentence) is what turns raw evidence into an argument. Without it, readers are left to draw their own conclusions — which may not be what the writer intended.",
        left: ["Studies show children who read 20 minutes per day score significantly higher in literacy tests.", "The Great Barrier Reef is home to more than 1,500 species of fish.", "Australia generates less than 25% of its electricity from renewable sources.", "Over 90% of plastics are not recycled globally."],
        right: ["This means Australia still relies heavily on fossil fuels for its energy needs.", "This explains why reading daily is one of the most powerful habits a student can develop.", "This highlights the urgent need for better waste management systems worldwide.", "This demonstrates the extraordinary biodiversity of this unique ecosystem."],
      },
      // 17
      {
        type: "fill-in-blank" as const,
        title: "Complete the Explanation Sentence",
        instruction: "Complete each explanation sentence using your own words. The explanation must say why the evidence matters.",
        sentences: [
          { text: "Research shows that students who sleep fewer than nine hours perform worse on memory tasks. This matters because _____.", blanks: [""] },
          { text: "Australia is the world's driest inhabited continent. This means that _____.", blanks: [""] },
          { text: "Screen time among children aged 5–12 has doubled since 2015. As a result, _____.", blanks: [""] },
        ],
      },
      // 18
      {
        type: "open-response" as const,
        title: "Write a Topic Sentence + Evidence + Explanation",
        instruction: "Choose one of these topics and write a three-sentence mini-paragraph: Topic sentence → Evidence → Explanation. Topics: Homework, School gardens, Recycling.",
        parentTip: "Three-sentence paragraphs are a great scaffold — they force the writer to focus on one idea only. Once the structure is automatic, expanding to five or six sentences feels natural.",
        prompts: [{ text: "My topic: ___\nMy three-sentence paragraph:", type: "box", lines: 8 }],
      },
      // 19
      {
        type: "multiple-choice" as const,
        title: "Identifying Weak Paragraphs",
        instruction: "Read each paragraph description and choose the problem it has.",
        questions: [
          { prompt: "A paragraph starts with a topic sentence about the benefits of exercise, then discusses the history of the Olympic Games.", options: ["It lacks a concluding statement", "The evidence does not support the topic sentence", "It has too many transition words", "The topic sentence is too specific"], answer: "The evidence does not support the topic sentence" },
          { prompt: "A paragraph includes three pieces of evidence about coral reef bleaching but never explains why any of it matters.", options: ["It lacks a topic sentence", "It has too many transition words", "It lacks explanations for the evidence", "The concluding statement is too long"], answer: "It lacks explanations for the evidence" },
          { prompt: "A paragraph has a strong topic sentence and good evidence but ends abruptly without wrapping up the idea.", options: ["It lacks a concluding statement", "It has too many opinions", "The topic sentence is too broad", "It uses no transition words"], answer: "It lacks a concluding statement" },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Power of Explanation",
        content: "A piece of evidence without an explanation is like a compass without a map — you have the tool, but you do not know where it is pointing. The explanation is the most important sentence in any expository paragraph because it tells the reader: 'Here is what this fact means for my argument.' The world's best non-fiction writers are masters of the short, punchy explanation. This week, when you read a non-fiction article, find one piece of evidence and highlight the explanation that follows it. See how the author has connected the two.",
      },
      // 21
      {
        type: "open-response" as const,
        title: "Plan Your Paragraph",
        instruction: "Use the information sandwich planner to organise your ideas before writing a full expository paragraph.",
        parentTip: "Planning before writing reduces the number of drafts needed. Five minutes of planning saves twenty minutes of rewriting.",
        prompts: [
          { text: "Topic sentence (main idea):", type: "lines", lines: 2 },
          { text: "Evidence 1 (fact, statistic or example):", type: "lines", lines: 2 },
          { text: "Explanation 1 (why does this matter?):", type: "lines", lines: 2 },
          { text: "Evidence 2:", type: "lines", lines: 2 },
          { text: "Explanation 2:", type: "lines", lines: 2 },
          { text: "Concluding statement:", type: "lines", lines: 2 },
        ],
      },
      // 22
      {
        type: "open-response" as const,
        title: "Write Your Expository Paragraph",
        instruction: "Use your planner to write a full expository paragraph. Include at least two transition words. Underline each transition word.",
        prompts: [{ text: "My paragraph:", type: "box", lines: 14 }],
      },
      // 23
      {
        type: "true-false" as const,
        title: "True or False: Transition Words",
        instruction: "Mark each statement about transition words True or False.",
        parentTip: "A useful follow-up activity: ask your child to find five transition words in a newspaper article or encyclopedia entry and tell you what each one is doing.",
        statements: [
          { text: "Transition words help the reader follow the flow of ideas.", answer: true },
          { text: "'However' signals that the writer is about to add more information.", answer: false },
          { text: "'Therefore' is used to show a result or conclusion.", answer: true },
          { text: "Using too many transition words can make writing sound unnatural.", answer: true },
          { text: "'In addition' means the same thing as 'on the other hand'.", answer: false },
        ],
      },
      // 24
      {
        type: "fill-in-blank" as const,
        title: "Expository Writing Vocabulary",
        instruction: "Fill in each blank using a word from the box: expository, informs, paragraph, evidence, relevant.",
        sentences: [
          { text: "_____ writing explains or _____ the reader about a topic.", blanks: ["Expository", "informs"] },
          { text: "Each _____ of an expository text focuses on one main idea.", blanks: ["paragraph"] },
          { text: "Good _____ is accurate, specific and _____ to the topic sentence.", blanks: ["evidence", "relevant"] },
        ],
      },
      // 25
      {
        type: "circle-correct" as const,
        title: "Circle the Better Evidence",
        instruction: "In each pair, circle the piece of evidence that is stronger and more specific.",
        parentTip: "Strong evidence is specific, verifiable and directly connected to the topic. Vague statements like 'many people think' are not strong evidence.",
        questions: [
          { prompt: "Topic: The health benefits of sleep", options: ["Sleep is important for your health.", "Research from the Sleep Foundation shows that children aged 8–12 need 9–11 hours of sleep per night for optimal brain development."] },
          { prompt: "Topic: The decline of bee populations", options: ["A 2023 report found that global bee populations have declined by over 30% in the past decade, threatening food security.", "Bees are dying and that is a big problem for everyone."] },
          { prompt: "Topic: The benefits of public libraries", options: ["Libraries are good places to visit.", "A 2022 Australian survey found that 78% of library users reported improved reading skills and increased access to learning resources."] },
        ],
      },
      // 26
      {
        type: "open-response" as const,
        title: "Write a Concluding Statement",
        instruction: "Read each topic sentence and the evidence provided. Write a strong concluding statement that wraps up the paragraph.",
        prompts: [
          { text: "TOPIC SENTENCE: Daily reading has a profound impact on children's academic performance.\nEVIDENCE: Studies show students who read 20 minutes daily score 50% higher on comprehension tests.\nEXPLANATION: This shows how small daily habits compound over time.\nYOUR CONCLUDING STATEMENT:", type: "lines", lines: 3 },
          { text: "TOPIC SENTENCE: Reducing single-use plastics is one of the most important steps we can take to protect our oceans.\nEVIDENCE: Over 8 million tonnes of plastic enter the ocean every year.\nEXPLANATION: This plastic harms marine animals and enters the food chain.\nYOUR CONCLUDING STATEMENT:", type: "lines", lines: 3 },
        ],
      },
      // 27
      {
        type: "matching" as const,
        title: "Match the Transition Word to Its Purpose",
        instruction: "Match each transition word or phrase to the job it does in a sentence.",
        parentTip: "If your child is unsure, suggest they try putting the transition word in a sentence and see what relationship it creates between two ideas.",
        left: ["In conclusion", "Furthermore", "However", "As a result", "For example"],
        right: ["Introduces a specific illustration of the main idea", "Signals a contrasting or opposing idea", "Wraps up the whole argument", "Shows a consequence or outcome", "Adds another supporting point"],
      },
      // 28
      {
        type: "multiple-choice" as const,
        title: "Choose the Right Transition Word",
        instruction: "Choose the transition word that best fits each sentence.",
        parentTip: "The right transition word makes a sentence sound logical and natural. If the choice sounds wrong when read aloud, it probably is wrong.",
        questions: [
          { prompt: "The desert receives very little rainfall. _____, most plants that grow there have adapted to store water.", options: ["However", "For example", "As a result", "In conclusion"], answer: "As a result" },
          { prompt: "Reading builds vocabulary and improves writing skills. _____, it has been shown to reduce stress.", options: ["However", "Furthermore", "As a result", "For instance"], answer: "Furthermore" },
          { prompt: "Many students enjoy digital learning. _____, some research suggests that handwriting notes improves memory more than typing.", options: ["As a result", "Furthermore", "However", "In addition"], answer: "However" },
          { prompt: "The Amazon rainforest covers approximately 5.5 million square kilometres. _____, it is often called 'the lungs of the Earth'.", options: ["However", "As a result", "Although", "For this reason"], answer: "For this reason" },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Self-Edit Your Paragraph",
        instruction: "Re-read the paragraph you wrote earlier. Use this checklist to improve it. Then rewrite the improved version below.",
        prompts: [
          { text: "CHECKLIST (tick each one):\n☐ Topic sentence clearly states the main idea\n☐ Each piece of evidence is specific and accurate\n☐ Each piece of evidence is followed by an explanation\n☐ At least two transition words are used correctly\n☐ Concluding statement wraps up the main idea\n\nRewritten paragraph:", type: "box", lines: 14 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Read-Aloud Revision Strategy",
        content: "One of the best revision tools for expository writing is reading the paragraph aloud. The ear catches what the eye misses — awkward sentences, missing transitions, ideas that jump around. Before your child rewrites any paragraph, ask them to read it aloud slowly. If they stumble or pause on a sentence, that is usually the one that needs rewriting. This strategy is used by professional writers at all levels.",
      },
      // 31
      {
        type: "sorting" as const,
        title: "Organise the Paragraph",
        instruction: "These sentences are from an expository paragraph but they are in the wrong order. Number them 1–5 to show the correct order.",
        parentTip: "Paragraph ordering is a key comprehension and writing skill. It reveals whether students understand how ideas build on each other in expository text.",
        columns: ["Correct order (1–5)"],
        items: [
          { label: "This demonstrates why regular sleep is one of the most important factors in a child's academic success." },
          { label: "Furthermore, poor sleep has been linked to lower emotional regulation and increased anxiety." },
          { label: "Sleep is essential for learning and memory consolidation in primary school students." },
          { label: "As a result, students who sleep well are better prepared to focus and retain new information at school." },
          { label: "Research shows that children aged 8–12 who sleep fewer than nine hours per night score significantly lower on memory and attention tasks." },
        ],
      },
      // 32
      {
        type: "fill-in-blank" as const,
        title: "Connect the Ideas",
        instruction: "Choose the best transition word to complete each pair of sentences so they flow logically.",
        sentences: [
          { text: "Forests absorb carbon dioxide from the atmosphere. _____, deforestation contributes significantly to climate change.", blanks: ["Therefore"] },
          { text: "The school introduced a reading programme. _____, students can now borrow books to take home each weekend.", blanks: ["Furthermore"] },
          { text: "Some students prefer visual learning. _____, others learn best through listening or doing.", blanks: ["However"] },
          { text: "The river flooded after heavy rain. _____, three roads were closed and residents were evacuated.", blanks: ["As a result"] },
        ],
      },
      // 33
      {
        type: "true-false" as const,
        title: "True or False: Expository Structure",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "An expository paragraph can have more than one piece of evidence.", answer: true },
          { text: "The concluding statement must begin with the words 'In conclusion'.", answer: false },
          { text: "Evidence must always be followed by an explanation of why it matters.", answer: true },
          { text: "You can write a strong expository paragraph without a topic sentence.", answer: false },
          { text: "Using a variety of transition words makes expository writing flow better.", answer: true },
        ],
      },
      // 34
      {
        type: "open-response" as const,
        title: "Compare Two Topic Sentences",
        instruction: "Read these two topic sentences about the same topic. Answer the questions below.",
        parentTip: "Comparing strong and weak examples is one of the most effective ways to develop writing quality. The gap between the two reveals what a good writer adds.",
        prompts: [
          { text: "TOPIC SENTENCE A: Dogs are popular pets.\nTOPIC SENTENCE B: Dogs provide companionship, improve mental health and give their owners a reason to exercise daily, making them one of the most beneficial pets a family can own.\n\nQ1: What specific details does Sentence B include that Sentence A does not?", type: "lines", lines: 3 },
          { text: "Q2: Which sentence better prepares the reader for the evidence that will follow? Why?", type: "lines", lines: 3 },
          { text: "Q3: Write your own strong topic sentence about a pet, sport or hobby:", type: "lines", lines: 2 },
        ],
      },
      // 35
      {
        type: "circle-correct" as const,
        title: "Which Sentence Is the Concluding Statement?",
        instruction: "Read each paragraph excerpt. Circle the sentence that is the concluding statement.",
        questions: [
          { prompt: "A) The Southern Ocean is home to 80% of the world's krill. B) Krill support the entire Antarctic food web. C) Without krill, the marine ecosystems of the Southern Ocean would collapse. D) Whales, penguins and seals all depend on krill for survival.", options: ["A", "B", "C", "D"] },
          { prompt: "A) Books develop imagination and empathy. B) Research shows avid readers score higher on emotional intelligence tests. C) When we read stories from perspectives different to our own, we practise understanding other people. D) Overall, reading fiction is one of the best tools we have for building a more empathetic society.", options: ["A", "B", "C", "D"] },
        ],
      },
      // 36
      {
        type: "multiple-choice" as const,
        title: "Expository vs Other Text Types",
        instruction: "Choose whether each text type is expository or not.",
        parentTip: "Understanding text types helps students know what techniques to use when reading and writing. Expository texts prioritise accuracy and logic over creativity.",
        questions: [
          { prompt: "A report about how volcanoes form", options: ["Expository", "Not expository"], answer: "Expository" },
          { prompt: "A short story about a child lost in the bush", options: ["Expository", "Not expository"], answer: "Not expository" },
          { prompt: "An explanation of the water cycle", options: ["Expository", "Not expository"], answer: "Expository" },
          { prompt: "A persuasive letter to the local council", options: ["Expository", "Not expository"], answer: "Not expository" },
          { prompt: "An encyclopaedia entry about platypuses", options: ["Expository", "Not expository"], answer: "Expository" },
        ],
      },
      // 37
      {
        type: "open-response" as const,
        title: "Topic Sentence Expansion",
        instruction: "Expand each simple sentence into a strong topic sentence by adding specific details.",
        prompts: [
          { text: "SIMPLE: Water is important.\nSTRONG TOPIC SENTENCE:", type: "lines", lines: 2 },
          { text: "SIMPLE: Bees are useful insects.\nSTRONG TOPIC SENTENCE:", type: "lines", lines: 2 },
          { text: "SIMPLE: Libraries are good for communities.\nSTRONG TOPIC SENTENCE:", type: "lines", lines: 2 },
        ],
      },
      // 38
      {
        type: "matching" as const,
        title: "Match the Text Feature to Its Purpose",
        instruction: "Match each expository text feature to its purpose.",
        parentTip: "Expository texts use visual and structural features to help readers navigate and understand the content. Recognising these features improves both reading and writing.",
        left: ["Subheading", "Diagram with labels", "Table", "Glossary", "Bold text"],
        right: ["Presents information in rows and columns for easy comparison", "Highlights key vocabulary or important terms", "Explains the meaning of technical words used in the text", "Introduces a new section or idea within the text", "Shows how something works or is structured visually"],
      },
      // 39
      {
        type: "fill-in-blank" as const,
        title: "Build the Paragraph — Fill the Framework",
        instruction: "Fill in the blanks to complete this expository paragraph framework on a topic of your choice.",
        parentTip: "This scaffold removes the pressure of starting from scratch. Once your child can complete the framework fluently, they are ready to write without it.",
        sentences: [
          { text: "_____ [topic] is important/significant because _____.", blanks: [""] },
          { text: "Research/Studies show that _____. This means _____.", blanks: [""] },
          { text: "Furthermore/In addition, _____. As a result, _____.", blanks: [""] },
          { text: "Overall/In conclusion, _____.", blanks: [""] },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Expository Writers Change the World",
        content: "Some of the most powerful writing ever produced has been expository writing — scientific papers, investigative reports, health guides and environmental analyses. Rachel Carson's Silent Spring used expository writing to expose the dangers of pesticides and launched the modern environmental movement. David Attenborough's documentary scripts are masterclasses in expository explanation. When you learn to write clearly and accurately about the world, you are learning a skill that can genuinely make a difference. What topic do you know well enough to explain to someone else? That knowledge, shaped into clear writing, could inform or inspire anyone who reads it.",
      },
      // 41
      {
        type: "open-response" as const,
        title: "Research and Note-Taking",
        instruction: "Choose a topic from your current school curriculum. Find two facts or statistics from a reliable source. Write them in the note-taking frame below.",
        parentTip: "Note-taking is a pre-writing skill students often skip. Encourage your child to write facts in their own words rather than copying directly. This is called 'paraphrasing' and is an essential academic skill.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "Source (book title, website or encyclopaedia):", type: "lines", lines: 1 },
          { text: "Fact 1 (in my own words):", type: "lines", lines: 2 },
          { text: "Fact 2 (in my own words):", type: "lines", lines: 2 },
        ],
      },
      // 42
      {
        type: "multiple-choice" as const,
        title: "Expository Writing: Formal Language",
        instruction: "Choose the option that uses more formal, precise language appropriate for expository writing.",
        parentTip: "Expository writing uses formal language — no contractions, no slang and no first-person opinions. Academic writing begins at primary school level.",
        questions: [
          { prompt: "Which version is more appropriate for expository writing?", options: ["I think it's really important to exercise a lot.", "Regular physical activity is essential for maintaining physical and mental health."], answer: "Regular physical activity is essential for maintaining physical and mental health." },
          { prompt: "Which version is more appropriate for expository writing?", options: ["Scientists have found that coral bleaching has increased by over 40% in the past decade.", "Scientists have found that coral bleaching has gotten way worse lately."], answer: "Scientists have found that coral bleaching has increased by over 40% in the past decade." },
          { prompt: "Which version is more appropriate for expository writing?", options: ["In conclusion, I reckon everyone should read more books.", "In conclusion, the evidence strongly suggests that regular reading has measurable benefits for literacy and wellbeing."], answer: "In conclusion, the evidence strongly suggests that regular reading has measurable benefits for literacy and wellbeing." },
        ],
      },
      // 43
      {
        type: "sorting" as const,
        title: "Formal or Informal?",
        instruction: "Sort each phrase into the correct column — Formal (suitable for expository writing) or Informal (not suitable).",
        parentTip: "Switching between registers (formal and informal language) is a skill. Understanding why one is right for expository writing helps students develop audience awareness.",
        columns: ["Formal", "Informal"],
        items: [
          { label: "Research suggests that..." },
          { label: "I reckon..." },
          { label: "Evidence indicates..." },
          { label: "Heaps of people think..." },
          { label: "Furthermore, studies show..." },
          { label: "It's kind of a big deal." },
          { label: "This demonstrates that..." },
          { label: "Loads of scientists agree." },
        ],
      },
      // 44
      {
        type: "fill-in-blank" as const,
        title: "Formal Rewrites",
        instruction: "Rewrite each informal phrase as a formal expression suitable for expository writing.",
        sentences: [
          { text: "INFORMAL: 'I think exercise is really good for you.' FORMAL: 'Evidence suggests that regular physical activity _____.'", blanks: [""] },
          { text: "INFORMAL: 'Heaps of animals are going extinct.' FORMAL: 'A growing number of species are _____ due to _____.'", blanks: [""] },
          { text: "INFORMAL: 'It's kind of obvious that reading is helpful.' FORMAL: 'Research demonstrates that _____ is highly beneficial for _____.'", blanks: [""] },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: No Opinions, Just Evidence",
        content: "One of the most common Year 5 writing errors is mixing personal opinion with expository writing. Phrases like 'I think', 'I believe' or 'I reckon' do not belong in expository text. If your child uses them, ask: 'Is there evidence that shows this? How could you rewrite this as a fact rather than an opinion?' Over time, this builds the habit of evidence-based thinking that underpins all academic disciplines.",
      },
      // 46
      {
        type: "open-response" as const,
        title: "Write a Full Expository Paragraph From a Note",
        instruction: "Use these notes to write a full, well-structured expository paragraph. Add transition words and a concluding statement.",
        prompts: [
          { text: "NOTES:\n• Topic: The importance of bees to agriculture\n• Fact 1: Bees pollinate approximately one third of all food crops grown globally\n• Explanation: Without pollination, fruit, vegetables and nuts would not grow\n• Fact 2: The value of bee pollination to Australian agriculture is estimated at $14.2 billion per year\n• Explanation: Losing bees would cause food prices to rise dramatically\n\nMy paragraph:", type: "box", lines: 12 },
        ],
      },
      // 47
      {
        type: "circle-correct" as const,
        title: "Identify the Explanation",
        instruction: "Read each evidence statement. Circle the sentence that provides the best explanation of why the evidence matters.",
        questions: [
          { prompt: "EVIDENCE: Studies show children who eat breakfast achieve higher concentration levels throughout the morning.\nWhich sentence best explains why this matters?", options: ["This is interesting research.", "This means that providing breakfast programmes in schools could directly improve learning outcomes for disadvantaged students.", "Breakfast is good."] },
          { prompt: "EVIDENCE: Australia loses approximately 1.5 million tonnes of food to waste each year.\nWhich sentence best explains why this matters?", options: ["This highlights the significant environmental and economic cost of not using food efficiently.", "People should not waste food.", "That is a lot of food."] },
        ],
      },
      // 48
      {
        type: "matching" as const,
        title: "Match the Paragraph Weakness to the Fix",
        instruction: "Match each paragraph weakness to the revision strategy that would fix it.",
        parentTip: "Learning to diagnose weakness in writing is an advanced skill. A student who can identify 'the explanation is missing' in their own writing is on track for strong secondary school results.",
        left: ["The topic sentence is too vague — 'Sport is good for children.'", "The evidence is a personal opinion — 'I think reading is important.'", "There is no explanation after the evidence.", "The paragraph has three different topic ideas.", "There are no transition words between sentences."],
        right: ["Add 'This means...' or 'This shows...' after the fact to connect the evidence to the argument.", "Replace with a specific fact or statistic from a reliable source.", "Rewrite as a specific claim — 'Regular sport builds teamwork skills and reduces childhood obesity.'", "Add words like 'furthermore', 'however' or 'as a result' to link the sentences.", "Choose one main idea and remove the sentences that do not relate to it."],
      },
      // 49
      {
        type: "true-false" as const,
        title: "True or False: Multi-Paragraph Expository Writing",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Each paragraph in a multi-paragraph expository text should have its own topic sentence.", answer: true },
          { text: "The introduction paragraph does not need to mention what the text will cover.", answer: false },
          { text: "A linking sentence at the end of one paragraph can signal the topic of the next paragraph.", answer: true },
          { text: "The concluding paragraph can introduce a brand new idea that was not discussed earlier.", answer: false },
          { text: "Headings and subheadings can be used to organise a long expository text.", answer: true },
        ],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Plan a Three-Paragraph Expository Text",
        instruction: "Plan a three-paragraph expository text on a topic you are currently studying. Complete the planner below.",
        parentTip: "Planning a three-paragraph text is a significant milestone. If your child can do this independently, they are operating well above the Year 5 average for structured writing.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "Paragraph 1 topic sentence:", type: "lines", lines: 2 },
          { text: "Paragraph 2 topic sentence:", type: "lines", lines: 2 },
          { text: "Paragraph 3 topic sentence (could be a conclusion):", type: "lines", lines: 2 },
          { text: "One piece of evidence for each paragraph (list three):", type: "lines", lines: 3 },
        ],
      },
      // 51
      {
        type: "multiple-choice" as const,
        title: "Multi-Paragraph Structure",
        instruction: "Choose the best answer about how multi-paragraph expository texts are organised.",
        questions: [
          { prompt: "What is the main purpose of an introduction paragraph in an expository text?", options: ["To provide all the evidence the text will cover", "To introduce the topic and give the reader an overview of what will be discussed", "To persuade the reader to agree with the writer", "To list all the transition words that will be used"], answer: "To introduce the topic and give the reader an overview of what will be discussed" },
          { prompt: "What is a linking sentence at the end of a body paragraph?", options: ["A sentence that repeats the topic sentence word for word", "A sentence that introduces a brand new unrelated topic", "A sentence that signals what the next paragraph will discuss", "A sentence that provides more evidence"], answer: "A sentence that signals what the next paragraph will discuss" },
          { prompt: "In a three-paragraph expository text, the body paragraphs should:", options: ["Each discuss a different aspect of the main topic", "Repeat the introduction in different words", "Each end with the same concluding statement", "Only use one type of transition word"], answer: "Each discuss a different aspect of the main topic" },
        ],
      },
      // 52
      {
        type: "fill-in-blank" as const,
        title: "Introduction Sentences",
        instruction: "Complete each introduction sentence for an expository text. Use formal language.",
        parentTip: "A strong introduction creates a 'map' of the text so the reader knows what is coming. Teaching students to write a clear overview sentence is excellent preparation for essay writing.",
        sentences: [
          { text: "This report will examine _____.", blanks: [""] },
          { text: "Rainforests are among the most _____ ecosystems on Earth because _____.", blanks: [""] },
          { text: "There are three main reasons why _____ is important: _____, _____ and _____.", blanks: [""] },
        ],
      },
      // 53
      {
        type: "open-response" as const,
        title: "Write a Linking Sentence",
        instruction: "Read each paragraph topic and write a linking sentence at the end that signals the topic of the next paragraph.",
        prompts: [
          { text: "PARAGRAPH 1 TOPIC: The physical health benefits of regular exercise.\nLINKING SENTENCE (signals next topic: mental health benefits):", type: "lines", lines: 2 },
          { text: "PARAGRAPH 2 TOPIC: How rainforests produce oxygen.\nLINKING SENTENCE (signals next topic: biodiversity of rainforests):", type: "lines", lines: 2 },
        ],
      },
      // 54
      {
        type: "sorting" as const,
        title: "Organise a Three-Paragraph Text",
        instruction: "Sort each sentence into the correct paragraph of a three-paragraph text about why reading is important.",
        parentTip: "Sorting activities train students to recognise which ideas belong together. This builds the skill of paragraph unity — keeping each paragraph focused on one idea.",
        columns: ["Introduction", "Body paragraph", "Conclusion"],
        items: [
          { label: "Reading regularly builds vocabulary, comprehension and empathy." },
          { label: "This report will explain why reading is one of the most valuable habits a student can develop." },
          { label: "In conclusion, the evidence clearly shows that daily reading improves academic performance and social development." },
          { label: "Studies show students who read 20 minutes per day score 50% higher on literacy assessments." },
          { label: "Furthermore, reading fiction has been shown to increase empathy by exposing readers to diverse perspectives." },
          { label: "Reading is not just a school skill — it is a life skill with lasting benefits." },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Write Your Three-Paragraph Expository Text",
        instruction: "Use your plan from Activity 50 to write a full three-paragraph expository text. Use your transition words, evidence and linking sentences.",
        parentTip: "This is the biggest writing challenge on this worksheet. Allow 20–30 minutes. Encourage your child to write a first draft, then use the self-edit checklist before writing the final version.",
        prompts: [{ text: "My three-paragraph expository text:", type: "box", lines: 22 }],
      },
      // 56
      {
        type: "circle-correct" as const,
        title: "Identify the Best Conclusion",
        instruction: "Read each pair of conclusion sentences. Circle the one that is more effective for ending an expository paragraph.",
        questions: [
          { prompt: "Topic: The importance of physical activity for children", options: ["So kids should exercise.", "In conclusion, the evidence clearly demonstrates that regular physical activity is essential for children's physical health, mental wellbeing and academic performance."] },
          { prompt: "Topic: The impact of plastic pollution on marine life", options: ["Overall, reducing plastic pollution is one of the most urgent environmental challenges of our time, requiring action from individuals, industries and governments alike.", "So we need to stop using plastic because it hurts fish and stuff."] },
          { prompt: "Topic: How animals adapt to their environments", options: ["Animals are really adaptable.", "To summarise, animals have evolved a remarkable range of physical and behavioural adaptations that allow them to thrive in even the most extreme environments on Earth."] },
        ],
      },
      // 57
      {
        type: "true-false" as const,
        title: "True or False: Expository Writing Features",
        instruction: "Mark each statement True or False.",
        parentTip: "Use these statements as a quick oral quiz before the activity. Ask your child to explain their reasoning — this deepens understanding more than simply marking answers.",
        statements: [
          { text: "Headings in an expository text help the reader navigate to the information they need.", answer: true },
          { text: "An expository text can include diagrams and tables to present information visually.", answer: true },
          { text: "The passive voice is never used in expository writing.", answer: false },
          { text: "Expository writing requires the writer to express a personal opinion in every paragraph.", answer: false },
          { text: "Technical vocabulary is appropriate in expository writing when it is explained clearly.", answer: true },
        ],
      },
      // 58
      {
        type: "matching" as const,
        title: "Match the Sentence to the Paragraph Part",
        instruction: "Read each sentence. Match it to the paragraph part it represents in an expository paragraph about the water cycle.",
        left: ["The water cycle is the continuous movement of water through the Earth's atmosphere and surface.", "Evaporation occurs when the sun heats surface water, turning it into vapour that rises into the atmosphere.", "This process is driven by solar energy and gravity, which together power the cycle endlessly.", "In conclusion, the water cycle is a fundamental natural process that distributes fresh water across the planet."],
        right: ["Explanation — tells us why the evidence matters", "Topic sentence — states the main idea", "Concluding statement — wraps up the paragraph", "Evidence — gives specific factual detail"],
      },
      // 59
      {
        type: "open-response" as const,
        title: "Write a Short Expository Text About Science",
        instruction: "Write a short expository paragraph (5–7 sentences) explaining a science concept you are currently studying. Use the information sandwich structure.",
        parentTip: "Cross-curriculum writing reinforces learning in both subjects. Writing about science consolidates scientific understanding while practising expository structure simultaneously.",
        prompts: [
          { text: "My science concept:", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "box", lines: 10 },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Writing in Every Subject",
        content: "Expository writing is not just an English skill — it is the primary mode of communication in science, geography, history and health. The more your child writes across different subjects, the more fluent and confident their expository writing will become. Encourage your child to write a short paragraph about something they learned in any subject today, using the topic sentence → evidence → explanation → concluding statement structure.",
      },
      // 61
      {
        type: "fill-in-blank" as const,
        title: "Technical Vocabulary in Expository Writing",
        instruction: "Fill in each blank with the correct technical term: evaporation, condensation, precipitation, runoff, aquifer.",
        sentences: [
          { text: "_____ occurs when liquid water is heated and becomes water vapour.", blanks: ["Evaporation"] },
          { text: "When water vapour cools and forms clouds, the process is called _____.", blanks: ["condensation"] },
          { text: "Rain, snow and hail are all forms of _____, through which water returns to the Earth's surface.", blanks: ["precipitation"] },
          { text: "Water that flows over the land into streams and rivers is called _____.", blanks: ["runoff"] },
          { text: "An underground layer of rock that stores water is called an _____.", blanks: ["aquifer"] },
        ],
      },
      // 62
      {
        type: "multiple-choice" as const,
        title: "Using Technical Vocabulary",
        instruction: "Choose the sentence that uses technical vocabulary more effectively.",
        questions: [
          { prompt: "Which sentence uses technical vocabulary more effectively in an expository text about ecosystems?", options: ["Lots of animals and plants live together in a place.", "An ecosystem is a complex network of interdependent organisms — both living and non-living — that interact within a shared environment."], answer: "An ecosystem is a complex network of interdependent organisms — both living and non-living — that interact within a shared environment." },
          { prompt: "Which sentence uses technical vocabulary more effectively in an expository text about weather?", options: ["A cold front is a mass of cold air that moves into a region of warmer air, often causing rapid weather changes.", "Cold air comes and pushes the warm air and things change."], answer: "A cold front is a mass of cold air that moves into a region of warmer air, often causing rapid weather changes." },
        ],
      },
      // 63
      {
        type: "open-response" as const,
        title: "Add Technical Vocabulary to a Paragraph",
        instruction: "Rewrite this paragraph using more precise, technical vocabulary. Replace the underlined words with more accurate scientific terms.",
        parentTip: "Using precise vocabulary demonstrates deep understanding. It also makes writing clearer and more credible. Encourage your child to use a dictionary or glossary when editing.",
        prompts: [
          { text: "ORIGINAL: 'The sun heats the water and turns it into air stuff. The air stuff goes up and makes fluffy things in the sky. Then the water falls back down as rain.'\n\nMY REWRITE (use: evaporation, water vapour, condensation, precipitation):", type: "box", lines: 6 },
        ],
      },
      // 64
      {
        type: "sorting" as const,
        title: "Sort by Text Structure",
        instruction: "Sort each feature into the correct category based on what it helps the reader do in an expository text.",
        parentTip: "Expository texts use a variety of features to make complex information accessible. Identifying these features helps students both read and write more effectively.",
        columns: ["Navigating the text", "Understanding vocabulary", "Comparing information"],
        items: [
          { label: "Subheadings" },
          { label: "Table of contents" },
          { label: "Glossary" },
          { label: "Bold key terms" },
          { label: "Comparison table" },
          { label: "Diagrams with labels" },
          { label: "Index" },
          { label: "Side-by-side examples" },
        ],
      },
      // 65
      {
        type: "open-response" as const,
        title: "Design an Expository Subheading System",
        instruction: "You are writing a three-section expository text about climate change. Write three subheadings and a one-sentence description of what each section will cover.",
        prompts: [
          { text: "Subheading 1:", type: "lines", lines: 1 },
          { text: "This section will cover:", type: "lines", lines: 2 },
          { text: "Subheading 2:", type: "lines", lines: 1 },
          { text: "This section will cover:", type: "lines", lines: 2 },
          { text: "Subheading 3:", type: "lines", lines: 1 },
          { text: "This section will cover:", type: "lines", lines: 2 },
        ],
      },
      // 66
      {
        type: "true-false" as const,
        title: "True or False: Expository Research",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "A reliable source for expository writing could be a university research paper or government website.", answer: true },
          { text: "A personal blog post written by an anonymous author is always a reliable source.", answer: false },
          { text: "When using information from a source, it is important to check the date to ensure the information is current.", answer: true },
          { text: "Copying sentences directly from a source without quotation marks or acknowledgement is called plagiarism.", answer: true },
          { text: "All websites ending in .com are reliable sources of factual information.", answer: false },
        ],
      },
      // 67
      {
        type: "multiple-choice" as const,
        title: "Evaluating Sources",
        instruction: "Choose the most reliable source for each research purpose.",
        parentTip: "Source evaluation is a critical literacy skill. Teach your child to ask: Who wrote this? When was it written? Why was it written? Is it fact or opinion?",
        questions: [
          { prompt: "For a report on the health of Australia's Great Barrier Reef:", options: ["A tourist brochure from a reef tour company", "The Australian Institute of Marine Science website", "A social media post from a scuba diver", "A cartoon about ocean animals"], answer: "The Australian Institute of Marine Science website" },
          { prompt: "For a report on the recommended daily exercise for children:", options: ["An advertisement for a children's fitness app", "An article in a health magazine from 1985", "The Australian Department of Health and Aged Care guidelines", "A parenting forum post"], answer: "The Australian Department of Health and Aged Care guidelines" },
        ],
      },
      // 68
      {
        type: "fill-in-blank" as const,
        title: "Citing a Source",
        instruction: "Fill in the blanks to complete the source citation correctly.",
        sentences: [
          { text: "According to _____ [author/organisation], _____.", blanks: [""] },
          { text: "Research published by _____ in _____ [year] found that _____.", blanks: [""] },
          { text: "The _____ [organisation] states that _____.", blanks: [""] },
        ],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Paraphrase the Evidence",
        instruction: "Read each direct quote. Rewrite it as a paraphrase — using your own words to express the same information.",
        parentTip: "Paraphrasing rather than copying is a fundamental academic skill. Students who can paraphrase accurately understand the content they are writing about, rather than just reproducing it.",
        prompts: [
          { text: "DIRECT QUOTE: 'Globally, approximately one million plant and animal species are now threatened with extinction, many within decades.'\nMY PARAPHRASE:", type: "lines", lines: 3 },
          { text: "DIRECT QUOTE: 'Children aged 6–17 should engage in at least 60 minutes of moderate to vigorous physical activity each day.'\nMY PARAPHRASE:", type: "lines", lines: 3 },
        ],
      },
      // 70
      {
        type: "open-response" as const,
        title: "Full Paragraph: Research-Based Writing",
        instruction: "Using research notes you have made or information from a source your parent has helped you find, write a full expository paragraph on any topic from your curriculum. Include a cited source.",
        parentTip: "Help your child find one reliable website or book for their topic. Working with real sources — even at Year 5 — builds habits of evidence-based thinking that last a lifetime.",
        prompts: [{ text: "My research-based paragraph:", type: "box", lines: 12 }],
      },
      // 71
      {
        type: "multiple-choice" as const,
        title: "Expository Paragraph: Self-Assessment",
        instruction: "After writing a paragraph, use these questions to evaluate it.",
        parentTip: "Self-assessment is more powerful than teacher assessment for developing independent writers. Help your child be honest about what is working and what needs improvement.",
        questions: [
          { prompt: "Which question should a writer ask to check their topic sentence?", options: ["Does it have good spelling?", "Does it clearly state the main idea of the paragraph?", "Does it begin with a transition word?", "Is it the longest sentence in the paragraph?"], answer: "Does it clearly state the main idea of the paragraph?" },
          { prompt: "Which question should a writer ask to check their evidence?", options: ["Is the evidence a personal opinion or a verifiable fact?", "Is the evidence the same as the topic sentence?", "Does the evidence come after the concluding statement?", "Is the evidence about a different topic?"], answer: "Is the evidence a personal opinion or a verifiable fact?" },
          { prompt: "Which question should a writer ask about transition words?", options: ["Did I use exactly three transition words?", "Did I use the same transition word in every sentence?", "Do the transition words accurately signal the relationship between ideas?", "Did I begin the paragraph with a transition word?"], answer: "Do the transition words accurately signal the relationship between ideas?" },
        ],
      },
      // 72
      {
        type: "open-response" as const,
        title: "Peer Edit Checklist",
        instruction: "Swap your three-paragraph text with a sibling, friend or parent. Use this checklist to provide feedback. Write one specific improvement suggestion.",
        prompts: [
          { text: "CHECKLIST:\n☐ Each paragraph has a clear topic sentence\n☐ Each piece of evidence is specific and accurate\n☐ Each piece of evidence is followed by an explanation\n☐ Transition words are used accurately\n☐ Each paragraph has a concluding statement\n☐ The writing uses formal language (no contractions or slang)\n\nMy improvement suggestion:", type: "lines", lines: 4 },
        ],
      },
      // 73
      {
        type: "true-false" as const,
        title: "True or False: Writing Conventions",
        instruction: "Mark each statement about expository writing conventions True or False.",
        parentTip: "Writing conventions are the 'rules' that make writing easy to read and understand. Knowing them gives students confidence and makes editing more systematic.",
        statements: [
          { text: "Contractions such as 'don't' and 'it's' are appropriate in formal expository writing.", answer: false },
          { text: "Capital letters are used for proper nouns such as 'Australia' and 'The Australian Institute of Marine Science'.", answer: true },
          { text: "A new paragraph begins when the writer wants to introduce a new main idea.", answer: true },
          { text: "It is acceptable to use slang in expository writing if the audience is young people.", answer: false },
          { text: "Subheadings in an expository text should be written as complete sentences.", answer: false },
        ],
      },
      // 74
      {
        type: "fill-in-blank" as const,
        title: "Correcting Writing Errors",
        instruction: "Each sentence contains a writing convention error. Identify and rewrite each sentence correctly.",
        parentTip: "Error correction activities are most effective when students identify the error category (e.g. 'This uses a contraction' or 'This is informal language') before correcting it.",
        sentences: [
          { text: "It's really important that kids get enough sleep. CORRECTED: _____.", blanks: [""] },
          { text: "I reckon the environment is in big trouble. CORRECTED: _____.", blanks: [""] },
          { text: "the australian government has introduced new environmental policies. CORRECTED: _____.", blanks: [""] },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Building a Writing Portfolio",
        content: "Consider keeping a writing portfolio — a folder or exercise book — where your child saves their best expository paragraphs and texts over the year. Looking back at earlier work and seeing the improvement is one of the most motivating things a young writer can experience. At the end of each term, choose one piece together and discuss: What has improved? What are you still working on? This builds metacognitive awareness of their own writing development.",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Rewrite in Formal Language",
        instruction: "Rewrite this paragraph using formal language, removing contractions, slang and personal opinion.",
        prompts: [
          { text: "ORIGINAL: 'I reckon that it's really important to look after our oceans. There's heaps of plastic in the water and it's making fish sick. I think people should stop using plastic bags because they're bad for the environment.'\n\nMY REWRITE:", type: "box", lines: 8 },
        ],
      },
      // 77
      {
        type: "matching" as const,
        title: "Match the Editing Strategy to the Problem",
        instruction: "Match each editing strategy to the writing problem it solves.",
        parentTip: "Systematic editing is a sign of a mature writer. Teaching your child to edit in passes — one for structure, one for language, one for conventions — is more effective than trying to fix everything at once.",
        left: ["Read the paragraph aloud", "Check every 'I think' or 'I believe'", "Underline every transition word", "Read only the first and last sentence of each paragraph", "Look up the spelling of any word you are unsure about"],
        right: ["Replace personal opinion phrases with evidence-based statements", "Verify the topic sentence and concluding statement are strong and related", "Check that your ideas flow logically and that transitions are accurate", "Correct any spelling errors that reduce the credibility of your writing", "Identify sentences that sound awkward or do not flow naturally"],
      },
      // 78
      {
        type: "sequence" as const,
        title: "Put the Writing Process in Order",
        instruction: "Number these steps in the expository writing process from 1 (first) to 6 (last).",
        items: [
          { label: "Edit for language conventions — formal language, spelling, punctuation" },
          { label: "Choose a topic and identify your main idea" },
          { label: "Publish or present the final version" },
          { label: "Research and take notes, recording your sources" },
          { label: "Write the first draft using your plan" },
          { label: "Plan the paragraph structure — topic sentence, evidence, explanation, conclusion" },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Write a Self-Reflection on Your Progress",
        instruction: "Look back at the expository paragraphs you have written in this worksheet. Answer the reflection questions below.",
        prompts: [
          { text: "Q1: What is one thing you have improved in your expository writing since starting this worksheet?", type: "lines", lines: 3 },
          { text: "Q2: What is one area you would like to improve further?", type: "lines", lines: 3 },
          { text: "Q3: Which activity challenged you the most? Why?", type: "lines", lines: 3 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Invisible Architecture of Great Writing",
        content: "Every great piece of expository writing has an invisible architecture — a structure so clear and logical that the reader moves through it effortlessly without noticing the scaffolding. When you read an encyclopaedia entry, a science article or a documentary script and it feels easy to understand, that is not an accident. The writer has worked hard to create clarity. Now that you know the architecture — topic sentence, evidence, explanation, transition words, concluding statement — you will see it everywhere. Once you can see it, you can build it yourself. And once you can build it yourself, you can explain anything.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Extension: Write an Expository Introduction",
        instruction: "Write an introduction paragraph for a three-paragraph expository text on one of these topics: the importance of the ocean, how animals adapt to their environments, or the benefits of music education. An introduction should hook the reader, introduce the topic and briefly outline what the text will cover.",
        parentTip: "A strong introduction is one of the hardest things to write — it needs to be engaging AND informative. Encourage your child to draft two different openings and choose the stronger one.",
        prompts: [{ text: "My introduction paragraph:", type: "box", lines: 10 }],
      },
      // 82
      {
        type: "fill-in-blank" as const,
        title: "Advanced Transition Phrases",
        instruction: "Fill in each blank with an advanced transition phrase: notwithstanding, by contrast, it is worth noting that, this is significant because, a key implication of this is.",
        sentences: [
          { text: "Solar energy is growing rapidly. _____, coal-fired power stations still supply over 50% of Australia's electricity.", blanks: ["By contrast"] },
          { text: "Bee populations are declining globally. _____ bees pollinate approximately one third of all food crops.", blanks: ["This is significant because"] },
          { text: "The evidence supports the use of regular exercise in schools. _____, some schools still do not provide adequate physical education time.", blanks: ["Notwithstanding"] },
          { text: "Ocean temperatures have risen by 0.5°C over the past century. _____ is that coral bleaching events are now occurring four times more frequently.", blanks: ["A key implication of this"] },
          { text: "_____ Australians consume more plastic per capita than the global average, making domestic policy reform especially urgent.", blanks: ["It is worth noting that"] },
        ],
      },
      // 83
      {
        type: "open-response" as const,
        title: "Write a Conclusion Paragraph",
        instruction: "Write a conclusion paragraph for the three-paragraph text you planned earlier. A conclusion should restate the main point, briefly summarise the key evidence and end with a thoughtful final statement.",
        parentTip: "A conclusion is not just a repeated introduction. It should synthesise — bring together — the ideas explored in the body paragraphs and give the reader a sense of completion.",
        prompts: [{ text: "My conclusion paragraph:", type: "box", lines: 10 }],
      },
      // 84
      {
        type: "multiple-choice" as const,
        title: "Advanced Expository Techniques",
        instruction: "Choose the best answer for each question about advanced expository writing.",
        questions: [
          { prompt: "What is the purpose of a rhetorical question in an expository text?", options: ["To ask the reader for their personal opinion", "To engage the reader and prompt them to think about the topic before it is explained", "To replace evidence in the paragraph", "To introduce new vocabulary"], answer: "To engage the reader and prompt them to think about the topic before it is explained" },
          { prompt: "What does 'synthesising evidence' mean in expository writing?", options: ["Copying information from multiple sources without acknowledgement", "Collecting as many facts as possible and listing them in order", "Combining information from different sources to build a single, coherent argument", "Writing the conclusion before the introduction"], answer: "Combining information from different sources to build a single, coherent argument" },
          { prompt: "What is the difference between a 'topic' and a 'thesis' in expository writing?", options: ["They mean exactly the same thing", "A topic is the broad subject; a thesis is a specific, arguable claim about that topic", "A thesis is always shorter than a topic", "A topic appears in the conclusion; a thesis appears in the introduction"], answer: "A topic is the broad subject; a thesis is a specific, arguable claim about that topic" },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Develop a Thesis Statement",
        instruction: "A thesis statement is a specific, focused claim about a topic that guides an entire expository text. Write a thesis statement for each topic below.",
        parentTip: "A thesis statement is one of the most important skills in secondary school English and humanities. Starting at Year 5 gives your child a significant head start.",
        prompts: [
          { text: "TOPIC: Climate change\nTHESIS STATEMENT:", type: "lines", lines: 2 },
          { text: "TOPIC: The value of reading\nTHESIS STATEMENT:", type: "lines", lines: 2 },
          { text: "TOPIC: Ocean pollution\nTHESIS STATEMENT:", type: "lines", lines: 2 },
        ],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Extended Expository Writing",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "A thesis statement guides the reader and the writer by focusing the text on a specific claim.", answer: true },
          { text: "In a five-paragraph essay, the introduction and conclusion paragraphs are the body paragraphs.", answer: false },
          { text: "Each body paragraph in an essay should support the thesis statement with evidence.", answer: true },
          { text: "An academic essay uses the same informal language as a personal narrative.", answer: false },
          { text: "A strong concluding paragraph does more than just repeat the introduction — it synthesises the argument.", answer: true },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Write a Body Paragraph Supporting a Thesis",
        instruction: "Use this thesis statement to write one body paragraph with a topic sentence, evidence, explanation and concluding statement. THESIS: Daily reading has a profound and lasting impact on children's academic success.",
        prompts: [{ text: "My body paragraph:", type: "box", lines: 12 }],
      },
      // 88
      {
        type: "sorting" as const,
        title: "Sort the Essay Components",
        instruction: "Sort each component into the correct part of a five-paragraph expository essay.",
        parentTip: "Understanding essay structure at Year 5 prepares students for the analytical writing expected in secondary school. This is a genuine higher-order skill worth developing carefully.",
        columns: ["Introduction", "Body paragraph", "Conclusion"],
        items: [
          { label: "Thesis statement" },
          { label: "Hook — opening sentence to engage the reader" },
          { label: "Overview of main points" },
          { label: "Topic sentence supporting the thesis" },
          { label: "Evidence and explanation" },
          { label: "Linking sentence to next paragraph" },
          { label: "Restatement of thesis" },
          { label: "Summary of key evidence" },
          { label: "Final thoughtful statement" },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Write a Full Five-Part Expository Essay Plan",
        instruction: "Plan a five-paragraph expository essay on a topic from your curriculum. Complete all five parts of the plan.",
        parentTip: "Planning a five-paragraph essay is an advanced Year 5 skill. If your child completes this confidently, celebrate — they are working at secondary school level.",
        prompts: [
          { text: "Essay topic:", type: "lines", lines: 1 },
          { text: "Thesis statement:", type: "lines", lines: 2 },
          { text: "Body paragraph 1 topic sentence:", type: "lines", lines: 2 },
          { text: "Body paragraph 2 topic sentence:", type: "lines", lines: 2 },
          { text: "Body paragraph 3 topic sentence:", type: "lines", lines: 2 },
          { text: "Conclusion — restatement of thesis:", type: "lines", lines: 2 },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Value of the Long Game",
        content: "Expository writing is a skill that develops over years, not weeks. If your child can write a well-structured single paragraph by the end of Year 5, they are well on track. If they can write a three-paragraph text with a clear argument and varied evidence, they are excelling. The goal is not perfection — it is the habit of structured thinking. Every paragraph they write, read, discuss and revise is building the neural pathways that will serve them throughout secondary school and beyond.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Write Your Best Expository Paragraph",
        instruction: "Write the best expository paragraph you can — this is your showcase piece. Choose a topic you know well, use strong evidence, careful explanation and polished language. Take your time.",
        prompts: [{ text: "My showcase paragraph:", type: "box", lines: 14 }],
      },
      // 92
      {
        type: "multiple-choice" as const,
        title: "Mastery Check: Expository Structure",
        instruction: "Choose the best answer for each question to demonstrate your mastery of expository writing.",
        questions: [
          { prompt: "Which of these best describes the purpose of the explanation sentence in an expository paragraph?", options: ["To introduce a new piece of evidence", "To repeat the topic sentence in different words", "To tell the reader why the evidence supports the main idea", "To provide the transition between two paragraphs"], answer: "To tell the reader why the evidence supports the main idea" },
          { prompt: "Which of these is the correct order for the parts of an expository paragraph?", options: ["Evidence → Topic sentence → Explanation → Concluding statement", "Topic sentence → Evidence → Explanation → Concluding statement", "Concluding statement → Topic sentence → Evidence → Explanation", "Topic sentence → Concluding statement → Evidence → Explanation"], answer: "Topic sentence → Evidence → Explanation → Concluding statement" },
          { prompt: "What makes a concluding statement different from a topic sentence?", options: ["A concluding statement introduces a new idea while a topic sentence wraps up the old one", "A concluding statement provides more evidence while a topic sentence does not", "A concluding statement synthesises the paragraph's content rather than introducing the main idea", "They are the same — both state the main idea"], answer: "A concluding statement synthesises the paragraph's content rather than introducing the main idea" },
        ],
      },
      // 93
      {
        type: "fill-in-blank" as const,
        title: "Complete the Academic Paragraph",
        instruction: "Fill in the blanks to complete this formal academic paragraph. Choose the most appropriate language for each gap.",
        sentences: [
          { text: "Climate change _____ [represents / is kind of] one of the most significant challenges of the twenty-first century.", blanks: ["represents"] },
          { text: "According to the Intergovernmental Panel on Climate Change, global temperatures have _____ [risen / gone up] by approximately 1.1°C since pre-industrial times.", blanks: ["risen"] },
          { text: "_____ [This is important because / Like, this means], continued warming is projected to increase the frequency of extreme weather events, threatening human settlements and ecosystems worldwide.", blanks: ["This is important because"] },
          { text: "_____ [Overall / So basically], addressing climate change requires urgent, coordinated action from governments, industries and individuals.", blanks: ["Overall"] },
        ],
      },
      // 94
      {
        type: "open-response" as const,
        title: "Respond to a Non-Fiction Article",
        instruction: "Read a short non-fiction article with your parent. Write an expository paragraph that explains the main idea of the article and evaluates the quality of the evidence used.",
        parentTip: "Critical reading of non-fiction is a sophisticated skill. After reading together, ask: What is the writer claiming? What evidence do they use? Is it strong evidence? Would you change anything about how the argument is structured?",
        prompts: [
          { text: "Article title and source:", type: "lines", lines: 1 },
          { text: "My response paragraph (include: main idea, key evidence, your evaluation):", type: "box", lines: 12 },
        ],
      },
      // 95
      {
        type: "home-activity" as const,
        title: "Home Activity: Expository Writer in the Wild",
        instruction: "This week, look for expository writing in real life. Choose one example and complete the activity.",
        parentTip: "Finding expository writing in the real world — cereal box nutritional panels, product instructions, encyclopaedia entries, news articles — shows children that expository writing is not just a school exercise. It is the dominant mode of professional communication.",
        suggestions: [
          "Find an expository text in a magazine, encyclopedia, science textbook or news website.",
          "Identify the topic sentence and the main evidence in the text.",
          "Circle all the transition words you can find.",
          "Write three sentences explaining what the text is about, what evidence it uses and how well you think it is structured.",
          "Share your findings with a family member and discuss: Is this text well-structured? What would you improve?",
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Teach It Back",
        instruction: "Explain expository writing to someone who has never heard of it — a younger sibling, a grandparent or an imaginary student. Use your own words and include an example.",
        parentTip: "Teaching back is the highest form of understanding. If a child can explain a concept in their own words, they own it. This activity also builds communication confidence.",
        prompts: [{ text: "My explanation (as if teaching someone else):", type: "box", lines: 10 }],
      },
      // 97
      {
        type: "multiple-choice" as const,
        title: "Mastery Challenge: Identify the Issue",
        instruction: "Each paragraph below has one structural issue. Choose the issue.",
        questions: [
          { prompt: "PARAGRAPH: 'The Amazon rainforest is incredibly important. It is green. Many animals live there. Rainforests are nice.' What is the main problem?", options: ["The topic sentence is too specific", "The paragraph lacks evidence, explanation and a clear topic sentence", "There are too many transition words", "The concluding statement is missing"], answer: "The paragraph lacks evidence, explanation and a clear topic sentence" },
          { prompt: "PARAGRAPH: 'Exercise is important for health. It builds strong muscles. Running is my favourite sport. Football teams train every week. Additionally, swimming is popular.' What is the main problem?", options: ["The evidence is not specific enough", "The paragraph has no topic sentence", "The paragraph lacks a clear focus — it jumps between unrelated ideas", "The transition words are incorrect"], answer: "The paragraph lacks a clear focus — it jumps between unrelated ideas" },
          { prompt: "PARAGRAPH: 'Reducing plastic waste is essential for protecting our oceans. According to Ocean Watch Australia, over 130,000 tonnes of plastic enter Australian waterways each year. This damages marine ecosystems and harms wildlife.' What is missing?", options: ["A topic sentence", "An explanation sentence", "A concluding statement", "Evidence"], answer: "A concluding statement" },
        ],
      },
      // 98
      {
        type: "open-response" as const,
        title: "Fix the Broken Paragraph",
        instruction: "This paragraph has several problems — a weak topic sentence, vague evidence and no explanation. Rewrite it as a strong expository paragraph.",
        prompts: [
          { text: "ORIGINAL: 'Water is really important. People use water a lot. Without water people would be bad. Lots of animals need water too. Water is good.'\n\nMY IMPROVED PARAGRAPH:", type: "box", lines: 10 },
        ],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Write a Complete Expository Text: Your Choice",
        instruction: "Write a complete three-paragraph expository text on any topic from your curriculum. This is your final masterpiece for this worksheet. Use everything you have learned: strong topic sentences, specific evidence, clear explanations, varied transition words and a thoughtful conclusion.",
        parentTip: "This is the capstone activity. Do not rush it. Encourage your child to plan first (15 minutes), write (30 minutes) and edit (15 minutes). If they produce a well-structured three-paragraph text independently, that is an outstanding Year 5 achievement.",
        prompts: [{ text: "My complete expository text:", type: "box", lines: 22 }],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: You Are Now an Expository Writer",
        content: "You have completed 100 activities in expository writing. Think about where you started — and think about what you can do now. You can identify a topic sentence, choose and evaluate evidence, explain why evidence matters, use transition words precisely and structure a full multi-paragraph text. These are the exact same skills that journalists, scientists, historians and lawyers use every day. Non-fiction writing is how the world explains itself. You are now part of that tradition. The next time you want to explain something you care about — something you have researched and understood — you have the tools to do it clearly, precisely and powerfully. Write that text.",
      },
    ],
  },
  {
    slug: "persuasive-arguments-counterarguments",
    title: "Persuasive Texts: Arguments & Counterarguments",
    strand: "Literacy",
    description:
      "Write stronger persuasive texts by including a counterargument and rebuttal alongside your main arguments.",
    learningGuide: {
      concept:
        "A persuasive text presents arguments supported by evidence. A counterargument acknowledges the opposing viewpoint. A rebuttal explains why the counterargument is less convincing than your own position. Including a counterargument shows the reader that you have considered all sides — this makes your argument more credible and persuasive.",
      activation:
        "Pose a debate topic: Zoos should be closed. Ask your child to give one argument for and one against. Discuss how addressing the other side actually makes your argument stronger.",
      check:
        "After the worksheet, ask your child to read their persuasive text aloud. Can they identify their main argument, their counterargument and their rebuttal?",
    },
    lesson: {
      title: "The Art of the Argument",
      objective:
        "Write a persuasive paragraph that includes a main argument, a counterargument and a rebuttal.",
      materials: ["This worksheet", "A pencil", "A highlighter"],
      intro: {
        title: "Expect the Opposition",
        script:
          "Imagine you are trying to convince the school council that students should have free time every afternoon. You make your argument: free time helps creativity. But someone on the council says: students will just mess around and not learn anything. If you have not thought about this objection, you are stuck. But if you anticipated it, you can respond: While some students may need guidance on how to use free time productively, research shows that unstructured play improves problem-solving and reduces stress. That is a rebuttal — you acknowledge the concern and then explain why your position is still stronger.",
        action:
          "Write the structure on paper: Argument > Counterargument > Rebuttal. Model the example above, then give your child a different topic to try orally before writing.",
      },
      mainActivity: {
        title: "Argument Architect",
        script:
          "Strong persuasive writers think like architects — they build a structure before they start writing. Today you are going to plan and write a persuasive paragraph that includes all three parts: your main argument with evidence, a counterargument that fairly represents the other side, and a rebuttal that explains why your position is more convincing. The key is to be fair to the other side — if you misrepresent their argument, readers will not trust you.",
        action:
          "Work through the planning activity on the worksheet together before your child writes independently.",
      },
      wrapUp: {
        title: "Test Your Argument",
        script:
          "When you have finished writing, I am going to be your toughest critic. I will argue the opposite side and you have to counter me using your rebuttal. Ready? This is how debaters train — by practising against someone who disagrees.",
        action:
          "Spend three to five minutes in a playful spoken debate on the topic your child wrote about.",
      },
      parentTip:
        "Watch a short debate clip from a children's program or current affairs show together. Pause to identify: What is the argument? What is the counterargument? Who makes the stronger rebuttal?",
      extension:
        "Write a full four-paragraph persuasive text — introduction, two argument paragraphs (each with counterargument and rebuttal), and a conclusion. Aim for a formal, confident tone throughout.",
      resources: [
        {
          title: "ReadWriteThink — Persuasion Map",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives/persuasion-map",
          description:
            "Interactive planning tool for structuring arguments and counterarguments.",
        },
        {
          title: "Khan Academy — Argument Writing",
          url: "https://www.khanacademy.org/ela/cc-5th-grade-reading-vocab/xe2c54a99ede11c03:writing/xe2c54a99ede11c03:argument-writing/e/argument-writing",
          description:
            "Guided practice for constructing and refuting arguments.",
        },
        {
          title: "ABC Education — Behind the News",
          url: "https://www.abc.net.au/btn/",
          description:
            "Current affairs stories that model opinion, argument and counterargument.",
        },
      ],
    },
    activities: [
      // 1
      {
        type: "multiple-choice" as const,
        title: "What Is Persuasive Writing?",
        instruction: "Choose the best answer for each question about persuasive writing.",
        parentTip: "Persuasive writing is one of the most important real-world writing skills. Being able to argue a position clearly and fairly is central to participation in democracy, the workplace and academic life.",
        questions: [
          { prompt: "What is the main purpose of persuasive writing?", options: ["To entertain the reader with an exciting story", "To convince the reader to agree with a particular viewpoint", "To explain how something works step by step", "To record events in the order they happened"], answer: "To convince the reader to agree with a particular viewpoint" },
          { prompt: "What is a counterargument in a persuasive text?", options: ["A second argument that agrees with the main argument", "A sentence that introduces the topic", "The opposing viewpoint that the writer acknowledges", "The concluding statement at the end of the text"], answer: "The opposing viewpoint that the writer acknowledges" },
          { prompt: "What is a rebuttal?", options: ["A sentence that introduces a new argument", "A response that explains why the counterargument is less convincing than the main argument", "A list of all the evidence used in the text", "A question that asks the reader to agree"], answer: "A response that explains why the counterargument is less convincing than the main argument" },
        ],
      },
      // 2
      {
        type: "matching" as const,
        title: "Match the Persuasive Text Part to Its Purpose",
        instruction: "Draw a line to match each part of a persuasive text to its purpose.",
        left: ["Position statement", "Argument", "Evidence", "Counterargument", "Rebuttal", "Conclusion"],
        right: ["Shows the writer has considered the other side fairly", "Wraps up the argument and restates the position", "A reason that supports the writer's position", "Explains why the counterargument is less convincing", "The writer's main viewpoint on the issue", "A fact, statistic or example that supports the argument"],
      },
      // 3
      {
        type: "true-false" as const,
        title: "True or False: Persuasive Writing Basics",
        instruction: "Mark each statement True or False.",
        parentTip: "Ask your child to explain their reasoning for each answer. Understanding why a statement is false is more valuable than simply knowing the answer.",
        statements: [
          { text: "A persuasive text always presents only one side of an argument.", answer: false },
          { text: "A rebuttal acknowledges the counterargument and explains why the main argument is stronger.", answer: true },
          { text: "Personal feelings are always the strongest form of evidence in persuasive writing.", answer: false },
          { text: "Including a counterargument can make a persuasive argument MORE convincing.", answer: true },
          { text: "A persuasive text should use a formal, confident tone.", answer: true },
        ],
      },
      // 4
      {
        type: "open-response" as const,
        title: "Identify the Argument Structure",
        instruction: "Read the paragraph below. Label each part — A (argument), CA (counterargument) and R (rebuttal).",
        prompts: [
          { text: "PARAGRAPH:\nAustralia should introduce mandatory recycling education in all primary schools. Studies show that children who learn recycling habits early are significantly more likely to maintain them into adulthood, helping to reduce landfill and plastic pollution. Some may argue that this would take up valuable classroom time better spent on core subjects. However, environmental education is itself a core life skill, and brief weekly lessons — as short as fifteen minutes — have been shown to make a lasting difference in student attitudes and behaviour.\n\nLabel each part (A, CA or R):", type: "lines", lines: 4 },
        ],
      },
      // 5
      {
        type: "fill-in-blank" as const,
        title: "Complete the Persuasive Vocabulary",
        instruction: "Fill in each blank with the correct term: argue, evidence, rebuttal, counterargument, position.",
        parentTip: "Knowing the correct vocabulary for persuasive writing helps students analyse texts they read and structure their own writing with greater precision.",
        sentences: [
          { text: "The writer's _____ is their main viewpoint on the topic.", blanks: ["position"] },
          { text: "A _____ is the opposing view that the writer acknowledges.", blanks: ["counterargument"] },
          { text: "A _____ is the writer's response to the opposing view.", blanks: ["rebuttal"] },
          { text: "Writers use _____ such as facts and statistics to support their argument.", blanks: ["evidence"] },
          { text: "To _____ effectively, a writer must support every claim with reasoning or evidence.", blanks: ["argue"] },
        ],
      },
      // 6
      {
        type: "sorting" as const,
        title: "Sort the Persuasive Sentences",
        instruction: "Sort each sentence into the correct category: Argument, Counterargument or Rebuttal.",
        parentTip: "Being able to categorise sentences by their argumentative function is a critical reading skill. It helps students understand how persuasive texts are structured.",
        columns: ["Argument", "Counterargument", "Rebuttal"],
        items: [
          { label: "All students should have access to a school lunch programme." },
          { label: "Some may argue that a lunch programme would be too expensive to run." },
          { label: "However, research from the UK shows that investment in school meals saves governments money by improving attendance and reducing healthcare costs." },
          { label: "Zoos play a vital role in the conservation of endangered species." },
          { label: "Critics claim that zoos restrict animals and reduce their quality of life." },
          { label: "While this concern is valid, modern zoos with enrichment programmes and large habitats provide conditions far superior to an unprotected wild environment." },
        ],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Strong Argument or Weak Argument?",
        instruction: "Circle whether each argument is strong (well supported) or weak (unsupported or flawed).",
        parentTip: "Discuss with your child why an argument without evidence is easy to dismiss. This builds the habit of asking: What is the evidence for this claim?",
        questions: [
          { prompt: "Everyone knows that homework is useless. It should be abolished immediately.", options: ["Strong — well supported", "Weak — unsupported opinion"] },
          { prompt: "Reducing single-use plastics is essential: they take up to 500 years to break down and make up over 80% of marine debris, threatening thousands of ocean species.", options: ["Strong — well supported", "Weak — unsupported opinion"] },
          { prompt: "We should protect the environment because nature is nice and it would be sad if animals died.", options: ["Strong — well supported", "Weak — vague and unsupported"] },
          { prompt: "My friend agrees with me, so my argument must be right.", options: ["Strong — uses evidence", "Weak — logical flaw (appeal to one opinion)"] },
        ],
      },
      // 8
      {
        type: "open-response" as const,
        title: "Write a Rebuttal",
        instruction: "Read each counterargument. Write a rebuttal that acknowledges the concern but explains why the main argument is still stronger.",
        parentTip: "A good rebuttal begins by acknowledging the counterargument ('While it is true that…' or 'Although some argue…') before explaining why the main position is stronger. This structure signals fair-mindedness.",
        prompts: [
          { text: "ARGUMENT: Students should have more physical education time.\nCOUNTERARGUMENT: More PE time would reduce time available for core academic subjects.\nMY REBUTTAL:", type: "lines", lines: 4 },
          { text: "ARGUMENT: Schools should ban smartphones during school hours.\nCOUNTERARGUMENT: Smartphones are useful educational tools that can support learning.\nMY REBUTTAL:", type: "lines", lines: 4 },
        ],
      },
      // 9
      {
        type: "matching" as const,
        title: "Match the Persuasive Language Technique",
        instruction: "Draw a line to match each sentence to the persuasive language technique it uses.",
        parentTip: "Recognising these techniques in texts helps your child use them deliberately in their own writing — and spot when writers are using them to influence readers.",
        left: ["Nine out of ten experts agree that sleep is critical for learning.", "Surely no reasonable person would want children to suffer.", "We all want our children to have the best possible future, don't we?", "The evidence is clear, the science is settled, and the time to act is now.", "If we do nothing, the consequences will be catastrophic."],
        right: ["Rhetorical question", "Appeal to authority / statistics", "Emotive language", "Rule of three", "Appeal to shared values"],
      },
      // 10
      {
        type: "true-false" as const,
        title: "True or False: Persuasive Techniques",
        instruction: "Mark each statement about persuasive techniques True or False.",
        parentTip: "Media literacy and persuasive literacy go hand in hand. The ability to recognise these techniques in advertising, politics and media is one of the most important critical thinking skills a young person can develop.",
        statements: [
          { text: "A rhetorical question expects the reader to answer out loud.", answer: false },
          { text: "Emotive language is designed to trigger a strong emotional response in the reader.", answer: true },
          { text: "The 'rule of three' means using three arguments in a row for extra impact.", answer: true },
          { text: "Appealing to authority means making up a famous person's name to support your argument.", answer: false },
          { text: "Repetition can be used to emphasise a key message in persuasive writing.", answer: true },
        ],
      },
      // 11
      {
        type: "circle-correct" as const,
        title: "Identify the Technique",
        instruction: "Read each sentence. Circle the persuasive technique being used.",
        questions: [
          { prompt: "'Every parent wants their child to be safe, healthy and happy.' What technique is this?", options: ["Rule of three", "Appeal to shared values", "Rhetorical question", "Emotive language"] },
          { prompt: "'How can we stand by and do nothing while our oceans fill with plastic?' What technique is this?", options: ["Appeal to authority", "Emotive language", "Rhetorical question", "Rule of three"] },
          { prompt: "'Research from the World Health Organisation shows that…' What technique is this?", options: ["Appeal to authority", "Rhetorical question", "Rule of three", "Repetition"] },
          { prompt: "'Our children deserve better. Our planet deserves better. Our future deserves better.' What technique is this?", options: ["Emotive language", "Rule of three and repetition", "Appeal to shared values", "Appeal to authority"] },
        ],
      },
      // 12
      {
        type: "fill-in-blank" as const,
        title: "Add a Persuasive Technique",
        instruction: "Rewrite each plain statement using the persuasive technique in brackets.",
        parentTip: "Consciously applying a technique before writing naturally helps students internalise these tools. With practice, they begin to use them automatically.",
        sentences: [
          { text: "[Rhetorical question]: Exercise is important for children. REWRITE: _____?", blanks: [""] },
          { text: "[Rule of three]: Reading improves your vocabulary. REWRITE: Reading improves your _____, your _____ and your _____.", blanks: [""] },
          { text: "[Emotive language]: Many animals are losing their homes due to deforestation. REWRITE: Thousands of _____ animals are _____ their homes each year as forests are _____.", blanks: [""] },
        ],
      },
      // 13
      {
        type: "open-response" as const,
        title: "Analyse a Persuasive Text",
        instruction: "Read this short persuasive paragraph and answer the analysis questions below.",
        prompts: [
          { text: "PARAGRAPH:\n'School uniforms should be compulsory in all Australian primary schools. Uniforms reduce the visible differences between students from different economic backgrounds, which research shows decreases bullying related to clothing. Some argue that uniforms limit students' self-expression. However, identity can be expressed through personality, talent and behaviour — not just clothing — and the benefits of social equality and reduced distraction far outweigh this concern.'\n\nQ1: What is the main argument?", type: "lines", lines: 2 },
          { text: "Q2: What is the counterargument?", type: "lines", lines: 2 },
          { text: "Q3: What is the rebuttal?", type: "lines", lines: 2 },
          { text: "Q4: What evidence is used? Is it strong? Why or why not?", type: "lines", lines: 3 },
        ],
      },
      // 14
      {
        type: "sorting" as const,
        title: "Sort by Persuasive Strength",
        instruction: "Sort each piece of evidence from WEAK (1) to STRONG (3).",
        parentTip: "Students often struggle to distinguish between strong and weak evidence. This sorting activity makes the difference concrete and memorable.",
        columns: ["Weak", "Moderate", "Strong"],
        items: [
          { label: "I think exercise is good." },
          { label: "Many people say exercise is beneficial." },
          { label: "The Australian Department of Health recommends 60 minutes of moderate exercise per day for children aged 5–12 to support physical and mental health." },
          { label: "Rainforests are important." },
          { label: "Rainforests provide habitat for many animals." },
          { label: "The Amazon rainforest produces 20% of the world's oxygen and is home to approximately 10% of all known species on Earth." },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Fairness Test",
        content: "Help your child apply the 'Fairness Test' to any counterargument they write: 'If someone who disagrees with me read this counterargument, would they say I have represented their view fairly?' A counterargument that is too weak or easy to dismiss actually weakens a persuasive text, because it signals to the reader that the writer has not engaged seriously with the opposing view. Fairness builds credibility.",
      },
      // 16
      {
        type: "open-response" as const,
        title: "Write a Fair Counterargument",
        instruction: "A fair counterargument genuinely represents the opposing view — it does not distort or weaken it. Write a fair counterargument for each argument below.",
        parentTip: "Writing a fair counterargument requires empathy and critical thinking — the ability to truly understand a view you disagree with. This is a higher-order skill well worth practising.",
        prompts: [
          { text: "ARGUMENT: Children should be allowed to choose their own subjects at school.\nFAIR COUNTERARGUMENT:", type: "lines", lines: 3 },
          { text: "ARGUMENT: Fast food companies should not be allowed to advertise to children.\nFAIR COUNTERARGUMENT:", type: "lines", lines: 3 },
        ],
      },
      // 17
      {
        type: "multiple-choice" as const,
        title: "Which Rebuttal Is Stronger?",
        instruction: "Read each pair of rebuttals. Choose the stronger one.",
        parentTip: "A strong rebuttal doesn't just say the counterargument is wrong — it explains specifically why, using evidence or logic.",
        questions: [
          { prompt: "COUNTERARGUMENT: School uniforms limit students' self-expression.\nRebuttal A: That is not true, uniforms are fine.\nRebuttal B: While uniforms limit clothing choices, self-expression is better achieved through art, writing, sport and social interaction — areas where schools actively encourage individuality.", options: ["Rebuttal A", "Rebuttal B"], answer: "Rebuttal B" },
          { prompt: "COUNTERARGUMENT: Banning phones at school would make it harder for students to contact parents in an emergency.\nRebuttal A: That is wrong and the counterargument does not make sense.\nRebuttal B: While safety is a genuine concern, schools can provide alternative means of communication — such as the front office — which ensures student safety without the distraction of unrestricted phone access.", options: ["Rebuttal A", "Rebuttal B"], answer: "Rebuttal B" },
        ],
      },
      // 18
      {
        type: "fill-in-blank" as const,
        title: "Rebuttal Sentence Starters",
        instruction: "Complete each rebuttal using one of these sentence starters: While it is true that, Although some argue, This concern, while understandable, While this view has merit.",
        sentences: [
          { text: "COUNTERARGUMENT: More physical education would take time away from maths and literacy.\n_____, the evidence suggests that physically active students achieve higher academic results overall.", blanks: ["While it is true that"] },
          { text: "COUNTERARGUMENT: Technology in classrooms can distract students.\n_____ that technology presents risks, the solution is guided use and clear boundaries — not prohibition.", blanks: ["Although some argue"] },
          { text: "COUNTERARGUMENT: Banning disposable plastics could harm businesses.\n_____, overlooks the far greater economic cost of plastic pollution to fishing industries, tourism and coastal communities.", blanks: ["This concern, while understandable,"] },
          { text: "COUNTERARGUMENT: Compulsory sport at school is unfair to students who are not athletic.\n_____, the goal of school sport is participation, fitness and teamwork — not elite competition — and all students can benefit from it.", blanks: ["While this view has merit,"] },
        ],
      },
      // 19
      {
        type: "open-response" as const,
        title: "Plan Your Argument",
        instruction: "Choose a topic and plan your persuasive paragraph using the argument structure below.",
        parentTip: "Planning before writing is especially important for persuasive texts, which require careful sequencing. A well-planned paragraph is much easier to write and almost always better quality.",
        prompts: [
          { text: "Topic (circle one or write your own): Screen time for children should be limited. / All students should learn a second language. / My own topic:", type: "lines", lines: 1 },
          { text: "My main argument:", type: "lines", lines: 2 },
          { text: "Evidence or example:", type: "lines", lines: 2 },
          { text: "Counterargument (the other side — fairly represented):", type: "lines", lines: 2 },
          { text: "My rebuttal (why my argument is stronger):", type: "lines", lines: 2 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Art of Changing Minds",
        content: "The ability to change someone's mind with words — without force, without manipulation, just through clear reasoning and fair acknowledgement of the other side — is one of the most important skills a human can possess. Abraham Lincoln, Malala Yousafzai, David Attenborough and Greta Thunberg all changed the world primarily through persuasive language. Their secret was not just passion — it was structure. They knew their position, they supported it with evidence, they acknowledged opposition, and they rebutted it clearly. Persuasion is not about winning an argument. It is about inviting someone to see the world from a different angle. What do you believe in strongly enough to argue for?",
      },
      // 21
      {
        type: "open-response" as const,
        title: "Write Your Persuasive Paragraph",
        instruction: "Use your plan to write a persuasive paragraph that includes your argument, a counterargument and a strong rebuttal.",
        parentTip: "Encourage your child to read their paragraph aloud when finished. The ear catches awkward phrasing that the eye misses, especially in persuasive writing where rhythm and flow matter.",
        prompts: [{ text: "My persuasive paragraph:", type: "box", lines: 14 }],
      },
      // 22
      {
        type: "true-false" as const,
        title: "True or False: Types of Evidence",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "A statistic from a government health department is a reliable form of evidence.", answer: true },
          { text: "An anonymous blog post is always a reliable source of evidence.", answer: false },
          { text: "An anecdote (personal story) can be a powerful but limited form of evidence.", answer: true },
          { text: "An expert opinion carries more weight if it comes from a specialist in the relevant field.", answer: true },
          { text: "A quote from a celebrity is always strong evidence for a scientific claim.", answer: false },
        ],
      },
      // 23
      {
        type: "sorting" as const,
        title: "Sort the Evidence Types",
        instruction: "Sort each piece of evidence by type: Statistic, Expert opinion, Anecdote or Example.",
        parentTip: "Strong persuasive writing uses a variety of evidence types. Knowing each type's strengths and limitations helps writers choose and evaluate evidence more carefully.",
        columns: ["Statistic", "Expert opinion", "Anecdote", "Example"],
        items: [
          { label: "According to the CSIRO, 1.9 billion people worldwide lack access to clean drinking water." },
          { label: "Dr Emma Johnston, a leading marine scientist, argues that ocean pollution is the defining environmental challenge of our century." },
          { label: "My grandmother lived through the Snowy Mountains Scheme and says it changed the entire region." },
          { label: "Finland, which ranks among the world's top education systems, allows children to start formal schooling at age seven." },
          { label: "A 2024 report found that 67% of Australian primary students do not meet the recommended daily exercise guidelines." },
          { label: "The teacher who changed my father's life was the one who told him he was good at maths when nobody else did." },
        ],
      },
      // 24
      {
        type: "multiple-choice" as const,
        title: "Which Evidence Is Best?",
        instruction: "Choose the most credible and relevant piece of evidence for each argument.",
        questions: [
          { prompt: "ARGUMENT: Australian students need more time outdoors during the school day.", options: ["My cousin loves playing outside.", "A 2023 study published in the Australian Journal of Education found that outdoor breaks of 20 minutes improved student focus and reduced anxiety.", "Nature is very calming according to most people."], answer: "A 2023 study published in the Australian Journal of Education found that outdoor breaks of 20 minutes improved student focus and reduced anxiety." },
          { prompt: "ARGUMENT: The Great Barrier Reef requires urgent government protection.", options: ["The reef is really beautiful and lots of people love it.", "The Australian Institute of Marine Science reports that over 50% of the reef's coral has been lost since 1995 due to warming ocean temperatures.", "I went snorkelling once and thought it was amazing."], answer: "The Australian Institute of Marine Science reports that over 50% of the reef's coral has been lost since 1995 due to warming ocean temperatures." },
        ],
      },
      // 25
      {
        type: "fill-in-blank" as const,
        title: "Integrate Evidence into a Sentence",
        instruction: "Rewrite each piece of evidence as a sentence that integrates it naturally into a persuasive argument.",
        parentTip: "Integrating evidence smoothly — rather than just dropping in a fact — is a mark of sophisticated writing. The phrase 'According to [source]' or 'Research by [organisation] shows that' is the standard academic way to introduce evidence.",
        sentences: [
          { text: "EVIDENCE: 78% of children who learn to cook at home make healthier food choices as adults. INTEGRATED: According to _____, _____.", blanks: [""] },
          { text: "EVIDENCE: The ACT government introduced a 30-minute reading programme and literacy rates rose by 22%. INTEGRATED: As demonstrated by _____, _____.", blanks: [""] },
        ],
      },
      // 26
      {
        type: "open-response" as const,
        title: "Evaluate Your Evidence",
        instruction: "Look at the evidence you used in your persuasive paragraph. Answer the questions to evaluate it.",
        prompts: [
          { text: "My evidence (copy it here):", type: "lines", lines: 3 },
          { text: "Q1: What type of evidence is it (statistic, example, expert opinion, anecdote)?", type: "lines", lines: 1 },
          { text: "Q2: Is it specific and verifiable? How do you know?", type: "lines", lines: 2 },
          { text: "Q3: Is there any stronger evidence you could use instead? What would that look like?", type: "lines", lines: 3 },
        ],
      },
      // 27
      {
        type: "circle-correct" as const,
        title: "Identify the Logical Flaw",
        instruction: "Each argument contains a logical flaw. Circle the name of the flaw.",
        parentTip: "Learning to recognise logical fallacies — common errors in reasoning — is an advanced critical thinking skill that protects against manipulation and strengthens students' own arguments.",
        questions: [
          { prompt: "Argument: 'A famous footballer eats this cereal, therefore it must be the most nutritious breakfast available.' What is the flaw?", options: ["Appeal to false authority — a footballer is not a nutritionist", "The argument is actually correct", "This is an example of the rule of three"] },
          { prompt: "Argument: 'We have always had homework, so we should always have homework.' What is the flaw?", options: ["Appeal to tradition — 'it has always been done this way' is not a reason to continue", "The argument is actually correct", "This is an example of emotive language"] },
          { prompt: "Argument: 'If schools allow students to use phones, next they will allow students to do whatever they want.' What is the flaw?", options: ["Slippery slope — assumes one change leads to extreme outcomes", "The argument is actually correct", "This is an appeal to authority"] },
        ],
      },
      // 28
      {
        type: "matching" as const,
        title: "Match the Logical Fallacy to Its Description",
        instruction: "Match each logical fallacy to its definition.",
        parentTip: "Logical fallacies are everywhere — in advertising, politics and everyday conversation. Students who can name them have a powerful analytical tool for the rest of their lives.",
        left: ["Straw man", "Ad hominem", "False dichotomy", "Bandwagon fallacy", "Appeal to fear"],
        right: ["Arguing that the other side is wrong by attacking the person rather than their argument", "Suggesting that there are only two possible options when more exist", "Misrepresenting the opposing argument to make it easier to defeat", "Claiming something is true because many people believe it", "Using fear of consequences to persuade rather than evidence"],
      },
      // 29
      {
        type: "true-false" as const,
        title: "True or False: Logical Fallacies",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "A logical fallacy is an error in reasoning that makes an argument less valid.", answer: true },
          { text: "The straw man fallacy involves fairly representing the opposing argument before refuting it.", answer: false },
          { text: "Using fear to persuade an audience is always considered a logical fallacy.", answer: false },
          { text: "An ad hominem attack targets the person making the argument rather than the argument itself.", answer: true },
          { text: "A false dichotomy presents two extreme options as if they are the only choices available.", answer: true },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Real-World Persuasion",
        content: "Persuasive arguments are everywhere — in television advertising, political speeches, news editorials and even school fundraiser letters. Make it a habit to watch a short news segment or read an editorial with your child and ask: What is the argument? What evidence is used? Is there a counterargument? What logical fallacies can you spot? This real-world practice develops critical literacy skills far more effectively than worksheets alone.",
      },
      // 31
      {
        type: "open-response" as const,
        title: "Spot the Fallacy",
        instruction: "Read each argument. Identify the logical fallacy and explain why it makes the argument weaker.",
        prompts: [
          { text: "ARGUMENT: 'Everyone in my class thinks we should have shorter school days, so shorter days must be better for learning.'\nFALLACY NAME:", type: "lines", lines: 1 },
          { text: "Why this weakens the argument:", type: "lines", lines: 2 },
          { text: "ARGUMENT: 'You cannot trust her opinion on homework — she always arrives late to school.'\nFALLACY NAME:", type: "lines", lines: 1 },
          { text: "Why this weakens the argument:", type: "lines", lines: 2 },
        ],
      },
      // 32
      {
        type: "fill-in-blank" as const,
        title: "Persuasive Sentence Starters",
        instruction: "Complete each sentence using your own words. Each sentence starts with a persuasive technique.",
        sentences: [
          { text: "Evidence clearly shows that _____.", blanks: [""] },
          { text: "Surely no reasonable person would argue that _____.", blanks: [""] },
          { text: "Studies by [organisation] demonstrate that _____.", blanks: [""] },
          { text: "While some may argue that _____, the evidence suggests that _____.", blanks: [""] },
          { text: "The time to act is now — _____.", blanks: [""] },
        ],
      },
      // 33
      {
        type: "sorting" as const,
        title: "Sort the Techniques: Logos, Ethos or Pathos?",
        instruction: "Sort each persuasive technique into the correct classical appeal category.",
        parentTip: "The Greek philosopher Aristotle identified three forms of appeal in persuasion: logos (logic/evidence), ethos (credibility/character) and pathos (emotion). Even at Year 5, these concepts are accessible and powerful.",
        columns: ["Logos (logic and evidence)", "Ethos (credibility and authority)", "Pathos (emotion and values)"],
        items: [
          { label: "A statistic from a government health report" },
          { label: "A quote from a renowned scientist" },
          { label: "A story about a child affected by poverty" },
          { label: "A logical argument showing cause and effect" },
          { label: "An appeal to the reader's love for their family" },
          { label: "The writer's personal experience as a nurse" },
          { label: "A comparison of costs and benefits" },
          { label: "A vivid description of suffering animals" },
          { label: "The writer citing their ten years of research" },
        ],
      },
      // 34
      {
        type: "multiple-choice" as const,
        title: "Logos, Ethos or Pathos?",
        instruction: "Choose whether each sentence uses logos, ethos or pathos.",
        questions: [
          { prompt: "'As a doctor with twenty years of experience, I can tell you that sleep deprivation has serious consequences for children's development.'", options: ["Logos", "Ethos", "Pathos"], answer: "Ethos" },
          { prompt: "'Imagine your child going to school hungry, unable to concentrate, falling further and further behind.'", options: ["Logos", "Ethos", "Pathos"], answer: "Pathos" },
          { prompt: "'Data from the Australian Bureau of Statistics shows that 18% of children live in households experiencing food insecurity.'", options: ["Logos", "Ethos", "Pathos"], answer: "Logos" },
          { prompt: "'We all share the responsibility to create a fair society for every Australian child.'", options: ["Logos", "Ethos", "Pathos"], answer: "Pathos" },
        ],
      },
      // 35
      {
        type: "open-response" as const,
        title: "Write a Paragraph Using All Three Appeals",
        instruction: "Write a persuasive paragraph that uses logos, ethos AND pathos. Label where you have used each one in the margin.",
        parentTip: "Using all three classical appeals creates a persuasive argument that engages multiple dimensions of the reader's mind — their reason, their trust and their emotions. This is what master persuaders do.",
        prompts: [{ text: "Topic: Access to nature and outdoor play is essential for children's development.\nMy paragraph (label each appeal — Logos, Ethos, Pathos — in the margin):", type: "box", lines: 12 }],
      },
      // 36
      {
        type: "fill-in-blank" as const,
        title: "Formal Language for Persuasive Writing",
        instruction: "Rewrite each informal statement using formal language appropriate for a persuasive essay.",
        parentTip: "Formal language in persuasive writing signals that the writer is serious, credible and has considered the topic carefully. Informal language undermines the authority of the argument.",
        sentences: [
          { text: "INFORMAL: 'I reckon we should totally ban junk food ads.' FORMAL: '_____ should be _____ in order to _____.'", blanks: [""] },
          { text: "INFORMAL: 'Heaps of kids don't get enough sleep and it makes them tired.' FORMAL: 'A significant number of _____, resulting in _____.'", blanks: [""] },
          { text: "INFORMAL: 'It's kind of obvious that schools need better funding.' FORMAL: 'It is evident that _____ in order to _____.'", blanks: [""] },
        ],
      },
      // 37
      {
        type: "true-false" as const,
        title: "True or False: Formal Persuasive Writing",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Contractions such as 'don't' and 'it's' are appropriate in formal persuasive writing.", answer: false },
          { text: "Using the passive voice (e.g. 'it has been demonstrated') can make persuasive writing sound more authoritative.", answer: true },
          { text: "A formal persuasive essay should begin with 'I think' or 'In my opinion'.", answer: false },
          { text: "The words 'moreover' and 'furthermore' are appropriate for formal persuasive writing.", answer: true },
          { text: "A persuasive text can use emotive language in a formal register.", answer: true },
        ],
      },
      // 38
      {
        type: "open-response" as const,
        title: "Convert to Formal Persuasion",
        instruction: "Rewrite this informal persuasive paragraph in formal, confident language. Remove contractions, slang and personal opinion phrases.",
        prompts: [
          { text: "ORIGINAL: 'I think it's totally wrong that kids don't get to choose what subjects they study. Heaps of students are really good at art but they have to waste time on stuff they don't care about. It's kind of obvious that this makes school less fun and less effective.'\n\nMY FORMAL REWRITE:", type: "box", lines: 8 },
        ],
      },
      // 39
      {
        type: "multiple-choice" as const,
        title: "The Right Tone for Persuasion",
        instruction: "Choose the sentence that uses the most appropriate tone for a formal persuasive essay.",
        questions: [
          { prompt: "Which version is most appropriate in a formal persuasive essay?", options: ["Everyone knows that homework is pointless and totally unfair.", "The evidence suggests that excessive homework loads may be counterproductive to student wellbeing and academic performance."], answer: "The evidence suggests that excessive homework loads may be counterproductive to student wellbeing and academic performance." },
          { prompt: "Which rebuttal sentence is most appropriate in a formal persuasive essay?", options: ["That argument is totally wrong and doesn't make any sense.", "While this perspective raises valid concerns, the evidence does not support the claim that…"], answer: "While this perspective raises valid concerns, the evidence does not support the claim that…" },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Debate Is Democracy",
        content: "The word 'democracy' comes from the Greek words for 'people' (demos) and 'rule' (kratos). In ancient Athens — where democracy was invented — citizens were expected to be able to argue their case in public. The ability to form an argument, present evidence and respond fairly to opposing views was considered a civic duty. Today, the same skills lie at the heart of a functioning democracy. When you learn to write persuasively — with evidence, fairness and clear reasoning — you are not just learning to write. You are learning to participate in one of humanity's greatest inventions. What argument would you most like to make to the world?",
      },
      // 41
      {
        type: "open-response" as const,
        title: "Write Two Body Paragraphs",
        instruction: "Write two persuasive body paragraphs on the same topic. Each paragraph should have a different main argument, include evidence and end with a linking sentence to the next paragraph.",
        parentTip: "Writing two body paragraphs on the same topic is a significant step — it requires planning to make sure the two arguments are distinct and not repetitive. If your child struggles, help them brainstorm three possible arguments before choosing the two strongest.",
        prompts: [
          { text: "Topic: ___\nBody Paragraph 1 (argument 1):", type: "box", lines: 10 },
          { text: "Body Paragraph 2 (argument 2, with counterargument and rebuttal):", type: "box", lines: 10 },
        ],
      },
      // 42
      {
        type: "sequence" as const,
        title: "Order the Persuasive Essay",
        instruction: "Number these parts of a persuasive essay from 1 (first) to 6 (last).",
        items: [
          { label: "Body paragraph 2 — second argument with evidence and rebuttal" },
          { label: "Introduction — hook, background and position statement" },
          { label: "Conclusion — restate position, summary, call to action" },
          { label: "Body paragraph 1 — first argument with evidence" },
          { label: "Body paragraph 3 — third argument with counterargument and rebuttal" },
          { label: "Transition sentence linking introduction to body paragraphs" },
        ],
      },
      // 43
      {
        type: "fill-in-blank" as const,
        title: "Write a Position Statement",
        instruction: "A position statement clearly states the writer's view. Complete each position statement using your own words.",
        parentTip: "The position statement is the backbone of the persuasive essay — everything else supports it. A clearly worded position statement makes the entire text easier to write and more effective to read.",
        sentences: [
          { text: "This essay will argue that _____ because _____.", blanks: [""] },
          { text: "It is my position that _____, given that _____.", blanks: [""] },
          { text: "The evidence strongly suggests that _____ and therefore _____.", blanks: [""] },
        ],
      },
      // 44
      {
        type: "open-response" as const,
        title: "Write a Persuasive Introduction",
        instruction: "Write an introduction paragraph for a persuasive essay on one of these topics: Zoos should be closed / Schools should grow their own food / Australia should reduce single-use plastics. Include: a hook, background information and a position statement.",
        prompts: [{ text: "My introduction paragraph:", type: "box", lines: 10 }],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Hook",
        content: "The opening sentence of a persuasive essay — the hook — is one of the most important sentences a student will learn to write. Powerful hooks include a surprising statistic ('Every year, over 8 million tonnes of plastic enter the world's oceans'), a rhetorical question ('What would happen if every bee on Earth disappeared tomorrow?'), or a bold statement ('The most dangerous threat to Australian children's health is not a disease — it is a sedentary lifestyle'). Help your child draft two or three different hooks for their essay and choose the strongest together.",
      },
      // 46
      {
        type: "matching" as const,
        title: "Match the Hook Type to the Example",
        instruction: "Match each hook type to its example.",
        left: ["Surprising statistic", "Rhetorical question", "Bold statement", "Vivid description", "Brief anecdote"],
        right: ["Every morning, thousands of Australian children walk through school gates too tired to learn.", "The single most effective change a school can make to improve student wellbeing costs nothing — it is 60 minutes of outdoor play.", "What would you do if your favourite animal became extinct in your lifetime?", "Imagine waking up to find that every bee species on Earth had vanished overnight.", "Over 130,000 tonnes of plastic waste enter Australian waterways every single year."],
      },
      // 47
      {
        type: "open-response" as const,
        title: "Write Three Different Hooks",
        instruction: "Write three different hooks for the same persuasive essay. Use a different hook type for each one.",
        parentTip: "Writing multiple drafts of an opening line is something professional writers do routinely. Encourage your child to read all three hooks aloud and decide which one best draws the reader in.",
        prompts: [
          { text: "ESSAY TOPIC: Children should spend less time on screens and more time outdoors.\nHOOK 1 (Statistic):", type: "lines", lines: 2 },
          { text: "HOOK 2 (Rhetorical question):", type: "lines", lines: 2 },
          { text: "HOOK 3 (Bold statement):", type: "lines", lines: 2 },
        ],
      },
      // 48
      {
        type: "multiple-choice" as const,
        title: "Persuasive Essay: Conclusion Skills",
        instruction: "Choose the best answer for each question about persuasive conclusions.",
        questions: [
          { prompt: "What should a conclusion paragraph in a persuasive essay include?", options: ["A brand new argument not mentioned earlier in the text", "A restatement of the position, a brief summary of key arguments and a call to action or final thought", "Only the strongest piece of evidence from the body paragraphs", "A list of all the counterarguments raised in the essay"], answer: "A restatement of the position, a brief summary of key arguments and a call to action or final thought" },
          { prompt: "What is a 'call to action' in a persuasive conclusion?", options: ["A sentence that tells the reader exactly what to do or how they should respond to the argument", "A sentence that lists all the evidence used in the essay", "A question that asks the reader if they enjoyed the essay", "A sentence that introduces the main argument for the first time"], answer: "A sentence that tells the reader exactly what to do or how they should respond to the argument" },
        ],
      },
      // 49
      {
        type: "open-response" as const,
        title: "Write a Persuasive Conclusion",
        instruction: "Write a conclusion paragraph for your essay. Restate your position, briefly summarise your key arguments and end with a call to action or a memorable final statement.",
        prompts: [{ text: "My conclusion paragraph:", type: "box", lines: 10 }],
      },
      // 50
      {
        type: "sorting" as const,
        title: "Organise the Full Essay",
        instruction: "Sort these sentences from a persuasive essay about school lunch programmes into the correct paragraph.",
        parentTip: "Being able to sort sentences by paragraph is a strong indicator that a student understands how persuasive essays are structured — a skill that transfers directly to writing quality.",
        columns: ["Introduction", "Body paragraph", "Conclusion"],
        items: [
          { label: "This essay will argue that all Australian schools should provide a free, healthy school lunch programme." },
          { label: "Research from the UK shows that school lunch programmes improve concentration, attendance and academic results." },
          { label: "In conclusion, the evidence clearly demonstrates that investing in school lunch programmes is one of the most cost-effective ways to improve educational outcomes." },
          { label: "Every day, thousands of Australian children arrive at school without having eaten breakfast." },
          { label: "While some argue that lunch provision is the responsibility of parents, a national programme would ensure equity regardless of family circumstances." },
          { label: "The time to act is now — every child deserves to learn on a full stomach." },
        ],
      },
      // 51
      {
        type: "open-response" as const,
        title: "Full Persuasive Essay Plan",
        instruction: "Plan a full four-paragraph persuasive essay (introduction, two body paragraphs, conclusion) on a topic you care about.",
        parentTip: "A topic the student cares about produces significantly better persuasive writing. If possible, connect this essay to something happening in your community, a social issue they have discussed or a decision that affects them.",
        prompts: [
          { text: "Essay topic:", type: "lines", lines: 1 },
          { text: "Position statement:", type: "lines", lines: 2 },
          { text: "Body Paragraph 1 main argument:", type: "lines", lines: 2 },
          { text: "Body Paragraph 1 evidence:", type: "lines", lines: 2 },
          { text: "Body Paragraph 2 main argument + counterargument + rebuttal:", type: "lines", lines: 3 },
          { text: "Conclusion — call to action:", type: "lines", lines: 2 },
        ],
      },
      // 52
      {
        type: "fill-in-blank" as const,
        title: "Call to Action Sentences",
        instruction: "Complete each call to action sentence for the given topic.",
        sentences: [
          { text: "TOPIC: Protecting the Great Barrier Reef. It is time for the Australian government to _____.", blanks: [""] },
          { text: "TOPIC: Reducing food waste. Every household can make a difference by _____.", blanks: [""] },
          { text: "TOPIC: Children's screen time. Parents and educators must work together to _____.", blanks: [""] },
          { text: "TOPIC: Renewable energy. The transition to clean energy must begin _____ and requires _____.", blanks: [""] },
        ],
      },
      // 53
      {
        type: "multiple-choice" as const,
        title: "Evaluating Persuasive Techniques",
        instruction: "Read each description of a persuasive technique. Choose whether it is used ethically (fairly, with honesty) or unethically (manipulatively).",
        parentTip: "The difference between persuasion and manipulation is one of the most important ethical distinctions in communication. Persuasion uses fair evidence and reasoning; manipulation uses distortion, fear and deception.",
        questions: [
          { prompt: "A writer uses a verified statistic from a government health agency to support their argument.", options: ["Ethical — fair use of evidence", "Unethical — manipulation"], answer: "Ethical — fair use of evidence" },
          { prompt: "A writer invents a false statistic to make their argument sound stronger.", options: ["Ethical — fair use of evidence", "Unethical — manipulation"], answer: "Unethical — manipulation" },
          { prompt: "A writer uses emotive language to help readers understand the human cost of a policy.", options: ["Ethical — if the emotional appeal is accurate and relevant", "Always unethical — emotion has no place in argument"], answer: "Ethical — if the emotional appeal is accurate and relevant" },
          { prompt: "A writer deliberately misrepresents the opposing view to make it easy to defeat (straw man).", options: ["Ethical — fair use of counterargument", "Unethical — this distorts the opposing view"], answer: "Unethical — this distorts the opposing view" },
        ],
      },
      // 54
      {
        type: "open-response" as const,
        title: "Ethics in Persuasion",
        instruction: "Answer the reflection questions about ethical persuasion.",
        prompts: [
          { text: "Q1: What is the difference between persuasion and manipulation? Use an example.", type: "lines", lines: 4 },
          { text: "Q2: Why is it important to represent the counterargument fairly?", type: "lines", lines: 3 },
          { text: "Q3: If a persuasive writer uses a logical fallacy, what does that tell you about the strength of their argument?", type: "lines", lines: 3 },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Write Your Full Persuasive Essay",
        instruction: "Write your full four-paragraph persuasive essay using your plan. Take your time and aim for clear, formal, evidence-based writing throughout.",
        parentTip: "This is a major writing task — allow 30–45 minutes. Encourage your child to plan first, write a full draft, then read it aloud and edit before writing the final version.",
        prompts: [{ text: "My persuasive essay:", type: "box", lines: 28 }],
      },
      // 56
      {
        type: "circle-correct" as const,
        title: "Oral Debate Practice",
        instruction: "Choose a topic and circle whether you will argue FOR or AGAINST. Write three argument points to use in an oral debate.",
        questions: [
          { prompt: "Should all schools have a student council that can vote on school rules?", options: ["I will argue FOR", "I will argue AGAINST"] },
          { prompt: "Should mobile phones be banned in all public spaces for children under 12?", options: ["I will argue FOR", "I will argue AGAINST"] },
        ],
      },
      // 57
      {
        type: "open-response" as const,
        title: "Prepare for Oral Debate",
        instruction: "Choose your debate topic and position. Write three arguments, each with supporting evidence, and one rebuttal for the opposing side's likely strongest argument.",
        parentTip: "Oral debate develops confidence, fluency and critical thinking simultaneously. Even five minutes of structured debate at home — where you argue the opposite side — is one of the most effective literacy activities possible.",
        prompts: [
          { text: "Debate topic and my position:", type: "lines", lines: 1 },
          { text: "Argument 1 + evidence:", type: "lines", lines: 3 },
          { text: "Argument 2 + evidence:", type: "lines", lines: 3 },
          { text: "Argument 3 + evidence:", type: "lines", lines: 3 },
          { text: "My rebuttal for their likely strongest counterargument:", type: "lines", lines: 3 },
        ],
      },
      // 58
      {
        type: "true-false" as const,
        title: "True or False: Oral vs Written Persuasion",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Oral persuasion can use tone of voice and pausing for effect, which written persuasion cannot.", answer: true },
          { text: "Written persuasion relies on structure and word choice rather than vocal delivery.", answer: true },
          { text: "A rebuttal is only used in written persuasive texts — not in spoken debate.", answer: false },
          { text: "Both oral and written persuasion benefit from clear, logical reasoning.", answer: true },
          { text: "In oral debate, it does not matter how you respond to the other side's argument.", answer: false },
        ],
      },
      // 59
      {
        type: "multiple-choice" as const,
        title: "Comparing Persuasive Text Types",
        instruction: "Choose the best answer for each question about different forms of persuasive text.",
        parentTip: "Persuasion takes many forms — speeches, editorials, letters, advertising, social media posts. Understanding how each form works helps students both read and create persuasive texts more effectively.",
        questions: [
          { prompt: "Which persuasive text type typically appears in a newspaper and presents the publication's or writer's opinion on a current issue?", options: ["A letter of complaint", "An editorial / opinion piece", "An advertisement", "A scientific report"], answer: "An editorial / opinion piece" },
          { prompt: "Which form of persuasion is specifically designed to change a decision-maker's mind — such as a letter to a councillor about a local issue?", options: ["An advertisement", "A narrative", "A formal letter of argument", "A scientific explanation"], answer: "A formal letter of argument" },
          { prompt: "What makes a political speech different from a written persuasive essay?", options: ["A speech never uses evidence or logic", "A speech does not need a conclusion", "A speech uses vocal delivery, pausing, audience engagement and repetition for effect", "A speech is always shorter than an essay"], answer: "A speech uses vocal delivery, pausing, audience engagement and repetition for effect" },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Watch Speeches Together",
        content: "Watching great speeches together is one of the richest ways to develop your child's persuasive skills. Try Martin Luther King Jr's 'I Have a Dream' speech, Malala Yousafzai's UN speech, or Greta Thunberg's climate speech. After watching, discuss: What was the main argument? What evidence was used? What emotional appeals did you notice? What made it memorable? Connecting writing skills to powerful real-world examples shows students why these skills matter.",
      },
      // 61
      {
        type: "open-response" as const,
        title: "Write a Letter of Argument",
        instruction: "Write a formal letter to a decision-maker (e.g. your school principal, local council or the Minister for Education) arguing for a change you believe in. Include: a formal greeting, position statement, two arguments with evidence, one counterargument and rebuttal, and a call to action.",
        parentTip: "A formal letter is one of the most practical persuasive forms your child will use throughout life. The conventions — formal greeting, structured paragraphs, respectful sign-off — are simple and worth learning correctly.",
        prompts: [{ text: "My formal letter of argument:", type: "box", lines: 20 }],
      },
      // 62
      {
        type: "fill-in-blank" as const,
        title: "Formal Letter Conventions",
        instruction: "Fill in the blanks to complete the formal letter conventions.",
        sentences: [
          { text: "A formal letter begins with the writer's _____ and _____ at the top right.", blanks: ["name", "address"] },
          { text: "The greeting in a formal letter to someone you know is: 'Dear _____ [title] _____.'", blanks: [""] },
          { text: "If you do not know the person's name, you write: 'Dear _____ or _____.'", blanks: ["Sir", "Madam"] },
          { text: "A formal letter ends with '_____ sincerely' if you know the name, or '_____ faithfully' if you don't.", blanks: ["Yours", "Yours"] },
          { text: "The purpose of the letter is stated clearly in the _____ paragraph.", blanks: ["first"] },
        ],
      },
      // 63
      {
        type: "sorting" as const,
        title: "Sort the Techniques: Effective or Ineffective?",
        instruction: "Sort each persuasive technique into Effective or Ineffective based on whether it strengthens or weakens a formal argument.",
        parentTip: "This sorting activity helps students distinguish between techniques that build credibility (evidence, clear reasoning, fair counterargument) and those that undermine it (exaggeration, personal attacks, emotional manipulation).",
        columns: ["Effective", "Ineffective"],
        items: [
          { label: "A verified statistic from a peer-reviewed study" },
          { label: "Threatening the reader if they don't agree" },
          { label: "A fair and accurately represented counterargument" },
          { label: "Appealing to fear without providing evidence" },
          { label: "A quote from a recognised expert in the field" },
          { label: "Insulting people who hold the opposing view" },
          { label: "A logical cause-and-effect argument" },
          { label: "Repeating the same unsupported claim multiple times" },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Evaluate a Real Persuasive Text",
        instruction: "Find a persuasive text — an editorial, letter to the editor, or opinion piece — with your parent's help. Evaluate it using the questions below.",
        parentTip: "Applying critical thinking skills to real-world texts consolidates learning in a way that worksheets alone cannot. Look for opinion pieces in local newspapers, ABC News online or news magazines for young people.",
        prompts: [
          { text: "Source (title and where you found it):", type: "lines", lines: 1 },
          { text: "Q1: What is the main argument? Is the position statement clear?", type: "lines", lines: 3 },
          { text: "Q2: What evidence is used? How strong is it?", type: "lines", lines: 3 },
          { text: "Q3: Is there a counterargument and rebuttal? Is the counterargument fair?", type: "lines", lines: 3 },
          { text: "Q4: What persuasive techniques are used? Are any of them logical fallacies?", type: "lines", lines: 3 },
        ],
      },
      // 65
      {
        type: "multiple-choice" as const,
        title: "Self-Editing a Persuasive Text",
        instruction: "Choose the best self-editing question for each stage of the editing process.",
        questions: [
          { prompt: "When checking your STRUCTURE, the most useful question is:", options: ["Is my handwriting neat?", "Does each paragraph focus on one main argument, with evidence and a concluding sentence?", "Did I use exactly five persuasive techniques?", "Is my introduction the shortest paragraph?"], answer: "Does each paragraph focus on one main argument, with evidence and a concluding sentence?" },
          { prompt: "When checking your LANGUAGE, the most useful question is:", options: ["Did I use formal language throughout, avoiding contractions and slang?", "Did I use the same transition word in every paragraph?", "Is the essay the exact same length as the model paragraph?", "Did I write three counterarguments?"], answer: "Did I use formal language throughout, avoiding contractions and slang?" },
          { prompt: "When checking your ARGUMENT, the most useful question is:", options: ["Have I fairly acknowledged the opposing view and provided a convincing rebuttal?", "Did I write exactly two body paragraphs?", "Did I end with a question mark?", "Is my call to action in the introduction?"], answer: "Have I fairly acknowledged the opposing view and provided a convincing rebuttal?" },
        ],
      },
      // 66
      {
        type: "open-response" as const,
        title: "Self-Edit Your Essay",
        instruction: "Use this comprehensive checklist to evaluate and improve your persuasive essay.",
        prompts: [
          { text: "STRUCTURE CHECKLIST (tick each one):\n☐ Clear position statement in the introduction\n☐ Each body paragraph has one main argument\n☐ Each argument is supported by specific evidence\n☐ At least one paragraph includes a counterargument and rebuttal\n☐ The conclusion restates the position and includes a call to action\n\nFORMAT/LANGUAGE CHECKLIST:\n☐ Formal language throughout (no contractions or slang)\n☐ Transition words used accurately\n☐ No logical fallacies\n☐ Consistent, confident persuasive tone\n\nImprovements I will make:", type: "box", lines: 8 },
        ],
      },
      // 67
      {
        type: "true-false" as const,
        title: "True or False: Advanced Persuasion",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "A persuasive essay that acknowledges and rebuts a counterargument is generally more convincing than one that ignores it.", answer: true },
          { text: "Using logos, ethos and pathos together creates a well-rounded persuasive argument.", answer: true },
          { text: "If your argument is very passionate, you do not need to provide evidence.", answer: false },
          { text: "A call to action tells the reader what they should do or think as a result of the argument.", answer: true },
          { text: "It is acceptable to use a straw man argument as long as your rebuttal is strong.", answer: false },
        ],
      },
      // 68
      {
        type: "matching" as const,
        title: "Match the Persuasive Essay Feature to Its Location",
        instruction: "Match each persuasive essay feature to the part of the essay where it typically appears.",
        parentTip: "Understanding the architecture of an essay helps students plan more confidently and write more efficiently.",
        left: ["Hook and background information", "Position statement", "Main argument with evidence", "Counterargument and rebuttal", "Call to action", "Summary of key arguments"],
        right: ["Typically in a body paragraph, often the final body paragraph", "Introduction — first paragraph", "Introduction — often the final sentence of the introduction", "Conclusion — near the end", "Body paragraph — one per paragraph", "Conclusion — before the call to action"],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Rewrite a Weak Argument",
        instruction: "This argument is weak because it uses an unsupported opinion and a logical fallacy. Rewrite it as a strong, evidence-based argument.",
        prompts: [
          { text: "ORIGINAL: 'Everyone knows that school should start later because all my friends are tired in the morning and it's really unfair. My friend said research says kids need sleep and since she told me that, I believe it completely.'\n\nMY IMPROVED ARGUMENT (add specific evidence, remove the fallacy, use formal language):", type: "box", lines: 8 },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Home Activity: Family Debate Night",
        instruction: "Choose a topic that affects your family or community. Have a structured family debate using the skills from this worksheet.",
        parentTip: "Family debates are one of the most enjoyable and effective ways to develop persuasive speaking and listening skills. The goal is not to 'win' but to practise forming and expressing arguments with evidence and fairness.",
        suggestions: [
          "Choose a topic everyone has an opinion on — screen time, pets, family rules, local issues or a current news story.",
          "Each person takes one minute to state their position and one piece of evidence.",
          "Each person then acknowledges the strongest point made against them and explains their rebuttal.",
          "After the debate, discuss together: Which argument was the most convincing? Why?",
          "Write a one-paragraph reflection on the debate — what was the strongest argument you heard, and why?",
        ],
      },
      // 71
      {
        type: "open-response" as const,
        title: "Extension: Compare Two Arguments on the Same Topic",
        instruction: "Find two different editorials or opinion pieces on the same topic. Compare their arguments, evidence and use of persuasive techniques.",
        parentTip: "Comparing two perspectives on the same issue is an excellent critical thinking exercise. It shows students that reasonable, intelligent people can hold different views — and that what distinguishes them is usually the quality and fairness of their evidence and reasoning.",
        prompts: [
          { text: "Topic:", type: "lines", lines: 1 },
          { text: "Text 1 title and position:", type: "lines", lines: 2 },
          { text: "Text 2 title and position:", type: "lines", lines: 2 },
          { text: "Which text provides stronger evidence? Why?", type: "lines", lines: 3 },
          { text: "Which text acknowledges the other side more fairly? How?", type: "lines", lines: 3 },
        ],
      },
      // 72
      {
        type: "fill-in-blank" as const,
        title: "Advanced Persuasive Vocabulary",
        instruction: "Fill in each blank with the correct advanced term: antithesis, concession, refutation, ethos, polemic.",
        sentences: [
          { text: "When a writer establishes their _____, they build credibility by showing expertise or character.", blanks: ["ethos"] },
          { text: "A _____ is a strongly worded, one-sided piece of writing that argues passionately for a single position.", blanks: ["polemic"] },
          { text: "A _____ occurs when a writer acknowledges that part of the opposing view has merit before explaining why their own position is still stronger.", blanks: ["concession"] },
          { text: "A _____ is a direct response that disproves or counters the opposing argument with evidence or logic.", blanks: ["refutation"] },
          { text: "The rhetorical device of _____ places contrasting ideas side by side for effect — for example, 'Ask not what your country can do for you, ask what you can do for your country.'", blanks: ["antithesis"] },
        ],
      },
      // 73
      {
        type: "multiple-choice" as const,
        title: "Mastery Check: Persuasive Essay Concepts",
        instruction: "Demonstrate your mastery of persuasive writing by choosing the best answer for each question.",
        questions: [
          { prompt: "What distinguishes a concession from a counterargument?", options: ["A concession introduces a new argument; a counterargument summarises the essay", "A concession acknowledges a partial truth in the opposing view before reinforcing the main argument; a counterargument states the opposing view", "They mean exactly the same thing", "A concession is always the last sentence in the essay"], answer: "A concession acknowledges a partial truth in the opposing view before reinforcing the main argument; a counterargument states the opposing view" },
          { prompt: "Why does including a well-reasoned rebuttal make a persuasive text more credible?", options: ["It shows the reader that the writer has researched the opposing view and can respond to it thoughtfully", "It means the writer does not need any other evidence", "It replaces the need for a position statement", "It always makes the essay longer"], answer: "It shows the reader that the writer has researched the opposing view and can respond to it thoughtfully" },
          { prompt: "Which of these is the best definition of a 'call to action'?", options: ["A sentence that introduces the essay topic for the first time", "A final sentence that urges the reader to take a specific action or adopt a new perspective", "A sentence that lists all the arguments made in the essay", "A question that asks the reader whether they enjoyed the essay"], answer: "A final sentence that urges the reader to take a specific action or adopt a new perspective" },
        ],
      },
      // 74
      {
        type: "open-response" as const,
        title: "Persuasive Writing About a Cause You Care About",
        instruction: "Write a persuasive paragraph about a cause, issue or change that genuinely matters to you. Use everything you have learned: position statement, evidence, counterargument, rebuttal and call to action.",
        parentTip: "Authentic writing — writing about something the student genuinely cares about — is always better quality than writing about assigned topics. Help your child identify a cause they feel strongly about, whether local, national or global.",
        prompts: [{ text: "My cause:", type: "lines", lines: 1 }, { text: "My persuasive paragraph:", type: "box", lines: 12 }],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Argument Is a Life Skill",
        content: "The ability to form a well-reasoned, evidence-based argument is not just a school skill. It is used in job interviews, community meetings, business presentations, legal disputes and political engagement throughout life. Every time your child practises forming a clear position, finding evidence and responding fairly to opposition, they are building a cognitive skill that compounds over years. The most important thing you can do is model good argument yourself — acknowledge good points made against your view, and ask for evidence when someone makes a claim.",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Argument Analysis: Spot Three Techniques",
        instruction: "Find a persuasive text — editorial, advertisement or speech transcript — and identify at least three persuasive techniques used by the writer.",
        prompts: [
          { text: "Text title and source:", type: "lines", lines: 1 },
          { text: "Technique 1: ___. Quote or example from the text:", type: "lines", lines: 3 },
          { text: "Technique 2: ___. Quote or example from the text:", type: "lines", lines: 3 },
          { text: "Technique 3: ___. Quote or example from the text:", type: "lines", lines: 3 },
        ],
      },
      // 77
      {
        type: "sorting" as const,
        title: "Sort the Evidence: Strong or Weak?",
        instruction: "Sort each piece of evidence into Strong (verifiable, specific, from reliable source) or Weak (vague, opinion, unreliable source).",
        parentTip: "Evaluating evidence quality is one of the most transferable skills in the curriculum. It underpins scientific literacy, media literacy and all forms of academic writing.",
        columns: ["Strong", "Weak"],
        items: [
          { label: "The CSIRO found that 2.5 million Australian households experienced food insecurity in 2023." },
          { label: "I heard on the internet that most people think the government is doing a bad job." },
          { label: "According to the World Health Organisation, physical inactivity is the fourth leading risk factor for global mortality." },
          { label: "My neighbour says that solar panels are too expensive and don't really work." },
          { label: "The Australian Bureau of Statistics recorded that 97% of households had internet access in 2023." },
          { label: "Everyone knows that children are spending too much time on screens." },
        ],
      },
      // 78
      {
        type: "fill-in-blank" as const,
        title: "Write the Missing Part",
        instruction: "Each persuasive paragraph is missing one key part. Write it in.",
        sentences: [
          { text: "MISSING PART: Position statement. 'Every year, millions of tonnes of electronic waste are dumped in landfill. This waste contains toxic materials that leach into soil and water. Australia must introduce a national e-waste recycling scheme.' ADD THE POSITION STATEMENT: _____.", blanks: [""] },
          { text: "MISSING PART: Rebuttal. 'Schools should ban competitive sport. Some argue that sport builds character and teamwork. _____.' ADD THE REBUTTAL:", blanks: [""] },
          { text: "MISSING PART: Call to action. 'The evidence clearly shows that reducing food waste has significant environmental and economic benefits. Australia already has the tools and the will to lead the way. _____.' ADD THE CALL TO ACTION:", blanks: [""] },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Persuasion in Advertising",
        instruction: "Analyse an advertisement (TV, online or print) that is trying to persuade you to buy something or adopt an attitude. Answer the questions below.",
        parentTip: "Children are exposed to thousands of advertisements every year, many of which use sophisticated persuasive techniques. Developing the habit of analysing these critically is one of the best media literacy skills you can teach.",
        prompts: [
          { text: "Describe the advertisement (product or cause, where you saw it):", type: "lines", lines: 2 },
          { text: "What persuasive techniques does it use?", type: "lines", lines: 3 },
          { text: "What emotions does it try to make you feel?", type: "lines", lines: 2 },
          { text: "Do you find it convincing? Why or why not?", type: "lines", lines: 3 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Words That Changed the World",
        content: "Throughout history, persuasive writing and speaking have changed laws, shifted societies and ended injustices. Harriet Beecher Stowe's novel about slavery moved Abraham Lincoln to say she had started the Civil War. Rachel Carson's book about pesticides led to the banning of DDT. Malala Yousafzai's speech to the United Nations changed how many countries approach girls' education. None of these people had armies or governments behind them when they first started writing. They had arguments, evidence and the courage to express a position clearly and publicly. Every time you practise forming a careful, evidence-based argument, you are learning one of the most genuinely powerful skills in human history. Use it wisely. Use it fairly. Use it to make things better.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Extension: Argue the Opposite Side",
        instruction: "Take a topic you feel strongly about. Write a persuasive paragraph arguing the OPPOSITE of your real view — as fairly and convincingly as possible.",
        parentTip: "Arguing the other side requires genuine intellectual flexibility and deep understanding of the issue. Students who can write a convincing argument for a view they disagree with have reached a very high level of critical thinking.",
        prompts: [
          { text: "My topic and my REAL view:", type: "lines", lines: 1 },
          { text: "Paragraph arguing the OPPOSITE view (try to be as convincing as possible):", type: "box", lines: 10 },
        ],
      },
      // 82
      {
        type: "multiple-choice" as const,
        title: "Advanced Concept Check: Concession and Refutation",
        instruction: "Choose the best answer for each question about concession and refutation.",
        questions: [
          { prompt: "When a writer makes a concession, they:", options: ["Abandon their main argument", "Acknowledge that a point made by the opposing side has partial merit", "Introduce a brand new argument", "Repeat the counterargument without responding to it"], answer: "Acknowledge that a point made by the opposing side has partial merit" },
          { prompt: "A refutation is most effective when it:", options: ["Simply states 'This argument is wrong'", "Dismisses the counterargument without evidence", "Provides specific evidence or logic that directly undermines the counterargument", "Ignores the strongest points of the opposing view"], answer: "Provides specific evidence or logic that directly undermines the counterargument" },
          { prompt: "Which sentence best demonstrates a concession-and-refutation structure?", options: ["The counterargument is not valid.", "While it is true that renewable energy requires significant upfront investment, the long-term savings and environmental benefits far outweigh the initial costs.", "Renewable energy is obviously better than fossil fuels.", "Some people disagree, but they are probably wrong."], answer: "While it is true that renewable energy requires significant upfront investment, the long-term savings and environmental benefits far outweigh the initial costs." },
        ],
      },
      // 83
      {
        type: "open-response" as const,
        title: "Write a Concession-and-Refutation Paragraph",
        instruction: "Write a full paragraph that begins with a concession ('While it is true that… / Although some argue…') and then provides a well-reasoned refutation with evidence.",
        parentTip: "The concession-and-refutation structure is used in legal briefs, academic essays, editorial journalism and policy documents. Mastering it at Year 5 gives your child a significant head start in secondary school writing.",
        prompts: [{ text: "My concession-and-refutation paragraph:", type: "box", lines: 10 }],
      },
      // 84
      {
        type: "fill-in-blank" as const,
        title: "Rebuttal Sentence Patterns",
        instruction: "Complete each rebuttal using the pattern provided.",
        sentences: [
          { text: "CONCESSION: While it is true that reducing single-use plastics will affect some businesses, _____.", blanks: [""] },
          { text: "REFUTATION: Although critics argue that school uniforms limit self-expression, research from the University of Sydney demonstrates that _____.", blanks: [""] },
          { text: "ACKNOWLEDGEMENT: This concern is understandable; however, _____.", blanks: [""] },
          { text: "PARTIAL CONCESSION: Admittedly, _____, yet _____.", blanks: [""] },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Your Strongest Persuasive Paragraph",
        instruction: "Write the strongest persuasive paragraph you can. Choose a topic you know well and care about. Use a concession-and-refutation structure, integrate specific evidence and end with a compelling final sentence.",
        parentTip: "This is a showcase activity — your child's best work. Consider saving it as part of a writing portfolio. Read it together and celebrate what they have achieved.",
        prompts: [{ text: "My strongest persuasive paragraph:", type: "box", lines: 14 }],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Advanced Persuasive Skills",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "A writer who uses a concession demonstrates intellectual honesty and builds reader trust.", answer: true },
          { text: "A refutation is most effective when it dismisses the counterargument without providing evidence.", answer: false },
          { text: "Logos, ethos and pathos can all appear in the same persuasive paragraph.", answer: true },
          { text: "An appeal to fear is always an unethical persuasive technique.", answer: false },
          { text: "The best persuasive writers combine emotional appeals with logical evidence and credible sources.", answer: true },
        ],
      },
      // 87
      {
        type: "multiple-choice" as const,
        title: "Mastery Challenge: Identify the Technique",
        instruction: "Choose the most precise description of the persuasive technique used in each example.",
        questions: [
          { prompt: "'The science is unambiguous. The evidence is overwhelming. The time is now.' What technique is this?", options: ["Straw man", "Rule of three with anaphora (repetition for emphasis)", "Bandwagon fallacy", "Appeal to authority"], answer: "Rule of three with anaphora (repetition for emphasis)" },
          { prompt: "'To be for this policy is to be for children. To be against it is to be against their future.' What technique is this?", options: ["False dichotomy using antithesis", "Rhetorical question", "Appeal to shared values", "Emotive language"], answer: "False dichotomy using antithesis" },
          { prompt: "'As a marine biologist who has spent 30 years studying the reef, I can tell you that the damage is irreversible without immediate action.' What technique is this?", options: ["Emotive language", "Appeal to ethos (credibility through expertise)", "Rule of three", "Bandwagon fallacy"], answer: "Appeal to ethos (credibility through expertise)" },
        ],
      },
      // 88
      {
        type: "open-response" as const,
        title: "Teach the Skill",
        instruction: "Explain to a younger student (or a parent) what the difference between a counterargument and a rebuttal is. Use a simple example and draw a diagram if it helps.",
        parentTip: "Teaching a concept demonstrates deeper understanding than any test. If your child can explain the difference clearly and create an original example, they have genuinely mastered this skill.",
        prompts: [{ text: "My explanation (as if teaching someone younger):", type: "box", lines: 10 }],
      },
      // 89
      {
        type: "sorting" as const,
        title: "Sort the Essay Features by Importance",
        instruction: "Sort these persuasive essay features by how important you think they are to a convincing argument. Then justify your top choice in writing.",
        columns: ["Essential", "Important", "Helpful but optional"],
        items: [
          { label: "A clear position statement" },
          { label: "At least two pieces of specific evidence" },
          { label: "A counterargument and rebuttal" },
          { label: "A hook in the introduction" },
          { label: "Varied persuasive techniques (logos, ethos, pathos)" },
          { label: "Formal language throughout" },
          { label: "A call to action in the conclusion" },
          { label: "Perfect spelling throughout" },
          { label: "At least three body paragraphs" },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Connecting to the World",
        content: "One of the most powerful motivators for developing persuasive writing is connecting it to real issues in your child's world. Consider writing a real letter together — to your local council about a park, to the school about an issue that matters, or to a newspaper about something in your community. Even if it is never sent, the act of writing for a real purpose with a real audience transforms the skill from a school exercise into a meaningful act of participation.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Write a Persuasive Editorial",
        instruction: "Write a short editorial (opinion piece) for a school or community newspaper on an issue that matters to you. Use all the skills from this worksheet: hook, position statement, evidence, counterargument, rebuttal and call to action.",
        prompts: [{ text: "My editorial:", type: "box", lines: 20 }],
      },
      // 92
      {
        type: "multiple-choice" as const,
        title: "Final Mastery Check",
        instruction: "Demonstrate your mastery of persuasive writing by choosing the best answer for each question.",
        questions: [
          { prompt: "Which of these is the most complete definition of a persuasive essay?", options: ["A story that convinces the reader by showing what happens to characters", "A structured text that presents a position, supports it with evidence, acknowledges opposing views and rebuts them, ending with a call to action", "A text that explains how something works, using facts and diagrams", "A diary entry that expresses the writer's personal feelings about a topic"], answer: "A structured text that presents a position, supports it with evidence, acknowledges opposing views and rebuts them, ending with a call to action" },
          { prompt: "Why is a logical fallacy a problem in a persuasive argument?", options: ["Because it uses too many words", "Because it replaces sound reasoning with flawed thinking, which undermines the argument's credibility", "Because it is always dishonest", "Because it uses no evidence at all"], answer: "Because it replaces sound reasoning with flawed thinking, which undermines the argument's credibility" },
          { prompt: "Which combination of techniques creates the strongest persuasive argument?", options: ["Emotional appeals alone", "Statistics alone", "Logos (evidence), ethos (credibility) and pathos (emotion) used together with a fair counterargument and rebuttal", "Repeated assertions with no evidence"], answer: "Logos (evidence), ethos (credibility) and pathos (emotion) used together with a fair counterargument and rebuttal" },
        ],
      },
      // 93
      {
        type: "open-response" as const,
        title: "Reflection: What Have You Learned?",
        instruction: "Look back over your work in this worksheet and answer the reflection questions.",
        prompts: [
          { text: "Q1: What is the most important thing you have learned about persuasive writing?", type: "lines", lines: 3 },
          { text: "Q2: What technique do you find most effective and why?", type: "lines", lines: 3 },
          { text: "Q3: How has your persuasive writing improved since the beginning of this worksheet?", type: "lines", lines: 3 },
        ],
      },
      // 94
      {
        type: "fill-in-blank" as const,
        title: "Complete the Advanced Argument",
        instruction: "Fill in the blanks to complete this formal persuasive paragraph. Use the most precise language for each gap.",
        sentences: [
          { text: "It is _____ [clear / kind of obvious] that Australia needs a stronger national approach to food waste.", blanks: ["clear"] },
          { text: "According to the National Food Waste Strategy, Australians _____ [waste / chuck out] approximately 7.6 million tonnes of food each year.", blanks: ["waste"] },
          { text: "This is _____ [significant / a big deal] because food waste accounts for nearly one-third of landfill and generates significant greenhouse gas emissions.", blanks: ["significant"] },
          { text: "While some _____ [argue / reckon] that individual change is sufficient, systemic policy reform is _____ [essential / necessary] to achieve meaningful reduction at scale.", blanks: ["argue", "essential"] },
        ],
      },
      // 95
      {
        type: "home-activity" as const,
        title: "Home Activity: Write to Your Local Representative",
        instruction: "Choose an issue in your local community or school that you think should change. Write a formal letter to your local council, school principal or state government representative.",
        parentTip: "This is one of the most powerful learning experiences possible — using real persuasive writing skills to engage with real civic institutions. Help your child find the correct name and address for their intended recipient. Whether the letter is sent or not, the experience of writing for a real audience and real purpose is transformative.",
        suggestions: [
          "Identify one issue that genuinely matters to you in your school, community or the wider world.",
          "Research the issue — find two or three specific facts or statistics.",
          "Draft a formal letter with: a formal greeting, one paragraph of background, two paragraphs of argument with evidence, one paragraph with counterargument and rebuttal, and a call to action.",
          "Read your letter aloud to check the tone is formal, confident and respectful throughout.",
          "If you are brave enough, send it — or keep it in your writing portfolio as evidence of your skills.",
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Respond to a Counterargument in Conversation",
        instruction: "Your parent will read one of these counterarguments aloud. You must respond with a well-reasoned rebuttal — speaking, not writing. Then write a one-paragraph rebuttal for the one that challenged you the most.",
        parentTip: "Responding to counterarguments in real time — without the safety net of planning — is the highest level of persuasive skill. This oral practice directly develops the academic debate skills used in secondary school and beyond.",
        prompts: [
          { text: "OPTIONS FOR PARENT TO READ ALOUD:\n• 'Children should not have any homework at all.'\n• 'Social media should be banned for anyone under 16.'\n• 'It is more important to be kind than to be clever.'\n\nThe counterargument I found most challenging:", type: "lines", lines: 1 },
          { text: "My written rebuttal for that counterargument:", type: "box", lines: 8 },
        ],
      },
      // 97
      {
        type: "multiple-choice" as const,
        title: "Mastery Challenge: The Complete Persuasive Writer",
        instruction: "These questions test your mastery of all aspects of persuasive writing from this worksheet.",
        questions: [
          { prompt: "A student writes: 'Everyone should agree with me about this.' What is wrong with this sentence in a formal persuasive essay?", options: ["It is too short", "It makes a claim without evidence and uses informal, absolute language", "It has no transition word", "It is in the wrong paragraph"], answer: "It makes a claim without evidence and uses informal, absolute language" },
          { prompt: "A student writes: 'While critics argue that community gardens take up space that could be used for other purposes, extensive research from urban planning studies shows that community gardens increase property values, reduce crime and improve community wellbeing.' What persuasive structure does this sentence demonstrate?", options: ["Position statement followed by a call to action", "Evidence followed by explanation", "Counterargument (concession) followed by a refutation with evidence", "Rule of three followed by emotive language"], answer: "Counterargument (concession) followed by a refutation with evidence" },
        ],
      },
      // 98
      {
        type: "open-response" as const,
        title: "Your Best Persuasive Writing Piece",
        instruction: "Write the most polished, convincing persuasive text you can. This is your showcase piece. Take 30 minutes, use everything you have learned, and produce something you are genuinely proud of.",
        prompts: [{ text: "My best persuasive writing piece:", type: "box", lines: 22 }],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Final Reflection: The Power of Argument",
        instruction: "Write a final reflection on what you have learned throughout this worksheet.",
        prompts: [
          { text: "Q1: Before this worksheet, how did you think about persuasion? Has your view changed? How?", type: "lines", lines: 4 },
          { text: "Q2: What is the difference between persuasion and manipulation? Why does that difference matter?", type: "lines", lines: 4 },
          { text: "Q3: What is the most important skill you have developed in this worksheet?", type: "lines", lines: 3 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Argument Is a Gift",
        content: "Some people think argument means fighting. It does not. Argument — real, careful, evidence-based argument — is one of the great gifts of human intelligence. It is how science advances, how laws improve and how societies become fairer. When two people can hold different views, present their evidence respectfully and genuinely listen to the other side, something remarkable can happen: one of them might change their mind. Or both might. Or they might discover that the truth is more complex than either of them first thought. You have now practised all the tools of a skilled persuasive writer: position statements, evidence, counterarguments, rebuttals, logical reasoning and the ethical principles that make argument trustworthy. Use those tools carefully, honestly and bravely. The world needs clear thinkers who can argue well.",
      },
    ],
  },
  {
    slug: "media-literacy-images-layout",
    title: "Media Literacy: How Images & Layout Shape Meaning",
    strand: "Literature",
    description:
      "Analyse how images, colour, layout and typography are used in media texts to convey meaning and influence audiences.",
    learningGuide: {
      concept:
        "Media literacy means being able to read and evaluate texts that combine words with visual elements. In newspapers, advertisements, websites and picture books, layout choices — such as which image is largest, where text is placed, what colours are used, and what font is chosen — all communicate meaning beyond the words alone.",
      activation:
        "Show your child the front page of a newspaper or the homepage of a website. Ask: What did your eye go to first? Why do you think it was placed there? What feeling does the colour palette give you?",
      check:
        "After the worksheet, ask your child to find one advertisement or poster and explain three design choices the creator made and what effect each one has on the audience.",
    },
    lesson: {
      title: "The Language of Design",
      objective:
        "Identify and explain how visual and design choices — including images, layout, colour and typography — shape meaning and influence audiences.",
      materials: [
        "This worksheet",
        "A newspaper, magazine or printed advertisement",
        "A pencil and coloured pencils",
      ],
      intro: {
        title: "Before You Read a Word",
        script:
          "Before you read a single word on a page, you have already received information. The size of the headline tells you how important the story is. The photograph tells you who or what it is about. The colour sets the mood. The layout guides your eyes from one part to another. All of these choices are made deliberately — a designer or editor decided exactly where everything goes and why. Today we are going to learn to read these visual choices the same way we read words.",
        action:
          "Lay a newspaper or magazine open on the table. Ask your child to tell you five things the layout communicates before reading any text. Record their observations on paper.",
      },
      mainActivity: {
        title: "The Design Critique",
        script:
          "Good media readers ask four questions about any visual text. One — what do you see first and why? Two — what colours are used and what mood do they create? Three — how does the image work with the text — does it support, contrast or add to the message? Four — who is the intended audience and how do the design choices target them? Let us apply these four questions to the examples on the worksheet.",
        action:
          "Work through the analysis activity together for the first example, then let your child complete the second independently.",
      },
      wrapUp: {
        title: "Design Your Own",
        script:
          "Now you are going to be the designer. Choose a topic — it could be an event at your home school, a hobby, or a cause you care about. Create a simple poster or advertisement that uses at least three deliberate design choices. Write a brief explanation of each choice: why did you place things where you did? What does the colour communicate? What is the audience supposed to feel?",
        action:
          "Provide blank A4 paper and coloured pencils. Display the finished design alongside the written explanation.",
      },
      parentTip:
        "Next time you watch a film together, notice the visual choices at the opening scene — colour grading, camera angle, music. Ask: What mood do these choices create before anyone speaks? This extends media literacy into screen texts.",
      extension:
        "Analyse the design of your favourite website or app. Write a media critique (one page) explaining five design choices and evaluating how effectively they target the intended audience.",
      resources: [
        {
          title: "ABC Education — Media Literacy",
          url: "https://www.abc.net.au/education/media-literacy/",
          description:
            "Resources and lesson activities for analysing media texts including advertisements and news.",
        },
        {
          title: "ReadWriteThink — Analysing Advertisements",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/analyzing-advertisements",
          description:
            "Lesson plan for critically analysing persuasive visual texts.",
        },
        {
          title: "Khan Academy — Media and Information Literacy",
          url: "https://www.khanacademy.org/college-careers-more/media-literacy/her-say/media-literacy/a/what-is-media-literacy",
          description:
            "Introduction to media literacy concepts for upper primary students.",
        },
      ],
    },
    activities: [
      // 1
      {
        type: "multiple-choice" as const,
        title: "What Is Media Literacy?",
        instruction: "Choose the best answer for each question about media literacy.",
        parentTip: "Media literacy is one of the most important skills of the 21st century. Young people who can critically read images, layouts and design choices are far less vulnerable to manipulation and misinformation.",
        questions: [
          { prompt: "What does 'media literacy' mean?", options: ["The ability to read a newspaper quickly", "The ability to read and critically evaluate texts that combine words with visual elements", "The ability to write for digital media platforms", "The ability to identify famous artworks"], answer: "The ability to read and critically evaluate texts that combine words with visual elements" },
          { prompt: "Which of these is an example of a media text?", options: ["A chapter from a novel with no illustrations", "A newspaper front page with photographs and headlines", "A handwritten diary entry", "A maths worksheet"], answer: "A newspaper front page with photographs and headlines" },
          { prompt: "Why do designers make deliberate choices about layout, colour and images?", options: ["Because they have no other options", "To fill empty space on the page", "To communicate meaning, guide the reader's attention and influence how the audience feels", "Because computers automatically decide layout for them"], answer: "To communicate meaning, guide the reader's attention and influence how the audience feels" },
        ],
      },
      // 2
      {
        type: "matching" as const,
        title: "Match the Design Element to Its Definition",
        instruction: "Draw a line to match each design element to its correct definition.",
        left: ["Layout", "Typography", "Colour scheme", "White space", "Hierarchy"],
        right: ["The empty areas on a page that help the eye focus on key content", "The way design elements are arranged and sized to show their order of importance", "The arrangement of text, images and other elements on a page", "The set of colours chosen for a design and the mood they create", "The style, size and arrangement of text in a design"],
      },
      // 3
      {
        type: "true-false" as const,
        title: "True or False: Design Basics",
        instruction: "Mark each statement True or False.",
        parentTip: "Before checking answers, ask your child to look at a nearby book cover, poster or package and identify one true statement from this activity that they can see in that design.",
        statements: [
          { text: "The largest element in a design is usually the most important one.", answer: true },
          { text: "White space in a design is always a mistake — the designer ran out of ideas.", answer: false },
          { text: "Typography choices — such as font size and style — communicate meaning beyond the words themselves.", answer: true },
          { text: "Colour choices in a design are purely decorative and have no effect on how the audience feels.", answer: false },
          { text: "The placement of an image can influence where the reader looks first.", answer: true },
        ],
      },
      // 4
      {
        type: "open-response" as const,
        title: "First Impressions",
        instruction: "Before you read a word, a design is already communicating. Look at the description below and answer the questions.",
        prompts: [
          { text: "DESCRIPTION: A newspaper front page. The top half of the page is a full-width photograph of a flooded street with a small house barely visible above the water. The headline below reads 'DISASTER STRIKES' in large bold letters. There is a small story in the bottom right corner with a tiny photograph of a smiling sports player.\n\nQ1: What does your eye go to first? Why?", type: "lines", lines: 3 },
          { text: "Q2: What does the size difference between the two stories tell you about what the editor thinks is most important?", type: "lines", lines: 3 },
          { text: "Q3: How does the photograph shape how you feel before you read the headline?", type: "lines", lines: 3 },
        ],
      },
      // 5
      {
        type: "sorting" as const,
        title: "Sort the Design Techniques",
        instruction: "Sort each design feature into the correct column based on its primary purpose.",
        parentTip: "Design features often serve multiple purposes — a large image might both attract attention and evoke emotion. Encourage your child to think about the dominant purpose.",
        columns: ["Attract attention", "Evoke emotion", "Build credibility", "Guide the reader's eye"],
        items: [
          { label: "Bold, oversized headline" },
          { label: "A photograph of a smiling child" },
          { label: "Expert quote with name and title" },
          { label: "Arrows pointing to key information" },
          { label: "Bright contrasting colours" },
          { label: "Statistics and percentages" },
          { label: "Close-up image of a person's face" },
          { label: "Numbered steps or bullet points" },
          { label: "A logo from a well-known organisation" },
          { label: "White space isolating a key message" },
          { label: "A dramatic before-and-after image" },
          { label: "A countdown timer or deadline" },
        ],
      },
      // 6
      {
        type: "fill-in-blank" as const,
        title: "Design Vocabulary",
        instruction: "Fill in each blank using a word from the box: contrast, focal point, hierarchy, caption, masthead.",
        parentTip: "Building a vocabulary for talking about design helps students move from 'I like/dislike this' to 'I can explain what this design is doing and why'.",
        sentences: [
          { text: "The _____ of a newspaper is the publication's name printed at the top of the front page.", blanks: ["masthead"] },
          { text: "The _____ is the element in a design that the viewer's eye is naturally drawn to first.", blanks: ["focal point"] },
          { text: "When light and dark colours are placed next to each other, this is called _____.", blanks: ["contrast"] },
          { text: "A _____ is a short text placed beneath a photograph to explain what it shows.", blanks: ["caption"] },
          { text: "Visual _____ is when design elements are sized and positioned to show their order of importance.", blanks: ["hierarchy"] },
        ],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Reading Design Choices",
        instruction: "Read each design description. Circle the most likely reason the creator made that choice.",
        questions: [
          { prompt: "A charity poster uses a dark, desaturated colour scheme with a single beam of light in the centre.", options: ["To make the poster easy to print cheaply", "To create a sense of hope emerging from hardship", "Because those were the only colours available"] },
          { prompt: "A news website places its most important story in the top-left corner of the page.", options: ["Because most readers scan pages from top-left to bottom-right", "Because the story was too short to go anywhere else", "To hide it from casual readers"] },
          { prompt: "An advertisement for a children's breakfast cereal uses a large cartoon character and bold primary colours.", options: ["To appeal to adult shoppers who find cartoons nostalgic", "To target children by using visuals that are familiar and exciting to them", "Because the designer preferred cartoon art"] },
          { prompt: "A documentary about climate change opens with sweeping aerial footage of a dying coral reef, with no words for the first 30 seconds.", options: ["To save time on writing a script", "To create an emotional impact before presenting any facts", "Because footage of coral reefs is free to use"] },
        ],
      },
      // 8
      {
        type: "open-response" as const,
        title: "Analyse a Media Text",
        instruction: "Read the description of an advertisement. Answer each analysis question.",
        prompts: [
          { text: "ADVERTISEMENT:\nA full-page advertisement for a children's charity shows a large photograph of a child smiling and holding a book. Above the image is a small headline in white text: Giving one book changes everything. Below the image is a large button in bright orange reading: Donate today. The background is white with a small logo in the top corner.\n\nQ1: Why do you think the photograph takes up most of the page?", type: "lines", lines: 3 },
          { text: "Q2: Why might the creator have chosen bright orange for the donate button?", type: "lines", lines: 3 },
          { text: "Q3: What emotion is the creator trying to create? How do you know?", type: "lines", lines: 3 },
          { text: "Q4: Who is the intended audience? What design choices tell you this?", type: "lines", lines: 3 },
        ],
      },
      // 9
      {
        type: "matching" as const,
        title: "Match the Colour to Its Common Association",
        instruction: "Match each colour to its most common emotional association in Western media design.",
        parentTip: "Colour associations are culturally learned and not universal — red means danger in some contexts and celebration in others. However, these associations are very commonly used in Australian and Western media, making them important to recognise.",
        left: ["Red", "Blue", "Green", "Yellow/Gold", "Black", "White"],
        right: ["Mourning, formality, authority or elegance", "Nature, growth, environmental themes or health", "Danger, urgency, passion or importance", "Purity, cleanliness, simplicity or neutrality", "Trust, calm, technology or reliability", "Energy, optimism, warning or sunshine"],
      },
      // 10
      {
        type: "true-false" as const,
        title: "True or False: Colour in Design",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Colour associations are always the same in every culture around the world.", answer: false },
          { text: "Emergency services vehicles are often red or orange because these colours attract attention quickly.", answer: true },
          { text: "A design that uses only black and white cannot communicate emotion.", answer: false },
          { text: "In advertising, the colour of a product's packaging is deliberately chosen to appeal to the target audience.", answer: true },
          { text: "A large block of red on a poster always means danger.", answer: false },
        ],
      },
      // 11
      {
        type: "open-response" as const,
        title: "Analyse Colour Choices",
        instruction: "Describe what you would expect to feel when looking at a design that uses each colour scheme. Explain why.",
        parentTip: "This activity develops colour literacy — the ability to read and use colour as a communicative tool. Encourage your child to connect their answers to real examples they have seen.",
        prompts: [
          { text: "Colour scheme: Deep blue and silver with white text.", type: "lines", lines: 3 },
          { text: "Colour scheme: Bright orange, red and yellow with black outlines.", type: "lines", lines: 3 },
          { text: "Colour scheme: Pale green, cream and soft brown with natural textures.", type: "lines", lines: 3 },
        ],
      },
      // 12
      {
        type: "multiple-choice" as const,
        title: "Typography: Reading Fonts",
        instruction: "Choose the best answer for each question about typography in media.",
        parentTip: "Typography — the design of text — is one of the most powerful and underappreciated communication tools in media. Serif vs sans-serif, bold vs light, large vs small all communicate messages before the reader processes the words.",
        questions: [
          { prompt: "A newspaper uses a large, bold font for headlines and a smaller, lighter font for body text. Why?", options: ["To make the design more colourful", "To show hierarchy — headlines are more important and should attract attention first", "Because large fonts are always easier to read", "Because the designer preferred bold fonts"], answer: "To show hierarchy — headlines are more important and should attract attention first" },
          { prompt: "A luxury brand uses a thin, elegant serif font. What does this communicate?", options: ["The brand is aimed at children", "The brand is sporty and active", "The brand values elegance, tradition and refinement", "The brand is a technology company"], answer: "The brand values elegance, tradition and refinement" },
          { prompt: "A warning label uses capital letters, bold text and an exclamation mark. Why?", options: ["To make the label look professional", "To urgently attract attention and signal danger or importance", "Because the designer made a mistake", "To make the label harder to read"], answer: "To urgently attract attention and signal danger or importance" },
        ],
      },
      // 13
      {
        type: "matching" as const,
        title: "Match the Font Style to Its Communication",
        instruction: "Match each font description to the message or mood it typically communicates.",
        left: ["Large, bold, sans-serif font", "Flowing, handwritten-style font", "Small, light, elegant serif font", "All capital letters in a clean font", "Distressed, worn, rough-edged font"],
        right: ["A sense of age, vintage character or authenticity", "Quiet elegance, luxury or sophistication", "Urgency, importance or a shout", "Strength, modernity and directness", "Warmth, personality or a handmade quality"],
      },
      // 14
      {
        type: "open-response" as const,
        title: "Font Choice Matters",
        instruction: "Read these two versions of the same message. Explain how the font description changes your feeling about the message.",
        prompts: [
          { text: "MESSAGE: 'Fresh milk — delivered daily.'\nVERSION A: Written in a flowing, handwritten-style script in green on a cream background with a small farm illustration.\nVERSION B: Written in bold industrial block letters in white on a bright red background.\n\nQ1: What does Version A communicate about the brand?", type: "lines", lines: 3 },
          { text: "Q2: What does Version B communicate about the brand?", type: "lines", lines: 3 },
          { text: "Q3: Which version would be more effective for a small artisan farm? Explain why.", type: "lines", lines: 3 },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Design Conversation",
        content: "The best media literacy learning happens in everyday conversation, not just worksheets. When you see a poster, advertisement or website together, try asking: What did your eye go to first? Why? What colours are used and what feeling do they give you? Who do you think made this and who is it for? These questions, asked regularly and naturally, develop a critical eye that becomes automatic over time. You do not need to be a designer yourself — you just need to be curious.",
      },
      // 16
      {
        type: "true-false" as const,
        title: "True or False: Images in Media",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Photographs in news media always show events exactly as they happened, with no editorial choice involved.", answer: false },
          { text: "The angle of a photograph can change how the subject is perceived by the audience.", answer: true },
          { text: "A close-up image of a person's face creates a more intimate or emotional connection than a distant shot.", answer: true },
          { text: "Selecting which photograph to publish in a news story is always a neutral, factual decision.", answer: false },
          { text: "Airbrushing and editing photographs in advertising is always disclosed to the audience.", answer: false },
        ],
      },
      // 17
      {
        type: "matching" as const,
        title: "Match the Camera Shot to Its Effect",
        instruction: "Match each description of a photograph or camera shot to the effect it creates on the viewer.",
        parentTip: "Understanding shot types and their effects is essential for analysing film, news photography, advertising and social media images. These terms are used in media, English and Film Studies.",
        left: ["Close-up of a person's eyes", "Wide shot of a vast empty landscape", "Low-angle shot looking up at a person", "High-angle shot looking down at a person", "Side profile shot of someone looking off-camera"],
        right: ["Makes the subject seem small, vulnerable or insignificant", "Creates a sense of loneliness, scale or freedom", "Creates a sense of depth, mystery or contemplation", "Creates intense intimacy, emotion or connection", "Makes the subject seem powerful, heroic or imposing"],
      },
      // 18
      {
        type: "open-response" as const,
        title: "Analyse Photograph Choices",
        instruction: "For each scenario, explain what photograph choice was made and what effect it was designed to have.",
        prompts: [
          { text: "SCENARIO 1: A newspaper story about rising cost of living shows a photograph of a single empty shelf in a supermarket.\nWhat effect is this image designed to create?", type: "lines", lines: 3 },
          { text: "SCENARIO 2: An election campaign poster shows a politician photographed from a low angle, standing in bright sunlight with their chin slightly raised.\nWhat does this photograph communicate?", type: "lines", lines: 3 },
          { text: "SCENARIO 3: An environmental advertisement shows a bird covered in oil against a dark background.\nWhat emotion is this image designed to trigger?", type: "lines", lines: 3 },
        ],
      },
      // 19
      {
        type: "circle-correct" as const,
        title: "Image and Text: What Is the Relationship?",
        instruction: "For each example, circle whether the image and text are working together in the same direction, or whether the image adds something extra/unexpected.",
        questions: [
          { prompt: "A news article about a school awards night uses a photograph of a student receiving a trophy while their parent looks on proudly. The caption reads: 'Year 5 student wins regional science award.'", options: ["Image supports and reinforces the text", "Image adds an unexpected or contrasting layer of meaning"] },
          { prompt: "An article about the pressures of social media uses a photograph of a teenager smiling at their phone. The headline reads: 'Young people's mental health in crisis.'", options: ["Image supports and reinforces the text", "Image creates tension or irony — the happy image contradicts the serious headline"] },
          { prompt: "A conservation advertisement shows a single plastic bag floating in the ocean next to the words: 'This stays in the ocean for 500 years.'", options: ["Image supports and reinforces the text", "Image adds an unexpected or contrasting layer of meaning"] },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: A Picture Is Worth a Thousand Choices",
        content: "The phrase 'a picture is worth a thousand words' is true — but it misses something important. A picture is also worth a thousand choices. Someone decided what angle to photograph from, what to include in the frame and what to cut out, how bright or dark to make the image, what colour filter to apply, what caption to write, and where to place it on the page. Every one of those choices shaped what you see — and what you feel. Media literacy is not about being suspicious of every image. It is about knowing that images are made by people with purposes. When you understand that, you can read images as carefully as you read words.",
      },
      // 21
      {
        type: "open-response" as const,
        title: "The Cropping Experiment",
        instruction: "Imagine a photograph that shows a large crowd of protestors in a city street. Answer the questions below about how different cropping choices change the meaning.",
        parentTip: "The concept that cropping — what you include and exclude in a frame — changes meaning is one of the most important media literacy insights a student can develop. It directly applies to social media, news photography and advertising.",
        prompts: [
          { text: "CROP A: The photograph is cropped tightly to show 20 very angry-looking people at the front of the crowd.\nWhat impression does this crop give the viewer?", type: "lines", lines: 3 },
          { text: "CROP B: The photograph is a wide shot showing the full crowd of 10,000 peaceful marchers stretching for several blocks.\nWhat impression does this crop give the viewer?", type: "lines", lines: 3 },
          { text: "Q: Same event, two very different impressions. What does this tell you about how photographs can shape a story?", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "multiple-choice" as const,
        title: "Audience and Purpose",
        instruction: "For each media text description, identify the most likely audience.",
        parentTip: "Every media text is created with a specific audience in mind. All the design choices — colour, image, typography, language level — are calibrated for that audience. Understanding this is the foundation of media literacy.",
        questions: [
          { prompt: "A magazine with a hot pink cover, large bubbly fonts, celebrity photographs and headlines like 'Your Summer Look' and '50 Style Tips'.", options: ["Engineers aged 40–60", "Young adult women or teenage girls interested in fashion and celebrity", "Primary school boys", "Retired farmers"], answer: "Young adult women or teenage girls interested in fashion and celebrity" },
          { prompt: "A website with a dark background, small technical fonts, product specifications and comparison tables for electronic components.", options: ["Young children learning to read", "Parents looking for school resources", "Technology enthusiasts or professionals buying electronics", "Elderly readers looking for general news"], answer: "Technology enthusiasts or professionals buying electronics" },
          { prompt: "A colourful leaflet about a local council event with large text, photographs of families and children playing, and the headline 'Bring the whole family!'", options: ["Single professionals aged 20–30", "Families with young children in the local area", "International business travellers", "University students"], answer: "Families with young children in the local area" },
        ],
      },
      // 23
      {
        type: "fill-in-blank" as const,
        title: "Identify the Target Audience",
        instruction: "Fill in the target audience for each media text description.",
        sentences: [
          { text: "A sports shoe advertisement featuring a famous basketball player, with action photography and the tagline 'Play like you mean it', targets _____.", blanks: ["young sports enthusiasts, particularly those interested in basketball"] },
          { text: "A brochure for a retirement village using calming blue-green colours, large text, photographs of older adults enjoying activities and the headline 'Your best years, your way', targets _____.", blanks: ["older Australians or their families considering retirement living"] },
          { text: "A website with animated characters, bright primary colours, simple vocabulary and interactive games targets _____.", blanks: ["young children, typically aged 4–8"] },
        ],
      },
      // 24
      {
        type: "open-response" as const,
        title: "Decode the Advertisement",
        instruction: "Answer the four key media analysis questions for this advertisement description.",
        prompts: [
          { text: "ADVERTISEMENT:\nA full-page glossy magazine advertisement for bottled water. The background is a photograph of a crystal-clear mountain stream in a lush green forest at sunrise. The water bottle is shown in the foreground, small compared to the landscape. The text reads in small, clean white font: 'Pure. Natural. Untouched.' At the bottom: 'Aqualux — premium spring water — $12 per bottle.'\n\nQ1 — What do you see first and why?", type: "lines", lines: 3 },
          { text: "Q2 — What colours are used and what mood do they create?", type: "lines", lines: 3 },
          { text: "Q3 — How does the image work with the text?", type: "lines", lines: 3 },
          { text: "Q4 — Who is the intended audience and how do the design choices target them?", type: "lines", lines: 3 },
        ],
      },
      // 25
      {
        type: "sorting" as const,
        title: "Sort the Media Text Features by Purpose",
        instruction: "Sort each media text feature into its primary purpose category.",
        parentTip: "Many media text features serve more than one purpose simultaneously. Encourage your child to identify the most prominent purpose rather than searching for the single 'correct' answer.",
        columns: ["Establish credibility", "Create emotion", "Inform the audience", "Persuade or motivate action"],
        items: [
          { label: "A 'trusted by millions' badge on a product" },
          { label: "A dramatic photograph of a natural disaster" },
          { label: "A fact box with key statistics" },
          { label: "A call-to-action button: 'Donate now'" },
          { label: "A testimonial from a customer with their name and photograph" },
          { label: "Before-and-after photographs" },
          { label: "A timeline of events" },
          { label: "The headline 'Your child could be next'" },
        ],
      },
      // 26
      {
        type: "true-false" as const,
        title: "True or False: Advertising Techniques",
        instruction: "Mark each statement True or False.",
        parentTip: "Advertising literacy is one of the most practical forms of media literacy. Understanding how advertisements work helps consumers make more conscious choices.",
        statements: [
          { text: "Advertisers use research about human psychology to design more effective advertisements.", answer: true },
          { text: "All claims made in advertisements in Australia must be truthful and not misleading.", answer: true },
          { text: "Celebrity endorsements always mean that the celebrity genuinely uses and believes in the product.", answer: false },
          { text: "The placement of a product in a film or television show (product placement) is a form of advertising.", answer: true },
          { text: "Children are considered a special audience that requires additional advertising protections under Australian law.", answer: true },
        ],
      },
      // 27
      {
        type: "multiple-choice" as const,
        title: "Advertising Techniques",
        instruction: "Choose the advertising technique used in each example.",
        questions: [
          { prompt: "An advertisement says: '9 out of 10 dentists recommend this toothpaste.' What technique is this?", options: ["Celebrity endorsement", "Appeal to authority and statistics", "Fear appeal", "Bandwagon effect"], answer: "Appeal to authority and statistics" },
          { prompt: "An advertisement shows everyone at a party using a brand of phone and looking happy and popular. What technique is this?", options: ["Appeal to authority", "Fear appeal", "Bandwagon effect — join in or be left out", "Rule of three"], answer: "Bandwagon effect — join in or be left out" },
          { prompt: "An advertisement for an insurance company shows a family caught in a storm, looking worried. Then it cuts to the same family, safe and smiling after a claim was paid. What technique is this?", options: ["Humour", "Fear appeal followed by resolution and relief", "Celebrity endorsement", "Colour symbolism"], answer: "Fear appeal followed by resolution and relief" },
          { prompt: "A famous actor appears in a perfume advertisement, walking through Paris in elegant clothing. What technique is this?", options: ["Fear appeal", "Bandwagon effect", "Celebrity endorsement — associating the product with glamour and aspiration", "Rule of three"], answer: "Celebrity endorsement — associating the product with glamour and aspiration" },
        ],
      },
      // 28
      {
        type: "open-response" as const,
        title: "Identify the Advertising Technique",
        instruction: "Describe an advertisement you have seen recently. Identify at least two techniques it uses and explain how they are designed to influence the audience.",
        parentTip: "This open-ended analysis connects worksheet learning to real-world experience. There are no right or wrong answers — what matters is the quality of the reasoning your child provides.",
        prompts: [
          { text: "Product or service being advertised:", type: "lines", lines: 1 },
          { text: "Describe the advertisement (what you see, hear and read):", type: "lines", lines: 3 },
          { text: "Technique 1 and how it works on the audience:", type: "lines", lines: 3 },
          { text: "Technique 2 and how it works on the audience:", type: "lines", lines: 3 },
        ],
      },
      // 29
      {
        type: "circle-correct" as const,
        title: "Responsible Advertising?",
        instruction: "For each advertising practice, circle whether it is responsible or potentially problematic.",
        questions: [
          { prompt: "An advertisement for a sugary cereal is placed between children's cartoon episodes on a children's TV channel and uses cartoon characters to appeal to young viewers.", options: ["Responsible — companies have a right to advertise", "Potentially problematic — targets children who lack the critical skills to evaluate advertising claims"] },
          { prompt: "A sports supplement advertisement clearly states that the product 'supports performance — results may vary' and shows athletes training hard.", options: ["Responsible — includes a disclaimer and realistic context", "Potentially problematic — misleads consumers about guaranteed outcomes"] },
          { prompt: "A fast food chain edits its photographs to make the food look larger, fresher and more appealing than the actual product customers receive.", options: ["Responsible — all advertising uses some enhancement", "Potentially problematic — this misrepresents the product in a misleading way"] },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Ad Break Activity",
        content: "During a commercial break on television or before a YouTube video, try this: each person picks one advertisement and has 30 seconds to identify the target audience, one technique used and what emotion it is designed to create. Make it fast and fun — no need for full sentences. This builds critical media viewing habits without adding academic pressure. Over time, your child will start doing this automatically every time they encounter an advertisement.",
      },
      // 31
      {
        type: "open-response" as const,
        title: "Compare Two Advertisements",
        instruction: "Find two advertisements for similar products (e.g. two different brands of breakfast cereal, two different cars, or two different phone models). Compare their design choices.",
        parentTip: "Comparing two advertisements on the same product category is one of the richest media literacy activities. Differences in colour, image choice, language and layout reveal different brand values, different target audiences and different assumptions about what motivates consumers.",
        prompts: [
          { text: "Product category:", type: "lines", lines: 1 },
          { text: "Advertisement 1 — brand and design choices (colour, image, font, message):", type: "lines", lines: 4 },
          { text: "Advertisement 2 — brand and design choices:", type: "lines", lines: 4 },
          { text: "Key differences and what they tell you about each brand's audience or values:", type: "lines", lines: 4 },
        ],
      },
      // 32
      {
        type: "multiple-choice" as const,
        title: "News Media Design Choices",
        instruction: "Choose the best answer for each question about how design choices in news media shape meaning.",
        questions: [
          { prompt: "Two newspapers cover the same story. One uses a photograph of the politician looking composed and professional; the other uses a photograph of the same politician mid-sentence, looking frustrated. What does this difference tell us?", options: ["Photographs in news are always chosen randomly", "Both photographs are equally objective because they are real photographs", "The choice of photograph reflects the publication's editorial stance or intention to influence how the audience views the subject", "Photographs are chosen by the subjects themselves"], answer: "The choice of photograph reflects the publication's editorial stance or intention to influence how the audience views the subject" },
          { prompt: "A newspaper places a story about climate change on page 18 with a small headline and no photograph. What does this placement communicate?", options: ["The newspaper considers climate change less significant than stories placed on earlier pages", "The story was too short to be placed on the front page", "Climate change is not a real concern for the newspaper's audience", "All stories on page 18 are about the environment"], answer: "The newspaper considers climate change less significant than stories placed on earlier pages" },
        ],
      },
      // 33
      {
        type: "open-response" as const,
        title: "Front Page Analysis",
        instruction: "Examine the front page of a newspaper or news website with your parent. Answer the analysis questions below.",
        parentTip: "Analysing a real newspaper front page is one of the most valuable media literacy activities possible. Focus on how the editor has made decisions about what is important, how stories are represented and what audiences are assumed.",
        prompts: [
          { text: "Source (newspaper name and date):", type: "lines", lines: 1 },
          { text: "Q1: What is the lead story? How do you know it is the most important story? (Consider size, position, image).", type: "lines", lines: 3 },
          { text: "Q2: What photographs are used? What mood or emotion do they create?", type: "lines", lines: 3 },
          { text: "Q3: Are any groups of people or topics underrepresented on this front page?", type: "lines", lines: 3 },
          { text: "Q4: What does this front page tell you about what the editor thinks the audience cares about?", type: "lines", lines: 3 },
        ],
      },
      // 34
      {
        type: "true-false" as const,
        title: "True or False: News Media and Objectivity",
        instruction: "Mark each statement True or False.",
        parentTip: "The concept of media objectivity is complex and important. Helping your child understand that all media involves choices — without becoming cynical about all media — is the goal of this section.",
        statements: [
          { text: "News media makes dozens of editorial choices every day — what to cover, what photographs to use, how to word headlines — and these choices shape how audiences understand the world.", answer: true },
          { text: "Headlines in news media are always completely neutral and never use emotive or persuasive language.", answer: false },
          { text: "Different news organisations can cover the same event and present it in different ways to different audiences.", answer: true },
          { text: "Consuming news from a variety of sources helps readers develop a more complete picture of events.", answer: true },
          { text: "All news websites in Australia are required by law to be completely politically neutral.", answer: false },
        ],
      },
      // 35
      {
        type: "fill-in-blank" as const,
        title: "Media Literacy Vocabulary: Headlines",
        instruction: "Fill in the blanks to describe how these headline techniques work.",
        sentences: [
          { text: "'Experts warn of devastating consequences' — The word 'devastating' is _____ language designed to create a strong _____ response in the reader.", blanks: ["emotive", "emotional"] },
          { text: "'COULD YOUR CHILD BE AT RISK?' — This headline uses a _____ question to create a sense of _____ in the reader.", blanks: ["rhetorical", "concern or fear"] },
          { text: "'School reforms: the good, the bad and the ugly' — This headline uses a _____ to make it catchy and memorable.", blanks: ["rule of three"] },
          { text: "'Government slammed over policy failure' — The word 'slammed' is a _____ word choice that reveals the writer's _____ tone.", blanks: ["strong emotive", "negative or critical"] },
        ],
      },
      // 36
      {
        type: "open-response" as const,
        title: "Rewrite the Headline",
        instruction: "Each headline below uses emotive language that reveals a bias. Rewrite it in neutral, objective language.",
        parentTip: "Rewriting biased headlines in neutral language is an excellent critical thinking exercise. It shows students that word choice is never accidental — every word carries weight.",
        prompts: [
          { text: "ORIGINAL: 'Government's disastrous bungling leaves thousands without support'\nNEUTRAL REWRITE:", type: "lines", lines: 2 },
          { text: "ORIGINAL: 'Heroic protesters stand firm against greedy developers'\nNEUTRAL REWRITE:", type: "lines", lines: 2 },
          { text: "ORIGINAL: 'Clueless council ignores community pleas'\nNEUTRAL REWRITE:", type: "lines", lines: 2 },
        ],
      },
      // 37
      {
        type: "multiple-choice" as const,
        title: "Digital Media Literacy",
        instruction: "Choose the best answer for each question about reading media online.",
        parentTip: "Digital media literacy is arguably more urgent than traditional media literacy, given that children encounter hundreds of online media texts every day through social media, YouTube, gaming platforms and news apps.",
        questions: [
          { prompt: "What is clickbait?", options: ["A type of fishing technique", "Content designed with sensational or misleading headlines to attract clicks, often leading to disappointing or misleading content", "A way to test if a website is reliable", "A type of digital advertisement that appears between website pages"], answer: "Content designed with sensational or misleading headlines to attract clicks, often leading to disappointing or misleading content" },
          { prompt: "Which of these is the best way to check if an online news story is credible?", options: ["Check if the website looks professional", "See how many people have shared it on social media", "Check if multiple reliable news sources are reporting the same story", "See if the headline uses capital letters"], answer: "Check if multiple reliable news sources are reporting the same story" },
          { prompt: "What is a 'filter bubble' in digital media?", options: ["A tool for removing inappropriate content from websites", "A system that automatically corrects spelling in online articles", "The way algorithms show users content similar to what they have already viewed, creating a limited view of the world", "A type of social media privacy setting"], answer: "The way algorithms show users content similar to what they have already viewed, creating a limited view of the world" },
        ],
      },
      // 38
      {
        type: "sorting" as const,
        title: "Sort the Online Sources: Reliable or Unreliable?",
        instruction: "Sort each online source into Reliable (credible, evidence-based) or Unreliable (unverified, biased or misleading).",
        parentTip: "Source evaluation is a critical digital literacy skill. Help your child understand that a professional-looking website does not guarantee reliability, and that checking who wrote something and why is always worth the effort.",
        columns: ["Reliable", "Unreliable"],
        items: [
          { label: "A report published on the Australian Bureau of Statistics website" },
          { label: "An anonymous social media post claiming 'scientists have discovered that…'" },
          { label: "An article from the ABC News website with a named journalist and cited sources" },
          { label: "A YouTube video claiming a common medicine is dangerous, with no scientific sources cited" },
          { label: "A peer-reviewed study published in the Medical Journal of Australia" },
          { label: "A website selling natural health supplements that also publishes articles about health" },
        ],
      },
      // 39
      {
        type: "open-response" as const,
        title: "Evaluate a Digital Source",
        instruction: "Find an article or post online with your parent's guidance. Evaluate its reliability using the SIFT method (Stop, Investigate the source, Find better coverage, Trace claims).",
        parentTip: "The SIFT method (developed by Mike Caulfield) is one of the most practical digital media literacy frameworks available. Even stopping to investigate who wrote something before sharing it would significantly reduce misinformation spread.",
        prompts: [
          { text: "Article title and URL (write it down):", type: "lines", lines: 2 },
          { text: "STOP: What is my first reaction? Am I about to share without reading carefully?", type: "lines", lines: 2 },
          { text: "INVESTIGATE: Who wrote this? What organisation published it? Do they have expertise?", type: "lines", lines: 3 },
          { text: "FIND BETTER COVERAGE: Do other reliable sources report the same information?", type: "lines", lines: 2 },
          { text: "My overall reliability rating (1–5) and reason:", type: "lines", lines: 2 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: You Are the Audience — and You Choose",
        content: "Every media text was made by someone, for a purpose, to be consumed by an audience. That audience is you. The most powerful thing media literacy gives you is the ability to be a conscious audience member rather than a passive one. When you look at an advertisement and recognise the techniques it is using, you are not falling for them — you are reading them. When you look at a news photograph and ask who chose it and why, you are reading it. When you notice that a website makes you feel afraid or angry and you stop to ask why, you are reading it. This kind of reading takes practice. But every image, headline and design you analyse makes you a stronger, more aware reader of the world you live in.",
      },
      // 41
      {
        type: "open-response" as const,
        title: "Design Your Own Poster",
        instruction: "Plan and sketch a simple poster or advertisement on a topic of your choice. Then write an explanation of three deliberate design choices you made.",
        parentTip: "Creating media is one of the most effective ways to understand how media works. When students make their own design choices, they develop a deeper appreciation for why professional designers make the choices they do.",
        prompts: [
          { text: "My topic or message:", type: "lines", lines: 1 },
          { text: "Sketch your poster here:", type: "box", lines: 12 },
          { text: "Design choice 1 (colour/image/font/layout) and why I made it:", type: "lines", lines: 3 },
          { text: "Design choice 2 and why I made it:", type: "lines", lines: 3 },
          { text: "Design choice 3 and why I made it:", type: "lines", lines: 3 },
        ],
      },
      // 42
      {
        type: "multiple-choice" as const,
        title: "Layout Principles",
        instruction: "Choose the best answer for each question about layout design.",
        questions: [
          { prompt: "What does 'visual hierarchy' mean in design?", options: ["The process of ordering information alphabetically", "The way elements are arranged and sized so that the most important information is seen first", "The use of multiple columns on a page", "The number of images in a design"], answer: "The way elements are arranged and sized so that the most important information is seen first" },
          { prompt: "Why do designers use white space (blank areas) in a layout?", options: ["Because they ran out of content to fill the space", "To help the eye focus on key elements and reduce visual clutter", "White space is considered a design error", "To make the design cheaper to print"], answer: "To help the eye focus on key elements and reduce visual clutter" },
          { prompt: "Most English-language readers scan a page in a Z-pattern — starting top-left, moving right, then diagonally down to the bottom-left, ending bottom-right. How might a designer use this knowledge?", options: ["By placing the most important information in the middle of the page", "By placing the logo bottom-right and the headline top-left, following the natural reading path", "By ignoring this pattern and placing information randomly to surprise the reader", "By placing all the text on one side of the page"], answer: "By placing the logo bottom-right and the headline top-left, following the natural reading path" },
        ],
      },
      // 43
      {
        type: "open-response" as const,
        title: "Design for an Audience",
        instruction: "You have been asked to design a poster for each of these events. For each one, describe the design choices you would make (colour, image type, font style, layout) and explain why they suit the audience.",
        prompts: [
          { text: "EVENT 1: An open day for a primary school, targeting families with young children.", type: "lines", lines: 4 },
          { text: "EVENT 2: A careers fair for Year 10–12 students, targeting teenagers thinking about their future.", type: "lines", lines: 4 },
          { text: "EVENT 3: A gala dinner for a conservation charity, targeting wealthy adult donors.", type: "lines", lines: 4 },
        ],
      },
      // 44
      {
        type: "matching" as const,
        title: "Match the Design Choice to the Audience",
        instruction: "Match each design choice to the audience it is most likely targeting.",
        parentTip: "The connection between design choice and audience is the central insight of media literacy. Understanding that all design choices are audience-directed builds the habit of asking 'who is this for?' every time students encounter a media text.",
        left: ["Bright colours, simple large fonts, animated characters and interactive games", "Neutral greys, clean sans-serif fonts, technical specifications and data tables", "Warm earth tones, handwritten-style fonts, photographs of vegetables and nature", "Bold black and white photography, minimal text and a single luxury product image"],
        right: ["Adults who value premium quality and minimalism", "Young children learning through play", "Technology professionals comparing products", "Health-conscious adults interested in organic food"],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Creating Media Together",
        content: "One of the richest media literacy activities is creating media together — not just analysing it. Try designing a simple poster, newsletter front page or advertisement together on any topic. As you make choices about colour, font, image placement and message, discuss why you are making each choice. The process of creation reveals the complexity of design in a way that analysis alone cannot. Free tools like Canva (canva.com) make professional-looking design accessible to primary school students.",
      },
      // 46
      {
        type: "true-false" as const,
        title: "True or False: Social Media and Media Literacy",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Social media posts and images are a form of media text that can be analysed using media literacy tools.", answer: true },
          { text: "A photograph with many 'likes' on social media is always accurate and reliable.", answer: false },
          { text: "Social media algorithms are designed to show users content that will keep them engaged for as long as possible.", answer: true },
          { text: "Filters and editing tools on social media mean that photographs often do not accurately represent reality.", answer: true },
          { text: "Social media influencers are always required to disclose when they have been paid to promote a product.", answer: false },
        ],
      },
      // 47
      {
        type: "multiple-choice" as const,
        title: "Media Literacy: Misinformation and Disinformation",
        instruction: "Choose the best answer for each question.",
        parentTip: "The difference between misinformation (incorrect information spread without intent to deceive) and disinformation (incorrect information spread deliberately) is an important distinction for young media consumers.",
        questions: [
          { prompt: "What is the difference between misinformation and disinformation?", options: ["They mean exactly the same thing — both refer to false information", "Misinformation is false information spread without deliberate intent to deceive; disinformation is false information spread deliberately to mislead", "Misinformation is only found in newspapers; disinformation is only online", "Misinformation is always about politics; disinformation is about health"], answer: "Misinformation is false information spread without deliberate intent to deceive; disinformation is false information spread deliberately to mislead" },
          { prompt: "What is 'deepfake' technology?", options: ["A type of social media filter", "Artificial intelligence technology that can create convincing fake photographs and videos of real people", "A method of detecting fake news", "A type of digital advertisement"], answer: "Artificial intelligence technology that can create convincing fake photographs and videos of real people" },
          { prompt: "What is the best first step when you see a surprising claim on social media?", options: ["Share it immediately because your friends should know", "Believe it — it would not be on social media if it were not true", "Stop and check whether reliable news sources are reporting the same claim before sharing it", "Ignore all social media posts because they are all false"], answer: "Stop and check whether reliable news sources are reporting the same claim before sharing it" },
        ],
      },
      // 48
      {
        type: "open-response" as const,
        title: "Spot the Fake",
        instruction: "Here are four 'social media post' descriptions. Which ones show warning signs of misinformation? Explain your thinking.",
        prompts: [
          { text: "POST A: 'SHARE THIS NOW!!! Scientists have SECRETLY DISCOVERED that drinking coffee every day cures ALL cancer. Big Pharma doesn't want you to know!! [No source, no date, posted by anonymous account]'\nWarning signs:", type: "lines", lines: 3 },
          { text: "POST B: 'According to a new study published in The Lancet, moderate coffee consumption is associated with a lower risk of certain cancers — though researchers stress this is not conclusive. [Link to The Lancet website included]'\nWarning signs:", type: "lines", lines: 3 },
        ],
      },
      // 49
      {
        type: "sorting" as const,
        title: "Sort the Media Literacy Practices",
        instruction: "Sort each practice into Good digital media habit or Poor digital media habit.",
        columns: ["Good digital media habit", "Poor digital media habit"],
        items: [
          { label: "Checking who published an article before trusting it" },
          { label: "Sharing a shocking headline without reading the full article" },
          { label: "Consuming news from a variety of different sources" },
          { label: "Assuming something is true because it has many likes or shares" },
          { label: "Noticing if a source has a potential bias or conflict of interest" },
          { label: "Only reading news from one source that agrees with your existing views" },
          { label: "Asking 'who made this and why?' before accepting a claim as fact" },
          { label: "Trusting a website because it looks professional" },
        ],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Write a Media Literacy Guide for a Younger Student",
        instruction: "Write a short guide (5–8 sentences) for a younger student explaining how to read media texts critically. Include at least three practical questions they should ask about any media text.",
        parentTip: "Teaching the concept to someone else is the highest form of understanding. If your child can write this guide clearly and practically, they have genuinely internalised the key principles of media literacy.",
        prompts: [{ text: "My media literacy guide:", type: "box", lines: 10 }],
      },
      // 51
      {
        type: "multiple-choice" as const,
        title: "Documentary Films as Media Texts",
        instruction: "Choose the best answer for each question about documentary films as media texts.",
        parentTip: "Documentary films are often treated as objective truth, but they involve the same editorial choices as any other media text — what to include, what to leave out, whose perspective to show, what music to use and how to sequence information.",
        questions: [
          { prompt: "A documentary filmmaker decides to include only interviews with people who agree with their argument. What is the problem with this approach?", options: ["Interviewing fewer people saves time", "Presenting only one perspective creates a biased picture that may mislead the audience", "Documentaries never include opposing viewpoints", "The filmmaker is not allowed to choose their interviewees"], answer: "Presenting only one perspective creates a biased picture that may mislead the audience" },
          { prompt: "A documentary about environmental destruction uses slow, sad music throughout all its footage of nature. What effect is this designed to create?", options: ["It slows down the pacing of the film", "It emotionally primes the viewer to feel sadness and concern for the environment", "It has no effect — music is only used for entertainment", "It makes the documentary more credible"], answer: "It emotionally primes the viewer to feel sadness and concern for the environment" },
          { prompt: "How is a documentary film similar to a persuasive essay?", options: ["Both always present both sides of an argument equally", "Both are required by law to be completely factual", "Both make deliberate choices about what evidence to present and how to sequence it to support a position", "Both are written rather than visual"], answer: "Both make deliberate choices about what evidence to present and how to sequence it to support a position" },
        ],
      },
      // 52
      {
        type: "fill-in-blank" as const,
        title: "Documentary Film Techniques",
        instruction: "Fill in the blanks using these terms: voice-over narration, archival footage, talking head, reconstructed scene, montage.",
        sentences: [
          { text: "When a documentary shows an interviewee speaking directly to camera, this is called a _____ interview.", blanks: ["talking head"] },
          { text: "When old photographs or film footage from the past is used in a documentary, this is called _____ footage.", blanks: ["archival"] },
          { text: "When a series of images is edited together quickly to create a powerful impression or summarise events, this is called a _____.", blanks: ["montage"] },
          { text: "When an off-screen commentator speaks over footage to guide the viewer's interpretation, this is called _____ narration.", blanks: ["voice-over"] },
          { text: "When events that were not filmed at the time are acted out for the documentary, this is called a _____ scene.", blanks: ["reconstructed"] },
        ],
      },
      // 53
      {
        type: "open-response" as const,
        title: "Analyse a Documentary Sequence",
        instruction: "You have just watched the opening of a documentary about ocean pollution. Describe how each element contributes to the overall effect.",
        prompts: [
          { text: "OPENING SEQUENCE DESCRIPTION:\nThe film opens with two minutes of beautiful aerial footage of a pristine blue ocean at sunrise, with no music — only the sound of waves. Slowly, a piece of plastic drifts into frame. The music begins — a single, sad piano note. Then: cut to a seabird, tangled in fishing line. The camera holds on its face. Then: a slow zoom out to reveal an ocean covered in floating plastic. The narrator says quietly: 'This is the ocean we inherited. This is the ocean we are leaving behind.'\n\nQ1: What effect do the first two minutes of beautiful ocean footage create?", type: "lines", lines: 3 },
          { text: "Q2: Why does the music begin with the appearance of plastic?", type: "lines", lines: 3 },
          { text: "Q3: What is the effect of showing the seabird's face in close-up?", type: "lines", lines: 3 },
          { text: "Q4: How does the narrator's final line use contrast to create impact?", type: "lines", lines: 3 },
        ],
      },
      // 54
      {
        type: "true-false" as const,
        title: "True or False: Screen Media",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "The choice of music in a film or documentary can significantly influence how the audience feels about what they are seeing.", answer: true },
          { text: "Slow, careful editing creates a sense of urgency and action.", answer: false },
          { text: "A close-up shot of a person's face in a film creates emotional intimacy between the audience and the subject.", answer: true },
          { text: "Documentary films can never include actors or dramatic reconstructions of events.", answer: false },
          { text: "The title sequence of a film is a deliberate communication that sets mood, tone and expectation before the story begins.", answer: true },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Design an Opening Scene",
        instruction: "You are the director of a documentary about the importance of protecting Australian wildlife. Design your opening two-minute scene. Describe your image choices, music, camera angles and narration.",
        parentTip: "This creative activity is highly motivating for visual learners and can be done collaboratively. Encourage your child to think cinematically — to 'see' the scene as they describe it.",
        prompts: [{ text: "My opening two-minute documentary scene:", type: "box", lines: 14 }],
      },
      // 56
      {
        type: "multiple-choice" as const,
        title: "Multimodal Texts",
        instruction: "Choose the best answer for each question about multimodal texts.",
        parentTip: "A multimodal text is any text that uses more than one mode of communication — for example, a website that combines text, image, audio and video. All modern media texts are multimodal.",
        questions: [
          { prompt: "What is a multimodal text?", options: ["A text that uses only written words", "A text that uses more than one mode of communication — e.g. words, images, sound, layout", "A text that is very long and complex", "A text that is published in multiple languages"], answer: "A text that uses more than one mode of communication — e.g. words, images, sound, layout" },
          { prompt: "In a multimodal news article, which element typically appears first when the page loads?", options: ["The full article text", "The author's biography", "The headline and lead photograph, which together create the first impression", "The comments section"], answer: "The headline and lead photograph, which together create the first impression" },
          { prompt: "What term describes the way different modes in a multimodal text work together to create meaning?", options: ["Synchronisation", "Coherence", "Multimodal cohesion — the way all the modes reinforce or complement each other", "Typography"], answer: "Multimodal cohesion — the way all the modes reinforce or complement each other" },
        ],
      },
      // 57
      {
        type: "open-response" as const,
        title: "Analyse a Website Homepage",
        instruction: "Look at the homepage of a website with your parent and answer these analysis questions.",
        parentTip: "Website homepage analysis is one of the richest multimodal literacy activities available. Commercial websites are designed by professional teams using extensive audience research — everything visible is intentional.",
        prompts: [
          { text: "Website name and purpose:", type: "lines", lines: 1 },
          { text: "Q1: What is the first element your eye goes to? Why?", type: "lines", lines: 3 },
          { text: "Q2: What colour palette is used? What mood does it create?", type: "lines", lines: 3 },
          { text: "Q3: Who is the intended audience? What design choices target them?", type: "lines", lines: 3 },
          { text: "Q4: Is there a clear call to action? Where is it placed and how is it designed?", type: "lines", lines: 3 },
        ],
      },
      // 58
      {
        type: "sorting" as const,
        title: "Sort by Multimodal Mode",
        instruction: "Sort each element into the correct communication mode category.",
        parentTip: "Understanding the different modes in a multimodal text — and how they work together — is a key media literacy concept that applies to websites, films, games, advertisements and all modern media.",
        columns: ["Visual (images/layout)", "Linguistic (written/spoken language)", "Audio (sound/music)", "Spatial (arrangement/proximity)"],
        items: [
          { label: "A news headline in bold letters" },
          { label: "A lead photograph of a flood" },
          { label: "Background music in a film trailer" },
          { label: "Two related images placed side by side for comparison" },
          { label: "A caption explaining a chart" },
          { label: "A sound effect of a clock ticking" },
          { label: "The brand logo positioned in the top-left corner" },
          { label: "A voice-over narration" },
        ],
      },
      // 59
      {
        type: "open-response" as const,
        title: "Create a Multimodal Text",
        instruction: "Plan a two-page spread for a school magazine about an issue you care about. Describe all the multimodal elements you would include and explain the purpose of each.",
        prompts: [
          { text: "Topic:", type: "lines", lines: 1 },
          { text: "Headline and font choice:", type: "lines", lines: 2 },
          { text: "Lead image description and purpose:", type: "lines", lines: 3 },
          { text: "Layout description (where things are placed and why):", type: "lines", lines: 3 },
          { text: "Colour scheme and mood it creates:", type: "lines", lines: 2 },
          { text: "Key text (main article):", type: "lines", lines: 2 },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Real Media Projects",
        content: "Consider creating a real multimodal text with your child — a newsletter about your homeschooling journey, a poster for a community event, or a digital presentation about a topic they are passionate about. Free tools like Canva, Google Slides or Microsoft Publisher make this accessible and enjoyable. The experience of making design decisions for a real purpose — and seeing the final result — is one of the most powerful learning experiences possible for developing media literacy.",
      },
      // 61
      {
        type: "fill-in-blank" as const,
        title: "Media Concepts: Review",
        instruction: "Fill in each blank using the correct media literacy term.",
        sentences: [
          { text: "A text that combines images, words, sound and layout to create meaning is called a _____ text.", blanks: ["multimodal"] },
          { text: "The intended _____ is the group of people a media text is designed for.", blanks: ["audience"] },
          { text: "The arrangement of elements on a page to show order of importance is called visual _____.", blanks: ["hierarchy"] },
          { text: "False information spread deliberately to mislead is called _____.", blanks: ["disinformation"] },
          { text: "The deliberate choice of which part of a scene to include in a photograph or film frame is called _____.", blanks: ["framing"] },
        ],
      },
      // 62
      {
        type: "multiple-choice" as const,
        title: "Reading Graphic Novels and Picture Books",
        instruction: "Choose the best answer for each question about visual narrative in graphic novels and picture books.",
        questions: [
          { prompt: "In a graphic novel, what is a panel?", options: ["A chapter heading", "A single framed image that shows one moment in the story", "A page of text without images", "The title page of the book"], answer: "A single framed image that shows one moment in the story" },
          { prompt: "In a picture book, what is the relationship between the words and illustrations usually called?", options: ["A picture book only uses words", "Counterpoint — where words and illustrations tell different aspects of the story, creating richer meaning together", "Illustrations are only decorations and do not add meaning", "All picture books use photographs rather than illustrations"], answer: "Counterpoint — where words and illustrations tell different aspects of the story, creating richer meaning together" },
          { prompt: "In a graphic novel, the space between panels is called 'the gutter'. What happens in the gutter?", options: ["Nothing — the story is paused", "The reader's imagination fills in the action or time that has passed between the two panels", "The author's notes appear", "Sound effects are placed"], answer: "The reader's imagination fills in the action or time that has passed between the two panels" },
        ],
      },
      // 63
      {
        type: "open-response" as const,
        title: "Analyse a Picture Book Page",
        instruction: "Choose a picture book you have at home (or one from memory). Analyse a page or double-spread where the illustration adds meaning that the text alone does not.",
        parentTip: "Picture books are some of the richest multimodal texts available. Books like 'The Arrival' by Shaun Tan, 'Where the Wild Things Are' by Maurice Sendak or 'The Rabbits' by John Marsden and Shaun Tan offer extraordinary material for media literacy analysis.",
        prompts: [
          { text: "Book title and illustrator:", type: "lines", lines: 1 },
          { text: "Describe the page and its illustration:", type: "lines", lines: 3 },
          { text: "Q1: What information does the illustration add that the text does not say?", type: "lines", lines: 3 },
          { text: "Q2: How do the colour, composition and mood of the illustration shape how you feel about the story?", type: "lines", lines: 3 },
        ],
      },
      // 64
      {
        type: "true-false" as const,
        title: "True or False: Graphic Novels and Visual Storytelling",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "In a graphic novel, the size of a panel can indicate the importance or duration of a moment in the story.", answer: true },
          { text: "A full-page image (splash page) in a graphic novel is typically used for a dramatic, important moment.", answer: true },
          { text: "Colour is never used symbolically in graphic novels — it is only for aesthetic decoration.", answer: false },
          { text: "The reading path through a page of a graphic novel always goes left to right, top to bottom.", answer: false },
          { text: "Perspective and camera angle in a graphic novel's illustrations can show power relationships between characters.", answer: true },
        ],
      },
      // 65
      {
        type: "open-response" as const,
        title: "Design a Three-Panel Graphic Novel Page",
        instruction: "Plan a three-panel graphic novel page for a story of your choice. Describe what each panel shows, the colour mood, the camera angle and what happens in the 'gutters' between panels.",
        parentTip: "Creating a graphic novel page plan develops visual storytelling skills alongside media literacy. If your child enjoys drawing, they could sketch the actual panels. The planning process itself is the key learning.",
        prompts: [
          { text: "My story and characters:", type: "lines", lines: 2 },
          { text: "PANEL 1 — what I see, camera angle, colour mood:", type: "lines", lines: 3 },
          { text: "GUTTER 1 — what happens in the gap (what the reader must imagine):", type: "lines", lines: 2 },
          { text: "PANEL 2 — what I see, camera angle, colour mood:", type: "lines", lines: 3 },
          { text: "GUTTER 2 — what happens in the gap:", type: "lines", lines: 2 },
          { text: "PANEL 3 — what I see, camera angle, colour mood:", type: "lines", lines: 3 },
        ],
      },
      // 66
      {
        type: "multiple-choice" as const,
        title: "Logo Analysis",
        instruction: "Choose the best answer for each question about logos as media texts.",
        questions: [
          { prompt: "What is the purpose of a logo?", options: ["To list all the products a company sells", "To instantly communicate a brand's identity, values and personality through visual elements", "To provide legal information about the company", "To show the company's address"], answer: "To instantly communicate a brand's identity, values and personality through visual elements" },
          { prompt: "A tech company uses a simple, circular logo in flat blue with a clean white icon in the centre. What does this design typically communicate?", options: ["The company is old-fashioned and traditional", "The company values complexity and detail", "The company is modern, trustworthy and user-friendly", "The company only makes blue products"], answer: "The company is modern, trustworthy and user-friendly" },
          { prompt: "Why do many environmental organisations use green in their logos?", options: ["Because green is the cheapest colour to print", "Because green is associated with nature, growth and environmental values", "Because all charity logos must be green by law", "Because green is the most visible colour"], answer: "Because green is associated with nature, growth and environmental values" },
        ],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Logo Analysis Activity",
        instruction: "Choose three logos you see regularly — on packaging, clothing, vehicles or signs. Analyse each one.",
        parentTip: "Logo analysis can be done anywhere — the supermarket, the school bag, the television. Logos are everywhere, making them an endlessly available resource for media literacy practice.",
        prompts: [
          { text: "Logo 1 — brand name, description, colours and shapes used, what it communicates:", type: "lines", lines: 4 },
          { text: "Logo 2 — brand name, description, colours and shapes used, what it communicates:", type: "lines", lines: 4 },
          { text: "Logo 3 — brand name, description, colours and shapes used, what it communicates:", type: "lines", lines: 4 },
        ],
      },
      // 68
      {
        type: "sorting" as const,
        title: "Sort the Shape Associations",
        instruction: "Sort each shape description into what it most commonly communicates in design.",
        parentTip: "Shape psychology in design — the study of how shapes affect emotion and perception — is a real field that informs branding, architecture, product design and media. Even Year 5 students can apply these concepts with practice.",
        columns: ["Stability / Trust", "Energy / Movement", "Creativity / Playfulness", "Luxury / Elegance"],
        items: [
          { label: "A solid horizontal rectangle or square" },
          { label: "A flowing, organic curved shape" },
          { label: "Sharp diagonal lines and angles" },
          { label: "A thin, elongated vertical shape" },
          { label: "A burst or starburst pattern" },
          { label: "Irregular, hand-drawn shapes" },
          { label: "A simple, balanced circle" },
          { label: "Symmetrical, fine geometric lines" },
        ],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Design Your Own Logo",
        instruction: "Design a logo for a made-up organisation of your choice. Sketch it and write a brief explanation of every design choice you made.",
        prompts: [
          { text: "Organisation name and purpose:", type: "lines", lines: 2 },
          { text: "Sketch your logo here:", type: "box", lines: 10 },
          { text: "Colour choices and why:", type: "lines", lines: 2 },
          { text: "Shape choices and why:", type: "lines", lines: 2 },
          { text: "Font choice (if any) and why:", type: "lines", lines: 2 },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Home Activity: Media Critic for a Week",
        instruction: "Try these activities during the week to keep developing your media literacy skills.",
        parentTip: "Doing this alongside your child — sharing your own observations — models the habit of thinking critically about media without making it feel like a test.",
        suggestions: [
          "Find a magazine or newspaper advertisement and write down three design choices the creator made. For each one, explain what effect it has on the audience.",
          "Compare the front pages of two different newspapers on the same day. What is the main story on each? What images did they choose? What does the difference tell you about each publication's audience or perspective?",
          "Notice five logos this week. For each one, consider: what does the colour choice communicate? What mood does the shape or font create?",
          "Watch a two-minute segment of a documentary or news story. Pause and discuss: what music is playing and how does it affect the mood? What camera shots are used? What do you think is left out of the story?",
          "Find an advertisement online that targets a different audience to you. Describe who the audience is and explain three design choices that target that audience specifically.",
        ],
      },
      // 71
      {
        type: "open-response" as const,
        title: "Critically Evaluate an Infographic",
        instruction: "Find an infographic online or in a magazine (an infographic presents data visually using charts, icons and short text). Analyse it using the questions below.",
        parentTip: "Infographics are among the most shared media texts online — and also among the most misleading when poorly made. Learning to evaluate them critically is an essential digital literacy skill.",
        prompts: [
          { text: "Infographic topic and source:", type: "lines", lines: 1 },
          { text: "Q1: What data or information does the infographic present?", type: "lines", lines: 3 },
          { text: "Q2: Is the data clearly sourced? Where does it come from?", type: "lines", lines: 2 },
          { text: "Q3: Are the visual representations accurate? (E.g. do the sizes of bars or circles accurately reflect the numbers?)", type: "lines", lines: 3 },
          { text: "Q4: Does the infographic tell a simple story, or does it oversimplify a complex issue?", type: "lines", lines: 3 },
        ],
      },
      // 72
      {
        type: "multiple-choice" as const,
        title: "How Graphs Can Mislead",
        instruction: "Choose the best answer for each question about misleading graphs in media.",
        parentTip: "Misleading graphs are common in media and political communication. Developing the habit of reading graphs critically — checking the axes, looking for missing context — is a powerful analytical skill.",
        questions: [
          { prompt: "A bar graph shows that company profits rose from $100 million to $101 million. The y-axis is scaled to start at $99 million, making the rise look enormous. What is the problem?", options: ["The company made too much money", "The graph is technically accurate but the scale is designed to exaggerate the change", "The graph is clearly labelled and therefore cannot be misleading", "The graph should show negative numbers"], answer: "The graph is technically accurate but the scale is designed to exaggerate the change" },
          { prompt: "A pie chart shows that 'most Australians support this policy' but does not state how many people were surveyed or how the question was worded. What is the problem?", options: ["Pie charts are never reliable", "The graphic is missing critical context — sample size and question wording both affect the result", "The pie chart is clearly misleading if it uses more than three sections", "The colour choices are inappropriate"], answer: "The graphic is missing critical context — sample size and question wording both affect the result" },
        ],
      },
      // 73
      {
        type: "open-response" as const,
        title: "Extension: Write a Media Critique",
        instruction: "Choose one media text — an advertisement, editorial, infographic, news article or documentary segment — and write a full media critique of two or three paragraphs. Analyse the purpose, audience, design choices, techniques and any potential bias.",
        parentTip: "A media critique is a formal analysis that shows a student can identify design choices, name the techniques being used and evaluate how effectively they serve the purpose and audience. This is an extension task appropriate for students who are ready for secondary school level media study.",
        prompts: [{ text: "My media critique:", type: "box", lines: 16 }],
      },
      // 74
      {
        type: "true-false" as const,
        title: "True or False: Media Literacy Summary",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Every design choice in a media text — colour, font, image, layout — communicates meaning.", answer: true },
          { text: "Media texts are always created with a specific audience and purpose in mind.", answer: true },
          { text: "Photographs in news media and advertising are always neutral and objective.", answer: false },
          { text: "Understanding how media texts work makes you a more aware and critical consumer of media.", answer: true },
          { text: "The ability to create your own media texts is separate from the ability to analyse others' texts.", answer: false },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Protecting Young Media Consumers",
        content: "Children who understand how media works are significantly better protected from the negative effects of advertising, misinformation and social media manipulation. The most important thing you can do is model critical media consumption yourself — by pausing to ask questions out loud, by checking sources before sharing, and by talking openly about why some media makes you feel uncomfortable or suspicious. You do not need to be a media expert to raise a media-literate child. You just need to stay curious and keep asking questions.",
      },
      // 76
      {
        type: "multiple-choice" as const,
        title: "Mastery Check: Design Principles",
        instruction: "Demonstrate your mastery of design principles by choosing the best answer for each question.",
        questions: [
          { prompt: "A designer places the most important information in the largest font at the top of the page. What design principle are they applying?", options: ["Colour psychology", "Visual hierarchy", "Typography alignment", "White space management"], answer: "Visual hierarchy" },
          { prompt: "A designer leaves a large area of blank space around a single product image. What effect is this trying to create?", options: ["It shows the product has no context", "It focuses the viewer's attention on the product and creates a sense of elegance or exclusivity", "It indicates the design is unfinished", "It makes the product appear smaller"], answer: "It focuses the viewer's attention on the product and creates a sense of elegance or exclusivity" },
          { prompt: "A designer uses the same font, colour palette and layout style across all of a brand's materials. What design principle is this?", options: ["Contrast", "Visual hierarchy", "Consistency — creating a recognisable brand identity", "Framing"], answer: "Consistency — creating a recognisable brand identity" },
        ],
      },
      // 77
      {
        type: "open-response" as const,
        title: "Spot Five Design Choices",
        instruction: "Look at any printed media text — a magazine cover, a product package, a poster or a book cover. Identify and analyse five deliberate design choices.",
        prompts: [
          { text: "Media text I am analysing:", type: "lines", lines: 1 },
          { text: "Design Choice 1 (what it is and what it communicates):", type: "lines", lines: 2 },
          { text: "Design Choice 2:", type: "lines", lines: 2 },
          { text: "Design Choice 3:", type: "lines", lines: 2 },
          { text: "Design Choice 4:", type: "lines", lines: 2 },
          { text: "Design Choice 5:", type: "lines", lines: 2 },
        ],
      },
      // 78
      {
        type: "sorting" as const,
        title: "Media Text Analysis Toolkit",
        instruction: "Sort each question into the correct analysis category: Purpose, Audience, Design, or Credibility.",
        parentTip: "This sorting activity consolidates the key questions of media analysis into a reusable toolkit. If your child can apply these four categories to any media text independently, they are media literate at a secondary school level.",
        columns: ["Purpose", "Audience", "Design", "Credibility"],
        items: [
          { label: "Who made this and why?" },
          { label: "Who is this designed to reach?" },
          { label: "What colours and fonts are used and why?" },
          { label: "Is the information verified and sourced?" },
          { label: "What action is the text designed to produce?" },
          { label: "What values or assumptions does the audience need to share?" },
          { label: "What is the focal point and how does the layout guide the eye?" },
          { label: "Is the perspective presented balanced or one-sided?" },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Final Project: Design and Analyse",
        instruction: "Create a final media project. Design a one-page advertisement or information poster on a topic of your choice. Then write a 200-word analysis explaining every design choice you made and why.",
        parentTip: "This combined creation-and-analysis task is the highest level of media literacy — students demonstrate both their ability to make deliberate design choices and to articulate the thinking behind them. Display the finished work.",
        prompts: [
          { text: "PART 1 — My design (sketch or describe the poster fully):", type: "box", lines: 14 },
          { text: "PART 2 — My design analysis (explain every choice you made):", type: "box", lines: 12 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The World Is a Text",
        content: "Everything designed by a human to be seen, heard or read is a text. The font on your cereal box, the angle of the photo on a campaign poster, the colour of an emergency sign, the music in a shopping centre, the layout of a supermarket — all of these are designed. All of them communicate. All of them make you feel something. The world is not simply a neutral backdrop — it is a richly designed communicative environment created by people with purposes, audiences and intentions. Media literacy is the ability to read that environment as actively and critically as you read a book. You have now developed some of the most important tools for doing exactly that. Use them. The world is full of texts waiting to be read.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Extension: The Ethics of Image Manipulation",
        instruction: "Consider the question: Is it ethical to manipulate photographs used in news media? Write a persuasive paragraph arguing either FOR (some manipulation is acceptable) or AGAINST (no manipulation should occur).",
        parentTip: "This extension activity connects media literacy to ethics — a rich philosophical territory. There are genuine disagreements among media professionals about when, if ever, image manipulation in news is acceptable. Encourage your child to research the issue before forming a view.",
        prompts: [{ text: "My position:", type: "lines", lines: 1 }, { text: "My persuasive paragraph:", type: "box", lines: 10 }],
      },
      // 82
      {
        type: "multiple-choice" as const,
        title: "Advanced Concept Check",
        instruction: "Choose the best answer for each advanced media literacy question.",
        questions: [
          { prompt: "What is 'agenda-setting' in media theory?", options: ["The order in which stories are written in a newsroom", "The idea that media organisations tell audiences not what to think, but what to think about — by choosing which issues to cover prominently", "A list of topics a journalist must cover in a day", "The editorial planning calendar of a news organisation"], answer: "The idea that media organisations tell audiences not what to think, but what to think about — by choosing which issues to cover prominently" },
          { prompt: "What is 'representation' in media?", options: ["A legal document about copyright", "How media texts portray different groups — such as women, cultural groups or young people — and whether those portrayals are accurate and fair", "The number of copies sold of a publication", "How many languages a media text is translated into"], answer: "How media texts portray different groups — such as women, cultural groups or young people — and whether those portrayals are accurate and fair" },
        ],
      },
      // 83
      {
        type: "open-response" as const,
        title: "Who Is Missing? Representation in Media",
        instruction: "Think about a type of media you consume regularly (news, books, films, advertisements). Answer the reflection questions about representation.",
        parentTip: "Questions about representation — who is shown, how they are shown, who is absent — are some of the richest media literacy discussions possible. These questions develop both critical thinking and empathy.",
        prompts: [
          { text: "Type of media:", type: "lines", lines: 1 },
          { text: "Q1: What types of people appear most frequently in this media? Describe them.", type: "lines", lines: 3 },
          { text: "Q2: What groups of people are rarely seen or absent? Why might this be?", type: "lines", lines: 3 },
          { text: "Q3: How might different audiences feel when they see themselves represented — or not represented — in this media?", type: "lines", lines: 3 },
        ],
      },
      // 84
      {
        type: "fill-in-blank" as const,
        title: "Advanced Media Concepts",
        instruction: "Fill in each blank with the correct advanced media term.",
        sentences: [
          { text: "The theory that news organisations influence public priorities by deciding which stories to cover prominently is called _____ theory.", blanks: ["agenda-setting"] },
          { text: "When only a narrow range of groups, viewpoints or experiences are shown in media, this is called limited _____.", blanks: ["representation"] },
          { text: "A 'filter bubble' is created when _____ show users only content similar to what they have already engaged with.", blanks: ["algorithms"] },
          { text: "The deliberate placement of a brand's product in a film or TV show without it being presented as an advertisement is called _____ placement.", blanks: ["product"] },
          { text: "AI-generated fake video or audio designed to look like real footage of a real person is called a _____.", blanks: ["deepfake"] },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Media Literacy Self-Assessment",
        instruction: "Look back over all your work in this worksheet. Complete the self-assessment questions.",
        prompts: [
          { text: "Q1: Name three specific skills you have developed in this worksheet.", type: "lines", lines: 4 },
          { text: "Q2: What is the most interesting or surprising thing you learned about how media works?", type: "lines", lines: 3 },
          { text: "Q3: Which activities challenged you the most and why?", type: "lines", lines: 3 },
        ],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Advanced Media Literacy",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Agenda-setting theory suggests that media tells us what to think about by deciding which stories receive prominence.", answer: true },
          { text: "Representation in media is only important for groups who are shown negatively.", answer: false },
          { text: "Social media algorithms create filter bubbles by showing users increasingly similar content.", answer: true },
          { text: "Product placement is a form of advertising that is always clearly disclosed to audiences.", answer: false },
          { text: "A media-literate person is better equipped to evaluate both what is shown in media texts and what is left out.", answer: true },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Write a Brief Media Analysis",
        instruction: "Choose any one media text — advertisement, news article, poster, book cover or film trailer — and write a brief (150–200 word) formal media analysis. Include: purpose, audience, key design choices and your evaluation of how effectively the text achieves its purpose.",
        prompts: [{ text: "My media analysis:", type: "box", lines: 14 }],
      },
      // 88
      {
        type: "matching" as const,
        title: "Media Literacy: Complete the Pairs",
        instruction: "Match each media literacy concept to its key question.",
        left: ["Purpose", "Audience", "Codes and conventions", "Representation", "Values and ideology"],
        right: ["Whose view of the world does this text reflect?", "Who made this and what are they trying to achieve?", "Who is this designed to reach and how does it appeal to them?", "What are the shared rules and expectations of this text type?", "Who is shown and whose stories are told?"],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Teach It Back: Media Literacy",
        instruction: "Explain to a parent or younger sibling what the four key questions of media analysis are, and give an example of how you would apply them to a real text.",
        parentTip: "Teaching back is the deepest form of learning. If your child can explain these concepts in their own words and apply them to a real example spontaneously, they have genuinely internalised them.",
        prompts: [{ text: "My explanation of the four key questions and how to use them:", type: "box", lines: 10 }],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: A Lifetime of Critical Viewing",
        content: "The world your child is growing up in is saturated with media — news, advertising, social media, streaming video, games, podcasts, apps and more. The young person who can read all of these critically — asking who made it, for whom, with what purpose and with what effect — will navigate this world with far greater agency than one who consumes passively. Media literacy is not about being suspicious of all media. It is about being curious, aware and empowered. You have now given your child a substantial toolkit for exactly that. Keep the conversations going.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Extension: Design a Media Literacy Poster",
        instruction: "Design a poster that teaches younger students the four key questions of media literacy. Your poster should be visually engaging and easy to understand. Plan it here and sketch the design.",
        prompts: [
          { text: "My four key questions (write them clearly):", type: "lines", lines: 4 },
          { text: "Sketch of my poster:", type: "box", lines: 12 },
          { text: "Explain three deliberate design choices you made:", type: "lines", lines: 3 },
        ],
      },
      // 92
      {
        type: "multiple-choice" as const,
        title: "Final Mastery Check: Media Literacy",
        instruction: "Demonstrate your mastery by choosing the best answer for each question.",
        questions: [
          { prompt: "What is the most important question a media-literate person asks about any media text?", options: ["Is it entertaining?", "Who made this, for what purpose, for what audience — and what is left out?", "Is it new?", "Is it free to access?"], answer: "Who made this, for what purpose, for what audience — and what is left out?" },
          { prompt: "Why is it important to be a critical consumer of media rather than a passive one?", options: ["Critical consumers use less data on their devices", "Passive viewers are always happier", "Critical consumers are better able to evaluate what is true, fair and in their interests — and resist manipulation", "Critical consumers always disagree with everything they read"], answer: "Critical consumers are better able to evaluate what is true, fair and in their interests — and resist manipulation" },
          { prompt: "What does it mean to say that a media text is 'constructed'?", options: ["It was built using physical materials", "It was made by someone who made choices about what to include, exclude and how to present it", "It was published before the internet existed", "It was designed by an algorithm"], answer: "It was made by someone who made choices about what to include, exclude and how to present it" },
        ],
      },
      // 93
      {
        type: "open-response" as const,
        title: "Your Best Media Analysis",
        instruction: "Write the most thorough and detailed media analysis you can produce. Choose a media text that genuinely interests you. Address all four key questions and write approximately 200 words.",
        prompts: [{ text: "Media text I am analysing:", type: "lines", lines: 1 }, { text: "My analysis:", type: "box", lines: 16 }],
      },
      // 94
      {
        type: "fill-in-blank" as const,
        title: "Final Vocabulary Review",
        instruction: "Fill in each blank using the most precise media literacy term you know.",
        sentences: [
          { text: "The way a designer arranges and sizes elements to show order of importance is called visual _____.", blanks: ["hierarchy"] },
          { text: "A text that uses words, images, sound and layout together is called a _____ text.", blanks: ["multimodal"] },
          { text: "Selecting which part of a scene to show in a photograph or film is called _____.", blanks: ["framing"] },
          { text: "The group of people a media text is designed to reach is called the target _____.", blanks: ["audience"] },
          { text: "AI-generated fake video footage that appears to show a real person is called a _____.", blanks: ["deepfake"] },
        ],
      },
      // 95
      {
        type: "home-activity" as const,
        title: "Home Activity: The Month of Conscious Media",
        instruction: "For one month, practise applying media literacy every day. Use these daily challenges to build the habit.",
        parentTip: "The goal is not to make media scary or exhausting — it is to build a quiet, habitual awareness. Over time, this awareness becomes effortless. A child who asks 'who made this and why?' before accepting a media claim is developing one of the most important thinking habits of the 21st century.",
        suggestions: [
          "WEEK 1: Every time you see an advertisement, name one technique it uses and who the intended audience is.",
          "WEEK 2: When reading or watching news, ask: What is the main story? Who is shown in the photographs? What is not being covered?",
          "WEEK 3: Choose one social media platform and observe: What content is the algorithm showing you? Is it balanced or one-sided? How does it make you feel?",
          "WEEK 4: Find one example of excellent media design and one example of misleading media design. Write a one-paragraph analysis of each.",
          "FINAL CHALLENGE: Share one media literacy observation with a family member each day. Turn it into a conversation.",
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Reflection: How Has Your Media Viewing Changed?",
        instruction: "Look back at where you started this worksheet and where you are now. Write a reflection on how your thinking about media has changed.",
        prompts: [
          { text: "Q1: Before this worksheet, how did you 'read' media texts?", type: "lines", lines: 3 },
          { text: "Q2: What new questions do you now automatically ask when you encounter a media text?", type: "lines", lines: 3 },
          { text: "Q3: Has studying media literacy made you enjoy media more, less, or differently? Explain.", type: "lines", lines: 3 },
        ],
      },
      // 97
      {
        type: "multiple-choice" as const,
        title: "Mastery Challenge: The Complete Media Literacy Toolkit",
        instruction: "These questions test your overall mastery of media literacy.",
        questions: [
          { prompt: "A student sees a photograph in a newspaper that shows a politician standing in front of a large cheering crowd. They think: 'This photograph shows that the politician is very popular.' What media literacy question would a critical reader also ask?", options: ["How do I subscribe to the newspaper?", "Was this the only photograph available, or was it chosen to create a particular impression?", "What is the politician's favourite colour?", "How many people are in the crowd exactly?"], answer: "Was this the only photograph available, or was it chosen to create a particular impression?" },
          { prompt: "Which of these statements best describes what it means to be 'media literate'?", options: ["Able to read and write media text very quickly", "Able to recognise, question and critically evaluate how media texts construct meaning, for whom and with what effect", "Interested in journalism and television production", "Sceptical of all media texts and unwilling to trust any of them"], answer: "Able to recognise, question and critically evaluate how media texts construct meaning, for whom and with what effect" },
        ],
      },
      // 98
      {
        type: "open-response" as const,
        title: "Your Most Interesting Media Discovery",
        instruction: "Describe the most interesting or surprising thing you discovered about how media works during this worksheet. Explain what it was, why it surprised you and how it has changed the way you think.",
        prompts: [{ text: "My most interesting media discovery:", type: "box", lines: 12 }],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Create a Final Media Text",
        instruction: "Create your best media text — a poster, digital design description, book cover plan or advertisement — applying everything you have learned. Then write a full analytical explanation of every design choice.",
        prompts: [
          { text: "My media text (sketch or full description):", type: "box", lines: 14 },
          { text: "My analytical explanation of every design choice:", type: "box", lines: 12 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Now You Are the Designer",
        content: "You have spent 100 activities learning to read the world as a designed communication space. You can identify visual hierarchy, decode colour choices, recognise advertising techniques, evaluate source credibility, analyse camera angles and understand how algorithms shape what we see. But the most powerful next step is to become not just a reader of media but a maker of it. Every poster, video, article, presentation, social media post and speech you create will be shaped by the choices you make — about what to include, who to speak to, what emotion to create and what truth to tell. Those choices are your responsibility. Use them to make things that are honest, clear and worthy of the attention your audience gives them. The world needs people who create media thoughtfully. Now you are one of them.",
      },
    ],
  },
  {
    slug: "reading-comprehension-informational",
    title: "Reading Comprehension: Informational Texts",
    strand: "Literacy",
    description:
      "Build reading comprehension strategies for informational texts including skimming, scanning, summarising and evaluating author purpose.",
    learningGuide: {
      concept:
        "Strategic readers use a toolkit of comprehension strategies: skimming (reading quickly to get the gist), scanning (searching for specific information), summarising (capturing the main idea in your own words), and evaluating (judging the author's purpose, reliability and point of view).",
      activation:
        "Open a non-fiction article together. Ask your child to skim-read for 30 seconds and then tell you the main topic without looking back. Then ask them to scan for one specific fact — such as a date or name — as fast as they can.",
      check:
        "After the worksheet, ask your child to apply all four strategies to one article from ABC Education or a library book, and explain what each strategy helped them understand.",
    },
    lesson: {
      title: "The Smart Reader's Toolkit",
      objective:
        "Apply skimming, scanning, summarising and evaluating strategies to an informational text.",
      materials: [
        "This worksheet",
        "A pencil and highlighter",
        "A non-fiction article (from the worksheet or a library book)",
      ],
      intro: {
        title: "Reading Is Not Just One Skill",
        script:
          "Did you know that professional researchers and journalists do not always read every word? They have a toolkit of reading strategies they choose from depending on their purpose. If they want the general idea quickly, they skim — letting their eyes move fast over headings and opening sentences. If they need to find a specific fact, they scan — moving their eyes like a searchlight until they find the target. If they need to remember the main idea, they summarise — capturing it in their own words. And they always evaluate — asking who wrote this, why, and whether it is reliable.",
        action:
          "Demonstrate each strategy with a short article. Show what your eyes do differently when skimming versus scanning versus reading carefully for summary.",
      },
      mainActivity: {
        title: "Apply the Toolkit",
        script:
          "Now we are going to apply all four strategies to the informational text on the worksheet. First we will skim for 30 seconds. Then I will ask you a comprehension question that requires scanning. Then you will write a three-sentence summary. Finally, we will evaluate together — who wrote this text? What is their purpose? Is it trying to inform, persuade or entertain?",
        action:
          "Time each strategy phase. Keep the pace energetic to simulate real-world research conditions.",
      },
      wrapUp: {
        title: "Author Purpose",
        script:
          "Every text has a purpose. Informational texts usually aim to inform — but sometimes they are also trying to persuade you of something. A text about the dangers of plastic pollution informs you of facts, but the author also wants you to care and perhaps to act. Understanding the author's purpose helps you read critically rather than passively accepting everything you read.",
        action:
          "Discuss the author's purpose of the worksheet text together and compare it to the purpose of two other texts your child has read this week.",
      },
      parentTip:
        "Subscribe to a free children's news service such as Behind the News from ABC Education. Reading short, real-world informational texts regularly is the most effective way to build comprehension skills.",
      extension:
        "Choose three informational texts on the same topic from different sources. Evaluate each for author purpose and reliability. Identify any differences in the facts they present and explain why they might differ.",
      resources: [
        {
          title: "ABC Education — Behind the News",
          url: "https://www.abc.net.au/btn/",
          description:
            "Age-appropriate informational texts and videos for comprehension practice.",
        },
        {
          title: "ReadWriteThink — Summarising Strategies",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/using-nonfiction-summarizing-informational",
          description:
            "Lesson on summarising and evaluating informational texts.",
        },
        {
          title: "Khan Academy — Reading Informational Text",
          url: "https://www.khanacademy.org/ela/cc-5th-grade-reading-vocab/xe2c54a99ede11c03:reading-informational-text",
          description:
            "Year 5 level comprehension exercises on informational texts.",
        },
      ],
    },
    activities: [
      // 1
      {
        type: "multiple-choice" as const,
        title: "What Are Reading Comprehension Strategies?",
        instruction: "Choose the best answer for each question about reading strategies.",
        parentTip: "Strategic readers choose the right tool for the right job. Building a toolkit of comprehension strategies — and knowing when to use each one — is one of the most powerful reading habits a student can develop.",
        questions: [
          { prompt: "What is 'skimming' as a reading strategy?", options: ["Reading every word very slowly and carefully", "Moving your eyes quickly over a text to get the general topic or gist", "Looking for a specific word or number in the text", "Writing a summary of the text after reading"], answer: "Moving your eyes quickly over a text to get the general topic or gist" },
          { prompt: "What is 'scanning' as a reading strategy?", options: ["Reading aloud to check pronunciation", "Moving your eyes quickly over a text searching for specific information", "Reading every sentence twice to improve memory", "Drawing a diagram of the text's structure"], answer: "Moving your eyes quickly over a text searching for specific information" },
          { prompt: "What is 'summarising' as a reading strategy?", options: ["Copying the text word for word", "Underlining every important word in the text", "Capturing the main idea of a text in your own words, leaving out unnecessary detail", "Reading the first and last sentence only"], answer: "Capturing the main idea of a text in your own words, leaving out unnecessary detail" },
        ],
      },
      // 2
      {
        type: "matching" as const,
        title: "Match the Reading Strategy to Its Purpose",
        instruction: "Draw a line to match each reading strategy with the situation where a reader would use it.",
        parentTip: "Metacognition — knowing which strategy to use and when — is a hallmark of skilled readers. Practise asking: What strategy would you use if you needed to find a specific date in a long article?",
        left: ["Skimming", "Scanning", "Summarising", "Evaluating", "Close reading", "Inferencing"],
        right: ["You want to find a specific name or statistic quickly", "You need to check whether a source is reliable and why it was written", "You want to understand every detail of a complex section of text", "You want to capture the main idea of a passage in your own words", "You read quickly to get the general topic before deciding whether to read further", "You use clues in the text to work out what the author implies but does not state"],
      },
      // 3
      {
        type: "true-false" as const,
        title: "True or False: Reading Strategies",
        instruction: "Mark each statement True or False.",
        parentTip: "Discuss each answer with your child. Understanding why a strategy is or is not useful in a given situation is more valuable than memorising definitions.",
        statements: [
          { text: "Skimming and scanning are the same reading strategy.", answer: false },
          { text: "A good reader uses different strategies depending on their purpose.", answer: true },
          { text: "Summarising a text always means copying its first paragraph.", answer: false },
          { text: "Evaluating a text includes asking who wrote it and why.", answer: true },
          { text: "Close reading is used when you need to understand a complex section of text in detail.", answer: true },
        ],
      },
      // 4
      {
        type: "open-response" as const,
        title: "Skim and Summarise: The Great Barrier Reef",
        instruction: "Skim the passage quickly (30 seconds). Then read it carefully. Write a three-sentence summary in your own words.",
        prompts: [
          { text: "PASSAGE:\nThe Great Barrier Reef stretches over 2,300 kilometres along the Queensland coast, making it the world's largest coral reef system. It is home to more than 1,500 species of fish, 4,000 types of mollusc and over 30 species of whale and dolphin. Despite its scale, the reef is under serious threat. Rising sea temperatures caused by climate change have led to mass coral bleaching events — most recently in 2016, 2017 and 2020. When corals bleach, they expel the algae that give them colour and nutrients. Without intervention, large sections of the reef could be permanently damaged within decades.\n\nMy three-sentence summary:", type: "lines", lines: 6 },
        ],
      },
      // 5
      {
        type: "open-response" as const,
        title: "Scan for Specific Information",
        instruction: "Scan the passage above to find the answers as quickly as possible. Move your eyes to find the specific information — do not re-read the whole text.",
        parentTip: "Time your child's scanning — see how quickly they can find each fact. Speed with accuracy is the goal. This skill is invaluable for tests and research tasks.",
        prompts: [
          { text: "How many species of fish live in the Great Barrier Reef?", type: "lines", lines: 1 },
          { text: "In which years did mass coral bleaching events occur?", type: "lines", lines: 1 },
          { text: "How long is the Great Barrier Reef?", type: "lines", lines: 1 },
          { text: "What do corals expel during bleaching?", type: "lines", lines: 1 },
        ],
      },
      // 6
      {
        type: "open-response" as const,
        title: "Evaluate the Author's Purpose",
        instruction: "Answer these questions about the author's purpose and point of view in the Great Barrier Reef passage.",
        prompts: [
          { text: "What is the author's main purpose: to inform, to persuade, or to entertain? Explain.", type: "lines", lines: 3 },
          { text: "Does the author have a point of view on the issue? What language choices reveal this?", type: "lines", lines: 3 },
          { text: "Is this text reliable? What would you check to verify the facts?", type: "lines", lines: 3 },
        ],
      },
      // 7
      {
        type: "sequence" as const,
        title: "Order the Research Process",
        instruction: "Number these research steps 1 to 6 in the most logical order.",
        parentTip: "Real research rarely follows a perfectly linear path — readers often loop back to earlier steps. This activity teaches the ideal process as a starting point.",
        items: [
          { label: "Skim several sources quickly to decide which are most relevant." },
          { label: "Evaluate each source for reliability, author purpose and potential bias." },
          { label: "Choose a research question or topic to investigate." },
          { label: "Scan chosen sources for specific facts and evidence to support your points." },
          { label: "Summarise key information from each source in your own words." },
          { label: "Close-read the most important sections to understand the detail." },
        ],
      },
      // 8
      {
        type: "multiple-choice" as const,
        title: "Skimming vs Scanning",
        instruction: "Choose whether each task requires skimming or scanning.",
        questions: [
          { prompt: "You need to find out whether an article discusses renewable energy before deciding whether to read it.", options: ["Skimming — quickly reading to get the general topic", "Scanning — searching for specific information"], answer: "Skimming — quickly reading to get the general topic" },
          { prompt: "You need to find the exact year that a law was passed in a long history text.", options: ["Skimming — quickly reading to get the general topic", "Scanning — searching for specific information"], answer: "Scanning — searching for specific information" },
          { prompt: "You are choosing between five library books on the same topic and need to identify which ones are most useful.", options: ["Skimming — quickly reading to get the general topic", "Scanning — searching for specific information"], answer: "Skimming — quickly reading to get the general topic" },
          { prompt: "You need to find the name of a specific scientist mentioned in a science report.", options: ["Skimming — quickly reading to get the general topic", "Scanning — searching for specific information"], answer: "Scanning — searching for specific information" },
        ],
      },
      // 9
      {
        type: "open-response" as const,
        title: "Practise Skimming",
        instruction: "Skim the passage below for 45 seconds. Then cover it and answer the questions from memory.",
        prompts: [
          { text: "PASSAGE:\nAustralia's Indigenous people have the oldest continuous culture in the world, dating back more than 60,000 years. Across this vast continent, over 500 distinct language groups exist, each with unique stories, traditions and knowledge systems. Indigenous Australians developed sophisticated methods for land management, including cultural burning — a practice of controlled burning that reduces the risk of catastrophic bushfires and promotes the growth of certain native plants. These practices are increasingly recognised by land managers and scientists as having modern environmental applications.\n\nQ1: What is the main topic of this passage?", type: "lines", lines: 2 },
          { text: "Q2: What is one specific fact you remember from your skim?", type: "lines", lines: 2 },
          { text: "Q3: What do you think the author's purpose is?", type: "lines", lines: 2 },
        ],
      },
      // 10
      {
        type: "open-response" as const,
        title: "Practise Scanning",
        instruction: "Scan the passage above to find specific information as quickly as possible.",
        parentTip: "Scanning is a targetted eye movement — looking for a specific shape of information (a date, a name, a number) rather than reading for meaning. With practice, it becomes very fast.",
        prompts: [
          { text: "How many distinct language groups exist across Australia?", type: "lines", lines: 1 },
          { text: "How many years does Indigenous Australian culture date back?", type: "lines", lines: 1 },
          { text: "What is cultural burning?", type: "lines", lines: 2 },
          { text: "What benefit does cultural burning provide?", type: "lines", lines: 2 },
        ],
      },
      // 11
      {
        type: "fill-in-blank" as const,
        title: "Reading Strategy Vocabulary",
        instruction: "Fill in each blank with the correct reading strategy term: close reading, evaluating, skimming, summarising, scanning, inferencing.",
        sentences: [
          { text: "Reading quickly to get the general topic of a text is called _____.", blanks: ["skimming"] },
          { text: "Searching for specific information in a text without reading every word is called _____.", blanks: ["scanning"] },
          { text: "Capturing the main idea of a text in your own words is called _____.", blanks: ["summarising"] },
          { text: "Judging the reliability, purpose and bias of a text is called _____.", blanks: ["evaluating"] },
          { text: "Carefully analysing every word and sentence in a complex section is called _____.", blanks: ["close reading"] },
          { text: "Using clues in the text to work out what the author implies but does not state is called _____.", blanks: ["inferencing"] },
        ],
      },
      // 12
      {
        type: "true-false" as const,
        title: "True or False: Informational Text Features",
        instruction: "Mark each statement True or False.",
        parentTip: "Informational text features are designed to make complex information accessible. Recognising and using them makes both reading and research much more efficient.",
        statements: [
          { text: "Subheadings in an informational text help the reader navigate to the section they need.", answer: true },
          { text: "A table of contents always appears at the end of a non-fiction book.", answer: false },
          { text: "A glossary in an informational text provides definitions for technical vocabulary.", answer: true },
          { text: "Photographs and diagrams in informational texts are always purely decorative.", answer: false },
          { text: "An index at the back of a book helps readers find specific topics quickly without reading the whole book.", answer: true },
        ],
      },
      // 13
      {
        type: "matching" as const,
        title: "Match the Text Feature to Its Purpose",
        instruction: "Match each informational text feature to its purpose for the reader.",
        left: ["Table of contents", "Subheading", "Glossary", "Caption", "Index", "Diagram with labels"],
        right: ["Shows how something works or is structured visually", "Lists chapter titles and page numbers so readers can navigate to specific sections", "Introduces a new section and signals what it will cover", "Provides an alphabetical list of topics and their page numbers for quick reference", "Explains the meaning of technical vocabulary used in the text", "Provides a brief explanation of what a photograph or image shows"],
      },
      // 14
      {
        type: "open-response" as const,
        title: "Using Text Features",
        instruction: "Imagine you are reading a non-fiction book about climate change. Explain which text feature you would use to find each piece of information, and why.",
        parentTip: "Efficient research depends on knowing which feature to use for each purpose. Students who can navigate non-fiction texts confidently are far more effective researchers across all subjects.",
        prompts: [
          { text: "You want to know whether the book covers carbon emissions. Text feature you would use and why:", type: "lines", lines: 3 },
          { text: "You want to find the definition of 'greenhouse gas'. Text feature you would use and why:", type: "lines", lines: 3 },
          { text: "You want to quickly find every page that mentions the Great Barrier Reef. Text feature you would use and why:", type: "lines", lines: 3 },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Non-Fiction Reading Habit",
        content: "Research consistently shows that children who read non-fiction regularly develop significantly stronger vocabulary, general knowledge and comprehension skills than those who read only fiction. This does not mean abandoning fiction — it means adding non-fiction. A good starting point is 10–15 minutes of non-fiction reading three times per week. Encyclopaedia entries, science articles, news stories written for children and quality information websites are all excellent sources. The ABC Education website (abc.net.au/education) offers free, Australian-relevant informational texts at upper primary level.",
      },
      // 16
      {
        type: "open-response" as const,
        title: "Author Purpose: Identify and Justify",
        instruction: "Read each description of a text and identify the author's most likely purpose. Justify your answer with evidence from the description.",
        prompts: [
          { text: "TEXT A: 'How to care for a native garden: a step-by-step guide from the Australian Native Plants Society.'\nAuthor's purpose and justification:", type: "lines", lines: 3 },
          { text: "TEXT B: 'Why the government must act now to save the Murray-Darling River system' — an opinion piece by an environmental scientist.\nAuthor's purpose and justification:", type: "lines", lines: 3 },
          { text: "TEXT C: 'A history of Australian explorers: the journeys, discoveries and hardships of those who mapped a continent' — a history reference book.\nAuthor's purpose and justification:", type: "lines", lines: 3 },
        ],
      },
      // 17
      {
        type: "sorting" as const,
        title: "Sort by Author Purpose",
        instruction: "Sort each text description by the author's primary purpose.",
        parentTip: "Many texts serve more than one purpose — a nature documentary both informs and entertains; a health brochure informs and persuades. Encourage your child to identify the dominant purpose.",
        columns: ["Primarily to inform", "Primarily to persuade", "Primarily to entertain", "Primarily to instruct"],
        items: [
          { label: "An encyclopaedia entry about the platypus" },
          { label: "A letter to the editor arguing for more funding for public libraries" },
          { label: "A recipe with step-by-step cooking instructions" },
          { label: "A science fiction novel set on a spaceship" },
          { label: "A government health brochure about healthy eating" },
          { label: "A school magazine article about a student's trip overseas" },
          { label: "A safety manual for operating laboratory equipment" },
          { label: "A persuasive speech arguing for school uniform reform" },
        ],
      },
      // 18
      {
        type: "multiple-choice" as const,
        title: "Evaluating Author Purpose",
        instruction: "Choose the best answer for each question about evaluating author purpose.",
        questions: [
          { prompt: "A website about the health benefits of a vitamin supplement is published by the company that manufactures the supplement. Why is this a concern?", options: ["The website is probably designed well", "The author has a financial interest in presenting the supplement positively, which may create bias", "Company websites are always the most reliable source", "The supplement must be effective if the company is talking about it"], answer: "The author has a financial interest in presenting the supplement positively, which may create bias" },
          { prompt: "A newspaper article includes interviews with three scientists who disagree about a new environmental policy. What does this tell you about the article's approach?", options: ["The article has no clear purpose", "The journalist is trying to present multiple perspectives on a complex issue", "The scientists must all be wrong", "The article is unreliable because scientists disagree"], answer: "The journalist is trying to present multiple perspectives on a complex issue" },
        ],
      },
      // 19
      {
        type: "open-response" as const,
        title: "Close Reading: Word Choice",
        instruction: "Read the sentence below. Identify two or three key word choices and explain what each one communicates about the author's perspective.",
        parentTip: "Close reading at the word level is one of the most powerful comprehension and analysis skills. A student who can explain why an author chose one word over another is reading at a genuinely advanced level.",
        prompts: [
          { text: "SENTENCE: 'Despite decades of urgent warnings from scientists, governments around the world have failed to take meaningful action to halt the catastrophic destruction of the world's remaining rainforests.'\n\nKey word 1 and what it communicates about the author's perspective:", type: "lines", lines: 3 },
          { text: "Key word 2 and what it communicates:", type: "lines", lines: 3 },
          { text: "Key word 3 and what it communicates:", type: "lines", lines: 3 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Reader Is Not Passive",
        content: "When you open a non-fiction text, you are not an empty vessel waiting to be filled. You are an active participant — bringing your own knowledge, experience and questions to the text. Strategic readers do not just absorb information. They question it, test it, connect it to what they already know and evaluate whether they trust it. The word 'comprehension' comes from the Latin for 'to grasp firmly'. True comprehension means not just understanding the words on the page, but grasping the ideas behind them — and knowing when to hold on and when to let go. Every informational text you read is a conversation. The author is making claims. Your job is to listen carefully and decide what to believe.",
      },
      // 21
      {
        type: "open-response" as const,
        title: "Write a Three-Sentence Summary",
        instruction: "Read this short passage about bees. Write a three-sentence summary in your own words. Focus on the most important ideas.",
        parentTip: "A three-sentence summary forces prioritisation — the student must decide what the most important ideas are. This is harder than it sounds and is one of the best comprehension exercises available.",
        prompts: [
          { text: "PASSAGE:\nBees are among the most important animals on Earth. As they fly from flower to flower collecting nectar and pollen, they transfer pollen between plants — a process called pollination. Without pollination, many of the foods we eat could not be produced. Approximately one third of all food consumed globally depends on bee pollination. Alarmingly, global bee populations have declined by between 10% and 40% in some species over the past decade. Threats include habitat loss, pesticide use, disease and climate change. Scientists and farmers are increasingly working together to protect bee populations through wildflower planting, reducing pesticide use and creating protected habitats.\n\nMy three-sentence summary:", type: "lines", lines: 6 },
        ],
      },
      // 22
      {
        type: "open-response" as const,
        title: "Scan for Specific Information: Bees",
        instruction: "Scan the bee passage above to answer these questions as quickly as possible.",
        prompts: [
          { text: "What fraction of global food depends on bee pollination?", type: "lines", lines: 1 },
          { text: "By how much have some bee populations declined?", type: "lines", lines: 1 },
          { text: "Name three threats to bee populations.", type: "lines", lines: 2 },
          { text: "What is one action scientists and farmers are taking to help bees?", type: "lines", lines: 1 },
        ],
      },
      // 23
      {
        type: "multiple-choice" as const,
        title: "Comprehension: The Bee Passage",
        instruction: "Answer these comprehension questions about the bee passage.",
        questions: [
          { prompt: "What is the main purpose of the bee passage?", options: ["To persuade readers to become beekeepers", "To inform readers about why bees are important and the threats they face", "To entertain readers with a story about bees", "To provide instructions for planting wildflowers"], answer: "To inform readers about why bees are important and the threats they face" },
          { prompt: "The word 'alarmingly' in the passage is an example of:", options: ["A technical scientific term", "A word that signals the author is describing something with concern or urgency", "A neutral, objective word choice", "A word that means 'not surprisingly'"], answer: "A word that signals the author is describing something with concern or urgency" },
          { prompt: "Based on the passage, which statement can be inferred about the future of global food supply?", options: ["Food production is not affected by bee populations", "If bee populations continue to decline, food security could be seriously threatened", "Bee pollination is only important for honey production", "Scientists believe bee populations will recover without any human intervention"], answer: "If bee populations continue to decline, food security could be seriously threatened" },
        ],
      },
      // 24
      {
        type: "true-false" as const,
        title: "True or False: About the Bee Passage",
        instruction: "Mark each statement True, False or Cannot Tell from the passage.",
        parentTip: "The 'Cannot Tell' option is important — it teaches students to distinguish between what a text says, what can be inferred, and what is not addressed at all.",
        statements: [
          { text: "Approximately one third of all food consumed globally depends on bee pollination.", answer: true },
          { text: "All bee species have declined by exactly 40% in the past decade.", answer: false },
          { text: "Honey bees are the only species that pollinate food crops.", answer: false },
          { text: "Wildflower planting is one strategy being used to support bee populations.", answer: true },
          { text: "Bees are currently threatened with total extinction within ten years.", answer: false },
        ],
      },
      // 25
      {
        type: "fill-in-blank" as const,
        title: "Summarising in Your Own Words",
        instruction: "Read each sentence from the bee passage. Rewrite it in your own words, keeping the same meaning but using different vocabulary.",
        parentTip: "Paraphrasing — restating information in one's own words — is an essential research skill that prevents plagiarism and demonstrates genuine understanding. It is also significantly harder than it appears.",
        sentences: [
          { text: "ORIGINAL: 'Without pollination, many of the foods we eat could not be produced.' IN MY OWN WORDS: _____.", blanks: [""] },
          { text: "ORIGINAL: 'Threats include habitat loss, pesticide use, disease and climate change.' IN MY OWN WORDS: _____.", blanks: [""] },
          { text: "ORIGINAL: 'Scientists and farmers are increasingly working together to protect bee populations.' IN MY OWN WORDS: _____.", blanks: [""] },
        ],
      },
      // 26
      {
        type: "open-response" as const,
        title: "Evaluate the Bee Passage",
        instruction: "Evaluate the bee passage using the four key questions.",
        prompts: [
          { text: "Q1: Who likely wrote this type of text and for what purpose?", type: "lines", lines: 3 },
          { text: "Q2: Is the information presented as fact, opinion or a mix? Give an example.", type: "lines", lines: 3 },
          { text: "Q3: What additional information would you want to know to fully understand this topic?", type: "lines", lines: 3 },
          { text: "Q4: What sources would you consult to check the accuracy of the facts presented?", type: "lines", lines: 2 },
        ],
      },
      // 27
      {
        type: "open-response" as const,
        title: "Make an Inference",
        instruction: "An inference is a conclusion you reach based on evidence in the text and your own reasoning — not something stated directly.",
        prompts: [
          { text: "FROM THE BEE PASSAGE: 'Approximately one third of all food consumed globally depends on bee pollination.'\nINFERENCE: What does this suggest could happen to the global food supply if bee populations collapse?", type: "lines", lines: 3 },
          { text: "FROM THE REEF PASSAGE (Activity 4): 'Without intervention, large sections of the reef could be permanently damaged within decades.'\nINFERENCE: What does the word 'permanently' suggest about the urgency of the problem?", type: "lines", lines: 3 },
        ],
      },
      // 28
      {
        type: "sorting" as const,
        title: "Fact, Inference or Opinion?",
        instruction: "Sort each statement into the correct category.",
        parentTip: "The ability to distinguish between fact (verifiable), inference (reasoned conclusion from evidence) and opinion (personal view) is one of the most important critical thinking skills in reading and writing.",
        columns: ["Fact (stated directly in a text or verifiable)", "Inference (reasoned from evidence)", "Opinion (personal view)"],
        items: [
          { label: "The Great Barrier Reef is over 2,300 kilometres long." },
          { label: "If coral bleaching continues, tourism in Queensland will suffer." },
          { label: "The Great Barrier Reef is the most beautiful natural wonder in the world." },
          { label: "One third of global food production depends on bee pollination." },
          { label: "If bee populations decline further, certain food crops may become scarce." },
          { label: "People should stop using pesticides because they are bad for bees." },
        ],
      },
      // 29
      {
        type: "multiple-choice" as const,
        title: "Inference Questions",
        instruction: "Read each passage extract and choose the strongest inference.",
        questions: [
          { prompt: "EXTRACT: 'Australia has the world's highest rate of mammal extinction.' What can be most reasonably inferred?", options: ["Australia does not care about animals", "Australia's environmental management policies have significant room for improvement", "All Australian mammals will be extinct within ten years", "Australian scientists are the best in the world at conservation"], answer: "Australia's environmental management policies have significant room for improvement" },
          { prompt: "EXTRACT: 'The number of Australian students who cannot read at the expected level by Year 3 has remained steady despite multiple government intervention programmes.' What can be most reasonably inferred?", options: ["Reading is not important for Year 3 students", "The current intervention programmes may not be sufficiently effective", "All Year 3 students can read well", "The government should stop all reading programmes"], answer: "The current intervention programmes may not be sufficiently effective" },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Reading Together",
        content: "One of the most effective ways to develop reading comprehension is to read informational texts together and discuss them using the four key questions: What is this mainly about? What is the author's purpose? What can we infer? Is this reliable? This can be done in five minutes with any article, encyclopaedia entry or news story. The conversation matters more than any written activity. Ask open-ended questions and be genuinely curious about your child's thinking — there are often no single right answers, and the quality of the reasoning is what counts.",
      },
      // 31
      {
        type: "open-response" as const,
        title: "Read an Informational Text: Water Scarcity",
        instruction: "Read the passage carefully, then answer the comprehension questions.",
        prompts: [
          { text: "PASSAGE:\nWater covers approximately 71% of the Earth's surface, yet less than 3% of it is fresh water, and most of that is locked in ice caps and glaciers. Only about 0.3% of all water on Earth is accessible for human use — in lakes, rivers and underground aquifers. As the global population grows and climate change alters rainfall patterns, the demand for clean water is increasing while supply in many regions is declining. The United Nations predicts that by 2025, two-thirds of the world's population could be living under conditions of water stress. In Australia, many rural and remote communities already struggle with water security, particularly during drought years.\n\nQ1: What is the main topic of this passage?", type: "lines", lines: 2 },
          { text: "Q2: What is one statistic that surprised you? Why?", type: "lines", lines: 3 },
          { text: "Q3: What is the author's purpose?", type: "lines", lines: 2 },
          { text: "Q4: Write a two-sentence summary of the passage in your own words.", type: "lines", lines: 4 },
        ],
      },
      // 32
      {
        type: "open-response" as const,
        title: "Scan for Specific Information: Water Scarcity",
        instruction: "Scan the water scarcity passage to find the answers quickly.",
        prompts: [
          { text: "What percentage of Earth's surface is covered by water?", type: "lines", lines: 1 },
          { text: "What percentage of all water on Earth is accessible for human use?", type: "lines", lines: 1 },
          { text: "By what year does the UN predict water stress will affect two-thirds of the world's population?", type: "lines", lines: 1 },
          { text: "Which group in Australia is specifically mentioned as struggling with water security?", type: "lines", lines: 1 },
        ],
      },
      // 33
      {
        type: "multiple-choice" as const,
        title: "Comprehension: Water Scarcity",
        instruction: "Choose the best answer for each comprehension question about the water scarcity passage.",
        questions: [
          { prompt: "According to the passage, why is the supply of accessible fresh water declining in many regions?", options: ["People are drinking more water than ever before", "Most water is in the ocean", "Climate change is altering rainfall patterns", "Underground aquifers are being filled with salt water"], answer: "Climate change is altering rainfall patterns" },
          { prompt: "What does the phrase 'water stress' most likely mean in this context?", options: ["A feeling of anxiety caused by thinking about water", "A situation where water demand equals or exceeds available supply", "A scientific term for drought", "The physical pressure of water in a pipe"], answer: "A situation where water demand equals or exceeds available supply" },
          { prompt: "What is the most reasonable inference from the statistic that only 0.3% of Earth's water is accessible?", options: ["Water is easy to find anywhere on Earth", "Fresh water is a far more precious and limited resource than it appears", "Most water is too cold to drink", "Water scarcity is not a real problem"], answer: "Fresh water is a far more precious and limited resource than it appears" },
        ],
      },
      // 34
      {
        type: "open-response" as const,
        title: "Close Reading: Key Vocabulary",
        instruction: "The water scarcity passage uses several important technical and academic terms. For each word below, use context clues from the passage to work out its meaning.",
        parentTip: "Using context clues to determine the meaning of unknown words is one of the most important reading strategies. Students who can do this fluently build their vocabulary more quickly and read more independently.",
        prompts: [
          { text: "The word 'aquifers' — from the sentence 'in lakes, rivers and underground aquifers'. What do aquifers most likely mean?", type: "lines", lines: 2 },
          { text: "The phrase 'water stress' — from the sentence 'two-thirds of the world's population could be living under conditions of water stress'. What does this phrase most likely mean?", type: "lines", lines: 2 },
          { text: "The word 'accessible' — from the sentence 'only about 0.3% of all water on Earth is accessible for human use'. What does accessible mean here?", type: "lines", lines: 2 },
        ],
      },
      // 35
      {
        type: "fill-in-blank" as const,
        title: "Using Context Clues",
        instruction: "Fill in each blank using the correct strategy for working out word meaning from context.",
        sentences: [
          { text: "If a word is followed by a dash (—) and an explanation, this is a _____ clue.", blanks: ["definition"] },
          { text: "If you can understand a word's meaning from the surrounding sentences and the overall topic, this is a _____ clue.", blanks: ["context"] },
          { text: "If a word contains a prefix or suffix you recognise — for example, 'un-', 'dis-', '-tion', '-less' — this is a _____ clue.", blanks: ["structural"] },
          { text: "If the text provides an example of a word, this is an _____ clue.", blanks: ["example"] },
        ],
      },
      // 36
      {
        type: "open-response" as const,
        title: "Summarising in Your Own Words: Water Scarcity",
        instruction: "Write a one-paragraph summary of the water scarcity passage using only your own words. Do not look at the passage — work from memory.",
        parentTip: "Summarising from memory — rather than with the text in front of you — tests genuine comprehension rather than copying ability. If your child needs to look back at the passage, that is fine the first time, but encourage them to try without it.",
        prompts: [{ text: "My summary (from memory):", type: "box", lines: 8 }],
      },
      // 37
      {
        type: "matching" as const,
        title: "Match the Comprehension Skill to Its Example",
        instruction: "Match each comprehension skill to the activity that demonstrates it.",
        parentTip: "Naming specific comprehension skills — inferencing, summarising, evaluating — helps students become more deliberate about what they are doing when they read. This metacognitive awareness is a hallmark of advanced readers.",
        left: ["Literal comprehension", "Inferencing", "Evaluating", "Summarising", "Vocabulary in context", "Critical questioning"],
      right: ["Working out that 'water stress' means insufficient water supply from the surrounding sentences", "Asking: 'Does the author have a financial or ideological reason to present the facts this way?'", "Stating the main idea of the passage in two sentences using your own words", "Understanding that only 0.3% of all water is accessible from a direct reading of the text", "Concluding that if only 0.3% of water is accessible, fresh water is a very limited resource", "Asking: 'What information is missing from this text that might change my understanding?'"],
      },
      // 38
      {
        type: "circle-correct" as const,
        title: "Literal or Inferred?",
        instruction: "Decide whether each answer comes directly from the text (literal) or requires reasoning beyond the text (inferred).",
        questions: [
          { prompt: "Q: What percentage of Earth's surface is covered by water? A: 71%.", options: ["Literal — stated directly in the text", "Inferred — requires reasoning beyond the text"] },
          { prompt: "Q: If water scarcity continues to worsen, which Australian industries will be most affected? (This question is NOT answered in the text.)", options: ["Literal — stated directly in the text", "Inferred — requires reasoning beyond the text"] },
          { prompt: "Q: How do altering rainfall patterns caused by climate change affect water availability? A: They cause water supply to decline in many regions.", options: ["Literal — stated directly in the text", "Inferred — requires reasoning beyond the text"] },
          { prompt: "Q: If Australia already faces water security issues, what might this mean for future food production in rural areas?", options: ["Literal — stated directly in the text", "Inferred — requires reasoning beyond the text"] },
        ],
      },
      // 39
      {
        type: "open-response" as const,
        title: "Generate Questions About a Text",
        instruction: "Good readers generate their own questions before, during and after reading. Read the passage title and first sentence below, then write five questions you would like answered by the full text.",
        parentTip: "Generating questions before reading is one of the most effective comprehension strategies available. It activates prior knowledge and gives the reader a purpose for reading. Encourage your child to ask questions at all levels — literal, inferential and evaluative.",
        prompts: [
          { text: "TEXT TITLE AND OPENING: 'The Plastics Problem: Why Our Oceans Are in Crisis. Every year, more than 8 million tonnes of plastic enter the world's oceans. Unlike most materials, plastics do not biodegrade — they simply break down into smaller and smaller pieces called microplastics…'\n\nMy five questions:", type: "box", lines: 10 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Questions Are More Powerful Than Answers",
        content: "In education, we often think of the goal as finding the right answer. But the most important thing a reader can do — and the thing that distinguishes experts from novices — is asking the right questions. Scientists advance their fields by asking questions nobody has asked before. Historians interpret the past by questioning the sources they read. Journalists uncover truth by questioning official accounts. When you read an informational text and you ask 'Why? Who benefits from this? What is missing? What does this imply?' — you are doing exactly what the world's best thinkers do. The answer matters. But the question that led you there matters more.",
      },
      // 41
      {
        type: "open-response" as const,
        title: "Read and Apply All Four Strategies",
        instruction: "Read this passage about Indigenous Australian cultural burning practices. Apply all four reading strategies: skim, scan, summarise and evaluate.",
        prompts: [
          { text: "PASSAGE:\nFor tens of thousands of years, Aboriginal Australians have used controlled, low-intensity fire to manage Country. This practice, known as cultural burning, is fundamentally different from the high-intensity bushfires that devastate large areas of land. Cultural burning promotes the growth of native plants, creates habitat for animals, clears dry undergrowth that could fuel larger fires, and maintains the health of the landscape. In recent decades, land managers and governments have begun working with Indigenous communities to incorporate cultural burning into modern fire management strategies. The 2019–2020 Black Summer bushfires renewed urgent interest in these practices, as many areas that had been subject to cultural burning experienced less severe fire impacts than those that had not.\n\nSKIM RESULT — main topic (write in one sentence):", type: "lines", lines: 2 },
          { text: "SCAN — find and write: In which years did the Black Summer bushfires occur?", type: "lines", lines: 1 },
          { text: "SUMMARY — three sentences in your own words:", type: "lines", lines: 6 },
          { text: "EVALUATE — Who likely wrote this text? What is their purpose? Is it reliable? What would you check?", type: "lines", lines: 4 },
        ],
      },
      // 42
      {
        type: "true-false" as const,
        title: "True or False: Cultural Burning Passage",
        instruction: "Mark each statement True, False or Cannot Tell from the passage.",
        statements: [
          { text: "Cultural burning is a practice used by Aboriginal Australians for tens of thousands of years.", answer: true },
          { text: "Cultural burning involves high-intensity fires that clear large areas of vegetation.", answer: false },
          { text: "All areas subject to cultural burning were completely unaffected by the 2019–2020 bushfires.", answer: false },
          { text: "Cultural burning can promote the growth of native plants and create animal habitat.", answer: true },
          { text: "The 2019–2020 Black Summer bushfires led to increased interest in cultural burning strategies.", answer: true },
        ],
      },
      // 43
      {
        type: "open-response" as const,
        title: "Connect the Text to Your Knowledge",
        instruction: "Good readers connect new information to what they already know. Answer these connection questions about the cultural burning passage.",
        parentTip: "Making connections — text-to-self, text-to-world and text-to-text — is one of the seven fundamental comprehension strategies identified by reading researchers. Encouraging your child to make these connections regularly deepens comprehension significantly.",
        prompts: [
          { text: "TEXT-TO-SELF: What do you already know about bushfires or land management that connects to this passage?", type: "lines", lines: 3 },
          { text: "TEXT-TO-WORLD: How does this passage connect to anything you know about Indigenous Australian culture or environmental issues?", type: "lines", lines: 3 },
          { text: "TEXT-TO-TEXT: How does this passage connect to anything else you have read or learned recently?", type: "lines", lines: 3 },
        ],
      },
      // 44
      {
        type: "multiple-choice" as const,
        title: "Evaluating Source Reliability",
        instruction: "For each informational source, choose the best evaluation.",
        parentTip: "Evaluating sources is a critical skill that underpins all academic work and media literacy. The key questions are: Who wrote it? When? For what purpose? What evidence do they use?",
        questions: [
          { prompt: "A guide to nutrition written by a registered dietitian and published on a government health website.", options: ["Highly reliable — written by a qualified expert for a public information purpose", "Unreliable — government websites are always biased", "Unreliable — nutrition science changes too fast to trust any source", "Moderately reliable — but only if it mentions celebrities"], answer: "Highly reliable — written by a qualified expert for a public information purpose" },
          { prompt: "An article about the dangers of a food additive, published on the website of a company selling an 'all-natural' alternative product.", options: ["Highly reliable — companies always provide accurate health information", "Potentially biased — the source has a financial interest in making the alternative product attractive", "Unreliable — company websites can never be trusted for any information", "Highly reliable — the article must be true or they could be sued"], answer: "Potentially biased — the source has a financial interest in making the alternative product attractive" },
          { prompt: "A peer-reviewed study about climate change published in a scientific journal, with named researchers from a university.", options: ["Unreliable — scientists can be wrong", "Highly reliable — peer-reviewed research is scrutinised by other experts before publication", "Moderately reliable — only if the journal is from Australia", "Unreliable — universities always have a bias"], answer: "Highly reliable — peer-reviewed research is scrutinised by other experts before publication" },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Building the Research Habit",
        content: "Every time your child asks a question about the world — 'Why do whales beach themselves?', 'How do vaccines work?', 'What caused the First World War?' — it is an opportunity to practise research. Help them find one reliable source, skim it for relevance, scan for the specific answer, summarise it and evaluate the source together. This five-minute process, done regularly, builds genuine research skills far more effectively than prescribed research projects. Curiosity plus method is the formula for a lifelong researcher.",
      },
      // 46
      {
        type: "open-response" as const,
        title: "Read and Annotate",
        instruction: "Read the passage below and annotate it as you read. Use these symbols: * for important information, ? for something you do not understand, ! for something that surprises you, + for information you could connect to something you already know.",
        parentTip: "Annotation — marking a text as you read — is one of the most effective active reading strategies used by university students and researchers. Teaching it at Year 5 establishes a powerful habit early.",
        prompts: [
          { text: "PASSAGE:\nThe platypus is one of only five surviving species of monotreme — mammals that lay eggs rather than giving birth to live young. Found only in eastern Australia, the platypus leads a semi-aquatic life in freshwater rivers and streams. It uses electroreception — the ability to detect the electric fields generated by the muscle contractions of its prey — to hunt underwater, making it one of very few mammals to use this sense. The male platypus also has venomous spurs on its hind legs. Until European scientists first encountered the platypus in 1799, they initially believed it was a hoax — a duck's bill and feet sewn onto a beaver-like body.\n\nDescribe your three most interesting annotations and what they tell you about your reading:", type: "box", lines: 10 },
        ],
      },
      // 47
      {
        type: "multiple-choice" as const,
        title: "Comprehension: The Platypus Passage",
        instruction: "Choose the best answer for each comprehension question.",
        questions: [
          { prompt: "What is a monotreme?", options: ["A type of aquatic mammal that lives in rivers", "A mammal that lays eggs rather than giving birth to live young", "Any mammal found only in Australia", "A mammal with venomous spurs"], answer: "A mammal that lays eggs rather than giving birth to live young" },
          { prompt: "What does 'electroreception' mean based on the context of the passage?", options: ["Receiving electricity from a power source", "Using electricity as a weapon against prey", "The ability to detect the electric fields generated by the muscle contractions of prey", "A type of underwater sonar used by dolphins"], answer: "The ability to detect the electric fields generated by the muscle contractions of prey" },
          { prompt: "Why did European scientists initially think the platypus was a hoax?", options: ["Because it was described by Australian Aboriginal peoples", "Because it was only found in very remote areas", "Because its combination of features — duck bill, beaver body, egg-laying — seemed impossible in one animal", "Because it was discovered on April Fool's Day"], answer: "Because its combination of features — duck bill, beaver body, egg-laying — seemed impossible in one animal" },
        ],
      },
      // 48
      {
        type: "open-response" as const,
        title: "Inferences: The Platypus Passage",
        instruction: "Answer these inference questions about the platypus passage.",
        prompts: [
          { text: "INFERENCE Q1: The passage says European scientists believed the platypus was 'a hoax — a duck's bill and feet sewn onto a beaver-like body.' What does this tell you about what scientists expected animals to look like?", type: "lines", lines: 3 },
          { text: "INFERENCE Q2: The male platypus has venomous spurs. What might this tell you about how the platypus survived evolution?", type: "lines", lines: 3 },
        ],
      },
      // 49
      {
        type: "open-response" as const,
        title: "Vocabulary in Context: The Platypus Passage",
        instruction: "Use the context of the platypus passage to work out the meaning of each term.",
        prompts: [
          { text: "The word 'monotreme' — what does it most likely describe?", type: "lines", lines: 2 },
          { text: "The phrase 'semi-aquatic' — what do you think this means?", type: "lines", lines: 2 },
          { text: "The word 'electroreception' — what does it describe and how did you work this out?", type: "lines", lines: 2 },
        ],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Write Your Own Comprehension Questions",
        instruction: "Write three comprehension questions about the platypus passage — one literal, one inference and one evaluation question.",
        parentTip: "Writing comprehension questions is a more advanced skill than answering them — it requires understanding what makes a question meaningful. Challenge your child to write questions that could not be answered with a single word.",
        prompts: [
          { text: "LITERAL question (answer is directly in the text):", type: "lines", lines: 2 },
          { text: "INFERENCE question (answer requires reasoning from the text):", type: "lines", lines: 2 },
          { text: "EVALUATION question (answer requires judging the text's content, purpose or reliability):", type: "lines", lines: 2 },
        ],
      },
      // 51
      {
        type: "multiple-choice" as const,
        title: "Types of Comprehension Questions",
        instruction: "Identify whether each question is literal, inferential or evaluative.",
        questions: [
          { prompt: "Q: How long is the Great Barrier Reef? (Answer: 2,300 kilometres)", options: ["Literal — stated directly in the text", "Inferential — requires reasoning", "Evaluative — requires judging the text"], answer: "Literal — stated directly in the text" },
          { prompt: "Q: If bee populations decline, what might happen to the price of fruit and vegetables? (Not stated in the text)", options: ["Literal — stated directly in the text", "Inferential — requires reasoning from the text", "Evaluative — requires judging the text"], answer: "Inferential — requires reasoning from the text" },
          { prompt: "Q: Is the source of the water scarcity passage reliable and why?", options: ["Literal — stated directly in the text", "Inferential — requires reasoning from the text", "Evaluative — requires judging the text's credibility"], answer: "Evaluative — requires judging the text's credibility" },
        ],
      },
      // 52
      {
        type: "open-response" as const,
        title: "Read for Bias",
        instruction: "Read this passage extract and identify any signs of bias — language choices, omissions or framing that suggest the author has a particular viewpoint.",
        prompts: [
          { text: "EXTRACT:\n'Proposed changes to Australia's forestry laws would devastate regional communities that depend on logging for their livelihoods. Thousands of hardworking families would lose their jobs, all for the sake of a handful of city-based environmental activists who have never set foot in a forest. The logging industry has operated sustainably in Australian forests for over a century.'\n\nQ1: What is the author's viewpoint on the proposed changes?", type: "lines", lines: 2 },
          { text: "Q2: Identify two specific words or phrases that reveal bias. Explain what each one communicates.", type: "lines", lines: 4 },
          { text: "Q3: What important perspective is not represented in this extract?", type: "lines", lines: 3 },
        ],
      },
      // 53
      {
        type: "true-false" as const,
        title: "True or False: Bias in Informational Texts",
        instruction: "Mark each statement True or False.",
        parentTip: "Understanding that all texts — even 'objective' informational texts — involve choices about what to include, emphasise or omit is one of the most important insights in critical literacy.",
        statements: [
          { text: "Bias in a text always means the author is deliberately lying.", answer: false },
          { text: "Emotive language in a text can be a sign of authorial bias.", answer: true },
          { text: "Even apparently factual texts can reflect a particular viewpoint through word choice and what they choose to omit.", answer: true },
          { text: "A text that cites statistics cannot be biased.", answer: false },
          { text: "Reading multiple texts from different perspectives on the same topic helps readers identify bias and build a more balanced understanding.", answer: true },
        ],
      },
      // 54
      {
        type: "fill-in-blank" as const,
        title: "Bias Vocabulary",
        instruction: "Fill in each blank with the correct critical literacy term.",
        sentences: [
          { text: "When an author emphasises some facts while leaving out others to support their viewpoint, this is called _____.", blanks: ["selective presentation"] },
          { text: "Language designed to trigger an emotional response in the reader is called _____ language.", blanks: ["emotive"] },
          { text: "When an author presents only one side of an issue as if no other viewpoints exist, this is called presenting a _____ perspective.", blanks: ["one-sided"] },
          { text: "The process of questioning a text's claims, purpose and perspective rather than accepting it passively is called _____ reading.", blanks: ["critical"] },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Identify and Challenge Assumptions",
        instruction: "Every informational text makes assumptions about what the reader already knows or believes. Read this extract and identify two assumptions the author is making.",
        parentTip: "Challenging assumptions is a high-level critical thinking skill. Students who can identify hidden assumptions in texts are developing the analytical skills required for secondary school and beyond.",
        prompts: [
          { text: "EXTRACT:\n'As every educated Australian knows, reducing our carbon emissions is the most important environmental priority of the next decade. The science is settled — economic growth and environmental responsibility are not in conflict, and businesses that fail to adapt to this reality will be left behind.'\n\nASSUMPTION 1 the author makes:", type: "lines", lines: 3 },
          { text: "ASSUMPTION 2 the author makes:", type: "lines", lines: 3 },
          { text: "Why is it important to identify these assumptions rather than accepting them?", type: "lines", lines: 3 },
        ],
      },
      // 56
      {
        type: "open-response" as const,
        title: "Compare Two Perspectives on the Same Topic",
        instruction: "Read these two extracts about the same topic. Identify how they differ and what perspective each author holds.",
        prompts: [
          { text: "EXTRACT A:\n'The decision to expand the Adani coal mine in Queensland is a positive development for regional employment and energy security. Thousands of local jobs will be created, providing economic opportunity for communities that have struggled with high unemployment for decades.'\n\nEXTRACT B:\n'The expansion of the Adani coal mine represents a catastrophic environmental decision. At a time when the world must rapidly decarbonise to limit catastrophic climate change, investing in new coal infrastructure is economically irrational and morally indefensible.'\n\nQ1: What viewpoint does Extract A represent?", type: "lines", lines: 2 },
          { text: "Q2: What viewpoint does Extract B represent?", type: "lines", lines: 2 },
          { text: "Q3: What evidence would you need to make a truly informed view on this issue?", type: "lines", lines: 3 },
        ],
      },
      // 57
      {
        type: "multiple-choice" as const,
        title: "Reading Non-Fiction: Comprehension at Depth",
        instruction: "Choose the best answer for each question about reading informational texts at a deeper level.",
        questions: [
          { prompt: "What does it mean to 'read between the lines' of a text?", options: ["To read only alternate lines of a passage", "To identify what the author implies but does not state directly", "To skip paragraphs that seem unimportant", "To look for typing errors in the text"], answer: "To identify what the author implies but does not state directly" },
          { prompt: "Which skill would you use to work out the meaning of an unfamiliar word from the sentences around it?", options: ["Scanning", "Using context clues", "Skimming", "Evaluating"], answer: "Using context clues" },
          { prompt: "Why is it important to read texts about the same topic from multiple different sources?", options: ["To read more total words for literacy practice", "To identify agreements and disagreements between sources and build a more complete understanding", "Because one source always has wrong information", "To practise skimming different text layouts"], answer: "To identify agreements and disagreements between sources and build a more complete understanding" },
        ],
      },
      // 58
      {
        type: "open-response" as const,
        title: "Research a Topic: Three Sources",
        instruction: "Choose a topic from your curriculum. Find information from three different sources. Complete the comparison table below.",
        parentTip: "Consulting multiple sources before forming a view is one of the most important academic habits. At Year 5, this can mean a book, an encyclopaedia website and a news article — it does not need to be complex.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "SOURCE 1 — title, type and author/publisher:", type: "lines", lines: 2 },
          { text: "Source 1 — key information:", type: "lines", lines: 2 },
          { text: "SOURCE 2 — title, type and author/publisher:", type: "lines", lines: 2 },
          { text: "Source 2 — key information:", type: "lines", lines: 2 },
          { text: "SOURCE 3 — title, type and author/publisher:", type: "lines", lines: 2 },
          { text: "Source 3 — key information:", type: "lines", lines: 2 },
          { text: "Key agreements and disagreements between the sources:", type: "lines", lines: 3 },
        ],
      },
      // 59
      {
        type: "sequence" as const,
        title: "Order the Research Process",
        instruction: "Number these steps from 1 (first) to 6 (last) to show the most logical order for researching a topic.",
        items: [
          { label: "Skim several sources quickly to decide which are most relevant." },
          { label: "Evaluate each source for reliability, author purpose and potential bias." },
          { label: "Choose a research question or topic to investigate." },
          { label: "Scan chosen sources for specific facts and evidence." },
          { label: "Summarise key information from each source in your own words." },
          { label: "Close-read the most important sections to understand the detail." },
        ],
      },
      // 60 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: Model Your Own Reading",
        content: "Children learn reading habits by watching skilled adult readers. When you read a news article, an instruction manual or an information website — think aloud. Say: 'I am going to skim this first to see if it is relevant.' Or: 'I notice the author uses very emotive language — I wonder if they are trying to persuade as well as inform.' Or: 'That statistic is surprising — I would want to check the source before believing it.' These running commentaries on your own reading process teach your child more about strategic reading than almost anything else.",
      },
      // 61
      {
        type: "open-response" as const,
        title: "Take Notes Using a T-Chart",
        instruction: "A T-chart helps organise information into two categories. Use the T-chart below to note information from any informational text you read this week — sorting information into FACTS (verifiable) and QUESTIONS (things you want to know more about).",
        prompts: [
          { text: "Text I am reading:", type: "lines", lines: 1 },
          { text: "FACTS (things I have learned):", type: "box", lines: 8 },
          { text: "QUESTIONS (things I want to know more about):", type: "box", lines: 8 },
        ],
      },
      // 62
      {
        type: "open-response" as const,
        title: "Write a Summary: In Three Different Lengths",
        instruction: "Read the cultural burning passage from Activity 41 again. Write three summaries of different lengths: a 10-word summary, a 30-word summary and a 60-word summary.",
        parentTip: "Writing summaries of different lengths develops the skill of prioritisation — deciding what is most essential. The 10-word summary is the hardest and the most valuable. It forces students to identify the single most important idea.",
        prompts: [
          { text: "10-WORD SUMMARY (the single most important idea):", type: "lines", lines: 2 },
          { text: "30-WORD SUMMARY (the main idea + one key supporting point):", type: "lines", lines: 3 },
          { text: "60-WORD SUMMARY (main idea + key supporting points + one specific detail):", type: "lines", lines: 6 },
        ],
      },
      // 63
      {
        type: "multiple-choice" as const,
        title: "Which Summary Is Best?",
        instruction: "Read each pair of summaries and choose the better one. Then explain your choice.",
        questions: [
          { prompt: "ORIGINAL TEXT TOPIC: The decline of bee populations globally.\nSUMMARY A: 'Bee populations are declining globally due to habitat loss, pesticides, disease and climate change. This threatens food security because bees pollinate approximately one third of all food crops.'\nSUMMARY B: 'Bees are very important insects. There are many types of bees and they live in hives. Bees make honey and they also pollinate things. Some bees sting you if you come too close.'\nWhich summary is better?", options: ["Summary A — it captures the main idea and key causes accurately and specifically", "Summary B — it includes more general information about bees"], answer: "Summary A — it captures the main idea and key causes accurately and specifically" },
        ],
      },
      // 64
      {
        type: "fill-in-blank" as const,
        title: "Summarising: Key Language",
        instruction: "Fill in each blank with the correct summarising phrase.",
        sentences: [
          { text: "This passage is mainly about _____.", blanks: [""] },
          { text: "The author's key point is that _____.", blanks: [""] },
          { text: "In summary, _____ because _____.", blanks: [""] },
          { text: "The most important information in this text is _____, which suggests _____.", blanks: [""] },
        ],
      },
      // 65
      {
        type: "open-response" as const,
        title: "Comprehension Deep Dive: Australia's Biodiversity",
        instruction: "Read the passage and apply all comprehension strategies: literal comprehension, inference, vocabulary in context, evaluation and summarising.",
        prompts: [
          { text: "PASSAGE:\nAustralia is one of the world's 17 megadiverse countries — nations that contain extraordinarily high levels of biodiversity. The continent has been isolated from other landmasses for approximately 45 million years, allowing unique species to evolve in isolation. As a result, around 84% of Australia's mammals, 93% of reptiles and 45% of birds are found nowhere else on Earth. This phenomenon — species found only in one place — is called endemism. However, Australia also has one of the highest rates of animal and plant extinction in the developed world, driven by habitat destruction, invasive species and climate change. Since European settlement, over 100 species of Australian plants and animals have become extinct.\n\nLITERAL: What percentage of Australian mammals are found nowhere else on Earth?", type: "lines", lines: 1 },
          { text: "VOCABULARY: What does 'endemism' mean based on the passage?", type: "lines", lines: 2 },
          { text: "INFERENCE: Why might isolation from other landmasses for millions of years lead to unique species developing?", type: "lines", lines: 3 },
          { text: "EVALUATE: What is the author's purpose? Is there evidence of a viewpoint?", type: "lines", lines: 3 },
          { text: "SUMMARISE: Write a two-sentence summary in your own words:", type: "lines", lines: 4 },
        ],
      },
      // 66
      {
        type: "true-false" as const,
        title: "True or False: Australia's Biodiversity",
        instruction: "Mark each statement True, False or Cannot Tell from the biodiversity passage.",
        statements: [
          { text: "Australia is one of 17 megadiverse countries in the world.", answer: true },
          { text: "Australia has been isolated from other landmasses for approximately 45 million years.", answer: true },
          { text: "100% of Australian mammals are found nowhere else on Earth.", answer: false },
          { text: "Australia has the highest rate of species extinction in the world.", answer: false },
          { text: "European settlement contributed to species extinction in Australia.", answer: true },
        ],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Generate Research Questions",
        instruction: "Based on what you read about Australia's biodiversity, write five research questions you would like to investigate further.",
        parentTip: "A student who generates their own research questions after reading is demonstrating genuine intellectual engagement with the text — a far richer response than simply answering provided questions.",
        prompts: [{ text: "My five research questions:", type: "box", lines: 10 }],
      },
      // 68
      {
        type: "sorting" as const,
        title: "Sort the Comprehension Activities by Depth",
        instruction: "Sort these comprehension activities from Surface (basic recall) to Deep (complex analysis).",
        parentTip: "Bloom's Taxonomy — a framework for educational thinking levels — runs from remembering and understanding at the surface through applying, analysing, evaluating and creating at the deep end. Helping your child aim for the deeper levels significantly improves comprehension.",
        columns: ["Surface", "Mid-level", "Deep"],
        items: [
          { label: "Scan the passage to find a specific date" },
          { label: "Write a three-sentence summary of the main idea" },
          { label: "Evaluate the author's bias and viewpoint with specific evidence" },
          { label: "Identify whether the text is mainly fact or opinion" },
          { label: "Find one statistic in the text" },
          { label: "Make an inference about what might happen next based on the evidence in the text" },
          { label: "Use context clues to work out the meaning of a technical word" },
          { label: "Write your own research questions inspired by the text" },
        ],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Read and Evaluate a News Article",
        instruction: "Read a news article from ABC News, the Guardian or any quality news source with your parent's help. Evaluate it using the critical reading questions below.",
        parentTip: "Reading real news articles with your child is one of the most valuable academic activities you can do together. Even 10 minutes once a week builds vocabulary, general knowledge, comprehension and critical thinking simultaneously.",
        prompts: [
          { text: "Article title and source:", type: "lines", lines: 1 },
          { text: "Q1: What is the main news story in three sentences?", type: "lines", lines: 3 },
          { text: "Q2: What evidence or sources are cited in the article?", type: "lines", lines: 3 },
          { text: "Q3: Is the article balanced (presenting multiple perspectives) or one-sided?", type: "lines", lines: 3 },
          { text: "Q4: What questions do you have after reading that the article did not answer?", type: "lines", lines: 3 },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Home Activity: The Smart Reader's Weekly Practice",
        instruction: "Apply these activities across one week of regular reading to build your comprehension strategy toolkit.",
        parentTip: "Comprehension strategies develop through consistent, regular practice with real texts — not just worksheet activities. The most important thing is to read informational texts regularly and apply at least one strategy deliberately each time.",
        suggestions: [
          "MONDAY — SKIM: Pick up any non-fiction book or magazine. Skim two pages in 60 seconds. Then tell someone what the passage is mainly about without looking back.",
          "TUESDAY — SCAN: Find a news article online. Set a timer for 30 seconds. Scan for three specific facts: a name, a date and a number.",
          "WEDNESDAY — SUMMARISE: Read any article or encyclopedia entry. Close the book or screen. Write a summary in exactly three sentences from memory.",
          "THURSDAY — EVALUATE: Read any informational text. Ask: Who wrote this? When? Why? Is it reliable? How do I know?",
          "FRIDAY — INFER: Find a headline from a news article without reading the full story. Write three things you can infer might be in the full article, based on the headline alone. Then read the article and check.",
        ],
      },
      // 71
      {
        type: "open-response" as const,
        title: "Extension: Critical Reading of a Long Text",
        instruction: "Choose a chapter from a non-fiction library book on any topic. Read it carefully, then write a critical analysis including: main idea, key evidence, author purpose, at least one inference and one evaluation of the text's reliability.",
        parentTip: "This extension activity asks your child to apply all five comprehension strategies to a longer, more complex text. Allow 30–45 minutes and encourage them to annotate as they read.",
        prompts: [{ text: "Book title, chapter and author:", type: "lines", lines: 2 }, { text: "My critical analysis:", type: "box", lines: 16 }],
      },
      // 72
      {
        type: "multiple-choice" as const,
        title: "Comprehension Mastery Check",
        instruction: "Demonstrate your mastery by choosing the best answer for each question.",
        questions: [
          { prompt: "What is the difference between a literal comprehension question and an inferential question?", options: ["Literal questions are longer; inferential questions are shorter", "Literal questions can be answered from information stated directly in the text; inferential questions require reasoning beyond the text", "They are the same thing", "Literal questions are about maths; inferential questions are about English"], answer: "Literal questions can be answered from information stated directly in the text; inferential questions require reasoning beyond the text" },
          { prompt: "What should you do when you encounter an unfamiliar word in an informational text?", options: ["Stop reading and look up every unfamiliar word in a dictionary immediately", "Skip the word and ignore it", "Use context clues from surrounding sentences to work out its meaning, or look it up if still unclear", "Assume the word is unimportant and continue reading"], answer: "Use context clues from surrounding sentences to work out its meaning, or look it up if still unclear" },
          { prompt: "What is the most important question to ask when evaluating an informational source?", options: ["Is the article long enough?", "Does the article include photographs?", "Who wrote this, for what purpose, and what evidence do they provide?", "Is the article interesting to read?"], answer: "Who wrote this, for what purpose, and what evidence do they provide?" },
        ],
      },
      // 73
      {
        type: "open-response" as const,
        title: "Comprehension Self-Assessment",
        instruction: "Look back over your work in this worksheet and assess your own progress as a reader.",
        prompts: [
          { text: "Q1: Which comprehension strategy do you find most natural and easy? Why?", type: "lines", lines: 3 },
          { text: "Q2: Which strategy is most challenging for you? What makes it difficult?", type: "lines", lines: 3 },
          { text: "Q3: Which activity in this worksheet challenged you the most and why?", type: "lines", lines: 3 },
        ],
      },
      // 74
      {
        type: "fill-in-blank" as const,
        title: "Comprehension Vocabulary: Final Review",
        instruction: "Fill in each blank with the correct comprehension term.",
        sentences: [
          { text: "Reading quickly to get the general topic of a text is called _____.", blanks: ["skimming"] },
          { text: "A conclusion reasoned from evidence in the text that is not stated directly is an _____.", blanks: ["inference"] },
          { text: "Capturing the main idea of a text in your own words is called _____.", blanks: ["summarising"] },
          { text: "Using surrounding words and sentences to work out the meaning of an unknown word is called using _____ clues.", blanks: ["context"] },
          { text: "Assessing the reliability, bias and purpose of a source is called _____ reading.", blanks: ["critical"] },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Value of Wide Reading",
        content: "The single most reliable predictor of reading comprehension skill is the amount and variety of reading a child does outside school. Research by literacy scholars such as E.D. Hirsch has shown that background knowledge — the accumulated information a reader brings to a new text — is a stronger predictor of comprehension than vocabulary or reading instruction alone. Every informational text your child reads deposits knowledge that makes the next text easier to understand. Wide, varied reading in science, history, geography, nature and current events builds the background knowledge that makes reading comprehension automatic rather than effortful.",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Read for a Purpose",
        instruction: "Choose an informational text on a topic you are currently studying. Read it for a specific purpose — choose one: to find evidence for an argument, to answer a specific question, or to compare with another source.",
        prompts: [
          { text: "Text I am reading and my purpose:", type: "lines", lines: 2 },
          { text: "What I found that serves my purpose:", type: "box", lines: 8 },
          { text: "How this information connects to what I am studying:", type: "lines", lines: 3 },
        ],
      },
      // 77
      {
        type: "multiple-choice" as const,
        title: "Advanced Comprehension: Structure in Informational Texts",
        instruction: "Choose the best answer for each question about how informational texts are structured.",
        questions: [
          { prompt: "What is a 'claim' in an informational or argumentative text?", options: ["A legal document", "A statement that the author asserts is true, which may or may not be supported by evidence", "The main photograph of the text", "The title of the text"], answer: "A statement that the author asserts is true, which may or may not be supported by evidence" },
          { prompt: "What is the difference between the 'main idea' and 'supporting details' in an informational text?", options: ["They mean the same thing", "The main idea is the central point the text makes; supporting details are evidence and examples that develop and illustrate the main idea", "Supporting details are more important than the main idea", "The main idea only appears in the last paragraph"], answer: "The main idea is the central point the text makes; supporting details are evidence and examples that develop and illustrate the main idea" },
        ],
      },
      // 78
      {
        type: "open-response" as const,
        title: "Identify Claim, Evidence and Explanation",
        instruction: "Read this extract. Identify the claim, the evidence and the explanation.",
        prompts: [
          { text: "EXTRACT:\n'Regular physical activity is essential for children's mental health. Research from the University of Melbourne found that students who engaged in 60 minutes of moderate exercise five times per week reported significantly lower levels of anxiety and depression. This is because exercise releases endorphins — natural mood-elevating chemicals — and reduces the stress hormone cortisol.'\n\nCLAIM (the main assertion):", type: "lines", lines: 2 },
          { text: "EVIDENCE (the specific research or data):", type: "lines", lines: 2 },
          { text: "EXPLANATION (why the evidence supports the claim):", type: "lines", lines: 2 },
        ],
      },
      // 79
      {
        type: "sorting" as const,
        title: "Sort: Main Idea or Supporting Detail?",
        instruction: "Sort each sentence into Main idea (the central point of the whole text) or Supporting detail (evidence or example that supports the main idea) for a text about climate change.",
        columns: ["Main idea", "Supporting detail"],
        items: [
          { label: "Climate change poses one of the most significant threats to human civilisation in recorded history." },
          { label: "Global temperatures have risen by approximately 1.1°C since pre-industrial times." },
          { label: "The 2019–2020 Australian bushfire season was the worst on record, burning over 18 million hectares." },
          { label: "More frequent and intense extreme weather events are one of the predicted consequences of continued warming." },
          { label: "Addressing climate change requires urgent, coordinated international action across all sectors of the economy." },
          { label: "Ocean levels are rising at an average rate of 3.6 mm per year as ice sheets melt." },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: You Are Already a Researcher",
        content: "Every time you have ever been curious about something — a fact that surprised you, a question you could not stop thinking about, a problem you wanted to understand — and you looked it up or asked someone about it, you were doing research. Research is not a formal academic process that only adults in laboratories do. It is the natural extension of curiosity. The skills you have practised in this worksheet — skimming, scanning, summarising, evaluating, inferencing, questioning — are the formal names for things strategic readers do naturally. You now have the language to be deliberate about it. Every book, article, documentary and website you encounter for the rest of your life is a source. You are the researcher. Start reading the world with that confidence.",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Extension: Comprehension of a Complex Text",
        instruction: "Find and read a longer informational article — at least 500 words — on any topic from science, history or current events. Apply all the comprehension strategies and write a full critical reading response.",
        parentTip: "This is the capstone activity of the worksheet. Encourage your child to choose a text that genuinely interests them and to take their time. The goal is to demonstrate all five comprehension strategies in action — not to rush to completion.",
        prompts: [
          { text: "Article title, source and date:", type: "lines", lines: 2 },
          { text: "SKIM RESULT — main topic in one sentence:", type: "lines", lines: 2 },
          { text: "SCAN — three specific facts found:", type: "lines", lines: 3 },
          { text: "SUMMARY — three sentences in my own words:", type: "lines", lines: 6 },
          { text: "INFERENCE — something implied but not stated:", type: "lines", lines: 3 },
          { text: "EVALUATE — purpose, reliability, bias:", type: "lines", lines: 4 },
        ],
      },
      // 82
      {
        type: "multiple-choice" as const,
        title: "Mastery Challenge: All Five Strategies",
        instruction: "Choose the best comprehension strategy for each reading purpose.",
        questions: [
          { prompt: "You are choosing between ten articles for a research project. Which strategy do you use first?", options: ["Close reading every article from start to finish", "Skimming each article to see whether it covers your topic", "Scanning for your topic's keyword", "Evaluating each article for bias before reading it"], answer: "Skimming each article to see whether it covers your topic" },
          { prompt: "You have found a reliable article. You need to find one specific statistic quickly.", options: ["Close reading the whole article", "Summarising the article first", "Scanning for numbers or the relevant section", "Skimming the article again"], answer: "Scanning for numbers or the relevant section" },
          { prompt: "You need to write a paragraph that captures the key ideas of an article in your own words.", options: ["Scanning for keywords", "Skimming for the general topic", "Summarising the main idea and key supporting points", "Evaluating the source's reliability"], answer: "Summarising the main idea and key supporting points" },
          { prompt: "Before using the article as a source in your report, you need to check whether it is credible.", options: ["Scanning for the author's name", "Evaluating the source — author, publisher, date, evidence", "Summarising the article", "Close reading every paragraph"], answer: "Evaluating the source — author, publisher, date, evidence" },
        ],
      },
      // 83
      {
        type: "open-response" as const,
        title: "Teach Back: Comprehension Strategies",
        instruction: "Explain the five comprehension strategies (skimming, scanning, summarising, evaluating and inferencing) to a parent or younger sibling. Give one example of each and describe when you would use it.",
        parentTip: "Teaching comprehension strategies to someone else is the highest form of understanding. If your child can explain each strategy in their own words and give an authentic example, they have genuinely mastered the content of this worksheet.",
        prompts: [{ text: "My explanation of the five strategies:", type: "box", lines: 16 }],
      },
      // 84
      {
        type: "fill-in-blank" as const,
        title: "Reading for Research: Complete the Process",
        instruction: "Fill in each blank to complete the research reading process.",
        sentences: [
          { text: "First, I _____ several sources to quickly identify which ones cover my topic.", blanks: ["skim"] },
          { text: "Next, I _____ each source to check who wrote it, when and why, and whether it is reliable.", blanks: ["evaluate"] },
          { text: "Then, I _____ the most relevant sources to find specific facts and data quickly.", blanks: ["scan"] },
          { text: "For the most important sections, I use _____ reading to understand every detail.", blanks: ["close"] },
          { text: "Finally, I _____ the key information from each source in my own words for my notes.", blanks: ["summarise"] },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Your Best Comprehension Response",
        instruction: "Read a passage of your choice — from a library book, encyclopaedia or quality news website — and write your best, most complete comprehension response. Apply all five strategies and demonstrate everything you have learned in this worksheet.",
        parentTip: "This is your child's showcase activity. Allow 30–40 minutes. Encourage slow, careful reading followed by a thoughtful response. The goal is quality, not speed.",
        prompts: [{ text: "Text I chose and why:", type: "lines", lines: 2 }, { text: "My complete comprehension response:", type: "box", lines: 18 }],
      },
      // 86
      {
        type: "true-false" as const,
        title: "True or False: Advanced Reading Skills",
        instruction: "Mark each statement True or False.",
        statements: [
          { text: "Strategic readers choose their reading strategy based on their purpose and the type of text they are reading.", answer: true },
          { text: "A skilled reader reads every word of every text at the same speed, regardless of purpose.", answer: false },
          { text: "Making inferences requires both information from the text and prior knowledge from the reader.", answer: true },
          { text: "A summary that uses the same sentences as the original text demonstrates strong comprehension.", answer: false },
          { text: "Critical reading includes asking who benefits from the way information is presented in a text.", answer: true },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Design a Comprehension Toolkit Card",
        instruction: "Design a 'Comprehension Toolkit Card' — a small reference card that lists the five reading strategies, when to use each one and one practical tip for applying each. Keep it as a reference for future reading.",
        parentTip: "A self-made reference card is used and remembered far more than a worksheet summary. Encourage your child to keep this card in their reading area and refer to it when reading informational texts across all subjects.",
        prompts: [{ text: "My Comprehension Toolkit Card (design it clearly and neatly here):", type: "box", lines: 14 }],
      },
      // 88
      {
        type: "sorting" as const,
        title: "Sort the Reading Activities by Strategy Used",
        instruction: "Sort each reading activity by the primary strategy it requires.",
        parentTip: "This consolidation activity checks whether your child can identify which strategy is appropriate for each purpose — a key metacognitive skill for independent readers.",
        columns: ["Skimming", "Scanning", "Summarising", "Evaluating", "Inferencing"],
        items: [
          { label: "Reading only headings and opening sentences to decide if an article is relevant" },
          { label: "Looking for a specific date mentioned in a long article" },
          { label: "Writing the main idea and two key points from a chapter in your own words" },
          { label: "Asking 'Does this author have a financial reason to present the information this way?'" },
          { label: "Concluding that a character in a story must be poor based on descriptions of their home" },
          { label: "Quickly reading the blurb and contents page of a book before deciding to read it" },
          { label: "Checking when an article was written and whether the author is an expert" },
          { label: "Drawing a conclusion about what might happen to bee populations if pesticide use is not reduced" },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Reflection: How Has Your Reading Changed?",
        instruction: "Look back at where you started this worksheet and where you are now as a reader.",
        prompts: [
          { text: "Q1: Before this worksheet, how did you read an informational text?", type: "lines", lines: 3 },
          { text: "Q2: What do you do differently now when you read non-fiction?", type: "lines", lines: 3 },
          { text: "Q3: Which strategy will be most useful to you this year and beyond? Why?", type: "lines", lines: 3 },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Parent Tip: The Long View on Literacy",
        content: "Reading comprehension is not a single skill — it is a constellation of habits, strategies and knowledge that develops over years. The activities in this worksheet are not destinations — they are starting points. The most powerful thing you can do for your child's reading development is to ensure that reading informational texts is a regular, enjoyable part of their life: through library visits, magazine subscriptions, quality news apps designed for young readers, science and history books, and conversations about what they are reading and thinking. The child who reads widely and thinks critically about what they read will thrive across every subject and throughout life.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Create a Reading Journal Entry",
        instruction: "Write a reading journal entry about any informational text you have read recently. Include your reactions, what you learned, any inferences you made and one question you would like to research further.",
        parentTip: "A reading journal is one of the most valuable literacy tools available. Even brief, informal entries — written a few times a week — develop metacognitive awareness of reading, build vocabulary and consolidate comprehension.",
        prompts: [{ text: "My reading journal entry:", type: "box", lines: 14 }],
      },
      // 92
      {
        type: "multiple-choice" as const,
        title: "Final Mastery Check: Reading Comprehension",
        instruction: "Demonstrate your full mastery by choosing the best answer for each question.",
        questions: [
          { prompt: "Which of these is the most complete description of reading comprehension?", options: ["The ability to read words accurately and quickly", "The ability to decode letters and form words", "The ability to understand, evaluate, and think critically about what has been read", "The ability to read without making any errors"], answer: "The ability to understand, evaluate, and think critically about what has been read" },
          { prompt: "What does it mean to evaluate a source?", options: ["To find every statistic in the source", "To assess the source's reliability, author, purpose, potential bias and the quality of its evidence", "To read every sentence of the source twice", "To summarise the source in three sentences"], answer: "To assess the source's reliability, author, purpose, potential bias and the quality of its evidence" },
          { prompt: "Why is summarising important as a reading strategy?", options: ["It makes the text shorter", "It forces the reader to identify what is most important and to process and restate the information in their own words — proving genuine understanding", "It is the fastest way to read a text", "It allows the reader to avoid reading the full text"], answer: "It forces the reader to identify what is most important and to process and restate the information in their own words — proving genuine understanding" },
        ],
      },
      // 93
      {
        type: "open-response" as const,
        title: "Apply Comprehension Strategies Independently",
        instruction: "Choose an informational text on any topic from your curriculum. Without any guidance, apply all five comprehension strategies independently and record your results.",
        prompts: [
          { text: "Text I chose:", type: "lines", lines: 1 },
          { text: "SKIM — main topic:", type: "lines", lines: 2 },
          { text: "SCAN — three specific facts:", type: "lines", lines: 3 },
          { text: "SUMMARISE — two sentences in my own words:", type: "lines", lines: 4 },
          { text: "INFER — one conclusion reasoned from the text:", type: "lines", lines: 3 },
          { text: "EVALUATE — purpose and reliability:", type: "lines", lines: 3 },
        ],
      },
      // 94
      {
        type: "fill-in-blank" as const,
        title: "Complete the Comprehension Checklist",
        instruction: "Fill in each blank to complete the reading comprehension self-check. Use these terms: evaluate, summarise, infer, scan, skim.",
        sentences: [
          { text: "Before reading a new text, I _____ it quickly to decide whether it is relevant to my purpose.", blanks: ["skim"] },
          { text: "When I need a specific fact fast, I _____ for keywords, numbers or names.", blanks: ["scan"] },
          { text: "After reading carefully, I _____ the main idea in my own words to check I have understood it.", blanks: ["summarise"] },
          { text: "I _____ the source before trusting the information — checking who wrote it and why.", blanks: ["evaluate"] },
          { text: "I _____ what the author implies by using evidence in the text and my prior knowledge.", blanks: ["infer"] },
        ],
      },
      // 95
      {
        type: "home-activity" as const,
        title: "Home Activity: Build a Reading Life",
        instruction: "Reading comprehension grows through regular, wide, varied reading. Use these suggestions to build a rich reading life beyond the worksheet.",
        parentTip: "The research is unambiguous: children who read for pleasure regularly develop stronger vocabulary, comprehension, empathy and academic performance across all subjects. The goal is not to turn reading into a chore — it is to make it a pleasure. Follow your child's interests wherever they lead.",
        suggestions: [
          "Visit your local library and borrow one non-fiction book in a subject area you are curious about. Read at least one chapter this week.",
          "Subscribe to a free children's news service such as ABC's Behind the News or First News (UK). Read one article per week and apply one comprehension strategy to it.",
          "Start a reading journal. After reading any informational text, write three sentences: what I learned, one question I now have, and one connection to something I already knew.",
          "Choose a topic you are passionate about and spend 20 minutes researching it from at least two different sources. Compare what each source says.",
          "Share one interesting fact you have read this week at the dinner table. Explain where you read it and why you found it interesting.",
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "What Kind of Reader Do You Want to Be?",
        instruction: "Write a personal reading goal for the rest of this year. What do you want to read more of? What comprehension skills do you want to develop? How will you challenge yourself as a reader?",
        parentTip: "Goal-setting for reading gives students ownership of their literacy development. A concrete, specific goal — 'I will read one non-fiction article every Tuesday and write three sentences in my reading journal' — is far more effective than a vague aspiration to 'read more'.",
        prompts: [{ text: "My personal reading goal for this year:", type: "box", lines: 10 }],
      },
      // 97
      {
        type: "multiple-choice" as const,
        title: "Mastery Challenge: All Strategies Together",
        instruction: "Choose the best strategy for each complex reading scenario.",
        questions: [
          { prompt: "You are writing a report on water scarcity. You have found five sources. What is the most efficient reading process?", options: ["Close-read all five sources from start to finish before taking any notes", "Skim all five sources, evaluate each for reliability, scan for relevant data, close-read the best sections, then summarise", "Summarise all five sources before reading them", "Scan all five sources for the word 'water' and record every sentence that contains it"], answer: "Skim all five sources, evaluate each for reliability, scan for relevant data, close-read the best sections, then summarise" },
          { prompt: "You have read a persuasive article about renewable energy and notice the author works for a solar power company. What should you do?", options: ["Trust the article completely because the author is an expert", "Discard the article — all company-authored articles are wrong", "Note the potential bias, look for which claims are well-evidenced, and seek additional independent sources to verify key facts", "Only use the statistics and ignore the opinions"], answer: "Note the potential bias, look for which claims are well-evidenced, and seek additional independent sources to verify key facts" },
        ],
      },
      // 98
      {
        type: "open-response" as const,
        title: "Your Strongest Comprehension Demonstration",
        instruction: "Write your best, most complete response to a passage of your choice. Demonstrate everything you have learned in this worksheet — all five strategies, critical thinking and sophisticated vocabulary.",
        prompts: [{ text: "Text I chose:", type: "lines", lines: 1 }, { text: "My comprehensive response:", type: "box", lines: 18 }],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Final Reflection: The Reader You Have Become",
        instruction: "Write a final reflection on your journey through this worksheet.",
        prompts: [
          { text: "Q1: What is the most valuable comprehension skill you have developed and why?", type: "lines", lines: 4 },
          { text: "Q2: How has your approach to reading informational texts changed?", type: "lines", lines: 4 },
          { text: "Q3: Where will you use these skills outside of English lessons?", type: "lines", lines: 3 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: You Are Now a Strategic Reader",
        content: "One hundred activities ago, you began this worksheet with some understanding of how to read informational texts. Now you have a full toolkit: you can skim for relevance, scan for specific information, summarise the key ideas, infer what the author implies, evaluate sources for reliability and bias, and generate your own research questions. These are the same strategies used by journalists, scientists, historians, lawyers and scholars every day of their working lives. Reading is not a passive activity — it is one of the most intellectually demanding and rewarding things a human brain can do. Every text you read adds to your knowledge, sharpens your thinking and connects you to the full breadth of human understanding. You are a strategic reader now. Read widely, read critically and read with curiosity — the world is full of extraordinary things waiting to be understood.",
      },
    ],
  },
];

export function getYear5EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year5EnglishWorksheets.find((ws) => ws.slug === slug);
}
