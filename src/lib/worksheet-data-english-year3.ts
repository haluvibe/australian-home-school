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
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
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
        type: "sorting",
        title: "Sort by Prefix",
        instruction:
          "Sort these words into the correct column based on their prefix.",
        parentTip: "Say each word aloud and listen to the beginning — 'un' sounds like 'un' and 're' sounds like 'ree'.",
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
        type: "circle-correct",
        title: "Which Prefix Fits?",
        instruction:
          "Circle the correct prefix to make a real word.",
        parentTip: "Try both prefixes out loud before circling — the one that makes a real word is the answer.",
        questions: [
          { prompt: "___ + happy = ___happy", options: ["un-", "re-"] },
          { prompt: "___ + write = ___write", options: ["un-", "re-"] },
          { prompt: "___ + lock = ___lock (to open a lock)", options: ["un-", "re-"] },
          { prompt: "___ + build = ___build (build again)", options: ["un-", "re-"] },
          { prompt: "___ + kind = ___kind (not kind)", options: ["un-", "re-"] },
          { prompt: "___ + fill = ___fill (fill again)", options: ["un-", "re-"] },
        ],
      },
      {
        type: "matching",
        title: "Contraction or Prefix?",
        instruction:
          "Draw a line to match each base word to the correct prefixed word.",
        left: ["do", "pack", "load", "tell", "cover"],
        right: ["redo", "unpack", "reload", "retell", "uncover"],
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
        title: "Real Word or Not a Word?",
        instruction:
          "Sort each made-up or real word into the correct column.",
        parentTip: "A 'real word' is one you would find in a dictionary. Help your child test each one by asking: does this make sense in a sentence?",
        columns: ["Real word", "Not a real word"],
        items: [
          { label: "unhappy" },
          { label: "unswim" },
          { label: "reread" },
          { label: "rehappy" },
          { label: "unkind" },
          { label: "refast" },
          { label: "rebuild" },
          { label: "ungo" },
        ],
      },
      {
        type: "circle-correct",
        title: "What Does It Mean?",
        instruction:
          "Circle the correct meaning for each word.",
        questions: [
          { prompt: "unhappy", options: ["very happy", "not happy", "happy again"] },
          { prompt: "reread", options: ["read slowly", "read again", "not reading"] },
          { prompt: "unkind", options: ["kind again", "very kind", "not kind"] },
          { prompt: "reload", options: ["load again", "not loading", "unload quickly"] },
        ],
      },
      {
        type: "open-response",
        title: "Spot the Base Word",
        instruction:
          "Underline the base word in each prefixed word. Then write the base word on the line.",
        parentTip: "Explain: the base word is the main word before the prefix was added.",
        prompts: [
          { text: "unfinished → base word: ___", type: "lines", lines: 1 },
          { text: "replay → base word: ___", type: "lines", lines: 1 },
          { text: "unknown → base word: ___", type: "lines", lines: 1 },
          { text: "recycle → base word: ___", type: "lines", lines: 1 },
          { text: "untidy → base word: ___", type: "lines", lines: 1 },
          { text: "refill → base word: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Sentence to Missing Word",
        instruction:
          "Draw a line to match each sentence to the word that best completes it.",
        parentTip: "Read each sentence with the missing word slot and try each option aloud before matching.",
        left: [
          "The dog was ___ after digging up the garden.",
          "Can you ___ this bottle with water?",
          "She felt ___ when she lost her favourite toy.",
          "He had to ___ his homework because it was messy.",
          "The jar was ___ — nothing inside at all.",
        ],
        right: ["refill", "redo", "unhappy", "untidy", "empty"],
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
        type: "sorting",
        title: "Sort: un- Means 'Not' vs re- Means 'Again'",
        instruction:
          "Sort each word into the correct column based on what the prefix means.",
        columns: ["un- = not/opposite", "re- = again"],
        items: [
          { label: "unkind" },
          { label: "rewrite" },
          { label: "unable" },
          { label: "retell" },
          { label: "untrue" },
          { label: "renew" },
          { label: "unfair" },
          { label: "reheat" },
          { label: "unwell" },
          { label: "reuse" },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Right Word",
        instruction:
          "Circle the word that best completes each sentence.",
        parentTip: "Read the whole sentence first, then try each option to see which sounds right.",
        questions: [
          {
            prompt: "The teacher asked us to ___ our work after making mistakes.",
            options: ["undo", "redo", "undo"],
          },
          {
            prompt: "The door was ___ so nobody could get in.",
            options: ["locked", "unlocked", "relocked"],
          },
          {
            prompt: "The story was so good I wanted to ___ it straight away.",
            options: ["reread", "unread", "misread"],
          },
          {
            prompt: "It was ___ of him to take the last piece without asking.",
            options: ["unkind", "rekind", "unkinder"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Add un- or re- and Use in a Sentence",
        instruction:
          "Add un- or re- to make a real word, then use it in a sentence.",
        parentTip: "Check the new word makes sense before writing the sentence.",
        prompts: [
          { text: "tie → ___tie  Sentence: ___", type: "lines", lines: 2 },
          { text: "build → ___build  Sentence: ___", type: "lines", lines: 2 },
          { text: "sure → ___sure  Sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sequence",
        title: "Put the Word-Building Steps in Order",
        instruction:
          "Number the steps 1–4 to show how to build a prefixed word correctly.",
        parentTip: "Talk through each step with your child to reinforce the process.",
        items: [
          { label: "Check the new word is a real word that makes sense." },
          { label: "Write the prefix (un- or re-) in front of the base word." },
          { label: "Choose a base word (e.g. happy, write, kind)." },
          { label: "Write a sentence using the new word." },
        ],
      },
      {
        type: "matching",
        title: "Match: Prefixed Word to Its Two Parts",
        instruction:
          "Draw a line to match each prefixed word to the way it was made.",
        left: ["unhappy", "rewrite", "unkind", "replay", "uncover"],
        right: ["re- + play", "un- + happy", "re- + write", "un- + cover", "un- + kind"],
      },
      {
        type: "open-response",
        title: "What Does un- Do to These Words?",
        instruction:
          "Read the base word and its meaning. Then add un- and write the new meaning.",
        prompts: [
          { text: "safe (free from danger) → unsafe: ___", type: "lines", lines: 1 },
          { text: "well (feeling healthy) → unwell: ___", type: "lines", lines: 1 },
          { text: "true (correct) → untrue: ___", type: "lines", lines: 1 },
          { text: "fair (treating people equally) → unfair: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: How Prefixes Work",
        instruction:
          "A prefix is a group of letters added to the BEGINNING of a word. 'Un-' means NOT or the opposite. 'Re-' means AGAIN. When you see a long word, look at the beginning first — does it start with un- or re-? If so, you can often work out the meaning straight away!",
        suggestions: [
          "Write un- in red and re- in blue on a card and stick it near your workspace",
          "When you read today, tap the page every time you spot an un- or re- word",
          "Say the base word first, then add the prefix aloud — hear how the meaning changes",
          "Ask a family member: what does 'redo' mean? What about 'undo'?",
        ],
      },
      {
        type: "circle-correct",
        title: "True or False?",
        instruction:
          "Read each statement. Circle TRUE or FALSE.",
        parentTip: "Ask your child to explain their answer — not just circle.",
        questions: [
          { prompt: "'Un-' always means 'again'.", options: ["TRUE", "FALSE"] },
          { prompt: "'Rewrite' means to write again.", options: ["TRUE", "FALSE"] },
          { prompt: "'Unhappy' means very happy.", options: ["TRUE", "FALSE"] },
          { prompt: "Prefixes are added to the beginning of a word.", options: ["TRUE", "FALSE"] },
          { prompt: "'Replay' means to play again.", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Prefix Examples",
        instruction:
          "Think of two base words that work with un- and two that work with re-. Write the new words and their meanings.",
        parentTip: "Encourage your child to think beyond the word list — test new words themselves.",
        prompts: [
          { text: "un- + ___ = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "un- + ___ = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "re- + ___ = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "re- + ___ = ___  Meaning: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort the Sentence Halves",
        instruction:
          "Match the beginning of each sentence (left) to the correct ending (right) by writing the letter.",
        parentTip: "Read all the endings before deciding — more than one might seem to fit at first.",
        columns: ["Sentence beginning", "Sentence ending"],
        items: [
          { label: "A. The baby was unhappy because…" },
          { label: "B. She had to redo her painting because…" },
          { label: "C. The path was unknown so…" },
          { label: "D. He decided to reread the chapter because…" },
          { label: "1. …it had spilled on the floor." },
          { label: "2. …nobody had ever walked there before." },
          { label: "3. …he had forgotten the details." },
          { label: "4. …she had not been fed yet." },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Prefix Scavenger Hunt",
        instruction:
          "Go on a prefix scavenger hunt around your home and neighbourhood this week!",
        parentTip: "Make it competitive — whoever finds the most un- and re- words in 10 minutes wins!",
        suggestions: [
          "Find 3 words with un- in a book, magazine or food packet",
          "Find 3 words with re- on signs, packaging or instructions",
          "Write each word found in a 'Word Parts' notebook",
          "Choose your favourite word found and use it in a sentence at dinner",
          "Draw a picture that illustrates one un- word and one re- word",
        ],
      },

      // ── DEVELOPING (21–50) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Words That Work with Both Prefixes",
        instruction:
          "Some base words can take BOTH un- and re-. Write both new words and explain how their meanings differ.",
        parentTip: "This is a higher-order task — let your child try without help first.",
        prompts: [
          { text: "Base: read → un+read = ___  re+read = ___  How are they different?", type: "lines", lines: 2 },
          { text: "Base: do → un+do = ___  re+do = ___  How are they different?", type: "lines", lines: 2 },
          { text: "Base: load → un+load = ___  re+load = ___  How are they different?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Base Word Type",
        instruction:
          "Sort the prefixed words by the type of base word they contain.",
        parentTip: "Discuss: verbs are action words (run, write), adjectives are describing words (kind, happy).",
        columns: ["Base word is a verb (action)", "Base word is an adjective (description)"],
        items: [
          { label: "rewrite" },
          { label: "unhappy" },
          { label: "rebuild" },
          { label: "unkind" },
          { label: "replay" },
          { label: "unfair" },
          { label: "refill" },
          { label: "untidy" },
          { label: "reuse" },
          { label: "unsafe" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Sentence Uses the Word Correctly?",
        instruction:
          "Circle the sentence that uses the underlined word correctly.",
        parentTip: "Read both sentences aloud together before deciding.",
        questions: [
          {
            prompt: "unkind",
            options: [
              "She was unkind to share her lunch with everyone.",
              "He was unkind when he laughed at his friend's mistake.",
            ],
          },
          {
            prompt: "reread",
            options: [
              "I reread the book to understand it better.",
              "I reread the book and that was the first time I saw it.",
            ],
          },
          {
            prompt: "rebuild",
            options: [
              "They will rebuild the sandcastle that the wave knocked over.",
              "They will rebuild the brand new house before it is finished.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Change the Meaning with a Prefix",
        instruction:
          "Each sentence has a word in brackets. Add un- or re- to change the meaning, then rewrite the sentence.",
        prompts: [
          { text: "The work was [finished], so we went home early. → Rewrite: ___", type: "lines", lines: 2 },
          { text: "She [filled] the empty glass with water. → Rewrite: ___", type: "lines", lines: 2 },
          { text: "The path through the forest was [known]. → Rewrite: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match the Opposite",
        instruction:
          "Draw a line to match each word to its un- opposite.",
        parentTip: "Check: the un- word should mean the opposite, not just 'again'.",
        left: ["happy", "kind", "safe", "tidy", "fair"],
        right: ["unfair", "unkind", "untidy", "unsafe", "unhappy"],
      },
      {
        type: "open-response",
        title: "Use Context to Work Out Meaning",
        instruction:
          "Read each sentence. Use context clues to write what the bold word means.",
        parentTip: "Context clues are the other words in the sentence that give hints about meaning.",
        prompts: [
          { text: "The road was __uneven__, with holes and bumps everywhere.  Meaning: ___", type: "lines", lines: 1 },
          { text: "After the fire, they had to __reconstruct__ the entire building.  Meaning: ___", type: "lines", lines: 1 },
          { text: "The treasure map showed a path through __unexplored__ jungle.  Meaning: ___", type: "lines", lines: 1 },
          { text: "She decided to __reconsider__ her answer before handing in the test.  Meaning: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Does un- Mean 'not' or 'reverse the action'?",
        instruction:
          "Un- can mean 'not' (unhappy = not happy) OR it can reverse an action (unlock = reverse locking). Sort each word.",
        parentTip: "This is a subtle distinction — discuss each word together.",
        columns: ["un- = not", "un- = reverse the action"],
        items: [
          { label: "unhappy" },
          { label: "unlock" },
          { label: "unkind" },
          { label: "untie" },
          { label: "unfair" },
          { label: "unpack" },
          { label: "unsure" },
          { label: "unzip" },
        ],
      },
      {
        type: "open-response",
        title: "Prefix Word Web",
        instruction:
          "Choose one base word that works with BOTH un- and re-. Write it in the centre. Add the un- word to the left, the re- word to the right. Write a sentence for each.",
        prompts: [
          { text: "Base word chosen: ___", type: "lines", lines: 1 },
          { text: "un- + base = ___   Sentence: ___", type: "lines", lines: 2 },
          { text: "re- + base = ___   Sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Pick the Best Word",
        instruction:
          "Circle the word that best fills the gap in each sentence.",
        questions: [
          {
            prompt: "The athlete trained hard to ___ the world record.",
            options: ["rebreak", "unbreak", "break"],
          },
          {
            prompt: "It was ___ of her not to say thank you.",
            options: ["ungrateful", "regrateful", "gratefully"],
          },
          {
            prompt: "We had to ___ the tent and pack it away.",
            options: ["retent", "unfold", "untent"],
          },
          {
            prompt: "He could ___ the chapter whenever he forgot the details.",
            options: ["reread", "unread", "deread"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write About a Character",
        instruction:
          "Write 3–4 sentences about a character who is unkind but later becomes kind again. Use at least one un- word and one re- word.",
        parentTip: "Prompt: What did the character do that was unkind? What made them change? How did they redo or repair the situation?",
        prompts: [
          { text: "Your sentences:", type: "lines", lines: 5 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Testing New Prefix Words",
        instruction:
          "Not every base word works with un- or re-! Here is how to test: say the new word aloud, use it in a sentence, and ask — does this make sense? Would a real person say this?",
        suggestions: [
          "Test: does 'unrun' make sense? What about 'rerun'?",
          "Test: does 'unheat' work? What about 'reheat'?",
          "Test: does 'unswim' work? Explain why or why not",
          "Write 3 words you tested and explain which worked and which didn't",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Longer Prefix Words",
        instruction:
          "Sort these longer words into the correct prefix column.",
        parentTip: "These are longer words — help your child find the prefix at the front and the base word behind it.",
        columns: ["un-", "re-"],
        items: [
          { label: "unexpected" },
          { label: "rearrange" },
          { label: "uncomfortable" },
          { label: "reconsider" },
          { label: "unnecessary" },
          { label: "reconstruct" },
          { label: "unpleasant" },
          { label: "reappear" },
          { label: "unreliable" },
          { label: "reorganise" },
        ],
      },
      {
        type: "open-response",
        title: "Decode Longer Words",
        instruction:
          "Each word below is long and tricky. Underline the prefix, circle the base word, and write the meaning.",
        prompts: [
          { text: "unexpected → prefix: ___  base: ___  meaning: ___", type: "lines", lines: 1 },
          { text: "rearrange → prefix: ___  base: ___  meaning: ___", type: "lines", lines: 1 },
          { text: "uncomfortable → prefix: ___  base: ___  meaning: ___", type: "lines", lines: 1 },
          { text: "reconsider → prefix: ___  base: ___  meaning: ___", type: "lines", lines: 1 },
          { text: "unreliable → prefix: ___  base: ___  meaning: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match the Long Word to Its Meaning",
        instruction:
          "Draw a line to match each longer word to its meaning.",
        left: ["unexpected", "rearrange", "uncomfortable", "reconsider", "reorganise"],
        right: [
          "put in a different order again",
          "think about again",
          "not feeling at ease",
          "sort or order again",
          "not thought of before; surprising",
        ],
      },
      {
        type: "circle-correct",
        title: "Prefix or Not?",
        instruction:
          "Some words look like they have a prefix but don't — the letters are just part of the word. Circle whether each word has a real prefix.",
        parentTip: "Try removing the prefix — does a real base word remain? 'uncle' → 'cle'? No — so 'un-' is not a prefix here.",
        questions: [
          { prompt: "uncle — does it have the un- prefix?", options: ["Yes, prefix = un-", "No, un- is part of the root"] },
          { prompt: "unkind — does it have the un- prefix?", options: ["Yes, prefix = un-", "No, un- is part of the root"] },
          { prompt: "ready — does it have the re- prefix?", options: ["Yes, prefix = re-", "No, re- is part of the root"] },
          { prompt: "reread — does it have the re- prefix?", options: ["Yes, prefix = re-", "No, re- is part of the root"] },
          { prompt: "reef — does it have the re- prefix?", options: ["Yes, prefix = re-", "No, re- is part of the root"] },
        ],
      },
      {
        type: "open-response",
        title: "Paragraph Using Prefix Words",
        instruction:
          "Write a paragraph of 4–5 sentences about a time something went wrong and had to be done again. Use at least three words with un- or re-.",
        parentTip: "Suggest topics: a game that was restarted, a drawing that was redone, a plan that was changed unexpectedly.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 6 },
          { text: "Prefix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Prefix Story Map",
        instruction:
          "Create a short illustrated story map where the main character has to UNDO something and then REDO it better.",
        parentTip: "Story maps are great for planning before writing. Help your child draw 4–6 boxes showing the story sequence.",
        suggestions: [
          "Draw 4–6 story boxes showing the sequence of events",
          "Include at least one un- word and one re- word as labels in your map",
          "Write a one-sentence caption under each box",
          "Share your story map with a family member and tell the story aloud",
          "Turn the story map into a written story if time allows",
        ],
      },
      {
        type: "matching",
        title: "Match the Word to the Right Sentence",
        instruction:
          "Draw a line to match each word to the sentence it best fits.",
        parentTip: "Each word fits only one sentence — read all sentences before matching.",
        left: ["unpack", "rebuild", "unkind", "replay", "unexpected"],
        right: [
          "The surprise party was completely ___ — nobody knew about it.",
          "After the flood, the town worked together to ___ the bridge.",
          "They watched the ___ of the match to see where the goal was scored.",
          "Please ___ your suitcase and put your clothes away.",
          "It was ___ to leave without saying goodbye.",
        ],
      },
      {
        type: "open-response",
        title: "Explain to a Younger Child",
        instruction:
          "Imagine you are teaching a Year 1 student about prefixes. Write an explanation using simple language and two examples.",
        prompts: [
          { text: "My explanation of what un- means:", type: "lines", lines: 3 },
          { text: "My explanation of what re- means:", type: "lines", lines: 3 },
          { text: "My two examples: ___ and ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Meaning Change",
        instruction:
          "Sort each pair into the correct column.",
        columns: ["un- reverses the meaning", "re- repeats the action"],
        items: [
          { label: "happy → unhappy" },
          { label: "write → rewrite" },
          { label: "tidy → untidy" },
          { label: "build → rebuild" },
          { label: "kind → unkind" },
          { label: "heat → reheat" },
          { label: "safe → unsafe" },
          { label: "fill → refill" },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Prefix Awareness in Reading",
        instruction:
          "Every time you read this week, pause when you see a long word and ask: does it have a prefix? Strip the prefix off and see if you know the base word. This is one of the most powerful reading strategies for Year 3!",
        suggestions: [
          "Mark two prefix words you find in your reading today",
          "Write them in your word notebook with their meanings",
          "Try to use one in your writing today",
          "Tell a family member one new prefix word you found",
        ],
      },

      // ── CONSOLIDATING (51–80) ─────────────────────────────────────
      {
        type: "open-response",
        title: "Write a Dialogue Using Prefix Words",
        instruction:
          "Write a short conversation (dialogue) between two characters. Include at least four words with un- or re-. Remember to use speech marks.",
        parentTip: "Model a line of dialogue if needed: She said, 'That was so unexpected!'",
        prompts: [
          { text: "Your dialogue:", type: "lines", lines: 8 },
          { text: "Prefix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Formal vs Informal Use",
        instruction:
          "Some prefix words suit formal writing; others are common in everyday speech. Sort each word.",
        parentTip: "Formal words often appear in reports, letters and non-fiction; informal ones appear in conversation and stories.",
        columns: ["More formal / written", "Common in everyday speech"],
        items: [
          { label: "reconstruct" },
          { label: "redo" },
          { label: "unprecedented" },
          { label: "unhappy" },
          { label: "reorganise" },
          { label: "unpack" },
          { label: "reconsider" },
          { label: "replay" },
        ],
      },
      {
        type: "circle-correct",
        title: "Select the Most Precise Word",
        instruction:
          "Choose the best word from the options to make each sentence as precise as possible.",
        parentTip: "Discuss the shades of meaning between the options.",
        questions: [
          {
            prompt: "The scientist had to ___ the experiment when the first results were wrong.",
            options: ["redo", "retry", "repeat"],
          },
          {
            prompt: "The building was ___ after many years of neglect.",
            options: ["unreliable", "unmaintained", "unfinished"],
          },
          {
            prompt: "The team had to ___ their strategy after losing the first game.",
            options: ["rethink", "redo", "retell"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Spot the Error and Fix It",
        instruction:
          "Each sentence below has an incorrect prefix word. Identify the error and rewrite the sentence correctly.",
        prompts: [
          { text: "She wanted to unheat her soup before eating it. → Correct: ___", type: "lines", lines: 2 },
          { text: "The children were told to relock the door when they left. → Correct: ___", type: "lines", lines: 2 },
          { text: "It was very reckind of him to share his lunch. → Correct: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Prefix Word to Its Category",
        instruction:
          "Draw a line to match each word to the category that best describes how the prefix changes the meaning.",
        left: ["undo", "unhappy", "reload", "unfair", "reorder", "unsafe"],
        right: [
          "reverses an action",
          "means 'not' + feeling",
          "means 'again' + action",
          "means 'not' + judgement",
          "means 'again' + action",
          "means 'not' + condition",
        ],
      },
      {
        type: "open-response",
        title: "Compare un- and dis-",
        instruction:
          "The prefix dis- also means 'not' or 'the opposite of' (disagree, dishonest). Compare it to un-. How are they similar? How are they different?",
        parentTip: "This is an extension of prefix knowledge — explore it conversationally.",
        prompts: [
          { text: "One way un- and dis- are similar: ___", type: "lines", lines: 2 },
          { text: "One way they might be different: ___", type: "lines", lines: 2 },
          { text: "Three words with dis-: ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort Into Three Groups",
        instruction:
          "Sort the words into three groups based on how the prefix changes the word.",
        parentTip: "Review the three categories together before sorting.",
        columns: ["un- = not", "un- = reverses action", "re- = again"],
        items: [
          { label: "unkind" },
          { label: "unlock" },
          { label: "rewrite" },
          { label: "unfair" },
          { label: "unpack" },
          { label: "rebuild" },
          { label: "untrue" },
          { label: "untie" },
          { label: "replay" },
          { label: "unsafe" },
          { label: "unzip" },
          { label: "refill" },
        ],
      },
      {
        type: "open-response",
        title: "Prefix Words in Informational Text",
        instruction:
          "Read this short informational passage and answer the questions.\n\nPASSAGE: Recycling is the process of collecting and reprocessing materials so they can be reused instead of being thrown away. Without recycling, many usable resources would remain unused and end up in landfill. Communities that reorganise their waste systems often find that costs are reduced and environmental impact is lessened. Scientists have found that unrestricted dumping of waste is unsustainable and must be reconsidered.",
        parentTip: "Read the passage aloud together first, then work through the questions.",
        prompts: [
          { text: "List 5 words in the passage that have the prefix un- or re-: ___", type: "lines", lines: 2 },
          { text: "What does 'reprocessing' mean? Use the prefix to help you: ___", type: "lines", lines: 2 },
          { text: "What does 'unsustainable' mean? Use the prefix to help you: ___", type: "lines", lines: 2 },
          { text: "Write a sentence using one prefix word from the passage: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Sentence with Correct Prefix Use",
        instruction:
          "Three sentences are shown for each question. Circle the ONE that uses the prefix word correctly.",
        questions: [
          {
            prompt: "rearrange",
            options: [
              "She rearranged the flowers in the vase to look better.",
              "She rearranged the flowers because she had never touched them.",
              "She rearranged the flowers so they grew faster.",
            ],
          },
          {
            prompt: "unexpected",
            options: [
              "The expected arrival was a complete surprise to everyone.",
              "We expected the unexpected visitor to arrive on Tuesday.",
              "The unexpected visitor arrived without warning and surprised everyone.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Letter Writing with Prefix Words",
        instruction:
          "Write a short letter (5–6 sentences) from one friend to another about something unexpected that happened. Use at least three prefix words (un- or re-). Set it out as a real letter with a greeting and sign-off.",
        parentTip: "Model letter structure: Dear ___, [body], From ___",
        prompts: [
          { text: "Your letter:", type: "lines", lines: 8 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Prefix Word Collection",
        instruction:
          "Start a running Prefix Word Collection this week — the more unusual words you find, the better!",
        parentTip: "A physical notebook or index card box works wonderfully for this. Add new words as they are found across subjects.",
        suggestions: [
          "Find 2 un- words and 2 re- words you have never used before",
          "Write each word, its meaning, and a sentence using it",
          "Try to use one new prefix word in conversation or writing each day",
          "Challenge: find a prefix word in a science or social studies text",
          "At the end of the week, count how many prefix words are in your collection",
        ],
      },
      {
        type: "sorting",
        title: "Advanced Sort: Prefix + Base Word Type",
        instruction:
          "Sort each prefixed word by what type of base word it comes from.",
        parentTip: "Nouns are naming words; verbs are action words; adjectives are describing words.",
        columns: ["Base = noun", "Base = verb", "Base = adjective"],
        items: [
          { label: "reorder" },
          { label: "rebuild" },
          { label: "unhappy" },
          { label: "refill" },
          { label: "unkind" },
          { label: "reuse" },
          { label: "unsafe" },
          { label: "replay" },
          { label: "untrue" },
        ],
      },
      {
        type: "open-response",
        title: "Create a Word Glossary",
        instruction:
          "Write a mini-glossary of 6 prefix words. For each word write: the word, the prefix, the base word, and the definition. Set it out alphabetically.",
        prompts: [
          { text: "1. Word: ___  Prefix: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "2. Word: ___  Prefix: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "3. Word: ___  Prefix: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "4. Word: ___  Prefix: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "5. Word: ___  Prefix: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "6. Word: ___  Prefix: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Meaning Fits the Context?",
        instruction:
          "Read the sentence. Choose the meaning that best explains how the prefix word is used.",
        questions: [
          {
            prompt: "The archaeologist uncovered an ancient vase buried in the sand.",
            options: [
              "uncovered = made again",
              "uncovered = removed the covering from; revealed",
              "uncovered = put a cover on",
            ],
          },
          {
            prompt: "The coach asked the team to replay the final minute of the game.",
            options: [
              "replay = play for the first time",
              "replay = refuse to play",
              "replay = play again",
            ],
          },
          {
            prompt: "The map showed an unexplored region in the far north.",
            options: [
              "unexplored = explored very carefully",
              "unexplored = explored again",
              "unexplored = not yet explored",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Prefix Word Invention",
        instruction:
          "Invent three new words using un- or re- and a base word (real or made-up). Write the word, its meaning, and use it in a funny sentence.",
        parentTip: "This creative activity builds metalinguistic awareness — the ability to play with language.",
        prompts: [
          { text: "New word 1: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "New word 2: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "New word 3: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Prefix Words Across Subjects",
        instruction:
          "Prefix words appear in every subject — not just English! Here are some examples: recycle (science), rearrange (maths), unexpected (reading). This week, look for prefix words in maths, science or social studies.",
        suggestions: [
          "Find one un- or re- word in a maths or science text",
          "Write the word, where you found it, and what it means in that context",
          "Discuss: does the prefix work the same way in this subject as it does in English?",
          "Share your cross-subject prefix word with a family member",
        ],
      },
      {
        type: "open-response",
        title: "Write a News Report Using Prefix Words",
        instruction:
          "Write a short news report (5–7 sentences) about an event — real or made up. Include at least four un- or re- words. Use a headline and past tense.",
        parentTip: "Discuss features of news reports: headline, who/what/when/where/why, factual language.",
        prompts: [
          { text: "Headline: ___", type: "lines", lines: 1 },
          { text: "Report:", type: "lines", lines: 7 },
          { text: "Prefix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Prefix Word Register",
        instruction:
          "Sort these prefix words by the type of writing they are most likely to appear in.",
        columns: ["Stories and conversation", "Reports and informational texts"],
        items: [
          { label: "unhappy" },
          { label: "unprecedented" },
          { label: "redo" },
          { label: "reconstruct" },
          { label: "replay" },
          { label: "reorganise" },
          { label: "unpack" },
          { label: "unreliable" },
        ],
      },
      {
        type: "matching",
        title: "Prefix Word and Its Opposite",
        instruction:
          "Draw a line to match each un- word to a re- word that relates to correcting or reversing the same situation.",
        parentTip: "Think: if something is undone, what re- word might follow to fix it?",
        left: ["untidy → make messy", "unfinished → not complete", "unmade → not put together", "unread → not yet read", "unused → not used"],
        right: [
          "reuse — use again",
          "reread — read again",
          "reassemble — put together again",
          "reorganise — make tidy again",
          "complete — finish the task",
        ],
      },
      {
        type: "open-response",
        title: "Reflect: What Have You Learned About Prefixes?",
        instruction:
          "Write a short reflection (3–4 sentences) about what you have learned about the prefixes un- and re-. Include: what each prefix means, how they change words, and how knowing prefixes helps you as a reader and writer.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 6 },
        ],
      },

      // ── EXTENDING (81–100) ────────────────────────────────────────
      {
        type: "home-activity",
        title: "Spark: Prefix Picture Dictionary",
        instruction:
          "Create a personal prefix picture dictionary with at least 10 un- words and 10 re- words.",
        parentTip: "This is a multi-session project — don't rush it. The process of illustrating and defining builds deep word knowledge.",
        suggestions: [
          "Write each word clearly at the top of a small box or card",
          "Write the definition in your own words underneath",
          "Draw a small picture or symbol to help remember the meaning",
          "Organise the cards alphabetically",
          "Revisit the dictionary when writing and add new words as you find them",
        ],
      },
      {
        type: "open-response",
        title: "Analyse a Poem for Prefix Words",
        instruction:
          "Read any short poem or song lyrics and search for prefix words. Write down each one you find, identify the prefix and base word, and explain how it contributes to the meaning or effect of the poem.",
        prompts: [
          { text: "Poem/song title or source: ___", type: "lines", lines: 1 },
          { text: "Prefix word 1: ___  Prefix: ___  Base: ___  Effect in the poem: ___", type: "lines", lines: 2 },
          { text: "Prefix word 2: ___  Prefix: ___  Base: ___  Effect in the poem: ___", type: "lines", lines: 2 },
          { text: "Prefix word 3: ___  Prefix: ___  Base: ___  Effect in the poem: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Advanced: Sort by How Many Syllables",
        instruction:
          "Sort each prefixed word by the number of syllables it has.",
        parentTip: "Clap each word to count syllables: un-hap-py = 3 syllables.",
        columns: ["2 syllables", "3 syllables", "4 syllables"],
        items: [
          { label: "undo" },
          { label: "unkind" },
          { label: "unhappy" },
          { label: "rebuild" },
          { label: "rewrite" },
          { label: "unexpected" },
          { label: "rearrange" },
          { label: "reorganise" },
          { label: "uncomfortable" },
          { label: "unreliable" },
        ],
      },
      {
        type: "open-response",
        title: "Word Family Tree",
        instruction:
          "Choose one base word and build a full word family tree. Add: the plain word, the un- form, the re- form, any -ed or -ing forms of the re- word, and any other related words.",
        prompts: [
          { text: "Base word: ___", type: "lines", lines: 1 },
          { text: "All related words I can make: ___", type: "lines", lines: 2 },
          { text: "Sketch the word family tree below:", type: "box", lines: 8 },
        ],
      },
      {
        type: "circle-correct",
        title: "Precise Prefix Choice in Complex Sentences",
        instruction:
          "Choose the word that is most precise for each sentence.",
        questions: [
          {
            prompt: "The council voted to ___ the old town hall, which had been damaged in a storm.",
            options: ["rebuild", "redo", "repair"],
          },
          {
            prompt: "The scientist described the ancient virus as ___ by modern medicine.",
            options: ["untreatable", "unkind", "unreliable"],
          },
          {
            prompt: "After reading the contract twice, the lawyer asked to ___ it before advising her client.",
            options: ["reread", "reconsider", "replay"],
          },
          {
            prompt: "The explorer was excited to enter the ___ cave system deep in the mountains.",
            options: ["unexplored", "unknown", "unexpected"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Characters Using Prefix Words",
        instruction:
          "Write a paragraph comparing two characters (from a book you are reading, or invented). Use at least 5 prefix words with un- or re-. Underline each prefix word.",
        prompts: [
          { text: "Character 1 name: ___   Character 2 name: ___", type: "lines", lines: 1 },
          { text: "My comparison paragraph:", type: "lines", lines: 8 },
          { text: "Prefix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Design a Prefix Challenge Card",
        instruction:
          "Design a challenge card that you could give to a younger student to teach them about un- and re-. Include: a definition for each prefix, three example words each, and one activity for them to try.",
        prompts: [
          { text: "un- means: ___   Examples: ___, ___, ___", type: "lines", lines: 2 },
          { text: "re- means: ___   Examples: ___, ___, ___", type: "lines", lines: 2 },
          { text: "Activity for younger student: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Australian Curriculum Year 3 Prefix Words",
        instruction:
          "Sort these Year 3 spelling list words that contain prefixes into the correct column.",
        columns: ["Contains un-", "Contains re-", "Contains another prefix"],
        items: [
          { label: "unhappy" },
          { label: "recount" },
          { label: "impossible" },
          { label: "unkind" },
          { label: "rewrite" },
          { label: "preview" },
          { label: "unfair" },
          { label: "replay" },
          { label: "prepay" },
          { label: "misplace" },
        ],
      },
      {
        type: "open-response",
        title: "Extended Writing: A Story About Starting Over",
        instruction:
          "Write a story of at least 8–10 sentences about a character who has to start something over (rebuild, rewrite, rethink, or redo something). Use at least 6 words with un- or re-. Give your story a title, a problem, and a resolution.",
        parentTip: "Good stories have a beginning (setting and character), a middle (problem), and an end (resolution). Encourage your child to plan before writing.",
        prompts: [
          { text: "Title: ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 12 },
          { text: "Prefix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Teach It Back",
        instruction:
          "The best test of understanding is being able to teach someone else. Teach a family member everything you know about the prefixes un- and re-.",
        parentTip: "Listen as your child teaches and prompt with questions: 'Can you give me an example?' 'What does re- mean again?' 'Is uncle an example of un-? Why not?' Teaching is the deepest form of learning.",
        suggestions: [
          "Plan a short 5-minute lesson to teach un- and re- to a family member",
          "Create a quiz of 5 questions to test your student at the end",
          "Use examples from your own reading and writing to illustrate the lesson",
          "After the lesson, write one thing your 'student' found tricky",
          "Celebrate completing this worksheet — you are now a prefix expert!",
        ],
      },
      {
        type: "open-response",
        title: "Prefix Word Sentences: Foundational Review",
        instruction:
          "Write one sentence using each of the words below. Make sure your sentence clearly shows the meaning of the prefixed word.",
        parentTip: "Check: does the sentence prove the child understands what the prefix does to the meaning?",
        prompts: [
          { text: "unhelpful: ___", type: "lines", lines: 2 },
          { text: "reconsider: ___", type: "lines", lines: 2 },
          { text: "unaware: ___", type: "lines", lines: 2 },
          { text: "reorganise: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort Prefix Words: Positive or Negative Meaning?",
        instruction:
          "Adding un- usually creates a negative meaning. Adding re- usually creates a neutral or positive one. Sort each word.",
        parentTip: "This is a nuanced task — discuss each word before sorting.",
        columns: ["Mostly negative meaning", "Mostly neutral or positive meaning"],
        items: [
          { label: "unhappy" },
          { label: "rewrite" },
          { label: "unkind" },
          { label: "rebuild" },
          { label: "unfair" },
          { label: "replay" },
          { label: "unsafe" },
          { label: "renew" },
          { label: "untrue" },
          { label: "revisit" },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the More Precise Word",
        instruction:
          "Circle the more precise word that best fits each context.",
        questions: [
          {
            prompt: "The scientist had to ___ the conditions before the experiment could restart.",
            options: ["redo", "recreate"],
          },
          {
            prompt: "The results were ___: they did not match any previous study.",
            options: ["unknown", "unprecedented"],
          },
          {
            prompt: "After the criticism, she decided to ___ her opening paragraph.",
            options: ["redo", "rewrite"],
          },
          {
            prompt: "The road was ___ — full of potholes and cracks.",
            options: ["unsafe", "unmaintained"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Paragraph Using Only un- Words",
        instruction:
          "Write a paragraph of 4–5 sentences where EVERY descriptive word uses the prefix un-. Challenge yourself to use as many different un- words as possible.",
        prompts: [
          { text: "My un- paragraph:", type: "lines", lines: 6 },
          { text: "How many different un- words did I use? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Prefix Word to Its Etymology Clue",
        instruction:
          "The prefix 're-' comes from Latin meaning 'again' or 'back'. 'Un-' comes from Old English meaning 'not'. Draw a line to match each word to the language origin of its prefix.",
        left: ["unkind", "rebuild", "unfair", "replay", "unsafe", "revisit"],
        right: [
          "re- (Latin: again/back)",
          "un- (Old English: not)",
          "re- (Latin: again/back)",
          "un- (Old English: not)",
          "re- (Latin: again/back)",
          "un- (Old English: not)",
        ],
      },
      {
        type: "open-response",
        title: "Write a Persuasive Argument Using Prefix Words",
        instruction:
          "Write a short persuasive argument (5–6 sentences) about why recycling is important. Use at least 4 words with the prefix re- (e.g. reuse, recycle, reprocess, reduce, renew).",
        prompts: [
          { text: "My persuasive argument:", type: "lines", lines: 7 },
          { text: "re- words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: un- Words by How Common They Are",
        instruction:
          "Some un- words are very common in everyday speech. Others are more formal or rare. Sort each word.",
        parentTip: "This develops vocabulary awareness — knowing when a word is formal or informal is a key writing skill.",
        columns: ["Very common (everyday speech)", "Less common (more formal or literary)"],
        items: [
          { label: "unhappy" },
          { label: "unprecedented" },
          { label: "unkind" },
          { label: "unpalatable" },
          { label: "undo" },
          { label: "unequivocal" },
          { label: "untidy" },
          { label: "unassailable" },
        ],
      },
      {
        type: "open-response",
        title: "Create a Prefix Quiz",
        instruction:
          "Write a quiz of 6 questions about prefixes un- and re- that you could give to a classmate or family member. Include the answers.",
        prompts: [
          { text: "Q1: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q2: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q3: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q4: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q5: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q6: ___  A: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Prefix Words in Science",
        instruction:
          "Science is full of prefix words! Read the clues and use un- or re- to figure out the word.",
        prompts: [
          { text: "To use a resource again rather than throw it away: re___", type: "lines", lines: 1 },
          { text: "When scientists repeat an experiment to check the result: re___", type: "lines", lines: 1 },
          { text: "An ecosystem that has not yet been explored or studied: un___", type: "lines", lines: 1 },
          { text: "To reassemble something that was taken apart for study: re___", type: "lines", lines: 1 },
          { text: "A species not yet known to science: un___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Prefix Reflection: My Learning Journey",
        instruction:
          "Reflect on everything you have learned about the prefixes un- and re- across this worksheet. Write a paragraph of 5–6 sentences.",
        prompts: [
          { text: "What I knew before: ___", type: "lines", lines: 2 },
          { text: "What I learned: ___", type: "lines", lines: 3 },
          { text: "How this helps me as a reader and writer: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Prefixes Build Vocabulary Exponentially",
        instruction:
          "When you learn ONE prefix, you unlock the meaning of DOZENS of words. Learning un- helps you understand every un- word you ever meet. Learning re- does the same. Keep a running list of prefix words you encounter — by the end of the year, you will have hundreds!",
        suggestions: [
          "Start a Prefix Word Collection notebook today",
          "Add every un- or re- word you encounter this week",
          "At the end of the week, count how many you found",
          "Challenge: can you find a prefix word in every room of your home?",
          "Share your best find from this week with a family member",
        ],
      },
      {
        type: "open-response",
        title: "Final Challenge: Prefix Story",
        instruction:
          "Write a story of 8–10 sentences about a character who discovers a hidden talent after many failed attempts. Use at least 8 prefix words with un- or re-. Give your story a title, a problem, and a resolution. Underline every prefix word.",
        parentTip: "This is the culminating task — encourage your child to plan the story (title, problem, events, resolution) before writing.",
        prompts: [
          { text: "Title: ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 14 },
          { text: "Prefix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Prefix Word Art Exhibition",
        instruction:
          "Create a Prefix Word Art Exhibition! Make illustrated word cards for your 10 favourite un- and re- words. Display them as an exhibition at home.",
        parentTip: "Word art exhibitions are a wonderful way to celebrate language learning. Invite family members to view the exhibition and ask your child to explain each word.",
        suggestions: [
          "Choose 5 un- words and 5 re- words that you find most interesting",
          "Create an illustrated card for each: word, meaning, sentence, illustration",
          "Arrange them as an exhibition on a table or pinned to a wall",
          "Give a guided tour to a family member",
          "Vote: which word card is the most creative? The most informative?",
        ],
      },
      {
        type: "open-response",
        title: "Prefix Words Across the Week",
        instruction:
          "Record every un- or re- word you encounter across one full week. At the end, write a summary of what you found.",
        prompts: [
          { text: "Monday — prefix words found: ___", type: "lines", lines: 1 },
          { text: "Tuesday — prefix words found: ___", type: "lines", lines: 1 },
          { text: "Wednesday — prefix words found: ___", type: "lines", lines: 1 },
          { text: "Thursday — prefix words found: ___", type: "lines", lines: 1 },
          { text: "Friday — prefix words found: ___", type: "lines", lines: 1 },
          { text: "Total words found: ___  Most interesting word: ___", type: "lines", lines: 1 },
          { text: "Summary: what did you notice about where prefix words appear?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "matching",
        title: "Final Matching: Advanced Prefix Words",
        instruction:
          "Draw a line to match each advanced prefix word to its correct meaning.",
        parentTip: "These are Year 3–4 level words. Use context and the prefix meaning to work each one out.",
        left: ["unprecedented", "reconstitute", "unpalatable", "recalibrate", "untenable"],
        right: [
          "adjust or reset (again)",
          "impossible to maintain or defend",
          "restore something to its original state",
          "not pleasant to the taste or mind",
          "never happened before; without precedent",
        ],
      },
      {
        type: "open-response",
        title: "Prefix Words: My Top 10",
        instruction:
          "Choose your personal top 10 favourite prefix words (un- or re-). Rank them 1–10. Write a sentence for each that proves you understand its meaning.",
        prompts: [
          { text: "1. ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "2. ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "3. ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "4. ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "5. ___  Sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Prefix Challenge: Negative or Action?",
        instruction: "Circle whether each prefix word expresses a NEGATIVE meaning or an ACTION/CHANGE meaning.",
        parentTip: "This distinction builds awareness that prefixes carry specific semantic weight.",
        questions: [
          { prompt: "unkind", options: ["negative", "action"] },
          { prompt: "rewrite", options: ["negative", "action"] },
          { prompt: "unhappy", options: ["negative", "action"] },
          { prompt: "rebuild", options: ["negative", "action"] },
          { prompt: "unfair", options: ["negative", "action"] },
          { prompt: "reuse", options: ["negative", "action"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Prefix Words by Syllable Count",
        instruction: "Sort these prefix words into groups by how many syllables they have.",
        columns: ["2 syllables", "3 syllables", "4+ syllables"],
        items: [
          { label: "unkind" },
          { label: "rewrite" },
          { label: "unbelievable" },
          { label: "rebuild" },
          { label: "unhappy" },
          { label: "rearrange" },
          { label: "unfair" },
          { label: "uncomfortable" },
          { label: "refresh" },
        ],
      },
      {
        type: "open-response",
        title: "Prefix Story: A Day of Un- and Re-",
        instruction:
          "Write a short story (5–6 sentences) about a character who has to undo and redo things all day. Use at least six un- or re- words in your story.",
        parentTip: "Challenge your child to use a mix of both prefixes in the story.",
        prompts: [
          { text: "My story title: ___", type: "lines", lines: 1 },
          { text: "Story:", type: "lines", lines: 6 },
          { text: "Prefix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Prefix Meaning to Example",
        instruction: "Draw a line from each prefix meaning to the best example word.",
        left: [
          "do the opposite of locking",
          "read something again",
          "not willing to help",
          "build something over",
          "not having good luck",
          "make something new again",
        ],
        right: [
          "refresh",
          "unlock",
          "reread",
          "unhelpful",
          "unlucky",
          "rebuild",
        ],
      },
      {
        type: "circle-correct",
        title: "Prefix Spelling Check",
        instruction: "Circle the correctly spelled word in each pair.",
        questions: [
          { prompt: "unkind or unkined?", options: ["unkind", "unkined"] },
          { prompt: "rewrite or rewritte?", options: ["rewrite", "rewritte"] },
          { prompt: "unhappy or unhappi?", options: ["unhappy", "unhappi"] },
          { prompt: "rebuild or rebiuld?", options: ["rebuild", "rebiuld"] },
          { prompt: "unfair or unfaire?", options: ["unfair", "unfaire"] },
          { prompt: "remember or remmember?", options: ["remember", "remmember"] },
        ],
      },
      {
        type: "home-activity",
        title: "Prefix Word Wall: Family Hunt",
        instruction:
          "With your family, find 10 un- or re- words in books, magazines, packaging, or signs around your home. Record them on a family word wall.",
        parentTip: "This real-world search shows children that prefixes appear everywhere in everyday language.",
        suggestions: [
          "Search books, magazines, food labels and signs",
          "Write each word and where you found it",
          "Sort your finds into un- and re- columns",
          "Choose the most interesting find to share",
          "Display your word wall where everyone can see it",
        ],
      },
      {
        type: "open-response",
        title: "Prefix Expert: Teach a Younger Child",
        instruction:
          "Write a simple explanation of prefixes un- and re- for a Year 1 student. Use examples, pictures (or descriptions of pictures), and a sentence in your own words.",
        prompts: [
          { text: "My explanation for Year 1:", type: "lines", lines: 4 },
          { text: "My example sentence: ___", type: "lines", lines: 2 },
          { text: "What makes prefixes useful: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sequence",
        title: "Order: From Root to Extended Prefix Word",
        instruction: "Put these steps in order to show how to build meaning from a prefix word.",
        items: [
          { label: "Read the base word and check you know its meaning" },
          { label: "Identify the prefix (un- or re-)" },
          { label: "Combine the prefix meaning with the base word" },
          { label: "Check the new word makes sense in a sentence" },
          { label: "Write the word in your vocabulary journal" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Prefix Words by Subject Area",
        instruction: "Sort these prefix words into the school subject where you'd most likely find them.",
        columns: ["Science", "Maths", "English", "Daily Life"],
        items: [
          { label: "reorganise" },
          { label: "unequal" },
          { label: "reread" },
          { label: "unable" },
          { label: "recycle" },
          { label: "uncertain" },
          { label: "recount" },
          { label: "undivided" },
        ],
      },
      {
        type: "open-response",
        title: "Spark: Invent Your Own Prefix Words",
        instruction:
          "Invent three new words using un- or re- that don't exist yet. Define each one, use it in a sentence, and explain why English needs this word.",
        parentTip: "Invented word activities build deep morphological awareness and creative language use.",
        prompts: [
          { text: "Word 1: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "Word 2: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "Word 3: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "Why English needs these words: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Prefix Podcast Episode",
        instruction:
          "Record a 2-minute 'podcast' about prefixes un- and re-. Explain what they mean, give examples, and tell listeners why understanding prefixes helps with reading.",
        parentTip: "Speaking about language consolidates metalinguistic awareness. Play the recording back and discuss.",
        suggestions: [
          "Plan what you will say in 3 key points",
          "Record yourself speaking for 2 minutes",
          "Include at least 5 example words",
          "Listen back — did you explain it clearly?",
          "Write one sentence that summarises your podcast",
        ],
      },
      {
        type: "open-response",
        title: "Prefix Mastery: Final Reflection",
        instruction:
          "Write a final reflection on everything you have learned about un- and re- prefixes. Include: what you know now, what surprised you, and how you will use prefix knowledge in your reading and writing from now on.",
        parentTip: "Metacognitive reflection consolidates learning. Encourage specific answers rather than 'I liked it'.",
        prompts: [
          { text: "What I now know about prefixes un- and re-: ___", type: "lines", lines: 3 },
          { text: "Something that surprised me: ___", type: "lines", lines: 2 },
          { text: "How I will use this knowledge when I read or write: ___", type: "lines", lines: 2 },
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
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      {
        type: "sorting",
        title: "Sort the Suffix Words",
        instruction:
          "Read each word and sort it by its suffix into the correct column.",
        parentTip: "Have your child say each word aloud and listen to the ending before sorting.",
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
        type: "matching",
        title: "Match Word to Definition",
        instruction:
          "Draw a line from each word to its correct definition.",
        parentTip: "If your child is unsure, ask them to identify the base word first, then think about what the suffix adds.",
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
        type: "circle-correct",
        title: "Which Suffix Fits?",
        instruction:
          "Circle the suffix that correctly completes each word.",
        questions: [
          { prompt: "kind + ___", options: ["-ness", "-ful", "-less"] },
          { prompt: "help + ___  (meaning: without help)", options: ["-ness", "-ful", "-less"] },
          { prompt: "hope + ___  (meaning: full of hope)", options: ["-ness", "-ful", "-less"] },
          { prompt: "dark + ___  (meaning: the quality of being dark)", options: ["-ness", "-ful", "-less"] },
          { prompt: "care + ___  (meaning: without care)", options: ["-ness", "-ful", "-less"] },
          { prompt: "joy + ___  (meaning: full of joy)", options: ["-ness", "-ful", "-less"] },
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
        type: "sorting",
        title: "What Does the Suffix Mean?",
        instruction:
          "Sort each suffix word by what the suffix means.",
        parentTip: "Discuss the three meanings: -ness = the quality of, -ful = full of, -less = without.",
        columns: ["-ness = the quality of", "-ful = full of", "-less = without"],
        items: [
          { label: "sadness" },
          { label: "thankful" },
          { label: "useless" },
          { label: "darkness" },
          { label: "cheerful" },
          { label: "harmless" },
          { label: "kindness" },
          { label: "powerful" },
          { label: "restless" },
        ],
      },
      {
        type: "matching",
        title: "Match Base Word to Suffix Word",
        instruction:
          "Draw a line to match each base word to the correct suffix word.",
        left: ["bright", "care", "thought", "joy", "power"],
        right: ["joyful", "thoughtless", "brightness", "careless", "powerful"],
      },
      {
        type: "open-response",
        title: "Spot the Spelling Change",
        instruction:
          "Some words need a spelling change when a suffix is added. Write the new word for each and circle it if a spelling change was needed.",
        parentTip: "The key rule: words ending in 'y' change the 'y' to 'i' before adding -ness or -ful (e.g. happy → happiness).",
        prompts: [
          { text: "happy + -ness = ___  (spelling change? yes / no)", type: "lines", lines: 1 },
          { text: "beauty + -ful = ___  (spelling change? yes / no)", type: "lines", lines: 1 },
          { text: "kind + -ness = ___  (spelling change? yes / no)", type: "lines", lines: 1 },
          { text: "plenty + -ful = ___  (spelling change? yes / no)", type: "lines", lines: 1 },
          { text: "lazy + -ness = ___  (spelling change? yes / no)", type: "lines", lines: 1 },
          { text: "dark + -ness = ___  (spelling change? yes / no)", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Correct Spelling?",
        instruction:
          "Circle the correctly spelled word in each pair.",
        questions: [
          { prompt: "happiness or happyness?", options: ["happiness", "happyness"] },
          { prompt: "beautiful or beautifull?", options: ["beautiful", "beautifull"] },
          { prompt: "carless or careless?", options: ["carless", "careless"] },
          { prompt: "darkness or darkeness?", options: ["darkness", "darkeness"] },
          { prompt: "plentyful or plentiful?", options: ["plentyful", "plentiful"] },
          { prompt: "kindness or kindniss?", options: ["kindness", "kindniss"] },
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
      {
        type: "sorting",
        title: "Sort: Real Word or Impossible Combination?",
        instruction:
          "Some base words don't work with certain suffixes. Sort each combination.",
        parentTip: "Say each word aloud — if it doesn't sound right or doesn't make sense, it's probably not a real word.",
        columns: ["Real word", "Not a real word"],
        items: [
          { label: "kindness" },
          { label: "runless" },
          { label: "joyful" },
          { label: "eatness" },
          { label: "hopeless" },
          { label: "tallful" },
          { label: "darkness" },
          { label: "blueness" },
        ],
      },
      {
        type: "open-response",
        title: "Find the Suffix and Base Word",
        instruction:
          "For each word, write the suffix and the base word hidden inside.",
        parentTip: "Remind your child to strip the suffix away from the end — what remains is the base word.",
        prompts: [
          { text: "happiness → suffix: ___  base: ___", type: "lines", lines: 1 },
          { text: "beautiful → suffix: ___  base: ___", type: "lines", lines: 1 },
          { text: "helpless → suffix: ___  base: ___", type: "lines", lines: 1 },
          { text: "brightness → suffix: ___  base: ___", type: "lines", lines: 1 },
          { text: "powerful → suffix: ___  base: ___", type: "lines", lines: 1 },
          { text: "thoughtless → suffix: ___  base: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: -ful Word to Its Meaning",
        instruction:
          "Draw a line from each -ful word to its meaning.",
        left: ["hopeful", "thankful", "careful", "cheerful", "wonderful"],
        right: [
          "feeling happy and positive in spirit",
          "full of hope that something good will happen",
          "feeling grateful for something",
          "paying close attention to avoid mistakes",
          "causing amazement and admiration",
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Right Word",
        instruction:
          "Circle the suffix word that best completes each sentence.",
        questions: [
          {
            prompt: "He was ___ when the rain stopped just before the match.",
            options: ["thankful", "thankless", "thankness"],
          },
          {
            prompt: "The street was in complete ___ after the power went out.",
            options: ["darkful", "darkness", "darkless"],
          },
          {
            prompt: "She was ___ about leaving her bag on the bus.",
            options: ["careness", "careful", "careless"],
          },
          {
            prompt: "The ___ of his smile lit up the whole room.",
            options: ["cheerless", "cheerful", "cheerfulness"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare -ful and -less",
        instruction:
          "For each base word, write both the -ful and the -less form. Then explain how the meanings are opposites.",
        prompts: [
          { text: "hope → hopeful: ___  hopeless: ___  How are they opposite?", type: "lines", lines: 2 },
          { text: "care → careful: ___  careless: ___  How are they opposite?", type: "lines", lines: 2 },
          { text: "help → helpful: ___  helpless: ___  How are they opposite?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Three Powerful Word Endings",
        instruction:
          "Here is a cheat sheet to remember the three suffixes: -NESS (the quality of being ___), -FUL (full of ___), -LESS (without ___). Stick it somewhere visible and use it when you are reading or writing this week!",
        suggestions: [
          "Write the three suffixes and their meanings on a card and stick it on your wall",
          "Find one word with each suffix in a book you are reading today",
          "Use one -ness word, one -ful word and one -less word in a sentence before dinner",
          "Quiz a family member: ask them to add -ness, -ful or -less to a word you give them",
        ],
      },
      {
        type: "sorting",
        title: "Sort the -ness Words",
        instruction:
          "Sort these -ness words by the type of base word they come from.",
        parentTip: "All -ness words come from adjectives (describing words). Some also involve spelling changes.",
        columns: ["No spelling change", "Spelling change (y → i)"],
        items: [
          { label: "kindness" },
          { label: "happiness" },
          { label: "darkness" },
          { label: "laziness" },
          { label: "sadness" },
          { label: "loneliness" },
          { label: "brightness" },
          { label: "tidiness" },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Word Sentences",
        instruction:
          "Write one sentence for each suffix, using a different word each time. Your sentences should show you understand the meaning clearly.",
        prompts: [
          { text: "-ness sentence (e.g. kindness, sadness, darkness): ___", type: "lines", lines: 2 },
          { text: "-ful sentence (e.g. hopeful, careful, joyful): ___", type: "lines", lines: 2 },
          { text: "-less sentence (e.g. careless, helpless, useless): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Suffix Word to Its Sentence",
        instruction:
          "Draw a line to match each word to the sentence it best completes.",
        left: ["sadness", "powerful", "restless", "brightness", "harmful"],
        right: [
          "The ___ of the sun made it hard to look outside.",
          "She felt deep ___ when her favourite book ended.",
          "Some chemicals can be ___ to animals and plants.",
          "The puppy was ___ and kept jumping around all evening.",
          "The superhero was ___, able to lift a bus with one hand.",
        ],
      },
      {
        type: "circle-correct",
        title: "True or False About Suffixes?",
        instruction:
          "Read each statement. Circle TRUE or FALSE.",
        parentTip: "Ask your child to explain their reasoning after each answer.",
        questions: [
          { prompt: "-ful means 'without'.", options: ["TRUE", "FALSE"] },
          { prompt: "-ness turns an adjective into a noun.", options: ["TRUE", "FALSE"] },
          { prompt: "'Hopeful' means full of hope.", options: ["TRUE", "FALSE"] },
          { prompt: "Words ending in 'y' never change spelling when a suffix is added.", options: ["TRUE", "FALSE"] },
          { prompt: "'Careless' means very careful.", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Suffix Examples",
        instruction:
          "Choose two base words of your own for each suffix. Write the suffix word and its meaning.",
        prompts: [
          { text: "-ness: ___ + -ness = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "-ness: ___ + -ness = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "-ful: ___ + -ful = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "-ful: ___ + -ful = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "-less: ___ + -less = ___  Meaning: ___", type: "lines", lines: 1 },
          { text: "-less: ___ + -less = ___  Meaning: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Suffix Word Scavenger Hunt",
        instruction:
          "Search your home for words with the suffixes -ness, -ful and -less. Check books, packets, labels, and signs.",
        parentTip: "Product labels and instruction booklets are surprisingly rich sources of suffix words. Try the kitchen and bathroom!",
        suggestions: [
          "Find at least 2 words with -ness",
          "Find at least 2 words with -ful",
          "Find at least 2 words with -less",
          "Write each word found and its meaning",
          "Share your best find at dinner tonight",
        ],
      },

      // ── DEVELOPING (21–50) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Build Suffix Families",
        instruction:
          "For each base word, add all three suffixes if possible. Write 'X' if a suffix does not work. Write the meaning of each that does work.",
        prompts: [
          { text: "help → -ness: ___ / -ful: ___ / -less: ___", type: "lines", lines: 2 },
          { text: "thought → -ness: ___ / -ful: ___ / -less: ___", type: "lines", lines: 2 },
          { text: "power → -ness: ___ / -ful: ___ / -less: ___", type: "lines", lines: 2 },
          { text: "care → -ness: ___ / -ful: ___ / -less: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Word Class After Adding Suffix",
        instruction:
          "Adding -ness changes an adjective into a NOUN. -ful changes a noun into an ADJECTIVE. Sort each word by its word class after the suffix is added.",
        parentTip: "Check: can you put 'the' or 'a' in front of it? If yes, it's a noun. Does it describe something? Then it's an adjective.",
        columns: ["Becomes a noun (-ness)", "Becomes an adjective (-ful or -less)"],
        items: [
          { label: "kindness" },
          { label: "helpful" },
          { label: "sadness" },
          { label: "powerless" },
          { label: "brightness" },
          { label: "hopeful" },
          { label: "darkness" },
          { label: "careless" },
          { label: "happiness" },
          { label: "thankful" },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Sentence",
        instruction:
          "Circle the sentence that uses the suffix word correctly.",
        questions: [
          {
            prompt: "happiness",
            options: [
              "The happiness child laughed all day.",
              "She felt a deep happiness when she saw her family.",
              "It was the happiness moment of all.",
            ],
          },
          {
            prompt: "careless",
            options: [
              "He was careless when he checked every detail twice.",
              "The careless driver didn't notice the stop sign.",
              "She was very careless and never made mistakes.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words in Context: Fill the Gap",
        instruction:
          "Choose the best suffix word from the box to complete each sentence.\n\nWord box: darkness, hopeful, restless, kindness, harmful, brightness, useless",
        prompts: [
          { text: "She showed great ___ by helping the lost puppy.", type: "lines", lines: 1 },
          { text: "The scientist warned that the chemical could be ___ to wildlife.", type: "lines", lines: 1 },
          { text: "The children were ___ and could not sit still.", type: "lines", lines: 1 },
          { text: "He was ___ that the rain would stop before the match.", type: "lines", lines: 1 },
          { text: "Without a torch, we were lost in the complete ___.", type: "lines", lines: 1 },
          { text: "The ___ of the summer sun made the fields glow gold.", type: "lines", lines: 1 },
          { text: "The old map was ___ — all the street names had changed.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Word to Its More Formal Synonym",
        instruction:
          "Match each everyday suffix word to the more formal synonym.",
        left: ["sadness", "helpless", "wonderful", "careless", "darkness"],
        right: [
          "negligent",
          "magnificent",
          "gloom",
          "sorrow",
          "defenceless",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words in a Poem",
        instruction:
          "Write a short poem of 4–6 lines about a feeling (happiness, sadness, hopefulness). Use at least three suffix words. It does not need to rhyme!",
        parentTip: "Free verse poetry lets children experiment with language without worrying about rhyme.",
        prompts: [
          { text: "My poem:", type: "lines", lines: 7 },
          { text: "Suffix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: -less Words by Strength",
        instruction:
          "Sort these -less words from the least strong negative meaning to the strongest.",
        parentTip: "Discuss the shade of meaning between -less words — some suggest mild absence, others suggest complete loss.",
        columns: ["Mild (missing something)", "Strong (completely without)"],
        items: [
          { label: "careless" },
          { label: "helpless" },
          { label: "restless" },
          { label: "powerless" },
          { label: "thoughtless" },
          { label: "defenceless" },
          { label: "breathless" },
          { label: "speechless" },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite With Suffix Words",
        instruction:
          "Rewrite each sentence replacing the underlined phrase with one suffix word.",
        prompts: [
          { text: "'She was full of hope about the results.' → Rewrite using one suffix word: ___", type: "lines", lines: 1 },
          { text: "'He showed the quality of being kind.' → Rewrite: ___", type: "lines", lines: 1 },
          { text: "'The old car was without any use.' → Rewrite: ___", type: "lines", lines: 1 },
          { text: "'The scene was full of wonder.' → Rewrite: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Pick the Precise Word",
        instruction:
          "Choose the suffix word that is most precise for each sentence.",
        questions: [
          {
            prompt: "After running the marathon, the athlete was ___ — she could barely speak.",
            options: ["breathless", "restless", "careless"],
          },
          {
            prompt: "The witness was ___ when the judge asked his name — he couldn't say a word.",
            options: ["thoughtless", "speechless", "useless"],
          },
          {
            prompt: "The town felt deep ___ after the floods destroyed their homes.",
            options: ["sadness", "darkness", "happiness"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Word Glossary",
        instruction:
          "Create a mini-glossary of 6 suffix words (two of each suffix). For each word write: the word, its suffix, its base word, and its definition.",
        prompts: [
          { text: "-ness word 1: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "-ness word 2: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "-ful word 1: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "-ful word 2: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "-less word 1: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
          { text: "-less word 2: ___  Base: ___  Definition: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Suffix Words in Books",
        instruction:
          "Authors use suffix words constantly — -ness words to name feelings, -ful words to describe, and -less words to show loss or absence. This week, mark suffix words as you read.",
        suggestions: [
          "Find 2 suffix words in your current reading book",
          "Write each one and explain why the author might have chosen it",
          "Try replacing one suffix word with a different one — how does the meaning change?",
          "Write a sentence using a suffix word you found in your reading",
        ],
      },
      {
        type: "sorting",
        title: "Advanced Sort: Three Suffixes, Three Base Types",
        instruction:
          "Sort these words by both the suffix AND the type of base word.",
        parentTip: "This is a two-level sort — first identify the suffix, then identify whether the base is an adjective or a noun.",
        columns: ["-ness (adj base)", "-ful (noun base)", "-less (noun/adj base)"],
        items: [
          { label: "kindness" },
          { label: "joyful" },
          { label: "helpless" },
          { label: "brightness" },
          { label: "powerful" },
          { label: "thoughtless" },
          { label: "sadness" },
          { label: "hopeful" },
          { label: "useless" },
        ],
      },
      {
        type: "open-response",
        title: "Compare Suffix Words: Shades of Meaning",
        instruction:
          "The words below all relate to being 'without' something, but in different ways. Explain the difference in meaning between each pair.",
        prompts: [
          { text: "careless vs thoughtless — how are they different?", type: "lines", lines: 2 },
          { text: "helpless vs powerless — how are they different?", type: "lines", lines: 2 },
          { text: "harmless vs useless — how are they different?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Suffix Word in Context",
        instruction:
          "Read the sentence. Circle the suffix word and write which suffix it has.",
        questions: [
          {
            prompt: "The thoughtless remark hurt her feelings deeply.",
            options: ["-ness", "-ful", "-less"],
          },
          {
            prompt: "His kindness towards animals was well known in the town.",
            options: ["-ness", "-ful", "-less"],
          },
          {
            prompt: "She was cheerful despite the rain ruining the picnic.",
            options: ["-ness", "-ful", "-less"],
          },
          {
            prompt: "The darkness outside made it hard to find the path.",
            options: ["-ness", "-ful", "-less"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Paragraph With Three Suffixes",
        instruction:
          "Write a paragraph (4–6 sentences) about a character in a story. Include at least one -ness word, one -ful word, and one -less word. Underline each suffix word.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 7 },
          { text: "Suffix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Suffix Word to Its Opposite",
        instruction:
          "Draw a line to match each word to its opposite (using a different suffix).",
        left: ["hopeful", "helpful", "careful", "cheerful", "powerful"],
        right: ["careless", "powerless", "hopeless", "cheerless", "helpless"],
      },
      {
        type: "open-response",
        title: "Suffix Sentence Chain",
        instruction:
          "Write a sentence using a suffix word. The last word of your sentence must be (or contain) the base word for your next sentence's suffix word. Chain 4 sentences together.",
        parentTip: "This is a creative challenge — help your child plan the chain before writing.",
        prompts: [
          { text: "Sentence 1 (use a -ness word): ___", type: "lines", lines: 2 },
          { text: "Sentence 2 (use a -ful word): ___", type: "lines", lines: 2 },
          { text: "Sentence 3 (use a -less word): ___", type: "lines", lines: 2 },
          { text: "Sentence 4 (use any suffix word): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Suffix Word Art",
        instruction:
          "Create a 'Suffix Tree' artwork where the trunk shows a base word and each branch shows a different suffix form.",
        parentTip: "Display the completed tree — visual representations of word knowledge build lasting retention.",
        suggestions: [
          "Choose a base word that works with all three suffixes (e.g. help, power, thought)",
          "Draw a tree with the base word at the trunk",
          "Write -ness, -ful and -less versions on separate branches with their meanings",
          "Decorate with colours representing: -ness = blue, -ful = yellow, -less = grey",
          "Share your tree with a family member and explain each branch",
        ],
      },

      // ── CONSOLIDATING (51–80) ─────────────────────────────────────
      {
        type: "open-response",
        title: "Suffix Words in an Informational Passage",
        instruction:
          "Read this short passage and answer the questions below.\n\nPASSAGE: The ocean is both beautiful and dangerous. Its vastness fills swimmers with a sense of wonder, yet its power can make even strong adults feel helpless. Marine biologists study ocean life carefully, showing great thoughtfulness in their work. The darkness of the deep sea is one of the least explored environments on Earth. Despite this, scientists remain hopeful that new discoveries await below the surface.",
        parentTip: "Read aloud together first, then work through the questions.",
        prompts: [
          { text: "List 5 suffix words from the passage: ___", type: "lines", lines: 2 },
          { text: "What suffix does 'helpless' use? What does it mean in context?", type: "lines", lines: 2 },
          { text: "Why do you think the author used 'thoughtfulness' rather than 'careful'?", type: "lines", lines: 2 },
          { text: "Rewrite this sentence replacing 'hopeful' with a different -ful word: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Positive, Negative or Neutral Meaning?",
        instruction:
          "Sort each suffix word by the feeling or meaning it suggests.",
        columns: ["Positive", "Negative", "Neutral / depends on context"],
        items: [
          { label: "kindness" },
          { label: "careless" },
          { label: "brightness" },
          { label: "hopeless" },
          { label: "joyful" },
          { label: "darkness" },
          { label: "thankful" },
          { label: "thoughtless" },
          { label: "restlessness" },
          { label: "powerful" },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite the Bland Sentence",
        instruction:
          "Replace the underlined word or phrase in each sentence with a more precise suffix word.",
        prompts: [
          { text: "'He felt sad about losing the game.' → Rewrite using a -ness word: ___", type: "lines", lines: 2 },
          { text: "'She was full of thanks after receiving help.' → Rewrite using a -ful word: ___", type: "lines", lines: 2 },
          { text: "'Without care, he knocked over the vase.' → Rewrite using a -less word: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Suffix Changes the Word Class?",
        instruction:
          "Circle which suffix changes the word class of the base word.",
        parentTip: "Discuss: -ness changes an adjective to a noun; -ful and -less change a noun or adjective to an adjective.",
        questions: [
          { prompt: "kind (adjective) → kindness (noun). Which suffix changed it?", options: ["-ness", "-ful", "-less"] },
          { prompt: "joy (noun) → joyful (adjective). Which suffix changed it?", options: ["-ness", "-ful", "-less"] },
          { prompt: "help (noun/verb) → helpless (adjective). Which suffix changed it?", options: ["-ness", "-ful", "-less"] },
        ],
      },
      {
        type: "open-response",
        title: "Write a Character Description Using Suffix Words",
        instruction:
          "Describe a character from a book you are reading (or invent one). Use at least one -ness word, one -ful word, and one -less word to describe their personality. Underline each suffix word.",
        prompts: [
          { text: "Character name: ___", type: "lines", lines: 1 },
          { text: "My description:", type: "lines", lines: 6 },
          { text: "Suffix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Suffix Word to the Correct Text Type",
        instruction:
          "Draw a line to match each word to the type of text it most often appears in.",
        left: ["kindness", "powerless", "brightness", "cheerful", "darkness", "hopeful"],
        right: [
          "narrative story about a hero's quest",
          "poetry about the night sky",
          "news report about a natural disaster",
          "children's picture book",
          "persuasive letter",
          "informational text about sunlight",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Word in Different Sentences",
        instruction:
          "Take the word 'powerful' and write three sentences that show three completely different meanings or uses of the word.",
        parentTip: "Words can be used in different contexts — physical power, emotional power, political power, etc.",
        prompts: [
          { text: "Sentence 1 (physical power): ___", type: "lines", lines: 2 },
          { text: "Sentence 2 (emotional power): ___", type: "lines", lines: 2 },
          { text: "Sentence 3 (another type of power): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Suffix Words from Fiction and Non-Fiction",
        instruction:
          "Sort these suffix words by whether they are more commonly found in fiction or non-fiction texts.",
        parentTip: "Many words appear in both — use 'mainly' as a guide rather than 'only'.",
        columns: ["Mainly in fiction", "Mainly in non-fiction", "Common in both"],
        items: [
          { label: "helpless" },
          { label: "harmful" },
          { label: "kindness" },
          { label: "powerless" },
          { label: "brightness" },
          { label: "thoughtfulness" },
          { label: "joyful" },
          { label: "careless" },
          { label: "darkness" },
        ],
      },
      {
        type: "open-response",
        title: "Craft a Narrative Opening",
        instruction:
          "Write the opening paragraph of a story (4–5 sentences) that includes at least three suffix words. Your opening should hook the reader straight away.",
        prompts: [
          { text: "My story opening:", type: "lines", lines: 7 },
          { text: "Suffix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Suffix Word Book",
        instruction:
          "Create a personal Suffix Word Book with pages for -ness, -ful, and -less. Add new words as you find them each week.",
        parentTip: "A small exercise book works perfectly. Encourage your child to add to it during all their subjects — not just English.",
        suggestions: [
          "Label one page: -ness words. Add 5 words with definitions and sentences.",
          "Label one page: -ful words. Add 5 words with definitions and sentences.",
          "Label one page: -less words. Add 5 words with definitions and sentences.",
          "Illustrate at least 3 of your favourite suffix words",
          "Keep adding to the book all year — aim for 50 suffix words by the end of the year",
        ],
      },

      // ── EXTENDING (81–100) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Compare -ness with -ity",
        instruction:
          "The suffix -ity also creates nouns from adjectives (e.g. electric → electricity, creative → creativity). Compare -ness and -ity. What kinds of words use each suffix?",
        prompts: [
          { text: "Three -ness words and their base adjectives: ___", type: "lines", lines: 1 },
          { text: "Three -ity words and their base adjectives: ___", type: "lines", lines: 1 },
          { text: "What pattern do you notice about which base words use -ness vs -ity?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Suffix Words by Number of Syllables",
        instruction:
          "Sort each word by how many syllables it has.",
        parentTip: "Clap each syllable: help-less = 2, won-der-ful = 3, hap-pi-ness = 3.",
        columns: ["2 syllables", "3 syllables", "4 syllables"],
        items: [
          { label: "helpless" },
          { label: "kindness" },
          { label: "wonderful" },
          { label: "happiness" },
          { label: "carefully" },
          { label: "thoughtfulness" },
          { label: "powerless" },
          { label: "joyful" },
          { label: "carefulness" },
          { label: "restlessness" },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words in Poetry Analysis",
        instruction:
          "Find a poem in a book or online and search for suffix words. Write 3 you find. For each, explain: what suffix it has, what the base word means, and how the suffix word adds to the poem's meaning or tone.",
        prompts: [
          { text: "Poem title and author: ___", type: "lines", lines: 1 },
          { text: "Suffix word 1: ___  Effect in the poem: ___", type: "lines", lines: 2 },
          { text: "Suffix word 2: ___  Effect in the poem: ___", type: "lines", lines: 2 },
          { text: "Suffix word 3: ___  Effect in the poem: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Author's Word Choice: Why This Suffix Word?",
        instruction:
          "Read each sentence. Choose the reason the author most likely chose that specific suffix word.",
        questions: [
          {
            prompt: "'The city was plunged into darkness and silence.' Why 'darkness'?",
            options: [
              "It's shorter than 'dark'.",
              "It is a noun, fitting the sentence structure 'into ___' and creating a stronger image than the adjective 'dark'.",
              "It rhymes with another word in the paragraph.",
            ],
          },
          {
            prompt: "'She was hopeful the tide would turn.' Why 'hopeful' rather than 'hoping'?",
            options: [
              "'Hopeful' describes a state of being — a sustained feeling — while 'hoping' is just an action.",
              "'Hopeful' is easier to spell.",
              "'Hopeful' means the same as 'sure'.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Persuasive Paragraph Using Suffix Words",
        instruction:
          "Write a persuasive paragraph (5–7 sentences) about why kindness is important. Use at least 4 suffix words. Underline each one.",
        parentTip: "Persuasive writing uses strong, precise language — suffix words are perfect for this.",
        prompts: [
          { text: "My persuasive paragraph:", type: "lines", lines: 8 },
          { text: "Suffix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Word Innovations",
        instruction:
          "Invent 3 new words by adding -ness, -ful or -less to unusual base words. Explain each word's meaning and use it in a sentence.",
        parentTip: "This playful activity builds deep understanding of how suffixes work.",
        prompts: [
          { text: "New word 1: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "New word 2: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "New word 3: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Positive and Negative Connotations",
        instruction:
          "Some suffix words have a positive connotation, some negative, and some neutral. Sort these words.",
        columns: ["Positive connotation", "Negative connotation", "Neutral"],
        items: [
          { label: "cheerfulness" },
          { label: "reckless" },
          { label: "brightness" },
          { label: "helpless" },
          { label: "thankful" },
          { label: "thoughtless" },
          { label: "restlessness" },
          { label: "powerful" },
          { label: "sadness" },
          { label: "harmless" },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Word Extended Writing: A Nature Description",
        instruction:
          "Write a description of a natural scene (a storm, a sunset, a forest, a beach) of 8–10 sentences. Use at least 6 suffix words (-ness, -ful, -less). Circle each suffix word. Make the writing as vivid as possible.",
        prompts: [
          { text: "My scene title: ___", type: "lines", lines: 1 },
          { text: "My description:", type: "lines", lines: 12 },
          { text: "Suffix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Design a Suffix Word Challenge",
        instruction:
          "Design a 5-question quiz about -ness, -ful and -less that you could give to a friend or family member. Write the questions AND the answers.",
        prompts: [
          { text: "Q1: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q2: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q3: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q4: ___  A: ___", type: "lines", lines: 2 },
          { text: "Q5: ___  A: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Teach It Back — Suffixes",
        instruction:
          "Teach a family member everything you know about the suffixes -ness, -ful and -less. Create a lesson, give examples, and quiz your student!",
        parentTip: "Act as a supportive audience member and ask genuine questions during your child's lesson. The teaching experience deepens understanding enormously.",
        suggestions: [
          "Plan a 5-minute lesson with an introduction, examples and an activity",
          "Create a quiz of 5 questions for your family member",
          "Use at least 3 examples of each suffix in your lesson",
          "After the lesson, write one reflection: what was easiest to teach? What was hardest?",
          "Celebrate finishing this worksheet — you are now a suffix expert!",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words: Foundational Review",
        instruction:
          "Write one sentence for each suffix word below that clearly shows its meaning.",
        parentTip: "If the sentence could make sense with a completely different suffix word, it is too vague — encourage more specific sentences.",
        prompts: [
          { text: "thoughtfulness: ___", type: "lines", lines: 2 },
          { text: "harmless: ___", type: "lines", lines: 2 },
          { text: "loneliness: ___", type: "lines", lines: 2 },
          { text: "cheerful: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: -ness, -ful or -less — Which Suffix Best Completes Each Word?",
        instruction:
          "Write the correct suffix to make a real word. Then sort the completed words.",
        parentTip: "Some base words may work with more than one suffix — accept all real words.",
        columns: ["-ness words", "-ful words", "-less words"],
        items: [
          { label: "thought + ___" },
          { label: "harm + ___" },
          { label: "bold + ___" },
          { label: "play + ___" },
          { label: "rest + ___" },
          { label: "lone + ___" },
          { label: "colour + ___" },
          { label: "grace + ___" },
          { label: "ill + ___" },
        ],
      },
      {
        type: "circle-correct",
        title: "Select the Best Suffix Word for Each Context",
        instruction:
          "Circle the word that most precisely fits each sentence.",
        questions: [
          {
            prompt: "Her ___ in everything she did won her many admirers.",
            options: ["graceful", "gracefulness", "graceless"],
          },
          {
            prompt: "The ___ of the winter evening made her feel very alone.",
            options: ["darkness", "darkful", "darkless"],
          },
          {
            prompt: "He was ___ with his compliments — he never said a kind word.",
            options: ["thankful", "thoughtless", "thankless"],
          },
          {
            prompt: "The kitten's ___ was evident as it chased leaves in circles.",
            options: ["playful", "playfulness", "playless"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Narrative Paragraph Using Suffix Words",
        instruction:
          "Write a narrative paragraph (5–6 sentences) about a moment of kindness. Use at least one -ness word, one -ful word, and one -less word. Underline each suffix word.",
        prompts: [
          { text: "My narrative:", type: "lines", lines: 7 },
          { text: "Suffix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Suffix Word to Its Antonym",
        instruction:
          "Draw a line to match each suffix word to its antonym (opposite meaning word).",
        left: ["hopeless", "careless", "darkness", "joyful", "powerless"],
        right: [
          "sadness",
          "radiance",
          "careful",
          "powerful",
          "hopeful",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words in Science Writing",
        instruction:
          "Science writing uses precise suffix words. Complete each sentence with the most appropriate suffix word from the box.\n\nWord box: harmless, brightness, powerful, restless, useful, carefulness",
        prompts: [
          { text: "Scientists handle chemicals with great ___ to avoid accidents.", type: "lines", lines: 1 },
          { text: "The bacteria were found to be ___ to humans in small amounts.", type: "lines", lines: 1 },
          { text: "The ___ of the new LED light was measured using a lux meter.", type: "lines", lines: 1 },
          { text: "The magnifying glass proved ___ for examining tiny specimens.", type: "lines", lines: 1 },
          { text: "The electromagnet was extremely ___ — it could lift 50 kilograms.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Suffix Words That Describe Feelings vs Things",
        instruction:
          "Sort each suffix word into the correct column.",
        parentTip: "Words describing feelings tell us about emotional states. Words describing things tell us about objects or situations.",
        columns: ["Describes a feeling or emotion", "Describes an object, situation or quality"],
        items: [
          { label: "sadness" },
          { label: "brightness" },
          { label: "hopeful" },
          { label: "harmless" },
          { label: "joyful" },
          { label: "colourless" },
          { label: "loneliness" },
          { label: "useful" },
          { label: "restless" },
          { label: "powerless" },
        ],
      },
      {
        type: "open-response",
        title: "Write a Letter Using Suffix Words",
        instruction:
          "Write a short letter (5–6 sentences) from one character to another. Include at least 4 suffix words. Set it out with a greeting and sign-off.",
        prompts: [
          { text: "My letter:", type: "lines", lines: 8 },
          { text: "Suffix words used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words: My Favourite Five",
        instruction:
          "Choose your 5 favourite suffix words from this worksheet. For each, write: the word, its base, its suffix, its meaning, and an original sentence.",
        prompts: [
          { text: "1. Word: ___  Base: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "2. Word: ___  Base: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "3. Word: ___  Base: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "4. Word: ___  Base: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
          { text: "5. Word: ___  Base: ___  Suffix: ___  Meaning: ___  Sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Word Cross-Subject Hunt",
        instruction:
          "Find suffix words (-ness, -ful, -less) in your other school subjects this week. Record each word, where you found it, and what it means in context.",
        prompts: [
          { text: "Subject 1: ___  Suffix word: ___  Meaning in context: ___", type: "lines", lines: 1 },
          { text: "Subject 2: ___  Suffix word: ___  Meaning in context: ___", type: "lines", lines: 1 },
          { text: "Subject 3: ___  Suffix word: ___  Meaning in context: ___", type: "lines", lines: 1 },
          { text: "What did you notice about suffix words across subjects?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Build a Suffix Word Ladder",
        instruction:
          "Start with a base word. Add -ness to make a noun. Then use that word in a sentence. Then find a synonym for that -ness word. Then find a sentence in a book that uses a similar word. Build the whole ladder!",
        prompts: [
          { text: "Base word: ___  + -ness = ___", type: "lines", lines: 1 },
          { text: "Sentence using the -ness word: ___", type: "lines", lines: 2 },
          { text: "A synonym for your -ness word: ___", type: "lines", lines: 1 },
          { text: "A similar word found in a book: ___  (Book: ___)", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Advanced: Which Suffix Creates the Best Effect?",
        instruction:
          "Read each sentence. Circle the suffix word that creates the most powerful or precise effect.",
        questions: [
          {
            prompt: "The ___ of the desert night was absolute — not a sound for miles.",
            options: ["quietness", "silence", "quietful"],
          },
          {
            prompt: "Despite everything, she remained ___ that the situation would improve.",
            options: ["hopeful", "hopeness", "hopelike"],
          },
          {
            prompt: "His ___ with money was well known — he never spent a cent unnecessarily.",
            options: ["careful", "carefulness", "careless"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Extended Writing: The Power of Kindness",
        instruction:
          "Write a personal essay or story of 8–10 sentences about the power of kindness. Use at least 6 suffix words (-ness, -ful, -less). Underline each one.",
        parentTip: "A personal essay shares a genuine opinion or experience. This is a good opportunity to discuss real kindness the child has experienced or shown.",
        prompts: [
          { text: "Title: ___", type: "lines", lines: 1 },
          { text: "My writing:", type: "lines", lines: 12 },
          { text: "Suffix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Suffix Words Improve Your Vocabulary Score",
        instruction:
          "Research shows that students who know how suffixes work have significantly larger vocabularies. Every time you learn one suffix, you gain access to dozens of words. Keep adding to your suffix word collection all year!",
        suggestions: [
          "Add 3 new suffix words to your vocabulary notebook this week",
          "Find one suffix word in each subject you study",
          "Use one -ness, -ful and -less word in your writing each week",
          "Challenge: can you use 10 different suffix words in a single piece of writing?",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Reflection and Goal Setting",
        instruction:
          "Reflect on your learning about suffixes and set a goal for your ongoing vocabulary development.",
        prompts: [
          { text: "Three things I learned about suffixes: 1. ___ 2. ___ 3. ___", type: "lines", lines: 3 },
          { text: "The suffix word I am most proud of learning: ___", type: "lines", lines: 1 },
          { text: "My vocabulary goal: I will try to use ___ suffix word(s) in my writing each week.", type: "lines", lines: 1 },
          { text: "One suffix I want to learn more about: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Suffix Word Gallery Walk",
        instruction:
          "Create a Suffix Word Gallery! Write 12 suffix words (4 of each: -ness, -ful, -less) on separate cards. Add illustrations and definitions. Display them for your family to view.",
        parentTip: "Physical word displays reinforce vocabulary learning through repeated visual exposure. Encourage your child to add more cards over time.",
        suggestions: [
          "Create 4 -ness cards, 4 -ful cards and 4 -less cards",
          "Each card: word, base word, definition, illustration",
          "Arrange them in three groups by suffix",
          "Give a gallery tour to a family member",
          "Add new cards each week as you learn new suffix words",
        ],
      },
      {
        type: "matching",
        title: "Final Match: Suffix Word Mastery",
        instruction:
          "This final matching activity uses sophisticated suffix words. Draw a line to match each word to its meaning.",
        parentTip: "Use the suffix to narrow down the meaning, then use context knowledge to finalise.",
        left: ["thoughtfulness", "recklessness", "gracefulness", "restlessness", "boundlessness"],
        right: [
          "the state of having no limits or boundaries",
          "the quality of moving in a smooth, elegant way",
          "the state of being unable to stay still or calm",
          "careless behaviour that ignores danger",
          "the quality of being considerate of others' needs and feelings",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Mastery: Write Your Best Paragraph",
        instruction:
          "Write the best paragraph you can (5–6 sentences) that demonstrates everything you know about suffix words. It should: use a variety of suffix types, show clear understanding of their meanings, and be well-written with correct spelling.",
        prompts: [
          { text: "My best suffix paragraph:", type: "lines", lines: 7 },
          { text: "Suffix words I used: ___", type: "lines", lines: 1 },
          { text: "I am proud of this because: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Suffix Challenge: Correct or Incorrect?",
        instruction: "Circle whether each suffix word is used CORRECTLY or INCORRECTLY in the sentence.",
        parentTip: "Checking usage in context is a key comprehension skill for suffix words.",
        questions: [
          { prompt: "She felt happiness because she was sad.", options: ["correct", "incorrect"] },
          { prompt: "The puppy was playful during the game.", options: ["correct", "incorrect"] },
          { prompt: "He was careless and put everything away neatly.", options: ["correct", "incorrect"] },
          { prompt: "The darkness made it hard to see.", options: ["correct", "incorrect"] },
          { prompt: "She was thankful for the gift.", options: ["correct", "incorrect"] },
          { prompt: "They were powerless and fixed everything easily.", options: ["correct", "incorrect"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Suffix Words by Part of Speech They Create",
        instruction: "All suffix words here are nouns or adjectives. Sort them into the correct group.",
        columns: ["Noun (-ness)", "Adjective (-ful)", "Adjective (-less)"],
        items: [
          { label: "kindness" },
          { label: "wonderful" },
          { label: "hopeless" },
          { label: "darkness" },
          { label: "joyful" },
          { label: "restless" },
          { label: "sadness" },
          { label: "cheerful" },
          { label: "speechless" },
        ],
      },
      {
        type: "matching",
        title: "Match: Suffix Word to Its Opposite",
        instruction: "Draw a line from each word to its opposite.",
        left: ["hopeful", "careless", "happiness", "fearless", "darkness"],
        right: [
          "hopeless",
          "careful",
          "sadness",
          "fearful",
          "brightness",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words in Context: Character Description",
        instruction:
          "Write a description of a character using at least one -ness word, one -ful word, and one -less word. The character can be real or imaginary.",
        parentTip: "Encourage your child to make the suffix words feel natural in their description rather than forced.",
        prompts: [
          { text: "My character's name: ___", type: "lines", lines: 1 },
          { text: "My description:", type: "lines", lines: 5 },
          { text: "Suffix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Suffix Fits Best?",
        instruction: "Circle the suffix that makes the correct word for each sentence.",
        questions: [
          { prompt: "She showed great kind___ to the new student.", options: ["-ness", "-ful", "-less"] },
          { prompt: "The children were fear___ during the thunderstorm.", options: ["-ness", "-ful", "-less"] },
          { prompt: "His speech___ reaction told us he was amazed.", options: ["-ness", "-ful", "-less"] },
          { prompt: "The teacher was help___ when students were confused.", options: ["-ness", "-ful", "-less"] },
          { prompt: "A deep sad___ came over her when she heard the news.", options: ["-ness", "-ful", "-less"] },
        ],
      },
      {
        type: "sequence",
        title: "Order: Steps for Using a Suffix Word Accurately",
        instruction: "Put these steps in the right order for checking you've used a suffix word correctly.",
        items: [
          { label: "Identify the base word (e.g. kind)" },
          { label: "Choose the right suffix for the meaning you want" },
          { label: "Check: does the new word sound right?" },
          { label: "Use it in a sentence" },
          { label: "Read the sentence aloud to check it makes sense" },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words Across the Day",
        instruction:
          "Think of three different times during your day when you could use a suffix word to describe a feeling or quality. Write a sentence for each moment.",
        prompts: [
          { text: "Morning moment: ___", type: "lines", lines: 2 },
          { text: "Afternoon moment: ___", type: "lines", lines: 2 },
          { text: "Evening moment: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Formal or Informal Suffix Words",
        instruction: "Some suffix words are more formal (used in essays/reports). Sort them.",
        columns: ["Formal", "Informal / Everyday"],
        items: [
          { label: "happiness" },
          { label: "joyfulness" },
          { label: "sadness" },
          { label: "cheerfulness" },
          { label: "useless" },
          { label: "powerlessness" },
          { label: "thankful" },
          { label: "grateful" },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: How to Build Your Suffix Vocabulary",
        instruction:
          "Each week, learn 3 new suffix words: one ending in -ness, one in -ful, and one in -less. Write them in a special section of your notebook with their meaning and an example sentence.",
        suggestions: [
          "This week's -ness word: ___  Meaning: ___",
          "This week's -ful word: ___  Meaning: ___",
          "This week's -less word: ___  Meaning: ___",
          "Use each in a sentence",
          "Test yourself at the end of the week by covering the meanings",
        ],
      },
      {
        type: "matching",
        title: "Match: Suffix Word to the Right Context",
        instruction: "Draw a line to match each suffix word to the sentence where it fits best.",
        left: [
          "darkness",
          "skilful",
          "breathless",
          "kindness",
          "worthless",
        ],
        right: [
          "After running the race, she arrived ___.",
          "The cave was filled with complete ___.",
          "His ___ painting impressed the judges.",
          "The old coins turned out to be ___.",
          "She showed great ___ by sharing her lunch.",
        ],
      },
      {
        type: "circle-correct",
        title: "Suffix Word: Noun or Adjective?",
        instruction: "Circle the part of speech each suffix word belongs to.",
        parentTip: "-ness words are almost always nouns; -ful and -less words are almost always adjectives.",
        questions: [
          { prompt: "sadness", options: ["noun", "adjective"] },
          { prompt: "fearful", options: ["noun", "adjective"] },
          { prompt: "brightness", options: ["noun", "adjective"] },
          { prompt: "harmless", options: ["noun", "adjective"] },
          { prompt: "gentleness", options: ["noun", "adjective"] },
          { prompt: "hopeful", options: ["noun", "adjective"] },
        ],
      },
      {
        type: "open-response",
        title: "Write a Suffix Word Poem",
        instruction:
          "Write a short poem (at least 4 lines) about one of these themes: kindness, darkness, or hopeful. Use at least 3 suffix words in your poem.",
        parentTip: "Poetry gives children permission to use suffix words expressively without worrying about grammar rules. Any style is welcome.",
        prompts: [
          { text: "My theme: ___  My poem:", type: "lines", lines: 6 },
          { text: "Suffix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Suffix Words by Emotional Tone",
        instruction: "Sort these suffix words by the feeling they usually express.",
        columns: ["Positive", "Negative", "Neutral"],
        items: [
          { label: "joyful" },
          { label: "hopeless" },
          { label: "awareness" },
          { label: "cheerfulness" },
          { label: "careless" },
          { label: "roughness" },
          { label: "wonderful" },
          { label: "speechless" },
          { label: "calmness" },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Dictionary Page",
        instruction:
          "Create a mini dictionary page for the suffix -less. Write the suffix definition, give 5 example words with their meanings, and show how to use two of them in sentences.",
        prompts: [
          { text: "The suffix -less means: ___", type: "lines", lines: 1 },
          { text: "Five -less words and their meanings:", type: "lines", lines: 5 },
          { text: "Two sentences using -less words:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "home-activity",
        title: "Suffix Scavenger Hunt: Find Them in Books",
        instruction:
          "Open any book at a random page. Find one -ness word, one -ful word, and one -less word. Write down the word, the sentence it appears in, and what it means in context.",
        parentTip: "If your child can't find all three types on one page, allow them to use a few different pages.",
        suggestions: [
          "-ness word: ___  Sentence: ___  Meaning: ___",
          "-ful word: ___  Sentence: ___  Meaning: ___",
          "-less word: ___  Sentence: ___  Meaning: ___",
          "Which was easiest to find? ___",
          "What does this tell you about how common these suffixes are?",
        ],
      },
      {
        type: "circle-correct",
        title: "Suffix Word: Correct Spelling?",
        instruction: "Circle the correctly spelled suffix word in each pair.",
        questions: [
          { prompt: "kindness or kindniss?", options: ["kindness", "kindniss"] },
          { prompt: "careful or carefull?", options: ["careful", "carefull"] },
          { prompt: "hopeless or hopeles?", options: ["hopeless", "hopeles"] },
          { prompt: "happiness or happyness?", options: ["happiness", "happyness"] },
          { prompt: "fearful or feerful?", options: ["fearful", "feerful"] },
          { prompt: "worthless or worthlass?", options: ["worthless", "worthlass"] },
        ],
      },
      {
        type: "sequence",
        title: "Order: Suffix Words from Simplest to Most Complex",
        instruction: "Put these -less words in order from the simplest (shortest, most common) to the most complex (longest, less common).",
        items: [
          { label: "harmless" },
          { label: "useless" },
          { label: "powerless" },
          { label: "thoughtless" },
          { label: "expressionless" },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Words: Formal Letter Opening",
        instruction:
          "Write the opening paragraph (2–3 sentences) of a formal letter using at least two suffix words. The letter could be to a principal, council, or author.",
        prompts: [
          { text: "Dear ___, ", type: "lines", lines: 1 },
          { text: "My opening paragraph:", type: "lines", lines: 4 },
          { text: "Suffix words I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Suffix Word to Its Definition Category",
        instruction: "Match each suffix word to whether it describes a STATE, QUALITY, or CHARACTERISTIC.",
        left: ["sadness", "helpful", "careless", "darkness", "cheerful"],
        right: [
          "quality — being ready to assist",
          "state — the condition of being sad",
          "characteristic — acting without care",
          "state — the absence of light",
          "quality — having a happy disposition",
        ],
      },
      {
        type: "open-response",
        title: "Suffix Self-Assessment and Goals",
        instruction:
          "Reflect on your understanding of suffixes. Be honest about what you know well and what you are still learning.",
        prompts: [
          { text: "I understand -ness because: ___", type: "lines", lines: 2 },
          { text: "I understand -ful because: ___", type: "lines", lines: 2 },
          { text: "I understand -less because: ___", type: "lines", lines: 2 },
          { text: "My next learning goal with suffixes: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Suffix Word of the Week",
        instruction:
          "Each day this week, choose one advanced suffix word to be your 'word of the day'. Use it in conversation, look for it in reading, and write one sentence with it.",
        parentTip: "Consistency over five days dramatically increases the chance a new word enters long-term memory.",
        suggestions: [
          "Monday: Choose a -ness word and use it at dinner",
          "Tuesday: Choose a -ful word and write it on a sticky note",
          "Wednesday: Choose a -less word and find it in a book",
          "Thursday: Use all three words in one paragraph",
          "Friday: Test yourself — can you define all five words from memory?",
        ],
      },
      {
        type: "open-response",
        title: "Spark: Suffix Word Investigation Report",
        instruction:
          "Choose ONE suffix (-ness, -ful, or -less) and write a short 'investigation report' about it. Find 10 example words, explain the meaning pattern, and share your most surprising finding.",
        parentTip: "This culminating investigation develops research habits and deep morphological knowledge.",
        prompts: [
          { text: "My chosen suffix: ___  My 10 example words:", type: "lines", lines: 3 },
          { text: "The meaning pattern I noticed: ___", type: "lines", lines: 2 },
          { text: "My most surprising finding: ___", type: "lines", lines: 2 },
          { text: "One question I still have: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Suffix Mastery: Final Reflection",
        instruction:
          "Write your final reflection on what you have learned about suffixes -ness, -ful and -less. What do you understand now that you didn't before? How will you use suffix knowledge in your own reading and writing?",
        parentTip: "A final reflection helps consolidate everything learned. Encourage your child to be specific: which suffix, which word, which moment helped the most.",
        prompts: [
          { text: "The most important thing I learned about suffixes: ___", type: "lines", lines: 2 },
          { text: "A word I will use more often from now on: ___  Because: ___", type: "lines", lines: 2 },
          { text: "How suffix knowledge helps me as a reader: ___", type: "lines", lines: 2 },
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
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
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
        parentTip: "Remind your child: adverbs often tell us HOW, WHEN or WHERE the action happened.",
        questions: [
          { prompt: "She whispered softly into the quiet room.", options: ["whispered", "softly", "quiet"] },
          { prompt: "The cat crept silently toward the bird.", options: ["silently", "crept", "toward"] },
          { prompt: "He suddenly stopped at the top of the hill.", options: ["suddenly", "stopped", "top"] },
          { prompt: "The children played happily all afternoon.", options: ["children", "played", "happily"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Adjective or Adverb?",
        instruction:
          "Sort each word into the correct column.",
        parentTip: "Adjectives describe nouns (a fluffy dog). Adverbs describe verbs (she ran quickly).",
        columns: ["Adjective (describes a noun)", "Adverb (describes a verb)"],
        items: [
          { label: "quickly" },
          { label: "enormous" },
          { label: "silently" },
          { label: "ancient" },
          { label: "suddenly" },
          { label: "beautiful" },
          { label: "softly" },
          { label: "golden" },
          { label: "bravely" },
          { label: "tiny" },
        ],
      },
      {
        type: "open-response",
        title: "Add Adjectives to the Noun Group",
        instruction:
          "Expand each plain noun by adding adjectives. Write the full expanded noun group.",
        prompts: [
          { text: "dog → an ___, ___ dog", type: "lines", lines: 1 },
          { text: "house → a ___, ___ house", type: "lines", lines: 1 },
          { text: "ocean → the ___, ___ ocean", type: "lines", lines: 1 },
          { text: "night → a ___, ___ night", type: "lines", lines: 1 },
          { text: "forest → a ___, ___ forest", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Adverb to the Verb It Describes",
        instruction:
          "Draw a line to match each adverb to the verb it best describes.",
        parentTip: "Some pairings may have more than one right answer — the goal is to think about which makes the most sense.",
        left: ["softly", "quickly", "suddenly", "carefully", "loudly"],
        right: ["ran", "sang", "stopped", "whispered", "painted"],
      },
      {
        type: "circle-correct",
        title: "Which Is the Expanded Noun Group?",
        instruction:
          "Circle the option that is an expanded noun group (a noun with adjectives added).",
        questions: [
          {
            prompt: "Which is the expanded noun group?",
            options: ["the dog ran", "the small, friendly dog", "the dog quickly"],
          },
          {
            prompt: "Which is the expanded noun group?",
            options: ["a river", "a wide, rushing river", "the river flowed slowly"],
          },
          {
            prompt: "Which is the expanded noun group?",
            options: ["beautiful bird", "a beautiful, brightly-coloured bird", "the bird sang"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Add an Adverb to Each Sentence",
        instruction:
          "Add an adverb to describe the verb in each sentence. Rewrite the sentence with the adverb added.",
        parentTip: "Ask: how did it happen? When? Where? The answer is usually an adverb.",
        prompts: [
          { text: "The lion roared. → The lion roared ___.", type: "lines", lines: 1 },
          { text: "She smiled. → She smiled ___.", type: "lines", lines: 1 },
          { text: "The boy climbed. → The boy climbed ___.", type: "lines", lines: 1 },
          { text: "The snow fell. → The snow fell ___.", type: "lines", lines: 1 },
          { text: "He waited. → He waited ___.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort Adverbs by Type",
        instruction:
          "Sort each adverb into the correct column based on what it tells us.",
        parentTip: "Adverbs of manner = how, time = when, place = where.",
        columns: ["How (manner)", "When (time)", "Where (place)"],
        items: [
          { label: "quickly" },
          { label: "yesterday" },
          { label: "nearby" },
          { label: "softly" },
          { label: "soon" },
          { label: "outside" },
          { label: "suddenly" },
          { label: "later" },
          { label: "here" },
          { label: "carefully" },
          { label: "always" },
          { label: "everywhere" },
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
        type: "circle-correct",
        title: "Spot the Adverb in the Sentence",
        instruction:
          "Circle the adverb in each sentence.",
        questions: [
          {
            prompt: "The old woman walked slowly up the steep hill.",
            options: ["old", "slowly", "steep"],
          },
          {
            prompt: "She nervously opened the mysterious envelope.",
            options: ["nervously", "mysterious", "opened"],
          },
          {
            prompt: "The tiny kitten mewed softly from under the bed.",
            options: ["tiny", "softly", "under"],
          },
          {
            prompt: "He bravely entered the dark, dripping cave.",
            options: ["dark", "bravely", "dripping"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Plain Noun to Expanded Noun Group",
        instruction:
          "Draw a line to match each plain noun to its expanded noun group.",
        left: ["cat", "river", "storm", "forest", "mountain"],
        right: [
          "a tall, snow-capped mountain",
          "a sleek, black cat",
          "a wide, sparkling river",
          "a dark, ancient forest",
          "a fierce, electrical storm",
        ],
      },
      {
        type: "open-response",
        title: "Build a Noun Group Using a Checklist",
        instruction:
          "Use the checklist to build an expanded noun group for each noun. You don't need to use all the categories!",
        parentTip: "Checklist: size, colour, texture, age, material, origin. Using 2–3 is enough.",
        prompts: [
          { text: "Noun: bridge → My expanded noun group: ___", type: "lines", lines: 1 },
          { text: "Noun: garden → My expanded noun group: ___", type: "lines", lines: 1 },
          { text: "Noun: soldier → My expanded noun group: ___", type: "lines", lines: 1 },
          { text: "Noun: book → My expanded noun group: ___", type: "lines", lines: 1 },
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
      {
        type: "home-activity",
        title: "Tip: Adjectives and Adverbs Make Writing Vivid",
        instruction:
          "Remember: expanded noun groups add adjectives BEFORE the noun (the old, creaky door). Adverbs add how/when/where AFTER the verb (she walked slowly). Both together make writing come alive!",
        suggestions: [
          "Find one expanded noun group in a book you are reading",
          "Find one adverb in a book you are reading",
          "Write them both down and note which adjectives and adverbs the author chose",
          "Ask: why did the author choose those particular words?",
        ],
      },
      {
        type: "sorting",
        title: "Sort Adjectives by Category",
        instruction:
          "Sort these adjectives into the category of detail they add to a noun.",
        parentTip: "Writers often choose adjectives from different categories to create a richer picture.",
        columns: ["Size", "Colour", "Texture/Feel", "Age/Condition"],
        items: [
          { label: "enormous" },
          { label: "golden" },
          { label: "rough" },
          { label: "ancient" },
          { label: "tiny" },
          { label: "crimson" },
          { label: "smooth" },
          { label: "crumbling" },
          { label: "vast" },
          { label: "silver" },
          { label: "jagged" },
          { label: "weathered" },
        ],
      },
      {
        type: "open-response",
        title: "Choose the Best Adverb",
        instruction:
          "For each sentence, choose the most effective adverb from the box and write the complete sentence.\n\nAdverb box: frantically, gently, cautiously, triumphantly, mournfully",
        prompts: [
          { text: "She placed the baby bird back in the nest ___.", type: "lines", lines: 1 },
          { text: "The explorer ___  approached the edge of the cliff.", type: "lines", lines: 1 },
          { text: "He raised the trophy ___ after winning the race.", type: "lines", lines: 1 },
          { text: "She searched ___ for her lost keys before the bus left.", type: "lines", lines: 1 },
          { text: "The dog howled ___ at the empty house.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Adverb Fits Best?",
        instruction:
          "Circle the adverb that best fits the meaning of each sentence.",
        questions: [
          {
            prompt: "The injured bird hopped ___ across the grass.",
            options: ["loudly", "painfully", "cheerfully"],
          },
          {
            prompt: "She ___ looked both ways before crossing the road.",
            options: ["carelessly", "carefully", "quickly"],
          },
          {
            prompt: "The old door ___ swung open in the wind.",
            options: ["silently", "brightly", "creakily"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Author Detective",
        instruction:
          "Open any picture book or chapter book and do an Author Detective investigation. Count how many expanded noun groups and adverbs the author uses on two pages.",
        parentTip: "Share the book together. Take turns being the detective — one person hunts noun groups, the other hunts adverbs.",
        suggestions: [
          "Read two pages of a book and mark every adjective in a noun group",
          "Mark every adverb (how, when, where)",
          "Count: how many expanded noun groups? How many adverbs?",
          "Write your favourite example of each",
          "Discuss: why do you think good authors use these so often?",
        ],
      },

      // ── DEVELOPING (21–50) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Improve the Plain Sentence",
        instruction:
          "Rewrite each plain sentence by adding an expanded noun group and an adverb. Your new sentence should be much more vivid than the original.",
        parentTip: "Read the original and the expanded version aloud — the difference should be dramatic.",
        prompts: [
          { text: "Plain: A dog barked. → Expanded: ___", type: "lines", lines: 2 },
          { text: "Plain: The fire burned. → Expanded: ___", type: "lines", lines: 2 },
          { text: "Plain: A girl sang. → Expanded: ___", type: "lines", lines: 2 },
          { text: "Plain: The ship moved. → Expanded: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: How Many Adjectives in the Noun Group?",
        instruction:
          "Sort each noun group by how many adjectives it contains.",
        columns: ["1 adjective", "2 adjectives", "3 or more adjectives"],
        items: [
          { label: "the old bridge" },
          { label: "a tall, dark stranger" },
          { label: "a tiny, shiny, golden coin" },
          { label: "the muddy river" },
          { label: "an enormous, ancient, stone castle" },
          { label: "a warm, sunny afternoon" },
          { label: "the broken chair" },
          { label: "a small, crumpled, yellowed letter" },
        ],
      },
      {
        type: "circle-correct",
        title: "Adverb Placement",
        instruction:
          "Circle the sentence where the adverb is placed most naturally.",
        questions: [
          {
            prompt: "quietly",
            options: [
              "Quietly she tiptoed down the hall.",
              "She quietly tiptoed down the hall.",
              "She tiptoed down the hall quietly.",
            ],
          },
          {
            prompt: "suddenly",
            options: [
              "The door suddenly burst open.",
              "Suddenly, the door burst open.",
              "The door burst open suddenly.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Combine: Noun Group + Verb + Adverb",
        instruction:
          "Write a full sentence that includes a noun group, a verb, and an adverb. Use the prompt for each.",
        prompts: [
          { text: "Noun group: a tiny, frightened mouse   Verb: ran   Adverb: ___   Full sentence: ___", type: "lines", lines: 2 },
          { text: "Noun group: ___   Verb: crept   Adverb: silently   Full sentence: ___", type: "lines", lines: 2 },
          { text: "Noun group: the enormous, old oak tree   Verb: ___   Adverb: suddenly   Full sentence: ___", type: "lines", lines: 2 },
          { text: "Noun group: ___   Verb: ___   Adverb: ___   Full sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Adverb to Its Type",
        instruction:
          "Draw a line to match each adverb to what it tells us.",
        left: ["yesterday", "nearby", "fiercely", "tonight", "above"],
        right: [
          "when (time)",
          "how (manner)",
          "where (place)",
          "when (time)",
          "where (place)",
        ],
      },
      {
        type: "open-response",
        title: "Noun Group and Adverb in a Story Sentence",
        instruction:
          "Use the image described to write one vivid story sentence. It must contain an expanded noun group and an adverb.",
        prompts: [
          { text: "Image: A child hiding in a wardrobe during a storm.   Sentence: ___", type: "lines", lines: 2 },
          { text: "Image: A dog racing along a beach at sunset.   Sentence: ___", type: "lines", lines: 2 },
          { text: "Image: An old man reading by candlelight.   Sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Too Many or Just Right?",
        instruction:
          "Too many adjectives can overload a sentence. Sort each noun group.",
        parentTip: "Discuss: using 2–3 well-chosen adjectives is usually better than 5–6 weak ones.",
        columns: ["Well-balanced noun group", "Too many adjectives (overloaded)"],
        items: [
          { label: "a small, brown rabbit" },
          { label: "a very tiny, extremely small, little, miniature, itsy-bitsy rabbit" },
          { label: "the dark, swirling storm clouds" },
          { label: "the very very dark and gloomy and threatening storm clouds" },
          { label: "an old, creaking floorboard" },
          { label: "an ancient, worn, creaking, old, cracked, splintery floorboard" },
        ],
      },
      {
        type: "open-response",
        title: "Edit the Overloaded Sentence",
        instruction:
          "Each sentence below has too many adjectives. Edit each one by choosing the 2–3 best adjectives and removing the rest.",
        prompts: [
          { text: "Original: The big, enormous, huge, giant, massive, towering tree stood in the park.  Edited: ___", type: "lines", lines: 2 },
          { text: "Original: She wore a pretty, beautiful, lovely, gorgeous, stunning, colourful dress.  Edited: ___", type: "lines", lines: 2 },
          { text: "Original: He walked quickly, fast, rapidly, speedily, swiftly down the street.  Edited: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Sentence Has the Best Noun Group?",
        instruction:
          "Circle the sentence with the most effective expanded noun group.",
        questions: [
          {
            prompt: "Which sentence has the most effective expanded noun group?",
            options: [
              "The dog ran.",
              "A large, snarling dog ran.",
              "A really very big and loud and scary dog ran.",
            ],
          },
          {
            prompt: "Which is most effective?",
            options: [
              "The castle stood on the cliff.",
              "The crumbling, ancient castle stood on the fog-shrouded cliff.",
              "The castle stood very dramatically and impressively on the cliff.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Adverb Investigation",
        instruction:
          "Look at this sentence: 'She ran quickly.' Now experiment — replace 'quickly' with 5 different adverbs and write 5 new sentences. How does each change the meaning or feeling?",
        prompts: [
          { text: "She ran ___.", type: "lines", lines: 1 },
          { text: "She ran ___.", type: "lines", lines: 1 },
          { text: "She ran ___.", type: "lines", lines: 1 },
          { text: "She ran ___.", type: "lines", lines: 1 },
          { text: "She ran ___.", type: "lines", lines: 1 },
          { text: "Which adverb creates the most vivid image? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Choosing the Best Word",
        instruction:
          "Good writers don't just add any adjective or adverb — they choose the BEST one. When writing, ask: is there a more precise or interesting word I could use? A thesaurus is your best friend for this!",
        suggestions: [
          "Write a sentence with the adverb 'quickly', then find 3 more precise adverbs",
          "Write a sentence with the adjective 'big', then find 3 more precise adjectives",
          "Look up one adjective and one adverb in a dictionary or thesaurus today",
          "Add one improved adjective or adverb to a recent piece of your writing",
        ],
      },
      {
        type: "sorting",
        title: "Sort Adverbs: Before or After the Verb?",
        instruction:
          "Adverbs can go before or after the verb. Sort each sentence by where the adverb is placed.",
        parentTip: "Both positions are correct — the position affects the emphasis.",
        columns: ["Adverb before the verb", "Adverb after the verb"],
        items: [
          { label: "He quietly opened the door." },
          { label: "The snake moved slowly." },
          { label: "Suddenly, she stopped." },
          { label: "The clock ticked loudly." },
          { label: "Carefully, he placed the egg down." },
          { label: "The bird sang beautifully." },
        ],
      },
      {
        type: "open-response",
        title: "Write Three Versions of One Sentence",
        instruction:
          "Start with this sentence: 'The bird flew.' Write three expanded versions using different adjectives and adverbs. Compare how each version feels different.",
        prompts: [
          { text: "Version 1 (peaceful mood): ___", type: "lines", lines: 2 },
          { text: "Version 2 (scary mood): ___", type: "lines", lines: 2 },
          { text: "Version 3 (exciting mood): ___", type: "lines", lines: 2 },
          { text: "Which version is your favourite? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Adjective to the Mood It Creates",
        instruction:
          "Draw a line to match each adjective to the mood it most likely creates in a reader.",
        left: ["crumbling", "sparkling", "menacing", "delicate", "thunderous"],
        right: [
          "danger or threat",
          "beauty or wonder",
          "peace or fragility",
          "decay or age",
          "power or fear",
        ],
      },
      {
        type: "open-response",
        title: "Add Noun Groups and Adverbs to a Short Narrative",
        instruction:
          "Here is a very plain short narrative. Rewrite it adding expanded noun groups and adverbs to every sentence. You may add extra sentences if you wish.\n\nPLAIN VERSION: A girl walked. She saw a house. She knocked on the door. The door opened. She went inside.",
        prompts: [
          { text: "Your expanded version:", type: "lines", lines: 8 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Vivid Description Challenge",
        instruction:
          "Choose any object in your home — a chair, a lamp, a mug, a shoe — and write the most vivid description you can of it. Use at least 3 expanded noun groups and 3 adverbs.",
        parentTip: "Encourage your child to look closely at the object before writing — touch it, smell it, look at it from different angles. Good description comes from careful observation.",
        suggestions: [
          "Choose your object and look at it carefully for one minute",
          "Write down at least 6 adjectives that describe it",
          "Write 3 adverbs that could describe how it sits, shines, creaks or moves",
          "Write a 5-sentence description using expanded noun groups and adverbs",
          "Read your description to a family member — can they guess the object?",
        ],
      },

      // ── CONSOLIDATING (51–80) ─────────────────────────────────────
      {
        type: "open-response",
        title: "Noun Group Expansion Levels",
        instruction:
          "Expand the noun group in three stages: 1 adjective, then 2 adjectives, then 3 adjectives. Then decide which version is most effective.",
        prompts: [
          { text: "Noun: wolf  Level 1: a ___ wolf", type: "lines", lines: 1 },
          { text: "Level 2: a ___, ___ wolf", type: "lines", lines: 1 },
          { text: "Level 3: a ___, ___, ___ wolf", type: "lines", lines: 1 },
          { text: "Which level is most effective for a story? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Adverbs by Effect on the Reader",
        instruction:
          "Sort each adverb by the feeling it creates in a narrative.",
        parentTip: "Think: if you read a story with this adverb, what would you feel?",
        columns: ["Creates tension or fear", "Creates calm or peace", "Creates surprise"],
        items: [
          { label: "silently" },
          { label: "suddenly" },
          { label: "menacingly" },
          { label: "gently" },
          { label: "unexpectedly" },
          { label: "softly" },
          { label: "frantically" },
          { label: "serenely" },
          { label: "abruptly" },
        ],
      },
      {
        type: "open-response",
        title: "Compare Author Sentences: Which Is Better?",
        instruction:
          "Read both versions of the same sentence. Explain which uses noun groups and adverbs more effectively and why.",
        prompts: [
          { text: "A: A dog ran into the room.\nB: A muddy, panting golden retriever burst excitedly into the warm, firelit room.\nWhich is better for a story? Why?", type: "lines", lines: 3 },
          { text: "A: The old ship moved slowly through the dark water.\nB: An ancient, weathered ship crept silently through the black, churning sea.\nWhich is better? Why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify All the Parts",
        instruction:
          "Read each sentence. Circle A for Adjective, V for Verb, and Adv for Adverb where indicated.",
        questions: [
          {
            prompt: "The [tiny, frightened] rabbit [hopped] [desperately] across the frozen field.",
            options: ["Adj: tiny, frightened | Verb: hopped | Adv: desperately", "Adj: frozen | Verb: hopped | Adv: tiny", "Adj: frozen, tiny | Verb: across | Adv: frightened"],
          },
          {
            prompt: "A [tall, silver] lighthouse [beamed] [steadily] through the dark storm.",
            options: ["Adj: dark | Verb: beamed | Adv: through", "Adj: tall, silver | Verb: beamed | Adv: steadily", "Adj: steady | Verb: storm | Adv: dark"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Describe Using the Senses",
        instruction:
          "Write a description of a scene using each sense. Each sentence must include an expanded noun group and an adverb.",
        prompts: [
          { text: "What you SEE: ___", type: "lines", lines: 2 },
          { text: "What you HEAR: ___", type: "lines", lines: 2 },
          { text: "What you SMELL: ___", type: "lines", lines: 2 },
          { text: "What you FEEL (touch): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Writer's Goal to the Language Choice",
        instruction:
          "Draw a line to match each writer's goal to the language choice that best achieves it.",
        left: [
          "Create a sense of urgency",
          "Build a peaceful, calm atmosphere",
          "Show a character's sadness",
          "Describe something ancient and impressive",
          "Create a sense of mystery",
        ],
        right: [
          "a vast, moss-covered stone structure",
          "adverbs like frantically, urgently",
          "a shadowy, half-hidden doorway",
          "a warm, still afternoon",
          "adjectives like hollow, vacant, empty",
        ],
      },
      {
        type: "open-response",
        title: "Paragraph With a Specific Mood",
        instruction:
          "Write a paragraph of 4–5 sentences with a specific mood: choose MYSTERIOUS, JOYFUL or TENSE. Use at least two expanded noun groups and two adverbs to create that mood. State your mood choice.",
        prompts: [
          { text: "Mood chosen: ___", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "lines", lines: 7 },
          { text: "Noun groups used: ___   Adverbs used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Which Makes the Writing Better?",
        instruction:
          "Sort each sentence pair — which sentence uses expanded noun groups and adverbs more effectively?",
        parentTip: "Effective doesn't always mean more words — it means the right words in the right place.",
        columns: ["More effective", "Less effective"],
        items: [
          { label: "A crumbling, ivy-covered wall wound silently through the mist." },
          { label: "A very old and broken and covered wall went through the fog quickly." },
          { label: "The red sun sank slowly below the glittering horizon." },
          { label: "The reddish-orange sun very slowly sank below the sparkling and glistening horizon." },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite a Paragraph from a Book",
        instruction:
          "Find a paragraph in a book you are reading. Copy it out, then rewrite it changing the adjectives in the noun groups and the adverbs to change the mood completely.",
        prompts: [
          { text: "Book title: ___  Page: ___", type: "lines", lines: 1 },
          { text: "Original paragraph:", type: "lines", lines: 4 },
          { text: "My rewritten version (different mood): ___", type: "lines", lines: 4 },
          { text: "What mood did I aim for? How did I use language to create it?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Adverb Placement Experiment",
        instruction:
          "Write one base sentence. Then write it three ways with the adverb in three different positions. Decide which sounds best and explain why.",
        prompts: [
          { text: "Base sentence (no adverb): ___", type: "lines", lines: 1 },
          { text: "Version 1 (adverb at start): ___", type: "lines", lines: 1 },
          { text: "Version 2 (adverb in the middle): ___", type: "lines", lines: 1 },
          { text: "Version 3 (adverb at end): ___", type: "lines", lines: 1 },
          { text: "Which version sounds best? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Noun Groups and Adverbs in Different Genres",
        instruction:
          "Different types of writing use noun groups and adverbs differently. Adventure stories often use urgent adverbs. Poetry uses carefully chosen adjectives. Non-fiction uses precise, factual adjectives. Look at three different types of text this week and compare how they use these language features.",
        suggestions: [
          "Find a noun group in an adventure story",
          "Find a noun group in a poem",
          "Find a noun group in a non-fiction article",
          "Compare: what types of adjectives does each text type prefer?",
          "Write one example sentence in each style",
        ],
      },

      // ── EXTENDING (81–100) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Advanced Noun Group: Adding a Prepositional Phrase",
        instruction:
          "An expanded noun group can include a prepositional phrase after the noun (e.g. 'the ancient tower on the clifftop'). Add a prepositional phrase to each noun group.",
        parentTip: "Prepositional phrases begin with words like: on, in, under, beside, above, beyond, at the edge of.",
        prompts: [
          { text: "the crumbling stone wall + prepositional phrase: ___", type: "lines", lines: 1 },
          { text: "a tiny, flickering candle + prepositional phrase: ___", type: "lines", lines: 1 },
          { text: "the vast, silent forest + prepositional phrase: ___", type: "lines", lines: 1 },
          { text: "an old, leather-bound book + prepositional phrase: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Adverbs of Degree vs Adverbs of Manner",
        instruction:
          "Adverbs of degree modify adjectives or other adverbs (very, quite, almost). Adverbs of manner tell how an action is done (quickly, silently). Sort these adverbs.",
        parentTip: "This is an advanced distinction — work through it together.",
        columns: ["Adverb of manner (how)", "Adverb of degree (how much)"],
        items: [
          { label: "very" },
          { label: "quickly" },
          { label: "almost" },
          { label: "silently" },
          { label: "quite" },
          { label: "bravely" },
          { label: "extremely" },
          { label: "frantically" },
          { label: "slightly" },
          { label: "gently" },
        ],
      },
      {
        type: "open-response",
        title: "Writing to Match an Image",
        instruction:
          "Imagine a scene: a lighthouse on a rocky cliff on a stormy night. Write a paragraph of 5–6 sentences describing it. Include at least four expanded noun groups and four adverbs. Underline noun groups and circle adverbs.",
        prompts: [
          { text: "My description:", type: "lines", lines: 8 },
          { text: "Noun groups count: ___   Adverbs count: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Author's Craft: Why This Choice?",
        instruction:
          "Read the sentence. Circle the reason that best explains the author's choice of noun group or adverb.",
        questions: [
          {
            prompt: "Sentence: 'A shivering, wide-eyed child pressed herself silently against the cold stone wall.' Why 'silently'?",
            options: [
              "To show she is not speaking.",
              "To create tension and show she is hiding/afraid and trying not to be heard.",
              "Because children are usually quiet.",
            ],
          },
          {
            prompt: "Why 'shivering, wide-eyed child' rather than just 'child'?",
            options: [
              "To use more adjectives.",
              "To show the child's physical state and fear without stating it directly.",
              "To make the sentence longer.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Passages",
        instruction:
          "Read both passages. Annotate each one noting the expanded noun groups (NP) and adverbs (Adv). Then write a short comparison: how does each author use these features differently?\n\nPASSAGE A: A dog ran across the road. It stopped and looked both ways.\nPASSAGE B: A scruffy, panting mongrel darted frantically across the rain-slicked road, then froze, its mismatched eyes scanning desperately in both directions.",
        prompts: [
          { text: "Noun groups in Passage A: ___  Adverbs in Passage A: ___", type: "lines", lines: 1 },
          { text: "Noun groups in Passage B: ___  Adverbs in Passage B: ___", type: "lines", lines: 1 },
          { text: "How do the two passages feel different? What causes this?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Write an Opening Scene for a Story",
        instruction:
          "Write the opening scene of a story (6–8 sentences). The opening should establish the setting, mood and hint at the main character. Use at least four expanded noun groups and four adverbs. Circle and label each one.",
        prompts: [
          { text: "My opening scene:", type: "lines", lines: 10 },
          { text: "Total noun groups: ___   Total adverbs: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Teach It: Noun Groups and Adverbs",
        instruction:
          "Design a one-page 'mini lesson' that explains expanded noun groups and adverbs for a Year 2 student. Include a definition, examples, and one activity.",
        prompts: [
          { text: "What is an expanded noun group? (in simple language): ___", type: "lines", lines: 3 },
          { text: "What is an adverb? (in simple language): ___", type: "lines", lines: 3 },
          { text: "Example sentences for Year 2: ___", type: "lines", lines: 3 },
          { text: "Activity for Year 2 student: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Noun Groups from Different Text Types",
        instruction:
          "Authors choose different styles of noun groups depending on text type. Sort these noun groups.",
        columns: ["Adventure fiction", "Nature poetry", "Science non-fiction"],
        items: [
          { label: "a churning, powerful ocean current" },
          { label: "a sharp, jagged blade" },
          { label: "the soft, silver petals of the morning rose" },
          { label: "the dominant apex predator" },
          { label: "a racing, pounding heartbeat" },
          { label: "a delicate, trembling dewdrop" },
          { label: "the complex cellular structure" },
          { label: "the glistening, moonlit sea" },
          { label: "a rusted, blood-stained sword" },
        ],
      },
      {
        type: "open-response",
        title: "Reflect on Your Own Writing",
        instruction:
          "Find a recent piece of your own writing. Analyse it: count how many expanded noun groups and adverbs you used. Then improve one paragraph by adding or replacing noun groups and adverbs.",
        prompts: [
          { text: "Title of my writing: ___", type: "lines", lines: 1 },
          { text: "How many expanded noun groups did I find? ___  How many adverbs? ___", type: "lines", lines: 1 },
          { text: "One paragraph before improvement:", type: "lines", lines: 4 },
          { text: "Same paragraph after improvement:", type: "lines", lines: 4 },
          { text: "What changes did I make? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Write a Picture Book Page",
        instruction:
          "Write and illustrate one page of an imaginary picture book. The text must use at least two expanded noun groups and one adverb. The illustration should show the expanded noun group vividly.",
        parentTip: "Picture books are deceptively hard to write because every word counts. This challenge builds precision in word choice.",
        suggestions: [
          "Choose a subject for your picture book page (a forest, a beach, a kitchen)",
          "Write your page text — aim for 2–4 sentences",
          "Include at least 2 expanded noun groups and 1 adverb",
          "Illustrate the page in pencil or colour",
          "Read your page aloud — does it sound like a real picture book?",
        ],
      },
      {
        type: "open-response",
        title: "Noun Group and Adverb: Foundational Review",
        instruction:
          "Write one sentence for each prompt. Each sentence must contain the specified noun group and adverb.",
        parentTip: "Check: is the noun group BEFORE the verb? Is the adverb near the verb?",
        prompts: [
          { text: "Use 'a small, frightened rabbit' as the noun group and 'desperately' as the adverb: ___", type: "lines", lines: 2 },
          { text: "Use 'the tall, ancient lighthouse' as the noun group and 'steadily' as the adverb: ___", type: "lines", lines: 2 },
          { text: "Use 'a warm, golden afternoon' as the noun group and 'peacefully' as the adverb: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Which Are the Most Effective Adjectives?",
        instruction:
          "For each noun, sort the adjectives into 'more effective' and 'less effective' for use in a story.",
        parentTip: "More effective adjectives are precise, vivid, and unexpected. Less effective ones are vague or overused.",
        columns: ["More effective in stories", "Less effective (vague or overused)"],
        items: [
          { label: "nice" },
          { label: "crumbling" },
          { label: "good" },
          { label: "luminous" },
          { label: "big" },
          { label: "weather-beaten" },
          { label: "pretty" },
          { label: "jagged" },
          { label: "bad" },
          { label: "mournful" },
        ],
      },
      {
        type: "open-response",
        title: "Upgrade the Adjectives",
        instruction:
          "Replace the underlined adjective in each noun group with a more vivid or precise one.",
        prompts: [
          { text: "a big dog → a ___ dog", type: "lines", lines: 1 },
          { text: "a nice house → a ___ house", type: "lines", lines: 1 },
          { text: "a bad storm → a ___ storm", type: "lines", lines: 1 },
          { text: "a good meal → a ___ meal", type: "lines", lines: 1 },
          { text: "a pretty garden → a ___ garden", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Adverb: How, When or Where?",
        instruction:
          "Read each sentence. Circle the type of adverb used.",
        questions: [
          { prompt: "She arrived early.", options: ["How (manner)", "When (time)", "Where (place)"] },
          { prompt: "He whispered quietly.", options: ["How (manner)", "When (time)", "Where (place)"] },
          { prompt: "They searched everywhere.", options: ["How (manner)", "When (time)", "Where (place)"] },
          { prompt: "The sun shone brightly.", options: ["How (manner)", "When (time)", "Where (place)"] },
          { prompt: "He came yesterday.", options: ["How (manner)", "When (time)", "Where (place)"] },
          { prompt: "She ran outside.", options: ["How (manner)", "When (time)", "Where (place)"] },
        ],
      },
      {
        type: "open-response",
        title: "Write Using All Three Adverb Types",
        instruction:
          "Write 3 sentences — one using an adverb of manner (how), one using an adverb of time (when), and one using an adverb of place (where). Each sentence must also contain an expanded noun group.",
        prompts: [
          { text: "Manner adverb sentence: ___", type: "lines", lines: 2 },
          { text: "Time adverb sentence: ___", type: "lines", lines: 2 },
          { text: "Place adverb sentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match Noun Group to the Story Type It Suits",
        instruction:
          "Draw a line to match each expanded noun group to the type of story it best suits.",
        left: [
          "a sleek, silver spaceship",
          "a crumbling, moss-covered castle",
          "a warm, lamplit kitchen",
          "a roaring, flame-bright dragon",
          "a vast, empty landscape",
          "a small, determined elf",
        ],
        right: [
          "adventure story",
          "contemporary realistic fiction",
          "science fiction",
          "fairy tale",
          "fantasy",
          "historical fiction",
        ],
      },
      {
        type: "open-response",
        title: "Genre Writing: Choose Your Noun Groups",
        instruction:
          "Choose one story genre and write a paragraph (4–5 sentences). Choose noun groups and adverbs that suit your genre perfectly.",
        prompts: [
          { text: "Genre chosen: ___", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "lines", lines: 7 },
          { text: "Noun groups I used: ___  Adverbs: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Sentence Expansion: Multiple Rounds",
        instruction:
          "Expand this sentence in three rounds — each time adding more noun group detail or a more precise adverb.\n\nBase sentence: A cat ran.",
        prompts: [
          { text: "Round 1 (add one adjective and one adverb): ___", type: "lines", lines: 1 },
          { text: "Round 2 (add two adjectives and a more precise adverb): ___", type: "lines", lines: 1 },
          { text: "Round 3 (add a prepositional phrase and an even more vivid adverb): ___", type: "lines", lines: 2 },
          { text: "Which version is your favourite? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Noun Groups by the Mood They Create",
        instruction:
          "Sort each noun group by the mood or feeling it creates in a reader.",
        columns: ["Eerie or unsettling", "Peaceful or joyful", "Dramatic or tense"],
        items: [
          { label: "a shadowy, empty corridor" },
          { label: "a warm, sunlit meadow" },
          { label: "a dark, churning sea" },
          { label: "a crumbling, forgotten building" },
          { label: "a bright, butterfly-filled garden" },
          { label: "a racing, thundering waterfall" },
          { label: "a pale, silent moon" },
          { label: "a cosy, candlelit room" },
          { label: "a raging, crackling fire" },
        ],
      },
      {
        type: "open-response",
        title: "Write With a Specific Mood",
        instruction:
          "Choose one mood from the list above. Write a paragraph of 4–5 sentences creating that mood purely through your choice of noun groups and adverbs. Do NOT name the mood — show it.",
        prompts: [
          { text: "Mood I am aiming for: ___", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "lines", lines: 7 },
          { text: "Key noun groups and adverbs used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Noun Group and Adverb Mastery: Final Writing",
        instruction:
          "Write the most vivid piece of descriptive writing you can (8–10 sentences) about any topic you choose. Use at least 5 expanded noun groups and 5 adverbs. Underline every noun group and circle every adverb.",
        parentTip: "This is the culminating task. Encourage your child to plan the noun groups and adverbs they want to use BEFORE writing.",
        prompts: [
          { text: "My topic: ___", type: "lines", lines: 1 },
          { text: "My description:", type: "lines", lines: 12 },
          { text: "Noun groups: ___  Adverbs: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Noun Groups and Adverbs Are a Writer's Tools",
        instruction:
          "Professional writers use expanded noun groups and adverbs constantly — but they choose them CAREFULLY. This week, when you write anything, stop after every sentence and ask: did I use a noun group? Did I use an adverb? If not, can I add one that genuinely improves the sentence?",
        suggestions: [
          "After writing each sentence, check: can I expand the noun? Can I add an adverb?",
          "Challenge: write 5 sentences where every single one has both",
          "Read a favourite author and annotate noun groups and adverbs",
          "Collect your 3 favourite noun groups you found in published books this week",
        ],
      },
      {
        type: "open-response",
        title: "Reflect: Noun Groups and Adverbs in My Writing",
        instruction:
          "Write a reflection (4–5 sentences) about what you have learned about expanded noun groups and adverbs.",
        prompts: [
          { text: "What is an expanded noun group? ___", type: "lines", lines: 2 },
          { text: "What is an adverb? ___", type: "lines", lines: 2 },
          { text: "How do they improve writing? ___", type: "lines", lines: 2 },
          { text: "One goal: I will try to ___ in my writing from now on.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Noun Group and Adverb Author Study",
        instruction:
          "Choose a favourite author and study two pages of their writing. Count every expanded noun group and adverb. Write a report about the author's style.",
        parentTip: "This is a rich literary investigation. Good authors to study: Roald Dahl, Michael Morpurgo, Morris Gleitzman, Graeme Base (for picture books).",
        suggestions: [
          "Choose 2 pages of your favourite author's writing",
          "Underline every expanded noun group you find",
          "Circle every adverb",
          "Count the totals",
          "Write 3–4 sentences about what this tells you about the author's style",
        ],
      },
      {
        type: "circle-correct",
        title: "Identify: Adverb or Adjective?",
        instruction: "Circle whether the underlined word in each sentence is an ADVERB or an ADJECTIVE.",
        parentTip: "Adjectives describe nouns; adverbs describe verbs. Both appear in expanded sentences.",
        questions: [
          { prompt: "She sang beautifully at the concert.", options: ["adverb", "adjective"] },
          { prompt: "The enormous elephant moved slowly.", options: ["adverb", "adjective"] },
          { prompt: "He quickly finished his homework.", options: ["adverb", "adjective"] },
          { prompt: "The tiny, golden bird chirped.", options: ["adverb", "adjective"] },
          { prompt: "She whispered softly in the library.", options: ["adverb", "adjective"] },
          { prompt: "The mysterious old house stood silently.", options: ["adverb", "adjective"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Adverbs by Type — How, When, or Where",
        instruction: "Adverbs can tell us HOW, WHEN, or WHERE. Sort these adverbs into the right group.",
        columns: ["How (manner)", "When (time)", "Where (place)"],
        items: [
          { label: "quickly" },
          { label: "yesterday" },
          { label: "outside" },
          { label: "gently" },
          { label: "soon" },
          { label: "nearby" },
          { label: "loudly" },
          { label: "tomorrow" },
          { label: "here" },
        ],
      },
      {
        type: "matching",
        title: "Match: Noun to Its Expanded Group",
        instruction: "Draw a line from each plain noun to its best expanded noun group.",
        left: ["cat", "storm", "boy", "tree", "road"],
        right: [
          "the winding, dusty country road",
          "the sleepy, orange tabby cat",
          "the towering, ancient eucalyptus tree",
          "the nervous, red-haired boy",
          "the wild, howling winter storm",
        ],
      },
      {
        type: "open-response",
        title: "Upgrade a Boring Paragraph",
        instruction:
          "Here is a boring paragraph: 'A dog ran down the street. It barked at a cat. The cat ran away.' Rewrite it with expanded noun groups and adverbs to make it vivid and interesting.",
        parentTip: "Encourage your child to add at least two adjectives before each noun and one adverb for each verb.",
        prompts: [
          { text: "My upgraded paragraph:", type: "lines", lines: 6 },
          { text: "Noun groups I added: ___", type: "lines", lines: 2 },
          { text: "Adverbs I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which is the Expanded Noun Group?",
        instruction: "Circle the sentence that contains an expanded noun group in each pair.",
        questions: [
          {
            prompt: "A) A dog barked. B) The shaggy, muddy old dog barked.",
            options: ["A", "B"],
          },
          {
            prompt: "A) The small, brave girl climbed. B) A girl climbed.",
            options: ["A", "B"],
          },
          {
            prompt: "A) A bird flew. B) A bright, tiny blue bird flew.",
            options: ["A", "B"],
          },
          {
            prompt: "A) The mysterious, locked wooden chest sat there. B) A chest was there.",
            options: ["A", "B"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Order: Building an Expanded Noun Group",
        instruction: "Put these words in the correct order to build a proper expanded noun group.",
        items: [
          { label: "the" },
          { label: "enormous" },
          { label: "ancient" },
          { label: "stone" },
          { label: "castle" },
        ],
      },
      {
        type: "open-response",
        title: "Noun Group and Adverb: Sentence Gallery",
        instruction:
          "Write 5 original sentences. Each must contain an expanded noun group AND an adverb. Try to vary the subjects — people, animals, objects, places.",
        prompts: [
          { text: "1. ___", type: "lines", lines: 2 },
          { text: "2. ___", type: "lines", lines: 2 },
          { text: "3. ___", type: "lines", lines: 2 },
          { text: "4. ___", type: "lines", lines: 2 },
          { text: "5. ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Plain Sentences vs. Expanded Sentences",
        instruction: "Sort these sentences into PLAIN (no expanded groups or adverbs) or EXPANDED.",
        columns: ["Plain", "Expanded"],
        items: [
          { label: "The dog ran." },
          { label: "The enormous, shaggy dog ran frantically." },
          { label: "A girl sang." },
          { label: "The shy, tiny girl sang softly at the back." },
          { label: "Birds flew." },
          { label: "Three brilliant yellow birds flew swiftly overhead." },
          { label: "The man walked." },
          { label: "The tired, old man walked slowly to the gate." },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Expanded Noun Groups vs Plain Nouns",
        instruction:
          "Each time you write a noun today (any piece of writing), pause and ask: can I add describing words? Try adding at least two adjectives to every important noun in your writing.",
        parentTip: "Reminding children to 'zoom in' before writing the noun is a powerful self-editing strategy.",
        suggestions: [
          "Find three nouns in your latest piece of writing",
          "Add two adjectives before each noun",
          "Read both versions aloud — which is more interesting?",
          "Now check: do any adverbs need adding to the verbs?",
          "Reflect: does the extra detail help the reader picture the scene?",
        ],
      },
      {
        type: "matching",
        title: "Match: Adverb to the Verb it Best Describes",
        instruction: "Draw a line to connect each adverb to the verb it works best with.",
        left: ["whispered", "sprinted", "glared", "tiptoed", "laughed"],
        right: [
          "silently",
          "furiously",
          "frantically",
          "hysterically",
          "softly",
        ],
      },
      {
        type: "circle-correct",
        title: "Adverb Placement: Where Does It Fit?",
        instruction: "Circle which version of each sentence sounds best with the adverb in place.",
        questions: [
          {
            prompt: "A) Quickly she ran to the door. B) She ran quickly to the door.",
            options: ["A", "B", "both work"],
          },
          {
            prompt: "A) She sang softly. B) Softly she sang.",
            options: ["A", "B", "both work"],
          },
          {
            prompt: "A) He suddenly stopped. B) He stopped suddenly.",
            options: ["A", "B", "both work"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Setting Description",
        instruction:
          "Write a 4–5 sentence description of an interesting setting (forest, beach, market, cave, etc.) using expanded noun groups and adverbs in every sentence.",
        parentTip: "Setting descriptions are a brilliant place to practise noun groups and adverbs because every detail matters. Encourage elaborate descriptions.",
        prompts: [
          { text: "My setting: ___", type: "lines", lines: 1 },
          { text: "My description:", type: "lines", lines: 6 },
          { text: "Noun groups I used: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Adverbs by Intensity",
        instruction: "Sort these adverbs from LEAST intense to MOST intense.",
        columns: ["Mild", "Moderate", "Strong"],
        items: [
          { label: "slightly" },
          { label: "fairly" },
          { label: "extremely" },
          { label: "gently" },
          { label: "firmly" },
          { label: "fiercely" },
          { label: "quietly" },
          { label: "loudly" },
          { label: "deafeningly" },
        ],
      },
      {
        type: "open-response",
        title: "Expanded Noun Group: Character Portrait",
        instruction:
          "Write a character portrait using only expanded noun groups (no verbs). Describe the character's appearance in 4–5 expanded noun group phrases.",
        prompts: [
          { text: "Character's name: ___", type: "lines", lines: 1 },
          { text: "My expanded noun group portrait:", type: "lines", lines: 5 },
          { text: "What I noticed about using only noun groups: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Sentence Uses Adverbs Most Effectively?",
        instruction: "Circle the sentence in each pair that uses an adverb most effectively.",
        questions: [
          {
            prompt: "A) She walked quickly very fast. B) She sprinted breathlessly down the hill.",
            options: ["A", "B"],
          },
          {
            prompt: "A) He spoke so very quietly softly. B) He murmured so softly that no one heard.",
            options: ["A", "B"],
          },
          {
            prompt: "A) The bird sang beautifully in the dawn light. B) The bird sang very nicely.",
            options: ["A", "B"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Noun Group and Adverb Collector's Notebook",
        instruction:
          "Start a Collector's Notebook. This week, copy down 5 expanded noun groups and 5 adverbs you find in books you read. Write the source next to each one.",
        parentTip: "Collecting examples from real books builds awareness that skilled authors use these features intentionally.",
        suggestions: [
          "Read any book or chapter you choose",
          "Spot and copy down 5 expanded noun groups",
          "Spot and copy down 5 adverbs",
          "Write the book title and page next to each",
          "Reflect: which author uses the most vivid noun groups?",
        ],
      },
      {
        type: "open-response",
        title: "Compare: My Sentence Before and After Expanding",
        instruction:
          "Write a plain sentence. Then expand it by adding noun groups and adverbs. Then expand it again even further. Show three versions.",
        prompts: [
          { text: "Plain sentence: ___", type: "lines", lines: 1 },
          { text: "Expanded version 1: ___", type: "lines", lines: 2 },
          { text: "Expanded version 2 (even more detail): ___", type: "lines", lines: 2 },
          { text: "What I changed each time: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Noun Group Complexity Level",
        instruction: "Match each noun group to how complex it is (simple = 1 adjective, medium = 2, advanced = 3+).",
        left: [
          "the dog",
          "the big dog",
          "the big, hairy dog",
          "the enormous, hairy, muddy old dog",
          "the small red house",
        ],
        right: [
          "no adjectives — plain noun",
          "simple — 1 adjective",
          "medium — 2 adjectives",
          "simple — 2 adjectives + colour",
          "advanced — 3+ adjectives",
        ],
      },
      {
        type: "sequence",
        title: "Order: Describing a Scene Step by Step",
        instruction: "Put these writing steps in order to produce a description with expanded noun groups and adverbs.",
        items: [
          { label: "Choose your scene or setting" },
          { label: "List the key nouns in your scene" },
          { label: "Add adjectives to expand each noun group" },
          { label: "Choose verbs for the action in the scene" },
          { label: "Add adverbs to describe how each action happens" },
          { label: "Write your complete sentences and read them aloud" },
        ],
      },
      {
        type: "open-response",
        title: "Noun Groups and Adverbs: Editing Pass",
        instruction:
          "Read the following paragraph and rewrite it with expanded noun groups and adverbs added: 'The cat sat on the mat. It looked at the bird. The bird flew away. The cat watched it go.'",
        parentTip: "Editing existing text is a powerful strategy — it separates the generating ideas task from the improving language task.",
        prompts: [
          { text: "My expanded version:", type: "lines", lines: 6 },
          { text: "Changes I made: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write a Noun Group and Adverb Mini-Lesson",
        instruction:
          "Pretend you are the teacher. Write a 3-step mini-lesson for a student who doesn't know what expanded noun groups or adverbs are. Use simple language and good examples.",
        prompts: [
          { text: "Step 1 — Explain noun groups: ___", type: "lines", lines: 3 },
          { text: "Step 2 — Explain adverbs: ___", type: "lines", lines: 3 },
          { text: "Step 3 — Show an example sentence with both: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Describe Something Without Naming It",
        instruction:
          "Choose an object in your house. Write 4–5 expanded noun groups and adverb phrases that describe it — but don't say what it is! Read it to a family member and see if they can guess.",
        parentTip: "This 'mystery description' game makes noun groups and adverbs purposeful and fun. Play it as a guessing game at dinner.",
        suggestions: [
          "Choose any object in your home — don't reveal what it is",
          "Write 4 expanded noun group phrases describing it",
          "Add at least 2 adverbs describing how it moves, sounds, or works",
          "Read your description to a family member",
          "Can they guess the object? Discuss what gave it away",
        ],
      },
      {
        type: "open-response",
        title: "Spark: 100-Word Setting Description",
        instruction:
          "Write exactly 100 words describing any setting. Every noun must be expanded. Every verb must have an adverb. Count your words carefully!",
        parentTip: "Word-count constraints are a powerful creative tool — they force precise word choice. Count together with your child.",
        prompts: [
          { text: "My setting: ___", type: "lines", lines: 1 },
          { text: "My 100-word description:", type: "lines", lines: 8 },
          { text: "Word count: ___  Noun groups used: ___  Adverbs used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Final Check: Noun Group or Plain Noun?",
        instruction: "Circle whether each underlined phrase is an EXPANDED NOUN GROUP or a PLAIN NOUN.",
        questions: [
          { prompt: "The tall, leafy tree swayed.", options: ["expanded noun group", "plain noun"] },
          { prompt: "A dog barked.", options: ["expanded noun group", "plain noun"] },
          { prompt: "The ancient, crumbling brick wall collapsed.", options: ["expanded noun group", "plain noun"] },
          { prompt: "Stars appeared.", options: ["expanded noun group", "plain noun"] },
          { prompt: "A tiny, blue butterfly landed softly.", options: ["expanded noun group", "plain noun"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Adverbs by the Type of Verb They Suit Best",
        instruction: "Match these adverbs to the type of verb they work best with.",
        columns: ["Movement verbs (ran, flew, danced)", "Speech verbs (said, whispered, called)", "Thinking / feeling verbs (stared, waited, worried)"],
        items: [
          { label: "swiftly" },
          { label: "softly" },
          { label: "anxiously" },
          { label: "frantically" },
          { label: "cheerfully" },
          { label: "silently" },
          { label: "gracefully" },
          { label: "quietly" },
          { label: "nervously" },
        ],
      },
      {
        type: "open-response",
        title: "Noun Groups and Adverbs: Story Opening",
        instruction:
          "Write the opening 3–4 sentences of a story. Every single noun must be expanded and every verb must have an adverb. Make it so gripping that the reader wants to keep reading.",
        parentTip: "Story openings benefit enormously from vivid noun groups and adverbs. Read successful openings aloud together first.",
        prompts: [
          { text: "My story opening:", type: "lines", lines: 5 },
          { text: "Noun groups I used: ___", type: "lines", lines: 2 },
          { text: "Adverbs I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Adjective Order in Noun Groups",
        instruction: "In English, adjectives follow a typical order. Match each noun group to the rule it follows.",
        left: [
          "the large round blue ball",
          "three old wooden chairs",
          "the beautiful young French dancer",
          "a tiny silver ring",
          "the enormous ancient stone castle",
        ],
        right: [
          "number + age + material + noun",
          "opinion + age + nationality + noun",
          "size + shape + colour + noun",
          "size + age + material + noun",
          "size + opinion + material + noun",
        ],
      },
      {
        type: "open-response",
        title: "Noun Groups and Adverbs: Reflection and Goals",
        instruction:
          "Write a reflection on your learning about expanded noun groups and adverbs. What do you do well? What can you improve? What will you try in your next piece of writing?",
        prompts: [
          { text: "I feel confident using expanded noun groups because: ___", type: "lines", lines: 2 },
          { text: "Using adverbs is tricky when: ___", type: "lines", lines: 2 },
          { text: "In my next piece of writing, I will try to: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Noun Group and Adverb Swap Challenge",
        instruction:
          "Choose any paragraph from a favourite book. Replace every noun with an even more expanded noun group and upgrade every verb's adverb. Read both versions aloud. Which is better? Why?",
        parentTip: "Upgrading real published writing is a surprisingly effective technique — it shows children why authors made specific choices.",
        suggestions: [
          "Choose a paragraph from any book",
          "Identify every noun and verb",
          "Expand each noun with more adjectives",
          "Add or upgrade the adverb for each verb",
          "Read both versions aloud and discuss: which is better? Why?",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Writing That Uses Noun Groups and Adverbs Well vs Poorly",
        instruction: "Sort these extracts into EFFECTIVE (well-crafted noun groups and adverbs) or WEAK (plain nouns, no adverbs).",
        columns: ["Effective", "Weak"],
        items: [
          { label: "The enormous, shaggy dog ran frantically down the narrow lane." },
          { label: "A dog went down a street." },
          { label: "She whispered urgently in the dim, dusty corner of the library." },
          { label: "She said something in the library." },
          { label: "Three brilliant golden lights glimmered softly in the ancient cave." },
          { label: "Some lights were in a cave." },
        ],
      },
      {
        type: "open-response",
        title: "Spark: Noun Group and Adverb Master Paragraph",
        instruction:
          "Write the best descriptive paragraph you have ever written. It must: have 5+ expanded noun groups, use 5+ adverbs, be vivid, specific and original. Choose your topic freely.",
        parentTip: "This culminating writing task should be given unhurried time. Read the final paragraph aloud together and celebrate the quality.",
        prompts: [
          { text: "My topic: ___", type: "lines", lines: 1 },
          { text: "My master paragraph:", type: "lines", lines: 8 },
          { text: "What I am most proud of in this paragraph: ___", type: "lines", lines: 2 },
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
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
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
        parentTip: "Count the letters that are removed — the apostrophe replaces exactly those missing letters.",
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
        type: "sorting",
        title: "Sort: Full Form or Contraction?",
        instruction:
          "Sort each word or phrase into the correct column.",
        parentTip: "A contraction has an apostrophe to show missing letters.",
        columns: ["Full form (two words)", "Contraction (one word with apostrophe)"],
        items: [
          { label: "I am" },
          { label: "can't" },
          { label: "do not" },
          { label: "she's" },
          { label: "we will" },
          { label: "won't" },
          { label: "they are" },
          { label: "I'll" },
        ],
      },
      {
        type: "open-response",
        title: "Expand the Contraction",
        instruction:
          "Write the two words that each contraction is made from.",
        prompts: [
          { text: "don't → ___ ___", type: "lines", lines: 1 },
          { text: "they're → ___ ___", type: "lines", lines: 1 },
          { text: "it's → ___ ___", type: "lines", lines: 1 },
          { text: "couldn't → ___ ___", type: "lines", lines: 1 },
          { text: "we've → ___ ___", type: "lines", lines: 1 },
          { text: "she'll → ___ ___", type: "lines", lines: 1 },
          { text: "wouldn't → ___ ___", type: "lines", lines: 1 },
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
      {
        type: "matching",
        title: "Match: What Letters Were Removed?",
        instruction:
          "Draw a line to match each contraction to the letters that were removed to make it.",
        parentTip: "The apostrophe stands in exactly for the missing letters.",
        left: ["don't", "I'm", "can't", "they're", "we'll"],
        right: [
          "'a' removed from 'am'",
          "'o' removed from 'not'",
          "'no' removed from 'not'",
          "'a' removed from 'are'",
          "'wi' removed from 'will'",
        ],
      },
      {
        type: "circle-correct",
        title: "Apostrophe in the Right Place?",
        instruction:
          "Circle the version of the contraction where the apostrophe is in the correct place.",
        questions: [
          { prompt: "don't", options: ["d'ont", "don't", "dont'"] },
          { prompt: "they're", options: ["the'yre", "they're", "theyr'e"] },
          { prompt: "couldn't", options: ["could'nt", "couldn't", "couldnt'"] },
          { prompt: "we'll", options: ["we'l'l", "we'll", "w'ell"] },
          { prompt: "won't", options: ["wo'nt", "won't", "wont'"] },
        ],
      },
      {
        type: "open-response",
        title: "Write Contractions Using -n't",
        instruction:
          "Many contractions use the pattern: verb + n't (where n't = not). Write the contraction for each.",
        parentTip: "This is the most common contraction pattern. Notice the apostrophe always replaces the 'o' in 'not'.",
        prompts: [
          { text: "do + not → ___", type: "lines", lines: 1 },
          { text: "can + not → ___", type: "lines", lines: 1 },
          { text: "will + not → ___  (note: this one is irregular!)", type: "lines", lines: 1 },
          { text: "should + not → ___", type: "lines", lines: 1 },
          { text: "would + not → ___", type: "lines", lines: 1 },
          { text: "could + not → ___", type: "lines", lines: 1 },
          { text: "have + not → ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort Contractions by Pattern",
        instruction:
          "Sort these contractions by the pattern used to make them.",
        parentTip: "The most common patterns: pronoun + 'm/re/ll/ve/d, and verb + n't.",
        columns: ["pronoun + 'm/'re/'ll/'ve/'d", "verb + n't"],
        items: [
          { label: "I'm" },
          { label: "don't" },
          { label: "we're" },
          { label: "can't" },
          { label: "they'll" },
          { label: "won't" },
          { label: "she'd" },
          { label: "shouldn't" },
          { label: "I've" },
          { label: "hadn't" },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: What Is a Contraction?",
        instruction:
          "A contraction is two words SQUEEZED into one. The apostrophe (') replaces the missing letters. 'I am' → 'I'm' (the 'a' is replaced by '). 'Do not' → 'don't' (the 'o' is replaced by '). Contractions are used in speaking and informal writing.",
        suggestions: [
          "Write 5 contractions and their full forms on a card to keep as a reference",
          "Listen to a TV show or conversation today and count contractions you hear",
          "Find 3 contractions in a book — write the full form for each",
          "Ask a family member to give you a contraction and you write both forms",
        ],
      },
      {
        type: "circle-correct",
        title: "Which Sentence Uses the Contraction Correctly?",
        instruction:
          "Circle the sentence that correctly uses a contraction.",
        questions: [
          {
            prompt: "it's / its",
            options: [
              "The dog wagged its' tail excitedly.",
              "It's a beautiful morning today.",
              "Its going to rain later.",
            ],
          },
          {
            prompt: "they're / their / there",
            options: [
              "They're going to the park this afternoon.",
              "There going to the park this afternoon.",
              "Their going to the park this afternoon.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Sentences Using Contractions",
        instruction:
          "Write a sentence using each contraction below. Make sure the sentence makes sense!",
        prompts: [
          { text: "won't →", type: "lines", lines: 2 },
          { text: "they've →", type: "lines", lines: 2 },
          { text: "she'd →", type: "lines", lines: 2 },
          { text: "couldn't →", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Contraction to the Correct Sentence",
        instruction:
          "Draw a line to match each contraction to the sentence it completes.",
        left: ["I've", "You're", "She'll", "We haven't", "He's"],
        right: [
          "___ be here before dinner tonight.",
          "___ doing such a great job on this worksheet!",
          "___ not eaten since breakfast.",
          "___ already finished my homework.",
          "___ been waiting for this moment.",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Formal vs Informal — Use Contractions or Full Forms?",
        instruction:
          "In formal writing, use full forms. In informal writing or dialogue, contractions are fine. Sort each writing context.",
        parentTip: "Discuss: newspapers, reports and formal letters avoid contractions; stories, conversations and texts use them freely.",
        columns: ["Use contractions (informal)", "Use full forms (formal)"],
        items: [
          { label: "A letter to the Prime Minister" },
          { label: "A text message to a friend" },
          { label: "Dialogue in a story" },
          { label: "A school science report" },
          { label: "A shopping list" },
          { label: "An essay for an exam" },
          { label: "A diary entry" },
          { label: "A newspaper article" },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite From Informal to Formal",
        instruction:
          "Rewrite each informal sentence as a formal one — expand all contractions to their full forms.",
        prompts: [
          { text: "I don't think it's a good idea. → Formal: ___", type: "lines", lines: 2 },
          { text: "We're going to the shops, aren't we? → Formal: ___", type: "lines", lines: 2 },
          { text: "She can't come because she hasn't finished her work. → Formal: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Contraction Hunt",
        instruction:
          "Go on a contraction hunt — find as many contractions as you can in books, on TV, in conversations and on packaging.",
        parentTip: "Make it a game over an evening: give one point for each contraction found. First to 20 wins!",
        suggestions: [
          "Find 5 contractions in a book you are reading",
          "Listen to a conversation at home and count contractions",
          "Find the oddest or most unusual contraction you can",
          "Write your favourite 5 contractions and their full forms",
          "Try a day of speaking without using any contractions — how does it sound?",
        ],
      },

      // ── DEVELOPING (21–50) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Contraction Builder: Pronouns + Verbs",
        instruction:
          "Combine each pronoun with the verb to make a contraction. Write the contraction and the missing letters.",
        parentTip: "These pronoun + verb contractions are extremely common in speech.",
        prompts: [
          { text: "I + am = ___  (letters removed: ___)", type: "lines", lines: 1 },
          { text: "you + are = ___  (letters removed: ___)", type: "lines", lines: 1 },
          { text: "he + is = ___  (letters removed: ___)", type: "lines", lines: 1 },
          { text: "she + would = ___  (letters removed: ___)", type: "lines", lines: 1 },
          { text: "we + have = ___  (letters removed: ___)", type: "lines", lines: 1 },
          { text: "they + will = ___  (letters removed: ___)", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Contraction or Possessive?",
        instruction:
          "It's (it is) vs its (belonging to it). Circle the correct choice for each sentence.",
        parentTip: "Teach the substitution test: replace the word with 'it is' — if it still makes sense, use 'it's'. If not, use 'its'.",
        questions: [
          {
            prompt: "___ tail wagged as the dog heard the door open.",
            options: ["It's", "Its"],
          },
          {
            prompt: "___ going to be a warm and sunny day.",
            options: ["It's", "Its"],
          },
          {
            prompt: "The cat licked ___ paws carefully.",
            options: ["it's", "its"],
          },
          {
            prompt: "___ been raining all morning.",
            options: ["It's", "Its"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Dialogue Using Contractions",
        instruction:
          "Write a short dialogue (5–6 lines) between two characters. Use at least 5 contractions. Remember speech marks!",
        parentTip: "Model one line: 'I'm not sure,' said Mia. 'Can't we just ask?'",
        prompts: [
          { text: "Your dialogue:", type: "lines", lines: 8 },
          { text: "Contractions used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Which n't Contraction?",
        instruction:
          "Sort these negative sentences by the correct n't contraction that would replace the underlined words.",
        parentTip: "Be careful with 'will not' → 'won't' — it is the only irregular n't contraction.",
        columns: ["don't", "can't", "won't", "shouldn't", "couldn't"],
        items: [
          { label: "I do not want to go." },
          { label: "She could not open the jar." },
          { label: "We will not be late." },
          { label: "You should not touch that." },
          { label: "He cannot swim." },
          { label: "They do not know the answer." },
          { label: "I will not eat broccoli." },
          { label: "She should not run in the hall." },
        ],
      },
      {
        type: "open-response",
        title: "Tricky Contractions",
        instruction:
          "These contractions are sometimes confused or misspelled. Write the full form for each and explain the tricky part.",
        prompts: [
          { text: "won't = ___ + ___  Why is it tricky?", type: "lines", lines: 2 },
          { text: "shan't = ___ + ___  Why is it tricky?", type: "lines", lines: 2 },
          { text: "let's = ___ + ___  Why is it tricky?", type: "lines", lines: 2 },
          { text: "o'clock — is this a contraction? What does it stand for?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Contraction to the Correct Expanded Pair",
        instruction:
          "Some contractions look similar but come from different word pairs. Match carefully!",
        left: ["he'd", "he'll", "she'd", "she'll", "they'd", "they'll"],
        right: [
          "they had / they would",
          "she will",
          "he had / he would",
          "they will",
          "she had / she would",
          "he will",
        ],
      },
      {
        type: "open-response",
        title: "Apostrophe Error Correction",
        instruction:
          "Find and correct the apostrophe mistake in each sentence. Rewrite the corrected sentence.",
        prompts: [
          { text: "Im really looking forward to the holidays. → Corrected: ___", type: "lines", lines: 2 },
          { text: "The dog chewed it's bone all afternoon. → Corrected: ___", type: "lines", lines: 2 },
          { text: "We'ren't allowed to run in the corridor. → Corrected: ___", type: "lines", lines: 2 },
          { text: "Cant' you see the light is red? → Corrected: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Formal or Informal?",
        instruction:
          "Read each sentence. Circle FORMAL if the contraction should be expanded, or INFORMAL if contractions are fine.",
        questions: [
          { prompt: "I'd like to thank everyone for coming tonight. (Speech at a party)", options: ["FORMAL — expand it", "INFORMAL — contraction is fine"] },
          { prompt: "We cannot accept this proposal at this time. (Business letter)", options: ["FORMAL — expand it", "INFORMAL — contraction is fine"] },
          { prompt: "Don't forget to bring your lunch! (Note to a friend)", options: ["FORMAL — expand it", "INFORMAL — contraction is fine"] },
          { prompt: "The experiment wouldn't work until we adjusted the temperature. (Science report)", options: ["FORMAL — expand it", "INFORMAL — contraction is fine"] },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite: Add Contractions to Make Dialogue Sound Natural",
        instruction:
          "This dialogue sounds very stiff and unnatural because it uses full forms. Rewrite it using appropriate contractions to make it sound more spoken.",
        prompts: [
          { text: "Original: 'I am not sure I will be able to come,' said Tom. 'That is a shame,' said Mia. 'We would have loved to see you.'\nYour rewrite:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Apostrophe Placement — Always Replace Missing Letters",
        instruction:
          "Here is the golden rule for apostrophes in contractions: the apostrophe ALWAYS goes where the missing letters were. Not at the end, not at the beginning — right where the letters left! Check every contraction you write this week using this rule.",
        suggestions: [
          "Write 5 contractions and draw an arrow to where the letters were removed",
          "Check a piece of your own writing — are all apostrophes in the right place?",
          "Find one contraction in a book and check the apostrophe position",
          "Practise the trickiest contraction: won't (will not) — write it 5 times",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Contractions with 'have' vs Contractions with 'is'",
        instruction:
          "Some contractions look identical but can mean either 'is' or 'has/have'. Sort these sentences by which meaning is used.",
        parentTip: "Test by expanding: 'She's left' = 'She has left'. 'She's tired' = 'She is tired'.",
        columns: ["'s = is", "'s = has"],
        items: [
          { label: "He's been gone all day." },
          { label: "She's really happy today." },
          { label: "It's been a long week." },
          { label: "She's the fastest runner." },
          { label: "He's eaten all the biscuits." },
          { label: "It's not what I expected." },
        ],
      },
      {
        type: "open-response",
        title: "Contractions in Story Dialogue",
        instruction:
          "Read this extract and circle all contractions. Then expand each one in a list below.\n\nEXTRACT: 'I can't believe you're here!' she cried. 'I've been so worried! Don't you know it's dangerous to go out at night?' He shrugged. 'I didn't think you'd notice.'",
        prompts: [
          { text: "All contractions found: ___", type: "lines", lines: 2 },
          { text: "Expanded forms: ___", type: "lines", lines: 3 },
          { text: "How do the contractions affect how the dialogue sounds?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Which Two Words?",
        instruction:
          "Draw a line to match each contraction to its correct two-word form. Some have two possible forms!",
        left: ["she'd", "they'd", "he'd", "I'd", "you'd"],
        right: [
          "he had OR he would",
          "she had OR she would",
          "I had OR I would",
          "they had OR they would",
          "you had OR you would",
        ],
      },
      {
        type: "open-response",
        title: "Write a Story Paragraph With Dialogue",
        instruction:
          "Write a story paragraph of 5–6 sentences that includes at least 3 lines of dialogue. Use contractions in the dialogue to make it sound natural. Underline each contraction.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 8 },
          { text: "Contractions used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Contraction Comic Strip",
        instruction:
          "Create a comic strip with at least 4 panels. Characters in the comic must use at least 6 contractions in their speech bubbles.",
        parentTip: "Comic strips are a great way to practise dialogue writing and contractions simultaneously — the speech bubble format naturally calls for contractions.",
        suggestions: [
          "Plan a simple story for your comic: character, problem, solution",
          "Draw 4 panels with characters and speech bubbles",
          "Include at least 6 contractions across the speech bubbles",
          "Colour your comic and give it a title",
          "Read it aloud — does the dialogue sound natural?",
        ],
      },

      // ── CONSOLIDATING (51–80) ─────────────────────────────────────
      {
        type: "open-response",
        title: "Contraction Reference Table",
        instruction:
          "Complete the reference table by filling in all missing contractions or full forms.",
        prompts: [
          { text: "I am = ___   I will = ___   I have = ___   I had/would = ___", type: "lines", lines: 1 },
          { text: "you are = ___   you will = ___   you have = ___   you would = ___", type: "lines", lines: 1 },
          { text: "he is = ___   he will = ___   he has/had = ___   he would = ___", type: "lines", lines: 1 },
          { text: "we are = ___   we will = ___   we have = ___   we would = ___", type: "lines", lines: 1 },
          { text: "do not = ___   will not = ___   cannot = ___   should not = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Correct or Incorrect Apostrophe Use?",
        instruction:
          "Sort each sentence into the correct column.",
        parentTip: "Read each sentence carefully — look for missing apostrophes, apostrophes in the wrong place, or apostrophes used where they don't belong.",
        columns: ["Correct apostrophe use", "Incorrect apostrophe use"],
        items: [
          { label: "She can't come to the party." },
          { label: "Cant you see I'm busy?" },
          { label: "It's going to be a great day." },
          { label: "The cat licked it's paw." },
          { label: "They're already at the park." },
          { label: "Were going to be late." },
          { label: "I've finished my dinner." },
          { label: "I'ts a sunny day." },
        ],
      },
      {
        type: "circle-correct",
        title: "its or it's? — Advanced Practice",
        instruction:
          "Apply the substitution test to choose between 'its' and 'it's' in each sentence.",
        questions: [
          {
            prompt: "___ wings were spread wide as the eagle soared upward.",
            options: ["It's", "Its"],
          },
          {
            prompt: "___ not easy to learn a new language.",
            options: ["It's", "Its"],
          },
          {
            prompt: "The spider rebuilt ___ web after the storm.",
            options: ["it's", "its"],
          },
          {
            prompt: "___ been three weeks since the last rainfall.",
            options: ["It's", "Its"],
          },
          {
            prompt: "The bicycle lost ___ front wheel.",
            options: ["it's", "its"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Edit a Passage for Apostrophe Errors",
        instruction:
          "This passage has 5 apostrophe errors. Find and fix each one. Rewrite the corrected passage below.\n\nPASSAGE: I dont know why were always late. Its not fair on everyone else. Mum cant find her keys, I've forgotten my bag, and dad wont stop checking his phone. Were a total disaster as a family.",
        prompts: [
          { text: "Errors I found: ___", type: "lines", lines: 2 },
          { text: "Corrected passage:", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "When Would You NOT Use a Contraction?",
        instruction:
          "Explain in your own words when it is better to use the full form of words rather than a contraction. Give two examples of text types where contractions should be avoided.",
        prompts: [
          { text: "I would avoid contractions in formal writing because: ___", type: "lines", lines: 3 },
          { text: "Two text types where I would use full forms: ___ and ___", type: "lines", lines: 1 },
          { text: "Rewrite formally: 'She can't do it and won't try.' → ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: Contraction to Its Register",
        instruction:
          "Draw a line to match each sentence to its register (how formal or informal it sounds).",
        left: [
          "'I am unable to attend.' (letter)",
          "'I can't make it.' (text)",
          "'We will not tolerate this behaviour.' (rule)",
          "'We won't put up with that.' (conversation)",
          "'It is my pleasure to...' (speech)",
          "'It's great to meet you!' (greeting)",
        ],
        right: [
          "Informal / conversational",
          "Formal / written",
          "Informal / conversational",
          "Formal / written",
          "Informal / conversational",
          "Formal / written",
        ],
      },
      {
        type: "open-response",
        title: "Write a Formal and Informal Version",
        instruction:
          "Write the same piece of information in two ways: once formally (no contractions) and once informally (use contractions). Topic: you cannot attend a meeting.",
        prompts: [
          { text: "Formal version (e.g. a letter):", type: "lines", lines: 3 },
          { text: "Informal version (e.g. a text message):", type: "lines", lines: 3 },
          { text: "What other language differences do you notice between the two versions?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Types of Contractions",
        instruction:
          "Sort these contractions into groups based on what types of words are combined.",
        parentTip: "The four main groups: pronoun + 'be', pronoun + 'will', pronoun + 'have/had', and verb + 'not'.",
        columns: ["pronoun + be (am/is/are)", "pronoun + will", "pronoun + have/had", "verb + not"],
        items: [
          { label: "I'm" },
          { label: "I'll" },
          { label: "I've" },
          { label: "don't" },
          { label: "she's" },
          { label: "he'll" },
          { label: "they've" },
          { label: "can't" },
          { label: "we're" },
          { label: "you'll" },
          { label: "I'd" },
          { label: "won't" },
        ],
      },
      {
        type: "open-response",
        title: "Write an Advertisement Using Contractions",
        instruction:
          "Write a short advertisement (4–5 sentences) for a made-up product. Advertisements use contractions frequently to sound friendly. Use at least 4 contractions.",
        prompts: [
          { text: "Product name: ___", type: "lines", lines: 1 },
          { text: "My advertisement:", type: "lines", lines: 6 },
          { text: "Contractions used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Contractions Across Text Types",
        instruction:
          "Contractions are not wrong — they just belong in informal writing and dialogue, not formal texts. This week, look at three different text types and notice whether they use contractions or full forms. Ask: why?",
        suggestions: [
          "Check a formal letter — does it use contractions?",
          "Check a story — does the narrator use contractions? Do the characters?",
          "Check a magazine article — does it use contractions?",
          "Write a short reflection: what did you notice about contractions and text type?",
        ],
      },

      // ── EXTENDING (81–100) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Analyse Contractions in a Text",
        instruction:
          "Find a page from a story and a page from a non-fiction text. Count the contractions in each. Calculate the rate (contractions per sentence). What does this tell you about how each text type uses language?",
        prompts: [
          { text: "Story title and page number: ___", type: "lines", lines: 1 },
          { text: "Contractions found in story: ___  Sentences in story: ___  Rate: ___", type: "lines", lines: 1 },
          { text: "Non-fiction title and page: ___", type: "lines", lines: 1 },
          { text: "Contractions in non-fiction: ___  Sentences: ___  Rate: ___", type: "lines", lines: 1 },
          { text: "What does this data tell us about contractions and text type?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Ambiguous Contractions",
        instruction:
          "Some contractions can expand to TWO different full forms (e.g. 'he'd' = 'he had' OR 'he would'). Sort each sentence by which expansion makes sense.",
        parentTip: "Discuss: the surrounding words (context) always tell you which meaning is correct.",
        columns: ["'d = had", "'d = would"],
        items: [
          { label: "She'd already eaten by the time we arrived." },
          { label: "He'd love to come if he could." },
          { label: "They'd been waiting for hours." },
          { label: "I'd rather stay home tonight." },
          { label: "We'd finished before the others started." },
          { label: "You'd enjoy it if you tried." },
        ],
      },
      {
        type: "circle-correct",
        title: "Advanced: Identify the Contraction Error",
        instruction:
          "Each sentence has a subtle apostrophe error. Circle the error type.",
        questions: [
          {
            prompt: "The team could'nt agree on a plan.",
            options: ["Apostrophe in wrong place (should be couldn't)", "Missing apostrophe", "No error"],
          },
          {
            prompt: "Its raining heavily outside.",
            options: ["Should be 'it's' (it is)", "Should be 'its' (possessive)", "No error"],
          },
          {
            prompt: "I should'nt have said that.",
            options: ["Apostrophe in wrong place (should be shouldn't)", "Missing apostrophe", "No error"],
          },
          {
            prompt: "They're going to the concert tonight.",
            options: ["Wrong word (should be 'their')", "No error", "Wrong word (should be 'there')"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Story That Shows Contraction vs Full Form for Effect",
        instruction:
          "Skilled writers sometimes deliberately switch from contractions to full forms to create an effect — e.g. a character who speaks formally sounds stiff or powerful. Write a short scene (6–8 sentences) where one character uses contractions and another uses full forms. Show how this reveals their personalities.",
        prompts: [
          { text: "Character 1 (contractions = informal): ___", type: "lines", lines: 2 },
          { text: "Character 2 (full forms = formal): ___", type: "lines", lines: 2 },
          { text: "My scene:", type: "lines", lines: 8 },
          { text: "What do the different language choices tell us about each character?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "History of Contractions",
        instruction:
          "Contractions are not a modern invention — they have existed in English for hundreds of years. Research or think about: why do humans shorten words in speech? How does this affect writing over time?",
        prompts: [
          { text: "Why do you think people shorten words when they speak?", type: "lines", lines: 2 },
          { text: "Can you think of any other ways English words have shortened or changed over time?", type: "lines", lines: 2 },
          { text: "Do you think contractions will become even more common in the future? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Create a Contraction Reference Guide",
        instruction:
          "Design a full reference guide to contractions for a Year 2 student. Include: what they are, how to write them correctly, common ones, and the tricky ones to watch out for.",
        prompts: [
          { text: "What is a contraction? (in simple language): ___", type: "lines", lines: 2 },
          { text: "How to write them correctly: ___", type: "lines", lines: 2 },
          { text: "List of 10 common contractions and their full forms: ___", type: "lines", lines: 3 },
          { text: "Tricky ones to watch: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Contractions from Different Eras of English",
        instruction:
          "English literature from different eras uses contractions differently. Sort these contracted forms by whether they are common today or old-fashioned/literary.",
        parentTip: "Older contractions appear in poetry and older novels — they can still be understood but are rarely used in modern writing.",
        columns: ["Modern and common", "Old-fashioned or literary"],
        items: [
          { label: "don't" },
          { label: "'tis (it is)" },
          { label: "can't" },
          { label: "o'er (over)" },
          { label: "we'll" },
          { label: "ne'er (never)" },
          { label: "they're" },
          { label: "'twas (it was)" },
        ],
      },
      {
        type: "open-response",
        title: "Extended Writing: A Dialogue-Heavy Story",
        instruction:
          "Write a story of 10–12 sentences where most of the action happens through dialogue. Use at least 8 contractions across the speech. Make sure each character sounds distinctly different. Underline every contraction.",
        prompts: [
          { text: "Story title: ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 14 },
          { text: "Contractions used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Reflect: What I Know About Apostrophes in Contractions",
        instruction:
          "Write a reflection (4–5 sentences) about what you have learned. Include: what a contraction is, how to place the apostrophe, when to use contractions and when not to, and one thing you still want to practise.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 7 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Teach It Back — Contractions",
        instruction:
          "Teach a family member or younger sibling everything you know about contractions. Give them a quiz at the end to check their understanding!",
        parentTip: "Teaching deepens learning. Listen as your child explains and ask follow-up questions like 'But why does won't not follow the normal pattern?' to push their thinking.",
        suggestions: [
          "Prepare a 5-minute lesson about what contractions are and how to write them",
          "Include examples of common contractions",
          "Highlight the tricky ones: won't, it's vs its, they're vs their vs there",
          "Create a quiz of 5 questions and give it to your 'student'",
          "Celebrate completing this worksheet — you are a contractions expert!",
        ],
      },
      {
        type: "open-response",
        title: "Contractions Review: Write the Full Form",
        instruction:
          "Write the full two-word form for each contraction. These are mixed levels — some straightforward, some tricky.",
        prompts: [
          { text: "I'd = ___ OR ___", type: "lines", lines: 1 },
          { text: "they've = ___", type: "lines", lines: 1 },
          { text: "shan't = ___", type: "lines", lines: 1 },
          { text: "she'll = ___", type: "lines", lines: 1 },
          { text: "we'd = ___ OR ___", type: "lines", lines: 1 },
          { text: "you're = ___", type: "lines", lines: 1 },
          { text: "hadn't = ___", type: "lines", lines: 1 },
          { text: "let's = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Common vs Rare Contractions",
        instruction:
          "Some contractions appear in everyday speech constantly; others are rare or old-fashioned. Sort each one.",
        parentTip: "Discuss: rare contractions appear mostly in poetry, historical texts, and older literature.",
        columns: ["Common in everyday speech", "Rare or old-fashioned"],
        items: [
          { label: "don't" },
          { label: "'twas" },
          { label: "can't" },
          { label: "ne'er" },
          { label: "we're" },
          { label: "o'er" },
          { label: "I'll" },
          { label: "'tis" },
        ],
      },
      {
        type: "circle-correct",
        title: "Contraction: Correct or Incorrect?",
        instruction:
          "Circle CORRECT if the contraction is written properly, or INCORRECT if there is an error.",
        questions: [
          { prompt: "she's", options: ["CORRECT", "INCORRECT"] },
          { prompt: "were'nt", options: ["CORRECT", "INCORRECT"] },
          { prompt: "couldn't", options: ["CORRECT", "INCORRECT"] },
          { prompt: "it's", options: ["CORRECT", "INCORRECT"] },
          { prompt: "would'nt", options: ["CORRECT", "INCORRECT"] },
          { prompt: "they'll", options: ["CORRECT", "INCORRECT"] },
          { prompt: "wo'nt", options: ["CORRECT", "INCORRECT"] },
          { prompt: "I've", options: ["CORRECT", "INCORRECT"] },
        ],
      },
      {
        type: "open-response",
        title: "Write a Contraction Story Opener",
        instruction:
          "Write the opening paragraph (4–5 sentences) of a story. Use at least 5 contractions. Make the opening engaging and hook the reader.",
        prompts: [
          { text: "My story opening:", type: "lines", lines: 7 },
          { text: "Contractions used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Contractions Across Text Types",
        instruction:
          "Draw a line to match each sentence to the text type it most likely comes from.",
        left: [
          "I cannot accept this proposal.",
          "She can't believe it happened!",
          "We will not stand for this.",
          "Don't forget your lunch!",
          "I'm so excited, I could burst!",
          "The results cannot be disputed.",
        ],
        right: [
          "Diary entry",
          "Text message or note",
          "Formal business letter",
          "Informal conversation",
          "Official statement",
          "Personal letter",
        ],
      },
      {
        type: "open-response",
        title: "Write Informal and Formal Versions",
        instruction:
          "Write the same content twice: once informally (using contractions) and once formally (using full forms). Topic: explaining you are unwell and cannot attend.",
        prompts: [
          { text: "Informal (text or note to a friend): ___", type: "lines", lines: 3 },
          { text: "Formal (letter to a school or organisation): ___", type: "lines", lines: 3 },
          { text: "What other differences do you notice besides contractions?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Contractions in Famous Quotes",
        instruction:
          "Find or recall any 3 famous quotes or expressions that use contractions. Write each quote, identify the contractions, and expand them to their full forms.",
        prompts: [
          { text: "Quote 1: ___  Contraction: ___  Full form: ___", type: "lines", lines: 2 },
          { text: "Quote 2: ___  Contraction: ___  Full form: ___", type: "lines", lines: 2 },
          { text: "Quote 3: ___  Contraction: ___  Full form: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Contractions Mastery: Edit a Long Passage",
        instruction:
          "Edit this passage — some contractions are missing apostrophes, some are wrong, and some full forms should be contractions in dialogue. Find and fix all errors.\n\nPASSAGE: 'I am going to the shops,' she said. 'Do'nt you want to come?' He shook his head. 'I ca'nt — I havent finished yet.' She sighed. 'You wont be long, will you?' 'I do not think so,' he replied, though he wasn't sure.",
        prompts: [
          { text: "Errors I found: ___", type: "lines", lines: 2 },
          { text: "Corrected passage:", type: "lines", lines: 6 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Contractions Make Dialogue Sound Real",
        instruction:
          "The biggest difference between natural-sounding dialogue and stiff, artificial dialogue is contractions. Real people use contractions constantly in speech. When you write dialogue, use contractions freely — it makes characters sound alive!",
        suggestions: [
          "Write 4 lines of dialogue between two friends — use contractions throughout",
          "Find dialogue in a book and count the contractions in 10 lines",
          "Read the dialogue aloud — does it sound like real speech?",
          "Rewrite one line of dialogue WITHOUT contractions — how does it sound?",
        ],
      },
      {
        type: "open-response",
        title: "Contractions: Final Self-Assessment",
        instruction:
          "Rate yourself honestly on each contraction skill. Then set one goal.",
        prompts: [
          { text: "I can write contractions with the apostrophe in the right place. Confidence: ___/10", type: "lines", lines: 1 },
          { text: "I can expand a contraction to its two-word form. Confidence: ___/10", type: "lines", lines: 1 },
          { text: "I understand when to use contractions (informal) and when not to (formal). Confidence: ___/10", type: "lines", lines: 1 },
          { text: "I can use contractions to make dialogue sound natural. Confidence: ___/10", type: "lines", lines: 1 },
          { text: "My goal for further practice: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Contraction Challenge Week",
        instruction:
          "This week, try to use a new contraction you have never written before in your writing each day. By the end of the week you will have practised 5 new contractions!",
        parentTip: "Support this by providing a new contraction each morning as a 'word of the day'. Encourage its use in any piece of writing during the day.",
        suggestions: [
          "Day 1: use 'they've' in a sentence",
          "Day 2: use 'she'd' in a sentence",
          "Day 3: use 'shan't' in a sentence",
          "Day 4: use 'let's' in a sentence",
          "Day 5: choose your own — the rarest contraction you know!",
        ],
      },
      {
        type: "open-response",
        title: "Contractions: Write Your Favourite Examples",
        instruction:
          "Write your 8 favourite contractions. For each, write the full form, a sentence using the contraction, and the context it suits best (formal, informal, dialogue, etc.).",
        prompts: [
          { text: "1. ___ = ___  Sentence: ___  Context: ___", type: "lines", lines: 2 },
          { text: "2. ___ = ___  Sentence: ___  Context: ___", type: "lines", lines: 2 },
          { text: "3. ___ = ___  Sentence: ___  Context: ___", type: "lines", lines: 2 },
          { text: "4. ___ = ___  Sentence: ___  Context: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Contraction: Right or Wrong Apostrophe Position?",
        instruction: "Circle whether the apostrophe is in the CORRECT or WRONG position.",
        parentTip: "Apostrophe position is one of the most common errors in student writing. Explicit checking builds accuracy.",
        questions: [
          { prompt: "do'nt", options: ["correct", "wrong"] },
          { prompt: "don't", options: ["correct", "wrong"] },
          { prompt: "I'am", options: ["correct", "wrong"] },
          { prompt: "I'm", options: ["correct", "wrong"] },
          { prompt: "the'yre", options: ["correct", "wrong"] },
          { prompt: "they're", options: ["correct", "wrong"] },
          { prompt: "you're", options: ["correct", "wrong"] },
          { prompt: "yo'ure", options: ["correct", "wrong"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Contractions by the Letter(s) Removed",
        instruction: "Sort these contractions into groups based on which letter or letters the apostrophe replaces.",
        columns: ["replaces 'o'", "replaces 'a'", "replaces other letters"],
        items: [
          { label: "don't (do not)" },
          { label: "I'm (I am)" },
          { label: "can't (cannot)" },
          { label: "she's (she is)" },
          { label: "won't (will not)" },
          { label: "he'd (he would)" },
          { label: "couldn't (could not)" },
          { label: "we're (we are)" },
        ],
      },
      {
        type: "matching",
        title: "Match: Rare Contractions to Full Forms",
        instruction: "Draw a line from each less-common contraction to its full form.",
        left: ["shan't", "o'clock", "ma'am", "ne'er", "e'er"],
        right: [
          "ever",
          "never",
          "madam",
          "of the clock",
          "shall not",
        ],
      },
      {
        type: "open-response",
        title: "Contraction Error Detective",
        instruction:
          "Correct all the apostrophe errors in this paragraph: 'I ca'nt believe its raining again. She do'snt want to go outside. They're going to get soaked if they're not careful. He said he wo'nt come.'",
        parentTip: "Proofreading for a specific error type is an excellent targeted editing skill.",
        prompts: [
          { text: "Corrected paragraph:", type: "lines", lines: 4 },
          { text: "Errors I found and fixed: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Contraction or Possessive Apostrophe?",
        instruction: "Circle whether the apostrophe in each phrase shows a CONTRACTION or POSSESSION.",
        parentTip: "Distinguishing contraction apostrophes from possessive apostrophes is a key Year 3 skill.",
        questions: [
          { prompt: "it's raining", options: ["contraction", "possession"] },
          { prompt: "the dog's bone", options: ["contraction", "possession"] },
          { prompt: "she's happy", options: ["contraction", "possession"] },
          { prompt: "Mia's book", options: ["contraction", "possession"] },
          { prompt: "they're late", options: ["contraction", "possession"] },
          { prompt: "the cat's tail", options: ["contraction", "possession"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Formal or Informal Writing?",
        instruction: "Contractions are informal. Sort these sentences into FORMAL or INFORMAL writing style.",
        columns: ["Formal (no contractions)", "Informal (uses contractions)"],
        items: [
          { label: "I cannot attend the meeting." },
          { label: "I can't make it, sorry!" },
          { label: "We are delighted to welcome you." },
          { label: "We're so glad you're here!" },
          { label: "They did not complete the assignment." },
          { label: "They didn't finish — no idea why." },
          { label: "It is a pleasure to meet you." },
          { label: "It's great to meet you!" },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite: Formal to Informal Using Contractions",
        instruction:
          "Rewrite this formal letter opening using contractions to make it sound like a friendly text message: 'I am writing to let you know that I will not be able to attend the party. I am sorry that I cannot come.'",
        prompts: [
          { text: "Informal text message version:", type: "lines", lines: 3 },
          { text: "Contractions I used: ___", type: "lines", lines: 1 },
          { text: "What changed when I used contractions: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sequence",
        title: "Order: How to Write a Contraction Correctly",
        instruction: "Put these steps in order for writing a contraction correctly.",
        items: [
          { label: "Identify the two words you want to join" },
          { label: "Decide which letters will be removed" },
          { label: "Join the words and place the apostrophe where the letters were removed" },
          { label: "Read the contraction aloud to check it sounds right" },
          { label: "Write it in a sentence to check it makes sense" },
        ],
      },
      {
        type: "matching",
        title: "Match: Contraction to the Sentence It Fits",
        instruction: "Draw a line to match each contraction to the sentence where it fits best.",
        left: ["We'd", "She's", "They're", "I'll", "You've"],
        right: [
          "___ been waiting all day for you.",
          "___ see you tomorrow at school.",
          "___ my favourite teacher.",
          "___ going to be late if they don't hurry.",
          "___ love to come to your party.",
        ],
      },
      {
        type: "open-response",
        title: "Write Dialogue Using Contractions",
        instruction:
          "Write a dialogue (conversation) between two characters that uses at least 8 contractions. Use speech marks and a new line for each speaker.",
        parentTip: "Dialogue is the natural home of contractions — it mirrors spoken language. Encourage realistic, natural-sounding conversation.",
        prompts: [
          { text: "Characters: ___", type: "lines", lines: 1 },
          { text: "My dialogue:", type: "lines", lines: 8 },
          { text: "Contractions I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Contraction is Correct?",
        instruction: "Circle the correct contraction for each pair of words.",
        questions: [
          { prompt: "should not →", options: ["shouldn't", "shold'nt"] },
          { prompt: "would have →", options: ["would've", "wou'd've"] },
          { prompt: "could not →", options: ["coul'dnt", "couldn't"] },
          { prompt: "they would →", options: ["they'd", "they'ould"] },
          { prompt: "I would →", options: ["I'ould", "I'd"] },
          { prompt: "we will →", options: ["we'll", "we'ill"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Contractions by How Many Words They Join",
        instruction: "Most contractions join 2 words. Sort these into groups.",
        columns: ["Join 2 words", "Unusual/3-word origin"],
        items: [
          { label: "don't" },
          { label: "wouldn't've" },
          { label: "she's" },
          { label: "could've" },
          { label: "they're" },
          { label: "shouldn't've" },
          { label: "I'll" },
          { label: "I'd've" },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Apostrophes Checklist for Writers",
        instruction:
          "When you proofread your writing, check every apostrophe using this checklist. Copy it into your writing journal.",
        suggestions: [
          "Is this a contraction? Find the two original words.",
          "Is the apostrophe where the letter(s) were removed?",
          "Is this a possessive? Is the apostrophe after the owner's name?",
          "Check 'its' vs 'it's' — 'it's' always means 'it is'.",
          "Read the sentence aloud — does the apostrophe make sense?",
        ],
      },
      {
        type: "open-response",
        title: "Contractions in Poetry",
        instruction:
          "Write a short poem (4–6 lines) that uses at least 4 contractions. The contractions should feel natural, not forced.",
        prompts: [
          { text: "My poem:", type: "lines", lines: 6 },
          { text: "Contractions I used: ___", type: "lines", lines: 1 },
          { text: "Did the contractions improve the poem's rhythm? Why? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Double-Check 'it's' vs 'its'",
        instruction: "Draw a line to show which form fits each sentence.",
        left: [
          "___ going to rain.",
          "The cat licked ___ paws.",
          "___ my turn now.",
          "The dog wagged ___ tail.",
          "___ a beautiful day.",
        ],
        right: [
          "it's (x3)",
          "its (x2)",
        ],
      },
      {
        type: "open-response",
        title: "Contraction Story: Informal Narration",
        instruction:
          "Write a short (6–8 sentence) narrative using a first-person, informal voice. Use at least 10 contractions. The story can be about anything.",
        parentTip: "First-person informal narratives are an authentic context for contractions. Encourage your child to write as if they're telling a friend.",
        prompts: [
          { text: "My story title: ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 8 },
          { text: "Contractions I used (list them): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Contractions: Right Context?",
        instruction: "Circle whether each contraction is used in an APPROPRIATE context.",
        parentTip: "Formal writing (letters to principals, reports) should avoid contractions. Informal writing (stories, dialogue, texts) can use them.",
        questions: [
          { prompt: "Dear Principal, I'm writing to... (formal letter)", options: ["appropriate", "not appropriate"] },
          { prompt: "We're heading to the park! (text message)", options: ["appropriate", "not appropriate"] },
          { prompt: "We'd like to thank you... (speech at assembly)", options: ["appropriate", "not appropriate"] },
          { prompt: "It is my pleasure... (formal report)", options: ["appropriate", "not appropriate"] },
          { prompt: "Didn't you hear me? (dialogue in a story)", options: ["appropriate", "not appropriate"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Contractions into Difficulty Groups",
        instruction: "Sort these contractions from EASY (very common, simple) to HARD (rare or complex).",
        columns: ["Easy", "Medium", "Hard"],
        items: [
          { label: "don't" },
          { label: "I'm" },
          { label: "wouldn't've" },
          { label: "she'd" },
          { label: "shan't" },
          { label: "they're" },
          { label: "could've" },
          { label: "I'd've" },
          { label: "he'll" },
        ],
      },
      {
        type: "sequence",
        title: "Order: Contraction from Most Formal to Most Informal Text",
        instruction: "Order these text types from the one that uses the MOST contractions to the FEWEST.",
        items: [
          { label: "Formal report to the school principal" },
          { label: "A letter to a friend" },
          { label: "A text message to a family member" },
          { label: "A conversation in a story" },
          { label: "A science explanation text" },
        ],
      },
      {
        type: "open-response",
        title: "Contraction Self-Assessment",
        instruction:
          "Assess your own understanding of contractions honestly. Write what you know well, what you find tricky, and what you need to practise.",
        prompts: [
          { text: "I understand contractions well because: ___", type: "lines", lines: 2 },
          { text: "I still find this tricky: ___", type: "lines", lines: 2 },
          { text: "I will practise: ___", type: "lines", lines: 2 },
          { text: "My three strongest contraction examples: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Contractions in Real Books",
        instruction:
          "Open any novel or picture book. Find 10 contractions and write them down. Then write the full form next to each one.",
        parentTip: "Real-book examples show children that contractions are a normal, skilled authorial choice — not just errors to avoid.",
        suggestions: [
          "Open any book you enjoy",
          "Find 10 contractions",
          "Write each contraction and its full form",
          "Note: do more contractions appear in dialogue or narration?",
          "Share your findings — which book had the most contractions?",
        ],
      },
      {
        type: "open-response",
        title: "Contractions: Teach a Friend",
        instruction:
          "Write a clear explanation of apostrophes in contractions that you could read aloud to teach a friend. Include: what a contraction is, how to write one, common examples, and one common mistake to avoid.",
        prompts: [
          { text: "What is a contraction:", type: "lines", lines: 2 },
          { text: "How to write one correctly:", type: "lines", lines: 2 },
          { text: "Three good examples: ___", type: "lines", lines: 1 },
          { text: "The most common mistake to avoid: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Contractions Final Check: Tick or Cross",
        instruction: "Circle CORRECT or INCORRECT for each contraction and apostrophe in these sentences.",
        questions: [
          { prompt: "She wo'nt be coming tonight.", options: ["correct", "incorrect"] },
          { prompt: "I'd love to help you with that.", options: ["correct", "incorrect"] },
          { prompt: "They're going to the beach tomorrow.", options: ["correct", "incorrect"] },
          { prompt: "Weve been waiting for hours.", options: ["correct", "incorrect"] },
          { prompt: "He couldn't find his shoes.", options: ["correct", "incorrect"] },
          { prompt: "She sho'uldn't have said that.", options: ["correct", "incorrect"] },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Contraction Comic Strip",
        instruction:
          "Create a 4-panel comic strip where characters use contractions naturally in dialogue. Each panel must include at least one contraction in a speech bubble.",
        parentTip: "Comic strips make contractions purposeful and fun — dialogue is their natural home. Display the finished comic on the fridge.",
        suggestions: [
          "Plan your 4-panel story",
          "Draw a simple character in each panel",
          "Write dialogue with contractions in speech bubbles",
          "Make sure each apostrophe is in the right place",
          "Share your comic with a family member",
        ],
      },
      {
        type: "open-response",
        title: "Spark: Write a Story with NO Contractions vs ALL Contractions",
        instruction:
          "Write the SAME short scene twice. First with NO contractions at all (formal/stiff). Then with contractions wherever they fit (informal/natural). Compare the effect.",
        parentTip: "This contrast exercise powerfully demonstrates why writers make deliberate choices about contraction use.",
        prompts: [
          { text: "Formal version (no contractions):", type: "lines", lines: 4 },
          { text: "Informal version (with contractions):", type: "lines", lines: 4 },
          { text: "What I noticed about the difference: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Contractions Final Accuracy Round",
        instruction: "Circle the correctly written version in each pair.",
        parentTip: "Final accuracy round — this can be used as an informal assessment.",
        questions: [
          { prompt: "A) we're   B) we're", options: ["A", "B"] },
          { prompt: "A) they'v   B) they've", options: ["A", "B"] },
          { prompt: "A) couldn't   B) could'nt", options: ["A", "B"] },
          { prompt: "A) won't   B) wont'", options: ["A", "B"] },
          { prompt: "A) I'ld   B) I'd", options: ["A", "B"] },
          { prompt: "A) she'll   B) she'ull", options: ["A", "B"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Contractions to Their Word Categories",
        instruction: "Sort these contractions by which verb they are built from.",
        columns: ["Built from 'not'", "Built from 'am/is/are'", "Built from 'will/shall'", "Built from 'have/had/would'"],
        items: [
          { label: "don't" },
          { label: "I'm" },
          { label: "he'll" },
          { label: "she'd" },
          { label: "won't" },
          { label: "they're" },
          { label: "we'll" },
          { label: "I've" },
          { label: "can't" },
          { label: "you're" },
          { label: "I'd" },
          { label: "shan't" },
        ],
      },
      {
        type: "open-response",
        title: "Contractions: Write a Scene Using All Types",
        instruction:
          "Write a short scene (5–6 sentences) that uses at least one contraction from EACH category: 'not', 'am/is/are', 'will', and 'have/had/would'. Label each one in brackets.",
        prompts: [
          { text: "My scene:", type: "lines", lines: 6 },
          { text: "Contractions from each category I used: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Contraction to the Correct Full Form",
        instruction: "Draw a line from each contraction to its correct full form. Watch out — some are tricky!",
        left: ["won't", "shan't", "I'd", "we've", "they'd"],
        right: [
          "we have",
          "they would / they had",
          "will not",
          "I would / I had",
          "shall not",
        ],
      },
      {
        type: "home-activity",
        title: "Contraction Mastery: Final Self-Check",
        instruction:
          "Test yourself on contractions! Write out the full form for 10 contractions from memory, then check your answers.",
        parentTip: "Self-testing (retrieval practice) is one of the most effective learning strategies. Make this low-stakes and fun.",
        suggestions: [
          "Write 10 contractions from memory",
          "Write the full form of each",
          "Check your answers against a reference",
          "Circle any you got wrong",
          "Write the correct form three times for each error",
        ],
      },
      {
        type: "open-response",
        title: "Contractions Mastery Reflection",
        instruction:
          "Write a final reflection on what you have learned about apostrophes in contractions. Include: what you found easy, what was challenging, and one goal for your future writing.",
        prompts: [
          { text: "What I found easy about contractions: ___", type: "lines", lines: 2 },
          { text: "What was challenging: ___", type: "lines", lines: 2 },
          { text: "My goal for using contractions correctly in my writing: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sequence",
        title: "Order: Steps to Check a Contraction in Your Writing",
        instruction: "Put these proofreading steps in the correct order for checking a contraction.",
        items: [
          { label: "Spot a word with an apostrophe in your writing" },
          { label: "Ask: is this a contraction or possession?" },
          { label: "If contraction: write out the two full words" },
          { label: "Check the apostrophe is where the letters were removed" },
          { label: "Read the sentence aloud to confirm it sounds right" },
        ],
      },
      {
        type: "open-response",
        title: "Spark: Contractions Expert Certificate",
        instruction:
          "Write a paragraph that would deserve a 'Contractions Expert Certificate'. It must use 12 or more contractions correctly, be natural-sounding, and demonstrate real understanding of when contractions belong in writing.",
        parentTip: "This final task is a celebration of achievement. Display the finished work and read it aloud together.",
        prompts: [
          { text: "My expert paragraph:", type: "lines", lines: 8 },
          { text: "Contractions I used (list all 12+): ___", type: "lines", lines: 2 },
          { text: "I am proud of this because: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Contraction Use — Correct Context or Wrong Context?",
        instruction: "Sort these into CORRECT CONTEXT (contractions are appropriate) or WRONG CONTEXT (formal — contractions shouldn't be used).",
        columns: ["Correct context for contractions", "Wrong context (too formal)"],
        items: [
          { label: "A text message to a friend" },
          { label: "A formal letter to the school board" },
          { label: "Dialogue in a story between friends" },
          { label: "A scientific report for a competition" },
          { label: "A personal journal entry" },
          { label: "An official complaint letter" },
          { label: "A friendly email to a pen pal" },
          { label: "A speech at a formal ceremony" },
        ],
      },
      {
        type: "circle-correct",
        title: "Contractions in Published Books: Correct or Error?",
        instruction: "In each made-up sentence 'from a book', circle CORRECT or ERROR for the apostrophe use.",
        questions: [
          { prompt: "'Don't you dare,' she said softly.", options: ["correct", "error"] },
          { prompt: "'I ca'nt believe it!' he gasped.", options: ["correct", "error"] },
          { prompt: "'They're going to be late,' she sighed.", options: ["correct", "error"] },
          { prompt: "'We've been walking for hours,' he groaned.", options: ["correct", "error"] },
          { prompt: "'She would'nt listen to anyone.'", options: ["correct", "error"] },
        ],
      },
      {
        type: "open-response",
        title: "Contractions: My Personal Dictionary Page",
        instruction:
          "Create a personal dictionary page for contractions. Choose 8 contractions you use most often. For each, write the full form, the contraction, a sentence showing correct use, and mark it as formal or informal.",
        parentTip: "Personal dictionaries built by the learner are far more memorable than reference charts they haven't made themselves.",
        prompts: [
          { text: "Contractions 1–4 (full form, contraction, sentence, formal/informal):", type: "lines", lines: 4 },
          { text: "Contractions 5–8:", type: "lines", lines: 4 },
          { text: "The contraction I use most in my writing: ___", type: "lines", lines: 1 },
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
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      {
        type: "open-response",
        title: "What Is an Inference?",
        instruction:
          "Read each short clue sentence. Write what you can infer (figure out) from it without being told directly.",
        parentTip: "Use the sentence frame: 'I can infer ___ because the text says ___.'",
        prompts: [
          { text: "Clue: 'Jana put on her boots and grabbed her umbrella.'  What can you infer about the weather?", type: "lines", lines: 2 },
          { text: "Clue: 'The boy's cheeks were red and tears streamed down his face.'  What can you infer about how he feels?", type: "lines", lines: 2 },
          { text: "Clue: 'The kitchen was filled with the smell of burnt toast.'  What can you infer just happened?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Direct Statement or Inference?",
        instruction:
          "Read each statement. Decide if it is directly stated in the text or if you have to infer it.",
        parentTip: "Ask your child: 'Can you point to the exact words in the clue that say this?' If not, it's an inference.",
        questions: [
          {
            prompt: "Clue: 'It was raining.' — Statement: 'It is raining.' Is this...",
            options: ["Directly stated", "An inference"],
          },
          {
            prompt: "Clue: 'She shivered and pulled her coat tight.' — Statement: 'She is cold.' Is this...",
            options: ["Directly stated", "An inference"],
          },
          {
            prompt: "Clue: 'He ran as fast as he could.' — Statement: 'He was running.' Is this...",
            options: ["Directly stated", "An inference"],
          },
          {
            prompt: "Clue: 'She avoided looking at anyone as she walked in.' — Statement: 'She felt embarrassed.' Is this...",
            options: ["Directly stated", "An inference"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Read and Infer: The Leo Passage",
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
        title: "What Does This Text Tell Us? (Leo Passage)",
        instruction:
          "Read each statement about the Leo passage. Decide if it is directly stated (D) or an inference (I). Circle your answer.",
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
        title: "Prove Your Inference (Leo Passage)",
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
        type: "sorting",
        title: "Sort: Fact (Stated) or Inference?",
        instruction:
          "Read the passage: 'Maya entered the room and sat at the back. She kept her eyes down and did not speak to anyone.' Sort each statement into the correct column.",
        parentTip: "Only things the text explicitly says count as 'stated'. Everything else must be inferred.",
        columns: ["Directly stated in the passage", "You have to infer this"],
        items: [
          { label: "Maya sat at the back." },
          { label: "Maya is shy or nervous." },
          { label: "Maya kept her eyes down." },
          { label: "Maya doesn't know anyone in the room." },
          { label: "Maya didn't speak to anyone." },
          { label: "Maya wishes she were somewhere else." },
        ],
      },
      {
        type: "open-response",
        title: "Clue Sentences: Infer the Scene",
        instruction:
          "Read each set of clues. Write what you can infer about the scene — where it is, what time, what is happening, how the character feels.",
        prompts: [
          { text: "Clues: 'She wore a helmet and knee pads. She took a deep breath. The crowd fell silent.'\nWhat can you infer about this scene?", type: "lines", lines: 3 },
          { text: "Clues: 'The man wiped his eyes quickly before anyone saw. He folded the letter and placed it in his pocket.'\nWhat can you infer?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "matching",
        title: "Match Clue to Inference",
        instruction:
          "Draw a line to match each clue sentence to the best inference.",
        parentTip: "There may be more than one possible inference — choose the one that is most supported by the clue.",
        left: [
          "She kept checking her phone and drumming her fingers on the table.",
          "He pushed the food around his plate but did not eat.",
          "The lights were all off and the house was silent.",
          "She burst through the door, breathing hard.",
          "He read the same line three times.",
        ],
        right: [
          "She had just been running.",
          "He was finding it hard to concentrate.",
          "Everyone was asleep or away.",
          "He was upset or worried.",
          "She was impatient or anxious.",
        ],
      },
      {
        type: "open-response",
        title: "Read a New Passage and Make Inferences",
        instruction:
          "Read the passage below and answer the questions.\n\n--- PASSAGE ---\nAmara opened the envelope with shaking hands. She read the first line, then put the letter face-down on the table. She stood up and walked to the window. For a long time, she just stared outside at the falling leaves.",
        prompts: [
          { text: "What can you infer about how Amara is feeling? What clues tell you?", type: "lines", lines: 3 },
          { text: "What do you think might be in the letter? Support your inference with evidence from the text.", type: "lines", lines: 3 },
          { text: "Why do you think Amara put the letter face-down? What does this suggest?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Inference Is Best Supported?",
        instruction:
          "Read the sentence. Choose the inference that is BEST supported by the text clues.",
        questions: [
          {
            prompt: "Text: 'She stood outside the locked door, digging through her bag frantically.'",
            options: [
              "She is looking for her keys.",
              "She is very organised.",
              "She has just arrived from a holiday.",
            ],
          },
          {
            prompt: "Text: 'The dog lay still at the back of the kennel and would not come when called.'",
            options: [
              "The dog is hungry.",
              "The dog is unwell or frightened.",
              "The dog is sleeping.",
            ],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: The Evidence Sentence Frame",
        instruction:
          "The most important habit for making inferences is PROVING them. Never just say what you think — always say WHY. Use this frame every time: 'I can infer ___ because the text says ___.' Practise using it every day this week!",
        suggestions: [
          "When reading, pause on every other page and use the sentence frame",
          "When watching TV, pause and use the frame to explain a character's action",
          "Write 2 inferences from today's reading using the frame",
          "Share one inference from your reading at dinner",
        ],
      },
      {
        type: "open-response",
        title: "Inference From a Picture",
        instruction:
          "Look carefully at the scene described below. Write three inferences about it — three things you can figure out that are NOT directly stated.\n\nSCENE DESCRIPTION: A messy kitchen. Flour on the bench. An open cookbook. A bowl with something in it. A smoke alarm going off on the wall. A child standing on a step stool looking at the oven.",
        prompts: [
          { text: "Inference 1: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference 2: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference 3: ___  Evidence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Strong or Weak Inference?",
        instruction:
          "A strong inference is well supported by the text. A weak inference is possible but has little evidence. Sort these inferences about the Leo passage.",
        parentTip: "Discuss: how much text evidence supports each inference? More evidence = stronger inference.",
        columns: ["Strong inference (well supported by clues)", "Weak inference (little evidence)"],
        items: [
          { label: "It is cold outside (Leo sees his breath, he pulls his coat tighter)." },
          { label: "Leo is heading to a bakery or warm shop (smell of something warm and sweet)." },
          { label: "Leo is a doctor going to work." },
          { label: "Leo has had a difficult day (he smiled for the first time)." },
          { label: "Leo is visiting a foreign country." },
          { label: "The street is quiet and empty at this time of night." },
        ],
      },
      {
        type: "open-response",
        title: "Inference About Character",
        instruction:
          "Read the clue. Write an inference about the character's personality — not just their feelings in the moment, but what kind of person they are.\n\nCLUE: 'Every morning, Ben arrived ten minutes early and organised the equipment before anyone else got there. He noticed when someone forgot their lunch and quietly shared his own. He never mentioned it afterwards.'",
        prompts: [
          { text: "What kind of person is Ben? Use at least two text clues to support your inference.", type: "lines", lines: 4 },
          { text: "What can you infer about how Ben feels about being noticed for his kindness? Why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Does the Evidence Support the Inference?",
        instruction:
          "Read the inference and the evidence. Circle YES if the evidence supports the inference or NO if it doesn't.",
        questions: [
          {
            prompt: "Inference: 'She was happy.' Evidence: 'Her shoulders slumped as she left the room.'",
            options: ["YES — evidence supports it", "NO — evidence does not support it"],
          },
          {
            prompt: "Inference: 'He was nervous.' Evidence: 'He kept checking his watch and couldn't sit still.'",
            options: ["YES — evidence supports it", "NO — evidence does not support it"],
          },
          {
            prompt: "Inference: 'The room was messy.' Evidence: 'Papers were scattered everywhere and the bin was overflowing.'",
            options: ["YES — evidence supports it", "NO — evidence does not support it"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Three Strong Inferences",
        instruction:
          "Read this passage. Write three strong inferences using the sentence frame. Include the exact text clue for each.\n\nPASSAGE: 'The old woman stood at the bus stop long after the last bus had gone. Her shopping bags sat at her feet, untouched. She looked at the empty road, then at the piece of paper in her hand, and slowly shook her head.'",
        prompts: [
          { text: "Inference 1: I can infer ___ because the text says '___'.", type: "lines", lines: 2 },
          { text: "Inference 2: I can infer ___ because the text says '___'.", type: "lines", lines: 2 },
          { text: "Inference 3: I can infer ___ because the text says '___'.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Inference in Everyday Life",
        instruction:
          "Inference is not just for reading — we do it every day! Practise making inferences in real life this week.",
        parentTip: "Turn everyday moments into inference practice: 'Why do you think the neighbour's lights have been on all night?' 'What can we infer from the clouds about today's weather?'",
        suggestions: [
          "Look at someone at the shops — what can you infer about their day without talking to them?",
          "Watch a news broadcast — what can you infer that is not explicitly said?",
          "Make a prediction about a TV show or book before it ends — then check it",
          "Write one inference you made in real life today and explain the clues that helped you",
          "Share your inference at dinner and see if the family agrees",
        ],
      },

      // ── DEVELOPING (21–50) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Inference About Setting",
        instruction:
          "Read the clues below and write inferences about where and when the scene is set.\n\nCLUES: 'The air tasted of salt. Gulls cried above. She could hear the rhythmic crash and pull of water somewhere ahead. The sand between her toes was still warm from the afternoon sun.'",
        prompts: [
          { text: "Where is this scene set? What text clues tell you?", type: "lines", lines: 3 },
          { text: "What time of day is it? What clue suggests this?", type: "lines", lines: 2 },
          { text: "What season might it be? What clue suggests this?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Character Feeling or Character Trait?",
        instruction:
          "An inference about feeling tells us how someone feels right now. An inference about trait tells us what kind of person they usually are. Sort these inferences.",
        parentTip: "Traits are consistent — they tell us about personality. Feelings are temporary.",
        columns: ["Inference about feeling (temporary)", "Inference about trait (personality)"],
        items: [
          { label: "She is nervous about the test." },
          { label: "He is always generous with others." },
          { label: "She is relieved the day is over." },
          { label: "He is a determined and persistent person." },
          { label: "He is excited about the birthday." },
          { label: "She is kind and empathetic by nature." },
        ],
      },
      {
        type: "open-response",
        title: "Multi-Sentence Inference",
        instruction:
          "Sometimes you need to combine TWO or more clues to make one inference. Read the clues and write an inference that uses BOTH.\n\nCLUES: 'She had not eaten since breakfast. The clock showed 7pm.'",
        prompts: [
          { text: "Inference using both clues: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "New clues: 'The trophy was placed on the shelf. He didn't look at it.'\nInference using both clues: ___  Evidence: ___", type: "lines", lines: 3 },
          { text: "New clues: 'The tent was soaking. Mud covered the path. The kids laughed as they wrung out their socks.'\nInference: ___  Evidence: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inference or Speculation?",
        instruction:
          "An inference is based on text evidence. Speculation is guessing without evidence. Circle which each statement is.",
        questions: [
          {
            prompt: "Text: 'He wore a white coat and carried a stethoscope.' — Inference: 'He is a doctor.'",
            options: ["Inference (backed by evidence)", "Speculation (no evidence)"],
          },
          {
            prompt: "Text: 'She walked quickly down the street.' — Inference: 'She is going to meet a secret spy.'",
            options: ["Inference (backed by evidence)", "Speculation (no evidence)"],
          },
          {
            prompt: "Text: 'The shelves were completely empty.' — Inference: 'Someone bought everything recently OR there is a shortage.'",
            options: ["Inference (backed by evidence)", "Speculation (no evidence)"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Read and Infer: A New Passage",
        instruction:
          "Read the passage. Write four inferences with evidence.\n\nPASSAGE: 'The classroom was unusually quiet. Half the desks were empty. The teacher sat at the front without speaking, correcting papers with a red pen. Through the window, the sun blazed outside. In the corridor, a group of children ran past, laughing and calling to each other.'",
        prompts: [
          { text: "Inference 1: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 2: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 3: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 4: I can infer ___ because ___.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match Inference to the Type of Clue",
        instruction:
          "Draw a line to match each inference to the type of text clue that leads to it.",
        left: [
          "She is a doctor.",
          "It is wintertime.",
          "He is worried.",
          "They have been arguing.",
          "She is new to the job.",
        ],
        right: [
          "Clue about behaviour (he kept biting his nails and checking the door)",
          "Clue about objects/clothing (white coat, stethoscope)",
          "Clue about setting/weather (frost on the windows, coats and scarves)",
          "Clue about relationships (they turned away from each other when the teacher entered)",
          "Clue about actions (she asked twice where the supplies were kept)",
        ],
      },
      {
        type: "open-response",
        title: "Inference in Informational Text",
        instruction:
          "Inference is important in non-fiction too! Read the passage and answer the questions.\n\nPASSAGE: 'In 2019, plastic production reached an all-time high of over 400 million tonnes. Yet recycling rates remain below 10% globally. Scientists have found microplastics in locations as remote as the deepest ocean trenches and the peak of Mount Everest.'",
        prompts: [
          { text: "What can you infer about the current state of plastic pollution, beyond what is directly stated?", type: "lines", lines: 3 },
          { text: "What can you infer about how effective current recycling systems are? What clue tells you?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Type of Inference",
        instruction:
          "Inferences can be about feelings, setting, character traits, events, or relationships. Sort these inferences.",
        parentTip: "Being precise about the TYPE of inference helps readers think more carefully about what the text is showing.",
        columns: ["Feeling", "Setting/time", "Character trait", "Relationship"],
        items: [
          { label: "She is proud of her work." },
          { label: "The scene is set in winter." },
          { label: "He is a generous person." },
          { label: "They are close friends." },
          { label: "He is frightened." },
          { label: "It is late at night." },
          { label: "She is determined." },
          { label: "They have known each other a long time." },
        ],
      },
      {
        type: "open-response",
        title: "Write an Inference Paragraph",
        instruction:
          "Choose one of the passages from this worksheet. Write a paragraph (4–5 sentences) explaining 3 inferences you made. Each inference must include the text evidence.",
        prompts: [
          { text: "Passage I chose: ___", type: "lines", lines: 1 },
          { text: "My inference paragraph:", type: "lines", lines: 7 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Answer Is the Best Inference?",
        instruction:
          "Read each text extract and circle the best inference.",
        questions: [
          {
            prompt: "Text: 'She gripped the handrail tightly as she stepped onto the stage. The lights were very bright.'",
            options: [
              "She is very confident.",
              "She is nervous about performing in front of an audience.",
              "She is blind.",
            ],
          },
          {
            prompt: "Text: 'The shelves in the pantry were bare. She checked her purse and closed it again without taking anything out.'",
            options: [
              "She doesn't like food.",
              "There is no food and she may not have enough money to buy more.",
              "She is planning a diet.",
            ],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Different Types of Text, Different Inferences",
        instruction:
          "Inference works differently in different texts. In fiction, we infer character feelings and motivation. In non-fiction, we infer meaning, implications and what is not said. Practise both types this week!",
        suggestions: [
          "Make one inference from your current fiction reading (character or feeling)",
          "Make one inference from a non-fiction article (meaning or implication)",
          "Write both inferences with their evidence in your notebook",
          "Discuss: which type of inference was harder? Why?",
        ],
      },
      {
        type: "open-response",
        title: "Write a 'Clue Sentence' for a Partner to Infer",
        instruction:
          "Write 3 sentences full of clues that allow a reader to infer something WITHOUT you stating it directly. Think of a scene, a feeling, a place or an event you want the reader to figure out.",
        prompts: [
          { text: "Scene/feeling you want the reader to infer: ___", type: "lines", lines: 1 },
          { text: "Your 3 clue sentences:", type: "lines", lines: 4 },
          { text: "Share with someone at home — what did they infer?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Better or Weaker Evidence?",
        instruction:
          "Sort these text clues by how strongly they support the inference 'The character is frightened.'",
        parentTip: "Stronger evidence is more directly linked to fear. Weaker evidence is possible but less certain.",
        columns: ["Strong evidence for fear", "Weaker / less certain evidence"],
        items: [
          { label: "Her hands were trembling." },
          { label: "She walked slowly." },
          { label: "He backed away from the door." },
          { label: "She looked out the window." },
          { label: "Her heart pounded loudly." },
          { label: "He sat down." },
          { label: "She couldn't speak." },
          { label: "He checked the time." },
        ],
      },
      {
        type: "open-response",
        title: "Inference Chain",
        instruction:
          "Sometimes one inference leads to another. Read the passage and make an inference chain — each inference leads to the next.\n\nPASSAGE: 'The note on the door said: DO NOT ENTER. The lights inside were off. A padlock hung on the door. Weeds grew across the front path.'",
        prompts: [
          { text: "Inference 1 (from 'DO NOT ENTER' and padlock): ___", type: "lines", lines: 2 },
          { text: "Inference 2 (based on inference 1 and the weeds): ___", type: "lines", lines: 2 },
          { text: "Inference 3 (what might have happened here?): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Inference Theatre",
        instruction:
          "Play Inference Theatre with your family! One person describes a scene with clues — no emotions or direct statements — and others infer what is happening.",
        parentTip: "Take turns being the scene-setter and the inference-maker. The more subtle and complex the clues, the more interesting the discussion.",
        suggestions: [
          "Take turns describing a scene with clues only (no direct statements)",
          "The audience must infer: where, when, who, what feeling",
          "The audience must justify their inference with the clues given",
          "After 3 rounds, write your best inference using the sentence frame",
          "Reflect: what makes a good clue? What makes a bad one?",
        ],
      },

      // ── CONSOLIDATING (51–80) ─────────────────────────────────────
      {
        type: "open-response",
        title: "Inference About Author's Purpose",
        instruction:
          "Authors make choices about what to tell and what to leave for readers to infer. Read the passage and explain what the author is implying — and why they might have left it unsaid.\n\nPASSAGE: 'The town had changed. Or perhaps it was just him. He walked past the house where he grew up, now painted a colour he didn't recognise. He paused at the gate, then kept walking.'",
        prompts: [
          { text: "What is the author implying about the character's feelings?", type: "lines", lines: 3 },
          { text: "Why do you think the author chose to show rather than state these feelings?", type: "lines", lines: 3 },
          { text: "What does 'perhaps it was just him' imply?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: What Kind of Evidence?",
        instruction:
          "Authors use different types of clues. Sort each clue by the type of evidence it is.",
        parentTip: "Good readers notice what TYPE of clue an author uses — action, description, dialogue, or contrast.",
        columns: ["Action clue", "Description clue", "Dialogue clue", "Contrast clue"],
        items: [
          { label: "She slammed the door." },
          { label: "The room was dark, damp and smelled of mould." },
          { label: "'I'm fine,' she said, not looking up." },
          { label: "Outside, children laughed. Inside, she sat alone." },
          { label: "He ran his hand over the worn surface." },
          { label: "The walls were covered in faded photographs." },
          { label: "'Of course I remember,' he said, though his eyes said otherwise." },
          { label: "The new building gleamed. Next to it, the old shop leaned sideways." },
        ],
      },
      {
        type: "open-response",
        title: "Inference Comparison: Two Passages",
        instruction:
          "Read both passages. Make two inferences about each passage, then compare what type of clues each author uses.\n\nPASSAGE A: 'The office was neat and ordered. Every pencil was sharpened. Every paper was stacked. The waste bin was empty.'\n\nPASSAGE B: 'Papers spilled off every surface. Three coffee cups sat half-finished. A Post-it note that said URGENT!! had fallen to the floor unnoticed.'",
        prompts: [
          { text: "Inference about Passage A: ___", type: "lines", lines: 2 },
          { text: "Inference about Passage B: ___", type: "lines", lines: 2 },
          { text: "What type of clues does each author mainly use?", type: "lines", lines: 2 },
          { text: "What inferences can you make about the two characters based on their workspaces?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Infer the Author's Technique",
        instruction:
          "For each passage, circle how the author is creating meaning without stating it directly.",
        questions: [
          {
            prompt: "'He said nothing. He didn't need to.'",
            options: ["Through action", "Through contrast", "Through the character's silence and restraint"],
          },
          {
            prompt: "'Outside, the party continued. Inside, she stared at the unopened invitation.'",
            options: ["Through contrast between inside and outside", "Through a direct statement", "Through a description of the party"],
          },
          {
            prompt: "'She smiled. It did not reach her eyes.'",
            options: ["Through a contrast between visible and felt", "Through hyperbole", "Through an action clue"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Extended Inference: A Full Passage",
        instruction:
          "Read this passage carefully. Make 5 inferences, each supported by specific text evidence.\n\nPASSAGE: 'The stadium was almost full — every seat taken except the front row. A small girl in a red scarf sat alone there, watching the empty field. She held a sign that said GO DAD! in large, careful letters. The match had been over for an hour. Around her, staff cleaned the aisles and folded the plastic seats. She didn't move.'",
        prompts: [
          { text: "Inference 1: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 2: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 3: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 4: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 5: I can infer ___ because ___.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Inference Passage",
        instruction:
          "Write a short passage (5–6 sentences) where the reader can infer: 1) where the scene is, 2) what time of day or year it is, and 3) how the main character is feeling. Do NOT state any of these directly — show them through clues only.",
        prompts: [
          { text: "Setting I want the reader to infer: ___", type: "lines", lines: 1 },
          { text: "Time I want inferred: ___", type: "lines", lines: 1 },
          { text: "Feeling I want inferred: ___", type: "lines", lines: 1 },
          { text: "My passage (clues only — no direct statements):", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Match: Technique to Example",
        instruction:
          "Draw a line to match each inferencing technique to an example that uses it.",
        left: [
          "Showing not telling (action)",
          "Contrast",
          "Revealing dialogue",
          "Objects as clues",
          "Omission (what is left out)",
        ],
        right: [
          "She gripped the armrest. Her knuckles turned white.",
          "The award sat on the shelf facing the wall.",
          "He said he was fine. He then asked for a moment alone.",
          "They laughed and joked. She sat very still and said nothing.",
          "We never learn the character's name — they remain 'the stranger'.",
        ],
      },
      {
        type: "open-response",
        title: "Reading Between the Lines in Poetry",
        instruction:
          "Read this short poem and write three inferences about the speaker's situation or feelings.\n\nPOEM:\nI fold the letter\nand put it in the drawer.\nThe drawer I never open.\nThe sun is very bright today.",
        prompts: [
          { text: "Inference 1 (about the speaker's feelings): I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 2 (about the letter): I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "Inference 3 (why mention the sun?): I can infer ___ because ___.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Inference Grows With Practice",
        instruction:
          "Inference is a skill that gets better the more you read and the more you talk about what you read. The best readers ask 'why' about everything. Every time you read this week, stop at least once on every page and ask: what is the author NOT telling me directly? What am I supposed to figure out?",
        suggestions: [
          "Read any text and stop once per page to make an inference",
          "Write one inference per chapter in a reading journal",
          "Discuss your inferences with a parent or sibling — do they agree?",
          "Look for a moment in your reading where the author deliberately withholds information",
          "Reflect: what inference were you most proud of this week?",
        ],
      },

      // ── EXTENDING (81–100) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Inference vs Prediction vs Deduction",
        instruction:
          "Inference uses clues to understand the present meaning. Prediction uses clues to guess what will happen next. Deduction uses logic to reach a certain conclusion. Read the passage and write one of each.\n\nPASSAGE: 'The lock was broken. A single muddy footprint led from the window to the safe. The safe door hung open.'",
        prompts: [
          { text: "An inference about what happened: I can infer ___ because ___.", type: "lines", lines: 2 },
          { text: "A prediction about what happens next: I predict ___ because ___.", type: "lines", lines: 2 },
          { text: "A deduction (certain conclusion from logic): I can deduce ___ because ___.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: What the Author Chose to Show vs Tell",
        instruction:
          "In good writing, authors 'show' rather than 'tell'. Sort each example into the correct column.",
        parentTip: "Showing = clues that let the reader infer. Telling = directly stating the information.",
        columns: ["Showing (reader must infer)", "Telling (directly stated)"],
        items: [
          { label: "He was nervous." },
          { label: "His hands shook as he reached for the door handle." },
          { label: "She was excited." },
          { label: "She couldn't stop bouncing on her heels." },
          { label: "The room was frightening." },
          { label: "Shadows pooled in the corners. Every sound seemed amplified." },
          { label: "He was tired." },
          { label: "His eyes kept closing and he had read the same line four times." },
        ],
      },
      {
        type: "open-response",
        title: "Advanced Inference: Unreliable Narrator",
        instruction:
          "Sometimes a character tells us something but the text clues suggest the opposite is true. This is called an unreliable narrator. Read the passage and explain what you infer vs what the character claims.\n\nPASSAGE: 'I was completely calm. Totally fine. I sat down at the table and picked up my fork. I put it down again. Then I picked it up again. My food went cold. I noticed I had been tapping my foot without realising.'",
        prompts: [
          { text: "What does the narrator CLAIM about their state of mind?", type: "lines", lines: 1 },
          { text: "What do the TEXT CLUES suggest is actually true?", type: "lines", lines: 2 },
          { text: "What specific clues contradict the narrator's claim?", type: "lines", lines: 2 },
          { text: "Why might an author write a character who is unreliable?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Inference Across a Whole Text",
        instruction:
          "Think about a book you are currently reading or have recently finished. Identify three inferences you made across the whole book — not just one moment, but inferences about a character's overall arc, the theme, or the author's message.",
        prompts: [
          { text: "Book title: ___", type: "lines", lines: 1 },
          { text: "Inference 1 (about a character): ___  Evidence from the whole book: ___", type: "lines", lines: 3 },
          { text: "Inference 2 (about the theme): ___  Evidence: ___", type: "lines", lines: 3 },
          { text: "Inference 3 (about the author's message): ___  Evidence: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Write a Passage That Requires Inference",
        instruction:
          "Write a passage of 6–8 sentences where the reader must infer all of the following WITHOUT being told: the setting, the time period, the character's job or role, and the character's emotional state. Share it with someone and see what they infer!",
        prompts: [
          { text: "Setting (do NOT name it): ___", type: "lines", lines: 1 },
          { text: "Time period (do NOT state it): ___", type: "lines", lines: 1 },
          { text: "Character's role (do NOT say it): ___", type: "lines", lines: 1 },
          { text: "Emotional state (do NOT name it): ___", type: "lines", lines: 1 },
          { text: "My passage:", type: "lines", lines: 9 },
          { text: "What did your reader infer? Were they right?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Teach the Skill: How to Make an Inference",
        instruction:
          "Design a simple guide to inference for a Year 2 reader. Include: what inference is, how to do it, the sentence frame to use, and two practice examples.",
        prompts: [
          { text: "What is inference? (in simple words for a Year 2 student): ___", type: "lines", lines: 2 },
          { text: "How to make an inference (step by step): ___", type: "lines", lines: 3 },
          { text: "Sentence frame to use: ___", type: "lines", lines: 1 },
          { text: "Practice example 1 (clue + inference): ___", type: "lines", lines: 2 },
          { text: "Practice example 2 (clue + inference): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: My Inference Skills",
        instruction:
          "Reflect on your inference learning. Answer honestly — this helps you know what to practise next.",
        prompts: [
          { text: "What does it mean to make an inference?", type: "lines", lines: 2 },
          { text: "What is the difference between an inference and a direct statement?", type: "lines", lines: 2 },
          { text: "What do I find easy about inference?", type: "lines", lines: 2 },
          { text: "What do I still find challenging?", type: "lines", lines: 2 },
          { text: "One goal for my inference skills: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Inference in Film",
        instruction:
          "Watch any film or TV episode with the sound OFF for the first 5 minutes. Write down everything you can infer from what you SEE — character feelings, setting, relationships, events.",
        parentTip: "This dramatic exercise demonstrates how much meaning is communicated without words — and mirrors what authors do with 'showing not telling'. Discuss your inferences after turning the sound back on.",
        suggestions: [
          "Watch 5 minutes without sound",
          "Write 5 inferences from what you saw",
          "Turn the sound on and check your inferences",
          "Which were correct? Which were off? Why?",
          "Write a reflection: what was surprising about inferring from images alone?",
        ],
      },
      {
        type: "circle-correct",
        title: "Inference or Literal? Identify the Reading Strategy",
        instruction: "Circle whether each answer requires an INFERENCE or is LITERAL (directly stated in the text).",
        parentTip: "Learning to distinguish literal from inferential questions is a foundation comprehension skill.",
        questions: [
          { prompt: "The text says: 'The storm was fierce.' Q: Was the weather bad?", options: ["literal", "inference"] },
          { prompt: "The text says: 'She slammed the door.' Q: Was she upset?", options: ["literal", "inference"] },
          { prompt: "The text says: 'He was born in 1990.' Q: How old is he now?", options: ["literal", "inference"] },
          { prompt: "The text says: 'Snow fell heavily.' Q: Was it winter?", options: ["literal", "inference"] },
          { prompt: "The text says: 'The cat meowed at the empty bowl.' Q: Was the cat hungry?", options: ["literal", "inference"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Strong Inference or Weak Inference?",
        instruction: "A strong inference is clearly supported by text clues. A weak inference has little or no support. Sort these.",
        columns: ["Strong inference", "Weak inference"],
        items: [
          { label: "She was crying, so she must be sad." },
          { label: "He wore blue, so he must love swimming." },
          { label: "It was dark outside when they arrived home." },
          { label: "The dog barked at the door — someone must be outside." },
          { label: "She ate cake, so it must be her birthday." },
          { label: "He was shivering, so it must be cold." },
          { label: "The room was quiet — everyone must be asleep." },
          { label: "She had a pencil, so she must be good at art." },
        ],
      },
      {
        type: "matching",
        title: "Match: Text Clue to the Correct Inference",
        instruction: "Draw a line from each text clue to the inference it supports.",
        left: [
          "He gripped the edge of the seat, heart pounding.",
          "She hadn't eaten since morning.",
          "The trophy was dusty and cobwebbed.",
          "He kept checking his phone every few minutes.",
          "The house lights were all off.",
        ],
        right: [
          "He was nervous or scared.",
          "She was very hungry.",
          "It hadn't been used for a long time.",
          "He was waiting for a message.",
          "No one was home.",
        ],
      },
      {
        type: "open-response",
        title: "Read and Infer: The Empty Seat",
        instruction:
          "Read this: 'Every morning, Luca sat alone at the bus stop bench. He stared at his shoes. When the bus came, he took the very last seat.' Write 3 inferences about Luca and the text evidence for each.",
        parentTip: "Encourage your child to connect to the text evidence — 'I can infer ___ because the text says ___.'",
        prompts: [
          { text: "Inference 1: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference 2: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference 3: ___  Evidence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Inference is Best Supported?",
        instruction: "Read each text extract and circle the inference that is BEST supported by the text.",
        questions: [
          {
            prompt: "Text: 'She pushed the food around her plate and stared out the window.' Best inference:",
            options: ["She wasn't hungry or was distracted.", "She hated the cook.", "The food was poisoned."],
          },
          {
            prompt: "Text: 'He arrived early every day, always with his pencil case ready.' Best inference:",
            options: ["He was disorganised.", "He was enthusiastic and prepared.", "He had no friends."],
          },
          {
            prompt: "Text: 'The shop had a 'Closed' sign, but the lights were still on.' Best inference:",
            options: ["Someone was still inside.", "The electricity was broken.", "It was always closed."],
          },
        ],
      },
      {
        type: "sequence",
        title: "Order: Steps for Making a Good Inference",
        instruction: "Put these steps for making an inference in the correct order.",
        items: [
          { label: "Read the text carefully" },
          { label: "Look for clues — things the author shows but doesn't tell" },
          { label: "Think about what you already know (background knowledge)" },
          { label: "Combine clues + background knowledge to form an inference" },
          { label: "Find the text evidence that supports your inference" },
          { label: "Write your inference using: 'I can infer ___ because ___'" },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Inference Passage",
        instruction:
          "Write a short paragraph (4–5 sentences) that SHOWS something about a character without ever TELLING the reader directly. Then write the intended inference at the bottom.",
        parentTip: "This 'show don't tell' writing task reverses the comprehension task — it's a powerful way to understand how inference works.",
        prompts: [
          { text: "My passage:", type: "lines", lines: 5 },
          { text: "The inference I intended readers to make: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: What Can I Infer About the Character?",
        instruction: "Read each description and sort it into what you can DEFINITELY infer vs what you can ONLY GUESS.",
        columns: ["Supported inference", "Unsupported guess"],
        items: [
          { label: "She trained for 2 hours every day — she is dedicated." },
          { label: "She trained for 2 hours every day — she must be the best in the world." },
          { label: "He wore a white coat and carried a clipboard — he works in a hospital." },
          { label: "He wore a white coat and carried a clipboard — he is a famous scientist." },
          { label: "They laughed loudly — they were enjoying themselves." },
          { label: "They laughed loudly — they were laughing at someone." },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: The Inference Equation",
        instruction:
          "Teach your child this formula: Text Clue + Background Knowledge = Inference. Practice applying it to everyday situations: a wet pavement, a quiet classroom, an empty shop.",
        suggestions: [
          "Spot a situation and identify the text clue (what you see/read)",
          "Add what you already know about that situation",
          "Form your inference",
          "Check: is there any other explanation?",
          "Discuss: is your inference strong or weak?",
        ],
      },
      {
        type: "matching",
        title: "Match: Background Knowledge to Text Clue",
        instruction: "Draw a line from each text clue to the background knowledge that makes the inference possible.",
        left: [
          "She wore a crown and long dress.",
          "He pressed the stethoscope to the patient's chest.",
          "The crowd roared as the goal went in.",
          "She opened the oven and smiled at the golden cake.",
          "The bell rang and students poured out.",
        ],
        right: [
          "Schools have recess or end-of-day bells",
          "Doctors use stethoscopes",
          "Goals in sport make crowds cheer",
          "Cakes are baked in ovens",
          "Queens and princesses wear crowns",
        ],
      },
      {
        type: "open-response",
        title: "Inference Journal: Three Days of Inferring",
        instruction:
          "Over three days, write one inference from your reading each day. For each: write the text evidence, your background knowledge, and your inference.",
        prompts: [
          { text: "Day 1 — Book/source: ___  Evidence: ___  Knowledge: ___  Inference: ___", type: "lines", lines: 3 },
          { text: "Day 2 — Book/source: ___  Evidence: ___  Knowledge: ___  Inference: ___", type: "lines", lines: 3 },
          { text: "Day 3 — Book/source: ___  Evidence: ___  Knowledge: ___  Inference: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inference About Mood: What is the Character Feeling?",
        instruction: "Read each sentence and circle the mood the author is SHOWING (not telling).",
        questions: [
          {
            prompt: "'She hugged her knees to her chest and stared at the ceiling.'",
            options: ["happy", "anxious or upset", "excited"],
          },
          {
            prompt: "'He bounced on his heels, grinning at everyone who walked past.'",
            options: ["bored", "nervous", "excited"],
          },
          {
            prompt: "'She folded her arms and turned away without a word.'",
            options: ["joyful", "angry or hurt", "confused"],
          },
          {
            prompt: "'He kept pausing and biting his lip before he spoke.'",
            options: ["confident", "nervous or unsure", "angry"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Inference Questions by Difficulty",
        instruction: "Sort these inference questions into EASY (close reading), MEDIUM (requires knowledge), or HARD (complex reasoning).",
        columns: ["Easy", "Medium", "Hard"],
        items: [
          { label: "What time of day was it? (The stars were out.)" },
          { label: "What country does the character come from? (Indirect clues only.)" },
          { label: "How does the character feel? (She frowned.)" },
          { label: "What will happen next? (Complex foreshadowing.)" },
          { label: "Why is the character nervous? (Subtle behaviour clues.)" },
          { label: "Is the weather cold? (He wore a coat.)" },
        ],
      },
      {
        type: "open-response",
        title: "Inference Practice: The Letter",
        instruction:
          "Read this: 'He read the letter three times. His hands trembled. He folded it carefully and placed it in the drawer, then sat very still for a long time.' Write your inferences about what happened and what he's feeling.",
        parentTip: "There's no single right answer here. Praise any inference that is supported by text evidence.",
        prompts: [
          { text: "What I think the letter said: ___", type: "lines", lines: 2 },
          { text: "What I think the character is feeling: ___", type: "lines", lines: 2 },
          { text: "Evidence in the text for my inferences: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Inference Starter Phrase to Complete Sentence",
        instruction: "Draw a line from each inference starter to the ending that makes the best inference.",
        left: [
          "I can infer that she is nervous because...",
          "The author suggests that he is lonely because...",
          "Based on the clues, I think it is winter because...",
          "The setting is probably a hospital because...",
          "The character is hiding something because...",
        ],
        right: [
          "...there are white coats and beeping machines.",
          "...she keeps looking away and twisting her hands.",
          "...the text says snow is falling and everyone is wrapped in coats.",
          "...he always sits alone and eats his lunch quickly.",
          "...she avoids answering questions about where she was.",
        ],
      },
      {
        type: "open-response",
        title: "Compare: Two Inferences About the Same Text",
        instruction:
          "Read this: 'Maya arrived late again. She sat at the back and kept her eyes down all lesson.' Write two DIFFERENT possible inferences. Evaluate: which is stronger and why?",
        prompts: [
          { text: "Inference A: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference B: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Which is stronger and why: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Inference Challenge: Picture Books",
        instruction:
          "Choose a picture book and cover the text. Look at only the pictures and make 5 inferences about what is happening. Then read the text and see how accurate your inferences were.",
        parentTip: "Picture books are excellent for inference because the illustrations often contain more information than the words. This is a great family activity.",
        suggestions: [
          "Choose any picture book",
          "Cover the words and look at only the pictures",
          "Make 5 inferences about what is happening",
          "Now read the words — how accurate were you?",
          "Which picture gave the most clues? Which was hardest to read?",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Character Clues to Feelings",
        instruction: "Sort these character descriptions into the feeling they most strongly suggest.",
        columns: ["Happiness / Joy", "Fear / Anxiety", "Sadness / Loneliness"],
        items: [
          { label: "She skipped down the path, humming softly." },
          { label: "He hid under the bed when he heard the noise." },
          { label: "She sat alone by the window, watching others play." },
          { label: "They cheered and hugged each other." },
          { label: "His voice cracked as he spoke — he turned away." },
          { label: "She kept looking over her shoulder." },
          { label: "He laughed so hard he had to hold his stomach." },
          { label: "She didn't reply to any messages all day." },
          { label: "He jumped at every small sound." },
        ],
      },
      {
        type: "open-response",
        title: "Inference in Non-Fiction: Reading Between the Statistics",
        instruction:
          "Look at this data: 'In the school survey, 8 out of 10 students said they felt tired during afternoon lessons.' Write 3 inferences you can make from this statistic.",
        prompts: [
          { text: "Inference 1: ___", type: "lines", lines: 2 },
          { text: "Inference 2: ___", type: "lines", lines: 2 },
          { text: "Inference 3: ___", type: "lines", lines: 2 },
          { text: "What extra information would you need to be more certain? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inference from Dialogue: What is Unsaid?",
        instruction: "Read each dialogue excerpt and circle the best inference about the relationship between the characters.",
        questions: [
          {
            prompt: "'Are you sure about this?' she said quietly. 'No,' he admitted. 'But let's go anyway.'",
            options: ["They are confident", "They are anxious but determined", "They are angry with each other"],
          },
          {
            prompt: "'You always do this,' she said, sighing. 'I know,' he said, not looking up.",
            options: ["This is the first time this has happened", "This is a recurring argument", "They are just meeting"],
          },
          {
            prompt: "'I thought you weren't coming,' she said, smiling broadly as he walked in.",
            options: ["She was disappointed to see him", "She was relieved and happy to see him", "She was angry"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Order: Planning an Inference Answer in a Test",
        instruction: "Put these steps in order for writing a strong inference answer in a reading test.",
        items: [
          { label: "Read the question carefully — what does it ask you to infer?" },
          { label: "Reread the relevant section of text" },
          { label: "Identify the clues in the text" },
          { label: "Connect the clues to your background knowledge" },
          { label: "Write your inference: 'I can infer that ___ because the text says ___'" },
          { label: "Check: is your inference supported by evidence?" },
        ],
      },
      {
        type: "open-response",
        title: "Inference Across a Whole Story",
        instruction:
          "Think of a book you have recently read. Choose one thing the author showed you (never told you directly) about a character, event, or theme. Write the text clue and your inference.",
        prompts: [
          { text: "Book title: ___", type: "lines", lines: 1 },
          { text: "What the author showed (but didn't tell): ___", type: "lines", lines: 2 },
          { text: "My inference: ___", type: "lines", lines: 2 },
          { text: "Text evidence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Inference in Everyday Life",
        instruction:
          "Practise inferring outside of books! Look for clues in the world around you — a wet umbrella, a cold cup of tea, a messy room — and make inferences about what they tell you.",
        parentTip: "Connecting inference to real life shows children that this is a thinking skill, not just a reading task.",
        suggestions: [
          "Spot a clue in your home or street (wet pavement, lights on, open window)",
          "Make an inference about what it means",
          "Find more evidence to support or challenge your inference",
          "Share your inference with a family member",
          "Reflect: how confident are you? What would make you more certain?",
        ],
      },
      {
        type: "open-response",
        title: "Write an Inference About the Author's Purpose",
        instruction:
          "Choose any text you have read recently. Write an inference about WHY the author wrote it and what they wanted the reader to think or feel.",
        prompts: [
          { text: "Text title and type (story, article, poem): ___", type: "lines", lines: 1 },
          { text: "My inference about the author's purpose: ___", type: "lines", lines: 2 },
          { text: "Text evidence that supports my inference: ___", type: "lines", lines: 2 },
          { text: "How confident am I? Why? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Type of Inference to Example",
        instruction: "Draw a line from each type of inference to the example that matches it.",
        left: [
          "Inference about character feeling",
          "Inference about setting",
          "Inference about time",
          "Inference about theme",
          "Inference about what happens next",
        ],
        right: [
          "The sun had set hours ago — it must be very late.",
          "He slammed his fist on the table — he was furious.",
          "The moss grew thick on the rocks near the waterfall.",
          "Based on all the clues, she will probably return to help him.",
          "The story keeps showing that kindness matters more than power.",
        ],
      },
      {
        type: "open-response",
        title: "Inference Reflection and Goal",
        instruction:
          "Reflect on your inference skills. Write what you have improved at and set a goal for your next reading.",
        prompts: [
          { text: "One inference skill I have improved at: ___", type: "lines", lines: 2 },
          { text: "A type of inference I still find tricky: ___", type: "lines", lines: 2 },
          { text: "My reading goal: When I read, I will try to ___ more often.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inference About Author's Word Choice",
        instruction: "Authors choose words carefully to make readers infer things. Circle what each word choice makes you infer.",
        questions: [
          {
            prompt: "The author says 'She crept' instead of 'She walked'.",
            options: ["She was in a hurry", "She was trying not to be heard", "She was dancing"],
          },
          {
            prompt: "The author says 'His tiny, cluttered flat' instead of 'His home'.",
            options: ["He was very wealthy", "He had little space and many things", "He loved being tidy"],
          },
          {
            prompt: "The author says 'The ancient, crumbling building' instead of 'The building'.",
            options: ["It was modern and new", "It was very old and poorly maintained", "It was beautiful"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Inference Interview",
        instruction:
          "Conduct an 'inference interview' with a family member. Read them a paragraph from a book. Ask: 'What can you infer from this? What clues support that?' Then explain your own inference and compare.",
        parentTip: "Family discussion about reading inferences is extremely powerful — children learn to articulate their thinking by hearing others do the same.",
        suggestions: [
          "Choose an interesting paragraph from any book",
          "Read it aloud to a family member",
          "Ask: what can you infer? What are the clues?",
          "Share your own inference",
          "Discuss: did you make the same inference? Why or why not?",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Inference or Fact?",
        instruction: "Sort these statements about a passage into FACT (directly stated) or INFERENCE (concluded from clues).",
        columns: ["Fact (directly stated)", "Inference (concluded)"],
        items: [
          { label: "The story is set in winter." },
          { label: "The character wore a heavy coat and scarf." },
          { label: "The character was cold." },
          { label: "The character was lonely." },
          { label: "The character sat alone at lunch." },
          { label: "The character felt embarrassed." },
          { label: "The character's face turned red." },
          { label: "It was a small town." },
        ],
      },
      {
        type: "open-response",
        title: "Write: Make a Reader Infer Something",
        instruction:
          "Your challenge: write 4–5 sentences that make a reader infer that a character is frightened — WITHOUT using the words 'scared', 'frightened', 'afraid' or 'terrified'. Show, don't tell.",
        parentTip: "This 'show don't tell' task is the highest-level application of inference knowledge. There's no single right answer.",
        prompts: [
          { text: "My 'frightened without saying so' passage:", type: "lines", lines: 5 },
          { text: "Techniques I used to show fear: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Spark: Inference in Picture Books — Analysis",
        instruction:
          "Choose a picture book that has no words (or very few). Write 5 detailed inferences from the illustrations. Explain each clue clearly.",
        parentTip: "Wordless picture books are outstanding for inference — every detail in the illustration is a deliberate clue. Recommended: The Red Tree by Shaun Tan, Flotsam by David Wiesner.",
        prompts: [
          { text: "Book title: ___", type: "lines", lines: 1 },
          { text: "Inference 1: ___  Clue: ___", type: "lines", lines: 2 },
          { text: "Inference 2: ___  Clue: ___", type: "lines", lines: 2 },
          { text: "Inference 3: ___  Clue: ___", type: "lines", lines: 2 },
          { text: "Inference 4 and 5: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inference: Which Clue is Most Relevant?",
        instruction: "Circle the text clue that BEST supports each inference.",
        questions: [
          {
            prompt: "Inference: The character is wealthy. Which is the strongest clue?",
            options: ["He wore clean clothes.", "He arrived in a chauffeur-driven car and wore a gold watch.", "He smiled at people."],
          },
          {
            prompt: "Inference: The character is exhausted. Best clue?",
            options: ["She sat down.", "She dragged her feet and her eyes kept closing.", "She was quiet."],
          },
          {
            prompt: "Inference: The setting is a hospital. Best clue?",
            options: ["The building was large.", "There were white coats, beeping monitors, and the smell of antiseptic.", "There were many people."],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Inference Clue Types",
        instruction: "Sort these text clues by the type of inference they help you make.",
        columns: ["Character feeling", "Setting", "Time period"],
        items: [
          { label: "She wiped her eyes and looked away." },
          { label: "There were no cars, only horses and carts." },
          { label: "Tall ferns and a silver waterfall filled the valley." },
          { label: "He grinned so widely his cheeks ached." },
          { label: "Women wore long dresses and men carried top hats." },
          { label: "The room smelled of pine and rain." },
          { label: "She twisted her fingers nervously." },
          { label: "The newspaper on the table said 1942." },
          { label: "The library was quiet and cool." },
        ],
      },
      {
        type: "open-response",
        title: "Inference Practice: The Abandoned House",
        instruction:
          "Read this: 'The gate hung open on one hinge. Weeds had swallowed the garden. Windows were dark. On the doorstep, an old milk bottle still waited.' Write 4 inferences about this place and the text evidence for each.",
        prompts: [
          { text: "Inference 1: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference 2: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference 3: ___  Evidence: ___", type: "lines", lines: 2 },
          { text: "Inference 4: ___  Evidence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Inference Strength to Quality of Evidence",
        instruction: "Draw a line to match each inference to how well it is supported.",
        left: [
          "She was crying — she must be upset. (Strong evidence: tears)",
          "He smiled once — he must be the happiest person alive.",
          "The room was cold and dark — it was probably abandoned.",
          "She wore a red jumper — she must love sport.",
          "The dog barked at the door — someone was approaching.",
        ],
        right: [
          "Very strong — direct physical evidence",
          "Strong — logical and well-supported",
          "Moderate — reasonable but not certain",
          "Weak — very little evidence",
          "Very weak — almost no logical connection",
        ],
      },
      {
        type: "open-response",
        title: "Inference Across Texts: Compare Two Passages",
        instruction:
          "Read two sentences: A) 'The classroom was completely silent.' B) 'The classroom was completely silent when the principal walked in.' Write what you can infer from each. How does the extra detail in B change the inference?",
        prompts: [
          { text: "Inference from A: ___", type: "lines", lines: 2 },
          { text: "Inference from B: ___", type: "lines", lines: 2 },
          { text: "How the added detail changes the inference: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: I Can Infer vs I Cannot Infer",
        instruction: "Read this text: 'Mia arrived at school without her bag. Her hair was wet. She looked at the floor when the teacher spoke.' Sort these statements into what you CAN and CANNOT infer.",
        columns: ["I can infer this (supported)", "I cannot infer this (not supported)"],
        items: [
          { label: "Mia was in a hurry this morning." },
          { label: "Mia hates school." },
          { label: "Mia is probably feeling embarrassed." },
          { label: "Mia forgot her bag at home." },
          { label: "Mia's teacher is unkind." },
          { label: "Something went wrong with Mia's morning routine." },
        ],
      },
      {
        type: "home-activity",
        title: "Inference Thinking Partner: Read Together",
        instruction:
          "Read a book together with a family member. Take turns: one person reads a paragraph, the other makes an inference from it and explains the evidence. Then swap.",
        parentTip: "Turn-taking inference conversations are one of the most powerful reading comprehension activities for children. Even 10 minutes makes a difference.",
        suggestions: [
          "Choose a book you are currently reading",
          "Read one paragraph together",
          "Person A: make an inference and state the evidence",
          "Person B: agree, disagree or add a different inference",
          "Swap roles for the next paragraph",
        ],
      },
      {
        type: "open-response",
        title: "Inference Final Mastery: Full Passage Response",
        instruction:
          "Read this: 'Sam didn't speak at breakfast. He left early without saying goodbye. His mother found his lucky stone left on the windowsill.' Write your best response: what do you infer about Sam, and what is the evidence for each inference?",
        prompts: [
          { text: "My inferences about Sam (at least 3): ___", type: "lines", lines: 4 },
          { text: "Text evidence for each: ___", type: "lines", lines: 3 },
          { text: "What I am least certain about and why: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inference in Non-Fiction: Fact or Inference?",
        instruction: "Non-fiction readers also make inferences. Circle whether each statement is a FACT (stated directly) or an INFERENCE (worked out from evidence).",
        questions: [
          { prompt: "The article says deforestation has increased by 40% this decade.", options: ["fact", "inference"] },
          { prompt: "Based on this data, local wildlife populations will be affected.", options: ["fact", "inference"] },
          { prompt: "The survey found 7 out of 10 children prefer outdoor activities.", options: ["fact", "inference"] },
          { prompt: "This suggests that children need more outdoor time in schools.", options: ["fact", "inference"] },
          { prompt: "The temperature dropped to -5°C.", options: ["fact", "inference"] },
          { prompt: "The pipes probably froze that night.", options: ["fact", "inference"] },
        ],
      },
      {
        type: "sequence",
        title: "Order: Writing an Inference Answer for a Reading Test",
        instruction: "Put these steps in the best order for answering an inference question in a test.",
        items: [
          { label: "Read the question — what exactly are you being asked to infer?" },
          { label: "Reread the relevant section of the text" },
          { label: "Find the clue(s) in the text" },
          { label: "Think: what background knowledge do I need?" },
          { label: "Form your inference" },
          { label: "Write your answer: 'I can infer ___ because the text says ___.'" },
          { label: "Read back your answer — is it clearly supported?" },
        ],
      },
      {
        type: "open-response",
        title: "Inference Mastery: Design Your Own Quiz",
        instruction:
          "Write a short paragraph (4–5 sentences) about a character or scene. Then write 3 inference questions for a friend to answer about your paragraph. Include the intended answers.",
        parentTip: "Writing questions requires a deeper understanding of inference than answering them. This is an advanced metacognitive task.",
        prompts: [
          { text: "My paragraph: ___", type: "lines", lines: 5 },
          { text: "Question 1: ___  Answer: ___", type: "lines", lines: 2 },
          { text: "Question 2: ___  Answer: ___", type: "lines", lines: 2 },
          { text: "Question 3: ___  Answer: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Inference Scavenger Hunt in Any Book",
        instruction:
          "Open any book to a random page. Find 3 inferences the author expects readers to make. Write each inference and the text clue. This shows you can infer independently.",
        parentTip: "Independent inference from self-selected text is the ultimate goal of this skill. Celebrate every successful inference your child finds.",
        suggestions: [
          "Open any book to a random page",
          "Read one paragraph carefully",
          "Find 3 inferences the author expects you to make",
          "Write each inference and the clue that supports it",
          "Share your best inference with a family member",
        ],
      },
      {
        type: "open-response",
        title: "Inference Mastery Reflection",
        instruction:
          "Write your final reflection on your inference learning journey. What can you do now that you couldn't do before? What is your next reading goal?",
        prompts: [
          { text: "Before this unit, my reading was: ___", type: "lines", lines: 2 },
          { text: "Now I can: ___", type: "lines", lines: 2 },
          { text: "The most useful strategy I learned: ___", type: "lines", lines: 2 },
          { text: "My next reading goal: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Inference Evidence — Strong to Weak",
        instruction: "Sort these inference justifications from STRONGEST evidence to WEAKEST.",
        columns: ["Strong evidence", "Moderate evidence", "Weak evidence"],
        items: [
          { label: "The text directly says she cried — I infer she's upset." },
          { label: "She was quiet — she might be upset (but maybe just tired)." },
          { label: "She has a red pen — she must be angry." },
          { label: "He shook hands firmly — he seems confident." },
          { label: "She smiled — she could be happy, polite, or hiding something." },
          { label: "He owns a dog — he must love all animals." },
        ],
      },
      {
        type: "open-response",
        title: "Inference: Apply It to Your Current Reading Book",
        instruction:
          "Choose a book you are reading right now. Find one place where the author expects you to make an inference. Write the passage, the inference, and the evidence.",
        parentTip: "Applying inference skills to self-chosen reading is the highest-level transfer of this skill. Any book the child is currently reading will work.",
        prompts: [
          { text: "Book title: ___  Page: ___", type: "lines", lines: 1 },
          { text: "Passage (copy or paraphrase): ___", type: "lines", lines: 2 },
          { text: "My inference: ___", type: "lines", lines: 2 },
          { text: "My evidence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inference: Does the Evidence Support It?",
        instruction: "Circle whether the evidence given DOES or DOES NOT support the inference.",
        questions: [
          {
            prompt: "Inference: She is frightened. Evidence: She hid under the table when she heard the noise.",
            options: ["does support", "does not support"],
          },
          {
            prompt: "Inference: He is wealthy. Evidence: He wore clean shoes.",
            options: ["does support", "does not support"],
          },
          {
            prompt: "Inference: The building is abandoned. Evidence: Windows were broken and weeds grew through the floor.",
            options: ["does support", "does not support"],
          },
          {
            prompt: "Inference: She loves reading. Evidence: She owns one book.",
            options: ["does support", "does not support"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Inference Grand Final: Write, Infer, Reflect",
        instruction:
          "Write a short 5-sentence passage designed to make a reader make a specific inference. Then state the inference you intended. Finally, reflect on how you planted the clues.",
        parentTip: "Designing inference clues requires the deepest understanding of how inference works. This is a genuine challenge for Year 3.",
        prompts: [
          { text: "My passage (designed for inference): ___", type: "lines", lines: 5 },
          { text: "Intended inference: ___", type: "lines", lines: 2 },
          { text: "Clues I planted in the text: ___", type: "lines", lines: 2 },
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
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
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
        type: "matching",
        title: "Match Time Connective to Its Meaning",
        instruction:
          "Draw a line to match each time connective to what it tells the reader.",
        parentTip: "Time connectives are the glue of recounts — they show the reader when each event happened.",
        left: ["First", "Then", "After that", "Finally", "Meanwhile", "Eventually"],
        right: [
          "happening at the same time as something else",
          "the first thing that happened",
          "the last thing that happened",
          "the next thing that happened",
          "after a long time",
          "the thing that happened after that",
        ],
      },
      {
        type: "circle-correct",
        title: "Is This a Recount Feature?",
        instruction:
          "Circle YES if each feature belongs in a recount, or NO if it doesn't.",
        questions: [
          { prompt: "Written in first person (I, we)", options: ["YES", "NO"] },
          { prompt: "Written in future tense (will go, will see)", options: ["YES", "NO"] },
          { prompt: "Uses time connectives (first, then, finally)", options: ["YES", "NO"] },
          { prompt: "Includes a personal reflection at the end", options: ["YES", "NO"] },
          { prompt: "Uses commands (Do this! Go there!)", options: ["YES", "NO"] },
          { prompt: "Retells real events in the order they happened", options: ["YES", "NO"] },
        ],
      },
      {
        type: "open-response",
        title: "Identify Recount Features",
        instruction:
          "Read this short recount. Find and label: the ORIENTATION, the EVENTS, and the REFLECTION.\n\nRECOUNT: 'Last Saturday I went to the beach with my family. First, we set up our towels near the water. Then, I built the biggest sandcastle I have ever made. After that, we all had fish and chips for lunch. It was one of the best days of the holidays.'",
        parentTip: "Read the recount aloud together first, then work through each label.",
        prompts: [
          { text: "ORIENTATION (who, when, where): ___", type: "lines", lines: 2 },
          { text: "EVENT 1: ___", type: "lines", lines: 1 },
          { text: "EVENT 2: ___", type: "lines", lines: 1 },
          { text: "EVENT 3: ___", type: "lines", lines: 1 },
          { text: "REFLECTION: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Recount or Not a Recount?",
        instruction:
          "Sort these text extracts into the correct column.",
        parentTip: "A recount retells real past events, in order, in first person and past tense.",
        columns: ["Recount feature", "Not a recount feature"],
        items: [
          { label: "Yesterday I went to the market." },
          { label: "You will need a spoon and a bowl." },
          { label: "First, we drove to the station." },
          { label: "The sun is hot in summer." },
          { label: "It was the most fun I'd had all year." },
          { label: "Koalas sleep for up to 22 hours." },
          { label: "Then we hiked up to the lookout." },
          { label: "I think you should try harder." },
        ],
      },
      {
        type: "open-response",
        title: "Add Time Connectives",
        instruction:
          "Rewrite this recount adding time connectives (First, Then, Next, After that, Finally) to connect the events.",
        prompts: [
          { text: "Original: 'We got in the car. We drove to the market. We bought vegetables. We came home. We cooked dinner.'\nYour version with time connectives:", type: "lines", lines: 5 },
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
        type: "circle-correct",
        title: "Past Tense or Present Tense?",
        instruction:
          "Recounts use past tense. Circle the past tense version of each verb pair.",
        questions: [
          { prompt: "we ___", options: ["went", "go"] },
          { prompt: "she ___", options: ["is seeing", "saw"] },
          { prompt: "they ___", options: ["run", "ran"] },
          { prompt: "I ___", options: ["felt", "feel"] },
          { prompt: "he ___", options: ["calls", "called"] },
          { prompt: "it ___", options: ["happened", "happens"] },
        ],
      },
      {
        type: "open-response",
        title: "Fix the Tense",
        instruction:
          "This recount has mistakes — some verbs are in the present tense. Find and correct them.",
        parentTip: "Read each sentence aloud — present tense sounds wrong in a story about the past.",
        prompts: [
          { text: "Original: 'Last week I go to the zoo. First we see the lions. Then we walk to the reptile house. Finally we eat ice cream before we go home.'\nCorrected:", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "Match Recount Part to Its Purpose",
        instruction:
          "Draw a line to match each part of a recount to what it does.",
        left: ["Orientation", "Events", "Time connectives", "Reflection"],
        right: [
          "Shows the writer's personal response to what happened",
          "Tells the reader who, where and when",
          "Retells what happened in order",
          "Links the events together in the right order",
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Recounts Use First Person Past Tense",
        instruction:
          "A recount is personal — you are telling YOUR story. Use 'I' and 'we'. And because it happened already, use past tense verbs: went (not go), saw (not see), felt (not feel). Check your writing every time using these two rules: 1) Is it first person? 2) Is it past tense?",
        suggestions: [
          "Read your last recount aloud — are all verbs in past tense?",
          "Find 3 past tense verbs in a recount in a book",
          "Write 5 verbs in present tense and then write their past tense form",
          "Circle every 'I' and 'we' in a recount — this is the first person perspective",
        ],
      },
      {
        type: "sorting",
        title: "Sort Time Connectives by Position in a Recount",
        instruction:
          "Sort these time connectives by where they most naturally appear in a recount.",
        columns: ["Near the start", "In the middle", "Near the end"],
        items: [
          { label: "First" },
          { label: "Then" },
          { label: "Finally" },
          { label: "To begin with" },
          { label: "Next" },
          { label: "At last" },
          { label: "After a while" },
          { label: "Earlier" },
          { label: "Eventually" },
        ],
      },
      {
        type: "open-response",
        title: "Write the Orientation",
        instruction:
          "A good orientation answers: Who? When? Where? Write an orientation for each topic below in 1–2 sentences.",
        prompts: [
          { text: "Topic: a day at the beach.  Orientation: ___", type: "lines", lines: 2 },
          { text: "Topic: a visit to the vet with your pet.  Orientation: ___", type: "lines", lines: 2 },
          { text: "Topic: your first day at a new activity.  Orientation: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write a Reflection",
        instruction:
          "A reflection tells the reader how you felt about the experience — what you thought, felt, or learned. Write a reflection for each event below.",
        parentTip: "Good reflections don't just say 'it was fun' — they explain WHY and what the writer will remember.",
        prompts: [
          { text: "Event: watching a brilliant fireworks display.  Reflection: ___", type: "lines", lines: 2 },
          { text: "Event: losing a chess game to a younger sibling.  Reflection: ___", type: "lines", lines: 2 },
          { text: "Event: finishing a long book.  Reflection: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        tip: true,
        title: "Tip: Select the Best Events",
        instruction:
          "Children often try to include EVERYTHING in a recount: 'Then I woke up. Then I had breakfast. Then I brushed my teeth...' Good recount writers are SELECTIVE — they only include the most interesting or important moments. Ask yourself: if I could only tell THREE things about that day, what would they be?",
        suggestions: [
          "Choose an event you want to recount",
          "List everything that happened",
          "Circle only the 3 most interesting or important moments",
          "Write your recount using only those 3 events",
          "Compare: is the selective version better than the list version?",
        ],
      } as unknown as import("./worksheet-types").HomeActivityData,
      {
        type: "sequence",
        title: "Order the Recount Sentences",
        instruction:
          "Number these sentences 1–6 to put them in the correct order for a recount.",
        parentTip: "Look for time connectives — they are the clearest guide to order.",
        items: [
          { label: "Eventually, we arrived back at the car park, exhausted but happy." },
          { label: "On Sunday morning, Mum and Dad took me to the botanical gardens." },
          { label: "After that, we had a picnic under the biggest tree I had ever seen." },
          { label: "It was the most peaceful Sunday I could remember." },
          { label: "First, we walked along the main path and looked at the rose garden." },
          { label: "Then, we found a pond with ducks and fed them pieces of bread." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Recount About a School Experience",
        instruction:
          "Write a recount about something that happened at school (or during learning at home) recently. Include an orientation, at least 3 events with time connectives, and a reflection. Use past tense throughout.",
        prompts: [
          { text: "Title: ___", type: "lines", lines: 1 },
          { text: "Orientation: ___", type: "lines", lines: 2 },
          { text: "Events:", type: "lines", lines: 6 },
          { text: "Reflection: ___", type: "lines", lines: 2 },
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
      {
        type: "home-activity",
        title: "Spark: Recount in Different Forms",
        instruction:
          "Recounts can be written in many forms: diary entries, letters, news reports, memoirs. This week, write the SAME event as three different types of recount.",
        parentTip: "This is a multi-session project. Do one format per day or one per session. The comparison is very illuminating for children.",
        suggestions: [
          "Choose one event you want to recount",
          "Write it as a diary entry",
          "Write it as a letter to a friend",
          "Write it as a short news report ('Yesterday, a local child...')",
          "Compare the three: what changed? What stayed the same?",
        ],
      },

      // ── DEVELOPING (21–50) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Add Personal Reaction to Events",
        instruction:
          "Recounts become more engaging when the writer adds personal reactions — feelings, thoughts, and opinions — to the events. Rewrite each plain event sentence adding a personal reaction.",
        parentTip: "Show not just what happened, but how you felt about it as it happened.",
        prompts: [
          { text: "Plain: We arrived at the airport. → With reaction: ___", type: "lines", lines: 2 },
          { text: "Plain: I won the running race. → With reaction: ___", type: "lines", lines: 2 },
          { text: "Plain: We got lost in the forest. → With reaction: ___", type: "lines", lines: 2 },
          { text: "Plain: The cake collapsed in the oven. → With reaction: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Which Type of Recount?",
        instruction:
          "Recounts come in different types. Sort each text extract into the correct type.",
        parentTip: "Discuss how the same event can be told very differently depending on who is writing and why.",
        columns: ["Personal diary", "Letter to a friend", "News report"],
        items: [
          { label: "Dear Diary, Today was the best day ever..." },
          { label: "Yesterday, a local student was awarded a prize for..." },
          { label: "Dear Grandma, You won't believe what happened at the market last Saturday..." },
          { label: "I felt so embarrassed when I forgot my lines..." },
          { label: "The event took place at 3pm on Tuesday at the community centre..." },
          { label: "Guess what? We ended up going to the wrong museum!" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Time Connective Fits Best?",
        instruction:
          "Circle the time connective that best connects the events in each sentence pair.",
        questions: [
          {
            prompt: "We arrived at the park. ___, we set up the picnic rug.",
            options: ["Finally", "First", "Eventually"],
          },
          {
            prompt: "We waited in the queue for an hour. ___, we reached the front.",
            options: ["Then", "Eventually", "First"],
          },
          {
            prompt: "The match started. ___ it began to rain.",
            options: ["Eventually", "Suddenly", "At last"],
          },
          {
            prompt: "I ate my lunch. ___ I went back outside to play.",
            options: ["After that", "Before long", "At first"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Recount From a Different Perspective",
        instruction:
          "Think of an event you were part of. Write it first from your own point of view (first person). Then rewrite it from someone else's point of view (third person — he/she/they).",
        prompts: [
          { text: "Event: ___", type: "lines", lines: 1 },
          { text: "First person recount (I, we): ___", type: "lines", lines: 4 },
          { text: "Third person recount (he/she/they): ___", type: "lines", lines: 4 },
          { text: "What changed between the two versions? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Recount Opening to Its Purpose",
        instruction:
          "Draw a line to match each recount opening to what it does for the reader.",
        left: [
          "Last summer, during the hottest week anyone could remember...",
          "When I was six, I had the strangest birthday of my life.",
          "It was a Tuesday morning — the kind that looks ordinary until it isn't.",
          "My family and I arrived at the airport with three hours to spare.",
          "Nobody told me it would be like this.",
        ],
        right: [
          "Grabs the reader with mystery",
          "Sets the scene with specific details",
          "Hooks with an intriguing hint",
          "Begins with time and sets up the narrative",
          "Grounds the reader with familiar facts before the surprise",
        ],
      },
      {
        type: "open-response",
        title: "Write a Strong Recount Opening",
        instruction:
          "The opening sentence of a recount should hook the reader AND set the scene. Write three different openings for the same event (a trip to the market).",
        prompts: [
          { text: "Opening 1 (begins with time and place): ___", type: "lines", lines: 2 },
          { text: "Opening 2 (begins with an action): ___", type: "lines", lines: 2 },
          { text: "Opening 3 (begins with a feeling or thought): ___", type: "lines", lines: 2 },
          { text: "Which opening is most engaging? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Selective vs Exhaustive Events",
        instruction:
          "A good recount selects the most important events. Sort these into 'worth including' and 'can leave out'.",
        parentTip: "The test: does this event add something interesting or move the story forward? If not, cut it.",
        columns: ["Worth including", "Can leave out"],
        items: [
          { label: "We spotted an emu on the road (unusual and interesting)." },
          { label: "I put on my seatbelt (normal and unimportant)." },
          { label: "The tyre went flat in the middle of the forest (event with tension)." },
          { label: "We stopped at a petrol station (routine, adds nothing)." },
          { label: "A rainbow appeared just as we reached the lookout (vivid and memorable)." },
          { label: "I drank water from my bottle (routine)." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Recount of a Favourite Memory",
        instruction:
          "Choose a favourite memory and write a full recount with: a strong opening, 3–4 selected events with time connectives, personal reactions during events, and a thoughtful reflection at the end.",
        prompts: [
          { text: "Memory chosen: ___", type: "lines", lines: 1 },
          { text: "My recount:", type: "lines", lines: 10 },
        ],
      },
      {
        type: "circle-correct",
        title: "First Person or Third Person?",
        instruction:
          "Read each sentence. Circle whether it is written in first person (I/we) or third person (he/she/they).",
        questions: [
          { prompt: "She ran to the finish line and collapsed with exhaustion.", options: ["First person", "Third person"] },
          { prompt: "I had never seen anything so incredible in my life.", options: ["First person", "Third person"] },
          { prompt: "We decided to turn back when the storm hit.", options: ["First person", "Third person"] },
          { prompt: "They arrived at the station just as the train was leaving.", options: ["First person", "Third person"] },
          { prompt: "I told Mum what had happened as soon as I got home.", options: ["First person", "Third person"] },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: The Best Recounts Are Selective and Personal",
        instruction:
          "The two most important qualities of a great recount are: 1) SELECTIVE — only include the most interesting events; 2) PERSONAL — include your feelings and reactions. This week, practise writing a recount that passes both tests.",
        suggestions: [
          "Before writing, list all possible events — then circle only the 3 best ones",
          "In every event sentence, try to add how you felt or what you thought",
          "Read your recount aloud — does every sentence add something valuable?",
          "Cut any sentence that adds no interest or detail — a shorter, better recount is better than a long one",
        ],
      },
      {
        type: "open-response",
        title: "Evaluate a Recount",
        instruction:
          "Read this recount. Evaluate it using the checklist. Then write two suggestions to improve it.\n\nRECOUNT: 'On Monday we went somewhere. We did some things. It was good. Then we came home. I liked it.'",
        prompts: [
          { text: "Does it have an orientation (who, when, where)? YES / NO", type: "lines", lines: 1 },
          { text: "Does it use time connectives? YES / NO — which ones?", type: "lines", lines: 1 },
          { text: "Is it in first person? YES / NO", type: "lines", lines: 1 },
          { text: "Is it in past tense? YES / NO", type: "lines", lines: 1 },
          { text: "Does it have a reflection? YES / NO", type: "lines", lines: 1 },
          { text: "Suggestion 1 to improve it: ___", type: "lines", lines: 2 },
          { text: "Suggestion 2 to improve it: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Recount Journal Week",
        instruction:
          "Write a recount journal entry every day this week. By the end, you will have 5 recounts — one per day. On Friday, read them all back and choose the best one to share.",
        parentTip: "A recount journal is one of the most powerful daily writing habits for Year 3. Even 3–5 sentences per day builds enormous fluency over time.",
        suggestions: [
          "Monday: Write a recount of something you did on the weekend",
          "Tuesday: Write a recount of a funny moment",
          "Wednesday: Write a recount of something surprising",
          "Thursday: Write a recount of a meal or outing you remember",
          "Friday: Read all 5 entries. Choose the best one and improve it",
        ],
      },
      {
        type: "open-response",
        title: "Recount With Dialogue",
        instruction:
          "A recount can include snippets of dialogue to bring it to life. Write a short recount that includes at least 2 lines of direct speech. Use speech marks correctly.",
        prompts: [
          { text: "My recount with dialogue:", type: "lines", lines: 8 },
          { text: "Dialogue lines I used: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sequence",
        title: "Order a More Complex Recount",
        instruction:
          "Number these sentences 1–7 to put them in the correct recount order. Look carefully at the time connectives.",
        parentTip: "Some sentences won't have obvious time connectives — use common sense about what order makes sense.",
        items: [
          { label: "At last, we saw the famous painting and I understood what all the fuss was about." },
          { label: "On the bus home, I sketched the painting from memory." },
          { label: "Last month, my class visited the city art gallery." },
          { label: "After that, we split into groups to explore different wings." },
          { label: "First, our teacher took us through the entrance and explained the rules." },
          { label: "I spent nearly an hour in the sculpture hall without moving." },
          { label: "It was the day I decided I wanted to be an artist." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Recount From an Unusual Viewpoint",
        instruction:
          "Write a recount from the perspective of an object or animal — not a person. For example: a dog's recount of a day at the park, or a backpack's recount of a school day. Use first person and past tense.",
        parentTip: "This creative challenge deepens understanding of perspective and voice in writing.",
        prompts: [
          { text: "Viewpoint chosen: ___", type: "lines", lines: 1 },
          { text: "My recount:", type: "lines", lines: 8 },
        ],
      },
      {
        type: "matching",
        title: "Match: Recount to Its Type",
        instruction:
          "Draw a line to match each recount extract to the type of recount it is.",
        left: [
          "I can't believe what happened today! So you know how I said...",
          "On Sunday, 14 September, community members gathered at...",
          "Tuesday 3rd. Cloudy. I've been thinking about what happened last week...",
          "Dear Grandpa, I wanted to tell you about our trip to Canberra...",
          "When I was eight, I had an encounter I have never forgotten...",
        ],
        right: [
          "Memoir (written long after the event)",
          "Personal letter",
          "News report",
          "Diary entry",
          "Informal message to a friend",
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Time Connectives Are the Skeleton of a Recount",
        instruction:
          "Time connectives hold a recount together. Without them, events feel jumbled and confusing. This week, every time you write an event in a recount, ALWAYS begin it with a time connective. Don't skip this — it is one of the most important habits for recount writers.",
        suggestions: [
          "Write the time connective FIRST, then the event — never the other way",
          "Make a list of 10 time connectives and keep it next to you when writing",
          "Try using a more sophisticated connective like 'Shortly afterwards' or 'As soon as'",
          "Find time connectives in a book you are reading — notice how authors use them",
        ],
      },

      // ── CONSOLIDATING (51–80) ─────────────────────────────────────
      {
        type: "open-response",
        title: "Improve the Recount",
        instruction:
          "This recount is factually correct but very dull. Rewrite it making it engaging: add a strong opening, personal reactions, varied time connectives, and a meaningful reflection.\n\nORIGINAL: 'We went camping. We put up the tent. We cooked food. We slept. The next day we came home. It was okay.'",
        prompts: [
          { text: "My improved recount:", type: "lines", lines: 10 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Features That Improve a Recount",
        instruction:
          "Sort each feature by whether it is a structural feature (how it is organised) or a language feature (how it is written).",
        columns: ["Structural feature", "Language feature"],
        items: [
          { label: "Orientation at the start" },
          { label: "Past tense verbs" },
          { label: "Time connectives" },
          { label: "Precise vocabulary" },
          { label: "Reflection at the end" },
          { label: "Personal reactions" },
          { label: "Events in chronological order" },
          { label: "Varied sentence structures" },
          { label: "First person (I, we)" },
          { label: "Vivid adjectives and adverbs" },
        ],
      },
      {
        type: "open-response",
        title: "Write a Recount for a Specific Audience",
        instruction:
          "Write the same event (a trip to the market) as two short recounts: one for a young child (simple language, fun tone) and one for an adult (more formal, precise details).",
        prompts: [
          { text: "For a young child:", type: "lines", lines: 5 },
          { text: "For an adult:", type: "lines", lines: 5 },
          { text: "What language changes did you make? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Opening Is Stronger?",
        instruction:
          "For each pair of recount openings, circle the stronger one and explain why.",
        questions: [
          {
            prompt: "A: 'On Saturday I went to the shops.'\nB: 'It started as an ordinary Saturday morning — until Mum said we were making a special trip.'",
            options: ["A is stronger", "B is stronger"],
          },
          {
            prompt: "A: 'Last week we had the most embarrassing experience of our lives.'\nB: 'Last week things happened.'",
            options: ["A is stronger", "B is stronger"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Newspaper-Style Recount",
        instruction:
          "Newspaper recounts use third person and formal language. Write a short newspaper-style recount (5–6 sentences) about something that happened in your community or home. Use a headline, and write in the third person (he/she/they).",
        prompts: [
          { text: "Headline: ___", type: "lines", lines: 1 },
          { text: "My newspaper recount:", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Match: Time Connective to Sophistication Level",
        instruction:
          "More sophisticated time connectives make a recount sound more mature. Draw a line to match each simple connective to a more sophisticated alternative.",
        left: ["Then", "After that", "Finally", "At the same time", "Before"],
        right: [
          "Simultaneously",
          "Subsequently",
          "Prior to this",
          "Following this",
          "Ultimately",
        ],
      },
      {
        type: "open-response",
        title: "Write a Recount Using Sophisticated Time Connectives",
        instruction:
          "Write a 5-sentence recount using at least 3 of these sophisticated connectives: subsequently, prior to this, simultaneously, meanwhile, ultimately, as a result, following this.",
        prompts: [
          { text: "My recount:", type: "lines", lines: 7 },
          { text: "Sophisticated connectives I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Analyse a Published Recount",
        instruction:
          "Find a diary entry, memoir extract or news report (in a book, magazine or online with a parent). Read it and answer these questions.",
        prompts: [
          { text: "Source title and type (diary/memoir/news): ___", type: "lines", lines: 1 },
          { text: "What is the orientation (who, when, where)?", type: "lines", lines: 2 },
          { text: "List 3 time connectives the author uses: ___", type: "lines", lines: 1 },
          { text: "Is it first or third person? ___  Past or present tense? ___", type: "lines", lines: 1 },
          { text: "What does the author do well? What could be improved?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Recount of a Historical Event",
        instruction:
          "Write a recount from the perspective of a historical person (real or imagined) — a pioneer, an explorer, a First Nations person during colonisation, or a child in wartime. Research a little first if needed. Write in first person, past tense.",
        parentTip: "This links literacy with history. Encourage your child to think: what would this person have seen, felt and experienced?",
        prompts: [
          { text: "Historical person chosen: ___  Time period: ___", type: "lines", lines: 1 },
          { text: "My historical recount:", type: "lines", lines: 10 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Recounts Teach You to Notice Your Own Life",
        instruction:
          "Great recount writers notice things others don't. This week, practise NOTICING: what details made today interesting? What did you smell, see, hear? What surprised you? These details are the raw material of vivid recounts.",
        suggestions: [
          "At the end of each day, write 3 things you noticed",
          "Pick the most interesting detail and write it as a recount sentence",
          "Describe one sensory detail from today (something you saw, heard or smelled)",
          "Keep a 'noticing notebook' this week — add to it every day",
        ],
      },

      // ── EXTENDING (81–100) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Compare Two Recounts of the Same Event",
        instruction:
          "Imagine two people attended the same event but experienced it very differently. Write two short recounts (3–4 sentences each) of the same event from two different perspectives. Show how personal perspective shapes a recount.",
        prompts: [
          { text: "Event: ___", type: "lines", lines: 1 },
          { text: "Person 1's recount: ___", type: "lines", lines: 4 },
          { text: "Person 2's recount: ___", type: "lines", lines: 4 },
          { text: "How did perspective change the recount?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Features of Fiction vs Features of Recount",
        instruction:
          "Recounts and fiction stories share some features but differ in important ways. Sort each feature.",
        parentTip: "This comparison helps children understand genre differences — a key Year 3–4 literacy skill.",
        columns: ["Recount only", "Fiction only", "Both"],
        items: [
          { label: "Retells real events" },
          { label: "Has invented characters" },
          { label: "Uses past tense" },
          { label: "Uses time connectives" },
          { label: "Written in first person (usually)" },
          { label: "Has a problem and a resolution" },
          { label: "Includes personal feelings" },
          { label: "Ends with a reflection or lesson" },
        ],
      },
      {
        type: "open-response",
        title: "Extended Recount: A Multi-Day Experience",
        instruction:
          "Write a recount of a multi-day experience (a holiday, a sports tournament, a special week). Structure it across days using time connectives for the overall sequence AND within each day. Aim for 10–12 sentences.",
        prompts: [
          { text: "Experience: ___  Duration: ___", type: "lines", lines: 1 },
          { text: "My recount:", type: "lines", lines: 14 },
          { text: "Time connectives used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Advanced: Which Recount Is Most Effective?",
        instruction:
          "Read three versions of the same recount moment. Circle the most effective and explain why.",
        questions: [
          {
            prompt: "The finish line:\nA: I ran and finished the race.\nB: I crossed the finish line — my legs gave way and I sat down right there on the track.\nC: I ran really fast and I won and it was amazing and everyone cheered.",
            options: ["A is most effective", "B is most effective", "C is most effective"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Memoir-Style Recount",
        instruction:
          "A memoir is a form of recount written from a distance in time — looking back on an event and reflecting on what it meant. Write a memoir-style recount of a moment from your past (2–3 years ago). Include: what happened, how you felt then, and what you think or feel about it NOW looking back.",
        prompts: [
          { text: "The memory: ___", type: "lines", lines: 1 },
          { text: "My memoir-style recount:", type: "lines", lines: 10 },
          { text: "What does this memory mean to me now?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate Your Own Recount",
        instruction:
          "Choose any recount you have written in this worksheet. Evaluate it honestly using this checklist.",
        prompts: [
          { text: "Which recount am I evaluating? ___", type: "lines", lines: 1 },
          { text: "Orientation: Does it clearly state who, when and where? YES/NO — Comment: ___", type: "lines", lines: 1 },
          { text: "Events: Are they in order with time connectives? YES/NO — Comment: ___", type: "lines", lines: 1 },
          { text: "Personal voice: Does the writing sound like me? YES/NO — Comment: ___", type: "lines", lines: 1 },
          { text: "Tense: Is it consistently past tense? YES/NO — Comment: ___", type: "lines", lines: 1 },
          { text: "Reflection: Is it thoughtful? YES/NO — Comment: ___", type: "lines", lines: 1 },
          { text: "One thing I am proud of: ___", type: "lines", lines: 1 },
          { text: "One thing I would improve: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Design a Recount Checklist",
        instruction:
          "Create a recount writing checklist that a Year 3 student could use before publishing their work. Include at least 8 checklist items.",
        prompts: [
          { text: "My recount checklist:", type: "lines", lines: 10 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Record a Spoken Recount",
        instruction:
          "Record yourself telling a recount out loud (on a phone or device). Listen back — does it have a clear orientation, ordered events and a reflection? Then write the spoken recount as a polished written one.",
        parentTip: "Oral rehearsal before writing is extremely powerful for children who struggle with getting started. Speaking the recount first makes writing much easier.",
        suggestions: [
          "Choose a memory and speak it out loud for 1–2 minutes",
          "Record it on a phone or device",
          "Play it back and note: does it have all recount features?",
          "Write a polished version based on the spoken one",
          "Compare: what did you say aloud that you wouldn't have written? What did you leave out?",
        ],
      },
      {
        type: "circle-correct",
        title: "Recount Feature: Present or Missing?",
        instruction: "Read each extract and circle whether the recount feature is PRESENT or MISSING.",
        parentTip: "Identifying missing features in sample texts trains self-editing — a crucial Year 3 writing skill.",
        questions: [
          { prompt: "'Yesterday we went to the zoo.' — Does it have an orientation?", options: ["present", "missing"] },
          { prompt: "'It was fun.' — Does it have sequenced events?", options: ["present", "missing"] },
          { prompt: "'First we saw the lions. Then we fed the giraffes. After that we had lunch.' — Time connectives?", options: ["present", "missing"] },
          { prompt: "'We drove home at four o'clock.' — Is it in past tense?", options: ["present", "missing"] },
          { prompt: "'It was the best day ever and I hope to go again!' — Personal reflection?", options: ["present", "missing"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Recount Sentences Into the Right Section",
        instruction: "Sort these sentences into the correct section of a recount.",
        columns: ["Orientation", "Events", "Reflection"],
        items: [
          { label: "Last Saturday, my family and I visited the botanical gardens." },
          { label: "First, we walked along the main path and looked at the rose garden." },
          { label: "It was one of the most relaxing mornings I can remember." },
          { label: "After that, we found a shady spot and had our picnic lunch." },
          { label: "On Sunday morning, our class went on an excursion to the museum." },
          { label: "I learned so much and I would love to go back again." },
          { label: "Then we visited the butterfly house, which was incredible." },
          { label: "Finally, we stopped at the gift shop before heading home." },
        ],
      },
      {
        type: "matching",
        title: "Match: Time Connective to Its Position",
        instruction: "Draw a line from each time connective to where it typically appears in a recount.",
        left: ["First,", "Then,", "Next,", "After that,", "Finally,", "Meanwhile,", "Later,", "At the end,"],
        right: [
          "very beginning — first event",
          "second event",
          "middle events",
          "events happening at the same time",
          "events that come somewhat later",
          "transitional events",
          "last or near-last event",
          "concluding event",
        ],
      },
      {
        type: "open-response",
        title: "Write a Recount: A Favourite Memory",
        instruction:
          "Write a full personal recount about a favourite memory. Include: orientation (who, when, where), at least four sequenced events with time connectives, past tense throughout, and a personal reflection.",
        parentTip: "Discuss the memory orally first. Ask: who was there? Where did it happen? What happened first, second, and then? How did you feel at the end?",
        prompts: [
          { text: "My topic: ___", type: "lines", lines: 1 },
          { text: "Orientation (who, when, where): ___", type: "lines", lines: 2 },
          { text: "Events (use time connectives):", type: "lines", lines: 6 },
          { text: "My reflection: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Recount: First Person or Third Person?",
        instruction: "Circle whether each sentence is written in FIRST PERSON (I/we) or THIRD PERSON (he/she/they).",
        parentTip: "Personal recounts should be in first person throughout. Third person is used in factual or news recounts.",
        questions: [
          { prompt: "I woke up early and rushed to get ready.", options: ["first person", "third person"] },
          { prompt: "She arrived at the party feeling nervous.", options: ["first person", "third person"] },
          { prompt: "We drove for two hours before we reached the beach.", options: ["first person", "third person"] },
          { prompt: "They celebrated with a big family dinner.", options: ["first person", "third person"] },
          { prompt: "After breakfast, I helped pack the car.", options: ["first person", "third person"] },
        ],
      },
      {
        type: "sequence",
        title: "Order: The Parts of a Recount",
        instruction: "Put these recount sections in the correct order.",
        items: [
          { label: "Reflection — how you felt and what it meant to you" },
          { label: "Orientation — who, when, where" },
          { label: "Event 3 — with a time connective" },
          { label: "Event 1 — the first thing that happened" },
          { label: "Event 2 — with a time connective" },
        ],
      },
      {
        type: "open-response",
        title: "Recount: Add the Missing Orientation",
        instruction:
          "This recount is missing an orientation. Write one that sets the scene properly: '___. First, we boarded the ferry. After an hour, we arrived at the island. Then we explored the rock pools. Finally, we ate fish and chips on the beach. It was a wonderful day.'",
        prompts: [
          { text: "My orientation sentence(s): ___", type: "lines", lines: 2 },
          { text: "Why orientation is important: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Strong Recount Words vs Weak Recount Words",
        instruction: "Sort these time connectives and words by whether they make a recount STRONG (varied, interesting) or WEAK (repetitive, plain).",
        columns: ["Strong (varied / specific)", "Weak (repetitive / vague)"],
        items: [
          { label: "Shortly afterwards" },
          { label: "And then" },
          { label: "As soon as we arrived" },
          { label: "and stuff" },
          { label: "Late in the afternoon" },
          { label: "and then we also" },
          { label: "At that moment" },
          { label: "things happened" },
          { label: "Just before sunset" },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: The Recount Planning Template",
        instruction:
          "Before writing any recount, use this template to plan. It takes 3 minutes and makes the writing much better.",
        parentTip: "Explicit planning before writing reduces cognitive load and improves structure. Make this a regular pre-writing habit.",
        suggestions: [
          "Orientation: Who? When? Where? Write 1–2 sentences.",
          "Event 1: What happened first? Write key words.",
          "Events 2–4: What happened next? Add time connectives.",
          "Reflection: How did you feel? What do you think looking back?",
          "Check: is everything in past tense and first person?",
        ],
      },
      {
        type: "matching",
        title: "Match: Recount to Its Audience",
        instruction: "Draw a line to match each recount description to its most likely audience.",
        left: [
          "A personal recount of a family holiday",
          "A news recount of a local event",
          "A historical recount of an explorer's journey",
          "A recount of a school excursion in a class newsletter",
          "A recount of a sporting match",
        ],
        right: [
          "Sports fans reading a match report",
          "Family reading a personal letter",
          "Students reading a textbook",
          "Community members reading a school newsletter",
          "Newspaper readers",
        ],
      },
      {
        type: "open-response",
        title: "Recount: Edit for Tense Consistency",
        instruction:
          "Rewrite this recount paragraph with all verbs in PAST TENSE: 'We get to the park and I am really excited. My dog runs ahead and I chase after him. We play fetch for a long time and then we sit under a tree.'",
        prompts: [
          { text: "My past tense version:", type: "lines", lines: 4 },
          { text: "Verbs I changed: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Recount or Other Text Type?",
        instruction: "Circle whether each text extract is a RECOUNT or a DIFFERENT text type.",
        questions: [
          { prompt: "Last Tuesday, I visited the zoo with my family...", options: ["recount", "other text type"] },
          { prompt: "Butterflies have four wings and six legs...", options: ["recount", "other text type"] },
          { prompt: "On Saturday morning we went to the farmers market...", options: ["recount", "other text type"] },
          { prompt: "First, add the flour and mix well. Then add eggs...", options: ["recount", "other text type"] },
          { prompt: "I believe students should have more say in school decisions...", options: ["recount", "other text type"] },
        ],
      },
      {
        type: "open-response",
        title: "Recount: Add Vivid Detail",
        instruction:
          "Here is a plain recount: 'We went to the beach. I swam. We had lunch. We went home.' Add detail (sensory words, adjectives, adverbs) to each event to make it vivid and interesting.",
        parentTip: "This upgrading task separates the structure task from the language task — children can focus on enriching the language.",
        prompts: [
          { text: "My vivid version:", type: "lines", lines: 6 },
          { text: "Details I added (senses / adjectives / adverbs): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Personal Recount vs Factual/News Recount Features",
        instruction: "Sort these features into PERSONAL RECOUNT or FACTUAL/NEWS RECOUNT.",
        columns: ["Personal recount", "Factual / News recount"],
        items: [
          { label: "Written in first person (I)" },
          { label: "Written in third person (they/he/she)" },
          { label: "Includes personal feelings and reactions" },
          { label: "Objective — only states facts" },
          { label: "Usually informal tone" },
          { label: "Usually formal tone" },
          { label: "Ends with personal reflection" },
          { label: "May end with a quote from a witness" },
        ],
      },
      {
        type: "open-response",
        title: "Recount: The Best Day of My Life",
        instruction:
          "Write a full recount about the best day of your life (so far!). Use all recount features: orientation, events with time connectives, past tense, first person, and a heartfelt reflection.",
        parentTip: "Allow your child full creative freedom here. Any memory, large or small, is valid. This is about authentic writing.",
        prompts: [
          { text: "My topic: ___", type: "lines", lines: 1 },
          { text: "Full recount:", type: "lines", lines: 10 },
          { text: "Recount features I included: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Recount: Strong Reflection or Weak Reflection?",
        instruction: "Circle whether each recount ending is a STRONG or WEAK personal reflection.",
        questions: [
          { prompt: "'It was good. I liked it.'", options: ["strong", "weak"] },
          { prompt: "'Looking back, it was a day that reminded me how lucky I am to have such a wonderful family.'", options: ["strong", "weak"] },
          { prompt: "'Then we went home.'", options: ["strong", "weak"] },
          { prompt: "'I felt proud and happy — it was the first time I had ever done something like that on my own.'", options: ["strong", "weak"] },
          { prompt: "'The end.'", options: ["strong", "weak"] },
        ],
      },
      {
        type: "sequence",
        title: "Order: Writing a Recount Step by Step",
        instruction: "Put these writing steps in the best order for producing a quality recount.",
        items: [
          { label: "Choose a topic (a memory or event)" },
          { label: "Plan: orientation, 4 events, reflection" },
          { label: "Write a first draft" },
          { label: "Check: past tense, first person, time connectives" },
          { label: "Add vivid detail and improve word choices" },
          { label: "Edit for spelling and punctuation" },
          { label: "Publish / share your final recount" },
        ],
      },
      {
        type: "open-response",
        title: "Recount: Write About a Challenge You Overcame",
        instruction:
          "Write a recount about a time you found something difficult but kept going. Include your thoughts and feelings at each stage — before, during, and after.",
        prompts: [
          { text: "My challenge: ___", type: "lines", lines: 1 },
          { text: "Before (orientation + how I felt): ___", type: "lines", lines: 3 },
          { text: "During (events + feelings): ___", type: "lines", lines: 4 },
          { text: "After (reflection): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Recount Reading: Find Examples in Real Texts",
        instruction:
          "Find two real-life recounts — one in a newspaper or news website, one in a book or journal. Note the features of each and compare how they are written.",
        parentTip: "Seeing recounts in authentic contexts powerfully reinforces what the text type is for. Autobiographies, memoirs, and news articles all contain recounts.",
        suggestions: [
          "Find a news article that recounts an event",
          "Find a personal recount in a book, blog or diary",
          "List the recount features each one uses",
          "Compare: how are they the same? How are they different?",
          "Write 2–3 sentences about what you noticed",
        ],
      },
      {
        type: "open-response",
        title: "Recount: My Learning About Recounts",
        instruction:
          "Write a recount of learning about recounts! Describe what you knew at the start, what activities you did, and what you understand now.",
        prompts: [
          { text: "Orientation (when I started this topic): ___", type: "lines", lines: 2 },
          { text: "Events (what I learned / did): ___", type: "lines", lines: 4 },
          { text: "Reflection (what I understand now): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Recount Language Feature to Example",
        instruction: "Draw a line from each recount language feature to an example of it.",
        left: [
          "Time connective",
          "Past tense verb",
          "First person pronoun",
          "Sensory detail",
          "Personal reflection",
        ],
        right: [
          "I felt incredibly proud of myself.",
          "The salty breeze stung my eyes.",
          "We explored the market stalls.",
          "After that, we found a quiet spot.",
          "Finally, we caught the last bus home.",
        ],
      },
      {
        type: "circle-correct",
        title: "Recount: Past or Present Tense?",
        instruction: "Circle whether each verb is in PAST TENSE (correct for recount) or PRESENT TENSE (needs fixing).",
        questions: [
          { prompt: "We walked along the path.", options: ["past (correct)", "present (fix it)"] },
          { prompt: "She is very excited.", options: ["past (correct)", "present (fix it)"] },
          { prompt: "He spotted a koala in the tree.", options: ["past (correct)", "present (fix it)"] },
          { prompt: "We eat our lunch by the river.", options: ["past (correct)", "present (fix it)"] },
          { prompt: "They arrived just in time.", options: ["past (correct)", "present (fix it)"] },
        ],
      },
      {
        type: "open-response",
        title: "Recount: Imaginary Historical Recount",
        instruction:
          "Write a recount as if you were a famous historical figure living through a key event (e.g. a young convict arriving in Australia, or a child during the gold rush). Use first person and past tense.",
        parentTip: "Historical imaginative recounts build empathy and cross-curricular connections. Encourage research if needed.",
        prompts: [
          { text: "Who I am and when: ___", type: "lines", lines: 1 },
          { text: "My historical recount:", type: "lines", lines: 8 },
          { text: "Historical features I tried to include: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Recount Peer Edit: Share and Improve",
        instruction:
          "Share your recount with a family member or friend. Ask them to check: Did I include an orientation? Did I use time connectives? Did I stay in past tense? Did I reflect at the end?",
        parentTip: "Peer or family editing is a powerful learning strategy. Provide the checklist below for the reviewer to use.",
        suggestions: [
          "Share your recount with a reader",
          "Ask them to tick each recount feature they find",
          "Note any feature they couldn't find",
          "Revise your recount based on their feedback",
          "Write one sentence about what you improved",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Recount Vocabulary from Simple to Sophisticated",
        instruction: "Sort these time connectives and linking phrases from SIMPLE to SOPHISTICATED.",
        columns: ["Simple (Year 1–2 level)", "Developing (Year 3)", "Sophisticated (Year 4+)"],
        items: [
          { label: "and then" },
          { label: "after that" },
          { label: "as the afternoon wore on" },
          { label: "next" },
          { label: "later in the day" },
          { label: "by the time we arrived" },
          { label: "first" },
          { label: "shortly afterwards" },
          { label: "just as the sun was setting" },
        ],
      },
      {
        type: "open-response",
        title: "Recount: Write and Self-Edit",
        instruction:
          "Write a short recount (6–8 sentences) about anything you choose. Then use the self-editing checklist: orientation ✓, events in order ✓, time connectives ✓, past tense ✓, first person ✓, reflection ✓.",
        prompts: [
          { text: "My recount:", type: "lines", lines: 8 },
          { text: "Self-edit results (what I found and fixed): ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Recount Self-Assessment and Goals",
        instruction:
          "Reflect on your ability to write recounts. Write what you do well, what you find difficult, and your writing goal for next time.",
        prompts: [
          { text: "I write recounts well when I: ___", type: "lines", lines: 2 },
          { text: "I still find this difficult: ___", type: "lines", lines: 2 },
          { text: "My goal for my next recount: ___", type: "lines", lines: 2 },
          { text: "One recount technique I want to get better at: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Recount Portfolio",
        instruction:
          "Over the next month, write one short recount each week about something that happened. Collect them in a portfolio. At the end of the month, read back through and notice how your recounts improve over time.",
        parentTip: "A writing portfolio creates tangible evidence of growth. End-of-month reflection conversations ('look how much better this one is!') are extremely motivating.",
        suggestions: [
          "Week 1: Write a recount about something small (a meal, a walk)",
          "Week 2: Write a recount about something exciting",
          "Week 3: Write a recount about a challenge",
          "Week 4: Write your best recount yet",
          "End of month: Read all four. What improved? What would you change?",
        ],
      },
      {
        type: "circle-correct",
        title: "Recount Vocabulary: Which Time Connective Fits?",
        instruction: "Circle the best time connective for each sentence in a recount.",
        parentTip: "Varying time connectives is a key step toward more sophisticated recount writing.",
        questions: [
          {
            prompt: "___ we arrived at the beach, we set up our towels.",
            options: ["As soon as", "Therefore", "However"],
          },
          {
            prompt: "We swam for an hour. ___, we had lunch in the shade.",
            options: ["After that", "Instead", "Although"],
          },
          {
            prompt: "The journey took all morning. ___, we reached the summit just before noon.",
            options: ["As a result", "Finally", "Even so"],
          },
          {
            prompt: "___ the sun set, we packed up and headed back.",
            options: ["Just as", "Despite", "Whereas"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Recount Time Connectives by Sophistication",
        instruction: "Sort these time connectives from SIMPLE to SOPHISTICATED.",
        columns: ["Simple", "Developing", "Sophisticated"],
        items: [
          { label: "first" },
          { label: "then" },
          { label: "as soon as we arrived" },
          { label: "next" },
          { label: "after that" },
          { label: "by the time the afternoon ended" },
          { label: "and" },
          { label: "later that morning" },
          { label: "just as the light began to fade" },
        ],
      },
      {
        type: "open-response",
        title: "Recount: A Nature Experience",
        instruction:
          "Write a recount about a time you experienced something in nature (a storm, a sunset, finding an animal, a rainy day, a walk in the bush). Use sensory details in every paragraph.",
        prompts: [
          { text: "My nature experience: ___", type: "lines", lines: 1 },
          { text: "Orientation:", type: "lines", lines: 2 },
          { text: "Events with time connectives:", type: "lines", lines: 5 },
          { text: "Reflection:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Recount: Identify the Weak Spot",
        instruction: "Read each recount extract and circle what is MISSING or WEAK.",
        questions: [
          {
            prompt: "'We went to the zoo. We saw animals. It was good. The end.'",
            options: ["no orientation", "no time connectives", "no reflection", "all of these"],
          },
          {
            prompt: "'Last Tuesday I visited the museum with my class. There were interesting exhibits. I enjoyed it.'",
            options: ["no orientation", "no specific events listed", "no past tense", "no personal pronouns"],
          },
          {
            prompt: "'On Saturday morning, Mum and I go to the market. We buy fruit. It is very busy.'",
            options: ["no time connectives", "wrong tense (present not past)", "no orientation", "no reflection"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Recount Opening Lines to Their Orientation Type",
        instruction: "Draw a line from each recount opening to what orientation information it provides.",
        left: [
          "Last summer, our family drove to the coast.",
          "On a rainy Friday in March, my class went on an excursion.",
          "During the school holidays, I stayed with my grandparents in the country.",
          "It was my eighth birthday when everything went wrong.",
        ],
        right: [
          "who + when + where + hint of event",
          "when + who + event type",
          "when + who + where",
          "when + who + foreshadowing",
        ],
      },
      {
        type: "open-response",
        title: "Recount: Write a News-Style Recount",
        instruction:
          "Write a short news-style recount (4–5 sentences) of a school or community event. Use third person (he/she/they) and a formal tone — but keep it in past tense with clear time ordering.",
        parentTip: "News recounts differ from personal ones in voice and formality. This task builds awareness of audience and purpose in writing.",
        prompts: [
          { text: "Event: ___  Date: ___", type: "lines", lines: 1 },
          { text: "My news recount:", type: "lines", lines: 5 },
          { text: "Differences from a personal recount I noticed: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Recount Reading Hunt: Find Features in Real Books",
        instruction:
          "Open an autobiography, memoir, or narrative non-fiction book. Find one recount passage. List all the recount features it uses.",
        parentTip: "Autobiographies are essentially extended personal recounts. Famous examples: 'Angela's Ashes', 'My Brilliant Career', children's autobiographies by authors like Morris Gleitzman.",
        suggestions: [
          "Find a recount passage in any autobiography or memoir",
          "List the recount features you can find",
          "Note: does it use first or third person?",
          "Copy down the best time connective you find",
          "Share your favourite line from the passage",
        ],
      },
      {
        type: "open-response",
        title: "Recount: Cross-Curriculum — Recount a Science Experiment",
        instruction:
          "Write a recount of a science activity or experiment you have done. Use past tense, first person, time connectives, and a reflection on what you discovered.",
        parentTip: "Science experiment recounts are a real-world application of this text type. They are also excellent practise for structured writing.",
        prompts: [
          { text: "Experiment name / topic: ___", type: "lines", lines: 1 },
          { text: "Orientation: ___", type: "lines", lines: 2 },
          { text: "Events (what we did step by step): ___", type: "lines", lines: 4 },
          { text: "Reflection (what I discovered): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Recount Reflection Quality",
        instruction: "Sort these recount endings from WEAKEST to STRONGEST reflection.",
        columns: ["Weak", "Developing", "Strong"],
        items: [
          { label: "Then we went home." },
          { label: "It was fun." },
          { label: "It was the best day of my holidays." },
          { label: "I felt proud and tired but very happy when I finally crossed the finish line." },
          { label: "Looking back, I realise that day changed how I think about trying new things." },
          { label: "The end." },
        ],
      },
      {
        type: "open-response",
        title: "Recount: Upgrade the Reflection",
        instruction:
          "Here are three weak recount reflections. Upgrade each one to make it more thoughtful and specific: 1) 'It was fun.' 2) 'I liked it.' 3) 'Then we went home and that was the end.'",
        prompts: [
          { text: "Upgraded reflection 1: ___", type: "lines", lines: 2 },
          { text: "Upgraded reflection 2: ___", type: "lines", lines: 2 },
          { text: "Upgraded reflection 3: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Recount Grammar Check: Right or Wrong?",
        instruction: "Circle whether each recount sentence uses grammar CORRECTLY for this text type.",
        questions: [
          { prompt: "We walked to the park and played for two hours. (past tense, first person)", options: ["correct", "incorrect"] },
          { prompt: "The birds are singing in the trees all morning. (present tense)", options: ["correct", "incorrect"] },
          { prompt: "After that, I felt happier than I had in weeks. (past tense, first person)", options: ["correct", "incorrect"] },
          { prompt: "Finally, they go home and eat dinner. (present tense)", options: ["correct", "incorrect"] },
          { prompt: "First, we arrived at the beach and set up our spot.", options: ["correct", "incorrect"] },
        ],
      },
      {
        type: "sequence",
        title: "Order: The Events of a School Excursion Recount",
        instruction: "Put these recount sentences in the most logical chronological order.",
        items: [
          { label: "On Tuesday morning, our class boarded the bus to the science museum." },
          { label: "After that, we watched a 20-minute film about the solar system." },
          { label: "First, we explored the interactive technology exhibition." },
          { label: "Then we ate lunch in the courtyard." },
          { label: "Finally, we piled back onto the bus for the trip home." },
          { label: "It was one of the most interesting excursions we have ever had." },
        ],
      },
      {
        type: "open-response",
        title: "Recount: Write About Something You've Never Recounted Before",
        instruction:
          "Write a recount about an event you've never written about before — something small but memorable: the day you learned something difficult, a funny moment, or a quiet, perfect afternoon.",
        parentTip: "Small, personal moments often make the richest recounts. Encourage your child to pick something specific rather than something 'big'.",
        prompts: [
          { text: "My memory: ___", type: "lines", lines: 1 },
          { text: "My recount:", type: "lines", lines: 8 },
          { text: "Why I chose this memory: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Recount Mastery: Final Reflection",
        instruction:
          "Write your final reflection on what you now know and can do with recount writing. Be specific about what you have improved and what you will do differently next time.",
        prompts: [
          { text: "My best recount skill is: ___", type: "lines", lines: 2 },
          { text: "I used to struggle with ___ but now I: ___", type: "lines", lines: 2 },
          { text: "Next time I write a recount, I will: ___", type: "lines", lines: 2 },
          { text: "One piece of recount advice I would give to a friend: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Recount Your Day, Every Day for a Week",
        instruction:
          "Each evening this week, write a 3–5 sentence recount of your day. Focus on: one key event, a clear time sequence, and a personal reflection. At the end of the week, read back and choose your favourite.",
        parentTip: "Daily recount practice builds automaticity with the text type. The short length makes it sustainable. Five days of practice will have a significant impact.",
        suggestions: [
          "Day 1: Recount a moment from this morning",
          "Day 2: Recount something new you tried today",
          "Day 3: Recount a conversation or interaction",
          "Day 4: Recount something you saw or noticed",
          "Day 5: Recount your favourite moment of the week — then pick your best recount",
        ],
      },
      {
        type: "open-response",
        title: "Recount: The Moment That Changed Something",
        instruction:
          "Write a recount about a small moment that changed how you thought or felt about something — learning to ride a bike, helping someone, making a mistake. Show the before and after.",
        parentTip: "Reflective recounts that show a moment of change are some of the most powerful personal writing. Encourage honesty and specificity.",
        prompts: [
          { text: "The moment: ___", type: "lines", lines: 1 },
          { text: "Orientation: ___", type: "lines", lines: 2 },
          { text: "Events: ___", type: "lines", lines: 4 },
          { text: "Reflection — how it changed me: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Recount Editing: Find the Tense Error",
        instruction: "Circle the verb that is in the WRONG tense for a personal recount (should be past tense).",
        parentTip: "Consistency in past tense is one of the most important editing skills for recount writing.",
        questions: [
          {
            prompt: "We arrived at the beach, then runs down to the water.",
            options: ["arrived (correct)", "runs (incorrect — should be 'ran')"],
          },
          {
            prompt: "She felt nervous but decided to try anyway.",
            options: ["felt (correct)", "decided (correct — both are past tense)"],
          },
          {
            prompt: "After lunch, we walked to the park and play on the equipment.",
            options: ["walked (correct)", "play (incorrect — should be 'played')"],
          },
          {
            prompt: "First, I woke up early. Then I pack my bag in a hurry.",
            options: ["woke (correct)", "pack (incorrect — should be 'packed')"],
          },
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
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
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
        parentTip: "Read each option aloud — the correct one will sound the clearest and most natural.",
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
        parentTip: "Remind your child: commas between every item except the last two — those are joined with 'and'.",
        prompts: [
          { text: "Things you might find in a school bag:", type: "lines", lines: 2 },
          { text: "Animals you might see at a zoo:", type: "lines", lines: 2 },
          { text: "Foods you enjoy eating:", type: "lines", lines: 2 },
          { text: "Things you can see outside your window:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Correct or Incorrect Comma Use?",
        instruction:
          "Sort each sentence by whether the commas are used correctly or incorrectly.",
        parentTip: "Look for: are commas between EVERY item except the last pair? Is 'and' before the last item only?",
        columns: ["Correct comma use", "Incorrect comma use"],
        items: [
          { label: "I saw a cat, a dog and a rabbit." },
          { label: "She brought bread, butter, and, jam." },
          { label: "We need milk, eggs, flour and sugar." },
          { label: "He read books magazines, newspapers and comics." },
          { label: "The bag held a pencil, a ruler, an eraser and a calculator." },
          { label: "I like swimming, cycling, and, running." },
        ],
      },
      {
        type: "open-response",
        title: "How Many Items Need Commas?",
        instruction:
          "Complete the rule by filling in the blanks.",
        prompts: [
          { text: "A list of 2 items: use ___ (no comma needed). Example: a cat and a dog.", type: "lines", lines: 1 },
          { text: "A list of 3 items: use ___ comma. Example: ___", type: "lines", lines: 1 },
          { text: "A list of 4 items: use ___ commas. Example: ___", type: "lines", lines: 1 },
          { text: "A list of 5 items: use ___ commas. Example: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Does the Comma Go?",
        instruction:
          "Circle the correct position for the comma in each sentence.",
        questions: [
          {
            prompt: "I need a pen [A], a ruler [B] and a notebook.",
            options: ["Comma at A only", "Comma at B only", "Comma at A and B"],
          },
          {
            prompt: "She packed clothes [A], shoes [B], toiletries [C] and a book.",
            options: ["Commas at A only", "Commas at A and B", "Commas at A, B and C"],
          },
          {
            prompt: "We bought milk [A] and bread [B].",
            options: ["No comma needed", "Comma at A", "Comma at A and B"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Convert a List to a Sentence",
        instruction:
          "Rewrite each dot-point list as a sentence using commas correctly.",
        prompts: [
          { text: "Shopping list: bread / butter / cheese / jam\nSentence: ___", type: "lines", lines: 2 },
          { text: "What I did today: woke up / had breakfast / went for a walk / read a book\nSentence: ___", type: "lines", lines: 2 },
          { text: "Animals in the garden: a frog / two lizards / a possum / several birds\nSentence: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Number of Items to Number of Commas",
        instruction:
          "Draw a line to match the number of items in a list to the number of commas needed.",
        parentTip: "The rule: number of commas = number of items MINUS two (for a standard list without an Oxford comma).",
        left: ["2 items", "3 items", "4 items", "5 items", "6 items"],
        right: [
          "4 commas",
          "3 commas",
          "0 commas",
          "1 comma",
          "2 commas",
        ],
      },
      {
        type: "open-response",
        title: "Fix the Comma Mistakes",
        instruction:
          "Each sentence has a comma error. Identify the error and rewrite the sentence correctly.",
        prompts: [
          { text: "She enjoyed reading drawing, painting and cooking.\nError: ___  Corrected: ___", type: "lines", lines: 2 },
          { text: "The colours were red, blue green, and yellow.\nError: ___  Corrected: ___", type: "lines", lines: 2 },
          { text: "I need flour eggs, milk and butter.\nError: ___  Corrected: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Does This List Need Commas?",
        instruction:
          "Circle YES if the list needs commas, or NO if it does not.",
        questions: [
          { prompt: "I have two cats and one dog.", options: ["YES — needs commas", "NO — no commas needed (only 2 items)"] },
          { prompt: "She plays guitar piano violin and flute.", options: ["YES — needs commas", "NO — no commas needed"] },
          { prompt: "He ran and jumped.", options: ["YES — needs commas", "NO — no commas needed (only 2 items)"] },
          { prompt: "The box contained ribbons buttons thread and scissors.", options: ["YES — needs commas", "NO — no commas needed"] },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Commas Replace 'and' in Lists",
        instruction:
          "The comma's job in a list is to replace the word 'and' between every item EXCEPT the last one. Try this test: wherever you would say 'and' between list items (except the final pair), replace it with a comma. That is the rule!",
        suggestions: [
          "Say your list aloud, saying 'and' between every item",
          "Now replace every 'and' except the last one with a comma",
          "Write the sentence with commas and read it aloud — does it flow?",
          "Find one list in a book or magazine and check that the rule is followed",
        ],
      },
      {
        type: "open-response",
        title: "Create List Sentences for Different Topics",
        instruction:
          "Write a list sentence (4+ items) for each topic. Use commas correctly every time.",
        prompts: [
          { text: "What you would pack for a camping trip:", type: "lines", lines: 2 },
          { text: "Sports you know how to play:", type: "lines", lines: 2 },
          { text: "Things you would find in a kitchen:", type: "lines", lines: 2 },
          { text: "Countries you would like to visit:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match List Sentence to Number of Commas Used",
        instruction:
          "Count the commas in each sentence and draw a line to the correct number.",
        left: [
          "I need a pen, a ruler and a book.",
          "She likes cats, dogs, rabbits and birds.",
          "He packed shoes, socks, a hat, sunscreen and water.",
          "We ate toast and eggs.",
          "The bag had a pencil, a rubber and a sharpener.",
        ],
        right: [
          "0 commas",
          "1 comma",
          "2 commas",
          "3 commas",
          "4 commas",
        ],
      },
      {
        type: "open-response",
        title: "Write a List Poem With Commas",
        instruction:
          "Write a short list poem (5–6 lines) using commas to list items in a creative way. Each line can be a new list. For example: 'I found feathers, pebbles, a lost button and a wish.'",
        parentTip: "List poems are a great way to practise comma use in a creative context.",
        prompts: [
          { text: "My list poem:", type: "lines", lines: 7 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Comma Hunt",
        instruction:
          "Go hunting for lists with commas in real texts — books, food packaging, recipes, brochures and signs.",
        parentTip: "Recipes and ingredient lists are excellent sources. Packaging often uses both correct and incorrect list punctuation — make it a game to spot errors!",
        suggestions: [
          "Find a sentence with a list in a book or magazine and copy it out",
          "Write a shopping list as a proper sentence with commas",
          "Create a menu for tonight's dinner using commas in list sentences",
          "Write a list of everything you can see in one room of your home",
          "Look for a list on a food packet — is the comma used correctly?",
        ],
      },
      {
        type: "open-response",
        title: "List Sentences From Real Life",
        instruction:
          "Write 4 list sentences based on things in your life right now. Each must have at least 4 items and correct comma use.",
        prompts: [
          { text: "Things on your desk right now:", type: "lines", lines: 2 },
          { text: "Things you did this morning:", type: "lines", lines: 2 },
          { text: "Your favourite things to do on weekends:", type: "lines", lines: 2 },
          { text: "Foods in your kitchen right now:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Correction Is Right?",
        instruction:
          "One student corrected a sentence three ways. Circle the correct correction.",
        questions: [
          {
            prompt: "Original: 'We saw lions elephants zebras and giraffes.'",
            options: [
              "We saw lions, elephants, zebras, and, giraffes.",
              "We saw lions, elephants, zebras and giraffes.",
              "We saw lions elephants zebras, and giraffes.",
            ],
          },
          {
            prompt: "Original: 'The recipe needs flour butter sugar and eggs.'",
            options: [
              "The recipe needs flour, butter, sugar, and eggs.",
              "The recipe needs flour, butter, sugar and eggs.",
              "The recipe needs flour butter sugar, and eggs.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Explain the Comma Rule",
        instruction:
          "Write an explanation of the comma-in-lists rule in your own words. Include: when to use commas, where they go, and when to use 'and'. Add two examples.",
        prompts: [
          { text: "My explanation of the rule:", type: "lines", lines: 3 },
          { text: "Example 1: ___", type: "lines", lines: 1 },
          { text: "Example 2: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: The Comma Is a Breathing Space",
        instruction:
          "Commas in a list are like small breathing spaces for the reader. When you read a list sentence aloud, you naturally pause at each comma. That pause tells you where the comma should be. Always READ your list sentences aloud before writing them — your mouth is a great comma detector!",
        suggestions: [
          "Read 3 list sentences aloud from a book — pause at each comma",
          "Write a list sentence and test it by reading aloud — does each comma feel natural?",
          "Find a list sentence without commas and add them based on where you naturally pause",
          "Ask a family member to read your list sentence — did they pause where your commas were?",
        ],
      },
      {
        type: "sorting",
        title: "Sort: How Many Commas Needed?",
        instruction:
          "Sort each sentence by how many commas it needs.",
        parentTip: "Count the items first, then apply the rule: commas = number of items minus 2.",
        columns: ["0 commas", "1 comma", "2 commas", "3 commas"],
        items: [
          { label: "She bought milk and bread." },
          { label: "I saw a dog a cat and a rabbit." },
          { label: "The bag had pens rulers scissors and glue." },
          { label: "He ordered soup and salad." },
          { label: "We packed shoes socks hats and sunscreen." },
          { label: "She can play guitar and piano." },
          { label: "I need flour eggs and milk." },
          { label: "The box held stamps coins notes and receipts." },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Menu Writing",
        instruction:
          "Write an illustrated menu for an imaginary restaurant. Each section of the menu (starters, mains, desserts) must be written as list sentences with correct commas.",
        parentTip: "This is a fun and creative way to practise list punctuation in an authentic context. Display the finished menu on the fridge!",
        suggestions: [
          "Design at least 3 menu sections (e.g. starters, mains, desserts)",
          "Write each section as a list sentence with correct commas",
          "Add prices if you like",
          "Illustrate the menu with pictures of the dishes",
          "Read the menu aloud to your family at dinnertime",
        ],
      },

      // ── DEVELOPING (21–50) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Oxford Comma: What Is It?",
        instruction:
          "The Oxford comma (also called the serial comma) is an OPTIONAL comma placed before 'and' in a list: 'I bought milk, eggs, and bread.' In Australian English it is optional, but consistency is important. Read about it and answer the questions.",
        parentTip: "This is a great conversation about how punctuation rules can vary — even within English-speaking countries.",
        prompts: [
          { text: "Rewrite with an Oxford comma: 'I like cats dogs and birds.'", type: "lines", lines: 1 },
          { text: "Rewrite without an Oxford comma: 'I like cats, dogs, and birds.'", type: "lines", lines: 1 },
          { text: "Which do you prefer and why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Oxford Comma or No Oxford Comma?",
        instruction:
          "Sort each sentence by whether it uses the Oxford comma (comma before the last 'and') or not.",
        parentTip: "Neither is wrong in Australian English — the key is to be consistent.",
        columns: ["Uses Oxford comma", "Does NOT use Oxford comma"],
        items: [
          { label: "I need milk, eggs, and flour." },
          { label: "I need milk, eggs and flour." },
          { label: "She visited Paris, Rome, and London." },
          { label: "She visited Paris, Rome and London." },
          { label: "He likes cats, dogs, and rabbits." },
          { label: "He likes cats, dogs and rabbits." },
        ],
      },
      {
        type: "circle-correct",
        title: "Comma Confusion: When the Comma Changes Everything",
        instruction:
          "Sometimes a missing comma in a list creates a very different meaning. Read each sentence and circle which version is clearer.",
        questions: [
          {
            prompt: "'I invited my parents, the chef and the mayor' vs 'I invited my parents, the chef, and the mayor'",
            options: [
              "First version is clearer",
              "Second version is clearer (avoids suggesting the chef and mayor ARE the parents)",
            ],
          },
          {
            prompt: "'We discussed history, biology and chemistry and maths' vs 'We discussed history, biology, chemistry and maths'",
            options: [
              "First version (vague 'and and')",
              "Second version is clearer",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Commas in Sentences vs Commas in Lists",
        instruction:
          "Commas also appear in sentences for reasons OTHER than lists (e.g. after introductory phrases: 'After school, I played tennis.'). Read these sentences and decide: is each comma used for a LIST or for ANOTHER reason?",
        prompts: [
          { text: "I packed a hat, sunscreen and a towel.  Reason: ___", type: "lines", lines: 1 },
          { text: "After the match, we celebrated with pizza.  Reason: ___", type: "lines", lines: 1 },
          { text: "She ran, hid and waited.  Reason: ___", type: "lines", lines: 1 },
          { text: "Yes, I agree with you completely.  Reason: ___", type: "lines", lines: 1 },
          { text: "We bought bread, milk, eggs and butter.  Reason: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write List Sentences for Different Text Types",
        instruction:
          "Write a list sentence for each text type. Use commas correctly in each.",
        prompts: [
          { text: "Recipe (ingredients): ___", type: "lines", lines: 2 },
          { text: "Recount (things you did): ___", type: "lines", lines: 2 },
          { text: "Informational text (facts): ___", type: "lines", lines: 2 },
          { text: "Narrative (description of a character): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Sentence to Its Error Description",
        instruction:
          "Draw a line to match each incorrect sentence to a description of the error.",
        left: [
          "She packed a hat towel sunscreen and book.",
          "He bought milk, eggs, and, bread.",
          "We saw lions, elephants and, zebras.",
          "I like swimming, cycling and hiking.",
          "She needs flour, eggs butter and milk.",
        ],
        right: [
          "Correct — no error",
          "Missing commas between all items except the last pair",
          "Unnecessary comma before 'and' at the end",
          "Wrong comma placement — comma after 'zebras'",
          "Missing comma after 'eggs'",
        ],
      },
      {
        type: "open-response",
        title: "Create a List Sentence Challenge",
        instruction:
          "Create 4 list sentences (with correct commas) about increasingly complex topics. Start simple and end with your most sophisticated sentence.",
        prompts: [
          { text: "Simple (everyday items): ___", type: "lines", lines: 2 },
          { text: "Medium (activities or places): ___", type: "lines", lines: 2 },
          { text: "More complex (describing things): ___", type: "lines", lines: 2 },
          { text: "Sophisticated (use adjectives in the list): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Error in Each Sentence",
        instruction:
          "Circle YES if the sentence has a comma error, or NO if it is correct.",
        questions: [
          { prompt: "I like reading, drawing, swimming and cooking.", options: ["YES — has an error", "NO — correct"] },
          { prompt: "She bought bread, milk cheese and butter.", options: ["YES — has an error", "NO — correct"] },
          { prompt: "He packed shoes, socks, a hat and sunscreen.", options: ["YES — has an error", "NO — correct"] },
          { prompt: "We saw penguins, seals, dolphins, and, sharks.", options: ["YES — has an error", "NO — correct"] },
          { prompt: "They played soccer, tennis, and basketball.", options: ["YES — has an error", "NO — correct"] },
        ],
      },
      {
        type: "open-response",
        title: "Write Compound List Sentences",
        instruction:
          "A compound list sentence has TWO lists joined by 'and'. Write 3 compound list sentences. For example: 'I bought milk, eggs and bread, and I also found mangoes, peaches and plums.'",
        prompts: [
          { text: "Compound list sentence 1: ___", type: "lines", lines: 2 },
          { text: "Compound list sentence 2: ___", type: "lines", lines: 2 },
          { text: "Compound list sentence 3: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Lists Are Everywhere",
        instruction:
          "Lists appear in almost every type of writing: recipes, instructions, stories, reports, letters, menus, and more. This week, notice every time you see a list in any text. Check: are the commas correct?",
        suggestions: [
          "Find a list in a recipe and check the comma use",
          "Find a list in a story and check the comma use",
          "Find a list on a product label and check the comma use",
          "Write your own list sentence based on something you found",
          "Share a list you found and explain whether it is punctuated correctly",
        ],
      },
      {
        type: "sorting",
        title: "Sort: List Sentences by Text Type",
        instruction:
          "Sort each list sentence into the type of text it most likely comes from.",
        columns: ["Recipe or instructions", "Story or narrative", "Non-fiction report"],
        items: [
          { label: "Add flour, sugar, eggs and butter to the bowl." },
          { label: "She wore a long, tattered, mud-stained coat." },
          { label: "Kangaroos, wallabies, wombats and echidnas are all Australian marsupials." },
          { label: "Stir in the milk, vanilla and a pinch of salt." },
          { label: "The storm brought lightning, thunder, heavy rain and powerful winds." },
          { label: "She grabbed her coat, her keys and her bag before running out the door." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Descriptive List Sentence",
        instruction:
          "Write 3 list sentences that describe a place, person or object. Each list should include descriptive adjectives in the items. For example: 'The garden had tall, swaying eucalypts, a small, bubbling pond and a crumbling, mossy wall.'",
        prompts: [
          { text: "Descriptive list 1 (a place): ___", type: "lines", lines: 2 },
          { text: "Descriptive list 2 (a person's appearance): ___", type: "lines", lines: 2 },
          { text: "Descriptive list 3 (an object's features): ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write a Recount Paragraph With List Sentences",
        instruction:
          "Write a recount paragraph (5–6 sentences) about a trip or outing. Include at least 2 list sentences with correct comma use.",
        prompts: [
          { text: "My recount paragraph:", type: "lines", lines: 7 },
          { text: "List sentences I included: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Comma Rap or Chant",
        instruction:
          "Create a short rap, chant or poem that helps someone remember the comma-in-lists rule. Perform it for your family!",
        parentTip: "Rhythm and rhyme make rules memorable. This is a fun and creative way to consolidate the rule.",
        suggestions: [
          "Write 4–6 lines that explain or demonstrate the comma rule",
          "Include at least one list sentence with correct commas in your rap/chant",
          "Practise it aloud with a rhythm or beat",
          "Perform it for a family member",
          "Write it out neatly and display it near your workspace as a reminder",
        ],
      },

      // ── CONSOLIDATING (51–80) ─────────────────────────────────────
      {
        type: "open-response",
        title: "Edit a Full Paragraph for Comma Errors",
        instruction:
          "This paragraph has 4 comma errors in the list sentences. Find and fix each one. Rewrite the corrected paragraph.\n\nPARAGRAPH: 'Last weekend I went to the farmers' market with Mum Dad and my sister. We bought fresh tomatoes zucchini capsicum and eggplant. I also found some lavender soap peppermint tea and, handmade candles. On the way home, we stopped for coffee bread and fresh orange juice. It was a perfect morning.'",
        prompts: [
          { text: "Errors found: ___", type: "lines", lines: 2 },
          { text: "Corrected paragraph:", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Comma Placement — Before or After 'and'?",
        instruction:
          "In Australian English the comma goes BEFORE every item EXCEPT the last one (which uses 'and'). Sort these sentences.",
        parentTip: "The Oxford comma (before 'and') is optional — focus on avoiding missing commas between items.",
        columns: ["Commas in correct position", "Commas in wrong position"],
        items: [
          { label: "We saw lions, elephants and giraffes." },
          { label: "She brought pencils, rulers, and, scissors." },
          { label: "They packed food, water, sunscreen and hats." },
          { label: "He bought bread and, butter and eggs." },
          { label: "I like maths, science, art and PE." },
          { label: "She plays flute violin, piano and guitar." },
        ],
      },
      {
        type: "circle-correct",
        title: "Advanced: Which Sentence Is More Precise?",
        instruction:
          "Sometimes the Oxford comma changes the meaning. Read each pair and circle the version that is clearer.",
        questions: [
          {
            prompt: "A: 'I thanked my teachers, my parents and my coach.'\nB: 'I thanked my teachers, my parents, and my coach.'",
            options: ["A — both are equally clear", "B — the Oxford comma makes it clearer"],
          },
          {
            prompt: "A: 'The event was organised by the mayor, a celebrity and the community group.'\nB: 'The event was organised by the mayor, a celebrity, and the community group.'",
            options: ["A — both are equally clear", "B — the Oxford comma makes it clearer that these are three separate groups"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write an Informational Paragraph With Three List Sentences",
        instruction:
          "Write an informational paragraph (6–7 sentences) about any Australian animal. Include at least 3 list sentences about: what it eats, where it lives, and its physical features. Use commas correctly in every list.",
        prompts: [
          { text: "Animal chosen: ___", type: "lines", lines: 1 },
          { text: "My informational paragraph:", type: "lines", lines: 8 },
          { text: "List sentences used: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Commas in Lists vs Commas for Other Purposes",
        instruction:
          "Commas have MANY uses in writing — not just in lists. Read each sentence and write what purpose the comma serves.",
        parentTip: "This is an extension question. Discuss: fronted adverbial, direct address, clause separation, etc.",
        prompts: [
          { text: "'After dinner, we played board games.'  Purpose of comma: ___", type: "lines", lines: 1 },
          { text: "'I bought milk, eggs and bread.'  Purpose of comma: ___", type: "lines", lines: 1 },
          { text: "'Sadly, it was too late to change anything.'  Purpose of comma: ___", type: "lines", lines: 1 },
          { text: "'Wait, I need to tell you something!'  Purpose of comma: ___", type: "lines", lines: 1 },
          { text: "'She ran, jumped and skipped all the way home.'  Purpose of comma: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match: List Type to Example Sentence",
        instruction:
          "Draw a line to match each type of list to the sentence that uses it.",
        left: [
          "List of nouns",
          "List of verbs",
          "List of adjectives",
          "List of noun groups",
          "List of adverbs",
        ],
        right: [
          "She ran, jumped, skipped and danced.",
          "He moved carefully, quietly and slowly.",
          "The box held a crumpled letter, an old photograph and a gold coin.",
          "The dress was long, flowing, elegant and pale blue.",
          "We saw dogs, cats, birds and fish.",
        ],
      },
      {
        type: "open-response",
        title: "Write Four Types of List Sentences",
        instruction:
          "Write one list sentence for each type: nouns, verbs, adjectives, and noun groups. Use commas correctly in each.",
        prompts: [
          { text: "List of nouns: ___", type: "lines", lines: 2 },
          { text: "List of verbs: ___", type: "lines", lines: 2 },
          { text: "List of adjectives: ___", type: "lines", lines: 2 },
          { text: "List of noun groups: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Which Commas Are Correct — UK, US or Australian Style?",
        instruction:
          "Different English-speaking countries have slightly different comma rules. In Australian English, the Oxford comma is optional. In US English, it is often required. Sort these sentences.",
        parentTip: "This is an interesting discussion about language variation. There is no 'wrong' answer as long as the style is consistent.",
        columns: ["Uses Oxford comma (US style)", "No Oxford comma (typical Australian style)"],
        items: [
          { label: "I bought milk, eggs, and butter." },
          { label: "I bought milk, eggs and butter." },
          { label: "She likes cats, dogs, and rabbits." },
          { label: "She likes cats, dogs and rabbits." },
          { label: "We visited Paris, London, and Rome." },
          { label: "We visited Paris, London and Rome." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Story Paragraph Rich in List Sentences",
        instruction:
          "Write a story paragraph (6–8 sentences) that uses at least 4 different types of lists (nouns, verbs, adjectives, noun groups). Underline each list and check every comma is correct.",
        prompts: [
          { text: "My story paragraph:", type: "lines", lines: 9 },
          { text: "Types of lists I used: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: Read Lists Aloud — Always",
        instruction:
          "The single best test for comma placement in a list is to read it aloud. Your voice will naturally pause where a comma is needed. If you don't pause between items, you need a comma. If you do pause where a comma already is, it is probably correct. Make reading aloud a habit every time you use a list!",
        suggestions: [
          "Write a list sentence then read it aloud — do you pause at each comma?",
          "Ask a family member to read your list sentence — do they pause at your commas?",
          "Find a list sentence in a book and read it aloud — do the commas feel natural?",
          "Write one list sentence without commas and read it — where do you naturally pause?",
        ],
      },

      // ── EXTENDING (81–100) ────────────────────────────────────────
      {
        type: "open-response",
        title: "Analyse Comma Use in Real Texts",
        instruction:
          "Find 3 list sentences in real texts (books, articles, websites). Copy each one. Identify: are commas used correctly? Does the author use an Oxford comma or not? Is the style consistent?",
        prompts: [
          { text: "Text 1 source: ___  List sentence: ___  Comma analysis: ___", type: "lines", lines: 3 },
          { text: "Text 2 source: ___  List sentence: ___  Comma analysis: ___", type: "lines", lines: 3 },
          { text: "Text 3 source: ___  List sentence: ___  Comma analysis: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Comma Errors by Error Type",
        instruction:
          "Sort each incorrect sentence into the category that describes its specific comma error.",
        parentTip: "Being specific about the type of error builds grammar metalanguage.",
        columns: ["Missing comma(s)", "Extra/unnecessary comma", "Comma in wrong place"],
        items: [
          { label: "She bought milk eggs and bread." },
          { label: "He ate, slowly." },
          { label: "I packed shoes, socks, and, a hat." },
          { label: "We saw cats dogs and rabbits." },
          { label: "She swam, quickly." },
          { label: "They packed food, water sunscreen and hats." },
        ],
      },
      {
        type: "circle-correct",
        title: "Advanced Comma: Lists Within Longer Sentences",
        instruction:
          "Read each complex sentence. Circle the version with correct comma placement throughout.",
        questions: [
          {
            prompt: "Sentence about morning routine:",
            options: [
              "After breakfast, I packed my bag, which included a pencil, ruler, eraser and notebook and left for school.",
              "After breakfast, I packed my bag, which included a pencil, a ruler, an eraser and a notebook, and left for school.",
              "After breakfast I packed my bag which included a pencil, ruler, eraser and notebook, and left for school.",
            ],
          },
          {
            prompt: "Sentence about a garden:",
            options: [
              "The garden had roses lilies and sunflowers growing along the old stone wall.",
              "The garden had roses, lilies and sunflowers growing along the old, stone wall.",
              "The garden had roses, lilies, and sunflowers growing along the old stone wall.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Persuasive Paragraph Using List Sentences",
        instruction:
          "Write a persuasive paragraph (6–7 sentences) about why everyone should eat more fruit and vegetables. Use at least 3 list sentences with correct commas. Include persuasive language.",
        prompts: [
          { text: "My persuasive paragraph:", type: "lines", lines: 8 },
          { text: "List sentences used: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Comma Comparison: Lists in Different Subjects",
        instruction:
          "Write a list sentence for each school subject, using appropriate vocabulary for each.",
        prompts: [
          { text: "Science: ___", type: "lines", lines: 2 },
          { text: "History: ___", type: "lines", lines: 2 },
          { text: "Maths: ___", type: "lines", lines: 2 },
          { text: "Art: ___", type: "lines", lines: 2 },
          { text: "How does the vocabulary change between subjects?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write a Full Essay Opening With Multiple List Sentences",
        instruction:
          "Write an opening paragraph for an essay about a topic you care about. Include at least 3 list sentences. Every comma must be correct. Your opening should hook the reader.",
        prompts: [
          { text: "Essay topic: ___", type: "lines", lines: 1 },
          { text: "My essay opening:", type: "lines", lines: 8 },
          { text: "Number of list sentences: ___  Total commas in lists: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Teach the Comma Rule",
        instruction:
          "Design a mini lesson about commas in lists for a Year 2 student. Include: the rule, 3 examples, 1 common mistake to avoid, and 1 activity.",
        prompts: [
          { text: "The rule (in simple words): ___", type: "lines", lines: 2 },
          { text: "Example 1: ___", type: "lines", lines: 1 },
          { text: "Example 2: ___", type: "lines", lines: 1 },
          { text: "Example 3: ___", type: "lines", lines: 1 },
          { text: "Common mistake to avoid: ___", type: "lines", lines: 2 },
          { text: "Activity for Year 2 student: ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Extended Writing: A Day at the Market",
        instruction:
          "Write a full description of a day at a market (real or imagined) of 10–12 sentences. Use at least 6 list sentences throughout — describing what you saw, smelled, tasted, heard and bought. Every comma must be correct.",
        prompts: [
          { text: "My description:", type: "lines", lines: 14 },
          { text: "Number of list sentences: ___  I checked every comma: YES / NO", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Reflect: What I Know About Commas in Lists",
        instruction:
          "Write a reflection (4–5 sentences) about what you have learned about commas in lists. Include: the rule, when commas are and aren't needed, the Oxford comma debate, and one thing you want to keep practising.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 7 },
        ],
      },
      {
        type: "home-activity",
        title: "Spark: Comma Expert Challenge",
        instruction:
          "Become a comma expert! This week, proofread a piece of writing by a family member (or use a newspaper article) and check every list for correct comma use. Report your findings.",
        parentTip: "Acting as an editor or proofreader is a wonderful way to consolidate grammar knowledge. Children love catching errors that adults make!",
        suggestions: [
          "Find a piece of writing with at least 2 lists in it",
          "Check each list for correct comma placement",
          "Write down any errors you find and the correction",
          "Share your findings with the author — politely!",
          "Reflect: were the commas correct? What did you learn from checking?",
        ],
      },
      {
        type: "circle-correct",
        title: "Comma or No Comma? Short Lists",
        instruction: "Circle the correctly punctuated version of each list sentence.",
        parentTip: "Only 3+ items need commas. Two items just use 'and'.",
        questions: [
          {
            prompt: "A) I have a cat, and a dog. B) I have a cat and a dog.",
            options: ["A", "B"],
          },
          {
            prompt: "A) She likes swimming, running, and cycling. B) She likes swimming running and cycling.",
            options: ["A", "B"],
          },
          {
            prompt: "A) He ate toast and eggs. B) He ate toast, and eggs.",
            options: ["A", "B"],
          },
          {
            prompt: "A) We need apples oranges bananas and grapes. B) We need apples, oranges, bananas and grapes.",
            options: ["A", "B"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Comma List or No Comma Needed",
        instruction: "Sort these sentences into those that NEED commas in a list and those that DO NOT.",
        columns: ["Needs commas (3+ items)", "No commas needed (only 2 items)"],
        items: [
          { label: "I packed my bag with books, pens, a lunchbox and sunscreen." },
          { label: "She and her brother went to the park." },
          { label: "The garden had roses, daisies, lavender and sunflowers." },
          { label: "He wore a hat and sunglasses." },
          { label: "We visited the market, the museum, the beach and the gardens." },
          { label: "Cats and dogs make great pets." },
          { label: "The recipe needs flour, sugar, eggs and butter." },
          { label: "She chose red and blue." },
        ],
      },
      {
        type: "matching",
        title: "Match: List Sentence to Missing Comma Count",
        instruction: "Draw a line from each sentence to how many commas are MISSING.",
        left: [
          "We saw lions tigers elephants and giraffes.",
          "I need a pencil an eraser and some paper.",
          "She is kind funny smart and generous.",
          "He likes pasta pizza and salad.",
          "They brought towels sunscreen hats shoes and water bottles.",
        ],
        right: [
          "1 comma missing",
          "2 commas missing",
          "2 commas missing",
          "3 commas missing",
          "4 commas missing",
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own List Sentences",
        instruction:
          "Write 5 original sentences that each contain a list of 4 or more items. Use commas correctly in all of them.",
        parentTip: "Encourage your child to choose specific, interesting items rather than vague ones (e.g. 'glistening seashells' not just 'shells').",
        prompts: [
          { text: "1. ___", type: "lines", lines: 1 },
          { text: "2. ___", type: "lines", lines: 1 },
          { text: "3. ___", type: "lines", lines: 1 },
          { text: "4. ___", type: "lines", lines: 1 },
          { text: "5. ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Comma Error",
        instruction: "Circle the sentence in each pair that has a comma error.",
        questions: [
          {
            prompt: "A) I bought apples, oranges, and pears. B) I bought apples oranges, and pears.",
            options: ["A (has error)", "B (has error)"],
          },
          {
            prompt: "A) She packed a tent, a sleeping bag, food and water. B) She packed a tent a sleeping bag food and water.",
            options: ["A (has error)", "B (has error)"],
          },
          {
            prompt: "A) He is tall, kind, smart, and funny. B) He is tall kind smart and funny.",
            options: ["A (has error)", "B (has error)"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: List Types — Things, Actions, Adjectives",
        instruction: "These sentences have different types of lists. Sort them by what is being listed.",
        columns: ["List of things (nouns)", "List of actions (verbs)", "List of describing words (adjectives)"],
        items: [
          { label: "She swam, ran, cycled and skipped." },
          { label: "The puppy was small, fluffy, energetic and adorable." },
          { label: "We packed sandwiches, fruit, water and sunscreen." },
          { label: "He jumped, twisted, landed and bowed." },
          { label: "The sky was dark, stormy, grey and threatening." },
          { label: "I need eggs, milk, cheese and butter." },
        ],
      },
      {
        type: "open-response",
        title: "Commas in Lists: Proofreading Practice",
        instruction:
          "Rewrite this paragraph with all list commas added correctly: 'On the weekend we went to the market. We bought strawberries blueberries mangoes and grapes. We also found some old books a candle a small painting and a set of wooden spoons. It was a wonderful sunny busy morning.'",
        prompts: [
          { text: "My corrected paragraph:", type: "lines", lines: 6 },
          { text: "Commas I added: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sequence",
        title: "Order: Putting a List in a Sentence Correctly",
        instruction: "Put these words in the right order to form a correct list sentence with commas.",
        items: [
          { label: "We" },
          { label: "visited" },
          { label: "the museum," },
          { label: "the park," },
          { label: "the library" },
          { label: "and the aquarium." },
        ],
      },
      {
        type: "home-activity",
        title: "Tip: The 'And Test' for Commas",
        instruction:
          "Teach your child the 'And Test': wherever you need a comma in a list, you COULD put 'and' instead. If 'and' would work, a comma goes there. The last item gets the actual 'and'.",
        parentTip: "The 'And Test' is a practical heuristic that helps children self-correct. Practise it with shopping lists or packing lists.",
        suggestions: [
          "Write a list of 5 things without any commas",
          "Read it aloud — where would you say 'and'?",
          "Replace all 'ands' except the last with commas",
          "Read it again — does it flow correctly?",
          "Check the rule: comma between each item, 'and' before the last",
        ],
      },
      {
        type: "matching",
        title: "Match: Sentence to Comma Rule It Follows",
        instruction: "Draw a line from each sentence to the comma rule it demonstrates.",
        left: [
          "She bought apples and oranges.",
          "She bought apples, oranges and bananas.",
          "She bought apples, oranges, bananas and grapes.",
          "She was tired, hungry, cold and wet.",
          "She swam and rested.",
        ],
        right: [
          "2 items — no comma needed",
          "3 items — 1 comma before middle item",
          "4 items — 2 commas between first three items",
          "4 adjectives — commas between each",
          "2 verbs — no comma needed",
        ],
      },
      {
        type: "open-response",
        title: "List Poem: Using Commas for Effect",
        instruction:
          "Write a 'list poem' about your favourite place, favourite things, or favourite people. Each line should be a list using commas correctly. Aim for 5–6 lines.",
        parentTip: "List poems are a beautiful way to practise comma use while writing creatively. They work best when the items are specific and vivid.",
        prompts: [
          { text: "My list poem title: ___", type: "lines", lines: 1 },
          { text: "My list poem:", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Oxford Comma: Include or Leave Out?",
        instruction: "The Oxford comma comes before 'and' in the final item (e.g. 'red, white, and blue'). Circle the version with the Oxford comma.",
        parentTip: "The Oxford comma is optional in Australian English. What matters most is consistency. Discuss both versions.",
        questions: [
          {
            prompt: "A) I like cats, dogs and rabbits. B) I like cats, dogs, and rabbits.",
            options: ["A (no Oxford comma)", "B (Oxford comma)"],
          },
          {
            prompt: "A) She packed a hat, sunscreen, and water. B) She packed a hat, sunscreen and water.",
            options: ["A (Oxford comma)", "B (no Oxford comma)"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Well-Punctuated vs Poorly-Punctuated Lists",
        instruction: "Sort these sentences into CORRECT comma use or INCORRECT comma use.",
        columns: ["Correct", "Incorrect"],
        items: [
          { label: "We saw monkeys, parrots, turtles and snakes." },
          { label: "She is kind funny smart and thoughtful." },
          { label: "He brought his bat, ball, helmet and gloves." },
          { label: "They cooked pasta rice, vegetables and soup." },
          { label: "I packed towels, sunscreen, a hat and water." },
          { label: "The colours were red orange, yellow and green." },
          { label: "She laughed, sang, danced and clapped." },
          { label: "We tried pizza tacos, sushi and dumplings." },
        ],
      },
      {
        type: "open-response",
        title: "Write: Description of a Scene Using Comma Lists",
        instruction:
          "Write a description of a busy place (market, beach, classroom, park) using at least three list sentences with commas. Try to use lists of nouns, adjectives, and actions.",
        parentTip: "Using comma lists in descriptions is a mark of a skilled writer. Encourage your child to 'zoom in' on specific, sensory details.",
        prompts: [
          { text: "My place: ___", type: "lines", lines: 1 },
          { text: "My description with comma lists:", type: "lines", lines: 6 },
          { text: "List sentences I wrote: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Comma List in Context: Which Version is Correct?",
        instruction: "Circle the correctly punctuated version of each sentence.",
        questions: [
          {
            prompt: "A) The bag contained books, pens, a lunchbox, and a water bottle. B) The bag contained books pens a lunchbox and a water bottle.",
            options: ["A", "B"],
          },
          {
            prompt: "A) She danced, sang, acted and painted. B) She danced sang acted and painted.",
            options: ["A", "B"],
          },
          {
            prompt: "A) He was tall, dark, handsome and mysterious. B) He was tall dark, handsome, and mysterious.",
            options: ["A", "B"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Comma List Writing Challenge",
        instruction:
          "Write 5 comma list sentences about your home. Each sentence must have 4 or more items. Read them aloud to check the commas create good rhythm.",
        parentTip: "Reading aloud is the best way to check comma placement — a missing comma often makes the sentence sound rushed.",
        suggestions: [
          "List things in your kitchen",
          "List things you see from your window",
          "List activities you do at home",
          "List colours in your bedroom",
          "List people / pets / things you love",
        ],
      },
      {
        type: "open-response",
        title: "Commas in Lists: Compare Your Writing Before and After",
        instruction:
          "Find a piece of your old writing that contains lists. Count the commas. Now rewrite the list sentences with correct commas. Compare the two versions.",
        prompts: [
          { text: "Original list sentence(s) (from my old writing): ___", type: "lines", lines: 3 },
          { text: "Corrected version: ___", type: "lines", lines: 3 },
          { text: "What I fixed: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match: Comma Error to the Correction",
        instruction: "Draw a line from each comma error to its corrected version.",
        left: [
          "I need eggs milk and butter.",
          "She likes, cats and dogs.",
          "He brought his hat sunscreen and towel.",
          "They visited Paris London Rome and Madrid.",
          "We ate pizza pasta, salad and dessert.",
        ],
        right: [
          "She likes cats and dogs.",
          "He brought his hat, sunscreen and towel.",
          "I need eggs, milk and butter.",
          "They visited Paris, London, Rome and Madrid.",
          "We ate pizza, pasta, salad and dessert.",
        ],
      },
      {
        type: "circle-correct",
        title: "Commas in Lists: Formal or Informal Writing?",
        instruction: "Commas in lists are used in both formal and informal writing. Circle whether each text type WOULD or WOULD NOT typically contain list sentences with commas.",
        questions: [
          { prompt: "A personal letter to a friend", options: ["would", "would not"] },
          { prompt: "A scientific report", options: ["would", "would not"] },
          { prompt: "A shopping list (with commas in prose form)", options: ["would", "would not"] },
          { prompt: "A news article listing facts", options: ["would", "would not"] },
          { prompt: "A persuasive essay listing evidence", options: ["would", "would not"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Comma Use — List or Not a List?",
        instruction: "Commas have many uses. Sort these comma examples into LIST commas vs OTHER commas.",
        columns: ["List comma", "Other comma use"],
        items: [
          { label: "I bought apples, oranges and bananas." },
          { label: "After dinner, we went for a walk." },
          { label: "She was tired, hungry and cold." },
          { label: "Yes, I would love to come." },
          { label: "The garden had roses, daisies and lavender." },
          { label: "However, the plan changed." },
          { label: "He ran, jumped and landed perfectly." },
          { label: "On Monday, school starts at nine." },
        ],
      },
      {
        type: "sequence",
        title: "Order: Editing a Sentence for Commas",
        instruction: "Put these editing steps in order to fix the commas in a list sentence.",
        items: [
          { label: "Read the sentence and identify all the items in the list" },
          { label: "Count: are there 3 or more items?" },
          { label: "Add a comma after each item except the last two" },
          { label: "Check: is 'and' before the last item?" },
          { label: "Read the sentence aloud to check it sounds right" },
        ],
      },
      {
        type: "open-response",
        title: "Commas in Lists: Teach the Rule",
        instruction:
          "Write a clear explanation of comma rules in lists for a student who has never learned this. Include: when commas are used, when they are not, an example with correct commas, and one common mistake to avoid.",
        parentTip: "Explaining a rule in your own words is one of the strongest ways to consolidate understanding.",
        prompts: [
          { text: "When to use commas in lists: ___", type: "lines", lines: 2 },
          { text: "When NOT to use commas: ___", type: "lines", lines: 2 },
          { text: "My example sentence with correct commas: ___", type: "lines", lines: 1 },
          { text: "The most common mistake: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Comma List Book Search",
        instruction:
          "Open any book and find 5 sentences that contain lists. Copy them down. Check: do they all use commas correctly? Write a sentence about what you found.",
        parentTip: "Books are full of list sentences. This activity shows children that commas in lists are a real, important convention — not just a worksheet exercise.",
        suggestions: [
          "Open any book you enjoy",
          "Find 5 list sentences and copy them",
          "Check each one for correct comma placement",
          "Note: did any have the Oxford comma?",
          "Write 1–2 sentences about what you found",
        ],
      },
      {
        type: "open-response",
        title: "Comma Lists: Final Self-Assessment",
        instruction:
          "Write a paragraph reflecting on your comma-in-lists knowledge. Include: what you know well, what was confusing, and what you will do differently in your future writing.",
        prompts: [
          { text: "What I know well about commas in lists: ___", type: "lines", lines: 2 },
          { text: "What was confusing or tricky: ___", type: "lines", lines: 2 },
          { text: "What I will do differently in my writing: ___", type: "lines", lines: 2 },
          { text: "One piece of advice for a friend learning this: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Spark: Comma List Masterpiece",
        instruction:
          "Write the best piece of prose you can (8–10 sentences) that uses comma lists in a rich, creative way. It can be a description, a story opening, or a poem. Every list must be punctuated perfectly.",
        parentTip: "This culminating task invites your child to show everything they know. Praise ambition and creativity as well as accuracy.",
        prompts: [
          { text: "My topic / genre: ___", type: "lines", lines: 1 },
          { text: "My masterpiece:", type: "lines", lines: 10 },
          { text: "List sentences I'm most proud of: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Comma Lists in Published Writing: Correct?",
        instruction: "In these made-up 'published' sentences, circle CORRECT or INCORRECT for the comma use.",
        questions: [
          { prompt: "The market was full of spices, silks, lanterns and laughter.", options: ["correct", "incorrect"] },
          { prompt: "She gathered her courage her bag and her best friend.", options: ["correct", "incorrect"] },
          { prompt: "He was kind, patient, wise and deeply loved by everyone.", options: ["correct", "incorrect"] },
          { prompt: "We ate noodles dumplings, rice and vegetables.", options: ["correct", "incorrect"] },
          { prompt: "The river ran cold, clear and fast over the smooth grey stones.", options: ["correct", "incorrect"] },
        ],
      },
      {
        type: "open-response",
        title: "Comma Lists: Write a Vivid Setting Description",
        instruction:
          "Write a 4–5 sentence description of a setting using at least 3 list sentences with commas. Try to use lists of: sights, sounds, and feelings.",
        parentTip: "Sensory lists are a powerful descriptive technique. Encourage your child to think about each sense separately.",
        prompts: [
          { text: "Setting: ___", type: "lines", lines: 1 },
          { text: "Sight list: ___", type: "lines", lines: 1 },
          { text: "Sound list: ___", type: "lines", lines: 1 },
          { text: "Feeling / touch list: ___", type: "lines", lines: 1 },
          { text: "Full description combining all three: ___", type: "lines", lines: 4 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Lists That Need Commas vs Lists That Are Just Two Items",
        instruction: "Sort these into lists that NEED commas and lists that DO NOT (only two items).",
        columns: ["Needs commas (3+ items)", "No commas needed (2 items only)"],
        items: [
          { label: "cats and dogs" },
          { label: "apples, oranges, pears and grapes" },
          { label: "sunny and warm" },
          { label: "brave, kind, clever and funny" },
          { label: "bread and butter" },
          { label: "ran, jumped and spun" },
          { label: "tall and quiet" },
          { label: "red, orange, yellow and green" },
        ],
      },
      {
        type: "matching",
        title: "Match: List Sentence to the Number of Commas It Needs",
        instruction: "Draw a line from each sentence to the number of commas it needs.",
        left: [
          "She bought bread and milk.",
          "He packed a hat, sunscreen and water.",
          "They visited Rome, Paris and London.",
          "We need eggs, flour, butter and sugar.",
          "The sky was blue, pink, orange, purple and gold.",
        ],
        right: [
          "0 commas",
          "1 comma",
          "1 comma",
          "2 commas",
          "4 commas",
        ],
      },
      {
        type: "open-response",
        title: "Comma List Rewrite Challenge",
        instruction:
          "Rewrite these list sentences by adding more interesting, specific items — and make sure the commas are perfect: 1) 'She ate fruit and food.' 2) 'He saw animals at the zoo.' 3) 'I did activities on the weekend.'",
        parentTip: "Replacing vague words with specific ones is a key vocabulary-building and editing skill.",
        prompts: [
          { text: "Better version of 1: ___", type: "lines", lines: 1 },
          { text: "Better version of 2: ___", type: "lines", lines: 1 },
          { text: "Better version of 3: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Comma List Writing: Real-Life Application",
        instruction:
          "Write a real shopping list as a series of sentences with commas. For example: 'From the fruit section, we need apples, bananas, mangoes and grapes.' Write at least 4 shopping list sentences.",
        parentTip: "Shopping lists as comma list sentences is an authentic real-world application of this grammar skill.",
        suggestions: [
          "Choose a real upcoming shopping trip",
          "Write each section of the shop as a list sentence",
          "Use correct commas in each sentence",
          "Check: does each sentence have 'and' before the last item?",
          "Read the sentences aloud — does it sound right?",
        ],
      },
      {
        type: "circle-correct",
        title: "Comma Before 'And': Needed or Not?",
        instruction: "In Australian English, the Oxford comma (before 'and') is optional. But commas BETWEEN items are required. Circle which version is CLEARER.",
        questions: [
          {
            prompt: "A) We invited the politicians, the teachers and the students. B) We invited the politicians, the teachers, and the students.",
            options: ["A (no Oxford comma)", "B (Oxford comma)", "both are correct"],
          },
          {
            prompt: "A) She cooked pasta, salad and dessert. B) She cooked pasta salad and dessert.",
            options: ["A (commas between items)", "B (no commas)", "both are correct"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Comma Lists in My Writing: Before and After",
        instruction:
          "Find a paragraph you have written recently (or write one now without paying attention to commas). Then edit it to add correct commas to every list. Compare the before and after versions.",
        prompts: [
          { text: "Before (my original paragraph): ___", type: "lines", lines: 4 },
          { text: "After (with correct comma lists): ___", type: "lines", lines: 4 },
          { text: "What I fixed: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sequence",
        title: "Order: Improving a Sentence with a Comma List",
        instruction: "Put these steps in order to improve a plain sentence by adding a comma list.",
        items: [
          { label: "Read the original plain sentence" },
          { label: "Identify the noun or verb that could have more detail" },
          { label: "Brainstorm 4+ specific words to list" },
          { label: "Write the list with commas between items" },
          { label: "Add 'and' before the final item" },
          { label: "Read the improved sentence aloud" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Comma List Types in Different Writing Styles",
        instruction: "Sort these list sentences by the writing style they suit best.",
        columns: ["Creative / narrative writing", "Factual / information writing", "Persuasive / argument writing"],
        items: [
          { label: "The sea was silver, cold, endless and wild." },
          { label: "Whales are found in the Pacific, Atlantic, Indian and Southern oceans." },
          { label: "Students should have access to art, music, sport and technology." },
          { label: "She laughed, cried, gasped and sighed all in one minute." },
          { label: "The report covered health, education, housing and transport." },
          { label: "Our school offers sustainability, innovation, creativity and teamwork." },
        ],
      },
      {
        type: "open-response",
        title: "Comma Lists: Teach the Rule Using Your Own Examples",
        instruction:
          "Create 5 original list sentences (one of each type: nouns, adjectives, verbs, places, feelings). Make sure every comma is in the right place. Then write ONE rule about commas in lists in your own words.",
        prompts: [
          { text: "Noun list: ___", type: "lines", lines: 1 },
          { text: "Adjective list: ___", type: "lines", lines: 1 },
          { text: "Verb list: ___", type: "lines", lines: 1 },
          { text: "Place list: ___", type: "lines", lines: 1 },
          { text: "Feeling list: ___", type: "lines", lines: 1 },
          { text: "My comma-in-lists rule in my own words: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Comma Lists: Write a List Poem About Yourself",
        instruction:
          "Write a 'list poem' about yourself using 6 or more list sentences with commas. Each line should reveal something interesting about you — your loves, your skills, your memories, your dreams.",
        parentTip: "List poems about self are a beautiful combination of literacy and identity. Display the finished poem.",
        prompts: [
          { text: "My list poem title: ___", type: "lines", lines: 1 },
          { text: "My poem:", type: "lines", lines: 8 },
          { text: "Comma lists in my poem: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Comma List Challenge: One Week of List Sentences",
        instruction:
          "Each day this week, write ONE list sentence about something from your day. Make sure every comma is correct. By Friday, you will have 5 perfectly written list sentences.",
        parentTip: "Daily short tasks build habits more effectively than one long task. This 5-minute daily activity is excellent for consolidation.",
        suggestions: [
          "Monday: List 4 things you saw today",
          "Tuesday: List 4 things you did today",
          "Wednesday: List 4 adjectives describing how you felt today",
          "Thursday: List 4 places you went (real or imaginary)",
          "Friday: Write your favourite list sentence of the week and explain why",
        ],
      },
      {
        type: "open-response",
        title: "Commas in Lists: Final Mastery Reflection",
        instruction:
          "Write a final reflection on what you have learned about using commas in lists. What do you know confidently? What still trips you up? What will you do differently in your writing?",
        prompts: [
          { text: "What I understand confidently about list commas: ___", type: "lines", lines: 2 },
          { text: "What still trips me up: ___", type: "lines", lines: 2 },
          { text: "How I will apply this in my writing: ___", type: "lines", lines: 2 },
          { text: "My advice to someone just learning this rule: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Spark: Comma List Creative Challenge — No Verbs Allowed",
        instruction:
          "Write a paragraph describing any scene using ONLY noun groups and comma lists — no action verbs at all. This is extremely difficult and forces creative precision.",
        parentTip: "This advanced creative constraint is inspired by the work of Robbe-Grillet and other writers who use lists of things to create atmosphere. It is genuinely challenging — celebrate the attempt.",
        prompts: [
          { text: "My scene (noun-only, list-heavy paragraph):", type: "lines", lines: 6 },
          { text: "What I found difficult or interesting about this: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Commas in Lists: Grand Final — Show What You Know",
        instruction:
          "Write a final paragraph (6–8 sentences) that brings together everything you know about commas in lists. Use at least 4 list sentences of different types (nouns, verbs, adjectives, and phrases). Every comma must be perfect.",
        parentTip: "This culminating task asks the child to demonstrate mastery independently. Celebrate the achievement of completing all 100 activities.",
        prompts: [
          { text: "My final paragraph:", type: "lines", lines: 8 },
          { text: "Types of lists I used (nouns, verbs, adjectives, phrases): ___", type: "lines", lines: 2 },
          { text: "I am proud of this because: ___", type: "lines", lines: 2 },
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
