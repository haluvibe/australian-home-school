import type { WorksheetItem } from "./worksheet-types";

export const foundationEnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Rhyme Time ──────────────────────────────────────
  {
    slug: "rhyme-time",
    title: "Rhyme Time",
    strand: "Language",
    description:
      "Listen for and identify rhyming word pairs — a key building block for phonological awareness and early reading.",
    learningGuide: {
      concept:
        "Rhyme is when two words share the same ending sound (cat/hat, dog/log). Noticing rhyme trains young ears to hear sound patterns within words — the first step in learning to read.",
      activation:
        "Say a short rhyming poem or nursery rhyme together (e.g. Hairy Maclary). Ask: Did you notice any words that sound the same at the end?",
      check:
        "Can your child clap or tap every time they hear a rhyme? Can they supply a rhyming word when you say the first one?",
    },
    lesson: {
      title: "Can You Hear the Rhyme?",
      objective:
        "Identify and produce rhyming words by listening carefully to ending sounds.",
      materials: [
        "A picture book or nursery rhyme book (any you have at home)",
        "Pencil and crayons",
        "Small pieces of paper for rhyme cards (optional)",
      ],
      intro: {
        title: "The Rhyming Game",
        script:
          "Let us play a listening game. I am going to say two words, and I want you to tell me if they rhyme — that means they sound the same at the END. Ready? Cat... hat. Do they rhyme? Listen again: cat... hat. Yes! Now try this one: sun... bus. Hmm, do those rhyme? No, they do not quite match at the end, do they?",
        action:
          "Say 5 to 6 word pairs aloud — some rhyming, some not. Tap the table for each word to make the rhythm feel fun. Let your child give a thumbs up for rhyme, thumbs down for no rhyme.",
      },
      mainActivity: {
        title: "Draw the Rhyme",
        script:
          "Now it is your turn to be the artist. I am going to say a word, and you are going to draw a picture of it AND a picture of a word that rhymes with it. So if I say star, you might draw a star and then a car, because star and car rhyme! Let us try together first.",
        action:
          "Call out words one at a time: cat, sun, hat, log, bee, tree. Let your child draw both words in the activity boxes. Encourage invented spelling for labels.",
      },
      wrapUp: {
        title: "Rhyme Hunt",
        script:
          "Brilliant listening today! Before we finish, let us do a quick rhyme hunt around the room. I will say a word and you find something nearby that rhymes with it. Ready? Find something that rhymes with chair... wall... rug. Well done!",
        action:
          "Point to objects in the room and say rhyming words aloud. Let your child run to touch the rhyming object if they find it.",
      },
      parentTip:
        "Rhyming games are perfect in the car or at bath time — no materials needed. Simply take turns adding rhyming words. Do not worry about nonsense words; made-up rhymes show strong phonological thinking. Common misconception: some children match words by meaning rather than sound — they might say 'cat' and 'dog' rhyme because both are animals. Gently redirect: 'Those are both pets, but do they sound the same at the end? Listen: cat... hat. Those rhyme because they both end in -at.' Your child is ready for the worksheet when they can: (1) correctly identify whether two spoken words rhyme at least 4 out of 5 times, (2) produce at least one rhyming word when you give them a starting word, and (3) explain in their own words that rhyming means the ends of words sound the same.",
      extension:
        "Read a rhyming picture book (e.g. Hairy Maclary by Lynley Dodd) together and pause before each rhyming word, letting your child predict what comes next. This aligns with AC V9 Foundation English — Language: listening for rhymes and sound patterns.",
      resources: [
        {
          title: "ABC Education — Phonological Awareness",
          url: "https://www.abc.net.au/education/learn-english/phonological-awareness/",
          description:
            "Short video clips and games focused on rhyme, syllables and beginning sounds for early learners.",
        },
        {
          title: "Starfall — Rhyming Activities",
          url: "https://www.starfall.com/",
          description:
            "Free interactive phonics and rhyming activities with friendly audio support for Foundation-age children.",
        },
        {
          title: "Khan Academy Kids — Phonological Awareness",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Playful app-based activities covering rhyme, beginning sounds and syllables, free for early learners.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Simple CVC rhyme recognition ───
      // 1
      {
        type: "matching" as const,
        title: "Match the Rhymes",
        instruction: "Draw a line to join each word on the left to the word it rhymes with on the right.",
        parentTip: "Say each word aloud clearly and slowly — the child matches by sound, not meaning.",
        left: ["cat", "sun", "dog"],
        right: ["log", "hat", "bun"],
      },
      // 2
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set A)",
        instruction: "Circle YES or NO to show whether the two words rhyme.",
        parentTip: "Read each word pair aloud. If your child is unsure, stretch out the ending sound.",
        questions: [
          { prompt: "cat — hat", options: ["YES", "NO"] },
          { prompt: "dog — log", options: ["YES", "NO"] },
          { prompt: "sun — bus", options: ["YES", "NO"] },
        ],
      },
      // 3
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set B)",
        instruction: "Circle YES or NO to show whether the two words rhyme.",
        questions: [
          { prompt: "red — bed", options: ["YES", "NO"] },
          { prompt: "fish — dish", options: ["YES", "NO"] },
          { prompt: "star — ball", options: ["YES", "NO"] },
        ],
      },
      // 4
      {
        type: "matching" as const,
        title: "Match Rhymes: -at Family",
        instruction: "Draw a line from each word to the word it rhymes with.",
        left: ["cat", "bat", "mat"],
        right: ["hat", "sat", "rat"],
      },
      // 5
      {
        type: "matching" as const,
        title: "Match Rhymes: -og Family",
        instruction: "Draw a line from each word to the word it rhymes with.",
        left: ["dog", "log", "fog"],
        right: ["hog", "jog", "frog"],
      },
      // 6
      {
        type: "circle-correct" as const,
        title: "Which Word Rhymes with cat?",
        instruction: "Circle the word that rhymes with cat.",
        questions: [
          { prompt: "cat", options: ["hat", "cup", "dog"] },
          { prompt: "cat", options: ["sun", "mat", "bed"] },
          { prompt: "cat", options: ["bat", "big", "log"] },
        ],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Which Word Rhymes with dog?",
        instruction: "Circle the word that rhymes with dog.",
        questions: [
          { prompt: "dog", options: ["cat", "log", "sun"] },
          { prompt: "dog", options: ["fog", "hat", "red"] },
          { prompt: "dog", options: ["bed", "pen", "hog"] },
        ],
      },
      // 8
      {
        type: "matching" as const,
        title: "Match Rhymes: -un Family",
        instruction: "Draw a line from each word to its rhyming partner.",
        left: ["sun", "bun", "run"],
        right: ["fun", "gun", "nun"],
      },
      // 9
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set C)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "man — can", options: ["YES", "NO"] },
          { prompt: "big — pig", options: ["YES", "NO"] },
          { prompt: "cup — dog", options: ["YES", "NO"] },
        ],
      },
      // 10
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set A)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "bed", options: ["bat", "red", "big"] },
          { prompt: "pin", options: ["pan", "pit", "bin"] },
          { prompt: "hop", options: ["hat", "mop", "hip"] },
        ],
      },
      // 11
      {
        type: "matching" as const,
        title: "Match Simple Rhyming Pairs",
        instruction: "Draw a line to match each word to the word it rhymes with.",
        left: ["man", "big", "cup"],
        right: ["pup", "can", "pig"],
      },
      // 12
      {
        type: "circle-correct" as const,
        title: "Odd One Out: Which Word Does NOT Rhyme?",
        instruction: "Circle the word that does NOT rhyme with the others.",
        parentTip: "Say all three words aloud. Two will share the same ending sound — the odd one out does not.",
        questions: [
          { prompt: "cat, hat, dog", options: ["cat", "hat", "dog"] },
          { prompt: "sun, bun, bed", options: ["sun", "bun", "bed"] },
          { prompt: "log, fog, cup", options: ["log", "fog", "cup"] },
        ],
      },
      // 13
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set D)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "hen — pen", options: ["YES", "NO"] },
          { prompt: "mop — top", options: ["YES", "NO"] },
          { prompt: "ball — cat", options: ["YES", "NO"] },
        ],
      },
      // 14
      {
        type: "matching" as const,
        title: "Match Rhymes: -en Family",
        instruction: "Draw a line from each word to its rhyming partner.",
        left: ["hen", "pen", "ten"],
        right: ["men", "den", "Ben"],
      },
      // 15 — TIP
      {
        type: "open-response" as const,
        title: "Rhyming Reminder",
        instruction: "Remember: words that RHYME sound the same at the END. Cat and hat rhyme because they both end in -at. Say each pair aloud and listen to the ending sound!",
        parentTip: "This is a good moment to pause and check understanding. Ask your child to explain what rhyming means in their own words.",
        prompts: [
          { text: "Write two words that rhyme with 'cat':", type: "lines" as const, lines: 1 },
          { text: "Write two words that rhyme with 'dog':", type: "lines" as const, lines: 1 },
        ],
      },
      // 16
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set B)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "lake", options: ["lock", "line", "cake"] },
          { prompt: "call", options: ["ball", "bell", "bill"] },
          { prompt: "bee", options: ["bar", "tree", "bat"] },
        ],
      },
      // 17
      {
        type: "matching" as const,
        title: "Match Rhymes: -ig Family",
        instruction: "Draw a line from each word to its rhyme.",
        left: ["big", "dig", "pig"],
        right: ["wig", "fig", "jig"],
      },
      // 18
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set B)",
        instruction: "Circle the word that does NOT rhyme with the others.",
        questions: [
          { prompt: "pin, bin, cat", options: ["pin", "bin", "cat"] },
          { prompt: "mop, top, sun", options: ["mop", "top", "sun"] },
          { prompt: "hen, pen, dog", options: ["hen", "pen", "dog"] },
        ],
      },
      // 19
      {
        type: "matching" as const,
        title: "Match Rhymes: Mixed Set A",
        instruction: "Draw a line from each word on the left to the word it rhymes with on the right.",
        left: ["cat", "sun", "log", "bee", "hat", "tree"],
        right: ["tree", "hat", "sun", "log", "bee", "cat"],
      },
      // 20 — SPARK
      {
        type: "open-response" as const,
        title: "Rhyme Spark: Rhymes Are Everywhere!",
        instruction: "Can you think of a time you heard rhyming words? Maybe in a song, a story or a nursery rhyme? Draw or write about it.",
        parentTip: "This is a curiosity prompt. There is no wrong answer — let your child explore where rhymes appear in their life.",
        prompts: [
          { text: "I heard rhyming words in: ___________________________", type: "lines" as const, lines: 1 },
          { text: "Draw a picture of something that rhymes:", type: "box" as const },
        ],
      },
      // ─── DEVELOPING (21–50): More word families, longer words ───
      // 21
      {
        type: "sorting" as const,
        title: "Sort the Rhyming Families (Set A)",
        instruction: "Read each word. Write it in the correct rhyming family column.",
        parentTip: "Say each word aloud and stress the ending sound to help your child hear the rhyme family.",
        columns: ["-at family", "-og family", "-un family"],
        items: [
          { label: "cat" }, { label: "dog" }, { label: "sun" },
          { label: "bat" }, { label: "log" }, { label: "bun" },
          { label: "mat" }, { label: "fog" }, { label: "run" },
        ],
      },
      // 22
      {
        type: "sorting" as const,
        title: "Sort the Rhyming Families (Set B)",
        instruction: "Read each word. Write it in the correct rhyming family column.",
        columns: ["-en family", "-ig family", "-op family"],
        items: [
          { label: "hen" }, { label: "big" }, { label: "mop" },
          { label: "pen" }, { label: "dig" }, { label: "top" },
          { label: "ten" }, { label: "pig" }, { label: "hop" },
        ],
      },
      // 23
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set C)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "man", options: ["mat", "can", "mop"] },
          { prompt: "sit", options: ["hit", "sun", "sat"] },
          { prompt: "pot", options: ["put", "pet", "hot"] },
          { prompt: "bug", options: ["bag", "rug", "big"] },
        ],
      },
      // 24
      {
        type: "matching" as const,
        title: "Match Rhymes: -op Family",
        instruction: "Draw a line from each word to its rhyme.",
        left: ["mop", "hop", "top"],
        right: ["pop", "stop", "shop"],
      },
      // 25
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set E)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "pot — hot", options: ["YES", "NO"] },
          { prompt: "bug — rug", options: ["YES", "NO"] },
          { prompt: "sit — sun", options: ["YES", "NO"] },
          { prompt: "pan — man", options: ["YES", "NO"] },
        ],
      },
      // 26
      {
        type: "matching" as const,
        title: "Match Rhymes: -an Family",
        instruction: "Draw a line from each word to the word it rhymes with.",
        left: ["man", "can", "pan"],
        right: ["fan", "ran", "van"],
      },
      // 27
      {
        type: "sorting" as const,
        title: "Sort the Rhyming Families (Set C)",
        instruction: "Read each word and sort it into the correct rhyming family.",
        columns: ["-an family", "-ot family", "-ug family"],
        items: [
          { label: "man" }, { label: "pot" }, { label: "bug" },
          { label: "can" }, { label: "hot" }, { label: "rug" },
          { label: "fan" }, { label: "dot" }, { label: "hug" },
        ],
      },
      // 28
      {
        type: "circle-correct" as const,
        title: "Which Two Words Rhyme?",
        instruction: "Look at the three words. Circle the TWO that rhyme.",
        parentTip: "Say all three words aloud. Your child listens for the matching ending sound.",
        questions: [
          { prompt: "cat, dog, hat", options: ["cat + hat", "cat + dog", "dog + hat"] },
          { prompt: "sun, pen, bun", options: ["sun + pen", "sun + bun", "pen + bun"] },
          { prompt: "log, bed, fog", options: ["log + bed", "log + fog", "bed + fog"] },
          { prompt: "big, pig, pot", options: ["big + pig", "big + pot", "pig + pot"] },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Write a Rhyming Word",
        instruction: "Read each word. Write a word that rhymes with it.",
        parentTip: "Accept any real word or nonsense word that rhymes — the skill is hearing the ending sound.",
        prompts: [
          { text: "cat — ______", type: "lines" as const, lines: 1 },
          { text: "dog — ______", type: "lines" as const, lines: 1 },
          { text: "sun — ______", type: "lines" as const, lines: 1 },
          { text: "bed — ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 30 — TIP
      {
        type: "open-response" as const,
        title: "Tip: How to Find a Rhyme",
        instruction: "Here is a tip for finding rhyming words: keep the ending the same and change the first sound! For -at words, try b-at, c-at, f-at, h-at, m-at, r-at, s-at. Now you try with -og words!",
        parentTip: "This strategy (onset substitution) is the core phonics skill behind rhyming. Practise it with several word families.",
        prompts: [
          { text: "Write as many -og words as you can: ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      // 31
      {
        type: "matching" as const,
        title: "Match Rhymes: -it Family",
        instruction: "Draw a line from each word to its rhyme.",
        left: ["sit", "bit", "hit"],
        right: ["fit", "kit", "pit"],
      },
      // 32
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set D)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "net", options: ["nut", "wet", "nap"] },
          { prompt: "rug", options: ["rag", "mug", "rig"] },
          { prompt: "lip", options: ["lap", "tip", "leg"] },
          { prompt: "win", options: ["bin", "bun", "ban"] },
        ],
      },
      // 33
      {
        type: "sorting" as const,
        title: "Sort the Rhyming Families (Set D)",
        instruction: "Read each word and sort it into the correct rhyming family.",
        columns: ["-it family", "-et family", "-ip family"],
        items: [
          { label: "sit" }, { label: "net" }, { label: "lip" },
          { label: "hit" }, { label: "wet" }, { label: "tip" },
          { label: "bit" }, { label: "pet" }, { label: "hip" },
        ],
      },
      // 34
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set C)",
        instruction: "Circle the word that does NOT rhyme with the others.",
        questions: [
          { prompt: "sit, hit, cup", options: ["sit", "hit", "cup"] },
          { prompt: "net, wet, dog", options: ["net", "wet", "dog"] },
          { prompt: "lip, tip, bed", options: ["lip", "tip", "bed"] },
          { prompt: "rug, mug, cat", options: ["rug", "mug", "cat"] },
        ],
      },
      // 35
      {
        type: "matching" as const,
        title: "Match Rhymes: -ot Family",
        instruction: "Draw a line from each word to the word it rhymes with.",
        left: ["pot", "hot", "dot"],
        right: ["got", "lot", "not"],
      },
      // 36
      {
        type: "open-response" as const,
        title: "Write More Rhyming Words",
        instruction: "Write as many rhyming words as you can for each word family.",
        prompts: [
          { text: "-at family (cat, hat, ...): ___________________________", type: "lines" as const, lines: 1 },
          { text: "-en family (hen, pen, ...): ___________________________", type: "lines" as const, lines: 1 },
          { text: "-op family (mop, hop, ...): ___________________________", type: "lines" as const, lines: 1 },
        ],
      },
      // 37
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set F)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "cake — lake", options: ["YES", "NO"] },
          { prompt: "nose — rose", options: ["YES", "NO"] },
          { prompt: "light — night", options: ["YES", "NO"] },
          { prompt: "door — cat", options: ["YES", "NO"] },
        ],
      },
      // 38
      {
        type: "matching" as const,
        title: "Match Rhyming Pairs: Longer Words",
        instruction: "Draw a line to match each word on the left to the word it rhymes with on the right.",
        parentTip: "These words are a little longer than CVC words. Say each one slowly and listen to the ending.",
        left: ["king", "cake", "nose", "light", "door"],
        right: ["night", "ring", "more", "rose", "snake"],
      },
      // 39
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme: Longer Words (Set A)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "cake", options: ["cook", "lake", "kick"] },
          { prompt: "sing", options: ["ring", "song", "sang"] },
          { prompt: "moon", options: ["men", "main", "spoon"] },
          { prompt: "tall", options: ["tell", "wall", "tile"] },
        ],
      },
      // 40 — SPARK
      {
        type: "open-response" as const,
        title: "Rhyme Spark: Rhymes in Your Name!",
        instruction: "Can you find words that rhyme with your name? What about the names of people in your family? Write or draw your ideas.",
        parentTip: "Nonsense rhymes are perfectly fine! If the child's name is Sam, accept ham, dam, and bam. This extends rhyming beyond the worksheet.",
        prompts: [
          { text: "My name is: ___________. Words that rhyme with my name:", type: "lines" as const, lines: 2 },
          { text: "A family member's name: ___________. Rhyming words:", type: "lines" as const, lines: 2 },
        ],
      },
      // 41
      {
        type: "sorting" as const,
        title: "Sort the Rhyming Families (Set E)",
        instruction: "Sort each word into the correct rhyming family.",
        columns: ["-ake family", "-ing family", "-oon family"],
        items: [
          { label: "cake" }, { label: "ring" }, { label: "moon" },
          { label: "lake" }, { label: "sing" }, { label: "spoon" },
          { label: "bake" }, { label: "king" }, { label: "soon" },
        ],
      },
      // 42
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set D)",
        instruction: "Circle the word that does NOT rhyme with the others.",
        questions: [
          { prompt: "cake, lake, dog", options: ["cake", "lake", "dog"] },
          { prompt: "ring, sing, bed", options: ["ring", "sing", "bed"] },
          { prompt: "moon, spoon, hat", options: ["moon", "spoon", "hat"] },
        ],
      },
      // 43
      {
        type: "matching" as const,
        title: "Match Rhymes: -ail Family",
        instruction: "Draw a line from each word to its rhyme.",
        left: ["tail", "mail", "rail"],
        right: ["sail", "nail", "pail"],
      },
      // 44
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set E)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "tail", options: ["tell", "mail", "tile"] },
          { prompt: "boat", options: ["goat", "boot", "bit"] },
          { prompt: "rain", options: ["run", "train", "ring"] },
          { prompt: "tree", options: ["trap", "trip", "free"] },
        ],
      },
      // 45 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Rhyming Chains",
        instruction: "Try making a rhyming chain! Start with a word and keep adding rhyming words until you run out. Example: cat, hat, bat, mat, sat, rat, fat, flat!",
        parentTip: "Rhyming chains build phonological fluency. Celebrate long chains! Nonsense words count too.",
        prompts: [
          { text: "Start with 'dog'. Write your rhyming chain:", type: "lines" as const, lines: 2 },
          { text: "Start with 'pen'. Write your rhyming chain:", type: "lines" as const, lines: 2 },
        ],
      },
      // 46
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set G)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "boat — goat", options: ["YES", "NO"] },
          { prompt: "rain — train", options: ["YES", "NO"] },
          { prompt: "tree — free", options: ["YES", "NO"] },
          { prompt: "ball — bell", options: ["YES", "NO"] },
          { prompt: "tail — mail", options: ["YES", "NO"] },
        ],
      },
      // 47
      {
        type: "sorting" as const,
        title: "Sort the Rhyming Families (Set F)",
        instruction: "Sort each word into the correct rhyming family.",
        columns: ["-oat family", "-ain family", "-ee family"],
        items: [
          { label: "boat" }, { label: "rain" }, { label: "tree" },
          { label: "goat" }, { label: "train" }, { label: "free" },
          { label: "coat" }, { label: "brain" }, { label: "knee" },
        ],
      },
      // 48
      {
        type: "open-response" as const,
        title: "Draw the Rhyming Pair",
        instruction: "Draw a picture of each word. Then draw a picture of a word that rhymes with it.",
        parentTip: "Encourage your child to say the ending sound aloud before drawing. Accept any rhyming word — real or made-up!",
        prompts: [
          { text: "Draw: star. Then draw something that rhymes with star.", type: "box" as const },
          { text: "Draw: bee. Then draw something that rhymes with bee.", type: "box" as const },
        ],
      },
      // 49
      {
        type: "matching" as const,
        title: "Match Rhymes: Mixed Families (Set A)",
        instruction: "Draw a line from each word to its rhyming partner.",
        left: ["cake", "bug", "hen", "boat", "sit"],
        right: ["pen", "rug", "lake", "hit", "goat"],
      },
      // 50
      {
        type: "circle-correct" as const,
        title: "Which Two Words Rhyme? (Set B)",
        instruction: "Circle the TWO words that rhyme.",
        questions: [
          { prompt: "cake, dog, lake", options: ["cake + lake", "cake + dog", "dog + lake"] },
          { prompt: "rain, sun, train", options: ["rain + train", "rain + sun", "sun + train"] },
          { prompt: "boat, goat, bed", options: ["boat + goat", "boat + bed", "goat + bed"] },
          { prompt: "tree, hen, free", options: ["tree + free", "tree + hen", "hen + free"] },
        ],
      },
      // ─── CONSOLIDATING (51–80): Generating rhymes, rhyme chains ───
      // 51
      {
        type: "open-response" as const,
        title: "Write a Rhyming Word (Set B)",
        instruction: "Read each word. Write a word that rhymes with it.",
        prompts: [
          { text: "hen — ______", type: "lines" as const, lines: 1 },
          { text: "mop — ______", type: "lines" as const, lines: 1 },
          { text: "big — ______", type: "lines" as const, lines: 1 },
          { text: "cake — ______", type: "lines" as const, lines: 1 },
          { text: "moon — ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 52
      {
        type: "sorting" as const,
        title: "Sort Rhyming Families (Set G)",
        instruction: "Sort each word into the correct rhyming family.",
        columns: ["-all family", "-ake family", "-ug family"],
        items: [
          { label: "ball" }, { label: "cake" }, { label: "bug" },
          { label: "call" }, { label: "lake" }, { label: "rug" },
          { label: "tall" }, { label: "bake" }, { label: "mug" },
        ],
      },
      // 53
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set F)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "wall", options: ["will", "tall", "well"] },
          { prompt: "fun", options: ["fan", "fin", "sun"] },
          { prompt: "bell", options: ["ball", "bill", "well"] },
          { prompt: "fish", options: ["fash", "dish", "dash"] },
        ],
      },
      // 54
      {
        type: "matching" as const,
        title: "Match Rhymes: -ell Family",
        instruction: "Draw a line from each word to its rhyme.",
        left: ["bell", "well", "tell"],
        right: ["sell", "fell", "shell"],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Rhyming Chain Challenge (Set A)",
        instruction: "Write as many rhyming words as you can for each starting word. Try to write at least four!",
        parentTip: "Time your child for 30 seconds per word family. How many can they write? Celebrate every word!",
        prompts: [
          { text: "Start with 'cat': ___________________________", type: "lines" as const, lines: 2 },
          { text: "Start with 'sun': ___________________________", type: "lines" as const, lines: 2 },
          { text: "Start with 'mop': ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      // 56
      {
        type: "circle-correct" as const,
        title: "How Many Words Rhyme?",
        instruction: "Look at the group of words. Circle how many words rhyme with each other.",
        questions: [
          { prompt: "cat, hat, mat, dog", options: ["2", "3", "4"] },
          { prompt: "sun, bun, run, fun", options: ["2", "3", "4"] },
          { prompt: "pen, hen, car, ten", options: ["1", "2", "3"] },
        ],
      },
      // 57
      {
        type: "matching" as const,
        title: "Match Rhymes: Mixed Families (Set B)",
        instruction: "Draw a line from each word to its rhyming partner.",
        left: ["rain", "tall", "fish", "ring", "bed"],
        right: ["wall", "king", "dish", "train", "red"],
      },
      // 58
      {
        type: "open-response" as const,
        title: "Draw a Rhyming Pair (Set B)",
        instruction: "Draw a picture of each word and a picture of a word that rhymes with it.",
        prompts: [
          { text: "Draw: hat. Then draw something that rhymes with hat.", type: "box" as const },
          { text: "Draw: moon. Then draw something that rhymes with moon.", type: "box" as const },
        ],
      },
      // 59
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set H)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "king — ring", options: ["YES", "NO"] },
          { prompt: "bed — red", options: ["YES", "NO"] },
          { prompt: "cake — milk", options: ["YES", "NO"] },
          { prompt: "wall — ball", options: ["YES", "NO"] },
          { prompt: "fish — dish", options: ["YES", "NO"] },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "home-activity" as const,
        title: "Rhyme All Day",
        instruction: "Try these fun rhyming activities at home — no paper needed!",
        parentTip: "Keep it playful. The goal is for your child to enjoy listening to the sounds in words. Rhyming games are perfect in the car or at bath time.",
        suggestions: [
          "Play I Spy a Rhyme: I spy something that rhymes with door (floor, more, etc.)",
          "Read a nursery rhyme together. Pause before the rhyming word and let your child fill it in.",
          "Make up a silly rhyming sentence using your child's name.",
          "Walk around the house and find two objects whose names rhyme.",
        ],
      },
      // 61
      {
        type: "open-response" as const,
        title: "Finish the Rhyme (Set A)",
        instruction: "Read the sentence. Write a word at the end that rhymes with the underlined word.",
        parentTip: "Read the sentence aloud together. Emphasise the underlined word so your child hears the ending sound clearly.",
        prompts: [
          { text: "The cat sat on a ______ (rhymes with cat)", type: "lines" as const, lines: 1 },
          { text: "The dog sat on a ______ (rhymes with dog)", type: "lines" as const, lines: 1 },
          { text: "The bug was on the ______ (rhymes with bug)", type: "lines" as const, lines: 1 },
          { text: "I can see a big ______ (rhymes with big)", type: "lines" as const, lines: 1 },
        ],
      },
      // 62
      {
        type: "circle-correct" as const,
        title: "Finish the Rhyme: Choose the Word",
        instruction: "Circle the word that best finishes the rhyme.",
        questions: [
          { prompt: "The hen sat in the... (rhymes with hen)", options: ["den", "dog", "hat"] },
          { prompt: "I see a red... (rhymes with red)", options: ["sun", "bed", "cup"] },
          { prompt: "The king can... (rhymes with king)", options: ["run", "sing", "sit"] },
          { prompt: "Look at the moon with a... (rhymes with moon)", options: ["star", "spoon", "sun"] },
        ],
      },
      // 63
      {
        type: "sorting" as const,
        title: "Sort Rhyming Families (Set H)",
        instruction: "Sort each word into the correct rhyming family.",
        columns: ["-ed family", "-ish family", "-ing family"],
        items: [
          { label: "bed" }, { label: "fish" }, { label: "ring" },
          { label: "red" }, { label: "dish" }, { label: "sing" },
          { label: "fed" }, { label: "wish" }, { label: "king" },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Write a Rhyming Word (Set C)",
        instruction: "Read each word. Write a word that rhymes with it.",
        prompts: [
          { text: "ring — ______", type: "lines" as const, lines: 1 },
          { text: "boat — ______", type: "lines" as const, lines: 1 },
          { text: "rain — ______", type: "lines" as const, lines: 1 },
          { text: "bell — ______", type: "lines" as const, lines: 1 },
          { text: "tall — ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 65
      {
        type: "matching" as const,
        title: "Match Rhymes: -ish Family",
        instruction: "Draw a line from each word to its rhyme.",
        left: ["fish", "dish", "wish"],
        right: ["swish", "squish", "vanish"],
      },
      // 66
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set G)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "dish", options: ["dash", "fish", "dip"] },
          { prompt: "red", options: ["rid", "rod", "bed"] },
          { prompt: "sing", options: ["song", "king", "sun"] },
          { prompt: "coat", options: ["cat", "cut", "goat"] },
        ],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Finish the Rhyme (Set B)",
        instruction: "Write a word that rhymes to finish each line.",
        prompts: [
          { text: "I can see a bee in a ______ (rhymes with bee)", type: "lines" as const, lines: 1 },
          { text: "The frog sat on a ______ (rhymes with frog)", type: "lines" as const, lines: 1 },
          { text: "My hat is on the ______ (rhymes with hat)", type: "lines" as const, lines: 1 },
          { text: "The snail left a ______ (rhymes with snail)", type: "lines" as const, lines: 1 },
        ],
      },
      // 68
      {
        type: "sorting" as const,
        title: "Mixed Rhyming Sort",
        instruction: "Sort each word into the correct rhyming family.",
        columns: ["-at family", "-un family", "-ake family", "-ell family"],
        items: [
          { label: "cat" }, { label: "sun" }, { label: "cake" }, { label: "bell" },
          { label: "hat" }, { label: "fun" }, { label: "lake" }, { label: "well" },
          { label: "bat" }, { label: "run" }, { label: "bake" }, { label: "tell" },
        ],
      },
      // 69
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set E)",
        instruction: "Circle the word that does NOT rhyme with the others.",
        questions: [
          { prompt: "cake, lake, sun", options: ["cake", "lake", "sun"] },
          { prompt: "tall, ball, dog", options: ["tall", "ball", "dog"] },
          { prompt: "fish, dish, bed", options: ["fish", "dish", "bed"] },
          { prompt: "ring, sing, cat", options: ["ring", "sing", "cat"] },
        ],
      },
      // 70
      {
        type: "matching" as const,
        title: "Match Rhymes: Mixed Families (Set C)",
        instruction: "Draw a line from each word to its rhyming partner.",
        left: ["bell", "coat", "moon", "cat", "fish"],
        right: ["hat", "tell", "goat", "dish", "spoon"],
      },
      // 71
      {
        type: "open-response" as const,
        title: "Rhyming Chain Challenge (Set B)",
        instruction: "Write as many rhyming words as you can. Try to beat your record from last time!",
        prompts: [
          { text: "Start with 'bell': ___________________________", type: "lines" as const, lines: 2 },
          { text: "Start with 'cake': ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      // 72
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? (Set I)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "snail — tail", options: ["YES", "NO"] },
          { prompt: "frog — log", options: ["YES", "NO"] },
          { prompt: "tree — train", options: ["YES", "NO"] },
          { prompt: "coat — boat", options: ["YES", "NO"] },
          { prompt: "snake — cake", options: ["YES", "NO"] },
        ],
      },
      // 73
      {
        type: "open-response" as const,
        title: "Write a Rhyming Sentence",
        instruction: "Write a short sentence that uses two rhyming words. Example: The cat wore a hat.",
        parentTip: "The sentence does not have to make perfect sense. Silly rhyming sentences are excellent practice!",
        prompts: [
          { text: "My rhyming sentence 1:", type: "lines" as const, lines: 2 },
          { text: "My rhyming sentence 2:", type: "lines" as const, lines: 2 },
        ],
      },
      // 74
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme (Set H)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "snake", options: ["snack", "cake", "sock"] },
          { prompt: "frog", options: ["fig", "flag", "log"] },
          { prompt: "snail", options: ["sail", "sell", "sill"] },
          { prompt: "train", options: ["trip", "rain", "tree"] },
        ],
      },
      // 75 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Rhyming Is Like a Pattern!",
        instruction: "Rhyming words are like a pattern — the ending stays the same and only the beginning changes. Think of it like building blocks! Try building some word families by changing just the first sound.",
        parentTip: "Help your child see the pattern: c-ake, l-ake, b-ake, m-ake, r-ake, sn-ake. The -ake stays the same every time.",
        prompts: [
          { text: "Change the first sound of 'rain': ___________________________", type: "lines" as const, lines: 1 },
          { text: "Change the first sound of 'ball': ___________________________", type: "lines" as const, lines: 1 },
        ],
      },
      // 76
      {
        type: "sorting" as const,
        title: "Sort Rhyming Families (Set I)",
        instruction: "Sort each word into the correct rhyming family.",
        columns: ["-ail family", "-og family", "-ake family"],
        items: [
          { label: "snail" }, { label: "frog" }, { label: "snake" },
          { label: "tail" }, { label: "log" }, { label: "cake" },
          { label: "mail" }, { label: "fog" }, { label: "lake" },
        ],
      },
      // 77
      {
        type: "open-response" as const,
        title: "Draw a Rhyming Pair (Set C)",
        instruction: "Draw two things whose names rhyme. Write the words under your drawings.",
        prompts: [
          { text: "Rhyming pair 1: Draw and label both pictures.", type: "box" as const },
          { text: "Rhyming pair 2: Draw and label both pictures.", type: "box" as const },
        ],
      },
      // 78
      {
        type: "matching" as const,
        title: "Match Rhymes: Mixed Families (Set D)",
        instruction: "Draw a line from each word to its rhyming partner.",
        left: ["snail", "frog", "cake", "moon", "bell"],
        right: ["log", "tail", "spoon", "lake", "tell"],
      },
      // 79
      {
        type: "circle-correct" as const,
        title: "Which Three Words Rhyme?",
        instruction: "Look at the words. Circle the THREE that all rhyme with each other.",
        parentTip: "This is harder than picking pairs — your child must find the shared ending sound among four words.",
        questions: [
          { prompt: "cat, hat, dog, mat", options: ["cat + hat + mat", "cat + hat + dog", "hat + dog + mat"] },
          { prompt: "sun, bun, pen, fun", options: ["sun + bun + fun", "sun + bun + pen", "bun + pen + fun"] },
          { prompt: "ring, king, hat, sing", options: ["ring + king + sing", "ring + king + hat", "king + hat + sing"] },
        ],
      },
      // 80 — SPARK
      {
        type: "open-response" as const,
        title: "Rhyme Spark: Rhymes in Songs and Stories",
        instruction: "Think about a song or nursery rhyme you know. Can you write down two pairs of rhyming words from it?",
        parentTip: "Connecting rhyme to music deepens phonological awareness. Sing a nursery rhyme together and pause at the rhyming words.",
        prompts: [
          { text: "The song or rhyme is called: ___________________________", type: "lines" as const, lines: 1 },
          { text: "Rhyming pair 1: ____________ and ____________", type: "lines" as const, lines: 1 },
          { text: "Rhyming pair 2: ____________ and ____________", type: "lines" as const, lines: 1 },
        ],
      },
      // ─── EXTENDING (81–100): Creative production, multi-syllable ───
      // 81
      {
        type: "open-response" as const,
        title: "Write a Two-Line Rhyme",
        instruction: "Write two lines where the last word in each line rhymes. Example: I saw a cat / sitting on a mat.",
        parentTip: "Help your child choose a rhyming pair first, then build the lines around those words.",
        prompts: [
          { text: "Line 1: ___________________________", type: "lines" as const, lines: 1 },
          { text: "Line 2: ___________________________", type: "lines" as const, lines: 1 },
        ],
      },
      // 82
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? Multi-Syllable Words",
        instruction: "Circle YES or NO. These words are longer — listen to the ending carefully!",
        parentTip: "Multi-syllable rhymes are harder. Say each word slowly and emphasise the last syllable.",
        questions: [
          { prompt: "funny — bunny", options: ["YES", "NO"] },
          { prompt: "happy — snappy", options: ["YES", "NO"] },
          { prompt: "tiger — bigger", options: ["YES", "NO"] },
          { prompt: "jelly — belly", options: ["YES", "NO"] },
          { prompt: "kitten — mitten", options: ["YES", "NO"] },
        ],
      },
      // 83
      {
        type: "matching" as const,
        title: "Match Multi-Syllable Rhymes",
        instruction: "Draw a line from each word to the word it rhymes with.",
        left: ["funny", "jelly", "kitten", "sunny"],
        right: ["belly", "mitten", "bunny", "honey"],
      },
      // 84
      {
        type: "open-response" as const,
        title: "Write a Rhyming Word: Longer Words",
        instruction: "Read each word. Write a word that rhymes with it. These words are longer!",
        prompts: [
          { text: "funny — ______", type: "lines" as const, lines: 1 },
          { text: "jelly — ______", type: "lines" as const, lines: 1 },
          { text: "sunny — ______", type: "lines" as const, lines: 1 },
          { text: "kitten — ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 85
      {
        type: "sorting" as const,
        title: "Sort Multi-Syllable Rhyming Families",
        instruction: "Sort each word into the correct rhyming family.",
        columns: ["-unny family", "-elly family", "-itten family"],
        items: [
          { label: "funny" }, { label: "jelly" }, { label: "kitten" },
          { label: "bunny" }, { label: "belly" }, { label: "mitten" },
          { label: "sunny" }, { label: "smelly" }, { label: "bitten" },
        ],
      },
      // 86
      {
        type: "circle-correct" as const,
        title: "Pick the Rhyme: Longer Words (Set B)",
        instruction: "Circle the word that rhymes with the first word.",
        questions: [
          { prompt: "happy", options: ["hippy", "snappy", "hoppy"] },
          { prompt: "flower", options: ["tower", "floor", "four"] },
          { prompt: "wiggle", options: ["waggle", "giggle", "woggle"] },
          { prompt: "batter", options: ["bitter", "butter", "matter"] },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Finish the Rhyme: Fun Sentences",
        instruction: "Write a word that rhymes to finish each sentence.",
        prompts: [
          { text: "The funny little ______ (rhymes with funny)", type: "lines" as const, lines: 1 },
          { text: "I have a wiggly ______ (rhymes with wiggly)", type: "lines" as const, lines: 1 },
          { text: "My kitten lost its ______ (rhymes with kitten)", type: "lines" as const, lines: 1 },
          { text: "The jelly in my ______ (rhymes with jelly)", type: "lines" as const, lines: 1 },
        ],
      },
      // 88
      {
        type: "circle-correct" as const,
        title: "Odd One Out: Longer Words",
        instruction: "Circle the word that does NOT rhyme with the others.",
        questions: [
          { prompt: "funny, bunny, jelly", options: ["funny", "bunny", "jelly"] },
          { prompt: "kitten, mitten, happy", options: ["kitten", "mitten", "happy"] },
          { prompt: "sunny, honey, tower", options: ["sunny", "honey", "tower"] },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Make Up a Silly Rhyme",
        instruction: "Make up a silly sentence that uses two rhyming words. The sillier, the better!",
        parentTip: "Silly rhymes make learning memorable. Laugh together!",
        prompts: [
          { text: "My silly rhyme 1:", type: "lines" as const, lines: 2 },
          { text: "My silly rhyme 2:", type: "lines" as const, lines: 2 },
        ],
      },
      // 90 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Listen to the End of the Word",
        instruction: "When you are not sure if two words rhyme, try this: say just the ENDING of each word. If the endings sound the same, they rhyme! Cat ends in -at. Hat ends in -at. Same ending, so they rhyme!",
        parentTip: "This metacognitive strategy helps children self-check. Practise it with several word pairs to make it automatic.",
        prompts: [
          { text: "What ending sound does 'moon' have? ______. Write a word with the same ending:", type: "lines" as const, lines: 1 },
          { text: "What ending sound does 'cake' have? ______. Write a word with the same ending:", type: "lines" as const, lines: 1 },
        ],
      },
      // 91
      {
        type: "matching" as const,
        title: "Big Rhyme Match: 8 Pairs",
        instruction: "Draw a line from each word on the left to its rhyming partner on the right.",
        left: ["cat", "moon", "ring", "boat", "bed", "cake", "fish", "funny"],
        right: ["bunny", "hat", "king", "dish", "spoon", "goat", "red", "lake"],
      },
      // 92
      {
        type: "open-response" as const,
        title: "Write a Four-Line Rhyme",
        instruction: "Write a little poem that is four lines long. The last word in line 1 should rhyme with the last word in line 2, and line 3 should rhyme with line 4.",
        parentTip: "Help your child plan by choosing two rhyming pairs first (e.g., cat/hat and sun/fun), then building the poem around them.",
        prompts: [
          { text: "Line 1:", type: "lines" as const, lines: 1 },
          { text: "Line 2 (rhymes with line 1):", type: "lines" as const, lines: 1 },
          { text: "Line 3:", type: "lines" as const, lines: 1 },
          { text: "Line 4 (rhymes with line 3):", type: "lines" as const, lines: 1 },
        ],
      },
      // 93
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme? Mixed Challenge",
        instruction: "Circle YES or NO. These include short and long words!",
        questions: [
          { prompt: "snake — cake", options: ["YES", "NO"] },
          { prompt: "bunny — funny", options: ["YES", "NO"] },
          { prompt: "tiger — river", options: ["YES", "NO"] },
          { prompt: "goat — boat", options: ["YES", "NO"] },
          { prompt: "kitten — mitten", options: ["YES", "NO"] },
          { prompt: "flower — tower", options: ["YES", "NO"] },
        ],
      },
      // 94
      {
        type: "open-response" as const,
        title: "Rhyme It: Name Three",
        instruction: "For each word, write THREE words that rhyme with it.",
        parentTip: "This builds fluency. Encourage your child to work quickly and accept nonsense words.",
        prompts: [
          { text: "cat: ______, ______, ______", type: "lines" as const, lines: 1 },
          { text: "moon: ______, ______, ______", type: "lines" as const, lines: 1 },
          { text: "bell: ______, ______, ______", type: "lines" as const, lines: 1 },
          { text: "cake: ______, ______, ______", type: "lines" as const, lines: 1 },
          { text: "funny: ______, ______, ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 95
      {
        type: "sorting" as const,
        title: "Grand Rhyme Sort",
        instruction: "Sort all these words into the correct rhyming families. Think carefully — there are four families!",
        columns: ["-at family", "-oon family", "-ake family", "-ell family"],
        items: [
          { label: "cat" }, { label: "moon" }, { label: "cake" }, { label: "bell" },
          { label: "hat" }, { label: "spoon" }, { label: "lake" }, { label: "well" },
          { label: "mat" }, { label: "soon" }, { label: "bake" }, { label: "tell" },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Rhyming Story Starter",
        instruction: "Write the start of a story using as many rhyming words as you can. Example: Once upon a time, a cat wore a hat and sat on a mat.",
        parentTip: "The story does not need to be long — even 2 to 3 sentences with rhymes shows strong phonological skill.",
        prompts: [
          { text: "My rhyming story:", type: "lines" as const, lines: 4 },
        ],
      },
      // 97
      {
        type: "open-response" as const,
        title: "Create Your Own Rhyming Family",
        instruction: "Pick a word ending (like -ump or -ick). Write as many words as you can with that ending.",
        parentTip: "Let your child choose any ending. This is creative phonics! Accept nonsense words alongside real ones.",
        prompts: [
          { text: "My word ending is: -______", type: "lines" as const, lines: 1 },
          { text: "Words with this ending: ___________________________", type: "lines" as const, lines: 3 },
        ],
      },
      // 98
      {
        type: "circle-correct" as const,
        title: "Grand Rhyme Quiz",
        instruction: "Circle the word that rhymes with the first word. These are tricky!",
        questions: [
          { prompt: "bright", options: ["bite", "night", "neat"] },
          { prompt: "mouse", options: ["moose", "house", "mess"] },
          { prompt: "chair", options: ["cheer", "bear", "cheese"] },
          { prompt: "cream", options: ["cram", "dream", "drum"] },
          { prompt: "light", options: ["late", "tight", "let"] },
        ],
      },
      // 99
      {
        type: "home-activity" as const,
        title: "Rhyme Champion Challenge",
        instruction: "You are now a Rhyme Champion! Try these advanced rhyming activities.",
        parentTip: "These activities consolidate everything your child has learned. Revisit any earlier activities if they find these challenging.",
        suggestions: [
          "Make up a rhyming song about something you did today.",
          "Find five pairs of rhyming objects in your house and line them up together.",
          "Play Rhyme Tennis: take turns saying rhyming words. First person who cannot think of one loses the point!",
          "Read a favourite picture book and count all the rhyming pairs you can hear.",
        ],
      },
      // 100 — SPARK
      {
        type: "open-response" as const,
        title: "Rhyme Spark: Why Do We Love Rhymes?",
        instruction: "Think about this big question: Why do you think people love rhyming words? Why do songs, poems and stories use them? Write or draw your ideas.",
        parentTip: "This is a reflective prompt with no wrong answer. It encourages your child to think about language as something interesting and purposeful.",
        prompts: [
          { text: "I think people love rhymes because:", type: "lines" as const, lines: 3 },
          { text: "Draw your favourite rhyming pair from this whole worksheet:", type: "box" as const },
        ],
      },
    ],
  },

  // ── WS 2: Beginning Sounds ────────────────────────────────
  {
    slug: "beginning-sounds",
    title: "Beginning Sounds",
    strand: "Language",
    description:
      "Listen for and identify the first sound (phoneme) in spoken words — a critical phonics and phonological awareness skill.",
    learningGuide: {
      concept:
        "A phoneme is the smallest unit of sound in a word. The first phoneme (beginning sound) of 'cat' is /k/. Isolating beginning sounds helps children link letters to the sounds they represent — the core of phonics.",
      activation:
        "Play I-Spy using beginning sounds: I spy something beginning with /s/... (sun, sock, seat). This warms up phonological awareness before written work.",
      check:
        "Ask your child: What sound does this word start with? using familiar objects around the home. Can they isolate the first sound independently?",
    },
    lesson: {
      title: "What's the First Sound?",
      objective:
        "Isolate and say the first phoneme in spoken single-syllable words.",
      materials: [
        "Old magazines or catalogues (for picture cutting, optional)",
        "Pencil and crayons",
        "A set of household objects: sock, book, cup, pen, apple",
      ],
      intro: {
        title: "Sound Detectives",
        script:
          "We are going to be sound detectives today! A detective listens very, very carefully. I am going to say a word and I want you to tell me the VERY FIRST sound you hear — just the first little sound. Listen: mmmoon. What is the first sound? Yes, /m/! Now try this one: sssun. What is the first sound? Great, /s/!",
        action:
          "Hold up each object one at a time. Say the word slowly, stretching the first sound: 'sssock — what sound do you hear first?' If your child says the letter name instead of the sound, model the correction: 'That is the letter S, and the sound it makes is /s/. Let us say it together: /s/.' Work through all 5 objects: sock (/s/), book (/b/), cup (/k/), pen (/p/), apple (/a/). Keep it playful — hide objects behind your back and reveal them one at a time.",
      },
      mainActivity: {
        title: "Sort by Beginning Sound",
        script:
          "I am going to say some words, and you are going to sort them into groups based on their beginning sound. I will say the word, you say the beginning sound, and then put it in the right group. Let us try: sun starts with /s/. Mum starts with /m/. Banana — what does banana start with? That is right, /b/! Here is a tricky one: chair. It does not start with /c/ — it starts with /ch/. Two letters can make one sound together.",
        action:
          "Draw two or three columns on paper, each headed by a large letter (e.g. S, M, B). Gather 6 to 8 small objects or picture cards. Say each word clearly, stretching the first sound. Your child places or draws each item in the correct column. If they are unsure, say the word again and emphasise the first sound: 'Listen one more time — mmmmilk. Which column?' After sorting, point to each column and read all the words together: 'S column: sun, sock, spoon — they all start with /s/!'",
      },
      wrapUp: {
        title: "Beginning Sound I-Spy",
        script:
          "Let us finish with a round of Sound I-Spy. I will pick a beginning sound and you find as many things in the room as you can that start with that sound. I spy with my little eye... everything starting with /b/! Book, ball, bed — brilliant! Now you pick a sound for me.",
        action:
          "Take turns choosing a beginning sound. Set a 30-second timer for each round. Count how many objects you each find. The child who finds the most wins a high-five. If your child picks a difficult sound like /th/, celebrate the challenge rather than correcting.",
      },
      parentTip:
        "The key is to say the SOUND, not the letter name — say /s/ not 'ess'. Stretch the first sound slightly: sssun, mmmoon. This makes it much easier for young children to hear and identify. Common misconception: children often confuse the letter name with the letter sound — they might say the first sound in 'cat' is 'see' instead of /k/. If this happens, gently say: 'That is the letter name — the sound it makes is /k/. Listen: /k/ /k/ cat.' Another common confusion is with blends like 'sp' in 'spoon' — children may say the first sound is /s/ or /p/ rather than hearing both. At this stage, accept /s/ as correct for 'spoon' and save blends for Year 1. Your child is ready for the worksheet when they can: (1) correctly identify the beginning sound of at least 4 out of 5 spoken words, (2) distinguish between the letter name and the letter sound when prompted, and (3) sort objects by beginning sound with minimal help.",
      extension:
        "Help your child make an alphabet sound book: fold 3 pieces of paper in half to make a booklet. Assign one letter per page and draw or paste pictures of things beginning with that sound. This covers AC V9 Foundation — naming letters and knowing the sounds they represent.",
      resources: [
        {
          title: "Starfall — Letter Sounds",
          url: "https://www.starfall.com/h/abcs/",
          description:
            "Interactive letter-sound activities where children can hear and practise each phoneme.",
        },
        {
          title: "ABC Education — Phonics",
          url: "https://www.abc.net.au/education/learn-english/phonics/",
          description:
            "Video resources and activities for Foundation phonics, aligned to the Australian Curriculum.",
        },
        {
          title: "Reading Eggs — Phonics Lessons",
          url: "https://readingeggs.com.au/",
          description:
            "Structured phonics program with engaging games covering letter-sound relationships from Foundation level.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Identify beginning sounds /s/, /m/, /b/, /t/ ───
      // 1
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? (Set A)",
        instruction: "Listen to each word. Circle the sound it starts with.",
        parentTip: "Say each word slowly, stretching the first sound: sssun, mmmat. Say the SOUND, not the letter name.",
        questions: [
          { prompt: "sun", options: ["/s/", "/m/", "/t/"] },
          { prompt: "mat", options: ["/b/", "/m/", "/f/"] },
          { prompt: "bat", options: ["/b/", "/d/", "/p/"] },
        ],
      },
      // 2
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound? (Set A)",
        instruction: "Circle YES if the two words start with the same sound. Circle NO if they do not.",
        parentTip: "Emphasise the first sound: sssun... sssock — do they start the same?",
        questions: [
          { prompt: "sun — sock", options: ["YES", "NO"] },
          { prompt: "cat — dog", options: ["YES", "NO"] },
          { prompt: "man — mop", options: ["YES", "NO"] },
        ],
      },
      // 3
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /s/ and /m/",
        instruction: "Listen to each word. Write it in the column that matches its beginning sound.",
        parentTip: "Say each word clearly. Stretch the first sound slightly: sssun, mmmat.",
        columns: ["/s/ sound", "/m/ sound"],
        items: [
          { label: "sun" }, { label: "mat" }, { label: "sock" },
          { label: "man" }, { label: "sit" }, { label: "mop" },
        ],
      },
      // 4
      {
        type: "matching" as const,
        title: "Match the Sound to the Word (Set A)",
        instruction: "Draw a line from each beginning sound to a word that starts with it.",
        left: ["/s/", "/m/", "/b/"],
        right: ["bat", "sun", "mat"],
      },
      // 5
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? (Set B)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "dog", options: ["/d/", "/b/", "/g/"] },
          { prompt: "pen", options: ["/t/", "/p/", "/s/"] },
          { prompt: "top", options: ["/t/", "/d/", "/b/"] },
        ],
      },
      // 6
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /b/ and /t/",
        instruction: "Listen to each word. Write it in the correct column.",
        columns: ["/b/ sound", "/t/ sound"],
        items: [
          { label: "bat" }, { label: "top" }, { label: "bus" },
          { label: "tin" }, { label: "bed" }, { label: "ten" },
        ],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound? (Set B)",
        instruction: "Circle YES if the two words start with the same sound.",
        questions: [
          { prompt: "bed — bus", options: ["YES", "NO"] },
          { prompt: "top — tin", options: ["YES", "NO"] },
          { prompt: "sun — bat", options: ["YES", "NO"] },
        ],
      },
      // 8
      {
        type: "matching" as const,
        title: "Match the Sound to the Word (Set B)",
        instruction: "Draw a line from each beginning sound to a word that starts with it.",
        left: ["/d/", "/p/", "/t/"],
        right: ["pen", "dog", "top"],
      },
      // 9
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /s/, /m/, /b/, /t/",
        instruction: "Listen to each word. Write it in the column that matches its beginning sound.",
        columns: ["/s/ sound", "/m/ sound", "/b/ sound", "/t/ sound"],
        items: [
          { label: "sun" }, { label: "mat" }, { label: "bat" }, { label: "top" },
          { label: "sock" }, { label: "man" }, { label: "bus" }, { label: "tin" },
        ],
      },
      // 10
      {
        type: "circle-correct" as const,
        title: "Odd One Out: Different Beginning Sound (Set A)",
        instruction: "Circle the word that starts with a DIFFERENT sound from the others.",
        parentTip: "Say all three words aloud. Two start with the same sound — the odd one out starts differently.",
        questions: [
          { prompt: "sun, sock, mat", options: ["sun", "sock", "mat"] },
          { prompt: "bat, bed, top", options: ["bat", "bed", "top"] },
          { prompt: "man, mop, pen", options: ["man", "mop", "pen"] },
        ],
      },
      // 11
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? (Set C)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "fan", options: ["/f/", "/v/", "/p/"] },
          { prompt: "hat", options: ["/m/", "/h/", "/t/"] },
          { prompt: "red", options: ["/r/", "/l/", "/w/"] },
        ],
      },
      // 12
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /f/ and /h/",
        instruction: "Listen to each word. Sort it into the correct column.",
        columns: ["/f/ sound", "/h/ sound"],
        items: [
          { label: "fan" }, { label: "hat" }, { label: "fish" },
          { label: "hen" }, { label: "fun" }, { label: "hop" },
        ],
      },
      // 13
      {
        type: "matching" as const,
        title: "Match the Sound to the Word (Set C)",
        instruction: "Draw a line from each beginning sound to a word that starts with it.",
        left: ["/f/", "/h/", "/r/"],
        right: ["hat", "fish", "red"],
      },
      // 14
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound? (Set C)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "fish — fan", options: ["YES", "NO"] },
          { prompt: "hat — hen", options: ["YES", "NO"] },
          { prompt: "red — mat", options: ["YES", "NO"] },
          { prompt: "fun — fog", options: ["YES", "NO"] },
        ],
      },
      // 15 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Say the Sound, Not the Letter Name",
        instruction: "Remember: when we talk about beginning sounds, we say the SOUND, not the letter name. The letter S makes the sound /s/ (like a snake hissing). The letter M makes the sound /m/ (like humming). Try saying the sound for each letter below.",
        parentTip: "The distinction between letter names and letter sounds is crucial at this stage. Always model the sound, not the name.",
        prompts: [
          { text: "What sound does the letter B make? ______", type: "lines" as const, lines: 1 },
          { text: "What sound does the letter T make? ______", type: "lines" as const, lines: 1 },
          { text: "What sound does the letter F make? ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 16
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? (Set D)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "cat", options: ["/k/", "/s/", "/t/"] },
          { prompt: "go", options: ["/j/", "/g/", "/k/"] },
          { prompt: "leg", options: ["/l/", "/r/", "/n/"] },
        ],
      },
      // 17
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /k/ (c) and /g/",
        instruction: "Listen to each word. Sort it into the correct column.",
        columns: ["/k/ sound (c)", "/g/ sound"],
        items: [
          { label: "cat" }, { label: "go" }, { label: "cup" },
          { label: "got" }, { label: "can" }, { label: "gap" },
        ],
      },
      // 18
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set B)",
        instruction: "Circle the word that starts with a DIFFERENT sound.",
        questions: [
          { prompt: "cat, cup, dog", options: ["cat", "cup", "dog"] },
          { prompt: "go, got, hat", options: ["go", "got", "hat"] },
          { prompt: "leg, lip, bat", options: ["leg", "lip", "bat"] },
        ],
      },
      // 19
      {
        type: "matching" as const,
        title: "Match Six Sounds to Words",
        instruction: "Draw a line from each beginning sound to a word that starts with it.",
        left: ["/s/", "/m/", "/t/", "/f/", "/h/", "/r/"],
        right: ["hat", "rainbow", "moon", "sun", "table", "fish"],
      },
      // 20 — SPARK
      {
        type: "open-response" as const,
        title: "Sound Spark: Sounds Around You",
        instruction: "Look around the room you are in right now. Can you find something that starts with each sound? Write or draw what you find.",
        parentTip: "This connects phonics to the real world. If your child cannot write the word, the first letter is enough!",
        prompts: [
          { text: "Something starting with /s/: _______________", type: "lines" as const, lines: 1 },
          { text: "Something starting with /b/: _______________", type: "lines" as const, lines: 1 },
          { text: "Something starting with /t/: _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // ─── DEVELOPING (21–50): More sounds, matching and sorting ───
      // 21
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? (Set E)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "net", options: ["/n/", "/m/", "/l/"] },
          { prompt: "van", options: ["/v/", "/f/", "/w/"] },
          { prompt: "wet", options: ["/w/", "/v/", "/y/"] },
          { prompt: "jug", options: ["/j/", "/g/", "/d/"] },
        ],
      },
      // 22
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /n/ and /l/",
        instruction: "Listen to each word. Sort it into the correct column.",
        columns: ["/n/ sound", "/l/ sound"],
        items: [
          { label: "net" }, { label: "leg" }, { label: "nut" },
          { label: "lip" }, { label: "nap" }, { label: "log" },
        ],
      },
      // 23
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound? (Set D)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "net — nut", options: ["YES", "NO"] },
          { prompt: "van — wet", options: ["YES", "NO"] },
          { prompt: "jug — jam", options: ["YES", "NO"] },
          { prompt: "leg — lip", options: ["YES", "NO"] },
        ],
      },
      // 24
      {
        type: "matching" as const,
        title: "Match Sounds to Words (Set D)",
        instruction: "Draw a line from each beginning sound to a word that starts with it.",
        left: ["/n/", "/l/", "/v/", "/w/"],
        right: ["wet", "net", "van", "leg"],
      },
      // 25
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /v/, /w/, /j/",
        instruction: "Listen to each word. Sort it into the correct column.",
        columns: ["/v/ sound", "/w/ sound", "/j/ sound"],
        items: [
          { label: "van" }, { label: "wet" }, { label: "jug" },
          { label: "vet" }, { label: "win" }, { label: "jam" },
          { label: "vest" }, { label: "wig" }, { label: "jet" },
        ],
      },
      // 26
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set C)",
        instruction: "Circle the word that starts with a DIFFERENT sound.",
        questions: [
          { prompt: "van, vet, win", options: ["van", "vet", "win"] },
          { prompt: "jug, jam, net", options: ["jug", "jam", "net"] },
          { prompt: "wet, wig, van", options: ["wet", "wig", "van"] },
        ],
      },
      // 27
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? (Set F)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "zip", options: ["/z/", "/s/", "/j/"] },
          { prompt: "yak", options: ["/y/", "/j/", "/w/"] },
          { prompt: "kite", options: ["/k/", "/t/", "/g/"] },
        ],
      },
      // 28
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /z/, /y/, /k/",
        instruction: "Listen to each word. Sort it into the correct column.",
        columns: ["/z/ sound", "/y/ sound", "/k/ sound"],
        items: [
          { label: "zip" }, { label: "yak" }, { label: "kite" },
          { label: "zoo" }, { label: "yell" }, { label: "kit" },
          { label: "zap" }, { label: "yet" }, { label: "key" },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Write Words That Start With...",
        instruction: "Write or draw a word that starts with each sound.",
        parentTip: "Accept any word, even if the spelling is invented. The skill here is hearing the beginning sound.",
        prompts: [
          { text: "A word starting with /s/: _______________", type: "lines" as const, lines: 1 },
          { text: "A word starting with /m/: _______________", type: "lines" as const, lines: 1 },
          { text: "A word starting with /h/: _______________", type: "lines" as const, lines: 1 },
          { text: "A word starting with /d/: _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 30 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Stretch the Sound!",
        instruction: "Here is a trick for hearing the beginning sound: stretch it out! Say sssssun — hear that /s/? Say mmmmoon — hear that /m/? Try stretching these words and write the beginning sound.",
        parentTip: "Continuous sounds like /s/, /m/, /f/, /l/ are easiest to stretch. Stop sounds like /b/, /t/, /d/ need a quick puff of air.",
        prompts: [
          { text: "Stretch 'fish': the beginning sound is /____/", type: "lines" as const, lines: 1 },
          { text: "Stretch 'lamp': the beginning sound is /____/", type: "lines" as const, lines: 1 },
          { text: "Stretch 'nose': the beginning sound is /____/", type: "lines" as const, lines: 1 },
        ],
      },
      // 31
      {
        type: "matching" as const,
        title: "Match Eight Sounds to Words",
        instruction: "Draw a line from each beginning sound to a word that starts with it.",
        left: ["/s/", "/m/", "/b/", "/t/", "/f/", "/h/", "/d/", "/p/"],
        right: ["dog", "bat", "hat", "pen", "sun", "fish", "top", "mat"],
      },
      // 32
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? (Set G)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "ball", options: ["/b/", "/d/", "/p/"] },
          { prompt: "moon", options: ["/m/", "/n/", "/w/"] },
          { prompt: "tent", options: ["/d/", "/t/", "/n/"] },
          { prompt: "lock", options: ["/l/", "/r/", "/k/"] },
        ],
      },
      // 33
      {
        type: "sorting" as const,
        title: "Big Sort: Six Sounds",
        instruction: "Sort each word by its beginning sound.",
        columns: ["/s/", "/m/", "/b/", "/t/", "/f/", "/h/"],
        items: [
          { label: "sun" }, { label: "mop" }, { label: "bus" },
          { label: "top" }, { label: "fan" }, { label: "hat" },
          { label: "sit" }, { label: "map" }, { label: "bug" },
          { label: "tap" }, { label: "fog" }, { label: "hop" },
        ],
      },
      // 34
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound? (Set E)",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "ball — book", options: ["YES", "NO"] },
          { prompt: "cat — kite", options: ["YES", "NO"] },
          { prompt: "dog — pig", options: ["YES", "NO"] },
          { prompt: "sun — sat", options: ["YES", "NO"] },
          { prompt: "mop — nap", options: ["YES", "NO"] },
        ],
      },
      // 35
      {
        type: "open-response" as const,
        title: "Draw It — Beginning Sound /b/",
        instruction: "Draw two things that begin with the sound /b/. Write the first letter next to each drawing.",
        prompts: [
          { text: "My first /b/ drawing:", type: "box" as const },
          { text: "My second /b/ drawing:", type: "box" as const },
        ],
      },
      // 36
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set D)",
        instruction: "Circle the word that starts with a DIFFERENT sound.",
        questions: [
          { prompt: "fish, fan, hat", options: ["fish", "fan", "hat"] },
          { prompt: "dog, dig, bus", options: ["dog", "dig", "bus"] },
          { prompt: "net, nap, log", options: ["net", "nap", "log"] },
          { prompt: "cat, cup, sun", options: ["cat", "cup", "sun"] },
        ],
      },
      // 37
      {
        type: "matching" as const,
        title: "Match Words with Same Beginning Sound",
        instruction: "Draw a line to match words that START with the same sound.",
        parentTip: "This flips the task — instead of matching a sound to a word, your child matches two words by their shared beginning sound.",
        left: ["sun", "bat", "mop", "hat", "dog"],
        right: ["hen", "sock", "bed", "map", "dig"],
      },
      // 38
      {
        type: "open-response" as const,
        title: "Write Words That Start With... (Set B)",
        instruction: "Write a word that starts with each sound.",
        prompts: [
          { text: "A word starting with /f/: _______________", type: "lines" as const, lines: 1 },
          { text: "A word starting with /r/: _______________", type: "lines" as const, lines: 1 },
          { text: "A word starting with /l/: _______________", type: "lines" as const, lines: 1 },
          { text: "A word starting with /n/: _______________", type: "lines" as const, lines: 1 },
          { text: "A word starting with /g/: _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 39
      {
        type: "circle-correct" as const,
        title: "Pick the Word (Set A)",
        instruction: "I am looking for a word that starts with the sound shown. Circle the correct word.",
        questions: [
          { prompt: "Starts with /p/:", options: ["bat", "pen", "dog"] },
          { prompt: "Starts with /r/:", options: ["leg", "mat", "red"] },
          { prompt: "Starts with /w/:", options: ["wig", "van", "jam"] },
          { prompt: "Starts with /j/:", options: ["zip", "yak", "jet"] },
        ],
      },
      // 40 — SPARK
      {
        type: "open-response" as const,
        title: "Sound Spark: Sounds in Your Name",
        instruction: "What sound does YOUR name start with? What about the names of people in your family? Write them down!",
        parentTip: "Names are highly motivating for young learners. Accept the sound, not the letter name.",
        prompts: [
          { text: "My name starts with the sound: /____/", type: "lines" as const, lines: 1 },
          { text: "Other names in my family and their beginning sounds:", type: "lines" as const, lines: 3 },
        ],
      },
      // ─── CONSOLIDATING (41–70): Applying sounds, vowels, production ───
      // 41
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? Vowels (Set A)",
        instruction: "Circle the sound each word starts with. These words start with vowel sounds!",
        parentTip: "Vowel sounds at the beginning of words are often harder to isolate. Say the word slowly and emphasise the opening sound.",
        questions: [
          { prompt: "apple", options: ["/a/", "/e/", "/o/"] },
          { prompt: "egg", options: ["/a/", "/e/", "/i/"] },
          { prompt: "up", options: ["/u/", "/a/", "/o/"] },
        ],
      },
      // 42
      {
        type: "sorting" as const,
        title: "Sort by Vowel Sound: /a/, /e/, /i/",
        instruction: "Listen to the beginning sound. Sort each word into the correct column.",
        columns: ["/a/ sound", "/e/ sound", "/i/ sound"],
        items: [
          { label: "apple" }, { label: "egg" }, { label: "it" },
          { label: "ant" }, { label: "elf" }, { label: "in" },
          { label: "at" }, { label: "end" }, { label: "ill" },
        ],
      },
      // 43
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? Vowels (Set B)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "on", options: ["/o/", "/u/", "/a/"] },
          { prompt: "under", options: ["/u/", "/o/", "/i/"] },
          { prompt: "if", options: ["/a/", "/e/", "/i/"] },
        ],
      },
      // 44
      {
        type: "open-response" as const,
        title: "Draw It — Beginning Sound /a/",
        instruction: "Draw two things that begin with the sound /a/ (like apple or ant). Write the first letter next to each drawing.",
        parentTip: "If your child cannot think of words, prompt gently: What about something you see in the garden? An ant!",
        prompts: [
          { text: "My first /a/ drawing:", type: "box" as const },
          { text: "My second /a/ drawing:", type: "box" as const },
        ],
      },
      // 45 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Consonant Sounds vs Vowel Sounds",
        instruction: "Some sounds you can stretch (like /s/, /m/, /f/) and some are a quick puff of air (like /b/, /t/, /d/). The vowel sounds /a/, /e/, /i/, /o/, /u/ open your mouth wide. Try it!",
        parentTip: "Understanding the difference between continuous and stop sounds helps children isolate beginning sounds more accurately.",
        prompts: [
          { text: "Say 'apple'. What is the first sound? /____/", type: "lines" as const, lines: 1 },
          { text: "Say 'octopus'. What is the first sound? /____/", type: "lines" as const, lines: 1 },
        ],
      },
      // 46
      {
        type: "sorting" as const,
        title: "Sort: Vowel or Consonant Beginning?",
        instruction: "Does the word start with a vowel sound or a consonant sound? Sort each word.",
        columns: ["Vowel sound", "Consonant sound"],
        items: [
          { label: "apple" }, { label: "sun" }, { label: "egg" },
          { label: "bat" }, { label: "up" }, { label: "mat" },
          { label: "on" }, { label: "hat" },
        ],
      },
      // 47
      {
        type: "circle-correct" as const,
        title: "Pick the Word That Starts with the Same Sound",
        instruction: "Which word starts with the SAME sound as the first word?",
        questions: [
          { prompt: "sun — which starts the same?", options: ["sock", "bat", "hat"] },
          { prompt: "man — which starts the same?", options: ["pen", "mop", "dog"] },
          { prompt: "fish — which starts the same?", options: ["fan", "van", "hat"] },
          { prompt: "dog — which starts the same?", options: ["bat", "pen", "dig"] },
        ],
      },
      // 48
      {
        type: "matching" as const,
        title: "Match Words by Beginning Sound (Set B)",
        instruction: "Draw a line to match words that start with the same sound.",
        left: ["apple", "egg", "up", "on"],
        right: ["octopus", "ant", "umbrella", "elephant"],
      },
      // 49
      {
        type: "open-response" as const,
        title: "Write Three Words for Each Sound",
        instruction: "Write three words that start with each beginning sound.",
        parentTip: "Accept invented spelling! The focus is on hearing the beginning sound, not perfect spelling.",
        prompts: [
          { text: "/s/ words: ______, ______, ______", type: "lines" as const, lines: 1 },
          { text: "/b/ words: ______, ______, ______", type: "lines" as const, lines: 1 },
          { text: "/h/ words: ______, ______, ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 50
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? Mixed (Set A)",
        instruction: "Circle the sound each word starts with. These are a mix of all the sounds you have learned!",
        questions: [
          { prompt: "rug", options: ["/r/", "/l/", "/w/"] },
          { prompt: "van", options: ["/v/", "/f/", "/b/"] },
          { prompt: "yell", options: ["/y/", "/j/", "/w/"] },
          { prompt: "zip", options: ["/z/", "/s/", "/j/"] },
          { prompt: "jug", options: ["/j/", "/g/", "/d/"] },
        ],
      },
      // 51
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /r/, /l/, /n/",
        instruction: "Sort each word by its beginning sound.",
        columns: ["/r/ sound", "/l/ sound", "/n/ sound"],
        items: [
          { label: "red" }, { label: "leg" }, { label: "net" },
          { label: "run" }, { label: "lip" }, { label: "nap" },
          { label: "rug" }, { label: "log" }, { label: "nut" },
        ],
      },
      // 52
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set E)",
        instruction: "Circle the word that starts with a DIFFERENT sound.",
        questions: [
          { prompt: "red, run, leg", options: ["red", "run", "leg"] },
          { prompt: "apple, ant, sun", options: ["apple", "ant", "sun"] },
          { prompt: "van, vet, jug", options: ["van", "vet", "jug"] },
          { prompt: "wet, win, yak", options: ["wet", "win", "yak"] },
        ],
      },
      // 53
      {
        type: "open-response" as const,
        title: "Draw It — Pick a Sound",
        instruction: "Choose a beginning sound you like. Draw THREE things that start with that sound.",
        parentTip: "Let your child choose their own sound — this builds ownership and engagement.",
        prompts: [
          { text: "My chosen sound: /____/", type: "lines" as const, lines: 1 },
          { text: "Drawing 1:", type: "box" as const },
          { text: "Drawing 2:", type: "box" as const },
          { text: "Drawing 3:", type: "box" as const },
        ],
      },
      // 54
      {
        type: "circle-correct" as const,
        title: "Same or Different Beginning Sound?",
        instruction: "Circle SAME if the words start with the same sound, or DIFFERENT if they do not.",
        questions: [
          { prompt: "cat — kite", options: ["SAME", "DIFFERENT"] },
          { prompt: "sun — zoo", options: ["SAME", "DIFFERENT"] },
          { prompt: "bed — ball", options: ["SAME", "DIFFERENT"] },
          { prompt: "fish — vest", options: ["SAME", "DIFFERENT"] },
          { prompt: "leg — lamp", options: ["SAME", "DIFFERENT"] },
        ],
      },
      // 55
      {
        type: "matching" as const,
        title: "Match Ten Sounds to Words",
        instruction: "Draw a line from each beginning sound to a word that starts with it.",
        left: ["/s/", "/m/", "/b/", "/t/", "/f/", "/h/", "/d/", "/p/", "/r/", "/l/"],
        right: ["dog", "bat", "hat", "pen", "sun", "fish", "top", "mat", "lamp", "red"],
      },
      // 56
      {
        type: "open-response" as const,
        title: "Beginning Sound Sentences (Set A)",
        instruction: "Write a word to complete each sentence. The missing word starts with the sound shown.",
        prompts: [
          { text: "The /s/______ was hot. (a bright thing in the sky)", type: "lines" as const, lines: 1 },
          { text: "I put on my /h/______. (goes on your head)", type: "lines" as const, lines: 1 },
          { text: "The /d/______ barked. (a pet animal)", type: "lines" as const, lines: 1 },
        ],
      },
      // 57
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? Mixed (Set B)",
        instruction: "Circle the sound each word starts with.",
        questions: [
          { prompt: "kite", options: ["/k/", "/t/", "/g/"] },
          { prompt: "queen", options: ["/kw/", "/k/", "/w/"] },
          { prompt: "box", options: ["/b/", "/d/", "/p/"] },
          { prompt: "lamp", options: ["/l/", "/r/", "/n/"] },
        ],
      },
      // 58
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: /d/, /p/, /g/",
        instruction: "Sort each word by its beginning sound.",
        columns: ["/d/ sound", "/p/ sound", "/g/ sound"],
        items: [
          { label: "dog" }, { label: "pen" }, { label: "go" },
          { label: "dig" }, { label: "pig" }, { label: "got" },
          { label: "dip" }, { label: "pot" }, { label: "gap" },
        ],
      },
      // 59
      {
        type: "open-response" as const,
        title: "Write Words That Start With... (Set C)",
        instruction: "Write two words that start with each sound.",
        prompts: [
          { text: "/k/ words: ______, ______", type: "lines" as const, lines: 1 },
          { text: "/j/ words: ______, ______", type: "lines" as const, lines: 1 },
          { text: "/w/ words: ______, ______", type: "lines" as const, lines: 1 },
          { text: "/v/ words: ______, ______", type: "lines" as const, lines: 1 },
        ],
      },
      // 60 — SPARK + HOME ACTIVITY
      {
        type: "home-activity" as const,
        title: "Beginning Sound I-Spy",
        instruction: "Play these beginning sound games throughout the day.",
        parentTip: "These games are perfect during mealtimes, shopping trips or car rides. Keep it playful!",
        suggestions: [
          "Play I-Spy with beginning sounds: I spy something starting with /t/.",
          "Go on a /b/ hunt around the house — find everything that starts with /b/.",
          "Say a beginning sound and take turns adding a word that starts with it.",
          "Sing the alphabet song and pause at a letter — ask what sound that letter makes.",
        ],
      },
      // 61
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? Challenge (Set A)",
        instruction: "These words are a bit trickier! Circle the beginning sound.",
        questions: [
          { prompt: "shoe", options: ["/sh/", "/s/", "/h/"] },
          { prompt: "chin", options: ["/ch/", "/k/", "/sh/"] },
          { prompt: "think", options: ["/th/", "/t/", "/f/"] },
        ],
      },
      // 62
      {
        type: "sorting" as const,
        title: "Sort: /s/ vs /sh/ Beginning Sound",
        instruction: "Some words start with /s/ and some start with /sh/. Listen carefully and sort them!",
        parentTip: "/sh/ is a digraph — two letters making one sound. This is a stretch activity for children who are ready.",
        columns: ["/s/ sound", "/sh/ sound"],
        items: [
          { label: "sun" }, { label: "ship" }, { label: "sock" },
          { label: "shop" }, { label: "sit" }, { label: "shed" },
        ],
      },
      // 63
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound? Tricky Pairs",
        instruction: "Circle YES or NO. Listen very carefully to the beginning sounds!",
        questions: [
          { prompt: "ship — shop", options: ["YES", "NO"] },
          { prompt: "chin — cat", options: ["YES", "NO"] },
          { prompt: "think — thin", options: ["YES", "NO"] },
          { prompt: "sun — ship", options: ["YES", "NO"] },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Draw It — Beginning Sound /sh/",
        instruction: "Draw two things that begin with the sound /sh/ (like ship or shoe). Write the letters 'sh' next to each drawing.",
        prompts: [
          { text: "My first /sh/ drawing:", type: "box" as const },
          { text: "My second /sh/ drawing:", type: "box" as const },
        ],
      },
      // 65
      {
        type: "circle-correct" as const,
        title: "What Sound Does It Start With? Challenge (Set B)",
        instruction: "Circle the beginning sound.",
        questions: [
          { prompt: "chair", options: ["/ch/", "/sh/", "/k/"] },
          { prompt: "three", options: ["/th/", "/f/", "/t/"] },
          { prompt: "shell", options: ["/sh/", "/s/", "/ch/"] },
          { prompt: "truck", options: ["/t/", "/tr/", "/d/"] },
        ],
      },
      // 66
      {
        type: "matching" as const,
        title: "Match Beginning Sounds: Digraphs",
        instruction: "Draw a line to match each sound to a word that starts with it.",
        left: ["/sh/", "/ch/", "/th/"],
        right: ["think", "ship", "chin"],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Beginning Sound Sentences (Set B)",
        instruction: "Write a word to complete each sentence. Think about the beginning sound!",
        prompts: [
          { text: "I wore my /sh/______ on my feet. (you wear them)", type: "lines" as const, lines: 1 },
          { text: "The /ch/______ pecked at seeds. (a farm bird)", type: "lines" as const, lines: 1 },
          { text: "I /th/______ about my answer. (what you do with your brain)", type: "lines" as const, lines: 1 },
        ],
      },
      // 68
      {
        type: "circle-correct" as const,
        title: "Odd One Out (Set F)",
        instruction: "Circle the word that starts with a DIFFERENT sound.",
        questions: [
          { prompt: "ship, shoe, sun", options: ["ship", "shoe", "sun"] },
          { prompt: "chin, chat, shed", options: ["chin", "chat", "shed"] },
          { prompt: "think, thin, fish", options: ["think", "thin", "fish"] },
        ],
      },
      // 69
      {
        type: "sorting" as const,
        title: "Sort: /ch/ vs /th/ Beginning Sound",
        instruction: "Listen to each word. Sort by beginning sound.",
        columns: ["/ch/ sound", "/th/ sound"],
        items: [
          { label: "chin" }, { label: "think" }, { label: "chat" },
          { label: "thin" }, { label: "chip" }, { label: "this" },
        ],
      },
      // 70
      {
        type: "open-response" as const,
        title: "Write Words That Start With Each Sound (Big List)",
        instruction: "Write as many words as you can for each beginning sound. Try for at least two!",
        prompts: [
          { text: "/sh/ words: ___________________________", type: "lines" as const, lines: 1 },
          { text: "/ch/ words: ___________________________", type: "lines" as const, lines: 1 },
          { text: "/th/ words: ___________________________", type: "lines" as const, lines: 1 },
        ],
      },
      // ─── EXTENDING (71–100): Application, production, mixed review ───
      // 71
      {
        type: "circle-correct" as const,
        title: "Grand Sound Quiz (Set A)",
        instruction: "Circle the beginning sound for each word.",
        questions: [
          { prompt: "sun", options: ["/s/", "/sh/", "/z/"] },
          { prompt: "ship", options: ["/s/", "/sh/", "/ch/"] },
          { prompt: "chin", options: ["/sh/", "/ch/", "/k/"] },
          { prompt: "fish", options: ["/f/", "/v/", "/th/"] },
          { prompt: "think", options: ["/f/", "/t/", "/th/"] },
        ],
      },
      // 72
      {
        type: "sorting" as const,
        title: "Grand Sort: Eight Sounds",
        instruction: "Sort each word by its beginning sound. There are eight columns!",
        parentTip: "This is a review of everything covered. Take it slowly and praise your child for each correct placement.",
        columns: ["/s/", "/m/", "/b/", "/t/", "/f/", "/h/", "/sh/", "/ch/"],
        items: [
          { label: "sun" }, { label: "man" }, { label: "bat" }, { label: "top" },
          { label: "fan" }, { label: "hat" }, { label: "ship" }, { label: "chin" },
        ],
      },
      // 73
      {
        type: "matching" as const,
        title: "Match Words by Beginning Sound (Set C)",
        instruction: "Draw a line to match words that START with the same sound.",
        left: ["ship", "chin", "think", "sun", "bat"],
        right: ["bed", "chat", "thin", "sock", "shoe"],
      },
      // 74
      {
        type: "open-response" as const,
        title: "How Many Words Can You Write? (Set A)",
        instruction: "You have 2 minutes! Write as many words as you can that start with each sound.",
        parentTip: "Time your child for fun, not for pressure. Celebrate every word!",
        prompts: [
          { text: "/s/ words: ___________________________", type: "lines" as const, lines: 2 },
          { text: "/b/ words: ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      // 75 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Every Sound Has a Letter (or Two!)",
        instruction: "Most beginning sounds are written with one letter (s, m, b, t). But some sounds need TWO letters working together: sh, ch, th. These are called digraphs. Can you think of words for each?",
        parentTip: "Digraphs are an important concept. Understanding that two letters can make one sound is a key step in reading.",
        prompts: [
          { text: "Write a word that starts with 'sh': _______________", type: "lines" as const, lines: 1 },
          { text: "Write a word that starts with 'ch': _______________", type: "lines" as const, lines: 1 },
          { text: "Write a word that starts with 'th': _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 76
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound? Grand Review",
        instruction: "Circle YES or NO.",
        questions: [
          { prompt: "sun — ship", options: ["YES", "NO"] },
          { prompt: "chin — chat", options: ["YES", "NO"] },
          { prompt: "think — top", options: ["YES", "NO"] },
          { prompt: "fish — fun", options: ["YES", "NO"] },
          { prompt: "shoe — shed", options: ["YES", "NO"] },
          { prompt: "bat — pen", options: ["YES", "NO"] },
        ],
      },
      // 77
      {
        type: "open-response" as const,
        title: "Beginning Sound Sentences (Set C)",
        instruction: "Fill in the missing word. Think about the beginning sound given!",
        prompts: [
          { text: "The /b/______ flew over the tree. (an animal with wings)", type: "lines" as const, lines: 1 },
          { text: "I ate a /b/______. (a yellow fruit)", type: "lines" as const, lines: 1 },
          { text: "The /k/______ sat on the mat. (a furry pet)", type: "lines" as const, lines: 1 },
          { text: "I drank from the /k/______. (you drink from it)", type: "lines" as const, lines: 1 },
        ],
      },
      // 78
      {
        type: "sorting" as const,
        title: "Sort: Consonants and Vowels Review",
        instruction: "Does the word start with a vowel sound or a consonant sound?",
        columns: ["Starts with vowel", "Starts with consonant"],
        items: [
          { label: "apple" }, { label: "bat" }, { label: "egg" }, { label: "sun" },
          { label: "on" }, { label: "fan" }, { label: "up" }, { label: "hat" },
          { label: "in" }, { label: "dog" },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Draw the Beginning Sound Collection",
        instruction: "Pick THREE different beginning sounds. For each, draw one thing that starts with that sound.",
        prompts: [
          { text: "Sound 1: /____/ Drawing:", type: "box" as const },
          { text: "Sound 2: /____/ Drawing:", type: "box" as const },
          { text: "Sound 3: /____/ Drawing:", type: "box" as const },
        ],
      },
      // 80 — SPARK
      {
        type: "open-response" as const,
        title: "Sound Spark: What Sound Do You Hear Most?",
        instruction: "Listen carefully to a conversation or a story being read aloud. Which beginning sound do you hear the most? Is it /t/? /s/? Something else?",
        parentTip: "This extends listening beyond individual words to connected speech. It is a challenging but rewarding observation task.",
        prompts: [
          { text: "The beginning sound I heard most was: /____/", type: "lines" as const, lines: 1 },
          { text: "Words I heard with that sound: ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      // 81
      {
        type: "circle-correct" as const,
        title: "Grand Sound Quiz (Set B)",
        instruction: "Circle the beginning sound for each word.",
        questions: [
          { prompt: "nest", options: ["/n/", "/m/", "/l/"] },
          { prompt: "gate", options: ["/g/", "/k/", "/j/"] },
          { prompt: "well", options: ["/w/", "/v/", "/y/"] },
          { prompt: "voice", options: ["/v/", "/f/", "/b/"] },
          { prompt: "yellow", options: ["/y/", "/j/", "/w/"] },
        ],
      },
      // 82
      {
        type: "matching" as const,
        title: "Grand Match: 8 Sounds",
        instruction: "Draw a line from each word to its beginning sound.",
        left: ["sun", "bat", "hat", "dog", "fish", "ship", "chin", "leg"],
        right: ["/l/", "/sh/", "/ch/", "/s/", "/b/", "/h/", "/d/", "/f/"],
      },
      // 83
      {
        type: "open-response" as const,
        title: "Alliteration Fun: Same Sound Sentences",
        instruction: "Write a sentence where every word (or most words) starts with the SAME sound. Example: Sam saw six silly socks.",
        parentTip: "Alliteration builds phonological awareness in a creative, fun way. Nonsense sentences are perfectly fine!",
        prompts: [
          { text: "My /s/ sentence: ___________________________", type: "lines" as const, lines: 2 },
          { text: "My /b/ sentence: ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      // 84
      {
        type: "circle-correct" as const,
        title: "Which Word Starts Differently?",
        instruction: "All but one word starts with the same sound. Circle the word that starts DIFFERENTLY.",
        questions: [
          { prompt: "sun, sock, sit, bat, sad", options: ["sun", "sock", "bat", "sad"] },
          { prompt: "man, mop, hat, mat, milk", options: ["man", "hat", "mat", "milk"] },
          { prompt: "fish, fan, van, fog, fun", options: ["fish", "fan", "van", "fun"] },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Write a Word for Every Letter",
        instruction: "Write one word that starts with each letter sound. Can you complete the whole list?",
        prompts: [
          { text: "/a/ ___  /b/ ___  /k/ ___  /d/ ___  /e/ ___", type: "lines" as const, lines: 1 },
          { text: "/f/ ___  /g/ ___  /h/ ___  /i/ ___  /j/ ___", type: "lines" as const, lines: 1 },
          { text: "/l/ ___  /m/ ___  /n/ ___  /o/ ___  /p/ ___", type: "lines" as const, lines: 1 },
          { text: "/r/ ___  /s/ ___  /t/ ___  /u/ ___  /v/ ___", type: "lines" as const, lines: 1 },
          { text: "/w/ ___  /y/ ___  /z/ ___", type: "lines" as const, lines: 1 },
        ],
      },
      // 86
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound: Review of All",
        instruction: "Sort each word by its beginning sound.",
        columns: ["/s/", "/b/", "/m/", "/f/", "/d/", "/h/"],
        items: [
          { label: "sock" }, { label: "bed" }, { label: "mop" },
          { label: "fish" }, { label: "dig" }, { label: "hat" },
          { label: "sad" }, { label: "bus" }, { label: "milk" },
          { label: "fan" }, { label: "dog" }, { label: "hop" },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Alliteration Fun (Set B)",
        instruction: "Write more alliteration sentences! Try different beginning sounds.",
        prompts: [
          { text: "My /m/ sentence: ___________________________", type: "lines" as const, lines: 2 },
          { text: "My /h/ sentence: ___________________________", type: "lines" as const, lines: 2 },
        ],
      },
      // 88
      {
        type: "circle-correct" as const,
        title: "Quick Fire: Beginning Sounds",
        instruction: "Circle the beginning sound as fast as you can!",
        parentTip: "This builds automaticity. Praise speed AND accuracy.",
        questions: [
          { prompt: "pig", options: ["/p/", "/b/", "/d/"] },
          { prompt: "van", options: ["/v/", "/f/", "/w/"] },
          { prompt: "jump", options: ["/j/", "/g/", "/d/"] },
          { prompt: "nut", options: ["/n/", "/m/", "/l/"] },
          { prompt: "wet", options: ["/w/", "/v/", "/y/"] },
          { prompt: "zip", options: ["/z/", "/s/", "/j/"] },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Sound Detective at Home",
        instruction: "Go on a sound hunt! Walk around your home and find ONE object for each beginning sound listed below. Write or draw what you find.",
        prompts: [
          { text: "/s/ object: _______________", type: "lines" as const, lines: 1 },
          { text: "/b/ object: _______________", type: "lines" as const, lines: 1 },
          { text: "/t/ object: _______________", type: "lines" as const, lines: 1 },
          { text: "/l/ object: _______________", type: "lines" as const, lines: 1 },
          { text: "/k/ object: _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 90 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Hearing Sounds Is the Start of Reading!",
        instruction: "Every time you hear a beginning sound, you are doing the FIRST step of reading. Readers look at the first letter and say its sound. Then they blend all the sounds together. You are already a sound expert!",
        parentTip: "Affirm your child's progress. Connecting phonological awareness to the reading process gives purpose to these activities.",
        prompts: [
          { text: "What is the beginning sound in your favourite animal's name? _______________", type: "lines" as const, lines: 1 },
          { text: "What is the beginning sound in your favourite food's name? _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 91
      {
        type: "matching" as const,
        title: "Match All Sounds: Grand Review",
        instruction: "Match each word to its beginning sound.",
        left: ["ship", "chin", "think", "sun", "bat", "fish", "hat", "dog"],
        right: ["/d/", "/s/", "/sh/", "/ch/", "/b/", "/th/", "/f/", "/h/"],
      },
      // 92
      {
        type: "open-response" as const,
        title: "Beginning Sound Riddles",
        instruction: "Solve each riddle. The answer starts with the sound shown!",
        prompts: [
          { text: "I am yellow and live in the sky. I start with /s/. I am the ______.", type: "lines" as const, lines: 1 },
          { text: "I bark and wag my tail. I start with /d/. I am a ______.", type: "lines" as const, lines: 1 },
          { text: "You wear me on your head. I start with /h/. I am a ______.", type: "lines" as const, lines: 1 },
          { text: "I swim in the water. I start with /f/. I am a ______.", type: "lines" as const, lines: 1 },
        ],
      },
      // 93
      {
        type: "circle-correct" as const,
        title: "Which Words Start the Same? (Set A)",
        instruction: "Circle the TWO words that start with the same sound.",
        questions: [
          { prompt: "sun, bat, sock", options: ["sun + sock", "sun + bat", "bat + sock"] },
          { prompt: "fish, man, fan", options: ["fish + fan", "fish + man", "man + fan"] },
          { prompt: "dog, hat, dig", options: ["dog + dig", "dog + hat", "hat + dig"] },
          { prompt: "ship, chin, shoe", options: ["ship + shoe", "ship + chin", "chin + shoe"] },
        ],
      },
      // 94
      {
        type: "open-response" as const,
        title: "Write Your Own Sound Riddle",
        instruction: "Make up a riddle! Give clues about something and tell the reader what sound it starts with. See if someone in your family can solve it!",
        parentTip: "Creating riddles is a higher-order task that requires your child to think about both meaning and sound simultaneously.",
        prompts: [
          { text: "My riddle: ___________________________", type: "lines" as const, lines: 3 },
          { text: "The answer starts with /____/ and it is: _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 95
      {
        type: "sorting" as const,
        title: "Grand Sort: Consonants, Vowels, and Digraphs",
        instruction: "Sort each word: does it start with a single consonant sound, a vowel sound, or a digraph (/sh/, /ch/, /th/)?",
        columns: ["Single consonant", "Vowel", "Digraph"],
        items: [
          { label: "sun" }, { label: "apple" }, { label: "ship" },
          { label: "bat" }, { label: "egg" }, { label: "chin" },
          { label: "hat" }, { label: "on" }, { label: "think" },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Alliteration Story",
        instruction: "Write a short story (3 to 4 sentences) where most of the words start with the SAME sound. Choose any sound you like!",
        parentTip: "This is the most creative task in the worksheet. Accept all attempts with enthusiasm!",
        prompts: [
          { text: "My sound: /____/", type: "lines" as const, lines: 1 },
          { text: "My alliteration story:", type: "lines" as const, lines: 4 },
        ],
      },
      // 97
      {
        type: "circle-correct" as const,
        title: "Grand Sound Quiz (Set C)",
        instruction: "Circle the beginning sound for each word. This is the final quiz!",
        questions: [
          { prompt: "tiger", options: ["/t/", "/d/", "/th/"] },
          { prompt: "shell", options: ["/sh/", "/s/", "/ch/"] },
          { prompt: "cherry", options: ["/ch/", "/sh/", "/k/"] },
          { prompt: "thumb", options: ["/th/", "/t/", "/f/"] },
          { prompt: "lamp", options: ["/l/", "/r/", "/n/"] },
          { prompt: "queen", options: ["/kw/", "/k/", "/w/"] },
        ],
      },
      // 98
      {
        type: "home-activity" as const,
        title: "Beginning Sound Champion Challenge",
        instruction: "You are a Beginning Sound Champion! Try these advanced challenges.",
        parentTip: "These activities consolidate everything. Revisit any earlier activities if your child finds these challenging.",
        suggestions: [
          "Go on a sound safari: walk around the garden or park and name the beginning sound of everything you see.",
          "Play Sound Categories: pick a sound and name as many animals/foods/objects as you can that start with it.",
          "Read a book together and stop after each page — find one word for each beginning sound you know.",
          "Make a Sound Book: draw one picture per page for different beginning sounds.",
        ],
      },
      // 99
      {
        type: "open-response" as const,
        title: "My Sound Dictionary",
        instruction: "Create your very own sound dictionary! For each sound, write your favourite word that starts with it.",
        prompts: [
          { text: "/s/: ___  /m/: ___  /b/: ___  /t/: ___  /f/: ___", type: "lines" as const, lines: 1 },
          { text: "/h/: ___  /d/: ___  /p/: ___  /r/: ___  /l/: ___", type: "lines" as const, lines: 1 },
          { text: "/n/: ___  /g/: ___  /k/: ___  /j/: ___  /w/: ___", type: "lines" as const, lines: 1 },
          { text: "/sh/: ___  /ch/: ___  /th/: ___", type: "lines" as const, lines: 1 },
        ],
      },
      // 100 — SPARK
      {
        type: "open-response" as const,
        title: "Sound Spark: Why Are Beginning Sounds Important?",
        instruction: "Think about this big question: Why is it important to know what sound a word starts with? How does it help you when you are reading or writing?",
        parentTip: "This reflective prompt encourages metacognition — thinking about their own thinking and learning process.",
        prompts: [
          { text: "Beginning sounds help me because:", type: "lines" as const, lines: 3 },
          { text: "Draw yourself being a sound detective:", type: "box" as const },
        ],
      },
    ],
  },

  // ── WS 3: Letter Recognition ──────────────────────────────
  {
    slug: "letter-recognition",
    title: "Letters Big and Small",
    strand: "Language",
    description:
      "Match uppercase and lowercase letters — building the letter recognition needed for reading and writing.",
    learningGuide: {
      concept:
        "Every letter has two forms: uppercase (capital) and lowercase. Recognising both forms is essential because books and texts use both. Children also need to know the name AND sound of each letter.",
      activation:
        "Write your child's name in uppercase letters and then again in lowercase. Point out: Did you know your name can be written two ways? Both say the same thing! Compare the two and discuss what looks the same and different.",
      check:
        "Hold up a letter card and ask: What letter is this? What sound does it make? Do this with both uppercase and lowercase forms.",
    },
    lesson: {
      title: "Big and Small Letter Match",
      objective:
        "Recognise and match uppercase and lowercase letter pairs, and name their sounds.",
      materials: [
        "Small pieces of paper or card (torn from cereal boxes)",
        "Pencil or marker",
        "Old magazines or catalogues (optional, for letter hunts)",
      ],
      intro: {
        title: "Meet the Letter Twins",
        script:
          "Did you know every letter in the alphabet has a twin? One twin is BIG (uppercase) and one is small (lowercase). They are the same letter, just dressed differently! Look at this: A and a. Same letter — different outfit! Can you find any uppercase or lowercase letters around the room right now?",
        action:
          "Walk around the room together pointing at letters on book covers, cereal boxes, signs, or toys. For each one you find, say: 'Look — that is a big B! And here is its twin, the little b. Same letter, different size.' Aim for 4 to 5 pairs. Write each pair on paper as you find them so your child sees them side by side.",
      },
      mainActivity: {
        title: "Letter Pair Snap",
        script:
          "I have written some letters on these cards. We are going to make pairs — matching the big letter to its small twin. When you find a match, say the letter name AND its sound. So if you match B and b, you say: 'B — /b/!' Ready? Let us go!",
        action:
          "Write 8 to 10 uppercase and matching lowercase letters on small cards (start with letters your child knows best — often those in their name). Lay all cards face up in a grid. Your child picks up a card, says the letter name, then searches for its twin. When they find a pair, they say the letter name and make its sound. If they hesitate on the sound, model it: 'This is M — it says /m/, like mmmmum.' Keep matched pairs in a pile. After all pairs are found, shuffle and play Snap: flip cards one at a time, and slap the pile when consecutive cards are a matching pair.",
      },
      wrapUp: {
        title: "Write Your Letters",
        script:
          "You have been amazing at matching today! Now let us practise forming some of these letters ourselves. I will say a letter name and you write it — both the big and small version. We will take it slow and make each letter as neat as we can. Start at the top of each letter and work down.",
        action:
          "Dictate 5 letters for your child to write in both forms. Start with letters they matched confidently, then include one or two they found harder. For each letter, show the formation first: 'Watch me — I start at the top and come down, then add the bump.' Then let your child try. Praise the attempt even if the letter is wobbly: 'I can see that is a B — well done!'",
      },
      parentTip:
        "When your child forms letters, watch the starting point and direction — most letters start at the top. Correct habits early as they are harder to undo later, but always keep the tone encouraging. Common misconception: children frequently confuse b/d and p/q because these letters are mirror images of each other. A helpful trick: make two fists with thumbs up — the left hand makes a 'b' shape, the right hand makes a 'd' shape. Say: 'b comes first in the alphabet, and it is on the left — like the left hand.' Another common issue is confusing uppercase and lowercase for letters that look different in each form, such as A/a, G/g, and Q/q. Extra practice with these specific pairs helps. Your child is ready for the worksheet when they can: (1) correctly match at least 8 out of 10 uppercase-lowercase pairs, (2) name the sound for at least 5 letters without help, and (3) write both forms of at least 3 letters from memory.",
      extension:
        "Go on a letter hunt in a newspaper or magazine. Circle every uppercase A in red and every lowercase a in blue. Count how many you find. This covers AC V9 Foundation — naming letters of the English alphabet.",
      resources: [
        {
          title: "Starfall — ABC Letters",
          url: "https://www.starfall.com/h/abcs/",
          description:
            "Interactive activities for recognising and sounding out each letter of the alphabet.",
        },
        {
          title: "ABC Education — Writing Letters",
          url: "https://www.abc.net.au/education/learn-english/letters/",
          description:
            "Video guides showing correct letter formation for Foundation students.",
        },
        {
          title: "Reading Eggs — Alphabet Activities",
          url: "https://readingeggs.com.au/",
          description:
            "Structured letter recognition and formation activities matched to Foundation level.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Letters A–M recognition ───
      // 1
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: A–D",
        instruction: "Draw a line to join each uppercase letter to its lowercase twin.",
        parentTip: "After matching, ask your child to say the letter name and its sound for each pair.",
        left: ["A", "B", "C", "D"],
        right: ["c", "a", "d", "b"],
      },
      // 2
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: A–D",
        instruction: "Circle the lowercase version of the letter shown.",
        parentTip: "Some children confuse b/d — name the letter and say its sound together.",
        questions: [
          { prompt: "A —", options: ["a", "A", "e"] },
          { prompt: "B —", options: ["d", "b", "p"] },
          { prompt: "C —", options: ["c", "C", "o"] },
          { prompt: "D —", options: ["b", "d", "p"] },
        ],
      },
      // 3
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: E–H",
        instruction: "Draw a line to join each uppercase letter to its lowercase twin.",
        left: ["E", "F", "G", "H"],
        right: ["h", "e", "f", "g"],
      },
      // 4
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: E–H",
        instruction: "Circle the lowercase version of the letter shown.",
        questions: [
          { prompt: "E —", options: ["e", "E", "a"] },
          { prompt: "F —", options: ["t", "f", "F"] },
          { prompt: "G —", options: ["g", "q", "p"] },
          { prompt: "H —", options: ["n", "h", "H"] },
        ],
      },
      // 5
      {
        type: "open-response" as const,
        title: "Write Letters A–E",
        instruction: "Write the uppercase AND lowercase version of each letter. Write each pair three times.",
        parentTip: "Check that your child starts each letter at the correct point — most letters begin at the top.",
        prompts: [
          { text: "Aa Aa Aa", type: "lines" as const, lines: 2 },
          { text: "Bb Bb Bb", type: "lines" as const, lines: 2 },
          { text: "Cc Cc Cc", type: "lines" as const, lines: 2 },
          { text: "Dd Dd Dd", type: "lines" as const, lines: 2 },
          { text: "Ee Ee Ee", type: "lines" as const, lines: 2 },
        ],
      },
      // 6
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: I–L",
        instruction: "Draw a line to join each uppercase letter to its lowercase twin.",
        left: ["I", "J", "K", "L"],
        right: ["k", "l", "i", "j"],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: I–L",
        instruction: "Circle the lowercase version of the letter shown.",
        questions: [
          { prompt: "I —", options: ["l", "i", "I"] },
          { prompt: "J —", options: ["j", "i", "g"] },
          { prompt: "K —", options: ["K", "k", "x"] },
          { prompt: "L —", options: ["I", "l", "i"] },
        ],
      },
      // 8
      {
        type: "open-response" as const,
        title: "Write Letters F–J",
        instruction: "Write the uppercase AND lowercase version of each letter. Write each pair three times.",
        prompts: [
          { text: "Ff Ff Ff", type: "lines" as const, lines: 2 },
          { text: "Gg Gg Gg", type: "lines" as const, lines: 2 },
          { text: "Hh Hh Hh", type: "lines" as const, lines: 2 },
          { text: "Ii Ii Ii", type: "lines" as const, lines: 2 },
          { text: "Jj Jj Jj", type: "lines" as const, lines: 2 },
        ],
      },
      // 9
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: A–H (Mixed)",
        instruction: "Draw a line to join each uppercase letter to its lowercase twin.",
        left: ["A", "B", "C", "D", "E", "F", "G", "H"],
        right: ["f", "b", "h", "a", "g", "c", "e", "d"],
      },
      // 10
      {
        type: "sorting" as const,
        title: "Uppercase or Lowercase? (Set A)",
        instruction: "Sort each letter into the correct column.",
        parentTip: "If your child is unsure, compare the letter to print on a cereal box or book.",
        columns: ["Uppercase", "Lowercase"],
        items: [
          { label: "A" }, { label: "b" }, { label: "C" },
          { label: "d" }, { label: "E" }, { label: "f" },
          { label: "G" }, { label: "h" },
        ],
      },
      // 11
      {
        type: "circle-correct" as const,
        title: "Which Is the Uppercase Letter?",
        instruction: "Circle the UPPERCASE version of each letter.",
        questions: [
          { prompt: "a or A?", options: ["a", "A"] },
          { prompt: "B or b?", options: ["B", "b"] },
          { prompt: "d or D?", options: ["d", "D"] },
          { prompt: "f or F?", options: ["f", "F"] },
          { prompt: "g or G?", options: ["g", "G"] },
        ],
      },
      // 12
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: M",
        instruction: "Draw a line from each uppercase letter to its lowercase twin. These are all letters up to M!",
        left: ["I", "J", "K", "L", "M"],
        right: ["m", "k", "l", "i", "j"],
      },
      // 13
      {
        type: "open-response" as const,
        title: "Write Letters K–M",
        instruction: "Write the uppercase AND lowercase version of each letter three times.",
        prompts: [
          { text: "Kk Kk Kk", type: "lines" as const, lines: 2 },
          { text: "Ll Ll Ll", type: "lines" as const, lines: 2 },
          { text: "Mm Mm Mm", type: "lines" as const, lines: 2 },
        ],
      },
      // 14
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: A–M Review",
        instruction: "Circle the lowercase version of each letter.",
        questions: [
          { prompt: "A —", options: ["a", "e", "o"] },
          { prompt: "D —", options: ["b", "d", "p"] },
          { prompt: "G —", options: ["q", "g", "j"] },
          { prompt: "K —", options: ["k", "x", "h"] },
          { prompt: "M —", options: ["n", "m", "w"] },
        ],
      },
      // 15 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Every Letter Has Two Outfits!",
        instruction: "Remember: every letter has an uppercase (BIG) outfit and a lowercase (small) outfit. They make the same sound! Aa both say /a/. Bb both say /b/. Write the first letter of your name in BOTH outfits.",
        parentTip: "This tip reinforces that upper and lowercase are forms of the same letter, not different letters.",
        prompts: [
          { text: "The first letter of my name: uppercase ___ and lowercase ___", type: "lines" as const, lines: 1 },
          { text: "Write a word that starts with that letter:", type: "lines" as const, lines: 1 },
        ],
      },
      // 16
      {
        type: "sequence" as const,
        title: "Alphabetical Order: A–D",
        instruction: "Write these letters in alphabetical order.",
        parentTip: "Sing the alphabet song together first.",
        items: [
          { label: "D, B, A, C → ___, ___, ___, ___" },
        ],
      },
      // 17
      {
        type: "sequence" as const,
        title: "Alphabetical Order: E–H",
        instruction: "Write these letters in alphabetical order.",
        items: [
          { label: "H, E, G, F → ___, ___, ___, ___" },
        ],
      },
      // 18
      {
        type: "sequence" as const,
        title: "Alphabetical Order: I–L",
        instruction: "Write these letters in alphabetical order.",
        items: [
          { label: "K, I, L, J → ___, ___, ___, ___" },
        ],
      },
      // 19
      {
        type: "circle-correct" as const,
        title: "What Letter Comes Next? (A–M)",
        instruction: "Circle the letter that comes next in the alphabet.",
        questions: [
          { prompt: "A, B, C, ___", options: ["D", "E", "B"] },
          { prompt: "E, F, G, ___", options: ["I", "H", "D"] },
          { prompt: "J, K, L, ___", options: ["N", "M", "K"] },
        ],
      },
      // 20 — SPARK
      {
        type: "open-response" as const,
        title: "Letter Spark: Letters in Your World",
        instruction: "Look around the room. Can you find a letter on a book, a box, or a sign? Draw what you found and write the letter next to it.",
        parentTip: "Environmental print is everywhere! This connects letter recognition to the child's real world.",
        prompts: [
          { text: "I found the letter ___ on a _______________", type: "lines" as const, lines: 1 },
          { text: "Draw what you saw:", type: "box" as const },
        ],
      },
      // ─── DEVELOPING (21–50): Letters N–Z recognition ───
      // 21
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: N–Q",
        instruction: "Draw a line to join each uppercase letter to its lowercase twin.",
        left: ["N", "O", "P", "Q"],
        right: ["p", "n", "q", "o"],
      },
      // 22
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: N–Q",
        instruction: "Circle the lowercase version of the letter shown.",
        questions: [
          { prompt: "N —", options: ["n", "m", "h"] },
          { prompt: "O —", options: ["o", "O", "0"] },
          { prompt: "P —", options: ["q", "p", "d"] },
          { prompt: "Q —", options: ["q", "p", "g"] },
        ],
      },
      // 23
      {
        type: "open-response" as const,
        title: "Write Letters N–R",
        instruction: "Write the uppercase AND lowercase version of each letter three times.",
        prompts: [
          { text: "Nn Nn Nn", type: "lines" as const, lines: 2 },
          { text: "Oo Oo Oo", type: "lines" as const, lines: 2 },
          { text: "Pp Pp Pp", type: "lines" as const, lines: 2 },
          { text: "Qq Qq Qq", type: "lines" as const, lines: 2 },
          { text: "Rr Rr Rr", type: "lines" as const, lines: 2 },
        ],
      },
      // 24
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: R–U",
        instruction: "Draw a line to join each uppercase letter to its lowercase twin.",
        left: ["R", "S", "T", "U"],
        right: ["t", "u", "r", "s"],
      },
      // 25
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: R–U",
        instruction: "Circle the lowercase version of the letter shown.",
        questions: [
          { prompt: "R —", options: ["r", "n", "v"] },
          { prompt: "S —", options: ["S", "s", "z"] },
          { prompt: "T —", options: ["T", "f", "t"] },
          { prompt: "U —", options: ["u", "v", "n"] },
        ],
      },
      // 26
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: V–Z",
        instruction: "Draw a line to join each uppercase letter to its lowercase twin.",
        left: ["V", "W", "X", "Y", "Z"],
        right: ["y", "x", "z", "v", "w"],
      },
      // 27
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: V–Z",
        instruction: "Circle the lowercase version of the letter shown.",
        questions: [
          { prompt: "V —", options: ["v", "u", "w"] },
          { prompt: "W —", options: ["v", "w", "m"] },
          { prompt: "X —", options: ["x", "t", "k"] },
          { prompt: "Y —", options: ["y", "v", "g"] },
          { prompt: "Z —", options: ["s", "z", "x"] },
        ],
      },
      // 28
      {
        type: "open-response" as const,
        title: "Write Letters S–W",
        instruction: "Write the uppercase AND lowercase version of each letter three times.",
        prompts: [
          { text: "Ss Ss Ss", type: "lines" as const, lines: 2 },
          { text: "Tt Tt Tt", type: "lines" as const, lines: 2 },
          { text: "Uu Uu Uu", type: "lines" as const, lines: 2 },
          { text: "Vv Vv Vv", type: "lines" as const, lines: 2 },
          { text: "Ww Ww Ww", type: "lines" as const, lines: 2 },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Write Letters X–Z",
        instruction: "Write the uppercase AND lowercase version of each letter three times.",
        prompts: [
          { text: "Xx Xx Xx", type: "lines" as const, lines: 2 },
          { text: "Yy Yy Yy", type: "lines" as const, lines: 2 },
          { text: "Zz Zz Zz", type: "lines" as const, lines: 2 },
        ],
      },
      // 30 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Tricky Letter Pairs",
        instruction: "Some letters look very similar and are easy to mix up! Watch out for: b and d, p and q, m and w, u and n. Try writing each pair carefully and say the letter name as you write.",
        parentTip: "The b/d confusion is the most common. A useful trick: make fists with both hands, thumbs up. The left hand makes a 'b' shape, the right makes a 'd'.",
        prompts: [
          { text: "Write b and d five times each: b b b b b    d d d d d", type: "lines" as const, lines: 2 },
          { text: "Write p and q five times each: p p p p p    q q q q q", type: "lines" as const, lines: 2 },
        ],
      },
      // 31
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: I–P",
        instruction: "Draw a line from each uppercase letter to its lowercase twin.",
        left: ["I", "J", "K", "L", "M", "N", "O", "P"],
        right: ["n", "l", "p", "k", "o", "j", "m", "i"],
      },
      // 32
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase: Q–Z",
        instruction: "Draw a line from each uppercase letter to its lowercase twin.",
        left: ["Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        right: ["v", "t", "z", "r", "x", "s", "q", "y", "u", "w"],
      },
      // 33
      {
        type: "sorting" as const,
        title: "Uppercase or Lowercase? (Set B)",
        instruction: "Sort each letter into the correct column.",
        columns: ["Uppercase", "Lowercase"],
        items: [
          { label: "N" }, { label: "o" }, { label: "P" },
          { label: "q" }, { label: "R" }, { label: "s" },
          { label: "T" }, { label: "u" }, { label: "V" },
          { label: "w" },
        ],
      },
      // 34
      {
        type: "circle-correct" as const,
        title: "What Letter Comes Next? (N–Z)",
        instruction: "Circle the letter that comes next in the alphabet.",
        questions: [
          { prompt: "N, O, P, ___", options: ["R", "Q", "S"] },
          { prompt: "T, U, V, ___", options: ["X", "W", "Y"] },
          { prompt: "W, X, Y, ___", options: ["Z", "A", "V"] },
        ],
      },
      // 35
      {
        type: "sequence" as const,
        title: "Alphabetical Order: M–P",
        instruction: "Write these letters in alphabetical order.",
        items: [
          { label: "P, N, M, O → ___, ___, ___, ___" },
        ],
      },
      // 36
      {
        type: "sequence" as const,
        title: "Alphabetical Order: Q–T",
        instruction: "Write these letters in alphabetical order.",
        items: [
          { label: "T, R, Q, S → ___, ___, ___, ___" },
        ],
      },
      // 37
      {
        type: "sequence" as const,
        title: "Alphabetical Order: U–X",
        instruction: "Write these letters in alphabetical order.",
        items: [
          { label: "X, V, U, W → ___, ___, ___, ___" },
        ],
      },
      // 38
      {
        type: "circle-correct" as const,
        title: "Which Letter Is Missing? (A–M)",
        instruction: "Circle the missing letter.",
        questions: [
          { prompt: "A, B, ___, D", options: ["C", "E", "F"] },
          { prompt: "F, G, ___, I", options: ["J", "H", "K"] },
          { prompt: "J, ___, L, M", options: ["K", "N", "I"] },
        ],
      },
      // 39
      {
        type: "circle-correct" as const,
        title: "Which Letter Is Missing? (N–Z)",
        instruction: "Circle the missing letter.",
        questions: [
          { prompt: "N, O, ___, Q", options: ["P", "R", "M"] },
          { prompt: "S, ___, U, V", options: ["T", "R", "W"] },
          { prompt: "W, X, ___, Z", options: ["V", "Y", "A"] },
        ],
      },
      // 40 — SPARK
      {
        type: "open-response" as const,
        title: "Letter Spark: The Alphabet Song",
        instruction: "Sing the alphabet song! Then try writing every letter of the alphabet in order. How many can you write from memory?",
        parentTip: "This is a stretch goal. Celebrate however many your child can write independently!",
        prompts: [
          { text: "Write the alphabet: A B C ___________________________", type: "lines" as const, lines: 3 },
          { text: "How many did you write? ___", type: "lines" as const, lines: 1 },
        ],
      },
      // ─── CONSOLIDATING (41–70): Full alphabet review, letter sounds ───
      // 41
      {
        type: "matching" as const,
        title: "Grand Match: A–M",
        instruction: "Match every uppercase letter to its lowercase twin.",
        left: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
        right: ["g", "j", "d", "l", "a", "i", "f", "m", "b", "h", "e", "c", "k"],
      },
      // 42
      {
        type: "matching" as const,
        title: "Grand Match: N–Z",
        instruction: "Match every uppercase letter to its lowercase twin.",
        left: ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        right: ["u", "r", "z", "n", "w", "q", "y", "o", "t", "x", "p", "v", "s"],
      },
      // 43
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: Full Alphabet (Set A)",
        instruction: "Circle the lowercase version of each letter.",
        questions: [
          { prompt: "B —", options: ["d", "b", "p"] },
          { prompt: "D —", options: ["b", "d", "q"] },
          { prompt: "P —", options: ["p", "q", "d"] },
          { prompt: "Q —", options: ["g", "q", "p"] },
          { prompt: "M —", options: ["n", "m", "w"] },
          { prompt: "W —", options: ["w", "m", "v"] },
        ],
      },
      // 44
      {
        type: "sorting" as const,
        title: "Uppercase or Lowercase? (Set C)",
        instruction: "Sort each letter into the correct column.",
        columns: ["Uppercase", "Lowercase"],
        items: [
          { label: "X" }, { label: "y" }, { label: "Z" },
          { label: "a" }, { label: "B" }, { label: "c" },
          { label: "D" }, { label: "e" }, { label: "F" },
          { label: "g" }, { label: "H" }, { label: "i" },
        ],
      },
      // 45 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Letters Have Names AND Sounds",
        instruction: "Every letter has a NAME (what we call it) and a SOUND (what it says in words). The letter B is named 'bee' but its sound is /b/. Write the sound each letter makes.",
        parentTip: "This is an important distinction. When reading, children need the sound, not the name. Practise saying sounds for each letter.",
        prompts: [
          { text: "A makes the sound /____/. B makes the sound /____/.", type: "lines" as const, lines: 1 },
          { text: "C makes the sound /____/. D makes the sound /____/.", type: "lines" as const, lines: 1 },
          { text: "S makes the sound /____/. T makes the sound /____/.", type: "lines" as const, lines: 1 },
        ],
      },
      // 46
      {
        type: "circle-correct" as const,
        title: "What Sound Does This Letter Make? (Set A)",
        instruction: "Circle the sound each letter makes.",
        questions: [
          { prompt: "S", options: ["/s/", "/z/", "/sh/"] },
          { prompt: "M", options: ["/n/", "/m/", "/w/"] },
          { prompt: "T", options: ["/d/", "/t/", "/p/"] },
          { prompt: "B", options: ["/b/", "/d/", "/p/"] },
          { prompt: "F", options: ["/v/", "/f/", "/th/"] },
        ],
      },
      // 47
      {
        type: "matching" as const,
        title: "Match the Letter to Its Sound (Set A)",
        instruction: "Draw a line from each letter to the sound it makes.",
        left: ["S", "M", "B", "T", "F", "H"],
        right: ["/h/", "/s/", "/t/", "/f/", "/m/", "/b/"],
      },
      // 48
      {
        type: "circle-correct" as const,
        title: "What Sound Does This Letter Make? (Set B)",
        instruction: "Circle the sound each letter makes.",
        questions: [
          { prompt: "D", options: ["/d/", "/b/", "/t/"] },
          { prompt: "P", options: ["/b/", "/p/", "/d/"] },
          { prompt: "R", options: ["/r/", "/l/", "/w/"] },
          { prompt: "N", options: ["/m/", "/n/", "/l/"] },
          { prompt: "L", options: ["/l/", "/r/", "/n/"] },
        ],
      },
      // 49
      {
        type: "matching" as const,
        title: "Match the Letter to Its Sound (Set B)",
        instruction: "Draw a line from each letter to the sound it makes.",
        left: ["D", "P", "R", "N", "L", "G"],
        right: ["/n/", "/g/", "/d/", "/r/", "/p/", "/l/"],
      },
      // 50
      {
        type: "open-response" as const,
        title: "Write a Word That Starts With Each Letter (Set A)",
        instruction: "Write one word that starts with each letter.",
        parentTip: "Accept invented spelling — the goal is connecting letters to words.",
        prompts: [
          { text: "A: ___  B: ___  C: ___  D: ___  E: ___", type: "lines" as const, lines: 1 },
          { text: "F: ___  G: ___  H: ___  I: ___  J: ___", type: "lines" as const, lines: 1 },
        ],
      },
      // 51
      {
        type: "circle-correct" as const,
        title: "Which Letter Starts This Word? (Set A)",
        instruction: "Circle the letter that the word starts with.",
        questions: [
          { prompt: "sun", options: ["S", "C", "Z"] },
          { prompt: "dog", options: ["B", "P", "D"] },
          { prompt: "hat", options: ["N", "H", "M"] },
          { prompt: "fish", options: ["F", "V", "P"] },
          { prompt: "ball", options: ["D", "B", "P"] },
        ],
      },
      // 52
      {
        type: "matching" as const,
        title: "Match Word to Starting Letter",
        instruction: "Draw a line from each word to the letter it starts with.",
        left: ["cat", "moon", "top", "red", "sun"],
        right: ["T", "S", "R", "C", "M"],
      },
      // 53
      {
        type: "open-response" as const,
        title: "Write a Word That Starts With Each Letter (Set B)",
        instruction: "Write one word that starts with each letter.",
        prompts: [
          { text: "K: ___  L: ___  M: ___  N: ___  O: ___", type: "lines" as const, lines: 1 },
          { text: "P: ___  Q: ___  R: ___  S: ___  T: ___", type: "lines" as const, lines: 1 },
        ],
      },
      // 54
      {
        type: "circle-correct" as const,
        title: "Which Letter Starts This Word? (Set B)",
        instruction: "Circle the letter that the word starts with.",
        questions: [
          { prompt: "pen", options: ["B", "D", "P"] },
          { prompt: "leg", options: ["L", "R", "I"] },
          { prompt: "net", options: ["M", "N", "H"] },
          { prompt: "van", options: ["W", "V", "U"] },
          { prompt: "zip", options: ["S", "X", "Z"] },
        ],
      },
      // 55
      {
        type: "sorting" as const,
        title: "Sort Letters by Their Sound Type",
        instruction: "Some letters make vowel sounds (A, E, I, O, U) and some make consonant sounds. Sort these letters!",
        parentTip: "Vowels are the 'open mouth' sounds: a, e, i, o, u. All the rest are consonants.",
        columns: ["Vowels", "Consonants"],
        items: [
          { label: "A" }, { label: "B" }, { label: "E" },
          { label: "F" }, { label: "I" }, { label: "M" },
          { label: "O" }, { label: "S" }, { label: "U" },
          { label: "T" },
        ],
      },
      // 56
      {
        type: "circle-correct" as const,
        title: "What Letter Comes Before? (Set A)",
        instruction: "Circle the letter that comes BEFORE the one shown.",
        questions: [
          { prompt: "___, B, C", options: ["A", "D", "Z"] },
          { prompt: "___, F, G", options: ["D", "E", "H"] },
          { prompt: "___, L, M", options: ["J", "K", "N"] },
          { prompt: "___, T, U", options: ["R", "S", "V"] },
        ],
      },
      // 57
      {
        type: "sequence" as const,
        title: "Alphabetical Order: Mixed Letters (Set A)",
        instruction: "Put these letters in alphabetical order.",
        items: [
          { label: "D, A, C, B → ___, ___, ___, ___" },
          { label: "H, F, G, E → ___, ___, ___, ___" },
          { label: "L, J, I, K → ___, ___, ___, ___" },
        ],
      },
      // 58
      {
        type: "sequence" as const,
        title: "Alphabetical Order: Mixed Letters (Set B)",
        instruction: "Put these letters in alphabetical order.",
        items: [
          { label: "P, N, O, M → ___, ___, ___, ___" },
          { label: "T, R, S, Q → ___, ___, ___, ___" },
          { label: "X, V, W, U → ___, ___, ___, ___" },
        ],
      },
      // 59
      {
        type: "open-response" as const,
        title: "Write the Missing Letters (Set A)",
        instruction: "Fill in the missing letters in each alphabet sequence.",
        prompts: [
          { text: "A, ___, C, ___, E, ___, G", type: "lines" as const, lines: 1 },
          { text: "H, ___, J, ___, L, ___, N", type: "lines" as const, lines: 1 },
          { text: "O, ___, Q, ___, S, ___, U", type: "lines" as const, lines: 1 },
        ],
      },
      // 60 — HOME ACTIVITY + SPARK
      {
        type: "home-activity" as const,
        title: "Letters Everywhere",
        instruction: "Spot and practise letters in everyday life.",
        parentTip: "Environmental print (signs, food packaging, books) is a wonderful free resource for letter recognition.",
        suggestions: [
          "Go on a letter hunt in a magazine. Find the uppercase and lowercase for the first letter of your name.",
          "Write a letter in the air with your finger and ask your child to guess which letter.",
          "Trace letters in a tray of flour, sand or salt for a tactile experience.",
          "Look at food packaging and spot uppercase and lowercase letters together.",
        ],
      },
      // ─── EXTENDING (61–100): Application, fluency, creative tasks ───
      // 61
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase: Full Alphabet (Set B)",
        instruction: "Circle the lowercase version of each letter. These are the tricky ones!",
        questions: [
          { prompt: "I —", options: ["l", "i", "j"] },
          { prompt: "L —", options: ["I", "l", "i"] },
          { prompt: "U —", options: ["u", "v", "n"] },
          { prompt: "N —", options: ["n", "h", "m"] },
          { prompt: "R —", options: ["r", "n", "v"] },
          { prompt: "Y —", options: ["y", "v", "g"] },
        ],
      },
      // 62
      {
        type: "matching" as const,
        title: "Match Words to Their Starting Letter (Set B)",
        instruction: "Draw a line from each word to the letter it starts with.",
        left: ["jug", "kite", "van", "wig", "yak", "zip"],
        right: ["Z", "W", "J", "Y", "V", "K"],
      },
      // 63
      {
        type: "open-response" as const,
        title: "Write the Alphabet: Lowercase",
        instruction: "Write all 26 lowercase letters in order. Take your time and form each one carefully!",
        parentTip: "This builds fluency. Do not worry if some letters are reversed — note them and practise those specifically later.",
        prompts: [
          { text: "a b c ___________________________", type: "lines" as const, lines: 3 },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Write the Alphabet: Uppercase",
        instruction: "Write all 26 uppercase letters in order.",
        prompts: [
          { text: "A B C ___________________________", type: "lines" as const, lines: 3 },
        ],
      },
      // 65
      {
        type: "circle-correct" as const,
        title: "What Letter Comes After? (Set A)",
        instruction: "Circle the letter that comes AFTER the one shown.",
        questions: [
          { prompt: "A, B, ___", options: ["C", "D", "A"] },
          { prompt: "G, H, ___", options: ["I", "J", "F"] },
          { prompt: "M, N, ___", options: ["O", "P", "L"] },
          { prompt: "R, S, ___", options: ["T", "U", "Q"] },
          { prompt: "X, Y, ___", options: ["Z", "A", "W"] },
        ],
      },
      // 66
      {
        type: "sorting" as const,
        title: "Sort: First Half or Second Half of the Alphabet?",
        instruction: "Sort each letter: does it come in the first half (A–M) or second half (N–Z) of the alphabet?",
        columns: ["First half (A–M)", "Second half (N–Z)"],
        items: [
          { label: "B" }, { label: "T" }, { label: "G" },
          { label: "R" }, { label: "E" }, { label: "W" },
          { label: "K" }, { label: "P" }, { label: "A" },
          { label: "Z" },
        ],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Write the Missing Letters (Set B)",
        instruction: "Fill in the missing letters.",
        prompts: [
          { text: "___, B, ___, D, ___, F", type: "lines" as const, lines: 1 },
          { text: "M, ___, O, ___, Q, ___", type: "lines" as const, lines: 1 },
          { text: "___, V, ___, X, ___, Z", type: "lines" as const, lines: 1 },
        ],
      },
      // 68
      {
        type: "circle-correct" as const,
        title: "Which Letter Is Missing? (Full Alphabet)",
        instruction: "Circle the missing letter.",
        questions: [
          { prompt: "A, B, C, ___, E, F", options: ["D", "G", "H"] },
          { prompt: "L, M, ___, O, P", options: ["N", "K", "Q"] },
          { prompt: "U, V, ___, X, Y", options: ["W", "T", "Z"] },
          { prompt: "F, ___, H, I, J", options: ["G", "E", "K"] },
        ],
      },
      // 69
      {
        type: "matching" as const,
        title: "Letter and Sound Match: Vowels",
        instruction: "Draw a line from each vowel letter to the sound it makes.",
        left: ["A", "E", "I", "O", "U"],
        right: ["/o/", "/u/", "/a/", "/i/", "/e/"],
      },
      // 70
      {
        type: "open-response" as const,
        title: "My Favourite Letters",
        instruction: "Write your three favourite letters. For each, write the uppercase version, the lowercase version, and a word that starts with it.",
        prompts: [
          { text: "Letter 1: ___ (uppercase) ___ (lowercase) Word: _______________", type: "lines" as const, lines: 1 },
          { text: "Letter 2: ___ (uppercase) ___ (lowercase) Word: _______________", type: "lines" as const, lines: 1 },
          { text: "Letter 3: ___ (uppercase) ___ (lowercase) Word: _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 71
      {
        type: "circle-correct" as const,
        title: "Quick Fire: Uppercase or Lowercase?",
        instruction: "Circle whether each letter is uppercase or lowercase. Go fast!",
        questions: [
          { prompt: "b", options: ["Uppercase", "Lowercase"] },
          { prompt: "G", options: ["Uppercase", "Lowercase"] },
          { prompt: "m", options: ["Uppercase", "Lowercase"] },
          { prompt: "R", options: ["Uppercase", "Lowercase"] },
          { prompt: "z", options: ["Uppercase", "Lowercase"] },
          { prompt: "K", options: ["Uppercase", "Lowercase"] },
        ],
      },
      // 72
      {
        type: "open-response" as const,
        title: "Write a Word for Every Letter (Set A)",
        instruction: "Write one word that starts with each letter. Can you complete the whole first half?",
        prompts: [
          { text: "A: ___  B: ___  C: ___  D: ___  E: ___  F: ___  G: ___", type: "lines" as const, lines: 1 },
          { text: "H: ___  I: ___  J: ___  K: ___  L: ___  M: ___", type: "lines" as const, lines: 1 },
        ],
      },
      // 73
      {
        type: "open-response" as const,
        title: "Write a Word for Every Letter (Set B)",
        instruction: "Write one word that starts with each letter. Try the second half!",
        prompts: [
          { text: "N: ___  O: ___  P: ___  Q: ___  R: ___  S: ___  T: ___", type: "lines" as const, lines: 1 },
          { text: "U: ___  V: ___  W: ___  X: ___  Y: ___  Z: ___", type: "lines" as const, lines: 1 },
        ],
      },
      // 74
      {
        type: "circle-correct" as const,
        title: "What Sound Does This Letter Make? (Set C)",
        instruction: "Circle the sound each letter makes.",
        questions: [
          { prompt: "K", options: ["/k/", "/g/", "/t/"] },
          { prompt: "V", options: ["/v/", "/f/", "/w/"] },
          { prompt: "J", options: ["/j/", "/g/", "/d/"] },
          { prompt: "W", options: ["/w/", "/v/", "/m/"] },
          { prompt: "Y", options: ["/y/", "/j/", "/w/"] },
          { prompt: "Z", options: ["/z/", "/s/", "/x/"] },
        ],
      },
      // 75 — TIP
      {
        type: "open-response" as const,
        title: "Tip: Practise Makes Perfect",
        instruction: "The more you write your letters, the easier they become! Practise the letters you find hardest. Which letters are tricky for you? Write them five times each.",
        parentTip: "Let your child identify their own tricky letters. Self-awareness about learning is a valuable skill.",
        prompts: [
          { text: "My tricky letters are: _______________", type: "lines" as const, lines: 1 },
          { text: "Practise them here:", type: "lines" as const, lines: 3 },
        ],
      },
      // 76
      {
        type: "sorting" as const,
        title: "Vowels or Consonants? (Full Set)",
        instruction: "Sort these letters into vowels and consonants.",
        columns: ["Vowels", "Consonants"],
        items: [
          { label: "A" }, { label: "B" }, { label: "C" }, { label: "D" },
          { label: "E" }, { label: "F" }, { label: "G" }, { label: "H" },
          { label: "I" }, { label: "J" }, { label: "K" }, { label: "L" },
          { label: "M" }, { label: "N" }, { label: "O" }, { label: "P" },
          { label: "U" },
        ],
      },
      // 77
      {
        type: "sequence" as const,
        title: "Alphabetical Order Challenge (Set A)",
        instruction: "Put these letters in alphabetical order. They are from all over the alphabet!",
        items: [
          { label: "G, A, M, D → ___, ___, ___, ___" },
          { label: "T, H, P, B → ___, ___, ___, ___" },
          { label: "Z, K, R, E → ___, ___, ___, ___" },
        ],
      },
      // 78
      {
        type: "open-response" as const,
        title: "Write the Alphabet Backwards",
        instruction: "Can you write the alphabet from Z to A? This is a big challenge! Do your best.",
        parentTip: "This is a stretch activity. Even getting a few letters right is an achievement. Use the alphabet song backwards if it helps!",
        prompts: [
          { text: "Z, Y, X, ___________________________", type: "lines" as const, lines: 3 },
        ],
      },
      // 79
      {
        type: "circle-correct" as const,
        title: "Grand Letter Quiz (Set A)",
        instruction: "Circle the correct lowercase letter for each uppercase letter shown.",
        questions: [
          { prompt: "B —", options: ["d", "b", "p"] },
          { prompt: "D —", options: ["b", "d", "q"] },
          { prompt: "G —", options: ["g", "q", "j"] },
          { prompt: "N —", options: ["n", "m", "h"] },
          { prompt: "Q —", options: ["p", "q", "g"] },
          { prompt: "W —", options: ["w", "m", "v"] },
        ],
      },
      // 80 — SPARK
      {
        type: "open-response" as const,
        title: "Letter Spark: Why Do We Need Two Versions?",
        instruction: "Think about this: why do you think we have BOTH uppercase and lowercase letters? When do we use uppercase? When do we use lowercase?",
        parentTip: "This encourages thinking about conventions. Capital letters start sentences and names — lowercase letters are used everywhere else.",
        prompts: [
          { text: "We use uppercase letters when:", type: "lines" as const, lines: 2 },
          { text: "We use lowercase letters when:", type: "lines" as const, lines: 2 },
        ],
      },
      // 81
      {
        type: "open-response" as const,
        title: "Write Your Full Name in Both Cases",
        instruction: "Write your full name in UPPERCASE letters. Then write it in lowercase letters.",
        prompts: [
          { text: "My name in UPPERCASE:", type: "lines" as const, lines: 2 },
          { text: "My name in lowercase:", type: "lines" as const, lines: 2 },
        ],
      },
      // 82
      {
        type: "circle-correct" as const,
        title: "Which Word Uses Capital Letters Correctly?",
        instruction: "Circle the word that uses capital letters the right way.",
        parentTip: "Capital letters are used at the start of names and sentences. This is an early conventions task.",
        questions: [
          { prompt: "A name:", options: ["sam", "Sam", "SAM"] },
          { prompt: "A name:", options: ["EMMA", "emma", "Emma"] },
          { prompt: "Start of a sentence:", options: ["the cat sat.", "The cat sat.", "THE cat sat."] },
        ],
      },
      // 83
      {
        type: "open-response" as const,
        title: "Capital Letters for Names",
        instruction: "Names always start with a capital letter! Write these names correctly — start each with a capital.",
        prompts: [
          { text: "tom → _______________", type: "lines" as const, lines: 1 },
          { text: "emma → _______________", type: "lines" as const, lines: 1 },
          { text: "jack → _______________", type: "lines" as const, lines: 1 },
          { text: "mia → _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 84
      {
        type: "matching" as const,
        title: "Match the Letter to a Word and Sound",
        instruction: "Draw a line to match each letter to a word that starts with it.",
        left: ["A", "E", "I", "O", "U"],
        right: ["umbrella", "apple", "orange", "egg", "ice"],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Letter Formation: Tricky Letters Practice",
        instruction: "These letters are often formed incorrectly. Write each one carefully five times.",
        parentTip: "Watch for correct starting points: most letters start at the top. 'a' starts like a 'c' with a line; 'g' starts like an 'a' with a tail going down.",
        prompts: [
          { text: "a a a a a", type: "lines" as const, lines: 2 },
          { text: "g g g g g", type: "lines" as const, lines: 2 },
          { text: "d d d d d", type: "lines" as const, lines: 2 },
          { text: "b b b b b", type: "lines" as const, lines: 2 },
        ],
      },
      // 86
      {
        type: "circle-correct" as const,
        title: "Grand Letter Quiz (Set B)",
        instruction: "Circle the correct lowercase letter.",
        questions: [
          { prompt: "F —", options: ["f", "t", "l"] },
          { prompt: "H —", options: ["n", "h", "k"] },
          { prompt: "J —", options: ["j", "i", "g"] },
          { prompt: "R —", options: ["r", "n", "v"] },
          { prompt: "V —", options: ["v", "u", "w"] },
          { prompt: "X —", options: ["x", "t", "k"] },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Write a Sentence Starting with Each Letter",
        instruction: "Write a short sentence that starts with each letter shown.",
        parentTip: "This is a creative challenge! Accept any sentence — the focus is on using the correct capital letter at the start.",
        prompts: [
          { text: "A: ___________________________", type: "lines" as const, lines: 1 },
          { text: "B: ___________________________", type: "lines" as const, lines: 1 },
          { text: "S: ___________________________", type: "lines" as const, lines: 1 },
        ],
      },
      // 88
      {
        type: "sorting" as const,
        title: "Sort Letters: Straight Lines vs Curvy Letters",
        instruction: "Some letters are made with mostly straight lines (like T, H, L) and some have curves (like S, O, C). Sort them!",
        parentTip: "This observation task builds awareness of letter formation features.",
        columns: ["Mostly straight", "Has curves"],
        items: [
          { label: "T" }, { label: "S" }, { label: "H" },
          { label: "O" }, { label: "L" }, { label: "C" },
          { label: "I" }, { label: "B" }, { label: "K" },
          { label: "D" },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Create a Letter Picture",
        instruction: "Choose a letter and turn it into a picture! For example, turn 'S' into a snake, or 'B' into a butterfly. Draw your letter picture below.",
        parentTip: "This creative task deepens letter awareness through art. It helps children remember letter shapes.",
        prompts: [
          { text: "My letter: ___", type: "lines" as const, lines: 1 },
          { text: "Draw your letter picture:", type: "box" as const },
        ],
      },
      // 90 — TIP
      {
        type: "open-response" as const,
        title: "Tip: The Alphabet Is Your Superpower!",
        instruction: "Knowing your letters means you can read words, write your name, and tell stories. The alphabet is the building blocks of all reading and writing. You are building your superpower!",
        parentTip: "Affirm your child's progress. Connecting letter knowledge to the purpose of reading and writing builds motivation.",
        prompts: [
          { text: "I can read the letters: ___________________________", type: "lines" as const, lines: 1 },
          { text: "I am still learning the letters: ___________________________", type: "lines" as const, lines: 1 },
        ],
      },
      // 91
      {
        type: "matching" as const,
        title: "Grand Alphabet Match: A–Z",
        instruction: "Draw a line from each uppercase letter to its lowercase twin. This is the biggest match yet!",
        left: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        right: ["e", "h", "b", "j", "f", "a", "d", "i", "c", "g"],
      },
      // 92
      {
        type: "matching" as const,
        title: "Grand Alphabet Match: K–T",
        instruction: "Draw a line from each uppercase letter to its lowercase twin.",
        left: ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
        right: ["q", "n", "t", "o", "k", "s", "m", "p", "l", "r"],
      },
      // 93
      {
        type: "matching" as const,
        title: "Grand Alphabet Match: U–Z",
        instruction: "Draw a line from each uppercase letter to its lowercase twin.",
        left: ["U", "V", "W", "X", "Y", "Z"],
        right: ["z", "w", "u", "y", "v", "x"],
      },
      // 94
      {
        type: "open-response" as const,
        title: "Write the Full Alphabet with Sounds",
        instruction: "For each letter, write the letter AND the sound it makes. Example: A = /a/, B = /b/",
        prompts: [
          { text: "A = /___/ B = /___/ C = /___/ D = /___/ E = /___/", type: "lines" as const, lines: 1 },
          { text: "F = /___/ G = /___/ H = /___/ I = /___/ J = /___/", type: "lines" as const, lines: 1 },
          { text: "K = /___/ L = /___/ M = /___/ N = /___/ O = /___/", type: "lines" as const, lines: 1 },
          { text: "P = /___/ Q = /___/ R = /___/ S = /___/ T = /___/", type: "lines" as const, lines: 1 },
          { text: "U = /___/ V = /___/ W = /___/ X = /___/ Y = /___/ Z = /___/", type: "lines" as const, lines: 1 },
        ],
      },
      // 95
      {
        type: "sequence" as const,
        title: "Alphabetical Order: Grand Challenge",
        instruction: "Put these letters from all over the alphabet in order.",
        items: [
          { label: "Z, A, M, F → ___, ___, ___, ___" },
          { label: "W, B, R, H → ___, ___, ___, ___" },
          { label: "T, D, P, K → ___, ___, ___, ___" },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "My Alphabet Book Plan",
        instruction: "Plan a mini alphabet book! For each letter below, write a word and draw a picture that starts with that letter.",
        parentTip: "This could become a real book project! Fold pages, staple, and let your child be the author.",
        prompts: [
          { text: "A is for: _______________", type: "lines" as const, lines: 1 },
          { text: "B is for: _______________", type: "lines" as const, lines: 1 },
          { text: "C is for: _______________", type: "lines" as const, lines: 1 },
          { text: "D is for: _______________", type: "lines" as const, lines: 1 },
          { text: "E is for: _______________", type: "lines" as const, lines: 1 },
        ],
      },
      // 97
      {
        type: "circle-correct" as const,
        title: "Grand Letter Quiz: The Final Round",
        instruction: "Circle the correct answer for each question.",
        questions: [
          { prompt: "How many letters in the alphabet?", options: ["24", "26", "28"] },
          { prompt: "How many vowels?", options: ["5", "6", "3"] },
          { prompt: "Which is NOT a vowel?", options: ["A", "E", "B"] },
          { prompt: "Which letter comes after M?", options: ["L", "N", "O"] },
          { prompt: "Which letter comes before G?", options: ["F", "H", "E"] },
        ],
      },
      // 98
      {
        type: "home-activity" as const,
        title: "Letter Champion Challenge",
        instruction: "You are a Letter Champion! Try these activities to keep practising.",
        parentTip: "These activities consolidate all the letter knowledge from this worksheet.",
        suggestions: [
          "Make letter flash cards: write uppercase on one side, lowercase on the other. Flip and name them!",
          "Go on a letter hunt at the shops — find products that start with each letter of the alphabet.",
          "Write letters in a tray of sand, salt, or shaving cream for tactile practice.",
          "Play Letter Bingo: write 9 letters on a grid and cross them off as someone calls them out.",
        ],
      },
      // 99
      {
        type: "open-response" as const,
        title: "Alphabet Assessment: How Many Do I Know?",
        instruction: "Write every uppercase and lowercase letter pair you know. Then count them!",
        prompts: [
          { text: "Write all the letter pairs you know (Aa, Bb, Cc...):", type: "lines" as const, lines: 4 },
          { text: "I know ___ out of 26 letter pairs!", type: "lines" as const, lines: 1 },
        ],
      },
      // 100 — SPARK
      {
        type: "open-response" as const,
        title: "Letter Spark: Why Is the Alphabet Important?",
        instruction: "Think about this big question: Why do you think we need an alphabet? What would happen if there were no letters?",
        parentTip: "This philosophical prompt encourages thinking about the purpose of written language. There are no wrong answers!",
        prompts: [
          { text: "The alphabet is important because:", type: "lines" as const, lines: 3 },
          { text: "Draw what the world would look like without letters:", type: "box" as const },
        ],
      },
    ],
  },

  // ── WS 4: CVC Words ───────────────────────────────────────
  {
    slug: "cvc-words",
    title: "Short Word Sounds (CVC)",
    strand: "Language",
    description:
      "Blend consonant-vowel-consonant (CVC) words by saying each sound and blending them together — foundational decoding for reading.",
    learningGuide: {
      concept:
        "CVC words have three phonemes: a consonant, a short vowel, then another consonant — e.g. cat = /k/ /a/ /t/. Blending these sounds together is the heart of phonics-based reading. Segmenting (breaking words apart) is the reverse skill, used for spelling.",
      activation:
        "Demonstrate blending by saying the three sounds slowly then speeding up: /k/ ... /a/ ... /t/ ... kat ... cat! Compare it to a train starting slowly and then moving faster as the sounds join together.",
      check:
        "Say a CVC word stretched out (/c/ /u/ /p/) and ask your child to blend it into one word. Then say a whole word and ask them to stretch it out into three separate sounds.",
    },
    lesson: {
      title: "Blending Sounds to Read Words",
      objective:
        "Blend three phonemes (CVC) to read and write simple three-letter words.",
      materials: [
        "Pencil and crayons",
        "Strips of paper cut into three pieces (for sound boxes)",
        "Small objects that are 3-letter words: cup, pen, hat, bed, tin",
      ],
      intro: {
        title: "The Blending Train",
        script:
          "Reading is like driving a train! The train starts slowly and then gets faster as the carriages join up. Let us try it: I will say the sounds slowly — /h/ ... /a/ ... /t/ — and then we will speed the train up to make the word. Ready? /h/ /a/ /t/ ... hat! Let us try another: /c/ /u/ /p/. Can you speed the train up? Cup! Excellent!",
        action:
          "Use your fingers or small objects as carriages — one for each sound. Line up three blocks on the table. Touch each block as you say each sound: /h/ (touch block 1), /a/ (touch block 2), /t/ (touch block 3). Then slide all three blocks together and say 'hat!' Do this with 4 to 5 words: hat, cup, dog, pen, sun. Let your child take over the block-sliding after the first two examples.",
      },
      mainActivity: {
        title: "Sound Boxes",
        script:
          "Now we are going to use sound boxes. Each box holds one sound. I will say a word and you write one letter in each box — one letter per sound. Let us try sun. What is the first sound? /s/ — write it in the first box. Middle sound? /u/ — second box. Last sound? /n/ — third box. Now say it all together: sun! Let us do another: mop. First sound? /m/. Middle? /o/. Last? /p/. Mop!",
        action:
          "Draw three connected boxes on paper for each word. Work through these words in order: sun, hat, cat, pen, big, dog, mop, run. For each word: (1) say it aloud normally, (2) say it stretched out with gaps between sounds, (3) your child writes one letter per box, (4) child reads the whole word back by blending. If your child writes the wrong letter, say: 'Listen again — /d/ /o/ /g/. What sound do you hear in the middle? /o/. What letter makes that sound?' Guide them to self-correct rather than simply telling them the answer.",
      },
      wrapUp: {
        title: "Read and Match",
        script:
          "You have done so well blending and segmenting today! Now let us see if you can read some of these words on your own and match them to the right picture. Take your time — remember the blending train! Touch each letter, say its sound, then slide them together.",
        action:
          "Point to the written words in the matching activity and let your child blend each one independently. If they freeze on a word, prompt: 'What is the first sound? Good. Now the middle. Now the last. Now put them together — fast!' Celebrate every successful blend.",
      },
      parentTip:
        "Keep blending sessions short — 10 minutes is plenty for Foundation children. Always start with words using known sounds and build up. Never skip the blending step by showing pictures before the child has a chance to decode the word. Common misconception: children often say letter names instead of sounds — they might say 'see-ay-tee' instead of /k/ /a/ /t/. Always model the sounds, not the names. Another common issue is that children blend the first two sounds but forget the last — they say /ka/ and stop. Prompt them: 'Nearly there! What is the last sound?' Children also sometimes confuse short vowel sounds, especially /e/ and /i/ (saying 'pin' for 'pen'). This is normal at this stage — just model the correct vowel sound clearly. Your child is ready for the worksheet when they can: (1) blend three separate sounds into a word when you say them aloud, (2) segment a spoken CVC word into its three sounds with the sound box method, and (3) read at least 3 written CVC words by sounding them out independently.",
      extension:
        "Write 5 CVC words on cards and hide them around the house. When your child finds a card, they must blend the word and run to find an object that matches. This aligns with AC V9 Foundation — reading consonant-vowel-consonant words.",
      resources: [
        {
          title: "Starfall — Learn to Read",
          url: "https://www.starfall.com/h/learn-to-read/",
          description:
            "Structured phonics activities practising CVC words with audio support.",
        },
        {
          title: "ABC Reading Eggs — Phonics",
          url: "https://readingeggs.com.au/",
          description:
            "Blending and segmenting practice through engaging reading lessons for early learners.",
        },
        {
          title: "Khan Academy Kids — Reading",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Foundation reading activities including letter sounds and simple word blending.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Blend simple -at, -an, -og words ───
      // 1
      { type: "matching" as const, title: "Match CVC Words (Set A)", instruction: "Draw a line to match each word on the left to the same word on the right. Sound out each word!", parentTip: "Cover the right column while your child sounds out the left-hand words.", left: ["cat", "sun", "hat"], right: ["hat", "cat", "sun"] },
      // 2
      { type: "open-response" as const, title: "Sound Boxes (Set A)", instruction: "Listen to each word. Write one letter in each box. Then write the whole word.", parentTip: "Say the word slowly. Tap the boxes as you say each sound: /c/ /a/ /t/.", prompts: [ { text: "[ _ ] [ _ ] [ _ ] → cat", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → sun", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → hat", type: "lines" as const, lines: 1 } ] },
      // 3
      { type: "circle-correct" as const, title: "Which Word Is It? (Set A)", instruction: "Read the clue. Sound out the words. Circle the correct CVC word.", questions: [ { prompt: "A thing you put on your head", options: ["hat", "hit", "hot"] }, { prompt: "A furry pet that says meow", options: ["cut", "cat", "cot"] }, { prompt: "Bright and hot in the sky", options: ["son", "sun", "sin"] } ] },
      // 4
      { type: "matching" as const, title: "Match CVC Words (Set B)", instruction: "Draw a line to match each word to the same word.", left: ["dog", "cup", "pen"], right: ["pen", "dog", "cup"] },
      // 5
      { type: "open-response" as const, title: "Sound Boxes (Set B)", instruction: "Write one letter per box. Then write the whole word.", prompts: [ { text: "[ _ ] [ _ ] [ _ ] → dog", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → cup", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → pen", type: "lines" as const, lines: 1 } ] },
      // 6
      { type: "circle-correct" as const, title: "Which Word Is It? (Set B)", instruction: "Read the clue. Circle the correct word.", questions: [ { prompt: "A pet that barks", options: ["dig", "dog", "dug"] }, { prompt: "You drink from it", options: ["cop", "cap", "cup"] }, { prompt: "You write with it", options: ["pin", "pan", "pen"] } ] },
      // 7
      { type: "matching" as const, title: "Match CVC Words (Set C)", instruction: "Draw a line to match each word to the same word.", left: ["bed", "mop", "run"], right: ["run", "bed", "mop"] },
      // 8
      { type: "open-response" as const, title: "Sound Boxes (Set C)", instruction: "Write one letter per box. Then write the whole word.", prompts: [ { text: "[ _ ] [ _ ] [ _ ] → bed", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → mop", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → run", type: "lines" as const, lines: 1 } ] },
      // 9
      { type: "circle-correct" as const, title: "Which Word Is It? (Set C)", instruction: "Read the clue. Circle the correct word.", questions: [ { prompt: "You sleep in it", options: ["bad", "bid", "bed"] }, { prompt: "Used to clean floors", options: ["map", "mop", "mip"] }, { prompt: "Moving fast on your legs", options: ["ran", "run", "rin"] } ] },
      // 10
      { type: "matching" as const, title: "Match Six CVC Words", instruction: "Draw a line to match each word on the left to the correct word on the right.", left: ["cat", "sun", "hat", "dog", "cup", "pen"], right: ["cup", "dog", "pen", "hat", "cat", "sun"] },
      // 11
      { type: "circle-correct" as const, title: "Read and Choose (Set A)", instruction: "Sound out each word. Circle the real word in each row.", parentTip: "All three options look similar. Your child must blend each one to find the real word.", questions: [ { prompt: "Which is a real word?", options: ["dat", "cat", "gat"] }, { prompt: "Which is a real word?", options: ["sut", "san", "sun"] }, { prompt: "Which is a real word?", options: ["dop", "dog", "dag"] } ] },
      // 12
      { type: "open-response" as const, title: "Write the CVC Word (Set A)", instruction: "Look at each clue. Write the CVC word.", prompts: [ { text: "A hat goes on your ______ (3 letters, rhymes with bed)", type: "lines" as const, lines: 1 }, { text: "A cat sits on a ______ (3 letters, rhymes with hat)", type: "lines" as const, lines: 1 }, { text: "The sun is very ______ (3 letters, rhymes with dot)", type: "lines" as const, lines: 1 } ] },
      // 13
      { type: "sorting" as const, title: "Sort by Middle Vowel: /a/ and /o/", instruction: "Listen to the middle sound. Sort each word into the correct column.", parentTip: "Say each word slowly: /c/-/a/-/t/. Stretch the middle vowel sound.", columns: ["/a/ (cat)", "/o/ (dog)"], items: [ { label: "cat" }, { label: "dog" }, { label: "hat" }, { label: "mop" }, { label: "man" }, { label: "hot" } ] },
      // 14
      { type: "sequence" as const, title: "Unscramble the Sounds (Set A)", instruction: "The sounds are mixed up. Write them in the right order to spell the word.", parentTip: "Say each sound aloud, then blend to check.", items: [ { label: "/t/ /a/ /c/ → ______" }, { label: "/u/ /s/ /n/ → ______" }, { label: "/g/ /o/ /d/ → ______" } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Tip: The Blending Train", instruction: "Reading CVC words is like driving a train! Start slowly: /c/ ... /a/ ... /t/. Then speed up: c-a-t... CAT! Always say the sounds slowly first, then blend them faster and faster.", parentTip: "Demonstrate with physical objects: push three blocks together as you blend the sounds.", prompts: [ { text: "Blend these sounds: /h/ /a/ /t/ → ______", type: "lines" as const, lines: 1 }, { text: "Blend these sounds: /d/ /o/ /g/ → ______", type: "lines" as const, lines: 1 } ] },
      // 16
      { type: "circle-correct" as const, title: "Read and Choose (Set B)", instruction: "Sound out each word. Circle the real word.", questions: [ { prompt: "Which is a real word?", options: ["hut", "het", "hut"] }, { prompt: "Which is a real word?", options: ["beg", "bag", "bog"] }, { prompt: "Which is a real word?", options: ["nit", "net", "not"] } ] },
      // 17
      { type: "open-response" as const, title: "Draw and Write CVC Words (Set A)", instruction: "Draw a picture of each word. Then write the word underneath.", parentTip: "Let your child draw first — this helps them visualise the word.", prompts: [ { text: "Draw and write: cat", type: "box" as const }, { text: "Draw and write: sun", type: "box" as const }, { text: "Draw and write: dog", type: "box" as const } ] },
      // 18
      { type: "matching" as const, title: "Match the Word to Its Vowel Sound", instruction: "Draw a line from each word to the vowel sound in its middle.", left: ["cat", "dog", "cup", "pen", "big"], right: ["/e/", "/a/", "/i/", "/o/", "/u/"] },
      // 19
      { type: "circle-correct" as const, title: "What Is the Middle Sound? (Set A)", instruction: "What vowel sound do you hear in the middle of the word?", questions: [ { prompt: "cat", options: ["/a/", "/e/", "/o/"] }, { prompt: "dog", options: ["/a/", "/i/", "/o/"] }, { prompt: "cup", options: ["/u/", "/a/", "/e/"] } ] },
      // 20 — SPARK
      { type: "open-response" as const, title: "CVC Spark: Words All Around You!", instruction: "Look around the room. Can you find something that is a CVC word? (Like a cup, a hat, a pen, a bed?) Draw it and write the word.", parentTip: "Connecting CVC words to real objects makes decoding feel purposeful.", prompts: [ { text: "I found: ______ Draw it:", type: "box" as const } ] },
      // ─── DEVELOPING (21–50): More vowel sounds, segmenting, spelling ───
      // 21
      { type: "sorting" as const, title: "Sort by Middle Vowel: /a/, /i/, /o/, /u/", instruction: "Listen to the middle sound. Sort each word.", columns: ["/a/ (cat)", "/i/ (big)", "/o/ (mop)", "/u/ (cup)"], items: [ { label: "hat" }, { label: "sit" }, { label: "hot" }, { label: "run" }, { label: "man" }, { label: "tip" }, { label: "top" }, { label: "sun" } ] },
      // 22
      { type: "open-response" as const, title: "Sound Boxes (Set D)", instruction: "Write one letter per box.", prompts: [ { text: "[ _ ] [ _ ] [ _ ] → big", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → top", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → red", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → hug", type: "lines" as const, lines: 1 } ] },
      // 23
      { type: "circle-correct" as const, title: "What Is the Middle Sound? (Set B)", instruction: "What vowel sound do you hear in the middle?", questions: [ { prompt: "big", options: ["/a/", "/i/", "/o/"] }, { prompt: "red", options: ["/e/", "/a/", "/u/"] }, { prompt: "hug", options: ["/o/", "/a/", "/u/"] }, { prompt: "sit", options: ["/i/", "/e/", "/a/"] } ] },
      // 24
      { type: "sequence" as const, title: "Unscramble the Sounds (Set B)", instruction: "Write the sounds in the right order to spell the word.", items: [ { label: "/u/ /b/ /s/ → ______" }, { label: "/e/ /p/ /n/ → ______" }, { label: "/n/ /u/ /r/ → ______" }, { label: "/i/ /b/ /g/ → ______" } ] },
      // 25
      { type: "matching" as const, title: "Match CVC Words to Clues (Set A)", instruction: "Draw a line from each clue to the CVC word that matches.", left: ["You sleep in it", "You sit on it", "A small insect", "You wear it on your head"], right: ["hat", "ant", "bed", "mat"] },
      // 26
      { type: "circle-correct" as const, title: "Which Word Is It? (Set D)", instruction: "Read the clue. Circle the correct word.", questions: [ { prompt: "A tiny creature with six legs", options: ["ant", "int", "ont"] }, { prompt: "A red fruit", options: ["jam", "jam", "jam"] }, { prompt: "Not cold", options: ["hat", "hit", "hot"] }, { prompt: "A baby cat", options: ["kit", "kat", "kut"] } ] },
      // 27
      { type: "sorting" as const, title: "Sort by Middle Vowel: All Five Vowels", instruction: "Sort each word by its middle vowel sound.", columns: ["/a/", "/e/", "/i/", "/o/", "/u/"], items: [ { label: "cat" }, { label: "bed" }, { label: "big" }, { label: "dog" }, { label: "cup" }, { label: "hat" }, { label: "red" }, { label: "sit" }, { label: "hot" }, { label: "run" } ] },
      // 28
      { type: "open-response" as const, title: "Write a CVC Word for Each Vowel", instruction: "Write one CVC word with each middle vowel sound.", prompts: [ { text: "/a/ word: ______", type: "lines" as const, lines: 1 }, { text: "/e/ word: ______", type: "lines" as const, lines: 1 }, { text: "/i/ word: ______", type: "lines" as const, lines: 1 }, { text: "/o/ word: ______", type: "lines" as const, lines: 1 }, { text: "/u/ word: ______", type: "lines" as const, lines: 1 } ] },
      // 29
      { type: "circle-correct" as const, title: "Read and Choose (Set C)", instruction: "Sound out each word. Circle the real word.", questions: [ { prompt: "Which is a real word?", options: ["pem", "pin", "pun"] }, { prompt: "Which is a real word?", options: ["tig", "tug", "tog"] }, { prompt: "Which is a real word?", options: ["len", "lin", "log"] } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Tip: Segmenting — Breaking Words Apart", instruction: "Segmenting is the opposite of blending! Instead of pushing sounds together, you pull them apart. Cat → /c/ /a/ /t/. This is the spelling skill! Try segmenting these words.", parentTip: "Segmenting is the key to spelling. Practise daily with simple CVC words.", prompts: [ { text: "sun → /___/ /___/ /___/", type: "lines" as const, lines: 1 }, { text: "dog → /___/ /___/ /___/", type: "lines" as const, lines: 1 }, { text: "pen → /___/ /___/ /___/", type: "lines" as const, lines: 1 } ] },
      // 31
      { type: "matching" as const, title: "Match Words with Same Middle Sound", instruction: "Draw a line to match words that have the SAME middle vowel sound.", left: ["cat", "big", "cup", "bed", "dog"], right: ["red", "hat", "hot", "run", "sit"] },
      // 32
      { type: "open-response" as const, title: "Change the First Sound (Set A)", instruction: "Change just the first sound to make a new word. Example: cat → change /c/ to /b/ → bat.", parentTip: "Onset manipulation builds phonemic awareness and spelling flexibility.", prompts: [ { text: "cat → change /c/ to /h/ → ______", type: "lines" as const, lines: 1 }, { text: "dog → change /d/ to /l/ → ______", type: "lines" as const, lines: 1 }, { text: "sun → change /s/ to /b/ → ______", type: "lines" as const, lines: 1 }, { text: "pen → change /p/ to /h/ → ______", type: "lines" as const, lines: 1 } ] },
      // 33
      { type: "circle-correct" as const, title: "What Is the Last Sound? (Set A)", instruction: "What sound do you hear at the END of the word?", questions: [ { prompt: "cat", options: ["/t/", "/k/", "/a/"] }, { prompt: "dog", options: ["/d/", "/o/", "/g/"] }, { prompt: "cup", options: ["/k/", "/p/", "/u/"] }, { prompt: "bed", options: ["/b/", "/e/", "/d/"] } ] },
      // 34
      { type: "open-response" as const, title: "Sound Boxes (Set E)", instruction: "Write one letter per box.", prompts: [ { text: "[ _ ] [ _ ] [ _ ] → pit", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → bag", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → wet", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → gum", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → fox", type: "lines" as const, lines: 1 } ] },
      // 35
      { type: "open-response" as const, title: "Change the Last Sound", instruction: "Change just the last sound to make a new word.", prompts: [ { text: "cat → change /t/ to /n/ → ______", type: "lines" as const, lines: 1 }, { text: "bed → change /d/ to /g/ → ______", type: "lines" as const, lines: 1 }, { text: "hot → change /t/ to /p/ → ______", type: "lines" as const, lines: 1 }, { text: "pin → change /n/ to /t/ → ______", type: "lines" as const, lines: 1 } ] },
      // 36
      { type: "circle-correct" as const, title: "Which Word Matches the Picture Clue? (Set A)", instruction: "Circle the CVC word that matches the clue.", questions: [ { prompt: "It has wheels and goes fast", options: ["car", "van", "bus"] }, { prompt: "Red and grows on trees", options: ["jam", "bud", "nut"] }, { prompt: "You use it to dig in sand", options: ["cup", "bin", "pan"] } ] },
      // 37
      { type: "open-response" as const, title: "Draw and Write CVC Words (Set B)", instruction: "Draw and write each word.", prompts: [ { text: "Draw and write: bed", type: "box" as const }, { text: "Draw and write: cup", type: "box" as const }, { text: "Draw and write: pen", type: "box" as const } ] },
      // 38
      { type: "matching" as const, title: "Match CVC Words to Clues (Set B)", instruction: "Draw a line from each clue to the matching CVC word.", left: ["It shines in the sky", "You write with it", "It lives in water", "It keeps your head warm"], right: ["hat", "sun", "fish", "pen"] },
      // 39
      { type: "open-response" as const, title: "Change the Middle Sound", instruction: "Change just the middle vowel sound to make a new word.", parentTip: "This is the hardest manipulation — changing the vowel changes the entire word.", prompts: [ { text: "cat → change /a/ to /u/ → ______", type: "lines" as const, lines: 1 }, { text: "hat → change /a/ to /o/ → ______", type: "lines" as const, lines: 1 }, { text: "big → change /i/ to /a/ → ______", type: "lines" as const, lines: 1 }, { text: "pin → change /i/ to /a/ → ______", type: "lines" as const, lines: 1 } ] },
      // 40 — SPARK
      { type: "open-response" as const, title: "CVC Spark: Robot Talk!", instruction: "Play Robot Talk! A robot speaks in separate sounds: /c/ /u/ /p/. Can you be a robot? Break these words into three robot sounds.", parentTip: "This segmenting game is perfect for car rides and mealtimes.", prompts: [ { text: "Robot says 'hat': /___/ /___/ /___/", type: "lines" as const, lines: 1 }, { text: "Robot says 'dog': /___/ /___/ /___/", type: "lines" as const, lines: 1 }, { text: "Robot says 'cup': /___/ /___/ /___/", type: "lines" as const, lines: 1 }, { text: "Now YOU choose a word for robot talk:", type: "lines" as const, lines: 1 } ] },
      // ─── CONSOLIDATING (41–70): Speed, fluency, word building ───
      // 41
      { type: "circle-correct" as const, title: "Speed Read: Real or Nonsense? (Set A)", instruction: "Read each word quickly. Circle REAL if it is a real word, or NONSENSE if it is made up.", parentTip: "This builds reading fluency. Your child must decode each word to decide.", questions: [ { prompt: "cat", options: ["REAL", "NONSENSE"] }, { prompt: "zop", options: ["REAL", "NONSENSE"] }, { prompt: "bed", options: ["REAL", "NONSENSE"] }, { prompt: "mip", options: ["REAL", "NONSENSE"] }, { prompt: "sun", options: ["REAL", "NONSENSE"] }, { prompt: "feg", options: ["REAL", "NONSENSE"] } ] },
      // 42
      { type: "open-response" as const, title: "Write CVC Words from Memory", instruction: "Your parent will say a word. Write it in the box without seeing it first!", parentTip: "Say: cat, dog, pen, run, big. The child segments and writes each word. This is spelling!", prompts: [ { text: "Word 1: ______", type: "lines" as const, lines: 1 }, { text: "Word 2: ______", type: "lines" as const, lines: 1 }, { text: "Word 3: ______", type: "lines" as const, lines: 1 }, { text: "Word 4: ______", type: "lines" as const, lines: 1 }, { text: "Word 5: ______", type: "lines" as const, lines: 1 } ] },
      // 43
      { type: "sorting" as const, title: "Sort CVC Words by Ending Sound", instruction: "Sort each word by its ENDING sound.", columns: ["/t/ ending", "/g/ ending", "/n/ ending", "/p/ ending"], items: [ { label: "cat" }, { label: "dog" }, { label: "sun" }, { label: "cup" }, { label: "hat" }, { label: "big" }, { label: "run" }, { label: "mop" } ] },
      // 44
      { type: "open-response" as const, title: "Word Ladder (Set A)", instruction: "Change one letter at a time to make a new CVC word. Example: cat → hat (changed c to h).", parentTip: "Word ladders develop phonemic manipulation skills.", prompts: [ { text: "cat → change the first letter → ______", type: "lines" as const, lines: 1 }, { text: "______ → change the middle letter → ______", type: "lines" as const, lines: 1 }, { text: "______ → change the last letter → ______", type: "lines" as const, lines: 1 } ] },
      // 45 — TIP
      { type: "open-response" as const, title: "Tip: Three Sounds, Three Letters", instruction: "Every CVC word has exactly three sounds and three letters. The first sound is a consonant, the middle sound is a vowel, and the last sound is a consonant. C-V-C! Try identifying each part.", parentTip: "Understanding the CVC pattern helps children decode and spell new words independently.", prompts: [ { text: "In 'cat': C = ___, V = ___, C = ___", type: "lines" as const, lines: 1 }, { text: "In 'dog': C = ___, V = ___, C = ___", type: "lines" as const, lines: 1 } ] },
      // 46
      { type: "circle-correct" as const, title: "Speed Read: Real or Nonsense? (Set B)", instruction: "Read each word quickly. Circle REAL or NONSENSE.", questions: [ { prompt: "pen", options: ["REAL", "NONSENSE"] }, { prompt: "bof", options: ["REAL", "NONSENSE"] }, { prompt: "run", options: ["REAL", "NONSENSE"] }, { prompt: "tig", options: ["REAL", "NONSENSE"] }, { prompt: "hot", options: ["REAL", "NONSENSE"] }, { prompt: "jep", options: ["REAL", "NONSENSE"] } ] },
      // 47
      { type: "matching" as const, title: "Match CVC Words to Pictures (Set A)", instruction: "Draw a line from each word to the correct picture name.", left: ["hat", "bed", "sun", "cup", "dog", "pen"], right: ["pen", "hat", "dog", "bed", "cup", "sun"] },
      // 48
      { type: "open-response" as const, title: "Write a CVC Word That Starts With...", instruction: "Write a CVC word that starts with each letter.", prompts: [ { text: "Starts with 'c': ______", type: "lines" as const, lines: 1 }, { text: "Starts with 'h': ______", type: "lines" as const, lines: 1 }, { text: "Starts with 'b': ______", type: "lines" as const, lines: 1 }, { text: "Starts with 'd': ______", type: "lines" as const, lines: 1 }, { text: "Starts with 'r': ______", type: "lines" as const, lines: 1 } ] },
      // 49
      { type: "sequence" as const, title: "Unscramble the Sounds (Set C)", instruction: "Put the sounds in the right order.", items: [ { label: "/o/ /t/ /p/ → ______" }, { label: "/e/ /d/ /b/ → ______" }, { label: "/a/ /m/ /n/ → ______" }, { label: "/i/ /p/ /t/ → ______" }, { label: "/u/ /g/ /h/ → ______" } ] },
      // 50
      { type: "open-response" as const, title: "CVC Word Families (Set A)", instruction: "Write as many CVC words as you can for each word family.", prompts: [ { text: "-at family (cat, hat, ...): ___________________", type: "lines" as const, lines: 1 }, { text: "-og family (dog, log, ...): ___________________", type: "lines" as const, lines: 1 }, { text: "-un family (sun, run, ...): ___________________", type: "lines" as const, lines: 1 } ] },
      // 51
      { type: "circle-correct" as const, title: "Odd One Out: Different Middle Sound", instruction: "Circle the word with a DIFFERENT middle sound.", questions: [ { prompt: "cat, hat, hot", options: ["cat", "hat", "hot"] }, { prompt: "big, sit, cup", options: ["big", "sit", "cup"] }, { prompt: "run, sun, dog", options: ["run", "sun", "dog"] } ] },
      // 52
      { type: "open-response" as const, title: "CVC Sentence Writing (Set A)", instruction: "Use each CVC word in a short sentence.", parentTip: "Sentences can be very simple: The cat sat. The dog ran.", prompts: [ { text: "cat: ___________________________", type: "lines" as const, lines: 1 }, { text: "sun: ___________________________", type: "lines" as const, lines: 1 }, { text: "bed: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 53
      { type: "open-response" as const, title: "Word Ladder (Set B)", instruction: "Change one letter at a time to make a new CVC word.", prompts: [ { text: "dog → ______ (change one letter)", type: "lines" as const, lines: 1 }, { text: "______ → ______ (change one letter)", type: "lines" as const, lines: 1 }, { text: "______ → ______ (change one letter)", type: "lines" as const, lines: 1 } ] },
      // 54
      { type: "circle-correct" as const, title: "Which CVC Word Completes the Sentence?", instruction: "Circle the word that completes the sentence.", questions: [ { prompt: "The ___ sat on the mat.", options: ["cut", "cat", "cot"] }, { prompt: "I can ___ fast.", options: ["ran", "run", "rin"] }, { prompt: "The ___ is hot.", options: ["son", "sun", "sin"] }, { prompt: "I am in ___.", options: ["bad", "bid", "bed"] } ] },
      // 55
      { type: "sorting" as const, title: "Sort CVC Words by Beginning Sound", instruction: "Sort each CVC word by its beginning sound.", columns: ["/c/", "/d/", "/h/", "/s/"], items: [ { label: "cat" }, { label: "dog" }, { label: "hat" }, { label: "sun" }, { label: "cup" }, { label: "dig" }, { label: "hot" }, { label: "sit" } ] },
      // 56
      { type: "open-response" as const, title: "CVC Word Families (Set B)", instruction: "Write as many CVC words as you can for each word family.", prompts: [ { text: "-en family (pen, hen, ...): ___________________", type: "lines" as const, lines: 1 }, { text: "-ig family (big, dig, ...): ___________________", type: "lines" as const, lines: 1 }, { text: "-ot family (hot, dot, ...): ___________________", type: "lines" as const, lines: 1 } ] },
      // 57
      { type: "matching" as const, title: "Match CVC Words to Sentence Clues", instruction: "Draw a line from each sentence to the CVC word that fits.", left: ["I wear it on my head.", "I write with it.", "It is hot in the sky.", "A pet that barks."], right: ["sun", "dog", "hat", "pen"] },
      // 58
      { type: "open-response" as const, title: "Sound Boxes (Set F)", instruction: "Write one letter per box.", prompts: [ { text: "[ _ ] [ _ ] [ _ ] → jam", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → vet", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → win", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → zip", type: "lines" as const, lines: 1 }, { text: "[ _ ] [ _ ] [ _ ] → yak", type: "lines" as const, lines: 1 } ] },
      // 59
      { type: "circle-correct" as const, title: "Speed Read: Real or Nonsense? (Set C)", instruction: "Read quickly. Circle REAL or NONSENSE.", questions: [ { prompt: "jam", options: ["REAL", "NONSENSE"] }, { prompt: "vet", options: ["REAL", "NONSENSE"] }, { prompt: "nup", options: ["REAL", "NONSENSE"] }, { prompt: "win", options: ["REAL", "NONSENSE"] }, { prompt: "zep", options: ["REAL", "NONSENSE"] }, { prompt: "fox", options: ["REAL", "NONSENSE"] } ] },
      // 60 — HOME ACTIVITY
      { type: "home-activity" as const, title: "CVC Word Hunt", instruction: "Practise blending CVC words in real life.", parentTip: "Short daily bursts of 5 to 10 minutes are much more effective than one long session.", suggestions: [ "Write 3 CVC words on sticky notes and hide them. Your child blends the word and finds the matching object.", "Play robot talk: say a word in robot sounds (/c/-/u/-/p/) and your child says the real word.", "Take turns being the robot — your child segments words for you to blend.", "Use bath letters or fridge magnets to build and blend CVC words." ] },
      // ─── EXTENDING (61–100): Fluency, sentences, creative tasks ───
      // 61
      { type: "open-response" as const, title: "CVC Sentence Writing (Set B)", instruction: "Write a sentence using each CVC word.", prompts: [ { text: "dog: ___________________________", type: "lines" as const, lines: 1 }, { text: "hat: ___________________________", type: "lines" as const, lines: 1 }, { text: "cup: ___________________________", type: "lines" as const, lines: 1 }, { text: "pen: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 62
      { type: "circle-correct" as const, title: "Which CVC Word Completes the Sentence? (Set B)", instruction: "Circle the word that fits.", questions: [ { prompt: "The ___ is in the pond.", options: ["fog", "fig", "frog"] }, { prompt: "I sat on my ___.", options: ["bad", "bid", "bed"] }, { prompt: "Put the lid on the ___.", options: ["pin", "pan", "pen"] }, { prompt: "The bug is on the ___.", options: ["rag", "rug", "rig"] } ] },
      // 63
      { type: "open-response" as const, title: "Write a CVC Word That Ends With...", instruction: "Write a CVC word that ends with each sound.", prompts: [ { text: "Ends with /t/: ______", type: "lines" as const, lines: 1 }, { text: "Ends with /g/: ______", type: "lines" as const, lines: 1 }, { text: "Ends with /n/: ______", type: "lines" as const, lines: 1 }, { text: "Ends with /d/: ______", type: "lines" as const, lines: 1 }, { text: "Ends with /p/: ______", type: "lines" as const, lines: 1 } ] },
      // 64
      { type: "sorting" as const, title: "Sort: CVC Words I Can Read vs Still Learning", instruction: "Read each word. If you can read it easily, put it in the 'I Can Read It!' column. If you need help, put it in the 'Still Learning' column.", parentTip: "This self-assessment builds metacognition. Celebrate both columns!", columns: ["I Can Read It!", "Still Learning"], items: [ { label: "cat" }, { label: "sun" }, { label: "bed" }, { label: "fox" }, { label: "jam" }, { label: "vet" }, { label: "zip" }, { label: "yak" } ] },
      // 65
      { type: "open-response" as const, title: "CVC Rhyming Pairs", instruction: "Write a CVC word that rhymes with each word.", prompts: [ { text: "cat → ______", type: "lines" as const, lines: 1 }, { text: "dog → ______", type: "lines" as const, lines: 1 }, { text: "pen → ______", type: "lines" as const, lines: 1 }, { text: "cup → ______", type: "lines" as const, lines: 1 }, { text: "big → ______", type: "lines" as const, lines: 1 } ] },
      // 66
      { type: "open-response" as const, title: "Write a Two-Word Sentence", instruction: "Write a tiny sentence using two CVC words. Example: Big dog. Red hat.", parentTip: "These micro-sentences build sentence awareness while practising CVC decoding.", prompts: [ { text: "Sentence 1: ___________________________", type: "lines" as const, lines: 1 }, { text: "Sentence 2: ___________________________", type: "lines" as const, lines: 1 }, { text: "Sentence 3: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 67
      { type: "circle-correct" as const, title: "Speed Read: Real or Nonsense? (Set D)", instruction: "Read quickly!", questions: [ { prompt: "map", options: ["REAL", "NONSENSE"] }, { prompt: "dib", options: ["REAL", "NONSENSE"] }, { prompt: "van", options: ["REAL", "NONSENSE"] }, { prompt: "gop", options: ["REAL", "NONSENSE"] }, { prompt: "wet", options: ["REAL", "NONSENSE"] }, { prompt: "pim", options: ["REAL", "NONSENSE"] } ] },
      // 68
      { type: "open-response" as const, title: "Draw and Write CVC Words (Set C)", instruction: "Draw each word and write it underneath.", prompts: [ { text: "Draw and write: fox", type: "box" as const }, { text: "Draw and write: jam", type: "box" as const } ] },
      // 69
      { type: "matching" as const, title: "Grand CVC Match: 8 Words", instruction: "Draw a line to match each word to its clue.", left: ["cat", "sun", "bed", "pen", "dog", "hat", "cup", "mop"], right: ["writes", "sleeps", "hot sky", "meows", "barks", "head wear", "drinks", "cleans"] },
      // 70
      { type: "open-response" as const, title: "CVC Word Families (Set C)", instruction: "Write as many words as you can for each family.", prompts: [ { text: "-up family: ___________________", type: "lines" as const, lines: 1 }, { text: "-et family: ___________________", type: "lines" as const, lines: 1 }, { text: "-an family: ___________________", type: "lines" as const, lines: 1 } ] },
      // 71
      { type: "open-response" as const, title: "CVC Sentence Writing (Set C)", instruction: "Write a sentence for each word. Make them interesting!", prompts: [ { text: "run: ___________________________", type: "lines" as const, lines: 1 }, { text: "big: ___________________________", type: "lines" as const, lines: 1 }, { text: "hot: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 72
      { type: "circle-correct" as const, title: "Change One Letter: What Is the New Word?", instruction: "Change ONE letter to make a new word. Circle the correct answer.", questions: [ { prompt: "cat → change c to h →", options: ["hat", "hit", "hot"] }, { prompt: "dog → change d to l →", options: ["lag", "log", "leg"] }, { prompt: "sun → change s to b →", options: ["ban", "bin", "bun"] }, { prompt: "pen → change p to h →", options: ["hen", "hin", "hun"] } ] },
      // 73
      { type: "open-response" as const, title: "CVC Mini Story (Set A)", instruction: "Write a mini story using at least THREE CVC words. It can be silly!", parentTip: "Accept invented spelling for non-CVC words. The goal is using CVC words confidently.", prompts: [ { text: "My CVC story:", type: "lines" as const, lines: 4 } ] },
      // 74
      { type: "sequence" as const, title: "Unscramble the Sounds: Grand Challenge", instruction: "Put the sounds in the right order.", items: [ { label: "/a/ /j/ /m/ → ______" }, { label: "/e/ /v/ /t/ → ______" }, { label: "/i/ /w/ /n/ → ______" }, { label: "/o/ /f/ /x/ → ______" }, { label: "/u/ /b/ /g/ → ______" } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Tip: Building Longer Words from CVC", instruction: "CVC words are the building blocks of longer words! 'cat' is inside 'caterpillar'. 'sun' is inside 'sunshine'. Can you find the CVC word hiding inside each longer word?", parentTip: "This connects CVC knowledge to longer word reading — a motivating preview of what is ahead.", prompts: [ { text: "The CVC word in 'hatbox' is: ______", type: "lines" as const, lines: 1 }, { text: "The CVC word in 'sunset' is: ______", type: "lines" as const, lines: 1 }, { text: "The CVC word in 'hotdog' is: ______", type: "lines" as const, lines: 1 } ] },
      // 76
      { type: "open-response" as const, title: "Write All the CVC Words You Know!", instruction: "How many CVC words can you write in 2 minutes? Write as many as you can!", parentTip: "Time this for fun. Celebrate every word. Count them at the end!", prompts: [ { text: "My CVC words:", type: "lines" as const, lines: 4 }, { text: "Total: ______ words!", type: "lines" as const, lines: 1 } ] },
      // 77
      { type: "circle-correct" as const, title: "Which CVC Word Completes the Sentence? (Set C)", instruction: "Circle the word that fits.", questions: [ { prompt: "The ___ ate a fish.", options: ["cat", "cut", "cot"] }, { prompt: "I can ___ a bus.", options: ["got", "get", "gut"] }, { prompt: "Mum ___ for a run.", options: ["win", "won", "wen"] }, { prompt: "The ___ is on a web.", options: ["bag", "bug", "big"] } ] },
      // 78
      { type: "open-response" as const, title: "CVC Riddles", instruction: "Solve each riddle. The answer is a CVC word!", prompts: [ { text: "I have four legs and say meow. I am a ______.", type: "lines" as const, lines: 1 }, { text: "I am round and you kick me. I am a ______.", type: "lines" as const, lines: 1 }, { text: "I am hot and yellow in the sky. I am the ______.", type: "lines" as const, lines: 1 }, { text: "You put me on a hook to catch fish. I am a ______.", type: "lines" as const, lines: 1 } ] },
      // 79
      { type: "open-response" as const, title: "Write Your Own CVC Riddle", instruction: "Make up a riddle where the answer is a CVC word!", parentTip: "Creating riddles requires higher-order thinking about both meaning and sound.", prompts: [ { text: "My riddle: ___________________________", type: "lines" as const, lines: 2 }, { text: "The answer is: ______", type: "lines" as const, lines: 1 } ] },
      // 80 — SPARK
      { type: "open-response" as const, title: "CVC Spark: CVC Words at the Shops", instruction: "If you went to the shops, which CVC words could you find? Think about things you might see or buy!", parentTip: "This connects decoding to real-world contexts.", prompts: [ { text: "CVC words I might see at the shops: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 81
      { type: "open-response" as const, title: "CVC Sentence Writing (Set D)", instruction: "Write a sentence for each word.", prompts: [ { text: "map: ___________________________", type: "lines" as const, lines: 1 }, { text: "van: ___________________________", type: "lines" as const, lines: 1 }, { text: "fox: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 82
      { type: "sorting" as const, title: "Grand CVC Sort: All Five Vowels", instruction: "Sort every word by its middle vowel sound.", columns: ["/a/", "/e/", "/i/", "/o/", "/u/"], items: [ { label: "cat" }, { label: "bed" }, { label: "big" }, { label: "dog" }, { label: "cup" }, { label: "man" }, { label: "wet" }, { label: "sit" }, { label: "hot" }, { label: "run" }, { label: "jam" }, { label: "vet" }, { label: "win" }, { label: "fox" }, { label: "bug" } ] },
      // 83
      { type: "open-response" as const, title: "CVC Mini Story (Set B)", instruction: "Write another mini story using CVC words. Try to use FIVE CVC words this time!", prompts: [ { text: "My CVC story:", type: "lines" as const, lines: 4 } ] },
      // 84
      { type: "circle-correct" as const, title: "Grand CVC Quiz (Set A)", instruction: "Read each word and circle whether it is REAL or NONSENSE.", questions: [ { prompt: "vet", options: ["REAL", "NONSENSE"] }, { prompt: "dap", options: ["REAL", "NONSENSE"] }, { prompt: "fox", options: ["REAL", "NONSENSE"] }, { prompt: "wib", options: ["REAL", "NONSENSE"] }, { prompt: "yak", options: ["REAL", "NONSENSE"] }, { prompt: "rog", options: ["REAL", "NONSENSE"] } ] },
      // 85
      { type: "open-response" as const, title: "CVC Word Families: Grand Challenge", instruction: "Write as many words as you can for each family. Try for 5 each!", prompts: [ { text: "-at: ___________________________", type: "lines" as const, lines: 1 }, { text: "-og: ___________________________", type: "lines" as const, lines: 1 }, { text: "-un: ___________________________", type: "lines" as const, lines: 1 }, { text: "-en: ___________________________", type: "lines" as const, lines: 1 }, { text: "-ig: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 86
      { type: "matching" as const, title: "Match 10 CVC Words to Clues", instruction: "Draw a line from each word to its meaning.", left: ["cat", "sun", "bed", "pen", "dog", "hat", "cup", "mop", "fox", "jam"], right: ["sweet spread", "sly animal", "cleans floors", "hot star", "meows", "barks", "drinks from", "writes with", "sleep on", "head cover"] },
      // 87
      { type: "open-response" as const, title: "Draw and Label a CVC Scene", instruction: "Draw a picture of a park, house or garden. Label as many things in your picture as you can using CVC words.", parentTip: "This is an integrated task combining drawing, vocabulary and spelling.", prompts: [ { text: "Draw your scene:", type: "box" as const }, { text: "CVC word labels I used: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 88
      { type: "circle-correct" as const, title: "Grand CVC Quiz (Set B)", instruction: "Circle the correct CVC word for each clue.", questions: [ { prompt: "A colour", options: ["red", "rid", "rod"] }, { prompt: "Not small", options: ["bag", "big", "bug"] }, { prompt: "You sit on it", options: ["mat", "met", "mit"] }, { prompt: "Very warm", options: ["hat", "hit", "hot"] }, { prompt: "A garden tool", options: ["dig", "dug", "dag"] } ] },
      // 89
      { type: "open-response" as const, title: "CVC Crossword Clues", instruction: "Read each clue and write the CVC word answer.", prompts: [ { text: "1. Across: A pet that purrs. (3 letters) ______", type: "lines" as const, lines: 1 }, { text: "2. Down: Opposite of cold. (3 letters) ______", type: "lines" as const, lines: 1 }, { text: "3. Across: The opposite of sit. (3 letters) ______", type: "lines" as const, lines: 1 }, { text: "4. Down: A yellow star in the sky. (3 letters) ______", type: "lines" as const, lines: 1 } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Tip: You Are a Reader Now!", instruction: "You can read CVC words — and that means you are a reader! Every long word is made up of small sound chunks. The skills you have practised here (blending, segmenting, listening to sounds) are the exact same skills real readers use every day.", parentTip: "This affirmation connects all the CVC work to the bigger picture of reading.", prompts: [ { text: "I am proud that I can read: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 91
      { type: "open-response" as const, title: "CVC Challenge: Write 20 CVC Words", instruction: "Can you write 20 different CVC words? Use all five vowel sounds!", prompts: [ { text: "My 20 CVC words:", type: "lines" as const, lines: 4 } ] },
      // 92
      { type: "open-response" as const, title: "CVC Sentence Challenge", instruction: "Write a sentence that uses as many CVC words as possible! Example: The big red cat sat on a mat.", prompts: [ { text: "My CVC sentence:", type: "lines" as const, lines: 2 } ] },
      // 93
      { type: "circle-correct" as const, title: "What Is the First Sound? Last Sound? Middle Sound?", instruction: "Answer each question about the sounds in the word.", questions: [ { prompt: "cat: first sound?", options: ["/c/", "/a/", "/t/"] }, { prompt: "cat: last sound?", options: ["/c/", "/a/", "/t/"] }, { prompt: "cat: middle sound?", options: ["/c/", "/a/", "/t/"] }, { prompt: "dog: first sound?", options: ["/d/", "/o/", "/g/"] }, { prompt: "dog: middle sound?", options: ["/d/", "/o/", "/g/"] } ] },
      // 94
      { type: "open-response" as const, title: "Make Up New CVC Words", instruction: "Invent three CVC words that are NOT real words. Then write what they might mean if they were real!", parentTip: "Nonsense words show true decoding skill. The creativity here is a bonus!", prompts: [ { text: "My made-up word: ______. It means: _______________", type: "lines" as const, lines: 1 }, { text: "My made-up word: ______. It means: _______________", type: "lines" as const, lines: 1 }, { text: "My made-up word: ______. It means: _______________", type: "lines" as const, lines: 1 } ] },
      // 95
      { type: "open-response" as const, title: "CVC Mini Story (Set C)", instruction: "Write your best mini story yet! Use at least SIX CVC words.", prompts: [ { text: "My best CVC story:", type: "lines" as const, lines: 5 } ] },
      // 96
      { type: "sorting" as const, title: "Sort: Words I Can Spell vs Words I Need Help With", instruction: "Sort these CVC words honestly.", columns: ["I Can Spell It!", "I Need Help"], items: [ { label: "cat" }, { label: "fox" }, { label: "jam" }, { label: "vet" }, { label: "zip" }, { label: "yak" }, { label: "sun" }, { label: "bed" } ] },
      // 97
      { type: "open-response" as const, title: "CVC Word Art", instruction: "Choose your favourite CVC word. Write it in BIG letters and decorate it!", prompts: [ { text: "My favourite CVC word is: ______", type: "lines" as const, lines: 1 }, { text: "Draw it big and beautiful:", type: "box" as const } ] },
      // 98
      { type: "home-activity" as const, title: "CVC Champion Challenge", instruction: "You are a CVC Champion! Try these activities to keep practising.", suggestions: [ "Write CVC words on cards. Flip one over and read it as fast as you can!", "Play CVC Bingo: write 9 CVC words on a grid, and cross them off as someone says them.", "Find 5 CVC-word objects in the kitchen (cup, pan, lid, tin, mug).", "Write a shopping list using only CVC words." ] },
      // 99
      { type: "open-response" as const, title: "CVC Assessment: How Many Can I Read?", instruction: "Read each word aloud to your parent. Tick the ones you can read.", prompts: [ { text: "cat __ sun __ dog __ hat __ cup __ pen __ bed __ run __ big __ hot __", type: "lines" as const, lines: 1 }, { text: "fox __ jam __ vet __ win __ zip __ yak __ map __ van __ bug __ mop __", type: "lines" as const, lines: 1 }, { text: "I can read _____ out of 20 CVC words!", type: "lines" as const, lines: 1 } ] },
      // 100 — SPARK
      { type: "open-response" as const, title: "CVC Spark: What Will You Read Next?", instruction: "You can read CVC words! What do you think you will learn to read next? Longer words? Sentences? A whole book? Draw or write about what you want to read.", parentTip: "This forward-looking prompt connects today's learning to future goals.", prompts: [ { text: "Next I want to read:", type: "lines" as const, lines: 2 }, { text: "Draw yourself reading:", type: "box" as const } ] },
    ],
  },

  // ── WS 5: Syllables ───────────────────────────────────────
  {
    slug: "syllables",
    title: "Clapping Syllables",
    strand: "Language",
    description:
      "Break spoken words into syllables by clapping the beats — building phonological awareness and supporting spelling.",
    learningGuide: {
      concept:
        "A syllable is a beat or chunk of sound in a word. Every syllable has one vowel sound. 'Cat' has 1 syllable, 'rabbit' has 2, 'crocodile' has 3. Hearing syllables helps children spell longer words by breaking them into manageable chunks.",
      activation:
        "Say your child's name and clap each syllable. Then do the same with family members' names. This instantly shows syllables are real and everywhere.",
      check:
        "Say a word and ask: How many beats? Clap it out. Can your child clap and count syllables in 2- and 3-syllable words without your help?",
    },
    lesson: {
      title: "How Many Beats?",
      objective: "Clap and count syllables in words of 1 to 3 syllables.",
      materials: [
        "Pencil and paper",
        "A drum, pot lid, or clapping hands",
        "Small counting objects (blocks, coins, pasta pieces)",
      ],
      intro: {
        title: "Words Have Beats!",
        script:
          "Did you know that words are a bit like music? They have beats, just like a song! We call those beats syllables. Put your hand under your chin and say apple — feel how your chin drops twice? App-le. Two beats! Try cat — just one drop. One beat! Now try butterfly — but-ter-fly. Three drops! Can you feel it?",
        action:
          "Have your child place their hand flat under their chin. Say 'apple' slowly and feel the chin drop twice. Then try 'cat' — one drop. Then 'butterfly' — three drops. Do 6 to 8 words together: dog (1), happy (2), banana (3), cup (1), pencil (2), elephant (3). For each word, have your child hold up fingers to show the count. If the chin-drop method is difficult, try placing one block on the table per syllable as you say the word.",
      },
      mainActivity: {
        title: "Clap and Count",
        script:
          "Now let us clap the beats! I will say a word, you clap and count the syllables, then write the number. Ready? Crocodile — clap it with me: croc-o-dile. How many? Three! Great. Now fish... just one clap. Write the number! Let us try a tricky one: chocolate. Choc-o-late. Some people say it as two beats, some say three — both are fine!",
        action:
          "Work through the sorting and counting activities together. For each word, follow this sequence: (1) say the word normally, (2) clap and say it in syllable chunks, (3) your child places one block per syllable on the table, (4) count the blocks, (5) write the number. Use these words in order: cat, rabbit, butterfly, dog, happy, dinosaur, sun, penguin. After counting, sort the blocks into groups: 1-syllable pile, 2-syllable pile, 3-syllable pile.",
      },
      wrapUp: {
        title: "Syllable Sort",
        script:
          "Let us sort these animal names by how many syllables they have. One-syllable animals go here, two-syllable animals there, and three-syllable animals over here. Say each one slowly — ant, penguin, elephant. Where does kangaroo go? Kan-ga-roo — three! What about cat? Just one.",
        action: "Sort animal name cards or spoken words into groups by syllable count. Make three piles or columns labelled 1, 2, 3. Let your child physically move cards or blocks into the right group. After sorting, read each group aloud together: 'All the one-syllable animals: cat, fish, ant.'",
      },
      parentTip:
        "The chin-drop trick is the most reliable method for young children because it is physical and they can feel it clearly. If clapping is confusing, always go back to placing a hand under the chin. Common misconception: children often count sounds instead of syllables — they might say 'cat' has three syllables because it has three sounds (/k/, /a/, /t/). Clarify the difference: 'Syllables are the BIG beats. Cat has three sounds but only one big beat — cat. Hear how it is just one clap?' Another common issue is with words where syllable boundaries are ambiguous, like 'chocolate' (2 or 3 syllables depending on accent). Accept your child's natural pronunciation. Your child is ready for the worksheet when they can: (1) correctly clap the syllables in 1- and 2-syllable words without help, (2) sort at least 5 spoken words into 1-, 2-, or 3-syllable groups, and (3) explain in their own words that syllables are the 'beats' or 'claps' in a word.",
      extension:
        "Use your child's favourite toys or stuffed animals. How many syllables in each name? Sort them into 1, 2 or 3-syllable groups. This aligns with AC V9 Foundation — orally blending and segmenting phonemes in single-syllable words.",
      resources: [
        {
          title: "ABC Education — Syllables",
          url: "https://www.abc.net.au/education/learn-english/phonological-awareness/",
          description:
            "Audio-visual activities demonstrating syllable awareness for Foundation learners.",
        },
        {
          title: "Khan Academy Kids — Syllables",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive syllable counting activities for young learners.",
        },
        {
          title: "Starfall — Phonological Awareness",
          url: "https://www.starfall.com/",
          description:
            "Syllable and sound activities with playful, child-friendly presentation.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): 1- and 2-syllable words, clap and count ───
      // 1
      { type: "circle-correct" as const, title: "How Many Claps? (Set A)", instruction: "Clap each word. Circle the number of claps you hear.", parentTip: "Demonstrate clapping 'cat' (1 clap) and 'apple' (2 claps) before your child starts.", questions: [ { prompt: "cat", options: ["1", "2"] }, { prompt: "dog", options: ["1", "2"] }, { prompt: "sun", options: ["1", "2"] } ] },
      // 2
      { type: "circle-correct" as const, title: "How Many Claps? (Set B)", instruction: "Clap each word. Circle the number of claps.", questions: [ { prompt: "apple", options: ["1", "2"] }, { prompt: "happy", options: ["1", "2"] }, { prompt: "rabbit", options: ["1", "2"] } ] },
      // 3
      { type: "matching" as const, title: "Match Words to Clap Counts (Set A)", instruction: "Draw a line from each word to the number of syllables.", parentTip: "Say each word together and clap before drawing the line.", left: ["cat", "apple", "dog"], right: ["2", "1", "1"] },
      // 4
      { type: "open-response" as const, title: "Clap and Count (Set A)", instruction: "Clap the syllables. Write the number of claps.", parentTip: "Place your hand under your chin. Count each time your chin drops.", prompts: [ { text: "hat: _____ claps", type: "lines" as const, lines: 1 }, { text: "tiger: _____ claps", type: "lines" as const, lines: 1 }, { text: "fish: _____ claps", type: "lines" as const, lines: 1 } ] },
      // 5
      { type: "sorting" as const, title: "Sort: 1 or 2 Syllables? (Set A)", instruction: "Clap each word. Write it in the correct column.", parentTip: "Go slowly. Say each word at a natural pace, not too fast.", columns: ["1 syllable", "2 syllables"], items: [ { label: "sun" }, { label: "baby" }, { label: "cup" }, { label: "table" }, { label: "bed" }, { label: "water" } ] },
      // 6
      { type: "circle-correct" as const, title: "How Many Claps? (Set C)", instruction: "Clap each word. Circle the correct number.", questions: [ { prompt: "ball", options: ["1", "2"] }, { prompt: "monkey", options: ["1", "2"] }, { prompt: "tree", options: ["1", "2"] }, { prompt: "pencil", options: ["1", "2"] } ] },
      // 7
      { type: "matching" as const, title: "Match Words to Clap Counts (Set B)", instruction: "Draw a line from each word to the correct number of syllables.", left: ["flower", "bed", "kitten", "sun"], right: ["1", "2", "1", "2"] },
      // 8
      { type: "open-response" as const, title: "Clap and Count (Set B)", instruction: "Clap each word. Write the number of syllables.", parentTip: "If your child is unsure, use the chin-drop method instead of clapping.", prompts: [ { text: "garden: _____ syllables", type: "lines" as const, lines: 1 }, { text: "book: _____ syllables", type: "lines" as const, lines: 1 }, { text: "sister: _____ syllables", type: "lines" as const, lines: 1 }, { text: "car: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 9
      { type: "sorting" as const, title: "Sort: 1 or 2 Syllables? (Set B)", instruction: "Clap and sort each word.", columns: ["1 syllable", "2 syllables"], items: [ { label: "dog" }, { label: "butter" }, { label: "pen" }, { label: "under" }, { label: "hat" }, { label: "finger" } ] },
      // 10
      { type: "circle-correct" as const, title: "Pick the 2-Syllable Word", instruction: "Circle the word that has 2 syllables.", questions: [ { prompt: "Which has 2 syllables?", options: ["cat", "apple", "sun"] }, { prompt: "Which has 2 syllables?", options: ["dog", "bed", "rabbit"] }, { prompt: "Which has 2 syllables?", options: ["hat", "pencil", "fish"] } ] },
      // 11
      { type: "open-response" as const, title: "Clap and Count (Set C)", instruction: "Clap each word. Write the number of syllables.", prompts: [ { text: "window: _____ syllables", type: "lines" as const, lines: 1 }, { text: "pen: _____ syllables", type: "lines" as const, lines: 1 }, { text: "basket: _____ syllables", type: "lines" as const, lines: 1 }, { text: "hat: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 12
      { type: "matching" as const, title: "Match Words to Clap Counts (Set C)", instruction: "Draw a line from each word to 1 or 2.", parentTip: "Encourage your child to say the word naturally, not robot-style.", left: ["duck", "turtle", "sock", "hammer", "ball", "lemon"], right: ["2", "1", "2", "1", "2", "1"] },
      // 13
      { type: "sequence" as const, title: "Order: Fewer to More Syllables (Set A)", instruction: "Write the words in order from fewest syllables to most.", parentTip: "Clap each word first, then arrange them.", items: [ { label: "apple, cat → ___, ___" }, { label: "rabbit, sun → ___, ___" }, { label: "happy, dog → ___, ___" } ] },
      // 14
      { type: "circle-correct" as const, title: "Pick the 1-Syllable Word", instruction: "Circle the word that has only 1 syllable.", parentTip: "A 1-syllable word has just one beat when you clap.", questions: [ { prompt: "Which has 1 syllable?", options: ["apple", "cat", "monkey"] }, { prompt: "Which has 1 syllable?", options: ["table", "garden", "tree"] }, { prompt: "Which has 1 syllable?", options: ["robot", "sun", "water"] } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Tip: The Chin-Drop Trick", instruction: "Here is a great trick! Put your hand under your chin and say a word. Every time your chin drops down, that is one syllable! Try it: ap-ple. Your chin drops twice — 2 syllables! Now try these words.", parentTip: "The chin-drop method is more reliable than clapping for many children.", prompts: [ { text: "monkey: my chin dropped _____ times", type: "lines" as const, lines: 1 }, { text: "cat: my chin dropped _____ times", type: "lines" as const, lines: 1 } ] },
      // 16
      { type: "sorting" as const, title: "Sort: 1 or 2 Syllables? (Set C)", instruction: "Use the chin-drop trick. Sort each word.", columns: ["1 syllable", "2 syllables"], items: [ { label: "house" }, { label: "tiger" }, { label: "rock" }, { label: "mango" }, { label: "fish" }, { label: "carrot" } ] },
      // 17
      { type: "open-response" as const, title: "Clap Your Name", instruction: "Write your name and clap the syllables. Then write the names of people in your family and clap their syllables too.", parentTip: "Names are the most motivating words for children to explore.", prompts: [ { text: "My name: ____________ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "Family member: ____________ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "Family member: ____________ = _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 18
      { type: "circle-correct" as const, title: "How Many Syllables? (Set D)", instruction: "Clap and circle the correct number.", questions: [ { prompt: "button", options: ["1", "2"] }, { prompt: "ship", options: ["1", "2"] }, { prompt: "pillow", options: ["1", "2"] }, { prompt: "drum", options: ["1", "2"] } ] },
      // 19
      { type: "matching" as const, title: "Match Animals to Syllable Counts (Set A)", instruction: "Draw a line from each animal to its syllable count.", left: ["cat", "rabbit", "dog", "turtle"], right: ["2", "1", "2", "1"] },
      // 20 — SPARK
      { type: "open-response" as const, title: "Syllable Spark: Syllables Are Everywhere!", instruction: "Look around the room you are in right now. Find one thing that has 1 syllable and one thing that has 2 syllables. Draw them!", parentTip: "Connecting syllables to real objects makes the concept tangible.", prompts: [ { text: "1-syllable thing I found: ______ (draw it)", type: "box" as const }, { text: "2-syllable thing I found: ______ (draw it)", type: "box" as const } ] },
      // ─── DEVELOPING (21–50): Introduce 3-syllable words ───
      // 21
      { type: "circle-correct" as const, title: "How Many Syllables? (Set E)", instruction: "Clap each word. Circle the correct number.", questions: [ { prompt: "elephant", options: ["1", "2", "3"] }, { prompt: "banana", options: ["1", "2", "3"] }, { prompt: "butterfly", options: ["1", "2", "3"] } ] },
      // 22
      { type: "sorting" as const, title: "Sort: 1, 2 or 3 Syllables? (Set A)", instruction: "Clap out each word. Write it in the correct column.", parentTip: "Say each word at a natural pace. Rushing makes syllable boundaries harder to hear.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "cat" }, { label: "rabbit" }, { label: "elephant" }, { label: "dog" }, { label: "penguin" }, { label: "butterfly" } ] },
      // 23
      { type: "open-response" as const, title: "Clap and Count (Set D)", instruction: "Clap each word. Write the number of syllables.", parentTip: "Let your child clap before writing the number — the physical action makes syllables concrete.", prompts: [ { text: "dinosaur: _____ syllables", type: "lines" as const, lines: 1 }, { text: "umbrella: _____ syllables", type: "lines" as const, lines: 1 }, { text: "hat: _____ syllables", type: "lines" as const, lines: 1 }, { text: "crocodile: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 24
      { type: "matching" as const, title: "Match Words to Syllable Counts (Set D)", instruction: "Draw a line from each word to the number that shows how many syllables it has.", parentTip: "Clap each word together before drawing the line.", left: ["sun", "monkey", "elephant", "dog", "penguin", "crocodile"], right: ["3", "1", "2", "3", "2", "1"] },
      // 25
      { type: "circle-correct" as const, title: "Pick the 3-Syllable Word", instruction: "Circle the word that has 3 syllables.", questions: [ { prompt: "Which has 3 syllables?", options: ["cat", "apple", "elephant"] }, { prompt: "Which has 3 syllables?", options: ["butterfly", "dog", "rabbit"] }, { prompt: "Which has 3 syllables?", options: ["hat", "banana", "turtle"] } ] },
      // 26
      { type: "open-response" as const, title: "Clap and Count (Set E)", instruction: "Clap the syllables. Write the number.", prompts: [ { text: "computer: _____ syllables", type: "lines" as const, lines: 1 }, { text: "cup: _____ syllables", type: "lines" as const, lines: 1 }, { text: "kangaroo: _____ syllables", type: "lines" as const, lines: 1 }, { text: "table: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 27
      { type: "sorting" as const, title: "Sort: 1, 2 or 3 Syllables? (Set B)", instruction: "Clap and sort each word.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "sun" }, { label: "monkey" }, { label: "crocodile" }, { label: "bed" }, { label: "happy" }, { label: "dinosaur" }, { label: "cup" }, { label: "tiger" }, { label: "banana" } ] },
      // 28
      { type: "sequence" as const, title: "Order: Fewest to Most Syllables (Set B)", instruction: "Write the words in order — fewest syllables first, most syllables last.", parentTip: "Clap each word before sorting. Encourage your child to say the order aloud.", items: [ { label: "butterfly, cat, rabbit → ___, ___, ___" }, { label: "elephant, sun, turtle → ___, ___, ___" }, { label: "dog, penguin, crocodile → ___, ___, ___" } ] },
      // 29
      { type: "circle-correct" as const, title: "How Many Syllables? (Set F)", instruction: "Clap each word. Circle the correct number.", parentTip: "Use the chin-drop method if clapping is confusing.", questions: [ { prompt: "pineapple", options: ["2", "3", "4"] }, { prompt: "strawberry", options: ["2", "3", "4"] }, { prompt: "watermelon", options: ["2", "3", "4"] }, { prompt: "grape", options: ["1", "2", "3"] } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Tip: Every Syllable Has a Vowel Sound", instruction: "Here is a secret about syllables: every syllable has one vowel sound! That is why 'cat' has 1 syllable (one vowel sound /a/) and 'rab-bit' has 2 syllables (two vowel sounds /a/ and /i/). Listen for the vowel sounds in these words.", parentTip: "This vowel connection is foundational for later spelling strategies.", prompts: [ { text: "apple: how many vowel sounds? _____", type: "lines" as const, lines: 1 }, { text: "elephant: how many vowel sounds? _____", type: "lines" as const, lines: 1 } ] },
      // 31
      { type: "matching" as const, title: "Match Animals to Syllable Counts (Set B)", instruction: "Draw a line to match each animal to the correct syllable count.", left: ["ant", "giraffe", "kangaroo", "fish", "penguin", "butterfly"], right: ["3", "1", "2", "3", "2", "1"] },
      // 32
      { type: "open-response" as const, title: "Clap and Count (Set F)", instruction: "Clap each word. Write the number of syllables.", prompts: [ { text: "caterpillar: _____ syllables", type: "lines" as const, lines: 1 }, { text: "bird: _____ syllables", type: "lines" as const, lines: 1 }, { text: "together: _____ syllables", type: "lines" as const, lines: 1 }, { text: "flower: _____ syllables", type: "lines" as const, lines: 1 }, { text: "wonderful: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 33
      { type: "circle-correct" as const, title: "Odd One Out: Different Syllable Count", instruction: "Two words have the same number of syllables. Circle the odd one out.", questions: [ { prompt: "cat, dog, apple", options: ["cat", "dog", "apple"] }, { prompt: "rabbit, elephant, turtle", options: ["rabbit", "elephant", "turtle"] }, { prompt: "butterfly, banana, sun", options: ["butterfly", "banana", "sun"] } ] },
      // 34
      { type: "sorting" as const, title: "Sort Food Words by Syllables", instruction: "Clap each food word and sort it.", parentTip: "Familiar food words are motivating and practical.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "rice" }, { label: "apple" }, { label: "banana" }, { label: "bread" }, { label: "mango" }, { label: "broccoli" }, { label: "cheese" }, { label: "carrot" }, { label: "chocolate" } ] },
      // 35
      { type: "open-response" as const, title: "Draw and Clap (Set A)", instruction: "Draw each object. Then clap and write the number of syllables.", parentTip: "Drawing activates visual memory, making the syllable count more memorable.", prompts: [ { text: "Draw a butterfly. Syllables: _____", type: "box" as const }, { text: "Draw a cat. Syllables: _____", type: "box" as const } ] },
      // 36
      { type: "circle-correct" as const, title: "How Many Syllables? (Set G)", instruction: "Clap and circle the correct number.", questions: [ { prompt: "hospital", options: ["2", "3", "4"] }, { prompt: "teacher", options: ["1", "2", "3"] }, { prompt: "book", options: ["1", "2", "3"] }, { prompt: "octopus", options: ["2", "3", "4"] } ] },
      // 37
      { type: "matching" as const, title: "Match Objects to Syllable Counts", instruction: "Draw a line from each object to its syllable count.", left: ["cup", "table", "umbrella", "pen", "bicycle", "window"], right: ["3", "2", "1", "3", "1", "2"] },
      // 38
      { type: "open-response" as const, title: "Syllable Count Challenge (Set A)", instruction: "Write the number of syllables for each word.", parentTip: "If your child struggles, slow the word down: um-brel-la.", prompts: [ { text: "telephone: _____", type: "lines" as const, lines: 1 }, { text: "pen: _____", type: "lines" as const, lines: 1 }, { text: "hamburger: _____", type: "lines" as const, lines: 1 }, { text: "monkey: _____", type: "lines" as const, lines: 1 }, { text: "beautiful: _____", type: "lines" as const, lines: 1 } ] },
      // 39
      { type: "sequence" as const, title: "Order: Fewest to Most Syllables (Set C)", instruction: "Put these words in order from fewest to most syllables.", items: [ { label: "caterpillar, fish, rabbit → ___, ___, ___" }, { label: "ant, elephant, tiger → ___, ___, ___" }, { label: "sun, butterfly, pencil → ___, ___, ___" } ] },
      // 40 — SPARK
      { type: "open-response" as const, title: "Syllable Spark: Syllable Names!", instruction: "Think about the people you know. Whose name has the most syllables? Whose name has the fewest? Write some names and count their syllables.", parentTip: "This personal connection makes syllables feel relevant and fun.", prompts: [ { text: "Name with 1 syllable: ______", type: "lines" as const, lines: 1 }, { text: "Name with 2 syllables: ______", type: "lines" as const, lines: 1 }, { text: "Name with 3 or more syllables: ______", type: "lines" as const, lines: 1 } ] },
      // 41
      { type: "sorting" as const, title: "Sort: 1, 2 or 3 Syllables? (Set C)", instruction: "Clap and sort each word into the correct column.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "hat" }, { label: "kitten" }, { label: "pineapple" }, { label: "tree" }, { label: "window" }, { label: "computer" }, { label: "rock" }, { label: "garden" }, { label: "elephant" } ] },
      // 42
      { type: "circle-correct" as const, title: "True or False: Syllable Counts", instruction: "Is the syllable count correct? Circle TRUE or FALSE.", parentTip: "This builds checking and self-correction skills.", questions: [ { prompt: "dog = 1 syllable", options: ["TRUE", "FALSE"] }, { prompt: "banana = 2 syllables", options: ["TRUE", "FALSE"] }, { prompt: "butterfly = 3 syllables", options: ["TRUE", "FALSE"] }, { prompt: "cat = 2 syllables", options: ["TRUE", "FALSE"] }, { prompt: "umbrella = 3 syllables", options: ["TRUE", "FALSE"] } ] },
      // 43
      { type: "open-response" as const, title: "Think of Your Own (Set A)", instruction: "Write a word that has the number of syllables shown.", prompts: [ { text: "1 syllable: ______", type: "lines" as const, lines: 1 }, { text: "2 syllables: ______", type: "lines" as const, lines: 1 }, { text: "3 syllables: ______", type: "lines" as const, lines: 1 } ] },
      // 44
      { type: "matching" as const, title: "Match Body Parts to Syllable Counts", instruction: "Draw a line from each body part to its syllable count.", parentTip: "Body parts are familiar words that make great syllable practice.", left: ["arm", "elbow", "shoulder", "knee", "stomach", "toe"], right: ["2", "1", "2", "1", "2", "1"] },
      // 45 — TIP
      { type: "open-response" as const, title: "Tip: Clapping Helps Spelling", instruction: "Did you know that counting syllables helps you spell? When you break a long word into syllables, each part is easier to spell. Try it: 'but-ter-fly' is easier to spell than 'butterfly' all at once! Break these words into parts and write each part.", parentTip: "This explicitly connects syllable awareness to spelling strategy.", prompts: [ { text: "el-e-phant → write each part: ___ ___ ___", type: "lines" as const, lines: 1 }, { text: "um-brel-la → write each part: ___ ___ ___", type: "lines" as const, lines: 1 } ] },
      // 46
      { type: "circle-correct" as const, title: "Which Word Has More Syllables?", instruction: "Circle the word with MORE syllables.", questions: [ { prompt: "Which has more syllables?", options: ["cat", "elephant"] }, { prompt: "Which has more syllables?", options: ["banana", "dog"] }, { prompt: "Which has more syllables?", options: ["sun", "butterfly"] }, { prompt: "Which has more syllables?", options: ["umbrella", "hat"] } ] },
      // 47
      { type: "sorting" as const, title: "Sort Colour Words by Syllables", instruction: "Clap each colour word and sort it.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "red" }, { label: "yellow" }, { label: "blue" }, { label: "purple" }, { label: "green" }, { label: "orange" } ] },
      // 48
      { type: "open-response" as const, title: "Clap and Count (Set G)", instruction: "Clap each word. Write the number of syllables.", prompts: [ { text: "helicopter: _____ syllables", type: "lines" as const, lines: 1 }, { text: "ball: _____ syllables", type: "lines" as const, lines: 1 }, { text: "rainbow: _____ syllables", type: "lines" as const, lines: 1 }, { text: "pumpkin: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 49
      { type: "matching" as const, title: "Match Transport Words to Syllables", instruction: "Draw a line from each transport word to its syllable count.", left: ["car", "bicycle", "bus", "aeroplane", "truck", "helicopter"], right: ["3", "1", "4", "1", "3", "1"] },
      // 50
      { type: "open-response" as const, title: "Syllable Sentences (Set A)", instruction: "Write a sentence using a 1-syllable word and a 2-syllable word.", parentTip: "Example: The happy cat. Encourage any combination.", prompts: [ { text: "My sentence: ___________________________", type: "lines" as const, lines: 2 } ] },
      // ─── CONSOLIDATING (51–80): Multi-syllable words, compound words, application ───
      // 51
      { type: "circle-correct" as const, title: "How Many Syllables? (Set H)", instruction: "Clap each word carefully. Circle the correct number.", questions: [ { prompt: "caterpillar", options: ["3", "4", "5"] }, { prompt: "hippopotamus", options: ["3", "4", "5"] }, { prompt: "alligator", options: ["3", "4", "5"] }, { prompt: "dinosaur", options: ["2", "3", "4"] } ] },
      // 52
      { type: "sorting" as const, title: "Sort: 1, 2, 3 or 4 Syllables?", instruction: "Clap each word and sort it into the correct column.", parentTip: "Four-syllable words are challenging. Break them down slowly: cat-er-pil-lar.", columns: ["1 syllable", "2 syllables", "3 syllables", "4 syllables"], items: [ { label: "fish" }, { label: "tiger" }, { label: "elephant" }, { label: "caterpillar" }, { label: "bird" }, { label: "monkey" }, { label: "kangaroo" }, { label: "hippopotamus" } ] },
      // 53
      { type: "open-response" as const, title: "Clap and Count (Set H)", instruction: "Clap each word. Write the number of syllables.", prompts: [ { text: "television: _____ syllables", type: "lines" as const, lines: 1 }, { text: "house: _____ syllables", type: "lines" as const, lines: 1 }, { text: "beautiful: _____ syllables", type: "lines" as const, lines: 1 }, { text: "finger: _____ syllables", type: "lines" as const, lines: 1 }, { text: "watermelon: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 54
      { type: "circle-correct" as const, title: "Compound Word Syllables (Set A)", instruction: "These are compound words — two words joined together. Clap the syllables. Circle the correct number.", parentTip: "Compound words help children see that syllables match word parts.", questions: [ { prompt: "sunshine", options: ["1", "2", "3"] }, { prompt: "rainbow", options: ["1", "2", "3"] }, { prompt: "football", options: ["1", "2", "3"] }, { prompt: "butterfly", options: ["2", "3", "4"] } ] },
      // 55
      { type: "matching" as const, title: "Match Compound Words to Syllable Counts", instruction: "Draw a line to match each compound word to its syllable count.", left: ["cupcake", "playground", "sunflower", "bedroom", "waterfall"], right: ["3", "2", "3", "2", "2"] },
      // 56
      { type: "open-response" as const, title: "Break Compound Words Apart", instruction: "Write the two words hiding inside each compound word. Then count the syllables.", parentTip: "This builds morphological awareness alongside syllable awareness.", prompts: [ { text: "sunshine = ______ + ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "football = ______ + ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "rainbow = ______ + ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "cupcake = ______ + ______ = _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 57
      { type: "sorting" as const, title: "Sort Zoo Animals by Syllables", instruction: "Clap each animal name and sort it.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "bear" }, { label: "lion" }, { label: "gorilla" }, { label: "snake" }, { label: "zebra" }, { label: "pelican" }, { label: "wolf" }, { label: "parrot" }, { label: "flamingo" } ] },
      // 58
      { type: "circle-correct" as const, title: "Same or Different Syllable Count?", instruction: "Do these two words have the SAME number of syllables? Circle YES or NO.", questions: [ { prompt: "cat and dog", options: ["YES", "NO"] }, { prompt: "apple and sun", options: ["YES", "NO"] }, { prompt: "rabbit and tiger", options: ["YES", "NO"] }, { prompt: "elephant and bed", options: ["YES", "NO"] }, { prompt: "banana and umbrella", options: ["YES", "NO"] } ] },
      // 59
      { type: "open-response" as const, title: "Syllable Challenge: Long Words", instruction: "These are longer words. Clap carefully and write the syllable count.", prompts: [ { text: "rhinoceros: _____ syllables", type: "lines" as const, lines: 1 }, { text: "imagination: _____ syllables", type: "lines" as const, lines: 1 }, { text: "supermarket: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 60 — SPARK
      { type: "open-response" as const, title: "Syllable Spark: The Longest Word!", instruction: "What is the longest word you know? Write it down and clap the syllables. Can you think of a word with 4 or more syllables?", parentTip: "Children love finding the longest words. This builds enthusiasm for language.", prompts: [ { text: "My long word: ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "An even longer word: ______ = _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 61
      { type: "home-activity" as const, title: "Syllable Clapping Games", instruction: "Practise counting syllables in everyday words.", parentTip: "Do these during transitions — getting dressed, eating breakfast, going for a walk.", suggestions: [ "Clap the syllables in every person's name in your family.", "Choose 5 items from the pantry and clap their syllables together.", "Walk around the house clapping the syllables in everything you see.", "Listen to a favourite song and clap along to the syllable beats in the lyrics." ] },
      // 62
      { type: "sorting" as const, title: "Sort Fruit Words by Syllables", instruction: "Clap each fruit word and sort it.", parentTip: "Fruit words cover a great range of syllable lengths.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "grape" }, { label: "mango" }, { label: "pineapple" }, { label: "peach" }, { label: "lemon" }, { label: "avocado" }, { label: "plum" }, { label: "cherry" }, { label: "banana" } ] },
      // 63
      { type: "open-response" as const, title: "Syllable Break (Set A)", instruction: "Break each word into syllables using dashes. Example: but-ter-fly.", prompts: [ { text: "elephant: _______________", type: "lines" as const, lines: 1 }, { text: "umbrella: _______________", type: "lines" as const, lines: 1 }, { text: "kangaroo: _______________", type: "lines" as const, lines: 1 }, { text: "crocodile: _______________", type: "lines" as const, lines: 1 } ] },
      // 64
      { type: "circle-correct" as const, title: "Is the Syllable Break Correct?", instruction: "Is the word broken into syllables correctly? Circle YES or NO.", parentTip: "This self-checking skill transfers to spelling.", questions: [ { prompt: "app-le", options: ["YES", "NO"] }, { prompt: "el-eph-ant", options: ["YES", "NO"] }, { prompt: "ba-na-na", options: ["YES", "NO"] }, { prompt: "butt-erfly", options: ["YES", "NO"] }, { prompt: "um-brel-la", options: ["YES", "NO"] } ] },
      // 65
      { type: "matching" as const, title: "Match Words to Syllable Breaks", instruction: "Draw a line from each word to the correct syllable break.", left: ["butterfly", "penguin", "dinosaur", "monkey", "caterpillar"], right: ["di-no-saur", "pen-guin", "cat-er-pil-lar", "mon-key", "but-ter-fly"] },
      // 66
      { type: "open-response" as const, title: "Syllable Break (Set B)", instruction: "Break each word into syllables using dashes.", prompts: [ { text: "hamburger: _______________", type: "lines" as const, lines: 1 }, { text: "telephone: _______________", type: "lines" as const, lines: 1 }, { text: "butterfly: _______________", type: "lines" as const, lines: 1 }, { text: "computer: _______________", type: "lines" as const, lines: 1 }, { text: "pineapple: _______________", type: "lines" as const, lines: 1 } ] },
      // 67
      { type: "sorting" as const, title: "Sort Classroom Words by Syllables", instruction: "Clap each word and sort it.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "desk" }, { label: "pencil" }, { label: "computer" }, { label: "book" }, { label: "ruler" }, { label: "eraser" }, { label: "chair" }, { label: "paper" }, { label: "triangle" } ] },
      // 68
      { type: "open-response" as const, title: "Syllable Poem", instruction: "Write a short poem where the first line has a 1-syllable word, the second line has a 2-syllable word, and the third line has a 3-syllable word.", parentTip: "Poetry connects syllable awareness to creative expression.", prompts: [ { text: "Line 1 (1 syllable): ______", type: "lines" as const, lines: 1 }, { text: "Line 2 (2 syllables): ______", type: "lines" as const, lines: 1 }, { text: "Line 3 (3 syllables): ______", type: "lines" as const, lines: 1 } ] },
      // 69
      { type: "circle-correct" as const, title: "Syllable Count Mix (Set A)", instruction: "Clap each word. Circle the correct syllable count.", questions: [ { prompt: "crocodile", options: ["2", "3", "4"] }, { prompt: "drum", options: ["1", "2", "3"] }, { prompt: "penguin", options: ["1", "2", "3"] }, { prompt: "caterpillar", options: ["3", "4", "5"] }, { prompt: "apple", options: ["1", "2", "3"] } ] },
      // 70
      { type: "open-response" as const, title: "Syllable Riddles (Set A)", instruction: "Solve each riddle. Clap the answer to check!", prompts: [ { text: "I have 2 syllables and I hop. I am a ______.", type: "lines" as const, lines: 1 }, { text: "I have 3 syllables and a trunk. I am an ______.", type: "lines" as const, lines: 1 }, { text: "I have 1 syllable and I swim. I am a ______.", type: "lines" as const, lines: 1 } ] },
      // 71
      { type: "matching" as const, title: "Match Syllable Breaks to Words", instruction: "Draw a line to match each syllable break to the whole word.", left: ["el-e-phant", "pen-guin", "but-ter-fly", "ba-na-na", "um-brel-la"], right: ["butterfly", "umbrella", "banana", "elephant", "penguin"] },
      // 72
      { type: "open-response" as const, title: "Think of Your Own (Set B)", instruction: "Write a word for each syllable count.", parentTip: "This production task is harder than recognition — celebrate all attempts.", prompts: [ { text: "1 syllable: ______", type: "lines" as const, lines: 1 }, { text: "2 syllables: ______", type: "lines" as const, lines: 1 }, { text: "3 syllables: ______", type: "lines" as const, lines: 1 }, { text: "4 syllables: ______", type: "lines" as const, lines: 1 } ] },
      // 73
      { type: "sorting" as const, title: "Sort Days of the Week by Syllables", instruction: "Clap each day and sort it.", parentTip: "Days of the week provide real-world practice.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "Monday" }, { label: "Tuesday" }, { label: "Wednesday" }, { label: "Thursday" }, { label: "Friday" }, { label: "Saturday" }, { label: "Sunday" } ] },
      // 74
      { type: "circle-correct" as const, title: "Syllable Count Mix (Set B)", instruction: "Clap and circle the correct number.", questions: [ { prompt: "Saturday", options: ["2", "3", "4"] }, { prompt: "Wednesday", options: ["1", "2", "3"] }, { prompt: "Monday", options: ["1", "2", "3"] }, { prompt: "January", options: ["3", "4", "5"] } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Tip: Syllables Help You Read Long Words", instruction: "When you see a long word, do not panic! Break it into syllables and read each part. But-ter-fly. Pine-ap-ple. Cat-er-pil-lar. Reading each chunk is much easier than trying to read the whole word at once!", parentTip: "This strategy prepares children for independent reading of unfamiliar words.", prompts: [ { text: "Break this word into parts and read it: hamburger → _______________", type: "lines" as const, lines: 1 }, { text: "Break this word into parts and read it: kangaroo → _______________", type: "lines" as const, lines: 1 } ] },
      // 76
      { type: "open-response" as const, title: "Syllable Count Challenge (Set B)", instruction: "Count the syllables in these tricky words.", prompts: [ { text: "Australia: _____ syllables", type: "lines" as const, lines: 1 }, { text: "vegemite: _____ syllables", type: "lines" as const, lines: 1 }, { text: "kookaburra: _____ syllables", type: "lines" as const, lines: 1 }, { text: "platypus: _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 77
      { type: "sorting" as const, title: "Sort Australian Animals by Syllables", instruction: "Clap each Australian animal and sort it.", parentTip: "Australian animals provide culturally relevant practice.", columns: ["1 syllable", "2 syllables", "3 syllables", "4 syllables"], items: [ { label: "emu" }, { label: "koala" }, { label: "wombat" }, { label: "kookaburra" }, { label: "quoll" }, { label: "dingo" }, { label: "platypus" }, { label: "echidna" } ] },
      // 78
      { type: "circle-correct" as const, title: "Which Has Fewer Syllables?", instruction: "Circle the word with FEWER syllables.", questions: [ { prompt: "Which has fewer syllables?", options: ["elephant", "dog"] }, { prompt: "Which has fewer syllables?", options: ["apple", "banana"] }, { prompt: "Which has fewer syllables?", options: ["caterpillar", "butterfly"] }, { prompt: "Which has fewer syllables?", options: ["hat", "umbrella"] } ] },
      // 79
      { type: "open-response" as const, title: "Syllable Riddles (Set B)", instruction: "Solve each riddle. Write the answer and its syllable count.", prompts: [ { text: "I have 3 syllables, I am yellow, and you peel me. I am a ______.", type: "lines" as const, lines: 1 }, { text: "I have 2 syllables and I bark. I am a ______.", type: "lines" as const, lines: 1 }, { text: "I have 4 syllables, and I live in water with big teeth. I am an ______.", type: "lines" as const, lines: 1 } ] },
      // 80 — SPARK
      { type: "open-response" as const, title: "Syllable Spark: Syllable Walk!", instruction: "Go for a walk around your home or garden. Write down 5 things you see and count the syllables in each word. Which object had the most syllables?", parentTip: "This gets children moving and connecting language to their environment.", prompts: [ { text: "1. ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "2. ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "3. ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "4. ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "5. ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "The word with the most syllables was: ______", type: "lines" as const, lines: 1 } ] },
      // ─── EXTENDING (81–100): 4+ syllable words, creative tasks, assessment ───
      // 81
      { type: "sorting" as const, title: "Grand Syllable Sort: 1 to 4+ Syllables", instruction: "Sort each word by its syllable count.", columns: ["1", "2", "3", "4+"], items: [ { label: "cat" }, { label: "apple" }, { label: "elephant" }, { label: "caterpillar" }, { label: "sun" }, { label: "monkey" }, { label: "dinosaur" }, { label: "hippopotamus" }, { label: "dog" }, { label: "rabbit" }, { label: "banana" }, { label: "television" } ] },
      // 82
      { type: "open-response" as const, title: "Syllable Break (Set C)", instruction: "Break each word into syllables using dashes.", prompts: [ { text: "hippopotamus: _______________", type: "lines" as const, lines: 1 }, { text: "television: _______________", type: "lines" as const, lines: 1 }, { text: "supermarket: _______________", type: "lines" as const, lines: 1 }, { text: "caterpillar: _______________", type: "lines" as const, lines: 1 } ] },
      // 83
      { type: "circle-correct" as const, title: "Grand Syllable Quiz (Set A)", instruction: "Clap each word. Circle the correct syllable count.", questions: [ { prompt: "hippopotamus", options: ["4", "5", "6"] }, { prompt: "television", options: ["3", "4", "5"] }, { prompt: "alligator", options: ["3", "4", "5"] }, { prompt: "refrigerator", options: ["4", "5", "6"] } ] },
      // 84
      { type: "open-response" as const, title: "Think of Your Own (Set C)", instruction: "Write words with the exact syllable count shown.", prompts: [ { text: "Exactly 1 syllable: ______", type: "lines" as const, lines: 1 }, { text: "Exactly 2 syllables: ______", type: "lines" as const, lines: 1 }, { text: "Exactly 3 syllables: ______", type: "lines" as const, lines: 1 }, { text: "Exactly 4 syllables: ______", type: "lines" as const, lines: 1 }, { text: "Exactly 5 syllables (challenge!): ______", type: "lines" as const, lines: 1 } ] },
      // 85
      { type: "matching" as const, title: "Grand Match: Words to Syllable Counts", instruction: "Draw a line to match each word to its syllable count.", left: ["cat", "tiger", "elephant", "caterpillar", "hippopotamus"], right: ["5", "3", "4", "2", "1"] },
      // 86
      { type: "open-response" as const, title: "Syllable Story", instruction: "Write a short story (3 to 4 sentences). After each sentence, write how many syllables are in the longest word.", parentTip: "This integrates syllable counting into meaningful writing.", prompts: [ { text: "My story:", type: "lines" as const, lines: 4 }, { text: "The longest word in my story: ______ = _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 87
      { type: "circle-correct" as const, title: "Syllable Count Mix (Set C)", instruction: "Clap and circle the correct number.", questions: [ { prompt: "interesting", options: ["3", "4", "5"] }, { prompt: "cucumber", options: ["2", "3", "4"] }, { prompt: "spaghetti", options: ["2", "3", "4"] }, { prompt: "trampoline", options: ["2", "3", "4"] } ] },
      // 88
      { type: "sorting" as const, title: "Sort Musical Instruments by Syllables", instruction: "Clap each instrument name and sort it.", columns: ["1 syllable", "2 syllables", "3 syllables"], items: [ { label: "drum" }, { label: "guitar" }, { label: "triangle" }, { label: "flute" }, { label: "trumpet" }, { label: "recorder" }, { label: "harp" }, { label: "piano" }, { label: "xylophone" } ] },
      // 89
      { type: "open-response" as const, title: "Syllable Counting: My Favourite Things", instruction: "Write your favourite food, animal, game and place. Count the syllables in each.", prompts: [ { text: "Favourite food: ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "Favourite animal: ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "Favourite game: ______ = _____ syllables", type: "lines" as const, lines: 1 }, { text: "Favourite place: ______ = _____ syllables", type: "lines" as const, lines: 1 } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Tip: You Are a Syllable Expert!", instruction: "You can now count syllables in words of all lengths. Remember: every syllable has one vowel sound. You can use clapping, chin-drops, or just listening carefully. These skills will help you read, spell and write for years to come!", parentTip: "Affirm your child's growth. They have moved from 1-syllable words to multi-syllable mastery.", prompts: [ { text: "I am good at counting syllables because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 91
      { type: "open-response" as const, title: "Syllable Challenge: Write 15 Words", instruction: "Write 15 words — at least 3 with 1 syllable, at least 3 with 2 syllables, at least 3 with 3 syllables, and at least 1 with 4 or more syllables. Count the syllables for each.", prompts: [ { text: "My 15 words:", type: "lines" as const, lines: 5 } ] },
      // 92
      { type: "circle-correct" as const, title: "Grand Syllable Quiz (Set B)", instruction: "Circle the correct syllable count for each word.", questions: [ { prompt: "kookaburra", options: ["3", "4", "5"] }, { prompt: "vegemite", options: ["2", "3", "4"] }, { prompt: "Australia", options: ["3", "4", "5"] }, { prompt: "platypus", options: ["2", "3", "4"] }, { prompt: "boomerang", options: ["2", "3", "4"] } ] },
      // 93
      { type: "sorting" as const, title: "Grand Sort: Mixed Words", instruction: "Sort all of these words by syllable count.", columns: ["1", "2", "3", "4+"], items: [ { label: "hat" }, { label: "pencil" }, { label: "umbrella" }, { label: "caterpillar" }, { label: "tree" }, { label: "garden" }, { label: "kangaroo" }, { label: "hippopotamus" }, { label: "cup" }, { label: "tiger" } ] },
      // 94
      { type: "open-response" as const, title: "Make Up a Silly Word", instruction: "Invent a silly word with 3 syllables and another with 4 syllables. Write what they might mean!", parentTip: "Invented words show true syllable mastery — the child must construct syllable patterns.", prompts: [ { text: "My 3-syllable silly word: ______. It means: _______________", type: "lines" as const, lines: 1 }, { text: "My 4-syllable silly word: ______. It means: _______________", type: "lines" as const, lines: 1 } ] },
      // 95
      { type: "matching" as const, title: "Match Syllable Riddles to Answers", instruction: "Draw a line to match each riddle to the correct animal.", left: ["I have 3 syllables and a long neck.", "I have 1 syllable and I swim.", "I have 4 syllables and I live in water with big teeth.", "I have 2 syllables and I hop."], right: ["rabbit", "fish", "giraffe", "alligator"] },
      // 96
      { type: "open-response" as const, title: "Syllable Assessment: How Many?", instruction: "Write the syllable count for each word. Try to do it without clapping!", parentTip: "Not needing to clap shows internalised syllable awareness.", prompts: [ { text: "cat: _____", type: "lines" as const, lines: 1 }, { text: "monkey: _____", type: "lines" as const, lines: 1 }, { text: "elephant: _____", type: "lines" as const, lines: 1 }, { text: "caterpillar: _____", type: "lines" as const, lines: 1 }, { text: "hippopotamus: _____", type: "lines" as const, lines: 1 } ] },
      // 97
      { type: "open-response" as const, title: "Syllable Break Challenge", instruction: "Break each word into syllables using dashes. These are the trickiest words yet!", prompts: [ { text: "rhinoceros: _______________", type: "lines" as const, lines: 1 }, { text: "refrigerator: _______________", type: "lines" as const, lines: 1 }, { text: "imagination: _______________", type: "lines" as const, lines: 1 } ] },
      // 98
      { type: "home-activity" as const, title: "Syllable Champion Challenge", instruction: "You are a syllable champion! Try these activities to keep practising.", suggestions: [ "Play Syllable Snap: say a word and clap. The first person to call the correct syllable count wins!", "Read a book together and find the longest word on each page. Count its syllables.", "Make a syllable chart for the items on your dinner plate.", "Teach someone else how to count syllables using the chin-drop trick." ] },
      // 99
      { type: "open-response" as const, title: "Syllable Self-Assessment", instruction: "Read each word aloud and write its syllable count. Then tick whether you got it right.", prompts: [ { text: "sun: ___  apple: ___  elephant: ___  caterpillar: ___", type: "lines" as const, lines: 1 }, { text: "banana: ___  dog: ___  butterfly: ___  hippopotamus: ___", type: "lines" as const, lines: 1 }, { text: "I got _____ out of 8 correct!", type: "lines" as const, lines: 1 } ] },
      // 100 — SPARK
      { type: "open-response" as const, title: "Syllable Spark: Words Are Music!", instruction: "Syllables are the beats of language — just like music! Write your favourite word and clap its syllables like a drumbeat. Can you make a rhythm by saying three words with different syllable counts?", parentTip: "This final spark connects syllable awareness to rhythm, music and the joy of language.", prompts: [ { text: "My favourite word: ______ (_____ syllables)", type: "lines" as const, lines: 1 }, { text: "My three-word rhythm: ______, ______, ______", type: "lines" as const, lines: 1 }, { text: "Draw yourself clapping syllables:", type: "box" as const } ] },
    ],
  },

  // ── WS 6: Vocabulary ──────────────────────────────────────
  {
    slug: "describing-my-world",
    title: "Describing My World",
    strand: "Language",
    description:
      "Build vocabulary by naming and describing familiar objects using colour, size and shape — linking spoken language to written labels.",
    learningGuide: {
      concept:
        "Vocabulary is the foundation of all language learning. At Foundation level, children extend their word knowledge by describing familiar things using attributes: colour, size, shape, and purpose. Strong vocabulary supports both comprehension and writing.",
      activation:
        "Hold up a common object (e.g. a red ball) and ask: Can you tell me about this? What colour is it? Is it big or small? What do you use it for? Model a full description: It is a small, red, round ball. We use it to play.",
      check:
        "Point to an object and ask: Can you describe this using at least two describing words? The child should use adjectives (colour, size, shape, texture) without prompting.",
    },
    lesson: {
      title: "Words That Describe",
      objective:
        "Use describing words (adjectives) to name and describe familiar objects, and write simple labels.",
      materials: [
        "5 to 6 objects from around the home (e.g. pencil, cup, book, apple, sock, ball)",
        "Pencil and crayons",
        "Plain paper for drawing",
      ],
      intro: {
        title: "The Describing Game",
        script:
          "I am thinking of something in this room. I am going to describe it and you have to guess what it is. Ready? It is big, flat, and brown. You read it. What is it? Yes — a book! Now it is your turn. Think of something in the room and describe it using colours, sizes and shapes. Do not say what it is — just describe it!",
        action:
          "Take turns describing and guessing objects. For your turn, model rich descriptions: 'I am thinking of something small, round, red, and smooth. You can eat it. What is it?' (an apple). Encourage your child to use as many describing words as possible: colour, size, texture, shape, purpose. If they only give one word, prompt: 'What colour is it? Is it big or small? What does it feel like?' Aim for 4 to 5 rounds of guessing.",
      },
      mainActivity: {
        title: "Draw and Label",
        script:
          "Now let us be writers! You are going to draw one of these objects and then write labels — the word AND a describing word. So if you draw the cup, you might write blue cup or small cup. Here is my example: I will draw this pencil. It is long, yellow, and thin. I will write: long yellow pencil. Now your turn — let us see how many describing words you can use!",
        action:
          "Your child draws 3 objects from the selection and labels them with at least one noun and one adjective. For each drawing, ask three questions before they write: 'What colour is it? Is it big or small? What shape is it?' Then help them write labels. Accept invented spelling — if they write 'yelo' for yellow, say: 'I can read that — yelo, yellow! Great writing.' Only model the correct spelling if they ask for it.",
      },
      wrapUp: {
        title: "Describing Word Collection",
        script:
          "What a wonderful word collection we have built today! Let us write all our favourite describing words in a list — we could call it our word wall. I will write the words you say: big, small, red, round, soft... Which was your favourite describing word today?",
        action:
          "Write a family word wall together on a large piece of paper. Organise words into groups: colour words, size words, shape words, feeling words. Stick it on the fridge as a reference. Add to it each day.",
      },
      parentTip:
        "Encourage your child to use describing words in everyday speech. When they use a vague word like 'thing', gently ask: 'Can you describe it more so I know exactly which one?' This builds precision in language. Common misconception: children at this age often confuse describing words (adjectives) with action words (verbs) — they might say 'running' is a describing word because it tells you about a person. Gently clarify: 'Running is what they DO. Fast is what they ARE LIKE. Fast is the describing word.' Also, children sometimes think colours are the only describing words. Expand their thinking: 'What about soft? Bumpy? Tiny? Loud? Those are all describing words too!' Your child is ready for the worksheet when they can: (1) describe a familiar object using at least two different adjectives without prompting, (2) understand that describing words tell us what something looks like, feels like, or sounds like, and (3) label a drawing with at least one adjective and one noun.",
      extension:
        "Make a describing book: fold 5 pages together, draw one object per page, and write a full describing sentence underneath. Read it together as a finished book. This aligns with AC V9 Foundation — using words and phrases in spoken and written communication.",
      resources: [
        {
          title: "ABC Education — Vocabulary",
          url: "https://www.abc.net.au/education/learn-english/",
          description:
            "Vocabulary-building resources and video read-alouds for Foundation students.",
        },
        {
          title: "Khan Academy Kids — Language Arts",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Vocabulary and describing activities for early learners.",
        },
        {
          title: "Starfall — Words and Reading",
          url: "https://www.starfall.com/",
          description:
            "Word recognition and vocabulary activities for Foundation-age children.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Colour words, simple labelling ───
      // 1
      { type: "circle-correct" as const, title: "What Colour Is It? (Set A)", instruction: "Circle the colour word that matches each object.", parentTip: "Point to the object and ask: What colour do you see?", questions: [ { prompt: "A banana is...", options: ["red", "yellow", "blue"] }, { prompt: "The sky is...", options: ["green", "yellow", "blue"] }, { prompt: "Grass is...", options: ["green", "red", "blue"] } ] },
      // 2
      { type: "circle-correct" as const, title: "What Colour Is It? (Set B)", instruction: "Circle the correct colour for each object.", questions: [ { prompt: "A strawberry is...", options: ["red", "yellow", "green"] }, { prompt: "Snow is...", options: ["black", "white", "purple"] }, { prompt: "An orange is...", options: ["blue", "green", "orange"] } ] },
      // 3
      { type: "matching" as const, title: "Match Colours to Objects (Set A)", instruction: "Draw a line from each colour to the object that matches.", parentTip: "Say the colour and object together: red apple.", left: ["red", "yellow", "blue"], right: ["sun", "sky", "apple"] },
      // 4
      { type: "open-response" as const, title: "Colour Labels (Set A)", instruction: "Write the colour of each object.", parentTip: "Accept invented spelling. The goal is matching colours to objects.", prompts: [ { text: "A leaf is ______", type: "lines" as const, lines: 1 }, { text: "The sun is ______", type: "lines" as const, lines: 1 }, { text: "A fire truck is ______", type: "lines" as const, lines: 1 } ] },
      // 5
      { type: "sorting" as const, title: "Sort by Colour (Set A)", instruction: "Sort each object into the correct colour column.", parentTip: "Talk about each object together: What colour is a banana? Yellow!", columns: ["Red", "Yellow", "Green"], items: [ { label: "apple" }, { label: "banana" }, { label: "leaf" }, { label: "strawberry" }, { label: "sun" }, { label: "frog" } ] },
      // 6
      { type: "circle-correct" as const, title: "What Colour Is It? (Set C)", instruction: "Circle the correct colour.", questions: [ { prompt: "A pig is...", options: ["pink", "blue", "green"] }, { prompt: "Chocolate is...", options: ["white", "pink", "brown"] }, { prompt: "A lemon is...", options: ["yellow", "blue", "red"] }, { prompt: "A cloud is...", options: ["brown", "black", "white"] } ] },
      // 7
      { type: "matching" as const, title: "Match Colours to Objects (Set B)", instruction: "Draw a line from each colour to the matching object.", left: ["brown", "white", "pink", "orange"], right: ["flamingo", "carrot", "cloud", "bear"] },
      // 8
      { type: "open-response" as const, title: "Draw and Label Colours (Set A)", instruction: "Draw each object. Write the colour word underneath.", parentTip: "Drawing first helps children connect the colour word to the object.", prompts: [ { text: "Draw a red apple:", type: "box" as const }, { text: "Draw a blue sky:", type: "box" as const } ] },
      // 9
      { type: "circle-correct" as const, title: "Big or Small? (Set A)", instruction: "Circle the correct size word for each object.", parentTip: "Size words are the next step after colours.", questions: [ { prompt: "An elephant is...", options: ["big", "small"] }, { prompt: "An ant is...", options: ["big", "small"] }, { prompt: "A house is...", options: ["big", "small"] }, { prompt: "A button is...", options: ["big", "small"] } ] },
      // 10
      { type: "sorting" as const, title: "Sort: Big or Small?", instruction: "Sort each object into the correct column.", columns: ["Big", "Small"], items: [ { label: "elephant" }, { label: "ant" }, { label: "mountain" }, { label: "seed" }, { label: "whale" }, { label: "ladybug" } ] },
      // 11
      { type: "open-response" as const, title: "Colour Labels (Set B)", instruction: "Write the colour of each object.", prompts: [ { text: "A grape is ______", type: "lines" as const, lines: 1 }, { text: "Milk is ______", type: "lines" as const, lines: 1 }, { text: "A carrot is ______", type: "lines" as const, lines: 1 }, { text: "The night sky is ______", type: "lines" as const, lines: 1 } ] },
      // 12
      { type: "matching" as const, title: "Match Size Words to Objects", instruction: "Draw a line from each size word to the object it best describes.", parentTip: "Discuss: Why is 'tiny' a better word for an ant than 'big'?", left: ["tiny", "huge", "tall", "short"], right: ["giraffe", "ant", "mouse", "elephant"] },
      // 13
      { type: "circle-correct" as const, title: "Choose the Best Describing Word (Set A)", instruction: "Circle the describing word that best fits each object.", questions: [ { prompt: "The elephant is very...", options: ["tiny", "huge", "pointy"] }, { prompt: "The sun is very...", options: ["cold", "wet", "bright"] }, { prompt: "The ice cream is...", options: ["hot", "cold", "heavy"] } ] },
      // 14
      { type: "open-response" as const, title: "Draw and Label (Set A)", instruction: "Draw each object. Write its name AND one describing word (colour, size or shape).", parentTip: "Encourage your child to say the describing sentence aloud before writing.", prompts: [ { text: "Draw: a cup. Write a label with a describing word:", type: "box" as const }, { text: "Draw: a book. Write a label with a describing word:", type: "box" as const } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Tip: Describing Words Tell Us More", instruction: "Describing words (we call them adjectives) tell us more about something. Instead of just saying 'ball', we can say 'red ball' or 'big ball' or 'bouncy ball'. The describing word paints a picture in the listener's mind!", parentTip: "Using the word 'adjective' gently introduces grammar vocabulary.", prompts: [ { text: "Instead of 'dog', I can say: ______ dog", type: "lines" as const, lines: 1 }, { text: "Instead of 'cat', I can say: ______ cat", type: "lines" as const, lines: 1 } ] },
      // 16
      { type: "circle-correct" as const, title: "Choose the Best Describing Word (Set B)", instruction: "Circle the word that best describes each object.", questions: [ { prompt: "The rock is...", options: ["soft", "fluffy", "hard"] }, { prompt: "The feather is...", options: ["heavy", "light", "loud"] }, { prompt: "The fire is...", options: ["cold", "hot", "quiet"] }, { prompt: "The baby is...", options: ["old", "big", "small"] } ] },
      // 17
      { type: "sorting" as const, title: "Sort the Describing Words (Set A)", instruction: "Sort each describing word into the correct column based on what it describes.", parentTip: "Talk through each word together: Is 'fluffy' a colour, a size, or a texture?", columns: ["Colour", "Size", "Texture"], items: [ { label: "red" }, { label: "big" }, { label: "rough" }, { label: "blue" }, { label: "tiny" }, { label: "smooth" }, { label: "yellow" }, { label: "huge" }, { label: "fluffy" } ] },
      // 18
      { type: "matching" as const, title: "Match Describing Words to Objects (Set A)", instruction: "Draw a line to match each describing word to the object it best describes.", parentTip: "Discuss why the match makes sense.", left: ["fluffy", "sharp", "sour", "heavy", "tiny"], right: ["lemon", "rock", "kitten", "ant", "knife"] },
      // 19
      { type: "open-response" as const, title: "Describe It! (Set A)", instruction: "Choose an object from around your home. Draw it and write three describing words.", parentTip: "Prompt: What colour is it? How big is it? What does it feel like?", prompts: [ { text: "Draw your object here:", type: "box" as const }, { text: "Write three describing words:", type: "lines" as const, lines: 2 } ] },
      // 20 — SPARK
      { type: "open-response" as const, title: "Vocabulary Spark: Describing You!", instruction: "You are amazing and unique! Can you describe yourself using colour, size and texture words? What colour is your hair? Are your hands big or small?", parentTip: "Self-description builds identity and vocabulary simultaneously.", prompts: [ { text: "My hair is ______", type: "lines" as const, lines: 1 }, { text: "My eyes are ______", type: "lines" as const, lines: 1 }, { text: "I am ______ (tall/short/big/small)", type: "lines" as const, lines: 1 } ] },
      // ─── DEVELOPING (21–50): Shape, texture, multi-attribute descriptions ───
      // 21
      { type: "circle-correct" as const, title: "What Shape Is It? (Set A)", instruction: "Circle the shape word that best describes each object.", questions: [ { prompt: "A clock is...", options: ["round", "square", "triangle"] }, { prompt: "A door is...", options: ["round", "rectangle", "triangle"] }, { prompt: "A slice of pizza is...", options: ["round", "square", "triangle"] } ] },
      // 22
      { type: "sorting" as const, title: "Sort by Shape", instruction: "Sort each object by its shape.", columns: ["Round", "Square/Rectangle", "Triangle"], items: [ { label: "ball" }, { label: "window" }, { label: "sandwich (cut corner-to-corner)" }, { label: "wheel" }, { label: "book" }, { label: "roof" } ] },
      // 23
      { type: "open-response" as const, title: "Describe with Two Words (Set A)", instruction: "Write TWO describing words for each object. Example: a big, red apple.", parentTip: "Two describing words doubles the precision. Praise any combination.", prompts: [ { text: "A ______, ______ dog", type: "lines" as const, lines: 1 }, { text: "A ______, ______ ball", type: "lines" as const, lines: 1 }, { text: "A ______, ______ flower", type: "lines" as const, lines: 1 } ] },
      // 24
      { type: "circle-correct" as const, title: "How Does It Feel? (Set A)", instruction: "Circle the texture word that best describes each object.", parentTip: "Encourage your child to imagine touching each object.", questions: [ { prompt: "A teddy bear feels...", options: ["rough", "soft", "wet"] }, { prompt: "Sandpaper feels...", options: ["smooth", "rough", "cold"] }, { prompt: "Ice feels...", options: ["hot", "dry", "cold"] }, { prompt: "A silk ribbon feels...", options: ["rough", "smooth", "hard"] } ] },
      // 25
      { type: "matching" as const, title: "Match Textures to Objects", instruction: "Draw a line from each texture word to the object it best describes.", left: ["bumpy", "sticky", "wet", "dry", "slippery"], right: ["soap", "rain", "honey", "sand", "rock"] },
      // 26
      { type: "sorting" as const, title: "Sort Describing Words (Set B)", instruction: "Sort each word into the correct column.", columns: ["Colour", "Size", "Shape", "Texture"], items: [ { label: "green" }, { label: "tall" }, { label: "round" }, { label: "bumpy" }, { label: "purple" }, { label: "small" }, { label: "flat" }, { label: "smooth" } ] },
      // 27
      { type: "open-response" as const, title: "Describe with Two Words (Set B)", instruction: "Write TWO describing words for each item.", prompts: [ { text: "A ______, ______ house", type: "lines" as const, lines: 1 }, { text: "A ______, ______ tree", type: "lines" as const, lines: 1 }, { text: "A ______, ______ cake", type: "lines" as const, lines: 1 }, { text: "A ______, ______ car", type: "lines" as const, lines: 1 } ] },
      // 28
      { type: "circle-correct" as const, title: "Choose the Best Two Words", instruction: "Which TWO describing words best describe the object?", questions: [ { prompt: "A lemon is...", options: ["yellow and sour", "blue and sweet", "red and soft"] }, { prompt: "A cloud is...", options: ["hard and brown", "white and fluffy", "green and bumpy"] }, { prompt: "A rock is...", options: ["soft and light", "hard and heavy", "wet and fluffy"] } ] },
      // 29
      { type: "matching" as const, title: "Match Two-Word Descriptions to Objects", instruction: "Draw a line from each description to the correct object.", left: ["big and grey", "small and red", "long and green", "round and orange"], right: ["snake", "elephant", "orange", "ladybug"] },
      // 30 — TIP
      { type: "open-response" as const, title: "Tip: Use Your Five Senses!", instruction: "Good describers use their five senses! What can you SEE? (colour, size, shape) What can you FEEL? (texture) What can you HEAR? (sound) What can you SMELL? What can you TASTE? Use all your senses to describe things!", parentTip: "The five senses framework gives children a structure for rich descriptions.", prompts: [ { text: "Describe an apple: I see ______. I feel ______. I taste ______.", type: "lines" as const, lines: 2 } ] },
      // 31
      { type: "open-response" as const, title: "Five Senses Description (Set A)", instruction: "Use your senses to describe each object.", prompts: [ { text: "A banana: I see ______. I feel ______. I taste ______.", type: "lines" as const, lines: 2 }, { text: "Rain: I see ______. I hear ______. I feel ______.", type: "lines" as const, lines: 2 } ] },
      // 32
      { type: "sorting" as const, title: "Sort: Which Sense?", instruction: "Sort each describing word by which sense you use to notice it.", columns: ["See", "Feel", "Hear"], items: [ { label: "red" }, { label: "soft" }, { label: "loud" }, { label: "round" }, { label: "bumpy" }, { label: "quiet" }, { label: "big" }, { label: "cold" }, { label: "noisy" } ] },
      // 33
      { type: "circle-correct" as const, title: "What Sound Does It Make?", instruction: "Circle the word that best describes the sound.", questions: [ { prompt: "A drum is...", options: ["quiet", "loud", "soft"] }, { prompt: "A whisper is...", options: ["loud", "quiet", "bright"] }, { prompt: "A bell is...", options: ["heavy", "dark", "ringing"] }, { prompt: "Rain is...", options: ["dry", "pattering", "silent"] } ] },
      // 34
      { type: "open-response" as const, title: "Draw and Describe (Set A)", instruction: "Draw each object. Write three describing words for each.", parentTip: "Encourage using at least one word from a different sense each time.", prompts: [ { text: "Draw: a cat. Describing words:", type: "box" as const }, { text: "Draw: the sun. Describing words:", type: "box" as const } ] },
      // 35
      { type: "matching" as const, title: "Match Sounds to Objects", instruction: "Draw a line to match each sound word to the object that makes that sound.", left: ["buzzing", "barking", "splashing", "crunching", "ticking"], right: ["clock", "bee", "apple", "water", "dog"] },
      // 36
      { type: "open-response" as const, title: "Describe with Three Words", instruction: "Write THREE describing words for each object. Try to use colour, size AND texture.", parentTip: "Three-word descriptions build sentence complexity.", prompts: [ { text: "A ______, ______, ______ teddy bear", type: "lines" as const, lines: 1 }, { text: "A ______, ______, ______ watermelon", type: "lines" as const, lines: 1 }, { text: "A ______, ______, ______ blanket", type: "lines" as const, lines: 1 } ] },
      // 37
      { type: "circle-correct" as const, title: "Which Word Does NOT Describe It?", instruction: "Circle the word that does NOT describe the object.", parentTip: "Finding the word that does not fit requires careful thinking.", questions: [ { prompt: "Sun: bright, warm, cold", options: ["bright", "warm", "cold"] }, { prompt: "Snow: white, cold, dry", options: ["white", "cold", "dry"] }, { prompt: "Kitten: soft, furry, hard", options: ["soft", "furry", "hard"] } ] },
      // 38
      { type: "sorting" as const, title: "Sort: Happy or Sad Words?", instruction: "Some describing words tell us about feelings. Sort these feeling words.", columns: ["Happy Words", "Sad Words"], items: [ { label: "joyful" }, { label: "upset" }, { label: "cheerful" }, { label: "gloomy" }, { label: "excited" }, { label: "lonely" }, { label: "proud" }, { label: "scared" } ] },
      // 39
      { type: "open-response" as const, title: "Describe a Feeling", instruction: "Write a describing word for each feeling face.", prompts: [ { text: "A smiling face looks: ______", type: "lines" as const, lines: 1 }, { text: "A crying face looks: ______", type: "lines" as const, lines: 1 }, { text: "A surprised face looks: ______", type: "lines" as const, lines: 1 }, { text: "An angry face looks: ______", type: "lines" as const, lines: 1 } ] },
      // 40 — SPARK
      { type: "open-response" as const, title: "Vocabulary Spark: The Describing Game!", instruction: "Play the describing game with someone at home! Think of something in the room. Describe it using three describing words. Can they guess what it is? Write your clues here.", parentTip: "This game practises descriptive language in a fun, social context.", prompts: [ { text: "My three clues: ______, ______, ______", type: "lines" as const, lines: 1 }, { text: "The object was: ______", type: "lines" as const, lines: 1 }, { text: "Did they guess it? ______", type: "lines" as const, lines: 1 } ] },
      // 41
      { type: "circle-correct" as const, title: "Opposite Describing Words (Set A)", instruction: "Circle the opposite of each describing word.", questions: [ { prompt: "big", options: ["huge", "small", "tall"] }, { prompt: "hot", options: ["warm", "cold", "bright"] }, { prompt: "soft", options: ["hard", "fluffy", "smooth"] }, { prompt: "loud", options: ["noisy", "big", "quiet"] } ] },
      // 42
      { type: "matching" as const, title: "Match Opposites (Set A)", instruction: "Draw a line to match each describing word to its opposite.", parentTip: "Opposites are powerful vocabulary builders.", left: ["big", "hot", "rough", "light", "fast"], right: ["slow", "small", "heavy", "cold", "smooth"] },
      // 43
      { type: "open-response" as const, title: "Write the Opposite (Set A)", instruction: "Write the opposite describing word.", prompts: [ { text: "tall → ______", type: "lines" as const, lines: 1 }, { text: "wet → ______", type: "lines" as const, lines: 1 }, { text: "old → ______", type: "lines" as const, lines: 1 }, { text: "happy → ______", type: "lines" as const, lines: 1 }, { text: "dark → ______", type: "lines" as const, lines: 1 } ] },
      // 44
      { type: "sorting" as const, title: "Sort: Opposites", instruction: "Match each word to the correct opposite column.", columns: ["Big things", "Small things"], items: [ { label: "elephant" }, { label: "ant" }, { label: "mountain" }, { label: "seed" }, { label: "house" }, { label: "ladybug" }, { label: "whale" }, { label: "button" } ] },
      // 45 — TIP
      { type: "open-response" as const, title: "Tip: Describing Words Make Your Writing Interesting!", instruction: "Compare these two sentences: 'I have a dog.' vs 'I have a big, fluffy, brown dog.' Which one paints a better picture? The more describing words you use, the more your reader can see, hear and feel what you mean!", parentTip: "This explicitly connects vocabulary to writing quality.", prompts: [ { text: "Make this sentence better: I have a cat. → I have a ______, ______ cat.", type: "lines" as const, lines: 1 }, { text: "Make this sentence better: I ate food. → I ate ______, ______ food.", type: "lines" as const, lines: 1 } ] },
      // 46
      { type: "open-response" as const, title: "Describing Sentences (Set A)", instruction: "Write a sentence about each object using at least TWO describing words.", parentTip: "Model: The big, brown dog is sleeping.", prompts: [ { text: "The ______, ______ cat...", type: "lines" as const, lines: 1 }, { text: "The ______, ______ tree...", type: "lines" as const, lines: 1 }, { text: "The ______, ______ ball...", type: "lines" as const, lines: 1 } ] },
      // 47
      { type: "circle-correct" as const, title: "Which Description Is Better?", instruction: "Circle the sentence that uses better describing words.", questions: [ { prompt: "Which is better?", options: ["I see a thing.", "I see a big, red ball."] }, { prompt: "Which is better?", options: ["The fluffy, white cloud floats.", "The cloud is there."] }, { prompt: "Which is better?", options: ["Food is on the plate.", "Crunchy, orange carrots are on the plate."] } ] },
      // 48
      { type: "matching" as const, title: "Match Descriptions to Objects (Set A)", instruction: "Draw a line from each description to the correct object.", left: ["small, red, sweet", "big, grey, wrinkly", "long, yellow, curved", "round, orange, bumpy"], right: ["banana", "strawberry", "orange", "elephant"] },
      // 49
      { type: "open-response" as const, title: "Five Senses Description (Set B)", instruction: "Describe each object using your senses.", prompts: [ { text: "Popcorn: I see ______. I hear ______. I taste ______.", type: "lines" as const, lines: 2 }, { text: "A puppy: I see ______. I hear ______. I feel ______.", type: "lines" as const, lines: 2 } ] },
      // 50
      { type: "sequence" as const, title: "Order Describing Words by Size", instruction: "Put these size words in order from smallest to biggest.", parentTip: "Size ordering builds comparative vocabulary.", items: [ { label: "tiny, small, big, huge → ___, ___, ___, ___" }, { label: "little, medium, large, enormous → ___, ___, ___, ___" } ] },
      // ─── CONSOLIDATING (51–80): Extended descriptions, comparisons, real-world tasks ───
      // 51
      { type: "open-response" as const, title: "Describe Two Objects (Set A)", instruction: "Draw two objects and describe each one. How are they different?", parentTip: "Comparing builds critical thinking and precise vocabulary.", prompts: [ { text: "Object 1 — draw and describe:", type: "box" as const }, { text: "Object 2 — draw and describe:", type: "box" as const }, { text: "They are different because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 52
      { type: "circle-correct" as const, title: "Compare: Which Word Fits?", instruction: "Circle the word that correctly compares.", questions: [ { prompt: "An elephant is _____ than a cat.", options: ["smaller", "bigger", "shorter"] }, { prompt: "Ice is _____ than fire.", options: ["hotter", "softer", "colder"] }, { prompt: "A cheetah is _____ than a snail.", options: ["slower", "faster", "quieter"] }, { prompt: "A feather is _____ than a rock.", options: ["heavier", "lighter", "harder"] } ] },
      // 53
      { type: "matching" as const, title: "Match Comparisons", instruction: "Draw a line to complete each comparison.", left: ["An elephant is bigger than a...", "Ice is colder than...", "A giraffe is taller than a...", "Honey is sweeter than..."], right: ["lemon", "dog", "mouse", "water"] },
      // 54
      { type: "open-response" as const, title: "Write Comparisons", instruction: "Complete each comparison using a describing word.", prompts: [ { text: "A mountain is ______ than a hill.", type: "lines" as const, lines: 1 }, { text: "A whisper is ______ than a shout.", type: "lines" as const, lines: 1 }, { text: "Sandpaper is ______ than silk.", type: "lines" as const, lines: 1 }, { text: "Night is ______ than day.", type: "lines" as const, lines: 1 } ] },
      // 55
      { type: "sorting" as const, title: "Sort: Describing the Weather", instruction: "Sort each word into the correct weather column.", columns: ["Sunny Day", "Rainy Day", "Cold Day"], items: [ { label: "bright" }, { label: "wet" }, { label: "freezing" }, { label: "warm" }, { label: "drizzly" }, { label: "icy" }, { label: "hot" }, { label: "cloudy" }, { label: "chilly" } ] },
      // 56
      { type: "open-response" as const, title: "Describe the Weather Today", instruction: "Look outside. What is the weather like today? Use describing words.", parentTip: "Real-world description tasks make vocabulary purposeful.", prompts: [ { text: "Today the weather is: ___________________________", type: "lines" as const, lines: 1 }, { text: "The sky looks: ___________________________", type: "lines" as const, lines: 1 }, { text: "It feels: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 57
      { type: "circle-correct" as const, title: "Which Describing Word Fits the Sentence?", instruction: "Circle the describing word that best completes each sentence.", questions: [ { prompt: "The ______ puppy wagged its tail.", options: ["happy", "sad", "angry"] }, { prompt: "The ______ ice cream melted fast.", options: ["frozen", "cold", "hot"] }, { prompt: "The ______ boy climbed the tall tree.", options: ["brave", "tiny", "sleepy"] }, { prompt: "The flowers smell ______.", options: ["loud", "sweet", "heavy"] } ] },
      // 58
      { type: "open-response" as const, title: "Describing Sentences (Set B)", instruction: "Write a full sentence about each object using at least THREE describing words.", prompts: [ { text: "My favourite toy: ___________________________", type: "lines" as const, lines: 2 }, { text: "My bedroom: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 59
      { type: "matching" as const, title: "Match Descriptions to Objects (Set B)", instruction: "Draw a line from each rich description to the correct object.", left: ["cold, white, melting", "tall, green, leafy", "small, red, buzzing", "round, brown, furry"], right: ["coconut", "ladybug", "tree", "snow"] },
      // 60 — SPARK
      { type: "open-response" as const, title: "Vocabulary Spark: Mystery Object!", instruction: "Think of an object but do not say its name. Write 5 describing words as clues. Give your clues to someone and see if they can guess the object!", parentTip: "This reverse-engineering task demands precise vocabulary.", prompts: [ { text: "Clue 1: ______", type: "lines" as const, lines: 1 }, { text: "Clue 2: ______", type: "lines" as const, lines: 1 }, { text: "Clue 3: ______", type: "lines" as const, lines: 1 }, { text: "Clue 4: ______", type: "lines" as const, lines: 1 }, { text: "Clue 5: ______", type: "lines" as const, lines: 1 }, { text: "The object was: ______", type: "lines" as const, lines: 1 } ] },
      // 61
      { type: "home-activity" as const, title: "The Describing Game", instruction: "Use describing words in everyday activities at home.", parentTip: "Model rich describing language in your own speech — children absorb vocabulary through hearing it used naturally.", suggestions: [ "Play 'I am thinking of something': describe an object and take turns guessing.", "At dinner, describe each food item: The carrot is long, orange and crunchy.", "Read a picture book together and collect all the describing words on the pages.", "Go on a texture walk — touch things and describe them: rough, smooth, bumpy, soft." ] },
      // 62
      { type: "open-response" as const, title: "Describe a Room", instruction: "Look around the room you are in. Write 5 describing sentences about what you see.", prompts: [ { text: "1. ___________________________", type: "lines" as const, lines: 1 }, { text: "2. ___________________________", type: "lines" as const, lines: 1 }, { text: "3. ___________________________", type: "lines" as const, lines: 1 }, { text: "4. ___________________________", type: "lines" as const, lines: 1 }, { text: "5. ___________________________", type: "lines" as const, lines: 1 } ] },
      // 63
      { type: "sorting" as const, title: "Sort: Taste Words", instruction: "Sort each taste word into the correct column.", parentTip: "Taste words expand sensory vocabulary.", columns: ["Sweet", "Sour", "Salty"], items: [ { label: "honey" }, { label: "lemon" }, { label: "chips" }, { label: "cake" }, { label: "vinegar" }, { label: "popcorn" }, { label: "chocolate" }, { label: "grapefruit" }, { label: "pretzels" } ] },
      // 64
      { type: "circle-correct" as const, title: "What Does It Taste Like?", instruction: "Circle the taste word that best describes each food.", questions: [ { prompt: "A lemon tastes...", options: ["sweet", "sour", "salty"] }, { prompt: "Chocolate tastes...", options: ["sour", "sweet", "salty"] }, { prompt: "Chips taste...", options: ["sweet", "sour", "salty"] }, { prompt: "Honey tastes...", options: ["sweet", "sour", "bitter"] } ] },
      // 65
      { type: "open-response" as const, title: "Describe Your Favourite Food", instruction: "Write about your favourite food using as many describing words as you can.", parentTip: "Ask: What does it look like? Taste like? Feel like? Smell like?", prompts: [ { text: "My favourite food is: ______", type: "lines" as const, lines: 1 }, { text: "It looks: ______", type: "lines" as const, lines: 1 }, { text: "It tastes: ______", type: "lines" as const, lines: 1 }, { text: "It feels: ______", type: "lines" as const, lines: 1 }, { text: "It smells: ______", type: "lines" as const, lines: 1 } ] },
      // 66
      { type: "matching" as const, title: "Match Smell Words to Objects", instruction: "Draw a line to match each smell word to the correct object.", left: ["sweet", "smoky", "fresh", "stinky", "spicy"], right: ["gym socks", "flowers", "curry", "cut grass", "campfire"] },
      // 67
      { type: "open-response" as const, title: "Describe a Pet or Animal", instruction: "Choose a pet or animal you know. Write a full description using all five senses.", parentTip: "If your child does not have a pet, they can describe any animal they like.", prompts: [ { text: "My animal is: ______", type: "lines" as const, lines: 1 }, { text: "It looks: ___________________________", type: "lines" as const, lines: 1 }, { text: "It sounds: ___________________________", type: "lines" as const, lines: 1 }, { text: "It feels: ___________________________", type: "lines" as const, lines: 1 }, { text: "Full description sentence: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 68
      { type: "circle-correct" as const, title: "Opposite Describing Words (Set B)", instruction: "Circle the opposite of each describing word.", questions: [ { prompt: "dry", options: ["wet", "warm", "dark"] }, { prompt: "rough", options: ["hard", "smooth", "heavy"] }, { prompt: "bright", options: ["dark", "cold", "small"] }, { prompt: "young", options: ["old", "new", "big"] }, { prompt: "heavy", options: ["hard", "light", "tall"] } ] },
      // 69
      { type: "open-response" as const, title: "Describe Two Things: How Are They the Same?", instruction: "Choose two objects. Describe them both. How are they similar?", prompts: [ { text: "Object 1: ______ — it is ___________________________", type: "lines" as const, lines: 1 }, { text: "Object 2: ______ — it is ___________________________", type: "lines" as const, lines: 1 }, { text: "They are the same because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 70
      { type: "sorting" as const, title: "Sort: Words That Describe People", instruction: "Sort each word: does it describe how someone LOOKS or how someone FEELS?", columns: ["Looks Like", "Feels Like"], items: [ { label: "tall" }, { label: "happy" }, { label: "short" }, { label: "scared" }, { label: "strong" }, { label: "excited" }, { label: "curly-haired" }, { label: "proud" } ] },
      // 71
      { type: "open-response" as const, title: "Describe a Family Member", instruction: "Choose someone in your family. Write describing words about how they look and how they act.", parentTip: "This builds personal connection and descriptive precision.", prompts: [ { text: "I am describing: ______", type: "lines" as const, lines: 1 }, { text: "They look: ___________________________", type: "lines" as const, lines: 1 }, { text: "They are: ___________________________", type: "lines" as const, lines: 1 }, { text: "Full sentence: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 72
      { type: "circle-correct" as const, title: "Personality Describing Words", instruction: "Circle the word that is a personality describing word (not about looks).", questions: [ { prompt: "Which describes personality?", options: ["tall", "kind", "brown"] }, { prompt: "Which describes personality?", options: ["funny", "short", "round"] }, { prompt: "Which describes personality?", options: ["green", "brave", "small"] } ] },
      // 73
      { type: "matching" as const, title: "Match Personality Words to Actions", instruction: "Draw a line to match each personality word to the action it describes.", left: ["brave", "kind", "funny", "clever", "gentle"], right: ["makes people laugh", "helps others", "faces scary things", "solves problems", "handles things carefully"] },
      // 74
      { type: "open-response" as const, title: "Describe a Picture Scene", instruction: "Look at a picture in a book or magazine. Write 5 describing sentences about what you see.", parentTip: "Picture descriptions build observation skills and vocabulary simultaneously.", prompts: [ { text: "1. ___________________________", type: "lines" as const, lines: 1 }, { text: "2. ___________________________", type: "lines" as const, lines: 1 }, { text: "3. ___________________________", type: "lines" as const, lines: 1 }, { text: "4. ___________________________", type: "lines" as const, lines: 1 }, { text: "5. ___________________________", type: "lines" as const, lines: 1 } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Tip: Describing Words Have Categories!", instruction: "You have learnt many types of describing words: COLOUR words (red, blue), SIZE words (big, tiny), SHAPE words (round, flat), TEXTURE words (rough, smooth), TASTE words (sweet, sour), SOUND words (loud, quiet), FEELING words (happy, scared), and PERSONALITY words (brave, kind). A great describer uses words from many different categories!", parentTip: "This overview consolidates all the vocabulary categories covered.", prompts: [ { text: "Write one word from each category: colour ______, size ______, texture ______", type: "lines" as const, lines: 1 } ] },
      // 76
      { type: "open-response" as const, title: "Describe Your Favourite Place", instruction: "Think of your favourite place. Describe it using words from many categories.", prompts: [ { text: "My favourite place is: ______", type: "lines" as const, lines: 1 }, { text: "I see: ___________________________", type: "lines" as const, lines: 1 }, { text: "I hear: ___________________________", type: "lines" as const, lines: 1 }, { text: "I feel: ___________________________", type: "lines" as const, lines: 1 }, { text: "Full description: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 77
      { type: "sorting" as const, title: "Grand Describing Word Sort", instruction: "Sort each describing word into the correct category.", columns: ["Colour", "Size", "Texture", "Sound"], items: [ { label: "purple" }, { label: "enormous" }, { label: "prickly" }, { label: "squeaky" }, { label: "silver" }, { label: "miniature" }, { label: "velvety" }, { label: "rumbling" } ] },
      // 78
      { type: "circle-correct" as const, title: "Describing Word Challenge", instruction: "Circle ALL the describing words in each sentence.", parentTip: "Multiple describing words in one sentence is the goal.", questions: [ { prompt: "The big, brown dog is sleeping.", options: ["big", "brown", "both big and brown"] }, { prompt: "I ate a cold, sweet ice cream.", options: ["cold", "sweet", "both cold and sweet"] }, { prompt: "The tiny, grey mouse ran fast.", options: ["tiny", "grey", "both tiny and grey"] } ] },
      // 79
      { type: "open-response" as const, title: "Describe Using All Five Senses", instruction: "Choose any object. Write one describing sentence for each of the five senses.", prompts: [ { text: "Object: ______", type: "lines" as const, lines: 1 }, { text: "I see: ___________________________", type: "lines" as const, lines: 1 }, { text: "I hear: ___________________________", type: "lines" as const, lines: 1 }, { text: "I feel: ___________________________", type: "lines" as const, lines: 1 }, { text: "I smell: ___________________________", type: "lines" as const, lines: 1 }, { text: "I taste: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 80 — SPARK
      { type: "open-response" as const, title: "Vocabulary Spark: Describing Word Collection!", instruction: "You are a word collector! Write as many describing words as you can in 3 minutes. Try to get words from every category: colour, size, shape, texture, taste, sound, feeling, personality.", parentTip: "Word collection builds vocabulary banks that transfer to writing.", prompts: [ { text: "My describing words:", type: "lines" as const, lines: 4 }, { text: "I wrote _____ describing words!", type: "lines" as const, lines: 1 } ] },
      // ─── EXTENDING (81–100): Rich descriptions, creative writing, assessment ───
      // 81
      { type: "open-response" as const, title: "Write a Description Paragraph", instruction: "Choose an object, animal or place. Write a paragraph (3 to 4 sentences) describing it in detail.", parentTip: "A paragraph is a big step! Celebrate any multi-sentence attempt.", prompts: [ { text: "I am describing: ______", type: "lines" as const, lines: 1 }, { text: "My description:", type: "lines" as const, lines: 4 } ] },
      // 82
      { type: "circle-correct" as const, title: "Stronger Describing Words", instruction: "Some describing words are stronger than others. Circle the STRONGER word.", questions: [ { prompt: "Which is stronger?", options: ["big", "enormous"] }, { prompt: "Which is stronger?", options: ["tiny", "small"] }, { prompt: "Which is stronger?", options: ["warm", "boiling"] }, { prompt: "Which is stronger?", options: ["freezing", "cool"] }, { prompt: "Which is stronger?", options: ["pretty", "gorgeous"] } ] },
      // 83
      { type: "matching" as const, title: "Match Weak Words to Strong Words", instruction: "Draw a line to match each everyday word to a stronger describing word.", left: ["happy", "sad", "big", "small", "cold"], right: ["tiny", "ecstatic", "heartbroken", "freezing", "enormous"] },
      // 84
      { type: "open-response" as const, title: "Upgrade Your Words!", instruction: "Replace each ordinary word with a stronger describing word.", parentTip: "Upgrading vocabulary is a key writing skill.", prompts: [ { text: "nice → ______", type: "lines" as const, lines: 1 }, { text: "bad → ______", type: "lines" as const, lines: 1 }, { text: "good → ______", type: "lines" as const, lines: 1 }, { text: "pretty → ______", type: "lines" as const, lines: 1 }, { text: "scary → ______", type: "lines" as const, lines: 1 } ] },
      // 85
      { type: "open-response" as const, title: "Describe a Character", instruction: "Make up a character for a story. Describe what they look like AND what their personality is like.", prompts: [ { text: "Character's name: ______", type: "lines" as const, lines: 1 }, { text: "What they look like: ___________________________", type: "lines" as const, lines: 2 }, { text: "What their personality is like: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 86
      { type: "sorting" as const, title: "Sort: Everyday Words vs Stronger Words", instruction: "Sort each word: is it an everyday word or a strong, interesting word?", columns: ["Everyday", "Strong/Interesting"], items: [ { label: "big" }, { label: "gigantic" }, { label: "nice" }, { label: "wonderful" }, { label: "bad" }, { label: "terrible" }, { label: "small" }, { label: "minuscule" } ] },
      // 87
      { type: "open-response" as const, title: "Describe a Scene for a Story", instruction: "Imagine a scene for a story (a forest, a beach, a castle). Describe it so the reader can picture it.", parentTip: "Scene-setting is a key narrative skill built on descriptive vocabulary.", prompts: [ { text: "My scene is: ______", type: "lines" as const, lines: 1 }, { text: "Description:", type: "lines" as const, lines: 4 } ] },
      // 88
      { type: "circle-correct" as const, title: "Which Sentence Has the Best Description?", instruction: "Circle the sentence with the most vivid description.", questions: [ { prompt: "Best description?", options: ["I saw a dog.", "I saw a huge, shaggy, golden dog."] }, { prompt: "Best description?", options: ["The tiny, silver fish darted away.", "The fish swam."] }, { prompt: "Best description?", options: ["It was a nice day.", "The bright, warm sunshine filled the clear, blue sky."] } ] },
      // 89
      { type: "open-response" as const, title: "Describe Your Day", instruction: "Describe your day so far using as many describing words as possible.", prompts: [ { text: "This morning was: ___________________________", type: "lines" as const, lines: 2 }, { text: "The best part was: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Tip: You Are a Word Artist!", instruction: "Every describing word you use is like a colour in a painting. The more colours you use, the more beautiful the picture! You now know words for colour, size, shape, texture, taste, sound, feelings and personality. Keep collecting new describing words every day!", parentTip: "This affirms vocabulary growth and encourages ongoing word collection.", prompts: [ { text: "My favourite describing word is: ______", type: "lines" as const, lines: 1 }, { text: "I like it because: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 91
      { type: "open-response" as const, title: "Write a Describing Book Page", instruction: "Draw an object and write a full describing paragraph about it — at least 4 sentences.", prompts: [ { text: "Draw your object:", type: "box" as const }, { text: "My describing paragraph:", type: "lines" as const, lines: 4 } ] },
      // 92
      { type: "matching" as const, title: "Grand Describing Match", instruction: "Draw a line to match each rich description to the correct object.", left: ["tiny, red, spotted", "enormous, grey, wrinkly", "long, green, slithering", "round, juicy, orange", "small, brown, hopping"], right: ["orange fruit", "elephant", "ladybug", "snake", "sparrow"] },
      // 93
      { type: "open-response" as const, title: "Describe Using Similes", instruction: "A simile compares using 'like' or 'as'. Example: The pillow is as soft as a cloud. Write your own similes.", parentTip: "Similes are a creative extension of describing vocabulary.", prompts: [ { text: "The ice cream is as cold as ______", type: "lines" as const, lines: 1 }, { text: "The sun is as bright as ______", type: "lines" as const, lines: 1 }, { text: "The kitten is as soft as ______", type: "lines" as const, lines: 1 }, { text: "Make up your own: ______ is as ______ as ______", type: "lines" as const, lines: 1 } ] },
      // 94
      { type: "open-response" as const, title: "Describe Something Without Saying Its Name", instruction: "Choose an animal or object. Write a rich description WITHOUT saying its name. See if your parent can guess!", prompts: [ { text: "My description: ___________________________", type: "lines" as const, lines: 3 }, { text: "It is a: ______", type: "lines" as const, lines: 1 }, { text: "Did they guess it? ______", type: "lines" as const, lines: 1 } ] },
      // 95
      { type: "sorting" as const, title: "Grand Vocabulary Sort: All Categories", instruction: "Sort each word into the correct category.", columns: ["Colour", "Size", "Texture", "Feeling"], items: [ { label: "crimson" }, { label: "gigantic" }, { label: "silky" }, { label: "joyful" }, { label: "turquoise" }, { label: "miniature" }, { label: "prickly" }, { label: "nervous" } ] },
      // 96
      { type: "open-response" as const, title: "Vocabulary Assessment: How Many Describing Words?", instruction: "Write as many describing words as you can in each category.", prompts: [ { text: "Colour words: ___________________________", type: "lines" as const, lines: 1 }, { text: "Size words: ___________________________", type: "lines" as const, lines: 1 }, { text: "Texture words: ___________________________", type: "lines" as const, lines: 1 }, { text: "Feeling words: ___________________________", type: "lines" as const, lines: 1 }, { text: "Total describing words I know: _____", type: "lines" as const, lines: 1 } ] },
      // 97
      { type: "open-response" as const, title: "My Describing Challenge", instruction: "Write the most detailed description you can about your favourite toy, pet or object. Use at least 6 describing words.", prompts: [ { text: "My description:", type: "lines" as const, lines: 5 } ] },
      // 98
      { type: "home-activity" as const, title: "Vocabulary Champion Challenge", instruction: "You are a vocabulary champion! Try these activities to keep building your word collection.", suggestions: [ "Start a family word wall — add a new describing word every day.", "Play the Mystery Object game at dinner: describe something for others to guess.", "Read a story together and highlight all the describing words.", "Describe the weather every morning using at least 3 describing words." ] },
      // 99
      { type: "open-response" as const, title: "Describing Word Self-Assessment", instruction: "Rate yourself on each type of describing word. Write one example of each.", prompts: [ { text: "Colour word I know well: ______", type: "lines" as const, lines: 1 }, { text: "Size word I know well: ______", type: "lines" as const, lines: 1 }, { text: "Texture word I know well: ______", type: "lines" as const, lines: 1 }, { text: "Feeling word I know well: ______", type: "lines" as const, lines: 1 }, { text: "I am best at describing: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 100 — SPARK
      { type: "open-response" as const, title: "Vocabulary Spark: Your Very Own Word Museum!", instruction: "Imagine you are making a Word Museum. Pick 5 of your best, most interesting describing words. Draw each one as if it were on display with a label. For example, 'ENORMOUS' could be written in huge letters!", parentTip: "This creative final activity celebrates vocabulary as something valuable and worth collecting.", prompts: [ { text: "Word 1: ______ (draw it big and beautiful)", type: "box" as const }, { text: "Word 2: ______ (draw it big and beautiful)", type: "box" as const }, { text: "My Word Museum has _____ wonderful words!", type: "lines" as const, lines: 1 } ] },
    ],
  },

  // ── WS 7: Story Retell ────────────────────────────────────
  {
    slug: "story-retell",
    title: "Retelling a Story",
    strand: "Literature",
    description:
      "Listen to a short story, then retell it using beginning, middle and end — building comprehension and oral language.",
    learningGuide: {
      concept:
        "Story retelling requires a child to understand, organise and communicate narrative. It is one of the strongest predictors of reading comprehension. At Foundation, we focus on characters, setting and three key events: beginning, middle and end.",
      activation:
        "Ask: Can you remember a book we read recently? Who was in it? Where did it happen? What happened first? This activates schema and shows your child that you want them to do the thinking.",
      check:
        "After your child retells a story, ask: What happened at the beginning? What happened at the end? How did the character feel? Good retelling includes characters, setting and key events in order.",
    },
    lesson: {
      title: "Tell Me the Story",
      objective:
        "Retell a familiar story in sequence using beginning, middle and end.",
      materials: [
        "A picture book your child loves (e.g. The Very Hungry Caterpillar, Owl Babies, or any favourite)",
        "Pencil and crayons",
        "3 pieces of paper folded to make a simple booklet",
      ],
      intro: {
        title: "Three Parts of a Story",
        script:
          "Every story has three parts — like a sandwich! The beginning is the top piece of bread. Something important happens in the middle — that is the filling. And then the end wraps it all up — the bottom piece of bread. Today we are going to read a story together and then YOU are going to be the storyteller. Are you ready to tell the story back to me?",
        action:
          "Read the chosen picture book together. Before you begin, say: 'Let us watch for the three parts of the story — the beginning, the middle, and the end.' At the first page, say: 'This is the beginning — we are meeting the characters and finding out where the story happens.' Partway through, pause: 'We are in the middle now — the exciting part! What is happening?' At the end: 'Here is the ending — how did everything get sorted out?' After reading, hold up the book and ask your child to point to roughly where each part was.",
      },
      mainActivity: {
        title: "My Story Booklet",
        script:
          "Now it is your turn to retell the story. You are going to draw and write what happened in the beginning, middle and end. For each part, draw a picture and write or tell me a sentence about what happened. Take your time — storytellers always think before they speak! For the beginning, think: who was in the story and where were they? For the middle: what was the problem or the exciting part? For the end: how did it all work out?",
        action:
          "Fold 3 pieces of paper to make a booklet. Label three pages: Beginning, Middle, End. For each page, ask your child to tell you what happened before they draw. Write down their words if they are not yet able to write sentences independently — you can write in pencil below their drawing and they can trace over it. Aim for one drawing and one sentence per page. If your child wants to add more detail, encourage it.",
      },
      wrapUp: {
        title: "Be the Storyteller",
        script:
          "Now put away the book — we are going to close our eyes and retell the story from memory. Ready? Once upon a time... You start! I will help if you get stuck, but I bet you remember more than you think. Remember to tell me who was in the story, what happened, and how it ended.",
        action:
          "Your child retells the story orally from their booklet or from memory. Use prompting questions if they stall: 'And then what happened?' or 'How did the character feel?' Praise any attempt at sequencing. If they jump to the end, gently say: 'Wait — what happened before that? Let us go back to the middle.'",
      },
      parentTip:
        "The goal is oral storytelling — confident speech. If your child's written response is brief, that is fine. What matters is whether they can tell you the story orally. Writing develops later; comprehension and oral fluency come first. Common misconception: children often retell only their favourite scene rather than the whole story — they skip the beginning and jump straight to the exciting bit. This is developmentally normal but worth gently correcting: 'That is the best part! But what happened before that? Who was in the story and where were they?' Another common issue is confusing character feelings with story events — a child might say 'he was sad' without explaining what made the character sad. Prompt: 'Why was he sad? What happened?' Your child is ready for the worksheet when they can: (1) retell a familiar story with at least one event for each of the beginning, middle, and end, (2) name at least one character and the setting, and (3) use sequence words like 'first', 'then', 'at the end' even occasionally.",
      extension:
        "Act out the story with soft toys or paper puppets. Perform the story for another family member. This covers AC V9 Foundation Literature — listening to texts and retelling stories.",
      resources: [
        {
          title: "ABC Education — Stories and Texts",
          url: "https://www.abc.net.au/education/learn-english/stories/",
          description:
            "Video read-alouds and comprehension activities for Foundation students.",
        },
        {
          title: "Khan Academy Kids — Stories",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive story-based activities supporting comprehension and retelling.",
        },
        {
          title: "Storyline Online",
          url: "https://storylineonline.net/",
          description:
            "Free video read-alouds of picture books — excellent for comprehension discussions.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Story parts, characters, setting ───
      // 1
      { type: "circle-correct" as const, title: "Parts of a Story (Set A)", instruction: "Circle the correct answer for each question about stories.", parentTip: "Read the question aloud to your child and discuss each answer.", questions: [ { prompt: "Every story has a beginning, a middle and an...", options: ["end", "picture", "page"] }, { prompt: "The people or animals in a story are called...", options: ["settings", "characters", "pages"] }, { prompt: "The place where a story happens is called the...", options: ["character", "setting", "ending"] } ] },
      // 2
      { type: "circle-correct" as const, title: "Parts of a Story (Set B)", instruction: "Circle the correct answer.", questions: [ { prompt: "Which part of a story introduces the characters?", options: ["Beginning", "Middle", "End"] }, { prompt: "Where does the exciting problem usually happen?", options: ["Beginning", "Middle", "End"] }, { prompt: "When does the problem usually get solved?", options: ["Beginning", "Middle", "End"] } ] },
      // 3
      { type: "matching" as const, title: "Match Story Words to Meanings (Set A)", instruction: "Draw a line from each story word to what it means.", parentTip: "These story words are the building blocks of comprehension.", left: ["character", "setting", "beginning"], right: ["where the story happens", "the start of the story", "a person or animal in the story"] },
      // 4
      { type: "sequence" as const, title: "Put the Story in Order (Set A)", instruction: "Number these story events 1, 2, and 3 to show the correct order.", parentTip: "After ordering, ask your child to tell the story in their own words.", items: [ { label: "The character reaches their goal or the problem is solved." }, { label: "We meet the characters and find out where the story happens." }, { label: "Something exciting or tricky happens in the story." } ] },
      // 5
      { type: "sorting" as const, title: "Beginning, Middle or End? (Set A)", instruction: "Sort each story event into the correct column.", parentTip: "Connect the events to a familiar story your child knows.", columns: ["Beginning", "Middle", "End"], items: [ { label: "We meet the main character." }, { label: "Something goes wrong." }, { label: "The problem is solved." }, { label: "We find out where the story happens." }, { label: "The most exciting part happens." }, { label: "Everyone is happy at the end." } ] },
      // 6
      { type: "open-response" as const, title: "Who Is in the Story?", instruction: "Think of a story you know well. Draw the main character and write their name.", parentTip: "Let your child choose a favourite story — personal choice increases engagement.", prompts: [ { text: "The story is called: ______", type: "lines" as const, lines: 1 }, { text: "Draw the main character:", type: "box" as const }, { text: "The character's name is: ______", type: "lines" as const, lines: 1 } ] },
      // 7
      { type: "circle-correct" as const, title: "Where Does the Story Happen?", instruction: "Stories happen in places! Circle the best setting for each story.", questions: [ { prompt: "A story about fish would happen...", options: ["in a desert", "in the ocean", "on a mountain"] }, { prompt: "A story about a princess would happen...", options: ["in a castle", "in a spaceship", "in a pond"] }, { prompt: "A story about astronauts would happen...", options: ["in a jungle", "at a beach", "in space"] } ] },
      // 8
      { type: "open-response" as const, title: "Draw the Setting", instruction: "Think of a story you know. Draw where the story happens (the setting).", parentTip: "Naming the setting is a key comprehension skill.", prompts: [ { text: "The story is called: ______", type: "lines" as const, lines: 1 }, { text: "Draw the setting:", type: "box" as const }, { text: "The story happens at/in: ______", type: "lines" as const, lines: 1 } ] },
      // 9
      { type: "matching" as const, title: "Match Characters to Settings", instruction: "Draw a line to match each character to the place they would most likely be.", left: ["fish", "astronaut", "farmer", "pirate"], right: ["farm", "ocean", "pirate ship", "spaceship"] },
      // 10
      { type: "circle-correct" as const, title: "Story Feelings (Set A)", instruction: "How would the character feel? Circle the best answer.", parentTip: "Understanding character feelings is key to comprehension.", questions: [ { prompt: "A character who lost their teddy would feel...", options: ["sad", "hungry", "sleepy"] }, { prompt: "A character who won a race would feel...", options: ["scared", "happy", "angry"] }, { prompt: "A character who heard a loud noise at night would feel...", options: ["bored", "happy", "scared"] } ] },
      // 11
      { type: "open-response" as const, title: "Character Feelings", instruction: "Draw a character's face showing how they feel. Write a feeling word.", prompts: [ { text: "Draw a HAPPY face:", type: "box" as const }, { text: "Draw a SAD face:", type: "box" as const }, { text: "Draw a SCARED face:", type: "box" as const } ] },
      // 12
      { type: "sorting" as const, title: "Sort: Story Words", instruction: "Sort each word: is it about a CHARACTER, a SETTING, or a FEELING?", columns: ["Character", "Setting", "Feeling"], items: [ { label: "princess" }, { label: "forest" }, { label: "happy" }, { label: "dragon" }, { label: "castle" }, { label: "scared" }, { label: "robot" }, { label: "beach" }, { label: "excited" } ] },
      // 13
      { type: "sequence" as const, title: "Put the Story in Order (Set B)", instruction: "Number these events to show the correct order for a simple story.", items: [ { label: "The dog finds a bone buried in the garden." }, { label: "A dog goes for a walk in the park." }, { label: "The dog carries the bone home happily." } ] },
      // 14
      { type: "open-response" as const, title: "Retell a Simple Story (Set A)", instruction: "Think of a story you know. Write one sentence for each part.", parentTip: "Even one sentence per part shows comprehension of story structure.", prompts: [ { text: "Beginning: ___________________________", type: "lines" as const, lines: 2 }, { text: "Middle: ___________________________", type: "lines" as const, lines: 2 }, { text: "End: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Tip: Stories Are Like Sandwiches!", instruction: "Every story has three parts — like a sandwich! The BEGINNING is the top piece of bread (we meet the characters). The MIDDLE is the filling (something exciting happens). The END is the bottom piece of bread (the problem is solved). When you retell a story, always include all three parts!", parentTip: "The sandwich metaphor is concrete and memorable for young children.", prompts: [ { text: "Draw a sandwich with three parts labelled Beginning, Middle, End:", type: "box" as const } ] },
      // 16
      { type: "circle-correct" as const, title: "What Happens First?", instruction: "In most stories, what happens FIRST?", questions: [ { prompt: "What usually happens first?", options: ["The problem is solved.", "We meet the characters.", "The most exciting part happens."] }, { prompt: "What usually happens last?", options: ["We find out the setting.", "The problem begins.", "The problem is solved."] }, { prompt: "What usually happens in the middle?", options: ["The story ends.", "We meet the characters.", "Something exciting happens."] } ] },
      // 17
      { type: "matching" as const, title: "Match Story Parts to Descriptions", instruction: "Draw a line to match each story part to what it includes.", left: ["Beginning", "Middle", "End"], right: ["The problem is solved.", "We meet the characters and setting.", "The exciting or tricky part happens."] },
      // 18
      { type: "open-response" as const, title: "My Favourite Character (Set A)", instruction: "Think of a character from a story you love. Draw them and write about them.", parentTip: "Ask: What do they look like? What do they do? Are they brave, funny, kind?", prompts: [ { text: "Draw your favourite character:", type: "box" as const }, { text: "My character's name is: ______", type: "lines" as const, lines: 1 }, { text: "One sentence about what they do: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 19
      { type: "circle-correct" as const, title: "Story Problems (Set A)", instruction: "Every story has a problem. Which problem fits each story?", questions: [ { prompt: "A story about a lost puppy: the problem is...", options: ["The puppy is hungry.", "The puppy is lost.", "The puppy is sleeping."] }, { prompt: "A story about a broken toy: the problem is...", options: ["The toy is new.", "The toy is broken.", "The toy is big."] } ] },
      // 20 — SPARK
      { type: "open-response" as const, title: "Story Spark: You Are a Storyteller!", instruction: "Did you know that YOU tell stories every day? When you tell someone about your day, that is a story! It has a beginning (what happened first), a middle (the exciting part) and an end (how it finished). Tell someone about something that happened today — you are already a storyteller!", parentTip: "This connects story structure to the child's own life.", prompts: [ { text: "Something that happened today — Beginning: ______", type: "lines" as const, lines: 1 }, { text: "Middle: ______", type: "lines" as const, lines: 1 }, { text: "End: ______", type: "lines" as const, lines: 1 } ] },
      // ─── DEVELOPING (21–50): Retelling familiar stories, identifying key events ───
      // 21
      { type: "sequence" as const, title: "Put the Story in Order (Set C)", instruction: "Number these events in the correct order for a farm story.", items: [ { label: "The farmer's chickens run away through an open gate." }, { label: "A farmer wakes up and feeds all the animals." }, { label: "The farmer and the dog find all the chickens and bring them home." } ] },
      // 22
      { type: "open-response" as const, title: "Retell: The Three Little Pigs (Set A)", instruction: "Retell the story of The Three Little Pigs. Write what happened in the beginning, middle and end.", parentTip: "If your child does not know this story, read it together first.", prompts: [ { text: "Beginning: ___________________________", type: "lines" as const, lines: 2 }, { text: "Middle: ___________________________", type: "lines" as const, lines: 2 }, { text: "End: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 23
      { type: "circle-correct" as const, title: "Story Knowledge Check (Set A)", instruction: "Answer each question about stories.", questions: [ { prompt: "What do we call the people or animals in a story?", options: ["Settings", "Characters", "Events"] }, { prompt: "The place where a story happens is called the...", options: ["Plot", "Setting", "Character"] }, { prompt: "The exciting problem in a story is sometimes called the...", options: ["Setting", "Character", "Conflict"] } ] },
      // 24
      { type: "sorting" as const, title: "Beginning, Middle or End? (Set B)", instruction: "Sort these events from a story about a birthday party.", columns: ["Beginning", "Middle", "End"], items: [ { label: "A child wakes up excited on their birthday." }, { label: "Friends arrive and they play games." }, { label: "Everyone sings happy birthday and eats cake." }, { label: "The child gets dressed and helps decorate." }, { label: "A friend falls over and cries but is comforted." }, { label: "Everyone goes home and the child is happy." } ] },
      // 25
      { type: "open-response" as const, title: "Draw Three Story Boxes", instruction: "Think of any story. Draw the beginning, middle and end in three boxes.", prompts: [ { text: "BEGINNING:", type: "box" as const }, { text: "MIDDLE:", type: "box" as const }, { text: "END:", type: "box" as const } ] },
      // 26
      { type: "matching" as const, title: "Match Problems to Solutions", instruction: "Every story has a problem and a solution. Draw a line to match each problem to its solution.", parentTip: "Problem-solution matching builds comprehension.", left: ["A cat is stuck in a tree.", "A child is lost in a shop.", "It starts to rain at the picnic."], right: ["They move the picnic under cover.", "A firefighter rescues the cat.", "A shop worker helps find their parent."] },
      // 27
      { type: "open-response" as const, title: "Who, Where, What? (Set A)", instruction: "For a story you know, answer these three key questions.", prompts: [ { text: "WHO is the story about? ______", type: "lines" as const, lines: 1 }, { text: "WHERE does it happen? ______", type: "lines" as const, lines: 1 }, { text: "WHAT is the problem? ______", type: "lines" as const, lines: 2 } ] },
      // 28
      { type: "circle-correct" as const, title: "Story Feelings (Set B)", instruction: "How would the character feel at each point in the story?", questions: [ { prompt: "At the beginning, when everything is normal, the character feels...", options: ["happy", "terrified", "furious"] }, { prompt: "When the problem happens, the character feels...", options: ["bored", "worried", "sleepy"] }, { prompt: "When the problem is solved, the character feels...", options: ["sad", "angry", "relieved"] } ] },
      // 29
      { type: "sequence" as const, title: "Put the Story in Order (Set D)", instruction: "Number these events for a story about going to the beach.", items: [ { label: "The family packs up and drives home tired but happy." }, { label: "They swim, build sandcastles and have a picnic lunch." }, { label: "A family decides to go to the beach and packs the car." } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Tip: Good Retellers Use Story Language", instruction: "Good storytellers use special words! Try starting your retelling with 'Once upon a time...' or 'First...' Use 'Then...' for the middle and 'Finally...' or 'In the end...' for the ending. These words help your listener follow the story.", parentTip: "Story connectives (first, then, finally) are essential oral language skills.", prompts: [ { text: "Practise: Once upon a time, ___________________________", type: "lines" as const, lines: 1 }, { text: "Then, ___________________________", type: "lines" as const, lines: 1 }, { text: "Finally, ___________________________", type: "lines" as const, lines: 1 } ] },
      // 31
      { type: "open-response" as const, title: "Retell Using Story Words", instruction: "Retell a story you know using the story words: First, Then, Finally.", parentTip: "These connectives build sequencing skills.", prompts: [ { text: "Story title: ______", type: "lines" as const, lines: 1 }, { text: "First, ___________________________", type: "lines" as const, lines: 2 }, { text: "Then, ___________________________", type: "lines" as const, lines: 2 }, { text: "Finally, ___________________________", type: "lines" as const, lines: 2 } ] },
      // 32
      { type: "sorting" as const, title: "Sort: Story Connective Words", instruction: "Sort each word: does it go at the Beginning, Middle or End of a retelling?", columns: ["Beginning words", "Middle words", "End words"], items: [ { label: "Once upon a time" }, { label: "Then" }, { label: "Finally" }, { label: "First" }, { label: "Next" }, { label: "In the end" }, { label: "One day" }, { label: "After that" }, { label: "And they all lived happily" } ] },
      // 33
      { type: "circle-correct" as const, title: "What Happens Next?", instruction: "Read the story start. Circle what would most likely happen next.", questions: [ { prompt: "A bird builds a nest in a tree. Then a storm comes. What happens next?", options: ["The bird sings.", "The nest falls down.", "The bird goes shopping."] }, { prompt: "A boy plants a seed and waters it every day. What happens next?", options: ["The seed grows.", "The boy flies.", "It snows inside."] }, { prompt: "A girl drops her ice cream. What happens next?", options: ["She is happy.", "She is sad.", "She goes to sleep."] } ] },
      // 34
      { type: "open-response" as const, title: "Predict the Ending", instruction: "Read the beginning and middle. Write what you think the ending will be.", parentTip: "Prediction is a powerful comprehension strategy.", prompts: [ { text: "Beginning: A puppy escapes from the garden. Middle: The puppy gets lost in the park.", type: "lines" as const, lines: 1 }, { text: "What do you think happens at the end? ___________________________", type: "lines" as const, lines: 2 } ] },
      // 35
      { type: "matching" as const, title: "Match Story Beginnings to Endings", instruction: "Draw a line to match each story beginning to its most likely ending.", left: ["A cat gets stuck in a tree.", "A child loses their favourite toy.", "A baker runs out of flour."], right: ["The baker goes to the shop and buys more.", "The child finds the toy under the bed.", "A firefighter helps the cat down."] },
      // 36
      { type: "open-response" as const, title: "Retell: A Story You Read Today", instruction: "If you read or heard a story today, retell it here. If not, retell your favourite story.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "Characters: ______", type: "lines" as const, lines: 1 }, { text: "Setting: ______", type: "lines" as const, lines: 1 }, { text: "What happened: ___________________________", type: "lines" as const, lines: 3 } ] },
      // 37
      { type: "circle-correct" as const, title: "Character Traits (Set A)", instruction: "What word best describes each character?", questions: [ { prompt: "A character who helps everyone is...", options: ["kind", "lazy", "scared"] }, { prompt: "A character who faces danger to save a friend is...", options: ["shy", "brave", "silly"] }, { prompt: "A character who makes everyone laugh is...", options: ["serious", "angry", "funny"] } ] },
      // 38
      { type: "open-response" as const, title: "Describe a Story Character", instruction: "Choose a character from a story. Write about what they look like, what they do, and how they feel.", parentTip: "Character description builds deeper comprehension.", prompts: [ { text: "Character's name: ______", type: "lines" as const, lines: 1 }, { text: "What they look like: ______", type: "lines" as const, lines: 1 }, { text: "What they do in the story: ______", type: "lines" as const, lines: 2 }, { text: "How they feel: ______", type: "lines" as const, lines: 1 } ] },
      // 39
      { type: "sequence" as const, title: "Put the Story in Order (Set E)", instruction: "Number these events for a story about baking.", items: [ { label: "They eat the delicious cake together." }, { label: "A child and their parent mix flour, eggs and sugar." }, { label: "They put the mixture in the oven to bake." }, { label: "They decide to bake a cake and gather ingredients." } ] },
      // 40 — SPARK
      { type: "open-response" as const, title: "Story Spark: Stories From Your Family!", instruction: "Ask someone in your family to tell you a story from when THEY were little. Then retell it here! Every family has wonderful stories to share.", parentTip: "Family stories build cultural connection and oral language skills.", prompts: [ { text: "Who told you the story? ______", type: "lines" as const, lines: 1 }, { text: "What happened? ___________________________", type: "lines" as const, lines: 3 }, { text: "Draw a picture from the story:", type: "box" as const } ] },
      // 41
      { type: "open-response" as const, title: "Story Map (Set A)", instruction: "Fill in a story map for a story you know.", parentTip: "Story maps are graphic organisers that support comprehension.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "Characters: ______", type: "lines" as const, lines: 1 }, { text: "Setting: ______", type: "lines" as const, lines: 1 }, { text: "Problem: ______", type: "lines" as const, lines: 1 }, { text: "Solution: ______", type: "lines" as const, lines: 1 } ] },
      // 42
      { type: "sorting" as const, title: "Sort: Character Traits", instruction: "Sort each word: is it a GOOD trait or something a TRICKY character might do?", columns: ["Good traits", "Tricky traits"], items: [ { label: "kind" }, { label: "sneaky" }, { label: "brave" }, { label: "greedy" }, { label: "helpful" }, { label: "lazy" }, { label: "honest" }, { label: "bossy" } ] },
      // 43
      { type: "circle-correct" as const, title: "Why Did the Character Do That?", instruction: "Think about WHY characters do things.", questions: [ { prompt: "Why did the boy share his lunch?", options: ["He was mean.", "He was kind.", "He was hungry."] }, { prompt: "Why did the dog bark at the stranger?", options: ["To protect the family.", "To say hello.", "To get food."] }, { prompt: "Why did the girl study hard?", options: ["She was bored.", "She wanted to learn.", "She was sleepy."] } ] },
      // 44
      { type: "open-response" as const, title: "Story Retell in Four Boxes", instruction: "Draw four pictures showing four key events in a story you know.", prompts: [ { text: "Event 1:", type: "box" as const }, { text: "Event 2:", type: "box" as const }, { text: "Event 3:", type: "box" as const }, { text: "Event 4:", type: "box" as const } ] },
      // 45 — TIP
      { type: "open-response" as const, title: "Tip: Ask Yourself Questions!", instruction: "Good readers ask themselves questions while reading. Try these: WHO is the story about? WHERE does it happen? WHAT is the problem? HOW does it get solved? HOW does the character feel? Asking questions helps you understand and remember the story.", parentTip: "Self-questioning is a metacognitive strategy that transforms comprehension.", prompts: [ { text: "Think of a story. Who? ______ Where? ______ What problem? ______", type: "lines" as const, lines: 2 } ] },
      // 46
      { type: "matching" as const, title: "Match Questions to Story Parts", instruction: "Draw a line to match each question to the story part it helps you understand.", left: ["Who is in the story?", "Where does it happen?", "What is the problem?", "How does it end?"], right: ["Setting", "Character", "Ending", "Problem"] },
      // 47
      { type: "open-response" as const, title: "Ask Questions About a Story", instruction: "After reading or hearing a story, write three questions you could ask about it.", parentTip: "Generating questions shows deeper engagement than simply answering them.", prompts: [ { text: "Story title: ______", type: "lines" as const, lines: 1 }, { text: "Question 1: ___________________________", type: "lines" as const, lines: 1 }, { text: "Question 2: ___________________________", type: "lines" as const, lines: 1 }, { text: "Question 3: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 48
      { type: "circle-correct" as const, title: "Is This a Good Retelling?", instruction: "Read each retelling. Does it include Beginning, Middle and End?", questions: [ { prompt: "A dog went for a walk. He found a bone. He went home happy.", options: ["Good retelling", "Missing parts"] }, { prompt: "There was a cat.", options: ["Good retelling", "Missing parts"] }, { prompt: "A girl lost her ball. She looked everywhere. She found it under a bush.", options: ["Good retelling", "Missing parts"] } ] },
      // 49
      { type: "open-response" as const, title: "Fix This Retelling", instruction: "This retelling is missing parts. Add what is missing.", parentTip: "Identifying gaps in retellings builds critical comprehension.", prompts: [ { text: "Retelling: 'A boy went to the park. The end.' What is MISSING? ___________________________", type: "lines" as const, lines: 2 }, { text: "Write a better retelling: ___________________________", type: "lines" as const, lines: 3 } ] },
      // 50
      { type: "sequence" as const, title: "Put the Story in Order (Set F)", instruction: "Number these events for a story about a rainy day adventure.", items: [ { label: "They splash in puddles and find a rainbow." }, { label: "Two friends are bored because it is raining." }, { label: "They decide to put on raincoats and go outside." }, { label: "They go home wet but happy and have hot chocolate." } ] },
      // ─── CONSOLIDATING (51–80): Deeper retelling, multiple events, connecting to self ───
      // 51
      { type: "open-response" as const, title: "Detailed Retell (Set A)", instruction: "Retell a story in detail. Include characters, setting, problem, events, and solution.", parentTip: "A detailed retelling should have at least 5 sentences.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "My detailed retelling:", type: "lines" as const, lines: 5 } ] },
      // 52
      { type: "circle-correct" as const, title: "Story Elements Review", instruction: "Identify each story element.", questions: [ { prompt: "Characters are...", options: ["places", "people or animals in the story", "problems"] }, { prompt: "The setting is...", options: ["where and when the story happens", "the ending", "the characters"] }, { prompt: "The plot is...", options: ["the characters", "the setting", "what happens in the story"] }, { prompt: "The problem is...", options: ["the beginning", "something that goes wrong", "the characters"] } ] },
      // 53
      { type: "sorting" as const, title: "Sort: Story Elements", instruction: "Sort each item: is it a CHARACTER, SETTING, PROBLEM or FEELING?", columns: ["Character", "Setting", "Problem", "Feeling"], items: [ { label: "a brave knight" }, { label: "a dark forest" }, { label: "the treasure is stolen" }, { label: "scared" }, { label: "a clever fox" }, { label: "a sunny beach" }, { label: "the bridge is broken" }, { label: "excited" } ] },
      // 54
      { type: "open-response" as const, title: "Character Comparison", instruction: "Think of two characters from different stories. How are they the same? How are they different?", parentTip: "Comparing characters across stories builds analytical thinking.", prompts: [ { text: "Character 1: ______ from ______", type: "lines" as const, lines: 1 }, { text: "Character 2: ______ from ______", type: "lines" as const, lines: 1 }, { text: "How they are the same: ___________________________", type: "lines" as const, lines: 2 }, { text: "How they are different: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 55
      { type: "matching" as const, title: "Match Story Events to Feelings", instruction: "Draw a line to match each story event to how the character would feel.", left: ["The character wins a prize.", "The character's pet runs away.", "The character makes a new friend.", "The character falls off a bike."], right: ["hurt and upset", "happy and proud", "sad and worried", "excited and glad"] },
      // 56
      { type: "open-response" as const, title: "Retell and Connect (Set A)", instruction: "Retell a story AND write about how it connects to your own life.", prompts: [ { text: "Story title: ______", type: "lines" as const, lines: 1 }, { text: "What happened in the story: ___________________________", type: "lines" as const, lines: 3 }, { text: "This reminds me of when I: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 57
      { type: "circle-correct" as const, title: "Story or Not a Story?", instruction: "Does this text tell a story (with beginning, middle, end) or is it just information?", questions: [ { prompt: "A dog lost its ball. It looked everywhere. It found it under a bush.", options: ["Story", "Not a story"] }, { prompt: "Dogs have four legs. Dogs can bark. Dogs eat meat.", options: ["Story", "Not a story"] }, { prompt: "A girl planted a seed. It grew into a flower. She gave it to her mum.", options: ["Story", "Not a story"] } ] },
      // 58
      { type: "open-response" as const, title: "Story Map (Set B)", instruction: "Fill in a story map with more detail.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "Main character: ______", type: "lines" as const, lines: 1 }, { text: "Other characters: ______", type: "lines" as const, lines: 1 }, { text: "Setting: ______", type: "lines" as const, lines: 1 }, { text: "Problem: ______", type: "lines" as const, lines: 1 }, { text: "Key events (3): ___________________________", type: "lines" as const, lines: 2 }, { text: "Solution: ______", type: "lines" as const, lines: 1 } ] },
      // 59
      { type: "sequence" as const, title: "Put the Story in Order (Set G)", instruction: "Number these 5 events in the correct order.", items: [ { label: "The dragon and the knight become friends." }, { label: "A brave knight sets off to find a dragon." }, { label: "The knight meets a friendly dragon who is lonely." }, { label: "They fly together over the mountains." }, { label: "The knight hears about a dragon living in a cave." } ] },
      // 60 — SPARK
      { type: "open-response" as const, title: "Story Spark: Make Up Your Own Story!", instruction: "You know all the parts of a story now — so make one up! Create a story with a character, setting, problem and solution. Even just 3 sentences is a story!", parentTip: "Story creation is the highest level of story comprehension.", prompts: [ { text: "My character: ______", type: "lines" as const, lines: 1 }, { text: "My setting: ______", type: "lines" as const, lines: 1 }, { text: "My story: ___________________________", type: "lines" as const, lines: 4 } ] },
      // 61
      { type: "home-activity" as const, title: "Story Time at Home", instruction: "Build story retelling skills through everyday reading.", parentTip: "Reading aloud for 10 to 15 minutes every day is the single most powerful thing you can do for literacy.", suggestions: [ "After reading, ask: Who was the story about? Where did it happen? What was the problem?", "Take turns adding one sentence each to retell a story you both know.", "Use soft toys to act out a familiar story — who plays each character?", "Ask your child to read the pictures in a wordless picture book and make up a story." ] },
      // 62
      { type: "open-response" as const, title: "Retell in Your Own Words (Set A)", instruction: "Think of a story you read recently. Retell it completely in your own words. Do NOT copy the book — use YOUR words.", parentTip: "Own-word retelling demonstrates true comprehension, not just memorisation.", prompts: [ { text: "Story: ______", type: "lines" as const, lines: 1 }, { text: "My retelling:", type: "lines" as const, lines: 5 } ] },
      // 63
      { type: "sorting" as const, title: "Beginning, Middle or End? (Set C)", instruction: "Sort these events from a story about a lost kitten.", columns: ["Beginning", "Middle", "End"], items: [ { label: "A family finds a kitten on their doorstep." }, { label: "They put up posters to find the owner." }, { label: "The owner sees the poster and comes to get the kitten." }, { label: "The kitten is scared at first but the family is kind." }, { label: "The family feeds and cares for the kitten." }, { label: "The owner thanks the family and everyone is happy." } ] },
      // 64
      { type: "circle-correct" as const, title: "What Is the Lesson?", instruction: "Many stories have a lesson or moral. What lesson does each story teach?", parentTip: "Identifying lessons builds critical thinking.", questions: [ { prompt: "A story about sharing toys: the lesson is...", options: ["Sharing makes everyone happy.", "Toys are expensive.", "Dogs like toys."] }, { prompt: "A story about trying again after failing: the lesson is...", options: ["Giving up is best.", "Never try anything.", "Keep trying and you will succeed."] }, { prompt: "A story about being kind to a new kid: the lesson is...", options: ["Stay away from new people.", "Being kind makes a difference.", "School is boring."] } ] },
      // 65
      { type: "open-response" as const, title: "What Is the Lesson? (Set A)", instruction: "Think of a story you know. What lesson or message does it teach?", prompts: [ { text: "Story: ______", type: "lines" as const, lines: 1 }, { text: "The lesson of this story is: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 66
      { type: "matching" as const, title: "Match Stories to Lessons", instruction: "Draw a line to match each story type to the lesson it likely teaches.", left: ["A story about honesty", "A story about helping others", "A story about not giving up", "A story about sharing"], right: ["Sharing makes everyone happy.", "Persistence pays off.", "Kindness matters.", "Telling the truth is important."] },
      // 67
      { type: "open-response" as const, title: "Retell and Draw (Set A)", instruction: "Retell a story by drawing four pictures in order. Write one sentence under each picture.", prompts: [ { text: "Picture 1:", type: "box" as const }, { text: "Sentence: ___________________________", type: "lines" as const, lines: 1 }, { text: "Picture 2:", type: "box" as const }, { text: "Sentence: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 68
      { type: "circle-correct" as const, title: "Would You Change the Ending?", instruction: "Think about different endings for stories.", questions: [ { prompt: "If the Three Little Pigs had all built brick houses...", options: ["The wolf would succeed.", "All three houses would be safe.", "The pigs would be sad."] }, { prompt: "If Cinderella never went to the ball...", options: ["She would meet the prince.", "She would not meet the prince.", "She would turn into a pumpkin."] } ] },
      // 69
      { type: "open-response" as const, title: "Write a Different Ending", instruction: "Choose a story you know. Write a DIFFERENT ending for it.", parentTip: "Alternative endings require deep comprehension and creativity.", prompts: [ { text: "Story: ______", type: "lines" as const, lines: 1 }, { text: "Original ending: ___________________________", type: "lines" as const, lines: 2 }, { text: "My new ending: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 70
      { type: "open-response" as const, title: "Interview a Character", instruction: "Pretend you can interview a character from a story. Write three questions you would ask them.", parentTip: "Character interviews develop perspective-taking skills.", prompts: [ { text: "Character: ______ from ______", type: "lines" as const, lines: 1 }, { text: "Question 1: ___________________________", type: "lines" as const, lines: 1 }, { text: "Question 2: ___________________________", type: "lines" as const, lines: 1 }, { text: "Question 3: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 71
      { type: "sorting" as const, title: "Sort: What Makes a Good Retelling?", instruction: "Sort these: does a good retelling NEED this, or is it EXTRA?", columns: ["Must Have", "Extra/Nice to Have"], items: [ { label: "Characters" }, { label: "Setting" }, { label: "Beginning, middle, end" }, { label: "Funny voices" }, { label: "Problem and solution" }, { label: "Sound effects" }, { label: "Key events in order" }, { label: "A drawing" } ] },
      // 72
      { type: "open-response" as const, title: "Retell to Someone", instruction: "Choose a story. Retell it OUT LOUD to someone in your family. Then write how it went.", parentTip: "Oral retelling is the core skill — writing about it reinforces metacognition.", prompts: [ { text: "I retold: ______", type: "lines" as const, lines: 1 }, { text: "I told it to: ______", type: "lines" as const, lines: 1 }, { text: "The best part of my retelling was: ___________________________", type: "lines" as const, lines: 1 }, { text: "Next time I could improve: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 73
      { type: "circle-correct" as const, title: "Character Actions and Traits", instruction: "What does the character's action tell us about them?", questions: [ { prompt: "A character who gives their lunch to a hungry friend is...", options: ["greedy", "generous", "angry"] }, { prompt: "A character who tells the truth even when it is hard is...", options: ["honest", "tricky", "lazy"] }, { prompt: "A character who climbs a mountain alone is...", options: ["scared", "lazy", "determined"] } ] },
      // 74
      { type: "open-response" as const, title: "Story Comparison", instruction: "Think of two stories. How are they the same? How are they different?", prompts: [ { text: "Story 1: ______", type: "lines" as const, lines: 1 }, { text: "Story 2: ______", type: "lines" as const, lines: 1 }, { text: "How they are the same: ___________________________", type: "lines" as const, lines: 2 }, { text: "How they are different: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Tip: Retelling Gets Better with Practice!", instruction: "The more stories you retell, the better you get! Great retellers remember the characters, setting, problem, key events (in order) and the solution. They also talk about how characters feel and what lesson the story teaches. Keep practising!", parentTip: "This consolidates all the retelling skills covered so far.", prompts: [ { text: "The story I retell best is: ______", type: "lines" as const, lines: 1 }, { text: "I remember it well because: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 76
      { type: "open-response" as const, title: "Story Map (Set C)", instruction: "Create a complete story map with all elements.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "Characters: ______", type: "lines" as const, lines: 1 }, { text: "Setting: ______", type: "lines" as const, lines: 1 }, { text: "Beginning: ___________________________", type: "lines" as const, lines: 1 }, { text: "Problem: ___________________________", type: "lines" as const, lines: 1 }, { text: "Key event 1: ___________________________", type: "lines" as const, lines: 1 }, { text: "Key event 2: ___________________________", type: "lines" as const, lines: 1 }, { text: "Solution: ___________________________", type: "lines" as const, lines: 1 }, { text: "Lesson: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 77
      { type: "matching" as const, title: "Match Story Connectives to Parts", instruction: "Draw a line to match each sentence starter to the story part.", left: ["Once upon a time...", "Suddenly...", "After that...", "In the end...", "First..."], right: ["End", "Middle", "Beginning", "Middle", "Beginning"] },
      // 78
      { type: "open-response" as const, title: "Write About a Favourite Story Character", instruction: "Write a paragraph about a character you admire from a story.", prompts: [ { text: "My favourite character is ______ from ______", type: "lines" as const, lines: 1 }, { text: "I admire them because: ___________________________", type: "lines" as const, lines: 3 } ] },
      // 79
      { type: "circle-correct" as const, title: "Retelling Checklist", instruction: "Tick whether each retelling includes the key elements.", questions: [ { prompt: "Does this retelling have characters? 'A girl found a puppy. She took it home.'", options: ["Yes", "No"] }, { prompt: "Does this retelling have a setting? 'Someone did something.'", options: ["Yes", "No"] }, { prompt: "Does this retelling have a problem and solution? 'A boy lost his hat. He found it under his bed.'", options: ["Yes", "No"] } ] },
      // 80 — SPARK
      { type: "open-response" as const, title: "Story Spark: Be the Storyteller!", instruction: "You are now a storyteller! Retell your absolute favourite story as if you are performing it on a stage. Use expression, gestures and your best storytelling voice. Then write about the experience.", parentTip: "Performance retelling builds confidence and oral fluency.", prompts: [ { text: "I performed: ______", type: "lines" as const, lines: 1 }, { text: "My audience was: ______", type: "lines" as const, lines: 1 }, { text: "The best part of my performance was: ___________________________", type: "lines" as const, lines: 2 } ] },
      // ─── EXTENDING (81–100): Creative retelling, critical thinking, assessment ───
      // 81
      { type: "open-response" as const, title: "Retell From a Different Character's View", instruction: "Choose a story you know well. Retell it from a DIFFERENT character's point of view.", parentTip: "Perspective-shifting is a high-level comprehension skill.", prompts: [ { text: "Story: ______", type: "lines" as const, lines: 1 }, { text: "I am retelling from the view of: ______", type: "lines" as const, lines: 1 }, { text: "My retelling:", type: "lines" as const, lines: 5 } ] },
      // 82
      { type: "circle-correct" as const, title: "Fact or Opinion About a Story?", instruction: "Is each statement a FACT about the story or an OPINION?", questions: [ { prompt: "The story has three characters.", options: ["Fact", "Opinion"] }, { prompt: "The story is the best one ever.", options: ["Fact", "Opinion"] }, { prompt: "The story happens in a forest.", options: ["Fact", "Opinion"] }, { prompt: "The ending is boring.", options: ["Fact", "Opinion"] } ] },
      // 83
      { type: "open-response" as const, title: "Book Review", instruction: "Write a short review of a story you have read. Would you recommend it?", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "What it is about: ___________________________", type: "lines" as const, lines: 2 }, { text: "I liked/did not like it because: ___________________________", type: "lines" as const, lines: 2 }, { text: "I would rate it _____ out of 5 stars.", type: "lines" as const, lines: 1 } ] },
      // 84
      { type: "sorting" as const, title: "Sort: Types of Stories", instruction: "Sort each story type into the correct column.", columns: ["Make-Believe", "Could Be Real"], items: [ { label: "A story about a talking dragon" }, { label: "A story about a child at school" }, { label: "A story about a magic carpet" }, { label: "A story about a family holiday" }, { label: "A story about a fairy" }, { label: "A story about cooking dinner" } ] },
      // 85
      { type: "open-response" as const, title: "Create a Story With a Problem", instruction: "Make up a short story that has a clear problem and solution.", prompts: [ { text: "Characters: ______", type: "lines" as const, lines: 1 }, { text: "Setting: ______", type: "lines" as const, lines: 1 }, { text: "Problem: ______", type: "lines" as const, lines: 1 }, { text: "What happens: ___________________________", type: "lines" as const, lines: 2 }, { text: "Solution: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 86
      { type: "matching" as const, title: "Match Characters to Story Types", instruction: "Draw a line to match each character to the type of story they would be in.", left: ["A wizard", "A firefighter", "A space alien", "A school teacher", "A talking animal"], right: ["Realistic fiction", "Science fiction", "Fantasy", "Animal fable", "Realistic fiction"] },
      // 87
      { type: "open-response" as const, title: "Retell a Story in Exactly 5 Sentences", instruction: "Choose a story. Retell it in EXACTLY five sentences. This requires choosing only the most important events.", parentTip: "Concise retelling requires prioritisation — a higher-order skill.", prompts: [ { text: "Story: ______", type: "lines" as const, lines: 1 }, { text: "Sentence 1: ___________________________", type: "lines" as const, lines: 1 }, { text: "Sentence 2: ___________________________", type: "lines" as const, lines: 1 }, { text: "Sentence 3: ___________________________", type: "lines" as const, lines: 1 }, { text: "Sentence 4: ___________________________", type: "lines" as const, lines: 1 }, { text: "Sentence 5: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 88
      { type: "circle-correct" as const, title: "Story Elements Grand Quiz", instruction: "Test your story knowledge!", questions: [ { prompt: "Which is NOT a story element?", options: ["Character", "Setting", "Maths"] }, { prompt: "A story's problem is also called the...", options: ["Setting", "Conflict", "Character"] }, { prompt: "A story with a beginning, middle and end has good...", options: ["Structure", "Volume", "Colour"] } ] },
      // 89
      { type: "open-response" as const, title: "Create a Sequel", instruction: "Choose a story that has ended. Write what happens NEXT — a sequel!", parentTip: "Sequel writing requires understanding the original deeply enough to extend it.", prompts: [ { text: "Original story: ______", type: "lines" as const, lines: 1 }, { text: "My sequel:", type: "lines" as const, lines: 5 } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Tip: You Are a Story Expert!", instruction: "You now know all the parts of a story: characters, setting, problem, events and solution. You can retell stories, identify lessons, predict endings and even create your own stories. These skills will help you understand every book you ever read!", parentTip: "This affirms the child's growth from basic story awareness to sophisticated comprehension.", prompts: [ { text: "I am good at retelling stories because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 91
      { type: "open-response" as const, title: "Grand Retell (Set A)", instruction: "Retell the most complex story you know. Include all story elements.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "Characters: ______", type: "lines" as const, lines: 1 }, { text: "Setting: ______", type: "lines" as const, lines: 1 }, { text: "Full retelling:", type: "lines" as const, lines: 5 }, { text: "Lesson: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 92
      { type: "open-response" as const, title: "Make a Story Book", instruction: "Plan a mini book. Write what will go on each page.", prompts: [ { text: "Title page: ______", type: "lines" as const, lines: 1 }, { text: "Page 1 (Beginning): ___________________________", type: "lines" as const, lines: 2 }, { text: "Page 2 (Middle): ___________________________", type: "lines" as const, lines: 2 }, { text: "Page 3 (End): ___________________________", type: "lines" as const, lines: 2 } ] },
      // 93
      { type: "sorting" as const, title: "Sort: Good Retelling vs Needs Improvement", instruction: "Sort each retelling skill: are you good at it or do you need to practise more?", columns: ["I am good at this", "I need to practise"], items: [ { label: "Remembering characters" }, { label: "Describing the setting" }, { label: "Telling events in order" }, { label: "Explaining the problem" }, { label: "Telling the solution" }, { label: "Using story connectives" }, { label: "Identifying the lesson" }, { label: "Using expression when telling" } ] },
      // 94
      { type: "open-response" as const, title: "Story Recommendation", instruction: "Write about a story you think everyone should read. Explain why!", prompts: [ { text: "The story is: ______", type: "lines" as const, lines: 1 }, { text: "It is about: ___________________________", type: "lines" as const, lines: 2 }, { text: "You should read it because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 95
      { type: "circle-correct" as const, title: "What Makes a Great Story?", instruction: "Which features make a story great?", questions: [ { prompt: "A great story needs...", options: ["Interesting characters", "Big pages", "Lots of numbers"] }, { prompt: "A great story has...", options: ["No ending", "A problem to solve", "Only one sentence"] }, { prompt: "A great story makes you feel...", options: ["Nothing", "Emotions like happy, sad or excited", "Confused"] } ] },
      // 96
      { type: "open-response" as const, title: "Story Self-Assessment", instruction: "Rate your retelling skills. Circle or write: great, good, or still learning.", prompts: [ { text: "Remembering characters: ______", type: "lines" as const, lines: 1 }, { text: "Retelling beginning, middle, end: ______", type: "lines" as const, lines: 1 }, { text: "Identifying the problem: ______", type: "lines" as const, lines: 1 }, { text: "Explaining the solution: ______", type: "lines" as const, lines: 1 }, { text: "Identifying the lesson: ______", type: "lines" as const, lines: 1 } ] },
      // 97
      { type: "open-response" as const, title: "Retell a Story to Teach Someone", instruction: "Retell a story as if you are teaching it to a younger child. Make it clear and simple.", prompts: [ { text: "Story: ______", type: "lines" as const, lines: 1 }, { text: "My retelling for a younger child:", type: "lines" as const, lines: 4 } ] },
      // 98
      { type: "home-activity" as const, title: "Story Retelling Champion", instruction: "You are a story retelling champion! Keep building these skills.", suggestions: [ "After every story you read, practise the 5-finger retelling: characters, setting, problem, events, ending.", "Start a story journal: retell one story per week in drawings and writing.", "Act out a story with puppets or soft toys for your family.", "Read a new book and tell someone all about it without the book in front of you." ] },
      // 99
      { type: "open-response" as const, title: "Grand Retelling Assessment", instruction: "Read or listen to a story. Then retell it including all elements.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "Characters: ______", type: "lines" as const, lines: 1 }, { text: "Setting: ______", type: "lines" as const, lines: 1 }, { text: "Beginning: ___________________________", type: "lines" as const, lines: 2 }, { text: "Middle: ___________________________", type: "lines" as const, lines: 2 }, { text: "End: ___________________________", type: "lines" as const, lines: 2 }, { text: "Lesson: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 100 — SPARK
      { type: "open-response" as const, title: "Story Spark: Pass the Story!", instruction: "Play 'Pass the Story' with your family. One person starts a story with one sentence. The next person adds a sentence. Keep going until you have a full story with a beginning, middle and end. Then write it down!", parentTip: "Collaborative storytelling builds both comprehension and social skills.", prompts: [ { text: "Our family story:", type: "lines" as const, lines: 5 }, { text: "Who helped tell it: ______", type: "lines" as const, lines: 1 } ] },
    ],
  },

  // ── WS 8: Communicating Ideas ─────────────────────────────
  {
    slug: "communicating-ideas",
    title: "Share Your Ideas",
    strand: "Literacy",
    description:
      "Express thoughts, feelings and ideas through drawing and early writing — including writing your name and simple labels.",
    learningGuide: {
      concept:
        "At Foundation level, drawing is writing. Children communicate ideas through images and move towards labelling, then sentences. This progression — from picture to label to sentence — is a natural and important developmental path. All attempts at writing should be celebrated.",
      activation:
        "Ask: What is your favourite thing to do? Could you draw a picture that shows me exactly what it looks like? Talk about the drawing before writing begins — strong oral preparation improves written output.",
      check:
        "Can your child write their name? Can they label a drawing with a beginning sound or a whole word? Can they attempt a simple sentence (even with invented spelling)?",
    },
    lesson: {
      title: "I Can Share My Ideas",
      objective:
        "Communicate ideas and feelings through drawing and early writing, including writing their own name.",
      materials: [
        "Pencil and crayons",
        "Plain paper",
        "A photograph or familiar object as a writing prompt (optional)",
      ],
      intro: {
        title: "My Ideas Are Important",
        script:
          "Your ideas are wonderful and we want to write them down so everyone can read them! Today you are going to draw and write about something YOU love — something that makes you happy. Before we start, tell me about it: what do you love? Where does it happen? How does it make you feel? Good — now we have lots of ideas ready to write!",
        action:
          "Have a 3 to 4 minute conversation about the chosen topic before any writing. Ask open questions: 'What does it look like? Who is there? What happens? How does it make you feel?' The richer the discussion, the better the writing. Jot down key words your child says on a scrap of paper — they can refer to these when writing.",
      },
      mainActivity: {
        title: "Draw, Label and Write",
        script:
          "Step 1: draw your idea — take your time and add lots of details. Step 2: label the most important things in your picture — write the word or even just the first letter. So if you drew a dog, write 'dog' or just 'd'. Step 3: write a sentence about your picture. It might start with 'I love...' or 'My favourite...' or 'This is...' Here is my example: I drew a cat. I wrote: 'My cat is fluffy.' Now you try! Ready? Off you go — you are a writer!",
        action:
          "While your child draws, do not rush them. When they move to labelling, prompt: 'What is the most important thing in your picture? Let us write that word.' Help them sound out the first letter: 'Dog — what sound does it start with? /d/. What letter makes that sound? d. Write it!' For the sentence, if your child dictates rather than writes, write their words in light pencil and let them trace over. Celebrate every mark on the paper: 'You wrote the d for dog — that is real writing!'",
      },
      wrapUp: {
        title: "Author's Chair",
        script:
          "Now it is sharing time! Sit in the special Author's Chair (any chair will do!) and share your writing with me. Read your words or tell me about your picture. You are a real author now! I want to hear all about what you wrote.",
        action:
          "Let your child read their writing to you — or describe their picture if they cannot yet read their own writing. Ask two genuine questions about their work: 'Why did you choose that?' and 'What happens next in your story?' This makes them feel their ideas matter.",
      },
      parentTip:
        "Never correct invented spelling in a negative way — it can shut down the writing process entirely. Instead, celebrate the attempt and model the correct spelling naturally in your response. For example, if your child writes 'I luv my dg', you might respond: 'You love your dog! What a great sentence.' Common misconception: parents sometimes worry that accepting invented spelling will teach bad habits — it will not. Research consistently shows that children who are encouraged to write freely at this stage develop stronger spelling later because they practise more. Another common issue: children may draw extensively but resist writing any words. This is normal. The progression is: drawing, then labelling with initial sounds, then full words, then sentences. Meet your child where they are. Your child is ready for the worksheet when they can: (1) write their own first name from memory, (2) label at least one item in a drawing with the correct beginning sound, and (3) communicate an idea through drawing and explain it orally.",
      extension:
        "Create a simple book about your child's favourite thing: fold 4 to 5 pieces of paper in half and staple. One idea per page. Add a title page with your child's name as the author. This covers AC V9 Foundation Literacy — creating short written texts using words and images.",
      resources: [
        {
          title: "ABC Education — Early Writing",
          url: "https://www.abc.net.au/education/learn-english/writing/",
          description:
            "Video guidance and activities supporting early writing development for Foundation students.",
        },
        {
          title: "Khan Academy Kids — Writing",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive writing activities for young learners including tracing, labelling and simple sentence writing.",
        },
        {
          title: "Reading Eggs — Writing",
          url: "https://readingeggs.com.au/",
          description:
            "Writing activities and lessons integrated with reading for Foundation-level children.",
        },
      ],
    },
    activities: [
      // ─── FOUNDATIONAL (1–20): Name writing, labelling, first sentences ───
      // 1
      { type: "open-response" as const, title: "Write Your Name (Set A)", instruction: "Practise writing your name. Write it three times.", parentTip: "Your child's name is the most motivating word for them to write. Practise daily until automatic.", prompts: [ { text: "Write your name:", type: "lines" as const, lines: 1 }, { text: "Write it again:", type: "lines" as const, lines: 1 }, { text: "Write it one more time:", type: "lines" as const, lines: 1 } ] },
      // 2
      { type: "open-response" as const, title: "Write Your Name (Set B)", instruction: "Write your name in uppercase letters AND lowercase letters.", prompts: [ { text: "UPPERCASE: ______", type: "lines" as const, lines: 1 }, { text: "lowercase: ______", type: "lines" as const, lines: 1 } ] },
      // 3
      { type: "open-response" as const, title: "Draw and Label (Set A)", instruction: "Draw your favourite toy. Write its name underneath.", parentTip: "Accept invented spelling. The goal is connecting drawing to writing.", prompts: [ { text: "Draw your favourite toy:", type: "box" as const }, { text: "Its name is: ______", type: "lines" as const, lines: 1 } ] },
      // 4
      { type: "open-response" as const, title: "Draw and Label (Set B)", instruction: "Draw your favourite animal. Write its name underneath.", prompts: [ { text: "Draw your favourite animal:", type: "box" as const }, { text: "It is a: ______", type: "lines" as const, lines: 1 } ] },
      // 5
      { type: "circle-correct" as const, title: "What Makes Good Writing? (Set A)", instruction: "Circle YES if the idea helps make good writing, or NO if it does not.", parentTip: "Discuss each answer — the aim is building awareness of the writing process.", questions: [ { prompt: "Think about what you want to say before you write.", options: ["YES", "NO"] }, { prompt: "Draw a picture first to plan your ideas.", options: ["YES", "NO"] }, { prompt: "Write as fast as you can without thinking.", options: ["YES", "NO"] } ] },
      // 6
      { type: "open-response" as const, title: "Label the Picture (Set A)", instruction: "Draw a picture of your bedroom. Label three things in it.", parentTip: "Labelling builds the connection between objects and written words.", prompts: [ { text: "Draw your bedroom:", type: "box" as const }, { text: "Label 1: ______", type: "lines" as const, lines: 1 }, { text: "Label 2: ______", type: "lines" as const, lines: 1 }, { text: "Label 3: ______", type: "lines" as const, lines: 1 } ] },
      // 7
      { type: "open-response" as const, title: "My Favourite Thing", instruction: "Draw your favourite thing. Label it. Then write a sentence about it.", parentTip: "Prompt your child to say their sentence aloud before writing.", prompts: [ { text: "Draw your favourite thing:", type: "box" as const }, { text: "Write a label:", type: "lines" as const, lines: 1 }, { text: "I love ________________________", type: "lines" as const, lines: 2 } ] },
      // 8
      { type: "circle-correct" as const, title: "What Makes Good Writing? (Set B)", instruction: "Circle YES or NO.", questions: [ { prompt: "Use a capital letter at the start of your name.", options: ["YES", "NO"] }, { prompt: "Leave spaces between words.", options: ["YES", "NO"] }, { prompt: "Write without a picture or plan.", options: ["YES", "NO"] }, { prompt: "Say your sentence aloud before writing it.", options: ["YES", "NO"] } ] },
      // 9
      { type: "matching" as const, title: "Match Pictures to Labels", instruction: "Draw a line from each picture word to the correct label.", parentTip: "This builds the reading-writing connection.", left: ["a drawing of a sun", "a drawing of a cat", "a drawing of a cup"], right: ["cat", "cup", "sun"] },
      // 10
      { type: "open-response" as const, title: "Label the Picture (Set B)", instruction: "Draw a picture of your kitchen. Label three things in it.", prompts: [ { text: "Draw your kitchen:", type: "box" as const }, { text: "Label 1: ______", type: "lines" as const, lines: 1 }, { text: "Label 2: ______", type: "lines" as const, lines: 1 }, { text: "Label 3: ______", type: "lines" as const, lines: 1 } ] },
      // 11
      { type: "open-response" as const, title: "Write a Simple Sentence (Set A)", instruction: "Write a sentence about yourself. Start with 'I am...'", parentTip: "Simple sentences like 'I am happy' are the first step to independent writing.", prompts: [ { text: "I am ________________________", type: "lines" as const, lines: 2 } ] },
      // 12
      { type: "open-response" as const, title: "Write a Simple Sentence (Set B)", instruction: "Write a sentence about your family. Start with 'My family...'", prompts: [ { text: "My family ________________________", type: "lines" as const, lines: 2 } ] },
      // 13
      { type: "sequence" as const, title: "The Writing Process (Set A)", instruction: "Number these writing steps 1, 2, 3, 4 to show the correct order.", parentTip: "Talk through each step together.", items: [ { label: "Share your writing with someone." }, { label: "Think about your idea and talk about it." }, { label: "Check your writing — does it make sense?" }, { label: "Draw a picture and write your words." } ] },
      // 14
      { type: "open-response" as const, title: "My Family", instruction: "Draw your family. Write each person's name underneath.", parentTip: "Family names are highly motivating for early writers.", prompts: [ { text: "Draw your family:", type: "box" as const }, { text: "Names: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 15 — TIP
      { type: "open-response" as const, title: "Tip: Say It Before You Write It!", instruction: "Here is a top writing tip: always SAY your sentence out loud before you write it. This helps you remember what to write. Try it: say a sentence about your pet, toy or friend. Now write it down!", parentTip: "Oral rehearsal is the single most effective strategy for improving early writing.", prompts: [ { text: "My sentence: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 16
      { type: "open-response" as const, title: "Draw and Write (Set A)", instruction: "Draw something you did today. Then write one sentence about it.", prompts: [ { text: "Draw what you did:", type: "box" as const }, { text: "I ________________________", type: "lines" as const, lines: 2 } ] },
      // 17
      { type: "circle-correct" as const, title: "Which Is a Sentence?", instruction: "A sentence is a complete thought. Circle which one is a sentence.", parentTip: "Understanding what a sentence IS builds writing foundations.", questions: [ { prompt: "Which is a sentence?", options: ["cat", "The cat sat.", "big cat red"] }, { prompt: "Which is a sentence?", options: ["I am happy.", "happy am", "happy"] }, { prompt: "Which is a sentence?", options: ["sun hot", "The sun is hot.", "is hot"] } ] },
      // 18
      { type: "open-response" as const, title: "Write a Sentence About a Picture (Set A)", instruction: "Draw an animal. Then write a sentence about it.", prompts: [ { text: "Draw an animal:", type: "box" as const }, { text: "The ______ is ________________________", type: "lines" as const, lines: 2 } ] },
      // 19
      { type: "sorting" as const, title: "Sort: Labels vs Sentences", instruction: "Is it a label (just a word) or a sentence (a complete thought)?", columns: ["Label", "Sentence"], items: [ { label: "cat" }, { label: "The cat is big." }, { label: "red ball" }, { label: "I have a ball." }, { label: "sun" }, { label: "The sun is hot." } ] },
      // 20 — SPARK
      { type: "open-response" as const, title: "Writing Spark: You Are a Writer!", instruction: "You are a writer! Every time you write a label, a sentence or even just your name, you are writing. What is your favourite thing to write? Why do people write?", parentTip: "This builds identity as a writer — a crucial motivational step.", prompts: [ { text: "I am a writer! My favourite thing to write is: ______", type: "lines" as const, lines: 1 }, { text: "People write because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // ─── DEVELOPING (21–50): Sentence building, lists, simple messages ───
      // 21
      { type: "open-response" as const, title: "Write About Your Day (Set A)", instruction: "Draw and write about something that happened today.", parentTip: "Talk about the event first — oral rehearsal improves writing.", prompts: [ { text: "Draw what happened:", type: "box" as const }, { text: "Today ________________________", type: "lines" as const, lines: 2 } ] },
      // 22
      { type: "open-response" as const, title: "My News", instruction: "Draw a picture of something that happened recently. Then write about it.", prompts: [ { text: "Draw your news:", type: "box" as const }, { text: "Write about it: ___________________________", type: "lines" as const, lines: 3 } ] },
      // 23
      { type: "circle-correct" as const, title: "Capital Letters", instruction: "Circle the sentence that uses capital letters correctly.", questions: [ { prompt: "Which is correct?", options: ["i am happy.", "I am happy.", "i Am happy."] }, { prompt: "Which is correct?", options: ["my name is Sam.", "My name is Sam.", "my Name is sam."] }, { prompt: "Which is correct?", options: ["The cat sat.", "the Cat sat.", "the cat sat."] } ] },
      // 24
      { type: "open-response" as const, title: "Write Two Sentences (Set A)", instruction: "Write TWO sentences about your favourite food.", parentTip: "Two sentences is a big step! Celebrate the attempt.", prompts: [ { text: "Sentence 1: ___________________________", type: "lines" as const, lines: 2 }, { text: "Sentence 2: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 25
      { type: "matching" as const, title: "Match Sentence Starters to Endings", instruction: "Draw a line to match each sentence start to a sensible ending.", left: ["I like to eat...", "My favourite colour is...", "I can run..."], right: ["blue.", "fast.", "bananas."] },
      // 26
      { type: "open-response" as const, title: "Write a List (Set A)", instruction: "Write a list of your three favourite foods.", parentTip: "Lists are an authentic writing form — they have a real purpose.", prompts: [ { text: "My favourite foods: 1. ______ 2. ______ 3. ______", type: "lines" as const, lines: 2 } ] },
      // 27
      { type: "open-response" as const, title: "Write a List (Set B)", instruction: "Write a list of three things you can see right now.", prompts: [ { text: "I can see: 1. ______ 2. ______ 3. ______", type: "lines" as const, lines: 2 } ] },
      // 28
      { type: "circle-correct" as const, title: "Full Stop Check", instruction: "A sentence ends with a full stop. Which sentence has the full stop in the right place?", questions: [ { prompt: "Which is correct?", options: ["I am happy", "I am. happy", "I am happy."] }, { prompt: "Which is correct?", options: ["The dog. ran", "The dog ran.", "The dog ran"] }, { prompt: "Which is correct?", options: ["I like cake.", "I like. cake", "I like cake"] } ] },
      // 29
      { type: "open-response" as const, title: "Draw and Write (Set B)", instruction: "Draw your family at dinner time. Write two sentences about the picture.", prompts: [ { text: "Draw dinner time:", type: "box" as const }, { text: "Sentence 1: ___________________________", type: "lines" as const, lines: 2 }, { text: "Sentence 2: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 30 — TIP
      { type: "open-response" as const, title: "Tip: Finger Spaces!", instruction: "When you write words, leave a finger space between each word. This makes your writing easy to read! Put your finger down after each word to leave a gap. Try it: write 'I am happy' with finger spaces.", parentTip: "Finger spacing is a fundamental skill for readable writing.", prompts: [ { text: "I   am   happy (practise with finger spaces):", type: "lines" as const, lines: 1 }, { text: "Now write your own sentence with finger spaces:", type: "lines" as const, lines: 2 } ] },
      // 31
      { type: "open-response" as const, title: "Write a Message (Set A)", instruction: "Write a short message to someone in your family.", parentTip: "Messages are purposeful writing — they have a real audience.", prompts: [ { text: "Dear ______,", type: "lines" as const, lines: 1 }, { text: "___________________________", type: "lines" as const, lines: 2 }, { text: "From ______", type: "lines" as const, lines: 1 } ] },
      // 32
      { type: "open-response" as const, title: "Write About Your Pet or Favourite Animal", instruction: "Draw your pet or favourite animal. Write two sentences about it.", prompts: [ { text: "Draw your animal:", type: "box" as const }, { text: "Sentence 1: ___________________________", type: "lines" as const, lines: 2 }, { text: "Sentence 2: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 33
      { type: "circle-correct" as const, title: "Sentence or Not?", instruction: "Circle SENTENCE if it is a complete sentence, or NOT if it is not.", questions: [ { prompt: "I like dogs.", options: ["SENTENCE", "NOT"] }, { prompt: "big and red", options: ["SENTENCE", "NOT"] }, { prompt: "The sun is shining.", options: ["SENTENCE", "NOT"] }, { prompt: "my cat", options: ["SENTENCE", "NOT"] }, { prompt: "We went to the park.", options: ["SENTENCE", "NOT"] } ] },
      // 34
      { type: "open-response" as const, title: "Write Three Sentences (Set A)", instruction: "Write THREE sentences about your family.", parentTip: "Three sentences is a big achievement. Celebrate every attempt.", prompts: [ { text: "Sentence 1: ___________________________", type: "lines" as const, lines: 2 }, { text: "Sentence 2: ___________________________", type: "lines" as const, lines: 2 }, { text: "Sentence 3: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 35
      { type: "matching" as const, title: "Match Sentence Starters to Topics", instruction: "Draw a line from each sentence starter to the topic it goes with.", left: ["I like to play...", "My pet is a...", "At school I learn...", "My favourite food is..."], right: ["food", "animals", "games", "school"] },
      // 36
      { type: "open-response" as const, title: "Write a Shopping List", instruction: "Pretend you are going shopping. Write a list of five things you need to buy.", parentTip: "Lists are an authentic writing task with real-world purpose.", prompts: [ { text: "Shopping list:", type: "lines" as const, lines: 3 } ] },
      // 37
      { type: "open-response" as const, title: "Draw and Write (Set C)", instruction: "Draw your favourite place to play. Write about it.", prompts: [ { text: "Draw your favourite place:", type: "box" as const }, { text: "My favourite place to play is ________________________", type: "lines" as const, lines: 2 }, { text: "I like it because ________________________", type: "lines" as const, lines: 2 } ] },
      // 38
      { type: "circle-correct" as const, title: "Writing Checklist", instruction: "Good writing has these things. Circle TRUE or FALSE.", questions: [ { prompt: "Good writing starts with a capital letter.", options: ["TRUE", "FALSE"] }, { prompt: "Good writing ends with a full stop.", options: ["TRUE", "FALSE"] }, { prompt: "Good writing has finger spaces.", options: ["TRUE", "FALSE"] }, { prompt: "Good writing does not need to make sense.", options: ["TRUE", "FALSE"] } ] },
      // 39
      { type: "open-response" as const, title: "Write About a Friend", instruction: "Write about your best friend.", prompts: [ { text: "My friend's name is: ______", type: "lines" as const, lines: 1 }, { text: "We like to: ___________________________", type: "lines" as const, lines: 2 }, { text: "My friend is special because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 40 — SPARK
      { type: "open-response" as const, title: "Writing Spark: Why Do We Write?", instruction: "Writing is powerful! We write to share ideas, tell stories, remember things, send messages and express feelings. What would YOU like to write to someone? A letter? A story? A note? Write anything you want!", parentTip: "Free choice writing builds intrinsic motivation.", prompts: [ { text: "I want to write: ___________________________", type: "lines" as const, lines: 3 } ] },
      // 41
      { type: "open-response" as const, title: "Write a Thank You Note", instruction: "Write a thank you note to someone who has done something nice for you.", parentTip: "Thank you notes are purposeful, authentic writing.", prompts: [ { text: "Dear ______,", type: "lines" as const, lines: 1 }, { text: "Thank you for ___________________________", type: "lines" as const, lines: 2 }, { text: "From ______", type: "lines" as const, lines: 1 } ] },
      // 42
      { type: "open-response" as const, title: "Write About What You Can Do", instruction: "Write three things you are good at.", prompts: [ { text: "I can ________________________", type: "lines" as const, lines: 1 }, { text: "I can ________________________", type: "lines" as const, lines: 1 }, { text: "I can ________________________", type: "lines" as const, lines: 1 } ] },
      // 43
      { type: "sorting" as const, title: "Sort: Types of Writing", instruction: "Sort each type of writing into the correct column.", columns: ["For Fun", "For a Purpose"], items: [ { label: "a story" }, { label: "a shopping list" }, { label: "a poem" }, { label: "a birthday invitation" }, { label: "a song" }, { label: "a letter to grandma" }, { label: "a made-up book" }, { label: "a sign for your door" } ] },
      // 44
      { type: "open-response" as const, title: "Write an Invitation", instruction: "Write an invitation to a pretend party.", parentTip: "Invitations teach form and purpose in writing.", prompts: [ { text: "You are invited to: ______", type: "lines" as const, lines: 1 }, { text: "When: ______", type: "lines" as const, lines: 1 }, { text: "Where: ______", type: "lines" as const, lines: 1 }, { text: "From: ______", type: "lines" as const, lines: 1 } ] },
      // 45 — TIP
      { type: "open-response" as const, title: "Tip: A Capital Letter and a Full Stop!", instruction: "Every sentence needs two things: a capital letter at the start and a full stop at the end. Capital letter → words → full stop. Practise checking every sentence you write: does it start with a capital? Does it end with a full stop?", parentTip: "These two conventions are the first grammar rules children should master.", prompts: [ { text: "Fix this sentence: i like dogs → ______", type: "lines" as const, lines: 1 }, { text: "Fix this sentence: the cat is big → ______", type: "lines" as const, lines: 1 } ] },
      // 46
      { type: "open-response" as const, title: "Write About the Weekend", instruction: "Write about what you did on the weekend.", prompts: [ { text: "On the weekend I ________________________", type: "lines" as const, lines: 2 }, { text: "The best part was ________________________", type: "lines" as const, lines: 2 } ] },
      // 47
      { type: "circle-correct" as const, title: "Fix the Sentence (Set A)", instruction: "Which version of the sentence is correct?", questions: [ { prompt: "Choose the correct sentence.", options: ["i like cake", "I like cake.", "I like cake"] }, { prompt: "Choose the correct sentence.", options: ["the dog ran.", "The dog ran", "The dog ran."] }, { prompt: "Choose the correct sentence.", options: ["My cat is big.", "my cat is big.", "My cat is big"] } ] },
      // 48
      { type: "open-response" as const, title: "Write About a Feeling", instruction: "Write about a time you felt happy, sad, scared or excited.", parentTip: "Writing about feelings builds emotional literacy.", prompts: [ { text: "I felt ______ when ________________________", type: "lines" as const, lines: 3 } ] },
      // 49
      { type: "open-response" as const, title: "Draw and Write (Set D)", instruction: "Draw something funny that happened. Write two sentences about it.", prompts: [ { text: "Draw the funny thing:", type: "box" as const }, { text: "What happened: ___________________________", type: "lines" as const, lines: 3 } ] },
      // 50
      { type: "sequence" as const, title: "Writing Steps Revisited", instruction: "Put these steps in order for writing a great sentence.", items: [ { label: "Write the sentence with finger spaces." }, { label: "Think about what you want to say." }, { label: "Check: capital letter? Full stop? Does it make sense?" }, { label: "Say the sentence aloud." } ] },
      // ─── CONSOLIDATING (51–80): Multi-sentence writing, varied purposes, sharing ───
      // 51
      { type: "open-response" as const, title: "Write About Your Morning", instruction: "Write about what you did this morning. Write at least three sentences.", parentTip: "Multi-sentence writing is a significant milestone.", prompts: [ { text: "This morning: ___________________________", type: "lines" as const, lines: 4 } ] },
      // 52
      { type: "open-response" as const, title: "Write a Letter (Set A)", instruction: "Write a short letter to a friend or family member.", prompts: [ { text: "Dear ______,", type: "lines" as const, lines: 1 }, { text: "___________________________", type: "lines" as const, lines: 3 }, { text: "Love from ______", type: "lines" as const, lines: 1 } ] },
      // 53
      { type: "circle-correct" as const, title: "Writing Purpose Check", instruction: "What kind of writing would you use for each purpose?", questions: [ { prompt: "To remember what to buy at the shop, you write a...", options: ["story", "list", "letter"] }, { prompt: "To tell grandma about your holiday, you write a...", options: ["list", "sign", "letter"] }, { prompt: "To make up an adventure, you write a...", options: ["story", "list", "invitation"] } ] },
      // 54
      { type: "open-response" as const, title: "Write About Your Favourite Game", instruction: "Write about your favourite game. How do you play it?", prompts: [ { text: "My favourite game is: ______", type: "lines" as const, lines: 1 }, { text: "You play it by: ___________________________", type: "lines" as const, lines: 3 }, { text: "I like it because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 55
      { type: "open-response" as const, title: "Write Instructions (Set A)", instruction: "Write instructions for making a sandwich. Write each step.", parentTip: "Instructions are a different type of writing — procedural text.", prompts: [ { text: "How to make a sandwich:", type: "lines" as const, lines: 1 }, { text: "Step 1: ___________________________", type: "lines" as const, lines: 1 }, { text: "Step 2: ___________________________", type: "lines" as const, lines: 1 }, { text: "Step 3: ___________________________", type: "lines" as const, lines: 1 } ] },
      // 56
      { type: "matching" as const, title: "Match Writing Types to Examples", instruction: "Draw a line to match each type of writing to an example.", left: ["Story", "List", "Letter", "Instructions", "Sign"], right: ["Step 1: Mix the flour.", "Dear Grandma...", "Keep Out!", "Once upon a time...", "1. Apples 2. Bread 3. Milk"] },
      // 57
      { type: "open-response" as const, title: "Write About What Makes You Happy", instruction: "Write about three things that make you happy.", prompts: [ { text: "1. ______ makes me happy because ________________________", type: "lines" as const, lines: 2 }, { text: "2. ______ makes me happy because ________________________", type: "lines" as const, lines: 2 }, { text: "3. ______ makes me happy because ________________________", type: "lines" as const, lines: 2 } ] },
      // 58
      { type: "open-response" as const, title: "Write a Sign", instruction: "Make a sign for your bedroom door. Write and decorate it.", parentTip: "Signs are purposeful writing that children see everywhere.", prompts: [ { text: "My sign says:", type: "box" as const } ] },
      // 59
      { type: "circle-correct" as const, title: "Fix the Sentence (Set B)", instruction: "Which sentence is written correctly?", questions: [ { prompt: "Choose the correct sentence.", options: ["i went to the park.", "I went to the park.", "I went to the Park."] }, { prompt: "Choose the correct sentence.", options: ["my Dog is Brown.", "My dog is brown.", "my dog is brown."] }, { prompt: "Choose the correct sentence.", options: ["We ate cake.", "we ate Cake.", "we ate cake"] } ] },
      // 60 — SPARK
      { type: "open-response" as const, title: "Writing Spark: A Letter to Your Future Self!", instruction: "Write a letter to yourself in the future! Tell your future self what you like, what you are learning, and what you hope to do when you grow up. Seal it in an envelope and open it next year!", parentTip: "This powerful activity connects writing to identity and time.", prompts: [ { text: "Dear Future Me,", type: "lines" as const, lines: 1 }, { text: "Right now I am _____ years old. I like ___________________________", type: "lines" as const, lines: 2 }, { text: "When I grow up I want to ___________________________", type: "lines" as const, lines: 2 }, { text: "From, Me", type: "lines" as const, lines: 1 } ] },
      // 61
      { type: "home-activity" as const, title: "Writers at Home", instruction: "Encourage early writing through meaningful, real-life activities.", parentTip: "Make writing purposeful — write real things for real reasons.", suggestions: [ "Write a shopping list together — your child writes the first letter of each item.", "Write a birthday card or letter to a family member.", "Keep a drawing and writing journal — draw one thing each day and write about it.", "Leave notes for each other around the house." ] },
      // 62
      { type: "open-response" as const, title: "Write About a Special Day", instruction: "Write about a special day you remember (birthday, holiday, outing).", prompts: [ { text: "The special day was: ______", type: "lines" as const, lines: 1 }, { text: "What happened: ___________________________", type: "lines" as const, lines: 3 }, { text: "How I felt: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 63
      { type: "open-response" as const, title: "Write a Question", instruction: "Write three questions you would like to ask someone.", parentTip: "Writing questions develops a different sentence structure from statements.", prompts: [ { text: "Question 1: ___________________________?", type: "lines" as const, lines: 1 }, { text: "Question 2: ___________________________?", type: "lines" as const, lines: 1 }, { text: "Question 3: ___________________________?", type: "lines" as const, lines: 1 } ] },
      // 64
      { type: "sorting" as const, title: "Sort: Capital Letter Needed?", instruction: "Sort these: does the word need a capital letter or not?", parentTip: "Names and sentence starters need capitals.", columns: ["Needs Capital", "No Capital Needed"], items: [ { label: "sam (a name)" }, { label: "the (in a sentence)" }, { label: "monday (a day)" }, { label: "happy (not at start)" }, { label: "australia (a country)" }, { label: "big (not at start)" } ] },
      // 65
      { type: "open-response" as const, title: "Write About Your Hero", instruction: "Write about someone you admire. It could be a family member, a teacher, or a character.", prompts: [ { text: "My hero is: ______", type: "lines" as const, lines: 1 }, { text: "I admire them because: ___________________________", type: "lines" as const, lines: 3 } ] },
      // 66
      { type: "open-response" as const, title: "Write a Mini Story (Set A)", instruction: "Write a mini story with a beginning, middle and end. It can be about anything!", parentTip: "Even 3 sentences that tell a story is a significant achievement.", prompts: [ { text: "Beginning: ___________________________", type: "lines" as const, lines: 2 }, { text: "Middle: ___________________________", type: "lines" as const, lines: 2 }, { text: "End: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 67
      { type: "circle-correct" as const, title: "Types of Sentences", instruction: "Circle what type of sentence each one is.", questions: [ { prompt: "I like cats.", options: ["Telling sentence", "Asking sentence", "Exclamation"] }, { prompt: "Do you like cats?", options: ["Telling sentence", "Asking sentence", "Exclamation"] }, { prompt: "Wow, what a big cat!", options: ["Telling sentence", "Asking sentence", "Exclamation"] } ] },
      // 68
      { type: "open-response" as const, title: "Write a Poem (Set A)", instruction: "Write a simple poem about something you love. It does not need to rhyme.", parentTip: "Poetry is a creative outlet that values expression over correctness.", prompts: [ { text: "My poem:", type: "lines" as const, lines: 4 } ] },
      // 69
      { type: "open-response" as const, title: "Write Directions (Set A)", instruction: "Write directions from your bedroom to the kitchen. Use words like first, then, next.", prompts: [ { text: "First, ___________________________", type: "lines" as const, lines: 1 }, { text: "Then, ___________________________", type: "lines" as const, lines: 1 }, { text: "Next, ___________________________", type: "lines" as const, lines: 1 }, { text: "Finally, ___________________________", type: "lines" as const, lines: 1 } ] },
      // 70
      { type: "open-response" as const, title: "Write About Your Dream", instruction: "Write about a dream you had or a dream you would like to have.", prompts: [ { text: "In my dream: ___________________________", type: "lines" as const, lines: 4 } ] },
      // 71
      { type: "open-response" as const, title: "Write a Review (Set A)", instruction: "Write a review of your favourite book, movie or game.", parentTip: "Reviews teach persuasive and evaluative writing.", prompts: [ { text: "I am reviewing: ______", type: "lines" as const, lines: 1 }, { text: "What it is about: ___________________________", type: "lines" as const, lines: 2 }, { text: "I rate it _____ out of 5 because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 72
      { type: "matching" as const, title: "Match Sentence Starters to Purposes", instruction: "Draw a line to match each sentence starter to what you would write.", left: ["Dear Grandma...", "Once upon a time...", "Step 1...", "I think..."], right: ["An opinion", "A letter", "Instructions", "A story"] },
      // 73
      { type: "open-response" as const, title: "Write a Birthday Card", instruction: "Write a birthday card for someone.", prompts: [ { text: "Happy Birthday ______!", type: "lines" as const, lines: 1 }, { text: "Message: ___________________________", type: "lines" as const, lines: 2 }, { text: "From: ______", type: "lines" as const, lines: 1 } ] },
      // 74
      { type: "open-response" as const, title: "Write About What You Wonder", instruction: "Write three things you wonder about. Start each one with 'I wonder...'", parentTip: "Wonder statements develop curiosity and questioning skills.", prompts: [ { text: "I wonder ________________________", type: "lines" as const, lines: 1 }, { text: "I wonder ________________________", type: "lines" as const, lines: 1 }, { text: "I wonder ________________________", type: "lines" as const, lines: 1 } ] },
      // 75 — TIP
      { type: "open-response" as const, title: "Tip: Add More Detail!", instruction: "Good writers add detail to make their writing interesting. Instead of 'I have a dog', try 'I have a big, fluffy, brown dog called Max.' Adding WHO, WHAT, WHERE, WHEN and WHY makes your writing come alive!", parentTip: "The 5 Ws framework gives children a structure for adding detail.", prompts: [ { text: "Simple: I went to the park. Better: ___________________________", type: "lines" as const, lines: 2 }, { text: "Simple: I ate food. Better: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 76
      { type: "open-response" as const, title: "Write With Detail (Set A)", instruction: "Write about what you had for breakfast today. Include lots of detail.", prompts: [ { text: "This morning I ate ________________________", type: "lines" as const, lines: 3 } ] },
      // 77
      { type: "open-response" as const, title: "Write an Opinion", instruction: "Write your opinion about something. Start with 'I think...' and say why.", parentTip: "Opinion writing is a key text type in the Australian Curriculum.", prompts: [ { text: "I think ________________________ because ________________________", type: "lines" as const, lines: 3 } ] },
      // 78
      { type: "sorting" as const, title: "Sort: Sentence Endings", instruction: "Sort each sentence: does it end with a full stop, question mark or exclamation mark?", columns: ["Full stop (.)", "Question mark (?)", "Exclamation mark (!)"], items: [ { label: "I like cake" }, { label: "Do you like cake" }, { label: "Wow, what great cake" }, { label: "The dog is big" }, { label: "Is the dog big" }, { label: "What a big dog" } ] },
      // 79
      { type: "open-response" as const, title: "Write a Page for a Book", instruction: "Pretend you are writing a book. Write one page with a drawing and at least three sentences.", prompts: [ { text: "My book is called: ______", type: "lines" as const, lines: 1 }, { text: "Draw the picture for this page:", type: "box" as const }, { text: "Write the text:", type: "lines" as const, lines: 4 } ] },
      // 80 — SPARK
      { type: "open-response" as const, title: "Writing Spark: A Message to the World!", instruction: "If you could share one message with everyone in the world, what would it be? Write your message and decorate it like a poster!", parentTip: "This empowering activity shows children that their voice matters.", prompts: [ { text: "My message to the world:", type: "box" as const }, { text: "I want to say this because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // ─── EXTENDING (81–100): Extended writing, creative expression, assessment ───
      // 81
      { type: "open-response" as const, title: "Write a Mini Story (Set B)", instruction: "Write a longer mini story (at least 5 sentences) with a beginning, middle and end.", prompts: [ { text: "My story:", type: "lines" as const, lines: 6 } ] },
      // 82
      { type: "open-response" as const, title: "Write About What You Learned", instruction: "Write about something new you learned recently.", prompts: [ { text: "I learned that ___________________________", type: "lines" as const, lines: 2 }, { text: "I learned it from ___________________________", type: "lines" as const, lines: 1 }, { text: "It was interesting because ___________________________", type: "lines" as const, lines: 2 } ] },
      // 83
      { type: "circle-correct" as const, title: "Writing Improvement Check", instruction: "Which is the BETTER version of each sentence?", questions: [ { prompt: "Choose the better sentence.", options: ["I went.", "I went to the big park with my friends."] }, { prompt: "Choose the better sentence.", options: ["The tiny, spotted ladybug crawled on a leaf.", "I saw a bug."] }, { prompt: "Choose the better sentence.", options: ["We ate.", "We ate warm, crunchy toast with butter and honey."] } ] },
      // 84
      { type: "open-response" as const, title: "Write About Your Future", instruction: "Write about what you want to be when you grow up.", prompts: [ { text: "When I grow up I want to be ________________________", type: "lines" as const, lines: 1 }, { text: "I want to do this because ________________________", type: "lines" as const, lines: 2 }, { text: "To get there I need to ________________________", type: "lines" as const, lines: 2 } ] },
      // 85
      { type: "open-response" as const, title: "Write a Letter (Set B)", instruction: "Write a letter to a friend telling them about something exciting.", prompts: [ { text: "Dear ______,", type: "lines" as const, lines: 1 }, { text: "___________________________", type: "lines" as const, lines: 4 }, { text: "Your friend, ______", type: "lines" as const, lines: 1 } ] },
      // 86
      { type: "open-response" as const, title: "Write a Poem (Set B)", instruction: "Write a poem about the weather. Use describing words.", prompts: [ { text: "My weather poem:", type: "lines" as const, lines: 5 } ] },
      // 87
      { type: "sorting" as const, title: "Sort: My Writing Skills", instruction: "Sort each skill: am I good at this or do I need more practice?", columns: ["I am good at this", "I need practice"], items: [ { label: "Writing my name" }, { label: "Using capital letters" }, { label: "Using full stops" }, { label: "Finger spaces" }, { label: "Writing sentences" }, { label: "Adding detail" }, { label: "Writing stories" }, { label: "Writing neatly" } ] },
      // 88
      { type: "open-response" as const, title: "Write About a Kind Thing You Did", instruction: "Write about a time you were kind to someone.", prompts: [ { text: "I was kind when ___________________________", type: "lines" as const, lines: 3 }, { text: "It made them feel ________________________", type: "lines" as const, lines: 1 } ] },
      // 89
      { type: "open-response" as const, title: "Write About Your Favourite Book", instruction: "Write about your favourite book. What happens? Why do you like it?", prompts: [ { text: "My favourite book is: ______", type: "lines" as const, lines: 1 }, { text: "It is about: ___________________________", type: "lines" as const, lines: 2 }, { text: "I like it because: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 90 — TIP
      { type: "open-response" as const, title: "Tip: You Are an Author!", instruction: "You have written sentences, stories, letters, lists, poems, signs, invitations, reviews and messages. That makes you a real author! Every time you write, you get better. Keep writing every day — even just one sentence. Your ideas matter and the world needs to hear them!", parentTip: "This affirms the child as a writer and encourages lifelong writing habits.", prompts: [ { text: "I am an author! My best writing so far is: ___________________________", type: "lines" as const, lines: 2 } ] },
      // 91
      { type: "open-response" as const, title: "Write Your Own Book Plan", instruction: "Plan a book you would like to write. Write the title, characters and what happens.", prompts: [ { text: "Title: ______", type: "lines" as const, lines: 1 }, { text: "Characters: ______", type: "lines" as const, lines: 1 }, { text: "What happens: ___________________________", type: "lines" as const, lines: 4 } ] },
      // 92
      { type: "open-response" as const, title: "Write a Diary Entry", instruction: "Write a diary entry for today.", parentTip: "Diary writing builds reflective skills and daily writing habits.", prompts: [ { text: "Date: ______", type: "lines" as const, lines: 1 }, { text: "Dear Diary, ___________________________", type: "lines" as const, lines: 4 } ] },
      // 93
      { type: "circle-correct" as const, title: "Writing Grand Quiz", instruction: "Test your writing knowledge!", questions: [ { prompt: "Every sentence starts with a...", options: ["capital letter", "full stop", "question mark"] }, { prompt: "Every sentence ends with a...", options: ["capital letter", "full stop or question mark", "space"] }, { prompt: "Between words you leave...", options: ["no space", "a finger space", "a big gap"] }, { prompt: "Before you write, you should...", options: ["say your sentence aloud", "close your eyes", "run around"] } ] },
      // 94
      { type: "open-response" as const, title: "Write About Something You Are Proud Of", instruction: "Write about something you are proud of.", prompts: [ { text: "I am proud of ___________________________", type: "lines" as const, lines: 1 }, { text: "Because ___________________________", type: "lines" as const, lines: 2 } ] },
      // 95
      { type: "open-response" as const, title: "Write a Mini Story (Set C)", instruction: "Write your best mini story yet! Make it exciting and interesting.", prompts: [ { text: "My best story:", type: "lines" as const, lines: 6 } ] },
      // 96
      { type: "open-response" as const, title: "Write a Letter (Set C)", instruction: "Write a letter to your teacher, a grandparent, or someone you admire.", prompts: [ { text: "Dear ______,", type: "lines" as const, lines: 1 }, { text: "___________________________", type: "lines" as const, lines: 4 }, { text: "From ______", type: "lines" as const, lines: 1 } ] },
      // 97
      { type: "open-response" as const, title: "Write About What You Wish", instruction: "Write about three wishes you have.", prompts: [ { text: "I wish ________________________", type: "lines" as const, lines: 2 }, { text: "I wish ________________________", type: "lines" as const, lines: 2 }, { text: "I wish ________________________", type: "lines" as const, lines: 2 } ] },
      // 98
      { type: "home-activity" as const, title: "Writing Champion Challenge", instruction: "You are a writing champion! Keep writing every day.", suggestions: [ "Start a daily writing journal — just one sentence a day is enough!", "Write letters to family members who live far away.", "Make your own books with drawings and words.", "Write labels, signs and lists around the house." ] },
      // 99
      { type: "open-response" as const, title: "Writing Self-Assessment", instruction: "Rate yourself on each writing skill. Write: great, good, or still learning.", prompts: [ { text: "Writing my name: ______", type: "lines" as const, lines: 1 }, { text: "Using capital letters: ______", type: "lines" as const, lines: 1 }, { text: "Using full stops: ______", type: "lines" as const, lines: 1 }, { text: "Writing sentences: ______", type: "lines" as const, lines: 1 }, { text: "Adding detail: ______", type: "lines" as const, lines: 1 }, { text: "Writing stories: ______", type: "lines" as const, lines: 1 } ] },
      // 100 — SPARK
      { type: "open-response" as const, title: "Writing Spark: Your Author's Chair!", instruction: "Sit in a special chair (the Author's Chair!) and share your best piece of writing with someone. Read it aloud with expression. You are a real author with important ideas to share! Draw yourself as an author.", parentTip: "The Author's Chair ritual celebrates writing as a meaningful, public act.", prompts: [ { text: "I shared my writing about: ______", type: "lines" as const, lines: 1 }, { text: "My audience said: ___________________________", type: "lines" as const, lines: 1 }, { text: "Draw yourself in the Author's Chair:", type: "box" as const } ] },
    ],
  },
];

export function getFoundationEnglishWorksheet(
  slug: string
): WorksheetItem | undefined {
  return foundationEnglishWorksheets.find((ws) => ws.slug === slug);
}
