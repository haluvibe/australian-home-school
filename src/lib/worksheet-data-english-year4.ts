import type { WorksheetItem } from "./worksheet-types";

export const year4EnglishWorksheets: WorksheetItem[] = [
  {
    slug: "synonyms-antonyms",
    title: "Synonyms & Antonyms",
    strand: "Language",
    description:
      "Explore words with similar and opposite meanings to build a richer vocabulary.",
    learningGuide: {
      concept:
        "A synonym is a word that means the same (or nearly the same) as another word. An antonym means the opposite. Building a strong vocabulary means knowing many synonyms so you can choose the most precise word for your writing.",
      activation:
        "Ask your child: 'What is another word for happy? What is the opposite of happy?' Brainstorm together for two minutes before starting the worksheet.",
      check:
        "After the worksheet, ask your child to use one synonym and one antonym pair in a sentence of their own.",
    },
    lesson: {
      title: "The Word Swap Game",
      objective:
        "Identify synonyms and antonyms for common adjectives, verbs and nouns, and choose the best word for a given context.",
      materials: [
        "This worksheet",
        "A pencil",
        "A dictionary or thesaurus (print or online)",
      ],
      intro: {
        title: "Hot and Cold",
        script:
          "Let us play a quick word game. I am going to say a word, and you give me a word that means the same. Ready? Big. What word means the same as big? Great — large, huge, enormous all work! Now give me the opposite of big. Small, tiny, miniature. Those opposites are called antonyms. Words that mean the same are called synonyms. Today we are going to become word detectives and find synonyms and antonyms all through your writing.",
        action:
          "Write the words BIG and SMALL on a piece of paper and ask your child to add two more synonyms for each. Keep this visible as a warm-up reference.",
      },
      mainActivity: {
        title: "The Synonym Ladder",
        script:
          "In English we have many words for the same idea, and some are stronger or gentler than others. Think of the word angry. We could say cross, upset, furious, livid — each one is a little bit stronger. This is called shades of meaning. When you write, choosing the right shade makes your writing more interesting. Let us work through the activities on the worksheet together. For each word, think about whether the options mean the same thing or the opposite, and then ask yourself — is there a shade of meaning difference?",
        action:
          "Work through activities 1 and 2 with your child, discussing the shade of meaning for at least one synonym pair such as happy versus ecstatic.",
      },
      wrapUp: {
        title: "My Personal Thesaurus",
        script:
          "You did a fantastic job today! Here is something writers do — they keep a personal thesaurus. On the back of a piece of paper, write three words you use a lot in your writing, like said, nice, or good. Then find three synonyms for each. Next time you write a story, check your personal thesaurus first!",
        action:
          "Help your child start a My Favourite Words notebook page with today's words.",
      },
      parentTip:
        "Read a picture book or chapter together and pause to ask: Could the author have used a different word here? What would change? This reinforces vocabulary in a natural, low-pressure way.",
      extension:
        "Challenge your child to rewrite a paragraph from a recent piece of their own writing, replacing at least four words with stronger synonyms from a thesaurus.",
      resources: [
        {
          title: "ReadWriteThink — Word Wizard Interactive",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives/word-wizard",
          description: "Interactive word activities for building vocabulary.",
        },
        {
          title: "ABC Education — Learn English",
          url: "https://www.abc.net.au/education/learn-english/",
          description:
            "Vocabulary features with word origins and usage examples from ABC Education.",
        },
        {
          title: "Khan Academy — Synonyms and Antonyms",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:vocabulary/xe2c54a99ede11c03:synonyms-and-antonyms/e/synonyms-and-antonyms",
          description: "Practice exercises for Year 4 level vocabulary.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "matching" as const,
        title: "Match the Synonym (Set A)",
        instruction: "Draw a line to match each word on the left with its synonym on the right.",
        parentTip: "Read each word aloud together and ask your child to make a sentence with both before matching.",
        left: ["angry", "brave", "tired", "funny", "quick"],
        right: ["swift", "courageous", "furious", "amusing", "weary"],
      },
      // 2
      {
        type: "sorting" as const,
        title: "Sort: Synonym or Antonym? (COLD)",
        instruction: "The base word is COLD. Write each word in the correct column.",
        columns: ["Synonym (same as COLD)", "Antonym (opposite of COLD)"],
        items: [
          { label: "freezing" }, { label: "warm" }, { label: "chilly" }, { label: "hot" },
          { label: "icy" }, { label: "boiling" }, { label: "frosty" }, { label: "scorching" },
        ],
      },
      // 3
      {
        type: "circle-correct" as const,
        title: "Synonym or Antonym? (Set A)",
        instruction: "Read each pair. Circle S if the words are synonyms or A if they are antonyms.",
        parentTip: "Ask your child to use both words in sentences to confirm their relationship.",
        questions: [
          { prompt: "enormous — tiny", options: ["S", "A"] },
          { prompt: "swift — fast", options: ["S", "A"] },
          { prompt: "brave — timid", options: ["S", "A"] },
          { prompt: "weary — tired", options: ["S", "A"] },
          { prompt: "furious — calm", options: ["S", "A"] },
          { prompt: "amusing — funny", options: ["S", "A"] },
        ],
      },
      // 4
      {
        type: "fill-in-blank" as const,
        title: "Fill in the Synonym",
        instruction: "Choose a synonym from the box to complete each sentence. Word bank: chilly, enormous, swift, courageous, amusing.",
        parentTip: "Encourage your child to read the sentence aloud with each option before choosing.",
        sentences: [
          { text: "The ___ elephant could not fit through the gate.", blanks: ["enormous"] },
          { text: "The ___ breeze made us reach for our jumpers.", blanks: ["chilly"] },
          { text: "She was ___ enough to dive into the deep end.", blanks: ["courageous"] },
          { text: "The clown's ___ tricks made everyone laugh.", blanks: ["amusing"] },
          { text: "The ___ cheetah disappeared in seconds.", blanks: ["swift"] },
        ],
      },
      // 5
      {
        type: "matching" as const,
        title: "Match the Antonym (Set A)",
        instruction: "Draw a line to match each word with its antonym.",
        left: ["begin", "loud", "happy", "ancient", "smooth"],
        right: ["rough", "modern", "end", "quiet", "sad"],
      },
      // 6
      {
        type: "true-false" as const,
        title: "True or False: Synonyms",
        instruction: "Read each statement. Circle True or False.",
        parentTip: "If your child is unsure, suggest looking the words up in a dictionary.",
        statements: [
          { text: "The words 'huge' and 'enormous' are synonyms.", answer: true },
          { text: "The words 'hot' and 'cold' are synonyms.", answer: false },
          { text: "The words 'fast' and 'rapid' are synonyms.", answer: true },
          { text: "The words 'begin' and 'finish' are synonyms.", answer: false },
          { text: "The words 'frightened' and 'scared' are synonyms.", answer: true },
        ],
      },
      // 7
      {
        type: "multiple-choice" as const,
        title: "Best Synonym (Set A)",
        instruction: "Choose the best synonym for the underlined word in each sentence.",
        questions: [
          { prompt: "The puppy was very small.", options: ["tiny", "huge", "brave", "fast"], answer: "tiny" },
          { prompt: "The film was quite dull.", options: ["exciting", "boring", "funny", "loud"], answer: "boring" },
          { prompt: "She spoke in a soft voice.", options: ["loud", "harsh", "gentle", "angry"], answer: "gentle" },
          { prompt: "The path was steep.", options: ["flat", "sharp", "crooked", "winding"], answer: "sharp" },
        ],
      },
      // 8
      {
        type: "sorting" as const,
        title: "Sort: Synonym or Antonym? (HAPPY)",
        instruction: "The base word is HAPPY. Sort each word into the correct column.",
        columns: ["Synonym (same as HAPPY)", "Antonym (opposite of HAPPY)"],
        items: [
          { label: "cheerful" }, { label: "miserable" }, { label: "joyful" }, { label: "gloomy" },
          { label: "pleased" }, { label: "upset" }, { label: "content" }, { label: "sorrowful" },
        ],
      },
      // 9
      {
        type: "open-response" as const,
        title: "Context Clues (Set A)",
        instruction: "Read each sentence. Use context clues to work out what the underlined word means, then write a synonym.",
        prompts: [
          { text: "1. The puppy was so timid that it hid under the bed whenever strangers arrived.\n   The word means:                    Synonym:", type: "lines" as const, lines: 2 },
          { text: "2. Mia was elated when she won the art competition.\n   The word means:                    Synonym:", type: "lines" as const, lines: 2 },
          { text: "3. The ancient bridge looked rickety and dangerous.\n   The word means:                    Synonym:", type: "lines" as const, lines: 2 },
        ],
      },
      // 10
      {
        type: "fill-in-blank" as const,
        title: "Fill in the Antonym",
        instruction: "Fill each blank with an antonym for the word in brackets.",
        parentTip: "Discuss how antonyms can completely change the meaning of a sentence.",
        sentences: [
          { text: "The room was ___ [dark] and full of light.", blanks: ["bright"] },
          { text: "The match was ___ [boring] from start to finish.", blanks: ["exciting"] },
          { text: "She walked ___ [quickly] so she would not trip.", blanks: ["slowly"] },
          { text: "The mountain felt ___ [easy] to climb.", blanks: ["difficult"] },
        ],
      },
      // 11
      {
        type: "circle-correct" as const,
        title: "Which Word Is the Synonym?",
        instruction: "Circle the word that is a synonym for the word in bold.",
        questions: [
          { prompt: "LARGE", options: ["tiny", "enormous", "flat", "quiet"] },
          { prompt: "SPEAK", options: ["listen", "run", "talk", "write"] },
          { prompt: "FRIGHTENED", options: ["brave", "calm", "scared", "happy"] },
          { prompt: "CHOOSE", options: ["refuse", "select", "ignore", "forget"] },
          { prompt: "CLEVER", options: ["foolish", "lazy", "intelligent", "shy"] },
        ],
      },
      // 12
      {
        type: "matching" as const,
        title: "Match the Synonym (Set B)",
        instruction: "Draw a line to match each word with its synonym.",
        parentTip: "Challenge your child to use each matched pair in a sentence.",
        left: ["shout", "wealthy", "difficult", "gloomy", "hurry"],
        right: ["rush", "yell", "hard", "rich", "dark"],
      },
      // 13
      {
        type: "sorting" as const,
        title: "Sort by Meaning: BRAVE",
        instruction: "The base word is BRAVE. Sort these words — some are synonyms, some are antonyms.",
        columns: ["Synonym (same as BRAVE)", "Antonym (opposite of BRAVE)"],
        items: [
          { label: "courageous" }, { label: "fearful" }, { label: "bold" }, { label: "timid" },
          { label: "daring" }, { label: "cowardly" }, { label: "heroic" }, { label: "nervous" },
        ],
      },
      // 14
      {
        type: "multiple-choice" as const,
        title: "Best Antonym (Set A)",
        instruction: "Choose the best antonym for the word in bold.",
        questions: [
          { prompt: "ANCIENT", options: ["old", "modern", "large", "wise"], answer: "modern" },
          { prompt: "GENEROUS", options: ["kind", "greedy", "helpful", "patient"], answer: "greedy" },
          { prompt: "VICTORY", options: ["win", "success", "defeat", "prize"], answer: "defeat" },
          { prompt: "WHISPER", options: ["speak", "mutter", "shout", "sigh"], answer: "shout" },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: Shades of Meaning",
        content: "Not all synonyms mean exactly the same thing. The words 'pleased', 'happy', 'overjoyed' and 'ecstatic' all mean happy — but they are different strengths. Using the word that fits your meaning precisely makes your writing much more powerful. When you find a synonym in a thesaurus, always check the meaning before using it.",
      },
      // 16
      {
        type: "open-response" as const,
        title: "Shades of Meaning (Set A)",
        instruction: "Number these words from weakest (1) to strongest (4). Then write a sentence using the strongest word.",
        parentTip: "There is no single right answer — discuss shades of meaning together.",
        prompts: [
          { text: "Number 1–4 (weakest to strongest):\npleased   content   overjoyed   ecstatic", type: "lines" as const, lines: 2 },
          { text: "Write a sentence using the strongest word:", type: "lines" as const, lines: 2 },
        ],
      },
      // 17
      {
        type: "fill-in-blank" as const,
        title: "Synonym Swap in Sentences",
        instruction: "Replace the underlined word with a more precise synonym from the box. Word bank: sprinted, whispered, enormous, ancient, chilly.",
        sentences: [
          { text: "The ___ [old] map was hard to read.", blanks: ["ancient"] },
          { text: "She ___ [ran] to catch the bus.", blanks: ["sprinted"] },
          { text: "He ___ [said quietly] a secret in her ear.", blanks: ["whispered"] },
          { text: "The ___ [big] wave swept over the rocks.", blanks: ["enormous"] },
          { text: "It was a ___ [cold] morning in July.", blanks: ["chilly"] },
        ],
      },
      // 18
      {
        type: "true-false" as const,
        title: "True or False: Antonyms",
        instruction: "Read each statement. Circle True or False.",
        statements: [
          { text: "The antonym of 'ancient' is 'modern'.", answer: true },
          { text: "The antonym of 'shout' is 'yell'.", answer: false },
          { text: "The antonym of 'victory' is 'defeat'.", answer: true },
          { text: "The antonym of 'generous' is 'kind'.", answer: false },
          { text: "The antonym of 'smooth' is 'rough'.", answer: true },
        ],
      },
      // 19
      {
        type: "matching" as const,
        title: "Match the Antonym (Set B)",
        instruction: "Draw a line to match each word with its antonym.",
        left: ["arrival", "strength", "question", "success", "remember"],
        right: ["answer", "forget", "failure", "weakness", "departure"],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Your Personal Thesaurus",
        content: "Writers keep personal thesauruses to avoid repeating the same words. Choose three words you use often in your writing — such as 'said', 'nice' or 'good' — and list five synonyms for each. Decorate your list and keep it near your writing space to use next time!",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "sorting" as const,
        title: "Sort: Synonym or Antonym? (FAST)",
        instruction: "Sort these words into synonyms or antonyms of FAST.",
        columns: ["Synonym (same as FAST)", "Antonym (opposite of FAST)"],
        items: [
          { label: "rapid" }, { label: "sluggish" }, { label: "swift" }, { label: "slow" },
          { label: "speedy" }, { label: "leisurely" }, { label: "hasty" }, { label: "dawdling" },
        ],
      },
      // 22
      {
        type: "multiple-choice" as const,
        title: "Choose the Best Synonym for Context",
        instruction: "Choose the synonym that best fits the meaning of the sentence.",
        parentTip: "Read each option aloud in the sentence to hear which sounds most natural.",
        questions: [
          { prompt: "The athlete was ___ after the long race. (exhausted)", options: ["weary", "cheerful", "energetic", "calm"], answer: "weary" },
          { prompt: "She gave a ___ smile when she saw the puppy. (wide)", options: ["tiny", "broad", "sharp", "narrow"], answer: "broad" },
          { prompt: "The cave was ___ inside. (very dark)", options: ["bright", "gloomy", "sunny", "warm"], answer: "gloomy" },
        ],
      },
      // 23
      {
        type: "open-response" as const,
        title: "Shades of Meaning: ANGRY",
        instruction: "These words all relate to angry. Arrange them from mildest (1) to strongest (5) and explain your reasoning.",
        prompts: [
          { text: "Words: cross / irritated / furious / livid / annoyed\nOrder (1 = mildest):", type: "lines" as const, lines: 2 },
          { text: "Why did you put 'livid' last?", type: "lines" as const, lines: 2 },
        ],
      },
      // 24
      {
        type: "fill-in-blank" as const,
        title: "Antonym Challenge (Set A)",
        instruction: "Write an antonym in each blank to make the sentence make sense.",
        sentences: [
          { text: "The theatre was ___ [crowded] — only three people sat inside.", blanks: ["empty"] },
          { text: "He was ___ [confident] before his first public speech.", blanks: ["nervous"] },
          { text: "The answer was surprisingly ___ [complex] to work out.", blanks: ["simple"] },
          { text: "The road was ___ [rough], so driving was comfortable.", blanks: ["smooth"] },
        ],
      },
      // 25
      {
        type: "circle-correct" as const,
        title: "Synonym Precision",
        instruction: "Two synonyms are given. Circle the one that fits the sentence better.",
        parentTip: "Discuss why one word fits better — the shade of meaning matters.",
        questions: [
          { prompt: "The baby's cry was ___ and woke the whole house.", options: ["loud", "deafening"] },
          { prompt: "She ___ the door softly so as not to disturb anyone.", options: ["shut", "slammed"] },
          { prompt: "He ___ with excitement when he opened the gift.", options: ["smiled", "beamed"] },
          { prompt: "The old man walked ___ up the hill.", options: ["slowly", "trudged"] },
        ],
      },
      // 26
      {
        type: "matching" as const,
        title: "Match Synonym Pairs: Verbs",
        instruction: "Match each verb on the left with its synonym on the right.",
        left: ["construct", "observe", "obtain", "assist", "commence"],
        right: ["begin", "help", "build", "get", "watch"],
      },
      // 27
      {
        type: "sorting" as const,
        title: "Sort Words: STRONG",
        instruction: "Sort these words into synonyms or antonyms of STRONG.",
        columns: ["Synonym", "Antonym"],
        items: [
          { label: "powerful" }, { label: "feeble" }, { label: "mighty" }, { label: "weak" },
          { label: "sturdy" }, { label: "frail" }, { label: "muscular" }, { label: "delicate" },
        ],
      },
      // 28
      {
        type: "open-response" as const,
        title: "Write Synonyms for Overused Words",
        instruction: "These words are overused in writing. Write three synonyms for each.",
        parentTip: "A thesaurus is a great tool here — encourage your child to use one.",
        prompts: [
          { text: "SAID — three synonyms:", type: "lines" as const, lines: 1 },
          { text: "NICE — three synonyms:", type: "lines" as const, lines: 1 },
          { text: "BIG — three synonyms:", type: "lines" as const, lines: 1 },
          { text: "WALKED — three synonyms:", type: "lines" as const, lines: 1 },
        ],
      },
      // 29
      {
        type: "true-false" as const,
        title: "True or False: Word Relationships",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "'Whisper' and 'murmur' are synonyms.", answer: true },
          { text: "'Construct' and 'demolish' are synonyms.", answer: false },
          { text: "'Brave' and 'courageous' are antonyms.", answer: false },
          { text: "'Rigid' and 'flexible' are antonyms.", answer: true },
          { text: "'Exhausted' and 'energetic' are antonyms.", answer: true },
          { text: "'Obtain' and 'acquire' are synonyms.", answer: true },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Using a Thesaurus",
        content: "A thesaurus is a book (or website) that lists synonyms and antonyms. When you look up a word, you get a list of alternatives — but always check the meaning of each one before using it. The word 'said' has many synonyms: whispered, announced, muttered, declared — each one tells us something different about HOW the character spoke.",
      },
      // 31
      {
        type: "multiple-choice" as const,
        title: "Choose the Most Precise Word",
        instruction: "Read each sentence. Choose the most precise synonym from the options.",
        questions: [
          { prompt: "She ___ her hands together in the cold. (rubbed hard)", options: ["touched", "stroked", "scrubbed", "tapped"], answer: "scrubbed" },
          { prompt: "The dog ___ toward the smell of food. (moved slowly and carefully)", options: ["ran", "bolted", "crept", "jumped"], answer: "crept" },
          { prompt: "He ___ at the sight of the spider. (jumped in fright)", options: ["laughed", "recoiled", "smiled", "stared"], answer: "recoiled" },
        ],
      },
      // 32
      {
        type: "fill-in-blank" as const,
        title: "Complete with Antonyms",
        instruction: "Each sentence needs an antonym for the word in brackets.",
        parentTip: "Check: does the antonym make the sentence logical?",
        sentences: [
          { text: "The detective found a ___ [obvious] clue hidden in the painting.", blanks: ["hidden"] },
          { text: "She was ___ [talkative] at the party and barely said a word.", blanks: ["silent"] },
          { text: "The river was ___ [deep] near the bank where we paddled.", blanks: ["shallow"] },
          { text: "His ___ [frown] showed how happy he was to see us.", blanks: ["smile"] },
        ],
      },
      // 33
      {
        type: "sorting" as const,
        title: "Sort by Word Class: Synonyms",
        instruction: "These words are all synonyms for 'walk'. Sort them by how the movement feels.",
        columns: ["Slow / tired movement", "Purposeful / fast movement", "Sneaky / careful movement"],
        items: [
          { label: "trudge" }, { label: "stride" }, { label: "tiptoe" },
          { label: "shuffle" }, { label: "march" }, { label: "creep" },
          { label: "amble" }, { label: "stomp" }, { label: "sneak" },
        ],
      },
      // 34
      {
        type: "open-response" as const,
        title: "Synonym in Context",
        instruction: "Read the paragraph. Identify three weak words (underlined) and replace each with a stronger, more precise synonym.",
        prompts: [
          {
            text: "The (big) storm came quickly. The rain hit the windows hard and the wind was (loud). We ran to find a safe place.\n\n1. Replace 'big' with a stronger word:",
            type: "lines" as const, lines: 1,
          },
          { text: "2. Replace 'loud' with a stronger word:", type: "lines" as const, lines: 1 },
          { text: "3. Replace 'ran' with a more precise movement word:", type: "lines" as const, lines: 1 },
        ],
      },
      // 35
      {
        type: "circle-correct" as const,
        title: "Synonym or Antonym? (Set B)",
        instruction: "Circle S for synonym or A for antonym.",
        questions: [
          { prompt: "wealthy — poor", options: ["S", "A"] },
          { prompt: "construct — build", options: ["S", "A"] },
          { prompt: "ancient — modern", options: ["S", "A"] },
          { prompt: "observe — watch", options: ["S", "A"] },
          { prompt: "victory — defeat", options: ["S", "A"] },
          { prompt: "assist — help", options: ["S", "A"] },
        ],
      },
      // 36
      {
        type: "matching" as const,
        title: "Match Synonym Pairs: Adjectives",
        instruction: "Match each adjective with its synonym.",
        parentTip: "Ask your child to rate the strength of each word on a scale of 1–5.",
        left: ["immense", "peculiar", "serene", "vivid", "damp"],
        right: ["bright", "moist", "vast", "strange", "calm"],
      },
      // 37
      {
        type: "fill-in-blank" as const,
        title: "Synonym Precision: Said",
        instruction: "Replace 'said' with a more expressive word from the box. Word bank: shouted, whispered, demanded, announced, muttered.",
        sentences: [
          { text: "\"I can't believe it!\" he ___ under his breath.", blanks: ["muttered"] },
          { text: "\"LOOK OUT!\" she ___ from across the street.", blanks: ["shouted"] },
          { text: "\"Tell me now,\" the guard ___ sternly.", blanks: ["demanded"] },
          { text: "He ___ the results to the whole class.", blanks: ["announced"] },
          { text: "\"Come closer,\" she ___ in my ear.", blanks: ["whispered"] },
        ],
      },
      // 38
      {
        type: "multiple-choice" as const,
        title: "Antonym in Context",
        instruction: "Choose the antonym that best completes each sentence.",
        questions: [
          { prompt: "The once ___ forest had been cleared and was now open grassland. (dense)", options: ["thick", "sparse", "green", "tall"], answer: "sparse" },
          { prompt: "She had been ___ [talkative] all week, so her silence surprised everyone.", options: ["quiet", "lively", "cheerful", "loud"], answer: "quiet" },
          { prompt: "The path was ___ [even], making it hard to cycle. (uneven)", options: ["rough", "flat", "muddy", "wide"], answer: "rough" },
        ],
      },
      // 39
      {
        type: "open-response" as const,
        title: "Antonym Story Swap",
        instruction: "Rewrite this sentence by changing every adjective to its antonym. What happens to the meaning?",
        prompts: [
          { text: "Original: The brave, clever knight rode a magnificent white horse into the bright city.\n\nYour rewrite:", type: "lines" as const, lines: 3 },
          { text: "How did the meaning change?", type: "lines" as const, lines: 2 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Synonym Poetry",
        content: "Write a 6-line poem where every line contains a synonym for a single emotion — such as joy, fear, or anger. Each line should paint a different picture of that feeling. For example: 'Contentment is a warm mug on a winter morning. / Bliss is the last day of school. / Ecstasy is winning by one point in the final second.' Challenge: use a different synonym on every line!",
      },
      // ── CONSOLIDATING 51–80 ────────────────────────────────────────────────
      // 41
      {
        type: "sorting" as const,
        title: "Sort: Synonym or Antonym? (BEAUTIFUL)",
        instruction: "Sort these words — synonyms or antonyms of BEAUTIFUL.",
        columns: ["Synonym", "Antonym"],
        items: [
          { label: "stunning" }, { label: "hideous" }, { label: "gorgeous" }, { label: "ugly" },
          { label: "attractive" }, { label: "dreadful" }, { label: "elegant" }, { label: "revolting" },
        ],
      },
      // 42
      {
        type: "circle-correct" as const,
        title: "Synonym Precision: Verbs",
        instruction: "Circle the verb that is the most precise synonym for the underlined word.",
        parentTip: "Verbs carry action — precise verbs make writing more vivid.",
        questions: [
          { prompt: "She moved through the crowd.", options: ["walked", "weaved", "ran", "went"] },
          { prompt: "He ate his meal.", options: ["consumed", "devoured", "bit", "tasted"] },
          { prompt: "The bird moved in the sky.", options: ["glided", "went", "was", "flew high"] },
        ],
      },
      // 43
      {
        type: "fill-in-blank" as const,
        title: "Academic Synonyms",
        instruction: "Replace the everyday word in brackets with a more academic synonym from the box. Word bank: demonstrate, significant, investigate, comprehend, persuade.",
        sentences: [
          { text: "Scientists ___ [look into] unexplained events.", blanks: ["investigate"] },
          { text: "The data shows a ___ [important] change in temperature.", blanks: ["significant"] },
          { text: "The experiment will ___ [show] how electricity works.", blanks: ["demonstrate"] },
          { text: "The author tries to ___ [convince] readers to agree.", blanks: ["persuade"] },
          { text: "Students must ___ [understand] the question before answering.", blanks: ["comprehend"] },
        ],
      },
      // 44
      {
        type: "open-response" as const,
        title: "Antonym Pairs in Your Own Sentences",
        instruction: "Choose three antonym pairs from the box and write a sentence that uses both words in the pair. Pairs: hot/cold, ancient/modern, victory/defeat, brave/timid, rapid/sluggish.",
        prompts: [
          { text: "Pair 1 (___ / ___): ", type: "lines" as const, lines: 2 },
          { text: "Pair 2 (___ / ___): ", type: "lines" as const, lines: 2 },
          { text: "Pair 3 (___ / ___): ", type: "lines" as const, lines: 2 },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Word Families and Antonyms",
        content: "Many antonyms are formed by adding a prefix. 'un-' means not: happy → unhappy. 'dis-' means not or opposite: agree → disagree. 'im-' or 'in-' means not: possible → impossible, visible → invisible. Knowing prefixes helps you work out antonyms even for unfamiliar words!",
      },
      // 46
      {
        type: "fill-in-blank" as const,
        title: "Prefix Antonyms",
        instruction: "Add a prefix (un-, dis-, im-, in-) to make the antonym of the word in brackets.",
        parentTip: "Say the word with each prefix aloud to find which sounds correct.",
        sentences: [
          { text: "The instructions were ___ [clear] and confusing.", blanks: ["unclear"] },
          { text: "She was ___ [honest] about where she had been.", blanks: ["dishonest"] },
          { text: "The task seemed ___ [possible] to finish in one day.", blanks: ["impossible"] },
          { text: "The playground was ___ [visible] through the thick fog.", blanks: ["invisible"] },
          { text: "The lid was ___ [screwed on] and the jar popped open.", blanks: ["unscrewed"] },
        ],
      },
      // 47
      {
        type: "multiple-choice" as const,
        title: "Formal Synonyms",
        instruction: "Choose the more formal synonym for the underlined word.",
        questions: [
          { prompt: "The teacher talked about the rules.", options: ["explained", "chatted", "mumbled", "went on"], answer: "explained" },
          { prompt: "The report showed a problem.", options: ["pointed out", "found", "identified", "spotted"], answer: "identified" },
          { prompt: "The answer was wrong.", options: ["incorrect", "bad", "off", "not right"], answer: "incorrect" },
        ],
      },
      // 48
      {
        type: "sorting" as const,
        title: "Synonym Intensity: SAD",
        instruction: "Sort these synonyms of SAD from least intense (1) to most intense (8) by writing numbers 1–8 next to each word.",
        columns: ["All synonyms of SAD (sort by intensity 1–8)"],
        items: [
          { label: "downcast" }, { label: "distraught" }, { label: "blue" }, { label: "devastated" },
          { label: "gloomy" }, { label: "melancholy" }, { label: "inconsolable" }, { label: "unhappy" },
        ],
      },
      // 49
      {
        type: "open-response" as const,
        title: "Rewrite with Synonyms",
        instruction: "Rewrite this dull paragraph, replacing every underlined word with a more precise or interesting synonym. Underlined words: nice, big, said, went, good.",
        prompts: [
          {
            text: "Original: It was a nice day. The big cloud moved away and Tom said it was good weather for a walk. So we went to the park.\n\nYour improved paragraph:",
            type: "box" as const, lines: 6,
          },
        ],
      },
      // 50
      {
        type: "home-activity" as const,
        title: "Synonym & Antonym Word Hunt",
        instruction: "Find and collect synonym and antonym pairs from everyday reading.",
        parentTip: "A wide vocabulary is one of the strongest predictors of reading comprehension — invest in it daily.",
        suggestions: [
          "Open a book to any page. Find three adjectives and look up one synonym and one antonym for each in a thesaurus.",
          "Play synonym tennis: one person says a word, the other says a synonym. Keep going without repeating!",
          "Replace all uses of 'nice', 'good' and 'big' in your next piece of writing with stronger synonyms.",
          "Keep a My Best Words notebook — add one new word per day with its meaning, a synonym and an antonym.",
        ],
      },
      // 51
      {
        type: "true-false" as const,
        title: "True or False: Prefix Antonyms",
        instruction: "Decide whether the prefix creates a correct antonym.",
        statements: [
          { text: "'un-' + 'happy' = unhappy (antonym of happy).", answer: true },
          { text: "'dis-' + 'appear' = disappear (antonym of appear).", answer: true },
          { text: "'im-' + 'possible' = impossible (antonym of possible).", answer: true },
          { text: "'un-' + 'agree' = unagree (antonym of agree).", answer: false },
          { text: "'in-' + 'correct' = incorrect (antonym of correct).", answer: true },
        ],
      },
      // 52
      {
        type: "matching" as const,
        title: "Match Antonym Pairs: Abstract Nouns",
        instruction: "Match each abstract noun with its antonym.",
        left: ["courage", "success", "clarity", "generosity", "harmony"],
        right: ["conflict", "confusion", "cowardice", "selfishness", "failure"],
      },
      // 53
      {
        type: "multiple-choice" as const,
        title: "Word in Context: Synonyms",
        instruction: "Read the passage. Choose the best synonym for each underlined word.",
        parentTip: "The passage gives clues about meaning — use context before choosing.",
        questions: [
          { prompt: "The explorer trudged through the dense jungle. 'TRUDGED' means:", options: ["ran quickly", "walked with effort", "skipped lightly", "crawled slowly"], answer: "walked with effort" },
          { prompt: "She scrutinised every detail of the painting. 'SCRUTINISED' means:", options: ["ignored", "painted", "examined carefully", "disliked"], answer: "examined carefully" },
          { prompt: "The news left him utterly bewildered. 'BEWILDERED' means:", options: ["pleased", "energised", "confused", "bored"], answer: "confused" },
        ],
      },
      // 54
      {
        type: "open-response" as const,
        title: "Synonym Ladder: Writing with Precision",
        instruction: "A synonym ladder shows words in order from weak to powerful. Complete each ladder.",
        prompts: [
          { text: "LOOK ladder (weakest → strongest):\nglance → ___ → stare → ___", type: "lines" as const, lines: 1 },
          { text: "TALK ladder (weakest → strongest):\nmutter → ___ → announce → ___", type: "lines" as const, lines: 1 },
          { text: "HAPPY ladder (weakest → strongest):\ncontent → pleased → ___ → ___", type: "lines" as const, lines: 1 },
        ],
      },
      // 55
      {
        type: "fill-in-blank" as const,
        title: "Antonym Gap Fill: Narrative",
        instruction: "Complete this short narrative by writing the antonym of the word in brackets.",
        sentences: [
          { text: "The ___ [noisy] library was the perfect place to think.", blanks: ["silent"] },
          { text: "Tom felt ___ [strong] after his long illness.", blanks: ["weak"] },
          { text: "The solution was ___ [complicated] once they thought it through.", blanks: ["simple"] },
          { text: "She walked ___ [confidently] into the unknown dark.", blanks: ["nervously"] },
        ],
      },
      // 56
      {
        type: "circle-correct" as const,
        title: "Best Synonym for Academic Writing",
        instruction: "Circle the synonym that is most appropriate for formal, academic writing.",
        questions: [
          { prompt: "The government wants to fix the problem.", options: ["sort out", "address", "deal with", "patch up"] },
          { prompt: "The results show the idea works.", options: ["demonstrate", "show off", "prove kind of", "hint"] },
          { prompt: "Many people think this is important.", options: ["believe", "reckon", "feel like", "guess"] },
        ],
      },
      // 57
      {
        type: "sorting" as const,
        title: "Sort: Formal vs Informal Synonyms",
        instruction: "Sort these synonyms of 'get' into formal and informal.",
        columns: ["Formal synonym", "Informal synonym"],
        items: [
          { label: "obtain" }, { label: "grab" }, { label: "acquire" }, { label: "snag" },
          { label: "receive" }, { label: "nab" }, { label: "procure" }, { label: "pick up" },
        ],
      },
      // 58
      {
        type: "open-response" as const,
        title: "Context Clues: Advanced",
        instruction: "Read each sentence. Use context clues to infer the meaning of the bold word, then write a synonym.",
        prompts: [
          { text: "1. The professor's explanation was so convoluted that even the experts looked confused.\n   'Convoluted' means:            Synonym:", type: "lines" as const, lines: 2 },
          { text: "2. The child's tenacity — practising for three hours every day — finally paid off.\n   'Tenacity' means:            Synonym:", type: "lines" as const, lines: 2 },
          { text: "3. The politician's speech was deliberately vague to avoid offending anyone.\n   'Vague' means:            Synonym:", type: "lines" as const, lines: 2 },
        ],
      },
      // 59
      {
        type: "multiple-choice" as const,
        title: "Antonym of a Compound Word",
        instruction: "Choose the best antonym for each compound or multi-word phrase.",
        questions: [
          { prompt: "OVERCROWDED", options: ["deserted", "busy", "noisy", "large"], answer: "deserted" },
          { prompt: "DOWNHEARTED", options: ["gloomy", "exhausted", "overjoyed", "nervous"], answer: "overjoyed" },
          { prompt: "UNDERPREPARED", options: ["nervous", "well-prepared", "relaxed", "organised"], answer: "well-prepared" },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip" as const,
        title: "Tip: Synonyms Change Tone",
        content: "Synonyms can make your writing sound totally different even when the meaning is similar. 'The man walked into the room' is neutral. 'The man strode into the room' sounds confident. 'The man crept into the room' sounds suspicious. Always ask: what tone do I want? Then choose the synonym that creates it.",
      },
      // 61 (SPARK at ~60)
      {
        type: "spark" as const,
        title: "Spark: Same Scene, Different Words",
        content: "Describe the same scene twice using different synonyms — once to make it sound peaceful and once to make it sound threatening. Use the same basic facts (time of day, place, characters) but swap key nouns, verbs and adjectives for synonyms with different tones. Share both versions with your family and ask which they prefer.",
      },
      // 62
      {
        type: "fill-in-blank" as const,
        title: "Synonym Tone: Positive vs Negative",
        instruction: "Each pair of synonyms has a positive and a negative tone. Write P (positive) or N (negative) next to each.",
        parentTip: "Discuss how tone can make the same idea sound very different.",
        sentences: [
          { text: "slender [___] / scrawny [___]", blanks: ["P", "N"] },
          { text: "thrifty [___] / stingy [___]", blanks: ["P", "N"] },
          { text: "confident [___] / arrogant [___]", blanks: ["P", "N"] },
          { text: "quirky [___] / weird [___]", blanks: ["P", "N"] },
        ],
      },
      // 63
      {
        type: "sorting" as const,
        title: "Sort: Positive, Negative or Neutral Synonyms",
        instruction: "Sort these synonyms of 'thin' by their tone.",
        columns: ["Positive tone", "Negative tone", "Neutral tone"],
        items: [
          { label: "slim" }, { label: "scrawny" }, { label: "lean" },
          { label: "gaunt" }, { label: "slender" }, { label: "skinny" },
          { label: "willowy" }, { label: "bony" }, { label: "slight" },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Synonym Swap in Narrative Writing",
        instruction: "Rewrite the paragraph below, replacing every bold word with a more precise or emotionally appropriate synonym. Aim to create a tense, exciting mood.",
        prompts: [
          {
            text: "Original: The children **walked** through the **dark** forest. A **sound** came from the trees. They **looked** at each other and **ran** away.\n\nYour rewrite:",
            type: "box" as const, lines: 6,
          },
        ],
      },
      // 65
      {
        type: "circle-correct" as const,
        title: "Which Prefix Makes the Antonym?",
        instruction: "Circle the correct prefix to make the antonym.",
        questions: [
          { prompt: "___honest (not honest)", options: ["un-", "dis-", "im-"] },
          { prompt: "___possible (not possible)", options: ["dis-", "im-", "un-"] },
          { prompt: "___visible (not visible)", options: ["in-", "un-", "dis-"] },
          { prompt: "___happy (not happy)", options: ["im-", "un-", "dis-"] },
          { prompt: "___agree (to not agree)", options: ["un-", "im-", "dis-"] },
        ],
      },
      // 66
      {
        type: "fill-in-blank" as const,
        title: "Connotation: Synonyms with Feeling",
        instruction: "Each blank has two options. Choose the synonym with the correct connotation (feeling) for the sentence.",
        sentences: [
          { text: "The journalist was ___ in her questioning. (determined/pushy — positive tone)", blanks: ["determined"] },
          { text: "My uncle is ___ with money. (careful/stingy — negative tone)", blanks: ["stingy"] },
          { text: "The toddler was ___ all morning. (lively/obnoxious — neutral/positive tone)", blanks: ["lively"] },
        ],
      },
      // 67
      {
        type: "matching" as const,
        title: "Match: Positive and Negative Synonyms",
        instruction: "Match each positive word with its negative synonym (same meaning, different tone).",
        left: ["confident", "thrifty", "curious", "determined", "plain"],
        right: ["stubborn", "drab", "nosy", "stingy", "arrogant"],
      },
      // 68
      {
        type: "open-response" as const,
        title: "Antonym Definitions",
        instruction: "Write the definition of each word, then write its antonym and define that too.",
        prompts: [
          { text: "TRANSPARENT — Definition:                    Antonym:                    Antonym definition:", type: "lines" as const, lines: 2 },
          { text: "FLEXIBLE — Definition:                    Antonym:                    Antonym definition:", type: "lines" as const, lines: 2 },
          { text: "HARMONY — Definition:                    Antonym:                    Antonym definition:", type: "lines" as const, lines: 2 },
        ],
      },
      // 69
      {
        type: "true-false" as const,
        title: "True or False: Connotation",
        instruction: "Decide if the statement about connotation is true or false.",
        statements: [
          { text: "'Slender' and 'scrawny' both mean thin but 'slender' has a more positive connotation.", answer: true },
          { text: "'Determined' and 'stubborn' are exact synonyms with no difference in feeling.", answer: false },
          { text: "Choosing a synonym with the right connotation can change the mood of a piece of writing.", answer: true },
          { text: "All synonyms in a thesaurus are interchangeable in any sentence.", answer: false },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Synonym & Antonym Real-World Challenge",
        instruction: "Apply your knowledge of synonyms and antonyms in everyday life this week.",
        parentTip: "Media literacy and vocabulary go hand-in-hand — these activities build both.",
        suggestions: [
          "Find a newspaper editorial. Highlight all the adjectives and list their antonyms — how would the article change?",
          "Watch a nature documentary. Each time the narrator uses an adjective, think of a stronger synonym.",
          "Write a product advertisement using five powerful synonyms instead of boring words like 'good' and 'nice'.",
          "Play 'antonym charades' — act out the antonym of a word and let your family guess the original.",
        ],
      },
      // ── EXTENDING 71–100 ──────────────────────────────────────────────────
      // 71
      {
        type: "multiple-choice" as const,
        title: "Synonym Selection: Sophisticated Vocabulary",
        instruction: "Choose the most sophisticated synonym for the underlined word.",
        questions: [
          { prompt: "The king showed his power.", options: ["demonstrated", "flaunted", "exhibited", "exerted"], answer: "exerted" },
          { prompt: "The plan had a big flaw.", options: ["significant", "colossal", "glaring", "obvious"], answer: "glaring" },
          { prompt: "The speech moved the crowd.", options: ["inspired", "excited", "touched", "electrified"], answer: "electrified" },
        ],
      },
      // 72
      {
        type: "open-response" as const,
        title: "Thesaurus Deep Dive",
        instruction: "Use a thesaurus to find synonyms for 'difficult'. List at least six, then sort them from least to most formal. Use two of them in your own sentences.",
        prompts: [
          { text: "Six synonyms for DIFFICULT:", type: "lines" as const, lines: 2 },
          { text: "Sort: least formal → most formal:", type: "lines" as const, lines: 1 },
          { text: "Sentence using a formal synonym:", type: "lines" as const, lines: 2 },
          { text: "Sentence using an informal synonym:", type: "lines" as const, lines: 2 },
        ],
      },
      // 73
      {
        type: "sorting" as const,
        title: "Classify Synonyms: Formal, Informal, Neutral",
        instruction: "These are all synonyms of 'talk'. Sort them into formal, informal and neutral.",
        columns: ["Formal", "Informal", "Neutral"],
        items: [
          { label: "converse" }, { label: "chat" }, { label: "discuss" },
          { label: "natter" }, { label: "address" }, { label: "gossip" },
          { label: "speak" }, { label: "confer" }, { label: "yarn" },
        ],
      },
      // 74
      {
        type: "fill-in-blank" as const,
        title: "Sophisticated Antonyms",
        instruction: "Fill each blank with a sophisticated antonym for the word in brackets. Choose from: transparent, frugal, serene, meticulous, benevolent.",
        sentences: [
          { text: "The official's motives were ___ [hidden/opaque] — everyone could see what she intended.", blanks: ["transparent"] },
          { text: "Despite being wealthy, he was ___ [wasteful], never spending more than he needed.", blanks: ["frugal"] },
          { text: "She remained ___ [agitated] even as the argument grew louder.", blanks: ["serene"] },
          { text: "His ___ [careless] attention to detail made his work stand out.", blanks: ["meticulous"] },
          { text: "The ___ [cruel] king was loved by all his subjects.", blanks: ["benevolent"] },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Synonyms in Persuasive Writing",
        content: "Persuasive writers choose synonyms very carefully. Instead of 'old', they might say 'outdated' or 'obsolete'. Instead of 'big', they say 'enormous' or 'staggering'. The stronger or more emotional the word, the more it can sway a reader. This technique is called 'loaded language'. Notice it in advertisements, speeches and opinion articles — then use it in your own writing!",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Loaded Language in Persuasion",
        instruction: "Rewrite each neutral sentence twice: once using positive synonyms and once using negative synonyms to create two opposite impressions.",
        prompts: [
          {
            text: "Neutral: The new shopping centre is large and attracts many visitors.\nPositive version:",
            type: "lines" as const, lines: 2,
          },
          { text: "Negative version:", type: "lines" as const, lines: 2 },
        ],
      },
      // 77
      {
        type: "multiple-choice" as const,
        title: "Choose the Synonym with Correct Connotation",
        instruction: "Choose the synonym with the most appropriate connotation for the context.",
        parentTip: "Connotation is the emotional feeling behind a word — not just its literal meaning.",
        questions: [
          { prompt: "A news report about a protest: The crowd was ___ about the decision.", options: ["furious", "cross", "put out", "unhappy"], answer: "furious" },
          { prompt: "A travel brochure: The resort offers a ___ experience.", options: ["OK", "acceptable", "luxurious", "not bad"], answer: "luxurious" },
          { prompt: "A scientific report: The results ___ a strong link between the two variables.", options: ["suggest", "hint at", "kind of show", "indicate"], answer: "indicate" },
        ],
      },
      // 78
      {
        type: "fill-in-blank" as const,
        title: "Register: Choosing the Right Synonym",
        instruction: "Each sentence has a register (formal or informal). Choose the synonym that fits.",
        sentences: [
          { text: "FORMAL letter: We wish to ___ [tell] you that your application was successful.", blanks: ["inform"] },
          { text: "INFORMAL text: Can you ___ [assist] me move this table?", blanks: ["help"] },
          { text: "FORMAL essay: The evidence ___ [shows] that climate change is accelerating.", blanks: ["demonstrates"] },
          { text: "INFORMAL chat: I ___ [acquired] a new bike yesterday!", blanks: ["got"] },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Synonym & Antonym Crossword Clues",
        instruction: "Write a crossword clue for each word — the clue must be a synonym or antonym with a label.",
        prompts: [
          { text: "ANCIENT — Clue (use antonym):", type: "lines" as const, lines: 1 },
          { text: "COWARDICE — Clue (use antonym):", type: "lines" as const, lines: 1 },
          { text: "DEMONSTRATE — Clue (use synonym):", type: "lines" as const, lines: 1 },
          { text: "TURBULENT — Clue (use antonym):", type: "lines" as const, lines: 1 },
          { text: "BENEVOLENT — Clue (use synonym):", type: "lines" as const, lines: 1 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Loaded Language Experiment",
        content: "Choose a real event — a sports match, a school excursion or a news story you know. Write two short paragraphs about it: one using positive synonyms (making it sound wonderful) and one using negative synonyms (making it sound terrible). The facts stay the same — only the words change. Share with a family member and discuss how powerful word choice really is.",
      },
      // 81
      {
        type: "sorting" as const,
        title: "Classify Antonyms by Prefix",
        instruction: "Sort these antonym pairs by the prefix used to create the antonym.",
        columns: ["un-", "dis-", "im- / in-", "Other prefix"],
        items: [
          { label: "happy → unhappy" }, { label: "agree → disagree" },
          { label: "possible → impossible" }, { label: "visible → invisible" },
          { label: "honest → dishonest" }, { label: "kind → unkind" },
          { label: "correct → incorrect" }, { label: "legal → illegal" },
        ],
      },
      // 82
      {
        type: "open-response" as const,
        title: "Etymology: Where Do These Synonyms Come From?",
        instruction: "These three synonyms all mean 'to start'. Research their origins and explain how knowing etymology (word origins) helps vocabulary.",
        prompts: [
          { text: "COMMENCE — language of origin and original meaning:", type: "lines" as const, lines: 1 },
          { text: "INITIATE — language of origin and original meaning:", type: "lines" as const, lines: 1 },
          { text: "BEGIN — language of origin and original meaning:", type: "lines" as const, lines: 1 },
          { text: "How does knowing word origins help you choose synonyms?", type: "lines" as const, lines: 2 },
        ],
      },
      // 83
      {
        type: "multiple-choice" as const,
        title: "Nuance: Which Synonym Is Most Accurate?",
        instruction: "Choose the synonym that captures the most precise shade of meaning.",
        questions: [
          { prompt: "A person who never stops trying even when it is hard is:", options: ["stubborn", "tenacious", "annoying", "confident"], answer: "tenacious" },
          { prompt: "A piece of writing that is very hard to understand is:", options: ["long", "obscure", "foreign", "dull"], answer: "obscure" },
          { prompt: "Feeling both happy and sad at the same time is:", options: ["confused", "bittersweet", "mixed", "torn"], answer: "bittersweet" },
        ],
      },
      // 84
      {
        type: "fill-in-blank" as const,
        title: "Antonym Fill: Literary Texts",
        instruction: "These sentences come from literary texts. Fill each blank with an appropriate antonym.",
        sentences: [
          { text: "In the ___ [noisy] forest, not even a leaf stirred.", blanks: ["silent"] },
          { text: "The once ___ [barren] valley was now rich with wildflowers.", blanks: ["fertile"] },
          { text: "Her ___ [calm] hands betrayed her fear as they shook.", blanks: ["trembling"] },
          { text: "The ___ [dim] ballroom blazed with a thousand candles.", blanks: ["brilliant"] },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Vocabulary in Your Own Writing",
        instruction: "Look at a piece of your own recent writing. Find five words you would like to improve. Write the original word, look up a better synonym, and explain why the new word is stronger.",
        prompts: [
          { text: "1. Original:          Better synonym:          Why it's stronger:", type: "lines" as const, lines: 1 },
          { text: "2. Original:          Better synonym:          Why it's stronger:", type: "lines" as const, lines: 1 },
          { text: "3. Original:          Better synonym:          Why it's stronger:", type: "lines" as const, lines: 1 },
          { text: "4. Original:          Better synonym:          Why it's stronger:", type: "lines" as const, lines: 1 },
          { text: "5. Original:          Better synonym:          Why it's stronger:", type: "lines" as const, lines: 1 },
        ],
      },
      // 86
      {
        type: "circle-correct" as const,
        title: "Synonym or Antonym? (Advanced Set)",
        instruction: "Circle S (synonym) or A (antonym) for each pair.",
        questions: [
          { prompt: "tenacious — persistent", options: ["S", "A"] },
          { prompt: "obscure — obvious", options: ["S", "A"] },
          { prompt: "benevolent — malevolent", options: ["S", "A"] },
          { prompt: "frugal — thrifty", options: ["S", "A"] },
          { prompt: "transparent — opaque", options: ["S", "A"] },
          { prompt: "serene — turbulent", options: ["S", "A"] },
        ],
      },
      // 87
      {
        type: "sorting" as const,
        title: "Classify: Formal, Neutral, Colloquial Synonyms of 'Eat'",
        instruction: "Sort these synonyms of 'eat' by register.",
        columns: ["Formal", "Neutral", "Colloquial"],
        items: [
          { label: "consume" }, { label: "eat" }, { label: "wolf down" },
          { label: "devour" }, { label: "munch" }, { label: "dine" },
          { label: "scoff" }, { label: "ingest" }, { label: "feast on" },
        ],
      },
      // 88
      {
        type: "open-response" as const,
        title: "Extended Writing: Synonyms and Antonyms in Action",
        instruction: "Write a short persuasive paragraph (5–7 sentences) arguing that students should read more books. Use at least three synonyms for common words and at least two antonym pairs to build contrast.",
        prompts: [
          { text: "Your paragraph:", type: "box" as const, lines: 10 },
          { text: "List the synonym swaps and antonym pairs you used:", type: "lines" as const, lines: 3 },
        ],
      },
      // 89
      {
        type: "multiple-choice" as const,
        title: "Advanced Antonym Selection",
        instruction: "Choose the best antonym for the sophisticated word.",
        questions: [
          { prompt: "METICULOUS", options: ["careless", "slow", "organised", "detailed"], answer: "careless" },
          { prompt: "TURBULENT", options: ["fast", "stormy", "peaceful", "dangerous"], answer: "peaceful" },
          { prompt: "ELOQUENT", options: ["inarticulate", "clever", "quiet", "formal"], answer: "inarticulate" },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Synonyms Across Word Classes",
        content: "Synonyms exist across all word classes — not just nouns and adjectives. Verbs have synonyms too: 'ate' / 'consumed' / 'devoured'. Adverbs have synonyms: 'quickly' / 'rapidly' / 'swiftly'. When you edit your writing, check every word class — not just adjectives — for opportunities to improve precision and variety.",
      },
      // 91
      {
        type: "fill-in-blank" as const,
        title: "Adverb Synonyms",
        instruction: "Replace the underlined adverb with a more precise synonym from the box. Word bank: abruptly, cautiously, vividly, reluctantly, earnestly.",
        sentences: [
          { text: "She ___ [carefully] approached the stray dog.", blanks: ["cautiously"] },
          { text: "He ___ [suddenly] stopped in the middle of the street.", blanks: ["abruptly"] },
          { text: "She remembered that day ___ [clearly].", blanks: ["vividly"] },
          { text: "He ___ [with feeling] begged her to stay.", blanks: ["earnestly"] },
          { text: "She ___ [unwillingly] agreed to help with the dishes.", blanks: ["reluctantly"] },
        ],
      },
      // 92
      {
        type: "open-response" as const,
        title: "Create a Synonym Map",
        instruction: "Choose a word from the box and create a synonym map: write the word in the centre, then add at least 8 synonyms branching out. Group them by intensity or formality. Words: move, angry, beautiful, show.",
        prompts: [
          { text: "My chosen word:", type: "lines" as const, lines: 1 },
          { text: "Synonym map (describe or draw it):", type: "box" as const, lines: 10 },
        ],
      },
      // 93
      {
        type: "true-false" as const,
        title: "True or False: Sophisticated Synonyms and Antonyms",
        instruction: "Circle True or False.",
        statements: [
          { text: "'Tenacious' is a synonym for 'persistent'.", answer: true },
          { text: "'Benevolent' is an antonym for 'malevolent'.", answer: true },
          { text: "'Eloquent' and 'inarticulate' are synonyms.", answer: false },
          { text: "'Frugal' and 'extravagant' are antonyms.", answer: true },
          { text: "'Serene' and 'turbulent' are synonyms.", answer: false },
        ],
      },
      // 94
      {
        type: "matching" as const,
        title: "Match: Sophisticated Antonym Pairs",
        instruction: "Match each word with its sophisticated antonym.",
        parentTip: "Look up any unfamiliar words together before matching.",
        left: ["meticulous", "eloquent", "frugal", "benevolent", "transparent"],
        right: ["opaque", "extravagant", "careless", "malevolent", "inarticulate"],
      },
      // 95
      {
        type: "sorting" as const,
        title: "Group Synonyms: Five Shades of Fear",
        instruction: "These words all relate to 'fear'. Sort them from mildest to most extreme by placing them in the columns.",
        columns: ["Mild", "Moderate", "Intense", "Extreme"],
        items: [
          { label: "uneasy" }, { label: "terror" }, { label: "anxious" }, { label: "dread" },
          { label: "apprehensive" }, { label: "panic" }, { label: "alarmed" }, { label: "horrified" },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Persuasive Essay Opener: Loaded Synonyms",
        instruction: "Write an opening paragraph for a persuasive essay on a topic of your choice. Use at least four precisely chosen synonyms to create a strong emotional impression. Underline your best synonym choices.",
        prompts: [
          { text: "My essay topic:", type: "lines" as const, lines: 1 },
          { text: "My opening paragraph:", type: "box" as const, lines: 8 },
        ],
      },
      // 97
      {
        type: "fill-in-blank" as const,
        title: "Collocations and Synonyms",
        instruction: "Some synonyms cannot be swapped in every context because of collocation (words that go together naturally). Choose the correct synonym for each blank.",
        sentences: [
          { text: "You ___ [do / make / perform] a decision — which fits naturally?", blanks: ["make"] },
          { text: "She ___ [performed / conducted / did] research for three years.", blanks: ["conducted"] },
          { text: "They ___ [achieved / accomplished / did] their goal at last.", blanks: ["achieved"] },
        ],
      },
      // 98
      {
        type: "open-response" as const,
        title: "Reflection: Synonyms and My Writing",
        instruction: "Answer these reflection questions about what you have learned about synonyms and antonyms.",
        prompts: [
          { text: "What is the difference between a synonym and a word with identical meaning?", type: "lines" as const, lines: 2 },
          { text: "Give an example of two synonyms with different connotations and explain the difference:", type: "lines" as const, lines: 2 },
          { text: "How will you use what you have learned in your next piece of writing?", type: "lines" as const, lines: 3 },
        ],
      },
      // 99
      {
        type: "home-activity" as const,
        title: "Advanced Vocabulary Challenge",
        instruction: "Extend your synonym and antonym skills beyond the worksheet.",
        parentTip: "Invest in a good children's thesaurus — it is one of the most valuable writing tools.",
        suggestions: [
          "Read an opinion article and highlight every adjective. Replace each with a synonym that changes the tone — positive to negative, or vice versa.",
          "Write your own crossword puzzle using synonym and antonym clues for at least 10 words.",
          "Create a 'word wall' with your top 20 powerful words, their synonyms, antonyms and example sentences.",
          "Play 'synonym chains' — start with a word, find a synonym, then a synonym of that synonym. How far can you go before the meaning shifts completely?",
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Thesaurus Author",
        content: "Choose a short passage from a favourite book — about 5 sentences long. Rewrite it in three different ways: one using only formal, sophisticated synonyms; one using only informal, colloquial synonyms; and one using antonyms for every possible word. Read all three aloud. Which sounds funniest? Which sounds most powerful? Discuss how word choice shapes meaning, tone and character.",
      },
    ],
  },
  {
    slug: "complex-sentences-conjunctions",
    title: "Complex Sentences & Conjunctions",
    strand: "Language",
    description:
      "Build more interesting sentences by joining ideas with conjunctions like although, because, whenever and while.",
    learningGuide: {
      concept:
        "A complex sentence has a main clause (which makes sense on its own) and a subordinate clause (which adds extra information but cannot stand alone). They are joined by a subordinating conjunction such as because, although, when, while, since, unless, until.",
      activation:
        "Say to your child: I stayed inside. Ask them to add more information using because. Notice how the sentence becomes richer.",
      check:
        "Check that your child can identify the main clause and the subordinate clause in each sentence they write.",
    },
    lesson: {
      title: "Building Bigger Sentences",
      objective:
        "Identify and write complex sentences using a range of subordinating conjunctions.",
      materials: ["This worksheet", "A pencil"],
      intro: {
        title: "The Sentence Is Lonely",
        script:
          "Here is a sentence: The dog barked. It makes sense on its own. These are called simple sentences. Now watch what happens when I add a conjunction — a joining word. The dog barked because the postman arrived. That second part — because the postman arrived — cannot stand on its own. It needs the main part to make sense. That makes it a subordinate clause. Together they form a complex sentence. Conjunctions are like glue that sticks ideas together.",
        action:
          "Write a simple sentence on paper and then add four different conjunctions one at a time — because, although, when, unless — reading the result each time. Ask your child which version they find most interesting.",
      },
      mainActivity: {
        title: "Conjunction Toolkit",
        script:
          "Today we are going to use a toolkit of conjunctions. Some show time — like when, while, after, before, until. Some show reason — like because, since. Some show contrast — like although, even though, despite. Let us look at the activities and choose the best conjunction for each gap. Think about what relationship the two ideas have: is one the reason for the other? Or are they contrasting?",
        action:
          "Read each sentence stem on the worksheet and discuss which group — time, reason, or contrast — the missing conjunction belongs to before your child writes their answer.",
      },
      wrapUp: {
        title: "Complex Sentence Swap",
        script:
          "Great work! Now I want you to look at one of your recent pieces of writing. Can you find a simple sentence and turn it into a complex sentence by adding a conjunction? Let us see if we can improve your writing right now.",
        action:
          "Sit together with a recent writing sample and make two improvements together.",
      },
      parentTip:
        "When reading aloud together, pause at long sentences and ask: Can you spot the main idea and the extra bit? This builds the habit of noticing sentence structure in real texts.",
      extension:
        "Challenge your child to write a paragraph about their favourite animal using at least five different conjunctions. Highlight each conjunction in a different colour.",
      resources: [
        {
          title: "Khan Academy — Complex Sentences",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:grammar/xe2c54a99ede11c03:complex-sentences/e/complex-sentences",
          description:
            "Practice exercises identifying and writing complex sentences.",
        },
        {
          title: "ReadWriteThink — Building Better Sentences",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/building-better-sentences-with",
          description:
            "Structured lesson plans for building sentence complexity.",
        },
        {
          title: "ABC Education — Learn English",
          url: "https://www.abc.net.au/education/learn-english/",
          description:
            "Engaging English grammar resources from ABC Education.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "circle-correct" as const,
        title: "Choose the Best Conjunction (Set A)",
        instruction: "Circle the conjunction that makes the most sense in each sentence.",
        parentTip: "Read each sentence aloud with all three options to hear which sounds correct.",
        questions: [
          { prompt: "Lily packed an umbrella ___ it was raining.", options: ["although", "because", "until"] },
          { prompt: "___ the film was long, we enjoyed every minute.", options: ["Although", "Since", "When"] },
          { prompt: "We will stay at the park ___ the sun sets.", options: ["while", "until", "because"] },
          { prompt: "He practised the piano ___ he could play the whole song.", options: ["although", "unless", "until"] },
          { prompt: "You cannot go outside ___ you finish your lunch.", options: ["because", "unless", "while"] },
        ],
      },
      // 2
      {
        type: "sorting" as const,
        title: "Sort the Conjunctions (Set A)",
        instruction: "Sort these conjunctions into the correct group based on the kind of relationship they show.",
        columns: ["Time", "Reason", "Contrast"],
        items: [
          { label: "because" }, { label: "although" }, { label: "when" },
          { label: "since" }, { label: "while" }, { label: "even though" },
          { label: "until" }, { label: "after" }, { label: "despite" },
        ],
      },
      // 3
      {
        type: "matching" as const,
        title: "Match the Conjunction to Its Function",
        instruction: "Draw a line to match each conjunction to what it shows.",
        parentTip: "Review the Time / Reason / Contrast categories before matching.",
        left: ["because", "although", "until", "while", "since", "even though"],
        right: [
          "contrast — the ideas are opposite",
          "time — one thing happens at the same time",
          "reason — explains why",
          "contrast — same as although",
          "time — one thing ends then another starts",
          "reason — another way to say because",
        ],
      },
      // 4
      {
        type: "true-false" as const,
        title: "True or False: Complex Sentences",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "A complex sentence has a main clause and at least one subordinate clause.", answer: true },
          { text: "A subordinate clause can stand alone as a complete sentence.", answer: false },
          { text: "'Because', 'although' and 'when' are subordinating conjunctions.", answer: true },
          { text: "A simple sentence has two main clauses joined by 'and' or 'but'.", answer: false },
          { text: "The subordinate clause always comes at the end of a complex sentence.", answer: false },
        ],
      },
      // 5
      {
        type: "fill-in-blank" as const,
        title: "Fill in the Conjunction (Set A)",
        instruction: "Fill each blank with the best conjunction from the box. Word bank: because, although, when, until, while.",
        parentTip: "Ask: what is the relationship between the two ideas — time, reason or contrast?",
        sentences: [
          { text: "She read her book ___ her brother watched television.", blanks: ["while"] },
          { text: "We waited ___ the rain stopped.", blanks: ["until"] },
          { text: "He put on his coat ___ it was cold outside.", blanks: ["because"] },
          { text: "___ she was nervous, she gave a great speech.", blanks: ["Although"] },
          { text: "___ the lights went out, everyone screamed.", blanks: ["When"] },
        ],
      },
      // 6
      {
        type: "open-response" as const,
        title: "Finish the Sentence (Set A)",
        instruction: "Each sentence has a main clause. Complete each one with a subordinate clause. Use a different conjunction each time.",
        prompts: [
          { text: "1. The cat jumped onto the fence ___", type: "lines" as const, lines: 2 },
          { text: "2. ___ , James could not sleep.", type: "lines" as const, lines: 2 },
          { text: "3. We had a picnic ___ it was sunny.", type: "lines" as const, lines: 2 },
          { text: "4. She practised every day ___ she won the competition.", type: "lines" as const, lines: 2 },
        ],
      },
      // 7
      {
        type: "circle-correct" as const,
        title: "Main Clause or Subordinate Clause?",
        instruction: "Read each clause. Circle M if it is a main clause (can stand alone) or S if it is a subordinate clause (cannot stand alone).",
        questions: [
          { prompt: "Because it was raining", options: ["M", "S"] },
          { prompt: "The dog barked loudly", options: ["M", "S"] },
          { prompt: "Although she was tired", options: ["M", "S"] },
          { prompt: "We went to the shops", options: ["M", "S"] },
          { prompt: "Until the teacher arrived", options: ["M", "S"] },
          { prompt: "Tom packed his bag", options: ["M", "S"] },
        ],
      },
      // 8
      {
        type: "multiple-choice" as const,
        title: "Which Conjunction Shows Time?",
        instruction: "Choose the conjunction that shows a time relationship.",
        questions: [
          { prompt: "We will eat dinner ___ Dad gets home.", options: ["because", "although", "when", "unless"], answer: "when" },
          { prompt: "She waited ___ the bus arrived.", options: ["because", "although", "until", "even though"], answer: "until" },
          { prompt: "___ the match ended, everyone cheered.", options: ["Because", "After", "Unless", "Although"], answer: "After" },
        ],
      },
      // 9
      {
        type: "sorting" as const,
        title: "Sort: Main Clause or Subordinate Clause?",
        instruction: "Sort each clause into the correct column.",
        columns: ["Main clause (can stand alone)", "Subordinate clause (cannot stand alone)"],
        items: [
          { label: "because the storm was coming" },
          { label: "the children played outside" },
          { label: "although it was late" },
          { label: "she opened the door" },
          { label: "until the whistle blew" },
          { label: "the teacher smiled" },
          { label: "while we waited" },
          { label: "he finished his homework" },
        ],
      },
      // 10
      {
        type: "open-response" as const,
        title: "Expand Simple Sentences (Set A)",
        instruction: "Rewrite each simple sentence as a complex sentence by adding a conjunction and a subordinate clause.",
        parentTip: "Show the example before your child writes independently.",
        prompts: [
          { text: "Example: The bird sang.\nAnswer: The bird sang because the sun was rising.\n\n1. The children ran.\nAnswer:", type: "lines" as const, lines: 2 },
          { text: "2. Tom ate dinner.\nAnswer:", type: "lines" as const, lines: 2 },
          { text: "3. She smiled.\nAnswer:", type: "lines" as const, lines: 2 },
        ],
      },
      // 11
      {
        type: "fill-in-blank" as const,
        title: "Fill in the Conjunction (Set B)",
        instruction: "Choose the best conjunction for each sentence.",
        sentences: [
          { text: "He put on sunscreen ___ he did not want to get sunburnt.", blanks: ["because"] },
          { text: "___ the match was over, the players shook hands.", blanks: ["After"] },
          { text: "You must wear a hat ___ you go outside.", blanks: ["before"] },
          { text: "She kept trying ___ she finally solved the puzzle.", blanks: ["until"] },
          { text: "___ he had studied hard, he still felt nervous.", blanks: ["Although"] },
        ],
      },
      // 12
      {
        type: "circle-correct" as const,
        title: "Choose the Best Conjunction (Set B)",
        instruction: "Circle the best conjunction for each sentence.",
        questions: [
          { prompt: "We stayed inside ___ it was too hot to go out.", options: ["although", "because", "until"] },
          { prompt: "___ she finished reading, she put the book down.", options: ["Before", "Although", "When"] },
          { prompt: "He will not come ___ you invite him.", options: ["until", "unless", "while"] },
          { prompt: "___ it was her birthday, she still had to do her chores.", options: ["When", "Even though", "Because"] },
        ],
      },
      // 13
      {
        type: "matching" as const,
        title: "Match Sentence Halves",
        instruction: "Draw a line to match each main clause with the best subordinate clause.",
        parentTip: "Read each combination aloud before drawing the line.",
        left: [
          "She wore a raincoat",
          "He finished his vegetables",
          "We played outside",
          "She sang a lullaby",
          "They arrived early",
        ],
        right: [
          "although it was cold",
          "because it was forecast to rain",
          "before the other guests",
          "until the baby fell asleep",
          "so that he could have dessert",
        ],
      },
      // 14
      {
        type: "multiple-choice" as const,
        title: "Which Conjunction Shows Contrast?",
        instruction: "Choose the conjunction that shows a contrast (opposite ideas).",
        questions: [
          { prompt: "___ the food was cold, she ate every bite.", options: ["Because", "When", "Although", "Until"], answer: "Although" },
          { prompt: "He went for a run ___ he was exhausted.", options: ["because", "even though", "until", "when"], answer: "even though" },
          { prompt: "She smiles ___ she is upset.", options: ["because", "when", "even when", "until"], answer: "even when" },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: Three Kinds of Subordinating Conjunctions",
        content: "Subordinating conjunctions show different relationships between clauses. TIME conjunctions show sequence or duration: when, while, before, after, until. REASON conjunctions explain why: because, since, as. CONTRAST conjunctions show opposite or unexpected ideas: although, even though, despite, unless. Always ask: what is the relationship between the two ideas before choosing your conjunction.",
      },
      // 16
      {
        type: "open-response" as const,
        title: "Write Complex Sentences with Time Conjunctions",
        instruction: "Write two complex sentences using time conjunctions — one with 'before' and one with 'after'.",
        prompts: [
          { text: "Before:", type: "lines" as const, lines: 2 },
          { text: "After:", type: "lines" as const, lines: 2 },
        ],
      },
      // 17
      {
        type: "fill-in-blank" as const,
        title: "Conjunction Type Labels",
        instruction: "Fill in the conjunction and write T (time), R (reason) or C (contrast) in the box.",
        parentTip: "Identifying the type helps your child use a variety of conjunctions.",
        sentences: [
          { text: "She wore gloves ___ it was freezing. [T/R/C: R]", blanks: ["because"] },
          { text: "___ the rain cleared, the garden smelled fresh. [T/R/C: T]", blanks: ["After"] },
          { text: "___ he tried his best, he did not win. [T/R/C: C]", blanks: ["Although"] },
          { text: "She painted ___ her brother sketched. [T/R/C: T]", blanks: ["while"] },
        ],
      },
      // 18
      {
        type: "sorting" as const,
        title: "Sort Conjunctions by Type (Extended Set)",
        instruction: "Sort each conjunction into its correct group.",
        columns: ["Time", "Reason", "Contrast"],
        items: [
          { label: "before" }, { label: "since" }, { label: "despite" },
          { label: "after" }, { label: "as" }, { label: "while" },
          { label: "until" }, { label: "because" }, { label: "though" },
          { label: "whenever" }, { label: "even though" }, { label: "unless" },
        ],
      },
      // 19
      {
        type: "open-response" as const,
        title: "Identify Clauses",
        instruction: "Read each complex sentence. Underline the main clause (MC) and put brackets around the subordinate clause (SC).",
        prompts: [
          { text: "1. Although it was raining, the match continued.", type: "lines" as const, lines: 1 },
          { text: "2. She practised every day because she wanted to improve.", type: "lines" as const, lines: 1 },
          { text: "3. He will not eat his dinner unless you add tomato sauce.", type: "lines" as const, lines: 1 },
          { text: "4. While the dog slept, the cat crept across the kitchen.", type: "lines" as const, lines: 1 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Conjunction Challenge",
        content: "Write ten different complex sentences — each one using a different subordinating conjunction. Cover at least two time conjunctions, two reason conjunctions and two contrast conjunctions. Then read them aloud and discuss: which conjunction made the most interesting sentence? Which one would you most like to use in your next story?",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "fill-in-blank" as const,
        title: "Unless and Until",
        instruction: "'Unless' means 'except if'. 'Until' means 'up to the point when'. Fill in the correct one.",
        parentTip: "These two are often confused — read the sentence meaning carefully.",
        sentences: [
          { text: "She won't stop practising ___ she gets it right.", blanks: ["until"] },
          { text: "You cannot borrow my book ___ you promise to return it.", blanks: ["unless"] },
          { text: "Keep stirring the mixture ___ it thickens.", blanks: ["until"] },
          { text: "He will not come ___ you ask him nicely.", blanks: ["unless"] },
        ],
      },
      // 22
      {
        type: "open-response" as const,
        title: "Subordinate Clause at the Front",
        instruction: "When a subordinate clause comes first, it is followed by a comma. Rewrite each sentence so the subordinate clause comes first, adding a comma.",
        prompts: [
          { text: "She studied hard because she wanted to do well.\nRewritten:", type: "lines" as const, lines: 2 },
          { text: "He arrived early so that he could get a good seat.\nRewritten:", type: "lines" as const, lines: 2 },
          { text: "They went inside when it started to rain.\nRewritten:", type: "lines" as const, lines: 2 },
        ],
      },
      // 23
      {
        type: "circle-correct" as const,
        title: "Front-loaded or End-loaded Subordinate Clause?",
        instruction: "Circle F if the subordinate clause is at the front of the sentence, or E if it is at the end.",
        questions: [
          { prompt: "Although it was late, she kept reading.", options: ["F", "E"] },
          { prompt: "He went to bed after he brushed his teeth.", options: ["F", "E"] },
          { prompt: "Before the show started, the audience fell silent.", options: ["F", "E"] },
          { prompt: "She smiled even though she was nervous.", options: ["F", "E"] },
          { prompt: "When the alarm rang, everyone evacuated.", options: ["F", "E"] },
        ],
      },
      // 24
      {
        type: "multiple-choice" as const,
        title: "Comma Placement in Complex Sentences",
        instruction: "Choose the correctly punctuated version of each sentence.",
        questions: [
          {
            prompt: "Because it was cold outside (choose the correctly punctuated version):",
            options: [
              "Because it was cold outside we stayed inside.",
              "Because it was cold outside, we stayed inside.",
              "Because, it was cold outside we stayed inside.",
            ],
            answer: "Because it was cold outside, we stayed inside.",
          },
          {
            prompt: "She went to bed early (choose the correctly punctuated version):",
            options: [
              "She went to bed early, because she was tired.",
              "She went to bed early because, she was tired.",
              "She went to bed early because she was tired.",
            ],
            answer: "She went to bed early because she was tired.",
          },
        ],
      },
      // 25
      {
        type: "open-response" as const,
        title: "Combine Simple Sentences",
        instruction: "Join each pair of simple sentences into one complex sentence using an appropriate conjunction.",
        prompts: [
          { text: "The wind was howling. We could not hear each other.\nComplex sentence:", type: "lines" as const, lines: 2 },
          { text: "She loves swimming. The water is cold.\nComplex sentence:", type: "lines" as const, lines: 2 },
          { text: "He forgot his umbrella. He got soaked.\nComplex sentence:", type: "lines" as const, lines: 2 },
        ],
      },
      // 26
      {
        type: "sorting" as const,
        title: "Sort: Comma Needed or Not?",
        instruction: "In complex sentences, a comma is needed when the subordinate clause comes FIRST. Sort each sentence.",
        columns: ["Comma needed (SC at front)", "No comma needed (SC at end)"],
        items: [
          { label: "Although she was tired she kept going." },
          { label: "She kept going although she was tired." },
          { label: "Because it rained the match was cancelled." },
          { label: "The match was cancelled because it rained." },
          { label: "When he arrived everyone cheered." },
          { label: "Everyone cheered when he arrived." },
        ],
      },
      // 27
      {
        type: "true-false" as const,
        title: "True or False: Comma Rules",
        instruction: "Decide if the punctuation rule is correct.",
        statements: [
          { text: "A comma is needed after a front-loaded subordinate clause.", answer: true },
          { text: "A comma is always needed before a subordinate clause.", answer: false },
          { text: "'Although', 'because' and 'when' are subordinating conjunctions.", answer: true },
          { text: "A main clause can stand alone as a sentence.", answer: true },
          { text: "You always need a comma before 'because'.", answer: false },
        ],
      },
      // 28
      {
        type: "fill-in-blank" as const,
        title: "Add the Missing Comma",
        instruction: "Each sentence has a subordinate clause at the front. Add the missing comma by writing the corrected sentence.",
        parentTip: "Say the sentence aloud — there is a natural pause where the comma belongs.",
        sentences: [
          { text: "Before she went to bed[,] she brushed her teeth.", blanks: [","] },
          { text: "Although the exam was hard[,] she felt confident.", blanks: [","] },
          { text: "Since he had no money[,] he walked home.", blanks: [","] },
          { text: "While the soup simmered[,] she set the table.", blanks: [","] },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Write With a Variety of Conjunctions",
        instruction: "Write a complex sentence using each conjunction listed. Make them about different topics.",
        prompts: [
          { text: "because:", type: "lines" as const, lines: 1 },
          { text: "although:", type: "lines" as const, lines: 1 },
          { text: "whenever:", type: "lines" as const, lines: 1 },
          { text: "unless:", type: "lines" as const, lines: 1 },
          { text: "since:", type: "lines" as const, lines: 1 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Varying Sentence Openings",
        content: "Good writers vary their sentence openings to keep readers engaged. Starting every sentence with 'I' or 'The' becomes boring quickly. Try starting some sentences with a subordinate clause: 'Although it was late, ...' or 'Because she had practised so hard, ...' This instantly adds variety and shows a sophisticated writing style.",
      },
      // 31
      {
        type: "circle-correct" as const,
        title: "Which Conjunction Fits Best? (Set C)",
        instruction: "Choose the conjunction that creates the most logical sentence.",
        questions: [
          { prompt: "She ate breakfast ___ she left for school.", options: ["before", "although", "unless"] },
          { prompt: "The bridge was dangerous ___ it was very old.", options: ["although", "because", "until"] },
          { prompt: "___ the scientist worked hard, she made no progress.", options: ["Because", "Although", "Until"] },
          { prompt: "He plays piano ___ he practises every evening.", options: ["until", "although", "because"] },
        ],
      },
      // 32
      {
        type: "fill-in-blank" as const,
        title: "Conjunction Precision",
        instruction: "Fill in the best conjunction. More than one may be possible — choose the most precise.",
        sentences: [
          { text: "The project took three weeks ___ the team worked every weekend.", blanks: ["although"] },
          { text: "Keep the lid on the pot ___ it comes to a boil.", blanks: ["until"] },
          { text: "___ she had never tried surfing, she picked it up quickly.", blanks: ["Although"] },
          { text: "He felt relieved ___ he remembered the answer.", blanks: ["when"] },
        ],
      },
      // 33
      {
        type: "sorting" as const,
        title: "Sort: Which Relationship Does the Conjunction Show?",
        instruction: "Read each complex sentence and sort it by the relationship the conjunction creates.",
        columns: ["Time", "Reason", "Contrast"],
        items: [
          { label: "She cried when she heard the news." },
          { label: "Although he tried, he could not lift the box." },
          { label: "He ran because he was late." },
          { label: "She waited until her name was called." },
          { label: "Even though the food was cold, he ate it all." },
          { label: "Since it was raining, they moved inside." },
        ],
      },
      // 34
      {
        type: "open-response" as const,
        title: "Paragraph with Complex Sentences",
        instruction: "Write a short paragraph (4–5 sentences) about a rainy day. Include at least three different subordinating conjunctions. Underline each conjunction.",
        prompts: [
          { text: "My paragraph:", type: "box" as const, lines: 8 },
          { text: "Conjunctions I used:", type: "lines" as const, lines: 1 },
        ],
      },
      // 35
      {
        type: "multiple-choice" as const,
        title: "Identify the Subordinating Conjunction",
        instruction: "Choose the subordinating conjunction in each sentence.",
        questions: [
          { prompt: "She tidied her room before her guests arrived.", options: ["tidied", "before", "her", "arrived"], answer: "before" },
          { prompt: "Although he was short, he was an excellent basketball player.", options: ["Although", "was", "short", "excellent"], answer: "Although" },
          { prompt: "They stayed up late because the fireworks were spectacular.", options: ["stayed", "late", "because", "fireworks"], answer: "because" },
        ],
      },
      // 36
      {
        type: "fill-in-blank" as const,
        title: "Since vs Because",
        instruction: "'Since' can mean 'because' (reason) or 'from the time when' (time). Fill in the blank and label T (time) or R (reason).",
        parentTip: "Reading the full sentence helps distinguish the meaning.",
        sentences: [
          { text: "___ she moved to the city, she has been much happier. [T/R: T]", blanks: ["Since"] },
          { text: "___ you are here, you might as well help. [T/R: R]", blanks: ["Since"] },
          { text: "___ the accident, he has been more careful. [T/R: T]", blanks: ["Since"] },
          { text: "___ you know the answer, please share it. [T/R: R]", blanks: ["Since"] },
        ],
      },
      // 37
      {
        type: "open-response" as const,
        title: "Fix Faulty Complex Sentences",
        instruction: "Each sentence below has an error — a missing conjunction, a missing comma or a fragment. Rewrite it correctly.",
        prompts: [
          { text: "1. She put on her coat. Was cold outside.\nCorrected:", type: "lines" as const, lines: 2 },
          { text: "2. Although he studied all night he still forgot some answers.\nCorrected:", type: "lines" as const, lines: 2 },
          { text: "3. Because he wanted to be first he left early and arrived on time.\nCorrected:", type: "lines" as const, lines: 2 },
        ],
      },
      // 38
      {
        type: "true-false" as const,
        title: "True or False: Subordinating Conjunctions (Set B)",
        instruction: "Circle True or False.",
        statements: [
          { text: "'Unless' means the same as 'if not'.", answer: true },
          { text: "A complex sentence must have two main clauses.", answer: false },
          { text: "'Since' can be used to show both time and reason.", answer: true },
          { text: "The subordinate clause always comes before the main clause.", answer: false },
          { text: "A subordinate clause beginning with 'although' introduces a contrast.", answer: true },
        ],
      },
      // 39
      {
        type: "matching" as const,
        title: "Match Sentence Halves (Set B)",
        instruction: "Draw a line to match each sentence opening with the best ending.",
        left: [
          "He stayed in bed",
          "She ran every morning",
          "Although the test was hard,",
          "Unless you hurry,",
          "Since she moved schools,",
        ],
        right: [
          "you will miss the bus.",
          "she has made many new friends.",
          "she finished every question.",
          "because he had a fever.",
          "so that she could train for the marathon.",
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Conjunction Colour Code",
        content: "Take a paragraph from a book you are reading. Copy it out and use three different colours to highlight conjunctions: one colour for time conjunctions, one for reason conjunctions and one for contrast conjunctions. Count up the totals. Which type does the author use most? Why might that be? Write a short reflection on what you noticed.",
      },
      // ── CONSOLIDATING 41–80 ────────────────────────────────────────────────
      // 41
      {
        type: "open-response" as const,
        title: "Subordinate Clause Position",
        instruction: "Rewrite each sentence twice — once with the subordinate clause at the end, and once with it at the front (adding a comma).",
        prompts: [
          { text: "Base idea: She won the race. She had trained for months.\n\nSC at end:", type: "lines" as const, lines: 2 },
          { text: "SC at front (with comma):", type: "lines" as const, lines: 2 },
        ],
      },
      // 42
      {
        type: "fill-in-blank" as const,
        title: "Conjunctions in Non-fiction",
        instruction: "Fill in the best conjunction for these information sentences about Australian animals.",
        sentences: [
          { text: "The platypus uses its bill to detect prey ___ it hunts under water.", blanks: ["while"] },
          { text: "___ it is a mammal, the platypus lays eggs.", blanks: ["Although"] },
          { text: "Koalas sleep for up to 22 hours a day ___ eucalyptus leaves give very little energy.", blanks: ["because"] },
          { text: "___ kangaroo joeys are born, they crawl into their mother's pouch.", blanks: ["When"] },
        ],
      },
      // 43
      {
        type: "circle-correct" as const,
        title: "Conjunctions in Persuasive Writing",
        instruction: "Circle the conjunction that makes the persuasive sentence more effective.",
        parentTip: "In persuasive writing, contrast conjunctions can add power to an argument.",
        questions: [
          { prompt: "You should exercise daily ___ it improves both physical and mental health.", options: ["although", "because", "unless"] },
          { prompt: "___ some people think homework is unnecessary, research shows it builds discipline.", options: ["Because", "Although", "When"] },
          { prompt: "Children will benefit from cooking lessons ___ they practise at home too.", options: ["because", "although", "if"] },
        ],
      },
      // 44
      {
        type: "open-response" as const,
        title: "Complex Sentences in Different Text Types",
        instruction: "Write one complex sentence for each text type. Use a different conjunction each time.",
        prompts: [
          { text: "Narrative (story): Use 'while':", type: "lines" as const, lines: 2 },
          { text: "Persuasive text: Use 'although':", type: "lines" as const, lines: 2 },
          { text: "Information text: Use 'because':", type: "lines" as const, lines: 2 },
          { text: "Recount: Use 'after':", type: "lines" as const, lines: 2 },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Complex Sentences in Your Writing",
        content: "A paragraph that uses only simple sentences feels choppy: 'The dog barked. Tom woke up. He looked out the window.' Complex sentences create flow and show relationships: 'When the dog barked, Tom woke up and looked out the window.' Aim to vary your sentence types — simple, compound and complex — so your writing has rhythm and depth.",
      },
      // 46
      {
        type: "sorting" as const,
        title: "Sort Sentences by Type",
        instruction: "Sort each sentence into the correct column.",
        columns: ["Simple sentence", "Complex sentence"],
        items: [
          { label: "The cat sat on the mat." },
          { label: "Although it was late, she kept reading." },
          { label: "He ate his lunch." },
          { label: "She waited until the bell rang." },
          { label: "The sun set." },
          { label: "Because he was hungry, he made a snack." },
          { label: "Birds sang in the trees." },
          { label: "While she painted, her brother read." },
        ],
      },
      // 47
      {
        type: "open-response" as const,
        title: "Improve a Choppy Paragraph",
        instruction: "Rewrite this paragraph, joining some simple sentences into complex sentences using conjunctions. Aim for three complex sentences.",
        prompts: [
          {
            text: "Original: The storm came. We stayed inside. The power went out. It was dark. We found some candles. We played board games.\n\nYour improved paragraph:",
            type: "box" as const, lines: 8,
          },
        ],
      },
      // 48
      {
        type: "multiple-choice" as const,
        title: "Which Sentence Is Complex?",
        instruction: "Choose the complex sentence.",
        questions: [
          {
            prompt: "Which of these is a complex sentence?",
            options: [
              "She ran and jumped.",
              "Although she was tired, she finished the race.",
              "Tom and Mia went to the park.",
            ],
            answer: "Although she was tired, she finished the race.",
          },
          {
            prompt: "Which of these is a complex sentence?",
            options: [
              "He likes dogs but she prefers cats.",
              "The rain fell.",
              "Because it was sunny, they decided to have a picnic.",
            ],
            answer: "Because it was sunny, they decided to have a picnic.",
          },
        ],
      },
      // 49
      {
        type: "fill-in-blank" as const,
        title: "Conjunctions Across Text Types",
        instruction: "Choose the best conjunction for each context.",
        sentences: [
          { text: "INFORMATION TEXT: Bees are essential pollinators ___ plants rely on them to reproduce.", blanks: ["because"] },
          { text: "RECOUNT: ___ we arrived at the campsite, we set up our tents.", blanks: ["After"] },
          { text: "NARRATIVE: She crept forward ___ to make a sound.", blanks: ["without daring"] },
          { text: "PERSUASION: ___ some argue zoos are cruel, they play a vital role in conservation.", blanks: ["Although"] },
        ],
      },
      // 50
      {
        type: "home-activity" as const,
        title: "Conjunction Challenge",
        instruction: "Look for and practise complex sentences in everyday reading.",
        parentTip: "Newspaper articles and chapter books are full of complex sentences — they are great hunting grounds!",
        suggestions: [
          "Find a complex sentence in a book you are reading. Identify the main clause and subordinate clause.",
          "Set a timer for 2 minutes and write as many complex sentences as you can using a new conjunction each time.",
          "Say a simple sentence out loud, then challenge a family member to extend it using a conjunction.",
          "Highlight all conjunctions in a paragraph from a library book — which ones appear most often?",
        ],
      },
      // 51
      {
        type: "true-false" as const,
        title: "True or False: Complex Sentences in Writing",
        instruction: "Circle True or False.",
        statements: [
          { text: "Using only complex sentences makes writing better.", answer: false },
          { text: "Complex sentences can show cause and effect.", answer: true },
          { text: "A good writer varies sentence types.", answer: true },
          { text: "The subordinate clause is always the most important idea.", answer: false },
          { text: "Complex sentences can appear in non-fiction as well as fiction.", answer: true },
        ],
      },
      // 52
      {
        type: "open-response" as const,
        title: "Analyse a Complex Sentence",
        instruction: "Read this complex sentence and answer the questions about it.",
        prompts: [
          { text: "SENTENCE: Although the scientists had worked on the project for ten years, they were still unable to find a cure.\n\nMain clause:", type: "lines" as const, lines: 1 },
          { text: "Subordinate clause:", type: "lines" as const, lines: 1 },
          { text: "Conjunction:", type: "lines" as const, lines: 1 },
          { text: "What relationship does the conjunction show (time / reason / contrast)?", type: "lines" as const, lines: 1 },
        ],
      },
      // 53
      {
        type: "fill-in-blank" as const,
        title: "Relative Clauses: Who, Which, That",
        instruction: "'Who', 'which' and 'that' can also introduce subordinate clauses. Fill in who, which or that.",
        parentTip: "'Who' refers to people; 'which' to things (non-essential); 'that' to things (essential).",
        sentences: [
          { text: "The student ___ studied hardest won the prize.", blanks: ["who"] },
          { text: "The book ___ she recommended was fascinating.", blanks: ["that"] },
          { text: "The bridge, ___ was built in 1905, is still in use.", blanks: ["which"] },
          { text: "The teacher ___ taught me in Year 3 is now a principal.", blanks: ["who"] },
        ],
      },
      // 54
      {
        type: "circle-correct" as const,
        title: "Who, Which or That?",
        instruction: "Circle the correct relative pronoun.",
        questions: [
          { prompt: "The dog ___ ran away was found by a kind neighbour.", options: ["who", "that", "which"] },
          { prompt: "The stadium, ___ was renovated last year, holds 50,000 people.", options: ["that", "who", "which"] },
          { prompt: "She is the scientist ___ discovered the new element.", options: ["which", "who", "that"] },
          { prompt: "The book ___ I borrowed was overdue.", options: ["who", "which", "that"] },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Add Relative Clauses",
        instruction: "Expand each simple sentence by adding a relative clause using who, which or that.",
        prompts: [
          { text: "The teacher wrote on the board.\nExpanded:", type: "lines" as const, lines: 2 },
          { text: "The old house stood at the end of the street.\nExpanded:", type: "lines" as const, lines: 2 },
          { text: "The astronaut returned to Earth.\nExpanded:", type: "lines" as const, lines: 2 },
        ],
      },
      // 56
      {
        type: "sorting" as const,
        title: "Sort: Subordinating Conjunction or Relative Pronoun?",
        instruction: "Sort each word that introduces a subordinate clause.",
        columns: ["Subordinating conjunction", "Relative pronoun"],
        items: [
          { label: "because" }, { label: "who" }, { label: "although" },
          { label: "which" }, { label: "when" }, { label: "that" },
          { label: "since" }, { label: "unless" }, { label: "who" },
        ],
      },
      // 57
      {
        type: "fill-in-blank" as const,
        title: "Complex Sentences: Narrative",
        instruction: "Complete this narrative paragraph by filling in the best conjunction for each blank.",
        sentences: [
          { text: "___ the fog rolled in, the lighthouse beam began to sweep across the bay.", blanks: ["As"] },
          { text: "The sailors strained to see the shore ___ the fog was too thick.", blanks: ["although"] },
          { text: "___ they heard the foghorn, they knew they were close.", blanks: ["When"] },
          { text: "They would not rest ___ they were safely anchored.", blanks: ["until"] },
        ],
      },
      // 58
      {
        type: "open-response" as const,
        title: "Complex Sentence Crafting",
        instruction: "Write three complex sentences about the same topic — an animal of your choice. Use a time, a reason and a contrast conjunction.",
        prompts: [
          { text: "My animal:", type: "lines" as const, lines: 1 },
          { text: "Time conjunction sentence:", type: "lines" as const, lines: 2 },
          { text: "Reason conjunction sentence:", type: "lines" as const, lines: 2 },
          { text: "Contrast conjunction sentence:", type: "lines" as const, lines: 2 },
        ],
      },
      // 59
      {
        type: "multiple-choice" as const,
        title: "Effect of Different Conjunctions",
        instruction: "Choose the conjunction that creates the meaning described.",
        questions: [
          { prompt: "She kept going ___ she was exhausted. (to show determination despite difficulty)", options: ["because", "even though", "when", "until"], answer: "even though" },
          { prompt: "He will succeed ___ he works hard. (to show a condition)", options: ["although", "if", "while", "when"], answer: "if" },
          { prompt: "They cheered ___ the final goal was scored. (to show the exact moment)", options: ["because", "although", "when", "unless"], answer: "when" },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip" as const,
        title: "Tip: Conjunctions and Tone",
        content: "The conjunction you choose changes the tone of a sentence. 'She failed because she did not study' sounds like a cause-effect explanation. 'She failed although she studied hard' creates sympathy. 'She failed unless she studied harder' is a warning. Same basic information — completely different tone. Choose your conjunction deliberately!",
      },
      // 61 (SPARK at ~60)
      {
        type: "spark" as const,
        title: "Spark: Same Idea, Different Tone",
        content: "Take this simple scenario: A student did not pass a test. Write four different complex sentences about this, each using a different conjunction to create a different emotional effect — one sympathetic, one critical, one factual and one hopeful. Share your sentences with a family member and ask which one they find most powerful and why.",
      },
      // 62
      {
        type: "fill-in-blank" as const,
        title: "Conjunctions in Persuasive Writing",
        instruction: "Fill in the best conjunction to strengthen each persuasive argument.",
        sentences: [
          { text: "___ some argue that social media is harmful, it can also be a powerful tool for learning.", blanks: ["Although"] },
          { text: "Students perform better ___ they get enough sleep each night.", blanks: ["when"] },
          { text: "Schools should teach coding ___ digital skills are essential in today's world.", blanks: ["because"] },
          { text: "Children will not reach their potential ___ they have access to quality education.", blanks: ["unless"] },
        ],
      },
      // 63
      {
        type: "open-response" as const,
        title: "Sentence Combining: Advanced",
        instruction: "Join these pairs of ideas into one complex sentence. You may move the ideas around for best effect.",
        prompts: [
          { text: "Idea A: The volcano had been dormant for centuries.\nIdea B: Scientists were surprised when it erupted.\nComplex sentence:", type: "lines" as const, lines: 2 },
          { text: "Idea A: Mia had never played chess before.\nIdea B: She beat the school champion on her first try.\nComplex sentence:", type: "lines" as const, lines: 2 },
        ],
      },
      // 64
      {
        type: "circle-correct" as const,
        title: "Most Effective Complex Sentence",
        instruction: "Circle the complex sentence that is most effective and explain why.",
        questions: [
          {
            prompt: "Which version is most effective?",
            options: [
              "She was tired. She kept going.",
              "She kept going although she was exhausted.",
              "She kept going and she was tired.",
            ],
          },
          {
            prompt: "Which version is most effective?",
            options: [
              "The snow fell. It covered everything.",
              "The snow fell and it was cold.",
              "As the snow fell silently, it covered the entire valley in white.",
            ],
          },
        ],
      },
      // 65
      {
        type: "sorting" as const,
        title: "Sort Sentences: Simple, Compound or Complex?",
        instruction: "Sort each sentence into its type.",
        columns: ["Simple", "Compound (and/but/or)", "Complex (subordinating conjunction)"],
        items: [
          { label: "The rain fell." },
          { label: "She sang and he played guitar." },
          { label: "Although it was late, she kept reading." },
          { label: "The dog barked loudly." },
          { label: "He tried hard but he could not lift the box." },
          { label: "Because she studied every night, she aced the exam." },
          { label: "Birds flew past." },
          { label: "She called him but he did not answer." },
          { label: "When the alarm rang, everyone left calmly." },
        ],
      },
      // 66
      {
        type: "open-response" as const,
        title: "Write a Varied Paragraph",
        instruction: "Write a paragraph about a visit to a new place. Include at least one simple sentence, one compound sentence and two complex sentences. Label each sentence type in the margin.",
        prompts: [
          { text: "My paragraph:", type: "box" as const, lines: 10 },
        ],
      },
      // 67
      {
        type: "fill-in-blank" as const,
        title: "Formal Conjunctions",
        instruction: "Replace the informal conjunction in brackets with a more formal one from the box. Word bank: consequently, therefore, nevertheless, however, furthermore.",
        sentences: [
          { text: "The experiment failed. [So] ___, the team redesigned their approach.", blanks: ["Consequently"] },
          { text: "He was unwell. [But] ___, he attended the ceremony.", blanks: ["Nevertheless"] },
          { text: "The results were positive. [And also] ___, they were unexpected.", blanks: ["Furthermore"] },
          { text: "She worked hard. [So] ___, she earned a distinction.", blanks: ["Therefore"] },
        ],
      },
      // 68
      {
        type: "matching" as const,
        title: "Match Formal Conjunctions to Their Meanings",
        instruction: "Draw a line to match each formal conjunction with its meaning.",
        parentTip: "These formal connectives appear in academic and informational writing.",
        left: ["consequently", "nevertheless", "furthermore", "therefore", "however"],
        right: [
          "despite this / but",
          "as a result of this",
          "in addition / and also",
          "so / as a result",
          "in contrast / on the other hand",
        ],
      },
      // 69
      {
        type: "open-response" as const,
        title: "Conjunctions in a Recount",
        instruction: "Write a five-sentence recount of something that happened to you recently. Use at least three different conjunctions and underline each one.",
        prompts: [
          { text: "My recount:", type: "box" as const, lines: 8 },
          { text: "Conjunctions used:", type: "lines" as const, lines: 1 },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Complex Sentence Spotter",
        instruction: "Find complex sentences in everyday texts this week.",
        parentTip: "When you find a complex sentence together, pause and identify the main clause, conjunction and subordinate clause.",
        suggestions: [
          "Find three complex sentences in a newspaper or magazine article and identify the conjunction in each.",
          "Write five complex sentences about your day, varying whether the subordinate clause comes first or last.",
          "Read a paragraph from a chapter book aloud — how many conjunctions can you find?",
          "Rewrite a paragraph from a book using different conjunctions — how does the meaning change?",
        ],
      },
      // ── EXTENDING 71–100 ──────────────────────────────────────────────────
      // 71
      {
        type: "open-response" as const,
        title: "Embedded Subordinate Clauses",
        instruction: "An embedded clause sits in the middle of a sentence, separated by commas. Add an embedded clause to each sentence.",
        prompts: [
          { text: "The old house _____ stood at the edge of the cliff.\nAdd an embedded clause (who/which):", type: "lines" as const, lines: 2 },
          { text: "The scientist _____ won the Nobel Prize.\nAdd an embedded clause:", type: "lines" as const, lines: 2 },
        ],
      },
      // 72
      {
        type: "fill-in-blank" as const,
        title: "Embedded Clauses with Commas",
        instruction: "Add commas in the correct places to punctuate each embedded clause.",
        sentences: [
          { text: "The bridge [,] which was built in 1895 [,] is still in use today.", blanks: [",", ","] },
          { text: "My uncle [,] who lives in Darwin [,] is a wildlife photographer.", blanks: [",", ","] },
          { text: "The letter [,] which had been delayed for weeks [,] finally arrived.", blanks: [",", ","] },
        ],
      },
      // 73
      {
        type: "sorting" as const,
        title: "Sort: Types of Subordinate Clause",
        instruction: "Sort each underlined clause by type.",
        columns: ["Time clause", "Reason clause", "Contrast clause", "Relative clause"],
        items: [
          { label: "After the show ended, we went home." },
          { label: "She won because she had trained hardest." },
          { label: "Although it was expensive, she bought it." },
          { label: "The artist, who painted at dawn, was famous." },
          { label: "He waited until she arrived." },
          { label: "The book that she recommended was sold out." },
          { label: "Since he was unwell, he stayed home." },
          { label: "Even though the team lost, they were proud." },
        ],
      },
      // 74
      {
        type: "open-response" as const,
        title: "Conjunctions in Argument Writing",
        instruction: "Write a three-sentence argument on the topic 'School uniforms should be compulsory'. Use one contrast conjunction, one reason conjunction and one time/condition conjunction. Label each.",
        prompts: [
          { text: "Sentence 1 (contrast conjunction _____):", type: "lines" as const, lines: 2 },
          { text: "Sentence 2 (reason conjunction _____):", type: "lines" as const, lines: 2 },
          { text: "Sentence 3 (condition conjunction _____):", type: "lines" as const, lines: 2 },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Conjunctions and Sentence Rhythm",
        content: "The position of a subordinate clause affects the rhythm and emphasis of a sentence. 'She kept going until she reached the top' ends on effort and achievement — the main idea is last. 'Until she reached the top, she kept going' puts the goal at the front — it builds suspense. Professional writers shift clauses around deliberately to control where the reader's eye lands. Try it in your own writing!",
      },
      // 76
      {
        type: "multiple-choice" as const,
        title: "Effect of Clause Position",
        instruction: "Choose the version where the subordinate clause position creates the best effect for the description given.",
        questions: [
          {
            prompt: "You want to emphasise the surprising result:",
            options: [
              "She won, although nobody expected it.",
              "Although nobody expected it, she won.",
              "She won and nobody expected it.",
            ],
            answer: "Although nobody expected it, she won.",
          },
          {
            prompt: "You want to build suspense before revealing the discovery:",
            options: [
              "He discovered a secret room when he moved the bookcase.",
              "When he moved the bookcase, he discovered a secret room.",
              "He moved the bookcase and found a room.",
            ],
            answer: "When he moved the bookcase, he discovered a secret room.",
          },
        ],
      },
      // 77
      {
        type: "open-response" as const,
        title: "Edit for Conjunction Variety",
        instruction: "Read this paragraph. It uses 'because' too often. Rewrite it, replacing two 'because's with different conjunctions that still make sense.",
        prompts: [
          {
            text: "Original: He loved the sea because it was beautiful. He went swimming every day because he wanted to stay fit. He never surfed because he was afraid of big waves.\n\nRewritten:",
            type: "box" as const, lines: 6,
          },
        ],
      },
      // 78
      {
        type: "fill-in-blank" as const,
        title: "Sophisticated Conjunctions",
        instruction: "Fill in the blank with the most sophisticated conjunction that fits the meaning.",
        sentences: [
          { text: "___ [although/even though] the findings were inconclusive, the researchers published their work.", blanks: ["Even though"] },
          { text: "The law will remain in force ___ [until/unless] Parliament votes to repeal it.", blanks: ["unless"] },
          { text: "___ [when/whenever] the temperature drops, the pipes in the old building freeze.", blanks: ["Whenever"] },
          { text: "The expedition was a success, ___ [although/despite] the fact that supplies ran low.", blanks: ["despite"] },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Multi-clause Sentences",
        instruction: "Write two sentences that each contain a main clause and TWO subordinate clauses. Use a different pair of conjunctions each time.",
        prompts: [
          { text: "Sentence 1 (conjunctions: _____ and _____):", type: "lines" as const, lines: 3 },
          { text: "Sentence 2 (conjunctions: _____ and _____):", type: "lines" as const, lines: 3 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Conjunction Author",
        content: "Write a complete short story (8–10 sentences) about a character who faces an unexpected challenge. Challenge: use at least six different subordinating conjunctions and vary whether they come at the front or end of the sentence. After writing, colour-code each conjunction by type (time, reason, contrast). Aim for a mix of all three types.",
      },
      // 81
      {
        type: "circle-correct" as const,
        title: "Complex or Compound-Complex?",
        instruction: "A compound-complex sentence has two main clauses AND at least one subordinate clause. Circle CC (compound-complex) or C (complex).",
        questions: [
          { prompt: "She studied hard and she passed the exam because she was determined.", options: ["C", "CC"] },
          { prompt: "Although it was raining, the match continued.", options: ["C", "CC"] },
          { prompt: "He cooked dinner while she set the table, and they ate together when the food was ready.", options: ["C", "CC"] },
          { prompt: "Because the trail was steep, they rested often.", options: ["C", "CC"] },
        ],
      },
      // 82
      {
        type: "open-response" as const,
        title: "Analyse Complex Sentences in a Text",
        instruction: "Read a paragraph from a book or article. Find two complex sentences and analyse each one.",
        prompts: [
          { text: "Complex sentence 1 (copy it out):", type: "lines" as const, lines: 2 },
          { text: "Main clause:              Subordinate clause:              Conjunction:", type: "lines" as const, lines: 2 },
          { text: "Complex sentence 2 (copy it out):", type: "lines" as const, lines: 2 },
          { text: "Main clause:              Subordinate clause:              Conjunction:", type: "lines" as const, lines: 2 },
        ],
      },
      // 83
      {
        type: "fill-in-blank" as const,
        title: "Concessive Clauses",
        instruction: "A concessive clause admits something before making the main point (like 'although'). Fill in the best concessive conjunction.",
        sentences: [
          { text: "___ the evidence was strong, the jury needed more time.", blanks: ["Although"] },
          { text: "___ being the smallest team, they won the championship.", blanks: ["Despite"] },
          { text: "___ she had little experience, her performance was extraordinary.", blanks: ["Even though"] },
          { text: "___ the risk, the explorers continued deeper into the cave.", blanks: ["Despite"] },
        ],
      },
      // 84
      {
        type: "sorting" as const,
        title: "Sort Conjunctions: Formal vs Informal Register",
        instruction: "Sort each conjunction or connective by whether it is more formal or informal.",
        columns: ["Formal register", "Informal register"],
        items: [
          { label: "consequently" }, { label: "because" }, { label: "nevertheless" }, { label: "even though" },
          { label: "furthermore" }, { label: "and also" }, { label: "therefore" }, { label: "so" },
        ],
      },
      // 85
      {
        type: "open-response" as const,
        title: "Persuasive Writing: Conjunction-Rich Paragraph",
        instruction: "Write a persuasive paragraph arguing that children should spend more time outdoors. Use at least five different conjunctions — time, reason, contrast, condition and relative. Underline each conjunction.",
        prompts: [
          { text: "My paragraph:", type: "box" as const, lines: 10 },
        ],
      },
      // 86
      {
        type: "multiple-choice" as const,
        title: "Conjunction Choice: Academic Writing",
        instruction: "Choose the conjunction most appropriate for academic or formal writing.",
        questions: [
          { prompt: "The experiment showed a result ___ the researchers had not anticipated.", options: ["that", "which", "what", "who"], answer: "that" },
          { prompt: "The policy was implemented ___ the community had raised concerns.", options: ["so", "even though", "cause", "and"], answer: "even though" },
          { prompt: "The data suggests a correlation, ___ further research is required.", options: ["so", "but", "however", "yet"], answer: "however" },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Reflecting on Sentence Structure",
        instruction: "Look at a piece of your own writing. Answer these questions about your use of conjunctions.",
        prompts: [
          { text: "Which conjunctions did you use most often?", type: "lines" as const, lines: 1 },
          { text: "Which types (time/reason/contrast) did you underuse?", type: "lines" as const, lines: 1 },
          { text: "Rewrite one sentence from your work using a different conjunction:", type: "lines" as const, lines: 2 },
          { text: "How does the new conjunction change the meaning or tone?", type: "lines" as const, lines: 2 },
        ],
      },
      // 88
      {
        type: "true-false" as const,
        title: "True or False: Advanced Clauses",
        instruction: "Circle True or False.",
        statements: [
          { text: "A relative clause is a type of subordinate clause.", answer: true },
          { text: "Compound-complex sentences contain only subordinate clauses.", answer: false },
          { text: "Concessive clauses introduce a contrast or admission before the main point.", answer: true },
          { text: "Formal connectives like 'consequently' can replace some conjunctions in essays.", answer: true },
          { text: "Moving a subordinate clause to the front of a sentence never changes the meaning.", answer: false },
        ],
      },
      // 89
      {
        type: "fill-in-blank" as const,
        title: "Final Conjunction Mastery",
        instruction: "Fill in the best conjunction for each blank in this formal information text.",
        sentences: [
          { text: "Rainforests are vital ecosystems ___ they produce oxygen and regulate rainfall.", blanks: ["because"] },
          { text: "___ they cover only 6% of Earth's surface, they are home to half of all species.", blanks: ["Although"] },
          { text: "Species will continue to go extinct ___ deforestation rates are reduced.", blanks: ["unless"] },
          { text: "Governments and individuals must act now ___ future generations still have wild places to treasure.", blanks: ["so that"] },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: The Power of 'So That'",
        content: "'So that' is a conjunction of purpose — it tells the reader why something is done. 'She practised so that she would be ready for the concert.' It is stronger than just 'because' in purpose clauses. Also useful: 'in order that', 'in case', 'provided that'. Each adds a specific logical relationship. The more precisely you can express relationships between ideas, the clearer and more persuasive your writing becomes.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Purpose Clauses",
        instruction: "Write four sentences using purpose conjunctions: so that, in order to, in case, provided that.",
        prompts: [
          { text: "so that:", type: "lines" as const, lines: 2 },
          { text: "in order to:", type: "lines" as const, lines: 2 },
          { text: "in case:", type: "lines" as const, lines: 2 },
          { text: "provided that:", type: "lines" as const, lines: 2 },
        ],
      },
      // 92
      {
        type: "sorting" as const,
        title: "Sort Conjunctions: Logical Relationship",
        instruction: "Sort each conjunction by the logical relationship it expresses.",
        columns: ["Cause/reason", "Contrast/concession", "Condition", "Purpose"],
        items: [
          { label: "because" }, { label: "although" }, { label: "if" }, { label: "so that" },
          { label: "since" }, { label: "even though" }, { label: "unless" }, { label: "in order to" },
          { label: "as" }, { label: "despite" }, { label: "provided that" }, { label: "in case" },
        ],
      },
      // 93
      {
        type: "open-response" as const,
        title: "Complex Sentences: Final Story Challenge",
        instruction: "Write a 10-sentence story about an explorer who discovers a lost civilisation. Use at least 8 different subordinating conjunctions. Highlight each conjunction in a different colour by type.",
        prompts: [
          { text: "My story:", type: "box" as const, lines: 14 },
        ],
      },
      // 94
      {
        type: "multiple-choice" as const,
        title: "Conjunction Effect: Which Fits the Purpose?",
        instruction: "Choose the conjunction that best fulfils the writing purpose described.",
        parentTip: "Discuss how each option changes the meaning before choosing.",
        questions: [
          { prompt: "To create suspense before the main event:", options: ["so that", "As she turned the corner,", "because", "although"], answer: "As she turned the corner," },
          { prompt: "To add a surprising contrast:", options: ["because", "when", "even though", "until"], answer: "even though" },
          { prompt: "To explain a condition for success:", options: ["because", "provided that", "although", "when"], answer: "provided that" },
        ],
      },
      // 95
      {
        type: "fill-in-blank" as const,
        title: "Conjunctions in a Formal Letter",
        instruction: "Complete this formal letter extract using the best conjunction for each blank.",
        sentences: [
          { text: "I am writing to express my concern ___ the proposed changes to the local park.", blanks: ["regarding"] },
          { text: "___ the plans include new sports facilities, they also involve removing significant tree cover.", blanks: ["Although"] },
          { text: "These trees have stood for decades ___ they provide a habitat for native birds.", blanks: ["and"] },
          { text: "I urge the council to reconsider ___ it is too late to preserve these trees.", blanks: ["before"] },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Grammar Reflection: What I Have Learned",
        instruction: "Answer these questions to reflect on what you have learned about complex sentences and conjunctions.",
        prompts: [
          { text: "In your own words, what is a complex sentence?", type: "lines" as const, lines: 2 },
          { text: "What is the difference between a main clause and a subordinate clause?", type: "lines" as const, lines: 2 },
          { text: "Give one example each of a time, reason and contrast conjunction:", type: "lines" as const, lines: 2 },
          { text: "How will you use complex sentences in your next piece of writing?", type: "lines" as const, lines: 2 },
        ],
      },
      // 97
      {
        type: "sorting" as const,
        title: "Final Sort: Complex Sentence Features",
        instruction: "Sort each feature into the correct column.",
        columns: ["Feature of a main clause", "Feature of a subordinate clause"],
        items: [
          { label: "Can stand alone as a sentence" },
          { label: "Begins with a subordinating conjunction" },
          { label: "Contains the main idea" },
          { label: "Cannot stand alone" },
          { label: "Is the most important clause" },
          { label: "Adds extra information" },
          { label: "Makes complete sense by itself" },
          { label: "Begins with 'because', 'although' or 'when'" },
        ],
      },
      // 98
      {
        type: "true-false" as const,
        title: "True or False: Mastery Check",
        instruction: "Circle True or False to show your understanding.",
        statements: [
          { text: "'So that' expresses purpose.", answer: true },
          { text: "All complex sentences must have a comma.", answer: false },
          { text: "A relative clause uses who, which or that.", answer: true },
          { text: "'Despite' is a subordinating conjunction.", answer: true },
          { text: "Moving the subordinate clause to the front of a sentence can change emphasis.", answer: true },
        ],
      },
      // 99
      {
        type: "home-activity" as const,
        title: "Conjunction Mastery Challenge",
        instruction: "Apply complex sentence skills in real-world writing.",
        parentTip: "Encourage your child to edit for conjunction variety in every piece of writing from now on.",
        suggestions: [
          "Write a letter to your future self using at least six different conjunctions.",
          "Find three examples of embedded relative clauses in books or newspapers.",
          "Rewrite a paragraph using only simple sentences — then rewrite it again with complex sentences. Compare the effect.",
          "Create a conjunction reference card to keep near your writing space.",
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Sentence Architect",
        content: "Great writers think like architects — they design sentences with intention. Write a scene of exactly 10 sentences in which no two sentences start the same way and every sentence is a different type (simple, compound, complex, compound-complex). Use at least five different subordinating conjunctions. When you finish, label every sentence type and circle every conjunction. This is how professional authors edit their work!",
      },
    ],
  },
  {
    slug: "speech-marks-punctuation",
    title: "Speech Marks & Dialogue Punctuation",
    strand: "Language",
    description:
      "Use speech marks, commas and capital letters correctly to write and punctuate dialogue.",
    learningGuide: {
      concept:
        "Speech marks show the exact words a person says. The spoken words always start with a capital letter. A comma separates the speech from the reporting clause such as he said or she whispered. Punctuation at the end of speech goes inside the closing speech marks.",
      activation:
        "Ask your child to say something — anything! Then write it down with speech marks and ask: Where do the marks go? Where does the capital letter go?",
      check:
        "After the worksheet, ask your child to write two lines of dialogue between two characters from a book they know.",
    },
    lesson: {
      title: "Giving Characters a Voice",
      objective:
        "Punctuate direct speech correctly using speech marks, commas and capital letters.",
      materials: [
        "This worksheet",
        "A pencil and coloured pencils",
        "A favourite picture book with dialogue",
      ],
      intro: {
        title: "Reading the Dialogue",
        script:
          "Open your favourite book and find a page where two characters are talking. Point to the speech marks with me. Notice how the words inside the marks are what the character actually says — their exact words. And notice how there is always a reporting clause — something like said Tom or whispered Maria — that tells us who is speaking. Now look at the punctuation. If the sentence inside the marks is a question, there is a question mark inside the closing marks. If it is a statement, there is a comma before the closing marks, then the reporting clause ends with a full stop.",
        action:
          "Read two or three dialogue exchanges from the book aloud, pointing to each punctuation mark as you go.",
      },
      mainActivity: {
        title: "The Four Rules",
        script:
          "Let us build a rule reference together. Rule 1 — speech marks go around the spoken words. Rule 2 — the first spoken word starts with a capital letter. Rule 3 — a comma separates speech from the reporting clause when the speech comes first. Rule 4 — the final punctuation mark of the speech goes inside the closing speech marks. Say all four rules with me. Good — now let us apply them.",
        action:
          "Write the four rules on a piece of paper as a reference card your child can use during the activities.",
      },
      wrapUp: {
        title: "Write a Conversation",
        script:
          "Now you are going to write a short conversation — four lines at least — between two characters. It could be two animals, two superheroes, or you and a friend. Remember all four rules. When you have finished, swap worksheets with me and we will check each other's punctuation.",
        action:
          "Review your child's dialogue together, marking any missing or incorrect punctuation gently.",
      },
      parentTip:
        "Play caption this with photographs from a magazine — take turns writing a speech bubble for the person in the photo and then converting it to proper dialogue with speech marks.",
      extension:
        "Ask your child to write a scene from their favourite book in play-script format, then convert it back to prose with proper speech marks. Discuss how the formats feel different.",
      resources: [
        {
          title: "ReadWriteThink — Using Dialogue in Writing",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/using-dialogue-enrich-student",
          description:
            "Lesson plan on using dialogue effectively in student writing.",
        },
        {
          title: "Khan Academy — Punctuating Dialogue",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:grammar/xe2c54a99ede11c03:punctuating-dialogue/e/punctuating-dialogue",
          description: "Interactive exercises on dialogue punctuation.",
        },
        {
          title: "ABC Education — English Skills",
          url: "https://www.abc.net.au/education/programs/behind-the-news/english-skills/",
          description:
            "Short video segments building grammar and writing skills.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "circle-correct" as const,
        title: "Where Do the Speech Marks Go?",
        instruction: "Circle the sentence that has speech marks in the correct place.",
        parentTip: "Remind your child: speech marks wrap around the EXACT words the person says.",
        questions: [
          {
            prompt: "Choose the correctly punctuated sentence:",
            options: [
              "Tom said \"hello.\"",
              "\"Hello,\" said Tom.",
              "Hello, said Tom.",
            ],
          },
          {
            prompt: "Choose the correctly punctuated sentence:",
            options: [
              "She whispered, \"Come here.\"",
              "She whispered \"Come here.\"",
              "\"She whispered, come here.\"",
            ],
          },
        ],
      },
      // 2
      {
        type: "true-false" as const,
        title: "True or False: The Four Rules of Dialogue",
        instruction: "Circle True or False for each rule.",
        statements: [
          { text: "Speech marks go around the exact words a character speaks.", answer: true },
          { text: "The first spoken word always starts with a capital letter.", answer: true },
          { text: "A comma separates the speech from the reporting clause when speech comes first.", answer: true },
          { text: "Punctuation at the end of speech goes outside the closing speech marks.", answer: false },
          { text: "A new speaker always starts on a new line.", answer: true },
        ],
      },
      // 3
      {
        type: "sorting" as const,
        title: "Sort: Correct or Incorrect Dialogue?",
        instruction: "Sort each sentence into the correct column.",
        parentTip: "Ask your child to explain what rule each correct example follows and what error each incorrect one contains.",
        columns: ["Correct punctuation", "Contains an error"],
        items: [
          { label: "\"Let's go,\" said Tom." },
          { label: "\"where is the library\" asked Sam." },
          { label: "\"I love rainy days,\" she whispered." },
          { label: "\"Watch out!\" yelled the coach." },
          { label: "\"the dog is missing said Mia.\"" },
          { label: "\"Are you ready?\" he asked." },
        ],
      },
      // 4
      {
        type: "open-response" as const,
        title: "Add the Speech Marks (Set A)",
        instruction: "Rewrite each sentence, adding speech marks, capital letters and commas in the correct places.",
        prompts: [
          { text: "1. tom shouted i can see the ocean from here\nAnswer:", type: "lines" as const, lines: 2 },
          { text: "2. the teacher said please open your books to page twelve\nAnswer:", type: "lines" as const, lines: 2 },
          { text: "3. i am so excited whispered lily\nAnswer:", type: "lines" as const, lines: 2 },
          { text: "4. are you ready to go asked dad\nAnswer:", type: "lines" as const, lines: 2 },
        ],
      },
      // 5
      {
        type: "circle-correct" as const,
        title: "Spot the Error (Set A)",
        instruction: "One speech mark, comma or capital letter is wrong or missing. Circle the best description of the error.",
        questions: [
          {
            prompt: "\"I love swimming said Mia.",
            options: ["Missing closing speech mark after swimming", "Missing comma before said", "Missing capital I"],
          },
          {
            prompt: "\"where are my shoes?\" asked Dad.",
            options: ["Missing capital W in where", "Missing comma after shoes", "Missing speech mark after Dad"],
          },
          {
            prompt: "\"This is delicious,\" She said.",
            options: ["Capital S in She should be lowercase", "Missing comma after delicious", "Missing opening speech mark"],
          },
        ],
      },
      // 6
      {
        type: "fill-in-blank" as const,
        title: "Complete the Dialogue",
        instruction: "Fill in the missing word — either the reporting verb or the punctuation mark.",
        parentTip: "Reporting verbs tell us HOW someone speaks — choose one that fits the context.",
        sentences: [
          { text: "\"I can't believe we won[!]\" ___ [said/cheered] Mia.", blanks: ["!", "cheered"] },
          { text: "\"Where is the map[?]\" he ___ [asked].", blanks: ["?", "asked"] },
          { text: "\"Please be quiet[,]\" ___ [said/whispered] the librarian.", blanks: [",", "whispered"] },
        ],
      },
      // 7
      {
        type: "matching" as const,
        title: "Match the Reporting Verb to the Situation",
        instruction: "Draw a line to match each situation with the best reporting verb.",
        parentTip: "Varying reporting verbs makes dialogue much more expressive.",
        left: [
          "A character is very excited",
          "A character is angry",
          "A character is trying to keep a secret",
          "A character is asking a question kindly",
          "A character gives an order",
        ],
        right: ["enquired", "commanded", "exclaimed", "snarled", "whispered"],
      },
      // 8
      {
        type: "sorting" as const,
        title: "Sort Reporting Verbs by Emotion",
        instruction: "Sort these reporting verbs by the emotion they convey.",
        columns: ["Angry / forceful", "Quiet / secretive", "Surprised / excited", "Sad / worried"],
        items: [
          { label: "snarled" }, { label: "murmured" }, { label: "exclaimed" }, { label: "sobbed" },
          { label: "demanded" }, { label: "whispered" }, { label: "gasped" }, { label: "whimpered" },
          { label: "barked" }, { label: "breathed" }, { label: "cried" }, { label: "announced" },
        ],
      },
      // 9
      {
        type: "open-response" as const,
        title: "Rewrite with Better Reporting Verbs",
        instruction: "Rewrite each sentence, replacing 'said' with a more expressive reporting verb.",
        prompts: [
          { text: "1. \"Get off my land!\" said the farmer.\nRewritten:", type: "lines" as const, lines: 1 },
          { text: "2. \"I think there is someone there,\" said Mia.\nRewritten:", type: "lines" as const, lines: 1 },
          { text: "3. \"We won the championship!\" said the captain.\nRewritten:", type: "lines" as const, lines: 1 },
          { text: "4. \"Please don't go,\" said the child.\nRewritten:", type: "lines" as const, lines: 1 },
        ],
      },
      // 10
      {
        type: "multiple-choice" as const,
        title: "Dialogue Punctuation Rules",
        instruction: "Choose the correctly punctuated version of each sentence.",
        questions: [
          {
            prompt: "Select the correct version:",
            options: [
              "\"I love this book\", she said.",
              "\"I love this book,\" she said.",
              "\"I love this book\" she said.",
            ],
            answer: "\"I love this book,\" she said.",
          },
          {
            prompt: "Select the correct version:",
            options: [
              "\"Where is the key?\" he asked.",
              "\"Where is the key,\" he asked.",
              "\"Where is the key?\" He asked.",
            ],
            answer: "\"Where is the key?\" he asked.",
          },
          {
            prompt: "Select the correct version:",
            options: [
              "She cried, \"it's not fair!\"",
              "She cried, \"It's not fair!\"",
              "She cried \"It's not fair!\"",
            ],
            answer: "She cried, \"It's not fair!\"",
          },
        ],
      },
      // 11
      {
        type: "open-response" as const,
        title: "Punctuate This Dialogue",
        instruction: "Add speech marks, capital letters, commas and full stops to this unpunctuated dialogue.",
        parentTip: "Work through one sentence at a time, checking each of the four rules.",
        prompts: [
          { text: "1. where are we going asked tom\nAnswer:", type: "lines" as const, lines: 1 },
          { text: "2. we are going to the beach said mum\nAnswer:", type: "lines" as const, lines: 1 },
          { text: "3. tom shouted i can't wait to swim\nAnswer:", type: "lines" as const, lines: 1 },
          { text: "4. don't forget your sunscreen warned dad\nAnswer:", type: "lines" as const, lines: 1 },
        ],
      },
      // 12
      {
        type: "circle-correct" as const,
        title: "Statement, Question or Exclamation?",
        instruction: "Choose the correct end punctuation for each piece of dialogue.",
        questions: [
          { prompt: "\"Is there anyone home___\"", options: [".", "?", "!"] },
          { prompt: "\"I have never seen anything like it___\"", options: [".", "?", "!"] },
          { prompt: "\"The meeting starts at nine o'clock___\"", options: [".", "?", "!"] },
          { prompt: "\"Fire___\"", options: [".", "?", "!"] },
        ],
      },
      // 13
      {
        type: "sorting" as const,
        title: "Sort: Statement, Question or Exclamation Dialogue?",
        instruction: "Sort each piece of dialogue by the type of sentence it is.",
        columns: ["Statement", "Question", "Exclamation"],
        items: [
          { label: "\"The train leaves at noon.\"" },
          { label: "\"Are you coming with us?\"" },
          { label: "\"I can't believe it!\"" },
          { label: "\"She lives at the end of the road.\"" },
          { label: "\"What time is it?\"" },
          { label: "\"That was incredible!\"" },
        ],
      },
      // 14
      {
        type: "fill-in-blank" as const,
        title: "Speech Before or After the Reporting Clause?",
        instruction: "Rewrite each sentence the other way — if speech is first, put it last, and vice versa.",
        parentTip: "When the reporting clause comes first, it is followed by a comma before the opening speech mark.",
        sentences: [
          { text: "She said[,] \"We are leaving now.\" → \"We are leaving now[,]\" she said.", blanks: [",", ","] },
          { text: "He shouted[,] \"Run!\" → \"Run[!]\" he shouted.", blanks: [",", "!"] },
          { text: "She whispered[,] \"I know a secret.\" → \"I know a secret[,]\" she whispered.", blanks: [",", ","] },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: The Four Rules of Dialogue",
        content: "Rule 1: Speech marks go around the exact words spoken. Rule 2: The first spoken word starts with a capital letter. Rule 3: A comma separates the speech from the reporting clause when speech comes first — the comma goes INSIDE the speech marks. Rule 4: The final punctuation of the speech goes INSIDE the closing speech marks. Check your own dialogue writing against all four rules every time.",
      },
      // 16
      {
        type: "open-response" as const,
        title: "Dialogue Error Hunt",
        instruction: "Each sentence has one punctuation error. Find and correct it.",
        prompts: [
          { text: "1. \"I am ready,\" She said.\nError:                    Corrected:", type: "lines" as const, lines: 1 },
          { text: "2. \"can we go now?\" asked Tom.\nError:                    Corrected:", type: "lines" as const, lines: 1 },
          { text: "3. She cried, \"it's not fair!\".\nError:                    Corrected:", type: "lines" as const, lines: 1 },
          { text: "4. \"Stop\" he commanded.\nError:                    Corrected:", type: "lines" as const, lines: 1 },
        ],
      },
      // 17
      {
        type: "true-false" as const,
        title: "True or False: Reporting Verbs",
        instruction: "Circle True or False.",
        statements: [
          { text: "'Said' is the only word we can use to introduce dialogue.", answer: false },
          { text: "Reporting verbs tell us how a character speaks.", answer: true },
          { text: "We always need a reporting verb in dialogue.", answer: false },
          { text: "'Whispered', 'shouted' and 'murmured' are all reporting verbs.", answer: true },
          { text: "The reporting clause can come before or after the speech.", answer: true },
        ],
      },
      // 18
      {
        type: "open-response" as const,
        title: "Write Dialogue From a Script",
        instruction: "This is a play script. Convert it to prose dialogue with correct speech marks and punctuation.",
        prompts: [
          {
            text: "SCRIPT:\nAva: I found the key.\nLiam: Where was it?\nAva: Under the mat, just like you said.\nLiam: Brilliant! Now we can get inside.\n\nPROSE DIALOGUE:",
            type: "box" as const, lines: 8,
          },
        ],
      },
      // 19
      {
        type: "circle-correct" as const,
        title: "New Speaker, New Line?",
        instruction: "Circle YES if the sentence starts a new paragraph (new speaker) or NO if it continues the same speaker.",
        questions: [
          { prompt: "Ava said she was ready. She picked up her bag.", options: ["YES — new paragraph", "NO — same speaker"] },
          { prompt: "\"I'm ready,\" said Ava. \"Are you coming?\" asked Liam.", options: ["YES — new paragraph", "NO — same speaker"] },
          { prompt: "\"I'm ready,\" said Ava. \"Great,\" she added.", options: ["YES — new paragraph", "NO — same speaker"] },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Speech Bubble to Dialogue",
        content: "Find a comic strip, graphic novel or illustrated story. Choose a page with at least four speech bubbles. Convert the speech bubbles into proper prose dialogue, using speech marks, varied reporting verbs and all four punctuation rules. Try to make the dialogue feel as natural and expressive as it does in the original. Share your converted dialogue with a family member.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "fill-in-blank" as const,
        title: "Punctuate Interrupted Dialogue",
        instruction: "Sometimes the reporting clause interrupts speech. Add correct punctuation.",
        parentTip: "When dialogue is interrupted, each part gets speech marks and the first word of the continuation is lower case (unless it is a new sentence).",
        sentences: [
          { text: "\"I believe[,]\" said Tom[,] \"that we are going the wrong way.\"", blanks: [",", ","] },
          { text: "\"You should wait[,]\" she warned[,] \"before making a decision.\"", blanks: [",", ","] },
          { text: "\"This path[,]\" said the guide[,] \"leads to the valley.\"", blanks: [",", ","] },
        ],
      },
      // 22
      {
        type: "open-response" as const,
        title: "Add the Reporting Clause in the Middle",
        instruction: "Rewrite each piece of dialogue, inserting the reporting clause in the middle.",
        prompts: [
          { text: "Original: \"We need to hurry. The tide is coming in.\"\nRewrite with 'she warned' in the middle:", type: "lines" as const, lines: 2 },
          { text: "Original: \"I have done this before. Trust me.\"\nRewrite with 'he said' in the middle:", type: "lines" as const, lines: 2 },
        ],
      },
      // 23
      {
        type: "sorting" as const,
        title: "Sort: Where Is the Reporting Clause?",
        instruction: "Sort each dialogue sentence by the position of the reporting clause.",
        columns: ["Reporting clause at the beginning", "Reporting clause at the end", "Reporting clause in the middle"],
        items: [
          { label: "She said, \"Let's go.\"" },
          { label: "\"Let's go,\" she said." },
          { label: "\"Let's go,\" she said, \"before it gets dark.\"" },
          { label: "Tom asked, \"Are you ready?\"" },
          { label: "\"Are you ready?\" Tom asked." },
          { label: "\"Are you sure,\" he asked, \"that you want to do this?\"" },
        ],
      },
      // 24
      {
        type: "multiple-choice" as const,
        title: "Interrupted Dialogue: Which Is Correct?",
        instruction: "Choose the correctly punctuated version of the interrupted dialogue.",
        questions: [
          {
            prompt: "Choose the correct version:",
            options: [
              "\"I think,\" said Mia, \"that we should leave now.\"",
              "\"I think\" said Mia \"that we should leave now.\"",
              "\"I think,\" Said Mia, \"that we should leave now.\"",
            ],
            answer: "\"I think,\" said Mia, \"that we should leave now.\"",
          },
          {
            prompt: "Choose the correct version:",
            options: [
              "\"This plan,\" he argued, \"will never work.\"",
              "\"This plan\" he argued, \"will never work.\"",
              "\"This plan,\" he argued \"will never work.\"",
            ],
            answer: "\"This plan,\" he argued, \"will never work.\"",
          },
        ],
      },
      // 25
      {
        type: "open-response" as const,
        title: "Write a 6-Line Dialogue",
        instruction: "Write a conversation (6 lines minimum) between two characters. Use: speech marks, at least three different reporting verbs, one interrupted dialogue, and a new line for each speaker.",
        prompts: [
          { text: "Characters: ___ and ___\nSetting:", type: "lines" as const, lines: 1 },
          { text: "Dialogue:", type: "box" as const, lines: 12 },
        ],
      },
      // 26
      {
        type: "true-false" as const,
        title: "True or False: Interrupted Dialogue",
        instruction: "Circle True or False.",
        statements: [
          { text: "When a reporting clause interrupts dialogue, each part of the speech gets its own speech marks.", answer: true },
          { text: "The second part of interrupted dialogue always starts with a capital letter.", answer: false },
          { text: "Commas surround the reporting clause in interrupted dialogue.", answer: true },
          { text: "Interrupted dialogue should only be used in formal writing.", answer: false },
          { text: "A new speaker always starts a new line.", answer: true },
        ],
      },
      // 27
      {
        type: "fill-in-blank" as const,
        title: "Reporting Verb Precision",
        instruction: "Choose the most precise reporting verb for each sentence from the box. Word bank: muttered, announced, urged, enquired, pleaded.",
        sentences: [
          { text: "\"Please let me go!\" she ___ [begged] desperately.", blanks: ["pleaded"] },
          { text: "\"I wonder if you could help me,\" he ___ [asked] politely.", blanks: ["enquired"] },
          { text: "\"I don't care,\" he ___ [said] under his breath.", blanks: ["muttered"] },
          { text: "\"You must try this,\" she ___ [encouraged].", blanks: ["urged"] },
          { text: "\"The winner is...,\" the host ___ [said] to the crowd.", blanks: ["announced"] },
        ],
      },
      // 28
      {
        type: "open-response" as const,
        title: "Dialogue Without 'Said'",
        instruction: "Write a 4-line dialogue between a student and a teacher. You are not allowed to use the word 'said' at all. Use four different reporting verbs.",
        prompts: [
          { text: "Your dialogue:", type: "box" as const, lines: 8 },
          { text: "Reporting verbs you used:", type: "lines" as const, lines: 1 },
        ],
      },
      // 29
      {
        type: "sorting" as const,
        title: "Sort: Reporting Clause Position Changes Meaning?",
        instruction: "These three versions of the same dialogue are sorted by reporting clause position. Sort by where the emphasis falls.",
        columns: ["Emphasis on the speech", "Emphasis balanced", "Emphasis on the speaker's manner"],
        items: [
          { label: "\"I'll never give up,\" she vowed firmly." },
          { label: "She vowed, \"I'll never give up.\"" },
          { label: "\"I'll never,\" she vowed firmly, \"give up.\"" },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Dialogue That Shows Character",
        content: "Dialogue should reveal character — what a person says and HOW they say it tells us who they are. A bully 'sneers'; a shy person 'murmurs'; a leader 'declares'. As a writer, choose reporting verbs and dialogue content that would be impossible for any other character to say. If your dialogue could belong to anyone, it is not specific enough. This is called 'voice'.",
      },
      // 31
      {
        type: "open-response" as const,
        title: "Character Voices in Dialogue",
        instruction: "Write one line of dialogue for each character type. The words and reporting verb must reveal the character.",
        prompts: [
          { text: "A confident, boastful character:", type: "lines" as const, lines: 1 },
          { text: "A nervous, uncertain character:", type: "lines" as const, lines: 1 },
          { text: "A kind, caring character:", type: "lines" as const, lines: 1 },
          { text: "A mysterious character who says as little as possible:", type: "lines" as const, lines: 1 },
        ],
      },
      // 32
      {
        type: "matching" as const,
        title: "Match Character to Their Dialogue",
        instruction: "Draw a line to match each character type with the dialogue that best reflects their personality.",
        left: [
          "A villain",
          "An excited child",
          "A wise elder",
          "A frightened character",
          "A stern authority figure",
        ],
        right: [
          "\"You will obey my orders, or there will be consequences,\" he stated coldly.",
          "\"Patience is the greatest teacher,\" she said quietly.",
          "\"There is something behind us — I can hear it!\" he breathed.",
          "\"I won! I actually won!\" she shrieked, jumping up and down.",
          "\"I will have what I want,\" he hissed, \"whatever it takes.\"",
        ],
      },
      // 33
      {
        type: "multiple-choice" as const,
        title: "Dialogue Punctuation: Advanced",
        instruction: "Choose the correctly punctuated version.",
        questions: [
          {
            prompt: "Choose the correct version:",
            options: [
              "\"I'm not sure,\" Ava admitted, \"whether we made the right choice.\"",
              "\"I'm not sure\" Ava admitted \"whether we made the right choice.\"",
              "\"I'm not sure,\" Ava admitted, \"Whether we made the right choice.\"",
            ],
            answer: "\"I'm not sure,\" Ava admitted, \"whether we made the right choice.\"",
          },
          {
            prompt: "Choose the correct version (exclamation then reporting clause):",
            options: [
              "\"Watch out!\" she screamed.",
              "\"Watch out!\" She screamed.",
              "\"Watch out,\" she screamed.",
            ],
            answer: "\"Watch out!\" she screamed.",
          },
        ],
      },
      // 34
      {
        type: "open-response" as const,
        title: "Script to Prose",
        instruction: "Convert this play script into prose narrative with proper dialogue punctuation.",
        prompts: [
          {
            text: "SCRIPT:\nSOPHIE: I found something buried in the garden.\nOLIVER: What is it? Let me see.\nSOPHIE: It looks like a very old coin.\nOLIVER: That could be valuable! We should tell a grown-up.\n\nPROSE VERSION:",
            type: "box" as const, lines: 10,
          },
        ],
      },
      // 35
      {
        type: "circle-correct" as const,
        title: "Choose the Best Reporting Verb",
        instruction: "Circle the reporting verb that best fits the context.",
        questions: [
          { prompt: "\"I never said that!\" the accused politician ___", options: ["whispered", "denied", "agreed"] },
          { prompt: "\"Let me help you with that,\" the stranger ___ kindly.", options: ["demanded", "offered", "commanded"] },
          { prompt: "\"This is the most beautiful place I have ever seen,\" she ___", options: ["complained", "argued", "breathed"] },
          { prompt: "\"You must leave immediately!\" the security guard ___", options: ["muttered", "ordered", "giggled"] },
        ],
      },
      // 36
      {
        type: "sorting" as const,
        title: "Sort Reporting Verbs: Formal or Informal?",
        instruction: "Sort these reporting verbs by register.",
        columns: ["Formal / literary", "Informal / everyday"],
        items: [
          { label: "stated" }, { label: "said" }, { label: "proclaimed" }, { label: "told" },
          { label: "declared" }, { label: "went" }, { label: "asserted" }, { label: "was like" },
        ],
      },
      // 37
      {
        type: "fill-in-blank" as const,
        title: "Dialogue in Narratives",
        instruction: "Fill in the missing punctuation marks in this narrative extract.",
        sentences: [
          { text: "[\"]\nI knew you would come[,]\" said the old man[.]\n[\"]", blanks: ["\"", ",", ".", "\""] },
          { text: "She gripped his arm. [\"]\nIs it safe?[\"]\n She asked[.]", blanks: ["\"", "\"", "."] },
        ],
      },
      // 38
      {
        type: "open-response" as const,
        title: "Dialogue That Advances the Plot",
        instruction: "Write a 6-line conversation between two characters at a moment of crisis. The dialogue must reveal new information that moves the story forward. Use correct speech marks and varied reporting verbs.",
        prompts: [
          { text: "The crisis:", type: "lines" as const, lines: 1 },
          { text: "Dialogue:", type: "box" as const, lines: 12 },
        ],
      },
      // 39
      {
        type: "multiple-choice" as const,
        title: "Effect of Reporting Verb Choice",
        instruction: "Choose the option that best explains how the reporting verb changes the meaning.",
        questions: [
          {
            prompt: "Compare: 'she said' vs 'she snarled'. What does snarled add?",
            options: [
              "It shows she is happy.",
              "It shows she is angry and aggressive.",
              "It shows she is speaking quietly.",
            ],
            answer: "It shows she is angry and aggressive.",
          },
          {
            prompt: "Compare: 'he said' vs 'he confessed'. What does confessed add?",
            options: [
              "It suggests he is admitting something reluctantly.",
              "It suggests he is excited.",
              "It suggests he is asking a question.",
            ],
            answer: "It suggests he is admitting something reluctantly.",
          },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Silent Character",
        content: "Write a page of dialogue between two characters — but one of them barely speaks, only answering in one or two words while the other talks much more. Challenge: use only the sparse speaker's short replies to reveal something important about their character or secret. No descriptions or actions allowed — only the dialogue itself. This is a technique used by many famous authors. Share with a family member and discuss what the quiet character's replies reveal.",
      },
      // ── CONSOLIDATING 41–80 ────────────────────────────────────────────────
      // 41
      {
        type: "open-response" as const,
        title: "Prose to Script and Back Again",
        instruction: "Read this prose dialogue. Convert it to a play script format, then convert it back to prose to see what changes.",
        prompts: [
          {
            text: "PROSE: \"Have you seen my notebook?\" Emma asked. \"I think Jack took it,\" replied Sofia. \"That sounds like him,\" Emma muttered.\n\nPLAY SCRIPT VERSION:",
            type: "box" as const, lines: 5,
          },
          { text: "What is different between the two formats?", type: "lines" as const, lines: 2 },
        ],
      },
      // 42
      {
        type: "fill-in-blank" as const,
        title: "Dialogue in a Variety of Genres",
        instruction: "Fill in the best reporting verb for each genre context.",
        sentences: [
          { text: "HORROR: \"Don't go in there,\" she ___ [whispered/exclaimed], her voice trembling.", blanks: ["whispered"] },
          { text: "COMEDY: \"This is supposed to be a holiday?\" he ___ [groaned/commanded], staring at the broken tent.", blanks: ["groaned"] },
          { text: "ADVENTURE: \"Follow me — I know a shortcut,\" the guide ___ [insisted/sobbed] confidently.", blanks: ["insisted"] },
          { text: "MYSTERY: \"All is not as it seems,\" the detective ___ [murmured/shrieked] to herself.", blanks: ["murmured"] },
        ],
      },
      // 43
      {
        type: "true-false" as const,
        title: "True or False: Dialogue in Fiction",
        instruction: "Circle True or False.",
        statements: [
          { text: "Dialogue should reveal character, not just repeat information.", answer: true },
          { text: "Using 'said' every time is fine because it is invisible to readers.", answer: false },
          { text: "A new paragraph for each new speaker helps readers follow dialogue.", answer: true },
          { text: "Dialogue can be used in non-fiction texts such as interviews.", answer: true },
          { text: "Every piece of dialogue must have a reporting clause.", answer: false },
        ],
      },
      // 44
      {
        type: "open-response" as const,
        title: "Dialogue That Shows Conflict",
        instruction: "Write a 6-line dialogue that shows a disagreement between two characters. Use varied reporting verbs and make sure each character sounds different.",
        prompts: [
          { text: "Characters and their conflict:", type: "lines" as const, lines: 1 },
          { text: "Dialogue:", type: "box" as const, lines: 12 },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Less Is More in Dialogue",
        content: "Real people do not always speak in complete sentences. In dialogue, short, snappy exchanges can be more powerful than long speeches. 'No.' is sometimes more powerful than a long explanation. Also remember: you do not always need a reporting clause if it is clear who is speaking from the context and voice. Skilled authors often drop the 'he said / she said' when two characters are in a rapid back-and-forth exchange.",
      },
      // 46
      {
        type: "circle-correct" as const,
        title: "Does This Dialogue Need a Reporting Clause?",
        instruction: "Read each dialogue exchange. Circle YES if a reporting clause is needed for clarity, or NO if the dialogue is clear without one.",
        questions: [
          {
            prompt: "\"Who are you?\" / \"A friend.\"",
            options: ["YES — reporting clause needed", "NO — context is clear"],
          },
          {
            prompt: "\"Go right.\" / \"Are you sure?\" / \"Positive.\"",
            options: ["YES — reporting clause needed", "NO — context is clear"],
          },
          {
            prompt: "(Five characters in the room) \"It was me.\"",
            options: ["YES — reporting clause needed", "NO — context is clear"],
          },
        ],
      },
      // 47
      {
        type: "sorting" as const,
        title: "Sort: Effective vs Ineffective Dialogue",
        instruction: "Sort each piece of dialogue or dialogue feature into the correct column.",
        columns: ["Effective dialogue technique", "Ineffective dialogue technique"],
        items: [
          { label: "Varied reporting verbs" },
          { label: "Using 'said' for every line" },
          { label: "New line for each new speaker" },
          { label: "All characters speak in the same voice" },
          { label: "Dialogue that reveals character" },
          { label: "Dialogue that repeats what the narrative already said" },
          { label: "Short, snappy exchanges during conflict" },
          { label: "Very long speeches with no action breaks" },
        ],
      },
      // 48
      {
        type: "open-response" as const,
        title: "Add Action Beats to Dialogue",
        instruction: "Action beats are actions that replace the reporting clause. Rewrite each line using an action beat instead of said.",
        prompts: [
          { text: "Original: \"I'm not sure about this,\" she said.\nWith action beat:", type: "lines" as const, lines: 2 },
          { text: "Original: \"Come on!\" he said.\nWith action beat:", type: "lines" as const, lines: 2 },
          { text: "Original: \"I think I have found it,\" she said.\nWith action beat:", type: "lines" as const, lines: 2 },
        ],
      },
      // 49
      {
        type: "fill-in-blank" as const,
        title: "Dialogue in Non-fiction: Interviews",
        instruction: "Complete this interview extract with correct punctuation.",
        sentences: [
          { text: "The reporter [asked]: [\"]\nWhat inspired you to start the project[?]\n[\"]", blanks: ["asked", "\"", "?", "\""] },
          { text: "Dr Patel [replied]: [\"]\nI saw a gap in the research and knew I had to fill it.[\"]\n", blanks: ["replied", "\"", "\""] },
        ],
      },
      // 50
      {
        type: "home-activity" as const,
        title: "Dialogue in the Wild",
        instruction: "Find and write dialogue in everyday reading and speaking.",
        parentTip: "Point out speech marks in any book you read together — this builds natural awareness of the convention.",
        suggestions: [
          "Find a page of dialogue in a favourite novel and copy two lines, then check your punctuation against the original.",
          "Write four speech bubbles for characters in a comic or magazine photo, then convert them to prose with speech marks.",
          "Record a short real conversation with a family member, then write it up using dialogue punctuation.",
          "Read a play script aloud and notice how it handles spoken words differently from prose dialogue.",
        ],
      },
      // 51
      {
        type: "true-false" as const,
        title: "True or False: Action Beats",
        instruction: "Circle True or False.",
        statements: [
          { text: "An action beat is an action that replaces the reporting clause.", answer: true },
          { text: "Action beats are separated from dialogue by a comma inside the speech marks.", answer: false },
          { text: "Action beats help show emotion without using reporting verbs.", answer: true },
          { text: "Action beats can only be used in picture books.", answer: false },
          { text: "An action beat and dialogue form two separate sentences.", answer: true },
        ],
      },
      // 52
      {
        type: "open-response" as const,
        title: "Action Beat Practice",
        instruction: "Write a four-line dialogue between two characters. Use action beats instead of reporting verbs on at least two lines.",
        prompts: [
          { text: "Dialogue:", type: "box" as const, lines: 8 },
        ],
      },
      // 53
      {
        type: "multiple-choice" as const,
        title: "Identify the Dialogue Feature",
        instruction: "Choose what each underlined part of the sentence is.",
        questions: [
          {
            prompt: "\"I think,\" [she said with a frown,] \"that we should turn back.\"",
            options: ["Action beat", "Interrupted reporting clause", "New speaker signal"],
            answer: "Interrupted reporting clause",
          },
          {
            prompt: "\"Come on!\" [She leapt to her feet.] \"We haven't much time.\"",
            options: ["Reporting clause", "Action beat", "Embedded clause"],
            answer: "Action beat",
          },
          {
            prompt: "\"Let me go!\" [he pleaded.]",
            options: ["Action beat", "Reporting clause", "Subordinate clause"],
            answer: "Reporting clause",
          },
        ],
      },
      // 54
      {
        type: "circle-correct" as const,
        title: "Punctuate the Action Beat",
        instruction: "Circle the correctly punctuated version of the action beat sentence.",
        questions: [
          {
            prompt: "Choose correct action beat punctuation:",
            options: [
              "\"Let's go,\" she grabbed her coat.",
              "\"Let's go.\" She grabbed her coat.",
              "\"Let's go\" she grabbed her coat.",
            ],
          },
          {
            prompt: "Choose correct action beat punctuation:",
            options: [
              "He slammed the door, \"I've had enough.\"",
              "He slammed the door. \"I've had enough.\"",
              "He slammed the door: \"I've had enough.\"",
            ],
          },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Dialogue That Reveals Setting",
        instruction: "Write a 6-line dialogue where the characters' words reveal where they are — without ever directly stating the setting. Let the reader infer it.",
        prompts: [
          { text: "Setting (don't write this in the dialogue!):", type: "lines" as const, lines: 1 },
          { text: "Dialogue:", type: "box" as const, lines: 12 },
        ],
      },
      // 56
      {
        type: "sorting" as const,
        title: "Sort: Reporting Clause, Action Beat or Neither?",
        instruction: "Sort each underlined element.",
        columns: ["Reporting clause", "Action beat", "Neither (standalone dialogue)"],
        items: [
          { label: "\"Stop!\" [she cried]." },
          { label: "\"Stop!\" [She spun around.] \"Who is there?\"" },
          { label: "\"Stop.\"" },
          { label: "[He leaned forward.] \"Tell me everything.\"" },
          { label: "\"I knew it,\" [said the detective]." },
        ],
      },
      // 57
      {
        type: "fill-in-blank" as const,
        title: "Dialogue in Persuasive Texts",
        instruction: "Persuasive texts sometimes use quotes as evidence. Punctuate these quotes correctly.",
        sentences: [
          { text: "According to Dr Smith[,] [\"]\nExercise improves academic performance by up to 20%.[\"]\n", blanks: [",", "\"", "\""] },
          { text: "As the Prime Minister stated[,] [\"]\nThis is a matter of national importance.[\"]\n", blanks: [",", "\"", "\""] },
        ],
      },
      // 58
      {
        type: "open-response" as const,
        title: "Analyse Dialogue in a Real Text",
        instruction: "Find a page of dialogue in a book you are reading. Copy two lines and analyse them.",
        prompts: [
          { text: "Book title and author:", type: "lines" as const, lines: 1 },
          { text: "Line 1 (copied exactly):", type: "lines" as const, lines: 1 },
          { text: "Reporting verb used:         What does it tell us about the character?", type: "lines" as const, lines: 1 },
          { text: "Line 2 (copied exactly):", type: "lines" as const, lines: 1 },
          { text: "What punctuation does the author use at the end of the speech?", type: "lines" as const, lines: 1 },
        ],
      },
      // 59
      {
        type: "multiple-choice" as const,
        title: "Dialogue Effect: Advanced",
        instruction: "Choose the effect each dialogue technique creates.",
        questions: [
          { prompt: "Using short, one-word responses creates:", options: ["humour", "confusion", "tension and drama", "a calm mood"], answer: "tension and drama" },
          { prompt: "Using many different reporting verbs creates:", options: ["variety and character depth", "confusion about who is speaking", "a formal register", "slower pace"], answer: "variety and character depth" },
          { prompt: "Dropping reporting clauses in fast-paced exchanges creates:", options: ["slower, thoughtful dialogue", "rapid pace and urgency", "formal register", "confusion"], answer: "rapid pace and urgency" },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip" as const,
        title: "Tip: Quoting Evidence in Non-fiction",
        content: "In non-fiction and persuasive writing, you often quote what an expert, author or historical figure said. These quotes use speech marks in the same way as dialogue — but the reporting clause is different. Instead of 'he said', you write: 'According to Dr Lee, ...' or 'As the author explains, ...' Always use quotation marks around the exact words, and name the source clearly.",
      },
      // 61 (SPARK at ~60)
      {
        type: "spark" as const,
        title: "Spark: The Overheard Conversation",
        content: "Imagine you overhear a conversation between two interesting strangers. You can only hear one side of the conversation — every other line is silence or a reaction you invent. Write eight lines of this one-sided dialogue, punctuated perfectly and using action beats to fill the gaps. The reader should be able to guess roughly what the silent person is saying from context. This is a challenge used in creative writing workshops!",
      },
      // 62
      {
        type: "open-response" as const,
        title: "Dialogue With Action and Description",
        instruction: "Blend dialogue with action beats and short descriptive sentences to write a tense scene (8–10 sentences). The setting is two children discovering something unexpected in an old building.",
        prompts: [
          { text: "Your scene:", type: "box" as const, lines: 14 },
        ],
      },
      // 63
      {
        type: "fill-in-blank" as const,
        title: "Dialogue Punctuation: Extended",
        instruction: "Add all missing punctuation to this dialogue extract.",
        sentences: [
          { text: "Are we there yet[?][\"]\n she demanded[,] peering out the window.", blanks: ["?", "\"", ","] },
          { text: "[\"]\nAlmost[,][\"]\n said Dad, [\"]\nbut there is a small detour.[\"]\n", blanks: ["\"", ",", "\"", "\"", "\""] },
          { text: "[\"]\nWhat kind of detour[?][\"]\n she asked[,] alarmed.", blanks: ["\"", "?", "\"", ","] },
        ],
      },
      // 64
      {
        type: "sorting" as const,
        title: "Sort: Purpose of Dialogue",
        instruction: "Dialogue in stories can serve many purposes. Sort each piece of dialogue by its purpose.",
        columns: ["Reveals character", "Advances plot", "Reveals setting", "Creates tension"],
        items: [
          { label: "\"I've never trusted anyone — and I don't plan to start now,\" he said." },
          { label: "\"The key is hidden beneath the third stone,\" she breathed." },
          { label: "\"This cold reminds me of the mountain. Are we near?\" he asked." },
          { label: "\"If you move,\" said the stranger, \"I cannot promise what happens next.\"" },
          { label: "\"I always finish what I start,\" she said firmly." },
          { label: "\"We have only two hours before the bridge closes,\" he warned." },
        ],
      },
      // 65
      {
        type: "open-response" as const,
        title: "Dialogue Error Correction: Full Paragraph",
        instruction: "This dialogue paragraph has five errors. Find and correct all of them.",
        prompts: [
          {
            text: "ERROR PARAGRAPH:\n\"where have you been all day\" asked mum. \"I was at the library\" said Jake. \"the library\" She replied, raising an eyebrow. \"yes, it's a real place\" he muttered.\n\nCORRECTED VERSION:",
            type: "box" as const, lines: 8,
          },
          { text: "List the five errors you found:", type: "lines" as const, lines: 3 },
        ],
      },
      // 66
      {
        type: "circle-correct" as const,
        title: "Formal Quotation Punctuation",
        instruction: "Choose the correctly formatted quote for a non-fiction essay.",
        questions: [
          {
            prompt: "Choose the correctly formatted quote:",
            options: [
              "The report states that \"Children who read daily score higher on comprehension tests.\"",
              "The report states that children who read daily score higher on comprehension tests.",
              "The report states, that \"children who read daily score higher on comprehension tests.\"",
            ],
          },
        ],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Write Dialogue for a Picture",
        instruction: "Imagine two people looking at a painting in an art gallery. One loves it; one hates it. Write their 6-line dialogue with full punctuation. Use at least four different reporting verbs.",
        prompts: [
          { text: "Dialogue:", type: "box" as const, lines: 12 },
        ],
      },
      // 68
      {
        type: "fill-in-blank" as const,
        title: "Adverbs with Reporting Verbs",
        instruction: "Add an adverb to each reporting verb to make the manner of speaking more precise.",
        parentTip: "Adverbs tell us HOW the verb happens — they add a layer of meaning to reporting verbs.",
        sentences: [
          { text: "\"I am not leaving,\" she said ___. [how she said it]", blanks: ["firmly"] },
          { text: "\"I think I am lost,\" he admitted ___.", blanks: ["quietly"] },
          { text: "\"This is not what I planned,\" she said ___.", blanks: ["anxiously"] },
          { text: "\"You are the winner!\" he announced ___.", blanks: ["triumphantly"] },
        ],
      },
      // 69
      {
        type: "sorting" as const,
        title: "Sort: Adverbs for Reporting Verbs",
        instruction: "Sort these adverbs by the emotion they suggest.",
        columns: ["Happiness / excitement", "Anger / frustration", "Fear / nervousness", "Sadness / regret"],
        items: [
          { label: "joyfully" }, { label: "furiously" }, { label: "tearfully" }, { label: "anxiously" },
          { label: "triumphantly" }, { label: "bitterly" }, { label: "shakily" }, { label: "sadly" },
          { label: "gleefully" }, { label: "harshly" }, { label: "fearfully" }, { label: "miserably" },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Author Study: Dialogue Techniques",
        instruction: "Study how a real author uses dialogue in a favourite book.",
        parentTip: "Analysing how published authors write is one of the most powerful writing lessons available.",
        suggestions: [
          "Read a chapter of a favourite book focusing only on dialogue. List all the reporting verbs used — how many different ones are there?",
          "Find an example of interrupted dialogue in a book. Copy it out and label the parts.",
          "Write a retelling of a fairy tale using only dialogue — no narrative description allowed.",
          "Compare how two different books you enjoy handle dialogue — which style do you prefer and why?",
        ],
      },
      // ── EXTENDING 71–100 ──────────────────────────────────────────────────
      // 71
      {
        type: "open-response" as const,
        title: "Multilayer Dialogue: Talk and Action",
        instruction: "Write a 10-line dialogue that weaves together: dialogue lines, action beats, reporting clauses, and one line of brief description. Label each element in the margin (D = dialogue, AB = action beat, RC = reporting clause, Des = description).",
        prompts: [
          { text: "Your multilayer dialogue:", type: "box" as const, lines: 14 },
        ],
      },
      // 72
      {
        type: "multiple-choice" as const,
        title: "Dialogue in Different Genres: Tone",
        instruction: "Choose the option that matches the genre and tone.",
        questions: [
          {
            prompt: "A fantasy novel's dramatic scene: choose the best reporting verb.",
            options: ["said", "declared", "went", "told"],
            answer: "declared",
          },
          {
            prompt: "A light-hearted comedy exchange: choose the best reporting verb.",
            options: ["announced formally", "giggled", "proclaimed", "muttered gravely"],
            answer: "giggled",
          },
          {
            prompt: "A tense thriller climax: choose the best short dialogue line.",
            options: ["\"I suppose we should sort this out soon.\"", "\"Drop it. Now.\"", "\"That is rather unfortunate.\"", "\"Let's discuss our options.\""],
            answer: "\"Drop it. Now.\"",
          },
        ],
      },
      // 73
      {
        type: "open-response" as const,
        title: "Dialogue as Evidence: Persuasive Writing",
        instruction: "Write a persuasive paragraph on the topic 'Technology helps students learn'. Include a quote from an imaginary expert as evidence. Punctuate the quote correctly.",
        prompts: [
          { text: "Your paragraph (include a properly punctuated quote):", type: "box" as const, lines: 8 },
        ],
      },
      // 74
      {
        type: "fill-in-blank" as const,
        title: "Subtext in Dialogue",
        instruction: "Subtext is what a character really means beneath their words. Fill in the subtext for each line of dialogue.",
        sentences: [
          { text: "\"That's an interesting outfit,\" she said carefully. [Subtext: ___]", blanks: ["She dislikes it but is being polite."] },
          { text: "\"I'm fine,\" he said, staring at the floor. [Subtext: ___]", blanks: ["He is not fine — something is wrong."] },
          { text: "\"Oh, another trophy. How nice,\" said his sister. [Subtext: ___]", blanks: ["She feels jealous or dismissive."] },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Subtext — What Characters Don't Say",
        content: "The best dialogue is often about what is NOT said. Subtext is the hidden meaning beneath the words. A character who says 'I'm fine' while avoiding eye contact is communicating something different from their words. Writers use this to create tension, humour and complexity. Practice writing dialogue where the characters say one thing but mean another — this is a hallmark of sophisticated, mature writing.",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Write Subtext-Rich Dialogue",
        instruction: "Write a 6-line dialogue between two characters where what they say is polite but the subtext (what they really mean) is tense or hostile. After your dialogue, write a note explaining the subtext.",
        prompts: [
          { text: "Dialogue:", type: "box" as const, lines: 10 },
          { text: "Subtext (what are they really communicating?):", type: "lines" as const, lines: 3 },
        ],
      },
      // 77
      {
        type: "sorting" as const,
        title: "Sort: What Does the Dialogue Achieve?",
        instruction: "Sort each dialogue purpose into the correct category.",
        columns: ["Character development", "Plot advancement", "Subtext / hidden meaning", "Atmosphere / setting"],
        items: [
          { label: "\"I never cry. Never,\" he said, blinking rapidly." },
          { label: "\"The jewels are in the east wing,\" she breathed." },
          { label: "\"Lovely weather,\" he said, eyeing the storm clouds." },
          { label: "\"I've always done things my own way,\" she said firmly." },
          { label: "\"We have twenty minutes before they arrive,\" he warned." },
          { label: "\"This place gives me chills,\" she said, pulling her coat tighter." },
        ],
      },
      // 78
      {
        type: "multiple-choice" as const,
        title: "Advanced Dialogue Punctuation",
        instruction: "Choose the correctly punctuated version.",
        questions: [
          {
            prompt: "Quote that is part of a sentence:",
            options: [
              "The author calls this technique 'loading the dice.'",
              "The author calls this technique \"loading the dice\".",
              "The author calls this technique, \"loading the dice.\"",
            ],
            answer: "The author calls this technique \"loading the dice\".",
          },
          {
            prompt: "Interrupted speech with a new sentence after the break:",
            options: [
              "\"Stay here,\" he ordered. \"I'll be back in ten minutes.\"",
              "\"Stay here,\" he ordered, \"I'll be back in ten minutes.\"",
              "\"Stay here\" he ordered. \"I'll be back in ten minutes.\"",
            ],
            answer: "\"Stay here,\" he ordered. \"I'll be back in ten minutes.\"",
          },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Dialogue Scene: Emotional Range",
        instruction: "Write a 10–12 line dialogue in which one character delivers bad news to another. The scene must show the emotion shifting from shock to acceptance. Use varied reporting verbs, action beats and at least one interruption.",
        prompts: [
          { text: "Your scene:", type: "box" as const, lines: 16 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Interrogation Scene",
        content: "Write an interrogation scene — a detective questioning a suspect. Challenge: the suspect never directly answers a question. Every response is evasive, misleading or a counter-question. Use perfect dialogue punctuation, varied reporting verbs, action beats and subtext. The reader should be able to decide for themselves whether the suspect is guilty. Share with a family member and ask their verdict!",
      },
      // 81
      {
        type: "fill-in-blank" as const,
        title: "Historical Dialogue",
        instruction: "Fill in the correct punctuation for these historical quotes written as dialogue.",
        sentences: [
          { text: "As Churchill famously [declared/said/muttered]: [\"]\nWe shall never surrender.[\"]\n", blanks: ["declared", "\"", "\""] },
          { text: "Neil Armstrong [announced/whispered/asked]: [\"]\nThat's one small step for man...[\"]\n", blanks: ["announced", "\"", "\""] },
        ],
      },
      // 82
      {
        type: "open-response" as const,
        title: "Dialogue Analysis: Published Author",
        instruction: "Choose a page of dialogue from a book you enjoy. Copy two exchanges and answer the analysis questions.",
        prompts: [
          { text: "Book and author:", type: "lines" as const, lines: 1 },
          { text: "Exchange 1 (copy it out):", type: "lines" as const, lines: 2 },
          { text: "What reporting verb does the author use? What does it tell us about the character?", type: "lines" as const, lines: 2 },
          { text: "Exchange 2 (copy it out):", type: "lines" as const, lines: 2 },
          { text: "Does this exchange use action beats, reporting clauses or both? What is the effect?", type: "lines" as const, lines: 2 },
        ],
      },
      // 83
      {
        type: "sorting" as const,
        title: "Sort: Good Dialogue Habits",
        instruction: "Sort each dialogue habit into effective or ineffective.",
        columns: ["Effective dialogue habit", "Ineffective dialogue habit"],
        items: [
          { label: "Using varied reporting verbs" },
          { label: "Using 'said' for every line" },
          { label: "Starting a new line for each new speaker" },
          { label: "All characters speaking in exactly the same way" },
          { label: "Using action beats to show emotion without telling" },
          { label: "Including a reporting clause every single time even in fast exchanges" },
          { label: "Using subtext to add layers of meaning" },
          { label: "Having characters explain their feelings in long speeches" },
        ],
      },
      // 84
      {
        type: "open-response" as const,
        title: "Rewrite to Improve: Dialogue",
        instruction: "This dialogue paragraph is weak. Identify three problems, then rewrite it to be much stronger.",
        prompts: [
          {
            text: "WEAK DIALOGUE:\n\"I am happy,\" said Tom. \"I am also happy,\" said Mia. \"This is a good day,\" said Tom. \"Yes, it is,\" said Mia.\n\nThree problems:",
            type: "lines" as const, lines: 3,
          },
          { text: "Rewritten version:", type: "box" as const, lines: 8 },
        ],
      },
      // 85
      {
        type: "true-false" as const,
        title: "True or False: Advanced Dialogue",
        instruction: "Circle True or False.",
        statements: [
          { text: "Subtext is what a character means beneath their spoken words.", answer: true },
          { text: "Action beats are always followed by a comma before the next line of dialogue.", answer: false },
          { text: "In fast-paced exchanges, reporting clauses can sometimes be dropped for pace.", answer: true },
          { text: "Formal quotes in non-fiction use the same speech mark conventions as dialogue in fiction.", answer: true },
          { text: "All dialogue in a story must be realistic and could be said in real life.", answer: false },
        ],
      },
      // 86
      {
        type: "multiple-choice" as const,
        title: "Dialogue Mastery: Which Is Best?",
        instruction: "Choose the most effective version of each dialogue moment.",
        questions: [
          {
            prompt: "A tense moment where a character realises they are being followed:",
            options: [
              "\"I think someone is following us,\" said Tom. He was scared.",
              "\"There is someone behind us,\" Tom breathed, his steps quickening.",
              "\"Someone is following us,\" Tom said, feeling scared and nervous.",
            ],
            answer: "\"There is someone behind us,\" Tom breathed, his steps quickening.",
          },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Write: Dialogue in a Non-fiction Context",
        instruction: "Write a short informational paragraph about an Australian animal. Include one expert quote (made up) to support your information. Punctuate the quote correctly.",
        prompts: [
          { text: "My informational paragraph with expert quote:", type: "box" as const, lines: 8 },
        ],
      },
      // 88
      {
        type: "fill-in-blank" as const,
        title: "Dialogue Punctuation: Final Mastery",
        instruction: "Add all missing punctuation to this extended dialogue.",
        sentences: [
          { text: "[\"]\nI've been watching you[,][\"]\n the stranger said quietly[,] stepping out of the shadow[s]. [\"]\nFor how long[?][\"]\n asked Ava, not daring to turn around.", blanks: ["\"", ",", "\"", ",", "s", "\"", "?", "\""] },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Final Extended Dialogue: Original Story Scene",
        instruction: "Write a complete dialogue scene of 12–15 lines for an original story. Requirements: full punctuation, at least five different reporting verbs, two action beats, one interrupted sentence, subtext on at least one line, new line for each new speaker.",
        prompts: [
          { text: "Setting and characters:", type: "lines" as const, lines: 2 },
          { text: "Your scene:", type: "box" as const, lines: 18 },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Editing Your Own Dialogue",
        content: "When you finish writing dialogue, read it aloud — every word. If a line sounds unnatural when spoken, rewrite it. Ask yourself: Does every character sound different? Have I used 'said' more than twice on one page? Did I start a new line for each speaker? Is there at least one piece of action between every three lines of dialogue? These are the questions professional editors ask when checking dialogue.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Dialogue Self-edit Checklist",
        instruction: "Go back to any dialogue you wrote earlier in this worksheet. Use this checklist to evaluate and improve it.",
        prompts: [
          { text: "[ ] Every piece of speech has opening and closing speech marks.\n[ ] Each first spoken word is capitalised.\n[ ] Commas separate speech from reporting clauses.\n[ ] End punctuation is inside the closing speech marks.\n[ ] Each new speaker is on a new line.\n[ ] I used at least three different reporting verbs.\n[ ] I used at least one action beat.\n\nOne improvement I made:", type: "lines" as const, lines: 3 },
        ],
      },
      // 92
      {
        type: "sorting" as const,
        title: "Sort: Dialogue Features by Skill Level",
        instruction: "Sort each dialogue feature into beginner, developing or advanced.",
        columns: ["Beginner", "Developing", "Advanced"],
        items: [
          { label: "Using speech marks around spoken words" },
          { label: "Using varied reporting verbs" },
          { label: "Writing subtext-rich dialogue" },
          { label: "Starting a new line for each speaker" },
          { label: "Using interrupted dialogue correctly" },
          { label: "Using action beats" },
          { label: "Capitalising the first spoken word" },
          { label: "Dropping reporting clauses in fast exchanges" },
          { label: "Revealing character entirely through dialogue" },
        ],
      },
      // 93
      {
        type: "multiple-choice" as const,
        title: "Dialogue Punctuation: Final Check",
        instruction: "Choose the correct answer for each question.",
        questions: [
          { prompt: "Where does the comma go when the reporting clause follows the speech?", options: ["After the closing speech mark", "Inside the closing speech mark", "Before the opening speech mark"], answer: "Inside the closing speech mark" },
          { prompt: "When does the word after a closing speech mark start with a capital letter?", options: ["Always", "When it is a proper noun or the start of a new sentence", "Never"], answer: "When it is a proper noun or the start of a new sentence" },
          { prompt: "What is an action beat?", options: ["A reporting verb like 'said'", "An action that replaces the reporting clause", "A type of speech mark"], answer: "An action that replaces the reporting clause" },
        ],
      },
      // 94
      {
        type: "fill-in-blank" as const,
        title: "Quotes in Academic Writing",
        instruction: "Punctuate each academic quote correctly.",
        sentences: [
          { text: "Smith (2019) argues that [\"]\nreading aloud improves both fluency and comprehension[.\"]\n", blanks: ["\"", ".\""] },
          { text: "According to the report[,] [\"]\nstudents who sleep eight hours outperform those who sleep six hours by 15%.[\"]\n", blanks: [",", "\"", "\""] },
        ],
      },
      // 95
      {
        type: "open-response" as const,
        title: "Genre Dialogue: Three Versions",
        instruction: "Write the same basic exchange ('I can't do this.' / 'Yes, you can.') three times — once as a comedy scene, once as a thriller scene and once as a fantasy epic. The punctuation rules stay the same but the word choice, reporting verbs and action beats change completely.",
        prompts: [
          { text: "Comedy version:", type: "box" as const, lines: 4 },
          { text: "Thriller version:", type: "box" as const, lines: 4 },
          { text: "Fantasy version:", type: "box" as const, lines: 4 },
        ],
      },
      // 96
      {
        type: "true-false" as const,
        title: "True or False: Final Dialogue Mastery",
        instruction: "Circle True or False.",
        statements: [
          { text: "Action beats and dialogue are separated by a full stop, not a comma.", answer: true },
          { text: "Subtext makes dialogue less effective.", answer: false },
          { text: "Dialogue can appear in non-fiction texts like interviews and news reports.", answer: true },
          { text: "The reporting clause always comes after the dialogue.", answer: false },
          { text: "Reading dialogue aloud helps writers check if it sounds natural.", answer: true },
        ],
      },
      // 97
      {
        type: "open-response" as const,
        title: "Reflection: What Makes Great Dialogue?",
        instruction: "Answer these reflection questions about dialogue writing.",
        prompts: [
          { text: "What is the most important rule about speech marks you have learned?", type: "lines" as const, lines: 1 },
          { text: "What is subtext and why does it make dialogue more interesting?", type: "lines" as const, lines: 2 },
          { text: "What changes when you use an action beat instead of a reporting verb?", type: "lines" as const, lines: 2 },
          { text: "Choose one technique you will use in your next piece of writing:", type: "lines" as const, lines: 1 },
        ],
      },
      // 98
      {
        type: "matching" as const,
        title: "Match the Dialogue Term to Its Definition",
        instruction: "Draw a line to match each term with its correct definition.",
        parentTip: "These are key terms for discussing dialogue — understanding them helps in editing.",
        left: ["Reporting clause", "Action beat", "Subtext", "Interrupted dialogue", "Reporting verb"],
        right: [
          "The hidden meaning beneath spoken words",
          "A verb that introduces how a character speaks",
          "An action that replaces a reporting clause",
          "The clause identifying who speaks and how",
          "Dialogue broken into two parts by a clause in the middle",
        ],
      },
      // 99
      {
        type: "home-activity" as const,
        title: "Advanced Dialogue Challenge",
        instruction: "Apply everything you have learned about dialogue in real-world writing.",
        parentTip: "Encourage your child to apply these techniques in every story they write from now on.",
        suggestions: [
          "Write the opening scene of an original story using only dialogue and action beats — no pure description.",
          "Find an interview in a magazine or newspaper and rewrite one exchange as prose dialogue.",
          "Record a real family conversation and transcribe it with full punctuation — how does real speech differ from written dialogue?",
          "Take a favourite story scene and rewrite it with all dialogue removed — then add it back in a completely different way.",
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Story Told Only Through Dialogue",
        content: "Write a complete short story using ONLY dialogue — no narration, no description, no action beats. Every piece of information the reader learns must come through what the characters say. The challenge: the reader must understand the setting, the conflict, the characters and the resolution entirely from speech alone. Share it with someone and ask if they understood the story. This technique is used by playwrights and some of the world's most experimental fiction writers!",
      },
    ],
  },
  {
    slug: "fact-vs-opinion",
    title: "Fact vs Opinion in Non-fiction",
    strand: "Literacy",
    description:
      "Distinguish between facts (which can be proven) and opinions (which express a view) in non-fiction texts.",
    learningGuide: {
      concept:
        "A fact is a statement that can be checked and proven to be true or false. An opinion is someone's belief, feeling or judgement — it cannot be proven. Knowing the difference helps readers evaluate what they read and think critically.",
      activation:
        "Say: Dogs make the best pets. Is that a fact or an opinion? Why? Then say: Dogs are mammals. Now which is it? Discuss how you would check a fact.",
      check:
        "After the worksheet, ask your child to find one fact and one opinion in a newspaper or magazine article.",
    },
    lesson: {
      title: "Prove It or Point of View?",
      objective:
        "Identify and distinguish facts from opinions in a non-fiction text using signal words and verification strategies.",
      materials: [
        "This worksheet",
        "A newspaper, magazine or printed news article",
        "A pencil and two coloured highlighters",
      ],
      intro: {
        title: "The Fact Detector",
        script:
          "Imagine you are a fact detective with a special tool — a fact detector. When you point it at a sentence, it asks one question: Can this be checked? If a scientist, historian or researcher could prove it true or false, it is a fact. If it reflects someone's feelings or judgement, it is an opinion. Some signal words help. Opinions often include words like I think, I believe, in my opinion, should, best, worst, beautiful, terrible. Facts often include numbers, dates, names of places and scientific terms.",
        action:
          "Read five sentences from a magazine together. Take turns pointing at each and giving a thumbs up for fact or thumbs sideways for opinion.",
      },
      mainActivity: {
        title: "Text Detectives",
        script:
          "We are going to read a short non-fiction passage together. As we read, I want you to use one colour for facts and another colour for opinions. After highlighting, we will discuss: which type of sentence appears more often in this text? Why might the author include both?",
        action:
          "Read the passage on the worksheet with your child and guide the highlighting activity. Discuss how facts add credibility while opinions engage readers.",
      },
      wrapUp: {
        title: "Spot the Spin",
        script:
          "Sometimes writers mix facts and opinions so cleverly that it is hard to tell them apart. This is called persuasive writing. If you can spot the opinions hiding among the facts, you become a much stronger reader. Let us look at one last paragraph together and see if the author is trying to persuade us.",
        action:
          "Read a short editorial or opinion piece together. Ask: What does the author want us to think? What facts do they use to support their opinion?",
      },
      parentTip:
        "Watch a short news report together and ask your child to say fact or opinion after each major statement. This builds real-world media literacy.",
      extension:
        "Ask your child to write a short paragraph about their favourite hobby — first as pure facts, then as pure opinion, then as a mix of both. Compare all three versions.",
      resources: [
        {
          title: "ReadWriteThink — Fact or Opinion?",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/fact-opinion",
          description:
            "Lesson activities for distinguishing fact and opinion in texts.",
        },
        {
          title: "ABC Education — Behind the News",
          url: "https://www.abc.net.au/btn/",
          description:
            "Age-appropriate news and current events for critical reading discussions.",
        },
        {
          title: "Khan Academy — Finding Evidence in Informational Text",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:reading-informational-text/xe2c54a99ede11c03:finding-evidence/e/finding-evidence",
          description:
            "Practice locating evidence and distinguishing facts in informational texts.",
        },
      ],
    },
    activities: [
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "sorting" as const,
        title: "Sort: Fact or Opinion? (Set A)",
        instruction: "Read each statement and sort it into the correct column.",
        columns: ["Fact", "Opinion"],
        items: [
          { label: "The Great Barrier Reef is the world's largest coral reef system." },
          { label: "The Great Barrier Reef is the most beautiful place on Earth." },
          { label: "Australia has six states and two territories." },
          { label: "Summer is the best season of the year." },
          { label: "The blue whale is the largest animal on Earth." },
          { label: "Everyone should learn to swim." },
          { label: "The platypus lays eggs." },
          { label: "Platypuses are the strangest animals in the world." },
        ],
      },
      // 2
      {
        type: "circle-correct" as const,
        title: "Fact or Opinion? (Set A)",
        instruction: "Read each sentence. Circle Fact or Opinion.",
        parentTip: "Ask your child to explain their reasoning — the process of justifying matters more than the answer.",
        questions: [
          { prompt: "I believe sharks are the most misunderstood creatures in the ocean.", options: ["Fact", "Opinion"] },
          { prompt: "Sharks have been on Earth for over 450 million years.", options: ["Fact", "Opinion"] },
          { prompt: "In my view, zoos should be banned.", options: ["Fact", "Opinion"] },
          { prompt: "Australia has the world's largest cattle station.", options: ["Fact", "Opinion"] },
          { prompt: "Summer is clearly the best time of year to visit the Gold Coast.", options: ["Fact", "Opinion"] },
          { prompt: "The Sydney Harbour Bridge was completed in 1932.", options: ["Fact", "Opinion"] },
        ],
      },
      // 3
      {
        type: "true-false" as const,
        title: "True or False: Facts and Opinions",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "A fact can be checked and proven true or false.", answer: true },
          { text: "An opinion is a personal view or judgement.", answer: true },
          { text: "Opinions often contain signal words like 'I believe' or 'in my view'.", answer: true },
          { text: "All facts are correct and true.", answer: false },
          { text: "The phrase 'I think' is a fact signal word.", answer: false },
        ],
      },
      // 4
      {
        type: "fill-in-blank" as const,
        title: "Label: Fact or Opinion?",
        instruction: "Write F (fact) or O (opinion) in each blank.",
        sentences: [
          { text: "Kangaroos are found in Australia. [F/O: ___]", blanks: ["F"] },
          { text: "Kangaroos are the best animals in the world. [F/O: ___]", blanks: ["O"] },
          { text: "I think we should have longer school holidays. [F/O: ___]", blanks: ["O"] },
          { text: "The Earth orbits the Sun once every 365.25 days. [F/O: ___]", blanks: ["F"] },
          { text: "Vegetables are more delicious than fruit. [F/O: ___]", blanks: ["O"] },
        ],
      },
      // 5
      {
        type: "matching" as const,
        title: "Match: Fact or Opinion Signal Words",
        instruction: "Draw a line to match each phrase to whether it signals a fact or an opinion.",
        left: ["I believe", "Research shows", "In my view", "Scientists have found", "Everyone should", "Studies confirm"],
        right: ["Opinion signal", "Fact signal", "Opinion signal", "Fact signal", "Opinion signal", "Fact signal"],
      },
      // 6
      {
        type: "sorting" as const,
        title: "Sort: Signal Words",
        instruction: "Sort these phrases into fact signal words or opinion signal words.",
        columns: ["Fact signal words", "Opinion signal words"],
        items: [
          { label: "I believe" }, { label: "research shows" }, { label: "in my opinion" },
          { label: "according to experts" }, { label: "I think" }, { label: "studies prove" },
          { label: "clearly the best" }, { label: "data indicates" }, { label: "everyone should" },
          { label: "evidence suggests" },
        ],
      },
      // 7
      {
        type: "open-response" as const,
        title: "Spot the Signal Words",
        instruction: "Read the passage and answer the questions.",
        parentTip: "Highlighting signal words in different colours is a useful reading strategy.",
        prompts: [
          {
            text: "PASSAGE:\nThe Murray-Darling River system is the longest river system in Australia, stretching over 3,750 kilometres. I believe it is also the most important river in the country. It provides water for about 40% of Australia's agricultural output. In my opinion, every Australian should learn about the river system in school.\n\nHow many facts can you find in the passage?",
            type: "lines" as const, lines: 1,
          },
          { text: "Write the opinion signal words you found:", type: "lines" as const, lines: 2 },
          { text: "Could you verify whether the Murray-Darling is the most important river? Why or why not?", type: "lines" as const, lines: 3 },
        ],
      },
      // 8
      {
        type: "multiple-choice" as const,
        title: "Which Is a Fact?",
        instruction: "Choose the statement that is a fact (could be checked and proven).",
        questions: [
          {
            prompt: "Which statement is a fact?",
            options: [
              "Dogs make the best pets.",
              "Dogs are mammals.",
              "Dogs are more intelligent than cats.",
            ],
            answer: "Dogs are mammals.",
          },
          {
            prompt: "Which statement is a fact?",
            options: [
              "The Olympics are the greatest sporting event on Earth.",
              "The first modern Olympic Games were held in Athens in 1896.",
              "Australia should win more Olympic gold medals.",
            ],
            answer: "The first modern Olympic Games were held in Athens in 1896.",
          },
        ],
      },
      // 9
      {
        type: "open-response" as const,
        title: "Write Your Own Facts and Opinions",
        instruction: "Choose a topic you know well. Write three facts and two opinions about it. Label each sentence F or O.",
        prompts: [
          { text: "My topic:", type: "lines" as const, lines: 1 },
          {
            text: "1.                                                  [ F / O ]\n2.                                                  [ F / O ]\n3.                                                  [ F / O ]\n4.                                                  [ F / O ]\n5.                                                  [ F / O ]",
            type: "lines" as const, lines: 8,
          },
        ],
      },
      // 10
      {
        type: "circle-correct" as const,
        title: "Can This Be Checked? (Fact Detector)",
        instruction: "Circle YES if the statement could be checked by a scientist or researcher, or NO if it cannot.",
        questions: [
          { prompt: "The platypus is the most unusual animal.", options: ["YES", "NO"] },
          { prompt: "The platypus lays eggs and has a duck-like bill.", options: ["YES", "NO"] },
          { prompt: "Chocolate is the best flavour of ice cream.", options: ["YES", "NO"] },
          { prompt: "Mount Everest is 8,849 metres tall.", options: ["YES", "NO"] },
          { prompt: "Everyone should visit Uluru at least once.", options: ["YES", "NO"] },
        ],
      },
      // 11
      {
        type: "sorting" as const,
        title: "Sort: Fact or Opinion? (Set B — Australian Topics)",
        instruction: "Sort each statement into fact or opinion.",
        columns: ["Fact", "Opinion"],
        items: [
          { label: "Sydney is Australia's largest city by population." },
          { label: "Sydney is the most exciting city in Australia." },
          { label: "The emu is the second-largest bird in the world." },
          { label: "Australian wildlife is the most fascinating in the world." },
          { label: "Australia became a federation on 1 January 1901." },
          { label: "Federation was the most important event in Australian history." },
        ],
      },
      // 12
      {
        type: "true-false" as const,
        title: "True or False: Checking Facts",
        instruction: "Circle True or False.",
        statements: [
          { text: "A fact is always stated as the truth — even if it is actually incorrect.", answer: true },
          { text: "You can verify a fact by doing research.", answer: true },
          { text: "An opinion can be proven right or wrong by research.", answer: false },
          { text: "Signal words like 'I believe' always make a statement an opinion.", answer: true },
          { text: "A fact in one text is always a fact in every text.", answer: false },
        ],
      },
      // 13
      {
        type: "fill-in-blank" as const,
        title: "Turn a Fact into an Opinion",
        instruction: "Rewrite each fact as an opinion by adding a signal phrase.",
        parentTip: "This shows your child how easy it is to mix facts and opinions in writing.",
        sentences: [
          { text: "Australia has the world's largest cattle station. → ___ Australia has the world's largest cattle station, which makes it ___.", blanks: ["I believe", "impressive"] },
          { text: "The Sydney Opera House was completed in 1973. → In my view, the Sydney Opera House, completed in 1973, ___.", blanks: ["is the world's finest building"] },
        ],
      },
      // 14
      {
        type: "open-response" as const,
        title: "Find Facts and Opinions in an Advertisement",
        instruction: "Read this advertisement extract. Underline the facts (F) and circle the opinions (O). Then answer the question.",
        prompts: [
          {
            text: "ADVERTISEMENT: SunFresh Orange Juice contains 100% real oranges. It has no added sugar and provides your full daily Vitamin C dose. Most nutritionists agree it's the healthiest choice for your family. SunFresh is, without doubt, the best juice on the market.\n\nList two facts from the advertisement:",
            type: "lines" as const, lines: 2,
          },
          { text: "List two opinions from the advertisement:", type: "lines" as const, lines: 2 },
          { text: "Why might advertisers mix facts and opinions?", type: "lines" as const, lines: 2 },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: Fact Detectors",
        content: "To tell facts from opinions, use the Fact Detector test: ask 'Could a scientist, historian or researcher check whether this is true or false?' If yes — it could be a fact (though it might still be wrong!). If no — it is an opinion. Watch out for 'hidden opinions': statements that sound like facts because they don't use signal words, e.g. 'This is the best policy.' Always ask: could this be checked?",
      },
      // 16
      {
        type: "circle-correct" as const,
        title: "Hidden Opinions",
        instruction: "Some statements look like facts but are actually opinions. Circle Hidden Opinion or Clear Fact for each.",
        questions: [
          { prompt: "This is the most important issue facing Australia today.", options: ["Hidden Opinion", "Clear Fact"] },
          { prompt: "Australia's unemployment rate was 3.5% in 2023.", options: ["Hidden Opinion", "Clear Fact"] },
          { prompt: "This is a great book for children.", options: ["Hidden Opinion", "Clear Fact"] },
          { prompt: "The Great Wall of China stretches over 21,000 kilometres.", options: ["Hidden Opinion", "Clear Fact"] },
          { prompt: "Climate change is the greatest threat to humanity.", options: ["Hidden Opinion", "Clear Fact"] },
        ],
      },
      // 17
      {
        type: "multiple-choice" as const,
        title: "Fact, Opinion or Both?",
        instruction: "Choose whether each sentence contains a fact, an opinion or both.",
        questions: [
          {
            prompt: "The Sydney Harbour Bridge, which is beautiful, was completed in 1932.",
            options: ["Fact only", "Opinion only", "Both fact and opinion"],
            answer: "Both fact and opinion",
          },
          {
            prompt: "I believe Australia's healthcare system is the best in the world.",
            options: ["Fact only", "Opinion only", "Both fact and opinion"],
            answer: "Opinion only",
          },
          {
            prompt: "Australia has a population of about 26 million people.",
            options: ["Fact only", "Opinion only", "Both fact and opinion"],
            answer: "Fact only",
          },
        ],
      },
      // 18
      {
        type: "open-response" as const,
        title: "Write a Balanced Paragraph",
        instruction: "Write a short paragraph about your favourite sport. Include exactly three facts and two opinions. Label each sentence F (fact) or O (opinion).",
        prompts: [
          { text: "My sport:", type: "lines" as const, lines: 1 },
          { text: "My paragraph:", type: "box" as const, lines: 8 },
        ],
      },
      // 19
      {
        type: "sorting" as const,
        title: "Sort: Fact or Opinion? (Set C — Science Topics)",
        instruction: "Sort these statements about science.",
        columns: ["Fact", "Opinion"],
        items: [
          { label: "Water boils at 100 degrees Celsius at sea level." },
          { label: "Science is the most important subject in school." },
          { label: "The human body has 206 bones." },
          { label: "Space exploration is the greatest achievement of humanity." },
          { label: "Light travels at approximately 300,000 km per second." },
          { label: "Everyone should study science." },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Fact Detective",
        content: "Choose a full-page magazine or newspaper article. Using two different colours of highlighter or pencil, mark every fact (colour 1) and every opinion (colour 2). Count up the totals. What percentage of the article is fact and what percentage is opinion? Is it a mainly factual article or a mainly opinion-based one? What kind of text is it — informational, persuasive, or both? Write a short reflection about what you found.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response" as const,
        title: "Evaluate a News Article",
        instruction: "Read a short news article with a parent. Answer these questions.",
        prompts: [
          { text: "Headline of the article:", type: "lines" as const, lines: 1 },
          { text: "Write two facts from the article:", type: "lines" as const, lines: 2 },
          { text: "Write one opinion from the article (or note if there are none):", type: "lines" as const, lines: 2 },
          { text: "Is this article mainly factual or opinion-based? How can you tell?", type: "lines" as const, lines: 2 },
        ],
      },
      // 22
      {
        type: "fill-in-blank" as const,
        title: "Add Signal Words to Make Opinions",
        instruction: "Add an opinion signal phrase to each statement to turn it into a clearly labelled opinion.",
        sentences: [
          { text: "___ [I believe/In my view] homework should be banned.", blanks: ["I believe"] },
          { text: "___ [From my perspective] the best way to travel is by train.", blanks: ["From my perspective"] },
          { text: "Cats make better pets than dogs, ___ [in my opinion].", blanks: ["in my opinion"] },
          { text: "___ [I think] Australia's wildlife is more interesting than any other country's.", blanks: ["I think"] },
        ],
      },
      // 23
      {
        type: "circle-correct" as const,
        title: "Strong Opinion or Weak Opinion?",
        instruction: "Circle whether each opinion signal phrase expresses a strong or cautious opinion.",
        questions: [
          { prompt: "In my view", options: ["Strong", "Cautious"] },
          { prompt: "I am absolutely certain that", options: ["Strong", "Cautious"] },
          { prompt: "I tend to think", options: ["Strong", "Cautious"] },
          { prompt: "It is obvious that", options: ["Strong", "Cautious"] },
          { prompt: "Some might argue that", options: ["Strong", "Cautious"] },
          { prompt: "Without doubt", options: ["Strong", "Cautious"] },
        ],
      },
      // 24
      {
        type: "open-response" as const,
        title: "Fact-Opinion Mix in Persuasive Writing",
        instruction: "Read this persuasive text extract. Find three facts and three opinions, and label them.",
        prompts: [
          {
            text: "TEXT: Screen time is a growing concern for parents. Studies show that children aged 8–12 spend an average of five hours per day on screens. This is clearly far too much. Research has linked excessive screen time to poor sleep quality and reduced physical activity. In my view, schools should ban phones completely. There is no doubt that reducing screen time would transform children's wellbeing.\n\nThree facts:",
            type: "lines" as const, lines: 3,
          },
          { text: "Three opinions:", type: "lines" as const, lines: 3 },
        ],
      },
      // 25
      {
        type: "sorting" as const,
        title: "Sort: Fact or Opinion? (History Topics)",
        instruction: "Sort these historical statements.",
        columns: ["Fact", "Opinion"],
        items: [
          { label: "World War Two ended in 1945." },
          { label: "World War Two was the most tragic event in human history." },
          { label: "The ancient Egyptians built the pyramids." },
          { label: "Ancient Egypt was the greatest civilisation that ever existed." },
          { label: "Neil Armstrong walked on the moon in 1969." },
          { label: "The moon landing was the most important achievement of the 20th century." },
        ],
      },
      // 26
      {
        type: "multiple-choice" as const,
        title: "Why Do Writers Mix Facts and Opinions?",
        instruction: "Choose the best answer for each question.",
        questions: [
          {
            prompt: "Why do persuasive writers include facts alongside their opinions?",
            options: [
              "To make their text longer",
              "To make their opinions seem more credible and believable",
              "Because opinions are not interesting alone",
            ],
            answer: "To make their opinions seem more credible and believable",
          },
          {
            prompt: "What is the risk of a text that is all opinion and no fact?",
            options: [
              "It will be too short",
              "It will be boring",
              "It will be less convincing because it lacks evidence",
            ],
            answer: "It will be less convincing because it lacks evidence",
          },
        ],
      },
      // 27
      {
        type: "open-response" as const,
        title: "Rewrite: Change Opinion to Fact",
        instruction: "Rewrite each opinion as a checkable fact by removing the opinion language and adding a verifiable detail.",
        prompts: [
          { text: "Opinion: Dogs make the best pets.\nFact version:", type: "lines" as const, lines: 2 },
          { text: "Opinion: The beach is the greatest holiday destination.\nFact version:", type: "lines" as const, lines: 2 },
          { text: "Opinion: Reading is the most important skill.\nFact version:", type: "lines" as const, lines: 2 },
        ],
      },
      // 28
      {
        type: "true-false" as const,
        title: "True or False: Fact-Opinion in Media",
        instruction: "Circle True or False.",
        statements: [
          { text: "Advertisements often mix facts and opinions to persuade consumers.", answer: true },
          { text: "News reports should only contain verified facts.", answer: true },
          { text: "Opinion pieces in newspapers should be labelled as opinions.", answer: true },
          { text: "A statement beginning 'Research shows' is always a fact.", answer: false },
          { text: "Identifying fact and opinion is a critical media literacy skill.", answer: true },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Analyse an Advertisement",
        instruction: "Look at a real advertisement (TV, print or online). Answer these questions.",
        prompts: [
          { text: "Product being advertised:", type: "lines" as const, lines: 1 },
          { text: "Two facts in the advertisement:", type: "lines" as const, lines: 2 },
          { text: "Two opinions in the advertisement:", type: "lines" as const, lines: 2 },
          { text: "Does the advertisement try to make opinions sound like facts? How?", type: "lines" as const, lines: 2 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Biased Language in Facts",
        content: "Some statements look like facts but use biased language — words that show a preference or prejudice. For example: 'Only 30% of students passed the exam' sounds factual, but adding 'Only' makes it an opinion (it implies the number is bad). Watch for loaded words like 'merely', 'just', 'at least', 'only', 'even' — they can turn a fact into a biased statement. Critical readers notice these subtle tricks.",
      },
      // 31
      {
        type: "circle-correct" as const,
        title: "Biased or Objective?",
        instruction: "Circle Biased if the statement uses loaded language or Objective if it is neutral.",
        questions: [
          { prompt: "A mere 20% of students achieved an A.", options: ["Biased", "Objective"] },
          { prompt: "20% of students achieved an A.", options: ["Biased", "Objective"] },
          { prompt: "At least three children were hurt in the incident.", options: ["Biased", "Objective"] },
          { prompt: "Three children were hurt in the incident.", options: ["Biased", "Objective"] },
          { prompt: "Even scientists can't explain this phenomenon.", options: ["Biased", "Objective"] },
        ],
      },
      // 32
      {
        type: "sorting" as const,
        title: "Sort: Objective or Loaded Language?",
        instruction: "Sort each phrase by whether it is objective (neutral) or loaded (biased).",
        columns: ["Objective language", "Loaded language"],
        items: [
          { label: "The policy was changed." },
          { label: "The policy was recklessly changed." },
          { label: "Studies suggest a link." },
          { label: "Studies conclusively prove a disturbing link." },
          { label: "The school scored 65% on the test." },
          { label: "The school scored a disappointing 65% on the test." },
        ],
      },
      // 33
      {
        type: "open-response" as const,
        title: "Identify Bias in a Sentence",
        instruction: "Rewrite each biased statement as a neutral, objective fact.",
        prompts: [
          { text: "A mere 40% of voters supported the bill.\nNeutral version:", type: "lines" as const, lines: 1 },
          { text: "At least 200 people protested outside the office.\nNeutral version:", type: "lines" as const, lines: 1 },
          { text: "Even the children's hospital was affected by the cuts.\nNeutral version:", type: "lines" as const, lines: 1 },
        ],
      },
      // 34
      {
        type: "fill-in-blank" as const,
        title: "Opinion Signal Words: Certainty Scale",
        instruction: "These signal words show different levels of certainty. Label each as CERTAIN, PROBABLE or POSSIBLE.",
        sentences: [
          { text: "It is obvious that... [CERTAIN/PROBABLE/POSSIBLE: ___]", blanks: ["CERTAIN"] },
          { text: "Research suggests that... [CERTAIN/PROBABLE/POSSIBLE: ___]", blanks: ["PROBABLE"] },
          { text: "It seems that... [CERTAIN/PROBABLE/POSSIBLE: ___]", blanks: ["POSSIBLE"] },
          { text: "Without any doubt... [CERTAIN/PROBABLE/POSSIBLE: ___]", blanks: ["CERTAIN"] },
          { text: "Evidence indicates... [CERTAIN/PROBABLE/POSSIBLE: ___]", blanks: ["PROBABLE"] },
        ],
      },
      // 35
      {
        type: "open-response" as const,
        title: "Fact vs Opinion in Editorials",
        instruction: "An editorial is a piece of writing that expresses the opinion of a newspaper or journalist. Read the editorial extract and answer the questions.",
        prompts: [
          {
            text: "EDITORIAL: Australia must act urgently on climate change. While temperatures have risen 1.4 degrees since pre-industrial times — a verifiable fact — scientists warn that we are heading toward catastrophic warming. In my view, this generation of politicians has failed future Australians. There is simply no excuse for the lack of action.\n\nTwo facts in the editorial:",
            type: "lines" as const, lines: 2,
          },
          { text: "Two opinions in the editorial:", type: "lines" as const, lines: 2 },
          { text: "Is this editorial balanced or one-sided? How can you tell?", type: "lines" as const, lines: 2 },
        ],
      },
      // 36
      {
        type: "multiple-choice" as const,
        title: "Which Source Is Most Reliable for a Fact?",
        instruction: "Choose the most reliable source for each type of factual claim.",
        questions: [
          { prompt: "The height of Mount Kosciuszko:", options: ["A social media post", "A geography textbook or official survey", "A friend's opinion"], answer: "A geography textbook or official survey" },
          { prompt: "Whether a medicine is safe:", options: ["An advertisement for the medicine", "A peer-reviewed medical study", "A celebrity endorsement"], answer: "A peer-reviewed medical study" },
          { prompt: "Historical events during World War Two:", options: ["A film dramatisation", "A primary historical document", "A historical novel"], answer: "A primary historical document" },
        ],
      },
      // 37
      {
        type: "sorting" as const,
        title: "Sort: Reliable or Unreliable Fact Source?",
        instruction: "Sort each source into reliable or unreliable for verifying facts.",
        columns: ["Reliable", "Unreliable"],
        items: [
          { label: "An encyclopedia" }, { label: "A celebrity's tweet" },
          { label: "A government statistics website" }, { label: "An anonymous blog" },
          { label: "A peer-reviewed journal" }, { label: "A product advertisement" },
          { label: "A reputable newspaper" }, { label: "A friend's text message" },
        ],
      },
      // 38
      {
        type: "open-response" as const,
        title: "Evaluate a Claim",
        instruction: "Read each claim. Decide if it is a fact or opinion, and explain how you would verify it if it is a fact.",
        prompts: [
          { text: "Claim: 'Australia has more venomous snakes than any other country.'\nFact or opinion?\nHow would you verify it?", type: "lines" as const, lines: 3 },
          { text: "Claim: 'Australian children are the luckiest in the world.'\nFact or opinion?\nHow would you verify it?", type: "lines" as const, lines: 3 },
        ],
      },
      // 39
      {
        type: "true-false" as const,
        title: "True or False: Advanced Fact-Opinion",
        instruction: "Circle True or False.",
        statements: [
          { text: "A fact that is later proven wrong was still a fact when it was written.", answer: true },
          { text: "Loaded language can make an opinion sound like a fact.", answer: true },
          { text: "All editorials must be objective and free of opinions.", answer: false },
          { text: "Critical readers check the source of a fact claim.", answer: true },
          { text: "Statistics are always objective and never misleading.", answer: false },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Be the Fact Checker",
        content: "Choose three claims from a magazine or website. For each claim, identify: is it a fact or an opinion? If it is a fact, can you verify it? Use a different reliable source to check it. If you cannot verify it, explain why. Write up your fact-check results as a short report — like a real fact-checker working for a news organisation. This is one of the most important skills in the digital age!",
      },
      // ── CONSOLIDATING 41–80 ────────────────────────────────────────────────
      // 41
      {
        type: "open-response" as const,
        title: "Fact-Opinion in Informational Texts",
        instruction: "Read this informational text about bees. Label each sentence F (fact) or O (opinion) and justify one of your choices.",
        prompts: [
          {
            text: "TEXT: Bees are essential to human food production. [F/O: ___] They pollinate approximately 70% of the crops that feed 90% of the world. [F/O: ___] Without bees, our food supply would collapse. [F/O: ___] Bees are, without question, the most important insects on Earth. [F/O: ___]\n\nJustify one of your labels:",
            type: "lines" as const, lines: 3,
          },
        ],
      },
      // 42
      {
        type: "sorting" as const,
        title: "Sort: Strongly Stated Opinion or Neutral Fact?",
        instruction: "Sort these statements by how they are presented.",
        columns: ["Neutral, checkable fact", "Strongly stated opinion"],
        items: [
          { label: "The Amazon rainforest produces 20% of the world's oxygen." },
          { label: "The Amazon rainforest is quite simply the most vital ecosystem on our planet." },
          { label: "Electric cars emit no direct carbon emissions." },
          { label: "Electric cars are unquestionably the future of transport." },
          { label: "Australia has the world's largest population of wild camels." },
          { label: "Australia's wild camel problem is clearly the worst environmental crisis we face." },
        ],
      },
      // 43
      {
        type: "fill-in-blank" as const,
        title: "Add Facts to Support Opinions",
        instruction: "Each opinion needs a supporting fact. Fill in a plausible fact that supports each opinion.",
        parentTip: "In persuasive writing, every opinion is stronger when supported by evidence.",
        sentences: [
          { text: "Opinion: More trees should be planted in cities. Fact: Studies show that trees in cities ___ [reduce/increase] temperatures by up to 8 degrees.", blanks: ["reduce"] },
          { text: "Opinion: Children should exercise daily. Fact: Research indicates that children who exercise regularly ___ [perform better/worse] in school.", blanks: ["perform better"] },
        ],
      },
      // 44
      {
        type: "open-response" as const,
        title: "Write a Fact-Opinion Paragraph",
        instruction: "Write a paragraph about an Australian animal. Include exactly two facts, one opinion and one statement that uses an opinion signal phrase. Label each sentence.",
        prompts: [
          { text: "Animal:", type: "lines" as const, lines: 1 },
          { text: "Paragraph:", type: "box" as const, lines: 8 },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Distinguishing Fact from Interpretation",
        content: "Sometimes facts are presented alongside interpretations — and these can be easy to confuse. A fact: 'Global temperatures have risen 1.2 degrees since 1880.' An interpretation: 'This proves that immediate action is needed.' The temperature rise can be verified; whether action is needed is a judgement. Critical readers separate the data (fact) from the conclusion drawn from it (interpretation or opinion). Always ask: is this what the data says, or what the writer thinks it means?",
      },
      // 46
      {
        type: "circle-correct" as const,
        title: "Fact or Interpretation?",
        instruction: "Circle whether each statement is a fact (verifiable data) or an interpretation (a conclusion drawn from data).",
        questions: [
          { prompt: "Screen time among children has increased by 30% since 2019.", options: ["Fact", "Interpretation"] },
          { prompt: "The increase in screen time proves children are becoming less active.", options: ["Fact", "Interpretation"] },
          { prompt: "Literacy rates in Australia are declining in some regions.", options: ["Fact", "Interpretation"] },
          { prompt: "Declining literacy rates show that schools are failing students.", options: ["Fact", "Interpretation"] },
        ],
      },
      // 47
      {
        type: "open-response" as const,
        title: "Separate Facts from Interpretations",
        instruction: "Read the paragraph. Identify two facts and two interpretations (conclusions drawn from the facts).",
        prompts: [
          {
            text: "PARAGRAPH: Plastic waste in Australia has grown by 50% over the last decade. This clearly demonstrates that Australians are becoming more irresponsible consumers. Plastic takes over 400 years to decompose in landfill. This proves that plastic pollution is the most urgent environmental crisis of our time.\n\nTwo facts:",
            type: "lines" as const, lines: 2,
          },
          { text: "Two interpretations:", type: "lines" as const, lines: 2 },
          { text: "Could the same facts support a different interpretation? Explain:", type: "lines" as const, lines: 2 },
        ],
      },
      // 48
      {
        type: "sorting" as const,
        title: "Sort: Fact, Opinion or Interpretation?",
        instruction: "Sort each statement into its category.",
        columns: ["Fact", "Opinion", "Interpretation"],
        items: [
          { label: "Australia produces 67 million tonnes of plastic waste per year." },
          { label: "This statistic proves Australians are environmentally irresponsible." },
          { label: "In my view, plastic bags should be banned everywhere." },
          { label: "The Murray-Darling provides water to 40% of Australian farms." },
          { label: "This data shows that the Murray-Darling is being mismanaged." },
          { label: "I believe water conservation should be a national priority." },
        ],
      },
      // 49
      {
        type: "multiple-choice" as const,
        title: "Can Statistics Be Misleading?",
        instruction: "Choose the correct explanation for each scenario.",
        questions: [
          {
            prompt: "'9 out of 10 dentists recommend BrightSmile toothpaste.' Why might this be misleading?",
            options: [
              "The sample was only 10 dentists, which may not be representative.",
              "Dentists always tell the truth.",
              "Statistics are always 100% accurate.",
            ],
            answer: "The sample was only 10 dentists, which may not be representative.",
          },
          {
            prompt: "'Crime in our city has dropped by 50%.' Why should you ask more questions before accepting this as a fact?",
            options: [
              "The reporter may have made a spelling mistake.",
              "You should ask: which crimes? Over what period? Compared to what?",
              "Crime statistics are never collected by governments.",
            ],
            answer: "You should ask: which crimes? Over what period? Compared to what?",
          },
        ],
      },
      // 50
      {
        type: "home-activity" as const,
        title: "Media Fact Detective",
        instruction: "Practise spotting facts and opinions in real-world media.",
        parentTip: "Media literacy is a critical 21st-century skill — weaving it into everyday reading habits builds lifelong critical thinking.",
        suggestions: [
          "Watch a short news clip together and call out 'fact' or 'opinion' after each key statement.",
          "Find a letters-to-the-editor section in a newspaper and highlight all opinion signal words.",
          "Read a product advertisement and sort every sentence into fact, opinion or interpretation.",
          "Write your own 'balanced' paragraph on a topic — include exactly three facts and two opinions, clearly labelled.",
        ],
      },
      // 51
      {
        type: "open-response" as const,
        title: "Fact-Check a Quote",
        instruction: "Read this quote from an imaginary politician. Identify which parts are facts and which are opinions.",
        prompts: [
          {
            text: "QUOTE: 'Our new education policy is the best reform in 50 years. Test scores have risen 12% since its introduction. Children are clearly more engaged in learning than ever before. Our government has invested $500 million in new school technology — an amount that proves our commitment to excellence.'\n\nTwo facts:",
            type: "lines" as const, lines: 2,
          },
          { text: "Two opinions or interpretations:", type: "lines" as const, lines: 2 },
          { text: "What questions would a fact-checker ask about this quote?", type: "lines" as const, lines: 2 },
        ],
      },
      // 52
      {
        type: "sorting" as const,
        title: "Sort: Fact or Opinion in a Speech?",
        instruction: "Politicians often mix facts and opinions. Sort these statements.",
        columns: ["Fact", "Opinion"],
        items: [
          { label: "Our city has grown by 15% in the last five years." },
          { label: "Our city is the best-managed city in the country." },
          { label: "We have built 500 new homes this year." },
          { label: "Our housing program is the most successful ever seen." },
          { label: "Unemployment is at 3.8%, the lowest in 20 years." },
          { label: "Our economic management is clearly world-class." },
        ],
      },
      // 53
      {
        type: "open-response" as const,
        title: "Write an Opinion That Sounds Like a Fact",
        instruction: "Try writing two opinions that don't use obvious signal words — they should sound like facts but actually cannot be verified. Then explain how a reader would identify them as opinions.",
        prompts: [
          { text: "Opinion 1 that sounds like a fact:", type: "lines" as const, lines: 1 },
          { text: "Opinion 2 that sounds like a fact:", type: "lines" as const, lines: 1 },
          { text: "How would a critical reader identify these as opinions?", type: "lines" as const, lines: 2 },
        ],
      },
      // 54
      {
        type: "fill-in-blank" as const,
        title: "Fact-Opinion in Persuasive Arguments",
        instruction: "Label each part of this argument F (fact), O (opinion) or I (interpretation).",
        sentences: [
          { text: "Childhood obesity rates have doubled in the last 20 years. [F/O/I: ___]", blanks: ["F"] },
          { text: "This proves that parents are not feeding their children properly. [F/O/I: ___]", blanks: ["I"] },
          { text: "In my view, junk food advertising to children should be banned. [F/O/I: ___]", blanks: ["O"] },
          { text: "Children who eat a balanced diet perform better academically. [F/O/I: ___]", blanks: ["F"] },
        ],
      },
      // 55
      {
        type: "true-false" as const,
        title: "True or False: Facts in Persuasive Writing",
        instruction: "Circle True or False.",
        statements: [
          { text: "Using facts in a persuasive text makes it more convincing.", answer: true },
          { text: "A persuasive text that uses only opinions is always more powerful.", answer: false },
          { text: "Facts can be selected and presented to support a particular opinion.", answer: true },
          { text: "An interpretation of data is always correct.", answer: false },
          { text: "Critical readers question the source and selection of facts in persuasive texts.", answer: true },
        ],
      },
      // 56
      {
        type: "open-response" as const,
        title: "Write Both Sides of an Argument",
        instruction: "Choose one statement: 'All schools should have school gardens.' Write two paragraphs — one arguing FOR and one against — using at least two facts and one opinion in each paragraph.",
        prompts: [
          { text: "FOR paragraph:", type: "box" as const, lines: 6 },
          { text: "AGAINST paragraph:", type: "box" as const, lines: 6 },
        ],
      },
      // 57
      {
        type: "circle-correct" as const,
        title: "Which Fact Best Supports the Opinion?",
        instruction: "Choose the fact that best supports each opinion.",
        questions: [
          {
            prompt: "Opinion: 'Children should spend more time outdoors.'",
            options: [
              "The outdoors is beautiful.",
              "Studies show outdoor play reduces stress and improves concentration in children.",
              "I love being outside.",
            ],
          },
          {
            prompt: "Opinion: 'Australia should invest more in renewable energy.'",
            options: [
              "Solar energy is nice.",
              "Australia receives more solar radiation per square metre than almost any other country.",
              "Renewable energy is the future.",
            ],
          },
        ],
      },
      // 58
      {
        type: "open-response" as const,
        title: "Opinion With Supporting Facts",
        instruction: "Choose an opinion from the box. Write a PEEL paragraph using your opinion as the Point and at least two facts as Evidence. Topics: more parks in cities / school uniforms / reducing plastic / more PE in schools.",
        prompts: [
          { text: "My opinion (Point):", type: "lines" as const, lines: 1 },
          { text: "My paragraph:", type: "box" as const, lines: 8 },
          { text: "Label the facts and opinions in your paragraph:", type: "lines" as const, lines: 2 },
        ],
      },
      // 59
      {
        type: "sorting" as const,
        title: "Sort: Fact-Based or Opinion-Based Texts?",
        instruction: "Which type of text is mainly fact-based or mainly opinion-based?",
        columns: ["Mainly fact-based", "Mainly opinion-based"],
        items: [
          { label: "A science encyclopedia entry" },
          { label: "A letter to the editor" },
          { label: "A history textbook" },
          { label: "A persuasive essay" },
          { label: "A weather report" },
          { label: "A restaurant review" },
          { label: "A news report" },
          { label: "An advertisement" },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip" as const,
        title: "Tip: Facts Can Be Misleading",
        content: "Not all facts are equal. Facts can be taken out of context, cherry-picked to support a view, or presented alongside misleading comparisons. For example: '90% of children who eat cereal pass their exams.' This sounds like a fact, but it does not prove that cereal causes exam success — it only shows a correlation. Always ask: what does this fact actually prove? Is it being used fairly? This kind of thinking is called critical analysis.",
      },
      // 61 (SPARK at ~60)
      {
        type: "spark" as const,
        title: "Spark: Write a Fake Fact",
        content: "Create a fact that sounds very convincing but is actually made up — a plausible-sounding statistic or claim. Then write it in two ways: once neutrally and once using loaded language. Share it with a family member and ask if they can spot that it is fake. Discuss: what makes a fake fact convincing? How would you check it? This exercise will make you a much sharper reader of real-world information.",
      },
      // 62
      {
        type: "open-response" as const,
        title: "Analyse a Fact-Opinion Mix in the Wild",
        instruction: "Find a real text (article, flyer, advertisement or webpage) that mixes facts and opinions. Paste or describe it here, then analyse it.",
        prompts: [
          { text: "Text source/title:", type: "lines" as const, lines: 1 },
          { text: "Three facts from the text:", type: "lines" as const, lines: 3 },
          { text: "Three opinions from the text:", type: "lines" as const, lines: 3 },
          { text: "Is the text balanced or does it lean one way? How can you tell?", type: "lines" as const, lines: 2 },
        ],
      },
      // 63
      {
        type: "fill-in-blank" as const,
        title: "Hedging Language",
        instruction: "Writers use 'hedging' language to signal uncertainty about facts. Label each as CERTAIN or UNCERTAIN.",
        sentences: [
          { text: "Research suggests that... [CERTAIN/UNCERTAIN: ___]", blanks: ["UNCERTAIN"] },
          { text: "Scientists have proven that... [CERTAIN/UNCERTAIN: ___]", blanks: ["CERTAIN"] },
          { text: "It appears that... [CERTAIN/UNCERTAIN: ___]", blanks: ["UNCERTAIN"] },
          { text: "The data conclusively demonstrates... [CERTAIN/UNCERTAIN: ___]", blanks: ["CERTAIN"] },
          { text: "It is possible that... [CERTAIN/UNCERTAIN: ___]", blanks: ["UNCERTAIN"] },
        ],
      },
      // 64
      {
        type: "multiple-choice" as const,
        title: "Fact-Opinion in Academic Writing",
        instruction: "Academic writing should mostly use facts and evidence, with clearly flagged opinions. Choose the better academic sentence.",
        questions: [
          {
            prompt: "Which sentence is more appropriate in an academic text?",
            options: [
              "Climate change is obviously the most important problem ever.",
              "Evidence suggests that climate change poses significant risks to global ecosystems.",
              "I think climate change is bad.",
            ],
            answer: "Evidence suggests that climate change poses significant risks to global ecosystems.",
          },
          {
            prompt: "Which sentence best separates fact from opinion?",
            options: [
              "Reading is vital for success.",
              "Studies show that regular readers achieve higher academic results, suggesting that reading is a key factor in educational outcomes.",
              "Everyone knows reading is important.",
            ],
            answer: "Studies show that regular readers achieve higher academic results, suggesting that reading is a key factor in educational outcomes.",
          },
        ],
      },
      // 65
      {
        type: "open-response" as const,
        title: "Media Literacy: Evaluate a Social Media Post",
        instruction: "Read this imaginary social media post and evaluate the claims.",
        prompts: [
          {
            text: "POST: 'BREAKING: Scientists say chocolate cures cancer! Researchers found that patients who ate chocolate had better recovery rates. Everyone should eat chocolate every day! Share this NOW.'\n\nWhat facts, if any, are in this post?",
            type: "lines" as const, lines: 2,
          },
          { text: "What claims cannot be verified?", type: "lines" as const, lines: 2 },
          { text: "Would you share this post? Why or why not?", type: "lines" as const, lines: 2 },
        ],
      },
      // 66
      {
        type: "sorting" as const,
        title: "Sort: Reliable Evidence or Weak Evidence?",
        instruction: "Sort each type of evidence by reliability.",
        columns: ["Strong, reliable evidence", "Weak, unreliable evidence"],
        items: [
          { label: "A peer-reviewed study of 10,000 people" },
          { label: "My neighbour's personal experience" },
          { label: "Government statistics from the ABS" },
          { label: "A celebrity's Instagram post" },
          { label: "A systematic review of 50 studies" },
          { label: "An anonymous online comment" },
          { label: "A university report" },
          { label: "A chain email" },
        ],
      },
      // 67
      {
        type: "open-response" as const,
        title: "Fact-Opinion in Your Own Persuasive Writing",
        instruction: "Write a persuasive paragraph arguing for or against: 'Schools should be longer.' Use at least two real or plausible facts and clearly signal your opinions. Then label every sentence F, O or I.",
        prompts: [
          { text: "My paragraph:", type: "box" as const, lines: 8 },
          { text: "Labels:", type: "lines" as const, lines: 2 },
        ],
      },
      // 68
      {
        type: "true-false" as const,
        title: "True or False: Evidence and Argument",
        instruction: "Circle True or False.",
        statements: [
          { text: "A persuasive argument is stronger when it uses verifiable facts as evidence.", answer: true },
          { text: "Opinions are more convincing than facts in academic writing.", answer: false },
          { text: "A fact can be used to support multiple different opinions.", answer: true },
          { text: "All opinions are equally valid.", answer: false },
          { text: "Critical readers question whether facts are being used fairly and in context.", answer: true },
        ],
      },
      // 69
      {
        type: "fill-in-blank" as const,
        title: "Fact-Opinion Vocabulary",
        instruction: "Fill in the blank with the correct term from the box. Word bank: fact, opinion, bias, evidence, interpretation, hedging.",
        sentences: [
          { text: "A statement that can be verified is called a ___.", blanks: ["fact"] },
          { text: "A personal view or judgement is called an ___.", blanks: ["opinion"] },
          { text: "A conclusion drawn from data is called an ___.", blanks: ["interpretation"] },
          { text: "When a writer unfairly favours one side, this is called ___.", blanks: ["bias"] },
          { text: "Language like 'research suggests' or 'it appears' is called ___ language.", blanks: ["hedging"] },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Real-World Fact-Opinion Challenge",
        instruction: "Apply fact-opinion skills in everyday life this week.",
        parentTip: "Practising media literacy at home builds some of the most important critical thinking skills your child will ever develop.",
        suggestions: [
          "During dinner, play 'fact or opinion' — each person states something and others decide which it is.",
          "Watch the evening news together and identify three facts and two opinions.",
          "Find a product advertisement and fact-check every claim it makes.",
          "Write a one-page 'balanced report' on a topic you care about — include both facts and clearly flagged opinions.",
        ],
      },
      // ── EXTENDING 71–100 ──────────────────────────────────────────────────
      // 71
      {
        type: "open-response" as const,
        title: "Critical Analysis: Newspaper Opinion Column",
        instruction: "Find a real opinion column or editorial in a newspaper or online. Read it and complete this analysis.",
        prompts: [
          { text: "Title and author:", type: "lines" as const, lines: 1 },
          { text: "Main opinion (argument) of the piece:", type: "lines" as const, lines: 2 },
          { text: "Two facts used as evidence:", type: "lines" as const, lines: 2 },
          { text: "Are the facts used fairly, or do they seem cherry-picked? Explain:", type: "lines" as const, lines: 2 },
          { text: "Is the writer's argument convincing? Why or why not?", type: "lines" as const, lines: 2 },
        ],
      },
      // 72
      {
        type: "sorting" as const,
        title: "Sort: Strong Argument or Weak Argument?",
        instruction: "Sort each argument quality into strong or weak.",
        columns: ["Strong argument quality", "Weak argument quality"],
        items: [
          { label: "Uses verified statistics from reputable sources" },
          { label: "Relies only on personal anecdotes" },
          { label: "Acknowledges the opposing view before refuting it" },
          { label: "Uses loaded language to exaggerate" },
          { label: "Uses hedging language appropriately to signal uncertainty" },
          { label: "Presents interpretations as facts" },
          { label: "Separates facts clearly from opinions" },
          { label: "Cherry-picks facts that only support one view" },
        ],
      },
      // 73
      {
        type: "open-response" as const,
        title: "Write a Balanced Report",
        instruction: "Write a balanced, two-paragraph report on the topic 'Social media and young people'. Paragraph 1: facts only. Paragraph 2: your opinion, clearly signalled. Label every sentence F, O or I.",
        prompts: [
          { text: "Paragraph 1 — Facts:", type: "box" as const, lines: 6 },
          { text: "Paragraph 2 — Your opinion:", type: "box" as const, lines: 6 },
        ],
      },
      // 74
      {
        type: "multiple-choice" as const,
        title: "Evaluating Use of Evidence",
        instruction: "Choose the best explanation for each scenario.",
        questions: [
          {
            prompt: "A scientist says 'our study of 5 mice shows that exercise prevents cancer.' What is the problem?",
            options: [
              "Exercise is not real.",
              "The sample size (5 mice) is too small to draw reliable conclusions.",
              "Scientists never study mice.",
            ],
            answer: "The sample size (5 mice) is too small to draw reliable conclusions.",
          },
          {
            prompt: "An article only quotes people who agree with its argument. What is this called?",
            options: ["Balance", "Cherry-picking / bias", "A fact", "An interpretation"],
            answer: "Cherry-picking / bias",
          },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Counter-Arguments",
        content: "The strongest arguments acknowledge the other side. A writer who says 'Some argue that X, but evidence shows Y' is far more credible than one who ignores the opposing view completely. This is called a counter-argument. When you write persuasively, always include at least one counter-argument and explain why you still believe your position. This shows intellectual honesty and makes your argument more persuasive, not less.",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Write With a Counter-Argument",
        instruction: "Write a persuasive paragraph on 'Homework should be banned'. Include: your opinion, two supporting facts, one counter-argument, and a refutation of that counter-argument.",
        prompts: [
          { text: "My paragraph:", type: "box" as const, lines: 10 },
          { text: "Label the counter-argument (CA) and refutation (R):", type: "lines" as const, lines: 1 },
        ],
      },
      // 77
      {
        type: "fill-in-blank" as const,
        title: "Counter-Argument Language",
        instruction: "Fill in the best phrase to introduce a counter-argument or refutation.",
        sentences: [
          { text: "___ [Although/Some argue that] screen time is harmful, research also shows it can support learning.", blanks: ["Although"] },
          { text: "Critics claim zoos are cruel. ___ [However], zoos play a vital role in conservation.", blanks: ["However"] },
          { text: "___ [While some suggest] that homework is unnecessary, studies show it builds discipline.", blanks: ["While some suggest"] },
          { text: "___ [Opponents argue], the evidence clearly supports introducing coding in primary schools.", blanks: ["Despite what opponents argue"] },
        ],
      },
      // 78
      {
        type: "sorting" as const,
        title: "Sort: Types of Evidence in Persuasive Writing",
        instruction: "Sort each type of evidence from most to least reliable by placing it in the correct column.",
        columns: ["Most reliable", "Moderately reliable", "Least reliable"],
        items: [
          { label: "Large-scale peer-reviewed study" },
          { label: "Survey of 50 people" },
          { label: "Personal anecdote" },
          { label: "Government census data" },
          { label: "Expert opinion" },
          { label: "Social media post" },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Evaluate Your Own Argument",
        instruction: "Look back at a persuasive paragraph you have written. Answer these self-evaluation questions.",
        prompts: [
          { text: "Did you use at least two verifiable facts? List them:", type: "lines" as const, lines: 2 },
          { text: "Did you signal your opinions clearly? Give an example:", type: "lines" as const, lines: 1 },
          { text: "Did you include a counter-argument? If not, add one now:", type: "lines" as const, lines: 2 },
          { text: "How could you make your argument more convincing?", type: "lines" as const, lines: 2 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Debate",
        content: "Choose a topic you feel strongly about. Research it using at least two reliable sources. Write a two-minute speech that: states your opinion clearly, supports it with at least three facts, acknowledges one counter-argument and refutes it, and ends with a powerful concluding statement. Deliver the speech to your family. Then switch — write the same length speech arguing the OPPOSITE position. Which speech was harder to write, and why?",
      },
      // 81
      {
        type: "open-response" as const,
        title: "Fact-Opinion Analysis: A Political Speech",
        instruction: "Read this imaginary political speech extract. Identify facts, opinions and interpretations.",
        prompts: [
          {
            text: "SPEECH: 'Our government has created 100,000 new jobs this year. This proves we are the strongest economic managers in Australian history. Unemployment is now at 3.2% — the lowest in 30 years. Critics claim our policies are too expensive, but clearly the results speak for themselves.'\n\nFacts:",
            type: "lines" as const, lines: 2,
          },
          { text: "Opinions:", type: "lines" as const, lines: 2 },
          { text: "Interpretations (conclusions drawn from facts):", type: "lines" as const, lines: 2 },
          { text: "What questions would a critical listener ask about the claims in this speech?", type: "lines" as const, lines: 2 },
        ],
      },
      // 82
      {
        type: "multiple-choice" as const,
        title: "Sophisticated Fact-Opinion Analysis",
        instruction: "Choose the most sophisticated analysis for each question.",
        questions: [
          {
            prompt: "The statement 'Our team has the best record in the competition' could be a fact if:",
            options: [
              "The speaker believes it strongly",
              "It is based on a measurable, verifiable statistic like win percentage",
              "Everyone agrees with it",
            ],
            answer: "It is based on a measurable, verifiable statistic like win percentage",
          },
          {
            prompt: "Which statement best describes the relationship between facts and opinions in a good argument?",
            options: [
              "Facts and opinions are completely separate and should never be mixed.",
              "Opinions should be supported by facts, and facts should be interpreted honestly.",
              "Opinions are more important than facts in persuasive writing.",
            ],
            answer: "Opinions should be supported by facts, and facts should be interpreted honestly.",
          },
        ],
      },
      // 83
      {
        type: "open-response" as const,
        title: "Research-Based Persuasive Writing",
        instruction: "Choose a topic you are interested in. Research two or three facts about it using reliable sources. Write a persuasive paragraph using those facts as evidence for your opinion. Label every sentence F, O or I.",
        prompts: [
          { text: "My topic:", type: "lines" as const, lines: 1 },
          { text: "Sources I used:", type: "lines" as const, lines: 1 },
          { text: "My paragraph:", type: "box" as const, lines: 10 },
        ],
      },
      // 84
      {
        type: "sorting" as const,
        title: "Sort: Ethical Use of Facts in Writing",
        instruction: "Sort each writing behaviour into ethical or unethical.",
        columns: ["Ethical use of facts", "Unethical use of facts"],
        items: [
          { label: "Citing the source of all statistics" },
          { label: "Making up a statistic to support your argument" },
          { label: "Acknowledging when a fact is uncertain" },
          { label: "Presenting only the facts that support your view" },
          { label: "Using a fact in the context it was intended" },
          { label: "Quoting someone out of context to misrepresent their view" },
        ],
      },
      // 85
      {
        type: "true-false" as const,
        title: "True or False: Critical Thinking and Fact-Opinion",
        instruction: "Circle True or False.",
        statements: [
          { text: "A statement can be presented as a fact even if it is actually false.", answer: true },
          { text: "Critical thinkers accept facts from trusted sources without checking them.", answer: false },
          { text: "A counter-argument weakens a persuasive text.", answer: false },
          { text: "Selecting only evidence that supports your view is called cherry-picking.", answer: true },
          { text: "Hedging language shows intellectual honesty about uncertainty.", answer: true },
        ],
      },
      // 86
      {
        type: "fill-in-blank" as const,
        title: "Vocabulary: Fact-Opinion Analysis",
        instruction: "Fill in the correct term.",
        sentences: [
          { text: "Selecting only facts that support your argument is called ___.", blanks: ["cherry-picking"] },
          { text: "A conclusion drawn from evidence is called an ___.", blanks: ["interpretation"] },
          { text: "A hidden preference or unfair lean toward one view is called ___.", blanks: ["bias"] },
          { text: "Using language like 'it appears' to signal uncertainty is called ___ language.", blanks: ["hedging"] },
          { text: "Acknowledging the opposing view in an argument is called a ___.", blanks: ["counter-argument"] },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Evaluate a Fact-Heavy Text",
        instruction: "Read a chapter or article from an information text (science, history or geography). Answer these analysis questions.",
        prompts: [
          { text: "Text title and subject:", type: "lines" as const, lines: 1 },
          { text: "Does the text contain any opinions or interpretations, or is it purely factual?", type: "lines" as const, lines: 2 },
          { text: "Does the author use any hedging language? Give an example:", type: "lines" as const, lines: 2 },
          { text: "Is there any evidence of bias in how the facts are presented?", type: "lines" as const, lines: 2 },
        ],
      },
      // 88
      {
        type: "multiple-choice" as const,
        title: "Fact-Opinion in Non-fiction Texts",
        instruction: "Choose the correct answer.",
        questions: [
          {
            prompt: "Which of these non-fiction texts is most likely to contain opinions?",
            options: ["A scientific encyclopaedia", "A persuasive essay", "A dictionary"],
            answer: "A persuasive essay",
          },
          {
            prompt: "Which question best identifies a hidden opinion?",
            options: [
              "'When was this written?'",
              "'Could a researcher verify this claim with evidence?'",
              "'Who is the author?'",
            ],
            answer: "'Could a researcher verify this claim with evidence?'",
          },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Final Synthesis: Fact, Opinion, and Critical Thinking",
        instruction: "Write a reflection on what you have learned about facts and opinions.",
        prompts: [
          { text: "What is the difference between a fact and an interpretation?", type: "lines" as const, lines: 2 },
          { text: "Why is it important to be able to identify opinions in what you read?", type: "lines" as const, lines: 2 },
          { text: "Give an example of when a fact could be used misleadingly:", type: "lines" as const, lines: 2 },
          { text: "How will you apply these skills in your own reading and writing?", type: "lines" as const, lines: 2 },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Being a Fair Writer",
        content: "When you write using facts, you have a responsibility to use them fairly. This means: citing your sources, not exaggerating what the evidence shows, acknowledging what the evidence does NOT prove, and presenting the other side honestly before refuting it. Writing that does all of this is called intellectually honest or fair-minded writing. This is a skill valued in journalism, science, law, and all forms of public discourse.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Fact-Opinion in Your Reading Life",
        instruction: "Think about something you have read recently — a book, article, or webpage. Answer these questions.",
        prompts: [
          { text: "What did you read?", type: "lines" as const, lines: 1 },
          { text: "Did it contain mainly facts, opinions, or both?", type: "lines" as const, lines: 1 },
          { text: "Did the author signal their opinions clearly?", type: "lines" as const, lines: 1 },
          { text: "Did anything seem misleading or biased? Explain:", type: "lines" as const, lines: 2 },
        ],
      },
      // 92
      {
        type: "sorting" as const,
        title: "Sort: Fact-Opinion Skill Levels",
        instruction: "Sort each skill into beginner, developing or advanced.",
        columns: ["Beginner", "Developing", "Advanced"],
        items: [
          { label: "Identifying obvious opinion signal words like 'I think'" },
          { label: "Spotting hidden opinions in fact-sounding statements" },
          { label: "Analysing bias in how facts are selected and presented" },
          { label: "Separating facts from opinions using a sorting table" },
          { label: "Evaluating the reliability of a fact's source" },
          { label: "Using counter-arguments in persuasive writing" },
        ],
      },
      // 93
      {
        type: "fill-in-blank" as const,
        title: "Advanced Fact-Opinion Vocabulary in Sentences",
        instruction: "Use the correct advanced term in each sentence.",
        sentences: [
          { text: "The journalist was accused of ___ because she only quoted sources who agreed with her.", blanks: ["bias"] },
          { text: "The researcher added ___ language like 'appears to' because the results were not conclusive.", blanks: ["hedging"] },
          { text: "The politician ___ facts by presenting the data out of its original context.", blanks: ["misrepresented"] },
          { text: "A strong argument includes a ___ to show awareness of the opposing view.", blanks: ["counter-argument"] },
        ],
      },
      // 94
      {
        type: "open-response" as const,
        title: "Write a Fact-Checked Argument",
        instruction: "Choose a topic from the list: food waste / ocean pollution / social media / homework. Write a full persuasive paragraph that: is based on at least two verifiable facts, clearly signals your opinion, includes a counter-argument, uses hedging language at least once, and labels sentences F, O or I.",
        prompts: [
          { text: "My topic:", type: "lines" as const, lines: 1 },
          { text: "My paragraph:", type: "box" as const, lines: 10 },
          { text: "Labels:", type: "lines" as const, lines: 2 },
        ],
      },
      // 95
      {
        type: "true-false" as const,
        title: "True or False: Mastery Check",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "A fact can be verifiable even if it turns out to be incorrect.", answer: true },
          { text: "A counter-argument always weakens the writer's position.", answer: false },
          { text: "Cherry-picking is the ethical use of evidence.", answer: false },
          { text: "Hedging language shows intellectual honesty.", answer: true },
          { text: "A well-structured argument uses both facts and clearly signalled opinions.", answer: true },
        ],
      },
      // 96
      {
        type: "open-response" as const,
        title: "Compare: Two Texts on the Same Topic",
        instruction: "Find two short texts on the same topic — one factual (e.g. a Wikipedia article) and one opinionated (e.g. a blog post or editorial). Compare them.",
        prompts: [
          { text: "Topic:", type: "lines" as const, lines: 1 },
          { text: "Text 1 title and type:", type: "lines" as const, lines: 1 },
          { text: "Text 2 title and type:", type: "lines" as const, lines: 1 },
          { text: "How does the language differ between the two texts?", type: "lines" as const, lines: 2 },
          { text: "Which is more useful for finding facts? Which is more useful for forming an opinion?", type: "lines" as const, lines: 2 },
        ],
      },
      // 97
      {
        type: "matching" as const,
        title: "Match Term to Definition (Final Review)",
        instruction: "Draw a line to match each critical thinking term to its correct definition.",
        left: ["Fact", "Opinion", "Interpretation", "Bias", "Counter-argument", "Hedging language"],
        right: [
          "A conclusion drawn from evidence",
          "A statement that can be verified",
          "An unfair lean toward one view",
          "A personal view or judgement",
          "Words like 'suggests' or 'appears' that signal uncertainty",
          "An acknowledgement of the opposing view",
        ],
      },
      // 98
      {
        type: "multiple-choice" as const,
        title: "Fact-Opinion Mastery",
        instruction: "Choose the best answer for each question.",
        questions: [
          { prompt: "Which of these is the best definition of a fact?", options: ["Something everyone believes", "A statement that can be verified as true or false", "Something written in a newspaper"], answer: "A statement that can be verified as true or false" },
          { prompt: "Which of these is the most intellectually honest approach in persuasive writing?", options: ["Only using facts that support your argument", "Acknowledging both supporting facts and counter-arguments", "Avoiding all opinions"], answer: "Acknowledging both supporting facts and counter-arguments" },
        ],
      },
      // 99
      {
        type: "home-activity" as const,
        title: "Critical Reader Challenge",
        instruction: "Become a critical reader of everything you encounter this week.",
        parentTip: "Media literacy is one of the most important 21st-century skills — nurture it in every conversation.",
        suggestions: [
          "Watch a political advertisement with a parent and identify every fact and opinion in it.",
          "Read one newspaper editorial and one news report on the same topic — list the differences in language.",
          "Fact-check one claim from social media this week using a reliable source.",
          "Write a letter to an imaginary editor correcting a biased article with accurate facts.",
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Create Your Own Fact-Opinion Analysis Toolkit",
        content: "Design a personal 'Fact-Opinion Toolkit' — a one-page reference guide for critical reading. Include: a definition of fact, opinion, interpretation and bias; a list of fact signal words and opinion signal words; a checklist for evaluating any claim (who said it? can it be checked? is the source reliable? is there a counter-argument?); and one example of a fact used misleadingly. Decorate it and keep it near your reading space. Use it every time you read something important for the rest of the year!",
      },
    ],
  },
  {
    slug: "persuasive-opinion-paragraphs",
    title: "Persuasive Writing: Opinion Paragraphs",
    strand: "Literacy",
    description:
      "Write a well-structured opinion paragraph using a clear point, reasons and evidence.",
    learningGuide: {
      concept:
        "A strong opinion paragraph has: a topic sentence that states the main point, two or three reasons with supporting evidence or examples, and a concluding sentence that restates the opinion. Signal words like firstly, furthermore, in conclusion help structure the argument.",
      activation:
        "Ask your child: Should our school have a longer lunch break? Give me three reasons. Help them see that reasons need evidence to be convincing.",
      check:
        "After the worksheet, ask your child to read their paragraph aloud and check: Does the first sentence state the opinion? Is there at least one piece of evidence? Does the last sentence summarise?",
    },
    lesson: {
      title: "Persuasion Station",
      objective:
        "Plan and write a structured opinion paragraph using the PEEL method — Point, Evidence, Explanation, Link.",
      materials: ["This worksheet", "A pencil", "A highlighter"],
      intro: {
        title: "The Power of Persuasion",
        script:
          "Have you ever convinced someone to do something? Maybe you persuaded a parent to let you stay up late, or talked a friend into playing your favourite game. How did you do it? You probably stated what you wanted, gave reasons, and maybe even used evidence — like, all my friends are allowed to stay up until 9! That is exactly what persuasive writing does. It gives the reader a reason to agree with you. And there is a handy structure called PEEL that makes it easy to organise.",
        action:
          "Write PEEL vertically on a piece of paper — P for Point, E for Evidence, E for Explanation, L for Link back. Explain each step with a spoken example before moving to the worksheet.",
      },
      mainActivity: {
        title: "Build the Paragraph",
        script:
          "Today our topic is: All children should learn to cook. I am going to think through PEEL out loud. Point — All children should learn to cook. Evidence — Research shows children who cook at home are more likely to choose healthy foods. Explanation — This matters because a healthy diet helps children concentrate at school. Link — Clearly, cooking is an essential life skill that benefits children now and in the future. Now you are going to write your own paragraph on a different topic.",
        action:
          "Model writing on a whiteboard or large paper so your child can see the process before writing independently.",
      },
      wrapUp: {
        title: "Peer Edit",
        script:
          "Swap your paragraph with me. I am going to be your editor. I will check: Is the opinion stated clearly? Is there real evidence? Does the paragraph end with a strong link back to the point? Then it is your turn to check mine.",
        action:
          "Use the PEEL checklist on the worksheet to review your child's paragraph together.",
      },
      parentTip:
        "Look at letters to the editor in a local newspaper together. Ask your child to identify the PEEL structure — does the writer use it? Are some letters more convincing than others? Why?",
      extension:
        "Challenge your child to write a counter-argument paragraph — the same topic but arguing the opposite side. Then discuss: which paragraph is more convincing, and why?",
      resources: [
        {
          title: "ReadWriteThink — Persuasion Map",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives/persuasion-map",
          description:
            "Interactive graphic organiser for planning persuasive writing.",
        },
        {
          title: "ABC Education — Persuasive Texts",
          url: "https://www.abc.net.au/education/media-literacy/persuasive-texts/",
          description:
            "Short videos and activities on identifying and creating persuasive texts.",
        },
        {
          title: "Khan Academy — Opinion Writing",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:writing/xe2c54a99ede11c03:opinion-writing/e/opinion-writing",
          description: "Guided practice for structuring opinion paragraphs.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "PEEL Planner",
        instruction:
          "Choose one of the topics below and complete the PEEL planner before writing your paragraph.",
        prompts: [
          {
            text: "Choose a topic:\n  [ ] All children should have a pet.\n  [ ] Homework should be banned.\n  [ ] Schools should teach cooking.\n  [ ] My own topic:",
            type: "lines",
            lines: 1,
          },
          { text: "P — My Point (opinion sentence):", type: "lines", lines: 2 },
          { text: "E — Evidence or example:", type: "lines", lines: 2 },
          { text: "E — Explanation (why does this matter?):", type: "lines", lines: 2 },
          { text: "L — Link back to my point:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Opinion Paragraph",
        instruction:
          "Use your PEEL planner to write your full opinion paragraph here. Aim for 5 to 7 sentences.",
        prompts: [{ text: "Write your paragraph:", type: "box", lines: 14 }],
      },
      {
        type: "open-response",
        title: "PEEL Self-check",
        instruction:
          "Check your paragraph against this list. Tick each box when you are happy with that part.",
        prompts: [
          {
            text: "  [ ] My first sentence clearly states my opinion.\n  [ ] I included at least one piece of evidence or example.\n  [ ] I explained why the evidence matters.\n  [ ] My last sentence links back to my main point.\n  [ ] I used at least one persuasive signal word such as firstly, furthermore, clearly or in conclusion.\n\nOne thing I could improve next time:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sequence" as const,
        title: "Put the Persuasive Paragraph in Order",
        instruction:
          "These sentences belong to a PEEL paragraph but they are scrambled. Number them 1 to 5 in the correct order.",
        parentTip:
          "Ask your child to identify which sentence is the Point, Evidence, Explanation and Link.",
        items: [
          { label: "Research from health organisations confirms that physical activity improves concentration in children." },
          { label: "Clearly, daily exercise should be a non-negotiable part of every child's school day." },
          { label: "This is significant because a focused, healthy student is far better equipped to learn." },
          { label: "All primary school students should participate in at least 30 minutes of physical activity every day." },
          { label: "Furthermore, when students move their bodies, they return to classwork refreshed and engaged." },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Persuasion in Real Life",
        instruction:
          "Find and practise persuasion beyond the worksheet.",
        parentTip:
          "Persuasion is everywhere — recognising it builds critical thinking about what we read and hear.",
        suggestions: [
          "Read a letter to the editor in a newspaper and identify the PEEL structure.",
          "Choose something you want permission for and write a PEEL paragraph to persuade your parent.",
          "Watch a TV advertisement and identify the persuasive techniques — emotion, statistics, celebrity, repetition.",
          "Write a counter-argument to your own PEEL paragraph — then decide which side is more convincing.",
        ],
      },
    ],
  },
  {
    slug: "simile-metaphor-imagery",
    title: "Poetry: Simile, Metaphor & Imagery",
    strand: "Literature",
    description:
      "Identify and write similes, metaphors and imagery to make writing vivid and expressive.",
    learningGuide: {
      concept:
        "A simile compares two things using like or as — for example, fast as lightning. A metaphor says one thing is another — for example, the sun is a golden coin. Imagery is language that appeals to the senses — sight, sound, smell, taste, touch — to create a picture in the reader's mind.",
      activation:
        "Ask your child to close their eyes and imagine a stormy beach. Ask: What can you see? Hear? Feel? Smell? Then help them turn one idea into a simile and one into a metaphor.",
      check:
        "After the worksheet, ask your child to identify two examples of imagery in a poem or picture book and explain which sense each one appeals to.",
    },
    lesson: {
      title: "Painting with Words",
      objective:
        "Identify and write similes, metaphors and sensory imagery in poetry.",
      materials: [
        "This worksheet",
        "A pencil and coloured pencils",
        "A poetry book or anthology (optional)",
      ],
      intro: {
        title: "The Difference Between Like and Is",
        script:
          "Listen to these two sentences: The moon was like a silver coin — that is a simile. It uses like to compare. Now: The moon was a silver coin — that is a metaphor. It says the moon is a coin directly, without like or as. Both make us see the moon in a new way. Which feels stronger to you? Poets choose carefully between simile and metaphor depending on how powerful they want the image to be. Today we are going to practise both.",
        action:
          "Write both example sentences on paper, circle like in the simile and write IS above the verb in the metaphor to show the direct comparison. Leave these on display.",
      },
      mainActivity: {
        title: "The Five Senses Poem",
        script:
          "Imagery appeals to our five senses. Good poets do not just tell us things — they make us feel them. Listen to this example: The soup hissed and spat in the pot, its warm arms reaching out to fog the kitchen windows. That gives us sound — hissed, spat — touch — warm — and sight — fog the windows. Now let us read the short poem on your worksheet together and find examples of imagery in it. Then we will write a five-senses verse of our own.",
        action:
          "Read the model poem on the worksheet with expression. Pause after each line and ask: Which sense is that appealing to?",
      },
      wrapUp: {
        title: "Illustrate the Image",
        script:
          "Choose your favourite line from your poem. Draw the image it creates in the box on the worksheet. Writing and illustration go hand in hand — poets often think visually first and then find words for the image they see.",
        action:
          "Display your child's poem on the fridge or in a special notebook. Celebrate the creative work!",
      },
      parentTip:
        "Read Australian poetry together — look for Banjo Paterson, Judith Wright or contemporary poets like Steven Herrick. Ask your child to find one simile and one metaphor and say why they like it.",
      extension:
        "Write a poem using only metaphors — no similes allowed! Each line must say one thing IS another thing. Challenge: make it about an emotion rather than a physical object.",
      resources: [
        {
          title: "ReadWriteThink — Simile and Metaphor Poetry",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/exploring-poetry-similes-metaphors",
          description:
            "Lesson plan exploring simile and metaphor in poetry writing.",
        },
        {
          title: "ABC Education — Poetry Alive",
          url: "https://www.abc.net.au/education/programs/poetry-alive/",
          description: "Video performances of Australian poetry for children.",
        },
        {
          title: "Khan Academy — Figurative Language",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:reading-literary-text/xe2c54a99ede11c03:figurative-language/e/figurative-language",
          description:
            "Interactive exercises on simile, metaphor and other figurative language.",
        },
      ],
    },
    activities: [
      {
        type: "sorting",
        title: "Sort: Simile or Metaphor?",
        instruction: "Read each phrase and sort it into the correct column.",
        columns: ["Simile (uses like or as)", "Metaphor (says it IS something else)"],
        items: [
          { label: "Her smile was sunshine." },
          { label: "He ran like the wind." },
          { label: "The classroom was a zoo." },
          { label: "As quiet as a mouse." },
          { label: "The stars were diamonds in the sky." },
          { label: "She sang like an angel." },
          { label: "Time is a thief." },
          { label: "The fog rolled in as thick as soup." },
        ],
      },
      {
        type: "open-response",
        title: "Read and Find Imagery",
        instruction:
          "Read the poem below. Find examples of imagery and write which sense each one appeals to.",
        prompts: [
          {
            text: "POEM — After the Storm\nThe garden exhaled a green breath after the rain,\npuddles glittered like scattered mirrors on the path,\nthe air tasted of fresh earth and iron,\nand the first bird dared a trembling note\nthat unspooled in the silence like silver thread.\n\n1. Example:                                              Sense:",
            type: "lines",
            lines: 2,
          },
          { text: "2. Example:                                              Sense:", type: "lines", lines: 2 },
          { text: "3. Example:                                              Sense:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Poem",
        instruction:
          "Write a 6 to 8 line poem about one of the topics below. Include at least one simile, one metaphor and two examples of sensory imagery. Label each in the margin — S for simile, M for metaphor, I for imagery.",
        prompts: [
          {
            text: "Choose a topic:\n  [ ] A thunderstorm   [ ] The ocean   [ ] A busy market   [ ] My own:",
            type: "lines",
            lines: 1,
          },
          { text: "My poem:", type: "box", lines: 12 },
        ],
      },
      {
        type: "home-activity",
        title: "Poet in Residence",
        instruction:
          "Try these activities to keep exploring poetry this week.",
        parentTip:
          "Leave a poetry book in the bathroom or on the kitchen table — casual exposure is one of the best ways to build a love of language.",
        suggestions: [
          "Find a poem by an Australian poet and read it aloud three times — each time listen for something new.",
          "Write a two-line poem called a couplet about something you can see right now, using a metaphor.",
          "Describe your breakfast using only the five senses — no telling us what food it was, only what it looked, smelled, tasted, felt and sounded like!",
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Figure of Speech to Its Example",
        instruction:
          "Draw a line to match each type of figurative language to the correct example.",
        parentTip:
          "Ask your child to explain the comparison in each metaphor or simile — who or what is being compared to what?",
        left: ["Simile", "Metaphor", "Imagery (sight)", "Imagery (sound)", "Imagery (touch)"],
        right: [
          "The bonfire crackled and spat into the night.",
          "Her hair was spun gold in the afternoon light.",
          "The leaves shivered in the icy wind.",
          "As brave as a lion.",
          "The ocean is a restless giant.",
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Simile or Metaphor?",
        instruction:
          "Read each phrase. Circle whether it is a simile (uses like/as) or a metaphor (says it IS something else).",
        parentTip:
          "The key test: does the phrase use 'like' or 'as'? If yes, it's a simile. If not, it's a metaphor.",
        questions: [
          { prompt: "The classroom was a beehive of noise.", options: ["Simile", "Metaphor"] },
          { prompt: "She ran as fast as a cheetah.", options: ["Simile", "Metaphor"] },
          { prompt: "His words were daggers.", options: ["Simile", "Metaphor"] },
          { prompt: "The fog rolled in like a grey blanket.", options: ["Simile", "Metaphor"] },
          { prompt: "Time is a river.", options: ["Simile", "Metaphor"] },
          { prompt: "As quiet as a sleeping cat.", options: ["Simile", "Metaphor"] },
        ],
      },
    ],
  },
  {
    slug: "pronoun-verb-agreement",
    title: "Pronoun–Verb Agreement",
    strand: "Language",
    description:
      "Ensure pronouns and verbs agree in number and person to write grammatically correct sentences.",
    learningGuide: {
      concept:
        "Subject–verb agreement means the verb must match its subject in number and person. When the subject is a pronoun — I, you, he, she, it, we, they — a specific verb form is needed. Common errors include they was, she don't and we was.",
      activation:
        "Say each pair and ask your child which is correct: He run / He runs. They was / They were. Discuss what makes one sound wrong.",
      check:
        "After the worksheet, ask your child to edit a paragraph from their own writing, circling every pronoun and checking its verb agrees.",
    },
    lesson: {
      title: "The Agreement Game",
      objective:
        "Identify and correct pronoun–verb agreement errors in sentences and apply correct agreement in original writing.",
      materials: ["This worksheet", "A pencil", "A recent piece of your child's writing"],
      intro: {
        title: "Do They Agree?",
        script:
          "In English, subjects and verbs must agree — they have to match. If the subject is singular — one person or thing — the verb is singular. If the subject is plural — more than one — the verb is plural. Listen: She runs every morning. One person — singular verb. They run every morning. Many people — plural verb. Easy! But pronouns can get tricky. He don't sounds wrong because don't is for I, you, we, they — not for he, she, it. He doesn't is correct. Let us look at the patterns together.",
        action:
          "Write a pronoun–verb agreement table on paper: I am / have / do, You are / have / do, He/She/It is / has / does, We/They are / have / do. Keep it visible throughout the lesson.",
      },
      mainActivity: {
        title: "Error Hospital",
        script:
          "In the activities today, you are going to be a doctor for sick sentences. Each sentence has an agreement error — your job is to diagnose it and fix it. When you have finished, we will practise writing our own sentences from scratch using the correct forms.",
        action:
          "Work through the first two activities together, then let your child complete the writing activity independently.",
      },
      wrapUp: {
        title: "Proofread Your Writing",
        script:
          "Now take that piece of writing you did last week. Read through it and circle every pronoun. Then check: does the verb next to it agree? If not, fix it. This is what professional editors do every day.",
        action:
          "Sit beside your child as they proofread, prompting with questions rather than pointing out errors directly.",
      },
      parentTip:
        "When your child makes a spoken grammar error, gently model the correct form in your reply rather than correcting directly. For example, if they say We was late, respond naturally: Yes, we were late — let us hurry!",
      extension:
        "Write ten sentences where you deliberately make pronoun–verb agreement errors. Ask a family member to find and fix all ten. Then swap roles.",
      resources: [
        {
          title: "Khan Academy — Subject-Verb Agreement",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:grammar/xe2c54a99ede11c03:subject-verb-agreement/e/subject-verb-agreement",
          description: "Practice exercises on subject-verb agreement rules.",
        },
        {
          title: "ReadWriteThink — Grammar Writing Workshop",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/grammar-writing-workshop",
          description:
            "Grammar workshop resources connecting rules to real writing.",
        },
        {
          title: "ABC Education — Learn English",
          url: "https://www.abc.net.au/education/learn-english/",
          description: "Grammar explanations and activities for primary students.",
        },
      ],
    },
    activities: [
      {
        type: "circle-correct",
        title: "Choose the Correct Verb",
        instruction:
          "Circle the verb form that agrees with the subject pronoun.",
        questions: [
          { prompt: "She ___ to school every day.", options: ["walk", "walks", "walking"] },
          { prompt: "They ___ finished their lunch.", options: ["has", "have", "having"] },
          { prompt: "He ___ not know the answer.", options: ["do", "does", "done"] },
          { prompt: "We ___ going to the beach tomorrow.", options: ["is", "are", "was"] },
          { prompt: "It ___ raining since this morning.", options: ["have been", "has been", "were"] },
        ],
      },
      {
        type: "open-response",
        title: "Fix the Errors",
        instruction:
          "Each sentence has a pronoun–verb agreement error. Rewrite the sentence correctly.",
        prompts: [
          { text: "1. They was at the park all afternoon.\nAnswer:", type: "lines", lines: 2 },
          { text: "2. She don't like broccoli.\nAnswer:", type: "lines", lines: 2 },
          { text: "3. He have a pet lizard named Spike.\nAnswer:", type: "lines", lines: 2 },
          { text: "4. We was late for the movie.\nAnswer:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own",
        instruction:
          "Write a short paragraph (5 to 6 sentences) about a typical day at your home. Use at least five different subject pronouns — I, you, he, she, we, they. Underline each pronoun and circle the matching verb.",
        prompts: [{ text: "My paragraph:", type: "box", lines: 10 }],
      },
      {
        type: "circle-correct" as const,
        title: "Pronoun–Verb Agreement Quick-fire",
        instruction:
          "Circle the correct verb form for each pronoun.",
        parentTip:
          "Read each option aloud — the correct one should sound natural in spoken English.",
        questions: [
          { prompt: "I ___ going to the shops.", options: ["am", "is", "are"] },
          { prompt: "She ___ finished her homework.", options: ["have", "has", "had"] },
          { prompt: "They ___ playing in the garden.", options: ["is", "was", "are"] },
          { prompt: "He ___ not understand the question.", options: ["do", "does", "doing"] },
          { prompt: "We ___ excited about the trip.", options: ["is", "was", "are"] },
          { prompt: "It ___ raining for three hours.", options: ["have been", "has been", "were"] },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar in the Wild",
        instruction:
          "Find and fix pronoun–verb agreement in everyday language.",
        parentTip:
          "Gentle correction through modelling — repeating the correct form naturally — is more effective than direct correction.",
        suggestions: [
          "Listen to conversations during the day — do you ever hear a pronoun–verb agreement error? What would the correct form be?",
          "Write five sentences about your family using a different pronoun each time (I, you, he, she, we, they).",
          "Find a paragraph in a library book and underline every pronoun — then check each verb agrees.",
          "Make up ten deliberately incorrect sentences and challenge a family member to find and fix them all.",
        ],
      },
    ],
  },
  {
    slug: "text-features-nonfiction",
    title: "Text Features in Non-fiction",
    strand: "Literacy",
    description:
      "Identify and use text features — headings, subheadings, diagrams and captions — to navigate and understand non-fiction texts.",
    learningGuide: {
      concept:
        "Non-fiction texts use structural features to help readers find and understand information. Key features include headings (main topic of a section), subheadings (sub-topics), captions (explain images), diagrams (visual information), bold text (key terms), and table of contents (overview of structure).",
      activation:
        "Pick up a non-fiction book, a textbook or even a newspaper. Ask your child to identify five different text features and explain what each one does.",
      check:
        "After the worksheet, ask: If you needed to find information about a specific topic quickly, which text feature would you look at first?",
    },
    lesson: {
      title: "The Non-fiction Navigation Guide",
      objective:
        "Identify and explain the purpose of key non-fiction text features and apply them in a model text.",
      materials: [
        "This worksheet",
        "A non-fiction book or reference text",
        "A pencil and ruler",
        "Coloured pencils or highlighters",
      ],
      intro: {
        title: "A Text Feature Safari",
        script:
          "When you open a non-fiction book, it is like entering a building with many signs to help you navigate. The heading on each page is like a room sign — it tells you what topic is inside. Subheadings are like signs on drawers — they break the room into smaller sections. Diagrams are maps — they show you what words alone cannot explain easily. Captions explain the maps. Today we are going on a text feature safari to find all of these in a real text.",
        action:
          "Open a non-fiction book and flip through it together. Point to each feature as you name it. Count how many different features appear on a single double-page spread.",
      },
      mainActivity: {
        title: "Label and Explain",
        script:
          "On the worksheet there is a model non-fiction passage about Australian animals. Your job is to identify every text feature you can find — heading, subheading, caption, diagram, key term — and explain its purpose in one sentence.",
        action:
          "Let your child work through the labelling activity independently, then discuss the comprehension questions together.",
      },
      wrapUp: {
        title: "Design Your Own Page",
        script:
          "Now you are going to be the author. Choose any topic you know well — football, dinosaurs, cooking, space. Design one page of a non-fiction book. Include at least four different text features. Remember — good non-fiction writers think about how to make information easy to navigate.",
        action:
          "Provide blank A4 paper or use the design grid on the worksheet. Display the finished page.",
      },
      parentTip:
        "Encourage your child to read a non-fiction book by using its text features first — table of contents, headings, diagrams — before reading body text. This builds real research skills.",
      extension:
        "Research a topic using three different sources — a book, a website and an encyclopedia. Compare how each one uses text features differently and present your findings.",
      resources: [
        {
          title: "ReadWriteThink — Non-fiction Text Features",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/non-fiction-text-features",
          description:
            "Activities and graphic organisers for analysing non-fiction text features.",
        },
        {
          title: "ABC Education — Behind the News",
          url: "https://www.abc.net.au/btn/",
          description: "Age-appropriate research and information literacy activities.",
        },
        {
          title: "Khan Academy — Informational Text Features",
          url: "https://www.khanacademy.org/ela/cc-4th-grade-reading-vocab/xe2c54a99ede11c03:reading-informational-text/xe2c54a99ede11c03:text-features/e/text-features",
          description: "Practice identifying and using non-fiction text features.",
        },
      ],
    },
    activities: [
      {
        type: "matching",
        title: "Match the Text Feature to Its Purpose",
        instruction:
          "Draw a line to match each text feature with what it does.",
        left: ["Heading", "Subheading", "Caption", "Diagram", "Bold text", "Table of contents"],
        right: [
          "Explains what a photograph or illustration shows",
          "Lists all the topics in a book with page numbers",
          "Shows the main topic of a whole section",
          "Highlights an important or technical word",
          "Shows information visually using labels and pictures",
          "Breaks a section into smaller topics",
        ],
      },
      {
        type: "open-response",
        title: "Identify Text Features",
        instruction:
          "Read the model non-fiction passage below. Identify the text features present and explain what each one tells the reader.",
        prompts: [
          {
            text: "PASSAGE:\n\nAUSTRALIAN MARSUPIALS\n\nWhat is a Marsupial?\nA marsupial is a mammal that raises its young in a pouch. Australia is home to more than 140 species of marsupials.\n\nThe Kangaroo\nThe red kangaroo is the largest marsupial alive today. It can grow up to 1.8 metres tall.\n\n1. Text feature:                    Purpose:",
            type: "lines",
            lines: 2,
          },
          { text: "2. Text feature:                    Purpose:", type: "lines", lines: 2 },
          { text: "3. Text feature:                    Purpose:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Design a Non-fiction Page",
        instruction:
          "Plan one page of a non-fiction book on a topic you choose. Describe where you would place each text feature.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          {
            text: "HEADING:\n\nSUBHEADING 1:\nBody text summary:\n\nSUBHEADING 2:\nBody text summary:\n\nDIAGRAM idea (describe it):\n\nCAPTION for diagram:\n\nBOLD key terms I would use:",
            type: "lines",
            lines: 14,
          },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort the Text Features",
        instruction:
          "Sort each text feature into the correct column — does it help the reader NAVIGATE the text or UNDERSTAND the content?",
        parentTip:
          "Discuss the difference: navigation features help you find information; explanatory features help you understand it.",
        columns: ["Helps navigation", "Helps understanding"],
        items: [
          { label: "Table of contents" },
          { label: "Diagram with labels" },
          { label: "Heading" },
          { label: "Caption below a photo" },
          { label: "Subheading" },
          { label: "Bold key term" },
          { label: "Index" },
          { label: "Glossary definition" },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Text Feature Spotter",
        instruction:
          "Go on a text feature safari in real non-fiction materials.",
        parentTip:
          "Non-fiction reading is a skill — explicitly noticing text features builds the habit of purposeful reading.",
        suggestions: [
          "Find a non-fiction book and list every different text feature you can spot in one chapter.",
          "Compare two non-fiction texts on the same topic — which uses text features more effectively? Why?",
          "Design a contents page for a non-fiction book about yourself — what headings and subheadings would you use?",
          "Look at an online news article and identify at least four text features — headings, photos, captions, pull quotes.",
        ],
      },
    ],
  },
];

export function getYear4EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year4EnglishWorksheets.find((ws) => ws.slug === slug);
}
