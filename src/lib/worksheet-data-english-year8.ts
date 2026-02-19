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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "true-false",
        title: "Positioning Basics",
        instruction: "Decide whether each statement about how texts position readers is true or false.",
        parentTip: "Work through these together before moving to harder activities — they establish the key vocabulary.",
        statements: [
          { text: "Every text positions readers in some way, even if the author does not intend it.", answer: true },
          { text: "Connotation refers only to the dictionary definition of a word.", answer: false },
          { text: "Word choice is one of the main tools authors use to position readers.", answer: true },
          { text: "Omitting information from a text is a neutral act with no effect on the reader.", answer: false },
          { text: "A text can use first-person point of view to create a sense of intimacy with the reader.", answer: true },
        ],
      },
      {
        type: "multiple-choice",
        title: "Connotation: Positive or Negative?",
        instruction: "Choose whether each underlined word carries a positive or negative connotation in the sentence.",
        parentTip: "Remind your student that connotation is about emotional weight, not just meaning.",
        questions: [
          { prompt: "The politician gave a passionate speech about education.", options: ["Positive", "Negative", "Neutral"], answer: "Positive" },
          { prompt: "The politician gave a ranting speech about education.", options: ["Positive", "Negative", "Neutral"], answer: "Negative" },
          { prompt: "The company made a modest profit last year.", options: ["Positive", "Negative", "Neutral"], answer: "Positive" },
          { prompt: "The company made a paltry profit last year.", options: ["Positive", "Negative", "Neutral"], answer: "Negative" },
          { prompt: "She was described as a focused student.", options: ["Positive", "Negative", "Neutral"], answer: "Positive" },
        ],
      },
      {
        type: "matching",
        title: "Technique Names and Definitions",
        instruction: "Match each positioning technique on the left to its correct definition on the right.",
        parentTip: "These are the core terms your student will use throughout this worksheet and in essay writing.",
        left: ["Connotation", "Foregrounding", "Omission", "Appeal to values", "Point of view"],
        right: [
          "The emotional weight a word carries beyond its literal meaning",
          "Placing something prominent at the beginning to signal importance",
          "Leaving out information that would complicate the text's argument",
          "Aligning an argument with beliefs the audience already holds",
          "The perspective from which a text is told (first, second, or third person)",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Technique Vocabulary",
        instruction: "Fill in the blanks using the words in the box: connotation, foregrounding, omission, position, denotation.",
        parentTip: "If your student is unsure, encourage them to use context clues from surrounding words.",
        sentences: [
          { text: "A word's dictionary meaning is called its ___, while its emotional weight is its ___.", blanks: ["denotation", "connotation"] },
          { text: "When an author places important information at the very start of a text, this is called ___.", blanks: ["foregrounding"] },
          { text: "Deliberately leaving out information is a technique called ___.", blanks: ["omission"] },
          { text: "When a writer uses language to guide you toward a particular viewpoint, they ___ you as a reader.", blanks: ["position"] },
        ],
      },
      {
        type: "multiple-choice",
        title: "Headline Comparison",
        instruction: "Two headlines describe the same event. Choose the answer that best explains the difference.",
        questions: [
          {
            prompt: "Headline A: 'Protestors Block City Streets.' Headline B: 'Citizens March for Change.' What is the key difference in how these headlines position the reader?",
            options: [
              "Headline A is more factual and Headline B is opinion",
              "Headline A positions protestors as disruptive; Headline B positions them as civic-minded",
              "Headline B is longer so it contains more information",
              "There is no meaningful difference between the two",
            ],
            answer: "Headline A positions protestors as disruptive; Headline B positions them as civic-minded",
          },
          {
            prompt: "Which technique is primarily at work in choosing 'Block' versus 'March'?",
            options: ["Omission", "Point of view", "Word connotation", "Foregrounding"],
            answer: "Word connotation",
          },
          {
            prompt: "A headline reads: 'Brave Firefighters Save Dog from Blaze.' What value does the headline appeal to?",
            options: ["Political loyalty", "Compassion and heroism", "Financial prudence", "Academic achievement"],
            answer: "Compassion and heroism",
          },
        ],
      },
      {
        type: "open-response",
        title: "Connotation Analysis",
        instruction: "For each pair of words below, explain how they differ in connotation (emotional weight), even though they share a similar meaning.",
        parentTip: "Encourage your student to think of real sentences where each word might be used — context reveals connotation clearly.",
        prompts: [
          { text: "Compare 'determined' and 'stubborn'. What feeling does each create about the person being described?", type: "lines", lines: 3 },
          { text: "Compare 'frugal' and 'stingy'. Which is positive, which is negative, and how do you know?", type: "lines", lines: 3 },
          { text: "Compare 'young' and 'immature'. When might a writer choose one over the other to position a reader?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Connotation",
        instruction: "Sort the following words into Positive, Negative, or Neutral connotation columns.",
        parentTip: "Some words may feel context-dependent — discuss those together rather than trying to force a single answer.",
        columns: ["Positive", "Negative", "Neutral"],
        items: [
          { label: "slender" },
          { label: "gaunt" },
          { label: "thin" },
          { label: "courageous" },
          { label: "reckless" },
          { label: "bold" },
          { label: "thrifty" },
          { label: "miserly" },
          { label: "economical" },
        ],
      },
      {
        type: "true-false",
        title: "Point of View and Positioning",
        instruction: "Decide whether each statement about point of view is true or false.",
        parentTip: "Point of view is one of the subtler positioning tools — these statements will surface misconceptions early.",
        statements: [
          { text: "First-person narration always means the narrator is telling the truth.", answer: false },
          { text: "Third-person narration can still be biased depending on which character's perspective is centred.", answer: true },
          { text: "Second-person narration (using 'you') can directly involve and position the reader.", answer: true },
          { text: "A text written in third person is always more reliable than one in first person.", answer: false },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identifying Foregrounding",
        instruction: "Read each extract and identify what has been foregrounded.",
        questions: [
          {
            prompt: "'Despite record profits, the company announced 300 redundancies.' What has been foregrounded, and why might this choice be significant?",
            options: [
              "The record profits — to make the company look good",
              "The redundancies — placing bad news first makes the company appear responsible",
              "The word 'despite' — to show contrast",
              "Nothing has been deliberately foregrounded",
            ],
            answer: "The redundancies — placing bad news first makes the company appear responsible",
          },
          {
            prompt: "'Hardworking teachers are being abandoned by a system that no longer values them.' What is foregrounded here?",
            options: ["The system", "The teachers' hard work and victimhood", "Education policy", "Student outcomes"],
            answer: "The teachers' hard work and victimhood",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Analysing an Opinion Extract",
        instruction: "Read the extract, then complete the analysis sentences.\n\n\"Once again, the council has failed our families. While bureaucrats enjoy their comfortable salaries, hard-working residents are left to navigate crumbling footpaths and parks choked with weeds.\"",
        parentTip: "Read the extract aloud first. The dramatic language is doing most of the work here.",
        sentences: [
          { text: "The word 'bureaucrats' positions the council workers as ___ and out of touch.", blanks: ["distant / uncaring"] },
          { text: "The phrase 'our families' uses the pronoun 'our' to ___ the reader with the writer.", blanks: ["align / bond"] },
          { text: "The word 'crumbling' is an example of ___ connotation.", blanks: ["negative"] },
        ],
      },
      {
        type: "open-response",
        title: "Analysing a Text That Positions Readers",
        instruction: "Read the following extract and answer the questions.\n\n\"Once again, the council has failed our families. While bureaucrats enjoy their comfortable salaries, hard-working residents are left to navigate crumbling footpaths and parks choked with weeds. It is time for ordinary people to demand better.\"",
        parentTip: "Read the extract aloud together first. The dramatic tone is deliberate — help your student identify exactly which words are doing the heavy lifting.",
        prompts: [
          { text: "Identify two words or phrases with strong negative connotations and explain their effect on the reader.", type: "lines", lines: 4 },
          { text: "Who does this writer position as the 'good' side and who as the 'bad' side? What language creates that division?", type: "lines", lines: 4 },
          { text: "What information might be missing from this extract that could change how we feel about the situation?", type: "lines", lines: 3 },
          { text: "Rewrite the final sentence to position readers to feel sympathetic toward the council instead.", type: "box" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Word Positions Readers More Strongly?",
        instruction: "In each pair, circle the word that more strongly positions the reader in a negative direction.",
        questions: [
          { prompt: "Describing someone who spends public money:", options: ["invested", "squandered"] },
          { prompt: "Describing a group's behaviour at a protest:", options: ["assembled", "swarmed"] },
          { prompt: "Describing a politician's speech:", options: ["delivered", "rambled"] },
          { prompt: "Describing a company's decision:", options: ["chose", "exploited"] },
        ],
      },
      {
        type: "true-false",
        title: "Omission as a Technique",
        instruction: "Consider how omission works in texts and decide if each statement is true or false.",
        parentTip: "Omission is one of the hardest techniques to spot because, by definition, what is omitted is not there. Discuss: how do you notice what is absent?",
        statements: [
          { text: "Omitting the other side of an argument can make a text feel more persuasive.", answer: true },
          { text: "Readers can only be positioned by what is explicitly stated in a text.", answer: false },
          { text: "A news report that quotes only one expert is using omission as a form of positioning.", answer: true },
          { text: "Omission is always deliberate and always dishonest.", answer: false },
        ],
      },
      {
        type: "multiple-choice",
        title: "Appeal to Values",
        instruction: "Identify which value each text extract appeals to.",
        questions: [
          {
            prompt: "'Our grandparents built this country — we owe it to them to protect what they created.'",
            options: ["Individual freedom", "Respect for tradition and heritage", "Environmental responsibility", "Economic growth"],
            answer: "Respect for tradition and heritage",
          },
          {
            prompt: "'Every child deserves a fair start in life, regardless of their postcode.'",
            options: ["National security", "Fairness and equality", "Environmental responsibility", "Individual achievement"],
            answer: "Fairness and equality",
          },
          {
            prompt: "'Supporting local businesses keeps money in our community and strengthens the bonds between neighbours.'",
            options: ["Global trade", "Community belonging", "Individual freedom", "Academic excellence"],
            answer: "Community belonging",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Connotation Is the Foundation",
        content: "When analysing how a text positions readers, always start with word choice. Connotation is the most immediate and powerful positioning tool. Ask: what is the emotional weight of this word? Could the author have chosen a neutral word instead? If they chose a loaded one, ask why.",
      },
      {
        type: "open-response",
        title: "Rewriting to Reposition",
        instruction: "Rewrite the following paragraph to position the reader to feel sympathetic toward the company instead of critical of it. Keep the same basic facts.",
        parentTip: "This is a powerful exercise — students discover how completely tone can shift while facts stay the same.",
        prompts: [
          { text: "Original: 'The greedy corporation slashed jobs to boost shareholder profits, abandoning the workers who had dedicated years to its success.' Your rewrite:", type: "box" },
          { text: "List the specific word changes you made and explain each choice:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "home-activity",
        title: "Real-World Positioning Hunt",
        instruction: "Over the next two days, collect three real examples of texts that position their readers. These can come from news websites, advertisements, social media, or printed materials.",
        parentTip: "Do this activity together if possible — pointing out positioning in everyday media is one of the most valuable habits you can build together.",
        suggestions: [
          "Find one news headline and identify the key loaded word in it",
          "Find one advertisement and identify the value it appeals to",
          "Find one social media post that uses omission — what is it leaving out?",
          "Bring your examples back and discuss: which was the most effectively positioned, and why?",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Sentence Stems for Analysis",
        instruction: "Complete each analytical sentence stem about positioning techniques.",
        parentTip: "These sentence stems are useful templates for essay writing — encourage your student to use them in their own analytical paragraphs.",
        sentences: [
          { text: "The author uses the word '___ ' to position the reader to feel ___ toward the subject.", blanks: ["[word choice]", "[emotion]"] },
          { text: "By foregrounding ___, the writer signals that this is the most ___ aspect of the issue.", blanks: ["[information]", "important"] },
          { text: "The omission of ___ prevents the reader from ___.", blanks: ["[perspective]", "forming a balanced view"] },
          { text: "The appeal to the value of ___ is effective because the intended audience already ___.", blanks: ["[value]", "holds this belief"] },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Two Texts on the Same Topic",
        instruction: "Imagine you have read two short articles about a new park being built in a suburb. Article A is written by a residents' group supporting the park. Article B is written by a developer opposing it. Answer the questions below without needing to read the actual articles.",
        parentTip: "This is a thinking exercise — your student does not need the articles to reason through how each perspective would shape language choices.",
        prompts: [
          { text: "What words might Article A use to describe the park? What words might Article B use?", type: "lines", lines: 3 },
          { text: "Whose voices would each article be likely to include, and whose would they omit?", type: "lines", lines: 3 },
          { text: "What values would each article appeal to?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Point of View Effect",
        instruction: "Consider how point of view affects positioning in each case.",
        questions: [
          {
            prompt: "A story about a war is told in first person by a soldier. How does this affect the reader's positioning?",
            options: [
              "The reader remains completely objective",
              "The reader is positioned to sympathise with the soldier's experience",
              "The reader is positioned to criticise the soldier",
              "Point of view has no effect on reader positioning",
            ],
            answer: "The reader is positioned to sympathise with the soldier's experience",
          },
          {
            prompt: "An advertisement says 'You deserve the best.' Why does the use of 'you' (second person) position the reader effectively?",
            options: [
              "It makes the text seem more formal",
              "It directly involves the reader and flatters them",
              "It creates distance between the reader and the product",
              "It is more grammatically correct",
            ],
            answer: "It directly involves the reader and flatters them",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Who Controls the Story?",
        content: "Every text you read represents a set of choices made by someone with a particular perspective, agenda, or set of values. The question is not whether a text is biased — they all are, in some way — but whether you can identify how and why. Consider: if you were to write about the same topic, whose voice would you centre? What would you leave out? What does that tell you about your own positioning?",
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Your Own Positioning",
        instruction: "Choose a topic you have a genuine opinion about. Write a short paragraph (5–7 sentences) designed to position a reader to agree with your view. Then label the techniques you used.",
        parentTip: "This activity asks students to be the author, not just the analyst. Most students discover mid-draft that their language is more neutral than they intended — that discovery is the lesson.",
        prompts: [
          { text: "Write your positioning paragraph here:", type: "box" },
          { text: "Label at least two techniques you used (e.g. 'word connotation: I used X because...'):", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Analysing Point of View in a News Extract",
        instruction: "Read the extract below and analyse how point of view positions the reader.\n\n\"I watched the bulldozers arrive at six in the morning. My street, which I have lived on for thirty years, was suddenly unrecognisable. The council had not told us this would happen today. Nobody had asked us.\"",
        parentTip: "The power of first person is in the word 'I' — every sentence anchors the reader in the narrator's experience. Ask your student to count how many times a personal pronoun appears.",
        prompts: [
          { text: "How does the first-person point of view position the reader emotionally?", type: "lines", lines: 3 },
          { text: "Rewrite the first two sentences in third person. How does the effect change?", type: "lines", lines: 3 },
          { text: "What information about the council's perspective is omitted here?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identifying the Technique",
        instruction: "For each extract, identify the primary positioning technique being used.",
        parentTip: "Some extracts use multiple techniques — ask your student to name the dominant one and explain their choice.",
        questions: [
          {
            prompt: "'Our brave servicemen and women risk everything so that you can live freely.' What is the primary technique?",
            options: ["Omission", "Connotation", "Appeal to values (freedom and gratitude)", "Foregrounding"],
            answer: "Appeal to values (freedom and gratitude)",
          },
          {
            prompt: "'The Premier — who has faced three corruption investigations — announced new transparency measures today.' What is the primary technique?",
            options: ["Foregrounding the corruption history to undercut credibility", "Appeal to values", "Positive connotation", "Second-person point of view"],
            answer: "Foregrounding the corruption history to undercut credibility",
          },
          {
            prompt: "'Local heroes feed hundreds of families every week at the community kitchen.' What is the primary technique?",
            options: ["Omission", "Positive connotation ('heroes')", "Third-person point of view", "Negative foregrounding"],
            answer: "Positive connotation ('heroes')",
          },
        ],
      },
      {
        type: "open-response",
        title: "Analysing an Advertisement",
        instruction: "Consider a car advertisement with the tagline: 'Built for those who refuse to settle. Drive the future. Drive freedom.' Analyse how it positions the reader.",
        parentTip: "Advertisements are highly concentrated examples of positioning — every word has been chosen by a team of professionals. Treat them as sophisticated texts.",
        prompts: [
          { text: "What values does this advertisement appeal to, and how?", type: "lines", lines: 3 },
          { text: "What does the use of second-person ('those who refuse') do to the reader's sense of identity?", type: "lines", lines: 3 },
          { text: "What is omitted from this advertisement that a fully informed consumer would want to know?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Analytical Sentence Construction",
        instruction: "Complete each analytical sentence about reader positioning with a specific technique name and explanation.",
        sentences: [
          { text: "The author ___ the reader by using the word 'struggle' instead of the more neutral 'challenge'.", blanks: ["positions"] },
          { text: "By opening with the victim's story, the journalist ___ the audience to feel ___ toward them.", blanks: ["positions", "sympathetic"] },
          { text: "The absence of any comment from the accused is an example of ___, which creates the impression of guilt.", blanks: ["omission"] },
        ],
      },
      {
        type: "true-false",
        title: "Advanced Positioning Concepts",
        instruction: "Decide whether each statement is true or false.",
        statements: [
          { text: "A text can position readers through its structure as well as its word choices.", answer: true },
          { text: "Photographs and images in texts can position readers just as powerfully as words.", answer: true },
          { text: "Positioning techniques only work on readers who are uneducated or inexperienced.", answer: false },
          { text: "Recognising positioning means you must reject the argument being made.", answer: false },
          { text: "The same techniques used in opinion pieces are also used in literary fiction.", answer: true },
        ],
      },
      {
        type: "open-response",
        title: "Deconstructing a Social Media Post",
        instruction: "A social media post reads: 'Another week, another government handout to big corporations while small businesses struggle to survive. When will enough be enough? Share if you care.' Analyse it as a positioning text.",
        parentTip: "Social media posts are among the most concentrated examples of positioning — short, emotionally loaded, and designed to go viral. Ask: what does 'Share if you care' do?",
        prompts: [
          { text: "Identify the us-versus-them binary being constructed. Who is 'us'? Who is 'them'?", type: "lines", lines: 3 },
          { text: "How does 'When will enough be enough?' position the reader? What assumptions does it make?", type: "lines", lines: 3 },
          { text: "What does 'Share if you care' do? How does it use identity and social pressure to position the reader?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "The Effect of Structural Positioning",
        instruction: "Consider how the structure of a text (not just its words) positions readers.",
        parentTip: "Structure is invisible positioning — readers rarely notice that they read the opening more carefully than the end, or that a text never gives the opposition a voice.",
        prompts: [
          { text: "A news article puts the strongest argument for a proposal in the first three paragraphs and the counterarguments in the final paragraph. Why does this structure position the reader?", type: "lines", lines: 3 },
          { text: "A documentary film shows the lives of three affected families before showing any statistics or expert commentary. Why is this ordering a positioning choice?", type: "lines", lines: 3 },
          { text: "An essay uses a three-to-one ratio of paragraphs supporting its argument versus questioning it. What effect does this structure have?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match the Technique to the Example",
        instruction: "Match each positioning technique to the example text that best demonstrates it.",
        left: ["Connotation", "Omission", "Appeal to values", "Foregrounding", "Point of view"],
        right: [
          "'The demonstrators terrorised local businesses.' (loaded word choice)",
          "An article about a chemical spill that never quotes residents who live nearby",
          "'We must protect our children's future from those who would destroy it.'",
          "An article begins: 'Three children died last year due to inadequate road safety measures.'",
          "A memoir written in first person about fleeing a conflict zone",
        ],
      },
      {
        type: "tip",
        title: "Tip: Ask What Is Missing",
        content: "One of the most powerful questions you can ask of any text is: whose voice is absent? Every text makes choices about who gets to speak and whose experience is centred. A report about a neighbourhood development that quotes architects and council members but not residents is using omission to position you. Notice the silence.",
      },
      {
        type: "open-response",
        title: "Analysing a Political Speech Extract",
        instruction: "Read the extract and analyse how it positions the audience.\n\n\"For too long, the forgotten people of this nation have been ignored. The elites in their towers make decisions that destroy the lives of ordinary families — families like yours. Today, we say: enough. Today, we take back what is ours.\"",
        parentTip: "This is a classic populist positioning structure. Discuss together: why is the 'us versus them' pattern so effective in political language?",
        prompts: [
          { text: "Identify the 'us versus them' binary. What language constructs each side?", type: "lines", lines: 4 },
          { text: "How does the phrase 'families like yours' position the listener? What technique is this?", type: "lines", lines: 3 },
          { text: "What values does the extract appeal to, and how effectively?", type: "lines", lines: 3 },
          { text: "What is missing from this argument that a critical reader would want to know?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Creating an 'Us Versus Them' Text",
        instruction: "Write a short paragraph (5–7 sentences) on any topic that deliberately uses an 'us versus them' binary to position readers. Then label the techniques.",
        parentTip: "The goal is to understand the technique by using it — not to endorse the argument. Discuss together: how did it feel to write this way?",
        prompts: [
          { text: "Your paragraph:", type: "box" },
          { text: "Label at least three specific techniques (connotation, foregrounding, appeal to values, etc.):", type: "lines", lines: 4 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Positioning in Literature",
        instruction: "Consider how fictional texts position readers and choose the best answer.",
        questions: [
          {
            prompt: "A novel is narrated by a likeable, humorous character who does morally questionable things. How does this narration position the reader?",
            options: [
              "The reader is positioned to condemn the character's actions completely",
              "The reader is positioned to sympathise with the character despite their actions",
              "The reader remains completely objective",
              "The reader is positioned to feel nothing",
            ],
            answer: "The reader is positioned to sympathise with the character despite their actions",
          },
          {
            prompt: "An author describes a wealthy character's home in lavish, beautiful detail but describes a poor character's home in one bare sentence. What positioning technique is this?",
            options: ["Appeal to values", "Structural positioning through allocation of detail", "First-person point of view", "Tricolon"],
            answer: "Structural positioning through allocation of detail",
          },
        ],
      },
      {
        type: "open-response",
        title: "Positioning in a Novel You Are Reading",
        instruction: "Think about a novel, story, or film you have engaged with recently. Answer the questions below.",
        parentTip: "If your student is reading a set text, this activity connects the worksheet to their current study. If not, they can draw on a film or series they have watched.",
        prompts: [
          { text: "Whose perspective does the text centre, and how does this position the reader?", type: "lines", lines: 3 },
          { text: "Is there a character you are positioned to dislike? What language or techniques create that positioning?", type: "lines", lines: 3 },
          { text: "Is there any perspective in the text that you feel is missing or underrepresented?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Positioning in Advertising: Fill the Blanks",
        instruction: "Complete the analysis of this advertisement tagline: 'Protecting your family — because they deserve the best.'\n\nComplete the analytical sentences below.",
        sentences: [
          { text: "The tagline appeals to the value of ___, which most readers already hold.", blanks: ["family / protection"] },
          { text: "The phrase 'they deserve the best' uses ___ connotation to position the product as superior.", blanks: ["positive"] },
          { text: "The use of 'your family' is an example of ___ person point of view, which draws the reader in.", blanks: ["second"] },
        ],
      },
      {
        type: "open-response",
        title: "Analysing Imagery as Positioning",
        instruction: "Consider how images (photos, illustrations, film shots) position viewers — even without words. Answer the questions below.",
        parentTip: "Discuss a specific image together if possible — a news photograph, an advertisement, or a film still. Visual positioning is just as powerful as verbal positioning.",
        prompts: [
          { text: "How might a photograph of a politician surrounded by cheering crowds position viewers differently to one of the same politician sitting alone at a desk?", type: "lines", lines: 3 },
          { text: "Describe how a wildlife conservation advertisement might use imagery to position viewers emotionally.", type: "lines", lines: 3 },
          { text: "In a film, a villain is often shot from below (a low-angle shot) and a hero from above. What positioning effect does this camera angle choice create?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Positioned Every Day",
        content: "You are positioned by texts every single day — by the algorithm that selects your news feed, by the advertisements targeted at your age group, by the films your streaming service recommends. Awareness of positioning does not mean rejecting these texts. It means engaging with them on your own terms. What would you look for if you decided to notice positioning for just one day?",
      },
      {
        type: "true-false",
        title: "Positioning Across Text Types",
        instruction: "Decide whether each statement is true or false.",
        statements: [
          { text: "Only persuasive texts (like opinion pieces and advertisements) position readers.", answer: false },
          { text: "News journalism, despite aiming for objectivity, can still position readers through word choice.", answer: true },
          { text: "Literary fiction positions readers through narrative perspective, character sympathy, and language choice.", answer: true },
          { text: "Academic texts never position readers.", answer: false },
          { text: "A film's soundtrack can position the audience just as powerfully as its dialogue.", answer: true },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Counter-Positioning Paragraph",
        instruction: "You have been given a one-sided opinion piece arguing that screens are destroying childhood. Write a short counter-positioning paragraph (4–6 sentences) that uses the same techniques but reaches the opposite conclusion.",
        parentTip: "This exercise builds intellectual flexibility. The techniques are the same — the perspective changes. Discuss: does this exercise change how your student thinks about their own initial response to the argument?",
        prompts: [
          { text: "Your counter-positioning paragraph:", type: "box" },
          { text: "Identify two techniques you deliberately used and explain their effect:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Positioning and Responsibility",
        instruction: "Consider the ethics of positioning readers.",
        parentTip: "There are no simple answers here. The goal is to develop a thoughtful, nuanced position — not to reach a predetermined conclusion.",
        prompts: [
          { text: "Is all use of positioning techniques in texts ethically acceptable, or are some uses problematic? Explain your view.", type: "lines", lines: 4 },
          { text: "Where do you think the line is between persuasion and manipulation? Give an example of each.", type: "lines", lines: 4 },
          { text: "Should readers be taught to analyse positioning? Why or why not?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Positioning Through Selection of Statistics",
        instruction: "Consider how statistics can be used to position readers.",
        questions: [
          {
            prompt: "A politician says: 'Crime has fallen by 40% since our policies were introduced.' What would a critical reader want to know?",
            options: [
              "Nothing — statistics are always objective",
              "What types of crime? Over what time period? Compared to what baseline?",
              "Whether the politician is popular",
              "The names of the researchers who gathered the data",
            ],
            answer: "What types of crime? Over what time period? Compared to what baseline?",
          },
          {
            prompt: "An article states: '9 out of 10 dentists recommend this toothpaste.' What is missing from this claim?",
            options: [
              "The brand name",
              "How many dentists were surveyed, and what the question actually asked them",
              "The price of the toothpaste",
              "The country where the survey was conducted",
            ],
            answer: "How many dentists were surveyed, and what the question actually asked them",
          },
        ],
      },
      {
        type: "open-response",
        title: "Analysing a Charity Appeal",
        instruction: "A charity fundraising letter opens: 'Right now, as you read this letter, a child in this country is going to sleep hungry. You have the power to change that. Please act today.' Analyse how it positions the reader.",
        parentTip: "Charity appeals are highly sophisticated positioning texts. They use urgency, personalisation, and moral appeal simultaneously. Discuss: is this manipulative, or is it legitimate persuasion?",
        prompts: [
          { text: "What does 'Right now, as you read this letter' do to the reader? What technique is this?", type: "lines", lines: 3 },
          { text: "How does 'You have the power to change that' position the reader's sense of responsibility?", type: "lines", lines: 3 },
          { text: "What values does this appeal draw on, and how effectively?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Use the TEE Structure in Analysis",
        content: "When writing about positioning in an essay, use TEE: Technique, Example, Effect. Name the technique (e.g. negative connotation), provide a specific example from the text (quote the word or phrase), then explain the effect on the reader. This three-part structure ensures your analysis is always grounded in evidence and connected to the reader's experience.",
      },
      {
        type: "open-response",
        title: "Positioning and Identity",
        instruction: "Many texts position readers by appealing to their sense of identity — who they are, or who they want to be.",
        prompts: [
          { text: "An advertisement says: 'For people who think differently.' Who does this appeal to, and why is it effective?", type: "lines", lines: 3 },
          { text: "A political slogan says: 'Real Australians support our farmers.' What identity is being invoked, and what is the effect of the word 'real'?", type: "lines", lines: 3 },
          { text: "How might identity-based positioning be used irresponsibly? Give an example.", type: "lines", lines: 3 },
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full TEE Analysis Paragraph",
        instruction: "Write a full TEE (Technique, Example, Effect) analytical paragraph about how the following extract positions readers.\n\n\"Every night, thousands of exhausted nurses go home wondering if they gave enough. The government's answer? Another round of cuts. Another insult to those who save our lives.\"",
        parentTip: "A full TEE paragraph should be 6–8 sentences. The Effect section should be the longest — that is where the real analysis lives.",
        prompts: [
          { text: "Your full TEE paragraph:", type: "box" },
          { text: "Self-evaluate: did you name the technique, quote the example, and explain the effect in detail?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Positioning Across Two Texts",
        instruction: "Text A: 'The development will bring 500 new jobs and revitalise a neglected area.' Text B: 'The development will destroy the last green space in our suburb and displace a community that has called this place home for generations.' Both texts describe the same proposed development. Write a comparison of how each positions the reader.",
        parentTip: "The comparison should be integrated — discuss both texts within each analytical point rather than writing about one text, then the other.",
        prompts: [
          { text: "How does each text use connotation to frame the development?", type: "lines", lines: 4 },
          { text: "What does each text foreground, and what does each omit?", type: "lines", lines: 4 },
          { text: "Which text do you find more effectively positioned, and why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Balanced Text",
        instruction: "Write a short news article (6–8 sentences) about the development from the previous activity that attempts to present both perspectives fairly. Then reflect on whether true balance is achievable.",
        parentTip: "Discuss together: is a 'balanced' text really neutral? Even the choice of what to include and how to frame each side involves positioning decisions.",
        prompts: [
          { text: "Your balanced news article:", type: "box" },
          { text: "Reflect: even in trying to be balanced, what choices did you make that involved positioning?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Analysing Positioning in Literary Texts",
        instruction: "Consider how positioning works in literary fiction and choose the best answers.",
        questions: [
          {
            prompt: "In a novel, the protagonist is described in warm, detailed prose while the antagonist is described only through others' fearful reactions. What positioning effect does this create?",
            options: [
              "The reader is positioned to understand both characters equally",
              "The reader is positioned to identify with the protagonist and fear/distrust the antagonist",
              "The reader is positioned to feel sympathy for the antagonist",
              "The technique has no effect on reader positioning",
            ],
            answer: "The reader is positioned to identify with the protagonist and fear/distrust the antagonist",
          },
          {
            prompt: "An author ends a chapter with a cliffhanger that puts the protagonist in danger. How does this structural choice position the reader?",
            options: [
              "It positions the reader to feel bored",
              "It positions the reader to feel anxious and invested in the protagonist's survival",
              "It positions the reader to feel relief",
              "Structure does not position readers",
            ],
            answer: "It positions the reader to feel anxious and invested in the protagonist's survival",
          },
          {
            prompt: "A novel presents a morally complex situation from multiple characters' perspectives in successive chapters. How does this technique affect reader positioning?",
            options: [
              "It prevents the reader from forming any opinion",
              "It positions the reader to understand multiple viewpoints, complicating simple moral judgements",
              "It positions the reader to agree with the last perspective presented",
              "Multiple perspectives always result in confused writing",
            ],
            answer: "It positions the reader to understand multiple viewpoints, complicating simple moral judgements",
          },
        ],
      },
      {
        type: "open-response",
        title: "Positioning Through Genre Conventions",
        instruction: "Different genres carry expectations that position readers before they have read a single word. Consider how genre itself positions readers.",
        parentTip: "Genre positioning is largely unconscious — readers bring assumptions. Discuss: what assumptions do you bring to a crime novel versus a romance versus a science-fiction text?",
        prompts: [
          { text: "How does the label 'true story' on the cover of a book position readers differently to 'a novel'?", type: "lines", lines: 3 },
          { text: "A news article and a blog post can contain identical information. How might genre conventions position readers to trust one more than the other?", type: "lines", lines: 3 },
          { text: "How do genre expectations in horror films position the audience to feel fear before anything frightening happens?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Positioning and Cultural Context",
        instruction: "Positioning does not work the same way for all readers. Consider how cultural context affects the reception of positioning techniques.",
        prompts: [
          { text: "An advertisement uses an image of a sprawling Australian farm to sell bread. Who does this image position effectively, and who might it fail to reach?", type: "lines", lines: 3 },
          { text: "A text written for one cultural audience may inadvertently position readers from another culture in unintended ways. Give an example of how this might happen.", type: "lines", lines: 3 },
          { text: "As texts travel across cultures and time periods, why might their positioning effects change?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Long-Form Analysis: A Full Positioning Essay Plan",
        instruction: "Plan an essay responding to: 'How does the author of [your chosen text] use positioning techniques to guide the reader toward a particular interpretation of events?' You do not need to write the full essay — plan it thoroughly.",
        parentTip: "A good plan makes the essay easier to write. Spend as long on the plan as you would on a draft. Discuss: what is the most interesting aspect of the positioning in this text?",
        prompts: [
          { text: "Your thesis statement (specific, arguable, naming techniques and themes):", type: "lines", lines: 3 },
          { text: "Body paragraph 1 — technique, example, and effect:", type: "lines", lines: 3 },
          { text: "Body paragraph 2 — technique, example, and effect:", type: "lines", lines: 3 },
          { text: "Body paragraph 3 — technique, example, and effect:", type: "lines", lines: 3 },
          { text: "Conclusion — how the techniques work together:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Positioning the Absent: Whose Voice Is Missing?",
        instruction: "Choose any well-known news story or historical event. Analyse whose perspectives are typically centred and whose are omitted from mainstream coverage.",
        parentTip: "This is a critical literacy exercise that connects to broader questions of power and representation. Encourage your student to think beyond the obvious answer.",
        prompts: [
          { text: "What perspectives are typically centred in mainstream coverage of this event or issue?", type: "lines", lines: 3 },
          { text: "Whose perspectives are typically absent or marginalised?", type: "lines", lines: 3 },
          { text: "How might the story change if those absent voices were centred instead?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Positioning Works Cumulatively",
        content: "A single word choice may seem small. But positioning works cumulatively — a text that consistently uses one type of connotation, consistently omits certain perspectives, and consistently foregrounds particular information creates a powerful cumulative effect. When analysing a text, don't just find one example. Look for the pattern. What does the text do consistently, and what does that tell you about its agenda?",
      },
      {
        type: "open-response",
        title: "Analysing a Multimodal Text",
        instruction: "A school fundraising video shows: slow-motion footage of students working together, uplifting music, a teacher speaking directly to camera, and text on screen reading 'Help us give every child a chance.' Analyse how each element positions the viewer.",
        parentTip: "Multimodal texts combine multiple modes (visual, audio, verbal). Each mode has its own positioning tools. Discuss how they work together to create a unified effect.",
        prompts: [
          { text: "How does the slow-motion footage position the viewer? What does it make the viewer feel?", type: "lines", lines: 2 },
          { text: "How does the uplifting music position the viewer emotionally?", type: "lines", lines: 2 },
          { text: "How does the teacher speaking 'directly to camera' create a positioning effect?", type: "lines", lines: 2 },
          { text: "How does 'every child' in the text on screen position the viewer through appeals to values?", type: "lines", lines: 2 },
          { text: "How do all these elements work together cumulatively?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Positioning and Power",
        instruction: "Consider the relationship between positioning and power in society.",
        parentTip: "This is an abstract but important question. Ground it by discussing specific examples — who controls major media outlets? How does that affect what gets foregrounded and omitted?",
        prompts: [
          { text: "Who has the power to create widely read texts (newspapers, films, government documents)? How might that affect which perspectives are most frequently foregrounded?", type: "lines", lines: 4 },
          { text: "How might social media be changing who has the power to position readers?", type: "lines", lines: 3 },
          { text: "Is it possible to create a text that does not position readers in any way? Why or why not?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Self-Analysis: Positioning in Your Own Writing",
        instruction: "Find a piece of your own recent writing — an essay, a story, a social media post, or even a text message. Analyse it as a positioning text.",
        parentTip: "This can be confronting — most people discover they use positioning techniques without realising it. Reassure your student that this is normal and is how all writers work.",
        prompts: [
          { text: "What techniques do you use in your own writing to position readers?", type: "lines", lines: 3 },
          { text: "Is there a perspective you tend to omit? Why might that be?", type: "lines", lines: 3 },
          { text: "What values do you most frequently appeal to, and does this reflect your genuine values?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Positioning in Historical Texts",
        instruction: "Consider how positioning has been used in historical contexts.",
        questions: [
          {
            prompt: "A wartime poster shows the enemy as monstrous and one's own soldiers as heroic. Which positioning technique is dominant?",
            options: ["Structural positioning", "Connotation combined with visual representation", "Statistical omission", "Second-person narration"],
            answer: "Connotation combined with visual representation",
          },
          {
            prompt: "History textbooks from different countries often describe the same war differently. What positioning technique explains this?",
            options: [
              "Different authors have different writing styles",
              "National perspective shapes which events are foregrounded and which are omitted",
              "History is objective and these differences are errors",
              "Statistical differences explain the varying accounts",
            ],
            answer: "National perspective shapes which events are foregrounded and which are omitted",
          },
        ],
      },
      {
        type: "open-response",
        title: "Creating a Positioning Analysis Toolkit",
        instruction: "Create your own personal 'positioning analysis toolkit' — a set of questions you will ask every time you read a text critically.",
        parentTip: "The goal here is for your student to internalise the skills rather than just applying a formula. A personalised toolkit they have created themselves will be more useful than a formula they were given.",
        prompts: [
          { text: "Write 5–7 questions that you will ask of any text to analyse how it positions readers:", type: "box" },
          { text: "Which question do you think is the most powerful, and why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Algorithm Positions You",
        content: "Your social media feed, your streaming recommendations, your search results — these are all texts that position you. They are designed by algorithms that have learned your preferences and serve you content calculated to keep you engaged. This is positioning at an enormous scale, and it is almost entirely invisible. What would you do differently if you were aware of this positioning every time you opened an app? What would you deliberately seek out that the algorithm would never show you?",
      },
      {
        type: "open-response",
        title: "Writing a Fully Annotated Positioning Piece",
        instruction: "Write a short persuasive paragraph (6–8 sentences) on a topic of your choice. Then annotate every sentence, labelling every positioning technique you have used.",
        parentTip: "The annotation process forces conscious awareness of every choice. Students often discover they used techniques they did not plan — and that is the most interesting discovery.",
        prompts: [
          { text: "Your persuasive paragraph:", type: "box" },
          { text: "Full annotation (label every technique, with the specific words you are labelling):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Positioning in Non-Fiction Books",
        instruction: "Consider how non-fiction books (biographies, history books, popular science books) position readers.",
        prompts: [
          { text: "A biography written by the subject's family member versus one written by a journalist would likely position readers very differently. Explain how and why.", type: "lines", lines: 4 },
          { text: "A popular science book aims to make complex ideas accessible to a general audience. What positioning decisions does this involve?", type: "lines", lines: 3 },
          { text: "Why might a historian's cultural background affect which events they foreground in a history book?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "The Reader's Responsibility",
        instruction: "Reflect on your own role as a reader in the positioning process.",
        parentTip: "Reading is not a passive act. The reader brings their own values, background, and experiences to every text. Discuss how your student's own background shapes what they notice and how they respond.",
        prompts: [
          { text: "How do your own values and experiences affect which positioning techniques work on you?", type: "lines", lines: 3 },
          { text: "Describe a time when you changed your mind about something because of how it was presented in a text. What positioning techniques were at work?", type: "lines", lines: 4 },
          { text: "What is the most useful thing you have learned from this worksheet about your own reading habits?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Integrate Analysis Into Your Essays",
        content: "The skills in this worksheet are not just for positioning analysis essays — they improve all your analytical writing. Whenever you analyse any text, always ask: what technique is at work? What specific example shows it? What effect does it have on readers? These three questions form the backbone of all textual analysis, whatever the topic.",
      },
      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Essay: How Positioning Works in a Text You Have Studied",
        instruction: "Write a full analytical essay (introduction + three TEEL body paragraphs + conclusion) responding to: 'How does the author use positioning techniques to guide readers toward a particular interpretation of the central theme?' Draw on a text you have studied this year.",
        parentTip: "This is the culminating essay for this worksheet. Allow at least two sessions: one for planning, one for writing. The quality of the plan determines the quality of the essay.",
        prompts: [
          { text: "Introduction (including thesis statement):", type: "box" },
          { text: "Body paragraph 1 (TEEL — technique, evidence, explanation, link):", type: "box" },
          { text: "Body paragraph 2 (TEEL):", type: "box" },
          { text: "Body paragraph 3 (TEEL):", type: "box" },
          { text: "Conclusion (synthesise — do not just repeat):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Extended Comparison: Two Media Texts on the Same Issue",
        instruction: "Find two real texts (news articles, editorials, or social media posts) about the same current issue from different perspectives. Analyse how each positions its readers.",
        parentTip: "Use a news aggregator or compare two news outlets with known different editorial positions. The Australian, The Guardian Australia, and the ABC are good starting points for different perspectives.",
        prompts: [
          { text: "Text A source, headline, and brief description:", type: "lines", lines: 2 },
          { text: "Text B source, headline, and brief description:", type: "lines", lines: 2 },
          { text: "Compare the connotation of key words in each text:", type: "lines", lines: 4 },
          { text: "What does each text foreground, and what does each omit?", type: "lines", lines: 4 },
          { text: "Which text positions its reader more effectively, and why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating a Positioning Guide for a Younger Audience",
        instruction: "Imagine you are writing a one-page guide to understanding how texts position readers — for a Year 5 student. Write the guide in clear, accessible language, with at least three examples.",
        parentTip: "Explaining something clearly to someone else is one of the best ways to consolidate your own understanding. If your student struggles to simplify their explanations, it usually means there is still something to consolidate.",
        prompts: [
          { text: "Your Year 5 guide to understanding how texts position readers:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Critical Analysis: Positioning in a Documentary",
        instruction: "Watch a documentary or consider one you have seen recently. Analyse how it positions its audience.",
        parentTip: "Documentaries are often perceived as objective but are highly constructed texts. Camera angles, music, narration, and selection of interviewees all position the viewer.",
        prompts: [
          { text: "Name the documentary and describe its subject:", type: "lines", lines: 2 },
          { text: "How does the documentary use music, narration, or camera angles to position the viewer emotionally?", type: "lines", lines: 4 },
          { text: "Whose perspectives are included, and whose are absent?", type: "lines", lines: 3 },
          { text: "What is the documentary positioning the viewer to believe, and how effectively does it achieve this?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "The Ethics of Persuasion: Extended Response",
        instruction: "Write an extended response (three to four paragraphs) arguing your position on: 'All persuasion involves manipulation — therefore, all persuasive texts are ethically questionable.' You may agree, disagree, or take a nuanced position.",
        parentTip: "Encourage your student to resist the easy answer and think through the genuine complexity of this question. Where exactly is the line between legitimate persuasion and manipulation?",
        prompts: [
          { text: "Your extended response:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Deconstructing Propaganda: Historical Example",
        instruction: "Research a historical example of propaganda (wartime posters, political campaigns, state-controlled media). Analyse the positioning techniques used.",
        parentTip: "Historical propaganda is an excellent case study because the distance of time makes the techniques easier to see clearly. What feels obvious in historical propaganda might be harder to spot in contemporary texts.",
        prompts: [
          { text: "Name and briefly describe your chosen example:", type: "lines", lines: 2 },
          { text: "Identify at least four positioning techniques at work:", type: "lines", lines: 5 },
          { text: "Why were these techniques effective for their intended audience at that time?", type: "lines", lines: 3 },
          { text: "Do you see any of these techniques in contemporary texts? Give an example.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Positioning and Literature: Close Reading",
        instruction: "Choose a passage of at least one paragraph from a literary text you have studied. Perform a close reading of how the author uses positioning techniques.",
        parentTip: "Close reading means slow, careful, word-by-word attention. A single paragraph can sustain many pages of analysis. Encourage your student to move slowly through the passage.",
        prompts: [
          { text: "Copy the passage here (or write its source and location):", type: "box" },
          { text: "Analyse each sentence: what technique is at work, what example shows it, and what effect does it create?", type: "box" },
          { text: "What is the cumulative effect of the positioning across the whole passage?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating a Positioning Analysis Rubric",
        instruction: "Create a marking rubric for a positioning analysis essay — what makes a response excellent, proficient, developing, or beginning? Write clear descriptors for each level.",
        parentTip: "Creating a rubric requires understanding the skill at a meta-level. This is one of the highest-order tasks in this worksheet. It also gives your student a self-evaluation tool for their own writing.",
        prompts: [
          { text: "Excellent (A range) — what does excellent positioning analysis look like?", type: "lines", lines: 3 },
          { text: "Proficient (B range) — what does good positioning analysis look like?", type: "lines", lines: 3 },
          { text: "Developing (C range) — what are the limitations at this level?", type: "lines", lines: 3 },
          { text: "Beginning (D range) — what is missing at this level?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Research: Media Ownership and Positioning",
        instruction: "Research who owns the major Australian news outlets (newspapers, TV channels, online media). Then consider how ownership might affect positioning.",
        parentTip: "Media ownership is an important aspect of critical literacy. This research task connects positioning to real-world questions of power and democracy.",
        prompts: [
          { text: "What did you discover about Australian media ownership? Briefly summarise your findings:", type: "lines", lines: 4 },
          { text: "How might commercial interests affect what a media outlet foregrounds, omits, or uses as connotation?", type: "lines", lines: 4 },
          { text: "Why does media diversity (multiple owners with different interests) matter for readers?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Become an Active Reader for Life",
        content: "The skills you have developed in this worksheet — identifying connotation, foregrounding, omission, point of view, and appeals to values — are not just for English class. They are tools for navigating the information-saturated world you live in. Every advertisement, news article, political speech, social media post, documentary, and novel positions you. You are now equipped to notice it. The goal is not suspicion — it is clarity. Read actively. Read curiously. Ask who made this, why, and what they want you to think. That habit of mind will serve you for the rest of your life.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "true-false",
        title: "Symbolism Basics",
        instruction: "Decide whether each statement about symbolism is true or false.",
        parentTip: "These foundational statements establish the key concepts before moving into more complex analysis.",
        statements: [
          { text: "A symbol is an object, person, place, or colour that represents something beyond its literal meaning.", answer: true },
          { text: "Symbols are always explained directly by the author in the text.", answer: false },
          { text: "An allegory is a narrative in which the story as a whole represents something beyond the literal events.", answer: true },
          { text: "A symbol can only have one correct interpretation.", answer: false },
          { text: "Symbols gain meaning from the context in which they appear.", answer: true },
        ],
      },
      {
        type: "matching",
        title: "Common Symbols and Their Meanings",
        instruction: "Match each commonly used symbol to one of its traditional meanings. Note: symbols can have multiple meanings — these are the most conventional associations.",
        parentTip: "Explain to your student that conventional symbolic meanings are useful starting points, but a skilled analyst always checks what the specific text does with a symbol.",
        left: ["A dove", "Darkness", "A broken mirror", "Spring", "A locked door"],
        right: [
          "Peace or hope",
          "Ignorance, evil, or the unknown",
          "Bad luck or a fractured self",
          "Renewal, hope, or new beginnings",
          "A barrier, secret, or inaccessible opportunity",
        ],
      },
      {
        type: "multiple-choice",
        title: "Symbol or Literal?",
        instruction: "Decide whether the underlined element is being used symbolically or literally in each sentence.",
        questions: [
          { prompt: "She opened the door and walked into the sunlit garden.", options: ["Literal", "Symbolic"], answer: "Literal" },
          { prompt: "The candle flame flickered and went out — the last hope of the household dying with it.", options: ["Literal", "Symbolic"], answer: "Symbolic" },
          { prompt: "He buried the letter under the oak tree.", options: ["Literal", "Symbolic"], answer: "Literal" },
          { prompt: "The river separated their two worlds as completely as time itself.", options: ["Literal", "Symbolic"], answer: "Symbolic" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Introducing Allegory",
        instruction: "Choose the best answer for each question about allegory.",
        questions: [
          {
            prompt: "What is the key difference between a symbol and an allegory?",
            options: [
              "A symbol is a single element; an allegory is a whole narrative that works as an extended metaphor",
              "Allegory only appears in poetry",
              "A symbol must be an object; an allegory must be a character",
              "There is no real difference — they are the same technique",
            ],
            answer: "A symbol is a single element; an allegory is a whole narrative that works as an extended metaphor",
          },
          {
            prompt: "In a fable about a race between a tortoise and a hare, the hare represents overconfidence and the tortoise represents steady perseverance. This is an example of:",
            options: ["Symbolism", "Allegory", "Simile", "Irony"],
            answer: "Allegory",
          },
          {
            prompt: "Which of the following is the best description of how allegory works?",
            options: [
              "It uses a made-up story to explore a real-world concept, issue, or situation",
              "It uses very complicated vocabulary to describe simple ideas",
              "It involves characters who speak directly to the reader",
              "It is always about politics",
            ],
            answer: "It uses a made-up story to explore a real-world concept, issue, or situation",
          },
        ],
      },
      {
        type: "open-response",
        title: "Identifying Symbols",
        instruction: "Think about a text you have read recently (a novel, film, or story). Identify one symbol that appears in it and answer the questions below.",
        parentTip: "If your student is stuck, suggest a well-known text: the conch shell in Lord of the Flies, the green light in The Great Gatsby, or symbolic elements in a film like Spirited Away.",
        prompts: [
          { text: "What is the symbol (object, character, colour, or setting)?", type: "lines", lines: 2 },
          { text: "Where and when does it appear in the text? List at least two specific moments.", type: "lines", lines: 4 },
          { text: "What do you think it represents, and why? Use evidence from the text to support your interpretation.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Symbolism Vocabulary",
        instruction: "Fill in the blanks with the correct terms: allegory, symbol, motif, connotation, interpretation.",
        parentTip: "These terms are all related — understanding the distinctions between them is important for precise analytical writing.",
        sentences: [
          { text: "An object that represents something beyond its literal meaning is called a ___.", blanks: ["symbol"] },
          { text: "A ___ is a recurring symbol or idea that appears throughout a text.", blanks: ["motif"] },
          { text: "A narrative in which events and characters represent something beyond the literal story is an ___.", blanks: ["allegory"] },
          { text: "There is rarely a single correct ___ of a symbol — context determines meaning.", blanks: ["interpretation"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Type: Symbol or Allegory?",
        instruction: "Sort each of the following examples into 'Symbol' (a single element) or 'Allegory' (whole narrative as extended metaphor).",
        parentTip: "The distinction is in scale — a symbol is a part; an allegory is the whole.",
        columns: ["Symbol", "Allegory"],
        items: [
          { label: "A white whale in a novel representing obsession" },
          { label: "A story about farm animals that represents a political revolution" },
          { label: "A red rose given between two characters representing love" },
          { label: "A dream sequence representing the character's fear of failure" },
          { label: "A story about a boy lost in a maze representing the confusion of adolescence" },
          { label: "A crumbling house representing a family's declining fortunes" },
        ],
      },
      {
        type: "open-response",
        title: "Three Questions for Symbol Analysis",
        instruction: "For any symbol, ask these three questions: (1) What is it literally? (2) What does it recur alongside in the text? (3) What might it represent beyond itself? Practise applying these questions.",
        parentTip: "The three-question method gives students a reliable process for approaching any symbol, even one they haven't encountered before.",
        prompts: [
          { text: "Apply the three questions to a mirror that appears in a short story about a character who avoids looking at themselves.", type: "lines", lines: 5 },
          { text: "Apply the three questions to a recurring image of rain in a novel about grief.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "true-false",
        title: "Symbolism in Well-Known Texts",
        instruction: "Decide whether each statement about symbolism in well-known texts is true or false.",
        statements: [
          { text: "In Animal Farm, the pigs represent the ruling class who abuse power after a revolution.", answer: true },
          { text: "In most fairy tales, the dark forest represents safety and comfort.", answer: false },
          { text: "The conch shell in Lord of the Flies symbolises order and democratic authority.", answer: true },
          { text: "In The Great Gatsby, the green light at the end of Daisy's dock represents the American Dream and unattainable desire.", answer: true },
          { text: "Symbols always mean the same thing across different texts and cultures.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Allegory Mapping",
        instruction: "Animal Farm by George Orwell is one of English literature's most famous allegories. Use the summary below to complete the mapping exercise.\n\nSummary: Farm animals overthrow their cruel human farmer and create an equal society with the motto 'All animals are equal.' Over time, the pigs seize power, change the rules to benefit themselves, and eventually become indistinguishable from humans. Orwell wrote this as a criticism of Stalinist Soviet Russia.",
        parentTip: "Allegory mapping is a powerful skill for Year 8 and beyond. If your student engages well, this is a great text to read in full.",
        prompts: [
          { text: "The human farmer represents: ___. The pigs represent: ___. The other animals represent: ___. The motto 'All animals are equal' represents: ___.", type: "lines", lines: 4 },
          { text: "Why might Orwell have chosen to tell this story through animals rather than writing directly about politics?", type: "lines", lines: 5 },
          { text: "Can you think of another real-world situation that could be told as an allegory? Describe it briefly.", type: "box" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Colour Symbolism",
        instruction: "In many literary texts, colours carry symbolic weight. Choose the most likely symbolic meaning of each colour as used in these contexts.",
        parentTip: "Colour symbolism can vary across cultures — these are the conventional Western literary associations. Invite discussion of how other cultural traditions might interpret these colours differently.",
        questions: [
          { prompt: "A character always dressed in black throughout a novel about loss:", options: ["Joy and celebration", "Mourning, darkness, and concealment", "Wealth and status", "Innocence"], answer: "Mourning, darkness, and concealment" },
          { prompt: "A golden sunrise at the end of a novel about survival:", options: ["Danger and warning", "Ambiguity and uncertainty", "Hope, renewal, and triumph", "Emptiness"], answer: "Hope, renewal, and triumph" },
          { prompt: "A character surrounded by red imagery throughout a play about jealousy:", options: ["Peace and calm", "Passion, danger, and violent emotion", "Intelligence and authority", "Friendship"], answer: "Passion, danger, and violent emotion" },
        ],
      },
      {
        type: "tip",
        title: "Tip: Let the Text Tell You What the Symbol Means",
        content: "A common mistake is to apply a standard symbolic meaning to an object without checking what the specific text does with it. A river can symbolise time, freedom, danger, cleansing, or the divide between two worlds — depending on context. Always let the text guide your interpretation. Ask: how does the author use this symbol? What events, emotions, and themes does it appear alongside?",
      },
      {
        type: "open-response",
        title: "Close Reading: Layered Meaning in a Poem",
        instruction: "Read the following short poem extract and analyse the symbolism carefully.\n\n\"The spider spins her patient web\nFrom corner-dark to window-glass,\nWaiting for whatever comes —\nThe careless fly, the days that pass.\"",
        parentTip: "There is no single correct interpretation here. Encourage your student to commit to a reading and defend it with evidence from the language.",
        prompts: [
          { text: "What might 'the web' symbolise in this poem? Give two possible interpretations.", type: "lines", lines: 4 },
          { text: "What might 'the careless fly' represent? What does 'careless' suggest?", type: "lines", lines: 3 },
          { text: "What is the overall mood or theme? How does the symbolism create that mood?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Completing Symbol Analysis Sentences",
        instruction: "Complete each analytical sentence about symbolism.",
        sentences: [
          { text: "The ___ can be read as a symbol of ___, because it appears whenever the character ___.", blanks: ["[object]", "[concept]", "[action/emotion]"] },
          { text: "The recurring motif of ___ suggests that the author is exploring the theme of ___.", blanks: ["[image]", "[theme]"] },
          { text: "By using ___ as an allegory for ___, the author is able to comment on ___ without directly naming it.", blanks: ["[narrative]", "[real issue]", "[the issue]"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Does This Symbol Represent?",
        instruction: "In each case, circle the most likely symbolic meaning given the context described.",
        questions: [
          { prompt: "A crumbling old house in a novel where the family's relationships are deteriorating:", options: ["The character's hope for the future", "The family's declining unity and connection", "A literal structural problem"] },
          { prompt: "A character who keeps a bird in a cage throughout a story about a woman in a restrictive marriage:", options: ["The character's love of birds", "The character's own restricted freedom", "The husband's cruelty"] },
          { prompt: "A recurring image of an open road in a novel about a character seeking independence:", options: ["Traffic problems in the setting", "Freedom, possibility, and escape", "The character's obsession with driving"] },
        ],
      },
      {
        type: "home-activity",
        title: "Symbol Hunting in Everyday Life",
        instruction: "Symbols are not only in literature — they are everywhere. Complete this activity over two days.",
        parentTip: "This activity builds the habit of symbolic thinking in everyday contexts. Discuss the examples your student finds — some will be richer than others.",
        suggestions: [
          "Find three symbols used in logos, signs, or flags and explain what each represents",
          "Identify one symbolic colour used in a film or TV show you watch, and explain its meaning in context",
          "Find a symbol in a book you are currently reading and record where it appears and what you think it means",
          "Discuss: why do humans communicate through symbols rather than always using direct statement?",
        ],
      },
      {
        type: "open-response",
        title: "Fables as Allegory",
        instruction: "Fables are short allegorical stories in which animals represent human qualities. Read this fable outline and complete the allegory mapping.\n\nA crow, proud of its black feathers, finds white feathers and dresses itself in them to impress other birds. When the feathers fall out at a gathering, the crow is rejected by both the white birds and its old community of black birds.",
        parentTip: "Fables make the structure of allegory very clear because the symbolism is not subtle — they are good teaching texts.",
        prompts: [
          { text: "What human quality does the crow represent at the start of the fable?", type: "lines", lines: 2 },
          { text: "What might the white feathers symbolise?", type: "lines", lines: 2 },
          { text: "What is the allegorical meaning of the crow's rejection by both communities?", type: "lines", lines: 3 },
          { text: "What lesson does this allegory communicate?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "true-false",
        title: "Allegory and Intention",
        instruction: "Decide whether each statement about authorial intention and symbolism is true or false.",
        parentTip: "The question of intention versus reader interpretation is genuinely complex. These statements will prompt useful discussion.",
        statements: [
          { text: "Symbolism in a text only counts if the author deliberately placed it there.", answer: false },
          { text: "Readers can find valid symbolic meanings that the author did not consciously intend.", answer: true },
          { text: "A strong literary analysis always grounds its interpretation in evidence from the text.", answer: true },
          { text: "Authors always explain their symbolic choices in interviews and commentaries.", answer: false },
          { text: "An interpretation of symbolism that cannot be supported by textual evidence is less valid than one that can.", answer: true },
        ],
      },
      {
        type: "open-response",
        title: "Creating Your Own Symbol",
        instruction: "Invent a symbol for a story you might write. Describe the symbol and explain what it represents.",
        parentTip: "Invite your student to choose a concept they genuinely care about — justice, belonging, grief, hope — and design a symbol for it. The more personal the choice, the more engaged the writing.",
        prompts: [
          { text: "Describe your symbol (object, colour, animal, place, or other element):", type: "lines", lines: 2 },
          { text: "What abstract concept or theme does it represent?", type: "lines", lines: 2 },
          { text: "How would you weave it into a story — in what kinds of scenes would it appear?", type: "lines", lines: 3 },
          { text: "Why is this symbol more effective than just stating the theme directly?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Why Do We Think in Symbols?",
        content: "Humans have used symbols for as long as we have communicated — cave paintings, religious icons, national flags, corporate logos. There is something about the symbolic mode of thinking that feels more true to complex experience than direct statement. A novel that shows a character keeping a wilting plant can communicate something about neglect and dying hope that an explicit statement like 'she felt neglected and hopeless' cannot. Why might that be? What does symbolism do that direct language cannot?",
      },
      {
        type: "multiple-choice",
        title: "Allegory in Popular Culture",
        instruction: "Many popular films and stories work as allegories. Choose the best allegorical reading for each.",
        questions: [
          {
            prompt: "A film about robots gaining consciousness and demanding equal rights could be read as an allegory for:",
            options: ["The history of robotics", "Civil rights movements and the struggle for recognition as equal human beings", "Environmental destruction", "The dangers of technology"],
            answer: "Civil rights movements and the struggle for recognition as equal human beings",
          },
          {
            prompt: "A fantasy novel about a child from the 'real world' discovering a hidden magical kingdom could be read as an allegory for:",
            options: ["The discovery of Australia", "The awakening of imagination and the transition from childhood to maturity", "Political revolution", "Space exploration"],
            answer: "The awakening of imagination and the transition from childhood to maturity",
          },
        ],
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Symbol Analysis Using Evidence",
        instruction: "Choose a symbol from a text you are studying and write a full analytical paragraph using the TEE structure (Technique, Example, Effect).",
        parentTip: "The evidence should be a specific quote or scene reference. The explanation should be the longest part — unpack exactly how the symbol works in context.",
        prompts: [
          { text: "Name the text and the symbol:", type: "lines", lines: 1 },
          { text: "Your full TEE paragraph:", type: "box" },
          { text: "Self-evaluate: is your explanation longer than your evidence? If not, expand it:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Tracking a Motif",
        instruction: "A motif is a recurring symbolic element throughout a text. Choose a motif from a text you have read and track it.",
        parentTip: "Tracking a motif requires looking at the text as a whole rather than in isolated passages — it is a whole-text analytical skill. If your student hasn't read a text with a clear motif recently, use the example of light and darkness in any text they know.",
        prompts: [
          { text: "Name the motif and the text:", type: "lines", lines: 1 },
          { text: "List at least three specific moments where the motif appears:", type: "lines", lines: 4 },
          { text: "How does the meaning or treatment of the motif develop as the text progresses?", type: "lines", lines: 4 },
          { text: "What theme does the motif connect to?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Allegory vs. Direct Statement",
        instruction: "Consider why authors choose allegory over direct statement.",
        parentTip: "This is a conceptual question rather than a textual analysis task. Discuss together before writing.",
        prompts: [
          { text: "George Orwell could have written an essay directly criticising Stalinist communism. Why might he have chosen to write Animal Farm as an allegory instead?", type: "lines", lines: 4 },
          { text: "What can allegory achieve that direct argument or essay writing cannot?", type: "lines", lines: 3 },
          { text: "Are there any disadvantages to the allegorical form? What might be lost?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Symbolism of Setting",
        instruction: "Settings can function as powerful symbols. Analyse how a setting functions symbolically in a text you know.",
        parentTip: "Common symbolic settings include dark forests (danger/the unknown), crumbling buildings (decline/the past), open seas (freedom/danger), and walled gardens (safety/imprisonment).",
        prompts: [
          { text: "Describe the setting and the text it comes from:", type: "lines", lines: 2 },
          { text: "How is the setting described — what specific details does the author emphasise?", type: "lines", lines: 3 },
          { text: "What might this setting symbolise? How do the details you identified support your interpretation?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "true-false",
        title: "Symbolism Across Cultures",
        instruction: "Decide whether each statement about symbolic meaning across cultures is true or false.",
        statements: [
          { text: "White symbolises purity and wedding celebrations in all world cultures.", answer: false },
          { text: "Symbolic meanings can differ significantly between cultures and historical periods.", answer: true },
          { text: "When reading a text from another culture, it is important to consider that culture's symbolic conventions.", answer: true },
          { text: "Once a symbol is established in a text, it always means exactly the same thing throughout the text.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Characters as Symbols",
        instruction: "In allegory, characters often represent abstract concepts rather than fully rounded individuals. Analyse a character as a symbol.",
        parentTip: "This works well with both allegorical texts (where characters obviously represent concepts) and literary fiction (where a character's dominant trait may make them symbolic of something larger).",
        prompts: [
          { text: "Name the character and text:", type: "lines", lines: 1 },
          { text: "What concept, type, or idea might this character represent? What evidence supports this?", type: "lines", lines: 4 },
          { text: "Does the character have enough complexity to resist being reduced to a symbol, or do they function primarily as a symbolic figure? Explain.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Reading a Poem for Symbolism",
        instruction: "Read the following poem extract and perform a close symbolic reading.\n\n\"The old clock on the mantel stopped\nThe day my father's hand grew cold.\nWe wound it once. It ticked, then dropped\nTo silence — stubborn, growing old.\"",
        parentTip: "Read this aloud together first. The emotional resonance of the poem will help your student access the symbolism. Discuss: what does a stopped clock usually represent?",
        prompts: [
          { text: "What does the stopped clock symbolise in this poem?", type: "lines", lines: 3 },
          { text: "What is the significance of 'We wound it once'? What might this action represent?", type: "lines", lines: 3 },
          { text: "How does the word 'stubborn' applied to the clock's silence work symbolically?", type: "lines", lines: 3 },
          { text: "What is the overall theme of this poem, and how does the symbolism create it?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identifying the Allegorical Level",
        instruction: "For each text description, identify what the allegorical narrative might be commenting on.",
        questions: [
          {
            prompt: "A story about a kingdom in which the court magician hoards all magical knowledge and refuses to teach others, while the people remain powerless and ignorant.",
            options: ["Environmental conservation", "The gatekeeping of education and expertise by those in power", "The dangers of magic", "Royal succession"],
            answer: "The gatekeeping of education and expertise by those in power",
          },
          {
            prompt: "A children's story in which a little engine is told by bigger engines it cannot climb the hill, but succeeds through perseverance.",
            options: ["Railway engineering", "Self-belief and the importance of effort over natural ability", "The history of trains", "Industrial development"],
            answer: "Self-belief and the importance of effort over natural ability",
          },
          {
            prompt: "A play set in a village where the townspeople destroy a beautiful tree to build a parking lot, and then feel an inexplicable but unnamed loss.",
            options: ["Town planning", "The destruction of the natural world and the loss of community that follows", "The importance of parking", "Historical conservation"],
            answer: "The destruction of the natural world and the loss of community that follows",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Distinguish Symbol, Motif, and Allegory",
        content: "These terms are related but distinct. A symbol is a single object, colour, or element that carries meaning beyond its literal presence. A motif is a symbol that recurs throughout the text, building in significance with each appearance. An allegory is a sustained narrative in which the entire story operates as a metaphor for something else. When writing analytically, use the precise term — calling something an allegory when you mean a symbol undermines your analysis.",
      },
      {
        type: "open-response",
        title: "Writing an Allegorical Opening",
        instruction: "Write the opening paragraph of an allegorical short story. Choose a concept you care about (justice, isolation, ambition, community) and represent it through a concrete narrative.",
        parentTip: "The best allegorical openings establish the literal story clearly while planting the seeds of the allegorical reading. Discuss: how much does the reader need to consciously recognise the allegory for it to work?",
        prompts: [
          { text: "Your allegorical opening paragraph:", type: "box" },
          { text: "Explain your allegorical choices: what does each element represent?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Symbolic Interpretations",
        instruction: "Two students interpret the same symbol differently. Read their responses and evaluate both.",
        parentTip: "Evaluating others' interpretations develops critical thinking about what makes a reading strong or weak.",
        prompts: [
          { text: "Student A says: 'The locked room in the novel symbolises the character's secrets and shame.' Student B says: 'The locked room represents missed opportunities — what could have been but never was.' Which interpretation do you find more convincing, and why? (Consider: which is better supported by evidence from the text?)", type: "lines", lines: 5 },
          { text: "Is it possible for both interpretations to be valid simultaneously? Why or why not?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Symbolism in Film",
        instruction: "Films use visual symbolism as powerfully as novels use verbal symbolism. Analyse symbolism in a film you have seen.",
        parentTip: "Discuss this together — watch a scene from a film your student knows well and analyse its visual symbols together before your student writes independently.",
        prompts: [
          { text: "Name the film and one clear symbolic element (object, colour, setting, or recurring image):", type: "lines", lines: 2 },
          { text: "How does the symbol appear across the film? In what key scenes?", type: "lines", lines: 3 },
          { text: "What does the symbol represent, and how does it connect to the film's themes?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "The Allegory of the Cave",
        instruction: "The philosopher Plato wrote a famous allegory: prisoners chained in a cave see only shadows on a wall and believe those shadows are reality. One prisoner escapes, sees the real world, and returns to tell the others — but they do not believe him. Analyse this allegory.",
        parentTip: "This is one of the most famous allegories in Western philosophy. Approach it as a literary analysis task — it does not require knowledge of philosophy.",
        prompts: [
          { text: "What do the cave, the chains, and the shadows represent allegorically?", type: "lines", lines: 3 },
          { text: "What does the escaped prisoner represent? What does his return represent?", type: "lines", lines: 3 },
          { text: "What idea about knowledge, truth, and society is Plato exploring through this allegory?", type: "lines", lines: 4 },
          { text: "Can you think of a modern equivalent — a situation in which people see only 'shadows' and mistake them for reality?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Symbol Is the Argument",
        content: "When an author chooses to show a character cradling a wilting flower as they receive bad news, rather than writing 'she felt that all her hopes were dying,' they are making the argument through imagery rather than statement. The symbol does not merely illustrate the idea — in the hands of a great writer, the symbol IS the argument, condensed into a concrete image that communicates everything at once. What is it about the concrete, sensory image that the abstract statement cannot achieve?",
      },
      {
        type: "open-response",
        title: "Symbolism and Theme Connection",
        instruction: "Symbols are usually connected to the central themes of a text. Practise mapping this connection.",
        prompts: [
          { text: "Name a text and one of its central themes:", type: "lines", lines: 1 },
          { text: "Identify two symbols in that text and explain how each connects to the theme:", type: "lines", lines: 5 },
          { text: "Do the symbols develop or change in meaning as the theme develops? Explain.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating a Full Allegory Plan",
        instruction: "Plan a short allegorical story about one of the following themes: the pressures of social media, climate change, or the experience of being new to a community. Map all major story elements to their allegorical equivalents before writing.",
        parentTip: "Planning is essential for allegory — without a clear map, the allegorical level can become confused or inconsistent. Spend at least as long on the plan as on any writing.",
        prompts: [
          { text: "Theme you have chosen:", type: "lines", lines: 1 },
          { text: "Story world / literal setting:", type: "lines", lines: 2 },
          { text: "Main character(s) and what each represents:", type: "lines", lines: 3 },
          { text: "Key events and their allegorical meanings:", type: "lines", lines: 4 },
          { text: "Resolution and its allegorical significance:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Analysing Symbolic Objects in Your Home",
        instruction: "Choose three objects in your home that could function as symbols — not because someone told you they do, but because you can construct a symbolic reading of them.",
        parentTip: "This activity develops the habit of symbolic thinking in everyday life. It also reveals how much of what we surround ourselves with already carries personal symbolic weight.",
        prompts: [
          { text: "Object 1: Name it and describe what it could symbolise:", type: "lines", lines: 2 },
          { text: "Object 2: Name it and describe what it could symbolise:", type: "lines", lines: 2 },
          { text: "Object 3: Name it and describe what it could symbolise:", type: "lines", lines: 2 },
          { text: "Reflect: what do your chosen objects and interpretations reveal about your values and preoccupations?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Symbolism in Well-Known Australian Texts",
        instruction: "Consider how symbolism appears in texts relevant to Australian literary contexts.",
        parentTip: "If your student hasn't read these specific texts, the questions still test symbolic reasoning from the descriptions given.",
        questions: [
          {
            prompt: "In a text about the Australian outback, the vast, harsh landscape is consistently shown swallowing characters and erasing their differences. What might the landscape symbolise?",
            options: ["Tourism opportunity", "The indifference of nature to human concerns and social divisions", "The dangers of travel", "Agricultural potential"],
            answer: "The indifference of nature to human concerns and social divisions",
          },
          {
            prompt: "A recurring image of water — rain, rivers, and floods — in an Australian novel about survival. What might water symbolise in this context?",
            options: ["Drought and aridity only", "Both life and destruction — nature's dual capacity to sustain and overwhelm", "Swimming and recreation", "The importance of hydration"],
            answer: "Both life and destruction — nature's dual capacity to sustain and overwhelm",
          },
        ],
      },
      {
        type: "open-response",
        title: "Extended Symbolic Analysis Paragraph",
        instruction: "Write an extended analytical paragraph (8–10 sentences) analysing the symbolic significance of ONE element from a text you are studying. Use TEE structure and aim for depth of explanation.",
        parentTip: "The depth of the explanation is what distinguishes a strong paragraph from a basic one. Ask your student: have you unpacked every word in your quote? Have you connected the symbol to the theme?",
        prompts: [
          { text: "Your extended analysis paragraph:", type: "box" },
          { text: "Underline the part of your paragraph you are most satisfied with and explain why it works:", type: "lines", lines: 3 },
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Writing Your Allegorical Story",
        instruction: "Using the plan you developed earlier, write the opening two paragraphs of your allegorical story. Aim for the allegorical meaning to be present but not stated explicitly.",
        parentTip: "The allegorical meaning should emerge from the story rather than being announced. If your student finds themselves writing 'this represents...' — they need to show, not tell.",
        prompts: [
          { text: "Opening two paragraphs of your allegorical story:", type: "box" },
          { text: "Reflect: is the allegorical meaning present in the writing? How would a reader who recognised it feel?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Symbolism Across Two Texts",
        instruction: "Choose two texts that share a similar symbol (darkness and light, a journey, water, or an enclosed space). Write a comparative analysis of how each text uses the symbol.",
        parentTip: "A comparative symbolic analysis is a higher-order task — it requires holding two texts in mind simultaneously and drawing genuine comparisons, not just describing each in turn.",
        prompts: [
          { text: "Name both texts and the shared symbol:", type: "lines", lines: 2 },
          { text: "How does Text A use the symbol? What does it represent and how does it develop?", type: "lines", lines: 4 },
          { text: "How does Text B use the symbol? What does it represent and how does it develop?", type: "lines", lines: 4 },
          { text: "What does the comparison reveal about the different themes or concerns of each text?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "The Limits of Symbolic Reading",
        instruction: "Consider when symbolic reading can become over-interpretation.",
        parentTip: "Literary scholars debate where the line is between productive interpretation and over-reading. This question develops intellectual humility and critical judgement.",
        prompts: [
          { text: "A student argues that every single object in a novel is a symbol. What might be wrong with this approach?", type: "lines", lines: 3 },
          { text: "What makes a symbolic reading convincing rather than arbitrary? What is the standard of evidence?", type: "lines", lines: 3 },
          { text: "Is there a way to test whether a symbolic reading is valid? What would you do?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Symbolism and the Reader's Experience",
        instruction: "Consider how recognising symbolism changes the experience of reading a text.",
        prompts: [
          { text: "Describe an experience of re-reading a text and noticing symbolism you missed the first time. How did this change your understanding?", type: "lines", lines: 4 },
          { text: "Do you think it is better to read a text first for pleasure (without analysing symbols) and then analyse it afterwards, or to analyse as you read? Why?", type: "lines", lines: 3 },
          { text: "Can knowing too much about a text's symbolism reduce the pleasure of reading it? Give your view.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Ground Every Interpretation in the Text",
        content: "In a literary analysis essay, every claim about a symbol must be supported by evidence. The chain of reasoning is: (1) identify the symbol, (2) provide the textual evidence (a quote or specific scene), (3) explain how the evidence supports your interpretation, (4) connect the symbol to the broader theme of the text. Without step (2), your interpretation is an assertion, not an analysis. The evidence is what makes the difference.",
      },
      {
        type: "open-response",
        title: "Allegory as Social Critique",
        instruction: "Many allegories are used to critique society, politics, or human behaviour. Choose one example of an allegorical text used for social critique and analyse how it works.",
        parentTip: "Animal Farm is the most obvious example, but encourage your student to consider others: The Handmaid's Tale, Lord of the Flies, Brave New World, or allegorical films.",
        prompts: [
          { text: "Name the text and the social or political issue it critiques:", type: "lines", lines: 2 },
          { text: "How does the allegorical form allow the critique to be made more powerfully than a direct essay could?", type: "lines", lines: 4 },
          { text: "Are there any risks to using allegory for social critique? What might be misunderstood?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Essay Plan: Symbolism and Theme",
        instruction: "Plan an essay responding to: 'How does the author use symbolism to develop the central theme of [your chosen text]?' Aim for three body paragraphs, each focusing on a different symbol.",
        parentTip: "The thesis should name the symbols and state what they collectively contribute to the theme — not just identify that symbolism is used.",
        prompts: [
          { text: "Thesis statement:", type: "lines", lines: 3 },
          { text: "Body paragraph 1 — symbol, evidence, effect on theme:", type: "lines", lines: 3 },
          { text: "Body paragraph 2 — symbol, evidence, effect on theme:", type: "lines", lines: 3 },
          { text: "Body paragraph 3 — symbol, evidence, effect on theme:", type: "lines", lines: 3 },
          { text: "Conclusion — how the symbols work together:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Symbolism Across Media",
        instruction: "Compare how symbolism works differently in a novel, a film, and a painting on a similar theme.",
        parentTip: "Each medium has its own symbolic tools. A novel uses words; a film uses image, sound, and movement; a painting uses visual composition and colour. Discuss these differences before writing.",
        prompts: [
          { text: "Choose a theme (e.g. loss, isolation, hope) and describe how a novel might use symbolism to explore it:", type: "lines", lines: 3 },
          { text: "How might a film use symbolism differently to explore the same theme?", type: "lines", lines: 3 },
          { text: "How might a painting use symbolism to explore the same theme?", type: "lines", lines: 3 },
          { text: "Which medium do you think uses symbolism most powerfully, and why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: All Storytelling Is Symbolic",
        content: "At its deepest level, all narrative is symbolic. We tell stories not just to pass on information but to make sense of experience — to find patterns, meanings, and connections in the chaos of lived events. When an author chooses to write about a man who turns into a bug overnight (Kafka's Metamorphosis), they are not writing a naturalistic account of biology — they are finding a symbol for a feeling of dehumanisation that resists direct description. What experience in your own life would you reach for a symbol to describe, rather than stating directly?",
      },
      {
        type: "open-response",
        title: "Research: Symbolism in a Cultural Tradition",
        instruction: "Research how one specific symbol is used across a cultural or religious tradition different from your own. Consider how understanding this symbolism changes your reading of texts from that tradition.",
        parentTip: "This activity develops cross-cultural awareness alongside literary skills. Choose a tradition your student is genuinely curious about rather than the most obvious option.",
        prompts: [
          { text: "The tradition you researched and the symbol you focused on:", type: "lines", lines: 1 },
          { text: "What does this symbol represent in that tradition, and in what contexts does it appear?", type: "lines", lines: 4 },
          { text: "How does knowing this symbolic meaning change your reading of a text from that tradition?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Ironic Symbolism",
        instruction: "Sometimes authors use symbols ironically — the symbol appears in its traditional form but with a meaning that subverts or undermines the convention. Analyse an example of ironic symbolism.",
        parentTip: "Ironic symbolism is a sophisticated technique. A good example: a wedding dress worn by a character who never got married (as in Great Expectations) — the traditional symbol of happiness becomes a symbol of obsession and grief.",
        prompts: [
          { text: "Describe an example of ironic symbolism from a text you know, or imagine your own example:", type: "lines", lines: 3 },
          { text: "What is the conventional meaning of the symbol, and how does the ironic use subvert it?", type: "lines", lines: 3 },
          { text: "What effect does the ironic subversion create for the reader?", type: "lines", lines: 3 },
        ],
      },
      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Analytical Essay: Symbolism",
        instruction: "Write a complete analytical essay (introduction + three TEEL body paragraphs + conclusion) on: 'How does the author use symbolism to develop the central theme in [your chosen text]?'",
        parentTip: "This is the main essay for this worksheet. Plan it carefully before writing. The thesis should be specific and arguable — naming at least two symbols and connecting them to the theme.",
        prompts: [
          { text: "Introduction and thesis:", type: "box" },
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
          { text: "Conclusion:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Allegorical Story",
        instruction: "Using your plan from earlier, write a complete short allegorical story (one to two pages). The allegorical meaning should be present throughout but never stated explicitly. After writing, annotate your story to explain your symbolic choices.",
        parentTip: "Allow adequate time for this task — it is the creative culmination of this worksheet. The annotation afterwards is as important as the story itself.",
        prompts: [
          { text: "Your allegorical story:", type: "box" },
          { text: "Annotation — explain at least five specific symbolic choices:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Comparative Essay: Symbolism in Two Texts",
        instruction: "Write an integrated comparative essay (introduction + three body paragraphs + conclusion) comparing how symbolism is used in two texts you have studied. Each body paragraph should compare both texts on one point of symbolic analysis.",
        parentTip: "The integrated structure is more demanding than a block structure but produces stronger comparative argument. Make sure each paragraph genuinely compares — not just describes each text separately.",
        prompts: [
          { text: "Your comparative essay:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: What Symbolism Has Taught You About Reading",
        instruction: "Write a reflective response on how studying symbolism and allegory has changed the way you read.",
        parentTip: "This reflective task is also a consolidation activity. Discuss together before writing — what is the most significant shift in your student's reading practices?",
        prompts: [
          { text: "What is the most significant thing you have learned from this worksheet about how symbolism works?", type: "lines", lines: 3 },
          { text: "Has studying symbolism changed how you experience texts? In what way?", type: "lines", lines: 3 },
          { text: "What text would you most like to re-read with your new understanding of symbolism, and why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating a Symbolism Reference Guide",
        instruction: "Create a personal reference guide to 10 symbols you have encountered in your reading. For each symbol, record: the symbol, the text, the context, and your interpretation.",
        parentTip: "This reference guide becomes a living document your student can add to throughout their English study. It is also excellent exam preparation.",
        prompts: [
          { text: "Your symbolism reference guide (10 entries):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "The Hardest Symbol You Have Encountered",
        instruction: "Think about the most complex or ambiguous symbol you have encountered in your reading. Write an extended analysis of it, acknowledging the difficulty of interpretation.",
        parentTip: "Intellectual honesty about ambiguity is a mark of sophisticated literary thinking. Encourage your student to sit with uncertainty rather than forcing a neat interpretation.",
        prompts: [
          { text: "Name the symbol and the text:", type: "lines", lines: 1 },
          { text: "Why is this symbol difficult to interpret?", type: "lines", lines: 3 },
          { text: "What are the two or three most compelling interpretations, and what evidence supports each?", type: "lines", lines: 6 },
          { text: "Which interpretation do you find most convincing, and why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Designing an Allegorical Picture Book",
        instruction: "Design an allegorical picture book for young children on a complex theme (e.g. grief, courage, fairness). The story must work literally as a children's story AND allegorically for an adult reader. Write a detailed outline.",
        parentTip: "This creative task requires holding two audiences in mind simultaneously — a genuine intellectual challenge. Discuss: what makes a children's allegory different from an adult allegory?",
        prompts: [
          { text: "Theme and allegorical concept:", type: "lines", lines: 2 },
          { text: "Story outline (setting, characters, events, resolution):", type: "box" },
          { text: "Allegorical map: what does each element represent for the adult reader?", type: "lines", lines: 5 },
          { text: "How does the story work on both levels simultaneously?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Peer Teaching: Explain Symbolism to Someone Who Has Never Heard of It",
        instruction: "Write a clear, engaging explanation of symbolism and allegory as if you were teaching it to a friend who has never encountered the concept. Include at least two concrete examples.",
        parentTip: "The ability to explain something clearly to someone else is one of the most reliable tests of deep understanding. If your student struggles to find simple words for complex ideas, that is a useful signal about what to consolidate.",
        prompts: [
          { text: "Your explanation of symbolism (with examples):", type: "box" },
          { text: "Your explanation of allegory (with examples):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Symbolism in Religious and Mythological Texts",
        instruction: "Religious texts and mythology are among the richest sources of symbolism in world culture. Choose one example and analyse its symbolism.",
        parentTip: "Approach this as a literary exercise, not a theological one. The goal is to understand how symbolic narrative functions, not to evaluate belief systems.",
        prompts: [
          { text: "Name the text or myth and describe its cultural origin:", type: "lines", lines: 2 },
          { text: "Identify at least two symbols and explain what each represents:", type: "lines", lines: 5 },
          { text: "How does the symbolic layer of meaning enrich or complicate the literal narrative?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: You Are Already a Symbolic Thinker",
        content: "You already think symbolically all the time — you just may not have had the words for it. When you chose a particular song to listen to after a hard day, you were responding to its symbolic resonance with your emotional state. When you wore your favourite colour on an important day, you were thinking symbolically. The literary study of symbolism is not imposing an artificial framework onto texts — it is giving names to a mode of thinking you already possess. What symbols matter most to you personally, and why?",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "true-false",
        title: "Intertextuality Basics",
        instruction: "Decide whether each statement about intertextuality is true or false.",
        parentTip: "These foundational statements establish the key vocabulary and concepts.",
        statements: [
          { text: "Intertextuality refers to the way texts reference, echo, or respond to other texts.", answer: true },
          { text: "Intertextuality only occurs when an author directly quotes another text.", answer: false },
          { text: "Readers who recognise an intertextual reference get an additional layer of meaning from the text.", answer: true },
          { text: "A text can only make intertextual references to texts from the same century.", answer: false },
          { text: "Parody is a form of intertextuality that imitates another text's style to comic or critical effect.", answer: true },
        ],
      },
      {
        type: "matching",
        title: "Types of Intertextual Reference",
        instruction: "Match each type of intertextual reference to its correct definition.",
        parentTip: "These are the technical terms your student will use in analytical writing. Ensure they understand the distinctions before moving on.",
        left: ["Allusion", "Parody", "Retelling", "Epigraph", "Pastiche"],
        right: [
          "An indirect reference to another text, person, or event without explicitly naming it",
          "An imitation of a text's style for comic or critical effect",
          "A new version of an existing story, often from a different perspective",
          "A quote placed at the opening of a text to frame its themes",
          "A loving imitation of another style without mockery",
        ],
      },
      {
        type: "multiple-choice",
        title: "Recognising Intertextual References",
        instruction: "Identify the type of intertextual reference in each example.",
        questions: [
          { prompt: "A novel begins with a quote from T.S. Eliot: 'In the beginning is my end.'", options: ["Allusion", "Epigraph", "Parody", "Retelling"], answer: "Epigraph" },
          { prompt: "A comedy film imitates the slow, dramatic style of an art house film to make fun of it.", options: ["Pastiche", "Parody", "Allusion", "Epigraph"], answer: "Parody" },
          { prompt: "A character in a novel says 'it was my Waterloo' to describe their greatest defeat.", options: ["Retelling", "Pastiche", "Allusion", "Epigraph"], answer: "Allusion" },
          { prompt: "A modern novel retells Homer's Odyssey from the perspective of Penelope.", options: ["Parody", "Pastiche", "Epigraph", "Retelling"], answer: "Retelling" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Intertextuality Vocabulary",
        instruction: "Fill in the blanks with the correct terms.",
        sentences: [
          { text: "When a text makes an indirect reference to another text without naming it directly, this is called an ___.", blanks: ["allusion"] },
          { text: "A text that retells a familiar story from a new perspective is called a ___.", blanks: ["retelling"] },
          { text: "A ___ is a quote placed at the beginning of a text to frame its themes or ideas.", blanks: ["epigraph"] },
          { text: "Readers who recognise an intertextual reference gain a(n) ___ layer of meaning.", blanks: ["additional / extra"] },
        ],
      },
      {
        type: "true-false",
        title: "The Effect of Intertextual References",
        instruction: "Decide whether each statement about the effects of intertextual references is true or false.",
        statements: [
          { text: "Readers who do not recognise an intertextual reference miss some of the text's meaning.", answer: true },
          { text: "Authors use allusions to show off their education without adding meaning.", answer: false },
          { text: "An allusion to a tragic classical story can signal to readers that a text will have a tragic outcome.", answer: true },
          { text: "Intertextual references only work in literary fiction, not in films or advertisements.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Recognising Intertextual References",
        instruction: "Each of the following contains an intertextual reference. Identify the reference and explain what effect it creates.",
        parentTip: "If your student does not recognise a reference, that is fine — part of the exercise is noticing what you miss, and then looking it up together.",
        prompts: [
          { text: "A novel's chapter is titled 'A Tale of Two Cities.' What text is this referencing, and what might this title signal to readers about the chapter's themes?", type: "lines", lines: 4 },
          { text: "A character in a film says: 'To be or not to be — that is the question I ask myself every morning.' What is the original source? What effect does placing it in this everyday context create?", type: "lines", lines: 4 },
          { text: "An advertisement uses the tagline 'Just do it... Carpe Diem.' What two references are being made? Why might an advertiser choose these phrases?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Is Being Referenced?",
        instruction: "In each case, circle the text or source being referenced.",
        questions: [
          { prompt: "A character who sacrifices themselves to save others is described as 'a modern-day Christ figure':", options: ["Greek mythology", "The Bible / Christian tradition", "Shakespeare"] },
          { prompt: "A story in which a hero embarks on a long journey, faces many trials, and returns transformed:", options: ["Homeric epic tradition (The Odyssey)", "Victorian novel tradition", "Gothic horror tradition"] },
          { prompt: "An advertisement shows a woman being given an apple by a salesperson with a sly smile:", options: ["Shakespeare's Hamlet", "The Biblical story of the Garden of Eden", "Greek mythology about Aphrodite"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Type of Intertextual Reference",
        instruction: "Sort each of the following into the correct type of intertextual reference.",
        parentTip: "Some examples could fit more than one category — discuss those together rather than forcing a single answer.",
        columns: ["Allusion", "Parody", "Retelling", "Epigraph", "Pastiche"],
        items: [
          { label: "A horror film that lovingly recreates the style of 1950s B-movies" },
          { label: "A sentence: 'She had reached her Rubicon'" },
          { label: "A novel's opening quote from Mary Shelley's Frankenstein" },
          { label: "A story retelling Cinderella from the stepsisters' point of view" },
          { label: "A comedy sketch imitating a news broadcast to mock journalism" },
          { label: "A character described as 'a Scrooge' who learns generosity" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Why Do Authors Use Intertextuality?",
        instruction: "Choose the best explanation for why an author might use each type of intertextual reference.",
        questions: [
          {
            prompt: "An author begins a novel about a failed marriage with an epigraph from Tolstoy: 'All happy families are alike; each unhappy family is unhappy in its own way.' Why?",
            options: [
              "To show they have read Tolstoy",
              "To immediately frame the novel's theme and signal the tone to readers who recognise the source",
              "Because all novels must begin with a quote",
              "To confuse readers who have not read Tolstoy",
            ],
            answer: "To immediately frame the novel's theme and signal the tone to readers who recognise the source",
          },
          {
            prompt: "A film parodies the style of a famous director. What does this achieve beyond comedy?",
            options: [
              "Nothing — parody is only for entertainment",
              "It comments on and critiques the original director's style by exaggerating its features",
              "It confuses audiences who know the original",
              "It reduces the film's budget",
            ],
            answer: "It comments on and critiques the original director's style by exaggerating its features",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Three Steps for Intertextual Analysis",
        content: "When analysing intertextuality in an essay, follow three steps: (1) Identify the reference — what text, event, or figure is being referenced? (2) Explain the source — what does the referenced text represent or signify in its original context? (3) Explain the effect — what does the reference add to the new text? How does it layer or complicate the meaning? This three-step structure ensures your analysis is grounded and purposeful.",
      },
      {
        type: "open-response",
        title: "Analysing a Retelling",
        instruction: "Consider this scenario: a modern short story retells 'Little Red Riding Hood' from the wolf's perspective. The wolf explains that he was hungry, homeless, and frightened — and that Red Riding Hood's grandmother had been evicting animals from the forest for years.",
        parentTip: "This is the kind of question that invites genuine disagreement — and that is good. Encourage your student to commit to a position and argue it.",
        prompts: [
          { text: "How does shifting the perspective change the moral of the original story?", type: "lines", lines: 4 },
          { text: "What social or political idea might this retelling be exploring?", type: "lines", lines: 4 },
          { text: "Does a retelling that sympathises with the villain 'damage' the original story, or deepen it? Argue your position.", type: "box" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Completing Intertextual Analysis Sentences",
        instruction: "Complete each analytical sentence about intertextuality.",
        sentences: [
          { text: "The author alludes to ___ when the character says '___', positioning readers who recognise the reference to understand the scene as a kind of ___.", blanks: ["[source]", "[quote]", "[parallel/commentary]"] },
          { text: "By retelling ___ from the perspective of ___, the author invites readers to question the ___.", blanks: ["[original story]", "[new narrator]", "[original moral/power structure]"] },
          { text: "The epigraph from ___ frames the novel's exploration of ___ by signalling that the text will ___.", blanks: ["[author]", "[theme]", "[action/argument]"] },
        ],
      },
      {
        type: "multiple-choice",
        title: "Intertextuality in Popular Culture",
        instruction: "Identify the intertextual reference in each popular culture example.",
        questions: [
          { prompt: "The Lion King shares key plot elements with which Shakespeare play?", options: ["Macbeth", "Hamlet", "A Midsummer Night's Dream", "Romeo and Juliet"], answer: "Hamlet" },
          { prompt: "A film called 'Ten Things I Hate About You' is a retelling of which Shakespeare play?", options: ["Much Ado About Nothing", "The Taming of the Shrew", "Othello", "As You Like It"], answer: "The Taming of the Shrew" },
          { prompt: "Many superhero films draw on which ancient tradition of storytelling?", options: ["Medieval romance", "Greek and Roman mythology", "Victorian Gothic fiction", "Renaissance allegory"], answer: "Greek and Roman mythology" },
        ],
      },
      {
        type: "open-response",
        title: "Creating Intertextuality",
        instruction: "Write the opening paragraph of a short story that contains at least one clear intertextual reference. It could be an allusion, a retelling setup, or an epigraph. Then explain your choice.",
        parentTip: "Invite your student to choose a reference that genuinely excites them — a myth they love, a book they have read, a historical event they find fascinating. Personal investment produces stronger writing.",
        prompts: [
          { text: "Opening paragraph:", type: "box" },
          { text: "Explain your intertextual reference — what are you referencing, and what do you want readers who recognise it to feel or understand?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "home-activity",
        title: "Intertextuality Log",
        instruction: "Over the next week, keep a log of every intertextual reference you notice — in films, books, advertisements, songs, or conversations.",
        parentTip: "Once students start looking for intertextual references, they find them everywhere. This activity builds habitual attention. Compare your logs at the end of the week.",
        suggestions: [
          "List the reference, the source being referenced, and why you think it was used",
          "Note any references you didn't understand and look them up together",
          "Identify one reference that you think was particularly effective",
          "Notice: do you find more intertextual references in high-culture texts or in popular media?",
        ],
      },
      {
        type: "true-false",
        title: "Intertextuality and the Reader",
        instruction: "Decide whether each statement is true or false.",
        statements: [
          { text: "The more widely you have read, the more intertextual references you will recognise.", answer: true },
          { text: "Missing an intertextual reference means a reader cannot appreciate the text at all.", answer: false },
          { text: "Intertextual references can create a sense of connection between the reader and the author.", answer: true },
          { text: "The writer always expects every reader to recognise every intertextual reference.", answer: false },
          { text: "Wide reading over time makes every new text richer and more resonant.", answer: true },
        ],
      },
      {
        type: "open-response",
        title: "Myth and Intertextuality",
        instruction: "Greek and Roman mythology are among the most frequently referenced source texts in Western literature and culture. Consider how mythological allusions work.",
        parentTip: "If your student is not familiar with Greek mythology, spend some time browsing a mythology resource together before this activity.",
        prompts: [
          { text: "A character is described as having an 'Achilles heel.' What is the source, and what does this allusion add beyond simply saying 'weakness'?", type: "lines", lines: 3 },
          { text: "A story about a brilliant but doomed hero could be described as 'Icarian.' What does this reference add to the description?", type: "lines", lines: 3 },
          { text: "Why might an author choose to reference Greek mythology specifically, rather than another cultural tradition?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Intertextuality vs. Plagiarism",
        instruction: "Understand the difference between intertextual reference and plagiarism.",
        questions: [
          {
            prompt: "What is the key difference between plagiarism and intertextual reference?",
            options: [
              "Plagiarism always involves longer extracts",
              "Intertextual reference acknowledges and engages with the source; plagiarism uses it without acknowledgement or passes it off as original",
              "Intertextual reference only occurs in poems",
              "There is no meaningful difference",
            ],
            answer: "Intertextual reference acknowledges and engages with the source; plagiarism uses it without acknowledgement or passes it off as original",
          },
          {
            prompt: "An author writes a retelling of Hamlet without crediting Shakespeare. Is this plagiarism?",
            options: [
              "Yes, because they are using Shakespeare's story",
              "No, because Hamlet is in the public domain and openly engaging with a canonical text is a form of intertextuality, not plagiarism",
              "Yes, because retellings are always plagiarism",
              "It depends on whether Shakespeare's name appears on the cover",
            ],
            answer: "No, because Hamlet is in the public domain and openly engaging with a canonical text is a form of intertextuality, not plagiarism",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The More You Read, the Richer It Gets",
        content: "Intertextuality rewards readers who read widely. Every new text you read adds to a mental library of references that makes future texts richer and more resonant. When you recognise an allusion that others miss, the text opens up into a larger conversation — you are reading not just the text in front of you but an entire tradition. This is one of the most compelling arguments for wide, diverse reading: not just for its own sake, but because it makes every future text more alive.",
      },
      {
        type: "open-response",
        title: "The Effect on Different Readers",
        instruction: "Intertextuality creates different experiences for readers who recognise the reference and those who do not.",
        parentTip: "This is a nuanced question — the answer is not simply 'one is better.' Discuss together: can a text work well for both audiences simultaneously?",
        prompts: [
          { text: "A novel alludes to Homer's Odyssey throughout. Describe the experience of a reader who recognises every reference.", type: "lines", lines: 3 },
          { text: "Describe the experience of a reader who has never read the Odyssey. Can they still enjoy and understand the novel?", type: "lines", lines: 3 },
          { text: "What responsibility does an author have to readers who might not recognise their references?", type: "lines", lines: 3 },
        ],
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Three-Step Intertextual Analysis",
        instruction: "Apply the three-step intertextual analysis (Identify, Explain the source, Explain the effect) to the following example.",
        parentTip: "Remind your student: step three is the most important — explaining the effect in the new text. Without this, the analysis is incomplete.",
        prompts: [
          { text: "A novel about a politician's downfall is called 'The Brutus Hour.' Apply the three-step analysis: Identify the reference, explain the source (Julius Caesar), and explain the effect in the new text.", type: "lines", lines: 6 },
          { text: "A film's promotional material describes the protagonist as 'a modern-day Cassandra.' Apply the three-step analysis.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Intertextuality in Poetry",
        instruction: "Poetry frequently uses intertextual allusion. Read the following extract and analyse the intertextual reference.\n\n\"I have known the evenings, mornings, afternoons,\nI have measured out my life with coffee spoons.\" (T.S. Eliot, 'The Love Song of J. Alfred Prufrock')\n\nA poet echoes these lines in their own poem: \"I have measured out my years in deadlines and calls / In the coffee cold on my desk while the meeting crawls.\"",
        parentTip: "Discuss the Eliot original together first. The echo is very deliberate — discuss what the new poet gains by referencing Eliot.",
        prompts: [
          { text: "How does the new poem echo Eliot's lines? What is similar and what is different?", type: "lines", lines: 4 },
          { text: "What does the new poem gain by referencing Eliot? What does the reader who recognises the allusion experience?", type: "lines", lines: 4 },
          { text: "What might the new poem be saying about modern life by connecting it to Eliot's portrait of alienation?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Parody",
        instruction: "Choose a well-known genre (fairy tale, news broadcast, romance novel, sports commentary) and write a short parody of it. Your parody should imitate the genre's conventions while exaggerating them for comic or critical effect.",
        parentTip: "Good parody requires deep knowledge of the original — you cannot exaggerate what you do not know. Discuss the conventions of the chosen genre together before writing.",
        prompts: [
          { text: "The genre you are parodying:", type: "lines", lines: 1 },
          { text: "Your parody (6–10 sentences):", type: "box" },
          { text: "Identify three specific conventions you exaggerated and explain the effect:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Intertextuality and Genre",
        instruction: "Consider how genre itself can function as an intertextual reference.",
        questions: [
          {
            prompt: "A novel written in the style of a Victorian detective story but set in the present day is using genre as:",
            options: ["Allusion to Victorian culture", "Pastiche — lovingly imitating an earlier style", "Parody — mocking Victorian fiction", "Plagiarism"],
            answer: "Pastiche — lovingly imitating an earlier style",
          },
          {
            prompt: "When a horror film uses the conventions of the genre (a dark house, a mysterious stranger, an isolated setting) it is referencing:",
            options: ["A specific horror film", "The genre tradition — all the horror texts that established these conventions", "No other texts", "Contemporary news stories"],
            answer: "The genre tradition — all the horror texts that established these conventions",
          },
          {
            prompt: "What effect does placing a story in a familiar genre framework have on the reader?",
            options: [
              "It makes the story boring because the reader already knows what will happen",
              "It creates expectations that the author can either fulfil for satisfaction or subvert for surprise",
              "It removes the need for intertextual references within the story",
              "It has no effect on reader experience",
            ],
            answer: "It creates expectations that the author can either fulfil for satisfaction or subvert for surprise",
          },
        ],
      },
      {
        type: "open-response",
        title: "Analysing an Advertisement's Intertextual References",
        instruction: "A perfume advertisement shows a woman in ancient Greek robes, with the tagline 'Beauty that transcends time.' Analyse the intertextual references at work.",
        parentTip: "Advertisements use classical references to borrow their prestige and associations. This is a common and interesting example of commercial intertextuality.",
        prompts: [
          { text: "What texts or cultural traditions is this advertisement referencing?", type: "lines", lines: 2 },
          { text: "What does the reference to ancient Greece add to the advertisement's message?", type: "lines", lines: 3 },
          { text: "Who is the intended audience for this reference, and who might not recognise it?", type: "lines", lines: 2 },
          { text: "Is this an effective use of intertextuality? Why or why not?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "The Canon and Intertextuality",
        instruction: "The literary 'canon' refers to texts considered most important and influential in a tradition. Intertextual references often draw on canonical texts. Reflect on this.",
        parentTip: "The concept of the literary canon is contested — different cultures, periods, and groups have different canons. This is a productive discussion for critical literacy.",
        prompts: [
          { text: "Why might an author who alludes to Shakespeare be assured that many readers will recognise the reference?", type: "lines", lines: 2 },
          { text: "What happens to readers whose cultural tradition has a different canon? Do they miss out on intertextual meaning in texts from other traditions?", type: "lines", lines: 3 },
          { text: "Whose texts tend to form the 'canon' that most intertextual references draw on? What might this tell us about power and culture?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "true-false",
        title: "Retelling as Critique",
        instruction: "Decide whether each statement about retelling as a form of critique is true or false.",
        statements: [
          { text: "A retelling told from a marginalised character's perspective can challenge the power structures of the original.", answer: true },
          { text: "Retellings always respect and affirm the values of the original text.", answer: false },
          { text: "Wide Sargasso Sea by Jean Rhys retells Jane Eyre from the perspective of the 'madwoman in the attic.'", answer: true },
          { text: "A retelling that gives the villain a sympathetic backstory is a form of social commentary.", answer: true },
          { text: "Retellings have only been a feature of postmodern literature.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Analysing a Song's Intertextual References",
        instruction: "Many song lyrics draw on intertextual references. Choose a song you know that references another text, myth, or cultural tradition and analyse it.",
        parentTip: "There are rich examples across many genres — folk music, hip-hop, classical songwriting, and musical theatre all use intertextual references extensively.",
        prompts: [
          { text: "Name the song and the intertextual reference you identified:", type: "lines", lines: 2 },
          { text: "What does the reference add to the song's meaning?", type: "lines", lines: 3 },
          { text: "Would a listener who doesn't recognise the reference experience the song differently? How?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Intertextuality in Your Own Writing",
        content: "Using intertextual references deliberately in your own writing makes it richer and more resonant. But this only works if you choose references your readers are likely to recognise, or if the reference works even without recognition. The most elegant allusions work on both levels: they add meaning for readers who catch the reference, while still making sense to those who don't. Aim for this quality in your own writing.",
      },
      {
        type: "open-response",
        title: "Writing an Epigraph",
        instruction: "Choose or write a short quote (real or invented) that you would use as an epigraph for a story you might write. Explain your choice.",
        parentTip: "The epigraph is the author's first act of intertextual positioning. It signals theme, tone, and the intellectual tradition the text is in conversation with. Discuss your student's choice together.",
        prompts: [
          { text: "Your chosen or invented epigraph:", type: "lines", lines: 2 },
          { text: "For what kind of story would you use it?", type: "lines", lines: 2 },
          { text: "What does this epigraph signal to readers about the story's themes and concerns?", type: "lines", lines: 3 },
          { text: "Why is an epigraph a more effective opening than simply stating the theme?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Intertextuality and Originality",
        instruction: "Consider the relationship between intertextuality and originality in art.",
        parentTip: "This is one of the deepest questions in aesthetics. There are no right answers — the goal is to develop a thoughtful, argued position.",
        prompts: [
          { text: "The poet T.S. Eliot wrote: 'Immature poets imitate; mature poets steal.' What do you think he meant?", type: "lines", lines: 3 },
          { text: "Is it possible for a text that is heavily intertextual to still be original? Give an example.", type: "lines", lines: 3 },
          { text: "Is every creative act intertextual in some way — shaped by texts the creator has consumed? Argue your view.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating a Retelling Outline",
        instruction: "Plan a retelling of a well-known story (fairy tale, myth, Shakespeare play, or classic novel). Your retelling should shift perspective, time, or setting in a way that comments on the original.",
        parentTip: "Encourage your student to choose a story they know well and care about. The best retellings come from genuine engagement with the source material — and often from genuine frustration with its limitations.",
        prompts: [
          { text: "Original story and your retelling's new angle (different narrator, time period, culture, or genre):", type: "lines", lines: 2 },
          { text: "What aspects of the original are you questioning, celebrating, or critiquing?", type: "lines", lines: 3 },
          { text: "Key events and how they will change in your retelling:", type: "lines", lines: 4 },
          { text: "What will your retelling add to the conversation about the original's themes?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Every Text Is in Conversation",
        content: "No text exists in isolation. Every book you read was written by someone who had read other books, was shaped by them, and responded to them — whether consciously or not. The critic Julia Kristeva wrote that 'every text is an absorption and transformation of another text.' If that is true, then reading is not just an encounter with a single author — it is an encounter with an entire tradition of human thought and storytelling. What tradition do you most want to be in conversation with?",
      },
      {
        type: "multiple-choice",
        title: "Intertextuality in Visual Art and Film",
        instruction: "Consider how intertextuality operates across different media.",
        questions: [
          {
            prompt: "A painting that depicts a contemporary business meeting using the composition of Leonardo da Vinci's The Last Supper is using which form of intertextuality?",
            options: ["Allusion through visual echo", "A direct quotation", "Parody in the literary sense", "Genre pastiche"],
            answer: "Allusion through visual echo",
          },
          {
            prompt: "A film director styles a scene identically to a famous scene from an earlier film. What might this achieve?",
            options: [
              "It is plagiarism and has no artistic merit",
              "It positions the viewer to compare the two films and find meaning in the similarities or differences",
              "It reduces production costs",
              "It has no effect on the viewer",
            ],
            answer: "It positions the viewer to compare the two films and find meaning in the similarities or differences",
          },
        ],
      },
      {
        type: "open-response",
        title: "Writing Your Retelling Opening",
        instruction: "Write the opening two paragraphs of your planned retelling. The intertextual relationship with the original should be clear but the story should work independently.",
        parentTip: "The retelling must work for a reader who doesn't know the original. Test this by asking: if someone had never read the source, would this opening still be engaging and coherent?",
        prompts: [
          { text: "Your retelling opening:", type: "box" },
          { text: "Reflect: how have you signalled the intertextual relationship without making it a requirement?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Identifying Intertextuality in a Text You Are Studying",
        instruction: "Look for intertextual references in a text you are currently studying (a novel, play, poem, or film).",
        parentTip: "If your student is studying a set text, this activity connects directly to their coursework. Intertextual references in set texts are frequently discussed in exam questions.",
        prompts: [
          { text: "Name the text you are studying:", type: "lines", lines: 1 },
          { text: "Identify at least two intertextual references (allusions, quotes, echoes of other texts):", type: "lines", lines: 4 },
          { text: "For one reference, apply the three-step analysis (Identify, Explain source, Explain effect):", type: "lines", lines: 5 },
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "TEE Analysis Paragraph: Intertextuality",
        instruction: "Write a full TEE analytical paragraph about an intertextual reference in a text you are studying. Your explanation should be at least as long as your evidence.",
        parentTip: "The explanation is where most students underperform. Ask: what does the reference do in the new text? What meaning does it add? How does it connect to the theme?",
        prompts: [
          { text: "Your TEE paragraph:", type: "box" },
          { text: "Check: is your explanation longer than your evidence? Does it connect the reference to the text's theme?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Intertextuality and Meaning: Can a Text Mean More Than the Author Intended?",
        instruction: "Discuss the question of authorial intention in intertextuality.",
        parentTip: "This connects to broader questions of literary theory — the 'death of the author' debate. Keep the discussion grounded in concrete examples rather than pure abstraction.",
        prompts: [
          { text: "A reader identifies an allusion in a text that the author later denies placing there intentionally. Is the reader's intertextual reading still valid? Why or why not?", type: "lines", lines: 4 },
          { text: "Can the intertextual meanings added by readers over time become part of a text's meaning, even if the author didn't intend them?", type: "lines", lines: 4 },
          { text: "What is the standard of evidence for claiming a valid intertextual reading?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparative Analysis: Two Retellings of the Same Source",
        instruction: "Compare how two different retellings approach the same source text (e.g. two adaptations of a Shakespeare play, or two retellings of a fairy tale).",
        parentTip: "This comparative task requires close attention to what each retelling chooses to change and keep. The choices reveal each reteller's values and concerns.",
        prompts: [
          { text: "Name the source text and the two retellings:", type: "lines", lines: 2 },
          { text: "How does Retelling A interpret or transform the source?", type: "lines", lines: 3 },
          { text: "How does Retelling B interpret or transform the source differently?", type: "lines", lines: 3 },
          { text: "What do the differences between the two retellings reveal about each author's concerns or values?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Intertextuality as Cultural Memory",
        instruction: "Consider how intertextuality functions as a form of cultural memory.",
        parentTip: "This is a rich conceptual question. Discuss together: what would be lost if people stopped reading classical texts?",
        prompts: [
          { text: "How do intertextual references keep older texts alive in contemporary culture?", type: "lines", lines: 3 },
          { text: "What happens to intertextual meaning when a text that is frequently referenced is no longer widely read?", type: "lines", lines: 3 },
          { text: "Is there a risk that intertextuality becomes a form of cultural exclusion — only accessible to those with a particular education?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Write About What the Reference Does, Not Just What It Is",
        content: "A common mistake in intertextual analysis is identifying the reference and explaining the source, but not completing the analysis by explaining what the reference does in the new text. 'The author alludes to Hamlet' is an observation. 'The allusion to Hamlet positions the reader to interpret the protagonist's hesitation as a form of tragic indecision, deepening the theme of paralysis in the face of moral complexity' — that is analysis. Always complete the final step.",
      },
      {
        type: "open-response",
        title: "Intertextuality in Music: Extended Analysis",
        instruction: "Choose a song, album, or musical work that makes significant intertextual references and write an extended analysis.",
        parentTip: "Musical intertextuality is deeply interesting and often overlooked in English study. Hip-hop, classical composition, folk music, and musical theatre all use it extensively.",
        prompts: [
          { text: "Name the work and its primary intertextual references:", type: "lines", lines: 2 },
          { text: "How do the references work within the music — what do they add?", type: "lines", lines: 4 },
          { text: "What does the work say to the texts it references? Is it honouring, critiquing, or transforming them?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Creating an Intertextual Text: Allusion Exercise",
        instruction: "Write a short piece of prose (8–12 sentences) on a topic of your choice that includes at least three intertextual allusions. The allusions should enrich the meaning of your piece rather than simply showing your knowledge.",
        parentTip: "Discuss the allusions your student wants to use before they write. Ask: will these allusions be recognisable to your intended audience? Will they work even for readers who don't recognise them?",
        prompts: [
          { text: "Your prose piece:", type: "box" },
          { text: "Annotate your three allusions — name the source and explain what each adds to your piece:", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Essay Plan: Intertextuality in a Text You Have Studied",
        instruction: "Plan an essay responding to: 'How does the author use intertextual references to deepen the reader's understanding of the text's themes?' Focus on a text you have studied this year.",
        prompts: [
          { text: "Thesis statement:", type: "lines", lines: 3 },
          { text: "Body paragraph 1 — intertextual reference, evidence, and effect:", type: "lines", lines: 3 },
          { text: "Body paragraph 2 — intertextual reference, evidence, and effect:", type: "lines", lines: 3 },
          { text: "Body paragraph 3 — intertextual reference, evidence, and effect:", type: "lines", lines: 3 },
          { text: "Conclusion:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Intertextuality and Identity",
        instruction: "Consider how intertextual references can be used to affirm or challenge cultural identity.",
        prompts: [
          { text: "How might an author from a marginalised cultural background use intertextual references to their own tradition to assert its value and presence in literature?", type: "lines", lines: 4 },
          { text: "How might an author use references to the dominant cultural canon in a subversive or challenging way?", type: "lines", lines: 3 },
          { text: "What does your own cultural tradition offer as a source of intertextual reference?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Author Is a Reader Too",
        content: "Every author is first a reader. The texts an author has read leave traces in everything they write — sometimes consciously, sometimes unconsciously. When you study intertextuality, you are tracing the reading life of the author as much as the writing choices of the text. It is a form of biographical criticism that does not require knowing anything about the author's life — because their reading life is embedded in the text itself. What traces of your own reading do you think appear in your writing?",
      },
      {
        type: "open-response",
        title: "Intertextuality and Translation",
        instruction: "Consider the challenges of intertextuality when a text is translated into another language and culture.",
        parentTip: "Translation is one of the most interesting applications of intertextuality — some references simply do not exist in the target culture. Discuss: how should translators handle cultural references that won't be recognised?",
        prompts: [
          { text: "A novel in English makes frequent allusions to Australian history and geography. If this novel is translated into Japanese, what challenges arise for the translator?", type: "lines", lines: 4 },
          { text: "Should a translator replace an unrecognisable allusion with an equivalent from the target culture? What are the arguments for and against?", type: "lines", lines: 4 },
        ],
      },
      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Analytical Essay: Intertextuality",
        instruction: "Write a complete analytical essay (introduction + three TEEL body paragraphs + conclusion) on: 'How does the author use intertextual references to develop the theme of [your chosen theme] in [your chosen text]?'",
        parentTip: "Aim for each body paragraph to focus on a distinct type of intertextual reference and connect it clearly to the theme. The thesis should name at least two specific references.",
        prompts: [
          { text: "Introduction and thesis:", type: "box" },
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
          { text: "Conclusion:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Complete Retelling",
        instruction: "Write a complete short story (one to two pages) that is a retelling of a source text you have selected. The retelling should have a clear intertextual relationship with the original while making a new argument or offering a new perspective.",
        parentTip: "Allow two sessions for this task: one for writing, one for revising. Encourage your student to share their retelling with someone who knows the original and get their response.",
        prompts: [
          { text: "Your complete retelling:", type: "box" },
          { text: "Reflect: what new argument or perspective does your retelling offer? How does it change the meaning of the original?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Research: Tracing the Intertextual Web of a Famous Text",
        instruction: "Choose one of the following texts and research its intertextual connections: Hamlet, Jane Eyre, The Great Gatsby, or 1984. Find at least five texts that reference, retell, or are clearly influenced by it.",
        parentTip: "Research tasks develop skills that are essential at senior secondary and university level. Encourage your student to use reliable sources (literary criticism, published analyses, reputable encyclopaedias).",
        prompts: [
          { text: "The text you chose and five texts that reference or respond to it:", type: "box" },
          { text: "Which intertextual relationship do you find most interesting, and why?", type: "lines", lines: 3 },
          { text: "What does tracing this intertextual web reveal about the cultural influence of the original text?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Critical Response: Intertextuality as Elitism?",
        instruction: "Write an extended critical response (three to four paragraphs) to the argument: 'Intertextuality is a form of cultural elitism — it creates texts that are only fully accessible to readers with a particular education, and this is problematic.'",
        parentTip: "Encourage a nuanced response that acknowledges the validity of the concern while also considering counterarguments. The best responses will not simply agree or disagree but will develop a more complex position.",
        prompts: [
          { text: "Your extended critical response:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Designing an Intertextuality Lesson",
        instruction: "Design a lesson plan for teaching intertextuality to a Year 7 class. Include: an introduction, a main activity using a real text, and a creative task.",
        parentTip: "Designing a lesson is one of the highest-order consolidation tasks. It requires your student to think about how the concept works pedagogically — what do students need to learn first? What misconceptions will they have?",
        prompts: [
          { text: "Introduction — how you would introduce the concept to Year 7 students:", type: "lines", lines: 4 },
          { text: "Main activity — the text you would use and the analytical task:", type: "lines", lines: 4 },
          { text: "Creative task — how students would create their own intertextual reference:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Intertextuality Across Your Reading Life",
        instruction: "Reflect on the role of intertextuality in your own reading life.",
        parentTip: "This reflective task is also a consolidation of the whole worksheet. Discuss together before writing — what is the most significant shift in your student's understanding of how texts relate to each other?",
        prompts: [
          { text: "What is the most memorable intertextual reference you have encountered in your reading? Why did it affect you?", type: "lines", lines: 3 },
          { text: "Has studying intertextuality changed how you read? In what way?", type: "lines", lines: 3 },
          { text: "What reading would you need to do to enrich your understanding of intertextual references in the texts you are studying?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "The Future of Intertextuality: AI and Text Generation",
        instruction: "Consider how AI text generation systems change our understanding of intertextuality.",
        parentTip: "This is a genuinely new and interesting question. Encourage your student to think carefully rather than giving a reflexive response.",
        prompts: [
          { text: "AI text generators are trained on enormous amounts of human writing. In what sense are they intertextual?", type: "lines", lines: 3 },
          { text: "Is AI-generated text intertextual in the same way that a human author's deliberate allusion is intertextual? What is the difference?", type: "lines", lines: 4 },
          { text: "What does thinking about AI help us understand about the nature of intertextuality and creativity in human writing?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating an Annotated Intertextual Reading List",
        instruction: "Create a reading list of 10 texts that form an intertextual web around a theme or tradition that interests you. Briefly annotate each entry: what it is, and how it connects to the others.",
        parentTip: "This task develops independence as a reader and a scholar. The reading list your student creates here could guide their independent reading for months.",
        prompts: [
          { text: "Your annotated reading list (theme and 10 texts with brief annotations):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Final Reflection: Intertextuality and What It Means to Read",
        instruction: "Write a reflective essay (three paragraphs) on how studying intertextuality has changed your understanding of what it means to read a text.",
        prompts: [
          { text: "Your reflective essay:", type: "box" },
        ],
      },
      {
        type: "spark",
        title: "Spark: You Are Part of the Conversation",
        content: "When you read, you are not just a passive receiver of meaning — you are a participant in a vast, ongoing conversation between texts, authors, readers, and traditions. Every time you recognise an intertextual reference, you are joining that conversation. Every time you write with deliberate reference to the texts you have read, you are adding your voice to it. The conversation has been going on for thousands of years. It will continue long after any individual text is forgotten. And your reading, and your writing, are part of it.",
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
      // ── FOUNDATIONAL (1–20) — activities above this point are the original 3; now expanding ──
      {
        type: "true-false",
        title: "Syntax Basics",
        instruction: "Decide whether each statement about syntax is true or false.",
        parentTip: "These foundational statements establish the core vocabulary before moving into application.",
        statements: [
          { text: "Syntax refers to the arrangement of words and phrases to create sentences.", answer: true },
          { text: "Varying sentence length is one way writers create rhythm and effect.", answer: true },
          { text: "A simple sentence contains one independent clause and no subordinate clauses.", answer: true },
          { text: "A sentence fragment is always a grammatical error that should be avoided in writing.", answer: false },
          { text: "The position of information within a sentence affects which idea the reader notices most.", answer: true },
        ],
      },
      {
        type: "matching",
        title: "Sentence Types and Definitions",
        instruction: "Match each sentence type to its correct definition.",
        parentTip: "Knowing the terminology allows your student to write about syntax precisely in analytical essays.",
        left: ["Simple sentence", "Compound sentence", "Complex sentence", "Sentence fragment", "Tricolon"],
        right: [
          "One independent clause with no subordinate clauses",
          "Two independent clauses joined by a coordinating conjunction",
          "An independent clause with at least one subordinate clause",
          "A phrase or clause used as a sentence without a complete subject and verb",
          "A list of three parallel items for emphasis or rhythm",
        ],
      },
      {
        type: "multiple-choice",
        title: "Identifying Sentence Types",
        instruction: "Identify the type of each sentence.",
        questions: [
          { prompt: "She ran.", options: ["Simple", "Compound", "Complex", "Fragment"], answer: "Simple" },
          { prompt: "She ran and he followed.", options: ["Simple", "Compound", "Complex", "Fragment"], answer: "Compound" },
          { prompt: "Although she was exhausted, she kept running.", options: ["Simple", "Compound", "Complex", "Fragment"], answer: "Complex" },
          { prompt: "Nothing.", options: ["Simple", "Compound", "Complex", "Fragment"], answer: "Fragment" },
          { prompt: "She came, she saw, she conquered.", options: ["Tricolon", "Compound", "Complex", "Fragment"], answer: "Tricolon" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Syntax Vocabulary",
        instruction: "Fill in the blanks with the correct technical terms.",
        sentences: [
          { text: "Placing a key word or phrase at the beginning of a sentence rather than its usual position is called ___.", blanks: ["fronting"] },
          { text: "A ___ is a list of three parallel items: 'We came, we saw, we conquered.'", blanks: ["tricolon"] },
          { text: "A single word or short phrase used deliberately as a sentence is called a ___.", blanks: ["fragment"] },
          { text: "Varying ___ creates rhythm and controls the pace and emotional weight of writing.", blanks: ["sentence length"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Sentence Has More Impact?",
        instruction: "In each pair, circle the sentence that has greater dramatic impact.",
        questions: [
          { prompt: "Pair A:", options: ["She was very scared.", "Fear."] },
          { prompt: "Pair B:", options: ["Despite everything — the years, the silence, the distance — she still loved him.", "She still loved him despite everything."] },
          { prompt: "Pair C:", options: ["He lost his job, his home, and his family.", "He lost his job. He lost his home. He lost his family."] },
          { prompt: "Pair D:", options: ["Into the dark, she stepped.", "She stepped into the dark."] },
        ],
      },
      {
        type: "tip",
        title: "Tip: Read Your Writing Aloud",
        content: "The single best way to identify problems with sentence rhythm is to read your writing aloud. If you stumble, pause awkwardly, or find yourself running out of breath in a single sentence, your syntax needs attention. If a passage sounds flat and monotonous when read aloud, vary your sentence lengths. Your ear will catch what your eye misses. Every professional writer uses this technique — make it a habit.",
      },
      {
        type: "fill-in-blank",
        title: "Effect of Sentence Length",
        instruction: "Complete the sentences describing the effect of different sentence lengths.",
        parentTip: "These are generalisations — good writers know the 'rules' and know when to break them.",
        sentences: [
          { text: "A very short sentence after several long ones creates a sense of ___ or ___.", blanks: ["shock", "emphasis"] },
          { text: "A long sentence with multiple clauses can suggest ___ or the complexity of a character's thoughts.", blanks: ["atmosphere / building tension"] },
          { text: "Repeating the same sentence length for many consecutive sentences creates a ___ effect.", blanks: ["monotonous / flat"] },
          { text: "A sentence fragment used for effect can convey ___ or ___.", blanks: ["immediacy", "emotional intensity"] },
        ],
      },
      {
        type: "true-false",
        title: "Fronting and Word Order",
        instruction: "Decide whether each statement about fronting is true or false.",
        statements: [
          { text: "Fronting means placing unusual or significant information at the start of a sentence.", answer: true },
          { text: "'Into the darkness, he walked' is an example of fronting.", answer: true },
          { text: "Fronting the object or adverbial of a sentence makes it less noticeable to the reader.", answer: false },
          { text: "Writers use fronting to control which element of a sentence carries the most emphasis.", answer: true },
        ],
      },
      {
        type: "open-response",
        title: "Analysing a Famous Writer's Syntax",
        instruction: "Read the opening paragraph of a novel you admire. Copy it out, then analyse the syntactic choices.",
        parentTip: "This activity connects the worksheet directly to real published writing. Discuss together what this author's syntax tells you about their style.",
        prompts: [
          { text: "Copy the opening paragraph and name the text:", type: "box" },
          { text: "Count the words in each sentence. What is the pattern?", type: "lines", lines: 2 },
          { text: "Label the sentence types (simple, compound, complex, fragment):", type: "lines", lines: 3 },
          { text: "What effect does the syntactic pattern create?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identifying the Effect of Syntax",
        instruction: "Choose the best description of the syntactic effect in each example.",
        questions: [
          {
            prompt: "\"Gone. Everything gone.\" — what effect does this use of fragments create?",
            options: ["It shows poor grammar", "It creates a sense of shock and disorientation", "It slows the reader down", "It creates a sense of calm"],
            answer: "It creates a sense of shock and disorientation",
          },
          {
            prompt: "\"She had waited, and hoped, and prayed, and now — nothing.\" What does the accumulated list create before the fragment?",
            options: ["A sense of tedium", "A building of expectation that makes the final 'nothing' more devastating", "A sense of triumph", "A sense of confusion"],
            answer: "A building of expectation that makes the final 'nothing' more devastating",
          },
          {
            prompt: "\"Slowly, carefully, against every instinct, she opened the letter.\" What does the fronting create?",
            options: ["A sense of urgency", "A slowing of pace that builds tension and foregrounds her reluctance", "A sense of joy", "Grammatical awkwardness"],
            answer: "A slowing of pace that builds tension and foregrounds her reluctance",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Syntax Safari",
        instruction: "Over the next two days, collect examples of interesting syntax from texts you read.",
        parentTip: "Discuss the examples together — which are most effective and why?",
        suggestions: [
          "Find one example of a sentence fragment used for dramatic or comic effect",
          "Find one example of a tricolon",
          "Find one example of fronting",
          "Find one example of a long sentence followed immediately by a very short one",
          "Rank your examples: which is the most effective use of syntax you found?",
        ],
      },
      {
        type: "open-response",
        title: "Rewriting a Flat Paragraph",
        instruction: "Rewrite the following dull paragraph using at least three syntactic techniques to make it more dramatic.\n\n\"She walked to the door. She opened it. There was a person standing outside. She did not know who they were. She felt scared.\"",
        parentTip: "Discuss multiple versions — there is no single right answer.",
        prompts: [
          { text: "Your rewrite:", type: "box" },
          { text: "Label the three or more techniques you used:", type: "lines", lines: 4 },
          { text: "Read your rewrite aloud. What is most effective?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Sentences Have a Body",
        content: "The critic I.A. Richards wrote that rhythm in prose is not just an aesthetic pleasure — it is a physical experience. Long, winding sentences slow the breath; short, stabbing sentences quicken the pulse. Syntax creates a bodily experience as much as an intellectual one. Next time you read something that moves you, pay attention to your body as well as your mind. What is the sentence structure doing to your breathing, your pulse, your sense of time? That is syntax working at its deepest level.",
      },
      {
        type: "open-response",
        title: "Syntax for Different Emotional Effects",
        instruction: "Write two versions of the same basic scene — a character receiving a phone call — using different syntax to create different emotional effects.",
        parentTip: "The content can be almost identical; the syntax should do all the work of creating different feelings.",
        prompts: [
          { text: "Version A — short, fragmented sentences to create shock and immediacy:", type: "box" },
          { text: "Version B — long, flowing sentences to create numbness or unreality:", type: "box" },
          { text: "What specific syntactic choices created the different effects?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "true-false",
        title: "Syntax in Different Text Types",
        instruction: "Decide whether each statement is true or false.",
        statements: [
          { text: "The same syntactic techniques used in creative writing are also found in journalism and persuasive writing.", answer: true },
          { text: "Academic writing always uses complex sentences and never uses fragments.", answer: false },
          { text: "Syntax is a key tool in creating a writer's distinctive voice.", answer: true },
          { text: "The best writers always use the most grammatically complex sentence structures.", answer: false },
          { text: "Reading widely exposes students to a greater variety of syntactic styles, which improves their own writing.", answer: true },
        ],
      },
      {
        type: "open-response",
        title: "Original Writing: Syntax in Action",
        instruction: "Write a short scene (8–12 sentences) describing a moment of tension or discovery. Use at least four different syntactic techniques deliberately. After writing, annotate your work to identify each technique used.",
        parentTip: "Suggest a scenario if needed: finding something unexpected in an old box; arriving somewhere for the first time; a conversation that ends badly.",
        prompts: [
          { text: "Your scene:", type: "box" },
          { text: "List the syntactic techniques you used and where you used them:", type: "lines", lines: 5 },
        ],
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Close Reading: Syntax in Orwell",
        instruction: "Read the following passage and perform a close syntactic reading.\n\n\"It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.\" (George Orwell, 1984)",
        parentTip: "The length and complexity of the second sentence creates a sense of effort and difficulty that mirrors the world being described.",
        prompts: [
          { text: "How many clauses does the second sentence contain? How does this complexity affect the reading experience?", type: "lines", lines: 3 },
          { text: "What is the effect of the parenthetical phrase 'his chin nuzzled into his breast in an effort to escape the vile wind'?", type: "lines", lines: 4 },
          { text: "How does the syntax begin to establish the tone and themes of the novel?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax and Character Voice",
        instruction: "Consider how syntax helps establish a character's voice in first-person narration.",
        parentTip: "Syntax — how a character structures their thoughts — is as important as vocabulary in creating a distinctive voice.",
        prompts: [
          { text: "A teenage character who thinks in short, fragmented sentences versus one who uses long complex sentences — what does each syntactic style suggest about the character?", type: "lines", lines: 4 },
          { text: "Write two sentences as a character in a panicked state. Then write two sentences as the same character once calm. How does the syntax change?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Parallel Structure",
        instruction: "Parallel structure means using the same grammatical form for items in a list or series. It creates rhythm, clarity, and rhetorical force.",
        parentTip: "Parallelism is one of the fundamental tools of rhetoric. Once students learn to see it, they find it everywhere.",
        prompts: [
          { text: "Identify the parallel structure and explain its effect: 'She wanted freedom, equality, and justice — not as ideals, but as facts of daily life.'", type: "lines", lines: 3 },
          { text: "Rewrite to use parallel structure: 'He enjoyed running, to swim, and he liked it when he could cycle.'", type: "lines", lines: 2 },
          { text: "Write a sentence using parallel structure to make an argument about something you care about:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Syntax for Tone",
        instruction: "Match the syntactic style to the tone it most effectively creates.",
        questions: [
          {
            prompt: "Short declarative sentences with no qualifications:",
            options: ["Uncertainty and anxiety", "Confidence and authority", "Nostalgia and reflection", "Confusion"],
            answer: "Confidence and authority",
          },
          {
            prompt: "Long, winding sentences with many subordinate clauses:",
            options: ["Shock and immediacy", "Reflection, complexity, or inner turmoil", "Aggression", "Joy"],
            answer: "Reflection, complexity, or inner turmoil",
          },
          {
            prompt: "Sentence fragments punctuated by white space:",
            options: ["Academic authority", "Shock, disorientation, or overwhelming emotion", "Calm reflection", "Formal argument"],
            answer: "Shock, disorientation, or overwhelming emotion",
          },
        ],
      },
      {
        type: "open-response",
        title: "Analysing Syntax in Journalism",
        instruction: "Compare a news report and an opinion piece from the same publication on the same topic.",
        parentTip: "If possible, find actual examples online. The difference in syntax between news reporting and opinion writing is often very clear.",
        prompts: [
          { text: "Describe the typical sentence length and type in the news report:", type: "lines", lines: 3 },
          { text: "Describe the typical sentence length and type in the opinion piece:", type: "lines", lines: 3 },
          { text: "What does the difference in syntax tell you about the different purposes of each text type?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Sustained Syntactic Constraint",
        instruction: "Write a paragraph (8–10 sentences) about any topic using ONLY short, simple sentences of no more than 8 words each. Then write the same paragraph using ONLY long, complex sentences.",
        parentTip: "These constraints force students out of their default syntactic habits. The reflection is as important as the writing.",
        prompts: [
          { text: "Short sentence version:", type: "box" },
          { text: "Long sentence version:", type: "box" },
          { text: "Reflect: what can each style do that the other cannot?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Analytical Sentences About Syntax",
        instruction: "Complete each analytical sentence about syntax.",
        sentences: [
          { text: "The author uses ___ sentences to create a sense of ___, which mirrors the character's emotional state.", blanks: ["short / fragmented", "shock / panic"] },
          { text: "The fronting of ___ places special emphasis on ___ rather than the subject.", blanks: ["[phrase]", "[the fronted element]"] },
          { text: "The tricolon creates a sense of ___ and gives the argument ___ authority.", blanks: ["completeness / inevitability", "rhetorical"] },
        ],
      },
      {
        type: "open-response",
        title: "Syntax in Poetry: Emily Dickinson",
        instruction: "Consider how syntax creates meaning in the following poem extract.\n\n\"Because I could not stop for Death —\nHe kindly stopped for me —\nThe Carriage held but just Ourselves —\nAnd Immortality.\" (Emily Dickinson)",
        parentTip: "Discuss the dashes, the capitalisation, and the way the sentence unfolds across lines.",
        prompts: [
          { text: "How do Dickinson's dashes affect the pace and rhythm of reading?", type: "lines", lines: 3 },
          { text: "The final line 'And Immortality.' stands alone. What syntactic effect does this create?", type: "lines", lines: 3 },
          { text: "How does the syntax contribute to the tone and meaning of this poem?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Revise for Syntax",
        content: "Strong syntax is almost never achieved in a first draft — it is found in revision. When you revise, focus on one sentence at a time and ask: Is this the right length? Is the most important information in the most prominent position? Have I varied my sentence patterns recently? Could a fragment create more impact here? Could fronting shift the emphasis? Revision is where the craft of syntax is actually practised.",
      },
      {
        type: "open-response",
        title: "Rhetorical Questions and Syntax",
        instruction: "A rhetorical question is asked for effect rather than for a genuine answer. Analyse how rhetorical questions function as a syntactic device.",
        parentTip: "Rhetorical questions shift the sentence structure from declarative to interrogative for rhetorical effect.",
        prompts: [
          { text: "'Are we really going to allow this to continue?' — what does this do that 'We should not allow this to continue' does not?", type: "lines", lines: 3 },
          { text: "Write two rhetorical questions of your own on a topic you care about. Then analyse what each achieves:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Revision Exercise: Syntax",
        instruction: "Find a paragraph from your own recent writing. Analyse its syntax and then revise it to make it more varied and effective.",
        parentTip: "Encourage your student to be honest about where their default patterns are — and to experiment with breaking them.",
        prompts: [
          { text: "Copy your original paragraph here:", type: "box" },
          { text: "Analyse: what are the weaknesses in the syntax?", type: "lines", lines: 3 },
          { text: "Your revised paragraph:", type: "box" },
          { text: "Label the specific improvements you made:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax and Meaning: Form Mirrors Content",
        instruction: "The most effective syntactic choices create a form that mirrors the content — the sentence feels like what it describes.",
        parentTip: "This concept — that form and content are inseparable — is one of the deepest ideas in literary analysis.",
        prompts: [
          { text: "\"He moved through the thick mud, each step costing him something, each metre a negotiation between his body and the ground.\" How does the syntax mirror the content?", type: "lines", lines: 3 },
          { text: "Write a sentence about a moment of sudden realisation in which the syntax enacts the suddenness:", type: "lines", lines: 2 },
          { text: "Write a sentence about the passing of time in which the length and structure mimics time passing slowly:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Sentence as Architecture",
        content: "Think of a sentence as a piece of architecture: every element has a position, and the position determines its function and weight. The subject is the foundation, the verb is the main load-bearing wall, and the modifiers are the rooms and details built around them. When you move elements from their conventional positions — fronting an adverbial phrase, ending with a fragment — you are redesigning the architecture. Some designs are functional; others are beautiful; the best are both. What is the most beautifully constructed sentence you have ever read?",
      },
      {
        type: "multiple-choice",
        title: "Syntax in Dialogue",
        instruction: "Consider how syntax reveals character in dialogue.",
        questions: [
          {
            prompt: "A character says: 'I — well — that is — I'm not sure.' What does the fragmented syntax reveal?",
            options: ["They are confident", "They are hesitant, nervous, or unsure", "They are angry", "They are formal"],
            answer: "They are hesitant, nervous, or unsure",
          },
          {
            prompt: "'This is what will happen. You will leave. You will not return. Is that clear?' What does this syntax convey?",
            options: ["Uncertainty", "Power, control, and finality", "Fear", "Warmth"],
            answer: "Power, control, and finality",
          },
          {
            prompt: "A political speech uses short, punchy sentences throughout. What effect does this create?",
            options: ["It makes the speech sound uncertain", "It creates clarity, confidence, and easy memorability", "It seems academic", "It creates overwhelming complexity"],
            answer: "It creates clarity, confidence, and easy memorability",
          },
        ],
      },
      {
        type: "open-response",
        title: "Writing Dialogue With Syntactic Character",
        instruction: "Write a short dialogue (8–10 lines) between two characters with very different syntactic styles — one speaks in short, clipped sentences; one in long, elaborate ones. The syntax should reveal their personalities.",
        parentTip: "Read the dialogue aloud together to test whether each character's voice is distinctive. The syntactic difference should be immediately audible.",
        prompts: [
          { text: "Your dialogue:", type: "box" },
          { text: "Describe what each character's syntax reveals about their personality:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax in Persuasive Writing",
        instruction: "Analyse how syntax is used in a persuasive extract of your choice (speech, editorial, or advertisement).",
        prompts: [
          { text: "The extract and its source:", type: "lines", lines: 2 },
          { text: "What sentence types dominate? What effect does this create?", type: "lines", lines: 3 },
          { text: "Identify one specific syntactic technique (tricolon, fragment, fronting, rhetorical question) and explain its effect:", type: "lines", lines: 3 },
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "TEE Analysis: Syntax in a Set Text",
        instruction: "Write a full TEE analytical paragraph about how a specific syntactic technique is used in a text you are studying. Choose one specific example and analyse it in depth.",
        parentTip: "The explanation section should be the longest. Ask: what specific words create the effect? How does the sentence position the reader? How does it connect to the theme?",
        prompts: [
          { text: "Your TEE paragraph:", type: "box" },
          { text: "Self-check: is your explanation at least as long as your evidence? Does it connect syntax to theme?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Syntactic Styles Across Two Authors",
        instruction: "Compare the syntactic styles of two authors you have studied. Use specific examples.",
        parentTip: "Encourage your student to make genuine comparisons within each paragraph rather than describing each author in turn.",
        prompts: [
          { text: "Name the two authors:", type: "lines", lines: 1 },
          { text: "Compare their typical sentence length and complexity:", type: "lines", lines: 4 },
          { text: "Compare their use of specific techniques (fragments, fronting, tricolon, etc.):", type: "lines", lines: 4 },
          { text: "What does each author's syntactic style reveal about their voice and purpose?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Stream of Consciousness",
        instruction: "Stream of consciousness attempts to replicate the unfiltered flow of a character's thoughts using fragmented, associative syntax. Attempt a short extract.",
        parentTip: "Discuss examples from Virginia Woolf's Mrs Dalloway before your student attempts this.",
        prompts: [
          { text: "Write 8–10 sentences of stream-of-consciousness narrative for a character in a moment of crisis:", type: "box" },
          { text: "What specific syntactic choices create the effect of unfiltered thought?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax Across the History of English Prose",
        instruction: "The syntax of English prose has changed significantly across history. Consider how syntax reflects the period it was written in.",
        prompts: [
          { text: "How might you expect the syntax of a seventeenth-century text to differ from a contemporary novel?", type: "lines", lines: 3 },
          { text: "Why might contemporary readers find very long periodic sentences from Victorian literature difficult?", type: "lines", lines: 3 },
          { text: "Is the increasing prevalence of short sentences in contemporary writing a gain or a loss? Argue your view.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Label Syntax in Your Essays",
        content: "When writing analytically about syntax, always name the specific technique precisely. Do not write 'the author uses interesting sentences.' Write: 'The author's use of sentence fragments in this passage creates a staccato rhythm that mirrors the protagonist's panic.' The precision of your language in naming the technique is part of the analysis itself.",
      },
      {
        type: "open-response",
        title: "Syntax for Different Audiences",
        instruction: "Consider how writers adjust their syntax for different audiences.",
        prompts: [
          { text: "How might the syntax of a news article differ from an academic journal on the same topic?", type: "lines", lines: 3 },
          { text: "How might the syntax of a children's book differ from an adult novel? What is the purpose of these differences?", type: "lines", lines: 3 },
          { text: "Rewrite this sentence for a younger audience: 'The increasingly complex geopolitical situation necessitates a recalibration of existing diplomatic frameworks.'", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Essay Plan: Syntax in a Text You Have Studied",
        instruction: "Plan an essay responding to: 'How does the author manipulate sentence structure and syntax to create specific effects in [your chosen text]?'",
        prompts: [
          { text: "Thesis statement:", type: "lines", lines: 3 },
          { text: "Body paragraph 1 — technique, evidence, effect:", type: "lines", lines: 3 },
          { text: "Body paragraph 2 — technique, evidence, effect:", type: "lines", lines: 3 },
          { text: "Body paragraph 3 — technique, evidence, effect:", type: "lines", lines: 3 },
          { text: "Conclusion:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax in Speeches: Oratorical Techniques",
        instruction: "Great speeches use syntax as a primary tool. Analyse the syntax of a speech extract.",
        parentTip: "Martin Luther King's 'I Have a Dream,' Churchill's wartime speeches, and Greta Thunberg's climate speeches are all excellent examples.",
        prompts: [
          { text: "Copy a short extract (4–6 sentences) from a famous speech:", type: "box" },
          { text: "Identify the syntactic techniques used (tricolon, anaphora, fronting, rhetorical questions, etc.):", type: "lines", lines: 4 },
          { text: "How does syntax work differently in a spoken speech than in written prose?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax and Humour",
        instruction: "Comic writing uses syntax very deliberately. Analyse how syntax creates humour.",
        parentTip: "Timing in comedy is largely syntactic — the punch line works because of where it sits in the sentence.",
        prompts: [
          { text: "'I told my doctor I broke my arm in two places. He told me to stop going to those places.' How does the position of the punchline create the comedic effect?", type: "lines", lines: 3 },
          { text: "Bathos places something trivial after something serious. Write an example: 'He had faced war, famine, and the loss of everyone he loved —' (add a bathetic ending):", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Syntactic Imitation",
        instruction: "Choose a short passage from a writer whose syntax you admire. Imitate their syntactic style in a new passage about a completely different topic.",
        parentTip: "Imitation is one of the oldest and most effective techniques for developing style. Discuss: what is the difference between imitation as learning and imitation as plagiarism?",
        prompts: [
          { text: "The author you chose and a brief description of their syntactic style:", type: "lines", lines: 2 },
          { text: "Your imitation passage:", type: "box" },
          { text: "What did you learn about this author's style from trying to replicate it?", type: "lines", lines: 3 },
        ],
      },
      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Analytical Essay: Syntax",
        instruction: "Write a complete analytical essay (introduction + three TEEL body paragraphs + conclusion) on: 'How does the author manipulate syntax to control pacing, emphasis, and emotional effect in [your chosen text]?'",
        parentTip: "The thesis should name specific syntactic techniques and connect them to specific effects. Each body paragraph should develop one technique in depth.",
        prompts: [
          { text: "Introduction and thesis:", type: "box" },
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
          { text: "Conclusion:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Creative Writing: A Syntactically Sophisticated Scene",
        instruction: "Write a complete scene (1–2 pages) that demonstrates mastery of at least six different syntactic techniques. After writing, annotate the scene to identify every technique used.",
        parentTip: "This is the creative culmination of this worksheet. Encourage your student to choose a scene that genuinely excites them.",
        prompts: [
          { text: "Your scene:", type: "box" },
          { text: "Full annotation of syntactic techniques:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Research: Syntax Across Languages",
        instruction: "Different languages have different default syntactic structures. Research how syntax works differently in one other language and consider what this means for translation.",
        prompts: [
          { text: "The language you researched and one key way its syntax differs from English:", type: "lines", lines: 3 },
          { text: "How does translating from this language into English create syntactic challenges?", type: "lines", lines: 3 },
          { text: "What does this tell you about the relationship between syntax and meaning?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax and Power in Public Discourse",
        instruction: "Consider how control over syntax is a form of authority in public life.",
        prompts: [
          { text: "How do complex, bureaucratic sentences in legal and government documents affect ordinary readers' access to information?", type: "lines", lines: 3 },
          { text: "Why might politicians often choose simple, direct syntax for their most important messages?", type: "lines", lines: 3 },
          { text: "Is plain language legislation requiring government documents to be written simply a good idea? Argue your view.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: How Studying Syntax Has Changed Your Writing",
        instruction: "Write a reflective response on how your awareness of syntax has changed as a result of this worksheet.",
        prompts: [
          { text: "What is the single most useful syntactic technique you have learned, and why?", type: "lines", lines: 3 },
          { text: "How has your awareness of syntax changed how you read?", type: "lines", lines: 3 },
          { text: "What specific change will you make to your own writing?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Designing a Syntax Lesson",
        instruction: "Design a lesson for teaching sentence variety and syntax to a Year 6 class. Include: an introduction, a model text, a practice activity, and a creative task.",
        prompts: [
          { text: "Introduction — how you would explain sentence variety to Year 6:", type: "lines", lines: 3 },
          { text: "Model text — which passage you would use and why:", type: "lines", lines: 2 },
          { text: "Practice activity:", type: "lines", lines: 3 },
          { text: "Creative task:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "The Hardest Sentence You Have Written",
        instruction: "Think about a sentence you have worked on for a long time — one where you revised it multiple times to get the syntax right. Describe the process.",
        parentTip: "If your student hasn't had this experience, invite them to do it now.",
        prompts: [
          { text: "Your original sentence:", type: "lines", lines: 2 },
          { text: "What was wrong with it, and what did you try?", type: "lines", lines: 3 },
          { text: "Your final version:", type: "lines", lines: 2 },
          { text: "What made the final version better?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Syntax Manifesto",
        instruction: "Write a short personal manifesto (6–10 sentences) for your own approach to syntax as a writer. What principles will guide how you construct sentences?",
        parentTip: "A manifesto is a declaration of values and commitments. This task invites your student to take ownership of syntax as a conscious craft choice.",
        prompts: [
          { text: "Your syntax manifesto:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Peer Review: Syntax",
        instruction: "Exchange a piece of writing with someone else and provide specific feedback on their use of syntax. Focus on sentence variety, rhythm, and the effectiveness of specific syntactic choices.",
        parentTip: "Giving specific, constructive feedback on someone else's syntax requires a precise understanding of the concept.",
        prompts: [
          { text: "Specific syntactic strengths:", type: "lines", lines: 3 },
          { text: "Two specific syntactic suggestions for improvement:", type: "lines", lines: 3 },
          { text: "What did reviewing someone else's syntax teach you about your own?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Your Sentence, Your Voice",
        content: "Every writer who has ever mattered has a distinctive syntactic voice — a way of constructing sentences that is recognisably theirs. Hemingway's short declaratives. Woolf's long, sinuous interior sentences. McCarthy's biblical rhythms. Your syntactic voice is one of the most personal things about your writing. It develops slowly, through thousands of hours of reading and writing, through imitation and experimentation and revision. But it begins now, with a single deliberate choice about how to arrange the words in a sentence. What is your sentence?",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "true-false",
        title: "What Is an Analytical Essay?",
        instruction: "Decide whether each statement about analytical essays is true or false.",
        parentTip: "These statements establish what an analytical essay is and is not — crucial for students who confuse it with summary writing.",
        statements: [
          { text: "An analytical essay makes an argument about a text, not just a summary of what happens.", answer: true },
          { text: "A strong thesis statement is specific, arguable, and names techniques and themes.", answer: true },
          { text: "Quoting from the text is enough on its own — you do not need to explain the quote.", answer: false },
          { text: "Each body paragraph in an analytical essay should advance the essay's central argument.", answer: true },
          { text: "The conclusion should simply repeat the introduction in different words.", answer: false },
        ],
      },
      {
        type: "matching",
        title: "TEEL Paragraph Structure",
        instruction: "Match each part of the TEEL structure to its correct description.",
        parentTip: "TEEL is the core paragraph structure for analytical writing. Every student should know it thoroughly.",
        left: ["T — Topic sentence", "E — Evidence", "E — Explanation", "L — Link"],
        right: [
          "States the argument of this paragraph — one clear idea connected to the thesis",
          "A relevant quote or specific textual reference",
          "Unpacks the language — names the technique, the specific words, and the effect on the reader",
          "Connects back to the essay question or thesis",
        ],
      },
      {
        type: "multiple-choice",
        title: "Strong vs. Weak Thesis Statements",
        instruction: "Identify which thesis statement in each pair is stronger, and be ready to explain why.",
        questions: [
          {
            prompt: "Question: 'How does the author use language to build tension?' Which is the stronger thesis?",
            options: [
              "A: 'The author uses many techniques to build tension in the text.'",
              "B: 'The author uses fragmented syntax and the repeated motif of silence to build an atmosphere of dread that positions the reader to feel the protagonist's growing isolation.'",
            ],
            answer: "B: 'The author uses fragmented syntax and the repeated motif of silence to build an atmosphere of dread that positions the reader to feel the protagonist's growing isolation.'",
          },
          {
            prompt: "Question: 'How is the theme of identity explored?' Which is the stronger thesis?",
            options: [
              "A: 'The author explores identity through the use of symbolism and language.'",
              "B: 'Through the recurring symbol of the protagonist's fractured reflection and the shifting use of first-person narration, the author argues that identity is not fixed but continuously constructed through conflict with others.'",
            ],
            answer: "B: 'Through the recurring symbol of the protagonist's fractured reflection and the shifting use of first-person narration, the author argues that identity is not fixed but continuously constructed through conflict with others.'",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Essay Structure Vocabulary",
        instruction: "Fill in the blanks with the correct terms.",
        sentences: [
          { text: "The ___ statement is the central argument of the essay, usually at the end of the introduction.", blanks: ["thesis"] },
          { text: "A ___ paragraph uses the structure: Topic sentence, Evidence, Explanation, Link.", blanks: ["TEEL"] },
          { text: "The ___ should synthesise your argument — not just repeat the introduction.", blanks: ["conclusion"] },
          { text: "In an analytical essay, every quote should be ___ to show how the language creates an effect.", blanks: ["analysed / explained"] },
        ],
      },
      {
        type: "true-false",
        title: "Common Essay Writing Mistakes",
        instruction: "Decide whether each description is a mistake or good practice.",
        statements: [
          { text: "Dropping a long quote into an essay without any analysis (quote-dropping) is good evidence use.", answer: false },
          { text: "Beginning a body paragraph with a topic sentence that clearly states the paragraph's argument is good practice.", answer: true },
          { text: "Using vague language like 'the author makes it interesting' is specific analytical writing.", answer: false },
          { text: "Naming the specific technique (e.g. 'metaphor,' 'connotation,' 'syntax') before analysing it is good practice.", answer: true },
          { text: "A conclusion that introduces a completely new argument not mentioned in the essay is effective.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Thesis Statement Practice",
        instruction: "Write a thesis statement for each of the following essay questions. A strong thesis should name specific techniques and themes — it should be arguable, not just descriptive.",
        parentTip: "Compare thesis statements together — the best ones make you want to read on. Weak ones feel vague or obvious.",
        prompts: [
          { text: "Question: 'How does the author use language to build tension in the opening chapter?' Write your thesis:", type: "lines", lines: 3 },
          { text: "Question: 'How does this text challenge the reader's assumptions about power?' Write your thesis:", type: "lines", lines: 3 },
          { text: "Question: 'How is the theme of identity explored in this text?' Write your thesis:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Which Part of TEEL Is This?",
        instruction: "Identify which part of TEEL each sentence extract belongs to.",
        questions: [
          { prompt: "'The author therefore positions the reader to understand that loss is not something that can be overcome, but only carried — which speaks directly to the essay's exploration of grief as a permanent state.'", options: ["Topic sentence", "Evidence", "Explanation", "Link"], answer: "Link" },
          { prompt: "'The author employs the metaphor of a cracked mirror to represent the protagonist's fragmented sense of self.'", options: ["Topic sentence", "Evidence", "Explanation", "Link"], answer: "Topic sentence" },
          { prompt: "'She saw herself in pieces — each shard reflecting a different version of the girl she used to be.'", options: ["Topic sentence", "Evidence", "Explanation", "Link"], answer: "Evidence" },
          { prompt: "'The verb \"pieces\" and the noun \"shard\" both carry connotations of violence and irreparability, suggesting that the protagonist's sense of identity has been not merely disrupted but destroyed.'", options: ["Topic sentence", "Evidence", "Explanation", "Link"], answer: "Explanation" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Completing an Analytical Sentence",
        instruction: "Complete each analytical sentence to model the skill of unpacking a quote.",
        sentences: [
          { text: "The author uses the ___ of 'crumbling' to convey the sense that ___, positioning the reader to feel ___.", blanks: ["connotation", "the setting is in decline", "anxiety"] },
          { text: "The repetition of the word '___ ' throughout the passage creates a sense of ___ that mirrors the character's ___.", blanks: ["[word]", "insistence / obsession", "emotional state"] },
          { text: "By fronting the phrase '___ ' at the start of the sentence, the author places emphasis on ___ rather than ___.", blanks: ["[phrase]", "[the fronted element]", "the subject"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Observation or Analysis?",
        instruction: "In each pair, circle the analytical sentence (the one that names a technique and explains its effect) rather than the mere observation.",
        questions: [
          { prompt: "Pair A:", options: ["The character feels sad at the end of the chapter.", "The use of pathetic fallacy — the storm breaking as the character discovers the truth — externalises the protagonist's grief and positions the reader to understand loss as something that overwhelms the self."] },
          { prompt: "Pair B:", options: ["The author uses a metaphor of a prison to describe the character's home, suggesting that domesticity is experienced as confinement and connecting to the text's broader theme of women's restricted freedoms.", "The character feels trapped in their house."] },
          { prompt: "Pair C:", options: ["The author makes the villain seem scary.", "The villain is consistently described in animalistic terms — 'prowling,' 'circling,' 'hunting' — which positions the reader to fear him as a predator rather than a person, dehumanising him in a way that mirrors the text's argument about how power corrupts empathy."] },
        ],
      },
      {
        type: "tip",
        title: "Tip: The Explanation Is the Most Important Part",
        content: "The most common mistake in analytical essays is underdeveloped explanation. Students often write a good topic sentence, find a strong quote, and then write one sentence of explanation. But the explanation is where the real thinking happens. It should be at least as long as the quote — often longer. Ask yourself: What specific words are doing the work? What technique is being used? What is the connotation of these words? What effect do they have on the reader? How does this connect to the theme? Answer all of these questions in your explanation.",
      },
      {
        type: "open-response",
        title: "TEEL Paragraph Development",
        instruction: "Use the TEEL structure to write a full analytical paragraph in response to: 'How does the author use language to create a sense of isolation?'\n\nYou may draw on any text you have studied, or use this prompt quote: 'She sat at the window, watching the street below where children moved through the yellow afternoon light, and she felt the glass between them as something more than glass.'",
        parentTip: "The analysis is the hardest part. Ask: what does 'yellow afternoon light' suggest? What does 'something more than glass' mean? What concept is the glass standing in for?",
        prompts: [
          { text: "Topic sentence:", type: "lines", lines: 2 },
          { text: "Evidence (quote):", type: "lines", lines: 2 },
          { text: "Explanation / Analysis:", type: "lines", lines: 6 },
          { text: "Link:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "multiple-choice",
        title: "What Makes a Strong Introduction?",
        instruction: "Choose the best answer for each question about essay introductions.",
        questions: [
          {
            prompt: "What are the three main components of a strong analytical essay introduction?",
            options: [
              "A summary of the plot, a list of characters, and your personal opinion",
              "General context (the text and its themes), a brief overview of your argument, and a clear specific thesis",
              "A rhetorical question, a dictionary definition, and a quote from the text",
              "The author's biography, the date of publication, and a summary of reviews",
            ],
            answer: "General context (the text and its themes), a brief overview of your argument, and a clear specific thesis",
          },
          {
            prompt: "Where should the thesis statement appear in the introduction?",
            options: ["At the very beginning", "In the middle", "At the end", "It doesn't matter"],
            answer: "At the end",
          },
          {
            prompt: "What does 'funnelling' mean in the context of essay introductions?",
            options: [
              "Starting with a very narrow specific point and broadening to a general claim",
              "Starting with a broad general statement and narrowing to a specific argumentative thesis",
              "Starting with a quote and ending with a question",
              "Starting with the conclusion and working backwards",
            ],
            answer: "Starting with a broad general statement and narrowing to a specific argumentative thesis",
          },
        ],
      },
      {
        type: "open-response",
        title: "Introduction Writing",
        instruction: "Write an introduction (4–6 sentences) for an analytical essay responding to: 'How does the author use language to position the reader to feel sympathy for the protagonist?'\n\nYour introduction should name the text and author (you can invent these), give brief context, and end with a clear thesis statement.",
        parentTip: "The introduction should be a funnel: start broad, narrow to specific. The thesis is the narrow tip.",
        prompts: [
          { text: "Your introduction:", type: "box" },
          { text: "Does your final sentence contain a clear, specific, arguable thesis? If not, revise it here:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Essay Connective Language",
        instruction: "Fill in the blanks with appropriate essay connective language.",
        parentTip: "These connective phrases help students build coherent, multi-paragraph arguments. They should become automatic.",
        sentences: [
          { text: "This is further demonstrated by ___, where the author ___.", blanks: ["[evidence]", "[technique and effect]"] },
          { text: "This connects to the broader theme of ___, which the author develops throughout the text by ___.", blanks: ["[theme]", "[technique]"] },
          { text: "___, the author continues to develop this idea in the following chapter, when ___.", blanks: ["Furthermore", "[reference]"] },
          { text: "In conclusion, the author uses ___ and ___ to argue that ___.", blanks: ["[technique 1]", "[technique 2]", "[central argument]"] },
        ],
      },
      {
        type: "home-activity",
        title: "Essay Marking Exercise",
        instruction: "With your parent, find a student essay online (many educational websites publish sample essays with teacher feedback). Read the essay and try to give it a mark based on: strength of thesis, quality of evidence, depth of explanation, and essay structure.",
        parentTip: "Reading and evaluating other students' essays is one of the best ways to understand what makes a strong essay. Discuss your markings together — where do you agree and disagree?",
        suggestions: [
          "Identify the thesis statement — is it specific and arguable?",
          "Choose one body paragraph and evaluate the TEEL structure",
          "Identify where the explanation could be more detailed",
          "Evaluate the conclusion — does it synthesise or just repeat?",
          "What is the single most effective thing about this essay?",
        ],
      },
      {
        type: "tip",
        title: "Tip: Argue, Don't Narrate",
        content: "The most reliable sign of a weak analytical essay is narration — sentences like 'Then the character does this, then this happens, then the author shows...' These sentences are telling a story rather than making an argument. Every sentence in an analytical essay should either state an argument, provide evidence, analyse evidence, or connect evidence to the argument. If you find yourself narrating what happens, stop and ask: what technique is at work here, and what does it do to the reader?",
      },
      {
        type: "open-response",
        title: "Converting Narration to Analysis",
        instruction: "Rewrite each of the following narrative sentences as analytical sentences that identify a technique and explain its effect.",
        parentTip: "This is a precise and valuable skill. Discuss the rewrites together — does the analytical version feel like a different kind of thinking?",
        prompts: [
          { text: "Narrative: 'The character walks into the dark forest and feels scared.' Your analytical rewrite:", type: "lines", lines: 3 },
          { text: "Narrative: 'The villain is cruel to everyone and the reader does not like him.' Your analytical rewrite:", type: "lines", lines: 3 },
          { text: "Narrative: 'At the end of the novel, the protagonist has changed and found peace.' Your analytical rewrite:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "true-false",
        title: "Evidence and Quotation",
        instruction: "Decide whether each statement about using evidence in essays is true or false.",
        statements: [
          { text: "Embedding a short quote within a sentence is often more effective than presenting a long quote as a separate block.", answer: true },
          { text: "You should use as many quotes as possible to show you have read the text.", answer: false },
          { text: "Every quote you use should be followed by explanation of how the language works.", answer: true },
          { text: "Paraphrasing a text (putting it in your own words) is always better than quoting directly.", answer: false },
          { text: "Choosing a quote that contains strong, specific language is more useful than a quote that is long.", answer: true },
        ],
      },
      {
        type: "open-response",
        title: "Writing Three Thesis Statements",
        instruction: "For the same essay question, write three different thesis statements: one weak, one adequate, and one strong. Then explain what makes the strong one better.",
        parentTip: "This activity develops metalinguistic awareness — the ability to evaluate writing rather than just produce it. Discuss together: what is the difference between adequate and strong?",
        prompts: [
          { text: "Essay question: 'How does the author use language to explore the theme of power?' Write a weak thesis:", type: "lines", lines: 2 },
          { text: "Write an adequate thesis:", type: "lines", lines: 2 },
          { text: "Write a strong thesis:", type: "lines", lines: 3 },
          { text: "Explain what makes the strong thesis better than the other two:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Essay as Argument",
        content: "A well-written analytical essay is not just an academic exercise — it is a form of argumentation that matters in every professional and intellectual context. Lawyers, scientists, journalists, and business leaders all need to construct well-evidenced arguments. The skills you are developing in essay writing — a clear thesis, evidence that supports it, analysis that explains why the evidence matters, and a conclusion that synthesises rather than repeats — are among the most valuable cognitive skills you can build. The essay is not a school exercise. It is a way of thinking.",
      },
      {
        type: "multiple-choice",
        title: "Integrating Quotes",
        instruction: "Choose the best way to integrate each quote into an analytical sentence.",
        questions: [
          {
            prompt: "Quote: 'The silence was a living thing.' Best integration:",
            options: [
              "'The silence was a living thing.' This is interesting.",
              "The author personifies silence — 'the silence was a living thing' — positioning the reader to experience the absence of sound as a threatening presence rather than a mere physical state.",
              "In the text, it says: 'The silence was a living thing.'",
              "The author writes about silence in the text.",
            ],
            answer: "The author personifies silence — 'the silence was a living thing' — positioning the reader to experience the absence of sound as a threatening presence rather than a mere physical state.",
          },
          {
            prompt: "Which sentence correctly embeds a short quote within an analytical sentence?",
            options: [
              "\"She stood at the edge and knew she had arrived at her moment of reckoning.\"",
              "The author describes the character as standing at the 'edge' — a word that carries connotations of danger and irreversibility.",
              "The author uses words.",
              "The character says that she had arrived at her 'moment of reckoning.'",
            ],
            answer: "The author describes the character as standing at the 'edge' — a word that carries connotations of danger and irreversibility.",
          },
        ],
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Writing a Second TEEL Paragraph",
        instruction: "Write a second TEEL paragraph that continues the argument from the previous one. Your topic sentence should use linking language to connect to the previous paragraph.",
        parentTip: "Multi-paragraph essays require the paragraphs to build on each other rather than simply repeat. The linking language at the start of the second paragraph is crucial.",
        prompts: [
          { text: "Your linked topic sentence (use language like 'Furthermore,' 'This is further demonstrated by,' or 'Building on this,'):", type: "lines", lines: 2 },
          { text: "Evidence:", type: "lines", lines: 2 },
          { text: "Explanation / Analysis:", type: "lines", lines: 6 },
          { text: "Link:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Essay Planning: Mind Map",
        instruction: "Plan an analytical essay using a mind map structure before writing.",
        parentTip: "A visual plan helps students see the structure of the whole essay before committing to a linear draft. Discuss the plan together before writing begins.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 1 },
          { text: "Central thesis / argument:", type: "lines", lines: 2 },
          { text: "Body paragraph 1 — technique and evidence:", type: "lines", lines: 2 },
          { text: "Body paragraph 2 — technique and evidence:", type: "lines", lines: 2 },
          { text: "Body paragraph 3 — technique and evidence:", type: "lines", lines: 2 },
          { text: "Conclusion — synthesis:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "multiple-choice",
        title: "What Makes a Strong Conclusion?",
        instruction: "Choose the best answer for each question about essay conclusions.",
        questions: [
          {
            prompt: "What is the main difference between a synthesis conclusion and a repetition conclusion?",
            options: [
              "A synthesis conclusion restates the introduction word for word; a repetition conclusion uses different words",
              "A synthesis conclusion draws the essay's arguments together into a new, broader insight; a repetition conclusion simply restates what has already been said",
              "A synthesis conclusion introduces new evidence; a repetition conclusion refers back to all the evidence",
              "There is no meaningful difference — both are acceptable",
            ],
            answer: "A synthesis conclusion draws the essay's arguments together into a new, broader insight; a repetition conclusion simply restates what has already been said",
          },
          {
            prompt: "Which of the following is the strongest conclusion sentence?",
            options: [
              "In conclusion, I have shown that the author uses many techniques in the text.",
              "To summarise, the text has symbolism, syntax, and imagery.",
              "Through the sustained use of light and dark imagery, fragmented syntax, and the allegorical figure of the old man, the author constructs an argument that ignorance, not knowledge, is humanity's most comfortable prison — and that confronting the truth requires a courage most are unwilling to find.",
              "So that is why this is an interesting text.",
            ],
            answer: "Through the sustained use of light and dark imagery, fragmented syntax, and the allegorical figure of the old man, the author constructs an argument that ignorance, not knowledge, is humanity's most comfortable prison — and that confronting the truth requires a courage most are unwilling to find.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Strong Conclusion",
        instruction: "Write a conclusion for an essay responding to: 'How does the author use language to explore the theme of justice?' Your conclusion should synthesise (not repeat) the essay's argument and connect the techniques to the broader theme.",
        parentTip: "The conclusion is where many students lose marks. Discuss: what is a new insight that emerges from combining all the evidence together?",
        prompts: [
          { text: "Your conclusion (4–6 sentences):", type: "box" },
          { text: "Self-check: does your conclusion introduce a new broader insight, or does it just repeat your introduction?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Analysing Your Own Essay: Self-Evaluation",
        instruction: "Take a piece of your own analytical writing and evaluate it against the TEEL criteria.",
        parentTip: "Honest self-evaluation is a graduate-level skill. Encourage your student to be genuinely critical rather than self-congratulatory.",
        prompts: [
          { text: "Copy one body paragraph from your own writing:", type: "box" },
          { text: "Rate your Topic sentence (1–5) and explain:", type: "lines", lines: 2 },
          { text: "Rate your Evidence (1–5) and explain:", type: "lines", lines: 2 },
          { text: "Rate your Explanation (1–5) and explain:", type: "lines", lines: 2 },
          { text: "Rate your Link (1–5) and explain:", type: "lines", lines: 2 },
          { text: "Rewrite the paragraph to address your lowest-rated element:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Using Technical Vocabulary in Essays",
        instruction: "Using precise technical vocabulary makes your analysis more convincing. Practise using these terms correctly in analytical sentences.",
        parentTip: "This activity builds the vocabulary precision that distinguishes strong analytical writers from adequate ones.",
        prompts: [
          { text: "Use 'motif' correctly in an analytical sentence about a text you have studied:", type: "lines", lines: 2 },
          { text: "Use 'connotation' correctly in an analytical sentence:", type: "lines", lines: 2 },
          { text: "Use 'positioning' correctly in an analytical sentence:", type: "lines", lines: 2 },
          { text: "Use 'juxtaposition' correctly in an analytical sentence:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Essay Language: Formal Versus Informal",
        instruction: "Rewrite each informal phrase as a formal analytical alternative.",
        sentences: [
          { text: "Instead of 'The author is trying to show...' write: 'The author ___...'", blanks: ["demonstrates / argues / presents"] },
          { text: "Instead of 'I think this means...' write: 'This suggests / implies / indicates ___.'", blanks: ["[the analytical point]"] },
          { text: "Instead of 'This is really effective because...' write: 'This technique ___ the reader by ___.'", blanks: ["positions / affects / unsettles"] },
        ],
      },
      {
        type: "open-response",
        title: "Responding to a Counter-Argument",
        instruction: "A sophisticated essay acknowledges and responds to a counter-argument. Practise this in a single paragraph.",
        parentTip: "Acknowledging a counter-argument does not weaken an essay — it strengthens it, demonstrating that the writer has considered multiple positions.",
        prompts: [
          { text: "Write a brief counter-argument to your essay's central thesis (what might someone who disagreed say?):", type: "lines", lines: 3 },
          { text: "Write a response to this counter-argument that returns to and strengthens your thesis:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "true-false",
        title: "Essay Writing: Advanced Concepts",
        instruction: "Decide whether each statement is true or false.",
        statements: [
          { text: "A thesis should be debatable — it should be possible for a reasonable person to disagree with it.", answer: true },
          { text: "Using first person ('I believe,' 'I think') is always acceptable in analytical essays.", answer: false },
          { text: "An analytical essay about a literary text should focus on how the language works, not just what it says.", answer: true },
          { text: "Acknowledging a counter-argument and then refuting it makes an essay stronger.", answer: true },
          { text: "The best evidence is always the longest quote.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Draft Essay: One Full Body Paragraph",
        instruction: "Draft a complete TEEL body paragraph (approximately 150–200 words) in response to an essay question about a text you are studying. Focus on making the explanation section the longest and most detailed.",
        parentTip: "Quality matters more than quantity here. A single 200-word paragraph with deep analysis is more valuable than three 50-word paragraphs with surface-level observations.",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 1 },
          { text: "Your complete TEEL paragraph:", type: "box" },
          { text: "Reflection: is your explanation longer than your evidence? Does it name the technique, unpack specific words, and connect to the theme?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Write Your Thesis Last",
        content: "Counterintuitively, many strong analytical writers draft their body paragraphs before writing the thesis. Once you have written about the evidence and its effects, you often have a clearer sense of what your central argument actually is. The thesis you write before drafting is a hypothesis; the thesis you write after drafting reflects what you have actually proven. It is always worth returning to your thesis after writing the essay and refining it to match what you have actually argued.",
      },
      {
        type: "open-response",
        title: "Annotating a Model Essay Paragraph",
        instruction: "Read the following model analytical paragraph and annotate it, labelling: topic sentence, evidence, explanation, link, technique names, and any especially strong analytical moves.\n\n\"The author uses the recurring motif of locked doors to explore the protagonist's experience of social exclusion. When Mara first arrives at the community centre, the narrator observes that 'every door she approached fell silent before she could reach it' — a detail that appears three times in the opening chapters. The verb 'fell silent' personifies the doors as if they are actively withdrawing from her presence, while the use of the passive voice removes human agency from the act of exclusion, suggesting that discrimination operates as if it were natural and inevitable rather than a human choice. This effect cumulates across the narrative to argue that marginalisation is systemic: it is not that individuals consciously exclude Mara, but that systems and spaces themselves are designed without her in mind.\"",
        parentTip: "Annotating a model paragraph before writing one's own is a highly effective learning strategy. Discuss the annotation together before your student writes independently.",
        prompts: [
          { text: "Your annotations (label the topic sentence, evidence, explanation, link, and at least two technique names):", type: "box" },
          { text: "What is the most impressive analytical move in this paragraph, and why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Writing an Introduction for Your Essay",
        instruction: "Write a complete essay introduction (4–6 sentences) for an essay you are planning to write on a text you have studied.",
        prompts: [
          { text: "Your introduction:", type: "box" },
          { text: "Check: does it end with a specific, arguable thesis? Does it name the text, author, and key themes? Does it avoid plot summary?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Essay Is an Act of Respect",
        content: "Writing a careful, well-evidenced analytical essay is an act of respect — for the text, for its author, and for the ideas at stake. When you take the time to read slowly, to find the right quote, to unpack its specific language rather than just stating your impression, you are treating the text as something that deserves serious attention. This is the opposite of what happens in a culture of takes and reactions, where first impressions are published before they have been tested against evidence. The essay is a discipline: it requires that you earn your conclusions.",
      },
      {
        type: "open-response",
        title: "Essay Under Timed Conditions",
        instruction: "Set a timer for 30 minutes. Plan and write one full analytical essay paragraph (topic sentence, evidence, explanation, link) in response to a question your parent gives you about a text you are studying. Work under timed conditions.",
        parentTip: "Timed essay writing is a skill separate from drafting at leisure. It builds the capacity for fluent analytical thinking under pressure. Discuss the experience afterwards: what was hardest?",
        prompts: [
          { text: "Your question:", type: "lines", lines: 1 },
          { text: "Your timed paragraph:", type: "box" },
          { text: "What would you improve with more time?", type: "lines", lines: 3 },
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Three-Paragraph Essay Body",
        instruction: "Write three complete TEEL body paragraphs in response to an essay question you have chosen. Each paragraph should use a different technique and connect back to the central thesis.",
        parentTip: "This is a significant task — allow at least 45 minutes. The three paragraphs should build on each other, not repeat the same argument in different words.",
        prompts: [
          { text: "Your essay question and thesis:", type: "lines", lines: 3 },
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Peer Evaluation: Essay Paragraph",
        instruction: "Exchange an essay paragraph with someone else (parent, sibling, or friend). Evaluate their paragraph using the TEEL criteria and give specific written feedback.",
        parentTip: "Written peer feedback is more useful than spoken feedback because it requires precision. Discuss together: was the feedback specific enough? Was it actionable?",
        prompts: [
          { text: "Feedback on Topic sentence — strength and clarity:", type: "lines", lines: 2 },
          { text: "Feedback on Evidence — relevance and specificity:", type: "lines", lines: 2 },
          { text: "Feedback on Explanation — depth and technique naming:", type: "lines", lines: 3 },
          { text: "Feedback on Link — connection to thesis:", type: "lines", lines: 2 },
          { text: "One specific suggestion for improvement:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "The Art of Synthesis: Writing Strong Conclusions",
        instruction: "Practise writing conclusions that synthesise rather than repeat.",
        parentTip: "A synthesis conclusion identifies what emerges from combining all the essay's evidence — a larger insight that no single paragraph reached on its own.",
        prompts: [
          { text: "An essay has argued: (1) the author uses imagery of darkness to represent ignorance; (2) the recurring motif of mirrors represents self-deception; (3) the shift in syntax from complex to simple sentences charts the protagonist's intellectual awakening. Write a synthesis conclusion that draws these together into a larger argument:", type: "box" },
          { text: "What new insight does your conclusion reach that was not stated in any single paragraph?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Essay Question Analysis",
        instruction: "Before writing an essay, it is essential to analyse the question carefully. Practise this skill.",
        parentTip: "Many students underperform in essays because they have not analysed the question properly and end up answering a slightly different question from the one asked.",
        prompts: [
          { text: "Question: 'How does the author use the relationship between the protagonist and the landscape to explore the theme of belonging?' Identify: the instruction word ('how'), the text element (relationship between protagonist and landscape), and the theme (belonging).", type: "lines", lines: 3 },
          { text: "Now write a thesis that directly and specifically answers this question:", type: "lines", lines: 3 },
          { text: "What would going off-topic look like for this question? What would an irrelevant essay focus on?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Every Paragraph Must Earn Its Place",
        content: "A strong analytical essay has no wasted paragraphs. Each body paragraph should make a distinct point that advances the overall argument in a way no other paragraph does. If two paragraphs are making the same basic point with different evidence, merge them. If a paragraph drifts away from the thesis, cut it or refocus it. Ruthless editing — asking 'does this paragraph need to be here?' — is one of the most important habits of a strong writer.",
      },
      {
        type: "open-response",
        title: "Editing an Essay Paragraph",
        instruction: "The following essay paragraph has several weaknesses: an underdeveloped explanation, vague language, and a weak link. Rewrite it to address all three.",
        parentTip: "Editing is a skill in itself. Discuss: what specifically makes each element weak, before attempting the rewrite.",
        prompts: [
          { text: "Original paragraph: 'The author uses imagery in the text. There is a metaphor about a storm. This is interesting. The author wants us to feel something strong. This connects to themes in the text.'", type: "lines", lines: 4 },
          { text: "Your improved version:", type: "box" },
          { text: "List the specific improvements you made:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Writing About Context",
        instruction: "Contextual knowledge — understanding the historical, social, or cultural period in which a text was written — can enrich analytical essays. Practise integrating context.",
        parentTip: "Context should support the literary analysis, not replace it. Discuss: when does contextual knowledge genuinely add to the analysis, and when is it just padding?",
        prompts: [
          { text: "What is one piece of contextual knowledge about a text you are studying?", type: "lines", lines: 2 },
          { text: "How does this context help explain a specific language choice or technique in the text? Write an analytical sentence that integrates context:", type: "lines", lines: 3 },
          { text: "Does contextual knowledge change how you interpret any symbol or technique in the text?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Planning Under Exam Conditions",
        instruction: "Under timed conditions (10 minutes), plan a full analytical essay — thesis, three body paragraphs, conclusion — in dot-point form.",
        parentTip: "Planning under time pressure is a specific skill. Discuss: what is the minimum amount of planning needed before writing? What can you skip when pressed for time?",
        prompts: [
          { text: "Essay question:", type: "lines", lines: 1 },
          { text: "Your 10-minute plan:", type: "box" },
          { text: "Reflection: was the plan useful? What would you change about how you planned?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Cross-Essay Technique: Using the Same Quote Differently",
        instruction: "A single quote can support different arguments depending on which aspect of the language you focus on. Practise this.",
        parentTip: "This activity develops analytical flexibility — the ability to see multiple analytical possibilities in the same evidence. It is a mark of advanced analytical thinking.",
        prompts: [
          { text: "Quote: 'The old house exhaled — slowly, reluctantly — as if releasing a breath it had held for decades.' Write a topic sentence and analysis focusing on PERSONIFICATION:", type: "lines", lines: 4 },
          { text: "Write a different topic sentence and analysis focusing on SYNTAX (the dashes and the long adverbs):", type: "lines", lines: 4 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Your Analysis Is Your Argument",
        content: "Here is the deepest truth about analytical essay writing: your analysis is your argument. The quote is not the argument. The technique is not the argument. What you make of the language — what you show it means, what you demonstrate it does to readers, and why that matters for the text's themes — that is your argument. No one else will produce exactly the same analysis of the same quote. Your analytical voice is your intellectual contribution to the conversation about this text. It is yours.",
      },
      {
        type: "open-response",
        title: "Evaluating Essay Theses: Strong, Adequate, or Weak?",
        instruction: "Evaluate the following essay theses and explain your rating for each.",
        prompts: [
          { text: "Thesis: 'The author uses symbolism to convey themes.' Rate it and explain why it is strong, adequate, or weak:", type: "lines", lines: 3 },
          { text: "Thesis: 'Through the recurring symbol of the locked gate and the contrast between the formal diction of the adults and the fragmented speech of the children, the author argues that institutions — however well-intentioned — inevitably silence the young.' Rate it and explain:", type: "lines", lines: 3 },
          { text: "Thesis: 'There are many interesting things about this text, and the author writes well.' Rate it and explain:", type: "lines", lines: 2 },
        ],
      },
      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Analytical Essay: Draft",
        instruction: "Write a complete analytical essay (introduction + three TEEL body paragraphs + conclusion) in response to an essay question about a text you are studying.",
        parentTip: "Allow at least 60–90 minutes for this task. After the first draft, spend at least 15 minutes revising for: thesis clarity, evidence quality, explanation depth, and conclusion synthesis.",
        prompts: [
          { text: "Introduction and thesis:", type: "box" },
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
          { text: "Conclusion:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Essay Revision: Strengthening the Explanation",
        instruction: "Return to the essay you drafted in the previous activity. Choose the body paragraph with the weakest explanation and expand it. The explanation should be at least twice as long as your original version.",
        parentTip: "Revision is not just checking for errors — it is rethinking the analysis at a deeper level. Encourage your student to ask: what else can I say about this quote? What did I leave out?",
        prompts: [
          { text: "Original body paragraph:", type: "box" },
          { text: "Revised body paragraph (with expanded explanation):", type: "box" },
          { text: "What specifically did you add, and why does it make the paragraph stronger?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Extended Essay: Four Body Paragraphs",
        instruction: "Write a longer analytical essay with four body paragraphs. The fourth paragraph should address a counter-argument and respond to it before reconnecting to the thesis.",
        parentTip: "The fourth paragraph — the counter-argument paragraph — is a mark of sophisticated essay writing. Discuss together: what is the strongest objection to your argument?",
        prompts: [
          { text: "Introduction and thesis:", type: "box" },
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
          { text: "Body paragraph 4 (counter-argument and response):", type: "box" },
          { text: "Conclusion:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Timed Essay: 45 Minutes",
        instruction: "Under timed conditions (45 minutes), write a complete analytical essay — plan (5 minutes), three body paragraphs with introduction and conclusion. Focus on quality of analysis, not quantity of paragraphs.",
        parentTip: "Timed essays are the format of most examinations. This practice builds not just knowledge but the specific cognitive skill of fluent analytical writing under time pressure.",
        prompts: [
          { text: "Essay question (to be provided by parent):", type: "lines", lines: 1 },
          { text: "Your timed essay:", type: "box" },
          { text: "Post-timed reflection: what did you sacrifice due to time? What would you do differently?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating an Essay Writing Checklist",
        instruction: "Create a personal essay writing checklist — a set of questions you will ask yourself before submitting any analytical essay.",
        parentTip: "A personalised checklist is more useful than a generic rubric because it reflects the specific aspects the student needs to attend to. Discuss: what are your most common essay weaknesses?",
        prompts: [
          { text: "Your personal essay writing checklist (at least 10 questions):", type: "box" },
          { text: "Which three items on your checklist do you most frequently neglect in your own writing?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Teaching Essay Writing: Explain TEEL to a Younger Student",
        instruction: "Write a clear, accessible explanation of the TEEL paragraph structure for a Year 5 student who has never heard of it. Include a worked example.",
        parentTip: "Explaining something simply to someone else consolidates your own understanding at a deeper level. Discuss: what is the simplest analogy you can find for the TEEL structure?",
        prompts: [
          { text: "Your explanation of TEEL for Year 5:", type: "box" },
          { text: "Your worked example (a complete TEEL paragraph on a simple topic):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Essay Portfolio Reflection",
        instruction: "Look back at three or four pieces of analytical writing you have produced this year. Write a reflection on your development as an essay writer.",
        parentTip: "Portfolio reflection develops metacognitive awareness — the ability to see one's own learning journey. This is one of the most valuable habits you can build.",
        prompts: [
          { text: "How has your thesis writing improved?", type: "lines", lines: 3 },
          { text: "How has your use of evidence and analysis improved?", type: "lines", lines: 3 },
          { text: "What remains your biggest challenge in analytical essay writing?", type: "lines", lines: 3 },
          { text: "What specific goal will you set for your next analytical essay?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Annotating Your Own Essay",
        instruction: "Take your full essay draft and annotate it comprehensively — label every TEEL element, every technique name, every link to the thesis. Circle any vague language and replace it with precise analytical vocabulary.",
        parentTip: "Full annotation of one's own essay is one of the most powerful revision strategies available. It makes invisible choices visible and allows the writer to evaluate them.",
        prompts: [
          { text: "Attach or copy your annotated essay here:", type: "box" },
          { text: "What did the annotation process reveal that you had not noticed before?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Designing an Essay Question",
        instruction: "Design three analytical essay questions about a text you have studied. Each question should invite a different analytical focus (language, theme, structure, positioning).",
        parentTip: "Designing a question requires understanding what makes a good essay question — which is the same as understanding what makes a good essay. This is excellent metacognitive practice.",
        prompts: [
          { text: "Essay question 1 (focus on language/technique):", type: "lines", lines: 2 },
          { text: "Essay question 2 (focus on theme):", type: "lines", lines: 2 },
          { text: "Essay question 3 (focus on structure or positioning):", type: "lines", lines: 2 },
          { text: "Which of your three questions would produce the most interesting essay, and why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Essays Are How We Think",
        content: "The essay — from the French essai, meaning 'attempt' or 'trial' — is not just a school assignment. It is a form of thinking. When you write an analytical essay, you are not just reporting your thoughts — you are discovering them. The act of committing an argument to paper, finding evidence to support it, and wrestling with the explanation forces your thinking to become more precise, more honest, and more interesting than it would be if you just thought about the text. Writing is thinking. And the analytical essay is one of the finest tools for thinking that humans have invented.",
      },
    ],
    nextSteps: [
      "Draft a full analytical essay on your current text, using TEEL for each body paragraph.",
      "Move to comparative analysis — reading two texts together.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "true-false",
        title: "Comparative Analysis Basics",
        instruction: "Decide whether each statement about comparative analysis is true or false.",
        parentTip: "These foundational statements establish the key concepts and vocabulary.",
        statements: [
          { text: "Comparative analysis means proving that one text is better than another.", answer: false },
          { text: "A point of comparison identifies how both texts handle the same aspect differently.", answer: true },
          { text: "An integrated comparative structure organises paragraphs by idea rather than by text.", answer: true },
          { text: "A block structure is generally considered more sophisticated than an integrated structure.", answer: false },
          { text: "Connecting language (whereas, similarly, in contrast) is essential in comparative writing.", answer: true },
        ],
      },
      {
        type: "matching",
        title: "Comparative Connecting Language",
        instruction: "Match each connecting phrase to the comparative function it performs.",
        parentTip: "These phrases are the building blocks of integrated comparative writing. Encourage your student to use them in every comparative paragraph.",
        left: ["Whereas", "Similarly", "In contrast", "Both texts", "However", "Unlike"],
        right: [
          "Introduces a direct contrast between two different approaches",
          "Signals a parallel or similarity between two texts",
          "Shows a sharp opposition between two positions",
          "Opens a comparison that applies to both texts simultaneously",
          "Introduces a qualification or counter-movement",
          "Highlights difference by contrasting one text directly with another",
        ],
      },
      {
        type: "multiple-choice",
        title: "Block vs. Integrated Structure",
        instruction: "Choose the best answer for each question about comparative essay structure.",
        questions: [
          {
            prompt: "What is the main weakness of the block structure in comparative essays?",
            options: [
              "It is too short",
              "It can feel like two separate essays placed side by side, with the comparison as an afterthought",
              "It requires too much evidence",
              "It only works with poems",
            ],
            answer: "It can feel like two separate essays placed side by side, with the comparison as an afterthought",
          },
          {
            prompt: "What is the key advantage of the integrated structure?",
            options: [
              "It is easier to write",
              "It allows genuine comparison within each paragraph, keeping both texts in dialogue throughout",
              "It requires fewer quotes",
              "It allows you to write about one text at a time",
            ],
            answer: "It allows genuine comparison within each paragraph, keeping both texts in dialogue throughout",
          },
          {
            prompt: "In an integrated comparative paragraph, when should you reference Text B?",
            options: [
              "Only at the end of the paragraph",
              "In a separate paragraph",
              "Within the same analytical moves as Text A — weaving both into each point",
              "Only in the conclusion",
            ],
            answer: "Within the same analytical moves as Text A — weaving both into each point",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Comparative Analysis Vocabulary",
        instruction: "Fill in the blanks with the correct terms.",
        sentences: [
          { text: "A ___ structure organises paragraphs by shared idea, discussing both texts within each paragraph.", blanks: ["integrated"] },
          { text: "A ___ structure discusses everything about Text A first, then everything about Text B.", blanks: ["block"] },
          { text: "A ___ of comparison is a specific aspect (tone, imagery, syntax) that you examine in both texts.", blanks: ["point"] },
          { text: "A strong comparative thesis names both texts, the shared ___, and the key ___.", blanks: ["theme", "difference"] },
        ],
      },
      {
        type: "open-response",
        title: "Identifying Points of Comparison",
        instruction: "Read these two short extracts on the theme of belonging, then identify three specific points of comparison.\n\nExtract A: \"Home is not a place — it is a feeling you carry or lose. I have lived in seven countries and belong to none of them, and to all of them equally, which may be the same thing.\"\n\nExtract B: \"This street is the only language I speak fluently. I know every crack in the footpath, every house whose dog will bark as I pass. I do not need to belong to the world. This street is enough.\"",
        parentTip: "A point of comparison identifies a specific aspect and describes how each text handles it differently — it does not mean judging which is better.",
        prompts: [
          { text: "Point of comparison 1 (e.g. use of metaphor/imagery): How does Extract A handle this, and how does Extract B handle it differently?", type: "lines", lines: 4 },
          { text: "Point of comparison 2 (e.g. tone and emotional stance): Describe the tone of each extract and what creates it.", type: "lines", lines: 4 },
          { text: "Point of comparison 3 (your choice — name the aspect): How do the two extracts differ on this point?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Comparative or Not?",
        instruction: "Identify whether each sentence is truly comparative (discusses both texts simultaneously) or just describes one text at a time.",
        questions: [
          { prompt: "Sentence A: 'Extract A uses a metaphor of carrying home within oneself, while Extract B grounds belonging in the specific, sensory details of a known street — suggesting fundamentally different models of what belonging means.'", options: ["Truly comparative", "Describes only one text"] },
          { prompt: "Sentence B: 'Extract A talks about living in seven countries. Extract B talks about a street.'", options: ["Truly comparative", "Describes only one text — two separate descriptions"] },
          { prompt: "Sentence C: 'Both writers use first person, but whereas Extract A's 'I' is detached and reflective, Extract B's 'I' is grounded and certain.'", options: ["Truly comparative", "Describes only one text"] },
        ],
      },
      {
        type: "tip",
        title: "Tip: True Integration Means Weaving, Not Describing",
        content: "The most common mistake in comparative writing is describing Text A for several sentences, then describing Text B for several sentences, and then writing one connecting phrase in between. This is not integration — it is alternation with a joining word dropped in. True integration means that every analytical move you make references both texts simultaneously. Every time you identify a technique in Text A, ask immediately: how does Text B handle this same aspect? Weave them together from the start.",
      },
      {
        type: "open-response",
        title: "Integrated Comparative Paragraph",
        instruction: "Using the two extracts about belonging, write one integrated comparative paragraph. Focus on one point of comparison and bring in evidence from both texts within the same paragraph.",
        parentTip: "True integration means weaving both texts into each analytical move, not writing about Text A then Text B.",
        prompts: [
          { text: "Your comparative paragraph:", type: "box" },
          { text: "List the connecting language you used:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Completing Comparative Sentences",
        instruction: "Complete each comparative analytical sentence.",
        sentences: [
          { text: "Both writers explore the theme of ___, but whereas Text A uses ___, Text B employs ___ to create a different effect.", blanks: ["[theme]", "[technique A]", "[technique B]"] },
          { text: "Text A's use of ___ creates a sense of ___, in contrast to Text B's ___, which suggests ___.", blanks: ["[technique]", "[effect]", "[technique]", "[different effect]"] },
          { text: "Similarly, both texts position the reader to feel ___, though the techniques they use to achieve this differ significantly.", blanks: ["[shared emotional response]"] },
        ],
      },
      {
        type: "open-response",
        title: "Comparative Thesis Writing",
        instruction: "Write a comparative thesis statement for an essay responding to: 'How do both extracts explore the idea of belonging, and how do they differ in their approach?'",
        parentTip: "A strong comparative thesis states a clear comparison, not just a theme.",
        prompts: [
          { text: "Your comparative thesis:", type: "lines", lines: 3 },
          { text: "Does it: name both texts? Identify the shared theme? State a clear point of contrast? Revise if needed:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Strong Comparative Thesis or Weak?",
        instruction: "Identify which thesis in each pair is stronger for a comparative essay.",
        questions: [
          {
            prompt: "Question: 'How do two poems treat the theme of loss differently?' Which is stronger?",
            options: [
              "A: 'Both poems are about loss and use language to explore this theme.'",
              "B: 'While both poems explore grief as a physical experience, Poem A uses fragmented syntax to represent the disorientation of acute loss, whereas Poem B employs extended natural imagery to suggest that grief, like seasons, is part of a larger cycle.'",
            ],
            answer: "B: 'While both poems explore grief as a physical experience, Poem A uses fragmented syntax to represent the disorientation of acute loss, whereas Poem B employs extended natural imagery to suggest that grief, like seasons, is part of a larger cycle.'",
          },
          {
            prompt: "Which element must always be present in a comparative thesis?",
            options: ["A reference to both texts AND a clear point of contrast or similarity", "A reference to only the more important text", "A list of all the techniques used", "A plot summary of both texts"],
            answer: "A reference to both texts AND a clear point of contrast or similarity",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Finding Texts to Compare",
        instruction: "Find two real texts on the same theme and bring them back to discuss. They can be news articles, poems, short stories, advertisements, or film clips.",
        parentTip: "Choosing texts yourself is an important skill. Discuss together: what made you choose these two texts? Are they different enough to make comparison interesting?",
        suggestions: [
          "Find two news articles about the same event from different outlets and compare how each frames the story",
          "Find two poems on the same theme from different periods or cultural traditions",
          "Find two short speeches on the same topic by people with different political views",
          "After choosing your texts, identify: what is the most interesting similarity? What is the most striking difference?",
        ],
      },
      {
        type: "true-false",
        title: "Common Comparative Writing Mistakes",
        instruction: "Decide whether each statement describes a mistake or good practice in comparative writing.",
        statements: [
          { text: "Describing Text A entirely before discussing Text B is the clearest way to structure a comparative essay.", answer: false },
          { text: "Every comparative paragraph should discuss both texts, not just one.", answer: true },
          { text: "A comparative thesis that says 'both texts explore the theme of identity' is strong and specific.", answer: false },
          { text: "Using connecting language ('whereas,' 'in contrast,' 'similarly') throughout the essay is essential.", answer: true },
          { text: "Comparison means proving one text is better than the other.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Tone",
        instruction: "Read the following two extracts on the theme of grief and compare the tone of each.\n\nExtract C: \"He was gone. Three words. All the syllables that grief requires.\"\n\nExtract D: \"She carried him everywhere she went — in the weight of her coat pocket, in the way she still set two cups at breakfast, in the silence that filled every room he had ever walked through.\"",
        parentTip: "Tone is created by word choice, sentence length, and the emotional stance of the narrator. Discuss together before writing.",
        prompts: [
          { text: "Describe the tone of Extract C and explain what creates it:", type: "lines", lines: 3 },
          { text: "Describe the tone of Extract D and explain what creates it:", type: "lines", lines: 3 },
          { text: "Write one integrated comparative sentence about the different tones:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Points of Comparison, Not Summaries",
        content: "When students are asked to compare two texts, they often write summaries of each text rather than identifying genuine points of comparison. A point of comparison is not 'Text A is about loss and Text B is about loss.' It is 'Text A represents loss as a sudden rupture (through fragmented syntax), whereas Text B represents it as a slow accumulation (through the extended catalogue of detail).' The comparison must identify a specific aspect and show how each text handles it differently — that is the intellectual work of comparative analysis.",
      },
      {
        type: "open-response",
        title: "Comparing Point of View",
        instruction: "Consider how the point of view of each text below affects its treatment of the theme of courage.\n\nText E: \"I ran. I do not know what else you would have done.\" (First person)\n\nText F: \"He stood at the edge, watching the water far below. He knew what the others expected. He jumped.\" (Third person)",
        parentTip: "Discuss the difference between first- and third-person narration and how each positions the reader differently before writing the comparison.",
        prompts: [
          { text: "How does first-person narration in Text E position the reader in relation to the act of courage?", type: "lines", lines: 3 },
          { text: "How does third-person narration in Text F create a different effect?", type: "lines", lines: 3 },
          { text: "Write one integrated comparative sentence about point of view:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Structure",
        instruction: "Two poems explore the theme of time. Poem G is structured as a single continuous stanza with no punctuation. Poem H is structured as four regular quatrains with a consistent rhyme scheme. Compare how structure shapes the reader's experience of each poem's theme.",
        parentTip: "Structure is often overlooked in comparison — this activity highlights it as a key analytical focus.",
        prompts: [
          { text: "What effect does Poem G's lack of structure and punctuation create in relation to the theme of time?", type: "lines", lines: 3 },
          { text: "What effect does Poem H's regular structure and rhyme scheme create?", type: "lines", lines: 3 },
          { text: "Write an integrated comparative sentence about how structure shapes meaning:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Comparison Reveals What You Cannot See Alone",
        content: "When you read a single text, you see what is there. When you place two texts side by side, you suddenly see what is distinctive about each — choices that seemed natural or inevitable suddenly appear deliberate and interesting. A poem about grief that uses spare, minimalist language seems different after you read one that uses elaborate, ornate language about the same subject. The comparison illuminates each text by making its choices visible. This is why comparative analysis is one of the most powerful forms of literary thinking: it reveals not just what a text says, but what it chose to say, and how.",
      },
      {
        type: "multiple-choice",
        title: "What Makes a Good Point of Comparison?",
        instruction: "Choose the best point of comparison for each scenario.",
        questions: [
          {
            prompt: "Two texts both explore the theme of power. Which is the most useful point of comparison?",
            options: [
              "Both texts were published in the same year",
              "Both texts are the same length",
              "Text A represents power through the speech of authority figures, while Text B shows power through the silence imposed on subordinate characters",
              "Both texts have protagonists",
            ],
            answer: "Text A represents power through the speech of authority figures, while Text B shows power through the silence imposed on subordinate characters",
          },
          {
            prompt: "Which of the following is NOT a useful point of comparison?",
            options: ["Tone", "Use of symbolism", "The author's favourite colour", "Sentence structure"],
            answer: "The author's favourite colour",
          },
        ],
      },
      {
        type: "open-response",
        title: "Generating Points of Comparison",
        instruction: "For two texts you have selected (from your home activity or your study), generate five potential points of comparison before choosing the three most interesting ones to write about.",
        parentTip: "Generating many points of comparison before selecting the best ones is a professional research strategy. Discuss together: which three are most analytically interesting and why?",
        prompts: [
          { text: "Name both texts:", type: "lines", lines: 1 },
          { text: "Five potential points of comparison:", type: "lines", lines: 5 },
          { text: "Which three will you use in your essay, and why are they the most productive comparisons?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Writing Three Comparative Sentences",
        instruction: "Write three comparative sentences about any two texts you have studied — one showing similarity, one showing difference, and one showing a similarity that is undercut by a significant difference.",
        parentTip: "The third type of sentence (similarity undercut by difference) is the most sophisticated comparative move — it avoids the binary of 'same' or 'different' and captures genuine complexity.",
        prompts: [
          { text: "A sentence showing similarity ('Similarly, both texts...'):", type: "lines", lines: 2 },
          { text: "A sentence showing difference ('Whereas... in contrast...'):", type: "lines", lines: 2 },
          { text: "A sentence showing similarity undercut by difference ('Both texts... however... whereas...'):", type: "lines", lines: 3 },
        ],
      },
      {
        type: "true-false",
        title: "Comparative Analysis Across Text Types",
        instruction: "Decide whether each statement is true or false.",
        statements: [
          { text: "Comparative analysis can only be applied to literary texts of the same genre.", answer: false },
          { text: "Comparing a poem with a news article on the same topic is a valid and interesting form of comparative analysis.", answer: true },
          { text: "When comparing texts from very different time periods, it is important to consider context.", answer: true },
          { text: "A comparative essay should always conclude by declaring one text superior.", answer: false },
          { text: "The most interesting comparisons often reveal shared concerns between texts that seem very different on the surface.", answer: true },
        ],
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Integrated Comparative Paragraph",
        instruction: "Write a full integrated comparative paragraph (8–10 sentences) about two texts you have chosen. Focus on one point of comparison and weave both texts into every analytical move.",
        parentTip: "The test of integration: can you cover all of the paragraph with both texts present, or does it split into two halves? Discuss after writing.",
        prompts: [
          { text: "Your integrated paragraph:", type: "box" },
          { text: "Underline every piece of connecting language you used:", type: "lines", lines: 1 },
          { text: "Reflect: are both texts present throughout, or does the paragraph split into two halves?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing How Each Text Positions the Reader",
        instruction: "Compare how two texts on the same theme position the reader differently — focusing on the reader's emotional experience rather than just the techniques used.",
        parentTip: "This question focuses on effect rather than just technique — a more sophisticated analytical move.",
        prompts: [
          { text: "How does Text A position the reader emotionally in relation to the theme?", type: "lines", lines: 3 },
          { text: "How does Text B position the reader differently?", type: "lines", lines: 3 },
          { text: "Write an integrated sentence about how the two texts create different reader experiences:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Comparative Analysis in Practice",
        instruction: "Choose the best answer for each question about applying comparative analysis.",
        questions: [
          {
            prompt: "You are comparing two poems about nature. Poem A is celebratory; Poem B is elegiac (mournful). What is the most interesting point of comparison?",
            options: [
              "Both poems are about nature",
              "Both poems use language",
              "How the different emotional stances (celebration vs. elegy) shape the way each poet chooses to describe the natural world",
              "The number of stanzas in each poem",
            ],
            answer: "How the different emotional stances (celebration vs. elegy) shape the way each poet chooses to describe the natural world",
          },
          {
            prompt: "You have written a comparative paragraph. Reading it back, you notice you spend three sentences on Text A and one sentence on Text B. What should you do?",
            options: [
              "Leave it — as long as you mentioned both texts, it is comparative",
              "Revise to give both texts approximately equal space and ensure they are woven together rather than listed",
              "Add another paragraph entirely about Text B",
              "Remove the reference to Text B",
            ],
            answer: "Revise to give both texts approximately equal space and ensure they are woven together rather than listed",
          },
        ],
      },
      {
        type: "open-response",
        title: "Comparing the Endings of Two Texts",
        instruction: "Compare how two texts you have read end. Consider: what does each ending ask the reader to take away? How does the ending connect to the text's theme?",
        parentTip: "Endings are powerful: they often carry the text's central argument. Discuss together before writing.",
        prompts: [
          { text: "How does Text A's ending position the reader?", type: "lines", lines: 3 },
          { text: "How does Text B's ending position the reader differently?", type: "lines", lines: 3 },
          { text: "What do the different endings suggest about each text's central argument or worldview?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing How Two Texts Handle a Character Type",
        instruction: "Many texts use similar character types (the outsider, the mentor, the villain, the innocent). Compare how two texts handle the same character type.",
        parentTip: "Character comparison is a particularly rich form of comparative analysis because it requires understanding not just the characters but what they represent in their respective texts.",
        prompts: [
          { text: "Name the character type and the two texts:", type: "lines", lines: 2 },
          { text: "How does Text A portray this character type? What does the character represent?", type: "lines", lines: 3 },
          { text: "How does Text B portray the same character type differently?", type: "lines", lines: 3 },
          { text: "What does the comparison reveal about each text's values or concerns?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Planning a Full Comparative Essay",
        instruction: "Plan a full integrated comparative essay (introduction + three body paragraphs + conclusion) on two texts you have studied.",
        parentTip: "A comparative essay plan needs to identify three distinct points of comparison — not three descriptions of the same thing.",
        prompts: [
          { text: "Comparative thesis:", type: "lines", lines: 3 },
          { text: "Body paragraph 1 — point of comparison, evidence from both texts:", type: "lines", lines: 3 },
          { text: "Body paragraph 2 — point of comparison, evidence from both texts:", type: "lines", lines: 3 },
          { text: "Body paragraph 3 — point of comparison, evidence from both texts:", type: "lines", lines: 3 },
          { text: "Conclusion — synthesis:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Comparative Analysis of Two Poems",
        instruction: "Compare the two following short poem extracts on the theme of time.\n\nPoem J: \"The clocks run backward in my grandmother's house / Where afternoons last longer than they should.\"\n\nPoem K: \"Time is a river and I am standing still / While the whole world moves past me like water.\"",
        parentTip: "These two extracts are both figurative, but they use very different figures of speech. Discuss the difference between them before writing.",
        prompts: [
          { text: "What metaphor does each poem use for time? How does each metaphor shape the reader's experience?", type: "lines", lines: 4 },
          { text: "How does each poem position the speaker in relation to time? (Are they in control? Passive? Nostalgic?)", type: "lines", lines: 4 },
          { text: "Write one integrated comparative sentence about how the two poems treat time differently:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Comparative Essay Connective Language",
        instruction: "Complete each comparative sentence with appropriate connecting language.",
        sentences: [
          { text: "___ both texts explore the theme of justice, they approach it from fundamentally different moral positions.", blanks: ["While / Although"] },
          { text: "Text A uses ___ to create a sense of urgency; ___, Text B employs ___ to create a more measured, reflective tone.", blanks: ["[technique]", "in contrast", "[technique]"] },
          { text: "The two texts ___ in their use of first-person narration, but ___ in the emotional distance each narrator maintains.", blanks: ["are similar", "differ significantly"] },
        ],
      },
      {
        type: "open-response",
        title: "Comparing How Two Texts Represent Setting",
        instruction: "Compare how two texts you have studied use setting as a symbolic or expressive element.",
        prompts: [
          { text: "How does Text A's setting reflect or reinforce its theme?", type: "lines", lines: 3 },
          { text: "How does Text B's setting function differently?", type: "lines", lines: 3 },
          { text: "Write an integrated comparative paragraph about setting in both texts:", type: "box" },
        ],
      },
      {
        type: "tip",
        title: "Tip: The Comparison Must Drive the Argument",
        content: "The most common weakness in comparative essays is that the comparison is present but does not drive the argument. Students note differences ('Text A does this; Text B does that') without explaining what those differences mean — what they reveal about each text's concerns, values, or worldview. Every comparative observation should connect to the essay's thesis and the shared theme. Ask: so what does this difference tell us about the texts? What does it reveal that description alone cannot?",
      },
      {
        type: "open-response",
        title: "Comparative Analysis of Two Advertising Texts",
        instruction: "Compare two advertisements (or advertising texts) that share a similar target audience or product category but use different positioning strategies.",
        parentTip: "This brings comparative analysis into an everyday context. Find real examples together if possible.",
        prompts: [
          { text: "Describe the two advertisements:", type: "lines", lines: 2 },
          { text: "Compare the positioning strategies of each — what values does each appeal to?", type: "lines", lines: 4 },
          { text: "How does the comparison illuminate each text's assumptions about its audience?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Texts From Different Cultures",
        instruction: "Compare two texts on the same theme from different cultural traditions. Consider how cultural context shapes each text's approach.",
        parentTip: "Cross-cultural comparison is one of the most enriching forms of literary analysis. Encourage your student to approach both texts with genuine curiosity and respect.",
        prompts: [
          { text: "Name both texts and their cultural contexts:", type: "lines", lines: 2 },
          { text: "How does the cultural context of each text shape its treatment of the shared theme?", type: "lines", lines: 4 },
          { text: "What does the cross-cultural comparison reveal that reading within a single tradition would miss?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Evaluating Your Own Comparative Writing",
        instruction: "Return to the integrated comparative paragraph you wrote earlier. Evaluate it rigorously.",
        prompts: [
          { text: "How many pieces of connecting language did you use? List them:", type: "lines", lines: 2 },
          { text: "Is the paragraph genuinely integrated (both texts woven throughout) or alternating (Text A then Text B)?", type: "lines", lines: 2 },
          { text: "Rewrite the weakest sentence of your paragraph to make it more genuinely comparative:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Two Historical Perspectives on the Same Event",
        instruction: "Find two accounts of the same historical event written from different national, cultural, or political perspectives. Analyse how each positions the reader.",
        parentTip: "Historical comparative analysis extends the skills of literary comparison into a real-world context. Discuss together: can two accounts be equally 'true' about the same event?",
        prompts: [
          { text: "Name the event and the two accounts:", type: "lines", lines: 2 },
          { text: "How does each account foreground different information and omit different perspectives?", type: "lines", lines: 4 },
          { text: "What does the comparison reveal about the relationship between perspective and truth?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Two Texts Are Better Than One",
        content: "There is a reason that some of the most powerful forms of criticism involve comparison. When you read only one account of a war, one theory of a scientific phenomenon, or one perspective on a social issue, it is easy to mistake that account for the whole truth. When you place two accounts side by side, you begin to see the gaps, the silences, the choices each one makes. This is why wide reading — reading multiple accounts, multiple genres, multiple cultural perspectives — is more than an academic exercise. It is how you develop the capacity to think rather than merely to receive.",
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "First Body Paragraph of Comparative Essay",
        instruction: "Using your essay plan, write the first body paragraph of your comparative essay. Focus on genuine integration — every analytical move should reference both texts.",
        parentTip: "After writing, check: does every sentence refer to or imply both texts? Is the connecting language varied and purposeful?",
        prompts: [
          { text: "Your first body paragraph:", type: "box" },
          { text: "Self-evaluation — is this truly integrated or alternating?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Second Body Paragraph of Comparative Essay",
        instruction: "Write the second body paragraph of your comparative essay, developing a different point of comparison. Ensure your topic sentence makes the comparative point explicit.",
        parentTip: "Each paragraph should begin with a comparative topic sentence that names both texts and the point of comparison — not just a topic sentence about Text A.",
        prompts: [
          { text: "Your second body paragraph:", type: "box" },
          { text: "Check: does your topic sentence explicitly state the comparative point?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Comparative Conclusion",
        instruction: "Write a comparative conclusion that synthesises the essay's arguments and reaches a larger insight about what the comparison reveals.",
        parentTip: "A comparative conclusion should do more than summarise — it should identify what the comparison, as a whole, illuminates. What can you see by reading these texts together that you could not see by reading either alone?",
        prompts: [
          { text: "Your comparative conclusion:", type: "box" },
          { text: "What larger insight does your conclusion reach? Is it genuinely new, or does it just repeat earlier points?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparative Analysis of Texts From Different Time Periods",
        instruction: "Compare two texts on the same theme from significantly different time periods (e.g. a Victorian poem and a contemporary poem about the same subject).",
        parentTip: "Cross-period comparison requires contextual knowledge. Discuss: how does the historical period shape what each text is able or willing to say about its theme?",
        prompts: [
          { text: "Name both texts and their time periods:", type: "lines", lines: 2 },
          { text: "How does each text's historical context shape its treatment of the theme?", type: "lines", lines: 4 },
          { text: "What does the comparison reveal about how attitudes toward the theme have changed over time?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: One Point of Comparison Per Paragraph",
        content: "A common mistake in comparative essays is trying to discuss too many points of comparison in a single paragraph. Each paragraph should have one clear comparative focus — one aspect that you examine in both texts. This allows depth of analysis. If you find yourself jumping between multiple aspects within one paragraph, you have lost control of the structure. Identify your primary focus, remove what does not belong, and save the other points for their own paragraphs.",
      },
      {
        type: "open-response",
        title: "Comparing Two Texts on Social Justice",
        instruction: "Find two texts that deal with the same social justice issue from different angles (e.g. two articles about climate change from different ideological positions, or two speeches about equality from different historical moments).",
        prompts: [
          { text: "Describe both texts and their contexts:", type: "lines", lines: 3 },
          { text: "How does each text position its reader in relation to the issue?", type: "lines", lines: 4 },
          { text: "Write one integrated comparative paragraph about how the two texts treat the issue:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Comparing How Two Authors Use Silence",
        instruction: "In literature, what is not said is often as important as what is said. Compare how two texts you have studied use absence, silence, or omission as a technique.",
        parentTip: "This is a sophisticated analytical topic — encourage your student to look for what the texts deliberately leave out and discuss why that might be a conscious authorial choice.",
        prompts: [
          { text: "What does Text A leave unsaid, and what is the effect of this silence?", type: "lines", lines: 3 },
          { text: "What does Text B leave unsaid, and how is this different from Text A?", type: "lines", lines: 3 },
          { text: "Write an integrated comparative sentence about how each text uses silence:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Two Texts on the Same Page",
        instruction: "Choose a very short pair of texts (two haiku, two advertising taglines, two news headlines on the same event) and write a detailed comparative analysis. The brevity of the texts allows very deep analysis.",
        parentTip: "Short comparative tasks force students to go deep rather than wide. Discuss: how much can you say about two lines of text when you look at them very carefully?",
        prompts: [
          { text: "The two texts:", type: "lines", lines: 2 },
          { text: "Your comparative analysis (should be at least 8 sentences for two short texts):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Third Body Paragraph and Full Essay Assembly",
        instruction: "Write the third body paragraph of your comparative essay and then assemble the full essay (introduction, three body paragraphs, conclusion).",
        parentTip: "Allow time to read the full essay back as a whole after assembly. Does it flow? Does each paragraph connect to the next? Does the conclusion synthesise what the comparison has revealed?",
        prompts: [
          { text: "Third body paragraph:", type: "box" },
          { text: "Full assembled essay:", type: "box" },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Space Between",
        content: "The most interesting place in comparative analysis is not in either text alone — it is in the space between them. It is what each text reveals about the other: the choices one makes visible in the other, the silences one fills that the other creates, the assumptions one questions that the other takes for granted. When you read comparatively, you are creating a dialogue between texts — and the most revealing insights emerge not from either voice alone but from the conversation between them.",
      },
      {
        type: "open-response",
        title: "Comparative Analysis: Peer Review",
        instruction: "Exchange your comparative essay with someone else. Evaluate their essay specifically on: integration (are both texts genuinely woven together throughout?), comparative thesis (does it state a clear point of contrast?), and depth of comparison (does each point of comparison reveal something meaningful?)",
        prompts: [
          { text: "Feedback on integration:", type: "lines", lines: 3 },
          { text: "Feedback on comparative thesis:", type: "lines", lines: 3 },
          { text: "Feedback on depth of comparison:", type: "lines", lines: 3 },
          { text: "One specific suggestion for improvement:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Revision: Improving Integration",
        instruction: "Take a section of your comparative essay that you identify as the least well-integrated and rewrite it. Focus on weaving both texts into every analytical move.",
        prompts: [
          { text: "Original section:", type: "box" },
          { text: "Revised version:", type: "box" },
          { text: "What specific changes improved the integration?", type: "lines", lines: 3 },
        ],
      },
      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Comparative Essay: Final Draft",
        instruction: "Write or revise your complete comparative essay. This final version should demonstrate genuine integration, a strong comparative thesis, three distinct points of comparison, and a synthesis conclusion.",
        parentTip: "Allow time for revision after drafting. Read the essay aloud — it should feel like a continuous comparative argument, not two mini-essays joined together.",
        prompts: [
          { text: "Your final comparative essay:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Extended Comparative Analysis: Three Texts",
        instruction: "Challenge: write a comparative analysis of THREE texts on the same theme. You can use a modified integrated structure — organise by idea, discussing all three texts within each paragraph.",
        parentTip: "Three-text comparison is the most demanding form of comparative analysis. Discuss together: does adding a third text complicate the comparison or enrich it?",
        prompts: [
          { text: "Name all three texts:", type: "lines", lines: 2 },
          { text: "Comparative thesis (must name all three texts and the central comparative argument):", type: "lines", lines: 3 },
          { text: "One fully integrated comparative paragraph (all three texts):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Research: The History of Comparative Literature",
        instruction: "Research what comparative literature as an academic discipline is, and why scholars believe it is valuable to compare texts across cultures and traditions.",
        parentTip: "This task connects the practical skill of comparison to its intellectual tradition. Discuss: why might comparing texts across national and cultural traditions be a particularly important endeavour?",
        prompts: [
          { text: "What is comparative literature as an academic discipline?", type: "lines", lines: 3 },
          { text: "What are the main arguments scholars make for the value of cross-cultural literary comparison?", type: "lines", lines: 3 },
          { text: "How does comparative literature connect to your own reading and writing?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Timed Comparative Essay: 45 Minutes",
        instruction: "Under timed conditions (45 minutes), write a complete comparative essay — plan (5 minutes), three integrated body paragraphs with introduction and conclusion (40 minutes).",
        parentTip: "Timed comparative writing is particularly challenging because it requires holding two texts in mind simultaneously while structuring fluently. Discuss the experience after: what was hardest to manage under time pressure?",
        prompts: [
          { text: "Essay question (provided by parent):", type: "lines", lines: 1 },
          { text: "Your timed comparative essay:", type: "box" },
          { text: "Reflection: what would you do differently with more time?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Yourself as a Reader",
        instruction: "Reflect on how comparing texts has changed how you read individually.",
        parentTip: "This is a metacognitive reflection on comparative reading as a practice. Discuss together before writing.",
        prompts: [
          { text: "Has comparative reading changed how you engage with texts you read on their own? How?", type: "lines", lines: 3 },
          { text: "What pair of texts has produced the most interesting comparison you have encountered, and why?", type: "lines", lines: 3 },
          { text: "What would you most like to compare next, and what question would you want the comparison to answer?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Creating a Comparative Essay Question",
        instruction: "Design three comparative essay questions — each inviting comparison of a different pair of texts on a different theme. Include notes on what an interesting answer might explore.",
        parentTip: "Designing questions requires understanding what makes comparison intellectually productive. This is excellent metacognitive consolidation.",
        prompts: [
          { text: "Question 1 and notes on productive answers:", type: "lines", lines: 3 },
          { text: "Question 2 and notes on productive answers:", type: "lines", lines: 3 },
          { text: "Question 3 and notes on productive answers:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparative Analysis Beyond Literature",
        instruction: "Apply comparative analysis to a non-literary domain: compare two scientific theories, two philosophical positions, two pieces of music, or two architectural styles.",
        parentTip: "Comparative thinking is a transferable skill that applies across all intellectual domains. Discuss: what does comparison reveal in your chosen domain?",
        prompts: [
          { text: "What are you comparing and what domain?", type: "lines", lines: 2 },
          { text: "Three points of comparison:", type: "lines", lines: 4 },
          { text: "What does the comparison reveal that looking at either example alone would not?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Teaching Comparative Analysis",
        instruction: "Design a lesson plan for teaching comparative analysis to a Year 7 class. Include: the texts you would use, the points of comparison you would teach, a practice activity, and a formative assessment task.",
        parentTip: "Teaching requires understanding the concept from multiple angles — what would confuse a Year 7 student? What misconceptions are most common?",
        prompts: [
          { text: "Texts you would use and why:", type: "lines", lines: 2 },
          { text: "Points of comparison you would model:", type: "lines", lines: 3 },
          { text: "Practice activity:", type: "lines", lines: 3 },
          { text: "Formative assessment task:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Portfolio Reflection: Comparative Writing",
        instruction: "Look back at the comparative writing you have produced throughout this worksheet. Write a reflection on how your comparative writing has developed.",
        prompts: [
          { text: "What was your biggest weakness in comparative writing at the start of this worksheet?", type: "lines", lines: 2 },
          { text: "How has your approach to comparative writing changed?", type: "lines", lines: 3 },
          { text: "What specific comparative skill do you want to continue developing?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Comparison Is How We Learn",
        content: "All learning involves comparison. When you learn a new word, you compare it to words you already know. When you meet a new idea, you compare it to ideas you hold. When you read a new text, you compare it — consciously or not — to everything you have read before. The practice of formal comparative analysis simply makes this natural cognitive process deliberate and explicit. By practising it in English, you are developing a habit of mind that will serve you in every field: a trained ability to see not just what is there, but what is different, what is similar, and what those differences and similarities mean.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "true-false",
        title: "Research Skills Basics",
        instruction: "Decide whether each statement about research and source evaluation is true or false.",
        parentTip: "These foundational statements establish the core concepts before applying them.",
        statements: [
          { text: "All sources found through a search engine are equally reliable.", answer: false },
          { text: "A peer-reviewed journal article has been checked by other experts before publication.", answer: true },
          { text: "Wikipedia can be a useful starting point for research but should generally not be used as a primary source.", answer: true },
          { text: "The date a source was published can affect its reliability for certain research topics.", answer: true },
          { text: "An anonymous author is not necessarily a sign that a source is unreliable.", answer: false },
        ],
      },
      {
        type: "matching",
        title: "Types of Sources",
        instruction: "Match each type of source to its most accurate description.",
        parentTip: "Understanding the different types of sources helps students choose the right evidence for different research tasks.",
        left: ["Peer-reviewed journal", "Government website", "Personal blog", "News article", "Wikipedia"],
        right: [
          "Academic research checked by subject-matter experts before publication",
          "Official information published by a government body",
          "Personal opinion or information published by an individual without expert oversight",
          "Reporting on current events, usually checked by editors but not by subject experts",
          "A collaboratively written encyclopedia — useful for background, not for primary sourcing",
        ],
      },
      {
        type: "multiple-choice",
        title: "The SIFT Framework",
        instruction: "Choose the best answer for each question about the SIFT framework.",
        questions: [
          {
            prompt: "What does the 'S' in SIFT stand for?",
            options: ["Search", "Stop", "Source", "Study"],
            answer: "Stop",
          },
          {
            prompt: "What does 'Investigate the source' mean in the SIFT framework?",
            options: [
              "Read the whole article before forming any opinion",
              "Find out who is behind the website or publication and what their credentials and potential biases are",
              "Check how many views or shares the article has received",
              "Look at the design and layout of the website",
            ],
            answer: "Find out who is behind the website or publication and what their credentials and potential biases are",
          },
          {
            prompt: "What does 'Trace claims' mean in SIFT?",
            options: [
              "Find the original source of a claim rather than relying on a secondary summary",
              "Follow the author on social media",
              "Check the publication date",
              "Look for more articles by the same author",
            ],
            answer: "Find the original source of a claim rather than relying on a secondary summary",
          },
          {
            prompt: "What does 'Find better coverage' mean in SIFT?",
            options: [
              "Find a longer article",
              "Check whether the same claim is reported by multiple reputable sources",
              "Find a source with more images",
              "Find a source from a different country",
            ],
            answer: "Check whether the same claim is reported by multiple reputable sources",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Research Vocabulary",
        instruction: "Fill in the blanks with the correct terms.",
        sentences: [
          { text: "A ___ source presents information in its original form; a ___ source discusses or analyses primary sources.", blanks: ["primary", "secondary"] },
          { text: "A ___ source has been checked by subject-matter experts before publication.", blanks: ["peer-reviewed"] },
          { text: "The ___ of a source is its quality of being trustworthy and accurate.", blanks: ["credibility / reliability"] },
          { text: "Using a source without acknowledging it in an essay is called ___.", blanks: ["plagiarism"] },
        ],
      },
      {
        type: "open-response",
        title: "Source Evaluation: Apply SIFT",
        instruction: "Evaluate each of the following sources using the SIFT framework. Rate each source's reliability (high / medium / low) and briefly explain your rating.",
        parentTip: "You can research these sources together online for a more thorough evaluation, or use only the descriptions provided.",
        prompts: [
          { text: "Source 1: A blog post titled 'Ten Foods That Cure Cancer' on a personal wellness website with no author name and no references to studies. SIFT evaluation and reliability rating:", type: "lines", lines: 4 },
          { text: "Source 2: A peer-reviewed journal article published in The Lancet in 2024, with named authors and a methodology section. SIFT evaluation and reliability rating:", type: "lines", lines: 4 },
          { text: "Source 3: A Wikipedia article on the history of climate science, with 87 footnotes linking to academic papers and news articles. SIFT evaluation and reliability rating:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Source Is More Reliable?",
        instruction: "In each pair, circle the more reliable source for academic research and be ready to explain why.",
        parentTip: "Discuss the reasons for each choice together — the reasoning matters as much as the answer.",
        questions: [
          { prompt: "Pair A:", options: ["A 2024 peer-reviewed study by named university researchers published in a scientific journal", "A YouTube video by a popular influencer on the same topic"] },
          { prompt: "Pair B:", options: ["A news article from a well-established national newspaper with named journalist and editor", "An anonymous post on a social media platform shared 10,000 times"] },
          { prompt: "Pair C:", options: ["A government health department publication on vaccine safety", "A blog post by a parent writing about their personal experience with vaccines"] },
        ],
      },
      {
        type: "true-false",
        title: "Common Research Mistakes",
        instruction: "Decide whether each research practice is a mistake or good practice.",
        statements: [
          { text: "Using only one source for a research claim, even if it seems reputable, is risky.", answer: true },
          { text: "If a source has a strong emotional headline, this is usually a sign of high-quality journalism.", answer: false },
          { text: "It is acceptable to use a source that is 20 years old for a topic where knowledge has changed significantly.", answer: false },
          { text: "Checking whether a claim appears in multiple reputable sources before using it is good research practice.", answer: true },
          { text: "Copying text from a source without quotation marks and a citation is plagiarism.", answer: true },
        ],
      },
      {
        type: "multiple-choice",
        title: "Evaluating Credibility Indicators",
        instruction: "Choose the best answer for each question about evaluating source credibility.",
        questions: [
          {
            prompt: "A website ends in '.edu' — what does this typically indicate?",
            options: ["The website is always reliable", "The website belongs to an educational institution, which is a positive credibility indicator (though not a guarantee)", "The website is government-owned", "The website is peer-reviewed"],
            answer: "The website belongs to an educational institution, which is a positive credibility indicator (though not a guarantee)",
          },
          {
            prompt: "You find a statistic widely shared on social media. What is the best first step?",
            options: ["Share it immediately — if it's been shared a lot, it must be true", "Trace the statistic to its original source and evaluate that source", "Ignore it — social media is always unreliable", "Use it in your essay because it is recent"],
            answer: "Trace the statistic to its original source and evaluate that source",
          },
          {
            prompt: "An article on a news website has no author name. What should you do?",
            options: ["Trust it — news websites are always reliable", "Treat it with caution and look for the same information from a named source", "Immediately discard it", "Assume it was written by the website editor"],
            answer: "Treat it with caution and look for the same information from a named source",
          },
        ],
      },
      {
        type: "open-response",
        title: "Integrating a Source Into Writing",
        instruction: "Practise integrating a source into academic writing. Use the following quote from a fictional source in a TEEL paragraph responding to: 'What are the effects of social media on adolescent wellbeing?'\n\nSource: Dr A. Chen, Journal of Adolescent Health, 2023: 'Our study found that adolescents who used social media for more than three hours daily reported significantly higher rates of anxiety and disrupted sleep patterns.'",
        parentTip: "The student's own analytical voice should dominate — the source is the evidence, not the argument.",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
          { text: "Is your analysis section longer than your quote? If not, expand it here:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Citation Format Practice",
        instruction: "Complete the citation in the format: Author, Year, Title, Publication.",
        parentTip: "Correct citation is a fundamental academic skill. Practise it until it becomes automatic.",
        sentences: [
          { text: "For a journal article: Smith, J., ___, 'The Effects of Screen Time,' ___, pp. 23–45.", blanks: ["2023", "Journal of Adolescent Health"] },
          { text: "For a book: Johnson, M., ___, The Art of Research, ___, London.", blanks: ["2022", "Academic Press"] },
          { text: "For a website: National Health Authority, ___, 'Sleep Guidelines for Teenagers,' retrieved ___ from www.health.gov.au.", blanks: ["2024", "19 February 2026"] },
        ],
      },
      {
        type: "tip",
        title: "Tip: Always Trace the Original Source",
        content: "One of the most common research errors is using a secondary summary of a study without reading the original. A news article might say 'Scientists find that coffee cures depression' — but the original study might say 'In a sample of 200 adults, moderate coffee consumption was associated with slightly lower self-reported depression scores.' The headline and the study are very different claims. Always trace claims to their original source before using them in academic writing.",
      },
      {
        type: "open-response",
        title: "Reflection: The Ethical Researcher",
        instruction: "Think about your own research habits and answer honestly.",
        parentTip: "This reflective activity builds honest self-awareness about research practices — which is the foundation for improving them.",
        prompts: [
          { text: "When you search for information online, what is your usual process? Describe it honestly.", type: "lines", lines: 3 },
          { text: "Have you ever used a source without checking whether it was reliable? What might the consequences be in an academic context?", type: "lines", lines: 3 },
          { text: "What one change to your research habits would most improve the quality of your academic work?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Source Evaluation in the Wild",
        instruction: "Over the next week, evaluate three sources you encounter naturally (news articles, social media posts, podcasts, or online articles).",
        parentTip: "Real-world application is essential for developing research skills. Discuss the sources your student finds — the evaluation process is as important as the conclusion.",
        suggestions: [
          "Apply the SIFT framework to each source",
          "Rate each source's reliability and write a brief justification",
          "For one source, trace its central claim back to the original evidence",
          "Note: which type of source was hardest to evaluate, and why?",
        ],
      },
      {
        type: "multiple-choice",
        title: "Bias in Sources",
        instruction: "Consider how bias affects source reliability.",
        questions: [
          {
            prompt: "A study on the health benefits of red wine is funded by a wine industry association. What concern does this raise?",
            options: [
              "No concern — funded research is always more reliable",
              "Potential conflict of interest — the funding source may have influenced the research design or reporting",
              "The study is definitely wrong",
              "The study cannot be used in any context",
            ],
            answer: "Potential conflict of interest — the funding source may have influenced the research design or reporting",
          },
          {
            prompt: "A think-tank produces a report arguing for lower corporate taxes. The think-tank is funded by large corporations. How should a researcher treat this source?",
            options: [
              "Ignore it completely — funded sources are always biased",
              "Use it as evidence without any caveat",
              "Use it critically — acknowledge the potential bias, look for the evidence it cites, and seek corroborating or contradicting sources",
              "Assume the opposite of its conclusions is true",
            ],
            answer: "Use it critically — acknowledge the potential bias, look for the evidence it cites, and seek corroborating or contradicting sources",
          },
        ],
      },
      {
        type: "open-response",
        title: "Recognising Bias in Sources",
        instruction: "Consider how bias affects different types of sources.",
        parentTip: "All sources have some degree of bias — the goal is not to find bias-free sources (they don't exist) but to identify and account for bias.",
        prompts: [
          { text: "What kinds of bias might a government health department have in reporting on public health policy?", type: "lines", lines: 3 },
          { text: "What kinds of bias might a non-government advocacy organisation have in reporting on the same issue?", type: "lines", lines: 3 },
          { text: "How can a researcher use biased sources productively in their work?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "true-false",
        title: "Academic Integrity",
        instruction: "Decide whether each statement about academic integrity is true or false.",
        statements: [
          { text: "Paraphrasing a source's ideas without acknowledging it is a form of plagiarism.", answer: true },
          { text: "Using a direct quote with quotation marks and a citation is acceptable academic practice.", answer: true },
          { text: "It is acceptable to copy large amounts of text from a source as long as you cite it.", answer: false },
          { text: "Academic integrity means giving credit to all sources you draw on.", answer: true },
          { text: "Citing a source you did not actually read is acceptable if the information seems right.", answer: false },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Responsibility of Knowledge",
        content: "In a world where anyone can publish anything, the ability to evaluate sources is not just an academic skill — it is a civic responsibility. Misinformation has real consequences: false medical claims have led people to reject effective treatments; false political claims have influenced elections; false historical narratives have been used to justify violence. When you verify a source before using or sharing it, you are not just protecting your own academic integrity — you are taking seriously your responsibility to the truth and to the people your information might affect.",
      },
      {
        type: "open-response",
        title: "Primary vs. Secondary Sources",
        instruction: "Understand the difference between primary and secondary sources and when to use each.",
        parentTip: "The distinction between primary and secondary sources is one of the most fundamental concepts in research. Discuss concrete examples from your student's area of study.",
        prompts: [
          { text: "Give two examples of primary sources for a research project on Indigenous Australian art:", type: "lines", lines: 2 },
          { text: "Give two examples of secondary sources for the same project:", type: "lines", lines: 2 },
          { text: "When would you prefer a primary source over a secondary one? When is a secondary source more useful?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "When to Cite",
        instruction: "Choose the correct answer about when to cite sources in academic writing.",
        questions: [
          {
            prompt: "Which of the following requires a citation?",
            options: [
              "General knowledge that everyone knows (e.g. 'The Earth orbits the Sun')",
              "A specific statistic or finding from a research study",
              "Your own original analysis of a text",
              "Your personal experience",
            ],
            answer: "A specific statistic or finding from a research study",
          },
          {
            prompt: "You have paraphrased information from a government report in your own words. Do you need to cite it?",
            options: ["No — because you used your own words", "Yes — even paraphrased ideas from a source must be acknowledged", "Only if you used a direct quote", "Only if the source is a book"],
            answer: "Yes — even paraphrased ideas from a source must be acknowledged",
          },
        ],
      },
      {
        type: "open-response",
        title: "Evaluating a Real Source Online",
        instruction: "Find a real online article or source relevant to something you are currently studying. Apply the SIFT framework and write a full evaluation.",
        parentTip: "This is the most authentic source evaluation task in this worksheet. Work through SIFT together before your student writes independently.",
        prompts: [
          { text: "Source URL and brief description:", type: "lines", lines: 2 },
          { text: "S — Stop: Did anything about this source trigger immediate caution?", type: "lines", lines: 2 },
          { text: "I — Investigate the source: Who is behind this? What are their credentials and potential biases?", type: "lines", lines: 3 },
          { text: "F — Find better coverage: Is this claim corroborated by other reputable sources?", type: "lines", lines: 2 },
          { text: "T — Trace claims: What is the original evidence for the main claims made?", type: "lines", lines: 2 },
          { text: "Overall reliability rating and justification:", type: "lines", lines: 2 },
        ],
      },
      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Evaluating Five Sources on the Same Topic",
        instruction: "Choose a research topic relevant to your studies. Find five sources of different types (academic, government, news, NGO, and personal/blog). Evaluate each using SIFT and rank them from most to least reliable.",
        parentTip: "This activity mirrors real research processes. Encourage your student to work through SIFT for each source before ranking — the ranking should emerge from the evaluation.",
        prompts: [
          { text: "Your research topic:", type: "lines", lines: 1 },
          { text: "Source evaluations (5 sources — type, brief SIFT evaluation, rating):", type: "box" },
          { text: "Your ranking from most to least reliable and your justification:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Identifying Misinformation",
        instruction: "Learn to recognise common features of unreliable information online.",
        parentTip: "Discuss real examples of misinformation together if possible — the specific features your student learns to identify should be grounded in real cases.",
        prompts: [
          { text: "What are three common features of unreliable online health information?", type: "lines", lines: 3 },
          { text: "What are three common features of unreliable political or social information online?", type: "lines", lines: 3 },
          { text: "Why might accurate information sometimes be emotionally less satisfying than misinformation?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "multiple-choice",
        title: "Citing Sources Correctly",
        instruction: "Choose the correct citation practice in each scenario.",
        questions: [
          {
            prompt: "You use a direct quote from a 2023 book. Which citation approach is correct?",
            options: [
              "Put the quote in your text with no reference",
              "Use quotation marks around the exact words and add the author, year, and page number in brackets",
              "Paraphrase it to avoid the need for a citation",
              "Note the title of the book at the end of your essay",
            ],
            answer: "Use quotation marks around the exact words and add the author, year, and page number in brackets",
          },
          {
            prompt: "You paraphrase a key argument from a journal article. Do you need to cite it?",
            options: ["No — paraphrasing means it is now your own work", "Yes — ideas from any source must be attributed, whether quoted or paraphrased", "Only if the idea is controversial", "Only if the article is peer-reviewed"],
            answer: "Yes — ideas from any source must be attributed, whether quoted or paraphrased",
          },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Source-Based Paragraph",
        instruction: "Research two reputable sources on the topic: 'How does reading fiction affect empathy?' Write a paragraph that integrates both sources and includes in-text citations.",
        parentTip: "This task combines source evaluation with academic writing. Discuss the sources together before your student writes — are both genuinely relevant? How do they complement or contradict each other?",
        prompts: [
          { text: "Source 1 (description and citation):", type: "lines", lines: 2 },
          { text: "Source 2 (description and citation):", type: "lines", lines: 2 },
          { text: "Your paragraph integrating both sources:", type: "box" },
          { text: "Does your own analytical voice dominate, or do the sources take over? Evaluate:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Evaluating Statistical Claims",
        instruction: "Statistics can be used honestly or misleadingly. Practise interrogating statistical claims.",
        parentTip: "Statistical literacy is essential for research. Discuss these examples together — what questions should we always ask about statistics?",
        prompts: [
          { text: "'Eating chocolate reduces heart disease risk by 30%.' What questions should you ask before accepting this claim?", type: "lines", lines: 3 },
          { text: "'75% of people surveyed supported the policy.' What information is missing that would help you evaluate this claim?", type: "lines", lines: 3 },
          { text: "'Crime has fallen significantly under the current government.' How might this statistic be misleading, and how could you investigate it?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "true-false",
        title: "Research in the Digital Age",
        instruction: "Decide whether each statement about digital research is true or false.",
        statements: [
          { text: "A website that looks professional and well-designed is more likely to be reliable.", answer: false },
          { text: "Social media algorithms tend to show users information that confirms their existing beliefs.", answer: true },
          { text: "The fact that a claim has been shared millions of times is evidence that it is true.", answer: false },
          { text: "Open-access academic journals allow readers to read research papers for free online.", answer: true },
          { text: "Deepfake technology has made it easier to verify information through photographs and videos.", answer: false },
        ],
      },
      {
        type: "open-response",
        title: "Building a Bibliography",
        instruction: "Practise building a bibliography for a research project. Cite five different types of sources in a consistent format.",
        parentTip: "Bibliography formatting is a skill that develops with practice. Choose a consistent format (APA or MLA are the most common in Australian secondary education) and stick to it.",
        prompts: [
          { text: "Book citation:", type: "lines", lines: 2 },
          { text: "Journal article citation:", type: "lines", lines: 2 },
          { text: "Website citation (with access date):", type: "lines", lines: 2 },
          { text: "Government document citation:", type: "lines", lines: 2 },
          { text: "Newspaper article citation:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "The Ethics of AI-Generated Information",
        instruction: "Consider the ethical questions raised by using AI-generated content in academic research.",
        parentTip: "This is a genuinely contemporary question without settled answers. Encourage your student to develop a thoughtful position rather than a reflexive one.",
        prompts: [
          { text: "If an AI generates a list of facts, what are the risks of using those facts in an essay without verification?", type: "lines", lines: 3 },
          { text: "How should AI-generated information be evaluated — using the same criteria as other sources, or different ones?", type: "lines", lines: 3 },
          { text: "What are the ethical questions around using AI to write parts of an academic essay?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Detecting Fake News",
        instruction: "Learn to identify common features of fake news or deliberately misleading content.",
        parentTip: "Discuss real examples of fake news together if possible — understanding why fake news is effective is as important as knowing how to spot it.",
        prompts: [
          { text: "What are three linguistic features (word choice, tone, sentence structure) that often appear in sensationalist or misleading headlines?", type: "lines", lines: 3 },
          { text: "Why might fake news spread more quickly than accurate reporting?", type: "lines", lines: 3 },
          { text: "Describe a step-by-step process you would use to evaluate a suspicious news story before sharing it:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Your Argument Comes First",
        content: "One of the most common mistakes in research-based essays is letting the sources drive the argument. Students find a source, quote it, and then construct an argument around it. This produces weak essays that feel like annotated bibliographies. The correct approach: develop your argument first, then find sources that provide evidence for it. The sources support your argument — they do not replace it. Your analytical voice should always be the dominant voice in the essay.",
      },
      {
        type: "open-response",
        title: "Research Project: Planning Stage",
        instruction: "Plan a small research project on a topic that interests you. Before searching for sources, define your research question, identify what you already know, and plan what types of sources you will seek.",
        parentTip: "Planning before searching is essential for good research. Students who start with a clear question find better sources and write stronger essays.",
        prompts: [
          { text: "Your research question:", type: "lines", lines: 2 },
          { text: "What you already know about this topic:", type: "lines", lines: 3 },
          { text: "What types of sources will be most useful (academic, government, journalistic, etc.) and why:", type: "lines", lines: 3 },
          { text: "Three key questions you want your research to answer:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Integrating Multiple Sources in One Paragraph",
        instruction: "Write a paragraph on a research topic of your choice that integrates three different sources. Each source should support a different aspect of your argument.",
        parentTip: "Integrating multiple sources without losing your own analytical voice is one of the most demanding research writing skills. Discuss together: whose voice is dominant in the paragraph?",
        prompts: [
          { text: "Your research topic and central claim:", type: "lines", lines: 2 },
          { text: "Your paragraph (integrating three sources):", type: "box" },
          { text: "Citation list for your three sources:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Evaluating a Contested Scientific Claim",
        instruction: "Choose a topic where the evidence is genuinely contested among scientists (e.g. the health effects of a specific food, the effectiveness of a new technology, or the interpretation of a historical data set). Research the debate and evaluate the quality of the evidence on each side.",
        parentTip: "Contested scientific questions are excellent for developing critical evaluation skills. Discuss: what makes evidence convincing? What makes it weak?",
        prompts: [
          { text: "The contested claim and the sources you found on each side:", type: "lines", lines: 4 },
          { text: "Which side of the debate has stronger evidence, and why?", type: "lines", lines: 4 },
          { text: "What does this exercise teach you about the nature of scientific knowledge?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Cost of Getting It Wrong",
        content: "In 1998, a study claiming a link between vaccines and autism was published in a prestigious medical journal. The study was later found to be fraudulent — the data was fabricated. By the time it was retracted, the misinformation had spread globally and measles outbreaks increased significantly in communities where vaccination rates dropped. The story of that study is a reminder that source evaluation is not just an academic exercise — it can have real consequences for real people. The question is always: are you willing to be responsible for the information you share?",
      },
      {
        type: "open-response",
        title: "Source Evaluation: A Real Research Task",
        instruction: "You are researching the following question for an English essay: 'How has the representation of women in Australian film changed since the 1980s?' Find three sources that would be useful for this essay and evaluate each.",
        parentTip: "This research task connects source evaluation to a real academic task in English. Discuss together: what kinds of sources would be most useful for this specific question?",
        prompts: [
          { text: "Source 1 — description, type, SIFT evaluation, and how it would be useful:", type: "lines", lines: 4 },
          { text: "Source 2 — description, type, SIFT evaluation, and how it would be useful:", type: "lines", lines: 4 },
          { text: "Source 3 — description, type, SIFT evaluation, and how it would be useful:", type: "lines", lines: 4 },
        ],
      },
      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Writing a Research-Based Essay Introduction",
        instruction: "Write an introduction (5–7 sentences) for a research-based essay on: 'What are the long-term effects of social media use on adolescent mental health?' Include a thesis that is supported by your research findings.",
        parentTip: "A research-based essay introduction differs from a literary essay introduction — it should establish the importance of the research question as well as your central argument.",
        prompts: [
          { text: "Your introduction:", type: "box" },
          { text: "Does your thesis reflect what the evidence actually shows, or what you assumed before researching?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Paraphrasing vs. Quoting",
        instruction: "Practise the decision to paraphrase or quote directly.",
        parentTip: "Direct quotation is most effective for language that is particularly striking, technical, or important to preserve exactly. Paraphrase is better for conveying general information from a source.",
        prompts: [
          { text: "Original text: 'Adolescents who reported using social media for more than four hours daily were 2.3 times more likely to experience symptoms of clinical depression than those who used it for less than one hour.' Quote or paraphrase this? Why? Then write your preferred integration:", type: "lines", lines: 4 },
          { text: "Original text: 'The relationship between social media and mental health is a complicated one.' Quote or paraphrase? Why? Then write your integration:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Research Synthesis: Drawing Conclusions From Multiple Sources",
        instruction: "When you have read multiple sources on the same topic, the next step is synthesis — drawing your own conclusion from the range of evidence.",
        parentTip: "Synthesis is one of the highest-order research skills. It requires not just reporting what sources say but identifying patterns, contradictions, and implications across sources.",
        prompts: [
          { text: "Imagine you have read five sources on climate change and its effects on Australian agriculture. Three sources report significant negative effects; one reports mixed effects; one argues current projections are overstated. What conclusion would you draw from this body of evidence, and why?", type: "lines", lines: 5 },
          { text: "How should a researcher handle sources that contradict each other?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Research Ethics: When Sources Are Harmful",
        instruction: "Consider the ethical questions around using certain types of sources.",
        parentTip: "Research ethics is a serious field. These questions have no easy answers — encourage genuine reflection rather than simple conclusions.",
        prompts: [
          { text: "Is it ever appropriate to cite a source that promotes harmful or offensive views? In what circumstances?", type: "lines", lines: 3 },
          { text: "If you need to reference a discredited study (e.g. to explain how misinformation spread), how should you handle this citation?", type: "lines", lines: 3 },
          { text: "What responsibility do researchers have to ensure that their own published work is ethically sound?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tip",
        title: "Tip: Quality Over Quantity in Research",
        content: "Students often believe that more sources equal a better essay. This is false. Five high-quality, directly relevant sources that are thoroughly evaluated and carefully integrated will produce a stronger essay than twenty sources mentioned superficially. Before adding a source to your essay, ask: does this source genuinely add evidence or perspective that I do not already have? If the answer is no, leave it out. Research is about finding the right evidence, not the most evidence.",
      },
      {
        type: "open-response",
        title: "The Role of Expert Opinion",
        instruction: "Consider when and how expert opinion should be used as evidence in research.",
        prompts: [
          { text: "Why is expert opinion generally more reliable than personal opinion on scientific or technical questions?", type: "lines", lines: 2 },
          { text: "When might expert opinion be insufficient or even misleading as evidence? Give an example.", type: "lines", lines: 3 },
          { text: "How would you evaluate whether someone quoted as an 'expert' is genuinely qualified to speak on a topic?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Evaluating Research on a Controversial Topic",
        instruction: "Choose a genuinely controversial topic (where reasonable people disagree based on values, not just evidence). Research the evidence on each side and evaluate the quality of the research.",
        parentTip: "Controversial topics challenge research skills because students may already have strong opinions. Encourage your student to evaluate the evidence independently of their prior views.",
        prompts: [
          { text: "The controversial topic you chose:", type: "lines", lines: 1 },
          { text: "Evidence supporting one position:", type: "lines", lines: 4 },
          { text: "Evidence supporting the opposing position:", type: "lines", lines: 4 },
          { text: "What role do values (not just evidence) play in this controversy?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Writing a Research Summary",
        instruction: "Write a research summary (200–250 words) of your findings from a research task you have completed. The summary should present your key findings, cite your main sources, and reach a conclusion.",
        parentTip: "Research summaries are a common academic and professional writing task. They require selection and synthesis — not just reporting everything you found.",
        prompts: [
          { text: "Your research summary:", type: "box" },
          { text: "Citation list for sources referenced in the summary:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Evaluating Media Coverage of Research",
        instruction: "Find a news article reporting on a scientific study. Evaluate how accurately the article represents the original research.",
        parentTip: "Science journalism is a rich area for source evaluation. Sensationalised or misleading reporting of research findings is very common. Find the original study if possible.",
        prompts: [
          { text: "Name and describe the news article and the study it reports on:", type: "lines", lines: 2 },
          { text: "What claims does the news article make about the study's findings?", type: "lines", lines: 3 },
          { text: "How accurately does the article represent the original research? Where does it distort, simplify, or sensationalise?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "spark",
        title: "Spark: Information Is Not Knowledge",
        content: "There is an important distinction between information and knowledge. Information is raw data — a statistic, a claim, an observation. Knowledge is what you build when you evaluate, contextualise, synthesise, and understand the significance of information. In the information-rich world you live in, information is no longer scarce. What is scarce is the capacity to transform information into knowledge — to evaluate it critically, connect it to what you already understand, and use it to think rather than just to repeat. That transformation is what research skills are for.",
      },
      {
        type: "open-response",
        title: "Planning a Research-Based Essay",
        instruction: "Plan a full research-based essay on a topic from your English or humanities study. Include: research question, thesis, three body paragraphs (each with a key source), and a plan for your conclusion.",
        prompts: [
          { text: "Research question:", type: "lines", lines: 1 },
          { text: "Thesis:", type: "lines", lines: 2 },
          { text: "Body paragraph 1 — key source and argument:", type: "lines", lines: 3 },
          { text: "Body paragraph 2 — key source and argument:", type: "lines", lines: 3 },
          { text: "Body paragraph 3 — key source and argument:", type: "lines", lines: 3 },
          { text: "Conclusion plan:", type: "lines", lines: 2 },
        ],
      },
      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Full Research-Based Essay",
        instruction: "Write a complete research-based essay (introduction + three body paragraphs + conclusion) on a topic from your studies. The essay should draw on at least four evaluated sources, cite them correctly, and develop an original argument.",
        parentTip: "This is the culminating essay for this worksheet. Allow adequate time: research (separate session), planning (30 minutes), drafting (60 minutes), revising (30 minutes).",
        prompts: [
          { text: "Introduction:", type: "box" },
          { text: "Body paragraph 1:", type: "box" },
          { text: "Body paragraph 2:", type: "box" },
          { text: "Body paragraph 3:", type: "box" },
          { text: "Conclusion:", type: "box" },
          { text: "Bibliography:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Research Skills Audit",
        instruction: "Honestly audit your research skills at the end of this worksheet.",
        parentTip: "An honest skills audit is more useful than a flattering one. Discuss together: where are the genuine gaps? What would help most?",
        prompts: [
          { text: "Rate your ability to evaluate source credibility (1–5) and explain:", type: "lines", lines: 2 },
          { text: "Rate your ability to integrate sources into academic writing (1–5) and explain:", type: "lines", lines: 2 },
          { text: "Rate your ability to cite sources correctly (1–5) and explain:", type: "lines", lines: 2 },
          { text: "Rate your ability to synthesise multiple sources into your own argument (1–5) and explain:", type: "lines", lines: 2 },
          { text: "What is the single most important research skill you want to develop further?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Designing a Source Evaluation Checklist",
        instruction: "Create a personal source evaluation checklist — a set of questions you will ask of every source you use in academic research.",
        parentTip: "A personalised checklist is more useful than a generic one because it reflects the specific aspects the student needs to attend to in their own research practice.",
        prompts: [
          { text: "Your personal source evaluation checklist (at least 10 questions, organised by category):", type: "box" },
          { text: "Which three questions on your checklist will make the biggest difference to your research quality?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Research and Democracy: A Critical Response",
        instruction: "Write an extended response (three to four paragraphs) to the question: 'Is the ability to evaluate sources a democratic skill — one that is essential for participation in a healthy democracy?' Argue your position with evidence.",
        parentTip: "This connects research skills to broader civic values. Encourage your student to develop a specific, argued position rather than a vague agreement.",
        prompts: [
          { text: "Your extended response:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "The Future of Research: Opportunities and Risks",
        instruction: "Consider how research practices are changing in the digital and AI era.",
        prompts: [
          { text: "What opportunities does the internet and digital access create for researchers, particularly those in remote or under-resourced communities?", type: "lines", lines: 3 },
          { text: "What new risks and challenges does the digital age create for research integrity?", type: "lines", lines: 3 },
          { text: "How do you think AI tools will change research practices over the next decade? What skills will remain essential?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Teaching Research Skills",
        instruction: "Design a lesson plan for teaching source evaluation skills to a Year 6 class. Include: an introduction, a hands-on activity using real sources, and a reflection task.",
        parentTip: "Designing a lesson requires understanding the concept from a pedagogical perspective. What would confuse a Year 6 student? What examples would resonate?",
        prompts: [
          { text: "Introduction — how you would explain source reliability to Year 6:", type: "lines", lines: 3 },
          { text: "Hands-on activity:", type: "lines", lines: 4 },
          { text: "Reflection task:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Applying Research Skills Across Subjects",
        instruction: "Research skills are not just for English — they are essential in every subject. Consider how the skills developed in this worksheet apply across your studies.",
        prompts: [
          { text: "How would source evaluation skills help you in History?", type: "lines", lines: 2 },
          { text: "How would they help you in Science?", type: "lines", lines: 2 },
          { text: "How would they help you in any future employment or career?", type: "lines", lines: 3 },
          { text: "What would you tell a student who said 'research skills are only important for school'?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "A Personal Research Standard",
        instruction: "Write a personal statement of research standards — a set of commitments you will uphold in all your future academic and personal research.",
        parentTip: "A personal standards document is a commitment device. Discuss it together — what does your student genuinely believe about their responsibilities as a researcher?",
        prompts: [
          { text: "Your personal research standards (at least 6 commitments, written in first person):", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: What Research Has Taught You",
        instruction: "Write a reflective response on how studying research and source evaluation has changed how you engage with information.",
        prompts: [
          { text: "What is the most important thing you have learned from this worksheet about how to research responsibly?", type: "lines", lines: 3 },
          { text: "Has studying research skills changed how you engage with news or information you encounter daily? How?", type: "lines", lines: 3 },
          { text: "What research skill do you most want to continue developing, and why?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "spark",
        title: "Spark: You Are a Researcher",
        content: "The word 'research' can feel like something that happens in laboratories or universities — remote from everyday life. But every time you check whether a claim is true before accepting it, every time you look for the original source of a statistic, every time you consider who is behind the information you are reading and why they might have produced it, you are doing research. The habits of mind you have developed in this worksheet — curiosity, scepticism, verification, synthesis — are not just academic skills. They are the habits of a person who takes truth seriously. That is one of the most valuable things you can be.",
      },
    ],
    nextSteps: [
      "Apply source evaluation skills in your next research task.",
      "Begin Year 9 English: Critical Literacy — Power and Representation.",
    ],
  },
];

export function getYear8EnglishWorksheet(slug: string): WorksheetItem | undefined {
  return year8EnglishWorksheets.find((ws) => ws.slug === slug);
}
