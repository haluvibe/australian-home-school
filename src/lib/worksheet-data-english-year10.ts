import type { WorksheetItem } from "./worksheet-types";

export const year10EnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Ideology & Representation ──────────────────────────────────────────
  {
    slug: "ideology-and-representation",
    title: "Ideology & Representation in Texts",
    strand: "Literature",
    description:
      "Explore how texts construct representations of people, places and events through ideological lenses — and what those choices reveal about the world the text was made in.",
    learningGuide: {
      concept:
        "Every text reflects a worldview. The choices a writer makes about who is centred, whose voice is heard, and what is treated as 'normal' are ideological choices — even when they feel invisible.",
      activation:
        "Ask: think of a film or book where a group of people is always shown in a particular way. What assumptions did the story seem to make about them? Where might those assumptions come from?",
      check:
        "Can your student name at least two specific textual choices (a word, an image description, a structural decision) and explain the ideological effect of each?",
    },
    lesson: {
      title: "Who Does the Text Think We Are?",
      objective:
        "Identify how ideology shapes representation in texts, and analyse specific language and structural choices that position the reader.",
      materials: [
        "A short news article or advertisement (printed or on screen)",
        "A novel, film or short story your student has recently read or watched",
        "Paper and pen",
      ],
      intro: {
        title: "Starting with a Question",
        script:
          "Here is something worth thinking about together: every text was made by someone, somewhere, at a particular moment in history. That person — or team of people — had beliefs about how the world works, who matters, and what counts as normal. Those beliefs shape every choice in the text, from the words they pick to whose perspective we follow. We call this the ideology of a text. Ideology does not always announce itself. It often feels like common sense. That is actually what makes it powerful. Today we are going to practise noticing it.",
        action:
          "Look at a print advertisement or news photo together. Before analysing it, ask: who is in this image? Who is not? Whose perspective does the camera favour? Spend two minutes just noticing, without judging yet.",
      },
      mainActivity: {
        title: "Unpacking Representation",
        script:
          "Let us use the term 'representation' carefully. It does not just mean 'a picture of' something — it means the way something is constructed and presented. The same event represented by two different journalists will produce two different texts, because each writer selects details, uses particular language, and frames the story differently. Those framing choices tell us something about what the writer values, what audience they imagine, and what they take for granted. Try to find two examples — from news, advertising, or a set text — where the same subject is represented quite differently. What does each text seem to assume?",
        action:
          "Discuss: read two short extracts about the same topic (e.g., two reports of the same news event). Together, list three specific differences in how each text represents the subject. Identify: word choice, who speaks or is quoted, what details are included or left out.",
      },
      wrapUp: {
        title: "The Invisible Assumptions",
        script:
          "One really interesting test for ideology is to ask: what does this text treat as so obvious it does not need to be said? Those invisible assumptions are often where ideology is most powerful. I am curious what you found — what was taken for granted in the texts you looked at?",
        action:
          "Student shares one 'invisible assumption' they identified. Discuss whether this assumption would feel obvious to all audiences, or only to some.",
      },
      parentTip:
        "You do not need to be an expert in critical theory for this lesson. Your role is to be a genuine co-investigator. If your student identifies something you had not noticed, follow that thread. The goal is to build the habit of asking 'who made this, for whom, and what does it assume?'",
      extension:
        "Ask your student to find a text from a different decade or culture that represents a group differently. What has changed? What has stayed the same? Write a paragraph comparing the two representations.",
      resources: [
        {
          title: "CrashCourse English Literature: Context",
          url: "https://www.youtube.com/watch?v=MSYw502dJNY",
          description:
            "A short, engaging introduction to how historical and cultural context shapes literary texts.",
        },
        {
          title: "ReadWriteThink: Analysing Media Texts",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/beyond-the-text-exploring-media",
          description:
            "Classroom strategies for examining how media texts construct meaning through selection and omission.",
        },
        {
          title: "Purdue OWL: Critical Reading",
          url: "https://owl.purdue.edu/owl/general_writing/reading_and_writing/critical_reading1.html",
          description:
            "A guide to reading texts critically — asking not just what a text says, but how and why.",
        },
      ],
    },
    activities: [
      // ── Foundational (1–20) ──
      {
        type: "open-response" as const,
        title: "Defining Key Terms",
        instruction:
          "In your own words, define each of the following terms. Use an example for each.",
        prompts: [
          { text: "What is 'ideology' in the context of analysing texts?", type: "lines" as const, lines: 3 },
          { text: "What do we mean by 'representation' in English? How is it different from just 'describing' something?", type: "lines" as const, lines: 3 },
          { text: "What is a 'dominant reading' of a text? What might cause different readers to resist it?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Concept to the Example",
        instruction: "Draw a line connecting each analytical concept on the left with the textual example that best illustrates it.",
        left: [
          "Omission (what is left out)",
          "Positioning (whose perspective we adopt)",
          "Normalisation (what is treated as default)",
          "Stereotyping (a simplified, repeated representation)",
          "Counter-representation (challenging a dominant view)",
        ],
        right: [
          "A war film follows only the soldiers of one nation, never showing civilian casualties",
          "A novel presents a woman of colour as its complex, flawed protagonist rather than a supporting character",
          "A news report quotes only government officials and not affected community members",
          "An advertisement assumes its audience is a two-parent, home-owning family",
          "A character from a particular ethnicity is always the comic relief and never the hero",
        ],
      },
      {
        type: "true-false" as const,
        title: "Ideology: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "These statements surface common misconceptions — discuss any that spark disagreement.",
        statements: [
          { text: "Ideology in texts is always deliberately and consciously constructed by the author.", answer: false },
          { text: "A text can reflect the dominant ideology of its time even when the author intends to challenge it.", answer: true },
          { text: "Only political texts contain ideology.", answer: false },
          { text: "Readers from different backgrounds may produce different readings of the same text.", answer: true },
          { text: "Representation is simply a neutral description of people, places or events.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Key Vocabulary: Fill the Gap",
        instruction: "Complete each sentence with the correct term from the word bank: [ideology, representation, positioning, omission, normalisation, hegemony, discourse, stereotype].",
        parentTip: "Read each sentence aloud before writing — the context often makes the answer clear.",
        sentences: [
          { text: "The way a group of people is constructed and presented in a text is called ___.", blanks: ["representation"] },
          { text: "When a text makes one set of values seem like common sense or 'just the way things are', it is practising ___.", blanks: ["normalisation"] },
          { text: "A system of dominant ideas that shapes how a society thinks and what it takes for granted is called ___.", blanks: ["ideology"] },
          { text: "What a text deliberately leaves out is referred to as ___.", blanks: ["omission"] },
          { text: "A simplified, fixed image of a group that is repeated across many texts is called a ___.", blanks: ["stereotype"] },
          { text: "The term ___ refers to the way a text places the reader in relation to the subject — deciding whose perspective we adopt.", blanks: ["positioning"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Ideological Analysis: Choose the Best Answer",
        instruction: "Select the most accurate answer for each question.",
        questions: [
          {
            prompt: "Which of the following best describes the term 'hegemony'?",
            options: [
              "The use of violence to maintain political control",
              "The way dominant ideas are maintained through cultural consent rather than force",
              "A type of literary device used in political speeches",
              "A method of close reading developed in the 20th century",
            ],
            answer: "The way dominant ideas are maintained through cultural consent rather than force",
          },
          {
            prompt: "When a text is described as having a 'preferred reading', this means:",
            options: [
              "The author has stated publicly what the text means",
              "Most readers find the text easy and enjoyable",
              "The text is constructed to guide readers towards a particular interpretation",
              "The reading has been approved by educational authorities",
            ],
            answer: "The text is constructed to guide readers towards a particular interpretation",
          },
          {
            prompt: "Which of these would be an example of 'counter-representation'?",
            options: [
              "A film that repeatedly shows a cultural group as criminals",
              "A novel written by a member of a marginalised community that presents that community with full complexity",
              "A news report that quotes government officials without question",
              "An advertisement that targets a mainstream demographic",
            ],
            answer: "A novel written by a member of a marginalised community that presents that community with full complexity",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Analysis: A Short Extract",
        instruction:
          "Read this extract from a fictional news report and answer the questions below.\n\n'Residents of the affluent suburb of Bayside were alarmed yesterday when a group of youths was seen loitering near the shopping precinct. Police were called and the situation was resolved without incident.'",
        parentTip: "Encourage your student to annotate the extract before writing — underline loaded words and bracket absent voices.",
        prompts: [
          { text: "What assumptions does the word 'loitering' make about the youths' behaviour? What alternative word could have been used, and what effect would it have?", type: "lines" as const, lines: 4 },
          { text: "Whose perspective does this report adopt? Whose voice is absent?", type: "lines" as const, lines: 3 },
          { text: "Rewrite the extract from a different ideological position. Change at least four specific word or structural choices. Then explain what changed and why.", type: "box" as const },
        ],
      },
      {
        type: "sorting" as const,
        title: "Contexts of Production and Reception",
        instruction:
          "Sort each factor into the column where it best belongs — 'Context of Production' (influences on how the text was made) or 'Context of Reception' (influences on how the text is read or viewed).",
        columns: ["Context of Production", "Context of Reception"],
        items: [
          { label: "The political climate at the time the text was written" },
          { label: "The reader's personal experiences and cultural background" },
          { label: "The publisher's commercial interests" },
          { label: "The historical period when the text is being studied" },
          { label: "The author's biography and social position" },
          { label: "Classroom or academic framing of the text" },
          { label: "Censorship laws in the country of publication" },
          { label: "Whether the reader belongs to a group represented in the text" },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Word Carries Ideological Weight?",
        instruction: "Circle the word in each pair that carries stronger ideological assumptions.",
        questions: [
          { prompt: "To describe a group of people gathering in a public space:", options: ["loitering", "gathering"] },
          { prompt: "To describe someone who crosses a border without documentation:", options: ["illegal alien", "undocumented person"] },
          { prompt: "To describe someone who fights against an occupying government:", options: ["terrorist", "freedom fighter"] },
          { prompt: "To describe a company reducing its workforce:", options: ["firing workers", "rightsizing"] },
          { prompt: "To describe welfare payments to low-income families:", options: ["handouts", "support payments"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Invisible Made Visible",
        content: "The most powerful ideological moves in texts are the ones that feel invisible — the assumptions so embedded they seem like 'common sense'. When you analyse ideology, train yourself to ask: who does this text treat as the default? Whose perspective is the 'normal' one? What would have to be different for this text to feel unfamiliar?",
      },
      {
        type: "open-response" as const,
        title: "Reading Against the Grain",
        instruction: "Choose a text you know well — a novel, film, advertisement, or news article. Answer the questions below.",
        parentTip: "A text your student has previously enjoyed is ideal — analysing something loved produces richer critical thinking than a cold exercise.",
        prompts: [
          { text: "Describe how a particular group is represented in this text.", type: "lines" as const, lines: 3 },
          { text: "What does the text seem to assume about this group? What values underlie the representation?", type: "lines" as const, lines: 3 },
          { text: "What would a reader who belongs to that group notice that an outsider might not?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "matching" as const,
        title: "Theorists and Their Ideas",
        instruction: "Match each thinker on the left with the idea most closely associated with them.",
        left: [
          "Stuart Hall",
          "Antonio Gramsci",
          "Roland Barthes",
          "bell hooks",
          "Michel Foucault",
        ],
        right: [
          "Hegemony — the maintenance of cultural dominance through consent",
          "The 'male gaze' — how dominant looking structures both film and society",
          "Encoding/decoding — texts are encoded with preferred meanings that readers may accept, negotiate or resist",
          "Discourse — the way knowledge and power are linked through systems of language",
          "Myth — the way ideology naturalises cultural constructs as universal truths",
        ],
      },
      {
        type: "true-false" as const,
        title: "Representation: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "These statements push into nuance — there are no cheap answers here.",
        statements: [
          { text: "A text can represent a group fairly even if that group had no involvement in making it.", answer: true },
          { text: "Positive stereotypes are not ideologically problematic.", answer: false },
          { text: "The absence of a group from a text is itself a form of representation.", answer: true },
          { text: "The context in which a text is received does not change its ideological meaning.", answer: false },
          { text: "Language choices in a text are always neutral and descriptive.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Encoding and Decoding",
        instruction: "Complete the paragraph using these terms: [encoding, decoding, preferred reading, negotiated reading, oppositional reading].",
        sentences: [
          { text: "Stuart Hall argued that texts are produced through a process of ___, in which producers embed meanings and values.", blanks: ["encoding"] },
          { text: "When audiences receive a text, they engage in ___, interpreting it through their own cultural frameworks.", blanks: ["decoding"] },
          { text: "When a reader accepts the intended meaning of a text, they are producing a ___.", blanks: ["preferred reading"] },
          { text: "When a reader partly accepts but also questions the text's values, they produce a ___.", blanks: ["negotiated reading"] },
          { text: "When a reader actively rejects the values embedded in the text, they produce an ___.", blanks: ["oppositional reading"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing an Advertisement",
        instruction: "Think about a print or television advertisement you have seen recently. Answer the questions below.",
        parentTip: "Looking at an advertisement together before the student writes independently often unlocks richer observations.",
        prompts: [
          { text: "Who is shown in the advertisement? Who is not shown? What does this inclusion/exclusion suggest?", type: "lines" as const, lines: 3 },
          { text: "What values or lifestyle does the advertisement appear to celebrate? What ideology does this reflect?", type: "lines" as const, lines: 3 },
          { text: "Who is the intended audience? How do you know?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Discourse and Power",
        instruction: "Select the best answer for each question.",
        questions: [
          {
            prompt: "In Foucault's sense, a 'discourse' is best understood as:",
            options: [
              "A formal speech given in parliament",
              "A system of language, knowledge and power that constructs what can be thought or said about a topic",
              "A type of literary analysis focused on political texts",
              "The way characters speak to each other in a novel",
            ],
            answer: "A system of language, knowledge and power that constructs what can be thought or said about a topic",
          },
          {
            prompt: "Which example best illustrates how discourse shapes representation?",
            options: [
              "A character in a novel uses formal language",
              "Medical discourse in the 19th century classified certain behaviours as illnesses, shaping how those people were represented and treated",
              "A journalist uses short sentences to create urgency",
              "A filmmaker uses close-up shots to create intimacy",
            ],
            answer: "Medical discourse in the 19th century classified certain behaviours as illnesses, shaping how those people were represented and treated",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Moving Beyond 'The Author Intended'",
        content: "Be careful with claims about what an author 'intended'. Texts often reproduce ideologies their authors were not consciously aware of — and readers bring meanings that authors could not have foreseen. Strong ideological analysis focuses on what the text does, not just what the author meant.",
      },
      {
        type: "open-response" as const,
        title: "Two Headlines, One Event",
        instruction: "Below are two fictional headlines about the same event. Analyse the ideological differences between them.",
        parentTip: "Ask your student to read the headlines aloud before analysing — hearing them often makes the difference in tone more apparent.",
        prompts: [
          { text: "Headline A: 'Protesters Disrupt City Centre Traffic'\nHeadline B: 'Hundreds March for Climate Justice'\n\nWhat specific word choices reveal different ideological positions?", type: "lines" as const, lines: 4 },
          { text: "What does each headline assume about the protesters and their legitimacy?", type: "lines" as const, lines: 3 },
          { text: "Write a third headline that attempts to describe the event without obvious ideological framing. Is it possible to be completely neutral?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Whose Story Is This?",
        instruction: "Sort each narrative choice into 'Centres the dominant perspective' or 'Challenges or decentres the dominant perspective'.",
        parentTip: "This sorting activity works well as a discussion — there may be cases where your student disagrees with a suggested answer.",
        columns: ["Centres the dominant perspective", "Challenges or decentres the dominant perspective"],
        items: [
          { label: "A colonial history written entirely from the coloniser's point of view" },
          { label: "A novel narrated by an Indigenous character recounting colonisation" },
          { label: "A war film that follows only the 'winning' side's soldiers" },
          { label: "A documentary that gives primary voice to refugees describing their experience" },
          { label: "A news report about poverty that interviews economists but not people living in poverty" },
          { label: "A biography of a working-class woman that centres her own words and perspective" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Stuart Hall's Encoding/Decoding",
        instruction: "Apply Hall's encoding/decoding model to a text of your choice.",
        prompts: [
          { text: "Name the text. What preferred (encoded) reading does it seem to invite?", type: "lines" as const, lines: 3 },
          { text: "Describe a negotiated reading — how might a viewer partly accept and partly question the text's values?", type: "lines" as const, lines: 3 },
          { text: "Describe an oppositional reading — from what perspective might a reader reject the text's preferred meaning entirely?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Representation in Your World",
        instruction: "Choose one of the following activities to explore representation outside the classroom.",
        suggestions: [
          "Watch the first ten minutes of a film or TV episode with the sound off. Focus only on who is shown, where they are placed in the frame, and what the camera lingers on. Write half a page about what the visual choices seem to assume about who matters in this story.",
          "Find a news article about a topic you know well from personal experience. Write a comparison: what does the article say, and what does your own experience of the topic add or contradict?",
          "Look at the covers of five books in a bookshop or library. Who is represented on each cover? What patterns do you notice across the whole selection?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: What Would It Look Like to Tell It Differently?",
        content: "Pick a story you know well — a film, a novel, a news event. Imagine it told from the point of view of the group that is currently peripheral or absent. How would the plot change? What would become visible that is currently invisible? What does this thought experiment reveal about the original text?",
      },
      // ── Developing (21–50) ──
      {
        type: "open-response" as const,
        title: "Representation and Gender",
        instruction: "Choose a text you have studied or know well and analyse how gender is represented.",
        parentTip: "Encourage your student to move beyond 'women are represented badly' to specific textual evidence and nuanced claims.",
        prompts: [
          { text: "How are male and female characters differently positioned in this text? Provide two specific examples.", type: "box" as const },
          { text: "What assumptions about gender roles does the text seem to take for granted?", type: "lines" as const, lines: 3 },
          { text: "Is there any moment in the text where gender expectations are complicated or challenged? Explain.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "The Language of Bias",
        instruction: "Complete each sentence with the most ideologically loaded term from the pair provided.",
        parentTip: "After completing the activity, discuss: is using a loaded term always wrong? When might a writer choose one deliberately?",
        sentences: [
          { text: "The journalist described the protesters as ___ (mob / crowd) blocking traffic.", blanks: ["mob"] },
          { text: "The politician called the policy a ___ (reform / overhaul), suggesting radical change.", blanks: ["overhaul"] },
          { text: "The report referred to the country's economic ___ (collapse / adjustment).", blanks: ["collapse"] },
          { text: "The activist described the law as a ___ (setback / compromise) for civil rights.", blanks: ["setback"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Ideology in Advertising",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "When an advertisement shows a happy nuclear family enjoying a product, the ideology it most clearly reflects is:",
            options: [
              "Environmentalism — the importance of family connection with nature",
              "Consumerism — the idea that products can deliver happiness and belonging",
              "Feminism — the equal participation of both parents in domestic life",
              "Multiculturalism — the inclusion of diverse family structures",
            ],
            answer: "Consumerism — the idea that products can deliver happiness and belonging",
          },
          {
            prompt: "A luxury car advertisement that associates the product with freedom and masculine achievement primarily appeals to which ideology?",
            options: [
              "Collectivism and shared responsibility",
              "Individualism and patriarchal values",
              "Environmental sustainability",
              "Socialist equality",
            ],
            answer: "Individualism and patriarchal values",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Intersectionality in Representation",
        instruction: "The concept of intersectionality (developed by Kimberlé Crenshaw) argues that identities such as race, gender and class interact to create overlapping experiences of privilege and disadvantage.",
        parentTip: "If your student is unfamiliar with intersectionality, spend a few minutes discussing an example before they write.",
        prompts: [
          { text: "In a text you have studied, identify a character who belongs to more than one marginalised group. How is their representation shaped by the intersection of those identities?", type: "box" as const },
          { text: "How might a single-axis analysis (focusing only on race, or only on gender) miss something important about this representation?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Representation of Class",
        instruction: "Sort each textual example into the most appropriate column based on how class is represented.",
        columns: ["Sympathetic representation of working class", "Negative or demeaning representation", "Upper class as aspirational/powerful", "Class complexity — multiple dimensions shown"],
        items: [
          { label: "A film shows working-class characters as heroic, community-minded people struggling against systemic neglect" },
          { label: "A reality TV show mocks participants for their accents, taste and education levels" },
          { label: "A drama series follows a wealthy family whose privilege is presented as sophisticated and desirable" },
          { label: "A novel shows a working-class protagonist whose ambitions are complex and whose community has both strengths and flaws" },
          { label: "A news segment refers to people in public housing as a social burden" },
          { label: "An advertisement uses working-class imagery of honest labour to sell a product to upper-middle-class buyers" },
        ],
      },
      {
        type: "open-response" as const,
        title: "The 'Invisible' Ideology of Children's Texts",
        instruction: "Children's literature and media often seem ideologically neutral — but they are among the most powerful vehicles for normalising particular values.",
        prompts: [
          { text: "Choose a children's book, film or TV show from your own childhood. What values does it appear to celebrate? What does it treat as normal?", type: "box" as const },
          { text: "Is there any group that is absent or represented negatively in this text? What might a child absorb from this?", type: "lines" as const, lines: 4 },
          { text: "How might the text be revised to reflect a broader range of representations? What specific changes would you make?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Race and Representation",
        instruction: "Mark each statement as true or false.",
        parentTip: "These statements draw on critical race theory — approach them as a thinking exercise, not a quiz.",
        statements: [
          { text: "Colourblindness — treating race as irrelevant — always eliminates racism in representation.", answer: false },
          { text: "A text written by a person of colour automatically avoids racist representation.", answer: false },
          { text: "Tokenism occurs when a single representative of a group is included without depth or complexity.", answer: true },
          { text: "The 'Magical Negro' trope positions a Black character primarily to assist or guide a white protagonist.", answer: true },
          { text: "Representation in media has no effect on how real-world groups are perceived.", answer: false },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Avoiding Reductive Analysis",
        content: "Strong ideological analysis avoids reducing a text to a simple verdict ('this text is racist / sexist'). Instead, it tracks specific choices and effects. A text can contain both progressive and problematic representations simultaneously. Your job is to describe the complexity, not deliver a verdict.",
      },
      {
        type: "open-response" as const,
        title: "Representation Across Time",
        instruction: "Choose a group — a nationality, a gender identity, a religion, or a class — and consider how their representation in texts has shifted over time.",
        prompts: [
          { text: "Describe how this group was commonly represented in texts from at least 50 years ago. What do historical examples reveal about the ideology of that period?", type: "box" as const },
          { text: "How is the group represented in contemporary texts? What has changed, and what has stayed the same?", type: "box" as const },
          { text: "What forces (social movements, legislative change, cultural shifts) might explain the changes in representation?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "matching" as const,
        title: "Media Forms and Ideological Effect",
        instruction: "Match each media form on the left with the ideological feature most characteristic of that form.",
        left: [
          "The news report",
          "The documentary",
          "The advertisement",
          "Social media influencer content",
          "The literary novel",
          "The blockbuster film",
        ],
        right: [
          "Blurs personal lifestyle and commercial promotion, making consumerism feel authentic",
          "Claims objectivity while making constant editorial choices about framing and selection",
          "Requires time and investment to decode; often complicates dominant ideologies",
          "Constructs desires and identities; links products to aspirational values",
          "Can appear to challenge power while still framing the argument within the dominant worldview",
          "Usually reinforces dominant ideology through conventional narrative structure and the 'happy ending'",
        ],
      },
      {
        type: "open-response" as const,
        title: "Postcolonial Perspectives",
        instruction: "Postcolonial criticism examines how texts produced during and after colonial periods reflect and resist colonial ideology.",
        parentTip: "If your student is new to postcolonial criticism, recommend reading the first chapter of 'Things Fall Apart' by Chinua Achebe before this activity.",
        prompts: [
          { text: "What is the difference between a text that 'writes back' to a colonial tradition and one that simply reproduces colonial perspectives?", type: "lines" as const, lines: 4 },
          { text: "Choose a text you know and identify one way in which it either reinforces or challenges colonial ideology. Use specific evidence.", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: If the Text Could Speak Back",
        content: "Imagine the group most marginalised in a text you have studied could write a response to that text — a counter-narrative written from their perspective. What would they say about how they were portrayed? What would they want readers to know? Write the opening paragraph of that counter-narrative.",
      },
      {
        type: "circle-correct" as const,
        title: "Ideological vs Neutral?",
        instruction: "In each pair, circle the statement that is more ideologically loaded rather than analytically neutral.",
        questions: [
          { prompt: "Describing a government policy:", options: ["The policy reduced welfare spending by 12%.", "The government's cruel cuts gutted support for the most vulnerable."] },
          { prompt: "Describing a social movement:", options: ["Thousands marched to demand equal pay legislation.", "Radical agitators disrupted the city demanding handouts."] },
          { prompt: "Describing immigration:", options: ["Net migration increased by 50,000 last year.", "Our country is being overwhelmed by waves of arrivals."] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing an Ideological Analysis Paragraph",
        instruction: "Write a single well-structured analytical paragraph examining the ideology of a text you have studied. Your paragraph should include a topic sentence, specific textual evidence, analysis of the ideological effect, and a link to a broader claim.",
        parentTip: "Remind your student that analysis explains the 'how' and 'why' — not just the 'what'.",
        prompts: [
          { text: "Your analytical paragraph:", type: "box" as const },
          { text: "Underline or label: your topic sentence, your textual evidence, your analysis, and your link.", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "The Male Gaze",
        instruction: "Answer the questions below.",
        questions: [
          {
            prompt: "Laura Mulvey's concept of the 'male gaze' argues that:",
            options: [
              "All film directors are male and therefore sexist",
              "Cinema structures looking in a way that positions women as objects of desire for an assumed male viewer",
              "Men watch more films than women",
              "Women are better represented in literary texts than in visual media",
            ],
            answer: "Cinema structures looking in a way that positions women as objects of desire for an assumed male viewer",
          },
          {
            prompt: "Which of these would be an example of a film challenging the male gaze?",
            options: [
              "A film in which female characters exist primarily to motivate the male hero's quest",
              "A film told from a female character's perspective that centres her interiority and desires",
              "A film in which the camera lingers on a female character's body while she is silent",
              "A film in which women are dressed modestly but are still passive",
            ],
            answer: "A film told from a female character's perspective that centres her interiority and desires",
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Postcolonial Vocabulary",
        instruction: "Complete each definition using these terms: [subaltern, Othering, hybridity, centre/margin, writing back].",
        sentences: [
          { text: "The process by which a dominant group constructs an inferior, exotic or threatening version of another group is called ___.", blanks: ["Othering"] },
          { text: "Homi Bhabha's concept of ___ describes the complex cultural mix produced when colonised peoples adopt and adapt elements of colonial culture.", blanks: ["hybridity"] },
          { text: "___ refers to postcolonial literary texts that respond to and challenge the colonial canon, reclaiming voice and perspective.", blanks: ["writing back"] },
          { text: "Spivak's concept of the ___ refers to those marginalised groups whose voices are systematically excluded from dominant discourse.", blanks: ["subaltern"] },
          { text: "In postcolonial theory, the ___ describes how power flows from dominant cultures to those placed on the margins.", blanks: ["centre/margin"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology and Genre",
        instruction: "Different genres carry embedded ideological assumptions. For example, the romantic comedy assumes heterosexuality as default; the crime thriller often aligns the reader with state power.",
        prompts: [
          { text: "Choose a genre (crime fiction, romance, fantasy, superhero film, reality TV). What ideological assumptions are embedded in the conventions of this genre?", type: "box" as const },
          { text: "Can you think of an example of a text in that genre that challenges some of those embedded assumptions? How does it do so?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Representation Strategies",
        instruction: "Sort each strategy into 'Reinforces dominant ideology' or 'Challenges or complicates dominant ideology'.",
        columns: ["Reinforces dominant ideology", "Challenges or complicates dominant ideology"],
        items: [
          { label: "Giving a marginalised character their own narrating voice throughout the text" },
          { label: "Resolving a story about racial injustice through the efforts of a white ally" },
          { label: "Showing a female character whose only role is to be rescued by the male protagonist" },
          { label: "Presenting a villain who is complex, sympathetic and ideologically motivated" },
          { label: "Casting a non-white actor in a traditionally white heroic role without drawing attention to their race" },
          { label: "A story that ends with the restoration of the existing social order" },
          { label: "A narrative that refuses to resolve the tension it establishes, leaving readers with discomfort" },
          { label: "Using a disability only as a device to create pathos for non-disabled characters" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Extended Analysis: Your Set Text",
        instruction: "Choose a text you are currently studying. Write a structured analytical response examining its ideology and representation.",
        parentTip: "This extended response is ideal for a timed practice — try 25–30 minutes without notes.",
        prompts: [
          { text: "Identify the text and articulate a central claim about the ideology it reflects.", type: "lines" as const, lines: 3 },
          { text: "First body paragraph: analyse one specific representation in the text using textual evidence and ideological vocabulary.", type: "box" as const },
          { text: "Second body paragraph: analyse a second representation that either reinforces or complicates your central claim.", type: "box" as const },
          { text: "Consider: whose voice is absent from this text? What would the text look like if it were told from that absent perspective?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Media Literacy: Tracking Representation",
        instruction: "Choose one of the following activities for extended engagement.",
        suggestions: [
          "Over the course of one week, keep a representation journal. Each day, note one example of representation you encounter — in a TV show, advertisement, book, or news article. At the end of the week, identify one pattern and write a 200-word reflection.",
          "Find two reviews of the same film written by critics with different cultural backgrounds. Compare how each reviewer responds to the film's representation. What does the comparison reveal?",
          "Read the first chapter of a novel written by an author from a cultural background different from your own. Write a 200-word reflection on what you noticed about perspective, assumptions and what the text treats as 'normal'.",
        ],
      },
      // ── Consolidating (51–80) ──
      {
        type: "open-response" as const,
        title: "Discourse Analysis: The Language of 'Crisis'",
        instruction: "The word 'crisis' is frequently used in media discourse. Analyse the ideological work this word does.",
        parentTip: "This task rewards careful attention to specific language — push your student to identify actual examples before writing generalisations.",
        prompts: [
          { text: "Find three news headlines that use the word 'crisis'. Copy them here. What is each crisis about?", type: "lines" as const, lines: 4 },
          { text: "What does framing an issue as a 'crisis' do? Who benefits from this framing? Who might be harmed by it?", type: "box" as const },
          { text: "Are there issues that you think deserve the label 'crisis' but are rarely described that way? What might explain this?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Critical Race Theory in Texts",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Toni Morrison argued that American literature has been shaped by an 'Africanist presence' — the presence of Black characters and culture that is simultaneously central and rendered invisible. This means:",
            options: [
              "Black authors have always been the most important American writers",
              "White authors ignored race entirely in their fiction",
              "Race is a structuring force in American literary culture even when it appears absent from the text",
              "All American literature should be read as historical allegory",
            ],
            answer: "Race is a structuring force in American literary culture even when it appears absent from the text",
          },
          {
            prompt: "Which of the following describes 'cultural appropriation' in a media context?",
            options: [
              "When an artist from a marginalised culture commercially exploits their own heritage",
              "When members of a dominant culture adopt elements of a marginalised culture without acknowledgement or understanding",
              "When a film about one culture is made by directors from another culture with full collaboration",
              "When cultural exchange occurs naturally between neighbouring communities",
            ],
            answer: "When members of a dominant culture adopt elements of a marginalised culture without acknowledgement or understanding",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Using Theory Without Over-relying on It",
        content: "Naming a theorist (Gramsci, Hall, Foucault) can strengthen your analysis — but only if you use the idea, not just the name. Dropping 'Gramsci's concept of hegemony' into an essay without explaining what hegemony means in this specific text is not analysis. Always show how the concept illuminates something particular about the text in front of you.",
      },
      {
        type: "open-response" as const,
        title: "Analysing Environmental Discourse",
        instruction: "Environmental issues are represented through various competing discourses — scientific, economic, activist, denialist.",
        prompts: [
          { text: "Find one example of a text (news article, documentary clip, political speech) that represents climate change. Identify: the discourse it uses, the values it assumes, and the audience it addresses.", type: "box" as const },
          { text: "How might someone from a fossil fuel-dependent industry community read this text differently from an environmental activist?", type: "lines" as const, lines: 4 },
          { text: "What ideological assumptions are shared even by texts on opposite sides of the environmental debate?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Feminist Critical Vocabulary",
        instruction: "Complete each sentence using these terms: [patriarchy, objectification, the gaze, agency, essentialism, intersectionality].",
        sentences: [
          { text: "A social system in which men hold primary power and dominance is described as ___.", blanks: ["patriarchy"] },
          { text: "When a person (often a woman) is treated as a body or object for others' pleasure rather than as a full subject, this is called ___.", blanks: ["objectification"] },
          { text: "A character who has the capacity to make meaningful choices and act in the world is said to have ___.", blanks: ["agency"] },
          { text: "The belief that certain characteristics are innate and fixed based on gender or race (for example, that women are 'naturally' nurturing) is called ___.", blanks: ["essentialism"] },
          { text: "___ is the framework, developed by Kimberlé Crenshaw, that examines how overlapping social identities produce compounded experiences of advantage and disadvantage.", blanks: ["intersectionality"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Two Critical Approaches",
        instruction: "Apply two different critical frameworks to the same text extract. Show how each framework reveals something different.",
        parentTip: "Suggested frameworks: feminist criticism, postcolonial criticism, Marxist criticism, ecocriticism. Your student need not be an expert — the goal is practising multiple lenses.",
        prompts: [
          { text: "Name the text and the extract you will analyse:", type: "lines" as const, lines: 2 },
          { text: "Analysis using Framework 1 (name the framework and apply it):", type: "box" as const },
          { text: "Analysis using Framework 2 (name the framework and apply it):", type: "box" as const },
          { text: "What does each framework reveal that the other misses? What does the comparison suggest about the text?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Critical Frameworks",
        instruction: "Sort each description into the critical framework it belongs to.",
        columns: ["Feminist criticism", "Marxist criticism", "Postcolonial criticism", "Queer theory"],
        items: [
          { label: "Examines how texts construct and reinforce heteronormativity" },
          { label: "Analyses how class structures and economic power shape representation" },
          { label: "Examines how texts produced during or after colonisation reflect colonial ideology" },
          { label: "Asks how texts position readers in relation to gender and power" },
          { label: "Interrogates how the 'normal' is constructed and policed in texts" },
          { label: "Analyses the representation of labour, property and class conflict" },
          { label: "Focuses on 'writing back' to the colonial literary canon" },
          { label: "Asks whose perspective controls the narrative and whose is silenced" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Representation and Mental Health",
        instruction: "Mental health is increasingly represented in contemporary texts — in fiction, memoir, social media and journalism.",
        prompts: [
          { text: "What representations of mental illness have you encountered in texts? Were they sympathetic, sensationalised, trivialised, or something else?", type: "box" as const },
          { text: "What are the risks of sensationalised or stereotyped representations of mental illness? What specific effects might they have on readers with lived experience?", type: "lines" as const, lines: 4 },
          { text: "What does a responsible, complex representation of mental illness look like in fiction? Can you give an example?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Who Gets to Tell the Story?",
        content: "Consider this: for much of Western literary history, the stories told about marginalised groups were told by outsiders. Today, there are growing debates about whether this still happens — in publishing, in film, in news. What do you think? Does it matter who tells a story, or only how it is told? Write a 200-word response defending a position on this question.",
      },
      {
        type: "open-response" as const,
        title: "Ideology and Narrative Closure",
        instruction: "The way a story ends is one of its most ideologically significant choices.",
        parentTip: "Discuss with your student: what kinds of endings does mainstream culture reward, and what does this reveal?",
        prompts: [
          { text: "What does it mean for a story to have 'ideological closure' — an ending that restores or affirms the existing social order?", type: "lines" as const, lines: 3 },
          { text: "Choose a film or novel. Does its ending reinforce or challenge the dominant ideology? Use specific evidence from the ending.", type: "box" as const },
          { text: "What would the story mean if the ending were different? Write an alternative ending (in 3-5 sentences) and explain the ideological difference it would make.", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Representation Ethics",
        instruction: "Select the most nuanced and defensible answer.",
        questions: [
          {
            prompt: "Which of the following best describes the ethical responsibility of a writer representing a group they do not belong to?",
            options: [
              "Writers should never represent groups they do not belong to",
              "Writers can represent any group as long as they do thorough research and avoid clichés",
              "There is no ethical issue — fiction is fiction",
              "Writers should consider their own positionality, research carefully, listen to own-voices criticism, and be willing to be accountable for their choices",
            ],
            answer: "Writers should consider their own positionality, research carefully, listen to own-voices criticism, and be willing to be accountable for their choices",
          },
          {
            prompt: "What is meant by 'own voices' in contemporary publishing?",
            options: [
              "Books written in the first person",
              "Books where the author shares a marginalised identity with the characters they represent",
              "Memoirs and autobiographies",
              "Books where the author has not used a ghost writer",
            ],
            answer: "Books where the author shares a marginalised identity with the characters they represent",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology in Australian Texts",
        instruction: "Australian literature and media reflect the particular ideological history of this country — including its relationship with colonisation, multiculturalism and its place in the Asia-Pacific.",
        prompts: [
          { text: "Choose an Australian text (novel, film, news media, or advertisement). What ideology does it reflect about Australian national identity?", type: "box" as const },
          { text: "How does this text represent (or fail to represent) the diversity of contemporary Australian experience?", type: "lines" as const, lines: 4 },
          { text: "How does the text position itself in relation to Australia's colonial history?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "matching" as const,
        title: "Australian Ideological Contexts",
        instruction: "Match each concept on the left with the best explanation on the right.",
        left: [
          "Terra nullius",
          "The White Australia Policy",
          "Reconciliation discourse",
          "The 'fair go' ideology",
          "Multicultural nationalism",
        ],
        right: [
          "The legal fiction that Australia was unoccupied before European colonisation, used to justify dispossession",
          "The Australian belief that opportunity is available to all, which can obscure structural inequality",
          "A set of immigration policies (1901-1973) that sought to maintain a white, Anglo-Celtic Australia",
          "The representation of Australia as a diverse, welcoming nation that may mask ongoing racism",
          "The process of acknowledging and addressing the injustices of colonisation, which has been represented very differently by different political groups",
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Making Your Thesis Ideological",
        content: "An ideological analysis essay needs a thesis that makes a claim about power, values, or worldview — not just a claim about character or plot. Compare: 'The novel's protagonist is morally ambiguous' (character claim) versus 'The novel's moral ambiguity serves to naturalise the ideology of individual self-interest over collective responsibility' (ideological claim). Aim for the second kind.",
      },
      {
        type: "open-response" as const,
        title: "The Politics of Genre",
        instruction: "Explore how genre expectations carry ideological assumptions.",
        prompts: [
          { text: "Choose a genre you know well. List five conventions of that genre (narrative, character, setting, etc.).", type: "lines" as const, lines: 4 },
          { text: "What values or worldview do these conventions assume or reinforce? Give two specific examples.", type: "box" as const },
          { text: "Name a text in this genre that self-consciously subverts some of its conventions. What ideological effect does the subversion create?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Digital Media and Ideology",
        instruction: "Social media, algorithms and digital platforms shape representation in new ways.",
        parentTip: "This topic is close to your student's daily experience — draw on it as a source of specific examples.",
        prompts: [
          { text: "How do social media algorithms shape what representations people encounter? What are the ideological effects?", type: "box" as const },
          { text: "What does it mean that social media appears to give everyone a voice, while in practice some voices are amplified far more than others?", type: "lines" as const, lines: 4 },
          { text: "Choose one social media platform. What ideology does its design and default settings promote?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Ideological Audit",
        instruction: "Choose one of the following extended activities.",
        suggestions: [
          "Conduct an ideological audit of your own reading list for the past year. What kinds of authors and perspectives are represented? What is absent? Write a 250-word reflection and identify three texts you could add to broaden your reading.",
          "Watch a documentary and write a 300-word analysis of its ideological position. What does it treat as common sense? Whose perspective does it centre? What does it omit?",
          "Write a 300-word comparative analysis of how the same event (choose a significant Australian news event) was reported in two different publications with different ideological slants.",
        ],
      },
      // ── Extending (81–100) ──
      {
        type: "open-response" as const,
        title: "Foucault: Discourse and Power",
        instruction: "Apply Foucault's concept of discourse to a contemporary issue.",
        parentTip: "If your student needs background, the Stanford Encyclopedia of Philosophy has an accessible entry on Foucault.",
        prompts: [
          { text: "Choose a contemporary social issue (e.g. mental health, immigration, crime). Describe the dominant discourse surrounding this issue — the language, assumptions and frameworks that shape how it is understood.", type: "box" as const },
          { text: "Whose interests does this dominant discourse serve? Who does it silence or marginalise?", type: "lines" as const, lines: 4 },
          { text: "Find an example of a counter-discourse — a way of speaking about this issue that challenges the dominant framework. Where does this counter-discourse appear, and how is it received?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing a Critical Essay: Introduction",
        instruction: "Write an introduction for a critical essay on ideology and representation in a text you have studied. The introduction should: introduce the text and its context; establish the critical framework you will use; and state a clear, arguable ideological thesis.",
        parentTip: "A strong introduction is one a reader can assess on its own — is the claim interesting? Is it arguable? Is the framework clear?",
        prompts: [
          { text: "Your essay introduction (150-200 words):", type: "box" as const },
          { text: "Identify your thesis sentence. Is it a genuine ideological claim — could a reasonable person disagree?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Synthesis: Multiple Frameworks",
        instruction: "Write a 400-word essay that analyses a text using at least two critical frameworks. Your essay should show how each framework illuminates a different dimension of the text's ideology.",
        parentTip: "Suggested structure: introduction with thesis; body paragraph 1 (Framework A); body paragraph 2 (Framework B); conclusion that synthesises both perspectives.",
        prompts: [
          { text: "Your synthesis essay:", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Limits of Criticism",
        content: "Here is a genuinely difficult question: can critical analysis of ideology change anything? If you analyse a sexist advertisement and demonstrate that it reinforces patriarchy, does the advertisement become less harmful? Does the act of naming ideology have any power, or is it just an academic exercise? Write a 250-word response defending a position.",
      },
      {
        type: "open-response" as const,
        title: "Evaluating Critical Perspectives",
        instruction: "Find two different critical readings of the same text (e.g., two journal articles, two published essays, or two study guides). They should take different approaches to the text's ideology.",
        prompts: [
          { text: "Summarise the central argument of each critical reading in 2-3 sentences each.", type: "box" as const },
          { text: "Where do the two readings agree? Where do they diverge? What does the divergence reveal?", type: "lines" as const, lines: 4 },
          { text: "Which reading do you find more persuasive, and why? Use specific evidence from the text to support your judgement.", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Own Critical Position",
        instruction: "A strong critic does not just apply frameworks mechanically — they develop a critical voice and a position of their own.",
        parentTip: "This task is metacognitive — it asks your student to reflect on their own thinking, not just apply content knowledge.",
        prompts: [
          { text: "Reflecting on your study of ideology and representation: which critical framework do you find most useful, and why? What does it reveal that others miss?", type: "box" as const },
          { text: "What are the limits of that framework? What does it miss or oversimplify?", type: "lines" as const, lines: 4 },
          { text: "Describe the kind of reader you want to be — what critical habits do you want to carry into your reading life?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Counter-Narrative: Write It",
        instruction: "Choose a text in which a particular group is marginalised, absent or misrepresented. Write a 300-word opening to a counter-narrative — a fictional or non-fictional text that centres the perspective of that group.",
        parentTip: "This is a creative-critical task. The writing should be grounded in an understanding of why the original representation was limiting.",
        prompts: [
          { text: "Name the original text and identify the group whose perspective you are centring:", type: "lines" as const, lines: 2 },
          { text: "Your counter-narrative opening (300 words):", type: "box" as const },
          { text: "Reflect: what specific choices did you make to ensure this was not simply an inversion of the original, but a genuinely different representation?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Ethics of the Reader",
        instruction: "Can you enjoy a text you know to be ideologically problematic? Discuss the relationship between aesthetic pleasure and ideological critique.",
        prompts: [
          { text: "Describe a text you find enjoyable but which you know contains ideologically problematic representations. What makes it enjoyable? What makes it problematic?", type: "box" as const },
          { text: "Some critics argue that ideological critique kills aesthetic pleasure; others argue that pleasures built on exclusion or dehumanisation are not worth defending. Where do you stand?", type: "box" as const },
          { text: "Does your critical awareness of the text's ideology change how you engage with it? Should it?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Timed Essay Practice",
        instruction: "Set a timer for 40 minutes. Write a complete analytical essay in response to the following prompt: 'Every text is an ideological act.' Choose one text you have studied. Agree or disagree with this statement, using specific evidence to support your argument.",
        parentTip: "Do not intervene during the timed writing — let your student experience the conditions of an examination. Debrief afterwards: what would they do differently with more time?",
        prompts: [
          { text: "Your essay (40-minute timed response):", type: "box" as const },
          { text: "Self-evaluation: identify one strength and one area to develop in your response.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Sustained Critical Project",
        instruction: "Choose one project to complete over the coming week.",
        suggestions: [
          "Write a 600-word critical essay on ideology and representation in a text of your choice. Use at least two critical frameworks and three pieces of textual evidence. Revise it twice before submitting.",
          "Create a 'representation map' for a TV series you watch. Track, across three episodes: who appears on screen, how much screen time each group gets, how different groups are framed and described. Write a 400-word analysis of what you found.",
          "Research the own-voices debate in publishing. Read at least two different perspectives (you might find pieces by Corinne Duyvis, or responses from various authors). Write a 400-word synthesis that presents your own position on the debate with supporting argument.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Can a Text Be Neutral?",
        content: "Every text makes choices — about who to include, what language to use, whose perspective to centre. Does this mean that truly neutral representation is impossible? Or is there a meaningful distinction between intentionally biased texts and texts that simply reflect the limits of their moment? Defend a position in 200 words.",
      },
      {
        type: "true-false" as const,
        title: "Ideology and Representation: True or False?",
        instruction: "Decide whether each statement about ideology and representation is true or false.",
        parentTip: "Use these statements as a discussion warm-up — some are deliberately nuanced.",
        statements: [
          { text: "Ideology always refers to explicitly political beliefs.", answer: false },
          { text: "Hegemony describes the way dominant values can become accepted as natural and universal, even by those they disadvantage.", answer: true },
          { text: "A text can only reinforce dominant ideology — it cannot challenge it.", answer: false },
          { text: "The concept of 'representation' in cultural studies refers only to images, not language.", answer: false },
          { text: "Intersectionality means that overlapping social identities (race, gender, class) interact in complex ways that cannot be understood in isolation.", answer: true },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Critical Theory Vocabulary",
        instruction: "Fill each gap with the correct critical theory term: [discourse, stereotype, intersectionality, binary opposition, naturalisation].",
        parentTip: "These are high-level terms used in senior English, Media Studies, and Cultural Studies.",
        sentences: [
          { text: "___ is the process by which culturally constructed ideas and values are made to seem natural, inevitable, and universal.", blanks: ["Naturalisation"] },
          { text: "A ___ is a rigid, oversimplified representation of a social group that reduces its members to a fixed set of characteristics.", blanks: ["stereotype"] },
          { text: "___ describes the way overlapping categories of identity interact to produce complex, intersecting forms of privilege and disadvantage.", blanks: ["Intersectionality"] },
          { text: "A ___ organises meaning through a pair of opposites (e.g. civilised/savage, male/female, centre/margin).", blanks: ["binary opposition"] },
          { text: "___ refers to a system of language, knowledge, and power that constructs how we understand a subject or social group.", blanks: ["discourse"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Critical Approaches: Advanced Questions",
        instruction: "Choose the best answer for each question about ideological analysis.",
        questions: [
          {
            prompt: "Stuart Hall's concept of 'encoding and decoding' argues that:",
            options: [
              "Texts have a single fixed meaning that all audiences receive in the same way",
              "Producers encode meanings into texts, but audiences decode them in different ways depending on their context",
              "Only the author's intended meaning is relevant to analysis",
              "Visual texts encode meaning differently from written texts",
            ],
            answer: "Producers encode meanings into texts, but audiences decode them in different ways depending on their context",
          },
          {
            prompt: "A 'preferred reading' of a text is one that:",
            options: [
              "The reader personally prefers",
              "Aligns with the dominant ideology embedded in the text by its producer",
              "Is shared by all academic critics of the text",
              "Resists the text's apparent meaning",
            ],
            answer: "Aligns with the dominant ideology embedded in the text by its producer",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing Representation in News Media",
        instruction: "News media is not a neutral window on the world — it constructs and frames events and people through ideological choices.",
        parentTip: "Choose a current news story to make this analysis timely and relevant.",
        prompts: [
          { text: "Find two news articles from different publications covering the same event or issue. Analyse how each constructs its representation: what language choices are made? Whose voices are centred? What is foregrounded and what is backgrounded?", type: "box" as const },
          { text: "What ideological assumptions or values does each publication seem to hold? How do these shape the representation of the event?", type: "lines" as const, lines: 5 },
          { text: "How might a reader with a different cultural background or political position read each article differently?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Resisting Reductive Analysis",
        content: "Ideological analysis can become reductive if it reduces every text to a simple message or assigns uniform intentions to its creators. The most nuanced analysis acknowledges that: texts can both reproduce and challenge ideology at the same time; creators are often unaware of their own ideological assumptions; and the meanings audiences make are just as important as the meanings texts encode.",
      },
      {
        type: "open-response" as const,
        title: "Representation and Power: Extending Your Analysis",
        instruction: "Representation is not only about who appears in a text — it is about how they are positioned, what language is used to describe them, and what they are permitted to do and say.",
        prompts: [
          { text: "Choose a text you are studying (novel, film, TV series, advertisement). Analyse how it represents one social group: what characteristics are attributed to this group? Are they active agents or passive objects? Are they represented with complexity or as a type?", type: "box" as const },
          { text: "How does the representation of this group relate to broader social power structures? Does the text challenge or reinforce existing hierarchies?", type: "lines" as const, lines: 5 },
          { text: "Whose perspective is assumed or implied in this text? If you belong to this social group, how might you experience this representation differently?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Choose the More Accurate Critical Statement",
        instruction: "Circle the statement that represents a more accurate or sophisticated understanding of ideology and representation.",
        questions: [
          {
            prompt: "Which is the more sophisticated statement about ideology in texts?",
            options: [
              "This film is sexist because it shows women in traditional roles.",
              "This film both reflects and reinforces patriarchal ideology through its persistent association of female characters with domestic space, but its narrative resolution ambiguously positions female desire as disruptive to rather than excluded from public life.",
            ],
          },
          {
            prompt: "Which is the more accurate statement about how ideology works in media?",
            options: [
              "The news media are controlled by the government and deliberately lie to people.",
              "News media organisations are embedded in social, economic, and cultural structures that shape what counts as newsworthy and how events are framed, often in ways that reflect and reinforce dominant power relations.",
            ],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology and Identity: Personal Reflection",
        instruction: "Ideological analysis is not only about understanding texts — it is about understanding ourselves.",
        parentTip: "This is a reflective, personal task that works best when students feel safe to be honest. There are no wrong answers.",
        prompts: [
          { text: "What ideological assumptions did you absorb growing up — about gender, success, nationhood, or other concepts — that you now examine more critically? Where did those assumptions come from (texts, media, education, family)?", type: "box" as const },
          { text: "Has studying ideology changed how you experience popular culture, news, or literature? Give a specific example of a text you now read differently.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Ideology: Independent Inquiry Project",
        instruction: "Choose one extended home activity to deepen your understanding of ideology and representation.",
        suggestions: [
          "Watch an episode of a popular reality TV show through an ideological lens. Write a 400-word analysis of: what values and norms are naturalised? How are contestants represented in relation to gender, class, race, or other social categories? What does the format itself (the rules, the format, the editing) assume or enforce?",
          "Choose a historical advertisement from any decade before you were born. Research its cultural context and write a 400-word ideological analysis: what assumptions about gender, race, class, or family life does it encode? How might contemporary audiences have received it versus how we receive it now?",
          "Find a scholarly article on ideology in a text you are studying (search Google Scholar or a library database). Read it carefully and write a 400-word critical response: what does the scholar's analysis reveal? What do you agree with? What limitations does their approach have?",
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology and Representation: Synthesis",
        instruction: "Bring together your learning about ideology, representation, and critical reading.",
        parentTip: "This synthesis task is an excellent portfolio piece — it demonstrates the depth of critical thinking your student has developed.",
        prompts: [
          { text: "Write a 250-word reflection: what is the most important thing you have learned about ideology and representation through this worksheet? What will you continue to ask of texts that you might not have asked before?", type: "box" as const },
          { text: "Design a brief 'Ideological Reading Guide' for another student: list four key questions they should ask of any text to examine its ideological dimensions.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Whose Story Are We In?",
        content: "Every story centres some characters and marginalises others. Think about the stories that have shaped your understanding of the world — the books you read as a child, the films you watched, the news you consumed. Whose stories were you immersed in? Whose were absent? What would the world look like if the marginalised figures of those stories were moved to the centre? Write 200 words.",
      },
      {
        type: "open-response" as const,
        title: "Ideology and Genre: Deeper Analysis",
        instruction: "Every genre carries embedded ideological assumptions — about who matters, what counts as conflict, how stories should end.",
        parentTip: "Encourage your student to think about genres they enjoy reading or watching — personal investment makes the analysis richer.",
        prompts: [
          { text: "Choose a genre you know well (crime, romance, sports film, fantasy, reality television). Map the ideological assumptions embedded in its conventions: what values does it normalise? Who is centred? Who is peripheral? What kinds of endings does it typically reward?", type: "box" as const },
          { text: "Can you think of an example within this genre that deliberately subverts its ideological assumptions? How does it do so — and what is the effect?", type: "lines" as const, lines: 4 },
          { text: "Does recognising the ideology in a genre you enjoy change how you relate to it? Why or why not?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Advanced Ideology Concepts: True or False?",
        instruction: "Decide whether each statement about advanced ideological analysis is true or false.",
        statements: [
          { text: "A preferred reading always reflects the dominant ideology.", answer: true },
          { text: "An oppositional reading accepts the preferred reading but modifies it slightly.", answer: false },
          { text: "Althusser's concept of Ideological State Apparatuses refers to institutions (schools, media, churches) that reproduce dominant ideology.", answer: true },
          { text: "A negotiated reading fully rejects the dominant ideology embedded in a text.", answer: false },
          { text: "Hall's 'Encoding/Decoding' model suggests that the meaning of a text is fixed at the moment of production.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology in Australian Texts",
        instruction: "Australian texts carry specific ideological histories — relating to colonialism, national identity, multiculturalism, and the natural environment.",
        parentTip: "Connect this to any Australian texts your student is studying — the ideological analysis becomes much richer with local context.",
        prompts: [
          { text: "Choose an Australian text (novel, film, television series, or advertisement). What ideological assumptions about Australian national identity does it encode? How does it construct 'Australianness'?", type: "box" as const },
          { text: "How does this text engage with (or silence) the First Nations history of Australia? What does this reveal about the text's ideological position?", type: "lines" as const, lines: 5 },
          { text: "Would the reading of this text change significantly for a First Nations reader, a recent immigrant, or a reader from another country? How does positioning affect interpretation?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Critical Theory: Stuart Hall",
        instruction: "Test your understanding of Stuart Hall's key contributions to media and cultural studies.",
        questions: [
          {
            prompt: "Hall's concept of 'representation' argues that:",
            options: [
              "Images simply reflect reality",
              "Language and images produce meaning rather than simply reflect it",
              "All representations are politically neutral",
              "The best way to understand a text is through its author's intentions",
            ],
            answer: "Language and images produce meaning rather than simply reflect it",
          },
          {
            prompt: "In Hall's 'Encoding/Decoding' model, an 'oppositional reading' means:",
            options: [
              "Fully accepting the dominant meaning encoded in the text",
              "Partially accepting the dominant code but adapting it from a different social position",
              "Completely rejecting the preferred reading and interpreting the text from a contrary ideological position",
              "Reading the text as entertainment without considering its ideology",
            ],
            answer: "Completely rejecting the preferred reading and interpreting the text from a contrary ideological position",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Creating Counter-Narratives",
        instruction: "One response to ideological analysis is to create counter-narratives — texts that challenge dominant representations by centring marginalised voices.",
        parentTip: "This creative task is a powerful synthesis activity — it applies critical understanding through creative production.",
        prompts: [
          { text: "Identify a representation in any text that you find problematic — one that stereotypes, marginalises, or misrepresents a social group. Describe the representation and explain why it is problematic.", type: "box" as const },
          { text: "Write a short counter-narrative: a passage (150–200 words) that offers an alternative, more nuanced representation of the same group or issue, told from a different perspective.", type: "box" as const },
          { text: "Reflect: what challenges did you encounter in writing your counter-narrative? What does this reveal about the difficulty of truly challenging dominant representations?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Limits of Ideological Analysis",
        content: "Ideological analysis is a powerful tool, but it has limits. Not every textual choice is ideologically significant; not every representation is a symptom of systemic oppression; not every text reduces to its dominant ideology. The most sophisticated analysts hold ideology as one lens among many — valuable but not totalising. Use it to open up meaning, not to close it down.",
      },
      {
        type: "open-response" as const,
        title: "Ideology: Final Synthesis and Portfolio",
        instruction: "Bring together your learning about ideology and representation in a final synthesis.",
        parentTip: "This final synthesis task makes an excellent portfolio anchor piece — it demonstrates the full depth of critical thinking your student has developed across this unit.",
        prompts: [
          { text: "Write a 250-word critical reflection: what is ideology? How does it operate in texts? What tools do you now have for identifying and interrogating it? Draw on at least two specific examples from texts you have analysed.", type: "box" as const },
          { text: "Which aspect of ideological analysis — encoding/decoding, hegemony, intersectionality, representation — do you find most illuminating? Why? Give a specific example of how it has enriched your reading of a text.", type: "lines" as const, lines: 5 },
          { text: "Write one 'ideology question' you would now bring to any new text you encounter — a question that opens up ideological analysis rather than closing it down.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Ideology: Sustained Critical Engagement",
        instruction: "Choose one extended home activity to deepen your understanding of ideology and representation.",
        suggestions: [
          "Watch a blockbuster film from the past decade through an ideological lens. Write a 500-word analysis examining: how does the film construct representations of gender, race, class, and national identity? What ideology does it encode? Are there moments where it challenges its own dominant ideology?",
          "Read a chapter from a key work in cultural studies or critical theory (e.g. Stuart Hall's 'Representation', bell hooks' 'Feminist Theory: From Margin to Center', or Edward Said's 'Orientalism'). Write a 400-word reflection: what central concept does the chapter explore? How does it change how you read a text you are currently studying?",
          "Choose a significant Australian historical event (e.g. the White Australia Policy, the Stolen Generations, the 1967 Referendum). Research how it has been represented in at least three different types of text (government documents, news media, literary or artistic responses, First Nations voices). Write a 500-word comparative analysis of how representation differs across texts and what this reveals about ideology and power.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: What You Cannot Unsee",
        content: "Once you have learned to see ideology in texts, you cannot stop seeing it — in films, in news, in advertising, in the stories told at family gatherings. This can be uncomfortable. It can also be isolating, or exhausting. But it can also be liberating. Write 200 words about what it means to you to have developed this kind of critical sight. What do you do with it? Is it a burden, a tool, a responsibility, or something else entirely?",
      },
      {
        type: "open-response" as const,
        title: "Ideology in Historical Texts",
        instruction: "Texts from different historical periods encode the ideological assumptions of their time — which can be profoundly different from our own.",
        parentTip: "This activity pairs well with any historical literature your student is studying — Jane Austen, Dickens, colonial writers, etc.",
        prompts: [
          { text: "Choose a text written at least 50 years ago. What ideological assumptions does it encode that are now contested or rejected — about gender, race, class, or other social categories?", type: "box" as const },
          { text: "Should we read and value historical texts that encode ideologies we now find problematic? Write a 150-word response that acknowledges the complexity of this question.", type: "box" as const },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Type of Reading",
        instruction: "Circle the type of reading (preferred, negotiated, or oppositional) that best describes each audience response.",
        questions: [
          {
            prompt: "A viewer watches a news report about immigration that frames immigrants as a burden on social services. The viewer accepts this framing and is more concerned about immigration. This is:",
            options: ["A preferred reading", "A negotiated reading", "An oppositional reading"],
          },
          {
            prompt: "A teacher watches the same news report. They accept that immigration is a policy issue requiring careful thought, but they question whether the statistics presented are complete or contextualised. This is:",
            options: ["A preferred reading", "A negotiated reading", "An oppositional reading"],
          },
          {
            prompt: "A refugee advocate watches the same report and recognises it as using selective statistics to construct immigrants as a problem, and instead reads it as evidence of media bias. This is:",
            options: ["A preferred reading", "A negotiated reading", "An oppositional reading"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology and Visual Texts",
        instruction: "Visual texts — films, photographs, advertisements, graphic novels — encode ideology through composition, framing, colour, and image selection as well as through language.",
        prompts: [
          { text: "Choose any single image (a photograph, advertisement, film still, or artwork) and analyse its ideological dimensions: who or what is centred? Who or what is peripheral or absent? What values or power relationships are implied by the composition, lighting, colour, and subject matter?", type: "box" as const },
          { text: "How does the context in which this image appears (where it was published or displayed, for what audience) shape its ideological meaning?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Final Review: Ideology Concepts",
        instruction: "A final review of key ideology and representation concepts.",
        parentTip: "Use this as an oral quiz at the end of the unit — have students justify each answer.",
        statements: [
          { text: "Foucault's concept of 'discourse' refers only to spoken language.", answer: false },
          { text: "Ideological analysis requires us to consider who benefits from a particular representation and who is disadvantaged.", answer: true },
          { text: "A text can simultaneously reinforce one dominant ideology while challenging another.", answer: true },
          { text: "The concept of 'naturalisation' refers to the process of making a constructed representation seem inevitable and universal.", answer: true },
          { text: "Critical theory is primarily concerned with whether texts are aesthetically beautiful.", answer: false },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Ideology: Final Independent Exploration",
        instruction: "Choose one extended home activity as your culminating exploration of ideology and representation.",
        suggestions: [
          "Choose a significant contemporary issue (climate policy, housing affordability, Indigenous rights, gender equality). Collect and analyse five texts across different modes and genres — a news article, an opinion piece, a government statement, a social media campaign, and an artistic or literary response. Write a 600-word analysis of how ideology operates differently across these five texts in their treatment of the same issue.",
          "Trace the representation of a specific social group (women, First Nations Australians, migrants, working-class people) across three texts from different historical periods. Write a 500-word comparative analysis of how representation has changed, and what those changes reveal about shifting ideological assumptions.",
          "Create your own analytical resource: design a 'Critical Reading Guide for Ideological Analysis' that another student could use. It should include: key concepts with clear definitions and examples, a set of 10 analytical questions, and a short worked example showing how to apply the guide to a specific text.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology: The Media and Your Thinking",
        instruction: "The media we consume shapes our ideological frameworks — often without our awareness.",
        parentTip: "This is a rich conversation topic — discuss your own media habits openly with your student.",
        prompts: [
          { text: "What are the main sources through which you receive news and information? For each, identify any known ideological tendencies or institutional affiliations.", type: "box" as const },
          { text: "How do you think your current media consumption has shaped your understanding of any three specific social issues? Be honest — this is a reflective exercise, not a test.", type: "lines" as const, lines: 5 },
          { text: "What could you do to broaden your media exposure to include more diverse perspectives? What specific steps will you take?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Ideology: Consolidation Check",
        instruction: "A consolidation check of key ideology concepts.",
        statements: [
          { text: "Hegemony operates through overt force and coercion.", answer: false },
          { text: "Intersectionality recognises that race, class, gender, and other identities interact in complex ways.", answer: true },
          { text: "A 'negotiated reading' fully accepts the preferred reading of a text.", answer: false },
          { text: "Ideology is always consciously held and deliberately expressed.", answer: false },
          { text: "Critical literacy involves reading texts not just for what they say but for what they assume, naturalise, and exclude.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Ideology: Looking Forward",
        instruction: "Critical awareness of ideology is not a destination — it is an ongoing practice of questioning and reflection.",
        prompts: [
          { text: "As you move into Year 11 and beyond, how will you continue to practise critical reading of ideological texts? What specific habits will you maintain?", type: "lines" as const, lines: 4 },
          { text: "What is one question about ideology and representation that this worksheet has raised but not fully answered — a question you want to keep thinking about?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The World as Text",
        content: "If everything is a text — if culture, institutions, relationships, and everyday practices are all sites of meaning that can be read and interpreted — then critical literacy is not just a school skill. It is a way of living in the world with awareness and intentionality. Write 200 words about what it would mean to you to live as a critical reader: to read not just books but the world itself with the same attention you have brought to the texts in this worksheet.",
      },
      {
        type: "open-response" as const,
        title: "Ideology: Living Critically",
        instruction: "Critical awareness of ideology has implications beyond the classroom — for how you engage with culture, politics, and daily life.",
        parentTip: "This final reflection is a conversation about values and how knowledge changes us — take time with it.",
        prompts: [
          { text: "In what specific ways has developing ideological awareness changed how you engage with texts, media, or conversations in your daily life?", type: "lines" as const, lines: 5 },
          { text: "What is one commitment you are making — as a reader, a thinker, or a person — as a result of what you have learned about ideology and representation?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: A Letter to the Texts",
        content: "Write a short letter (150 words) to any text you have encountered that shaped your understanding of ideology and representation — a novel, a film, an advertisement, a speech, or any other text. Tell it what it taught you, what it failed to show you, and what you now see in it that you did not see when you first encountered it.",
      },
    ],
  },

  // ── WS 2: Rhetorical Devices & Stylistic Choices ─────────────────────────────
  {
    slug: "rhetorical-devices-stylistic-choices",
    title: "Rhetorical Devices & Stylistic Choices",
    strand: "Language",
    description:
      "Analyse how writers and speakers use rhetorical devices — anaphora, antithesis, rhetorical questions, ethos, pathos, logos — to shape audience response and construct persuasive effect.",
    learningGuide: {
      concept:
        "Rhetoric is the art of using language strategically to persuade. At Year 10, students move from identifying devices to analysing how specific choices create specific effects in specific contexts.",
      activation:
        "Play a 1-2 minute clip of a famous speech (Martin Luther King, Gough Whitlam, Malala Yousafzai). Ask: even without analysing it formally, what did you notice? What made it feel powerful?",
      check:
        "Can your student explain not just what a device is, but why a writer chose it at that moment and what effect it creates for the intended audience?",
    },
    lesson: {
      title: "The Craft of Persuasion",
      objective:
        "Name, identify and analyse a range of rhetorical devices, linking each to its intended effect on a specific audience.",
      materials: [
        "A printed or on-screen copy of a famous speech (suggested: Martin Luther King 'I Have a Dream', or Greta Thunberg 2019 UN Speech)",
        "Coloured pens or highlighters",
        "Paper and pen",
      ],
      intro: {
        title: "Rhetoric is Not a Dirty Word",
        script:
          "The word 'rhetoric' sometimes gets used negatively — 'that's just rhetoric' — as if persuasive language is automatically dishonest. But rhetoric is actually one of the oldest intellectual disciplines. Aristotle described three modes of persuasion: ethos, which is appealing to the credibility or character of the speaker; pathos, which is appealing to emotion; and logos, which is appealing to reason and evidence. Great communicators use all three. Today we are going to look at how writers and speakers combine these appeals with specific devices — anaphora, antithesis, rhetorical questions — to create something more than the sum of its parts.",
        action:
          "Together, read the first two paragraphs of your chosen speech aloud. One of you reads, the other listens. Then swap and read again. What is the first thing you noticed?",
      },
      mainActivity: {
        title: "Annotating a Speech",
        script:
          "Let us go through the speech together and mark it up. When you see the same phrase repeated at the start of several clauses, that is anaphora — it builds rhythm and emphasis. When you see two contrasting ideas placed side by side, that is antithesis — it sharpens the argument by making the contrast vivid. When the speaker asks a question they do not expect an answer to, that is a rhetorical question — it pulls the audience into the argument as participants. Each of these choices is doing specific work. Our job is to ask: why here? Why this device? What is the speaker trying to make the audience feel or believe?",
        action:
          "Annotate the speech together. Use one colour for ethos appeals, another for pathos, another for logos. Underline examples of anaphora. Circle antithesis. Put a question mark next to rhetorical questions. After annotating, choose one example of each device and discuss: what effect was intended?",
      },
      wrapUp: {
        title: "Putting It Together",
        script:
          "I am curious — which device felt most powerful to you personally? And here is a harder question: does it feel different knowing the device is there? Does naming it reduce its effect, or does it increase your appreciation of the craft?",
        action:
          "Student shares their response. No right answer — this is a genuine discussion about the relationship between analysis and aesthetic response.",
      },
      parentTip:
        "If you are not familiar with all these terms yourself, that is fine — reading and annotating the speech together is genuinely worthwhile. You might find that your own instinctive responses to the text are excellent starting points for your student's analysis.",
      extension:
        "Write a 2-minute persuasive speech on a topic you care about. Deliberately include at least three rhetorical devices. Mark where they are in your script, and explain the effect you intended.",
      resources: [
        {
          title: "Purdue OWL: Aristotle's Rhetorical Situation",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/rhetorical_situation/aristotles_rhetorical_situation.html",
          description:
            "A clear explanation of ethos, pathos and logos with examples from real texts.",
        },
        {
          title: "Khan Academy: Introduction to Rhetoric",
          url: "https://www.khanacademy.org/humanities/grammar/punctuation-the-colon-semicolon-and-more/introduction-to-rhetoric/v/introduction-to-rhetoric",
          description:
            "Short video introduction to rhetoric, suitable for students new to formal rhetorical analysis.",
        },
        {
          title: "CrashCourse: Rhetoric",
          url: "https://www.youtube.com/watch?v=1LefWFuEPgQ",
          description:
            "Engaging overview of rhetorical devices, fallacies and the history of persuasion.",
        },
      ],
    },
    activities: [
      // ── Foundational (1–20) ──
      {
        type: "matching" as const,
        title: "Rhetorical Devices to Examples",
        instruction: "Match each rhetorical device on the left to the example that best illustrates it on the right.",
        left: [
          "Anaphora",
          "Antithesis",
          "Rhetorical question",
          "Ethos appeal",
          "Pathos appeal",
          "Logos appeal",
          "Tricolon",
          "Hyperbole",
        ],
        right: [
          "'As a surgeon who has treated hundreds of patients, I can tell you...'",
          "'If you prick us, do we not bleed?'",
          "'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields'",
          "'Statistics show that 78% of those affected are under the age of 25'",
          "'I have a dream... I have a dream... I have a dream...'",
          "'To err is human; to forgive, divine'",
          "'Think of the children going to bed hungry tonight — your own child's face'",
          "'I have told you a million times'",
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Rhetoric Vocabulary",
        instruction: "Complete each sentence with the correct term: [ethos, pathos, logos, anaphora, antithesis, tricolon, hyperbole, rhetorical question].",
        parentTip: "Read each example aloud — the rhythm often helps identify the device.",
        sentences: [
          { text: "Appealing to the speaker's credibility or character is called ___.", blanks: ["ethos"] },
          { text: "An appeal to the audience's emotions is called ___.", blanks: ["pathos"] },
          { text: "An appeal to reason, evidence, or logic is called ___.", blanks: ["logos"] },
          { text: "The repetition of a word or phrase at the beginning of successive clauses is called ___.", blanks: ["anaphora"] },
          { text: "Placing two contrasting ideas side by side for emphasis is called ___.", blanks: ["antithesis"] },
          { text: "A list of three parallel items used for emphasis or rhythm is called a ___.", blanks: ["tricolon"] },
        ],
      },
      {
        type: "true-false" as const,
        title: "Rhetoric: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "Use any false statements as the starting point for a brief explanation — why is it false?",
        statements: [
          { text: "Rhetorical questions expect a direct answer from the audience.", answer: false },
          { text: "Logos is the appeal most likely to move an emotionally resistant audience.", answer: false },
          { text: "A skilled rhetorician uses all three of Aristotle's appeals in combination.", answer: true },
          { text: "Anaphora creates emphasis through the repetition of the same word or phrase.", answer: true },
          { text: "Antithesis requires two contrasting ideas to be placed in the same sentence or consecutive sentences.", answer: true },
          { text: "Ethos is undermined if the audience does not trust or respect the speaker.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing a Passage",
        instruction: "Read the following extract and answer the questions below.\n\n'We did not choose this crisis. We did not cause this crisis. But we — every single one of us — will live with its consequences unless we act now. Ask yourself: what will you tell your children when they ask what you did? History is watching. The future is listening.'",
        parentTip: "Encourage your student to annotate the passage before writing — underline devices, circle keywords.",
        prompts: [
          { text: "Identify two specific rhetorical devices in the extract. Name each device, quote the example, and explain its intended effect.", type: "box" as const },
          { text: "Which of Aristotle's three appeals (ethos, pathos, logos) is most dominant in this extract? Justify your answer with evidence.", type: "lines" as const, lines: 4 },
          { text: "Who do you think the intended audience is, and how do the rhetorical choices reflect that audience?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Aristotle's Three Appeals",
        instruction: "Sort each example into the appeal it primarily uses. Some examples may feel like they overlap — choose the dominant appeal and be ready to explain your reasoning.",
        columns: ["Ethos", "Pathos", "Logos"],
        items: [
          { label: "As the founder of this organisation, I have seen firsthand what works." },
          { label: "Research from the University of Melbourne confirms a 34% reduction." },
          { label: "Picture the relief on a child's face when they finally feel safe." },
          { label: "I am a parent too. I understand what is at stake." },
          { label: "Three independent studies reach the same conclusion." },
          { label: "These are real people — not statistics." },
          { label: "My 20 years of experience in this field have taught me..." },
          { label: "The numbers speak for themselves: this is unsustainable." },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identifying Devices",
        instruction: "Select the correct rhetorical device for each example.",
        parentTip: "If your student gets these wrong, revisit the definitions before moving on.",
        questions: [
          {
            prompt: "'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets.' — Churchill. This is an example of:",
            options: ["Antithesis", "Anaphora", "Hyperbole", "Tricolon"],
            answer: "Anaphora",
          },
          {
            prompt: "'To err is human; to forgive, divine.' — Pope. This is an example of:",
            options: ["Anaphora", "Hyperbole", "Antithesis", "Logos"],
            answer: "Antithesis",
          },
          {
            prompt: "'Friends, Romans, countrymen, lend me your ears.' — Shakespeare. The three-item list is an example of:",
            options: ["Tricolon", "Anaphora", "Antithesis", "Epistrophe"],
            answer: "Tricolon",
          },
          {
            prompt: "'If you prick us, do we not bleed?' — Shakespeare. This is an example of:",
            options: ["Rhetorical question", "Logos", "Antithesis", "Hyperbole"],
            answer: "Rhetorical question",
          },
        ],
      },
      {
        type: "sequence" as const,
        title: "Building a Persuasive Argument",
        instruction: "The steps below describe a strong persuasive essay structure, but they are out of order. Number them 1-6 to show the most logical sequence.",
        items: [
          { label: "Acknowledge a counterargument and refute it" },
          { label: "Introduce your position with a strong hook" },
          { label: "Provide a call to action or a memorable closing statement" },
          { label: "State your thesis clearly" },
          { label: "Present your strongest evidence with analysis" },
          { label: "Present a second point with supporting evidence" },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Appeal Is Dominant?",
        instruction: "Circle the primary appeal being used in each statement.",
        questions: [
          { prompt: "'I have spent thirty years working in this field, so I know what I am talking about.'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "'Consider the devastation a single flood can cause: homes destroyed, families separated, communities shattered.'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "'A 2023 study found that 94% of participants reported significant improvement after treatment.'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "'I stand before you today not as a politician, but as a mother.'", options: ["Ethos", "Pathos", "Logos"] },
          { prompt: "'If we do not act now, by 2050 sea levels will rise by up to one metre.'", options: ["Ethos", "Pathos", "Logos"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Beyond Naming Devices",
        content: "At Year 10, simply naming a device is not enough. Every annotation should follow this pattern: DEVICE — QUOTE — EFFECT. For example: 'The anaphora of \"we shall fight\" (anaphora) builds rhythmic insistence, reinforcing the speaker's message of absolute resolve and drawing the audience into a shared commitment.' The effect sentence is where analysis actually happens.",
      },
      {
        type: "matching" as const,
        title: "Device to Intended Effect",
        instruction: "Match each rhetorical device to the effect it most typically creates.",
        left: [
          "Rhetorical question",
          "Anaphora",
          "Antithesis",
          "Tricolon",
          "Hyperbole",
          "Apostrophe (addressing an absent person or thing)",
          "Alliteration",
          "Inclusive pronoun ('we')",
        ],
        right: [
          "Creates urgency and rhythm; accumulates emphasis",
          "Makes a contrast vivid by placing it directly beside its opposite",
          "Builds memorability and musical quality through sound",
          "Creates solidarity between speaker and audience",
          "Involves the audience as participants; assumes agreement",
          "Creates a sense of completeness or finality",
          "Humanises an abstract concept or absent figure; creates emotional directness",
          "Emphasises through exaggeration; signals emotional intensity",
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Analysis: A Political Speech Extract",
        instruction: "Read the extract below and write a detailed rhetorical analysis.\n\n'The time for half-measures is over. The time for careful words and cautious promises is over. The time for action — real action, lasting action, action that our children can be proud of — is now. I ask you: what are we waiting for?'",
        parentTip: "A strong analysis names the device, quotes the evidence, and explains the intended effect on a specific audience.",
        prompts: [
          { text: "Identify three rhetorical devices in this extract. For each: name the device, quote the example, and explain the effect.", type: "box" as const },
          { text: "Who is the implied audience? How do the rhetorical choices position this audience?", type: "lines" as const, lines: 3 },
          { text: "Which appeal (ethos, pathos, logos) dominates? Is this appropriate for the context?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Advanced Rhetorical Terms",
        instruction: "Complete each definition using these terms: [epistrophe, chiasmus, anadiplosis, synecdoche, metonymy, litotes, euphemism, apophasis].",
        parentTip: "These are extension-level terms — look them up together if needed.",
        sentences: [
          { text: "___ is the repetition of a word or phrase at the end of successive clauses, creating a parallel emphasis.", blanks: ["Epistrophe"] },
          { text: "___ reverses the order of words in a repeated phrase: 'Ask not what your country can do for you — ask what you can do for your country.'", blanks: ["Chiasmus"] },
          { text: "___ uses a part to represent the whole (e.g., 'all hands on deck' — hands represent sailors).", blanks: ["Synecdoche"] },
          { text: "___ replaces a word with a closely associated concept (e.g., 'the crown' for the monarchy).", blanks: ["Metonymy"] },
          { text: "___ understates something by denying its opposite (e.g., 'not bad' meaning 'very good').", blanks: ["Litotes"] },
          { text: "___ mentions a topic by explicitly saying you will not mention it.", blanks: ["Apophasis"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Audience and Context Always Matter",
        content: "The same device can produce very different effects in different contexts and for different audiences. Pathos that moves a grieving community might alienate a sceptical scientific audience. Logos that persuades a policy-maker might leave an emotional rally feeling cold. Always ask: for this specific audience in this specific context, why did the speaker choose this device?",
      },
      {
        type: "open-response" as const,
        title: "Write Your Own Rhetorical Moment",
        instruction: "Choose a topic you feel strongly about. Write a single persuasive paragraph (around 100-150 words) that deliberately includes at least two rhetorical devices from the lesson.",
        parentTip: "Ask your student to annotate their own paragraph before sharing it — labelling devices helps them reflect on their choices.",
        prompts: [
          { text: "Your persuasive paragraph:", type: "box" as const },
          { text: "Label the rhetorical devices you used and explain the effect you intended for each.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Effective or Counterproductive?",
        instruction: "Sort each rhetorical choice into 'Effective for the stated audience' or 'Likely to alienate or undermine credibility' given the described context.",
        parentTip: "Discuss the reasoning for each — there may be legitimate disagreement.",
        columns: ["Effective for this audience", "Likely to alienate or undermine credibility"],
        items: [
          { label: "Using heavy statistical evidence in an address to a community meeting of local residents affected by a bushfire" },
          { label: "Using emotional personal testimony when presenting to a parliamentary committee seeking data" },
          { label: "Using anaphora in the climax of a graduation speech" },
          { label: "Using hyperbole in a scientific report on climate change" },
          { label: "Using inclusive 'we' language in a speech to a divided community" },
          { label: "Using sarcasm when addressing a hostile politician in a formal debate" },
          { label: "Using a personal story to open a charity fundraising appeal" },
          { label: "Appealing to emotion without any evidence in a persuasive essay for an academic audience" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Annotating a Speech",
        instruction: "Find the text of a speech you find compelling — suggested: Martin Luther King's 'I Have a Dream', Greta Thunberg's 2019 UN address, Malala Yousafzai's Nobel lecture, or Paul Keating's Redfern Address. Annotate a 200-word extract.",
        prompts: [
          { text: "Copy or paste the extract here:", type: "box" as const },
          { text: "List every rhetorical device you can identify, with quotation and effect for each:", type: "box" as const },
          { text: "Write a 150-word rhetorical analysis of the extract as a whole:", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Rhetorical Context",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "The 'rhetorical situation' refers to:",
            options: [
              "The list of devices used in a speech",
              "The context in which communication occurs, including speaker, audience, purpose and occasion",
              "The logical structure of an argument",
              "The emotional tone of a text",
            ],
            answer: "The context in which communication occurs, including speaker, audience, purpose and occasion",
          },
          {
            prompt: "Which of the following is the best description of 'kairos'?",
            options: [
              "A type of logical fallacy in argumentation",
              "The credibility the speaker brings to their argument",
              "The opportune moment or timeliness of a rhetorical act",
              "A Greek form of the tricolon",
            ],
            answer: "The opportune moment or timeliness of a rhetorical act",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Ethos Under Pressure",
        instruction: "A speaker's ethos can be attacked or undermined by an opponent. Explore how ethos is built and how it can be destroyed.",
        prompts: [
          { text: "Describe two specific ways a speaker can build ethos in a speech or piece of writing.", type: "lines" as const, lines: 3 },
          { text: "Describe two ways an opponent might attempt to undermine or attack a speaker's ethos.", type: "lines" as const, lines: 3 },
          { text: "Find a real example of a public figure whose ethos was significantly damaged. How did this affect the reception of their arguments?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhetoric in the Wild",
        instruction: "Look for rhetoric outside the classroom this week.",
        suggestions: [
          "Watch a political speech, a TED Talk, or a charity advertisement. Write down three specific language choices the speaker makes and analyse the intended effect of each.",
          "Find an opinion column in a newspaper or online. Highlight examples of ethos, pathos and logos. Which appeal dominates? Is the argument strengthened or weakened by this choice?",
          "Record yourself giving a 1-minute spontaneous speech on a topic you care about. Play it back. Which rhetorical devices did you use naturally, without thinking about it?",
        ],
      },
      {
        type: "open-response" as const,
        title: "Logical Fallacies in Rhetoric",
        instruction: "Rhetoric is not always legitimate. Logical fallacies are rhetorical moves that appear persuasive but are actually deceptive or illogical.",
        parentTip: "Recognising fallacies is a critical thinking skill as much as a rhetorical one — practise spotting them in political debates.",
        prompts: [
          { text: "Define each of the following fallacies and give an original example of each: ad hominem, slippery slope, false dichotomy, appeal to authority (misused), straw man.", type: "box" as const },
          { text: "Find one example of a logical fallacy in a real text (a speech, article or advertisement). Quote the example and explain the fallacy.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Does Knowing the Device Change Its Effect?",
        content: "Once you learn to recognise anaphora, do you still feel its emotional pull? Does critical analysis of rhetoric make you more immune to persuasion — or more appreciative of its craft? Write a 150-word reflection on the relationship between analytical knowledge and aesthetic or emotional response.",
      },
      // ── Developing (21–50) ──
      {
        type: "open-response" as const,
        title: "Comparing Two Speeches",
        instruction: "Choose two speeches on similar topics but from different historical moments or speakers. Write a comparative rhetorical analysis.",
        parentTip: "Suggested pairings: King and Obama on civil rights; Thunberg and Gore on climate; Whitlam and Keating on Australian identity.",
        prompts: [
          { text: "Name the two speeches and briefly describe their context:", type: "lines" as const, lines: 3 },
          { text: "Compare how each speaker constructs ethos. What specific strategies do they use?", type: "box" as const },
          { text: "Where do the rhetorical strategies of the two speeches diverge most significantly? What does this reveal about their different contexts?", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Rhetorical Analysis Sentence Frames",
        instruction: "Complete each analytical sentence frame with appropriate content from a speech or text you are studying.",
        parentTip: "These frames model the kind of analytical writing expected in Year 10 and senior English.",
        sentences: [
          { text: "Through the use of ___ [device], the speaker creates a sense of ___ [effect], positioning the audience to ___ [response].", blanks: ["[device]", "[effect]", "[response]"] },
          { text: "The repeated use of ___ [device] in the phrase '___' [quote] accumulates ___ [effect], reinforcing the speaker's central claim that ___.", blanks: ["[device]", "[quote]", "[effect]", "[claim]"] },
          { text: "By appealing primarily to ___ [ethos/pathos/logos], the speaker addresses an audience that values ___ [value], suggesting that the rhetorical context rewards ___ [approach].", blanks: ["[appeal]", "[value]", "[approach]"] },
        ],
      },
      {
        type: "true-false" as const,
        title: "Rhetoric in Advertising",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Advertising relies exclusively on pathos and never uses logos.", answer: false },
          { text: "Celebrity endorsement is a form of ethos appeal.", answer: true },
          { text: "The use of statistics in an advertisement is always a reliable logos appeal.", answer: false },
          { text: "Advertising can use rhetorical questions to create a sense of desire or inadequacy.", answer: true },
          { text: "Repetition of a slogan functions in a similar way to anaphora in a speech.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing an Advertisement Rhetorically",
        instruction: "Choose a print or television advertisement to analyse using rhetorical frameworks.",
        prompts: [
          { text: "Describe the advertisement: what product, what images, what text?", type: "lines" as const, lines: 3 },
          { text: "Identify the primary appeal (ethos, pathos, logos). Quote or describe specific evidence from the advertisement.", type: "lines" as const, lines: 4 },
          { text: "Identify at least two rhetorical devices used in the advertisement. Explain their intended effect.", type: "box" as const },
          { text: "Who is the target audience and how do the rhetorical choices reflect that audience?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Devices by Function",
        instruction: "Sort each device into the column that best describes its primary function.",
        columns: ["Creates emotional impact", "Creates logical structure", "Builds credibility", "Creates rhythm and memorability"],
        items: [
          { label: "Personal narrative — 'I have seen this with my own eyes'" },
          { label: "Statistical evidence — '78% of those surveyed agreed'" },
          { label: "Citation of authority — 'According to the Intergovernmental Panel on Climate Change...'" },
          { label: "Anaphora — repeated sentence openings" },
          { label: "Vivid imagery — 'Imagine a child unable to breathe clean air'" },
          { label: "Tricolon — 'liberty, equality, fraternity'" },
          { label: "First-hand expertise — 'As someone who has worked in this field for 20 years'" },
          { label: "Logical deduction — 'If A is true and B follows from A, then C must be the case'" },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Danger of Over-labelling",
        content: "A common mistake is filling an analysis with device labels but no actual explanation of effect. Aim for quality over quantity: one device fully analysed (what it is, where it appears, what effect it creates, why the writer chose it here) is worth more than five devices just named. Ask yourself: have I explained why this device matters in this text for this audience?",
      },
      {
        type: "open-response" as const,
        title: "Rhetoric in Journalism",
        instruction: "News journalism is often presented as objective, but it uses rhetorical strategies to shape reader response.",
        prompts: [
          { text: "Find a news article on a topic you find interesting. Identify two rhetorical choices the journalist makes (these could be word choice, framing, selection of sources, or use of images described in captions). Explain the effect.", type: "box" as const },
          { text: "Who is positioned as the authority in this article? How is their credibility established?", type: "lines" as const, lines: 3 },
          { text: "Rewrite one paragraph of the article with a different rhetorical approach. What changes?", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Concession and Refutation",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "In a persuasive argument, 'concession' means:",
            options: [
              "Giving up your argument when challenged",
              "Acknowledging the validity of a counterargument before then responding to it",
              "Repeating your main point for emphasis",
              "Using a quote from an authority to support your claim",
            ],
            answer: "Acknowledging the validity of a counterargument before then responding to it",
          },
          {
            prompt: "Why does conceding a counterargument often make a persuasive argument stronger?",
            options: [
              "It makes the speaker appear to have no strong position",
              "It reduces the length of the argument",
              "It demonstrates the speaker's credibility and fair-mindedness, making the audience more receptive",
              "It eliminates the need for evidence",
            ],
            answer: "It demonstrates the speaker's credibility and fair-mindedness, making the audience more receptive",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Practising Concession and Refutation",
        instruction: "Write a short argument that includes a genuine concession followed by an effective refutation.",
        parentTip: "The structure to aim for: 'While it is true that [concession], the evidence ultimately suggests [refutation] because [reason].'",
        prompts: [
          { text: "Choose a debatable topic and write your central claim:", type: "lines" as const, lines: 2 },
          { text: "Write a paragraph that concedes one valid counterargument and then refutes it with specific evidence:", type: "box" as const },
          { text: "Reflect: does the concession make your argument feel stronger or weaker? Why?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Kairos: Timing and Rhetoric",
        instruction: "The ancient Greek concept of kairos refers to the 'opportune moment' — the idea that a speech's impact depends not just on what is said but on when it is said.",
        prompts: [
          { text: "Find a historical speech that you think was especially powerful partly because of its timing. Explain the historical context.", type: "lines" as const, lines: 4 },
          { text: "How might the same speech have been received differently if delivered at a different moment in history?", type: "lines" as const, lines: 3 },
          { text: "Can you think of a contemporary moment where kairos is shaping political rhetoric? Describe it.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Aristotle's Dilemma",
        content: "Aristotle believed rhetoric was a neutral tool that could serve good or evil. But some argue that emotional persuasion bypasses rational judgment and is therefore inherently manipulative. What do you think? Is there a meaningful distinction between legitimate persuasion and manipulation? Write a 200-word argument defending a position.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Political Rhetoric Vocabulary",
        instruction: "Complete each sentence using these terms: [dog whistle, framing, spin, soundbite, talking points, wedge issue].",
        parentTip: "These are terms used in media and political analysis — recognising them is a key media literacy skill.",
        sentences: [
          { text: "A brief, quotable statement designed to be repeated in news coverage is called a ___.", blanks: ["soundbite"] },
          { text: "Language that appears neutral but carries coded meaning for a particular audience is called a ___.", blanks: ["dog whistle"] },
          { text: "The way a political operator presents information to make their client look as positive as possible is called ___.", blanks: ["spin"] },
          { text: "The way an issue is presented — including which aspects are emphasised and which are downplayed — is called ___.", blanks: ["framing"] },
          { text: "A controversial issue deliberately used to divide the electorate and gain political advantage is called a ___.", blanks: ["wedge issue"] },
          { text: "Prepared messages that a politician or spokesperson is expected to repeat consistently across interviews are called ___.", blanks: ["talking points"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Digital Rhetoric",
        instruction: "Online communication — social media posts, YouTube videos, memes, podcasts — has developed its own rhetorical conventions.",
        prompts: [
          { text: "Choose one form of digital communication (e.g. Twitter/X, TikTok, a podcast). What rhetorical strategies does this form favour? What constraints does it impose?", type: "box" as const },
          { text: "How does the affordances of the platform shape the rhetoric? (For example: character limits force brevity; video allows tone and body language to supplement words.)", type: "lines" as const, lines: 4 },
          { text: "Analyse one specific example of effective digital rhetoric. What makes it persuasive in its medium?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing a Persuasive Speech",
        instruction: "Write a 3-minute persuasive speech (approximately 350-400 words) on a topic you care about. Deliberately include at least four rhetorical devices and all three of Aristotle's appeals.",
        parentTip: "Your student should deliver this speech aloud after writing it — the experience of performing rhetoric deepens analytical understanding.",
        prompts: [
          { text: "Your speech:", type: "box" as const },
          { text: "Annotate your speech: circle and label every rhetorical device and appeal you used.", type: "lines" as const, lines: 2 },
          { text: "Reflect: which devices felt most natural to use? Which were challenging? Why?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhetoric in Context",
        instruction: "Choose one extended activity.",
        suggestions: [
          "Watch three political speeches from three different decades. Write a 300-word analysis comparing the rhetorical styles: what has stayed the same, what has changed, and what might explain the differences?",
          "Find a transcript of a live debate (parliamentary, political, or academic). Identify five different rhetorical moves — for each, explain the device, the context, and its intended effect.",
          "Write two versions of a speech on the same topic: one that relies primarily on pathos, one that relies primarily on logos. Deliver both to a family member and ask which was more persuasive. Reflect on their response.",
        ],
      },
      // ── Consolidating (51–80) ──
      {
        type: "open-response" as const,
        title: "Sustained Rhetorical Analysis",
        instruction: "Write a full rhetorical analysis of a speech of your choice. Your analysis should be 400-500 words and include: identification and analysis of at least four rhetorical devices; analysis of all three appeals; discussion of the rhetorical situation; and a central analytical argument.",
        parentTip: "This task should be attempted independently under timed conditions (45 minutes recommended).",
        prompts: [
          { text: "Your rhetorical analysis:", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Advanced Rhetorical Concepts",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "What is the difference between 'rhetoric' and 'sophistry'?",
            options: [
              "Rhetoric uses facts; sophistry uses emotions",
              "Rhetoric aims at truth through persuasion; sophistry uses persuasion deceptively, regardless of truth",
              "Rhetoric is spoken; sophistry is written",
              "There is no meaningful difference between them",
            ],
            answer: "Rhetoric aims at truth through persuasion; sophistry uses persuasion deceptively, regardless of truth",
          },
          {
            prompt: "Which of the following best describes 'deliberative rhetoric'?",
            options: [
              "Rhetoric used to praise or blame someone's character",
              "Rhetoric used in law courts to argue about past events",
              "Rhetoric used to persuade an audience about future actions and policy",
              "Rhetoric used in academic writing to cite authorities",
            ],
            answer: "Rhetoric used to persuade an audience about future actions and policy",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Writing about Rhetoric vs Writing Rhetorically",
        content: "There is a difference between writing analytically about rhetoric (explaining how a device works in a text) and writing rhetorically yourself (deploying devices to persuade). Both are valuable skills — but in an analytical essay, your job is primarily the first. Make sure your analytical sentences are clear, precise and evidence-based, not themselves reliant on emotional appeals.",
      },
      {
        type: "open-response" as const,
        title: "Rhetoric and Power",
        instruction: "Rhetoric is not ideologically neutral — it has historically been used both to empower marginalised groups and to maintain structures of dominance.",
        prompts: [
          { text: "Find one example of a speech that used rhetoric to challenge an unjust power structure. Identify two specific rhetorical strategies and explain how they served the speaker's purpose.", type: "box" as const },
          { text: "Find one example of rhetoric used to maintain or advance an unjust cause. What rhetorical devices were used? How did they work?", type: "box" as const },
          { text: "What does this comparison suggest about the ethics of rhetorical skill?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Classical Rhetorical Structure",
        instruction: "Complete the description of classical oration structure using these terms: [exordium, narratio, partitio, confirmatio, refutatio, peroratio].",
        sentences: [
          { text: "The ___ is the opening section, designed to secure the audience's attention and goodwill.", blanks: ["exordium"] },
          { text: "The ___ provides the background context and facts relevant to the argument.", blanks: ["narratio"] },
          { text: "The ___ outlines the key points the speaker will make.", blanks: ["partitio"] },
          { text: "The ___ presents the main arguments and evidence supporting the speaker's position.", blanks: ["confirmatio"] },
          { text: "The ___ refutes counterarguments and opposing positions.", blanks: ["refutatio"] },
          { text: "The ___ is the conclusion, often including an emotional appeal and a call to action.", blanks: ["peroratio"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric in Literature",
        instruction: "Fictional characters frequently give speeches — in novels, plays and films. Analyse the rhetoric of a fictional speech.",
        prompts: [
          { text: "Choose a speech delivered by a fictional character (from a play, novel or film). Name the text and describe the context of the speech.", type: "lines" as const, lines: 3 },
          { text: "Analyse the speech using rhetorical frameworks: identify at least three devices, the dominant appeal, and the intended effect on the fictional audience.", type: "box" as const },
          { text: "How does the author's use of rhetoric in this speech reveal something about the character's motives or the text's themes?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Rhetorical Purpose",
        instruction: "Sort each rhetorical move into the column that best describes its primary purpose in a speech.",
        columns: ["To build credibility", "To create urgency", "To foster shared identity", "To undermine the opposition"],
        items: [
          { label: "Citing personal experience and expertise" },
          { label: "Describing a crisis with vivid imagery" },
          { label: "Using inclusive 'we' and 'our community'" },
          { label: "Conceding a point before devastating the counterargument" },
          { label: "Quoting a universally respected authority" },
          { label: "Using short, staccato sentences to signal emergency" },
          { label: "Referencing shared cultural values and history" },
          { label: "Pointing to logical flaws or hypocrisy in the opponent's position" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Evaluating Rhetorical Effectiveness",
        instruction: "A speech's rhetorical strategies must suit its purpose, audience and context. Evaluate the effectiveness of a speech you have studied.",
        prompts: [
          { text: "Name the speech and describe its rhetorical situation (speaker, audience, purpose, occasion):", type: "lines" as const, lines: 3 },
          { text: "Evaluate the effectiveness of the speaker's appeal to ethos, pathos, and logos. For each: what strategy was used, and did it work for this specific audience?", type: "box" as const },
          { text: "If you were advising this speaker, what would you change about their rhetorical choices, and why?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Unsaid: Rhetoric of Omission",
        instruction: "Rhetoric is not only about what is said — what is left unsaid can be equally powerful.",
        parentTip: "This connects with the representation strand — omission is both a rhetorical and an ideological choice.",
        prompts: [
          { text: "Choose a speech or persuasive text. Identify two significant omissions — things a critical audience might expect to be addressed that the speaker does not mention.", type: "box" as const },
          { text: "What is the rhetorical effect of these omissions? Who benefits from them, and who might be misled?", type: "lines" as const, lines: 4 },
          { text: "Write a 'missing paragraph' that addresses one of the omissions. How does adding it change the overall argument?", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Greatest Speech Never Heard",
        content: "History is full of great speeches that were heard by millions. But whose voice was silenced — who had the eloquence and the cause but not the platform? Write a 300-word speech in the voice of someone whose rhetorical power was never given a public stage. Think about the rhetorical strategies you use, and why.",
      },
      {
        type: "open-response" as const,
        title: "Rhetoric and Truth",
        instruction: "A fundamental question in rhetoric: must a persuasive argument be a true one?",
        prompts: [
          { text: "Define 'post-truth politics'. How does it relate to the classical relationship between rhetoric and truth?", type: "lines" as const, lines: 4 },
          { text: "Find one example of rhetoric that uses emotionally compelling language to communicate a claim that lacks factual support. Analyse the rhetorical strategies used.", type: "box" as const },
          { text: "What responsibility does a rhetorically skilled speaker have to the truth? What happens to public discourse when that responsibility is abandoned?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Extended Rhetoric Project",
        instruction: "Choose one project to complete over the coming week.",
        suggestions: [
          "Research the history of one rhetorical device (e.g. anaphora, antithesis, or chiasmus). Find five famous historical examples. Write a 400-word analysis of how the device has been used across different contexts and centuries.",
          "Write and deliver a 5-minute persuasive speech on an issue you care about. Record it. Analyse the recording: identify every rhetorical device you used, every appeal, and evaluate your own effectiveness.",
          "Read Aristotle's Rhetoric (Book I is available online). Write a 400-word reflection: which of Aristotle's ideas feel most relevant to contemporary communication? Which feel outdated?",
        ],
      },
      // ── Extending (81–100) ──
      {
        type: "open-response" as const,
        title: "Contested Rhetoric: Both Sides",
        instruction: "Choose a contemporary controversial issue. Write two short speeches: one using rhetoric to argue each side of the issue.",
        parentTip: "This task builds empathy and analytical flexibility — both are prerequisites for sophisticated argument.",
        prompts: [
          { text: "Speech 1 (Position A): 150-200 words, using at least three rhetorical devices:", type: "box" as const },
          { text: "Speech 2 (Position B): 150-200 words, using at least three rhetorical devices:", type: "box" as const },
          { text: "Reflect: which side was harder to argue? What does that difficulty reveal about your own assumptions?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetorical Analysis: Full Essay",
        instruction: "Write a complete rhetorical analysis essay (500-600 words) on a speech of your choice. Your essay should: introduce the rhetorical situation; develop a central analytical argument; analyse at least four specific rhetorical choices; and evaluate the speech's overall effectiveness.",
        parentTip: "This is a timed essay task — aim for 50 minutes. Encourage your student to plan for 5 minutes before writing.",
        prompts: [
          { text: "Your essay:", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Rhetorical Analysis Vocabulary: Precision",
        instruction: "Complete each analytical sentence with the most precise term.",
        sentences: [
          { text: "The speaker's use of ___ — the repetition of the phrase 'we shall never surrender' at the start of each clause — creates rhythmic insistence that mimics the relentlessness of the speaker's resolve.", blanks: ["anaphora"] },
          { text: "The ___ — the contrast between 'give me liberty or give me death' — sharpens the rhetorical choice the speaker presents to the audience, making compromise seem unthinkable.", blanks: ["antithesis"] },
          { text: "The speaker's appeal to ___ is established through the repeated citation of her professional credentials and firsthand experience, positioning her as an unimpeachable authority on the subject.", blanks: ["ethos"] },
          { text: "The emotional weight of the address is carried largely by the appeal to ___, particularly through the use of specific human stories that place a recognisable human face on an otherwise abstract policy debate.", blanks: ["pathos"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric of Silence: The Power of the Pause",
        instruction: "Great orators have always understood that silence — the pause, the unfinished sentence, the deliberate ellipsis — can be as rhetorically powerful as words.",
        prompts: [
          { text: "Watch a great speech and pay attention to where the speaker pauses. Choose three specific pauses and describe what effect they create.", type: "box" as const },
          { text: "In written rhetoric, how can a writer create the equivalent of the spoken pause? Give two examples from texts you have studied.", type: "lines" as const, lines: 4 },
          { text: "Write a short paragraph (5-7 sentences) that deliberately uses fragmentation, ellipsis or short sentences to create rhetorical pauses.", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Rhetoric Across Cultures",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Which statement best describes the relationship between rhetoric and cultural context?",
            options: [
              "Rhetorical principles are universal and work the same way across all cultures",
              "Rhetorical effectiveness depends on cultural norms; what persuades in one context may alienate in another",
              "Rhetoric is a purely Western tradition with no equivalent in other cultures",
              "Cultural context only affects delivery style, not the content of argument",
            ],
            answer: "Rhetorical effectiveness depends on cultural norms; what persuades in one context may alienate in another",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Creating Your Rhetorical Portfolio",
        instruction: "Compile a personal rhetorical portfolio: a collection of your own best analytical and persuasive writing from this worksheet.",
        prompts: [
          { text: "Select two pieces of your writing from this worksheet that you are proudest of. Explain why you chose each one and what it demonstrates about your rhetorical skill.", type: "box" as const },
          { text: "Identify one specific area where your rhetorical analysis has improved over the course of this worksheet. What changed?", type: "lines" as const, lines: 4 },
          { text: "Write a 150-word self-set challenge: what rhetorical skill do you want to develop next, and how will you practise it?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Timed Rhetorical Analysis",
        instruction: "Set a timer for 35 minutes. Read the following extract and write a complete rhetorical analysis.\n\n'This is not a debate about opinion. The facts are not in dispute. Every credible scientific institution on earth has confirmed what we already know: our planet is warming, and human activity is the primary cause. The question before us is not whether — it is when, and whether we will act before the window closes. History will not remember those who doubted. It will remember those who chose to do nothing when everything was at stake.'",
        parentTip: "Full exam conditions — no notes, no assistance.",
        prompts: [
          { text: "Your rhetorical analysis (35-minute timed response):", type: "box" as const },
          { text: "Self-evaluation: what did you do well? What would you add with more time?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhetoric: Your Own Research Path",
        instruction: "Choose one independent project to extend your rhetorical knowledge.",
        suggestions: [
          "Research the rhetorical tradition of a non-Western culture (e.g. Indigenous Australian oratory, Classical Chinese rhetoric, West African griot tradition). Write a 400-word comparison with the Aristotelian tradition.",
          "Design a 20-question quiz on rhetorical devices and their effects. Swap it with a study partner or family member. Evaluate the responses.",
          "Write a 500-word critical essay on this question: 'Is rhetoric a tool of democracy or a threat to it?' Use historical examples to support your argument.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Your Manifesto",
        content: "Write a personal rhetorical manifesto: a 200-word statement about what you believe language can do in the world. What do you want to persuade people of? What rhetorical strategies will you use in your own life — in your writing, your conversations, your public voice? Be honest. Be bold.",
      },
      {
        type: "true-false" as const,
        title: "Rhetoric and Persuasion: True or False?",
        instruction: "Decide whether each statement about rhetoric and persuasion is true or false.",
        parentTip: "These statements address fundamental concepts — revisit any that prompt disagreement.",
        statements: [
          { text: "Rhetoric is only used in formal speeches and political contexts.", answer: false },
          { text: "A rhetorical question does not require a literal answer from the audience.", answer: true },
          { text: "Ethos, pathos, and logos are modes of persuasion described by Aristotle.", answer: true },
          { text: "Emotional appeals (pathos) are always manipulative and should be avoided in serious argument.", answer: false },
          { text: "Using evidence and logic (logos) is always more persuasive than an emotional appeal.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Rhetorical Devices: Complete the Definition",
        instruction: "Fill each gap with the correct rhetorical term: [apophasis, hypophora, paralipsis, syllepsis, antithesis].",
        sentences: [
          { text: "___ is the rhetorical device of raising a point by claiming not to raise it (e.g. 'I won't mention his criminal record...').", blanks: ["Paralipsis"] },
          { text: "___ involves asking a question and then immediately answering it yourself.", blanks: ["Hypophora"] },
          { text: "___ places contrasting ideas in balanced opposition to each other.", blanks: ["Antithesis"] },
          { text: "___ uses one word to govern two different but related meanings (e.g. 'She left her keys and her dignity behind').", blanks: ["Syllepsis"] },
          { text: "___ is the same as paralipsis — denying that you are going to say something while saying it.", blanks: ["Apophasis"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identifying Rhetorical Appeals",
        instruction: "Identify which rhetorical appeal (ethos, pathos, or logos) is primarily used in each example.",
        questions: [
          {
            prompt: "'As a doctor who has treated hundreds of patients with this condition, I can tell you that the current guidelines are dangerously inadequate.'",
            options: ["Logos — uses logical evidence", "Pathos — appeals to emotion", "Ethos — establishes authority and credibility", "Kairos — appeals to timing"],
            answer: "Ethos — establishes authority and credibility",
          },
          {
            prompt: "'Every year, thousands of children go to bed hungry in this country. Every year. Thousands of children. We can change this.'",
            options: ["Logos — uses statistics as evidence", "Pathos — uses repetition and imagery to create emotional impact", "Ethos — cites a credible source", "Logos — presents a logical argument"],
            answer: "Pathos — uses repetition and imagery to create emotional impact",
          },
          {
            prompt: "'Studies show that countries with stricter gun laws have significantly lower rates of gun violence. The correlation is clear and consistent across multiple datasets.'",
            options: ["Ethos — cites personal experience", "Pathos — appeals to fear", "Logos — presents evidence and logical reasoning", "Kairos — appeals to the urgency of the moment"],
            answer: "Logos — presents evidence and logical reasoning",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetorical Analysis: Editorial Writing",
        instruction: "Editorial writing is one of the richest sources of rhetorical technique — it is explicitly persuasive and stylistically conscious.",
        parentTip: "Find an editorial from a quality newspaper on a topic your student cares about — engagement with the subject improves the analysis.",
        prompts: [
          { text: "Find an editorial or opinion piece from a quality newspaper or magazine. Identify three specific rhetorical devices used and explain the effect of each.", type: "box" as const },
          { text: "Who is the intended audience for this piece? How do the rhetorical choices reflect the writer's assumptions about their audience?", type: "lines" as const, lines: 4 },
          { text: "Do you find this piece persuasive? Why or why not? Is your response affected by your existing views on the topic?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Difference Between Repetition and Anaphora",
        content: "All anaphora involves repetition, but not all repetition is anaphora. Anaphora is specifically the repetition of a word or phrase at the beginning of successive clauses or sentences for rhetorical effect. Simple repetition of a word within a sentence or across different positions is a broader technique. When you name a device, be precise about what exactly is being repeated and where.",
      },
      {
        type: "open-response" as const,
        title: "Writing with Rhetorical Awareness",
        instruction: "The best persuasive writing uses rhetoric unconsciously — the devices serve the argument so naturally that the reader is not aware of being manipulated.",
        prompts: [
          { text: "Choose a topic you feel strongly about. Write a 200-word persuasive paragraph that naturally incorporates at least three rhetorical devices. Do not make the devices feel forced or artificial — let them serve your argument.", type: "box" as const },
          { text: "Now annotate your paragraph: underline each rhetorical device and note its effect. Did any devices appear that you had not planned to use?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Rhetorical Device",
        instruction: "Circle the correct rhetorical term for each example.",
        questions: [
          {
            prompt: "'The best investment you can make in the future is in the education of the young.' — Followed immediately by the speaker answering their own implied question about how to invest in the future. This technique is:",
            options: ["Anaphora", "Hypophora", "Rhetorical question", "Antithesis"],
          },
          {
            prompt: "'Never have I encountered such courage, such dedication, such sacrifice.' — This is:",
            options: ["Anaphora", "Epistrophe", "Anastrophe", "Chiasmus"],
          },
          {
            prompt: "'We will fight with our hands, with our voices, with our votes.' — This list of three parallel phrases is:",
            options: ["Tricolon", "Polysyndeton", "Asyndeton", "Epistrophe"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Kairos: The Rhetoric of Timing",
        instruction: "Kairos refers to the opportune moment — the idea that a persuasive message must be delivered at the right time to be effective.",
        prompts: [
          { text: "Think of a political speech, advertisement, or public statement that was delivered at a particularly significant moment (e.g. in response to a crisis, on an anniversary, at a turning point). How did the timing of the message contribute to its impact?", type: "box" as const },
          { text: "Can you think of an example where a message failed because its timing was poor? What can this teach us about the role of kairos in persuasion?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Classical Rhetorical Term",
        instruction: "Match each Greek or Latin rhetorical term to its modern description.",
        parentTip: "Knowing the classical origins of rhetorical terms enriches understanding of how rhetoric has been studied for over 2,000 years.",
        left: ["Ethos", "Pathos", "Logos", "Kairos", "Telos"],
        right: [
          "The appeal to reason, logic, and evidence",
          "The purpose or goal of a rhetorical act",
          "The appeal to the speaker's character and credibility",
          "The emotional appeal — moving the audience to feel",
          "The appeal to the right or opportune moment",
        ],
      },
      {
        type: "open-response" as const,
        title: "Propaganda and Rhetoric",
        instruction: "Propaganda uses rhetorical techniques deliberately to manipulate rather than genuinely persuade.",
        parentTip: "This activity develops critical literacy skills essential for media and civic participation.",
        prompts: [
          { text: "Find a historical or contemporary example of propaganda. What rhetorical techniques does it use? How do these techniques work to create an emotional or ideological effect?", type: "box" as const },
          { text: "What distinguishes propaganda from legitimate persuasion? Is the distinction always clear? Where does it become blurry?", type: "lines" as const, lines: 5 },
          { text: "How do you protect yourself from being manipulated by propaganda? What critical reading or thinking habits help?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Rhetorical Category",
        instruction: "Sort these rhetorical concepts into their correct categories.",
        columns: ["Appeals (Ethos/Pathos/Logos)", "Figures of Speech", "Argument Structure"],
        items: [
          { label: "Anaphora" },
          { label: "Establishing credibility" },
          { label: "Counterargument and refutation" },
          { label: "Metaphor" },
          { label: "Statistical evidence" },
          { label: "Emotional narrative" },
          { label: "Tricolon" },
          { label: "Concession" },
          { label: "Expert testimony" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetorical Devices in Advertising",
        instruction: "Advertising is one of the most sophisticated applications of rhetoric in daily life — and one of the most deliberately manipulative.",
        prompts: [
          { text: "Choose three advertisements (print, online, or TV). For each, identify the primary rhetorical appeal used (ethos, pathos, logos) and one specific rhetorical device. Explain how each device serves the advertisement's purpose.", type: "box" as const },
          { text: "Which advertisement do you find most rhetorically effective? Which do you find most manipulative? Is there a difference?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Writing About Rhetoric in Texts",
        content: "When writing about rhetorical devices in analytical essays, always connect the device to the writer's purpose and the effect on the reader. Avoid saying: 'The writer uses tricolon.' Instead write: 'Through tricolon, the writer creates a rhythmic accumulation of ideas that builds to an emotional climax, drawing the reader toward the argument's central conclusion.' The device is only interesting because of its effect.",
      },
      {
        type: "open-response" as const,
        title: "Rhetorical Self-Analysis",
        instruction: "Understanding your own rhetorical habits makes you a more conscious and effective communicator.",
        parentTip: "This reflective activity works well as a conversation between parent and student — share your own rhetorical habits too.",
        prompts: [
          { text: "Think about a time you successfully persuaded someone of something (in a conversation, in writing, or in a different context). What rhetorical strategies did you use, consciously or unconsciously?", type: "box" as const },
          { text: "Think about a time your persuasion failed. What went wrong? Which rhetorical element (ethos, pathos, or logos) was weakest? What would you do differently?", type: "lines" as const, lines: 5 },
          { text: "Write three 'rhetorical intentions' for yourself as a writer and speaker: specific habits or strategies you want to develop in your own communication.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhetoric: Immersive Project",
        instruction: "Choose one extended home activity to deepen your understanding of rhetoric.",
        suggestions: [
          "Listen to three famous speeches from history (search for 'great speeches of the 20th century' to find options). For each speech, write a 200-word rhetorical analysis: identify the occasion, the audience, the speaker's ethos, the primary appeals used, and at least two specific rhetorical devices. Then write a 300-word comparative reflection: which speaker was most rhetorically effective and why?",
          "Create your own speech on a topic you care about deeply. Draft it (400–500 words), then annotate every rhetorical choice you have made. Deliver it aloud (time yourself) and record what works and what you would change. Write a 200-word reflection on the experience of delivering a prepared speech.",
          "Read a chapter from a book on rhetoric (e.g. Aristotle's 'Rhetoric', Jay Heinrichs' 'Thank You for Arguing', or Sam Leith's 'Words Like Loaded Pistols'). Write a 400-word reflection: what ideas from the chapter are most useful to you as a reader, writer, or speaker?",
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetorical Devices: Final Synthesis",
        instruction: "Bring together everything you have learned about rhetoric and stylistic choices.",
        parentTip: "This synthesis task is an ideal portfolio piece for end-of-unit documentation.",
        prompts: [
          { text: "Write a 200-word personal reflection: how has your understanding of rhetoric changed through this worksheet? What do you now notice in texts — written, spoken, visual — that you did not notice before?", type: "box" as const },
          { text: "Identify the three rhetorical techniques you now understand most deeply. For each: give a definition, an example from any text, and an explanation of why it works.", type: "box" as const },
          { text: "Set one specific goal for how you will use rhetorical awareness in your writing or speaking over the next month.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Silence as Rhetoric",
        content: "Not saying something can be as rhetorically powerful as saying it. Think of a time when silence, omission, or what was left unsaid was the most powerful communicative act in a text, a speech, or a conversation you experienced. What was left out? Why did the absence speak so loudly? What does this reveal about the limits and possibilities of language as a tool for meaning?",
      },
      {
        type: "open-response" as const,
        title: "Rhetorical Analysis: Social Media",
        instruction: "Social media posts, tweets, and online content use rhetoric just as speeches and essays do — often in highly compressed forms.",
        parentTip: "This activity connects rhetoric to your student's existing digital literacy and makes the topic highly relevant.",
        prompts: [
          { text: "Find three social media posts or comments that are attempting to persuade (on any platform). For each, identify: the main claim, the rhetorical appeal used (ethos/pathos/logos), and any specific rhetorical devices. Evaluate how effective each is.", type: "box" as const },
          { text: "How does the medium (Twitter, Instagram, TikTok, etc.) constrain or shape the rhetorical choices available? What can a 280-character tweet do rhetorically that a long essay cannot, and vice versa?", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Rhetorical Situation: Complete the Concept",
        instruction: "The 'rhetorical situation' describes the context of any communicative act. Complete each element.",
        parentTip: "Understanding the rhetorical situation is foundational to both producing and analysing any communication.",
        sentences: [
          { text: "The ___ is the person or group that needs to hear the argument and has the power to act on it.", blanks: ["audience"] },
          { text: "The ___ is the problem, issue, or question that makes the communication necessary.", blanks: ["exigence"] },
          { text: "The ___ are the factors (time, place, medium, culture) that constrain and enable rhetorical choices.", blanks: ["constraints"] },
          { text: "The ___ is the underlying attitude or stance the speaker brings to the subject and audience.", blanks: ["tone"] },
          { text: "The ___ is the broader cultural and historical moment in which the communication takes place.", blanks: ["context"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing a Persuasive Speech",
        instruction: "A persuasive speech is one of the most demanding rhetorical challenges — it must work in real time, without the reader having the ability to re-read.",
        prompts: [
          { text: "Choose a topic you care about. Write a 3-minute persuasive speech (approximately 400–450 words) that uses at least four rhetorical devices and addresses all three appeals (ethos, pathos, logos) at some point.", type: "box" as const },
          { text: "Annotate your speech: underline each rhetorical device and label it. Identify the moment where you establish ethos, appeal to pathos, and use logos.", type: "lines" as const, lines: 4 },
          { text: "Read your speech aloud and time it. What works well when heard rather than read? What would you change?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Advanced Rhetorical Analysis",
        instruction: "Choose the best answer for each question about advanced rhetoric.",
        questions: [
          {
            prompt: "A 'strawman' fallacy involves:",
            options: [
              "Presenting a distorted, weakened version of an opponent's argument in order to refute it more easily",
              "Appealing to authority without providing evidence",
              "Using emotional language to manipulate rather than persuade",
              "Making a claim without providing any evidence",
            ],
            answer: "Presenting a distorted, weakened version of an opponent's argument in order to refute it more easily",
          },
          {
            prompt: "An 'ad hominem' fallacy attacks:",
            options: [
              "The evidence rather than the argument",
              "The speaker's character or personal attributes rather than their argument",
              "The emotional appeal of the argument",
              "The logical structure of the argument",
            ],
            answer: "The speaker's character or personal attributes rather than their argument",
          },
          {
            prompt: "The 'slippery slope' fallacy argues that:",
            options: [
              "An argument is invalid because it involves a sequence of steps",
              "One event will inevitably lead to a series of negative consequences without sufficient evidence for this chain",
              "All arguments should be presented in order from weakest to strongest",
              "The audience should agree because the speaker has authority",
            ],
            answer: "One event will inevitably lead to a series of negative consequences without sufficient evidence for this chain",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Acknowledging Your Rhetorical Choices",
        content: "A sophisticated writer is conscious of their rhetorical choices and can explain them. When you write a persuasive text, keep a 'rhetorical decision log': for each major choice (tone, structure, specific device), note what you intended. This metacognitive practice builds awareness that makes your next piece of persuasive writing stronger.",
      },
      {
        type: "open-response" as const,
        title: "Logical Fallacies: Recognition and Refutation",
        instruction: "Recognising logical fallacies protects you from manipulation and strengthens your own arguments.",
        parentTip: "Logical fallacies appear constantly in media, advertising, and everyday conversation — developing the habit of spotting them is a lifelong critical thinking tool.",
        prompts: [
          { text: "Find one example of a logical fallacy in any text (an advertisement, a news comment, a political speech, or everyday conversation). Name the fallacy and explain why it is fallacious.", type: "box" as const },
          { text: "Write a refutation of the fallacious argument — explain why the reasoning does not hold, and what a stronger version of the argument would look like.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric: Extended Synthesis",
        instruction: "Bring together your learning about rhetorical devices and stylistic choices in a comprehensive reflection.",
        parentTip: "This extended synthesis task marks the completion of a significant strand of study in Year 10 English — celebrate what your student has achieved.",
        prompts: [
          { text: "Write a 250-word synthesis: what are the three most important things you now understand about how language is used to persuade? How has this understanding changed how you experience the texts and communications around you?", type: "box" as const },
          { text: "Describe a specific situation — past or future — where rhetorical awareness could make a meaningful difference in your life. How would you approach it differently now than before you studied rhetoric?", type: "lines" as const, lines: 5 },
          { text: "Name one rhetorical technique or concept that you want to explore further. How will you do so?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhetoric: Lifelong Engagement",
        instruction: "Choose one ongoing home activity to sustain your rhetorical awareness.",
        suggestions: [
          "For two weeks, keep a 'Rhetoric Journal': each day, find one example of rhetoric in your environment (advertising, news, conversation, social media). Note the rhetorical technique, the appeal, and your evaluation of its effectiveness. At the end of two weeks, write a 300-word reflection on what patterns you noticed.",
          "Read a book about rhetoric or persuasion (options include: 'Thank You for Arguing' by Jay Heinrichs, 'Words Like Loaded Pistols' by Sam Leith, or 'The Elements of Eloquence' by Mark Forsyth). Write a 400-word review that explains what you found most useful and how you will apply it.",
          "Attend or watch a live debate, panel discussion, or formal speech. Write a 400-word rhetorical analysis: evaluate each speaker's ethos, pathos, and logos; identify specific rhetorical devices; and assess which speaker was most effective and why.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Ethics of Persuasion",
        content: "You now know a great deal about how to persuade. That is a form of power — and power carries responsibility. Think about how you want to use the rhetorical knowledge you have gained. What would it mean to persuade ethically — to change minds through genuine argument rather than manipulation? Are there things you would refuse to argue for, even if you could make a compelling case? Write 200 words about the ethics of your own rhetoric.",
      },
      {
        type: "open-response" as const,
        title: "Rhetoric in Environmental Communication",
        instruction: "Environmental advocates, sceptics, and scientists all use rhetoric to communicate about complex issues.",
        parentTip: "Connect this to any science or current affairs your student is following — cross-disciplinary application deepens rhetorical awareness.",
        prompts: [
          { text: "Find two pieces of environmental communication — one from a scientific or advocacy perspective, one from a sceptical or industry perspective. Compare the rhetorical strategies used: appeals, devices, tone, framing. What does the comparison reveal about how rhetoric shapes public debate on complex issues?", type: "box" as const },
          { text: "What special rhetorical challenges does scientific communication face that political persuasion does not? How do scientists communicate uncertainty persuasively?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Logical Fallacies: True or False?",
        instruction: "Decide whether each statement about logical fallacies is true or false.",
        statements: [
          { text: "A false dichotomy presents only two options when more actually exist.", answer: true },
          { text: "An appeal to authority is always a fallacy.", answer: false },
          { text: "The 'bandwagon' fallacy argues that something is true because many people believe it.", answer: true },
          { text: "Post hoc reasoning assumes causation from correlation.", answer: true },
          { text: "Circular reasoning provides new evidence to support its own conclusion.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric and Narrative",
        instruction: "Storytelling is one of the most powerful rhetorical tools — it creates empathy, makes the abstract concrete, and is deeply memorable.",
        prompts: [
          { text: "Find an example of storytelling used as a rhetorical device in any non-fiction text (a speech, essay, advertisement, or news article). How does the story work rhetorically — what emotional or argumentative work does it do?", type: "box" as const },
          { text: "Write a short personal story (100 words) that could be used rhetorically to support an argument on any social issue. Identify the argument it supports and explain how the story creates the effect.", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric: Reflection on Your Development",
        instruction: "The study of rhetoric is a lifelong discipline — what you have learned here is a beginning, not an end.",
        parentTip: "This reflective activity makes an excellent final entry in a rhetoric learning journal or portfolio.",
        prompts: [
          { text: "What is the single most valuable thing you have learned about rhetoric and how language persuades? Why is it valuable — for your reading, your writing, or your life?", type: "lines" as const, lines: 4 },
          { text: "How has studying rhetoric changed the way you experience being an audience — of speeches, advertising, news, social media, or everyday conversation?", type: "box" as const },
          { text: "What one aspect of rhetoric do you want to explore further in your independent reading or study?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Logical Fallacy",
        instruction: "Circle the name of the logical fallacy illustrated in each example.",
        questions: [
          {
            prompt: "'Everyone is buying this product, so it must be good.'",
            options: ["False dichotomy", "Bandwagon fallacy", "Ad hominem", "Straw man"],
          },
          {
            prompt: "'We should not listen to his argument about taxation — he's been divorced three times.'",
            options: ["Post hoc reasoning", "Appeal to authority", "Ad hominem", "Circular reasoning"],
          },
          {
            prompt: "'If we allow same-sex marriage, next people will want to marry animals.'",
            options: ["Slippery slope", "False dichotomy", "Bandwagon", "Straw man"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetorical Devices: Extended Personal Application",
        instruction: "The most valuable result of studying rhetoric is the ability to apply it in your own communications.",
        prompts: [
          { text: "Write a letter (real or imagined) to a person in authority advocating for something you believe in — a policy change, a local issue, an educational decision. Use at least four rhetorical devices and all three appeals. Annotate your choices.", type: "box" as const },
          { text: "Reflect: which rhetorical choices felt most natural? Which felt forced? What does this tell you about the relationship between rhetoric and authenticity?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhetoric: Final Immersive Practice",
        instruction: "Choose one extended final activity to consolidate your rhetorical knowledge.",
        suggestions: [
          "Find and read a full-length essay by a skilled writer known for rhetorical craft (try George Orwell's 'Politics and the English Language', Joan Didion's 'The White Album', James Baldwin's 'Notes of a Native Son', or a long-form essay from The Monthly or Quarterly Essay). Write a 500-word rhetorical analysis covering: the rhetorical situation, the appeals, specific devices, and your evaluation of the essay's effectiveness.",
          "Create a 'Rhetoric Anthology': collect 10 examples of effective rhetorical writing or speaking from different contexts (speeches, essays, advertisements, news, literature). For each, write 150 words analysing the key rhetorical features. Add a 300-word introduction explaining what principles of effective rhetoric your anthology reveals.",
          "Write and deliver a persuasive speech on a real issue you care about, to a real audience (family, friends, or a small group). Record it if possible. Afterwards, write a 400-word reflection: what rhetorical choices did you make? What was their effect? What would you do differently, and why?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Most Persuasive Thing You Have Ever Encountered",
        content: "Think of the most persuasive piece of communication you have ever encountered — the speech, the advertisement, the essay, the argument, the story that was most effective in changing how you thought or felt. What made it persuasive? Was it the argument, the emotion, the credibility of the speaker, the timing, or something you cannot quite name? Now think about whether knowing why it was persuasive changes your response to it.",
      },
      {
        type: "open-response" as const,
        title: "Rhetoric: Annotating Your Own Writing",
        instruction: "Annotating rhetorical choices in your own writing is one of the most powerful tools for developing as a communicator.",
        parentTip: "This annotation activity is excellent preparation for any oral or written assessment that asks students to reflect on their own communicative choices.",
        prompts: [
          { text: "Take a piece of persuasive writing you have produced for this worksheet or any other context. Annotate every deliberate rhetorical choice: label each technique, identify the appeal used, and note the intended effect.", type: "box" as const },
          { text: "What pattern of rhetorical choices do you notice in your own writing? What does this reveal about your communicative strengths and habits?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Rhetoric: Senior-Level Review",
        instruction: "A senior-level review of rhetorical concepts.",
        statements: [
          { text: "Kairos refers to the credibility and character of the speaker.", answer: false },
          { text: "An enthymeme is a syllogism with one premise left unstated because it is assumed to be shared by the audience.", answer: true },
          { text: "Using pathos is always manipulative and should be avoided in serious argument.", answer: false },
          { text: "A concession in an argument acknowledges the partial validity of an opposing view.", answer: true },
          { text: "The classical five canons of rhetoric are: invention, arrangement, style, memory, and delivery.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric: Your Final Statement",
        instruction: "This is your final activity for the Rhetorical Devices and Stylistic Choices worksheet.",
        prompts: [
          { text: "Write a 200-word statement about what rhetoric means to you now — as a reader, a writer, and a person navigating a world full of persuasive messages. What will you carry forward from this study?", type: "box" as const },
          { text: "What is one piece of rhetoric — a text, a speech, a campaign, or an argument — that you want to study more deeply as a result of what you have learned here?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric in Everyday Life: Final Observation",
        instruction: "Rhetorical awareness transforms how you experience everyday communication.",
        parentTip: "Keep this as a baseline — revisit it at the end of Year 11 to see how your student's observations have deepened.",
        prompts: [
          { text: "Over the next week, keep a brief daily log (2–3 sentences per day) of one rhetorical act you notice in your environment — an advertisement, a news headline, a political statement, a social media post, or an everyday conversation. What pattern emerges across the week?", type: "box" as const },
          { text: "What does this week of observation reveal about the ubiquity of rhetoric in daily life? How has your awareness changed what you notice?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "matching" as const,
        title: "Rhetorical Figures: Advanced Matching",
        instruction: "Match each advanced rhetorical figure to its description.",
        left: ["Enthymeme", "Apophasis", "Antanaclasis", "Synecdoche", "Periphrasis"],
        right: [
          "A syllogism with an unstated but implied premise",
          "Using a roundabout phrase instead of a direct word",
          "Repetition of a word in a different sense",
          "Denial of saying what you are about to say",
          "Using a part to represent the whole",
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric: Independent Exploration",
        instruction: "Choose one area of rhetoric that you want to explore further, independently.",
        prompts: [
          { text: "Identify an aspect of rhetoric — a device, an appeal, a historical period, a particular communicator — that you want to research further. Write a 200-word plan for how you will explore it: what will you read, watch, or practice?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Rhetoric: Portfolio and Progress",
        instruction: "Bring together evidence of your rhetorical development in a final portfolio reflection.",
        prompts: [
          { text: "Select one piece of persuasive writing and one example of rhetorical analysis from this worksheet that represent your best work. Write a 200-word reflection on what each piece demonstrates about your current level as a rhetorical thinker and communicator.", type: "box" as const },
          { text: "Set yourself three specific rhetorical goals for Year 11 — one for reading, one for writing, and one for speaking.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: What Persuasion Can and Cannot Do",
        content: "Rhetoric can change minds, open hearts, and move people to action. But it cannot compel genuine belief — and when people realise they have been manipulated rather than persuaded, the result is often the opposite of the intended effect. Think about what this tells us about the limits of rhetoric. What can words alone achieve? What requires something beyond persuasion — evidence, action, lived experience, or time?",
      },
      {
        type: "open-response" as const,
        title: "Rhetoric: Your Final Reflection",
        instruction: "A final, personal reflection on everything you have learned about rhetoric and stylistic choices.",
        parentTip: "This is an excellent addition to a Year 10 English portfolio — it captures the student's voice and metacognitive development at the end of this unit.",
        prompts: [
          { text: "Write a 150-word letter to your Year 8 self, explaining what you now understand about how language is used to persuade — and why it matters.", type: "box" as const },
          { text: "What is the single most important thing a young person should know about rhetoric in the digital age? How would you explain it to someone who has never studied it?", type: "lines" as const, lines: 4 },
        ],
      },
    ],
  },

  // ── WS 3: Close Reading & Literary Devices ────────────────────────────────────
  {
    slug: "close-reading-literary-devices",
    title: "Close Reading & Literary Devices",
    strand: "Literature",
    description:
      "Develop the close reading techniques central to senior English — analysing how literary devices contribute to aesthetic quality, meaning and the positioning of the reader.",
    learningGuide: {
      concept:
        "Close reading means slowing down to ask why this word, this image, this structural choice — and what cumulative effect all these choices create. It is the core skill of literary study.",
      activation:
        "Open any novel or poem at a random page. Ask: what is the first word or image that stands out? Why might the writer have chosen it?",
      check:
        "Can your student move from 'this is a metaphor' to 'this metaphor achieves X effect, which positions the reader to feel Y'?",
    },
    lesson: {
      title: "Reading Closely: The Art of Slowing Down",
      objective:
        "Apply close reading techniques to a short literary extract, analysing how specific devices create meaning and aesthetic effect.",
      materials: [
        "A short poem or the opening page of a novel your student is studying",
        "A highlighter or coloured pens",
        "Paper and pen",
      ],
      intro: {
        title: "Why Slow Down?",
        script:
          "Most of the time we read for information — we move quickly through a text, extracting what we need. Literary reading asks us to do something different: to slow down and pay attention to how language itself is working. The same content told in different words would be a different text. So the question we always bring to literary reading is: why these words? Why this order? Why this form? Those choices accumulate into something we call aesthetic effect — the overall impression the text makes on us as an experience, not just as a delivery of information.",
        action:
          "Choose two or three sentences from the opening of your student's set text. Read them aloud slowly, twice. Then ask: what is the mood of these sentences? What created that mood? List three specific words or phrases.",
      },
      mainActivity: {
        title: "A Toolkit of Devices",
        script:
          "You probably know many literary devices already — metaphor, simile, personification, alliteration. At this level, we want to use them as analytical tools, not just labels. The question is never just 'is there a metaphor here?' but 'what does this metaphor do? What two things is it connecting, and what does that connection suggest about meaning?' The same is true for structure: why does this poem have short lines? Why does this sentence run on for half a page? Form and content work together. When they work against each other — when the form contradicts the content — that tension is usually where the most interesting meaning lives.",
        action:
          "Together, annotate your chosen extract. For each device you find, write: the device name, the quote, and one sentence about its effect. Aim for at least five annotations between you. It is fine to disagree about the effect — discuss it.",
      },
      wrapUp: {
        title: "From Analysis to Argument",
        script:
          "Here is the challenge of close reading: you can analyse forever and never arrive at an argument. At some point you have to step back and say: so what? What do all these choices add up to? What is the text actually doing with the reader? Let us try to put your annotations together into a single sentence that makes an argument about this extract.",
        action:
          "Student drafts one analytical sentence in the form: 'Through [device], [author] constructs [effect], positioning the reader to [response].'",
      },
      parentTip:
        "If you both find this extract confusing, that is worth naming. Some literary texts are deliberately difficult. You might say: I am not sure I understand this yet — let us figure out what we do notice, and build from there. Shared uncertainty is a legitimate starting point for literary discussion.",
      extension:
        "Find two critical perspectives on the same text (a review, a journal article, or a study guide). How do different readers interpret the same devices differently? Write a paragraph synthesising the perspectives.",
      resources: [
        {
          title: "CrashCourse Literature: Close Reading",
          url: "https://www.youtube.com/watch?v=2XtJ86NE_RM",
          description:
            "A practical, entertaining guide to close reading techniques for literary texts.",
        },
        {
          title: "ReadWriteThink: Literary Analysis",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/literary-analysis-beyond-five",
          description:
            "Approaches to moving from basic analysis to nuanced literary argument.",
        },
        {
          title: "Purdue OWL: Literary Criticism",
          url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/literary_theory_and_schools_of_criticism/index.html",
          description:
            "An overview of major critical approaches, from formalism to postcolonialism.",
        },
      ],
    },
    activities: [
      // ── Foundational (1-20) ──
      {
        type: "matching" as const,
        title: "Literary Devices: From Label to Effect",
        instruction: "Match each literary device on the left to the analytical statement about its effect on the right.",
        left: [
          "Extended metaphor",
          "Enjambment",
          "Stream of consciousness",
          "Dramatic irony",
          "Pathetic fallacy",
          "Free verse",
          "Unreliable narrator",
          "Intertextuality",
        ],
        right: [
          "Creates tension by giving the audience knowledge a character lacks, implicating us in the unfolding tragedy",
          "Invites the reader to question whose version of events to trust, making us active interpreters",
          "Allows the poem to breathe across lines, creating momentum or mimicking thought",
          "Uses the natural world to mirror or amplify a character's emotional state",
          "Creates a sense of interiority and psychological complexity, collapsing narrative distance",
          "Sustains a comparison across a whole text, allowing the vehicle to accumulate layers of meaning",
          "Signals a relationship to other texts, positioning the work within a tradition or dialogue",
          "Resists fixed rhythmic pattern, suggesting freedom, instability, or the rejection of convention",
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Core Literary Device Vocabulary",
        instruction: "Complete each definition with the correct term: [metaphor, simile, personification, alliteration, assonance, onomatopoeia, symbolism, motif].",
        parentTip: "These foundational terms need to be automatic before students can build more complex analysis.",
        sentences: [
          { text: "A direct comparison that states one thing IS another is called a ___.", blanks: ["metaphor"] },
          { text: "A comparison that uses 'like' or 'as' is called a ___.", blanks: ["simile"] },
          { text: "Giving human qualities to non-human things is called ___.", blanks: ["personification"] },
          { text: "The repetition of consonant sounds at the start of nearby words is called ___.", blanks: ["alliteration"] },
          { text: "Words that sound like the thing they describe are called ___.", blanks: ["onomatopoeia"] },
          { text: "An object, image or event that represents a larger idea is called ___.", blanks: ["symbolism"] },
          { text: "A recurring image or idea in a text that accumulates meaning is called a ___.", blanks: ["motif"] },
        ],
      },
      {
        type: "true-false" as const,
        title: "Literary Analysis: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "False answers here represent common student misconceptions — worth discussing explicitly.",
        statements: [
          { text: "Simply identifying a literary device in a text constitutes analysis.", answer: false },
          { text: "The same device can create different effects in different contexts.", answer: true },
          { text: "A poem written in free verse has no structure or deliberate form.", answer: false },
          { text: "An unreliable narrator is always dishonest through deliberate deception.", answer: false },
          { text: "Pathetic fallacy uses weather or landscape to mirror a character's emotions.", answer: true },
          { text: "Enjambment occurs when a sentence or phrase runs over the end of a line without a pause.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Annotating an Extract",
        instruction: "Read the following poem extract and respond to each prompt.\n\n'The house breathes in. The furniture\nhas learned to wait. Each room\nholds its question like a held breath.\nWho will come back through the door\nthis time? Or: will anyone?'",
        parentTip: "Ask your student to read the extract aloud twice before writing. Hearing it changes what they notice.",
        prompts: [
          { text: "Identify two literary devices in this extract. For each, quote the relevant words and explain the effect they create.", type: "box" as const },
          { text: "How does the use of enjambment (the run-on lines) contribute to the mood of the extract?", type: "lines" as const, lines: 3 },
          { text: "What is the cumulative effect of the extract as a whole? Write one analytical sentence that makes an argument about what the poem is doing.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identifying the Device",
        instruction: "Select the literary device illustrated by each example.",
        questions: [
          {
            prompt: "'The fog comes on little cat feet.' — Carl Sandburg",
            options: ["Simile", "Metaphor", "Personification", "Onomatopoeia"],
            answer: "Personification",
          },
          {
            prompt: "'My love is like a red, red rose.' — Robert Burns",
            options: ["Metaphor", "Simile", "Extended metaphor", "Allusion"],
            answer: "Simile",
          },
          {
            prompt: "'The murmuring of innumerable bees.' — Tennyson",
            options: ["Alliteration", "Assonance", "Onomatopoeia", "Sibilance"],
            answer: "Onomatopoeia",
          },
          {
            prompt: "A story set entirely in a dark, decaying manor where the protagonist is slowly losing her grip on reality.",
            options: ["Pathetic fallacy", "Symbolism", "Allegory", "All of the above could apply"],
            answer: "All of the above could apply",
          },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sound Devices",
        instruction: "Sort each example into the correct sound device column.",
        columns: ["Alliteration", "Assonance", "Sibilance", "Onomatopoeia"],
        items: [
          { label: "'Peter Piper picked a peck of pickled...' (repeated initial p sounds)" },
          { label: "'The ship has sailed the serpent sea' (repeated s sounds)" },
          { label: "'The bees buzz and hiss through the long afternoon'" },
          { label: "'Hear the mellow wedding bells' — the repeated short e sounds" },
          { label: "'Crack, thud, crash — the building came down'" },
          { label: "'She sells seashells by the seashore'" },
          { label: "'The free evening faded, the stripped fields bled'" },
          { label: "'The brook babbles over the rocks'" },
        ],
      },
      {
        type: "open-response" as const,
        title: "The 'So What' Question",
        instruction: "For each of the following analytical observations, write a follow-up 'so what' sentence that explains the significance or effect.",
        parentTip: "The 'so what' question is the heart of literary analysis. Model answering one together before your student works independently.",
        prompts: [
          { text: "The author uses short, fragmented sentences throughout this chapter. So what?", type: "lines" as const, lines: 3 },
          { text: "The narrator describes the landscape in the same words used earlier for the protagonist's childhood home. So what?", type: "lines" as const, lines: 3 },
          { text: "The poem shifts from first person to second person in the final stanza. So what?", type: "lines" as const, lines: 3 },
          { text: "The villain is given the most eloquent and beautifully crafted speech in the play. So what?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Analysis Is Stronger?",
        instruction: "Circle the stronger analytical statement in each pair.",
        questions: [
          {
            prompt: "Analysing 'The sun was a golden eye watching the valley below':",
            options: [
              "The author uses a metaphor comparing the sun to an eye.",
              "The metaphor of the sun as a 'golden eye' creates a sense of surveillance, suggesting that even nature observes and judges the events in the valley.",
            ],
          },
          {
            prompt: "Analysing a poem's use of enjambment:",
            options: [
              "Enjambment is when lines run on without a pause at the end.",
              "The enjambment across lines 3-4 creates a breathless momentum that enacts the speaker's anxious anticipation, refusing the reader any pause for rest.",
            ],
          },
          {
            prompt: "Analysing personification of the sea:",
            options: [
              "The sea is personified as a living thing.",
              "The personification of the sea as 'restless' and 'hungry' projects human desire onto the natural world, foreshadowing the protagonist's eventual self-destruction.",
            ],
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Three-Step Analysis",
        content: "Every device analysis should work through three steps: (1) IDENTIFY the device and quote the example. (2) DESCRIBE what the device does technically — what comparison does the metaphor draw? What is repeated in the anaphora? (3) EXPLAIN the effect — what does this create for the reader? What does it contribute to the text's meaning? Steps 1 and 2 are easy. Step 3 is where analysis actually happens.",
      },
      {
        type: "matching" as const,
        title: "Narrative Perspective and Effect",
        instruction: "Match each narrative perspective to the effect it most typically creates.",
        left: [
          "First person singular ('I')",
          "Second person ('you')",
          "Third person omniscient",
          "Third person limited",
          "Free indirect discourse",
          "Unreliable narrator",
          "Multiple first-person narrators",
          "Collective 'we'",
        ],
        right: [
          "Creates intimacy and subjective depth; limits us to one character's knowledge and feelings",
          "Allows the narrative to move between multiple consciousnesses and provide context unavailable to any single character",
          "Implicates the reader directly; collapses the distance between character and audience",
          "Merges narrator and character voice; allows irony without breaking the narrative illusion",
          "Creates communal or tribal perspective; suggests shared experience",
          "Requires us to read critically, evaluating what we are told against what we observe",
          "Positions readers to compare and question competing versions of the same events",
          "Creates warmth and proximity; intensifies emotional identification with the narrator's position",
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing Narrative Perspective",
        instruction: "Choose a text you are studying. Analyse how the narrative perspective shapes the reader's relationship with the story.",
        parentTip: "Encourage your student to consider not just what perspective is used but why this text uses it — what would be lost if it changed?",
        prompts: [
          { text: "Name the text and describe the narrative perspective used:", type: "lines" as const, lines: 2 },
          { text: "How does this perspective position the reader? What can we know, and what are we denied?", type: "lines" as const, lines: 4 },
          { text: "What would change if the same story were told from a different perspective? Write 3-4 sentences exploring this.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Imagery Analysis",
        instruction: "Find a passage from your set text that is rich in imagery. Copy or closely paraphrase 3-4 sentences and analyse the imagery.",
        prompts: [
          { text: "Your chosen passage:", type: "lines" as const, lines: 4 },
          { text: "Identify the dominant type of imagery (visual, auditory, olfactory, tactile, gustatory). Quote three specific examples.", type: "box" as const },
          { text: "What cumulative effect does the imagery create? What mood, theme or idea does it develop?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Poetry-Specific Vocabulary",
        instruction: "Complete each definition using these terms: [stanza, volta, caesura, couplet, quatrain, iambic pentameter, sonnet, elegy].",
        sentences: [
          { text: "A group of lines in a poem is called a ___.", blanks: ["stanza"] },
          { text: "A 14-line poem with a specific rhyme scheme and structure is called a ___.", blanks: ["sonnet"] },
          { text: "The turning point in a poem — often where the speaker's perspective or tone shifts — is called the ___.", blanks: ["volta"] },
          { text: "A pause in the middle of a line of poetry, often indicated by a punctuation mark, is called a ___.", blanks: ["caesura"] },
          { text: "A two-line stanza or pair of rhyming lines is called a ___.", blanks: ["couplet"] },
          { text: "A poem mourning the death of a person or lamenting a loss is called an ___.", blanks: ["elegy"] },
          { text: "The metrical pattern of five unstressed/stressed syllable pairs per line is called ___.", blanks: ["iambic pentameter"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Form and Content Together",
        content: "The most sophisticated literary analysis considers how form and content work together — or against each other. A poem about chaos written in perfect, regular metre creates irony through the tension between form and meaning. A poem about loss written in fractured free verse enacts the emotional state it describes. Always ask: does the form support or complicate the content?",
      },
      {
        type: "open-response" as const,
        title: "Analysing Form and Structure",
        instruction: "Choose a poem you are studying. Analyse how its form and structure contribute to its meaning.",
        parentTip: "Start by asking your student to count the stanzas, note the line lengths, and identify any rhyme scheme before they begin writing.",
        prompts: [
          { text: "Describe the poem's form: stanza structure, line lengths, rhyme scheme (or lack of), metre (if identifiable).", type: "lines" as const, lines: 3 },
          { text: "How does the form support or complicate the poem's content? Give one specific example.", type: "lines" as const, lines: 4 },
          { text: "Is there a volta (turning point)? Where does it occur and what shifts?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Extended Close Analysis",
        instruction: "Choose a paragraph or stanza from a text you are currently studying. Write a close reading of at least 200 words, analysing how at least three literary devices contribute to the overall meaning and aesthetic effect of the passage.",
        parentTip: "A 200-word close reading of a few sentences is a high-level task — remind your student that depth is more important than breadth.",
        prompts: [
          { text: "Title and author of the text, and the passage you have chosen (quote or summarise it here):", type: "lines" as const, lines: 3 },
          { text: "Your close analysis (200 words minimum):", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Irony and Its Types",
        instruction: "Select the correct type of irony for each example.",
        questions: [
          {
            prompt: "The audience knows the murderer is hiding in the next room, while the protagonist walks in without suspicion.",
            options: ["Verbal irony", "Situational irony", "Dramatic irony", "Cosmic irony"],
            answer: "Dramatic irony",
          },
          {
            prompt: "A fire station burns down.",
            options: ["Verbal irony", "Situational irony", "Dramatic irony", "Sarcasm"],
            answer: "Situational irony",
          },
          {
            prompt: "A character says 'Oh, that is just wonderful' while describing a disaster.",
            options: ["Dramatic irony", "Situational irony", "Verbal irony", "Cosmic irony"],
            answer: "Verbal irony",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing Irony",
        instruction: "Choose a text you have studied that uses irony effectively. Write an analysis.",
        prompts: [
          { text: "Name the text and describe one specific example of irony:", type: "lines" as const, lines: 3 },
          { text: "What type of irony is it? Explain the gap between what is stated or expected and what is actually meant or happens.", type: "lines" as const, lines: 4 },
          { text: "What effect does this irony create? How does it contribute to the text's meaning or the reader's experience?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Reading as a Writer",
        instruction: "Choose one activity to develop your close reading practice outside the worksheet.",
        suggestions: [
          "Choose a paragraph from your favourite book. Copy it out by hand, slowly. Then write a paragraph analysing why you think the author made three specific choices.",
          "Find a poem you have never read before. Read it three times: once for the overall impression, once for specific devices, once for what you still do not understand. Write about what changed between readings.",
          "Read a one-star review and a five-star review of the same book. How do the two reviewers describe the same features of the text differently? What does this tell you about the relationship between text and reader?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Poem You Cannot Quite Get",
        content: "Choose a poem that you find genuinely difficult — one you do not fully understand. Read it three times. Write 150 words about what you do not understand and what you find interesting despite that uncertainty. Sometimes the most generative literary question is not 'what does this mean?' but 'why does this resist meaning?'",
      },
      // ── Developing (21-50) ──
      {
        type: "open-response" as const,
        title: "Symbolism: Building Meaning Over Time",
        instruction: "A symbol becomes more powerful as it accumulates meaning across a text. Choose a symbol from a text you are studying.",
        parentTip: "Good symbols to start with: Fitzgerald's green light, Golding's conch shell, Orwell's pigs.",
        prompts: [
          { text: "Name the symbol and describe its first appearance in the text. What does it seem to represent at this point?", type: "lines" as const, lines: 3 },
          { text: "How does the symbol's meaning develop or complicate as the text progresses? Give two specific later examples.", type: "box" as const },
          { text: "By the end of the text, what does the symbol represent? How has its meaning transformed?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language: Precision",
        instruction: "Complete each sentence by naming the most precise type of figurative language.",
        sentences: [
          { text: "When a text compares grief to 'a stone I carry everywhere', and then extends this by describing its weight, temperature and texture across multiple stanzas, this is called an ___.", blanks: ["extended metaphor"] },
          { text: "When a text refers to 'the White House' to mean the US government, or 'the bench' to mean the judiciary, this is called ___.", blanks: ["metonymy"] },
          { text: "When a text describes a dark and stormy night during a scene of emotional crisis, using nature to mirror a character's feelings, this is called ___.", blanks: ["pathetic fallacy"] },
          { text: "When a text refers to 'Watergate' to invoke a broader association with political corruption, this is called ___.", blanks: ["allusion"] },
          { text: "When a text describes something in understated terms to create ironic contrast (e.g., 'a bit of a problem' for a catastrophe), this is called ___.", blanks: ["litotes"] },
        ],
      },
      {
        type: "sorting" as const,
        title: "Narrative Techniques",
        instruction: "Sort each technique into the correct column.",
        columns: ["Creates narrative distance", "Creates narrative intimacy", "Creates suspense or tension", "Creates irony or ambiguity"],
        items: [
          { label: "Third person omniscient narrator who summarises events from outside" },
          { label: "Free indirect discourse that merges narrator and character voice" },
          { label: "Dramatic irony — the reader knows more than the character" },
          { label: "First person narration with intense introspection" },
          { label: "Foreshadowing — hints at a dark event to come" },
          { label: "Prolepsis — leaping forward in time before returning" },
          { label: "Unreliable narrator whose account the reader must question" },
          { label: "In medias res — beginning in the middle of the action" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Structural Analysis",
        instruction: "The structure of a text — how it is organised, where it begins and ends, what is placed at its centre — is itself a meaning-making choice.",
        parentTip: "This task connects well to comparative work — ask your student to consider how a different structure would change the text's meaning.",
        prompts: [
          { text: "Choose a text and describe its overall structure. Where does it begin and end? Does it use chronological order, flashback, circular structure, or something else?", type: "lines" as const, lines: 3 },
          { text: "What is placed at the structural climax of the text? Why is this choice significant?", type: "lines" as const, lines: 3 },
          { text: "How does the structure contribute to the text's themes or effects? Give one specific example.", type: "box" as const },
        ],
      },
      {
        type: "true-false" as const,
        title: "Advanced Literary Concepts",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Intertextuality only refers to direct quotation from another text.", answer: false },
          { text: "A text can allude to another text without explicitly naming it.", answer: true },
          { text: "Stream of consciousness narration typically follows a logical, organised sequence of thought.", answer: false },
          { text: "The concept of the 'implied reader' refers to the type of reader a text seems designed for.", answer: true },
          { text: "An elegy is a poem written in celebration of a happy event.", answer: false },
          { text: "A Bildungsroman is a novel that follows the psychological and moral growth of a protagonist.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Intertextuality",
        instruction: "Texts speak to and with other texts — through allusion, parody, adaptation, or deliberate contrast.",
        prompts: [
          { text: "Find an example of intertextuality in a text you are studying. Describe the reference and what it is alluding to.", type: "lines" as const, lines: 3 },
          { text: "What does the intertextual reference add to the meaning of the text? What would be lost for a reader unfamiliar with the referenced text?", type: "lines" as const, lines: 4 },
          { text: "How does the text position itself in relation to its intertextual reference — as continuing, revising, or challenging it?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Cumulative Close Reading",
        content: "The best close readings are cumulative — they show how multiple devices work together to create a unified effect, not just a list of independent observations. After identifying three or four devices, step back and ask: what do all these choices have in common? What single effect are they all contributing to? That question leads to your analytical argument.",
      },
      {
        type: "multiple-choice" as const,
        title: "Tone and Mood",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "What is the difference between 'tone' and 'mood' in literary analysis?",
            options: [
              "Tone refers to the reader's emotional response; mood refers to the narrator's attitude",
              "Tone refers to the author's or narrator's attitude; mood refers to the atmosphere created in the text for the reader",
              "They are interchangeable and mean the same thing",
              "Tone applies to poetry; mood applies to prose",
            ],
            answer: "Tone refers to the author's or narrator's attitude; mood refers to the atmosphere created in the text for the reader",
          },
          {
            prompt: "Which of the following best demonstrates 'elegiac' tone?",
            options: [
              "A furious denunciation of political corruption",
              "A playful, ironic commentary on social conventions",
              "A mournful, reflective contemplation of loss and what has passed",
              "An urgent, imperative call to action",
            ],
            answer: "A mournful, reflective contemplation of loss and what has passed",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing Tone",
        instruction: "Tone is created by the accumulation of many small choices — diction, sentence length, imagery, address.",
        prompts: [
          { text: "Choose a passage from your set text. What is the dominant tone of this passage? Name it precisely (e.g., sardonic, mournful, anxious, detached).", type: "lines" as const, lines: 2 },
          { text: "Identify three specific textual features (word choices, sentence structures, or images) that create this tone.", type: "box" as const },
          { text: "Does the tone shift at any point in the passage? If so, where, and what is the effect?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Diction Analysis",
        instruction: "Diction — a writer's word choice — is one of the most precise tools in a close reader's kit.",
        parentTip: "Practise with a dictionary or thesaurus alongside this task — looking up synonyms illuminates why the writer chose this word rather than alternatives.",
        prompts: [
          { text: "Choose five words from a passage in your set text that feel especially deliberate. List them.", type: "lines" as const, lines: 2 },
          { text: "For each word, consider: why this word rather than a simpler synonym? What connotations does it carry? What effect does it create?", type: "box" as const },
          { text: "What does your analysis of these five words reveal about the writer's purpose or the text's themes?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Rewrite to Destroy",
        content: "Take a passage from a text you love — one you find beautifully written. Rewrite it in the most flat, clichéd, uninteresting way you can. Then write 150 words about what was destroyed in the rewrite. What specific choices made the original extraordinary?",
      },
      {
        type: "open-response" as const,
        title: "Characterisation Through Language",
        instruction: "Writers reveal character through many techniques: direct description, dialogue, action, imagery, and the gap between what characters say and what they do.",
        prompts: [
          { text: "Choose a character from your set text. How is this character introduced? What first impressions does the language create?", type: "lines" as const, lines: 3 },
          { text: "Find one passage where the character is described through imagery or figurative language. Analyse the effect.", type: "box" as const },
          { text: "Is there a gap between how this character presents themselves and how the text reveals them to be? Explain.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Types of Metaphor",
        instruction: "Sort each example into the correct type of metaphor.",
        columns: ["Simple metaphor", "Extended metaphor", "Dead metaphor", "Mixed metaphor"],
        items: [
          { label: "'Life is a journey' — recurring throughout the text, protagonist described as 'lost', 'at a crossroads', and 'finding her way'" },
          { label: "'The leg of a table'" },
          { label: "'She is a storm' — used once and not developed further" },
          { label: "'We need to nip this in the bud before it snowballs'" },
          { label: "'Buried in work, drowning in debt, and suffocating under expectation' — three separate metaphors in one sentence" },
          { label: "'The branch of government' — no longer recognised as a metaphor" },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Ending as Meaning",
        instruction: "How a text ends is one of its most significant choices — it determines what the reader takes away and how they reinterpret everything that came before.",
        prompts: [
          { text: "Describe the ending of a text you are studying. What happens, and what is the final image or statement?", type: "lines" as const, lines: 3 },
          { text: "What does this ending suggest about the text's themes? Is it closed and resolved, or open and ambiguous?", type: "lines" as const, lines: 4 },
          { text: "How does knowing the ending change your reading of the beginning? Write a sentence connecting the final image to an image or idea from the opening.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Close Reading",
        instruction: "Choose two passages from the same text — one early, one late. Write a comparative close reading showing how the language or style has shifted.",
        parentTip: "Placing the two passages side by side before writing helps your student see the contrast more clearly.",
        prompts: [
          { text: "Describe or quote both passages:", type: "box" as const },
          { text: "Identify two or three specific ways the language has changed between them:", type: "box" as const },
          { text: "What does this change in language reveal about the text's development — in character, theme, or argument?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Close Reading in the Real World",
        instruction: "Choose one activity to practise close reading beyond the worksheet.",
        suggestions: [
          "Find a poem written in a language other than English (even if you cannot read it). Listen to it being read aloud. Then find a translation. Write 150 words about what you think is gained and lost in translation — and what this tells you about language and meaning.",
          "Choose one page from a novel you love and annotate it fully — note every device, every unusual word, every structural choice. Then write a 200-word reflection on what you found.",
          "Read two different poems on the same subject. Write a 200-word comparative close reading, focusing on how the language creates different emotional effects.",
        ],
      },
      // ── Consolidating (51-80) ──
      {
        type: "open-response" as const,
        title: "Sustained Analysis: A Poem",
        instruction: "Write a full close reading of a poem you are studying. Your analysis should be 350-450 words and include: structural analysis; analysis of at least four specific devices; discussion of tone and mood; and a central analytical argument about what the poem is doing.",
        parentTip: "This extended task should be completed independently — consider timing it at 40 minutes.",
        prompts: [
          { text: "Your poem analysis:", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Reader Response and Aesthetic Effect",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "The term 'aesthetic effect' in literary analysis refers to:",
            options: [
              "The visual appearance of the text on the page",
              "The overall impression the text makes as an artistic experience — how it feels to read it",
              "The use of beautiful or ornate language",
              "The text's compliance with formal literary conventions",
            ],
            answer: "The overall impression the text makes as an artistic experience — how it feels to read it",
          },
          {
            prompt: "Reader response theory argues that:",
            options: [
              "There is one correct meaning in every text, placed there by the author",
              "Meaning is produced in the interaction between the text and the reader — different readers produce different meanings",
              "Texts have no meaning at all, only interpretations",
              "Only professional critics are qualified to determine a text's meaning",
            ],
            answer: "Meaning is produced in the interaction between the text and the reader — different readers produce different meanings",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Trusting Your Reading",
        content: "At Year 10, you sometimes doubt your own reading. You think: surely my teacher or the study guide sees something I am missing. But a reading grounded in specific textual evidence is always a valid reading, even if it is different from others. Your job is not to reproduce the 'correct' interpretation — it is to construct and defend your own, using the text as evidence.",
      },
      {
        type: "open-response" as const,
        title: "Ambiguity and the Resistant Text",
        instruction: "Some texts deliberately resist easy interpretation. Ambiguity can be a deliberate artistic choice.",
        prompts: [
          { text: "Choose a moment or passage in a text you have studied that you find genuinely ambiguous — something that can be read in more than one way.", type: "lines" as const, lines: 3 },
          { text: "Describe two different possible readings of this moment. Quote specific textual evidence for each.", type: "box" as const },
          { text: "What is the effect of the ambiguity? Is it a weakness in the text, or is the unresolved tension part of what the text is doing?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Critical Frameworks for Close Reading",
        instruction: "Complete each sentence to describe how different critical approaches change the focus of a close reading.",
        sentences: [
          { text: "A ___ reading focuses on the text itself — its internal patterns, structures and devices — without reference to the author's biography or historical context.", blanks: ["formalist"] },
          { text: "A ___ reading examines how the text constructs and reinforces or challenges gender roles and power.", blanks: ["feminist"] },
          { text: "A ___ reading looks at how the text represents, reflects or critiques economic class and power.", blanks: ["Marxist"] },
          { text: "A ___ reading considers how the text positions itself in relation to colonial and postcolonial history.", blanks: ["postcolonial"] },
          { text: "A ___ reading examines how the text constructs or challenges assumptions about heterosexual norms and identities.", blanks: ["queer theory"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Stylistic Fingerprinting",
        instruction: "Every writer has a distinctive style — recurring patterns of syntax, diction, imagery and tone that make their writing recognisable.",
        parentTip: "This task builds style awareness that directly supports both analytical and creative writing.",
        prompts: [
          { text: "Choose an author you are studying. Describe three specific, recurring features of their style (not their themes, but their language choices).", type: "box" as const },
          { text: "Write a short paragraph (6-8 sentences) imitating this author's style. Annotate it to show where you imitated each feature.", type: "box" as const },
          { text: "What did the imitation exercise reveal about the author's style that reading alone might not have shown?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Language of Absence",
        instruction: "What a text does not say — what it leaves out, what characters cannot or will not name — is often as significant as what is said.",
        prompts: [
          { text: "Find a passage in your set text where something significant is not directly stated — a trauma, a truth, a feeling that is gestured at but not named. Describe it.", type: "lines" as const, lines: 3 },
          { text: "How is this absence communicated — through euphemism, ellipsis, sudden silence, avoidance, or something else?", type: "lines" as const, lines: 4 },
          { text: "What is the effect of the absence? What does it add to the text's meaning?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Analytical Verbs",
        instruction: "Sort each analytical verb into the column that best describes the kind of analysis it enables. Verbs like 'shows' are weak; verbs like 'enacts' are strong.",
        columns: ["Weak analytical verb (avoids interpretation)", "Strong analytical verb (performs interpretation)"],
        items: [
          { label: "shows" },
          { label: "enacts" },
          { label: "implicates" },
          { label: "has" },
          { label: "constructs" },
          { label: "is" },
          { label: "positions the reader to" },
          { label: "reveals" },
          { label: "talks about" },
          { label: "subverts" },
          { label: "destabilises" },
          { label: "describes" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading of a Novel Opening",
        instruction: "Novel openings are among the most carefully crafted passages in literary fiction. Every word is chosen to establish voice, tone and world.",
        prompts: [
          { text: "Choose the opening sentence or paragraph of a novel you are studying or know well. Copy it here.", type: "lines" as const, lines: 3 },
          { text: "Write a detailed close analysis of this opening (200 words minimum). Consider: diction, syntax, perspective, tone, imagery, and what expectations are established.", type: "box" as const },
          { text: "After reading the whole text, how does this opening look different? What does it foreshadow that was not visible on first reading?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Integrating Quotations",
        instruction: "A key skill in literary analysis is integrating quotations smoothly — embedding them in your sentence rather than dropping them in.",
        parentTip: "Model the difference between 'dropping in' a quote and 'integrating' one. The quote should feel like part of your sentence, not an addition to it.",
        prompts: [
          { text: "Rewrite this clumsy quotation integration smoothly: 'The author uses a metaphor. \"Life is a broken mirror.\" This creates a feeling of fragmentation.'", type: "lines" as const, lines: 3 },
          { text: "Choose a quotation from your set text and write an analytical sentence that integrates it smoothly and moves directly to analysis:", type: "lines" as const, lines: 3 },
          { text: "Write three separate analytical sentences, each using a different verb of analysis (e.g., constructs, positions, subverts). Each sentence should integrate a quotation.", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Writing Back to the Text",
        content: "Write a response to your set text from the perspective of a character who has no voice in the original — someone present but silent, someone only described by others, or someone entirely absent. Write 200 words in that character's voice. Then write 100 words reflecting on what this exercise revealed about the original text.",
      },
      {
        type: "open-response" as const,
        title: "Developing an Analytical Argument",
        instruction: "Write a thesis statement and a detailed analytical paragraph for a close reading essay on a text you are studying. Your paragraph should show the 'three-step' analysis model (identify, describe, explain) applied to at least two specific textual examples.",
        prompts: [
          { text: "Your thesis statement:", type: "lines" as const, lines: 2 },
          { text: "Your analytical body paragraph:", type: "box" as const },
          { text: "Self-evaluation: is your thesis arguable? Does your paragraph advance the thesis rather than just describe the text?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Reading Widely and Deeply",
        instruction: "Choose one extended activity.",
        suggestions: [
          "Read the first chapter of a novel outside your usual genre or reading history. Annotate it fully. Write a 300-word close reading of one passage from the chapter.",
          "Find a published close reading of a poem you know (try JSTOR or Google Scholar for a journal article). Write a 300-word response: what does the critic notice that you did? What did they miss or what do you disagree with?",
          "Write a 400-word close reading of a non-literary text — a speech, an advertisement, a song lyric — using the same analytical tools you apply to fiction and poetry.",
        ],
      },
      // ── Extending (81-100) ──
      {
        type: "open-response" as const,
        title: "Timed Close Reading: Poem",
        instruction: "Set a timer for 30 minutes. Write a complete close reading of the following extract:\n\n'Nothing gold can stay.\nNature's first green is gold,\nHer hardest hue to hold.\nHer early leaf's a flower;\nBut only so an hour.\nThen leaf subsides to leaf.\nSo Eden sank to grief,\nSo dawn goes down to day.\nNothing gold can stay.' — Robert Frost",
        parentTip: "Full examination conditions — no notes.",
        prompts: [
          { text: "Your timed close reading:", type: "box" as const },
          { text: "After the timer ends: what would you add or change with another 10 minutes?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Critical Disagreement",
        instruction: "Find two critical readings of the same poem or prose passage that reach different conclusions about a key device or effect.",
        prompts: [
          { text: "Summarise each critic's reading of the relevant passage (2-3 sentences each):", type: "box" as const },
          { text: "What textual evidence could support each reading? Is one more persuasive than the other?", type: "lines" as const, lines: 4 },
          { text: "Write your own 150-word reading that synthesises the two critical perspectives and defends a position.", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Limits of Close Reading",
        instruction: "Close reading is a powerful tool — but it has limits. Some argue that excessive attention to language ignores historical context; others that it strips the joy from reading.",
        prompts: [
          { text: "What are the genuine strengths of close reading as an analytical method? What does it reveal that other approaches miss?", type: "lines" as const, lines: 4 },
          { text: "What are its limitations? What does an exclusive focus on language miss?", type: "lines" as const, lines: 4 },
          { text: "How do you balance close reading with other ways of engaging with literary texts — historical context, reader response, cultural analysis?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay: Close Reading and Argument",
        instruction: "Write a complete analytical essay (500 words) in response to this prompt: 'The meaning of a text is made in the specific choices of its language, not in its content or story.' Choose one text you have studied. Agree or disagree, using close reading evidence to support your argument.",
        parentTip: "Allow 50 minutes for this task. The essay should include a thesis, three body paragraphs, and a conclusion.",
        prompts: [
          { text: "Your essay:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Critical Voice",
        instruction: "Reflect on your development as a close reader over the course of this worksheet.",
        prompts: [
          { text: "What is the most significant thing you have learned about how literary language works? Give a specific example from a text you have analysed.", type: "box" as const },
          { text: "Which device or analytical concept do you find most generative — the one that consistently opens up interesting questions?", type: "lines" as const, lines: 3 },
          { text: "Describe the close reader you want to become. What habits of attention do you want to cultivate?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Literary Deep Dive",
        instruction: "Choose one extended project.",
        suggestions: [
          "Choose a poem you love. Read 5-7 critical essays or published analyses of it. Then write a 500-word synthesis: what do critics agree on? What do they disagree about? Where do you stand?",
          "Write your own original poem in a form you have studied (sonnet, villanelle, free verse, etc.). Then write a 300-word close reading of your own poem — what choices did you make, and what effects did you intend?",
          "Read a full short story. Write a 600-word analytical essay that reads the story closely, arguing for a specific interpretation of one key passage.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Language That Changed You",
        content: "Think of a line, image, or passage from a literary text that has stayed with you — something that shifted how you see the world, or yourself, or language. Write 200 words about why this particular combination of words had that effect. This is not a literary analysis exercise. It is a record of a genuine encounter with literature.",
      },
      {
        type: "open-response" as const,
        title: "Advanced Annotation: A Full Page",
        instruction: "Take a full page from your set text and annotate every sentence — every word choice, structural feature, and device you notice. This is an exercise in close attention rather than a polished analysis.",
        parentTip: "Do this together if possible — two readers will notice different things.",
        prompts: [
          { text: "Describe or reproduce the page you annotated. List every device or feature you identified:", type: "box" as const },
          { text: "From your annotations, identify the three most significant features. For each, write two sentences of genuine analysis:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Reading Against the Grain: Close Reading as Resistance",
        instruction: "Close reading can also be a form of resistance — reading a text in ways the author may not have intended.",
        prompts: [
          { text: "Choose a text with a clear dominant reading — one where the intended meaning seems obvious. Describe this reading.", type: "lines" as const, lines: 3 },
          { text: "Now read the text 'against the grain' — use the language to support a reading the author may not have intended. Quote specific evidence.", type: "box" as const },
          { text: "What does this exercise reveal about the relationship between intention and meaning?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Timed Essay: A Single Passage",
        instruction: "Set a timer for 40 minutes. Choose a passage of approximately 200 words from your set text. Write a complete literary essay in response to this question: 'How does this passage contribute to the meaning of the text as a whole?'",
        parentTip: "Examination conditions — no notes. Encourage your student to spend five minutes planning before writing.",
        prompts: [
          { text: "Your timed essay:", type: "box" as const },
          { text: "Self-evaluation: identify one strength and one area to develop.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Creating a Close Reading Resource",
        instruction: "Choose one project to complete over the coming week.",
        suggestions: [
          "Create a 'close reading guide' for a text you are studying — a two-page document that identifies the five most significant devices in the text, with analysis of each. This could help a fellow student engage with the text.",
          "Read a chapter of a critical work on close reading (e.g., the opening of I.A. Richards' Practical Criticism, or Roland Barthes' 'The Death of the Author'). Write a 300-word reflection on how it changes your approach to reading.",
          "Choose your three favourite sentences from any text you have read this year. Write a detailed close reading of each — at least 100 words per sentence — explaining what makes each one extraordinary.",
        ],
      },
      {
        type: "true-false" as const,
        title: "Close Reading: True or False?",
        instruction: "Decide whether each statement about close reading is true or false.",
        parentTip: "These statements address common misconceptions — use them to check conceptual understanding.",
        statements: [
          { text: "Close reading means reading a text very slowly and carefully.", answer: false },
          { text: "In close reading, the effect of a literary device is more important than correctly naming it.", answer: true },
          { text: "A close reading should draw on knowledge of the author's biography to be valid.", answer: false },
          { text: "The same literary device can create different effects in different contexts.", answer: true },
          { text: "Close reading is only relevant to poetry, not prose or drama.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Literary Devices: Complete the Definition",
        instruction: "Fill each gap with the correct literary term: [juxtaposition, pathetic fallacy, dramatic irony, in medias res, epiphany].",
        parentTip: "Ask students to give an example from a text they know for each term.",
        sentences: [
          { text: "___ occurs when the audience knows something that a character does not, creating tension or irony.", blanks: ["Dramatic irony"] },
          { text: "___ is the attribution of human emotions to the natural world (e.g. a storm to mirror grief).", blanks: ["Pathetic fallacy"] },
          { text: "___ places contrasting ideas or images side by side to highlight their differences.", blanks: ["Juxtaposition"] },
          { text: "___ is a narrative technique that begins a story in the middle of events.", blanks: ["In medias res"] },
          { text: "An ___ is a sudden moment of profound realisation or insight experienced by a character.", blanks: ["epiphany"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Narrative Voice",
        instruction: "Narrative voice — who is telling the story and how — is one of the most powerful literary choices an author makes.",
        prompts: [
          { text: "Choose a passage from a text you are studying. Identify the narrative voice: first person, second person, third person limited, or third person omniscient? How does this choice shape your relationship with the narrator and the story?", type: "box" as const },
          { text: "Rewrite 2–3 sentences of the same passage in a different narrative voice. What is gained or lost? What does this experiment reveal about the original choice?", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Literary Devices: Advanced Identification",
        instruction: "Choose the correct term for each literary device described.",
        questions: [
          {
            prompt: "When a character's name or a place name carries symbolic meaning (e.g. a character named 'Christian' in a moral allegory), this is called:",
            options: ["Personification", "Allegory", "Allusion", "Nominative symbolism"],
            answer: "Allegory",
          },
          {
            prompt: "A 'bildungsroman' is a literary genre that:",
            options: [
              "Focuses on political revolution",
              "Traces the psychological and moral development of a protagonist from youth to adulthood",
              "Uses multiple narrative voices to tell the same story",
              "Is always set in a dystopian future",
            ],
            answer: "Traces the psychological and moral development of a protagonist from youth to adulthood",
          },
          {
            prompt: "When the tone of a text is deeply at odds with its surface subject matter — for example, lighthearted language describing something tragic — this technique is called:",
            options: ["Pathos", "Bathos", "Dramatic irony", "Paradox"],
            answer: "Bathos",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Symbolism and Extended Metaphor",
        instruction: "Some of the most powerful literary effects are created not through single images but through sustained patterns of imagery or symbolism across a text.",
        parentTip: "Encourage students to track recurring images or motifs as they read — a reading journal is ideal for this.",
        prompts: [
          { text: "Identify a recurring symbol or extended metaphor in a text you are studying. Trace its appearance across at least three moments in the text. How does its meaning develop or shift?", type: "box" as const },
          { text: "What does this symbol or metaphor contribute to the text's meaning that could not be achieved through direct statement?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Writing About Ambiguity",
        content: "Great literature is often deliberately ambiguous — it resists a single, definitive reading. Strong analytical writing can acknowledge ambiguity: 'This moment is open to at least two interpretations...' or 'The text leaves unresolved whether...' Showing that you can hold complexity is a mark of sophisticated literary thinking.",
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Technique",
        instruction: "Circle the correct literary term for each example.",
        questions: [
          {
            prompt: "'The moon wept pale light across the field.' — The attribution of weeping to the moon is:",
            options: ["Personification", "Simile", "Hyperbole", "Synecdoche"],
          },
          {
            prompt: "'She was no saint' — When a character is described this way despite having just performed a heroic act, the device is:",
            options: ["Understatement", "Irony", "Allegory", "Alliteration"],
          },
          {
            prompt: "A text that begins with a character's death and then flashes back to explain how it occurred uses:",
            options: ["Foreshadowing", "In medias res", "Analepsis (flashback)", "Prolepsis (flash-forward)"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Tension and Dramatic Structure",
        instruction: "Literary tension is created through many techniques — not only through plot events, but through language, pacing, and structure.",
        prompts: [
          { text: "Choose a scene from a text you are studying that you find tense or unsettling. Identify at least three specific techniques the author uses to create that feeling of tension. Quote and analyse each.", type: "box" as const },
          { text: "How does the structure of the scene — its pacing, the order of revelations, what is withheld — contribute to the tension beyond the individual techniques?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Dialogue",
        instruction: "Dialogue in literary texts is not just realistic speech — it is crafted to reveal character, advance theme, and create dramatic effect.",
        parentTip: "Try reading the dialogue aloud together — this often reveals effects that are invisible on the page.",
        prompts: [
          { text: "Choose a significant piece of dialogue from a text you are studying. Annotate it: what does each character's language reveal about their personality, power, and relationship? What is left unsaid? What is the subtext?", type: "box" as const },
          { text: "How would the scene change if the dialogue were rewritten in a more direct, explicit style? What would be lost?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Literary Category",
        instruction: "Sort these literary devices and concepts into their correct categories.",
        parentTip: "Some items could fit in multiple categories — discuss the ambiguous cases.",
        columns: ["Figurative Language", "Narrative Technique", "Structural Device"],
        items: [
          { label: "Extended metaphor" },
          { label: "Unreliable narrator" },
          { label: "Circular narrative" },
          { label: "Personification" },
          { label: "Analepsis (flashback)" },
          { label: "Anaphora" },
          { label: "Multiple narrative perspectives" },
          { label: "Dramatic irony" },
          { label: "Juxtaposition" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Final Synthesis",
        instruction: "Bring together your close reading skills in an extended analysis.",
        parentTip: "This is an ideal task for an end-of-unit assessment or portfolio submission.",
        prompts: [
          { text: "Choose any passage of 8–12 lines from a text you are studying. Write a detailed close reading (300–400 words) that analyses at least four literary or stylistic devices. For each device: name it, quote it, and explain the effect it creates and its relationship to the text's larger concerns.", type: "box" as const },
          { text: "What has close reading this passage revealed about the text that a general reading would have missed?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Close Reading: Independent Exploration",
        instruction: "Choose one extended home activity to deepen your close reading practice.",
        suggestions: [
          "Choose a poem you have never read before and read it five times: once for enjoyment, once for imagery, once for sound, once for structure, and once for meaning. After all five readings, write a 400-word close reading that incorporates insights from each reading.",
          "Find a short story (under 3,000 words) and annotate every sentence for at least one literary or language feature. Then write a 400-word analysis of what your annotation reveals about how the story creates its effects.",
          "Read the same scene from two different translations of a literary text (e.g. a scene from Homer's Odyssey, Kafka's Metamorphosis, or Chekhov's stories). Write a 400-word comparative close reading of how the translators' choices create different effects.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: What Literature Does",
        content: "Close reading assumes that every word in a literary text is there for a reason. But why does it matter? What does literature do that other forms of communication cannot? Write 200 words about a moment when a piece of literature did something to you that no other experience could have — changed how you felt, made you understand something differently, or revealed something about human experience that you had not seen before.",
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Opening Lines",
        instruction: "Opening lines of literary texts are among the most carefully crafted — they establish tone, register, theme, and voice in concentrated form.",
        parentTip: "Collect favourite opening lines together as a reading activity — comparing them is rich literary territory.",
        prompts: [
          { text: "Choose the opening line or sentence of any literary text you have read. Write a close reading of it (150 words): what does it establish about the text's world, voice, tone, and concerns?", type: "box" as const },
          { text: "What would be lost if the text began with its second sentence? What does the first sentence uniquely contribute?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Close Reading: Identifying Tone",
        instruction: "Tone is the author's attitude toward the subject and audience — it is created through word choice, syntax, and imagery.",
        questions: [
          {
            prompt: "Which of the following best describes the effect of using many Latinate (formal, multi-syllabic) words in a passage?",
            options: [
              "Creates an intimate, conversational tone",
              "Creates a formal, elevated, or distancing tone",
              "Creates an angry, aggressive tone",
              "Creates an ambiguous, uncertain tone",
            ],
            answer: "Creates a formal, elevated, or distancing tone",
          },
          {
            prompt: "When an author uses understatement (deliberately describing something serious as less significant than it is), the effect is often:",
            options: [
              "To trivialise the subject",
              "To create irony, drawing attention to the gap between the description and the reality",
              "To make the text more accessible for young readers",
              "To signal the narrator's emotional detachment",
            ],
            answer: "To create irony, drawing attention to the gap between the description and the reality",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: The Ending",
        instruction: "Endings are literary choices — they determine what feeling, thought, or question the reader is left with.",
        prompts: [
          { text: "Close read the final paragraph or scene of a text you are studying. What tone does the ending create? What is the last image or idea the reader is left with? Is the ending resolved or open?", type: "box" as const },
          { text: "Why might the author have chosen this ending rather than a different one? What does this choice reveal about the text's larger concerns?", type: "lines" as const, lines: 4 },
          { text: "Write an alternative final paragraph for this text. Then reflect: how does it change the meaning of the whole?", type: "box" as const },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Reading for Pattern",
        content: "Close reading a single passage is valuable, but some of the richest insights come from noticing patterns across a whole text: recurring images, motifs, structural parallels, or repeated syntactic forms. Keep a reading journal as you work through a text, noting patterns as they emerge. By the end, you will have a map of the text's major concerns.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Figurative Language: Advanced Terms",
        instruction: "Fill each gap with the correct term: [oxymoron, synecdoche, metonymy, aphorism, catharsis].",
        sentences: [
          { text: "___ is a figure of speech in which a part represents the whole (e.g. 'fifty sails' meaning fifty ships).", blanks: ["Synecdoche"] },
          { text: "___ is similar but uses something associated with an object to represent it (e.g. 'the Crown' for the monarchy).", blanks: ["Metonymy"] },
          { text: "An ___ is a self-contradictory phrase that captures a paradoxical truth (e.g. 'deafening silence').", blanks: ["oxymoron"] },
          { text: "An ___ is a concise, memorable statement of a truth or principle (e.g. 'All that glitters is not gold').", blanks: ["aphorism"] },
          { text: "___ is the emotional release or purification that Aristotle described as the purpose of tragedy — the audience's relief after sustained emotional tension.", blanks: ["Catharsis"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Setting as Meaning",
        instruction: "Setting in literary texts is never merely backdrop — it is meaning. Place, atmosphere, and environment actively shape character and theme.",
        prompts: [
          { text: "Choose a significant setting from a text you are studying. Close read the language used to describe it: what images, word choices, and sensory details does the author deploy? What do these choices communicate about the setting's significance?", type: "box" as const },
          { text: "How does this setting mirror, contrast with, or shape the emotional or psychological state of the characters within it?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Effect",
        instruction: "Sort these literary techniques by their most typical primary effect.",
        parentTip: "Some techniques can produce multiple effects — discuss the ambiguous cases and think about context.",
        columns: ["Creates Emotional Impact", "Creates Intellectual Distance or Irony", "Creates Structural or Rhythmic Effect"],
        items: [
          { label: "Pathetic fallacy" },
          { label: "Dramatic irony" },
          { label: "Anaphora" },
          { label: "Bathos" },
          { label: "Epiphany" },
          { label: "Circular narrative structure" },
          { label: "Understatement" },
          { label: "Tricolon" },
          { label: "Personification" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Character Through Language",
        instruction: "The language a character uses — or that is used to describe them — reveals everything about who they are.",
        parentTip: "Reading dialogue aloud together is one of the most effective ways to appreciate character through language.",
        prompts: [
          { text: "Choose a character from a text you are studying. Collect three quotations — one from the narrator describing them, one from their own speech, and one from another character's description. Analyse all three: what picture of the character emerges from the language choices alone?", type: "box" as const },
          { text: "Does the language used to describe this character change across the text? What does any change reveal about their development or the narrator's shifting perspective?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Literary Analysis: Revisiting Concepts",
        instruction: "Revisit key concepts from across this worksheet.",
        parentTip: "Use these as a revision activity at the end of the unit.",
        statements: [
          { text: "An unreliable narrator is one who deliberately tries to deceive the reader.", answer: false },
          { text: "The implied author is the persona projected by the text, which may differ from the real-life author.", answer: true },
          { text: "Free indirect discourse merges the narrator's voice with a character's voice, blurring the boundary between them.", answer: true },
          { text: "Catharsis refers to the intellectual satisfaction a reader feels when a mystery is solved.", answer: false },
          { text: "Dramatic irony occurs when a character knows something the audience does not.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Developing Your Close Reading Practice",
        instruction: "The best close readers have a set of consistent questions they bring to every text.",
        parentTip: "Encourage your student to develop their own personalised close reading toolkit over time.",
        prompts: [
          { text: "Design your own 'Close Reading Toolkit' — a set of eight questions you will bring to any literary passage. These should move from noticing (what is here?) to interpreting (what does it mean?) to evaluating (why does it matter?).", type: "box" as const },
          { text: "Apply your toolkit to a short passage from any text. Which questions were most generative? Which produced the least insight? Revise your toolkit based on what you discover.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Reading Slowly in a Fast World",
        content: "Close reading requires what many describe as a 'slow' mode of attention — the kind that is increasingly rare in a world of scrolling and skimming. Think about the last time you read something slowly, with full attention, taking time to notice every word. What was the experience like? What did you notice that you would have missed if you had read quickly? What might sustained, slow attention — to texts, people, or the world — reveal that speed cannot?",
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Prose Style and Voice",
        instruction: "Prose style — the characteristic way a writer uses language — is one of the most distinctive marks of literary quality.",
        parentTip: "Read passages from several writers aloud to develop an ear for prose style — hearing the differences makes analysis more intuitive.",
        prompts: [
          { text: "Choose a prose writer whose style you find distinctive. Describe their characteristic style in 100 words: sentence length, vocabulary range, use of imagery, rhythm, tone. Quote two sentences that exemplify their style and annotate them.", type: "box" as const },
          { text: "What effect does this writer's style create on the reader? How does it position the reader in relation to the narrative or argument?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Narrative Theory: Complete the Concept",
        instruction: "Fill each gap with the correct narrative theory term: [diegesis, mimesis, focalisation, heterodiegetic, homodiegetic].",
        sentences: [
          { text: "A ___ narrator is one who is outside the story world — a third-person narrator who has not participated in events.", blanks: ["heterodiegetic"] },
          { text: "A ___ narrator is one who exists inside the story world — a first-person narrator who participates in events.", blanks: ["homodiegetic"] },
          { text: "___ refers to the telling of events (the narrator's voice), while ___ refers to the showing of events through scene and dialogue.", blanks: ["Diegesis", "mimesis"] },
          { text: "___ refers to whose perspective or consciousness the narrative is filtered through at any given moment.", blanks: ["Focalisation"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Close Reading: Advanced Comprehension",
        instruction: "Choose the best answer for each advanced close reading question.",
        questions: [
          {
            prompt: "When a text uses 'free indirect discourse' (FID), it means:",
            options: [
              "The narrator is free to interrupt the story at any point",
              "A character's thoughts and speech are rendered in a way that blurs the boundary between the narrator's voice and the character's voice",
              "The text has no fixed narrative perspective",
              "The dialogue is presented without speech marks",
            ],
            answer: "A character's thoughts and speech are rendered in a way that blurs the boundary between the narrator's voice and the character's voice",
          },
          {
            prompt: "An 'unreliable narrator' is one who:",
            options: [
              "Always tells lies to other characters in the story",
              "Has a distorted, limited, or biased perspective that the reader is invited to see beyond",
              "Changes their story between different chapters",
              "Is a minor character who does not participate in the main events",
            ],
            answer: "Has a distorted, limited, or biased perspective that the reader is invited to see beyond",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Intertextuality",
        instruction: "Intertextuality — the way texts refer to, echo, or respond to other texts — is an important dimension of literary meaning.",
        prompts: [
          { text: "Identify an intertextual reference in any text you are studying: a quotation, allusion, echo, or response to another text. Explain what the reference is and where it comes from.", type: "box" as const },
          { text: "What does this intertextual reference add to the meaning of the text? What would a reader who does not recognise the reference miss?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Your Approach",
        instruction: "Developing a personal, consistent approach to close reading is one of the most valuable skills you can build in Year 10 English.",
        parentTip: "This final activity is a good basis for an end-of-unit discussion about how your student's reading has developed.",
        prompts: [
          { text: "Describe your personal approach to close reading: what do you look for first? What questions do you consistently ask? How do you move from noticing to interpreting to evaluating?", type: "box" as const },
          { text: "Which literary or language feature do you find most difficult to analyse? What specific strategy will you use to develop your skills in this area?", type: "lines" as const, lines: 4 },
          { text: "Write a close reading of the best sentence you have read this year. Explain what makes it extraordinary.", type: "box" as const },
        ],
      },
      {
        type: "true-false" as const,
        title: "Close Reading: Final Concepts Check",
        instruction: "A final check of key close reading concepts.",
        statements: [
          { text: "Focalisation is always the same as the narrative voice.", answer: false },
          { text: "Free indirect discourse allows a reader to access a character's thoughts without explicit 'she thought' framing.", answer: true },
          { text: "Intertextuality only occurs when an author deliberately quotes another text.", answer: false },
          { text: "A text's prose style is created by choices at the level of individual words, sentences, and paragraphs.", answer: true },
          { text: "Close reading is most useful for poetry and has little application in prose analysis.", answer: false },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Close Reading: Sustained Literary Practice",
        instruction: "Choose one extended home activity to deepen your close reading practice.",
        suggestions: [
          "Choose a short story you have not read before (by an author you want to explore). Read it three times: once for pleasure, once for structure and technique, and once for language and imagery. Write a 500-word close reading that draws on all three readings and demonstrates what each reading layer revealed.",
          "Keep a 'sentence journal' for two weeks: each day, copy out one sentence from any text you are reading that strikes you as particularly effective. For each sentence, write 3–4 sentences of annotation explaining what makes it work. At the end of two weeks, write a 300-word reflection on what patterns you have noticed across the sentences you collected.",
          "Choose any poem from the last 50 years that you find challenging. Research its context and read several critical responses to it. Write a 500-word close reading that synthesises your own analysis with at least two critical perspectives.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Reader You Are Becoming",
        content: "A great reader is someone who is changed by what they read — who allows texts to challenge, surprise, and expand them. Think about how you read now compared to how you read two years ago. What has changed? What can you see in texts now that you could not see before? What kind of reader do you want to become, and what texts do you want to encounter on the journey?",
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Cross-Subject Application",
        instruction: "Close reading skills transfer beyond literary texts to any complex piece of communication.",
        prompts: [
          { text: "Choose a document from outside English — a scientific abstract, a legal clause, a historical speech, or a government policy document. Apply close reading techniques: what word choices are significant? What is foregrounded or backgrounded? What assumptions are embedded? What is left unsaid?", type: "box" as const },
          { text: "How do the demands of close reading a non-literary text differ from close reading a poem or novel? What transfers, and what requires adaptation?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Close Reading: Final Mastery Check",
        instruction: "Demonstrate your mastery of close reading concepts.",
        questions: [
          {
            prompt: "When a text's form (e.g. fragmented structure, white space, typographical choices) creates meaning, this is often described as:",
            options: ["Intertextuality", "The form-content relationship", "Free indirect discourse", "Narrative focalisation"],
            answer: "The form-content relationship",
          },
          {
            prompt: "A 'resistant reading' of a text means:",
            options: [
              "Refusing to read the text because you find it unpleasant",
              "Reading against the grain — questioning and pushing back against the text's preferred meaning or assumptions",
              "Reading very slowly and carefully",
              "A reading that resists using literary terminology",
            ],
            answer: "Reading against the grain — questioning and pushing back against the text's preferred meaning or assumptions",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Final Synthesis",
        instruction: "A final synthesis of your close reading skills and development.",
        parentTip: "This synthesis is an excellent anchor piece for a Year 10 English portfolio.",
        prompts: [
          { text: "Write a 250-word reflection: what can you do as a close reader now that you could not do at the start of this worksheet? Give three specific examples — techniques you can now identify, effects you can now explain, or interpretations you can now support.", type: "box" as const },
          { text: "What is the text you most want to close read — the one you feel ready to take on because you now have the tools? What do you expect to discover?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Portfolio Selection",
        instruction: "Select your strongest close reading from this worksheet as a portfolio piece.",
        prompts: [
          { text: "Which activity in this worksheet produced your most insightful close reading? Revise it to make it even stronger, then write a 100-word commentary on what makes it your best work.", type: "box" as const },
        ],
      },
      {
        type: "true-false" as const,
        title: "Close Reading: Advanced Final Review",
        instruction: "A final advanced review of close reading principles.",
        statements: [
          { text: "A 'resistant reading' fully accepts the text's preferred meaning.", answer: false },
          { text: "Close reading can be applied to non-literary texts such as news articles or advertisements.", answer: true },
          { text: "The form-content relationship refers to how the structure and presentation of a text contributes to its meaning.", answer: true },
          { text: "An 'implied author' is always the same as the biographical author.", answer: false },
          { text: "Intertextuality includes both conscious allusion and unconscious echoes of other texts.", answer: true },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Close Reading: Final Independent Challenge",
        instruction: "Choose one final, challenging home activity.",
        suggestions: [
          "Find a text in a language other than English that you have some access to (in translation, bilingual edition, or with a parent/speaker who can help). Compare a close reading of the translation with any knowledge you have of the original. What is preserved and what is lost? Write 400 words on what this reveals about language, meaning, and translation.",
          "Choose any text that is considered a 'difficult' canonical work — one known for its complexity (e.g. a late Shakespeare play, a modernist poem, an experimental novel). Spend two weeks with it: read slowly, use annotations, look for critical commentary. Write a 500-word close reading of one significant passage that demonstrates what you have discovered through sustained attention.",
          "Create a 'Close Reading Video Essay' or podcast episode (audio or written script, 400–600 words) in which you guide a listener through a close reading of a poem or short passage, explaining each analytical step. Imagine your audience has never studied English literature before.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Reading as an Act of Attention",
        content: "The poet Simone Weil wrote that 'attention is the rarest and purest form of generosity.' Close reading is, at its heart, an act of attention — of giving your full concentration to what a writer has made. Think about what it means to attend fully to a text: to treat it as if every word matters, as if the writer's choices deserve your serious engagement. How does this kind of attention extend beyond reading — into how you listen to people, observe the world, or engage with any experience?",
      },
      {
        type: "open-response" as const,
        title: "Close Reading: Your Personal Statement",
        instruction: "Write your personal statement as a close reader — a declaration of what close reading means to you and how you will practise it.",
        parentTip: "This is the final activity for Close Reading and Literary Devices — treat it as a meaningful culmination.",
        prompts: [
          { text: "Write 200 words: what does close reading mean to you now? How has it changed how you read? What are the three most important things you have learned about how literary texts create meaning?", type: "box" as const },
          { text: "Name the literary device or technique you most want to develop your skill with in your future reading. Why this one?", type: "lines" as const, lines: 3 },
        ],
      },
    ],
  },

  // ── WS 4: Comparative Text Analysis ──────────────────────────────────────────
  {
    slug: "comparative-text-analysis",
    title: "Comparative Text Analysis",
    strand: "Literature",
    description:
      "Develop skills in comparing two or more texts, exploring how different writers treat the same theme, context or form — and what those differences reveal.",
    learningGuide: {
      concept:
        "Comparison is not just a list of similarities and differences. It is an argument: these texts diverge in this specific way, and that divergence tells us something meaningful about their contexts, authors or audiences.",
      activation:
        "Ask: what two texts have you read or watched that treated a similar theme (love, justice, belonging) in very different ways? What was the most interesting difference?",
      check:
        "Can your student move beyond 'Text A does this, Text B does that' to 'The contrast between them suggests...'?",
    },
    lesson: {
      title: "Comparing Texts: Beyond the Venn Diagram",
      objective:
        "Construct a comparative argument about two texts, using specific evidence from both to support a central analytical claim.",
      materials: [
        "Two texts (or extracts) on a shared theme — ideally one canonical, one contemporary",
        "A blank piece of paper to map connections",
        "Paper and pen",
      ],
      intro: {
        title: "Why Compare?",
        script:
          "Comparison is one of the most powerful analytical tools we have. Putting two texts beside each other makes things visible that are invisible when you look at each one alone. A text's silences, assumptions and conventions become obvious when another text does things differently. Today we are going to practise comparative analysis — not as a list of similarities and differences, but as a way of building an argument. The question we always want to answer is: what does the comparison reveal that reading one text alone would not?",
        action:
          "On a piece of paper, write the names of both texts. In the middle, write a theme or question they both address. Together, brainstorm five things each text does with this theme. Note where they converge and, more importantly, where they diverge.",
      },
      mainActivity: {
        title: "Building the Comparative Argument",
        script:
          "A weak comparison says: Text A uses imagery, and Text B also uses imagery. A strong comparison says: while both texts use imagery of water to represent transformation, Text A treats water as renewal whereas Text B treats it as erasure — and this divergence reflects the different historical contexts in which each was written. The key move is the pivot: the word 'whereas' or 'however' or 'by contrast'. That pivot is where the comparison becomes an argument. Let us practise pivoting.",
        action:
          "Take one of your five points of comparison. Write it as a weak comparison first. Then rewrite it with a pivot and a claim about what the difference reveals. Compare the two versions.",
      },
      wrapUp: {
        title: "The Argument in a Sentence",
        script:
          "Can you sum up your comparative argument in one sentence? Something like: 'While both texts explore [theme], [Text A] ultimately [does X], whereas [Text B] [does Y], suggesting [broader claim].' Try it — it is harder than it sounds, and getting it right is genuinely satisfying.",
        action:
          "Student attempts a one-sentence comparative thesis. Refine it together until it makes a real claim.",
      },
      parentTip:
        "If you have not read one of the texts, ask your student to give you a one-minute overview before the lesson. Your genuine questions ('Wait, what happened to the character? Why did the writer end it that way?') are excellent prompts for your student to practise articulating their understanding.",
      extension:
        "Find a critical essay that compares two texts. Identify the essay's central comparative argument. Then evaluate: do you agree? What evidence from the texts would you add or challenge?",
      resources: [
        {
          title: "Purdue OWL: Writing a Comparative Essay",
          url: "https://owl.purdue.edu/owl/general_writing/common_writing_assignments/comparing_and_contrasting.html",
          description:
            "Clear guidance on structuring a comparative argument, including block and point-by-point approaches.",
        },
        {
          title: "CrashCourse Literature: Big Questions About Literature",
          url: "https://www.youtube.com/watch?v=UvB5RmjNVeE",
          description:
            "An engaging overview of how literature creates meaning through context and form.",
        },
        {
          title: "ReadWriteThink: Comparative Text Analysis",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/comparing-texts-deepening-understanding",
          description:
            "Structured strategies for helping students move from surface comparison to analytical argument.",
        },
      ],
    },
    activities: [
      {
        type: "sorting" as const,
        title: "Types of Textual Connection",
        instruction:
          "Sort each type of connection into the correct category. When comparing texts, some connections are thematic, some are formal (about structure and form), and some are contextual (about when and where the texts were made).",
        columns: ["Thematic Connection", "Formal Connection", "Contextual Connection"],
        items: [
          { label: "Both texts explore the theme of exile and belonging" },
          { label: "Both are written in first person" },
          { label: "Both were written during periods of significant social change" },
          { label: "Both use fragmented narrative structure" },
          { label: "Both deal with questions of identity and memory" },
          { label: "One was written for a colonial audience; the other as a postcolonial response" },
          { label: "Both use extended metaphor as a central device" },
          { label: "Both present female protagonists who resist societal expectations" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Practising the Pivot",
        instruction:
          "Rewrite each weak comparison as a strong comparative statement using a pivot word (whereas, however, by contrast, while) and a claim about what the difference reveals.",
        prompts: [
          {
            text: "Weak: 'Text A has a first-person narrator and Text B also has a narrator.' Rewrite as a strong comparative statement:",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Weak: 'Both texts include descriptions of nature.' Rewrite as a strong comparative statement:",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Weak: 'Text A ends happily and Text B does not.' Rewrite as a strong comparative statement:",
            type: "lines" as const,
            lines: 3,
          },
        ],
      },
      {
        type: "sequence" as const,
        title: "Essay Structure: Comparative Argument",
        instruction:
          "Put the following components of a comparative essay into the most logical order by numbering them 1-7.",
        items: [
          { label: "Second body paragraph: develops comparison further, introduces Text B's approach" },
          { label: "Introduction: establishes texts, context, and thesis" },
          { label: "Conclusion: restates argument, reflects on broader significance" },
          { label: "First body paragraph: explores Text A's approach to the central theme" },
          { label: "Thesis statement: one sentence that makes a comparative claim" },
          { label: "Third body paragraph: addresses a counterargument or complicating evidence" },
          { label: "Topic sentences for each paragraph, each containing a pivot" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Planning a Comparative Response",
        instruction:
          "Choose two texts (or extracts) on a shared theme. Use the prompts below to plan a comparative essay.",
        prompts: [
          {
            text: "Name your two texts and the shared theme or question you will explore:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Write your comparative thesis — a single sentence that makes an argument about how the two texts relate:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Body paragraph 1 — What specific aspect of the theme does each text address? Quote and analyse one piece of evidence from each text:",
            type: "box" as const,
          },
          {
            text: "Body paragraph 2 — Where do the texts diverge most significantly? Use a pivot to structure your comparison:",
            type: "box" as const,
          },
          {
            text: "Complicating question: what does the comparison reveal that neither text alone would show?",
            type: "lines" as const,
            lines: 3,
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Finding Your Own Comparison",
        instruction: "Choose one of these activities to practise comparative thinking outside the worksheet.",
        suggestions: [
          "Find two songs on the same subject (love, war, home). Write a 200-word comparison that uses at least two pivot statements and makes a claim about what the differences reveal.",
          "Watch two film adaptations of the same book or story. Choose one scene that each film handles very differently. Analyse: what does each director's choice suggest about their interpretation of the source material?",
          "Read a news report and an opinion column about the same event. Compare how each text represents the same facts. What choices distinguish them? What do those choices suggest about each text's purpose and audience?",
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Pivot Is the Argument",
        content: "The most important word in comparative writing is your pivot word — 'whereas', 'however', 'by contrast', 'while'. That word is where your comparison becomes an argument. Without the pivot, you have two separate readings. With a strong pivot and a claim, you have a comparative thesis. Practise writing pivot sentences until they feel natural.",
      },
      {
        type: "open-response" as const,
        title: "Building Your Comparative Thesis",
        instruction: "Practice constructing comparative thesis statements using different types of connections between two texts.",
        parentTip: "A comparative thesis should make a claim about what the comparison reveals — not just note that a difference exists.",
        prompts: [
          { text: "Write a thematic comparative thesis: 'While both [Text A] and [Text B] explore [theme], [Text A] ultimately argues [X], whereas [Text B] suggests [Y]...'", type: "lines" as const, lines: 3 },
          { text: "Write a formal comparative thesis focusing on how each text's structure or form shapes its meaning:", type: "lines" as const, lines: 3 },
          { text: "Write a contextual comparative thesis that connects the differences between the texts to their different historical or cultural contexts:", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Comparative Writing: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "Use any false answers as a starting point for discussion about what effective comparison actually involves.",
        statements: [
          { text: "A strong comparative essay is simply a list of similarities and differences.", answer: false },
          { text: "The best comparison focuses on what the contrast between texts reveals about each text individually.", answer: true },
          { text: "Comparative essays must give exactly equal time to both texts in every paragraph.", answer: false },
          { text: "A pivot word ('whereas', 'however') signals the comparative argument at the heart of a paragraph.", answer: true },
          { text: "Contextual differences between texts are irrelevant to a comparative analysis.", answer: false },
          { text: "A comparative thesis must make a claim about what the comparison reveals, not just note that differences exist.", answer: true },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Comparative Essay Structure",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "In an integrated comparative essay (as opposed to a block structure), each paragraph:",
            options: [
              "Discusses only one text at a time",
              "Discusses all texts mentioned in the essay",
              "Weaves evidence from both texts together to develop a single comparative point",
              "Summarises the plot of each text before comparing",
            ],
            answer: "Weaves evidence from both texts together to develop a single comparative point",
          },
          {
            prompt: "Which of the following is the strongest comparative topic sentence?",
            options: [
              "Text A uses imagery of water.",
              "Text A and Text B both deal with loss.",
              "While both texts use water imagery to signal transformation, Text A treats water as regenerative whereas Text B figures it as threat — a divergence that reflects their contrasting attitudes towards change.",
              "Text B is more pessimistic than Text A.",
            ],
            answer: "While both texts use water imagery to signal transformation, Text A treats water as regenerative whereas Text B figures it as threat — a divergence that reflects their contrasting attitudes towards change.",
          },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: When Texts Speak to Each Other",
        content: "Sometimes two texts seem to be in direct conversation — as if one author were responding to the other. Think of two texts you know well. Write 200 words imagining an exchange between their authors: what would they agree on? What would they argue about? What would each say the other got wrong? Then reflect: what does this imaginative exercise reveal about the comparison?",
      },
      {
        type: "sorting" as const,
        title: "Points of Comparison",
        instruction: "Sort each potential point of comparison into the most productive category for a comparative essay.",
        parentTip: "The most interesting comparisons are often those that reveal something surprising — an unexpected similarity or a telling difference.",
        columns: ["Productive comparison (reveals something meaningful)", "Surface comparison (too obvious or superficial)"],
        items: [
          { label: "Both texts are set in the 20th century" },
          { label: "Both texts use light and darkness as symbolic opposites, but associate them with opposite values" },
          { label: "Text A is a novel and Text B is a film" },
          { label: "Both texts were written during periods of social upheaval, and both reflect a loss of faith in institutions" },
          { label: "Both texts have a main character" },
          { label: "Both texts use first-person narration but the narrators have opposite relationships to truth — one confesses all, the other deceives" },
          { label: "Both texts end at night" },
          { label: "Text A presents memory as reconstruction and distortion while Text B presents it as recovery and redemption" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Characterisation",
        instruction: "Choose the same type of character (e.g., the outsider, the authority figure, the mother) in two different texts. Compare how each text characterises this type.",
        prompts: [
          { text: "Name the character type and the two texts. Describe how each text presents this character type:", type: "lines" as const, lines: 4 },
          { text: "Where do the characterisations converge? Where do they most interestingly diverge?", type: "box" as const },
          { text: "Write a comparative thesis sentence that makes a claim about what the divergence reveals:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Comparative Essay Language",
        instruction: "Complete each comparative sentence with the most appropriate connective or pivot phrase.",
        sentences: [
          { text: "Text A presents hope as collective — something shared by communities — ___ Text B locates it entirely within the individual's inner life.", blanks: ["whereas"] },
          { text: "Both texts explore betrayal, ___ they reach radically different conclusions about the possibility of forgiveness.", blanks: ["though"] },
          { text: "Text A's use of formal, elevated diction creates a sense of order and authority. Text B, ___, employs fragmented, colloquial language to signal chaos and disintegration.", blanks: ["by contrast"] },
          { text: "___ both texts centre female protagonists who resist social expectations, the strategies available to each character reflect their different historical contexts.", blanks: ["While"] },
          { text: "The most revealing divergence between the texts lies not in their themes ___ in the formal choices that determine whose perspective controls each narrative.", blanks: ["but"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Context",
        instruction: "Two texts written about the same theme in different historical periods will reflect different ideological contexts. Explore this through comparison.",
        prompts: [
          { text: "Choose two texts about the same theme (e.g., war, justice, identity) written in different periods. Name the texts and their contexts:", type: "lines" as const, lines: 3 },
          { text: "How does each text's historical context shape its treatment of the theme? Give specific evidence from each text.", type: "box" as const },
          { text: "What does comparing the two texts reveal about how the theme has been understood differently across time?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Form and Genre",
        instruction: "Different forms and genres carry different conventions and expectations. Comparing texts from different forms can reveal how form shapes meaning.",
        prompts: [
          { text: "Choose a theme represented in two different forms (e.g., a poem and a novel, a film and a news report). Name the texts:", type: "lines" as const, lines: 2 },
          { text: "How does each form's conventions shape how the theme is explored? What can a poem do that a news report cannot? What does a film offer that a novel does not?", type: "box" as const },
          { text: "Write a paragraph comparing how form itself creates meaning in both texts:", type: "box" as const },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The 'What Does This Reveal?' Test",
        content: "After every comparative observation, apply the 'what does this reveal?' test. 'Text A uses short sentences, whereas Text B uses long ones' — what does this reveal? If the answer is: nothing more than a stylistic difference — the comparison is not yet earning its place. A strong comparison reveals something about context, ideology, form, or meaning that reading either text alone would not show.",
      },
      {
        type: "open-response" as const,
        title: "A Complicating Perspective",
        instruction: "Strong comparative analysis acknowledges complexity — cases where the comparison does not neatly support the thesis.",
        prompts: [
          { text: "Choose a comparative claim you have made in this worksheet. Identify one piece of evidence that complicates or partially contradicts your claim:", type: "lines" as const, lines: 4 },
          { text: "How do you account for this complicating evidence in your argument? Does it weaken or ultimately strengthen your thesis?", type: "lines" as const, lines: 4 },
          { text: "Revise your comparative thesis to accommodate the complexity:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Integrating Evidence from Two Texts",
        instruction: "Practise writing integrated comparative paragraphs that weave evidence from two texts together rather than discussing each in isolation.",
        parentTip: "The key is to avoid writing about Text A and then Text B as separate blocks — every sentence should be doing comparative work.",
        prompts: [
          { text: "Write a topic sentence for a comparative paragraph that contains a pivot and a claim:", type: "lines" as const, lines: 2 },
          { text: "Write the full paragraph, integrating evidence from both texts in every sentence:", type: "box" as const },
          { text: "Identify: did every sentence in your paragraph do comparative work? Revise any sentence that discusses only one text:", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Comparison in the World",
        instruction: "Choose one extended comparative activity.",
        suggestions: [
          "Find two editorial cartoons about the same political event or figure. Write a 300-word comparative analysis that examines how each cartoon constructs its argument through visual and textual choices.",
          "Watch the same scene (a declaration of war, a moment of betrayal, a reconciliation) in two different film adaptations of the same source material. Write a 300-word comparative analysis of the directorial choices.",
          "Read two reviews of the same book by critics from different backgrounds or traditions. Write a 300-word comparison examining how their critical frameworks shape their readings.",
        ],
      },
      // ── Consolidating (51-80) ──
      {
        type: "open-response" as const,
        title: "Sustained Comparison: Two Poems",
        instruction: "Write a full comparative analysis of two poems on a shared theme. Your analysis should be 400-500 words, contain a central comparative thesis, and weave evidence from both poems throughout — avoid block structure.",
        parentTip: "This task should be completed under timed conditions — allow 45 minutes.",
        prompts: [
          { text: "Your comparative analysis:", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Evaluating Comparative Arguments",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Which of the following best demonstrates a truly comparative argument (rather than parallel description)?",
            options: [
              "Text A explores loss through imagery of winter. Text B also explores loss, but uses imagery of autumn.",
              "While both texts use seasonal imagery to represent loss, their contrasting seasons carry ideological weight: Text A's winter suggests an irreversible, absolute ending, whereas Text B's autumn retains the promise of cyclical renewal — a distinction that reflects each text's attitude towards grief.",
              "Both Text A and Text B deal with the theme of loss.",
              "Text A is more pessimistic. Text B is more hopeful.",
            ],
            answer: "While both texts use seasonal imagery to represent loss, their contrasting seasons carry ideological weight: Text A's winter suggests an irreversible, absolute ending, whereas Text B's autumn retains the promise of cyclical renewal — a distinction that reflects each text's attitude towards grief.",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Dealing with Unfamiliar Texts",
        content: "In examinations, you may be asked to compare texts you have not seen before — an unseen comparison. Prepare for this by practising rapid text analysis: read the text once for meaning, once for form and structure, once for language. Then identify your most interesting point of comparison before you begin writing. The comparison will suggest itself once you know both texts well enough.",
      },
      {
        type: "open-response" as const,
        title: "Unseen Comparison Practice",
        instruction: "Read the two short extracts below. Write a comparative paragraph analysing how each text represents the same subject.\n\nExtract A: 'The river moved without hurry, carrying everything it had ever collected — sediment, leaves, old bottles — towards a destination no one could quite name. Its indifference was not cruelty. It simply did not know we were there.'\n\nExtract B: 'The river was alive with hunger. It took our offerings — our boats, our nets, our dead — with a violence that felt personal. We had built our city at its mercy and it knew it.'",
        prompts: [
          { text: "Write a comparative paragraph (150-200 words) that analyses how each extract represents the river and what this reveals about the text's perspective:", type: "box" as const },
          { text: "What pivot structure did you use? Was it integrated effectively?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Types of Comparative Argument",
        instruction: "Complete each sentence with the type of comparative argument being described: [convergent argument, divergent argument, dialectical argument, paradoxical argument].",
        sentences: [
          { text: "A ___ argues that the two texts, despite apparent differences, ultimately arrive at the same conclusion.", blanks: ["convergent argument"] },
          { text: "A ___ argues that the two texts take genuinely opposite positions on the same question.", blanks: ["divergent argument"] },
          { text: "A ___ argues that the two texts each contain part of the truth, and that reading them together produces a richer understanding than either alone.", blanks: ["dialectical argument"] },
          { text: "A ___ argues that the texts appear to contradict themselves — e.g., a text that celebrates freedom while enacting containment.", blanks: ["paradoxical argument"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Representations of Power",
        instruction: "Power — political, social, personal — is a theme in many texts. Compare how two texts you have studied represent the distribution or exercise of power.",
        prompts: [
          { text: "Name the two texts and describe how each represents power. Who holds it? How is it exercised? Who is subject to it?", type: "box" as const },
          { text: "Write a comparative thesis that makes a claim about what the contrast between the two texts' representations of power reveals:", type: "lines" as const, lines: 3 },
          { text: "Develop your argument in a full comparative paragraph with integrated evidence from both texts:", type: "box" as const },
        ],
      },
      {
        type: "sorting" as const,
        title: "Comparative Essay Checklist",
        instruction: "Sort each feature into 'Present in a strong comparative essay' or 'Missing from a weak comparative essay'.",
        columns: ["Present in a strong comparative essay", "Missing from a weak comparative essay"],
        items: [
          { label: "A central thesis that makes a claim about what the comparison reveals" },
          { label: "Integrated paragraphs that weave evidence from both texts" },
          { label: "Pivot words in every body paragraph" },
          { label: "Evidence from only one text per paragraph" },
          { label: "Acknowledgement of complicating evidence" },
          { label: "Contextual comparison that links textual differences to their historical moments" },
          { label: "A conclusion that restates the thesis without developing the argument" },
          { label: "A conclusion that reflects on the broader significance of the comparison" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Conclusion",
        instruction: "A strong comparative conclusion does more than restate the thesis — it reflects on the broader significance of the comparison. Practise writing one.",
        parentTip: "A good conclusion should answer: 'So what? Why does this comparison matter?'",
        prompts: [
          { text: "Write a comparative conclusion (100-150 words) for a comparison you have worked on in this worksheet. Your conclusion should: restate the thesis in new language; reflect on what the comparison reveals about the texts' broader significance; and end with a thought that opens outward rather than closing down.", type: "box" as const },
          { text: "Does your conclusion say anything that was not already said in the essay? If not, revise it to add something new.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing a Text and Its Adaptation",
        instruction: "Adaptations — of novels into films, of historical events into drama — are a special kind of comparison. The adapter makes choices about what to keep, what to cut, and what to add.",
        prompts: [
          { text: "Choose a text and its adaptation that you know (e.g., a novel and its film version). Name both:", type: "lines" as const, lines: 2 },
          { text: "Identify one scene or moment that was handled very differently in the adaptation. Describe both versions:", type: "lines" as const, lines: 4 },
          { text: "What does the change suggest about the adapter's interpretation of the source material? What values or priorities guided the change?", type: "box" as const },
          { text: "Write a comparative paragraph (150 words) that analyses this difference and what it reveals:", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Perfect Pair",
        content: "If you could choose any two texts ever written to compare — what would they be, and why? Write 200 words describing your ideal comparison: what theme would you explore? What makes these two texts the perfect pair for that exploration? What would the comparison reveal that neither text alone could show?",
      },
      {
        type: "open-response" as const,
        title: "Evaluating a Critical Comparison",
        instruction: "Find a published comparative essay or chapter (a journal article, a book chapter, or a well-written study guide that compares two texts). Read it and evaluate its argument.",
        prompts: [
          { text: "Summarise the critic's central comparative argument in 2-3 sentences:", type: "lines" as const, lines: 3 },
          { text: "How does the critic use evidence from both texts? Is it integrated or does it alternate in blocks?", type: "lines" as const, lines: 3 },
          { text: "Evaluate the argument: is it persuasive? Where is it strongest? Is there a point of comparison the critic misses?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Sustained Comparative Writing",
        instruction: "Choose one extended project.",
        suggestions: [
          "Write a 600-word comparative essay on two texts you have studied this year. Your essay should include an integrated comparative argument, pivot statements in every body paragraph, and a conclusion that reflects on broader significance.",
          "Choose a theme represented in texts from three different cultural contexts. Write a 500-word extended comparison that moves beyond two texts — what patterns emerge across all three? What does each unique context add?",
          "Research a debate among critics about how to compare two texts you know. Write a 400-word synthesis of the debate, then state and defend your own comparative reading.",
        ],
      },
      // ── Extending (81-100) ──
      {
        type: "open-response" as const,
        title: "Comparative Thesis Workshop",
        instruction: "Write five different thesis statements for a comparison between two texts you are studying. Each thesis should use a different type of comparative claim: thematic, formal, contextual, paradoxical, and evaluative (arguing that one text is more successful than the other).",
        parentTip: "The evaluative thesis is the most controversial — discuss whether it is appropriate before your student writes it.",
        prompts: [
          { text: "Thematic thesis:", type: "lines" as const, lines: 2 },
          { text: "Formal thesis:", type: "lines" as const, lines: 2 },
          { text: "Contextual thesis:", type: "lines" as const, lines: 2 },
          { text: "Paradoxical thesis:", type: "lines" as const, lines: 2 },
          { text: "Evaluative thesis:", type: "lines" as const, lines: 2 },
          { text: "Which of the five is the strongest? Why?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Full Comparative Essay",
        instruction: "Write a complete comparative essay (600-700 words) on two texts you have studied. Your essay should: open with a contextualising introduction; state a clear comparative thesis; develop the argument across three integrated body paragraphs; and conclude with a reflection on what the comparison reveals.",
        parentTip: "Allow 60 minutes for this task. Encourage planning for 10 minutes before writing.",
        prompts: [
          { text: "Your comparative essay:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Timed Unseen Comparison",
        instruction: "Set a timer for 40 minutes. Read these two extracts and write a complete comparative analysis.\n\nText A: 'I have learned that silence is not absence. It is a form of presence — heavy, demanding, full of everything that cannot be said. My father's silences were cathedrals. I lived inside them.'\n\nText B: 'He never stopped talking. Words filled every room he entered, bright and purposeless as confetti. Afterwards, alone, she would try to remember a single thing he had said.'",
        parentTip: "Full examination conditions.",
        prompts: [
          { text: "Your comparative analysis:", type: "box" as const },
          { text: "Self-evaluation: what would you add with another 10 minutes?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Comparative Argument",
        instruction: "Reflect on what you have learned about comparative argument-making over the course of this worksheet.",
        prompts: [
          { text: "What is the most important thing you have learned about effective comparative writing?", type: "lines" as const, lines: 3 },
          { text: "Which comparison you constructed in this worksheet are you most proud of? Why?", type: "lines" as const, lines: 3 },
          { text: "Write a piece of advice for a Year 9 student about to write their first comparative essay:", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Comparative Research Project",
        instruction: "Choose one extended independent project.",
        suggestions: [
          "Choose two texts from different cultural traditions that deal with the same theme. Research both contexts. Write a 700-word comparative essay that makes meaningful use of contextual knowledge.",
          "Find a comparative essay in an academic journal and write a 500-word critical response: do you agree with the comparison? What alternative reading of either text would you offer?",
          "Write a comparative review of two texts you have read independently this year. The review should be written for a general audience (not a school essay) but should demonstrate genuine comparative argument.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: What Comparison Cannot Do",
        content: "Comparison is a powerful analytical tool — but it has limits. When you compare two texts, you inevitably view each through the lens of the other. Does this distort both? Is there something that belongs only to a single text that comparative analysis always misses? Write 200 words exploring the limits of comparison as a critical method.",
      },
      // ── Additional activities to reach 100 ──
      {
        type: "true-false" as const,
        title: "Comparative Analysis: True or False? (Advanced)",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A convergent comparison argues that two texts, despite apparent differences, reach the same essential conclusion.", answer: true },
          { text: "Block structure (all of Text A, then all of Text B) is always preferable to integrated comparison.", answer: false },
          { text: "A paradoxical comparison argues that a text contradicts its own apparent argument.", answer: true },
          { text: "Contextual comparison is only relevant for texts from very different historical periods.", answer: false },
          { text: "An evaluative comparison argues that one text achieves its aims more successfully than the other.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Language Across Texts",
        instruction: "Choose a single key word or concept (e.g., 'home', 'justice', 'silence') that appears in both of your texts. Conduct a close comparative reading of how each text uses this word or concept.",
        parentTip: "This close language comparison often generates more interesting insights than theme-level comparison.",
        prompts: [
          { text: "Name the word or concept and quote specific examples of its use in each text:", type: "box" as const },
          { text: "What does each text seem to mean by this word? What values or associations surround it?", type: "box" as const },
          { text: "Write a comparative thesis based on this word-level comparison:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Evaluating a Comparative Argument",
        instruction: "Select the response that best demonstrates comparative analytical skill.",
        questions: [
          {
            prompt: "A student writes: 'Text A is about the loss of innocence and so is Text B.' This is weak because:",
            options: [
              "Loss of innocence is not a valid literary theme",
              "It identifies a similarity without making a comparative argument about what the similarity reveals",
              "It should identify a difference, not a similarity",
              "It does not include quotations from either text",
            ],
            answer: "It identifies a similarity without making a comparative argument about what the similarity reveals",
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Comparative Argument Frames",
        instruction: "Complete each sentence frame with appropriate content from two texts you are comparing.",
        sentences: [
          { text: "The most revealing difference between the two texts lies not in their ___ but in their ___, which reflects their contrasting ___.", blanks: ["[surface feature]", "[deeper feature]", "[contexts/values]"] },
          { text: "While both texts use ___ to explore ___, [Text A] treats this as ___ whereas [Text B] treats it as ___.", blanks: ["[device/technique]", "[theme]", "[interpretation A]", "[interpretation B]"] },
          { text: "The comparison reveals that both texts are ultimately concerned with ___, but they differ fundamentally in their sense of whether ___ is possible.", blanks: ["[theme]", "[outcome/resolution]"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Three-Text Comparison",
        instruction: "Extend your comparative skills by including a third text. Choose a theme explored in two of the texts you have studied and add a third text (it can be short — a poem, an advertisement, a news extract).",
        prompts: [
          { text: "Name all three texts and the shared theme:", type: "lines" as const, lines: 2 },
          { text: "What does the third text add to the comparison? Does it support the argument you developed from the first two, or does it complicate it?", type: "box" as const },
          { text: "Write a revised comparative thesis that accounts for all three texts:", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Weak vs Strong Comparative Sentences",
        instruction: "Sort each sentence into 'Weak comparison (describes without arguing)' or 'Strong comparison (argues through contrast)'.",
        columns: ["Weak comparison", "Strong comparison"],
        items: [
          { label: "Both texts contain imagery of water." },
          { label: "While both texts use water imagery, Text A figures water as rebirth whereas Text B treats it as erasure — revealing their opposite attitudes to the past." },
          { label: "Text A is set in the city and Text B is set in the country." },
          { label: "The rural setting of Text B allows its protagonist freedoms that Text A's urban protagonist is systematically denied, enacting the texts' contrasting arguments about individual agency." },
          { label: "Both texts have female protagonists." },
          { label: "Both protagonists are women, yet their narrative arcs diverge sharply: Text A's heroine gains autonomy through self-sacrifice, whereas Text B's subverts the expectation of sacrifice entirely." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing How Endings Create Meaning",
        instruction: "The ending of a text is its final argument — the last thing the writer says to the reader. Comparing endings can be especially revealing.",
        prompts: [
          { text: "Describe the ending of each text in 2-3 sentences:", type: "lines" as const, lines: 4 },
          { text: "How does each ending position the reader in relation to the text's central themes — with resolution, unease, hope, or ambiguity?", type: "box" as const },
          { text: "Write a comparative paragraph that argues for the significance of the difference between the two endings:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Essay: Body Paragraph Practice",
        instruction: "Write three body paragraphs for a comparative essay on two texts you are studying. Each paragraph should be integrated (weaving evidence from both texts) and include a pivot statement.",
        parentTip: "Allow 30 minutes for this task. Focus on integration — every paragraph should do comparative work.",
        prompts: [
          { text: "Paragraph 1 (your first comparative point):", type: "box" as const },
          { text: "Paragraph 2 (a second, more complex comparative point):", type: "box" as const },
          { text: "Paragraph 3 (a complicating or deepening point):", type: "box" as const },
        ],
      },
      {
        type: "true-false" as const,
        title: "Comparative Essay Structure",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A comparative essay that uses block structure (all Text A then all Text B) typically produces stronger analysis than an integrated one.", answer: false },
          { text: "Every body paragraph in a comparative essay should contain evidence from both texts.", answer: true },
          { text: "A comparative conclusion should open outward — reflecting on what the comparison reveals beyond the two texts themselves.", answer: true },
          { text: "It is acceptable to discuss only one text in a comparative essay if it is the stronger text.", answer: false },
          { text: "A comparative thesis should make a claim about what the comparison reveals, not just note that two texts are similar or different.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Own Comparison: A Long-Form Response",
        instruction: "Write a complete comparative response (400-500 words) on two texts of your choice. Your response should demonstrate all the comparative skills developed in this worksheet.",
        parentTip: "This is the culminating task for consolidating comparative skills. Allow 45 minutes.",
        prompts: [
          { text: "Your comparative response:", type: "box" as const },
          { text: "Self-evaluation: identify your strongest comparative sentence and your weakest. What specific revision would improve the weakest?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Comparative Analysis: Nuance",
        instruction: "Select the most sophisticated answer.",
        questions: [
          {
            prompt: "When two texts seem to make the same argument about the same theme, the most interesting comparative question to ask is:",
            options: [
              "Why bother comparing them at all?",
              "Which text makes the argument better?",
              "Do they arrive at this shared position through different means, in different contexts, for different audiences — and what do those differences reveal?",
              "Which text was written first and influenced the other?",
            ],
            answer: "Do they arrive at this shared position through different means, in different contexts, for different audiences — and what do those differences reveal?",
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Comparative Transition Vocabulary",
        instruction: "Complete each sentence with an appropriate comparative transition.",
        sentences: [
          { text: "___ both texts explore displacement, they construct the experience of exile very differently.", blanks: ["While"] },
          { text: "Text A presents identity as fluid and constructed. Text B, ___, treats identity as fixed and essential.", blanks: ["by contrast"] },
          { text: "The female protagonists of both texts resist their society's expectations; ___, the strategies available to each reflect their different historical positions.", blanks: ["however"] },
          { text: "This divergence is significant ___ it reveals a deeper disagreement about the nature of individual agency.", blanks: ["because"] },
          { text: "___ the differences between the texts, both ultimately argue that silence is a form of complicity.", blanks: ["Despite"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Opening Lines",
        instruction: "A text's opening line is its first argument — a claim about the world it is about to construct. Comparing opening lines can reveal fundamental differences in how texts position their readers.",
        prompts: [
          { text: "Quote or describe the opening line or sentence of each text:", type: "lines" as const, lines: 3 },
          { text: "What does each opening immediately establish about perspective, tone, and the kind of text this is?", type: "box" as const },
          { text: "Write a comparative paragraph analysing the significance of the difference between the two openings:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Narrative Voice",
        instruction: "Narrative voice — who tells the story and how — is often one of the most significant points of comparison between texts.",
        prompts: [
          { text: "Describe the narrative voice in each text: who narrates? How reliable are they? What do they know and not know?", type: "lines" as const, lines: 4 },
          { text: "How does the difference in narrative voice shape what each text can and cannot do? What does each narrator see that the other cannot?", type: "box" as const },
          { text: "Write a comparative analytical sentence that uses this voice difference to support a claim about theme:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Comparative Methods",
        instruction: "Sort each comparative method into the column that describes what it primarily illuminates.",
        columns: ["Illuminates how each text creates meaning", "Illuminates why each text was made", "Illuminates how texts have been received"],
        items: [
          { label: "Comparing the formal devices (structure, imagery, tone) used in each text" },
          { label: "Comparing the historical context in which each text was produced" },
          { label: "Comparing published critical responses to each text" },
          { label: "Comparing the narrative techniques and perspectives of each text" },
          { label: "Comparing how each text has been used in educational curricula over time" },
          { label: "Comparing the stated or implied intentions of each author" },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Unexpected Comparison",
        instruction: "The most interesting comparisons are often between texts that seem very different on the surface. Choose two texts that seem unlikely to be compared — from different genres, periods, or cultures.",
        parentTip: "Push your student beyond the obvious pairing. The stranger the comparison, often the more revealing.",
        prompts: [
          { text: "Name the two texts and describe why they seem unlikely to be compared:", type: "lines" as const, lines: 3 },
          { text: "What shared concern, question or theme connects them despite the differences?", type: "lines" as const, lines: 3 },
          { text: "Write a comparative thesis for this unexpected pairing:", type: "lines" as const, lines: 2 },
          { text: "Write one body paragraph developing the comparison:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Discussion",
        instruction: "Discuss with your parent/guardian: which text in a pair you have studied do you find more compelling, and why? Use specific evidence to defend your preference.",
        parentTip: "You are welcome to challenge your student's preference — this kind of productive disagreement sharpens the comparative argument.",
        prompts: [
          { text: "Your stated preference and three reasons for it (with specific evidence):", type: "box" as const },
          { text: "What is the strongest counterargument for the other text?", type: "lines" as const, lines: 3 },
          { text: "Does the counterargument change your preference, or strengthen it?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Reading: Two Poems",
        instruction: "Read two short poems on a shared theme (suggested: find two war poems, two love poems, or two nature poems from different centuries). Write a comparative analysis of at least 300 words.",
        prompts: [
          { text: "Name the two poems and briefly describe their context:", type: "lines" as const, lines: 3 },
          { text: "Your comparative analysis:", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Comparative Essay Structure",
        instruction: "Complete each sentence describing the structure of an effective integrated comparative essay.",
        sentences: [
          { text: "The introduction should establish the ___, provide brief ___, and state a clear ___.", blanks: ["texts and theme", "context", "comparative thesis"] },
          { text: "Each body paragraph should open with a ___ that contains both the comparative point and a ___ word.", blanks: ["topic sentence", "pivot"] },
          { text: "Evidence should be ___ from both texts within each paragraph, not presented in separate blocks.", blanks: ["integrated"] },
          { text: "The conclusion should ___ the thesis, reflect on the ___ of the comparison, and end with a thought that ___.", blanks: ["restate", "broader significance", "opens outward"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Timed Comparative Paragraph",
        instruction: "Set a timer for 15 minutes. Write one complete integrated comparative paragraph in response to this prompt: 'Compare how two texts you have studied present the relationship between the individual and society.'",
        parentTip: "Fifteen minutes per paragraph is examination pace. Practice at this speed regularly.",
        prompts: [
          { text: "Your timed paragraph:", type: "box" as const },
          { text: "Self-evaluation: is the paragraph integrated? Does it contain a pivot and a claim?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Comparative Reading: Independent",
        instruction: "Choose one independent comparative reading activity.",
        suggestions: [
          "Find a published comparative study of two texts you know (try Google Scholar). Read the abstract and introduction. Write a 200-word response: what comparison does the scholar make? Do you agree with their comparative claim?",
          "Choose two novels you have read (they do not need to be set texts). Write a 400-word comparative analysis of how each presents its central theme. Aim for fully integrated paragraphs and a genuine comparative argument.",
          "Watch two films that treat a shared theme very differently. Write a 400-word comparative film analysis — focusing on how formal and narrative choices (camera, editing, dialogue, structure) create different meanings.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Reflection",
        instruction: "Reflect on your development as a comparative analyst across this worksheet.",
        prompts: [
          { text: "What is the most important thing you have learned about comparative analysis? Give a specific example.", type: "box" as const },
          { text: "What comparative argument from this worksheet are you most proud of? Why?", type: "lines" as const, lines: 3 },
          { text: "What comparative skill do you most want to develop further? How will you practise it?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Comparison That Changes Everything",
        content: "Has reading one text ever fundamentally changed how you understood another? Has a comparison ever worked in reverse — making you go back and re-read a text you thought you understood? Write 200 words about a comparison that genuinely changed your thinking, and what that change reveals about how texts work.",
      },
      {
        type: "open-response" as const,
        title: "Extended Comparative Essay",
        instruction: "Write a complete, polished comparative essay (600-700 words) on two texts of your choice. This is your culminating comparative writing task.",
        parentTip: "Allow 70 minutes. Your student should plan (10 min), write (50 min), and review (10 min).",
        prompts: [
          { text: "Your comparative essay:", type: "box" as const },
          { text: "Self-evaluation: what is strongest? What would you revise with more time?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Comparative Analysis: True or False?",
        instruction: "Decide whether each statement about comparative text analysis is true or false.",
        parentTip: "Use these statements to open a discussion about the purpose and practice of comparative reading.",
        statements: [
          { text: "Comparative analysis means simply listing the similarities and differences between two texts.", answer: false },
          { text: "A thematic lens provides a consistent framework for organising a comparative argument.", answer: true },
          { text: "Two texts must be from the same genre to be compared effectively.", answer: false },
          { text: "In a comparative essay, you should alternate between texts in each paragraph rather than dealing with them separately.", answer: true },
          { text: "Comparative analysis reveals things about each individual text that you would not notice reading them alone.", answer: true },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Comparative Language: Complete the Sentence",
        instruction: "Fill each gap with an appropriate comparative language phrase: [while, in contrast, similarly, both texts, whereas].",
        sentences: [
          { text: "___ explore the theme of belonging, each through a different cultural lens.", blanks: ["Both texts"] },
          { text: "___ Text A presents power as oppressive and totalising, Text B suggests it can be quietly subverted.", blanks: ["Whereas"] },
          { text: "___, both authors use fragmented structure to reflect the psychological instability of their protagonists.", blanks: ["Similarly"] },
          { text: "Text A uses first-person narration to create intimacy, ___ Text B maintains ironic distance through third-person narration.", blanks: ["while"] },
          { text: "Text A foregrounds collective identity; ___, Text B insists on the primacy of the individual.", blanks: ["in contrast"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Reading for Comparison",
        instruction: "Effective comparison begins with careful individual reading before looking for connections.",
        parentTip: "Encourage annotation as students read — sticky notes or margin notes make comparison much easier.",
        prompts: [
          { text: "Choose two texts you have studied or are currently reading. For each text independently, identify: its central concern or argument, its key structural choices, and its dominant language or imagery patterns.", type: "box" as const },
          { text: "Now look across both texts: what is one significant similarity and one significant difference that you find most interesting to explore?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Comparative Essay Structure",
        instruction: "Choose the best answer for each question about structuring a comparative essay.",
        questions: [
          {
            prompt: "The 'integrated' approach to comparative essay structure means:",
            options: [
              "Writing all about Text A, then all about Text B",
              "Alternating between texts within each paragraph around a common theme or technique",
              "Writing one paragraph of summary for each text",
              "Beginning with similarities and ending with differences",
            ],
            answer: "Alternating between texts within each paragraph around a common theme or technique",
          },
          {
            prompt: "A comparative thesis is most effective when it:",
            options: [
              "Lists the texts' titles and authors",
              "Identifies a specific point of comparison and makes an arguable claim about what this reveals",
              "Describes the main character of each text",
              "States that the two texts are both similar and different",
            ],
            answer: "Identifies a specific point of comparison and makes an arguable claim about what this reveals",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Context and Comparative Reading",
        instruction: "Understanding the context of each text enriches comparative analysis — historical, cultural, and biographical context all shape how texts mean.",
        parentTip: "Research context together — this works well as a shared inquiry activity.",
        prompts: [
          { text: "For each of your two texts, research the key contextual factors (when and where it was written, for what audience, in response to what historical or cultural moment). Summarise each context in 100 words.", type: "box" as const },
          { text: "How does the difference in context between your two texts explain some of the differences in how they approach their shared theme? Give a specific example.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Better Comparative Statement",
        instruction: "Circle the more effective comparative statement in each pair.",
        questions: [
          {
            prompt: "Which is the stronger comparative statement about power?",
            options: [
              "Both texts are about power. Text A is a novel and Text B is a film.",
              "While Text A presents power as inherently corrupting through the trajectory of its protagonist, Text B suggests that power becomes dangerous only when divorced from empathy.",
            ],
          },
          {
            prompt: "Which better integrates both texts?",
            options: [
              "Text A uses first-person narration. Text B uses third-person narration.",
              "Text A uses intimate first-person narration to position the reader inside the protagonist's moral struggle; Text B, by contrast, uses ironic third-person narration to create critical distance between reader and character.",
            ],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Paragraph: Drafting and Refinement",
        instruction: "A strong comparative paragraph moves fluidly between texts within a single sustained argument.",
        prompts: [
          { text: "Write a comparative body paragraph (150–200 words) that analyses one specific technique or theme across both of your texts. Use at least one quotation or specific reference from each text, and include analysis of what the comparison reveals.", type: "box" as const },
          { text: "Evaluate your paragraph: have you moved between the texts smoothly? Have you done more than state similarities and differences — have you explained what the comparison reveals? Revise at least two sentences.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort Comparative Lenses",
        instruction: "Sort these analytical lenses into the correct category — thematic, structural, or language-focused.",
        columns: ["Thematic Lens", "Structural Lens", "Language Lens"],
        items: [
          { label: "Power and resistance" },
          { label: "Use of narrative voice" },
          { label: "Figurative language patterns" },
          { label: "Identity and belonging" },
          { label: "Linear vs. non-linear time" },
          { label: "Tone and register" },
          { label: "Representation of gender" },
          { label: "Open vs. closed ending" },
          { label: "Imagery and symbolism" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: What Does Comparison Reveal?",
        instruction: "The deepest comparative analysis does not just describe what is similar or different — it explains what the comparison reveals about each text, their contexts, and the ideas they engage with.",
        parentTip: "Push your student to go beyond observation to interpretation — the 'so what' question is the hardest and most important.",
        prompts: [
          { text: "Look at the most significant difference you have identified between your two texts. What does this difference reveal about each author's assumptions, values, or purposes?", type: "box" as const },
          { text: "What would you know about Text A that you would not know if you had only read Text B, and vice versa? In other words: what does each text reveal about the other?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Comparative Reading: Extended Project",
        instruction: "Choose one extended comparative activity.",
        suggestions: [
          "Choose two films, books, or other texts that share a theme or genre but are from different cultural contexts (e.g. an Australian novel and an American novel both dealing with colonial history). Read or watch both and write a 500-word comparative analysis that uses context to deepen your comparison.",
          "Choose a classic text and a modern adaptation or reimagining of it (e.g. a Shakespeare play and a contemporary adaptation; 'Jane Eyre' and a recent retelling). Write a 500-word comparative essay examining what the adaptation preserves, changes, and adds — and what this reveals about the concerns of each era.",
          "Find two pieces of non-fiction writing on the same topic or event — perhaps a news article and an opinion piece, or two essays from different perspectives. Write a 400-word comparative analysis of how each writer constructs their argument differently through language, evidence, and structure.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Why Compare?",
        content: "Comparison is one of the most fundamental human ways of thinking — we understand things in relation to other things. Think about a comparison in your own life that taught you something: a place you visited that made you see your home differently, a person you met who changed how you understood yourself, an experience that reframed a previous experience. What did the comparison reveal that you could not have seen without it?",
      },
      {
        type: "open-response" as const,
        title: "Developing a Comparative Thesis",
        instruction: "A comparative thesis must do more than announce that two texts are similar or different — it must make a specific, arguable claim about what that comparison reveals.",
        parentTip: "Work through several thesis drafts together, each time asking 'what does this reveal?' to push toward deeper interpretation.",
        prompts: [
          { text: "Draft three different thesis statements for a comparative essay on the same two texts, each using a different thematic or structural lens. Which is the most interesting and arguable? Why?", type: "box" as const },
          { text: "Take your strongest thesis and test it: could a reasonable person argue the opposite? If yes, it is a good arguable thesis. If no — if the comparison is obvious — make it more specific and interpretive.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Comparative Analysis: Deeper Concepts",
        instruction: "Decide whether each statement about comparative analysis is true or false.",
        statements: [
          { text: "A block structure (all about Text A, then all about Text B) is always the weakest way to organise a comparative essay.", answer: false },
          { text: "The most valuable comparative insight often comes from examining what surprises you — the unexpected similarity or the unexpected difference.", answer: true },
          { text: "Comparative analysis is only possible when two texts share the same theme.", answer: false },
          { text: "Knowing the context in which each text was produced enriches comparative analysis.", answer: true },
          { text: "In a comparative essay, both texts must receive exactly equal attention.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Reading: The Unexpected Insight",
        instruction: "The most valuable comparative analyses are often those that identify surprising connections or revelations.",
        prompts: [
          { text: "What is the most unexpected connection or contrast you have discovered between your two texts? Something you would not have noticed if you had only read one of them?", type: "box" as const },
          { text: "How does this unexpected connection or contrast change your reading of each text individually?", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Comparative Essay Language: Advanced",
        instruction: "Complete each sentence with an appropriate comparative phrase.",
        sentences: [
          { text: "Text A's reliance on first-person narration enables intimate access to the protagonist's interiority; Text B's third-person narrator, ___, creates critical distance and ironic commentary.", blanks: ["by contrast"] },
          { text: "___ their structural similarities, the two texts reach fundamentally different conclusions about human nature.", blanks: ["Despite"] },
          { text: "The ___ between Text A's urban setting and Text B's remote natural landscape is not merely aesthetic — it reflects each author's fundamentally different view of where meaning is found.", blanks: ["contrast"] },
          { text: "Both texts engage with the legacy of colonialism, ___ Text A foregrounds the colonised subject while Text B inhabits the coloniser's perspective.", blanks: ["although"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Comparative Writing: Avoiding Common Mistakes",
        instruction: "Identify the common error in each example of comparative writing.",
        questions: [
          {
            prompt: "'Text A is about identity. Text B is also about identity. However, they are different because they use different techniques.' — What is wrong with this comparative statement?",
            options: [
              "It uses the word 'however' incorrectly",
              "It describes rather than analyses — it says the texts are different without explaining what the difference reveals",
              "It focuses on only one text",
              "It does not name the technique correctly",
            ],
            answer: "It describes rather than analyses — it says the texts are different without explaining what the difference reveals",
          },
          {
            prompt: "'Both texts are set in Australia in the 20th century and deal with themes of belonging.' — What additional step does this comparative observation need to become analytical?",
            options: [
              "It needs a longer list of similarities",
              "It needs to explain what this shared context and theme reveals about each text's argument or purpose",
              "It needs more historical context about 20th century Australia",
              "It needs to name the author of each text",
            ],
            answer: "It needs to explain what this shared context and theme reveals about each text's argument or purpose",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Genre and Form",
        instruction: "Comparing texts of different genres or forms (a novel and a poem, a film and a short story) can reveal how form itself shapes meaning.",
        parentTip: "This is a particularly rich comparative approach for senior English — push students to think about what genre enables and constrains.",
        prompts: [
          { text: "Choose two texts of different forms or genres that share a theme. How does each form enable or constrain the exploration of that theme? What can a novel do with the theme that a poem cannot, or vice versa?", type: "box" as const },
          { text: "Write a comparative paragraph (150 words) that analyses how the difference in form between your two texts shapes their treatment of the shared theme.", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Final Synthesis",
        instruction: "Bring together your learning about comparative text analysis in a sustained reflection.",
        parentTip: "This synthesis task demonstrates the sophistication of comparative thinking your student has developed — it makes an excellent portfolio piece.",
        prompts: [
          { text: "Write a 250-word reflection: what has studying two texts comparatively revealed that you could not have learned from studying each text alone? Give specific examples from your comparative work.", type: "box" as const },
          { text: "What is the single most important skill in comparative analysis that you have developed through this worksheet? How will you apply it in future comparative work?", type: "lines" as const, lines: 4 },
          { text: "Design a 'Comparative Reading Guide' of five questions you would always ask when approaching two texts comparatively.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Comparative Analysis: Extended Project",
        instruction: "Choose one extended comparative home activity.",
        suggestions: [
          "Find two texts on the same topic from very different cultural contexts — for example, two poems about war from different nations, or two novels about migration from different periods. Read both carefully and write a 500-word comparative essay that uses the cultural difference to deepen your analysis of each text's approach.",
          "Compare the original and a sequel, prequel, or adaptation of any text you have studied. Write a 500-word comparative analysis focusing on what the second text adds to, subtracts from, or reinterprets from the original, and what this reveals about changing contexts and audiences.",
          "Read two critical essays (from books, journals, or reputable literary resources) offering different interpretations of the same text. Write a 400-word comparative analysis of the two critical positions: what assumptions does each critic bring? What does each see that the other misses? Which do you find more persuasive and why?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Text That Needed a Pair",
        content: "Think of a text you have loved — a book, film, song, or artwork — that you felt was somehow incomplete on its own. What would its perfect companion text be? What theme or question would unite them? What would each text reveal about the other? Describe the comparison you would most like to make — the two texts you would most like to place in conversation with each other.",
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Authorial Purpose",
        instruction: "A sophisticated comparative essay considers not just what the texts say but why each author made the choices they made.",
        parentTip: "Research the authors' backgrounds and stated intentions if possible — this context enriches purpose-based analysis.",
        prompts: [
          { text: "For each of your two texts, write a brief statement of authorial purpose: what do you think the author was trying to achieve — in this text, for this audience, at this historical moment? What evidence from the text supports your view?", type: "box" as const },
          { text: "How does the difference in authorial purpose explain some of the differences in how the two texts treat their shared theme or subject?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Comparative Analysis: Choosing a Lens",
        instruction: "The lens you choose for comparison shapes what you can see. Choose the best answer for each question about analytical lenses.",
        questions: [
          {
            prompt: "Which lens would be most useful for comparing how two texts position their readers ideologically?",
            options: [
              "A formal analysis of sentence structure",
              "A thematic lens focused on power and ideology",
              "A biographical analysis of the authors",
              "A genre analysis of narrative conventions",
            ],
            answer: "A thematic lens focused on power and ideology",
          },
          {
            prompt: "When choosing a lens for comparative analysis, the most important consideration is:",
            options: [
              "Using the lens recommended by your teacher",
              "Using the most complex and academic lens available",
              "Choosing a lens that reveals something genuinely interesting and arguable about both texts",
              "Using the same lens for all comparative essays",
            ],
            answer: "Choosing a lens that reveals something genuinely interesting and arguable about both texts",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Writing: Revision Practice",
        instruction: "Revision is where comparative writing becomes truly analytical — the second draft is usually much stronger than the first.",
        prompts: [
          { text: "Take a comparative paragraph you have written and revise it using these specific criteria: (1) Does each sentence make a comparative point rather than describing one text alone? (2) Are both texts supported by specific textual evidence? (3) Does the paragraph end with a clear analytical statement about what the comparison reveals?", type: "box" as const },
          { text: "Compare your revised paragraph to the original. What specific changes did you make? How did revision improve the quality of your comparative analysis?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Comparative Essay Language: Final Practice",
        instruction: "Complete each sentence with the most precise comparative language.",
        sentences: [
          { text: "While both texts explore the consequences of unchecked ambition, their conclusions are ___ — Text A suggests redemption is possible, while Text B insists it is not.", blanks: ["diametrically opposed"] },
          { text: "The ___ in representational strategy between the two texts is itself significant: where Text A centres the colonised subject, Text B inhabits the coloniser's perspective almost exclusively.", blanks: ["contrast"] },
          { text: "Text A's ___ use of present-tense narration creates immediacy; Text B's past-tense distance allows for the retrospective irony that defines its tone.", blanks: ["deliberate"] },
          { text: "Both texts belong to the tradition of the ___, tracing the moral and psychological development of their protagonists from innocence to experience.", blanks: ["bildungsroman"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Culminating Practice",
        instruction: "Write a full comparative analytical essay as your culminating activity for this worksheet.",
        parentTip: "This is an excellent assessment piece — consider using it as a formal end-of-unit task with a mark or detailed feedback.",
        prompts: [
          { text: "Write a comparative analytical essay (600–800 words) that uses a clear thematic or conceptual lens to compare two texts you have studied. Include: an introduction with a comparative thesis, integrated body paragraphs that move between texts, and a conclusion that synthesises your argument.", type: "box" as const },
          { text: "Self-evaluate your essay: what is strongest about your comparative argument? What would you revise with more time?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Comparative Analysis: Final Review",
        instruction: "A final review of key principles of comparative text analysis.",
        statements: [
          { text: "A comparative essay should deal with each text in equal depth.", answer: false },
          { text: "The integrated approach to comparative essay writing moves between texts within each paragraph.", answer: true },
          { text: "Comparative analysis produces more nuanced insights when the two texts are very similar.", answer: false },
          { text: "Context — the historical, cultural, and biographical circumstances of each text — is relevant to comparative analysis.", answer: true },
          { text: "A comparative essay can be structured around points of difference only, with no attention to similarity.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Reflection and Portfolio",
        instruction: "Bring together your learning about comparative text analysis in a final reflection.",
        parentTip: "This portfolio reflection makes an excellent concluding document for an end-of-unit assessment folder.",
        prompts: [
          { text: "Write a 200-word reflection on your development as a comparative reader and writer through this worksheet. What has changed in how you approach comparing texts?", type: "box" as const },
          { text: "List the five most important skills in comparative analysis, in order of importance to you. For each, write one sentence explaining why it matters.", type: "lines" as const, lines: 7 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Comparative Analysis: Independent Project",
        instruction: "Choose one extended comparative home project.",
        suggestions: [
          "Choose two texts — from any genre, medium, or cultural context — that have never been formally compared but that you believe share a significant connection. Write a 600-word comparative essay that argues for and explores that connection. The more unexpected the comparison, the more interesting it will be.",
          "Find two reviews or critical essays that offer contrasting interpretations of the same text. Write a 500-word meta-analysis: what different lenses are these critics using? What does each lens reveal and conceal? Which interpretation do you find more compelling and why?",
          "Create a 'Comparative Reading Series': design a three-text reading sequence where each text illuminates the next. Write a 500-word 'reader's guide' explaining your choices: what does reading the texts in sequence reveal that reading each one alone would not?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Conversation Between Texts",
        content: "Imagine that two texts you have studied could have a conversation with each other. What would they agree on? What would they argue about? What question would one ask the other that it could not answer alone? Write 200 words from the perspective of one text speaking to the other — using the first text's voice, ideas, and language to address the second text directly.",
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Tonal Comparison",
        instruction: "Tone — the author's attitude toward the subject and reader — is one of the most important and often most revealing dimensions to compare across texts.",
        prompts: [
          { text: "Compare the tone of your two texts: how does each author position themselves in relation to their subject and audience? Use specific language examples from each text to support your analysis.", type: "box" as const },
          { text: "What does the difference in tone between the two texts reveal about the authors' different assumptions, purposes, or worldviews?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Audience and Effect",
        instruction: "Texts are designed with audiences in mind — and the assumed audience shapes every communicative choice.",
        prompts: [
          { text: "For each of your two texts, identify the implied audience: what assumptions does the text make about its reader? What does the reader need to know, feel, or believe for the text to work?", type: "box" as const },
          { text: "How does the difference in implied audience between the two texts explain differences in tone, vocabulary, structure, or argument?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Comparative Analysis: Concepts Consolidation",
        instruction: "A consolidation check on comparative analysis concepts.",
        statements: [
          { text: "A comparative thesis must identify two texts and state that they are both similar and different.", answer: false },
          { text: "The most effective comparative analyses use a specific analytical lens that is applied consistently across both texts.", answer: true },
          { text: "In comparative analysis, context (historical, cultural, biographical) is irrelevant.", answer: false },
          { text: "A comparative essay can explore what one text reveals about the other.", answer: true },
          { text: "Tonal comparison is one of the most revealing forms of comparative analysis.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Final Personal Statement",
        instruction: "Write your final personal statement on comparative text analysis.",
        parentTip: "This statement is an excellent portfolio conclusion — it captures the student's voice and growth at the end of this unit.",
        prompts: [
          { text: "Write 200 words: what has studying texts comparatively taught you that studying them individually could not? What do you now look for in texts that you would not have noticed before?", type: "box" as const },
          { text: "Name one pair of texts you would most like to compare in depth in Years 11 and 12. Why this pair? What do you think they might reveal about each other?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Applying to New Texts",
        instruction: "The real test of comparative analysis skills is applying them to new, previously unseen texts.",
        prompts: [
          { text: "Find two short texts you have never read before on the same broad topic (two poems, two opinion pieces, two short stories). Without any research, write a 200-word comparative analysis using one clear lens.", type: "box" as const },
          { text: "How did you select your lens? What made you choose it over other possible approaches?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Research and Independent Study",
        instruction: "Research can enrich comparative analysis — critical secondary sources, contextual information, and scholarly debates all deepen your own reading.",
        prompts: [
          { text: "Find one critical essay or scholarly article that discusses one of the two texts you have been comparing. How does the critic's reading challenge, confirm, or complicate your own analysis?", type: "box" as const },
          { text: "Has reading the critical perspective changed your comparative argument in any way? How does engaging with criticism enrich comparative analysis?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Comparative Analysis: Final Synthesis Project",
        instruction: "Choose one final home project to demonstrate your comparative analysis skills.",
        suggestions: [
          "Write a 700-word comparative essay on two texts of your choice, using everything you have learned in this worksheet. Include a strong comparative thesis, integrated body paragraphs, careful attention to both similarities and differences, and a synthesis conclusion. Attach a 200-word reflection on your process.",
          "Curate a 'Comparative Texts Exhibition': choose five pairs of texts (from any genre or medium) that you believe would yield rich comparative analysis. For each pair, write 150 words explaining what makes them a compelling pairing and what you would expect to discover through comparison.",
          "Research how a single literary text has been read comparatively in scholarship: find three academic articles that compare your chosen text with different companion texts. Write a 500-word meta-analysis of the different comparisons: what does each pairing reveal, and which comparison do you find most illuminating?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Everything in Conversation",
        content: "All texts exist in conversation with other texts — they respond to what has come before, anticipate what will come after, and are changed by what is read alongside them. Think about a text you have loved deeply. What has reading other texts alongside it — texts from different times, places, or forms — done to your understanding of it? Has any comparison ever surprised you by revealing something the original text was doing that you had not seen?",
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Looking Ahead",
        instruction: "Comparative text analysis will be a central skill in Years 11 and 12 — this final activity prepares you for what is ahead.",
        parentTip: "Research the specific comparative text requirements of the senior English course your student will study.",
        prompts: [
          { text: "How will comparative text analysis feature in your senior English course? What types of texts will you compare, and in what assessment formats?", type: "lines" as const, lines: 4 },
          { text: "Based on what you have learned in this worksheet, what are your three most important goals for developing as a comparative analyst in Years 11 and 12?", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparative Analysis: Independent Reading Plan",
        instruction: "One of the best ways to develop comparative reading skills is to read widely and deliberately across genres, periods, and cultures.",
        prompts: [
          { text: "Design a six-month comparative reading plan: identify three pairs of texts you will read comparatively over the next six months. For each pair, explain your rationale for pairing them and what you expect to discover.", type: "box" as const },
          { text: "What resources (libraries, databases, reading groups, discussion partners) will you use to support your comparative reading?", type: "lines" as const, lines: 3 },
        ],
      },
    ],
  },

  // ── WS 5: Extended Essay Writing ─────────────────────────────────────────────
  {
    slug: "extended-essay-writing",
    title: "Extended Essay Writing",
    strand: "Literacy",
    description:
      "Develop the planning, structuring and drafting skills needed for senior extended essays — including thesis construction, paragraph architecture and revision strategies.",
    learningGuide: {
      concept:
        "A strong essay is not a collection of observations — it is an argument that builds. Each paragraph must do specific work: advance the thesis, use evidence critically, and connect back to the central claim.",
      activation:
        "Ask: what is the difference between a good essay and a great one? What do you think makes the difference?",
      check:
        "Can your student construct a thesis that makes a genuine, arguable claim — not just a statement of fact? Can they identify when a paragraph is descriptive rather than analytical?",
    },
    lesson: {
      title: "Building the Essay That Thinks",
      objective:
        "Construct a clear thesis, plan an essay with linked paragraphs, and revise a draft for argument, evidence and style.",
      materials: [
        "A recent essay prompt (from a set text or a topic of your student's choosing)",
        "Paper for planning",
        "A draft essay (if available) or space to begin drafting",
      ],
      intro: {
        title: "What Is a Thesis, Actually?",
        script:
          "The word 'thesis' is overused to the point where it sometimes loses meaning. So let us get specific. A thesis is an arguable claim — a statement that a reasonable person could disagree with. 'Shakespeare's Hamlet contains themes of revenge' is not a thesis; it is a statement of fact that no one would dispute. 'Hamlet's paralysis is not weakness but a refusal to participate in a corrupt moral system' — that is a thesis. Someone could argue against it. That tension is what gives an essay its energy. Today we are going to work on constructing real thesis statements and building paragraphs that actually advance them.",
        action:
          "Take an essay prompt. Together, brainstorm three possible thesis statements. Test each one: could a reasonable person disagree? Is it specific enough to guide a whole essay? Is it interesting — does it say something worth arguing?",
      },
      mainActivity: {
        title: "Paragraph Architecture",
        script:
          "A well-built body paragraph has a specific structure. It opens with a topic sentence that connects directly to the thesis. It then introduces evidence — a quotation, an example, a textual detail. Then it analyses that evidence: not just what it shows, but how and why it shows it. Then it links back to the thesis. This is sometimes called the TEAL structure: Topic sentence, Evidence, Analysis, Link. The most common weakness in student essays is stopping at Evidence — describing what the text does without explaining what it means or why it matters.",
        action:
          "Choose one paragraph from your student's draft or plan. Together, identify: the topic sentence (does it connect to the thesis?), the evidence (is it specific?), the analysis (does it explain why the evidence matters?), the link (does it return to the central argument?). Revise any weak section.",
      },
      wrapUp: {
        title: "Revision as Thinking",
        script:
          "Revision is not proofreading — it is rethinking. When you revise, you are not just checking for errors. You are asking: does this paragraph do what it is supposed to do? Does this sentence say what I actually mean? Is my argument getting stronger or just longer? The best writers revise heavily. Let us identify one thing in your essay that is working well, and one thing to develop.",
        action:
          "Student identifies a strength and a development target in their writing. Discuss a concrete strategy for improving the weaker area.",
      },
      parentTip:
        "If your student is stuck on their thesis, try asking: what would you tell a friend this essay is about? Often the spoken version is clearer than the written one. Then work backwards from that conversation to a formal thesis statement.",
      extension:
        "Find a published essay or literary criticism piece. Identify the thesis. Map the essay's structure: what does each paragraph contribute to the central argument? Write a one-page structural analysis of the essay.",
      resources: [
        {
          title: "Purdue OWL: Developing a Thesis",
          url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/thesis_statement_tips.html",
          description:
            "Practical guidance on constructing a strong, arguable thesis statement.",
        },
        {
          title: "Khan Academy: Essay Writing",
          url: "https://www.khanacademy.org/humanities/grammar/grammar-and-writing-challenges/essay-writing/v/structuring-your-essay",
          description:
            "Video guidance on essay structure, from introduction through to conclusion.",
        },
        {
          title: "Purdue OWL: Body Paragraph Development",
          url: "https://owl.purdue.edu/owl/general_writing/common_writing_assignments/essay_writing/body_paragraphs.html",
          description:
            "Clear guidance on building analytical body paragraphs with evidence and commentary.",
        },
      ],
    },
    activities: [
      {
        type: "sorting" as const,
        title: "Thesis or Not a Thesis?",
        instruction:
          "Sort each statement into 'Strong Thesis' (an arguable claim), 'Weak Thesis' (too broad or obvious), or 'Not a Thesis' (a fact or description).",
        columns: ["Strong Thesis", "Weak Thesis", "Not a Thesis"],
        items: [
          { label: "George Orwell's 1984 explores themes of power and control." },
          { label: "Orwell uses the concept of doublethink not to warn against totalitarianism but to implicate the reader in its logic." },
          { label: "The novel is set in a dystopian future." },
          { label: "Literature is important because it helps us understand the world." },
          { label: "The fragmented narrative structure of The Handmaid's Tale enacts the very dispossession it describes, denying the reader the coherence that Offred herself has been denied." },
          { label: "Romeo and Juliet has many literary devices." },
          { label: "The representation of masculinity in this novel is more complicated than it first appears." },
        ],
      },
      {
        type: "sequence" as const,
        title: "Building a Paragraph: TEAL",
        instruction:
          "The components of an analytical paragraph are out of order. Number them 1-4 to show the correct TEAL structure (Topic sentence, Evidence, Analysis, Link).",
        items: [
          { label: "This positioning of grief as something private and unnamed ultimately reinforces the novel's central argument that silence is a form of survival." },
          { label: "The author's use of absent language — the things the narrator refuses to say — reflects the novel's broader concern with repression." },
          { label: "In Chapter 4, the narrator describes her mother's death without using the word 'death' or 'grief', employing instead euphemisms such as 'gone quiet' and 'resting now'." },
          { label: "The deliberate absence of direct language creates a discomfort in the reader, implicating us in the same avoidance the narrator performs." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Constructing Your Thesis",
        instruction:
          "Work through the following steps to build a strong thesis for a text you are studying.",
        prompts: [
          {
            text: "Name the text and prompt (or topic) you are working with:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Write a first-attempt thesis — whatever comes to mind first:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Test it: could a reasonable person disagree with this statement? If not, revise it to make it more arguable:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Write your revised, strengthened thesis:",
            type: "lines" as const,
            lines: 2,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Revising a Weak Paragraph",
        instruction:
          "Read the following paragraph and revise it so that it includes a clear topic sentence connected to a thesis, specific evidence, genuine analysis (not just description), and a link back to the central argument.\n\nOriginal: 'The author writes a lot about the sea in this novel. There are many descriptions of the ocean and the characters spend time on boats. The sea is very important in the story.'",
        prompts: [
          {
            text: "What is wrong with the original paragraph? Identify at least three specific weaknesses:",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Write a revised version of the paragraph that demonstrates strong analytical writing. You may invent specific quotations or details from a fictional text:",
            type: "box" as const,
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Essay Writing Practice",
        instruction: "Choose one activity to develop your essay writing practice.",
        suggestions: [
          "Choose a prompt from a past Year 10 or Year 11 English exam. Set a timer for 45 minutes and write a complete essay response under timed conditions. Then review: what would you change if you had more time?",
          "Take an essay you have already written. Find the body paragraph you are least satisfied with. Rewrite it using the TEAL structure. Compare the two versions.",
          "Find a published literary essay (try JSTOR or Google Scholar for a short one). Identify: the thesis, the evidence in each paragraph, and the analytical moves the writer makes. Write a half-page reflection on one technique you want to borrow.",
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: What a Thesis Is NOT",
        content: "A thesis is not a topic, a question, a statement of fact, or a summary of what you will discuss. It is a claim — an arguable position that a reasonable person could disagree with. 'This essay will discuss themes of power in Hamlet' is not a thesis. 'Hamlet's inability to act is not weakness but a philosophical refusal to accept the legitimacy of the moral order he is asked to uphold' is a thesis. Can someone disagree? Then it is a thesis.",
      },
      {
        type: "true-false" as const,
        title: "Essay Writing: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "These statements address common misconceptions about academic essays — discuss any that are contested.",
        statements: [
          { text: "A longer essay is always better than a shorter one.", answer: false },
          { text: "Every body paragraph should connect back to the thesis.", answer: true },
          { text: "A good conclusion simply repeats the introduction in different words.", answer: false },
          { text: "Using first person ('I believe') automatically weakens an academic essay.", answer: false },
          { text: "A thesis should be stated clearly in the introduction.", answer: true },
          { text: "Revision is the same as proofreading.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Essay Structure Vocabulary",
        instruction: "Complete each sentence with the correct term: [thesis, topic sentence, evidence, analysis, transition, conclusion, introduction, hook].",
        sentences: [
          { text: "The opening of a paragraph that connects to the thesis and signals what the paragraph will argue is called a ___.", blanks: ["topic sentence"] },
          { text: "The opening device designed to engage the reader's interest immediately is called a ___.", blanks: ["hook"] },
          { text: "The central arguable claim of the essay is called the ___.", blanks: ["thesis"] },
          { text: "The explanation of what the evidence means and why it matters is called ___.", blanks: ["analysis"] },
          { text: "Words and phrases that connect ideas and guide the reader between paragraphs are called ___.", blanks: ["transition"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Strong or Weak Thesis?",
        instruction: "Select the stronger thesis in each pair.",
        questions: [
          {
            prompt: "Which is the stronger thesis about Shakespeare's Hamlet?",
            options: [
              "Hamlet is a play about revenge, mortality and madness.",
              "Hamlet's famous paralysis is not psychological weakness but a philosophical refusal to act within a moral system he recognises as fundamentally corrupt.",
            ],
            answer: "Hamlet's famous paralysis is not psychological weakness but a philosophical refusal to act within a moral system he recognises as fundamentally corrupt.",
          },
          {
            prompt: "Which is the stronger thesis about social media and youth?",
            options: [
              "Social media has both positive and negative effects on young people.",
              "The relationship between social media and adolescent wellbeing is not determined by screen time but by the quality of connection — a distinction that current policy debates consistently ignore.",
            ],
            answer: "The relationship between social media and adolescent wellbeing is not determined by screen time but by the quality of connection — a distinction that current policy debates consistently ignore.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Practising TEAL Paragraph Structure",
        instruction: "Write a TEAL paragraph (Topic sentence, Evidence, Analysis, Link) in response to a prompt about a text you are studying.",
        parentTip: "The most common student error is stopping at Evidence. Model what genuine Analysis looks like: not 'this shows that...' but 'this constructs a sense of... which positions the reader to...'",
        prompts: [
          { text: "Your prompt and thesis statement:", type: "lines" as const, lines: 2 },
          { text: "Your TEAL paragraph:", type: "box" as const },
          { text: "Label each component: T (topic sentence), E (evidence), A (analysis), L (link to thesis).", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Introduction as Argument",
        instruction: "A strong introduction does more than introduce — it establishes the context, frames the question, and states a thesis that controls the essay.",
        prompts: [
          { text: "Write an introduction (100-130 words) for a literary essay on a text you are studying. Your introduction should: engage the reader; provide relevant context; and end with a clear, arguable thesis.", type: "box" as const },
          { text: "Identify: where is your hook? Where is your context? Where is your thesis? Could a reader determine the essay's argument from the introduction alone?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Thesis Strength",
        instruction: "Sort each statement into the correct category.",
        columns: ["Strong thesis (arguable claim)", "Weak thesis (too broad or obvious)", "Not a thesis (fact or description)"],
        items: [
          { label: "George Orwell wrote 1984 in 1949." },
          { label: "1984 is relevant today because we live in a surveillance society." },
          { label: "Orwell's 1984 does not warn against a specific political system but against the human capacity for self-deception that makes any totalitarianism possible." },
          { label: "The Great Gatsby has themes of the American Dream." },
          { label: "The Great Gatsby uses Gatsby's green light not as a symbol of hope but as an ironic emblem of the impossibility of return — the dream that cannot be fulfilled because it has already passed." },
          { label: "Frankenstein is a novel about a scientist who creates a monster." },
          { label: "Frankenstein's enduring relevance lies not in its Gothic horror but in its ethical interrogation of the creator's responsibility to what they bring into existence." },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Essay You Want to Write",
        content: "If you could write any essay — on any text, any theme, any question — what would it be? Write 150 words describing the essay you would most want to write: the text, the question, the argument. What makes this question worth asking? What do you already know about the answer?",
      },
      {
        type: "open-response" as const,
        title: "Evidence and Analysis: The Difference",
        instruction: "The most common weakness in Year 10 essays is providing evidence without analysis. Practise moving from evidence to genuine interpretation.",
        parentTip: "Push your student to keep answering 'so what?' until the analytical insight is fully articulated.",
        prompts: [
          { text: "Choose a quotation from your set text. Write it here:", type: "lines" as const, lines: 2 },
          { text: "Write a sentence that merely describes what the quotation says or shows (evidence only):", type: "lines" as const, lines: 2 },
          { text: "Now write 3-4 sentences of genuine analysis: what does the quotation do? What literary choices are at work? What effect do they create? What does this reveal about theme or meaning?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Constructing a Counterargument",
        instruction: "A strong essay anticipates objections. Practise acknowledging and refuting a counterargument.",
        prompts: [
          { text: "State your essay thesis:", type: "lines" as const, lines: 2 },
          { text: "What is the strongest counterargument someone could make against your thesis?", type: "lines" as const, lines: 3 },
          { text: "Write a paragraph that concedes this counterargument and then refutes it, strengthening your original thesis:", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Essay Transitions",
        instruction: "Complete each sentence with an appropriate transition that accurately signals the relationship between ideas.",
        sentences: [
          { text: "The first body paragraph establishes X. ___, the second paragraph complicates this claim by introducing evidence that suggests Y.", blanks: ["However"] },
          { text: "Text A presents grief as private and hidden. ___, Text B treats grief as a communal, public act.", blanks: ["By contrast"] },
          { text: "The use of imagery in Chapter 3 reinforces the novel's central metaphor. ___, the structural choice to place this chapter at the midpoint of the text amplifies its significance.", blanks: ["Furthermore"] },
          { text: "This analysis reveals the complexity of the protagonist's position. ___, the essay turns to examine how the narrative voice complicates our sympathy.", blanks: ["Finally"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Revision Is Rethinking",
        content: "Revision is not the same as proofreading. When you revise, you are asking: does this paragraph do what it needs to do? Does this sentence say what I actually mean? Is my argument building, or am I just adding length? The best strategy: after a first draft, read each paragraph and ask — if I deleted this paragraph, would my argument be weaker? If the answer is 'not really', the paragraph needs to be rethought.",
      },
      {
        type: "open-response" as const,
        title: "Revising for Argument",
        instruction: "Take a paragraph from an essay you have written and revise it — not for grammar, but for argument. Ask: does this paragraph advance the thesis?",
        prompts: [
          { text: "Paste or write your original paragraph here:", type: "box" as const },
          { text: "Identify the specific weakness: missing analysis? Weak topic sentence? Evidence not connected to thesis? Describe the problem:", type: "lines" as const, lines: 3 },
          { text: "Write the revised paragraph:", type: "box" as const },
          { text: "What specifically changed between the two versions?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Essay Writing Choices",
        instruction: "Sort each choice into 'Effective academic essay practice' or 'Weakens the essay'.",
        columns: ["Effective academic essay practice", "Weakens the essay"],
        items: [
          { label: "Beginning with a specific, engaging hook" },
          { label: "Writing 'In conclusion, I have shown that...' and restating the introduction" },
          { label: "Using a topic sentence that connects directly to the thesis in every body paragraph" },
          { label: "Using large quotations without analysis to fill space" },
          { label: "Using a concession ('While it might be argued that... this evidence suggests...')" },
          { label: "Changing your thesis in the conclusion because you discovered a better argument while writing" },
          { label: "Using hedging language ('perhaps', 'it could be argued') to avoid commitment" },
          { label: "Connecting the conclusion to a broader question beyond the text itself" },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Conclusion as Opening",
        instruction: "A strong conclusion does not close — it opens. Rather than summarising what you have argued, it reflects on what the argument means and what questions it leaves unresolved.",
        prompts: [
          { text: "Write a conclusion (100-130 words) for an essay you are working on. Aim to: restate your thesis in new language; reflect on the broader significance of your argument; and end with a thought or question that opens outward.", type: "box" as const },
          { text: "Does your conclusion say anything new? Or does it just repeat the introduction? If the latter, revise.", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Planning Under Timed Conditions",
        instruction: "Essay planning is a skill — under examination conditions, five minutes of planning can save fifteen minutes of confused writing.",
        parentTip: "Time this exercise: 5 minutes only for planning, then move to writing.",
        prompts: [
          { text: "Prompt: 'Every text is a product of its time.' Using one text you have studied, agree or disagree. — Spend 5 minutes planning: brainstorm, select evidence, draft a thesis, plan three body paragraph topics:", type: "box" as const },
          { text: "Now write the essay in 40 minutes. Your plan should guide but not imprison you:", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Essay Writing: Extended Practice",
        instruction: "Choose one extended essay project.",
        suggestions: [
          "Write a complete 600-word analytical essay on a text you are studying. After completing the draft, revise it once for argument (does every paragraph advance the thesis?) and once for style (is every sentence clear and precise?). Submit the final version.",
          "Find a published student essay that has received a high mark (many state curriculum websites provide exemplars). Analyse the essay: what does the thesis do well? How is evidence integrated? What makes the writing sophisticated?",
          "Write the same essay prompt twice — once as a timed 40-minute draft, once as a careful 90-minute draft. Compare the two versions. What changed with more time? What should you aim to achieve in the 40-minute version?",
        ],
      },
      // ── Consolidating (51-80) ──
      {
        type: "open-response" as const,
        title: "Complex Thesis Construction",
        instruction: "A sophisticated thesis often has multiple components: it identifies the text's claim, the method by which this is achieved, and the significance of both.",
        parentTip: "Model: 'Through [method], [text] constructs [claim], ultimately revealing [significance].'",
        prompts: [
          { text: "Write a three-part thesis for an essay on a text you are studying, following this structure: Through [specific formal or linguistic choices], [author] constructs [argument or representation], ultimately suggesting [broader significance]:", type: "box" as const },
          { text: "Test your thesis: is each of the three parts specific? Is the significance genuinely significant — does it connect the text to a larger question?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Paragraph Architecture",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "What is the key difference between a body paragraph that describes and one that analyses?",
            options: [
              "Descriptive paragraphs are shorter; analytical paragraphs are longer",
              "Analytical paragraphs use quotations; descriptive paragraphs do not",
              "Analytical paragraphs explain what the evidence means and why it matters; descriptive paragraphs only report what the text says",
              "Descriptive paragraphs are more appropriate for poetry; analytical paragraphs for prose",
            ],
            answer: "Analytical paragraphs explain what the evidence means and why it matters; descriptive paragraphs only report what the text says",
          },
          {
            prompt: "What does the 'L' in TEAL stand for, and what does an effective link do?",
            options: [
              "Literal — quote the text literally",
              "Link — connects the analysis back to the essay's central thesis, showing how the paragraph contributes to the overall argument",
              "Language — analyses the specific language of the quotation",
              "Logic — provides a logical deduction from the evidence",
            ],
            answer: "Link — connects the analysis back to the essay's central thesis, showing how the paragraph contributes to the overall argument",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Essay Is a Living Argument",
        content: "Think of your essay as a living argument, not a container. Each paragraph should not just contain an idea — it should do something to advance the overall thesis. Ask of every paragraph: what work is this paragraph doing? If the honest answer is 'filling space' or 'saying the obvious', cut it or rethink it.",
      },
      {
        type: "open-response" as const,
        title: "Embedded Quotations",
        instruction: "Embedding quotations smoothly into your own sentences — rather than dropping them in as separate blocks — is a hallmark of sophisticated writing.",
        prompts: [
          { text: "Take five quotations from your set text. For each, write an analytical sentence that embeds the quotation and moves directly to analysis — do not use 'In this quote, the author...' or 'This shows that...'", type: "box" as const },
          { text: "Review your five sentences. Which verbs did you use to introduce the quotations? Replace any weak verbs (shows, says, states) with stronger analytical verbs (constructs, enacts, reveals, implicates, subverts).", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Structuring a Multi-Paragraph Argument",
        instruction: "A strong essay builds — each paragraph extends the argument rather than repeating it. Plan a three-paragraph argument where each paragraph adds a new dimension.",
        parentTip: "A useful test: could the paragraphs be in a different order without weakening the essay? If yes, they are not building on each other — they are just sitting next to each other.",
        prompts: [
          { text: "Your thesis:", type: "lines" as const, lines: 2 },
          { text: "Paragraph 1 topic sentence and how it begins the argument:", type: "lines" as const, lines: 3 },
          { text: "Paragraph 2 topic sentence and how it extends or complicates the argument:", type: "lines" as const, lines: 3 },
          { text: "Paragraph 3 topic sentence and how it deepens or resolves the argument:", type: "lines" as const, lines: 3 },
          { text: "Could these paragraphs be in a different order? Why or why not?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing with Precision",
        instruction: "Precision in essay writing means choosing the most exact word and the most accurate sentence structure for every claim. Vague language signals unclear thinking.",
        prompts: [
          { text: "Rewrite these vague essay sentences with precision: 'The author uses lots of imagery to show feelings.' Precise version:", type: "lines" as const, lines: 3 },
          { text: "Rewrite with precision: 'The ending is sad and makes you think.' Precise version:", type: "lines" as const, lines: 3 },
          { text: "Rewrite with precision: 'The text is about society and how people fit in.' Precise version:", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Analytical Sentence Starters",
        instruction: "Complete each analytical sentence starter with an appropriate claim about a text you are studying.",
        sentences: [
          { text: "Through the use of ___, the author constructs a sense of ___, positioning the reader to ___.", blanks: ["[device]", "[effect]", "[response]"] },
          { text: "The tension between ___ and ___ in this passage enacts the novel's central preoccupation with ___.", blanks: ["[element A]", "[element B]", "[theme]"] },
          { text: "Rather than resolving the conflict, the ending ___, suggesting that ___.", blanks: ["[what the ending does]", "[thematic implication]"] },
          { text: "This seemingly minor detail — ___ — carries ideological weight, implying ___.", blanks: ["[detail]", "[implication]"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Timed Paragraph: Under Pressure",
        instruction: "Set a timer for 12 minutes. Write one complete TEAL paragraph in response to the following: 'In your set text, how does one specific structural choice create meaning?'",
        parentTip: "Twelve minutes per paragraph is approximately the rate required in a timed examination. This task builds speed and efficiency.",
        prompts: [
          { text: "Your timed paragraph:", type: "box" as const },
          { text: "Self-evaluation: did you have a clear topic sentence? Specific evidence? Genuine analysis? A link to the thesis?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Analysis vs Description",
        instruction: "Sort each sentence into 'Analysis' (interprets, explains the effect or significance) or 'Description' (reports what happens without explaining why it matters).",
        columns: ["Analysis", "Description"],
        items: [
          { label: "The protagonist is described as wearing torn clothes." },
          { label: "The protagonist's torn clothing signals her exclusion from the ordered, prosperous world she moves through — a visual emblem of her structural disadvantage." },
          { label: "The narrator uses first person throughout the novel." },
          { label: "The consistent use of first person narration creates an intimacy that implicates the reader in the narrator's perspective, making us complicit in her moral failures." },
          { label: "The poem ends with an image of darkness." },
          { label: "The closing image of darkness reverses the light imagery of the opening, enacting a collapse of the hope with which the speaker began — a structural irony that gives the poem its elegiac weight." },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Essay as Thinking",
        content: "Michel de Montaigne invented the essay as a form of thinking out loud — a way of exploring ideas without already knowing the answer. But academic essays often work in reverse: we state the conclusion first (the thesis) and then argue for it. Is this honest? Does the academic essay constrain thinking, or does the structure help it? Write 200 words arguing a position.",
      },
      {
        type: "home-activity" as const,
        title: "Essay Feedback and Revision",
        instruction: "Choose one extended essay revision activity.",
        suggestions: [
          "Take a piece of work you received feedback on. Read the feedback carefully. Write a 200-word reflection on each piece of feedback: do you agree? What specifically will you do differently? Then rewrite the essay addressing each piece of feedback.",
          "Swap an essay with a study partner or family member. Using the TEAL framework, annotate their essay: circle every topic sentence, underline every piece of evidence, put a box around every analytical sentence. Where are the gaps?",
          "Write an essay and then read it backwards — paragraph by paragraph, starting from the conclusion. Does the argument hold together in reverse? What does this reveal about its logical structure?",
        ],
      },
      // ── Extending (81-100) ──
      {
        type: "open-response" as const,
        title: "Extended Thesis Development",
        instruction: "Develop a thesis through three stages: initial, refined, and sophisticated.",
        parentTip: "The move from initial to sophisticated often involves narrowing focus and adding a claim about why the argument matters.",
        prompts: [
          { text: "Initial thesis (first attempt — broad and obvious):", type: "lines" as const, lines: 2 },
          { text: "Refined thesis (more specific — names the method and the effect):", type: "lines" as const, lines: 2 },
          { text: "Sophisticated thesis (adds broader significance — why does this matter beyond the text?):", type: "lines" as const, lines: 3 },
          { text: "Reflect: what changed at each stage, and why is the third version stronger?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Full Essay: Timed Practice",
        instruction: "Set a timer for 50 minutes. Write a complete essay in response to this prompt: 'A text that does not challenge its reader has nothing worth saying.' Choose one text you have studied. Agree or disagree.",
        parentTip: "Examination conditions. No assistance.",
        prompts: [
          { text: "Your timed essay:", type: "box" as const },
          { text: "Self-evaluation after the timer: identify two strengths and one area to develop.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Peer Review Protocol",
        instruction: "Exchange an essay with another student or person. Using the following protocol, provide structured feedback.",
        prompts: [
          { text: "THESIS: Is it arguable? Is it specific? Does it control the essay? Write your response:", type: "lines" as const, lines: 3 },
          { text: "EVIDENCE: Is it specific? Is it embedded smoothly? Write your response:", type: "lines" as const, lines: 3 },
          { text: "ANALYSIS: Does every paragraph genuinely interpret the evidence, or does it merely describe? Write your response:", type: "lines" as const, lines: 3 },
          { text: "ARGUMENT BUILDING: Does each paragraph advance the thesis? Could the paragraphs be reordered without loss? Write your response:", type: "lines" as const, lines: 3 },
          { text: "One specific suggestion for improvement:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Essay: A Reflective Evaluation",
        instruction: "Choose your best essay from this worksheet. Write a reflective evaluation of it.",
        prompts: [
          { text: "What is the essay's greatest strength? Be specific — name the exact sentence or paragraph that is strongest and explain why.", type: "box" as const },
          { text: "What is the essay's greatest weakness? What specific revision would address it?", type: "lines" as const, lines: 4 },
          { text: "What would you do differently if you could start again with what you now know?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Extended Essay Project",
        instruction: "Choose one extended writing project.",
        suggestions: [
          "Write a 700-word essay with full revision: draft, revise for argument, revise for evidence quality, revise for style and precision. Keep all three drafts and write a 200-word reflection on what changed at each stage.",
          "Research and read a published academic literary essay (JSTOR or Google Scholar). Write a 400-word analysis of its argument: how is the thesis constructed? How is evidence used? What analytical moves does the writer make?",
          "Write a 600-word essay on a text of your own choosing — not a set text. This is an opportunity to argue for something you genuinely believe without the pressure of an examination context.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Essay You Are Most Proud Of",
        content: "Think about the best essay you have ever written — or the best analytical writing you have ever produced, in any form. Write 200 words about it: what question were you answering? What argument did you make? What made the writing feel alive rather than mechanical? What conditions allowed you to do your best thinking?",
      },
      // ── Additional activities to reach 100 ──
      {
        type: "true-false" as const,
        title: "Essay Writing: Advanced Concepts",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Using hedging language ('perhaps', 'may suggest') always weakens an academic argument.", answer: false },
          { text: "A body paragraph that could be placed anywhere in the essay without loss is probably not doing enough argumentative work.", answer: true },
          { text: "The first draft of an essay should aim to be structurally perfect.", answer: false },
          { text: "Using the first person ('I argue') in academic essays is always inappropriate.", answer: false },
          { text: "A strong conclusion opens the argument outward rather than merely closing it down.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Analytical Vocabulary of Essays",
        instruction: "Strong analytical essays use precise vocabulary to describe what texts do. Practise using analytical verbs rather than neutral ones.",
        parentTip: "Replace 'the author says' with 'the author constructs / challenges / positions / implicates / subverts'.",
        prompts: [
          { text: "Rewrite these weak analytical sentences using strong analytical verbs: 'The author uses a lot of imagery.' Rewritten:", type: "lines" as const, lines: 2 },
          { text: "'The character is sad.' Rewritten to make an analytical claim:", type: "lines" as const, lines: 2 },
          { text: "'The novel is about the past.' Rewritten as an arguable analytical claim:", type: "lines" as const, lines: 2 },
          { text: "Write three original analytical sentences using three different strong analytical verbs:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Argument Mapping",
        instruction: "Before writing, map your argument visually. An argument map shows how each body paragraph connects to the thesis and how paragraphs build on each other.",
        prompts: [
          { text: "Your thesis (place it at the centre or top of your map):", type: "lines" as const, lines: 2 },
          { text: "Draw or describe your argument map — show each body paragraph as a node, with arrows showing how they connect to the thesis and to each other:", type: "box" as const },
          { text: "Which paragraph is doing the most important argumentative work? Which could be cut without weakening the essay?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "What Makes an Essay Sophisticated?",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Which of the following best characterises sophisticated essay writing at Year 10?",
            options: [
              "Using long, complex sentences with many embedded clauses",
              "Quoting extensively from the text to demonstrate knowledge",
              "Making an arguable claim, supporting it with specific and well-selected evidence, and explaining the significance through genuine analysis",
              "Covering all possible aspects of a text in comprehensive detail",
            ],
            answer: "Making an arguable claim, supporting it with specific and well-selected evidence, and explaining the significance through genuine analysis",
          },
          {
            prompt: "The 'golden sentence' in an analytical paragraph is:",
            options: [
              "The quotation",
              "The topic sentence",
              "The analytical sentence — the one that explains what the evidence means and why it matters",
              "The linking sentence",
            ],
            answer: "The analytical sentence — the one that explains what the evidence means and why it matters",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Planning Under Timed Conditions",
        instruction: "Set a timer for 8 minutes. Write an essay plan in response to this prompt: 'How does a text you have studied use its setting to create meaning?'",
        parentTip: "Planning is a skill that must be practised under timed conditions — most students who do poorly in examinations plan inadequately.",
        prompts: [
          { text: "Your 8-minute plan (thesis, three body paragraph points, conclusion idea):", type: "box" as const },
          { text: "Now write the essay in 40 minutes using your plan as a guide:", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Essay Writing: Precision Vocabulary",
        instruction: "Complete each sentence with the most precise analytical term.",
        sentences: [
          { text: "When a writer places the most important idea at the end of a sentence for maximum emphasis, this is called ___ focus.", blanks: ["end"] },
          { text: "A sentence that makes a claim about the world, rather than asking a question or giving a command, is called a ___ sentence.", blanks: ["declarative"] },
          { text: "In TEAL structure, the T stands for ___ sentence, which connects the paragraph to the central argument.", blanks: ["topic"] },
          { text: "An essay that 'hedges' its claims by using words like 'perhaps' and 'may suggest' is being ___, which can be appropriate when the evidence is genuinely ambiguous.", blanks: ["tentative"] },
        ],
      },
      {
        type: "sorting" as const,
        title: "Essay Planning Strategies",
        instruction: "Sort each planning strategy into 'Effective for timed essay writing' or 'Better suited to extended research writing'.",
        columns: ["Effective for timed writing", "Better for extended research"],
        items: [
          { label: "Brainstorm all possible ideas, then select the three strongest" },
          { label: "Conduct a full literature review before forming a thesis" },
          { label: "Draft a thesis first, then plan evidence to support it" },
          { label: "Write multiple full drafts before selecting the strongest" },
          { label: "Spend 5-8 minutes planning, 35-40 minutes writing, 5 minutes checking" },
          { label: "Gather feedback from peers before writing the final version" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Two Versions of the Same Paragraph",
        instruction: "Read both versions of a paragraph analysing the same textual evidence, and evaluate which is stronger.",
        prompts: [
          { text: "Version A: 'The author uses the metaphor of a cage to describe the protagonist's situation. This is a metaphor. The protagonist feels trapped. This reflects the theme of freedom.'\n\nVersion B: 'Through the sustained metaphor of the cage — introduced in Chapter 2 and returned to at every moment of crisis — the author constructs the protagonist not merely as imprisoned but as having internalised her own captivity; the cage becomes a state of mind rather than a physical structure, enacting the novel's central argument that oppression is most complete when it is no longer recognised as such.'\n\nWhat specific analytical moves does Version B make that Version A does not?", type: "box" as const },
          { text: "Write your own Version B of a weak paragraph from an essay you have written:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Integrating Secondary Sources into an Essay",
        instruction: "At Year 10, you may begin to include critical or secondary sources in your analytical essays. Practise doing this without letting the source overwhelm your own argument.",
        prompts: [
          { text: "Find one critical opinion about a text you are studying (a review, a study guide note, or a published critical comment). Quote or paraphrase it here:", type: "lines" as const, lines: 3 },
          { text: "Write a paragraph that uses this secondary source as support for your own analytical argument. The source should serve your argument — not replace it:", type: "box" as const },
          { text: "Could you remove the secondary source from this paragraph without losing your argument? If yes, is the source genuinely integrated?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Self-Assessment: Your Essay Strengths and Gaps",
        instruction: "Honest self-assessment is one of the most important skills a writer can develop. Evaluate your essay writing across the following dimensions.",
        parentTip: "Ask your student to be brutally honest here — productive self-assessment requires naming real weaknesses.",
        prompts: [
          { text: "Rate yourself (1-5) and give specific evidence for each: Thesis construction (arguable, specific, controls the essay):", type: "lines" as const, lines: 3 },
          { text: "Evidence selection and integration (specific, embedded, not over-quoted):", type: "lines" as const, lines: 3 },
          { text: "Analysis (genuinely interprets evidence rather than describes):", type: "lines" as const, lines: 3 },
          { text: "Argument building (paragraphs advance rather than repeat):", type: "lines" as const, lines: 3 },
          { text: "Your priority for development: what specific action will you take?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Revision Strategies",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Revision should focus primarily on correcting grammar and spelling.", answer: false },
          { text: "The best way to revise is to read your essay aloud.", answer: true },
          { text: "If a paragraph feels good, you should trust your instinct and leave it alone.", answer: false },
          { text: "A strong revision strategy includes checking whether every paragraph advances the thesis.", answer: true },
          { text: "Cutting material that does not serve the argument is a sign of good revision, not inadequacy.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "From Plan to Draft: A Full Essay",
        instruction: "Write a complete polished essay (600-700 words) on a text you are studying. This essay should represent your best sustained analytical writing.",
        parentTip: "Allow 70-80 minutes: 10 min planning, 55 min writing, 10 min reviewing.",
        prompts: [
          { text: "Your essay:", type: "box" as const },
          { text: "After completion: identify your thesis sentence. Is it genuinely arguable? If not, revise it.", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Essay Writing: Extended Project",
        instruction: "Choose one sustained essay project.",
        suggestions: [
          "Write and fully revise a 700-word essay on a text of your choice. Revise it three times: once for argument, once for evidence quality, once for style. Keep all three versions and write a 200-word reflection on what changed.",
          "Find a past examination essay prompt from any state's Year 10 English exam. Write a complete response under timed conditions. Compare your response to any published exemplar or marking guide. Write a 200-word reflection.",
          "Write an essay that argues against a position you personally hold. Choose a text you have studied and argue for an interpretation you find less compelling. Reflect: what did arguing against your own position reveal about your understanding of the text?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: If You Could Teach Essay Writing",
        content: "Imagine you have 20 minutes to teach someone who has never written an analytical essay how to write one. What are the five most important things you would tell them? Write your 20-minute lesson plan in 200 words. What you include — and what you leave out — reveals what you have learned is most essential.",
      },
      {
        type: "open-response" as const,
        title: "Your Essay Writing Goals",
        instruction: "Reflect on your development as an essay writer across this worksheet.",
        prompts: [
          { text: "What is the single most important thing you have learned about analytical essay writing?", type: "lines" as const, lines: 3 },
          { text: "What is your specific goal for the next essay you write? Make it concrete — not 'write better' but a specific target:", type: "lines" as const, lines: 3 },
          { text: "Describe the conditions under which you do your best essay writing. How can you create those conditions more reliably?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Essay Writing: True or False?",
        instruction: "Decide whether each statement about essay writing is true or false.",
        parentTip: "Discuss each answer — the 'false' statements often expose common misconceptions worth unpacking.",
        statements: [
          { text: "A thesis statement should be the last sentence of an introductory paragraph.", answer: false },
          { text: "Each body paragraph should focus on one main idea that supports the thesis.", answer: true },
          { text: "Using more quotations always makes an essay more academic.", answer: false },
          { text: "A counterargument paragraph, when handled well, strengthens rather than weakens an essay.", answer: true },
          { text: "A conclusion should introduce new evidence not covered in the body.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Analytical Language: Fill the Gap",
        instruction: "Complete each sentence with an appropriate analytical phrase: [it is evident that, this suggests, this reveals, the effect of, by contrast].",
        sentences: [
          { text: "___ this technique is the creation of a sense of urgency in the reader.", blanks: ["The effect of"] },
          { text: "___, the second character functions as a foil who intensifies the protagonist's qualities.", blanks: ["By contrast"] },
          { text: "The repeated use of light imagery ___ the author is drawing on religious symbolism.", blanks: ["suggests"] },
          { text: "___ that the author is making a broader social commentary beyond the immediate narrative.", blanks: ["It is evident"] },
          { text: "The shift in syntax at this point ___ a change in the narrator's emotional state.", blanks: ["reveals"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing a Strong Introduction",
        instruction: "A strong essay introduction orientates the reader, establishes context, and presents a clear thesis.",
        parentTip: "Read the introduction aloud together — if it sounds generic or mechanical, it needs revision.",
        prompts: [
          { text: "Write an introduction (100–120 words) for an essay on this prompt: 'Explore how a text you have studied uses language to construct a particular version of reality.' Focus on establishing context and presenting a clear, specific thesis.", type: "box" as const },
          { text: "Peer-evaluate your own introduction: does it avoid generic openers ('Since the beginning of time...')? Does the thesis make a specific, arguable claim? Revise at least one sentence to make it stronger.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Stronger Thesis",
        instruction: "Circle the stronger thesis statement in each pair.",
        questions: [
          {
            prompt: "Which is the stronger thesis for an essay on power in '1984'?",
            options: [
              "'1984' is a novel about power and control.",
              "Orwell constructs power in '1984' as a self-perpetuating system that eliminates the very possibility of resistance through the manipulation of memory and language.",
            ],
          },
          {
            prompt: "Which is the stronger thesis for an essay on identity in 'The Secret River'?",
            options: [
              "Grenville explores how Thornhill's identity as a convict shapes his relationship to the Australian landscape and to the people he displaces.",
              "The novel is about a man named Thornhill who has a complicated identity.",
            ],
          },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Essay Structure: Advanced Questions",
        instruction: "Choose the best answer for each question about extended essay writing.",
        parentTip: "These questions are pitched at Year 10–12 level and good preparation for senior English essays.",
        questions: [
          {
            prompt: "A Rogerian argument structure is distinct because it:",
            options: [
              "Lists arguments from strongest to weakest",
              "Seeks common ground between opposing positions before presenting its own view",
              "Uses a problem-solution structure",
              "Begins with the counterargument and then refutes it",
            ],
            answer: "Seeks common ground between opposing positions before presenting its own view",
          },
          {
            prompt: "The purpose of signposting language in an essay (e.g., 'firstly', 'furthermore', 'in contrast') is to:",
            options: [
              "Add word count to reach the essay's minimum length",
              "Guide the reader through the structure of the argument",
              "Replace the need for a clear thesis",
              "Demonstrate that you have done research",
            ],
            answer: "Guide the reader through the structure of the argument",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Essay as Argument",
        instruction: "An essay is fundamentally an argument — an attempt to persuade a reader to accept your interpretation or view.",
        prompts: [
          { text: "What is the difference between an argument and an opinion? How does an essay turn an opinion into an argument?", type: "lines" as const, lines: 4 },
          { text: "Choose a strong opinion you hold about a text you have studied. Write a 150-word essay paragraph that transforms that opinion into a well-evidenced argument.", type: "box" as const },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Revising for Precision",
        content: "First drafts are rarely precise. When revising, ask of every sentence: 'Is this the most precise way I could say this? Is every word earning its place?' Replace vague words ('nice', 'interesting', 'good') with precise analytical terms. Replace general statements with specific, evidenced claims. Precision is a sign of clear thinking.",
      },
      {
        type: "open-response" as const,
        title: "Planning Before Writing",
        instruction: "Strong essays are planned before they are written. Planning clarifies your argument and reveals gaps in your thinking.",
        parentTip: "Encourage your student to spend at least 20% of their available time planning before they begin writing.",
        prompts: [
          { text: "For an essay prompt of your choice, create a detailed essay plan: thesis, three body paragraph topics with supporting evidence and analysis, counterargument, and conclusion strategy.", type: "box" as const },
          { text: "Review your plan: does each body paragraph directly support the thesis? Is there clear progression through your argument? Does your evidence actually prove your claims? Revise as needed.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Using Quotations Effectively",
        instruction: "Quotations are most effective when they are brief, well-chosen, and thoroughly analysed.",
        prompts: [
          { text: "Find three quotations from a text you are studying that could support an argument. For each: quote it, explain why you chose it, and write two sentences of analysis that explain what the quotation reveals about the author's craft or the text's meaning.", type: "box" as const },
          { text: "What is the difference between a quotation that is dropped in and one that is fully embedded and analysed? Rewrite one of your quotations to demonstrate better embedding.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Essay Writing: Reading and Revision Practice",
        instruction: "Choose one extended essay-writing home activity.",
        suggestions: [
          "Find a published Year 12 or university-level essay on a text or topic you are interested in. Read it carefully and write a 300-word analysis of its structure and argument: How is the thesis developed? How does each paragraph contribute? What makes the argument convincing?",
          "Take a completed essay you have written previously and revise it substantially: sharpen the thesis, improve the topic sentences, deepen the analysis of quotations, and strengthen transitions. Write a 200-word reflection on what you changed and why.",
          "Write a fresh 500-word essay on a topic of your choosing, using all the techniques from this worksheet. After completing it, write a 150-word self-evaluation using the marking criteria you have been working with.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Essay You Wish You Could Write",
        content: "If you could write an essay about anything — any text, any idea, any question — what would it be? What question would you most want to investigate through the sustained thinking that essay writing demands? Write 150 words describing the essay you wish you could write. Then consider: what would you need to learn or read to actually write it?",
      },
      {
        type: "true-false" as const,
        title: "Extended Essay: True or False?",
        instruction: "Decide whether each statement about extended essay writing is true or false.",
        statements: [
          { text: "A thesis statement must always appear in the first paragraph of an essay.", answer: false },
          { text: "Topic sentences should connect the paragraph's argument back to the essay's thesis.", answer: true },
          { text: "An essay conclusion should introduce at least one new piece of evidence to finish strongly.", answer: false },
          { text: "Revision means proofreading for spelling errors.", answer: false },
          { text: "A well-constructed counterargument paragraph, when properly refuted, strengthens an essay's overall argument.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Developing an Argument Through a Text",
        instruction: "Extended analytical essays are not summaries — they develop an argument about a text's meaning, methods, and significance.",
        parentTip: "The key distinction to reinforce: an essay argues; a summary describes. Push students toward argument at every stage.",
        prompts: [
          { text: "Choose a theme from a text you are studying. Write an arguable, specific thesis about how this theme is developed in the text. Avoid generic claims ('The text explores identity') — aim for interpretive claims ('By positioning the protagonist at the margins of every social group, the text suggests that identity is always relational and unstable').", type: "box" as const },
          { text: "Plan three body paragraphs that develop your thesis, each focusing on a different technique or moment in the text. Write a topic sentence for each that explicitly connects back to your thesis.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Essay Transitions: Complete the Sentence",
        instruction: "Fill each gap with an appropriate transition phrase: [in contrast to, building on this, taken together, however, this is further complicated by].",
        sentences: [
          { text: "___ this interpretation, one might argue that the author's use of irony disrupts rather than reinforces the surface meaning.", blanks: ["However"] },
          { text: "___ the previous argument, we can observe a similar pattern in the novel's treatment of memory.", blanks: ["Building on this"] },
          { text: "Text A's optimistic conclusion, ___ Text B's deeply ambiguous ending, reveals two fundamentally different views of human capacity for change.", blanks: ["in contrast to"] },
          { text: "___ the fact that the narrator's reliability is deliberately undermined throughout.", blanks: ["This is further complicated by"] },
          { text: "___, these three examples of fragmented structure suggest that the text is formally enacting the psychological disintegration of its narrator.", blanks: ["Taken together"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Editing for Clarity and Concision",
        instruction: "Strong essays are precisely worded — every sentence earns its place. Editing is not proofreading; it is rethinking.",
        parentTip: "Read the original and revised sentences aloud together — the improvement is usually immediately audible.",
        prompts: [
          { text: "Take any paragraph from an essay you have written. Identify: (a) any vague words that could be more precise, (b) any sentences that are longer than they need to be, (c) any claims that are not supported by evidence. Rewrite the paragraph, addressing all three issues.", type: "box" as const },
          { text: "Compare the original and revised versions. How many words did you cut? How much clearer is the revised version? What does this exercise tell you about the importance of revision?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Essay Writing: Choosing the Stronger Option",
        instruction: "Choose the stronger analytical option in each case.",
        questions: [
          {
            prompt: "Which is the stronger topic sentence?",
            options: [
              "The author uses lots of different techniques in this chapter.",
              "Through the sustained use of fragmented syntax and present-tense narration, the author creates an overwhelming sense of immediacy that positions the reader inside the protagonist's psychological crisis.",
            ],
            answer: "Through the sustained use of fragmented syntax and present-tense narration, the author creates an overwhelming sense of immediacy that positions the reader inside the protagonist's psychological crisis.",
          },
          {
            prompt: "Which is the more effective way to conclude an analytical paragraph?",
            options: [
              "This shows that the author is a good writer.",
              "The cumulative effect of these choices is to align the reader's moral sympathies with the protagonist, even at the moment of their most ethically compromised decision.",
            ],
            answer: "The cumulative effect of these choices is to align the reader's moral sympathies with the protagonist, even at the moment of their most ethically compromised decision.",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Three-Level Zoom",
        content: "A useful model for analytical essays: zoom out (text's overall concern), zoom in (specific moment or technique), zoom out again (what does this specific moment reveal about the text's broader purpose?). This three-level movement — from big picture to close detail and back — creates depth and coherence in literary analysis.",
      },
      {
        type: "open-response" as const,
        title: "Essay Planning: Working Backwards",
        instruction: "Sometimes it helps to plan an essay backwards: start with the conclusion you want to reach, then design the argument that leads there.",
        prompts: [
          { text: "Write a conclusion for an essay you would like to write on a text you are studying — before you have written the rest of the essay. What claim do you want your reader to accept by the end? What is the 'big idea' that your evidence adds up to?", type: "box" as const },
          { text: "Now work backwards: what three body arguments would need to be established for this conclusion to feel earned? Write three topic sentences that would lead to this conclusion.", type: "lines" as const, lines: 6 },
          { text: "Does this process change how you see your thesis? Revise your thesis statement in light of the conclusion you have written.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Process Reflection",
        instruction: "Understanding your own writing process helps you write more effectively and efficiently.",
        parentTip: "These reflective habits — identifying what works and what doesn't in your own process — are lifelong writing skills.",
        prompts: [
          { text: "Describe your current essay writing process from prompt to finished draft. Be honest about what you do well and what you avoid or rush.", type: "box" as const },
          { text: "Identify one step in your process that you would most like to improve. Design a specific strategy for improving it in your next essay.", type: "lines" as const, lines: 5 },
          { text: "What does your best essay writing look like? What conditions and habits produce it? How can you create those conditions more consistently?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify Better Essay Practice",
        instruction: "Circle the better essay writing practice in each pair.",
        questions: [
          {
            prompt: "When beginning an essay:",
            options: [
              "Write the introduction first to set up everything that follows.",
              "Write the body paragraphs first, then write an introduction that accurately represents the argument you have actually made.",
            ],
          },
          {
            prompt: "When integrating a quotation:",
            options: [
              "'The author says \"hope is the thing with feathers\". This means that hope is like a bird.'",
              "Dickinson's image of hope as 'the thing with feathers' transforms an abstract concept into a living, fragile presence — suggesting that hope, like a bird, must be carefully tended and can easily be lost.",
            ],
          },
          {
            prompt: "When writing a conclusion:",
            options: [
              "Summarise each of your body paragraphs in order to remind the reader what you covered.",
              "Synthesise your argument — show how your body paragraphs have worked together to establish a larger insight about the text or idea.",
            ],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Extended Essay: Final Synthesis",
        instruction: "Bring together your learning about extended essay writing in a culminating reflection.",
        parentTip: "This final synthesis task makes an excellent portfolio piece or basis for a parent-student discussion about the student's writing development.",
        prompts: [
          { text: "Write a 200-word 'Letter to My Future Self' about essay writing: what do you know now about how to write a strong extended essay that you wish you had known earlier? What advice would you give yourself?", type: "box" as const },
          { text: "List the five most important principles of strong extended essay writing, in order of importance to you. For each, explain in one sentence why it matters.", type: "lines" as const, lines: 8 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Essay Writing: Sustained Practice",
        instruction: "Choose one extended writing home activity.",
        suggestions: [
          "Write a full extended essay (600–800 words) on a text you are studying. Plan it carefully, draft it, and then revise it using all the strategies from this worksheet. Attach a 200-word reflection on your process: what worked, what was difficult, and what you would do differently next time.",
          "Find a model essay on a text you are studying (many Year 12 or university resources are available online). Read it critically: identify the thesis, the structure, the quality of the analysis, the use of evidence. Write a 400-word evaluation of the essay's strengths and weaknesses using the criteria from this worksheet.",
          "Write the same essay twice: first in one hour (timed exam conditions), then take as long as you need and use all your planning and revision strategies. Compare the two versions. Write a 200-word reflection on what the comparison reveals about the role of process in essay quality.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Why Write Essays?",
        content: "The essay is one of the oldest and most human forms of writing — a form of sustained, exploratory thinking in public. Montaigne (who invented the essay) said the essayist's subject was always ultimately the self. Do you agree? What does writing an essay reveal about you — your values, your uncertainties, your ways of thinking? Write 200 words about what essay writing has taught you about yourself.",
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Voice and Style",
        instruction: "Senior analytical essays have a voice — a style that reflects the writer's personality, confidence, and ways of thinking.",
        parentTip: "Read your student's essays aloud occasionally — hearing the voice helps identify where it is strong and where it becomes flat.",
        prompts: [
          { text: "Read two paragraphs from essays you have written at different times this year. Describe your analytical voice: what are its characteristic strengths? What habits or tendencies make your writing recognisable?", type: "box" as const },
          { text: "What aspect of your analytical voice do you most want to develop? Write one paragraph (100 words) that deliberately pushes your voice in that direction.", type: "box" as const },
        ],
      },
      {
        type: "true-false" as const,
        title: "Essay Writing: Principles Review",
        instruction: "A final review of key essay writing principles.",
        parentTip: "Use this as an oral quiz — have students justify their answers with specific examples.",
        statements: [
          { text: "The best way to conclude a paragraph is to summarise what you have said.", answer: false },
          { text: "A counterargument paragraph that is well handled strengthens your overall essay.", answer: true },
          { text: "Academic essays should never use first-person ('I believe', 'I argue').", answer: false },
          { text: "The best essays have a clear, arguable thesis rather than simply describing what a text is 'about'.", answer: true },
          { text: "A long quotation (five or more lines) is always more impressive than a short, well-chosen quotation.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing for Different Audiences",
        instruction: "Academic essays are written for a specific kind of reader. Understanding that reader helps you make appropriate choices.",
        prompts: [
          { text: "Describe the implied reader of an academic analytical essay: what do they already know? What do they expect from your writing? What will impress them and what will disappoint them?", type: "lines" as const, lines: 5 },
          { text: "Now write the opening of an essay on a text you are studying, written explicitly for this implied reader. Make every sentence choice with this reader in mind.", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Culminating Practice",
        instruction: "The best way to consolidate essay writing skills is to write — and then to reflect critically on what you have written.",
        parentTip: "This culminating practice task may be used as an assessment piece for end-of-year English portfolio.",
        prompts: [
          { text: "Write an extended analytical essay (600–800 words) on a text you are studying. Use all the strategies from this worksheet: a clear arguable thesis, well-structured body paragraphs with evidence and analysis, at least one counterargument, and a synthesising conclusion.", type: "box" as const },
          { text: "After completing your essay, write a 150-word self-evaluation: what are the strongest aspects of this essay? What would you revise if you had another hour? What specific target will you set for your next essay?", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "matching" as const,
        title: "Match the Essay Element to Its Purpose",
        instruction: "Match each essay element to its primary purpose.",
        left: ["Thesis", "Topic sentence", "Evidence", "Analysis", "Signposting", "Conclusion"],
        right: [
          "Guides the reader through the essay's structure",
          "Synthesises the argument without introducing new evidence",
          "Supports the claim with textual or research-based examples",
          "Makes an arguable interpretive claim about the text or issue",
          "Explains what the evidence reveals about the text's meaning or the essay's argument",
          "Opens a paragraph by identifying its central claim",
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Sustained Independent Work",
        instruction: "Extended essays are developed over time — planning, drafting, revising, editing.",
        prompts: [
          { text: "Design a four-day essay writing plan for an essay of 600–800 words: what will you accomplish each day? Include time for planning, drafting, revising for argument, and editing for language.", type: "box" as const },
          { text: "What specific strategies will you use during revision — different from editing? How will you check that your argument is clear and your evidence well-integrated?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Reading Your Essay Backwards",
        content: "One of the most effective editing techniques is to read your essay backwards — from the last sentence to the first. This forces you to evaluate each sentence independently, without being pulled along by the flow of the argument. You are more likely to catch repetition, vagueness, or grammatical errors this way than when reading straight through.",
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Peer and Self-Evaluation",
        instruction: "Evaluating essays — your own and others' — develops critical awareness of what makes a strong analytical essay.",
        parentTip: "If your student has access to a peer, this works excellently as a peer-evaluation activity. Otherwise, self-evaluation with specific criteria works well.",
        prompts: [
          { text: "Using the criteria you have developed throughout this worksheet (clear thesis, strong evidence, depth of analysis, effective structure, appropriate language), evaluate a completed essay: your own, a model essay, or one written by a peer. Give a rating and specific comments for each criterion.", type: "box" as const },
          { text: "What one specific change would most improve the essay you have evaluated? Write a revised version of the weakest paragraph.", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Essay: Extended Writing Portfolio",
        instruction: "Choose one extended writing activity to build your essay portfolio.",
        suggestions: [
          "Write three short analytical essays (250–300 words each) on three different texts, each using a different analytical lens (character, theme, technique). After completing all three, write a 200-word reflection on what you learned across the three essays about how analytical lens shapes your writing.",
          "Take an essay you wrote earlier in the year. Revise it thoroughly using everything you have learned in this worksheet. Then write a 'Revision Memoir' of 200 words: what did you change, and why? What does the difference between the original and the revised version reveal about your growth as a writer?",
          "Find a published literary or cultural essay that you admire (by a critic, academic, or serious journalist). Read it carefully and write a 400-word analysis of its essay craft: how is the thesis developed? How is evidence integrated? How does the conclusion land? What makes it a model of good analytical writing?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Essay as Exploration",
        content: "The essayist Annie Dillard wrote: 'We write to find out what we know.' Think about an essay you have written where the process of writing changed what you thought — where you discovered something you did not know you believed until you tried to articulate it. What did the essay teach you? Is this what makes essay writing different from other forms of thinking?",
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Cross-Disciplinary Application",
        instruction: "Essay writing skills developed in English apply across all academic subjects — the ability to construct a clear argument from evidence is universal.",
        parentTip: "This cross-disciplinary activity works well if your student is simultaneously working on essays in History, Science, or Social Studies.",
        prompts: [
          { text: "Choose an essay you have written or are about to write in any subject other than English. Apply the essay writing principles from this worksheet: does it have a clear thesis? Are body paragraphs structured effectively? Is evidence well-integrated and analysed?", type: "box" as const },
          { text: "What is different about essay writing in this other subject compared to English? What principles transfer directly and which need adaptation?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Essay Writing: Senior Level Principles",
        instruction: "Test your understanding of senior-level essay writing principles.",
        statements: [
          { text: "In a literary essay, the thesis should make a claim that could be argued in multiple ways.", answer: true },
          { text: "Effective analytical paragraphs follow a rigid five-step formula that should never be varied.", answer: false },
          { text: "The best conclusion introduces the essay's strongest new evidence for maximum impact.", answer: false },
          { text: "Using hedging language ('it could be argued', 'one reading suggests') can be appropriate in academic essays.", answer: true },
          { text: "A well-written essay should be readable from any paragraph — each body paragraph should be able to stand alone as a coherent argument.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Setting Standards for Yourself",
        instruction: "Senior students who excel at essay writing typically hold themselves to specific, self-imposed standards.",
        parentTip: "These self-standards can be incorporated into a student's personal learning plan or portfolio goals.",
        prompts: [
          { text: "Write your personal 'Essay Writing Standards' — a list of five or six specific commitments about the quality of your essay writing that you will hold yourself to from now on. Make them specific and achievable: not 'write better essays' but 'never use a vague verb like \"shows\" when a precise one like \"argues\" or \"implies\" is available'.", type: "box" as const },
          { text: "How will you hold yourself accountable to these standards? Who will help you?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Final Portfolio Reflection",
        instruction: "Bring together your learning about extended essay writing in a final portfolio piece.",
        parentTip: "This final portfolio reflection is an excellent anchor piece for an end-of-year English assessment document.",
        prompts: [
          { text: "Compile a 'Best Of' selection from your essay writing this year: your strongest thesis, your most effective body paragraph, and your best conclusion. Write a 200-word commentary on why you chose each one and what it reveals about your development as a writer.", type: "box" as const },
          { text: "Set three specific goals for your essay writing in Year 11. For each goal, explain why it matters and how you will work toward it.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Better Essay Practice",
        instruction: "Circle the better essay writing practice.",
        questions: [
          {
            prompt: "When you are stuck on an essay:",
            options: [
              "Skip straight to the conclusion and work backwards",
              "Begin with the body paragraph you feel most confident about, then build the introduction and conclusion around what you have actually argued",
            ],
          },
          {
            prompt: "For integrating a quotation effectively:",
            options: [
              "'The author says: \"[quote].\" This shows that the theme of identity is important.'",
              "By positioning the protagonist as '[quote]', the author reveals that identity in this text is constructed through social relationships rather than individual essence.",
            ],
          },
          {
            prompt: "When your argument changes direction mid-essay:",
            options: [
              "Stop and revise your thesis to reflect the argument you have actually developed",
              "Keep the original thesis and force the body paragraphs to fit it",
            ],
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Essay Writing: Reading Exemplary Essays",
        instruction: "Choose one home activity focused on reading and learning from exemplary essays.",
        suggestions: [
          "Find three published exemplary essays in any field (literary criticism, philosophy, cultural commentary, or long-form journalism). Read them carefully for their essay craft — not their content. Write a 400-word analysis of what techniques and habits of mind make each essay effective.",
          "Read George Orwell's essay 'Why I Write' and one other writer's essay about their own writing process. Write a 400-word comparative reflection: what do these writers say about the purposes of writing? What do they share? How does their thinking connect to your own experience of writing?",
          "Find and read an essay by a student writer that has been published as an exemplar. Evaluate it against the criteria from this worksheet. Write a 300-word response: what makes it exemplary? What would you do differently? What can you learn from it for your own writing?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Essay You Were Born to Write",
        content: "Every writer has a subject — an idea, a question, or an experience that they alone are positioned to write about with complete authority and authenticity. What is yours? What essay could you write that no one else could — because of who you are, what you have experienced, and what you deeply understand? Write 200 words about that essay. You do not have to write it now. But begin thinking about it.",
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Reading Across Disciplines",
        instruction: "Essays in different disciplines have different conventions — understanding this prepares you for senior and tertiary study.",
        prompts: [
          { text: "Read one essay from a discipline other than English (e.g. a philosophy essay, a historical essay, a scientific review essay, or an economics analysis). How is its structure, evidence use, and language different from a literary essay?", type: "box" as const },
          { text: "What principles from this worksheet apply across all these essay types? What is uniquely specific to literary analysis?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Your Essay Manifesto",
        instruction: "Write your personal essay writing manifesto — a statement of principles that will guide your essay writing from now on.",
        parentTip: "A personal manifesto is a powerful document of intent — revisit it at the end of each year to see how it evolves.",
        prompts: [
          { text: "Write your Essay Manifesto (200 words): what do you believe about what makes a great essay? What principles will guide how you plan, draft, revise, and take pride in your work?", type: "box" as const },
          { text: "Share one principle from your manifesto with your parent/teacher and explain why it matters to you.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay Writing: Preparing for Senior English",
        instruction: "Senior English requires sustained, sophisticated essay writing. This activity prepares you directly.",
        parentTip: "Research the specific essay requirements for your planned senior English course — make this activity concrete and relevant.",
        prompts: [
          { text: "Research the essay requirements of the senior English course you will study in Year 11. What are the key essay types, word limits, and assessment criteria? How do they differ from what you have been practising?", type: "box" as const },
          { text: "Based on your research, what are the three most important skills you need to develop before Year 11 to be well-prepared for senior essay writing?", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Essay Writing: Final Mastery Check",
        instruction: "A final mastery check on essay writing principles.",
        statements: [
          { text: "A counterargument paragraph weakens an essay's argument.", answer: false },
          { text: "The thesis of an analytical essay should be both arguable and specific.", answer: true },
          { text: "Topic sentences should relate every paragraph back to the essay's thesis.", answer: true },
          { text: "The best conclusions summarise the body paragraphs in order.", answer: false },
          { text: "Revision of an essay should focus on argument and structure before grammar and style.", answer: true },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Essay That Stays With You",
        content: "Think about an essay, article, or piece of non-fiction that you have read that has stayed with you — one that changed how you thought, made you feel something unexpected, or revealed something you would not otherwise have seen. What made it memorable? Was it the argument, the voice, the evidence, the structure, or some combination? And what can its example teach you about what you want your own essays to achieve?",
      },
      {
        type: "open-response" as const,
        title: "Your Essay Manifesto",
        instruction: "Reflect on everything you have learned about essay writing in this worksheet and write a short personal manifesto for your own essay practice.",
        parentTip: "Encourage your student to be honest about their strengths and genuine about the habits they want to build — this is a private document for their own development.",
        prompts: [
          { text: "What do you believe makes a great essay? List your three non-negotiables.", type: "lines" as const, lines: 3 },
          { text: "What is your biggest weakness as an essay writer right now, and what specific strategy will you use to address it?", type: "lines" as const, lines: 3 },
          { text: "Write a one-sentence commitment to yourself about how you will approach your next extended essay.", type: "lines" as const, lines: 2 },
        ],
      },
    ],
  },

  // ── WS 6: Evaluating Sources & Synthesising Research ─────────────────────────
  {
    slug: "evaluating-sources-synthesising-research",
    title: "Evaluating Sources & Synthesising Research",
    strand: "Literacy",
    description:
      "Develop critical skills for evaluating the credibility, currency and bias of sources — and learn to synthesise multiple perspectives into a coherent, referenced argument.",
    learningGuide: {
      concept:
        "Research at this level is not about finding information — it is about evaluating it. Every source has a purpose, an audience and a perspective. Strong research involves choosing sources critically and weaving them into an argument that is your own.",
      activation:
        "Ask: if you wanted to find out whether a new health supplement was safe, what kinds of sources would you trust, and why? What sources would you be sceptical of?",
      check:
        "Can your student distinguish between a primary source, a secondary source and a tertiary source? Can they explain why a source's purpose and audience affect its reliability?",
    },
    lesson: {
      title: "Not All Sources Are Equal",
      objective:
        "Apply evaluation criteria to assess the reliability of a range of sources, and synthesise two or more perspectives into a referenced argument.",
      materials: [
        "Three different sources on the same topic (one academic, one journalism, one social media or blog)",
        "Paper and pen",
        "Access to a search engine for the extension task",
      ],
      intro: {
        title: "The Information Ecosystem",
        script:
          "We live in an environment where more information is available to us than at any point in human history. But more information does not mean better understanding — it often means more noise. The skill we are developing today is not finding information, but evaluating it. Every source was created by someone, for a purpose, for an audience, at a particular moment. Those factors shape what the source includes, what it leaves out, and how it frames its subject. A pharmaceutical company's press release and an independent clinical trial might both be about the same drug — but they are very different sources.",
        action:
          "Show your student three sources on the same topic: an academic journal abstract, a newspaper article, and a social media post or blog. Before any analysis, just ask: which of these would you trust most, and why? What is your instinct based on?",
      },
      mainActivity: {
        title: "The SIFT Framework",
        script:
          "One useful tool for evaluating sources quickly is the SIFT framework: Stop, Investigate the source, Find better coverage, Trace claims back to their origin. Stop means: pause before sharing or using a source. Ask yourself what you actually know about this source. Investigate means: look up the author, the publication, the organisation behind it. Find better coverage means: do not rely on a single source for an important claim. Trace means: if a source cites data, find the original data and check whether the citation is accurate. Let us apply this to one of the sources in front of us.",
        action:
          "Together, apply SIFT to the least obviously reliable of your three sources. What do you find out about the author or organisation? Does the source cite its claims? Can you trace those claims to a primary source?",
      },
      wrapUp: {
        title: "Synthesis vs Summary",
        script:
          "Here is the key distinction for research writing: a summary tells you what each source says. A synthesis weaves the sources together to support your argument. In synthesis, the sources serve your thinking — you are not just reporting what they say, you are using them as evidence for a claim you are making. Let us try it: based on the three sources, what is one claim you could make that draws on all three?",
        action:
          "Student drafts one synthesising sentence that references two or more sources and makes a claim of their own.",
      },
      parentTip:
        "Media literacy is something both of you can practise together. If you come across a claim in the news that seems surprising, try applying SIFT with your student. Your genuine uncertainty about a source is a useful model — it shows that evaluation is an ongoing practice, not a one-time skill. Common misconception: students often equate 'published' with 'credible' — they assume that if something appears on a website or in a book, it must be reliable. Help them understand that credibility depends on the author's expertise, the publication's editorial standards, the recency of the information, and whether evidence supports the claims. Another common error is that students synthesise by simply summarising each source in sequence rather than integrating ideas across sources thematically. True synthesis means identifying where sources agree, disagree, or complement each other. Your child is ready for the worksheet when they can: (1) evaluate a source using at least 3 criteria (authority, accuracy, currency, purpose, bias), (2) distinguish between a summary and a synthesis, and (3) write a paragraph that draws on at least two sources to make a single integrated point rather than summarising each source separately.",
      extension:
        "Write a 300-word research paragraph on a topic of your choice, using at least three sources. Include an in-text reference for each source. Then write a 100-word reflection on how you evaluated and selected your sources.",
      resources: [
        {
          title: "SIFT: The Four Moves (Mike Caulfield)",
          url: "https://hapgood.us/2019/06/19/sift-the-four-moves/",
          description:
            "The original explanation of the SIFT framework for evaluating online information.",
        },
        {
          title: "Purdue OWL: Evaluating Sources",
          url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/index.html",
          description:
            "Comprehensive guide to source evaluation criteria, including the CRAAP test.",
        },
        {
          title: "Khan Academy: Reading Informational Texts",
          url: "https://www.khanacademy.org/test-prep/sat/sat-reading-writing/about-the-sat-writing-and-language-test/a/sat-writing-and-language-test-informational-graphics",
          description:
            "Exercises in reading and evaluating information-rich texts, including data and graphs.",
        },
      ],
    },
    activities: [
      {
        type: "sorting" as const,
        title: "Primary, Secondary or Tertiary?",
        instruction:
          "Sort each source type into the correct category. A primary source is original material. A secondary source analyses or interprets primary sources. A tertiary source compiles or summarises secondary sources.",
        columns: ["Primary Source", "Secondary Source", "Tertiary Source"],
        items: [
          { label: "A letter written by a historical figure" },
          { label: "A literary criticism essay analysing a novel" },
          { label: "An encyclopaedia entry on World War II" },
          { label: "The original clinical trial data for a new vaccine" },
          { label: "A textbook chapter summarising research on climate change" },
          { label: "A newspaper interview with an author" },
          { label: "A government census from 1901" },
          { label: "A Wikipedia article" },
          { label: "A poem written during the First World War" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Evaluating a Source",
        instruction:
          "Use the CRAAP criteria (Currency, Relevance, Authority, Accuracy, Purpose) to evaluate a source you find or one provided by your teacher. Answer each question below.",
        prompts: [
          {
            text: "Currency: When was the source published or last updated? Is this recent enough for your purposes?",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Authority: Who wrote or produced this source? What are their credentials? Who published or hosts it?",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Purpose: Why was this source created? To inform, persuade, sell, entertain? How does its purpose affect your trust in it?",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Accuracy: Does the source cite its evidence? Can you verify its key claims elsewhere?",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Overall judgement: Is this source suitable for an academic essay? Why or why not?",
            type: "lines" as const,
            lines: 2,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Synthesis Practice",
        instruction:
          "Read the following three short statements from different fictional sources on the topic of social media and wellbeing. Then write a synthesising paragraph that uses all three to support your own claim.",
        prompts: [
          {
            text: "Source A (Academic journal, 2023): 'Our study found a moderate correlation between heavy social media use and increased anxiety in adolescents aged 13-17.'\n\nSource B (Technology journalist, 2022): 'Critics of social media panic overlook evidence that online communities provide genuine support networks for isolated young people.'\n\nSource C (Youth advocacy report, 2024): 'The impact of social media is highly individualised — the same platform that harms one young person may be a lifeline for another.'\n\nWrite your synthesising paragraph below:",
            type: "box" as const,
          },
        ],
      },
      {
        type: "matching" as const,
        title: "Bias and Perspective",
        instruction:
          "Match each source description to the type of bias or limitation it most likely has.",
        left: [
          "A report funded by a fast-food company on the health effects of processed food",
          "A 2003 study on internet habits in teenagers",
          "A blog post written by someone who had a very negative experience with a product",
          "An encyclopaedia entry written collaboratively online",
          "A political party's website explaining their own policies",
          "A peer-reviewed journal article with 30 academic citations",
        ],
        right: [
          "Currency limitation: may not reflect current technology or behaviour",
          "Selection bias: one person's extreme negative experience may not be representative",
          "Promotional bias: the funder has a financial interest in the conclusions",
          "Partisan bias: designed to present the party in the most favourable light",
          "Editorial inconsistency: quality varies depending on who wrote each section",
          "Generally reliable, though still worth checking the journal's reputation and peer review process",
        ],
      },
      {
        type: "home-activity" as const,
        title: "Source Hunting",
        instruction: "Choose one research activity to practise source evaluation in the real world.",
        suggestions: [
          "Choose a topic you are currently studying in any subject. Find three different sources on it — try to include one academic, one journalistic, and one non-traditional source. Evaluate all three using the CRAAP criteria. Which would you use in an essay, and which would you reject?",
          "Next time you read something online that surprises you, apply the SIFT framework before sharing or accepting it. Write a short reflection on what you found.",
          "Find a Wikipedia article on a topic you know well. Click through to three of its cited sources. How well does the Wikipedia article represent those sources? Are there any claims that are not supported by the citations?",
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Difference Between Summary and Synthesis",
        content: "Summary tells you what each source says — one source at a time. Synthesis weaves multiple sources together in support of your own argument. In synthesis, the sources serve your thinking; you are not just reporting theirs. A simple test: if you could remove any source from a paragraph and the paragraph still makes sense without change — that source is summarised, not synthesised.",
      },
      {
        type: "true-false" as const,
        title: "Source Evaluation: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "Use false answers as the basis for a discussion about what good source evaluation actually requires.",
        statements: [
          { text: "A source published by a university is always reliable.", answer: false },
          { text: "Currency (how recently the source was published) is always the most important evaluation criterion.", answer: false },
          { text: "A peer-reviewed journal article has been evaluated by independent experts in the field before publication.", answer: true },
          { text: "A source's purpose (to inform, persuade, sell) affects how we should read and evaluate it.", answer: true },
          { text: "Using Wikipedia as a source in an academic essay is always inappropriate.", answer: false },
          { text: "A source's bias automatically makes it unusable in research writing.", answer: false },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Types of Sources",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Which of the following would be considered the most reliable source for a scientific claim?",
            options: [
              "A blog post by a science journalist summarising a study",
              "A social media post by a scientist sharing their own research",
              "The original peer-reviewed article reporting the study's methods and results",
              "A news article quoting the scientist's findings",
            ],
            answer: "The original peer-reviewed article reporting the study's methods and results",
          },
          {
            prompt: "A think-tank publishes a report arguing for lower corporate taxes. The think-tank is funded by a group of major corporations. This is an example of:",
            options: [
              "Currency limitation — the report may be out of date",
              "Funding bias — the source's conclusions may be shaped by its funders' interests",
              "Selection bias — the report only selected certain data",
              "Editorial inconsistency — different sections of the report contradict each other",
            ],
            answer: "Funding bias — the source's conclusions may be shaped by its funders' interests",
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "CRAAP Criteria",
        instruction: "Complete each sentence using the CRAAP criteria: [Currency, Relevance, Authority, Accuracy, Purpose].",
        sentences: [
          { text: "___ refers to how recently the source was published or updated, and whether this is recent enough for your research needs.", blanks: ["Currency"] },
          { text: "___ refers to whether the source relates directly to your topic and audience.", blanks: ["Relevance"] },
          { text: "___ refers to the credentials, qualifications, and institutional affiliation of the author or organisation.", blanks: ["Authority"] },
          { text: "___ refers to whether the source's claims are supported by evidence, citations, and can be verified elsewhere.", blanks: ["Accuracy"] },
          { text: "___ refers to why the source was created — to inform, persuade, sell, entertain — and how this shapes its reliability.", blanks: ["Purpose"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Evaluating an Online Source",
        instruction: "Choose a website or article you find through a web search on a topic you are researching. Apply the SIFT framework to evaluate it.",
        parentTip: "Do this exercise together, going through each step of SIFT at the computer or with a printed copy of the source.",
        prompts: [
          { text: "Stop: what is your initial instinct about this source? What do you know about it before investigating?", type: "lines" as const, lines: 2 },
          { text: "Investigate: who wrote this? Who published or hosts it? What did you find?", type: "lines" as const, lines: 3 },
          { text: "Find better coverage: are the key claims in this source confirmed elsewhere? What did you find?", type: "lines" as const, lines: 3 },
          { text: "Trace: does the source cite its evidence? Did you trace one claim to its original source? What did you find?", type: "lines" as const, lines: 3 },
          { text: "Overall: would you use this source in a formal essay? Why or why not?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "sorting" as const,
        title: "How Reliable? How Biased?",
        instruction: "Sort each source description on a spectrum from 'Generally more reliable for academic use' to 'Should be used with significant caution'.",
        columns: ["Generally more reliable for academic use", "Useful with appropriate critical reading", "Should be used with significant caution"],
        items: [
          { label: "A peer-reviewed journal article with 40+ citations from established researchers" },
          { label: "A government statistics report from the Australian Bureau of Statistics" },
          { label: "A newspaper opinion column by a well-credentialed expert" },
          { label: "A Wikipedia article with extensive footnotes and citations" },
          { label: "A press release from a pharmaceutical company announcing positive drug trial results" },
          { label: "A first-person account in a memoir by a participant in a historical event" },
          { label: "A social media post by a scientist sharing unrefereed preliminary findings" },
          { label: "A report funded by an advocacy group that reaches conclusions favourable to that group's mission" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Synthesising Multiple Perspectives",
        instruction: "Practise synthesis by writing a research paragraph that draws on three different sources to support a single claim.",
        parentTip: "Remind your student: in synthesis, they are making an argument. The sources are evidence for their argument — not the argument itself.",
        prompts: [
          { text: "Your claim (what argument are you making?):", type: "lines" as const, lines: 2 },
          { text: "Briefly describe your three sources (type, author, purpose):", type: "lines" as const, lines: 3 },
          { text: "Write your synthesised paragraph, weaving all three sources together:", type: "box" as const },
          { text: "Check: does the paragraph advance your claim, or does it just summarise each source in turn?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Research You Cannot Trust",
        content: "Here is a genuine challenge: some scientific fields have faced a 'replication crisis' — studies published in peer-reviewed journals that cannot be replicated by other researchers. This raises uncomfortable questions about how we know what we know. What do you do when your most trusted source type (peer-reviewed research) proves fallible? Write 200 words exploring this problem.",
      },
      {
        type: "matching" as const,
        title: "Citation Systems",
        instruction: "Match each citation style on the left with its typical use and field on the right.",
        left: [
          "APA (American Psychological Association)",
          "MLA (Modern Language Association)",
          "Chicago/Turabian",
          "Harvard",
          "Vancouver",
        ],
        right: [
          "Commonly used in humanities — literature, film, cultural studies",
          "Commonly used in social sciences — psychology, education, sociology",
          "Used in history, arts, and some social sciences; supports both footnotes and author-date formats",
          "Used in biomedical and clinical sciences; numbered references in text",
          "Widely used in universities, particularly in Australia and the UK; author-date format",
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing a Research Paragraph with In-Text Citations",
        instruction: "Using real or hypothetical sources, write a 150-word research paragraph that includes at least three in-text citations in either APA or Harvard style.",
        parentTip: "Focus on correct format: Author (Year) for APA/Harvard. If your student is unfamiliar with in-text citation, look up the format together before beginning.",
        prompts: [
          { text: "List your three sources (author, year, title):", type: "lines" as const, lines: 4 },
          { text: "Your research paragraph with in-text citations:", type: "box" as const },
          { text: "Check: does each citation include the correct components? Is the synthesis genuinely integrated?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Primary, Secondary, and Tertiary Sources",
        content: "Primary sources are original materials (a speech, a novel, a dataset, a historical document). Secondary sources analyse or interpret primary sources (a journal article about a novel, a history textbook chapter). Tertiary sources compile information from primary and secondary sources (encyclopaedias, databases). Research writing in English typically uses primary literary texts alongside secondary critical sources. Know which type you are using and why.",
      },
      {
        type: "open-response" as const,
        title: "The Ethics of Research",
        instruction: "Research involves ethical responsibilities — to your sources, your readers, and the truth.",
        prompts: [
          { text: "What is plagiarism? Is it always intentional? What are the different types of academic misconduct?", type: "lines" as const, lines: 4 },
          { text: "Why does attribution matter — ethically, not just procedurally? What is lost when a researcher fails to cite their sources?", type: "lines" as const, lines: 3 },
          { text: "What is the ethical responsibility of a researcher who discovers that a source they have already used contains factual errors or unacknowledged biases?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Evaluating Evidence in Arguments",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Which of the following is the strongest use of evidence in a research paragraph?",
            options: [
              "Jones (2021) says that climate change is a serious problem.",
              "Research consistently suggests that climate change impacts are already being felt.",
              "Jones (2021) found that average global temperatures increased by 1.2°C above pre-industrial levels, a finding corroborated by Smith (2022) and the IPCC's 2023 synthesis report.",
              "Climate change is serious, according to experts.",
            ],
            answer: "Jones (2021) found that average global temperatures increased by 1.2°C above pre-industrial levels, a finding corroborated by Smith (2022) and the IPCC's 2023 synthesis report.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Anecdote vs Evidence",
        instruction: "Anecdotal evidence — a single personal story or example — can be compelling but is not the same as systematic research evidence.",
        prompts: [
          { text: "What are the legitimate uses of anecdotal evidence in research writing? When does it contribute, and when does it mislead?", type: "lines" as const, lines: 4 },
          { text: "Find one example in a piece of writing you have read where anecdote is used effectively — where does it strengthen rather than substitute for evidence?", type: "lines" as const, lines: 3 },
          { text: "Rewrite this anecdote-based claim as a properly evidenced research sentence: 'My uncle smoked all his life and lived to 95, so smoking clearly does not cause early death.'", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Which Type of Evidence?",
        instruction: "Sort each type of evidence into the column that best describes its nature and appropriate use.",
        columns: ["Quantitative evidence (numerical, statistical)", "Qualitative evidence (descriptive, experiential)", "Both types relevant"],
        items: [
          { label: "Survey data showing that 67% of respondents reported anxiety" },
          { label: "An interview transcript in which a participant describes their experience of unemployment" },
          { label: "A mixed-methods study combining survey data with in-depth interviews" },
          { label: "Census data showing population changes by suburb over 20 years" },
          { label: "A case study of a single school's approach to wellbeing" },
          { label: "A meta-analysis combining results from 30 separate clinical trials" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Critical Reading of a Research Article",
        instruction: "Find the abstract of a journal article on a topic you are interested in. Read it critically using the following prompts.",
        parentTip: "JSTOR, Google Scholar, or ResearchGate are good free sources for abstracts and sometimes full articles.",
        prompts: [
          { text: "What is the article's central claim or research question?", type: "lines" as const, lines: 2 },
          { text: "What methodology did the researchers use? What are the potential limitations of this methodology?", type: "lines" as const, lines: 3 },
          { text: "What does the article claim to have found? What qualifications or limitations do the authors acknowledge?", type: "lines" as const, lines: 3 },
          { text: "Would you use this article in a research essay? For what purpose?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: When Experts Disagree",
        content: "In a public health emergency, government advisers, independent scientists, and medical practitioners often give conflicting advice. This is not because some are lying — it is because genuine expert disagreement is normal in complex fields. How should a non-expert navigate this? Write 200 words exploring how you decide who to trust when experts disagree.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Research Writing Vocabulary",
        instruction: "Complete each sentence with the correct term: [synthesis, paraphrase, direct quotation, citation, bibliography, in-text reference, plagiarism, annotation].",
        sentences: [
          { text: "Presenting another person's work as your own without attribution is called ___.", blanks: ["plagiarism"] },
          { text: "A ___ restates a source's idea in your own words, changing both vocabulary and sentence structure while retaining the meaning.", blanks: ["paraphrase"] },
          { text: "A ___ reproduces the exact words of a source, placed in quotation marks.", blanks: ["direct quotation"] },
          { text: "A ___ is the full list of sources consulted, provided at the end of a research document.", blanks: ["bibliography"] },
          { text: "An ___ is a brief descriptive and evaluative note accompanying a source in an annotated bibliography.", blanks: ["annotation"] },
          { text: "An ___ within the text of your writing acknowledges the source of an idea or quotation at the point where it is used.", blanks: ["in-text reference"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Annotated Bibliography",
        instruction: "Create an annotated bibliography for a research topic of your choice. Include three sources, each with a full citation and a 60-80 word annotation that describes the source's content, authority, and relevance to your research.",
        parentTip: "Annotated bibliographies are excellent preparation for extended essays and research assignments at senior and university level.",
        prompts: [
          { text: "Your research topic:", type: "lines" as const, lines: 1 },
          { text: "Source 1 — citation and annotation:", type: "box" as const },
          { text: "Source 2 — citation and annotation:", type: "box" as const },
          { text: "Source 3 — citation and annotation:", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Research in the Wild",
        instruction: "Choose one extended research literacy activity.",
        suggestions: [
          "Track a news story for one week across three different outlets. Note: what sources does each outlet cite? What evidence does each use? How do they handle uncertainty or disagreement? Write a 300-word media analysis.",
          "Choose a topic where public debate is ongoing and the evidence is contested (e.g. the effects of a specific dietary intervention, the impact of homework on learning). Find and evaluate five sources representing different positions. Write a 300-word balanced synthesis.",
          "Research the history of a famous scientific or historical claim that turned out to be wrong (e.g. the miasma theory of disease, the flat earth consensus in medieval Europe). Write a 300-word reflection on what this reveals about how we should hold research claims.",
        ],
      },
      // ── Consolidating (51-80) ──
      {
        type: "open-response" as const,
        title: "Synthesising Competing Perspectives",
        instruction: "On any genuinely contested topic, credible researchers and commentators reach different conclusions. Practise synthesis across disagreement.",
        prompts: [
          { text: "Choose a contested claim (e.g. 'Social media improves political participation'). Find two sources that support it and two that challenge it:", type: "lines" as const, lines: 4 },
          { text: "Write a 200-word research paragraph that synthesises all four perspectives into a nuanced claim. Your paragraph should not simply 'balance' opinions — it should make an argument that emerges from the synthesis:", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Advanced Source Evaluation",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Which of the following best describes 'publication bias' in research?",
            options: [
              "Journals only publish research from prestigious universities",
              "Researchers are biased towards publishing their own field's findings",
              "Academic journals are more likely to publish studies showing positive or significant results than those finding null or negative results",
              "Publishers choose which research to fund based on their own political preferences",
            ],
            answer: "Academic journals are more likely to publish studies showing positive or significant results than those finding null or negative results",
          },
          {
            prompt: "A meta-analysis is best described as:",
            options: [
              "A very long research article that covers multiple topics",
              "A study that gathers and statistically analyses the combined results of many individual studies on the same question",
              "An analysis of the methods used in existing research without reference to their results",
              "A review written by an expert without systematic literature searching",
            ],
            answer: "A study that gathers and statistically analyses the combined results of many individual studies on the same question",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Difference Between Correlation and Causation",
        content: "Research reports very often confuse correlation and causation. Two things that happen together (correlation) may or may not cause each other. Ice cream sales and drowning rates correlate — both rise in summer — but one does not cause the other. When reading research, always ask: does this study establish that A causes B, or only that they tend to occur together? The answer has enormous implications for how you use the evidence.",
      },
      {
        type: "open-response" as const,
        title: "Evaluating Statistical Claims",
        instruction: "Statistics can be accurate and misleading at the same time. Practise reading statistics critically.",
        prompts: [
          { text: "A headline reads: 'Eating processed meat increases cancer risk by 18%.' What does this actually mean? Is it an absolute or relative risk increase? Why does the distinction matter?", type: "box" as const },
          { text: "A report states: '90% of dentists recommend this toothpaste.' What questions would you need answered before accepting this claim?", type: "lines" as const, lines: 4 },
          { text: "Find one statistical claim in a news article or advertisement. Apply critical analysis: what does the statistic actually show? What context is missing?", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Logical Fallacies in Research Arguments",
        instruction: "Complete each example with the name of the logical fallacy: [cherry-picking, correlation/causation fallacy, appeal to authority, hasty generalisation, false balance].",
        sentences: [
          { text: "Selecting only the studies that support your conclusion while ignoring contradictory evidence is called ___.", blanks: ["cherry-picking"] },
          { text: "Assuming that because two things occur together, one must cause the other, is called a ___.", blanks: ["correlation/causation fallacy"] },
          { text: "Arguing that a claim is true because a famous or credentialed person says so — without evaluating the evidence — is called ___.", blanks: ["appeal to authority"] },
          { text: "Presenting two positions as equally valid when the evidence strongly supports one over the other is called ___.", blanks: ["false balance"] },
          { text: "Drawing a broad conclusion from an insufficient sample is called a ___.", blanks: ["hasty generalisation"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Research and Argument: A Full Paragraph",
        instruction: "Write a full research paragraph (150-200 words) on a topic you are investigating. Your paragraph should: open with a clear claim (topic sentence); synthesise evidence from at least two sources with in-text citations; analyse the significance of the evidence; and link back to your broader argument.",
        prompts: [
          { text: "Your research paragraph:", type: "box" as const },
          { text: "Self-check: does the paragraph make an argument, or does it just summarise sources?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Types of Research Evidence",
        instruction: "Sort each piece of evidence into the column that best describes its strength for a specific purpose.",
        columns: ["Strong evidence for a scientific claim", "Strong evidence for a historical claim", "Strong evidence for a social/cultural claim"],
        items: [
          { label: "A double-blind randomised controlled trial with a large sample" },
          { label: "A primary source document from the period being studied" },
          { label: "Ethnographic fieldwork involving extended observation of a community" },
          { label: "A systematic review and meta-analysis of multiple clinical studies" },
          { label: "A personal diary written by a historical figure during the period" },
          { label: "Oral history interviews with community members" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Disinformation and Media Literacy",
        instruction: "Disinformation (deliberate false information) and misinformation (accidental false information) are significant challenges in the contemporary information environment.",
        parentTip: "This topic connects directly to your student's daily digital life — draw on specific examples from their experience.",
        prompts: [
          { text: "What is the difference between disinformation and misinformation? Give an example of each.", type: "lines" as const, lines: 4 },
          { text: "Describe two specific strategies for identifying whether a claim circulating online is credible.", type: "lines" as const, lines: 4 },
          { text: "What social, economic or political conditions make populations more susceptible to disinformation? Why is this a research literacy issue, not just a technical one?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Creating a Research Plan",
        instruction: "Before beginning significant research, a research plan helps you identify the right sources, avoid confirmation bias, and stay on track.",
        prompts: [
          { text: "Name your research topic and your central research question:", type: "lines" as const, lines: 2 },
          { text: "List at least five types of sources you will seek out. Include at least one primary source, one peer-reviewed secondary source, and one source that might challenge your initial assumptions:", type: "lines" as const, lines: 5 },
          { text: "What are two potential biases or gaps you need to guard against in your research?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Source You Cannot Access",
        content: "Much of the world's most important research sits behind paywalls — accessible only to those with university subscriptions or money to pay. This creates a profound inequality in who has access to knowledge. What do you think about this? Is knowledge a public good that should be freely available, or is restricting access to research a legitimate protection of intellectual property? Write 200 words defending a position.",
      },
      {
        type: "home-activity" as const,
        title: "Research Project: Sustained Inquiry",
        instruction: "Choose one extended research project.",
        suggestions: [
          "Choose a question that genuinely interests you — something you do not know the answer to. Research it using at least five sources. Write a 400-word synthesis that includes proper citations and reflects on the quality of the evidence you found.",
          "Find three conflicting expert claims on the same topic. Trace each claim to its primary source. Write a 350-word analysis of why the experts disagree — is it methodology, values, evidence quality, or something else?",
          "Research the history of a widely accepted belief that was later overturned by evidence (e.g. the ulcer-stress link disproved by Barry Marshall, or the discovery that the Earth was much older than previously thought). Write a 400-word reflection on what this reveals about how research actually progresses.",
        ],
      },
      // ── Extending (81-100) ──
      {
        type: "open-response" as const,
        title: "Extended Research Essay",
        instruction: "Write a complete research essay (500-600 words) on a topic you have researched over the course of this worksheet. Your essay should: include a clear thesis; synthesise evidence from at least four sources; use in-text citations; and include a reference list.",
        parentTip: "This is a substantial task — allow 90 minutes and treat it as a genuine research essay, not a worksheet response.",
        prompts: [
          { text: "Your research essay:", type: "box" as const },
          { text: "Your reference list:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Evaluating AI-Generated Content as a Source",
        instruction: "AI tools are increasingly used to generate information — but they present unique challenges as research sources.",
        prompts: [
          { text: "What are the specific risks of using AI-generated content as a research source (e.g., ChatGPT, Gemini, Copilot)?", type: "box" as const },
          { text: "Under what circumstances, if any, might AI-generated content be a legitimate tool in a research process — and what precautions would be necessary?", type: "lines" as const, lines: 4 },
          { text: "How do the standard source evaluation frameworks (CRAAP, SIFT) apply — or fail to apply — to AI-generated content?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Research Ethics: A Case Study",
        instruction: "Research ethics governs not just citation practices but the whole research enterprise — including how participants are treated, how findings are reported, and who benefits from research.",
        prompts: [
          { text: "Describe one historical example of unethical research conduct (e.g. the Tuskegee syphilis study, research conducted without consent). What ethical principles were violated?", type: "box" as const },
          { text: "What safeguards now exist to prevent similar unethical conduct? Why are these safeguards important even when the research goal seems beneficial?", type: "lines" as const, lines: 4 },
          { text: "How should findings from unethically conducted research be handled? Should they be used if they are the only source of certain data?", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Building Your Personal Research Toolkit",
        instruction: "Reflect on your development as a researcher across this worksheet.",
        prompts: [
          { text: "What is the single most important thing you have learned about evaluating sources? Give a specific example.", type: "box" as const },
          { text: "What research habits will you carry forward into future study? Name three specific practices.", type: "lines" as const, lines: 4 },
          { text: "Where do you still feel uncertain or underprepared? What would help you develop in that area?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Research Literacy: Deep Practice",
        instruction: "Choose one independent project.",
        suggestions: [
          "Design a 'fact-checking guide' for a younger student: a step-by-step process for evaluating an online claim. Make it practical, specific, and genuinely useful. Test it by applying it to three real claims.",
          "Research a current scientific controversy (e.g. a disputed nutrition study, a contested archaeological find, a contested interpretation in climate science). Write a 500-word analysis of why scientists disagree and what the evidence actually shows.",
          "Read the methods section of a published research study. Write a 300-word critical analysis: what choices did the researchers make? What are the limitations of their methodology? How confident should we be in their findings?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: What Do You Know, and How Do You Know It?",
        content: "Make a list of ten things you believe to be true. For each, trace the source of your belief: is it personal experience? Something you were taught? Something you read? Something you heard from someone you trust? Now evaluate: how confident should you actually be in each belief? What would it take to change your mind? Write 200 words about the relationship between evidence and belief.",
      },
      // ── Additional activities to reach 100 ──
      {
        type: "true-false" as const,
        title: "Source Evaluation: Advanced",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "A meta-analysis provides stronger evidence than a single study on the same question.", answer: true },
          { text: "Open access academic articles are less reliable than those behind paywalls.", answer: false },
          { text: "The SIFT framework's 'Stop' step means refusing to engage with any source that seems unreliable.", answer: false },
          { text: "Confirmation bias describes the tendency to seek out and accept information that confirms existing beliefs.", answer: true },
          { text: "An annotated bibliography describes and evaluates each source, not just lists them.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Evaluating a Real Claim",
        instruction: "Choose a claim you recently encountered that surprised or concerned you — in news, social media, or conversation. Apply rigorous source evaluation.",
        parentTip: "Doing this exercise together with a real live claim is more valuable than working from a hypothetical.",
        prompts: [
          { text: "State the claim and where you encountered it:", type: "lines" as const, lines: 2 },
          { text: "Apply SIFT: what did you find when you investigated, sought better coverage, and traced the claim?", type: "box" as const },
          { text: "Your overall evaluation: is this claim reliable? What level of confidence is justified?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Research Design Concepts",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "A 'double-blind' study means:",
            options: [
              "Neither researchers nor participants know who is in the treatment and control groups",
              "The study is conducted twice to verify results",
              "The data is hidden from the public until peer review",
              "Two independent research teams conduct the same study",
            ],
            answer: "Neither researchers nor participants know who is in the treatment and control groups",
          },
          {
            prompt: "Which of the following best describes 'peer review'?",
            options: [
              "Students reviewing each other's essays",
              "The process by which academic research is evaluated by independent experts in the same field before publication",
              "A system by which a journal's editorial board approves articles for publication",
              "A process by which published research is reviewed by the public after publication",
            ],
            answer: "The process by which academic research is evaluated by independent experts in the same field before publication",
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Reference List Formats",
        instruction: "Complete each reference in the correct format. Use Harvard (Author, Year, Title, Publisher) for books and APA for journal articles (Author, Year, Title, Journal, Volume, Pages).",
        sentences: [
          { text: "A book by Toni Morrison, published in 1987 by Knopf, titled 'Beloved': Morrison, T. ___, Beloved, ___.", blanks: ["1987,", "Knopf."] },
          { text: "A journal article: author Jones, M., year 2022, title 'Media Literacy in Schools', journal Education Today, volume 14, pages 45-62: Jones, M. (2022). Media Literacy in Schools. ___, 14, 45-62.", blanks: ["Education Today"] },
          { text: "A website accessed 15 March 2025: the publisher is the Australian Bureau of Statistics: Australian Bureau of Statistics. (2025). [Title]. Retrieved from [URL]. Access date: ___.", blanks: ["15 March 2025"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Information Hierarchy",
        instruction: "Different types of information have different levels of authority and appropriate uses. Develop your own 'information hierarchy' for academic research.",
        prompts: [
          { text: "Rank these source types from most to least authoritative for academic research, and explain your reasoning: peer-reviewed journal, newspaper editorial, government statistics report, Wikipedia article, documentary film, expert blog, social media post by an expert.", type: "box" as const },
          { text: "Are there cases where a 'lower authority' source would be more appropriate than a 'higher' one? Give an example.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Using Sources Appropriately",
        instruction: "Sort each source use into 'Appropriate use' or 'Problematic use'.",
        columns: ["Appropriate use", "Problematic use"],
        items: [
          { label: "Using a government statistics report to support a claim about population trends" },
          { label: "Citing a blog post as evidence for a scientific claim without checking if it is peer-reviewed" },
          { label: "Using a memoir to illustrate a personal experience relevant to a social argument" },
          { label: "Using a single study to make a sweeping generalisation about all people" },
          { label: "Using Wikipedia to get an initial orientation to a topic before finding primary sources" },
          { label: "Citing Wikipedia as evidence in a formal academic essay" },
          { label: "Quoting an expert's view to support a claim, while acknowledging competing expert views" },
          { label: "Selecting only the sources that support your pre-existing position" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing a Research Introduction",
        instruction: "A strong research essay opens by establishing the question, contextualising it, and signalling the argument. Practise writing a research essay introduction.",
        prompts: [
          { text: "Your research question:", type: "lines" as const, lines: 1 },
          { text: "Your introduction (100-130 words): establish the context, explain why the question matters, and state your argument:", type: "box" as const },
          { text: "Does your introduction signal the kind of evidence you will use? Revise if not.", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Ethics of Citing Sources",
        instruction: "Citation is not merely procedural — it is an ethical practice that acknowledges intellectual debt and enables the reader to verify claims.",
        prompts: [
          { text: "Why is it important to cite a source even when you are paraphrasing (putting it in your own words) rather than quoting directly?", type: "lines" as const, lines: 3 },
          { text: "What is the difference between acceptable paraphrase and unacceptable paraphrase (which is a form of plagiarism)?", type: "lines" as const, lines: 4 },
          { text: "Paraphrase the following sentence acceptably: 'The relationship between screen time and wellbeing in adolescents is complex and cannot be reduced to a simple causal narrative.' (Smith, 2023, p. 47)", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Navigating Conflicting Expert Opinion",
        instruction: "When reputable experts disagree, how do you decide what to believe and write?",
        prompts: [
          { text: "Describe a topic where you have encountered genuinely conflicting expert opinion. What are the competing positions?", type: "lines" as const, lines: 3 },
          { text: "What specific criteria would you use to evaluate which position is better supported by evidence?", type: "box" as const },
          { text: "Write a research sentence that acknowledges the disagreement and takes a qualified position:", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Synthesis Structures",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "Which sentence demonstrates the best synthesis of multiple sources?",
            options: [
              "Source A says X. Source B says Y. Source C says Z.",
              "There is a range of opinion on this topic.",
              "While Jones (2021) and Smith (2022) both found moderate positive effects, Thompson (2023) challenges this consensus, arguing that methodological weaknesses in both studies limit the generalisability of their findings.",
              "According to experts, the situation is complicated.",
            ],
            answer: "While Jones (2021) and Smith (2022) both found moderate positive effects, Thompson (2023) challenges this consensus, arguing that methodological weaknesses in both studies limit the generalisability of their findings.",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Research Writing: A Complete Paragraph",
        instruction: "Write a complete research paragraph (150-200 words) synthesising three sources on a topic you have been researching. Include in-text citations and make a genuine argumentative claim.",
        prompts: [
          { text: "Your paragraph:", type: "box" as const },
          { text: "Identify: your claim sentence, your three pieces of evidence with citations, your analysis of the significance, your linking sentence.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Reading Research Critically",
        instruction: "Not all peer-reviewed research is equally reliable. Learn to read research critically — not just trusting the peer-reviewed label but evaluating the study itself.",
        prompts: [
          { text: "What questions should you ask about the sample size and composition of a study before trusting its conclusions?", type: "lines" as const, lines: 3 },
          { text: "What is a 'conflict of interest' in research, and why does it matter even when the research is technically sound?", type: "lines" as const, lines: 3 },
          { text: "Find a study that makes a strong claim and identify one specific methodological limitation. How does this limitation affect how confidently you should accept the claim?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Research Literacy: Sustained Practice",
        instruction: "Choose one sustained project.",
        suggestions: [
          "Choose a health claim you have encountered (in advertising, social media, or news). Trace it to its primary source. Write a 400-word critical evaluation of the evidence behind the claim — is it as strong as the reporting suggests?",
          "Research the practice of 'science communication' — how scientists translate research for public audiences. What are the ethical responsibilities of a science communicator? Write a 400-word analytical response.",
          "Design a source evaluation exercise for a younger student: choose a topic, find five sources of varying quality and bias, and write an answer key explaining how each should be evaluated. This is a powerful test of your own understanding.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Reflection: Research Literacy",
        instruction: "Reflect on your development as a critical researcher across this worksheet.",
        prompts: [
          { text: "What is the most important change in how you evaluate information as a result of this worksheet?", type: "lines" as const, lines: 3 },
          { text: "What research habit are you most committed to developing? How will you practise it?", type: "lines" as const, lines: 3 },
          { text: "Write a 100-word definition of 'information literacy' that you could explain to someone who had never thought about it before.", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Research That Changed Everything",
        content: "Think of a piece of research or information that genuinely changed how you understood the world — that shifted a belief you held, or revealed something you had not considered. Write 200 words about it: what was the finding? Where did you encounter it? Why did it matter to you? What does your response to it reveal about how you engage with evidence?",
      },
      {
        type: "true-false" as const,
        title: "Source Evaluation: Common Misconceptions",
        instruction: "Decide whether each statement about evaluating sources is true or false.",
        parentTip: "Discuss why each misconception is common — understanding why they persist helps students recognise them in others.",
        statements: [
          { text: "A source that has been published in a book is always more reliable than a website.", answer: false },
          { text: "Peer-reviewed academic articles are checked by independent experts before publication.", answer: true },
          { text: "A website's professional appearance is a reliable indicator of its credibility.", answer: false },
          { text: "Confirmation bias means we are more likely to accept sources that confirm our existing beliefs.", answer: true },
          { text: "Primary sources are always more useful than secondary sources.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Research Vocabulary: Complete the Definition",
        instruction: "Fill in the missing word to complete each research and source evaluation definition.",
        parentTip: "These terms are used across all academic disciplines — mastering them prepares students for tertiary study.",
        sentences: [
          { text: "A ___ is a piece of writing or statement that expresses an opinion or makes an argument, as opposed to a statement of fact.", blanks: ["claim"] },
          { text: "___ means combining information from multiple sources to create a unified, coherent argument or understanding.", blanks: ["Synthesising"] },
          { text: "A ___ summary accurately captures the main argument of a source without including your own opinion.", blanks: ["neutral"] },
          { text: "An ___ source is one that is cited often by other scholars and widely accepted within its field.", blanks: ["authoritative"] },
          { text: "___ is the act of presenting someone else's ideas as your own, without attribution.", blanks: ["Plagiarism"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identifying Research Strategies",
        instruction: "Choose the best answer for each question about effective research practice.",
        questions: [
          {
            prompt: "When beginning research on an unfamiliar topic, the most effective first step is usually to:",
            options: [
              "Find the most recent academic paper on the topic and read it first",
              "Search Google and use the first three results",
              "Read a reliable overview (e.g. encyclopaedia entry, textbook chapter) to orient yourself",
              "Ask an expert what they think without reading anything first",
            ],
            answer: "Read a reliable overview (e.g. encyclopaedia entry, textbook chapter) to orient yourself",
          },
          {
            prompt: "The 'currency' of a source refers to:",
            options: [
              "Whether the source costs money to access",
              "How recently the source was published or updated",
              "How many citations the source has received",
              "Whether the source is from a financial publication",
            ],
            answer: "How recently the source was published or updated",
          },
          {
            prompt: "When synthesising multiple sources in an essay, you should:",
            options: [
              "Quote extensively from each source in order and then summarise",
              "Weave together ideas from multiple sources around your own central argument",
              "Choose the best source and ignore the others",
              "Present each source separately before drawing a conclusion",
            ],
            answer: "Weave together ideas from multiple sources around your own central argument",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Evaluating a Website",
        instruction: "Apply the CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) to a website.",
        parentTip: "Choose a website related to a topic your student is currently studying — this works well integrated with any other subject.",
        prompts: [
          { text: "Choose any website related to a topic you are currently studying. Apply the CRAAP test: assess it on Currency, Relevance, Authority, Accuracy, and Purpose. Record your findings for each criterion.", type: "box" as const },
          { text: "Overall assessment: how credible and useful is this website for your research purposes? Would you use it? Why or why not?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Difference Between a Quote and a Paraphrase",
        content: "A quote reproduces the original author's exact words (always in quotation marks with a citation). A paraphrase restates the idea in your own words (still needs a citation). Both require attribution. A good researcher knows when to quote (when the exact wording matters) and when to paraphrase (when the idea is more important than the specific phrasing).",
      },
      {
        type: "open-response" as const,
        title: "Paraphrasing Practice",
        instruction: "Accurate paraphrasing is a core academic skill — it shows you have understood an idea well enough to restate it in your own words.",
        prompts: [
          { text: "Find a complex sentence or short paragraph from an academic or non-fiction source. Copy it here, then write an accurate paraphrase in your own words.", type: "box" as const },
          { text: "Now check your paraphrase: have you changed both the words AND the sentence structure? Does it still accurately represent the original meaning? Revise if necessary.", type: "lines" as const, lines: 4 },
          { text: "When would you choose to paraphrase rather than quote directly? Give two specific situations.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Better Research Practice",
        instruction: "Circle the response that represents better research or source evaluation practice.",
        questions: [
          {
            prompt: "When you find a statistic online that supports your argument, you should:",
            options: [
              "Use it immediately — you found what you needed",
              "Trace it back to its original source to verify accuracy and context",
            ],
          },
          {
            prompt: "When two credible sources disagree, you should:",
            options: [
              "Choose the one that supports your argument",
              "Acknowledge the disagreement and explain how you are navigating it in your work",
            ],
          },
          {
            prompt: "When using Wikipedia in research, the best approach is to:",
            options: [
              "Cite it directly as a reliable secondary source",
              "Use it to identify key concepts and find primary and secondary sources from its references",
            ],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Building a Credible Argument from Multiple Sources",
        instruction: "A well-researched argument draws on multiple credible sources, integrates their ideas, and uses them to support your own original position.",
        parentTip: "Walk through this exercise step by step with your student — it mirrors the process they will use in extended research essays.",
        prompts: [
          { text: "Choose a debatable question related to any subject you are studying. Find three credible sources with different perspectives on this question. Briefly summarise each source's position.", type: "box" as const },
          { text: "Now write a paragraph (150–200 words) that synthesises all three sources around your own position on the question. Use in-text citations for each source you reference.", type: "box" as const },
          { text: "Reflect: how did working with multiple sources change or complicate your argument? Was it harder or easier to write after doing the research?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Source Type",
        instruction: "Sort each example into the correct source type category.",
        parentTip: "Understanding the difference between source types helps students make appropriate choices for different research tasks.",
        columns: ["Primary Source", "Secondary Source", "Tertiary Source"],
        items: [
          { label: "A diary written during World War I" },
          { label: "A textbook chapter about World War I" },
          { label: "An encyclopaedia entry about World War I" },
          { label: "A scientific research paper reporting original experiments" },
          { label: "A news article reporting on a new scientific study" },
          { label: "A database index of scientific articles" },
          { label: "A novel written by a Holocaust survivor" },
          { label: "A literary critic's analysis of that novel" },
          { label: "A library catalogue entry for that novel" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Detecting Bias in Sources",
        instruction: "All sources have a perspective — the key skill is identifying it and accounting for it in your research.",
        prompts: [
          { text: "Find two articles covering the same news story from different publications with known different political orientations. What language, framing, or evidence choices reveal each source's bias?", type: "box" as const },
          { text: "Does recognising a source's bias mean you cannot use it? Explain: when is a biased source still useful to a researcher?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Citation and Referencing: Fill the Gap",
        instruction: "Complete each statement about academic citation practice.",
        sentences: [
          { text: "An ___ citation appears within the body of the text, immediately after the information you are referencing.", blanks: ["in-text"] },
          { text: "A ___ list at the end of your essay records full publication details for every source you have cited.", blanks: ["reference"] },
          { text: "APA, MLA, and Chicago are all examples of academic ___ styles.", blanks: ["citation"] },
          { text: "Even when you ___ a source rather than quoting it directly, you must still provide a citation.", blanks: ["paraphrase"] },
          { text: "A ___ is an indirect reference — citing a source that you found quoted in another source.", blanks: ["secondary citation"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Research Ethics",
        instruction: "Research involves ethical responsibilities: to your sources, your audience, and the truth.",
        parentTip: "Ethical research habits formed now will be foundational to your student's academic and professional life.",
        prompts: [
          { text: "What does intellectual honesty mean to you as a researcher? Give three specific examples of behaviours that demonstrate it.", type: "lines" as const, lines: 5 },
          { text: "Describe a situation (real or hypothetical) where a researcher might be tempted to misrepresent their sources. What are the consequences of such dishonesty?", type: "box" as const },
          { text: "Write a short personal commitment statement: how will you practise ethical research in your academic work?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Research: Independent Inquiry Project",
        instruction: "Choose one extended research activity to practise your skills.",
        suggestions: [
          "Choose a question that genuinely interests you in any field. Conduct a mini research project: find at least five credible sources, evaluate each using the CRAAP test, take notes, and write a 400-word synthesis essay that makes an original argument supported by your research. Include a reference list.",
          "Find a recent example of 'fake news' or misinformation that was widely shared. Research how it was created and spread. Write a 400-word analysis: how was it constructed to seem credible? What source evaluation skills would help a reader identify it as unreliable?",
          "Choose one major current event. Track it across at least four different news sources (from different countries or perspectives if possible) over one week. Write a 400-word analysis of how different sources have framed the event differently, and what this reveals about the role of perspective in journalism.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Research and Synthesising: Final Reflection",
        instruction: "Consolidate your learning about research, source evaluation, and synthesis.",
        parentTip: "This final task makes an excellent discussion prompt for a parent-student conversation about the nature of knowledge and truth.",
        prompts: [
          { text: "What is the difference between information and knowledge? Use your experience of this worksheet to illustrate your answer.", type: "box" as const },
          { text: "What are the three most important things a good researcher does that a poor researcher does not? Explain each with a specific example.", type: "lines" as const, lines: 6 },
          { text: "How has your relationship with evidence and sources changed through your work on this worksheet? What will you do differently in future research?", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Limits of Research",
        content: "Research can tell us facts, trends, and correlations — but it cannot always tell us what to value, what is beautiful, or what is right. Think of a question that matters deeply to you that research alone cannot answer. What kind of thinking, experience, or conversation would you need to engage with it? What does this reveal about the relationship between evidence and wisdom?",
      },
      {
        type: "open-response" as const,
        title: "Evaluating Online Sources",
        instruction: "The internet has made vast amounts of information available — but not all of it is reliable. Evaluating online sources is a critical literacy skill.",
        parentTip: "Work through this exercise together, modelling the source evaluation process by thinking aloud.",
        prompts: [
          { text: "Find an online source on any topic of current debate. Evaluate it using these questions: Who wrote it? What is their expertise? When was it published? Is it hosted by a credible organisation? Does it cite its own sources? Does it acknowledge counterevidence or opposing views?", type: "box" as const },
          { text: "Based on your evaluation: how would you rate the credibility of this source? How would you use it (or not use it) in a research project?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Understanding Research Bias",
        instruction: "Choose the best answer for each question about bias in research and sources.",
        questions: [
          {
            prompt: "Funding bias in research refers to:",
            options: [
              "The tendency of researchers to support underfunded organisations",
              "The tendency for research findings to align with the interests of the organisation that funded the research",
              "The bias introduced when researchers do not have enough funding to conduct their study",
              "The preference for publishing research that cost the most to conduct",
            ],
            answer: "The tendency for research findings to align with the interests of the organisation that funded the research",
          },
          {
            prompt: "Publication bias in academic research refers to:",
            options: [
              "The tendency of academic journals to publish research that confirms existing theories or shows significant results, while ignoring null or negative results",
              "The preference for publishing research in expensive journals",
              "The tendency of publishers to favour researchers from prestigious universities",
              "The bias toward publishing research in English rather than other languages",
            ],
            answer: "The tendency of academic journals to publish research that confirms existing theories or shows significant results, while ignoring null or negative results",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Note-Taking for Research",
        instruction: "Good research notes are selective, organised, and clearly attributed — they make writing much easier.",
        parentTip: "Model your own note-taking process if you have one — seeing an adult researcher at work is valuable.",
        prompts: [
          { text: "Read a short article or section of a book related to any topic you are currently studying. Take research notes: record the source details, the main argument, key supporting evidence, any relevant quotations (with page numbers), and your own commentary on each point.", type: "box" as const },
          { text: "Review your notes: are they sufficiently selective (not just copying out the source)? Are they clearly attributed? Are they organised in a way that will help you write? What would you change about your note-taking process?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Research Question",
        content: "A good research question is specific, open-ended, and genuinely debatable. 'What is climate change?' is not a research question — it is a definition question. 'To what extent are individual consumer choices effective in addressing climate change compared to systemic policy change?' is a research question. Start with the question, not the answer — let the research determine where you end up.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Academic Integrity: Complete the Statement",
        instruction: "Fill each gap to complete these academic integrity principles.",
        sentences: [
          { text: "When you quote directly from a source, the quoted words must appear in ___ marks.", blanks: ["quotation"] },
          { text: "A ___ citation must be provided whenever you use, quote, or paraphrase someone else's ideas.", blanks: ["source"] },
          { text: "Using AI-generated content and submitting it as your own work is a form of ___.", blanks: ["academic dishonesty"] },
          { text: "A ___ list records full publication information for every source cited in your work.", blanks: ["reference"] },
          { text: "Even if you change the words, you must still ___ the original idea to its source.", blanks: ["attribute"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Synthesising Sources: Practice",
        instruction: "Synthesis means combining ideas from multiple sources into a coherent argument — not just listing what each source says.",
        prompts: [
          { text: "Choose any topic you have researched. Write a short synthesis paragraph (150 words) that draws on at least three sources. The paragraph should present YOUR argument, supported by the sources — not a summary of what each source says.", type: "box" as const },
          { text: "Review your paragraph: is it genuinely synthetic (combining sources around your own argument) or is it a summary of sources in sequence? Revise one sentence to make it more synthetic.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Better Research Practice",
        instruction: "Circle the better research practice in each pair.",
        questions: [
          {
            prompt: "When evaluating a website, which is more important?",
            options: [
              "Whether the website has an attractive, professional design",
              "Who wrote the content, what their credentials are, and whether they cite their sources",
            ],
          },
          {
            prompt: "When writing a synthesis paragraph, which approach is better?",
            options: [
              "'Smith argues X. Jones argues Y. Brown argues Z. Therefore, X, Y, and Z are all important.'",
              "'The evidence on this topic consistently suggests X, with Smith, Jones, and Brown all demonstrating this through their analysis of Y and Z respectively.'",
            ],
          },
          {
            prompt: "When you find conflicting evidence from two credible sources, you should:",
            options: [
              "Choose the one that supports your argument and ignore the other",
              "Acknowledge the conflict in your writing and explain how you are navigating it",
            ],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Annotated Bibliography",
        instruction: "An annotated bibliography is a list of sources with a short summary and evaluation of each — it demonstrates that you have engaged critically with your sources.",
        parentTip: "This is a skill used extensively in university study — building it now gives your student a significant advantage.",
        prompts: [
          { text: "For any research topic, find three credible sources. For each, write an annotation of 80–100 words: brief summary of the source's argument, evaluation of its credibility and limitations, and explanation of how it will be useful to your research.", type: "box" as const },
          { text: "Reflect: how did the process of annotation change your relationship with each source? Did any source become more or less useful as you thought critically about it?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Sources: Final Synthesis and Reflection",
        instruction: "Bring together your learning about evaluating sources and synthesising research.",
        parentTip: "This synthesis task is an excellent concluding activity for a research-based unit in any subject.",
        prompts: [
          { text: "Write a 200-word personal reflection: what is the most important thing you have learned about research and source evaluation? How has your approach to finding and using information changed?", type: "box" as const },
          { text: "Create a short 'Research Checklist' of five questions you will ask of every source before using it in your own work.", type: "lines" as const, lines: 6 },
          { text: "What is one specific area of research skill you want to develop further? How will you practise it?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Sources: Independent Research Project",
        instruction: "Choose one extended home research activity.",
        suggestions: [
          "Choose a current scientific or social question that interests you. Find five sources of different types (e.g. a peer-reviewed article, a newspaper article, a government report, a documentary, and a blog post). Evaluate each source using the CRAAP test and write a 500-word synthesis essay that makes an original argument supported by at least three of your five sources.",
          "Investigate a piece of misinformation that has been widely shared online. Using fact-checking websites (e.g. RMIT ABC Fact Check, Snopes, Reuters Fact Check) and primary sources, trace how the misinformation was created and spread. Write a 400-word analysis of what source evaluation skills would have helped people identify it as unreliable.",
          "Interview a researcher, academic, journalist, or professional whose work involves evaluating and synthesising information (a doctor, scientist, historian, lawyer, or journalist). Ask them about their source evaluation process, how they handle conflicting evidence, and what they wish young researchers understood. Write a 400-word reflection incorporating their insights.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Most Important Question",
        content: "A good researcher is not someone who finds answers — they are someone who asks better questions. Think about the most important unanswered question you have encountered in any of your research or reading. Why does it remain unanswered? Is it a lack of evidence, a conflict of values, or the limits of current knowledge? What kind of person — or what kind of research — might eventually answer it?",
      },
      {
        type: "open-response" as const,
        title: "Research and Digital Literacy",
        instruction: "Digital literacy — the ability to navigate, evaluate, and create digital information — is inseparable from research literacy.",
        parentTip: "Explore Australian digital literacy frameworks (e.g. ACARA) to connect this activity to curriculum requirements.",
        prompts: [
          { text: "What digital literacy skills do you consider yourself strongest in? Where are your gaps? (Consider: evaluating websites, understanding algorithms, recognising data visualisation, spotting AI-generated content, navigating academic databases.)", type: "box" as const },
          { text: "How has the rise of AI-generated content changed the challenge of evaluating online sources? What new questions do you need to ask of sources that did not exist five years ago?", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Research: Understanding Data",
        instruction: "Research often involves interpreting data — graphs, statistics, and quantitative findings. Choose the best answer for each question.",
        questions: [
          {
            prompt: "When a study reports a 'statistically significant' finding, it means:",
            options: [
              "The finding is large enough to be practically important",
              "The finding is unlikely to have occurred by chance alone, given the sample size",
              "The finding will definitely be replicated in future studies",
              "The finding was reported by a significant number of researchers",
            ],
            answer: "The finding is unlikely to have occurred by chance alone, given the sample size",
          },
          {
            prompt: "Correlation means:",
            options: [
              "One thing causes another thing",
              "Two variables tend to change together, but this does not necessarily mean one causes the other",
              "Two variables are unrelated",
              "A statistical test has been conducted successfully",
            ],
            answer: "Two variables tend to change together, but this does not necessarily mean one causes the other",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Synthesising Research: Extending Your Practice",
        instruction: "The synthesis of research into coherent, well-evidenced argument is the central skill of academic writing.",
        prompts: [
          { text: "Find three sources on a research question you genuinely want to investigate. Write a 200-word synthesis paragraph that does not simply summarise each source but weaves their ideas together around your own developing argument.", type: "box" as const },
          { text: "What was the hardest aspect of this synthesis task? What made it different from simply summarising the sources?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Source Evaluation: Final Practice",
        instruction: "Apply everything you have learned about source evaluation to a real research task.",
        parentTip: "Connect this to a research project in any subject your student is currently working on.",
        prompts: [
          { text: "Choose a research question related to any current topic. Find four sources of different types. For each: record the full citation, apply the CRAAP test criteria, and write a 50-word evaluation explaining whether and how you would use it in a research essay.", type: "box" as const },
          { text: "Looking across your four sources: are they diverse enough (different perspectives, types, dates)? What gaps remain in your research? What additional type of source would most strengthen your argument?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Research: Final Concepts Review",
        instruction: "A final review of key research and source evaluation concepts.",
        statements: [
          { text: "Wikipedia is never a useful starting point for research.", answer: false },
          { text: "Paraphrasing a source without attribution is still a form of plagiarism.", answer: true },
          { text: "Publication bias means academic research always presents the full picture.", answer: false },
          { text: "A peer-reviewed source has been evaluated by independent experts in the field before publication.", answer: true },
          { text: "If two credible sources disagree, you should simply choose the one that supports your argument.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Research: Personal Learning Plan",
        instruction: "Strong research skills develop over time through deliberate practice.",
        parentTip: "This personal learning plan connects naturally to any extended research project in Year 11 and beyond.",
        prompts: [
          { text: "Write a 'Research Learning Plan': identify three specific research skills you want to develop this year, describe one concrete activity for each, and set a timeline for review.", type: "box" as const },
          { text: "How will your improved research skills benefit you beyond English — in other subjects, in future study, or in your life?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Research: Lifelong Skills Project",
        instruction: "Choose one extended home activity that connects research skills to lifelong learning.",
        suggestions: [
          "Design and conduct a mini research project on any question you genuinely want to answer — something you have always wondered about or a problem you want to understand better. Document your process: the question, your search strategy, your source evaluation, your synthesis, and your conclusion. Write up your findings in 500 words and a reference list.",
          "Interview someone who uses research skills professionally (a doctor, journalist, scientist, historian, social worker, or business analyst). Ask them about: how they find reliable information, how they handle conflicting sources, how they communicate findings to non-specialists, and what research mistakes they have made and learned from. Write a 400-word reflection incorporating their insights.",
          "Track a developing news story over two weeks across multiple sources (at least three different publications or platforms). Keep a log of how the story changes, how different sources frame it, and what sources disappear from the conversation. Write a 500-word analysis of what your tracking reveals about how journalism and research intersect.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Unanswered Question You Are Living",
        content: "Every research project begins with a question. But the most powerful questions are not just academic — they are questions you are actually living. Think about the central unanswered question of your own life right now: something about who you are, what you value, or what you want. How might research — careful, honest, open-minded inquiry — help you engage with it? And what other kinds of knowing (experience, conversation, imagination) might research alone never reach?",
      },
      {
        type: "open-response" as const,
        title: "Research Skills: Preparing for Senior Study",
        instruction: "Strong research skills will be foundational to your success in senior and tertiary study.",
        parentTip: "Connect this activity to specific research tasks your student will face in Year 11 subjects.",
        prompts: [
          { text: "What are the key research tasks you will need to undertake in Year 11 across all your subjects? For each, identify the types of sources you will need and the source evaluation skills most relevant.", type: "box" as const },
          { text: "What specific research skill do you most want to strengthen before Year 11? Write a concrete plan for developing it.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Research: Advanced Concepts",
        instruction: "A final check on advanced research and source evaluation concepts.",
        statements: [
          { text: "The CRAAP test stands for Currency, Relevance, Authority, Accuracy, and Purpose.", answer: true },
          { text: "A peer-reviewed article has been reviewed by the article's author before publication.", answer: false },
          { text: "Synthesis means combining information from multiple sources around your own argument.", answer: true },
          { text: "Publication bias means that research with negative or null results is less likely to be published.", answer: true },
          { text: "You only need to cite a source if you use a direct quotation from it.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Research: Your Final Reflection",
        instruction: "A final reflection on your development as a researcher.",
        parentTip: "Keep this reflection as a baseline — revisit it at the end of Year 11 to measure growth.",
        prompts: [
          { text: "Write 200 words: what are you now able to do as a researcher that you could not do before this worksheet? What specific skills have you developed, and how will they benefit you in future study?", type: "box" as const },
          { text: "What is the one research habit you are most committed to developing? How will you practise it?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Research: Cross-Subject Application",
        instruction: "Research skills are universal — they apply across every subject and every field of human inquiry.",
        prompts: [
          { text: "Choose two subjects other than English where you currently need research skills. For each, identify: what kinds of sources are most valuable, what evaluation criteria matter most, and how synthesis is expected to work in that discipline.", type: "box" as const },
          { text: "What do the research processes of these two subjects share with literary research in English? What is different?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "matching" as const,
        title: "Research: Match the Concept to Its Application",
        instruction: "Match each research concept to the real-world research situation it most applies to.",
        left: ["Currency", "Authority", "Purpose", "Accuracy", "Relevance"],
        right: [
          "Checking whether sources on a fast-moving scientific topic are from the past two years",
          "Confirming that a medical source is written by a qualified health professional",
          "Recognising that an advocacy group's website presents information to support a predetermined position",
          "Cross-checking a statistic against the original study to confirm it has been reported accurately",
          "Determining whether a source on Victorian literature actually addresses your specific research question",
        ],
      },
      {
        type: "home-activity" as const,
        title: "Research: Preparing a Research Portfolio",
        instruction: "Choose one final activity to build your research portfolio.",
        suggestions: [
          "Create a 'Research Skills Portfolio': compile evidence of your research skills development from this worksheet. Include your best source evaluation, your strongest synthesis paragraph, your annotated bibliography, and a 300-word reflection on your growth as a researcher.",
          "Design and conduct a structured research interview: identify a practitioner in any field (doctor, journalist, scientist, historian, teacher, business analyst) who uses research skills professionally. Prepare 8–10 interview questions about their research process, conduct the interview, and write a 400-word reflection on what you learned.",
          "Complete a full research project from question to synthesis essay on any topic that genuinely interests you. Include: the research question, an annotated bibliography of at least six sources, a 500-word synthesis essay with in-text citations, a full reference list, and a 200-word process reflection.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Future of Research",
        content: "AI is transforming what research looks like — it can synthesise information at extraordinary speed, but it cannot evaluate sources, ask the questions that matter, or distinguish between what is factually accurate and what is merely plausible. Think about what this means for you as a researcher and a citizen. In a world where information is abundant but wisdom is scarce, what human research skills are more important than ever? And what do you most want to be able to do that no algorithm can replace?",
      },
      {
        type: "true-false" as const,
        title: "Research Ethics: True or False?",
        instruction: "Mark each statement True or False based on what you have learned about ethical and rigorous research practice.",
        parentTip: "Use any True answers as discussion prompts — ask your student to explain why the statement is accurate and what it means in practice.",
        statements: [
          { text: "It is acceptable to omit sources that contradict your argument, as long as your own sources are credible.", answer: false },
          { text: "Paraphrasing an author's idea without citing them still counts as plagiarism.", answer: true },
          { text: "A source published more recently is always more reliable than an older source.", answer: false },
          { text: "Synthesising means blending multiple sources into your own coherent argument, not just summarising each one in turn.", answer: true },
          { text: "Peer-reviewed journal articles have gone through a process of expert evaluation before publication.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Research Charter",
        instruction: "Based on everything you have learned about evaluating and synthesising sources, write a personal research charter — a set of principles that will guide how you conduct research.",
        parentTip: "This reflective activity helps students internalise research ethics and good practice. Encourage your student to be specific rather than vague — 'I will always check the date of a source' is more useful than 'I will be careful'.",
        prompts: [
          { text: "Write three specific commitments you will keep every time you research a topic.", type: "lines" as const, lines: 3 },
          { text: "Describe one research habit you want to break and one you want to build.", type: "lines" as const, lines: 3 },
          { text: "In one sentence, explain why rigorous, ethical research matters beyond the classroom.", type: "lines" as const, lines: 2 },
        ],
      },
    ],
  },

  // ── WS 7: Formal Discussion & Evidence-Based Presentations ────────────────────
  {
    slug: "oral-language-formal-discussion",
    title: "Formal Discussion & Evidence-Based Presentations",
    strand: "Literacy",
    description:
      "Develop skills in formal oral communication — structuring arguments verbally, using evidence in discussion, and delivering a prepared presentation with clarity and credibility.",
    learningGuide: {
      concept:
        "Oral English at this level is not about talking confidently — it is about constructing an argument verbally, listening actively, and adapting to a live audience and conversation.",
      activation:
        "Ask: think of someone you find genuinely convincing when they speak. What is it about them that makes you trust their argument? Is it the content, the delivery, or both?",
      check:
        "In a discussion, can your student make a claim, support it with specific evidence, and respond substantively to a counterpoint — rather than just restating their original position?",
    },
    lesson: {
      title: "Speaking with Evidence",
      objective:
        "Structure a formal oral argument, use evidence effectively in discussion, and adapt language for a formal register.",
      materials: [
        "A topic for structured discussion (choose one together, or use a text you are studying)",
        "Index cards for notes (2-3 key points each, not a full script)",
        "A timer (optional, for timed speaking practice)",
      ],
      intro: {
        title: "What Makes Discussion Formal?",
        script:
          "There is a difference between a conversation and a formal discussion — not in terms of friendliness, but in terms of how arguments are structured. In a formal discussion or seminar, you are expected to make a claim, support it with evidence, and engage with what others have said. You cannot just say 'I disagree' — you need to say 'I see what you mean, but I would argue that...' followed by something specific. Today we are going to practise this. I will take a position on our topic, you take a position, and we will have a structured discussion. Afterwards, we will reflect on what worked and what we would do differently.",
        action:
          "Together, choose a genuinely debatable question — perhaps from a text you are studying, or a current issue. Each person takes three minutes to prepare three evidence-based points. Use index cards, not full notes.",
      },
      mainActivity: {
        title: "Structured Discussion",
        script:
          "Here are some sentence starters that are useful in formal discussion: 'I would argue that...' — to make a claim. 'The evidence for this is...' — to support with specifics. 'I take your point, however...' — to acknowledge and rebut. 'Building on what you said...' — to extend an idea. 'One complication here is...' — to introduce nuance. These are not formulas — they are patterns that help you stay structured when you are thinking on your feet. Let us begin. We will talk for five minutes, then pause and reflect on the quality of the argument, not just the content.",
        action:
          "Hold a 5-minute structured discussion. Afterward, review: Did each speaker use evidence? Did anyone acknowledge the other's point before responding? Was there any genuine development of ideas, or just competing assertions?",
      },
      wrapUp: {
        title: "Preparing a Short Presentation",
        script:
          "A presentation is a structured oral argument with a planned beginning, middle and end. The difference from an essay is that your audience cannot re-read your sentences — so clarity, repetition of key ideas, and signposting ('I will argue three things: first... second... finally...') are more important. Let us plan a 3-minute presentation on our discussion topic. What is your central claim? What are your two strongest pieces of evidence?",
        action:
          "Student plans a 3-minute presentation on their position. They should have: an opening statement, two evidence points with specific examples, and a closing statement. Practice the opening aloud together.",
      },
      parentTip:
        "This lesson works best if you genuinely engage with the discussion rather than playing a neutral facilitator. Take a real position. Push back with evidence. Ask questions you genuinely want answered. Your willingness to be a genuine interlocutor models the kind of intellectual engagement the lesson is aiming for.",
      extension:
        "Record your 3-minute presentation and watch it back. Write a self-evaluation: What worked? What would you change? Focus on argument structure and use of evidence, not just delivery.",
      resources: [
        {
          title: "Khan Academy: Presentations and Public Speaking",
          url: "https://www.khanacademy.org/test-prep/sat/sat-reading-writing/about-the-sat-writing-and-language-test/v/introduction-to-sat-writing-and-language",
          description:
            "Guidance on communicating ideas clearly and structuring spoken arguments.",
        },
        {
          title: "CrashCourse Study Skills: Presentations",
          url: "https://www.youtube.com/watch?v=V8eLdbKXGzk",
          description:
            "Practical advice on structuring and delivering effective presentations.",
        },
        {
          title: "ReadWriteThink: Socratic Seminar",
          url: "https://www.readwritethink.org/classroom-resources/lesson-plans/socratic-seminar",
          description:
            "The Socratic Seminar model — a structured discussion format widely used in senior English.",
        },
      ],
    },
    activities: [
      {
        type: "open-response" as const,
        title: "From Informal to Formal Register",
        instruction:
          "Rewrite each informal spoken statement in a formal academic register suitable for a seminar discussion or oral presentation.",
        prompts: [
          {
            text: "Informal: 'I reckon this character is basically just selfish and doesn't care about anyone.' Formal version:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Informal: 'The book is kind of boring because nothing really happens.' Formal version:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Informal: 'I don't think that's right — you're missing the point.' Formal version that acknowledges and then challenges:",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Informal: 'The ending was confusing and I didn't get it.' Formal version that frames this as an analytical observation:",
            type: "lines" as const,
            lines: 2,
          },
        ],
      },
      {
        type: "matching" as const,
        title: "Discussion Moves",
        instruction:
          "Match each discussion move on the left to the sentence frame that best demonstrates it.",
        left: [
          "Making a claim",
          "Providing evidence",
          "Acknowledging a counterpoint",
          "Rebutting a counterpoint",
          "Building on another's idea",
          "Introducing nuance",
          "Summarising the discussion",
        ],
        right: [
          "'Expanding on what was just said, I would add that...'",
          "'What we seem to have established is..., though there remains the question of...'",
          "'I understand the argument that..., however the evidence suggests otherwise because...'",
          "'The specific example that supports this is...'",
          "'That is a valid point, and I think it is important to acknowledge...'",
          "'I would argue that..., and this is significant because...'",
          "'One complication worth considering is that this may not hold true in all cases, particularly when...'",
        ],
      },
      {
        type: "open-response" as const,
        title: "Planning Your Presentation",
        instruction:
          "Plan a 3-minute oral presentation on a topic or text you are studying. Use the structure below.",
        prompts: [
          {
            text: "Your topic or question and your central claim (one sentence):",
            type: "lines" as const,
            lines: 2,
          },
          {
            text: "Opening statement — how will you begin? (Write it out fully — you will need to know this confidently):",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Point 1: Your first argument and the specific evidence you will use:",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Point 2: Your second argument and the specific evidence you will use:",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Closing statement — what do you want the audience to take away?",
            type: "lines" as const,
            lines: 2,
          },
        ],
      },
      {
        type: "sorting" as const,
        title: "Effective Presentation Choices",
        instruction:
          "Sort each presentation decision into 'Effective' or 'Ineffective' for a formal oral presentation.",
        columns: ["Effective", "Ineffective"],
        items: [
          { label: "Reading your script word for word from a page" },
          { label: "Using brief notes on index cards and speaking to the audience" },
          { label: "Beginning with 'Um, so today I'm going to talk about...'" },
          { label: "Beginning with a specific claim or a thought-provoking question" },
          { label: "Using a specific quote or example to support each main point" },
          { label: "Saying 'I think' repeatedly without providing evidence" },
          { label: "Signposting: 'My first point is... My second point is...'" },
          { label: "Ending with 'That's basically it, I guess'" },
          { label: "Closing with a clear summary of your argument and its significance" },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Oral Practice Outside the Lesson",
        instruction: "Choose one activity to practise oral argument skills this week.",
        suggestions: [
          "Listen to a podcast or radio program where people discuss a controversial topic (suggestions: The Philosophers Zone, Background Briefing on ABC RN, or any debate program). Write down three discussion moves you heard — when did a speaker acknowledge a counterpoint? When did they use specific evidence? When did they summarise?",
          "Deliver your 3-minute presentation to another family member, a friend, or just to a camera. Watch it back. Focus on: Did you use evidence specifically? Did you look up from your notes? Was your opening strong?",
          "Choose a topic you feel strongly about and argue the opposite position for 2 minutes. This is called 'steelmanning' an argument. Reflect: did engaging seriously with the other side change your thinking at all?",
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: What Makes Discussion Formal?",
        content: "Formal discussion is not about being stiff or distant — it is about how you structure your contribution. In formal register: you make claims rather than just expressing feelings; you support claims with specific evidence; you acknowledge what others have said before responding; and you use language that signals logical structure ('this suggests', 'the implication is', 'what this overlooks'). Practice makes this feel natural rather than artificial.",
      },
      {
        type: "true-false" as const,
        title: "Oral English: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "Discuss any false answers — they represent common misconceptions about oral performance.",
        statements: [
          { text: "Reading your script word for word is an effective strategy for formal presentations.", answer: false },
          { text: "Using brief notes on cards rather than a full script typically produces better oral presentations.", answer: true },
          { text: "Saying 'I think' repeatedly in a formal discussion strengthens your position.", answer: false },
          { text: "Acknowledging a counterpoint before refuting it makes your argument stronger, not weaker.", answer: true },
          { text: "Signposting ('My first point is...') is unnecessary and makes a presentation feel mechanical.", answer: false },
          { text: "Genuine listening — not just waiting for your turn to speak — is a skill required in formal discussion.", answer: true },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Discussion Move Vocabulary",
        instruction: "Complete each sentence with the appropriate discussion move term: [claim, evidence, concession, rebuttal, elaboration, signposting, synthesis].",
        sentences: [
          { text: "A ___ is a statement asserting a position: 'I would argue that...'", blanks: ["claim"] },
          { text: "___ supports a claim with specific data, examples, or quotations.", blanks: ["evidence"] },
          { text: "A ___ acknowledges the validity of an opposing point before responding to it.", blanks: ["concession"] },
          { text: "A ___ responds to a counterargument with counter-evidence or reasoning.", blanks: ["rebuttal"] },
          { text: "___ tells the audience what is coming: 'I will make three points: first...second...finally...'", blanks: ["signposting"] },
          { text: "___ draws together the key points of a discussion into a coherent summary.", blanks: ["synthesis"] },
        ],
      },
      {
        type: "sorting" as const,
        title: "Formal vs Informal Register",
        instruction: "Sort each expression into 'Formal register (suitable for seminar or presentation)' or 'Informal register (suitable for casual conversation)'.",
        columns: ["Formal register", "Informal register"],
        items: [
          { label: "'I reckon that's not quite right.'" },
          { label: "'I would argue that this position is not fully supported by the available evidence.'" },
          { label: "'That's a good point, but I think you're missing something.'" },
          { label: "'That is a valid observation; however, it overlooks a key consideration.'" },
          { label: "'Anyway, my main point is...'", },
          { label: "'To summarise my central argument...'" },
          { label: "'She's basically saying that money doesn't matter.'", },
          { label: "'The speaker's position implies that economic considerations are secondary to social equity.'" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Practising Formal Register",
        instruction: "Rewrite each informal spoken statement in a formal academic register suitable for a seminar discussion or oral presentation.",
        parentTip: "Read the formal versions aloud after writing them — hearing the register difference helps more than seeing it.",
        prompts: [
          { text: "Informal: 'I don't agree with that at all.' Formal version:", type: "lines" as const, lines: 2 },
          { text: "Informal: 'There's loads of evidence that shows this is true.' Formal version:", type: "lines" as const, lines: 2 },
          { text: "Informal: 'But what about all the people who get hurt by this?' Formal version:", type: "lines" as const, lines: 2 },
          { text: "Informal: 'To be honest, I'm not really sure what the answer is.' Formal version:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Oral Argument Structure",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "In a formal oral presentation, which of the following is the most effective opening?",
            options: [
              "'Um, so today I'm going to talk about renewable energy.'",
              "'Renewable energy is important for many reasons.'",
              "'By 2050, Australia will face an energy crisis — unless we make different choices now. Today I will argue that the most effective response is not a single solution but a systems change.'",
              "'I have three main points to cover. First, I will discuss wind power. Second, solar power. Third, hydroelectric power.'",
            ],
            answer: "'By 2050, Australia will face an energy crisis — unless we make different choices now. Today I will argue that the most effective response is not a single solution but a systems change.'",
          },
          {
            prompt: "What is 'active listening' in a formal discussion context?",
            options: [
              "Taking notes while the other person speaks",
              "Nodding and making eye contact",
              "Genuinely engaging with what has been said — not just waiting for your turn, but tracking the argument and preparing to respond to its substance",
              "Asking clarifying questions rather than making statements",
            ],
            answer: "Genuinely engaging with what has been said — not just waiting for your turn, but tracking the argument and preparing to respond to its substance",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Structured Discussion: Preparation",
        instruction: "Prepare for a structured discussion on the following topic: 'Formal education systems are better suited to preparing students for work than for life.' Choose a position and prepare three evidence-based arguments.",
        parentTip: "Conduct the structured discussion together after preparation. Take opposing positions if possible.",
        prompts: [
          { text: "Your position (agree or disagree):", type: "lines" as const, lines: 1 },
          { text: "Argument 1 with specific evidence:", type: "lines" as const, lines: 3 },
          { text: "Argument 2 with specific evidence:", type: "lines" as const, lines: 3 },
          { text: "Argument 3 with specific evidence:", type: "lines" as const, lines: 3 },
          { text: "One likely counterargument you anticipate and how you will respond:", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Conversation You Are Afraid to Start",
        content: "Think of a topic you find genuinely difficult to discuss — something where you have a view but are uncertain, or where the conversation could become uncomfortable. Write 150 words about why this topic is hard to discuss formally: is it the evidence? The emotional charge? The risk of disagreeing with people you respect? Then write the first sentence you would say to open that formal discussion.",
      },
      {
        type: "open-response" as const,
        title: "Responding to Counterarguments",
        instruction: "The ability to respond substantively to a counterargument — rather than just restating your position — is the hallmark of strong oral discussion.",
        prompts: [
          { text: "Choose a position you have argued in this worksheet. Write the strongest possible counterargument to it:", type: "lines" as const, lines: 3 },
          { text: "Write a formal discussion response that: acknowledges the counterargument genuinely; concedes any valid element of it; and then rebuts it with specific evidence:", type: "box" as const },
          { text: "Does your rebuttal strengthen your original position, or does it suggest you need to qualify your original claim?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Self-Evaluation: A Discussion Performance",
        instruction: "Record yourself or participate in a structured discussion on any topic. Immediately after, complete this self-evaluation.",
        parentTip: "Even if recording equipment is not available, your student can evaluate their performance from memory immediately after the discussion.",
        prompts: [
          { text: "Did you make clear claims supported by specific evidence? Give one example of where you did this well:", type: "lines" as const, lines: 3 },
          { text: "Did you acknowledge and respond to the other person's points substantively, or did you talk past them?", type: "lines" as const, lines: 3 },
          { text: "What specific aspect of formal discussion would you most like to improve? What is your plan?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Signposting Language",
        instruction: "Complete each sentence with appropriate signposting language.",
        sentences: [
          { text: "Today I will ___ three key arguments relating to the impact of social media on political discourse.", blanks: ["outline"] },
          { text: "My ___ point concerns the role of algorithms in amplifying extreme content.", blanks: ["first"] },
          { text: "___ on from this, the second issue is the collapse of shared information environments.", blanks: ["Moving"] },
          { text: "___ , I want to address the counterargument that social media also enables grassroots political organising.", blanks: ["However"] },
          { text: "To ___, the evidence suggests that the harms of social media on democratic discourse significantly outweigh the benefits.", blanks: ["conclude"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Preparing a 5-Minute Presentation",
        instruction: "Plan and deliver a 5-minute presentation on a topic of your choice. The presentation should include: a clear central argument; three supporting points with specific evidence; one acknowledged counterargument; and a strong conclusion.",
        parentTip: "Your student should deliver this presentation to you. After delivery, discuss: what worked? Where did the argument feel strongest or weakest?",
        prompts: [
          { text: "Topic and central argument:", type: "lines" as const, lines: 2 },
          { text: "Point 1 and evidence:", type: "lines" as const, lines: 3 },
          { text: "Point 2 and evidence:", type: "lines" as const, lines: 3 },
          { text: "Point 3 and evidence:", type: "lines" as const, lines: 3 },
          { text: "Counterargument and response:", type: "lines" as const, lines: 3 },
          { text: "Closing statement:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Evidence in Oral Communication",
        content: "In an essay, you can embed a long quotation or cite a complex statistic on the page. In oral communication, you have seconds to present evidence before your audience loses track of the argument. Keep evidence specific but brief: 'According to the IPCC's 2023 report, temperatures have risen 1.2 degrees above pre-industrial levels' is better oral evidence than reading a long passage. Practice citing your evidence concisely and clearly.",
      },
      {
        type: "sorting" as const,
        title: "Effective Presentation Behaviours",
        instruction: "Sort each behaviour into 'Effective for a formal oral presentation' or 'Undermines credibility or clarity'.",
        columns: ["Effective", "Undermines credibility or clarity"],
        items: [
          { label: "Using index cards with key points rather than reading a full script" },
          { label: "Beginning with 'So, um, today I'm going to kind of talk about...'" },
          { label: "Making and maintaining eye contact with the audience" },
          { label: "Saying 'I think' repeatedly without supporting claims with evidence" },
          { label: "Using signposting to guide the audience through the structure" },
          { label: "Ending with 'That's basically everything I wanted to say, I guess'" },
          { label: "Pausing deliberately after a key point to let it land" },
          { label: "Speaking too quickly due to nervousness, compressing key points" },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Socratic Seminar: Preparation",
        instruction: "A Socratic Seminar is a structured discussion in which participants use evidence from a shared text to explore ideas collaboratively.",
        parentTip: "This activity works best if both you and your student read the same text and come prepared with observations and questions.",
        prompts: [
          { text: "Choose a text (an article, essay, or extract) that raises a genuinely debatable question. Name it and describe the central question it raises:", type: "lines" as const, lines: 3 },
          { text: "Write three questions you could bring to a Socratic Seminar about this text — not 'what does it say?' questions but 'what does this mean?' or 'do we agree?' questions:", type: "box" as const },
          { text: "Write three pieces of evidence from the text you could use to support your position in the discussion:", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Listening to Analyse",
        instruction: "Listen to a podcast episode, radio discussion, or recorded debate on a topic you find interesting.",
        prompts: [
          { text: "Note three specific discussion moves you heard: one claim, one evidence use, one concession or rebuttal:", type: "box" as const },
          { text: "Who was most persuasive, and why? Was it the strength of their argument or the quality of their delivery?", type: "lines" as const, lines: 3 },
          { text: "Was there a moment where a speaker said something you disagreed with? How would you have responded formally?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Discussion You Wish You Could Have",
        content: "Who would you most like to have a formal discussion with — living or historical? What topic would you want to debate? What question would you open with? Write 200 words imagining the first five minutes of that conversation: what would they say? How would you respond? What would you learn?",
      },
      {
        type: "home-activity" as const,
        title: "Oral Communication: Extended Practice",
        instruction: "Choose one extended oral activity.",
        suggestions: [
          "Participate in or observe a formal debate — in person, via video, or on a debate recording. Write a 300-word analysis of the rhetorical and discussion strategies used. Who was most effective, and why?",
          "Record a 5-minute podcast-style discussion with another person on a topic you both care about. Aim for formal discussion register. Listen back and write a 200-word self-evaluation: what worked? What would you do differently?",
          "Research the Socratic Seminar format. Design and lead a 15-minute Socratic Seminar with your household on a text you have read together. Reflect: what made the discussion productive? What got in the way?",
        ],
      },
      // ── Consolidating (51-80) ──
      {
        type: "open-response" as const,
        title: "Debate Preparation: Full Case",
        instruction: "Prepare a complete debate case for one side of the following topic: 'This house believes that social media should be regulated by government to protect democratic discourse.'",
        parentTip: "Assign your student a side rather than letting them choose — this builds the ability to argue positions they may not personally hold.",
        prompts: [
          { text: "Your side (for or against) and your team's case in one sentence:", type: "lines" as const, lines: 2 },
          { text: "First speaker arguments (2-3 arguments with evidence):", type: "box" as const },
          { text: "Anticipated rebuttals from the opposing side and your responses:", type: "box" as const },
          { text: "Closing statement:", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Formal Discussion Skills",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "In a formal discussion, what is the most effective way to respond when someone makes a point you disagree with?",
            options: [
              "Interrupt them to correct their error immediately",
              "Wait for them to finish, acknowledge any valid element of their point, then offer counter-evidence with a pivot ('I take your point, however...')",
              "Repeat your original position more forcefully",
              "Avoid direct disagreement to preserve the conversation's harmony",
            ],
            answer: "Wait for them to finish, acknowledge any valid element of their point, then offer counter-evidence with a pivot ('I take your point, however...')",
          },
          {
            prompt: "Which of the following is an example of 'extending' another participant's contribution in a discussion?",
            options: [
              "'I disagree with everything you said.'",
              "'That is a good point. Building on what you said about X, I would add that Y also demonstrates this, because...'",
              "'What you are saying is basically what I said earlier.'",
              "'Can you repeat that? I did not follow your argument.'",
            ],
            answer: "'That is a good point. Building on what you said about X, I would add that Y also demonstrates this, because...'",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Quality Over Quantity in Discussion",
        content: "In a formal discussion, it is better to make one substantive contribution — a claim supported by evidence, or a concession followed by a rebuttal — than to make many superficial ones. Frequent speaking that adds no new evidence or argument does not demonstrate skill. One well-structured contribution that genuinely advances the discussion is worth more than five repetitions of your initial position.",
      },
      {
        type: "open-response" as const,
        title: "Adapting for Audience",
        instruction: "The same argument may need to be adapted for different audiences. Practise adapting an oral argument.",
        prompts: [
          { text: "Choose a position you feel strongly about. Write a 2-minute speech version for a peer your own age:", type: "box" as const },
          { text: "Now adapt the same argument for a different audience: a government policymaker. What changes?", type: "box" as const },
          { text: "Reflect: what specifically changed between the two versions? What does this reveal about the relationship between audience, purpose and argument?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Building a Case from Evidence",
        instruction: "In a formal oral argument, you cannot simply assert — you must build. Each claim must be supported by evidence, and each piece of evidence must be explained.",
        prompts: [
          { text: "Choose one claim you want to argue. Identify three separate pieces of evidence that support it:", type: "lines" as const, lines: 4 },
          { text: "For each piece of evidence, write one sentence explaining why it supports the claim:", type: "box" as const },
          { text: "Now write a 100-word spoken argument that uses all three pieces of evidence. Read it aloud.", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Opening and Closing",
        instruction: "The opening and closing of a presentation are disproportionately important — audiences remember beginnings and endings most vividly.",
        prompts: [
          { text: "Write three different opening sentences for a presentation on a topic of your choice. Each should use a different strategy: a striking claim, a question, or a brief anecdote.", type: "box" as const },
          { text: "Write three different closing sentences for the same presentation. Each should end on a different note: a call to action, a reflection, or a return to the opening image.", type: "box" as const },
          { text: "Which opening and which closing are most effective, and why?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Discussion Reflection: A Real Conversation",
        instruction: "Think back to a real conversation — a family discussion, a classroom debate, a disagreement with a friend — where you were trying to persuade someone of something.",
        parentTip: "This metacognitive task builds the connection between formal analysis and real communicative experience.",
        prompts: [
          { text: "Describe the conversation briefly: what were you arguing? Who were you talking to?", type: "lines" as const, lines: 3 },
          { text: "What discussion moves did you use — intentionally or instinctively? What worked?", type: "lines" as const, lines: 3 },
          { text: "What would you do differently now, applying what you have learned about formal discussion?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "When to Use Which Discussion Move",
        instruction: "Match each situation to the most appropriate discussion move.",
        columns: ["Make a new claim", "Acknowledge and extend", "Concede and rebut", "Request clarification", "Synthesise"],
        items: [
          { label: "The discussion has generated several related ideas that haven't yet been connected" },
          { label: "Another speaker has made a point that is partially valid but misses something important" },
          { label: "Another speaker has said something genuinely interesting that suggests a further implication" },
          { label: "You want to introduce a dimension of the topic that hasn't been addressed yet" },
          { label: "You are not sure you understood the evidence the other speaker cited" },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Can Argument Change Minds?",
        content: "Research in psychology suggests that people rarely change their deepest beliefs through argument — they are more likely to double down when challenged. Yet formal discussion assumes that argument can change minds. What do you think? What conditions make genuine persuasion possible? Have you ever changed your mind because of an argument? Write 200 words exploring this.",
      },
      {
        type: "home-activity" as const,
        title: "Oral Communication: Advanced Practice",
        instruction: "Choose one extended project.",
        suggestions: [
          "Listen to a TED Talk and analyse it as an oral argument: identify the central claim, the evidence used, the rhetorical devices, and the discussion moves. Write a 300-word analytical response and deliver a 1-minute spoken summary of your analysis.",
          "Participate in an online discussion forum on a topic you care about. Apply formal discussion moves deliberately. Write a 200-word reflection on the experience: was formal register appropriate? How did others respond?",
          "Design and facilitate a 20-minute structured group discussion (with family members or friends) on a topic from your studies. Afterwards, write a 300-word reflection on what made it work, and what you would change.",
        ],
      },
      // ── Extending (81-100) ──
      {
        type: "open-response" as const,
        title: "Panel Discussion: Sustained Oral Argument",
        instruction: "Prepare for and participate in a 15-minute panel discussion with your parent/guardian on a topic from your studies. Each participant should prepare three arguments, three pieces of supporting evidence, and two counterarguments.",
        parentTip: "Take this seriously — treat it as an assessment. Prepare genuinely and hold your student to a high standard of formal register and evidence use.",
        prompts: [
          { text: "Your preparation notes (arguments and evidence):", type: "box" as const },
          { text: "Post-discussion reflection: where was your argument strongest? Where did it feel weakest?", type: "lines" as const, lines: 4 },
          { text: "What did you learn from listening to the other participant's arguments?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Formal Oral Assessment: Prepared Speech",
        instruction: "Deliver a 5-minute prepared speech on the following topic: 'The ability to argue clearly and respectfully is the most important skill for a functioning democracy.' Record and watch it back.",
        parentTip: "This is a formal oral assessment task. Your student should be assessed on: argument structure, use of evidence, formal register, and ability to engage an audience.",
        prompts: [
          { text: "Your speech notes (not a full script):", type: "box" as const },
          { text: "Post-delivery self-evaluation: what worked? What would you change?", type: "lines" as const, lines: 4 },
          { text: "Parent/guardian evaluation: what was the strongest moment? What specific improvement would you suggest?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Developing Your Oral Voice",
        instruction: "Reflect on your development as a formal oral communicator over the course of this worksheet.",
        prompts: [
          { text: "What is the most significant thing you have learned about formal discussion and presentation? Give a specific example from your practice.", type: "box" as const },
          { text: "What is your greatest remaining challenge as an oral communicator? What specific practice would address it?", type: "lines" as const, lines: 4 },
          { text: "Describe the oral communicator you want to become. What habits of listening and argument do you want to develop?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Oral Communication: Sustained Project",
        instruction: "Choose one sustained project.",
        suggestions: [
          "Prepare and deliver a 10-minute formal presentation on a topic from any area of study. After delivery, write a 400-word reflective evaluation assessing your own argument, evidence, and delivery.",
          "Listen to 10 episodes of a discussion podcast or radio program over the coming month. Keep a listening journal, noting one discussion move from each episode. Write a 400-word synthesis of what you have observed about effective oral argumentation.",
          "Research the history of formal debate as an educational practice. Write a 400-word essay arguing for or against the value of competitive debate in developing critical thinking skills.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Finding Your Oral Voice",
        content: "Think about the issues in the world that most concern you. Where do you want your voice to be heard? In what contexts — political, social, educational, creative — do you want to be able to speak persuasively and with authority? Write 200 words about the relationship between your development as an oral communicator and the kind of person you want to be in the world.",
      },
      {
        type: "true-false" as const,
        title: "Oral Communication: Advanced",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Formal discussion skills are only useful in academic or professional contexts.", answer: false },
          { text: "A well-structured oral argument should follow a similar logic to a well-structured written essay.", answer: true },
          { text: "Speaking slowly and pausing deliberately is a sign of weakness in formal discussion.", answer: false },
          { text: "Active listening requires engaging with what is actually said, not just waiting for your turn.", answer: true },
          { text: "In a formal discussion, it is better to make many brief contributions than a few substantive ones.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Discussion Move Analysis",
        instruction: "Analyse a recording or transcript of a formal discussion (a parliamentary debate, a podcast, a roundtable).",
        parentTip: "The ABC's Q+A program or any recorded panel discussion works well for this exercise.",
        prompts: [
          { text: "Name the discussion and describe its context:", type: "lines" as const, lines: 2 },
          { text: "Identify five specific discussion moves made by different participants. For each: quote or describe the move and name what type it is (claim, concession, rebuttal, extension, synthesis, signposting):", type: "box" as const },
          { text: "Which participant was most effective? What specific discussion skills made them stand out?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Oral Argument: Advanced",
        instruction: "Select the best answer.",
        questions: [
          {
            prompt: "What is the key difference between a formal debate and a Socratic seminar?",
            options: [
              "Debates have rules; seminars do not",
              "In a debate, participants compete to win; in a Socratic seminar, participants collaborate to deepen understanding",
              "Debates use evidence; seminars rely on opinion",
              "Seminars are only for literature; debates can address any topic",
            ],
            answer: "In a debate, participants compete to win; in a Socratic seminar, participants collaborate to deepen understanding",
          },
          {
            prompt: "What makes 'steelmanning' different from simply acknowledging a counterargument?",
            options: [
              "Steelmanning means you only use the weakest version of the opposing argument",
              "Steelmanning means presenting the opposing argument in its strongest possible form before responding to it",
              "Steelmanning requires you to ultimately agree with the opposing position",
              "Steelmanning is only appropriate in written argument, not oral discussion",
            ],
            answer: "Steelmanning means presenting the opposing argument in its strongest possible form before responding to it",
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Advanced Discussion Vocabulary",
        instruction: "Complete each sentence with the correct term: [steelman, strawman, ad hominem, red herring, false dichotomy, appeal to authority].",
        sentences: [
          { text: "Presenting the opposing argument in its strongest, most compelling form before responding to it is called ___.", blanks: ["steelmanning"] },
          { text: "Presenting a simplified, weakened version of an opponent's argument to make it easier to refute is called a ___.", blanks: ["strawman"] },
          { text: "Attacking the person making an argument rather than the argument itself is called an ___ attack.", blanks: ["ad hominem"] },
          { text: "Introducing an irrelevant point to distract from the main argument is called a ___.", blanks: ["red herring"] },
          { text: "Presenting a situation as having only two possible options when more exist is called a ___.", blanks: ["false dichotomy"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Identifying Fallacies in Real Discussions",
        instruction: "Listen to or read a real discussion or debate. Identify at least two logical fallacies used by any participant.",
        prompts: [
          { text: "Name the discussion and its context:", type: "lines" as const, lines: 2 },
          { text: "Fallacy 1: name the fallacy, quote the example, explain why it is fallacious:", type: "lines" as const, lines: 4 },
          { text: "Fallacy 2: name the fallacy, quote the example, explain why it is fallacious:", type: "lines" as const, lines: 4 },
          { text: "Did the use of fallacies make the argument more or less persuasive in the moment? Why?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Formal Discussion Scenarios",
        instruction: "Sort each scenario into 'Suitable for formal discussion register' or 'Requires adapting register for the context'.",
        columns: ["Formal register appropriate", "Register adaptation required"],
        items: [
          { label: "A Year 10 seminar on a literary text" },
          { label: "A casual conversation with friends about a film" },
          { label: "A job interview" },
          { label: "A community meeting about a local planning issue" },
          { label: "A university admissions interview" },
          { label: "Explaining your position in a family discussion about a decision" },
          { label: "A public speech at a school assembly" },
          { label: "An online forum discussion about a political issue" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Designing a Structured Discussion",
        instruction: "Design a 20-minute structured discussion for two or more participants on a topic from your studies.",
        parentTip: "Then conduct the discussion you have designed. Use your own design to evaluate its effectiveness.",
        prompts: [
          { text: "Your discussion topic and the central question:", type: "lines" as const, lines: 2 },
          { text: "Rules and structure (how long each person speaks, what happens when someone disagrees, how the discussion will conclude):", type: "box" as const },
          { text: "Three opening questions to get the discussion started:", type: "lines" as const, lines: 4 },
          { text: "After conducting the discussion: what worked? What would you change?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Preparing for a Formal Interview",
        instruction: "Formal interview situations require many of the same skills as structured discussion: clear claims, specific evidence, formal register, and the ability to respond to unexpected questions.",
        prompts: [
          { text: "Prepare for this question: 'Tell me about a text you have studied this year and what you found most interesting about it.' Write your planned response (2-3 minutes):", type: "box" as const },
          { text: "Prepare for a follow-up: 'What is one thing you disagreed with or found difficult about that text?' Write your planned response:", type: "lines" as const, lines: 4 },
          { text: "Deliver both responses aloud. Reflect: where did your spoken language differ from your written plan? Was the difference helpful?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Argument: Building from Evidence",
        instruction: "Practise building a complete oral argument from evidence up — starting with data and reasoning to a conclusion.",
        prompts: [
          { text: "Choose a topic. List three pieces of specific evidence (statistics, quotations, examples):", type: "lines" as const, lines: 4 },
          { text: "Write a spoken argument (150-200 words) that builds from this evidence to a conclusion. Use signposting to guide the listener:", type: "box" as const },
          { text: "Deliver the argument aloud. Was the evidence integrated smoothly, or did it feel like a list?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Discussion Ethics",
        instruction: "Mark each statement as true or false.",
        statements: [
          { text: "Interrupting someone in a formal discussion is acceptable if you have an important point to make.", answer: false },
          { text: "Genuinely acknowledging a good point made by the opposing side strengthens your own credibility.", answer: true },
          { text: "In formal discussion, the goal is always to 'win' the argument.", answer: false },
          { text: "Changing your position during a discussion based on new evidence is a sign of intellectual flexibility, not weakness.", answer: true },
          { text: "The best oral communicators think carefully about their audience and adapt their argument accordingly.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Final Reflection",
        instruction: "Reflect on your development as a formal oral communicator across this worksheet.",
        prompts: [
          { text: "What is the most important thing you have learned about formal oral communication?", type: "lines" as const, lines: 3 },
          { text: "Which oral communication skill has improved most over the course of this worksheet? Give a specific example.", type: "lines" as const, lines: 3 },
          { text: "What is your specific goal for the next formal discussion or presentation? What will you do differently?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Oral Communication: Ongoing Practice",
        instruction: "Choose one ongoing practice activity.",
        suggestions: [
          "Commit to one formal discussion per week for the next month on a topic from your studies. After each one, write a 100-word reflection on one thing that worked and one thing to improve.",
          "Research the history of debate as an educational tradition. Write a 400-word essay on whether competitive debating develops genuine critical thinking or merely the skill of arguing any position convincingly.",
          "Keep an 'oral communication journal' for two weeks: note every time you encounter formal spoken argument (in person, on radio, on television, online). Record one specific observation about the quality of the argumentation in each case.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Assessment Practice: Socratic Seminar",
        instruction: "Prepare for and participate in a 20-minute Socratic Seminar with your parent/guardian on a text you have both read.",
        parentTip: "Both participants should prepare questions and evidence in advance. The goal is collaborative inquiry, not debate.",
        prompts: [
          { text: "Your preparation: three open-ended questions to bring to the seminar:", type: "lines" as const, lines: 4 },
          { text: "Your preparation: three pieces of evidence from the text you might use:", type: "lines" as const, lines: 4 },
          { text: "Post-seminar reflection: what new understanding emerged from the discussion that you could not have reached alone?", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Conversation That Changed Your Mind",
        content: "Have you ever been in a discussion where someone genuinely changed your thinking? Not just made you feel defensive, but actually shifted your position through the quality of their argument? Write 200 words about that conversation: what was the topic? What did they say? Why did it work? What does this reveal about the conditions under which genuine persuasion is possible?",
      },
      {
        type: "true-false" as const,
        title: "Formal Discussion: True or False?",
        instruction: "Decide whether each statement about formal discussion is true or false.",
        parentTip: "Use these statements as conversation starters before or after a discussion activity.",
        statements: [
          { text: "In a formal discussion, the loudest speaker is usually the most effective.", answer: false },
          { text: "Acknowledging an opponent's point before refuting it is a strong rhetorical strategy.", answer: true },
          { text: "Using hedging language (e.g. 'it could be argued that') always weakens your position.", answer: false },
          { text: "Non-verbal communication (posture, eye contact, gesture) plays a significant role in oral communication.", answer: true },
          { text: "A good discussant should never change their position during a discussion.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Discussion Language: Phrases for Formal Contexts",
        instruction: "Fill each gap with an appropriate formal discussion phrase from the box: [with respect, I would argue, building on that point, to summarise, on the contrary].",
        parentTip: "Practise saying these phrases aloud — they need to feel natural in spoken contexts.",
        sentences: [
          { text: "___ that, I believe there are three key reasons why this policy is ineffective.", blanks: ["I would argue"] },
          { text: "___, I think the evidence actually suggests the opposite conclusion.", blanks: ["On the contrary"] },
          { text: "___ to your earlier comment, I would add that the economic impact has been underestimated.", blanks: ["Building on that point"] },
          { text: "___, the key tension in today's discussion is between individual freedom and collective responsibility.", blanks: ["To summarise"] },
          { text: "___, I disagree with your characterisation of the data.", blanks: ["With respect"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Researching a Position",
        instruction: "A strong formal discussion requires thorough research. You cannot rely on general opinion alone.",
        parentTip: "Help your student use databases and reputable news sources to find evidence.",
        prompts: [
          { text: "Choose a current issue (local, national, or global). Research two credible sources that support your position and one that challenges it. Summarise each source in 2–3 sentences.", type: "box" as const },
          { text: "Using your research, write five key points you would make in a formal discussion of this issue. Order them from most to least compelling.", type: "lines" as const, lines: 8 },
          { text: "What is the strongest counterargument to your position? How would you respond to it in a discussion?", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Oral Communication: Listening Skills",
        instruction: "Choose the best answer for each question about listening in formal discussion.",
        questions: [
          {
            prompt: "Active listening in a formal discussion means:",
            options: [
              "Nodding your head at regular intervals",
              "Focusing fully on the speaker, processing their argument, and formulating a relevant response",
              "Waiting for a pause to interrupt with your own point",
              "Taking notes on everything the speaker says word for word",
            ],
            answer: "Focusing fully on the speaker, processing their argument, and formulating a relevant response",
          },
          {
            prompt: "When you disagree with a speaker in a formal discussion, the most effective response is to:",
            options: [
              "Immediately state that they are wrong",
              "Acknowledge their point, then explain why your evidence leads to a different conclusion",
              "Ask unrelated questions to change the topic",
              "Remain silent and wait for someone else to refute them",
            ],
            answer: "Acknowledge their point, then explain why your evidence leads to a different conclusion",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Planning a Formal Presentation",
        instruction: "A formal presentation requires a clear structure, appropriate language, and careful delivery.",
        parentTip: "This activity is excellent preparation for formal oral assessment tasks.",
        prompts: [
          { text: "Choose a topic you know well. Write a detailed plan for a 5-minute formal presentation: introduction (with hook and thesis), three body points with supporting evidence, and a conclusion.", type: "box" as const },
          { text: "Write your opening 60–90 seconds of the presentation in full, including any rhetorical devices you plan to use.", type: "box" as const },
          { text: "What aspect of formal presentation do you find most challenging (eye contact, pace, pausing, using notes)? Write a specific strategy for improving it.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Power of Silence",
        content: "Effective oral communicators use silence deliberately. A pause before a key point signals that something important is coming. A pause after a point gives the audience time to absorb it. Do not be afraid of silence in a formal discussion — it shows confidence and control, not weakness or uncertainty.",
      },
      {
        type: "circle-correct" as const,
        title: "Identify Effective Discussion Behaviour",
        instruction: "Circle the response that represents more effective formal discussion practice.",
        questions: [
          {
            prompt: "When introducing evidence in a formal discussion, which is better?",
            options: [
              "'Everyone knows that climate change is real.'",
              "'According to a 2023 IPCC report, global temperatures have risen by 1.1 degrees since pre-industrial levels.'",
            ],
          },
          {
            prompt: "When disagreeing with a speaker, which is better?",
            options: [
              "'That's completely wrong — you haven't thought this through.'",
              "'I understand your perspective, but the evidence I have reviewed suggests a different conclusion.'",
            ],
          },
          {
            prompt: "When summarising your position at the end of a discussion, which is better?",
            options: [
              "'So, in conclusion, I think I've proven that my point is correct.'",
              "'To bring my argument together: the evidence consistently shows that early intervention yields better long-term outcomes.'",
            ],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Self-Evaluation: Oral Communication Growth",
        instruction: "Reflecting on your own oral communication is a key metacognitive skill.",
        parentTip: "Record a practice discussion or presentation if possible, so your student can review their own performance.",
        prompts: [
          { text: "Rate yourself on each dimension of oral communication (1 = need much more work, 5 = consistently strong): clarity of argument, use of evidence, listening and responding, formal language register, non-verbal communication. Explain each rating.", type: "box" as const },
          { text: "Set three specific goals for improving your oral communication over the next two weeks. For each goal, describe one concrete strategy you will use.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort Discussion Moves",
        instruction: "Sort each discussion move into the correct category.",
        parentTip: "Have students practise using each move type in a short verbal warm-up before a discussion.",
        columns: ["Building on a Point", "Politely Disagreeing", "Clarifying", "Summarising"],
        items: [
          { label: "'What I hear you saying is...'" },
          { label: "'Adding to what was said, I think...'" },
          { label: "'I take a different view because...'" },
          { label: "'To bring these ideas together...'" },
          { label: "'Could you explain what you mean by...?'" },
          { label: "'That is a valid point, however the evidence suggests...'" },
          { label: "'Extending that idea further...'" },
          { label: "'In summary, the key tensions are...'" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Formal Discussion: Final Synthesis",
        instruction: "Bring together everything you have learned about oral language and formal discussion.",
        parentTip: "This final synthesis task is an excellent portfolio piece for end-of-year assessment documentation.",
        prompts: [
          { text: "Write a 200-word reflection on how your understanding of formal discussion has developed through this worksheet. What do you now understand about oral communication that you did not before?", type: "box" as const },
          { text: "Design your ideal formal discussion format: how many participants, what topic, what rules, what time limit? Justify your choices.", type: "lines" as const, lines: 5 },
          { text: "What is one thing a skilled oral communicator does that you most want to develop in yourself? How will you practise it?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Oral Communication: Real-World Practice",
        instruction: "Choose one real-world activity to develop your formal discussion skills.",
        suggestions: [
          "Watch a full televised or online panel discussion, debate, or parliamentary session. Take notes on the discussion strategies each participant uses. Write a 300-word analysis of who you found most effective and why — focusing on language and argument structure, not just personality.",
          "Organise a family 'formal discussion' on a current issue. Assign each participant a role (facilitator, first speaker, second speaker, summariser). After 20 minutes, debrief: what worked? What was challenging? What will each participant do differently next time? Write a 200-word reflection.",
          "Listen to three podcast episodes that feature formal debate or discussion (e.g. a philosophy podcast, a legal discussion show, or a structured news panel). Write a 400-word comparative analysis of the discussion strategies used across the three episodes.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Who Gets to Speak?",
        content: "In most formal discussions — in classrooms, courtrooms, parliaments, and boardrooms — some voices are heard more readily than others. Think about the formal discussions you have been part of or observed. Whose voices were heard most often? Whose were interrupted or talked over? What would it mean to design a formal discussion that genuinely made space for every voice? Write 200 words.",
      },
      {
        type: "fill-in-blank" as const,
        title: "Oral Communication: Key Terms",
        instruction: "Complete each definition using these terms: [register, hedging, modality, facilitation, deliberative].",
        sentences: [
          { text: "___ discussion is structured discussion aimed at collaborative decision-making or problem-solving.", blanks: ["Deliberative"] },
          { text: "___ refers to the level of formality in spoken or written language, adjusted for audience and context.", blanks: ["Register"] },
          { text: "___ language uses modal verbs or qualifying phrases to express degrees of certainty (e.g. 'It could be argued that...', 'The evidence suggests...').", blanks: ["Hedging"] },
          { text: "___ in a discussion means actively supporting the participation of all members and keeping the discussion on track.", blanks: ["Facilitation"] },
          { text: "___ refers to the degree of certainty, obligation, or possibility expressed in a statement.", blanks: ["Modality"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Preparing an Evidence-Based Presentation",
        instruction: "An evidence-based presentation makes a clear argument supported by specific, credible evidence.",
        parentTip: "This task works particularly well when connected to another subject your student is studying — the oral presentation can serve double duty.",
        prompts: [
          { text: "Choose a topic you are currently researching or studying. Draft a 3-minute presentation plan: opening hook, three evidence-based claims with supporting data or examples, and a clear conclusion.", type: "box" as const },
          { text: "Write the opening 30 seconds of your presentation in full. Include a hook that engages the audience and introduces your central claim.", type: "lines" as const, lines: 5 },
          { text: "How will you handle potential counterarguments or challenging questions from your audience?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Non-Verbal Communication in Formal Contexts",
        instruction: "Choose the best answer for each question about non-verbal communication.",
        parentTip: "Practise these non-verbal elements by watching a formal speech or debate with the sound off.",
        questions: [
          {
            prompt: "In a formal presentation, sustained eye contact with the audience signals:",
            options: [
              "Aggression and dominance",
              "Confidence, engagement, and connection with the audience",
              "That you have memorised your speech word for word",
              "That you are reading from notes",
            ],
            answer: "Confidence, engagement, and connection with the audience",
          },
          {
            prompt: "Speaking too quickly in a formal discussion tends to:",
            options: [
              "Signal enthusiasm and expertise",
              "Undermine clarity and make it harder for the audience to process your argument",
              "Create a sense of urgency that strengthens your position",
              "Show that you have too much content for the time available",
            ],
            answer: "Undermine clarity and make it harder for the audience to process your argument",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Facilitation Skills",
        instruction: "A skilled discussion facilitator creates the conditions for productive, inclusive discussion.",
        prompts: [
          { text: "Imagine you are facilitating a formal discussion on a controversial topic. Write a brief facilitator's guide (150 words): how will you open the discussion, manage contributions, handle conflict, and bring the discussion to a productive close?", type: "box" as const },
          { text: "What specific strategies would you use to draw in participants who have been quiet, without making them feel singled out?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Building Your Spoken Vocabulary",
        content: "Effective formal oral communication requires a broader active vocabulary than everyday speech. Build your spoken vocabulary deliberately: when you encounter a useful academic or formal word in your reading, practise using it aloud in a sentence. Words become truly part of your vocabulary only when you can use them spontaneously in speech.",
      },
      {
        type: "sorting" as const,
        title: "Effective vs. Ineffective Discussion Behaviours",
        instruction: "Sort each behaviour into the correct category.",
        parentTip: "After sorting, discuss examples of each behaviour from discussions you have participated in.",
        columns: ["Effective Discussion Behaviour", "Ineffective Discussion Behaviour"],
        items: [
          { label: "Waiting for a speaker to finish before responding" },
          { label: "Repeating your point louder when others disagree" },
          { label: "Citing specific evidence for each claim" },
          { label: "Changing the subject when challenged" },
          { label: "Acknowledging a strong counterargument before responding" },
          { label: "Making personal attacks when you run out of evidence" },
          { label: "Using hedging language when uncertain" },
          { label: "Dismissing others' contributions without engaging with them" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Cross-Cultural Perspectives",
        instruction: "Discussion norms — what counts as polite, direct, assertive, or respectful — vary significantly across cultures.",
        parentTip: "This is a rich discussion topic in itself — explore it openly with your student.",
        prompts: [
          { text: "What are some discussion behaviours that are considered polite or effective in one cultural context but rude or ineffective in another? Give specific examples if you know them.", type: "box" as const },
          { text: "How should a formal discussion facilitator accommodate different cultural communication styles? What principles should guide their approach?", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Ethics and Responsibility",
        instruction: "With the power to persuade comes ethical responsibility.",
        prompts: [
          { text: "Is it ethical to use rhetorical techniques to persuade an audience of a position you do not yourself hold? Argue your position in 150 words.", type: "box" as const },
          { text: "What responsibility does a speaker have for the consequences of their words? Give an example that illustrates the complexity of this question.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Your Voice as an Asset",
        instruction: "Your voice — its pitch, pace, volume, and rhythm — is one of your most powerful communicative tools.",
        parentTip: "This is a good opportunity to record your student giving a short presentation and listen back together.",
        prompts: [
          { text: "Listen to a recording of yourself speaking (in a conversation, presentation, or discussion). Describe what you notice: your pace, your use of pauses, any filler words (um, like, you know), your pitch and volume.", type: "box" as const },
          { text: "What one aspect of your voice or delivery do you most want to develop? Design a specific, practical strategy for practising it this week.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Oral Communication: Building Your Practice",
        instruction: "Choose one home activity to build sustained oral communication skills.",
        suggestions: [
          "Have a structured family discussion on a genuine issue of local, national, or global concern — at least 20 minutes. Each participant must make at least three evidence-based contributions. Record the discussion if possible. Afterwards, write a 300-word reflection on the quality of reasoning and evidence used, and what you would do differently next time.",
          "Prepare and deliver a 5-minute presentation to a family member or small group on a topic you know well. Afterwards, invite feedback on: clarity, evidence, delivery, and persuasiveness. Write a 200-word self-evaluation that incorporates the feedback you received.",
          "Watch a full formal debate (Oxford Union debates are freely available online). Write a 400-word analysis of the debate: evaluate the opening statements, the quality of evidence, the handling of rebuttals, and the effectiveness of each speaker's oral communication style.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Language: Final Reflection and Growth",
        instruction: "Bring together your learning about formal oral communication in a final reflective synthesis.",
        parentTip: "This final reflection is an excellent addition to a student portfolio and provides a meaningful basis for end-of-year discussion.",
        prompts: [
          { text: "Write a 200-word reflection on your development as a formal oral communicator. What are your current strengths? What do you most want to develop? Give specific examples from discussions or presentations you have participated in.", type: "box" as const },
          { text: "What does effective oral communication share with effective written communication? What is unique to spoken language? How do these two modes of communication develop each other?", type: "lines" as const, lines: 5 },
          { text: "Set yourself three specific, measurable goals for your oral communication practice over the next semester.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Words That Changed the World",
        content: "Some of the most consequential moments in history have been oral — a speech, a debate, a public declaration. Think of a moment when spoken words changed the course of events (historical or in your own experience). What made those words powerful? Was it the argument, the voice, the timing, or something else? If you had one speech to give — one chance to say something that truly mattered — what would it be about?",
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Argumentation Structure",
        instruction: "Effective verbal arguments follow a clear structure — even when delivered spontaneously.",
        parentTip: "Practice verbal argument structure during mealtime conversations — identify the claim, grounds, warrant, and backing in everyday family discussions.",
        prompts: [
          { text: "The Toulmin model of argument identifies: Claim (what you assert), Grounds (your evidence), Warrant (the principle connecting evidence to claim), Backing (support for the warrant), Qualifier (degree of certainty), and Rebuttal (exceptions). Apply this model to one argument you plan to make in an upcoming discussion or presentation.", type: "box" as const },
          { text: "Why is it important to acknowledge the limits and qualifications of your own argument? How does doing so actually strengthen rather than weaken your position?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Oral Communication: Advanced Techniques",
        instruction: "Choose the best answer for each question about advanced oral communication.",
        questions: [
          {
            prompt: "When you realise mid-discussion that you have made an error in your argument, the most effective response is to:",
            options: [
              "Ignore it and hope no one noticed",
              "Defend the error more forcefully",
              "Acknowledge it clearly and modify your position — this actually demonstrates intellectual honesty and enhances credibility",
              "Change the subject immediately",
            ],
            answer: "Acknowledge it clearly and modify your position — this actually demonstrates intellectual honesty and enhances credibility",
          },
          {
            prompt: "Strategic pausing before responding to a challenging question in a discussion signals:",
            options: [
              "That you do not know the answer",
              "Weakness and uncertainty",
              "Thoughtfulness and careful consideration — it is a sign of confident communication",
              "Boredom with the discussion",
            ],
            answer: "Thoughtfulness and careful consideration — it is a sign of confident communication",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Language in Academic Contexts",
        instruction: "Academic oral communication — seminars, tutorials, viva voce assessments — requires specific skills.",
        prompts: [
          { text: "What are the key differences between a casual conversation and an academic oral discussion? Consider: register, evidence requirements, listening expectations, and how disagreement is handled.", type: "box" as const },
          { text: "Prepare three discussion moves you would use to contribute thoughtfully to an academic seminar on a text you are studying: one that builds on another participant's point, one that introduces a counterexample, and one that synthesises multiple contributions.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Advanced Discussion Language",
        instruction: "Complete each discussion move with an appropriate phrase.",
        sentences: [
          { text: "I understand your point about X, however ___.", blanks: ["the evidence suggests a different interpretation"] },
          { text: "To build on what ___ said, I would add that the contextual factors are equally significant.", blanks: ["[speaker's name]"] },
          { text: "That is a compelling argument, and I would ___ it with the following caveat.", blanks: ["qualify"] },
          { text: "I think there is a tension in this discussion between ___ and ___ that we have not yet resolved.", blanks: ["the individual", "the systemic"] },
          { text: "If I could bring together several points that have been made, ___ seems to emerge as the central question.", blanks: ["the issue of"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Designing a Formal Discussion",
        instruction: "Understanding how to design a productive formal discussion is as valuable as knowing how to participate in one.",
        parentTip: "This design task works well as a family or co-op activity — have your student actually run the discussion they design.",
        prompts: [
          { text: "Design a 30-minute formal discussion on a topic connected to any text or subject you are studying: specify the question, the format (Socratic seminar, fish bowl, structured academic controversy, panel), the roles, the time management, and the success criteria.", type: "box" as const },
          { text: "What strategies will you use as facilitator to ensure all participants have equal opportunity to contribute?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Reflection and Goal-Setting",
        instruction: "Sustained improvement in oral communication requires regular reflection and deliberate practice.",
        parentTip: "Return to this reflection in six months and compare — it makes an excellent longitudinal record of growth.",
        prompts: [
          { text: "Looking back across all the oral communication activities in this worksheet, identify: your three strongest current skills, three areas you most want to develop, and one specific oral communication experience you want to seek out in the next month.", type: "box" as const },
          { text: "Write a 'Formal Discussion Protocol' for yourself — a personal set of principles that will guide your participation in any formal discussion from now on.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Oral Communication: Final Review",
        instruction: "A final review of key oral communication principles.",
        statements: [
          { text: "Effective oral communication is simply a matter of speaking loudly and clearly.", answer: false },
          { text: "Active listening is as important as speaking in a formal discussion.", answer: true },
          { text: "A strong presenter always memorises their speech word for word.", answer: false },
          { text: "Using notes in a formal discussion is a sign of poor preparation.", answer: false },
          { text: "The ability to modify your position in response to compelling evidence is a strength in formal discussion.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Portfolio Piece",
        instruction: "Create a portfolio piece that documents your oral communication development.",
        parentTip: "This portfolio piece makes an excellent addition to an end-of-year learning record.",
        prompts: [
          { text: "Write a 300-word 'Oral Communication Profile': describe who you are as a communicator right now — your characteristic strengths, your challenges, your goals. Be honest and specific.", type: "box" as const },
          { text: "List five specific oral communication experiences you want to have in the next year that will help you grow. For each, explain what you expect to learn.", type: "lines" as const, lines: 7 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Oral Communication: Sustained Engagement",
        instruction: "Choose one sustained oral communication activity.",
        suggestions: [
          "For two weeks, keep a 'Discussion Journal': after every significant conversation, discussion, or presentation you participate in, write 100 words reflecting on: what went well, what you would do differently, and one specific improvement you noticed in yourself from the previous entry.",
          "Set up a weekly 'family seminar' for one month: each week, one family member prepares and leads a 10-minute discussion on a topic they are studying or care about. Afterwards, each participant gives specific positive feedback and one suggestion for improvement. Keep a record of how the discussions evolve.",
          "Watch recordings of your own presentations or discussions (recorded on a phone or computer). Write a 400-word self-analysis focusing on: verbal communication (clarity, pace, register, evidence), non-verbal communication (posture, eye contact, gesture), and listening behaviour (responses to others). Identify one specific goal for your next presentation.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Art of Disagreement",
        content: "Disagreement, handled well, is one of the most productive things that can happen in a formal discussion. It tests ideas, reveals assumptions, and — if everyone is genuinely listening — can move everyone toward deeper understanding. Think about the best disagreement you have ever been part of or witnessed: one where both sides left having thought something new. What made it productive? What made it safe? What can we learn from it about how to disagree well?",
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Debate Preparation",
        instruction: "Preparing for a structured debate requires researching both sides of a question — even the side you do not hold.",
        parentTip: "Preparing the opposing side of an argument is one of the best exercises in intellectual flexibility and critical thinking.",
        prompts: [
          { text: "Choose a debatable proposition on any topic you are studying (e.g. 'Social media does more harm than good' or 'Literature is essential to a meaningful education'). Research and prepare arguments for the affirmative position.", type: "box" as const },
          { text: "Now research and prepare arguments for the negative position. Which was harder? What does this reveal about your own biases?", type: "box" as const },
          { text: "Identify the three strongest arguments on each side. Which do you find most compelling overall, and why?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Oral Assessment: Understanding Criteria",
        instruction: "Choose the best answer for each question about oral assessment criteria.",
        questions: [
          {
            prompt: "In an oral presentation, 'coherence' refers to:",
            options: [
              "Speaking at a consistent volume throughout",
              "The logical flow and connection between ideas, so the audience can follow the argument",
              "Using a wide vocabulary",
              "Making eye contact with the audience",
            ],
            answer: "The logical flow and connection between ideas, so the audience can follow the argument",
          },
          {
            prompt: "When an assessor evaluates 'use of evidence' in an oral presentation, they are looking for:",
            options: [
              "The number of sources cited",
              "Whether the speaker uses specific, credible evidence to support their claims, and whether they explain the connection",
              "Whether the evidence supports the conclusion the speaker reached",
              "Whether the evidence comes from peer-reviewed academic sources",
            ],
            answer: "Whether the speaker uses specific, credible evidence to support their claims, and whether they explain the connection",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Building Confidence",
        instruction: "Confidence in oral communication is built through preparation, practice, and experience — not through personality.",
        parentTip: "Be open with your student about your own experiences of anxiety in public speaking — normalising the experience helps enormously.",
        prompts: [
          { text: "Describe your current level of confidence in formal oral communication. What situations make you most anxious? What helps you feel most prepared and capable?", type: "box" as const },
          { text: "Design a six-week 'confidence building plan' for oral communication: specific activities, increasing in complexity and audience size, that will help you develop confidence through practice.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Language: Cross-Subject Application",
        instruction: "The oral communication skills developed in English apply across all subjects — and in life beyond school.",
        prompts: [
          { text: "In what other subjects or contexts do you use formal oral communication skills? How do the skills from this worksheet transfer to those contexts?", type: "lines" as const, lines: 4 },
          { text: "Think about a career or life path you are interested in. How important is formal oral communication in that field? What specific oral skills would be most valuable?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Oral Communication: Advanced Concepts",
        instruction: "Test your understanding of advanced oral communication concepts.",
        statements: [
          { text: "Hedging language always weakens an argument in formal discussion.", answer: false },
          { text: "The ability to change your position during a discussion in response to compelling evidence is a sign of strength, not weakness.", answer: true },
          { text: "Non-verbal communication accounts for a negligible part of how meaning is communicated in face-to-face interaction.", answer: false },
          { text: "The Toulmin model of argument provides a structure for both written and spoken arguments.", answer: true },
          { text: "In a Socratic seminar, the facilitator's role is to provide the correct answers to guide discussion.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Senior Preparation",
        instruction: "In Years 11 and 12, oral communication skills become increasingly important for formal assessment.",
        parentTip: "Research the specific oral assessment requirements for your senior English course and use this activity to prepare directly.",
        prompts: [
          { text: "What oral communication assessment tasks are required in your senior English course? Describe the format, duration, assessment criteria, and any specific preparation requirements.", type: "box" as const },
          { text: "Based on your understanding of these requirements, what are the three most important skills you need to develop between now and your senior assessment? Write a specific plan for developing each one.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Your Voice in the World",
        content: "Your voice — the way you communicate your ideas, values, and understanding — is one of the most powerful things you possess. Think about what you want to say in the world: what arguments you want to make, what ideas you want to share, what changes you want to contribute to. What kind of communicator do you want to become? And what will it take to develop the voice that you imagine yourself having — in a discussion, on a stage, or in the public life of your community?",
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Preparing for Senior Assessment",
        instruction: "Senior English typically includes formal oral assessment tasks that require preparation and practice.",
        parentTip: "Research the specific oral assessment formats in the senior English course your student is preparing for.",
        prompts: [
          { text: "What formal oral assessment tasks will you face in Year 11 and 12? Describe the format, duration, criteria, and any particular challenges they present.", type: "box" as const },
          { text: "Using what you have learned in this worksheet, design a specific preparation plan for your next formal oral assessment task.", type: "lines" as const, lines: 6 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Final Portfolio Piece",
        instruction: "Create a final portfolio piece that documents your oral communication development and goals.",
        parentTip: "This is an excellent final document for a Year 10 English portfolio — it captures development and forward planning.",
        prompts: [
          { text: "Write a 250-word 'Oral Communication Portrait': describe who you are as an oral communicator right now. What are your strengths? Where do you still need to grow? What experiences have shaped your communication style?", type: "box" as const },
          { text: "Set five specific, measurable goals for your oral communication development in Year 11. For each, describe how you will practice and how you will know when you have achieved it.", type: "lines" as const, lines: 8 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Oral Communication: Connecting to Life Beyond School",
        instruction: "Formal oral communication skills are essential in virtually every professional and civic context.",
        prompts: [
          { text: "Interview someone (parent, mentor, or family friend) who regularly uses formal oral communication skills in their professional life. Ask them: what formal communication situations do they navigate regularly, what skills they find most important, and what they wish they had learned earlier. Write a 300-word reflection.", type: "box" as const },
          { text: "How does this conversation change your sense of the importance of the oral communication skills you are developing?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Oral Communication: Final Review",
        instruction: "A final comprehensive review of oral communication skills and concepts.",
        statements: [
          { text: "The Toulmin model provides a structure for constructing arguments in both oral and written contexts.", answer: true },
          { text: "In formal discussion, changing your position in response to compelling evidence is a sign of weakness.", answer: false },
          { text: "Facilitation skills include drawing in quieter participants and managing conflict constructively.", answer: true },
          { text: "Non-verbal communication is less important than verbal content in formal oral contexts.", answer: false },
          { text: "Practising a presentation aloud multiple times before delivery significantly improves its effectiveness.", answer: true },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Discussion That Matters Most",
        content: "Think about the most important conversation that needs to happen in the world right now — a discussion that, if conducted well, with the right people, with genuine listening and good faith, could change something important. What would that conversation be about? Who would need to be in the room? What ground rules would make genuine dialogue possible? And what role could you play — as a participant, a facilitator, or a future contributor?",
      },
      {
        type: "true-false" as const,
        title: "Oral Communication Principles: True or False?",
        instruction: "Mark each statement True or False based on what you have learned about effective formal discussion and oral presentation.",
        parentTip: "Discuss any False answers together — understanding why common assumptions about speaking are incorrect can be a powerful learning moment.",
        statements: [
          { text: "Speaking quickly in a presentation signals confidence and mastery of your material.", answer: false },
          { text: "Acknowledging a counterargument and responding to it strengthens rather than weakens your position.", answer: true },
          { text: "The goal of formal discussion is to win the argument, not to reach shared understanding.", answer: false },
          { text: "Non-verbal communication — posture, eye contact, gesture — affects how an audience receives your message.", answer: true },
          { text: "Pausing before answering a question in a discussion is a sign of weakness.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Oral Language Growth Plan",
        instruction: "Reflect on your development as a formal speaker and discussion participant throughout this worksheet, then set intentions for continued growth.",
        parentTip: "Creating a concrete growth plan helps students move from passive reflection to active development. Encourage specific, achievable steps rather than vague aspirations.",
        prompts: [
          { text: "What aspect of formal speaking or discussion has improved most for you? What made the difference?", type: "lines" as const, lines: 3 },
          { text: "Identify one specific oral communication skill you will practise deliberately in the next month, and describe how you will practise it.", type: "lines" as const, lines: 3 },
          { text: "What kind of speaker or discussion participant do you want to become by the end of Year 10? Describe in two or three sentences.", type: "lines" as const, lines: 3 },
        ],
      },
    ],
  },

  // ── WS 8: Grammar for Effect — Syntax & Style ────────────────────────────────
  {
    slug: "grammar-for-effect-syntax",
    title: "Grammar for Effect: Syntax & Style",
    strand: "Language",
    description:
      "Explore how sentence structure, syntax and grammatical choices create meaning and style — moving beyond correctness to the deliberate use of grammar as a rhetorical tool.",
    learningGuide: {
      concept:
        "At Year 10, grammar is not just about correctness — it is about effect. The length and structure of a sentence, the placement of a subordinate clause, the choice of passive versus active voice, all create different effects on a reader.",
      activation:
        "Write two versions of the same sentence — one very short, one very long. Ask: how does the length change the effect? What mood or pace does each create?",
      check:
        "Can your student analyse a grammatical choice and explain its effect — not just identify it?",
    },
    lesson: {
      title: "When Grammar Becomes Style",
      objective:
        "Identify how specific syntactic choices create rhetorical and aesthetic effects, and experiment with grammar as a stylistic tool in your own writing.",
      materials: [
        "Paper and pen",
        "A short passage from a text you are studying (one paragraph is enough)",
        "Optional: a style guide or grammar reference",
      ],
      intro: {
        title: "The Grammar Beneath the Surface",
        script:
          "Most people think of grammar as the rules of correctness: do not use a comma splice, do not split an infinitive. But skilled writers use grammar deliberately — including breaking rules — to create effects. A very short sentence. After a long one. Creates emphasis. A sentence that runs on and on, accumulating clauses and phrases and qualifications, mimics the sprawl of thought itself. Passive voice, which is often criticised, can be used deliberately to remove the agent — to make something seem inevitable or to protect the speaker from blame. Today we are going to look at grammar not as a set of rules to follow, but as a set of choices that create effects.",
        action:
          "Together, read one paragraph from your student's set text. Count the sentence lengths: how many words in each sentence? What pattern do you notice? How does that pattern affect the pace and mood?",
      },
      mainActivity: {
        title: "The Effect of Syntactic Choices",
        script:
          "Let us think about some specific grammatical choices. Sentence length: short sentences create impact, urgency, finality. Long sentences create accumulation, complexity, meandering thought. Sentence type: declarative sentences state; imperative sentences command; interrogative sentences question; exclamatory sentences emphasise. Placement of the main clause: leading with a subordinate clause creates delay and suspense before the main point. Passive versus active: 'Mistakes were made' versus 'We made mistakes' — the passive version removes the agent and responsibility. Voice: whose perspective controls the sentence?",
        action:
          "In the paragraph you chose, identify: two sentences of notably different lengths. One passive or active construction. One subordinate clause placed unusually. For each, discuss: what effect does this choice create?",
      },
      wrapUp: {
        title: "Writing to Imitate",
        script:
          "One of the best ways to internalise a style is to imitate it deliberately. Choose a writer whose style you find striking — it could be from your set text or something else. Write a short paragraph in their style, imitating their sentence length, punctuation habits, use of metaphor, and register. Then analyse: what specific choices did you make, and why?",
        action:
          "Student writes a short imitative paragraph (5-8 sentences). Then they annotate it with the specific stylistic choices they made.",
      },
      parentTip:
        "If grammar terminology feels unfamiliar to you, do not worry — the activity works well even if you cannot name every device. Focus on the effect rather than the label. Ask: how does this sentence feel different from that one? Why? That instinctive response is a legitimate starting point for formal analysis.",
      extension:
        "Rewrite a passage from your set text in a completely different syntactic style — change sentence lengths, sentence types, and voice. Write a comparison explaining what is gained and lost in the rewrite.",
      resources: [
        {
          title: "Purdue OWL: Sentence Variety",
          url: "https://owl.purdue.edu/owl/general_writing/mechanics/sentence_variety.html",
          description:
            "Practical guidance on using sentence variety for stylistic effect.",
        },
        {
          title: "Purdue OWL: Active and Passive Voice",
          url: "https://owl.purdue.edu/owl/general_writing/mechanics/active_and_passive_voice.html",
          description:
            "Clear explanation of when and why to use passive voice as a deliberate choice.",
        },
        {
          title: "CrashCourse: The Complexity of Language",
          url: "https://www.youtube.com/watch?v=3yLXNzDUH58",
          description:
            "An exploration of how language choices shape meaning beyond literal content.",
        },
      ],
    },
    activities: [
      {
        type: "matching" as const,
        title: "Syntactic Choice to Effect",
        instruction:
          "Match each syntactic or grammatical choice to the effect it most often creates.",
        left: [
          "A series of very short sentences",
          "A long, clause-heavy sentence",
          "Beginning a sentence with a subordinate clause",
          "Passive voice ('Mistakes were made')",
          "Direct address ('You know what I mean')",
          "Anaphora (repeating the same phrase at the start of clauses)",
          "A sentence fragment. Just that.",
          "A rhetorical question",
        ],
        right: [
          "Builds urgency and rhythm; emphasises a key point through accumulation",
          "Removes the agent, creating distance or evasion of responsibility",
          "Creates immediacy and implicates the reader directly in the text",
          "Creates emphasis, finality, or deliberate disruption of expectation",
          "Creates suspense or complexity before the main clause arrives",
          "Mimics complexity of thought; creates a sense of accumulation or excess",
          "Pulls the reader into the argument as a participant in the thinking",
          "Creates dramatic impact by contrast; signals urgency or conclusion",
        ],
      },
      {
        type: "open-response" as const,
        title: "Sentence Surgery",
        instruction:
          "Rewrite each sentence using the instruction in brackets, then explain how the rewrite changes the effect.",
        prompts: [
          {
            text: "'The government decided to cut funding to the arts.' Rewrite in passive voice. What is the effect?",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "'She ran. She fell. She got up.' Combine these into one long, flowing sentence using subordinate clauses. What changes?",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "'Although the evidence was ambiguous and the situation remained unclear, the committee finally reached its decision.' Rewrite this as three short sentences. What is the effect of the change?",
            type: "lines" as const,
            lines: 3,
          },
        ],
      },
      {
        type: "sorting" as const,
        title: "Active or Passive?",
        instruction:
          "Identify each sentence as active or passive, and then sort it into the column that best describes the likely reason for the choice.",
        columns: ["Deliberate passive (distancing, evasion, objectivity)", "Active voice (direct, accountable, vivid)"],
        items: [
          { label: "The report was released on Friday." },
          { label: "The surgeon removed the tumour in under an hour." },
          { label: "Errors were made during the investigation." },
          { label: "The protesters blocked the entrance." },
          { label: "It has been decided that the school will close." },
          { label: "She wrote the letter herself, in her own hand." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Stylistic Imitation",
        instruction:
          "Choose a writer or text whose style you find interesting. Imitate their style in a short paragraph of 8-10 sentences.",
        prompts: [
          {
            text: "Name the writer or text you are imitating and describe three specific features of their style that you will try to replicate:",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Your imitative paragraph:",
            type: "box" as const,
          },
          {
            text: "Annotate three specific choices you made in the paragraph and explain what effect you intended:",
            type: "lines" as const,
            lines: 4,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing Grammar in Your Set Text",
        instruction:
          "Choose one paragraph from a text you are currently studying and write a grammatical and stylistic analysis.",
        prompts: [
          {
            text: "Copy or closely paraphrase the paragraph here:",
            type: "lines" as const,
            lines: 4,
          },
          {
            text: "Identify and analyse two syntactic or grammatical choices in the paragraph. For each: name the choice, quote the example, and explain the intended effect:",
            type: "box" as const,
          },
          {
            text: "How do these grammatical choices connect to the broader themes or argument of the text?",
            type: "lines" as const,
            lines: 3,
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar as Style in the Wild",
        instruction: "Choose one activity to explore grammar as a stylistic tool outside the worksheet.",
        suggestions: [
          "Find a paragraph from a book, article or speech that you find particularly well-written. Copy it out by hand. Then analyse: what specific grammatical choices make it work? Write a 150-word analysis.",
          "Take a paragraph you have written yourself and deliberately rewrite it to experiment with sentence length, passive/active voice, and sentence type. Which version do you prefer, and why?",
          "Listen to a podcast, radio program or speech and notice how the speaker varies their sentence structure. When do they use short punchy sentences? When do they use longer, more complex constructions? Write a reflection on what you noticed.",
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Grammar Is a Choice, Not Just a Rule",
        content: "At Year 10, grammar shifts from a set of rules to avoid breaking into a set of choices to make deliberately. Every sentence you write reflects dozens of grammatical decisions — about length, voice, clause order, punctuation. The question is no longer 'is this grammatically correct?' but 'does this grammatical choice create the effect I want?'",
      },
      {
        type: "true-false" as const,
        title: "Grammar for Effect: True or False?",
        instruction: "Mark each statement as true or false.",
        parentTip: "Use the false answers as the basis for discussing how grammar can be broken deliberately for effect.",
        statements: [
          { text: "A sentence fragment is always a grammatical error.", answer: false },
          { text: "Passive voice can be used deliberately to remove the agent and create distance or evasion.", answer: true },
          { text: "Long sentences are always more sophisticated than short ones.", answer: false },
          { text: "The placement of a subordinate clause at the start of a sentence creates delay before the main point.", answer: true },
          { text: "Varying sentence length is an important tool for controlling rhythm and emphasis.", answer: true },
          { text: "Starting a sentence with 'And' or 'But' is always incorrect.", answer: false },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Syntactic Terminology",
        instruction: "Complete each definition with the correct term: [subordinate clause, main clause, simple sentence, compound sentence, complex sentence, apposition, parenthesis, anaphora].",
        sentences: [
          { text: "A sentence with one main clause and no subordinate clauses is called a ___.", blanks: ["simple sentence"] },
          { text: "A sentence with two or more main clauses joined by a coordinating conjunction is called a ___.", blanks: ["compound sentence"] },
          { text: "A sentence with a main clause and at least one subordinate clause is called a ___.", blanks: ["complex sentence"] },
          { text: "A clause that cannot stand alone and depends on the main clause is called a ___.", blanks: ["subordinate clause"] },
          { text: "A phrase inserted into a sentence, set off by commas, dashes or brackets, that adds supplementary information is called a ___.", blanks: ["parenthesis"] },
          { text: "Two noun phrases placed side by side where one identifies or qualifies the other is called ___.", blanks: ["apposition"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identifying Sentence Types",
        instruction: "Select the correct sentence type for each example.",
        questions: [
          {
            prompt: "'She ran.' — This is a:",
            options: ["Compound sentence", "Complex sentence", "Simple sentence", "Sentence fragment"],
            answer: "Simple sentence",
          },
          {
            prompt: "'She ran, and she did not look back.' — This is a:",
            options: ["Simple sentence", "Compound sentence", "Complex sentence", "Compound-complex sentence"],
            answer: "Compound sentence",
          },
          {
            prompt: "'Although she was frightened, she ran.' — This is a:",
            options: ["Simple sentence", "Compound sentence", "Complex sentence", "Sentence fragment"],
            answer: "Complex sentence",
          },
          {
            prompt: "'Ran.' — This is a:",
            options: ["Simple sentence", "Complex sentence", "Sentence fragment", "Imperative sentence"],
            answer: "Sentence fragment",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Sentence Surgery",
        instruction: "Rewrite each sentence using the instruction in brackets, then explain how the rewrite changes the effect.",
        parentTip: "Read both versions aloud — hearing the difference is often more illuminating than seeing it.",
        prompts: [
          { text: "'The government decided to cut funding to the arts.' Rewrite in passive voice. What is the effect?", type: "lines" as const, lines: 3 },
          { text: "'She ran. She fell. She got up.' Combine into one long sentence using subordinate clauses. What changes?", type: "lines" as const, lines: 3 },
          { text: "'Although the evidence was ambiguous and the situation remained unclear, the committee finally reached its decision.' Rewrite as three short sentences. What is the effect?", type: "lines" as const, lines: 3 },
          { text: "'The protesters blocked the road.' Rewrite to emphasise the road rather than the protesters. What grammatical change did you make?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Active or Passive Voice?",
        instruction: "Identify each sentence as active or passive, and sort it into the most likely reason for the voice choice.",
        columns: ["Deliberate passive (distance, evasion, objectivity)", "Active voice (direct, accountable, vivid)"],
        items: [
          { label: "The report was released on Friday." },
          { label: "The surgeon removed the tumour in under an hour." },
          { label: "Errors were made during the investigation." },
          { label: "The protesters blocked the entrance." },
          { label: "It has been decided that the school will close." },
          { label: "She wrote the letter herself, in her own hand." },
          { label: "The decision was reached after extensive consultation." },
          { label: "He lied to the committee." },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing Sentence Rhythm",
        instruction: "Count the syllables in each sentence of a short passage from your set text. Map the rhythm on paper.",
        parentTip: "This exercise trains sensitivity to prose rhythm — a skill that sharpens both reading and writing.",
        prompts: [
          { text: "Choose 4-6 sentences from your set text and list them here:", type: "box" as const },
          { text: "Note the approximate syllable count for each sentence. What pattern do you notice?", type: "lines" as const, lines: 3 },
          { text: "How does the rhythm created by these sentences relate to the mood or meaning of the passage?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Short Sentence",
        content: "Write a short passage (10-15 sentences) on any topic in which you use sentence length as a deliberate tool. Start with very long sentences. Then shorten them progressively. End with one-word or two-word sentences. Read it aloud. Write 150 words reflecting on what the progression does — what effect does the shortening create?",
      },
      {
        type: "open-response" as const,
        title: "Voice and Agency: Who Performs the Action?",
        instruction: "Grammar determines not just how something is described, but who is responsible for it. Voice and agency are not neutral choices.",
        prompts: [
          { text: "Rewrite the following sentences to shift or reveal agency: 'Mistakes were made in the handling of the crisis.' Reveal who made the mistakes:", type: "lines" as const, lines: 2 },
          { text: "Now create the opposite effect: 'The police fired tear gas at the crowd.' Rewrite to obscure agency:", type: "lines" as const, lines: 2 },
          { text: "Find one real example from news or political language where passive voice is used to obscure accountability. Quote and analyse it:", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Effect of Syntactic Choices",
        instruction: "Select the best description of the grammatical effect.",
        questions: [
          {
            prompt: "What is the effect of beginning a sentence with a long subordinate clause before reaching the main point?",
            options: [
              "It makes the sentence easier to read",
              "It creates delay and anticipation, making the main clause feel more resolved and emphatic when it finally arrives",
              "It always weakens the main clause by reducing its impact",
              "It is only appropriate in academic writing, not literary texts",
            ],
            answer: "It creates delay and anticipation, making the main clause feel more resolved and emphatic when it finally arrives",
          },
          {
            prompt: "A series of very short, declarative sentences in rapid succession creates:",
            options: [
              "A sense of languid, contemplative flow",
              "An effect of complexity and embedded qualification",
              "A sense of urgency, fragmentation, or stark finality",
              "A smoothly integrated argument",
            ],
            answer: "A sense of urgency, fragmentation, or stark finality",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Punctuation as Grammar: The Dash and the Semicolon",
        instruction: "Different punctuation marks create different relationships between clauses and different rhythmic effects.",
        parentTip: "Read each punctuated sentence aloud — the pause the punctuation creates is directly audible.",
        prompts: [
          { text: "Explain the different effects created by these three versions of the same sentence: (a) 'She arrived. The house was empty.' (b) 'She arrived; the house was empty.' (c) 'She arrived — the house was empty.'", type: "box" as const },
          { text: "Write three versions of a sentence from your set text using comma, dash, and semicolon respectively. Which do you prefer, and why?", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Grammar and Effect: Matching Terms",
        instruction: "Complete each sentence by naming the grammatical or stylistic choice and its effect.",
        sentences: [
          { text: "A sentence that issues a command or direction — 'Consider the evidence. Look at the data. Trust the science.' — is called an ___ sentence, and creates a sense of urgency and authority.", blanks: ["imperative"] },
          { text: "When a sentence runs on without traditional punctuation, accumulating clauses through 'and', 'and', 'and', this is sometimes called ___ style, suggesting breathlessness or overwhelming accumulation.", blanks: ["paratactic"] },
          { text: "The technique of placing a key word or phrase at the very end of a sentence for maximum impact — holding the most important idea until last — is called ___.", blanks: ["end focus"] },
          { text: "A sentence structure in which the beginning mirrors the end (e.g. 'Ask not what your country can do for you — ask what you can do for your country') is called ___.", blanks: ["chiasmus"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Analysing Grammar in Your Set Text",
        instruction: "Choose one paragraph from a text you are currently studying and write a grammatical and stylistic analysis.",
        prompts: [
          { text: "Copy or closely paraphrase the paragraph here:", type: "lines" as const, lines: 4 },
          { text: "Identify and analyse two syntactic or grammatical choices in the paragraph. For each: name the choice, quote the example, and explain the intended effect:", type: "box" as const },
          { text: "How do these grammatical choices connect to the broader themes or argument of the text?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar in the Wild: Extended Practice",
        instruction: "Choose one extended activity to explore grammar as a stylistic tool.",
        suggestions: [
          "Find a paragraph from a book, article or speech that you find particularly well-written. Copy it out by hand. Then analyse: what specific grammatical choices make it work? Write a 200-word analysis.",
          "Take a paragraph you have written yourself and deliberately rewrite it to experiment with sentence length, passive/active voice, and sentence type. Which version do you prefer, and why?",
          "Listen to a podcast, radio program or speech and transcribe 2-3 minutes of it. Then analyse the transcript: what sentence types does the speaker use? How does their grammar create spoken rhythm?",
        ],
      },
      // ── Consolidating (51-80) ──
      {
        type: "open-response" as const,
        title: "Stylistic Imitation: Advanced",
        instruction: "Choose a writer whose syntactic style is very distinctive — someone whose sentences you would recognise without being told who wrote them. Imitate their style across a full paragraph.",
        parentTip: "Suggested writers for distinctive syntactic styles: Virginia Woolf (long, clause-rich sentences, free indirect discourse); Ernest Hemingway (short declaratives, parataxis); Cormac McCarthy (no speech marks, minimal punctuation); Joan Didion (fragmented, essayistic).",
        prompts: [
          { text: "Name the writer and describe three specific syntactic features of their style:", type: "lines" as const, lines: 3 },
          { text: "Your imitative paragraph (8-12 sentences):", type: "box" as const },
          { text: "Annotate five specific choices you made and explain how each imitates the writer's style:", type: "box" as const },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Grammatical Terminology",
        instruction: "Select the correct definition.",
        questions: [
          {
            prompt: "A 'syndetic' list uses:",
            options: [
              "No conjunctions between list items",
              "Conjunctions between every pair of items in a list",
              "A semicolon between list items",
              "Only two items",
            ],
            answer: "Conjunctions between every pair of items in a list",
          },
          {
            prompt: "An 'asyndetic' list uses:",
            options: [
              "Conjunctions between every pair of items",
              "No conjunctions between items — just commas",
              "A colon to introduce each item",
              "Items in parentheses",
            ],
            answer: "No conjunctions between items — just commas",
          },
          {
            prompt: "What effect does an asyndetic list typically create compared to a syndetic one?",
            options: [
              "It makes the list feel more complete and resolved",
              "It creates a sense of speed, accumulation, or incompleteness — as if the list could go on",
              "It slows the reader down and creates emphasis",
              "It signals a formal, legal register",
            ],
            answer: "It creates a sense of speed, accumulation, or incompleteness — as if the list could go on",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Analysing Grammar in Literary Texts",
        content: "When analysing grammar in a literary text, avoid simply saying 'the author uses a complex sentence'. Ask instead: why this sentence structure here? Why does the subordinate clause come before the main clause in this moment? Why does this sentence end with a verb rather than a noun? The specificity of the grammatical choice is always in service of a specific effect — your job is to identify and explain the connection.",
      },
      {
        type: "open-response" as const,
        title: "The Grammar of Lists",
        instruction: "Lists — asyndetic and syndetic — are a powerful grammatical tool in both literary and argumentative writing.",
        prompts: [
          { text: "Write an asyndetic list (no conjunctions) describing a scene or an argument. Read it aloud. What effect does it create?", type: "lines" as const, lines: 3 },
          { text: "Write the same content as a syndetic list (conjunctions between every pair). How does the effect differ?", type: "lines" as const, lines: 3 },
          { text: "Find an example of either type of list in a text you are studying. Analyse its effect:", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Syntactic Parallelism",
        instruction: "Parallelism — using the same grammatical structure for repeated ideas — is one of the most powerful syntactic tools for creating emphasis and rhythm.",
        prompts: [
          { text: "Define syntactic parallelism and give one example from a speech or literary text:", type: "lines" as const, lines: 3 },
          { text: "Write three parallel sentences on a topic of your choice. Make the parallel structure visible:", type: "lines" as const, lines: 3 },
          { text: "What happens when parallelism breaks down — when the third item in a parallel series suddenly changes structure? Find or create an example and analyse its effect:", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Sentence Types and Their Effects",
        instruction: "Complete each sentence by naming the sentence type and its typical effect.",
        sentences: [
          { text: "A sentence that states a fact or position is called a ___ sentence.", blanks: ["declarative"] },
          { text: "A sentence that asks a question (including a rhetorical one) is called an ___ sentence.", blanks: ["interrogative"] },
          { text: "A sentence that gives a command or instruction is called an ___ sentence.", blanks: ["imperative"] },
          { text: "A sentence that expresses strong emotion or emphasis is called an ___ sentence.", blanks: ["exclamatory"] },
          { text: "A grammatically incomplete sentence used for deliberate stylistic effect is called a ___.", blanks: ["fragment"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar and Ideology: Who Acts?",
        instruction: "Grammar is not politically neutral. The choice of who or what occupies the subject position of a sentence — who is the agent who acts — has ideological implications.",
        parentTip: "This task connects grammar to the ideology and representation strand — encourage your student to see the connections.",
        prompts: [
          { text: "Compare these two sentences: 'Police shot the protester' vs 'The protester was shot.' How does the grammatical change shift responsibility and emphasis?", type: "lines" as const, lines: 4 },
          { text: "Find two examples from news media where grammatical choices seem to serve an ideological purpose — where the subject/agent choice protects or implicates someone.", type: "box" as const },
          { text: "Rewrite both examples to make the agency explicit. What changes?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Syntactic Choices and Their Effects",
        instruction: "Match each syntactic choice to its most typical effect.",
        columns: ["Creates urgency or immediacy", "Creates complexity or accumulation", "Creates irony or subversion", "Creates formality or distance"],
        items: [
          { label: "A series of very short declarative sentences in rapid succession" },
          { label: "A long, clause-embedded sentence that accumulates qualifications" },
          { label: "Passive voice used to describe an action whose agent is obvious" },
          { label: "Impersonal constructions such as 'It has been decided that...'" },
          { label: "A sentence fragment after a long complex sentence" },
          { label: "A list that builds through elaboration without resolution" },
          { label: "Parallelism disrupted in the final item of a series" },
          { label: "Direct address — 'You know what I mean'" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Developing a Stylistic Argument",
        instruction: "Write a paragraph arguing that one specific syntactic feature of your set text is a central meaning-making choice — not just a stylistic habit but a deliberate tool for creating the text's effect.",
        parentTip: "This is the kind of sophisticated grammatical analysis expected at Year 12 level. Encourage your student to be specific and bold in their claim.",
        prompts: [
          { text: "Identify the syntactic feature and state your claim about its significance:", type: "lines" as const, lines: 2 },
          { text: "Your analytical paragraph (150-200 words):", type: "box" as const },
          { text: "Does your paragraph prove that this syntactic choice is deliberate — or only that it exists?", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Breaking the Rules on Purpose",
        content: "Every effective rule-breaking in writing depends on the reader knowing the rule that is being broken. A sentence fragment only creates drama if the reader expects a complete sentence. Write 150 words exploring a moment in literature where a grammatical 'error' creates a stronger effect than correct grammar would. What rule was broken? What did the breaking achieve?",
      },
      {
        type: "open-response" as const,
        title: "Grammar in Your Own Writing",
        instruction: "Review a piece of your own analytical writing — an essay or a longer worksheet response.",
        prompts: [
          { text: "Identify two grammatical habits you notice in your own writing (e.g., always starting sentences the same way, always using passive voice, very long or very short sentences):", type: "lines" as const, lines: 3 },
          { text: "Are these habits conscious choices or defaults? For each: is the habit serving your writing, or limiting it?", type: "lines" as const, lines: 3 },
          { text: "Rewrite one paragraph of your own work, deliberately varying your syntactic choices. What improves?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Sustained Grammar Study",
        instruction: "Choose one extended activity.",
        suggestions: [
          "Find three passages from the same author written in different stages of their career. Analyse the development of their syntactic style: what has changed? What has stayed the same? Write a 300-word stylistic analysis.",
          "Research one syntactic feature in depth: read about its history and function, find five examples in literary texts, and write a 300-word essay on its rhetorical possibilities.",
          "Take a passage from your set text and rewrite it in the syntactic style of a completely different author. Then write a 200-word comparison: what is gained? What is lost?",
        ],
      },
      // ── Extending (81-100) ──
      {
        type: "open-response" as const,
        title: "Full Syntactic Analysis: A Passage",
        instruction: "Choose a passage of 150-200 words from your set text and write a complete syntactic and grammatical analysis (400-500 words). Your analysis should: identify the dominant sentence types and lengths; analyse at least three specific grammatical choices; connect these choices to the text's broader meaning and themes; and make an argument about what the grammar is doing.",
        parentTip: "This is an extended, independent task — allow 50 minutes.",
        prompts: [
          { text: "Your chosen passage:", type: "box" as const },
          { text: "Your full syntactic analysis:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Timed Stylistic Analysis",
        instruction: "Set a timer for 30 minutes. Analyse the following passage:\n\n'In the beginning was the word, and the word was with God, and the word was God. He was with God in the beginning. Through him all things were made; without him nothing was made that has been made.' — John 1:1-3\n\nFocus specifically on the grammatical and syntactic choices and their effects.",
        parentTip: "Examination conditions — no notes.",
        prompts: [
          { text: "Your timed analysis:", type: "box" as const },
          { text: "After the timer: what would you add with another 10 minutes?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Essay: Grammar as Argument",
        instruction: "Write a complete analytical essay (500 words) in response to this prompt: 'In skilled writing, grammar is not decoration but argument. Every syntactic choice is a meaning-making choice.' Choose one text you have studied. Agree or disagree using specific grammatical evidence.",
        parentTip: "Allow 50 minutes. This is a challenging essay that requires syntactic analysis to serve a literary argument.",
        prompts: [
          { text: "Your essay:", type: "box" as const },
        ],
      },
      {
        type: "open-response" as const,
        title: "Your Developing Style as a Writer",
        instruction: "Reflect on your development as a writer who uses grammar deliberately.",
        prompts: [
          { text: "What is the most important thing you have learned about grammar as a stylistic tool? Give one specific example of how this knowledge has changed your writing or reading.", type: "box" as const },
          { text: "Which syntactic technique do you most want to develop in your own writing? Write a practice paragraph that experiments with it.", type: "box" as const },
          { text: "Write a short description (150 words) of the kind of writer you want to become — including specific grammatical and stylistic habits you want to cultivate.", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar: Independent Extended Project",
        instruction: "Choose one independent project.",
        suggestions: [
          "Read the opening chapter of three novels with very different syntactic styles. Write a 500-word comparative analysis of how the grammar of each opening creates its distinctive world and voice.",
          "Find a published academic article on stylistics or linguistic analysis of a literary text. Read it and write a 400-word critical response: what does the linguistic approach reveal? What does it miss?",
          "Write a short story (500-600 words) in which you use syntax as a deliberate narrative tool: use sentence length and type to mirror the emotional arc of the narrative. Then write a 200-word stylistic commentary on your own choices.",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Grammar of Your Thinking",
        content: "Do you think in sentences? In fragments? In long, connected chains of subordinate clauses? Does the way you think affect the way you write — or does the way you write shape the way you think? Write 200 words exploring the relationship between your grammatical habits and your thought patterns. Is there a sentence structure that feels most like you?",
      },
      {
        type: "true-false" as const,
        title: "Grammar Effects: True or False?",
        instruction: "Decide whether each statement about grammar and style is true or false.",
        parentTip: "Discuss each statement before deciding — some are deliberately nuanced.",
        statements: [
          { text: "Short sentences always create tension or urgency.", answer: false },
          { text: "A rhetorical question invites the reader to engage actively with an idea.", answer: true },
          { text: "Passive voice is always a stylistic weakness.", answer: false },
          { text: "Anaphora involves the repetition of a word or phrase at the beginning of successive clauses.", answer: true },
          { text: "Syndeton uses multiple conjunctions to slow the pace of a sentence.", answer: true },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Punctuation for Effect",
        instruction: "Complete each sentence with the correct punctuation term: [dash, colon, semicolon, ellipsis, parentheses].",
        parentTip: "Look at how each punctuation mark changes the rhythm of the sentence.",
        sentences: [
          { text: "A ___ creates a pause that builds anticipation before a revelation or list.", blanks: ["colon"] },
          { text: "A ___ signals an interruption, an aside, or a dramatic shift in thought.", blanks: ["dash"] },
          { text: "A ___ trails off, creating suspense or suggesting something left unsaid.", blanks: ["ellipsis"] },
          { text: "A ___ links two related independent clauses of equal weight.", blanks: ["semicolon"] },
          { text: "___ enclose supplementary information or an aside comment.", blanks: ["parentheses"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identifying Syntactic Structures",
        instruction: "Choose the best answer for each question about syntax.",
        questions: [
          {
            prompt: "What is a periodic sentence?",
            options: [
              "A sentence that appears at regular intervals in a text",
              "A sentence in which the main clause is withheld until the end",
              "A sentence that contains a periodic list of items",
              "A sentence that uses only simple subject-verb-object structure",
            ],
            answer: "A sentence in which the main clause is withheld until the end",
          },
          {
            prompt: "What effect does a cumulative (loose) sentence typically create?",
            options: [
              "Suspense and delay",
              "A flowing, associative sense of adding detail",
              "Formal, elevated register",
              "A sense of contradiction",
            ],
            answer: "A flowing, associative sense of adding detail",
          },
          {
            prompt: "Asyndeton is defined as:",
            options: [
              "The use of many conjunctions in close succession",
              "The deliberate omission of conjunctions between clauses",
              "The repetition of a grammatical structure in parallel form",
              "A sentence that begins with a dependent clause",
            ],
            answer: "The deliberate omission of conjunctions between clauses",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Sentence Imitation Exercise",
        instruction: "Sentence imitation is a technique used by professional writers to develop their syntactic range.",
        parentTip: "Encourage your student to read the model sentence aloud before imitating — feel the rhythm.",
        prompts: [
          { text: "Read this model sentence: 'It was a bright cold day in April, and the clocks were striking thirteen.' (Orwell) Imitate its structure (simple + and + simple with a twist) using a completely different topic.", type: "lines" as const, lines: 3 },
          { text: "Now try imitating a periodic sentence: 'Though the wind howled and the rain lashed the windows, the old man slept.' Write your own periodic sentence on any topic.", type: "lines" as const, lines: 3 },
          { text: "Reflect: what did this imitation exercise teach you about how sentence structure creates effect?", type: "box" as const },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Grammar and Register",
        content: "Register is the level of formality in language. Grammar choices signal register: short sentences and contractions suggest informality; long periodic sentences and formal vocabulary signal a high register. Strong writers can shift register deliberately for effect.",
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Technique",
        instruction: "Circle the grammatical or stylistic technique used in each example.",
        parentTip: "Read each example aloud to feel its rhythm before identifying the technique.",
        questions: [
          {
            prompt: "'I came, I saw, I conquered.' — This is an example of:",
            options: ["Anaphora", "Tricolon", "Asyndeton", "Hyperbole"],
          },
          {
            prompt: "'She was honest, she was kind, she was brave.' — The repeated 'she was' is an example of:",
            options: ["Epistrophe", "Anaphora", "Chiasmus", "Polysyndeton"],
          },
          {
            prompt: "'Ask not what your country can do for you — ask what you can do for your country.' — This is an example of:",
            options: ["Anaphora", "Chiasmus", "Tricolon", "Asyndeton"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Voice and Syntax in Non-Fiction",
        instruction: "Non-fiction writers use grammar and syntax as deliberately as novelists.",
        prompts: [
          { text: "Find a paragraph from a piece of published non-fiction (essay, journalism, memoir). Copy one sentence you find particularly effective. Annotate it: what syntactic choices has the writer made and what is their effect?", type: "box" as const },
          { text: "Rewrite the same sentence using a different syntactic structure. How does the meaning or effect change?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "sorting" as const,
        title: "Sort by Syntactic Effect",
        instruction: "Sort these techniques into the correct effect category.",
        parentTip: "Some techniques can produce multiple effects depending on context — discuss these cases.",
        columns: ["Creates Urgency / Speed", "Creates Weight / Emphasis", "Creates Flow / Accumulation"],
        items: [
          { label: "Short declarative sentences" },
          { label: "Anaphora" },
          { label: "Polysyndeton" },
          { label: "Periodic sentence" },
          { label: "Asyndeton" },
          { label: "Cumulative sentence" },
          { label: "Tricolon" },
          { label: "Parenthetical aside" },
          { label: "Rhetorical question" },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Syntax as Music",
        content: "A great writer once said that prose has its own music — not rhyme and metre, but the rhythm of sentences. Write a paragraph about anything you care deeply about, but focus entirely on the sound and rhythm of your sentences. Read it aloud as you draft. What syntactic choices make it sound most like music?",
      },
      {
        type: "open-response" as const,
        title: "Subordination and Coordination",
        instruction: "The choice between subordinating and coordinating clauses changes how ideas relate to each other.",
        parentTip: "Use a whiteboard to diagram the clause relationships in student sentences.",
        prompts: [
          { text: "Rewrite this sentence using subordination: 'She was tired. She kept working. The deadline was close.' Combine into one complex sentence showing cause and effect.", type: "lines" as const, lines: 3 },
          { text: "Now rewrite using coordination only (using 'and', 'but', 'so'). Compare the two versions — which is more effective and why?", type: "box" as const },
          { text: "Write a short paragraph (4–5 sentences) about a difficult decision, varying your use of subordination and coordination for effect.", type: "box" as const },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Grammar Terminology: Complete the Definition",
        instruction: "Fill in the missing word to complete each grammar definition.",
        sentences: [
          { text: "A ___ clause cannot stand alone as a sentence; it depends on a main clause.", blanks: ["subordinate"] },
          { text: "A ___ verb tells us about a state of being (seem, appear, become) rather than an action.", blanks: ["linking"] },
          { text: "The ___ is the noun phrase that receives the action of a transitive verb.", blanks: ["object"] },
          { text: "A ___ phrase modifies a noun and consists of a preposition followed by a noun phrase.", blanks: ["prepositional"] },
          { text: "A sentence with two or more independent clauses joined by a coordinating conjunction is called a ___ sentence.", blanks: ["compound"] },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Using Fragments Deliberately",
        content: "Sentence fragments — incomplete sentences — are grammatically incorrect in formal writing, but skilled authors use them deliberately for effect: to create drama, speed, or emphasis. The key is intentionality. 'She waited. Nothing.' is a deliberate fragment for effect, not a mistake.",
      },
      {
        type: "multiple-choice" as const,
        title: "Active vs. Passive Voice",
        instruction: "Identify the voice and its likely effect in each example.",
        parentTip: "Remind students that passive voice is not always wrong — it can deliberately obscure agency.",
        questions: [
          {
            prompt: "'Mistakes were made.' — This use of passive voice:",
            options: [
              "Emphasises who made the mistakes",
              "Deliberately obscures who is responsible",
              "Creates a sense of speed and action",
              "Is a grammatical error",
            ],
            answer: "Deliberately obscures who is responsible",
          },
          {
            prompt: "'The protesters were dispersed by police.' — Compared to 'Police dispersed the protesters', the passive version:",
            options: [
              "Makes the protesters seem more powerful",
              "Places focus on what happened to the protesters rather than police action",
              "Is more direct and forceful",
              "Removes all meaning from the sentence",
            ],
            answer: "Places focus on what happened to the protesters rather than police action",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar in Poetry",
        instruction: "Poets use grammar in unusual ways — breaking rules for effect, delaying verbs, placing subjects unexpectedly.",
        prompts: [
          { text: "Find a poem that uses unusual grammar or syntax (e.e. cummings, Gerard Manley Hopkins, or any contemporary poet). Copy two lines and annotate the grammatical choices.", type: "box" as const },
          { text: "What effect do these grammatical departures create? How would the poem change if rewritten in standard syntax?", type: "lines" as const, lines: 4 },
          { text: "Write 4–6 lines of your own poetry that deliberately bends or breaks a grammar rule for effect. Annotate your choices.", type: "box" as const },
        ],
      },
      {
        type: "true-false" as const,
        title: "Passive Voice and Agency",
        instruction: "Decide whether each statement about passive voice is true or false.",
        statements: [
          { text: "Passive voice always makes writing weaker.", answer: false },
          { text: "In passive voice, the subject receives the action rather than performing it.", answer: true },
          { text: "Political and bureaucratic writing often uses passive voice to obscure responsibility.", answer: true },
          { text: "Scientific writing traditionally uses active voice to emphasise the researcher over the process.", answer: false },
          { text: "Transforming an active sentence to passive always changes the essential meaning.", answer: false },
        ],
      },
      {
        type: "open-response" as const,
        title: "Stylistic Imitation: Published Author",
        instruction: "Choose a published author whose prose style you admire or find interesting.",
        parentTip: "Students might choose authors they are studying for a text response — this integrates well with literature study.",
        prompts: [
          { text: "Quote a passage (3–5 sentences) from your chosen author. Identify three specific syntactic features of their style.", type: "box" as const },
          { text: "Write a short passage (100–150 words) imitating their syntactic style on a completely different topic.", type: "box" as const },
          { text: "Evaluate: what was hardest to imitate? What does this reveal about what makes their style distinctive?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Embedding Quotations with Syntax",
        content: "When you embed a quotation in an essay, consider the syntax of your embedding sentence. A well-embedded quotation flows grammatically: 'Orwell uses the phrase \"double-think\" to suggest...' rather than 'Orwell says \"double-think\". This means...' The embedding sentence is part of your grammar too.",
      },
      {
        type: "matching" as const,
        title: "Match the Technique to Its Definition",
        instruction: "Draw a line to match each syntactic technique to its correct definition.",
        parentTip: "Test knowledge by asking students to recall definitions before consulting notes.",
        left: [
          "Anaphora",
          "Epistrophe",
          "Tricolon",
          "Chiasmus",
          "Polysyndeton",
          "Asyndeton",
        ],
        right: [
          "Repetition of a word/phrase at the end of successive clauses",
          "A series of three parallel elements",
          "Reversal of grammatical structures in successive phrases",
          "Omission of conjunctions for rapid, compressed effect",
          "Use of many conjunctions in close succession",
          "Repetition of a word/phrase at the start of successive clauses",
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar Analysis: Political Speech",
        instruction: "Political speeches are a rich source of deliberate syntactic choices.",
        prompts: [
          { text: "Find a famous political speech (e.g. Martin Luther King Jr's 'I Have a Dream', Churchill's wartime speeches, or a contemporary speech). Identify two or three syntactic techniques used and explain their purpose.", type: "box" as const },
          { text: "How does the syntax of a spoken speech differ from written prose? Consider rhythm, repetition, and the needs of a live audience.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Grammar as Resistance",
        content: "Some writers have used unconventional grammar as a form of cultural or political resistance — rejecting the rules of the coloniser's language, or refusing the hierarchies embedded in standard grammar. Think about a time you broke a rule on purpose — in writing, conversation, or life. What were you asserting by breaking it?",
      },
      {
        type: "circle-correct" as const,
        title: "Identify the Effect",
        instruction: "Circle the most accurate description of the effect created by each grammatical choice.",
        questions: [
          {
            prompt: "Using very short sentences: 'He stopped. He looked. He knew.' creates:",
            options: ["A sense of flow and accumulation", "Tension and deliberate pacing", "A formal, elevated tone", "Ambiguity and uncertainty"],
          },
          {
            prompt: "A long periodic sentence withholds the main clause until the end, creating:",
            options: ["Immediacy and speed", "Suspense and anticipation", "Conversational informality", "Logical clarity"],
          },
          {
            prompt: "Ending every clause with the same word (epistrophe) creates:",
            options: ["A sense of forward momentum", "Emphasis through rhythmic repetition", "Ambiguity", "Fragmentation"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Writing a Stylistic Commentary",
        instruction: "A stylistic commentary analyses specific grammatical choices in a text and explains their effect.",
        parentTip: "This activity directly prepares students for close analysis tasks in Year 10–12 English assessments.",
        prompts: [
          { text: "Choose a paragraph from any text you are studying. Write a stylistic commentary (200–250 words) that analyses at least three specific grammatical or syntactic features and their effects. Use metalanguage throughout.", type: "box" as const },
          { text: "Now reflect: what makes a stylistic commentary effective? What should you always include, and what should you avoid?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Complex Sentences: Fill the Gap",
        instruction: "Complete each sentence by adding an appropriate subordinate clause.",
        parentTip: "Encourage experimentation with different subordinating conjunctions — because, although, since, whenever, unless.",
        sentences: [
          { text: "___, the author's use of fragmented syntax creates an overwhelming sense of chaos.", blanks: ["Although the surface narrative seems calm"] },
          { text: "The passive voice in this passage is effective ___, deliberately shifting focus from the actor to the action.", blanks: ["because it obscures agency"] },
          { text: "Whenever the writer employs tricolon, ___.", blanks: ["a sense of rhythm and completeness is created"] },
          { text: "___, the periodic sentence builds toward its conclusion with a powerful sense of inevitability.", blanks: ["Because the main clause is delayed"] },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Grammar in Context: Advertising",
        instruction: "Advertising uses grammar deliberately to create memorable, persuasive language.",
        questions: [
          {
            prompt: "The slogan 'Just Do It' is effective partly because it uses:",
            options: [
              "A complex sentence with a subordinate clause",
              "An imperative sentence — direct command",
              "Passive voice to suggest inevitability",
              "A rhetorical question",
            ],
            answer: "An imperative sentence — direct command",
          },
          {
            prompt: "Slogans often use fragments rather than complete sentences because:",
            options: [
              "Advertisers do not understand grammar",
              "Fragments are memorable, punchy, and easy to repeat",
              "Fragments are more formal than complete sentences",
              "Complete sentences are too memorable",
            ],
            answer: "Fragments are memorable, punchy, and easy to repeat",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Syntactic Choices in Your Own Writing",
        instruction: "The best writers are conscious of their syntactic choices — not just what they say, but how they say it.",
        parentTip: "Encourage your student to read their draft aloud to hear the rhythm of sentences.",
        prompts: [
          { text: "Take a piece of your own writing (from any subject). Identify one paragraph where the syntax is flat or monotonous. Diagnose the problem: are the sentences all the same length? All simple? Rewrite the paragraph, varying your syntax deliberately.", type: "box" as const },
          { text: "Set a 'syntax intention' for your next piece of writing: one specific syntactic technique you will use deliberately. Write it down and plan how you will use it.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: The Metalanguage of Syntax",
        content: "When writing about grammar in an analytical essay, use metalanguage precisely: name the technique (e.g., 'anaphora', 'periodic sentence', 'passive voice'), quote the text, and explain the effect. Avoid vague phrases like 'the writer uses lots of short sentences' — be specific about what and why.",
      },
      {
        type: "sorting" as const,
        title: "Formal vs. Informal Syntax",
        instruction: "Sort these syntactic features into formal or informal register.",
        columns: ["Formal Register", "Informal Register"],
        items: [
          { label: "Contractions (it's, don't)" },
          { label: "Passive voice constructions" },
          { label: "Sentence fragments for effect" },
          { label: "Subordinate clauses with precise connectives" },
          { label: "Colloquial rhetorical questions" },
          { label: "Periodic sentences" },
          { label: "Polysyndeton for conversational rhythm" },
          { label: "Nominalisation (use of nouns derived from verbs)" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar and Characterisation",
        instruction: "The way a character speaks — their syntax — reveals personality, background, and psychology.",
        prompts: [
          { text: "Choose a character from a novel, play, or film you have studied. Describe the characteristic syntax of their speech or narration. What does it reveal about them?", type: "box" as const },
          { text: "Write a short monologue (100–150 words) from the perspective of this character, using their characteristic syntax deliberately.", type: "box" as const },
          { text: "How would the reader's perception of this character change if their syntax were rewritten in a neutral, standard way?", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Syntax in Academic Writing",
        instruction: "Decide whether each statement about syntax in academic writing is true or false.",
        parentTip: "Discuss with your student how academic writing conventions may differ across disciplines.",
        statements: [
          { text: "Academic writing should always use short, simple sentences for clarity.", answer: false },
          { text: "Nominalisation (using nouns derived from verbs) is common in academic writing.", answer: true },
          { text: "Academic writing typically avoids first-person pronouns in some disciplines.", answer: true },
          { text: "A complex sentence with multiple subordinate clauses is always unclear.", answer: false },
          { text: "Hedging language (possibly, it seems, it could be argued) is a feature of academic discourse.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Comparing Syntactic Styles Across Texts",
        instruction: "Different texts on the same topic can use dramatically different syntactic styles.",
        parentTip: "This comparative activity builds skills directly useful for comparative text analysis assessments.",
        prompts: [
          { text: "Find two short texts on the same topic (e.g. two news articles, a speech and a poem, an advertisement and a letter). Compare their syntactic styles: sentence length, types, use of fragments, use of passive/active voice.", type: "box" as const },
          { text: "How does the difference in syntax reflect the different purposes, audiences, and contexts of each text?", type: "lines" as const, lines: 5 },
          { text: "Which syntactic style do you find more effective for its purpose? Justify your view.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Rewrite the World",
        content: "Choose a famous opening line from a novel ('Call me Ishmael', 'It was the best of times', 'Happy families are all alike'). Rewrite it using a completely different syntactic structure — change the sentence type, voice, clause order, or rhythm. How does changing the grammar change the world the novel opens into?",
      },
      {
        type: "multiple-choice" as const,
        title: "Syntax and Meaning: Advanced Questions",
        instruction: "Choose the best answer for each advanced question about grammar and meaning.",
        parentTip: "These questions are at the level of Year 10–12 English analysis tasks.",
        questions: [
          {
            prompt: "When a writer uses nominalisation (e.g., 'the destruction of the city' rather than 'they destroyed the city'), the effect is to:",
            options: [
              "Make the writing more informal and conversational",
              "Make the action seem more abstract and detached from human agency",
              "Emphasise the speed of the action",
              "Create a sense of personal involvement",
            ],
            answer: "Make the action seem more abstract and detached from human agency",
          },
          {
            prompt: "Choosing to begin a sentence with a subordinate clause ('Although she had worked all night...') rather than the main clause ('She had worked all night, but...') creates:",
            options: [
              "A simpler, more direct meaning",
              "A sense of context and qualification that modifies how we receive the main clause",
              "A more informal register",
              "A faster pace",
            ],
            answer: "A sense of context and qualification that modifies how we receive the main clause",
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar for Effect: Extended Analysis",
        instruction: "This activity brings together everything you have learned about grammar as a stylistic tool.",
        parentTip: "This extended analysis task mirrors the kind of close reading required in senior English exams.",
        prompts: [
          { text: "Select any substantial paragraph from a text you are studying (at least 6–8 sentences). Write an extended analysis (300–400 words) that examines the syntactic choices in that paragraph, explaining the effect of at least four specific techniques. Use metalanguage throughout.", type: "box" as const },
          { text: "Reflect on your analysis: what aspects of grammar and syntax do you still find most difficult to identify or explain? How will you work on these?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar: Immersive Reading Project",
        instruction: "Choose one extended home activity to deepen your understanding of grammar for effect.",
        suggestions: [
          "Read the first chapter of a novel you have not read before. As you read, annotate every sentence that strikes you as syntactically interesting. At the end of the chapter, write a 300-word reflection on what the opening syntax tells you about the author's style and the world of the novel.",
          "Listen to three TED Talks or speeches on YouTube. Take notes on the syntactic techniques used in each. Write a 400-word comparative analysis of how each speaker uses syntax to persuade or engage.",
          "Find three advertisements (print, online, or TV) and analyse the grammar of each slogan or key sentence. Write a 300-word analysis of how syntax is used in advertising to create persuasion, memorability, and brand identity.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar: Your Synthesis and Reflection",
        instruction: "Bring together everything you have learned across this worksheet.",
        parentTip: "This final reflection is a valuable portfolio piece and can be used as a basis for a student-led discussion.",
        prompts: [
          { text: "Write a 200-word personal statement: how has your understanding of grammar as a stylistic tool changed through this unit? Give two specific examples of how you have noticed grammar creating effects in texts you have read or written.", type: "box" as const },
          { text: "Design a brief 'Grammar for Effect' reference card for another student: list the five syntactic techniques you think are most important to understand, with a definition and example of each.", type: "box" as const },
          { text: "Set yourself three specific goals for developing your grammatical awareness as a reader and writer over the next month.", type: "lines" as const, lines: 5 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Syntax and Power",
        content: "Grammar is never neutral. The rules of 'correct' grammar were often set by those in power to reinforce their authority. Think about a form of language — a dialect, a creole, a slang, an online register — that is dismissed as 'incorrect' by standard grammar. What would it mean to take its grammar seriously as a fully functional, expressive, rule-governed system? Who decides what counts as correct, and why?",
      },
      {
        type: "fill-in-blank" as const,
        title: "Clause Types: Fill the Gap",
        instruction: "Complete each sentence using the correct clause type term: [noun clause, adverbial clause, relative clause, independent clause].",
        parentTip: "Clause identification is a foundational skill for understanding complex sentence construction.",
        sentences: [
          { text: "A ___ modifies a noun and often begins with 'who', 'which', or 'that'.", blanks: ["relative clause"] },
          { text: "An ___ modifies a verb and tells us when, where, why, or how something happened.", blanks: ["adverbial clause"] },
          { text: "A ___ functions as a noun within a sentence and often begins with 'that', 'what', or 'whether'.", blanks: ["noun clause"] },
          { text: "An ___ can stand alone as a complete sentence.", blanks: ["independent clause"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar in Memoir",
        instruction: "Memoir writers use syntax to recreate the experience of remembering — fragmented, associative, layered.",
        prompts: [
          { text: "Write a short memoir paragraph (100–120 words) about a vivid memory, using fragmented and cumulative sentences deliberately to recreate the feeling of remembering.", type: "box" as const },
          { text: "Annotate your paragraph: underline any deliberate syntactic choices and note the intended effect.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Grammar Myths: True or False?",
        instruction: "Some common grammar 'rules' are actually myths. Decide which of these are true and which are myths.",
        parentTip: "Use this as a discussion starter — many of these 'rules' were invented in the 18th century.",
        statements: [
          { text: "You should never start a sentence with 'And' or 'But'.", answer: false },
          { text: "Splitting an infinitive (e.g. 'to boldly go') is always a grammatical error.", answer: false },
          { text: "A sentence must have both a subject and a verb.", answer: true },
          { text: "You should never end a sentence with a preposition.", answer: false },
          { text: "Parallelism means using the same grammatical form for items in a list or series.", answer: true },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Identifying Parallelism",
        instruction: "Choose the sentence that uses parallel structure correctly.",
        questions: [
          {
            prompt: "Which sentence uses correct parallel structure?",
            options: [
              "She likes reading, to write, and the study of poetry.",
              "She likes reading, writing, and studying poetry.",
              "She likes to read, writing, and the study of poetry.",
              "She likes to read, writing, and studied poetry.",
            ],
            answer: "She likes reading, writing, and studying poetry.",
          },
          {
            prompt: "Parallelism is important in writing because:",
            options: [
              "It makes sentences shorter",
              "It creates rhythm, balance, and clarity",
              "It always requires the use of conjunctions",
              "It removes ambiguity about the subject",
            ],
            answer: "It creates rhythm, balance, and clarity",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Varying Sentence Openings",
        content: "One of the easiest ways to improve the rhythm of your prose is to vary how you begin sentences. Instead of always starting with the subject, try beginning with: an adverbial phrase ('In the silence of the morning...'), a participial phrase ('Having read the letter twice...'), or a subordinate clause ('Although she disagreed...'). Variety in sentence openings creates flow and signals a sophisticated writer.",
      },
      {
        type: "open-response" as const,
        title: "Tense and Syntax in Narrative",
        instruction: "The choice of tense is a major syntactic decision in narrative writing.",
        prompts: [
          { text: "Write the same event twice: first in past tense, then in present tense. (3–4 sentences each) How does the tense change the feeling of the narrative?", type: "box" as const },
          { text: "Which tense do you prefer for this event? Why? Consider: immediacy, distance, reliability, and the effect on the reader.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Recognise the Clause",
        instruction: "For each sentence, circle which type of clause is underlined.",
        questions: [
          {
            prompt: "'The novel, which was published in 1984, remains influential.' — The clause 'which was published in 1984' is:",
            options: ["An adverbial clause", "A relative clause", "A noun clause", "An independent clause"],
          },
          {
            prompt: "'Because the evidence was compelling, the jury reached a verdict quickly.' — 'Because the evidence was compelling' is:",
            options: ["A relative clause", "An adverbial clause", "A noun clause", "An independent clause"],
          },
          {
            prompt: "'What she said surprised everyone.' — 'What she said' is functioning as:",
            options: ["A relative clause", "An adverbial clause", "A noun clause", "An adjective clause"],
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "The Grammar of Argument",
        instruction: "The syntax of an argument shapes how convincing it feels. The ordering of claims, evidence, and concessions is a grammatical as well as a logical choice.",
        parentTip: "Connect this to the structure of essays your student is writing in other areas.",
        prompts: [
          { text: "Write a paragraph arguing a position you hold on any issue. Then analyse: where did you place your strongest claim? How did your clause structure signal concession or qualification? How did syntax support your argument?", type: "box" as const },
          { text: "Rewrite the paragraph, placing the same ideas in a different syntactic order. What changes? Which version is more persuasive and why?", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar: Exploring a Writer's Style",
        instruction: "Choose one home activity to explore syntax through a writer you admire.",
        suggestions: [
          "Choose any novelist, essayist, or journalist whose writing you admire. Read 2–3 pages of their work and write a 300-word stylistic profile: describe their characteristic syntax (sentence length, sentence types, punctuation habits, use of fragments, use of parallelism) and explain how it creates their distinctive voice.",
          "Take a piece of your own writing and do a 'syntax audit': classify every sentence by type (simple, compound, complex, compound-complex) and length. What patterns do you notice? How could varying your syntax improve your writing? Write a 200-word reflection and then revise one paragraph.",
          "Compare the syntax of two different translations of the same poem or short passage. What syntactic choices has each translator made? Write 300 words exploring how syntax shapes meaning in translation.",
        ],
      },
      {
        type: "open-response" as const,
        title: "Extending Your Syntactic Range",
        instruction: "The most effective writers have a wide syntactic range — they can move between registers, sentence types, and rhythms as the moment demands.",
        parentTip: "This is a culminating activity that brings together all the syntactic techniques from this worksheet.",
        prompts: [
          { text: "Write a 200-word passage on any topic that deliberately demonstrates at least five different syntactic techniques. After writing, annotate each technique you have used.", type: "box" as const },
          { text: "Which technique was hardest to use naturally? Which came most easily? What does this tell you about your current strengths and areas for growth as a writer?", type: "lines" as const, lines: 4 },
          { text: "Write one sentence that you are genuinely proud of — a sentence that uses syntax to create exactly the effect you intended. Explain your choice.", type: "lines" as const, lines: 3 },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: One Perfect Sentence",
        content: "Choose one sentence from any text you have ever loved — a sentence that feels perfect. Why is it perfect? Is it the rhythm? The surprise? The clarity? The image? Could you ever write a sentence as good? What would you need to learn first?",
      },
      {
        type: "matching" as const,
        title: "Punctuation: Match to Effect",
        instruction: "Match each punctuation mark to the stylistic effect it most commonly creates.",
        parentTip: "Remind students that punctuation is a rhythmic and rhetorical tool, not just a grammatical one.",
        left: ["Em dash (—)", "Ellipsis (...)", "Colon (:)", "Semicolon (;)", "Parentheses ( )"],
        right: [
          "Links two equal related ideas; creates balance",
          "Introduces what follows; builds anticipation",
          "Trails off; suggests the unspoken or unknown",
          "Interrupts; adds emphasis or an aside",
          "Inserts a supplementary comment or aside",
        ],
      },
      {
        type: "open-response" as const,
        title: "Syntax in Visual Texts",
        instruction: "Visual texts also have a kind of syntax — the order and arrangement of elements (images, headings, captions) creates meaning.",
        prompts: [
          { text: "Choose an advertisement, magazine cover, or website homepage. Describe its 'visual syntax': what appears first, what is most prominent, what is small or marginal? How does the order and arrangement of elements create meaning?", type: "box" as const },
          { text: "How does the written text in this visual text (headline, slogan, caption) use syntax to reinforce or contrast with the visual layout?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "true-false" as const,
        title: "Punctuation and Voice",
        instruction: "Decide whether each statement about punctuation and voice is true or false.",
        statements: [
          { text: "A dash mid-sentence always indicates an error or informal writing.", answer: false },
          { text: "Heavy use of exclamation marks in formal prose can undermine a writer's authority.", answer: true },
          { text: "A colon can introduce a list, an explanation, or a quotation.", answer: true },
          { text: "Semicolons are used to join two unrelated independent clauses.", answer: false },
          { text: "Strategic use of white space and paragraph breaks is a form of syntactic choice.", answer: true },
        ],
      },
      {
        type: "open-response" as const,
        title: "Syntax: Consolidation and Personal Response",
        instruction: "Bring together your learning about grammar for effect in a personal and analytical response.",
        parentTip: "This final reflective task is ideal for an end-of-unit portfolio piece.",
        prompts: [
          { text: "Write 150–200 words explaining what 'grammar for effect' means to you now. How has your understanding developed through this worksheet? Give specific examples of techniques you can now use deliberately.", type: "box" as const },
          { text: "Write a short paragraph (80–100 words) on any topic, using grammar as a deliberate creative tool. Annotate every syntactic choice.", type: "box" as const },
          { text: "What is the single most important insight you have gained about language and grammar as a writer? Express it in one carefully crafted sentence.", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "multiple-choice" as const,
        title: "Grammar for Effect: Final Review",
        instruction: "Test your understanding with these final review questions.",
        parentTip: "Use this as an oral quiz — ask students to justify their answers with examples.",
        questions: [
          {
            prompt: "A sentence that uses only coordinating conjunctions ('and', 'but', 'or') to link clauses is called:",
            options: ["A complex sentence", "A compound sentence", "A compound-complex sentence", "A periodic sentence"],
            answer: "A compound sentence",
          },
          {
            prompt: "Which of the following is an example of anaphora?",
            options: [
              "It was the best of times; it was the worst of times.",
              "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.",
              "To be or not to be, that is the question.",
              "All animals are equal, but some animals are more equal than others.",
            ],
            answer: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.",
          },
          {
            prompt: "Nominalisation is the process of:",
            options: [
              "Turning a verb or adjective into a noun form",
              "Placing the subject after the verb",
              "Using passive voice throughout a text",
              "Omitting all conjunctions from a sentence",
            ],
            answer: "Turning a verb or adjective into a noun form",
          },
        ],
      },
      {
        type: "tip" as const,
        title: "Tip: Reading Like a Writer",
        content: "The best way to expand your syntactic range is to read like a writer: don't just read for story or information, but pause on sentences that affect you and ask 'how did they do that?' Copying out effective sentences by hand, imitating them with different content, and then reflecting on what you learned is one of the oldest and most effective methods of developing as a writer.",
      },
      {
        type: "open-response" as const,
        title: "Sentence Variety: Final Demonstration",
        instruction: "Demonstrate your syntactic range by writing five sentences, each using a different structure, all on the same topic.",
        prompts: [
          { text: "Choose any topic. Write: (1) a simple declarative sentence, (2) a compound sentence, (3) a complex sentence beginning with a subordinate clause, (4) a periodic sentence, and (5) a deliberate fragment for effect.", type: "box" as const },
          { text: "Read all five sentences aloud. How does each one feel different? What does each one emphasise or de-emphasise?", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Grammar: Lifelong Reading Habit",
        instruction: "Choose one ongoing reading activity to sustain your syntactic awareness.",
        parentTip: "These activities are designed to be ongoing habits, not one-off tasks.",
        suggestions: [
          "Start a 'Sentence Collection' notebook: whenever you read a sentence that strikes you as syntactically brilliant, copy it in and annotate why it works. Aim for 5 new sentences per week for the next month.",
          "Each week for the next month, write one page of imitation prose: choose a writer whose syntax you want to develop and imitate their style on a topic of your choosing. At the end of the month, compare all four pages and write a reflection on how your syntactic range has grown.",
          "Read one non-fiction essay per week for the next month (essays by writers such as Joan Didion, James Baldwin, George Orwell, or contemporary essayists). After each essay, write 200 words specifically about the syntax — what techniques does the essayist use, and how do they create their distinctive voice?",
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: The Last Sentence",
        content: "Many novelists have said that they write the last sentence of a book first — knowing where they are going gives them direction. The last sentence is often the most carefully crafted syntactic moment in a novel. Think about the last lines of any book you have loved. Why does the syntax feel right for an ending? Now write what you imagine might be the last sentence of your own future novel.",
      },
      {
        type: "open-response" as const,
        title: "Grammar in Digital Communication",
        instruction: "Digital texts — social media posts, emails, text messages — have their own grammar conventions.",
        parentTip: "Discuss with your student how context determines what grammatical choices are appropriate.",
        prompts: [
          { text: "How does the grammar of a tweet or Instagram caption differ from the grammar of a formal essay? List at least four specific differences.", type: "lines" as const, lines: 5 },
          { text: "Is the grammar of digital communication 'bad grammar', or a separate register with its own rules? Argue your position in 150 words.", type: "box" as const },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Choose the More Effective Sentence",
        instruction: "Circle the sentence in each pair that uses syntax more effectively for the stated purpose.",
        questions: [
          {
            prompt: "For creating urgency in a thriller:",
            options: [
              "He ran down the alleyway because he was being chased by someone dangerous.",
              "He ran. Footsteps behind. Getting closer.",
            ],
          },
          {
            prompt: "For a formal analytical argument:",
            options: [
              "The author totally ignores the feelings of women characters.",
              "The author systematically marginalises the interiority of female characters, foregrounding male perspectives throughout.",
            ],
          },
          {
            prompt: "For an emotional speech:",
            options: [
              "We will not give up. We will keep fighting. We will win.",
              "We will not give up and we will keep fighting and we will win eventually.",
            ],
          },
        ],
      },
      {
        type: "fill-in-blank" as const,
        title: "Voice in Grammar: Complete the Transformation",
        instruction: "Rewrite each active sentence in passive voice by completing the transformation.",
        sentences: [
          { text: "'The committee approved the proposal.' In passive: 'The proposal ___ by the committee.'", blanks: ["was approved"] },
          { text: "'Scientists discovered a new species.' In passive: 'A new species ___ by scientists.'", blanks: ["was discovered"] },
          { text: "'The CEO announced the decision.' In passive voice omitting the agent: 'The decision ___.'", blanks: ["was announced"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Grammar: Peer Teaching",
        instruction: "The best way to consolidate knowledge is to teach it to someone else.",
        parentTip: "This is an excellent activity for siblings or co-op settings.",
        prompts: [
          { text: "Choose one syntactic technique you now understand well. Write a short, clear explanation of it (including definition, example, and effect) that you could use to teach it to another student.", type: "box" as const },
          { text: "Write a practice question for that technique that another student could answer.", type: "lines" as const, lines: 4 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Syntax: Extended Writing Reflection",
        instruction: "A final reflection on your growth as a writer who thinks consciously about grammar.",
        parentTip: "Keep this reflection as a record of where your student was at the end of Year 10 English — it makes a valuable comparative piece in Year 11 and 12.",
        prompts: [
          { text: "Before this unit, how did you think about grammar in your own writing? How has your thinking changed?", type: "box" as const },
          { text: "Write a 'grammar manifesto': a short personal statement (100–150 words) about how you want to use grammar and syntax as a writer. What principles will guide your choices? What techniques do you most want to develop?", type: "box" as const },
        ],
      },
      {
        type: "spark" as const,
        title: "Spark: Grammar and Freedom",
        content: "Knowing the rules deeply means you can break them with intention. Think of a moment in music, art, sport, or cooking where breaking a convention created something extraordinary. What rule was broken, and why did it work? Now think about grammar: which rule would you most like to break deliberately in your next piece of writing, and what effect are you hoping to create?",
      },
    ],
  },
];

export function getYear10EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year10EnglishWorksheets.find((ws) => ws.slug === slug);
}
