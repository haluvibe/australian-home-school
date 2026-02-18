import type { WorksheetItem } from "./worksheet-types";

export const year7EnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Register — Formal and Informal Language
  {
    slug: "register-formal-informal",
    title: "Register: Formal and Informal Language",
    strand: "Language",
    description:
      "Understand how register — the level of formality in language — shifts depending on audience, purpose and context, and use this knowledge in your own writing.",
    lesson: {
      title: "Reading the Room with Words",
      objective:
        "Identify the differences between formal and informal register, explain why writers choose different registers for different contexts, and apply appropriate register in a range of writing tasks.",
      materials: [
        "Examples of texts in two contrasting registers — for example, a text message exchange and a formal letter on the same topic",
        "A notebook",
        "The worksheet activities below",
      ],
      intro: {
        title: "You Already Code-Switch",
        script:
          "Here is something you do without thinking: you speak differently to your best friend than you do to a doctor, a judge, or a job interviewer. With your friend, you use slang, contractions, fragments, jokes. With the doctor, you are more precise, more formal, more careful. This is called register — and writers make the same shift every time they write. The question is whether they are doing it consciously.",
        action:
          "Take the same piece of information — say, 'the test results came back and everything is fine' — and together write it three ways: as a text to a friend, as a formal email to a parent, and as an entry in a medical report. Read each aloud. What changes and what stays the same?",
      },
      mainActivity: {
        title: "What Makes a Register?",
        script:
          "Register is shaped by several features working together. Vocabulary: formal writing uses technical or Latinate words ('commence', 'terminate', 'obtain'); informal writing uses common words ('start', 'end', 'get'). Sentence structure: formal writing often uses complex, complete sentences; informal writing uses fragments, contractions, and casual connectives. Tone: formal writing tends to be impersonal ('It is recommended that...'); informal writing is personal and direct ('You should...'). Purpose and audience always drive the choice.",
        action:
          "Analyse the two contrasting texts together. Identify three features of each that signal its register. Note: this is metalanguage — language used to talk about language — and that is exactly what Year 7 English is all about.",
      },
      wrapUp: {
        title: "Register Mismatch",
        script:
          "One of the funniest — and most instructive — things in writing is a register mismatch: the job application written like a text message, or the birthday card written like a legal contract. Register mismatch is also used deliberately by writers for comic or satirical effect. Being able to spot and create register mismatches means you truly understand how register works.",
        action:
          "Together, write a deliberately mismatched piece: a formal resignation letter in the style of a text message, or a casual birthday card in the style of a parliamentary motion. Have fun with it — the sillier the better.",
      },
      parentTip:
        "At Year 7, your role is shifting from instructor to discussion facilitator. Your child is capable of genuine analytical thinking about language — the best thing you can do is think aloud yourself, share your own reactions to texts, and treat this as a genuine intellectual conversation.",
      extension:
        "Find examples of register mixing used deliberately for effect — political satire, comedy writing, or advertising. Discuss: what is the writer's purpose in mixing registers? Does it work?",
      resources: [
        {
          title: "Khan Academy — Formal and Informal Language",
          url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab/cc-7th-grammar/cc-7th-formal-informal/a/formal-and-informal-language-review",
          description: "Clear explainer on formal vs informal language with examples and practice.",
        },
        {
          title: "Purdue OWL — Tone in Writing",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/tone_in_writing/index.html",
          description: "Guidance on how tone and register work in academic and professional writing.",
        },
        {
          title: "ReadWriteThink — Audience and Purpose",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/audience-purpose",
          description: "Lesson exploring how audience and purpose shape language choices.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identify the Register",
        instruction:
          "Read each extract and identify its register (formal, semi-formal, or informal). List three specific language features that signal the register.",
        parentTip:
          "Push beyond labelling — ask your child to be specific: 'It uses contractions like can't and we'd' is better than 'it sounds casual'. The precise observation is the skill.",
        prompts: [
          {
            text: "Extract A: 'Further to our previous correspondence, I am writing to confirm that the application has been received and is currently under review. You will be notified of the outcome within ten business days.'\n\nRegister: ______________\nThree language features that signal this register:\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________",
            type: "lines",
            lines: 4,
          },
          {
            text: "Extract B: 'Hey! Just wanted to say the stuff you sent came through fine. We'll let you know asap — prob about two weeks?'\n\nRegister: ______________\nThree language features that signal this register:\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite for a Different Register",
        instruction:
          "Rewrite each passage in the register indicated. Keep the core information the same but change the language features to match the new register.",
        parentTip:
          "This is harder than it sounds — encourage your child to think about vocabulary, sentence length, pronoun use, and contractions. Read each version aloud to hear the difference.",
        prompts: [
          {
            text: "Original (informal): 'So basically we need everyone to come in earlier cos there's heaps of stuff to set up before the thing starts.'\n\nRewrite in formal register:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Original (formal): 'Students are reminded that the submission of assessments after the specified deadline will result in a deduction of marks in accordance with school policy.'\n\nRewrite in informal register (as if explaining to a friend):",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Choosing the Right Register",
        instruction:
          "For each writing scenario below, decide what register is most appropriate and write the opening 2–3 sentences in that register.",
        parentTip:
          "Discuss the audience and purpose of each scenario before writing. The question is not just 'formal or informal?' but 'what does this specific reader need from this specific text?'",
        prompts: [
          {
            text: "Scenario: You are writing to your local council asking them to add a crossing near your school. Opening sentences:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Scenario: You are writing a review of a game or book for a website aimed at other Year 7 students. Opening sentences:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Scenario: You are writing a speech to be delivered at a school assembly on a topic you care about. Opening sentences:",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Collect examples of three different registers from texts you encounter this week — one very formal, one very informal, one in between. Analyse one feature of each.",
      "Write the same event (something that happened this week) in two registers: an informal recount to a friend, and a formal recount as if writing for a school newsletter.",
    ],
  },

  // ── WS 2: Complex Sentences and Embedded Clauses
  {
    slug: "complex-sentences-clauses",
    title: "Complex Sentences and Embedded Clauses",
    strand: "Language",
    description:
      "Understand how clauses combine to form complex sentences, and how embedded clauses add nuance, precision and sophistication to writing.",
    lesson: {
      title: "Sentences Within Sentences",
      objective:
        "Identify main clauses, subordinate clauses and embedded clauses; understand how they function to add information, qualification and complexity; and use them deliberately in writing.",
      materials: [
        "A page from any novel or non-fiction text",
        "A pencil for annotating",
        "The worksheet activities below",
      ],
      intro: {
        title: "The Grammar of Nuance",
        script:
          "Short sentences are powerful — they create impact. But if every sentence is short, writing becomes choppy, even childish. Sophisticated writing uses a mix of sentence types, including complex sentences that show how ideas relate to each other. When you write 'He left early', that is a simple sentence. When you write 'He left early because he knew the argument would only get worse', you have added a reason, a relationship between ideas. The subordinate clause carries that relationship.",
        action:
          "Open any page of a well-written novel together. Find one complex sentence — one that has more than one clause. Read it aloud, then discuss: what is the main idea? What additional information does the second clause provide?",
      },
      mainActivity: {
        title: "Embedded Clauses",
        script:
          "An embedded clause (also called a relative clause) is a clause inserted inside another sentence, adding information about a noun. 'The boy who had been standing in the rain for an hour finally knocked on the door.' The embedded clause is 'who had been standing in the rain for an hour'. It adds information about the boy without needing a separate sentence. Notice how it is non-essential — the sentence still makes sense without it — but it enriches the picture. Writers use embedded clauses to show precision and control.",
        action:
          "Take three simple sentences together and add an embedded clause to each. Try using 'who', 'which', 'that', 'whose' and 'where' as starting words. Read each aloud and discuss: does the embedded clause add useful information, or does it make the sentence clunky?",
      },
      wrapUp: {
        title: "Clause Surgery",
        script:
          "One of the most useful editing skills is clause surgery — the ability to combine short sentences into complex ones, or to break down overlong complex sentences into cleaner parts. Good writers are not just good at putting words on the page: they are good at reshaping them.",
        action:
          "Take a paragraph of your child's own recent writing. Together, identify one place where two short sentences could be combined into a complex sentence using a subordinating conjunction or an embedded clause. Rewrite it.",
      },
      parentTip:
        "The grammar terminology matters at Year 7 because it gives your child the tools to talk about language precisely. However, understanding the effect is more important than memorising definitions. Always connect the grammar to the question: what does this do for the reader?",
      extension:
        "Analyse a paragraph from a text by a professional writer you admire. Identify: how many simple sentences, how many complex sentences, and how many contain embedded clauses? What does this tell you about the writer's style?",
      resources: [
        {
          title: "Khan Academy — Types of Sentences",
          url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab/cc-7th-grammar/cc-7th-sentence-types/a/sentence-types-review",
          description: "Clear explainer on simple, compound and complex sentence structures.",
        },
        {
          title: "Purdue OWL — Sentence Variety",
          url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/sentence_variety/index.html",
          description: "Guidance on using varied sentence structures to improve writing style.",
        },
        {
          title: "ReadWriteThink — Sentence Combining",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/sentence-combining",
          description: "Practical activities for developing complex sentence writing skills.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identify the Clauses",
        instruction:
          "Underline the main clause in each sentence. Put brackets around any subordinate or embedded clause. Then label: subordinate clause (SC) or embedded clause (EC).",
        parentTip:
          "Main clause = can stand alone as a sentence. Subordinate clause = cannot stand alone (begins with a subordinating conjunction like because, although, when). Embedded clause = inserted inside the sentence, often with who, which, that.",
        prompts: [
          {
            text: "1. Although she had studied for weeks, she still felt nervous before the exam.",
            type: "lines",
            lines: 1,
          },
          {
            text: "2. The scientist, who had spent thirty years researching the disease, announced the breakthrough at dawn.",
            type: "lines",
            lines: 1,
          },
          {
            text: "3. He decided to stay when he realised the storm had made the roads impassable.",
            type: "lines",
            lines: 1,
          },
          {
            text: "4. The letter, which had been lost in the post for six months, finally arrived on the morning of the wedding.",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Combine Sentences Using Clauses",
        instruction:
          "Combine each pair of simple sentences into one complex sentence using either a subordinating conjunction or an embedded clause. Try to do it in a way that feels natural.",
        parentTip:
          "Useful subordinating conjunctions: although, because, when, while, since, unless, until, after, before. Useful relative pronouns for embedded clauses: who, which, that, whose, where.",
        prompts: [
          {
            text: "The old man sat on the bench. He had nowhere else to go.\n   Combined: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "The painting was stolen. It was worth over two million dollars.\n   Combined: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "She did not speak for a long time. She was choosing her words carefully.\n   Combined: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "The café had been closed for years. Everybody in town still called it Maggie's.\n   Combined: ________________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write with Deliberate Complexity",
        instruction:
          "Write a paragraph (6–8 sentences) describing a place — real or imagined — using at least two embedded clauses and two subordinate clauses. After writing, annotate your paragraph by labelling each clause type.",
        parentTip:
          "This is a genuine piece of writing, not just a grammar exercise. Read the paragraph aloud together when done and discuss: does the complexity add to the description, or does it feel forced anywhere?",
        prompts: [
          {
            text: "Write your paragraph here:",
            type: "box",
          },
          {
            text: "List the embedded clauses you used and label where they appear in your paragraph.",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Edit a recent piece of your own writing: find two places where you could add an embedded clause to enrich a description.",
      "Find a paragraph by a professional author and count the clause types used. Does the author tend towards simplicity or complexity? What effect does this create?",
    ],
  },

  // ── WS 3: TEEL/PEEL Analytical Paragraphs
  {
    slug: "analytical-paragraph-structure",
    title: "Writing Analytical Paragraphs (TEEL/PEEL)",
    strand: "Literacy",
    description:
      "Master the structure of a well-formed analytical paragraph and use it to write about literary and non-literary texts with precision and evidence.",
    lesson: {
      title: "The Paragraph as an Argument",
      objective:
        "Write well-structured analytical paragraphs using TEEL or PEEL structure, integrating quotations and developing ideas with specific reasoning rather than general statements.",
      materials: [
        "A short text excerpt — a poem, news article, or paragraph from a novel",
        "A notebook",
        "The worksheet activities below",
      ],
      intro: {
        title: "What Is Analysis?",
        script:
          "There is a big difference between describing something and analysing it. Description says what is there. Analysis says why it matters and how it works. 'The author uses the word stormy to describe the night' is description. 'The author's choice of the word stormy creates a sense of foreboding and signals to the reader that the events to follow will be turbulent' is analysis. At Year 7, you are making the shift from describing texts to genuinely analysing them.",
        action:
          "Take any sentence from your chosen text. Write a description of it (what it says). Then write an analysis of it (why it matters, how it works, what it does for the reader). Compare the two and discuss the difference.",
      },
      mainActivity: {
        title: "TEEL in Action",
        script:
          "TEEL gives every paragraph a clear job. Topic sentence: your argument for this paragraph in one clear sentence. Evidence: a specific quote or example from the text. Explanation: how the evidence proves your topic sentence — this is the real analysis. Link: connect back to the broader argument or essay question. Every word in an analytical paragraph earns its place. No padding, no summary, no retelling of plot.",
        action:
          "Write one TEEL paragraph together on the chosen text. Write the T sentence first, then choose the most precise and interesting evidence, then write the Explanation — and challenge yourselves to say something genuinely specific and insightful about how the evidence works. The Link should feel like a logical conclusion, not an afterthought.",
      },
      wrapUp: {
        title: "The Explanation Is Everything",
        script:
          "The E for Explanation is where most students lose marks — either because they repeat what the quote says, or because they make a general observation rather than a specific one. The test is this: could you say this about any piece of writing, or is it specific to this text and this quotation? If it could apply anywhere, push further.",
        action:
          "Read the Explanation from your TEEL paragraph. Ask: is this specific to this quote and this text? If not, rewrite it to be more precise.",
      },
      parentTip:
        "At Year 7, your child is ready for genuinely challenging intellectual conversation about texts. Do not just check for correct structure — engage with the ideas. Do you agree with their analysis? Why or why not? What other interpretations are possible?",
      extension:
        "Write a second analytical paragraph on the same text arguing a different angle — perhaps an alternative interpretation of the same evidence. Which paragraph is more convincing?",
      resources: [
        {
          title: "Purdue OWL — Using Literary Quotations",
          url: "https://owl.purdue.edu/owl/research_and_citation/using_research/quoting_paraphrasing_and_summarizing/index.html",
          description: "Guidance on how to integrate and analyse quotations in analytical writing.",
        },
        {
          title: "ReadWriteThink — Text Analysis Activities",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/text-analysis",
          description: "Structured activities for developing text analysis skills.",
        },
        {
          title: "Khan Academy — Writing Analytical Essays",
          url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab/cc-7th-writing/cc-7th-analytical-writing/a/how-to-write-an-analytical-essay",
          description: "Step-by-step guide to analytical essay writing with model examples.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Description vs Analysis",
        instruction:
          "For each statement, decide whether it is description (D) or analysis (A). Then rewrite any description statements as analysis.",
        parentTip:
          "Analysis always answers 'why' or 'how' or 'what effect does this have'. If the statement only answers 'what', it is probably description.",
        prompts: [
          {
            text: "1. 'The writer uses a lot of short sentences at the end of the chapter.'\n   D or A? _____\n   If D, rewrite as analysis: __________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "2. 'The repeated use of short sentences during the climax creates a breathless, urgent pace that mirrors the character's panic and forces the reader to race through the lines.'\n   D or A? _____",
            type: "lines",
            lines: 1,
          },
          {
            text: "3. 'The author uses the metaphor of a storm to describe the character's anger.'\n   D or A? _____\n   If D, rewrite as analysis: __________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a TEEL Paragraph",
        instruction:
          "Read the extract below and write a full TEEL analytical paragraph in response to this question: How does the author create a sense of danger in this extract?",
        parentTip:
          "Read the extract together and discuss possible interpretations before writing. The analytical thinking should happen in conversation first — writing captures what has already been thought.",
        prompts: [
          {
            text: "Extract: 'The door at the end of the corridor was not quite closed. A thin bar of yellow light leaked from beneath it. Somewhere beyond — in the room she had promised herself she would never enter — something moved.'\n\nWrite your TEEL paragraph below. Label each part T / E / E / L in the margin.",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Integrating a Quotation",
        instruction:
          "Strong analytical writing embeds quotations smoothly rather than dropping them in. Rewrite each clunky quotation integration to make it flow naturally into a sentence.",
        parentTip:
          "Show your child the difference between: an approach that drops a quote in isolation versus one that embeds it into an analytical sentence. Compare: an approach that embeds quotations smoothly. Compare a dropped quotation versus one integrated into a sentence. The integrated version is always more effective in analytical writing. 'The author uses the colour red to signal danger immediately.' The second is analysis; the first is quotation without explanation.",
        prompts: [
          {
            text: "Clunky: The author uses the word shattered. This creates a sense of destruction.\n   Improved: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Clunky: There is a metaphor in the text. The author writes that her smile was a locked door, meaning she was hiding something.\n   Improved: ________________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
    ],
    nextSteps: [
      "Write three TEEL paragraphs on a text you are studying — one per main idea — and see if they could be linked together as an essay.",
      "Take a TEEL paragraph you have written and improve only the Explanation section — push it to be more specific and insightful than your first attempt.",
    ],
  },

  // ── WS 4: Poetry Analysis
  {
    slug: "poetry-analysis",
    title: "Poetry Analysis — Style and Purpose",
    strand: "Literature",
    description:
      "Analyse a poem's language, structure and poetic devices, and explore how they work together to create meaning and emotional effect.",
    lesson: {
      title: "Inside the Poem",
      objective:
        "Identify and explain the effect of poetic devices (imagery, sound devices, enjambment, stanza structure, rhythm) in a poem, and write an analytical response that connects these techniques to the poem's overall purpose.",
      materials: [
        "One poem — choose together from a published anthology, or use a poem by an Australian poet",
        "A pencil for annotating",
        "The worksheet activities below",
      ],
      intro: {
        title: "Why Poetry Is Difficult — and Worth It",
        script:
          "A lot of people find poetry difficult, and that is because poetry is compressed. Every word has to carry more meaning than in prose. A novelist might take a paragraph to describe a moment of grief; a poet might do it in six words. This compression is what makes poetry so striking when it works — and so frustrating when it does not click immediately. The trick is to slow down even more than you would with a story, and to read it aloud.",
        action:
          "Read your chosen poem together, slowly, three times: the first silently, the second aloud by one of you, the third aloud by the other. After the third reading, talk for two minutes — no analysis yet — just: what did you feel? What images stuck with you?",
      },
      mainActivity: {
        title: "Annotating for Effect",
        script:
          "Annotation is the practice of marking a text with observations about how it works. In poetry, annotate for: imagery — what pictures does the language create? Sound — alliteration, assonance, rhyme, rhythm? Structure — how is the poem divided? Does it end differently from how it began? Speaker and tone — who is speaking, and what is their attitude? Each annotation should connect to a question: why did the poet make this choice, and what effect does it create for the reader?",
        action:
          "Annotate the poem together, going stanza by stanza. Write observations in the margin. Do not worry about being 'right' — provisional observations lead to better analysis than silence.",
      },
      wrapUp: {
        title: "The Poem's Purpose",
        script:
          "Every poem is made for a reason. The reason might be to process grief, to celebrate something fleeting, to challenge a political view, to capture a moment of beauty before it disappears. The purpose shapes every choice — the form, the imagery, the tone, even the line breaks. The final step is to ask: what do I think this poem is for, and how does its craft serve that purpose?",
        action:
          "Write one sentence together that states the poem's purpose and how the craft serves it. This is the core of any poetry essay.",
      },
      parentTip:
        "Poetry analysis is one of the areas where your child will benefit most from hearing your genuine response. Do not perform the role of teacher — be a reader. Say what you notice, what confuses you, what moves you. This models authentic intellectual engagement better than any instruction.",
      extension:
        "Compare your chosen poem with another on a similar subject or theme. How do the poets use different techniques to approach the same idea? Which poem do you find more effective, and why?",
      resources: [
        {
          title: "ReadWriteThink — Poetry Analysis Interactive",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives/poetry-analysis",
          description: "Interactive tool for annotating and analysing poems.",
        },
        {
          title: "Purdue OWL — Writing About Poetry",
          url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_about_poetry.html",
          description: "Practical guidance on writing analytical responses to poetry.",
        },
        {
          title: "ABC Education — Understanding Poetry",
          url: "https://education.abc.net.au/home#!/media/2614502/understanding-poetry",
          description: "Video resource introducing key features of poetry analysis.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Poetic Devices — Identify and Explain",
        instruction:
          "Find each device in your chosen poem. Write the example from the text and explain the effect it creates.",
        parentTip:
          "Effect explanations should be specific: not 'it creates a mood' but 'it creates a mood of quiet resignation that makes the reader feel the futility of the speaker's situation'. Specificity is everything.",
        prompts: [
          {
            text: "Poem title and poet: _____________________________________________\n\nFind an example of IMAGERY (language that creates a picture or sensation). Quote it and explain its effect.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Find a SOUND DEVICE (alliteration, assonance, rhyme, or onomatopoeia). Quote it and explain why the poet might have used this sound pattern here.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Look at the poem's STRUCTURE — how it is divided into stanzas, whether the line lengths vary, where the enjambment (run-on lines) occurs. What does the structure contribute to the poem's meaning or feeling?",
            type: "lines",
            lines: 3,
          },
          {
            text: "How would you describe the TONE of the poem? What specific language choices create this tone?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analytical Paragraph on the Poem",
        instruction:
          "Write a TEEL analytical paragraph responding to this question: How does the poet use language to create a strong emotional effect?",
        parentTip:
          "Discuss the question together before writing. What emotion does the poem create? Which specific technique most powerfully creates that emotion? That technique and that quote should be the focus of the paragraph.",
        prompts: [
          {
            text: "Write your analytical paragraph here (label T / E / E / L in the margin):",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Your Interpretation",
        instruction:
          "Poetry always allows for multiple interpretations. Write a short response (4–5 sentences) explaining what you think this poem is about — not just on the surface, but at a deeper level. What is the poet really exploring?",
        parentTip:
          "Share your own interpretation too, and be willing to have your child disagree with it. Defending an interpretation against a different one is one of the highest-level analytical skills.",
        prompts: [
          {
            text: "Write your interpretation here:",
            type: "box",
          },
        ],
      },
    ],
    nextSteps: [
      "Read one new poem per week for a month — try to find poems by Australian poets alongside international ones. After each reading, write one sentence about what you think the poem's purpose is.",
      "Write your own poem on a topic you care about, using at least two deliberate poetic devices. Annotate it yourself, labelling each technique.",
    ],
  },

  // ── WS 5: Short Story Analysis — Author's Style and Purpose
  {
    slug: "short-story-style-purpose",
    title: "Short Story Analysis: Style and Purpose",
    strand: "Literature",
    description:
      "Analyse how a short story's narrative choices — point of view, pacing, setting, dialogue — serve the author's purpose and create meaning for the reader.",
    lesson: {
      title: "Every Choice Is a Meaning",
      objective:
        "Identify and analyse the narrative techniques in a short story (point of view, pacing, setting, dialogue and characterisation) and explain how they serve the author's purpose.",
      materials: [
        "One short story — a published short story works best (try Tim Winton, Kate Chopin, or Henry Lawson for range)",
        "A pencil for annotation",
        "The worksheet activities below",
      ],
      intro: {
        title: "The Thousand Decisions",
        script:
          "A short story is the product of hundreds of decisions: whose perspective do we use? Where does the story start? What dialogue is included and what is left out? How fast or slow do we move through time? Each of these decisions has a consequence. The most useful question a reader can bring to a short story is not just 'what happened?' but 'why did the author make this happen in this way, at this moment, from this angle?'",
        action:
          "Before reading your chosen story, look at the first paragraph together. Ask: who is speaking? Where are we? When does the story begin? What is the author foregrounding — and what does that tell us about what they think matters most?",
      },
      mainActivity: {
        title: "Narrative Techniques",
        script:
          "The key techniques in short fiction are: Point of view — first person (I), third person limited (following one character's thoughts), or third person omniscient (knowing all characters' inner lives). Pacing — some scenes are stretched out with detail; others are compressed into a single sentence. This tells us what matters. Setting — where and when a story is set is never accidental; it shapes the characters and their possibilities. Dialogue — what characters say, what they avoid saying, and how they speak reveals character more efficiently than any description.",
        action:
          "Read the story together, making brief margin notes at key decisions: when the point of view shifts, when pacing suddenly changes, when dialogue is used instead of narration. These notes become the raw material for analysis.",
      },
      wrapUp: {
        title: "What Is This Story For?",
        script:
          "Short stories, like poems, have a purpose. Some aim to capture a moment of human experience. Some criticise society. Some explore what it means to be a specific person in a specific place at a specific time. The author's purpose shapes every narrative decision. What do you think this author wanted you to feel, think, or question when you finished reading?",
        action:
          "Write one sentence together articulating what you believe the author's purpose is. Then discuss: do you think the story achieves it?",
      },
      parentTip:
        "Short stories are ideal texts for homeschool because they can be read in a single session and discussed immediately. Consider building a short-story reading habit: one story per week, discussed over a meal. This builds analytical thinking across many texts, not just the one studied for the worksheet.",
      extension:
        "Write an alternative opening to the story from a different point of view. How does the perspective change what we know, feel, and assume about the characters and events?",
      resources: [
        {
          title: "ReadWriteThink — Short Story Elements",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/short-story-elements",
          description: "Lesson plan exploring the key elements of short story craft.",
        },
        {
          title: "Purdue OWL — Writing About Fiction",
          url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_about_fiction.html",
          description: "Practical guidance on analysing and writing about fiction.",
        },
        {
          title: "ABC Education — Australian Short Stories",
          url: "https://education.abc.net.au/home#!/media/2617803/australian-short-stories",
          description: "Resource on Australian short story tradition with reading examples.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Narrative Technique Analysis",
        instruction:
          "Answer each question about the short story you have read, supporting your response with specific evidence from the text.",
        parentTip:
          "Every answer should include a quote or specific reference. Vague responses ('the setting creates atmosphere') are not analytical. Specific ones are: 'The story's setting in a remote outback town in the 1930s isolates the characters from any help, making the central conflict feel inescapable.'",
        prompts: [
          {
            text: "Short story title and author: _______________________________________\n\nWhat point of view is used? Quote one sentence that makes this clear, and explain why this perspective might serve the author's purpose.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Find one moment where the author slows the pacing (gives a lot of detail to a short period of time). What is happening in this moment, and why do you think the author slows down here?",
            type: "lines",
            lines: 3,
          },
          {
            text: "How does the setting contribute to the story's meaning? Be specific about the time, place, and how these create particular constraints or possibilities for the characters.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Find one piece of dialogue and explain what it reveals about character or relationship that the narration does not say directly.",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analytical Paragraph on Author's Purpose",
        instruction:
          "Write a TEEL analytical paragraph responding to this question: How does one specific narrative technique in this story serve the author's purpose?",
        parentTip:
          "This is a complex question. Discuss it together first: what do you think the author's purpose is? Which technique most directly serves that purpose? Which quote most clearly demonstrates both the technique and its effect?",
        prompts: [
          {
            text: "Write your analytical paragraph here:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Respond to the Story",
        instruction:
          "Write a genuine personal response (5–7 sentences): what did you think of this story? What did it make you feel or think about? Was the author's purpose achieved for you as a reader?",
        parentTip:
          "This response should be honest, not a performance. There is no right answer — the goal is a thoughtful, evidence-informed personal position.",
        prompts: [
          {
            text: "Write your response here:",
            type: "box",
          },
        ],
      },
    ],
    nextSteps: [
      "Read one short story per week for a month — try to include at least one Australian story. After each reading, write one sentence on: what narrative technique was most distinctive in this story?",
      "Write your own short story (500–800 words) making deliberate choices about point of view, pacing and setting. Annotate your own work, labelling each technique.",
    ],
  },

  // ── WS 6: Visual Literacy and Multimodal Texts
  {
    slug: "visual-literacy-multimodal",
    title: "Visual Literacy and Multimodal Texts",
    strand: "Literacy",
    description:
      "Analyse how images, layout, colour and text work together in multimodal texts to create meaning and influence audiences.",
    lesson: {
      title: "Reading What You See",
      objective:
        "Identify and analyse the visual and multimodal features of a text (image, colour, layout, font, and the relationship between image and text), and explain how these features create meaning and influence audiences.",
      materials: [
        "One multimodal text — a magazine advertisement, a website homepage, a film poster, or a news photo with caption",
        "The worksheet activities below",
      ],
      intro: {
        title: "Every Image Is an Argument",
        script:
          "We are surrounded by images that are trying to make us feel or believe or do something. The designers of these images have made hundreds of decisions — just like the authors of written texts — about what to include, what to exclude, where to place things, what colours to use, and how image and text relate to each other. These decisions are not neutral. They are arguments made with pictures instead of words. Visual literacy means being able to read those arguments.",
        action:
          "Look at your chosen multimodal text together. Before any analysis, just describe what you see — who or what is in the foreground, what is in the background, what colours dominate. Then ask: what is this text trying to make you feel or do?",
      },
      mainActivity: {
        title: "The Grammar of Images",
        script:
          "Images have a grammar, just like sentences. Salience: what is the most visually prominent element — the eye goes there first. Gaze: is the subject looking at the viewer directly (demand — creates engagement) or away (offer — invites the viewer to observe)? Angle: a low angle makes the subject look powerful; a high angle makes them look small or vulnerable. Vectors: lines and shapes that guide your eye through the image. Colour: warm colours create energy or danger; cool colours create calm or distance.",
        action:
          "Analyse your chosen text using these five categories. Write one observation for each. Then discuss: how do these visual choices work together to create a unified message?",
      },
      wrapUp: {
        title: "Image and Text Together",
        script:
          "In multimodal texts, image and text work together — but they do not always say the same thing. Sometimes they reinforce each other (the text describes what the image shows). Sometimes the image adds something the text does not say. Sometimes there is deliberate tension between them. The relationship between the two is often where the most interesting meaning is made.",
        action:
          "Read the text in your chosen multimodal text. Then ask: does the text say the same thing as the image, something different, or something that complicates the image? What is created by having both together?",
      },
      parentTip:
        "Visual literacy is increasingly important in a world saturated with images. The skills practised here — identifying salience, gaze, angle, and the image-text relationship — apply directly to evaluating social media, news media, advertising, and political messaging. Make this real by discussing images your child encounters in daily life.",
      extension:
        "Create your own simple multimodal text — a mock advertisement, a book cover, or a news page layout — and then analyse your own design choices. What decisions did you make, and why?",
      resources: [
        {
          title: "ReadWriteThink — Media Literacy",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/media-literacy",
          description: "Lesson plan on analysing media texts and visual rhetoric.",
        },
        {
          title: "ABC Education — Visual Literacy",
          url: "https://education.abc.net.au/home#!/media/2620001/visual-literacy",
          description: "Video resource introducing concepts of visual literacy and image analysis.",
        },
        {
          title: "Purdue OWL — Visual Rhetoric",
          url: "https://owl.purdue.edu/owl/general_writing/visual_rhetoric/index.html",
          description: "Introduction to analysing visual texts and their rhetorical strategies.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Describe Your Chosen Multimodal Text",
        instruction:
          "Begin with careful description before analysis. Answer each question with specific detail from your text.",
        parentTip:
          "Good analysis always begins with careful observation. Do not rush to interpretation — describe precisely what is there first.",
        prompts: [
          {
            text: "What type of multimodal text is this and what is its purpose? (advertise, inform, persuade, entertain?)\n   ___________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "What is the most salient (visually dominant) element? Why do you think it was placed in this position?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Describe the gaze of any human or animal subject in the image. Are they looking at the viewer or away? What effect does this create?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What colours dominate? What associations or emotions do these colours typically carry?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse the Image-Text Relationship",
        instruction:
          "Examine how the written text and the image work together in your multimodal text.",
        parentTip:
          "Some students find the image-text relationship the trickiest concept. Help by asking: if you covered the words, what would the image alone suggest? If you covered the image, what would the words alone suggest? What is gained by having both?",
        prompts: [
          {
            text: "What does the written text say or imply?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Does the image reinforce, add to, or complicate what the text says? Explain with specific reference to both.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Who is the target audience for this text? What specific features of the image and text make this clear?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write an Analytical Response",
        instruction:
          "Write a TEEL analytical paragraph responding to: How does this multimodal text use visual and textual features to influence its audience?",
        parentTip:
          "This paragraph brings together everything observed and discussed above. Encourage your child to choose the single most powerful or interesting feature to build the paragraph around — the aim is depth, not a list of observations.",
        prompts: [
          {
            text: "Write your analytical paragraph here:",
            type: "box",
          },
        ],
      },
    ],
    nextSteps: [
      "Over the next week, pay attention to three multimodal texts you encounter — advertisements, social media posts, news photos. For each, ask: who made this, for whom, and what are they trying to make me feel or do?",
      "Create a simple multimodal text on a topic you care about and annotate your own design choices.",
    ],
  },

  // ── WS 7: Cohesive Devices and Text Coherence
  {
    slug: "cohesive-devices-text-flow",
    title: "Cohesive Devices and Text Coherence",
    strand: "Language",
    description:
      "Understand how cohesive devices — pronouns, connectives, repetition, reference chains — create flow and coherence in written texts.",
    lesson: {
      title: "Gluing Your Writing Together",
      objective:
        "Identify and use cohesive devices (pronouns, conjunctions, lexical cohesion, reference chains) to create flowing, coherent written texts where ideas connect clearly.",
      materials: [
        "A well-written paragraph from a novel or quality non-fiction text",
        "A highlighter",
        "The worksheet activities below",
      ],
      intro: {
        title: "Why Does This Feel Choppy?",
        script:
          "You have probably read writing that felt jerky or disconnected — where you had to re-read sentences to work out how they connected. And you have probably read writing that flowed smoothly, where one idea led naturally to the next. The difference is often cohesion — the invisible glue that holds a text together. Once you can see and name the devices writers use to create cohesion, you can use them yourself.",
        action:
          "Read two paragraphs: one written deliberately without cohesive devices (short, disconnected sentences), one with them (smooth, connected, using pronouns and connectives). Ask: which is easier to read? Why? What is different between them?",
      },
      mainActivity: {
        title: "Types of Cohesive Devices",
        script:
          "There are four main types. Pronoun reference: using 'he', 'she', 'they', 'it' to refer back to a noun already mentioned — this avoids repetition and creates flow. Conjunction and connective: words and phrases that show logical relationships — 'however', 'therefore', 'as a result', 'furthermore', 'in contrast'. Lexical cohesion: using related words and synonyms — if you introduce 'the scientist' in sentence one, you might then use 'the researcher', 'the expert', 'she'. Reference chains: tracking a key idea or character through the whole paragraph using these tools.",
        action:
          "Highlight your chosen paragraph using four colours — one for each type of cohesive device. How many of each type can you find? Which type does this writer use most often?",
      },
      wrapUp: {
        title: "Applying Cohesion to Your Own Writing",
        script:
          "Cohesion problems in student writing usually look like three things: too many short disconnected sentences, repeating the same noun over and over (for example: the scientist did this, the scientist did that, the scientist...), or ideas that jump without logical connectives. The fix is usually small: add a connective, replace a noun with a pronoun, or use a synonym.",
        action:
          "Take a paragraph of your child's own writing. Together, identify and fix one cohesion problem. Read the revised paragraph aloud and discuss whether the flow has improved.",
      },
      parentTip:
        "Cohesion is one of those grammatical concepts that pays immediate dividends in writing quality. Once your child starts noticing and using cohesive devices deliberately, their writing will noticeably improve. Return to this concept across multiple writing tasks rather than treating it as a one-off lesson.",
      extension:
        "Write a paragraph on any topic, then deliberately highlight all the cohesive devices you used. Are there any places where the text still feels choppy? What could you add or change?",
      resources: [
        {
          title: "Purdue OWL — Coherence and Cohesion",
          url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/paragraphs_and_paragraphing/index.html",
          description: "Guidance on creating coherent, well-connected paragraphs.",
        },
        {
          title: "ReadWriteThink — Connecting Ideas in Writing",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/connecting-ideas-writing",
          description: "Lesson plan on using connectives and cohesive devices effectively.",
        },
        {
          title: "Khan Academy — Transitions and Connectives",
          url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab/cc-7th-grammar/cc-7th-transitions/a/using-transitional-words-and-phrases",
          description: "Explainer on using transitional words and phrases to connect ideas.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identify Cohesive Devices",
        instruction:
          "Read the paragraph below. Find and label each cohesive device using these codes: PR (pronoun reference), CO (connective), LE (lexical cohesion/synonym).",
        parentTip:
          "Work through this together the first time. Identifying cohesive devices is a skill that takes practice — reading the paragraph aloud while looking for each type is usually more effective than scanning silently.",
        prompts: [
          {
            text: "Paragraph: 'Marie Curie was one of the most remarkable scientists of the twentieth century. The Polish-born researcher became the first person to win two Nobel Prizes, in physics and in chemistry. Her groundbreaking discoveries about radioactivity transformed our understanding of atomic structure. However, despite her extraordinary achievements, the physicist faced significant discrimination as a woman in science. She persevered nonetheless, and her legacy continues to inspire scientists around the world.'\n\nList three cohesive devices you found, label their type, and explain what they connect.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response",
        title: "Fix the Choppy Paragraph",
        instruction:
          "Rewrite the paragraph below to improve its cohesion. Add connectives, replace repeated nouns with pronouns or synonyms, and smooth the flow between ideas. Keep all the information.",
        parentTip:
          "Read the original aloud first so your child can hear where the choppiness is. Then read the revised version aloud to check whether the flow has actually improved.",
        prompts: [
          {
            text: "Choppy paragraph: 'The old lighthouse stood on the cliff. The old lighthouse was very tall. The old lighthouse was built in 1892. The old lighthouse guided ships. Ships were often wrecked on the rocks. The rocks were dangerous. The lighthouse keeper lived in the lighthouse. The lighthouse keeper was called Amos.'\n\nRewritten paragraph with better cohesion:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Cohesive Paragraph",
        instruction:
          "Write an original paragraph (6–8 sentences) on a topic of your choice, deliberately using at least one of each cohesive device type: a pronoun reference, a connective, and a lexical chain (using two or more synonyms for the same person or thing). Annotate your paragraph when finished.",
        parentTip:
          "The best test of a cohesive paragraph is whether it flows smoothly when read aloud. Read it together and mark any places that still feel like they need better connections.",
        prompts: [
          {
            text: "Write your paragraph here:",
            type: "box",
          },
          {
            text: "Label and list the cohesive devices you used:",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Choose any paragraph from your own recent writing and rewrite it with improved cohesion. Compare the two versions — what specific changes made the biggest difference to the flow?",
      "Read any paragraph from a quality novel and identify every pronoun reference in it. How many times does the same noun appear directly versus through pronouns?",
    ],
  },
];

export function getYear7EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year7EnglishWorksheets.find((ws) => ws.slug === slug);
}
