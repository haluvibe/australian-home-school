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
      {
        type: "matching",
        title: "Match the Synonym",
        instruction:
          "Draw a line to match each word on the left with its synonym on the right.",
        parentTip:
          "Read each word aloud together and ask your child to make a sentence with both before matching.",
        left: ["angry", "brave", "tired", "funny", "quick"],
        right: ["swift", "courageous", "furious", "amusing", "weary"],
      },
      {
        type: "sorting",
        title: "Sort: Synonym or Antonym?",
        instruction:
          "The base word is COLD. Write each word in the correct column.",
        columns: ["Synonym (same as COLD)", "Antonym (opposite of COLD)"],
        items: [
          { label: "freezing" },
          { label: "warm" },
          { label: "chilly" },
          { label: "hot" },
          { label: "icy" },
          { label: "boiling" },
          { label: "frosty" },
          { label: "scorching" },
        ],
      },
      {
        type: "open-response",
        title: "Shades of Meaning",
        instruction:
          "The words below all mean happy but some are stronger than others. Number them from 1 (least happy) to 4 (most happy). Then write a sentence using the strongest word.",
        prompts: [
          {
            text: "Number from weakest (1) to strongest (4): pleased   content   overjoyed   ecstatic",
            type: "lines",
            lines: 2,
          },
          {
            text: "Write a sentence using the strongest word:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Context Clues",
        instruction:
          "Read each sentence. Use the clues to work out what the underlined word means, then write a synonym for it.",
        prompts: [
          {
            text: "1. The puppy was so timid that it hid under the bed whenever strangers arrived.\n   The word means:                          Synonym:",
            type: "lines",
            lines: 2,
          },
          {
            text: "2. Mia was elated when she found out she had won the art competition.\n   The word means:                          Synonym:",
            type: "lines",
            lines: 2,
          },
          {
            text: "3. The ancient bridge looked rickety, with planks missing and rusty nails sticking out.\n   The word means:                          Synonym:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Word Hunt",
        instruction:
          "Try these activities away from the worksheet to keep building your vocabulary.",
        parentTip:
          "Do this activity over dinner or in the car — it does not need to be at a desk!",
        suggestions: [
          "Find a page in a book you are reading and circle three adjectives. Look up one synonym and one antonym for each.",
          "Play synonym tennis: one person says a word, the other says a synonym. Keep going until someone runs out!",
          "Write a short paragraph about your day using only strong, precise vocabulary — no nice, good or said allowed.",
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Synonym or Antonym?",
        instruction:
          "Read each pair. Circle S if the words are synonyms (similar meaning) or A if they are antonyms (opposite meaning).",
        parentTip:
          "Ask your child to use both words in sentences to confirm their relationship.",
        questions: [
          { prompt: "enormous — tiny", options: ["S", "A"] },
          { prompt: "swift — fast", options: ["S", "A"] },
          { prompt: "brave — timid", options: ["S", "A"] },
          { prompt: "weary — tired", options: ["S", "A"] },
          { prompt: "furious — calm", options: ["S", "A"] },
          { prompt: "amusing — funny", options: ["S", "A"] },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Vocabulary Builder",
        instruction:
          "Try these activities to grow your vocabulary away from the worksheet.",
        parentTip:
          "A wide vocabulary is one of the strongest predictors of reading comprehension — invest in it daily.",
        suggestions: [
          "Open a book to any page. Find three adjectives and look up their antonyms in a dictionary.",
          "Play synonym tennis: one person says a word, the other says a synonym. Keep going without repeating!",
          "Replace all uses of 'nice', 'good' and 'big' in your next piece of writing with stronger synonyms.",
          "Keep a My Best Words notebook — add one new word per day with its meaning and a sentence.",
        ],
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
      {
        type: "circle-correct",
        title: "Choose the Best Conjunction",
        instruction:
          "Circle the conjunction that makes the most sense in each sentence.",
        questions: [
          {
            prompt: "Lily packed an umbrella ___ it was raining.",
            options: ["although", "because", "until"],
          },
          {
            prompt: "___ the film was long, we enjoyed every minute.",
            options: ["Although", "Since", "When"],
          },
          {
            prompt: "We will stay at the park ___ the sun sets.",
            options: ["while", "until", "because"],
          },
          {
            prompt: "He practised the piano ___ he could play the whole song.",
            options: ["although", "unless", "until"],
          },
          {
            prompt: "You cannot go outside ___ you finish your lunch.",
            options: ["because", "unless", "while"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort the Conjunctions",
        instruction:
          "Sort these conjunctions into the correct group based on the kind of relationship they show.",
        columns: ["Time", "Reason", "Contrast"],
        items: [
          { label: "because" },
          { label: "although" },
          { label: "when" },
          { label: "since" },
          { label: "while" },
          { label: "even though" },
          { label: "until" },
          { label: "after" },
          { label: "despite" },
        ],
      },
      {
        type: "open-response",
        title: "Finish the Sentence",
        instruction:
          "Each sentence below has a main clause. Complete each one with a subordinate clause that makes sense. Use a different conjunction each time.",
        prompts: [
          { text: "1. The cat jumped onto the fence", type: "lines", lines: 2 },
          { text: "2.                                    , James could not sleep.", type: "lines", lines: 2 },
          { text: "3. We had a picnic                                    it was sunny.", type: "lines", lines: 2 },
          { text: "4. She practised every day                                    she won the competition.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Expand Simple Sentences",
        instruction:
          "Rewrite each simple sentence as a complex sentence by adding a conjunction and a subordinate clause.",
        prompts: [
          {
            text: "Example — The bird sang.\nAnswer: The bird sang because the sun was rising.\n\n1. The children ran.\nAnswer:",
            type: "lines",
            lines: 3,
          },
          { text: "2. Tom ate dinner.\nAnswer:", type: "lines", lines: 3 },
          { text: "3. She smiled.\nAnswer:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Conjunction to Its Function",
        instruction:
          "Draw a line to match each conjunction to what it shows.",
        parentTip:
          "Review the Time / Reason / Contrast categories before matching.",
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
      {
        type: "home-activity" as const,
        title: "Conjunction Challenge",
        instruction:
          "Look for complex sentences in everyday reading and practise writing your own.",
        parentTip:
          "Newspaper articles and chapter books are full of complex sentences — they are great hunting grounds!",
        suggestions: [
          "Find a complex sentence in a book you are reading and identify the main clause and subordinate clause.",
          "Set a timer for 2 minutes and write as many different complex sentences as you can using a new conjunction each time.",
          "Say a simple sentence out loud, then challenge a family member to extend it using a conjunction.",
          "Highlight all the conjunctions in a paragraph from a library book — which ones appear most often?",
        ],
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
      {
        type: "open-response",
        title: "Add the Speech Marks",
        instruction:
          "Rewrite each sentence, adding speech marks, capital letters and commas in the correct places.",
        prompts: [
          { text: "1. tom shouted i can see the ocean from here\nAnswer:", type: "lines", lines: 2 },
          { text: "2. the teacher said please open your books to page twelve\nAnswer:", type: "lines", lines: 2 },
          { text: "3. i am so excited whispered lily\nAnswer:", type: "lines", lines: 2 },
          { text: "4. are you ready to go asked dad\nAnswer:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Error",
        instruction:
          "One speech mark, comma or capital letter is wrong or missing. Circle the best description of the error.",
        questions: [
          {
            prompt: "\"I love swimming said Mia.",
            options: [
              "Missing closing speech mark after swimming",
              "Missing comma before said",
              "Missing capital I",
            ],
          },
          {
            prompt: "\"where are my shoes?\" asked Dad.",
            options: [
              "Missing capital W in where",
              "Missing comma after shoes",
              "Missing speech mark after Dad",
            ],
          },
          {
            prompt: "\"This is delicious,\" She said.",
            options: [
              "Capital S in She should be lowercase",
              "Missing comma after delicious",
              "Missing opening speech mark",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write the Dialogue",
        instruction:
          "Write a short conversation (4 to 6 lines) between two characters. Use speech marks, commas, capital letters and at least three different reporting verbs.",
        prompts: [
          {
            text: "Characters:                              and                             \nSetting:",
            type: "lines",
            lines: 2,
          },
          { text: "Dialogue:", type: "box", lines: 10 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort the Dialogue Sentences",
        instruction:
          "Read each sentence. Sort it into the correct column — it either has correct dialogue punctuation or contains an error.",
        parentTip:
          "Ask your child to explain what rule each correct example follows and what error each incorrect example contains.",
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
      {
        type: "home-activity" as const,
        title: "Dialogue in the Wild",
        instruction:
          "Find and write dialogue in everyday reading and speaking.",
        parentTip:
          "Point out speech marks in any book you read together — this builds natural awareness of the convention.",
        suggestions: [
          "Find a page of dialogue in a favourite novel and copy two lines, then check your punctuation against the original.",
          "Write four speech bubbles for characters in a comic or magazine photo, then convert them to prose with speech marks.",
          "Record a short real conversation with a family member, then write it up using dialogue punctuation.",
          "Read a play script aloud and notice how it handles spoken words differently from prose dialogue.",
        ],
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
      {
        type: "sorting",
        title: "Sort: Fact or Opinion?",
        instruction:
          "Read each statement and sort it into the correct column.",
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
      {
        type: "open-response",
        title: "Spot the Signal Words",
        instruction:
          "Read the paragraph below. Find signal words that indicate opinions and answer the questions.",
        prompts: [
          {
            text: "PASSAGE:\nThe Murray-Darling River system is the longest river system in Australia, stretching over 3,750 kilometres. I believe it is also the most important river in the country. It provides water for about 40% of Australia\'s agricultural output. In my opinion, every Australian should learn about the river system in school. The Murray-Darling Basin covers parts of Queensland, New South Wales, Victoria, South Australia and the ACT.\n\nHow many facts can you find in the passage?",
            type: "lines",
            lines: 1,
          },
          { text: "Write the opinion signal words you found:", type: "lines", lines: 2 },
          {
            text: "Could you verify whether the Murray-Darling is the most important river? Why or why not?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Facts and Opinions",
        instruction:
          "Choose a topic you know well. Write three facts and two opinions about it. Label each sentence F for fact or O for opinion.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          {
            text: "1.                                                                    [ F / O ]\n2.                                                                    [ F / O ]\n3.                                                                    [ F / O ]\n4.                                                                    [ F / O ]\n5.                                                                    [ F / O ]",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Fact or Opinion — Signal Words",
        instruction:
          "Read each sentence. Circle whether it is a Fact or an Opinion, and identify the signal word or clue.",
        parentTip:
          "Ask your child to explain their reasoning — the process of justifying matters more than the answer.",
        questions: [
          { prompt: "I believe sharks are the most misunderstood creatures in the ocean.", options: ["Fact", "Opinion"] },
          { prompt: "Sharks have been on Earth for over 450 million years.", options: ["Fact", "Opinion"] },
          { prompt: "In my view, zoos should be banned.", options: ["Fact", "Opinion"] },
          { prompt: "Australia has the world's largest cattle station.", options: ["Fact", "Opinion"] },
          { prompt: "Summer is clearly the best time of year to visit the Gold Coast.", options: ["Fact", "Opinion"] },
          { prompt: "The Sydney Harbour Bridge was completed in 1932.", options: ["Fact", "Opinion"] },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Media Fact Detective",
        instruction:
          "Practise spotting facts and opinions in real-world media.",
        parentTip:
          "Media literacy is a critical 21st-century skill — weaving it into everyday reading habits builds lifelong critical thinking.",
        suggestions: [
          "Watch a short news clip together and call out 'fact' or 'opinion' after each key statement.",
          "Find a letters-to-the-editor section in a newspaper and highlight all opinion signal words.",
          "Read a product advertisement and sort every sentence into fact or opinion.",
          "Write your own 'balanced' paragraph on a topic — include exactly three facts and two opinions, clearly labelled.",
        ],
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
