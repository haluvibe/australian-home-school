import type { WorksheetItem } from "./worksheet-types";

export const year8EnglishWorksheets: WorksheetItem[] = [
  {
    slug: "how-texts-position-readers",
    title: "How Texts Position Readers",
    strand: "Language",
    description:
      "Explore how authors use language choices, perspective, and framing to guide readers toward particular viewpoints and emotional responses.",
    lesson: {
      title: "How Texts Position Readers",
      objective:
        "Identify and explain the techniques authors use to position readers to accept particular viewpoints.",
      materials: [
        "A newspaper editorial or opinion article (printed or on screen)",
        "Pen and highlighters in two colours",
        "Worksheet",
      ],
      intro: {
        title: "Who Is In Control of What You Think?",
        script:
          "Every text you read — whether it is a news article, a film, a social media post, or a novel — makes choices about what to include, what to leave out, and whose perspective to centre. Those choices are never neutral. They position you, the reader, to feel, think, or believe something specific. The author does not announce this: it happens through word choice, structure, and emphasis. A news headline that reads 'Protestors Storm Parliament' positions you differently to one that reads 'Citizens Exercise Their Right to Demonstrate' — even if they describe the same event. Today we are going to learn to notice that positioning and name it.",
        action:
          "Show your student two headlines about the same event — you can find real examples by comparing different news outlets online. Ask: which headline makes the people sound threatening? Which sounds sympathetic? What single words create that difference? Write down the key words they identify.",
      },
      mainActivity: {
        title: "Unpacking the Techniques",
        script:
          "There are several tools writers use to position us. First: word connotation — words carry emotional weight beyond their dictionary meaning. 'Slender' and 'scrawny' both mean thin, but they feel different. Second: point of view — first person creates intimacy and authority; third person can feel more objective, even when it is not. Third: what is foregrounded — what gets the first sentence, the headline, the most space — that is what the author wants you to think is most important. Fourth: what is omitted — absences are just as powerful as presences. Whose voice is missing? Fifth: appeals to values — good writers align their argument with things readers already care about, like fairness, family, or national identity.",
        action:
          "Read through the editorial together. With one colour, highlight words that carry strong positive or negative connotations. With the second colour, mark any place where information about another perspective seems to be missing. After reading, identify together: what does this writer want you to feel? What do they want you to do or believe?",
      },
      wrapUp: {
        title: "The Informed Reader",
        script:
          "Being aware of positioning does not mean you reject everything you read. It means you read as an informed, active participant rather than a passive receiver. The goal is not cynicism — it is clarity. You can still agree with a text's argument after analysing how it positions you. The difference is that now your agreement is a choice, not an accident.",
        action:
          "Ask your student to write two or three sentences: What does this text want me to believe? What technique was most effective in positioning me? Do I agree with the text's position, and why?",
      },
      parentTip:
        "If your teenager pushes back and says the article is just factual, that is the perfect teaching moment. Ask them: who chose which facts to include? Who chose the order? Positioning analysis is not about dismissing texts — it is about reading them fully.",
      extension:
        "Find two articles from different outlets on the same news story. Write a short comparison: how does each text position the reader differently? Which is more effective, and why?",
      resources: [
        {
          title: "Reading Between the Lines — ReadWriteThink",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/reading-between-lines-analyzing",
          description: "Lesson plan and strategies for analysing how texts position readers.",
        },
        {
          title: "Connotation and Denotation — Khan Academy",
          url: "https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-noun/grammar-nouns/v/word-choice-and-connotation",
          description: "Short video explaining how word choice shapes meaning and reader response.",
        },
        {
          title: "Media Literacy — ABC Education",
          url: "https://education.abc.net.au/home#!/digibooks/2702553/media-literacy",
          description: "Interactive resource on reading media texts critically.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Connotation Analysis",
        instruction:
          "For each pair of words below, explain how they differ in connotation (emotional weight), even though they share a similar meaning.",
        parentTip:
          "Encourage your student to think of real sentences where each word might be used — context reveals connotation clearly.",
        prompts: [
          {
            text: "Compare 'determined' and 'stubborn'. What feeling does each create about the person being described?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Compare 'frugal' and 'stingy'. Which is positive, which is negative, and how do you know?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Compare 'young' and 'immature'. When might a writer choose one over the other to position a reader?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analysing a Text That Positions Readers",
        instruction:
          "Read the following short extract from a fictional opinion piece, then answer the questions.\n\n\"Once again, the council has failed our families. While bureaucrats enjoy their comfortable salaries, hard-working residents are left to navigate crumbling footpaths and parks choked with weeds. It is time for ordinary people to demand better.\"",
        parentTip:
          "Read the extract aloud together first. The dramatic tone is deliberate — help your student identify exactly which words are doing the heavy lifting.",
        prompts: [
          {
            text: "Identify two words or phrases with strong negative connotations and explain their effect on the reader.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Who does this writer position as the 'good' side and who as the 'bad' side? What language creates that division?",
            type: "lines",
            lines: 4,
          },
          {
            text: "What information might be missing from this extract that could change how we feel about the situation?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Rewrite the final sentence to position readers to feel sympathetic toward the council instead.",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Your Own Positioning",
        instruction:
          "Choose a topic you have a genuine opinion about — a school issue, a local concern, or something in the news. Write a short paragraph (5\u20137 sentences) designed to position a reader to agree with your view. Then, below it, label the techniques you used.",
        parentTip:
          "This activity asks students to be the author, not just the analyst. Most students discover mid-draft that their language is more neutral than they intended — that discovery is the lesson.",
        prompts: [
          { text: "Write your positioning paragraph here:", type: "box" },
          {
            text: "Label at least two techniques you used (e.g. 'word connotation: I used X because...'):",
            type: "lines",
            lines: 5,
          },
        ],
      },
    ],
    nextSteps: [
      "Move on to the Symbolism and Allegory worksheet to explore how meaning is layered into literature.",
      "Collect three different texts on the same topic and compare how each positions its reader.",
    ],
  },

  {
    slug: "symbolism-and-allegory",
    title: "Symbolism and Allegory in Literature",
    strand: "Literature",
    description:
      "Understand how authors embed layers of meaning through symbols and allegory, and practise identifying and interpreting these techniques in literary texts.",
    lesson: {
      title: "Symbolism and Allegory in Literature",
      objective:
        "Identify symbols and allegory in literary texts and explain what deeper meanings they create.",
      materials: [
        "A literary text you are currently reading (novel, short story, or poem)",
        "Pen and notebook",
        "Worksheet",
      ],
      intro: {
        title: "Nothing Is Just What It Is",
        script:
          "In literature, objects, characters, colours, and settings are rarely just themselves. A storm in a novel is almost never just weather. A locked door is almost never just a locked door. Writers layer meaning onto physical things to say something larger — about human nature, society, mortality, or freedom. This technique is called symbolism. When an entire narrative works as a sustained metaphor — where every major character and event represents something beyond the literal story — we call it allegory. George Orwell's Animal Farm is literally about farm animals staging a revolution, but it is actually a critique of Soviet-era communism. Once you start seeing symbolism and allegory, you cannot unread them.",
        action:
          "Ask your student: can they think of any symbols they already know? Common ones include a dove for peace, a red rose for love, darkness for ignorance, and light for knowledge. Discuss: why do writers use symbols instead of just stating things directly? What does symbolism do that direct statement cannot?",
      },
      mainActivity: {
        title: "Reading for Layers",
        script:
          "When analysing symbolism, ask three questions. First: what is this object, character, or setting literally? Second: what does it recur alongside in the text — what themes, emotions, or events does it keep appearing near? Third: what might it therefore represent beyond itself? Symbols gain their meaning from context. A river in one novel might symbolise time and change; in another it might symbolise the divide between two worlds. Allegory is symbolism sustained across the whole text. In an allegory, you can often map character to concept: a character who hoards gold might represent greed itself.",
        action:
          "Open the literary text you are currently reading. Together, identify one object, place, or character that seems to appear in meaningful moments or carry emotional weight. Track all the places it appears. Then ask the three questions above. Record your interpretation in your notebook.",
      },
      wrapUp: {
        title: "The Writer's Intention and Your Interpretation",
        script:
          "Authors sometimes intend specific symbolism, and sometimes readers find symbolism the author did not consciously place there. Both are valid in literary analysis — but when writing an essay, it is stronger to ground your interpretation in evidence from the text. The symbol means X because of how it appears in context Y and connects to theme Z. That chain of evidence is what separates a literary insight from a guess.",
        action:
          "Ask your student: is there any symbol in what they are reading that they think might be unintentional — something the author probably did not plan, but that works as a symbol anyway? Discuss how you would write about it in an essay.",
      },
      parentTip:
        "If your student is reading a text with clear allegory — like Animal Farm, Lord of the Flies, or The Giver — invite them to map the allegorical level on paper. List characters and their symbolic equivalents. This visual approach often unlocks the whole structure of the text.",
      extension:
        "Write a short allegorical story (one to two pages) of your own. Choose a concept you care about — justice, belonging, ambition — and represent it through a physical narrative. After writing, annotate your own story to explain the allegorical choices you made.",
      resources: [
        {
          title: "Symbolism in Literature — Khan Academy",
          url: "https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/verb-tense/v/symbolism",
          description: "Accessible introduction to how symbolism functions in literary texts.",
        },
        {
          title: "Literary Theory and Criticism — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/literary_theory_and_schools_of_criticism/index.html",
          description: "Academic context for symbolic and allegorical reading.",
        },
        {
          title: "The School of Life: What Is Symbolism?",
          url: "https://www.youtube.com/watch?v=pEUBuNs3cqo",
          description: "Engaging video explaining why authors use symbolism and how to read it.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identifying Symbols",
        instruction:
          "Think about a text you have read recently (a novel, film, or story). Identify one symbol that appears in it and answer the questions below.",
        parentTip:
          "If your student is stuck, suggest a well-known text: the conch shell in Lord of the Flies, the green light in The Great Gatsby, or symbolic elements in a film like Spirited Away.",
        prompts: [
          {
            text: "What is the symbol (object, character, colour, or setting)?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Where and when does it appear in the text? List at least two specific moments.",
            type: "lines",
            lines: 4,
          },
          {
            text: "What do you think it represents, and why? Use evidence from the text to support your interpretation.",
            type: "lines",
            lines: 5,
          },
        ],
      },
      {
        type: "open-response",
        title: "Allegory Mapping",
        instruction:
          "Animal Farm by George Orwell is one of English literature's most famous allegories. Use the summary below to complete the mapping exercise.\n\nSummary: Farm animals overthrow their cruel human farmer and create an equal society with the motto \u2018All animals are equal.\u2019 Over time, the pigs seize power, change the rules to benefit themselves, and eventually become indistinguishable from humans. Orwell wrote this as a criticism of Stalinist Soviet Russia.",
        parentTip:
          "Allegory mapping is a powerful skill for Year 8 and beyond. If your student engages well, this is a great text to read in full — it is short, gripping, and endlessly discussable.",
        prompts: [
          {
            text: "The human farmer represents: ___. The pigs represent: ___. The other animals represent: ___. The motto \u2018All animals are equal\u2019 represents: ___.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Why might Orwell have chosen to tell this story through animals rather than writing directly about politics? What does the allegorical form allow him to do?",
            type: "lines",
            lines: 5,
          },
          {
            text: "Can you think of another real-world situation that could be told as an allegory? Briefly describe the story you would tell and what each element would represent.",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Close Reading: Layered Meaning",
        instruction:
          "Read the following short poem extract and analyse the symbolism carefully.\n\n\"The spider spins her patient web\nFrom corner-dark to window-glass,\nWaiting for whatever comes \u2014\nThe careless fly, the days that pass.\"",
        parentTip:
          "There is no single correct interpretation here. Encourage your student to commit to a reading and defend it with evidence from the language.",
        prompts: [
          {
            text: "What might 'the web' symbolise in this poem? Give two possible interpretations.",
            type: "lines",
            lines: 4,
          },
          {
            text: "What might 'the careless fly' represent? What does 'careless' suggest about the fly's situation?",
            type: "lines",
            lines: 3,
          },
          {
            text: "What is the overall mood or theme of this extract? How does the symbolism create that mood?",
            type: "lines",
            lines: 4,
          },
        ],
      },
    ],
    nextSteps: [
      "Explore intertextuality in the next worksheet — how texts reference and respond to other texts.",
      "Write a comparative analysis of symbolism in two texts you have studied.",
    ],
  },

  {
    slug: "intertextuality",
    title: "Intertextuality: When Texts Talk to Each Other",
    strand: "Language",
    description:
      "Understand how and why authors reference other texts, and what effects those references create for readers who recognise them.",
    lesson: {
      title: "Intertextuality: When Texts Talk to Each Other",
      objective:
        "Identify intertextual references in texts and explain the effects they create for different readers.",
      materials: ["Pen and notebook", "Worksheet"],
      intro: {
        title: "Every Text Exists in a Conversation",
        script:
          "No text exists in isolation. Every book, film, song, and advertisement is in dialogue with everything that came before it. When a writer deliberately echoes, references, quotes, or reimagines another text, we call this intertextuality. You have experienced this without knowing the word for it: a film that opens with a famous quote, a novel that retells a fairy tale from the villain's perspective, a pop song that samples a classic track. Intertextuality creates layers of meaning. For readers who recognise the reference, the text opens outward into a much larger conversation. The more texts you know, the richer every new text becomes.",
        action:
          "Ask your student: can they think of any film or book that references another text they know? Good starting points: The Lion King and Hamlet; Shrek and fairy tale conventions; superhero films drawing on mythology. Discuss: what does the reference add to the newer text?",
      },
      mainActivity: {
        title: "Types of Intertextual Reference",
        script:
          "There are several forms intertextuality takes. A direct allusion is a brief, indirect reference — a character might say 'it was my Waterloo' without needing to explain the Battle of Waterloo; readers who know history understand. A parody imitates another text's style to mock or comment on it. A retelling takes a familiar story and reimagines it from a new perspective. An epigraph is a quote placed at the start of a text to frame its themes. A pastiche lovingly imitates an earlier style without mockery. Each form creates different effects and asks different things of the reader.",
        action:
          "Together, read a short text that contains an intertextual reference — this could be the opening pages of a novel you are reading, a poem referencing mythology, or an advertisement. Identify the type of intertextual reference. Ask: what does the reader need to know to fully appreciate this? What is added by the reference?",
      },
      wrapUp: {
        title: "Writing About Intertextuality",
        script:
          "In an essay, when you write about intertextuality, you need to do three things: identify the reference, explain what the referenced text is or represents, and then explain what the reference does in the new text. 'The author alludes to Shakespeare's Hamlet when the character says X. This positions the reader to understand Y as a kind of Z, deepening the theme of...' That is the structure of a strong intertextual analysis.",
        action:
          "Ask your student to write one sentence using this three-part structure about any intertextual reference they identified today.",
      },
      parentTip:
        "Intertextuality rewards wide reading over time — this is a good moment to talk about what texts your teenager wants to read next. Building a reading list together can be a genuinely enjoyable conversation.",
      extension:
        "Find a modern retelling of a classical story — Circe by Madeline Miller retelling Greek mythology, or Wide Sargasso Sea which retells Jane Eyre. Read a chapter and write a short analysis of how the retelling changes the meaning of the original.",
      resources: [
        {
          title: "Making Connections Across Texts — ReadWriteThink",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/making-connections",
          description: "Lesson strategies for identifying and discussing intertextual connections.",
        },
        {
          title: "Literary Theory — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/literary_theory_and_schools_of_criticism/index.html",
          description: "Academic context for intertextual reading and literary criticism.",
        },
        {
          title: "How to Read a Book — The School of Life",
          url: "https://www.youtube.com/watch?v=lIW5jBrrsS0",
          description: "Insightful video on reading attentively and noticing literary techniques.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Recognising Intertextual References",
        instruction:
          "Each of the following contains an intertextual reference. Identify the reference and explain what effect it creates.",
        parentTip:
          "If your student does not recognise a reference, that is fine — part of the exercise is noticing what you miss, and then looking it up together.",
        prompts: [
          {
            text: "A novel's chapter is titled 'A Tale of Two Cities.' What text is this referencing, and what might this title signal to readers about the chapter's themes?",
            type: "lines",
            lines: 4,
          },
          {
            text: "A character in a film says: 'To be or not to be — that is the question I ask myself every morning.' What is the original source? What effect does placing it in this everyday context create?",
            type: "lines",
            lines: 4,
          },
          {
            text: "An advertisement for running shoes uses the tagline 'Just do it... Carpe Diem.' What two references are being made? Why might an advertiser choose these phrases?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analysing a Retelling",
        instruction:
          "Consider this scenario: a modern short story retells 'Little Red Riding Hood' from the wolf's perspective. The wolf explains that he was hungry, homeless, and frightened — and that Red Riding Hood's grandmother had been evicting animals from the forest for years.",
        parentTip:
          "This is the kind of question that invites genuine disagreement — and that is good. Encourage your student to commit to a position and argue it.",
        prompts: [
          {
            text: "How does shifting the perspective change the moral of the original story? What does the reader feel about the wolf now?",
            type: "lines",
            lines: 4,
          },
          {
            text: "What social or political idea might this retelling be exploring? Think about themes like power, housing, or exploitation.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Does a retelling that sympathises with the villain 'damage' the original story, or does it deepen it? Argue your position.",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Creating Intertextuality",
        instruction:
          "Write the opening paragraph of a short story that contains at least one clear intertextual reference. It could be an allusion, a retelling setup, or an epigraph. Then explain your choice below.",
        parentTip:
          "Invite your student to choose a reference that genuinely excites them — a myth they love, a book they have read, a historical event they find fascinating. Personal investment produces stronger writing.",
        prompts: [
          { text: "Opening paragraph:", type: "box" },
          {
            text: "Explain your intertextual reference: what are you referencing, and what do you want readers who recognise it to feel or understand?",
            type: "lines",
            lines: 4,
          },
        ],
      },
    ],
    nextSteps: [
      "Apply intertextuality analysis in your next essay on a literary text.",
      "Look for intertextual references in the next book or film you engage with and keep a running log.",
    ],
  },

  {
    slug: "syntax-for-effect",
    title: "Syntax for Effect: Sentence Variety and Style",
    strand: "Language",
    description:
      "Learn how writers manipulate sentence structure — length, type, and rhythm — to control pace, emphasis, and emotional effect.",
    lesson: {
      title: "Syntax for Effect: Sentence Variety and Style",
      objective:
        "Understand how varying sentence structure creates different effects in writing, and apply this skill in your own work.",
      materials: [
        "Pen and notebook",
        "A passage from a novel or story you admire",
        "Worksheet",
      ],
      intro: {
        title: "Sentences Have a Rhythm",
        script:
          "If every sentence you write is the same length and structure, your writing becomes monotonous — even if your ideas are excellent. Skilled writers vary their sentences deliberately, the way a musician varies notes and rests. A short sentence hits hard. A longer sentence, with its multiple clauses winding forward through detail and qualification, builds a different kind of pressure — it can suggest complexity, or overwhelm, or thought in the act of becoming. The position of information within a sentence also matters: what comes first is what we notice first, and what comes last carries the most weight. These are not accidents. They are craft decisions.",
        action:
          "Open a passage from a novel your student admires and examine three consecutive sentences together. Count the words in each. Label each sentence type: simple (one independent clause), compound (two joined by a conjunction), complex (with a subordinate clause). Then ask: what is the effect of moving from one type to another in this sequence?",
      },
      mainActivity: {
        title: "The Tools of Syntax",
        script:
          "Here are the key syntactic tools to practise. Sentence length variation: use short sentences for shock or emphasis; use long sentences to build atmosphere or show thought unfolding. Fronting: placing a key word or phrase at the start instead of its usual position — 'Into the darkness, he walked' makes the darkness more prominent than 'He walked into the darkness.' The tricolon: three items in a list creates a sense of completeness — 'We came, we saw, we conquered.' Sentence fragments: a single word or phrase used as a sentence for dramatic emphasis. Like this. And the long sentence followed immediately by a short one — the contrast is one of the most powerful rhythmic moves in prose.",
        action:
          "Together, rewrite this dull paragraph using at least three of these tools: 'She walked to the door. She opened it. There was a person standing outside. She did not know who they were. She felt scared.' Aim to make it feel genuinely dramatic using syntax alone.",
      },
      wrapUp: {
        title: "Revision as Craft",
        script:
          "Most writers do not achieve strong syntax in a first draft — they find it in revision. Reading your writing aloud is the single best way to hear where the rhythm breaks down or where you need variation. If you find yourself pausing awkwardly, or if a section feels breathless or plodding, that is your ear telling you something your eye has missed. Trust it.",
        action:
          "Ask your student to read their rewritten paragraph aloud. Discuss: where does it feel most effective? Is there one sentence they are especially pleased with? Why does that sentence work?",
      },
      parentTip:
        "Syntax is one of those skills that becomes instinctive with practice. Encourage your teenager to read the opening page of any book they pick up and just notice: how long are the sentences? What does the opening sentence do? That habit of attention is transformative.",
      extension:
        "Choose a paragraph from your own recent writing. Annotate it: label the sentence types, identify any places where every sentence has the same structure, then revise it using at least three syntactic techniques. Write a brief reflection on what changed and why.",
      resources: [
        {
          title: "Syntax: Sentences and Clauses — Khan Academy",
          url: "https://www.khanacademy.org/humanities/grammar/syntax-sentences-and-clauses",
          description: "Clear videos and exercises on sentence types, clauses, and syntax.",
        },
        {
          title: "Proofreading for Style — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/proofreading/index.html",
          description: "Guidance on reviewing and improving sentence-level style in writing.",
        },
        {
          title: "The Art of the Sentence — The School of Life",
          url: "https://www.youtube.com/watch?v=v9S5bRTIvmg",
          description: "Engaging video on how great writers construct sentences that resonate.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Sentence Structure Analysis",
        instruction:
          "Read the following passage and analyse how the writer uses sentence variety to create effect.\n\n\"The boat tilted. A wave \u2014 enormous, inevitable \u2014 rose from the grey water and covered everything. Then, nothing. Silence so complete it felt like a held breath. Then the sound of the sea returning, and the cold, and the knowledge that they were still alive, although alive now meant something different than it had this morning.\"",
        parentTip:
          "The shift from very short sentences to the final long one is the key craft move here — ask your student to read it aloud and feel where the rhythm changes.",
        prompts: [
          {
            text: "Identify one very short sentence or fragment. What effect does its brevity create?",
            type: "lines",
            lines: 3,
          },
          {
            text: "The final sentence is much longer than those before it. What does this length create in terms of tone and feeling?",
            type: "lines",
            lines: 4,
          },
          {
            text: "How does the dash in the second sentence affect how you read it? What does it do to pace?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Applying Syntactic Techniques",
        instruction:
          "Rewrite each of the following sentences using the technique named in brackets. You may change words, but the core meaning should remain.",
        parentTip:
          "These are technique exercises — encourage experimentation. The first attempt may not be perfect, and that is fine. The skill is in understanding what each technique does.",
        prompts: [
          {
            text: "[Fronting] Original: 'She ran towards the burning building despite the danger.' Your rewrite:",
            type: "lines",
            lines: 2,
          },
          {
            text: "[Tricolon \u2014 list of three] Original: 'He was tired and confused.' Your rewrite:",
            type: "lines",
            lines: 2,
          },
          {
            text: "[Short sentence for emphasis after a long one] Original: 'The room was filled with her relatives, all of them talking loudly about things that didn't matter, eating the food she had spent hours preparing, ignoring her completely.' Add a powerful short sentence to follow it:",
            type: "lines",
            lines: 3,
          },
          {
            text: "[Fragment for dramatic effect] Original: 'She decided she would not go back.' Rewrite using a fragment:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Original Writing: Syntax in Action",
        instruction:
          "Write a short scene (8\u201312 sentences) describing a moment of tension or discovery. Use at least four different syntactic techniques deliberately. After writing, annotate your work to identify each technique used.",
        parentTip:
          "Suggest a scenario if needed: finding something unexpected in an old box; arriving somewhere for the first time; a conversation that ends badly. The content matters less than the sentence-level craft.",
        prompts: [
          { text: "Your scene:", type: "box" },
          {
            text: "List the syntactic techniques you used and where you used them:",
            type: "lines",
            lines: 5,
          },
        ],
      },
    ],
    nextSteps: [
      "Apply syntax analysis in your next essay and in your own creative writing.",
      "Read the opening page of five different novels and compare how each author uses sentence structure to establish their voice.",
    ],
  },

  {
    slug: "analytical-essay-writing",
    title: "Writing an Analytical Essay",
    strand: "Literacy",
    description:
      "Learn the structure and techniques of analytical essay writing, including thesis construction, TEEL paragraph development, and integrating textual evidence.",
    lesson: {
      title: "Writing an Analytical Essay",
      objective:
        "Plan and draft a clear, well-evidenced analytical essay response to a literary question.",
      materials: [
        "A literary text you have studied",
        "Pen and notebook",
        "Worksheet",
      ],
      intro: {
        title: "What Is an Analytical Essay Actually Doing?",
        script:
          "An analytical essay is not a summary — the reader has already read the text. It is not just a list of observations about what happens. It is an argument: you are making a case for a particular interpretation, and you are supporting that case with evidence. The difference between a mediocre and a strong essay is almost never about working harder — it is about being more specific and more argumentative. Every paragraph should be advancing your argument. Every quote you use should be doing work: not just proving something happened, but demonstrating how the writer's language choices create a particular effect. This is a learnable skill.",
        action:
          "Discuss with your student: what is the difference between 'The author makes the reader feel sad' and 'The author uses imagery of darkness and the repetition of the word cold to position the reader to feel the character's isolation'? The second is analytical — it names the technique, provides evidence, and explains the effect. Ask your student to convert a basic observation into an analytical sentence before the main activity.",
      },
      mainActivity: {
        title: "The TEEL Paragraph Structure",
        script:
          "A well-structured analytical paragraph does four things in order. Topic sentence: state the argument of this paragraph clearly — one idea, directly related to your thesis. Evidence: provide a relevant quote or reference. Explanation: this is the most important and most often underdeveloped part. Explain how the language works — name the technique, unpack the specific words, and connect them to the effect on the reader and the broader theme. Link: connect back to the essay question or thesis. The Explanation section should be at least as long as your evidence quote — often longer. The mistake most students make is quoting well and then explaining minimally.",
        action:
          "Together, draft one TEEL paragraph using the text you are studying. Choose one technique (imagery, symbolism, syntax, or word choice) and one quote. Write the Topic sentence together. Choose the Evidence. Spend most of your time on the Explanation — ask: what exact words are doing what? What connotations do they carry? What feeling do they create?",
      },
      wrapUp: {
        title: "The Essay as a Whole",
        script:
          "A full analytical essay has an introduction that states your thesis, three to four TEEL body paragraphs each developing a distinct aspect of your argument, and a conclusion that synthesises your argument rather than simply repeating it. A strong thesis is specific and debatable — not 'The author uses many techniques' but 'The author uses symbolism of light and darkness to argue that knowledge, however painful, is preferable to comfortable ignorance.'",
        action:
          "Ask your student to write a thesis statement for: 'How does the author use language to position the reader to feel sympathy for the protagonist?' The thesis should be one to two sentences and should name the techniques and themes.",
      },
      parentTip:
        "If essay writing feels overwhelming, break it into sessions: one session for planning and thesis, one for drafting two body paragraphs, one for the remaining paragraphs and introduction/conclusion. The structure makes the task manageable.",
      extension:
        "Draft a complete analytical essay (introduction + three body paragraphs + conclusion) in response to a question about the text you are studying. Review: does each paragraph connect to the thesis? Is the analysis section the longest part of each paragraph?",
      resources: [
        {
          title: "Essay Writing — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/index.html",
          description: "Comprehensive guide to essay structure, argument, and evidence integration.",
        },
        {
          title: "Literary Analysis — Khan Academy",
          url: "https://www.khanacademy.org/humanities/grammar/punctuation-the-colon-semicolon-and-more/introduction-to-punctuation/a/how-to-write-a-literary-analysis-essay",
          description: "Step-by-step walkthrough of literary essay structure and argument.",
        },
        {
          title: "Thesis Builder — ReadWriteThink",
          url: "https://www.readwritethink.org/classroom-resources/student-interactives/thesis",
          description: "Interactive tool for building strong, specific thesis statements.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Thesis Statement Practice",
        instruction:
          "Write a thesis statement for each of the following essay questions. A strong thesis should name specific techniques and themes — it should be arguable, not just descriptive.",
        parentTip:
          "Compare thesis statements together — the best ones make you want to read on. Weak ones feel vague or obvious.",
        prompts: [
          {
            text: "Question: 'How does the author use language to build tension in the opening chapter?' Write your thesis:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Question: 'How does this text challenge the reader's assumptions about power?' Write your thesis:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Question: 'How is the theme of identity explored in this text?' Write your thesis:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "TEEL Paragraph Development",
        instruction:
          "Use the TEEL structure to write a full analytical paragraph in response to: 'How does the author use language to create a sense of isolation?'\n\nYou may draw on any text you have studied, or use this prompt quote: 'She sat at the window, watching the street below where children moved through the yellow afternoon light, and she felt the glass between them as something more than glass.'",
        parentTip:
          "The analysis is the hardest part. Prompt your student: what does 'yellow afternoon light' suggest? What does 'something more than glass' mean? What concept is the glass standing in for?",
        prompts: [
          {
            text: "Topic sentence (your argument for this paragraph):",
            type: "lines",
            lines: 2,
          },
          { text: "Evidence (quote or reference):", type: "lines", lines: 2 },
          {
            text: "Explanation / Analysis (unpack the language \u2014 name the technique, the specific words, and the effect on the reader):",
            type: "lines",
            lines: 6,
          },
          {
            text: "Link (connect back to the question or broader essay argument):",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Introduction Writing",
        instruction:
          "Write an introduction (4\u20136 sentences) for an analytical essay responding to: 'How does the author use language to position the reader to feel sympathy for the protagonist?'\n\nYour introduction should name the text and author (you can invent these), give brief context, and end with a clear thesis statement.",
        parentTip:
          "The introduction should be a funnel: start broad (the text and its general themes), narrow to specific (your argument about language and sympathy). The thesis is the narrow tip.",
        prompts: [
          { text: "Your introduction:", type: "box" },
          {
            text: "Does your final sentence contain a clear, specific, arguable thesis? If not, revise it here:",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Draft a full analytical essay on your current text, using TEEL for each body paragraph.",
      "Move to comparative analysis \u2014 reading two texts together.",
    ],
  },

  {
    slug: "comparative-analysis",
    title: "Comparative Analysis: Reading Two Texts Together",
    strand: "Literacy",
    description:
      "Learn to compare how two texts treat a shared theme or use similar techniques, constructing an argument that draws meaningfully on both.",
    lesson: {
      title: "Comparative Analysis: Reading Two Texts Together",
      objective:
        "Analyse how two texts approach a shared theme differently and write a structured comparative response.",
      materials: [
        "Two short texts (poems, extracts, or articles) on a shared theme",
        "Pen and highlighters",
        "Worksheet",
      ],
      intro: {
        title: "Why Compare?",
        script:
          "Comparing two texts is one of the most intellectually rich things you can do in English. When you place two texts side by side, each one illuminates the other. You start to see what is distinctive about each — what choices each writer made that were not inevitable, but chosen. A poem about grief that uses spare, quiet language throws a more dramatic poem about grief into sharp relief. The comparison reveals what is specific and deliberate about each work. The goal of comparative analysis is not to prove that one text is 'better' — it is to explore how different writers approach the same problem or theme, and what different meanings those approaches create.",
        action:
          "Choose two short texts on the same theme and read both. Then ask: what is the most striking difference between how the two texts treat the theme? What is the most surprising similarity? Write these down before moving on.",
      },
      mainActivity: {
        title: "How to Structure a Comparative Response",
        script:
          "There are two main structures for comparative essays. The block structure: write everything about Text A, then everything about Text B, then a conclusion that compares them. This is simpler to write but often produces a weaker argument. The integrated structure: organise by idea rather than by text. Each paragraph takes a point of comparison and discusses both texts within it. This is harder to write but produces a stronger, more genuinely comparative argument. Connecting language is essential: 'whereas,' 'similarly,' 'in contrast,' 'both writers... however,' 'unlike X, Y chooses to...'",
        action:
          "Plan a comparative response together. Choose three points of comparison. For each point, note what Text A does and what Text B does. Then draft one integrated paragraph — beginning with your comparative point, bringing in evidence from both texts, and using connecting language.",
      },
      wrapUp: {
        title: "The Comparative Thesis",
        script:
          "A comparative thesis should name both texts, the shared theme, and the central difference or tension between them. Something like: 'While both texts explore the impact of loss on identity, Text A uses fragmented syntax to represent psychological disintegration, whereas Text B employs extended metaphor to suggest that loss can ultimately be transformative.' That is one sentence containing an argument, two technique references, and a clear comparison.",
        action:
          "Ask your student to write a comparative thesis for the two texts you have been working with. Review it together: does it name both texts? Does it identify a shared theme? Does it state a clear point of contrast?",
      },
      parentTip:
        "Comparative analysis requires holding two things in mind simultaneously. If your teenager finds it hard, that difficulty is normal and worth acknowledging. Suggest starting with the point of comparison they find most interesting, not the one they think is most correct.",
      extension:
        "Write a full comparative essay (introduction, three integrated body paragraphs, conclusion) on two texts you have studied. Focus on making the comparison the engine of each paragraph, not an afterthought.",
      resources: [
        {
          title: "Compare and Contrast Essays — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/compare_and_contrast_essays.html",
          description: "Clear guidance on both block and point-by-point comparative essay structures.",
        },
        {
          title: "Reading Across Texts — ReadWriteThink",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/reading-across-texts",
          description: "Strategies for reading and connecting multiple texts on a shared theme.",
        },
        {
          title: "Paired Passages — Khan Academy",
          url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3b5ce:reading-and-writing/x0a8c2e5f3af3b5ce:craft-and-structure/a/paired-passages-lesson",
          description: "Exercises in comparing paired passages and texts on related themes.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identifying Points of Comparison",
        instruction:
          "Read these two short extracts on the theme of belonging, then identify three specific points of comparison.\n\nExtract A: \"Home is not a place \u2014 it is a feeling you carry or lose. I have lived in seven countries and belong to none of them, and to all of them equally, which may be the same thing.\"\n\nExtract B: \"This street is the only language I speak fluently. I know every crack in the footpath, every house whose dog will bark as I pass. I do not need to belong to the world. This street is enough.\"",
        parentTip:
          "A point of comparison identifies a specific aspect (tone, structure, metaphor) and describes how each text handles it differently \u2014 it does not mean judging which is better.",
        prompts: [
          {
            text: "Point of comparison 1 (e.g. use of metaphor/imagery): How does Extract A handle this, and how does Extract B handle it differently?",
            type: "lines",
            lines: 4,
          },
          {
            text: "Point of comparison 2 (e.g. tone and emotional stance): Describe the tone of each extract and what creates it.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Point of comparison 3 (your choice \u2014 name the aspect): How do the two extracts differ on this point?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Integrated Comparative Paragraph",
        instruction:
          "Using the two extracts above and your notes from the previous activity, write one integrated comparative paragraph. Focus on one point of comparison and bring in evidence from both texts within the same paragraph. Use connecting language (whereas, similarly, in contrast, both... however).",
        parentTip:
          "The trap students fall into is writing about Text A for three sentences and then Text B for three sentences, with a linking word dropped in between. True integration means weaving both texts into each analytical move.",
        prompts: [
          { text: "Your comparative paragraph:", type: "box" },
          {
            text: "List the connecting language you used:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Comparative Thesis Writing",
        instruction:
          "Write a comparative thesis statement for an essay responding to: 'How do both extracts explore the idea of belonging, and how do they differ in their approach?'",
        parentTip:
          "A strong thesis states a clear comparison, not just a theme. It should make someone who has read both texts think: that is an interesting and specific claim.",
        prompts: [
          { text: "Your comparative thesis:", type: "lines", lines: 3 },
          {
            text: "Does it: name both texts? Identify the shared theme? State a clear point of contrast? Revise if needed:",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Practise comparative analysis on two poems or two short stories from different periods.",
      "Develop research skills: evaluating sources for analytical writing.",
    ],
  },

  {
    slug: "research-and-evaluating-sources",
    title: "Research Skills: Evaluating Sources",
    strand: "Literacy",
    description:
      "Develop the skills to evaluate the reliability, credibility, and bias of sources, and understand how to use research ethically in academic writing.",
    lesson: {
      title: "Research Skills: Evaluating Sources",
      objective:
        "Apply a systematic framework to evaluate the quality and credibility of sources for academic research.",
      materials: ["Access to the internet", "Pen and notebook", "Worksheet"],
      intro: {
        title: "Not All Information Is Equal",
        script:
          "In an era when anyone can publish anything online within minutes, source evaluation is one of the most important intellectual skills you can develop. The quantity of information available to you is almost unlimited; the quality varies enormously. A Wikipedia article, a peer-reviewed academic journal, a blog post, a government website, and a YouTube comment section are all 'sources' — but they carry very different levels of authority. Good researchers don't just find information — they interrogate it. They ask: who wrote this, and why? What are their credentials? When was it published? What evidence is it based on? These questions are not cynical — they are respectful of the truth.",
        action:
          "Together, search for information on a topic you are studying and find three different types of sources. Before evaluating them, ask: based on first impressions alone, which do you trust most and why?",
      },
      mainActivity: {
        title: "The SIFT Framework",
        script:
          "One useful framework for evaluating sources is SIFT. Stop: before you share or use information, pause and check your instinct — was the headline designed to make you react emotionally? Investigate the source: who is behind this website or publication? What are their credentials? Find better coverage: can you find this same claim in other reputable sources? If only one source is reporting something, be cautious. Trace claims: find the original source of the claim. Often news articles cite studies — go and look at the actual study. Was the headline an accurate summary of the research? SIFT is not about distrusting everything — it is about building the habit of verification before believing or sharing.",
        action:
          "Apply SIFT to one of the three sources you found in the introduction. Work through each step systematically. Write down what you discover at each stage. Does the source pass the evaluation?",
      },
      wrapUp: {
        title: "Using Sources Ethically in Your Writing",
        script:
          "When you use a source in an essay, you have two responsibilities: citing it correctly so readers can verify your information, and integrating it well so it supports rather than replaces your own argument. The most common mistake students make is quote-dropping: pasting a large quote into an essay without analysis, as if the quote speaks for itself. It does not. Every source you use should be introduced, quoted or paraphrased, and then analysed in relation to your argument. The source is evidence; you are the lawyer making the case.",
        action:
          "Ask your student to practise citing one of their sources in a simple format (Author, Year, Title, Publication). Then ask: how would they integrate a quote from this source into a paragraph? Practise writing one sentence that introduces the source, provides brief evidence, and then analyses it.",
      },
      parentTip:
        "Source evaluation is a genuinely lifelong skill. If this sparks a conversation about media literacy, misinformation, or the reliability of different news outlets, lean into it — these are some of the most important conversations a teenager can have.",
      extension:
        "Choose a topic that interests you. Find five sources and evaluate each using SIFT. Rank them from most to least reliable and write a brief explanation of your rankings. Then use your two most reliable sources to write a short, cited paragraph on the topic.",
      resources: [
        {
          title: "SIFT Media Literacy — Khan Academy",
          url: "https://www.khanacademy.org/college-careers-more/internet-safety/x1e7703a91e3dd7d4:online-reading-and-research/x1e7703a91e3dd7d4:evaluating-information-online/a/sift-checklist",
          description: "Khan Academy walkthrough of the SIFT framework for evaluating online information.",
        },
        {
          title: "Evaluating Sources — Purdue OWL",
          url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/index.html",
          description: "Comprehensive guide to evaluating source credibility and relevance.",
        },
        {
          title: "Is This Source Reliable? — ABC Education",
          url: "https://education.abc.net.au/home#!/media/3088325",
          description: "Australian resource on identifying reliable information online.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Source Evaluation: Apply SIFT",
        instruction:
          "Evaluate each of the following sources using the SIFT framework. Rate each source's reliability (high / medium / low) and briefly explain your rating.",
        parentTip:
          "You can research these sources together online to do a more thorough evaluation, or use only the descriptions provided. Both approaches are valuable.",
        prompts: [
          {
            text: "Source 1: A blog post titled 'Ten Foods That Cure Cancer' published on a personal wellness website with no author name and no references to studies. SIFT evaluation and reliability rating:",
            type: "lines",
            lines: 4,
          },
          {
            text: "Source 2: A peer-reviewed journal article published in The Lancet (a leading medical journal) in 2024, with named authors and a methodology section. SIFT evaluation and reliability rating:",
            type: "lines",
            lines: 4,
          },
          {
            text: "Source 3: A Wikipedia article on the history of climate science, with 87 footnotes linking to academic papers and news articles. SIFT evaluation and reliability rating:",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Integrating a Source Into Writing",
        instruction:
          "Practise integrating a source into academic writing. Use the following quote from a fictional source in a paragraph responding to: 'What are the effects of social media on adolescent wellbeing?'\n\nSource: Dr A. Chen, Journal of Adolescent Health, 2023: 'Our study found that adolescents who used social media for more than three hours daily reported significantly higher rates of anxiety and disrupted sleep patterns.'",
        parentTip:
          "The student's own analytical voice should dominate the paragraph — the source is the evidence, not the argument.",
        prompts: [
          {
            text: "Write a TEEL paragraph that introduces, quotes, and analyses this source in relation to the essay question:",
            type: "box",
          },
          {
            text: "Is your analysis section longer than your quote? If not, expand it below:",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: The Ethical Researcher",
        instruction:
          "Think about your own research habits and answer the following questions honestly.",
        parentTip:
          "This is a reflective activity — there are no wrong answers. It is about building honest self-awareness of research practices.",
        prompts: [
          {
            text: "When you search for information online, what is your usual process? Describe it honestly.",
            type: "lines",
            lines: 3,
          },
          {
            text: "Have you ever used a source without checking whether it was reliable? What might the consequences of that be in an academic context?",
            type: "lines",
            lines: 3,
          },
          {
            text: "What one change to your research habits would most improve the quality of your academic work?",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Apply source evaluation skills in your next research task.",
      "Begin Year 9 English: Critical Literacy \u2014 Power and Representation.",
    ],
  },
];

export function getYear8EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year8EnglishWorksheets.find((ws) => ws.slug === slug);
}
