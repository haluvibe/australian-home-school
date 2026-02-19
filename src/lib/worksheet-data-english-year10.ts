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
      {
        type: "matching" as const,
        title: "Rhetorical Devices to Examples",
        instruction:
          "Match each rhetorical device on the left to the example that best illustrates it on the right.",
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
        type: "open-response" as const,
        title: "Analysing a Passage",
        instruction:
          "Read the following extract and answer the questions below.\n\n'We did not choose this crisis. We did not cause this crisis. But we — every single one of us — will live with its consequences unless we act now. Ask yourself: what will you tell your children when they ask what you did? History is watching. The future is listening.'",
        prompts: [
          {
            text: "Identify two specific rhetorical devices in the extract. Name each device, quote the example, and explain its intended effect.",
            type: "box" as const,
          },
          {
            text: "Which of Aristotle's three appeals (ethos, pathos, logos) is most dominant in this extract? Justify your answer with evidence.",
            type: "lines" as const,
            lines: 4,
          },
          {
            text: "Who do you think the intended audience is, and how do the rhetorical choices reflect that audience?",
            type: "lines" as const,
            lines: 3,
          },
        ],
      },
      {
        type: "sorting" as const,
        title: "Aristotle's Three Appeals",
        instruction:
          "Sort each example into the appeal it primarily uses. Some examples may feel like they overlap — choose the dominant appeal and be ready to explain your reasoning.",
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
        type: "sequence" as const,
        title: "Building a Persuasive Argument",
        instruction:
          "The steps below describe a strong persuasive essay structure, but they are out of order. Number them 1-6 to show the most logical sequence.",
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
        type: "open-response" as const,
        title: "Write Your Own Rhetorical Moment",
        instruction:
          "Choose a topic you feel strongly about. Write a single persuasive paragraph (around 100-150 words) that deliberately includes at least two rhetorical devices from the lesson.",
        prompts: [
          {
            text: "Your persuasive paragraph:",
            type: "box" as const,
          },
          {
            text: "Label the rhetorical devices you used and explain the effect you intended for each.",
            type: "lines" as const,
            lines: 4,
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhetoric in the Wild",
        instruction:
          "Look for rhetoric outside the classroom this week.",
        suggestions: [
          "Watch a political speech, a TED Talk, or a charity advertisement. Write down three specific language choices the speaker makes and analyse the intended effect of each.",
          "Find an opinion column in a newspaper or online. Highlight examples of ethos, pathos and logos. Which appeal dominates? Is the argument strengthened or weakened by this choice?",
          "Record yourself giving a 1-minute spontaneous speech on a topic you care about. Play it back. Which rhetorical devices did you use naturally, without thinking about it?",
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
      {
        type: "matching" as const,
        title: "Literary Devices: From Label to Effect",
        instruction:
          "Match each literary device on the left to the analytical statement about its effect on the right.",
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
        type: "open-response" as const,
        title: "Annotating an Extract",
        instruction:
          "Read the following poem extract and respond to each prompt.\n\n'The house breathes in. The furniture\nhas learned to wait. Each room\nholds its question like a held breath.\nWho will come back through the door\nthis time? Or: will anyone?'",
        prompts: [
          {
            text: "Identify two literary devices in this extract. For each, quote the relevant words and explain the effect they create.",
            type: "box" as const,
          },
          {
            text: "How does the use of enjambment (the run-on lines) contribute to the mood of the extract?",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "What is the cumulative effect of the extract as a whole? Write one analytical sentence that makes an argument about what the poem is doing.",
            type: "lines" as const,
            lines: 3,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "The 'So What' Question",
        instruction:
          "For each of the following analytical observations, write a follow-up 'so what' sentence that explains the significance or effect.",
        prompts: [
          {
            text: "The author uses short, fragmented sentences throughout this chapter. So what?",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "The narrator describes the landscape in the same words used earlier for the protagonist's childhood home. So what?",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "The poem shifts from first person to second person in the final stanza. So what?",
            type: "lines" as const,
            lines: 3,
          },
        ],
      },
      {
        type: "open-response" as const,
        title: "Extended Close Analysis",
        instruction:
          "Choose a paragraph or stanza from a text you are currently studying. Write a close reading of at least 200 words, analysing how at least three literary devices contribute to the overall meaning and aesthetic effect of the passage.",
        prompts: [
          {
            text: "Title and author of the text, and the passage you have chosen (quote or summarise it here):",
            type: "lines" as const,
            lines: 3,
          },
          {
            text: "Your close analysis (200 words minimum):",
            type: "box" as const,
          },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Reading as a Writer",
        instruction:
          "Choose one activity to develop your close reading practice outside the worksheet.",
        suggestions: [
          "Choose a paragraph from your favourite book. Copy it out by hand, slowly. Then write a paragraph analysing why you think the author made three specific choices.",
          "Find a poem you have never read before. Read it three times: once for the overall impression, once for specific devices, once for what you still do not understand. Write about what changed between readings.",
          "Read a one-star review and a five-star review of the same book. How do the two reviewers describe the same features of the text differently? What does this tell you about the relationship between text and reader?",
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
        instruction:
          "Choose one of these activities to practise comparative thinking outside the worksheet.",
        suggestions: [
          "Find two songs on the same subject (love, war, home). Write a 200-word comparison that uses at least two pivot statements and makes a claim about what the differences reveal.",
          "Watch two film adaptations of the same book or story. Choose one scene that each film handles very differently. Analyse: what does each director's choice suggest about their interpretation of the source material?",
          "Read a news report and an opinion column about the same event. Compare how each text represents the same facts. What choices distinguish them? What do those choices suggest about each text's purpose and audience?",
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
        instruction:
          "Choose one activity to develop your essay writing practice.",
        suggestions: [
          "Choose a prompt from a past Year 10 or Year 11 English exam. Set a timer for 45 minutes and write a complete essay response under timed conditions. Then review: what would you change if you had more time?",
          "Take an essay you have already written. Find the body paragraph you are least satisfied with. Rewrite it using the TEAL structure. Compare the two versions.",
          "Find a published literary essay (try JSTOR or Google Scholar for a short one). Identify: the thesis, the evidence in each paragraph, and the analytical moves the writer makes. Write a half-page reflection on one technique you want to borrow.",
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
        instruction:
          "Choose one research activity to practise source evaluation in the real world.",
        suggestions: [
          "Choose a topic you are currently studying in any subject. Find three different sources on it — try to include one academic, one journalistic, and one non-traditional source. Evaluate all three using the CRAAP criteria. Which would you use in an essay, and which would you reject?",
          "Next time you read something online that surprises you, apply the SIFT framework before sharing or accepting it. Write a short reflection on what you found.",
          "Find a Wikipedia article on a topic you know well. Click through to three of its cited sources. How well does the Wikipedia article represent those sources? Are there any claims that are not supported by the citations?",
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
        instruction:
          "Choose one activity to practise oral argument skills this week.",
        suggestions: [
          "Listen to a podcast or radio program where people discuss a controversial topic (suggestions: The Philosophers Zone, Background Briefing on ABC RN, or any debate program). Write down three discussion moves you heard — when did a speaker acknowledge a counterpoint? When did they use specific evidence? When did they summarise?",
          "Deliver your 3-minute presentation to another family member, a friend, or just to a camera. Watch it back. Focus on: Did you use evidence specifically? Did you look up from your notes? Was your opening strong?",
          "Choose a topic you feel strongly about and argue the opposite position for 2 minutes. This is called 'steelmanning' an argument. Reflect: did engaging seriously with the other side change your thinking at all?",
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
        instruction:
          "Choose one activity to explore grammar as a stylistic tool outside the worksheet.",
        suggestions: [
          "Find a paragraph from a book, article or speech that you find particularly well-written. Copy it out by hand. Then analyse: what specific grammatical choices make it work? Write a 150-word analysis.",
          "Take a paragraph you have written yourself and deliberately rewrite it to experiment with sentence length, passive/active voice, and sentence type. Which version do you prefer, and why?",
          "Listen to a podcast, radio program or speech and notice how the speaker varies their sentence structure. When do they use short punchy sentences? When do they use longer, more complex constructions? Write a reflection on what you noticed.",
        ],
      },
    ],
  },
];

export function getYear10EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year10EnglishWorksheets.find((ws) => ws.slug === slug);
}
