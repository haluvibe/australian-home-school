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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "circle-correct" as const,
        title: "What Makes a Good Opinion Sentence?",
        instruction: "Circle the sentence that is the best opinion sentence (clear point of view, not a fact).",
        questions: [
          {
            prompt: "Choose the best opinion sentence:",
            options: [
              "Dogs are mammals.",
              "Dogs make the best pets of all animals.",
              "Many people have dogs.",
            ],
          },
          {
            prompt: "Choose the best opinion sentence:",
            options: [
              "Australia has beautiful beaches.",
              "School uniforms should be compulsory in all Australian schools.",
              "Some students wear uniforms.",
            ],
          },
        ],
      },
      // 2
      {
        type: "sorting" as const,
        title: "Sort: Opinion Sentence or Fact?",
        instruction: "Sort each sentence into Opinion sentence (suitable as a PEEL point) or Fact.",
        columns: ["Opinion sentence (point)", "Fact"],
        items: [
          { label: "All children should learn to cook." },
          { label: "Australia has 26 million people." },
          { label: "Homework should be banned in primary school." },
          { label: "The Sydney Opera House was built in 1973." },
          { label: "Schools should have more sport." },
          { label: "Kangaroos are marsupials." },
          { label: "Every child deserves access to a library." },
          { label: "The Murray-Darling is the longest river system in Australia." },
        ],
      },
      // 3
      {
        type: "matching" as const,
        title: "Match the PEEL Part to Its Purpose",
        instruction: "Draw a line to match each PEEL part with what it does.",
        parentTip: "Write PEEL on a piece of paper for reference before this activity.",
        left: ["Point", "Evidence", "Explanation", "Link"],
        right: [
          "Explains why the evidence matters",
          "States the main opinion clearly",
          "Connects back to the original point",
          "Provides a fact, statistic or example to support the point",
        ],
      },
      // 4
      {
        type: "sequence" as const,
        title: "Put the PEEL Paragraph in Order (Set A)",
        instruction: "These sentences belong to a PEEL paragraph but are scrambled. Number them 1 to 4 in the correct order.",
        parentTip: "Ask your child to identify which sentence is P, E, E or L before numbering.",
        items: [
          { label: "Research from health organisations confirms that physical activity improves concentration in children." },
          { label: "Clearly, daily exercise should be a non-negotiable part of every child's school day." },
          { label: "This is significant because a focused, healthy student is far better equipped to learn." },
          { label: "All primary school students should participate in at least 30 minutes of physical activity every day." },
        ],
      },
      // 5
      {
        type: "open-response" as const,
        title: "PEEL Planner (Set A)",
        instruction: "Choose a topic and complete the PEEL planner before writing your paragraph.",
        prompts: [
          { text: "Choose a topic:\n  [ ] All children should have a pet.\n  [ ] Homework should be banned.\n  [ ] Schools should teach cooking.\n  [ ] My own topic:", type: "lines" as const, lines: 1 },
          { text: "P — My Point (opinion sentence):", type: "lines" as const, lines: 2 },
          { text: "E — Evidence or example:", type: "lines" as const, lines: 2 },
          { text: "E — Explanation (why does this matter?):", type: "lines" as const, lines: 2 },
          { text: "L — Link back to my point:", type: "lines" as const, lines: 2 },
        ],
      },
      // 6
      {
        type: "open-response" as const,
        title: "Write Your PEEL Paragraph (Set A)",
        instruction: "Use your PEEL planner to write your full opinion paragraph. Aim for 4–6 sentences.",
        prompts: [{ text: "Write your paragraph:", type: "box" as const, lines: 10 }],
      },
      // 7
      {
        type: "true-false" as const,
        title: "True or False: Persuasive Writing Rules",
        instruction: "Circle True or False for each statement.",
        statements: [
          { text: "A PEEL paragraph always starts with a clear opinion sentence.", answer: true },
          { text: "Evidence in a PEEL paragraph must always be a statistic.", answer: false },
          { text: "The Link sentence restates the main opinion.", answer: true },
          { text: "A persuasive paragraph needs at least one piece of evidence.", answer: true },
          { text: "The Explanation sentence is not important and can be left out.", answer: false },
        ],
      },
      // 8
      {
        type: "fill-in-blank" as const,
        title: "Add the Persuasive Signal Words",
        instruction: "Fill in the best signal word or phrase. Word bank: Firstly, Furthermore, In conclusion, Clearly, This is significant because.",
        parentTip: "Signal words act as signposts — they help readers follow the argument.",
        sentences: [
          { text: "___, all children should have access to school libraries.", blanks: ["Clearly"] },
          { text: "___, reading builds vocabulary and improves academic results.", blanks: ["Firstly"] },
          { text: "___, students who read widely are better prepared for secondary school.", blanks: ["Furthermore"] },
          { text: "___ it gives every student an equal opportunity to succeed.", blanks: ["This is significant because"] },
          { text: "___, school libraries are essential to quality education.", blanks: ["In conclusion"] },
        ],
      },
      // 9
      {
        type: "circle-correct" as const,
        title: "Which Signal Word Fits?",
        instruction: "Circle the best signal word or phrase for each blank.",
        questions: [
          { prompt: "___, animals should be protected from factory farming.", options: ["Clearly", "However", "Although"] },
          { prompt: "___, studies show factory farming causes significant animal suffering.", options: ["Firstly", "In conclusion", "Despite"] },
          { prompt: "___, the welfare of animals matters to the health of the whole food system.", options: ["Furthermore", "Unless", "Although"] },
        ],
      },
      // 10
      {
        type: "sorting" as const,
        title: "Sort Signal Words by Function",
        instruction: "Sort these persuasive signal words by what they do.",
        columns: ["Introduce a point", "Add more evidence", "Show contrast", "Conclude"],
        items: [
          { label: "Firstly" }, { label: "Furthermore" }, { label: "However" }, { label: "In conclusion" },
          { label: "Clearly" }, { label: "Additionally" }, { label: "Although" }, { label: "Therefore" },
          { label: "To begin with" }, { label: "Moreover" }, { label: "Despite this" }, { label: "Ultimately" },
        ],
      },
      // 11
      {
        type: "open-response" as const,
        title: "PEEL Self-Check",
        instruction: "Use this checklist to evaluate your PEEL paragraph from Activity 6.",
        prompts: [
          {
            text: "[ ] My first sentence clearly states my opinion.\n[ ] I included at least one piece of evidence or example.\n[ ] I explained why the evidence matters.\n[ ] My last sentence links back to my main point.\n[ ] I used at least one persuasive signal word.\n\nOne thing I will improve in my next paragraph:",
            type: "lines" as const, lines: 3,
          },
        ],
      },
      // 12
      {
        type: "matching" as const,
        title: "Match the Evidence Type to Its Example",
        instruction: "Draw a line to match each type of evidence with its example.",
        left: ["Statistic", "Expert opinion", "Personal example", "Anecdote", "Research finding"],
        right: [
          "Dr Chen, a child psychologist, argues that outdoor play is essential.",
          "Studies show students who sleep eight hours score 20% higher on tests.",
          "When I started walking to school, I felt more energetic in class.",
          "A friend told me that cooking classes changed how she thought about food.",
          "70% of Australian children do not meet recommended exercise guidelines.",
        ],
      },
      // 13
      {
        type: "fill-in-blank" as const,
        title: "Identify the PEEL Parts",
        instruction: "Label each sentence P (Point), E (Evidence), E (Explanation) or L (Link).",
        sentences: [
          { text: "All primary school students should spend at least 30 minutes reading for pleasure each day. [P/E/E/L: ___]", blanks: ["P"] },
          { text: "Research by the Australian Literacy Foundation shows that daily reading improves vocabulary by 40%. [P/E/E/L: ___]", blanks: ["E"] },
          { text: "This matters because a strong vocabulary is the foundation of all learning. [P/E/E/L: ___]", blanks: ["E"] },
          { text: "Therefore, daily reading is not optional — it is essential. [P/E/E/L: ___]", blanks: ["L"] },
        ],
      },
      // 14
      {
        type: "open-response" as const,
        title: "Write an Evidence Sentence",
        instruction: "For each opinion, write one evidence sentence that supports it.",
        prompts: [
          { text: "Opinion: Children should eat less sugar.\nEvidence:", type: "lines" as const, lines: 2 },
          { text: "Opinion: Schools need more art lessons.\nEvidence:", type: "lines" as const, lines: 2 },
          { text: "Opinion: Australia should protect its native forests.\nEvidence:", type: "lines" as const, lines: 2 },
        ],
      },
      // 15 — TIP
      {
        type: "tip" as const,
        title: "Tip: What Makes Evidence Strong?",
        content: "Not all evidence is equally convincing. The strongest evidence includes: specific statistics from reliable sources (e.g. 'According to the WHO, 70% of children...'), expert opinions that give the expert's credentials, and relevant research findings. Personal anecdotes are the weakest type of evidence because they only represent one person's experience. When you write persuasively, always aim for the strongest evidence you can find.",
      },
      // 16
      {
        type: "sorting" as const,
        title: "Sort Evidence From Strongest to Weakest",
        instruction: "Sort these types of evidence from strongest (most convincing) to weakest (least convincing).",
        columns: ["Strongest", "Moderate", "Weakest"],
        items: [
          { label: "A peer-reviewed study of 10,000 children" },
          { label: "A survey of 50 parents" },
          { label: "My personal experience" },
          { label: "Government health statistics" },
          { label: "An expert quote from a named specialist" },
          { label: "A friend's opinion" },
        ],
      },
      // 17
      {
        type: "fill-in-blank" as const,
        title: "Complete the PEEL Paragraph",
        instruction: "Fill in the blank part of each PEEL step.",
        sentences: [
          { text: "P: Coding should be taught in all primary schools ___ [from an early age].", blanks: ["from an early age"] },
          { text: "E: Research shows that students who learn coding develop ___ [problem-solving] skills.", blanks: ["problem-solving"] },
          { text: "E: This is important because ___ [technology] skills are essential in today's world.", blanks: ["technology"] },
          { text: "L: ___ [Clearly], coding is no longer optional — it is a vital 21st-century skill.", blanks: ["Clearly"] },
        ],
      },
      // 18
      {
        type: "true-false" as const,
        title: "True or False: Types of Evidence",
        instruction: "Circle True or False.",
        statements: [
          { text: "A statistic is a strong type of evidence because it is measurable.", answer: true },
          { text: "Personal anecdotes are the strongest type of evidence.", answer: false },
          { text: "Expert opinions should include the expert's credentials.", answer: true },
          { text: "Any evidence is equally convincing regardless of its source.", answer: false },
          { text: "Research findings from reliable organisations are strong evidence.", answer: true },
        ],
      },
      // 19
      {
        type: "open-response" as const,
        title: "Write Your Own PEEL Paragraph (Set B)",
        instruction: "Write a PEEL paragraph on the topic: 'Children should spend more time outdoors.' Aim for 5–7 sentences. Use at least one piece of evidence and one signal word.",
        prompts: [
          { text: "Your paragraph:", type: "box" as const, lines: 10 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Persuade Your Family",
        content: "Choose something you genuinely want to convince a family member about — it could be a new pet, a family holiday, a change to the household rules, or anything else. Write a full PEEL paragraph making your case. Read it aloud to your family. Did it work? Ask them to give you feedback on your evidence and explanation. Then revise your paragraph based on their feedback.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response" as const,
        title: "Write a Strong Opening Sentence",
        instruction: "Write three different opening sentences for the topic 'Schools should have a four-day week'. Try a question, a bold statement and a statistic.",
        prompts: [
          { text: "Question opener:", type: "lines" as const, lines: 1 },
          { text: "Bold statement opener:", type: "lines" as const, lines: 1 },
          { text: "Statistic opener:", type: "lines" as const, lines: 1 },
          { text: "Which opener is most effective and why?", type: "lines" as const, lines: 2 },
        ],
      },
      // 22
      {
        type: "fill-in-blank" as const,
        title: "Explanation Sentences",
        instruction: "An Explanation sentence says WHY the evidence matters. Fill in the best explanation.",
        sentences: [
          { text: "Evidence: Studies show daily exercise reduces anxiety in children.\nExplanation: This matters because ___ [mental health affects every part of a child's life].", blanks: ["mental health affects every part of a child's life"] },
          { text: "Evidence: Research shows students who eat breakfast score 25% higher on memory tests.\nExplanation: This is significant because ___ [a nourished brain learns more effectively].", blanks: ["a nourished brain learns more effectively"] },
        ],
      },
      // 23
      {
        type: "circle-correct" as const,
        title: "Which Explanation Sentence Is Best?",
        instruction: "Circle the best explanation sentence for each piece of evidence.",
        questions: [
          {
            prompt: "Evidence: Students who sleep 8 hours score higher on tests.",
            options: [
              "This is because sleep is good.",
              "This demonstrates that adequate sleep is foundational to academic performance.",
              "Sleep matters a bit.",
            ],
          },
          {
            prompt: "Evidence: Schools with gardens show 30% improvement in student wellbeing.",
            options: [
              "Gardens are green and pretty.",
              "This is significant because student wellbeing directly influences engagement and learning.",
              "Being outside is good.",
            ],
          },
        ],
      },
      // 24
      {
        type: "open-response" as const,
        title: "PEEL Paragraph: Full Draft",
        instruction: "Write a complete PEEL paragraph on a topic: libraries / school canteen / recess / animals in zoos / space exploration. Label each sentence P, E, E or L.",
        prompts: [
          { text: "My topic:", type: "lines" as const, lines: 1 },
          { text: "My PEEL paragraph:", type: "box" as const, lines: 10 },
        ],
      },
      // 25
      {
        type: "sorting" as const,
        title: "Sort: Part of a PEEL Paragraph?",
        instruction: "Sort each sentence into the PEEL part it belongs to.",
        columns: ["Point", "Evidence", "Explanation", "Link"],
        items: [
          { label: "In conclusion, every Australian school should have a library." },
          { label: "Studies show that access to books improves reading by 35%." },
          { label: "This is important because reading ability affects every subject." },
          { label: "School libraries are essential to quality education." },
          { label: "Therefore, we must invest in school libraries now." },
          { label: "Research confirms that library users achieve higher grades." },
          { label: "This matters because equal access to books creates equal opportunities." },
          { label: "Clearly, the evidence leaves no room for doubt." },
        ],
      },
      // 26
      {
        type: "open-response" as const,
        title: "Improve a Weak PEEL Paragraph",
        instruction: "This PEEL paragraph is weak. Improve each part.",
        prompts: [
          { text: "WEAK VERSION:\nP: I think sport is good. E: Sport is fun. E: It helps you. L: So sport is good.\n\nImproved P:", type: "lines" as const, lines: 2 },
          { text: "Improved E (with evidence/statistic):", type: "lines" as const, lines: 2 },
          { text: "Improved E (with explanation):", type: "lines" as const, lines: 2 },
          { text: "Improved L:", type: "lines" as const, lines: 2 },
        ],
      },
      // 27
      {
        type: "multiple-choice" as const,
        title: "Identify the Persuasive Technique",
        instruction: "Choose the persuasive technique used in each sentence.",
        questions: [
          { prompt: "'Research by Harvard University shows...'", options: ["Repetition", "Expert authority", "Emotional appeal", "Rhetorical question"], answer: "Expert authority" },
          { prompt: "'Don't our children deserve better than this?'", options: ["Statistic", "Rhetorical question", "Repetition", "Counter-argument"], answer: "Rhetorical question" },
          { prompt: "'70% of parents agree that...'", options: ["Statistic", "Personal anecdote", "Emotional appeal", "Contrast"], answer: "Statistic" },
          { prompt: "'Imagine a world where no child goes hungry...'", options: ["Statistic", "Counter-argument", "Emotional appeal", "Expert opinion"], answer: "Emotional appeal" },
        ],
      },
      // 28
      {
        type: "sorting" as const,
        title: "Sort: Persuasive Techniques",
        instruction: "Sort each example into the persuasive technique it uses.",
        columns: ["Statistic", "Rhetorical question", "Emotional appeal", "Expert opinion"],
        items: [
          { label: "Can we really afford to ignore this crisis?" },
          { label: "Dr Patel, a leading nutritionist, argues..." },
          { label: "9 in 10 dentists recommend..." },
          { label: "Think of the children who go to bed hungry each night." },
          { label: "Studies show a 40% increase in..." },
          { label: "Professor Lee of Oxford University states..." },
          { label: "Wouldn't you want the best for your family?" },
          { label: "Picture the faces of those affected..." },
        ],
      },
      // 29
      {
        type: "open-response" as const,
        title: "Use a Persuasive Technique",
        instruction: "Practise each persuasive technique by writing one sentence on the topic 'Reducing food waste'.",
        prompts: [
          { text: "Rhetorical question:", type: "lines" as const, lines: 1 },
          { text: "Emotional appeal:", type: "lines" as const, lines: 1 },
          { text: "Statistic (real or plausible):", type: "lines" as const, lines: 1 },
          { text: "Expert opinion:", type: "lines" as const, lines: 1 },
        ],
      },
      // 30 — TIP
      {
        type: "tip" as const,
        title: "Tip: Rhetorical Questions",
        content: "A rhetorical question is a question that you do not expect the reader to answer — it is designed to make them think or to lead them to agree with you. For example: 'Can we really afford to ignore climate change?' The expected answer is 'No' — and the reader feels the emotion of that. Rhetorical questions are most powerful at the beginning or end of a persuasive paragraph. Use them sparingly — too many and they lose impact.",
      },
      // 31
      {
        type: "fill-in-blank" as const,
        title: "Write the Missing PEEL Part",
        instruction: "Each paragraph is missing one PEEL part. Write the missing sentence.",
        sentences: [
          { text: "P: All students should learn a musical instrument at school.\nE: Studies show music education improves mathematical reasoning by up to 30%.\nE: ___ [Missing — write your own explanation].\nL: Clearly, music is not a luxury — it is an academic tool.", blanks: ["This matters because stronger mathematical skills benefit students in science, technology and everyday life."] },
        ],
      },
      // 32
      {
        type: "open-response" as const,
        title: "PEEL Paragraph: Environmental Topic",
        instruction: "Write a PEEL paragraph arguing that plastic bags should be banned in Australia. Include a statistic or research finding as your evidence.",
        prompts: [
          { text: "PEEL Planner:\nP:", type: "lines" as const, lines: 1 },
          { text: "E:", type: "lines" as const, lines: 1 },
          { text: "E:", type: "lines" as const, lines: 1 },
          { text: "L:", type: "lines" as const, lines: 1 },
          { text: "Full paragraph:", type: "box" as const, lines: 8 },
        ],
      },
      // 33
      {
        type: "sorting" as const,
        title: "Sort: Strong or Weak Persuasive Sentences?",
        instruction: "Sort each sentence into strong or weak persuasive writing.",
        columns: ["Strong persuasive sentence", "Weak persuasive sentence"],
        items: [
          { label: "I think sport is good." },
          { label: "Research by the AIS confirms that daily exercise reduces anxiety in children by 35%." },
          { label: "Lots of people agree that libraries are nice." },
          { label: "According to UNESCO, children with access to school libraries score 20% higher in literacy." },
          { label: "It's obvious that junk food is bad." },
          { label: "The World Health Organisation links excessive sugar consumption to childhood obesity rates of 25%." },
        ],
      },
      // 34
      {
        type: "multiple-choice" as const,
        title: "Which Sentence Is the Point?",
        instruction: "In each group, choose the sentence that works best as the Point (P) of a PEEL paragraph.",
        questions: [
          {
            prompt: "Topic: School uniforms",
            options: [
              "Many schools have uniforms.",
              "School uniforms should be compulsory in all Australian primary schools.",
              "Some students like uniforms and some don't.",
            ],
            answer: "School uniforms should be compulsory in all Australian primary schools.",
          },
          {
            prompt: "Topic: Screen time",
            options: [
              "Children use devices a lot.",
              "Daily screen time should be limited to two hours for primary school children.",
              "There are many apps available for children.",
            ],
            answer: "Daily screen time should be limited to two hours for primary school children.",
          },
        ],
      },
      // 35
      {
        type: "open-response" as const,
        title: "Persuasive Paragraph: School Life Topic",
        instruction: "Choose your own school-related topic and write a full PEEL paragraph with all four parts. Use at least two persuasive signal words.",
        prompts: [
          { text: "My topic:", type: "lines" as const, lines: 1 },
          { text: "My paragraph:", type: "box" as const, lines: 10 },
          { text: "Signal words I used:", type: "lines" as const, lines: 1 },
        ],
      },
      // 36
      {
        type: "fill-in-blank" as const,
        title: "Persuasive Language: Degrees of Certainty",
        instruction: "Fill in the signal phrase that matches the level of certainty shown.",
        sentences: [
          { text: "___ [It is clear/Research suggests] that exercise improves mental health. (CERTAIN)", blanks: ["It is clear"] },
          { text: "___ [It appears/Without doubt] that reducing screen time benefits children. (PROBABLE)", blanks: ["It appears"] },
          { text: "___ [It could be argued/Obviously] that homework helps students. (POSSIBLE)", blanks: ["It could be argued"] },
          { text: "___ [Undeniably/Some evidence suggests], healthy food improves concentration. (STRONG)", blanks: ["Undeniably"] },
        ],
      },
      // 37
      {
        type: "circle-correct" as const,
        title: "Choose the Most Persuasive Sentence",
        instruction: "Circle the most persuasive version of each sentence.",
        questions: [
          {
            prompt: "Choose the most persuasive version:",
            options: [
              "A lot of people think animals should be protected.",
              "Urgently and without exception, we must strengthen Australia's animal protection laws.",
              "Animals need protection sometimes.",
            ],
          },
          {
            prompt: "Choose the most persuasive version:",
            options: [
              "The government should do something about this issue.",
              "Can we honestly stand by while our children's mental health declines? The time for action is now.",
              "Mental health is important for children.",
            ],
          },
        ],
      },
      // 38
      {
        type: "open-response" as const,
        title: "Counter-Argument and Refutation",
        instruction: "Write a counter-argument and refutation for the topic: 'All schools should teach cooking.'",
        prompts: [
          { text: "Counter-argument (some people might say...):", type: "lines" as const, lines: 2 },
          { text: "Refutation (however, the evidence shows...):", type: "lines" as const, lines: 2 },
        ],
      },
      // 39
      {
        type: "sorting" as const,
        title: "Sort: Counter-Argument or Refutation?",
        instruction: "Sort each sentence into counter-argument (opposing view) or refutation (response to it).",
        columns: ["Counter-argument", "Refutation"],
        items: [
          { label: "Some argue that zoos protect animals." },
          { label: "However, studies show wild animals in captivity suffer significantly higher stress levels." },
          { label: "Critics claim homework builds discipline." },
          { label: "Yet research consistently shows excessive homework leads to anxiety and sleep deprivation." },
          { label: "Some parents believe screen time is harmless in moderation." },
          { label: "Nevertheless, the WHO recommends limits for good reason." },
        ],
      },
      // 40 — SPARK
      {
        type: "spark" as const,
        title: "Spark: Debate Yourself",
        content: "Choose a topic you have a strong opinion about. Write a full PEEL paragraph arguing your position. Then write another full PEEL paragraph arguing the OPPOSITE position. Use different evidence for each side. Read both aloud to a family member. Which paragraph is more convincing — even if it is not your real opinion? What does this tell you about the power of evidence and argument structure?",
      },
      // ── CONSOLIDATING 41–80 ────────────────────────────────────────────────
      // 41
      {
        type: "open-response" as const,
        title: "Two-Paragraph Persuasive Writing",
        instruction: "Write two PEEL paragraphs on 'All Australian schools should have vegetable gardens'. Paragraph 1: health and wellbeing argument. Paragraph 2: educational argument.",
        prompts: [
          { text: "Paragraph 1 (health/wellbeing):", type: "box" as const, lines: 8 },
          { text: "Paragraph 2 (educational):", type: "box" as const, lines: 8 },
        ],
      },
      // 42
      {
        type: "fill-in-blank" as const,
        title: "Formal Persuasive Language",
        instruction: "Replace the informal language in brackets with more formal persuasive language.",
        sentences: [
          { text: "___ [I think/It is evident that] all students deserve access to quality education.", blanks: ["It is evident that"] },
          { text: "___ [Some people say/Critics argue] that screen time is harmless.", blanks: ["Critics argue"] },
          { text: "The ___ [big/compelling] evidence suggests immediate action is required.", blanks: ["compelling"] },
          { text: "___ [For this reason/So], the government must act without delay.", blanks: ["For this reason"] },
        ],
      },
      // 43
      {
        type: "open-response" as const,
        title: "Write a Persuasive Introduction",
        instruction: "Write a two-sentence persuasive introduction for 'The importance of reading'. Sentence 1: a hook. Sentence 2: your thesis/main opinion.",
        prompts: [
          { text: "Hook sentence:", type: "lines" as const, lines: 2 },
          { text: "Thesis (main opinion):", type: "lines" as const, lines: 2 },
        ],
      },
      // 44
      {
        type: "true-false" as const,
        title: "True or False: Persuasive Techniques",
        instruction: "Circle True or False.",
        statements: [
          { text: "A rhetorical question is one the writer expects the reader to answer aloud.", answer: false },
          { text: "Statistics are a strong form of evidence in persuasive writing.", answer: true },
          { text: "A counter-argument weakens a persuasive essay.", answer: false },
          { text: "Emotional appeals can make persuasive writing more powerful.", answer: true },
          { text: "The PEEL structure only works for one type of argument.", answer: false },
        ],
      },
      // 45 — TIP
      {
        type: "tip" as const,
        title: "Tip: Varying Your Sentence Openings in Persuasive Writing",
        content: "Persuasive writing that starts every sentence with 'I think' or 'I believe' becomes repetitive quickly. Vary your openers: 'Clearly, ...' / 'Research confirms ...' / 'Without doubt, ...' / 'Consider this: ...' / 'Imagine a world where ...' / 'The evidence is overwhelming: ...' These varied openings make your writing sound more authoritative and sophisticated, which in turn makes it more persuasive.",
      },
      // 46
      {
        type: "open-response" as const,
        title: "Varied Sentence Openers in Persuasion",
        instruction: "Rewrite each sentence using a more varied and persuasive opener.",
        prompts: [
          { text: "Original: I think we should have more trees in cities.\nRewritten:", type: "lines" as const, lines: 1 },
          { text: "Original: I believe homework should be reduced.\nRewritten:", type: "lines" as const, lines: 1 },
          { text: "Original: I think coding is important.\nRewritten:", type: "lines" as const, lines: 1 },
        ],
      },
      // 47
      {
        type: "sorting" as const,
        title: "Sort: Persuasive Openers by Effect",
        instruction: "Sort these sentence openers by the effect they create.",
        columns: ["Logical / evidence-based", "Emotional / empathetic", "Authoritative / confident"],
        items: [
          { label: "Research confirms that..." },
          { label: "Imagine the relief of..." },
          { label: "Without question, ..." },
          { label: "Studies consistently show..." },
          { label: "Consider the impact on the thousands of families who..." },
          { label: "Clearly, the time for action is now." },
          { label: "Data from the WHO indicates..." },
          { label: "Every parent knows the feeling of..." },
          { label: "The evidence is unambiguous:" },
        ],
      },
      // 48
      {
        type: "open-response" as const,
        title: "Edit for Persuasive Power",
        instruction: "Rewrite this paragraph to make it more persuasive by adding signal words, a rhetorical question and stronger evidence.",
        prompts: [
          {
            text: "ORIGINAL: Children do not exercise enough. Exercise is good for you. Schools should have more sport.\n\nYour persuasive version:",
            type: "box" as const, lines: 8,
          },
        ],
      },
      // 49
      {
        type: "multiple-choice" as const,
        title: "Which Version Is More Persuasive?",
        instruction: "Choose the more persuasive version of each sentence.",
        questions: [
          {
            prompt: "Choose the more persuasive version:",
            options: [
              "Libraries are useful.",
              "Without school libraries, we are denying children the very foundation of literacy — and that is a cost no society can afford.",
            ],
            answer: "Without school libraries, we are denying children the very foundation of literacy — and that is a cost no society can afford.",
          },
          {
            prompt: "Choose the more persuasive version:",
            options: [
              "The government should look at this.",
              "The evidence demands immediate government action — delay is not an option.",
            ],
            answer: "The evidence demands immediate government action — delay is not an option.",
          },
        ],
      },
      // 50
      {
        type: "home-activity" as const,
        title: "Persuasion in Real Life",
        instruction: "Find and practise persuasion beyond the worksheet.",
        parentTip: "Persuasion is everywhere — recognising it builds critical thinking about what we read and hear.",
        suggestions: [
          "Read a letter to the editor in a newspaper and identify the PEEL structure.",
          "Choose something you want permission for and write a PEEL paragraph to persuade a family member.",
          "Watch a TV advertisement and identify the persuasive techniques — emotion, statistics, celebrity, repetition.",
          "Write a counter-argument paragraph — the same topic but arguing the opposite side. Then decide which side is more convincing.",
        ],
      },
      // 51
      {
        type: "open-response" as const,
        title: "Two-Sided Argument Practice",
        instruction: "Complete this planning table for the topic 'Children should not be allowed to have smartphones'.",
        prompts: [
          { text: "Three arguments FOR this rule:", type: "lines" as const, lines: 3 },
          { text: "Three arguments AGAINST this rule:", type: "lines" as const, lines: 3 },
          { text: "Which side do you find more convincing and why?", type: "lines" as const, lines: 2 },
        ],
      },
      // 52
      {
        type: "fill-in-blank" as const,
        title: "Linking Language in a Multi-Paragraph Argument",
        instruction: "Fill in the best linking phrase to connect these paragraphs.",
        sentences: [
          { text: "___ [Firstly/In conclusion], exercise improves physical health.", blanks: ["Firstly"] },
          { text: "___ [Furthermore/Although], regular activity also boosts mental wellbeing.", blanks: ["Furthermore"] },
          { text: "___ [In addition/For example], studies show that active children concentrate better.", blanks: ["In addition"] },
          { text: "___ [In conclusion/Firstly], daily exercise is essential for every child.", blanks: ["In conclusion"] },
        ],
      },
      // 53
      {
        type: "open-response" as const,
        title: "Write With a Rhetorical Question Hook",
        instruction: "Write a full PEEL paragraph beginning with a powerful rhetorical question. Topic: 'The importance of sleep for children'.",
        prompts: [
          { text: "Rhetorical question hook:", type: "lines" as const, lines: 1 },
          { text: "Full paragraph (P, E, E, L):", type: "box" as const, lines: 10 },
        ],
      },
      // 54
      {
        type: "sorting" as const,
        title: "Sort: Persuasive Paragraph Features",
        instruction: "Sort each feature into essential (must have) or optional (adds impact but not always needed).",
        columns: ["Essential feature", "Optional feature (adds impact)"],
        items: [
          { label: "A clear opinion sentence (Point)" },
          { label: "A rhetorical question" },
          { label: "At least one piece of evidence" },
          { label: "Emotional appeal language" },
          { label: "An explanation of why evidence matters" },
          { label: "A counter-argument" },
          { label: "A link sentence restating the opinion" },
          { label: "Rule of three" },
        ],
      },
      // 55
      {
        type: "open-response" as const,
        title: "Use the Rule of Three",
        instruction: "The 'Rule of Three' lists three things in a row for power and rhythm. Write three rule-of-three sentences on different topics.",
        parentTip: "Famous examples: 'Life, liberty and the pursuit of happiness.' / 'Faster, higher, stronger.'",
        prompts: [
          { text: "Topic: benefits of reading: 'Reading develops _____, builds _____ and creates _____.'", type: "lines" as const, lines: 1 },
          { text: "Topic: why exercise matters: 'Exercise _____, _____ and _____.'", type: "lines" as const, lines: 1 },
          { text: "Topic: your choice — write a rule of three:", type: "lines" as const, lines: 2 },
        ],
      },
      // 56
      {
        type: "circle-correct" as const,
        title: "Which Is a Better Rule of Three?",
        instruction: "Circle the more powerful rule-of-three phrase.",
        questions: [
          {
            prompt: "Which rule of three sounds more powerful?",
            options: [
              "Reading is good, interesting and nice.",
              "Reading expands minds, deepens empathy and opens worlds.",
            ],
          },
          {
            prompt: "Which rule of three sounds more powerful?",
            options: [
              "Exercise is fast, tiring and sweaty.",
              "Exercise strengthens bodies, sharpens minds and lifts spirits.",
            ],
          },
        ],
      },
      // 57
      {
        type: "open-response" as const,
        title: "Persuasive Writing: Animal Topic",
        instruction: "Write a full PEEL paragraph arguing that it is wrong to keep wild animals in zoos. Use the rule of three in your evidence or explanation sentence.",
        prompts: [
          { text: "Your paragraph:", type: "box" as const, lines: 10 },
        ],
      },
      // 58
      {
        type: "fill-in-blank" as const,
        title: "Concession Language",
        instruction: "Fill in the best concession phrase.",
        sentences: [
          { text: "___ [While it is true that/In conclusion] some zoos do protect endangered species, the suffering of captive animals cannot be justified.", blanks: ["While it is true that"] },
          { text: "___ [Although/Therefore] homework takes time, the evidence shows it builds independent learning skills.", blanks: ["Although"] },
          { text: "___ [Critics argue that/In addition] screen time is harmless in moderation. ___ [However/Furthermore], the WHO recommends limits for good reason.", blanks: ["Critics argue that", "However"] },
        ],
      },
      // 59
      {
        type: "sorting" as const,
        title: "Sort: Concession Language",
        instruction: "Sort these phrases into concession phrases (admitting the other side) or refutation phrases (arguing back).",
        columns: ["Concession", "Refutation"],
        items: [
          { label: "While it is true that..." }, { label: "However, the evidence shows..." },
          { label: "Although some argue..." }, { label: "Nevertheless, research confirms..." },
          { label: "Critics may point out that..." }, { label: "Yet the data clearly demonstrates..." },
          { label: "Despite this..." }, { label: "The counterargument overlooks the fact that..." },
        ],
      },
      // 60 — TIP + SPARK
      {
        type: "tip" as const,
        title: "Tip: Emotional Language in Persuasion",
        content: "Emotional language helps readers feel connected to an argument. But there is a difference between appropriate emotional language and manipulation. Appropriate: 'Children deserve a safe, nurturing environment to grow.' Manipulative: 'Only a heartless person would disagree with this policy.' The first appeals to shared values; the second attacks readers who might disagree. The most effective persuasive writing combines emotional appeal with solid evidence.",
      },
      // 61 (SPARK at ~60)
      {
        type: "spark" as const,
        title: "Spark: The Persuasion Campaign",
        content: "Design a one-page persuasion campaign for a cause you care about. It should include: a headline, a PEEL paragraph, a statistic presented visually, a rhetorical question, and a call to action (what you want the reader to do). Design it to look like a real poster or pamphlet. Share it with your family and ask: 'Did this convince you? What was most effective?'",
      },
      // 62
      {
        type: "open-response" as const,
        title: "Appropriate vs Manipulative Emotional Language",
        instruction: "Rewrite each manipulative sentence to make it an appropriate emotional appeal.",
        prompts: [
          { text: "Manipulative: 'Only someone who doesn't care about children would oppose this policy.'\nAppropriate version:", type: "lines" as const, lines: 2 },
          { text: "Manipulative: 'You would have to be heartless not to donate.'\nAppropriate version:", type: "lines" as const, lines: 2 },
        ],
      },
      // 63
      {
        type: "fill-in-blank" as const,
        title: "Persuasive Techniques: Labelling",
        instruction: "Label each sentence with its persuasive technique: S (Statistic), RQ (Rhetorical question), EA (Emotional appeal), EO (Expert opinion), RT (Rule of three), CA (Counter-argument), R (Refutation).",
        sentences: [
          { text: "Research by UNICEF shows 1 in 4 children globally lack access to clean water. [Technique: ___]", blanks: ["S"] },
          { text: "Can we truly call ourselves a fair society when so many are left behind? [Technique: ___]", blanks: ["RQ"] },
          { text: "Professor Watts of Melbourne University argues that coding should be taught from Year 1. [Technique: ___]", blanks: ["EO"] },
          { text: "Some say the cost is too high. Yet the cost of inaction is far greater. [Technique: ___]", blanks: ["CA/R"] },
          { text: "Reading teaches compassion, builds knowledge and shapes futures. [Technique: ___]", blanks: ["RT"] },
        ],
      },
      // 64
      {
        type: "open-response" as const,
        title: "Write Using Multiple Persuasive Techniques",
        instruction: "Write a PEEL paragraph about a topic of your choice. Use at least three different persuasive techniques and label each one in the margin.",
        prompts: [
          { text: "My topic:", type: "lines" as const, lines: 1 },
          { text: "My paragraph:", type: "box" as const, lines: 10 },
          { text: "Techniques I used:", type: "lines" as const, lines: 1 },
        ],
      },
      // 65
      {
        type: "sorting" as const,
        title: "Sort: Which Persuasive Technique Is Being Used?",
        instruction: "Match each sentence to its persuasive technique.",
        columns: ["Rhetorical question", "Emotional appeal", "Statistic", "Rule of three"],
        items: [
          { label: "How can we stand by while our planet is destroyed?" },
          { label: "Every child deserves to feel safe, valued and heard." },
          { label: "87% of teachers say class sizes directly impact learning quality." },
          { label: "Education empowers individuals, strengthens communities and builds nations." },
          { label: "Is this really the future we want for our children?" },
          { label: "Families are struggling — facing debt, stress and uncertainty." },
        ],
      },
      // 66
      {
        type: "open-response" as const,
        title: "Write a Conclusion Paragraph",
        instruction: "Write a conclusion paragraph for the essay topic 'Schools should ban sugary drinks'. It should restate the main argument, summarise key evidence and end with a call to action.",
        prompts: [
          { text: "Conclusion paragraph:", type: "box" as const, lines: 8 },
        ],
      },
      // 67
      {
        type: "circle-correct" as const,
        title: "Which Conclusion Is More Effective?",
        instruction: "Circle the more effective conclusion sentence.",
        questions: [
          {
            prompt: "Which is the better conclusion?",
            options: [
              "So that is why I think schools should have libraries.",
              "The evidence is clear: school libraries are not a luxury but a necessity, and every child deserves one.",
            ],
          },
          {
            prompt: "Which is the better conclusion?",
            options: [
              "In conclusion, exercise is good and schools should have more sport.",
              "The research is unambiguous. Daily exercise is essential — not optional — and our schools must prioritise it for the health and future of every child.",
            ],
          },
        ],
      },
      // 68
      {
        type: "open-response" as const,
        title: "Full Persuasive Essay Plan",
        instruction: "Plan a full persuasive essay (introduction + two PEEL paragraphs + conclusion) on: 'Australia should do more to protect native wildlife.'",
        prompts: [
          { text: "Introduction hook:", type: "lines" as const, lines: 1 },
          { text: "Thesis (main opinion):", type: "lines" as const, lines: 1 },
          { text: "Paragraph 1 — Point:", type: "lines" as const, lines: 1 },
          { text: "Paragraph 1 — Evidence:", type: "lines" as const, lines: 1 },
          { text: "Paragraph 2 — Point:", type: "lines" as const, lines: 1 },
          { text: "Paragraph 2 — Evidence:", type: "lines" as const, lines: 1 },
          { text: "Conclusion — key idea and call to action:", type: "lines" as const, lines: 2 },
        ],
      },
      // 69
      {
        type: "true-false" as const,
        title: "True or False: Persuasive Essay Structure",
        instruction: "Circle True or False.",
        statements: [
          { text: "A strong conclusion restates the main argument.", answer: true },
          { text: "A persuasive essay can only have one PEEL paragraph.", answer: false },
          { text: "A call to action tells readers what to do or think.", answer: true },
          { text: "Using the same evidence in every paragraph makes an essay stronger.", answer: false },
          { text: "A hook at the start of an essay engages the reader immediately.", answer: true },
        ],
      },
      // 70
      {
        type: "home-activity" as const,
        title: "Persuasive Writing in the World",
        instruction: "Explore persuasive writing in real-world contexts this week.",
        parentTip: "Identifying persuasive techniques in real media is one of the most powerful critical literacy activities.",
        suggestions: [
          "Find a real letter to the editor in a newspaper. Identify the PEEL structure and any persuasive techniques.",
          "Write a letter to your local council about an issue in your community using the PEEL structure.",
          "Watch a persuasive speech (TED Talk or school speech day) and identify three techniques used.",
          "Create a persuasive poster for a cause you believe in — include a slogan, statistics and an emotional appeal.",
        ],
      },
      // ── EXTENDING 71–100 ──────────────────────────────────────────────────
      // 71
      {
        type: "open-response" as const,
        title: "Write a Full Persuasive Essay",
        instruction: "Write a full persuasive essay (introduction, two PEEL paragraphs, conclusion) on: 'All Australian children should learn a second language.' Use at least four different persuasive techniques.",
        prompts: [
          { text: "Your essay:", type: "box" as const, lines: 20 },
        ],
      },
      // 72
      {
        type: "multiple-choice" as const,
        title: "Analyse Persuasive Techniques",
        instruction: "Choose the correct analysis for each persuasive technique.",
        questions: [
          { prompt: "Why is a rhetorical question effective at the end of a paragraph?", options: ["It confuses the reader", "It leaves the reader with something to think about and implies the answer", "It provides evidence"], answer: "It leaves the reader with something to think about and implies the answer" },
          { prompt: "Why is a statistic stronger than a personal anecdote?", options: ["Statistics are always true", "Statistics represent larger samples and are more objective", "Personal anecdotes are boring"], answer: "Statistics represent larger samples and are more objective" },
          { prompt: "What is the purpose of a counter-argument in a persuasive essay?", options: ["To admit the writer is wrong", "To show intellectual fairness and then strengthen the main argument", "To confuse the reader"], answer: "To show intellectual fairness and then strengthen the main argument" },
        ],
      },
      // 73
      {
        type: "open-response" as const,
        title: "Evaluate a Persuasive Text",
        instruction: "Read a real persuasive text (editorial, letter to editor, advertisement or speech). Complete this analysis.",
        prompts: [
          { text: "Text and source:", type: "lines" as const, lines: 1 },
          { text: "Main opinion (Point):", type: "lines" as const, lines: 1 },
          { text: "Two pieces of evidence used:", type: "lines" as const, lines: 2 },
          { text: "Two persuasive techniques identified:", type: "lines" as const, lines: 2 },
          { text: "Is the argument convincing? Why or why not?", type: "lines" as const, lines: 2 },
        ],
      },
      // 74
      {
        type: "fill-in-blank" as const,
        title: "Sophisticated Persuasive Language",
        instruction: "Replace the plain word in brackets with a more sophisticated persuasive alternative.",
        sentences: [
          { text: "The evidence ___ [shows] a direct link between literacy and life outcomes.", blanks: ["demonstrates conclusively"] },
          { text: "This issue ___ [needs] immediate attention from all levels of government.", blanks: ["demands"] },
          { text: "The ___ [bad] effects of screen time on young children are well-documented.", blanks: ["detrimental"] },
          { text: "Schools that invest in reading programs ___ [get] significantly better outcomes.", blanks: ["achieve"] },
        ],
      },
      // 75 — TIP
      {
        type: "tip" as const,
        title: "Tip: Writing for Your Audience",
        content: "Different audiences require different persuasive approaches. Writing to your local council: use formal language, specific evidence and policy-focused arguments. Writing to a newspaper: use accessible language, emotional appeal and statistics. Writing to a friend: use informal language, personal examples and humour. Always ask: who am I writing to, and what kind of evidence and language will convince THEM? Adjusting your register and evidence to suit your audience is one of the most advanced writing skills.",
      },
      // 76
      {
        type: "open-response" as const,
        title: "Write for Different Audiences",
        instruction: "Argue that your local park needs better facilities. Write your main point sentence in two versions — one for the local council (formal) and one for a school newsletter (informal/engaging).",
        prompts: [
          { text: "For the council (formal):", type: "lines" as const, lines: 2 },
          { text: "For the school newsletter (informal/engaging):", type: "lines" as const, lines: 2 },
          { text: "What changed between the two versions?", type: "lines" as const, lines: 2 },
        ],
      },
      // 77
      {
        type: "sorting" as const,
        title: "Sort: Formal or Informal Persuasive Language?",
        instruction: "Sort each persuasive phrase by register.",
        columns: ["Formal persuasive language", "Informal persuasive language"],
        items: [
          { label: "The evidence demonstrates conclusively that..." },
          { label: "Come on, everyone knows that..." },
          { label: "It is incumbent upon all stakeholders to..." },
          { label: "You've got to admit, it's pretty obvious..." },
          { label: "Research overwhelmingly supports the conclusion that..." },
          { label: "Seriously, why aren't we doing something about this?" },
          { label: "The data indicates a compelling case for..." },
          { label: "Trust me, this really works." },
        ],
      },
      // 78
      {
        type: "open-response" as const,
        title: "Letter of Persuasion: Formal",
        instruction: "Write a formal persuasive letter to your school principal arguing for one change at your school. Use full PEEL structure, formal language and at least two persuasive techniques.",
        prompts: [
          { text: "Your letter:", type: "box" as const, lines: 16 },
        ],
      },
      // 79
      {
        type: "open-response" as const,
        title: "Self-Evaluation: Persuasive Writing",
        instruction: "Look at a persuasive piece you have written. Evaluate it honestly.",
        prompts: [
          { text: "Did you state your opinion clearly in the first sentence? Evidence:", type: "lines" as const, lines: 1 },
          { text: "What type of evidence did you use? Was it strong enough?", type: "lines" as const, lines: 2 },
          { text: "Did you include a counter-argument? If not, write one now:", type: "lines" as const, lines: 2 },
          { text: "What persuasive techniques did you use?", type: "lines" as const, lines: 1 },
          { text: "What would you improve if you rewrote this piece?", type: "lines" as const, lines: 2 },
        ],
      },
      // 80 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The TED Talk",
        content: "Write and deliver a two-minute persuasive speech on a topic you care about. Requirements: a hook opening, PEEL structure, at least three different persuasive techniques, a counter-argument and refutation, a powerful closing statement. Rehearse it at least twice, then deliver it to your family. Ask them: What was the most convincing part? What could be stronger? Then revise and deliver it again.",
      },
      // 81
      {
        type: "true-false" as const,
        title: "True or False: Advanced Persuasion",
        instruction: "Circle True or False.",
        statements: [
          { text: "Register (formal/informal) should match the intended audience.", answer: true },
          { text: "A counter-argument always undermines the main argument.", answer: false },
          { text: "A strong concluding sentence summarises and motivates.", answer: true },
          { text: "Using only emotional appeals makes a persuasive essay more credible.", answer: false },
          { text: "The most effective persuasive writing balances logic, evidence and emotion.", answer: true },
        ],
      },
      // 82
      {
        type: "open-response" as const,
        title: "Analyse Your Own Persuasive Techniques",
        instruction: "Reread the persuasive essay you wrote in Activity 71. Complete this analysis.",
        prompts: [
          { text: "List every persuasive technique you used and give an example of each:", type: "lines" as const, lines: 4 },
          { text: "Which technique do you think was most effective?", type: "lines" as const, lines: 1 },
          { text: "Which would you add or change now?", type: "lines" as const, lines: 2 },
        ],
      },
      // 83
      {
        type: "fill-in-blank" as const,
        title: "Complete a Sophisticated Counter-Argument",
        instruction: "Complete each counter-argument and refutation using formal language.",
        sentences: [
          { text: "CA: ___ [Some critics claim] that reducing homework will lower academic standards.", blanks: ["Some critics claim"] },
          { text: "R: ___ [However, the research demonstrates] that moderate homework has no measurable benefit for primary students.", blanks: ["However, the research demonstrates"] },
          { text: "CA: ___ [While it may be argued] that zoos protect endangered species...", blanks: ["While it may be argued"] },
          { text: "R: ___ [Nevertheless, compelling evidence shows] that captive animals suffer significantly higher stress levels.", blanks: ["Nevertheless, compelling evidence shows"] },
        ],
      },
      // 84
      {
        type: "open-response" as const,
        title: "Two-Sided Essay: Introduction and Two Arguments",
        instruction: "Write an introduction and two body paragraphs for a two-sided essay on 'Technology in the classroom'. Paragraph 1: FOR. Paragraph 2: AGAINST. Then state your own opinion at the end.",
        prompts: [
          { text: "Introduction:", type: "box" as const, lines: 4 },
          { text: "FOR paragraph:", type: "box" as const, lines: 6 },
          { text: "AGAINST paragraph:", type: "box" as const, lines: 6 },
          { text: "My opinion:", type: "lines" as const, lines: 2 },
        ],
      },
      // 85
      {
        type: "sorting" as const,
        title: "Sort: Features of a Sophisticated Persuasive Essay",
        instruction: "Sort each feature into basic (Year 3 level) or sophisticated (Year 4+ level).",
        columns: ["Basic feature", "Sophisticated feature"],
        items: [
          { label: "A clear opinion sentence" },
          { label: "A rhetorical question hook" },
          { label: "One piece of evidence" },
          { label: "A concession and refutation" },
          { label: "Varied sentence openers" },
          { label: "Signal words like firstly/in conclusion" },
          { label: "Audience-appropriate register" },
          { label: "A powerful call to action" },
        ],
      },
      // 86
      {
        type: "multiple-choice" as const,
        title: "Which Is the Most Sophisticated Persuasive Writing?",
        instruction: "Choose the most sophisticated version.",
        questions: [
          {
            prompt: "Most sophisticated persuasive opening:",
            options: [
              "I think schools should have sport every day.",
              "When was the last time you watched a child light up with joy on a sports field? For many Australian students, that experience is becoming increasingly rare — and the consequences for their health and wellbeing are measurable.",
              "Exercise is important. Schools should have more sport.",
            ],
            answer: "When was the last time you watched a child light up with joy on a sports field? For many Australian students, that experience is becoming increasingly rare — and the consequences for their health and wellbeing are measurable.",
          },
        ],
      },
      // 87
      {
        type: "open-response" as const,
        title: "Peer Feedback on Persuasive Writing",
        instruction: "Swap your persuasive essay with a sibling, parent or friend. Give each other feedback using these questions.",
        prompts: [
          { text: "What was the clearest, most convincing part of their essay?", type: "lines" as const, lines: 2 },
          { text: "What evidence did they use? Was it strong?", type: "lines" as const, lines: 2 },
          { text: "Did they include a counter-argument? If yes, was the refutation convincing?", type: "lines" as const, lines: 2 },
          { text: "One specific suggestion for improvement:", type: "lines" as const, lines: 2 },
        ],
      },
      // 88
      {
        type: "fill-in-blank" as const,
        title: "Formal Transitions in a Multi-Paragraph Essay",
        instruction: "Fill in the best transition to connect these paragraphs in a formal essay.",
        sentences: [
          { text: "___ [To begin with/In conclusion], the economic benefits of renewable energy are significant.", blanks: ["To begin with"] },
          { text: "___ [Beyond this/However], the environmental advantages are even more compelling.", blanks: ["Beyond this"] },
          { text: "___ [Furthermore/Although], communities that invest in renewable energy report higher wellbeing.", blanks: ["Furthermore"] },
          { text: "___ [In light of this evidence/To begin with], policymakers must act without delay.", blanks: ["In light of this evidence"] },
        ],
      },
      // 89
      {
        type: "open-response" as const,
        title: "Final Extended Persuasive Essay",
        instruction: "Write a complete five-paragraph persuasive essay on a topic of your choice. Include: introduction with hook and thesis, three body paragraphs (each PEEL), conclusion with call to action. Use at least five different persuasive techniques and label them.",
        prompts: [
          { text: "My topic:", type: "lines" as const, lines: 1 },
          { text: "My essay:", type: "box" as const, lines: 22 },
        ],
      },
      // 90 — TIP
      {
        type: "tip" as const,
        title: "Tip: Editing Persuasive Writing",
        content: "After writing a persuasive piece, always edit it using this checklist: Is my opinion clear from the very first sentence? Does every paragraph contain evidence? Have I explained WHY the evidence matters? Is my language precise and varied? Did I include a counter-argument? Is my conclusion strong enough to motivate action? Does my register match my audience? Editing is where good writing becomes great writing.",
      },
      // 91
      {
        type: "open-response" as const,
        title: "Persuasive Writing Editing Checklist",
        instruction: "Apply the editing checklist to the essay you wrote in Activity 89.",
        prompts: [
          {
            text: "[ ] Opinion is clear in the first sentence.\n[ ] Every paragraph contains evidence.\n[ ] Evidence is explained (Explanation step).\n[ ] Language is precise and varied.\n[ ] At least one counter-argument is included.\n[ ] Conclusion motivates action.\n[ ] Register matches audience.\n\nWhat did you improve after editing?",
            type: "lines" as const, lines: 3,
          },
        ],
      },
      // 92
      {
        type: "sorting" as const,
        title: "Sort Persuasive Essays by Quality",
        instruction: "Sort these essay features into strong essay or needs improvement.",
        columns: ["Strong essay", "Needs improvement"],
        items: [
          { label: "Clear thesis in first sentence" },
          { label: "Vague opening like 'I think this is important'" },
          { label: "Evidence from a named reliable source" },
          { label: "Evidence like 'people think'" },
          { label: "Explanation of why evidence matters" },
          { label: "Evidence with no explanation" },
          { label: "Counter-argument addressed and refuted" },
          { label: "Only one side of the argument presented" },
        ],
      },
      // 93
      {
        type: "open-response" as const,
        title: "Persuasive Vocabulary Builder",
        instruction: "List ten sophisticated words or phrases you could use to strengthen persuasive writing. For each, write an example sentence.",
        prompts: [
          { text: "1. Word/phrase:                Example:", type: "lines" as const, lines: 1 },
          { text: "2. Word/phrase:                Example:", type: "lines" as const, lines: 1 },
          { text: "3. Word/phrase:                Example:", type: "lines" as const, lines: 1 },
          { text: "4. Word/phrase:                Example:", type: "lines" as const, lines: 1 },
          { text: "5. Word/phrase:                Example:", type: "lines" as const, lines: 1 },
          { text: "6–10 (continue below):", type: "box" as const, lines: 5 },
        ],
      },
      // 94
      {
        type: "true-false" as const,
        title: "True or False: Final Persuasive Writing Mastery",
        instruction: "Circle True or False.",
        statements: [
          { text: "Persuasive writing can be found in editorials, speeches, advertisements and letters.", answer: true },
          { text: "A PEEL paragraph always needs exactly four sentences.", answer: false },
          { text: "The most effective persuasive writers balance logic, evidence and emotional appeal.", answer: true },
          { text: "A call to action tells readers what you want them to do or believe.", answer: true },
          { text: "Using jargon always makes persuasive writing more effective.", answer: false },
        ],
      },
      // 95
      {
        type: "open-response" as const,
        title: "Reflection: What Makes Persuasive Writing Effective?",
        instruction: "Reflect on everything you have learned about persuasive writing.",
        prompts: [
          { text: "What is PEEL and why is it a useful structure?", type: "lines" as const, lines: 2 },
          { text: "Name three persuasive techniques and explain when you would use each:", type: "lines" as const, lines: 3 },
          { text: "What is the most important thing you have learned about persuasion?", type: "lines" as const, lines: 2 },
          { text: "How will you use these skills in your next persuasive piece?", type: "lines" as const, lines: 2 },
        ],
      },
      // 96
      {
        type: "fill-in-blank" as const,
        title: "Persuasive Essay Vocabulary",
        instruction: "Fill in the correct persuasive vocabulary term.",
        sentences: [
          { text: "A ___ is a question asked for effect, not a real answer.", blanks: ["rhetorical question"] },
          { text: "The ___ is the main opinion statement at the start of an essay.", blanks: ["thesis"] },
          { text: "Listing three things together for emphasis is called the ___ of ___.", blanks: ["rule", "three"] },
          { text: "Admitting the opposing view before arguing against it is a ___.", blanks: ["counter-argument"] },
          { text: "A sentence that tells the reader what to do is called a ___ to action.", blanks: ["call"] },
        ],
      },
      // 97
      {
        type: "matching" as const,
        title: "Match the Persuasive Term to Its Definition",
        instruction: "Draw a line to match each term with its definition.",
        left: ["PEEL", "Rhetorical question", "Counter-argument", "Call to action", "Rule of three"],
        right: [
          "Listing three examples or ideas for emphasis",
          "A question asked for effect, not a real answer",
          "Point, Evidence, Explanation, Link paragraph structure",
          "A sentence telling the reader what to do",
          "Acknowledging the opposing view before arguing against it",
        ],
      },
      // 98
      {
        type: "open-response" as const,
        title: "Write a Persuasive Response to a Real Issue",
        instruction: "Choose a real issue in your community or country. Write a full persuasive paragraph using PEEL. Label each part.",
        prompts: [
          { text: "Issue:", type: "lines" as const, lines: 1 },
          { text: "PEEL paragraph (label P, E, E, L):", type: "box" as const, lines: 10 },
        ],
      },
      // 99
      {
        type: "home-activity" as const,
        title: "Advanced Persuasion Challenge",
        instruction: "Apply everything you have learned about persuasive writing in the real world.",
        parentTip: "Encourage your child to see persuasion as a life skill — used in letters, speeches, job applications and conversations.",
        suggestions: [
          "Write a letter to your local newspaper about an issue that matters to you — use full PEEL structure.",
          "Give a two-minute persuasive speech at the dinner table and ask family members for critique.",
          "Watch a real political or environmental speech online and identify five persuasive techniques.",
          "Write a persuasive paragraph arguing BOTH sides of an issue — compare which side is easier to argue.",
        ],
      },
      // 100 — SPARK
      {
        type: "spark" as const,
        title: "Spark: The Ultimate Persuasion Project",
        content: "Choose an issue you feel genuinely passionate about. Create a complete persuasion campaign: a formal letter to a decision-maker, a persuasive poster for display and a two-minute speech. Each piece should use the full range of persuasive techniques you have studied. Present your campaign to your family and ask them to vote on whether they are convinced. This is how real change happens!",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "sorting" as const,
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
        type: "circle-correct" as const,
        title: "Simile or Metaphor? — Round 1",
        instruction: "Circle whether each phrase is a simile or a metaphor.",
        parentTip: "Remind your child: if the phrase uses 'like' or 'as', it is a simile; otherwise it is a metaphor.",
        questions: [
          { prompt: "The classroom was a beehive of noise.", options: ["Simile", "Metaphor"] },
          { prompt: "She ran as fast as a cheetah.", options: ["Simile", "Metaphor"] },
          { prompt: "His words were daggers.", options: ["Simile", "Metaphor"] },
          { prompt: "The fog rolled in like a grey blanket.", options: ["Simile", "Metaphor"] },
          { prompt: "Time is a river.", options: ["Simile", "Metaphor"] },
          { prompt: "As quiet as a sleeping cat.", options: ["Simile", "Metaphor"] },
        ],
      },
      {
        type: "matching" as const,
        title: "Match Figure of Speech to Example",
        instruction: "Draw a line to match each type of figurative language to the correct example.",
        parentTip: "Ask your child to explain the comparison in each example — what two things are being compared?",
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
        type: "fill-in-blank" as const,
        title: "Complete the Simile",
        instruction: "Fill in each blank to complete the simile using the word bank: feather, ice, thunder, silk, lightning.",
        sentences: [
          { text: "Her voice was as smooth as ___ .", blanks: ["silk"] },
          { text: "The cold water felt like ___ against my skin.", blanks: ["ice"] },
          { text: "The horse galloped as fast as ___ .", blanks: ["lightning"] },
          { text: "His footsteps were as loud as ___ .", blanks: ["thunder"] },
          { text: "The blanket was as light as a ___ .", blanks: ["feather"] },
        ],
      },
      {
        type: "true-false" as const,
        title: "True or False: Simile or Metaphor?",
        instruction: "Decide if each statement about the phrase is true or false.",
        parentTip: "Encourage your child to say the phrase aloud — hearing it often reveals the comparison more clearly.",
        statements: [
          { text: "'The moon is a lantern' is a metaphor.", answer: true },
          { text: "'As cold as ice' is a metaphor.", answer: false },
          { text: "'Life is a journey' uses 'like' or 'as'.", answer: false },
          { text: "'He ran like a rocket' is a simile.", answer: true },
          { text: "'She is as wise as an owl' is a simile.", answer: true },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Name the Figurative Language",
        instruction: "Choose the correct label for each phrase.",
        questions: [
          { prompt: "'The garden was a painting in the morning light.'", options: ["Simile", "Metaphor", "Personification"], answer: "Metaphor" },
          { prompt: "'The rain pattered like tiny fingers on the roof.'", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile" },
          { prompt: "'As fierce as a dragon.'", options: ["Metaphor", "Simile", "Hyperbole"], answer: "Simile" },
          { prompt: "'Silence is a golden thread.'", options: ["Simile", "Metaphor", "Onomatopoeia"], answer: "Metaphor" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Identify Imagery in a Poem",
        instruction: "Read the poem. Find three examples of imagery and write which sense each one appeals to.",
        parentTip: "Work through the first example together before your child attempts the others independently.",
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
        type: "sorting" as const,
        title: "Sort Imagery by Sense",
        instruction: "Sort each phrase into the sense it most strongly appeals to.",
        parentTip: "If a phrase appeals to more than one sense, ask your child which sense is strongest.",
        columns: ["Sight", "Sound", "Touch", "Smell", "Taste"],
        items: [
          { label: "The thunder boomed across the valley." },
          { label: "The lemon was sharp and electric on my tongue." },
          { label: "Velvet shadows draped the hillside." },
          { label: "Rain-soaked earth filled the air with a mossy sweetness." },
          { label: "The icy water stung my fingers." },
          { label: "Crickets chirped their nightly chorus." },
          { label: "Smoke curled in grey ribbons above the chimney." },
          { label: "The chilli burned a trail from my lips to my stomach." },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Write the Missing Half of Each Metaphor",
        instruction: "Complete each metaphor by filling in the blank.",
        sentences: [
          { text: "The sun was a ___ blazing in the sky.", blanks: ["golden coin / furnace / lantern"] },
          { text: "Her voice was ___ , wrapping around the room.", blanks: ["velvet / honey / silk"] },
          { text: "The city at night was a ___ of a thousand lights.", blanks: ["galaxy / diamond sea / constellation"] },
          { text: "His anger was a ___ ready to erupt.", blanks: ["volcano / storm / fire"] },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Sense Does This Appeal To?",
        instruction: "Circle the sense most strongly evoked by each phrase.",
        questions: [
          { prompt: "'The bread smelled of warm butter and morning.'", options: ["Sight", "Smell", "Touch"] },
          { prompt: "'The velvet curtains muffled every sound.'", options: ["Sound", "Taste", "Touch"] },
          { prompt: "'Sunlight spilled like honey across the floorboards.'", options: ["Sight", "Smell", "Taste"] },
          { prompt: "'A bitter tang of smoke hit the back of my throat.'", options: ["Touch", "Taste", "Sound"] },
          { prompt: "'The kettle screamed its shrill warning.'", options: ["Sound", "Sight", "Touch"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Best Simile for the Sentence",
        instruction: "Choose the simile that creates the most vivid image.",
        parentTip: "Discuss with your child why the best option creates the clearest picture in their mind.",
        questions: [
          { prompt: "The swimmer cut through the water ___.", options: ["like a fish", "like a fast thing", "like a good swimmer"], answer: "like a fish" },
          { prompt: "The old man's hands were ___ .", options: ["like nice things", "like crumpled paper maps", "like something old"], answer: "like crumpled paper maps" },
          { prompt: "The thunder rolled across the sky ___ .", options: ["like a big sound", "like bowling balls across a giant floor", "like noise"], answer: "like bowling balls across a giant floor" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Five Original Similes",
        instruction: "Write five original similes about things you can see or experience right now. Try to avoid clichés — no 'fast as lightning' or 'quiet as a mouse'!",
        prompts: [
          { text: "1.", type: "lines", lines: 2 },
          { text: "2.", type: "lines", lines: 2 },
          { text: "3.", type: "lines", lines: 2 },
          { text: "4.", type: "lines", lines: 2 },
          { text: "5.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching" as const,
        title: "Match Metaphor to Its Meaning",
        instruction: "Match each metaphor on the left to its meaning on the right.",
        parentTip: "Metaphors often carry emotional meaning — ask your child how each one makes them feel.",
        left: [
          "Life is a rollercoaster.",
          "She is a shining star.",
          "He has a heart of gold.",
          "The world is a stage.",
          "Time is money.",
        ],
        right: [
          "Everyone is performing a role.",
          "He is very generous and kind.",
          "She is brilliant and admired.",
          "Time should not be wasted.",
          "Life has many ups and downs.",
        ],
      },
      {
        type: "true-false" as const,
        title: "Imagery: True or False?",
        instruction: "Read each statement and decide if it is true or false.",
        statements: [
          { text: "Imagery only appeals to the sense of sight.", answer: false },
          { text: "A metaphor uses 'like' or 'as' to compare two things.", answer: false },
          { text: "Sensory imagery helps readers picture what is happening.", answer: true },
          { text: "You can use imagery in poetry but not in prose.", answer: false },
          { text: "A simile compares two unlike things using 'like' or 'as'.", answer: true },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Label the Figurative Language",
        instruction: "Fill in each blank with 'simile', 'metaphor' or 'imagery'.",
        parentTip: "Read each sentence aloud together and ask your child to identify the technique before writing.",
        sentences: [
          { text: "'The sky was a violet bruise at dusk.' — This is a ___ .", blanks: ["metaphor"] },
          { text: "'He ran as swiftly as a deer.' — This is a ___ .", blanks: ["simile"] },
          { text: "'The salt air stung her lips and tangled her hair.' — This is ___ .", blanks: ["imagery"] },
          { text: "'The moon is a silent guardian.' — This is a ___ .", blanks: ["metaphor"] },
          { text: "'Her laughter bubbled up like a brook.' — This is a ___ .", blanks: ["simile"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Fresh vs Clichéd Figurative Language",
        content: "A cliché is a comparison that has been used so often it has lost its power — 'as brave as a lion', 'heart of gold'. Challenge yourself to invent fresh comparisons that no one has used before. The more specific and surprising, the more vivid the image!",
      },
      {
        type: "sorting" as const,
        title: "Fresh or Clichéd Simile?",
        instruction: "Sort each simile into 'Fresh and original' or 'Clichéd and overused'.",
        columns: ["Fresh and original", "Clichéd and overused"],
        items: [
          { label: "As brave as a lion." },
          { label: "Her grief spread like ink through paper." },
          { label: "As quiet as a mouse." },
          { label: "His smile was a crack in a stone wall — unexpected and wide." },
          { label: "Fast as lightning." },
          { label: "The fog crept in like a shy child hiding behind curtains." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rewrite the Cliché",
        instruction: "Each phrase below is a clichéd simile. Rewrite it using a fresh, original comparison on the same idea.",
        parentTip: "Encourage your child to think of something specific and personal — something only they would compare it to.",
        prompts: [
          { text: "Cliché: 'As happy as a clam.'\nMy version:", type: "lines", lines: 2 },
          { text: "Cliché: 'Like a bull in a china shop.'\nMy version:", type: "lines", lines: 2 },
          { text: "Cliché: 'As white as snow.'\nMy version:", type: "lines", lines: 2 },
          { text: "Cliché: 'Sleep like a log.'\nMy version:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "What Makes This Imagery Effective?",
        instruction: "Read each piece of imagery and choose the best explanation of why it works.",
        questions: [
          {
            prompt: "'The old photograph had curled at its edges like a shy secret trying to hide itself.'",
            options: [
              "It uses the word 'like'.",
              "It compares the photograph to a hiding secret, making it feel personal and emotional.",
              "It mentions a photograph.",
            ],
            answer: "It compares the photograph to a hiding secret, making it feel personal and emotional.",
          },
          {
            prompt: "'Silence roared through the empty school hallway.'",
            options: [
              "It uses a loud word — 'roared' — to describe silence, creating a powerful contrast.",
              "It describes a school hallway.",
              "It uses long sentences.",
            ],
            answer: "It uses a loud word — 'roared' — to describe silence, creating a powerful contrast.",
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Imagery Notebook",
        instruction: "Start an imagery notebook this week — collect vivid language you notice in books, conversations and the world around you.",
        parentTip: "Model the habit yourself: share a piece of language that struck you during the day and discuss why it was effective.",
        suggestions: [
          "Write down one striking piece of figurative language from a book you are reading this week.",
          "Describe your walk to the letterbox or garden using three different sensory images.",
          "Find a poem by an Australian poet (Banjo Paterson, Judith Wright, Steven Herrick) and underline every simile and metaphor.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Five-Senses Challenge",
        content: "Sit somewhere interesting — a garden, a kitchen, a playground. Write one sentence for each of the five senses describing exactly where you are. Then read all five sentences together. That is sensory imagery!",
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response" as const,
        title: "Write Five Original Metaphors",
        instruction: "Write five original metaphors about emotions or abstract ideas — happiness, fear, hope, boredom, excitement. Do not use 'like' or 'as'.",
        parentTip: "Prompt your child: 'What object or creature does this emotion remind you of? How does it behave?'",
        prompts: [
          { text: "Happiness is ...", type: "lines", lines: 2 },
          { text: "Fear is ...", type: "lines", lines: 2 },
          { text: "Hope is ...", type: "lines", lines: 2 },
          { text: "Boredom is ...", type: "lines", lines: 2 },
          { text: "Excitement is ...", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Sensory Imagery — Complete the Sentence",
        instruction: "Fill in each blank with a vivid sensory word or phrase to complete the imagery.",
        sentences: [
          { text: "The market smelled of ___ and frying oil.", blanks: ["spices / cardamom / garlic"] },
          { text: "The hail battered the tin roof with a sound like ___ .", blanks: ["applause / marbles / drumming"] },
          { text: "The silk was ___ against her palm.", blanks: ["cool and smooth / slippery / liquid-soft"] },
          { text: "Ripe mangoes sat in a golden heap, their sweetness ___ in the heat.", blanks: ["thick / humming / hanging"] },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Is the More Vivid Image?",
        instruction: "Circle the sentence that creates a more vivid, specific image.",
        parentTip: "Ask your child: which sentence makes you see, hear, feel or smell something more clearly?",
        questions: [
          {
            prompt: "The storm was bad.",
            options: [
              "The storm was bad.",
              "The storm hurled tiles from rooftops and turned streets into rushing rivers.",
            ],
          },
          {
            prompt: "The food tasted good.",
            options: [
              "The chocolate was rich and bitter, melting into a warm flood on her tongue.",
              "The food tasted good.",
            ],
          },
          {
            prompt: "He walked into the room.",
            options: [
              "He walked into the room.",
              "He pushed through the door like a weather front — heavy, inevitable, changing the temperature of everything.",
            ],
          },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identify Extended Metaphor",
        instruction: "Read the passage and choose the best description of its figurative language.",
        parentTip: "An extended metaphor maintains a single comparison across several sentences or a whole passage.",
        questions: [
          {
            prompt: "The mind is a garden. Some thoughts are flowers we tend carefully. Others are weeds that take over if we are not watchful. We must decide what to water.",
            options: [
              "Four separate similes.",
              "An extended metaphor comparing the mind to a garden.",
              "A list of facts about gardens.",
            ],
            answer: "An extended metaphor comparing the mind to a garden.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write an Extended Metaphor",
        instruction: "Choose one of the topics below. Write 4–5 sentences developing a single extended metaphor across the whole passage.",
        prompts: [
          {
            text: "Topics:\n  [ ] School is a jungle.\n  [ ] A family is an orchestra.\n  [ ] A friendship is a garden.\n  [ ] My own:\nMy extended metaphor:",
            type: "box",
            lines: 8,
          },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort: Literal or Figurative?",
        instruction: "Sort each sentence into 'Literal (states a fact)' or 'Figurative (uses figurative language)'.",
        parentTip: "Literal language says exactly what it means; figurative language creates an image or comparison.",
        columns: ["Literal", "Figurative"],
        items: [
          { label: "The cat sat on the mat." },
          { label: "She was drowning in a sea of paperwork." },
          { label: "It rained for three days." },
          { label: "His temper was a match waiting for a spark." },
          { label: "The tree lost its leaves in autumn." },
          { label: "Her tears carved rivers down her dusty cheeks." },
          { label: "The dog barked twice." },
          { label: "The library was a cathedral of whispered knowledge." },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language in Context",
        instruction: "Choose the best figurative word or phrase to fill each blank: blazed, skeleton, lullaby, swallowed, armour.",
        parentTip: "Encourage your child to read the full sentence before choosing — context determines the best fit.",
        sentences: [
          { text: "The winter tree was a ___ against the white sky.", blanks: ["skeleton"] },
          { text: "The sun ___ above the red desert.", blanks: ["blazed"] },
          { text: "The heavy fog ___ the harbour whole.", blanks: ["swallowed"] },
          { text: "Rain pattered a soft ___ on the tent roof.", blanks: ["lullaby"] },
          { text: "She wore her cheerfulness like ___ .", blanks: ["armour"] },
        ],
      },
      {
        type: "true-false" as const,
        title: "Figurative Language: Deeper Knowledge",
        instruction: "Read each statement and circle true or false.",
        statements: [
          { text: "Personification gives human qualities to non-human things.", answer: true },
          { text: "Similes always use the word 'like', never 'as'.", answer: false },
          { text: "An extended metaphor is sustained across several sentences or a whole text.", answer: true },
          { text: "Imagery only describes what something looks like.", answer: false },
          { text: "Figurative language is only used in poetry, not in prose.", answer: false },
        ],
      },
      {
        type: "matching" as const,
        title: "Match Technique to Definition",
        instruction: "Match each figurative language technique to its definition.",
        left: ["Simile", "Metaphor", "Personification", "Imagery", "Extended metaphor"],
        right: [
          "Language that appeals to the five senses.",
          "Compares two things using 'like' or 'as'.",
          "A single comparison maintained across an entire passage.",
          "Gives human qualities to non-human things.",
          "Says one thing IS another without using 'like' or 'as'.",
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Personification — Bringing the World to Life",
        content: "Personification is a type of metaphor where you give human qualities to something non-human. 'The wind whispered through the trees' — the wind cannot whisper, but this gives it a voice. 'The sun stretched its warm arms across the valley' — the sun has no arms, but we can feel the warmth. Personification is one of the most powerful forms of imagery.",
      },
      {
        type: "circle-correct" as const,
        title: "Identify Personification",
        instruction: "Circle 'Yes' if the phrase uses personification, 'No' if it does not.",
        questions: [
          { prompt: "The stars danced in the midnight sky.", options: ["Yes — personification", "No"] },
          { prompt: "The river ran quickly to the sea.", options: ["Yes — personification", "No"] },
          { prompt: "Fear knocked at his door every night.", options: ["Yes — personification", "No"] },
          { prompt: "The leaves were orange and gold.", options: ["Yes — personification", "No"] },
          { prompt: "The old house groaned with the weight of memories.", options: ["Yes — personification", "No"] },
          { prompt: "Three magpies sat on the fence.", options: ["Yes — personification", "No"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Five Personification Sentences",
        instruction: "Write five sentences using personification. Give a human quality to something in nature or the world around you.",
        parentTip: "Suggest starting with: 'The _____ [verb usually used for a person]...'",
        prompts: [
          { text: "1. The moon ...", type: "lines", lines: 2 },
          { text: "2. The storm ...", type: "lines", lines: 2 },
          { text: "3. The old book ...", type: "lines", lines: 2 },
          { text: "4. The night ...", type: "lines", lines: 2 },
          { text: "5. The road ...", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Complete the Personification",
        instruction: "Fill in each blank with a human action to complete the personification.",
        sentences: [
          { text: "The mountains ___ over the valley like ancient guardians.", blanks: ["stood / loomed / watched"] },
          { text: "The autumn leaves ___ goodbye as they fell.", blanks: ["whispered / sighed / waved"] },
          { text: "The thunder ___ its displeasure across the sky.", blanks: ["growled / bellowed / grumbled"] },
          { text: "The flowers ___ their petals to greet the morning sun.", blanks: ["stretched / opened / offered"] },
          { text: "The wind ___ through the keyhole all night.", blanks: ["moaned / sang / whistled"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Purpose of Figurative Language",
        instruction: "For each example, choose the best explanation of the effect the figurative language creates.",
        parentTip: "Understanding WHY writers use figurative language is as important as identifying WHAT it is.",
        questions: [
          {
            prompt: "'The knife-cold wind cut through his jacket.' Why does the writer use this metaphor?",
            options: [
              "To show the reader the wind was cold and sharp, making us feel the physical discomfort.",
              "To describe knives.",
              "To tell us the man had a jacket.",
            ],
            answer: "To show the reader the wind was cold and sharp, making us feel the physical discomfort.",
          },
          {
            prompt: "'She carried her sadness like a stone in her chest.' Why does the writer use this simile?",
            options: [
              "To describe stones.",
              "To make the sadness feel physical — heavy, solid and unavoidable.",
              "To say she is carrying something.",
            ],
            answer: "To make the sadness feel physical — heavy, solid and unavoidable.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analyse a Poem Stanza",
        instruction: "Read the stanza. Identify two techniques used and explain the effect each creates.",
        prompts: [
          {
            text: "STANZA:\nThe last train breathed a sigh of steam\nand pulled its silver body through the dark,\na needle threading night from seam to seam,\ncarrying its cargo of the lonely-hearted.\n\nTechnique 1 and effect:",
            type: "lines",
            lines: 3,
          },
          { text: "Technique 2 and effect:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Figurative Language Technique",
        instruction: "Sort each phrase into the correct column.",
        parentTip: "Some phrases may use more than one technique — ask your child to identify the dominant one.",
        columns: ["Simile", "Metaphor", "Personification", "Imagery"],
        items: [
          { label: "The kettle sang an impatient tune." },
          { label: "His hands were maps of a long life." },
          { label: "As gentle as a morning mist." },
          { label: "The damp earth smelled of secrets." },
          { label: "Regret is a locked door." },
          { label: "The old clock ticked like a patient heart." },
          { label: "Night pulled its dark curtain across the window." },
          { label: "Pine needles carpeted the forest floor in amber and green." },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Poetry Walk",
        instruction: "Go on a walk and look at the world through a poet's eyes.",
        parentTip: "Join your child on the walk. Model how to notice small details — the texture of bark, the colour of a shadow — and turn them into images.",
        suggestions: [
          "On a 10-minute walk, collect five images — one for each sense. Write them in a notebook.",
          "Choose one object you see and write three different figurative comparisons for it — a simile, a metaphor and a personification.",
          "Write a four-line poem about one thing you observed on the walk, using at least two figurative techniques.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Transform a Dull Sentence",
        content: "Take the most boring sentence you can think of — 'The dog sat in the garden' — and transform it using simile, metaphor, personification and sensory imagery. Keep the same basic event, but make it come alive on the page.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language in Narrative",
        instruction: "Each sentence is from a narrative. Fill in the blank with appropriate figurative language.",
        sentences: [
          { text: "She stepped onto the stage, her heart beating ___ .", blanks: ["like a trapped bird / like thunder / like a drum"] },
          { text: "The old shed stood at the end of the garden, a ___ of forgotten things.", blanks: ["museum / graveyard / archive"] },
          { text: "He opened the letter slowly, as if it might ___ at him.", blanks: ["snarl / bite / leap"] },
          { text: "The morning light ___ across the rooftops, turning everything gold.", blanks: ["spilled / stretched / poured"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Which Word Creates the Strongest Image?",
        instruction: "Choose the word that creates the most vivid, specific image.",
        questions: [
          { prompt: "The river ___ over the rocks.", options: ["went", "tumbled", "moved"], answer: "tumbled" },
          { prompt: "The old woman ___ across the room.", options: ["shuffled", "walked", "went"], answer: "shuffled" },
          { prompt: "Light ___ through the curtains.", options: ["came", "moved", "filtered"], answer: "filtered" },
          { prompt: "The children ___ across the playground.", options: ["ran", "sprinted", "moved"], answer: "sprinted" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Upgrade the Paragraph",
        instruction: "The paragraph below uses only literal language. Rewrite it using at least four figurative techniques — simile, metaphor, personification, and sensory imagery. Keep the same events.",
        parentTip: "Read the original aloud first, then encourage your child to close their eyes and picture the scene before rewriting.",
        prompts: [
          {
            text: "ORIGINAL:\nIt was a hot day. Jack walked to the beach. The sand was very warm. The waves were big. The water was cold when he got in.\n\nMy rewrite:",
            type: "box",
            lines: 10,
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Show, Don't Tell",
        content: "'Show, don't tell' means instead of saying 'she was nervous', you show the reader physical signs of nervousness: 'Her hands shook. She checked the door handle three times. Every sound made her flinch.' Figurative language helps you show instead of tell — it draws the reader into the experience rather than announcing it.",
      },
      {
        type: "circle-correct" as const,
        title: "Show or Tell?",
        instruction: "Circle whether each sentence 'shows' or 'tells' the emotion or situation.",
        questions: [
          { prompt: "She was very happy.", options: ["Shows", "Tells"] },
          { prompt: "She laughed until her sides ached and tears streamed down her face.", options: ["Shows", "Tells"] },
          { prompt: "He was afraid.", options: ["Shows", "Tells"] },
          { prompt: "His mouth went dry and his palms prickled with sweat.", options: ["Shows", "Tells"] },
          { prompt: "The house was old.", options: ["Shows", "Tells"] },
          { prompt: "Paint flaked from the windowsills and the hinges wept rust.", options: ["Shows", "Tells"] },
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────
      {
        type: "open-response" as const,
        title: "'Show, Don't Tell' Practice",
        instruction: "Transform each 'tell' sentence into a 'show' passage using figurative language and sensory imagery. Write 2–3 sentences for each.",
        parentTip: "Discuss the physical sensations associated with each emotion before your child writes.",
        prompts: [
          { text: "Tell: He was embarrassed.\nShow:", type: "box", lines: 4 },
          { text: "Tell: The kitchen smelled amazing.\nShow:", type: "box", lines: 4 },
          { text: "Tell: She felt proud.\nShow:", type: "box", lines: 4 },
        ],
      },
      {
        type: "matching" as const,
        title: "Match 'Tell' Sentence to 'Show' Passage",
        instruction: "Match each 'tell' sentence on the left to the 'show' passage that conveys the same meaning.",
        left: [
          "He was furious.",
          "She was exhausted.",
          "The room was messy.",
          "It was very cold.",
        ],
        right: [
          "Her eyelids were lead weights and her feet dragged across the floor.",
          "His jaw clenched and his eyes narrowed to slits. A vein pulsed at his temple.",
          "Frost painted white ferns on the windowpane and every breath hung visible in the air.",
          "Clothes avalanched from the chair; three cereal bowls competed for space on the desk.",
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language: Literary Analysis",
        instruction: "Complete each analytical sentence with the correct term or explanation.",
        sentences: [
          { text: "The phrase 'the wind screamed' uses ___ because the wind is given a human action.", blanks: ["personification"] },
          { text: "A writer uses vivid ___ to help the reader experience the scene through all five senses.", blanks: ["imagery"] },
          { text: "When a comparison continues across an entire poem or passage, it is called an ___ metaphor.", blanks: ["extended"] },
          { text: "The word 'like' or 'as' always signals a ___ .", blanks: ["simile"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write a Nature Poem",
        instruction: "Write a poem of 8–10 lines about a feature of the Australian natural environment — beach, bush, outback, rainforest. Include at least: two similes, one metaphor, one personification, and two sensory images. Label each technique in the margin.",
        parentTip: "If your child is stuck, ask them to start by just listing ten things they notice about the environment they are describing — details will fuel the figurative language.",
        prompts: [
          { text: "My environment:", type: "lines", lines: 1 },
          { text: "My poem:", type: "box", lines: 12 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Advanced Figurative Language: True or False?",
        instruction: "Read each statement and decide if it is true or false.",
        parentTip: "These require deeper thinking — encourage your child to explain their reasoning aloud.",
        statements: [
          { text: "All metaphors involve an emotion.", answer: false },
          { text: "Effective imagery is specific and concrete rather than vague and general.", answer: true },
          { text: "A writer can use personification without using any similes.", answer: true },
          { text: "The 'show, don't tell' technique is only useful in poetry.", answer: false },
          { text: "Figurative language works best when it is familiar and expected.", answer: false },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Effect of Figurative Language on Tone",
        instruction: "Read each passage and choose how the figurative language affects the tone.",
        questions: [
          {
            prompt: "'The sun was a furnace. Every blade of grass had given up and lay flat against the cracked earth.'",
            options: [
              "Creates a joyful, celebratory tone.",
              "Creates a harsh, oppressive and exhausted tone.",
              "Creates a mysterious and suspenseful tone.",
            ],
            answer: "Creates a harsh, oppressive and exhausted tone.",
          },
          {
            prompt: "'Dawn crept in on tiptoe, painting the rooftops pink, whispering the day awake.'",
            options: [
              "Creates a threatening, dangerous tone.",
              "Creates a gentle, peaceful and tender tone.",
              "Creates a sad and mournful tone.",
            ],
            answer: "Creates a gentle, peaceful and tender tone.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Figurative Language Toolkit: Self-Assessment",
        instruction: "Review your understanding of each technique by completing the chart.",
        prompts: [
          { text: "Simile — write your own definition and give an example you created today:", type: "lines", lines: 3 },
          { text: "Metaphor — write your own definition and give an example you created today:", type: "lines", lines: 3 },
          { text: "Personification — write your own definition and give an example you created today:", type: "lines", lines: 3 },
          { text: "Imagery — write your own definition and give an example you created today:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Effect",
        instruction: "Sort each piece of figurative language by its primary effect on the reader.",
        columns: ["Creates a strong visual image", "Appeals to emotion", "Creates atmosphere/mood"],
        items: [
          { label: "'Stars lay scattered like spilled salt across the dark cloth of the sky.'" },
          { label: "'She carried her grief like an old stone, worn smooth by time.'" },
          { label: "'The house exhaled dust and the smell of years.'" },
          { label: "'The sea was a crumpled sheet of silver.'" },
          { label: "'His anger was a fire that burned without warmth.'" },
          { label: "'Rain hissed on hot pavement, filling the evening with its grey murmur.'" },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Techniques in a Model Text",
        instruction: "Read the passage. Fill in each blank in the analysis with the correct term.",
        parentTip: "Analytical writing identifies what the technique IS and what effect it creates — not just one or the other.",
        sentences: [
          { text: "In 'The moon wore a crown of clouds', the moon is given a crown, which is an example of ___ .", blanks: ["personification / metaphor"] },
          { text: "In 'The door creaked like an old man's knees', the comparison uses ___ because it includes 'like'.", blanks: ["a simile"] },
          { text: "The phrase 'the damp wool smell of the sheep pens' appeals to the sense of ___ .", blanks: ["smell"] },
          { text: "When the author writes about the storm as 'a fist striking the tin roof', this is a ___ .", blanks: ["metaphor"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Figurative Language in Non-fiction",
        content: "Figurative language is not just for poetry and fiction! Non-fiction writers use it too — to explain complex ideas (the brain is like a computer), to make writing engaging (the city was a living organism), and to help readers connect emotionally. Skilled readers notice these techniques in all types of texts.",
      },
      {
        type: "circle-correct" as const,
        title: "Figurative Language in Non-fiction Texts",
        instruction: "Circle 'Yes' if the sentence uses figurative language, 'No' if it uses only literal language.",
        questions: [
          { prompt: "The human heart pumps around 70 times per minute.", options: ["Yes — figurative", "No — literal"] },
          { prompt: "The heart is the engine of the body, keeping everything running.", options: ["Yes — figurative", "No — literal"] },
          { prompt: "Australia is a continent in the southern hemisphere.", options: ["Yes — figurative", "No — literal"] },
          { prompt: "Australia is an ancient, sun-scorched island continent.", options: ["Yes — figurative", "No — literal"] },
          { prompt: "The Great Barrier Reef stretches for 2,300 kilometres.", options: ["Yes — figurative", "No — literal"] },
          { prompt: "The Great Barrier Reef is a living cathedral beneath the sea.", options: ["Yes — figurative", "No — literal"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Figurative Language in Your Own Non-fiction",
        instruction: "Choose a topic you know well — an animal, a place, a sport. Write a paragraph of non-fiction about it that includes at least two figurative techniques. The writing must still be accurate and informative.",
        parentTip: "Good non-fiction is both accurate and engaging. Figurative language should illuminate the facts, not replace them.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "box", lines: 8 },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Opening Line to the Mood",
        instruction: "Match each opening line to the mood the figurative language creates.",
        parentTip: "Discuss how specific word choices and comparisons help create mood even in a single sentence.",
        left: [
          "'Morning broke softly, like an egg, spilling yellow light across the kitchen floor.'",
          "'Night clamped down like a jaw over the valley.'",
          "'Spring crept back into the garden, tentative as a child returning from a scolding.'",
          "'The sea roared its contempt at the cliffs, flinging itself against stone hour after hour.'",
        ],
        right: [
          "Defiant and powerful — conflict between nature and solid things.",
          "Gentle, hopeful and hesitant — new beginnings.",
          "Warm, soft and peaceful — a calm start.",
          "Dark, threatening and oppressive — a sense of being trapped.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Write a Story Opening",
        instruction: "Write the opening paragraph of a story (5–7 sentences). Your opening must use figurative language to establish the setting and mood before any character appears. Use at least three different techniques.",
        parentTip: "Great story openings make readers feel the setting before they are told about it. Model one technique together before your child writes independently.",
        prompts: [
          {
            text: "Setting (tick one):\n  [ ] A deserted school at night\n  [ ] A market on a summer morning\n  [ ] An outback road at dusk\n  [ ] My own:\n\nMy opening paragraph:",
            type: "box",
            lines: 10,
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Author Study",
        instruction: "Read a chapter of a novel you enjoy and hunt for figurative language like a detective.",
        parentTip: "Read a chapter alongside your child and share one piece of figurative language each that you noticed. Discuss why you think the author chose it.",
        suggestions: [
          "Find two similes, two metaphors and one example of personification in a chapter of your current book.",
          "Write out one piece of figurative language you found and explain in two sentences why it is effective.",
          "Try replacing one figurative phrase you found with a more literal version — then compare. Which version is stronger?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: One Object, Six Senses",
        content: "Choose one ordinary object — a mug of tea, a pencil, a shoe. Write one description for each of the five senses, then add a sixth: the emotional sense. What feeling does this object evoke? This is how poets and novelists build the world from the ground up.",
      },
      {
        type: "multiple-choice" as const,
        title: "Figurative Language: Spotting the Technique in Context",
        instruction: "Read each passage and identify the technique described.",
        parentTip: "Train your child to read slowly when analysing — underlining unfamiliar or striking phrases before labelling them.",
        questions: [
          {
            prompt: "'Grief is a long corridor with no windows.' What technique is used?",
            options: ["Simile", "Metaphor", "Onomatopoeia"],
            answer: "Metaphor",
          },
          {
            prompt: "'The sea called to her every morning, and she always answered.' What technique is used?",
            options: ["Simile", "Personification", "Hyperbole"],
            answer: "Personification",
          },
          {
            prompt: "'The new city was as foreign to him as a language he had never studied.' What technique is used?",
            options: ["Metaphor", "Simile", "Imagery"],
            answer: "Simile",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Paragraph Analysis",
        instruction: "Read the paragraph below. Identify all figurative language techniques used and explain the effect each creates for the reader.",
        prompts: [
          {
            text: "PASSAGE:\nThe library was a sleeping giant — vast, silent, breathing through its yellowed pages. Dust motes drifted like tiny planets in the shaft of afternoon light. Every shelf was a time machine, each spine a doorway. She moved through it slowly, reverently, as if walking through a forest of old growth trees.\n\nTechnique 1 and effect:",
            type: "lines",
            lines: 3,
          },
          { text: "Technique 2 and effect:", type: "lines", lines: 3 },
          { text: "Technique 3 and effect:", type: "lines", lines: 3 },
        ],
      },
      // ── EXTENDING (81–100) ───────────────────────────────────────────────
      {
        type: "tip" as const,
        title: "Tip: Synaesthesia in Language",
        content: "Synaesthesia is mixing the senses — describing a colour as loud, a sound as sharp and blue, a smell as scratchy. This unusual technique creates startling, memorable imagery. Poets like Keats and Rimbaud used it deliberately. You can too!",
      },
      {
        type: "open-response" as const,
        title: "Synaesthesia Sentences",
        instruction: "Write five sentences that mix the senses — describe a sound as a colour, a smell as a texture, a taste as a sound. Be bold and unexpected.",
        parentTip: "This is deliberately strange — celebrate the weirdness. The goal is to create an image so unexpected that it makes the reader stop and think.",
        prompts: [
          { text: "1. That sound is the colour ...", type: "lines", lines: 2 },
          { text: "2. The smell of rain feels like ...", type: "lines", lines: 2 },
          { text: "3. Her laughter tasted like ...", type: "lines", lines: 2 },
          { text: "4. The music looked like ...", type: "lines", lines: 2 },
          { text: "5. Silence smells like ...", type: "lines", lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Figurative Language: Effect and Purpose",
        instruction: "For each passage, select the best analysis of what the figurative language achieves.",
        parentTip: "Push your child to think about WHY a writer made specific choices, not just WHAT technique was used.",
        questions: [
          {
            prompt: "'Australia stretched before the first explorers like a vast, indifferent question.' (from a history text)",
            options: [
              "The simile shows Australia was small and knowable.",
              "The simile suggests the continent was immense and mysterious — possibly unanswerable — giving the reader a sense of awe and uncertainty.",
              "The metaphor says Australia was literally a question.",
            ],
            answer: "The simile suggests the continent was immense and mysterious — possibly unanswerable — giving the reader a sense of awe and uncertainty.",
          },
          {
            prompt: "'Memory is a faulty film projector — it drops frames, reverses scenes, adds light where there was shadow.'",
            options: [
              "The extended metaphor makes the abstract idea of memory concrete and helps the reader understand how unreliable memories can be.",
              "The simile compares memory to a film.",
              "The sentence describes a literal projector.",
            ],
            answer: "The extended metaphor makes the abstract idea of memory concrete and helps the reader understand how unreliable memories can be.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write a Personal Essay Opening Using Figurative Language",
        instruction: "Write the opening of a personal essay about a significant memory — a place, an event, a person who matters to you. Use figurative language deliberately to convey emotion as well as description. Write 8–10 sentences.",
        parentTip: "A personal essay opening should make the reader feel something immediately. Encourage your child to think about what emotion they want the reader to experience first.",
        prompts: [
          { text: "My memory:", type: "lines", lines: 1 },
          { text: "My essay opening:", type: "box", lines: 12 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Critical Thinking: Figurative Language",
        instruction: "Consider each statement carefully and decide true or false.",
        parentTip: "Some of these require your child to think critically about when and why figurative language can fail — an important advanced skill.",
        statements: [
          { text: "Using too much figurative language in a single paragraph can overwhelm the reader.", answer: true },
          { text: "The purpose of figurative language is always to make writing more complicated.", answer: false },
          { text: "A metaphor that is extended inconsistently can confuse rather than illuminate.", answer: true },
          { text: "Figurative language is a tool — choosing not to use it can sometimes be the most powerful choice.", answer: true },
          { text: "Any figurative language is better than no figurative language.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Peer Review: Evaluate Figurative Language",
        instruction: "Read the passage. Write a detailed evaluation: what figurative techniques are used, how effective each is, and what you would change or strengthen if you were the editor.",
        parentTip: "Encourage your child to be specific and constructive — not just 'it is good' but 'the metaphor in line 2 works because ...'",
        prompts: [
          {
            text: "PASSAGE:\nThe city was loud. Cars honked like angry geese. The office building stood tall. Workers moved like ants in and out of the doors. At lunchtime the plaza filled with people and noise.\n\nMy evaluation:",
            type: "box",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rewrite the Passage with Elevated Figurative Language",
        instruction: "Take the same passage from the previous activity and rewrite it with richer, more sophisticated figurative language. Keep the same content and events — only improve the language.",
        prompts: [
          { text: "My improved version:", type: "box", lines: 12 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Rank the Figurative Language by Effectiveness",
        instruction: "Sort these descriptions of a sunrise from 'Least effective' to 'Most effective' and explain your ranking on the lines below.",
        parentTip: "Discuss the criteria for effectiveness: specificity, originality, how strongly it evokes a sensory or emotional response.",
        columns: ["Less effective", "More effective"],
        items: [
          { label: "The sun came up. It was pretty." },
          { label: "The sun rose like a big orange ball." },
          { label: "The sun rose slowly and beautifully over the hills." },
          { label: "Dawn bled red across the hills, the sun climbing hand over hand through the clouds." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write a Complete Poem: Your Choice",
        instruction: "Write a poem of 12–16 lines on any topic you choose. Your poem must include: at least two similes, at least two metaphors, at least one example of personification, at least three distinct sensory images, and at least one fresh comparison that avoids all clichés. Label each technique.",
        parentTip: "This is the culminating piece — allow time and space. Read the finished poem aloud together. Celebrate the craft.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My poem:", type: "box", lines: 18 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Poet in Residence — Extended Project",
        instruction: "Spend the week creating a small illustrated poetry collection of three poems using all the figurative language techniques from this unit.",
        parentTip: "Display the finished collection proudly. Writing for an audience — even just family — transforms how students approach craft.",
        suggestions: [
          "Write one poem about an Australian place or animal, using at least four figurative techniques.",
          "Write one poem about an emotion, using only metaphors — no similes allowed.",
          "Write one poem using personification throughout — give a whole ecosystem (forest, reef, outback) a human voice.",
          "Illustrate each poem with a drawing or collage inspired by the imagery.",
          "Read all three poems aloud to a family member and ask them to identify their favourite image from each.",
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Literary Analysis: Figurative Language in Australian Writing",
        instruction: "Read the passage from an Australian text and choose the best analysis.",
        parentTip: "Reading Australian literature specifically builds cultural literacy alongside language skills.",
        questions: [
          {
            prompt: "'The plains rolled like a tawny sea to the horizon — dry, endless, unhurried.' What does the simile achieve?",
            options: [
              "It helps the reader visualise the vast, flat landscape by comparing it to something equally vast and moving — the sea.",
              "It says the plains are literally the sea.",
              "It uses 'like' to show the plains were wet.",
            ],
            answer: "It helps the reader visualise the vast, flat landscape by comparing it to something equally vast and moving — the sea.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Create an Imagery Glossary",
        instruction: "Create a personal glossary of 10 figurative language examples from your own writing this unit. For each, write: the example, the technique, and what effect you were trying to create.",
        parentTip: "A personal glossary of favourite figurative language helps writers build a repertoire they can draw on in future writing.",
        prompts: [
          { text: "1. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "2. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "3. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "4. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "5. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "6. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "7. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "8. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "9. Example | Technique | Effect:", type: "lines", lines: 2 },
          { text: "10. Example | Technique | Effect:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Unexpected Comparison",
        content: "The best figurative language surprises you. Challenge: write five comparisons that no one has ever written before. They must be completely original — specific to your life, your world, the things only you have noticed. These are your unique images. Keep them.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "circle-correct" as const,
        title: "Choose the Correct Verb — Round 1",
        instruction: "Circle the verb form that agrees with the subject pronoun.",
        questions: [
          { prompt: "She ___ to school every day.", options: ["walk", "walks", "walking"] },
          { prompt: "They ___ finished their lunch.", options: ["has", "have", "having"] },
          { prompt: "He ___ not know the answer.", options: ["do", "does", "done"] },
          { prompt: "We ___ going to the beach tomorrow.", options: ["is", "are", "was"] },
          { prompt: "It ___ raining since this morning.", options: ["have been", "has been", "were"] },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Pronoun–Verb Agreement Chart",
        instruction: "Complete each sentence by filling in the correct form of the verb 'be' (am / is / are).",
        parentTip: "Make a reference chart together: I am, you are, he/she/it is, we/they are. Keep it visible.",
        sentences: [
          { text: "I ___ ready for school.", blanks: ["am"] },
          { text: "She ___ my best friend.", blanks: ["is"] },
          { text: "They ___ playing outside.", blanks: ["are"] },
          { text: "He ___ the tallest student.", blanks: ["is"] },
          { text: "We ___ going to the museum.", blanks: ["are"] },
          { text: "It ___ a very hot day.", blanks: ["is"] },
        ],
      },
      {
        type: "true-false" as const,
        title: "Correct or Incorrect?",
        instruction: "Read each sentence. Circle true if the pronoun–verb agreement is correct, false if it is wrong.",
        parentTip: "Read each sentence aloud — incorrect agreement usually sounds wrong when spoken.",
        statements: [
          { text: "'She run every morning.' — This is grammatically correct.", answer: false },
          { text: "'They are at the library.' — This is grammatically correct.", answer: true },
          { text: "'He have a dog named Rex.' — This is grammatically correct.", answer: false },
          { text: "'We were late for school.' — This is grammatically correct.", answer: true },
          { text: "'I am going to the park.' — This is grammatically correct.", answer: true },
          { text: "'They was watching television.' — This is grammatically correct.", answer: false },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Choose the Correct Verb — Round 2",
        instruction: "Circle the verb form that agrees with the subject pronoun.",
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
        type: "multiple-choice" as const,
        title: "Which Sentence Is Correct?",
        instruction: "Choose the sentence with correct pronoun–verb agreement.",
        questions: [
          { prompt: "Which is correct?", options: ["She don't like spinach.", "She doesn't like spinach.", "She not like spinach."], answer: "She doesn't like spinach." },
          { prompt: "Which is correct?", options: ["They was at the beach.", "They were at the beach.", "They be at the beach."], answer: "They were at the beach." },
          { prompt: "Which is correct?", options: ["He have a pet turtle.", "He has a pet turtle.", "He having a pet turtle."], answer: "He has a pet turtle." },
          { prompt: "Which is correct?", options: ["I are hungry.", "I is hungry.", "I am hungry."], answer: "I am hungry." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Fix the Errors — Round 1",
        instruction: "Each sentence has a pronoun–verb agreement error. Rewrite the sentence correctly.",
        parentTip: "Ask your child to find the pronoun first, then check whether the verb matches.",
        prompts: [
          { text: "1. They was at the park all afternoon.\nCorrect:", type: "lines", lines: 2 },
          { text: "2. She don't like broccoli.\nCorrect:", type: "lines", lines: 2 },
          { text: "3. He have a pet lizard named Spike.\nCorrect:", type: "lines", lines: 2 },
          { text: "4. We was late for the movie.\nCorrect:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Verb 'Have' — Correct Form",
        instruction: "Fill in the correct form of 'have' (have / has) for each pronoun.",
        sentences: [
          { text: "I ___ three pets.", blanks: ["have"] },
          { text: "She ___ a red bicycle.", blanks: ["has"] },
          { text: "They ___ finished the game.", blanks: ["have"] },
          { text: "He ___ a cold today.", blanks: ["has"] },
          { text: "We ___ a new neighbour.", blanks: ["have"] },
          { text: "It ___ been raining all week.", blanks: ["has"] },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort: Singular or Plural Pronoun?",
        instruction: "Sort each pronoun into 'Singular' or 'Plural'.",
        parentTip: "Understanding singular vs plural is the foundation of pronoun–verb agreement.",
        columns: ["Singular", "Plural"],
        items: [
          { label: "I" },
          { label: "we" },
          { label: "she" },
          { label: "they" },
          { label: "he" },
          { label: "you (one person)" },
          { label: "you (a group)" },
          { label: "it" },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Verb 'Do' / 'Does' — Choose Correctly",
        instruction: "Circle the correct form of 'do' or 'does' for each pronoun.",
        questions: [
          { prompt: "She ___ her homework every afternoon.", options: ["do", "does"] },
          { prompt: "They ___ not agree.", options: ["do", "does"] },
          { prompt: "He ___ the washing up after dinner.", options: ["do", "does"] },
          { prompt: "We ___ our best each day.", options: ["do", "does"] },
          { prompt: "It ___ not matter.", options: ["do", "does"] },
          { prompt: "I ___ not know the answer.", options: ["do", "does"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Pronoun–Verb Agreement: Write Your Own Sentences",
        instruction: "Write one correct sentence for each pronoun. The sentence must show clear pronoun–verb agreement.",
        prompts: [
          { text: "I ...", type: "lines", lines: 2 },
          { text: "She ...", type: "lines", lines: 2 },
          { text: "He ...", type: "lines", lines: 2 },
          { text: "We ...", type: "lines", lines: 2 },
          { text: "They ...", type: "lines", lines: 2 },
          { text: "It ...", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Past Tense Agreement — 'Was' or 'Were'?",
        instruction: "Fill in 'was' or 'were' to complete each sentence correctly.",
        parentTip: "A simple rule: 'was' goes with I / he / she / it; 'were' goes with you / we / they.",
        sentences: [
          { text: "She ___ at school yesterday.", blanks: ["was"] },
          { text: "They ___ very excited about the carnival.", blanks: ["were"] },
          { text: "I ___ tired after the long walk.", blanks: ["was"] },
          { text: "We ___ the first family to arrive.", blanks: ["were"] },
          { text: "He ___ the winner of the race.", blanks: ["was"] },
          { text: "You ___ right about the weather.", blanks: ["were"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Present Tense Agreement",
        instruction: "Choose the correct present tense verb.",
        questions: [
          { prompt: "She ___ in Year 4.", options: ["study", "studies", "studying"], answer: "studies" },
          { prompt: "They ___ to school by bus.", options: ["go", "goes", "going"], answer: "go" },
          { prompt: "He ___ his dog every morning.", options: ["walk", "walks", "walking"], answer: "walks" },
          { prompt: "We ___ lunch at noon.", options: ["eat", "eats", "eating"], answer: "eat" },
          { prompt: "It ___ a lot in April.", options: ["rain", "rains", "raining"], answer: "rains" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Error Hospital — Find and Fix",
        instruction: "Read the paragraph. Find every pronoun–verb agreement error and rewrite the paragraph correctly below.",
        parentTip: "Ask your child to underline every pronoun first, then check each matching verb.",
        prompts: [
          {
            text: "ERROR PARAGRAPH:\nMy sister and I loves going to the beach. She always run into the water first. I am more careful and checks the waves before going in. We was there last Saturday and the waves was enormous. They was crashing so loudly that we couldn't hear each other speak.\n\nCorrected paragraph:",
            type: "box",
            lines: 8,
          },
        ],
      },
      {
        type: "true-false" as const,
        title: "Pronoun–Verb Agreement Rules: True or False?",
        instruction: "Read each grammar rule and decide if it is true or false.",
        statements: [
          { text: "Singular pronouns (he, she, it) use the -s form in the present tense: 'she runs'.", answer: true },
          { text: "'They was' is correct Standard Australian English.", answer: false },
          { text: "'I am' and 'you are' are both correct in Standard Australian English.", answer: true },
          { text: "'He do' is the correct form in formal writing.", answer: false },
          { text: "The pronoun 'it' uses 'is' in the present tense.", answer: true },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The -s Rule for He, She and It",
        content: "In the present tense, when the subject is 'he', 'she' or 'it', add -s (or -es) to the verb: she runs, he watches, it goes. But with 'I', 'you', 'we' or 'they', do NOT add -s: I run, you watch, they go. This is one of the most common error patterns in written English.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Apply the -s Rule",
        instruction: "Fill in the correct present tense form of the verb in brackets.",
        sentences: [
          { text: "She ___ [read] for one hour every night.", blanks: ["reads"] },
          { text: "They ___ [play] tennis on Saturdays.", blanks: ["play"] },
          { text: "He ___ [catch] the bus at 8 a.m.", blanks: ["catches"] },
          { text: "We ___ [finish] school at 3 p.m.", blanks: ["finish"] },
          { text: "It ___ [take] twenty minutes to walk there.", blanks: ["takes"] },
          { text: "I ___ [love] Wednesdays.", blanks: ["love"] },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Perfect Tense: Has or Have?",
        instruction: "Circle the correct form of 'has' or 'have' to form the perfect tense.",
        questions: [
          { prompt: "She ___ already eaten.", options: ["has", "have"] },
          { prompt: "They ___ gone to the museum.", options: ["has", "have"] },
          { prompt: "I ___ finished my work.", options: ["has", "have"] },
          { prompt: "He ___ won the competition.", options: ["has", "have"] },
          { prompt: "We ___ never seen the ocean.", options: ["has", "have"] },
          { prompt: "It ___ been a long day.", options: ["has", "have"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write a Paragraph About Your Day",
        instruction: "Write a short paragraph (5–6 sentences) about a typical day. Use at least five different subject pronouns — I, you, he, she, we, they. Underline each pronoun and circle the matching verb.",
        parentTip: "This lets you see at a glance which pronouns your child is confident with and which they avoid.",
        prompts: [{ text: "My paragraph:", type: "box", lines: 10 }],
      },
      {
        type: "home-activity" as const,
        title: "Grammar in the Wild — Week 1",
        instruction: "Hunt for pronoun–verb agreement patterns in everyday language.",
        parentTip: "Gentle modelling is more effective than correction. If your child makes an error in speech, echo the correct form naturally in your reply.",
        suggestions: [
          "Listen for pronoun–verb agreement errors in TV shows, conversations or books. Jot down any you hear.",
          "Write five sentences about your family members using a different pronoun each time.",
          "Find a paragraph in a library book and underline every pronoun — then verify each verb is correct.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Agreement Anchor Chart",
        content: "Create a colourful reference chart for your wall. In the centre write 'Subject–Verb Agreement'. Then write each pronoun with its correct forms of 'be', 'have' and 'do' in different colours. Decorate it and keep it visible as you write!",
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response" as const,
        title: "Fix the Errors — Round 2",
        instruction: "Each sentence has a pronoun–verb agreement error. Rewrite it correctly.",
        parentTip: "By now your child should be diagnosing the error before rewriting — ask them to explain what is wrong first.",
        prompts: [
          { text: "1. It have been a difficult week.\nCorrect:", type: "lines", lines: 2 },
          { text: "2. You is coming to the party, aren't you?\nCorrect:", type: "lines", lines: 2 },
          { text: "3. She don't understand fractions.\nCorrect:", type: "lines", lines: 2 },
          { text: "4. We was supposed to bring our own lunch.\nCorrect:", type: "lines", lines: 2 },
          { text: "5. They has decided to build a cubby house.\nCorrect:", type: "lines", lines: 2 },
          { text: "6. He were the only one who knew the answer.\nCorrect:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort: Correct or Incorrect Agreement?",
        instruction: "Sort each sentence into 'Correct agreement' or 'Incorrect agreement'.",
        columns: ["Correct agreement", "Incorrect agreement"],
        items: [
          { label: "She has three older brothers." },
          { label: "They was playing chess." },
          { label: "He doesn't eat meat." },
          { label: "We am going on holiday." },
          { label: "I am the youngest in my family." },
          { label: "It don't matter." },
          { label: "They have finished the project." },
          { label: "She were chosen as team captain." },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Mixed Verb Forms",
        instruction: "Fill in the correct form of the verb in brackets.",
        sentences: [
          { text: "She ___ [be – past tense] the winner.", blanks: ["was"] },
          { text: "They ___ [go – present tense] to gymnastics on Tuesdays.", blanks: ["go"] },
          { text: "I ___ [have – perfect tense] never tried surfing.", blanks: ["have"] },
          { text: "He ___ [do – present tense] not enjoy maths.", blanks: ["does"] },
          { text: "We ___ [be – past tense] away for two weeks.", blanks: ["were"] },
          { text: "It ___ [be – present tense] important to be kind.", blanks: ["is"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Pronoun–Verb Agreement in Questions",
        instruction: "Choose the correctly formed question.",
        parentTip: "In questions, the verb often comes before the subject — remind your child the same agreement rules apply.",
        questions: [
          { prompt: "Choose the correct question:", options: ["Does she like music?", "Do she like music?", "Doing she like music?"], answer: "Does she like music?" },
          { prompt: "Choose the correct question:", options: ["Were they at home?", "Was they at home?", "Be they at home?"], answer: "Were they at home?" },
          { prompt: "Choose the correct question:", options: ["Have you finished?", "Has you finished?", "Having you finished?"], answer: "Have you finished?" },
          { prompt: "Choose the correct question:", options: ["Does it hurt?", "Do it hurt?", "Is it hurt?"], answer: "Does it hurt?" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Pronoun–Verb Agreement in Questions",
        instruction: "Write four questions — one for each pronoun given. Make sure the verb agrees.",
        prompts: [
          { text: "A question with 'she' as subject:", type: "lines", lines: 2 },
          { text: "A question with 'they' as subject:", type: "lines", lines: 2 },
          { text: "A question with 'he' as subject:", type: "lines", lines: 2 },
          { text: "A question with 'it' as subject:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Negative Sentences: Choose Correctly",
        instruction: "Circle the correct negative form.",
        questions: [
          { prompt: "She ___ eat meat.", options: ["don't", "doesn't", "aren't"] },
          { prompt: "They ___ finished yet.", options: ["hasn't", "haven't", "isn't"] },
          { prompt: "He ___ understand.", options: ["don't", "doesn't", "didn't understand"] },
          { prompt: "We ___ agree.", options: ["doesn't", "don't", "isn't"] },
          { prompt: "It ___ matter.", options: ["don't", "doesn't", "aren't"] },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Irregular Verbs — Agreement",
        instruction: "Fill in the correct present tense form of each irregular verb.",
        parentTip: "Irregular verbs don't follow the standard -s pattern — they must be learned. Have fun practising them!",
        sentences: [
          { text: "She ___ [go] to karate on Fridays.", blanks: ["goes"] },
          { text: "He ___ [have] a gecko as a pet.", blanks: ["has"] },
          { text: "They ___ [do] their best.", blanks: ["do"] },
          { text: "She ___ [be] very organised.", blanks: ["is"] },
          { text: "It ___ [make] a loud humming noise.", blanks: ["makes"] },
          { text: "We ___ [know] the answer.", blanks: ["know"] },
        ],
      },
      {
        type: "true-false" as const,
        title: "Negatives and Questions: True or False?",
        instruction: "Read each statement about pronoun–verb agreement in negatives and questions.",
        statements: [
          { text: "'She doesn't' is the correct negative for 'she + do'.", answer: true },
          { text: "'They doesn't know' is correct.", answer: false },
          { text: "In a question, the verb must still agree with the pronoun subject.", answer: true },
          { text: "'Does he?' and 'Do they?' are both correct question forms.", answer: true },
          { text: "'I doesn't' is ever correct in Standard Australian English.", answer: false },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Standard and Non-standard English",
        content: "You might hear people say 'they was', 'she don't' or 'we was' in informal conversation — these are examples of non-standard English. They are understood perfectly, but in formal writing (school work, letters, essays), Standard Australian English requires correct pronoun–verb agreement. Both forms have their place — knowing which to use is a key skill.",
      },
      {
        type: "sorting" as const,
        title: "Standard or Non-standard English?",
        instruction: "Sort each sentence into 'Standard English' or 'Non-standard English'.",
        parentTip: "Discuss that neither is 'wrong' in all contexts — formal writing requires standard forms.",
        columns: ["Standard English", "Non-standard English"],
        items: [
          { label: "We were late for the bus." },
          { label: "We was late for the bus." },
          { label: "She doesn't like tomatoes." },
          { label: "She don't like tomatoes." },
          { label: "They have already eaten." },
          { label: "They has already eaten." },
          { label: "He is very tall." },
          { label: "He are very tall." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Proofread Your Own Writing",
        instruction: "Take a piece of writing you have done recently. Read through it and underline every pronoun. For each one, check the verb agrees. List any errors you find and their corrections below.",
        prompts: [
          { text: "Source text (title or description):", type: "lines", lines: 1 },
          { text: "Errors I found and corrections:", type: "box", lines: 8 },
          { text: "Total errors found:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Agreement in Longer Sentences",
        instruction: "Circle the correct verb. Watch out — the subject and verb may be separated by other words.",
        parentTip: "The trick is to find the SUBJECT first, ignoring any words between subject and verb.",
        questions: [
          { prompt: "The team of students ___ working very hard.", options: ["is", "are"] },
          { prompt: "My friend, along with her cousins, ___ coming to the party.", options: ["is", "are"] },
          { prompt: "The box of chocolates ___ disappeared overnight.", options: ["has", "have"] },
          { prompt: "The dogs in the park ___ barking at the birds.", options: ["was", "were"] },
          { prompt: "Everyone in the class ___ finished the test.", options: ["has", "have"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Tricky Subjects: Collective Nouns",
        instruction: "Choose the correct verb for these tricky subject types.",
        parentTip: "Collective nouns (team, class, family) are usually treated as singular in Australian English.",
        questions: [
          { prompt: "The class ___ on a field trip today.", options: ["are", "is", "were"], answer: "is" },
          { prompt: "The family ___ arrived at the airport.", options: ["have", "has", "were"], answer: "has" },
          { prompt: "The flock of birds ___ flying south.", options: ["are", "is", "were"], answer: "is" },
          { prompt: "A group of students ___ waiting outside.", options: ["are", "is", "was"], answer: "is" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Error Hospital — Paragraph Level",
        instruction: "Read the paragraph. Find every pronoun–verb agreement error and rewrite the paragraph correctly.",
        prompts: [
          {
            text: "PARAGRAPH:\nLast weekend my friends and I goes to the science museum. It were fantastic. She — that is my friend Maya — have never seen the dinosaur exhibition before. We was there for three hours and doesn't want to leave. Even the security guard, who usually don't smile, were laughing at the interactive volcano display.\n\nCorrected paragraph:",
            type: "box",
            lines: 10,
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Future Tense Agreement",
        instruction: "Fill in 'will' or the correct 'going to' form for each sentence.",
        sentences: [
          { text: "She ___ visit her grandparents next week.", blanks: ["will"] },
          { text: "They ___ compete in the swimming carnival.", blanks: ["will"] },
          { text: "He is ___ to study medicine.", blanks: ["going"] },
          { text: "We ___ need more time.", blanks: ["will"] },
          { text: "It ___ be a warm day tomorrow.", blanks: ["will"] },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar in the Wild — Week 2",
        instruction: "Continue hunting for pronoun–verb agreement in the texts and conversations around you.",
        parentTip: "Challenge yourselves to find an example of both correct and non-standard agreement in real-world language this week.",
        suggestions: [
          "Write ten sentences about your favourite sports team or hobby — vary the pronouns and tenses.",
          "Watch a TV programme and note three sentences where the presenter uses clear pronoun–verb agreement.",
          "Create a mini quiz: write five sentences with errors and five without. Test a family member.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Deliberate Errors",
        content: "Write a short story — 5 sentences — that is completely WRONG. Every pronoun must have the wrong verb. Then swap with a family member and race to find and fix every error. Who is the fastest proofreader?",
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────
      {
        type: "open-response" as const,
        title: "Write a Narrative Using All Six Pronouns",
        instruction: "Write a short narrative (8–10 sentences) that includes all six subject pronouns: I, you, he, she, we, they. Each pronoun must be used with a correctly agreeing verb. Underline each pronoun–verb pair.",
        parentTip: "This is harder than it sounds — getting all six pronouns naturally into one passage requires planning. Discuss the scenario together first.",
        prompts: [{ text: "My narrative:", type: "box", lines: 12 }],
      },
      {
        type: "fill-in-blank" as const,
        title: "Agreement Across Tenses",
        instruction: "Fill in the correct verb form. Each sentence specifies the tense.",
        sentences: [
          { text: "[Present] She ___ the piano every evening.", blanks: ["plays"] },
          { text: "[Past] They ___ at the cinema on Saturday.", blanks: ["were"] },
          { text: "[Perfect] He ___ eaten breakfast.", blanks: ["has"] },
          { text: "[Present] We ___ not agree.", blanks: ["do"] },
          { text: "[Past] I ___ the last one to arrive.", blanks: ["was"] },
          { text: "[Perfect] They ___ not yet decided.", blanks: ["have"] },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Indefinite Pronoun Agreement",
        instruction: "Circle the correct verb for each indefinite pronoun subject.",
        parentTip: "Indefinite pronouns like 'everyone', 'nobody', 'each', 'anyone' are usually treated as singular.",
        questions: [
          { prompt: "Everyone ___ welcome.", options: ["is", "are"] },
          { prompt: "Nobody ___ the answer.", options: ["know", "knows"] },
          { prompt: "Each student ___ a pen.", options: ["need", "needs"] },
          { prompt: "Someone ___ left their bag in the hall.", options: ["have", "has"] },
          { prompt: "Anything ___ better than nothing.", options: ["are", "is"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Complex Agreement — Choose Correctly",
        instruction: "Choose the sentence with correct pronoun–verb agreement.",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: [
              "Neither she nor he were ready.",
              "Neither she nor he was ready.",
              "Neither she nor he are ready.",
            ],
            answer: "Neither she nor he was ready.",
          },
          {
            prompt: "Which sentence is correct?",
            options: [
              "Either she or they is coming.",
              "Either she or they are coming.",
              "Either she or they was coming.",
            ],
            answer: "Either she or they are coming.",
          },
        ],
      },
      {
        type: "true-false" as const,
        title: "Pronoun–Verb Agreement: Advanced Rules",
        instruction: "Read each rule and decide if it is true or false.",
        statements: [
          { text: "Indefinite pronouns like 'everyone' and 'nobody' take singular verbs.", answer: true },
          { text: "When two subjects are joined by 'or', the verb agrees with the nearer subject.", answer: true },
          { text: "Collective nouns always take plural verbs in Australian English.", answer: false },
          { text: "Pronoun–verb agreement applies in questions and negative sentences.", answer: true },
          { text: "'She doesn't' is correct but 'they doesn't' is also correct.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write a Formal Letter Using Correct Agreement",
        instruction: "Write a short formal letter (6–8 sentences) to a community organisation asking for information about one of their programmes. Use at least four different pronouns and ensure all verbs agree. Include a greeting and a closing.",
        parentTip: "Formal letters are an excellent context for practising standard English — the stakes feel real.",
        prompts: [{ text: "My formal letter:", type: "box", lines: 12 }],
      },
      {
        type: "sorting" as const,
        title: "Sort Sentences by Tense",
        instruction: "Sort each sentence into the correct tense column.",
        columns: ["Present tense", "Past tense", "Perfect tense"],
        items: [
          { label: "She has been studying all afternoon." },
          { label: "They were at the pool." },
          { label: "He goes to rugby training." },
          { label: "We have arrived early." },
          { label: "I am the tallest in the class." },
          { label: "You were very kind." },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Pronoun–Verb Agreement in Your Own Editing",
        content: "When you proofread your writing, do a 'pronoun sweep': read through once and underline every pronoun. Then for each underlined pronoun, read just the pronoun and its verb aloud. Does it sound right? This single-focus editing technique catches agreement errors that are easy to miss in a full read.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Pronoun–Verb in Reported Speech",
        instruction: "Fill in the correct verb form in these reported speech sentences.",
        parentTip: "In reported speech, the verb often changes tense — but agreement with the pronoun must still be correct.",
        sentences: [
          { text: "She said that she ___ tired.", blanks: ["was"] },
          { text: "He told us that they ___ not coming.", blanks: ["were"] },
          { text: "I explained that we ___ already finished.", blanks: ["had"] },
          { text: "She reported that it ___ been a mistake.", blanks: ["had"] },
          { text: "He announced that she ___ won the prize.", blanks: ["had"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Error Analysis: Explain the Error",
        instruction: "For each incorrect sentence, explain what the agreement error is and why it is wrong. Then write the correct form.",
        prompts: [
          { text: "'He don't play sport.'\nExplanation:\nCorrect form:", type: "lines", lines: 3 },
          { text: "'They was the last team to finish.'\nExplanation:\nCorrect form:", type: "lines", lines: 3 },
          { text: "'I are going to the library.'\nExplanation:\nCorrect form:", type: "lines", lines: 3 },
          { text: "'She have three cats.'\nExplanation:\nCorrect form:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Pronoun–Verb Agreement in Academic Writing",
        instruction: "Choose the correctly formed academic sentence.",
        parentTip: "Academic writing — essays, reports — requires consistently correct agreement. Model academic phrasing together.",
        questions: [
          {
            prompt: "Which is correct in an essay?",
            options: [
              "Research suggests that exercise improves focus.",
              "Research suggest that exercise improve focus.",
              "Research are suggesting that exercise improves focus.",
            ],
            answer: "Research suggests that exercise improves focus.",
          },
          {
            prompt: "Which is correct in a report?",
            options: [
              "The results shows that students benefited.",
              "The results show that students benefited.",
              "The results showing that students benefited.",
            ],
            answer: "The results show that students benefited.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Pronoun–Verb Agreement: Explain a Rule to a Younger Student",
        instruction: "Imagine you are explaining pronoun–verb agreement to a Year 2 student. Write a simple explanation (4–5 sentences) using examples that a younger child would understand.",
        parentTip: "Explaining something clearly to others is one of the best ways to consolidate understanding.",
        prompts: [{ text: "My explanation:", type: "box", lines: 8 }],
      },
      {
        type: "home-activity" as const,
        title: "Grammar Detective — Advanced Hunt",
        instruction: "Go on an advanced grammar detective hunt through a non-fiction text.",
        parentTip: "Non-fiction texts provide excellent models of consistent, correct pronoun–verb agreement in formal written English.",
        suggestions: [
          "Find a newspaper article and identify every pronoun–verb pair. Are they all correct?",
          "Write a 10-sentence paragraph about a topic from your curriculum using every pronoun at least once.",
          "Create a matching card game: pronouns on one card, correct present tense verb forms on another. Shuffle and match.",
          "Make up a silly story where you deliberately use ONLY 'she' and 'he' — and make all verbs agree!",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Grammar Game Show",
        content: "Create your own game show called 'Does It Agree?' Write 10 question cards — each has a pronoun and a verb. The contestant must say 'Agree!' or 'Error!' and give the correction. Play it with a family member. Award a point for each correct answer!",
      },
      // ── EXTENDING (81–100) ───────────────────────────────────────────────
      {
        type: "open-response" as const,
        title: "Write a Dialogue Using Correct Agreement Throughout",
        instruction: "Write a dialogue between three characters (give them names) of 10–12 lines. Every pronoun must have a correctly agreeing verb. Include questions, negatives and at least two different tenses.",
        parentTip: "Dialogue is particularly good for practising questions and negatives — both of which require pronoun–verb agreement.",
        prompts: [{ text: "My dialogue:", type: "box", lines: 14 }],
      },
      {
        type: "fill-in-blank" as const,
        title: "Subject–Verb Agreement: Complex Sentences",
        instruction: "Fill in the correct verb form in each complex sentence.",
        parentTip: "In complex sentences, subordinate clauses may contain additional pronouns — each must agree with its own verb.",
        sentences: [
          { text: "Although she ___ tired, she completed the assignment.", blanks: ["was"] },
          { text: "They ___ finished before he ___ even started.", blanks: ["had", "had"] },
          { text: "Whenever it ___, the garden floods.", blanks: ["rains"] },
          { text: "I ___ always careful, even when they ___ not.", blanks: ["am", "are"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Pronoun–Verb Agreement Across Word Types",
        instruction: "Choose the correct option in each sentence.",
        questions: [
          {
            prompt: "She is one of those students who ___ every challenge.",
            options: ["embraces", "embrace", "embracing"],
            answer: "embrace",
          },
          {
            prompt: "It is the teachers who ___ made the biggest difference.",
            options: ["has", "have", "having"],
            answer: "have",
          },
          {
            prompt: "The reason she left ___ unknown.",
            options: ["remain", "remains", "remaining"],
            answer: "remains",
          },
        ],
      },
      {
        type: "true-false" as const,
        title: "Subject–Verb Agreement in Complex Contexts",
        instruction: "Read each statement about grammar in complex sentences.",
        statements: [
          { text: "A relative clause (who, which, that) takes a verb that agrees with its own subject.", answer: true },
          { text: "In the sentence 'It is the students who make this school great', 'make' agrees with 'students'.", answer: true },
          { text: "A parenthetical phrase (e.g. 'along with her friends') changes the number of the main subject.", answer: false },
          { text: "'The news are good' is correct because 'news' sounds plural.", answer: false },
          { text: "In formal writing, 'data' is often treated as a plural noun (the data show).", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Edit a Passage for Agreement Errors",
        instruction: "The passage below contains five pronoun–verb agreement errors. Find them all, explain each error, and write the corrected version.",
        parentTip: "Editing for a specific error type — rather than general editing — is a highly effective skill-building technique.",
        prompts: [
          {
            text: "PASSAGE:\nMy grandmother have always been my greatest inspiration. She were the first woman in her family to attend university. Every evening she sits at the kitchen table and she read to me from her favourite books. She say that stories is the most important things a person can collect. I thinks she is right.\n\nErrors found (list each one):",
            type: "box",
            lines: 8,
          },
          { text: "Corrected passage:", type: "box", lines: 8 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Why Agreement Matters in Formal Writing",
        content: "Pronoun–verb agreement errors in formal writing can undermine the reader's confidence in the writer — even when the ideas are excellent. Editors at newspapers, publishers and government agencies specifically look for agreement errors. The good news: once you understand the patterns, a 'pronoun sweep' during editing takes less than a minute and catches almost all of them.",
      },
      {
        type: "open-response" as const,
        title: "Self-Assessment: What I Know About Pronoun–Verb Agreement",
        instruction: "Write a clear explanation of pronoun–verb agreement in your own words. Include: the basic rule, three examples of common errors and their corrections, and one advanced rule.",
        prompts: [{ text: "My self-assessment:", type: "box", lines: 12 }],
      },
      {
        type: "circle-correct" as const,
        title: "Final Review — Choose Correctly",
        instruction: "Read each sentence and circle the option with correct pronoun–verb agreement.",
        parentTip: "Use this as a formal review — have your child attempt it independently before checking together.",
        questions: [
          { prompt: "She ___ three awards this year.", options: ["have won", "has won", "had won already"] },
          { prompt: "Everybody ___ a seat for the assembly.", options: ["need", "needs", "needing"] },
          { prompt: "The news ___ quite alarming.", options: ["are", "is", "were"] },
          { prompt: "It is the students who ___ kept this school running.", options: ["has", "have", "is"] },
          { prompt: "They ___ worked hard on this project.", options: ["has", "have", "having"] },
          { prompt: "Nobody ___ the answer.", options: ["know", "knows", "knowing"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write an Argument Paragraph With Perfect Agreement",
        instruction: "Write a paragraph (6–8 sentences) arguing for or against a school rule that you feel strongly about. Use at least four different pronouns and ensure every pronoun–verb pair is correct. This is your best, most polished work.",
        parentTip: "A persuasive paragraph is a great context for formal writing practice. Encourage careful proofreading before submission.",
        prompts: [{ text: "My argument paragraph:", type: "box", lines: 10 }],
      },
      {
        type: "multiple-choice" as const,
        title: "Mastery Check: Pronoun–Verb Agreement",
        instruction: "This is your final mastery check. Choose the correctly formed sentence in each group.",
        questions: [
          {
            prompt: "Group 1",
            options: [
              "She don't know the answer.",
              "She doesn't know the answer.",
              "She doesn't knows the answer.",
            ],
            answer: "She doesn't know the answer.",
          },
          {
            prompt: "Group 2",
            options: [
              "They has been very patient.",
              "They have been very patient.",
              "They having been very patient.",
            ],
            answer: "They have been very patient.",
          },
          {
            prompt: "Group 3",
            options: [
              "Everyone have their own opinion.",
              "Everyone has their own opinion.",
              "Everyone is having their own opinion.",
            ],
            answer: "Everyone has their own opinion.",
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar Portfolio: Pronoun–Verb Agreement",
        instruction: "Compile a grammar portfolio showing your mastery of pronoun–verb agreement.",
        parentTip: "A portfolio is motivating because it shows growth. Keep work from the beginning of this unit alongside the final piece to see the improvement.",
        suggestions: [
          "Write a one-page story using all six subject pronouns correctly across multiple tenses.",
          "Create a reference card for each type of tricky agreement: indefinite pronouns, collective nouns, complex sentences.",
          "Find three examples of pronoun–verb agreement in a non-fiction text and explain in writing why each is correct.",
          "Write a letter to your future self about what you have learned — using perfect pronoun–verb agreement throughout.",
          "Teach the basic rule to a younger sibling or cousin, using examples you create yourself.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Grammar Is Everywhere",
        content: "For one whole day, notice pronoun–verb agreement everywhere you encounter language: in books, online, on signs, in conversations, on TV. Keep a tally of correct and incorrect uses. What patterns do you notice? When is non-standard agreement most common, and why?",
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
