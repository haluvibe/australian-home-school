import type { WorksheetItem } from "./worksheet-types";

export const year2EnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Long Vowel Patterns ──────────────────────────────────
  {
    slug: "long-vowel-patterns",
    title: "Long Vowel Patterns",
    strand: "Language",
    description:
      "Explore common long vowel spelling patterns (ai, ee, oa, ue) through sorting and reading activities.",
    learningGuide: {
      concept:
        "Long vowels say their own name. The 'ai' pattern makes the /ay/ sound (rain), 'ee' makes /ee/ (tree), 'oa' makes /oh/ (boat), and 'ue' makes /yoo/ (blue).",
      activation:
        "Ask your child to say the word 'rain' slowly. Can they hear the long /ay/ sound? Now try 'tree', 'boat' and 'blue'. What do they notice about these sounds?",
      check:
        "Can your child read and sort the words correctly? Can they think of one more word for each vowel pattern without being prompted?",
    },
    lesson: {
      title: "The Long Vowel Hunt",
      objective:
        "Recognise and read words with the ai, ee, oa and ue long vowel patterns.",
      materials: [
        "Paper and pencil",
        "Index cards or small pieces of paper",
        "A simple picture book from your shelf",
        "Coloured pencils (optional)",
      ],
      intro: {
        title: "Say the Sound",
        script:
          "Let's play a little sound game! I am going to say a word, and I want you to tell me what the vowel sound is in the middle. Ready? Rain. What sound do you hear in the middle? Yes — it sounds like the letter A saying its own name! We call that a long vowel sound. Today we are going to look at four special spelling patterns that all make long vowel sounds.",
        action:
          "Say 'rain', 'tree', 'boat' and 'blue' one at a time. For each word, help your child identify the long vowel sound they hear. Write the four patterns on a piece of paper: ai, ee, oa, ue.",
      },
      mainActivity: {
        title: "Word Sort Cards",
        script:
          "I am going to write some words on these little cards, and your job is to sort them into four piles — one for each vowel pattern. When you pick up a card, say the word out loud first. Which sound do you hear? Which pattern matches it?",
        action:
          "Write each of these words on separate cards: rain, tail, sail, pain / bee, see, feet, keep / road, coat, toad, foam / blue, true, clue, glue. Mix them up and let your child sort them into the four pattern groups. Read each word together after sorting.",
      },
      wrapUp: {
        title: "Find It in a Book",
        script:
          "Now let's go on a word hunt! Open one of your books and see if you can spot any words with our long vowel patterns. Point to the word, read it out loud, and tell me which pattern it has.",
        action:
          "Spend 3-4 minutes flipping through a picture book together. Your child points to long-vowel words. Celebrate each find enthusiastically.",
      },
      parentTip:
        "It is completely normal for children to mix up vowel patterns at this stage — for example writing 'rane' instead of 'rain'. The goal right now is to build pattern awareness, not perfect spelling. Praise the logic behind any attempt ('You remembered it needed a vowel team — great thinking!'). With regular practice, the correct patterns will stick.",
      extension:
        "Challenge your child to write a silly 4-line poem using one word from each vowel pattern group. For example: 'I saw a toad on the road / He wore a coat and a big hat of blue / He jumped in the rain with a squeal and a pain / And hid in a tree where no one could see!' Rhyme and rhythm make the patterns memorable.",
      resources: [
        {
          title: "Long Vowel Vowel Teams",
          url: "https://www.starfall.com/h/holiday/vowels/?sn=main",
          description:
            "Interactive Starfall activities that let children practise long vowel teams with audio support.",
        },
        {
          title: "Phonics — Long Vowel Sounds",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description:
            "ABC Education sounds and letters resource to reinforce vowel sound recognition.",
        },
        {
          title: "Second Grade Reading — Phonics",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description:
            "Khan Academy reading activities for Year 2 / Grade 2 level.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      // 1
      {
        type: "sorting",
        title: "Sort the Long Vowel Words (Set A)",
        instruction: "Read each word. Write it in the correct column to match its long vowel pattern.",
        parentTip: "Say each word aloud before deciding — hearing the sound helps more than looking at the letters alone.",
        columns: ["ai", "ee", "oa", "ue"],
        items: [
          { label: "rain" }, { label: "tree" }, { label: "boat" }, { label: "blue" },
          { label: "tail" }, { label: "feet" }, { label: "coat" }, { label: "clue" },
          { label: "sail" }, { label: "keep" }, { label: "road" }, { label: "true" },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Match the Rhyming Words (ai and ee)",
        instruction: "Draw a line from each word on the left to the word it rhymes with on the right.",
        parentTip: "Encourage your child to say both words aloud to hear the rhyme.",
        left: ["rain", "tail", "tree", "feet"],
        right: ["free", "meet", "train", "mail"],
      },
      // 3
      {
        type: "circle-correct",
        title: "Which Spelling Is Right? (Set A)",
        instruction: "Circle the correctly spelled word in each row.",
        parentTip: "If your child is unsure, write both options and ask which looks more familiar from their reading.",
        questions: [
          { prompt: "The sky is clear after the ___.", options: ["rayn", "rain", "rane"] },
          { prompt: "She climbed up the ___.", options: ["tree", "trea", "trie"] },
          { prompt: "We sailed in a ___.", options: ["bote", "boet", "boat"] },
          { prompt: "The sky is ___.", options: ["blew", "blue", "bloo"] },
        ],
      },
      // 4
      {
        type: "sorting",
        title: "Sort the Long Vowel Words (Set B)",
        instruction: "Sort these words into the correct vowel pattern column.",
        parentTip: "Cover the word, say it aloud, then uncover and check the pattern.",
        columns: ["ai", "ee", "oa", "ue"],
        items: [
          { label: "pain" }, { label: "seed" }, { label: "foam" }, { label: "glue" },
          { label: "wait" }, { label: "heel" }, { label: "toad" }, { label: "due" },
          { label: "braid" }, { label: "queen" }, { label: "loan" }, { label: "argue" },
        ],
      },
      // 5
      {
        type: "matching",
        title: "Match the Rhyming Words (oa and ue)",
        instruction: "Draw a line from each word to the word it rhymes with.",
        left: ["boat", "road", "blue", "true"],
        right: ["clue", "toad", "coat", "flew"],
      },
      // 6
      {
        type: "circle-correct",
        title: "Spot the ai Word",
        instruction: "Circle the word in each row that has the 'ai' spelling pattern.",
        questions: [
          { prompt: "Row 1", options: ["pan", "rain", "ran"] },
          { prompt: "Row 2", options: ["mail", "mile", "mill"] },
          { prompt: "Row 3", options: ["paid", "pad", "pod"] },
          { prompt: "Row 4", options: ["tail", "till", "tall"] },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "Spot the ee Word",
        instruction: "Circle the word in each row that has the 'ee' spelling pattern.",
        parentTip: "The 'ee' pattern usually appears in the middle of the word.",
        questions: [
          { prompt: "Row 1", options: ["bed", "feed", "fed"] },
          { prompt: "Row 2", options: ["met", "meet", "mat"] },
          { prompt: "Row 3", options: ["seek", "sick", "sock"] },
          { prompt: "Row 4", options: ["weed", "wed", "wade"] },
        ],
      },
      // 8
      {
        type: "fill-in-blank",
        title: "Fill in the Long Vowel Word (ai)",
        instruction: "Choose the correct 'ai' word from the box to complete each sentence. Words: rain, tail, sail, pain, wait, mail.",
        parentTip: "Read the full sentence first, then decide which word fits best.",
        sentences: [
          { text: "The dog wagged its ___.", blanks: ["tail"] },
          { text: "We had to ___ for the bus.", blanks: ["wait"] },
          { text: "It started to ___ this morning.", blanks: ["rain"] },
          { text: "The letter came in the ___.", blanks: ["mail"] },
        ],
      },
      // 9
      {
        type: "fill-in-blank",
        title: "Fill in the Long Vowel Word (ee)",
        instruction: "Choose the correct 'ee' word from the box to complete each sentence. Words: feet, tree, seed, keep, bee, see.",
        sentences: [
          { text: "A ___ flew around the flowers.", blanks: ["bee"] },
          { text: "She planted a ___ in the garden.", blanks: ["seed"] },
          { text: "I can ___ the mountains from here.", blanks: ["see"] },
          { text: "My ___ hurt after the long walk.", blanks: ["feet"] },
        ],
      },
      // 10
      {
        type: "fill-in-blank",
        title: "Fill in the Long Vowel Word (oa and ue)",
        instruction: "Choose the correct word from the box: road, coat, glue, blue, toad, true.",
        parentTip: "If unsure, try saying each option aloud in the sentence.",
        sentences: [
          { text: "He wore his warm ___ outside.", blanks: ["coat"] },
          { text: "The frog sat on a log like a ___.", blanks: ["toad"] },
          { text: "Stick the pieces together with ___.", blanks: ["glue"] },
          { text: "The sky is bright ___.", blanks: ["blue"] },
        ],
      },
      // 11
      {
        type: "true-false",
        title: "Long Vowel True or False?",
        instruction: "Read each statement. Circle TRUE or FALSE.",
        parentTip: "Say the word aloud before deciding — the sound is the clue.",
        statements: [
          { text: "The word 'rain' has the 'ai' pattern.", answer: true },
          { text: "The word 'boat' has the 'ee' pattern.", answer: false },
          { text: "The word 'blue' has the 'ue' pattern.", answer: true },
          { text: "The word 'tree' has the 'oa' pattern.", answer: false },
          { text: "The word 'feet' has the 'ee' pattern.", answer: true },
          { text: "The word 'sail' has the 'oa' pattern.", answer: false },
        ],
      },
      // 12
      {
        type: "sorting",
        title: "Real Word or Made-Up Word?",
        instruction: "Read each word. Sort it into 'Real Word' or 'Nonsense Word'.",
        parentTip: "Made-up words that still use the right patterns are fine — this builds decoding confidence.",
        columns: ["Real Word", "Nonsense Word"],
        items: [
          { label: "rain" }, { label: "daim" }, { label: "tree" }, { label: "feep" },
          { label: "boat" }, { label: "gloat" }, { label: "blue" }, { label: "flue" },
        ],
      },
      // 13
      {
        type: "multiple-choice",
        title: "Which Pattern Makes the Sound? (Set A)",
        instruction: "Choose the correct long vowel pattern that makes the sound in each word.",
        questions: [
          { prompt: "The word 'train' uses which pattern?", options: ["ai", "ee", "oa", "ue"] },
          { prompt: "The word 'queen' uses which pattern?", options: ["ai", "ee", "oa", "ue"] },
          { prompt: "The word 'foam' uses which pattern?", options: ["ai", "ee", "oa", "ue"] },
          { prompt: "The word 'clue' uses which pattern?", options: ["ai", "ee", "oa", "ue"] },
        ],
      },
      // 14
      {
        type: "matching",
        title: "Word to Pattern Match",
        instruction: "Draw a line from each word to its long vowel pattern.",
        left: ["snail", "sheep", "groan", "argue"],
        right: ["ee", "oa", "ue", "ai"],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: Two Vowels Together",
        content: "When two vowels appear side by side in a word, the first one usually says its name and the second is silent. 'ai' — the A says its name. 'oa' — the O says its name. 'ee' — the first E says its name. This is sometimes called the 'vowel team' rule.",
      },
      // 16
      {
        type: "open-response",
        title: "Write Your Own Words (ai and ee)",
        instruction: "Think of one more word for each pattern and write a sentence using it.",
        parentTip: "Suggest thinking of a rhyme for a known word if your child is stuck.",
        prompts: [
          { text: "Write one more 'ai' word: ___. Now write a sentence using it.", type: "lines", lines: 2 },
          { text: "Write one more 'ee' word: ___. Now write a sentence using it.", type: "lines", lines: 2 },
        ],
      },
      // 17
      {
        type: "open-response",
        title: "Write Your Own Words (oa and ue)",
        instruction: "Think of one more word for each pattern and write a sentence using it.",
        prompts: [
          { text: "Write one more 'oa' word: ___. Now write a sentence using it.", type: "lines", lines: 2 },
          { text: "Write one more 'ue' word: ___. Now write a sentence using it.", type: "lines", lines: 2 },
        ],
      },
      // 18
      {
        type: "sequence",
        title: "Alphabetical Order: Long Vowel Words",
        instruction: "Put these 'ai' words in alphabetical order by numbering them 1–5.",
        parentTip: "Look at the first letter of each word. If the first letters match, look at the second letter.",
        items: [
          { label: "sail" }, { label: "mail" }, { label: "rain" }, { label: "tail" }, { label: "pain" },
        ],
      },
      // 19
      {
        type: "circle-correct",
        title: "Which Spelling Is Right? (Set B)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "She wore a warm ___.", options: ["coet", "coat", "cote"] },
          { prompt: "The ___ buzzes around the flowers.", options: ["bea", "bie", "bee"] },
          { prompt: "I need some ___ for my project.", options: ["glue", "gloo", "glew"] },
          { prompt: "He walked down the long ___.", options: ["rode", "road", "roed"] },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Long Vowel Poem",
        content: "Write a 4-line poem where each line ends with a long vowel word. Try to use one 'ai', one 'ee', one 'oa' and one 'ue' word as your rhyming endings. Read it aloud to someone at home!",
      },
      // ── DEVELOPING (21–50) ────────────────────────────────────────
      // 21
      {
        type: "sorting",
        title: "Sort by Pattern: Harder Words",
        instruction: "These longer words all contain a long vowel pattern. Sort them correctly.",
        parentTip: "Look for the vowel pair inside the word, not just at the beginning.",
        columns: ["ai", "ee", "oa", "ue"],
        items: [
          { label: "explain" }, { label: "between" }, { label: "approach" }, { label: "continue" },
          { label: "remain" }, { label: "asleep" }, { label: "afloat" }, { label: "rescue" },
          { label: "curtain" }, { label: "thirteen" }, { label: "cocoa" }, { label: "statue" },
        ],
      },
      // 22
      {
        type: "fill-in-blank",
        title: "Complete the Sentence with a Pattern Word",
        instruction: "Choose the best word from the brackets to complete each sentence.",
        parentTip: "Read the whole sentence before choosing — the context gives clues.",
        sentences: [
          { text: "The children sat ___ in the classroom. (remain / quietly / between)", blanks: ["quietly"] },
          { text: "She fell ___ as soon as her head hit the pillow. (asleep / awake / afraid)", blanks: ["asleep"] },
          { text: "He had to ___ at the traffic lights. (wait / walk / wake)", blanks: ["wait"] },
          { text: "The boat was ___ in the calm water. (afloat / afoot / afraid)", blanks: ["afloat"] },
        ],
      },
      // 23
      {
        type: "multiple-choice",
        title: "Choose the Correct Long Vowel Word",
        instruction: "Choose the word that best completes each sentence.",
        parentTip: "Try each option in the sentence and listen for the one that sounds right.",
        questions: [
          { prompt: "The sun came out and the ice began to ___.", options: ["melt", "thaw", "drip", "stop"] },
          { prompt: "She could ___ the music from next door.", options: ["hear", "seen", "feel", "taste"] },
          { prompt: "He wrote his name at the top of the ___.", options: ["page", "pad", "pot", "peg"] },
          { prompt: "The old tree had a long, twisting ___.", options: ["root", "rut", "rot", "rat"] },
        ],
      },
      // 24
      {
        type: "true-false",
        title: "Long Vowel Statements",
        instruction: "Read each statement. Circle TRUE or FALSE.",
        parentTip: "Some statements have tricky spelling — look carefully at the vowel pair.",
        statements: [
          { text: "'Explain' contains the 'ai' long vowel pattern.", answer: true },
          { text: "'Sleep' contains the 'ee' long vowel pattern.", answer: true },
          { text: "'Throat' contains the 'ue' long vowel pattern.", answer: false },
          { text: "'Value' contains the 'ue' long vowel pattern.", answer: true },
          { text: "'Between' contains the 'ai' long vowel pattern.", answer: false },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Word Families: ai",
        instruction: "Write as many 'ai' words as you can in 3 minutes. Then circle your favourite and use it in a sentence.",
        parentTip: "Count together after the timer — celebrate every correct word!",
        prompts: [
          { text: "My 'ai' words:", type: "lines", lines: 3 },
          { text: "My favourite word in a sentence:", type: "lines", lines: 2 },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Word Families: ee",
        instruction: "Write as many 'ee' words as you can in 3 minutes. Circle your favourite and use it in a sentence.",
        prompts: [
          { text: "My 'ee' words:", type: "lines", lines: 3 },
          { text: "My favourite word in a sentence:", type: "lines", lines: 2 },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Word Families: oa",
        instruction: "Write as many 'oa' words as you can in 3 minutes. Circle your favourite and use it in a sentence.",
        parentTip: "Try to go beyond the obvious words — challenge your child to find at least 6.",
        prompts: [
          { text: "My 'oa' words:", type: "lines", lines: 3 },
          { text: "My favourite word in a sentence:", type: "lines", lines: 2 },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Word Families: ue",
        instruction: "Write as many 'ue' words as you can in 3 minutes. Circle your favourite and use it in a sentence.",
        prompts: [
          { text: "My 'ue' words:", type: "lines", lines: 3 },
          { text: "My favourite word in a sentence:", type: "lines", lines: 2 },
        ],
      },
      // 29
      {
        type: "matching",
        title: "Match the Definition to the ai Word",
        instruction: "Draw a line from each definition to the correct word.",
        parentTip: "Read the definition slowly and imagine the word before looking at the options.",
        left: [
          "Water that falls from clouds",
          "You do this when you wait in line",
          "Part of an animal that sticks out at the back",
          "You put letters in this",
        ],
        right: ["mail", "rain", "queue", "tail"],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: The 'ay' vs 'ai' Pattern",
        content: "Both 'ai' and 'ay' make the same long A sound — but 'ai' usually appears in the middle of a word (rain, tail) and 'ay' usually appears at the end (day, play, say). When you hear the long A sound, ask: is it in the middle or the end of the word?",
      },
      // 31
      {
        type: "sorting",
        title: "ai or ay?",
        instruction: "Sort these words into the correct column: does the long A sound use 'ai' or 'ay'?",
        parentTip: "Say each word and decide: does the sound land in the middle or the end?",
        columns: ["ai (middle)", "ay (end)"],
        items: [
          { label: "rain" }, { label: "play" }, { label: "tail" }, { label: "day" },
          { label: "paid" }, { label: "say" }, { label: "snail" }, { label: "stay" },
        ],
      },
      // 32
      {
        type: "sorting",
        title: "ee or ea?",
        instruction: "Both 'ee' and 'ea' can make the long E sound. Sort these words correctly.",
        columns: ["ee pattern", "ea pattern"],
        items: [
          { label: "feet" }, { label: "beach" }, { label: "tree" }, { label: "read" },
          { label: "seed" }, { label: "meat" }, { label: "queen" }, { label: "teach" },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "ai or ay? Choose the Right Spelling",
        instruction: "Complete each word with either 'ai' or 'ay'.",
        parentTip: "Remember: 'ai' goes in the middle, 'ay' goes at the end.",
        sentences: [
          { text: "It was a sunny ___ outside. (d + ___)", blanks: ["ay"] },
          { text: "She left a tr___ of crumbs. (tr + ___)", blanks: ["ail"] },
          { text: "He wanted to pl___ in the park. (pl + ___)", blanks: ["ay"] },
          { text: "The snail left a slimy tr___. (tr + ___)", blanks: ["ail"] },
        ],
      },
      // 34
      {
        type: "circle-correct",
        title: "Pick the Right Long Vowel Spelling",
        instruction: "Circle the correctly spelled word in each pair.",
        questions: [
          { prompt: "The animal has a long ___.", options: ["tayl", "tail"] },
          { prompt: "She likes to ___ in the sun.", options: ["bask", "basck"] },
          { prompt: "He felt ___ after the long walk.", options: ["weery", "weary"] },
          { prompt: "The ___ mooed softly.", options: ["goat", "gote"] },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Write a Description Using Long Vowel Words",
        instruction: "Look at this scene: a rainy day, a snail on a leaf, and a toad on a road. Write 3 sentences describing the scene using at least 4 long vowel words.",
        parentTip: "Challenge your child to use words from different patterns — not just 'rain'.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
        ],
      },
      // 36
      {
        type: "sequence",
        title: "Alphabetical Order: ee and oa Words",
        instruction: "Put these words in alphabetical order by numbering them 1–6.",
        items: [
          { label: "road" }, { label: "feet" }, { label: "queen" }, { label: "boat" }, { label: "seed" }, { label: "coat" },
        ],
      },
      // 37
      {
        type: "true-false",
        title: "Does This Sentence Make Sense?",
        instruction: "Read each sentence. Circle TRUE if it makes sense or FALSE if it does not.",
        parentTip: "This activity checks whether your child understands the meaning of long vowel words in context.",
        statements: [
          { text: "The boat floated on the road.", answer: false },
          { text: "She planted a seed in the soil.", answer: true },
          { text: "He used glue to fix the broken cup.", answer: true },
          { text: "They waited in the rain without an umbrella.", answer: true },
        ],
      },
      // 38
      {
        type: "home-activity",
        title: "Long Vowel Word Hunt",
        instruction: "Go on a word hunt around your home! Look at books, food packets, signs and labels.",
        parentTip: "Keep the hunt playful — 5 minutes is plenty. You might be surprised how many long vowel words appear on cereal boxes and library books.",
        suggestions: [
          "Find 3 words with the 'ai' pattern on books or food packets",
          "Find 2 words with the 'ee' pattern in a picture book",
          "Draw a picture for each vowel pattern word you find",
          "Make a mini 'Long Vowel Dictionary' by folding paper into four sections",
        ],
      },
      // 39
      {
        type: "fill-in-blank",
        title: "Choose the ee or ea Word",
        instruction: "Pick the best word to complete each sentence from the brackets.",
        sentences: [
          { text: "I love to ___ a good book. (read / reed)", blanks: ["read"] },
          { text: "The ___ is made of sand and shells. (beach / beech)", blanks: ["beach"] },
          { text: "She likes to ___ vegetables in the garden. (grow / eat)", blanks: ["eat"] },
          { text: "The bees flew around the ___. (tree / tray)", blanks: ["tree"] },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Long Vowel Story Starter",
        content: "Use this story starter to write 5 sentences of your own. Underline every long vowel word you use. Starter: 'The snail crept along the road in the rain...'",
      },
      // 41
      {
        type: "multiple-choice",
        title: "Which Word Completes the Sentence Best?",
        instruction: "Circle the word that fits best in each sentence.",
        parentTip: "Discuss why one word works better than the others.",
        questions: [
          { prompt: "The ___ shone brightly in the sky.", options: ["moon", "moan", "mean", "main"] },
          { prompt: "She felt a sharp ___ in her knee.", options: ["pain", "pan", "pane", "pun"] },
          { prompt: "He threw the ball and watched it ___.", options: ["soar", "sore", "saw", "set"] },
          { prompt: "They walked through the morning ___.", options: ["dew", "do", "due", "doe"] },
        ],
      },
      // 42
      {
        type: "open-response",
        title: "Long Vowel Sentences: Cloze Paragraph",
        instruction: "Read the paragraph and fill in the missing long vowel words. Words to use: rain, tree, road, blue, tail, feet, coat, clue.",
        parentTip: "Read the whole paragraph first before filling in blanks.",
        prompts: [
          { text: "The ___ (sky colour) sky had turned grey. ___ (water from clouds) was coming. Max grabbed his ___ (jacket) and walked up the ___. He spotted a fox under a ___ (tall plant). The fox wagged its ___ and ran off on its four ___. Max had no ___ where it was going.", type: "lines", lines: 5 },
        ],
      },
      // 43
      {
        type: "matching",
        title: "Match the Long Vowel Word to Its Meaning",
        instruction: "Draw a line from each word to its meaning.",
        left: ["groan", "trail", "queen", "argue"],
        right: [
          "A path through the bush",
          "Make a low unhappy sound",
          "Disagree using words",
          "A female ruler",
        ],
      },
      // 44
      {
        type: "sorting",
        title: "Sort by Number of Syllables",
        instruction: "Say each word aloud and count the syllables. Sort into the correct column.",
        parentTip: "Clap once for each syllable beat in the word.",
        columns: ["1 syllable", "2 syllables", "3 syllables"],
        items: [
          { label: "rain" }, { label: "explain" }, { label: "bee" }, { label: "between" },
          { label: "coat" }, { label: "afloat" }, { label: "glue" }, { label: "continue" },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Long Vowels in Longer Words",
        content: "Long vowel patterns appear in longer words too! 'Explain' has 'ai', 'asleep' has 'ee', 'approach' has 'oa', 'rescue' has 'ue'. When you see a new long word, look inside it for a vowel team you already know — that clue helps you read the whole word.",
      },
      // 46
      {
        type: "circle-correct",
        title: "Find the Long Vowel Pattern in a Longer Word",
        instruction: "Underline or circle the long vowel pattern you can see inside each word.",
        questions: [
          { prompt: "explain", options: ["ai", "ee", "oa", "ue"] },
          { prompt: "between", options: ["ai", "ee", "oa", "ue"] },
          { prompt: "afloat", options: ["ai", "ee", "oa", "ue"] },
          { prompt: "rescue", options: ["ai", "ee", "oa", "ue"] },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Describe a Picture Using Long Vowel Words",
        instruction: "Imagine a scene: a blue boat on a road after a big storm, with a toad nearby. Write 4 sentences describing what you see. Use at least 5 long vowel words.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
          { text: "Sentence 4:", type: "lines", lines: 2 },
        ],
      },
      // 48
      {
        type: "fill-in-blank",
        title: "Complete Each Word with oa or ue",
        instruction: "Complete each word by adding 'oa' or 'ue'.",
        parentTip: "Say the word options aloud — one will sound like a real word.",
        sentences: [
          { text: "t___d (a frog-like animal)", blanks: ["oa"] },
          { text: "gl___ (used to stick things)", blanks: ["ue"] },
          { text: "c___t (worn in cold weather)", blanks: ["oa"] },
          { text: "bl___ (the colour of the sky)", blanks: ["ue"] },
          { text: "r___d (you drive on this)", blanks: ["oa"] },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Spelling Rule Check",
        instruction: "Circle TRUE or FALSE for each statement about spelling rules.",
        statements: [
          { text: "'ay' usually goes at the end of a word (e.g. day, play).", answer: true },
          { text: "'ai' usually goes at the end of a word.", answer: false },
          { text: "'ee' and 'ea' can both make the long E sound.", answer: true },
          { text: "Long vowels always have two vowels next to each other.", answer: false },
        ],
      },
      // 50
      {
        type: "home-activity",
        title: "Long Vowel Book Hunt",
        instruction: "Choose a picture book and read 3 pages together. Each time you find a long vowel word, write it on a sticky note and stick it to the page.",
        parentTip: "Sticky note hunts are excellent for engagement. Let your child be the 'spotter' while you read.",
        suggestions: [
          "Tally how many 'ai' words you find",
          "Tally how many 'ee' words you find",
          "Make a list of every long vowel word you found",
          "Read the words on your sticky notes aloud at the end",
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────
      // 51
      {
        type: "open-response",
        title: "Write Long Vowel Sentences from Prompts",
        instruction: "Use the prompt word in a sentence. Underline any other long vowel words you use.",
        prompts: [
          { text: "Write a sentence using 'explain':", type: "lines", lines: 2 },
          { text: "Write a sentence using 'between':", type: "lines", lines: 2 },
          { text: "Write a sentence using 'afloat':", type: "lines", lines: 2 },
        ],
      },
      // 52
      {
        type: "sorting",
        title: "Sort by Vowel Pattern: Mixed Harder Words",
        instruction: "Sort these words into the correct long vowel pattern group.",
        parentTip: "Help your child identify the vowel pair first, then match it to the pattern.",
        columns: ["ai", "ee", "oa", "ue"],
        items: [
          { label: "obtain" }, { label: "indeed" }, { label: "cocoa" }, { label: "tissue" },
          { label: "certain" }, { label: "freedom" }, { label: "approach" }, { label: "value" },
          { label: "portrait" }, { label: "employee" }, { label: "overload" }, { label: "avenue" },
        ],
      },
      // 53
      {
        type: "fill-in-blank",
        title: "Long Vowel Words in Context: A",
        instruction: "Complete the paragraph with long vowel words from the box: rain, coat, tree, blue, trail, feet.",
        sentences: [
          { text: "After the ___, everything smelled fresh. The ___ was dark and muddy. She pulled on her ___ and heavy boots. Her ___ sank into the mud with each step. She reached the old ___ and sat down. Above her, the sky cleared to a pale ___.", blanks: ["rain", "trail", "coat", "feet", "tree", "blue"] },
        ],
      },
      // 54
      {
        type: "multiple-choice",
        title: "Choose the Best Long Vowel Word for the Context",
        instruction: "Read each sentence. Choose the word that fits best.",
        parentTip: "This activity builds contextual vocabulary — praise thoughtful reasoning.",
        questions: [
          { prompt: "She had a ___ expression on her face — no one knew what she was thinking.", options: ["plain", "blain", "plane", "pain"] },
          { prompt: "The detective had one final ___ to solve the mystery.", options: ["clue", "cue", "flue", "blue"] },
          { prompt: "The old ___ creaked in the wind.", options: ["bough", "bow", "boat", "coat"] },
          { prompt: "He gave a ___ sigh and sat down.", options: ["deep", "deed", "seep", "keep"] },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Proofread and Fix the Long Vowel Spelling Errors",
        instruction: "Read the paragraph below. Find and correct 5 spelling mistakes involving long vowel words. Rewrite the corrected paragraph on the lines.\n\nSarah walked down the rode in the rane. Her coat was soaked and her feat were cold. She sat under a grate big tre and waited.",
        parentTip: "Ask your child to read the passage aloud slowly — mistakes often sound wrong even if they look odd.",
        prompts: [
          { text: "Corrected paragraph:", type: "lines", lines: 5 },
        ],
      },
      // 56
      {
        type: "matching",
        title: "Match the Synonym (Long Vowel Words)",
        instruction: "Draw a line from each word to a word that means the same or nearly the same.",
        left: ["rain", "trail", "pain", "gleam"],
        right: ["shine", "ache", "path", "drizzle"],
      },
      // 57
      {
        type: "circle-correct",
        title: "Choose the Correct Homophone",
        instruction: "Circle the word that makes the sentence correct. (These are homophones — words that sound the same but have different spellings and meanings.)",
        parentTip: "Homophones are tricky! Encourage your child to think about the meaning.",
        questions: [
          { prompt: "She ___ through the crowd to find her friend.", options: ["wade", "weighed"] },
          { prompt: "He tied the rope in a ___ knot.", options: ["great", "grate"] },
          { prompt: "The wind ___ the leaves off the tree.", options: ["blue", "blew"] },
          { prompt: "She waited by the garden ___.", options: ["gate", "gait"] },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Write a Paragraph Using at Least 8 Long Vowel Words",
        instruction: "Write a paragraph (5–6 sentences) on the topic: 'A Rainy Day Adventure'. Use at least 8 long vowel words. Underline each one.",
        parentTip: "This is a consolidating task — expect a genuine attempt even if spelling isn't perfect. Focus on the ideas.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 7 },
          { text: "Long vowel words I used:", type: "lines", lines: 2 },
        ],
      },
      // 59
      {
        type: "sorting",
        title: "Sort by Long Vowel Sound (Not Spelling)",
        instruction: "These words all have a long vowel sound but may use different spelling patterns. Sort by SOUND, not spelling.",
        parentTip: "This is a listening task — say each word aloud and listen for the long vowel sound before sorting.",
        columns: ["Long A sound", "Long E sound", "Long O sound"],
        items: [
          { label: "play" }, { label: "beach" }, { label: "know" }, { label: "rain" },
          { label: "feet" }, { label: "road" }, { label: "day" }, { label: "meat" },
          { label: "snow" }, { label: "wait" }, { label: "tree" }, { label: "go" },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip",
        title: "Tip: Long Vowels Don't Always Use Vowel Teams",
        content: "Not all long vowel sounds are spelled with two vowels! A silent 'e' at the end of a word also makes the vowel long: 'make' (long A), 'these' (long E), 'home' (long O), 'use' (long U). You now know TWO ways to make each long vowel sound.",
      },
      // 61 — SPARK at ~60
      {
        type: "spark",
        title: "Spark: Vowel Sound Comparison",
        content: "Make a chart with 4 columns: Long A, Long E, Long O, Long U. Fill each column with words that use DIFFERENT spelling patterns for the same sound. For example, Long A: rain (ai), play (ay), make (a-e), they (ey). How many different patterns can you find for each sound?",
      },
      // 62
      {
        type: "fill-in-blank",
        title: "Complete the Sentence: Homophones",
        instruction: "Choose the correct homophone to complete each sentence.",
        sentences: [
          { text: "The ___ was shining brightly. (sun / son)", blanks: ["sun"] },
          { text: "We walked down the ___ street. (main / mane)", blanks: ["main"] },
          { text: "She could not ___ the answer. (see / sea)", blanks: ["see"] },
          { text: "He held the ___ of the kite. (tail / tale)", blanks: ["tail"] },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Create a Long Vowel Word Web",
        instruction: "Choose one long vowel pattern (ai, ee, oa, or ue). Write it in the centre of the page. Write as many words as you can branching out from it, like a spider web. Aim for at least 10 words.",
        parentTip: "Word webs are excellent vocabulary tools. Accept any correctly spelled word — real challenge is variety.",
        prompts: [
          { text: "My chosen pattern: ___", type: "lines", lines: 1 },
          { text: "My word web (write all your words here):", type: "lines", lines: 5 },
        ],
      },
      // 64
      {
        type: "multiple-choice",
        title: "Which Long Vowel Pattern Makes This Sound?",
        instruction: "Read each word. Choose which long vowel pattern is used to make the main long vowel sound.",
        questions: [
          { prompt: "The word 'steak' has which long vowel sound?", options: ["Long A (ea)", "Long E (ea)", "Long O (oa)", "Long U (ue)"] },
          { prompt: "The word 'field' has which long vowel sound?", options: ["Long A", "Long E (ie)", "Long O", "Long U"] },
          { prompt: "The word 'dough' has which long vowel sound?", options: ["Long A", "Long E", "Long O (ough)", "Long U"] },
          { prompt: "The word 'knew' has which long vowel sound?", options: ["Long A", "Long E", "Long O", "Long U (ew)"] },
        ],
      },
      // 65
      {
        type: "true-false",
        title: "Reading Comprehension: Long Vowel Text",
        instruction: "Read the mini passage, then answer TRUE or FALSE.\n\nMini passage: 'The trail wound through the beech trees and up a steep hill. Rain had made the path slippery. Mia kept her coat zipped and her feet moving. At the peak, the view was breathtaking — a blue bay stretched out below.'",
        parentTip: "Encourage your child to point to the part of the text that supports each answer.",
        statements: [
          { text: "The trail went through beech trees.", answer: true },
          { text: "The rain had made the path dry.", answer: false },
          { text: "Mia had her coat unzipped.", answer: false },
          { text: "At the peak there was a view of a blue bay.", answer: true },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Write the Opposite Using a Long Vowel Word",
        instruction: "For each word or phrase, write a word with a long vowel pattern that means the opposite.",
        parentTip: "If your child is unsure, offer a hint: 'Think of a word that sounds the opposite. Does it have a long vowel sound?'",
        prompts: [
          { text: "short → (long E word): ___", type: "lines", lines: 1 },
          { text: "fast → (long E word): ___", type: "lines", lines: 1 },
          { text: "dry → (long A word): ___", type: "lines", lines: 1 },
          { text: "awake → (long E word): ___", type: "lines", lines: 1 },
        ],
      },
      // 67
      {
        type: "sorting",
        title: "Sort by Vowel Pattern in Context",
        instruction: "Read each sentence. Underline the long vowel word. Sort it by writing it in the correct column.",
        parentTip: "The sentences provide context clues that make the long vowel words clearer.",
        columns: ["ai", "ee", "oa", "ue"],
        items: [
          { label: "She left a trail of crumbs." },
          { label: "The bee landed on the flower." },
          { label: "He wore a big coat." },
          { label: "The rescue team arrived." },
          { label: "It was a rainy Tuesday." },
          { label: "They sat between the trees." },
          { label: "The boat groaned in the wind." },
          { label: "She continued walking." },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Write a Long Vowel Sentence for Each Pattern",
        instruction: "Write one interesting sentence for each long vowel pattern. Try to use an adjective in each sentence too.",
        prompts: [
          { text: "ai sentence:", type: "lines", lines: 2 },
          { text: "ee sentence:", type: "lines", lines: 2 },
          { text: "oa sentence:", type: "lines", lines: 2 },
          { text: "ue sentence:", type: "lines", lines: 2 },
        ],
      },
      // 69
      {
        type: "fill-in-blank",
        title: "Long Vowels in a Story",
        instruction: "Complete the story with the correct long vowel words. Words: explained, sleep, trail, blue, coat, rain.",
        sentences: [
          { text: "Dad ___ that the hike would be long. He packed our ___ bags and helped us put on our ___. The ___ had already started as we set off along the ___. By bedtime, we fell straight to ___.", blanks: ["explained", "blue", "coat", "rain", "trail", "sleep"] },
        ],
      },
      // 70
      {
        type: "home-activity",
        title: "Vowel Pattern Card Game",
        instruction: "Make a set of long vowel word cards and play games with them at home.",
        parentTip: "Physical card games reinforce spelling without feeling like practice. Keep card sets in a clip bag for repeat use.",
        suggestions: [
          "Write 20 long vowel words on cards — 5 for each pattern",
          "Play 'Snap': pairs of cards with the same vowel pattern",
          "Play 'Go Fish': ask for a card with the same pattern as your card",
          "Sort the cards into the four pattern piles as fast as you can — time yourself!",
        ],
      },
      // 71
      {
        type: "open-response",
        title: "Long Vowel Poetry: Rhyming Couplets",
        instruction: "Write 4 rhyming couplets (pairs of rhyming lines). Each couplet must use at least one long vowel word as the rhyme.",
        parentTip: "Model the first couplet together if needed: 'The snail crept along the trail / She hoped the rain would not prevail.'",
        prompts: [
          { text: "Couplet 1:", type: "lines", lines: 2 },
          { text: "Couplet 2:", type: "lines", lines: 2 },
          { text: "Couplet 3:", type: "lines", lines: 2 },
          { text: "Couplet 4:", type: "lines", lines: 2 },
        ],
      },
      // 72
      {
        type: "multiple-choice",
        title: "Editing: Choose the Correct Spelling",
        instruction: "A student wrote these sentences. Choose the correct spelling of the underlined word.",
        questions: [
          { prompt: "She waited in the (rane / rain / rayn).", options: ["rane", "rain", "rayn"] },
          { prompt: "He felt a (payn / pane / pain) in his arm.", options: ["payn", "pane", "pain"] },
          { prompt: "The dog chased its (tayl / tail / tale).", options: ["tayl", "tail", "tale"] },
          { prompt: "They sat under the (tre / tree / trea).", options: ["tre", "tree", "trea"] },
        ],
      },
      // 73
      {
        type: "sorting",
        title: "Group Words by Spelling Pattern: Advanced",
        instruction: "Sort these words into the correct long vowel pattern group. Some patterns are less common.",
        parentTip: "Say each word aloud and identify the vowel sound before looking at the spelling.",
        columns: ["Long A", "Long E", "Long O", "Long U"],
        items: [
          { label: "they" }, { label: "piece" }, { label: "though" }, { label: "suit" },
          { label: "break" }, { label: "chief" }, { label: "dough" }, { label: "clue" },
          { label: "eight" }, { label: "grief" }, { label: "flow" }, { label: "argue" },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Edit a Paragraph for Long Vowel Errors",
        instruction: "Read the paragraph. Find and correct 6 long vowel spelling mistakes. Write the corrected version.\n\nThe rayne came down heavily on the rode. Jess put on her blew coat and stepped outside. A tode sat on a leef near the geat of the school.",
        parentTip: "Ask your child to read aloud slowly — hearing the error often helps more than seeing it.",
        prompts: [
          { text: "Corrected paragraph:", type: "lines", lines: 5 },
          { text: "The 6 mistakes I found were:", type: "lines", lines: 2 },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: When to Use 'oe' for Long O",
        content: "Another spelling for the long O sound is 'oe' — as in 'toe', 'goes', 'foe'. This pattern is less common than 'oa' but appears in useful words. When you see 'oe' together, it almost always makes the long O sound.",
      },
      // 76
      {
        type: "fill-in-blank",
        title: "oa or oe? Choose the Right Pattern",
        instruction: "Complete each word with 'oa' or 'oe'.",
        sentences: [
          { text: "t___  (a body part at the end of your foot)", blanks: ["oe"] },
          { text: "r___d  (you drive on this)", blanks: ["oa"] },
          { text: "f___  (an enemy)", blanks: ["oe"] },
          { text: "gr___n  (a low unhappy sound)", blanks: ["oa"] },
          { text: "g___s  (moves)", blanks: ["oe"] },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Writing Task: A Long Vowel Character",
        instruction: "Create a character whose name contains a long vowel sound (e.g. Lee, Mae, Joan, Blue). Write 5 sentences describing your character using at least 6 long vowel words.",
        parentTip: "Allow invented names — the task is really about embedding long vowel vocabulary in meaningful writing.",
        prompts: [
          { text: "My character's name:", type: "lines", lines: 1 },
          { text: "My 5 sentences:", type: "lines", lines: 7 },
        ],
      },
      // 78
      {
        type: "true-false",
        title: "Long Vowel or Short Vowel?",
        instruction: "Read each word. Circle LONG if the highlighted vowel is long, or SHORT if it is short.",
        parentTip: "Long vowels say their own name. Short vowels have different sounds (a in cat, e in pet).",
        statements: [
          { text: "rain — the A sound is LONG.", answer: true },
          { text: "ran — the A sound is LONG.", answer: false },
          { text: "feet — the E sound is LONG.", answer: true },
          { text: "pet — the E sound is LONG.", answer: false },
          { text: "road — the O sound is LONG.", answer: true },
          { text: "rod — the O sound is LONG.", answer: false },
        ],
      },
      // 79
      {
        type: "matching",
        title: "Match Long Vowel Words to Their Definitions",
        instruction: "Draw a line from each word to its correct definition.",
        parentTip: "If your child doesn't know a word's meaning, look it up together — building vocabulary is part of the task.",
        left: ["sustain", "remain", "reveal", "obtain"],
        right: [
          "To get or acquire something",
          "To keep up or support over time",
          "To show or uncover something hidden",
          "To stay in a place",
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Long Vowel Dictionary",
        content: "Make your own 'Long Vowel Dictionary'. Fold 4 sheets of paper and staple them together into a booklet. Label each section: ai words, ee words, oa words, ue words. Add at least 8 words to each section, with a sentence or small drawing for each. Keep adding to it all week!",
      },
      // ── EXTENDING (81–100) ────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Analyse Long Vowel Patterns: Reflective Writing",
        instruction: "Answer each question in full sentences. Use examples in your answers.",
        prompts: [
          { text: "Why do you think English has so many different ways to spell the same vowel sound?", type: "lines", lines: 3 },
          { text: "Which long vowel pattern do you find easiest? Why?", type: "lines", lines: 3 },
          { text: "Which long vowel pattern do you find hardest? What strategies help you remember it?", type: "lines", lines: 3 },
        ],
      },
      // 82
      {
        type: "sorting",
        title: "Sort by Pattern: Challenging Words",
        instruction: "These words use uncommon or complex long vowel spellings. Sort them by sound.",
        parentTip: "This is an extending challenge — celebrate any correct sort and discuss any errors as a learning moment.",
        columns: ["Long A sound", "Long E sound", "Long O sound", "Long U sound"],
        items: [
          { label: "veil" }, { label: "niece" }, { label: "plateau" }, { label: "feudal" },
          { label: "reign" }, { label: "siege" }, { label: "bureau" }, { label: "pursuit" },
          { label: "weigh" }, { label: "relief" }, { label: "although" }, { label: "venue" },
        ],
      },
      // 83
      {
        type: "fill-in-blank",
        title: "Long Vowels in Complex Sentences",
        instruction: "Complete each sentence with a word that contains a long vowel pattern and makes the sentence meaningful.",
        sentences: [
          { text: "Despite the heavy ___, the match continued.", blanks: ["rain"] },
          { text: "She wrote her ___ on the back of the envelope.", blanks: ["name"] },
          { text: "The scientist made a remarkable ___ in the field.", blanks: ["breakthrough"] },
          { text: "He needed to ___ the rope to reach the branch.", blanks: ["reach"] },
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "Vocabulary in Context: Long Vowel Words",
        instruction: "Choose the word with the closest meaning to the underlined word.",
        parentTip: "This task builds both vocabulary and comprehension skills simultaneously.",
        questions: [
          { prompt: "The queen remained on her throne throughout the storm.", options: ["stayed", "left", "arrived", "danced"] },
          { prompt: "She could see the gleam of the lighthouse across the bay.", options: ["darkness", "shine", "sound", "smell"] },
          { prompt: "He tried to obtain permission from his teacher.", options: ["give", "lose", "get", "hide"] },
          { prompt: "The rain ceased just before midday.", options: ["started", "increased", "stopped", "continued"] },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Write a Narrative Using Long Vowel Vocabulary",
        instruction: "Write a short narrative (8–10 sentences) with the title 'The Rainy Day Trail'. You must include at least 12 different long vowel words. Underline each one. Use words from all four patterns (ai, ee, oa, ue).",
        parentTip: "This is the main extending writing task — allow time and offer encouragement, not editing.",
        prompts: [
          { text: "My narrative:", type: "lines", lines: 12 },
          { text: "Long vowel words I used (list them):", type: "lines", lines: 3 },
        ],
      },
      // 86
      {
        type: "matching",
        title: "Match Advanced Synonyms",
        instruction: "Draw a line from each word to a more sophisticated synonym.",
        left: ["rain", "explain", "trail", "gleam"],
        right: ["illuminate", "precipitate", "trajectory", "elucidate"],
      },
      // 87
      {
        type: "true-false",
        title: "Advanced Long Vowel True or False",
        instruction: "Read each statement and circle TRUE or FALSE.",
        statements: [
          { text: "The word 'veil' contains the long A sound spelled 'ei'.", answer: true },
          { text: "The word 'grief' contains the long E sound.", answer: true },
          { text: "All long vowel sounds must be spelled with a vowel team.", answer: false },
          { text: "The word 'plateau' ends with the long O sound.", answer: true },
          { text: "The word 'although' contains the long A sound.", answer: false },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Compare Two Long Vowel Patterns",
        instruction: "Choose two long vowel patterns (e.g. 'ai' and 'ay') and write a comparison paragraph. Include: where each pattern usually appears in a word, example words for each, and any tricky parts that might confuse a reader.",
        prompts: [
          { text: "Patterns I am comparing: ___ and ___", type: "lines", lines: 1 },
          { text: "My comparison paragraph:", type: "lines", lines: 7 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Write a Persuasive Sentence Using Long Vowel Words",
        instruction: "Write a persuasive sentence about each topic. Each sentence must contain at least 2 long vowel words.",
        parentTip: "Persuasive sentences state an opinion and give a reason. Encourage 'because' as a linking word.",
        prompts: [
          { text: "Topic: Rain is good for the garden.", type: "lines", lines: 2 },
          { text: "Topic: Reading every day improves your brain.", type: "lines", lines: 2 },
          { text: "Topic: Long vowel patterns are useful to know.", type: "lines", lines: 2 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Reading Strategies for Unknown Long Vowel Words",
        content: "When you meet an unknown word, try this: (1) Look for a vowel team inside the word. (2) Try the most common sound for that pattern. (3) Say the word and ask: does it sound like a word I know? (4) Use the rest of the sentence to check the meaning. These four steps will help you read almost any new long vowel word.",
      },
      // 91
      {
        type: "open-response",
        title: "Create a Long Vowel Quiz for a Friend",
        instruction: "Write 6 quiz questions about long vowel patterns — 2 sorting questions, 2 spelling questions, and 2 definition questions. Write the answers separately.",
        parentTip: "Creating a quiz requires deeper understanding than answering one — this is a high-level consolidation task.",
        prompts: [
          { text: "My 6 quiz questions:", type: "lines", lines: 8 },
          { text: "Answer key:", type: "lines", lines: 4 },
        ],
      },
      // 92
      {
        type: "sorting",
        title: "Sort by Long Vowel Pattern: Reading Passage Words",
        instruction: "Read this mini passage and find every long vowel word. Sort them by pattern.\n\nPassage: 'On a blue Tuesday, Mae sailed her boat along the creek. She had a trail of seaweed on her oar and a clue in her coat pocket. The trees swayed in the breeze as she explained her plan to the toad on the road.'",
        parentTip: "This integrates reading and phonics — a very strong comprehension and decoding activity.",
        columns: ["ai", "ee", "oa", "ue"],
        items: [
          { label: "blue" }, { label: "Tuesday" }, { label: "Mae" }, { label: "sailed" },
          { label: "creek" }, { label: "seaweed" }, { label: "clue" }, { label: "coat" },
          { label: "trees" }, { label: "breeze" }, { label: "explained" }, { label: "toad" },
          { label: "road" },
        ],
      },
      // 93
      {
        type: "fill-in-blank",
        title: "Challenging Cloze: Long Vowel Words in a Complex Passage",
        instruction: "Complete the passage with the best long vowel word. Words: revealed, obtained, sustained, remained, explained, believed.",
        sentences: [
          { text: "The scientist ___ that the rains had ___. She ___ calm as the team ___ more data. Eventually she ___ what she had long ___: the ancient trail was real.", blanks: ["explained", "ceased", "remained", "obtained", "revealed", "believed"] },
        ],
      },
      // 94
      {
        type: "multiple-choice",
        title: "Extend Your Vocabulary: Long Vowel Synonyms",
        instruction: "Choose the best synonym for the underlined long vowel word.",
        questions: [
          { prompt: "The old building was beginning to decay.", options: ["remain", "deteriorate", "sustain", "reveal"] },
          { prompt: "She found a vital clue at the scene.", options: ["obvious", "missing", "crucial", "extra"] },
          { prompt: "The queen reigned for many years.", options: ["ruled", "played", "fought", "rested"] },
          { prompt: "He had to obtain a special permit.", options: ["lose", "give", "acquire", "forget"] },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Write a Poem Using All Four Patterns",
        instruction: "Write a poem of at least 8 lines. Use at least one word from each long vowel pattern (ai, ee, oa, ue) in the poem. Underline your long vowel words.",
        parentTip: "Poems don't have to rhyme — encourage free verse if rhyming feels too difficult. The goal is purposeful word choice.",
        prompts: [
          { text: "My poem:", type: "lines", lines: 10 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Investigate a New Long Vowel Pattern",
        instruction: "Research and write about the 'igh' pattern (as in night, light, sigh). Write at least 8 words that use this pattern and 3 sentences that use 'igh' words.",
        parentTip: "Use a dictionary or look around the house for texts. This builds independent research habits.",
        prompts: [
          { text: "My 'igh' words:", type: "lines", lines: 2 },
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Write a Long Vowel Explanation Text",
        instruction: "Imagine you are a teacher. Write a short explanation (6–8 sentences) to teach a Year 1 student about long vowel patterns. Use examples and explain the rules clearly.",
        prompts: [
          { text: "My explanation:", type: "lines", lines: 10 },
        ],
      },
      // 98
      {
        type: "sorting",
        title: "Sort the Long Vowel Strategies",
        instruction: "Sort these reading strategies into 'Helpful for Long Vowels' or 'Not Specifically for Long Vowels'.",
        columns: ["Helpful for Long Vowels", "Not Specifically for Long Vowels"],
        items: [
          { label: "Look for a vowel team inside the word" },
          { label: "Use the pictures in the book for clues" },
          { label: "Try the most common sound for the vowel pair" },
          { label: "Count the syllables" },
          { label: "Check if the word sounds like a real word you know" },
          { label: "Ask what letter the word starts with" },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflection: What I Know About Long Vowel Patterns",
        instruction: "Write a reflective paragraph about what you have learned about long vowel patterns. Include: what you found easy, what was challenging, and one strategy you will use when you see a new long vowel word.",
        parentTip: "Reflective writing builds metacognition — the ability to think about one's own learning. Celebrate honest answers.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 8 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark",
        title: "Spark: Become a Long Vowel Expert",
        content: "Design a 'Long Vowel Patterns' poster to display in your learning space. Include: the four main patterns (ai, ee, oa, ue), at least 5 example words for each, a colour-coded key, and a tip for remembering each one. Make it colourful and clear enough for someone who has never learned about long vowels to understand!",
      },
    ],
  },

  // ── WS 2: Word Endings -ing, -ed, -er ──────────────────────────
  {
    slug: "word-endings-ing-ed-er",
    title: "Word Endings: -ing, -ed, -er",
    strand: "Language",
    description:
      "Learn how adding -ing, -ed and -er changes the meaning of base words, practising spelling rules for doubling and dropping the 'e'.",
    learningGuide: {
      concept:
        "Adding endings to words changes their meaning: -ing shows something is happening now, -ed shows it already happened, -er compares things or shows who does the action. Some base words need the final consonant doubled (run → running) or the final 'e' dropped (make → making) before adding the ending.",
      activation:
        "Say 'I am jumping' and then 'I jumped yesterday'. Ask your child what changed. Then ask: which word tells us it is happening right now?",
      check:
        "Can your child correctly add -ing and -ed to simple words? Do they notice when they need to double a letter or drop the 'e'?",
    },
    lesson: {
      title: "Changing Word Endings",
      objective:
        "Add the word endings -ing, -ed and -er to base words, applying key spelling rules.",
      materials: [
        "Paper and pencil",
        "Whiteboard or large sheet of paper",
        "A kitchen timer (optional)",
      ],
      intro: {
        title: "Base Words and Endings",
        script:
          "Did you know that one little word can turn into lots of different words just by adding letters to the end? Watch this — the word is 'jump'. If I am doing it right now I say 'I am jumping'. If I did it yesterday I say 'I jumped'. And if two friends are jumping and one goes higher, we say they are the 'higher jumper'. Let's explore how this works!",
        action:
          "Write 'jump' on the paper. Show how you add -ing, -ed and -er. Say each new word together. Then try 'walk' — let the child suggest what each ending form would be.",
      },
      mainActivity: {
        title: "Spell and Change",
        script:
          "Now here is the tricky bit — some words need us to double the last letter before adding the ending. Let me show you. 'Run' — we can't just write 'runing' because that would make the vowel sound short and strange. We double the 'n' first: running. But with 'make', we drop the 'e' before we add 'ing' — making. Let's practise some together.",
        action:
          "Write these base words on the whiteboard one at a time: hop, bake, swim, smile, clap, ride. Together, write the -ing and -ed forms. Talk through whether you double the consonant or drop the e. Let the child write the forms themselves when they feel ready.",
      },
      wrapUp: {
        title: "Story Sentences",
        script:
          "Let's use three of our new words in sentences to tell a tiny story. What happened? What is happening now? Who was the best at it?",
        action:
          "Write 3 sentences together using words from the activity — one with -ed, one with -ing, one with -er. Read the mini-story aloud together.",
      },
      parentTip:
        "The doubling rule can be tricky to explain — but a good rule of thumb is: if the base word is short (one syllable) and ends with a single consonant after a single vowel (like 'hop' or 'run'), double it. If the word ends in 'e' (like 'bake' or 'make'), drop the 'e'. Don't worry if this takes several sessions to click — that is completely normal.",
      extension:
        "Play 'Word Change Race': set a 2-minute timer and see how many base words your child can transform using all three endings (-ing, -ed, -er) correctly. Make it a game rather than a test — cheer for each correct answer!",
      resources: [
        {
          title: "Adding Word Endings",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy Year 2 English reading and language activities.",
        },
        {
          title: "Spelling Rules — Suffixes",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education interactive phonics and spelling resource.",
        },
        {
          title: "Starfall — Reading and Spelling",
          url: "https://www.starfall.com/h/ltr-classic/ltr-classic.php?sn=main",
          description: "Starfall reading activities including suffix practice.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      // 1
      {
        type: "matching",
        title: "Match Base Word to Its -ing Form",
        instruction: "Draw a line from each base word to its correct -ing form.",
        parentTip: "Say the -ing form out loud before drawing the line — does it sound right?",
        left: ["hop", "bake", "run", "smile", "clap"],
        right: ["baking", "clapping", "hopping", "smiling", "running"],
      },
      // 2
      {
        type: "matching",
        title: "Match Base Word to Its -ed Form",
        instruction: "Draw a line from each base word to its correct -ed form.",
        parentTip: "Remind your child: some -ed forms are irregular (e.g. run → ran, not runned).",
        left: ["jump", "bake", "clap", "wave", "walk"],
        right: ["waved", "jumped", "clapped", "walked", "baked"],
      },
      // 3
      {
        type: "circle-correct",
        title: "Which -ing Spelling Is Correct? (Set A)",
        instruction: "Circle the correctly spelled -ing word in each row.",
        parentTip: "Have your child say the word aloud and check if it sounds right.",
        questions: [
          { prompt: "She is ___.", options: ["running", "runing", "runnning"] },
          { prompt: "They are ___.", options: ["hopping", "hopeing", "hoping"] },
          { prompt: "He is ___.", options: ["smileing", "smiling", "smiiling"] },
          { prompt: "We are ___.", options: ["clappping", "clapin", "clapping"] },
        ],
      },
      // 4
      {
        type: "circle-correct",
        title: "Which -ed Spelling Is Correct? (Set A)",
        instruction: "Circle the correctly spelled -ed word in each row.",
        questions: [
          { prompt: "He ___ the cake.", options: ["baked", "bakeed", "baket"] },
          { prompt: "She ___ goodbye.", options: ["waveed", "waved", "wavd"] },
          { prompt: "They ___ at the door.", options: ["knoked", "knocked", "knockd"] },
          { prompt: "He ___ across the park.", options: ["raced", "raceed", "raaced"] },
        ],
      },
      // 5
      {
        type: "open-response",
        title: "Add -ing to These Words",
        instruction: "Add -ing to each base word. Remember the spelling rules: double the final consonant OR drop the 'e'.",
        parentTip: "Remind your child: short word ending in vowel + consonant = double (hop → hopping). Word ending in 'e' = drop the e (bake → baking).",
        prompts: [
          { text: "jump → ___", type: "lines", lines: 1 },
          { text: "bake → ___", type: "lines", lines: 1 },
          { text: "swim → ___", type: "lines", lines: 1 },
          { text: "wave → ___", type: "lines", lines: 1 },
          { text: "clap → ___", type: "lines", lines: 1 },
          { text: "ride → ___", type: "lines", lines: 1 },
        ],
      },
      // 6
      {
        type: "open-response",
        title: "Add -ed to These Words",
        instruction: "Add -ed to each base word. Apply the correct spelling rule for each one.",
        prompts: [
          { text: "jump → ___", type: "lines", lines: 1 },
          { text: "bake → ___", type: "lines", lines: 1 },
          { text: "clap → ___", type: "lines", lines: 1 },
          { text: "smile → ___", type: "lines", lines: 1 },
          { text: "hop → ___", type: "lines", lines: 1 },
          { text: "race → ___", type: "lines", lines: 1 },
        ],
      },
      // 7
      {
        type: "sorting",
        title: "Sort the Words: Which Rule Do You Use?",
        instruction: "Sort these base words into the correct column based on which spelling rule you need.",
        parentTip: "Help your child identify: does the word end in 'e'? Does it have one short vowel before the final consonant?",
        columns: ["Double the consonant", "Drop the e", "Just add -ing"],
        items: [
          { label: "hop" }, { label: "bake" }, { label: "walk" }, { label: "run" },
          { label: "smile" }, { label: "jump" }, { label: "swim" }, { label: "ride" },
          { label: "clap" }, { label: "look" },
        ],
      },
      // 8
      {
        type: "fill-in-blank",
        title: "Complete the Sentence with the -ing Form",
        instruction: "Choose the correct -ing word to complete each sentence. Base words: run, bake, swim, clap, wave.",
        parentTip: "Say each option aloud in the sentence — the correct one will sound natural.",
        sentences: [
          { text: "The children were ___ in the pool.", blanks: ["swimming"] },
          { text: "She was ___ a cake for the party.", blanks: ["baking"] },
          { text: "Everyone was ___ their hands.", blanks: ["clapping"] },
          { text: "He was ___ down the street.", blanks: ["running"] },
        ],
      },
      // 9
      {
        type: "fill-in-blank",
        title: "Complete the Sentence with the -ed Form",
        instruction: "Choose the correct -ed word to complete each sentence. Base words: jump, bake, wave, race, smile.",
        sentences: [
          { text: "She ___ to her friend across the road.", blanks: ["waved"] },
          { text: "He ___ over the puddle.", blanks: ["jumped"] },
          { text: "They ___ around the track.", blanks: ["raced"] },
          { text: "Mum ___ fresh bread for us.", blanks: ["baked"] },
        ],
      },
      // 10
      {
        type: "true-false",
        title: "Is the Spelling Correct? (Set A)",
        instruction: "Read each word. Circle TRUE if it is spelled correctly or FALSE if it is wrong.",
        parentTip: "Ask your child to apply the rule before deciding — don't just guess.",
        statements: [
          { text: "'Running' is the correct -ing form of 'run'.", answer: true },
          { text: "'Bakeing' is the correct -ing form of 'bake'.", answer: false },
          { text: "'Hopped' is the correct -ed form of 'hop'.", answer: true },
          { text: "'Waveed' is the correct -ed form of 'wave'.", answer: false },
          { text: "'Swimming' is the correct -ing form of 'swim'.", answer: true },
        ],
      },
      // 11
      {
        type: "sorting",
        title: "Sort by Ending Used",
        instruction: "Read each word. Sort it into the column for the ending it uses.",
        columns: ["-ing form", "-ed form", "-er form"],
        items: [
          { label: "running" }, { label: "jumped" }, { label: "faster" }, { label: "smiling" },
          { label: "baked" }, { label: "taller" }, { label: "hopping" }, { label: "raced" },
          { label: "swimmer" }, { label: "clapping" },
        ],
      },
      // 12
      {
        type: "open-response",
        title: "Add -er to These Words",
        instruction: "Add -er to each base word to make a comparing word or a 'person who does' word.",
        parentTip: "-er can mean 'more' (fast → faster) or 'a person who does something' (swim → swimmer). Talk about which meaning applies.",
        prompts: [
          { text: "fast → ___", type: "lines", lines: 1 },
          { text: "swim → ___", type: "lines", lines: 1 },
          { text: "teach → ___", type: "lines", lines: 1 },
          { text: "tall → ___", type: "lines", lines: 1 },
          { text: "run → ___", type: "lines", lines: 1 },
        ],
      },
      // 13
      {
        type: "matching",
        title: "Match the -er Word to Its Meaning",
        instruction: "Draw a line from each -er word to its correct meaning.",
        left: ["swimmer", "faster", "teacher", "runner"],
        right: [
          "A person who runs",
          "More quick than something else",
          "A person who swims",
          "A person who teaches",
        ],
      },
      // 14
      {
        type: "circle-correct",
        title: "Choose the Correct Ending",
        instruction: "Circle the word that correctly completes each sentence.",
        questions: [
          { prompt: "She is ___ to school right now.", options: ["walked", "walking", "walker"] },
          { prompt: "He ___ the door yesterday.", options: ["opened", "opening", "opener"] },
          { prompt: "She is a great ___.", options: ["swimming", "swam", "swimmer"] },
          { prompt: "The new car is ___ than the old one.", options: ["fast", "faster", "fastest"] },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: The Three Spelling Rules",
        content: "Before adding -ing or -ed, check: (1) Does the word end in 'e'? → Drop the e (bake → baking). (2) Is the word short with one vowel before a single final consonant? → Double the consonant (hop → hopping). (3) Does neither rule apply? → Just add the ending (jump → jumping). These three rules cover almost every base word you will meet.",
      },
      // 16
      {
        type: "open-response",
        title: "Add All Three Endings",
        instruction: "Add -ing, -ed, and -er to each base word. Apply the spelling rules correctly.",
        parentTip: "Work through one rule check at a time — doesn't end in e? Does it have a short vowel + single consonant?",
        prompts: [
          { text: "hop → -ing: ___   -ed: ___   -er: ___", type: "lines", lines: 1 },
          { text: "bake → -ing: ___   -ed: ___   -er: ___", type: "lines", lines: 1 },
          { text: "jump → -ing: ___   -ed: ___   -er: ___", type: "lines", lines: 1 },
          { text: "run → -ing: ___   -ed: ___   -er: ___", type: "lines", lines: 1 },
          { text: "ride → -ing: ___   -ed: ___   -er: ___", type: "lines", lines: 1 },
        ],
      },
      // 17
      {
        type: "open-response",
        title: "Write Sentences Using Word Endings",
        instruction: "Write a sentence using each word below. Use your neatest handwriting!",
        prompts: [
          { text: "Write a sentence using 'jumping'.", type: "lines", lines: 2 },
          { text: "Write a sentence using 'baked'.", type: "lines", lines: 2 },
          { text: "Write a sentence using 'faster'.", type: "lines", lines: 2 },
        ],
      },
      // 18
      {
        type: "true-false",
        title: "Does This Sentence Make Sense?",
        instruction: "Read each sentence. Circle TRUE if it makes sense, FALSE if it doesn't.",
        statements: [
          { text: "She was baking a delicious cake.", answer: true },
          { text: "He runned all the way to school.", answer: false },
          { text: "They were hopping down the hall.", answer: true },
          { text: "The teacher is teached the lesson.", answer: false },
        ],
      },
      // 19
      {
        type: "sequence",
        title: "Put the Sentences in Time Order",
        instruction: "These sentences describe events in order. Number them 1–4 based on when each event happened.",
        parentTip: "Tense clues (-ed = past, -ing = happening now) help put events in order.",
        items: [
          { label: "She is now eating the cake she baked." },
          { label: "She mixed the ingredients together." },
          { label: "She put the cake in the oven." },
          { label: "She was baking all morning." },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Mini Story with All Three Endings",
        content: "Write a mini story (4–5 sentences) about someone doing something exciting. Your story must include at least one -ing word, one -ed word and one -er word. Underline each one and label it (-ing, -ed, or -er) above the word.",
      },
      // ── DEVELOPING (21–50) ────────────────────────────────────────
      // 21
      {
        type: "sorting",
        title: "Sort by Base Word Rule: Harder Words",
        instruction: "Look at each base word. Sort it by the rule you need before adding -ing or -ed.",
        parentTip: "Check: does the word end in 'e'? Is there one short vowel before a single final consonant?",
        columns: ["Double consonant", "Drop the e", "Just add"],
        items: [
          { label: "admit" }, { label: "dance" }, { label: "laugh" }, { label: "begin" },
          { label: "change" }, { label: "listen" }, { label: "drop" }, { label: "live" },
          { label: "start" }, { label: "prefer" },
        ],
      },
      // 22
      {
        type: "open-response",
        title: "Apply the Rules to Harder Base Words",
        instruction: "Add -ing and -ed to each word. Explain which rule you used.",
        parentTip: "Say the rule aloud before writing — this helps cement the habit.",
        prompts: [
          { text: "admit → -ing: ___   -ed: ___   Rule: ___", type: "lines", lines: 1 },
          { text: "dance → -ing: ___   -ed: ___   Rule: ___", type: "lines", lines: 1 },
          { text: "prefer → -ing: ___   -ed: ___   Rule: ___", type: "lines", lines: 1 },
          { text: "begin → -ing: ___   -ed: ___   Rule: ___", type: "lines", lines: 1 },
        ],
      },
      // 23
      {
        type: "circle-correct",
        title: "Which -ing Spelling Is Correct? (Set B)",
        instruction: "Circle the correctly spelled -ing word.",
        questions: [
          { prompt: "She is ___.", options: ["admiting", "admitting", "admiting"] },
          { prompt: "They were ___.", options: ["dancing", "danceing", "dansing"] },
          { prompt: "He is ___.", options: ["begining", "beginng", "beginning"] },
          { prompt: "She was ___.", options: ["prefering", "preferring", "prefereing"] },
        ],
      },
      // 24
      {
        type: "fill-in-blank",
        title: "Complete With the Correct Form",
        instruction: "Use the base word in brackets to complete each sentence. Choose -ing, -ed, or -er as needed.",
        sentences: [
          { text: "She was ___ (dance) at the school concert.", blanks: ["dancing"] },
          { text: "He ___ (admit) that he had made a mistake.", blanks: ["admitted"] },
          { text: "The ___ (teach) wrote the question on the board.", blanks: ["teacher"] },
          { text: "They were ___ (begin) to understand the rule.", blanks: ["beginning"] },
        ],
      },
      // 25
      {
        type: "multiple-choice",
        title: "Choose the Correct Word Form",
        instruction: "Choose the word that correctly completes each sentence.",
        questions: [
          { prompt: "She is the ___ of the two runners.", options: ["fast", "faster", "fastest", "fastly"] },
          { prompt: "He ___ his hand to answer the question.", options: ["raises", "raised", "raising", "raiser"] },
          { prompt: "They were ___ in the garden all afternoon.", options: ["digs", "dug", "digging", "digger"] },
          { prompt: "She is a brilliant ___.", options: ["writing", "wrote", "writer", "written"] },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Write Past Tense Sentences (-ed)",
        instruction: "Rewrite each present tense sentence in the past tense by changing the verb to its -ed form.",
        parentTip: "Explain that '-ed' usually signals something that has already happened.",
        prompts: [
          { text: "She walks to school.  →  Past: ___", type: "lines", lines: 1 },
          { text: "He bakes a cake.  →  Past: ___", type: "lines", lines: 1 },
          { text: "They jump in the puddle.  →  Past: ___", type: "lines", lines: 1 },
          { text: "She smiles at the camera.  →  Past: ___", type: "lines", lines: 1 },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Change Past to Present (-ed to -ing)",
        instruction: "Rewrite each past tense sentence so it is happening right now (use -ing).",
        prompts: [
          { text: "He kicked the ball.  →  He is ___.", type: "lines", lines: 1 },
          { text: "She sang a song.  →  She is ___.", type: "lines", lines: 1 },
          { text: "They watched a movie.  →  They are ___.", type: "lines", lines: 1 },
          { text: "He climbed the tree.  →  He is ___.", type: "lines", lines: 1 },
        ],
      },
      // 28
      {
        type: "true-false",
        title: "Is the Spelling Correct? (Set B)",
        instruction: "Circle TRUE if correctly spelled, FALSE if not.",
        statements: [
          { text: "'Admitting' is the correct -ing form of 'admit'.", answer: true },
          { text: "'Changeing' is the correct -ing form of 'change'.", answer: false },
          { text: "'Preferred' is the correct -ed form of 'prefer'.", answer: true },
          { text: "'Begining' is the correct -ing form of 'begin'.", answer: false },
          { text: "'Dancing' is the correct -ing form of 'dance'.", answer: true },
        ],
      },
      // 29
      {
        type: "matching",
        title: "Match the Base Word to Both Its -ing and -ed Forms",
        instruction: "Draw a line from the base word to both its -ing form and its -ed form.",
        parentTip: "This matching checks both forms at once — a good review.",
        left: ["skip", "chase", "drop", "love"],
        right: ["skipping / skipped", "chasing / chased", "dropping / dropped", "loving / loved"],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: -er Can Mean Two Things",
        content: "The suffix -er has two jobs. (1) It compares: 'tall → taller' means more tall. (2) It names a person or thing that does something: 'teach → teacher', 'run → runner', 'swim → swimmer'. When you see an -er word, decide which meaning it has — a comparison or a description of a person/thing.",
      },
      // 31
      {
        type: "sorting",
        title: "Sort the -er Words by Meaning",
        instruction: "Sort each -er word into the correct column: does it compare something or name a person/thing?",
        columns: ["Comparing word", "Person or thing that does"],
        items: [
          { label: "taller" }, { label: "runner" }, { label: "faster" }, { label: "swimmer" },
          { label: "bigger" }, { label: "teacher" }, { label: "colder" }, { label: "writer" },
        ],
      },
      // 32
      {
        type: "fill-in-blank",
        title: "-er Words in Context",
        instruction: "Complete each sentence with an -er word made from the base word in brackets.",
        sentences: [
          { text: "She is a much ___ (fast) runner than her brother.", blanks: ["faster"] },
          { text: "The school needed a new ___ (teach) for the class.", blanks: ["teacher"] },
          { text: "This box is ___ (heavy) than that one.", blanks: ["heavier"] },
          { text: "He became an expert ___ (swim) after months of practice.", blanks: ["swimmer"] },
        ],
      },
      // 33
      {
        type: "circle-correct",
        title: "Is the Ending Used Correctly?",
        instruction: "Circle the sentence that uses the word ending correctly.",
        questions: [
          { prompt: "Which is correct?", options: ["She is runned home.", "She is running home.", "She is runner home."] },
          { prompt: "Which is correct?", options: ["He painted the wall.", "He is painting the wall.", "Both sentences are correct."] },
          { prompt: "Which is correct?", options: ["She is most fastest.", "She is the faster one.", "She is the fastest one."] },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Write Three Sentences: -ing, -ed, -er",
        instruction: "Write one sentence using an -ing word, one using an -ed word, and one using an -er word. Each sentence should be about something you enjoy doing.",
        parentTip: "Connecting grammar to personal experience makes it meaningful — celebrate any authentic sentence.",
        prompts: [
          { text: "My -ing sentence:", type: "lines", lines: 2 },
          { text: "My -ed sentence:", type: "lines", lines: 2 },
          { text: "My -er sentence:", type: "lines", lines: 2 },
        ],
      },
      // 35
      {
        type: "sequence",
        title: "Order the Story Events (Word Endings Clues)",
        instruction: "These sentences tell a story. Use verb tense clues to put them in time order (1–5).",
        parentTip: "Past tense (-ed) events happened first; present tense (-ing) is happening now.",
        items: [
          { label: "She is now eating the meal she cooked." },
          { label: "She chopped the vegetables carefully." },
          { label: "She decided to make a meal from scratch." },
          { label: "She stirred the pot for a long time." },
          { label: "She had planned the menu the day before." },
        ],
      },
      // 36
      {
        type: "multiple-choice",
        title: "Choose the Correctly Spelled Word",
        instruction: "Choose the correctly spelled word to complete each sentence.",
        questions: [
          { prompt: "She is ___ for the finish line.", options: ["raceing", "rasing", "racing"] },
          { prompt: "He ___ the ball over the fence.", options: ["hited", "hit", "hitting"] },
          { prompt: "The ___ explained the rules.", options: ["refereeing", "referee", "refereer"] },
          { prompt: "She is ___ a new language.", options: ["learning", "learnning", "learnied"] },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Explain the Spelling Rule",
        instruction: "Explain in your own words why we double the consonant in 'hop → hopping' but not in 'jump → jumping'.",
        parentTip: "This metalinguistic task is important — being able to explain a rule shows deep understanding.",
        prompts: [
          { text: "My explanation:", type: "lines", lines: 4 },
          { text: "Another example of the doubling rule: ___", type: "lines", lines: 1 },
        ],
      },
      // 38
      {
        type: "home-activity",
        title: "Word Ending Hunt",
        instruction: "Go on a word ending hunt! Look at books, signs, food packets and labels around your home.",
        parentTip: "Connecting spelling practice to real-world text is very effective. Keep it to 10 minutes maximum.",
        suggestions: [
          "Find 5 words ending in -ing and write them down",
          "Find 5 words ending in -ed and write them down",
          "Find 3 words ending in -er and write them down",
          "Check if any -ing or -ed words follow the spelling rules you learned",
        ],
      },
      // 39
      {
        type: "fill-in-blank",
        title: "Choose -ing or -ed to Complete the Paragraph",
        instruction: "Complete the paragraph with the correct form of each verb in brackets.",
        parentTip: "Read the whole paragraph first to understand the tense before filling in blanks.",
        sentences: [
          { text: "Yesterday, Max was ___ (hike) in the bush. He ___ (slip) on a wet rock and ___ (fall) into the creek. He ___ (laugh) about it afterwards, but at the time he was ___ (shiver) from the cold.", blanks: ["hiking", "slipped", "fell", "laughed", "shivering"] },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Word Ending Card Sort",
        content: "Write 15 base words on cards. On separate cards, write the three endings: -ing, -ed, -er. Mix them all up, then race to make correct word + ending pairs as fast as you can. Time yourself! Can you beat your own score?",
      },
      // 41
      {
        type: "open-response",
        title: "Proofread: Fix the Word Ending Errors",
        instruction: "Read the paragraph below. Find and correct 5 word ending spelling mistakes. Write the corrected version.\n\nShe was hopeing to go to the park. She runed outside and claped her hands with excitement. Then she rided her bike down the street.",
        parentTip: "Ask your child to read the passage aloud slowly — errors often sound wrong before they look wrong.",
        prompts: [
          { text: "Corrected paragraph:", type: "lines", lines: 5 },
          { text: "The 5 mistakes I found:", type: "lines", lines: 2 },
        ],
      },
      // 42
      {
        type: "sorting",
        title: "Sort by Spelling Rule Used",
        instruction: "These words have already had -ing or -ed added. Sort them by which spelling rule was used.",
        columns: ["Consonant doubled", "e was dropped", "Just added"],
        items: [
          { label: "hopped" }, { label: "baking" }, { label: "jumped" }, { label: "running" },
          { label: "smiled" }, { label: "walked" }, { label: "sitting" }, { label: "racing" },
          { label: "laughed" }, { label: "hugging" },
        ],
      },
      // 43
      {
        type: "multiple-choice",
        title: "Which Rule Applies?",
        instruction: "Before adding -ing to each word, which rule applies?",
        parentTip: "This metacognitive task — knowing which rule to apply — is the key to independent spelling.",
        questions: [
          { prompt: "The word 'swim' — before adding -ing, you should:", options: ["Double the m", "Drop the e", "Just add -ing"] },
          { prompt: "The word 'make' — before adding -ing, you should:", options: ["Double the k", "Drop the e", "Just add -ing"] },
          { prompt: "The word 'open' — before adding -ing, you should:", options: ["Double the n", "Drop the e", "Just add -ing"] },
          { prompt: "The word 'chat' — before adding -ing, you should:", options: ["Double the t", "Drop the e", "Just add -ing"] },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Build a Word Ending Table",
        instruction: "Complete the table by filling in all three forms for each base word. Apply the correct rules.",
        prompts: [
          { text: "Base: stop  |  -ing: ___  |  -ed: ___  |  -er: ___", type: "lines", lines: 1 },
          { text: "Base: write |  -ing: ___  |  -ed: ___  |  -er: ___", type: "lines", lines: 1 },
          { text: "Base: teach |  -ing: ___  |  -ed: ___  |  -er: ___", type: "lines", lines: 1 },
          { text: "Base: big   |  -ing: N/A  |  -ed: N/A  |  -er: ___", type: "lines", lines: 1 },
          { text: "Base: fast  |  -ing: N/A  |  -ed: N/A  |  -er: ___", type: "lines", lines: 1 },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Irregular -ed Verbs",
        content: "Some verbs don't follow the -ed rule at all — their past tense is completely different! These are called irregular verbs: run → ran (not runned), go → went (not goed), come → came (not comed), see → saw, eat → ate, sing → sang. You need to learn these by heart as you read and write.",
      },
      // 46
      {
        type: "sorting",
        title: "Regular or Irregular Past Tense?",
        instruction: "Sort each past tense verb into 'Regular (-ed)' or 'Irregular (changes completely)'.",
        parentTip: "If you can make the past tense by adding -ed, it is regular. If the whole word changes, it is irregular.",
        columns: ["Regular (-ed)", "Irregular (changes)"],
        items: [
          { label: "jumped" }, { label: "ran" }, { label: "baked" }, { label: "went" },
          { label: "smiled" }, { label: "sang" }, { label: "walked" }, { label: "saw" },
          { label: "waved" }, { label: "ate" },
        ],
      },
      // 47
      {
        type: "matching",
        title: "Match the Irregular Past Tense",
        instruction: "Draw a line from the base verb to its correct irregular past tense form.",
        parentTip: "Irregular verbs must be memorised — exposure through reading is the best way to learn them.",
        left: ["run", "go", "see", "sing", "eat"],
        right: ["went", "ran", "ate", "saw", "sang"],
      },
      // 48
      {
        type: "fill-in-blank",
        title: "Regular and Irregular Past Tense in Context",
        instruction: "Complete each sentence using the past tense of the verb in brackets.",
        sentences: [
          { text: "She ___ (run) all the way to school.", blanks: ["ran"] },
          { text: "He ___ (bake) a birthday cake.", blanks: ["baked"] },
          { text: "They ___ (go) to the beach yesterday.", blanks: ["went"] },
          { text: "She ___ (wave) goodbye from the window.", blanks: ["waved"] },
          { text: "He ___ (see) a shooting star last night.", blanks: ["saw"] },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Regular vs Irregular Verb Statements",
        instruction: "Circle TRUE or FALSE for each statement.",
        statements: [
          { text: "The past tense of 'go' is 'goed'.", answer: false },
          { text: "The past tense of 'walk' is 'walked'.", answer: true },
          { text: "The past tense of 'see' is 'seed'.", answer: false },
          { text: "The past tense of 'bake' is 'baked'.", answer: true },
          { text: "The past tense of 'run' is 'ran'.", answer: true },
        ],
      },
      // 50
      {
        type: "home-activity",
        title: "Word Ending Story Game",
        instruction: "Play a storytelling game using word endings. One person says a sentence with -ed (past), the other continues with -ing (now happening), then use -er to compare characters.",
        parentTip: "This oral game is a playful way to embed tense awareness without formal practice. Even 5 minutes is valuable.",
        suggestions: [
          "One person says a sentence with a past tense (-ed) verb",
          "The next person continues the story using a present tense (-ing) verb",
          "The next person adds a comparison using an -er word",
          "Keep going until the story has 8–10 sentences!",
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────
      // 51
      {
        type: "open-response",
        title: "Write a Paragraph Using -ing, -ed and -er",
        instruction: "Write a paragraph (5–6 sentences) about a sport or activity you enjoy. Include at least 2 -ing words, 2 -ed words and 1 -er word. Underline and label each one.",
        parentTip: "Connecting grammar to personal interest makes writing feel purposeful — praise specific and detailed sentences.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 8 },
          { text: "My word endings list:", type: "lines", lines: 3 },
        ],
      },
      // 52
      {
        type: "circle-correct",
        title: "Spot the Error in Each Sentence",
        instruction: "Each sentence has one word ending error. Circle the incorrect word.",
        questions: [
          { prompt: "She was hopeing the bus would arrive soon.", options: ["was", "hopeing", "arrive"] },
          { prompt: "He rided his bike all the way home.", options: ["rided", "all", "home"] },
          { prompt: "They were swiming in the pool.", options: ["were", "swiming", "pool"] },
          { prompt: "She is a quicklier runner than her sister.", options: ["is", "quicklier", "runner"] },
        ],
      },
      // 53
      {
        type: "fill-in-blank",
        title: "Proofread and Rewrite",
        instruction: "Complete the paragraph by writing the correct form of each base verb in brackets.",
        sentences: [
          { text: "Mia ___ (love) ___ (swim). Yesterday, she ___ (race) her cousin and ___ (win). She is a much ___ (strong) swimmer than she ___ (use) to be. Now she is ___ (train) for the regional meet.", blanks: ["loves", "swimming", "raced", "won", "stronger", "used", "training"] },
        ],
      },
      // 54
      {
        type: "sorting",
        title: "Sort the Underlined Words",
        instruction: "Read each sentence. Find the underlined word and sort it by its word ending.",
        columns: ["-ing word", "-ed word", "-er word"],
        items: [
          { label: "She was running down the hall." },
          { label: "He baked a loaf of bread." },
          { label: "She is a faster swimmer now." },
          { label: "They were laughing at the joke." },
          { label: "He climbed the tree yesterday." },
          { label: "The teacher explained the rule." },
          { label: "She is dancing beautifully." },
          { label: "He is a stronger rider than before." },
        ],
      },
      // 55
      {
        type: "multiple-choice",
        title: "Correct the Word Ending Mistake",
        instruction: "Choose the correctly spelled replacement for the underlined error.",
        questions: [
          { prompt: "She was bakeing all morning.", options: ["baking", "baked", "baker"] },
          { prompt: "He admited he was wrong.", options: ["admitting", "admitted", "admiter"] },
          { prompt: "They were danceing at the party.", options: ["dancing", "danced", "dancer"] },
          { prompt: "She is the quickest runnner.", options: ["running", "runner", "runer"] },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Rewrite the Paragraph Correcting All Errors",
        instruction: "Read the paragraph below. Find and correct ALL word ending errors. Write the corrected version.\n\nThe children were swiming in the pool. One girl was a quickier swimmer than the rest. She had practiceed for months, trainning every day after school. She hoped that all her hard work had payed off.",
        prompts: [
          { text: "Corrected paragraph:", type: "lines", lines: 7 },
          { text: "Errors I found (list them):", type: "lines", lines: 3 },
        ],
      },
      // 57
      {
        type: "matching",
        title: "Match the Sentence to the Tense",
        instruction: "Draw a line from each sentence to the tense it is written in.",
        left: [
          "She is jumping on the trampoline.",
          "He baked a pie last night.",
          "She is a faster reader than before.",
          "They were laughing loudly.",
          "He had walked for an hour.",
        ],
        right: ["Past tense (-ed)", "Present/continuous (-ing)", "Comparison (-er)", "Past continuous (-ed/-ing)", "Past perfect (had + -ed)"],
      },
      // 58
      {
        type: "open-response",
        title: "Tense Timeline Writing",
        instruction: "Write 3 sentences about the same event: one in the past (-ed), one happening now (-ing), and one comparing two things (-er).",
        parentTip: "This helps your child understand how tense shapes meaning. Try an event they know well, like a sports game.",
        prompts: [
          { text: "Past (-ed): ___", type: "lines", lines: 2 },
          { text: "Happening now (-ing): ___", type: "lines", lines: 2 },
          { text: "Comparison (-er): ___", type: "lines", lines: 2 },
        ],
      },
      // 59
      {
        type: "true-false",
        title: "Advanced Word Ending Statements",
        instruction: "Circle TRUE or FALSE for each statement.",
        statements: [
          { text: "The -ing form always describes something happening right now.", answer: false },
          { text: "Words ending in 'e' must drop the 'e' before adding -ing.", answer: true },
          { text: "The -er suffix always makes a comparison.", answer: false },
          { text: "Double the consonant in 'sit' before adding -ing: 'sitting'.", answer: true },
          { text: "The -ed form is only used to show the past tense.", answer: false },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip",
        title: "Tip: -ing Used With 'was/were' for Past Continuous",
        content: "The -ing form isn't only used for the present! When you pair it with 'was' or 'were', it describes something that was happening in the past over a period of time: 'She was running when it started to rain.' This is called the past continuous tense. Look for 'was/were + -ing' in your reading.",
      },
      // 61 — SPARK at ~60
      {
        type: "spark",
        title: "Spark: Tense Switch Challenge",
        content: "Take a favourite paragraph from a book. Rewrite it so that all the past tense verbs (-ed) become present continuous (-ing with 'is/are'). Then read both versions aloud. How does the feel of the paragraph change? Which version is more exciting?",
      },
      // 62
      {
        type: "fill-in-blank",
        title: "Past Continuous: was/were + -ing",
        instruction: "Complete each sentence using 'was' or 'were' and the -ing form of the verb in brackets.",
        sentences: [
          { text: "She ___ ___ (read) when the phone rang.", blanks: ["was", "reading"] },
          { text: "They ___ ___ (swim) when the storm arrived.", blanks: ["were", "swimming"] },
          { text: "He ___ ___ (bake) when we arrived.", blanks: ["was", "baking"] },
          { text: "We ___ ___ (play) in the garden all morning.", blanks: ["were", "playing"] },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Write Using Past Continuous",
        instruction: "Write 4 sentences in the past continuous tense (was/were + -ing). Describe what different family members were doing last Saturday afternoon.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
          { text: "Sentence 4:", type: "lines", lines: 2 },
        ],
      },
      // 64
      {
        type: "multiple-choice",
        title: "Which Form Completes the Sentence Best?",
        instruction: "Choose the correct form of the verb to complete each sentence most naturally.",
        questions: [
          { prompt: "She ___ to school when the rain started.", options: ["walks", "walked", "was walking", "has walked"] },
          { prompt: "He is the ___ player on the team.", options: ["fast", "faster", "fastest", "fastly"] },
          { prompt: "They ___ the project yesterday.", options: ["finishing", "finished", "are finishing", "finisher"] },
          { prompt: "She is a talented ___.", options: ["singing", "sung", "singer", "sang"] },
        ],
      },
      // 65
      {
        type: "circle-correct",
        title: "Choose -er or -est?",
        instruction: "Circle the correct comparative or superlative form in each sentence.",
        parentTip: "Explain: -er compares two things; -est is used when comparing three or more.",
        questions: [
          { prompt: "She is the ___ runner in the school.", options: ["faster", "fastest"] },
          { prompt: "This bag is ___ than that one.", options: ["heavier", "heaviest"] },
          { prompt: "He is the ___ in his class.", options: ["taller", "tallest"] },
          { prompt: "This road is ___ than the other one.", options: ["busier", "busiest"] },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Using -er and -est in Sentences",
        instruction: "Write a sentence using the -er form AND the -est form of each adjective.",
        parentTip: "Two sentences for each adjective — reinforce that -er compares two, -est compares three or more.",
        prompts: [
          { text: "fast → -er sentence: ___\n-est sentence: ___", type: "lines", lines: 3 },
          { text: "tall → -er sentence: ___\n-est sentence: ___", type: "lines", lines: 3 },
          { text: "strong → -er sentence: ___\n-est sentence: ___", type: "lines", lines: 3 },
        ],
      },
      // 67
      {
        type: "sorting",
        title: "Sort the -er and -est Words",
        instruction: "Sort these words into 'comparing two (-er)' or 'comparing three or more (-est)'.",
        columns: ["Comparing two (-er)", "Comparing 3+ (-est)"],
        items: [
          { label: "She is taller than her sister." },
          { label: "He is the fastest in the class." },
          { label: "This book is longer than that one." },
          { label: "She is the best singer in the school." },
          { label: "This hill is steeper than the last." },
          { label: "He is the youngest child in his family." },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Write a Descriptive Paragraph Using All Three Endings",
        instruction: "Write a descriptive paragraph (6–7 sentences) about a race or competition. Include at least 3 -ing words, 3 -ed words, and 2 -er/-est words. Label each one in the margin.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 9 },
        ],
      },
      // 69
      {
        type: "fill-in-blank",
        title: "Complete the Story: All Three Endings",
        instruction: "Complete the story using the correct form of each verb or adjective in brackets.",
        sentences: [
          { text: "Jake ___ (dream) of becoming the ___ (fast) swimmer in his school. He ___ (train) every day, ___ (work) harder than anyone else. By the end of the year, he ___ (achieve) his goal — he was the ___ (fast) swimmer of them all.", blanks: ["dreamed", "fastest", "trained", "working", "achieved", "fastest"] },
        ],
      },
      // 70
      {
        type: "home-activity",
        title: "Word Ending Read-Aloud Activity",
        instruction: "During your next read-aloud, listen for -ing, -ed and -er words. Tap the table whenever you hear one.",
        parentTip: "Read-aloud listening tasks build both phonological awareness and tense understanding simultaneously. Keep it playful.",
        suggestions: [
          "Tap once for -ing words, twice for -ed words, three times for -er words",
          "Keep a tally of how many of each type you hear in one chapter",
          "Write down 3 interesting -ing or -ed verbs from the book",
          "Can you find a past continuous sentence (was/were + -ing) in the book?",
        ],
      },
      // 71
      {
        type: "true-false",
        title: "Word Ending Rules: True or False Advanced",
        instruction: "Circle TRUE or FALSE for each statement.",
        statements: [
          { text: "You should add -est (not -er) when comparing three or more things.", answer: true },
          { text: "The -er suffix can turn a verb into a noun (e.g. teach → teacher).", answer: true },
          { text: "You only need -ed for regular past tense verbs.", answer: true },
          { text: "The past continuous always uses 'was' with an -ing verb.", answer: false },
          { text: "Words like 'preferred' double the consonant because the stress is on the final syllable.", answer: true },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Explain -ed, -ing and -er to a Younger Child",
        instruction: "Write a short explanation (4–5 sentences) that a Year 1 student could understand about the three word endings. Use examples in your explanation.",
        prompts: [
          { text: "My explanation:", type: "lines", lines: 7 },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Creative Writing: Word Endings Embedded",
        instruction: "Write a short story (6–8 sentences) about an adventure. Your story must include: 3 -ing verbs, 4 -ed verbs, 2 -er comparisons, and 1 -est superlative. Underline and label each one.",
        parentTip: "Creative tasks with embedded grammar requirements produce much stronger learning than drills alone.",
        prompts: [
          { text: "My story:", type: "lines", lines: 10 },
          { text: "My word endings checklist:", type: "lines", lines: 3 },
        ],
      },
      // 74
      {
        type: "multiple-choice",
        title: "Vocabulary and Word Endings in Context",
        instruction: "Choose the best word (with the correct ending) to complete each sentence.",
        questions: [
          { prompt: "The scientist was ___ the results of the experiment.", options: ["recorded", "recording", "recorder"] },
          { prompt: "She is the ___ mathematician in the group.", options: ["strongest", "stronger", "strong"] },
          { prompt: "He had spent years ___ the ancient text.", options: ["translating", "translated", "translator"] },
          { prompt: "They ___ the summit just before sunset.", options: ["reaching", "reached", "reacher"] },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: -er on Two-Syllable Adjectives",
        content: "For longer adjectives (two or more syllables), we often use 'more' instead of adding -er. For example: 'more beautiful' (not beautifuler), 'more difficult' (not difficulter), 'more interesting'. Short adjectives (one syllable) take -er directly: tall → taller, fast → faster, big → bigger.",
      },
      // 76
      {
        type: "sorting",
        title: "Add -er or Use 'more'?",
        instruction: "Sort each adjective — should you add -er or use 'more ___' to compare?",
        parentTip: "Short adjectives (one syllable) take -er; longer adjectives (two or more syllables) usually use 'more'.",
        columns: ["Add -er", "Use 'more ___'"],
        items: [
          { label: "tall" }, { label: "beautiful" }, { label: "fast" }, { label: "interesting" },
          { label: "big" }, { label: "difficult" }, { label: "old" }, { label: "exciting" },
          { label: "short" }, { label: "wonderful" },
        ],
      },
      // 77
      {
        type: "fill-in-blank",
        title: "-er or 'more'? Complete the Sentence",
        instruction: "Complete each sentence with the correct comparative form of the adjective in brackets.",
        sentences: [
          { text: "She was ___ (tall) than her friend.", blanks: ["taller"] },
          { text: "This book is ___ (interesting) than the last one.", blanks: ["more interesting"] },
          { text: "The maths problem was ___ (difficult) than I expected.", blanks: ["more difficult"] },
          { text: "He was ___ (fast) on the second lap.", blanks: ["faster"] },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Write a Comparison Using -er and 'more'",
        instruction: "Write 4 sentences comparing two things you know (people, animals, books, etc.). Use -er for short adjectives and 'more' for longer ones.",
        prompts: [
          { text: "Sentence 1 (using -er):", type: "lines", lines: 2 },
          { text: "Sentence 2 (using 'more'):", type: "lines", lines: 2 },
          { text: "Sentence 3 (using -er):", type: "lines", lines: 2 },
          { text: "Sentence 4 (using 'more'):", type: "lines", lines: 2 },
        ],
      },
      // 79
      {
        type: "sorting",
        title: "Final Review Sort: All Three Endings",
        instruction: "Sort these words and phrases into the correct column.",
        columns: ["-ing form", "-ed form", "-er/-est form"],
        items: [
          { label: "swimming" }, { label: "baked" }, { label: "faster" }, { label: "singing" },
          { label: "raced" }, { label: "tallest" }, { label: "laughing" }, { label: "preferred" },
          { label: "smarter" }, { label: "dancing" }, { label: "admitted" }, { label: "strongest" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Word Endings in a Real Book",
        content: "Open a book to any page. Read it carefully and tally every -ing, -ed and -er word you find. Then write a short analysis: Which ending appeared most often? Were there any tricky spellings you noticed? Share your findings with someone at home.",
      },
      // ── EXTENDING (81–100) ────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Analyse Word Endings: Reflective Writing",
        instruction: "Answer each question in full sentences using examples from your own writing or reading.",
        prompts: [
          { text: "Why do you think the doubling rule exists for words like 'hop → hopping'? What would happen if we didn't double the consonant?", type: "lines", lines: 3 },
          { text: "Explain the difference between 'he was running' and 'he ran'. When would you use each?", type: "lines", lines: 3 },
          { text: "When is it better to use -er vs 'more'? Give two examples of each.", type: "lines", lines: 3 },
        ],
      },
      // 82
      {
        type: "sorting",
        title: "Advanced Sort: Stress-Dependent Doubling",
        instruction: "These two-syllable words sometimes double the final consonant depending on stress. Sort them: double if the stress is on the LAST syllable, don't double if the stress is on the FIRST syllable.",
        parentTip: "This is an extending concept — the rule is: if the stress is on the final syllable, double (prefer → preferred). If on the first syllable, don't (open → opening).",
        columns: ["Double the consonant (stress on last)", "Don't double (stress on first)"],
        items: [
          { label: "prefer" }, { label: "listen" }, { label: "begin" }, { label: "open" },
          { label: "occur" }, { label: "enter" }, { label: "commit" }, { label: "happen" },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Research: Other Common Suffixes",
        instruction: "You have learned -ing, -ed and -er. Research these other suffixes: -ment, -ness, -ful. Find 3 example words for each and write a sentence using one word from each group.",
        parentTip: "Using a dictionary or exploring books together turns this into a research task. Celebrate curiosity.",
        prompts: [
          { text: "-ment words: ___", type: "lines", lines: 1 },
          { text: "-ness words: ___", type: "lines", lines: 1 },
          { text: "-ful words: ___", type: "lines", lines: 1 },
          { text: "My three sentences:", type: "lines", lines: 5 },
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "Extending Vocabulary: Choose the Most Precise Word",
        instruction: "Choose the -ing or -ed word that best fits the context of each sentence.",
        questions: [
          { prompt: "The scientist was ___ the data when the alarm sounded.", options: ["analysing", "looking", "checking", "watching"] },
          { prompt: "She ___ fluently in three languages.", options: ["spoke", "talked", "communicated", "chatted"] },
          { prompt: "He was ___ his explanation when the class interrupted.", options: ["finishing", "ending", "stopping", "concluding"] },
          { prompt: "She ___ a solution after hours of careful thought.", options: ["discovered", "found", "got", "achieved"] },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Extended Writing: A Day in the Life",
        instruction: "Write a full page about a day in the life of an interesting character (real or invented). Use: at least 5 -ing verbs, 5 -ed verbs, 3 -er comparisons, and 2 -est superlatives. Highlight each with a coloured pencil and label it in the margin.",
        parentTip: "Extended writing tasks show how grammar serves meaning — celebrate the story first, then the grammar.",
        prompts: [
          { text: "My extended writing:", type: "lines", lines: 14 },
          { text: "Word endings I used:", type: "lines", lines: 4 },
        ],
      },
      // 86
      {
        type: "fill-in-blank",
        title: "Formal Writing: -ed Verbs in Report Style",
        instruction: "Complete this formal report paragraph with the correct past tense form of each verb in brackets.",
        sentences: [
          { text: "Scientists ___ (discover) a new species last year. They ___ (observe) the animal for three months before ___ (publish) their findings. The team ___ (conclude) that the species ___ (prefer) warm, wet environments.", blanks: ["discovered", "observed", "publishing", "concluded", "preferred"] },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Write a Persuasive Text Using Word Endings",
        instruction: "Write a persuasive paragraph (6–8 sentences) arguing for something you believe in (e.g. why reading is valuable, why sport is important). Use precise -ing, -ed and -er words to make your argument stronger. Underline each one.",
        prompts: [
          { text: "My persuasive paragraph:", type: "lines", lines: 10 },
        ],
      },
      // 88
      {
        type: "sorting",
        title: "Sort the Word Forms by Function",
        instruction: "Sort each underlined word by its grammatical function.",
        parentTip: "This is a challenging grammar analysis task — work through it together, discussing each example.",
        columns: ["Action happening now (present)", "Completed action (past)", "Comparison", "Person/thing that does"],
        items: [
          { label: "She is running quickly." },
          { label: "He finished the exam." },
          { label: "She is a faster reader." },
          { label: "The baker arrived early." },
          { label: "They are competing now." },
          { label: "He baked the bread." },
          { label: "This road is longer." },
          { label: "She is a skilled painter." },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Teach the Rules: Write a Grammar Guide",
        instruction: "Write a clear grammar guide (8–10 sentences) explaining the rules for adding -ing, -ed and -er to base words. Include examples for each rule, a tip about irregular verbs, and advice about -er vs 'more'.",
        prompts: [
          { text: "My grammar guide:", type: "lines", lines: 12 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: -ed Verbs Used as Adjectives",
        content: "Did you know that -ed verbs can also work as adjectives? For example: 'a broken window', 'a painted wall', 'a tired child'. In these phrases, the -ed word is describing the noun, not showing past tense. Look for this pattern in your reading — it is very common in descriptive writing.",
      },
      // 91
      {
        type: "sorting",
        title: "Is the -ed Word a Verb or an Adjective?",
        instruction: "Read each sentence. Is the underlined -ed word working as a verb (action) or an adjective (description)?",
        columns: ["Working as a verb", "Working as an adjective"],
        items: [
          { label: "She painted the fence yesterday." },
          { label: "I found a painted box in the attic." },
          { label: "He broke the window accidentally." },
          { label: "She cleaned the broken glass." },
          { label: "They discovered a forgotten cave." },
          { label: "He learned to swim." },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Use -ed Adjectives in Descriptive Writing",
        instruction: "Write 5 sentences describing a setting (a forest, a beach, an old house, etc.). Each sentence must include at least one -ed adjective (e.g. twisted branches, faded paint, broken steps).",
        parentTip: "-ed adjectives are a hallmark of vivid descriptive writing. Celebrate unusual and precise choices.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
          { text: "Sentence 4:", type: "lines", lines: 2 },
          { text: "Sentence 5:", type: "lines", lines: 2 },
        ],
      },
      // 93
      {
        type: "multiple-choice",
        title: "Is the -ing Word a Verb or a Noun?",
        instruction: "In some sentences, an -ing word works as a noun (called a gerund). Choose whether the underlined -ing word is a verb or a noun.",
        parentTip: "A gerund is an -ing word used as a noun: 'Swimming is good exercise.' Here, 'swimming' is the subject of the sentence.",
        questions: [
          { prompt: "Swimming is excellent exercise.", options: ["Verb", "Noun (gerund)"] },
          { prompt: "She was swimming in the pool.", options: ["Verb", "Noun (gerund)"] },
          { prompt: "Running every day improved his fitness.", options: ["Verb", "Noun (gerund)"] },
          { prompt: "He was running late for school.", options: ["Verb", "Noun (gerund)"] },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Use -ing Nouns (Gerunds) in Sentences",
        instruction: "Write a sentence where an -ing word is the subject (the main topic) of the sentence. Do this for 4 different activities.",
        prompts: [
          { text: "Sentence using 'Reading': ___", type: "lines", lines: 2 },
          { text: "Sentence using 'Swimming': ___", type: "lines", lines: 2 },
          { text: "Sentence using 'Writing': ___", type: "lines", lines: 2 },
          { text: "Sentence using 'Running': ___", type: "lines", lines: 2 },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Analyse a Paragraph: Word Endings",
        instruction: "Read this paragraph. Find every -ing, -ed and -er word. Label each one and explain its grammatical function.\n\nParagraph: 'Lena had been training for months, pushing herself harder every day. She was determined to become a stronger and faster runner. Last Tuesday, she entered the district competition and finished first, crossing the line with a relieved smile.'",
        prompts: [
          { text: "Words I found and their functions:", type: "lines", lines: 8 },
          { text: "Total -ing words: ___  Total -ed words: ___  Total -er words: ___", type: "lines", lines: 1 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Write a Complex Narrative",
        instruction: "Write a narrative (at least 12 sentences) that demonstrates your full understanding of -ing, -ed and -er. Use: gerunds (-ing as nouns), past continuous (was/were + -ing), -ed adjectives, -er comparisons, and irregular past tense verbs. Highlight and label your examples in the margin.",
        prompts: [
          { text: "My narrative:", type: "lines", lines: 15 },
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Create a Word Ending Study Guide",
        instruction: "Design a study guide for someone who wants to learn about -ing, -ed and -er. Include: the three spelling rules, examples for each rule, irregular verb examples, and a tip about -er vs 'more'. Make it clear and easy to understand.",
        prompts: [
          { text: "My study guide:", type: "lines", lines: 14 },
        ],
      },
      // 98
      {
        type: "true-false",
        title: "Advanced Grammar Statements",
        instruction: "Circle TRUE or FALSE for each advanced statement.",
        statements: [
          { text: "An -ing word can function as a noun in a sentence (gerund).", answer: true },
          { text: "All -ed past tense verbs are regular.", answer: false },
          { text: "Two-syllable words always double the consonant before -ing.", answer: false },
          { text: "-ed words can act as adjectives to describe nouns.", answer: true },
          { text: "The rule 'drop the e' applies before adding -ed as well as -ing.", answer: true },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflective Writing: My Word Ending Journey",
        instruction: "Write a reflective paragraph about what you have learned about -ing, -ed and -er. Include: what you found easy, what was tricky, one surprising thing you learned, and how you will use this knowledge in your writing.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 8 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark",
        title: "Spark: Word Endings Language Investigation",
        content: "Investigate this question: 'Why does English have so many irregular past tense verbs?' Research 5 irregular verbs (run/ran, go/went, eat/ate, etc.) and try to find out where they come from — some are from Old English, Viking languages (Old Norse), or French. Create a mini poster showing your findings. This is real linguistic history!",
      },
    ],
  },

  // ── WS 3: Nouns, Verbs and Adjectives ──────────────────────────
  {
    slug: "nouns-verbs-adjectives",
    title: "Nouns, Verbs and Adjectives",
    strand: "Language",
    description:
      "Identify and use nouns (people, places, things), verbs (action words) and adjectives (describing words) in simple sentences.",
    learningGuide: {
      concept:
        "Nouns name people, places or things (dog, park, happiness). Verbs show actions or states (run, is, seems). Adjectives describe nouns (fluffy, tall, noisy). Together they help us build interesting sentences.",
      activation:
        "Point to something in the room and ask: 'What is that?' (noun). Then ask: 'What is it doing?' (verb). Finally: 'What does it look like?' (adjective). Repeat with two or three objects.",
      check:
        "Can your child correctly label words as nouns, verbs or adjectives? Can they add an adjective to make a plain sentence more interesting?",
    },
    lesson: {
      title: "Word Detective",
      objective:
        "Identify nouns, verbs and adjectives and use them to write more interesting sentences.",
      materials: [
        "Paper and pencil",
        "Three different coloured pencils or crayons",
        "Old newspaper or magazine (optional, for word hunt)",
      ],
      intro: {
        title: "The Three Word Jobs",
        script:
          "Words have jobs to do in sentences — just like people have jobs! Some words name things — we call those nouns. Some words show action — those are verbs. And some words describe what things are like — those are adjectives. Let's find out which is which!",
        action:
          "Write these three headings in three colours: NOUNS (blue), VERBS (red), ADJECTIVES (green). Together brainstorm 3 words for each category from things visible in the room.",
      },
      mainActivity: {
        title: "Colour the Word Jobs",
        script:
          "I am going to write a few sentences. Your job is to find the nouns, verbs and adjectives and colour them in — blue for nouns, red for verbs and green for adjectives. Let's read each sentence together first before you start colouring.",
        action:
          "Write these sentences on paper: 'The fluffy cat slept on the warm mat.' / 'A tall giraffe ran through the dusty desert.' / 'Two little frogs jumped over the green log.' Let your child colour-code the words. Discuss each choice together.",
      },
      wrapUp: {
        title: "Build a Better Sentence",
        script:
          "Here is a plain, boring sentence: 'The dog ran.' Let's make it much more interesting by adding an adjective and a better verb. What kind of dog? How did it run?",
        action:
          "Together expand the sentence step by step. Write 'The ___ dog ___ (ran).'. Fill in the adjective and choose a more vivid verb (bolted, dashed, sprinted). Read the new sentence aloud. Celebrate how much better it sounds!",
      },
      parentTip:
        "Young writers often default to plain nouns and 'went' or 'got' as verbs. The best way to build vocabulary is to read widely and to play with language — so swap verbs in funny ways ('The elephant sneezed onto the bus'), celebrate unusual adjectives, and enjoy the silliness of it all. Grammar is best learned through play at this age.",
      extension:
        "Play 'Add-a-Word': start with a bare sentence like 'The bird flew.' Take turns adding one word at a time (an adjective, a more specific noun, an adverb) until you have the most elaborate sentence you can build. Write it out at the end.",
      resources: [
        {
          title: "Nouns, Verbs and Adjectives",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy Year 2 level English language and grammar activities.",
        },
        {
          title: "ABC Splash — Parts of Speech",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education interactive English language resource.",
        },
        {
          title: "Starfall — Learn to Read",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall reading and writing activities for early primary.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      // 1
      {
        type: "sorting",
        title: "Sort the Words: Noun, Verb or Adjective? (Set A)",
        instruction: "Read each word. Sort it into the correct column: Noun, Verb or Adjective.",
        parentTip: "Ask: 'Is it a naming word, an action word, or a describing word?' Say it in a sentence if unsure.",
        columns: ["Noun", "Verb", "Adjective"],
        items: [
          { label: "dog" }, { label: "happy" }, { label: "run" },
          { label: "flower" }, { label: "tiny" }, { label: "jump" },
          { label: "school" }, { label: "noisy" }, { label: "swim" },
          { label: "river" }, { label: "soft" }, { label: "laugh" },
        ],
      },
      // 2
      {
        type: "circle-correct",
        title: "Identify the Word Type",
        instruction: "Read each sentence. Circle the word type asked for in brackets.",
        parentTip: "Read the full sentence aloud before choosing — the context makes the word's job clearer.",
        questions: [
          { prompt: "The fluffy cat sat on the mat. [Adjective]", options: ["cat", "fluffy", "sat"] },
          { prompt: "A tall tree stood in the garden. [Noun]", options: ["tall", "stood", "tree"] },
          { prompt: "She ran quickly to the park. [Verb]", options: ["quickly", "ran", "park"] },
          { prompt: "The shiny red ball bounced away. [Adjective]", options: ["ball", "bounced", "shiny"] },
        ],
      },
      // 3
      {
        type: "sorting",
        title: "Sort the Words: Noun, Verb or Adjective? (Set B)",
        instruction: "Sort these words into the correct column.",
        columns: ["Noun", "Verb", "Adjective"],
        items: [
          { label: "mountain" }, { label: "bright" }, { label: "dance" },
          { label: "garden" }, { label: "smooth" }, { label: "eat" },
          { label: "city" }, { label: "angry" }, { label: "sleep" },
          { label: "pencil" }, { label: "cold" }, { label: "whisper" },
        ],
      },
      // 4
      {
        type: "matching",
        title: "Match the Word to Its Type",
        instruction: "Draw a line from each word to its correct word type.",
        parentTip: "If unsure, try putting the word in the sentence 'The ___ dog' (adjective), 'The dog ___' (verb), or 'The ___ is here' (noun).",
        left: ["beautiful", "elephant", "dash", "warm", "ocean", "giggle"],
        right: ["Noun", "Verb", "Adjective", "Noun", "Verb", "Adjective"],
      },
      // 5
      {
        type: "circle-correct",
        title: "Which Word Is the Noun?",
        instruction: "Circle the noun in each sentence.",
        questions: [
          { prompt: "The small rabbit hopped across the green field.", options: ["small", "rabbit", "hopped"] },
          { prompt: "A brown bear climbed the tall tree.", options: ["tall", "climbed", "bear"] },
          { prompt: "Two happy children ran through the gate.", options: ["happy", "children", "ran"] },
          { prompt: "The noisy crowd cheered at the game.", options: ["noisy", "crowd", "cheered"] },
        ],
      },
      // 6
      {
        type: "circle-correct",
        title: "Which Word Is the Verb?",
        instruction: "Circle the verb in each sentence.",
        questions: [
          { prompt: "The fluffy cat pounced on the toy.", options: ["fluffy", "cat", "pounced"] },
          { prompt: "A tall wave crashed on the shore.", options: ["tall", "crashed", "shore"] },
          { prompt: "The bright moon shone in the dark sky.", options: ["bright", "shone", "moon"] },
          { prompt: "The tiny ant carried a large crumb.", options: ["tiny", "ant", "carried"] },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "Which Word Is the Adjective?",
        instruction: "Circle the adjective in each sentence.",
        questions: [
          { prompt: "The old man walked slowly across the bridge.", options: ["man", "old", "walked"] },
          { prompt: "She found a dusty book under the bed.", options: ["dusty", "found", "book"] },
          { prompt: "A sharp pain shot through his foot.", options: ["pain", "shot", "sharp"] },
          { prompt: "The cheerful girl waved at the bus driver.", options: ["girl", "cheerful", "waved"] },
        ],
      },
      // 8
      {
        type: "true-false",
        title: "Noun, Verb or Adjective? True or False? (Set A)",
        instruction: "Circle TRUE or FALSE for each statement.",
        parentTip: "This checks whether your child can apply definitions, not just recall them.",
        statements: [
          { text: "'Dog' is a noun.", answer: true },
          { text: "'Fluffy' is a verb.", answer: false },
          { text: "'Run' is a verb.", answer: true },
          { text: "'Happy' is a noun.", answer: false },
          { text: "'School' is a noun.", answer: true },
          { text: "'Laugh' is an adjective.", answer: false },
        ],
      },
      // 9
      {
        type: "fill-in-blank",
        title: "Fill in with a Noun",
        instruction: "Complete each sentence by writing a suitable noun in the blank.",
        sentences: [
          { text: "The ___ barked all night.", blanks: ["dog"] },
          { text: "She lost her ___ at the beach.", blanks: ["shoe"] },
          { text: "A large ___ landed on the window.", blanks: ["butterfly"] },
          { text: "He kicked the ___ over the fence.", blanks: ["ball"] },
        ],
      },
      // 10
      {
        type: "fill-in-blank",
        title: "Fill in with a Verb",
        instruction: "Complete each sentence by writing a suitable verb in the blank.",
        sentences: [
          { text: "The children ___ in the park.", blanks: ["played"] },
          { text: "She ___ her hands before eating.", blanks: ["washed"] },
          { text: "The cat ___ over the fence.", blanks: ["jumped"] },
          { text: "He ___ the door and walked inside.", blanks: ["opened"] },
        ],
      },
      // 11
      {
        type: "fill-in-blank",
        title: "Fill in with an Adjective",
        instruction: "Complete each sentence by writing a suitable adjective in the blank.",
        sentences: [
          { text: "She wore a ___ dress to the party.", blanks: ["beautiful"] },
          { text: "The ___ wind knocked over the bin.", blanks: ["strong"] },
          { text: "He found a ___ coin on the footpath.", blanks: ["shiny"] },
          { text: "The ___ puppy barked all morning.", blanks: ["tiny"] },
        ],
      },
      // 12
      {
        type: "open-response",
        title: "Build Better Sentences",
        instruction: "Read the plain sentence. Add an adjective and/or a better verb to make it more interesting.",
        parentTip: "Encourage creativity — there is no single right answer. Praise unusual and vivid word choices.",
        prompts: [
          { text: "Plain: The dog ran. Your better sentence:", type: "lines", lines: 2 },
          { text: "Plain: A bird sat in the tree. Your better sentence:", type: "lines", lines: 2 },
          { text: "Plain: The child ate lunch. Your better sentence:", type: "lines", lines: 2 },
        ],
      },
      // 13
      {
        type: "open-response",
        title: "Write Your Own Sentences with All Three Word Types",
        instruction: "Write three sentences. Each must include a noun, a verb AND an adjective. Underline each word type.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
        ],
      },
      // 14
      {
        type: "matching",
        title: "Match the Definition",
        instruction: "Draw a line from each term to its correct definition.",
        left: ["Noun", "Verb", "Adjective"],
        right: [
          "A word that describes a noun",
          "A naming word — a person, place or thing",
          "An action or doing word",
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: The Three Word Jobs",
        content: "Every word in a sentence has a job. Nouns NAME things (cat, city, happiness). Verbs SHOW actions or states (run, is, seems). Adjectives DESCRIBE nouns (fluffy, tall, ancient). One quick test: if you can put 'very' in front of it, it is probably an adjective (very fluffy, very tall). If you can add -ed or -ing to it, it is probably a verb.",
      },
      // 16
      {
        type: "sorting",
        title: "Sort by Word Type: Animals and Actions",
        instruction: "Sort these words into Noun, Verb or Adjective.",
        columns: ["Noun", "Verb", "Adjective"],
        items: [
          { label: "eagle" }, { label: "fierce" }, { label: "swoop" },
          { label: "rabbit" }, { label: "fluffy" }, { label: "burrow" },
          { label: "ocean" }, { label: "deep" }, { label: "shimmer" },
          { label: "mountain" }, { label: "steep" }, { label: "climb" },
        ],
      },
      // 17
      {
        type: "circle-correct",
        title: "Find the Noun in This Sentence",
        instruction: "Each sentence has two nouns. Circle BOTH of them.",
        questions: [
          { prompt: "The tall giraffe ate leaves from the tree.", options: ["giraffe / leaves", "tall / giraffe", "ate / tree"] },
          { prompt: "The happy child found a shiny coin.", options: ["happy / coin", "child / coin", "found / shiny"] },
          { prompt: "A loud bell rang in the empty school.", options: ["loud / rang", "bell / school", "empty / bell"] },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Write a Noun, Verb and Adjective from a Picture",
        instruction: "Imagine you are looking at a picture of a forest. Write one noun, one verb and one adjective that would fit this scene.",
        parentTip: "Use this as a mini brainstorm — there are many right answers. Celebrate specific and unusual choices.",
        prompts: [
          { text: "Noun (something in a forest):", type: "lines", lines: 1 },
          { text: "Verb (something that happens in a forest):", type: "lines", lines: 1 },
          { text: "Adjective (a word describing something in a forest):", type: "lines", lines: 1 },
          { text: "Now write a sentence using all three:", type: "lines", lines: 2 },
        ],
      },
      // 19
      {
        type: "true-false",
        title: "Noun, Verb or Adjective? True or False? (Set B)",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "'Beautiful' is an adjective.", answer: true },
          { text: "'Dance' is a noun.", answer: false },
          { text: "'Mountain' is a verb.", answer: false },
          { text: "'Whisper' can be both a noun and a verb.", answer: true },
          { text: "'Bright' is an adjective.", answer: true },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Colour-Code Your Writing",
        content: "Take a paragraph from any book (or write your own 4–5 sentence paragraph). Use three coloured pencils to highlight: nouns in blue, verbs in red, adjectives in green. Count how many of each you find. Which word type appears most often? Is the text mostly 'doing' words or 'describing' words?",
      },
      // ── DEVELOPING (21–50) ────────────────────────────────────────
      // 21
      {
        type: "sorting",
        title: "Sort Harder Words: Noun, Verb or Adjective?",
        instruction: "These words are a bit trickier — some can be more than one type depending on context. Sort them by their most common use.",
        parentTip: "Words like 'run' and 'jump' are most commonly verbs. Words like 'book' can be a noun or a verb. Encourage discussion.",
        columns: ["Noun", "Verb", "Adjective"],
        items: [
          { label: "triumph" }, { label: "ancient" }, { label: "observe" },
          { label: "struggle" }, { label: "enormous" }, { label: "vanish" },
          { label: "wisdom" }, { label: "frantic" }, { label: "shiver" },
          { label: "silence" }, { label: "delicate" }, { label: "soar" },
        ],
      },
      // 22
      {
        type: "circle-correct",
        title: "What Job Does This Word Do in THIS Sentence?",
        instruction: "The same word can do different jobs. Circle the correct word type for the underlined word in each sentence.",
        parentTip: "Context determines word type — this is a key understanding for language study.",
        questions: [
          { prompt: "She had a beautiful smile. (smile)", options: ["Noun", "Verb", "Adjective"] },
          { prompt: "He tried to smile at the camera. (smile)", options: ["Noun", "Verb", "Adjective"] },
          { prompt: "She wore a long dress. (long)", options: ["Noun", "Verb", "Adjective"] },
          { prompt: "He had to long for better times. (long)", options: ["Noun", "Verb", "Adjective"] },
        ],
      },
      // 23
      {
        type: "open-response",
        title: "Expand the Noun Phrase",
        instruction: "A noun phrase is a noun plus its adjectives. Add two adjectives to each noun to make an interesting noun phrase. Then use the phrase in a sentence.",
        parentTip: "Noun phrases are the building blocks of vivid writing. Encourage unusual word combinations.",
        prompts: [
          { text: "___ ___ cat → sentence:", type: "lines", lines: 2 },
          { text: "___ ___ river → sentence:", type: "lines", lines: 2 },
          { text: "___ ___ house → sentence:", type: "lines", lines: 2 },
        ],
      },
      // 24
      {
        type: "fill-in-blank",
        title: "Complete with the Correct Word Type",
        instruction: "Complete each sentence with the correct type of word as indicated in brackets.",
        sentences: [
          { text: "The ___ (adjective) waves crashed against the rocks.", blanks: ["enormous"] },
          { text: "She began to ___ (verb) as soon as the music started.", blanks: ["dance"] },
          { text: "A ___ (noun) flew past the window.", blanks: ["bird"] },
          { text: "He gave a ___ (adjective) smile and walked away.", blanks: ["nervous"] },
        ],
      },
      // 25
      {
        type: "multiple-choice",
        title: "Choose the Correct Word Type Label",
        instruction: "Choose the correct word type for the underlined word in each sentence.",
        questions: [
          { prompt: "The ancient temple stood in silence.", options: ["Noun", "Verb", "Adjective"] },
          { prompt: "The silence was deafening.", options: ["Noun", "Verb", "Adjective"] },
          { prompt: "She had to struggle through the crowd.", options: ["Noun", "Verb", "Adjective"] },
          { prompt: "The frantic crowd rushed toward the exit.", options: ["Noun", "Verb", "Adjective"] },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Add Adjectives to Make Writing More Vivid",
        instruction: "Rewrite each plain sentence by adding at least two adjectives. Do NOT change the noun or verb.",
        parentTip: "The goal is vivid, specific description — celebrate unusual adjectives over obvious ones like 'big' and 'nice'.",
        prompts: [
          { text: "Plain: A dog ran down the street.\nYour version:", type: "lines", lines: 2 },
          { text: "Plain: The woman opened the door.\nYour version:", type: "lines", lines: 2 },
          { text: "Plain: A bird sat on the branch.\nYour version:", type: "lines", lines: 2 },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Swap the Verb to Change the Feeling",
        instruction: "Read each sentence. Replace the verb with a more interesting one that changes the feeling of the sentence. Explain the difference.",
        parentTip: "Verb choice dramatically affects tone. This task builds vocabulary and authorial awareness.",
        prompts: [
          { text: "The cat went up the tree. New verb: ___ Difference:", type: "lines", lines: 2 },
          { text: "The child said 'hello'. New verb: ___ Difference:", type: "lines", lines: 2 },
          { text: "The man walked away. New verb: ___ Difference:", type: "lines", lines: 2 },
        ],
      },
      // 28
      {
        type: "sorting",
        title: "Sort Verbs by Feeling",
        instruction: "Sort these verbs by the feeling or speed they suggest.",
        parentTip: "This vocabulary activity builds awareness that verbs carry emotional tone.",
        columns: ["Fast / energetic", "Slow / gentle", "Loud / aggressive"],
        items: [
          { label: "sprint" }, { label: "tiptoe" }, { label: "roar" },
          { label: "dash" }, { label: "drift" }, { label: "crash" },
          { label: "zoom" }, { label: "creep" }, { label: "bellow" },
          { label: "leap" }, { label: "glide" }, { label: "smash" },
        ],
      },
      // 29
      {
        type: "matching",
        title: "Match the Verb to Its More Interesting Synonym",
        instruction: "Draw a line from the plain verb to a more expressive verb that means a similar thing.",
        left: ["said", "walked", "ran", "ate", "looked"],
        right: ["sprinted", "glanced", "whispered", "strolled", "devoured"],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Proper Nouns vs Common Nouns",
        content: "Not all nouns are the same! A common noun names a general type of thing: dog, city, river. A proper noun names a specific person, place or thing — and always starts with a capital letter: Rex, Sydney, the Murray River. Check your writing: have you capitalised all proper nouns?",
      },
      // 31
      {
        type: "sorting",
        title: "Common Noun or Proper Noun?",
        instruction: "Sort each noun into the correct column. Remember: proper nouns need a capital letter.",
        parentTip: "Proper nouns are specific — they name a particular person, place or thing.",
        columns: ["Common Noun", "Proper Noun"],
        items: [
          { label: "river" }, { label: "Murray" }, { label: "city" }, { label: "Sydney" },
          { label: "dog" }, { label: "Max" }, { label: "country" }, { label: "Australia" },
          { label: "school" }, { label: "Greenfield Primary" },
        ],
      },
      // 32
      {
        type: "circle-correct",
        title: "Which Proper Noun Is Correctly Capitalised?",
        instruction: "Circle the correctly written proper noun in each row.",
        questions: [
          { prompt: "The name of a dog", options: ["rex", "Rex", "REX"] },
          { prompt: "A city in Australia", options: ["melbourne", "Melbourne", "melbourne"] },
          { prompt: "A river", options: ["murray river", "Murray river", "Murray River"] },
          { prompt: "A person's name", options: ["emma", "Emma", "EMMA"] },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Write Proper Nouns",
        instruction: "Write a proper noun for each common noun. Make sure to capitalise correctly.",
        prompts: [
          { text: "A friend's name (common: friend): ___", type: "lines", lines: 1 },
          { text: "A city you know (common: city): ___", type: "lines", lines: 1 },
          { text: "A pet's name (common: dog): ___", type: "lines", lines: 1 },
          { text: "A country (common: country): ___", type: "lines", lines: 1 },
          { text: "A river or lake near you (common: river): ___", type: "lines", lines: 1 },
        ],
      },
      // 34
      {
        type: "fill-in-blank",
        title: "Common or Proper Noun in Context?",
        instruction: "Complete each sentence with a proper noun (your own choice). Capitalise correctly.",
        sentences: [
          { text: "My favourite city is ___.", blanks: ["[student's answer]"] },
          { text: "My pet is called ___.", blanks: ["[student's answer]"] },
          { text: "I live in ___.", blanks: ["[student's answer]"] },
          { text: "My school is called ___.", blanks: ["[student's answer]"] },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Write a Descriptive Sentence for Each Scene",
        instruction: "Use a noun, a verb and at least two adjectives in each sentence. Make the scenes as vivid as possible.",
        prompts: [
          { text: "Scene: A thunderstorm.", type: "lines", lines: 2 },
          { text: "Scene: A busy market.", type: "lines", lines: 2 },
          { text: "Scene: A quiet library.", type: "lines", lines: 2 },
        ],
      },
      // 36
      {
        type: "true-false",
        title: "Proper Noun True or False?",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "Proper nouns always start with a capital letter.", answer: true },
          { text: "'River' is a proper noun.", answer: false },
          { text: "'Sydney' is a proper noun.", answer: true },
          { text: "The name of a pet is a common noun.", answer: false },
          { text: "Common nouns name general types of things.", answer: true },
        ],
      },
      // 37
      {
        type: "sorting",
        title: "Sort the Adjectives by Type",
        instruction: "Adjectives can describe: size, colour, feeling, texture, or number. Sort these adjectives.",
        parentTip: "Knowing the type of adjective helps writers choose more varied and precise descriptions.",
        columns: ["Size", "Colour", "Feeling", "Texture"],
        items: [
          { label: "enormous" }, { label: "crimson" }, { label: "joyful" }, { label: "rough" },
          { label: "tiny" }, { label: "golden" }, { label: "anxious" }, { label: "silky" },
          { label: "gigantic" }, { label: "pale" }, { label: "frightened" }, { label: "jagged" },
        ],
      },
      // 38
      {
        type: "matching",
        title: "Match the Adjective to Its Type",
        instruction: "Draw a line from each adjective to its type.",
        left: ["enormous", "crimson", "joyful", "rough", "freezing", "three"],
        right: ["Number", "Texture", "Feeling", "Size", "Colour", "Temperature"],
      },
      // 39
      {
        type: "open-response",
        title: "Use Three Different Types of Adjective in One Sentence",
        instruction: "Write a sentence that contains adjectives of three different types (e.g. size + colour + feeling). Identify each type in brackets.",
        parentTip: "Multi-adjective sentences are a great writing challenge. Celebrate complex and varied word choices.",
        prompts: [
          { text: "My sentence:", type: "lines", lines: 2 },
          { text: "Type 1 adjective: ___  Type 2: ___  Type 3: ___", type: "lines", lines: 1 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: The Noun Verb Adjective Challenge",
        content: "Set a timer for 5 minutes. Write as many sentences as you can, each containing at least one noun, one verb and two adjectives. Count how many you write. Then go back and replace the most boring verb in each sentence with a more exciting one. Read them aloud — notice how much the rewrite improves them!",
      },
      // 41
      {
        type: "sorting",
        title: "Sort by Grammatical Role in the Sentence",
        instruction: "Read each sentence. Find the underlined word and sort it by its grammatical role.",
        columns: ["Noun (subject)", "Verb (action)", "Adjective (describes noun)"],
        items: [
          { label: "The enormous wave crashed ashore." },
          { label: "She whispered the answer softly." },
          { label: "The ancient statue stood in the square." },
          { label: "He sprinted towards the finish line." },
          { label: "The joyful crowd cheered wildly." },
          { label: "A fragile butterfly landed on her hand." },
        ],
      },
      // 42
      {
        type: "multiple-choice",
        title: "Choose the Most Vivid Adjective",
        instruction: "Choose the adjective that creates the most vivid or precise description.",
        parentTip: "Specific and unusual adjectives make writing more memorable than common ones.",
        questions: [
          { prompt: "The ___ wind cut through her coat.", options: ["cold", "big", "biting", "bad"] },
          { prompt: "She had a ___ smile on her face.", options: ["nice", "radiant", "good", "happy"] },
          { prompt: "The ___ door creaked open.", options: ["old", "rotting", "bad", "dark"] },
          { prompt: "He gave a ___ laugh and sat back down.", options: ["funny", "booming", "loud", "big"] },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Improve the Nouns",
        instruction: "Replace the underlined noun in each sentence with a more specific or interesting noun. Rewrite the full sentence.",
        parentTip: "Specific nouns (terrier instead of dog, sparrow instead of bird) create a clearer picture for the reader.",
        prompts: [
          { text: "The animal ran across the road. → ___", type: "lines", lines: 2 },
          { text: "She put the thing on the table. → ___", type: "lines", lines: 2 },
          { text: "A person walked into the building. → ___", type: "lines", lines: 2 },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Build a Noun Phrase Bank",
        instruction: "Write 8 interesting noun phrases (adjective + noun) that could be used in a story. Try to use a range of adjective types (size, colour, feeling, texture).",
        parentTip: "Noun phrase banks are a great pre-writing tool. Keep this as a resource for future writing tasks.",
        prompts: [
          { text: "My 8 noun phrases:", type: "lines", lines: 5 },
          { text: "My favourite phrase used in a sentence:", type: "lines", lines: 2 },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Abstract Nouns",
        content: "Did you know that nouns can name things you cannot see or touch? These are called abstract nouns. Examples: happiness, courage, freedom, love, silence, hope. You cannot hold happiness in your hand, but it is still a noun because it names a thing — an idea or feeling. Look for abstract nouns in your reading.",
      },
      // 46
      {
        type: "sorting",
        title: "Concrete or Abstract Noun?",
        instruction: "Sort each noun into 'Concrete' (you can see/touch it) or 'Abstract' (an idea/feeling).",
        parentTip: "Ask: 'Can I hold it or take a photo of it?' If yes, it is probably concrete. If not, it is abstract.",
        columns: ["Concrete noun", "Abstract noun"],
        items: [
          { label: "book" }, { label: "happiness" }, { label: "chair" }, { label: "freedom" },
          { label: "dog" }, { label: "courage" }, { label: "mountain" }, { label: "love" },
          { label: "pencil" }, { label: "silence" },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Use Abstract Nouns in Sentences",
        instruction: "Write a sentence using each abstract noun.",
        prompts: [
          { text: "happiness: ___", type: "lines", lines: 2 },
          { text: "courage: ___", type: "lines", lines: 2 },
          { text: "silence: ___", type: "lines", lines: 2 },
          { text: "freedom: ___", type: "lines", lines: 2 },
        ],
      },
      // 48
      {
        type: "fill-in-blank",
        title: "Abstract or Concrete? Complete the Sentence",
        instruction: "Choose the correct noun — one abstract, one concrete — to complete each pair of sentences.",
        sentences: [
          { text: "She felt great ___ (abstract) when she saw her results.", blanks: ["joy"] },
          { text: "She picked up the heavy ___ (concrete) from the floor.", blanks: ["book"] },
          { text: "His ___ (abstract) helped him finish the race.", blanks: ["courage"] },
          { text: "She put the ___ (concrete) in her bag.", blanks: ["pencil"] },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Abstract Noun Statements",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "Abstract nouns name ideas, feelings or qualities.", answer: true },
          { text: "You can see and touch an abstract noun.", answer: false },
          { text: "'Love' is an abstract noun.", answer: true },
          { text: "'Mountain' is an abstract noun.", answer: false },
          { text: "'Silence' is an abstract noun.", answer: true },
        ],
      },
      // 50
      {
        type: "home-activity",
        title: "Noun, Verb and Adjective Scavenger Hunt",
        instruction: "Look around your home and outside. Find examples of nouns, verbs (things happening) and adjectives (descriptions you can see).",
        parentTip: "Making grammatical concepts visible in the real world helps cement understanding. Even 10 minutes is valuable.",
        suggestions: [
          "Write 5 nouns you can see in your kitchen",
          "Write 3 verbs — things you can see happening right now",
          "Find 5 adjectives by describing objects in the room",
          "Try writing one sentence using a proper noun, a strong verb and two adjectives",
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────
      // 51
      {
        type: "open-response",
        title: "Analyse a Sentence: Label Every Word",
        instruction: "Read each sentence. Write the word type (N = noun, V = verb, Adj = adjective, other = other) above each word.",
        parentTip: "This close analysis task is challenging but very effective. Work through one sentence together if needed.",
        prompts: [
          { text: "The enormous, grey elephant splashed playfully in the muddy river.", type: "lines", lines: 3 },
          { text: "A nervous child tiptoed past the growling, ancient dog.", type: "lines", lines: 3 },
        ],
      },
      // 52
      {
        type: "sorting",
        title: "Sort the Underlined Words from a Passage",
        instruction: "Read the passage. Find all underlined words and sort them.\n\nPassage: 'The ancient lighthouse stood on the rocky cliff. Each night, its bright beam swept the dark, dangerous sea. Brave sailors relied on its steady glow to navigate safely home.'",
        columns: ["Noun", "Verb", "Adjective"],
        items: [
          { label: "lighthouse" }, { label: "stood" }, { label: "ancient" },
          { label: "beam" }, { label: "swept" }, { label: "bright" },
          { label: "sailors" }, { label: "relied" }, { label: "brave" },
          { label: "glow" }, { label: "navigate" }, { label: "dark" },
        ],
      },
      // 53
      {
        type: "multiple-choice",
        title: "What Is the Role of This Word?",
        instruction: "Choose the best answer for the grammatical role of the underlined word.",
        questions: [
          { prompt: "The old man's wisdom guided the village. (wisdom)", options: ["Abstract noun", "Concrete noun", "Adjective", "Verb"] },
          { prompt: "She whispered his name in the quiet corridor. (whispered)", options: ["Noun", "Adjective", "Verb", "Adverb"] },
          { prompt: "A biting wind swept down the mountain. (biting)", options: ["Verb", "Adjective", "Noun", "Adverb"] },
          { prompt: "His courage never faltered during the storm. (courage)", options: ["Verb", "Adjective", "Abstract noun", "Concrete noun"] },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Improve a Bland Paragraph",
        instruction: "Read this bland paragraph. Rewrite it with better nouns (more specific), stronger verbs, and more varied adjectives.\n\nBlank paragraph: 'The man went into the building. He got something from a person and walked to a place. He sat down and ate some food.'",
        parentTip: "This task is the heart of the worksheet — applying all three word types to improve real writing.",
        prompts: [
          { text: "My improved paragraph:", type: "lines", lines: 8 },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Write Three Versions of the Same Sentence",
        instruction: "Start with the sentence 'The cat sat on the mat.' Write three versions: (1) with better adjectives, (2) with a better verb, (3) with a more specific noun for 'mat'. Then combine all improvements into one final sentence.",
        prompts: [
          { text: "Version 1 (better adjectives):", type: "lines", lines: 1 },
          { text: "Version 2 (better verb):", type: "lines", lines: 1 },
          { text: "Version 3 (more specific noun):", type: "lines", lines: 1 },
          { text: "Best combined sentence:", type: "lines", lines: 2 },
        ],
      },
      // 56
      {
        type: "sorting",
        title: "Can This Word Be More Than One Type?",
        instruction: "Some words can be more than one type depending on context. Sort these words.",
        parentTip: "Words that function as more than one type are called multi-functional words. This is an important concept in English.",
        columns: ["Usually only one type", "Can be multiple types"],
        items: [
          { label: "book (noun / verb)" }, { label: "run (verb only)" }, { label: "light (adj / noun / verb)" },
          { label: "happiness (noun only)" }, { label: "smile (noun / verb)" }, { label: "cold (adj / noun)" },
          { label: "ancient (adjective only)" }, { label: "down (prep / adj / verb)" },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "Write the Same Word as a Noun and as a Verb",
        instruction: "These words can be both nouns and verbs. Write one sentence using each as a noun, and one using it as a verb.",
        prompts: [
          { text: "BOOK — noun sentence: ___\nverb sentence: ___", type: "lines", lines: 3 },
          { text: "SMILE — noun sentence: ___\nverb sentence: ___", type: "lines", lines: 3 },
          { text: "JUMP — noun sentence: ___\nverb sentence: ___", type: "lines", lines: 3 },
        ],
      },
      // 58
      {
        type: "fill-in-blank",
        title: "Choose the Best Word for the Context",
        instruction: "Complete each sentence with the best noun, verb or adjective from the options in brackets.",
        sentences: [
          { text: "The ___ (roared / whispered / sprinted) crowd went wild. [Choose the best verb]", blanks: ["roared"] },
          { text: "A ___ (big / shimmering / round) lake appeared through the trees. [Best adjective]", blanks: ["shimmering"] },
          { text: "The ___ (thing / terrier / animal) ran circles around the garden. [Best noun]", blanks: ["terrier"] },
          { text: "She ___ (went / darted / moved) out of the room. [Best verb]", blanks: ["darted"] },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Describe a Character Using All Three Word Types",
        instruction: "Write a character description (5–6 sentences). Include at least 3 nouns, 3 verbs and 4 adjectives. Label each one in the margin.",
        parentTip: "Character descriptions are a real writing form — encourage your child to think like a novelist.",
        prompts: [
          { text: "My character description:", type: "lines", lines: 8 },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip",
        title: "Tip: Adjectives Go Before OR After Nouns",
        content: "Adjectives most often appear BEFORE a noun: 'the fluffy cat'. But they can also appear AFTER a verb like 'is', 'seems', 'feels', 'looks': 'The cat is fluffy.' 'She seems happy.' 'It feels cold.' Both positions are correct — good writers use both to vary their sentences.",
      },
      // 61 — SPARK at ~60
      {
        type: "spark",
        title: "Spark: Noun Verb Adjective Poetry",
        content: "Write a poem where every line has exactly this pattern: adjective + noun + verb. For example: 'Pale moonlight shimmers. / Hungry foxes prowl. / Ancient stones whisper.' Write at least 8 lines. Read it aloud — does it create a mood? Share it with someone at home.",
      },
      // 62
      {
        type: "sorting",
        title: "Adjective Before or After the Noun?",
        instruction: "In each sentence, is the adjective BEFORE the noun or AFTER the verb?",
        columns: ["Before the noun", "After a verb"],
        items: [
          { label: "The fluffy cat yawned." },
          { label: "The cat seems fluffy." },
          { label: "A sharp pain shot through his leg." },
          { label: "The pain was sharp." },
          { label: "She found the cold water refreshing." },
          { label: "The water felt cold." },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Rewrite with Adjective in a Different Position",
        instruction: "Rewrite each sentence, moving the adjective to the other position (before the noun → after a verb, or vice versa).",
        prompts: [
          { text: "The old house creaked in the wind. → ___", type: "lines", lines: 1 },
          { text: "The house seemed old and tired. → ___", type: "lines", lines: 1 },
          { text: "A frightened rabbit ran into the burrow. → ___", type: "lines", lines: 1 },
        ],
      },
      // 64
      {
        type: "multiple-choice",
        title: "Choose the Most Appropriate Word",
        instruction: "Choose the best noun, verb or adjective for each context.",
        questions: [
          { prompt: "To describe a very strong wind, the best adjective is:", options: ["windy", "blustering", "bad", "big"] },
          { prompt: "Instead of 'said' (quietly), the best verb is:", options: ["shouted", "murmured", "talked", "stated"] },
          { prompt: "Instead of 'dog', a more specific noun for a large hunting dog is:", options: ["animal", "creature", "hound", "pet"] },
          { prompt: "To describe a very old building, the best adjective is:", options: ["old", "not new", "ancient", "used"] },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Setting Description: A Storm",
        instruction: "Write a 6–8 sentence description of a storm. For each sentence, try to use a different strong verb and a precise adjective. Underline all nouns, circle all verbs, and box all adjectives.",
        prompts: [
          { text: "My storm description:", type: "lines", lines: 10 },
        ],
      },
      // 66
      {
        type: "true-false",
        title: "Grammar Knowledge Check",
        instruction: "Circle TRUE or FALSE for each statement.",
        statements: [
          { text: "Abstract nouns name ideas or feelings that cannot be touched.", answer: true },
          { text: "Proper nouns do not need a capital letter.", answer: false },
          { text: "Adjectives can appear after linking verbs like 'is' and 'seems'.", answer: true },
          { text: "A word can only ever be one word type.", answer: false },
          { text: "Specific nouns create clearer pictures than vague nouns.", answer: true },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Analyse a Professional Text",
        instruction: "Read this paragraph from a description of the Australian outback. Find and label: 3 nouns, 3 verbs and 3 adjectives.\n\n'The red dust shimmered under the scorching sun. A solitary crow circled overhead, its harsh cry cutting through the still, hot air. Dry scrub stretched endlessly in every direction, broken only by the occasional ancient gum tree.'",
        prompts: [
          { text: "Nouns I found:", type: "lines", lines: 2 },
          { text: "Verbs I found:", type: "lines", lines: 2 },
          { text: "Adjectives I found:", type: "lines", lines: 2 },
          { text: "The most effective word choice I noticed:", type: "lines", lines: 2 },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Write Your Own Outback Description",
        instruction: "Using the Australian outback passage above as a model, write your own description of a landscape you know or imagine. Include: precise nouns, strong verbs, and varied adjectives.",
        prompts: [
          { text: "My landscape description:", type: "lines", lines: 8 },
        ],
      },
      // 69
      {
        type: "fill-in-blank",
        title: "Cloze Passage: Nouns, Verbs and Adjectives",
        instruction: "Complete the passage with the best word for each blank. The word type needed is shown in brackets.",
        sentences: [
          { text: "A ___ (adjective) silence fell over the ___ (noun). She ___ (verb) cautiously, her ___ (adjective) heart pounding. The ___ (noun) creaked under her feet. Then she heard it — a ___ (adjective) whisper from behind the ___ (noun).", blanks: ["sudden", "room", "tiptoed", "nervous", "floorboard", "low", "curtain"] },
        ],
      },
      // 70
      {
        type: "home-activity",
        title: "Noun Verb Adjective Reading Activity",
        instruction: "During your next read-aloud session, play 'Word Spotter' — call out the word type whenever you hear a particularly good noun, verb or adjective.",
        parentTip: "Reading aloud together and discussing word choices is one of the most powerful literacy activities for this age.",
        suggestions: [
          "Call out 'Noun!' whenever you hear a great specific noun",
          "Tap the table for a strong or unusual verb",
          "Give a thumbs up for a precise or surprising adjective",
          "After reading, list your top 3 favourite word choices from the text",
        ],
      },
      // 71
      {
        type: "open-response",
        title: "Write a Story Using Word Type Targets",
        instruction: "Write a short story (8 sentences). Your targets: 5 specific/proper nouns, 5 strong/varied verbs, 6 precise adjectives (not 'big', 'nice', 'good' or 'bad'). List your word choices at the bottom.",
        prompts: [
          { text: "My story:", type: "lines", lines: 10 },
          { text: "My top nouns: ___", type: "lines", lines: 1 },
          { text: "My top verbs: ___", type: "lines", lines: 1 },
          { text: "My top adjectives: ___", type: "lines", lines: 1 },
        ],
      },
      // 72
      {
        type: "sorting",
        title: "Sort the Sentences by Strength of Word Choice",
        instruction: "Read each pair of sentences. Sort them: which uses stronger, more precise nouns/verbs/adjectives?",
        columns: ["Stronger word choices", "Weaker word choices"],
        items: [
          { label: "A crimson sun melted below the horizon." },
          { label: "The sun was big and red and went down." },
          { label: "The child screamed with delight." },
          { label: "The kid made a noise." },
          { label: "An ancient fig tree shaded the courtyard." },
          { label: "A big old tree was there." },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Revise Your Own Writing",
        instruction: "Take a piece of your own writing (from any subject). Find 3 nouns you could make more specific, 3 verbs you could make stronger, and 3 adjectives you could make more precise. Write the original word and your improved word.",
        parentTip: "Revision is a real writing skill — treating a first draft as a starting point (not a final product) is key to growth.",
        prompts: [
          { text: "Nouns: original → improved (x3):", type: "lines", lines: 3 },
          { text: "Verbs: original → improved (x3):", type: "lines", lines: 3 },
          { text: "Adjectives: original → improved (x3):", type: "lines", lines: 3 },
        ],
      },
      // 74
      {
        type: "multiple-choice",
        title: "Identify the Grammatical Category",
        instruction: "Choose the correct grammatical category for each underlined word.",
        questions: [
          { prompt: "Her generosity amazed the whole town. (generosity)", options: ["Concrete noun", "Abstract noun", "Adjective", "Verb"] },
          { prompt: "The shimmering surface of the lake reflected the sky. (shimmering)", options: ["Noun", "Verb", "Adjective", "Adverb"] },
          { prompt: "A battered suitcase lay on the platform. (battered)", options: ["Noun", "Verb", "Adjective", "Adverb"] },
          { prompt: "The hikers trudged through the thick mud. (trudged)", options: ["Noun", "Adjective", "Verb", "Adverb"] },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Collective Nouns",
        content: "A collective noun names a group of things. A flock of birds, a school of fish, a pack of wolves, a pride of lions, a mob of kangaroos. These are single nouns that refer to many individuals. English has hundreds of wonderful collective nouns — some very old, some whimsical. Look out for them in your reading!",
      },
      // 76
      {
        type: "matching",
        title: "Match the Collective Noun",
        instruction: "Draw a line from each group of animals to the correct collective noun.",
        left: ["birds", "fish", "wolves", "lions", "kangaroos"],
        right: ["mob", "flock", "pride", "pack", "school"],
      },
      // 77
      {
        type: "open-response",
        title: "Use Collective Nouns in Sentences",
        instruction: "Write a sentence using each collective noun.",
        prompts: [
          { text: "a flock of birds:", type: "lines", lines: 2 },
          { text: "a school of fish:", type: "lines", lines: 2 },
          { text: "a mob of kangaroos:", type: "lines", lines: 2 },
          { text: "a pride of lions:", type: "lines", lines: 2 },
        ],
      },
      // 78
      {
        type: "fill-in-blank",
        title: "Complete with the Correct Collective Noun",
        instruction: "Choose the correct collective noun for each group.",
        sentences: [
          { text: "A ___ of geese flew south for winter.", blanks: ["flock"] },
          { text: "She watched a ___ of dolphins play in the surf.", blanks: ["pod"] },
          { text: "A ___ of ants marched across the path.", blanks: ["colony"] },
          { text: "The farmer spotted a ___ of sheep on the hillside.", blanks: ["flock"] },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Apply All Concepts: Extended Writing",
        instruction: "Write a descriptive paragraph (8–10 sentences) about an encounter with a group of wild animals. Include: 2 proper nouns, 1 abstract noun, 1 collective noun, 4 strong verbs and 5 precise adjectives. Label examples in the margin.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 12 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Create a Word Type Reference Card",
        content: "Design a foldable reference card (A4 paper folded into quarters). Label each section: Nouns, Verbs, Adjectives, and Word Types in Action. Fill each section with: the definition, 10 examples (including specific types like proper/abstract/collective for nouns), and one tip. Make it colourful and keep it for use in future writing tasks.",
      },
      // ── EXTENDING (81–100) ────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Grammar Analysis: Reflective Questions",
        instruction: "Answer each question in full sentences, using examples.",
        prompts: [
          { text: "Why is it important to use specific nouns rather than vague ones in your writing?", type: "lines", lines: 3 },
          { text: "How does verb choice change the way a reader feels about a scene?", type: "lines", lines: 3 },
          { text: "Explain the difference between a concrete noun and an abstract noun. Why do both matter in writing?", type: "lines", lines: 3 },
        ],
      },
      // 82
      {
        type: "sorting",
        title: "Advanced Sort: Identify All Word Types in Complex Sentences",
        instruction: "Read each sentence carefully. Find and sort EVERY noun, verb and adjective.",
        parentTip: "Work through one sentence at a time. There may be multiple words of each type.",
        columns: ["Nouns", "Verbs", "Adjectives"],
        items: [
          { label: "From: 'The frantic rescue crew battled the icy, surging water.'" },
          { label: "From: 'Ancient wisdom often outweighs raw intelligence.'" },
          { label: "From: 'Crimson leaves spiralled through the crisp autumn air.'" },
        ],
      },
      // 83
      {
        type: "multiple-choice",
        title: "Advanced Grammar: What Type Is This Complex Word?",
        instruction: "Choose the correct grammatical category for each underlined word in context.",
        questions: [
          { prompt: "The professor's lecture captivated the students. (captivated)", options: ["Noun", "Adjective", "Verb", "Adverb"] },
          { prompt: "A profound silence fell over the courtroom. (profound)", options: ["Noun", "Verb", "Adjective", "Adverb"] },
          { prompt: "She spoke with great eloquence at the ceremony. (eloquence)", options: ["Concrete noun", "Abstract noun", "Adjective", "Verb"] },
          { prompt: "The trembling witness gave her testimony quietly. (trembling)", options: ["Verb", "Adjective", "Noun", "Adverb"] },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Write with Grammar Targets: Formal Report",
        instruction: "Write a formal report paragraph (8–10 sentences) about an Australian animal of your choice. Requirements: 3 proper nouns (animal species, location), 2 abstract nouns (e.g. adaptation, survival), 1 collective noun, 4 precise verbs, 5 descriptive adjectives. Label each in the margin.",
        prompts: [
          { text: "My animal report:", type: "lines", lines: 12 },
          { text: "Grammar checklist:", type: "lines", lines: 3 },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Explore Verbs: Shades of Meaning",
        instruction: "Create a 'Verb Intensity Scale' for 5 groups of related verbs. Order each group from gentlest to strongest. Then write a sentence using the strongest verb in each group.",
        parentTip: "Shades of meaning between synonyms is a hallmark of Year 2–3 vocabulary development. Enjoy discussing the differences.",
        prompts: [
          { text: "Group 1 (walking): stroll / march / trudge / stride / amble → ordered:", type: "lines", lines: 2 },
          { text: "Group 2 (looking): glance / stare / gaze / peep / scrutinise → ordered:", type: "lines", lines: 2 },
          { text: "Group 3 (speaking): whisper / mumble / yell / announce / murmur → ordered:", type: "lines", lines: 2 },
          { text: "Group 4 (eating): nibble / devour / gobble / taste / chomp → ordered:", type: "lines", lines: 2 },
          { text: "Group 5 (running): jog / sprint / dash / amble / bolt → ordered:", type: "lines", lines: 2 },
        ],
      },
      // 86
      {
        type: "matching",
        title: "Match the Word to Its Extended Grammar Category",
        instruction: "Draw a line from each word to its most precise grammatical category.",
        left: ["mob of kangaroos", "Australia", "sadness", "chair", "trudged", "shimmering"],
        right: [
          "Abstract noun",
          "Concrete noun",
          "Proper noun",
          "Collective noun phrase",
          "Verb (past tense)",
          "Adjective (present participle used as adjective)",
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Write a Literary Description Using All Noun Types",
        instruction: "Write a 6–8 sentence literary description of a place (real or imagined). You must include: a proper noun, a common noun, an abstract noun, and a collective noun. Underline and label each.",
        prompts: [
          { text: "My literary description:", type: "lines", lines: 10 },
          { text: "My noun types labelled:", type: "lines", lines: 3 },
        ],
      },
      // 88
      {
        type: "sorting",
        title: "Analyse a Paragraph: Sort All Words by Type",
        instruction: "Read this paragraph. List every noun, verb, and adjective you can find.\n\n'The ancient coastal village clung to the cliff like a barnacle. Weathered fishermen mended their tattered nets in the golden morning light. A solitary heron watched with patient, ancient eyes as the glittering waves retreated.'",
        parentTip: "This is a sophisticated analysis task — work through it together. There are many examples to find.",
        columns: ["Nouns", "Verbs", "Adjectives"],
        items: [
          { label: "village" }, { label: "clung" }, { label: "ancient" },
          { label: "fishermen" }, { label: "mended" }, { label: "weathered" },
          { label: "heron" }, { label: "watched" }, { label: "golden" },
          { label: "waves" }, { label: "retreated" }, { label: "glittering" },
          { label: "eyes" }, { label: "light" }, { label: "patient" },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Discuss: How Do Word Types Shape Meaning?",
        instruction: "Answer this extended question in 6–8 sentences: 'How do the choices a writer makes about nouns, verbs and adjectives shape the reader's experience of a text?' Use examples from your own reading or writing.",
        prompts: [
          { text: "My response:", type: "lines", lines: 10 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Verbs Can Be More Than One Word",
        content: "Some verbs are made of more than one word — these are called verb phrases. Examples: 'has jumped', 'was running', 'will arrive', 'had been sleeping'. The main verb carries the meaning; the helping verb (has, was, will, had) tells us about the tense. When you identify verbs in sentences, include all parts of the verb phrase.",
      },
      // 91
      {
        type: "sorting",
        title: "Sort: Simple Verb or Verb Phrase?",
        instruction: "Read each verb in context. Is it a single verb or a verb phrase (more than one word)?",
        columns: ["Single verb", "Verb phrase (2+ words)"],
        items: [
          { label: "She runs every morning." },
          { label: "She has been running for years." },
          { label: "He jumped over the fence." },
          { label: "He had already jumped the fence." },
          { label: "They sing beautifully." },
          { label: "They will be singing tonight." },
          { label: "She read the book." },
          { label: "She had been reading all night." },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Identify the Full Verb Phrase",
        instruction: "Underline the complete verb phrase in each sentence (including helping verbs).",
        prompts: [
          { text: "She has been studying all afternoon. Verb phrase: ___", type: "lines", lines: 1 },
          { text: "They will arrive at midday. Verb phrase: ___", type: "lines", lines: 1 },
          { text: "He had already finished the exam. Verb phrase: ___", type: "lines", lines: 1 },
          { text: "The team was training hard for weeks. Verb phrase: ___", type: "lines", lines: 1 },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Create a Grammar Reference Guide",
        instruction: "Create a comprehensive guide to nouns, verbs and adjectives for a student who has never studied grammar. Include all sub-types of nouns you have learned (proper, common, abstract, collective), verb phrases, adjective positions, and examples. Make it clear, accurate and useful.",
        prompts: [
          { text: "My grammar guide:", type: "lines", lines: 14 },
        ],
      },
      // 94
      {
        type: "multiple-choice",
        title: "Identify the Verb Phrase",
        instruction: "Choose the complete verb phrase in each sentence.",
        questions: [
          { prompt: "She had been waiting for an hour.", options: ["waiting", "had been waiting", "had waiting", "been waiting"] },
          { prompt: "They will have finished by tomorrow.", options: ["finished", "will finished", "will have finished", "have finished"] },
          { prompt: "He was reading when the alarm sounded.", options: ["reading", "was reading", "was", "alarm sounded"] },
          { prompt: "The team should have arrived by now.", options: ["arrived", "should arrived", "should have arrived", "have arrived"] },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Write a Narrative Demonstrating Mastery",
        instruction: "Write a narrative (12–15 sentences) that demonstrates mastery of nouns (proper, abstract, collective), verbs (precise, varied, in phrases), and adjectives (varied types, both positions). Label at least 2 examples of each type in the margin.",
        parentTip: "This is the capstone writing task. Allow time, celebrate ambition, and focus feedback on one element at a time.",
        prompts: [
          { text: "My narrative:", type: "lines", lines: 16 },
          { text: "Grammar examples I'm most proud of:", type: "lines", lines: 4 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Compare Two Texts: Word Choice Analysis",
        instruction: "Read these two versions of the same event. Version A: 'A man went through the old place.' Version B: 'A desperate archaeologist crept through the crumbling, long-abandoned temple.' Write a comparison (6 sentences) analysing which version is more effective and why — focusing on noun, verb and adjective choices.",
        prompts: [
          { text: "My comparison:", type: "lines", lines: 8 },
        ],
      },
      // 97
      {
        type: "true-false",
        title: "Final Mastery Check: Advanced Statements",
        instruction: "Circle TRUE or FALSE. These statements cover all concepts from this worksheet.",
        statements: [
          { text: "Collective nouns name a group as a single unit.", answer: true },
          { text: "Abstract nouns can be photographed.", answer: false },
          { text: "Verb phrases can include helping verbs like 'has', 'was', 'will'.", answer: true },
          { text: "Adjectives can only appear directly before a noun.", answer: false },
          { text: "A word can function as both a noun and a verb in different sentences.", answer: true },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Investigate: Word Types in Different Text Types",
        instruction: "Find two very different types of text (e.g. a recipe and a story, or a news article and a poem). Compare: which text type uses more adjectives? More action verbs? More abstract nouns? Write your findings in a short paragraph.",
        parentTip: "This investigation task develops critical reading skills alongside grammar awareness.",
        prompts: [
          { text: "Text 1 (type: ___): ___", type: "lines", lines: 3 },
          { text: "Text 2 (type: ___): ___", type: "lines", lines: 3 },
          { text: "My comparison findings:", type: "lines", lines: 4 },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflection: What I Know About Nouns, Verbs and Adjectives",
        instruction: "Write a reflective paragraph about your grammar learning journey. Include: what you found easy, what was challenging, something new you discovered, and how you will use this knowledge in your future writing.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 8 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark",
        title: "Spark: Become a Word Expert",
        content: "Choose one word type (noun, verb or adjective) and become an expert on it. Research: How many sub-types does it have? What happens to it in different languages? What are the rarest or most unusual examples in English? Write a one-page 'expert report' and share it with someone at home. Use a dictionary, thesaurus, or any reference books you have access to.",
      },
    ],
  },

  // ── WS 4: Joining Words (Conjunctions) ─────────────────────────
  {
    slug: "joining-words-conjunctions",
    title: "Joining Words: and, but, because",
    strand: "Language",
    description:
      "Use the joining words 'and', 'but' and 'because' to write compound and complex sentences that link ideas clearly.",
    learningGuide: {
      concept:
        "'And' joins two similar ideas. 'But' joins two contrasting ideas. 'Because' gives a reason. Using these words helps writers connect thoughts into longer, more interesting sentences and is a key step toward compound sentence writing.",
      activation:
        "Give your child an incomplete sentence: 'I wanted to go to the park, but ___.' Ask them to finish it. Repeat with 'I ate dinner because ___.' This activates their intuitive sense of how these words work.",
      check:
        "Can your child choose the correct joining word to make a sentence that makes sense? Can they write their own compound sentence using each joining word?",
    },
    lesson: {
      title: "The Joining Words",
      objective:
        "Write compound and complex sentences using the conjunctions 'and', 'but' and 'because'.",
      materials: [
        "Paper and pencil",
        "Three index cards (write AND, BUT, BECAUSE — one per card)",
      ],
      intro: {
        title: "Sentence Bridges",
        script:
          "Words like 'and', 'but' and 'because' are like bridges — they connect two ideas into one longer sentence. Listen: 'I was tired. I went to bed.' Those are two short sentences. But if I use a joining word: 'I was tired because I had played all day.' Much better! Let me show you what each bridge word does.",
        action:
          "Hold up each card one at a time. For AND: 'I like cats and I like dogs.' For BUT: 'I like cats but I am allergic to them.' For BECAUSE: 'I sneeze because of my allergy.' Say each aloud and ask your child what the joining word is doing.",
      },
      mainActivity: {
        title: "Finish the Sentence",
        script:
          "I am going to read you the start of a sentence. Your job is to pick the right joining word — and, but or because — and finish the sentence. Ready? Here we go!",
        action:
          "Read each sentence starter below. Child chooses a joining word card to hold up, then says or writes the ending: 1) 'She wanted to play outside __ it was raining.' 2) 'He ate his vegetables __ he was hungry.' 3) 'She likes reading __ she also likes drawing.' Do 3-4 together, then let the child try independently.",
      },
      wrapUp: {
        title: "Story Sentences",
        script:
          "Let's write three sentences about something that happened in our day. One using AND, one using BUT and one using BECAUSE. Ready?",
        action:
          "Scribe for the child or let them write independently. Read the three sentences together and talk about how the joining words connect the ideas.",
      },
      parentTip:
        "Children at this stage often overuse 'and' to join every idea in a run-on sentence. Gently point this out when it happens: 'That is a great idea — which joining word shows the contrast between those two things?' Offer 'but' as an option. Over time, they will begin to choose deliberately.",
      extension:
        "Play 'Sentence Tennis': you say the start of a sentence (e.g. 'I wanted to go to the beach'), and your child has to add a second part using AND, BUT or BECAUSE. Then swap — your child starts and you finish. See how long you can keep the rally going!",
      resources: [
        {
          title: "Compound Sentences",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description:
            "Khan Academy Year 2 English grammar activities covering conjunctions and sentence structure.",
        },
        {
          title: "ABC Education — Language",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education interactive English language activities for primary students.",
        },
        {
          title: "Starfall — Writing and Reading",
          url: "https://www.starfall.com/h/holiday/vowels/?sn=main",
          description: "Starfall writing activities for early primary learners.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      // 1
      {
        type: "circle-correct",
        title: "Choose the Right Joining Word (Set A)",
        instruction: "Circle the joining word that makes the best sense in each sentence.",
        parentTip: "Read the whole sentence aloud with each option to hear which sounds right.",
        questions: [
          { prompt: "She was cold ___ she put on a jumper.", options: ["and", "but", "because"] },
          { prompt: "He wanted to swim ___ the pool was closed.", options: ["and", "but", "because"] },
          { prompt: "I like cats ___ I like rabbits.", options: ["and", "but", "because"] },
          { prompt: "She smiled ___ she won the race.", options: ["and", "but", "because"] },
          { prompt: "He was tired ___ he kept reading.", options: ["and", "but", "because"] },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Match the Joining Word to Its Job",
        instruction: "Draw a line from each joining word to what it does in a sentence.",
        parentTip: "Knowing the JOB of each joining word helps your child choose the right one when writing.",
        left: ["and", "but", "because"],
        right: [
          "Gives a reason for something",
          "Shows a contrast or surprise",
          "Joins two similar or additional ideas",
        ],
      },
      // 3
      {
        type: "open-response",
        title: "Finish the Sentences (Set A)",
        instruction: "Complete each sentence using the joining word given. Make sure your ending makes sense!",
        prompts: [
          { text: "I wanted to play outside but ___", type: "lines", lines: 2 },
          { text: "She finished her lunch and ___", type: "lines", lines: 2 },
          { text: "He was happy because ___", type: "lines", lines: 2 },
          { text: "The dog barked but ___", type: "lines", lines: 2 },
        ],
      },
      // 4
      {
        type: "open-response",
        title: "Join the Two Short Sentences",
        instruction: "Join the two sentences into one using 'and', 'but' or 'because'. Write your new sentence.",
        parentTip: "Remind your child that they may need to remove a word or two when they join the sentences.",
        prompts: [
          { text: "She was hungry. She had not eaten breakfast.\nYour sentence:", type: "lines", lines: 2 },
          { text: "The sky was dark. The sun came out later.\nYour sentence:", type: "lines", lines: 2 },
          { text: "He loves cricket. He loves swimming.\nYour sentence:", type: "lines", lines: 2 },
        ],
      },
      // 5
      {
        type: "true-false",
        title: "Does This Joining Word Make Sense?",
        instruction: "Read each sentence. Circle TRUE if the joining word makes sense, FALSE if not.",
        parentTip: "Say the sentence aloud — the wrong joining word will sound odd.",
        statements: [
          { text: "She was cold because she put on a jumper.", answer: false },
          { text: "He was tired but he went to bed.", answer: true },
          { text: "I like dogs and I like cats.", answer: true },
          { text: "She cried and she was happy.", answer: false },
          { text: "He ate his dinner because he was hungry.", answer: true },
        ],
      },
      // 6
      {
        type: "circle-correct",
        title: "Choose the Right Joining Word (Set B)",
        instruction: "Circle the joining word that makes the best sense.",
        questions: [
          { prompt: "She studied hard ___ she passed the test.", options: ["and", "but", "because"] },
          { prompt: "He packed his bag ___ he forgot his lunch.", options: ["and", "but", "because"] },
          { prompt: "She likes reading ___ she also likes drawing.", options: ["and", "but", "because"] },
          { prompt: "They were late ___ the bus broke down.", options: ["and", "but", "because"] },
        ],
      },
      // 7
      {
        type: "fill-in-blank",
        title: "Fill in the Joining Word",
        instruction: "Write 'and', 'but' or 'because' to complete each sentence.",
        sentences: [
          { text: "She wanted to go swimming ___ it was raining.", blanks: ["but"] },
          { text: "He ate his vegetables ___ he was hungry.", blanks: ["because"] },
          { text: "She loves music ___ she plays the piano every day.", blanks: ["and"] },
          { text: "He tried his best ___ he still didn't win.", blanks: ["but"] },
          { text: "The puppy barked ___ it was scared.", blanks: ["because"] },
        ],
      },
      // 8
      {
        type: "sorting",
        title: "Sort Joining Words by Their Job",
        instruction: "Read each sentence. Underline the joining word and sort the sentence by what the joining word does.",
        columns: ["Adds an idea (and)", "Shows a contrast (but)", "Gives a reason (because)"],
        items: [
          { label: "She ran fast and she won." },
          { label: "He was tired but he finished." },
          { label: "She smiled because she was happy." },
          { label: "He ate lunch and then had dessert." },
          { label: "The sky was blue but clouds were coming." },
          { label: "They stayed inside because it rained." },
        ],
      },
      // 9
      {
        type: "open-response",
        title: "Write Your Own Sentences: and, but, because",
        instruction: "Write one sentence using 'and', one using 'but' and one using 'because'. Make them about something you enjoy.",
        prompts: [
          { text: "My 'and' sentence:", type: "lines", lines: 2 },
          { text: "My 'but' sentence:", type: "lines", lines: 2 },
          { text: "My 'because' sentence:", type: "lines", lines: 2 },
        ],
      },
      // 10
      {
        type: "true-false",
        title: "What Does This Joining Word Do?",
        instruction: "Read each statement about joining words. Circle TRUE or FALSE.",
        statements: [
          { text: "'And' joins two similar or additional ideas together.", answer: true },
          { text: "'But' gives a reason for something.", answer: false },
          { text: "'Because' explains why something happened.", answer: true },
          { text: "'But' shows a contrast or surprise.", answer: true },
          { text: "Joining words always come at the start of a sentence.", answer: false },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Fix the Joining Word Error",
        instruction: "Each sentence has the wrong joining word. Rewrite it with the correct one.",
        parentTip: "Read the sentence aloud with the wrong word — the error should sound obvious.",
        prompts: [
          { text: "She was tired and she fell asleep. (Does 'and' give a reason here? Which word does?)\nCorrected: ___", type: "lines", lines: 1 },
          { text: "He loves pizza because he also loves pasta.\nCorrected: ___", type: "lines", lines: 1 },
          { text: "She studied hard because she didn't pass.\nCorrected: ___", type: "lines", lines: 1 },
        ],
      },
      // 12
      {
        type: "sequence",
        title: "Put the Joining Words in Order of Complexity",
        instruction: "Number these sentence structures from simplest (1) to most complex (4), based on how much information they give.",
        items: [
          { label: "She smiled." },
          { label: "She smiled and waved." },
          { label: "She smiled but didn't say anything." },
          { label: "She smiled because she was relieved to see him." },
        ],
      },
      // 13
      {
        type: "matching",
        title: "Match the Sentence Halves",
        instruction: "Draw a line from the sentence start to the best ending for each joining word.",
        left: [
          "She ate her dinner and ___",
          "He tried to open the door but ___",
          "The dog barked because ___",
        ],
        right: [
          "it was locked from the inside",
          "she was hungry and smelled food",
          "then had a glass of water",
        ],
      },
      // 14
      {
        type: "circle-correct",
        title: "Which Sentence Is Written Correctly?",
        instruction: "Circle the correctly written sentence in each pair.",
        questions: [
          { prompt: "Which is correct?", options: ["She was cold because she wore a coat.", "She was cold but she wore a coat."] },
          { prompt: "Which is correct?", options: ["He was happy and he was sad.", "He was happy but he was sad."] },
          { prompt: "Which is correct?", options: ["She studied hard because she wanted to pass.", "She studied hard and she wanted to pass."] },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: How Joining Words Change Meaning",
        content: "Joining words are powerful because they change the MEANING of a sentence. Compare: 'She worked hard AND she passed.' 'She worked hard BUT she failed.' 'She worked hard BECAUSE she wanted to pass.' The same start — three completely different meanings! The joining word tells us the relationship between ideas.",
      },
      // 16
      {
        type: "open-response",
        title: "Three Versions: Same Start, Different Meaning",
        instruction: "Start with: 'He was nervous.' Write three sentences starting with this idea, using 'and', 'but' and 'because' to create three different meanings.",
        parentTip: "This task beautifully shows how conjunctions shape meaning. Discuss each version together.",
        prompts: [
          { text: "He was nervous and ___", type: "lines", lines: 1 },
          { text: "He was nervous but ___", type: "lines", lines: 1 },
          { text: "He was nervous because ___", type: "lines", lines: 2 },
        ],
      },
      // 17
      {
        type: "fill-in-blank",
        title: "Complete the Story Using Joining Words",
        instruction: "Complete the short story using 'and', 'but' or 'because'.",
        sentences: [
          { text: "Mia wanted to go to the park ___ it was raining. She put on her raincoat ___ went outside anyway. She got a little wet ___ she didn't mind ___ she loved the smell of rain.", blanks: ["but", "and", "but", "because"] },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Write a Story Using All Three Joining Words",
        instruction: "Write a short story (4–5 sentences) that uses 'and', 'but' AND 'because' at least once each. Underline each joining word.",
        prompts: [
          { text: "My story:", type: "lines", lines: 6 },
        ],
      },
      // 19
      {
        type: "home-activity",
        title: "Joining Word Listening Walk",
        instruction: "During conversations or when reading books, listen out for the joining words 'and', 'but' and 'because'.",
        parentTip: "This turns reading aloud into a language detective game. Even 5 minutes of focused listening builds a strong instinct for how conjunctions work in real text.",
        suggestions: [
          "Tally how many times you hear 'and', 'but' and 'because' during a book read-aloud",
          "Write one sentence you heard that used a joining word — copy it exactly",
          "Make up three silly sentences using each of the three joining words",
          "Tell a story about your day using at least one 'and', one 'but' and one 'because'",
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: The Conjunction Challenge",
        content: "Set a timer for 3 minutes. Write as many sentences as you can, each using a different joining word (and, but, because, so, or, when, if, although). Count how many you write and how many different joining words you used. Can you use at least 5 different ones?",
      },
      // ── DEVELOPING (21–50) ────────────────────────────────────────
      // 21
      {
        type: "sorting",
        title: "Learn New Joining Words: so, or, when",
        instruction: "Read each sentence. Underline the joining word and sort by which word is used.",
        parentTip: "'So' shows a result. 'Or' gives a choice. 'When' tells us the time or condition. All three are very common conjunctions.",
        columns: ["so", "or", "when"],
        items: [
          { label: "She was cold so she put on a coat." },
          { label: "You can have cake or ice cream." },
          { label: "He smiled when he heard the news." },
          { label: "It was getting dark so they went home." },
          { label: "Do you want tea or coffee?" },
          { label: "She clapped when the music started." },
        ],
      },
      // 22
      {
        type: "matching",
        title: "Match: Joining Word to Its Job",
        instruction: "Draw a line from each new joining word to what it does.",
        left: ["so", "or", "when"],
        right: [
          "Shows a choice between two options",
          "Shows a result or consequence",
          "Tells us a time or condition",
        ],
      },
      // 23
      {
        type: "circle-correct",
        title: "Choose so, or, or when",
        instruction: "Circle the best joining word to complete each sentence.",
        questions: [
          { prompt: "She was hungry ___ she made a sandwich.", options: ["so", "or", "when"] },
          { prompt: "Do you want to walk ___ take the bus?", options: ["so", "or", "when"] },
          { prompt: "He jumped ___ he heard the loud noise.", options: ["so", "or", "when"] },
          { prompt: "It was cold ___ she wore extra layers.", options: ["so", "or", "when"] },
          { prompt: "She can choose the red ___ the blue one.", options: ["so", "or", "when"] },
        ],
      },
      // 24
      {
        type: "fill-in-blank",
        title: "Complete With so, or, when",
        instruction: "Write 'so', 'or' or 'when' to complete each sentence.",
        sentences: [
          { text: "He missed the bus ___ he had to walk.", blanks: ["so"] },
          { text: "She was reading ___ she heard a knock.", blanks: ["when"] },
          { text: "You can go now ___ wait until morning.", blanks: ["or"] },
          { text: "The rain started ___ they ran inside.", blanks: ["so"] },
          { text: "He smiled ___ he opened the gift.", blanks: ["when"] },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Write Sentences with so, or, when",
        instruction: "Write one sentence using 'so', one using 'or', and one using 'when'. Each sentence should be about your daily life.",
        prompts: [
          { text: "My 'so' sentence:", type: "lines", lines: 2 },
          { text: "My 'or' sentence:", type: "lines", lines: 2 },
          { text: "My 'when' sentence:", type: "lines", lines: 2 },
        ],
      },
      // 26
      {
        type: "sorting",
        title: "Sort ALL Six Joining Words by Their Job",
        instruction: "Sort each sentence by the ROLE of the underlined joining word.",
        parentTip: "Your child now has six conjunctions to work with — this sort consolidates all of them.",
        columns: ["Adds an idea", "Shows contrast", "Gives a reason", "Shows a result", "Gives a choice", "Shows time"],
        items: [
          { label: "She ran and she jumped." },
          { label: "He was tired but he played on." },
          { label: "She laughed because it was funny." },
          { label: "They left early so they could get a good seat." },
          { label: "You can stay or leave." },
          { label: "He waved when the bus passed." },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Expand Short Sentences Using Joining Words",
        instruction: "Expand each short sentence into a longer one by adding a joining word and more information.",
        parentTip: "This is a key writing skill — turning short, choppy sentences into flowing ones.",
        prompts: [
          { text: "She was tired. → (add 'so' or 'but'): ___", type: "lines", lines: 2 },
          { text: "He loves football. → (add 'and' or 'when'): ___", type: "lines", lines: 2 },
          { text: "They went to the beach. → (add 'or' or 'because'): ___", type: "lines", lines: 2 },
        ],
      },
      // 28
      {
        type: "true-false",
        title: "New Joining Words: True or False?",
        instruction: "Circle TRUE or FALSE for each statement.",
        statements: [
          { text: "'So' shows a result or consequence.", answer: true },
          { text: "'Or' is used to join two similar ideas.", answer: false },
          { text: "'When' can tell us the time something happened.", answer: true },
          { text: "'Because' and 'so' can sometimes express the same idea from different directions.", answer: true },
          { text: "You should never start a sentence with 'And' or 'But'.", answer: false },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "'Because' vs 'So': Two Sides of the Same Idea",
        instruction: "Each pair of sentences means the same thing, but in different ways. Finish both versions.",
        parentTip: "'Because' looks backwards to the cause; 'so' looks forward to the result. Both are correct — the sentence just starts from a different angle.",
        prompts: [
          { text: "She was cold because ___\nShe was shivering so ___", type: "lines", lines: 3 },
          { text: "He was late because ___\nHe missed the bus so ___", type: "lines", lines: 3 },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Starting a Sentence with a Joining Word",
        content: "You CAN start a sentence with 'But', 'And', 'Because', 'So', 'When' or 'Or' — many published authors do this for effect. For example: 'But she wasn't finished yet.' 'And then the lights went out.' 'Because of the rain, they stayed inside.' This creates emphasis or a dramatic pause. Use it deliberately — not all the time.",
      },
      // 31
      {
        type: "circle-correct",
        title: "Sentence-Opening Conjunctions: Which Is Used Correctly?",
        instruction: "Circle the sentence that uses a sentence-opening conjunction effectively.",
        questions: [
          { prompt: "Which is a more effective use?", options: ["But she tried again. And again. Until she got it right.", "She tried but again and again she got it wrong."] },
          { prompt: "Which feels more dramatic?", options: ["She ran quickly away.", "And she ran. She ran and she didn't stop."] },
        ],
      },
      // 32
      {
        type: "open-response",
        title: "Write Dramatic Sentences Starting With a Conjunction",
        instruction: "Write 4 dramatic sentences, each starting with one of these words: But / And / Because / So.",
        parentTip: "Sentence-opening conjunctions are common in action and suspense writing. Encourage your child to 'hear' the drama.",
        prompts: [
          { text: "But ___", type: "lines", lines: 2 },
          { text: "And ___", type: "lines", lines: 2 },
          { text: "Because ___", type: "lines", lines: 2 },
          { text: "So ___", type: "lines", lines: 2 },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "Choose the Best Conjunction for the Context",
        instruction: "Choose the conjunction that creates the most logical and interesting sentence.",
        sentences: [
          { text: "The alarm sounded ___ everyone ran to the exit. (so / when / because)", blanks: ["so"] },
          { text: "He waited ___ everyone else had left. (and / until / because)", blanks: ["until"] },
          { text: "She was nervous ___ she took a deep breath. (so / when / or)", blanks: ["so"] },
          { text: "Do you prefer summer ___ winter? (but / or / so)", blanks: ["or"] },
        ],
      },
      // 34
      {
        type: "sorting",
        title: "Sort Conjunctions Into Groups",
        instruction: "Sort these conjunctions by the type of connection they make.",
        columns: ["Addition (adds ideas)", "Contrast (shows difference)", "Cause/Result", "Time/Condition"],
        items: [
          { label: "and" }, { label: "but" }, { label: "because" }, { label: "so" },
          { label: "or" }, { label: "when" }, { label: "although" }, { label: "until" },
          { label: "if" }, { label: "yet" }, { label: "while" }, { label: "unless" },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Introduce: if, although, until",
        instruction: "Write one sentence using each of these new conjunctions: if, although, until.",
        parentTip: "'If' shows a condition. 'Although' is similar to 'but' — it shows a contrast. 'Until' shows time passing or a condition being reached.",
        prompts: [
          { text: "My 'if' sentence:", type: "lines", lines: 2 },
          { text: "My 'although' sentence:", type: "lines", lines: 2 },
          { text: "My 'until' sentence:", type: "lines", lines: 2 },
        ],
      },
      // 36
      {
        type: "circle-correct",
        title: "Choose if, although, or until",
        instruction: "Circle the best conjunction to complete each sentence.",
        questions: [
          { prompt: "___ you finish your homework, you can play outside.", options: ["Although", "If", "Until"] },
          { prompt: "She kept running ___ she reached the finish line.", options: ["if", "although", "until"] },
          { prompt: "___ it was raining, they still played outside.", options: ["Although", "Until", "If"] },
          { prompt: "He will help you ___ you ask nicely.", options: ["until", "if", "although"] },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Join Sentences Using if, although, until",
        instruction: "Join each pair of sentences into one, using the conjunction shown.",
        prompts: [
          { text: "It rained. They played inside. (use 'so'): ___", type: "lines", lines: 2 },
          { text: "She was nervous. She stepped onto the stage. (use 'although'): ___", type: "lines", lines: 2 },
          { text: "He didn't stop. He finished the race. (use 'until'): ___", type: "lines", lines: 2 },
          { text: "You study hard. You will pass. (use 'if'): ___", type: "lines", lines: 2 },
        ],
      },
      // 38
      {
        type: "true-false",
        title: "New Conjunctions: True or False?",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "'Although' is used to show a contrast, similar to 'but'.", answer: true },
          { text: "'Until' tells us when something started.", answer: false },
          { text: "'If' introduces a condition — something that must be true for the rest to follow.", answer: true },
          { text: "Conjunctions only join two main clauses.", answer: false },
          { text: "'Unless' means the same as 'if not'.", answer: true },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Write a Paragraph Using Four Different Conjunctions",
        instruction: "Write a paragraph (5–6 sentences) about planning a special day. Use at least 4 different conjunctions. Underline each one.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 8 },
          { text: "Conjunctions I used:", type: "lines", lines: 1 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Sentence Chain Game",
        content: "Play a sentence chain game with someone at home. Person 1 says a sentence. Person 2 must start their sentence with the LAST word (or a conjunction that links to it). Keep going for at least 10 sentences. You must use 'and', 'but', 'because', 'so', 'when', 'or', 'if' and 'although' at least once each during the chain.",
      },
      // 41
      {
        type: "open-response",
        title: "Identify and Explain Conjunction Choices in a Text",
        instruction: "Read the paragraph. Find every conjunction and explain why the writer chose each one.\n\nParagraph: 'She had practised every day, so she felt ready. Although her hands were shaking, she walked onto the stage. She took a deep breath when the music started and began to play.'",
        prompts: [
          { text: "Conjunction 1: ___ — Why chosen: ___", type: "lines", lines: 1 },
          { text: "Conjunction 2: ___ — Why chosen: ___", type: "lines", lines: 1 },
          { text: "Conjunction 3: ___ — Why chosen: ___", type: "lines", lines: 1 },
          { text: "Conjunction 4: ___ — Why chosen: ___", type: "lines", lines: 1 },
        ],
      },
      // 42
      {
        type: "fill-in-blank",
        title: "Complete the Story with the Best Conjunction",
        instruction: "Complete the story using conjunctions from the box: although, if, because, until, when, so, and, but.",
        parentTip: "There may be more than one possible answer — discuss the options together.",
        sentences: [
          { text: "Jess had always wanted to climb the mountain ___ she was finally ready. ___ the path was steep, she kept going. She climbed ___ her legs ached ___ she finally reached the top. ___ she looked down, she gasped — the view was breathtaking.", blanks: ["and", "Although", "until", "but", "When"] },
        ],
      },
      // 43
      {
        type: "multiple-choice",
        title: "Choose the Best Conjunction for Each Context",
        instruction: "Choose the conjunction that creates the most effective and logical sentence.",
        questions: [
          { prompt: "He apologised ___ he knew he had been wrong.", options: ["but", "because", "or", "until"] },
          { prompt: "She kept practising ___ she got it right.", options: ["although", "unless", "until", "so"] },
          { prompt: "___ you eat your vegetables, you won't get dessert.", options: ["Although", "Unless", "Until", "When"] },
          { prompt: "She was exhausted ___ she still helped her friend.", options: ["but", "because", "so", "and"] },
        ],
      },
      // 44
      {
        type: "sorting",
        title: "Coordinating or Subordinating Conjunction?",
        instruction: "Sort the conjunctions. Coordinating conjunctions join two equal ideas (and, but, so, or, yet). Subordinating conjunctions introduce a dependent clause (because, although, when, if, unless, until).",
        parentTip: "This is a more advanced grammatical concept — introduce the vocabulary without pressure. The key distinction is whether both clauses can stand alone.",
        columns: ["Coordinating (joins equals)", "Subordinating (introduces a clause)"],
        items: [
          { label: "and" }, { label: "because" }, { label: "but" }, { label: "although" },
          { label: "so" }, { label: "when" }, { label: "or" }, { label: "if" },
          { label: "yet" }, { label: "unless" }, { label: "for" }, { label: "until" },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Subordinate Clauses Can Move",
        content: "When you use a subordinating conjunction like 'because', 'although', 'when', 'if' or 'until', the clause it introduces can often move to the FRONT of the sentence. For example: 'She studied hard because she wanted to pass' can become 'Because she wanted to pass, she studied hard.' When the subordinate clause comes first, it needs a comma after it.",
      },
      // 46
      {
        type: "open-response",
        title: "Flip the Clause: Move the Conjunction Clause",
        instruction: "Rewrite each sentence so that the subordinate clause comes first. Add a comma in the right place.",
        parentTip: "Moving the clause to the front is a great way to vary sentence rhythm in writing.",
        prompts: [
          { text: "She smiled when she heard the news. → ___", type: "lines", lines: 1 },
          { text: "He trained hard because he wanted to improve. → ___", type: "lines", lines: 1 },
          { text: "They played outside until it got dark. → ___", type: "lines", lines: 1 },
          { text: "She felt nervous although she knew the answer. → ___", type: "lines", lines: 1 },
        ],
      },
      // 47
      {
        type: "circle-correct",
        title: "Does This Sentence Need a Comma?",
        instruction: "Circle the correctly punctuated version of each sentence.",
        parentTip: "Remember: a comma is needed after the subordinate clause ONLY when it comes first.",
        questions: [
          { prompt: "Which is correctly punctuated?", options: ["Although it was cold, she wore a dress.", "Although it was cold she wore a dress."] },
          { prompt: "Which is correctly punctuated?", options: ["She wore a dress, although it was cold.", "She wore a dress although it was cold."] },
          { prompt: "Which is correctly punctuated?", options: ["When the bell rang they all stood up.", "When the bell rang, they all stood up."] },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Write Sentences With Fronted Conjunction Clauses",
        instruction: "Write 4 sentences where the subordinate clause comes first. Use: because / although / when / if. Remember the comma!",
        prompts: [
          { text: "Because ___,", type: "lines", lines: 2 },
          { text: "Although ___,", type: "lines", lines: 2 },
          { text: "When ___,", type: "lines", lines: 2 },
          { text: "If ___,", type: "lines", lines: 2 },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Conjunction Placement: True or False?",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "When a subordinate clause starts a sentence, it needs a comma after it.", answer: true },
          { text: "Coordinating conjunctions (and, but, so) can be moved to the front of a sentence without a comma.", answer: false },
          { text: "'Because I was tired, I went to bed' is correctly punctuated.", answer: true },
          { text: "A conjunction must always be in the middle of a sentence.", answer: false },
          { text: "Moving the conjunction clause to the front can make writing more interesting.", answer: true },
        ],
      },
      // 50
      {
        type: "home-activity",
        title: "Conjunction Listening Walk",
        instruction: "Listen for conjunctions during read-alouds, conversations, TV programmes, and radio.",
        parentTip: "Incidental learning through listening is powerful. Even casually noticing conjunctions in real speech builds fluency.",
        suggestions: [
          "Tally: 'and', 'but', 'because', 'so', 'when', 'or' heard during a book or TV show",
          "Write down the most interesting sentence containing a conjunction that you heard",
          "Challenge: can you hear 'although', 'unless', 'until' or 'if' in real speech today?",
          "Tell a story about your day using at least 5 different conjunctions",
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────
      // 51
      {
        type: "open-response",
        title: "Expand Simple Sentences Into Complex Ones",
        instruction: "Expand each simple sentence into a complex sentence by adding at least two clauses joined with conjunctions. Use two different conjunctions in each expansion.",
        prompts: [
          { text: "Simple: She ran.\nExpanded:", type: "lines", lines: 3 },
          { text: "Simple: He was nervous.\nExpanded:", type: "lines", lines: 3 },
          { text: "Simple: They went home.\nExpanded:", type: "lines", lines: 3 },
        ],
      },
      // 52
      {
        type: "fill-in-blank",
        title: "Conjunction Cloze: A Story Passage",
        instruction: "Complete the passage with the most effective conjunction. Choices: although, because, but, so, until, when, and, if.",
        sentences: [
          { text: "Max had never flown before, ___ he was nervous ___ he boarded the plane. His sister held his hand ___ the engines started. ___ the plane lifted off the ground, he gasped. ___ he looked out the window, he smiled — it was beautiful. He was still nervous, ___ he told himself it would be worth it.", blanks: ["so", "when", "when", "When", "Although", "but"] },
        ],
      },
      // 53
      {
        type: "sorting",
        title: "Sort Sentences by Conjunction Type Used",
        instruction: "Read each sentence. Find the conjunction and sort the sentence by the TYPE of conjunction used.",
        columns: ["Coordinating (and, but, so, or, yet)", "Subordinating (because, when, if, although, until, unless)"],
        items: [
          { label: "She read the book and enjoyed it." },
          { label: "He left because the meeting was over." },
          { label: "She was tired but stayed awake." },
          { label: "Although it was late, they kept talking." },
          { label: "He practised so he would improve." },
          { label: "Unless you try, you will never know." },
        ],
      },
      // 54
      {
        type: "multiple-choice",
        title: "Choose the Most Precise Conjunction",
        instruction: "More than one conjunction might work — choose the one that makes the most precise or effective sentence.",
        parentTip: "This is about precision and tone — encourage your child to explain their reasoning.",
        questions: [
          { prompt: "She felt calm ___ the chaos around her was overwhelming.", options: ["although", "but", "however", "yet"] },
          { prompt: "He will keep trying ___ he gets it right.", options: ["when", "until", "if", "because"] },
          { prompt: "___ you leave now, you will miss the bus.", options: ["Unless", "Until", "Although", "When"] },
          { prompt: "She arrived at the door just ___ the rain began.", options: ["when", "because", "although", "so"] },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Proofread: Fix the Conjunction Errors",
        instruction: "Read the paragraph. Find and fix 5 conjunction errors (wrong choice, missing comma, or missing conjunction).\n\nAlthough she had trained hard but she felt nervous. She stretched when she began to worry about the race. She told herself: 'Unless I try my best, or I won't know what I can do.' So she took a deep breath. When the gun fired she ran.",
        prompts: [
          { text: "Corrected paragraph:", type: "lines", lines: 7 },
          { text: "The 5 errors I found:", type: "lines", lines: 2 },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Conjunctions in Persuasive Writing",
        instruction: "Write 5 sentences of a persuasive text arguing that homework is important (or unimportant). Use at least 5 different conjunctions. Underline each one.",
        parentTip: "Conjunctions are essential in persuasive writing — they link arguments, show concessions ('although') and give reasons ('because').",
        prompts: [
          { text: "My persuasive text:", type: "lines", lines: 8 },
          { text: "Conjunctions I used:", type: "lines", lines: 1 },
        ],
      },
      // 57
      {
        type: "matching",
        title: "Match the Conjunction to Its Effect",
        instruction: "Draw a line from each conjunction to the main effect it creates in writing.",
        left: ["although", "because", "unless", "until", "so", "when"],
        right: [
          "Creates suspense — a condition that must be met",
          "Shows a surprising contrast",
          "Explains a cause",
          "Sets a time frame",
          "Shows a consequence",
          "Gives a negative condition",
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Write a Conjunction Effect Analysis",
        instruction: "Choose 3 conjunctions. For each one, write: (a) what it does in a sentence, (b) an example sentence, and (c) what the sentence would lose if you removed or replaced it.",
        prompts: [
          { text: "Conjunction 1: ___\n(a): ___\n(b): ___\n(c): ___", type: "lines", lines: 4 },
          { text: "Conjunction 2: ___\n(a): ___\n(b): ___\n(c): ___", type: "lines", lines: 4 },
          { text: "Conjunction 3: ___\n(a): ___\n(b): ___\n(c): ___", type: "lines", lines: 4 },
        ],
      },
      // 59
      {
        type: "sorting",
        title: "Sort Conjunctions by How Often They Should Be Used",
        instruction: "Some conjunctions are overused (especially 'and'). Sort these into: 'use often', 'use for variety', 'use sparingly'.",
        parentTip: "This builds awareness about deliberate word choice — a key writing skill.",
        columns: ["Use often (natural and common)", "Use for variety (good choice)", "Use carefully (for specific effects)"],
        items: [
          { label: "and" }, { label: "although" }, { label: "but" }, { label: "unless" },
          { label: "so" }, { label: "lest" }, { label: "because" }, { label: "notwithstanding" },
          { label: "when" }, { label: "yet" },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip",
        title: "Tip: Avoiding 'And' Overuse",
        content: "One of the most common issues in Year 2 writing is stringing ideas together with 'and... and... and'. Good writers vary their conjunctions. Instead of 'She woke up and ate breakfast and went to school', try: 'After she woke up and ate breakfast, she headed to school.' Or: 'She woke up, ate breakfast, then hurried to school.' Varying conjunctions — or removing them — makes writing flow.",
      },
      // 61 — SPARK at ~60
      {
        type: "spark",
        title: "Spark: Conjunction Revision Challenge",
        content: "Take a piece of your own recent writing. Find every place you used 'and' to join ideas. For each one, decide: Is this the best conjunction here, or would 'but', 'because', 'so', 'although', 'when' or another conjunction work better? Rewrite those sentences. Does the new version say more?",
      },
      // 62
      {
        type: "open-response",
        title: "Revise an 'And-Heavy' Paragraph",
        instruction: "Read this paragraph. Rewrite it by replacing overused 'ands' with more precise conjunctions, or by restructuring sentences.\n\n'She woke up and she was hungry and she went to the kitchen and she made toast and she ate it and then she got ready and she left for school.'",
        prompts: [
          { text: "My revised paragraph:", type: "lines", lines: 6 },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Complex Sentences: Multiple Clauses",
        instruction: "Write 3 sentences that each contain THREE clauses joined by TWO conjunctions. Each sentence must make sense and use two different conjunctions.",
        parentTip: "Complex multi-clause sentences are a stretch goal for Year 2. Celebrate any attempt and focus on meaning.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
        ],
      },
      // 64
      {
        type: "fill-in-blank",
        title: "Complete Formal Sentences Using Precise Conjunctions",
        instruction: "Complete each sentence with the most formal and precise conjunction.",
        sentences: [
          { text: "She continued working ___ she was exhausted.", blanks: ["although"] },
          { text: "He will not be admitted ___ he has the correct documents.", blanks: ["unless"] },
          { text: "The experiment failed ___ the temperature was too low.", blanks: ["because"] },
          { text: "She waited ___ the very last moment to decide.", blanks: ["until"] },
        ],
      },
      // 65
      {
        type: "multiple-choice",
        title: "Conjunction Meaning in Context: Advanced",
        instruction: "Choose the conjunction that best expresses the meaning described.",
        questions: [
          { prompt: "To show that something will happen under a certain condition:", options: ["although", "if", "until", "so"] },
          { prompt: "To show that something is surprising given the circumstances:", options: ["because", "and", "although", "when"] },
          { prompt: "To show that something is a direct result of something else:", options: ["when", "because", "so", "but"] },
          { prompt: "To show that one thing must happen before another:", options: ["if", "when", "before/until", "so"] },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Write a 3-Part Argument Using Conjunctions",
        instruction: "Write a 3-part argument on any topic. Paragraph 1: State your opinion (use 'because'). Paragraph 2: Add a second reason (use 'furthermore' or 'also... and'). Paragraph 3: Acknowledge the other side (use 'although') but return to your opinion (use 'however' or 'but').",
        parentTip: "This models the classic three-part argument structure — a great foundation for formal writing.",
        prompts: [
          { text: "Paragraph 1:", type: "lines", lines: 3 },
          { text: "Paragraph 2:", type: "lines", lines: 3 },
          { text: "Paragraph 3:", type: "lines", lines: 3 },
        ],
      },
      // 67
      {
        type: "true-false",
        title: "Conjunction Use in Formal and Informal Writing",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "'And' and 'but' are common in both formal and informal writing.", answer: true },
          { text: "Formal writing should avoid all conjunctions.", answer: false },
          { text: "Starting a sentence with 'Because' is always a grammatical error.", answer: false },
          { text: "Varying conjunctions improves the quality and flow of writing.", answer: true },
          { text: "'Although' is more formal than 'but' and works well in reports.", answer: true },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Analyse Conjunctions in a Real Text",
        instruction: "Find a paragraph from a book, article, or any real text. Copy it out, then underline every conjunction. List them. Which types are used most? What does this suggest about the purpose of the text?",
        prompts: [
          { text: "My paragraph (copied):", type: "lines", lines: 6 },
          { text: "Conjunctions found:", type: "lines", lines: 2 },
          { text: "What this tells me about the text:", type: "lines", lines: 3 },
        ],
      },
      // 69
      {
        type: "fill-in-blank",
        title: "Write the Conjunction That Matches the Explanation",
        instruction: "Complete each sentence with the conjunction that matches the meaning clue.",
        sentences: [
          { text: "___ (contrast/surprise) the sun was shining, she stayed inside all day.", blanks: ["Although"] },
          { text: "He kept studying ___ (time boundary) he knew the answer.", blanks: ["until"] },
          { text: "___ (condition) it rains tomorrow, the game will be cancelled.", blanks: ["If"] },
          { text: "She felt better ___ (reason) the doctor gave her medicine.", blanks: ["because"] },
        ],
      },
      // 70
      {
        type: "home-activity",
        title: "Conjunction Story Game",
        instruction: "Play 'Add a Clause' — take turns building a sentence. Each person must add a new clause using a conjunction that has not been used yet.",
        parentTip: "Oral language games like this build grammatical fluency without pressure. Celebrate any successful conjunction use.",
        suggestions: [
          "Start: 'She went to the shop...' — each person adds a clause using a new conjunction",
          "See how many clauses you can build before the sentence stops making sense",
          "Write down the longest sentence you build together",
          "Challenge: use 8 different conjunctions in one sentence!",
        ],
      },
      // 71
      {
        type: "open-response",
        title: "Write a Story Using 8 Different Conjunctions",
        instruction: "Write a short story (8–10 sentences) on any topic. You must use 8 different conjunctions. List them at the end.",
        prompts: [
          { text: "My story:", type: "lines", lines: 12 },
          { text: "My 8 conjunctions:", type: "lines", lines: 2 },
        ],
      },
      // 72
      {
        type: "sorting",
        title: "Which Conjunction Is Used Correctly Here?",
        instruction: "Read each pair of sentences. Sort them: 'Conjunction used correctly' or 'Conjunction used incorrectly'.",
        columns: ["Used correctly", "Used incorrectly"],
        items: [
          { label: "She was tired although she slept all night." },
          { label: "She was tired because she slept all night." },
          { label: "He left early so he could get a good seat." },
          { label: "He left early because he could get a good seat." },
          { label: "Although she was nervous, she performed well." },
          { label: "Because she was nervous, she performed well." },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Write With Precision: Conjunction Choice Justification",
        instruction: "Write 4 sentences about a challenge you have faced or imagined. For each sentence, write beside it the conjunction you chose and WHY you chose it instead of another option.",
        prompts: [
          { text: "Sentence 1: ___\nConjunction chosen: ___  Why: ___", type: "lines", lines: 2 },
          { text: "Sentence 2: ___\nConjunction chosen: ___  Why: ___", type: "lines", lines: 2 },
          { text: "Sentence 3: ___\nConjunction chosen: ___  Why: ___", type: "lines", lines: 2 },
          { text: "Sentence 4: ___\nConjunction chosen: ___  Why: ___", type: "lines", lines: 2 },
        ],
      },
      // 74
      {
        type: "multiple-choice",
        title: "Advanced Conjunction Selection",
        instruction: "Choose the conjunction that creates the most nuanced and precise sentence.",
        questions: [
          { prompt: "She didn't speak ___ she had nothing useful to add.", options: ["although", "because", "so", "and"] },
          { prompt: "He waited at the door ___ she was ready.", options: ["when", "until", "unless", "because"] },
          { prompt: "___ the evidence seemed clear, the judge reserved judgement.", options: ["Although", "Because", "When", "So"] },
          { prompt: "She will agree to help ___ you ask respectfully.", options: ["because", "if", "so", "until"] },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Relative Clauses — Another Type of Complex Sentence",
        content: "Relative clauses are another way to add information using joining words. The words 'who', 'which' and 'that' can introduce a clause that tells us more about a noun. For example: 'The dog that barked all night finally quietened down.' 'The woman who wrote the book spoke at our school.' 'The letter, which arrived on Monday, changed everything.' These are called relative clauses.",
      },
      // 76
      {
        type: "matching",
        title: "Match the Relative Clause Word to Its Use",
        instruction: "Draw a line from each relative pronoun to what it refers to.",
        left: ["who", "which", "that"],
        right: [
          "Can refer to people OR things",
          "Refers to people only",
          "Refers to things only (not people)",
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Add a Relative Clause Using who, which, or that",
        instruction: "Expand each sentence by adding a relative clause using 'who', 'which' or 'that'.",
        parentTip: "Relative clauses add information without starting a new sentence — a hallmark of sophisticated writing.",
        prompts: [
          { text: "The teacher ___ walked into the room quickly.", type: "lines", lines: 1 },
          { text: "The book ___ was on the shelf turned out to be fascinating.", type: "lines", lines: 1 },
          { text: "The door ___ she had always been afraid of stood ajar.", type: "lines", lines: 1 },
          { text: "The scientist ___ discovered the new species gave a lecture.", type: "lines", lines: 1 },
        ],
      },
      // 78
      {
        type: "fill-in-blank",
        title: "Choose who, which, or that",
        instruction: "Complete each sentence with the correct relative pronoun.",
        sentences: [
          { text: "The child ___ won the prize was delighted.", blanks: ["who"] },
          { text: "The book ___ I borrowed was excellent.", blanks: ["that"] },
          { text: "The storm ___ hit the coast caused major damage.", blanks: ["that"] },
          { text: "She met the author ___ wrote her favourite series.", blanks: ["who"] },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Combining All Conjunction Knowledge: Narrative Writing",
        instruction: "Write a narrative (10 sentences) about a discovery. Requirements: use at least 6 different conjunctions, 2 fronted subordinate clauses (with comma), and 1 relative clause (who/which/that). Label each example in the margin.",
        prompts: [
          { text: "My narrative:", type: "lines", lines: 13 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Build a Conjunction Chart",
        content: "Create a large reference chart showing all the conjunctions you have learned. Organise it by type: coordinating, subordinating, relative pronouns. For each conjunction, write: the word, its job, and an example sentence. Make it colourful and display it in your learning space for use during future writing tasks.",
      },
      // ── EXTENDING (81–100) ────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Reflective Analysis: Conjunctions in Writing",
        instruction: "Answer each question in full sentences with examples.",
        prompts: [
          { text: "What is the difference between a coordinating and a subordinating conjunction? Give two examples of each.", type: "lines", lines: 4 },
          { text: "Why do you think writers vary their conjunctions instead of always using 'and'?", type: "lines", lines: 3 },
          { text: "How does starting a sentence with a subordinate clause (e.g. 'Although it was late,') change the feeling of the sentence compared to putting it at the end?", type: "lines", lines: 4 },
        ],
      },
      // 82
      {
        type: "sorting",
        title: "Sort: Main Clause or Subordinate Clause?",
        instruction: "Read each clause. Sort it: can it stand alone as a sentence (main clause), or does it need more (subordinate clause)?",
        parentTip: "A subordinate clause depends on the main clause to make sense — it cannot stand alone.",
        columns: ["Main clause (stands alone)", "Subordinate clause (needs more)"],
        items: [
          { label: "She ran quickly" },
          { label: "although it was raining" },
          { label: "because he was tired" },
          { label: "the dog barked all night" },
          { label: "when she finally arrived" },
          { label: "he laughed" },
          { label: "unless you help me" },
          { label: "the train was late" },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Add a Main Clause to Each Subordinate Clause",
        instruction: "Each item is a subordinate clause. Add a main clause to make a complete sentence. Add a comma if needed.",
        prompts: [
          { text: "Although it was raining, ___", type: "lines", lines: 1 },
          { text: "___ because she had studied hard.", type: "lines", lines: 1 },
          { text: "When the lights went out, ___", type: "lines", lines: 1 },
          { text: "___ unless he apologised.", type: "lines", lines: 1 },
          { text: "Until the rescue team arrived, ___", type: "lines", lines: 1 },
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "Identify the Subordinate Clause",
        instruction: "Choose the part of each sentence that is the subordinate clause.",
        questions: [
          { prompt: "Although the sky was clear, the temperature dropped suddenly.", options: ["Although the sky was clear", "the temperature dropped suddenly"] },
          { prompt: "She smiled when she heard the familiar voice.", options: ["She smiled", "when she heard the familiar voice"] },
          { prompt: "Unless we leave now, we will miss the train.", options: ["Unless we leave now", "we will miss the train"] },
          { prompt: "He had been writing for hours because the deadline was approaching.", options: ["He had been writing for hours", "because the deadline was approaching"] },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Write a Complex Multi-Clause Story",
        instruction: "Write a story (12 sentences) that demonstrates mastery of all conjunction types. Requirements: 3 coordinating conjunctions, 3 subordinating conjunctions (in different positions), 1 relative clause, 2 fronted clauses with comma, and 1 sentence starting dramatically with 'But' or 'And'.",
        parentTip: "This is the extended writing challenge. Allow time and provide encouragement. Focus praise on sentence variety.",
        prompts: [
          { text: "My story:", type: "lines", lines: 15 },
          { text: "My conjunction checklist:", type: "lines", lines: 3 },
        ],
      },
      // 86
      {
        type: "fill-in-blank",
        title: "Literary Analysis Cloze: Conjunctions in Professional Writing",
        instruction: "Complete this analysis paragraph about how conjunctions work in literature.",
        sentences: [
          { text: "Authors use conjunctions to control how readers experience a text. ___ (contrast) clauses create tension, ___ (reason) clauses explain motivations, ___ (time) clauses establish pace. ___ (condition) a writer wants to create suspense, they might use a short subordinate clause that delays the main action — ___ (contrast) then releases it dramatically.", blanks: ["Although/Contrast", "because/reason", "when/time", "If/condition", "but/contrast"] },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Write Sentences That Demonstrate Specific Effects",
        instruction: "Write one sentence for each intended effect. Use conjunctions deliberately.",
        prompts: [
          { text: "A sentence that creates suspense using 'until' or 'unless':", type: "lines", lines: 2 },
          { text: "A sentence that shows a surprising contrast using 'although':", type: "lines", lines: 2 },
          { text: "A sentence that explains a character's motivation using 'because':", type: "lines", lines: 2 },
          { text: "A sentence that establishes setting and time using 'when':", type: "lines", lines: 2 },
        ],
      },
      // 88
      {
        type: "sorting",
        title: "Analyse a Published Text: Sort All Conjunctions",
        instruction: "Read this passage. Find ALL conjunctions and relative pronouns. Sort them by type.\n\nPassage: 'Although the expedition had failed, the scientist who led the team refused to give up. Because the data showed promise, she applied for a new grant so that she could try again. Unless funding came through, she would have to wait — but she was patient.'",
        columns: ["Coordinating", "Subordinating", "Relative pronoun"],
        items: [
          { label: "Although" }, { label: "who" }, { label: "Because" }, { label: "so (that)" },
          { label: "Unless" }, { label: "but" },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Write an Analysis of the Published Passage",
        instruction: "Write a 6–8 sentence analysis of how the conjunctions in the passage above (activity 88) contribute to the meaning and effect of the text. Consider: How do they connect ideas? Which ones create tension? Which give reasons?",
        prompts: [
          { text: "My analysis:", type: "lines", lines: 10 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Conjunctive Adverbs",
        content: "Beyond standard conjunctions, English also has conjunctive adverbs — words that connect ideas between sentences rather than within them: 'however', 'therefore', 'furthermore', 'consequently', 'nevertheless', 'meanwhile'. These are often used in formal writing and follow a semicolon or a full stop. For example: 'She practised every day; consequently, she improved rapidly.' or 'The weather was poor. Nevertheless, they continued.'",
      },
      // 91
      {
        type: "matching",
        title: "Match the Conjunctive Adverb to Its Meaning",
        instruction: "Draw a line from each conjunctive adverb to its meaning.",
        left: ["however", "therefore", "furthermore", "consequently", "nevertheless", "meanwhile"],
        right: [
          "As a result",
          "At the same time",
          "Despite that, even so",
          "In contrast, on the other hand",
          "As a further point",
          "For that reason, as a conclusion",
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Use Conjunctive Adverbs in Formal Sentences",
        instruction: "Write a sentence using each conjunctive adverb.",
        prompts: [
          { text: "however: ___", type: "lines", lines: 2 },
          { text: "therefore: ___", type: "lines", lines: 2 },
          { text: "furthermore: ___", type: "lines", lines: 2 },
          { text: "nevertheless: ___", type: "lines", lines: 2 },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Write a Formal Report Paragraph Using Conjunctive Adverbs",
        instruction: "Write a formal report paragraph (6–8 sentences) on any topic. Use at least 3 conjunctive adverbs and 3 standard conjunctions. Label each type in the margin.",
        parentTip: "Formal report writing is an extending genre task. Celebrate any attempt to use formal register.",
        prompts: [
          { text: "My formal paragraph:", type: "lines", lines: 10 },
          { text: "Conjunctive adverbs I used:", type: "lines", lines: 1 },
          { text: "Standard conjunctions I used:", type: "lines", lines: 1 },
        ],
      },
      // 94
      {
        type: "multiple-choice",
        title: "Choose the Best Conjunctive Adverb",
        instruction: "Choose the conjunctive adverb that best connects the two sentences.",
        questions: [
          { prompt: "The project ran over budget. ___, it was completed successfully.", options: ["Nevertheless", "Therefore", "Furthermore", "Meanwhile"] },
          { prompt: "She studied every night. ___, she passed with high marks.", options: ["However", "Therefore", "Meanwhile", "Nevertheless"] },
          { prompt: "The data was inconclusive. ___, the team decided to continue.", options: ["Therefore", "Furthermore", "Nevertheless", "Consequently"] },
          { prompt: "He finished the report. ___, she was completing the presentation.", options: ["However", "Therefore", "Meanwhile", "Furthermore"] },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Create a Comprehensive Conjunction Guide",
        instruction: "Write a comprehensive reference guide covering: coordinating conjunctions (with examples and uses), subordinating conjunctions by type (contrast, time, reason, condition), relative clauses (who, which, that), conjunctive adverbs, and tips for avoiding 'and' overuse. Make it suitable for a Year 3 student.",
        prompts: [
          { text: "My conjunction guide:", type: "lines", lines: 16 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Extended Persuasive Essay Using Formal Conjunction Techniques",
        instruction: "Write a persuasive essay (12–15 sentences) on a topic you care about. Requirements: 5 standard conjunctions (varied types), 2 fronted subordinate clauses, 2 conjunctive adverbs, 1 relative clause. Label each in the margin.",
        prompts: [
          { text: "My essay:", type: "lines", lines: 18 },
          { text: "Grammar checklist:", type: "lines", lines: 4 },
        ],
      },
      // 97
      {
        type: "true-false",
        title: "Advanced Conjunction Statements",
        instruction: "Circle TRUE or FALSE for each advanced statement.",
        statements: [
          { text: "Conjunctive adverbs connect ideas between sentences, not within them.", answer: true },
          { text: "A subordinate clause can stand alone as a complete sentence.", answer: false },
          { text: "'Although' and 'however' express similar meanings of contrast.", answer: true },
          { text: "Relative clauses always start with 'who', 'which' or 'that'.", answer: true },
          { text: "Using the same conjunction repeatedly makes writing stronger.", answer: false },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Investigate Conjunctions Across Text Types",
        instruction: "Find one example of each text type: a story, a news article, and a recipe or instruction set. For each, list the conjunctions used and explain how the text type affects which conjunctions are most common.",
        prompts: [
          { text: "Story conjunctions: ___", type: "lines", lines: 2 },
          { text: "News article conjunctions: ___", type: "lines", lines: 2 },
          { text: "Recipe/instructions conjunctions: ___", type: "lines", lines: 2 },
          { text: "What I noticed:", type: "lines", lines: 3 },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflection: My Conjunction Journey",
        instruction: "Write a reflective paragraph about what you have learned about conjunctions. Include: what you found easy, what was challenging, your favourite conjunction, and how you will use this knowledge in future writing.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 8 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark",
        title: "Spark: Become a Conjunction Expert",
        content: "Research conjunctions across different languages. Does your family speak any other languages? How do they connect ideas — do they use joining words the same way English does? If you only speak English, research: Does German put the verb at the END of a subordinate clause? Does Japanese put connecting words in a different place? Write a short 'Languages and Conjunctions' investigation and share it with your family.",
      },
    ],
  },

  // ── WS 5: Reading Comprehension ────────────────────────────────
  {
    slug: "reading-comprehension-main-idea",
    title: "Reading Comprehension: Main Idea",
    strand: "Literacy",
    description:
      "Read a short passage and identify the main idea, key characters, settings and supporting details.",
    learningGuide: {
      concept:
        "The main idea is what a text is mostly about — it is the big idea that all the details support. Characters are the people or animals in a story. The setting is where and when it takes place. Details are the smaller pieces of information that tell us more.",
      activation:
        "Ask your child to tell you about a recent TV show or book in one sentence. That summary is the main idea! Now ask: where did it happen? Who was in it? Those are the setting and characters.",
      check:
        "After reading, can your child tell you the main idea in their own words without looking at the text? Can they point to evidence in the text to support their answer?",
    },
    lesson: {
      title: "What Is It Mostly About?",
      objective:
        "Identify the main idea, characters, setting and key details in a short text.",
      materials: [
        "Paper and pencil",
        "This worksheet",
        "A highlighter or coloured pencil",
      ],
      intro: {
        title: "The Big Idea",
        script:
          "When we read, we want to understand the big idea — what is the whole text mostly about? Every sentence in a good paragraph is like a team member — they all work together to support the main idea. Let me show you what I mean. If I say: 'Koalas sleep a lot. They sleep up to 22 hours a day. This helps them save energy.' — what is the big idea? Yes! Koalas sleep a huge amount. All those sentences told us different things, but they all supported that one big idea.",
        action:
          "Together read the short passage on the worksheet. Before answering any questions, ask your child: 'What do you think this text is mostly about?' Note their first impression.",
      },
      mainActivity: {
        title: "Read and Find",
        script:
          "Now let's read carefully and find the answers together. I will ask you some questions, and when you give me an answer I want you to point to the part of the text that helped you know that. Good readers always go back to the text for evidence.",
        action:
          "Read the passage together (or have your child read it). Then work through the comprehension questions. For each answer, ask your child to point to or underline the part of the text that tells them the answer.",
      },
      wrapUp: {
        title: "Tell Me in Your Own Words",
        script:
          "Close the worksheet. Now tell me, in your own words — what was that text about? Pretend I have never heard of it. What would you tell me?",
        action:
          "Child gives an oral summary without looking at the text. Praise any accurate recall of the main idea and key details. Gently prompt if they get stuck.",
      },
      parentTip:
        "If your child finds comprehension challenging, re-reading the text a second time often helps a great deal — especially reading it aloud the second time. Fluency and comprehension are closely linked: the more smoothly a child reads, the more mental space they have for understanding. If words are tripping them up, take turns reading aloud together.",
      extension:
        "Ask your child to draw a simple map of the setting and a picture of the main character. Then ask them to write two more facts they would want to know about the topic — this builds curiosity-based reading habits.",
      resources: [
        {
          title: "Reading for Main Idea",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description:
            "Khan Academy Year 2 reading informational text activities, including main idea and details.",
        },
        {
          title: "ABC Education — Reading",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education literacy resource for primary readers.",
        },
        {
          title: "Starfall — Learn to Read",
          url: "https://www.starfall.com/h/ltr-classic/ltr-classic.php?sn=main",
          description: "Starfall reading comprehension and fluency activities.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      // 1
      {
        type: "open-response",
        title: "Read and Answer: Wombats",
        instruction: "Read the passage below, then answer the questions in full sentences.\n\n--- PASSAGE ---\nWombats are Australian marsupials that live in burrows underground. They are strong diggers and use their powerful claws to carve out long tunnels. Wombats mostly come out at night to graze on grasses and roots. During the day they rest inside their cool burrow. Baby wombats, called joeys, are tiny when they are born and grow up safely in their mother's pouch.",
        parentTip: "Remind your child to look back at the passage when they are not sure of an answer. Point to the relevant sentence together if they get stuck.",
        prompts: [
          { text: "What is the main idea of this passage? Write it in one sentence.", type: "lines", lines: 2 },
          { text: "Where do wombats live? Find the answer in the passage.", type: "lines", lines: 2 },
          { text: "What do wombats eat?", type: "lines", lines: 2 },
          { text: "What is a baby wombat called?", type: "lines", lines: 1 },
          { text: "Write one fact you found most interesting and explain why.", type: "lines", lines: 3 },
        ],
      },
      // 2
      {
        type: "sequence",
        title: "Order the Key Events: Wombats",
        instruction: "Number these sentences from the passage in the correct order (1 to 4).",
        parentTip: "Encourage your child to re-read the passage to check the order before numbering.",
        items: [
          { label: "Baby joeys grow up in their mother's pouch." },
          { label: "Wombats dig long tunnels with their claws." },
          { label: "At night, wombats come out to eat." },
          { label: "During the day, wombats rest in their burrow." },
        ],
      },
      // 3
      {
        type: "open-response",
        title: "Retell in Your Own Words: Wombats",
        instruction: "Without looking at the passage, write 3 facts you remember about wombats. Use your own words.",
        prompts: [
          { text: "Fact 1:", type: "lines", lines: 2 },
          { text: "Fact 2:", type: "lines", lines: 2 },
          { text: "Fact 3:", type: "lines", lines: 2 },
        ],
      },
      // 4
      {
        type: "true-false",
        title: "Comprehension Check: Wombats",
        instruction: "Read each statement about the wombat passage. Circle TRUE or FALSE.",
        parentTip: "Ask your child to point to the evidence in the passage for each answer.",
        statements: [
          { text: "Wombats live in burrows underground.", answer: true },
          { text: "Wombats come out in the daytime to eat.", answer: false },
          { text: "Baby wombats are called joeys.", answer: true },
          { text: "Wombats eat fish and meat.", answer: false },
          { text: "Wombats use their claws to dig tunnels.", answer: true },
        ],
      },
      // 5
      {
        type: "multiple-choice",
        title: "What Is the Main Idea?",
        instruction: "Read a short text. Choose the best main idea from the options.",
        parentTip: "The main idea is what the WHOLE text is about — not just one detail from it.",
        questions: [
          { prompt: "Text: 'Koalas sleep up to 22 hours a day. They sleep so much because their food — eucalyptus leaves — gives very little energy. Sleeping saves energy.' The main idea is:", options: ["Koalas are lazy animals.", "Koalas sleep a lot because their diet is low in energy.", "Eucalyptus leaves are not good to eat.", "Koalas are Australian animals."] },
          { prompt: "Text: 'Ants live in large groups called colonies. They work together to find food, protect the nest and care for young ants. Each ant has a special job.' The main idea is:", options: ["Ants are tiny insects.", "Ants find food in the garden.", "Ants live and work together in organised colonies.", "Queen ants are the biggest."] },
        ],
      },
      // 6
      {
        type: "open-response",
        title: "Identify the Main Idea in Your Own Words",
        instruction: "Read this passage, then write the main idea in one sentence.\n\n--- PASSAGE ---\nKangaroos are one of Australia's most well-known animals. They move by hopping on their large back legs. A mother kangaroo carries her joey in a pouch on her belly. Kangaroos live in mobs and graze on grasses. They can be found across mainland Australia.",
        prompts: [
          { text: "Main idea (one sentence):", type: "lines", lines: 2 },
          { text: "Two supporting details from the passage:", type: "lines", lines: 3 },
        ],
      },
      // 7
      {
        type: "true-false",
        title: "Comprehension Check: Kangaroos",
        instruction: "Read each statement about the kangaroo passage. Circle TRUE or FALSE.",
        statements: [
          { text: "Kangaroos move by running on all four legs.", answer: false },
          { text: "A baby kangaroo lives in its mother's pouch.", answer: true },
          { text: "Kangaroos live alone in the bush.", answer: false },
          { text: "Kangaroos can be found across mainland Australia.", answer: true },
        ],
      },
      // 8
      {
        type: "open-response",
        title: "Main Idea vs Supporting Detail",
        instruction: "Read the list below. Write M next to the MAIN IDEA and S next to each SUPPORTING DETAIL.\n\nList:\n1. Platypuses are fascinating and unusual mammals.\n2. They lay eggs, which is rare for a mammal.\n3. The male has a venomous spur on its back leg.\n4. They use electroreceptors to find food underwater.",
        prompts: [
          { text: "Label each sentence (M or S):", type: "lines", lines: 4 },
          { text: "Explain how you knew which was the main idea:", type: "lines", lines: 2 },
        ],
      },
      // 9
      {
        type: "matching",
        title: "Match the Text Detail to the Main Idea It Supports",
        instruction: "Draw a line from each supporting detail to the main idea it supports.",
        left: [
          "They lay eggs",
          "They hop on large back legs",
          "They sleep up to 22 hours",
          "They dig long tunnels",
        ],
        right: [
          "Wombats are strong diggers",
          "Koalas sleep a lot",
          "Kangaroos are built for movement",
          "Platypuses are unusual mammals",
        ],
      },
      // 10
      {
        type: "open-response",
        title: "Read and Respond: Echidnas",
        instruction: "Read the passage, then answer the questions.\n\n--- PASSAGE ---\nEchidnas are small, spiky Australian animals. They are one of only two mammals that lay eggs. Echidnas use their long, sticky tongues to eat ants and termites. They have no teeth — they grind food with pads in their mouths. When threatened, an echidna rolls into a ball to protect itself.",
        parentTip: "Encourage your child to underline the answer in the passage before writing it down.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "What do echidnas eat?", type: "lines", lines: 1 },
          { text: "How do they protect themselves from danger?", type: "lines", lines: 2 },
          { text: "What is unusual about echidnas as mammals?", type: "lines", lines: 2 },
        ],
      },
      // 11
      {
        type: "sorting",
        title: "Sort: Main Idea or Supporting Detail?",
        instruction: "Read each sentence from the echidna passage. Sort it into 'Main idea' or 'Supporting detail'.",
        columns: ["Main idea", "Supporting detail"],
        items: [
          { label: "Echidnas are small, spiky Australian animals." },
          { label: "They use long, sticky tongues to eat ants." },
          { label: "They have no teeth." },
          { label: "Echidnas roll into a ball when threatened." },
        ],
      },
      // 12
      {
        type: "true-false",
        title: "Comprehension Check: Echidnas",
        instruction: "Read each statement. Circle TRUE or FALSE.",
        statements: [
          { text: "Echidnas have many teeth for chewing.", answer: false },
          { text: "Echidnas are one of two mammals that lay eggs.", answer: true },
          { text: "Echidnas eat fruit and vegetables.", answer: false },
          { text: "An echidna rolls into a ball when threatened.", answer: true },
          { text: "Echidnas use their tongue to catch food.", answer: true },
        ],
      },
      // 13
      {
        type: "open-response",
        title: "Write a Main Idea Sentence for a New Topic",
        instruction: "Read the facts below. Write ONE sentence that states the main idea that all these facts support.\n\nFacts: 1. The Great Barrier Reef is the world's largest coral reef system. 2. It is home to thousands of species of fish. 3. It can be seen from outer space. 4. It stretches over 2,300 km along the Queensland coast.",
        prompts: [
          { text: "My main idea sentence:", type: "lines", lines: 2 },
        ],
      },
      // 14
      {
        type: "sequence",
        title: "Put the Information in a Logical Order",
        instruction: "Number these sentences in the order that makes the most sense for a paragraph about rain (1–5).",
        items: [
          { label: "The water falls back to Earth as rain." },
          { label: "Water from oceans and lakes evaporates into the air." },
          { label: "This water cycle repeats over and over." },
          { label: "Water vapour rises into the sky and cools." },
          { label: "Tiny water droplets gather to form clouds." },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: Finding the Main Idea",
        content: "The main idea is what the WHOLE text is mostly about — not just one detail. To find it, ask: 'What is every sentence in this text telling me about?' If you had to tell someone what the text was about in ONE sentence, what would you say? That is your main idea. The main idea is often (but not always) stated in the first or last sentence of a paragraph.",
      },
      // 16
      {
        type: "open-response",
        title: "Main Idea Practice: Short Texts",
        instruction: "Write the main idea of each short text in ONE sentence.\n\nText A: 'Dogs make wonderful pets. They are loyal and affectionate. They enjoy exercise and play. Many dogs can be trained to help people with disabilities.'\n\nText B: 'Rainforests cover about 6% of Earth's surface. They are home to more than half the world's plant and animal species. Rainforests also help regulate Earth's climate.'",
        prompts: [
          { text: "Text A main idea:", type: "lines", lines: 2 },
          { text: "Text B main idea:", type: "lines", lines: 2 },
        ],
      },
      // 17
      {
        type: "multiple-choice",
        title: "Which Is NOT a Supporting Detail?",
        instruction: "Read the main idea. Choose the sentence that is NOT a supporting detail.",
        questions: [
          { prompt: "Main idea: Bees are important for the environment. Which sentence does NOT support this?", options: ["Bees pollinate flowers and crops.", "Without bees, many plants could not reproduce.", "Bees make honey.", "Bees have six legs and two pairs of wings."] },
          { prompt: "Main idea: Exercise is important for children's health. Which sentence does NOT fit?", options: ["Exercise strengthens muscles and bones.", "Children who exercise often sleep better.", "My favourite sport is swimming.", "Regular exercise can improve concentration."] },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Summarise a Passage in Three Sentences",
        instruction: "Read the passage, then write a 3-sentence summary — no more, no less.\n\n--- PASSAGE ---\nThe platypus is one of the strangest animals in the world. It is a mammal that lays eggs. It has a bill like a duck, a tail like a beaver and feet like an otter. The male platypus has venomous spurs on its hind legs. Despite looking so unusual, the platypus is perfectly adapted to its life in rivers and streams.",
        parentTip: "A good summary includes the main idea and the two or three most important details. Help your child choose what to include and what to leave out.",
        prompts: [
          { text: "My 3-sentence summary:", type: "lines", lines: 5 },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Ask a Question About the Text",
        instruction: "Read the platypus passage above. Write two questions about the platypus that the passage does NOT answer. These are questions a curious reader might want to know.",
        parentTip: "Questioning a text is a sign of active reading. Celebrate any genuine curiosity — these questions could spark further research.",
        prompts: [
          { text: "Question 1:", type: "lines", lines: 2 },
          { text: "Question 2:", type: "lines", lines: 2 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Be a Text Scientist",
        content: "Choose any non-fiction book, magazine or webpage about an animal or place you are curious about. Read 2–3 pages or one article. Write down: the main idea, 3 supporting details, and 2 questions the text made you want to investigate further. Share your findings with someone at home.",
      },
      // ── DEVELOPING (21–50) ────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Read and Respond: The Great Barrier Reef",
        instruction: "Read the passage, then answer the questions.\n\n--- PASSAGE ---\nThe Great Barrier Reef is the world's largest coral reef system. It stretches more than 2,300 km along the Queensland coast. The reef is made up of over 2,900 individual reefs and 900 islands. It is home to thousands of species of fish, turtles, sharks and dolphins. The reef faces serious threats from climate change, which causes coral bleaching. Without action, much of the reef could be lost within decades.",
        prompts: [
          { text: "Main idea (one sentence):", type: "lines", lines: 2 },
          { text: "Where is the Great Barrier Reef?", type: "lines", lines: 1 },
          { text: "Name three types of animal that live there.", type: "lines", lines: 2 },
          { text: "What is the main threat to the reef?", type: "lines", lines: 2 },
          { text: "What do you think would happen if the reef was lost? Use the text to support your answer.", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "true-false",
        title: "Comprehension Check: Great Barrier Reef",
        instruction: "Circle TRUE or FALSE for each statement.",
        statements: [
          { text: "The Great Barrier Reef is in Victoria.", answer: false },
          { text: "The reef stretches more than 2,300 km.", answer: true },
          { text: "Climate change causes coral bleaching.", answer: true },
          { text: "The reef is home to very few species.", answer: false },
          { text: "The reef is made up of over 2,900 individual reefs.", answer: true },
        ],
      },
      // 23
      {
        type: "sequence",
        title: "Order These Ideas From the Reef Passage",
        instruction: "Number these ideas in the order they appear in the passage (1–5).",
        items: [
          { label: "The reef faces threats from climate change." },
          { label: "The reef stretches more than 2,300 km." },
          { label: "It is home to thousands of species." },
          { label: "Much of the reef could be lost without action." },
          { label: "The reef is made up of 2,900 individual reefs." },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Infer Meaning: Reading Between the Lines",
        instruction: "Read this sentence: 'Without action, much of the reef could be lost within decades.' This is not stated directly, but what can you INFER (work out) from it?",
        parentTip: "Inference is reading between the lines — understanding what is suggested but not said. Discuss before writing.",
        prompts: [
          { text: "What does this suggest about the urgency of protecting the reef?", type: "lines", lines: 3 },
          { text: "What kinds of 'action' do you think the author might mean?", type: "lines", lines: 3 },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Write the Author's Purpose",
        instruction: "Read the reef passage again. Why do you think the author wrote this text? What did they want the reader to think, feel or do? Use evidence from the text.",
        prompts: [
          { text: "The author's purpose:", type: "lines", lines: 4 },
          { text: "Evidence from the text that shows this:", type: "lines", lines: 3 },
        ],
      },
      // 26
      {
        type: "multiple-choice",
        title: "What Does the Word Mean in Context?",
        instruction: "Use the context of the sentence to choose the best meaning for each underlined word.",
        questions: [
          { prompt: "The reef faces serious threats from climate change.", options: ["gifts", "challenges/dangers", "visitors", "celebrations"] },
          { prompt: "Climate change causes coral bleaching.", options: ["growth", "colouring", "whitening/damage", "movement"] },
          { prompt: "The reef is home to thousands of species.", options: ["one type only", "countries", "different types of animals/plants", "buildings"] },
          { prompt: "Without action, much of the reef could be lost within decades.", options: ["days", "hours", "hundreds of years", "ten-year periods"] },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Make a Connection",
        instruction: "Good readers make connections between the text and their own lives. Answer these questions after reading the reef passage.",
        prompts: [
          { text: "Text-to-self: Have you ever seen the ocean or a reef? How does the passage connect to that experience?", type: "lines", lines: 3 },
          { text: "Text-to-world: What do you know about climate change from other sources? How does it connect to this text?", type: "lines", lines: 3 },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Read and Respond: Australian Bushfires",
        instruction: "Read the passage, then answer the questions.\n\n--- PASSAGE ---\nBushfires are a natural part of the Australian environment. Some plants, like the banksia, actually need fire to release their seeds. However, when fires are very large or frequent, they can be devastating for wildlife and communities. Many animals are injured or killed. Homes and forests can take years to recover. Climate change is making fire seasons longer and more intense.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "How can fire be helpful for some plants?", type: "lines", lines: 2 },
          { text: "Why are large or frequent fires a problem?", type: "lines", lines: 2 },
          { text: "How is climate change making things worse?", type: "lines", lines: 2 },
        ],
      },
      // 29
      {
        type: "sorting",
        title: "Sort: Positive or Negative Effects of Bushfires?",
        instruction: "Read each statement about bushfires. Sort into 'Positive effect' or 'Negative effect'.",
        columns: ["Positive effect", "Negative effect"],
        items: [
          { label: "Some plants release seeds after fire." },
          { label: "Many animals are injured or killed." },
          { label: "Forests can take years to recover." },
          { label: "New plant growth appears in burnt areas." },
          { label: "Homes can be destroyed." },
          { label: "Fire clears old vegetation to make room for new growth." },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Text Features That Help Comprehension",
        content: "Non-fiction texts often have special features that help readers understand the information: headings (tell you the topic of each section), bold words (important vocabulary), captions (explain pictures), sidebars (extra information), diagrams and maps. When you read a non-fiction text, look for these features BEFORE reading — they give you clues about what the text is about.",
      },
      // 31
      {
        type: "matching",
        title: "Match the Text Feature to Its Purpose",
        instruction: "Draw a line from each text feature to what it does.",
        left: ["Heading", "Bold word", "Caption", "Diagram", "Glossary"],
        right: [
          "Explains a picture",
          "Tells you the main topic of a section",
          "Shows how something is put together",
          "Lists definitions of key words",
          "Highlights an important vocabulary word",
        ],
      },
      // 32
      {
        type: "open-response",
        title: "Plan a Non-Fiction Text: Use Text Features",
        instruction: "You are going to write a short non-fiction text about an Australian animal. Plan it below. Include: a heading, at least 3 sections with subheadings, one bold vocabulary word with a definition, and space for a diagram.",
        parentTip: "Planning before writing is a key skill — this task builds structural understanding of non-fiction texts.",
        prompts: [
          { text: "My heading:", type: "lines", lines: 1 },
          { text: "Section 1 subheading: ___\nNotes:", type: "lines", lines: 3 },
          { text: "Section 2 subheading: ___\nNotes:", type: "lines", lines: 3 },
          { text: "Section 3 subheading: ___\nNotes:", type: "lines", lines: 3 },
          { text: "Bold vocabulary word: ___  Definition: ___", type: "lines", lines: 1 },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Read and Respond: Water Conservation",
        instruction: "Read the passage, then answer the questions.\n\n--- PASSAGE ---\nWater is one of Earth's most precious resources. All living things need water to survive. In many parts of Australia, water is scarce, especially during droughts. Saving water is important for both people and the environment. Simple actions like turning off taps, using shorter showers and collecting rainwater all make a difference.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "Why is water conservation particularly important in Australia?", type: "lines", lines: 2 },
          { text: "Name three ways to save water mentioned in the passage.", type: "lines", lines: 2 },
          { text: "What might happen if people don't conserve water?", type: "lines", lines: 2 },
        ],
      },
      // 34
      {
        type: "true-false",
        title: "Comprehension Check: Water Conservation",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "Australia never has water shortages.", answer: false },
          { text: "All living things need water to survive.", answer: true },
          { text: "Collecting rainwater is one way to conserve water.", answer: true },
          { text: "Water is unlimited and does not need to be saved.", answer: false },
          { text: "Short showers help conserve water.", answer: true },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Evaluate: Does the Text Give Enough Information?",
        instruction: "After reading the water conservation passage, decide: Does the author give enough information to fully understand the topic? What information is missing? What questions do you still have?",
        prompts: [
          { text: "Information that was given:", type: "lines", lines: 3 },
          { text: "Information that was missing:", type: "lines", lines: 3 },
          { text: "Two questions I still have:", type: "lines", lines: 2 },
        ],
      },
      // 36
      {
        type: "sorting",
        title: "Sort the Sentences: Main Idea or Detail?",
        instruction: "Read the sentences. Sort them into main idea (the big point) or supporting detail (a specific fact).",
        columns: ["Main idea", "Supporting detail"],
        items: [
          { label: "Water conservation is important in Australia." },
          { label: "Collecting rainwater reduces household water use." },
          { label: "Australia often experiences droughts." },
          { label: "Turning off taps saves water." },
          { label: "All living things need water to survive." },
          { label: "Short showers use less water than long ones." },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Summarise the Water Conservation Passage in 2 Sentences",
        instruction: "Write a 2-sentence summary of the water conservation passage. Include the main idea and one key supporting detail.",
        prompts: [
          { text: "My 2-sentence summary:", type: "lines", lines: 3 },
        ],
      },
      // 38
      {
        type: "multiple-choice",
        title: "Comprehension: Choose the Best Answer",
        instruction: "Choose the best answer to each question based on what you have read.",
        questions: [
          { prompt: "What is the best definition of 'drought'?", options: ["A flood of water", "A long period of unusually low rainfall", "A type of Australian animal", "A water conservation method"] },
          { prompt: "Which of these is NOT a good way to conserve water?", options: ["Shorter showers", "Collecting rainwater", "Leaving taps running", "Fixing leaking pipes"] },
          { prompt: "Why is water called 'precious' in the passage?", options: ["It is expensive", "It is rare and valuable to life", "It tastes delicious", "It comes from space"] },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Personal Response: What Can I Do?",
        instruction: "After reading the water conservation passage, write a personal response. What will you do differently after reading this text? Connect your response to at least two facts from the passage.",
        parentTip: "Personal response tasks build reading engagement and show that texts can influence actions.",
        prompts: [
          { text: "My personal response:", type: "lines", lines: 6 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Read and Report",
        content: "Choose an Australian environmental issue you care about (bushfires, water conservation, the reef, plastic pollution). Find one article or book page about it. Read it carefully, then create a 'News Report': write a heading, a one-sentence main idea, three key facts, and your personal opinion. Present it to someone at home as if you are a news reporter.",
      },
      // 41
      {
        type: "open-response",
        title: "Read and Respond: Recycling",
        instruction: "Read the passage, then answer the questions.\n\n--- PASSAGE ---\nRecycling is the process of turning old materials into new ones. Paper, plastic, glass and metal can all be recycled. Recycling reduces the amount of waste sent to landfill and saves natural resources. For example, recycling one tonne of paper saves 13 trees. However, not everything can be recycled, and it is also important to reduce the amount of waste we create in the first place.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "Name four materials that can be recycled.", type: "lines", lines: 1 },
          { text: "How many trees does recycling one tonne of paper save?", type: "lines", lines: 1 },
          { text: "Why is reducing waste also important, not just recycling?", type: "lines", lines: 2 },
          { text: "Write one question you still have about recycling after reading this text.", type: "lines", lines: 2 },
        ],
      },
      // 42
      {
        type: "sorting",
        title: "Sort: Stated in the Text or Inferred?",
        instruction: "Read each statement. Sort into 'Stated in the text' or 'You have to infer it'.",
        parentTip: "Helping your child distinguish between stated information and inference is a key comprehension skill.",
        columns: ["Stated in the text", "You need to infer it"],
        items: [
          { label: "Recycling one tonne of paper saves 13 trees." },
          { label: "If everyone recycled more, landfills would be smaller." },
          { label: "Paper, plastic, glass and metal can be recycled." },
          { label: "People who recycle care about the environment." },
          { label: "Not everything can be recycled." },
          { label: "We should try to buy less plastic packaging." },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Make an Inference",
        instruction: "Answer each question by inferring meaning from the recycling passage — go beyond what is directly stated.",
        prompts: [
          { text: "The passage says 'not everything can be recycled.' What examples of things that CAN'T be recycled can you think of?", type: "lines", lines: 2 },
          { text: "The passage says it is 'also important to reduce waste.' What does this suggest about recycling alone being enough?", type: "lines", lines: 3 },
        ],
      },
      // 44
      {
        type: "multiple-choice",
        title: "Vocabulary in Context: Recycling Passage",
        instruction: "Choose the best meaning for each underlined word based on the context.",
        questions: [
          { prompt: "Recycling reduces the amount of waste sent to landfill.", options: ["increases", "decreases/lessens", "identifies", "ignores"] },
          { prompt: "Recycling saves natural resources.", options: ["wastes", "creates", "preserves/protects", "destroys"] },
          { prompt: "It is important to reduce waste we create in the first place.", options: ["use more of", "lessen/produce less", "enjoy", "measure"] },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Inference — Reading Between the Lines",
        content: "Good readers don't just take in what is written — they also think about what is SUGGESTED but not said. This is called inference. For example: if a text says 'She had been walking for three hours in the sun,' a reader can infer that she was probably very tired and thirsty — even though it does not say so directly. Ask yourself: 'What does this make me think, even though it is not written?'",
      },
      // 46
      {
        type: "open-response",
        title: "Practise Inference",
        instruction: "Read each short passage. Write what you can INFER (not just what is stated).",
        prompts: [
          { text: "Passage: 'As Maya opened the envelope, her hands shook. She read the first line and burst into tears.'\nWhat can you infer about what was in the letter?", type: "lines", lines: 3 },
          { text: "Passage: 'The streets were empty. Shops had their shutters down. A lone dog padded past, sniffing at scattered rubbish.'\nWhat can you infer about the time and situation?", type: "lines", lines: 3 },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Read and Respond: Dolphins",
        instruction: "Read the passage, then answer all the questions.\n\n--- PASSAGE ---\nDolphins are intelligent marine mammals. They live in groups called pods and communicate using clicks, whistles and squeaks. Dolphins are known for their playful behaviour — they surf in the bow waves of ships and leap out of the water. Scientists believe dolphins have problem-solving abilities similar to those of humans. Some species of dolphin are threatened by fishing nets, pollution and habitat loss.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "What is the name for a group of dolphins?", type: "lines", lines: 1 },
          { text: "How do dolphins communicate?", type: "lines", lines: 2 },
          { text: "What threatens some dolphin species?", type: "lines", lines: 2 },
          { text: "What can you infer from the fact that dolphins have 'problem-solving abilities similar to humans'?", type: "lines", lines: 3 },
        ],
      },
      // 48
      {
        type: "true-false",
        title: "Comprehension Check: Dolphins",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "Dolphins are a type of fish.", answer: false },
          { text: "Dolphins live in groups called pods.", answer: true },
          { text: "Dolphins communicate using words like humans.", answer: false },
          { text: "Some dolphins are threatened by fishing nets.", answer: true },
          { text: "Dolphins have been compared to humans in terms of intelligence.", answer: true },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Compare Two Animals: Dolphins and Wombats",
        instruction: "Use what you have learned from the passages in this worksheet. Write 3 sentences comparing dolphins and wombats. Use a conjunction (and, but, although) in each sentence.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
        ],
      },
      // 50
      {
        type: "home-activity",
        title: "Non-Fiction Reading at Home",
        instruction: "Choose any non-fiction book, magazine, or article from home or the library. Read it carefully.",
        parentTip: "Non-fiction reading builds vocabulary, knowledge, and comprehension in ways fiction alone cannot. Even 10–15 minutes of non-fiction reading per day makes a measurable difference.",
        suggestions: [
          "Identify the main idea and write it in one sentence",
          "List 3 supporting details from the text",
          "Write 2 questions the text made you curious about",
          "Look up 2 new vocabulary words from the text and write their definitions",
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────
      // 51
      {
        type: "open-response",
        title: "Read and Respond: Climate Change",
        instruction: "Read the passage, then answer all questions with evidence.\n\n--- PASSAGE ---\nClimate change refers to long-term shifts in temperatures and weather patterns. While some change is natural, scientists agree that human activities — especially burning fossil fuels — have sped up the process. Rising temperatures are causing ice caps to melt, sea levels to rise, and extreme weather events to become more frequent. Countries around the world are working on solutions, including using renewable energy sources like solar and wind power.",
        parentTip: "Encourage your child to underline evidence in the passage before writing each answer.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "What is the main human cause of climate change?", type: "lines", lines: 2 },
          { text: "List three effects of climate change mentioned in the passage.", type: "lines", lines: 3 },
          { text: "What solutions are mentioned?", type: "lines", lines: 2 },
          { text: "What can you infer about why solving climate change is complex?", type: "lines", lines: 3 },
        ],
      },
      // 52
      {
        type: "multiple-choice",
        title: "Comprehension: Climate Change Passage",
        instruction: "Choose the best answer for each question.",
        questions: [
          { prompt: "According to the passage, what are fossil fuels?", options: ["Types of animals", "Renewable energy", "Energy sources that contribute to climate change", "Natural weather patterns"] },
          { prompt: "What does 'renewable' mean in the context of energy?", options: ["Old-fashioned", "Can be used again, will not run out", "Expensive", "Very powerful"] },
          { prompt: "Why are 'extreme weather events' a concern?", options: ["They are interesting", "They are becoming more frequent due to climate change", "They only happen in cities", "They are easy to predict"] },
          { prompt: "What can you infer from 'countries around the world are working on solutions'?", options: ["One country can solve it alone", "Climate change is a global problem requiring global cooperation", "Solutions are easy to find", "Only rich countries care"] },
        ],
      },
      // 53
      {
        type: "open-response",
        title: "Evaluate the Author's Perspective",
        instruction: "Re-read the climate change passage. Is the author objective (presents facts only) or does the text have a perspective or opinion? Use evidence from the text to support your answer.",
        prompts: [
          { text: "Is the text objective or does it have a perspective?", type: "lines", lines: 1 },
          { text: "Evidence from the text:", type: "lines", lines: 4 },
          { text: "Do you agree or disagree with the author's perspective? Why?", type: "lines", lines: 3 },
        ],
      },
      // 54
      {
        type: "sorting",
        title: "Sort: Fact or Opinion?",
        instruction: "Read each statement. Sort into FACT (can be proven) or OPINION (a belief or judgement).",
        parentTip: "Understanding the difference between fact and opinion is a critical reading skill for all text types.",
        columns: ["Fact", "Opinion"],
        items: [
          { label: "The Great Barrier Reef stretches 2,300 km." },
          { label: "Climate change is the most serious issue facing humanity." },
          { label: "Recycling one tonne of paper saves 13 trees." },
          { label: "Everyone should be required to recycle." },
          { label: "Dolphins communicate using clicks and whistles." },
          { label: "Dolphins are the most intelligent animals after humans." },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Read a Persuasive Text and Identify the Argument",
        instruction: "Read the passage, then answer the questions.\n\n--- PASSAGE ---\nAll schools should have a garden. Growing vegetables and plants teaches children where food comes from. It encourages healthy eating and an appreciation of nature. Research shows that children who garden show better concentration and reduced stress. Gardens also support biodiversity by attracting bees, butterflies and other insects. The benefits are too important to ignore.",
        prompts: [
          { text: "What is the author's main argument?", type: "lines", lines: 2 },
          { text: "List three reasons the author gives to support this argument.", type: "lines", lines: 3 },
          { text: "Is this text informative or persuasive? How do you know?", type: "lines", lines: 3 },
          { text: "Do you agree or disagree? Write 2 sentences explaining your view.", type: "lines", lines: 3 },
        ],
      },
      // 56
      {
        type: "true-false",
        title: "Fact or Opinion? (School Garden Passage)",
        instruction: "Circle TRUE if the statement is a FACT, FALSE if it is an OPINION.",
        statements: [
          { text: "Research shows that children who garden show better concentration.", answer: true },
          { text: "All schools should have a garden (this is a fact).", answer: false },
          { text: "Gardens attract bees and butterflies.", answer: true },
          { text: "The benefits of school gardens are too important to ignore (this is an opinion).", answer: true },
          { text: "Growing vegetables teaches children about food sources.", answer: true },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "Identify the Author's Purpose for Different Texts",
        instruction: "For each text type, identify whether the author's purpose is to inform, persuade, entertain, or explain.",
        prompts: [
          { text: "A factual article about wombats: Purpose — ___. Evidence: ___", type: "lines", lines: 2 },
          { text: "A letter urging the government to protect the reef: Purpose — ___. Evidence: ___", type: "lines", lines: 2 },
          { text: "A story about a child's adventure in the bush: Purpose — ___. Evidence: ___", type: "lines", lines: 2 },
          { text: "A science explanation of the water cycle: Purpose — ___. Evidence: ___", type: "lines", lines: 2 },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Read a Longer Passage and Write a Comprehensive Summary",
        instruction: "Read this passage, then write a 5-sentence summary that includes: main idea, 3 key details, and a conclusion sentence.\n\n--- PASSAGE ---\nAustralia is home to some of the world's most unique wildlife. Because the continent separated from other landmasses millions of years ago, animals here evolved in isolation. This is why creatures like the platypus, echidna, koala and kangaroo exist nowhere else on Earth. Australia has an enormous responsibility to protect these species. Habitat destruction, introduced animals and climate change all pose serious threats. Conservation programs are underway, but more support is needed from government and the public.",
        parentTip: "A 5-sentence summary shows whether your child can synthesise information — not just retell it.",
        prompts: [
          { text: "My 5-sentence summary:", type: "lines", lines: 8 },
        ],
      },
      // 59
      {
        type: "multiple-choice",
        title: "Comprehension: Australian Wildlife Passage",
        instruction: "Choose the best answer based on the passage.",
        questions: [
          { prompt: "Why does Australia have such unique wildlife?", options: ["It has the best zoos", "The continent separated from other landmasses millions of years ago", "Australian animals are specially bred", "The climate is very different from other countries"] },
          { prompt: "Which animal is NOT mentioned in the passage?", options: ["Platypus", "Kangaroo", "Koala", "Wombat"] },
          { prompt: "What does 'evolved in isolation' mean?", options: ["Animals that were brought to Australia", "Animals that developed separately without mixing with others", "Animals that live alone", "Animals that are endangered"] },
          { prompt: "What is the main threat mentioned in the passage?", options: ["Tourists visiting", "Habitat destruction, introduced animals, and climate change", "Too many conservation programs", "Not enough zoos"] },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip",
        title: "Tip: Reading Different Types of Non-Fiction",
        content: "Non-fiction texts come in many types, and each has a different structure and purpose: Reports describe facts about a subject. Explanations explain how or why something works. Arguments or expositions try to convince you of something. Procedures or instructions tell you how to do something. Recounts describe events in order. When you read, identify the type first — it helps you know what to expect and where to find the main idea.",
      },
      // 61 — SPARK at ~60
      {
        type: "spark",
        title: "Spark: The Three-Text Challenge",
        content: "Find three very short texts on the same topic (e.g. climate change, recycling, Australian animals) — one informative, one persuasive, one explanatory. Compare them: Which text type has the clearest main idea? Which is most convincing? Which uses the most facts? Write a short comparison paragraph and share your conclusions with someone at home.",
      },
      // 62
      {
        type: "open-response",
        title: "Analyse Author's Language Choices",
        instruction: "Re-read the school garden passage. Find: (a) one word that shows the author feels strongly, (b) one technique used to persuade (e.g. using statistics, asking rhetorical questions), (c) any emotive language. Explain how each choice affects the reader.",
        prompts: [
          { text: "(a) Strong word: ___\nEffect on reader: ___", type: "lines", lines: 2 },
          { text: "(b) Persuasive technique: ___\nEffect on reader: ___", type: "lines", lines: 2 },
          { text: "(c) Emotive language: ___\nEffect on reader: ___", type: "lines", lines: 2 },
        ],
      },
      // 63
      {
        type: "sorting",
        title: "Sort the Reading Strategy",
        instruction: "Sort these reading strategies into 'Before reading', 'During reading', and 'After reading'.",
        parentTip: "Having a reading strategy toolkit helps comprehension enormously. Review these strategies together.",
        columns: ["Before reading", "During reading", "After reading"],
        items: [
          { label: "Preview headings and images" },
          { label: "Summarise the main idea" },
          { label: "Reread confusing sentences" },
          { label: "Ask: what do I already know about this topic?" },
          { label: "Underline key details" },
          { label: "Write 3 questions the text raised" },
          { label: "Read the title and first sentence" },
          { label: "Check word meanings using context" },
          { label: "Connect the text to something you already know" },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Apply Reading Strategies to a New Text",
        instruction: "Read this new passage using the before/during/after strategy.\n\n--- PASSAGE ---\nAustralia experiences some of the most extreme weather events in the world. Cyclones batter the tropical north. Heatwaves and droughts affect the interior. Flooding regularly impacts Queensland and New South Wales. These events are becoming more frequent and more severe as climate change intensifies. Emergency services and communities are working hard to prepare and respond to these challenges.",
        prompts: [
          { text: "Before: What did I already know about this topic?", type: "lines", lines: 2 },
          { text: "During: One sentence I needed to re-read — and why:", type: "lines", lines: 2 },
          { text: "After: Main idea:", type: "lines", lines: 2 },
          { text: "After: My 3 remaining questions:", type: "lines", lines: 3 },
        ],
      },
      // 65
      {
        type: "true-false",
        title: "Comprehension: Australian Weather Passage",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "Australia only experiences mild weather.", answer: false },
          { text: "Cyclones mainly affect the tropical north of Australia.", answer: true },
          { text: "Weather events are becoming less frequent due to climate change.", answer: false },
          { text: "Flooding regularly impacts Queensland and New South Wales.", answer: true },
          { text: "Emergency services are working to prepare for extreme weather.", answer: true },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Write Comprehension Questions for a Partner",
        instruction: "Read any passage from this worksheet again. Write 5 comprehension questions — 2 literal (answer is directly in the text), 2 inference (you have to work it out), and 1 opinion (your own view).",
        parentTip: "Writing questions shows a higher level of comprehension than just answering them — a great extension task.",
        prompts: [
          { text: "Literal question 1: ___", type: "lines", lines: 1 },
          { text: "Literal question 2: ___", type: "lines", lines: 1 },
          { text: "Inference question 1: ___", type: "lines", lines: 1 },
          { text: "Inference question 2: ___", type: "lines", lines: 1 },
          { text: "Opinion question: ___", type: "lines", lines: 1 },
        ],
      },
      // 67
      {
        type: "multiple-choice",
        title: "Comprehension Strategy: What Should You Do?",
        instruction: "Choose the best reading strategy for each situation.",
        questions: [
          { prompt: "You come across a word you don't know:", options: ["Skip it and keep reading", "Read the surrounding sentences to find a clue", "Close the book", "Write the word in random letters"] },
          { prompt: "You read a paragraph but didn't understand it:", options: ["Continue reading", "Re-read it slowly and look for the main idea", "Ask the author", "Ignore the confusing part"] },
          { prompt: "You want to find a specific detail in a long text:", options: ["Read every word again", "Scan for key words related to what you're looking for", "Skip to the last sentence", "Give up"] },
          { prompt: "You want to remember what you read:", options: ["Read it once very quickly", "Summarise the main ideas in your own words after reading", "Copy it word for word", "Read it backwards"] },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Compare Informative and Persuasive Text on the Same Topic",
        instruction: "Compare these two short texts on the same topic.\n\nText A (informative): 'Plastic takes hundreds of years to break down in landfill. Eight million tonnes of plastic enters the ocean each year.'\n\nText B (persuasive): 'We must ban single-use plastics immediately. The ocean cannot wait — every piece of plastic you use today could be poisoning a sea creature for centuries to come.'",
        prompts: [
          { text: "How are the two texts different in purpose?", type: "lines", lines: 2 },
          { text: "Which text uses more emotional language? Give an example.", type: "lines", lines: 2 },
          { text: "Which text do you find more convincing? Why?", type: "lines", lines: 3 },
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Write an Informative and a Persuasive Version",
        instruction: "Write two versions of the same content about 'school holidays'. Version A: purely informative (facts only). Version B: persuasive (argue for longer school holidays).",
        parentTip: "This side-by-side task reveals how purpose shapes language choices. Celebrate deliberate differences.",
        prompts: [
          { text: "Version A (informative):", type: "lines", lines: 4 },
          { text: "Version B (persuasive):", type: "lines", lines: 4 },
        ],
      },
      // 70
      {
        type: "home-activity",
        title: "Text Type Scavenger Hunt",
        instruction: "Look around your home for different types of text. Find one example of each type.",
        parentTip: "Texts are everywhere. Connecting school learning to real-world literacy is one of the most powerful teaching strategies available.",
        suggestions: [
          "Find an informative text (e.g. encyclopaedia, factual book, Wikipedia article)",
          "Find a persuasive text (e.g. advertisement, opinion letter, charity appeal)",
          "Find an explanatory text (e.g. recipe, instruction manual, science book)",
          "For each: identify the main idea, the author's purpose, and one technique used",
        ],
      },
      // 71
      {
        type: "open-response",
        title: "Extended Comprehension: Full Analysis",
        instruction: "Read this passage, then complete a full reading analysis.\n\n--- PASSAGE ---\nAustralia is one of the world's most biodiverse countries. It has more species of reptiles, marsupials and flowering plants than almost anywhere else on Earth. However, it also has one of the highest rates of animal extinction in the world. Habitat destruction, introduced predators like foxes and cats, and climate change are the main causes. Conservation efforts are increasing, but experts warn that without significant policy change, many more species will be lost forever.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "Three supporting details:", type: "lines", lines: 3 },
          { text: "One inference you can make:", type: "lines", lines: 2 },
          { text: "Author's purpose:", type: "lines", lines: 2 },
          { text: "One fact, one opinion in the text:", type: "lines", lines: 2 },
          { text: "My personal response:", type: "lines", lines: 3 },
        ],
      },
      // 72
      {
        type: "sorting",
        title: "Sort These Questions: Literal vs Inference vs Opinion",
        instruction: "Sort these questions about the biodiversity passage into the correct category.",
        columns: ["Literal (in the text)", "Inference (work it out)", "Opinion (your view)"],
        items: [
          { label: "What are the three main causes of extinction mentioned?" },
          { label: "Why might foxes and cats be harmful to native animals?" },
          { label: "What should Australia's government do about extinction?" },
          { label: "What does 'biodiverse' mean in context?" },
          { label: "Is Australia doing enough to protect its wildlife?" },
          { label: "Where can more species of reptiles be found than almost anywhere else?" },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Answer All Three Types of Question",
        instruction: "Answer one literal, one inference and one opinion question about the biodiversity passage.",
        prompts: [
          { text: "Literal: What are the main causes of extinction? (Use the text.)", type: "lines", lines: 2 },
          { text: "Inference: What might happen to introduced predators if conservation is successful?", type: "lines", lines: 3 },
          { text: "Opinion: Do you think Australia is doing enough? Why or why not?", type: "lines", lines: 3 },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Vocabulary in Context: Biodiversity Passage",
        instruction: "Use the context of the passage to work out the meaning of each word. Write a definition in your own words.",
        prompts: [
          { text: "biodiverse: ___", type: "lines", lines: 2 },
          { text: "extinction: ___", type: "lines", lines: 2 },
          { text: "conservation: ___", type: "lines", lines: 2 },
          { text: "significant policy change: ___", type: "lines", lines: 2 },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Reading Strategies Toolkit",
        content: "Great readers have a toolkit of strategies: (1) Visualise — picture what is described. (2) Predict — guess what comes next. (3) Question — ask yourself 'why?' and 'what if?' (4) Connect — link to your own experience or other texts. (5) Summarise — retell in your own words. (6) Infer — read between the lines. (7) Monitor — notice when you are confused and re-read. Use these strategies whenever you read, not just in comprehension activities.",
      },
      // 76
      {
        type: "open-response",
        title: "Apply All 7 Strategies to a Passage",
        instruction: "Read the biodiversity passage once more. Apply at least 4 of the 7 reading strategies and write your thoughts for each one.",
        prompts: [
          { text: "Strategy 1 — Visualise: What did I picture?", type: "lines", lines: 2 },
          { text: "Strategy 2 — Predict: What did I predict before I read?", type: "lines", lines: 2 },
          { text: "Strategy 3 — Infer: What can I infer from the text?", type: "lines", lines: 2 },
          { text: "Strategy 4 — Connect: What did this remind me of?", type: "lines", lines: 2 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Write a Comprehension Report",
        instruction: "Write a 'Comprehension Report' (6–8 sentences) about one of the passages in this worksheet. Include: the main idea, three key details, one inference, one new word you learned, and your personal reaction.",
        prompts: [
          { text: "My comprehension report:", type: "lines", lines: 10 },
        ],
      },
      // 78
      {
        type: "multiple-choice",
        title: "Which Reading Strategy Was Used Here?",
        instruction: "Read what each student did. Choose which reading strategy they used.",
        questions: [
          { prompt: "Tom read a sentence about a storm and imagined what it looked, sounded and felt like.", options: ["Summarising", "Visualising", "Predicting", "Inferring"] },
          { prompt: "Amy re-read a paragraph three times because she didn't understand it the first time.", options: ["Predicting", "Connecting", "Monitoring", "Questioning"] },
          { prompt: "Jake thought about what he already knew about sharks before reading a shark article.", options: ["Connecting", "Summarising", "Inferring", "Questioning"] },
          { prompt: "Lucy figured out that the character was sad even though the text didn't say 'sad' directly.", options: ["Predicting", "Inferring", "Monitoring", "Visualising"] },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Research and Report: Choose Your Own Topic",
        instruction: "Choose any topic that interests you. Find two sources of information about it (a book, website, or magazine). Read them carefully and write a 6–8 sentence report using: a main idea sentence, 4 supporting details from your sources, one inference, and one personal response.",
        parentTip: "This independent research task shows whether your child can apply comprehension strategies independently — a major milestone.",
        prompts: [
          { text: "My topic: ___", type: "lines", lines: 1 },
          { text: "My sources: ___", type: "lines", lines: 1 },
          { text: "My report:", type: "lines", lines: 10 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Create a Comprehension Activity",
        content: "Design a comprehension activity for someone else to complete. Write a short passage (8–10 sentences) about a topic you know well. Then write 6 comprehension questions about it: 2 literal, 2 inference, and 2 opinion. Write the answer key separately. Share your activity with a family member and see how they go!",
      },
      // ── EXTENDING (81–100) ────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Critical Reading: Evaluate a Text's Reliability",
        instruction: "Answer these questions after reading any text of your choice.",
        prompts: [
          { text: "What type of text is it (report, argument, explanation, etc.)?", type: "lines", lines: 1 },
          { text: "Who wrote it? Is the author reliable and knowledgeable?", type: "lines", lines: 2 },
          { text: "Does it use facts, statistics, or evidence to support its claims?", type: "lines", lines: 2 },
          { text: "Is there any bias or emotional language? How does this affect reliability?", type: "lines", lines: 3 },
          { text: "Overall, how reliable is this text? Explain.", type: "lines", lines: 3 },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Extended Reading Analysis: A Complex Passage",
        instruction: "Read the following passage carefully. Complete the full analysis below.\n\n--- PASSAGE ---\nFor centuries, Aboriginal and Torres Strait Islander Australians practised sophisticated land management using fire. Known as 'cultural burning' or 'cool burning', these practices maintained biodiversity and reduced the risk of catastrophic wildfires. European settlement largely interrupted these traditions. Recently, there has been a growing recognition that partnering with Indigenous land managers could help address the increasing severity of Australia's bushfire problem. Several state governments have begun incorporating cultural burning practices into their fire management strategies.",
        prompts: [
          { text: "Main idea:", type: "lines", lines: 2 },
          { text: "Three supporting details with evidence from the text:", type: "lines", lines: 4 },
          { text: "One significant inference from the passage:", type: "lines", lines: 3 },
          { text: "Author's purpose and perspective:", type: "lines", lines: 3 },
          { text: "Two words whose meanings you inferred from context (with definitions):", type: "lines", lines: 3 },
          { text: "Your personal response:", type: "lines", lines: 3 },
        ],
      },
      // 83
      {
        type: "true-false",
        title: "Cultural Burning Passage: Comprehension Check",
        instruction: "Circle TRUE or FALSE.",
        statements: [
          { text: "Aboriginal Australians used fire to manage land for many centuries.", answer: true },
          { text: "Cultural burning increases the risk of catastrophic wildfires.", answer: false },
          { text: "European settlement supported and continued Indigenous burning practices.", answer: false },
          { text: "Some state governments are now using cultural burning in their fire strategies.", answer: true },
          { text: "Cultural burning is sometimes called 'cool burning'.", answer: true },
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "Vocabulary: Cultural Burning Passage",
        instruction: "Choose the best contextual meaning for each word from the passage.",
        questions: [
          { prompt: "The text says Australians practised 'sophisticated' land management. What does 'sophisticated' mean here?", options: ["Simple and basic", "Fashionable", "Advanced and well-developed", "Ancient and outdated"] },
          { prompt: "What does 'biodiversity' refer to?", options: ["A type of fire", "The variety of living species in an area", "A government policy", "A scientific measurement"] },
          { prompt: "What does 'catastrophic' mean in context?", options: ["Small and manageable", "Incredibly destructive", "Unexpected", "Seasonal"] },
          { prompt: "What does 'incorporating' mean?", options: ["Ignoring", "Criticising", "Including and integrating", "Replacing completely"] },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Write a Structured Response to a Complex Text",
        instruction: "After reading the cultural burning passage, write a structured response (8–10 sentences) that: states the main idea, discusses the author's perspective, makes two inferences, evaluates the reliability of the text, and gives your personal opinion with a reason.",
        parentTip: "This is the most demanding comprehension writing task. Allow time, and celebrate any genuine analytical thinking.",
        prompts: [
          { text: "My structured response:", type: "lines", lines: 12 },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Compare Two Texts on the Same Topic",
        instruction: "Read the cultural burning passage (activity 82) and the bushfires passage (activity 28). Compare them: What does each text focus on? How are they similar? How are they different? Which gives a more complete picture of the topic?",
        prompts: [
          { text: "Text 1 (Bushfires) focuses on:", type: "lines", lines: 2 },
          { text: "Text 2 (Cultural Burning) focuses on:", type: "lines", lines: 2 },
          { text: "Similarities:", type: "lines", lines: 2 },
          { text: "Differences:", type: "lines", lines: 2 },
          { text: "Which gives a more complete picture? Why?", type: "lines", lines: 3 },
        ],
      },
      // 87
      {
        type: "sorting",
        title: "Sort: Reading Strategy Application",
        instruction: "Read each example of a reader's thinking. Sort by which strategy they are using.",
        columns: ["Inferring", "Evaluating reliability", "Making connections", "Identifying author's purpose"],
        items: [
          { label: "The author uses words like 'must' and 'urgent' — this suggests they are trying to persuade me." },
          { label: "This article was written by a scientist, so it is likely reliable." },
          { label: "The character didn't say they were scared, but I can tell from how they were breathing." },
          { label: "This reminds me of something I read about water conservation — both are about protecting resources." },
          { label: "The writer says 'every effort must be made' — they want me to feel urgency." },
          { label: "I wonder if this was written by someone with a particular political view?" },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Research: Find Two Different Perspectives on the Same Issue",
        instruction: "Choose a topic (e.g. school uniforms, homework, screen time). Find two sources with different perspectives. Write a paragraph summarising each perspective, then write your own opinion.",
        parentTip: "This task builds the critical thinking and research skills that underpin all future academic writing.",
        prompts: [
          { text: "My topic: ___", type: "lines", lines: 1 },
          { text: "Perspective 1 (source: ___): ___", type: "lines", lines: 3 },
          { text: "Perspective 2 (source: ___): ___", type: "lines", lines: 3 },
          { text: "My opinion (with reasons): ___", type: "lines", lines: 4 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Write a Critical Reading Reflection",
        instruction: "Answer these questions in full sentences to reflect on your growth as a reader.",
        prompts: [
          { text: "What reading strategy have I improved most in this worksheet?", type: "lines", lines: 3 },
          { text: "What was the most interesting thing I read about in this worksheet?", type: "lines", lines: 3 },
          { text: "How has this worksheet changed the way I think about reading non-fiction?", type: "lines", lines: 3 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Building Your Reading Diet",
        content: "Just as a healthy food diet includes a variety of foods, a healthy reading diet includes a variety of text types. Aim to read: non-fiction (animals, history, science, geography), fiction (stories, novels, poetry), everyday texts (news, instructions, labels) and digital texts (websites, blogs). Each type builds different skills. The more types you read, the stronger your comprehension becomes across all of them.",
      },
      // 91
      {
        type: "open-response",
        title: "Analyse Your Own Reading Diet",
        instruction: "Think about what you have read over the past month. Answer these reflection questions.",
        prompts: [
          { text: "What types of text do you read most often?", type: "lines", lines: 2 },
          { text: "What types do you read least often?", type: "lines", lines: 2 },
          { text: "Which text type do you find most challenging? Why?", type: "lines", lines: 3 },
          { text: "What would you like to read more of? Why?", type: "lines", lines: 3 },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Write a Comprehensive Text Analysis",
        instruction: "Choose any text from a book, magazine, or website. Write a full analysis (10–12 sentences) covering: text type, main idea, supporting details, author's purpose, language features, reliability, inferences, and your personal response.",
        prompts: [
          { text: "Text chosen (title and source): ___", type: "lines", lines: 1 },
          { text: "My full analysis:", type: "lines", lines: 14 },
        ],
      },
      // 93
      {
        type: "multiple-choice",
        title: "Advanced Comprehension: What Can You Infer?",
        instruction: "Read each short extract. Choose the most reasonable inference.",
        questions: [
          { prompt: "Extract: 'The committee met in an emergency session. No one spoke as the chairperson read out the report.' What can you infer?", options: ["The meeting was fun", "The news in the report was serious or concerning", "The chairperson was new", "The meeting was about a celebration"] },
          { prompt: "Extract: 'By the third hour of waiting, she had read the same page four times.' What can you infer?", options: ["She was a slow reader", "She was distracted or anxious", "She liked rereading books", "She was comfortable and relaxed"] },
          { prompt: "Extract: 'The soil here hasn't been touched in decades. Every footstep released the smell of old earth.' What can you infer?", options: ["The place was a busy city", "The place was isolated and rarely visited", "The soil was very dry", "It was a new garden"] },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Create a Reading Guide for a Younger Reader",
        instruction: "Write a 'Reading Guide' that could help a Year 1 student read a non-fiction text. Include: what to do before reading, 3 tips for during reading, and 2 activities for after reading. Use clear and simple language.",
        prompts: [
          { text: "My reading guide:", type: "lines", lines: 12 },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Read and Respond to a Poem",
        instruction: "Read this short poem, then answer the questions.\n\n--- POEM ---\n'The creek runs clear / where no one walks. / The echidna stops / mid-step, and talks / to no one — just the air, / just the smell of rain. / She tucks her nose back down. / The world begins again.'\n\n(Note: This is an original poem created for this activity.)",
        prompts: [
          { text: "What is the poem describing?", type: "lines", lines: 2 },
          { text: "What mood or feeling does it create?", type: "lines", lines: 2 },
          { text: "Pick one image or phrase you found interesting and explain why:", type: "lines", lines: 3 },
          { text: "How is reading a poem different from reading a non-fiction passage?", type: "lines", lines: 3 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Connect Reading to Writing",
        instruction: "Think about all the non-fiction texts you have read in this worksheet. Write a paragraph explaining what techniques you noticed that good non-fiction writers use. How could you apply these techniques in your own writing?",
        prompts: [
          { text: "Techniques I noticed:", type: "lines", lines: 4 },
          { text: "How I will use them in my own writing:", type: "lines", lines: 4 },
        ],
      },
      // 97
      {
        type: "true-false",
        title: "Advanced Comprehension Statements",
        instruction: "Circle TRUE or FALSE for each advanced statement.",
        statements: [
          { text: "Inference requires you to go beyond what is directly stated in a text.", answer: true },
          { text: "The main idea is always stated in the first sentence of a text.", answer: false },
          { text: "Evaluating the reliability of a text is an important reading skill.", answer: true },
          { text: "Personal response questions have only one correct answer.", answer: false },
          { text: "Reading a variety of text types helps build stronger comprehension skills.", answer: true },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Design a Reading Programme",
        instruction: "Design a one-week reading programme for yourself. Choose a different text type for each day. For each day, write: what you will read, your reading goal, and one comprehension strategy you will practise.",
        prompts: [
          { text: "Monday: ___", type: "lines", lines: 2 },
          { text: "Tuesday: ___", type: "lines", lines: 2 },
          { text: "Wednesday: ___", type: "lines", lines: 2 },
          { text: "Thursday: ___", type: "lines", lines: 2 },
          { text: "Friday: ___", type: "lines", lines: 2 },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflective Writing: My Comprehension Journey",
        instruction: "Write a reflective paragraph about what you have learned in this worksheet. Include: what reading strategies you found most helpful, what types of texts you enjoyed most, the most interesting thing you read about, and how you will be a different kind of reader from now on.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 10 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark",
        title: "Spark: Start a Reading Journal",
        content: "Begin a reading journal. For every book or article you read from now on, write: the title and author, the text type, the main idea in one sentence, your favourite quote or moment, one question it raised for you, and your rating out of 5 with a reason. Keep your journal going for the entire year — by the end, you will have a record of everything you have read and thought. This is what real readers and writers do.",
      },
    ],
  },

  // ── WS 6: Story Writing ─────────────────────────────────────────
  {
    slug: "story-writing-beginning-middle-end",
    title: "Story Writing: Beginning, Middle and End",
    strand: "Literature",
    description:
      "Plan and write a short story with a clear beginning (who, where, when), middle (problem) and end (how it was solved).",
    learningGuide: {
      concept:
        "Every good story has three parts: a beginning that introduces the characters and setting, a middle where something happens (usually a problem), and an end where the problem is resolved and we see how everyone feels. Having this structure helps young writers organise their ideas before they start.",
      activation:
        "Ask your child to think of their favourite story. Together, identify: Who is it about? What goes wrong? How does it end? This shows that all stories follow this shape.",
      check:
        "Does the story have a clear beginning, middle and end? Is there a problem that gets solved? Can your child explain why they made their character choices?",
    },
    lesson: {
      title: "Story Builder",
      objective:
        "Plan and write a short narrative with a beginning, middle and end using a story planning template.",
      materials: [
        "Paper and pencil",
        "A blank piece of paper folded into thirds (for planning)",
        "Coloured pencils (optional — for illustrating)",
      ],
      intro: {
        title: "Every Story Has Three Parts",
        script:
          "Let's talk about your favourite story. I want you to tell me three things: Who is it about, and where do they live? — that is the beginning. Then, what goes wrong or what happens? — that is the middle. And finally, how does it all work out? — that is the end. Every single story ever told has these three parts. Today we are going to plan and write our own!",
        action:
          "Fold a blank sheet of paper into thirds. Label: BEGINNING / MIDDLE / END. Together brainstorm ideas for a character (can be animal, child, or fantastical creature), a setting, and a problem. Jot notes and/or quick sketches in each section.",
      },
      mainActivity: {
        title: "Plan Then Write",
        script:
          "Now we have our plan — let's turn it into a story! Remember: the beginning introduces your character and where they are. The middle is where the interesting thing happens — what goes wrong or what does your character want? And the end is how they fix it or what they learn. Try to write at least 2-3 sentences for each part.",
        action:
          "Child writes the story using the planning fold-out as a guide. Sit alongside and offer encouragement. If they get stuck, ask guiding questions: 'What could go wrong?' 'How does your character feel?' 'How could they solve it?' Do not rewrite their sentences — celebrate their voice.",
      },
      wrapUp: {
        title: "Read It Aloud",
        script:
          "Well done! Now I would love to hear your story. Read it to me using your best story voice — slow down for exciting bits, change your voice for different characters.",
        action:
          "Child reads their story aloud. Celebrate specifically: 'I loved how your beginning told me exactly where we were!' or 'The problem in the middle was really exciting!' Offer one gentle suggestion for next time if appropriate.",
      },
      parentTip:
        "Young writers often rush through the ending because they are tired. If you notice a very abrupt ending ('And then they went home. The end.'), ask: 'How did your character feel at the end? Can we add one more sentence about that?' Showing feelings in the ending makes stories satisfying to read.",
      extension:
        "After the story is written, help your child illustrate one scene from each part (beginning, middle, end). This deepens engagement with the narrative structure and creates a lovely keepsake. You could also ask: 'What might happen next if we wrote a Chapter 2?'",
      resources: [
        {
          title: "Story Writing for Year 2",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy Year 2 writing and reading activities.",
        },
        {
          title: "ABC Education — Stories",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education stories and literacy resources for primary students.",
        },
        {
          title: "Starfall — Writing Stories",
          url: "https://www.starfall.com/h/ltr-classic/",
          description: "Starfall creative writing and reading activities.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      // 1
      {
        type: "sequence",
        title: "Put the Story Parts in Order (Set A)",
        instruction: "These story events are mixed up. Number them 1–5 in the correct order.",
        parentTip: "Ask your child to identify which part (beginning, middle or end) each event belongs to before numbering.",
        items: [
          { label: "Mia found a tiny door hidden behind the bookshelf." },
          { label: "She pushed open the door and stepped into a magical garden." },
          { label: "One afternoon, Mia was looking for her lost cat." },
          { label: "Her cat was sitting there, perfectly happy, eating strawberries." },
          { label: "Mia laughed with relief and carried her cat back home." },
        ],
      },
      // 2
      {
        type: "sorting",
        title: "Sort the Story Events Into Parts",
        instruction: "Read each event. Sort it into the correct story part: Beginning, Middle or End.",
        parentTip: "Discuss together: does this event introduce the story, create a problem, or resolve it?",
        columns: ["Beginning", "Middle", "End"],
        items: [
          { label: "Tom found a mysterious map in an old chest." },
          { label: "He explored the enchanted forest for hours." },
          { label: "Tom lived in a small cottage near the sea." },
          { label: "Finally he found the hidden treasure." },
          { label: "Tom arrived home and shared the treasure with his family." },
          { label: "He got lost and couldn't find the path." },
        ],
      },
      // 3
      {
        type: "open-response",
        title: "Plan Your Story",
        instruction: "Fill in the story plan. Use short notes — you will turn these into sentences later.",
        prompts: [
          { text: "BEGINNING — Who is your character? Where are they? When?", type: "lines", lines: 3 },
          { text: "MIDDLE — What problem or challenge happens?", type: "lines", lines: 3 },
          { text: "END — How is the problem solved? How does your character feel?", type: "lines", lines: 3 },
        ],
      },
      // 4
      {
        type: "open-response",
        title: "Write Your Story",
        instruction: "Use your plan to write your story. Write at least 2–3 sentences for each part. Give it a title!",
        prompts: [
          { text: "Title:", type: "lines", lines: 1 },
          { text: "BEGINNING:", type: "lines", lines: 4 },
          { text: "MIDDLE:", type: "lines", lines: 4 },
          { text: "END:", type: "lines", lines: 4 },
        ],
      },
      // 5
      {
        type: "matching",
        title: "Match the Story Element to Its Purpose",
        instruction: "Draw a line from each story element to what it does in the story.",
        left: ["Beginning", "Problem", "Resolution", "Setting", "Character"],
        right: [
          "Who the story is about",
          "Introduces the character and where they are",
          "Where and when the story takes place",
          "The challenge the character must overcome",
          "How the problem is solved and the story ends",
        ],
      },
      // 6
      {
        type: "true-false",
        title: "Story Structure: True or False?",
        instruction: "Circle TRUE or FALSE for each statement.",
        statements: [
          { text: "Every story must have a beginning, middle and end.", answer: true },
          { text: "The middle of a story is where the problem is introduced.", answer: true },
          { text: "The end of a story can leave the problem unsolved.", answer: true },
          { text: "The setting tells us who the story is about.", answer: false },
          { text: "Good stories always end happily.", answer: false },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Write a Story Opener",
        instruction: "Write the first 2–3 sentences of a story. Your opener must introduce: (1) the main character, (2) where they are, and (3) something that makes the reader want to keep reading.",
        parentTip: "A great story opener hooks the reader immediately. Encourage your child to start with action, an interesting question, or vivid description — not 'Once upon a time' if they can help it!",
        prompts: [
          { text: "My story opener:", type: "lines", lines: 4 },
          { text: "What technique did I use to hook the reader?", type: "lines", lines: 1 },
        ],
      },
      // 8
      {
        type: "circle-correct",
        title: "Which Is the Best Story Opener?",
        instruction: "Circle the opener that is most likely to hook a reader. Then explain why.",
        questions: [
          { prompt: "Which is the best opener for a mystery story?", options: ["Once upon a time there was a girl.", "Lila's hands were shaking as she opened the door to the empty house.", "This is a story about a girl named Lila."] },
          { prompt: "Which is the best opener for an adventure story?", options: ["Jake is an adventurer.", "There was a boy who liked adventures.", "Jake ran. He could hear the footsteps getting closer."] },
        ],
      },
      // 9
      {
        type: "sequence",
        title: "Put the Story in Order (Set B)",
        instruction: "Number these sentences 1–6 to make a story that flows logically.",
        items: [
          { label: "She decided to go and investigate." },
          { label: "At last, she found the source — a tiny rabbit stuck under the fence." },
          { label: "She gently freed the rabbit and carried it to safety." },
          { label: "One sunny afternoon, Priya heard a strange sound from the garden." },
          { label: "She searched everywhere but could not find what was making the noise." },
          { label: "Priya smiled, watching the rabbit hop away happily into the bushes." },
        ],
      },
      // 10
      {
        type: "open-response",
        title: "Identify the Problem in These Story Summaries",
        instruction: "Read each story summary. Write the PROBLEM (what makes it interesting) and the RESOLUTION (how it is solved).",
        prompts: [
          { text: "Summary: 'A boy got lost in the bush but found his way home by following a creek back to the road.'\nProblem: ___\nResolution: ___", type: "lines", lines: 2 },
          { text: "Summary: 'A girl wanted to bake a birthday cake but had no eggs. She borrowed them from a neighbour and the party was saved.'\nProblem: ___\nResolution: ___", type: "lines", lines: 2 },
        ],
      },
      // 11
      {
        type: "multiple-choice",
        title: "Which Part of the Story Is This?",
        instruction: "Read each excerpt. Choose whether it is from the beginning, middle or end.",
        questions: [
          { prompt: "'And so, with the dragon defeated and the village safe, Maya finally returned home to a hero's welcome.'", options: ["Beginning", "Middle", "End"] },
          { prompt: "'Leo lived in a small apartment above a bakery. Every morning, the smell of fresh bread woke him up.'", options: ["Beginning", "Middle", "End"] },
          { prompt: "'Just as she reached the bridge, the troll appeared, blocking her path with an enormous hand.'", options: ["Beginning", "Middle", "End"] },
          { prompt: "'By the time Finn realised the map was wrong, they were completely surrounded by fog.'", options: ["Beginning", "Middle", "End"] },
        ],
      },
      // 12
      {
        type: "open-response",
        title: "Plan Three Different Stories Using the Same Structure",
        instruction: "Use this planning frame three times to quickly plan three different story ideas.",
        prompts: [
          { text: "Story 1 — Character: ___  Setting: ___  Problem: ___  Resolution: ___", type: "lines", lines: 2 },
          { text: "Story 2 — Character: ___  Setting: ___  Problem: ___  Resolution: ___", type: "lines", lines: 2 },
          { text: "Story 3 — Character: ___  Setting: ___  Problem: ___  Resolution: ___", type: "lines", lines: 2 },
          { text: "Which idea do I like best and why?", type: "lines", lines: 2 },
        ],
      },
      // 13
      {
        type: "open-response",
        title: "Write the Middle of a Story",
        instruction: "Here is the beginning and end of a story. Write the MIDDLE — what problem happens and how does the character begin to deal with it?\n\nBEGINNING: 'Zoe had been waiting all year for the school camping trip. When the day finally arrived, she jumped out of bed before the alarm even went off.'\n\nEND: 'Back at camp that evening, Zoe laughed about the day's adventure. It had not gone to plan — but it was the best story she had ever lived.'",
        prompts: [
          { text: "MIDDLE:", type: "lines", lines: 6 },
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Write the End of a Story",
        instruction: "Here is the beginning and middle. Write the END — resolve the problem and show how the character feels.\n\nBEGINNING: 'Oscar the dog loved to explore the park. One Thursday morning, he slipped through a gap in the fence and found himself on a very unfamiliar street.'\n\nMIDDLE: 'Oscar walked for what felt like hours. He tried to follow familiar smells but everything was strange. He stopped at a busy corner, unsure which way to go. A small girl noticed him and read the name on his collar: OSCAR.'",
        prompts: [
          { text: "END:", type: "lines", lines: 5 },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: Show, Don't Tell",
        content: "Good writers don't just tell us how a character feels — they SHOW us through actions, words and details. Instead of 'She was scared', try: 'Her heart hammered in her chest. She pressed herself against the wall and held her breath.' Instead of 'He was happy', try: 'He couldn't stop grinning. He kept reading the letter and each time he got to the last line, he laughed out loud.' Showing feelings creates much more vivid writing.",
      },
      // 16
      {
        type: "open-response",
        title: "Show, Don't Tell: Rewrite These Sentences",
        instruction: "Rewrite each 'telling' sentence as a 'showing' sentence — reveal the feeling through actions or details.",
        parentTip: "This is one of the most valuable writing techniques at any level. Model the first rewrite together if needed.",
        prompts: [
          { text: "Telling: She was nervous.\nShowing:", type: "lines", lines: 2 },
          { text: "Telling: He was excited.\nShowing:", type: "lines", lines: 2 },
          { text: "Telling: They were bored.\nShowing:", type: "lines", lines: 2 },
          { text: "Telling: The old house was spooky.\nShowing:", type: "lines", lines: 2 },
        ],
      },
      // 17
      {
        type: "open-response",
        title: "Develop Your Character",
        instruction: "Choose a character for your next story. Fill in the character profile.",
        prompts: [
          { text: "Name: ___  Age: ___  Appearance: ___", type: "lines", lines: 1 },
          { text: "What does your character want most in the world?", type: "lines", lines: 2 },
          { text: "What is your character afraid of?", type: "lines", lines: 1 },
          { text: "What is one surprising thing about your character?", type: "lines", lines: 1 },
          { text: "Write 2 sentences that SHOW (not tell) your character's personality:", type: "lines", lines: 3 },
        ],
      },
      // 18
      {
        type: "sorting",
        title: "Sort: Show or Tell?",
        instruction: "Read each sentence. Sort it into 'Shows the feeling' or 'Tells the feeling'.",
        columns: ["Shows the feeling", "Tells the feeling"],
        items: [
          { label: "She was sad." },
          { label: "Tears ran down her cheeks as she stared at the empty chair." },
          { label: "He clenched his fists and stared at the floor without blinking." },
          { label: "He was angry." },
          { label: "She couldn't stop laughing, even when she tried to." },
          { label: "She was happy." },
        ],
      },
      // 19
      {
        type: "home-activity",
        title: "Story Telling Together",
        instruction: "Tell stories together out loud — this builds narrative structure naturally before writing.",
        parentTip: "Oral storytelling is just as valuable as written storytelling at Year 2 level. Many great writers learned story structure by hearing and telling stories aloud long before they wrote them down.",
        suggestions: [
          "Take turns telling a made-up story — alternate adding one sentence each",
          "Retell a favourite book in just three sentences (beginning, middle, end)",
          "Act out your story with toys or stuffed animals",
          "Record your child telling their story on a phone or tablet to play back",
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Story in a Sentence",
        content: "Challenge: can you describe an entire story in ONE sentence? Try summarising 5 different stories (books you know or your own ideas) in one sentence each. A good story sentence has: a character, a problem, and a resolution. For example: 'A lonely rabbit who was afraid of strangers discovered she was braver than she thought when she had to rescue her best friend.' Then choose one and turn it into a full story plan!",
      },
      // ── DEVELOPING (21–50) ────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Describe the Setting in Detail",
        instruction: "Write a setting description (4–5 sentences) for a story. Use sensory details (what you see, hear, smell, feel). Your setting should create a strong mood.",
        parentTip: "Setting descriptions are much more powerful when they use all the senses — not just sight. Encourage your child to close their eyes and imagine being in the setting.",
        prompts: [
          { text: "My chosen setting: ___", type: "lines", lines: 1 },
          { text: "My setting description:", type: "lines", lines: 6 },
        ],
      },
      // 22
      {
        type: "sorting",
        title: "Sort Setting Details by Sense",
        instruction: "Read each setting detail. Sort it by which sense it appeals to.",
        columns: ["Sight", "Sound", "Smell", "Touch/Feel"],
        items: [
          { label: "The old floorboards groaned underfoot." },
          { label: "Moonlight cast long shadows across the floor." },
          { label: "The air smelled of salt and seaweed." },
          { label: "A cold wind slipped under the door." },
          { label: "Waves crashed against the rocks below." },
          { label: "The trees were dark against the pale sky." },
          { label: "Smoke drifted from the chimney." },
          { label: "The rough bark scraped her palms." },
        ],
      },
      // 23
      {
        type: "open-response",
        title: "Write a Story Opening Using the SENSE Method",
        instruction: "Write a 4-sentence story opening using one detail from each sense category. Your opening should set the scene and mood without yet introducing the problem.",
        prompts: [
          { text: "Sight: ___", type: "lines", lines: 1 },
          { text: "Sound: ___", type: "lines", lines: 1 },
          { text: "Smell or touch: ___", type: "lines", lines: 1 },
          { text: "Combine them into a flowing paragraph:", type: "lines", lines: 5 },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Create a Problem and a Solution",
        instruction: "Write 3 different problems that could happen to this character: a 7-year-old who wakes up to find they have shrunk to the size of a mouse. Then choose the best one and write how the character solves it.",
        prompts: [
          { text: "Problem 1:", type: "lines", lines: 1 },
          { text: "Problem 2:", type: "lines", lines: 1 },
          { text: "Problem 3:", type: "lines", lines: 1 },
          { text: "Best problem: ___\nSolution:", type: "lines", lines: 3 },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Write Using Story Prompts: The Mysterious Key",
        instruction: "Use this story starter to write a complete story (beginning, middle, end). Starter: 'On the morning of her eighth birthday, Rosa found a golden key under her pillow.'",
        parentTip: "Story starters remove the pressure of having to invent everything — the child only needs to continue. Celebrate any creative direction they take.",
        prompts: [
          { text: "My plan: Character: ___  Problem: ___  Resolution: ___", type: "lines", lines: 2 },
          { text: "My story:", type: "lines", lines: 10 },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Practise Writing Dialogue",
        instruction: "Write a short dialogue (4–6 lines) between two characters — a child and a talking animal. The dialogue should reveal something about the problem in the story.",
        parentTip: "Dialogue makes characters feel real. Remind your child: new speaker = new line, speech in quotation marks, comma before the closing quote.",
        prompts: [
          { text: "My dialogue:", type: "lines", lines: 7 },
        ],
      },
      // 27
      {
        type: "true-false",
        title: "Dialogue Punctuation: True or False?",
        instruction: "Circle TRUE or FALSE for each punctuation statement about dialogue.",
        statements: [
          { text: "Speech marks go around the words that are spoken.", answer: true },
          { text: "A new speaker always starts a new line.", answer: true },
          { text: "You use a full stop inside the speech marks before 'she said'.", answer: false },
          { text: "Dialogue can be used to show a character's personality.", answer: true },
          { text: "You should always use 'said' as the speech verb.", answer: false },
        ],
      },
      // 28
      {
        type: "circle-correct",
        title: "Which Dialogue Is Correctly Punctuated?",
        instruction: "Circle the correctly punctuated version of each dialogue.",
        questions: [
          { prompt: "Choose the correct version:", options: ['"I cannot reach it," she said.', '"I cannot reach it" she said.', '"I cannot reach it". She said.'] },
          { prompt: "Choose the correct version:", options: ['"What time is it?" asked Ben.', '"What time is it" asked Ben.', '"What time is it?" Asked Ben.'] },
          { prompt: "Choose the correct version:", options: ['"Come quickly," he shouted.', '"Come quickly." he shouted.', '"Come quickly" he shouted.'] },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Vary the Dialogue Verb",
        instruction: "Rewrite each 'said' sentence using a more interesting speech verb. The verb should show HOW the character spoke.",
        parentTip: "Speech verb vocabulary (whispered, demanded, exclaimed, etc.) is a key element of Year 2 narrative writing.",
        prompts: [
          { text: "'Watch out!' said Jake. → ___", type: "lines", lines: 1 },
          { text: "'I don't know the answer,' said Lily. → ___", type: "lines", lines: 1 },
          { text: "'Please, I'll do anything,' said the prisoner. → ___", type: "lines", lines: 1 },
          { text: "'I've done it!' said the scientist. → ___", type: "lines", lines: 1 },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Plotting Your Story — The Problem Ladder",
        content: "In a good story, the problem doesn't just appear and disappear — the character usually faces it, tries to solve it, fails or succeeds partially, tries again, and then finally resolves it. This is called the 'problem ladder'. Think of your story's middle as a series of steps: first attempt → complication → second attempt → partial success → resolution. Stories with a problem ladder feel much more satisfying than simple problem-solved stories.",
      },
      // 31
      {
        type: "open-response",
        title: "Plan a Problem Ladder",
        instruction: "Choose a problem for a character. Plan a 'problem ladder' — the character tries and fails before eventually succeeding.",
        prompts: [
          { text: "Character: ___  Problem: ___", type: "lines", lines: 1 },
          { text: "First attempt (what they try): ___", type: "lines", lines: 1 },
          { text: "What goes wrong: ___", type: "lines", lines: 1 },
          { text: "Second attempt: ___", type: "lines", lines: 1 },
          { text: "Final resolution: ___", type: "lines", lines: 2 },
        ],
      },
      // 32
      {
        type: "open-response",
        title: "Write a Story With a Problem Ladder",
        instruction: "Using your problem ladder plan, write a story (8–10 sentences) that shows the character trying and failing before finally succeeding.",
        prompts: [
          { text: "My story:", type: "lines", lines: 12 },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Write Using a Random Story Generator",
        instruction: "Use these randomly chosen elements to write a story plan and then the first paragraph.\nCharacter: an elderly lighthouse keeper. Setting: a deserted island in a storm. Problem: the lighthouse light has gone out and a ship is heading for the rocks.",
        prompts: [
          { text: "My plan (beginning/middle/end):", type: "lines", lines: 3 },
          { text: "My first paragraph:", type: "lines", lines: 6 },
        ],
      },
      // 34
      {
        type: "sequence",
        title: "Order the Story Steps: Problem Ladder",
        instruction: "These sentences tell a story with a problem ladder. Number them in the correct order (1–6).",
        items: [
          { label: "On her third attempt, she finally managed to climb the slippery wall." },
          { label: "The village was flooded and the only way out was over the old stone wall." },
          { label: "On her second try, she got halfway before slipping down again." },
          { label: "She arrived on the other side and guided the children to safety." },
          { label: "Her first attempt failed — she couldn't find a foothold." },
          { label: "She stood at the base of the wall, breathing hard, and decided to try again." },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Develop Your Story's Ending",
        instruction: "Read these three types of story ending. Write one example of each, using the same story (a child who gets lost on a school excursion).",
        parentTip: "Different ending types create different emotional effects. Discuss which feels most satisfying and why.",
        prompts: [
          { text: "Happy ending (problem fully solved, character feels relieved/happy):", type: "lines", lines: 3 },
          { text: "Reflective ending (character learns something about themselves):", type: "lines", lines: 3 },
          { text: "Open ending (leaves the reader wondering what happens next):", type: "lines", lines: 3 },
        ],
      },
      // 36
      {
        type: "open-response",
        title: "Write a Complete Short Story: Bush Adventure",
        instruction: "Write a complete short story (10–12 sentences) about a child who gets lost in the Australian bush. Use: a hook opener, sensory setting description, a problem ladder with at least 2 attempts, dialogue, and a satisfying ending.",
        prompts: [
          { text: "My plan:", type: "lines", lines: 4 },
          { text: "My story:", type: "lines", lines: 13 },
        ],
      },
      // 37
      {
        type: "circle-correct",
        title: "Which Word Is the Better Choice?",
        instruction: "Circle the more vivid, specific word in each pair for use in story writing.",
        questions: [
          { prompt: "The character walked into the room.", options: ["went", "crept"] },
          { prompt: "The house was old and scary.", options: ["decrepit", "bad"] },
          { prompt: "She felt sad when she heard the news.", options: ["devastated", "upset"] },
          { prompt: "The animal made a noise.", options: ["growled", "sounded"] },
          { prompt: "She said she was frightened.", options: ["admitted", "said"] },
        ],
      },
      // 38
      {
        type: "home-activity",
        title: "Story Ideas Notebook",
        instruction: "Start a 'Story Ideas' notebook this week. Every day, add at least one new idea.",
        parentTip: "Real writers keep notebooks of ideas, overheard conversations, interesting words, and observations. Help your child start this habit.",
        suggestions: [
          "Write 3 interesting character ideas (who are they? what do they want?)",
          "Sketch or describe 2 unusual or interesting settings",
          "Write 3 story problems that would make a reader curious",
          "Find one interesting overheard phrase that could start a story",
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Write With a Twist Ending",
        instruction: "Write a short story (8 sentences) that ends with a TWIST — something the reader doesn't expect. Set up the twist carefully in the beginning and middle.",
        prompts: [
          { text: "My twist (keep secret until the end): ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 10 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Story in Three Objects",
        content: "Choose three random objects from around your home (e.g. a key, a jar, a photograph). Write a story in which all three objects are important to the plot. Plan it first: how does each object appear? What does it DO to the story? Write the full story (at least 10 sentences) and share it with someone at home.",
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Write a Story with Strong Character Voice",
        instruction: "Write a story (10 sentences) in first person (using 'I'). Your story should clearly show your character's personality through the way they think and speak — not just what happens.",
        prompts: [
          { text: "My story (in first person):", type: "lines", lines: 13 },
        ],
      },
      // 42
      {
        type: "open-response",
        title: "Edit Your Story: Check for All Elements",
        instruction: "Re-read your story from activity 41. Use this checklist to review it and then rewrite one section to improve it.",
        prompts: [
          { text: "Does it have a hook opener? Yes/No. If no, rewrite the opener:", type: "lines", lines: 3 },
          { text: "Does the setting use sensory details? Yes/No. Add one sensory detail:", type: "lines", lines: 2 },
          { text: "Is there a clear problem? Yes/No. What is it?", type: "lines", lines: 1 },
          { text: "Is there a satisfying ending? Yes/No. If not, rewrite the ending:", type: "lines", lines: 3 },
        ],
      },
      // 43
      {
        type: "sorting",
        title: "Sort Story Techniques by Purpose",
        instruction: "Sort each technique into the correct column based on its main purpose.",
        columns: ["Hooks the reader", "Builds tension", "Develops character", "Creates vivid setting"],
        items: [
          { label: "Starting with action or dialogue" },
          { label: "Short sentences as danger approaches" },
          { label: "Revealing what the character fears" },
          { label: "Sensory details of sight, sound, smell" },
          { label: "Starting with a question" },
          { label: "Slowing down the description just before the climax" },
          { label: "Showing how the character reacts to events" },
          { label: "Using unusual or specific adjectives" },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Write Three Story Openers Using Different Techniques",
        instruction: "Write three different opening sentences for the same story idea (a child who discovers a hidden room in their home). Use a different technique for each one.",
        prompts: [
          { text: "Opener 1 — Start with action: ___", type: "lines", lines: 2 },
          { text: "Opener 2 — Start with a question: ___", type: "lines", lines: 2 },
          { text: "Opener 3 — Start with setting/atmosphere: ___", type: "lines", lines: 2 },
          { text: "Which opener is most effective? Why?", type: "lines", lines: 2 },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Sentence Length Controls Pace",
        content: "In story writing, sentence length controls how fast or slow the story feels. Short sentences = fast pace, tension, excitement. Long sentences = slower pace, reflection, description. Try this: during the most tense or exciting moment, use short, punchy sentences. During quieter moments, use longer, flowing ones. This technique is called varying sentence length for effect.",
      },
      // 46
      {
        type: "open-response",
        title: "Rewrite a Passage: Vary Sentence Length for Effect",
        instruction: "Read this passage. It uses all long sentences. Rewrite it to create more tension using short sentences at the most exciting moment.\n\nOriginal: 'She opened the door and walked down the long corridor and the lights flickered as she reached the end and she heard a sound from behind the last door and she stopped and turned around.'",
        prompts: [
          { text: "My revised version (use varying sentence lengths):", type: "lines", lines: 8 },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Write a Tension-Building Scene",
        instruction: "Write a scene (6–8 sentences) from the middle of a story where tension is building. Use: short sentences at the most tense moment, sensory details, and show (don't tell) the character's fear.",
        prompts: [
          { text: "My tension scene:", type: "lines", lines: 10 },
        ],
      },
      // 48
      {
        type: "matching",
        title: "Match the Story Technique to an Example",
        instruction: "Draw a line from each technique to the best example of it.",
        left: [
          "Show, don't tell (fear)",
          "Hook opener (action)",
          "Short sentences for tension",
          "Sensory setting detail",
          "Dialogue that reveals character",
        ],
        right: [
          "'I never panic,' he said, though his hands were shaking violently.",
          "The forest smelled of pine and damp earth.",
          "She ran. She didn't look back. She didn't dare.",
          "The door swung open before she even touched it.",
          "Her throat was dry. Her heart pounded. She couldn't breathe.",
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Write a Complete Story Demonstrating All Techniques",
        instruction: "Write a complete story (12–15 sentences) using all the techniques you have learned. Your story must include: a hook opener, sensory setting description, a character revealed through actions or dialogue (show, don't tell), a problem ladder, sentence variety, and a satisfying ending.",
        prompts: [
          { text: "My plan:", type: "lines", lines: 4 },
          { text: "My story:", type: "lines", lines: 16 },
        ],
      },
      // 50
      {
        type: "home-activity",
        title: "Read Like a Writer",
        instruction: "Read any story this week with a writer's eye. Notice the techniques the author uses.",
        parentTip: "Reading like a writer — noticing HOW a text is written rather than just WHAT it says — is one of the most powerful ways to improve writing. Even 10 minutes a day builds powerful instincts.",
        suggestions: [
          "How does the story start? What technique does the author use?",
          "Find one example of 'show, don't tell' and copy it out",
          "Notice where the author uses short sentences — what effect does it create?",
          "How does the story end? Does it feel satisfying? Why or why not?",
        ],
      },
      // 51
      {
        type: "open-response",
        title: "Write a Story From an Unusual Perspective",
        instruction: "Write a story (10 sentences) from the perspective of an unusual narrator — an object, an animal, or a minor background character. Stay in that perspective for the whole story.",
        parentTip: "Perspective-taking builds empathy and narrative flexibility. Celebrate unusual and inventive viewpoints.",
        prompts: [
          { text: "My narrator: ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 12 },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Rewrite a Familiar Story From a Different Perspective",
        instruction: "Choose a familiar fairy tale or story (e.g. 'The Three Little Pigs', 'Cinderella', 'Goldilocks'). Rewrite the story from the perspective of a minor or villain character. What does the story look like from THEIR point of view?",
        prompts: [
          { text: "Story chosen: ___  Perspective character: ___", type: "lines", lines: 1 },
          { text: "My retelling:", type: "lines", lines: 12 },
        ],
      },
      // 53
      {
        type: "sorting",
        title: "Sort Story Elements: Plot vs Character vs Setting",
        instruction: "Sort each element into the correct category.",
        columns: ["Plot (what happens)", "Character (who)", "Setting (where/when)"],
        items: [
          { label: "The bridge collapses." },
          { label: "A stubborn, brave 9-year-old." },
          { label: "A misty mountain village at dawn." },
          { label: "The villain finally confesses." },
          { label: "A scientist who loves puzzles." },
          { label: "An abandoned spaceship orbiting a red planet." },
          { label: "The hero discovers the truth." },
          { label: "Twins who disagree about everything." },
          { label: "A rainy Saturday afternoon in a small library." },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Write a Story Where Setting Drives the Plot",
        instruction: "Write a story (10 sentences) where the SETTING creates the problem. The setting should be so important that the plot couldn't happen anywhere else.",
        prompts: [
          { text: "My setting: ___", type: "lines", lines: 1 },
          { text: "How the setting creates the problem: ___", type: "lines", lines: 2 },
          { text: "My story:", type: "lines", lines: 12 },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Write a Dialogue-Driven Scene",
        instruction: "Write a scene (8–10 lines of dialogue + action tags) where the dialogue moves the plot forward and reveals character. Include at least 3 different speech verbs.",
        parentTip: "Dialogue-heavy scenes are a great way to build pace and reveal character without long descriptions.",
        prompts: [
          { text: "My dialogue scene:", type: "lines", lines: 12 },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Analyse a Story: Identify All the Techniques",
        instruction: "Read this short story excerpt. Identify: the setting, the character, the hook technique used, any 'show don't tell' moments, and the sentence variety used.\n\n'The lighthouse was dark. It hadn't been dark in forty years. Mira pressed her face against the cold glass and stared at the rocks below. A ship was coming. She could see its lights blinking slowly through the fog. She had maybe twenty minutes. She ran.'\n\n(Note: This is an original excerpt created for this activity.)",
        prompts: [
          { text: "Setting: ___", type: "lines", lines: 1 },
          { text: "What we know about Mira (from 'showing'): ___", type: "lines", lines: 2 },
          { text: "Hook technique: ___", type: "lines", lines: 1 },
          { text: "Sentence length effect: ___", type: "lines", lines: 2 },
          { text: "What happens next? (Continue the excerpt for 3 sentences):", type: "lines", lines: 4 },
        ],
      },
      // 57
      {
        type: "multiple-choice",
        title: "Story Writing: Choose the Best Technique",
        instruction: "Choose the technique that would be most effective for each situation.",
        questions: [
          { prompt: "To create maximum tension as the character approaches the cave:", options: ["Long, flowing sentences with adjectives", "Short, punchy sentences", "Detailed explanation of the cave's history", "A list of things the character saw"] },
          { prompt: "To show the character is secretly afraid without saying 'she was scared':", options: ["Write 'She felt scared'", "Show her heart racing and hands shaking", "Tell the reader in the narrator's voice", "Skip this part"] },
          { prompt: "To start a mystery story with maximum impact:", options: ["'Once upon a time there was a mystery.'", "'The letter arrived at midnight. There was no return address.'", "'This story is about a mystery that happened in a town.'", "'My name is Tom and I am going to tell you a mystery story.'"] },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Write a Story Opening Three Ways: Compare the Effect",
        instruction: "Write the same story opening (a fire at a school) three ways: (1) boring version, (2) using a hook and action, (3) using atmosphere and setting. Then explain which is best.",
        prompts: [
          { text: "(1) Boring version:", type: "lines", lines: 2 },
          { text: "(2) Hook and action version:", type: "lines", lines: 3 },
          { text: "(3) Atmosphere and setting version:", type: "lines", lines: 3 },
          { text: "Which is most effective and why?", type: "lines", lines: 2 },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Plan and Write a Longer Story",
        instruction: "Plan a story with at least 5 key plot events (problem ladder). Then write the full story (15–18 sentences). Use at least 4 different writing techniques you have learned.",
        prompts: [
          { text: "My 5-event plot plan:", type: "lines", lines: 5 },
          { text: "Techniques I will use:", type: "lines", lines: 2 },
          { text: "My story:", type: "lines", lines: 20 },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip",
        title: "Tip: Paragraphs in Narrative Writing",
        content: "In narrative writing, a new paragraph signals a change: a new character speaking, a new time, a new place, or a new idea. Well-organised paragraphs make stories easier to read and more satisfying to follow. Aim for: 1 paragraph for the introduction/opening. 2–3 paragraphs for the middle (one for each major event or attempt). 1 paragraph for the resolution. 1 paragraph for the final feeling or reflection.",
      },
      // 61 — SPARK at ~60
      {
        type: "spark",
        title: "Spark: Story Swap",
        content: "Write the beginning and middle of a story (10 sentences), then STOP at the most tense or exciting moment. Give your story to someone else to write the ending. Then they give you theirs. Compare endings! Discuss: did they resolve it the same way you expected? Which ending do you prefer?",
      },
      // 62
      {
        type: "open-response",
        title: "Organise Your Story Into Paragraphs",
        instruction: "Take a story you have written in this worksheet. Plan how you would divide it into paragraphs. Write the first line of each planned paragraph and explain what the paragraph covers.",
        prompts: [
          { text: "Paragraph 1 — first line: ___\nCovers: ___", type: "lines", lines: 2 },
          { text: "Paragraph 2 — first line: ___\nCovers: ___", type: "lines", lines: 2 },
          { text: "Paragraph 3 — first line: ___\nCovers: ___", type: "lines", lines: 2 },
          { text: "Paragraph 4 — first line: ___\nCovers: ___", type: "lines", lines: 2 },
          { text: "Paragraph 5 — first line: ___\nCovers: ___", type: "lines", lines: 2 },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Write a Story in Paragraphs",
        instruction: "Write a complete story in 5 clear paragraphs. Each paragraph should have a clear focus. Label each paragraph: Opening / Build-up / Problem / Climax / Resolution.",
        prompts: [
          { text: "Opening:", type: "lines", lines: 3 },
          { text: "Build-up:", type: "lines", lines: 4 },
          { text: "Problem:", type: "lines", lines: 4 },
          { text: "Climax:", type: "lines", lines: 3 },
          { text: "Resolution:", type: "lines", lines: 3 },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Story Review: Identify Strengths and Areas to Improve",
        instruction: "Swap a story you have written with someone at home (or self-evaluate). Write a review identifying: 2 strengths, 1 technique the writer used effectively, and 1 suggestion for improvement.",
        parentTip: "Peer or self-evaluation builds metacognitive skills. Focus feedback on the writing, not the writer — always start with strengths.",
        prompts: [
          { text: "Story reviewed: ___", type: "lines", lines: 1 },
          { text: "Strength 1: ___", type: "lines", lines: 2 },
          { text: "Strength 2: ___", type: "lines", lines: 2 },
          { text: "Effective technique: ___", type: "lines", lines: 2 },
          { text: "One suggestion for improvement: ___", type: "lines", lines: 2 },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Revise a Story Based on Feedback",
        instruction: "Take a story you have written and rewrite one complete section (beginning, middle or end) to improve it. Use the feedback from activity 64 or your own critical reading. Show both the original and the revised version.",
        prompts: [
          { text: "Section I am revising: ___", type: "lines", lines: 1 },
          { text: "Original version:", type: "lines", lines: 5 },
          { text: "Revised version:", type: "lines", lines: 5 },
          { text: "What I changed and why:", type: "lines", lines: 3 },
        ],
      },
      // 66
      {
        type: "true-false",
        title: "Writing Craft: True or False?",
        instruction: "Circle TRUE or FALSE for each statement about story writing craft.",
        statements: [
          { text: "A good story always starts with 'Once upon a time'.", answer: false },
          { text: "Varying sentence length can affect pace and tension.", answer: true },
          { text: "Dialogue reveals character through what they say and how they say it.", answer: true },
          { text: "A first draft should be perfect before you move on.", answer: false },
          { text: "Revision and editing are as important as the first draft.", answer: true },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Write a Story With a Moral or Theme",
        instruction: "Write a story (10–12 sentences) where the events lead the character to learn something important — a 'theme' or 'moral'. Write what the theme is BEFORE you write the story, then make sure the plot supports it.",
        prompts: [
          { text: "My theme/moral: ___", type: "lines", lines: 1 },
          { text: "How the plot will show this: ___", type: "lines", lines: 2 },
          { text: "My story:", type: "lines", lines: 13 },
        ],
      },
      // 68
      {
        type: "sorting",
        title: "Sort These Stories by Their Theme",
        instruction: "Read each one-sentence story summary. Match it to the most likely theme.",
        columns: ["Courage", "Honesty", "Friendship", "Perseverance"],
        items: [
          { label: "A girl kept trying to learn piano even after failing six times." },
          { label: "A boy told the truth even though it got him in trouble." },
          { label: "Two rivals discovered they needed each other to survive." },
          { label: "A child stood up to the bully even though she was scared." },
          { label: "A boy stayed loyal to his friend even when others turned away." },
          { label: "A girl kept training even when she came last every race." },
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Write a Story Plan for a Theme of Your Choice",
        instruction: "Choose a theme that matters to you. Plan a story that explores this theme through character and plot — without ever stating the theme directly in the story.",
        parentTip: "The best stories explore themes implicitly — through events and character choices, not through characters announcing the moral. Discuss this together.",
        prompts: [
          { text: "My theme: ___", type: "lines", lines: 1 },
          { text: "Character: ___  Problem related to theme: ___", type: "lines", lines: 2 },
          { text: "How the plot develops the theme: ___", type: "lines", lines: 3 },
          { text: "Ending that shows the theme: ___", type: "lines", lines: 2 },
        ],
      },
      // 70
      {
        type: "home-activity",
        title: "Story Structure Analysis at Home",
        instruction: "Watch a film or TV show together. Analyse its story structure after.",
        parentTip: "Analysing stories in visual media is very effective for building narrative understanding — children can see the structure clearly without the decoding required for text.",
        suggestions: [
          "Identify the beginning, middle and end of the film",
          "What is the main character's problem?",
          "What attempts do they make to solve it before they succeed?",
          "What do they learn? What is the theme?",
        ],
      },
      // ── EXTENDING (71–100) ────────────────────────────────────────
      // 71
      {
        type: "open-response",
        title: "Story Analysis: How Do Professional Writers Structure Their Stories?",
        instruction: "Choose any novel or picture book you have read. Analyse its structure by answering these questions.",
        prompts: [
          { text: "Book title: ___  Author: ___", type: "lines", lines: 1 },
          { text: "How does the story begin? What technique does the author use?", type: "lines", lines: 3 },
          { text: "What is the main problem? How many attempts does the character make?", type: "lines", lines: 3 },
          { text: "How does the story end? Is it satisfying? Why?", type: "lines", lines: 3 },
          { text: "What is the theme?", type: "lines", lines: 2 },
          { text: "One technique you would like to borrow for your own writing:", type: "lines", lines: 2 },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Write a Story That Subverts a Convention",
        instruction: "Choose a familiar story convention (e.g. the hero always wins, happy endings, the villain is always evil) and deliberately subvert (break) it in your story. Write the story (10–12 sentences) and explain your choice.",
        parentTip: "Subverting conventions is a sophisticated literary technique — celebrate any genuine creative risk-taking.",
        prompts: [
          { text: "Convention I am subverting: ___", type: "lines", lines: 1 },
          { text: "How my story breaks it: ___", type: "lines", lines: 2 },
          { text: "My story:", type: "lines", lines: 13 },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Extended Narrative: Three-Scene Story",
        instruction: "Write a three-scene story. Each scene must have a clear setting, at least one line of dialogue, and a distinct purpose in the plot. Scene 1 = introduction. Scene 2 = complication/problem. Scene 3 = resolution.",
        prompts: [
          { text: "Scene 1:", type: "lines", lines: 6 },
          { text: "Scene 2:", type: "lines", lines: 6 },
          { text: "Scene 3:", type: "lines", lines: 6 },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Analyse Sentence-Level Craft",
        instruction: "Read the following three sentences. For each one, explain: why the author made this word choice, what effect it creates, and whether you find it effective.\n\n1. 'The empty house waited.'\n2. 'She ran until the sound stopped.'\n3. 'He laughed, but his eyes were sad.'\n\n(Note: These are original sentences created for this activity.)",
        prompts: [
          { text: "'The empty house waited.' — Analysis:", type: "lines", lines: 3 },
          { text: "'She ran until the sound stopped.' — Analysis:", type: "lines", lines: 3 },
          { text: "'He laughed, but his eyes were sad.' — Analysis:", type: "lines", lines: 3 },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Planting Clues — Foreshadowing",
        content: "Skilled writers plant hints early in a story about what will happen later — this is called foreshadowing. For example: a character hears a strange sound in chapter one, which later turns out to be important. Foreshadowing rewards readers who pay attention and makes a story feel more carefully constructed. When you plan a story, think: are there any clues I can plant in the beginning that will make the ending more satisfying?",
      },
      // 76
      {
        type: "open-response",
        title: "Write a Story With Foreshadowing",
        instruction: "Write a story (10–12 sentences) where you plant a small clue or hint in the first paragraph that becomes important at the end. After writing, highlight the foreshadowing moment and explain it in brackets.",
        prompts: [
          { text: "My foreshadowing element: ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 13 },
          { text: "Explanation of the foreshadowing:", type: "lines", lines: 2 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Write a Story Using Parallel Structure",
        instruction: "Write a story where the beginning and ending mirror each other in some way (e.g. same setting, same action, same sentence) — but the meaning has changed because of what happened in the middle.",
        parentTip: "Circular or parallel structure is a hallmark of carefully crafted narratives. Celebrate any successful attempt.",
        prompts: [
          { text: "My opening (first paragraph):", type: "lines", lines: 3 },
          { text: "My middle (what happens to change things):", type: "lines", lines: 6 },
          { text: "My closing (echoes the opening but with new meaning):", type: "lines", lines: 3 },
          { text: "How the meaning of the repeated element has changed:", type: "lines", lines: 2 },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Write a Story for a Specific Audience",
        instruction: "Write the same story premise (a child who finds a magical object) TWO ways: once for a 5-year-old audience (simple vocabulary, clear structure, reassuring ending) and once for a 12-year-old audience (more complex vocabulary, more ambiguity, emotional depth).",
        prompts: [
          { text: "Version for 5-year-olds:", type: "lines", lines: 8 },
          { text: "Version for 12-year-olds:", type: "lines", lines: 8 },
          { text: "What changed between versions?", type: "lines", lines: 3 },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Write a Genre Story: Choose Your Genre",
        instruction: "Choose a genre: mystery, adventure, fantasy, realistic fiction, or science fiction. Write a story (12 sentences) that uses typical conventions of that genre. List 3 genre conventions you used.",
        prompts: [
          { text: "My genre: ___", type: "lines", lines: 1 },
          { text: "3 genre conventions I will use:", type: "lines", lines: 2 },
          { text: "My story:", type: "lines", lines: 14 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Write a Story Backwards",
        content: "Challenge: write your story BACKWARDS. Start with the ending — the final scene. Then write the scene just before it. Then the one before that. Keep working backwards to the opening. When you're done, read it in the correct forward order. Often, writing backwards reveals things about your own story structure you didn't notice when you wrote it forwards.",
      },
      // 81
      {
        type: "open-response",
        title: "Extended Narrative: A Full Short Story",
        instruction: "Write a complete short story (18–22 sentences) demonstrating full mastery of narrative craft. Requirements: hook opener, 5-event plot, two 'show don't tell' moments, dialogue with varied speech verbs, sentence length variety for pace, foreshadowing element, and a thematic resolution. Label each technique in the margin.",
        prompts: [
          { text: "My plan:", type: "lines", lines: 5 },
          { text: "My full story:", type: "lines", lines: 25 },
          { text: "Techniques checklist:", type: "lines", lines: 4 },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Write a Story in a Different Genre From Your Usual Style",
        instruction: "Write a story (12 sentences) in a genre you have never tried before. If you usually write adventure, try realistic fiction. If you usually write fantasy, try mystery. Identify 3 things that were different about writing in this new genre.",
        prompts: [
          { text: "New genre: ___  My usual genre: ___", type: "lines", lines: 1 },
          { text: "My story:", type: "lines", lines: 14 },
          { text: "Three things that were different:", type: "lines", lines: 3 },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Rewrite a Published Story Opening in Your Own Voice",
        instruction: "Find the opening paragraph of a favourite book. Read it carefully. Now rewrite it completely in your own style — same premise, same character, but entirely your own words, sentence structure and tone.",
        parentTip: "This 'author imitation' exercise, common among professional writers, develops voice while studying craft.",
        prompts: [
          { text: "Book and author: ___", type: "lines", lines: 1 },
          { text: "My rewritten version:", type: "lines", lines: 6 },
          { text: "What I kept the same / what I changed:", type: "lines", lines: 3 },
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "Advanced Story Craft: Choose the Best Option",
        instruction: "Choose the most effective technique for each scenario.",
        questions: [
          { prompt: "The story needs to feel like it is building to something important from the very first line. The best technique is:", options: ["Start with the character's name and age", "Plant a mysterious detail that will matter later (foreshadowing)", "Describe the weather in detail", "Begin with a long list of facts about the setting"] },
          { prompt: "The story climax needs maximum tension. The best approach is:", options: ["Long, descriptive sentences explaining everything", "Short, fragmented sentences; no dialogue; focus on physical sensation", "The narrator explains what the character feels", "Skip the climax and go straight to the resolution"] },
          { prompt: "The theme of the story is 'true friendship requires sacrifice'. The best way to show this is:", options: ["Have a character say 'true friendship requires sacrifice'", "Show a character making a painful sacrifice for a friend, without comment", "Have the narrator explain the theme", "Give every character the same personality"] },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Write a Monologue: Character's Inner Voice",
        instruction: "Write a monologue (8–10 sentences) from inside a character's head at the most tense moment of your story. Write exactly what they are thinking and feeling — the reader should understand the stakes even if no action is described.",
        prompts: [
          { text: "Character and moment: ___", type: "lines", lines: 1 },
          { text: "Inner monologue:", type: "lines", lines: 11 },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Self-Edit Using a Full Craft Checklist",
        instruction: "Take your story from activity 81. Read it against this checklist and note any areas to improve. Then rewrite one full section based on your notes.",
        prompts: [
          { text: "Hook: Is the first sentence interesting enough? Notes: ___", type: "lines", lines: 1 },
          { text: "Setting: Are there at least two sensory details? Notes: ___", type: "lines", lines: 1 },
          { text: "Character: Is the character shown through actions, not just described? Notes: ___", type: "lines", lines: 1 },
          { text: "Pace: Does sentence length vary? Notes: ___", type: "lines", lines: 1 },
          { text: "Ending: Is the theme clear without being stated? Notes: ___", type: "lines", lines: 1 },
          { text: "Revised section:", type: "lines", lines: 6 },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Compare Your First and Final Draft",
        instruction: "Find your very first story from this worksheet (activity 4) and compare it to your most recent story. Write a reflection on your development as a writer.",
        prompts: [
          { text: "Differences I notice between the two stories:", type: "lines", lines: 4 },
          { text: "Techniques I now use that I didn't before:", type: "lines", lines: 3 },
          { text: "What I am most proud of in my most recent story:", type: "lines", lines: 3 },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Write a Series Premise",
        instruction: "Plan the first three stories in a series featuring the same character. Each story should have a different problem but the same character, setting and theme. Write a 2-sentence summary for each story.",
        prompts: [
          { text: "Series title: ___  Character: ___  Recurring setting: ___  Theme: ___", type: "lines", lines: 2 },
          { text: "Story 1 summary:", type: "lines", lines: 2 },
          { text: "Story 2 summary:", type: "lines", lines: 2 },
          { text: "Story 3 summary:", type: "lines", lines: 2 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Write a Scene You Are Proud Of",
        instruction: "Write one scene from any of your planned stories that you are particularly excited about. Pour your best writing into this one scene — use every technique you have. This is your showcase writing.",
        prompts: [
          { text: "My showcase scene:", type: "lines", lines: 16 },
          { text: "Why I am proud of this scene:", type: "lines", lines: 3 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: The Writer's Mindset",
        content: "Real writers know that first drafts are never perfect — they are just the beginning. Real writers: plan before they write, draft without self-criticism, revise with an editing eye, read their work aloud to check how it sounds, get feedback and use it, and keep writing even when it is hard. The difference between a writer and someone who wants to write is: a writer writes, even when it is hard. You are already a writer.",
      },
      // 91
      {
        type: "open-response",
        title: "Plan a Full Story Project",
        instruction: "Plan a complete story (8+ paragraphs) that you will write over the next week. Include: a detailed character profile, a full setting description, a 6-event plot plan with problem ladder, a theme, and a list of 5 techniques you intend to use.",
        prompts: [
          { text: "Character profile:", type: "lines", lines: 3 },
          { text: "Setting description:", type: "lines", lines: 2 },
          { text: "6-event plot:", type: "lines", lines: 6 },
          { text: "Theme:", type: "lines", lines: 1 },
          { text: "5 techniques I will use:", type: "lines", lines: 3 },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Write the First Chapter",
        instruction: "Write the first chapter of your story project from activity 91. Aim for 15–20 sentences. This should be a polished, carefully crafted piece of writing.",
        prompts: [
          { text: "Chapter 1:", type: "lines", lines: 22 },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Write a Story With No Dialogue at All",
        instruction: "Write a story (10 sentences) that tells its story entirely through action and description — no dialogue whatsoever. Challenge yourself to reveal character and emotion without using speech.",
        prompts: [
          { text: "My story (no dialogue):", type: "lines", lines: 12 },
          { text: "What was hardest about not using dialogue?", type: "lines", lines: 2 },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Write a Story Using Only Dialogue",
        instruction: "Write a scene (12+ lines) using ONLY dialogue and action tags — no narrative description. The reader must understand the setting, character, problem and emotion entirely from the dialogue.",
        prompts: [
          { text: "My dialogue-only scene:", type: "lines", lines: 14 },
          { text: "What the reader can figure out without description:", type: "lines", lines: 3 },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Write a Micro-Story (100 Words or Less)",
        instruction: "Write a complete story in no more than 100 words. It must have a beginning, middle and end, at least one character, a clear problem and resolution, and a satisfying ending. Count your words after writing.",
        prompts: [
          { text: "My micro-story:", type: "lines", lines: 8 },
          { text: "Word count: ___", type: "lines", lines: 1 },
          { text: "What I had to cut and why:", type: "lines", lines: 2 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Investigate Story Openings: 5 Famous First Lines",
        instruction: "Research or recall 5 famous or favourite story opening lines. Copy them out, then for each one write: what technique the author used, and why it works.",
        prompts: [
          { text: "Line 1: ___\nTechnique and why it works: ___", type: "lines", lines: 2 },
          { text: "Line 2: ___\nTechnique and why it works: ___", type: "lines", lines: 2 },
          { text: "Line 3: ___\nTechnique and why it works: ___", type: "lines", lines: 2 },
          { text: "Line 4: ___\nTechnique and why it works: ___", type: "lines", lines: 2 },
          { text: "Line 5: ___\nTechnique and why it works: ___", type: "lines", lines: 2 },
        ],
      },
      // 97
      {
        type: "true-false",
        title: "Advanced Story Craft: True or False?",
        instruction: "Circle TRUE or FALSE for each advanced statement.",
        statements: [
          { text: "Foreshadowing plants clues early in a story about what will happen later.", answer: true },
          { text: "A story must resolve its problem happily to be considered good.", answer: false },
          { text: "Varying sentence length can control the pace and tension of a story.", answer: true },
          { text: "Theme is usually stated directly by a character in a good story.", answer: false },
          { text: "Revising and editing are as important as the first draft.", answer: true },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Teach Story Structure to a Younger Child",
        instruction: "Write an explanation of story structure (beginning, middle, end + problem/resolution) that a 5-year-old could understand. Use examples from stories they might know. Make it engaging and clear.",
        prompts: [
          { text: "My explanation:", type: "lines", lines: 10 },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflection: My Story Writing Journey",
        instruction: "Write a full reflection (8–10 sentences) on your development as a story writer through this worksheet. Include: the techniques you found most valuable, what was hardest, your favourite story you wrote, how your writing changed, and what you want to work on next.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 12 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark",
        title: "Spark: Become a Published Author",
        content: "Write, illustrate and 'publish' your own story book. Choose your best story from this worksheet. Write the final, polished version. Create illustrations for the key scenes (beginning, middle, end). Design a cover with the title and your name as author. Write a short 'About the Author' blurb on the back cover. Share it with your family, friends, or local library. You are a published author!",
      },
    ],
  },

  // ── WS 7: High Frequency Words ─────────────────────────────────
  {
    slug: "high-frequency-words-year2",
    title: "High Frequency Words",
    strand: "Literacy",
    description:
      "Read and spell a set of Year 2 high frequency words fluently to build reading speed and writing confidence.",
    learningGuide: {
      concept:
        "High frequency words (also called sight words) are words that appear very often in texts — words like 'because', 'through', 'thought', 'people' and 'friend'. Many do not follow standard phonics rules, so they need to be learned by sight. Fluent reading depends on recognising these words instantly.",
      activation:
        "Open any book and flip through a page together. How many of the high frequency words can your child spot and read instantly? Count them! This shows why these words matter.",
      check:
        "Can your child read each word without sounding it out? Can they spell it correctly without looking? Aim for confident, quick recognition.",
    },
    lesson: {
      title: "Word Power!",
      objective:
        "Read and correctly spell Year 2 high frequency words, using look-cover-write-check.",
      materials: [
        "Paper and pencil",
        "Index cards (for flashcards)",
        "A small folded piece of paper (for covering words)",
      ],
      intro: {
        title: "Why We Need Sight Words",
        script:
          "Some words in English are like VIPs — they show up everywhere, all the time. Words like 'because', 'people', 'thought', 'through' and 'friend'. These words are important because they are in almost every book you will ever read. And some of them do not follow the normal spelling rules, so we just need to know them! Today we are going to get to know them really well.",
        action:
          "Write today's high frequency words on index cards. Read through them together, one at a time, saying each word clearly. Any your child already knows? Celebrate those! Stack the unknown ones for focused practice.",
      },
      mainActivity: {
        title: "Look, Cover, Write, Check",
        script:
          "Here is the best way to learn a tricky word: Look at it carefully. Say it. Cover it up. Now write it from memory. Then uncover and check — did you get it right? If not, do it again. Let's try it now!",
        action:
          "Work through 5-8 words using the look-cover-write-check method. Child looks at the word for 5 seconds, covers it, writes it, then checks. Any incorrect? Do it again. Celebrate each success with a star or tick.",
      },
      wrapUp: {
        title: "Flash Test",
        script:
          "Let's test your word power! I'll hold up a card and you say the word as fast as you can. Ready? Go!",
        action:
          "Flash through all today's cards quickly. Keep the pace fun and energetic. Count correct answers and celebrate the total.",
      },
      parentTip:
        "Little and often works best for sight words. Even 5 minutes of flashcard practice three or four times a week is far more effective than one long session. Keep the cards accessible — on the fridge, by the table, in the car — and quiz spontaneously during the day.",
      extension:
        "Challenge your child to write a paragraph (4-5 sentences) using as many of today's high frequency words as they can. Count how many they used. Can they beat their score tomorrow?",
      resources: [
        {
          title: "Sight Words Practice",
          url: "https://www.starfall.com/h/ltr-classic/ltr-classic.php?sn=main",
          description: "Starfall interactive reading activities that include sight word practice.",
        },
        {
          title: "Khan Academy — Year 2 Reading",
          url: "https://www.khanacademy.org/ela/cc-2nd-reading-informational-text",
          description: "Khan Academy Year 2 reading activities including high frequency word use in context.",
        },
        {
          title: "ABC Education — Literacy",
          url: "https://education.abc.net.au/home#!/digibook/2661479/sounds-and-letters",
          description: "ABC Education reading and spelling resource for primary learners.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL (1–20) ────────────────────────────────────────
      // 1
      {
        type: "circle-correct",
        title: "Spell It Right (Set A)",
        instruction: "Circle the correctly spelled word in each row.",
        parentTip: "Have your child look at each option, say it slowly, and then decide — hearing the word aloud helps.",
        questions: [
          { prompt: "My best ___.", options: ["friend", "freind", "frend"] },
          { prompt: "She ___ carefully.", options: ["thort", "thought", "thowt"] },
          { prompt: "We walked ___ the park.", options: ["threw", "throo", "through"] },
          { prompt: "___ of us were there.", options: ["Peeple", "People", "Pepole"] },
          { prompt: "I did it ___ she helped me.", options: ["becuase", "because", "becaus"] },
        ],
      },
      // 2
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set A)",
        instruction: "Look at each word carefully. Cover it. Write it from memory. Then uncover and check. If correct, write it again.",
        parentTip: "This 'Look, Cover, Write, Check' method is one of the most effective spelling strategies for high frequency words. Do it every day until the words are automatic.",
        prompts: [
          { text: "friend → Write: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "thought → Write: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "through → Write: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "people → Write: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "because → Write: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "different → Write: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "together → Write: ___    Check and write again: ___", type: "lines", lines: 1 },
        ],
      },
      // 3
      {
        type: "open-response",
        title: "Use the Words in Sentences (Set A)",
        instruction: "Write a sentence using each high frequency word.",
        prompts: [
          { text: "because:", type: "lines", lines: 2 },
          { text: "through:", type: "lines", lines: 2 },
          { text: "people:", type: "lines", lines: 2 },
          { text: "friend:", type: "lines", lines: 2 },
        ],
      },
      // 4
      {
        type: "true-false",
        title: "Is This Word Spelled Correctly?",
        instruction: "Read each word. Circle TRUE if it is spelled correctly, FALSE if not.",
        statements: [
          { text: "freind", answer: false },
          { text: "thought", answer: true },
          { text: "through", answer: true },
          { text: "peeple", answer: false },
          { text: "because", answer: true },
          { text: "diferent", answer: false },
          { text: "together", answer: true },
        ],
      },
      // 5
      {
        type: "matching",
        title: "Match the Word to Its Correct Spelling",
        instruction: "Draw a line from each definition to the correctly spelled word.",
        left: [
          "A person you like and spend time with",
          "Past tense of think",
          "From one side to the other",
          "Many human beings",
          "For the reason that",
        ],
        right: ["people", "because", "friend", "thought", "through"],
      },
      // 6
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set A)",
        instruction: "Choose the correct word from the box to complete each sentence. Words: friend, thought, through, people, because, different, together.",
        sentences: [
          { text: "She ___ it was a great idea.", blanks: ["thought"] },
          { text: "Many ___ came to the festival.", blanks: ["people"] },
          { text: "They worked ___ to build the sandcastle.", blanks: ["together"] },
          { text: "He ran ___ the park.", blanks: ["through"] },
          { text: "She was late ___ the bus was slow.", blanks: ["because"] },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "Spell It Right (Set B)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "The ___ was very exciting.", options: ["evant", "event", "evennt"] },
          { prompt: "She could not ___ what to say.", options: ["decied", "decide", "desid"] },
          { prompt: "He walked ___ the room.", options: ["across", "acros", "acroos"] },
          { prompt: "She felt ___ about it.", options: ["exited", "excitid", "excited"] },
          { prompt: "We saw ___ birds in the tree.", options: ["several", "sevral", "siveral"] },
        ],
      },
      // 8
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set B)",
        instruction: "Practise these words using Look, Cover, Write, Check.",
        prompts: [
          { text: "event → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "decide → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "across → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "excited → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "several → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "always → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "another → Write: ___    Check: ___", type: "lines", lines: 1 },
        ],
      },
      // 9
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set B)",
        instruction: "Choose the best word: event, decide, across, excited, several, always, another.",
        sentences: [
          { text: "She was ___ nervous before a test.", blanks: ["always"] },
          { text: "They swam ___ the lake.", blanks: ["across"] },
          { text: "He could not ___ which book to read.", blanks: ["decide"] },
          { text: "___ children waited outside the gate.", blanks: ["Several"] },
          { text: "She felt ___ when she saw the surprise.", blanks: ["excited"] },
        ],
      },
      // 10
      {
        type: "sorting",
        title: "Sort Words Into Correct / Incorrect Spelling",
        instruction: "Read each word. Sort it into 'Correct spelling' or 'Incorrect spelling'.",
        columns: ["Correct spelling", "Incorrect spelling"],
        items: [
          { label: "friend" }, { label: "becuase" }, { label: "through" }, { label: "peeple" },
          { label: "thought" }, { label: "diferent" }, { label: "together" }, { label: "evant" },
          { label: "excited" }, { label: "acros" },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Use Set B Words in Sentences",
        instruction: "Write one sentence using each word.",
        prompts: [
          { text: "always:", type: "lines", lines: 2 },
          { text: "across:", type: "lines", lines: 2 },
          { text: "excited:", type: "lines", lines: 2 },
          { text: "several:", type: "lines", lines: 2 },
        ],
      },
      // 12
      {
        type: "circle-correct",
        title: "Spell It Right (Set C)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "She ___ carefully.", options: ["lissened", "listened", "lisened"] },
          { prompt: "He ___ loudly.", options: ["larfed", "laughed", "laffed"] },
          { prompt: "They were ___ tired.", options: ["truely", "truly", "truley"] },
          { prompt: "She ___ to the park.", options: ["walked", "walkd", "walkt"] },
          { prompt: "It was a ___ surprise.", options: ["wonderfull", "wonderful", "wundrful"] },
        ],
      },
      // 13
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set C)",
        instruction: "Practise these words using Look, Cover, Write, Check.",
        prompts: [
          { text: "listened → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "laughed → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "truly → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "wonderful → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "usually → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "important → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "beautiful → Write: ___    Check: ___", type: "lines", lines: 1 },
        ],
      },
      // 14
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set C)",
        instruction: "Choose the best word: listened, laughed, truly, wonderful, usually, important, beautiful.",
        sentences: [
          { text: "It is ___ to eat vegetables.", blanks: ["important"] },
          { text: "The garden was ___ in spring.", blanks: ["beautiful"] },
          { text: "She ___ ate breakfast before school.", blanks: ["usually"] },
          { text: "Everyone ___ at the funny joke.", blanks: ["laughed"] },
          { text: "It was a ___ day out.", blanks: ["wonderful"] },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: Why We Have High Frequency Words",
        content: "High frequency words (also called sight words) are words that appear very often in English texts. In fact, the 100 most common words make up about 50% of everything we read! Many of these words have irregular spellings — they don't follow normal phonics rules — so they need to be learned by heart. The fastest way to learn them is: see them often, write them often, and use them in real sentences. Little and often is the key.",
      },
      // 16
      {
        type: "open-response",
        title: "Use All Three Sets in a Paragraph",
        instruction: "Write a paragraph of 4–5 sentences using at least 8 high frequency words from Sets A, B and C. Underline each one.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 6 },
          { text: "High frequency words I used:", type: "lines", lines: 2 },
        ],
      },
      // 17
      {
        type: "matching",
        title: "Match the Word to Its Definition",
        instruction: "Draw a line from each word to its meaning.",
        left: ["important", "beautiful", "wonderful", "usually", "truly"],
        right: [
          "More often than not; normally",
          "Having great worth or significance",
          "In a real or genuine way",
          "Pleasing to the eye; very pretty",
          "Extremely good; marvellous",
        ],
      },
      // 18
      {
        type: "sequence",
        title: "Put These Sentences in Alphabetical Order by the First Word",
        instruction: "Number these sentences 1–5 according to the alphabetical order of the first high frequency word.",
        parentTip: "Alphabetical order practice reinforces dictionary and reference skills alongside spelling.",
        items: [
          { label: "Together they walked to school." },
          { label: "People gathered in the square." },
          { label: "Because it was raining, they stayed inside." },
          { label: "Across the valley, the sun was rising." },
          { label: "Usually she arrived first." },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "My Personal Tricky Words List",
        instruction: "Go through all the words you have practised. Write down the 5 words you find hardest to spell. Do Look, Cover, Write, Check for each one THREE times.",
        parentTip: "Personal word lists are more effective than generic lists because they target the words each child actually finds difficult.",
        prompts: [
          { text: "My 5 hardest words: ___", type: "lines", lines: 1 },
          { text: "Word 1: ___ → Write: ___ → Write: ___ → Write: ___", type: "lines", lines: 1 },
          { text: "Word 2: ___ → Write: ___ → Write: ___ → Write: ___", type: "lines", lines: 1 },
          { text: "Word 3: ___ → Write: ___ → Write: ___ → Write: ___", type: "lines", lines: 1 },
          { text: "Word 4: ___ → Write: ___ → Write: ___ → Write: ___", type: "lines", lines: 1 },
          { text: "Word 5: ___ → Write: ___ → Write: ___ → Write: ___", type: "lines", lines: 1 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Sight Word Flash Test",
        content: "Make a full set of flashcards for all the high frequency words you have learned. Shuffle them. Time yourself: how many can you read correctly in 60 seconds? Write your score. Rest, then try again. Did you beat your score? Try to read ALL the words in under 90 seconds. Repeat this test every day for a week and chart your progress.",
      },
      // ── DEVELOPING (21–50) ────────────────────────────────────────
      // 21
      {
        type: "circle-correct",
        title: "Spell It Right (Set D)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "She felt ___.", options: ["releived", "relieved", "releaved"] },
          { prompt: "He was very ___.", options: ["curious", "cureous", "curiuos"] },
          { prompt: "They were both ___.", options: ["suprised", "surprised", "suprized"] },
          { prompt: "She had a ___ time.", options: ["fantastick", "fantastic", "phantastic"] },
          { prompt: "He was ___ by the news.", options: ["shocked", "shokced", "shockt"] },
        ],
      },
      // 22
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set D)",
        instruction: "Practise these higher-frequency words.",
        prompts: [
          { text: "relieved → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "curious → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "surprised → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "fantastic → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "shocked → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "remember → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "perhaps → Write: ___    Check: ___", type: "lines", lines: 1 },
        ],
      },
      // 23
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set D)",
        instruction: "Choose the best word: relieved, curious, surprised, fantastic, shocked, remember, perhaps.",
        sentences: [
          { text: "She was ___ when he appeared at the door.", blanks: ["surprised"] },
          { text: "He was ___ about the strange creature.", blanks: ["curious"] },
          { text: "___, we could go tomorrow instead.", blanks: ["Perhaps"] },
          { text: "Did you ___ to bring your lunch?", blanks: ["remember"] },
          { text: "Everyone was ___ at the news.", blanks: ["shocked"] },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Use Set D Words: Write a Short Story",
        instruction: "Write a short story (5–6 sentences) using at least 4 words from Set D. Underline each high frequency word.",
        prompts: [
          { text: "My story:", type: "lines", lines: 7 },
        ],
      },
      // 25
      {
        type: "sorting",
        title: "Sort Words by Number of Letters",
        instruction: "Sort these high frequency words by their number of letters.",
        columns: ["4–5 letters", "6–7 letters", "8+ letters"],
        items: [
          { label: "friend" }, { label: "thought" }, { label: "beautiful" }, { label: "because" },
          { label: "people" }, { label: "wonderful" }, { label: "together" }, { label: "important" },
          { label: "always" }, { label: "surprised" }, { label: "truly" }, { label: "fantastic" },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Wordsearch: Find and Write the Words",
        instruction: "Write 10 high frequency words from this worksheet in alphabetical order. Then write a sentence using the first word on your list.",
        prompts: [
          { text: "My 10 words in alphabetical order:", type: "lines", lines: 3 },
          { text: "Sentence using the first word:", type: "lines", lines: 2 },
        ],
      },
      // 27
      {
        type: "circle-correct",
        title: "Spell It Right (Set E)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "She was ___.", options: ["worrid", "worried", "worryed"] },
          { prompt: "He ___ carefully.", options: ["explaned", "explained", "explaind"] },
          { prompt: "It was ___.", options: ["necessary", "nessecary", "necesary"] },
          { prompt: "She ___ all the answers.", options: ["knowed", "knew", "newed"] },
          { prompt: "He was a ___ student.", options: ["briliant", "brillant", "brilliant"] },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set E)",
        instruction: "Practise these words.",
        prompts: [
          { text: "worried → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "explained → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "necessary → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "knew → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "brilliant → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "favourite → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "outside → Write: ___    Check: ___", type: "lines", lines: 1 },
        ],
      },
      // 29
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set E)",
        instruction: "Choose the best word: worried, explained, necessary, knew, brilliant, favourite, outside.",
        sentences: [
          { text: "She ___ the rule clearly to the class.", blanks: ["explained"] },
          { text: "He ___ the answer before she finished speaking.", blanks: ["knew"] },
          { text: "Is it ___ to wear a hat today?", blanks: ["necessary"] },
          { text: "Her ___ colour is blue.", blanks: ["favourite"] },
          { text: "He was ___ because no one had called.", blanks: ["worried"] },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Spelling Mnemonics",
        content: "A mnemonic (say it: nem-ON-ik) is a memory trick to help you spell a tricky word. For example: BECAUSE = Big Elephants Can Always Understand Small Elephants. NECESSARY = one Collar, two Socks (1 c, 2 s's). FRIEND = Friday Is ENDs (ends in 'end'). BEAUTIFUL = Big Elephants Are Under The Island For Uncle Leo. Make up your own — the sillier the better! Your brain remembers funny or surprising things.",
      },
      // 31
      {
        type: "open-response",
        title: "Create Your Own Mnemonics",
        instruction: "Create a mnemonic (a silly sentence where the first letter of each word spells the target word) for each tricky word.",
        parentTip: "The sillier the mnemonic, the more memorable it is! Encourage your child to enjoy the process.",
        prompts: [
          { text: "THOUGHT: T___ H___ O___ U___ G___ H___ T___", type: "lines", lines: 2 },
          { text: "PEOPLE: P___ E___ O___ P___ L___ E___", type: "lines", lines: 2 },
          { text: "FRIEND: F___ R___ I___ E___ N___ D___", type: "lines", lines: 2 },
          { text: "BECAUSE: B___ E___ C___ A___ U___ S___ E___", type: "lines", lines: 2 },
        ],
      },
      // 32
      {
        type: "open-response",
        title: "Write a Sentence Using Each Set E Word",
        instruction: "Write a sentence for each word. Your sentences should be interesting and varied.",
        prompts: [
          { text: "worried:", type: "lines", lines: 2 },
          { text: "brilliant:", type: "lines", lines: 2 },
          { text: "necessary:", type: "lines", lines: 2 },
          { text: "favourite:", type: "lines", lines: 2 },
        ],
      },
      // 33
      {
        type: "true-false",
        title: "Correct or Incorrect? (Mixed Set)",
        instruction: "Circle TRUE if the word is spelled correctly, FALSE if it is wrong.",
        statements: [
          { text: "necessary", answer: true },
          { text: "brillant", answer: false },
          { text: "worried", answer: true },
          { text: "favourate", answer: false },
          { text: "explained", answer: true },
          { text: "releived", answer: false },
          { text: "fantastic", answer: true },
        ],
      },
      // 34
      {
        type: "circle-correct",
        title: "Spell It Right (Set F)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "She felt ___.", options: ["disapointed", "disappointed", "dissapointed"] },
          { prompt: "He was very ___.", options: ["generus", "generous", "genereous"] },
          { prompt: "They were ___.", options: ["gratefull", "grateful", "greatful"] },
          { prompt: "She had ___.", options: ["permision", "permission", "permishon"] },
          { prompt: "He was ___.", options: ["responsible", "responsable", "responsibel"] },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set F)",
        instruction: "Practise these words.",
        prompts: [
          { text: "disappointed → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "generous → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "grateful → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "permission → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "responsible → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "immediately → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "education → Write: ___    Check: ___", type: "lines", lines: 1 },
        ],
      },
      // 36
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set F)",
        instruction: "Choose the best word: disappointed, generous, grateful, permission, responsible, immediately, education.",
        sentences: [
          { text: "She was ___ when she missed the final.", blanks: ["disappointed"] },
          { text: "He was very ___ with his time and money.", blanks: ["generous"] },
          { text: "She was ___ for all her help.", blanks: ["grateful"] },
          { text: "He asked for ___ before leaving.", blanks: ["permission"] },
          { text: "She called home ___.", blanks: ["immediately"] },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Write a Paragraph Using Set F Words",
        instruction: "Write a paragraph (5–6 sentences) using at least 5 words from Set F. Underline each one.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 7 },
          { text: "Set F words I used:", type: "lines", lines: 1 },
        ],
      },
      // 38
      {
        type: "sorting",
        title: "Sort Words by Syllable Count",
        instruction: "Count the syllables in each word. Sort them into the correct column.",
        parentTip: "Clap once for each syllable beat. Counting syllables helps with spelling longer words.",
        columns: ["2 syllables", "3 syllables", "4+ syllables"],
        items: [
          { label: "people" }, { label: "because" }, { label: "wonderful" }, { label: "responsible" },
          { label: "grateful" }, { label: "immediately" }, { label: "curious" }, { label: "disappointed" },
          { label: "together" }, { label: "education" },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "High Frequency Words in a Story",
        instruction: "Write a story (6–8 sentences) that includes at least 10 high frequency words from all six sets. Underline each high frequency word. Write a list of them at the end.",
        prompts: [
          { text: "My story:", type: "lines", lines: 10 },
          { text: "High frequency words I used:", type: "lines", lines: 2 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: High Frequency Word Word Wall",
        content: "Create a 'Word Wall' in your learning space. Write every high frequency word you have learned on a separate card. Group them by set or by difficulty. Every day this week, pick 5 cards at random and use them in sentences. By the end of the week, try to write a sentence using ALL 5 in ONE sentence (the sillier the better). Display your favourite sentences on the wall.",
      },
      // ── CONSOLIDATING (41–80) ──────────────────────────────────────
      // 41
      {
        type: "circle-correct",
        title: "Spell It Right (Set G)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "She was ___.", options: ["embarased", "embarrassed", "embarrased"] },
          { prompt: "He ___ well.", options: ["preformed", "performed", "performd"] },
          { prompt: "It was a ___ experience.", options: ["memorable", "memorible", "memerable"] },
          { prompt: "She had a ___.", options: ["conversation", "conversasion", "convesation"] },
          { prompt: "He was ___.", options: ["determined", "determind", "determinned"] },
        ],
      },
      // 42
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set G)",
        instruction: "Practise these words.",
        prompts: [
          { text: "embarrassed → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "performed → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "memorable → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "conversation → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "determined → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "achievement → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "environment → Write: ___    Check: ___", type: "lines", lines: 1 },
        ],
      },
      // 43
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set G)",
        instruction: "Choose the best word: embarrassed, performed, memorable, conversation, determined, achievement, environment.",
        sentences: [
          { text: "She had a long ___ with her teacher.", blanks: ["conversation"] },
          { text: "Winning the prize was a great ___.", blanks: ["achievement"] },
          { text: "He was ___ to finish the race.", blanks: ["determined"] },
          { text: "It was a ___ day that she would never forget.", blanks: ["memorable"] },
          { text: "We must protect the natural ___.", blanks: ["environment"] },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Proofread: Fix the Spelling Errors",
        instruction: "Read the paragraph. Find and correct all high frequency spelling mistakes. Write the corrected version.\n\nShe was determind to do well. She had studied every day becuase she knew the test was important. Peeple told her she was brillant, but she still felt worrid. When the results came, she was releived — and greatful for all the hard work.",
        parentTip: "Ask your child to read the passage aloud slowly — spelling errors often sound wrong when spoken.",
        prompts: [
          { text: "Corrected paragraph:", type: "lines", lines: 6 },
          { text: "Words I corrected:", type: "lines", lines: 2 },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Spelling Strategies Toolkit",
        content: "You have many spelling strategies to choose from: (1) Look, Cover, Write, Check. (2) Break the word into syllables: im-me-di-ate-ly. (3) Find a word within the word: there is a 'friend' in 'friendly'. (4) Use a mnemonic. (5) Say the word in a funny way to remember the spelling: 'Wed-nes-day' instead of 'Wensday'. (6) Connect it to a word you know: 'necessary' has one 'c' (collar) and two 's's (socks). Use whichever strategy works best for each word.",
      },
      // 46
      {
        type: "open-response",
        title: "Apply Spelling Strategies",
        instruction: "For each tricky word, choose and apply the best spelling strategy. Write the strategy you used.",
        prompts: [
          { text: "necessary: Strategy: ___  Write it 3 times: ___ ___ ___", type: "lines", lines: 1 },
          { text: "disappointed: Strategy: ___  Write it 3 times: ___ ___ ___", type: "lines", lines: 1 },
          { text: "environment: Strategy: ___  Write it 3 times: ___ ___ ___", type: "lines", lines: 1 },
          { text: "embarrassed: Strategy: ___  Write it 3 times: ___ ___ ___", type: "lines", lines: 1 },
        ],
      },
      // 47
      {
        type: "matching",
        title: "Match the Word to Its Spelling Pattern or Memory Trick",
        instruction: "Draw a line from each word to the memory strategy that helps most.",
        left: ["necessary", "because", "friend", "Wednesday", "thought"],
        right: [
          "Big Elephants Can Always Understand Small Elephants",
          "Say it as Wed-nes-day",
          "1 Collar, 2 Socks (1c, 2s)",
          "The word 'end' is at the end of this word",
          "Sounds like 'thort' but spelled with ough",
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Write All Your Hardest Words from Memory",
        instruction: "Without looking back through the worksheet, write as many high frequency words as you can remember from ALL sets. Set a 5-minute timer. Count how many you write correctly.",
        prompts: [
          { text: "My words (from memory):", type: "lines", lines: 8 },
          { text: "Total I wrote: ___  Total correct: ___", type: "lines", lines: 1 },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "High Frequency Words in Context: True or False?",
        instruction: "Read each sentence. Circle TRUE if the high frequency words are all spelled correctly, FALSE if any are wrong.",
        statements: [
          { text: "She was determined to succeed becuase she had worked so hard.", answer: false },
          { text: "It was a wonderful and memorable event for all the people who came.", answer: true },
          { text: "He was embarased when he forgot his lines on stage.", answer: false },
          { text: "She felt relieved and grateful after the difficult conversation.", answer: true },
          { text: "It is necessary to take responsibility for your own education.", answer: true },
        ],
      },
      // 50
      {
        type: "home-activity",
        title: "Sight Word Flashcard Games",
        instruction: "Use flashcards to practise your high frequency words every day this week.",
        parentTip: "Little and often is most effective for sight word memorisation. Even 5–10 minutes of flashcard practice 3–4 times a week will show measurable improvement within two weeks.",
        suggestions: [
          "Play Beat the Clock: how many cards can you read in 30 seconds?",
          "Memory pairs: write each word on two cards and play matching",
          "Spell it in the air using your finger while saying each letter aloud",
          "Find the word in a book — tally how many times you spot each word",
        ],
      },
      // 51
      {
        type: "circle-correct",
        title: "Spell It Right (Set H)",
        instruction: "Circle the correctly spelled word in each row.",
        questions: [
          { prompt: "She was ___.", options: ["independant", "independent", "independint"] },
          { prompt: "He showed great ___.", options: ["perseverence", "perseverance", "perserverance"] },
          { prompt: "They had a ___.", options: ["discussion", "discusion", "diskussion"] },
          { prompt: "She was ___.", options: ["confident", "confedant", "confedent"] },
          { prompt: "He was ___.", options: ["considerate", "considarate", "considerate"] },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Look, Cover, Write, Check (Set H)",
        instruction: "Practise these words.",
        prompts: [
          { text: "independent → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "perseverance → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "discussion → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "confident → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "considerate → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "community → Write: ___    Check: ___", type: "lines", lines: 1 },
          { text: "experience → Write: ___    Check: ___", type: "lines", lines: 1 },
        ],
      },
      // 53
      {
        type: "fill-in-blank",
        title: "Fill in the High Frequency Word (Set H)",
        instruction: "Choose the best word: independent, perseverance, discussion, confident, considerate, community, experience.",
        sentences: [
          { text: "She grew more ___ with every performance.", blanks: ["confident"] },
          { text: "The class had a lively ___ about the topic.", blanks: ["discussion"] },
          { text: "His ___ eventually paid off when he learned to ride.", blanks: ["perseverance"] },
          { text: "She was always ___ of other people's feelings.", blanks: ["considerate"] },
          { text: "Living abroad was a wonderful ___.", blanks: ["experience"] },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Spelling in Context: Long Paragraph",
        instruction: "Write a paragraph (6–7 sentences) on the topic: 'Being part of a community'. Use at least 6 high frequency words from Sets G and H. Underline each one.",
        prompts: [
          { text: "My paragraph:", type: "lines", lines: 9 },
          { text: "High frequency words I used:", type: "lines", lines: 1 },
        ],
      },
      // 55
      {
        type: "sorting",
        title: "Sort Words by Difficulty Level",
        instruction: "Sort these high frequency words by how confident you feel about spelling them. BE HONEST!",
        parentTip: "Self-evaluation of spelling confidence is a valuable metacognitive skill. Encourage honesty over self-consciousness.",
        columns: ["I can spell this easily", "I sometimes get this right", "I need more practice"],
        items: [
          { label: "friend" }, { label: "necessary" }, { label: "because" }, { label: "perseverance" },
          { label: "together" }, { label: "embarrassed" }, { label: "people" }, { label: "independent" },
          { label: "grateful" }, { label: "environment" },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Targeted Practice: Your Personal Hard List",
        instruction: "Take the words from the 'I need more practice' column. Do Look, Cover, Write, Check for each one THREE times. Then test yourself by covering all your practice work and writing each one from memory.",
        prompts: [
          { text: "Word 1 practice (x3): ___ ___ ___  Final test: ___", type: "lines", lines: 1 },
          { text: "Word 2 practice (x3): ___ ___ ___  Final test: ___", type: "lines", lines: 1 },
          { text: "Word 3 practice (x3): ___ ___ ___  Final test: ___", type: "lines", lines: 1 },
          { text: "Word 4 practice (x3): ___ ___ ___  Final test: ___", type: "lines", lines: 1 },
          { text: "Word 5 practice (x3): ___ ___ ___  Final test: ___", type: "lines", lines: 1 },
        ],
      },
      // 57
      {
        type: "multiple-choice",
        title: "Choose the Correctly Spelled Word in Context",
        instruction: "Choose the correctly spelled version of each underlined word.",
        questions: [
          { prompt: "She was (grateful / greatful) for the opportunity.", options: ["grateful", "greatful"] },
          { prompt: "It was (necessary / nessecary) to act quickly.", options: ["necessary", "nessecary"] },
          { prompt: "His (perseverence / perseverance) was remarkable.", options: ["perseverence", "perseverance"] },
          { prompt: "She felt (embarased / embarrassed) by the mistake.", options: ["embarased", "embarrassed"] },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Write a Formal Letter Using High Frequency Words",
        instruction: "Write a short formal letter (6–8 sentences) to a school principal requesting something (e.g. a class pet, a special event, an excursion). Use at least 8 high frequency words from across all sets. Underline each one.",
        parentTip: "Letter writing is a valuable real-world task that embeds high frequency words in meaningful context.",
        prompts: [
          { text: "Dear ___,", type: "lines", lines: 1 },
          { text: "My letter:", type: "lines", lines: 9 },
          { text: "Yours sincerely,\n___", type: "lines", lines: 1 },
          { text: "High frequency words I used:", type: "lines", lines: 1 },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Spelling Test: Write From Dictation",
        instruction: "Have someone read these sentences aloud to you. Write them down as they are read. Then check your spelling.\n\n1. She was determined to improve because she knew it was necessary.\n2. People were grateful for the generous and responsible community effort.\n3. He had a wonderful, memorable conversation with an independent thinker.",
        parentTip: "Dictation is one of the most effective ways to assess whether high frequency words have been truly internalised. Praise the process, not just the result.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
          { text: "Words I got wrong and need to practise more:", type: "lines", lines: 2 },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip",
        title: "Tip: Using High Frequency Words Accurately",
        content: "Knowing how to SPELL a word is only half the job — you also need to know what it MEANS and how to USE it correctly in a sentence. For each new high frequency word you learn, ask: (1) What does it mean? (2) What part of speech is it (noun, verb, adjective, etc.)? (3) Can I use it in a sentence that makes sense? (4) Can I find it in a book I am reading? Using words actively — not just spelling them — is what builds a rich vocabulary.",
      },
      // 61 — SPARK at ~60
      {
        type: "spark",
        title: "Spark: High Frequency Word Bingo",
        content: "Create a bingo grid (5x5 squares). Write a high frequency word in each square using words from all sets. Play with a family member: one person calls out definitions or uses the word in a sentence, the other finds and marks the word on their grid. First to mark 5 in a row wins! Make multiple copies and play repeatedly.",
      },
      // 62
      {
        type: "open-response",
        title: "Write Definitions in Your Own Words",
        instruction: "Write your own definition for each word. Do NOT copy from a dictionary — use your own words to show you understand the meaning.",
        prompts: [
          { text: "perseverance: ___", type: "lines", lines: 2 },
          { text: "independent: ___", type: "lines", lines: 2 },
          { text: "considerate: ___", type: "lines", lines: 2 },
          { text: "environment: ___", type: "lines", lines: 2 },
        ],
      },
      // 63
      {
        type: "fill-in-blank",
        title: "High Frequency Words: Challenging Cloze Passage",
        instruction: "Complete the passage with the best high frequency word. Some choices have more than one possible answer — choose the most precise one.\n\nWords: determined, conversation, necessary, grateful, embarrassed, environment, experience, independent.",
        sentences: [
          { text: "The young scientist was ___ to protect the natural ___ around her school. She had a long ___ with her teacher about what was ___. It was a humbling ___ that made her feel both ___ and proud of her ___ thinking.", blanks: ["determined", "environment", "conversation", "necessary", "experience", "grateful", "independent"] },
        ],
      },
      // 64
      {
        type: "sorting",
        title: "Sort Words by Part of Speech",
        instruction: "Sort these high frequency words by their most common part of speech.",
        parentTip: "Some words can be more than one part of speech — sort them by their most common use.",
        columns: ["Noun", "Verb", "Adjective", "Adverb"],
        items: [
          { label: "environment" }, { label: "decided" }, { label: "confident" }, { label: "immediately" },
          { label: "experience" }, { label: "performed" }, { label: "grateful" }, { label: "truly" },
          { label: "achievement" }, { label: "explained" }, { label: "brilliant" }, { label: "usually" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Build Word Families",
        instruction: "Many high frequency words belong to word families. Complete the word family for each root word.",
        prompts: [
          { text: "appreciate → appreciating / appreciated / ___tion / ___ive", type: "lines", lines: 1 },
          { text: "determine → determining / determined / ___ation / ___d", type: "lines", lines: 1 },
          { text: "perform → performing / performed / ___ance / ___er", type: "lines", lines: 1 },
          { text: "responsible → ___ibility / ___ibly / ___ness", type: "lines", lines: 1 },
        ],
      },
      // 66
      {
        type: "true-false",
        title: "Word Meaning: True or False?",
        instruction: "Circle TRUE or FALSE for each meaning statement.",
        statements: [
          { text: "'Perseverance' means giving up when things get hard.", answer: false },
          { text: "'Independent' means being able to do things by yourself.", answer: true },
          { text: "'Considerate' means thinking of others' feelings.", answer: true },
          { text: "'Embarrassed' means feeling proud and happy.", answer: false },
          { text: "'Determined' means committed to achieving something.", answer: true },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Write a Personal Narrative Using High Frequency Words",
        instruction: "Write a personal narrative (8–10 sentences) about a time when you showed perseverance or determination. Use at least 10 high frequency words from all sets. Underline each one.",
        prompts: [
          { text: "My narrative:", type: "lines", lines: 12 },
          { text: "High frequency words I used:", type: "lines", lines: 2 },
        ],
      },
      // 68
      {
        type: "matching",
        title: "Match the High Frequency Word to Its Antonym",
        instruction: "Draw a line from each word to its antonym (opposite meaning).",
        left: ["confident", "determined", "grateful", "independent", "generous"],
        right: [
          "dependent",
          "ungrateful",
          "insecure",
          "halfhearted",
          "selfish",
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Use Antonyms in Sentences",
        instruction: "Write one sentence using the word, then write the opposite meaning using an antonym.",
        prompts: [
          { text: "confident: ___\nAntonym sentence: ___", type: "lines", lines: 3 },
          { text: "generous: ___\nAntonym sentence: ___", type: "lines", lines: 3 },
        ],
      },
      // 70
      {
        type: "home-activity",
        title: "Word Spotting in Real Texts",
        instruction: "Over the next week, keep a tally of every high frequency word you spot in books, magazines, signs, and food packaging.",
        parentTip: "Connecting spelling practice to real-world reading is one of the most effective strategies for consolidation. Even casual 'word spotting' builds fluency.",
        suggestions: [
          "Make a tally chart with 10 high frequency words as column headers",
          "Every time you see one in real text, add a tally mark",
          "At the end of the week, count which words appeared most often",
          "Write your top 5 most spotted words in sentences of your own",
        ],
      },
      // 71
      {
        type: "open-response",
        title: "High Frequency Words in Different Text Types",
        instruction: "Write one sentence of each text type, using the given high frequency word.\n\nWord to use: 'determined'",
        prompts: [
          { text: "Narrative sentence (story): ___", type: "lines", lines: 2 },
          { text: "Informative sentence (fact): ___", type: "lines", lines: 2 },
          { text: "Persuasive sentence (argument): ___", type: "lines", lines: 2 },
        ],
      },
      // 72
      {
        type: "sorting",
        title: "Sort These Words: Can I Spell From Memory?",
        instruction: "Without looking back through the worksheet, sort these words into 'I can spell this from memory' or 'I still need to check'.",
        columns: ["Spell from memory", "Still need to check"],
        items: [
          { label: "friend" }, { label: "necessary" }, { label: "perseverance" }, { label: "thought" },
          { label: "environment" }, { label: "because" }, { label: "embarrassed" }, { label: "people" },
          { label: "independent" }, { label: "together" }, { label: "conversation" }, { label: "grateful" },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Write and Self-Mark a Spelling Test",
        instruction: "Write 20 high frequency words from memory (across all sets). Then check your spelling against the worksheet. Circle any errors and practise those words again using Look, Cover, Write, Check.",
        prompts: [
          { text: "My 20 words:", type: "lines", lines: 7 },
          { text: "Errors I found: ___", type: "lines", lines: 2 },
          { text: "Corrected words (Look, Cover, Write, Check):", type: "lines", lines: 3 },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Write a Story That Uses 15 High Frequency Words",
        instruction: "Write a story (10–12 sentences) using at least 15 high frequency words from across all sets. Underline and number each one. Then list them at the end.",
        prompts: [
          { text: "My story:", type: "lines", lines: 14 },
          { text: "My 15 high frequency words:", type: "lines", lines: 3 },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Reading for Vocabulary",
        content: "One of the most powerful ways to build high frequency word knowledge is to read widely and often. Every time you read, you see these words in context — which helps your brain understand their meaning AND their spelling more deeply than any worksheet alone can. Aim to read for 20 minutes every day. If you see a word you don't know, look it up. If you see a high frequency word spelled differently to how you thought, notice it — that's learning in action.",
      },
      // 76
      {
        type: "open-response",
        title: "Investigate Word Families",
        instruction: "Choose 3 high frequency words. For each one, find as many related words (same root or same family) as you can. Write at least 3 related words for each.",
        prompts: [
          { text: "Word 1: ___\nFamily words: ___", type: "lines", lines: 2 },
          { text: "Word 2: ___\nFamily words: ___", type: "lines", lines: 2 },
          { text: "Word 3: ___\nFamily words: ___", type: "lines", lines: 2 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Write with Precision: Choose the Most Precise Word",
        instruction: "For each sentence, choose the most precise high frequency word and explain why it is better than the alternative.",
        prompts: [
          { text: "She felt ___ / ___ about the mistake. (grateful / embarrassed). Better choice: ___  Why: ___", type: "lines", lines: 2 },
          { text: "He showed ___ / ___ in completing the challenge. (perseverance / determination). Better choice: ___  Why: ___", type: "lines", lines: 2 },
          { text: "It was a ___ / ___ event. (memorable / wonderful). Better choice: ___  Why: ___", type: "lines", lines: 2 },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Spelling Audit: How Many Do I Know?",
        instruction: "Cover all previous pages. Have someone dictate these 15 words to you one at a time: friend, thought, through, people, because, different, together, several, beautiful, worried, necessary, brilliant, grateful, determined, perseverance. Write each one, then check.",
        prompts: [
          { text: "My 15 words:", type: "lines", lines: 5 },
          { text: "Score: ___ / 15", type: "lines", lines: 1 },
          { text: "Words to keep practising:", type: "lines", lines: 2 },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Create a High Frequency Word Study Guide",
        instruction: "Create a personal study guide for the 10 high frequency words you find most challenging. For each word: correct spelling, a memory trick, a definition, and an example sentence.",
        prompts: [
          { text: "My 10 hardest words:", type: "lines", lines: 2 },
          { text: "Study guide entries (use both sides of the page if needed):", type: "lines", lines: 16 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Teach Someone Else",
        content: "Choose 10 high frequency words that you now know well. Teach them to a family member or younger sibling who might not know them. Use: flashcards you make yourself, the Look/Cover/Write/Check method, your mnemonic tricks, and a mini-quiz at the end. Teaching something is the best way to really know it. How many did your learner get right?",
      },
      // ── EXTENDING (81–100) ────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Reflective Questions: My Spelling Journey",
        instruction: "Answer each question in full sentences.",
        prompts: [
          { text: "Which spelling strategy works best for you? Why?", type: "lines", lines: 3 },
          { text: "How has your spelling improved since the start of this worksheet?", type: "lines", lines: 3 },
          { text: "Which words do you still find difficult? What will you do to master them?", type: "lines", lines: 3 },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Etymological Investigation: Where Do These Words Come From?",
        instruction: "Research the origin of 3 high frequency words from this worksheet. For each one: find out what language it originally comes from, what it originally meant, and how the meaning has changed (if at all).",
        parentTip: "Etymology (the study of word origins) is fascinating and builds a deeper understanding of why English has so many irregular spellings. Use a dictionary with etymology notes if available.",
        prompts: [
          { text: "Word 1: ___  Origin language: ___  Original meaning: ___  How it has changed: ___", type: "lines", lines: 2 },
          { text: "Word 2: ___  Origin language: ___  Original meaning: ___  How it has changed: ___", type: "lines", lines: 2 },
          { text: "Word 3: ___  Origin language: ___  Original meaning: ___  How it has changed: ___", type: "lines", lines: 2 },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Advanced Vocabulary: Use Synonyms for High Frequency Words",
        instruction: "For each high frequency word, write 3 synonyms of increasing sophistication (from simple to more advanced/formal). Then write a sentence using the most sophisticated synonym.",
        prompts: [
          { text: "wonderful: (simple) ___  (medium) ___  (formal) ___\nSentence: ___", type: "lines", lines: 2 },
          { text: "determined: (simple) ___  (medium) ___  (formal) ___\nSentence: ___", type: "lines", lines: 2 },
          { text: "grateful: (simple) ___  (medium) ___  (formal) ___\nSentence: ___", type: "lines", lines: 2 },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Write an Essay Using Advanced High Frequency Words",
        instruction: "Write a 3-paragraph essay (6–8 sentences per paragraph) on the topic: 'The qualities that make a good person'. Each paragraph should discuss a different quality. Use at least 15 high frequency words from all sets. Label each in the margin.",
        parentTip: "Essay writing is an extending task. Celebrate the attempt and focus feedback on structure and word choice, not perfection.",
        prompts: [
          { text: "Paragraph 1 (quality 1):", type: "lines", lines: 8 },
          { text: "Paragraph 2 (quality 2):", type: "lines", lines: 8 },
          { text: "Paragraph 3 (quality 3):", type: "lines", lines: 8 },
          { text: "High frequency words I used:", type: "lines", lines: 2 },
        ],
      },
      // 85
      {
        type: "multiple-choice",
        title: "Vocabulary Precision: Choose the Most Appropriate Word",
        instruction: "Choose the high frequency word that is most precise and appropriate for each context.",
        questions: [
          { prompt: "She pushed through the difficulty without stopping. The best word is:", options: ["determined", "excited", "worried", "curious"] },
          { prompt: "He thought deeply about someone else's feelings before acting. The best word is:", options: ["independent", "considerate", "responsible", "brilliant"] },
          { prompt: "It was an unforgettable, once-in-a-lifetime experience. The best word is:", options: ["necessary", "memorable", "wonderful", "embarrassed"] },
          { prompt: "She could do the work without needing any help. The best word is:", options: ["confident", "independent", "determined", "grateful"] },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Research: Why English Spelling Is Irregular",
        instruction: "Research and write a short explanation (6–8 sentences) of why English has so many words with irregular spellings that don't match their pronunciation. Include: the influence of other languages, historical changes, and one specific example.",
        parentTip: "English spelling is complex because the language has absorbed words from Latin, French, Old Norse, Anglo-Saxon and many other languages — each bringing its own spelling rules.",
        prompts: [
          { text: "My explanation:", type: "lines", lines: 10 },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Create a High Frequency Word Quiz",
        instruction: "Write a 10-question quiz on high frequency words. Include: 3 spelling questions (circle the correct spelling), 3 meaning questions (choose the correct definition), 3 in-context questions (choose the correct word for the sentence), and 1 challenge question. Write the answer key separately.",
        prompts: [
          { text: "My 10 quiz questions:", type: "lines", lines: 12 },
          { text: "Answer key:", type: "lines", lines: 4 },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Write a Story That Demonstrates Mastery",
        instruction: "Write a polished story (15–20 sentences) that demonstrates your complete mastery of high frequency word spelling and meaning. Every sentence must include at least one high frequency word used correctly in context. Underline and number each one. Aim to use 20 different words across all sets.",
        prompts: [
          { text: "My story:", type: "lines", lines: 22 },
          { text: "Count: ___ different high frequency words used", type: "lines", lines: 1 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Analyse Your Own Spelling Patterns",
        instruction: "Look back through all your spelling practice in this worksheet. Answer these analytical questions.",
        prompts: [
          { text: "Which types of words do I find hardest to spell? (e.g. long words, words with silent letters, etc.)", type: "lines", lines: 3 },
          { text: "Which spelling strategies have been most effective for me?", type: "lines", lines: 3 },
          { text: "What pattern do I notice in my errors?", type: "lines", lines: 3 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: High Frequency Words in Formal vs Informal Writing",
        content: "The same high frequency words appear in both formal and informal writing, but informal writing might shorten or change them. In formal writing: 'I am grateful for your assistance.' In informal writing (text message or diary): 'So grateful for ur help!' Good writers know when to use formal spelling and vocabulary, and when informal is appropriate. In school work, always use formal spelling — save informal writing for personal texts and messages.",
      },
      // 91
      {
        type: "sorting",
        title: "Formal or Informal Register? Sort These Sentences",
        instruction: "Read each sentence. Sort into 'Formal register' or 'Informal register'. Notice how high frequency words appear in both.",
        columns: ["Formal register", "Informal register"],
        items: [
          { label: "I am writing to express my sincere gratitude for your generous support." },
          { label: "Thanks so much — you're truly the best!" },
          { label: "It is necessary to complete the form before the deadline." },
          { label: "Gotta finish this before tomorrow or I'm in trouble!" },
          { label: "She demonstrated remarkable perseverance throughout the process." },
          { label: "She just kept going — honestly amazing." },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Write the Same Content in Formal and Informal Registers",
        instruction: "Write about this topic: 'Why I am grateful for my education.' Write once formally (for a school report) and once informally (for a diary entry). Use at least 5 high frequency words in each version.",
        prompts: [
          { text: "Formal version:", type: "lines", lines: 5 },
          { text: "Informal version:", type: "lines", lines: 5 },
          { text: "High frequency words in formal: ___  Informal: ___", type: "lines", lines: 1 },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Create a Word Learning Resource",
        instruction: "Design a resource to help someone learn 10 high frequency words. Your resource should include: the words with their definitions, a spelling strategy for each, example sentences, and at least one game or activity. Make it look attractive and easy to follow.",
        prompts: [
          { text: "My resource:", type: "lines", lines: 18 },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "High Frequency Words Across Subject Areas",
        instruction: "Some high frequency words appear especially often in specific subjects. Write 3 sentences that might appear in: (a) a maths problem, (b) a science explanation, (c) a history text — each using at least 2 high frequency words from this worksheet.",
        prompts: [
          { text: "Maths sentence: ___", type: "lines", lines: 2 },
          { text: "Science sentence: ___", type: "lines", lines: 2 },
          { text: "History sentence: ___", type: "lines", lines: 2 },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Final Mastery Check: Dictation Passage",
        instruction: "Have someone read this passage aloud to you at a normal pace. Write it down as they read. Then check every word.\n\n'She was determined to do well in the conversation, grateful for the opportunity, and confident in her preparation. Although she felt a little embarrassed at first, her perseverance and independent spirit carried her through. It was, without doubt, a truly memorable experience.'",
        parentTip: "Dictation at this level — a complex multi-sentence passage — is a genuine test of high frequency word internalisation. Praise every correct word, not just total accuracy.",
        prompts: [
          { text: "My dictation:", type: "lines", lines: 5 },
          { text: "Words I need to practise further:", type: "lines", lines: 2 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Write Your Own Complex Dictation Passage",
        instruction: "Write a passage (4–5 sentences) using at least 12 high frequency words from all sets. Make it suitable for dictation practice. Write the answer key separately.",
        prompts: [
          { text: "My passage:", type: "lines", lines: 6 },
          { text: "High frequency words used (answer key):", type: "lines", lines: 2 },
        ],
      },
      // 97
      {
        type: "true-false",
        title: "Advanced Vocabulary Statements",
        instruction: "Circle TRUE or FALSE for each advanced statement.",
        statements: [
          { text: "High frequency words make up about 50% of everyday reading material.", answer: true },
          { text: "Knowing how to spell a word is the same as knowing how to use it.", answer: false },
          { text: "English spelling irregularities often come from the language absorbing words from other languages.", answer: true },
          { text: "Formal and informal writing always use the same vocabulary.", answer: false },
          { text: "Building word families helps us understand and spell related words more easily.", answer: true },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Design a Personal Spelling Programme",
        instruction: "Design a 4-week personal spelling programme for yourself. Week by week, plan: which words to focus on, which strategy to use, how you will practise, and how you will test yourself.",
        prompts: [
          { text: "Week 1: Words: ___  Strategy: ___  Practice: ___  Test: ___", type: "lines", lines: 2 },
          { text: "Week 2: Words: ___  Strategy: ___  Practice: ___  Test: ___", type: "lines", lines: 2 },
          { text: "Week 3: Words: ___  Strategy: ___  Practice: ___  Test: ___", type: "lines", lines: 2 },
          { text: "Week 4: Words: ___  Strategy: ___  Practice: ___  Test: ___", type: "lines", lines: 2 },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflection: My High Frequency Word Journey",
        instruction: "Write a reflective paragraph about your learning journey through this worksheet. Include: what you learned about how to learn spelling, which strategies worked best for you, which words you are most proud of mastering, and what you want to continue working on.",
        prompts: [
          { text: "My reflection:", type: "lines", lines: 10 },
        ],
      },
      // 100 — SPARK
      {
        type: "spark",
        title: "Spark: Become a Spelling Champion",
        content: "Set yourself a 4-week spelling challenge. Goal: master ALL high frequency words from this worksheet (all 8 sets). Method: 10 minutes of practice daily, using whatever strategy works best for you. Test yourself at the end of each week using dictation sentences. Create a progress chart and mark off each word as you master it. At the end of 4 weeks, have someone give you a full dictation using 20 words drawn randomly from all sets. Aim for 18 or more correct. YOU are the spelling champion!",
      },
    ],
  },
];

export function getYear2EnglishWorksheet(
  slug: string
): WorksheetItem | undefined {
  return year2EnglishWorksheets.find((w) => w.slug === slug);
}
