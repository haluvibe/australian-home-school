import type { WorksheetItem } from "./worksheet-types";

export const year3EnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Prefixes un- and re- ─────────────────────────────────
  {
    slug: "prefixes-un-re",
    title: "Prefixes: un- and re-",
    strand: "Language",
    description:
      "Understand how the prefixes 'un-' (not/opposite) and 're-' (again) change word meaning, and use them to build and spell new words.",
    learningGuide: {
      concept:
        "A prefix is a group of letters added to the beginning of a word to change its meaning. 'Un-' means 'not' or the opposite (unhappy = not happy). 're-' means 'again' (rewrite = write again). Knowing prefixes helps readers decode unfamiliar multisyllabic words quickly.",
      activation:
        "Ask your child what 'unhappy' means. Then ask: what does the 'un-' part do? Try 'redo' — what does the 're-' part tell us? See if they can guess the meaning of 'unfinished' and 'replay' before explaining.",
      check:
        "Can your child correctly add un- or re- to a base word and explain the new meaning? Can they use both types of words in their own sentences?",
    },
    lesson: {
      title: "Word Changers",
      objective:
        "Add prefixes 'un-' and 're-' to base words and explain how meaning changes.",
      materials: [
        "Paper and pencil",
        "Two different coloured pens or pencils",
        "Index cards or small paper squares for a word-building game",
      ],
      intro: {
        title: "What Does the Beginning Do?",
        script:
          "Today we are going to look at something amazing — a tiny group of letters that can completely change the meaning of a word just by being stuck at the front. Let's look at the word 'happy'. Now I add 'un-' to the front: 'unhappy'. What happened to the meaning? It went in the opposite direction! Now let's try 'write'. I add 're-' to the front: 'rewrite'. What does that mean? To write again! These front-adders are called prefixes.",
        action:
          "Write 'un-' in one colour and 're-' in another. Together brainstorm 3 words for each prefix, writing the base word, then the prefix+word, then its meaning. Keep the pace conversational.",
      },
      mainActivity: {
        title: "Build the Words",
        script:
          "Now let's be word builders. I am going to give you some base words and you are going to add either 'un-' or 're-' to make a new word — and then tell me what the new word means. Some words will work with both prefixes — like 'read' can become 'unread' or 'reread'. Let's see what you find!",
        action:
          "Write these base words on cards: lock, do, tie, place, kind, build, tell, cover, heat, load. Child adds un- or re- (or both where possible). Together discuss the meaning of each new word. Let the child sort the words into 'un-' and 're-' piles.",
      },
      wrapUp: {
        title: "Real Life Words",
        script:
          "When you see a long word you don't know, look at the beginning first — does it start with 'un-' or 're-'? If so, you can often work out the meaning before you even read the rest! Let me show you a couple of tricky words and we'll work them out together.",
        action:
          "Write 'unexpected' and 'rearrange' on paper. Help the child identify the prefix, the base word, and work out the meaning from the parts.",
      },
      parentTip:
        "The most powerful thing you can do when your child meets an unfamiliar word is to say 'Let's pull it apart'. Prefix awareness is one of the fastest-growing reading strategies at Year 3 — children who learn to decode by morphemes (meaningful word parts) rather than just sounds rapidly expand their vocabulary and reading fluency.",
      extension:
        "Play 'Real or Fake?': write some words with un- or re- that are real (unkind, rebuild) and some that are not real words (unswim, rehappy). Can your child sort the real from the fake? Discussing WHY a word is not real deepens morphological understanding.",
      resources: [
        {
          title: "Prefixes and Suffixes",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description:
            "Khan Academy reading and language activities covering word parts and vocabulary building.",
        },
        {
          title: "ABC Education — Word Study",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description:
            "ABC Education interactive activities for spelling and word study.",
        },
        {
          title: "Starfall — Words and Reading",
          url: "https://www.starfall.com/h/ltr-classic/ltr-classic.php?sn=main",
          description: "Starfall reading and word study activities for early primary.",
        },
      ],
    },
    activities: [
      {
        type: "matching",
        title: "Match Word to Meaning",
        instruction:
          "Draw a line to match each prefixed word to its correct meaning.",
        parentTip: "Remind your child to identify the prefix and base word separately before reading the meaning options.",
        left: ["unpack", "reread", "unkind", "rebuild", "untidy"],
        right: [
          "not neat",
          "take things out",
          "read again",
          "not caring about feelings",
          "build again",
        ],
      },
      {
        type: "open-response",
        title: "Add the Prefix and Explain",
        instruction:
          "Add 'un-' or 're-' to each base word. Write the new word and its meaning.",
        parentTip:
          "If your child is unsure which prefix fits, try both and see which one makes a real, meaningful word.",
        prompts: [
          { text: "Base word: do → New word: ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "Base word: lock → New word: ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "Base word: place → New word: ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "Base word: cover → New word: ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "Base word: heat → New word: ___  Meaning: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Prefix",
        instruction:
          "Sort these words into the correct column based on their prefix.",
        columns: ["un-", "re-"],
        items: [
          { label: "unhappy" },
          { label: "rewrite" },
          { label: "undo" },
          { label: "replay" },
          { label: "unfinished" },
          { label: "rebuild" },
          { label: "unknown" },
          { label: "recycle" },
          { label: "untidy" },
          { label: "refill" },
        ],
      },
      {
        type: "open-response",
        title: "Write Sentences Using Prefixed Words",
        instruction:
          "Write a sentence using each word below. Make sure your sentence shows you understand the meaning.",
        prompts: [
          { text: "Write a sentence using 'unexpected'.", type: "lines", lines: 2 },
          { text: "Write a sentence using 'reread'.", type: "lines", lines: 2 },
          { text: "Write a sentence using 'unhelpful'.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Prefix Word Hunt",
        instruction:
          "Look for words with the prefixes un- and re- in books, newspapers, and around your home.",
        parentTip:
          "Newspaper headlines, food packaging, and instruction manuals are surprisingly rich sources of prefixed words. Make it a treasure hunt.",
        suggestions: [
          "Find 3 words with 'un-' in a book or newspaper",
          "Find 3 words with 're-' on packaging or signs at home",
          "Keep a running tally in a 'Word Parts' notebook this week",
          "Try to use one un- word and one re- word in a conversation today",
        ],
      },
    ],
  },

  // ── WS 2: Suffixes -ness, -ful, -less ──────────────────────────
  {
    slug: "suffixes-ness-ful-less",
    title: "Suffixes: -ness, -ful, -less",
    strand: "Language",
    description:
      "Learn how the suffixes '-ness', '-ful' and '-less' change base words into new words, and use them in sentences.",
    learningGuide: {
      concept:
        "A suffix is added to the end of a word to change its meaning or word type. '-ness' turns an adjective into a noun (kind → kindness). '-ful' means 'full of' (joy → joyful). '-less' means 'without' (hope → hopeless). Learning suffixes rapidly expands vocabulary.",
      activation:
        "Ask: 'What is kindness?' Then ask: 'What word is hiding inside kindness?' (kind). Then say: 'So kindness means the quality of being kind.' Now try 'careless' — what is the base word? What does -less mean?",
      check:
        "Can your child add the correct suffix to a base word and explain what the new word means? Can they notice when a spelling change is needed (e.g. happy → happiness)?",
    },
    lesson: {
      title: "Word Enders",
      objective:
        "Add suffixes -ness, -ful and -less to base words and explain their meanings.",
      materials: [
        "Paper and pencil",
        "Three sticky notes or cards labelled: -ness, -ful, -less",
      ],
      intro: {
        title: "Three Powerful Endings",
        script:
          "Today we are going to look at three word endings — or suffixes — that can turn almost any describing word into a brand new word. Watch: 'kind'. I stick '-ness' on the end: 'kindness' — a noun that means the quality of being kind. I try '-ful': 'kindful' — hmm, that does not quite work! But 'joyful' does — it means full of joy. And 'helpless' — '-less' means without, so helpless means without help. Let's discover which endings work with which words.",
        action:
          "Write 'kind', 'joy' and 'hope' on paper. Show how each suffix can attach and discuss what works and what does not. Let the child suggest which endings fit naturally with each base word.",
      },
      mainActivity: {
        title: "Suffix Spinning",
        script:
          "Let's try lots of words and see which suffixes they like! For each word I give you, tell me: can you add -ness? Can you add -ful? Can you add -less? Write the new word for each one that works. Some words will work with more than one ending!",
        action:
          "Work through: kind, help, wonder, use, care, dark, thought, play, power. Child tests each suffix and writes the correct new words. Note: some need spelling changes (happy → happiness — the 'y' changes to 'i'). Do these together and discuss why.",
      },
      wrapUp: {
        title: "Suffix Detectives",
        script:
          "Let's look at some long words and work backwards — can you find the suffix and the base word hiding inside?",
        action:
          "Write these words: happiness, beautiful, careless, darkness, useful, powerless. Child underlines the suffix and circles the base word. Together confirm the meaning of each.",
      },
      parentTip:
        "The spelling change with '-ness' and '-ful' after words ending in 'y' (happy → happiness, beauty → beautiful) is a key Year 3 spelling rule. When your child makes this error, rather than simply correcting it, ask: 'What happens to words ending in 'y' when we add a suffix?' This builds metacognitive awareness around spelling patterns.",
      extension:
        "Ask your child to choose 5 base words and create a 'Suffix Tree' on paper: the base word at the trunk, and each suffix version on a different branch. Add the meaning of each branch word. Display it as a learning reference.",
      resources: [
        {
          title: "Suffixes and Word Families",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy language and vocabulary activities for Years 2-3.",
        },
        {
          title: "ABC Education — Spelling Patterns",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education interactive spelling and word study activities.",
        },
        {
          title: "Starfall — Words",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall word building and reading activities.",
        },
      ],
    },
    activities: [
      {
        type: "sorting",
        title: "Sort the Suffix Words",
        instruction:
          "Read each word and sort it by its suffix into the correct column.",
        columns: ["-ness", "-ful", "-less"],
        items: [
          { label: "kindness" },
          { label: "joyful" },
          { label: "helpless" },
          { label: "darkness" },
          { label: "thankful" },
          { label: "careless" },
          { label: "happiness" },
          { label: "wonderful" },
          { label: "powerless" },
          { label: "sadness" },
          { label: "hopeful" },
          { label: "useless" },
        ],
      },
      {
        type: "open-response",
        title: "Add the Suffix and Explain",
        instruction:
          "Add the suffix shown to each base word. Write the new word and what it means. Watch out for spelling changes!",
        parentTip:
          "Remind your child that words ending in 'y' often change the 'y' to 'i' before adding a suffix (happy → happiness).",
        prompts: [
          { text: "kind + -ness = ___   Meaning: ___", type: "lines", lines: 1 },
          { text: "wonder + -ful = ___   Meaning: ___", type: "lines", lines: 1 },
          { text: "use + -less = ___   Meaning: ___", type: "lines", lines: 1 },
          { text: "happy + -ness = ___   Meaning: ___", type: "lines", lines: 1 },
          { text: "hope + -ful = ___   Meaning: ___", type: "lines", lines: 1 },
          { text: "thought + -less = ___   Meaning: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Word to Definition",
        instruction:
          "Draw a line from each word to its correct definition.",
        left: ["darkness", "wonderful", "careless", "joyful", "helpless"],
        right: [
          "full of joy and happiness",
          "unable to look after oneself",
          "the quality of being dark",
          "not paying enough attention",
          "causing feelings of wonder",
        ],
      },
      {
        type: "open-response",
        title: "Write Sentences Using Suffix Words",
        instruction:
          "Choose three words from the word bank and write a sentence for each. Underline the suffix in each word.\n\nWord bank: kindness, hopeful, careless, wonderful, darkness, useless, thankful, sadness",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 3: Expanded Noun Groups and Adverbs ─────────────────────
  {
    slug: "expanded-noun-groups-adverbs",
    title: "Expanded Noun Groups and Adverbs",
    strand: "Language",
    description:
      "Build rich, detailed sentences using expanded noun groups (adjectives + noun) and adverbs (words that describe verbs).",
    learningGuide: {
      concept:
        "An expanded noun group adds detail to a noun using adjectives and other describing words (e.g. 'the enormous, scaly green dragon' instead of 'the dragon'). An adverb adds detail to a verb — it tells us how, when or where something happened (e.g. 'she whispered softly', 'he ran quickly'). Together these make writing much more vivid.",
      activation:
        "Read a dull sentence: 'The dog ran.' Ask your child to describe the dog in detail. Write those adjectives before 'dog'. Then ask: how did it run? Add the adverb. Read the expanded version together and notice how much more interesting it is.",
      check:
        "Can your child identify an adverb in a sentence? Can they build an expanded noun group using at least two adjectives? Do their own sentences include both expanded noun groups and adverbs?",
    },
    lesson: {
      title: "Making Writing Vivid",
      objective:
        "Use expanded noun groups and adverbs to write richer, more descriptive sentences.",
      materials: [
        "Paper and pencil",
        "A short picture book or excerpt to use as a model",
        "Coloured pencils (optional — for underlining word groups)",
      ],
      intro: {
        title: "Zoom In on the Noun",
        script:
          "Good writers don't just say 'a dragon'. They say 'an enormous, fire-breathing, ancient dragon'. Each extra describing word zooms in and gives the reader a clearer picture. And they don't just say 'flew' — they say 'swooped suddenly' or 'glided silently'. Those extra words — adverbs — tell us HOW the action happened. Let me show you both.",
        action:
          "Read one page of a picture book aloud. Together find one expanded noun group and one adverb. Underline them. Discuss what each extra word adds to the picture in the reader's mind.",
      },
      mainActivity: {
        title: "Expand the Plain Sentence",
        script:
          "I am going to write some very plain, boring sentences. Your challenge is to add at least two adjectives to the noun group and one adverb to the verb to make each sentence really come alive. Think like a movie director — what does the reader need to see?",
        action:
          "Write these plain sentences on paper: 'A cat climbed.' / 'The bird called.' / 'A girl read.' / 'The boat sailed.' For each, child expands the noun group and adds an adverb. Read each new version aloud and compare to the original.",
      },
      wrapUp: {
        title: "Find Them in Your Writing",
        script:
          "Look at a piece of writing you have done recently — it could be anything. Can you find one place where you used a plain noun and could expand it? And one place where you could add an adverb? Let's try it!",
        action:
          "Retrieve a recent piece of writing. Together identify one noun and one verb that could be enhanced. Make the changes. Read the original and improved versions aloud.",
      },
      parentTip:
        "When your child writes, a quick and effective feedback technique is to circle every verb and ask: 'Can you add a word to tell me HOW that happened?' This encourages adverb use without overwhelming them. Similarly, circle every plain noun and ask: 'Can you describe it for me?' Children find this much easier than being asked to 'add describing words' abstractly.",
      extension:
        "Read a paragraph from a favourite book and identify all the expanded noun groups and adverbs the author used. Count how many there are. Discuss why the author chose those particular words. Then write a paragraph on a similar topic trying to match the richness of language.",
      resources: [
        {
          title: "Describing Words and Adverbs",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy language activities for grammar and descriptive writing.",
        },
        {
          title: "ABC Education — Writing",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education creative writing and grammar support for primary students.",
        },
        {
          title: "Starfall — Reading and Writing",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall activities supporting reading and descriptive writing.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Expand the Noun Group",
        instruction:
          "Add at least two adjectives before each noun to build an expanded noun group. Write the full expanded noun group.",
        parentTip:
          "Encourage your child to think about colour, size, texture, age or emotion when choosing adjectives.",
        prompts: [
          { text: "___ ___ dragon (expand the noun group)", type: "lines", lines: 1 },
          { text: "___ ___ river (expand the noun group)", type: "lines", lines: 1 },
          { text: "___ ___ cottage (expand the noun group)", type: "lines", lines: 1 },
          { text: "___ ___ storm (expand the noun group)", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Adverb",
        instruction:
          "Circle the adverb in each sentence.",
        questions: [
          { prompt: "She whispered softly into the quiet room.", options: ["whispered", "softly", "quiet"] },
          { prompt: "The cat crept silently toward the bird.", options: ["silently", "crept", "toward"] },
          { prompt: "He suddenly stopped at the top of the hill.", options: ["suddenly", "stopped", "top"] },
          { prompt: "The children played happily all afternoon.", options: ["children", "played", "happily"] },
        ],
      },
      {
        type: "open-response",
        title: "Expand These Plain Sentences",
        instruction:
          "Expand each plain sentence by adding an expanded noun group and an adverb. Underline the noun group and circle the adverb in your new sentence.",
        prompts: [
          { text: "Plain: A bird called.\nYour expanded sentence:", type: "lines", lines: 2 },
          { text: "Plain: The boat sailed.\nYour expanded sentence:", type: "lines", lines: 2 },
          { text: "Plain: A child laughed.\nYour expanded sentence:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write a Descriptive Paragraph",
        instruction:
          "Write a paragraph of 4-5 sentences describing a place you know or a made-up place. Include at least two expanded noun groups and two adverbs. Circle your adverbs and underline your expanded noun groups.",
        prompts: [
          { text: "Your paragraph:", type: "lines", lines: 6 },
        ],
      },
    ],
  },

  // ── WS 4: Apostrophes for Contractions ─────────────────────────
  {
    slug: "apostrophes-for-contractions",
    title: "Apostrophes for Contractions",
    strand: "Language",
    description:
      "Understand how apostrophes show where letters have been left out when two words are joined into a contraction.",
    learningGuide: {
      concept:
        "A contraction is two words squeezed together with an apostrophe replacing the missing letters. For example: 'do not' → 'don't' (the apostrophe replaces the 'o' in 'not'). 'I am' → 'I'm' (the apostrophe replaces the 'a'). Contractions are used in informal and spoken language.",
      activation:
        "Say 'I'm so hungry' aloud. Ask your child: what two words am I using there? Help them hear 'I am'. Then ask: what happened to the letter 'a'? Introduce the term 'contraction' — it contracted (got smaller)!",
      check:
        "Can your child write contractions correctly with the apostrophe in the right place? Can they expand a contraction back to its two original words?",
    },
    lesson: {
      title: "Words That Shrink",
      objective:
        "Read and write contractions, placing the apostrophe correctly to show missing letters.",
      materials: [
        "Paper and pencil",
        "Index cards for a matching game",
      ],
      intro: {
        title: "The Squeezing Trick",
        script:
          "In everyday talk, we often squeeze two words together to save time. 'I am going to the shops' becomes 'I'm going to the shops'. 'We are late' becomes 'We're late'. This squeezing is called a contraction — from the word 'contract', which means to shrink! The little comma-like mark on top — that is the apostrophe — shows where the letters went missing.",
        action:
          "Write 'do not' → 'don't' on paper. Circle the 'no' that disappeared and show where the apostrophe sits. Repeat with 'they are' → 'they're' and 'I will' → 'I'll'. Let the child mark where the missing letters were.",
      },
      mainActivity: {
        title: "Contract and Expand",
        script:
          "I am going to write some word pairs and some contractions. You need to match them up — which contraction belongs to which word pair? And can you write the missing one in each case?",
        action:
          "Write on cards: [I am / I'm], [cannot / can't], [would not / wouldn't], [she is / she's], [we will / we'll], [they have / they've]. Mix pairs up. Child matches them and practises writing both forms.",
      },
      wrapUp: {
        title: "Contraction Catch",
        script:
          "Let me read a few sentences that use contractions. Every time you hear one, clap your hands and tell me what the two original words are.",
        action:
          "Read 4-5 sentences aloud that each include a contraction. Child claps and expands each one. Celebrate quick recognition.",
      },
      parentTip:
        "A common error at this stage is confusing 'its' and 'it's'. 'It's' is the contraction for 'it is' (the apostrophe shows the missing 'i'). 'Its' is possessive (the dog wagged its tail — no apostrophe). If this confusion arises, try the substitution test: replace the word with 'it is' and see if the sentence still makes sense.",
      extension:
        "Read a few pages of a book together and keep a tally of contractions found. Can your child spot and expand every single one? Then write a dialogue between two characters using as many contractions as possible to make it sound natural and spoken.",
      resources: [
        {
          title: "Contractions and Apostrophes",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy English language activities covering apostrophes and contractions.",
        },
        {
          title: "ABC Education — Grammar",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education interactive grammar and punctuation resource.",
        },
        {
          title: "Starfall — Language Skills",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall language and reading activities.",
        },
      ],
    },
    activities: [
      {
        type: "matching",
        title: "Match the Contraction to Its Two Words",
        instruction:
          "Draw a line to match each contraction on the left to its two-word form on the right.",
        parentTip: "Ask your child to say the contraction aloud and then say the two full words to confirm the match.",
        left: ["I'm", "can't", "they're", "won't", "she's", "we'll"],
        right: [
          "she is",
          "they are",
          "we will",
          "I am",
          "will not",
          "cannot",
        ],
      },
      {
        type: "open-response",
        title: "Write the Contraction",
        instruction:
          "Write the contraction for each pair of words. Remember to put the apostrophe in the right place!",
        prompts: [
          { text: "do not → ___", type: "lines", lines: 1 },
          { text: "I will → ___", type: "lines", lines: 1 },
          { text: "they have → ___", type: "lines", lines: 1 },
          { text: "could not → ___", type: "lines", lines: 1 },
          { text: "we are → ___", type: "lines", lines: 1 },
          { text: "it is → ___", type: "lines", lines: 1 },
          { text: "he would → ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Form",
        instruction:
          "Circle the correct word or contraction to complete each sentence.",
        questions: [
          { prompt: "___ going to the beach today.", options: ["Were", "We're", "Wear"] },
          { prompt: "I ___ believe it snowed!", options: ["cant", "can't", "cant'"] },
          { prompt: "___ a beautiful day outside.", options: ["Its", "It's", "Its'"] },
          { prompt: "She said ___ be back soon.", options: ["shed", "she'd", "shee'd"] },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite Using Contractions",
        instruction:
          "Rewrite each sentence replacing the underlined words with a contraction.",
        prompts: [
          { text: "I am not going to eat my vegetables. →", type: "lines", lines: 2 },
          { text: "They are playing in the garden. →", type: "lines", lines: 2 },
          { text: "She will not be able to come. →", type: "lines", lines: 2 },
          { text: "We have been waiting for an hour. →", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 5: Making Inferences ─────────────────────────────────────
  {
    slug: "reading-comprehension-inference",
    title: "Reading Comprehension: Making Inferences",
    strand: "Literacy",
    description:
      "Move beyond literal comprehension to make inferences — read between the lines to understand what is implied rather than directly stated.",
    learningGuide: {
      concept:
        "An inference is a conclusion we draw from clues in the text plus our own knowledge. Authors do not always tell us everything directly — sometimes we have to 'read between the lines'. A good reader asks: 'What does this tell me that is not directly written?' Inference skills are critical for understanding complex texts.",
      activation:
        "Say: 'Jana put on her boots and grabbed her umbrella.' Ask your child: what is the weather like? How do they know? The text never says 'it is raining' — they inferred it from the clues. That is inference!",
      check:
        "Can your child explain their inference and point to the text clue that supports it? Can they distinguish between an inference and a direct statement from the text?",
    },
    lesson: {
      title: "Reading Between the Lines",
      objective:
        "Make inferences from a text and explain the evidence that supports them.",
      materials: [
        "Paper and pencil",
        "A short picture book or the passage on this worksheet",
      ],
      intro: {
        title: "The Clue Detective",
        script:
          "Authors leave us clues — like a detective's trail of footprints. We read those clues and use our own knowledge to work out things the author never actually said. Let me give you a clue: 'The boy's cheeks were red and tears streamed down his face.' The author never said he was sad or crying. But what do you think? How do you know? That is what we call making an inference — using clues to figure something out.",
        action:
          "Give two or three short 'clue' sentences. For each, ask: 'What can you infer? What clue tells you that?' Practise distinguishing between 'the text says' and 'I can infer'. This is an important vocabulary distinction.",
      },
      mainActivity: {
        title: "Read and Infer",
        script:
          "Now we are going to read a longer passage together. As we go, I want you to look for clues that tell you things that are not written directly. When you spot one, put a small dot in the margin. Then after we finish reading, we will go back and talk about what we inferred from those clues.",
        action:
          "Read the passage on the worksheet together. Child marks inference clues with dots. After reading, discuss each one: 'What did you infer here? What is the clue in the text?' Record answers together.",
      },
      wrapUp: {
        title: "Prove It",
        script:
          "The most important part of making an inference is being able to PROVE it. A good reader never just says 'I think the character was scared.' They say 'I think the character was scared BECAUSE the text says ___.' Let's practise doing that for everything we inferred today.",
        action:
          "Go back over each inference. Practise the sentence frame: 'I can infer ___ because the text says ___.' Write 2-3 of these together.",
      },
      parentTip:
        "Inference is one of the trickiest comprehension skills and requires time to develop. The best everyday practice is talking about books as you read them — ask 'Why do you think the character did that?' and 'How do you think they felt?' whenever you read together. These conversations build inference skill naturally over months.",
      extension:
        "Play 'Inference Theatre': describe a scene without naming the emotion or situation, and your child must infer what is happening. For example: 'She stared at the paper in her hands. Her shoulders dropped. She folded it slowly and put it in her pocket.' What has just happened? How does she feel? What was on the paper? No answer is wrong — the discussion itself is the learning.",
      resources: [
        {
          title: "Making Inferences",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy reading comprehension including inference activities for primary students.",
        },
        {
          title: "ABC Education — Reading Comprehension",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education reading and comprehension activities.",
        },
        {
          title: "Starfall — Reading Stories",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall reading activities for building comprehension skills.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Read and Infer",
        instruction:
          "Read the passage below and answer the questions. For each inference question, write the clue from the text that helped you.\n\n--- PASSAGE ---\nLeo stepped out of the car and pulled his coat tighter. The street was empty. The shop windows were dark. He could see his breath rising in small clouds. His boots crunched on something underfoot as he made his way toward the faint glow at the end of the street. The closer he got, the more he could smell something warm and sweet drifting through the cold air. He smiled for the first time all day.",
        parentTip:
          "For inference questions, remind your child to use the sentence frame: 'I can infer ___ because the text says ___.'",
        prompts: [
          { text: "What time of day do you think it is? What clue tells you?", type: "lines", lines: 3 },
          { text: "What is the weather like? What text clues tell you?", type: "lines", lines: 3 },
          { text: "How is Leo feeling at the start? How does this change? What clues tell you?", type: "lines", lines: 3 },
          { text: "Where do you think Leo is heading? Why do you think this?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Direct Statement or Inference?",
        instruction:
          "Read each statement about the passage. Decide if it is directly stated in the text (D) or if you have to infer it (I). Circle your answer.",
        questions: [
          {
            prompt: "Leo's coat was pulled tight.",
            options: ["Directly stated (D)", "Inference (I)"],
          },
          {
            prompt: "It is cold outside.",
            options: ["Directly stated (D)", "Inference (I)"],
          },
          {
            prompt: "Leo has had a difficult day.",
            options: ["Directly stated (D)", "Inference (I)"],
          },
          {
            prompt: "Leo could see his breath.",
            options: ["Directly stated (D)", "Inference (I)"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Prove Your Inference",
        instruction:
          "Complete the sentence frames below to practise explaining your inferences with evidence.",
        prompts: [
          {
            text: "I can infer that Leo was feeling ___ because the text says '___'.",
            type: "lines",
            lines: 2,
          },
          {
            text: "I can infer that the setting is ___ because the text says '___'.",
            type: "lines",
            lines: 2,
          },
          {
            text: "I can infer that the 'faint glow' might be ___ because ___.",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Inference in Everyday Reading",
        instruction:
          "Practise making inferences every time you read or watch something this week.",
        parentTip:
          "After a chapter of a read-aloud book, pause and ask: 'What do you think is going to happen next? What clues make you think that?' This forward-inference (predicting) is one of the most powerful comprehension strategies.",
        suggestions: [
          "After reading a page, ask: 'How is the character feeling? How do you know?'",
          "When watching a film, pause and ask: 'What do you think will happen next and why?'",
          "Find one inference clue in a book today and write it in a notebook",
          "Draw a scene from a book that is described but not shown as an illustration",
        ],
      },
    ],
  },

  // ── WS 6: Writing a Recount ─────────────────────────────────────
  {
    slug: "writing-a-recount",
    title: "Writing a Recount",
    strand: "Literacy",
    description:
      "Plan and write a personal recount — a text that retells events in the order they happened — using time connectives and first person.",
    learningGuide: {
      concept:
        "A recount retells events that have already happened, in the order they occurred. It is written in the first person (I, we), in past tense, and uses time connectives (first, then, next, after that, finally) to link events. A recount has: an orientation (who, when, where), a series of events, and a personal reflection at the end.",
      activation:
        "Ask your child to tell you about something they did recently — a trip, a meal, a game. As they speak, say: 'That's a recount! You're telling me what happened, in order, using 'I'. Today we're going to write one properly.'",
      check:
        "Does the recount have an orientation, sequenced events with time connectives, and a personal reaction at the end? Is it written in first person and past tense consistently?",
    },
    lesson: {
      title: "Tell What Happened",
      objective:
        "Write a personal recount with an orientation, sequenced events and a personal reflection.",
      materials: [
        "Paper and pencil",
        "A list of time connectives written on a strip of paper for reference: First, Then, Next, After that, Finally, Later",
      ],
      intro: {
        title: "What Is a Recount?",
        script:
          "Have you ever told a friend about something exciting that happened? You say things like 'First we went to...' and 'Then we saw...' and 'Finally we got home!' That is a recount — you are retelling real events in the order they happened. Today we are going to write a proper recount with a beginning, a series of events using time connectives, and a personal reaction at the end.",
        action:
          "Show your child the strip of time connectives. Together, orally recount a shared experience using each one in order. This oral rehearsal is crucial before writing.",
      },
      mainActivity: {
        title: "Plan and Write",
        script:
          "Before we write, let's make a quick plan. Just dot points — not full sentences yet. First: who was there, when was it, where did it happen? Then: what are the three or four key events in order? And finally: how did you feel about the whole experience?",
        action:
          "Child creates a simple dot-point plan. Then writes the recount using the plan as a guide, incorporating time connectives from the reference strip. Encourage past tense and first person throughout.",
      },
      wrapUp: {
        title: "Read and Revise",
        script:
          "Read your recount back to me. As you read, listen for: Are all your verbs in past tense? Did you use time connectives? And — most importantly — does it sound like you? Does your personality come through?",
        action:
          "Child reads aloud. Together identify one place to improve a time connective and one place where they could add a personal feeling or reaction. Make those two changes.",
      },
      parentTip:
        "Children often write recounts in an endless list: 'Then we did this. Then we did this. Then we did this.' Teach them that not every moment needs to be included — only the most interesting or important ones. Ask: 'If you could only tell me three things about that day, what would they be?' This builds selectivity, which is a key writing skill.",
      extension:
        "After writing, encourage your child to add a header with the date and location of the event — this is how many professional recounts (journals, memoirs, news reports) begin. Then ask: could this be turned into a third-person report? How would the language change?",
      resources: [
        {
          title: "Writing Recounts",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy writing activities for primary level.",
        },
        {
          title: "ABC Education — Text Types",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education resource covering different text types including recounts.",
        },
        {
          title: "Starfall — Writing",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall reading and writing support activities.",
        },
      ],
    },
    activities: [
      {
        type: "sequence",
        title: "Put the Recount Events in Order",
        instruction:
          "Number these recount events in the correct time order (1–5).",
        parentTip: "Remind your child that recounts always retell events in the order they happened.",
        items: [
          { label: "Finally, we drove home and I fell asleep in the car." },
          { label: "First, we packed our lunch and drove to the national park." },
          { label: "After that, we found a perfect spot by the creek to eat our sandwiches." },
          { label: "Then, we hiked along the bush trail for over an hour." },
          { label: "Next, we spotted a lizard on a warm rock and took lots of photos." },
        ],
      },
      {
        type: "open-response",
        title: "Plan Your Recount",
        instruction:
          "Choose something you have done recently. Fill in the plan below using dot points.",
        prompts: [
          { text: "ORIENTATION — Who? When? Where?", type: "lines", lines: 2 },
          { text: "EVENT 1 (with time connective 'First...')", type: "lines", lines: 2 },
          { text: "EVENT 2 (with time connective 'Then...' or 'Next...')", type: "lines", lines: 2 },
          { text: "EVENT 3 (with time connective 'After that...')", type: "lines", lines: 2 },
          { text: "REFLECTION — How did you feel? What was the best part?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Recount",
        instruction:
          "Use your plan to write your full recount. Write in first person (I, we) and past tense. Use time connectives from this list: First, Then, Next, After that, Finally, Later, Eventually.",
        prompts: [
          { text: "Title:", type: "lines", lines: 1 },
          { text: "Orientation (who, when, where):", type: "lines", lines: 3 },
          { text: "Events (use time connectives):", type: "lines", lines: 6 },
          { text: "Reflection (how did you feel? what was the best part?):", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Recount Journal",
        instruction:
          "Keep a simple recount journal this week — write one short recount (3-5 sentences) each day about something that happened.",
        parentTip:
          "A shared journal that both you and your child contribute to is a lovely way to model recount writing naturally. Write your own entry each day and let them read yours — seeing a parent as a writer is powerful motivation.",
        suggestions: [
          "Write a 3-5 sentence recount of today using at least two time connectives",
          "Illustrate one event from today's recount",
          "Re-read yesterday's recount and add one more detail you forgot to include",
          "Share your recount at dinner and ask the family if they remember it differently",
        ],
      },
    ],
  },

  // ── WS 7: Commas in Lists ───────────────────────────────────────
  {
    slug: "commas-in-lists",
    title: "Commas in Lists",
    strand: "Language",
    description:
      "Use commas correctly to separate items in a list, understanding when commas replace the word 'and'.",
    learningGuide: {
      concept:
        "Commas separate items in a list so the reader does not get confused. In a list of three or more items, we use commas between all items except the last two, which are joined with 'and' (or 'or'). For example: 'I need a pencil, a ruler, an eraser and some paper.' In Australian English the Oxford comma is optional but consistency is key.",
      activation:
        "Ask your child what they would pack for a camping trip. When they list items, count how many times they say 'and'. Then show them how commas can replace most of those 'ands' to make the sentence flow better.",
      check:
        "Can your child write a list of 4+ items using commas correctly, with 'and' only before the last item? Can they identify missing or misplaced commas in example sentences?",
    },
    lesson: {
      title: "The List Comma",
      objective:
        "Use commas to separate items in a list of three or more in a sentence.",
      materials: [
        "Paper and pencil",
        "A food magazine, catalogue or recipe (for a real-world list)",
      ],
      intro: {
        title: "When and Gets Crowded",
        script:
          "Imagine you have to tell someone everything you did today, and you put 'and' between every single thing: 'I woke up and I had breakfast and I brushed my teeth and I got dressed and I...' — that gets exhausting very quickly! Commas solve this problem. Instead of all those 'ands', we use commas to separate a list, and only use 'and' before the very last item. Let me show you.",
        action:
          "Write a list sentence without commas (overusing 'and'), then rewrite it with commas. Read both versions aloud and notice how much cleaner the second sounds.",
      },
      mainActivity: {
        title: "Comma Practice",
        script:
          "Now you are going to try it. I am going to give you some lists in brackets, and you need to write them as a proper sentence with commas in all the right places. Remember: commas between each item, and 'and' before the last one only.",
        action:
          "Work through 3-4 list examples together. Let the child write the sentences. Check the comma placement together. Then find a real list (e.g. in a recipe or magazine) and see if commas are used correctly there.",
      },
      wrapUp: {
        title: "Edit the Sentence",
        script:
          "Here are some sentences where the commas are wrong or missing. Can you find the mistake and fix it?",
        action:
          "Provide 2-3 sentences with comma errors (missing commas, comma before 'and' in wrong place). Child identifies and corrects errors.",
      },
      parentTip:
        "Point out lists in any text you read together — menus, recipes, shopping lists converted into sentences, newspaper articles. Seeing commas in real-world contexts helps children understand that punctuation exists to serve the reader, not to make life hard.",
      extension:
        "Ask your child to write a menu for an imaginary restaurant with at least three items in each category (entrees, mains, desserts). Each category must be written as a sentence using commas. Then they can design the menu with illustrations.",
      resources: [
        {
          title: "Commas and Punctuation",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy English grammar activities covering punctuation.",
        },
        {
          title: "ABC Education — Punctuation",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education interactive punctuation activities.",
        },
        {
          title: "Starfall — Language Arts",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall language arts activities for primary learners.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Add the Commas",
        instruction:
          "Rewrite each sentence, adding commas in the correct places to separate the list items.",
        parentTip:
          "Say the sentence aloud and listen for the natural pauses — that is where the commas go.",
        prompts: [
          {
            text: "She packed a hat a towel sunscreen and a book.\nCorrected:",
            type: "lines",
            lines: 2,
          },
          {
            text: "He bought apples bananas oranges and grapes.\nCorrected:",
            type: "lines",
            lines: 2,
          },
          {
            text: "The classroom had desks chairs a whiteboard a bookshelf and a globe.\nCorrected:",
            type: "lines",
            lines: 2,
          },
          {
            text: "For dinner we had soup bread salad and pasta.\nCorrected:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Sentence Uses Commas Correctly?",
        instruction:
          "Circle the sentence that uses commas correctly.",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: [
              "I have a pencil, ruler, and, eraser.",
              "I have a pencil, a ruler and an eraser.",
              "I have a pencil a ruler and an eraser.",
            ],
          },
          {
            prompt: "Which sentence is correct?",
            options: [
              "She likes swimming, running cycling and, hiking.",
              "She likes swimming running cycling and hiking.",
              "She likes swimming, running, cycling and hiking.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own List Sentences",
        instruction:
          "Write a sentence that uses a list (at least four items) for each topic below. Use commas correctly!",
        prompts: [
          { text: "Things you might find in a school bag:", type: "lines", lines: 2 },
          { text: "Animals you might see at a zoo:", type: "lines", lines: 2 },
          { text: "Foods you enjoy eating:", type: "lines", lines: 2 },
          { text: "Things you can see outside your window:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Comma Spotting",
        instruction:
          "Go hunting for lists in real texts — books, cereal boxes, recipes, brochures.",
        suggestions: [
          "Find a sentence with a list in a book or magazine and copy it out",
          "Write a shopping list as a proper sentence with commas",
          "Create a menu for tonight's dinner using commas in list sentences",
          "Write a list of everything you can see in one room of your home",
        ],
      },
    ],
  },
];

export function getYear3EnglishWorksheet(
  slug: string
): WorksheetItem | undefined {
  return year3EnglishWorksheets.find((w) => w.slug === slug);
}
