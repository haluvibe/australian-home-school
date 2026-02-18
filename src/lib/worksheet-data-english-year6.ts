import type { WorksheetItem } from "./worksheet-types";

export const year6EnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Connotation vs Denotation
  {
    slug: "connotation-vs-denotation",
    title: "Connotation vs Denotation",
    strand: "Language",
    description:
      "Explore how words carry layers of meaning — the literal dictionary definition versus the feelings and associations they evoke in readers.",
    lesson: {
      title: "Words Have Feelings Too",
      objective:
        "Distinguish between denotation (a word's literal meaning) and connotation (its emotional or cultural associations), and explain how authors choose words deliberately to shape reader response.",
      materials: [
        "A dictionary — print or online",
        "Two colours of highlighter or coloured pencils",
        "Scrap paper for brainstorming",
        "The worksheet activities below",
      ],
      intro: {
        title: "The Snake and the Serpent",
        script:
          "I want you to think about two words: snake and serpent. Both refer to the same animal. Close your eyes and picture each one. 'A snake slithered through the grass' — what do you see? Now: 'A great serpent rose from the depths' — does that feel different? The denotation is identical, but the connotation — the emotional atmosphere each word brings — is completely different. This is one of the most powerful tools a writer has.",
        action:
          "Write 'snake' and 'serpent' on two separate pieces of paper. Both of you jot down three words you associate with each, working independently, then compare lists. Discuss which word sounds more ancient, more dangerous, more mythic — and why.",
      },
      mainActivity: {
        title: "The Connotation Spectrum",
        script:
          "Every word sits somewhere on a spectrum from very positive to very negative. Think about three words for someone who saves money: thrifty feels admiring, frugal is neutral, miserly feels critical. The facts described are the same — the connotation does the emotional work. When authors choose words, they are placing them on this spectrum deliberately.",
        action:
          "Work through the sorting activity on the worksheet together. When your child places a word, ask for a reason — connotation can vary between people and cultures, and that variation is worth discussing.",
      },
      wrapUp: {
        title: "Words in the Wild",
        script:
          "Now that you know about connotation, you will start noticing it everywhere — in news headlines, in advertising slogans, in the opening lines of a novel. Authors never pick a word without reason. Your job as a reader is to ask: why this word, and not a more neutral one?",
        action:
          "Find a short newspaper headline or a book blurb together. Circle two or three words and discuss their connotations. Could the writer have used a neutral word instead? What would change?",
      },
      parentTip:
        "If your child finds the concept abstract, try a set of near-synonyms: thin / slender / scrawny all describe the same physical attribute but carry very different feelings. Ask which word they would use to describe a friend, and why. That personal instinct is connotation at work.",
      extension:
        "Take one neutral sentence about a place (for example, 'The building was large and old') and rewrite it twice: once with positive connotations to make the place feel welcoming, and once with negative connotations to make it feel sinister — without adding any new facts.",
      resources: [
        {
          title: "Khan Academy — Connotation and Denotation",
          url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab/cc-6th-vocab/cc-6th-connotation-denotation/a/what-is-connotation",
          description:
            "Clear explainer with examples and practice questions suited to Year 6 readers.",
        },
        {
          title: "ReadWriteThink — Connotation and Word Choice",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/connotation-denotation",
          description:
            "Lesson plan with adaptable activities for exploring word choice and emotional resonance.",
        },
        {
          title: "ABC Education — The Power of Word Choice",
          url: "https://education.abc.net.au/home#!/media/2621992/the-power-of-word-choice",
          description:
            "Short video exploring how authors select vocabulary to shape meaning and mood.",
        },
      ],
    },
    activities: [
      {
        type: "sorting",
        title: "Sort by Connotation",
        instruction:
          "Sort each word into the correct column: Positive (warm or admiring), Neutral (no strong emotional charge), or Negative (harsh or critical). Be ready to explain your choices.",
        parentTip:
          "Discuss any words your child finds ambiguous — connotation can shift with context. What matters is that your child can give a reason for each placement.",
        columns: ["Positive", "Neutral", "Negative"],
        items: [
          { label: "home" },
          { label: "building" },
          { label: "shack" },
          { label: "slender" },
          { label: "thin" },
          { label: "scrawny" },
          { label: "unique" },
          { label: "different" },
          { label: "peculiar" },
          { label: "assertive" },
          { label: "bossy" },
          { label: "confident" },
        ],
      },
      {
        type: "open-response",
        title: "Replace the Word — Same Fact, Different Feeling",
        instruction:
          "Each sentence uses a neutral word. Rewrite it twice: once with positive connotations, once with negative connotations. The core facts must stay the same.",
        parentTip:
          "A thesaurus is a great tool here. Look up the neutral word together and explore which synonyms lean positive, which lean negative.",
        prompts: [
          {
            text: "1. The dog ran across the yard.\n   Positive rewrite: ___________________________________________\n   Negative rewrite: ___________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "2. She spoke about her idea in front of the class.\n   Positive rewrite: ___________________________________________\n   Negative rewrite: ___________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "3. The old man walked along the street.\n   Positive rewrite: ___________________________________________\n   Negative rewrite: ___________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse an Author's Word Choice",
        instruction:
          "Read the two descriptions of the same building. Identify words with the strongest connotations and answer the questions below.",
        parentTip:
          "Read both descriptions aloud — the mood difference is clearer when heard. Ask: if you were writing a ghost story, which paragraph would you use?",
        prompts: [
          {
            text: "Description A: 'The cottage nestled among whispering pines, its amber windows glowing against the twilight. Smoke curled gently from the chimney, and the scent of pine needles drifted on a cool breeze.'\n\nDescription B: 'The shack crouched between gnarled pines, its cracked windows glinting in the fading light. A thin wisp of smoke leaked from a crooked chimney, and the smell of damp rot hung in the cold air.'\n\nList two words from Description A that create a warm or welcoming feeling.",
            type: "lines",
            lines: 2,
          },
          {
            text: "List two words from Description B that create a threatening or uncomfortable feeling.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Both descriptions are about the same building. How do the different word choices change your response as a reader?",
            type: "box",
          },
        ],
      },
    ],
    nextSteps: [
      "Find one example of strong connotation in your current reading book — a word that could have been replaced by something neutral. Write it in your reading journal with a note on why the author chose it.",
      "Try the synonym spectrum challenge: choose any common word and arrange five synonyms from most positive to most negative connotation.",
    ],
  },

  // ── WS 2: Modal Verbs and Passive Voice
  {
    slug: "modal-verbs-passive-voice",
    title: "Modal Verbs and Passive Voice",
    strand: "Language",
    description:
      "Understand how modal verbs express degrees of certainty and obligation, and how the passive voice shifts the focus and formality of a sentence.",
    lesson: {
      title: "Who Did What — and How Sure Are We?",
      objective:
        "Identify and use modal verbs to express certainty, permission and obligation; convert active sentences to passive voice and explain the effect.",
      materials: [
        "Two contrasting colours of pen",
        "Scrap paper for sentence experiments",
        "The worksheet activities below",
      ],
      intro: {
        title: "The Weather Forecaster Game",
        script:
          "Weather forecasters are masters of expressing uncertainty. They never say 'It WILL rain tomorrow' unless completely confident. Instead: 'It MAY rain' or 'There MIGHT be showers' or 'It SHOULD clear by evening.' Those helper verbs — may, might, should, will — are called modal verbs, and they carry the certainty information in the sentence.",
        action:
          "Play a Certainty Sliding Scale round. Start with: 'I eat breakfast tomorrow.' Ask your child to change just one word for high certainty ('will eat'), moderate possibility ('might eat'), and polite advice ('should eat'). Notice how the modal verb does all the work.",
      },
      mainActivity: {
        title: "Active and Passive Voice",
        script:
          "In an active sentence, the subject performs the action: 'The council approved the plan.' In a passive sentence, the subject receives the action: 'The plan was approved by the council.' The plan moves to the front. Writers use passive voice when the action matters more than who did it, when the doer is unknown, or when they want to avoid naming responsibility. Classic example: 'Mistakes were made.'",
        action:
          "Write three active sentences on scrap paper. Take turns converting them to passive. Discuss: which version feels more formal? Which tells us more about who is responsible?",
      },
      wrapUp: {
        title: "Why Does It Matter?",
        script:
          "Scientists, lawyers and journalists use passive voice deliberately. Modal verbs appear in persuasive writing, scientific reports and formal letters. Once you can spot and name these tools, you can start using them precisely in your own writing.",
        action:
          "Skim a page from a science textbook or an informational article. Highlight modal verbs in one colour and passive constructions in another. How many did you find?",
      },
      parentTip:
        "A memorable shortcut for passive voice: if you can add 'by zombies' after the verb and it sounds grammatical, the sentence is passive. 'The cake was eaten [by zombies]' — passive. 'The zombies ate the cake' — active.",
      extension:
        "Find a paragraph of formal writing — a government notice, encyclopedia entry, or science article. Count the passive constructions, then rewrite in active voice. Which version feels more engaging, and why?",
      resources: [
        {
          title: "Khan Academy — Modal Verbs",
          url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab/cc-6th-grammar/cc-6th-modal-verbs/a/modal-verbs-review",
          description: "Concise explanations and practice exercises on modal verbs.",
        },
        {
          title: "Purdue OWL — Active and Passive Voice",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/active_and_passive_voice/active_versus_passive_voice.html",
          description: "Clear guidance on when to use each voice, with before-and-after examples.",
        },
        {
          title: "ReadWriteThink — Grammar Interactives",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives",
          description: "Interactive tools for practising sentence construction and grammar.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identify the Modal Verb",
        instruction:
          "Underline the modal verb in each sentence. Write what it expresses: Very Certain / Probable / Possible / Advice / Permission.",
        parentTip:
          "Modal verbs are always followed by a base verb with no -ing or -s. If unsure, test: can you replace it with 'will'? If the sentence still makes sense, it is probably a modal.",
        prompts: [
          {
            text: "1. You must wear a helmet when cycling.\n   Modal: ____________  Meaning: ____________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "2. It might snow overnight.\n   Modal: ____________  Meaning: ____________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "3. She could have won the race if she had trained harder.\n   Modal: ____________  Meaning: ____________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "4. You should review your notes before the test.\n   Modal: ____________  Meaning: ____________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "5. The parcel will arrive on Tuesday.\n   Modal: ____________  Meaning: ____________________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Active to Passive",
        instruction:
          "Rewrite each active sentence in the passive voice. Decide whether to include 'by + agent' or leave it out.",
        parentTip:
          "Passive = 'to be' + past participle (eaten, written, approved). The original subject often becomes a 'by...' phrase or disappears if the doer is unimportant or unknown.",
        prompts: [
          {
            text: "Active: The students cleaned the classroom.\n   Passive: ________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Active: The chef prepared three courses.\n   Passive: ________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Active: Someone broke the window.\n   Passive (leave out the agent): ___________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Active: Scientists have discovered a new species.\n   Passive: ________________________________________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Why Passive? Analyse the Choice",
        instruction:
          "Explain in one or two sentences why the writer may have chosen passive voice in each example.",
        parentTip:
          "There is rarely one right answer — the goal is for your child to think like a writer making intentional choices.",
        prompts: [
          {
            text: "1. 'Mistakes were made.' (common in political statements)\n   Why passive? ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "2. 'The ancient temple was constructed approximately 2000 years ago.' (archaeology article)\n   Why passive? ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Write your own passive sentence in which you deliberately want to avoid naming who did something.",
            type: "lines",
            lines: 2,
          },
        ],
      },
    ],
    nextSteps: [
      "Collect three examples of passive voice from different sources this week — one from a book, one from a news article, one from a product label.",
      "Write a paragraph describing a news event using at least three different modal verbs to express varying degrees of certainty.",
    ],
  },

  // ── WS 3: Persuasive Essay Structure
  {
    slug: "persuasive-essay-structure",
    title: "Persuasive Essay Structure",
    strand: "Literacy",
    description:
      "Plan and draft a multi-paragraph persuasive essay with a strong thesis, TEEL body paragraphs, a counter-argument and a compelling conclusion.",
    lesson: {
      title: "Making Your Case",
      objective:
        "Understand the structure of a persuasive essay and begin drafting one using TEEL paragraphs, a counter-argument with rebuttal, and a conclusion with a call to action.",
      materials: [
        "A lined notebook or paper",
        "A simple planning diagram (box for thesis, three body boxes, box for conclusion)",
        "Access to one reliable source for evidence",
        "The worksheet activities below",
      ],
      intro: {
        title: "The Lawyer Analogy",
        script:
          "Imagine you are a lawyer in court. You believe in your client's innocence and must convince a jury. You do not just say 'My client is innocent!' and sit down. You present evidence carefully, anticipate the other side's arguments, address them directly, and close with a powerful summary. A persuasive essay works the same way. You are the lawyer, the reader is the jury, and your thesis is the case you are arguing.",
        action:
          "Think of a topic your child feels strongly about. Ask them to state their position in one sentence. Write that sentence at the top of a page — that is your thesis, and it stays visible for the whole lesson.",
      },
      mainActivity: {
        title: "Building a TEEL Paragraph",
        script:
          "Each body paragraph follows a four-part pattern: Topic sentence — what this paragraph argues; Evidence — a fact, statistic, example, or quote; Explanation — how the evidence proves your point; Link — a sentence connecting back to the thesis or bridging to the next argument. This is TEEL. Let us write one paragraph together.",
        action:
          "Model the whole TEEL process aloud. Write each part, thinking aloud as you go. When you reach Evidence, ask: what do we actually know, and where could we look? Your child should see the full process before attempting one alone.",
      },
      wrapUp: {
        title: "Hooks and Calls to Action",
        script:
          "Your introduction needs a hook — something that pulls the reader in immediately. This could be a surprising statistic, a rhetorical question, or a bold claim. Your conclusion should not simply repeat the introduction: raise the stakes, call the reader to act, or leave them with a thought they cannot dismiss.",
        action:
          "Draft two possible opening hooks for the chosen topic. Read them aloud and decide which is more compelling. Then write a one-sentence call to action for the conclusion.",
      },
      parentTip:
        "Year 6 students often open with 'This essay will discuss...' — a weak start. Encourage your child to dive straight into the argument and state the position boldly in the first or second sentence.",
      extension:
        "Find a short opinion piece in a newspaper or on the ABC News website. Identify the thesis, the three main arguments, and the conclusion strategy. Did the writer acknowledge the opposing view? Rate the essay's persuasiveness and justify the rating.",
      resources: [
        {
          title: "ReadWriteThink — Persuasion Map",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives/persuasion-map",
          description: "Interactive graphic organiser for planning persuasive essays.",
        },
        {
          title: "Khan Academy — Writing Strong Arguments",
          url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab/cc-6th-writing/cc-6th-argumentative-writing/a/writing-a-strong-argument",
          description: "Step-by-step guide to argumentative writing with annotated examples.",
        },
        {
          title: "Purdue OWL — Establishing Arguments",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html",
          description: "Guidance on developing and structuring clear, evidence-based arguments.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Strengthen the Thesis",
        instruction:
          "A strong thesis states your position AND gives a reason. Rewrite each weak thesis to make it specific and arguable.",
        parentTip:
          "A good thesis passes the 'so what?' test — it tells the reader why the position matters. Weak: 'Homework is bad.' Stronger: 'Excessive nightly homework reduces creative thinking time and harms family relationships, doing more harm than good for primary-aged students.'",
        prompts: [
          {
            text: "Weak: 'I think school uniforms are a good idea.'\n   Stronger thesis: ___________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Weak: 'Social media can be harmful.'\n   Stronger thesis: ___________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Write your own thesis statement on a topic you care about.",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a TEEL Paragraph",
        instruction:
          "Write one body paragraph supporting your thesis using the TEEL structure. Label each part T / E / E / L in the left margin.",
        parentTip:
          "Do this together the first time — think aloud as you draft. When you reach Evidence, model the thinking: 'I need a fact here. What do I know, or where could I look?'",
        prompts: [
          {
            text: "Topic sentence (T): _____________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Evidence (E): __________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Explanation (E): ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Link (L): ______________________________________________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Counter-Argument and Rebuttal",
        instruction:
          "Strong persuasive writing acknowledges the other side, then addresses it. Write a counter-argument to your thesis, then write a rebuttal.",
        parentTip:
          "Explain to your child: acknowledging the opposing view strengthens an argument — it shows the reader you have thought carefully about the issue.",
        prompts: [
          {
            text: "Your thesis: ___________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Counter-argument (what someone who disagrees might say):\n   ____________________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Rebuttal (your reasoned response):\n   ____________________________________________________________",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Write a full essay draft: introduction with hook and thesis, three TEEL body paragraphs, counter-argument with rebuttal, and conclusion with call to action.",
      "Swap your essay with a parent or sibling and ask them to underline the thesis, circle one piece of evidence, and identify the call to action.",
    ],
  },

  // ── WS 4: Analysing Author's Craft
  {
    slug: "analysing-authors-craft",
    title: "Analysing Author's Craft",
    strand: "Literature",
    description:
      "Identify literary techniques — imagery, metaphor, simile, personification, tone — and evaluate the effect each creates for the reader.",
    lesson: {
      title: "The Author's Toolbox",
      objective:
        "Identify key literary devices in a text and write analytical responses explaining both the technique and its effect on the reader.",
      materials: [
        "A short story, picture book, or poem of your child's choice",
        "Sticky notes or two colours of highlighter",
        "The worksheet activities below",
      ],
      intro: {
        title: "Slow Reading",
        script:
          "Most of the time we read to find out what happens next. Today we are going to slow right down and read to notice how the writing works. Think of it like watching a magic trick in slow motion — once you know the technique, you can see exactly how the effect was created, and you can start using it yourself.",
        action:
          "Choose one paragraph from your selected text. Read it aloud twice — once at normal speed, once very slowly, almost word by word. After the second reading, ask: what did you notice that you missed the first time?",
      },
      mainActivity: {
        title: "Technique and Effect",
        script:
          "Every literary technique exists for a purpose. When an author writes 'The classroom was a zoo', they are asking you to picture chaos, noise, and loss of control — all in five words. That is a metaphor, and its effect is a compressed, powerful image. Short, sharp sentences create urgency. Long, flowing sentences slow the reader down. The technique is the what; the effect on the reader is the why.",
        action:
          "Together, search the text for: one metaphor or simile, one example of personification, one piece of strong sensory imagery. Write each on a sticky note, then add a second explaining the effect it creates.",
      },
      wrapUp: {
        title: "Writing About Writing",
        script:
          "When you analyse an author's craft, follow three steps: name the technique, quote directly from the text, explain the effect on the reader. This three-part pattern — technique, quote, effect — is the foundation of literary analysis.",
        action:
          "Compose one analytical sentence together: 'The author uses [technique] in [quote], which creates the effect of [effect].' Make the effect part as specific as possible.",
      },
      parentTip:
        "The key shift at Year 6 is from 'I can find a metaphor' to 'this metaphor works because...'. When your child identifies a technique, always follow up with: 'And what does that do for the reader?'",
      extension:
        "Find the same literary technique used in two different texts. Compare the effects — does the same technique always create the same feeling, or does word choice and context change everything?",
      resources: [
        {
          title: "ReadWriteThink — Literary Elements Map",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives/literary-elements",
          description: "Interactive tool for mapping literary elements in any text.",
        },
        {
          title: "Khan Academy — Figurative Language",
          url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab/cc-6th-vocab/cc-6th-figurative-language/a/figurative-language-review",
          description: "Accessible explainer covering simile, metaphor, personification and more with practice.",
        },
        {
          title: "ABC Education — Analysing Texts",
          url: "https://education.abc.net.au/home#!/media/2610438/analysing-texts",
          description: "Video resource on reading and analysing texts critically.",
        },
      ],
    },
    activities: [
      {
        type: "matching",
        title: "Match the Technique to Its Definition",
        instruction: "Draw a line to match each literary term with its correct definition.",
        parentTip:
          "Simile says 'like' or 'as'; metaphor says one thing IS another. Personification always gives human qualities to a non-human thing.",
        left: [
          "Simile",
          "Metaphor",
          "Personification",
          "Alliteration",
          "Imagery",
          "Tone",
        ],
        right: [
          "Giving human qualities to a non-human thing",
          "A comparison using 'like' or 'as'",
          "Language that appeals to the five senses",
          "The feeling or attitude the author conveys throughout the text",
          "A comparison that states one thing IS another",
          "Repetition of the same starting consonant sound in nearby words",
        ],
      },
      {
        type: "open-response",
        title: "Technique — Quote — Effect",
        instruction:
          "Read the extract. Find each named technique, write the quote from the text, and explain the effect it creates for the reader.",
        parentTip:
          "Read the extract aloud with your child before they write. Hearing language reveals tone and rhythm that silent reading can miss.",
        prompts: [
          {
            text: "Extract: 'The wind howled like a wounded animal, tearing at the shutters with iron fingers. Inside, the lamp flickered — a fragile heartbeat of light in all that roaring darkness.'\n\nFind a SIMILE. Write the quote and explain its effect.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Find an example of PERSONIFICATION. Write the quote and explain its effect.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Find a METAPHOR. Write the quote and explain its effect.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Describe the overall TONE of the extract and justify your answer with a word or phrase from the text.",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write an Analytical Paragraph",
        instruction:
          "Using one technique you identified above, write a short analytical paragraph about the extract: technique + quote + effect. Aim for 4–6 sentences.",
        parentTip:
          "Write the first two sentences together before your child continues. Showing what 'this creates the effect of...' looks like in practice makes the next step much easier.",
        prompts: [
          {
            text: "Write your analytical paragraph here:",
            type: "box",
          },
        ],
      },
    ],
    nextSteps: [
      "Find one example each of metaphor, simile and personification in your current reading book. Write each in your journal with a note on the effect.",
      "Write a short descriptive paragraph about a place you know, using at least two literary techniques. Label each technique in the margin.",
    ],
  },

  // ── WS 5: Themes Across Texts
  {
    slug: "themes-across-texts",
    title: "Themes Across Texts",
    strand: "Literature",
    description:
      "Identify central themes, track how they are built through character and event, and compare how different authors approach the same theme.",
    lesson: {
      title: "What Is the Story Really About?",
      objective:
        "Identify central themes in a text and explain how they are developed through characters, events and language. Compare the treatment of a shared theme across two different texts.",
      materials: [
        "Two texts that share a common theme — picture books, short stories, or chapters your child knows well",
        "A notebook for theme tracking",
        "The worksheet activities below",
      ],
      intro: {
        title: "Topic vs Theme",
        script:
          "Here is an important distinction: a topic is what a story is about on the surface; a theme is the idea the author is exploring underneath. The topic of Charlotte's Web is a spider and a pig on a farm. The themes include friendship, sacrifice, and the cycle of life. Notice that themes are expressed as statements — not just 'friendship', but 'true friendship sometimes requires selfless sacrifice.' That extra precision matters in literary analysis.",
        action:
          "Think of a book your child has read recently. Name the surface topic, then together express a theme as a full statement — an idea about people or life the book genuinely explores.",
      },
      mainActivity: {
        title: "How Is the Theme Built?",
        script:
          "Themes do not appear as announcements. Authors build them through character choices, what characters gain and lose, language used in key moments, and how events are structured. The climax of a story almost always expresses the central theme most directly. Let us track one theme through both our texts.",
        action:
          "Choose one shared theme across both texts. For each text, find: a character moment that shows the theme, and a piece of language that reflects it. How did each author build the same idea through different choices?",
      },
      wrapUp: {
        title: "Same Theme, Different Treatment",
        script:
          "Comparing texts on the same theme is one of the most powerful reading activities. The same idea can look completely different: one author might show courage as a dramatic public act; another as a quiet, private moment. Both are valid. Which resonates more with you, and why?",
        action:
          "Discuss which text's treatment of the theme felt more powerful or true to life. Share your own view too. The goal is a reasoned, evidence-supported opinion — there is no single right answer.",
      },
      parentTip:
        "Theme discussions work best as genuine conversations, not tests. Share your own reading experiences and opinions — invite agreement or respectful disagreement. Quality of thinking matters more than the conclusion reached.",
      extension:
        "Choose a classic theme (belonging, justice, growing up, identity) and find two very different texts exploring it — one from Australia and one from another country. How does cultural context shape the way the theme is portrayed?",
      resources: [
        {
          title: "Khan Academy — Theme and Central Idea",
          url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab/cc-6th-reading-literary-texts/cc-6th-theme/a/what-is-theme",
          description: "Clear explainer on identifying theme and distinguishing it from topic.",
        },
        {
          title: "ReadWriteThink — Comparing Themes",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/theme-comparison",
          description: "Lesson plan with adaptable activities for comparing themes across texts.",
        },
        {
          title: "ABC Education — Stories with a Message",
          url: "https://education.abc.net.au/home#!/media/2614001/stories-with-a-message",
          description: "Video exploring how stories convey themes, values and ideas.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Topic or Theme Statement?",
        instruction:
          "Decide whether each statement is a TOPIC or a THEME. Write T or TH. Then improve any topic statements into full theme statements.",
        parentTip:
          "A theme statement should make a claim about life: 'Courage means...' or 'People learn that...' It should feel like something a thoughtful person might say about human experience.",
        prompts: [
          {
            text: "1. 'The story is about a boy who moves to a new school.'\n   Topic or Theme? _______\n   If topic, write a theme statement: ___________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "2. 'Accepting help from others sometimes takes more courage than acting alone.'\n   Topic or Theme? _______",
            type: "lines",
            lines: 1,
          },
          {
            text: "3. 'The book is about friendship.'\n   Topic or Theme? _______\n   If topic, write a theme statement: ___________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "4. 'Prejudice damages both the person who holds it and the person it targets.'\n   Topic or Theme? _______",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Tracking a Theme",
        instruction:
          "Choose a book you are reading or have recently finished. Identify one theme and find three moments where it is developed.",
        parentTip:
          "Look for moments of change — when a character makes a sacrifice, faces a consequence, or learns something. These turning points almost always carry the theme.",
        prompts: [
          {
            text: "Book title and author: _____________________________________________\nTheme (as a full statement): _______________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Moment 1 — what happens and how it develops the theme:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Moment 2 — what happens and how it develops the theme:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Moment 3 — what happens and how it develops the theme:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Two Texts",
        instruction:
          "Think of two texts that share a theme. Compare how each author treats it — noting similarities and differences.",
        parentTip:
          "Let your child talk through their thinking before writing — spoken comparisons often surface ideas that are hard to access in writing. Jot dot-points, then write.",
        prompts: [
          {
            text: "Text 1: _________________________  Text 2: _________________________\nShared theme (as a statement): _____________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "How does Text 1 develop this theme? (Characters, events, language choices)",
            type: "box",
          },
          {
            text: "How does Text 2 approach the same theme differently?",
            type: "box",
          },
          {
            text: "Which treatment do you find more compelling, and why?",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Start a theme log in your reading journal: for every book you read this term, write one theme statement and one supporting quote.",
      "Look for the same theme in two different art forms — a book and a film, or a poem and a song — and discuss how the medium affects the theme's communication.",
    ],
  },

  // ── WS 6: Evaluating Arguments in Non-Fiction
  {
    slug: "evaluating-arguments",
    title: "Evaluating Arguments in Non-Fiction",
    strand: "Literacy",
    description:
      "Read persuasive non-fiction texts critically — identifying claims, evidence and reasoning — and evaluate the strength of the argument.",
    lesson: {
      title: "Thinking Like a Fact-Checker",
      objective:
        "Identify the main claim, supporting evidence and logical reasoning in a persuasive text, and evaluate whether the argument is convincing — giving specific reasons.",
      materials: [
        "One short opinion piece or editorial from ABC News, a newspaper, or a magazine",
        "Two highlighter colours",
        "The worksheet activities below",
      ],
      intro: {
        title: "Claims, Evidence and the Gap Between",
        script:
          "Not everything you read is equally reliable. Some writing is full of checkable facts; other writing is full of opinions dressed up as facts. Critical readers ask three questions: What is the writer claiming? What evidence do they offer? And does the evidence actually prove the claim? A strong argument makes all three things visible. A weak argument hides the gaps.",
        action:
          "Highlight the selected opinion piece using two colours: one for claims (statements the writer wants you to accept), one for evidence (facts, statistics, expert quotes, examples). Count each. How well-evidenced is this piece?",
      },
      mainActivity: {
        title: "Spotting Weak Reasoning",
        script:
          "Even with evidence, the reasoning that connects it to the claim can be flawed. Classic example: 'My grandfather smoked his whole life and lived to 95, so smoking is not that dangerous.' The claim is 'smoking is not dangerous'. The evidence is one person's experience. The flaw: one person cannot prove a general rule. This kind of logical mistake is called a fallacy, and once you learn to spot them, you see them everywhere — especially in advertising.",
        action:
          "Look at your highlighted text. For each piece of evidence, ask: does this actually prove the claim, or is there a leap of logic?",
      },
      wrapUp: {
        title: "Your Verdict",
        script:
          "After evaluating a text, you should be able to give it a convincingness rating and justify it. A strong argument has a clear claim, specific verifiable evidence, and sound reasoning that links the two.",
        action:
          "Ask your child to rate the article from 1 (not convincing) to 5 (highly convincing) and state one strength and one weakness of the argument.",
      },
      parentTip:
        "This skill transfers far beyond English lessons. Briefly discuss advertisements, political statements and social media posts using the same three questions: what is the claim, what is the evidence, does the reasoning hold?",
      extension:
        "Find two opinion pieces arguing opposite sides of the same issue. Make a case for which argument is stronger and why. Present your verdict as a short spoken statement, as if you were a judge.",
      resources: [
        {
          title: "Purdue OWL — Using Evidence",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/evidence/index.html",
          description: "Guidance on what counts as strong evidence in an argument.",
        },
        {
          title: "Khan Academy — Evaluating Sources",
          url: "https://www.khanacademy.org/computing/computer-science/informationtheory/talkstolisten/a/evaluating-sources-online",
          description: "Practical guide to evaluating whether information and sources are reliable.",
        },
        {
          title: "ABC Education — Media Literacy",
          url: "https://education.abc.net.au/home#!/media/2622001/media-literacy",
          description: "Video resource on evaluating persuasive media messages and techniques.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identify Claim, Evidence and Reasoning",
        instruction: "Read the passage carefully and answer the questions below.",
        parentTip:
          "Read the passage together first. Ask: what is this writer trying to persuade you to believe? Make sure your child can state the claim in their own words before writing.",
        prompts: [
          {
            text: "Passage: 'Schools should ban mobile phones entirely. Research from the London School of Economics found that students at schools with phone bans scored significantly higher on standardised tests. Furthermore, phones distract students from learning and contribute to cyberbullying. The evidence is clear: removing phones improves outcomes for all students.'\n\nWhat is the writer's main CLAIM?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What EVIDENCE is offered? Is it specific enough to verify?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Identify one weakness in the reasoning — a logical leap, an unproven assumption, or a missing perspective.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Rate the argument's convincingness from 1–5 and explain your rating.",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Spotting Loaded Language",
        instruction:
          "Find three emotionally charged words or phrases from the passage and explain the emotion each is designed to trigger.",
        parentTip:
          "Look for exaggerations, emotive nouns ('victims', 'heroes'), and sweeping statements ('always', 'never', 'every single'). These signal appeals to emotion rather than evidence.",
        prompts: [
          {
            text: "Loaded word/phrase 1: ________________  Emotion triggered: ______________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Loaded word/phrase 2: ________________  Emotion triggered: ______________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Loaded word/phrase 3: ________________  Emotion triggered: ______________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Counter-Argument",
        instruction:
          "The passage argues for a complete phone ban. Write a short paragraph arguing the opposite position. Include at least one piece of evidence and make sure the reasoning connects it clearly to your claim.",
        parentTip:
          "Encourage your child to argue a position even if it is not their personal view — this builds intellectual flexibility and is a valuable higher-order thinking skill.",
        prompts: [
          {
            text: "Write your counter-argument paragraph here:",
            type: "box",
          },
        ],
      },
    ],
    nextSteps: [
      "Read one opinion piece per week for the next month. For each one, identify the claim, the evidence, and one strength or weakness of the reasoning.",
      "Write a letter to an imaginary editor responding to an article — agreeing or disagreeing, with specific evidence from your own research.",
    ],
  },

  // ── WS 7: Research Report Writing
  {
    slug: "research-report-writing",
    title: "Writing a Research Report",
    strand: "Literacy",
    description:
      "Plan, research and write a structured information report with an engaging introduction, organised body sections and a thoughtful conclusion.",
    lesson: {
      title: "From Curious to Expert",
      objective:
        "Understand the structure and language features of information reports and use a planning process to draft one on a self-chosen topic.",
      materials: [
        "Internet access or reference books for research",
        "A notebook for research notes — kept separate from the final writing",
        "The worksheet activities below",
      ],
      intro: {
        title: "What Makes a Report Different from a Story?",
        script:
          "A narrative tells you about one specific sequence of events. A report tells you how things generally are. If you write a report on the Great Barrier Reef, you are not telling a single story — you are organising what is known, classifying it into categories, and presenting it clearly. Reports use present tense, technical vocabulary, and facts — not personal opinions.",
        action:
          "Look together at a page from the Australian Museum website or National Geographic. Point out: the heading structure, the technical vocabulary, and the absence of 'I think' or 'I feel'. These are markers of report writing.",
      },
      mainActivity: {
        title: "Plan Before You Write",
        script:
          "Good research reports start with a solid plan. First, choose a topic. Then identify three or four key categories — the main aspects you will cover. For a report on great white sharks, categories might be: classification and habitat, diet and hunting behaviour, relationship with humans, conservation status. Each category becomes a section. This planning step shapes everything that follows.",
        action:
          "Choose a topic together and brainstorm everything you know and wonder about it. Group ideas into three or four categories. Write each as a heading — that is your outline, and already half the work done.",
      },
      wrapUp: {
        title: "The Language of Reports",
        script:
          "Reports use specific language patterns: general nouns ('sharks', not 'my shark'), timeless present tense, technical vocabulary, objective third-person voice. They avoid first person. Let us practise transforming a personal statement into report style.",
        action:
          "Transform together: 'I think dolphins are really smart and they look after each other.' Report style: 'Dolphins demonstrate sophisticated social intelligence, frequently cooperating within their pods to care for injured or vulnerable individuals.'",
      },
      parentTip:
        "The research note-taking step is crucial and often rushed. Help your child practise paraphrasing: read a paragraph on screen, close the tab, and write what they remember in their own words. This prevents copying, builds real understanding, and is a skill that will serve them throughout secondary school.",
      extension:
        "After completing the written report, convert key information into a two-minute oral presentation with one visual aid — a hand-drawn diagram or printed photograph. Practise presenting to the family.",
      resources: [
        {
          title: "ReadWriteThink — Research Report Lesson Plan",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/research-report",
          description: "Step-by-step guidance for the full research report writing process.",
        },
        {
          title: "Purdue OWL — Research and Citation",
          url: "https://owl.purdue.edu/owl/research_and_citation/index.html",
          description: "Guidance on the research process, note-taking and basic citation.",
        },
        {
          title: "ABC Education — Information Texts",
          url: "https://education.abc.net.au/home#!/media/2618002/information-texts",
          description: "Resource exploring the features and purpose of information texts.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Plan Your Report",
        instruction:
          "Use this planner to organise your report before writing. Complete each section carefully — a strong plan makes writing much easier.",
        parentTip:
          "Help your child notice when a category is too broad (split it) or too narrow (merge it). Categories should be roughly equal in scope.",
        prompts: [
          {
            text: "Topic: _______________________________________________________\nKey question my report will answer: __________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Section 1 heading: ______________________________________________\nKey facts to include: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Section 2 heading: ______________________________________________\nKey facts to include: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Section 3 heading: ______________________________________________\nKey facts to include: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Sources I will use (at least 2): _____________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Report Language Practice",
        instruction:
          "Rewrite each informal sentence in formal, report-style language. Use third person, present tense, and remove personal opinions.",
        parentTip:
          "Read both versions aloud — the formality difference is clear when heard. Ask: which sounds like it belongs in an encyclopedia?",
        prompts: [
          {
            text: "Informal: 'I reckon blue whales are the biggest animals ever and they make really loud noises.'\n   Report style: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Informal: 'The rainforest is amazing and it has heaps of animals we don't even know about yet.'\n   Report style: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Informal: 'In my opinion, recycling is super important and everyone should do it.'\n   Report style: ________________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Introduction",
        instruction:
          "A report introduction should define the topic, state what it will cover, and open with something engaging — a surprising fact, a statistic, or a rhetorical question. Write your introduction paragraph (4–6 sentences).",
        parentTip:
          "Encourage opening with something that earns the reader's attention. 'The blue whale's heart is the size of a small car' is far more compelling than 'This report is about blue whales.'",
        prompts: [
          {
            text: "Write your introduction here:",
            type: "box",
          },
        ],
      },
    ],
    nextSteps: [
      "Write the full body of your report — one section per category from your plan, using report-style language throughout.",
      "Add a conclusion paragraph that summarises the key information and reflects on why this topic matters or what you found most surprising.",
    ],
  },
];

export function getYear6EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year6EnglishWorksheets.find((ws) => ws.slug === slug);
}
