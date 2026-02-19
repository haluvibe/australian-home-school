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
      {
        type: "open-response" as const,
        title: "Making Inferences",
        instruction:
          "Read the extract below. Answer each question using evidence from the text and your own knowledge. Write your reasoning.",
        prompts: [
          {
            text: "EXTRACT:\nLukas stared at the envelope for a long time before he picked it up. His name was written in his mother's handwriting — the looping letters he had not seen for three years. His hands were steady but his heart was not.\n\nWhat can you infer about Lukas's relationship with his mother? Cite the evidence that leads you to this inference.",
            type: "lines",
            lines: 4,
          },
          {
            text: "What emotions do you think Lukas is feeling? How do you know?",
            type: "lines",
            lines: 4,
          },
          {
            text: "From whose point of view is this passage told? How does this affect what information we receive?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort: Topic or Theme?",
        instruction:
          "A topic is what a story is about. A theme is the message or big idea. Sort each statement into the correct column.",
        columns: ["Topic (what it is about)", "Theme (the message)"],
        items: [
          { label: "A young girl lost in the woods." },
          { label: "Courage means acting even when you are afraid." },
          { label: "A sports team that keeps losing." },
          { label: "Perseverance leads to success even after failure." },
          { label: "Two children from rival families." },
          { label: "Kindness can break down the barriers that divide people." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Theme Statement for Your Reading Book",
        instruction:
          "Write a theme statement for your current or most recently finished reading book. Support it with two pieces of evidence from the text.",
        prompts: [
          { text: "Book title and author:", type: "lines", lines: 1 },
          { text: "Theme statement (a full sentence that expresses the big idea):", type: "lines", lines: 3 },
          { text: "Evidence 1 from the text:", type: "lines", lines: 3 },
          { text: "Evidence 2 from the text:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Point of View",
        instruction:
          "Read each short extract. Circle the point of view from which it is narrated.",
        parentTip:
          "Point of view affects what a reader is allowed to know. Ask your child: What would change if this passage was told from a different character's perspective? This deepens understanding of authorial choice.",
        questions: [
          {
            prompt: "I crept along the hallway, my heart hammering. I did not know what I would find behind the door.",
            options: ["First person", "Third person limited", "Third person omniscient"],
          },
          {
            prompt: "Sara felt nervous as she stepped onto the stage, though the audience had no idea she was trembling inside.",
            options: ["First person", "Third person limited", "Third person omniscient"],
          },
          {
            prompt: "In the kitchen, Mum worried about the bills. Meanwhile, upstairs, Dad was pretending everything was fine. Neither of them knew the other was afraid.",
            options: ["First person", "Third person limited", "Third person omniscient"],
          },
          {
            prompt: "Marcus grabbed his bag and ran. He had no way of knowing that the parcel he carried would change everything.",
            options: ["First person", "Third person limited", "Third person omniscient"],
          },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Literary Term",
        instruction:
          "Draw a line to match each literary term with its correct definition.",
        parentTip:
          "Encourage your child to cover the right column, read each term aloud, and try to recall the definition before looking — this active retrieval strategy strengthens memory.",
        left: [
          "Inference",
          "Theme",
          "First person point of view",
          "Third person omniscient",
          "Topic",
          "Third person limited",
        ],
        right: [
          "The central message or big idea of a text",
          "A conclusion drawn from clues in the text and background knowledge",
          "What a story is about (not the message)",
          "Narrated using 'I'; told from one character's direct perspective",
          "Narrated using 'he/she'; the narrator knows all characters' thoughts",
          "Narrated using 'he/she'; only one character's thoughts are known",
        ],
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
      {
        type: "open-response" as const,
        title: "Label the Paragraph Structure",
        instruction:
          "Read the model paragraph below. Label each part of the information sandwich structure — TS for topic sentence, E for evidence, EX for explanation, CS for concluding statement.",
        prompts: [
          {
            text: "MODEL PARAGRAPH:\n\nRegular physical activity is essential for the health of primary school students. Research by the Australian Institute of Health and Welfare shows that children who exercise at least 60 minutes daily have better concentration and lower rates of anxiety. This matters because learning is harder when students are stressed or unable to focus. Furthermore, active children tend to sleep better, which improves their mood and memory. Overall, building physical activity into the school day benefits both the body and the mind.\n\nLabel each sentence with TS, E, EX or CS:",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Plan Your Paragraph",
        instruction:
          "Use the information sandwich planner to organise your ideas before writing.",
        prompts: [
          { text: "Topic sentence (main idea):", type: "lines", lines: 2 },
          { text: "Evidence 1 (fact, statistic or example):", type: "lines", lines: 2 },
          { text: "Explanation 1 (why does this matter?):", type: "lines", lines: 2 },
          { text: "Evidence 2:", type: "lines", lines: 2 },
          { text: "Explanation 2:", type: "lines", lines: 2 },
          { text: "Concluding statement:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Your Expository Paragraph",
        instruction:
          "Use your planner to write your full expository paragraph. Include at least two transition words. Underline each transition word when you have finished.",
        prompts: [{ text: "My paragraph:", type: "box", lines: 14 }],
      },
      {
        type: "sorting" as const,
        title: "Sort the Transition Words",
        instruction:
          "Sort each transition word or phrase into the correct column based on its purpose in expository writing.",
        parentTip:
          "Transition words are the glue of expository writing. After sorting, challenge your child to use one from each column in a sentence about any topic they are currently studying.",
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
      {
        type: "circle-correct" as const,
        title: "Choose the Best Topic Sentence",
        instruction:
          "Read each set of sentences. Circle the one that would make the best topic sentence for an expository paragraph.",
        parentTip:
          "A strong topic sentence states the main idea clearly without giving away all the details. It should make the reader want to read on to find out more.",
        questions: [
          {
            prompt: "Choose the best topic sentence for a paragraph about coral reefs:",
            options: [
              "Coral reefs are found in warm, shallow water.",
              "Coral reefs are among the most biodiverse ecosystems on Earth, yet they face serious threats from climate change.",
              "Some coral has bleached due to warm water.",
            ],
          },
          {
            prompt: "Choose the best topic sentence for a paragraph about reading:",
            options: [
              "Reading is good.",
              "Many students read books at school.",
              "Reading regularly builds vocabulary, improves concentration and develops empathy.",
            ],
          },
          {
            prompt: "Choose the best topic sentence for a paragraph about sleep:",
            options: [
              "Getting enough sleep each night is essential for a child's physical and mental health.",
              "Children should go to bed at a reasonable time.",
              "Sleep is when the body rests.",
            ],
          },
          {
            prompt: "Choose the best topic sentence for a paragraph about renewable energy:",
            options: [
              "Solar panels use the sun.",
              "Wind turbines are tall.",
              "Renewable energy sources such as solar and wind power offer a cleaner alternative to fossil fuels.",
            ],
          },
        ],
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
      {
        type: "open-response" as const,
        title: "Identify the Argument Structure",
        instruction:
          "Read the paragraph below. Label each part — A for argument, CA for counterargument and R for rebuttal.",
        prompts: [
          {
            text: "PARAGRAPH:\n\nAustralia should introduce mandatory recycling education in all primary schools. Studies show that children who learn recycling habits early are significantly more likely to maintain them into adulthood, helping to reduce landfill and plastic pollution. Some may argue that this would take up valuable classroom time better spent on core subjects. However, environmental education is itself a core life skill, and brief weekly lessons — as short as fifteen minutes — have been shown to make a lasting difference in student attitudes and behaviour.\n\nLabel each part of the paragraph (A, CA, R):",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Plan Your Argument",
        instruction:
          "Choose a topic and plan your persuasive paragraph using the argument structure below.",
        prompts: [
          {
            text: "Topic:\n  [ ] Screen time for children should be limited.\n  [ ] All students should learn a second language.\n  [ ] My own topic:",
            type: "lines",
            lines: 1,
          },
          { text: "My main argument:", type: "lines", lines: 2 },
          { text: "Evidence or example:", type: "lines", lines: 2 },
          { text: "Counterargument (the other side):", type: "lines", lines: 2 },
          { text: "My rebuttal (why my argument is stronger):", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Your Persuasive Paragraph",
        instruction:
          "Use your plan to write a persuasive paragraph that includes your argument, a counterargument and a strong rebuttal.",
        prompts: [{ text: "My persuasive paragraph:", type: "box", lines: 14 }],
      },
      {
        type: "matching" as const,
        title: "Match the Persuasive Language Technique",
        instruction:
          "Draw a line to match each sentence with the persuasive language technique it uses.",
        parentTip:
          "Recognising these techniques in texts they read will help your child use them deliberately in their own persuasive writing — and spot when others are using them on them.",
        left: [
          "Nine out of ten experts agree that sleep is critical for learning.",
          "Surely no reasonable person would want children to suffer.",
          "We all want our children to have the best possible future, don't we?",
          "The evidence is clear, the science is settled, and the time to act is now.",
          "If we do nothing, the consequences will be catastrophic.",
        ],
        right: [
          "Rhetorical question",
          "Appeal to authority / statistics",
          "Emotive language",
          "Rule of three",
          "Appeal to shared values",
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Strong Argument or Weak Argument?",
        instruction:
          "Read each argument. Circle whether it is strong (well supported with evidence or reasoning) or weak (unsupported opinion or logical flaw).",
        parentTip:
          "Discuss with your child why an argument without evidence is easy to dismiss. This develops the habit of always asking: What is the evidence for this claim?",
        questions: [
          {
            prompt: "Everyone knows that homework is useless. It should be abolished immediately.",
            options: ["Strong — well supported", "Weak — unsupported opinion"],
          },
          {
            prompt: "A 2023 study by researchers at the University of Melbourne found that students who completed 30 minutes of homework per night performed 15% better on standardised tests.",
            options: ["Strong — well supported", "Weak — unsupported opinion"],
          },
          {
            prompt: "We should protect the environment because nature is nice and it would be sad if animals died.",
            options: ["Strong — well supported", "Weak — vague and unsupported"],
          },
          {
            prompt: "Reducing single-use plastics is essential because they take up to 500 years to break down and currently make up over 80% of marine debris, threatening thousands of ocean species.",
            options: ["Strong — well supported", "Weak — unsupported opinion"],
          },
          {
            prompt: "My friend agrees with me, so my argument must be right.",
            options: ["Strong — uses evidence", "Weak — logical flaw (appeal to one opinion)"],
          },
        ],
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
      {
        type: "open-response" as const,
        title: "Analyse a Media Text",
        instruction:
          "Look at the description of an advertisement below. Answer each question about the design choices the creator made.",
        prompts: [
          {
            text: "ADVERTISEMENT DESCRIPTION:\nA full-page advertisement for a children's charity shows a large photograph of a child smiling and holding a book. Above the image is a small headline in white text: Giving one book changes everything. Below the image is a large button in bright orange reading: Donate today. The background is white with a small logo in the top corner. The photograph takes up 80% of the page.\n\n1. Why do you think the photograph takes up most of the page?",
            type: "lines",
            lines: 3,
          },
          {
            text: "2. Why might the creator have chosen bright orange for the button?",
            type: "lines",
            lines: 3,
          },
          {
            text: "3. What emotion is the creator trying to make the audience feel? How do you know?",
            type: "lines",
            lines: 3,
          },
          {
            text: "4. Who is the intended audience for this advertisement? What design choices tell you this?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Design Your Own Poster",
        instruction:
          "Plan and sketch a simple poster or advertisement on a topic of your choice. Then write an explanation of three design choices you made.",
        prompts: [
          { text: "My topic or message:", type: "lines", lines: 1 },
          { text: "Sketch your poster here (use the box as your design space):", type: "box", lines: 12 },
          { text: "Design choice 1 and why I made it:", type: "lines", lines: 3 },
          { text: "Design choice 2 and why I made it:", type: "lines", lines: 3 },
          { text: "Design choice 3 and why I made it:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Media Critic for a Week",
        instruction:
          "Try these activities during the week to keep developing your media literacy.",
        parentTip:
          "Doing this alongside your child — sharing your own observations — models the habit of thinking critically about media without making it feel like a test.",
        suggestions: [
          "Find a magazine or newspaper advertisement and write down three design choices the creator made. For each one, explain what effect it has on the audience.",
          "Compare the front page of two different newspapers on the same day. What is the main story on each? What images did they choose? What does the difference tell you about each newspaper's audience or point of view?",
          "Notice five logos this week — on food packaging, vehicles or signs. For each one, consider: what does the colour choice communicate? What mood does the shape or font create?",
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort the Design Techniques",
        instruction:
          "Sort each design feature into the correct column based on its primary purpose in a media text.",
        parentTip:
          "Remind your child that one design feature can serve multiple purposes — a large image might both attract attention and evoke emotion. Encourage them to think about the dominant purpose.",
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
      {
        type: "circle-correct" as const,
        title: "Reading Design Choices",
        instruction:
          "Read each description of a design choice. Circle the most likely reason the creator made that choice.",
        parentTip:
          "There is rarely a single correct answer in media analysis — what matters is whether your child can justify their response with reasoning. Accept well-reasoned alternatives.",
        questions: [
          {
            prompt: "A charity poster uses a dark, desaturated colour scheme with a single beam of light in the centre.",
            options: [
              "To make the poster easy to print cheaply",
              "To create a sense of hope emerging from hardship",
              "Because those were the only colours available",
            ],
          },
          {
            prompt: "A news website places its most important story in the top-left corner of the page.",
            options: [
              "Because most readers scan pages from top-left to bottom-right",
              "Because the story was too short to go anywhere else",
              "To hide it from casual readers",
            ],
          },
          {
            prompt: "An advertisement for a children's breakfast cereal uses a large cartoon character and bold primary colours.",
            options: [
              "To appeal to adult shoppers who find cartoons nostalgic",
              "To target children by using visuals that are familiar and exciting to them",
              "Because the designer preferred cartoon art",
            ],
          },
          {
            prompt: "A documentary about climate change opens with sweeping aerial footage of a dying coral reef, with no words for the first 30 seconds.",
            options: [
              "To save time on writing a script",
              "To create an emotional impact before presenting any facts",
              "Because footage of coral reefs is free to use",
            ],
          },
        ],
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
      {
        type: "open-response" as const,
        title: "Skim and Summarise",
        instruction:
          "Read the passage below. First skim it quickly (30 seconds). Then read it carefully. Write a three-sentence summary in your own words.",
        prompts: [
          {
            text: "PASSAGE:\nThe Great Barrier Reef stretches over 2,300 kilometres along the Queensland coast, making it the world's largest coral reef system. It is home to more than 1,500 species of fish, 4,000 types of mollusc and over 30 species of whale and dolphin. Despite its scale, the reef is under serious threat. Rising sea temperatures caused by climate change have led to mass coral bleaching events — most recently in 2016, 2017 and 2020. When corals bleach, they expel the algae that give them colour and nutrients. Without intervention, large sections of the reef could be permanently damaged within decades.\n\nThree-sentence summary in your own words:",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Scan for Specific Information",
        instruction:
          "Scan the passage above to find the answers as quickly as you can. Do not re-read the whole text — move your eyes to find the specific information.",
        prompts: [
          { text: "How many species of fish live in the Great Barrier Reef?", type: "lines", lines: 1 },
          { text: "In which years did mass coral bleaching events occur?", type: "lines", lines: 1 },
          { text: "How long is the Great Barrier Reef?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Evaluate the Author's Purpose",
        instruction:
          "Answer these questions about the author's purpose and point of view in the passage above.",
        prompts: [
          {
            text: "What is the author's main purpose: to inform, to persuade, or to entertain? Explain your answer.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Does the author seem to have a point of view on the issue? What language choices tell you this?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Is this text reliable? What would you check to verify the facts?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Reading Strategy to Its Purpose",
        instruction:
          "Draw a line to match each reading strategy with the situation where a reader would use it.",
        parentTip:
          "Metacognition — knowing which strategy to use and when — is a hallmark of skilled readers. Practise asking your child: What strategy would you use if you needed to find a specific date in a long article?",
        left: [
          "Skimming",
          "Scanning",
          "Summarising",
          "Evaluating",
          "Close reading",
          "Inferencing",
        ],
        right: [
          "You want to find a specific name or statistic quickly",
          "You need to check whether a source is reliable and why it was written",
          "You want to understand every detail of a complex section of text",
          "You want to capture the main idea of a passage in your own words",
          "You read quickly to get the general topic before deciding whether to read further",
          "You use clues in the text to work out what the author implies but does not state",
        ],
      },
      {
        type: "sequence" as const,
        title: "Order the Research Process",
        instruction:
          "A student is researching a topic for an informational report. Number these steps 1 to 6 to show the most logical order for using reading strategies effectively.",
        parentTip:
          "Discuss with your child that real research rarely follows a perfectly linear path — readers often loop back to earlier steps. This activity teaches the ideal process as a starting point.",
        items: [
          { label: "Skim several sources quickly to decide which ones are most relevant." },
          { label: "Evaluate each source for reliability, author purpose and potential bias." },
          { label: "Choose a research question or topic to investigate." },
          { label: "Scan chosen sources for specific facts and evidence to support your points." },
          { label: "Summarise key information from each source in your own words." },
          { label: "Close-read the most important sections to fully understand the detail." },
        ],
      },
    ],
  },
];

export function getYear5EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year5EnglishWorksheets.find((ws) => ws.slug === slug);
}
