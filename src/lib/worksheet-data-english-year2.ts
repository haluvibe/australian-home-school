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
      {
        type: "sorting",
        title: "Sort the Long Vowel Words",
        instruction:
          "Read each word below. Write it in the correct column to match its long vowel pattern.",
        parentTip:
          "Have your child say each word aloud before deciding — hearing the sound helps more than looking at the letters alone.",
        columns: ["ai", "ee", "oa", "ue"],
        items: [
          { label: "rain" },
          { label: "tree" },
          { label: "boat" },
          { label: "blue" },
          { label: "tail" },
          { label: "feet" },
          { label: "coat" },
          { label: "clue" },
          { label: "sail" },
          { label: "keep" },
          { label: "road" },
          { label: "true" },
        ],
      },
      {
        type: "matching",
        title: "Match the Rhyming Words",
        instruction:
          "Draw a line between each word and the word it rhymes with.",
        parentTip: "Encourage your child to say both words aloud to hear the rhyme.",
        left: ["rain", "tree", "coat", "blue"],
        right: ["toad", "clue", "train", "free"],
      },
      {
        type: "circle-correct",
        title: "Which Spelling Is Right?",
        instruction:
          "Circle the correctly spelled word in each row.",
        parentTip:
          "If your child is unsure, write both options and ask which looks more familiar from their reading.",
        questions: [
          { prompt: "The sky is clear after the ___.", options: ["rayn", "rain", "rane"] },
          { prompt: "She climbed up the ___.", options: ["tree", "trea", "trie"] },
          { prompt: "We sailed in a ___.", options: ["bote", "boet", "boat"] },
          { prompt: "The sky is ___.", options: ["blew", "blue", "bloo"] },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Words",
        instruction:
          "Think of one more word for each long vowel pattern and write a sentence using it.",
        parentTip:
          "If your child is stuck, suggest they think of a word that rhymes with one of the words they already sorted.",
        prompts: [
          { text: "Write one more 'ai' word: ___. Write a sentence using it.", type: "lines", lines: 2 },
          { text: "Write one more 'ee' word: ___. Write a sentence using it.", type: "lines", lines: 2 },
          { text: "Write one more 'oa' word: ___. Write a sentence using it.", type: "lines", lines: 2 },
          { text: "Write one more 'ue' word: ___. Write a sentence using it.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Long Vowel Word Hunt",
        instruction:
          "Go on a word hunt around your home! Look at books, food packets, signs and labels.",
        parentTip:
          "Keep the hunt playful — 5 minutes is plenty. You might be surprised how many long vowel words appear on cereal boxes and library books.",
        suggestions: [
          "Find 3 words with the 'ai' pattern on books or food packets",
          "Find 2 words with the 'ee' pattern in a picture book",
          "Draw a picture for each vowel pattern word you find",
          "Make a mini 'Long Vowel Dictionary' by folding a piece of paper into four sections",
        ],
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
      {
        type: "matching",
        title: "Match the Base Word to Its -ing Form",
        instruction:
          "Draw a line from each base word to its correct -ing form.",
        parentTip: "Ask your child to say the -ing form out loud before drawing the line.",
        left: ["hop", "bake", "run", "smile", "clap"],
        right: ["baking", "clapping", "hopping", "smiling", "running"],
      },
      {
        type: "open-response",
        title: "Add the Endings",
        instruction:
          "Add -ing and -ed to each base word. Remember the spelling rules!",
        parentTip:
          "Remind your child: short word + single consonant after a single vowel = double it. Word ending in 'e' = drop the 'e' first.",
        prompts: [
          { text: "jump → ___ (add -ing)    ___ (add -ed)", type: "lines", lines: 1 },
          { text: "bake → ___ (add -ing)    ___ (add -ed)", type: "lines", lines: 1 },
          { text: "swim → ___ (add -ing)    ___ (add -ed)", type: "lines", lines: 1 },
          { text: "wave → ___ (add -ing)    ___ (add -ed)", type: "lines", lines: 1 },
          { text: "clap → ___ (add -ing)    ___ (add -ed)", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Spelling Is Correct?",
        instruction: "Circle the correctly spelled word in each pair.",
        parentTip: "Have your child say the word aloud and check if it sounds right.",
        questions: [
          { prompt: "She is ___.", options: ["running", "runing"] },
          { prompt: "He ___ the cake.", options: ["baked", "bakeed"] },
          { prompt: "They were ___.", options: ["hopping", "hoping"] },
          { prompt: "She ___ goodbye.", options: ["waved", "waveed"] },
        ],
      },
      {
        type: "open-response",
        title: "Write Sentences Using Word Endings",
        instruction:
          "Write a sentence using each word. Use your neatest handwriting!",
        prompts: [
          { text: "Write a sentence using the word 'jumping'.", type: "lines", lines: 2 },
          { text: "Write a sentence using the word 'baked'.", type: "lines", lines: 2 },
          { text: "Write a sentence using the word 'faster' (fast + er).", type: "lines", lines: 2 },
        ],
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
      {
        type: "sorting",
        title: "Sort the Words",
        instruction:
          "Read each word and sort it into the correct column: Noun, Verb or Adjective.",
        parentTip:
          "Ask: 'Is it a naming word, an action word, or a describing word?' Say it in a sentence to help decide.",
        columns: ["Noun", "Verb", "Adjective"],
        items: [
          { label: "dog" },
          { label: "happy" },
          { label: "run" },
          { label: "flower" },
          { label: "tiny" },
          { label: "jump" },
          { label: "school" },
          { label: "noisy" },
          { label: "swim" },
          { label: "river" },
          { label: "soft" },
          { label: "laugh" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Word Type?",
        instruction:
          "Read each sentence. Circle the word type asked for in brackets.",
        parentTip: "Read the full sentence aloud before choosing.",
        questions: [
          { prompt: "The fluffy cat sat on the mat. [Adjective]", options: ["cat", "fluffy", "sat"] },
          { prompt: "A tall tree stood in the garden. [Noun]", options: ["tall", "stood", "tree"] },
          { prompt: "She ran quickly to the park. [Verb]", options: ["quickly", "ran", "park"] },
          { prompt: "The shiny red ball bounced away. [Adjective]", options: ["ball", "bounced", "shiny"] },
        ],
      },
      {
        type: "open-response",
        title: "Build Better Sentences",
        instruction:
          "Read the plain sentence. Add an adjective and/or a better verb to make it more interesting.",
        parentTip:
          "Encourage creativity — there is no single right answer. Praise unusual and vivid word choices.",
        prompts: [
          { text: "Plain: The dog ran. Your better sentence:", type: "lines", lines: 2 },
          { text: "Plain: A bird sat in the tree. Your better sentence:", type: "lines", lines: 2 },
          { text: "Plain: The child ate lunch. Your better sentence:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Sentences",
        instruction:
          "Write three sentences. Each one must include a noun, a verb AND an adjective. Underline each word type.",
        prompts: [
          { text: "Sentence 1:", type: "lines", lines: 2 },
          { text: "Sentence 2:", type: "lines", lines: 2 },
          { text: "Sentence 3:", type: "lines", lines: 2 },
        ],
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
      {
        type: "circle-correct",
        title: "Choose the Right Joining Word",
        instruction:
          "Circle the joining word that makes the best sense in each sentence.",
        parentTip: "Read the whole sentence aloud with each option to hear which sounds right.",
        questions: [
          {
            prompt: "She was cold ___ she put on a jumper.",
            options: ["and", "but", "because"],
          },
          {
            prompt: "He wanted to swim ___ the pool was closed.",
            options: ["and", "but", "because"],
          },
          {
            prompt: "I like cats ___ I like rabbits.",
            options: ["and", "but", "because"],
          },
          {
            prompt: "She smiled ___ she won the race.",
            options: ["and", "but", "because"],
          },
          {
            prompt: "He was tired ___ he kept reading.",
            options: ["and", "but", "because"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Finish the Sentences",
        instruction:
          "Complete each sentence using the joining word given. Make sure your ending makes sense!",
        prompts: [
          { text: "I wanted to play outside but ___", type: "lines", lines: 2 },
          { text: "She finished her lunch and ___", type: "lines", lines: 2 },
          { text: "He was happy because ___", type: "lines", lines: 2 },
          { text: "The dog barked but ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Join the Two Short Sentences",
        instruction:
          "Join the two sentences into one using 'and', 'but' or 'because'. Write your new sentence on the line.",
        parentTip: "Remind your child that they may need to remove a word or two when they join the sentences.",
        prompts: [
          {
            text: "She was hungry. She had not eaten breakfast.\nYour sentence:",
            type: "lines",
            lines: 2,
          },
          {
            text: "The sky was dark. The sun came out later.\nYour sentence:",
            type: "lines",
            lines: 2,
          },
          {
            text: "He loves cricket. He loves swimming.\nYour sentence:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Joining Word Listening Walk",
        instruction:
          "During conversations or when reading books, listen out for the joining words 'and', 'but' and 'because'.",
        parentTip:
          "This turns reading aloud into a language detective game. Even 5 minutes of focused listening builds a strong instinct for how conjunctions work in real text.",
        suggestions: [
          "Tally how many times you hear 'and', 'but' and 'because' during a book read-aloud",
          "Write one sentence you heard that used a joining word — copy it exactly",
          "Make up three silly sentences using each of the three joining words",
          "Tell a story about your day using at least one 'and', one 'but' and one 'because'",
        ],
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
      {
        type: "open-response",
        title: "Read and Answer",
        instruction:
          "Read the passage below, then answer the questions in full sentences.\n\n--- PASSAGE ---\nWombats are Australian marsupials that live in burrows underground. They are strong diggers and use their powerful claws to carve out long tunnels. Wombats mostly come out at night to graze on grasses and roots. During the day they rest inside their cool burrow. Baby wombats, called joeys, are tiny when they are born and grow up safely in their mother's pouch.",
        parentTip:
          "Remind your child to look back at the passage when they are not sure of an answer. Point to the relevant sentence together if they get stuck.",
        prompts: [
          { text: "What is the main idea of this passage? Write it in one sentence.", type: "lines", lines: 2 },
          { text: "Where do wombats live? Find the answer in the passage.", type: "lines", lines: 2 },
          { text: "What do wombats eat?", type: "lines", lines: 2 },
          { text: "What is a baby wombat called?", type: "lines", lines: 1 },
          { text: "Write one fact from the passage that you found most interesting, and explain why.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sequence",
        title: "Order the Key Events",
        instruction:
          "Number these sentences from the passage in the correct order (1 to 4).",
        parentTip: "Encourage your child to re-read the passage to check the order.",
        items: [
          { label: "Baby joeys grow up in their mother's pouch." },
          { label: "Wombats dig long tunnels with their claws." },
          { label: "At night, wombats come out to eat." },
          { label: "During the day, wombats rest in their burrow." },
        ],
      },
      {
        type: "open-response",
        title: "Retell in Your Own Words",
        instruction:
          "Without looking at the passage, write 3 facts you remember about wombats. Use your own words.",
        prompts: [
          { text: "Fact 1:", type: "lines", lines: 2 },
          { text: "Fact 2:", type: "lines", lines: 2 },
          { text: "Fact 3:", type: "lines", lines: 2 },
        ],
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
      {
        type: "sequence",
        title: "Put the Story Parts in Order",
        instruction:
          "These story events are mixed up. Number them 1-5 in the correct order.",
        parentTip: "Ask your child to identify which part (beginning, middle or end) each event belongs to before numbering.",
        items: [
          { label: "Mia found a tiny door hidden behind the bookshelf." },
          { label: "She pushed open the door and stepped into a magical garden." },
          { label: "One afternoon, Mia was looking for her lost cat." },
          { label: "Her cat was sitting there, perfectly happy, eating strawberries." },
          { label: "Mia laughed with relief and carried her cat back home." },
        ],
      },
      {
        type: "open-response",
        title: "Plan Your Story",
        instruction:
          "Fill in the story plan before you start writing. Use short notes — you will turn these into sentences later.",
        prompts: [
          { text: "BEGINNING — Who is your character? Where are they? When?", type: "lines", lines: 3 },
          { text: "MIDDLE — What problem or challenge happens?", type: "lines", lines: 3 },
          { text: "END — How is the problem solved? How does your character feel?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Story",
        instruction:
          "Use your plan above to write your story. Try to write at least 2-3 sentences for each part. Give your story a title!",
        prompts: [
          { text: "Title:", type: "lines", lines: 1 },
          { text: "BEGINNING:", type: "lines", lines: 4 },
          { text: "MIDDLE:", type: "lines", lines: 4 },
          { text: "END:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "home-activity",
        title: "Story Telling Together",
        instruction:
          "Tell stories together out loud — this builds narrative structure naturally before writing.",
        parentTip:
          "Oral storytelling is just as valuable as written storytelling at Year 2 level. Many great writers learned story structure by hearing and telling stories aloud long before they wrote them down.",
        suggestions: [
          "Take turns telling a made-up story — alternate adding one sentence each",
          "Retell a favourite book in just three sentences (beginning, middle, end)",
          "Act out your story with toys or stuffed animals",
          "Record your child telling their story on a phone or tablet to play back",
        ],
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
      {
        type: "circle-correct",
        title: "Spell It Right",
        instruction:
          "Circle the correct spelling in each row.",
        parentTip: "Have your child look at the word, say it slowly, and then decide.",
        questions: [
          { prompt: "My best ___.", options: ["friend", "freind", "frend"] },
          { prompt: "She ___ carefully.", options: ["thort", "thought", "thowt"] },
          { prompt: "We walked ___ the park.", options: ["threw", "throo", "through"] },
          { prompt: "___ of us were there.", options: ["Peeple", "People", "Pepole"] },
          { prompt: "I did it ___ she helped me.", options: ["becuase", "because", "becaus"] },
        ],
      },
      {
        type: "open-response",
        title: "Look, Cover, Write, Check",
        instruction:
          "Look at each word. Cover it. Write it in the first box. Uncover and check. If correct, write it again in the second box.",
        prompts: [
          { text: "friend → Write it: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "thought → Write it: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "through → Write it: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "people → Write it: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "because → Write it: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "different → Write it: ___    Check and write again: ___", type: "lines", lines: 1 },
          { text: "together → Write it: ___    Check and write again: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Use the Words in Sentences",
        instruction:
          "Write a sentence using each high frequency word below.",
        prompts: [
          { text: "Write a sentence using 'because'.", type: "lines", lines: 2 },
          { text: "Write a sentence using 'through'.", type: "lines", lines: 2 },
          { text: "Write a sentence using 'people'.", type: "lines", lines: 2 },
          { text: "Write a sentence using 'friend'.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Sight Word Flashcard Games",
        instruction:
          "Use flashcards to practise your high frequency words every day this week.",
        suggestions: [
          "Play Beat the Clock: how many cards can you read in 30 seconds?",
          "Memory pairs: write each word on two cards and play matching",
          "Spell it in the air using your finger while saying each letter aloud",
          "Find the word in a book — tally how many times you spot each word",
        ],
      },
    ],
  },
];

export function getYear2EnglishWorksheet(
  slug: string
): WorksheetItem | undefined {
  return year2EnglishWorksheets.find((w) => w.slug === slug);
}
