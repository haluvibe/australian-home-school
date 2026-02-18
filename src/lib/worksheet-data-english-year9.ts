import type { WorksheetItem } from "./worksheet-types";

export const year9EnglishWorksheets: WorksheetItem[] = [
  {
    slug: "critical-literacy-power-and-representation",
    title: "Critical Literacy: Power and Representation",
    strand: "Literature",
    description:
      "Analyse how texts construct representations of people, groups, and events, and explore whose perspectives are centred, whose are marginalised, and why.",
    lesson: {
      title: "Critical Literacy: Power and Representation",
      objective:
        "Analyse how texts represent people and ideas in ways that reflect and reinforce social and cultural power structures.",
      materials: [
        "A text you are currently studying (novel, article, film, or advertisement)",
        "Pen and notebook",
        "Worksheet",
      ],
      intro: {
        title: "Who Gets to Tell the Story?",
        script:
          "Every text is written from somewhere — from a particular social position, cultural background, and moment in history. These positions shape what gets told, who is seen sympathetically, whose experience is centred, and whose is ignored or distorted. Critical literacy is the practice of reading texts with these questions in mind: who has power in this text, and who does not? Whose reality is treated as normal and universal, and whose is treated as different, exotic, or threatening? This is not about assuming all writers are deliberately biased — most are not. It is about recognising that all texts reflect the world their creators inhabit, with all its assumptions and inequalities. Reading critically means reading that world too.",
        action:
          "Together, think of a text — a film, book, or advertisement — where you instinctively felt that someone's perspective was missing, or that a character felt like a stereotype rather than a person. What made you feel that? Share your thoughts before reading on.",
      },
      mainActivity: {
        title: "Questions a Critical Reader Asks",
        script:
          "Here are the core questions of critical literacy. Who is represented in this text, and how? Are they given depth, complexity, and interiority — or are they a type, a background detail, a problem to be solved? Whose perspective does the narrative adopt? Who is the 'I' or the implied reader? What is treated as normal or natural in this text, and what is treated as strange or threatening? What is absent? Whose experience is simply not there? What social, cultural, or historical context shapes these choices? These questions do not have simple answers — they open up analysis. And it is worth saying clearly: noticing that a text reflects power structures does not mean dismissing it. You can love a text and still read it critically.",
        action:
          "Take the text you are studying and work through the critical literacy questions together. Write brief notes for each one. You do not need to answer all of them fully — identify the two or three that seem most productive for this particular text.",
      },
      wrapUp: {
        title: "From Description to Analysis",
        script:
          "The goal of critical literacy is not just to spot problems with texts — it is to deepen your understanding of how culture works and how meaning is made. When you write an analytical response to a critical literacy question, you are not just describing what the text does — you are arguing for a particular interpretation of why it does it, and what effect that has on readers and on how we understand the world. That is sophisticated work, and it is exactly what Year 9 English is asking you to do.",
        action:
          "Ask your student to write one analytical sentence in response to this question: 'How does this text represent [a specific group or character]?' The sentence should name a technique, provide evidence, and explain the social or cultural effect.",
      },
      parentTip:
        "These conversations are often where parent and teenager find themselves genuinely co-learning. If a question about representation or power touches on something in your own family's experience or history, that personal connection is valuable and worth following. Some of the best literary discussions begin with 'that reminds me of...'",
      extension:
        "Find two representations of the same group (e.g. a historical figure, a cultural community, a profession) in texts from different time periods or different cultural contexts. Write a comparison: how does each text represent this group, and what does the difference tell us about the contexts in which the texts were produced?",
      resources: [
        {
          title: "Critical Literacy — ReadWriteThink",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/critical-literacy-questioning-power",
          description: "Frameworks and lesson plans for teaching critical literacy and representation.",
        },
        {
          title: "Representation and Stereotypes — ABC Education",
          url: "https://education.abc.net.au/home#!/media/2659831/representation-and-stereotypes",
          description: "Australian media literacy resource on how representation works in texts.",
        },
        {
          title: "How Stories Shape the World — The School of Life",
          url: "https://www.youtube.com/watch?v=RuvqKF3GXeU",
          description: "Engaging video on the cultural power of narrative and whose stories get told.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Unpacking Representation",
        instruction:
          "Think about a character from a text you have studied who belongs to a social group (defined by gender, race, class, age, nationality, or another marker). Answer the questions below.",
        parentTip:
          "If your student chooses a character they feel has been represented fairly, that is equally valid — analysing positive representation is just as revealing as analysing problematic representation.",
        prompts: [
          {
            text: "Who is the character and what social group do they belong to? What text are they from?",
            type: "lines",
            lines: 2,
          },
          {
            text: "How is this character represented? Are they given complexity and depth, or do they seem to fulfil a social 'type'? Give specific evidence from the text.",
            type: "lines",
            lines: 5,
          },
          {
            text: "Whose perspective does the narrative adopt when presenting this character? Does the narrative seem to fully understand this character's inner life, or does it see them from the outside?",
            type: "lines",
            lines: 4,
          },
          {
            text: "What might a reader from the same social group as this character think of their representation? What might be missing or distorted?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Absence and Silence in Texts",
        instruction:
          "Critical literacy pays attention not just to what is in a text but to what is absent. Consider a text you have studied or read recently and answer the following.",
        parentTip:
          "The concept of 'absent voices' is one of the most intellectually powerful tools in Year 9 English — it asks students to imagine beyond what is on the page, which is a genuinely creative and critical skill.",
        prompts: [
          {
            text: "Whose voice or perspective is largely absent from this text? Why might this be?",
            type: "lines",
            lines: 4,
          },
          {
            text: "How might the text look different if that absent perspective were centred? What might change?",
            type: "lines",
            lines: 4,
          },
          {
            text: "Does the absence of this perspective affect how you read or feel about the text? Explain your response.",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analytical Response: Representation",
        instruction:
          "Write a short analytical response (one paragraph) to the following question: 'How does the text you are studying represent [the social group you identified in Activity 1], and what does this representation reveal about the cultural context in which the text was produced?'\n\nUse the TEEL structure (Topic, Evidence, Explanation, Link). Make sure your Explanation connects the representation to social or cultural context.",
        parentTip:
          "This paragraph is asking for sophisticated thinking: not just 'the author does X' but 'the author does X, which reflects Y about the world in which this text was made.' That connection to context is the Year 9 standard.",
        prompts: [
          { text: "Your analytical paragraph:", type: "box" },
          {
            text: "Does your explanation section connect the representation to its cultural or historical context? If not, add that connection here:",
            type: "lines",
            lines: 4,
          },
        ],
      },
    ],
    nextSteps: [
      "Move on to rhetorical devices: understanding how persuasion works at the level of language.",
      "Research the historical or cultural context of a text you are studying and write a short contextual analysis.",
    ],
  },

  {
    slug: "rhetorical-devices",
    title: "Rhetorical Devices: Ethos, Pathos, Logos",
    strand: "Language",
    description:
      "Understand the classical framework of rhetorical persuasion and identify how ethos, pathos, and logos operate in spoken and written texts.",
    lesson: {
      title: "Rhetorical Devices: Ethos, Pathos, Logos",
      objective:
        "Identify and analyse how rhetorical appeals — ethos, pathos, and logos — function in persuasive texts.",
      materials: [
        "A persuasive speech, article, or advertisement (video or printed)",
        "Pen and notebook",
        "Worksheet",
      ],
      intro: {
        title: "The Ancient Art of Persuasion",
        script:
          "About 2,400 years ago, the Greek philosopher Aristotle identified three fundamental ways that speakers and writers persuade their audiences. He called them ethos, pathos, and logos. Ethos is the appeal to the speaker's credibility and character — we are persuaded by people we trust and respect. Pathos is the appeal to emotion — we are moved by stories, images, and language that make us feel something. Logos is the appeal to logic and evidence — we are convinced by facts, statistics, and well-constructed arguments. Every effective piece of persuasion uses some combination of these three. Understanding them gives you a framework for both analysing how you are being persuaded and crafting more effective arguments yourself.",
        action:
          "Ask your student: think of an advertisement, speech, or piece of writing that was genuinely persuasive to them. Which of the three appeals do they think it used most heavily? Try to name a specific moment where they felt persuaded and identify which appeal was operating.",
      },
      mainActivity: {
        title: "Identifying the Three Appeals",
        script:
          "When analysing rhetorical appeals in a text, look for specific markers. Ethos appears when a speaker references their qualifications, experience, or shared values with the audience — 'As a doctor with twenty years of experience...' or 'As a fellow parent, I understand your concern.' It also appears in how a speaker presents themselves: confident, authoritative, trustworthy. Pathos appears in emotionally charged language, personal stories, vivid imagery, and appeals to values like family, justice, or belonging. Logos appears in statistics, expert quotations, logical if-then structures, and case studies. Critically, logos can be genuine — well-sourced, valid reasoning — or it can be a performance of logic that does not actually hold up to scrutiny. Part of your job as an analytical reader is to test the logos: is the evidence real? Is the reasoning sound?",
        action:
          "Watch or read the persuasive text you have chosen. Identify at least one example of each appeal. Write down the specific words or moments that signal each one. Then ask: which appeal was most effective, and why? Which was least effective?",
      },
      wrapUp: {
        title: "When Rhetoric Becomes Manipulation",
        script:
          "Aristotle's framework is a tool for both creation and critique. It can be used to build genuine, ethical arguments — or to manipulate through false authority, emotional exploitation, or misleading statistics. The mark of an educated reader is being able to enjoy being persuaded by good rhetoric while also recognising when you are being manipulated by bad rhetoric. Both things are possible at once. Developing this double awareness — responding emotionally and thinking critically at the same time — is one of the core intellectual achievements of a great English education.",
        action:
          "Ask your student: can they think of an example of each appeal used manipulatively rather than genuinely? What made it manipulative rather than legitimate?",
      },
      parentTip:
        "If you find yourselves disagreeing about whether a specific text is persuasive or manipulative, that is a genuinely interesting discussion worth having. There is no clean line between the two — exploring that ambiguity together is exactly the kind of critical thinking Year 9 English is building.",
      extension:
        "Write a short persuasive speech (2–3 minutes when read aloud) on a topic you feel strongly about. Deliberately include at least one example of each of the three appeals. Then annotate your speech to label where each appeal appears and why you made that choice.",
      resources: [
        {
          title: "Ethos, Pathos, Logos — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/rhetorical_situation/ethos_pathos_and_logos.html",
          description: "Clear academic explanation of the three rhetorical appeals with examples.",
        },
        {
          title: "Rhetoric and Persuasion — Khan Academy",
          url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3b5ce:reading-and-writing/x0a8c2e5f3af3b5ce:expression-of-ideas/a/rhetoric-lesson",
          description: "SAT-level exercises on identifying and analysing rhetorical choices.",
        },
        {
          title: "How to Argue — The School of Life",
          url: "https://www.youtube.com/watch?v=7GHGkU1XKxQ",
          description: "Thoughtful video on the principles of effective and ethical argumentation.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Identifying Rhetorical Appeals",
        instruction:
          "Read the following extract from a fictional environmental speech and identify how each rhetorical appeal operates.\n\n\"I am a marine biologist who has spent fifteen years studying coral reef systems across the Pacific. I have watched, with my own eyes, reefs that once teemed with life become bleached and silent. My daughter was born three years ago, and when I imagine her asking me — when she is old enough to understand — what I did when I knew, I find I cannot be silent. The data is unambiguous: reef systems are declining at an accelerating rate, with a 50% reduction in coral cover recorded in the Great Barrier Reef alone since 1995. We cannot afford to wait.\"",
        parentTip:
          "Encourage your student to quote specific words or phrases when explaining each appeal — vague identification is less valuable than precise textual evidence.",
        prompts: [
          {
            text: "Ethos: How does the speaker establish their credibility and authority? Quote the relevant section and explain its effect.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Pathos: Where does the speaker make an emotional appeal? What specific words or images create the emotional effect?",
            type: "lines",
            lines: 4,
          },
          {
            text: "Logos: Where does the speaker appeal to logic or evidence? Is the evidence presented in a way that seems reliable? Why or why not?",
            type: "lines",
            lines: 4,
          },
          {
            text: "Overall: Which appeal do you think is most effective in this extract, and why?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Rhetoric and Manipulation",
        instruction:
          "For each of the following rhetorical moves, explain whether it represents a legitimate appeal or a manipulative one, and why.",
        parentTip:
          "The distinction between legitimate and manipulative rhetoric is often a matter of degree and context rather than a clean binary. Encourage your student to think in nuance, not absolutes.",
        prompts: [
          {
            text: "A politician begins every speech: 'As the parent of three children, I know what Australian families need.' Is this legitimate ethos or manipulative? Why?",
            type: "lines",
            lines: 4,
          },
          {
            text: "An advertisement for a charity shows images of suffering children with dramatic music. Is this legitimate pathos or manipulative? Why?",
            type: "lines",
            lines: 4,
          },
          {
            text: "An opinion piece cites one study to claim 'scientists agree that...' Is this legitimate logos or misleading? What would make it more credible?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Craft Your Own Rhetorical Appeal",
        instruction:
          "Choose a topic you feel genuinely passionate about. Write three short paragraphs — one using primarily ethos, one using primarily pathos, and one using primarily logos — to argue for your position.",
        parentTip:
          "This is one of the most revealing writing exercises in Year 9 — students often find one appeal far more natural than the others, which tells them something interesting about their own rhetorical instincts.",
        prompts: [
          {
            text: "Ethos paragraph (establish your credibility or shared values with your reader):",
            type: "box",
          },
          {
            text: "Pathos paragraph (appeal to emotion through story, imagery, or values):",
            type: "box",
          },
          {
            text: "Logos paragraph (appeal to evidence, statistics, or logical reasoning):",
            type: "box",
          },
          {
            text: "Which appeal felt most natural to write? Which felt most difficult? What does this tell you about your writing strengths?",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Apply rhetorical analysis in your next analytical essay.",
      "Move on to multimodal analysis: how film and advertising use visual rhetoric.",
    ],
  },

  {
    slug: "multimodal-analysis",
    title: "Multimodal Analysis: Film and Advertising",
    strand: "Literacy",
    description:
      "Develop the skills to analyse how film and advertising texts use visual, audio, and linguistic elements together to construct meaning and position audiences.",
    lesson: {
      title: "Multimodal Analysis: Film and Advertising",
      objective:
        "Identify and explain how multimodal texts use visual, audio, and linguistic elements to create meaning and position audiences.",
      materials: [
        "A film clip or advertisement (2\u20135 minutes is ideal)",
        "Pen and notebook",
        "Worksheet",
      ],
      intro: {
        title: "When Words Are Only Part of the Story",
        script:
          "Most of the texts you encounter in daily life are not purely written — they combine words with images, sound, colour, movement, and space. Film, advertising, websites, social media posts, infographics — these are all multimodal texts, meaning they make meaning through multiple modes simultaneously. Analysing them requires expanding the toolkit you use for print texts. In a film, the camera angle, the lighting, the music, the actor's performance, the editing rhythm, and the dialogue all work together. You need to be able to talk about all of these elements and, crucially, how they interact. The meaning of a line of dialogue changes completely depending on whether it is lit in warm gold or cold blue, spoken quietly or shouted.",
        action:
          "Watch the opening two minutes of a film you are studying (or any film you know well) with the sound off. Ask: what do you understand about the characters, setting, and mood from the visuals alone? Then watch again with the sound on. What does audio add? What changes?",
      },
      mainActivity: {
        title: "The Language of Film and Image",
        script:
          "Here are the key terms for multimodal analysis. Camera angle: a high angle shot (camera above the subject) can make a character seem small or vulnerable; a low angle shot (camera below) can make them seem powerful. Camera distance: a close-up reveals emotion and intimacy; a wide shot establishes context and can create a sense of isolation. Lighting: warm light suggests safety, intimacy, or nostalgia; cold blue light suggests threat, alienation, or the clinical. Sound and music: diegetic sound (sounds that exist in the world of the film) versus non-diegetic (soundtrack music added in editing). Editing: fast cuts create urgency and energy; slow cuts create space for reflection. Colour palette: saturated, vivid colours versus desaturated grey tones. In advertising, layout, typography, and the relationship between image and text all carry meaning.",
        action:
          "Watch the film clip or advertisement again, this time pausing at two or three specific moments. For each moment, identify: what visual element is most prominent? What audio element is most prominent? What is the combined effect of the two? Write your observations.",
      },
      wrapUp: {
        title: "Writing a Multimodal Analysis",
        script:
          "When writing about multimodal texts, use the same analytical structure as for print texts — but name the specific visual or audio technique rather than a linguistic one. 'The director uses a low-angle shot when the character enters the room, positioning the viewer to perceive her as powerful and threatening, which reinforces the film's theme of...' That is the structure. Name the technique, describe what it does, and connect it to meaning and theme.",
        action:
          "Ask your student to write one analytical sentence about the film clip using this structure: technique + effect + theme/meaning.",
      },
      parentTip:
        "Multimodal analysis is an area where co-learning works especially well. If you watch the clip together and each notice different elements, share your observations — there is no single correct reading, and demonstrating that both of you can find valid evidence in the same text is itself a valuable lesson about interpretation.",
      extension:
        "Choose an advertisement you find genuinely effective or genuinely problematic. Write a full multimodal analysis (three to four paragraphs) examining how visual, audio, and linguistic elements combine to position the audience and construct a particular message. Include analysis of at least one element from each mode.",
      resources: [
        {
          title: "Film Analysis Guide — ReadWriteThink",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/film-as-text",
          description: "Strategies and frameworks for analysing film as a text in English.",
        },
        {
          title: "Media and Multimodal Literacy — ABC Education",
          url: "https://education.abc.net.au/home#!/digibooks/2702553/media-literacy",
          description: "Australian resource on reading multimodal texts critically.",
        },
        {
          title: "How to Read a Photograph — The School of Life",
          url: "https://www.youtube.com/watch?v=l7Glf_PRKRI",
          description: "Thoughtful video on how visual images carry and construct meaning.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Visual Analysis: Close Reading of an Image",
        instruction:
          "Choose a still image — a film frame, an advertisement, a news photograph, or any powerful image you have access to. Analyse it using the questions below.",
        parentTip:
          "A good image for this activity has multiple layers — something where the foreground, background, lighting, and composition all seem to be doing deliberate work. Film stills are excellent for this.",
        prompts: [
          {
            text: "Describe the image in detail: what is in the foreground? What is in the background? What colours are dominant?",
            type: "lines",
            lines: 4,
          },
          {
            text: "What is the camera angle or vantage point? What effect does this create — who or what seems powerful, vulnerable, or important?",
            type: "lines",
            lines: 4,
          },
          {
            text: "What mood or atmosphere does the image create, and which specific visual elements create it?",
            type: "lines",
            lines: 4,
          },
          {
            text: "If there is text in the image (e.g. in an advertisement), how does the relationship between the text and the image create meaning?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analysing a Film or Advertisement Clip",
        instruction:
          "Choose a short clip (2\u20134 minutes) from a film you are studying or an advertisement that interests you. Watch it at least twice before answering.",
        parentTip:
          "Watching twice is important — the first time, students respond emotionally; the second time, they can observe the technical choices that created that response. Both viewing experiences are valuable.",
        prompts: [
          {
            text: "Identify one visual technique (camera angle, lighting, colour, composition) and explain what meaning it creates.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Identify one audio technique (music, sound effects, dialogue tone, silence) and explain what meaning it creates.",
            type: "lines",
            lines: 4,
          },
          {
            text: "How do the visual and audio elements work together at one specific moment? What is the combined effect?",
            type: "lines",
            lines: 4,
          },
          {
            text: "What audience does this text seem designed for? How do the multimodal choices reflect that target audience?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Written Multimodal Analysis Paragraph",
        instruction:
          "Write one well-structured analytical paragraph about the clip or image you studied. Use the structure: name the technique, describe what it does, and connect it to the text's overall meaning or theme.",
        parentTip:
          "Encourage your student to be specific: 'the camera' is less precise than 'a close-up on the character's hands', which is less precise than 'a close-up on the character's hands, trembling slightly, filmed from slightly below...' Specificity is evidence.",
        prompts: [
          { text: "Your multimodal analysis paragraph:", type: "box" },
          {
            text: "Does your paragraph name a specific technique, provide evidence, explain its effect, and connect to a theme? Check each element and annotate your paragraph:",
            type: "lines",
            lines: 4,
          },
        ],
      },
    ],
    nextSteps: [
      "Apply multimodal analysis skills to a longer essay on a film or advertising campaign.",
      "Move on to Australian literature: exploring cultural identity in texts by Australian authors.",
    ],
  },

  {
    slug: "australian-literature-and-identity",
    title: "Australian Literature and Cultural Identity",
    strand: "Literature",
    description:
      "Read and analyse texts by Australian authors, exploring how they represent Australian landscapes, communities, histories, and identities.",
    lesson: {
      title: "Australian Literature and Cultural Identity",
      objective:
        "Analyse how Australian literary texts construct representations of Australian identity, landscape, and cultural experience.",
      materials: [
        "A text by an Australian author (novel, short story, poem, or essay)",
        "Pen and notebook",
        "Worksheet",
      ],
      intro: {
        title: "What Does It Mean to Write From Here?",
        script:
          "Australian literature is not a single thing — it is an extraordinarily diverse collection of voices writing from and about a continent with multiple, often conflicting histories. There is the landscape: vast, ancient, often harsh, and written about by European settlers with a mixture of wonder, fear, and incomprehension — and written about by Aboriginal and Torres Strait Islander peoples with an intimacy and knowledge that stretches back tens of thousands of years. There is the colonial history: the violence of dispossession, the experience of migration, the question of what it means to belong to a place that others have called home for millennia. There is the question of national identity: what is distinctly Australian, and who gets to define it? Australian literature grapples with all of these questions — and at its best, it does so with honesty, beauty, and moral seriousness.",
        action:
          "Before reading the text you have chosen, ask: what do you already know about the author's background? Where are they from? What community do they represent? What might they see and know that another author might not? Write your initial thoughts.",
      },
      mainActivity: {
        title: "Reading for Place, Community, and History",
        script:
          "When reading Australian literature, attend to three layers. The first is place: how is the landscape or environment described? Is it domestic and familiar, or vast and threatening? Does the land feel alive with meaning (as it does in many Aboriginal texts) or empty and foreign (as it does in much early settler writing)? The second is community: what communities are represented, and from whose perspective? Whose relationships, values, and ways of living are treated as central? The third is history: what historical events or legacies are present in this text, even if not explicitly stated? How does the past shape the present in the world of this text? These three layers often overlap and illuminate each other.",
        action:
          "Read a chapter or a poem from your chosen text. As you read, annotate for place, community, and history. Mark passages where the landscape seems particularly significant. Mark moments where community values or tensions are visible. Note any references — direct or indirect — to historical events or legacies.",
      },
      wrapUp: {
        title: "Writing About Australian Texts",
        script:
          "When writing analytically about Australian literature, contextual analysis is especially important — you need to connect the text to its cultural and historical context. 'The author represents the Australian landscape as... which reflects the broader cultural context of... at the time of writing.' This kind of contextual connection is what distinguishes a strong Year 9 analysis from a surface-level one.",
        action:
          "Ask your student to write one contextual analytical sentence about the text they are reading. The sentence should connect a specific textual choice to a broader cultural or historical context.",
      },
      parentTip:
        "If you are reading a text by an Aboriginal or Torres Strait Islander author, this is a valuable opportunity to learn together about the specific cultural context of the work. Many such authors include author notes or interviews that provide essential context — seeking these out together is genuinely enriching and shows respect for the work.",
      extension:
        "Compare two texts by Australian authors from different cultural backgrounds on a shared theme (land, belonging, family, justice). Write a comparative analysis focusing on how the different cultural contexts shape the texts' representations and meanings.",
      resources: [
        {
          title: "Australian Literature Study — ABC Education",
          url: "https://education.abc.net.au/home#!/media/1522880/australian-literature",
          description: "Resources and context for studying Australian literature in secondary school.",
        },
        {
          title: "Reading Australia Project",
          url: "https://www.readingaustralia.com.au/books",
          description: "Curated collection of significant Australian texts with teaching notes and author context.",
        },
        {
          title: "First Nations Literature — AIATSIS",
          url: "https://aiatsis.gov.au/explore/first-nations-stories",
          description: "Aboriginal and Torres Strait Islander stories, voices, and cultural resources.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Reading the Landscape",
        instruction:
          "Choose a passage from your Australian text in which the natural environment is described. Analyse how the writer represents the landscape.",
        parentTip:
          "The way landscape is written about in Australian literature is rarely neutral — it almost always carries cultural, historical, or emotional freight. Encourage your student to look beyond the descriptive surface.",
        prompts: [
          {
            text: "Quote or describe the passage you have chosen and identify the key descriptive language.",
            type: "lines",
            lines: 4,
          },
          {
            text: "How is the landscape represented — as beautiful, threatening, indifferent, alive, or something else? What language creates this impression?",
            type: "lines",
            lines: 4,
          },
          {
            text: "What does this representation of landscape reveal about the character's (or narrator's) relationship to the land and their cultural context?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Identity and Belonging in Australian Texts",
        instruction:
          "Australian literature often explores questions of identity, belonging, and home. Reflect on these questions in relation to the text you are reading.",
        parentTip:
          "If your family has its own experience of migration, belonging, or cultural identity, this is a natural conversation to open up — personal connection to texts deepens analysis, not weakens it.",
        prompts: [
          {
            text: "How does the text explore the idea of belonging? Does the main character feel they belong, and to what or whom?",
            type: "lines",
            lines: 4,
          },
          {
            text: "Is there a tension in the text between different kinds of identity (cultural, national, familial, personal)? Describe it using evidence from the text.",
            type: "lines",
            lines: 4,
          },
          {
            text: "How does the historical or cultural context of Australia shape the characters' sense of identity? Connect the text to a specific aspect of Australian history or culture.",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Contextual Analysis Paragraph",
        instruction:
          "Write one analytical paragraph that connects a specific aspect of your Australian text to its broader cultural or historical context. Use the structure: name a textual choice the author makes, explain its effect, and then explicitly connect it to the Australian context in which the text was produced.",
        parentTip:
          "The contextual connection is often the part students skip. Prompt your student: 'Why might an Australian author in [time period] write about [topic] in this way? What was happening in Australia at that time?'",
        prompts: [
          { text: "Your contextual analysis paragraph:", type: "box" },
          {
            text: "Does your paragraph explicitly name the cultural or historical context? If not, add that connection here:",
            type: "lines",
            lines: 4,
          },
        ],
      },
    ],
    nextSteps: [
      "Write an extended analytical essay on the Australian text you have studied.",
      "Explore personal and reflective writing in the next worksheet.",
    ],
  },

  {
    slug: "personal-and-reflective-writing",
    title: "Personal and Reflective Writing",
    strand: "Literacy",
    description:
      "Develop skills in personal and reflective writing — exploring your own experience, voice, and perspective with craft, honesty, and depth.",
    lesson: {
      title: "Personal and Reflective Writing",
      objective:
        "Write personal and reflective texts that demonstrate genuine voice, specific detail, and honest self-examination.",
      materials: [
        "Pen and notebook (handwriting is ideal for this type of writing)",
        "A quiet space to think",
        "Worksheet",
      ],
      intro: {
        title: "Why Personal Writing Is the Hardest Kind",
        script:
          "You might think that writing about yourself would be easy — after all, you know the subject better than anyone. In practice, personal writing is often the hardest kind to do well, because it requires two things that are difficult to combine: genuine honesty and deliberate craft. The honesty is difficult because it asks you to examine your own experience clearly, without the protection of distance or abstraction. The craft is difficult because you must shape raw experience into something that is interesting and meaningful to a reader who has not lived what you have. The great personal essayists — writers like George Orwell, Joan Didion, and Tim Winton — do both: they are honest about their inner lives, and they make that honesty beautiful and illuminating for others. That is the standard, and it is worth striving for even in a school context.",
        action:
          "Ask your student: what is one experience they have never written about but feel they could describe in precise, honest detail? It does not have to be dramatic — in fact, the best personal writing often focuses on small, particular moments rather than big events. Write down two or three possibilities before choosing.",
      },
      mainActivity: {
        title: "The Craft of Personal Writing",
        script:
          "Here are the key principles of personal writing at this level. Specificity over generality: 'I was nervous' is general; 'My mouth went dry and I couldn't remember the first word of the sentence I had rehearsed for three days' is specific. Specific detail is more honest and more vivid. Scene versus summary: show a moment in real-time, with dialogue and sensory detail, rather than summarising what happened. Reflection is where the depth lives: personal writing is not just description — it moves between experience and reflection, between 'what happened' and 'what it meant.' The reflective layer is where your thinking becomes visible. Voice: your writing should sound like you — not a formal essay version of you, but the way you actually think.",
        action:
          "Together, choose one specific moment from the experience your student identified. Write a short scene (five to eight sentences) that recreates that moment in real-time, with sensory detail. No summary — stay in the moment. Then write two or three sentences of reflection: what does this moment mean? What did you understand about yourself or the world from it?",
      },
      wrapUp: {
        title: "The Distance Between Experience and Understanding",
        script:
          "One of the most sophisticated moves in personal writing is the gap between the experiencing self and the reflecting self — the person who lived through something, and the person writing about it now. That gap is where meaning is made. You can use it explicitly: 'At the time, I thought... but now I understand...' or 'What I could not see then was...' This temporal distance allows you to be both inside the experience and outside it, both participant and observer. That double perspective is the hallmark of mature reflective writing.",
        action:
          "Ask your student to add one sentence to their piece that explicitly marks the gap between the experiencing self and the reflecting self. It should begin with something like: 'What I did not know then was...' or 'Looking back now...'",
      },
      parentTip:
        "Personal writing can occasionally touch on difficult or sensitive experiences. If your teenager wants to write about something emotionally significant, that is often a sign they are ready to process it — but give them space to choose the depth of disclosure themselves. Personal writing should always feel like a choice, not an obligation.",
      extension:
        "Write a complete personal essay (400\u2013600 words) on a moment or experience that has shaped how you see yourself or the world. Structure it with at least one fully realised scene, several moments of explicit reflection, and a conclusion that moves toward an insight or open question rather than a neat resolution.",
      resources: [
        {
          title: "Personal Essay Writing — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/narrative_essays.html",
          description: "Guidance on writing personal and narrative essays with voice and structure.",
        },
        {
          title: "The Art of the Personal Essay — ReadWriteThink",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/personal-narrative",
          description: "Lesson strategies for teaching personal narrative and reflective writing.",
        },
        {
          title: "On Self-Knowledge — The School of Life",
          url: "https://www.youtube.com/watch?v=0HaXSAkQcHA",
          description: "Philosophical video on the practice of understanding oneself — a thoughtful companion to reflective writing.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Scene Writing: A Specific Moment",
        instruction:
          "Choose a specific, small moment from your own experience — it could be as simple as a conversation, a journey, finding or losing something, or a moment of unexpected feeling. Write a scene that recreates this moment in real-time, with sensory detail. Stay inside the moment — do not summarise.",
        parentTip:
          "If your student is stuck, prompt them: 'Write the moment from the perspective of your senses. What did you see, hear, smell? What were you wearing? What time of day was it?' Sensory prompts often unlock writing that feels stuck.",
        prompts: [
          { text: "Your scene (aim for 8\u201312 sentences):", type: "box" },
          {
            text: "Read it back. Is there any place where you switch from scene to summary? Mark it and try rewriting that section as a scene.",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Adding the Reflective Layer",
        instruction:
          "Take the scene you wrote in Activity 1 and add a reflective layer. This is where you move from 'what happened' to 'what it meant.'",
        parentTip:
          "Reflection in personal writing is not the same as a moral or lesson. It is more like thinking aloud — noticing what is complicated, what you still do not understand, what surprised you about yourself.",
        prompts: [
          {
            text: "Write 3\u20135 sentences of reflection on the moment you described. What did you understand about yourself or the world from it? What is still unclear or complicated?",
            type: "lines",
            lines: 5,
          },
          {
            text: "Write one sentence that marks the gap between the experiencing self (who lived through the moment) and the reflecting self (who is writing now). Begin with 'What I did not know then was...' or 'Looking back now...'",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Voice and Style",
        instruction:
          "One of the goals of personal writing is to develop a distinctive voice — writing that sounds like you, not like a formal essay. Answer the following questions to reflect on your own writing voice.",
        parentTip:
          "Voice is often described in terms of personality traits: a voice can be dry and ironic, warm and confessional, cool and observational, urgent and passionate. Discussing what kind of voice your student gravitates toward is a genuinely interesting conversation.",
        prompts: [
          {
            text: "How would you describe the voice in the writing you did today? Is it formal or conversational? Emotional or detached? Confident or uncertain? Use three adjectives and explain why you chose them.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Are there any sentences in your writing that feel particularly like 'you'? Copy one here and explain what makes it feel authentic to your voice.",
            type: "lines",
            lines: 4,
          },
          {
            text: "Are there any sentences that feel generic or impersonal — sentences you could imagine anyone writing? Identify one and try rewriting it in a more distinctive way.",
            type: "lines",
            lines: 4,
          },
        ],
      },
    ],
    nextSteps: [
      "Complete a full personal essay using the scene and reflection you developed in this worksheet.",
      "Read a personal essay by an Australian author — Tim Winton's essays in Island Home are a strong choice.",
    ],
  },

  {
    slug: "formal-presentations-and-debate",
    title: "Formal Presentations and Debate Structures",
    strand: "Literacy",
    description:
      "Develop skills in formal spoken English — structuring presentations, constructing arguments, and engaging with opposing views through structured debate.",
    lesson: {
      title: "Formal Presentations and Debate Structures",
      objective:
        "Plan and deliver a structured formal presentation and understand the conventions of structured academic debate.",
      materials: [
        "Pen and paper for planning",
        "A topic or question to present on",
        "Worksheet",
        "Optional: timer",
      ],
      intro: {
        title: "Speaking Is Not Just Talking",
        script:
          "There is a significant difference between talking — which we all do constantly and without much planning — and formal spoken English, which is a craft that requires the same kind of attention to structure, evidence, and audience that good writing does. The ability to present ideas clearly, confidently, and persuasively in spoken form is one of the most practically valuable skills you will ever develop. It matters in university, in the workplace, in community life, and in any situation where you need to advocate for something you believe in. Today we are going to work on two connected skills: constructing and delivering a formal presentation, and understanding the structure of academic debate.",
        action:
          "Ask your student: can they think of a speaker — in a film, a documentary, a TED talk, or real life — who they found genuinely compelling? What made that person effective? Write down two or three specific qualities (not just 'confident' — try to be precise: 'they paused before their key point' or 'they made eye contact with different parts of the room').",
      },
      mainActivity: {
        title: "Structuring a Formal Presentation",
        script:
          "A well-structured presentation has four elements. The opening: do not start with 'Hi, um, I am going to talk about...' Begin with something that earns your audience's attention — a provocative question, a surprising statistic, a brief story. Tell your audience what your argument will be. The body: two to three main points, each supported by evidence. Do not try to cover everything — be selective and be deep rather than broad. Use signposting language to guide your audience: 'My first point is...' 'Moving on to...' 'This connects to...' The rebuttal (if applicable): acknowledge the strongest opposing argument and explain why your position still holds. This shows intellectual maturity and strengthens your credibility. The close: return to your opening, restate your argument more powerfully given the evidence you have presented, and end with impact — not 'so, yeah, that is basically it.'",
        action:
          "Together, plan a three-minute presentation on a topic your student chooses or is studying. Use the four-element structure. Write brief notes — not a script — for each section. Then deliver it, aiming for three minutes. Time it.",
      },
      wrapUp: {
        title: "Debate Structure",
        script:
          "Structured debate is a formal way of testing arguments through adversarial exchange. In a standard two-team debate, the Affirmative team argues for a proposition (e.g. 'Artificial intelligence should be regulated by governments') and the Negative team argues against it. Each speaker has a role: first speakers define terms and outline the team's case; second speakers develop the main arguments with evidence; third speakers rebut the other team's case and summarise. The fundamental discipline of debate is this: you must engage with what the other side actually says, not a weaker version of it. This is called steelmanning — engaging with the strongest possible version of the opposing argument — and it is one of the highest intellectual virtues in academic discourse.",
        action:
          "Choose a debate topic together (some options: 'Social media does more harm than good'; 'Schools should not assign homework'; 'Australia should become a republic'). Ask your student to identify the three strongest arguments for both sides before committing to one position.",
      },
      parentTip:
        "Debate is an area where co-participating works brilliantly. If you take the opposing side of your teenager's argument, you can model both steelmanning (making the best possible case against their position) and graceful concession (acknowledging when their argument is strong). Both skills are worth modelling explicitly.",
      extension:
        "Prepare and deliver a five-minute formal presentation on a topic you care about. Record it (audio or video), watch it back, and write a self-evaluation: what did you do well? What would you change? What one specific aspect of delivery will you work on next time?",
      resources: [
        {
          title: "Presentations and Public Speaking — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/presentation_tips/index.html",
          description: "Practical guidance on structuring and delivering formal presentations.",
        },
        {
          title: "Debate Skills — Khan Academy",
          url: "https://www.khanacademy.org/humanities/grammar/parts-of-speech-the-verb/verb-tense/v/argument-and-debate",
          description: "Introduction to argument structure, evidence, and formal debate conventions.",
        },
        {
          title: "How to Disagree Well — The School of Life",
          url: "https://www.youtube.com/watch?v=YH_VRpUvpkQ",
          description: "Video on the art of productive disagreement and intellectual good faith.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Planning Your Presentation",
        instruction:
          "Use the four-element structure to plan a three-minute formal presentation on a topic of your choice. Do not write a script — write brief planning notes only.",
        parentTip:
          "Encourage your student to choose a topic they actually care about. Genuine conviction is the single most effective element of any presentation — it cannot be faked, and when it is present, it carries everything else.",
        prompts: [
          {
            text: "Opening: How will you begin? Write your opening sentence or question (make it compelling, not just 'Today I will talk about...'):",
            type: "lines",
            lines: 3,
          },
          {
            text: "Main point 1 and evidence:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Main point 2 and evidence:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Main point 3 (optional) and evidence:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Closing: How will you end with impact? Write your closing sentence:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Rebuttal Practice",
        instruction:
          "The ability to rebut an opposing argument clearly and fairly is central to both debate and analytical thinking. Practice this skill below.",
        parentTip:
          "Rebuttal is not dismissal — it is engagement. The best rebuttals acknowledge the strength of the opposing point before explaining why it does not override your argument.",
        prompts: [
          {
            text: "State an opposing argument to your presentation topic (the strongest possible version of the case against your position):",
            type: "lines",
            lines: 3,
          },
          {
            text: "Write a rebuttal (2\u20134 sentences) that: acknowledges what is valid about the opposing argument, then explains why your position still holds:",
            type: "lines",
            lines: 5,
          },
        ],
      },
      {
        type: "open-response",
        title: "Delivery Self-Evaluation",
        instruction:
          "After delivering your presentation (to your parent/carer, another family member, or recorded for self-review), complete this honest self-evaluation.",
        parentTip:
          "Delivery self-evaluation is most useful when it is specific rather than general. 'I need to be more confident' is not actionable; 'I need to slow down my opening sentence' is.",
        prompts: [
          {
            text: "What went well in your delivery? Be specific (e.g. 'my opening question seemed to get my listener's attention'):",
            type: "lines",
            lines: 3,
          },
          {
            text: "What was the most significant challenge? (e.g. pace, eye contact, finding the right word, nerves):",
            type: "lines",
            lines: 3,
          },
          {
            text: "Write one specific, actionable goal for your next presentation. It should be concrete enough that you could measure whether you achieved it:",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Deliver your presentation to a larger audience if possible — another family member, a friend, or a home-school group.",
      "Prepare a structured debate on a topic of current relevance, with a family member taking the opposing side.",
    ],
  },

  {
    slug: "extended-analytical-response",
    title: "Extended Analytical Response Writing",
    strand: "Literacy",
    description:
      "Build the skills to write extended analytical responses — longer, more complex essays that sustain a nuanced argument across multiple paragraphs.",
    lesson: {
      title: "Extended Analytical Response Writing",
      objective:
        "Plan and draft an extended analytical response that sustains a clear, nuanced argument across multiple paragraphs with well-integrated evidence.",
      materials: [
        "A text you have studied in depth",
        "Previous worksheet notes on this text",
        "Pen and notebook",
        "Worksheet",
      ],
      intro: {
        title: "The Difference Between an Essay and an Extended Response",
        script:
          "By Year 9, you are moving beyond the basic five-paragraph essay into extended analytical writing — responses that are longer, more complex, and that sustain a nuanced argument over more ground. An extended response typically runs to 600\u2013900 words and involves four to six body paragraphs, each making a distinct but related argument. The challenge is cohesion: keeping the whole thing together, making sure every paragraph connects to your central thesis, and building an argument that develops and deepens rather than simply repeating the same point in different words. The introduction and conclusion become more important at this length, because the reader needs more help understanding where they are in the argument.",
        action:
          "Review your notes on the text you are studying. Identify five to six distinct observations or arguments you could make about how this text works. Write them down. Then ask: do these form a coherent, connected argument? Can you find a thesis that brings them together under one interpretive umbrella?",
      },
      mainActivity: {
        title: "Planning for Depth and Cohesion",
        script:
          "At this level, planning is not optional — it is where the essay is won or lost. Before you write a word of prose, you should have: a clear, specific, arguable thesis; four to six paragraph topics, each making a distinct point; specific evidence for each paragraph; a sense of the order of your paragraphs, which should feel logical — an argument that unfolds rather than a list that could be in any order. One powerful technique is to think of your essay as a journey: where does the reader start, and where do they end up? The conclusion should feel like an arrival at an insight that was not fully visible at the beginning. If your conclusion is just a summary of your introduction, the journey was circular rather than progressive.",
        action:
          "Create a detailed essay plan using the structure above. Write your thesis at the top. List your paragraph topics in order. For each, note the evidence you will use and the analytical point you will make. Then step back and ask: does this feel like a journey? Does the argument develop?",
      },
      wrapUp: {
        title: "Sustaining the Argument",
        script:
          "The most common problem in extended responses is drift: the essay starts with a clear thesis but gradually loses track of it, with later paragraphs making interesting observations that are only loosely connected to the central argument. Two techniques help prevent this. First: begin every body paragraph with a topic sentence that explicitly connects to your thesis. Second: end every body paragraph with a link sentence that ties back to the central argument. These bookends keep each paragraph anchored. Additionally, use sophisticated connective phrases to show how your paragraphs relate to each other: 'Building on this...' 'While [previous point], it is also significant that...' 'This connects to the broader argument that...'",
        action:
          "Draft the first two body paragraphs of your extended response. After writing each one, check: does the topic sentence connect to the thesis? Does the link sentence connect back to the central argument? Is there enough analytical depth in the explanation section?",
      },
      parentTip:
        "Extended writing is tiring and requires sustained concentration. If your teenager drafts in sessions rather than one sitting, help them re-read what they have written before starting each new session — this re-immersion in the existing argument helps maintain cohesion. You might find it genuinely interesting to read their draft too, and to say what you understood their argument to be — if your summary matches theirs, the essay is communicating clearly.",
      extension:
        "Complete a full extended analytical response (600\u2013900 words) on the text you have studied. After completing your draft, conduct a paragraph-by-paragraph review: does each paragraph have a topic sentence connected to the thesis? Is the evidence specific? Is the analysis section longer than the evidence? Does the link sentence anchor the paragraph back to the central argument?",
      resources: [
        {
          title: "Extended Essay Writing — Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
          description: "Guidance on planning and sustaining extended argumentative essays.",
        },
        {
          title: "Argument and Analysis — Khan Academy",
          url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3b5ce:reading-and-writing/x0a8c2e5f3af3b5ce:expression-of-ideas/a/transitions-and-logical-sequence-lesson",
          description: "Exercises on logical sequencing, transitions, and argument development.",
        },
        {
          title: "Writing Well — The School of Life",
          url: "https://www.youtube.com/watch?v=xECUrCp7qZk",
          description: "Thoughtful video on what makes writing genuinely clear and effective.",
        },
      ],
    },
    activities: [
      {
        type: "open-response",
        title: "Extended Essay Planning",
        instruction:
          "Create a detailed plan for an extended analytical response to an essay question about the text you are studying. Your plan should be detailed enough that someone else could write a clear essay from it.",
        parentTip:
          "The quality of the plan determines the quality of the essay. A student who spends 20 minutes planning and 40 minutes writing will almost always produce a stronger essay than one who spends 5 minutes planning and 55 minutes writing.",
        prompts: [
          {
            text: "Your essay question (write or select one that interests you):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Your thesis statement (specific, arguable, naming techniques and themes):",
            type: "lines",
            lines: 3,
          },
          {
            text: "Paragraph topics in order (list 4\u20136, each with a brief note on evidence and analytical point):",
            type: "lines",
            lines: 8,
          },
          {
            text: "What insight will your conclusion arrive at that was not fully visible in your introduction?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Drafting Two Body Paragraphs",
        instruction:
          "Using your plan, draft your first two body paragraphs. Each should follow the TEEL structure and begin and end with sentences that connect to your thesis.",
        parentTip:
          "After your student drafts each paragraph, ask them: what is the central analytical claim of this paragraph? If they cannot answer in one sentence, the paragraph may be trying to do too much.",
        prompts: [
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          {
            text: "Self-review: Does each paragraph's topic sentence connect to your thesis? Is the analysis section longer than the evidence quote? Does the link sentence anchor back to your central argument?",
            type: "lines",
            lines: 5,
          },
        ],
      },
      {
        type: "open-response",
        title: "Introduction and Conclusion",
        instruction:
          "Write the introduction and conclusion for your extended response. The introduction should open broadly and funnel to your thesis. The conclusion should synthesise your argument and arrive at an insight rather than simply repeating your introduction.",
        parentTip:
          "A useful test for the conclusion: if you removed all the body paragraphs and read only the introduction and conclusion, does the conclusion feel like it has arrived somewhere? If it says exactly the same thing as the introduction, it needs to be rethought.",
        prompts: [
          { text: "Introduction (4\u20136 sentences, ending with your thesis):", type: "box" },
          {
            text: "Conclusion (4\u20136 sentences, synthesising your argument and arriving at an insight):",
            type: "box",
          },
          {
            text: "Is your conclusion more than a summary of your introduction? What insight has the essay arrived at that was not available at the start?",
            type: "lines",
            lines: 3,
          },
        ],
      },
    ],
    nextSteps: [
      "Complete the full draft of your extended analytical response and submit it for feedback.",
      "Revisit the Critical Literacy worksheet to apply representation analysis in your extended response.",
    ],
  },
];

export function getYear9EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year9EnglishWorksheets.find((ws) => ws.slug === slug);
}
