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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "true-false",
        title: "Critical Literacy: True or False?",
        instruction: "Decide whether each statement about critical literacy is true or false.",
        parentTip: "Use these statements to open a discussion about what critical literacy actually means before moving deeper into the worksheet.",
        statements: [
          { text: "Critical literacy means reading every text as if it is lying to you.", answer: false },
          { text: "Every text is written from a particular social and cultural position.", answer: true },
          { text: "Noticing bias in a text means you must reject the text entirely.", answer: false },
          { text: "Critical literacy asks: whose perspective is centred and whose is marginalised?", answer: true },
          { text: "All writers are deliberately biased.", answer: false },
          { text: "Texts can reflect power structures without the author intending it.", answer: true },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Key Terms: Critical Literacy",
        instruction: "Match each critical literacy term with its correct definition.",
        parentTip: "Encourage your student to write each term in their own words after matching — paraphrasing definitions deepens understanding.",
        left: ["Representation", "Marginalisation", "Ideology", "Discourse", "Hegemony"],
        right: [
          "The dominance of one group's values presented as natural or universal",
          "How texts portray people, groups, or ideas",
          "A system of ideas and beliefs that shapes how we see the world",
          "The ways language and texts construct particular versions of reality",
          "The process of pushing certain voices or perspectives to the edges",
        ],
      },
      // 3
      {
        type: "multiple-choice",
        title: "What Does Representation Mean?",
        instruction: "Choose the best answer for each question about representation in texts.",
        parentTip: "For any question where your student is unsure, ask them to explain their reasoning — the thinking process matters as much as the answer.",
        questions: [
          {
            prompt: "When a text 'represents' a group, this means:",
            options: ["It speaks on behalf of the group in a legal sense", "It constructs a version of that group through language and image", "It accurately reports facts about the group", "It treats the group as unimportant"],
            answer: "It constructs a version of that group through language and image",
          },
          {
            prompt: "Which of the following is the best example of a stereotype in a text?",
            options: ["A complex villain with understandable motivations", "A working-class character who is lazy and uneducated", "A character who changes and grows through the narrative", "A minority character who is the story's narrator"],
            answer: "A working-class character who is lazy and uneducated",
          },
          {
            prompt: "A text's 'implied reader' is:",
            options: ["The person who read it most recently", "The audience the text seems to assume and address", "The author writing under a pseudonym", "The critic who reviewed it first"],
            answer: "The audience the text seems to assume and address",
          },
        ],
      },
      // 4
      {
        type: "sorting",
        title: "Centred or Marginalised?",
        instruction: "Sort these narrative features into the correct column: which tend to centre a perspective, and which tend to marginalise it?",
        columns: ["Tends to CENTRE a perspective", "Tends to MARGINALISE a perspective"],
        items: [
          { label: "Character is the narrator" },
          { label: "Character has no dialogue" },
          { label: "Character's inner thoughts are shared" },
          { label: "Character exists only to help the protagonist" },
          { label: "Character is given a backstory and motivation" },
          { label: "Character is described only through others' eyes" },
          { label: "Character drives the plot forward" },
          { label: "Character appears briefly and is not named" },
        ],
      },
      // 5
      {
        type: "fill-in-blank",
        title: "Critical Literacy Vocabulary",
        instruction: "Complete each sentence using the correct critical literacy term from the box: [ideology, representation, discourse, marginalised, hegemony, stereotypes].",
        parentTip: "These terms will appear in formal essay questions throughout Year 9 and beyond — building confidence with them now is valuable.",
        sentences: [
          { text: "When a group's voices and perspectives are pushed to the edges of a text, they are said to be ___.", blanks: ["marginalised"] },
          { text: "The way a text portrays a particular social group is called its ___ of that group.", blanks: ["representation"] },
          { text: "___ are fixed, oversimplified images of a particular group.", blanks: ["Stereotypes"] },
          { text: "An ___ is a set of beliefs and values that shapes how people see the world.", blanks: ["ideology"] },
          { text: "The dominance of one group's values presented as natural or normal is called ___.", blanks: ["hegemony"] },
          { text: "The ways texts and language construct versions of reality are sometimes called ___.", blanks: ["discourse"] },
        ],
      },
      // 6
      {
        type: "open-response",
        title: "Unpacking Representation",
        instruction: "Think about a character from a text you have studied who belongs to a social group (defined by gender, race, class, age, or another marker). Answer the questions below.",
        parentTip: "If your student chooses a character they feel has been represented fairly, that is equally valid — analysing positive representation is just as revealing as analysing problematic representation.",
        prompts: [
          { text: "Who is the character and what social group do they belong to? What text are they from?", type: "lines", lines: 2 },
          { text: "How is this character represented? Are they given complexity and depth, or do they fulfil a social 'type'? Give specific evidence.", type: "lines", lines: 5 },
          { text: "Whose perspective does the narrative adopt when presenting this character?", type: "lines", lines: 3 },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "Whose Perspective Is Centred?",
        instruction: "For each scenario, circle which perspective is being centred by the narrative.",
        questions: [
          { prompt: "A novel about colonisation written entirely in the voice of the settler narrator.", options: ["Settler perspective", "Indigenous perspective", "Equal perspectives"] },
          { prompt: "A film about a working-class family told through the eyes of a wealthy charity worker.", options: ["Working-class perspective", "Wealthy character's perspective", "Both equally"] },
          { prompt: "A news article about a protest that quotes only police spokespeople.", options: ["Protesters' perspective", "Police perspective", "Neither"] },
          { prompt: "A memoir by a refugee describing their own journey in their own words.", options: ["Refugee's perspective", "Host country's perspective", "Both equally"] },
        ],
      },
      // 8
      {
        type: "open-response",
        title: "Reading for What Is Normal",
        instruction: "Critical literacy asks: what does a text treat as 'normal' or 'natural', and what does it treat as strange, threatening, or other? Examine a text you are studying.",
        parentTip: "The concept of 'normalisation' is central to critical literacy — what is presented as the default or universal is always worth questioning.",
        prompts: [
          { text: "What kind of family, lifestyle, or way of living does your text seem to assume as the 'norm'?", type: "lines", lines: 3 },
          { text: "Is there anything in the text treated as exotic, strange, or threatening that might not be those things to everyone? What is it, and whose perspective makes it seem that way?", type: "lines", lines: 4 },
          { text: "What does this tell you about the implied reader the text was written for?", type: "lines", lines: 3 },
        ],
      },
      // 9
      {
        type: "multiple-choice",
        title: "Stereotypes in Texts",
        instruction: "Read each description and decide what type of representational issue it illustrates.",
        questions: [
          {
            prompt: "A female character in a thriller exists only to motivate the male protagonist's revenge.",
            options: ["Positive representation", "The 'fridging' trope — women as plot devices", "Feminist representation", "Complex characterisation"],
            answer: "The 'fridging' trope — women as plot devices",
          },
          {
            prompt: "Every elderly character in a film is confused and slow.",
            options: ["Accurate representation of ageing", "Ageist stereotype", "Complex representation", "Counter-stereotype"],
            answer: "Ageist stereotype",
          },
          {
            prompt: "A film set in Africa shows only poverty, animals, and Western aid workers.",
            options: ["Balanced representation", "Accurate documentary", "A 'single story' — reducing a continent to one narrative", "Positive representation"],
            answer: "A 'single story' — reducing a continent to one narrative",
          },
        ],
      },
      // 10
      {
        type: "open-response",
        title: "The 'Single Story' Problem",
        instruction: "The writer Chimamanda Ngozi Adichie gave a famous talk about the danger of the 'single story' — when a group is represented through only one narrow narrative. Apply this idea to a text you know.",
        parentTip: "If time permits, watch Adichie's TED talk 'The Danger of a Single Story' together — it is 19 minutes and one of the most powerful introductions to critical literacy available.",
        prompts: [
          { text: "Identify a group that is represented through a 'single story' in a text you know. What is that story?", type: "lines", lines: 3 },
          { text: "What other stories about this group are possible but absent?", type: "lines", lines: 3 },
          { text: "What are the consequences of this single story — for the group being represented, and for readers?", type: "lines", lines: 4 },
        ],
      },
      // 11
      {
        type: "true-false",
        title: "Power and Narrative",
        instruction: "Decide whether each statement about power in texts is true or false.",
        statements: [
          { text: "The perspective of the narrator is always the most reliable perspective in a text.", answer: false },
          { text: "Who controls the narrative often reflects who has power in the broader society.", answer: true },
          { text: "Texts can challenge as well as reinforce existing power structures.", answer: true },
          { text: "An author's social position has no effect on what they write about or how.", answer: false },
          { text: "Silence in a text — what is left out — can be as significant as what is included.", answer: true },
        ],
      },
      // 12
      {
        type: "fill-in-blank",
        title: "Language and Power",
        instruction: "Complete each sentence about the relationship between language and power.",
        parentTip: "The language used to describe a group shapes how readers think about that group — this is one of the most important insights of critical literacy.",
        sentences: [
          { text: "The words an author uses to describe a character can either give them ___ or take it away.", blanks: ["dignity"] },
          { text: "When a text uses language that others a group, it creates a sense of ___ and ___ between the reader and that group.", blanks: ["distance", "difference"] },
          { text: "Using passive voice (e.g. 'mistakes were made') can ___ who is responsible for an action.", blanks: ["obscure"] },
          { text: "The label attached to a group (e.g. 'refugee' vs 'asylum seeker' vs 'illegal immigrant') reflects a political ___ about that group.", blanks: ["position"] },
        ],
      },
      // 13
      {
        type: "open-response",
        title: "Absence and Silence in Texts",
        instruction: "Critical literacy pays attention not just to what is in a text but to what is absent. Consider a text you have studied recently.",
        parentTip: "The concept of 'absent voices' is one of the most intellectually powerful tools in Year 9 English — it asks students to imagine beyond what is on the page.",
        prompts: [
          { text: "Whose voice or perspective is largely absent from this text? Why might this be?", type: "lines", lines: 4 },
          { text: "How might the text look different if that absent perspective were centred?", type: "lines", lines: 4 },
          { text: "Does the absence affect how you read or feel about the text?", type: "lines", lines: 3 },
        ],
      },
      // 14
      {
        type: "home-activity",
        title: "Critical Literacy in Everyday Media",
        instruction: "This week, apply critical literacy thinking to the media you encounter every day.",
        suggestions: [
          "Watch an advertisement and ask: whose lifestyle is being presented as desirable? Whose is not shown at all?",
          "Read a news article about a social issue and identify whose perspective is quoted, and whose is absent.",
          "Look at three film posters and notice whose faces are prominent, whose are not, and what that tells you about who the film is 'for'.",
          "Find two images of the same place or community from different sources and compare how they represent that place.",
        ],
      },
      // 15
      {
        type: "tip",
        title: "Tip: The Key Questions of Critical Literacy",
        content: "When approaching any text critically, return to these four questions: (1) Who is represented, and how? (2) Whose perspective is centred, and whose is marginalised? (3) What is treated as 'normal', and what as 'other'? (4) What is absent — whose experience is simply not there? These questions do not have single correct answers; they open up analysis.",
      },
      // 16
      {
        type: "open-response",
        title: "Analysing Language Used to Describe a Group",
        instruction: "Choose a passage from a text in which a particular social group is described. Examine the specific language choices.",
        parentTip: "Focusing on individual word choices rather than general impressions develops the precision needed for strong analytical writing at Year 9 level.",
        prompts: [
          { text: "Copy out the passage (or a key section of it) and underline all words and phrases used to describe the group.", type: "box" },
          { text: "What connotations do these words carry? Are they positive, negative, neutral, or ambiguous?", type: "lines", lines: 4 },
          { text: "What impression of the group does this language construct for a reader who has no other source of knowledge about them?", type: "lines", lines: 4 },
        ],
      },
      // 17
      {
        type: "multiple-choice",
        title: "Context and Representation",
        instruction: "Choose the best answer for each question about how context shapes representation.",
        questions: [
          {
            prompt: "Why is the historical context of a text important for understanding its representations?",
            options: [
              "It has no relevance — all texts can be read without context",
              "It shows which representations were considered acceptable at the time the text was produced",
              "It tells us the exact intentions of the author",
              "It proves whether the representation is accurate",
            ],
            answer: "It shows which representations were considered acceptable at the time the text was produced",
          },
          {
            prompt: "A text produced in a particular cultural context will tend to:",
            options: [
              "Present all perspectives equally",
              "Reflect the values and assumptions of that culture, even unintentionally",
              "Always challenge the dominant ideology",
              "Be equally accessible to all readers regardless of background",
            ],
            answer: "Reflect the values and assumptions of that culture, even unintentionally",
          },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Counter-Narratives",
        instruction: "A counter-narrative is a text that challenges or subverts dominant representations — it tells a story that pushes back against the mainstream version.",
        parentTip: "Examples of counter-narratives include Alexis Wright's Carpentaria, Angie Thomas's The Hate U Give, or any text that gives a full, complex voice to groups usually marginalised in mainstream texts.",
        prompts: [
          { text: "Can you think of a text (book, film, song, article) that acts as a counter-narrative — one that challenges a stereotype or gives voice to a marginalised perspective? Describe it.", type: "lines", lines: 4 },
          { text: "What dominant representation is it pushing back against?", type: "lines", lines: 3 },
          { text: "How effective is it as a counter-narrative? What does it achieve, and what are its limitations?", type: "lines", lines: 4 },
        ],
      },
      // 19
      {
        type: "sorting",
        title: "Technique or Effect?",
        instruction: "Sort these into the correct column: is each item a TECHNIQUE (what the author does) or an EFFECT (the impact on the reader)?",
        parentTip: "The distinction between technique and effect is fundamental to analytical writing — students who confuse the two tend to describe rather than analyse.",
        columns: ["TECHNIQUE (what the author does)", "EFFECT (impact on reader)"],
        items: [
          { label: "Using a third-person limited narrator" },
          { label: "Feeling sympathy for the protagonist" },
          { label: "Describing a character only through physical appearance" },
          { label: "Seeing a group as threatening or alien" },
          { label: "Giving a character no dialogue" },
          { label: "Feeling excluded or unseen as a reader" },
          { label: "Using passive voice to obscure agency" },
          { label: "Believing a stereotype is natural or obvious" },
        ],
      },
      // 20
      {
        type: "spark",
        title: "Spark: Who Tells the Story Matters",
        content: "The Nigerian novelist Chinua Achebe argued that the African continent had been represented through European eyes for centuries of fiction, producing distorted images that served colonial interests. He wrote Things Fall Apart partly as a response — a novel told entirely from an African perspective. Think about this: when you write, whose perspective do you naturally take? Whose stories do you tell? Writing is always a choice about where to stand.",
      },

      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "TEEL Paragraph: Representation Analysis",
        instruction: "Write one TEEL paragraph analysing how a specific social group is represented in a text you are studying. Your Topic sentence must name a technique; your Evidence must be a specific quote; your Explanation must connect to cultural context; your Link must tie back to your argument.",
        parentTip: "This paragraph is asking for sophisticated thinking: not just 'the author does X' but 'the author does X, which reflects Y about the world in which this text was made.'",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
          { text: "Check: Does your Explanation connect the technique to a cultural or historical context? If not, add that connection now.", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "fill-in-blank",
        title: "Analytical Sentence Frames",
        instruction: "Complete these analytical sentence starters to practise the language of critical analysis.",
        parentTip: "Using precise analytical language is a skill that develops through repeated practice — these frames scaffold the vocabulary needed for formal essays.",
        sentences: [
          { text: "The author's choice to represent [group] as ___ reflects the cultural assumption that ___.", blanks: ["...", "..."] },
          { text: "By positioning the reader to view [character] from ___, the text constructs them as ___.", blanks: ["...", "..."] },
          { text: "The absence of ___ in this text reinforces the ideology that ___.", blanks: ["...", "..."] },
          { text: "This representation can be contextualised by the fact that, at the time of writing, ___.", blanks: ["..."] },
        ],
      },
      // 23
      {
        type: "open-response",
        title: "Comparing Two Representations",
        instruction: "Find two texts that represent the same social group in different ways — they could be from different time periods, genres, or cultural contexts.",
        parentTip: "Comparative analysis is a higher-order skill. Encourage your student to move beyond 'Text A does this, Text B does that' toward explaining what the difference tells us about the contexts.",
        prompts: [
          { text: "Describe how Text A represents the group. What techniques does it use?", type: "lines", lines: 4 },
          { text: "Describe how Text B represents the same group. What is different?", type: "lines", lines: 4 },
          { text: "What does the difference between these representations reveal about the different contexts in which they were produced?", type: "lines", lines: 4 },
        ],
      },
      // 24
      {
        type: "multiple-choice",
        title: "Ideology and Naturalisation",
        instruction: "Choose the most accurate response to each question about ideology in texts.",
        questions: [
          {
            prompt: "When an ideology is 'naturalised' in a text, it means:",
            options: [
              "It is described using nature imagery",
              "It is presented as obvious, normal, or common sense rather than as a constructed viewpoint",
              "It has been approved by natural law",
              "The text is set in a natural environment",
            ],
            answer: "It is presented as obvious, normal, or common sense rather than as a constructed viewpoint",
          },
          {
            prompt: "Which of the following is an example of ideology being naturalised in a text?",
            options: [
              "A novel explicitly arguing for capitalism",
              "A novel in which wealthy characters are naturally wise and poor characters naturally criminal, without the text questioning this",
              "A text written to advocate for a political party",
              "A text that presents multiple conflicting ideologies",
            ],
            answer: "A novel in which wealthy characters are naturally wise and poor characters naturally criminal, without the text questioning this",
          },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Reading Against the Grain",
        instruction: "'Reading against the grain' means reading a text in a way that resists its dominant perspective — looking for contradictions, gaps, or moments where the text's ideology shows its seams.",
        parentTip: "This is one of the most sophisticated and enjoyable critical reading strategies — it treats the text not as a fixed object but as something to push back against.",
        prompts: [
          { text: "Choose a text you are studying and identify one moment where the text seems to contradict itself, or where a marginalised character seems more sympathetic or interesting than the text intends.", type: "lines", lines: 4 },
          { text: "What does this moment reveal about the text's ideology or the limits of its perspective?", type: "lines", lines: 4 },
          { text: "How might a reader from a different cultural background read this moment differently?", type: "lines", lines: 3 },
        ],
      },
      // 26
      {
        type: "true-false",
        title: "Representation and Reality",
        instruction: "Decide whether each statement about the relationship between representation and reality is true or false.",
        parentTip: "The relationship between representations and real-world attitudes is a genuinely complex question — use any disagreements here as a starting point for discussion.",
        statements: [
          { text: "Repeated stereotypical representations of a group can shape how readers think about that group in real life.", answer: true },
          { text: "Fiction has no effect on real-world attitudes because readers know it is not real.", answer: false },
          { text: "Representation in media can affect how members of a represented group see themselves.", answer: true },
          { text: "A single text with a negative representation of a group is harmless in isolation.", answer: false },
          { text: "Counter-narratives can help to challenge and shift dominant cultural representations.", answer: true },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "The Author's Position",
        instruction: "Every author writes from a particular social position — shaped by their gender, race, class, nationality, religion, and historical moment. These positions influence what they see, what they value, and what they represent.",
        parentTip: "This is not about blaming authors — it is about understanding that no writer is a neutral observer. That is true of all writers, including your student.",
        prompts: [
          { text: "What do you know about the social position of the author of the text you are studying? (Where are they from? When did they write? What community do they belong to?)", type: "lines", lines: 3 },
          { text: "How might their social position have shaped what they chose to write about and how?", type: "lines", lines: 4 },
          { text: "Does knowing this context change how you read the text? How?", type: "lines", lines: 3 },
        ],
      },
      // 28
      {
        type: "matching",
        title: "Critical Reading Strategies",
        instruction: "Match each critical reading strategy with what it means in practice.",
        left: ["Reading with the grain", "Reading against the grain", "Reading for absence", "Contextual reading", "Positional reading"],
        right: [
          "Asking: whose experience is not represented here, and why?",
          "Accepting the dominant perspective of the text as the intended reading",
          "Understanding the text in relation to its historical and cultural moment",
          "Resisting the text's dominant perspective and looking for contradictions",
          "Considering how your own background shapes your response to the text",
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Your Own Position as a Reader",
        instruction: "Critical literacy also means reflecting on your own position as a reader — the background, experiences, and values you bring to a text.",
        parentTip: "This reflective dimension of critical literacy is important — it builds intellectual humility and helps students understand why different readers can have very different responses to the same text.",
        prompts: [
          { text: "What background, values, or experiences do you bring to reading the text you are studying? How might these shape what you notice and how you respond?", type: "lines", lines: 4 },
          { text: "Is there any aspect of the text that you might read differently from someone with a different background? What might they notice that you do not?", type: "lines", lines: 4 },
        ],
      },
      // 30
      {
        type: "tip",
        title: "Tip: Moving from Description to Analysis",
        content: "Many students describe what a text does ('the author makes the character seem weak') without analysing why or with what effect. The jump from description to analysis is made by asking: So what? Why does this matter? What does this reveal about the text's ideology or cultural context? Every analytical sentence should have an implicit 'so what' at its heart.",
      },
      // 31
      {
        type: "open-response",
        title: "Intersectionality in Texts",
        instruction: "Intersectionality refers to the way multiple aspects of a person's identity (race, gender, class, disability, sexuality, etc.) overlap and interact. In texts, characters' experiences are often shaped by multiple, intersecting social positions.",
        parentTip: "Intersectional analysis is sophisticated Year 9–10 thinking. Affirm any attempt to notice that a character's experience is shaped by more than one identity dimension simultaneously.",
        prompts: [
          { text: "Choose a character from a text you are studying whose experience seems shaped by more than one aspect of their identity. Describe the character and their intersecting identities.", type: "lines", lines: 4 },
          { text: "How does the combination of these identities shape their experience in the text? Would their story be different if only one identity dimension changed?", type: "lines", lines: 4 },
          { text: "Does the text acknowledge this complexity, or does it reduce the character to a single identity?", type: "lines", lines: 3 },
        ],
      },
      // 32
      {
        type: "fill-in-blank",
        title: "Connective Language for Critical Writing",
        instruction: "Complete each sentence with an appropriate connective phrase for analytical writing.",
        sentences: [
          { text: "The text represents [group] as threatening; ___, this reflects wider cultural anxieties about ___.", blanks: ["however", "..."] },
          { text: "While the protagonist is given complex motivations, ___ characters from [group] are represented ___.", blanks: ["supporting", "..."] },
          { text: "This representation can be understood in the context of ___, which shaped attitudes toward ___ at the time.", blanks: ["...", "..."] },
          { text: "___ the text challenges the dominant narrative, it ultimately ___ by ___.", blanks: ["Although", "...", "..."] },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Applying Critical Literacy to an Advertisement",
        instruction: "Choose a current or recent advertisement (television, print, or online). Apply critical literacy questions to it.",
        parentTip: "Advertisements are excellent for critical literacy because their purpose — to sell — means every choice is deliberate. This makes the ideology highly visible once you know what to look for.",
        prompts: [
          { text: "Describe the advertisement: what is being sold, who appears in it, and what lifestyle or values does it associate with the product?", type: "lines", lines: 4 },
          { text: "Whose lifestyle is being presented as desirable? Who is absent from the advertisement's vision of the good life?", type: "lines", lines: 3 },
          { text: "What ideology does this advertisement reflect? What does it assume about its audience?", type: "lines", lines: 4 },
        ],
      },
      // 34
      {
        type: "multiple-choice",
        title: "Types of Representation",
        instruction: "Identify the type of representation being described in each example.",
        questions: [
          {
            prompt: "A text in which a gay character is killed at the end — a recurring pattern in many films and TV shows.",
            options: ["Counter-narrative", "The 'Bury Your Gays' trope", "Positive representation", "Intersectional representation"],
            answer: "The 'Bury Your Gays' trope",
          },
          {
            prompt: "A film that has a diverse cast but all the non-white characters serve supporting roles to the white protagonist.",
            options: ["Tokenism", "Authentic representation", "Counter-narrative", "Complex representation"],
            answer: "Tokenism",
          },
          {
            prompt: "A novel narrated entirely in the first person by a character from a community rarely heard in mainstream fiction.",
            options: ["Marginalisation", "Tokenism", "Own-voices narrative", "Negative stereotype"],
            answer: "Own-voices narrative",
          },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Representation and Its Consequences",
        instruction: "The activist and writer Audre Lorde said: 'It is not our differences that divide us. It is our inability to recognise, accept, and celebrate those differences.' Apply this idea to representation in texts.",
        parentTip: "This kind of question bridges the literary and the ethical — it asks students to think about why representation matters beyond the classroom.",
        prompts: [
          { text: "What are the real-world consequences of persistent negative representation of a group in popular texts?", type: "lines", lines: 4 },
          { text: "What are the real-world consequences for members of that group — especially young people — of seeing their community represented poorly or not at all?", type: "lines", lines: 4 },
          { text: "What responsibility, if any, do authors, publishers, and filmmakers have in this area?", type: "lines", lines: 4 },
        ],
      },
      // 36
      {
        type: "home-activity",
        title: "Representation Audit",
        instruction: "Conduct a representation audit of your own reading and viewing over the past month.",
        parentTip: "Doing this audit together — comparing what you have each read and watched — can be illuminating and often surprising.",
        suggestions: [
          "List 5–10 texts (books, films, TV shows) you have consumed recently. For each, note the main character's gender, race, class, and age.",
          "Identify any patterns: are certain kinds of people consistently at the centre of the stories you encounter?",
          "Ask: whose stories am I mostly consuming? Whose am I not? What might I be missing?",
          "Choose one text from a perspective very different from your own to read or watch this month.",
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Writing With and Against Representation",
        instruction: "Write a short piece of creative writing (one to two paragraphs) featuring a character from a group that is often stereotyped or marginalised in texts. Your goal is to represent this character with full complexity and dignity.",
        parentTip: "This activity connects critical literacy directly to creative practice — the most powerful way to counter a bad representation is to write a better one.",
        prompts: [
          { text: "Your short creative writing piece:", type: "box" },
          { text: "What specific choices did you make to give this character complexity? (e.g. giving them interiority, specific details, their own agency)", type: "lines", lines: 4 },
        ],
      },
      // 38
      {
        type: "true-false",
        title: "Critical Literacy Misconceptions",
        instruction: "Decide whether each common misconception about critical literacy is true or false.",
        statements: [
          { text: "Critical literacy means finding something wrong with every text.", answer: false },
          { text: "You cannot critically analyse a text you love.", answer: false },
          { text: "Critical literacy is only relevant to political texts.", answer: false },
          { text: "Reading critically and reading for pleasure are mutually exclusive.", answer: false },
          { text: "Critical literacy is a skill that applies to all texts, not just 'literary' ones.", answer: true },
          { text: "Noticing that a text has a problematic representation means the text has no value.", answer: false },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Critical Response: A Text You Love",
        instruction: "Choose a text you genuinely love — a book, film, game, or song. Now apply critical literacy to it. This is not about ruining your enjoyment; it is about deepening your understanding.",
        parentTip: "Modelling this yourself — applying critical thinking to something you love while still loving it — is one of the most valuable things you can do here. Critical literacy and pleasure are not in opposition.",
        prompts: [
          { text: "What is the text, and why do you love it?", type: "lines", lines: 3 },
          { text: "Whose perspective is centred, and whose is marginalised in this text?", type: "lines", lines: 3 },
          { text: "Is there anything in the text's representation that, on reflection, you find uncomfortable or questionable? Does noticing this change your relationship to the text?", type: "lines", lines: 5 },
        ],
      },
      // 40
      {
        type: "spark",
        title: "Spark: Reading as an Act of Power",
        content: "The critical theorist Paulo Freire argued that reading — genuinely critical reading — is an act of power. When you read uncritically, the text's assumptions enter your mind unexamined. When you read critically, you become the one with power over the text, rather than the other way around. Critical literacy is not just a school skill — it is a lifelong tool for navigating a world full of texts designed to shape how you think.",
      },

      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Extended Analysis: Representation and Power",
        instruction: "Write a two-paragraph analytical response examining how power is represented in a text you are studying. Paragraph 1 should analyse how power is given to certain characters through textual choices. Paragraph 2 should examine how other characters are disempowered.",
        parentTip: "Two-paragraph responses help students practise sustaining an argument beyond a single paragraph — a critical skill for Year 9 extended responses.",
        prompts: [
          { text: "Paragraph 1 (how power is constructed for certain characters):", type: "box" },
          { text: "Paragraph 2 (how disempowerment is constructed for other characters):", type: "box" },
        ],
      },
      // 42
      {
        type: "matching",
        title: "Discourse Analysis Terms",
        instruction: "Match each discourse analysis term with its correct meaning.",
        parentTip: "Discourse analysis is the study of how language use reflects and constructs social reality — these terms are part of the advanced vocabulary of critical literacy.",
        left: ["Lexical choice", "Nominalisation", "Passive construction", "Foregrounding", "Intertextuality"],
        right: [
          "When one text references or alludes to another, creating a web of meaning",
          "The selection of specific words, which reflects ideological positions",
          "Turning verbs or actions into nouns, which can obscure agency",
          "Using passive voice to hide who is responsible for an action",
          "Placing a particular element in an emphasised or prominent position",
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Discourse Analysis of a News Article",
        instruction: "Choose a news article about a social issue (immigration, crime, climate, health, etc.) and conduct a basic discourse analysis.",
        parentTip: "News media is an excellent site for discourse analysis — the language choices are often subtle but consequential in how they frame groups and events.",
        prompts: [
          { text: "Identify and quote three specific language choices (individual words or phrases) that reflect an ideological position about the subject.", type: "lines", lines: 5 },
          { text: "Whose perspective does the article centre? Whose is marginalised or absent?", type: "lines", lines: 3 },
          { text: "What ideology does the article seem to reflect? What assumptions does it make about its readers?", type: "lines", lines: 4 },
        ],
      },
      // 44
      {
        type: "fill-in-blank",
        title: "Analytical Vocabulary: Higher Level",
        instruction: "Complete each analytical sentence using the word bank: [perpetuates, subverts, reinforces, problematises, interrogates, naturalises].",
        sentences: [
          { text: "By giving the only Indigenous character no dialogue, the text ___ the marginalisation of Aboriginal voices in mainstream narratives.", blanks: ["perpetuates"] },
          { text: "The ending of the novel ___ the dominant ideology by refusing to provide a comfortable resolution.", blanks: ["subverts"] },
          { text: "The film ___ the audience's assumptions about gender by revealing that the 'hero' has been a woman all along.", blanks: ["interrogates"] },
          { text: "Through repeated association of wealth with virtue, the text ___ the ideology that economic success reflects moral worth.", blanks: ["naturalises"] },
          { text: "The author ___ the stereotype of the passive female by giving her the most agency in the narrative.", blanks: ["subverts"] },
        ],
      },
      // 45
      {
        type: "tip",
        title: "Tip: Integrating Quotations",
        content: "In analytical writing about representation, quotations must be integrated smoothly into your argument — never dropped in without context. The formula is: introduce the quotation with your analytical point, embed the quote, then explain what it shows. Avoid beginning a sentence with a quotation. Instead: 'The author characterises the group as threatening through the phrase [quote], which positions the reader to...'",
      },
      // 46
      {
        type: "open-response",
        title: "Applying Feminist Critical Theory",
        instruction: "Feminist critical theory examines how texts reflect, reinforce, or challenge gender inequality. Apply it to a text you are studying.",
        parentTip: "Feminist criticism does not mean finding texts that are anti-women; it means examining how gender operates as a system of power within texts. It applies equally to how masculinity is constructed.",
        prompts: [
          { text: "How are female characters constructed in this text? Do they have agency, interiority, and complexity?", type: "lines", lines: 4 },
          { text: "How is masculinity constructed? What traits are valorised in male characters?", type: "lines", lines: 4 },
          { text: "Does the text challenge or reinforce traditional gender roles? Where is the evidence for your answer?", type: "lines", lines: 4 },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Applying Postcolonial Critical Theory",
        instruction: "Postcolonial theory examines how texts reflect the legacies of colonialism — including how colonised peoples are represented and whose knowledge is valued.",
        parentTip: "Postcolonial criticism is especially relevant for Australian students given Australia's own colonial history and the rich tradition of Aboriginal and Torres Strait Islander literature that responds to it.",
        prompts: [
          { text: "Does the text you are studying reflect a colonial perspective in any way? (This might include: how Indigenous peoples are represented, whose knowledge is treated as authoritative, whose land is treated as 'empty' or available.)", type: "lines", lines: 5 },
          { text: "Does the text challenge or reproduce colonial assumptions? Provide textual evidence.", type: "lines", lines: 4 },
        ],
      },
      // 48
      {
        type: "multiple-choice",
        title: "Critical Theory Frameworks",
        instruction: "Match each example of textual analysis with the critical framework it uses.",
        questions: [
          {
            prompt: "An analysis that focuses on how economic class shapes characters' opportunities and how the text treats wealth and poverty.",
            options: ["Feminist theory", "Postcolonial theory", "Marxist/class-based theory", "Ecocriticism"],
            answer: "Marxist/class-based theory",
          },
          {
            prompt: "An analysis that examines how the natural environment is represented and what the text implies about humanity's relationship to the non-human world.",
            options: ["Ecocriticism", "Feminist theory", "Discourse analysis", "Postcolonial theory"],
            answer: "Ecocriticism",
          },
          {
            prompt: "An analysis of how a text by a European author represents Africa as a place of darkness and mystery that requires Western civilisation.",
            options: ["Feminist theory", "Marxist theory", "Postcolonial theory", "Queer theory"],
            answer: "Postcolonial theory",
          },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Choosing a Critical Framework",
        instruction: "Different critical frameworks illuminate different aspects of a text. For the text you are studying, reflect on which framework is most productive.",
        parentTip: "There is no single correct framework for any text — the choice of framework is itself an interpretive decision, and students who can explain why they chose their framework demonstrate sophisticated thinking.",
        prompts: [
          { text: "List two or three critical frameworks (e.g. feminist, postcolonial, Marxist, ecocritical, discourse analysis) that could be applied to your text.", type: "lines", lines: 2 },
          { text: "Which framework do you think would be most productive for this particular text, and why?", type: "lines", lines: 4 },
          { text: "What aspects of the text does your chosen framework illuminate that other frameworks might miss?", type: "lines", lines: 3 },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Synthesis: Critical Literacy and Your Text",
        instruction: "Write a sustained analytical response (three to four paragraphs) applying critical literacy to the text you have been studying throughout this worksheet. Your response should draw on at least two of the critical frameworks you have explored.",
        parentTip: "This is the consolidating task for the first half of the worksheet. It asks students to synthesise multiple concepts into a sustained written response — the most demanding and most valuable writing exercise at this stage.",
        prompts: [
          { text: "Your analytical response:", type: "box" },
          { text: "Which critical frameworks did you draw on? How did each illuminate a different aspect of the text?", type: "lines", lines: 4 },
        ],
      },
      // 51
      {
        type: "true-false",
        title: "Advanced Critical Literacy Concepts",
        instruction: "Decide whether each statement is true or false.",
        statements: [
          { text: "A text can subvert the dominant ideology even if the author did not intend it to.", answer: true },
          { text: "A text's meaning is fixed by the author's intention.", answer: false },
          { text: "Different critical frameworks applied to the same text will always produce the same conclusions.", answer: false },
          { text: "Ecocriticism examines the representation of the natural world in texts.", answer: true },
          { text: "Postcolonial criticism is only relevant to texts set in formerly colonised countries.", answer: false },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Textual Analysis: Language and Marginalisation",
        instruction: "Examine a passage from your text where a marginalised character or group is described. Conduct a close language analysis.",
        parentTip: "Close language analysis — attending to individual words and their connotations — produces the most precise and convincing analytical writing.",
        prompts: [
          { text: "Copy out the passage and underline at least five specific words or phrases.", type: "box" },
          { text: "For each underlined item: what connotations does this word carry? How does it position the reader toward the character?", type: "lines", lines: 6 },
          { text: "What is the cumulative effect of these language choices on the text's representation of this character or group?", type: "lines", lines: 3 },
        ],
      },
      // 53
      {
        type: "fill-in-blank",
        title: "Structuring a Critical Argument",
        instruction: "Complete the structure of this critical literacy argument about a fictional text.",
        sentences: [
          { text: "In [text], the author represents [group] primarily through the technique of ___, which positions the reader to perceive them as ___.", blanks: ["...", "..."] },
          { text: "This is evident in the passage where [quote], in which the word '___' carries connotations of ___.", blanks: ["...", "..."] },
          { text: "This representation can be contextualised by the historical moment of the text's production: at the time, ___.", blanks: ["..."] },
          { text: "By representing [group] in this way, the text ___ the dominant ideology that ___.", blanks: ["...", "..."] },
          { text: "A critical reading, however, reveals ___, which ___ this representation.", blanks: ["...", "..."] },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "The Politics of Genre",
        instruction: "Every genre carries ideological assumptions. The crime genre tends to centre law enforcement. The romance genre tends to centre heterosexual relationships. The adventure genre has historically centred white male protagonists. Examine the genre of a text you are studying.",
        parentTip: "Genre analysis connects well to broader discussions about how cultural industries shape what stories get told — commercial pressures, audience expectations, and conventions all play a role.",
        prompts: [
          { text: "What genre is your text? What are the typical conventions of that genre?", type: "lines", lines: 3 },
          { text: "What ideological assumptions are built into this genre's conventions?", type: "lines", lines: 4 },
          { text: "Does your text follow these conventions, subvert them, or do both? Provide evidence.", type: "lines", lines: 4 },
        ],
      },
      // 55
      {
        type: "home-activity",
        title: "Critical Reading of Social Media",
        instruction: "Apply critical literacy to a social media platform you use or observe.",
        suggestions: [
          "Spend 15 minutes observing your feed. Who appears in the content? Whose lifestyle is presented as aspirational?",
          "Notice the language used to describe different groups — in news headlines, in captions, in comments. What patterns do you notice?",
          "Consider: who is the 'implied user' of this platform? Who is this platform designed for, and who is made to feel unwelcome?",
          "Write a short paragraph applying one critical literacy concept (ideology, representation, marginalisation, or discourse) to what you observed.",
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Critical Literacy and the Australian Context",
        instruction: "Australian texts are shaped by Australia's specific history — including the history of colonisation, migration, multicultural identity, and ongoing conversations about land and sovereignty. Reflect on these contexts in relation to a text you are studying.",
        parentTip: "This is particularly important when studying texts by or about First Nations Australians — seek out the author's own words about their work as part of understanding the cultural context.",
        prompts: [
          { text: "What specific aspects of Australian history or culture shape the representations in your text?", type: "lines", lines: 4 },
          { text: "Whose version of Australia does the text present? Who is included in this vision of Australian identity, and who is excluded?", type: "lines", lines: 4 },
          { text: "How might this text look different if told by someone from a different cultural position within Australia?", type: "lines", lines: 3 },
        ],
      },
      // 57
      {
        type: "multiple-choice",
        title: "Reading Positions",
        instruction: "The theorist Stuart Hall identified three reading positions. Match the description to the position.",
        questions: [
          {
            prompt: "A reader who accepts the dominant message of the text as intended by its producers.",
            options: ["Oppositional reading", "Negotiated reading", "Dominant reading", "Resistant reading"],
            answer: "Dominant reading",
          },
          {
            prompt: "A reader who partly accepts and partly resists the dominant message, drawing on their own experience and values.",
            options: ["Dominant reading", "Negotiated reading", "Oppositional reading", "Passive reading"],
            answer: "Negotiated reading",
          },
          {
            prompt: "A reader who rejects the dominant message and reads the text from an entirely different perspective.",
            options: ["Negotiated reading", "Dominant reading", "Oppositional reading", "Neutral reading"],
            answer: "Oppositional reading",
          },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Your Own Reading Position",
        instruction: "Consider your own reading position when engaging with a text you have studied. Do you read with the dominant message, negotiate with it, or resist it?",
        parentTip: "Awareness of one's own reading position is a sophisticated metacognitive skill — it is one of the most intellectually honest things a student can do in English.",
        prompts: [
          { text: "Describe your reading position with respect to a text you have studied. Do you largely accept its dominant message, negotiate with it, or resist it?", type: "lines", lines: 4 },
          { text: "What in your own background or values shapes this reading position?", type: "lines", lines: 3 },
          { text: "How might your reading position limit what you can see in the text?", type: "lines", lines: 3 },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Planning a Critical Literacy Essay",
        instruction: "Plan a critical literacy essay (600–900 words) on a text you have studied. Your essay should apply at least one critical framework and analyse specific representations with textual evidence.",
        parentTip: "The plan is where the essay is won or lost. Encourage your student to spend at least 15 minutes on the plan before writing a word of prose.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 2 },
          { text: "Thesis statement (specific, arguable, naming the critical framework and your central claim):", type: "lines", lines: 3 },
          { text: "Paragraph topics in order (4–5, each with a brief note on evidence and analytical point):", type: "lines", lines: 8 },
          { text: "What insight will your conclusion arrive at?", type: "lines", lines: 3 },
        ],
      },
      // 60
      {
        type: "tip",
        title: "Tip: Avoiding Binary Thinking",
        content: "Critical literacy does not ask you to divide texts neatly into 'problematic' and 'good'. Most texts are complex — they may subvert some ideologies while reproducing others. A nuanced critical response acknowledges both what a text does well and where it is limited. Language like 'while the text challenges X, it nonetheless reproduces Y' shows the kind of complexity that marks strong Year 9 analytical writing.",
      },

      // ── EXTENDING 61–100 ──────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Writing the Critical Literacy Essay",
        instruction: "Using your plan from Activity 59, draft your critical literacy essay. Aim for 600–900 words. Use TEEL structure for each body paragraph. Integrate quotations smoothly. Apply at least one critical framework explicitly.",
        parentTip: "Extended writing is tiring. If your student drafts in sessions, ask them to re-read what they have written before starting each new session — this helps maintain the coherence of the argument.",
        prompts: [
          { text: "Essay draft (use additional paper if needed):", type: "box" },
          { text: "After drafting: Does every body paragraph connect to your thesis? Is the evidence specific? Is the analysis longer than the evidence? Does each paragraph link back to the central argument?", type: "lines", lines: 5 },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Peer Review: Critical Literacy Writing",
        instruction: "If possible, swap your essay with another reader (a parent, sibling, or peer). Complete the peer review below.",
        parentTip: "Even if a formal peer swap is not possible, parents can complete this review — reading critically and articulating feedback is itself a valuable practice.",
        prompts: [
          { text: "What is the writer's central argument? Summarise it in one sentence.", type: "lines", lines: 2 },
          { text: "Which paragraph do you find most convincing, and why?", type: "lines", lines: 3 },
          { text: "Where does the analysis feel thin or unconvincing? What would strengthen it?", type: "lines", lines: 4 },
          { text: "Is the critical framework applied consistently and explicitly throughout?", type: "lines", lines: 3 },
        ],
      },
      // 63
      {
        type: "true-false",
        title: "Essay Writing and Critical Literacy",
        instruction: "Decide whether each statement about critical literacy essays is true or false.",
        statements: [
          { text: "A critical literacy essay should argue for one clear interpretation rather than presenting multiple equally valid readings.", answer: true },
          { text: "Quoting long passages from a text demonstrates analytical strength.", answer: false },
          { text: "The critical framework should be applied consistently throughout the essay.", answer: true },
          { text: "A sophisticated essay can acknowledge what the text does well while also critiquing its limitations.", answer: true },
          { text: "The conclusion of a critical literacy essay should simply restate the introduction.", answer: false },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Introduction Craft: The Critical Lens",
        instruction: "Practise writing a strong introduction for a critical literacy essay. A strong introduction establishes: the text and its context, the critical framework you are applying, your thesis, and the stakes of the argument.",
        parentTip: "A common weak introduction begins: 'In this essay I will...'. A strong introduction dives directly into the argument. Encourage your student to try both and compare.",
        prompts: [
          { text: "Weak version (to practise and then improve from):", type: "box" },
          { text: "Stronger version — begin with a statement of your critical lens and central claim:", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Conclusion Craft: The Arrival",
        instruction: "Practise writing a sophisticated conclusion that arrives at an insight rather than simply restating the introduction. Your conclusion should synthesise your argument and open toward a broader significance.",
        parentTip: "A useful test: if you read only the introduction and conclusion, does the conclusion feel like it has arrived somewhere the introduction could not fully see? If it says exactly the same thing, it needs rethinking.",
        prompts: [
          { text: "Your conclusion:", type: "box" },
          { text: "What insight does your conclusion arrive at that was not fully available at the start of the essay?", type: "lines", lines: 3 },
        ],
      },
      // 66
      {
        type: "fill-in-blank",
        title: "Sophisticated Connectives for Critical Writing",
        instruction: "Complete each sentence with a sophisticated connective phrase.",
        sentences: [
          { text: "___ the text appears to celebrate diversity, a closer reading reveals that non-white characters are consistently ___.", blanks: ["Although", "..."] },
          { text: "This analysis suggests that the ideology of ___ is not merely reflected in the text but actively ___ through its narrative choices.", blanks: ["...", "..."] },
          { text: "The tension ___ the text's stated values and its actual representational practices is itself revealing.", blanks: ["between"] },
          { text: "Ultimately, the text's most significant ideological work is not in what it ___ but in what it ___ to say.", blanks: ["says", "refuses"] },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Applying Queer Theory",
        instruction: "Queer theory examines how texts construct and reinforce norms around gender and sexuality, and how some texts challenge or subvert those norms.",
        parentTip: "Queer theory does not only apply to texts with LGBTQ+ characters — it examines how heteronormativity and binary gender are constructed as 'natural' in all texts.",
        prompts: [
          { text: "Does the text you are studying treat heterosexuality or binary gender as the norm? How is this constructed?", type: "lines", lines: 4 },
          { text: "Are there any characters or moments in the text that challenge or subvert gender and sexuality norms? What is the text's attitude toward this challenge?", type: "lines", lines: 4 },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Applying Ecocriticism",
        instruction: "Ecocriticism examines how texts represent the natural environment and what they imply about humanity's relationship with nature.",
        parentTip: "Ecocriticism is increasingly important given the climate crisis — examining how literature has shaped attitudes toward the natural world is both intellectually interesting and genuinely relevant.",
        prompts: [
          { text: "How does your text represent the natural environment? Is it a backdrop, a character, a threat, a resource, or something else?", type: "lines", lines: 4 },
          { text: "What does the text's treatment of the natural world reveal about the ideology of its cultural context?", type: "lines", lines: 4 },
          { text: "Does the text challenge or reinforce exploitative attitudes toward the natural world?", type: "lines", lines: 3 },
        ],
      },
      // 69
      {
        type: "multiple-choice",
        title: "Advanced Critical Literacy: Assessment Preparation",
        instruction: "These questions are at the level of formal examination or assessment tasks. Choose the most analytically sophisticated response.",
        questions: [
          {
            prompt: "A student writes: 'The author represents Indigenous characters negatively.' This statement needs improvement because:",
            options: [
              "It is too long",
              "It is descriptive rather than analytical — it identifies what happens but not how or why",
              "It does not name a specific character",
              "It is too political for an English essay",
            ],
            answer: "It is descriptive rather than analytical — it identifies what happens but not how or why",
          },
          {
            prompt: "The most sophisticated critical literacy essays will:",
            options: [
              "Apply a single critical framework consistently throughout",
              "Apply multiple frameworks to show how they illuminate different aspects of the same text",
              "Avoid taking a strong position in order to seem balanced",
              "Summarise the plot before beginning the analysis",
            ],
            answer: "Apply multiple frameworks to show how they illuminate different aspects of the same text",
          },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Multimodal Critical Analysis",
        instruction: "Apply critical literacy to a multimodal text — a film, advertisement, or social media post. Examine how visual, audio, and linguistic elements together construct a representation.",
        parentTip: "Multimodal critical analysis is the intersection of visual literacy and critical literacy — both are assessed in Year 9 English at the highest levels.",
        prompts: [
          { text: "Describe the text and its context.", type: "lines", lines: 3 },
          { text: "How do visual elements (camera angle, colour, composition) contribute to the representation?", type: "lines", lines: 4 },
          { text: "How do audio elements (music, voice, silence) contribute to the representation?", type: "lines", lines: 4 },
          { text: "What ideology does this multimodal text construct, and for whose benefit?", type: "lines", lines: 4 },
        ],
      },
      // 71
      {
        type: "open-response",
        title: "Resistant Reading: Creating a Counter-Text",
        instruction: "Choose a passage from a text that you find ideologically problematic. Rewrite it from a counter-perspective — giving voice to the marginalised character, or challenging the dominant ideology through the language and perspective you use.",
        parentTip: "This is one of the most creative and empowering critical literacy activities — transforming a text is the most active form of resistant reading.",
        prompts: [
          { text: "The original passage (quote or describe it):", type: "box" },
          { text: "Your rewritten counter-text:", type: "box" },
          { text: "What specific choices did you make to resist the original's ideology?", type: "lines", lines: 4 },
        ],
      },
      // 72
      {
        type: "home-activity",
        title: "Critical Literacy Beyond the Classroom",
        instruction: "This week, apply critical literacy thinking to a conversation you have with someone — a family discussion, a news broadcast, a public speech.",
        parentTip: "Critical literacy is ultimately about being an active, questioning participant in public discourse — helping your student apply these skills beyond texts reinforces their real-world relevance.",
        suggestions: [
          "Listen to a news broadcast or podcast and notice: whose perspective is given more airtime? What assumptions does the host make about their audience?",
          "In a family conversation about a social or political issue, notice: whose experience is centred? Whose is absent from the conversation?",
          "Find a political speech and identify at least one moment where ideology is naturalised — where an assumption is presented as obvious or common sense.",
          "Write a short reflection: how did applying critical thinking to a real conversation change how you engaged with it?",
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Critical Literacy and Creative Writing",
        instruction: "Write the opening two paragraphs of a short story that deliberately challenges a dominant representation. Your goal is to give a marginalised character full complexity, interiority, and agency.",
        parentTip: "The most powerful counter-narratives come from genuine investment in the character — encourage your student to spend time imagining who this character really is before writing.",
        prompts: [
          { text: "Your story opening:", type: "box" },
          { text: "Annotate your writing: which specific choices resist or challenge dominant representations? Circle them and write a brief note on each.", type: "lines", lines: 5 },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Critical Literacy Self-Assessment",
        instruction: "Reflect honestly on your development as a critical reader throughout this worksheet.",
        parentTip: "Metacognitive reflection — thinking about how you have learned — is one of the most valuable exercises in education. Encourage genuine honesty rather than performance.",
        prompts: [
          { text: "Which concept in this worksheet was most new or challenging for you?", type: "lines", lines: 3 },
          { text: "Which critical framework do you find most useful for the text you are studying, and why?", type: "lines", lines: 3 },
          { text: "How has completing this worksheet changed the way you read or think about texts?", type: "lines", lines: 4 },
          { text: "What is one aspect of critical literacy you want to develop further?", type: "lines", lines: 3 },
        ],
      },
      // 75
      {
        type: "tip",
        title: "Tip: The Difference Between Description and Analysis",
        content: "Description tells what a text does: 'The author describes the Indigenous character as silent.' Analysis tells how and why it matters: 'By denying the Indigenous character dialogue, the author reproduces the colonial silencing of Aboriginal voices — a textual choice that reflects and reinforces the marginalisation of First Nations perspectives in mainstream Australian culture.' Every time you write a descriptive statement, ask yourself: can I transform this into an analytical claim by adding 'which shows that...' or 'reflecting the ideology that...'?",
      },
      // 76
      {
        type: "open-response",
        title: "Drafting the Extended Critical Literacy Essay",
        instruction: "Write the full extended analytical essay you planned in Activity 59 (if you have not already done so). This should be 700–900 words, applying at least one critical framework, with TEEL paragraphs, integrated quotations, and a conclusion that arrives at an insight.",
        parentTip: "If your student has already written the essay, use this activity for revision: read the draft together and identify two specific places where the analysis could be deepened.",
        prompts: [
          { text: "Full essay draft or revision notes:", type: "box" },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Revising for Analytical Depth",
        instruction: "Take one body paragraph from your essay and revise it to increase analytical depth. The revised paragraph should: name the technique more precisely, quote more specifically, explain the effect with more complexity, and connect more explicitly to the critical framework and cultural context.",
        parentTip: "Revision is where strong writing is made — helping your student understand that the first draft is never the final draft is one of the most important lessons of Year 9 English.",
        prompts: [
          { text: "Original paragraph:", type: "box" },
          { text: "Revised paragraph:", type: "box" },
          { text: "What specific changes did you make, and why does each change improve the paragraph?", type: "lines", lines: 4 },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Critical Literacy: Connecting to Other Subjects",
        instruction: "Critical literacy applies beyond English — the skills of reading for power, ideology, and representation are relevant in history, media studies, geography, and science.",
        parentTip: "Making explicit connections between English and other subject areas helps students see these skills as genuinely transferable, not just confined to one class.",
        prompts: [
          { text: "Can you think of a topic in history, geography, or science where critical literacy skills would be useful? Describe it briefly.", type: "lines", lines: 3 },
          { text: "Apply one critical literacy question (e.g. whose perspective is centred? what is treated as natural?) to a resource you have used in another subject.", type: "lines", lines: 5 },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Independent Critical Analysis",
        instruction: "Choose a text you have not studied in class — something you have read, watched, or listened to for pleasure. Apply everything you have learned in this worksheet to produce an independent critical analysis.",
        parentTip: "This is the most autonomous task in the worksheet — resist the urge to guide too heavily. The goal is independent critical thinking applied to a personally chosen text.",
        prompts: [
          { text: "Text details (title, author/director, genre, context):", type: "lines", lines: 2 },
          { text: "Your independent critical analysis (400–600 words) — apply at least one critical framework, analyse specific textual details, and connect to cultural context:", type: "box" },
        ],
      },
      // 80
      {
        type: "spark",
        title: "Spark: Imagination as an Act of Justice",
        content: "The author Ursula K. Le Guin wrote that the creative imagination is one of the most politically powerful human capacities — because imagining different worlds, different societies, different relationships between people is how change begins. Critical literacy is not just about reading the world as it is; it is about developing the capacity to imagine how it could be different. Every time you write a counter-narrative, you are practising this capacity.",
      },

      // ── EXTENDING 81–100 ──────────────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Synthesising Multiple Critical Frameworks",
        instruction: "Write an analytical paragraph that applies TWO critical frameworks simultaneously to a single moment in a text. Show how they illuminate different dimensions of the same textual choice.",
        parentTip: "Applying two frameworks simultaneously is genuinely difficult and marks the highest level of critical literacy thinking at Year 9. Affirm any serious attempt, even if the synthesis is not perfect.",
        prompts: [
          { text: "The textual moment you are analysing:", type: "lines", lines: 3 },
          { text: "Your dual-framework analytical paragraph:", type: "box" },
          { text: "What does each framework reveal that the other does not?", type: "lines", lines: 4 },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Challenging Your Own Analysis",
        instruction: "Take the central argument of your critical literacy essay and write the strongest possible counter-argument — the case against your own thesis. Then write a response that maintains your position.",
        parentTip: "The ability to challenge one's own argument is a mark of genuine intellectual maturity — students who can do this produce the most nuanced and convincing analytical writing.",
        prompts: [
          { text: "Your essay's central argument (thesis):", type: "lines", lines: 2 },
          { text: "The strongest counter-argument:", type: "lines", lines: 5 },
          { text: "Your response — why your argument still holds despite the counter-argument:", type: "lines", lines: 5 },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Critical Literacy and Oral Presentation",
        instruction: "Prepare a 3-minute spoken presentation on the central argument of your critical literacy essay. Your presentation should be structured, use specific textual evidence, and engage your audience.",
        parentTip: "The ability to present critical arguments orally is assessed in Year 9 English. Delivering the presentation to a family member and receiving specific feedback is excellent preparation.",
        prompts: [
          { text: "Planning notes for your presentation (do not write a script — just key points):", type: "lines", lines: 6 },
          { text: "After delivering: What went well? What was the most challenging part? What would you do differently?", type: "lines", lines: 4 },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Independent Research: A Critical Theorist",
        instruction: "Choose one critical theorist or critic whose ideas are relevant to your analysis (e.g. Stuart Hall, bell hooks, Edward Said, Chimamanda Ngozi Adichie, Paulo Freire, Michel Foucault). Research their central ideas.",
        parentTip: "Students who can name and apply the ideas of specific theorists demonstrate the highest level of engagement with critical literacy. Even a basic understanding of one theorist's ideas is impressive at Year 9.",
        prompts: [
          { text: "Who is the theorist and what is their central idea?", type: "lines", lines: 4 },
          { text: "How does their idea apply to the text you are studying?", type: "lines", lines: 5 },
          { text: "Write one sentence in your essay that explicitly references this theorist and their idea.", type: "lines", lines: 3 },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Writing a Critical Literacy Manifesto",
        instruction: "Write a personal 'critical literacy manifesto' — a statement of your principles as a critical reader. What do you believe about texts, power, and representation? What commitments will you bring to your reading?",
        parentTip: "This is a reflective and creative task that helps students articulate their own critical values — it is particularly powerful as a synthesis activity at this stage of the worksheet.",
        prompts: [
          { text: "Your critical literacy manifesto (8–12 sentences):", type: "box" },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Analysing a Complex Text: Extended Practice",
        instruction: "Choose a text of significant complexity — a novel chapter, a film sequence, or a long-form essay. Apply the full range of critical literacy tools you have developed in this worksheet.",
        parentTip: "This is the most demanding analytical task in the worksheet. There is no single correct response — look for evidence of genuine engagement with the text, specific analysis, and connection to a critical framework.",
        prompts: [
          { text: "Text details and the specific passage or sequence you are analysing:", type: "lines", lines: 3 },
          { text: "Your extended analysis (aim for 500–700 words):", type: "box" },
        ],
      },
      // 87
      {
        type: "matching",
        title: "Matching Theorists to Ideas",
        instruction: "Match each critical theorist with the idea most associated with them in the context of critical literacy.",
        left: ["Edward Said", "bell hooks", "Stuart Hall", "Paulo Freire", "Michel Foucault"],
        right: [
          "Knowledge is power — what counts as knowledge is determined by those who hold power in society",
          "Reading and literacy can be an act of liberation or an act of oppression depending on how they are practised",
          "Western culture has constructed the 'Orient' as exotic and inferior to justify colonialism",
          "Texts are 'encoded' by producers and 'decoded' by audiences, who may read them in different ways",
          "Feminism must address race, class, and other intersecting oppressions — not just gender",
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Final Reflection: Critical Literacy as a Lifelong Practice",
        instruction: "Reflect on what it means to be a critically literate person in the contemporary world — not just in school, but in your everyday life.",
        parentTip: "This final reflection is an opportunity to discuss with your teenager how the skills developed in this worksheet apply beyond English class — in navigating social media, public discourse, relationships, and civic life.",
        prompts: [
          { text: "In what contexts outside of school have you already applied critical literacy thinking, perhaps without realising it?", type: "lines", lines: 4 },
          { text: "What is one situation in your life where critical literacy skills would help you navigate more effectively?", type: "lines", lines: 3 },
          { text: "What does being a critical reader mean to you personally — beyond the requirements of a school subject?", type: "lines", lines: 4 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Complete Portfolio: Critical Literacy",
        instruction: "Compile the best pieces of writing from this worksheet into a short critical literacy portfolio. Select three activities that represent your strongest analytical thinking and write a brief framing statement explaining what each demonstrates.",
        parentTip: "Portfolio compilation is a valuable metacognitive exercise — selecting and framing one's best work builds self-awareness about strengths and areas for growth.",
        prompts: [
          { text: "Activity 1 selected and why:", type: "lines", lines: 3 },
          { text: "Activity 2 selected and why:", type: "lines", lines: 3 },
          { text: "Activity 3 selected and why:", type: "lines", lines: 3 },
          { text: "What does your portfolio as a whole demonstrate about your development as a critical reader?", type: "lines", lines: 4 },
        ],
      },
      // 90
      {
        type: "tip",
        title: "Tip: Excellence in Critical Literacy Writing",
        content: "At the highest level, critical literacy essays demonstrate: (1) a clear, specific, arguable thesis tied to a named critical framework; (2) integrated, precise quotations that serve the argument; (3) analytical explanations that connect technique to ideology and cultural context; (4) acknowledgement of complexity — what the text does well alongside its limitations; (5) a conclusion that synthesises the argument and arrives at a broader significance. Review your essay against these five criteria.",
      },
      // 91
      {
        type: "open-response",
        title: "Extending: A Research-Based Critical Analysis",
        instruction: "Write an extended research-based critical analysis (800–1000 words) of a text, incorporating references to at least one secondary source (an essay, review, or critical article about the text or its context).",
        parentTip: "At this level, students are beginning to engage with the scholarly conversation around texts — using secondary sources correctly is a key skill for senior secondary and tertiary study.",
        prompts: [
          { text: "Your research-based analysis:", type: "box" },
          { text: "Secondary source used (title, author, how you used it):", type: "lines", lines: 3 },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Comparative Critical Analysis",
        instruction: "Write a comparative critical analysis of two texts, examining how they represent the same theme, group, or issue differently. Apply at least one critical framework. Aim for 600–800 words.",
        parentTip: "Comparative essays are challenging because students must balance analysis of both texts without letting one dominate. Encourage a structure that moves between the texts rather than addressing them sequentially.",
        prompts: [
          { text: "Your comparative critical analysis:", type: "box" },
          { text: "Does your analysis move between the texts, or does it address them one-by-one? If the latter, revise to integrate the comparison more thoroughly.", type: "lines", lines: 4 },
        ],
      },
      // 93
      {
        type: "home-activity",
        title: "Critical Literacy Project: Media Representation Audit",
        instruction: "Conduct a systematic representation audit of a specific media genre (e.g. Australian crime dramas, family films from the past decade, news coverage of a specific issue).",
        suggestions: [
          "Select 5–8 examples within your chosen genre. For each, note the demographics of main characters (gender, race, age, class, disability).",
          "Identify the dominant representation pattern across the examples. What is the 'norm' in this genre?",
          "Research whether this genre has shown any shift in representation over time.",
          "Write a 300-word summary of your findings, applying at least one critical framework to explain why this pattern exists.",
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Creating a Critical Literacy Resource",
        instruction: "Create a short guide (one page) introducing critical literacy to a younger student (Year 7). Explain the key concepts in accessible language with examples they would understand.",
        parentTip: "Teaching a concept to someone else is one of the most powerful ways to consolidate understanding — this task reveals what your student truly understands versus what they can repeat from notes.",
        prompts: [
          { text: "Your critical literacy guide for a Year 7 student:", type: "box" },
          { text: "What was the hardest concept to explain simply? Why?", type: "lines", lines: 3 },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Applying Critical Literacy to Your Own Writing",
        instruction: "Apply critical literacy to a piece of creative writing you have produced. What representations have you constructed? Whose perspective have you centred? What ideology might be embedded in your choices?",
        parentTip: "This is the most personally challenging critical literacy task — being a critical reader of one's own creative work requires honesty and self-awareness. Affirm the attempt regardless of conclusions reached.",
        prompts: [
          { text: "Which piece of your own creative writing will you analyse?", type: "lines", lines: 2 },
          { text: "Whose perspective have you centred? Is there a perspective you have not considered?", type: "lines", lines: 4 },
          { text: "What ideology might be embedded in your representational choices, even unintentionally?", type: "lines", lines: 4 },
          { text: "Would you change anything about this piece in light of your critical literacy analysis?", type: "lines", lines: 3 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Extended Debate: Is All Reading Political?",
        instruction: "Consider the proposition: 'All reading is a political act.' Prepare arguments for and against this position, then write your own considered response.",
        parentTip: "This is a genuinely interesting philosophical question — disagreeing about it is entirely appropriate. The goal is to think rigorously, not to arrive at one particular conclusion.",
        prompts: [
          { text: "Arguments FOR (reading is always political):", type: "lines", lines: 4 },
          { text: "Arguments AGAINST (some reading is just reading):", type: "lines", lines: 4 },
          { text: "Your own considered response (and why):", type: "lines", lines: 5 },
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Critical Literacy and Ethical Reading",
        instruction: "Ethical reading means considering the responsibilities that come with engaging with texts — especially texts that represent marginalised communities, trauma, or cultures other than your own.",
        parentTip: "This discussion of ethical reading — which includes questions of cultural sensitivity, respect for lived experience, and the limits of interpretation — is appropriate and valuable at Year 9.",
        prompts: [
          { text: "What do you think it means to read a text ethically — especially one that represents a community or experience very different from your own?", type: "lines", lines: 4 },
          { text: "Are there any limits to interpretation? Things a reader should not do with a text?", type: "lines", lines: 4 },
          { text: "Has studying critical literacy changed your sense of responsibility as a reader? How?", type: "lines", lines: 4 },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Final Extended Essay: Your Critical Literacy Statement",
        instruction: "Write a reflective essay (500–700 words) on what critical literacy means to you as a reader and thinker. Draw on at least three specific concepts from this worksheet and at least one text you have studied. This is your most personal and sustained piece of critical writing.",
        parentTip: "This final essay is a synthesis and a statement — it should feel personal and engaged, not like a summary of definitions. Encourage your student to write in their genuine voice.",
        prompts: [
          { text: "Your reflective critical literacy essay:", type: "box" },
        ],
      },
      // 99
      {
        type: "home-activity",
        title: "Ongoing Critical Literacy Practice",
        instruction: "Critical literacy is not a skill you develop and then put down — it grows through sustained practice. Here are habits to carry forward.",
        suggestions: [
          "When you finish any book, film, or series, ask: whose perspective was centred? Who was marginalised? What was treated as 'normal'?",
          "When you read news media, ask: what language choices are being made? Whose perspective is given more weight?",
          "Deliberately seek out texts from perspectives different from your own — especially First Nations voices, voices from the Global South, and voices historically excluded from mainstream publishing.",
          "Keep a critical reading journal: one short entry per week on a text you encountered, applying one critical literacy question.",
        ],
      },
      // 100
      {
        type: "spark",
        title: "Spark: The Reader You Are Becoming",
        content: "Every text you read critically makes you a slightly different person — one who sees more, questions more, and understands more about how language and power intersect. Critical literacy is not about becoming cynical or suspicious of everything. It is about becoming a reader who is awake — who brings their full intelligence and conscience to the encounter with a text. That kind of reading is one of the most worthwhile things a person can do.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "matching",
        title: "The Three Rhetorical Appeals",
        instruction: "Match each rhetorical appeal to its correct definition.",
        parentTip: "These three terms form the foundation of all rhetorical analysis — returning to them frequently will help cement them.",
        left: ["Ethos", "Pathos", "Logos"],
        right: [
          "An appeal to logic, evidence, and reason",
          "An appeal to the speaker's credibility and character",
          "An appeal to the audience's emotions and values",
        ],
      },
      // 2
      {
        type: "true-false",
        title: "Rhetoric: True or False?",
        instruction: "Decide whether each statement about rhetoric is true or false.",
        statements: [
          { text: "Rhetoric is the art of effective persuasion through language.", answer: true },
          { text: "The three rhetorical appeals were first described by Aristotle around 350 BCE.", answer: true },
          { text: "Logos always involves the use of statistics.", answer: false },
          { text: "A speaker can use all three appeals in a single speech.", answer: true },
          { text: "Ethos refers to the audience's emotional state.", answer: false },
          { text: "Effective rhetoric can be used both to inform and to manipulate.", answer: true },
        ],
      },
      // 3
      {
        type: "circle-correct",
        title: "Which Rhetorical Appeal?",
        instruction: "For each example, circle the rhetorical appeal being used.",
        questions: [
          { prompt: "A doctor begins: 'In my thirty years of treating patients...'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "An advertisement shows a child in tears next to a polluted river.", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "A politician cites: 'Studies show that 78% of Australians support this policy.'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "A charity says: 'Together, as Australians who care about each other...'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "An economist says: 'GDP growth has been 3.2% over five years.'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "A teacher begins: 'I have spent twenty years in this school, watching students like you...'", options: ["Ethos", "Pathos", "Logos"] },
        ],
      },
      // 4
      {
        type: "sorting",
        title: "Sorting Rhetorical Examples",
        instruction: "Sort each example into the correct column: Ethos, Pathos, or Logos.",
        columns: ["Ethos", "Pathos", "Logos"],
        items: [
          { label: "A celebrity endorses a charity because they are a parent" },
          { label: "A graph showing rising sea levels over fifty years" },
          { label: "An image of a struggling animal with slow music" },
          { label: "A scientist lists their qualifications before speaking" },
          { label: "An if-then logical argument about policy consequences" },
          { label: "A speech that invokes shared national values" },
          { label: "A case study of one family's experience" },
          { label: "A quote from a respected expert in the field" },
        ],
      },
      // 5
      {
        type: "fill-in-blank",
        title: "Rhetorical Vocabulary",
        instruction: "Complete each sentence using the correct term: [ethos, pathos, logos, rhetoric, persuasion, audience].",
        sentences: [
          { text: "___ is the art of using language effectively to persuade, inform, or motivate.", blanks: ["Rhetoric"] },
          { text: "The appeal to the speaker's credibility and trustworthiness is called ___.", blanks: ["ethos"] },
          { text: "When a speaker makes you feel a strong emotion — grief, outrage, hope — they are using ___.", blanks: ["pathos"] },
          { text: "The appeal to evidence, statistics, and logical reasoning is called ___.", blanks: ["logos"] },
          { text: "Effective rhetoric always considers the needs, values, and knowledge of its ___.", blanks: ["audience"] },
          { text: "The goal of rhetorical analysis is to understand how ___ works, not just whether a text is convincing.", blanks: ["persuasion"] },
        ],
      },
      // 6
      {
        type: "multiple-choice",
        title: "Rhetoric in Context",
        instruction: "Choose the best answer for each question.",
        parentTip: "For any question where your student is unsure, ask them to identify which appeal seems most relevant before choosing.",
        questions: [
          {
            prompt: "Which rhetorical appeal is most prominent in: 'Every day, 800 children die from preventable diseases — that is one every two minutes'?",
            options: ["Ethos", "Pathos", "Logos", "None of the above"],
            answer: "Logos",
          },
          {
            prompt: "A speech that opens with: 'As a single mother who has worked two jobs to support my family, I know what it means to struggle' is primarily establishing:",
            options: ["Logos", "Pathos", "Ethos", "Counter-argument"],
            answer: "Ethos",
          },
          {
            prompt: "Which rhetorical appeal is most likely to be used manipulatively through misleading statistics?",
            options: ["Ethos", "Pathos", "Logos", "All equally"],
            answer: "Logos",
          },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Identifying Rhetorical Appeals in a Speech Extract",
        instruction: "Read the following extract and identify how each rhetorical appeal operates.\n\n'I am a marine biologist who has spent fifteen years studying coral reef systems across the Pacific. I have watched reefs that once teemed with life become bleached and silent. My daughter was born three years ago, and when I imagine her asking me what I did when I knew, I find I cannot be silent. The data is unambiguous: reef systems are declining at an accelerating rate, with a 50% reduction in coral cover recorded in the Great Barrier Reef alone since 1995. We cannot afford to wait.'",
        parentTip: "Encourage your student to quote specific words or phrases when explaining each appeal — vague identification is less valuable than precise textual evidence.",
        prompts: [
          { text: "Ethos: How does the speaker establish their credibility? Quote the relevant section and explain its effect.", type: "lines", lines: 4 },
          { text: "Pathos: Where does the speaker make an emotional appeal? What specific words create the emotional effect?", type: "lines", lines: 4 },
          { text: "Logos: Where does the speaker appeal to evidence? Is it presented reliably?", type: "lines", lines: 3 },
          { text: "Which appeal is most effective in this extract, and why?", type: "lines", lines: 3 },
        ],
      },
      // 8
      {
        type: "true-false",
        title: "Rhetorical Devices: Figures of Speech",
        instruction: "Decide whether each statement about rhetorical devices is true or false.",
        parentTip: "Rhetorical devices are the specific techniques that give rhetoric its power — they go beyond the three appeals to include how language itself is shaped.",
        statements: [
          { text: "Anaphora is the repetition of a word or phrase at the beginning of successive clauses.", answer: true },
          { text: "Antithesis places contrasting ideas in parallel structure to highlight difference.", answer: true },
          { text: "A rhetorical question expects a direct factual answer from the audience.", answer: false },
          { text: "Tricolon is the use of three parallel elements for rhetorical effect.", answer: true },
          { text: "Hyperbole is a deliberate understatement.", answer: false },
          { text: "Alliteration is the repetition of initial consonant sounds.", answer: true },
        ],
      },
      // 9
      {
        type: "matching",
        title: "Rhetorical Devices and Examples",
        instruction: "Match each rhetorical device to the example that illustrates it.",
        left: ["Anaphora", "Antithesis", "Rhetorical question", "Tricolon", "Hyperbole", "Alliteration"],
        right: [
          "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.",
          "Peter Piper picked a peck of pickled peppers.",
          "I came, I saw, I conquered.",
          "Shall we sit here and do nothing while the world burns?",
          "I have told you a million times already.",
          "One small step for man, one giant leap for mankind.",
        ],
      },
      // 10
      {
        type: "open-response",
        title: "Identifying Rhetorical Devices in a Text",
        instruction: "Find an example of at least THREE different rhetorical devices in a persuasive text you are studying.",
        parentTip: "Persuasive speeches are the richest source of rhetorical devices — if your student struggles to find examples, suggest looking at historical speeches by figures like Martin Luther King Jr. or Paul Keating.",
        prompts: [
          { text: "Device 1: Name the device, quote the example, and explain its persuasive effect.", type: "lines", lines: 4 },
          { text: "Device 2: Name the device, quote the example, and explain its persuasive effect.", type: "lines", lines: 4 },
          { text: "Device 3: Name the device, quote the example, and explain its persuasive effect.", type: "lines", lines: 4 },
        ],
      },
      // 11
      {
        type: "fill-in-blank",
        title: "Naming Rhetorical Devices",
        instruction: "Identify the rhetorical device used in each example.",
        sentences: [
          { text: "'Ask not what your country can do for you — ask what you can do for your country.' This is an example of ___.", blanks: ["antithesis"] },
          { text: "'We shall not flag, we shall not fail, we shall not falter.' This is an example of ___ (repetition of a phrase at the start of successive clauses).", blanks: ["anaphora"] },
          { text: "'Isn't it time we did something about this?' This is an example of a ___ question.", blanks: ["rhetorical"] },
          { text: "'The world is watching, the world is listening, the world is waiting.' This is an example of ___.", blanks: ["tricolon"] },
          { text: "'Brilliant Brisbane's beautiful beaches' is an example of ___.", blanks: ["alliteration"] },
        ],
      },
      // 12
      {
        type: "open-response",
        title: "Rhetoric and Audience",
        instruction: "Effective rhetoric is always designed for a specific audience. Consider how audience shapes rhetorical choices.",
        parentTip: "Audience awareness is one of the most underrated rhetorical skills — when students write or speak, helping them genuinely visualise their audience is the most transformative coaching move.",
        prompts: [
          { text: "Think of two different audiences for the same argument (e.g. a speech arguing for more cycling infrastructure). How might the rhetorical approach differ for: (a) local council members; (b) a community of cyclists?", type: "lines", lines: 5 },
          { text: "What does this tell you about the relationship between audience and rhetorical choice?", type: "lines", lines: 3 },
        ],
      },
      // 13
      {
        type: "multiple-choice",
        title: "Rhetorical Devices: Identification",
        instruction: "Identify the rhetorical device in each example.",
        questions: [
          {
            prompt: "'The world will little note, nor long remember what we say here, but it can never forget what they did here.' (Lincoln, Gettysburg Address)",
            options: ["Anaphora", "Antithesis", "Tricolon", "Alliteration"],
            answer: "Antithesis",
          },
          {
            prompt: "'I have a dream... I have a dream... I have a dream...' (Martin Luther King Jr.)",
            options: ["Antithesis", "Rhetorical question", "Anaphora", "Hyperbole"],
            answer: "Anaphora",
          },
          {
            prompt: "'If we do not act now, when will we act? If not us, then who?'",
            options: ["Anaphora", "Rhetorical questions", "Logos", "Tricolon"],
            answer: "Rhetorical questions",
          },
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Writing With Rhetorical Devices",
        instruction: "Write a short paragraph (5–8 sentences) arguing for something you believe in. Deliberately include at least TWO rhetorical devices. Label them in the margin.",
        parentTip: "Deliberately using devices while writing develops the most active rhetorical skill — students who can deploy devices intentionally are developing real craft.",
        prompts: [
          { text: "Your persuasive paragraph (label the devices in brackets or the margin):", type: "box" },
          { text: "Which devices did you use? What effect did each create?", type: "lines", lines: 3 },
        ],
      },
      // 15
      {
        type: "tip",
        title: "Tip: How Rhetoric Becomes Manipulation",
        content: "Aristotle's framework can be used to build genuine, ethical arguments — or to manipulate through false authority (fake ethos), emotional exploitation (manipulative pathos), or misleading statistics (false logos). The mark of an educated reader is being able to enjoy being persuaded by good rhetoric while also recognising when you are being manipulated by bad rhetoric. Both things are possible at once.",
      },
      // 16
      {
        type: "open-response",
        title: "Legitimate vs Manipulative Rhetoric",
        instruction: "For each of the following rhetorical moves, explain whether it represents a legitimate appeal or a manipulative one, and why.",
        parentTip: "The distinction between legitimate and manipulative rhetoric is often a matter of degree and context rather than a clean binary. Encourage your student to think in nuance, not absolutes.",
        prompts: [
          { text: "A politician begins every speech: 'As a parent of three children, I know what Australian families need.' Legitimate ethos or manipulative? Why?", type: "lines", lines: 4 },
          { text: "A charity shows images of struggling children with dramatic music. Legitimate pathos or manipulative? Why?", type: "lines", lines: 4 },
          { text: "An opinion piece cites one study to claim 'scientists agree that...' Legitimate logos or misleading? What would make it more credible?", type: "lines", lines: 4 },
        ],
      },
      // 17
      {
        type: "sorting",
        title: "Legitimate or Manipulative?",
        instruction: "Sort each rhetorical move into the correct column: legitimate persuasion or manipulative technique.",
        columns: ["Legitimate persuasion", "Manipulative technique"],
        items: [
          { label: "Citing peer-reviewed research with accurate statistics" },
          { label: "Claiming 'everyone knows' something without evidence" },
          { label: "Sharing a personal story relevant to the argument" },
          { label: "Using graphic images to provoke disgust unrelated to the argument" },
          { label: "Acknowledging and responding to the opposing view" },
          { label: "Falsely attributing a quote to an authority figure" },
          { label: "Using shared values to build connection with the audience" },
          { label: "Repeating a claim loudly and frequently until it feels true" },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Analysing Advertising Rhetoric",
        instruction: "Choose a current advertisement (TV, online, or print) and conduct a rhetorical analysis.",
        parentTip: "Advertising is the most commercially sophisticated form of rhetoric in contemporary life — it uses all three appeals simultaneously and often very effectively.",
        prompts: [
          { text: "Describe the advertisement: what is it for? What happens in it?", type: "lines", lines: 3 },
          { text: "Ethos: How does the advertisement establish credibility or trustworthiness?", type: "lines", lines: 3 },
          { text: "Pathos: What emotions does it evoke? How?", type: "lines", lines: 3 },
          { text: "Logos: Does it make any factual claims? Are they credible?", type: "lines", lines: 3 },
          { text: "Which appeal is dominant, and why do you think the advertisers made this choice?", type: "lines", lines: 3 },
        ],
      },
      // 19
      {
        type: "home-activity",
        title: "Rhetorical Listening",
        instruction: "This week, listen for rhetoric in the world around you.",
        suggestions: [
          "Listen to a political speech or news analysis and identify one example of each appeal (ethos, pathos, logos).",
          "Watch an advertisement and pause to name which appeal is being used in each section.",
          "Listen to someone you find genuinely persuasive — a teacher, a podcast host, a family member. What makes them persuasive?",
          "Find one example of rhetoric you think is manipulative rather than legitimate. Write a short explanation of why.",
        ],
      },
      // 20
      {
        type: "spark",
        title: "Spark: The Double Awareness",
        content: "The greatest readers of rhetoric are people who can simultaneously be moved by a text and think critically about it. They can feel the pathos of a speech while noticing exactly how it is being produced. They can be persuaded by logos while asking whether the evidence is real. This double awareness — responding emotionally and thinking analytically at the same time — is one of the core intellectual achievements of a great education. You are developing it right now.",
      },

      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "TEEL Paragraph: Rhetorical Analysis",
        instruction: "Write one TEEL paragraph analysing how a specific rhetorical device functions in a persuasive text you are studying. Name the device, quote it, explain its persuasive effect, and link to the author's overall purpose.",
        parentTip: "Students often identify the device correctly but then explain what it does literally rather than persuasively. Ask: what does this device do to the reader?",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
          { text: "Check: Does your explanation describe the persuasive effect on the reader (not just what the device is)? If not, revise.", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "matching",
        title: "Advanced Rhetorical Devices",
        instruction: "Match each advanced rhetorical device with its definition.",
        parentTip: "These advanced devices appear in the most sophisticated persuasive texts. Recognising them strengthens both analytical and creative writing.",
        left: ["Chiasmus", "Epistrophe", "Apophasis", "Parallelism", "Anadiplosis"],
        right: [
          "Repetition of a word or phrase at the end of successive clauses",
          "Beginning a new clause with the last word of the preceding clause",
          "Parallel grammatical structure used to add rhythm and emphasis",
          "Reversing grammatical structures in successive clauses: AB BA",
          "Bringing something up by claiming not to mention it",
        ],
      },
      // 23
      {
        type: "fill-in-blank",
        title: "Advanced Device Identification",
        instruction: "Identify the advanced rhetorical device in each example.",
        sentences: [
          { text: "'Fair is foul, and foul is fair.' This inverted structure is an example of ___.", blanks: ["chiasmus"] },
          { text: "'Government of the people, by the people, for the people.' The repeated phrase at the end of each unit is ___.", blanks: ["epistrophe"] },
          { text: "'The brave men, living and dead, who struggled here...' — each clause follows the same grammatical structure: this is ___.", blanks: ["parallelism"] },
          { text: "'I will not even mention the scandal that ended his previous career.' Raising something by denying you will raise it is ___.", blanks: ["apophasis"] },
          { text: "'Fear leads to anger, anger leads to hate, hate leads to suffering.' Each clause picks up the last word of the previous: this is ___.", blanks: ["anadiplosis"] },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Rhetoric and Tone",
        instruction: "Tone is the speaker's attitude toward their subject and audience, expressed through word choice, sentence structure, and rhetorical choices. Analyse the tone of a persuasive text you are studying.",
        parentTip: "Helping students move beyond 'serious' or 'sad' to more precise tone descriptors — 'urgent but measured', 'passionate yet controlled' — deepens analysis significantly.",
        prompts: [
          { text: "How would you describe the overall tone of the text? Use two or three specific adjectives.", type: "lines", lines: 2 },
          { text: "Quote two or three specific words or sentences that create this tone. What language choices produce it?", type: "lines", lines: 4 },
          { text: "How does the tone serve the text's persuasive purpose? Would a different tone be more or less effective?", type: "lines", lines: 4 },
        ],
      },
      // 25
      {
        type: "multiple-choice",
        title: "Rhetoric and Context",
        instruction: "Choose the best answer for each question about how context shapes rhetorical choices.",
        questions: [
          {
            prompt: "Why is the context of a speech important for understanding its rhetoric?",
            options: [
              "It determines whether the speech is well-written",
              "It shapes which appeals and devices will be most effective for that particular audience",
              "It tells us whether the speaker's arguments are true",
              "It is irrelevant — good rhetoric works on any audience",
            ],
            answer: "It shapes which appeals and devices will be most effective for that particular audience",
          },
          {
            prompt: "A speech that works brilliantly for one audience might fail with another. This suggests that rhetoric is always:",
            options: [
              "Universal and culture-neutral",
              "Specific to its rhetorical situation — speaker, audience, purpose, and context",
              "Dependent solely on the speaker's skill",
              "Most effective when it avoids emotional appeals",
            ],
            answer: "Specific to its rhetorical situation — speaker, audience, purpose, and context",
          },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "The Rhetorical Situation",
        instruction: "Every act of persuasion exists within a rhetorical situation — the combination of speaker, audience, purpose, context, and constraints that shapes what can be said and how.",
        parentTip: "Understanding the rhetorical situation helps students move beyond 'what is being said' to 'why it is being said this way, to these people, at this moment.'",
        prompts: [
          { text: "For a persuasive text you are studying, identify: Who is the speaker? Who is the intended audience? What is the purpose?", type: "lines", lines: 4 },
          { text: "What is the context — what historical moment, cultural setting, or public controversy gives this text its occasion?", type: "lines", lines: 3 },
          { text: "What constraints are there on what the speaker can say?", type: "lines", lines: 3 },
          { text: "How does the rhetorical situation shape the specific choices of appeals and devices you observe?", type: "lines", lines: 4 },
        ],
      },
      // 27
      {
        type: "true-false",
        title: "Rhetoric vs Logical Fallacies",
        instruction: "A logical fallacy is a flaw in reasoning that makes an argument invalid. Decide whether each example is legitimate rhetoric or a logical fallacy.",
        parentTip: "Learning to identify logical fallacies is one of the most practically useful critical thinking skills — it applies to everyday arguments, social media posts, and political discourse.",
        statements: [
          { text: "'Either you support this policy, or you do not care about children.' (False dilemma)", answer: false },
          { text: "Citing a relevant expert who has studied the issue directly.", answer: true },
          { text: "'Everyone is doing it, so it must be right.' (Bandwagon fallacy)", answer: false },
          { text: "Acknowledging the strongest counterargument before refuting it.", answer: true },
          { text: "'If we allow X, soon Y will happen, then Z.' (Slippery slope without evidence)", answer: false },
          { text: "Using a relevant personal story to illustrate a statistical trend.", answer: true },
        ],
      },
      // 28
      {
        type: "matching",
        title: "Logical Fallacies",
        instruction: "Match each logical fallacy with its definition.",
        left: ["Ad hominem", "Straw man", "False dilemma", "Appeal to authority", "Hasty generalisation"],
        right: [
          "Presenting a simplified or distorted version of the opposing argument to make it easier to attack",
          "Attacking the person making the argument rather than the argument itself",
          "Citing an authority figure who is not actually an expert in the relevant field",
          "Drawing a broad conclusion from a very small or unrepresentative sample",
          "Presenting only two options when more options exist",
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Crafting Your Own Rhetorical Appeals",
        instruction: "Choose a topic you feel genuinely passionate about. Write three short paragraphs — one using primarily ethos, one using primarily pathos, and one using primarily logos — to argue for your position.",
        parentTip: "Students often find one appeal far more natural than the others. Noticing this reveals something genuine about their rhetorical instincts — encourage reflection on what this tells them.",
        prompts: [
          { text: "Ethos paragraph (establish your credibility or shared values):", type: "box" },
          { text: "Pathos paragraph (appeal to emotion through story, imagery, or values):", type: "box" },
          { text: "Logos paragraph (appeal to evidence, statistics, or logic):", type: "box" },
          { text: "Which appeal felt most natural? Which was hardest? What does this tell you?", type: "lines", lines: 3 },
        ],
      },
      // 30
      {
        type: "tip",
        title: "Tip: Naming Devices Precisely",
        content: "In analytical writing, naming a device precisely ('anaphora', 'tricolon', 'antithesis') is more persuasive than vague identification ('repetition', 'contrast'). Readers of your essays — including examiners — are looking for evidence that you have studied the craft of persuasion, not just its broad effects. Use the precise technical term, then explain what it does in this specific context.",
      },
      // 31
      {
        type: "open-response",
        title: "Analysing a Political Speech",
        instruction: "Choose a political speech (contemporary or historical, Australian or international) and conduct a sustained rhetorical analysis. Focus on how the three appeals and at least two specific devices work together.",
        parentTip: "Historical speeches often have more literary quality than contemporary ones. Gough Whitlam's dismissal speech, Noel Pearson's Redfern Address, or Paul Keating's 1992 Redfern speech all work well.",
        prompts: [
          { text: "Speech details (speaker, occasion, audience, purpose):", type: "lines", lines: 3 },
          { text: "How does the speaker use ethos? Quote and analyse a specific moment.", type: "lines", lines: 4 },
          { text: "How does the speaker use pathos? Quote and analyse a specific moment.", type: "lines", lines: 4 },
          { text: "How does the speaker use logos? Is it genuine or questionable?", type: "lines", lines: 3 },
          { text: "Identify and analyse two specific rhetorical devices.", type: "lines", lines: 5 },
        ],
      },
      // 32
      {
        type: "open-response",
        title: "Evaluating the Effectiveness of Rhetoric",
        instruction: "Analysing rhetoric means not just identifying devices but evaluating how effectively they work — and for whom.",
        parentTip: "Effectiveness is always relative to audience and context — what is 'effective' for one audience may be counterproductive for another.",
        prompts: [
          { text: "Choose one rhetorical technique from the text you are analysing. Who would this technique be most effective for, and why?", type: "lines", lines: 4 },
          { text: "Is there any audience for whom this technique might backfire or seem manipulative? Why?", type: "lines", lines: 4 },
          { text: "Overall, how effective is the rhetoric in this text? Justify your evaluation with specific evidence.", type: "lines", lines: 4 },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "Analytical Sentence Frames: Rhetoric",
        instruction: "Complete these analytical sentence frames using precise rhetorical language.",
        sentences: [
          { text: "Through the use of ___, the speaker establishes their ___ by ___.", blanks: ["ethos", "credibility", "..."] },
          { text: "The ___ of the phrase '...' appeals to the audience's sense of ___, creating a feeling of ___.", blanks: ["pathos", "...", "..."] },
          { text: "By citing ___, the speaker makes a logos appeal that ___ the audience to ___.", blanks: ["...", "...", "..."] },
          { text: "The rhetorical device of ___ is used to ___, which positions the reader to feel ___.", blanks: ["...", "...", "..."] },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Rhetoric in Social Media",
        instruction: "Social media has created new forms of rhetoric — compressed, visual, and viral. Apply rhetorical analysis to a social media post on a public issue.",
        parentTip: "Social media rhetoric operates in very compressed form — a single image and a few words must do the work that a speech has paragraphs to accomplish. This makes every word choice highly significant.",
        prompts: [
          { text: "Describe the post: platform, content, and context.", type: "lines", lines: 3 },
          { text: "Which rhetorical appeal(s) does it use? How?", type: "lines", lines: 4 },
          { text: "What rhetorical devices do you notice in the language or image?", type: "lines", lines: 3 },
          { text: "How effective is it as rhetoric? What makes it compelling or unconvincing?", type: "lines", lines: 3 },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Rhetoric and Ethics",
        instruction: "There is a long debate about whether effective rhetoric is always ethical. Reflect on this question.",
        parentTip: "The question of whether it is always wrong to use emotion in argument, or whether all persuasion is manipulation in some sense, produces productive discussion.",
        prompts: [
          { text: "Is it possible to use rhetoric in a fully ethical way? Or does persuasion always involve some element of manipulation? Argue your position.", type: "lines", lines: 5 },
          { text: "Where do you think the line is between legitimate emotional appeal (pathos) and emotional manipulation?", type: "lines", lines: 4 },
          { text: "What responsibility do speakers and writers have when they use powerful rhetoric on large audiences?", type: "lines", lines: 4 },
        ],
      },
      // 36
      {
        type: "true-false",
        title: "Rhetoric: Higher-Level Concepts",
        instruction: "Decide whether each statement about advanced rhetorical concepts is true or false.",
        statements: [
          { text: "The rhetorical situation includes speaker, audience, purpose, context, and constraints.", answer: true },
          { text: "A rhetorical question must be followed by an answer from the speaker.", answer: false },
          { text: "Logos is always the most ethical and reliable form of persuasion.", answer: false },
          { text: "A speaker can establish ethos through shared values as well as credentials.", answer: true },
          { text: "Parallelism creates rhythm and makes ideas easier to remember.", answer: true },
          { text: "Identifying a logical fallacy automatically defeats the opponent's argument.", answer: false },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Comparison: Two Persuasive Texts",
        instruction: "Compare the rhetorical approaches of two persuasive texts on the same topic. Focus on how they use different appeals and devices to achieve their persuasive purposes.",
        parentTip: "Comparative rhetorical analysis is a sophisticated Year 9 skill. The most interesting observations come from noting not just the difference but what that difference reveals about each text's assumptions about its audience.",
        prompts: [
          { text: "Text A — brief description and rhetorical approach:", type: "lines", lines: 4 },
          { text: "Text B — brief description and rhetorical approach:", type: "lines", lines: 4 },
          { text: "What is the most significant difference in their rhetorical approaches? What does this reveal about their different audiences or purposes?", type: "lines", lines: 4 },
        ],
      },
      // 38
      {
        type: "open-response",
        title: "Constructing an Annotated Persuasive Text",
        instruction: "Write a short persuasive text (one paragraph, or two to three for a speech) on a topic of your choice. Then annotate it: label every rhetorical device and appeal you have used.",
        parentTip: "Annotating one's own writing — making the rhetorical choices visible — is one of the most powerful ways to develop active rhetorical skill.",
        prompts: [
          { text: "Your persuasive text (annotated):", type: "box" },
          { text: "List all the devices and appeals you used and explain why you chose each one:", type: "lines", lines: 6 },
        ],
      },
      // 39
      {
        type: "multiple-choice",
        title: "Rhetoric: Assessment Preparation",
        instruction: "These questions are at the level of formal assessment tasks. Choose the most analytically sophisticated response.",
        questions: [
          {
            prompt: "A student writes: 'The speaker uses repetition.' This analysis needs improvement because:",
            options: [
              "It names the wrong device",
              "It is too vague — it should name the specific device (e.g. anaphora) and explain its effect on the audience",
              "Repetition is not a rhetorical device",
              "It is too detailed for a rhetorical analysis",
            ],
            answer: "It is too vague — it should name the specific device (e.g. anaphora) and explain its effect on the audience",
          },
          {
            prompt: "The most sophisticated rhetorical analyses will:",
            options: [
              "Identify as many devices as possible",
              "Evaluate how effectively each device serves the text's purpose for its specific audience",
              "Focus only on logos because it is the most rational appeal",
              "Describe what happens in the text before analysing how",
            ],
            answer: "Evaluate how effectively each device serves the text's purpose for its specific audience",
          },
        ],
      },
      // 40
      {
        type: "spark",
        title: "Spark: Rhetoric in the Age of Misinformation",
        content: "We live in an era of unprecedented rhetorical power and unprecedented rhetorical manipulation. The same tools Aristotle described — ethos, pathos, logos — are used daily by politicians, advertisers, social media algorithms, and propaganda machines. The difference between a society that thinks clearly and one that is manipulated lies partly in whether ordinary people have been taught to recognise rhetoric when they encounter it. Your ability to name and analyse these tools is genuinely important — it is a form of civic competence.",
      },

      // ── CONSOLIDATING 41–80 ──────────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Extended Rhetorical Analysis",
        instruction: "Write a sustained rhetorical analysis (three to four paragraphs) of a persuasive text you have studied in depth. Your analysis should cover all three appeals, at least three specific rhetorical devices, tone, and the rhetorical situation.",
        parentTip: "An extended rhetorical analysis at Year 9 level should feel like a coherent argument about how and why the text persuades — not a list of devices. Encourage your student to develop a thesis about the text's rhetorical strategy.",
        prompts: [
          { text: "Your extended rhetorical analysis:", type: "box" },
          { text: "Does your analysis read as a coherent argument or a list of observations? What could improve the argument's coherence?", type: "lines", lines: 4 },
        ],
      },
      // 42
      {
        type: "fill-in-blank",
        title: "Sophisticated Analytical Language: Rhetoric",
        instruction: "Complete each sentence using a sophisticated analytical verb or phrase.",
        sentences: [
          { text: "The speaker ___ their authority by referencing their credentials, thereby ___ the audience to trust their claims.", blanks: ["establishes", "positioning"] },
          { text: "Through the use of anaphora, the text ___ a sense of momentum and inevitability, ___ the audience toward the speaker's conclusion.", blanks: ["builds", "propelling"] },
          { text: "The rhetorical question ___ the audience's complicity in the argument: by asking 'Who could disagree?', the speaker ___ that disagreement is unreasonable.", blanks: ["invites", "implies"] },
          { text: "The combination of pathos and logos ___ a dual effect: the audience is both ___ and ___ toward the speaker's position.", blanks: ["creates", "emotionally moved", "rationally persuaded"] },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Rhetorical Analysis of an Australian Text",
        instruction: "Choose a significant Australian speech or public text — a political speech, an Indigenous Rights statement, a public advocacy piece, or a significant editorial. Conduct a full rhetorical analysis.",
        parentTip: "Significant Australian speeches include Noel Pearson's 'A Rightful Place', Paul Keating's Redfern Speech, Gough Whitlam's dismissal speech, and Julia Gillard's 2012 speech — any of these are excellent for Year 9 rhetorical analysis.",
        prompts: [
          { text: "Text details (speaker, audience, occasion, purpose):", type: "lines", lines: 3 },
          { text: "Rhetorical situation analysis:", type: "lines", lines: 4 },
          { text: "Analysis of all three appeals with specific textual evidence:", type: "lines", lines: 8 },
          { text: "Analysis of at least three rhetorical devices:", type: "lines", lines: 6 },
          { text: "Overall evaluation: how effective is the rhetoric, and for what audience?", type: "lines", lines: 4 },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Writing a Persuasive Speech: Plan",
        instruction: "Plan a three to five minute persuasive speech on a topic you feel strongly about. Your plan should specify: the rhetorical situation, your ethos strategy, your pathos moments, your logos evidence, and at least three rhetorical devices you will use.",
        parentTip: "Planning rhetoric deliberately — before writing — is how professional speechwriters work. The speech is the product of the rhetorical plan, not the other way around.",
        prompts: [
          { text: "Topic and position:", type: "lines", lines: 2 },
          { text: "Rhetorical situation (audience, occasion, purpose, constraints):", type: "lines", lines: 3 },
          { text: "Ethos strategy (how will you establish credibility?):", type: "lines", lines: 3 },
          { text: "Key pathos moments (where will you make emotional appeals, and how?):", type: "lines", lines: 4 },
          { text: "Logos evidence (what facts, statistics, or logical arguments will you use?):", type: "lines", lines: 3 },
          { text: "Three rhetorical devices you will deliberately use:", type: "lines", lines: 3 },
        ],
      },
      // 45
      {
        type: "tip",
        title: "Tip: Integrating Rhetorical Analysis into Essays",
        content: "When writing an analytical essay that includes rhetorical analysis, do not just label devices — analyse them. The formula is: name the device + quote the example + explain the effect on the audience + connect to the speaker's purpose. This four-part structure ensures every rhetorical observation becomes a genuine analytical point rather than a mere observation.",
      },
      // 46
      {
        type: "open-response",
        title: "Drafting the Persuasive Speech",
        instruction: "Using your plan from Activity 44, draft your persuasive speech. Write it out in full, then read it aloud. It should feel natural when spoken, not just on the page.",
        parentTip: "Speeches are composed for the ear, not the eye. Encourage your student to read the draft aloud and revise any sentence that is hard to say or hear.",
        prompts: [
          { text: "Your speech draft:", type: "box" },
          { text: "After reading it aloud: What felt awkward? What sounded strong? What would you change?", type: "lines", lines: 4 },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Self-Evaluating Rhetorical Effectiveness",
        instruction: "Evaluate the rhetorical effectiveness of the speech you drafted in Activity 46. Be honest and specific.",
        parentTip: "Self-evaluation is difficult to do honestly. Calibrate gently — neither too self-critical nor too self-congratulatory.",
        prompts: [
          { text: "How effectively did you use ethos? Quote the most effective moment and explain why it works.", type: "lines", lines: 4 },
          { text: "How effectively did you use pathos? Is there a moment where the emotional appeal feels genuine rather than forced?", type: "lines", lines: 4 },
          { text: "How effectively did you use logos? Is your evidence specific and credible?", type: "lines", lines: 3 },
          { text: "Which rhetorical devices are most effective in your speech? Which feel forced or unnecessary?", type: "lines", lines: 4 },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Revision: Strengthening the Rhetoric",
        instruction: "Revise one section of your speech to strengthen its rhetoric. Focus on making the appeals more specific, the devices more purposeful, and the language more precise.",
        parentTip: "Revision is the most undervalued part of writing. Even professional speechwriters revise extensively — demonstrating this to your student models the reality of the craft.",
        prompts: [
          { text: "Original section:", type: "box" },
          { text: "Revised section:", type: "box" },
          { text: "What specific changes did you make, and how does each improve the rhetoric?", type: "lines", lines: 4 },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Delivering the Persuasive Speech",
        instruction: "Deliver your speech to your parent/carer, a family member, or record yourself. Then complete the self-evaluation below.",
        parentTip: "Pay attention to: pace (too fast is common), pausing for effect, eye contact, and voice variation.",
        prompts: [
          { text: "What went well in your delivery? Be specific.", type: "lines", lines: 3 },
          { text: "What was the most significant challenge in delivery?", type: "lines", lines: 3 },
          { text: "What listener feedback did you receive? Did the speech persuade them?", type: "lines", lines: 3 },
          { text: "One specific delivery goal for next time:", type: "lines", lines: 2 },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Synthesis: Rhetoric and Critical Thinking",
        instruction: "Reflect on how studying rhetoric has changed the way you engage with persuasive texts — in media, politics, advertising, and everyday conversation.",
        parentTip: "This synthesis question is designed to help students see that rhetorical awareness is not just an English skill — it is a lifelong tool for navigating a world saturated with persuasion.",
        prompts: [
          { text: "How has learning about rhetoric changed the way you listen to or read persuasive texts?", type: "lines", lines: 4 },
          { text: "Can you think of a situation recently where you noticed rhetoric being used around you?", type: "lines", lines: 4 },
          { text: "How will you use rhetorical awareness in your own speaking and writing going forward?", type: "lines", lines: 4 },
        ],
      },
      // 51
      {
        type: "matching",
        title: "Rhetoric in Historical Speeches",
        instruction: "Match each famous speech moment with the rhetorical device or appeal it primarily uses.",
        parentTip: "Studying famous speeches is one of the most enjoyable and efficient ways to see rhetoric at its most deliberate and powerful.",
        left: [
          "'I have a dream...' (repeated throughout King's 1963 speech)",
          "'Ask not what your country can do for you...' (Kennedy, 1961)",
          "'I am a marine biologist with fifteen years of experience...' (establishing credentials)",
          "'Every single day, children are going hungry.' (specific statistic implied)",
          "'Are we really going to stand by and do nothing?'",
        ],
        right: [
          "Rhetorical question",
          "Ethos",
          "Logos",
          "Anaphora",
          "Chiasmus and antithesis",
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Counter-Argument and Rebuttal",
        instruction: "In the most sophisticated persuasive texts, the speaker anticipates and responds to counterarguments. This is called concession and rebuttal, and it is a powerful rhetorical strategy.",
        parentTip: "Acknowledging the opposing view actually strengthens rather than weakens a rhetorical position — it demonstrates intellectual honesty and makes the speaker seem more trustworthy.",
        prompts: [
          { text: "Choose your speech topic. What is the strongest possible argument against your position?", type: "lines", lines: 4 },
          { text: "Write a concession and rebuttal (3–5 sentences): acknowledge what is valid about the counterargument, then explain why your position still holds.", type: "lines", lines: 6 },
          { text: "Why does including a counterargument often strengthen rather than weaken your rhetorical position?", type: "lines", lines: 3 },
        ],
      },
      // 53
      {
        type: "open-response",
        title: "Rhetoric and Visual Argument",
        instruction: "Photographs and visual images can make rhetorical arguments — they can appeal to ethos, pathos, and logos through composition, subject, and context.",
        parentTip: "The famous photograph of the 'Tank Man' at Tiananmen Square is an example of a photograph that made a powerful rhetorical argument without words.",
        prompts: [
          { text: "Choose a powerful visual image (photograph, poster, or infographic). Describe it in detail.", type: "lines", lines: 4 },
          { text: "What rhetorical appeals does it make? How?", type: "lines", lines: 4 },
          { text: "What rhetorical argument does the image make — what is it 'saying' and how does it say it?", type: "lines", lines: 4 },
        ],
      },
      // 54
      {
        type: "true-false",
        title: "Rhetoric: Misconceptions",
        instruction: "Decide whether each common misconception about rhetoric is true or false.",
        statements: [
          { text: "Rhetoric is only relevant to political speeches.", answer: false },
          { text: "The most persuasive argument is always the one with the most evidence.", answer: false },
          { text: "Emotional appeals are always manipulative and should be avoided in ethical arguments.", answer: false },
          { text: "Rhetorical analysis can be applied to visual and multimodal texts as well as written ones.", answer: true },
          { text: "A speaker who uses all three appeals is more likely to persuade a mixed audience.", answer: true },
          { text: "The best way to rebut an argument is to ignore its strongest points.", answer: false },
        ],
      },
      // 55
      {
        type: "home-activity",
        title: "Rhetorical Analysis Portfolio",
        instruction: "This week, build a small portfolio of rhetorical analysis across three different text types.",
        suggestions: [
          "Text type 1: Analyse a short political speech (2–3 minutes) for its use of the three appeals.",
          "Text type 2: Analyse an advertisement for its rhetorical devices and visual rhetoric.",
          "Text type 3: Analyse a social media post or news headline for its rhetorical choices.",
          "For each, write 2–3 sentences of analysis naming specific techniques and explaining their persuasive effect.",
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Rhetoric and Power",
        instruction: "Rhetoric is a form of power — it shapes how people think, feel, and act. Reflect on the relationship between rhetoric and power.",
        parentTip: "This connects rhetorical analysis to the critical literacy skills developed in the previous worksheet — both are ultimately about how language constructs reality and who benefits.",
        prompts: [
          { text: "Who in contemporary society has the most rhetorical power — the ability to reach large audiences with persuasive messages?", type: "lines", lines: 3 },
          { text: "What are the risks when rhetorical power is concentrated in very few voices?", type: "lines", lines: 4 },
          { text: "What rhetorical tools do ordinary people and community organisations use to challenge powerful voices?", type: "lines", lines: 4 },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "Planning an Essay on Rhetoric",
        instruction: "Plan an essay (600–800 words) responding to the question: 'How does your chosen text use rhetorical strategies to persuade its audience?' Your essay should apply the full rhetorical analysis framework.",
        parentTip: "The quality of the plan determines the quality of the essay. Encourage your student to spend at least 15 minutes on planning before writing.",
        prompts: [
          { text: "Thesis statement (specific, arguable, summarising the text's rhetorical strategy):", type: "lines", lines: 3 },
          { text: "Paragraph topics in order (4–5, each with evidence and analytical point):", type: "lines", lines: 8 },
          { text: "What insight will your conclusion arrive at?", type: "lines", lines: 3 },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Drafting the Rhetorical Analysis Essay",
        instruction: "Draft your rhetorical analysis essay (600–800 words) using your plan. Focus on analytical depth: do not just identify devices but explain how each serves the text's rhetorical purpose for its specific audience.",
        parentTip: "The most common weakness in rhetorical analysis essays is that analysis stays at the level of identification. Prompt your student: 'What does this device do to the reader? Why did the author choose this device here, at this moment?'",
        prompts: [
          { text: "Essay draft:", type: "box" },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Revising the Essay for Precision",
        instruction: "Review your rhetorical analysis essay for precision. For each rhetorical observation, ask: (1) Have I named the device precisely? (2) Have I quoted specifically? (3) Have I explained the effect on the audience? (4) Have I connected to the speaker's purpose?",
        parentTip: "Precision in language — using the exact term, the exact quote, the exact explanation — is the single most powerful revision move for analytical essays.",
        prompts: [
          { text: "Choose two paragraphs and revise them for precision using the four-question checklist. Write your revised versions here:", type: "box" },
          { text: "What pattern of imprecision did you notice in your original draft?", type: "lines", lines: 4 },
        ],
      },
      // 60
      {
        type: "tip",
        title: "Tip: Ending With Impact",
        content: "Whether you are ending a speech or an essay, the final words carry disproportionate weight — audiences remember endings. Avoid concluding with a summary ('In conclusion, I have shown...'). Instead, return to a key image or phrase from your opening, or offer a broader insight that the argument has arrived at. Ask yourself: what is the last thing I want my audience to be thinking about? Begin from that answer.",
      },

      // ── EXTENDING 61–100 ──────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Peer Review: Rhetorical Analysis Essay",
        instruction: "If possible, exchange your rhetorical analysis essay with another reader. Complete the peer review below.",
        parentTip: "Parents can conduct this review even without a formal peer — reading critically and giving specific feedback is itself a valuable rhetorical act.",
        prompts: [
          { text: "What is the writer's central argument about the text's rhetorical strategy?", type: "lines", lines: 2 },
          { text: "Which analytical point is most convincing, and why?", type: "lines", lines: 3 },
          { text: "Where does the analysis stay at the level of identification rather than explanation?", type: "lines", lines: 4 },
          { text: "Is the essay's own language precise and analytical throughout?", type: "lines", lines: 3 },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Responding to Feedback",
        instruction: "Read the peer review feedback from Activity 61. Write a brief response: which feedback do you agree with? Which will you act on? Then revise one paragraph in response to the feedback.",
        parentTip: "Learning to receive and act on feedback is a crucial academic skill — students who can use feedback to improve their work develop much faster than those who defend their first draft.",
        prompts: [
          { text: "Your response to the feedback:", type: "lines", lines: 4 },
          { text: "Revised paragraph in response to feedback:", type: "box" },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Rhetorical Self-Assessment",
        instruction: "Reflect honestly on your development as a rhetorical analyst and persuasive writer throughout this worksheet.",
        prompts: [
          { text: "Which concept in this worksheet was most new or challenging?", type: "lines", lines: 3 },
          { text: "Which rhetorical appeal do you use most naturally in your own writing?", type: "lines", lines: 2 },
          { text: "What is the most significant thing you have learned about how persuasion works?", type: "lines", lines: 4 },
          { text: "What aspect of rhetoric will you focus on developing further?", type: "lines", lines: 3 },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Writing an Advanced Persuasive Text",
        instruction: "Write a short persuasive essay (400–600 words) on a topic of genuine concern to you. Deliberately deploy all three appeals and at least four rhetorical devices. Annotate the final version to label your techniques.",
        parentTip: "Students who can both write persuasively and explain their own rhetorical choices are demonstrating the dual skill of composition and metacognition. Both are assessed at Year 9.",
        prompts: [
          { text: "Your annotated persuasive essay:", type: "box" },
          { text: "List the appeals and devices you used and evaluate how effective each was:", type: "lines", lines: 6 },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Applying Rhetoric to Real Debate",
        instruction: "Prepare to argue both sides of a genuine debate topic. For each side, plan the rhetorical strategy: which appeals will you use, which devices, and how will you handle the counterargument.",
        parentTip: "Being able to argue both sides of an issue is one of the most valuable intellectual exercises — it builds empathy, sharpens reasoning, and reveals the complexity of real disputes.",
        prompts: [
          { text: "Debate topic:", type: "lines", lines: 1 },
          { text: "Affirmative side rhetorical plan (appeals, devices, counterargument strategy):", type: "lines", lines: 5 },
          { text: "Negative side rhetorical plan (appeals, devices, counterargument strategy):", type: "lines", lines: 5 },
          { text: "After planning both sides: which side has the stronger rhetorical resources, and why?", type: "lines", lines: 3 },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Rhetoric and the Media Landscape",
        instruction: "Analyse how the contemporary media landscape shapes the rhetoric that is most effective in public discourse.",
        parentTip: "This connects rhetoric to the structure of contemporary communication — social media, short attention spans, and algorithmic amplification all shape which rhetorical strategies succeed.",
        prompts: [
          { text: "How has social media changed the rhetorical strategies that are most effective in public discourse? Consider: length, emotion, imagery, and the role of algorithms.", type: "lines", lines: 5 },
          { text: "Is logos (evidence-based argument) more or less effective in the contemporary media landscape compared to pathos? Why?", type: "lines", lines: 4 },
          { text: "What does this suggest about the challenges of public reason in the contemporary world?", type: "lines", lines: 4 },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Comparative Analysis: Two Speeches",
        instruction: "Write a comparative rhetorical analysis of two speeches from different contexts (e.g. a historical speech and a contemporary one, or speeches from two different cultures). Focus on how context shapes rhetorical strategy.",
        parentTip: "Encourage a structure that integrates the comparison — moving between the texts — rather than treating them separately.",
        prompts: [
          { text: "Your comparative rhetorical analysis:", type: "box" },
          { text: "What does the comparison reveal about how context shapes rhetoric?", type: "lines", lines: 4 },
        ],
      },
      // 68
      {
        type: "home-activity",
        title: "Creating Rhetorical Content",
        instruction: "This week, create a piece of rhetorical content for a real purpose.",
        suggestions: [
          "Write a letter to your local council, a newspaper editor, or a public figure arguing for something you believe in. Use all three appeals deliberately.",
          "Create a short video or audio recording advocating for a cause. Plan the rhetoric before you record.",
          "Write a persuasive social media post on a public issue. In a separate note, annotate the rhetorical choices you made.",
          "Prepare and deliver a 2-minute 'elevator pitch' for an idea you want to propose to your family, community, or local organisation.",
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Rhetoric and Democratic Participation",
        instruction: "In a democracy, the ability to argue effectively is a form of civic power. Reflect on the relationship between rhetoric and democratic life.",
        parentTip: "This question connects English skills to civic education — the ability to participate in democratic discourse is one of the most important outcomes of education in rhetoric.",
        prompts: [
          { text: "How does the ability to argue effectively — to use rhetoric well — give citizens power in a democracy?", type: "lines", lines: 4 },
          { text: "What are the risks when some voices are far more rhetorically powerful than others?", type: "lines", lines: 4 },
          { text: "What responsibility does rhetorical education place on individuals who develop these skills?", type: "lines", lines: 4 },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Research: Studying a Master Rhetorician",
        instruction: "Choose a speaker or writer who you consider a master of rhetoric — historical or contemporary, from any field. Research their rhetorical style.",
        parentTip: "This independent research activity deepens engagement with rhetoric by connecting it to a real figure your student admires.",
        prompts: [
          { text: "Who is your chosen rhetorician and why did you choose them?", type: "lines", lines: 3 },
          { text: "What are the distinctive features of their rhetorical style? Provide specific examples.", type: "lines", lines: 5 },
          { text: "Which of the three appeals do they favour? What devices are most characteristic of their style?", type: "lines", lines: 4 },
          { text: "What can you learn from their style and apply to your own persuasive writing?", type: "lines", lines: 3 },
        ],
      },
      // 71
      {
        type: "open-response",
        title: "Extended Essay: Complete Draft",
        instruction: "If you have not yet completed a full draft of your rhetorical analysis essay, do so now. Aim for 700–900 words. If you have a draft, use this activity for a sustained revision session.",
        parentTip: "For revision sessions: read the draft aloud together. Listen for places where the analysis is vague, where the evidence is quoted without being analysed, or where the argument loses its thread.",
        prompts: [
          { text: "Complete essay draft or revision record:", type: "box" },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Rhetoric in Your Own Voice",
        instruction: "Reflect on the rhetorical qualities of your own natural voice — in writing, in speaking, in argument.",
        prompts: [
          { text: "Do you tend to use more ethos, pathos, or logos in your natural communication style? Why do you think this is?", type: "lines", lines: 4 },
          { text: "What rhetorical device do you find yourself using instinctively?", type: "lines", lines: 3 },
          { text: "What rhetorical skill would most significantly improve your effectiveness as a communicator?", type: "lines", lines: 3 },
        ],
      },
      // 73
      {
        type: "true-false",
        title: "Final Review: Rhetoric Concepts",
        instruction: "A final review of key rhetorical concepts. Decide whether each statement is true or false.",
        statements: [
          { text: "Anaphora is repetition of a phrase at the end of successive clauses.", answer: false },
          { text: "A steelman argument engages with the strongest possible version of the opposing view.", answer: true },
          { text: "The rhetorical situation shapes what can be said effectively and how.", answer: true },
          { text: "The most effective speeches rely solely on logos to be credible.", answer: false },
          { text: "Chiasmus reverses grammatical structure across two clauses.", answer: true },
          { text: "Identifying rhetoric in a text means you should not be persuaded by it.", answer: false },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Teaching Rhetoric to Someone Else",
        instruction: "Create a one-page guide to the three rhetorical appeals for a Year 7 student. Use examples they would find engaging and language they would understand.",
        parentTip: "Teaching a concept to someone else is the deepest form of understanding — this task reveals what your student truly knows versus what they can look up.",
        prompts: [
          { text: "Your Year 7 rhetoric guide:", type: "box" },
          { text: "What was hardest to explain simply? Why?", type: "lines", lines: 3 },
        ],
      },
      // 75
      {
        type: "tip",
        title: "Tip: Rhetoric in Your Extended Analytical Responses",
        content: "When writing extended analytical responses on any text — not just speeches — look for rhetorical elements. Novelists use pathos through character and scene. Essayists use logos through structured argument. Poets use ethos through voice. The three appeals and the major rhetorical devices appear across all forms of writing. Training yourself to see rhetoric everywhere makes you a more complete analytical reader.",
      },
      // 76
      {
        type: "open-response",
        title: "Rhetoric Across Genres",
        instruction: "Identify and analyse a rhetorical device or appeal in a genre other than a speech — a poem, a novel extract, a film, or a news article. Explain how the same device functions differently in a different genre.",
        parentTip: "Cross-genre application of rhetorical analysis is sophisticated Year 9 thinking. The most interesting observation is usually about how the genre shapes how the device operates.",
        prompts: [
          { text: "Text, genre, and the device or appeal you are analysing:", type: "lines", lines: 3 },
          { text: "How does this device or appeal function in this genre? How is it similar to and different from its function in a speech?", type: "lines", lines: 5 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Portfolio: Your Best Rhetorical Writing",
        instruction: "Select the piece of persuasive writing from this worksheet that you are most proud of. Write a short framing statement explaining what it demonstrates about your rhetorical skills.",
        parentTip: "Portfolio thinking — selecting and framing one's best work — builds metacognitive awareness of strengths. Encourage genuine pride in strong work.",
        prompts: [
          { text: "Which piece of writing did you select, and why?", type: "lines", lines: 3 },
          { text: "What rhetorical skills does this piece demonstrate?", type: "lines", lines: 4 },
          { text: "What would you want to improve about it with another revision?", type: "lines", lines: 3 },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Rhetoric and the Future",
        instruction: "Reflect on how an understanding of rhetoric will serve you in the next decade — in education, in work, and in civic life.",
        parentTip: "This forward-looking reflection helps students understand why they are learning these skills — connecting study to genuine future relevance is motivating and meaningful.",
        prompts: [
          { text: "In what future contexts do you anticipate needing to be persuasive?", type: "lines", lines: 3 },
          { text: "In what future contexts will you most need to be able to analyse and resist persuasion?", type: "lines", lines: 3 },
          { text: "What is the single most important thing you will take from this study of rhetoric?", type: "lines", lines: 3 },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Extended Independent Rhetorical Analysis",
        instruction: "Choose a persuasive text you have not studied in class — something from current public life. Produce an independent rhetorical analysis (600–800 words) demonstrating the full range of skills developed in this worksheet.",
        parentTip: "Independent application to a self-chosen text is the highest level of skill demonstration — it shows that the skills have genuinely transferred beyond the scaffolded activities.",
        prompts: [
          { text: "Text details:", type: "lines", lines: 2 },
          { text: "Your independent rhetorical analysis:", type: "box" },
        ],
      },
      // 80
      {
        type: "spark",
        title: "Spark: Words That Changed the World",
        content: "History has pivoted on acts of rhetoric. Lincoln's Gettysburg Address — 272 words — helped define the moral purpose of the American Civil War. Churchill's 'We shall fight on the beaches' speech held a nation together in its darkest moment. Gough Whitlam's dismissal speech turned a constitutional crisis into a national story. These words moved people to think, to feel, and to act differently. Rhetoric is not merely a school subject — it is one of the most powerful things human beings have ever developed. Learn it, use it, and recognise it when others use it on you.",
      },
      // 81
      {
        type: "open-response",
        title: "Final Synthesis: What Rhetoric Is",
        instruction: "Write a 300-word personal statement on what you now understand rhetoric to be — its definition, its power, its ethical dimensions, and its relevance to your life.",
        prompts: [
          { text: "Your personal statement on rhetoric:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Creating a Rhetorical Device Glossary",
        instruction: "Create an illustrated glossary of at least ten rhetorical devices. For each: the name, a definition in your own words, and an original example you have written yourself.",
        parentTip: "Writing original examples is far more valuable than copying definitions. The act of creating an example demonstrates genuine understanding of how the device functions.",
        prompts: [
          { text: "Your rhetorical device glossary (10 devices minimum):", type: "box" },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Rhetoric in Literature",
        instruction: "Examine how a fictional character uses rhetoric within a narrative — a villain's persuasive speech, a lawyer's closing argument, a politician's campaign speech. Apply full rhetorical analysis to this fictional speech.",
        parentTip: "Analysing rhetoric within fiction requires the student to analyse both the character's rhetoric and the author's choice to write rhetoric this way.",
        prompts: [
          { text: "Text and fictional speech details:", type: "lines", lines: 3 },
          { text: "Your rhetorical analysis of the fictional speech:", type: "box" },
          { text: "What does the author achieve by writing this character as rhetorically skilled (or unskilled)?", type: "lines", lines: 4 },
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "Extending: High-Level Rhetorical Concepts",
        instruction: "These questions address the most advanced concepts in rhetorical analysis.",
        questions: [
          {
            prompt: "The concept of 'kairos' in rhetoric refers to:",
            options: [
              "A type of logical fallacy",
              "The opportune or right moment for a rhetorical act",
              "The speaker's credibility",
              "The emotional appeal of a narrative",
            ],
            answer: "The opportune or right moment for a rhetorical act",
          },
          {
            prompt: "When a speaker adjusts their rhetoric mid-speech in response to the audience's reactions, this demonstrates:",
            options: [
              "Logos",
              "Audience analysis and adaptive rhetorical skill",
              "Manipulative pathos",
              "Formal register",
            ],
            answer: "Audience analysis and adaptive rhetorical skill",
          },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Applying Kairos",
        instruction: "Kairos — the right moment — is a concept from Greek rhetoric. It suggests that the same argument can succeed or fail depending on when it is delivered. Reflect on this concept.",
        parentTip: "Kairos is the rhetorical concept most relevant to real-world situations: the right argument at the wrong moment is ineffective. This concept resonates with students when connected to their own experience of timing.",
        prompts: [
          { text: "Can you think of a situation where the timing of an argument mattered as much as its content? Describe it.", type: "lines", lines: 4 },
          { text: "Apply the concept of kairos to a historical or contemporary speech: why was the timing of this speech significant?", type: "lines", lines: 4 },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Advanced Essay: Rhetoric and Power",
        instruction: "Write an essay (600–900 words) on the following question: 'To what extent is rhetoric a tool of power, and how can ordinary citizens use rhetorical awareness to resist manipulation?' Draw on specific texts and your rhetorical analysis skills.",
        parentTip: "There is no single correct answer — look for evidence of sustained reasoning, specific examples, and genuine engagement with the complexity of the question.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 87
      {
        type: "home-activity",
        title: "Rhetoric in the Community",
        instruction: "Look for rhetoric in your local community this week — in public spaces, local media, or community events.",
        suggestions: [
          "Read a local newspaper editorial and identify the rhetorical strategy: what appeals and devices does the writer use?",
          "If your community has a public meeting or local council session, attend or watch online and observe the rhetoric used by speakers.",
          "Find a piece of public signage or community communication (a council notice, a charity poster, a local campaign) and conduct a brief rhetorical analysis.",
          "Write a short reflective journal entry: where did you encounter rhetoric in your community this week? What did you notice?",
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Rhetorical Analysis: Examination Practice",
        instruction: "Complete the following timed practice: Choose a persuasive text and write a full rhetorical analysis in 45 minutes. This simulates an examination condition.",
        parentTip: "Timed writing is a distinct skill from untimed writing — it requires having internalised analytical frameworks well enough to apply them under pressure.",
        prompts: [
          { text: "Text chosen:", type: "lines", lines: 2 },
          { text: "Your timed rhetorical analysis:", type: "box" },
          { text: "Self-evaluation: What worked well under time pressure? What was hardest?", type: "lines", lines: 4 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "The Rhetoric of Your Own Life",
        instruction: "Identify a situation in your own life where you regularly need to be persuasive — with family, in a learning context, in a community or online space. How might the rhetorical skills from this worksheet help you in that situation?",
        parentTip: "This most personal of applications brings the study of rhetoric home — it is the question of how an academic skill becomes a life skill.",
        prompts: [
          { text: "Describe the situation:", type: "lines", lines: 3 },
          { text: "Which rhetorical appeals and devices would be most useful?", type: "lines", lines: 4 },
          { text: "Write a short persuasive statement for that situation, deploying your rhetorical skills:", type: "box" },
        ],
      },
      // 90
      {
        type: "tip",
        title: "Tip: Rhetoric Is a Two-Way Skill",
        content: "The skills of rhetoric are exactly doubled: learning to use rhetoric effectively makes you a stronger persuader; learning to analyse rhetoric makes you a more resistant audience. Both matter. A society of rhetorically educated citizens — who can make arguments and recognise manipulation — is a more democratic and resilient society. You have been building both sides of this skill throughout this worksheet.",
      },
      // 91
      {
        type: "open-response",
        title: "Advanced: Writing for a Public Audience",
        instruction: "Write a piece of public rhetoric — a letter to the editor, a community statement, or a short public speech — on an issue that genuinely matters to you. This piece should be suitable for actual publication or delivery.",
        parentTip: "If your student's piece is genuinely strong, encourage them to submit it — to a local newspaper, a school newsletter, or a community organisation. Real audiences are the most powerful motivators for excellent rhetoric.",
        prompts: [
          { text: "Your public rhetoric piece:", type: "box" },
          { text: "What was most challenging about writing for a real public audience?", type: "lines", lines: 3 },
          { text: "What rhetorical choices did you make differently because of the public audience?", type: "lines", lines: 3 },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Synthesis: Rhetoric and Critical Literacy",
        instruction: "Both rhetorical analysis and critical literacy are tools for understanding how language and power intersect. Write a short reflective piece (200–300 words) on how these two frameworks complement each other.",
        prompts: [
          { text: "Your reflective synthesis:", type: "box" },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Independent Project: Rhetorical Study",
        instruction: "Design and complete your own rhetorical study project. Choose a rhetorical phenomenon that interests you (e.g. the rhetoric of climate advocacy, the rhetoric of sports commentary, the rhetoric of a specific public figure) and produce an analytical piece of 600–800 words.",
        parentTip: "Self-directed learning at this level is genuinely impressive. Support the project with research resources and encourage your student to follow their genuine curiosity.",
        prompts: [
          { text: "Your project topic and approach:", type: "lines", lines: 4 },
          { text: "Your analytical piece:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Reflecting on Growth: Rhetoric",
        instruction: "Look back at your earliest activities in this worksheet (Activities 1–10). How has your understanding of rhetoric grown? What can you do now that you could not do at the start?",
        prompts: [
          { text: "Your reflection on growth:", type: "lines", lines: 6 },
          { text: "What is the most significant single insight you have gained about rhetoric?", type: "lines", lines: 3 },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Rhetoric and Other Subjects",
        instruction: "Rhetorical skills transfer across all subjects. Choose one other subject you study and explain how rhetorical analysis or persuasive writing skills are relevant to it.",
        prompts: [
          { text: "Subject and connection to rhetoric:", type: "lines", lines: 3 },
          { text: "Give one specific example of how rhetorical skill would help you in this subject:", type: "lines", lines: 4 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Writing Your Rhetorical Manifesto",
        instruction: "Write a short personal manifesto about your approach to rhetoric — both as a speaker/writer and as an audience member. What principles will guide your use of rhetoric and your response to it?",
        prompts: [
          { text: "Your rhetorical manifesto:", type: "box" },
        ],
      },
      // 97
      {
        type: "true-false",
        title: "Final Mastery Check: Rhetoric",
        instruction: "A final mastery check across all the rhetorical concepts in this worksheet.",
        statements: [
          { text: "Ethos, pathos, and logos were named by Aristotle in his work Rhetoric.", answer: true },
          { text: "Parallelism is a rhetorical device that uses contrasting parallel structures.", answer: false },
          { text: "A false dilemma presents only two options when more exist.", answer: true },
          { text: "Kairos refers to the speaker's character and moral standing.", answer: false },
          { text: "Anadiplosis begins a new clause with the last word of the preceding clause.", answer: true },
          { text: "The most ethical speakers never use pathos.", answer: false },
        ],
      },
      // 98
      {
        type: "home-activity",
        title: "Rhetoric: Ongoing Practice",
        instruction: "Rhetoric is a lifelong skill. Here are habits to maintain beyond this worksheet.",
        suggestions: [
          "Listen to one speech or podcast per week and identify at least one rhetorical technique you notice.",
          "When you write any formal text — email, essay, application — ask: what is my ethos strategy? What is my logos evidence? Is there a place for appropriate pathos?",
          "Keep a 'rhetorical observation' journal: one entry per week on a persuasive act you encountered.",
          "Read the speeches of figures you admire and study their rhetorical style. What can you borrow?",
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Extended Examination Practice: Rhetoric Essay",
        instruction: "Respond to the following examination-style prompt in 800 words or fewer: 'Analyse how a persuasive text of your choice uses rhetorical strategies to achieve its purpose. Your response should demonstrate a thorough understanding of the three appeals and at least three specific rhetorical devices.'",
        parentTip: "This is the culminating assessment task for the rhetoric worksheet. Treat it as a genuine examination practice — encourage your student to plan before writing and to review after.",
        prompts: [
          { text: "Your extended examination response:", type: "box" },
          { text: "Self-evaluation against Year 9 criteria: What mark do you think you have achieved? What specific evidence supports this?", type: "lines", lines: 5 },
        ],
      },
      // 100
      {
        type: "spark",
        title: "Spark: Speaking Is a Form of Action",
        content: "The philosopher J.L. Austin pointed out that some words do not just describe the world — they change it. When you make a promise, you create an obligation. When you deliver a verdict, you determine a fate. When you give a speech that moves people to march, to vote, or to change their minds, your words become actions. Rhetoric at its best is not talking about the world — it is participating in it. What do you want to say?",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "matching",
        title: "Multimodal Terms: Modes of Meaning",
        instruction: "Match each mode of meaning with its correct definition.",
        parentTip: "Understanding that texts make meaning through multiple simultaneous modes is the central concept of multimodal literacy.",
        left: ["Visual mode", "Audio mode", "Linguistic mode", "Spatial mode", "Gestural mode"],
        right: [
          "Meaning made through body language, movement, and performance",
          "Meaning made through the arrangement and layout of elements in space",
          "Meaning made through images, colour, composition, and camera work",
          "Meaning made through words, grammar, and written or spoken language",
          "Meaning made through sound, music, voice, and silence",
        ],
      },
      // 2
      {
        type: "true-false",
        title: "Multimodal Analysis: True or False?",
        instruction: "Decide whether each statement about multimodal texts is true or false.",
        statements: [
          { text: "A multimodal text makes meaning through more than one mode simultaneously.", answer: true },
          { text: "Film is a purely visual text.", answer: false },
          { text: "Advertisements are typically multimodal texts.", answer: true },
          { text: "A close-up shot creates a sense of distance and anonymity.", answer: false },
          { text: "Diegetic sound exists within the world of the film.", answer: true },
          { text: "Colour in a film or advertisement is never a deliberate choice.", answer: false },
        ],
      },
      // 3
      {
        type: "matching",
        title: "Film Techniques and Their Meanings",
        instruction: "Match each film technique with the effect it typically creates.",
        left: ["High angle shot", "Low angle shot", "Close-up shot", "Wide shot", "Warm golden light", "Cold blue light"],
        right: [
          "Suggests alienation, threat, or clinical detachment",
          "Creates intimacy; reveals emotion and individual detail",
          "Makes a character seem small, vulnerable, or powerless",
          "Establishes context; can suggest isolation or grandeur",
          "Suggests safety, nostalgia, or warmth",
          "Makes a character seem powerful, imposing, or threatening",
        ],
      },
      // 4
      {
        type: "circle-correct",
        title: "Diegetic or Non-Diegetic?",
        instruction: "For each sound, circle whether it is diegetic (exists in the world of the film) or non-diegetic (added in editing).",
        questions: [
          { prompt: "A character switches on a radio and music plays from it.", options: ["Diegetic", "Non-diegetic"] },
          { prompt: "Dramatic orchestral music swells as the hero faces the villain.", options: ["Diegetic", "Non-diegetic"] },
          { prompt: "A phone rings and a character answers it.", options: ["Diegetic", "Non-diegetic"] },
          { prompt: "Haunting violin music underscores a flashback sequence.", options: ["Diegetic", "Non-diegetic"] },
          { prompt: "Characters speak dialogue to each other.", options: ["Diegetic", "Non-diegetic"] },
          { prompt: "A voiceover narrates events not shown on screen.", options: ["Diegetic", "Non-diegetic"] },
        ],
      },
      // 5
      {
        type: "fill-in-blank",
        title: "Multimodal Vocabulary",
        instruction: "Complete each sentence using the correct multimodal term: [composition, framing, mise-en-scène, editing, colour palette, diegetic].",
        sentences: [
          { text: "The arrangement of all visual elements within a frame — lighting, setting, costume, and actors — is called ___.", blanks: ["mise-en-scène"] },
          { text: "The overall range of colours used consistently across a film or advertisement is called the ___.", blanks: ["colour palette"] },
          { text: "The way elements are arranged within the frame to direct the viewer's eye is called ___.", blanks: ["composition"] },
          { text: "Sound that exists within the world of the film — that characters can hear — is called ___.", blanks: ["diegetic"] },
          { text: "The decisions about what is shown within the borders of the screen is called ___.", blanks: ["framing"] },
          { text: "The process of selecting, sequencing, and cutting shots is called ___.", blanks: ["editing"] },
        ],
      },
      // 6
      {
        type: "sorting",
        title: "Visual, Audio, or Linguistic?",
        instruction: "Sort each element into the correct column based on which mode of meaning it belongs to.",
        columns: ["Visual", "Audio", "Linguistic"],
        items: [
          { label: "Camera angle" },
          { label: "Music tempo" },
          { label: "Dialogue" },
          { label: "Colour saturation" },
          { label: "Sound effects" },
          { label: "Written tagline" },
          { label: "Lighting" },
          { label: "Voice tone" },
          { label: "Subtitle text" },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Visual Analysis: Close Reading of an Image",
        instruction: "Choose a still image — a film frame, an advertisement, a news photograph, or any powerful image you have access to. Analyse it using the questions below.",
        parentTip: "A good image for this activity has multiple layers — something where the foreground, background, lighting, and composition all seem to be doing deliberate work. Film stills are excellent for this.",
        prompts: [
          { text: "Describe the image in detail: what is in the foreground? What is in the background? What colours are dominant?", type: "lines", lines: 4 },
          { text: "What is the camera angle or vantage point? What effect does this create — who or what seems powerful, vulnerable, or important?", type: "lines", lines: 4 },
          { text: "What mood or atmosphere does the image create, and which specific visual elements create it?", type: "lines", lines: 4 },
          { text: "If there is text in the image (e.g. in an advertisement), how does the relationship between the text and the image create meaning?", type: "lines", lines: 3 },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Editing and Meaning",
        instruction: "Choose the best answer for each question about editing in film.",
        questions: [
          {
            prompt: "Fast editing (many rapid cuts) in an action sequence creates a sense of:",
            options: ["Reflection and stillness", "Urgency, energy, and chaos", "Mystery and suspense", "Warmth and familiarity"],
            answer: "Urgency, energy, and chaos",
          },
          {
            prompt: "A long, slow take (extended shot without cutting) is most likely to create a feeling of:",
            options: ["Urgency", "Humour", "Space, contemplation, or discomfort", "Visual confusion"],
            answer: "Space, contemplation, or discomfort",
          },
          {
            prompt: "Cross-cutting (alternating between two different scenes) is typically used to suggest:",
            options: ["A single character's internal thoughts", "Two events happening simultaneously or in parallel", "A flashback to the past", "The end of the film"],
            answer: "Two events happening simultaneously or in parallel",
          },
        ],
      },
      // 9
      {
        type: "open-response",
        title: "Sound and Silence",
        instruction: "Sound and silence are both powerful multimodal tools. Analyse the use of sound in a film or advertisement clip you have watched.",
        parentTip: "Students often focus on the visual in multimodal analysis. Prompting specific attention to sound — especially silence, which is often overlooked — produces the most interesting observations.",
        prompts: [
          { text: "Describe the sound design of the clip: what sounds are present? What is the music like?", type: "lines", lines: 3 },
          { text: "Is there a moment of silence or near-silence? What is its effect?", type: "lines", lines: 3 },
          { text: "How does the music support or contrast with what is shown visually?", type: "lines", lines: 4 },
        ],
      },
      // 10
      {
        type: "true-false",
        title: "Colour and Meaning",
        instruction: "Decide whether each statement about colour in multimodal texts is true or false.",
        statements: [
          { text: "Saturated, vivid colours often suggest energy, passion, or heightened emotion.", answer: true },
          { text: "Desaturated or grey-toned images always mean the film is old.", answer: false },
          { text: "Warm tones (gold, amber, red) often suggest nostalgia, danger, or passion depending on context.", answer: true },
          { text: "Cool blues are commonly associated with clinical detachment, isolation, or threat.", answer: true },
          { text: "Colour choices in advertisements are always incidental rather than deliberate.", answer: false },
          { text: "A consistent colour palette across a film creates visual coherence and can reinforce themes.", answer: true },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Analysing a Film Clip: Multiple Modes",
        instruction: "Choose a short clip (2–4 minutes) from a film you are studying or an advertisement that interests you. Watch it at least twice before answering.",
        parentTip: "Watching twice is important — the first time, students respond emotionally; the second time, they can observe the technical choices that created that response. Both viewing experiences are valuable.",
        prompts: [
          { text: "Identify one visual technique (camera angle, lighting, colour, composition) and explain what meaning it creates.", type: "lines", lines: 4 },
          { text: "Identify one audio technique (music, sound effects, dialogue tone, silence) and explain what meaning it creates.", type: "lines", lines: 4 },
          { text: "How do the visual and audio elements work together at one specific moment? What is the combined effect?", type: "lines", lines: 4 },
          { text: "What audience does this text seem designed for? How do the multimodal choices reflect that target audience?", type: "lines", lines: 3 },
        ],
      },
      // 12
      {
        type: "fill-in-blank",
        title: "Analytical Language for Multimodal Analysis",
        instruction: "Complete each sentence using appropriate analytical language for multimodal texts.",
        parentTip: "Students often struggle to write analytically about visual and audio elements — providing precise sentence models scaffolds the transition from description to analysis.",
        sentences: [
          { text: "The use of a ___ shot positions the viewer to see the character as powerful, reinforcing the film's theme of ___.", blanks: ["low-angle", "..."] },
          { text: "The ___ colour palette creates a sense of ___, which reflects the character's emotional state.", blanks: ["...", "..."] },
          { text: "When the music ___, the viewer is positioned to feel ___ toward the character on screen.", blanks: ["...", "..."] },
          { text: "The combination of ___ editing and ___ music creates an effect of ___ in this sequence.", blanks: ["...", "...", "..."] },
        ],
      },
      // 13
      {
        type: "open-response",
        title: "Composition and the Viewer's Eye",
        instruction: "Composition is the arrangement of elements within the frame to direct the viewer's attention and create meaning. Analyse the composition of a still image or film frame.",
        parentTip: "The rule of thirds, leading lines, and foreground/background relationships are all composition techniques worth knowing. If your student is unfamiliar with these, spend a few minutes exploring them together with a Google image search before this activity.",
        prompts: [
          { text: "Describe the composition of the image: where is the main subject placed? What is in the foreground and background?", type: "lines", lines: 4 },
          { text: "How does the composition direct your eye? What do you look at first, and why?", type: "lines", lines: 3 },
          { text: "What does the compositional choice suggest about what is important in this image?", type: "lines", lines: 3 },
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Written Multimodal Analysis Paragraph",
        instruction: "Write one well-structured analytical paragraph about the clip or image you studied. Use the structure: name the technique, describe what it does, and connect it to the text's overall meaning or theme.",
        parentTip: "Encourage your student to be specific: 'the camera' is less precise than 'a close-up on the character's hands', which is less precise than 'a close-up on the character's hands, trembling slightly, filmed from slightly below.' Specificity is evidence.",
        prompts: [
          { text: "Your multimodal analysis paragraph:", type: "box" },
          { text: "Does your paragraph name a specific technique, provide evidence, explain its effect, and connect to a theme? Check each element and annotate your paragraph:", type: "lines", lines: 4 },
        ],
      },
      // 15
      {
        type: "tip",
        title: "Tip: The Three Questions of Multimodal Analysis",
        content: "When analysing any element of a multimodal text, ask three questions: (1) What is it? (Name the specific technique — not just 'camera' but 'a low-angle close-up'.) (2) What does it do? (Describe the visual or audio effect.) (3) Why does it matter? (Connect to meaning, theme, or audience positioning.) All three questions must be answered for analysis to be complete.",
      },
      // 16
      {
        type: "multiple-choice",
        title: "Multimodal Analysis of Advertising",
        instruction: "Choose the best answer for each question about multimodal analysis in advertising.",
        questions: [
          {
            prompt: "In an advertisement, the positioning of the product prominently in the foreground while people are shown in the background suggests:",
            options: [
              "The people are more important than the product",
              "The product is the central value — people are there to endorse it",
              "The advertisement has poor composition",
              "The background is more significant than the foreground",
            ],
            answer: "The product is the central value — people are there to endorse it",
          },
          {
            prompt: "An advertisement that uses slow-motion footage of a family laughing together is primarily using which mode of meaning?",
            options: [
              "Linguistic mode only",
              "Spatial and gestural modes",
              "Visual and gestural modes simultaneously",
              "Audio mode only",
            ],
            answer: "Visual and gestural modes simultaneously",
          },
        ],
      },
      // 17
      {
        type: "sorting",
        title: "Technique: What Does It Do?",
        instruction: "Match each multimodal technique with the meaning or effect it typically creates. Sort into: suggests power/dominance or suggests vulnerability/smallness.",
        columns: ["Suggests power or dominance", "Suggests vulnerability or smallness"],
        items: [
          { label: "Low-angle shot of a character" },
          { label: "High-angle shot of a character" },
          { label: "Character occupies full frame" },
          { label: "Character shown in far distance of wide shot" },
          { label: "Dramatic, swelling orchestral music" },
          { label: "Quiet, lonely sound design" },
          { label: "Warm golden spotlight on character" },
          { label: "Character in shadow or darkness" },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Applying Multimodal Analysis to Social Media",
        instruction: "Apply multimodal analysis to a social media post that includes image and text together (e.g. an Instagram post, a promotional post, or an infographic).",
        parentTip: "Social media posts are compact multimodal texts — every element is constrained by space and must work hard. This makes them excellent for close multimodal analysis.",
        prompts: [
          { text: "Describe the post: what does it show? What does the text say?", type: "lines", lines: 3 },
          { text: "How do the visual and linguistic modes work together (or in tension)?", type: "lines", lines: 4 },
          { text: "What choices of colour, composition, or typography carry meaning? What do they contribute?", type: "lines", lines: 4 },
        ],
      },
      // 19
      {
        type: "home-activity",
        title: "Multimodal Observation",
        instruction: "This week, observe the multimodal texts you encounter in daily life.",
        suggestions: [
          "Choose one advertisement (TV, online, or print) and watch it twice: once for emotional response, once to observe the specific techniques used.",
          "Pause a film you are watching at a moment of high drama or emotion. Describe exactly what the camera, lighting, and sound are doing.",
          "Find a news photograph and analyse its composition: where is the subject, what is in the background, and what does the framing suggest?",
          "Look at a website homepage and notice: how does the layout and colour guide your eye? What is foregrounded and what is backgrounded?",
        ],
      },
      // 20
      {
        type: "spark",
        title: "Spark: Seeing and Thinking",
        content: "The philosopher John Berger wrote that 'Seeing comes before words. The child looks and recognises before it can speak.' But critical seeing — analysing what we see and how it makes meaning — is a learned skill. When you learn to see camera angles, colour choices, and sound design as deliberate rhetorical acts, you become a different kind of viewer: someone who sees the apparatus behind the image, not just the image itself. That critical vision changes everything.",
      },

      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "TEEL Paragraph: Multimodal Analysis",
        instruction: "Write one TEEL paragraph analysing how a specific visual or audio technique creates meaning in a film or advertisement you are studying. Name the technique precisely, give specific evidence, explain the effect on the audience, and link to the text's overall purpose or theme.",
        parentTip: "Encourage precise language: not 'the camera zooms in' but 'a slow close-up on the character's face reveals...' Precision is what distinguishes analysis from description.",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
          { text: "Check: Have you named the technique precisely? Have you explained the effect on the audience (not just described what the camera does)? If not, revise.", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "matching",
        title: "Advanced Film Terms",
        instruction: "Match each advanced film term with its correct definition.",
        parentTip: "Using advanced film terminology in analysis demonstrates genuine technical knowledge and makes analytical writing more precise and convincing.",
        left: ["Mise-en-scène", "Cinematography", "Montage", "Voiceover", "Rack focus"],
        right: [
          "A narration delivered over images by a voice not visible on screen",
          "The editing technique of combining shots to create a sequence of meaning",
          "Everything placed in front of the camera — setting, costume, lighting, actors",
          "Shifting focus from one object to another within a single shot",
          "The art of camera work — angles, movement, lighting, and framing",
        ],
      },
      // 23
      {
        type: "fill-in-blank",
        title: "Advanced Multimodal Vocabulary",
        instruction: "Complete each sentence using the advanced vocabulary term: [montage, voiceover, mise-en-scène, rack focus, cinematography, jump cut].",
        sentences: [
          { text: "The overall visual design of a scene — including lighting, setting, costumes, and actor placement — is called the ___.", blanks: ["mise-en-scène"] },
          { text: "A ___ is a sequence of shots edited together to imply a period of time passing or a series of related events.", blanks: ["montage"] },
          { text: "A ___ shifts the camera's focus from one subject to another within a single shot, often used to show a shift in attention or significance.", blanks: ["rack focus"] },
          { text: "A ___ cut removes a section of a continuous action, creating a disorienting or energetic effect.", blanks: ["jump"] },
          { text: "A ___ provides narration from a character or narrator not currently visible on screen.", blanks: ["voiceover"] },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Multimodal Analysis of a Film Opening",
        instruction: "Film openings are particularly rich sites of multimodal analysis — directors use the first few minutes to establish character, theme, tone, and audience expectation. Analyse the opening of a film you are studying.",
        parentTip: "Opening sequences reward close attention — directors know the audience is forming their first impressions. Every choice in the first three minutes is highly deliberate.",
        prompts: [
          { text: "Describe the opening sequence: what is shown, in what order, using what shots?", type: "lines", lines: 4 },
          { text: "Analyse the sound design of the opening: what music, diegetic sound, or silence is used?", type: "lines", lines: 4 },
          { text: "What tone, themes, and character expectations does the opening establish? How do the multimodal elements create this?", type: "lines", lines: 4 },
        ],
      },
      // 25
      {
        type: "multiple-choice",
        title: "Positioning the Audience",
        instruction: "Choose the best answer for each question about how multimodal texts position their audiences.",
        questions: [
          {
            prompt: "When a film uses a subjective camera (point-of-view shot) through a character's eyes, it positions the viewer to:",
            options: [
              "Feel distanced from the character",
              "Identify with the character and share their perspective",
              "View the character objectively",
              "See the director's perspective",
            ],
            answer: "Identify with the character and share their perspective",
          },
          {
            prompt: "A documentary that uses only official government footage and interviews with politicians is positioning the audience to:",
            options: [
              "Adopt a balanced perspective",
              "Accept the official version of events",
              "Question all government authority",
              "Form their own completely independent view",
            ],
            answer: "Accept the official version of events",
          },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Audience Positioning in Film",
        instruction: "Analyse how a film you are studying positions its audience to respond in particular ways — to sympathise with certain characters, to feel certain emotions, and to accept certain values.",
        parentTip: "Audience positioning is where multimodal analysis connects to critical literacy — both ask: how is this text designed to make me feel, think, or believe?",
        prompts: [
          { text: "Choose a scene where you felt a strong emotional response. What specific multimodal techniques created that response?", type: "lines", lines: 4 },
          { text: "Whose perspective does the film invite you to adopt? Which character do you see through?", type: "lines", lines: 3 },
          { text: "Are there any characters whose perspective the film does not invite you to share? What multimodal choices create this distance?", type: "lines", lines: 4 },
        ],
      },
      // 27
      {
        type: "true-false",
        title: "Multimodal Analysis: Advanced Concepts",
        instruction: "Decide whether each statement about advanced multimodal analysis is true or false.",
        statements: [
          { text: "The same visual technique can create different effects depending on context.", answer: true },
          { text: "Multimodal analysis only applies to films, not to other visual media.", answer: false },
          { text: "When visual and audio elements contrast rather than reinforce each other, this can create irony or complexity.", answer: true },
          { text: "The colour palette of a film is chosen purely for aesthetic reasons, not to create meaning.", answer: false },
          { text: "Silence can be just as powerful as music in creating emotional effect.", answer: true },
          { text: "Audience positioning means telling the audience what to think directly through dialogue.", answer: false },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Multimodal Analysis of an Advertisement Campaign",
        instruction: "Choose an advertising campaign — a series of related advertisements by the same brand. Analyse how the multimodal choices create a consistent brand identity.",
        parentTip: "Advertising campaigns are excellent for this analysis because the consistency of choices across multiple texts reveals deliberate design decisions more clearly than a single text.",
        prompts: [
          { text: "Describe the brand and the campaign. What products are being sold?", type: "lines", lines: 3 },
          { text: "What consistent visual choices (colour palette, composition, lighting, font) appear across the campaign?", type: "lines", lines: 4 },
          { text: "What consistent audio or linguistic choices appear?", type: "lines", lines: 3 },
          { text: "What brand identity or values do these consistent multimodal choices create?", type: "lines", lines: 4 },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Applying Multimodal Analysis to News Media",
        instruction: "News photography and news broadcasts are multimodal texts. The choices of image, framing, caption, and presentation all construct particular versions of events.",
        parentTip: "News media multimodal analysis is a powerful media literacy skill. The same event photographed from different angles or captioned differently tells very different stories.",
        prompts: [
          { text: "Find two photographs of the same news event taken from different sources. Describe how each frames and presents the event.", type: "lines", lines: 5 },
          { text: "What different impressions of the event do the two photographs create through their visual choices?", type: "lines", lines: 4 },
          { text: "What does the difference reveal about the perspectives of the sources who selected each image?", type: "lines", lines: 4 },
        ],
      },
      // 30
      {
        type: "tip",
        title: "Tip: Moving from Observation to Analysis",
        content: "The most common weakness in multimodal analysis is stopping at observation: 'There is warm lighting.' Observation is the starting point, not the destination. Analysis explains what the observation means and why it matters: 'The warm, amber lighting in this scene, reminiscent of domestic interiors, positions the viewer to associate the character with safety and home — a stark contrast to the cold blue palette used in earlier scenes.' Always move from WHAT you observe to WHY it matters.",
      },
      // 31
      {
        type: "open-response",
        title: "Comparing Film and Print Advertising",
        instruction: "Compare how a print advertisement and a short video advertisement for the same product use multimodal choices to create meaning.",
        parentTip: "Comparing two versions of the same message is an excellent way to understand how different modes of meaning work differently — what each mode can and cannot do.",
        prompts: [
          { text: "Describe the print advertisement and its key multimodal choices (composition, colour, typography, image).", type: "lines", lines: 4 },
          { text: "Describe the video advertisement and its key multimodal choices (camera, sound, editing, movement).", type: "lines", lines: 4 },
          { text: "What can the video advertisement do that the print advertisement cannot? What does the print version do that the video cannot?", type: "lines", lines: 4 },
        ],
      },
      // 32
      {
        type: "open-response",
        title: "The Politics of Film Representation",
        instruction: "Multimodal choices are never neutral — they reflect and construct ideological positions about who and what is important. Apply this idea to a film you are studying.",
        parentTip: "This activity connects multimodal analysis to critical literacy — the most sophisticated analytical move at Year 9 level is connecting how a text looks to what it means ideologically.",
        prompts: [
          { text: "Choose a scene from your film where a marginalised character (defined by race, gender, class, or other identity) appears. How is this character framed, lit, and positioned within the mise-en-scène?", type: "lines", lines: 5 },
          { text: "How do these multimodal choices reflect or reinforce (or challenge) the character's marginalisation?", type: "lines", lines: 4 },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "Connecting Multimodal Technique to Meaning",
        instruction: "Complete each analytical sentence connecting a specific technique to its ideological or thematic meaning.",
        sentences: [
          { text: "By consistently framing the female protagonist in ___ shots, the film positions her as ___, reinforcing the theme of ___.", blanks: ["...", "...", "..."] },
          { text: "The use of ___ lighting in scenes set in the corporate world contrasts with the ___ tones of the family home, suggesting that ___.", blanks: ["...", "...", "..."] },
          { text: "When the non-diegetic music ___ as the Indigenous character appears, the viewer is positioned to associate this character with ___.", blanks: ["...", "..."] },
          { text: "The camera's refusal to give the antagonist a ___ means the audience never fully ___, positioning them as ___.", blanks: ["...", "...", "..."] },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Multimodal Analysis of a Documentary",
        instruction: "Documentaries use multimodal choices to construct arguments and position audiences toward particular perspectives. Analyse a documentary (or documentary clip) you have watched.",
        parentTip: "Documentaries are often perceived as 'objective' because they deal in real events — multimodal analysis reveals how even factual texts construct particular perspectives through their visual and audio choices.",
        prompts: [
          { text: "What is the documentary about? Who is its implied audience?", type: "lines", lines: 3 },
          { text: "How do camera choices, music, and editing position the viewer toward the documentary's argument?", type: "lines", lines: 4 },
          { text: "Is there any evidence of voices or perspectives that are marginalised through multimodal choices (e.g. poor image quality, no music, unflattering camera angles)?", type: "lines", lines: 4 },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Extended Multimodal Analysis: Two Paragraphs",
        instruction: "Write a two-paragraph multimodal analysis of a film scene you have studied in depth. Paragraph 1 should analyse a visual element; Paragraph 2 should analyse an audio element and explain how it works with the visual.",
        parentTip: "Two-paragraph responses develop the skill of sustaining analysis beyond a single observation — an important step toward the extended multimodal essays assessed at Year 9.",
        prompts: [
          { text: "Paragraph 1 (visual element):", type: "box" },
          { text: "Paragraph 2 (audio element and interaction with the visual):", type: "box" },
        ],
      },
      // 36
      {
        type: "true-false",
        title: "Multimodal Texts: Types and Features",
        instruction: "Decide whether each statement about different types of multimodal texts is true or false.",
        statements: [
          { text: "A podcast is a multimodal text because it uses language and sound together.", answer: true },
          { text: "A graphic novel uses only the linguistic mode.", answer: false },
          { text: "Websites are multimodal because they combine visual, spatial, audio, and linguistic modes.", answer: true },
          { text: "An infographic primarily uses the linguistic mode to communicate data.", answer: false },
          { text: "Music videos are multimodal texts that combine audio, visual, and gestural modes.", answer: true },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Multimodal Analysis of a Music Video",
        instruction: "Music videos are richly multimodal texts combining audio, visual, and gestural elements. Analyse a music video that interests you.",
        parentTip: "Music videos give students permission to analyse a text they may genuinely love — the invitation to bring critical analysis to something from their own cultural world is highly motivating.",
        prompts: [
          { text: "Describe the song and video. What is the overall style and tone?", type: "lines", lines: 3 },
          { text: "How does the visual narrative (what is shown) relate to the audio narrative (what is sung)?", type: "lines", lines: 4 },
          { text: "What specific visual techniques (colour palette, camera work, editing) contribute to the meaning of the video?", type: "lines", lines: 4 },
          { text: "How does the video position the viewer toward the artist, the song's themes, or a particular emotional response?", type: "lines", lines: 3 },
        ],
      },
      // 38
      {
        type: "open-response",
        title: "Genre and Multimodal Conventions",
        instruction: "Different film genres have established multimodal conventions — audiences recognise horror through particular sound design, thriller through particular editing rhythms, and romance through particular colour palettes.",
        parentTip: "Genre conventions are shared expectations between filmmakers and audiences — they are a kind of visual and audio 'language' that is learned through repeated viewing.",
        prompts: [
          { text: "Choose a film genre (horror, thriller, romance, science fiction, etc.). What multimodal conventions are associated with this genre?", type: "lines", lines: 4 },
          { text: "Does the film you are studying follow these conventions, subvert them, or do both? Provide specific evidence.", type: "lines", lines: 4 },
        ],
      },
      // 39
      {
        type: "multiple-choice",
        title: "Assessment Preparation: Multimodal Analysis",
        instruction: "These questions are at the level of formal assessment tasks.",
        questions: [
          {
            prompt: "A student writes: 'The music is sad.' This analysis needs improvement because:",
            options: [
              "It names the wrong technique",
              "It is too vague — it should name the specific musical element (e.g. 'slow minor-key strings') and explain its effect on the audience",
              "Music is not part of multimodal analysis",
              "It is too specific for this level of analysis",
            ],
            answer: "It is too vague — it should name the specific musical element (e.g. 'slow minor-key strings') and explain its effect on the audience",
          },
          {
            prompt: "The most sophisticated multimodal analyses will:",
            options: [
              "Identify as many techniques as possible",
              "Explain how visual and audio elements work together and connect to the text's themes and ideology",
              "Focus on describing what happens in each scene",
              "Only analyse techniques that the director has publicly discussed",
            ],
            answer: "Explain how visual and audio elements work together and connect to the text's themes and ideology",
          },
        ],
      },
      // 40
      {
        type: "spark",
        title: "Spark: Every Frame Is an Argument",
        content: "The film director Stanley Kubrick said that a film should work even if the sound was turned off — every frame should be able to communicate something visually. The best directors treat every shot as a visual argument: this composition says something; this lighting makes a claim; this camera angle takes a position. When you watch a film as a student of multimodal analysis, you are watching an argument unfold. What is this film arguing? How does it use image and sound to make its case?",
      },

      // ── CONSOLIDATING 41–80 ──────────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Planning a Multimodal Analysis Essay",
        instruction: "Plan an essay (600–800 words) on a multimodal text you have studied in depth. Your plan should include: a thesis about how the text uses multimodal elements to create meaning; 4–5 paragraph topics; specific evidence from the text for each paragraph.",
        parentTip: "The plan is where the essay is won or lost. A student who spends 20 minutes planning and 40 minutes writing will almost always produce a stronger essay than one who spends 5 minutes planning and 55 minutes writing.",
        prompts: [
          { text: "Thesis statement (specific, arguable, naming the main multimodal argument):", type: "lines", lines: 3 },
          { text: "Paragraph topics in order (4–5, each with a note on evidence and analytical point):", type: "lines", lines: 8 },
          { text: "What insight will your conclusion arrive at?", type: "lines", lines: 3 },
        ],
      },
      // 42
      {
        type: "open-response",
        title: "Drafting the Multimodal Analysis Essay",
        instruction: "Using your plan, draft your multimodal analysis essay (600–800 words). Ensure each body paragraph: names a specific technique, provides evidence, explains the effect on the audience, and connects to the text's theme or ideology.",
        parentTip: "The most common weakness is description without analysis. After drafting, read each paragraph and ask: have I explained WHY this technique matters, not just WHAT it does?",
        prompts: [
          { text: "Essay draft:", type: "box" },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Integrating Visual and Audio Analysis",
        instruction: "The most sophisticated multimodal analyses show how visual and audio elements interact — how they reinforce each other, contrast, or create complex layered meanings. Write a paragraph that analyses the interaction between two modes.",
        parentTip: "The interaction between modes is more interesting than either mode in isolation — a character shown in close-up with swelling music means something different from the same close-up with silence.",
        prompts: [
          { text: "Choose a moment from your text where visual and audio elements interact significantly. Describe the moment.", type: "lines", lines: 3 },
          { text: "Write an analytical paragraph explaining how the two modes work together (or in tension) to create meaning:", type: "box" },
        ],
      },
      // 44
      {
        type: "fill-in-blank",
        title: "Sophisticated Analytical Language: Multimodal",
        instruction: "Complete each sentence using sophisticated analytical language for multimodal texts.",
        sentences: [
          { text: "The director's choice to ___ the protagonist in warm amber light while the antagonist is consistently ___ in cold blue tones ___ the film's moral framework.", blanks: ["bathe", "cast", "visualises"] },
          { text: "By deploying ___ editing in this sequence, the director ___ a sense of ___ that positions the viewer to feel ___.", blanks: ["rapid-cut", "generates", "urgency", "..."] },
          { text: "The juxtaposition of the ___ music against the ___ visuals creates an ___ effect, suggesting that ___.", blanks: ["...", "...", "ironic", "..."] },
          { text: "Through the repeated use of ___ shots for the character, the film ___ her as ___, reinforcing the theme of ___.", blanks: ["...", "constructs", "...", "..."] },
        ],
      },
      // 45
      {
        type: "tip",
        title: "Tip: Naming Film Techniques With Precision",
        content: "In multimodal analysis essays, imprecise language weakens your analysis. Avoid: 'the camera zooms in' (try: 'a slow close-up'). Avoid: 'the lighting is dark' (try: 'low-key lighting, with deep shadows and a single cool light source'). Avoid: 'the music is dramatic' (try: 'a crescendo of strings building to a climactic fortissimo'). The more precisely you name what you see and hear, the more convinced your reader will be that you have actually looked and listened carefully.",
      },
      // 46
      {
        type: "open-response",
        title: "Multimodal Analysis: Complete Scene Study",
        instruction: "Choose one complete scene from a film you are studying (2–5 minutes). Conduct a systematic analysis of all its major multimodal elements.",
        parentTip: "A complete scene study is the most thorough form of multimodal analysis — it develops the kind of sustained close attention that produces the best analytical writing.",
        prompts: [
          { text: "Scene details (film, scene, location, key characters):", type: "lines", lines: 2 },
          { text: "Camera work analysis (shots, angles, movement):", type: "lines", lines: 4 },
          { text: "Lighting and colour analysis:", type: "lines", lines: 4 },
          { text: "Sound design analysis (music, diegetic sound, silence, dialogue tone):", type: "lines", lines: 4 },
          { text: "Editing analysis (pace, cuts, transitions):", type: "lines", lines: 3 },
          { text: "How do all these elements work together to create meaning and position the audience?", type: "lines", lines: 4 },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Multimodal Text Creation: Planning",
        instruction: "You are going to create a short multimodal text of your own — a 60-second video advertisement, a poster campaign, or an infographic. Plan your multimodal choices before creating.",
        parentTip: "Creating multimodal texts deepens understanding of analysis — when students make deliberate choices about camera angle, colour, and sound themselves, they understand how those choices make meaning.",
        prompts: [
          { text: "What is your multimodal text for? (Product, message, or idea you are communicating)", type: "lines", lines: 2 },
          { text: "Target audience:", type: "lines", lines: 1 },
          { text: "Visual choices (colour palette, composition, camera angles if video):", type: "lines", lines: 4 },
          { text: "Audio choices (music, voice, sound effects — if applicable):", type: "lines", lines: 3 },
          { text: "Linguistic choices (tagline, text, caption):", type: "lines", lines: 2 },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Multimodal Text Creation: Reflection",
        instruction: "After creating or planning your multimodal text (from Activity 47), reflect on the creative and analytical dimensions of the process.",
        parentTip: "Reflective analysis of one's own creative choices is one of the highest-order multimodal literacy activities — it moves the student from consumer to producer of multimodal meaning.",
        prompts: [
          { text: "What multimodal choice are you most satisfied with, and why?", type: "lines", lines: 3 },
          { text: "What was the most challenging aspect of making deliberate multimodal choices?", type: "lines", lines: 3 },
          { text: "How has this creation process changed how you think about the multimodal texts you consume?", type: "lines", lines: 4 },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Revising the Multimodal Analysis Essay",
        instruction: "Revise your multimodal analysis essay (drafted in Activity 42) using the following checklist: (1) Is each technique named precisely? (2) Is the evidence specific (not vague)? (3) Is the audience effect explained? (4) Is the connection to theme or ideology explicit?",
        parentTip: "Revision is where strong writing is made. Encourage your student to treat the checklist as a genuine tool rather than a box-ticking exercise.",
        prompts: [
          { text: "Choose two paragraphs and revise them using the checklist. Write the revised versions here:", type: "box" },
          { text: "What specific improvements did you make?", type: "lines", lines: 4 },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Synthesis: Multimodal Analysis and Critical Literacy",
        instruction: "Multimodal analysis and critical literacy are deeply connected — both ask how texts position us to think, feel, and believe particular things. Write a synthesis paragraph connecting what you have learned in this worksheet to the critical literacy concepts from the first worksheet.",
        parentTip: "This synthesis task is important — students who can connect across worksheets are demonstrating the highest level of integrative thinking.",
        prompts: [
          { text: "Your synthesis paragraph:", type: "box" },
          { text: "What is the most important connection you can make between multimodal analysis and critical literacy?", type: "lines", lines: 4 },
        ],
      },
      // 51
      {
        type: "true-false",
        title: "Multimodal Analysis: Consolidation Check",
        instruction: "A consolidation check on key multimodal analysis concepts.",
        statements: [
          { text: "Mise-en-scène includes lighting, setting, costume, and actor placement.", answer: true },
          { text: "A voiceover is diegetic sound.", answer: false },
          { text: "Rack focus is a type of camera movement.", answer: false },
          { text: "Jump cuts create a disorienting or energetic effect.", answer: true },
          { text: "Genre conventions in film are fixed and cannot be subverted.", answer: false },
          { text: "The interaction between visual and audio modes can create irony or complexity.", answer: true },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Multimodal Analysis: Australian Film",
        instruction: "Choose an Australian film and apply multimodal analysis with a focus on how the film represents Australian landscapes, communities, or identity through its visual and audio choices.",
        parentTip: "Australian cinema has a distinctive relationship with landscape — the use of wide shots, natural lighting, and ambient sound to represent the outback is one of the most analysed features of Australian film.",
        prompts: [
          { text: "Film title and brief description:", type: "lines", lines: 2 },
          { text: "How does the film represent the Australian landscape through camera work, lighting, and colour?", type: "lines", lines: 5 },
          { text: "How does the sound design (ambient sound, music, silence) contribute to the representation of Australian identity?", type: "lines", lines: 4 },
          { text: "What ideological position about Australian identity does the film take through its multimodal choices?", type: "lines", lines: 4 },
        ],
      },
      // 53
      {
        type: "open-response",
        title: "Multimodal Analysis: Power and Representation",
        instruction: "Apply the concept of power and representation (from the Critical Literacy worksheet) to a multimodal analysis of a film or advertisement. Focus on how multimodal choices construct and reinforce particular power relationships.",
        parentTip: "This cross-worksheet integration is the most sophisticated analytical move at Year 9 — connecting technical multimodal observation to ideological critique.",
        prompts: [
          { text: "Choose a multimodal text and describe how it represents power relationships through visual and audio choices.", type: "lines", lines: 5 },
          { text: "How do the multimodal choices reinforce or challenge the dominant power structure represented in the text?", type: "lines", lines: 5 },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Peer Review: Multimodal Essay",
        instruction: "Exchange your multimodal analysis essay with another reader (parent or peer). Complete the peer review below.",
        parentTip: "Parents can conduct this review even without a formal peer — the questions are a useful framework for any thoughtful reader.",
        prompts: [
          { text: "What is the writer's central argument about the text's multimodal strategy?", type: "lines", lines: 2 },
          { text: "Which analytical observation is most precise and convincing?", type: "lines", lines: 3 },
          { text: "Where does the analysis stay at the level of description rather than analysis?", type: "lines", lines: 4 },
          { text: "Is the connection to meaning, theme, or ideology made explicit throughout?", type: "lines", lines: 3 },
        ],
      },
      // 55
      {
        type: "home-activity",
        title: "Multimodal Analysis Portfolio",
        instruction: "This week, build a short multimodal analysis portfolio.",
        suggestions: [
          "Analyse one film scene (2–3 minutes): write 3–4 sentences on camera work, 3–4 on sound, and 2–3 connecting them.",
          "Analyse one advertisement: write one TEEL paragraph on a visual element and one on an audio or linguistic element.",
          "Analyse one news photograph: write a short paragraph on composition, angle, and the ideology it constructs.",
          "Compile the three analyses into a short portfolio with a framing statement about what you learned.",
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Multimodal Analysis of a Video Game",
        instruction: "Video games are among the most sophisticated multimodal texts of contemporary culture — they combine visual, audio, spatial, gestural, and linguistic modes in interactive ways. Apply multimodal analysis to a game you know.",
        parentTip: "Taking video games seriously as multimodal texts is both intellectually valid and highly motivating for many students. The analysis skills transfer perfectly.",
        prompts: [
          { text: "Game title and brief description:", type: "lines", lines: 2 },
          { text: "How do the game's visual design (colour palette, character design, environment) create meaning and position the player?", type: "lines", lines: 4 },
          { text: "How does the game's audio (music, sound effects, voice acting) contribute to the experience and meaning?", type: "lines", lines: 4 },
          { text: "How does the interactive/spatial element of the game (player choice, navigation, embodiment) add a mode of meaning not available in film?", type: "lines", lines: 4 },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "Comparing Two Directors' Styles",
        instruction: "Choose two film directors (from any era or country) and compare their characteristic multimodal styles. Focus on how their visual and audio choices create distinctive 'signatures'.",
        parentTip: "Studying directorial style — the recurring visual and audio choices that identify a particular director — develops a more sophisticated understanding of film as a deliberate artistic form.",
        prompts: [
          { text: "Director A — characteristic visual and audio style:", type: "lines", lines: 4 },
          { text: "Director B — characteristic visual and audio style:", type: "lines", lines: 4 },
          { text: "What is the most significant difference between their multimodal approaches? What does each style suggest about their artistic priorities?", type: "lines", lines: 4 },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Multimodal Analysis and Ideology: Extended",
        instruction: "Write an extended analysis (400–600 words) of a film or advertisement, applying both multimodal analysis and critical literacy to show how the text constructs and reinforces (or challenges) an ideological position.",
        parentTip: "This is the most demanding activity in the consolidating section — it asks students to sustain both forms of analysis simultaneously across an extended piece of writing.",
        prompts: [
          { text: "Your extended analysis:", type: "box" },
          { text: "Which multimodal elements most powerfully serve the text's ideological purpose? Why?", type: "lines", lines: 4 },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Examination Practice: Multimodal",
        instruction: "Respond to the following examination-style prompt in 40 minutes: 'Analyse how one multimodal text you have studied uses visual and audio elements to create meaning and position its audience.' Write your planned response and full draft.",
        parentTip: "Timed examination practice is most useful when debriefed afterwards. Ask: what did you plan quickly? What took time? What would you do differently?",
        prompts: [
          { text: "Planning notes:", type: "lines", lines: 4 },
          { text: "Full response:", type: "box" },
          { text: "Self-evaluation: What went well? What would you improve?", type: "lines", lines: 4 },
        ],
      },
      // 60
      {
        type: "tip",
        title: "Tip: The Best Multimodal Analysis Essays",
        content: "The best multimodal analysis essays have three qualities. First, they are specific: they name precise techniques, quote specific moments, and avoid vague generalisations. Second, they are analytical: every observation is connected to an audience effect and a broader meaning or theme. Third, they are integrated: they show how visual and audio elements work together rather than treating each mode in isolation. Review your essays against these three qualities.",
      },

      // ── EXTENDING 61–100 ──────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Independent Film Study: Multimodal",
        instruction: "Choose a film you have not studied in class. Conduct an independent multimodal analysis of two key scenes, producing a response of 600–800 words.",
        parentTip: "Independent application to a self-chosen film is the highest level of skill demonstration — it shows that the analytical toolkit has been genuinely internalised.",
        prompts: [
          { text: "Film details:", type: "lines", lines: 2 },
          { text: "Your independent multimodal analysis:", type: "box" },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Multimodal Analysis: Historical Context",
        instruction: "Multimodal conventions in film change over time — the visual language of a 1950s film is very different from a contemporary one. Analyse how the historical context of a film shapes its multimodal choices.",
        parentTip: "Historical context in film analysis is often neglected in favour of pure textual analysis — connecting the visual style to its moment of production produces sophisticated contextual analysis.",
        prompts: [
          { text: "What film are you studying, and when was it made?", type: "lines", lines: 2 },
          { text: "What do the film's multimodal choices (camera technology, colour, sound design, editing style) reveal about the era in which it was made?", type: "lines", lines: 5 },
          { text: "How might the film look different if made today? What multimodal conventions have changed?", type: "lines", lines: 4 },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Critical Reflection: Your Development as a Multimodal Analyst",
        instruction: "Reflect on how your skills as a multimodal analyst have developed throughout this worksheet.",
        prompts: [
          { text: "What multimodal technique were you most unaware of before this worksheet?", type: "lines", lines: 3 },
          { text: "What is the single most significant analytical insight you have developed?", type: "lines", lines: 3 },
          { text: "How has studying multimodal analysis changed how you watch films or view images in daily life?", type: "lines", lines: 4 },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Full Essay: Multimodal Analysis",
        instruction: "Complete a full multimodal analysis essay (700–900 words) on a film or advertisement you have studied in this worksheet. Use the full range of technical vocabulary and connect your analysis to ideology and audience positioning.",
        parentTip: "This is the culminating writing task for the multimodal worksheet. If your student has already written an earlier draft, this is an opportunity for a comprehensive revision using everything learned since.",
        prompts: [
          { text: "Full essay (or comprehensive revision):", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Creating a Multimodal Analysis Resource",
        instruction: "Create a visual guide to multimodal analysis for a Year 7 student. Include: the key concepts, at least five important techniques with definitions, and examples from well-known films or advertisements they would recognise.",
        parentTip: "Creating a teaching resource is one of the most effective ways to consolidate learning — it requires genuine understanding, not just recall.",
        prompts: [
          { text: "Your multimodal analysis guide:", type: "box" },
          { text: "What was hardest to explain simply?", type: "lines", lines: 3 },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Multimodal Analysis: Cross-Cultural Comparison",
        instruction: "Different cultural traditions have different conventions for visual storytelling. Compare the multimodal style of a film from one cultural context with one from another.",
        parentTip: "Cross-cultural multimodal comparison reveals that many film conventions we take for granted are culturally specific rather than universal.",
        prompts: [
          { text: "Two films from different cultural contexts and their key multimodal characteristics:", type: "lines", lines: 5 },
          { text: "What conventions are shared across the two cultural contexts? What is different?", type: "lines", lines: 5 },
          { text: "What does the difference reveal about how visual storytelling is shaped by culture?", type: "lines", lines: 4 },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Multimodal Analysis of News Broadcasting",
        instruction: "News broadcasting is a multimodal text — the visual presentation, graphics, music, and anchor's presentation choices all construct authority and frame the news.",
        parentTip: "This activity connects multimodal analysis to media literacy — a crucial contemporary skill. Comparing two news broadcasts on the same story from different channels can be revelatory.",
        prompts: [
          { text: "Choose a news broadcast and describe its multimodal presentation: visual design, graphics, music, anchor's style.", type: "lines", lines: 5 },
          { text: "How do these multimodal choices construct the channel's authority and credibility (ethos)?", type: "lines", lines: 4 },
          { text: "Compare how two different channels present the same news story. What multimodal differences do you notice?", type: "lines", lines: 4 },
        ],
      },
      // 68
      {
        type: "home-activity",
        title: "Creating Multimodal Content",
        instruction: "This week, create and reflect on a piece of multimodal content.",
        suggestions: [
          "Create a 60-second video (on any topic that interests you) with deliberate visual and audio choices. Annotate your choices afterwards.",
          "Design a poster or infographic that combines visual composition, colour, and linguistic elements deliberately. Write a brief explanation of your choices.",
          "Edit a short sequence of photographs into a visual essay with captions. Reflect on how the sequence and layout create meaning.",
          "Record a short audio piece (podcast-style or radio drama) and analyse how voice, sound, and silence make meaning without visual support.",
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Multimodal Analysis and Academic Discourse",
        instruction: "Multimodal analysis is a growing field in academic research. Find an article, essay, or review that applies multimodal analysis to a text you are interested in. Summarise its approach and apply one of its ideas.",
        parentTip: "Engaging with academic or critical writing about film and media at this level is impressive preparation for senior secondary and tertiary study.",
        prompts: [
          { text: "Source details (title, author, where found):", type: "lines", lines: 2 },
          { text: "Summarise the main argument or approach:", type: "lines", lines: 4 },
          { text: "Apply one idea from this source to a text you are studying:", type: "lines", lines: 5 },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Multimodal Analysis: Extended Research Project",
        instruction: "Design a short research project (report or analytical essay, 800–1000 words) examining how a specific multimodal convention has changed in film or advertising over a period of time.",
        parentTip: "This extended research project is the most ambitious task in the worksheet — it combines historical knowledge, multimodal analysis, and extended writing into a single complex task.",
        prompts: [
          { text: "Project topic and approach:", type: "lines", lines: 4 },
          { text: "Your analytical report or essay:", type: "box" },
        ],
      },
      // 71
      {
        type: "true-false",
        title: "Final Mastery Check: Multimodal Analysis",
        instruction: "A final mastery check across all the multimodal analysis concepts in this worksheet.",
        statements: [
          { text: "A close-up shot can reveal emotion and create intimacy with the audience.", answer: true },
          { text: "Mise-en-scène refers only to the soundtrack of a film.", answer: false },
          { text: "Non-diegetic sound is heard by the characters within the film.", answer: false },
          { text: "A montage is a sequence of shots edited together to create meaning.", answer: true },
          { text: "The interaction between visual and audio modes can create irony when they contradict each other.", answer: true },
          { text: "All multimodal conventions in film are universal and culture-neutral.", answer: false },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Sustained Writing: Multimodal and Critical Literacy Combined",
        instruction: "Write an essay (700–900 words) that uses BOTH multimodal analysis AND critical literacy to analyse a film or advertisement. Your essay should argue for a specific interpretation of how the text positions its audience ideologically.",
        parentTip: "This combined analytical essay is the highest-level task in the worksheet — it demands genuine integration of two analytical frameworks and sustained writing.",
        prompts: [
          { text: "Your combined analytical essay:", type: "box" },
          { text: "How effectively did you integrate the two frameworks? Where did the integration feel natural, and where was it more forced?", type: "lines", lines: 4 },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Teaching Multimodal Analysis",
        instruction: "Explain multimodal analysis to a parent, sibling, or friend using a film or advertisement they are familiar with. Then write a brief account of the conversation.",
        parentTip: "Explaining an analytical concept to someone unfamiliar with it is the most rigorous test of understanding. Even a partial explanation is valuable.",
        prompts: [
          { text: "Which text did you use? Who did you explain to?", type: "lines", lines: 2 },
          { text: "How did the conversation go? What questions did they ask?", type: "lines", lines: 4 },
          { text: "What did explaining the concept teach you about your own understanding?", type: "lines", lines: 3 },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Multimodal Analysis Portfolio",
        instruction: "Select the three best pieces of multimodal analysis writing from this worksheet. Write a brief framing statement for each explaining what it demonstrates.",
        parentTip: "Portfolio selection is a valuable metacognitive exercise. Encourage genuine pride in strong work and honest identification of growth areas.",
        prompts: [
          { text: "Piece 1 selected and why:", type: "lines", lines: 3 },
          { text: "Piece 2 selected and why:", type: "lines", lines: 3 },
          { text: "Piece 3 selected and why:", type: "lines", lines: 3 },
          { text: "What does your portfolio demonstrate about your development as a multimodal analyst?", type: "lines", lines: 4 },
        ],
      },
      // 75
      {
        type: "tip",
        title: "Tip: Using Multimodal Analysis in Extended Responses",
        content: "When writing extended analytical responses on films or advertisements, do not confine your multimodal analysis to a separate section. Instead, weave visual and audio observations into every paragraph, connecting them to your central argument. The formula: name the technique + describe the specific detail + explain the audience effect + connect to the thesis. Applied consistently across all paragraphs, this produces extended responses that are both technically precise and argumentatively sustained.",
      },
      // 76
      {
        type: "open-response",
        title: "Extending: Multimodal Analysis of Live Performance",
        instruction: "Live performance — theatre, dance, spoken word poetry, public ceremony — is also multimodal. Apply multimodal analysis to a live or recorded performance you have attended or can watch.",
        parentTip: "Extending multimodal analysis to live performance reveals that the framework applies beyond screen texts — it is a way of seeing meaning-making in all its forms.",
        prompts: [
          { text: "Describe the performance and its context.", type: "lines", lines: 3 },
          { text: "What modes of meaning are at work (visual, audio, gestural, spatial)?", type: "lines", lines: 4 },
          { text: "How do these modes interact to create meaning and position the audience?", type: "lines", lines: 4 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Multimodal Analysis: Political Communication",
        instruction: "Political communication — campaign videos, political speeches on video, government advertisements — uses sophisticated multimodal strategies. Analyse a piece of political communication.",
        parentTip: "Political multimodal analysis is particularly valuable because students can see directly how visual choices serve persuasive purposes — connecting multimodal analysis to rhetorical analysis in powerful ways.",
        prompts: [
          { text: "Describe the political communication text and its context.", type: "lines", lines: 3 },
          { text: "Analyse the visual choices: what do colour, composition, and framing convey about the political message?", type: "lines", lines: 4 },
          { text: "Analyse the audio choices: how do music, voice tone, and sound design support the political message?", type: "lines", lines: 4 },
          { text: "What audience is this communication designed for, and how do the multimodal choices serve that audience?", type: "lines", lines: 3 },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Final Reflection: Multimodal Analysis as a Life Skill",
        instruction: "Reflect on what it means to be a multimodally literate person in the contemporary world — one who can read, analyse, and create multimodal texts with awareness.",
        parentTip: "This final reflection is an opportunity to discuss with your teenager why these skills matter beyond the English classroom — in navigating media, understanding political communication, and participating in contemporary culture.",
        prompts: [
          { text: "In what contexts in your daily life do multimodal analysis skills matter most?", type: "lines", lines: 4 },
          { text: "How has studying multimodal analysis changed how you engage with films, advertisements, or social media?", type: "lines", lines: 4 },
          { text: "What is one aspect of multimodal literacy you want to develop further?", type: "lines", lines: 3 },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Independent Research: A Film Scholar",
        instruction: "Choose a film scholar, critic, or filmmaker whose ideas about visual storytelling interest you. Research their key ideas and apply one idea to a film you are studying.",
        parentTip: "Students who engage with the ideas of film scholars and critics demonstrate the highest level of engagement with multimodal literacy as an intellectual field.",
        prompts: [
          { text: "Who is your chosen scholar or critic, and what is their central idea?", type: "lines", lines: 4 },
          { text: "Apply their idea to a specific scene from a film you are studying:", type: "lines", lines: 5 },
        ],
      },
      // 80
      {
        type: "spark",
        title: "Spark: Making the Invisible Visible",
        content: "The best thing about studying multimodal analysis is that it makes invisible things visible. Before you studied it, you experienced film music, camera angles, and colour palettes — they shaped what you felt and thought. Now you can name them, explain them, and think about them. That shift — from unconscious experience to conscious analysis — is one of the most genuinely exciting things education can do. You are now a different kind of watcher, reader, and citizen.",
      },
      // 81
      {
        type: "open-response",
        title: "Extended Essay: Final Version",
        instruction: "Complete the final version of your multimodal analysis essay, incorporating all revisions and improvements made throughout the worksheet. Aim for 750–950 words. This should be your strongest piece of multimodal analytical writing.",
        parentTip: "If your student has produced several drafts, this is the moment to compile the best version — selecting the strongest paragraphs from different drafts and revising for coherence.",
        prompts: [
          { text: "Final essay:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Applying Multimodal Analysis to Your Own Creative Work",
        instruction: "Apply multimodal analysis to a piece of creative work you have produced — a drawing, a photograph, a video, a piece of music, or any other creative text. Analyse the modes of meaning you deployed.",
        parentTip: "Analysing one's own creative work multimodally develops both critical and creative intelligence — it reveals what choices were intuitive and what were deliberate.",
        prompts: [
          { text: "Describe your creative work:", type: "lines", lines: 3 },
          { text: "What modes of meaning did you use? What choices were deliberate and what were intuitive?", type: "lines", lines: 5 },
          { text: "How does applying multimodal analysis to your own work change how you understand what you made?", type: "lines", lines: 4 },
        ],
      },
      // 83
      {
        type: "home-activity",
        title: "Ongoing Multimodal Literacy Practice",
        instruction: "Multimodal literacy is a lifelong skill. Here are habits to carry forward beyond this worksheet.",
        suggestions: [
          "Whenever you watch a film, pause once to observe exactly what the camera, lighting, and music are doing at that moment.",
          "When you encounter a powerful advertisement, spend 60 seconds analysing what modes of meaning it is using and why.",
          "Keep a 'multimodal observation' journal: one entry per week on a multimodal text you encountered, naming one specific technique and its effect.",
          "Before watching a new film, look up who the director is and what their visual style is known for. Then watch to see if you can identify it.",
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "Extended Concepts: Multimodal Theory",
        instruction: "These questions address the most advanced concepts in multimodal analysis.",
        questions: [
          {
            prompt: "The theorist Gunther Kress argued that multimodal texts are 'transformative' — that they change the viewer as they are read. What does this suggest about the audience?",
            options: [
              "Audiences are passive receivers of meaning",
              "Audiences actively make meaning from texts and are changed by the encounter",
              "Audiences have no role in creating meaning",
              "Audiences should analyse texts rather than experience them",
            ],
            answer: "Audiences actively make meaning from texts and are changed by the encounter",
          },
          {
            prompt: "When a film uses a sound bridge (carrying audio from one scene into the next before the cut), this creates:",
            options: [
              "A sense of abrupt disconnection between scenes",
              "A smooth transition that connects the emotional or thematic content of the two scenes",
              "A technical error in the editing process",
              "Diegetic sound in a non-diegetic context",
            ],
            answer: "A smooth transition that connects the emotional or thematic content of the two scenes",
          },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Advanced: Sound Bridge Analysis",
        instruction: "Find an example of a sound bridge in a film (where audio from one scene continues into the next before the visual cut). Analyse how it creates meaning.",
        parentTip: "Sound bridges are a sophisticated editing technique that demonstrates how filmmakers use audio and visual elements independently of each other to create complex effects.",
        prompts: [
          { text: "Describe the sound bridge: what sound carries across, from which scene to which?", type: "lines", lines: 4 },
          { text: "What effect does the sound bridge create? How does it connect the emotional or thematic content of the two scenes?", type: "lines", lines: 4 },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Advanced Essay: Multimodal Analysis and Ideology",
        instruction: "Write an advanced analytical essay (700–900 words) responding to: 'How does the multimodal text you have studied construct and reinforce a particular ideological position through its visual and audio choices?' Draw on both multimodal analysis and critical literacy frameworks.",
        parentTip: "This is the most demanding essay task in the worksheet. There is no single correct reading — look for evidence of sustained reasoning, precise analysis, and genuine engagement with the complexity of the question.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Comparative Essay: Two Multimodal Texts",
        instruction: "Write a comparative multimodal analysis essay (600–800 words) on two texts — perhaps a film and its advertising campaign, two versions of the same story in different media, or two films by the same director.",
        parentTip: "Comparative essays require a structure that genuinely integrates the comparison — moving between the texts — rather than treating them sequentially.",
        prompts: [
          { text: "Your comparative multimodal analysis essay:", type: "box" },
          { text: "Does your essay integrate the comparison or treat each text separately? What revisions would improve the integration?", type: "lines", lines: 4 },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Examination Conditions: Full Multimodal Response",
        instruction: "Respond to the following examination-style prompt in 45 minutes: 'Analyse how at least two multimodal elements work together in a film or advertisement you have studied to create meaning and position the audience.' Write planning notes and a full response.",
        parentTip: "Treat this as genuine examination practice: set a timer, plan first, then write without stopping to look things up. The self-evaluation afterwards is as valuable as the response itself.",
        prompts: [
          { text: "Planning notes:", type: "lines", lines: 5 },
          { text: "Full response:", type: "box" },
          { text: "Self-evaluation: What mark would you give yourself and why?", type: "lines", lines: 4 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Multimodal Analysis in Other Subjects",
        instruction: "Multimodal analysis skills transfer beyond English — they apply to history (propaganda posters), science (data visualisations), geography (maps and photographs), and many other fields.",
        prompts: [
          { text: "Choose another subject you study. Find one multimodal text from that subject and conduct a brief multimodal analysis.", type: "lines", lines: 4 },
          { text: "How does thinking about modes of meaning help you understand this text differently?", type: "lines", lines: 4 },
        ],
      },
      // 90
      {
        type: "tip",
        title: "Tip: Excellence in Multimodal Analysis",
        content: "At the highest level, multimodal analysis essays demonstrate: (1) precise technical vocabulary applied to specific moments; (2) analysis of how modes work together, not just separately; (3) explicit connection between multimodal choices and audience positioning; (4) connection to the text's ideological or thematic meaning; (5) a coherent argument sustained across the whole essay rather than a list of observations. Review your best essay against these five criteria.",
      },
      // 91
      {
        type: "open-response",
        title: "Creating a Multimodal Text: Complete Project",
        instruction: "Create a complete multimodal text — a short film, an advertising campaign (two or three related posters), a video essay, or an illustrated analytical report. Your text should demonstrate deliberate multimodal choices that you can explain and justify.",
        parentTip: "This is the most ambitious creative task in the worksheet. Scale it to what is feasible — even a simple two-poster campaign or a one-minute video counts, as long as the choices are deliberate and explicable.",
        prompts: [
          { text: "Description of your multimodal project:", type: "lines", lines: 4 },
          { text: "Annotation of your key multimodal choices: what did you choose and why?", type: "lines", lines: 8 },
          { text: "Reflection: what would you do differently with more time or resources?", type: "lines", lines: 4 },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Final Synthesis: Multimodal Literacy",
        instruction: "Write a 200–300 word personal statement on what multimodal literacy means to you — as a viewer, reader, creator, and thinker.",
        prompts: [
          { text: "Your personal statement on multimodal literacy:", type: "box" },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Independent Multimodal Analysis Project",
        instruction: "Design and complete your own multimodal analysis project on any text that genuinely interests you. Produce an analytical piece of 600–800 words.",
        parentTip: "Self-directed learning at this level is genuinely impressive. Support the project with research and encourage your student to follow their genuine curiosity — the most engaged work is always on personally chosen texts.",
        prompts: [
          { text: "Your project topic and approach:", type: "lines", lines: 4 },
          { text: "Your analytical piece:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Reflecting on Growth: Multimodal Analysis",
        instruction: "Look back at your earliest activities in this worksheet (Activities 1–10). How has your understanding of multimodal analysis grown? What can you do now that you could not do at the start?",
        prompts: [
          { text: "Your reflection on growth:", type: "lines", lines: 6 },
          { text: "What is the single most important insight you have gained about multimodal texts?", type: "lines", lines: 3 },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Multimodal Analysis of Your Favourite Film",
        instruction: "Apply everything you have learned to a full multimodal analysis of your all-time favourite film. Choose one scene and analyse it with the maximum precision and depth you are capable of.",
        parentTip: "Analysing a loved text with analytical rigour is one of the most satisfying intellectual experiences — it deepens the love rather than diminishing it.",
        prompts: [
          { text: "Film and scene details:", type: "lines", lines: 2 },
          { text: "Your full multimodal analysis of this scene:", type: "box" },
          { text: "Has applying multimodal analysis to this scene changed or deepened your appreciation of the film?", type: "lines", lines: 3 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Writing Your Multimodal Analysis Manifesto",
        instruction: "Write a short manifesto about how you will approach multimodal texts as a critical viewer and reader going forward.",
        prompts: [
          { text: "Your multimodal analysis manifesto:", type: "box" },
        ],
      },
      // 97
      {
        type: "true-false",
        title: "Review: All Multimodal Concepts",
        instruction: "A comprehensive review of all the multimodal concepts from this worksheet.",
        statements: [
          { text: "Mise-en-scène includes everything placed in front of the camera for a scene.", answer: true },
          { text: "A sound bridge creates an abrupt, disorienting transition between scenes.", answer: false },
          { text: "Rack focus shifts attention between subjects within a single, continuous shot.", answer: true },
          { text: "Jump cuts create a smooth, invisible transition between scenes.", answer: false },
          { text: "Multimodal analysis can be applied to texts beyond film — including games, websites, and performances.", answer: true },
          { text: "The gestural mode refers to the language used in subtitles.", answer: false },
        ],
      },
      // 98
      {
        type: "home-activity",
        title: "Multimodal Literacy: Lifelong Habits",
        instruction: "Here are multimodal literacy habits to carry forward throughout your life.",
        suggestions: [
          "When watching any screen text, develop the habit of asking: what is the camera doing right now? What is the sound doing? Why?",
          "When you find a film or advertisement particularly powerful or disturbing, spend five minutes analysing what specific multimodal choices created that effect.",
          "Follow a film critic or visual culture writer whose work you respect. Notice how they describe and analyse multimodal choices in their writing.",
          "Keep a multimodal observation notebook: once a week, write one careful observation about a multimodal text you encountered.",
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Final Extended Response: Your Best Multimodal Analysis",
        instruction: "Complete your best, most polished multimodal analysis response on any text studied in this worksheet. This is your showcase piece — give it your maximum analytical attention and precision.",
        parentTip: "This final response is an opportunity for genuine pride in work well done. Encourage your student to treat it as a performance of everything they have learned.",
        prompts: [
          { text: "Your showcase multimodal analysis:", type: "box" },
          { text: "What makes this your best work? What would a further revision add?", type: "lines", lines: 4 },
        ],
      },
      // 100
      {
        type: "spark",
        title: "Spark: You Have Changed How You See",
        content: "Before studying multimodal analysis, you watched films and saw stories. Now you see stories AND the apparatus that constructs them — the camera choices, the lighting decisions, the sound design, the editing rhythm. That second layer of seeing is not a diminishment of the experience; it is an enrichment. The filmmaker Stanley Kubrick said: 'I believe in the total perfection of the image.' Now you have the tools to see, and name, and think about what that perfection consists of. That is a remarkable thing to have learned.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "matching",
        title: "Australian Literature: Key Themes",
        instruction: "Match each key theme of Australian literature with its most common textual expression.",
        parentTip: "These themes recur across Australian literature from the nineteenth century to the present — recognising them in new texts is a fundamental reading skill.",
        left: ["The land", "Belonging and outsider-ness", "Colonial history", "Multicultural identity", "Survival and resilience"],
        right: [
          "Characters negotiating competing cultural inheritances in contemporary Australia",
          "The physical environment as a presence that shapes character and meaning",
          "The experience of never fully fitting in — to a place, a family, a nation",
          "Enduring extreme conditions — physical, emotional, or social",
          "The legacies of dispossession, settlement, and the relationship between First Nations and settler Australians",
        ],
      },
      // 2
      {
        type: "true-false",
        title: "Australian Literature: True or False?",
        instruction: "Decide whether each statement about Australian literature is true or false.",
        statements: [
          { text: "Australian literature is a single unified tradition with one dominant style.", answer: false },
          { text: "Aboriginal and Torres Strait Islander people have been telling stories on this continent for tens of thousands of years.", answer: true },
          { text: "The Australian landscape in early settler writing is almost always represented as familiar and welcoming.", answer: false },
          { text: "Questions of belonging and identity are central to a wide range of Australian literary texts.", answer: true },
          { text: "The Reading Australia Project curates significant Australian texts with teaching notes.", answer: true },
          { text: "Australian literature only includes texts written by people born in Australia.", answer: false },
        ],
      },
      // 3
      {
        type: "sorting",
        title: "Australian Literary Voices",
        instruction: "Sort these authors and text types into the correct column based on the cultural tradition they represent.",
        columns: ["First Nations literary tradition", "Settler/Colonial literary tradition", "Migrant/Multicultural literary tradition"],
        items: [
          { label: "Alexis Wright — Carpentaria" },
          { label: "Henry Lawson — bush ballads and stories" },
          { label: "Nam Le — The Boat" },
          { label: "Bruce Pascoe — Dark Emu" },
          { label: "Patrick White — Voss" },
          { label: "Christos Tsiolkas — The Slap" },
          { label: "Sally Morgan — My Place" },
          { label: "Tim Winton — Cloudstreet" },
        ],
      },
      // 4
      {
        type: "fill-in-blank",
        title: "Australian Literature Vocabulary",
        instruction: "Complete each sentence using the correct term: [terra nullius, dispossession, multicultural, colonial, reconciliation, sovereignty].",
        sentences: [
          { text: "The legal fiction that Australia was uninhabited before British settlement is called ___.", blanks: ["terra nullius"] },
          { text: "The forced removal of First Nations people from their traditional lands is called ___.", blanks: ["dispossession"] },
          { text: "The ongoing process of acknowledging historical wrongs and building respectful relationships between First Nations and non-Indigenous Australians is called ___.", blanks: ["reconciliation"] },
          { text: "Australia's ___ history shapes much of its literature — the experience of settlement and its consequences is a persistent theme.", blanks: ["colonial"] },
          { text: "The claim to political and cultural self-governance over land and peoples is called ___.", blanks: ["sovereignty"] },
          { text: "Contemporary Australia is celebrated as a ___ nation — home to people from many cultural backgrounds.", blanks: ["multicultural"] },
        ],
      },
      // 5
      {
        type: "multiple-choice",
        title: "Reading Australian Texts",
        instruction: "Choose the best answer for each question about reading Australian literature.",
        parentTip: "For any question where your student is unsure, ask them to consider what they already know about Australian history and culture before answering.",
        questions: [
          {
            prompt: "Why is contextual knowledge important when reading Australian literature?",
            options: [
              "It is not important — texts can be read without any background knowledge",
              "Australian literature references events, places, and debates that can only be fully understood with knowledge of Australian history and culture",
              "It tells the reader whether a text is good or bad",
              "It replaces the need to read the text closely",
            ],
            answer: "Australian literature references events, places, and debates that can only be fully understood with knowledge of Australian history and culture",
          },
          {
            prompt: "When reading a text by an Aboriginal or Torres Strait Islander author, why is it particularly important to seek out the author's own contextual notes?",
            options: [
              "To check whether the text is factually accurate",
              "Because the cultural knowledge embedded in such texts may not be accessible without the author's guidance, and seeking it shows respect for the work",
              "Because such texts are always autobiographical",
              "To find out which parts of the text were censored",
            ],
            answer: "Because the cultural knowledge embedded in such texts may not be accessible without the author's guidance, and seeking it shows respect for the work",
          },
        ],
      },
      // 6
      {
        type: "open-response",
        title: "Reading the Landscape",
        instruction: "Choose a passage from your Australian text in which the natural environment is described. Analyse how the writer represents the landscape.",
        parentTip: "The way landscape is written about in Australian literature is rarely neutral — it almost always carries cultural, historical, or emotional freight. Encourage your student to look beyond the descriptive surface.",
        prompts: [
          { text: "Quote or describe the passage you have chosen and identify the key descriptive language.", type: "lines", lines: 4 },
          { text: "How is the landscape represented — as beautiful, threatening, indifferent, alive, or something else? What language creates this impression?", type: "lines", lines: 4 },
          { text: "What does this representation of landscape reveal about the character's (or narrator's) relationship to the land and their cultural context?", type: "lines", lines: 4 },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "How Is the Land Represented?",
        instruction: "For each description of landscape, circle the type of representation it illustrates.",
        questions: [
          { prompt: "The outback described as hostile, alien, and punishing — draining characters of identity and hope.", options: ["Settler alienation", "Indigenous connection", "Multicultural"] },
          { prompt: "Country described as alive with story, ancestor presence, and obligation.", options: ["Settler alienation", "Indigenous country", "Urban"] },
          { prompt: "Suburban backyard described with domestic warmth and childhood memory.", options: ["Settler alienation", "Indigenous country", "Suburban/domestic"] },
          { prompt: "Landscape described through a migrant's eyes — strange, beautiful, and unlike anything back home.", options: ["Settler alienation", "Migrant perspective", "Indigenous country"] },
        ],
      },
      // 8
      {
        type: "open-response",
        title: "Identity and Belonging in Australian Texts",
        instruction: "Australian literature often explores questions of identity, belonging, and home. Reflect on these questions in relation to the text you are reading.",
        parentTip: "If your family has its own experience of migration, belonging, or cultural identity, this is a natural conversation to open up — personal connection to texts deepens analysis, not weakens it.",
        prompts: [
          { text: "How does the text explore the idea of belonging? Does the main character feel they belong, and to what or whom?", type: "lines", lines: 4 },
          { text: "Is there a tension in the text between different kinds of identity (cultural, national, familial, personal)? Describe it using evidence from the text.", type: "lines", lines: 4 },
          { text: "How does the historical or cultural context of Australia shape the characters' sense of identity? Connect the text to a specific aspect of Australian history or culture.", type: "lines", lines: 4 },
        ],
      },
      // 9
      {
        type: "true-false",
        title: "First Nations Literature",
        instruction: "Decide whether each statement about First Nations Australian literature is true or false.",
        parentTip: "These statements address common misconceptions and important truths about First Nations literary traditions — they are worth discussing rather than just marking.",
        statements: [
          { text: "Aboriginal and Torres Strait Islander literary traditions are entirely oral and have no written tradition.", answer: false },
          { text: "Reading First Nations literature with respect means seeking out the cultural context provided by the authors themselves.", answer: true },
          { text: "All First Nations Australian texts are autobiographical.", answer: false },
          { text: "First Nations authors write from within rich, complex cultural traditions that predate European settlement.", answer: true },
          { text: "Country in First Nations literature is purely a physical setting, like a backdrop.", answer: false },
          { text: "Non-Indigenous Australians can learn from First Nations literature perspectives on land, history, and sovereignty.", answer: true },
        ],
      },
      // 10
      {
        type: "open-response",
        title: "Australian History and Literature",
        instruction: "Australian literature is shaped by specific historical events and debates. For the text you are studying, identify the historical contexts that most shape its representations.",
        parentTip: "If your student is unfamiliar with the historical context, spend 10–15 minutes researching together before completing this activity — the investment pays dividends in analytical depth.",
        prompts: [
          { text: "What historical events or debates are most relevant to the text you are studying? (e.g. colonisation, the Stolen Generations, immigration waves, the republican debate, reconciliation)", type: "lines", lines: 4 },
          { text: "How does this history manifest in the text — directly (as explicit subject matter) or indirectly (as background assumptions, silences, or tensions)?", type: "lines", lines: 4 },
          { text: "Does the text take a position on this historical matter? What language choices reveal this position?", type: "lines", lines: 4 },
        ],
      },
      // 11
      {
        type: "fill-in-blank",
        title: "Analytical Vocabulary: Australian Literature",
        instruction: "Complete each analytical sentence using the correct term.",
        sentences: [
          { text: "The author represents the landscape as ___, which reflects the ___ of the colonial tradition that saw the Australian environment as foreign and ___.", blanks: ["...", "...", "..."] },
          { text: "By narrating from a First Nations perspective, the text ___ the dominant settler narrative by showing the land as ___ rather than ___.", blanks: ["subverts", "...", "..."] },
          { text: "The tension between the character's ___ identity and their ___ identity reflects the experience of many Australians navigating competing cultural inheritances.", blanks: ["...", "..."] },
          { text: "The historical context of ___ is central to understanding why this text represents [group] in this way.", blanks: ["..."] },
        ],
      },
      // 12
      {
        type: "open-response",
        title: "The Stolen Generations in Literature",
        instruction: "The Stolen Generations — the policy of forcibly removing Aboriginal and Torres Strait Islander children from their families — is one of the most significant historical traumas of twentieth-century Australia. It appears directly or indirectly in many First Nations literary texts.",
        parentTip: "This topic may require careful and sensitive discussion. If it connects to your family's history or identity, that personal connection is valuable and worth following. If it is entirely new territory, approaching it with genuine curiosity and humility is the right disposition.",
        prompts: [
          { text: "Is the experience of the Stolen Generations present in the text you are studying, either directly or indirectly? Describe how it appears.", type: "lines", lines: 4 },
          { text: "If it is not present in your current text, find a short extract from a text (poem, memoir, or fiction) that addresses this experience and analyse how the author represents it.", type: "lines", lines: 5 },
        ],
      },
      // 13
      {
        type: "matching",
        title: "Australian Literary Periods",
        instruction: "Match each period of Australian literary history with its characteristic concerns.",
        left: ["Colonial period (1788–1900)", "Early modern period (1900–1960)", "Post-1960s", "Contemporary (post-1980s)"],
        right: [
          "Increasing diversity of voices, multicultural and First Nations perspectives, global engagement",
          "European settlers writing about an unfamiliar and often frightening landscape; defining 'Australian' identity",
          "Nationalist literature; the bush legend; mateship; the Anzac tradition",
          "Challenges to white masculine nationalism; feminist, Indigenous, and migrant voices emerge",
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Contextual Analysis Paragraph",
        instruction: "Write one analytical paragraph that connects a specific aspect of your Australian text to its broader cultural or historical context. Use the structure: name a textual choice the author makes, explain its effect, and then explicitly connect it to the Australian context in which the text was produced.",
        parentTip: "The contextual connection is often the part students skip. Prompt your student: 'Why might an Australian author in [time period] write about [topic] in this way? What was happening in Australia at that time?'",
        prompts: [
          { text: "Your contextual analysis paragraph:", type: "box" },
          { text: "Does your paragraph explicitly name the cultural or historical context? If not, add that connection here:", type: "lines", lines: 4 },
        ],
      },
      // 15
      {
        type: "tip",
        title: "Tip: The Three Layers of Australian Literary Analysis",
        content: "When analysing Australian literature, attend to three layers simultaneously: (1) Place — how is the landscape or environment described, and what cultural meanings does it carry? (2) Community — whose relationships, values, and ways of living are centred, and whose are marginalised? (3) History — what historical events or legacies are present in this text, even if not explicitly stated? These three layers often illuminate each other and lead to the most sophisticated analysis.",
      },
      // 16
      {
        type: "open-response",
        title: "Voice and Perspective in Australian Texts",
        instruction: "The narrative perspective of an Australian text — who narrates, from where, with what knowledge — is as important as its content. Analyse the narrative perspective of the text you are studying.",
        parentTip: "Narrative perspective is particularly significant in Australian texts, where whose voice tells the story is often itself a political act.",
        prompts: [
          { text: "Who narrates your text? What is their cultural background and relationship to the events they describe?", type: "lines", lines: 3 },
          { text: "Does the narrative perspective give the reader full access to all characters' inner lives, or are some characters seen only from the outside?", type: "lines", lines: 4 },
          { text: "What is the effect of this narrative perspective on the text's representation of Australia?", type: "lines", lines: 4 },
        ],
      },
      // 17
      {
        type: "multiple-choice",
        title: "The Bush in Australian Literature",
        instruction: "Choose the best answer for each question about the representation of the bush in Australian literature.",
        questions: [
          {
            prompt: "In early settler writing, the Australian bush is most commonly represented as:",
            options: [
              "A welcoming and familiar environment",
              "A strange, threatening, and potentially fatal environment",
              "A place of spiritual significance and deep belonging",
              "Essentially identical to the English countryside",
            ],
            answer: "A strange, threatening, and potentially fatal environment",
          },
          {
            prompt: "In much First Nations writing, Country (the land) is represented as:",
            options: [
              "A dangerous wilderness to be conquered",
              "A neutral backdrop for human drama",
              "A living relationship — alive with story, obligation, and ancestor presence",
              "A resource to be used and managed",
            ],
            answer: "A living relationship — alive with story, obligation, and ancestor presence",
          },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Comparing Two Representations of the Australian Landscape",
        instruction: "Find two short passages from different Australian texts (or different authors) that describe the Australian landscape. Compare how they represent the land.",
        parentTip: "If your student only has one text, find a short excerpt from a different tradition online — the comparison will be most revealing if the two texts come from different cultural backgrounds.",
        prompts: [
          { text: "Passage A: quote or describe, and note the key language choices.", type: "lines", lines: 4 },
          { text: "Passage B: quote or describe, and note the key language choices.", type: "lines", lines: 4 },
          { text: "What does the difference in representation reveal about the different cultural contexts of these two authors?", type: "lines", lines: 4 },
        ],
      },
      // 19
      {
        type: "home-activity",
        title: "Australian Literature in Context",
        instruction: "This week, extend your engagement with Australian literature beyond the text you are currently studying.",
        suggestions: [
          "Read a poem by an Australian poet — Oodgeroo Noonuccal (Kath Walker), Judith Wright, or Les Murray — and identify how the landscape or identity is represented.",
          "Look up the Reading Australia Project website and explore a text or author that interests you. Read the contextual notes provided.",
          "Watch or listen to a short interview with an Australian author about their work. What do they say about their relationship to place, history, or identity?",
          "Find a current news story about an issue related to themes in your text (reconciliation, First Nations rights, migration, identity). Write a short reflection on how the text speaks to this issue.",
        ],
      },
      // 20
      {
        type: "spark",
        title: "Spark: Writing From Here",
        content: "The poet Judith Wright wrote: 'I am born of the conquerors, you of the persecuted.' She was addressing the deep divisions of Australian history — between those who came as settlers and those who were already here. Every Australian author writes from somewhere in this history, whether they know it or not. The best Australian literature is honest about this position — it does not pretend to write from nowhere. When you read Australian texts, asking 'where is this author writing from?' is always the right first question.",
      },

      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "TEEL Paragraph: Australian Literature and Context",
        instruction: "Write one TEEL paragraph analysing how a specific aspect of Australian identity, history, or landscape is represented in the text you are studying. Name a textual technique, provide evidence, explain its effect, and connect explicitly to Australian cultural or historical context.",
        parentTip: "The contextual connection — linking the textual choice to the specific Australian moment in which it was made — is what transforms a good analytical paragraph into an excellent one.",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
          { text: "Does your Explanation explicitly name the Australian cultural or historical context? If not, add that connection.", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "open-response",
        title: "Analysing an Australian Poem",
        instruction: "Choose a poem by an Australian author and conduct a close reading, with particular attention to how it represents place, identity, and cultural belonging.",
        parentTip: "Australian poetry is among the most accessible form for close reading — its compression makes textual detail especially visible. Poems by Oodgeroo Noonuccal, Judith Wright, or contemporary poets like Ali Cobby Eckermann work well.",
        prompts: [
          { text: "Poem title and author:", type: "lines", lines: 1 },
          { text: "Read the poem twice, then identify: what is it about? What is its emotional register?", type: "lines", lines: 3 },
          { text: "How does the poem represent place? Quote specific language and explain its effect.", type: "lines", lines: 4 },
          { text: "What Australian cultural or historical context is embedded in the poem? Connect the text to its context.", type: "lines", lines: 4 },
        ],
      },
      // 23
      {
        type: "matching",
        title: "Australian Authors and Their Concerns",
        instruction: "Match each Australian author with the theme or community most associated with their work.",
        parentTip: "These are all significant Australian authors — if your student has not encountered them, this matching activity can serve as an introduction to figures worth reading.",
        left: ["Tim Winton", "Alexis Wright", "Christos Tsiolkas", "Sally Morgan", "Tara June Winch"],
        right: [
          "Indigenous identity and the search for family history across generations",
          "Working-class Western Australian communities and the coast",
          "The complexity and conflicts of Australian multicultural urban life",
          "Wiradjuri country, belonging, and language",
          "Deeply imagined Aboriginal spiritual and political worlds in the Gulf Country",
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Migration and Identity in Australian Literature",
        instruction: "Australia has one of the most significant migration histories in the world. Many important Australian texts explore the experience of arriving in Australia, navigating between cultures, and building a new identity.",
        parentTip: "If your family has a migration history, this is a powerful point of personal connection to the literature. Personal experience of navigating cultural identity deepens literary analysis.",
        prompts: [
          { text: "Is the experience of migration or cultural negotiation present in the text you are studying? If so, how is it represented?", type: "lines", lines: 4 },
          { text: "If not, find a short extract from an Australian text that addresses migration or multicultural experience. What specific aspects of this experience does the author highlight?", type: "lines", lines: 4 },
          { text: "What does the text suggest about the complexity of Australian identity — the tension between different cultural inheritances?", type: "lines", lines: 4 },
        ],
      },
      // 25
      {
        type: "true-false",
        title: "Australian Identity in Literature",
        instruction: "Decide whether each statement about Australian identity in literature is true or false.",
        statements: [
          { text: "The 'bush legend' in Australian culture valorises mateship, resourcefulness, and independence.", answer: true },
          { text: "The bush legend has always been inclusive of women, migrants, and Indigenous Australians.", answer: false },
          { text: "Contemporary Australian literature increasingly challenges narrow definitions of 'Australian identity'.", answer: true },
          { text: "Australian identity is fixed and has not changed since the early colonial period.", answer: false },
          { text: "The tension between different versions of Australian identity is itself a productive theme in Australian literature.", answer: true },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "The Bush Legend and Its Critique",
        instruction: "The 'bush legend' — the idea of the rugged, independent, egalitarian Australian bushman — has been central to Australian national identity since the late nineteenth century. But it has also been critiqued for whom it excludes.",
        parentTip: "The bush legend is an ideology as much as a literary tradition — approaching it critically is exactly the kind of work this worksheet is building toward.",
        prompts: [
          { text: "What values and character types does the bush legend celebrate?", type: "lines", lines: 3 },
          { text: "Who is excluded from the bush legend's vision of Australian identity? (Consider: gender, race, class, location)", type: "lines", lines: 4 },
          { text: "Does the text you are studying engage with or critique the bush legend? How?", type: "lines", lines: 4 },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Reading a First Nations Text",
        instruction: "Find a short extract from a text by an Aboriginal or Torres Strait Islander author — a poem, memoir extract, or short story. Read it carefully, seeking out any available contextual notes or author statements.",
        parentTip: "Many First Nations authors explicitly discuss the cultural context of their work in author notes, interviews, and public statements — seeking these out is part of reading respectfully and reading well.",
        prompts: [
          { text: "Text details (title, author, genre):", type: "lines", lines: 2 },
          { text: "What cultural context did you find through the author's notes or interviews? How does it shape your reading of the extract?", type: "lines", lines: 4 },
          { text: "Analyse one aspect of the extract: how does it represent Country, identity, or history?", type: "lines", lines: 4 },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Tim Winton and Western Australian Landscape",
        instruction: "Tim Winton is one of Australia's most celebrated authors. His fiction is deeply embedded in the Western Australian coast and is known for its representation of class, landscape, and working-class identity.",
        parentTip: "If your student has not read Winton, a short extract from Cloudstreet, The Riders, or his essay collection Island Home would be excellent preparation for this activity.",
        prompts: [
          { text: "Read a short Winton extract or consider a Winton text you have encountered. How does he represent the Western Australian landscape?", type: "lines", lines: 4 },
          { text: "What relationship to the land do Winton's characters typically have? How is this different from earlier settler representations?", type: "lines", lines: 4 },
          { text: "What does Winton's work suggest about class, work, and belonging in Australian life?", type: "lines", lines: 4 },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Comparative Analysis: Two Australian Texts",
        instruction: "Compare how two Australian texts represent the same theme (e.g. belonging, the land, family, or history) differently. Explain what the difference reveals about the texts' different cultural contexts.",
        parentTip: "Comparative analysis is a sophisticated Year 9 skill. The most revealing comparisons are between texts from different cultural traditions within Australia — settler and First Nations, or first-generation migrant and third-generation Australian.",
        prompts: [
          { text: "Text A — theme and how it is represented:", type: "lines", lines: 4 },
          { text: "Text B — theme and how it is represented:", type: "lines", lines: 4 },
          { text: "What does the difference reveal about the texts' different cultural contexts?", type: "lines", lines: 4 },
        ],
      },
      // 30
      {
        type: "tip",
        title: "Tip: Context Is Not Background — It Is the Analysis",
        content: "In analytical writing about Australian literature, context is often treated as optional background information to be added at the start of an essay and then ignored. This is a missed opportunity. The most sophisticated analysis weaves context into every paragraph: 'The author's choice to do X reflects the historical moment of Y, in which Z was occurring.' Context is not decoration — it is the explanation of why a text represents the world the way it does.",
      },
      // 31
      {
        type: "open-response",
        title: "Reconciliation and Australian Literature",
        instruction: "Reconciliation — the ongoing process of acknowledging historical wrongs and building respectful relationships between First Nations and non-Indigenous Australians — is a central concern of much contemporary Australian literature.",
        parentTip: "Reconciliation is not a completed historical event but an ongoing process. Literature that engages with reconciliation is participating in that process. Discussing what reconciliation means in your own community's context enriches this activity.",
        prompts: [
          { text: "Does the text you are studying engage with reconciliation — explicitly or implicitly? Describe how.", type: "lines", lines: 4 },
          { text: "What position does the text seem to take on the possibility of reconciliation? Is it hopeful, ambivalent, or despairing?", type: "lines", lines: 4 },
          { text: "What role can literature play in the process of reconciliation?", type: "lines", lines: 4 },
        ],
      },
      // 32
      {
        type: "fill-in-blank",
        title: "Contextual Analytical Sentences",
        instruction: "Complete these contextual analytical sentences, connecting textual choices to Australian historical or cultural contexts.",
        sentences: [
          { text: "The author's representation of ___ as threatening and unknowable reflects the ___ of early settler culture, in which the Australian environment was experienced as ___.", blanks: ["...", "...", "..."] },
          { text: "By narrating from a First Nations perspective, the text challenges the dominant ___ narrative and positions the reader to understand ___ from within.", blanks: ["...", "..."] },
          { text: "The tension between the character's ___ and ___ identity reflects the experience of many Australians of ___ heritage navigating a society that does not always recognise ___.", blanks: ["...", "...", "...", "..."] },
          { text: "This text, written in ___, engages with the specific debates of that period: particularly ___.", blanks: ["...", "..."] },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Language and Country",
        instruction: "In First Nations traditions, language and land are deeply connected — the loss of language through colonial policies is also the loss of a relationship with Country. This connection appears in many First Nations literary texts.",
        parentTip: "The connection between language and country is one of the most profound concepts in Australian intellectual life — it is worth exploring together through reading or listening to First Nations authors discuss it.",
        prompts: [
          { text: "Does the text you are studying make any connection between language (or its loss) and the relationship to land or identity?", type: "lines", lines: 4 },
          { text: "If not, find a short passage from a First Nations author (Bruce Pascoe, Ali Cobby Eckermann, or Tara June Winch) that addresses this connection. What does the author say?", type: "lines", lines: 4 },
          { text: "What does this connection between language and land suggest about the consequences of colonisation for First Nations Australians?", type: "lines", lines: 4 },
        ],
      },
      // 34
      {
        type: "multiple-choice",
        title: "Australian Literary Analysis: Assessment Preparation",
        instruction: "Choose the most analytically sophisticated response to each question.",
        questions: [
          {
            prompt: "A student writes: 'The author describes the bush as scary.' This analysis needs improvement because:",
            options: [
              "The bush is not a common theme in Australian literature",
              "It is descriptive rather than analytical — it does not name a specific technique, quote evidence, or connect to cultural context",
              "The word 'scary' is not accurate enough",
              "It is too long for a good analytical statement",
            ],
            answer: "It is descriptive rather than analytical — it does not name a specific technique, quote evidence, or connect to cultural context",
          },
          {
            prompt: "The most sophisticated analyses of Australian literature will:",
            options: [
              "Focus only on the literary techniques and avoid discussing history",
              "Treat the text as reflecting Australian history and culture in a simple, direct way",
              "Connect specific textual choices to the specific cultural and historical moment of the text's production",
              "Summarise the text's plot before beginning the analysis",
            ],
            answer: "Connect specific textual choices to the specific cultural and historical moment of the text's production",
          },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Personal Response: What Does Australian Literature Mean to You?",
        instruction: "Reflect on your personal relationship to Australian literature — the texts, authors, and stories that have shaped your understanding of Australia.",
        parentTip: "Personal response is a legitimate and valuable dimension of literary analysis — students who can connect their personal experience to their analytical thinking produce more engaged and authentic writing.",
        prompts: [
          { text: "Which Australian text or author has meant most to you, and why?", type: "lines", lines: 4 },
          { text: "Does Australian literature connect to your own sense of identity, belonging, or place? How?", type: "lines", lines: 4 },
          { text: "Is there an aspect of Australian life or history that you wish was more represented in the literature you have encountered?", type: "lines", lines: 4 },
        ],
      },
      // 36
      {
        type: "open-response",
        title: "Planning an Essay on Australian Literature",
        instruction: "Plan an essay (600–800 words) on a text you have studied. Your essay should connect a specific aspect of the text's representation to Australian cultural or historical context.",
        parentTip: "The plan is where the essay is won or lost. A detailed plan that includes specific contextual connections at the paragraph level produces much stronger essays than a vague one.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 2 },
          { text: "Thesis statement (specific, arguable, connecting textual choice to Australian context):", type: "lines", lines: 3 },
          { text: "Paragraph topics in order (4–5, each with evidence and contextual connection):", type: "lines", lines: 8 },
          { text: "What insight will your conclusion arrive at?", type: "lines", lines: 3 },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Drafting the Australian Literature Essay",
        instruction: "Draft your essay (600–800 words) using your plan. In each body paragraph, ensure the contextual connection is explicitly made — do not assume the reader knows the context.",
        parentTip: "The most common weakness in Australian literature essays is treating context as assumed knowledge rather than as an explicit part of the analysis. Every contextual connection must be stated clearly.",
        prompts: [
          { text: "Essay draft:", type: "box" },
        ],
      },
      // 38
      {
        type: "true-false",
        title: "Contemporary Australian Literature",
        instruction: "Decide whether each statement about contemporary Australian literature is true or false.",
        statements: [
          { text: "Contemporary Australian literature increasingly includes voices from multicultural backgrounds.", answer: true },
          { text: "First Nations literature has become more prominent in Australian publishing since the 1980s.", answer: true },
          { text: "The dominant narrative of Australian national identity in contemporary literature is unchanged since the colonial era.", answer: false },
          { text: "Questions of environmental crisis and climate change are beginning to appear in Australian literary texts.", answer: true },
          { text: "Urban Australian life is as significant a subject for contemporary literature as the bush.", answer: true },
        ],
      },
      // 39
      {
        type: "home-activity",
        title: "Reading Australia Project Exploration",
        instruction: "Explore the Reading Australia Project (readingaustralia.com.au) this week.",
        suggestions: [
          "Browse the catalogue and find a text from a cultural tradition different from the one you are currently studying.",
          "Read the teaching notes for one text and identify: what contextual information is considered essential for understanding this text?",
          "Find an author interview or author note on the site and summarise what the author says about their relationship to place and identity.",
          "Write a short paragraph connecting the new text you found to the theme of identity in your current text.",
        ],
      },
      // 40
      {
        type: "spark",
        title: "Spark: The Literature of a Place",
        content: "Every great literary tradition is rooted in a specific place and its particular history. Russian literature is shaped by the Russian winter, the vast steppe, and the history of serfdom. American literature is shaped by slavery, immigration, and the frontier myth. Australian literature is shaped by the oldest continuous cultures on Earth, by colonisation and its ongoing legacies, by an extraordinary landscape, and by the experience of belonging to a continent that is also an island — vast, ancient, and unlike anywhere else. Learning to read this literature in its full context is learning to understand a place deeply.",
      },

      // ── CONSOLIDATING 41–80 ──────────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Revising for Contextual Depth",
        instruction: "Review your essay draft (Activity 37). Identify two places where the contextual connection could be more explicit or more detailed. Revise those sections.",
        parentTip: "Revision for contextual depth is one of the most important revision moves in Australian literature essays — it turns adequate analysis into sophisticated contextual argument.",
        prompts: [
          { text: "Two sections revised for contextual depth:", type: "box" },
          { text: "What specific contextual information did you add or make more explicit? Why does each addition strengthen the analysis?", type: "lines", lines: 4 },
        ],
      },
      // 42
      {
        type: "open-response",
        title: "Australian Literature and Environment",
        instruction: "The relationship between Australians and their environment is a persistent literary theme — from settler attempts to domesticate an alien landscape to First Nations understandings of Country, to contemporary anxieties about climate change and environmental destruction.",
        parentTip: "Ecocriticism — applying environmental thinking to literary analysis — is a growing field particularly relevant to Australian literature, given Australia's extreme environmental challenges and the richness of First Nations ecological knowledge.",
        prompts: [
          { text: "How does the text you are studying represent the natural environment, and what is the character's or narrator's relationship to it?", type: "lines", lines: 5 },
          { text: "Does the text suggest any environmental crisis, threat, or loss? How does this connect to contemporary Australian concerns?", type: "lines", lines: 4 },
          { text: "What does the text's representation of the environment reveal about the ideology of its cultural context?", type: "lines", lines: 4 },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Applying Critical Literacy to Australian Literature",
        instruction: "Apply the critical literacy skills from Worksheet 1 to your Australian text. Whose perspective is centred? Whose is marginalised? What is treated as 'normal', and what as 'other'?",
        parentTip: "Cross-worksheet integration — applying critical literacy to Australian literary analysis — is the most sophisticated analytical move at Year 9.",
        prompts: [
          { text: "Whose perspective is centred in your text? Who is the implied reader?", type: "lines", lines: 3 },
          { text: "Whose perspective is marginalised? Who is seen from the outside rather than the inside?", type: "lines", lines: 4 },
          { text: "What does this pattern of centring and marginalisation reveal about the text's ideology and its cultural moment?", type: "lines", lines: 4 },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Analysing a Short Story: Close Reading",
        instruction: "Choose a short story by an Australian author. Read it carefully and conduct a close textual analysis with particular attention to how it represents Australian experience.",
        parentTip: "Short stories are ideal for close reading at Year 9 — their length allows for the kind of sustained attention to detail that produces the most impressive analytical writing.",
        prompts: [
          { text: "Short story title and author:", type: "lines", lines: 1 },
          { text: "Close reading: identify three specific language choices (words, phrases, or sentences) that carry significant meaning about Australian identity, landscape, or history.", type: "lines", lines: 6 },
          { text: "Write one analytical paragraph connecting your most significant observation to Australian cultural or historical context.", type: "box" },
        ],
      },
      // 45
      {
        type: "tip",
        title: "Tip: Quoting Australian Texts",
        content: "When quoting from Australian texts in your essays, choose quotations that do genuine analytical work — that demonstrate a specific technique or reveal something about the author's cultural position. Avoid choosing quotations just because they sound impressive or because they summarise the plot. Ask yourself: does this quotation provide evidence for my analytical claim? If so, use it. If not, find one that does.",
      },
      // 46
      {
        type: "open-response",
        title: "Extended Analysis: Landscape and Culture",
        instruction: "Write a two-paragraph extended analysis of how your Australian text represents the relationship between landscape and cultural identity. Each paragraph should make a distinct analytical point with specific textual evidence and contextual connection.",
        parentTip: "Two-paragraph responses develop the skill of sustaining analytical argument beyond a single paragraph — an important step toward the extended essays assessed at Year 9.",
        prompts: [
          { text: "Paragraph 1 (first analytical point about landscape and culture):", type: "box" },
          { text: "Paragraph 2 (second, distinct analytical point):", type: "box" },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Peer Review: Australian Literature Essay",
        instruction: "Exchange your essay with another reader (parent or peer) and complete the peer review below.",
        parentTip: "Parents can conduct this review thoughtfully — the questions are a framework for any critical reader to engage with the essay's analytical quality.",
        prompts: [
          { text: "What is the writer's central argument about the text and its Australian context?", type: "lines", lines: 2 },
          { text: "Which contextual connection is most convincing?", type: "lines", lines: 3 },
          { text: "Where does the analysis feel thin or disconnected from the Australian context?", type: "lines", lines: 4 },
          { text: "Is the thesis specific and arguable, or too general?", type: "lines", lines: 3 },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Responding to Feedback",
        instruction: "Read the peer review feedback. Which feedback do you agree with? Revise one paragraph in response to the most significant piece of feedback.",
        parentTip: "Students who genuinely act on feedback improve their writing faster than those who acknowledge feedback without acting on it.",
        prompts: [
          { text: "Your response to the feedback:", type: "lines", lines: 3 },
          { text: "Revised paragraph:", type: "box" },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Australian Literature and National Identity",
        instruction: "Australian literature has been central to defining and contesting the idea of 'Australian national identity'. Explore this idea in relation to texts you have studied.",
        parentTip: "The question of what it means to be Australian — who belongs, who is excluded, whose values are central — is one of the most generative and contested questions in Australian literary culture.",
        prompts: [
          { text: "What version of Australian national identity does the text you are studying project or contest?", type: "lines", lines: 4 },
          { text: "Who is included in this vision of Australian identity, and who is excluded?", type: "lines", lines: 4 },
          { text: "Does the text challenge or reinforce the dominant narrative of Australian national identity? What textual evidence supports your answer?", type: "lines", lines: 4 },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Synthesis: What Australian Literature Does",
        instruction: "Write a short synthesis response (200–300 words) on what you believe Australian literature does at its best — what work it performs culturally, historically, and personally for its readers.",
        parentTip: "This synthesis question invites genuine personal response alongside critical thinking — encourage your student to write in their own voice, not in formal essay register.",
        prompts: [
          { text: "Your synthesis response:", type: "box" },
        ],
      },
      // 51
      {
        type: "true-false",
        title: "Australian Literature: Consolidation Check",
        instruction: "A consolidation check on key concepts in Australian literature study.",
        statements: [
          { text: "The Reading Australia Project provides curated texts with teaching notes and author context.", answer: true },
          { text: "In Australian literature, the bush is always represented in the same way regardless of the author's cultural background.", answer: false },
          { text: "The experience of the Stolen Generations appears in many First Nations Australian literary texts.", answer: true },
          { text: "Contextual analysis means connecting textual choices to the cultural and historical moment of a text's production.", answer: true },
          { text: "Tim Winton is primarily associated with Queensland literature.", answer: false },
          { text: "Contemporary Australian literature is more culturally diverse than the literature of the colonial period.", answer: true },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Completing the Essay: Full Draft",
        instruction: "Complete the full draft of your Australian literature essay (600–800 words) if not already done. If complete, use this activity for a sustained revision session focusing on contextual depth and analytical precision.",
        parentTip: "For revision: read the draft aloud together. Mark every place where context is mentioned — is it genuinely woven into the analysis, or just gestured at?",
        prompts: [
          { text: "Full essay draft or revision record:", type: "box" },
        ],
      },
      // 53
      {
        type: "open-response",
        title: "Examination Practice: Australian Literature",
        instruction: "Respond to the following examination-style prompt in 40 minutes: 'How does the Australian text you have studied use specific literary techniques to represent an aspect of Australian identity, landscape, or history? Your response should connect your analysis to the cultural or historical context of the text.'",
        parentTip: "Timed practice simulates the conditions of formal assessment. Debrief afterwards: what did you plan quickly? What took time? What would you do differently?",
        prompts: [
          { text: "Planning notes:", type: "lines", lines: 4 },
          { text: "Full response:", type: "box" },
          { text: "Self-evaluation: What went well? What would you improve?", type: "lines", lines: 4 },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Australian Literature and Climate",
        instruction: "Climate and weather have always been central to Australian literary experience — the extreme heat, the drought, the fire, the flood. In recent decades, climate change has begun to appear in Australian literature as a specific contemporary anxiety.",
        parentTip: "The literary representation of climate and environmental crisis is a genuinely contemporary and important area of Australian literature — connecting it to current events makes the study feel urgent and relevant.",
        prompts: [
          { text: "Does the text you are studying engage with climate, weather, or environmental conditions in significant ways? How?", type: "lines", lines: 4 },
          { text: "What does the text's treatment of the natural world suggest about the relationship between Australians and their environment?", type: "lines", lines: 4 },
          { text: "How might contemporary anxieties about climate change affect future Australian literary representations of the land?", type: "lines", lines: 3 },
        ],
      },
      // 55
      {
        type: "home-activity",
        title: "Australian Literature Portfolio",
        instruction: "This week, build a short portfolio of Australian literary engagement.",
        suggestions: [
          "Read one Australian poem and write a short close reading paragraph connecting it to Australian cultural context.",
          "Watch a short Australian film (or a clip) and apply multimodal analysis and Australian context analysis together.",
          "Find an interview with an Australian author discussing their relationship to place and identity. Write a brief summary of what they say.",
          "Write a short creative piece (150–200 words) inspired by the Australian landscape or history, in the style of an author you have studied.",
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Australian Literature and Diaspora",
        instruction: "Many significant Australian literary texts are written by Australians living abroad, or by migrants writing from Australia about their country of origin. This diasporic perspective creates unique literary voices.",
        parentTip: "Diaspora literature — writing from the experience of living between two cultures — is among the richest and most complex in Australian literature.",
        prompts: [
          { text: "Have you encountered any Australian literary texts that engage with diaspora or the experience of living between cultures? Describe them briefly.", type: "lines", lines: 4 },
          { text: "What does a diasporic perspective bring to Australian literature that a settled perspective does not?", type: "lines", lines: 4 },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "Australian Literature and Gender",
        instruction: "Apply feminist critical thinking to an Australian text you have studied. How are gender roles and relationships represented? Whose experience is centred?",
        parentTip: "Feminist analysis of Australian literature reveals how gender has shaped what has been considered 'truly Australian' — the bush legend's exclusion of women is the clearest example.",
        prompts: [
          { text: "How are gender roles represented in your Australian text? Are they conventional or subversive?", type: "lines", lines: 4 },
          { text: "Whose experience — male or female — is centred in the narrative? What effect does this have?", type: "lines", lines: 4 },
          { text: "What does this gender representation reveal about the cultural context in which the text was produced?", type: "lines", lines: 4 },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Comparative Essay: Two Australian Texts",
        instruction: "Write a comparative essay (600–800 words) on two Australian texts from different cultural traditions (e.g. settler and First Nations; first-generation migrant and third-generation Australian). Focus on how the different cultural contexts shape their representations.",
        parentTip: "Comparative essays require a structure that genuinely integrates the comparison — moving between the texts — rather than treating them sequentially.",
        prompts: [
          { text: "Your comparative essay:", type: "box" },
          { text: "Does your essay integrate the comparison or treat each text separately? What revisions would improve the integration?", type: "lines", lines: 4 },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Self-Assessment: Australian Literature",
        instruction: "Reflect honestly on your development as a reader and analyst of Australian literature throughout this worksheet.",
        prompts: [
          { text: "Which concept or author introduced in this worksheet was most new or challenging?", type: "lines", lines: 3 },
          { text: "How has this worksheet changed or deepened how you think about Australian identity and culture?", type: "lines", lines: 4 },
          { text: "What aspect of Australian literary study will you focus on developing further?", type: "lines", lines: 3 },
        ],
      },
      // 60
      {
        type: "tip",
        title: "Tip: Writing About First Nations Texts With Respect",
        content: "When writing analytical essays about First Nations Australian texts, handle the material with both intellectual rigour and cultural respect. This means: seeking out the author's own contextual notes rather than interpreting from outside; avoiding the imposition of non-Indigenous critical frameworks without acknowledgement; recognising the cultural knowledge embedded in the text as belonging to the community it comes from; and being explicit about the limits of your own perspective as an outside reader. Rigorous and respectful analysis are not in opposition — they reinforce each other.",
      },

      // ── EXTENDING 61–100 ──────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Independent Research: Australian Literary Context",
        instruction: "Choose an event or period from Australian history and research how it has been represented in Australian literature. Find at least two literary texts (or extracts) that engage with this event or period.",
        parentTip: "Independent research connecting history to literature is one of the most rewarding forms of extended learning at Year 9 — encourage your student to follow genuine curiosity.",
        prompts: [
          { text: "Historical event or period chosen:", type: "lines", lines: 2 },
          { text: "Text A and how it represents this history:", type: "lines", lines: 4 },
          { text: "Text B and how it represents this history:", type: "lines", lines: 4 },
          { text: "What does the comparison reveal about different literary responses to the same historical moment?", type: "lines", lines: 4 },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Australian Literature and the World",
        instruction: "Australian literature exists within a global literary context. Some Australian authors are read internationally and have influenced world literature; others engage directly with global issues from an Australian perspective.",
        prompts: [
          { text: "How does the Australian text you are studying engage with global issues or connect to world literature?", type: "lines", lines: 4 },
          { text: "What is distinctively Australian about this text — what could not have been written from any other place?", type: "lines", lines: 4 },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Extended Essay: Australian Literature",
        instruction: "Complete the most polished version of your Australian literature essay. This should be 700–900 words and demonstrate: specific textual analysis, explicit contextual connections, and a sustained argument developed across all body paragraphs.",
        parentTip: "This final essay is a culminating task — encourage your student to treat it as a performance of everything they have learned in this worksheet.",
        prompts: [
          { text: "Final essay:", type: "box" },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Creating an Australian Literature Resource",
        instruction: "Create a guide to Australian literature for a student beginning Year 9. Include: key themes, important authors (at least one from each of the three traditions: settler, First Nations, multicultural), and three study tips for approaching Australian texts.",
        parentTip: "Creating a resource for others consolidates understanding and demonstrates the capacity to communicate complex ideas accessibly — a valuable skill at this level.",
        prompts: [
          { text: "Your Australian literature guide:", type: "box" },
          { text: "What was hardest to explain simply?", type: "lines", lines: 3 },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Australian Literature and Creative Response",
        instruction: "Write a short creative response (150–250 words) to the text you have been studying — a poem, a scene from another character's perspective, a continuation, or a response from a character's future self.",
        parentTip: "Creative response to a text is a legitimate and valuable form of literary engagement — it requires genuine understanding of the text's voice, world, and concerns.",
        prompts: [
          { text: "Your creative response:", type: "box" },
          { text: "What choices did you make to reflect the text's themes, voice, and cultural context?", type: "lines", lines: 4 },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Connecting Australian Literature to Current Events",
        instruction: "Find a current Australian news story that connects to a theme in the text you have been studying (e.g. a story about reconciliation, land rights, migration, identity, or environmental change).",
        parentTip: "Connecting literature to current events demonstrates that the text is not a historical artefact but a living engagement with ongoing issues — this connection is both analytically valuable and motivating.",
        prompts: [
          { text: "The news story and how it connects to your text:", type: "lines", lines: 4 },
          { text: "What does the text say about this issue that the news story does not?", type: "lines", lines: 4 },
          { text: "What does the news story reveal about why the text still matters?", type: "lines", lines: 3 },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Australian Memoir and Personal Essay",
        instruction: "Memoir and personal essay are important genres in Australian literature — authors such as Sally Morgan, Tim Winton, and Bruce Pascoe have written powerfully about their own lives and cultural experiences.",
        parentTip: "Memoir is particularly rich territory for Australian literary analysis because it blurs the boundary between personal experience and cultural history — a useful discussion point.",
        prompts: [
          { text: "Have you read any Australian memoir or personal essay? Describe it briefly.", type: "lines", lines: 3 },
          { text: "How does the personal voice of memoir allow an Australian author to explore cultural and historical themes in a unique way?", type: "lines", lines: 4 },
          { text: "How does this differ from the way fiction or poetry explores the same themes?", type: "lines", lines: 4 },
        ],
      },
      // 68
      {
        type: "home-activity",
        title: "Australian Literature: Reading Challenge",
        instruction: "This month, set yourself a reading challenge within Australian literature.",
        suggestions: [
          "Read a full short story collection by an Australian author from a cultural tradition different from your own.",
          "Read or listen to a collection of Aboriginal stories or oral narratives.",
          "Read a chapter from a significant Australian novel outside your current study text.",
          "Keep a reading journal: write a short response to each text you read, applying one concept from this worksheet.",
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Australian Literature: Future Voices",
        instruction: "Australian literature continues to evolve. New voices are emerging — from communities previously excluded from mainstream publishing, and engaging with contemporary issues like digital identity, climate change, and global connection.",
        prompts: [
          { text: "What communities or experiences do you think are currently underrepresented in Australian literature?", type: "lines", lines: 4 },
          { text: "What new forms or genres might future Australian literature adopt in response to contemporary life?", type: "lines", lines: 4 },
          { text: "Is there a story about Australian life that you feel needs to be told and has not been written yet?", type: "lines", lines: 4 },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Extended Research Project: Australian Author Study",
        instruction: "Choose one Australian author and conduct a sustained author study (800–1000 words). Research their life, cultural context, major works, and critical reception. Apply what you learn to a close reading of one text.",
        parentTip: "An author study at this depth is one of the most rewarding extended research activities — encourage your student to follow genuine interest in their chosen author.",
        prompts: [
          { text: "Author chosen and reason:", type: "lines", lines: 2 },
          { text: "Your author study:", type: "box" },
        ],
      },
      // 71
      {
        type: "true-false",
        title: "Final Mastery Check: Australian Literature",
        instruction: "A final mastery check across all the Australian literature concepts in this worksheet.",
        statements: [
          { text: "Australian literature encompasses settler, First Nations, and multicultural traditions.", answer: true },
          { text: "The bush legend has been critiqued for its exclusion of women, Indigenous Australians, and migrants.", answer: true },
          { text: "Contextual analysis in Australian literature means adding a paragraph about Australian history to the end of an essay.", answer: false },
          { text: "First Nations literature in Australia includes oral traditions as well as written texts.", answer: true },
          { text: "The Reading Australia Project is a curated resource for teachers and students of Australian literature.", answer: true },
          { text: "Australian literature has been closed to new voices since the colonial era.", answer: false },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Australian Literature Portfolio",
        instruction: "Select the three best pieces of writing from this worksheet. Write a brief framing statement for each explaining what it demonstrates about your skills as a reader and analyst of Australian literature.",
        prompts: [
          { text: "Piece 1 selected and why:", type: "lines", lines: 3 },
          { text: "Piece 2 selected and why:", type: "lines", lines: 3 },
          { text: "Piece 3 selected and why:", type: "lines", lines: 3 },
          { text: "What does your portfolio demonstrate about your development as a reader of Australian literature?", type: "lines", lines: 4 },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Sustained Analysis: Three Frameworks",
        instruction: "Write an extended analysis (600–800 words) of your Australian text using THREE critical frameworks simultaneously: literary analysis (techniques and effects), contextual analysis (cultural and historical context), and critical literacy (whose perspective is centred and whose is marginalised).",
        parentTip: "Applying three frameworks simultaneously in a sustained piece of writing is the highest analytical demand in this worksheet — it is also the most likely to produce writing that feels genuinely sophisticated.",
        prompts: [
          { text: "Your three-framework analysis:", type: "box" },
          { text: "Which framework added the most to your understanding? Which was hardest to integrate?", type: "lines", lines: 4 },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Final Reflection: Australian Literature",
        instruction: "Reflect on what you have learned about Australian literature, culture, and history through this worksheet.",
        prompts: [
          { text: "What is the most significant thing you have learned about Australian literary culture through this worksheet?", type: "lines", lines: 4 },
          { text: "Has studying Australian literature changed how you think about Australian identity or history? How?", type: "lines", lines: 4 },
          { text: "What Australian author or text will you seek out next, and why?", type: "lines", lines: 3 },
        ],
      },
      // 75
      {
        type: "tip",
        title: "Tip: Excellence in Australian Literature Essays",
        content: "At the highest level, essays about Australian literature demonstrate: (1) specific, well-chosen quotations that serve the analytical argument; (2) contextual connections that are woven into every paragraph rather than confined to an introduction; (3) awareness of the cultural tradition the author belongs to and how it shapes their representation; (4) acknowledgement of the complexity of Australian identity — not a single, fixed narrative; (5) a conclusion that arrives at a broader insight about Australian culture, history, or identity. Review your essays against these criteria.",
      },
      // 76
      {
        type: "open-response",
        title: "Teaching Australian Literature to Someone Else",
        instruction: "Explain to a parent, sibling, or friend what Australian literature is, why it matters, and what you find most interesting or significant about it.",
        parentTip: "Teaching is the most rigorous form of learning — how well your student can explain Australian literature to someone unfamiliar with it reveals what they truly understand.",
        prompts: [
          { text: "Which text did you use as an example? Who did you explain to?", type: "lines", lines: 2 },
          { text: "How did the conversation go? What questions did they ask?", type: "lines", lines: 4 },
          { text: "What did explaining it teach you about your own understanding?", type: "lines", lines: 3 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Australian Literature and Your Own Writing",
        instruction: "Apply what you have learned about Australian literary techniques and themes to your own creative or analytical writing. Is there an aspect of Australian experience — landscape, history, identity — that you want to explore in your own writing?",
        prompts: [
          { text: "What aspect of Australian experience do you want to explore in your own writing?", type: "lines", lines: 3 },
          { text: "Which Australian author's style or approach do you find most inspiring? What specific elements might you draw on?", type: "lines", lines: 4 },
          { text: "Write a short creative piece (100–200 words) that explores an aspect of Australian experience in your own voice:", type: "box" },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Australian Literature: A Broader Significance",
        instruction: "Reflect on why reading and studying Australian literature matters — not just for English class, but for understanding Australia and your place in it.",
        parentTip: "This reflective discussion is an opportunity to discuss together what it means to be Australian — a conversation that has no single answer but is worth having.",
        prompts: [
          { text: "Why does it matter that Australians read Australian literature?", type: "lines", lines: 4 },
          { text: "What can Australian literature teach non-Australians about this country?", type: "lines", lines: 3 },
          { text: "What does Australian literature most need more of right now?", type: "lines", lines: 3 },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Final Examination Practice: Australian Literature",
        instruction: "Respond to the following examination-style prompt in 45 minutes: 'Analyse how a specific Australian text uses literary techniques to represent an aspect of Australian cultural identity. Connect your analysis to the cultural or historical context of the text.'",
        parentTip: "Treat this as genuine examination practice — set a timer and plan before writing. The debriefing afterwards is as valuable as the response itself.",
        prompts: [
          { text: "Planning notes:", type: "lines", lines: 5 },
          { text: "Full response:", type: "box" },
          { text: "Self-evaluation: What mark would you give yourself and why?", type: "lines", lines: 4 },
        ],
      },
      // 80
      {
        type: "spark",
        title: "Spark: Reading This Country",
        content: "The writer David Malouf has said that Australian literature is still, in some ways, trying to come to terms with the country — trying to find a language adequate to the landscape, the history, and the full range of human experience that has occurred here. That work is still happening. Every Australian author who writes honestly about this place is contributing to that project. And every reader who engages seriously with their work is participating in it too. Reading Australian literature is a form of belonging to and thinking about this remarkable, complicated place.",
      },
      // 81
      {
        type: "open-response",
        title: "Extending: Australian Literature in Translation",
        instruction: "Several significant Aboriginal literary works have been translated from Indigenous languages or draw explicitly on oral traditions. Research one such text and reflect on what translation adds or removes from the literary experience.",
        prompts: [
          { text: "Text researched:", type: "lines", lines: 2 },
          { text: "What does the process of translation (or transcription from oral tradition) add to or complicate in this text?", type: "lines", lines: 5 },
          { text: "What does this reveal about the relationship between language, culture, and literary meaning?", type: "lines", lines: 4 },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Advanced: Applying Postcolonial Theory",
        instruction: "Apply postcolonial critical theory explicitly to an Australian text. Identify: how does the text reflect the legacies of colonialism? Whose knowledge is treated as authoritative? How does the text position itself in relation to colonial discourse?",
        parentTip: "Postcolonial theory is the most directly relevant critical framework for much Australian literature — applying it explicitly demonstrates the highest level of critical literacy and literary sophistication.",
        prompts: [
          { text: "Your postcolonial analysis:", type: "box" },
          { text: "What specific aspects of the text are most illuminated by postcolonial theory?", type: "lines", lines: 4 },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Australian Literature: Oral Traditions",
        instruction: "Aboriginal and Torres Strait Islander oral traditions are among the oldest literary traditions on Earth. Research one oral tradition (Dreamtime stories, songlines, or specific cultural narrative traditions) and reflect on what makes it a literary form.",
        parentTip: "Approaching oral traditions as literature — not as anthropological curiosities but as sophisticated narrative forms with their own conventions and aesthetic qualities — is an important move.",
        prompts: [
          { text: "Oral tradition researched:", type: "lines", lines: 2 },
          { text: "What makes this oral tradition a literary form? What aesthetic, narrative, and cultural qualities does it demonstrate?", type: "lines", lines: 5 },
          { text: "How does engaging with this tradition change your understanding of 'literature'?", type: "lines", lines: 4 },
        ],
      },
      // 84
      {
        type: "home-activity",
        title: "Australian Literature: Community Engagement",
        instruction: "Bring Australian literature into your broader life and community this week.",
        suggestions: [
          "Visit a public library and ask a librarian to recommend an Australian author you have not encountered. Read the first chapter.",
          "Attend or watch a recording of a literary festival event featuring an Australian author.",
          "Share a poem by an Australian author with a family member and discuss it together.",
          "Find out whether your local area has any connection to Australian literary culture (e.g. a famous author who lived nearby, a significant historical event that has been written about).",
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Australian Literature and Digital Culture",
        instruction: "Australian literary culture is changing with digital technology — e-books, podcasts, social media, and online publishing are creating new forms and new audiences. Reflect on how digital culture is shaping Australian literature.",
        prompts: [
          { text: "Have you encountered any Australian literature or literary culture through digital platforms? Describe it.", type: "lines", lines: 3 },
          { text: "What opportunities does digital culture create for Australian literary voices that might have been excluded from traditional publishing?", type: "lines", lines: 4 },
          { text: "What might be lost if Australian literary culture moves entirely to digital formats?", type: "lines", lines: 3 },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Advanced Essay: Three Critical Frameworks",
        instruction: "Write an essay (700–900 words) applying three critical frameworks to a single Australian text: literary analysis, contextual/postcolonial analysis, and critical literacy. Your essay should demonstrate how the three frameworks complement each other.",
        parentTip: "There is no single correct way to structure an essay using multiple frameworks — some students alternate frameworks by paragraph, others apply them all to each paragraph. Experiment to find what works best.",
        prompts: [
          { text: "Your three-framework essay:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Reflecting on Australian Identity",
        instruction: "Having studied Australian literature in depth, write a personal reflection on your own sense of Australian identity — how you relate to the stories, landscapes, and histories you have encountered.",
        parentTip: "This is perhaps the most personal activity in the worksheet — encourage genuine honesty and openness rather than performative responses.",
        prompts: [
          { text: "What aspects of Australian identity resonate most strongly with you personally?", type: "lines", lines: 4 },
          { text: "What aspects of Australian identity or history do you find most challenging, troubling, or in need of change?", type: "lines", lines: 4 },
          { text: "How has studying Australian literature shaped or deepened your sense of what it means to live here?", type: "lines", lines: 4 },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Australian Literature: Independent Study Plan",
        instruction: "Design a personal reading plan for the next six months in Australian literature. Choose texts that will extend your understanding beyond your current study.",
        parentTip: "Self-directed reading planning is a metacognitive skill that develops genuine independence as a reader. Supporting your student in following through with their reading plan is one of the most valuable things you can do.",
        prompts: [
          { text: "Your six-month Australian literature reading plan (at least four texts):", type: "lines", lines: 6 },
          { text: "What do you most want to understand about Australian literature that you do not yet understand?", type: "lines", lines: 3 },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Final Synthesis: Australian Literature",
        instruction: "Write a 300-word personal statement on what Australian literature means to you — as a student, a reader, and an inhabitant of Australia. Draw on specific texts and authors from this worksheet.",
        prompts: [
          { text: "Your personal statement on Australian literature:", type: "box" },
        ],
      },
      // 90
      {
        type: "tip",
        title: "Tip: Reading Australian Literature Throughout Your Life",
        content: "Australian literature is not a subject to be studied and then put down. The best Australian writing — by Tim Winton, Alexis Wright, Sally Morgan, Bruce Pascoe, Kim Scott, and many others — rewards rereading at different points in your life. A text you read at fifteen will mean something different at thirty, because you have changed and because you see the Australian context differently. The investment you make in understanding this literature now will pay dividends across a lifetime of reading.",
      },
      // 91
      {
        type: "open-response",
        title: "Independent Research: Significant Australian Text",
        instruction: "Choose a significant Australian text you have not yet studied — one frequently cited as important in Australian literary culture — and conduct an independent research-based analysis (600–800 words).",
        parentTip: "Significant Australian texts include: Dark Emu (Pascoe), Carpentaria (Wright), Cloudstreet (Winton), The Boat (Nam Le), The Swan Book (Wright), Grog War (Tara June Winch). Any of these are excellent choices.",
        prompts: [
          { text: "Text chosen and why:", type: "lines", lines: 2 },
          { text: "Your research-based analysis:", type: "box" },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Comparative Critical Analysis: Final",
        instruction: "Write a final comparative critical analysis (600–800 words) of two Australian texts from different cultural traditions. Apply literary analysis, contextual analysis, and critical literacy simultaneously.",
        prompts: [
          { text: "Your final comparative critical analysis:", type: "box" },
          { text: "What new insight about Australian literary culture did this comparison produce?", type: "lines", lines: 4 },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Australian Literature: Your Own Contribution",
        instruction: "If you were to write a piece of Australian literature, what story would you tell? Plan a short creative work (poem, story opening, or essay) that contributes to Australian literary culture.",
        parentTip: "This invitation to contribute to Australian literature — rather than simply to consume and analyse it — is the highest expression of literary education.",
        prompts: [
          { text: "Your creative plan or opening:", type: "box" },
          { text: "What aspects of Australian experience do you most want to put into words? Why?", type: "lines", lines: 4 },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Growth Reflection: Australian Literature",
        instruction: "Look back at your earliest activities in this worksheet (Activities 1–10). How has your understanding of Australian literature grown? What can you do now that you could not do at the start?",
        prompts: [
          { text: "Your reflection on growth:", type: "lines", lines: 6 },
          { text: "What is the single most important thing you have learned about Australian literature?", type: "lines", lines: 3 },
        ],
      },
      // 95
      {
        type: "true-false",
        title: "Final Review: All Australian Literature Concepts",
        instruction: "A comprehensive final review of all the Australian literature concepts from this worksheet.",
        statements: [
          { text: "Country in First Nations literature is typically represented as a passive, neutral backdrop.", answer: false },
          { text: "Postcolonial theory is relevant to the analysis of Australian literature.", answer: true },
          { text: "The bush legend has been challenged by feminist, Indigenous, and multicultural Australian writers.", answer: true },
          { text: "Australian literary analysis does not require knowledge of Australian history.", answer: false },
          { text: "Memoir is an important genre in First Nations Australian literature.", answer: true },
          { text: "Australian literature is a completed, fixed tradition with no new significant voices emerging.", answer: false },
        ],
      },
      // 96
      {
        type: "home-activity",
        title: "Lifelong Habits: Australian Literature",
        instruction: "Here are habits for engaging with Australian literature beyond this worksheet.",
        suggestions: [
          "Maintain an ongoing reading list of Australian texts you want to read — add to it whenever you hear about a significant text.",
          "Follow Australian literary news: the Miles Franklin Award, the Queensland Premier's Literary Awards, and AIATSIS prizes all highlight significant new Australian writing.",
          "Visit a local bookshop's Australian literature section annually and choose one new text that interests you.",
          "When you travel in Australia, seek out texts connected to the specific place you are visiting.",
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Final Extended Essay: Australian Literature",
        instruction: "Complete your best, most polished extended essay on Australian literature (750–950 words). Apply the full range of skills developed in this worksheet: literary analysis, contextual analysis, and critical literacy.",
        parentTip: "This final essay represents the culmination of all the work in this worksheet. Encourage your student to treat it with the care and attention it deserves — it should be their best analytical writing.",
        prompts: [
          { text: "Final essay:", type: "box" },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Australian Literature and Other Art Forms",
        instruction: "Australian literature has inspired and been inspired by other Australian art forms — music, visual art, film, dance. Reflect on these connections.",
        prompts: [
          { text: "Can you think of an Australian song, painting, or film that explores similar themes to the text you have been studying?", type: "lines", lines: 3 },
          { text: "How do these different art forms approach the same Australian themes differently?", type: "lines", lines: 4 },
          { text: "What can Australian literature do that other art forms cannot?", type: "lines", lines: 3 },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Examination Mastery: Australian Literature",
        instruction: "Respond to a self-chosen examination-style prompt (write your own question) about the Australian text you have studied in depth. Respond in 45 minutes. Then evaluate your response against Year 9 criteria.",
        prompts: [
          { text: "Your examination question:", type: "lines", lines: 2 },
          { text: "Your examination response:", type: "box" },
          { text: "Self-evaluation: How well did you apply contextual analysis, literary technique, and critical literacy? What would improve the response?", type: "lines", lines: 5 },
        ],
      },
      // 100
      {
        type: "spark",
        title: "Spark: This Country Is a Story",
        content: "Australia is a place with tens of thousands of years of story embedded in its rocks, rivers, and skies. It is also a place where some stories have been suppressed, distorted, or ignored. Australian literature — at its best — is the act of telling these stories honestly: the painful ones and the beautiful ones, the stories of loss and the stories of connection. Every reader who engages seriously with Australian literature becomes part of that ongoing story. You are part of it now.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "true-false",
        title: "Personal Writing: True or False?",
        instruction: "Mark each statement about personal and reflective writing as true or false.",
        statements: [
          { text: "Personal writing must be written in the first person (using 'I').", answer: true },
          { text: "A personal essay is always entirely factual, with no interpretation.", answer: false },
          { text: "Reflective writing involves thinking about the meaning of an experience.", answer: true },
          { text: "In a memoir, the writer can never speculate about what they were feeling.", answer: false },
          { text: "Scene writing recreates a moment with sensory detail in real time.", answer: true },
          { text: "The 'experiencing self' and the 'reflecting self' are the same voice in personal writing.", answer: false },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Personal Writing Vocabulary",
        instruction: "Match each personal writing term to its correct definition.",
        left: [
          "Memoir",
          "Vignette",
          "Anecdote",
          "Tone",
          "Voice",
          "Reflection",
        ],
        right: [
          "The writer's thinking about the meaning or significance of an experience",
          "A short, vivid piece of writing capturing one scene or moment",
          "A brief story told to illustrate a point",
          "A book-length account of part of a person's life and experiences",
          "The emotional quality of a piece of writing",
          "The distinctive personality and style of a writer",
        ],
      },
      // 3
      {
        type: "multiple-choice",
        title: "Scene vs. Summary",
        instruction: "Choose the best answer for each question about the difference between scene and summary.",
        parentTip: "The scene vs. summary distinction is central to narrative craft. Scene puts readers inside the moment; summary tells them what happened from a distance.",
        questions: [
          {
            prompt: "Which sentence is an example of scene?",
            options: [
              "We had a difficult conversation that afternoon.",
              "She sat across from me at the kitchen table, her hands wrapped around a mug that had long gone cold.",
              "That summer was a hard one for our family.",
              "He eventually decided to leave.",
            ],
            answer: "She sat across from me at the kitchen table, her hands wrapped around a mug that had long gone cold.",
          },
          {
            prompt: "Which sentence is an example of summary?",
            options: [
              "The screen door banged shut behind her.",
              "I watched the second hand tick around the clock face three times before anyone spoke.",
              "Over the next few weeks, things gradually improved.",
              "My hands were shaking as I opened the envelope.",
            ],
            answer: "Over the next few weeks, things gradually improved.",
          },
          {
            prompt: "Why do writing teachers advise 'show, don't tell'?",
            options: [
              "Because writers should never use adjectives",
              "Because scene writing creates vivid, immediate experience for the reader rather than reporting from a distance",
              "Because first person narration is more reliable",
              "Because readers prefer shorter sentences",
            ],
            answer: "Because scene writing creates vivid, immediate experience for the reader rather than reporting from a distance",
          },
        ],
      },
      // 4
      {
        type: "fill-in-blank",
        title: "Sensory Detail in Personal Writing",
        instruction: "Complete each sentence with an appropriate sensory detail word or phrase from the box below.",
        parentTip: "Sensory details ground personal writing in the physical world. Encourage your student to notice which senses they tend to neglect.",
        sentences: [
          { text: "The _______ of fresh bread drifted through the house.", blanks: ["smell / scent / aroma"] },
          { text: "She could hear the _______ of rain on the tin roof.", blanks: ["drumming / pattering / hammering"] },
          { text: "The wooden floorboards were _______ under his bare feet.", blanks: ["cool / cold / rough / smooth"] },
          { text: "The light through the curtains was _______ and gold.", blanks: ["soft / warm / pale / thin"] },
          { text: "The taste of salt hit the back of her _______ before she reached the water.", blanks: ["throat / mouth / tongue"] },
        ],
      },
      // 5
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
      // 6
      {
        type: "sorting",
        title: "Narrative Techniques: Personal vs. Analytical",
        instruction: "Sort each technique into the correct column — is it more characteristic of personal/reflective writing or analytical essay writing?",
        columns: ["Personal / Reflective Writing", "Analytical Essay Writing"],
        items: [
          { label: "Writing in the first person ('I')" },
          { label: "Using topic sentences that connect to a thesis" },
          { label: "Scene writing with sensory detail" },
          { label: "Formal, impersonal tone" },
          { label: "Reflection on the meaning of personal experience" },
          { label: "Evidence from secondary sources" },
          { label: "Anecdotes and vignettes" },
          { label: "Citation of critics and scholars" },
          { label: "Associative structure (following memory)" },
          { label: "Logical, sequential paragraph structure" },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "Identifying the Experiencing vs. Reflecting Self",
        instruction: "For each excerpt, circle whether the voice belongs to the 'experiencing self' (inside the moment) or the 'reflecting self' (looking back with understanding).",
        questions: [
          {
            prompt: "'I had no idea, standing there in that car park, that this was the last time I would see her.'",
            options: ["Experiencing self", "Reflecting self"],
          },
          {
            prompt: "'I was so angry I could barely speak.'",
            options: ["Experiencing self", "Reflecting self"],
          },
          {
            prompt: "'What I understand now, years later, is that she was trying to protect me.'",
            options: ["Experiencing self", "Reflecting self"],
          },
          {
            prompt: "'My hands wouldn\u2019t stop shaking as I dialled.'",
            options: ["Experiencing self", "Reflecting self"],
          },
          {
            prompt: "'Looking back, I can see how much I was avoiding the question.'",
            options: ["Experiencing self", "Reflecting self"],
          },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Forms of Personal Writing",
        instruction: "Choose the best answer for each question about the different forms personal writing can take.",
        questions: [
          {
            prompt: "Which form typically focuses on the author's ideas and essayistic reflection rather than narrative events?",
            options: ["Memoir", "Personal essay", "Autobiography", "Anecdote"],
            answer: "Personal essay",
          },
          {
            prompt: "An autobiography typically covers:",
            options: [
              "One specific period or aspect of a life",
              "A whole life from beginning to end",
              "Someone else's life from the outside",
              "A fictional life based on real events",
            ],
            answer: "A whole life from beginning to end",
          },
          {
            prompt: "A memoir differs from autobiography in that it:",
            options: [
              "Is always written in third person",
              "Must be about a famous person",
              "Focuses on a specific period, theme, or set of experiences rather than a whole life",
              "Cannot include dialogue",
            ],
            answer: "Focuses on a specific period, theme, or set of experiences rather than a whole life",
          },
        ],
      },
      // 9
      {
        type: "open-response",
        title: "Adding the Reflective Layer",
        instruction:
          "Take the scene you wrote in Activity 5 and add a reflective layer. This is where you move from 'what happened' to 'what it meant.'",
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
      // 10
      {
        type: "fill-in-blank",
        title: "Transitional Phrases in Reflective Writing",
        instruction: "Fill in the blank with an appropriate phrase that shifts from scene to reflection.",
        sentences: [
          { text: "I did not know it then, but _______.", blanks: ["that moment would change everything / this was the beginning of something larger"] },
          { text: "Looking back now, _______.", blanks: ["I can see what I was missing / I understand why she said that"] },
          { text: "What I couldn't see at the time was _______.", blanks: ["how much I needed to hear it / that I was already changing"] },
          { text: "It took years before I _______ what that silence meant.", blanks: ["understood / recognised / realised"] },
          { text: "At the time, I felt _______. Now I feel something closer to _______.", blanks: ["angry / sadness and understanding"] },
        ],
      },
      // 11
      {
        type: "true-false",
        title: "Voice in Personal Writing",
        instruction: "Mark each statement about voice in personal writing as true or false.",
        statements: [
          { text: "Voice in writing refers to the distinctive personality and style of a writer.", answer: true },
          { text: "All personal writing must sound serious and formal.", answer: false },
          { text: "A writer's voice can include humour, irony, and self-deprecation.", answer: true },
          { text: "The best way to develop voice is to imitate your favourite writers exactly.", answer: false },
          { text: "Voice emerges through word choice, sentence length, tone, and perspective.", answer: true },
          { text: "Two writers describing the same event would write with identical voices.", answer: false },
        ],
      },
      // 12
      {
        type: "matching",
        title: "Types of Voice: Matching Examples",
        instruction: "Match each voice description to the example sentence that best illustrates it.",
        left: [
          "Dry and ironic",
          "Warm and confessional",
          "Cool and observational",
          "Urgent and passionate",
          "Self-deprecating",
        ],
        right: [
          "I watched from the window as the rest of the world went about its business, entirely unaware of the catastrophe unfolding in my kitchen.",
          "I have never been a person who handles bad news well. I am, by most reasonable measures, a disaster.",
          "She arrived late. She always arrived late. The table was still set for four.",
          "We cannot wait any longer to have this conversation. The moment is now.",
          "I want to tell you everything — the embarrassing parts especially, the parts I got wrong.",
        ],
      },
      // 13
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
      // 14
      {
        type: "circle-correct",
        title: "Purpose in Personal Writing",
        instruction: "For each piece of personal writing, circle the most likely primary purpose.",
        questions: [
          {
            prompt: "A memoir about growing up during the Vietnam War era",
            options: ["To entertain with adventure", "To preserve memory and bear witness to history", "To argue a political position"],
          },
          {
            prompt: "A personal essay on why the writer finds city life alienating",
            options: ["To explore and articulate an idea through personal experience", "To provide factual information about cities", "To persuade readers to move to the country"],
          },
          {
            prompt: "A vignette about a grandmother's kitchen",
            options: ["To sell a cookbook", "To analyse cooking techniques", "To evoke memory and honour a relationship"],
          },
          {
            prompt: "A reflective piece written after a failure or mistake",
            options: ["To make excuses", "To process experience and understand oneself better", "To warn others about the same mistake"],
          },
        ],
      },
      // 15
      {
        type: "tip",
        title: "Tip: The Particular Is the Universal",
        content: "Personal writing works when it is deeply specific. Counter-intuitively, the more specific and personal a piece of writing is, the more universally relatable it tends to be. A vague, general account of 'a difficult time' connects with nobody. A precise description of the specific details of one difficult afternoon connects with everyone who has ever had a difficult afternoon. When writing personally, resist the urge to generalise — stay in the particular.",
      },
      // 16
      {
        type: "multiple-choice",
        title: "Structure in Personal Writing",
        instruction: "Choose the best answer for each question about how personal writing is structured.",
        parentTip: "Unlike analytical essays, personal writing can follow memory and association rather than strict logic. This is a strength, not a weakness — but it requires skill to make associative structure feel purposeful rather than random.",
        questions: [
          {
            prompt: "What is associative structure in personal writing?",
            options: [
              "A structure that follows a strict chronological timeline",
              "A structure that moves between moments by following the logic of memory and idea rather than time",
              "A structure with an introduction, body, and conclusion",
              "A structure that uses numbered sections",
            ],
            answer: "A structure that moves between moments by following the logic of memory and idea rather than time",
          },
          {
            prompt: "Which of the following is NOT a common structural technique in memoir and personal essay?",
            options: [
              "Circular structure (returning to the opening image at the end)",
              "Moving between past and present",
              "The five-paragraph essay format",
              "Beginning in the middle of the action",
            ],
            answer: "The five-paragraph essay format",
          },
        ],
      },
      // 17
      {
        type: "sorting",
        title: "Personal Writing: Sorting by Form",
        instruction: "Sort each description into the correct form of personal writing.",
        columns: ["Memoir", "Personal Essay", "Vignette"],
        items: [
          { label: "A 200-word piece capturing one image or moment" },
          { label: "A book-length account of a specific period of a life" },
          { label: "A shorter piece that uses personal experience to explore an idea" },
          { label: "Often has a looser, more lyrical structure than analytical writing" },
          { label: "May blend narrative and argument" },
          { label: "Like a very short short story, but non-fiction" },
          { label: "Examples include 'When Breath Becomes Air' by Paul Kalanithi" },
          { label: "Examples include essays by George Orwell and James Baldwin" },
          { label: "Named from the French word for 'sketch' or 'small view'" },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Writing from an Object",
        instruction: "Choose an object that has significance in your life — it could be anything: a piece of clothing, a book, a kitchen utensil, a toy. Write a vignette (8–12 sentences) about this object that reveals something true about your life or relationships.",
        parentTip: "Objects are a classic entry point into personal writing because they are concrete and specific — they anchor abstract emotions in the physical world. The essay 'My Mother's Coat' or 'The Kitchen Table' works because the object becomes a vessel for meaning.",
        prompts: [
          { text: "Your object and why you chose it:", type: "lines", lines: 2 },
          { text: "Your vignette:", type: "box" },
        ],
      },
      // 19
      {
        type: "fill-in-blank",
        title: "Personal Writing: Key Terms",
        instruction: "Fill in the blank with the correct personal writing term.",
        sentences: [
          { text: "A _______ is a brief piece of writing that captures one vivid scene or moment.", blanks: ["vignette"] },
          { text: "The _______ voice belongs to the writer in the moment of experience, while the _______ voice belongs to the writer looking back.", blanks: ["experiencing", "reflecting"] },
          { text: "Writing that recreates a moment using sensory detail in real time is called _______ writing.", blanks: ["scene"] },
          { text: "The distinctive personality and style of a writer is called their _______.", blanks: ["voice"] },
          { text: "A structural device where the essay returns to its opening image or idea at the end is called a _______ structure.", blanks: ["circular"] },
        ],
      },
      // 20
      {
        type: "spark",
        title: "Spark: What Memory Are You Avoiding?",
        content: "The American writer Annie Dillard said: 'The very writing that you don't want to do is probably your best writing.' This is a provocation worth sitting with. What memory or experience in your own life have you always thought would make a powerful piece of writing, but that you have avoided? What makes you avoid it? What would you need in order to write it — distance, time, a particular structure? You don't have to write it now. But think about it.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "multiple-choice",
        title: "Dialogue in Personal Writing",
        instruction: "Choose the best answer for each question about using dialogue in personal and memoir writing.",
        parentTip: "Dialogue in memoir is reconstructed from memory, not transcribed — it should capture the essence and meaning of what was said, even if the exact words have faded.",
        questions: [
          {
            prompt: "Why do memoirists and personal essayists use dialogue?",
            options: [
              "To meet a word count requirement",
              "To bring scenes to life and reveal character through speech",
              "Because all non-fiction must include direct quotes",
              "To make the writing sound more academic",
            ],
            answer: "To bring scenes to life and reveal character through speech",
          },
          {
            prompt: "How should a memoirist handle dialogue they cannot remember word for word?",
            options: [
              "Invent entirely fictional dialogue",
              "Include no dialogue at all",
              "Reconstruct the essence of what was said in a way that is true to the meaning and character of the person",
              "Only use dialogue if they have recordings or transcripts",
            ],
            answer: "Reconstruct the essence of what was said in a way that is true to the meaning and character of the person",
          },
        ],
      },
      // 22
      {
        type: "open-response",
        title: "A Conversation Worth Remembering",
        instruction: "Write a scene (8–12 sentences) built around a real conversation you have had that stayed with you. Include dialogue. Try to capture how each person sounded — their vocabulary, their pace, what they left unsaid.",
        parentTip: "After your student writes, discuss: does the dialogue sound like the person? Does it advance the scene or just fill space? Dialogue should do at least one of: reveal character, create tension, or advance the scene.",
        prompts: [
          { text: "Your scene with dialogue:", type: "box" },
          {
            text: "What does this conversation reveal about the relationship between the speakers?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 23
      {
        type: "true-false",
        title: "Australian Personal Writing: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Tim Winton is an Australian author known for personal and memoir writing.", answer: true },
          { text: "Australian personal writing never engages with Indigenous history or Country.", answer: false },
          { text: "The Australian landscape often features as a character in Australian memoir.", answer: true },
          { text: "Personal writing in Australia is always set in urban environments.", answer: false },
          { text: "Memoir writing can serve as a form of historical testimony.", answer: true },
        ],
      },
      // 24
      {
        type: "matching",
        title: "Personal Writing: Australian Authors",
        instruction: "Match each Australian author to the description of their personal writing.",
        left: [
          "Tim Winton",
          "Alexis Wright",
          "Sally Morgan",
          "Bruce Pascoe",
        ],
        right: [
          "Author of 'My Place', a memoir reclaiming Aboriginal heritage and identity",
          "Essayist and novelist who writes about landscape, place, and what it means to be Australian",
          "Author whose work including 'Praiseworthy' explores Indigenous experience and sovereignty",
          "Author of 'Dark Emu', which reclaims Aboriginal history and land management",
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Writing About Place",
        instruction: "Personal writing is often deeply tied to place. Write a vignette (10–15 sentences) about a place that matters to you — somewhere that has shaped who you are, even in a small way. Do not describe the place objectively; write it through the lens of your relationship with it.",
        parentTip: "The key instruction is 'through the lens of your relationship with it' — this transforms description into memoir. A beach described objectively is journalism; a beach described through memory and feeling is personal writing.",
        prompts: [
          { text: "Your place vignette:", type: "box" },
          {
            text: "What does this place represent in your inner life? What would you lose if it were gone?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      // 26
      {
        type: "fill-in-blank",
        title: "Sentence-Level Craft: Rhythm and Variation",
        instruction: "Fill in the blanks to describe techniques for creating rhythm and variation in personal writing.",
        sentences: [
          { text: "A series of very short sentences in a row creates a sense of _______ and urgency.", blanks: ["pace / speed / tension"] },
          { text: "A very long sentence with multiple clauses and pauses can create a sense of _______ or accumulation.", blanks: ["complexity / sprawl / richness"] },
          { text: "Repeating a word or phrase at the start of successive sentences is a technique called _______.", blanks: ["anaphora"] },
          { text: "Placing the most important word at the end of a sentence is called _______ position.", blanks: ["end / final / terminal"] },
          { text: "Varying sentence length throughout a paragraph prevents the writing from becoming _______.", blanks: ["monotonous / flat / predictable"] },
        ],
      },
      // 27
      {
        type: "circle-correct",
        title: "Tone in Personal Writing",
        instruction: "Read each excerpt and circle the tone that best describes it.",
        questions: [
          {
            prompt: "'I have made every possible mistake a person could make in this regard. I am, as I have said, an expert in failure.'",
            options: ["Self-pitying", "Dry and self-deprecating", "Angry and accusatory"],
          },
          {
            prompt: "'She was dying, and still she wanted to know what I had eaten for dinner. That was the thing about her: she was always more interested in you than in herself.'",
            options: ["Bitter", "Tender and elegiac", "Analytical"],
          },
          {
            prompt: "'This country does something to you. I couldn\u2019t explain it to anyone who hasn\u2019t stood in that red light, felt that heat, understood without understanding.'",
            options: ["Nostalgic", "Lyrical and searching", "Journalistic"],
          },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "The Unsaid: Writing Silence and Absence",
        instruction: "In personal writing, what is NOT said can be as powerful as what is said. Write a short scene (6–10 sentences) where the most important thing is something that is avoided, withheld, or left unsaid.",
        parentTip: "This is an advanced technique. Discuss with your student: in real conversations, how often do people say the most important thing directly? Literature can capture the way human beings actually communicate — obliquely, indirectly, around the edges of what matters.",
        prompts: [
          { text: "Your scene:", type: "box" },
          {
            text: "What is the unsaid thing at the centre of your scene? What effect does leaving it unsaid have on the reader?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 29
      {
        type: "multiple-choice",
        title: "Audience and Addressee in Personal Writing",
        instruction: "Choose the best answer for each question about audience in personal and reflective writing.",
        questions: [
          {
            prompt: "What is an 'implied reader' in personal writing?",
            options: [
              "A specific named person the writer is writing to",
              "The imagined audience the writer has in mind as they write",
              "A reader who has not yet read the text",
              "A critic who analyses the writing after publication",
            ],
            answer: "The imagined audience the writer has in mind as they write",
          },
          {
            prompt: "When a personal essayist writes 'you' — e.g. 'You know that feeling when...' — what effect does this create?",
            options: [
              "It confuses the reader about who is speaking",
              "It creates distance between writer and reader",
              "It draws the reader in, creating intimacy and a sense of shared experience",
              "It sounds informal and should be avoided",
            ],
            answer: "It draws the reader in, creating intimacy and a sense of shared experience",
          },
        ],
      },
      // 30
      {
        type: "tip",
        title: "Tip: Resist the Tidy Resolution",
        content: "Beginning writers often feel that personal writing must end with a lesson learned, a problem resolved, or a clear moral. But the best personal writing resists this tidiness. Life is complicated; the best memoir and personal essays honour that complication. It is often more honest — and more powerful — to end with a question, a continuing uncertainty, or an image that carries meaning without explaining it. Ask yourself: am I rounding this off too neatly? What am I leaving out in order to make it feel resolved?",
      },
      // 31
      {
        type: "sorting",
        title: "Effective vs. Ineffective Personal Writing Choices",
        instruction: "Sort each choice into 'Effective' (tends to strengthen personal writing) or 'Ineffective' (tends to weaken it).",
        columns: ["Effective", "Ineffective"],
        items: [
          { label: "Using specific, concrete sensory details" },
          { label: "Summarising what happened without scene writing" },
          { label: "Allowing the reflecting self to notice complexity and uncertainty" },
          { label: "Forcing a tidy moral lesson at the end" },
          { label: "Writing dialogue that sounds like the real person" },
          { label: "Using vague, general language ('it was a really hard time')" },
          { label: "Allowing silence and what is unsaid to carry meaning" },
          { label: "Explaining every emotion in abstract terms" },
          { label: "Varying sentence length to control pace and rhythm" },
          { label: "Beginning every sentence with 'I felt...'" },
        ],
      },
      // 32
      {
        type: "open-response",
        title: "Revision: Rewriting a Scene",
        instruction: "Return to the scene you wrote in Activity 5 and revise it using at least three of the following techniques: (a) add or intensify sensory detail, (b) vary your sentence lengths, (c) cut any place where you shift from scene to summary, (d) add a line of dialogue, (e) adjust your word choices to better reflect your intended voice.",
        parentTip: "Revision is where writing actually happens — drafting is just making clay. Helping your student understand that rewriting is not 'fixing mistakes' but 'discovering what the writing can be' is one of the most important things you can do for their development as a writer.",
        prompts: [
          { text: "Your revised scene:", type: "box" },
          {
            text: "List the three or more techniques you applied, and explain the effect of each change:",
            type: "lines",
            lines: 5,
          },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "The Essay Tradition: Key Figures",
        instruction: "Fill in the blank with the correct name or term.",
        sentences: [
          { text: "The essay as a literary form was invented by the French writer _______ in the 16th century.", blanks: ["Montaigne / Michel de Montaigne"] },
          { text: "George Orwell's personal essays, including 'Why I Write' and 'Shooting an _______', are models of the personal essay form.", blanks: ["Elephant"] },
          { text: "James Baldwin's personal essays explore race and identity in America; his collection 'Notes of a _______' is particularly celebrated.", blanks: ["Native Son"] },
          { text: "The term 'essay' comes from the French 'essai', meaning an _______ or attempt.", blanks: ["attempt / trial / test"] },
          { text: "Joan Didion's essay collection 'Slouching Towards _______' combines personal experience with cultural criticism.", blanks: ["Bethlehem"] },
        ],
      },
      // 34
      {
        type: "matching",
        title: "Personal Writing Techniques and Definitions",
        instruction: "Match each technique to its definition.",
        left: [
          "In medias res",
          "Circular structure",
          "Fragmented structure",
          "Braided narrative",
          "Lyric essay",
        ],
        right: [
          "An essay that weaves two or three separate narrative threads together throughout the piece",
          "Beginning the piece in the middle of the action rather than at the beginning",
          "An essay that blends poetic compression, associative logic, and fragmented form",
          "A structure that uses short, disconnected sections to create meaning through juxtaposition",
          "A structure that returns to the opening image or idea at the end",
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Writing About a Relationship",
        instruction: "Write a scene (10–15 sentences) that reveals something important about a relationship in your life — with a family member, friend, or even a pet. Do not name the relationship explicitly. Show it through behaviour, dialogue, and detail.",
        parentTip: "The instruction not to name the relationship is a useful constraint: instead of writing 'My mother was always critical', the student must find the scene that shows that. This is the difference between assertion and demonstration.",
        prompts: [
          { text: "Your scene:", type: "box" },
          {
            text: "What does your scene reveal about this relationship that a direct statement would not?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 36
      {
        type: "true-false",
        title: "Ethics of Personal Writing",
        instruction: "Mark each statement about the ethics of writing about real people and events as true or false.",
        statements: [
          { text: "Memoirists have an ethical responsibility to consider how their writing may affect real people who appear in it.", answer: true },
          { text: "If something happened, a writer can write about it in any way they choose with no ethical considerations.", answer: false },
          { text: "Changing identifying details to protect someone's privacy is an accepted practice in memoir.", answer: true },
          { text: "The memoirist's memory is always perfectly accurate and should be presented as objective fact.", answer: false },
          { text: "Some memoirists include an author's note acknowledging the limitations of memory.", answer: true },
        ],
      },
      // 37
      {
        type: "circle-correct",
        title: "Strong Opening Lines",
        instruction: "For each pair, circle the opening line that is more effective for a personal essay or memoir.",
        questions: [
          {
            prompt: "Option A: 'In this essay, I will discuss a time in my life when things were difficult.' Option B: 'The summer I turned fourteen, I stopped being able to sleep.'",
            options: ["Option A", "Option B"],
          },
          {
            prompt: "Option A: 'The thing about grief is that it arrives without warning, in the cereal aisle, at 9 a.m. on a Tuesday.' Option B: 'I am going to write about grief in this personal essay.'",
            options: ["Option A", "Option B"],
          },
          {
            prompt: "Option A: 'I have a complicated relationship with the place where I grew up.' Option B: 'There is a creek at the bottom of the street I grew up on. My mother told us never to go there. We went every day.'",
            options: ["Option A", "Option B"],
          },
        ],
      },
      // 38
      {
        type: "open-response",
        title: "Writing a Strong Opening",
        instruction: "Write three different possible opening sentences or short paragraphs for a personal essay about something in your own life. Experiment with different techniques: in medias res (beginning in the middle), a strong image, a striking statement, or a question.",
        parentTip: "The opening of a personal essay does three jobs: it earns the reader's attention, establishes the writer's voice, and signals what kind of essay this will be. Having your student write multiple options and choose the strongest is excellent practice.",
        prompts: [
          { text: "Opening 1:", type: "lines", lines: 3 },
          { text: "Opening 2:", type: "lines", lines: 3 },
          { text: "Opening 3:", type: "lines", lines: 3 },
          { text: "Which is strongest and why?", type: "lines", lines: 3 },
        ],
      },
      // 39
      {
        type: "multiple-choice",
        title: "Memoir and Truth",
        instruction: "Choose the best answer for each question about truth and memory in memoir.",
        parentTip: "The question of truth in memoir is a genuinely interesting ethical and philosophical question worth discussing. Memory is constructive, not reproductive — it rebuilds rather than plays back. How should writers handle this?",
        questions: [
          {
            prompt: "Mary Karr, author of 'The Liar's Club', says that memoir requires 'an honest investigation of the past'. This means:",
            options: [
              "The writer must have video evidence of all events described",
              "The writer approaches memory with rigour, acknowledging uncertainty rather than inventing false certainty",
              "The writer must only include events other people can corroborate",
              "The writer must present all characters fairly and positively",
            ],
            answer: "The writer approaches memory with rigour, acknowledging uncertainty rather than inventing false certainty",
          },
          {
            prompt: "What is the difference between 'emotional truth' and 'factual accuracy' in memoir?",
            options: [
              "They are exactly the same thing",
              "Emotional truth refers to capturing the felt experience faithfully; factual accuracy refers to precise historical record",
              "Emotional truth is more important because it allows writers to invent events",
              "Factual accuracy is irrelevant to memoir writing",
            ],
            answer: "Emotional truth refers to capturing the felt experience faithfully; factual accuracy refers to precise historical record",
          },
        ],
      },
      // 40
      {
        type: "spark",
        title: "Spark: The Essay as Thinking",
        content: "The essayist and critic Edward Said described the essay as 'thinking in public'. Unlike an argument that begins with a conclusion and marshals evidence to support it, the personal essay often begins with a question and thinks its way toward — but not necessarily to — an answer. The best personal essays give readers the sensation of watching a mind at work, in real time. What question are you currently turning over in your own mind — about yourself, your place in the world, something you don't yet understand? That question might be the seed of your best essay.",
      },
      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Sustained Scene Writing",
        instruction: "Write an extended scene (15–20 sentences) about a moment of change in your life — a moment when something shifted, even subtly. Use all the techniques practised so far: sensory detail, dialogue, varied sentence length, both experiencing and reflecting voices.",
        parentTip: "Moments of change are the engine of memoir. They do not have to be dramatic — the most interesting changes are often small, quiet realisations. A moment of change can be as simple as looking at someone differently, or noticing something for the first time.",
        prompts: [
          { text: "Your extended scene:", type: "box" },
        ],
      },
      // 42
      {
        type: "matching",
        title: "Paragraph Functions in Personal Writing",
        instruction: "Match each paragraph type to its function in a personal essay.",
        left: [
          "Hook paragraph",
          "Scene paragraph",
          "Reflection paragraph",
          "Transition paragraph",
          "Closing paragraph",
        ],
        right: [
          "Moves the essay from one section or time to another",
          "Recreates a moment with sensory detail in real time",
          "Opens the essay with something that earns the reader's attention",
          "Arrives at an insight or image that gives the essay its final resonance",
          "Steps back from scene to consider meaning and significance",
        ],
      },
      // 43
      {
        type: "fill-in-blank",
        title: "Personal Writing: Advanced Vocabulary",
        instruction: "Fill in the blank with the correct literary or craft term.",
        sentences: [
          { text: "When a writer steps outside the narrative to address the reader directly, this is called _______ address.", blanks: ["direct"] },
          { text: "Writing that moves between different time periods is said to use a _______ structure.", blanks: ["non-linear / fragmented / temporal"] },
          { text: "The _______ narrator is one who writes about events long after they occurred and has the benefit of hindsight.", blanks: ["retrospective"] },
          { text: "A piece of writing that blurs the line between poetry and prose is called a _______ essay.", blanks: ["lyric"] },
          { text: "The use of a specific object, image, or phrase that recurs throughout a piece of writing to carry meaning is called a _______.", blanks: ["motif / leitmotif"] },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "The Motif: A Recurring Image",
        instruction: "Choose an image, object, or phrase to use as a motif throughout a personal essay you plan or draft. Write three short paragraphs (3–5 sentences each) where this motif appears, each time with a different meaning or in a different context.",
        parentTip: "A motif gives a personal essay structural coherence and emotional depth. The same image appearing at the beginning, middle, and end — with shifting meaning — is a classic and powerful technique. Water, light, a particular piece of music, or a recurring gesture all work well.",
        prompts: [
          { text: "Your chosen motif:", type: "lines", lines: 1 },
          { text: "Paragraph 1 (introduce the motif):", type: "box" },
          { text: "Paragraph 2 (motif reappears with shifted meaning):", type: "box" },
          { text: "Paragraph 3 (motif appears again — what has it accumulated?):", type: "box" },
        ],
      },
      // 45
      {
        type: "tip",
        title: "Tip: Write From Uncertainty",
        content: "Personal writing is strongest when the writer does not already know what they think. If you begin with a clear conclusion and write toward it, the essay will feel closed and didactic. If you begin with a genuine question — something you are still working out — the writing will have the quality of live thought, and the reader will think alongside you. Ask: what is something I genuinely do not understand about my own life? That gap between experience and understanding is the essay's territory.",
      },
      // 46
      {
        type: "multiple-choice",
        title: "Structure: Beginning, Middle, End in Personal Writing",
        instruction: "Choose the best answer for each question.",
        questions: [
          {
            prompt: "What makes a personal essay's conclusion more powerful than a simple summary?",
            options: [
              "It repeats the thesis three times",
              "It is longer than the introduction",
              "It arrives at an insight that was not fully available at the beginning — a sense of arrival rather than return",
              "It introduces new evidence the body did not cover",
            ],
            answer: "It arrives at an insight that was not fully available at the beginning — a sense of arrival rather than return",
          },
          {
            prompt: "In personal writing, what is the purpose of beginning in medias res (in the middle)?",
            options: [
              "To confuse the reader",
              "To begin with action or immediacy, drawing the reader in before providing context",
              "To hide the essay's thesis",
              "To avoid having to write an introduction",
            ],
            answer: "To begin with action or immediacy, drawing the reader in before providing context",
          },
        ],
      },
      // 47
      {
        type: "sorting",
        title: "What Makes a Closing Powerful?",
        instruction: "Sort each closing strategy into 'Strong Ending' or 'Weak Ending'.",
        columns: ["Strong Ending", "Weak Ending"],
        items: [
          { label: "Ending with an image that contains unspoken meaning" },
          { label: "Summarising every point the essay has made" },
          { label: "Returning to the opening image with new understanding" },
          { label: "Beginning the conclusion with 'In conclusion, I have shown that...'" },
          { label: "Ending with an open question that leaves the reader thinking" },
          { label: "Explaining the essay's meaning in a final paragraph" },
          { label: "A short, resonant final line that lands with weight" },
          { label: "Ending abruptly mid-thought" },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Drafting an Introduction and Conclusion",
        instruction: "Write an introduction (4–6 sentences) and conclusion (4–6 sentences) for a personal essay about an experience that changed you. The introduction should begin with something that earns the reader's attention. The conclusion should arrive somewhere — not just summarise.",
        parentTip: "Ask your student to read only the introduction and conclusion together, as if the body did not exist. Does the conclusion feel like an arrival? If they are essentially saying the same thing, the conclusion needs rethinking.",
        prompts: [
          { text: "Introduction:", type: "box" },
          { text: "Conclusion:", type: "box" },
          {
            text: "Where does your essay arrive at the end that it could not have arrived at the beginning?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Advanced Personal Writing: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A lyric essay can include blank space, fragments, and non-linear sections.", answer: true },
          { text: "In a braided narrative, all threads must relate to the same central theme or question.", answer: true },
          { text: "Personal writing should always avoid metaphor and figurative language.", answer: false },
          { text: "The most powerful personal writing often ends with a clear, stated moral.", answer: false },
          { text: "Compression — saying more with fewer words — is a key virtue in personal writing.", answer: true },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Reading Like a Writer",
        instruction: "Find a personal essay or memoir passage by an Australian writer (suggestions: Tim Winton's Island Home, Sally Morgan's My Place, or any essay from Meanjin or Overland magazine). Read it carefully, then answer the questions below.",
        parentTip: "Reading like a writer means asking: how did they make this? What choices did they make about structure, voice, detail, and form? This is different from reading for meaning — it is reading as a craft apprentice.",
        prompts: [
          { text: "What is the essay/passage about? (2–3 sentences):", type: "lines", lines: 3 },
          { text: "What is one thing this writer does that you would like to try in your own writing?", type: "lines", lines: 3 },
          { text: "Copy one sentence you find particularly strong and explain why it works:", type: "lines", lines: 4 },
        ],
      },
      // 51
      {
        type: "open-response",
        title: "Voice Experiment: Three Versions",
        instruction: "Take one short scene from your life (3–4 sentences) and write it three times in three different voices: (a) formal and detached, (b) warm and conversational, (c) dry and ironic. Notice how voice changes the effect of the same content.",
        parentTip: "This is a powerful exercise in understanding that voice is a choice — writers select the register that serves their purpose. Understanding this helps students stop thinking of voice as something fixed and start thinking of it as a craft tool.",
        prompts: [
          { text: "The scene:", type: "lines", lines: 3 },
          { text: "Version A — formal and detached:", type: "lines", lines: 4 },
          { text: "Version B — warm and conversational:", type: "lines", lines: 4 },
          { text: "Version C — dry and ironic:", type: "lines", lines: 4 },
          { text: "Which version do you prefer and why?", type: "lines", lines: 3 },
        ],
      },
      // 52
      {
        type: "fill-in-blank",
        title: "Figurative Language in Personal Writing",
        instruction: "Fill in the blank with an appropriate figure of speech to complete each sentence in a way that feels true and specific.",
        sentences: [
          { text: "Her voice on the phone was _______ — a sound I had not heard in years.", blanks: ["like coming up for air / like a door opening / thin as paper"] },
          { text: "The silence in the room was _______ after he left.", blanks: ["enormous / physical / a third presence"] },
          { text: "That afternoon felt _______, stretched out beyond its edges.", blanks: ["elastic / too long / suspended"] },
          { text: "I carried the news around all day like _______.", blanks: ["a stone in my pocket / something heavy / a question I couldn't ask"] },
        ],
      },
      // 53
      {
        type: "open-response",
        title: "The Braided Essay: Planning",
        instruction: "A braided essay weaves two or three separate narrative threads together, with each thread shedding light on the others. Plan a braided personal essay by identifying two threads that connect to a common theme or question.",
        parentTip: "Classic braided essay combinations: a personal memory and a research thread; a current moment and a historical event; a relationship and an object. The threads should illuminate each other without the connection being stated too explicitly.",
        prompts: [
          { text: "Your central theme or question:", type: "lines", lines: 2 },
          { text: "Thread 1 (describe what this thread covers):", type: "lines", lines: 3 },
          { text: "Thread 2 (describe what this thread covers):", type: "lines", lines: 3 },
          { text: "How do these threads connect? What does weaving them together reveal that neither thread could reveal alone?", type: "lines", lines: 4 },
        ],
      },
      // 54
      {
        type: "matching",
        title: "Literary Influences on Australian Personal Writing",
        instruction: "Match each description to the Australian literary tradition or context it describes.",
        left: [
          "Country as inner landscape",
          "The settler experience",
          "First Nations storytelling",
          "The bush tradition",
          "Migrant memoir",
        ],
        right: [
          "A tradition that writes land and self as inseparable — knowing Country is knowing self",
          "Narratives of displacement, cultural adaptation, and the formation of new identity",
          "Early Australian writing that celebrated rural life, hardship, and mateship",
          "Writing that explores the experience of European settlement and its ambivalences",
          "Oral and written traditions that predate European contact and carry ancestral knowledge",
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Writing About Identity",
        instruction: "Personal writing often engages with questions of identity — who we are, how we have been shaped, what we belong to. Write a personal essay passage (10–15 sentences) that explores one aspect of your own identity. You might explore cultural background, where you grew up, your family's values, or any experience that shaped how you understand yourself.",
        parentTip: "Identity writing can feel exposing for teenagers. Assure your student that they can choose any aspect of identity they are comfortable exploring — they do not have to write about anything painful or private. The key is that it should feel true.",
        prompts: [
          { text: "Your passage:", type: "box" },
          {
            text: "What aspect of your identity did you write about, and why did you choose it?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 56
      {
        type: "multiple-choice",
        title: "Compression and Cutting",
        instruction: "Choose the best answer for each question about editing and compression in personal writing.",
        questions: [
          {
            prompt: "What does it mean to 'cut to the bone' in personal writing?",
            options: [
              "To write about painful memories",
              "To remove everything that is not essential to the essay's purpose — to leave only what does necessary work",
              "To write very short sentences only",
              "To eliminate all figurative language",
            ],
            answer: "To remove everything that is not essential to the essay's purpose — to leave only what does necessary work",
          },
          {
            prompt: "Which of the following is usually a sign that a sentence should be cut?",
            options: [
              "It contains a specific sensory detail",
              "It advances the narrative or deepens the reflection",
              "It repeats something the reader already knows, or explains what the writing already shows",
              "It is shorter than the sentence before it",
            ],
            answer: "It repeats something the reader already knows, or explains what the writing already shows",
          },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "The Art of Cutting",
        instruction: "Find a paragraph in your earlier writing from this worksheet (or from another piece of your personal writing) and cut it by at least a third — removing anything that repeats, over-explains, or does not do necessary work. Then write the revised version.",
        parentTip: "Cutting is one of the hardest things to teach young writers, because it requires them to value what is lost as well as what is gained. William Faulkner's advice — 'kill your darlings' — means removing the sentences you love most if they are not serving the whole.",
        prompts: [
          { text: "Original paragraph:", type: "box" },
          { text: "Revised paragraph (at least one-third shorter):", type: "box" },
          {
            text: "What did cutting change? Did anything important get lost, or did cutting actually strengthen the writing?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      // 58
      {
        type: "true-false",
        title: "The Craft of Personal Writing: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A vignette is a form of personal writing that typically runs 150–400 words.", answer: true },
          { text: "Personal writing never requires revision — it should come out right the first time.", answer: false },
          { text: "Fragmented structure — short sections separated by white space — can be used deliberately to create meaning.", answer: true },
          { text: "The most important quality in a personal essay is that it is grammatically perfect.", answer: false },
          { text: "Reading widely in personal writing (memoir, essay) is one of the best ways to develop as a personal writer.", answer: true },
          { text: "The 'kernel' of a personal essay is the specific experience or question at its centre.", answer: true },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Drafting a Short Personal Essay",
        instruction: "Write a short personal essay (250–350 words) on a topic of your choice. Use everything you have learned: a strong opening, scene writing, reflection, a distinctive voice, and an ending that arrives somewhere. This does not need to be perfect — it is a draft.",
        parentTip: "A first draft is not a finished product; it is discovery. Encourage your student to write without stopping to edit — get the thinking on the page. Editing comes after. If they are stuck, suggest: begin with the scene you know best and see where it leads.",
        prompts: [
          { text: "Your short personal essay:", type: "box" },
        ],
      },
      // 60
      {
        type: "spark",
        title: "Spark: The Ordinary Is Extraordinary",
        content: "Personal writing does not require a dramatic or unusual life. The Australian writer Helen Garner has written entire essays about a kitchen, a suburb, a morning walk. The subject matters less than the quality of attention brought to it. What would it mean to pay the kind of attention to one ordinary day of your life that a novelist would pay to the most important day of their character's life? Write one sentence — right now, without stopping to plan — about something ordinary that happened today. That sentence might be the beginning of something.",
      },
      // ── EXTENDING 81–100 ──────────────────────────────────────────────────
      // 61
      {
        type: "multiple-choice",
        title: "The Personal and the Political",
        instruction: "Choose the best answer for each question about how personal writing engages with public issues.",
        parentTip: "Some of the most powerful personal writing — by James Baldwin, Roxane Gay, Tim Winton — moves between private experience and public significance. Personal is political: individual stories reveal structural truths.",
        questions: [
          {
            prompt: "What does the phrase 'the personal is political' mean in the context of personal writing?",
            options: [
              "Personal writing should include political arguments",
              "Private experiences often reveal and reflect larger social structures and power relations",
              "Writers should only write about political events",
              "Personal writing is always more important than political commentary",
            ],
            answer: "Private experiences often reveal and reflect larger social structures and power relations",
          },
          {
            prompt: "How does a personal essay that begins with one person's experience connect with readers beyond that person?",
            options: [
              "Because the writer is famous",
              "Because personal specificity creates universal resonance — a particular truth opens into a general truth",
              "Because all human experiences are identical",
              "Because readers prefer to read about other people's lives",
            ],
            answer: "Because personal specificity creates universal resonance — a particular truth opens into a general truth",
          },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Personal and Political: Connecting Experience to Context",
        instruction: "Write a passage (10–15 sentences) that begins with a personal experience and opens out to a broader social or political significance. Do not preach or lecture — let the connection emerge through the writing.",
        parentTip: "This is advanced work. The skill is in the light touch — allowing the broader significance to emerge without the writer stepping back from the personal to explain it. The best essays of this kind trust the reader to make the connection.",
        prompts: [
          { text: "Your passage:", type: "box" },
          {
            text: "What broader context or social reality does your personal experience connect to?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 63
      {
        type: "matching",
        title: "Craft Terminology: Advanced",
        instruction: "Match each advanced craft term to its definition.",
        left: [
          "Negative capability",
          "Defamiliarisation",
          "Free indirect style",
          "Ekphrasis",
          "Parataxis",
        ],
        right: [
          "A grammatical style placing short, simple clauses side by side with minimal connectives",
          "Keats's term for the capacity to live with uncertainty and doubt without irritably reaching for resolution",
          "Making the familiar strange so it can be seen freshly",
          "A narrative technique that blends narrator and character consciousness without signalling the shift",
          "Writing that describes or responds to a visual artwork",
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Defamiliarisation: Making the Ordinary Strange",
        instruction: "Choose something completely ordinary — a daily routine, a common object, a familiar place — and write about it as if you are seeing it for the first time. Make the familiar strange. Aim for 8–12 sentences.",
        parentTip: "Defamiliarisation (the Russian Formalists called it 'ostranenie') is one of literature's core functions — helping us see what habit has made invisible. The Russian writer Tolstoy was a master of this; Orwell did it in essays about ordinary life. It requires stepping outside the comfortable and looking with genuine curiosity.",
        prompts: [
          { text: "Your subject:", type: "lines", lines: 1 },
          { text: "Your defamiliarised passage:", type: "box" },
        ],
      },
      // 65
      {
        type: "fill-in-blank",
        title: "Personal Writing in the Australian Literary Tradition",
        instruction: "Fill in the blank with the correct word or phrase.",
        sentences: [
          { text: "Tim Winton's book 'Island Home' is subtitled 'A _______ Memoir', reflecting his engagement with the Australian landscape.", blanks: ["Landscape / Country"] },
          { text: "The genre of writing that bears witness to historical trauma and injustice, including through personal narrative, is called _______ literature.", blanks: ["testimony / witness / testimonial"] },
          { text: "Australian magazine _______ has published personal essays and memoir by major Australian writers since 1940.", blanks: ["Meanjin"] },
          { text: "First Nations writers who have used memoir to reclaim identity and history include Sally Morgan, whose memoir is called 'My _______'.", blanks: ["Place"] },
          { text: "Helen Garner is an Australian writer celebrated for personal writing that blurs the line between journalism, essay, and _______.", blanks: ["memoir / fiction"] },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "The Lyric Essay: Fragmented Form",
        instruction: "Write a short lyric essay (150–200 words) in three or four numbered or separated sections. Each section should be short (2–5 sentences). They should not connect chronologically or logically — but they should connect thematically. The white space between sections should carry meaning.",
        parentTip: "The lyric essay is a hybrid form that allows for compression, juxtaposition, and poetic thinking. It is ideal for subjects that resist straightforward narrative. Encourage your student to think of each section as a facet of the same gem — each shows a different angle.",
        prompts: [
          { text: "Your lyric essay:", type: "box" },
          {
            text: "What holds your sections together? What is the implied connection between them?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 67
      {
        type: "circle-correct",
        title: "Evaluating Personal Writing",
        instruction: "For each description, circle whether it describes strong or weak personal writing.",
        questions: [
          {
            prompt: "A passage that uses five different sensory details in eight sentences and recreates a moment in vivid, immediate real-time.",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "An essay that ends with 'And that is why I learned that hard work always pays off.'",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "A passage where the reflecting self acknowledges: 'I'm still not sure what I think about this, and that uncertainty is part of what I am trying to work out here.'",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "A memoir passage that tells the reader how to feel ('This was the saddest moment of my life and you should feel sad reading it.').",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "A vignette that ends on an image — a door closing, a bird lifting from a fence — without explaining its meaning.",
            options: ["Strong", "Weak"],
          },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Extended Reflective Piece",
        instruction: "Write an extended piece of personal and reflective writing (350–500 words) on a topic that genuinely matters to you. Bring together everything you have practised: scene writing, reflection, distinctive voice, motif, strong opening and closing, and the movement between experiencing self and reflecting self.",
        parentTip: "This is the major piece for this worksheet. Give your student time and space. Suggest they plan briefly — identify the scene, the reflective question, and the ending — before drafting. Then let them write without interruption. Feedback after, not during.",
        prompts: [
          { text: "Brief plan (optional):", type: "lines", lines: 4 },
          { text: "Your extended reflective piece:", type: "box" },
        ],
      },
      // 69
      {
        type: "multiple-choice",
        title: "Self-Evaluation in Personal Writing",
        instruction: "Choose the best approach for each scenario.",
        questions: [
          {
            prompt: "After writing a personal essay, your student says 'I think it\u2019s good.' What would be the most useful next step?",
            options: [
              "Congratulate them and move on",
              "Ask them to identify the three strongest sentences and the three they are least sure about, and explain why",
              "Point out every grammatical error",
              "Ask them to rewrite it immediately",
            ],
            answer: "Ask them to identify the three strongest sentences and the three they are least sure about, and explain why",
          },
          {
            prompt: "Which of the following is the most useful self-evaluation question after drafting?",
            options: [
              "Is this long enough?",
              "Did I use enough vocabulary words?",
              "What is the essay doing — and does every part of it serve that purpose?",
              "How many paragraphs did I write?",
            ],
            answer: "What is the essay doing — and does every part of it serve that purpose?",
          },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Self-Evaluation of Your Extended Piece",
        instruction: "After writing your extended reflective piece in Activity 68, evaluate it using the questions below.",
        parentTip: "Self-evaluation should be honest and specific. 'I think it\u2019s okay' is not useful; 'the opening is strong but the middle loses focus and the ending is too obvious' is useful. Help your student develop the habit of honest self-assessment.",
        prompts: [
          {
            text: "What is the strongest moment in your piece? Copy it here and explain why it works.",
            type: "lines",
            lines: 4,
          },
          {
            text: "What is the weakest moment? What would you do differently if you revised?",
            type: "lines",
            lines: 4,
          },
          {
            text: "Does your piece arrive somewhere — is the ending different from the beginning in some meaningful way? Explain.",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 71
      {
        type: "true-false",
        title: "Advanced Memoir and Essay Craft: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "The lyric essay is a recognised literary form that often blends poetry and prose.", answer: true },
          { text: "Personal writing cannot be submitted to literary magazines or competitions.", answer: false },
          { text: "A strong personal essay can function as both intimate autobiography and cultural criticism.", answer: true },
          { text: "Every personal essay must begin with the writer's childhood.", answer: false },
          { text: "White space and fragmentation can be intentional formal choices that carry meaning.", answer: true },
          { text: "The goal of personal writing is always to make the reader like the writer.", answer: false },
        ],
      },
      // 72
      {
        type: "sorting",
        title: "Forms and Their Key Features",
        instruction: "Sort each feature into the correct form of personal writing.",
        columns: ["Memoir (book length)", "Personal Essay (short form)", "Vignette (micro)"],
        items: [
          { label: "Typically 150–500 words" },
          { label: "Usually 60,000–100,000+ words" },
          { label: "Usually 800–5,000 words" },
          { label: "Focuses on one image or moment" },
          { label: "Covers a significant period or theme of a life" },
          { label: "Can explore an idea through personal experience" },
          { label: "Published in literary journals and magazines" },
          { label: "Published as a standalone book" },
          { label: "Often used as a standalone piece or as part of a collection" },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Writing About Loss",
        instruction: "Loss is one of the great subjects of personal writing. Write a passage (10–15 sentences) about something lost — an object, a place, a person, a version of yourself. Do not explain the loss — show it through what is absent.",
        parentTip: "Writing about loss requires care. Ensure your student is writing about something they feel safe exploring. Loss of an object or a place can be as rich as loss of a person, and may feel less exposing. The key instruction — 'show it through what is absent' — is the craft challenge: how do you render what is not there?",
        prompts: [
          { text: "Your passage about loss:", type: "box" },
          {
            text: "What technique did you use to show the loss without stating it directly?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 74
      {
        type: "fill-in-blank",
        title: "Key Critics and Essayists on Personal Writing",
        instruction: "Fill in the blank with the correct name or phrase.",
        sentences: [
          { text: "The American essayist Annie Dillard wrote 'Pilgrim at _______ Creek', a book-length personal essay about the natural world.", blanks: ["Tinker"] },
          { text: "Virginia Woolf's essay '_______ of One's Own' argues for the conditions — material and creative — that a woman writer needs.", blanks: ["A Room"] },
          { text: "The New Journalism movement of the 1960s and 1970s brought personal, subjective voice to _______ writing.", blanks: ["journalism / non-fiction"] },
          { text: "Australian literary journal _______ and _______ have been key platforms for personal essays and memoir in Australia.", blanks: ["Meanjin", "Overland"] },
          { text: "George Orwell's six rules for good writing, from 'Politics and the English Language', include: 'Never use a long word where a _______ one will do.'", blanks: ["short"] },
        ],
      },
      // 75
      {
        type: "tip",
        title: "Tip: Use the Body",
        content: "The body is one of the most underused resources in personal writing. Emotion is not just felt in the mind — it is felt physically: the throat tightens, the stomach drops, the hands shake, the chest goes hollow. When writing about an emotional experience, ask: where did I feel this in my body? Writing from physical sensation grounds abstract emotion in the concrete and real, making it legible to the reader in a way that abstract emotional vocabulary ('I was devastated') rarely does. Try replacing one abstract emotional statement in your writing with a physical sensation.",
      },
      // 76
      {
        type: "open-response",
        title: "Writing Through the Body",
        instruction: "Revise a passage from earlier in this worksheet (or from another piece of personal writing) to add at least three moments where abstract emotion is replaced or accompanied by physical sensation. Write the revised version.",
        parentTip: "This revision technique is immediately useful: most student writing relies on emotional abstraction ('I was scared', 'I felt happy') rather than physical embodiment. Even one or two physical details per emotional moment transforms the reader's experience.",
        prompts: [
          { text: "Original passage:", type: "box" },
          { text: "Revised passage (with physical sensation):", type: "box" },
          {
            text: "List the three physical sensations you added and explain the effect each has:",
            type: "lines",
            lines: 5,
          },
        ],
      },
      // 77
      {
        type: "multiple-choice",
        title: "Publishing and Audience for Personal Writing",
        instruction: "Choose the best answer for each question.",
        questions: [
          {
            prompt: "Where can Australian student writers submit personal essays and memoir for publication?",
            options: [
              "Only to major publishing houses",
              "Student literary journals, school magazines, youth writing competitions, and some online literary platforms",
              "Nowhere — student writing cannot be published",
              "Only to academic journals",
            ],
            answer: "Student literary journals, school magazines, youth writing competitions, and some online literary platforms",
          },
          {
            prompt: "Why does considering an audience matter in personal writing?",
            options: [
              "Because you should only write what your audience wants to hear",
              "Because thinking about who will read the work influences choices about what to include, what to explain, what to leave unsaid",
              "Because personal writing has no audience — it is only for the writer",
              "Because audience determines the length of the essay",
            ],
            answer: "Because thinking about who will read the work influences choices about what to include, what to explain, what to leave unsaid",
          },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Peer Feedback Practice",
        instruction: "Exchange one of your personal writing pieces with another writer (a sibling, parent, friend, or online writing partner). Give and receive feedback using the three questions below.",
        parentTip: "Giving feedback is as important as receiving it — it develops critical reading skills that transfer directly to self-editing. Useful feedback is specific and focused on effect: 'In the third paragraph, I couldn\u2019t picture the scene because there were no sensory details' is more helpful than 'it\u2019s good but could be better.'",
        prompts: [
          {
            text: "What is the strongest moment in their piece, and why does it work?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Where did your engagement as a reader drop, and why?",
            type: "lines",
            lines: 3,
          },
          {
            text: "What is one specific change they could make to strengthen the piece?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 79
      {
        type: "sorting",
        title: "Personal Writing: Year 9 Australian Curriculum Outcomes",
        instruction: "Sort each outcome into the correct strand it primarily addresses.",
        columns: ["Language", "Literature", "Literacy"],
        items: [
          { label: "Understanding how voice and tone are constructed through word choice and syntax" },
          { label: "Engaging with personal writing as a literary form with its own conventions" },
          { label: "Drafting, revising, and editing personal writing for an audience" },
          { label: "Understanding the difference between experiencing and reflecting self" },
          { label: "Recognising how personal writing engages with Australian literary traditions" },
          { label: "Using figurative language, sensory detail, and dialogue effectively" },
          { label: "Reading widely in memoir, personal essay, and vignette" },
          { label: "Evaluating and improving own writing through self-assessment and feedback" },
          { label: "Understanding how structure (circular, braided, fragmented) creates meaning" },
        ],
      },
      // 80
      {
        type: "spark",
        title: "Spark: Your Writing Practice",
        content: "Professional writers — including the greatest memoir writers — write regularly, often daily. They write in journals, on scraps of paper, in notes apps. They write things they will never share. The purpose is not productivity; it is maintenance — keeping the channel open between experience and language. What would your own writing practice look like? Not as a school task but as a habit. What would you write about if no one were reading? Start there.",
      },
      // 81
      {
        type: "open-response",
        title: "Extended Personal Essay: Planning",
        instruction: "Plan a full personal essay (500–700 words) on a topic of genuine significance to you. Your plan should include: your central question or idea, your opening strategy, the scene or scenes you will use, the reflective movements, and your intended ending.",
        parentTip: "A good plan for personal writing is less prescriptive than an essay plan — it identifies the key scenes and the reflective question, but allows for discovery in the drafting. Too rigid a plan can kill the essay's life; too loose a plan can lead to drift.",
        prompts: [
          { text: "Central question or idea:", type: "lines", lines: 2 },
          { text: "Opening strategy:", type: "lines", lines: 2 },
          { text: "Key scene(s):", type: "lines", lines: 3 },
          { text: "Reflective movements (what thinking will happen between/after scenes):", type: "lines", lines: 3 },
          { text: "Intended ending (where will the essay arrive?):", type: "lines", lines: 2 },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Extended Personal Essay: Draft",
        instruction: "Using your plan, write the full draft of your personal essay (500–700 words). Do not stop to perfect — write through to the end. You will revise in the next activity.",
        parentTip: "Give your student extended, uninterrupted time for this draft. Suggest they put their plan to one side and write from memory and feeling — the plan has done its job. If they get stuck, tell them to write the next true thing they know about their subject.",
        prompts: [
          { text: "Your full draft:", type: "box" },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Extended Personal Essay: Revision",
        instruction: "Revise your draft from Activity 82 using the following checklist: (1) Does the opening earn the reader's attention? (2) Is there at least one fully developed scene? (3) Does the reflection go beyond summary to genuine thinking? (4) Is the voice consistent and distinctive? (5) Does the ending arrive somewhere? (6) Can you cut at least 50 words without losing anything essential?",
        parentTip: "Revision is not proofreading — it is reconsidering. A revision might mean reordering, cutting a whole section, adding a scene, or rethinking the ending. Encourage your student to be bold rather than conservative in revision.",
        prompts: [
          { text: "Your revised draft:", type: "box" },
          {
            text: "What did you change in revision, and why?",
            type: "lines",
            lines: 5,
          },
        ],
      },
      // 84
      {
        type: "true-false",
        title: "The Extended Essay: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A 700-word personal essay can sustain more than one scene.", answer: true },
          { text: "Revision always means making the writing longer.", answer: false },
          { text: "The most important part of a personal essay is the conclusion.", answer: false },
          { text: "A distinctive voice is built partly through sentence variety and word choice.", answer: true },
          { text: "An essay that makes a reader think long after they have finished it has achieved something.", answer: true },
          { text: "Personal essays must be submitted in strict five-paragraph format.", answer: false },
        ],
      },
      // 85
      {
        type: "multiple-choice",
        title: "Genre Hybridity in Personal Writing",
        instruction: "Choose the best answer for each question about hybrid and experimental personal writing.",
        questions: [
          {
            prompt: "What is a 'hybrid text' in the context of personal writing?",
            options: [
              "A text that contains both fiction and non-fiction elements",
              "A text written by two authors",
              "A text printed in two languages",
              "A text that combines essay, poetry, research, or other modes in unexpected ways",
            ],
            answer: "A text that combines essay, poetry, research, or other modes in unexpected ways",
          },
          {
            prompt: "Why might an author choose a fragmented structure for a personal essay?",
            options: [
              "Because they ran out of time to finish it",
              "To reflect the fragmented nature of memory, or to create meaning through juxtaposition rather than argument",
              "Because editors prefer shorter sections",
              "To make the essay appear longer than it is",
            ],
            answer: "To reflect the fragmented nature of memory, or to create meaning through juxtaposition rather than argument",
          },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Writing an Author's Note",
        instruction: "Some memoirists and personal essayists include a short author's note (100–150 words) at the beginning of their work, addressing the reader directly about their approach to memory, truth, and ethics. Write one for a piece of personal writing you have completed.",
        parentTip: "An author's note is an interesting genre in itself — it is the writer stepping outside the text to address the conditions of its creation. It demonstrates self-awareness about the limitations of memory and the ethical responsibilities of writing about real people and events.",
        prompts: [
          { text: "Your author's note:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Portfolio Reflection: Your Development as a Personal Writer",
        instruction: "Look back over all the writing you have done in this worksheet. Write a personal reflection (150–200 words) on your development as a personal writer. What have you learned? What surprised you? What do you most want to improve?",
        parentTip: "Metacognitive reflection — thinking about your own thinking and development — is a powerful learning tool. It is also good practice for personal writing: the student is writing personally about their experience of writing personally.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 88
      {
        type: "circle-correct",
        title: "What Should Stay? Editorial Decisions",
        instruction: "For each sentence, circle whether it should STAY or GO in a tight, well-revised personal essay.",
        questions: [
          {
            prompt: "'She put the cup down on the table.' (The cup has no significance in the essay.)",
            options: ["Stay", "Go"],
          },
          {
            prompt: "'It was a cold morning. Not cold enough to snow — the wrong kind of cold, the kind that makes your face feel like paper.'",
            options: ["Stay", "Go"],
          },
          {
            prompt: "'In this essay, I will be exploring the theme of belonging and how it relates to my personal experience.'",
            options: ["Stay", "Go"],
          },
          {
            prompt: "'She laughed, but it was the laugh she used when she wanted to end a conversation.'",
            options: ["Stay", "Go"],
          },
          {
            prompt: "'As I have stated above, the experience was significant to me in a number of ways.'",
            options: ["Stay", "Go"],
          },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "The Final Piece: Personal Essay for an Audience",
        instruction: "Write a final, polished personal essay (400–600 words) that you would be willing to share with a real reader — a family member, a writing group, or submitted to a youth writing competition. Apply everything you have learned in this worksheet.",
        parentTip: "Writing for a genuine audience raises the stakes in a productive way. If there is a youth literary magazine, school writing competition, or local publication that accepts personal essays, consider encouraging your student to submit this piece. Real audiences produce real writers.",
        prompts: [
          { text: "Your final personal essay:", type: "box" },
        ],
      },
      // 90
      {
        type: "tip",
        title: "Tip: Keep a Writing Journal",
        content: "The single best thing any aspiring writer can do is keep a regular writing journal — not a diary, but a notebook for observations, questions, images, fragments, and beginnings. Not everything in the journal becomes an essay; most of it doesn't. But the journal is where you notice things, catch the language before it evaporates, and keep the writing muscle active. Some of the most celebrated personal writing in history began in notebooks. Start one, or continue one, and make it yours.",
      },
      // 91
      {
        type: "open-response",
        title: "Comparison: Two Personal Writers",
        instruction: "Compare two personal writers you have read or studied — one Australian, one from elsewhere. Write a paragraph (8–12 sentences) on each, discussing their voice, their subject matter, and one technique you could borrow from each.",
        parentTip: "Comparative reading is one of the best ways to understand how craft works. By placing two writers side by side, differences in voice, structure, and technique become visible that would be invisible if reading each in isolation.",
        prompts: [
          { text: "Writer 1 (Australian):", type: "box" },
          { text: "Writer 2 (International):", type: "box" },
          {
            text: "What could these two writers learn from each other?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 92
      {
        type: "matching",
        title: "Personal Writing Awards and Platforms in Australia",
        instruction: "Match each Australian literary award or platform to its description.",
        left: [
          "Miles Franklin Literary Award",
          "Meanjin",
          "Vogel Award",
          "Overland",
          "Kill Your Darlings",
        ],
        right: [
          "Online magazine with a strong tradition of publishing personal essays and memoir",
          "Annual prize for unpublished manuscripts by writers under 35",
          "Australia's most prestigious literary award for published fiction and memoir",
          "One of Australia's oldest literary journals, publishing essays, criticism, and memoir since 1940",
          "Progressive literary journal that has published personal writing on politics, culture, and identity since 1954",
        ],
      },
      // 93
      {
        type: "open-response",
        title: "A Letter You Will Not Send",
        instruction: "Write a personal essay in the form of a letter to someone — a person from your past, a future version of yourself, or someone you have never met. The letter form gives personal writing a built-in addressee and intimacy. Aim for 200–300 words.",
        parentTip: "The epistolary essay (essay in letter form) is a time-honoured form. It creates intimacy and directness. Mary Karr, James Baldwin, and many others have used it. The fact that the letter will not be sent frees the student to be more honest than they might otherwise be.",
        prompts: [
          { text: "Your letter essay:", type: "box" },
          {
            text: "What does the letter form allow you to do that straight personal essay would not?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 94
      {
        type: "multiple-choice",
        title: "The Purpose of Personal Writing",
        instruction: "Choose the best answer for each question.",
        questions: [
          {
            prompt: "Which of the following best describes the purpose of personal writing at its highest level?",
            options: [
              "To entertain readers with funny stories",
              "To create a permanent record of events",
              "To think in public — to use personal experience as a lens through which to understand something larger about human experience",
              "To express negative emotions safely",
            ],
            answer: "To think in public — to use personal experience as a lens through which to understand something larger about human experience",
          },
          {
            prompt: "Why do universities and employers value the ability to write well personally and reflectively?",
            options: [
              "Because it demonstrates intelligence",
              "Because it requires and develops self-knowledge, critical thinking, and the capacity to communicate complex experience clearly",
              "Because it is required for all professional jobs",
              "Because it shows creativity",
            ],
            answer: "Because it requires and develops self-knowledge, critical thinking, and the capacity to communicate complex experience clearly",
          },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Your Writing Practice: A Manifesto",
        instruction: "Write a short personal manifesto (150–200 words) about your writing practice and values. What do you want to write about? What kind of writer do you want to be? What do you believe good writing should do? This does not need to be polished — it needs to be true.",
        parentTip: "A writing manifesto is a declaration of intent and values. It helps a young writer understand what they care about and what they are reaching for. It can also be a document they return to and revise as they develop. Encourage honesty over polish.",
        prompts: [
          { text: "Your writing manifesto:", type: "box" },
        ],
      },
      // 96
      {
        type: "home-activity",
        title: "Beyond the Worksheet: Personal Writing in the World",
        instruction: "Choose one or more of the following activities to extend your personal writing practice beyond this worksheet.",
        parentTip: "Personal writing develops best when practised regularly and when connected to real reading. These activities connect the worksheet work to ongoing practice and the wider world of Australian and international personal writing.",
        suggestions: [
          "Read a memoir or personal essay collection by an Australian writer. Suggestions: Tim Winton's Island Home, Sally Morgan's My Place, Helen Garner's This House of Grief, or essays from Meanjin magazine (meanjin.com.au).",
          "Start a writing journal. Commit to writing at least 10 minutes a day for one week — observations, questions, beginnings. Not for anyone else to read.",
          "Submit a personal essay to a youth writing competition. Australian options include the Writing Australia Unpublished Manuscript Award and various state-based competitions.",
          "Read one personal essay aloud to a family member or friend. Notice what sounds different when heard rather than read. Revise at least one sentence based on hearing it.",
          "Interview a family member about a period of their life you know little about. Take notes. Then write a scene or vignette based on what they told you — this is the beginning of oral history memoir.",
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Final Reflection: What Have You Learned?",
        instruction: "Write a reflective response (150–200 words) to the following question: What is the most important thing you have learned about personal writing from this worksheet — not about techniques or forms, but about the act of writing personally?",
        parentTip: "This final reflection asks your student to move beyond craft knowledge to something more personal and philosophical. The best answers will be specific — they will name one thing, one realisation, rather than listing everything covered.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 98
      {
        type: "true-false",
        title: "Final Review: Personal Writing Essentials",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Personal writing at its best does more than document experience — it illuminates something true about human experience.", answer: true },
          { text: "The only purpose of reflection in personal writing is to tell the reader what lesson was learned.", answer: false },
          { text: "A personal essay can have a political or cultural dimension without losing its personal quality.", answer: true },
          { text: "Revision is optional in personal writing because the first draft should always be authentic.", answer: false },
          { text: "The 'white space' between sections in a fragmented essay is dead space that adds nothing.", answer: false },
          { text: "A personal essay about a very specific, local experience can have universal resonance.", answer: true },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Next Steps: Your Personal Writing Project",
        instruction: "Identify your next personal writing project. It might be a complete personal essay, a chapter of a memoir, a series of vignettes, or a lyric essay. Describe it briefly and write the first sentence — right now, without editing.",
        parentTip: "Beginning is the hardest part. By having your student write the first sentence of their next project at the end of this worksheet, you create continuity — the next project has already started. This reduces the 'blank page' problem considerably.",
        prompts: [
          { text: "Describe your next project:", type: "lines", lines: 4 },
          { text: "The first sentence (write it now, without editing):", type: "lines", lines: 2 },
        ],
      },
      // 100
      {
        type: "spark",
        title: "Spark: Write Your Life",
        content: "Every life contains enough material for a thousand essays. Your ordinary days, your specific loves and losses, your observations at bus stops and kitchen tables, your half-understood memories, your unanswered questions — all of this is material. The poet Muriel Rukeyser wrote: 'The universe is made of stories, not atoms.' You are a universe. Write your life.",
      },
    ],
    nextSteps: [
      "Complete a full personal essay using the scene and reflection you developed in this worksheet.",
      "Read a personal essay by an Australian author — Tim Winton's essays in Island Home are a strong choice.",
      "Start a writing journal and commit to regular short entries for one month.",
      "Submit your best personal essay to a youth writing competition.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "true-false",
        title: "Formal Speaking: True or False?",
        instruction: "Mark each statement about formal presentations and debate as true or false.",
        statements: [
          { text: "A formal presentation should begin with 'Hi, um, I am going to talk about...'", answer: false },
          { text: "Formal spoken English requires more planning and structure than everyday conversation.", answer: true },
          { text: "In structured debate, speakers must engage with what the other side actually says.", answer: true },
          { text: "Signposting language (e.g. 'My first point is...') is unnecessary in formal presentations.", answer: false },
          { text: "Delivery elements such as pace, volume, and eye contact affect how an audience receives a presentation.", answer: true },
          { text: "The Affirmative team in a debate argues against the proposition.", answer: false },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Formal Speaking Vocabulary",
        instruction: "Match each term to its correct definition.",
        left: [
          "Proposition",
          "Rebuttal",
          "Signposting",
          "Steelmanning",
          "Adjudicator",
          "Floor",
        ],
        right: [
          "The person who evaluates the debate and decides the winner",
          "Engaging with the strongest possible version of an opposing argument",
          "The statement or motion being debated",
          "Using phrases to guide the audience through the structure of a presentation",
          "The space open to questions from the audience after a presentation",
          "Directly responding to and countering an opposing argument",
        ],
      },
      // 3
      {
        type: "multiple-choice",
        title: "The Four Elements of a Formal Presentation",
        instruction: "Choose the best answer for each question about presentation structure.",
        parentTip: "The four-element structure gives students a reliable scaffold for any formal presentation. Once they know it well, they can adapt and vary it creatively.",
        questions: [
          {
            prompt: "Which of the following is the best way to open a formal presentation?",
            options: [
              "'Good afternoon. Today I will talk about social media.'",
              "'Um, so, I'm going to try to explain why I think social media is bad.'",
              "'What if the way we communicate online is slowly making us worse at communicating in person?'",
              "'My presentation has three points. The first one is about social media.'",
            ],
            answer: "'What if the way we communicate online is slowly making us worse at communicating in person?'",
          },
          {
            prompt: "What is the purpose of signposting language in a formal presentation?",
            options: [
              "To add length to the presentation",
              "To guide the audience through the structure and signal where the presentation is going",
              "To repeat the thesis multiple times",
              "To show off vocabulary",
            ],
            answer: "To guide the audience through the structure and signal where the presentation is going",
          },
          {
            prompt: "What distinguishes a strong presentation close from a weak one?",
            options: [
              "The strong close is longer",
              "The strong close ends with impact — returning to the opening and restating the argument more powerfully",
              "The strong close introduces a new argument",
              "The strong close simply thanks the audience",
            ],
            answer: "The strong close ends with impact — returning to the opening and restating the argument more powerfully",
          },
        ],
      },
      // 4
      {
        type: "sorting",
        title: "Signposting Language",
        instruction: "Sort each phrase into the correct part of a presentation it is most useful for.",
        columns: ["Opening", "Main Body", "Rebuttal", "Close"],
        items: [
          { label: "\"I want to begin with a question...\"" },
          { label: "\"My first point concerns...\"" },
          { label: "\"While it is true that..., I would argue...\"" },
          { label: "\"To return to where we started...\"" },
          { label: "\"Consider this: in 2024, more than...\"" },
          { label: "\"Building on this...\"" },
          { label: "\"Those who oppose this view claim... However...\"" },
          { label: "\"In short, the evidence shows...\"" },
          { label: "\"Moving on to my second point...\"" },
          { label: "\"I hope I have convinced you today that...\"" },
        ],
      },
      // 5
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
      // 6
      {
        type: "fill-in-blank",
        title: "Debate Roles and Responsibilities",
        instruction: "Fill in the blank with the correct debate term or role.",
        sentences: [
          { text: "In a standard two-team debate, the _______ team argues for the proposition.", blanks: ["Affirmative"] },
          { text: "The _______ team argues against the proposition.", blanks: ["Negative"] },
          { text: "The first speaker's role includes _______ key terms and outlining the team's case.", blanks: ["defining"] },
          { text: "Second speakers _______ the main arguments with evidence.", blanks: ["develop"] },
          { text: "Third speakers _______ the other team's case and summarise.", blanks: ["rebut"] },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "Effective vs. Ineffective Rebuttal",
        instruction: "For each rebuttal attempt, circle whether it is effective or ineffective.",
        questions: [
          {
            prompt: "'The previous speaker said that social media damages relationships. That\u2019s just wrong.'",
            options: ["Effective rebuttal", "Ineffective rebuttal"],
          },
          {
            prompt: "'While the Affirmative team correctly notes that social media can isolate individuals, the evidence also shows that for many people — particularly in rural and remote areas — it is the primary means of maintaining social connection.'",
            options: ["Effective rebuttal", "Ineffective rebuttal"],
          },
          {
            prompt: "'My opponent is clearly uninformed about this issue.'",
            options: ["Effective rebuttal", "Ineffective rebuttal"],
          },
          {
            prompt: "'The previous speaker raised the point about cost. This is a genuine concern. However, when we compare the cost of the proposed solution with the cost of inaction, the balance shifts significantly.'",
            options: ["Effective rebuttal", "Ineffective rebuttal"],
          },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Evidence in Formal Speaking",
        instruction: "Choose the best answer for each question about using evidence in presentations and debate.",
        questions: [
          {
            prompt: "Which type of evidence is generally most persuasive in a formal presentation?",
            options: [
              "Personal opinion",
              "Hearsay from a friend",
              "Verifiable statistics or expert opinion from credible sources",
              "Examples from television programmes",
            ],
            answer: "Verifiable statistics or expert opinion from credible sources",
          },
          {
            prompt: "What is the danger of relying only on statistics in a formal presentation?",
            options: [
              "Statistics are always wrong",
              "Statistics without context or analysis can mislead; stories and examples help make them meaningful",
              "Audiences always distrust statistics",
              "Statistics make presentations too long",
            ],
            answer: "Statistics without context or analysis can mislead; stories and examples help make them meaningful",
          },
        ],
      },
      // 9
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
      // 10
      {
        type: "matching",
        title: "Logical Fallacies",
        instruction: "Match each logical fallacy to its definition. (These are errors in reasoning you should recognise and avoid in debate.)",
        parentTip: "Being able to identify logical fallacies is a significant intellectual skill. When a debate opponent commits a fallacy, a skilled debater can name it and explain why it weakens their argument.",
        left: [
          "Ad hominem",
          "Straw man",
          "False dichotomy",
          "Appeal to authority",
          "Slippery slope",
        ],
        right: [
          "Attacking the person making the argument rather than the argument itself",
          "Claiming that if A happens, B, C, D, and eventually Z must inevitably follow",
          "Misrepresenting someone's argument to make it easier to attack",
          "Presenting only two options when others exist",
          "Arguing something is true or right because an authority figure said so",
        ],
      },
      // 11
      {
        type: "true-false",
        title: "Delivery Skills: True or False?",
        instruction: "Mark each statement about delivery skills as true or false.",
        statements: [
          { text: "Eye contact with different parts of the room helps speakers connect with their whole audience.", answer: true },
          { text: "Speaking faster always makes you sound more confident.", answer: false },
          { text: "Pausing before a key point can create emphasis and give the audience time to absorb it.", answer: true },
          { text: "Reading directly from notes throughout a presentation is ideal delivery.", answer: false },
          { text: "Vocal variety — changing pitch, pace, and volume — helps maintain audience attention.", answer: true },
          { text: "Nervous energy can be channelled into enthusiasm and energy in delivery.", answer: true },
        ],
      },
      // 12
      {
        type: "fill-in-blank",
        title: "Formal Language Register",
        instruction: "Rewrite each informal phrase in a more formal register suitable for a formal presentation or debate.",
        sentences: [
          { text: "Informal: 'I think this is really important and people need to get this.' Formal: '_______'", blanks: ["This issue is of considerable significance and merits careful consideration."] },
          { text: "Informal: 'The other side is wrong about this.' Formal: '_______'", blanks: ["The previous speaker's argument, while understandable, overlooks a key factor."] },
          { text: "Informal: 'Loads of research shows...' Formal: '_______'", blanks: ["Substantial evidence indicates... / Research consistently demonstrates..."] },
          { text: "Informal: 'And that's basically my point.' Formal: '_______'", blanks: ["In summary, the evidence clearly supports the conclusion that..."] },
        ],
      },
      // 13
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
      // 14
      {
        type: "sorting",
        title: "Debate Topics: Sorting Sides",
        instruction: "For the topic 'Artificial intelligence should be regulated by governments', sort each argument into Affirmative or Negative.",
        columns: ["Affirmative (For regulation)", "Negative (Against regulation)"],
        items: [
          { label: "AI systems can cause significant harm if deployed without safety standards." },
          { label: "Government regulation stifles innovation and competitive advantage." },
          { label: "Without oversight, AI developers face no accountability for bias or errors." },
          { label: "Industry self-regulation is faster and more technically informed than government." },
          { label: "Governments lack the technical expertise to regulate AI effectively." },
          { label: "Regulation creates consistent safety standards that build public trust." },
          { label: "International AI regulation creates a level playing field across nations." },
          { label: "Overly restrictive regulation could drive AI development to less regulated countries." },
        ],
      },
      // 15
      {
        type: "tip",
        title: "Tip: Steelman, Don't Strawman",
        content: "The most common mistake in debate and argument is the straw man: misrepresenting the opposing argument in a weaker form to make it easier to attack. The opposite technique — steelmanning — involves engaging with the strongest possible version of the opposing argument. Steelmanning is harder, but it is more honest and ultimately more persuasive, because it shows the audience you understand the issue deeply enough to engage with its most challenging dimensions. When preparing for debate, ask: what is the best possible case my opponent could make? Then prepare to meet that case.",
      },
      // 16
      {
        type: "multiple-choice",
        title: "Debate Format and Conventions",
        instruction: "Choose the best answer for each question about formal debate conventions.",
        questions: [
          {
            prompt: "In a formal school debate, what is the role of the third speaker?",
            options: [
              "To introduce new arguments not covered by earlier speakers",
              "To rebut the opposing team's case and provide a summary of the team's arguments",
              "To give a short speech of thanks",
              "To ask questions of the other team",
            ],
            answer: "To rebut the opposing team's case and provide a summary of the team's arguments",
          },
          {
            prompt: "What does it mean to 'define the terms' in a debate?",
            options: [
              "To look up words in a dictionary",
              "To clarify what key words in the proposition mean for the purposes of the debate",
              "To limit the debate to only certain topics",
              "To disagree with the proposition's wording",
            ],
            answer: "To clarify what key words in the proposition mean for the purposes of the debate",
          },
          {
            prompt: "Which quality is most important in a debate adjudicator's decision?",
            options: [
              "Which team spoke more loudly",
              "Which team's speakers had better presentation style",
              "Which team better proved their case through logical argument, evidence, and rebuttal",
              "Which team was more agreeable",
            ],
            answer: "Which team better proved their case through logical argument, evidence, and rebuttal",
          },
        ],
      },
      // 17
      {
        type: "open-response",
        title: "Identifying Logical Fallacies",
        instruction: "Read the following debate extracts and identify the logical fallacy in each. Explain why it weakens the argument.",
        parentTip: "Fallacy identification is a transferable skill: it applies in debates, in reading media, and in everyday reasoning. Once students can name fallacies, they notice them everywhere.",
        prompts: [
          {
            text: "Extract: 'We can't trust my opponent's argument about climate policy because she once said she liked driving fast cars.' What fallacy? Why does it weaken the argument?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Extract: 'If we allow any form of censorship online, we will soon live in a totalitarian state where all speech is controlled.' What fallacy? Why does it weaken the argument?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Extract: 'You\u2019re either with us on this or you\u2019re against protecting children. There is no middle ground.' What fallacy? Why does it weaken the argument?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 18
      {
        type: "fill-in-blank",
        title: "Transition Phrases for Debate Rebuttal",
        instruction: "Fill in the blank with an appropriate rebuttal transition phrase.",
        sentences: [
          { text: "_______ the previous speaker's argument is compelling in theory, it ignores the practical realities.", blanks: ["While / Although"] },
          { text: "My opponent correctly points out that... _______: this point actually supports our case because...", blanks: ["However / But"] },
          { text: "The Affirmative team's evidence is _______ but does not account for the broader picture.", blanks: ["accurate / valid / relevant"] },
          { text: "I would like to _______ the claim that...", blanks: ["address / challenge / rebut"] },
          { text: "This argument, while understandable, _______ a crucial piece of evidence.", blanks: ["overlooks / ignores / misses"] },
        ],
      },
      // 19
      {
        type: "circle-correct",
        title: "Appropriate Register",
        instruction: "For each context, circle which language register is most appropriate.",
        questions: [
          {
            prompt: "Delivering a formal presentation to a school assembly",
            options: ["Formal and structured", "Casual and colloquial"],
          },
          {
            prompt: "Asking a question from the floor during a formal debate",
            options: ["Formal: 'I have a question for the affirmative team regarding...'", "Casual: 'Yeah so I was wondering about that point you made'"],
          },
          {
            prompt: "Opening a three-minute timed speech",
            options: ["'Today I'm gonna talk about...'", "'Consider for a moment what it would mean if...'"],
          },
          {
            prompt: "Conceding a point during a debate",
            options: ["'Okay, fair enough, you got me.'", "'I concede that the data presented is valid; however...'"],
          },
        ],
      },
      // 20
      {
        type: "spark",
        title: "Spark: The Art of Listening",
        content: "Most preparation for public speaking focuses on what to say. But skilled speakers and debaters are also skilled listeners — they hear the exact words the other side uses, not the words they expected to hear. In debate, the difference between a good rebuttal and a great one is often whether you are actually engaging with what was said, or with what you assumed would be said. The next time you are in a disagreement, try this: pause before responding and ask yourself: what exactly did they just say? What did they actually mean? What is the strongest version of their point? This habit is both an intellectual virtue and a practical debate skill.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Preparing Both Sides",
        instruction: "Choose a debate topic from the list or propose one of your own. Research and prepare the three strongest arguments for BOTH the Affirmative and Negative sides before deciding which position to argue. This is standard preparation for competitive debaters.",
        parentTip: "The discipline of preparing both sides is one of the most valuable intellectual habits a student can develop. It prevents confirmation bias, deepens understanding of the issue, and makes the eventual argument much stronger because it is built with full knowledge of the opposition.",
        prompts: [
          { text: "Your debate topic:", type: "lines", lines: 1 },
          { text: "Three strongest Affirmative arguments:", type: "lines", lines: 5 },
          { text: "Three strongest Negative arguments:", type: "lines", lines: 5 },
          { text: "Which side do you find more convincing and why?", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "true-false",
        title: "The Importance of Body Language in Presentations",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Body language (posture, gesture, movement) contributes significantly to how an audience receives a speaker.", answer: true },
          { text: "Standing completely still is always the best choice during a formal presentation.", answer: false },
          { text: "Deliberate pausing is a weakness that should be eliminated.", answer: false },
          { text: "Hand gestures, when natural and purposeful, can reinforce key points.", answer: true },
          { text: "Looking at the floor or ceiling while speaking undermines credibility.", answer: true },
        ],
      },
      // 23
      {
        type: "multiple-choice",
        title: "Question Time and the Floor",
        instruction: "Choose the best answer for each question about handling questions during or after a formal presentation.",
        questions: [
          {
            prompt: "What is the most effective strategy when asked a question you cannot fully answer?",
            options: [
              "Pretend you know the answer and improvise",
              "Refuse to engage with the question",
              "Acknowledge the limits of your knowledge honestly while addressing what you do know",
              "Attack the questioner for asking a difficult question",
            ],
            answer: "Acknowledge the limits of your knowledge honestly while addressing what you do know",
          },
          {
            prompt: "A hostile or aggressive question is best handled by:",
            options: [
              "Becoming aggressive in return",
              "Refusing to answer",
              "Pausing, acknowledging the challenge, and responding calmly and logically",
              "Immediately conceding the questioner's point",
            ],
            answer: "Pausing, acknowledging the challenge, and responding calmly and logically",
          },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Speed Debate Practice",
        instruction: "Choose a simple topic (e.g. 'Homework should be abolished' or 'Zoos do more good than harm'). Spend 5 minutes preparing, then deliver a 1-minute speech — either for or against — without notes. After delivering it, reflect below.",
        parentTip: "Speed debate builds spontaneous argumentation skills. One minute is harder than five — every sentence must do work. Time the speech with a timer and be strict about the limit.",
        prompts: [
          { text: "Topic and your position:", type: "lines", lines: 1 },
          { text: "Your three key points (written AFTER the speech, from memory):", type: "lines", lines: 4 },
          { text: "What was the hardest part of speaking without notes?", type: "lines", lines: 3 },
        ],
      },
      // 25
      {
        type: "sorting",
        title: "Argument Strength",
        instruction: "Sort each type of evidence or argument from strongest to weakest for use in a formal debate. (Place in the Strongest or Weakest column.)",
        columns: ["Strongest Evidence", "Weakest Evidence"],
        items: [
          { label: "Peer-reviewed research findings with sample size and methodology stated" },
          { label: "'My friend told me that...'" },
          { label: "Government statistics from a reputable national body" },
          { label: "A celebrity's opinion shared on social media" },
          { label: "A historical case study that directly parallels the proposition" },
          { label: "'It just seems obvious that...'" },
          { label: "Expert testimony from a credentialed specialist in the relevant field" },
          { label: "An anecdote from a TV programme" },
        ],
      },
      // 26
      {
        type: "fill-in-blank",
        title: "Rhetorical Devices in Formal Speaking",
        instruction: "Fill in the blank with the correct rhetorical device being demonstrated.",
        sentences: [
          { text: "'We will not stop. We will not rest. We will not give up.' — This uses _______ (repetition at the start of successive clauses).", blanks: ["anaphora"] },
          { text: "'Shall we remain silent while this injustice continues?' — This is a _______ question, asked for effect rather than an actual answer.", blanks: ["rhetorical"] },
          { text: "'The choice is simple: act now, or pay later.' — This is a direct example of _______.", blanks: ["antithesis"] },
          { text: "'Think of the children who will inherit this decision.' — This appeals primarily to _______ (emotion).", blanks: ["pathos"] },
          { text: "'Research from the Australian Academy of Science confirms that...' — This appeals primarily to _______ (credibility/authority).", blanks: ["ethos / logos"] },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Using Rhetorical Devices",
        instruction: "Write a 4–6 sentence excerpt from a formal presentation that uses at least three rhetorical devices (e.g. anaphora, rhetorical question, antithesis, metaphor, rule of three). Label each device in brackets after you use it.",
        parentTip: "Rhetorical devices are tools, not decorations. Each should serve the argument — not be added for its own sake. Encourage your student to use each device purposefully and to evaluate whether it actually strengthens the passage.",
        prompts: [
          { text: "Your excerpt with labelled devices:", type: "box" },
          {
            text: "Which device was most effective and why?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 28
      {
        type: "circle-correct",
        title: "Assessing Argument Quality",
        instruction: "For each argument, circle whether it is strong or weak, and be ready to explain why.",
        questions: [
          {
            prompt: "Argument: 'Social media should be banned for under-16s because it causes anxiety.' (No evidence provided.)",
            options: ["Strong argument", "Weak — needs evidence"],
          },
          {
            prompt: "Argument: 'A 2023 Australian Institute of Family Studies report found that 62% of teenagers who used social media more than 3 hours daily reported higher anxiety. This suggests that usage limits, not a complete ban, may be the appropriate policy response.'",
            options: ["Strong argument", "Weak — needs evidence"],
          },
          {
            prompt: "Argument: 'Anyone who disagrees with social media regulation clearly doesn\u2019t care about children\u2019s mental health.'",
            options: ["Strong argument", "Weak — ad hominem fallacy"],
          },
          {
            prompt: "Argument: 'While regulation of social media use presents implementation challenges, the documented links between unrestricted use and adolescent mental health decline justify exploring evidence-based policies.'",
            options: ["Strong argument", "Weak — needs evidence"],
          },
        ],
      },
      // 29
      {
        type: "multiple-choice",
        title: "Concession in Debate",
        instruction: "Choose the best answer for each question about the art of concession in debate.",
        parentTip: "Appropriate concession is a sign of intellectual maturity. It is not weakness — it actually strengthens a debater's credibility by showing they are engaging honestly rather than just trying to win.",
        questions: [
          {
            prompt: "What is an appropriate concession in debate?",
            options: [
              "Giving up the argument entirely",
              "Agreeing with the opposing team's entire case",
              "Acknowledging a valid point made by the opposition before explaining why it does not undermine your overall position",
              "Admitting defeat before the debate is finished",
            ],
            answer: "Acknowledging a valid point made by the opposition before explaining why it does not undermine your overall position",
          },
          {
            prompt: "Why does graceful concession often strengthen a debater's position?",
            options: [
              "It shortens the debate",
              "It demonstrates intellectual honesty and builds credibility with the audience and adjudicator",
              "It confuses the opposition",
              "It fulfils a formal rule about concessions",
            ],
            answer: "It demonstrates intellectual honesty and builds credibility with the audience and adjudicator",
          },
        ],
      },
      // 30
      {
        type: "tip",
        title: "Tip: Pace and the Pause",
        content: "One of the most consistent problems in student presentations is pace: speaking too quickly, often driven by nerves. The solution is to practise deliberate pausing. A pause before your key point signals to the audience that something important is coming. A pause after gives them time to absorb it. Skilled speakers use silence as a tool — it commands attention in a way that a continuous flow of words does not. When practising your presentation, deliberately insert three pauses and hold each one for two to three seconds. This feels unnatural at first, but to an audience it reads as confidence and control.",
      },
      // 31
      {
        type: "open-response",
        title: "Case Summary Writing",
        instruction: "Write a 100–150 word summary of the case you would put as first speaker for one side of the following debate: 'Australia should become a republic.' Begin with a definition of key terms, state your team's position clearly, and outline the three main points your team will argue.",
        parentTip: "The first speaker's case summary is the most important speech in a debate — it sets up everything that follows. A clear, well-structured case summary makes the second and third speakers' jobs easier and gives the audience a framework for evaluating the whole debate.",
        prompts: [
          { text: "Your side (circle):", type: "lines", lines: 1 },
          { text: "Case summary:", type: "box" },
        ],
      },
      // 32
      {
        type: "true-false",
        title: "Competitive Debate: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "In competitive debate, teams are often assigned their side randomly, regardless of personal belief.", answer: true },
          { text: "Introducing entirely new material in the rebuttal speech is good debate practice.", answer: false },
          { text: "Winning a debate depends more on the strength of the argument than on speaking volume.", answer: true },
          { text: "A team can win a debate even if they lose most of the minor arguments, provided they win the central argument.", answer: true },
          { text: "Defining terms narrowly or unusually to exclude the opposition's arguments is called 'squirrelling' and is considered poor practice.", answer: true },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "Types of Argument",
        instruction: "Fill in the blank with the correct type of argument or appeal.",
        sentences: [
          { text: "An appeal based on the speaker's credibility, expertise, or good character is called an appeal to _______.", blanks: ["ethos"] },
          { text: "An appeal to the audience's emotions — their fear, sympathy, or hope — is called an appeal to _______.", blanks: ["pathos"] },
          { text: "An appeal based on logic, reasoning, and evidence is called an appeal to _______.", blanks: ["logos"] },
          { text: "An argument that uses a real-world example to illustrate a principle is called an _______ argument.", blanks: ["illustrative / case study / analogical"] },
          { text: "An argument that shows a proposition leads to contradictory conclusions is called a _______ argument.", blanks: ["reductio ad absurdum / reductio"] },
        ],
      },
      // 34
      {
        type: "matching",
        title: "Famous Speeches and Speakers",
        instruction: "Match each speaker to the speech or context they are known for.",
        left: [
          "Nelson Mandela",
          "Greta Thunberg",
          "Noel Pearson",
          "Malala Yousafzai",
          "Paul Keating",
        ],
        right: [
          "United Nations Climate Action Summit 2019 speech condemning world leaders' inaction",
          "Australian Prime Minister's 1992 Redfern Speech acknowledging the impact of colonisation on Aboriginal people",
          "UN speech on girls' right to education following an assassination attempt",
          "'I Am Prepared to Die' — statement from the dock at the Rivonia Trial, 1964",
          "2000 Sydney Olympic Games opening ceremony speech on Aboriginal culture and pride",
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Speech Analysis: A Famous Speech",
        instruction: "Choose one of the speeches from Activity 34 (or another famous speech of your choice) and analyse it using the questions below. Listen to it if possible; otherwise read a transcript.",
        parentTip: "Listening to great speeches is one of the best ways to understand the craft of formal speaking. Keating's Redfern Speech and Thunberg's UN speech are particularly powerful and appropriate for Year 9. Play them together if possible.",
        prompts: [
          { text: "Speaker and speech title:", type: "lines", lines: 1 },
          { text: "What is the central argument of the speech?", type: "lines", lines: 3 },
          { text: "Identify two rhetorical devices used. Give an example of each and explain its effect:", type: "lines", lines: 5 },
          { text: "What made this speech effective for its particular audience and moment?", type: "lines", lines: 3 },
        ],
      },
      // 36
      {
        type: "multiple-choice",
        title: "Proposition Wording and Scope",
        instruction: "Choose the best answer for each question about how propositions shape debates.",
        questions: [
          {
            prompt: "Why does the precise wording of a debate proposition matter?",
            options: [
              "It doesn't — any wording will do",
              "It defines the scope and limits of the debate, affecting what arguments are relevant and what counts as proof",
              "It determines which team speaks first",
              "It is only important to the adjudicator",
            ],
            answer: "It defines the scope and limits of the debate, affecting what arguments are relevant and what counts as proof",
          },
          {
            prompt: "The proposition 'Social media does more harm than good' differs from 'All social media should be banned' in that:",
            options: [
              "They are identical propositions",
              "The first requires weighing overall harm and benefit; the second requires arguing for a specific policy",
              "The first is about young people and the second is about adults",
              "Only the second requires evidence",
            ],
            answer: "The first requires weighing overall harm and benefit; the second requires arguing for a specific policy",
          },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Spontaneous Speaking: Point of Information",
        instruction: "A Point of Information (POI) is a brief interjection offered during a formal debate — a question or statement made while the opposing speaker is still on their feet. Write three effective POIs you could offer in a debate on the proposition 'Australia should introduce a wealth tax on billionaires'.",
        parentTip: "POIs must be brief (15 seconds maximum), relevant, and genuinely challenging. Encourage your student to make POIs that expose a weakness in the other team's logic rather than simply restating their own team's argument.",
        prompts: [
          { text: "POI 1:", type: "lines", lines: 2 },
          { text: "POI 2:", type: "lines", lines: 2 },
          { text: "POI 3:", type: "lines", lines: 2 },
        ],
      },
      // 38
      {
        type: "sorting",
        title: "Debate Preparation Steps",
        instruction: "Put the following debate preparation steps in the most effective order (sort them from first to last).",
        columns: ["Early preparation", "Later preparation"],
        items: [
          { label: "Research the topic from multiple credible sources" },
          { label: "Assign speaking roles within the team" },
          { label: "Prepare arguments for both sides to understand the full scope" },
          { label: "Practise delivering your speech out loud and time it" },
          { label: "Draft your own team's case based on research" },
          { label: "Anticipate and prepare rebuttals for the opposing team's arguments" },
          { label: "Clarify the proposition and define key terms" },
          { label: "Revise and tighten your speech based on practice delivery" },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Five-Minute Debate",
        instruction: "With a partner (parent, sibling, or friend), conduct a simple 5-minute debate on a topic of your choice. Each person speaks for 90 seconds, then each has 60 seconds for rebuttal. After the debate, complete the self-evaluation below.",
        parentTip: "Even a simple 5-minute debate is enormously valuable. Take the opposing side yourself — this models steelmanning, makes the debate genuine, and gives your student the experience of arguing against someone who actually disagrees. After, debrief: what worked? What would you change?",
        prompts: [
          { text: "Topic and your position:", type: "lines", lines: 1 },
          { text: "How did your actual argument compare to your planned argument?", type: "lines", lines: 3 },
          { text: "What was the most effective rebuttal made (by either side)?", type: "lines", lines: 3 },
          { text: "What will you do differently next time?", type: "lines", lines: 3 },
        ],
      },
      // 40
      {
        type: "spark",
        title: "Spark: Argument Is a Gift",
        content: "In many families and cultures, direct disagreement is considered impolite. But the intellectual traditions that have produced democracy, science, and law are all built on the assumption that argument — rigorous, good-faith disagreement — is a gift. When someone argues with you, genuinely and respectfully, they are taking your ideas seriously enough to contest them. The philosopher Karl Popper argued that ideas can only be tested through falsification — through genuine attempts to disprove them. What would it mean to treat every challenge to your ideas as a gift? How would that change how you argue, and how you listen?",
      },
      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Extended Presentation Plan",
        instruction: "Plan a five-minute formal presentation on a topic of genuine interest to you. Your plan should include: a compelling opening, three developed main points each with evidence, a rebuttal section acknowledging the strongest counter-argument, and a strong close.",
        parentTip: "Five minutes is substantially more challenging than three. The main difficulty is maintaining development rather than repetition — making sure each main point genuinely adds something new rather than restating the thesis in different words.",
        prompts: [
          { text: "Topic and thesis:", type: "lines", lines: 2 },
          { text: "Opening (write the exact first sentence):", type: "lines", lines: 2 },
          { text: "Main point 1 + evidence:", type: "lines", lines: 3 },
          { text: "Main point 2 + evidence:", type: "lines", lines: 3 },
          { text: "Main point 3 + evidence:", type: "lines", lines: 3 },
          { text: "Rebuttal (strongest counter-argument + your response):", type: "lines", lines: 3 },
          { text: "Close (write the exact last sentence):", type: "lines", lines: 2 },
        ],
      },
      // 42
      {
        type: "multiple-choice",
        title: "Oral Language in Australian Curriculum Year 9",
        instruction: "Choose the best answer for each question about what the Australian Curriculum expects at Year 9 for formal oral language.",
        questions: [
          {
            prompt: "At Year 9, the Australian Curriculum expects students to engage in formal oral presentations that:",
            options: [
              "Use only informal language and personal anecdote",
              "Present sustained, coherent arguments with evidence, appropriate register, and effective delivery",
              "Are delivered from a fully written script read aloud",
              "Avoid any form of rebuttal or engagement with opposing views",
            ],
            answer: "Present sustained, coherent arguments with evidence, appropriate register, and effective delivery",
          },
          {
            prompt: "Which of the following is an appropriate criterion for assessing a Year 9 formal presentation?",
            options: [
              "Length in number of words",
              "Clarity of argument, use of evidence, effective signposting, and delivery skills",
              "Number of rhetorical devices used",
              "Volume of voice",
            ],
            answer: "Clarity of argument, use of evidence, effective signposting, and delivery skills",
          },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Developing a Case with Evidence",
        instruction: "Choose a significant contemporary issue (e.g. climate change policy, housing affordability, Indigenous land rights, artificial intelligence governance). Write a developed argument (150–200 words) that includes: a clear position statement, three pieces of evidence from credible sources, analysis connecting the evidence to the argument, and a strong concluding sentence.",
        parentTip: "Encourage your student to use specific, current evidence rather than vague generalisations. 'Research shows' is much weaker than 'A 2024 CSIRO report found that...' — specificity signals credibility.",
        prompts: [
          { text: "Your developed argument:", type: "box" },
          {
            text: "How would you respond if an opponent questioned the reliability of one of your sources?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 44
      {
        type: "matching",
        title: "Presentation Evaluation Criteria",
        instruction: "Match each evaluation criterion to the question it asks the assessor to consider.",
        left: [
          "Content and argument",
          "Use of evidence",
          "Delivery",
          "Register and language",
          "Responsiveness",
        ],
        right: [
          "Is the formal language appropriate? Does the speaker avoid slang or colloquialisms?",
          "Does the speaker engage with questions or rebuttal thoughtfully and accurately?",
          "Is the central argument clear, coherent, and well-developed?",
          "Does the speaker use appropriate pace, volume, eye contact, and pausing?",
          "Is the evidence specific, credible, and connected to the argument?",
        ],
      },
      // 45
      {
        type: "tip",
        title: "Tip: The Power of Specificity",
        content: "In both presentations and debate, specific evidence almost always outperforms general claims. Compare: 'Studies show that social media is harmful to teenagers' with 'A longitudinal study published in the Journal of Adolescent Health in 2023, tracking 14,000 Australian teenagers over five years, found that daily social media use exceeding three hours was associated with a 40% increased risk of clinical depression.' The second is twelve times more convincing, because it gives the audience something concrete to think with. When preparing evidence, always ask: can I be more specific about who conducted this study, when, and what exactly they found?",
      },
      // 46
      {
        type: "open-response",
        title: "Responding to Difficult Questions",
        instruction: "Write your responses to the following challenging questions that might be asked after a presentation arguing that 'Australia should adopt a four-day working week'.",
        parentTip: "Question time is where presentations can unravel. Practising responses to adversarial questions is essential preparation. Note the strategy: acknowledge, pivot, respond. Never simply defend — add new information or reframe.",
        prompts: [
          {
            text: "Q: 'But what about service industries like hospitals and retail? You can\u2019t just cut their hours.'",
            type: "lines",
            lines: 4,
          },
          {
            text: "Q: 'You haven\u2019t addressed the economic impact on small businesses. Isn\u2019t this just a policy for big corporations?'",
            type: "lines",
            lines: 4,
          },
          {
            text: "Q: 'Can you name one country where this has actually worked at a national scale?'",
            type: "lines",
            lines: 4,
          },
        ],
      },
      // 47
      {
        type: "sorting",
        title: "Elements of a Persuasive Formal Speech",
        instruction: "Sort each element into 'Essential' (should always be present) or 'Optional' (can strengthen but is not always necessary).",
        columns: ["Essential", "Optional"],
        items: [
          { label: "A clear statement of position" },
          { label: "A personal anecdote" },
          { label: "At least one piece of verifiable evidence" },
          { label: "A quotation from a literary source" },
          { label: "Acknowledgment of the strongest counter-argument" },
          { label: "At least three rhetorical devices" },
          { label: "A compelling opening that earns audience attention" },
          { label: "Visual aids or slides" },
          { label: "A strong, impactful close" },
          { label: "Signposting language throughout" },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Full Debate Speech: First Speaker",
        instruction: "Write a full first speaker's debate speech (200–250 words) for the proposition 'Schools should not assign homework'. Define key terms, state your team's position, and outline three main arguments you will develop. Use formal register and signposting language throughout.",
        parentTip: "Writing out a full speech before delivering it builds confidence and allows the student to check structure and language. The goal is not to memorise it word for word — it is to know the argument thoroughly enough to deliver it naturally from brief notes.",
        prompts: [
          { text: "Your full speech:", type: "box" },
          {
            text: "After writing, identify two places where you could strengthen the argument. What would you add or change?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Evaluating Your Own Formal Speaking",
        instruction: "Mark each statement about self-evaluation of formal speaking as true or false.",
        statements: [
          { text: "'I was nervous' is a useful piece of self-evaluation for improving presentation skills.", answer: false },
          { text: "Specific, actionable feedback ('I need to slow down in the first 30 seconds') is more useful than general feedback ('I need to be more confident').", answer: true },
          { text: "Recording yourself and watching back is a useful tool for identifying specific areas to improve.", answer: true },
          { text: "You should aim for a completely different personality on stage than in everyday life.", answer: false },
          { text: "The most reliable sign of improvement in formal speaking is measurable change in specific behaviours.", answer: true },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Analysing a Debate: Adjudicator's Report",
        instruction: "Watch or listen to a structured debate — either a school debate, a political debate, a parliamentary exchange, or a formal debate on a platform such as Intelligence Squared. Write a brief adjudicator's report (150–200 words) evaluating both sides.",
        parentTip: "Taking the adjudicator's perspective requires synthesising argument quality, evidence use, rebuttal effectiveness, and delivery skills. It is also a useful model for how your student will one day be evaluated. If no live debate is available, use a transcript or video of a formal parliamentary exchange.",
        prompts: [
          { text: "Debate watched:", type: "lines", lines: 1 },
          { text: "Affirmative/one side: strengths and weaknesses:", type: "lines", lines: 4 },
          { text: "Negative/other side: strengths and weaknesses:", type: "lines", lines: 4 },
          { text: "Decision and reasoning (who won and why?):", type: "lines", lines: 3 },
        ],
      },
      // 51
      {
        type: "open-response",
        title: "Delivering a Five-Minute Presentation",
        instruction: "Deliver the five-minute presentation you planned in Activity 41. Deliver it to a real audience (parent, sibling, or friend). Time it. Do not read from a script — use only brief notes. Then complete the self-evaluation below.",
        parentTip: "The single most important thing you can do to improve formal speaking is to actually speak formally, in front of people. One delivered presentation teaches more than ten written plans. After the delivery, give specific and honest feedback — not just reassurance.",
        prompts: [
          { text: "What element of your delivery was strongest?", type: "lines", lines: 3 },
          { text: "What element was most difficult?", type: "lines", lines: 3 },
          { text: "What will you specifically change in your next presentation?", type: "lines", lines: 3 },
        ],
      },
      // 52
      {
        type: "multiple-choice",
        title: "Parliamentary Debate and Formal Debate Formats",
        instruction: "Choose the best answer for each question.",
        questions: [
          {
            prompt: "In Australian parliamentary style debate, the speaking order is typically:",
            options: [
              "Affirmative 1, Affirmative 2, Affirmative 3, then Negative 1, 2, 3",
              "Affirmative 1, Negative 1, Affirmative 2, Negative 2, Affirmative 3, Negative 3",
              "Negative 1, Affirmative 1, Negative 2, Affirmative 2",
              "Adjudicator opens, then both teams simultaneously",
            ],
            answer: "Affirmative 1, Negative 1, Affirmative 2, Negative 2, Affirmative 3, Negative 3",
          },
          {
            prompt: "What is the Oxford-style debate format?",
            options: [
              "A debate with no time limits",
              "A debate where the audience votes before and after, and the result is determined by which side gained more votes",
              "A debate with only two speakers per side",
              "A debate on literature and philosophy only",
            ],
            answer: "A debate where the audience votes before and after, and the result is determined by which side gained more votes",
          },
        ],
      },
      // 53
      {
        type: "fill-in-blank",
        title: "Effective Closings",
        instruction: "Fill in the blank with language that would create a powerful closing for each presentation type.",
        sentences: [
          { text: "A closing that returns to the opening: 'I began by asking you to consider... I hope I have convinced you that...'  This technique is called a _______ structure.", blanks: ["circular / bookend"] },
          { text: "A call to action close says: 'The question is not whether this matters. The question is what _______ will do about it.'", blanks: ["we / you"] },
          { text: "A closing that ends with a memorable image or statement is called a _______.", blanks: ["clincher / kicker / punchline"] },
          { text: "The final word or phrase of a speech often carries the most _______, so choose it carefully.", blanks: ["weight / impact / emphasis"] },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Debate Preparation: Full Case",
        instruction: "Prepare a full team case for one side of the following debate: 'Australia should ban single-use plastics entirely.' Include: definition of terms, team line (overall argument that all speakers will reinforce), three main arguments with evidence, anticipated oppositions and rebuttals.",
        parentTip: "A team case should have a team line — a single, memorable statement that captures the whole team's position. All three speakers reinforce this line in different ways. This creates coherence and is much more persuasive than three speakers making three unrelated arguments.",
        prompts: [
          { text: "Your side:", type: "lines", lines: 1 },
          { text: "Definition of key terms:", type: "lines", lines: 2 },
          { text: "Team line (one memorable sentence capturing your team\u2019s core position):", type: "lines", lines: 2 },
          { text: "Argument 1 + evidence:", type: "lines", lines: 3 },
          { text: "Argument 2 + evidence:", type: "lines", lines: 3 },
          { text: "Argument 3 + evidence:", type: "lines", lines: 3 },
          { text: "Anticipated opposition + prepared rebuttal:", type: "lines", lines: 4 },
        ],
      },
      // 55
      {
        type: "true-false",
        title: "Debate Ethics and Intellectual Honesty",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "It is acceptable in debate to cite fabricated statistics if they support your argument.", answer: false },
          { text: "Conceding a point strengthens credibility if done with skill.", answer: true },
          { text: "Deliberately misrepresenting your opponent's argument to make it easier to rebut is considered poor debate practice.", answer: true },
          { text: "The goal of debate is to win at any cost, including using misleading arguments.", answer: false },
          { text: "Good faith debate requires genuine engagement with the strongest version of opposing arguments.", answer: true },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Listening and Note-Taking During a Debate",
        instruction: "During a debate (live or recorded), practise taking systematic notes on both sides. Use the structure below to record arguments as they are made — this simulates what a skilled debater does while the other team speaks.",
        parentTip: "Effective note-taking during debate is a skill in itself. Debaters use shorthand and symbols to capture the other team's arguments quickly enough to respond. Encourage your student to focus on capturing the structure of the argument (point + evidence) rather than writing every word.",
        prompts: [
          { text: "Affirmative arguments (point + evidence for each):", type: "lines", lines: 5 },
          { text: "Negative arguments (point + evidence for each):", type: "lines", lines: 5 },
          { text: "Which argument from either side did you find most compelling? Why?", type: "lines", lines: 3 },
          { text: "What rebuttal could have been made that wasn\u2019t?", type: "lines", lines: 3 },
        ],
      },
      // 57
      {
        type: "multiple-choice",
        title: "Audience and Context in Formal Speaking",
        instruction: "Choose the best answer for each question.",
        questions: [
          {
            prompt: "How does the composition of an audience affect a formal presentation?",
            options: [
              "It doesn't — a good presentation is good for any audience",
              "It affects what background knowledge can be assumed, what examples will resonate, and what level of formality is appropriate",
              "It only affects the length of the presentation",
              "It determines whether the speaker uses notes or not",
            ],
            answer: "It affects what background knowledge can be assumed, what examples will resonate, and what level of formality is appropriate",
          },
          {
            prompt: "What is the most important thing to consider when adapting a presentation for a younger audience?",
            options: [
              "Using more jokes",
              "Speaking more slowly",
              "Assuming less background knowledge and using more concrete examples and accessible language",
              "Making it shorter",
            ],
            answer: "Assuming less background knowledge and using more concrete examples and accessible language",
          },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Adapting a Speech for a Different Audience",
        instruction: "Take your presentation plan from Activity 41 and adapt it for a younger audience (e.g. Year 6 students). Rewrite the opening and one main point using more accessible language, simpler examples, and more concrete evidence.",
        parentTip: "Adapting register for different audiences is a sophisticated communication skill. The content may be the same, but the vocabulary, examples, and assumed knowledge must shift. A student who can explain a complex idea to a younger child understands it more deeply themselves.",
        prompts: [
          { text: "Adapted opening:", type: "lines", lines: 3 },
          { text: "Adapted main point 1:", type: "lines", lines: 5 },
          { text: "What did you change and why?", type: "lines", lines: 3 },
        ],
      },
      // 59
      {
        type: "circle-correct",
        title: "Strong or Weak: Debate Moments",
        instruction: "For each debate moment, circle whether it is a strong or weak choice.",
        questions: [
          {
            prompt: "First speaker spends 90 seconds defining terms precisely, so the debate has clear parameters.",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "Third speaker introduces a brand-new argument never raised by first or second speaker.",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "Second speaker says: 'The opposing team claimed that all teenagers are harmed by social media. This is not what the research shows — and our opponents know it.'",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "Speaker says: 'I acknowledge that the evidence my opponents cited is genuine. However, it measures short-term effects only, and the long-term data tells a different story.'",
            options: ["Strong", "Weak"],
          },
          {
            prompt: "Speaker says: 'Anyone who disagrees with us obviously doesn\u2019t care about the environment.'",
            options: ["Strong", "Weak"],
          },
        ],
      },
      // 60
      {
        type: "spark",
        title: "Spark: What Do You Actually Believe?",
        content: "Formal debate often requires arguing a position assigned to you, not one you chose. But there is a more fundamental question underneath: what do you actually believe, and can you defend it? The philosopher Socrates spent his life asking people what they believed and why — and most of them, on examination, could not give a coherent account. The Socratic method is not about being right; it is about thinking carefully. Pick one strong belief you hold — about education, the environment, technology, society — and try to answer these questions: Why do I believe this? What would change my mind? What is the strongest argument against it?",
      },
      // ── EXTENDING 81–100 ──────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Parliamentary-Style Debate: Full Preparation",
        instruction: "Prepare for a full Parliamentary-style debate on the proposition: 'The voting age in Australia should be lowered to 16.' Prepare as if you are first speaker for the Affirmative. Write a full 3-minute speech (approximately 400 words).",
        parentTip: "A 3-minute speech at normal speaking pace is approximately 400–450 words. If your student writes more than 500 words, they will need to speak faster than is ideal. This is a useful exercise in calibrating word count to delivery time.",
        prompts: [
          { text: "Your full 3-minute speech:", type: "box" },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Cross-Examination: Questions and Responses",
        instruction: "In some debate formats (e.g. British Parliamentary), speakers can be questioned briefly after their speech. Write three challenging cross-examination questions you would ask the Negative team after they argued against lowering the voting age to 16. Then write how you would respond to them if they were asked of you.",
        parentTip: "Cross-examination questions should expose a weakness or inconsistency in the opposition's argument. They should be precise and specific — a vague question is easy to dodge. The best questions are those where any answer helps your case.",
        prompts: [
          { text: "Cross-examination Q1 (you would ask this):", type: "lines", lines: 2 },
          { text: "If asked of you, your response to Q1:", type: "lines", lines: 3 },
          { text: "Cross-examination Q2:", type: "lines", lines: 2 },
          { text: "Your response:", type: "lines", lines: 3 },
          { text: "Cross-examination Q3:", type: "lines", lines: 2 },
          { text: "Your response:", type: "lines", lines: 3 },
        ],
      },
      // 63
      {
        type: "matching",
        title: "Debate Vocabulary: Advanced Terms",
        instruction: "Match each advanced debate term to its definition.",
        left: [
          "Burden of proof",
          "Status quo",
          "Definitional challenge",
          "Whip speech",
          "Matter, manner, method",
        ],
        right: [
          "The three criteria often used by adjudicators to assess debate speeches",
          "The obligation to prove a claim — generally rests with the Affirmative team",
          "A final summary speech that draws together the team's case and rebuts the opposition",
          "The existing state of affairs, which the Affirmative typically argues should be changed",
          "When the Negative team contests the Affirmative's definition of key terms",
        ],
      },
      // 64
      {
        type: "fill-in-blank",
        title: "Extended Argument Structures",
        instruction: "Fill in the blank to complete each description of an argument structure.",
        sentences: [
          { text: "In the PEEL structure, P stands for Point, E for Evidence, E for _______, and L for Link.", blanks: ["Explain / Elaboration"] },
          { text: "A _______ argument uses a side-by-side comparison of two things to show that one is better than the other.", blanks: ["comparative"] },
          { text: "An argument from _______ shows that if the proposition is not adopted, negative consequences will follow.", blanks: ["consequence / harm"] },
          { text: "An argument from _______ shows that the proposition produces a measurable improvement.", blanks: ["benefit / principle / value"] },
          { text: "The 'clash' in debate refers to the direct _______ between the core arguments of each team.", blanks: ["conflict / tension / engagement"] },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Oral Submission: A Local Issue",
        instruction: "Write a 3-minute oral submission (approximately 400 words) to an imagined local government committee on an issue that matters in your community. Structure it formally: state your name and interest, present your position with evidence, and make a specific recommendation.",
        parentTip: "The oral submission is a real-world application of formal speaking. Young people can genuinely submit to local government, school boards, or community consultations. This activity prepares students for civic participation, which is a genuine purpose of literacy education.",
        prompts: [
          { text: "Your issue and recommendation:", type: "lines", lines: 2 },
          { text: "Your oral submission:", type: "box" },
        ],
      },
      // 66
      {
        type: "multiple-choice",
        title: "Ethics of Persuasion",
        instruction: "Choose the best answer for each question about the ethical dimensions of persuasive speaking.",
        questions: [
          {
            prompt: "What distinguishes legitimate persuasion from manipulation?",
            options: [
              "Legitimate persuasion uses emotion; manipulation uses logic",
              "Legitimate persuasion provides accurate information and sound reasoning; manipulation exploits biases, fears, or uses false information",
              "They are the same — all persuasion is manipulation",
              "Manipulation is faster, so it is preferred in debate",
            ],
            answer: "Legitimate persuasion provides accurate information and sound reasoning; manipulation exploits biases, fears, or uses false information",
          },
          {
            prompt: "A speaker who deliberately uses misleading statistics to win a debate is:",
            options: [
              "Using a legitimate debate strategy",
              "Acting unethically and undermining the integrity of the debate",
              "Simply being competitive",
              "Technically allowed if the opponent doesn't notice",
            ],
            answer: "Acting unethically and undermining the integrity of the debate",
          },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Impromptu Speaking",
        instruction: "Impromptu speaking — speaking on a topic with little or no preparation — is a critical skill. Choose one of the following topics and deliver a 90-second impromptu speech (to a parent, sibling, or recorded). Topics: 'The most important thing I have learned this year', 'What schools should teach that they don't', 'The value of disagreement'.",
        parentTip: "For impromptu speaking, suggest this structure: 1. State your position. 2. Give one example or piece of evidence. 3. Explain why it matters. 4. Return to your opening. This gives any 90-second speech a shape. Practise this formula until it becomes automatic.",
        prompts: [
          { text: "Your topic:", type: "lines", lines: 1 },
          { text: "Brief notes (30 seconds to jot these before speaking):", type: "lines", lines: 3 },
          { text: "Self-evaluation after delivery:", type: "lines", lines: 4 },
        ],
      },
      // 68
      {
        type: "sorting",
        title: "What Makes a Debate Speech Excellent?",
        instruction: "Sort each quality into 'Excellent' (consistently seen in the best debate speeches) or 'Adequate' (present in competent but not excellent speeches).",
        columns: ["Excellent", "Adequate"],
        items: [
          { label: "Clear team line that is reinforced across all three speakers" },
          { label: "Arguments are present and organised" },
          { label: "Evidence is highly specific, sourced, and contextualised" },
          { label: "Evidence is present but vague" },
          { label: "Rebuttal directly engages with the strongest opposition argument" },
          { label: "Rebuttal says 'the other team is wrong'" },
          { label: "Delivery is confident, varied, and commands the room" },
          { label: "Delivery is clear and audible" },
          { label: "Concedes strategically, turning the concession to the team's advantage" },
          { label: "Signposting language is present" },
        ],
      },
      // 69
      {
        type: "open-response",
        title: "A Persuasive Speech on a Value",
        instruction: "Write a persuasive speech (300–400 words) arguing for the importance of a core value — e.g. honesty, courage, compassion, intellectual humility, persistence. This speech should be passionate and personal, using both personal example and broader argument. It is not a debate; it is advocacy.",
        parentTip: "Advocacy differs from debate — it is not adversarial but passionate assertion of what matters. Speeches by figures like Malala Yousafzai, Noel Pearson, or Martin Luther King demonstrate this form. They blend personal testimony, historical evidence, and moral argument.",
        prompts: [
          { text: "Your value:", type: "lines", lines: 1 },
          { text: "Your speech:", type: "box" },
        ],
      },
      // 70
      {
        type: "multiple-choice",
        title: "Listening and Critical Engagement",
        instruction: "Choose the best answer for each question about listening skills in formal speaking contexts.",
        questions: [
          {
            prompt: "What does 'active listening' mean in a formal debate context?",
            options: [
              "Listening while doing something else at the same time",
              "Nodding to show agreement",
              "Carefully tracking the argument being made, noting its structure and evidence, and identifying points to address in rebuttal",
              "Waiting politely for your turn to speak",
            ],
            answer: "Carefully tracking the argument being made, noting its structure and evidence, and identifying points to address in rebuttal",
          },
          {
            prompt: "A speaker who listens carefully to the opposition and responds to their actual arguments (rather than anticipated arguments) demonstrates:",
            options: [
              "Weakness — they are following the opposition's lead",
              "Intellectual rigour and good faith — they are genuinely engaging rather than delivering a rehearsed performance",
              "Poor preparation",
              "Lack of confidence in their own argument",
            ],
            answer: "Intellectual rigour and good faith — they are genuinely engaging rather than delivering a rehearsed performance",
          },
        ],
      },
      // 71
      {
        type: "fill-in-blank",
        title: "Famous Australian Speeches: Key Terms",
        instruction: "Fill in the blank with the correct word or phrase.",
        sentences: [
          { text: "Paul Keating's 1992 Redfern Speech acknowledged that it was _______ who had brought the diseases, the alcohol, and the despair to Aboriginal people.", blanks: ["we / non-Aboriginal Australians / Europeans"] },
          { text: "Gough Whitlam's famous 1972 campaign speech used the phrase 'It\u2019s _______ for Australia' to signal the need for change.", blanks: ["Time"] },
          { text: "Lowitja O\u2019Donoghue, delivering the 2000 Reconciliation Convention opening speech, called for an acknowledgment of _______ as the foundation of reconciliation.", blanks: ["truth / history / the past"] },
          { text: "The Apology speech by Prime Minister Kevin Rudd in 2008 formally apologised to the _______ and their families for the policies of forced separation.", blanks: ["Stolen Generations"] },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Presenting Complex Ideas Accessibly",
        instruction: "Choose a complex idea or concept from a subject you are studying (it need not be English). Write and deliver a 2-minute explanation of this idea to a non-specialist audience (your parent or sibling) using no jargon. Use analogies, examples, and plain language.",
        parentTip: "The ability to explain complex ideas simply and clearly is one of the highest intellectual skills. Einstein reportedly said that if you can\u2019t explain it simply, you don\u2019t understand it well enough. This exercise tests depth of understanding as much as speaking skill.",
        prompts: [
          { text: "Your complex idea:", type: "lines", lines: 1 },
          { text: "Key analogies or examples you used:", type: "lines", lines: 3 },
          { text: "Did your audience understand it? What confused them, if anything?", type: "lines", lines: 3 },
        ],
      },
      // 73
      {
        type: "circle-correct",
        title: "Evaluating a Presentation: Checklist",
        instruction: "Evaluate a presentation you have given or observed by circling Yes or No for each criterion.",
        questions: [
          {
            prompt: "Did the presentation begin with something that earned the audience's attention (not 'Today I will talk about...')?",
            options: ["Yes", "No"],
          },
          {
            prompt: "Were all main points clearly supported by specific evidence?",
            options: ["Yes", "No"],
          },
          {
            prompt: "Was the strongest opposing argument acknowledged and rebutted?",
            options: ["Yes", "No"],
          },
          {
            prompt: "Did the presentation use signposting language to guide the audience through the structure?",
            options: ["Yes", "No"],
          },
          {
            prompt: "Did the closing land with impact — returning to the opening or ending with a memorable line?",
            options: ["Yes", "No"],
          },
          {
            prompt: "Was the delivery clear, varied in pace and volume, and making appropriate eye contact?",
            options: ["Yes", "No"],
          },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Structured Academic Controversy",
        instruction: "Structured Academic Controversy (SAC) is a cooperative learning strategy where two pairs work on the same topic: Pair A argues one position, then Pair B argues the opposite, then both pairs work together to find the most defensible position. Simulate this individually: argue both sides of the proposition 'Australia should introduce a national curriculum for all schools', then write your own synthesised, balanced position.",
        parentTip: "SAC is designed to separate the discipline of argumentation from personal conviction — students practise making the strongest possible case regardless of what they believe. The synthesis stage is the most intellectually demanding: finding a position that accounts for the best arguments on both sides.",
        prompts: [
          { text: "Affirmative case (200 words):", type: "box" },
          { text: "Negative case (200 words):", type: "box" },
          { text: "Synthesised position (100 words):", type: "box" },
        ],
      },
      // 75
      {
        type: "tip",
        title: "Tip: Your Voice Is an Instrument",
        content: "Your voice is the primary instrument of formal speaking — and like any instrument, it can be developed, tuned, and played with greater skill through practice. Three areas to focus on: resonance (project from your chest, not your throat — this creates a fuller, more commanding sound); articulation (open your mouth fully, especially on vowels); and variation (change your pitch, pace, and volume deliberately rather than letting them flatten). Record yourself delivering one minute of speech, listen back, and identify which of these three areas needs most work. Then practise that area deliberately for five minutes. Repeat weekly.",
      },
      // 76
      {
        type: "open-response",
        title: "The Humane Disagreement: Responding to Personal Attacks",
        instruction: "In real debates and public life, speakers sometimes make personal attacks or use inflammatory language. Write three model responses that address the substance of an argument without responding to the personal attack itself — demonstrating intellectual maturity and redirecting to the evidence.",
        parentTip: "Responding to personal attacks calmly, with intellectual focus on the argument rather than the attack, is a mark of significant maturity. This skill is increasingly valuable in public life, where much public discourse has become ad hominem. Model this yourself in family discussions.",
        prompts: [
          {
            text: "Attack: 'You\u2019re just saying that because you\u2019re young and naive.' Your response:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Attack: 'Anyone who argues for that position is clearly biased.' Your response:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Attack: 'I can\u2019t take this argument seriously.' Your response:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 77
      {
        type: "true-false",
        title: "Formal Speaking: Year 9 Final Review",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "The Australian Curriculum expects Year 9 students to engage with structured argument, evidence, and formal register in oral presentations.", answer: true },
          { text: "A great debate speaker wins by being the most aggressive and confrontational speaker.", answer: false },
          { text: "Adapting your presentation for a specific audience is a mark of skill, not compromise.", answer: true },
          { text: "The purpose of rebuttal is to destroy your opponent's reputation.", answer: false },
          { text: "Impromptu speaking is a skill that can be developed through regular practice.", answer: true },
          { text: "Steelmanning strengthens a debater's overall argument by demonstrating engagement with the best opposing case.", answer: true },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Written Reflection on Your Development as a Formal Speaker",
        instruction: "Write a reflective essay (200–300 words) on your development as a formal speaker across this worksheet. What has changed in how you think about formal speaking? What specific skills have you developed? What is your most significant area for continued growth?",
        parentTip: "Metacognitive reflection on skill development is a powerful learning tool. It is also a common task in senior school and university portfolios — developing the habit now is valuable. Encourage specificity over vague self-praise.",
        prompts: [
          { text: "Your reflective essay:", type: "box" },
        ],
      },
      // 79
      {
        type: "multiple-choice",
        title: "Connecting Oral and Written Argument",
        instruction: "Choose the best answer for each question about the relationship between formal speaking and analytical writing.",
        questions: [
          {
            prompt: "How are formal spoken argument and formal analytical writing similar?",
            options: [
              "They are identical and can be used interchangeably",
              "Both require clear structure, evidence, and engagement with opposing views",
              "Both require the same length and format",
              "Neither requires evidence or rebuttal",
            ],
            answer: "Both require clear structure, evidence, and engagement with opposing views",
          },
          {
            prompt: "How does preparing a formal presentation improve written analytical essays?",
            options: [
              "It doesn't — speaking and writing use completely different skills",
              "It forces the student to organise their argument for a live audience, which develops clarity and structure that transfers to writing",
              "It trains the student to write quickly",
              "It helps with spelling and grammar",
            ],
            answer: "It forces the student to organise their argument for a live audience, which develops clarity and structure that transfers to writing",
          },
        ],
      },
      // 80
      {
        type: "spark",
        title: "Spark: Speaking Up",
        content: "There is a difference between having views and being able to express them clearly, fairly, and persuasively in a public or formal setting. The skills in this worksheet — argumentation, evidence, rebuttal, formal register, listening, steelmanning — are not just academic skills. They are civic skills. They are the skills of democratic participation: what you need to engage in community meetings, advocate for a cause, challenge a decision, or simply make your case to someone who disagrees with you. Every time you practise speaking formally and arguing well, you are preparing to participate fully in the life of your community. Use that capacity.",
      },
      // 81
      {
        type: "home-activity",
        title: "Beyond the Worksheet: Speaking and Debate in the World",
        instruction: "Choose one or more of the following activities to extend your formal speaking and debate skills beyond this worksheet.",
        parentTip: "Formal speaking skills develop through practice with real audiences and real stakes. Even informal practice at home — regular structured discussions, watching and analysing speeches, attending a community event — builds the skills and confidence that worksheets alone cannot provide.",
        suggestions: [
          "Watch a full parliamentary question time (available on the Australian Parliament House website or YouTube). Identify three debate techniques used by speakers on either side.",
          "Join or start a debating club or speaking group — local youth groups, Rostrum (a public speaking organisation with youth programs), or online communities.",
          "Watch three TED or TEDx talks on topics that interest you. For each, identify: the central argument, the evidence used, and one delivery technique you could adopt.",
          "Attend a local council meeting, school board meeting, or community forum. Observe how formal public speaking is used in real civic contexts.",
          "Challenge yourself to make one formal point per week in a family discussion — structure it as a proper argument with evidence, not just an opinion. Track how your family responds.",
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Final Debate: Full Participation",
        instruction: "Participate in a full structured debate with a family member or friend on a topic of your choice. Each speaker has 3 minutes for their main speech and 90 seconds for rebuttal. An observer (if available) acts as adjudicator. Complete the evaluation below after.",
        parentTip: "A full structured debate, even between two people, is the capstone activity for this worksheet. Take it seriously: maintain formal register, time the speeches, and give genuine adjudication feedback afterward. If you can, record it for self-review.",
        prompts: [
          { text: "Topic and your position:", type: "lines", lines: 1 },
          { text: "Key arguments you made:", type: "lines", lines: 4 },
          { text: "Most effective rebuttal you made:", type: "lines", lines: 3 },
          { text: "One argument you wish you had made better — and how:", type: "lines", lines: 3 },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Adjudicator's Report on Your Own Debate",
        instruction: "Write an adjudicator's report (150 words) on the debate you participated in during Activity 82. Evaluate both sides as if you were an independent assessor — acknowledge strengths and weaknesses on both sides, and explain your decision.",
        parentTip: "Writing an adjudicator's report on your own debate requires stepping outside your own perspective — a genuinely difficult and valuable intellectual exercise. The willingness to identify your own weaknesses and the opposition's strengths honestly is a mark of intellectual maturity.",
        prompts: [
          { text: "Your adjudicator's report:", type: "box" },
        ],
      },
      // 84
      {
        type: "fill-in-blank",
        title: "Formal Speaking: Final Vocabulary Review",
        instruction: "Fill in the blank with the correct term.",
        sentences: [
          { text: "The _______ team argues for the proposition; the _______ team argues against it.", blanks: ["Affirmative", "Negative"] },
          { text: "A deliberate _______ — a brief pause — before a key point creates emphasis and attention.", blanks: ["pause"] },
          { text: "Acknowledging a valid point made by the opposition before explaining why it does not undermine your position is called _______.", blanks: ["concession / graceful concession"] },
          { text: "Ethos, pathos, and logos are the three appeals identified by the ancient Greek philosopher _______.", blanks: ["Aristotle"] },
          { text: "The technique of engaging with the strongest possible version of the opposing argument is called _______.", blanks: ["steelmanning"] },
        ],
      },
      // 85
      {
        type: "true-false",
        title: "Ultimate Review: Formal Presentations and Debate",
        instruction: "Mark each statement as true or false — a final review of all key concepts.",
        statements: [
          { text: "Ethos refers to an appeal to the audience's emotions.", answer: false },
          { text: "A straw man fallacy involves misrepresenting an opponent's argument to make it easier to attack.", answer: true },
          { text: "The burden of proof in a debate typically rests with the Affirmative team.", answer: true },
          { text: "Eye contact with only one member of the audience is effective presentation technique.", answer: false },
          { text: "Reading directly from a script for an entire presentation is ideal delivery practice.", answer: false },
          { text: "Matter, manner, and method are the three criteria often used in debate adjudication.", answer: true },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "A Speech for a Real Occasion",
        instruction: "Identify a real occasion coming up in your life where you could deliver a short speech — a family event, a community gathering, a farewell, a celebration, or a formal school occasion. Write and practise a 2-minute speech for that occasion. Deliver it when the occasion comes.",
        parentTip: "The most powerful learning happens when skills are applied in real contexts. If there is any opportunity for your student to deliver a speech to a real audience — at a family gathering, at a local event, in a home-school group — encourage and support that. Real audiences teach more than any worksheet can.",
        prompts: [
          { text: "The occasion and audience:", type: "lines", lines: 2 },
          { text: "Your 2-minute speech:", type: "box" },
        ],
      },
      // 87
      {
        type: "matching",
        title: "Connecting Debate Skills to Real-World Contexts",
        instruction: "Match each formal speaking skill to the real-world context where it is most directly applied.",
        left: [
          "Rebuttal",
          "Concession",
          "Signposting",
          "Evidence with sources",
          "Formal register",
        ],
        right: [
          "Academic research presentations, journalism, and scientific communication",
          "Legal cross-examination, mediation, and negotiation",
          "Job interviews, formal meetings, and professional communication",
          "Mediation, negotiation, and conflict resolution",
          "Teaching, guided tours, and any long public explanation",
        ],
      },
      // 88
      {
        type: "circle-correct",
        title: "Debate Propositions: Appropriate or Not?",
        instruction: "For each debate proposition, circle whether it is appropriately worded for formal debate (clear, arguable, balanced) or needs revision.",
        questions: [
          {
            prompt: "'Australia should introduce a sugar tax on sweetened beverages.'",
            options: ["Appropriately worded", "Needs revision"],
          },
          {
            prompt: "'Dogs are obviously better than cats and everyone knows it.'",
            options: ["Appropriately worded", "Needs revision"],
          },
          {
            prompt: "'The Australian government should increase funding for renewable energy research.'",
            options: ["Appropriately worded", "Needs revision"],
          },
          {
            prompt: "'It is totally wrong to eat meat and anyone who does is bad.'",
            options: ["Appropriately worded", "Needs revision"],
          },
          {
            prompt: "'Australia should adopt an indigenous Voice to Parliament as a constitutional body.'",
            options: ["Appropriately worded", "Needs revision"],
          },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Goal-Setting: My Next Steps as a Formal Speaker",
        instruction: "Write a personal plan (150 words) for your continued development as a formal speaker over the next three months. Include: three specific skills you will practise, how you will practise them, and how you will know if you have improved.",
        parentTip: "Specific, time-bound goals are far more effective than vague intentions. Help your student identify one specific skill to focus on first — something concrete and measurable. 'I will maintain eye contact with the audience for at least 70% of a 2-minute speech' is more useful than 'I will get better at presentations.'",
        prompts: [
          { text: "Your personal development plan:", type: "box" },
        ],
      },
      // 90
      {
        type: "tip",
        title: "Tip: Every Conversation Is Practice",
        content: "Formal speaking does not only develop in formal settings. Every conversation is an opportunity to practise the underlying skills: listening carefully, structuring your response, providing evidence for your claims, acknowledging the other person's point before disagreeing, choosing your words deliberately. The most skilled formal speakers are people who bring the habits of mind of good speaking — clarity, precision, good faith, preparation — to every conversation they have. The worksheet is a structure for learning; conversation is where the skills live.",
      },
      // 91
      {
        type: "open-response",
        title: "Comparative Analysis: Two Speeches",
        instruction: "Choose two speeches on related topics from different contexts (e.g. Keating's Redfern Speech and Rudd's Apology; Thunberg's UN speech and a speech by an Australian environment minister). Write a comparative analysis (200–250 words) examining how each speaker constructs their argument and uses delivery to serve their purpose.",
        parentTip: "Comparative analysis of speeches is excellent preparation for senior English essay tasks, which frequently require comparison of texts. Encourage your student to go beyond surface features (both use rhetorical questions) to deeper analysis (what work does the rhetorical question do in each context?).",
        prompts: [
          { text: "Speech 1:", type: "lines", lines: 1 },
          { text: "Speech 2:", type: "lines", lines: 1 },
          { text: "Your comparative analysis:", type: "box" },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Formal Speaking Across Cultures",
        instruction: "Norms for formal speaking vary significantly across cultures. Research or reflect on how formal public speaking works in one non-Western cultural context (e.g. Indigenous Australian oratory, formal Japanese speech, West African griot tradition, Indigenous Pacific speaking traditions). Write 150–200 words on what this reveals about the cultural assumptions underlying Western formal debate conventions.",
        parentTip: "This activity develops cultural awareness alongside communication skills. The assumptions built into Western formal debate — adversarial structure, the primacy of logic over relationship, direct assertion over indirection — are not universal. Understanding this makes students more adaptable and respectful communicators.",
        prompts: [
          { text: "Your cultural context:", type: "lines", lines: 1 },
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 93
      {
        type: "fill-in-blank",
        title: "Formal Speaking: Connecting to the Curriculum",
        instruction: "Fill in the blank to complete each statement about formal speaking in the Australian Curriculum.",
        sentences: [
          { text: "At Year 9, students are expected to analyse and evaluate the _______ and _______ of spoken texts, including presentations and debates.", blanks: ["language", "structure / content"] },
          { text: "The Australian Curriculum identifies _______ as a core element of oral language, requiring students to engage with ideas, evidence, and opposing views.", blanks: ["argumentation / critical thinking"] },
          { text: "Formal presentations at Year 9 should demonstrate _______ register and appropriate language for the specific audience and purpose.", blanks: ["formal"] },
          { text: "The ability to listen critically, identify _______, and respond to the content of spoken texts is a key Year 9 literacy skill.", blanks: ["argument / structure / main ideas"] },
        ],
      },
      // 94
      {
        type: "multiple-choice",
        title: "Formal Speaking in Higher Education and Work",
        instruction: "Choose the best answer for each question about why formal speaking skills matter beyond school.",
        questions: [
          {
            prompt: "Which of the following is the most important formal speaking skill for success in university seminars?",
            options: [
              "The ability to speak loudly",
              "The ability to articulate a well-structured argument, engage with others' views, and respond thoughtfully to challenge",
              "The ability to memorise facts",
              "The ability to speak without preparation",
            ],
            answer: "The ability to articulate a well-structured argument, engage with others' views, and respond thoughtfully to challenge",
          },
          {
            prompt: "In the workplace, formal speaking skills are most directly relevant when:",
            options: [
              "Sending emails",
              "Writing reports",
              "Presenting proposals, leading meetings, negotiating, and making cases to stakeholders",
              "Completing administrative tasks",
            ],
            answer: "Presenting proposals, leading meetings, negotiating, and making cases to stakeholders",
          },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Final Self-Assessment: Formal Speaking",
        instruction: "Complete a final self-assessment of your formal speaking and debate skills at the end of this worksheet. Rate yourself on each skill (1 = developing, 2 = competent, 3 = strong), and write a specific example to justify each rating.",
        parentTip: "Honest self-assessment is a metacognitive skill that improves with practice. Help your student be specific rather than globally positive or negative — 'I am a 3 in structuring arguments because I can reliably use signposting language' is far more useful than 'I think I\u2019m okay at this.'",
        prompts: [
          { text: "Structuring a formal argument (1–3) and why:", type: "lines", lines: 2 },
          { text: "Using evidence effectively (1–3) and why:", type: "lines", lines: 2 },
          { text: "Rebuttal and engaging with opposing views (1–3) and why:", type: "lines", lines: 2 },
          { text: "Formal register and language (1–3) and why:", type: "lines", lines: 2 },
          { text: "Delivery skills (1–3) and why:", type: "lines", lines: 2 },
          { text: "Your single most important next goal:", type: "lines", lines: 2 },
        ],
      },
      // 96
      {
        type: "home-activity",
        title: "Debate at Home: Family Forum",
        instruction: "Host a regular 'family forum' — a short structured discussion on a topic of family interest. Each person has 2 minutes to speak (uninterrupted), then open discussion. Topics could include: screen time rules, family decisions, current events, or a question from a book you are reading together.",
        parentTip: "A regular family forum serves multiple purposes: it practises formal speaking in a low-stakes setting, models intellectual respect for disagreement, and builds the habit of structured discussion. Rotate who introduces the topic. Over time, raise the bar: require evidence, challenge generalisations, model graceful concession.",
        suggestions: [
          "Choose a topic together once a week — let everyone have a say in the topic.",
          "Set a two-minute timer for each speaker and stick to it.",
          "At the end, summarise: what were the strongest arguments? Did anyone change their view?",
          "Try arguing for the position you disagree with once a month — steelmanning at home.",
          "After three months, reflect: has your family's quality of discussion improved?",
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Portfolio: Showcase Presentation",
        instruction: "Prepare and deliver a 4-minute showcase presentation on a topic you have researched deeply and care about. This is your best work — bring everything together: a compelling opening, developed arguments with specific evidence, rebuttal, rhetorical devices, and a strong close. If possible, record it.",
        parentTip: "The showcase presentation is the culminating performance task for this worksheet. It should feel like a genuine occasion — set up the room, have your student dress formally if they wish, and give your full attention as audience. Provide genuine, specific feedback afterward. This is the kind of experience that builds real confidence.",
        prompts: [
          { text: "Your topic and thesis:", type: "lines", lines: 2 },
          { text: "Brief planning notes:", type: "lines", lines: 5 },
          { text: "Self-evaluation after delivery:", type: "lines", lines: 5 },
        ],
      },
      // 98
      {
        type: "true-false",
        title: "Final Review: Formal Presentations and Debate",
        instruction: "A final review of key concepts. Mark each statement as true or false.",
        statements: [
          { text: "The ability to argue a position you do not personally hold is an intellectual skill, not dishonesty.", answer: true },
          { text: "A debate is won primarily by speaking for longer than the other side.", answer: false },
          { text: "Formal spoken English and everyday conversation use identical language and structure.", answer: false },
          { text: "Specific, sourced evidence is more persuasive than vague general claims.", answer: true },
          { text: "The purpose of formal debate as a school activity is purely competitive.", answer: false },
          { text: "Formal speaking skills have direct applications in university, civic participation, and professional life.", answer: true },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Your Speaking Identity",
        instruction: "Write a short reflective statement (100–150 words) on your identity as a speaker. What kind of speaker are you becoming? What do you sound like at your best? What makes your formal voice distinctive? This is a statement of who you are — and who you are becoming — as a communicator.",
        parentTip: "Identity as a communicator is worth thinking about and naming. Students who have a clear sense of their own communicative strengths — their particular clarity, their warmth, their precision, their passion — develop confidence faster than those who compare themselves to an abstract ideal. Help your student see their genuine strengths.",
        prompts: [
          { text: "Your speaking identity statement:", type: "box" },
        ],
      },
      // 100
      {
        type: "spark",
        title: "Spark: Your Voice in the World",
        content: "Every generation needs people who can speak clearly, argue fairly, and make a compelling case for what they believe. The skills you have developed in this worksheet — structuring argument, marshalling evidence, rebutting with intellectual honesty, using language purposefully, listening with genuine attention — are not just exam skills. They are the skills of citizenship, of leadership, of any life lived in genuine engagement with other people and with the questions that matter. Your voice in the world is worth developing. Use it.",
      },
    ],
    nextSteps: [
      "Deliver your presentation to a larger audience if possible — another family member, a friend, or a home-school group.",
      "Prepare a structured debate on a topic of current relevance, with a family member taking the opposing side.",
      "Watch two major Australian speeches (Keating's Redfern Speech and Rudd's Apology) and compare their argumentative strategies.",
      "Join a speaking or debating organisation such as Rostrum Youth or a local debating club.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "true-false",
        title: "Extended Analytical Response: True or False?",
        instruction: "Mark each statement about extended analytical writing as true or false.",
        statements: [
          { text: "An extended analytical response is typically longer and more complex than a standard five-paragraph essay.", answer: true },
          { text: "The thesis statement in an extended essay should be vague to allow for maximum flexibility.", answer: false },
          { text: "Each body paragraph in an extended response should make a distinct but related argument.", answer: true },
          { text: "A conclusion that simply repeats the introduction is a mark of a strong extended essay.", answer: false },
          { text: "Planning is more important in extended writing than in shorter writing.", answer: true },
          { text: "The TEEL structure (Topic sentence, Evidence, Explanation, Link) is a common paragraph framework.", answer: true },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Extended Essay Vocabulary",
        instruction: "Match each term to its correct definition.",
        left: [
          "Thesis",
          "Argument",
          "Analysis",
          "Synthesis",
          "Cohesion",
          "Nuance",
        ],
        right: [
          "The quality of an essay holding together as a unified whole, with all parts connected",
          "The central, arguable claim of an essay that all paragraphs support",
          "Combining multiple ideas, sources, or perspectives into a new understanding",
          "A line of reasoning supported by evidence to prove a point",
          "Breaking down a text or idea to understand how it works and what it means",
          "Subtle complexity and acknowledgment of complication or ambiguity",
        ],
      },
      // 3
      {
        type: "multiple-choice",
        title: "What Makes an Extended Response Extended?",
        instruction: "Choose the best answer for each question.",
        parentTip: "The key difference between a short essay and an extended response is not just length — it is depth, nuance, and the capacity to sustain a complex argument across multiple paragraphs without losing coherence.",
        questions: [
          {
            prompt: "An extended analytical response typically differs from a five-paragraph essay in that it:",
            options: [
              "Uses more paragraphs and longer sentences",
              "Sustains a more nuanced, complex argument across more paragraphs, with greater development and cohesion",
              "Has a longer introduction",
              "Does not need a thesis",
            ],
            answer: "Sustains a more nuanced, complex argument across more paragraphs, with greater development and cohesion",
          },
          {
            prompt: "What is the most common structural problem in extended responses?",
            options: [
              "Too many paragraphs",
              "Drift — where later paragraphs lose connection to the central thesis",
              "Too much evidence",
              "The introduction is too long",
            ],
            answer: "Drift — where later paragraphs lose connection to the central thesis",
          },
          {
            prompt: "Which technique best prevents drift in an extended essay?",
            options: [
              "Repeating the thesis word for word at the start of every paragraph",
              "Beginning each paragraph with a topic sentence that explicitly connects to the thesis, and ending with a link sentence that ties back to the central argument",
              "Using the same evidence in every paragraph",
              "Writing each paragraph as a self-contained mini-essay",
            ],
            answer: "Beginning each paragraph with a topic sentence that explicitly connects to the thesis, and ending with a link sentence that ties back to the central argument",
          },
        ],
      },
      // 4
      {
        type: "fill-in-blank",
        title: "The TEEL Paragraph Structure",
        instruction: "Fill in the blank with the correct element of the TEEL structure.",
        sentences: [
          { text: "T stands for _______ sentence — the opening sentence of each body paragraph that states the central claim of that paragraph.", blanks: ["Topic"] },
          { text: "The first E stands for _______ — a quotation, statistic, example, or reference that supports the topic sentence.", blanks: ["Evidence"] },
          { text: "The second E stands for _______ — the analysis that unpacks what the evidence shows and how it connects to the thesis.", blanks: ["Explanation"] },
          { text: "L stands for _______ sentence — the closing sentence of the paragraph that connects back to the central argument.", blanks: ["Link"] },
          { text: "The _______ section of a paragraph should always be longer than the evidence section in a strong analytical essay.", blanks: ["Explanation"] },
        ],
      },
      // 5
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
      // 6
      {
        type: "sorting",
        title: "Paragraph Types in an Extended Essay",
        instruction: "Sort each sentence type into the correct paragraph position it typically occupies.",
        columns: ["Topic sentence (opening)", "Link sentence (closing)"],
        items: [
          { label: "\"This technique reinforces the essay's central argument that...\"" },
          { label: "\"[Author] also explores [theme] through the use of [technique]...\"" },
          { label: "\"Ultimately, this evidence confirms that the text constructs...\"" },
          { label: "\"A further way in which [text] represents [theme] is through...\"" },
          { label: "\"This analysis therefore supports the argument that...\"" },
          { label: "\"The text's treatment of [theme] is most clearly demonstrated in...\"" },
          { label: "\"In this way, the use of [technique] serves the broader purpose of...\"" },
          { label: "\"[Author] constructs [character] as [claim], which is evident when...\"" },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "Strong vs. Weak Thesis Statements",
        instruction: "For each thesis statement, circle whether it is strong (specific, arguable, analytical) or weak (too vague or descriptive).",
        questions: [
          {
            prompt: "'This essay will discuss the themes of power and identity in the text.'",
            options: ["Strong thesis", "Weak thesis"],
          },
          {
            prompt: "'Through the sustained use of free indirect discourse and unreliable narration, the text positions power not as a stable possession but as a condition that is perpetually contested.'",
            options: ["Strong thesis", "Weak thesis"],
          },
          {
            prompt: "'The author uses many techniques to explore important ideas in the novel.'",
            options: ["Strong thesis", "Weak thesis"],
          },
          {
            prompt: "'The construction of the protagonist as both complicit in and resistant to systemic oppression challenges simplistic readings of agency, revealing power as distributed rather than centralised.'",
            options: ["Strong thesis", "Weak thesis"],
          },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Evidence Integration",
        instruction: "Choose the best answer for each question about integrating evidence into analytical essays.",
        questions: [
          {
            prompt: "Which is the best way to integrate a quotation into an analytical paragraph?",
            options: [
              "Drop the quotation in and let it speak for itself",
              "Introduce it, quote it, then analyse it — explaining what the quotation shows and how it connects to the thesis",
              "Use only very long quotations",
              "Put the quotation at the end of the paragraph",
            ],
            answer: "Introduce it, quote it, then analyse it — explaining what the quotation shows and how it connects to the thesis",
          },
          {
            prompt: "What is the purpose of analysis after a quotation?",
            options: [
              "To repeat what the quotation says in different words",
              "To summarise the plot around the quotation",
              "To explain what the quotation shows, how the technique works, and what it reveals about the text's meaning",
              "To quote a second passage immediately after",
            ],
            answer: "To explain what the quotation shows, how the technique works, and what it reveals about the text's meaning",
          },
        ],
      },
      // 9
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
      // 10
      {
        type: "fill-in-blank",
        title: "Connective Phrases for Extended Writing",
        instruction: "Fill in the blank with an appropriate connective phrase that shows how paragraphs relate to each other.",
        sentences: [
          { text: "_______ this analysis of [character], the text also explores [theme] through...", blanks: ["Building on"] },
          { text: "_______ [previous point], the text also suggests that...", blanks: ["While"] },
          { text: "This connects to the broader argument that [claim] by demonstrating...", blanks: ["(no blank — full sentence given)"] },
          { text: "A _______ consideration is the way in which [technique] positions the reader to...", blanks: ["further"] },
          { text: "This is consistent with the pattern established in [previous paragraph], where...", blanks: ["(no blank — full sentence given)"] },
        ],
      },
      // 11
      {
        type: "true-false",
        title: "Essay Structure: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A strong extended essay introduction typically moves from a broad contextual statement to a specific thesis.", answer: true },
          { text: "The conclusion of an extended essay should introduce substantial new evidence.", answer: false },
          { text: "Paragraphs in an extended response should be ordered so that the argument develops and deepens, not repeats.", answer: true },
          { text: "A thesis statement should name specific techniques and themes, not just state a general topic.", answer: true },
          { text: "The body paragraphs of an extended essay can be in any order with no effect on the argument.", answer: false },
        ],
      },
      // 12
      {
        type: "multiple-choice",
        title: "Introduction and Conclusion",
        instruction: "Choose the best answer for each question about introductions and conclusions in extended essays.",
        questions: [
          {
            prompt: "What does a strong extended essay introduction do?",
            options: [
              "Lists all the techniques the essay will discuss",
              "Begins broadly with context, identifies the text and author, and narrows to a specific, arguable thesis",
              "Begins with 'In this essay, I will argue that...'",
              "Summarises each body paragraph",
            ],
            answer: "Begins broadly with context, identifies the text and author, and narrows to a specific, arguable thesis",
          },
          {
            prompt: "A strong conclusion for an extended essay:",
            options: [
              "Introduces a new argument for the first time",
              "Simply repeats the thesis and body paragraph topics",
              "Synthesises the argument and arrives at an insight — making the reader feel the essay has arrived somewhere",
              "Ends with a quotation from the text",
            ],
            answer: "Synthesises the argument and arrives at an insight — making the reader feel the essay has arrived somewhere",
          },
        ],
      },
      // 13
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
      // 14
      {
        type: "matching",
        title: "Analytical Language: Verbs and Phrases",
        instruction: "Match each analytical verb or phrase to what it is most appropriate for doing in an essay.",
        left: [
          "Constructs",
          "Positions",
          "Interrogates",
          "Subverts",
          "Reinforces",
          "Foregrounds",
        ],
        right: [
          "Challenges or undermines a convention, expectation, or power structure",
          "Shapes or creates (a character, identity, theme) through deliberate choices",
          "Brings to the foreground, emphasises, highlights",
          "Questions, examines, or challenges an assumption or ideology",
          "Influences where the reader stands in relation to a character or situation",
          "Strengthens, confirms, or deepens a theme, idea, or argument",
        ],
      },
      // 15
      {
        type: "tip",
        title: "Tip: The Essay Is a Journey",
        content: "Think of your extended essay as a journey rather than a list. In a list, the order of items is arbitrary — they could be in any sequence. In a journey, each step takes you somewhere the previous step made possible. Your essay's conclusion should feel like an arrival at an insight that was not fully visible at the start. If you read your introduction and conclusion together and they say essentially the same thing, the essay is circular, not progressive. Ask: where has this essay gone? What has it discovered? The answer to those questions is your real argument.",
      },
      // 16
      {
        type: "circle-correct",
        title: "Analysis vs. Summary",
        instruction: "For each excerpt from a student essay, circle whether it is analysis or summary.",
        questions: [
          {
            prompt: "'In Chapter 3, the protagonist discovers a letter. He reads it carefully and realises his mother has been keeping a secret from him.'",
            options: ["Analysis", "Summary"],
          },
          {
            prompt: "'The protagonist\u2019s discovery of the letter is rendered in slow, fragmented syntax — a formal choice that enacts the breakdown of his settled self-understanding, positioning the reader to experience the revelation as cognitive dislocation.'",
            options: ["Analysis", "Summary"],
          },
          {
            prompt: "'The novel ends with the two characters reconciling after years apart.'",
            options: ["Analysis", "Summary"],
          },
          {
            prompt: "'The novel\u2019s final reconciliation scene refuses sentimental resolution — the dialogue remains indirect and elliptical, constructing repair as partial and ongoing rather than complete.'",
            options: ["Analysis", "Summary"],
          },
        ],
      },
      // 17
      {
        type: "open-response",
        title: "Unpacking a Quotation",
        instruction: "Choose a quotation from a text you are studying (or use a quotation from any literary text). Write three sentences of analytical unpacking after the quotation. Your analysis should explain: (a) what technique is being used, (b) what effect it creates, and (c) how it connects to a broader theme or argument.",
        parentTip: "Quotation unpacking is the core analytical skill in literary essay writing. Three sentences should be the minimum — students often stop after identifying a technique, but the most important part is the 'so what?' — the connection to the text's broader meaning.",
        prompts: [
          { text: "Your quotation:", type: "lines", lines: 2 },
          { text: "Your three-sentence analysis:", type: "lines", lines: 6 },
        ],
      },
      // 18
      {
        type: "fill-in-blank",
        title: "Literary Terms for Extended Analysis",
        instruction: "Fill in the blank with the correct literary or analytical term.",
        sentences: [
          { text: "When a narrative's structure — the order in which events are revealed — differs from the chronological order of events, this is called narrative _______.", blanks: ["manipulation"] },
          { text: "An _______ narrator is one whose version of events cannot be fully trusted, often because of limited knowledge, bias, or self-deception.", blanks: ["unreliable"] },
          { text: "The _______ perspective controls what information the reader has access to at any point in the narrative.", blanks: ["focalisation"] },
          { text: "When an author gives the reader information that a character does not have, creating tension or irony, this is called dramatic _______.", blanks: ["irony"] },
          { text: "Writing that presents a character's thoughts in the third person but in the character's own voice is called _______ indirect style.", blanks: ["free"] },
        ],
      },
      // 19
      {
        type: "sorting",
        title: "Essay Planning: Order of Operations",
        instruction: "Sort each essay-writing step into 'Before drafting' or 'During or After drafting'.",
        columns: ["Before drafting", "During or After drafting"],
        items: [
          { label: "Identify the key argument in each body paragraph" },
          { label: "Write topic sentences for each paragraph" },
          { label: "Draft the conclusion" },
          { label: "Craft your thesis statement" },
          { label: "Revise for cohesion and connection to thesis" },
          { label: "Select and annotate key quotations" },
          { label: "Check that analysis section outweighs evidence in each paragraph" },
          { label: "Decide the order of your body paragraphs" },
          { label: "Proofread for spelling and grammar" },
          { label: "Formulate the essay question or prompt" },
        ],
      },
      // 20
      {
        type: "spark",
        title: "Spark: The Essay as Interpretation",
        content: "There is no single correct reading of a literary text. Two thoughtful essays on the same text, asking the same question, can arrive at different — even contradictory — conclusions, and both can be intellectually valid. What makes an essay argument valid is not that it is 'right' but that it is well-reasoned, well-evidenced, and internally consistent. Your job as an analytical writer is not to find the correct interpretation but to make the most compelling and coherent case for your particular reading. Own your argument. Trust your analysis. The essay is yours.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "multiple-choice",
        title: "Developing a Nuanced Argument",
        instruction: "Choose the best answer for each question about complexity and nuance in extended essays.",
        parentTip: "Nuance in an essay does not mean vagueness — it means acknowledging complexity. A nuanced argument can still be strong and clear; it simply recognises that the text is not doing one simple thing.",
        questions: [
          {
            prompt: "What does it mean to 'complicate' your argument in an extended essay?",
            options: [
              "Make the essay harder to follow",
              "Acknowledge moments where the text does something unexpected or more complex than the thesis initially suggests — then account for these in your analysis",
              "Change your thesis halfway through",
              "Use more technical literary vocabulary",
            ],
            answer: "Acknowledge moments where the text does something unexpected or more complex than the thesis initially suggests — then account for these in your analysis",
          },
          {
            prompt: "How should a paragraph that acknowledges a counterpoint or complication be structured?",
            options: [
              "State the counterpoint and then end the paragraph",
              "Ignore counterpoints — they undermine your argument",
              "Acknowledge the counterpoint, then explain how it actually supports or complicates rather than undermines your central thesis",
              "Put all counterpoints in the conclusion",
            ],
            answer: "Acknowledge the counterpoint, then explain how it actually supports or complicates rather than undermines your central thesis",
          },
        ],
      },
      // 22
      {
        type: "open-response",
        title: "Writing a Paragraph That Acknowledges Complexity",
        instruction: "Write a body paragraph (8–12 sentences) that: (a) opens with a clear topic sentence connected to your thesis, (b) provides specific textual evidence, (c) analyses it, (d) acknowledges a moment where the text complicates the simple version of your argument, and (e) closes with a link that shows how this complexity actually strengthens rather than undermines your thesis.",
        parentTip: "This is a high-level analytical move — acknowledging a counterpoint and turning it to your advantage. It shows the examiner that you are reading the text with genuine attention rather than selectively marshalling evidence. It is the mark of a mature literary thinker.",
        prompts: [
          { text: "Your paragraph:", type: "box" },
        ],
      },
      // 23
      {
        type: "true-false",
        title: "Using Quotations Effectively",
        instruction: "Mark each statement about quotation use as true or false.",
        statements: [
          { text: "A quotation should never be longer than is necessary for your analytical point.", answer: true },
          { text: "You can use square brackets [...] to indicate where you have cut words from a quotation.", answer: true },
          { text: "Every quotation should be followed by substantial analysis before any further quotation is introduced.", answer: true },
          { text: "Using many quotations without analysis is a sign of strong analytical writing.", answer: false },
          { text: "The best essays use quotations as a launching pad for analysis, not as the destination.", answer: true },
          { text: "It is acceptable to distort the meaning of a quotation to make it fit your argument.", answer: false },
        ],
      },
      // 24
      {
        type: "matching",
        title: "Analytical Frameworks",
        instruction: "Match each analytical framework or critical lens to its description.",
        left: [
          "Feminist criticism",
          "Postcolonial criticism",
          "Marxist criticism",
          "Reader-response criticism",
          "New Criticism",
        ],
        right: [
          "Focuses on how the text creates meaning through its internal structure, language, and form — close reading",
          "Examines how the text constructs or challenges gender, patriarchy, and the representation of women",
          "Examines how the reader's own background and position shapes their interpretation of the text",
          "Examines how the text represents class, economic power, and social inequality",
          "Examines how texts from colonised or formerly colonised nations represent identity, power, and the legacies of colonialism",
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Applying an Analytical Framework",
        instruction: "Choose one critical lens (feminist, postcolonial, Marxist, or reader-response) and apply it to a text you are studying. Write a paragraph (8–12 sentences) that reads a specific moment in the text through that lens.",
        parentTip: "Critical lenses are not the only way to read a text, but they provide useful tools for unlocking aspects that might otherwise be invisible. A feminist reading of a text written by a man, or a postcolonial reading of a canonical British novel, often reveals assumptions buried in the text's apparently universal perspective.",
        prompts: [
          { text: "Your chosen framework:", type: "lines", lines: 1 },
          { text: "Your paragraph:", type: "box" },
          {
            text: "What does this lens reveal about the text that a simple close reading would not?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 26
      {
        type: "fill-in-blank",
        title: "Embedding Quotations",
        instruction: "Complete each sentence to embed the quotation more smoothly.",
        sentences: [
          { text: "The author\u2019s choice of \u2018shattered\u2019 _______ the character\u2019s psychological state as fractured beyond easy repair.", blanks: ["constructs"] },
          { text: "Her stark declaration \u2018I refuse\u2019 _______ the reader to understand her as a conscious agent of resistance.", blanks: ["positions"] },
          { text: "The metaphor of \u2018the silence was enormous\u2019 _______ absence as a physical presence, suggesting grief is inescapable.", blanks: ["renders"] },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Developing a Paragraph from Planning to Draft",
        instruction: "Take one body paragraph from your essay plan (Activity 5) and develop it in three stages: (1) Write the topic sentence only. (2) Select and embed your evidence. (3) Write 4–6 sentences of analysis and a link sentence.",
        parentTip: "Breaking paragraph construction into stages helps students who feel overwhelmed by trying to do everything at once. Once they are confident, they can collapse the stages — but learning each stage separately builds understanding of what each element does.",
        prompts: [
          { text: "Stage 1 — Topic sentence only:", type: "lines", lines: 2 },
          { text: "Stage 2 — Evidence integrated:", type: "lines", lines: 3 },
          { text: "Stage 3 — Full paragraph with analysis and link:", type: "box" },
        ],
      },
      // 28
      {
        type: "sorting",
        title: "Paragraph Quality: Sorting Evidence",
        instruction: "Sort each piece of evidence by its quality for supporting a literary analytical argument.",
        columns: ["Strong analytical evidence", "Weak analytical evidence"],
        items: [
          { label: "A precise, brief quotation with a specific technique identified" },
          { label: "A plot summary of what happened in the chapter" },
          { label: "A quotation with analysis of its connotations and tone" },
          { label: "A reference to your own feelings about the characters" },
          { label: "A specific example of imagery that reinforces the theme" },
          { label: "A structural example connecting technique to meaning" },
          { label: "A broad statement: 'Everyone knows this book is about [theme]'" },
          { label: "A claim supported only by personal preference" },
        ],
      },
      // 29
      {
        type: "multiple-choice",
        title: "Sustained Argument Across Paragraphs",
        instruction: "Choose the best answer for each question about maintaining argument across an extended essay.",
        questions: [
          {
            prompt: "What does it mean for an essay to be 'cohesive'?",
            options: [
              "All sentences are the same length",
              "All paragraphs use identical structure",
              "The whole essay holds together as a unified argument — ideas connect, build on each other, and all relate to the thesis",
              "The essay covers as many topics as possible",
            ],
            answer: "The whole essay holds together as a unified argument — ideas connect, build on each other, and all relate to the thesis",
          },
          {
            prompt: "Which connective strategy is most effective for linking paragraphs in an extended essay?",
            options: [
              "Starting every paragraph with 'Another example of this is...'",
              "Using connective phrases that show the logical relationship between paragraphs",
              "Leaving the reader to infer the connections",
              "Repeating the thesis statement at the start of every paragraph",
            ],
            answer: "Using connective phrases that show the logical relationship between paragraphs",
          },
        ],
      },
      // 30
      {
        type: "tip",
        title: "Tip: Analysis Is Not Description",
        content: "The most common weakness in Year 9 analytical essays is description masquerading as analysis. Description tells the reader what a text says or does. Analysis tells the reader how it does it and what it means. When you catch yourself writing plot summary or retelling what happened, stop and ask: what technique is being used? What effect does it create? How does this connect to the text's broader argument or meaning? Every sentence in an analytical paragraph should be answering those questions, not the question 'What happens next?'",
      },
      // 31
      {
        type: "open-response",
        title: "Identifying Drift",
        instruction: "Read the following essay paragraph extract and identify where it drifts from the thesis. Rewrite the drifting section to restore the analytical focus.",
        parentTip: "Identifying drift in sample text develops the skill of identifying it in one's own writing. After completing this activity, ask your student to re-read one of their own recent essay paragraphs and identify any drift.",
        prompts: [
          {
            text: "Sample paragraph: 'The protagonist\u2019s relationship with power is shown through his confrontation in Chapter 4. He refuses to comply. The author uses strong verbs to show resistance. The scene then moves to the protagonist returning home, where he has a conversation with his sister about their childhood. Their relationship is complicated. Eventually he goes to sleep and dreams about the past.' Identify the drift and explain where analysis loses connection to the thesis:",
            type: "lines",
            lines: 4,
          },
          {
            text: "Rewrite the drifting section to restore analytical focus on power and resistance:",
            type: "lines",
            lines: 5,
          },
        ],
      },
      // 32
      {
        type: "true-false",
        title: "Extended Response Writing: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A sophisticated thesis names both the techniques and the themes being argued.", answer: true },
          { text: "The purpose of the link sentence is to introduce new evidence.", answer: false },
          { text: "Paraphrasing a quotation in your own words can sometimes be more analytically effective than quoting directly.", answer: true },
          { text: "Using the author's name rather than 'the author' signals analytical sophistication.", answer: true },
          { text: "All body paragraphs in an extended essay should be identical in length.", answer: false },
          { text: "An essay that acknowledges complexity and counterpoints is generally stronger than one that ignores them.", answer: true },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "Vocabulary for Analytical Writing",
        instruction: "Fill in the blank with an appropriate analytical verb or phrase.",
        sentences: [
          { text: "Through the use of [technique], [author] _______ the reader to understand [character] as an agent of [theme].", blanks: ["positions"] },
          { text: "The repeated motif of [image] _______ the text's central concern with [theme].", blanks: ["reinforces"] },
          { text: "[Author]\u2019s choice to [structural decision] _______ any comfortable or singular reading of [theme].", blanks: ["resists"] },
          { text: "The juxtaposition of [A] and [B] _______ a critique of [idea or value].", blanks: ["constructs"] },
          { text: "This passage _______ the reader\u2019s sympathy toward [character] by...", blanks: ["solicits"] },
        ],
      },
      // 34
      {
        type: "matching",
        title: "Structural Techniques and Their Analytical Uses",
        instruction: "Match each structural technique to the kind of argument it allows you to make.",
        left: [
          "Non-linear narrative",
          "Epistolary form",
          "Multiple narrators",
          "Frame narrative",
          "Circular structure",
        ],
        right: [
          "Reveals how memory, trauma, or meaning is shaped retrospectively rather than lived linearly",
          "Allows the text to explore how different subjects construct the same events differently — interrogating truth and reliability",
          "Creates layers of storytelling that raise questions about whose story is told and why",
          "A return to the opening that can suggest resolution, entrapment, or ironic commentary on the narrative's progress",
          "The form itself constructs character voice and intimacy while also limiting perspective and raising questions of authenticity",
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Arguing About Structure",
        instruction: "Choose a structural feature of the text you are studying (e.g. the narrative perspective, the arrangement of chapters, a fragmented form, or a recurring structural device) and write a paragraph (8–12 sentences) that argues how this structural choice serves the text's thematic or ideological purposes.",
        parentTip: "Arguing about structure is often neglected in favour of analysis of language. But structural choices — who tells the story, in what order, from what vantage point — are among the most significant interpretive choices a writer makes. Encourage your student to think of structure as an argument about how meaning is made.",
        prompts: [
          { text: "Structural feature you are analysing:", type: "lines", lines: 1 },
          { text: "Your analytical paragraph:", type: "box" },
        ],
      },
      // 36
      {
        type: "multiple-choice",
        title: "Context in Analytical Writing",
        instruction: "Choose the best answer for each question about contextualising textual analysis.",
        questions: [
          {
            prompt: "How should context (historical, cultural, biographical) be used in an analytical essay?",
            options: [
              "Context should replace close textual analysis",
              "Context should inform and enrich the analysis of the text itself — showing how historical or cultural factors shape the text's construction and meaning",
              "Context is irrelevant to analytical essay writing",
              "Context should appear only in the introduction",
            ],
            answer: "Context should inform and enrich the analysis of the text itself — showing how historical or cultural factors shape the text's construction and meaning",
          },
          {
            prompt: "What is the risk of using too much contextual information in an analytical essay?",
            options: [
              "The essay becomes too long",
              "The essay shifts from analysis of the text to a history lesson — losing focus on how the text itself works",
              "The essay becomes too persuasive",
              "The context distracts the reader with interesting facts",
            ],
            answer: "The essay shifts from analysis of the text to a history lesson — losing focus on how the text itself works",
          },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Integrating Context into Analysis",
        instruction: "Write a paragraph (8–12 sentences) that integrates contextual information (historical, cultural, or biographical) into a close reading of a specific moment in your text. The context should illuminate the text — not replace it.",
        parentTip: "The rule of thumb: context should be in service of analysis, not the other way around. A sentence that says 'The industrial revolution changed working conditions. This is seen in the text when...' is different from 'The text encodes the anxieties of industrial capitalism in its imagery of machinery.'",
        prompts: [
          { text: "Your context:", type: "lines", lines: 2 },
          { text: "Your paragraph:", type: "box" },
        ],
      },
      // 38
      {
        type: "fill-in-blank",
        title: "Introduction Writing: Key Moves",
        instruction: "Fill in the blank to complete the description of each key move in an extended essay introduction.",
        sentences: [
          { text: "The opening of an introduction typically establishes the _______ or _______ of the text and the analytical question.", blanks: ["context", "significance"] },
          { text: "After establishing context, the introduction identifies the _______ and, where relevant, the _______.", blanks: ["text", "author"] },
          { text: "The introduction narrows from the general to the specific before arriving at the _______ statement at the end.", blanks: ["thesis"] },
          { text: "An effective thesis statement is _______ (not everyone would agree), _______ (backed by close reading), and _______ (precise rather than vague).", blanks: ["arguable", "defensible", "specific"] },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Writing Multiple Introductions",
        instruction: "Write two different introductions for the same essay question — one using a contextual opening, one using a close reading of a specific quotation as the opening. Then choose the stronger one and explain why.",
        parentTip: "Having students write multiple versions of an introduction helps them understand that there are many legitimate ways to begin an essay, and that the choice of opening creates a particular kind of relationship with the reader.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 2 },
          { text: "Introduction A (contextual opening):", type: "box" },
          { text: "Introduction B (quotation-based opening):", type: "box" },
          { text: "Which is stronger and why?", type: "lines", lines: 3 },
        ],
      },
      // 40
      {
        type: "spark",
        title: "Spark: Disagreeing with the Text",
        content: "The best analytical essays often involve a kind of productive disagreement with the text — moments where the essay does not simply celebrate what the author has done but examines it with genuine critical independence. A text can be brilliant and still reproduce ideological assumptions. A character can be sympathetic and still act in ways that deserve scrutiny. A narrative can be beautifully written and still marginalise certain perspectives. The analytical essay is not a review or a celebration — it is a critical investigation. What is your text doing that deserves scrutiny, not just admiration?",
      },
      // ── CONSOLIDATING 51–80 ──────────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Full Paragraph Sequence: Three Connected Paragraphs",
        instruction: "Write three connected body paragraphs on the text you are studying. Each paragraph should: (a) open with a topic sentence explicitly connected to the thesis, (b) develop a distinct but related argument to the previous paragraph, (c) end with a link sentence, and (d) begin with a connective phrase that shows how it relates to the previous paragraph.",
        parentTip: "Three connected paragraphs is the minimum for a genuine extended response. The key challenge is ensuring the sequence develops rather than repeats — each paragraph should add something new to the argument, building toward the conclusion.",
        prompts: [
          { text: "Your thesis (write it at the top as an anchor):", type: "lines", lines: 2 },
          { text: "Paragraph 1:", type: "box" },
          { text: "Paragraph 2:", type: "box" },
          { text: "Paragraph 3:", type: "box" },
        ],
      },
      // 42
      {
        type: "matching",
        title: "Essay Assessment Criteria",
        instruction: "Match each assessment criterion to the question it asks the assessor.",
        left: [
          "Argument",
          "Evidence",
          "Analysis",
          "Cohesion",
          "Expression",
        ],
        right: [
          "Is the language accurate, varied, and appropriately formal? Is the writing clear and precise?",
          "Does the essay sustain a clear, specific, and well-developed argument from thesis to conclusion?",
          "Does the essay hold together? Do all parts connect to the thesis? Do paragraphs link to each other?",
          "Is the evidence specific, relevant, and well-selected? Are quotations embedded and not over-used?",
          "Does the analysis explain how the technique works and what it means, not just identify what it is?",
        ],
      },
      // 43
      {
        type: "fill-in-blank",
        title: "Conclusions: Advanced Techniques",
        instruction: "Fill in the blank with appropriate language for a sophisticated extended essay conclusion.",
        sentences: [
          { text: "Rather than simply re-stating the thesis, the conclusion should _______ the argument — pulling together what the essay has established into a fuller understanding.", blanks: ["synthesise"] },
          { text: "A conclusion that zooms out from the specific text to a broader _______ question gives the essay larger significance.", blanks: ["cultural"] },
          { text: "A conclusion can acknowledge the _______ of the question by noting what the essay has not fully resolved.", blanks: ["complexity"] },
          { text: "The final sentence of the conclusion often returns to a _______ from the introduction, creating structural symmetry.", blanks: ["image"] },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Writing a Sophisticated Conclusion",
        instruction: "Write a conclusion (6–8 sentences) for the essay you have been developing. Your conclusion should: synthesise the argument (not summarise it), arrive at an insight not fully available in the introduction, acknowledge any complexity not fully resolved, and end with a sentence that carries weight.",
        parentTip: "The test for a sophisticated conclusion is: does it say something the introduction could not have said? The introduction presents the thesis; the conclusion should be the enriched, deepened version of that thesis after the body paragraphs have done their work.",
        prompts: [
          { text: "Your sophisticated conclusion:", type: "box" },
          {
            text: "What does your conclusion say that your introduction could not have said?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 45
      {
        type: "tip",
        title: "Tip: The Rule of Three in Evidence",
        content: "A reliable test for whether a body paragraph is making a genuine argument: can you find at least three pieces of evidence — three separate textual moments — that support the claim? If you can only find one, the claim may be too specific. If you have fifteen, the claim may be too general. Three to four well-chosen pieces of evidence per major argument is the analytical sweet spot — enough to establish a pattern without becoming a list. Remember: always prioritise depth of analysis over quantity of evidence.",
      },
      // 46
      {
        type: "open-response",
        title: "Revision: Strengthening Analysis",
        instruction: "Take one of your existing body paragraphs from earlier in this worksheet and revise it using the following checklist: (a) Is the topic sentence specific enough? (b) Is the evidence embedded smoothly? (c) Does the analysis section explain HOW the technique works and WHY it matters? (d) Does the link sentence connect to the thesis, not just restate the topic sentence?",
        parentTip: "The revision process for analytical writing is where the real analytical thinking happens. The first draft gets ideas on the page; revision is where you interrogate those ideas and push them to their full analytical potential.",
        prompts: [
          { text: "Original paragraph:", type: "box" },
          { text: "Revised paragraph:", type: "box" },
          {
            text: "List the three most significant improvements you made and why each makes the paragraph stronger:",
            type: "lines",
            lines: 5,
          },
        ],
      },
      // 47
      {
        type: "sorting",
        title: "Evaluating Essay Paragraphs",
        instruction: "Sort each paragraph element into 'Strengthens the paragraph' or 'Weakens the paragraph'.",
        columns: ["Strengthens the paragraph", "Weakens the paragraph"],
        items: [
          { label: "A topic sentence that names a specific technique and connects to the thesis" },
          { label: "A plot summary of what happens after the quotation" },
          { label: "Four or five sentences of analysis unpacking one quotation's technique and effect" },
          { label: "Three quotations in a row without any analysis between them" },
          { label: "A link sentence that connects the paragraph's finding to the broader argument" },
          { label: "Beginning the paragraph with 'Another example of this is...'" },
          { label: "Acknowledging a moment of complexity and accounting for it analytically" },
          { label: "Using vague phrases like 'This is clearly shown when...'" },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Sustained Draft: Four Paragraphs",
        instruction: "Write four consecutive body paragraphs for your essay. Include a connecting phrase at the start of each paragraph (2, 3, and 4) that shows how it relates to the previous. After completing them, check: does the argument develop across all four? Or does it repeat?",
        parentTip: "Four sustained paragraphs is a substantial writing task. Give your student extended, uninterrupted time. The goal is not perfection — it is practice in sustained analytical thinking. Problems of repetition and drift are often most visible at this length, which is precisely why writing at this length is valuable.",
        prompts: [
          { text: "Paragraph 1:", type: "box" },
          { text: "Paragraph 2:", type: "box" },
          { text: "Paragraph 3:", type: "box" },
          { text: "Paragraph 4:", type: "box" },
          {
            text: "Does the argument develop across all four paragraphs? What is different in paragraph 4 from paragraph 1?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Sophisticated Analytical Writing: True or False?",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Using modal verbs ('suggests', 'implies', 'may construct') signals analytical sophistication and appropriate tentativeness.", answer: true },
          { text: "Asserting that a reading is the only possible interpretation is a mark of confident analysis.", answer: false },
          { text: "The best analytical essays acknowledge the text's complexity without losing clarity of argument.", answer: true },
          { text: "An essay that analyses technique without connecting it to theme or meaning is incomplete.", answer: true },
          { text: "Paraphrasing is always weaker than direct quotation in analytical writing.", answer: false },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Self-Assessment: Analytical Essay Audit",
        instruction: "Conduct a paragraph-by-paragraph audit of the draft essay you have been developing. For each paragraph, assess it against the criteria below and note what needs improvement.",
        parentTip: "A structured audit is more rigorous and useful than general re-reading. Ask your student to complete this honestly — the point is not to feel good about the essay but to understand exactly what it needs to become stronger.",
        prompts: [
          {
            text: "Paragraph 1: Is the topic sentence connected to thesis? (Y/N) Analysis longer than evidence? (Y/N) What needs improving?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Paragraph 2: Is the topic sentence connected to thesis? (Y/N) Analysis longer than evidence? (Y/N) What needs improving?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Paragraph 3: Is the topic sentence connected to thesis? (Y/N) Analysis longer than evidence? (Y/N) What needs improving?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Paragraph 4: Is the topic sentence connected to thesis? (Y/N) Analysis longer than evidence? (Y/N) What needs improving?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Overall: Is there any drift from the thesis? What is the most significant structural or analytical problem to address in revision?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 51
      {
        type: "open-response",
        title: "Revising for Cohesion",
        instruction: "Revise your full essay draft with a specific focus on cohesion. Add or improve: (a) the connecting phrases between paragraphs, (b) any topic or link sentences that have lost their connection to the thesis, and (c) any paragraphs that repeat rather than develop. Write out the revised connecting phrases and link sentences below.",
        parentTip: "Cohesion is often the last thing students attend to in revision because they are focused on individual paragraphs. But it is one of the things most noticed by examiners — an essay that flows and builds is significantly more impressive than one whose paragraphs feel disconnected.",
        prompts: [
          { text: "Revised connecting phrase between paragraphs 1 and 2:", type: "lines", lines: 2 },
          { text: "Revised connecting phrase between paragraphs 2 and 3:", type: "lines", lines: 2 },
          { text: "Revised connecting phrase between paragraphs 3 and 4:", type: "lines", lines: 2 },
          { text: "What paragraph did you most significantly revise for cohesion and why?", type: "lines", lines: 3 },
        ],
      },
      // 52
      {
        type: "multiple-choice",
        title: "Reading Critically as a Writer",
        instruction: "Choose the best answer for each question about developing analytical writing through critical reading.",
        questions: [
          {
            prompt: "Why do writing teachers advise students to read sample essays alongside their own writing?",
            options: [
              "To copy the sample essay's content",
              "To identify the techniques, structures, and analytical moves that experienced writers use, and to assess their own work against a model",
              "Because it is faster than practising independently",
              "To avoid having to think independently",
            ],
            answer: "To identify the techniques, structures, and analytical moves that experienced writers use, and to assess their own work against a model",
          },
          {
            prompt: "What is the most useful thing to notice when reading a high-quality sample essay?",
            options: [
              "How long it is",
              "How many quotations it uses",
              "The analytical moves it makes — how it introduces, analyses, and links evidence to the thesis",
              "How difficult the vocabulary is",
            ],
            answer: "The analytical moves it makes — how it introduces, analyses, and links evidence to the thesis",
          },
        ],
      },
      // 53
      {
        type: "fill-in-blank",
        title: "Australian Texts for Analysis: Key Works",
        instruction: "Fill in the blank with the correct Australian author, title, or context.",
        sentences: [
          { text: "Christos Tsiolkas's novel 'The Slap' explores questions of parenting, class, and multiculturalism in contemporary _______.", blanks: ["Australia"] },
          { text: "Kate Grenville's 'The Secret River' examines the historical and moral complexities of _______ settlement in colonial Australia.", blanks: ["European"] },
          { text: "Alexis Wright's 'Carpentaria' is celebrated for its use of _______ storytelling traditions within a novelistic form.", blanks: ["Indigenous"] },
          { text: "Year 9 students may study Australian texts through a _______ lens, examining how national identity is constructed and contested.", blanks: ["postcolonial"] },
          { text: "First Nations writer Sally Morgan's memoir 'My Place' is an important text for Year 9 study of _______ and identity.", blanks: ["history"] },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Reading Like a Critic",
        instruction: "Read a passage from the text you are studying (or a text you have read recently) with the eyes of a critic. Write 150–200 words of analytical annotation: what techniques do you notice? What meanings do they create? What is the text assuming, constructing, or challenging?",
        parentTip: "Analytical annotation is a precursor to essay writing. Reading actively — asking 'how?' and 'what for?' rather than just 'what happens?' — is a habit of mind that transforms passive reading into critical engagement.",
        prompts: [
          { text: "Your passage or quotation:", type: "lines", lines: 3 },
          { text: "Your analytical annotation:", type: "box" },
        ],
      },
      // 55
      {
        type: "true-false",
        title: "Extended Response: Planning and Drafting",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A detailed plan takes more time but usually produces a stronger essay than starting to write immediately.", answer: true },
          { text: "You should plan the conclusion before you begin drafting the body paragraphs.", answer: true },
          { text: "Once you start writing an essay, you cannot change your thesis.", answer: false },
          { text: "The order of body paragraphs should feel logical — like an argument that unfolds rather than a list.", answer: true },
          { text: "Having a plan means the essay will automatically be good — planning substitutes for quality drafting.", answer: false },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "The Opposing Interpretation",
        instruction: "Identify a reading of your text that differs significantly from your own. Write a paragraph (6–8 sentences) that presents this alternative interpretation fairly and in its strongest form. Then write a second paragraph explaining why your own reading is more persuasive — without dismissing the alternative entirely.",
        parentTip: "The ability to steelman an opposing reading is a sophisticated analytical skill. It shows the examiner that the student is a genuine reader of the text — not just a writer of an argument. Essays that engage with alternative interpretations are always more impressive than those that proceed as if only one reading exists.",
        prompts: [
          { text: "Alternative interpretation paragraph:", type: "box" },
          { text: "Why your reading is more persuasive:", type: "box" },
        ],
      },
      // 57
      {
        type: "multiple-choice",
        title: "Essay Questions: Identifying Key Demands",
        instruction: "For each essay question, choose the key analytical demand it makes.",
        questions: [
          {
            prompt: "'How does [author] construct [character] as a product of their social environment?'",
            options: [
              "Summarise the character's biography",
              "Analyse the techniques through which the text represents the relationship between individual identity and social context",
              "Describe the social environment of the text",
              "Argue whether the character is likeable or not",
            ],
            answer: "Analyse the techniques through which the text represents the relationship between individual identity and social context",
          },
          {
            prompt: "'To what extent does [text] challenge the reader's comfortable assumptions about [theme]?'",
            options: [
              "Decide whether you personally felt challenged",
              "Analyse how specific textual techniques position the reader and evaluate how effectively they challenge assumptions",
              "List all the examples of the theme in the text",
              "Argue that the text is either challenging or not challenging",
            ],
            answer: "Analyse how specific textual techniques position the reader and evaluate how effectively they challenge assumptions",
          },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Deconstructing an Essay Question",
        instruction: "Choose an essay question for the text you are studying (or write one). Break it down systematically: (a) what key terms need defining? (b) what techniques should be discussed? (c) what themes are central? (d) what kind of argument does it call for?",
        parentTip: "Misreading the question is one of the most common causes of poor essay performance — students write excellent essays about the wrong topic. Systematic question deconstruction before planning is one of the most valuable study habits a student can develop.",
        prompts: [
          { text: "Your essay question:", type: "lines", lines: 2 },
          { text: "(a) Key terms to define:", type: "lines", lines: 2 },
          { text: "(b) Techniques to discuss:", type: "lines", lines: 2 },
          { text: "(c) Central themes:", type: "lines", lines: 2 },
          { text: "(d) Type of argument called for:", type: "lines", lines: 2 },
          { text: "Draft thesis statement responding to this question:", type: "lines", lines: 3 },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Timed Writing: 30-Minute Essay Segment",
        instruction: "Set a timer for 30 minutes. Write as much as you can of your extended essay — focusing on two or three body paragraphs. Do not stop to perfect. Write continuously. The goal is to experience sustained analytical writing under time pressure, which mirrors exam conditions.",
        parentTip: "Timed writing is essential preparation for any formal examination. The skills practised in timed conditions — prioritising, maintaining structure under pressure, writing first drafts that are imperfect but continuous — are different from the skills practised in extended open-ended drafting. Both need to be developed.",
        prompts: [
          { text: "Your timed writing:", type: "box" },
          {
            text: "After the 30 minutes: what was hardest about writing under time pressure? What would you do differently in an exam?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      // 60
      {
        type: "spark",
        title: "Spark: Argue Against Yourself",
        content: "The most powerful essays are often written by writers who genuinely tested their own argument — who tried as hard as they could to disprove their own thesis and then addressed what they found. Before submitting your next essay, try this: spend ten minutes deliberately trying to argue against your own thesis. What is the strongest possible case against your reading? What evidence would embarrass your argument? Then go back to your essay and address those challenges. Your thesis will be stronger for having been tested.",
      },
      // ── EXTENDING 81–100 ──────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Full Extended Essay Draft: Planning Stage",
        instruction: "Produce a complete, detailed plan for a full extended analytical response (600–900 words) to a question on the text you have been studying. Your plan should include: thesis, introduction strategy, five to six body paragraphs with topic sentences and evidence, and conclusion insight.",
        parentTip: "At this point in the worksheet, your student has all the skills needed to plan a full extended response. The plan should be detailed and specific — each paragraph topic should be described precisely enough that the actual writing of the paragraph is a matter of execution rather than invention.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 2 },
          { text: "Thesis statement:", type: "lines", lines: 3 },
          { text: "Introduction strategy:", type: "lines", lines: 2 },
          { text: "Para 1 — Topic sentence + key evidence:", type: "lines", lines: 2 },
          { text: "Para 2 — Topic sentence + key evidence:", type: "lines", lines: 2 },
          { text: "Para 3 — Topic sentence + key evidence:", type: "lines", lines: 2 },
          { text: "Para 4 — Topic sentence + key evidence:", type: "lines", lines: 2 },
          { text: "Para 5 (optional) — Topic sentence + key evidence:", type: "lines", lines: 2 },
          { text: "Conclusion insight:", type: "lines", lines: 2 },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Full Extended Essay Draft: Introduction and First Body Paragraph",
        instruction: "Draft the introduction (4–6 sentences) and first body paragraph (8–12 sentences) of your extended essay. Aim for analytical precision: your thesis should be specific and arguable; your topic sentence should name a technique and connect to the thesis; your analysis should outweigh your evidence.",
        parentTip: "The introduction and first body paragraph set the tone and analytical register for the whole essay. Encourage your student to take extra care with these — they signal to the reader what kind of essay this will be.",
        prompts: [
          { text: "Introduction:", type: "box" },
          { text: "Body paragraph 1:", type: "box" },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Full Extended Essay Draft: Body Paragraphs 2, 3, and 4",
        instruction: "Draft body paragraphs 2, 3, and 4. Begin each with a connective phrase that shows the logical relationship to the previous paragraph. Ensure each paragraph makes a distinct argument and advances rather than repeats the thesis.",
        parentTip: "Three consecutive paragraphs without losing the thread is the core challenge of extended writing. If your student loses the thesis connection at any point, ask: what is this paragraph contributing to the argument that the previous one didn't? If the answer is 'more examples of the same point', the paragraph needs rethinking.",
        prompts: [
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
          { text: "Body paragraph 4:", type: "box" },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Full Extended Essay Draft: Conclusion",
        instruction: "Write the conclusion of your extended essay (6–8 sentences). Synthesise the argument, arrive at an insight not available in the introduction, and end with a sentence that carries resonance and weight.",
        parentTip: "After writing the conclusion, ask your student: read only the introduction and this conclusion together — does the conclusion feel like an arrival? If it essentially restates the introduction, it needs to be rethought from the perspective of what the essay has established.",
        prompts: [
          { text: "Your conclusion:", type: "box" },
          {
            text: "Read your introduction and conclusion together. What does the conclusion know that the introduction did not?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Comprehensive Revision: Full Essay",
        instruction: "Revise your complete extended essay draft using the following five-stage process: (1) Check thesis — is it specific, arguable, and named for technique and theme? (2) Check each topic sentence — does it connect to the thesis? (3) Check each paragraph — is analysis longer than evidence? (4) Check cohesion — do paragraphs connect to each other with explicit phrases? (5) Cut or improve anything that repeats, over-explains, or does not do necessary analytical work.",
        parentTip: "Five-stage revision is more rigorous than general re-reading. Each stage targets a specific problem. After each stage, the essay should be measurably stronger. This is also excellent exam preparation: in a timed exam, even two minutes of targeted checking can significantly improve a response.",
        prompts: [
          { text: "Revised thesis (if changed):", type: "lines", lines: 2 },
          { text: "Topic sentences that were revised:", type: "lines", lines: 4 },
          { text: "Connecting phrases that were added or improved:", type: "lines", lines: 3 },
          { text: "What did you cut and why?", type: "lines", lines: 3 },
          { text: "Overall: what is the single most significant improvement made in revision?", type: "lines", lines: 2 },
        ],
      },
      // 66
      {
        type: "true-false",
        title: "Extended Essay: Advanced Review",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "An essay that argues for a nuanced, complex thesis is generally stronger than one that argues for a simple, single-point thesis.", answer: true },
          { text: "Using the same connective phrase at the start of every paragraph is a sign of good cohesion.", answer: false },
          { text: "The analysis in a body paragraph should explain the 'how' and 'so what' of the evidence, not just the 'what'.", answer: true },
          { text: "A conclusion that opens new arguments is a sign of sophisticated writing.", answer: false },
          { text: "Essays that integrate context into close reading are generally more sophisticated than those that treat them separately.", answer: true },
          { text: "The quality of an essay is determined primarily by how many quotations it includes.", answer: false },
        ],
      },
      // 67
      {
        type: "multiple-choice",
        title: "Responding to Feedback",
        instruction: "Choose the best response to each piece of feedback on an extended analytical response.",
        questions: [
          {
            prompt: "Feedback: 'Your thesis is too general — it could apply to almost any novel.' Best response:",
            options: [
              "Argue that the thesis is fine as it is",
              "Rewrite the thesis to name specific techniques, themes, and the particular argument your essay is making about how they relate",
              "Remove the thesis from the essay",
              "Add more adjectives to the thesis",
            ],
            answer: "Rewrite the thesis to name specific techniques, themes, and the particular argument your essay is making about how they relate",
          },
          {
            prompt: "Feedback: 'Paragraph 3 repeats the same point as Paragraph 1 in different words.' Best response:",
            options: [
              "Delete Paragraph 3 entirely",
              "Revise Paragraph 3 to make a new, distinct argument that builds on rather than repeats Paragraph 1",
              "Move Paragraph 3 to the beginning",
              "Leave it — repetition shows emphasis",
            ],
            answer: "Revise Paragraph 3 to make a new, distinct argument that builds on rather than repeats Paragraph 1",
          },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Comparative Paragraph: Two Texts",
        instruction: "Write a body paragraph (10–14 sentences) that compares how two texts handle the same theme or technique. Your topic sentence should state the comparison; your analysis should show how each text's approach differs and what the difference reveals.",
        parentTip: "Comparative essays are a common and challenging format at senior level. The core skill is not just identifying similarities and differences but analysing what those differences reveal — about the texts, their contexts, their implied values and assumptions.",
        prompts: [
          { text: "Text 1:", type: "lines", lines: 1 },
          { text: "Text 2:", type: "lines", lines: 1 },
          { text: "Theme or technique being compared:", type: "lines", lines: 1 },
          { text: "Your comparative paragraph:", type: "box" },
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Exam Preparation: Practice Question",
        instruction: "Under exam conditions (no access to notes or the text — rely on quotations from memory or approximate paraphrase), write a timed analytical response (400–500 words) to an essay question on the text you have been studying. Set a timer for 45 minutes. Begin with five minutes of planning.",
        parentTip: "Memory-based exam writing is a genuinely different skill from open-book analytical writing. It requires having deeply internalised the text — not memorised pages of quotations, but developed a genuine understanding of how the text works. Approximate paraphrase (noting the technique and approximate location of evidence) is acceptable in exam conditions.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 2 },
          { text: "5-minute plan:", type: "lines", lines: 5 },
          { text: "Your timed response:", type: "box" },
          {
            text: "After writing: what was hardest? What did you wish you had memorised more carefully?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Self-Evaluation: Extended Essay Final Draft",
        instruction: "Evaluate your completed extended analytical response using the five-criterion rubric below. Give each criterion a rating of 1 (developing), 2 (competent), or 3 (strong), and write specific justification for each rating.",
        parentTip: "Self-evaluation against criteria is excellent metacognitive practice. The key is specificity: 'I rate my argument a 2 because my thesis is clear but the final body paragraph drifts' is useful; 'I think it\u2019s good' is not. Consider evaluating it together with your student, comparing your independent ratings.",
        prompts: [
          { text: "Argument (thesis, development, coherence) — rating and justification:", type: "lines", lines: 3 },
          { text: "Evidence (specific, embedded, well-selected) — rating and justification:", type: "lines", lines: 3 },
          { text: "Analysis (explains how and why, not just what) — rating and justification:", type: "lines", lines: 3 },
          { text: "Cohesion (connected, progressive, not drifting) — rating and justification:", type: "lines", lines: 3 },
          { text: "Expression (precise, formal, varied) — rating and justification:", type: "lines", lines: 3 },
        ],
      },
      // 71
      {
        type: "fill-in-blank",
        title: "Extended Essay: Australian Curriculum Connections",
        instruction: "Fill in the blank with the correct term or phrase from the Australian Curriculum v9.0.",
        sentences: [
          { text: "At Year 9, the Australian Curriculum expects students to create _______ texts that present complex ideas with precise language and appropriate textual features.", blanks: ["analytical"] },
          { text: "Literary analysis at Year 9 involves understanding how texts use _______ for deliberate effect and how these choices position the reader.", blanks: ["language"] },
          { text: "Students are expected to develop _______ reading — moving beyond surface-level comprehension to interpretation of how texts construct meaning.", blanks: ["critical"] },
          { text: "The extended analytical response connects to the _______ strand of the Australian Curriculum English, which focuses on creating written texts.", blanks: ["Literacy"] },
          { text: "Engagement with Australian texts and voices is embedded across the Year 9 _______ strand of the curriculum.", blanks: ["Literature"] },
        ],
      },
      // 72
      {
        type: "multiple-choice",
        title: "Building Toward Senior English",
        instruction: "Choose the best answer for each question about how extended analytical writing prepares students for senior English.",
        questions: [
          {
            prompt: "How does Year 9 extended analytical response writing prepare students for senior English?",
            options: [
              "It covers exactly the same content as Year 11 and 12",
              "It builds the foundational skills — thesis construction, TEEL paragraphing, cohesion, quotation analysis — that senior analytical writing demands at greater length and complexity",
              "It replaces the need for further practice in senior years",
              "Senior English does not require analytical writing",
            ],
            answer: "It builds the foundational skills — thesis construction, TEEL paragraphing, cohesion, quotation analysis — that senior analytical writing demands at greater length and complexity",
          },
          {
            prompt: "What is the key difference between Year 9 and Year 12 analytical writing?",
            options: [
              "Year 12 essays use more vocabulary",
              "Year 12 essays are longer and require greater nuance, sophistication, and depth of analysis, but the fundamental skills are the same",
              "Year 12 essays do not need a thesis",
              "Year 12 essays are based on different texts",
            ],
            answer: "Year 12 essays are longer and require greater nuance, sophistication, and depth of analysis, but the fundamental skills are the same",
          },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Peer Review: Evaluating a Sample Paragraph",
        instruction: "Read the following student paragraph carefully and write a 100-word evaluative comment, identifying its strengths and one specific, actionable suggestion for improvement.\n\nSample: 'The author uses imagery in this part of the novel. There is a quote where it says the sky was dark. This shows that things are bad. The character feels sad. This is shown throughout the novel. In conclusion, the author uses imagery to show the theme.'",
        parentTip: "Evaluating someone else's work develops the critical skills needed to evaluate one's own. Ask your student: what would you say to this student? Would you say the same things to yourself if you wrote a paragraph like this?",
        prompts: [
          { text: "Your evaluative comment:", type: "box" },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Rewriting the Sample Paragraph",
        instruction: "Rewrite the weak sample paragraph from Activity 73 as a strong analytical paragraph. Keep the same general topic (imagery and mood) but transform it with a specific thesis connection, a specific embedded quotation, and genuine analysis of technique and effect.",
        parentTip: "Rewriting a weak paragraph is one of the most effective analytical writing development tasks there is. It requires making every decision the student would need to make in their own writing. After completing it, ask: what did you have to add or change to make it strong?",
        prompts: [
          { text: "Your rewritten paragraph:", type: "box" },
        ],
      },
      // 75
      {
        type: "tip",
        title: "Tip: Write the Conclusion First",
        content: "Counter-intuitively, writing your conclusion before you draft the body of the essay can dramatically improve coherence. The conclusion is where you articulate what the essay is ultimately arguing — the insight it has arrived at. If you write the conclusion first, you know exactly where the essay is going, and you can write each body paragraph with that destination in mind. The conclusion you draft first will change as the essay develops — that is fine. But having an intended destination prevents the most common problem in extended essays: not knowing where you are going until you get there.",
      },
      // 76
      {
        type: "open-response",
        title: "Writing the Conclusion First",
        instruction: "For your next essay (or a new question on the same text), try writing the conclusion first. Draft a 4–6 sentence conclusion before writing the introduction or any body paragraphs. Then reflect on how this changed your experience of planning.",
        parentTip: "This technique is a genuine craft tool used by experienced writers — knowing the end before you begin changes everything about the journey. It is also excellent planning practice: if a student cannot write the conclusion before the body, they may not yet know what their argument is.",
        prompts: [
          { text: "Your essay question:", type: "lines", lines: 2 },
          { text: "Conclusion (written first):", type: "box" },
          {
            text: "How did writing the conclusion first change your planning? What did it reveal about your argument?",
            type: "lines",
            lines: 4,
          },
        ],
      },
      // 77
      {
        type: "true-false",
        title: "Extended Essay: Exam Skills",
        instruction: "Mark each statement about analytical essay writing under exam conditions as true or false.",
        statements: [
          { text: "Spending 5–10 minutes planning in an exam is time well invested.", answer: true },
          { text: "In an exam, you should write down every piece of evidence you know before deciding which to use.", answer: false },
          { text: "Approximate paraphrase of a quotation is acceptable when the exact words are not remembered.", answer: true },
          { text: "An essay that maintains a clear, specific argument across four paragraphs will generally outperform one that covers more points superficially.", answer: true },
          { text: "In an exam essay, it is better to write a vague, general thesis than no thesis at all.", answer: false },
          { text: "Revision in an exam (re-reading, improving) is worth doing even if you only have five minutes.", answer: true },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Annotating Your Own Essay",
        instruction: "Print or write out your completed extended essay. Annotate it as if you were an examiner — highlight the thesis, label each topic sentence, circle any drift or repetition, note where analysis is strong and where it is thin. Then write a 100-word evaluative comment on your own essay.",
        parentTip: "This activity develops the ability to read one's own work with critical distance — one of the most important and difficult skills for a developing writer. The student must simultaneously be the writer who made those choices and the reader who evaluates them.",
        prompts: [
          { text: "Your self-evaluative comment:", type: "box" },
          {
            text: "Based on your annotation, what is the single most important revision you should make?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 79
      {
        type: "sorting",
        title: "Extended Essay Skills: Year 9 to Senior",
        instruction: "Sort each skill into 'Developed at Year 9' or 'Extended further at senior level'.",
        columns: ["Developed at Year 9", "Extended further at senior level"],
        items: [
          { label: "Writing a specific, arguable thesis" },
          { label: "Nuanced comparative analysis of multiple texts" },
          { label: "TEEL paragraph structure" },
          { label: "Sustained argument across 1,500+ word responses" },
          { label: "Integrating embedded quotations" },
          { label: "Engagement with multiple critical perspectives simultaneously" },
          { label: "Writing a cohesive introduction and conclusion" },
          { label: "Extended research essays drawing on academic secondary sources" },
          { label: "Using connective phrases between paragraphs" },
          { label: "Exam essays written under strict time conditions" },
        ],
      },
      // 80
      {
        type: "spark",
        title: "Spark: The Essay as Intellectual Life",
        content: "The analytical essay is not just a school task. It is a form — one of the most demanding and satisfying forms of sustained thinking available to you. Every time you write an analytical essay with genuine care, you practise: holding a complex idea in mind across many paragraphs; finding the language to make an insight visible to someone else; testing your own understanding against the demands of evidence and logic. These are the skills of intellectual life, not just academic performance. The writers, thinkers, lawyers, scientists, and citizens who change things are almost always people who learned, somewhere, to make and sustain an argument with rigour and clarity. You are practising something that matters.",
      },
      // 81
      {
        type: "open-response",
        title: "Final Essay: Planning and Draft",
        instruction: "Plan and draft a complete extended analytical response (600–800 words) on the text you have been studying throughout this worksheet. This is your best analytical work — bring everything together: a specific thesis, five developed paragraphs, sophisticated quotation integration, cohesive connective phrases, and an arrival-point conclusion.",
        parentTip: "This final essay is the capstone of the worksheet. Give your student the time and space to do it well — suggest working across two or three sessions if needed. Read the final draft together and give specific, honest feedback. If possible, compare it to the first paragraph or plan they wrote at the start of the worksheet: the growth in analytical skill should be visible.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 2 },
          { text: "Brief plan:", type: "lines", lines: 8 },
          { text: "Full essay draft:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Final Essay: Comprehensive Revision",
        instruction: "Revise your final essay draft from Activity 81 through three passes: Pass 1 — argument (thesis, topic sentences, logic); Pass 2 — evidence (specific, embedded, analysed); Pass 3 — cohesion and expression (connecting phrases, link sentences, formal language). Write the revised version.",
        parentTip: "Three-pass revision is a professional writing technique. Each pass has a specific focus, which prevents the common problem of trying to fix everything at once and either overlooking things or feeling overwhelmed. Encourage your student to take a break between drafting and the first revision pass — distance improves critical reading.",
        prompts: [
          { text: "Revised essay:", type: "box" },
          {
            text: "What was improved in each pass?",
            type: "lines",
            lines: 5,
          },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Reading Your Essay Aloud",
        instruction: "Read your revised final essay aloud from start to finish. Mark any place where you stumble, re-read, or where something does not sound right. After reading, list five specific changes — word-level, sentence-level, or structural — suggested by the read-aloud.",
        parentTip: "Reading aloud is one of the most reliable revision techniques because it engages the ear as well as the eye. Awkward phrasing, repeated words, clunky transitions, and unclear sentences that the eye skips over are almost always caught by the ear.",
        prompts: [
          { text: "Five changes suggested by the read-aloud:", type: "lines", lines: 8 },
        ],
      },
      // 84
      {
        type: "fill-in-blank",
        title: "Final Vocabulary and Craft Review",
        instruction: "Fill in the blank with the correct term or phrase to complete each statement about extended analytical writing.",
        sentences: [
          { text: "A thesis that is _______ is one that not all reasonable readers would automatically agree with — it takes a position.", blanks: ["arguable"] },
          { text: "The _______ sentence at the end of each body paragraph connects the paragraph's argument back to the central thesis.", blanks: ["link"] },
          { text: "When the essay loses its connection to the thesis across later paragraphs, this is known as _______.", blanks: ["drift"] },
          { text: "An essay that uses evidence as a launching pad for analysis demonstrates what examiners call analytical _______.", blanks: ["sophistication"] },
          { text: "A conclusion that _______ — drawing the essay's insights together into a fuller understanding — is more sophisticated than one that simply summarises.", blanks: ["synthesises"] },
        ],
      },
      // 85
      {
        type: "multiple-choice",
        title: "Assessing Your Own Essay",
        instruction: "Choose the best action in each scenario.",
        questions: [
          {
            prompt: "You re-read your essay and realise your paragraph 2 makes essentially the same argument as paragraph 1. You should:",
            options: [
              "Keep both paragraphs — repetition shows emphasis",
              "Delete paragraph 2 and write a paragraph that makes a genuinely different argument",
              "Change the topic sentence of paragraph 2 but keep the same evidence and analysis",
              "Leave it for the reader to see the subtle difference",
            ],
            answer: "Delete paragraph 2 and write a paragraph that makes a genuinely different argument",
          },
          {
            prompt: "Your conclusion currently restates the introduction almost word for word. You should:",
            options: [
              "Add 'In conclusion...' to signal it is a conclusion",
              "Rethink the conclusion entirely — ask what insight the body paragraphs have established that the introduction could not have stated",
              "Shorten the conclusion to make the repetition less obvious",
              "Move the conclusion to the beginning",
            ],
            answer: "Rethink the conclusion entirely — ask what insight the body paragraphs have established that the introduction could not have stated",
          },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Portfolio: Best Analytical Paragraph",
        instruction: "From all the analytical writing you have done in this worksheet, choose the single paragraph you are most proud of. Copy it here, and write a 100-word self-evaluation explaining what makes it strong and what you would still want to improve.",
        parentTip: "Portfolio curation — selecting your best work and reflecting on why it is your best — is both a practical skill (needed for senior school portfolios) and a metacognitive one. It requires judgement about quality, not just completion.",
        prompts: [
          { text: "Your best paragraph:", type: "box" },
          { text: "Your self-evaluation:", type: "box" },
        ],
      },
      // 87
      {
        type: "home-activity",
        title: "Beyond the Worksheet: Extended Writing in the World",
        instruction: "Choose one or more activities to extend your analytical writing skills beyond this worksheet.",
        parentTip: "Extended analytical writing develops through reading widely, writing regularly, and receiving honest feedback. These activities connect the skills practised in the worksheet to the broader intellectual life that makes writing meaningful.",
        suggestions: [
          "Read the introduction of a published academic essay (from JSTOR, a literary journal, or a reputable magazine like The Monthly or Overland). Identify the thesis and annotate how the introduction moves from broad context to specific argument.",
          "Enter a school or state-level essay writing competition. The National History Challenge and various subject-specific competitions accept Year 9 entries.",
          "Read a chapter from a book of literary criticism on a text you are studying. Note: how does the critic construct an argument? How do they handle quotations? What techniques do they use that you could adopt?",
          "Write a second extended analytical response on a different text or a different question — applying the same skills to new material. This is how analytical writing ability genuinely develops.",
          "Find an annotated model essay and compare its annotations to your own analytical choices. What did the model do that you could adopt?",
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Reflection: Your Development as an Analytical Writer",
        instruction: "Write a reflective piece (200–250 words) on your development as an analytical essay writer across this worksheet. What specific skills have you developed? What surprised you? What do you now understand about analytical writing that you did not understand at the beginning?",
        parentTip: "This final reflection should be specific and honest. Vague praise ('I got better') is less useful than specific identification ('I now understand that analysis means explaining HOW and WHY, not just WHAT — and I can see this in my paragraph revision'). Encourage the latter.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Your Essay Goals for the Next Three Months",
        instruction: "Write a specific plan (100–150 words) for developing your analytical essay skills over the next three months. Include: three skills to focus on, how you will practise each, and how you will know if you have improved.",
        parentTip: "Specific, time-bound goals are more effective than general intentions. Help your student identify one skill they can work on immediately — something that appears in their self-assessment as a current weakness and that they can address in the next essay they write.",
        prompts: [
          { text: "Your development plan:", type: "box" },
        ],
      },
      // 90
      {
        type: "tip",
        title: "Tip: Read More Than You Write",
        content: "The single best investment you can make in your analytical writing is reading — widely, and with genuine attention. Read the texts you are studying closely. Read literary criticism. Read quality journalism and essays that argue carefully with evidence. Read the introductions to academic books on your subject. The patterns of analytical argumentation, the ways that skilled writers introduce and analyse evidence, the rhythms of sustained argument — all of this enters your writing unconsciously through sustained reading. You cannot write what you have not read. Read more than you think you need to.",
      },
      // 91
      {
        type: "true-false",
        title: "Final Comprehensive Review: Extended Analytical Response",
        instruction: "A final review of all key concepts. Mark each statement as true or false.",
        statements: [
          { text: "An extended analytical response at Year 9 is typically 600–900 words.", answer: true },
          { text: "The thesis should be written after completing the body paragraphs, based on what you discovered.", answer: false },
          { text: "Writing the conclusion first can help maintain a clear sense of where the essay is going.", answer: true },
          { text: "Each body paragraph should make the same point as the others, with different evidence.", answer: false },
          { text: "A 'cohesive' essay is one where all parts connect to the thesis and paragraphs link to each other.", answer: true },
          { text: "Reading aloud is a useful final revision technique because the ear catches what the eye misses.", answer: true },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Final Essay: Polished Version",
        instruction: "Produce the final polished version of your extended analytical response. Incorporate all revisions from Activities 82 and 83. This is your best analytical work at this point in your development.",
        parentTip: "The polished final version is the student's demonstrably best effort — incorporating all revision work done in the worksheet. Read it together as a final activity. Celebrate what has been achieved, and identify one or two things to continue working on. Both matter.",
        prompts: [
          { text: "Your polished final essay:", type: "box" },
        ],
      },
      // 93
      {
        type: "matching",
        title: "Extended Essay: Connecting All Skills",
        instruction: "Match each extended essay skill to the worksheet section where it was primarily developed.",
        left: [
          "Writing a specific, arguable thesis",
          "TEEL paragraph structure",
          "Recognising and fixing drift",
          "Integrating evidence smoothly",
          "Writing a synthesising conclusion",
        ],
        right: [
          "Activities 31–32 (identifying and rewriting passages that drift from the thesis)",
          "Activities 44–45 (sophisticated conclusions that arrive rather than repeat)",
          "Activities 4–5 (the TEEL elements and their functions)",
          "Activities 7–8 (distinguishing strong from weak theses)",
          "Activities 26–28 (embedding quotations and practising analytical vocabulary)",
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Letter to a Future Essay Writer",
        instruction: "Write a letter (150–200 words) to a student who is about to start learning to write extended analytical responses for the first time. What do you wish someone had told you? What is the single most important thing you have learned?",
        parentTip: "Writing advice to a hypothetical beginner consolidates learning through the act of teaching. It also reveals what the student genuinely understood — the things they articulate clearly are things they have truly internalised.",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 95
      {
        type: "multiple-choice",
        title: "Looking Forward: Senior Analytical Writing",
        instruction: "Choose the best answer for each question about what analytical essay writing will look like at senior level.",
        questions: [
          {
            prompt: "At Year 11 and 12, analytical essays are typically:",
            options: [
              "Shorter and simpler than Year 9 essays",
              "Similar in structure but longer, with greater demands for nuance, depth, and independent critical reading",
              "Written in a completely different form from Year 9 essays",
              "No longer required — senior English focuses only on creative writing",
            ],
            answer: "Similar in structure but longer, with greater demands for nuance, depth, and independent critical reading",
          },
          {
            prompt: "Which Year 9 skill is most directly transferable to senior analytical writing?",
            options: [
              "Being able to quote long passages from memory",
              "Knowing many facts about the author's life",
              "Constructing a specific thesis and sustaining a connected, developed argument across multiple paragraphs",
              "Writing in exactly five paragraphs",
            ],
            answer: "Constructing a specific thesis and sustaining a connected, developed argument across multiple paragraphs",
          },
        ],
      },
      // 96
      {
        type: "fill-in-blank",
        title: "Glossary: Extended Essay Terms",
        instruction: "Complete the glossary by filling in the missing definitions.",
        sentences: [
          { text: "Thesis: the central _______ claim of an essay — the argument that all body paragraphs support.", blanks: ["arguable"] },
          { text: "Cohesion: the quality of an essay _______ together as a unified argument.", blanks: ["holding"] },
          { text: "Drift: when later paragraphs _______ connection to the central thesis.", blanks: ["lose"] },
          { text: "Synthesis: pulling together the essay's insights into a _______ understanding in the conclusion.", blanks: ["fuller"] },
          { text: "Analysis: explaining _______ a technique works and _______ it matters for the text's meaning.", blanks: ["how", "why"] },
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Your Analytical Writing Identity",
        instruction: "Write a short statement (100–150 words) about your identity as an analytical essay writer. What kind of analytical writer are you at your best? What are your genuine strengths? What makes your essays distinctive? This is not a task about humility — write about what you do well.",
        parentTip: "Knowing your own strengths as a writer is as important as knowing your weaknesses. A student who knows their own strengths and specific areas for growth can deploy those strengths and monitor for that specific weakness. Self-knowledge is a writing tool.",
        prompts: [
          { text: "Your analytical writing identity statement:", type: "box" },
        ],
      },
      // 98
      {
        type: "home-activity",
        title: "Ongoing: The Essay Writing Practice",
        instruction: "Extended analytical writing develops through sustained practice. Choose one of the following commitments and work toward it over the coming months.",
        parentTip: "The analytical essay is one of the most demanding and rewarding forms of sustained thinking. A student who writes one extended analytical essay per month, receives honest feedback, and revises deliberately will develop extraordinary capacity. The skills built now will serve them throughout senior school, university, and professional life.",
        suggestions: [
          "Write one extended analytical response per month on the text you are currently studying. Focus on a different aspect of the text each time. Keep them in a portfolio and read back over earlier essays periodically.",
          "Find a writing mentor — an older student, a teacher, or a parent with a background in humanities — who will read and give honest feedback on one analytical essay per term.",
          "Study a published model essay in detail. Annotate how it constructs its argument. Then try to write a paragraph modelled on its analytical technique.",
          "Enter an essay writing competition — state-based competitions and various subject-specific competitions accept Year 9 entries and provide valuable structured assessment.",
          "Read literary criticism — a chapter from a book of essays on a text you love. Notice: how does the critic structure their argument? What do they notice that you did not? What would you argue differently?",
        ],
      },
      // 99
      {
        type: "open-response",
        title: "The Essay I Want to Write",
        instruction: "Describe the essay you most want to write — not the essay you have been assigned, but the essay you would choose. What text would you choose? What question would you ask of it? What argument would you want to make? Write 150–200 words describing this ideal essay.",
        parentTip: "This final open-ended reflection is about ownership — the student choosing their own intellectual territory. The most powerful analytical writing happens when the writer genuinely cares about the question. If this ideal essay is close enough to the curriculum, encourage your student to write it.",
        prompts: [
          { text: "The essay I want to write:", type: "box" },
        ],
      },
      // 100
      {
        type: "spark",
        title: "Spark: Your Argument, Your Voice",
        content: "The extended analytical essay is, at its best, a place where your genuine thinking meets the text. Not a formula, not a performance of academic compliance — but a real encounter between a reader and a piece of writing, mediated through careful language. Every analytical skill you have developed in this worksheet — the specific thesis, the embedded quotation, the TEEL paragraph, the cohesive conclusion — is in service of this: making your thinking visible, shareable, and persuasive. The argument is yours. The voice is yours. The essay belongs to you.",
      },
    ],
    nextSteps: [
      "Complete the full draft of your extended analytical response and submit it for feedback.",
      "Revisit the Critical Literacy worksheet to apply representation analysis in your extended response.",
      "Write one extended analytical essay per month and keep them in a portfolio to track your development.",
      "Read a chapter of published literary criticism on a text you are studying and annotate the analytical techniques used.",
    ],
  },
];

export function getYear9EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year9EnglishWorksheets.find((ws) => ws.slug === slug);
}
