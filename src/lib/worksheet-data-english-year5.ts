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
      {
        type: "matching",
        title: "Match the Figurative Language Type",
        instruction:
          "Draw a line to match each example with the correct type of figurative language.",
        left: [
          "I have told you a million times.",
          "The trees danced in the breeze.",
          "It is raining cats and dogs.",
          "Her voice was as smooth as honey.",
          "Break a leg!",
          "The ocean roared its fury.",
        ],
        right: [
          "Simile",
          "Idiom",
          "Hyperbole",
          "Personification",
          "Idiom",
          "Personification",
        ],
      },
      {
        type: "open-response",
        title: "Crack the Root Word Code",
        instruction:
          "Use the meaning of the root word to work out the meaning of each English word. Then write one more word that uses the same root.",
        prompts: [
          {
            text: "Root: PORT (to carry)\nWord: transport\nMeaning:                          Another port word:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Root: AUD (to hear)\nWord: auditorium\nMeaning:                          Another aud word:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Root: GRAPH (to write)\nWord: biography\nMeaning:                          Another graph word:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Root: DICT (to say or tell)\nWord: predict\nMeaning:                          Another dict word:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write with Figurative Language",
        instruction:
          "Write a short paragraph (4 to 5 sentences) about a storm, a sporting event or a busy day. Include at least one idiom, one example of hyperbole and one example of personification. Label each in the margin.",
        prompts: [
          { text: "My topic:", type: "lines", lines: 1 },
          { text: "My paragraph:", type: "box", lines: 12 },
        ],
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
      {
        type: "open-response",
        title: "Spot the Tense Shift",
        instruction:
          "Read the paragraph below. Find and underline every verb. Then circle the verbs that are the wrong tense. Rewrite the paragraph with consistent past tense.",
        prompts: [
          {
            text: "PARAGRAPH:\nYesterday, Maya woke up early and runs downstairs. She ate breakfast quickly because the bus is coming at eight. She packed her bag and rushes out the door. The cold air hits her face as she jogged to the bus stop.\n\nRewrite with consistent past tense:",
            type: "box",
            lines: 8,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Tense Form",
        instruction:
          "Circle the verb form that keeps the tense consistent with the rest of the sentence.",
        questions: [
          {
            prompt: "Yesterday, the team played well but they ___ the final point.",
            options: ["miss", "missed", "will miss"],
          },
          {
            prompt: "Every morning she ___ her teeth before breakfast.",
            options: ["brushed", "brushes", "will brush"],
          },
          {
            prompt: "By the time we arrived, the show ___ already started.",
            options: ["has", "had", "have"],
          },
          {
            prompt: "Right now, the children ___ in the garden.",
            options: ["played", "are playing", "will play"],
          },
          {
            prompt: "Since last year, he ___ three books.",
            options: ["read", "has read", "reads"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Consistent Paragraph",
        instruction:
          "Write a paragraph of 6 to 8 sentences about an adventure — real or imagined. Choose past tense and stick with it throughout. Underline every verb when you have finished.",
        prompts: [{ text: "My adventure paragraph:", type: "box", lines: 14 }],
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
      {
        type: "circle-correct",
        title: "Choose Who, Which or That",
        instruction:
          "Circle the correct relative pronoun to complete each sentence.",
        questions: [
          {
            prompt: "The scientist ___ discovered penicillin was Alexander Fleming.",
            options: ["who", "which", "what"],
          },
          {
            prompt: "The book ___ I borrowed from the library was fascinating.",
            options: ["who", "which", "what"],
          },
          {
            prompt: "The children ___ finished early were allowed to read.",
            options: ["which", "who", "what"],
          },
          {
            prompt: "The bridge ___ was built in 1932 is still standing.",
            options: ["who", "which", "what"],
          },
          {
            prompt: "Is this the dog ___ won the competition?",
            options: ["who", "that", "what"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Combine the Sentences",
        instruction:
          "Combine each pair of sentences into one sentence using a relative clause with who, which or that.",
        prompts: [
          {
            text: "1. The woman won the race. She had been training for a year.\nAnswer:",
            type: "lines",
            lines: 3,
          },
          {
            text: "2. The laptop belongs to my dad. It has a cracked screen.\nAnswer:",
            type: "lines",
            lines: 3,
          },
          {
            text: "3. The building was demolished last year. It used to be a cinema.\nAnswer:",
            type: "lines",
            lines: 3,
          },
          {
            text: "4. My neighbour keeps chickens. She gives us eggs every week.\nAnswer:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Relative Clauses",
        instruction:
          "Write six sentences about people or places you know. Each sentence must contain a relative clause using who, which or that. Label each clause in the margin — D for defining or ND for non-defining.",
        prompts: [
          { text: "1.", type: "lines", lines: 2 },
          { text: "2.", type: "lines", lines: 2 },
          { text: "3.", type: "lines", lines: 2 },
          { text: "4.", type: "lines", lines: 2 },
          { text: "5.", type: "lines", lines: 2 },
          { text: "6.", type: "lines", lines: 2 },
        ],
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
        type: "open-response",
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
        type: "sorting",
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
        type: "open-response",
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
        type: "open-response",
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
        type: "open-response",
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
        type: "open-response",
        title: "Write Your Expository Paragraph",
        instruction:
          "Use your planner to write your full expository paragraph. Include at least two transition words. Underline each transition word when you have finished.",
        prompts: [{ text: "My paragraph:", type: "box", lines: 14 }],
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
        type: "open-response",
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
        type: "open-response",
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
        type: "open-response",
        title: "Write Your Persuasive Paragraph",
        instruction:
          "Use your plan to write a persuasive paragraph that includes your argument, a counterargument and a strong rebuttal.",
        prompts: [{ text: "My persuasive paragraph:", type: "box", lines: 14 }],
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
        type: "open-response",
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
        type: "open-response",
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
        type: "home-activity",
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
        type: "open-response",
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
        type: "open-response",
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
        type: "open-response",
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
    ],
  },
];

export function getYear5EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year5EnglishWorksheets.find((ws) => ws.slug === slug);
}
