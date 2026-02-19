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
        title: "Spark: The Ethics of Persuasion",
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
        "Media literacy is something both of you can practise together. If you come across a claim in the news that seems surprising, try applying SIFT with your student. Your genuine uncertainty about a source is a useful model — it shows that evaluation is an ongoing practice, not a one-time skill.",
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
        title: "Spark: Your Voice in the World",
        content: "Think about the issues in the world that most concern you. Where do you want your voice to be heard? In what contexts — political, social, educational, creative — do you want to be able to speak persuasively and with authority? Write 200 words about the relationship between your development as an oral communicator and the kind of person you want to be in the world.",
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
    ],
  },
];

export function getYear10EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year10EnglishWorksheets.find((ws) => ws.slug === slug);
}
