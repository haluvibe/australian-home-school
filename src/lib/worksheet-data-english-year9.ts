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
