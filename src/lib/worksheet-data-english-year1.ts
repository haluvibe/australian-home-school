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
      {
        type: "sorting" as const,
        title: "Sort the Blends and Digraphs",
        instruction:
          "Read each word. Sort it into the correct column based on its beginning blend or digraph.",
        parentTip:
          "Say each word aloud first. Encourage your child to identify the first two letters before sorting.",
        columns: ["sh- words", "ch- words", "th- words", "bl- or cl- words", "st- or cr- words"],
        items: [
          { label: "shop" },
          { label: "chip" },
          { label: "thin" },
          { label: "blue" },
          { label: "stop" },
          { label: "shed" },
          { label: "chin" },
          { label: "three" },
          { label: "clap" },
          { label: "crab" },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Choose the Right Beginning",
        instruction:
          "Circle the blend or digraph that completes each word.",
        parentTip:
          "Sound out each option before choosing — this stops guessing and keeps it a phonics exercise.",
        questions: [
          { prompt: "___ip (a type of boat)", options: ["sh", "ch", "bl"] },
          { prompt: "___op (to cut)", options: ["ch", "th", "st"] },
          { prompt: "___is (not that)", options: ["th", "sh", "cr"] },
          { prompt: "___ue (a colour)", options: ["cl", "bl", "cr"] },
          { prompt: "___ar (in the sky at night)", options: ["st", "sh", "ch"] },
          { prompt: "___ab (a sea creature)", options: ["cr", "cl", "bl"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Blend and Digraph Words",
        instruction:
          "Write a word that begins with each blend or digraph. Then draw a quick picture to match.",
        parentTip:
          "Let your child think of their own words — do not supply them. Struggling to think of a word is valuable learning.",
        prompts: [
          { text: "sh- word: ______________ (draw it)", type: "box" as const },
          { text: "ch- word: ______________ (draw it)", type: "box" as const },
          { text: "bl- word: ______________ (draw it)", type: "box" as const },
          { text: "st- word: ______________ (draw it)", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Blend Hunt",
        instruction: "Find blends and digraphs in everyday reading.",
        parentTip:
          "Read the back of cereal boxes, shopping lists or picture books together and hunt for target patterns.",
        suggestions: [
          "Read a short book together and highlight every 'sh', 'ch' or 'th' you find.",
          "Play Word Tennis: one person says a blend (sh-) and the other has 5 seconds to say a word with it.",
          "Make a blend and digraph word wall — one strip of paper per pattern. Add new words as you find them.",
          "Play I Spy with blends: I spy something that starts with /st/ (star, stool, step).",
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Digraph to Its Word",
        instruction:
          "Draw a line from each digraph or blend on the left to a word on the right that begins with it.",
        parentTip:
          "Ask your child to say the sound aloud before looking at the word options — this keeps it a phonics task rather than a visual matching puzzle.",
        left: ["sh-", "ch-", "th-", "bl-", "cr-"],
        right: ["three", "crab", "chip", "black", "shop"],
      },
      {
        type: "sequence" as const,
        title: "Build a Blend Word — Put the Letters in Order",
        instruction:
          "Rearrange the letters to spell a real word that starts with the blend or digraph shown. Write the complete word on the line.",
        parentTip:
          "Say each sound as your child places each letter. Blend left to right once all letters are in position.",
        items: [
          { label: "sh + o + p = ______  (where you buy things)" },
          { label: "cl + a + p = ______  (hands together to make noise)" },
          { label: "st + o + p = ______  (do not go any further)" },
          { label: "th + i + n = ______  (not fat)" },
          { label: "cr + a + b = ______  (a sea creature with claws)" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Sentences with Blend and Digraph Words",
        instruction:
          "Choose one blend word and one digraph word from the box. Write a sentence using each word. Remember: capital letter at the start and a full stop at the end.",
        parentTip:
          "Encourage your child to say each sentence aloud before writing it. Oral rehearsal improves the quality and length of written sentences.",
        prompts: [
          { text: "Word box: shop, chip, three, blue, stop, crab, clap, shed, thin", type: "lines" as const, lines: 1 },
          { text: "My sentence using a blend word:", type: "lines" as const, lines: 2 },
          { text: "My sentence using a digraph word:", type: "lines" as const, lines: 2 },
        ],
      },
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
      {
        type: "matching" as const,
        title: "Match the Sight Word",
        instruction:
          "Draw a line to match the sight word on the left to the same word on the right.",
        parentTip:
          "The child should read each word — not look for visual similarities. Cover one side if needed.",
        left: ["the", "said", "was", "they", "have", "come"],
        right: ["was", "have", "said", "come", "the", "they"],
      },
      {
        type: "open-response" as const,
        title: "Write the Sight Word in a Sentence",
        instruction:
          "Write each sight word in a sentence. Start with a capital letter and end with a full stop.",
        parentTip:
          "If your child is stuck, prompt them by asking: 'Can you think of a sentence about something we did today using that word?'",
        prompts: [
          { text: "Use the word 'said' in a sentence:", type: "lines" as const, lines: 2 },
          { text: "Use the word 'they' in a sentence:", type: "lines" as const, lines: 2 },
          { text: "Use the word 'have' in a sentence:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Spot the Correct Sight Word",
        instruction:
          "Circle the correct spelling of each sight word.",
        parentTip:
          "Irregular sight words like 'said' and 'was' are tricky because they cannot be sounded out normally.",
        questions: [
          { prompt: "The past tense of 'say':", options: ["sed", "said", "sayd"] },
          { prompt: "Past tense of 'are':", options: ["waz", "wos", "was"] },
          { prompt: "More than one:", options: ["thay", "they", "tey"] },
          { prompt: "To possess:", options: ["hav", "have", "haev"] },
          { prompt: "Moving toward:", options: ["too", "two", "to"] },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Sight Word Practice",
        instruction: "Daily games to build sight word automaticity.",
        parentTip:
          "Aim for 10 minutes daily. Flash cards while your child eats breakfast or in the car.",
        suggestions: [
          "Flash 5 sight words each morning at breakfast — make it feel like a warm-up game.",
          "Play Sight Word Snap or Memory using homemade cards.",
          "Write a sight word in sand, salt or flour for a tactile spelling experience.",
          "Hide sight word cards around the house — your child reads the word before putting it in a jar.",
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort Sight Words: Can I Sound It Out?",
        instruction:
          "Some sight words can be sounded out phonically (like 'can' and 'in'). Others have tricky spellings that must be memorised (like 'said' and 'the'). Sort each word into the correct column.",
        parentTip:
          "This activity builds phonics awareness alongside sight word knowledge — both skills work together in fluent reading.",
        columns: ["Can sound it out", "Must memorise it"],
        items: [
          { label: "can" },
          { label: "said" },
          { label: "in" },
          { label: "the" },
          { label: "it" },
          { label: "was" },
          { label: "at" },
          { label: "they" },
          { label: "go" },
          { label: "have" },
        ],
      },
      {
        type: "sequence" as const,
        title: "Put the Sight Words in Alphabetical Order",
        instruction:
          "Write these sight words in alphabetical order (A to Z) by looking at the first letter of each word.",
        parentTip:
          "Sing the alphabet slowly while your child points to each first letter — this makes the ordering strategy concrete and audible.",
        items: [
          { label: "they, and, was, go, have, is, come, the" },
          { label: "1. ______  2. ______  3. ______  4. ______" },
          { label: "5. ______  6. ______  7. ______  8. ______" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Sight Word Story",
        instruction:
          "Use as many sight words from the box as you can in a short story of 3 to 4 sentences. Circle every sight word you used.",
        parentTip:
          "Count the circled words together at the end. Using sight words in context is the most powerful way to cement them in long-term memory.",
        prompts: [
          { text: "Word box: the, and, said, was, they, have, come, is, go, my", type: "lines" as const, lines: 1 },
          { text: "My short story:", type: "lines" as const, lines: 5 },
          { text: "How many sight words did I use? ______", type: "lines" as const, lines: 1 },
        ],
      },
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
      {
        type: "circle-correct" as const,
        title: "Sentence or Not?",
        instruction:
          "Circle S if it is a complete sentence. Circle N if it is not.",
        parentTip:
          "Ask your child: 'Does it tell me something complete? Can it stand on its own?' These questions build sentence sense.",
        questions: [
          { prompt: "The dog ran fast.", options: ["S", "N"] },
          { prompt: "jumped over the", options: ["S", "N"] },
          { prompt: "My cat likes fish.", options: ["S", "N"] },
          { prompt: "the big red", options: ["S", "N"] },
          { prompt: "We went to the park.", options: ["S", "N"] },
          { prompt: "Running and jumping", options: ["S", "N"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Fix the Punctuation",
        instruction:
          "Rewrite each sentence correctly. Add a capital letter at the start and a full stop or question mark at the end.",
        parentTip:
          "After fixing, ask your child to read the corrected sentence aloud. Hearing the pause at the full stop reinforces the concept.",
        prompts: [
          { text: "Fix: the cat sat on the mat", type: "lines" as const, lines: 2 },
          { text: "Fix: do you like apples", type: "lines" as const, lines: 2 },
          { text: "Fix: my dog is very fluffy", type: "lines" as const, lines: 2 },
          { text: "Fix: where is my hat", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Your Own Sentences",
        instruction:
          "Write 3 sentences about your favourite animal. Remember: capital letter at the start, full stop at the end.",
        parentTip:
          "Before writing, ask your child to say each sentence aloud — this oral rehearsal step is essential for young writers.",
        prompts: [
          { text: "Sentence 1:", type: "lines" as const, lines: 2 },
          { text: "Sentence 2:", type: "lines" as const, lines: 2 },
          { text: "Sentence 3:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Punctuation Everywhere",
        instruction: "Notice and practise punctuation in everyday reading and writing.",
        parentTip:
          "Make punctuation visible — point to capitals and full stops whenever you read together.",
        suggestions: [
          "Read a page from a picture book and count every full stop together.",
          "Write a short note to a family member — check every sentence has a capital and a full stop.",
          "Play Sentence Unjumble: write a sentence as separate words on strips, shuffle, and rebuild it.",
          "Dictate 2 to 3 sentences for your child to write — then swap and you write what they dictate.",
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Ending Punctuation",
        instruction:
          "Read each sentence and sort it into the correct column based on what punctuation mark it needs at the end.",
        parentTip:
          "Read each sentence aloud with your child. The voice naturally rises for a question and drops for a statement — this helps them feel which punctuation fits.",
        columns: ["Needs a full stop .", "Needs a question mark ?", "Needs an exclamation mark !"],
        items: [
          { label: "The bird sat in the tree" },
          { label: "Where is my lunch box" },
          { label: "Watch out for the bee" },
          { label: "My favourite colour is green" },
          { label: "Can you help me please" },
          { label: "We won the race" },
          { label: "How old are you" },
          { label: "That was so surprising" },
        ],
      },
      {
        type: "sequence" as const,
        title: "Unscramble the Sentence",
        instruction:
          "The words in each sentence are in the wrong order. Write them in the correct order to make a complete sentence. Do not forget the capital letter and the full stop.",
        parentTip:
          "Ask your child to say the sentence aloud in different orders until it sounds right. This builds an ear for sentence grammar.",
        items: [
          { label: "fast / dog / ran / the → ________________________________" },
          { label: "likes / my / fish / cat → ________________________________" },
          { label: "we / to / park / went / the → ________________________________" },
          { label: "hat / red / big / a / wore / she → ________________________________" },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Punctuation Mark Fits?",
        instruction:
          "Circle the correct punctuation mark to end each sentence.",
        parentTip:
          "Read each sentence together with expression. The tone of voice tells you which mark is needed.",
        questions: [
          { prompt: "The sun is shining today", options: [".", "?", "!"] },
          { prompt: "What is your name", options: [".", "?", "!"] },
          { prompt: "Look out — there is a spider", options: [".", "?", "!"] },
          { prompt: "She has a blue bag", options: [".", "?", "!"] },
          { prompt: "Did you see that", options: [".", "?", "!"] },
          { prompt: "I love my dog so much", options: [".", "?", "!"] },
        ],
      },
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
      {
        type: "open-response" as const,
        title: "Read and Answer",
        instruction:
          "Read this short story. Then answer the questions below.",
        parentTip:
          "Read the passage together first if needed. Encourage your child to re-read to find answers rather than guessing.",
        prompts: [
          {
            text: "Sam has a little dog called Rex. Rex loves to run in the park. One day, Rex found a big stick and would not drop it! Sam said, 'Rex, drop it!' But Rex just wagged his tail and ran away. Sam laughed and ran after him.",
            type: "lines" as const,
            lines: 1,
          },
          { text: "Who is the story about? ___________________________", type: "lines" as const, lines: 1 },
          { text: "What did Rex find in the park? ___________________________", type: "lines" as const, lines: 1 },
          { text: "How do you think Sam felt at the end? ___________________________", type: "lines" as const, lines: 2 },
          { text: "What do you think Rex did next? (Your idea — no wrong answer!)", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "sequence" as const,
        title: "Put the Events in Order",
        instruction:
          "Number the events from the story 1 to 4, from what happened first to last.",
        parentTip:
          "Ask your child to find each event in the story before numbering — this keeps it text-based.",
        items: [
          { label: "Sam laughed and ran after Rex." },
          { label: "Sam went to the park with Rex." },
          { label: "Sam said Drop it! but Rex kept the stick." },
          { label: "Rex found a big stick." },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Story Detectives",
        instruction: "Build comprehension skills through daily reading.",
        parentTip:
          "The best comprehension work happens in conversation AFTER reading — ask questions before, during and after.",
        suggestions: [
          "Before reading: look at the cover and predict what the story will be about.",
          "During reading: stop at an exciting moment and ask what might happen next.",
          "After reading: ask 'Who? What? Where? Why? How?' questions together.",
          "Ask your child to draw the most important event from the story and explain their choice.",
        ],
      },
      {
        type: "circle-correct" as const,
        title: "True or False?",
        instruction:
          "Read each statement about the story. Circle TRUE if it matches the story, or FALSE if it does not.",
        parentTip:
          "Encourage your child to point to the sentence in the story that supports each answer before circling.",
        questions: [
          { prompt: "Rex is a little dog.", options: ["TRUE", "FALSE"] },
          { prompt: "Rex found a big stick.", options: ["TRUE", "FALSE"] },
          { prompt: "Rex dropped the stick when Sam asked.", options: ["TRUE", "FALSE"] },
          { prompt: "Sam laughed at the end of the story.", options: ["TRUE", "FALSE"] },
          { prompt: "Sam and Rex were at a beach.", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Question to Its Answer",
        instruction:
          "Draw a line from each question on the left to its answer on the right. Use the story to help you.",
        parentTip:
          "This activity practises the skill of locating specific information in a text — a key reading strategy for Year 1 and beyond.",
        left: [
          "Who is the dog?",
          "What did Rex find?",
          "What did Sam say?",
          "How did Sam feel at the end?",
        ],
        right: [
          "He laughed.",
          "Rex",
          "Drop it!",
          "A big stick",
        ],
      },
      {
        type: "open-response" as const,
        title: "Draw and Write: The Story in Your Head",
        instruction:
          "Draw your favourite moment from the story. Then write one sentence to describe what is happening in your picture.",
        parentTip:
          "Drawing before writing helps children organise their thoughts. Accept any moment from the story — there is no single right answer.",
        prompts: [
          { text: "Draw your favourite moment from the story:", type: "box" as const },
          { text: "My sentence about the picture:", type: "lines" as const, lines: 2 },
        ],
      },
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
      {
        type: "open-response" as const,
        title: "Plan Your Story",
        instruction:
          "Fill in the story map to plan your story BEFORE writing. Then write your story below.",
        parentTip:
          "Spend at least 5 minutes on the plan before writing begins. A good plan produces a much better story.",
        prompts: [
          { text: "WHO is my story about? (name + one describing word): ________________", type: "lines" as const, lines: 1 },
          { text: "WHERE does it happen? (place + one describing word): ________________", type: "lines" as const, lines: 1 },
          { text: "WHAT happens? (one event): ________________", type: "lines" as const, lines: 1 },
          { text: "Now write your story here (at least 3 sentences):", type: "lines" as const, lines: 8 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Add Describing Words",
        instruction:
          "These sentences are a bit dull! Add a describing word to make each one more exciting.",
        parentTip:
          "Ask your child: 'What did it look like? What colour was it? How big was it?' These prompts generate adjectives.",
        prompts: [
          { text: "The dog ran away. -> The _______ dog ran away.", type: "lines" as const, lines: 1 },
          { text: "A cat sat on the mat. -> A _______ cat sat on the _______ mat.", type: "lines" as const, lines: 1 },
          { text: "She found a flower. -> She found a _______ flower.", type: "lines" as const, lines: 1 },
          { text: "The boy laughed. -> The _______ boy laughed.", type: "lines" as const, lines: 1 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Story Starters",
        instruction: "Use these prompts to spark creative writing at home.",
        parentTip:
          "Keep a family 'story jar' — write ideas on slips and draw one when you are stuck for a writing topic.",
        suggestions: [
          "Use a story starter: 'One morning, I woke up and everything was made of...' — continue the story!",
          "Draw a character first, then write a story about them.",
          "Tell a story out loud together — one sentence each. Then write the whole story down.",
          "Write a letter from a favourite book character to another character.",
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort Words into the Story Parts",
        instruction:
          "A story has three parts: a Beginning (who and where), a Middle (the problem or event), and an End (how it finishes). Sort each sentence strip into the correct story part.",
        parentTip:
          "Read each sentence together and ask: 'Is this introducing the story, is something happening, or is it finishing up?' This builds structural awareness of narrative.",
        columns: ["Beginning", "Middle", "End"],
        items: [
          { label: "Once there was a small red dragon who lived in a cave." },
          { label: "The dragon tried and tried but could not find his way home." },
          { label: "At last, a friendly bird showed him the path back." },
          { label: "One day, the dragon flew too far and got lost in the clouds." },
          { label: "The dragon lived happily ever after in his cosy cave." },
          { label: "The cave was deep in a tall green mountain." },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Choose the Best Describing Word",
        instruction:
          "Circle the describing word that best fits each sentence. Think about what makes the most sense and sounds most interesting.",
        parentTip:
          "There is sometimes more than one reasonable answer. The discussion about why one word works better than another is the most valuable part of this activity.",
        questions: [
          { prompt: "The ___ cat climbed the tree.", options: ["tiny", "purple", "wooden"] },
          { prompt: "She wore a ___ dress to the party.", options: ["sparkling", "sleeping", "fast"] },
          { prompt: "The ___ giant stomped through the forest.", options: ["enormous", "quiet", "tasty"] },
          { prompt: "He found a ___ shell on the beach.", options: ["striped", "running", "heavy"] },
          { prompt: "A ___ wind blew through the window.", options: ["cold", "yellow", "happy"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Story Beginning: Set the Scene",
        instruction:
          "Write a strong opening sentence for each story idea. Include the character's name and one describing word to set the scene.",
        parentTip:
          "Model a strong opening together first: 'Tiny Mia the mouse crept across the dark kitchen floor.' Then let your child try their own.",
        prompts: [
          { text: "Story idea: A dragon who cannot breathe fire", type: "lines" as const, lines: 2 },
          { text: "Story idea: A girl who finds a magic door", type: "lines" as const, lines: 2 },
          { text: "Story idea: A robot who wants a friend", type: "lines" as const, lines: 2 },
        ],
      },
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
