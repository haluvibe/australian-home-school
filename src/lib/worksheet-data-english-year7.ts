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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "multiple-choice",
        title: "What Is Register?",
        instruction: "Choose the best definition of 'register' in the context of language and writing.",
        questions: [
          {
            prompt: "Register refers to:",
            options: [
              "A. The volume at which you speak",
              "B. The level of formality a speaker or writer chooses based on audience, purpose and context",
              "C. A list of students in a class",
              "D. The speed at which a text is written",
            ],
            answer: "B. The level of formality a speaker or writer chooses based on audience, purpose and context",
          },
        ],
      },
      // 2
      {
        type: "sorting",
        title: "Sort: Formal or Informal?",
        instruction: "Sort each word or phrase into the correct column based on its register.",
        parentTip: "Read each item aloud together. Which would you use in a job interview? Which would you text to a friend?",
        columns: ["Formal", "Informal"],
        items: [
          { label: "commence" },
          { label: "kick off" },
          { label: "I am writing to enquire" },
          { label: "just wanna check" },
          { label: "obtain" },
          { label: "grab" },
          { label: "furthermore" },
          { label: "also, like" },
          { label: "terminate" },
          { label: "end" },
        ],
      },
      // 3
      {
        type: "true-false",
        title: "Register: True or False?",
        instruction: "Mark each statement T (true) or F (false).",
        parentTip: "Discuss any statements your child is unsure about — these are the most valuable ones.",
        statements: [
          { text: "Formal writing always uses contractions such as 'don't' and 'can't'.", answer: false },
          { text: "The same information can be expressed in different registers.", answer: true },
          { text: "Informal writing is less correct than formal writing.", answer: false },
          { text: "Audience and purpose are key factors in choosing a register.", answer: true },
          { text: "Using slang in a formal letter is an example of register mismatch.", answer: true },
        ],
      },
      // 4
      {
        type: "matching",
        title: "Match Register to Context",
        instruction: "Draw a line to match each writing context with its most appropriate register.",
        parentTip: "Ask your child to explain why each match works before moving on.",
        left: [
          "A text message to a friend about weekend plans",
          "A letter to your local councillor requesting a new park",
          "A school newsletter report on a sports carnival",
          "A diary entry about a difficult day",
          "A job application for a part-time role",
        ],
        right: [
          "Informal",
          "Formal",
          "Semi-formal",
          "Informal/Personal",
          "Formal",
        ],
      },
      // 5
      {
        type: "circle-correct",
        title: "Spot the Formal Vocabulary",
        instruction: "Circle the more formal option in each pair.",
        questions: [
          { prompt: "Which is more formal?", options: ["start", "commence"] },
          { prompt: "Which is more formal?", options: ["help", "assist"] },
          { prompt: "Which is more formal?", options: ["ask", "enquire"] },
          { prompt: "Which is more formal?", options: ["kids", "children"] },
          { prompt: "Which is more formal?", options: ["get", "obtain"] },
          { prompt: "Which is more formal?", options: ["buy", "purchase"] },
        ],
      },
      // 6
      {
        type: "fill-in-blank",
        title: "Complete with the Right Register Word",
        instruction: "Fill each blank with the word that matches the register of the sentence (choices given in brackets).",
        parentTip: "Read the whole sentence aloud first so the register of the surrounding text is clear.",
        sentences: [
          { text: "Dear Sir, I am writing to ___ about the position advertised online. [enquire / ask around]", blanks: ["enquire"] },
          { text: "Hey, can you ___ me a hand moving this table? [lend / provide assistance with]", blanks: ["lend"] },
          { text: "The committee has ___ to hold the event on Saturday 14 March. [decided / made the decision]", blanks: ["decided"] },
          { text: "I totally ___ with what you said — it was so unfair! [agree / concur with the sentiment expressed]", blanks: ["agree"] },
          { text: "We regret to ___ that the service will be unavailable until further notice. [advise / tell you]", blanks: ["advise"] },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Identify the Register",
        instruction: "Read each extract and identify its register (formal, semi-formal, or informal). List three specific language features that signal the register.",
        parentTip: "Push beyond labelling — ask your child to be specific: 'It uses contractions like can't and we'd' is better than 'it sounds casual'. The precise observation is the skill.",
        prompts: [
          {
            text: "Extract A: 'Further to our previous correspondence, I am writing to confirm that the application has been received and is currently under review. You will be notified of the outcome within ten business days.'\n\nRegister: ______________\nThree language features:\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________",
            type: "lines",
            lines: 4,
          },
          {
            text: "Extract B: 'Hey! Just wanted to say the stuff you sent came through fine. We'll let you know asap — prob about two weeks?'\n\nRegister: ______________\nThree language features:\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________",
            type: "lines",
            lines: 4,
          },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Register and Contractions",
        instruction: "Choose the correct answer for each question about contractions and register.",
        questions: [
          {
            prompt: "Which sentence uses formal register correctly?",
            options: [
              "A. We can't start until everyone's here.",
              "B. We cannot commence until all participants have arrived.",
              "C. We can't start until all participants have arrived.",
              "D. We cannot commence until everyone's here.",
            ],
            answer: "B. We cannot commence until all participants have arrived.",
          },
          {
            prompt: "Contractions such as 'don't', 'we're' and 'they've' are typically found in which register?",
            options: ["A. Formal", "B. Informal", "C. Academic", "D. Legal"],
            answer: "B. Informal",
          },
        ],
      },
      // 9
      {
        type: "sorting",
        title: "Sort Sentences by Register",
        instruction: "Sort each sentence into the correct column.",
        columns: ["Formal", "Semi-formal", "Informal"],
        items: [
          { label: "I am pleased to inform you that your application has been successful." },
          { label: "Just letting you know you got the job — congrats!" },
          { label: "We are happy to confirm that you have been selected for the role." },
          { label: "Omg I can't believe you got it!!!" },
          { label: "Please find attached the relevant documentation for your review." },
          { label: "I've attached the docs you need." },
        ],
      },
      // 10
      {
        type: "fill-in-blank",
        title: "Formal Connectives",
        instruction: "Complete each formal sentence with the appropriate connective (furthermore, however, therefore, consequently, nevertheless).",
        parentTip: "Connectives are a key signal of formal register. Discuss what each connective means before filling in the blank.",
        sentences: [
          { text: "___, the results do not support the original hypothesis.", blanks: ["However"] },
          { text: "The event was cancelled; ___, all ticket holders will receive a full refund.", blanks: ["consequently"] },
          { text: "The proposal has several merits; ___, there are significant cost concerns.", blanks: ["however"] },
          { text: "The report was incomplete. ___, a revised version must be submitted.", blanks: ["Therefore"] },
          { text: "The task was difficult. ___, the team completed it on schedule.", blanks: ["Nevertheless"] },
        ],
      },
      // 11
      {
        type: "true-false",
        title: "Audience and Register",
        instruction: "Read each statement and mark T (true) or F (false).",
        statements: [
          { text: "The intended audience has no effect on the register a writer chooses.", answer: false },
          { text: "A report written for a government department would typically use formal register.", answer: true },
          { text: "Social media posts are usually written in formal register.", answer: false },
          { text: "A speech at a school assembly might use semi-formal register.", answer: true },
          { text: "Register only refers to vocabulary choices, not sentence structure.", answer: false },
        ],
      },
      // 12
      {
        type: "open-response",
        title: "Describe Register Features",
        instruction: "For each register, list two vocabulary features and one sentence structure feature that typically signal it.",
        prompts: [
          { text: "Formal register — two vocabulary features:\n1. ___________________________________________\n2. ___________________________________________\nOne sentence structure feature: ___________________________________________", type: "lines", lines: 4 },
          { text: "Informal register — two vocabulary features:\n1. ___________________________________________\n2. ___________________________________________\nOne sentence structure feature: ___________________________________________", type: "lines", lines: 4 },
        ],
      },
      // 13
      {
        type: "circle-correct",
        title: "Pronoun and Register",
        instruction: "Circle the sentence that uses pronouns consistent with formal register.",
        questions: [
          {
            prompt: "Which uses formal register?",
            options: [
              "A. You guys should come check it out.",
              "B. All interested parties are welcome to attend.",
            ],
          },
          {
            prompt: "Which uses formal register?",
            options: [
              "A. It is recommended that participants arrive fifteen minutes prior to commencement.",
              "B. Everyone should get there early.",
            ],
          },
        ],
      },
      // 14
      {
        type: "fill-in-blank",
        title: "Rewrite with Formal Vocabulary",
        instruction: "Replace the underlined informal word with a more formal equivalent. Write the formal word in the blank.",
        sentences: [
          { text: "We need to ___ (fix) the problem before the deadline.", blanks: ["rectify / resolve / address"] },
          { text: "The manager ___ (told off) the employee for arriving late.", blanks: ["reprimanded / admonished"] },
          { text: "The results were ___ (pretty good).", blanks: ["satisfactory / favourable"] },
          { text: "We are going to ___ (look into) the matter further.", blanks: ["investigate / examine"] },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: The Three Questions of Register",
        content: "Before you write anything, ask yourself three questions: Who is my audience? What is my purpose? What context am I writing in? The answers to these three questions will tell you exactly which register to use. A formal register uses full words (cannot, do not), Latinate vocabulary (obtain, commence, terminate), complete sentences, and impersonal phrasing. An informal register uses contractions (can't, don't), everyday vocabulary, fragments, and direct personal address.",
      },
      // 16
      {
        type: "multiple-choice",
        title: "Register Mismatch",
        instruction: "Identify the sentence that contains a register mismatch.",
        questions: [
          {
            prompt: "Which sentence mixes registers inappropriately?",
            options: [
              "A. I am writing to formally request an extension to the deadline.",
              "B. I am writing to formally request an extension cos I'm super swamped.",
              "C. Hey, any chance of getting more time? I'm really busy.",
              "D. Could you please consider granting additional time for this submission?",
            ],
            answer: "B. I am writing to formally request an extension cos I'm super swamped.",
          },
        ],
      },
      // 17
      {
        type: "sorting",
        title: "Register Features — Sort the Clues",
        instruction: "Sort each language feature into the correct column.",
        parentTip: "Some features could appear in more than one register — discuss where to place anything ambiguous.",
        columns: ["Signals Formal Register", "Signals Informal Register"],
        items: [
          { label: "contractions (can't, we're)" },
          { label: "passive voice (It was decided that...)" },
          { label: "slang and colloquialisms" },
          { label: "impersonal constructions (It is recommended...)" },
          { label: "sentence fragments" },
          { label: "Latinate vocabulary (obtain, terminate)" },
          { label: "direct address (you guys, mate)" },
          { label: "technical or specialist vocabulary" },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Register in the Real World",
        instruction: "Find one example of formal writing and one example of informal writing from your daily life this week (text messages, letters, websites, emails, signs, etc.). Describe each and explain three register features of each.",
        prompts: [
          { text: "Formal text found: ___________________________________________\nThree register features:\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________", type: "lines", lines: 5 },
          { text: "Informal text found: ___________________________________________\nThree register features:\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________", type: "lines", lines: 5 },
        ],
      },
      // 19
      {
        type: "true-false",
        title: "Register in Speech vs Writing",
        instruction: "Mark each statement T (true) or F (false).",
        statements: [
          { text: "Register applies to spoken language as well as written language.", answer: true },
          { text: "Formal register in speech includes complete sentences and precise vocabulary.", answer: true },
          { text: "You would use the same register speaking to a judge as you would chatting to a sibling.", answer: false },
          { text: "Code-switching means changing register to suit different audiences and contexts.", answer: true },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: The Funniest Register Mismatch You Can Write",
        content: "Register mismatch is one of the oldest tools in comedy. Write a deliberately absurd register mismatch: choose one of these scenarios and write 4–6 sentences. (A) A formal parliamentary motion proposing that Tuesday be renamed 'Noodle Day'. (B) A legal contract between two siblings about who gets the front seat of the car. (C) A scientific research paper investigating the optimal technique for eating a Tim Tam. Make it as formally ridiculous as possible — the comedy comes from the total mismatch between register and subject matter.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Rewrite for a Different Register",
        instruction: "Rewrite each passage in the register indicated. Keep the core information the same but change the language features to match the new register.",
        parentTip: "Encourage your child to think about vocabulary, sentence length, pronoun use, and contractions. Read each version aloud to hear the difference.",
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
      // 22
      {
        type: "fill-in-blank",
        title: "Semi-formal Register",
        instruction: "Semi-formal register sits between formal and informal — used in school newsletters, workplace emails, and public announcements. Complete each semi-formal sentence with an appropriate word or phrase.",
        parentTip: "Semi-formal register is the most commonly used register in everyday professional life. Help your child notice it in school communications.",
        sentences: [
          { text: "Thank you for ___ in touch with us regarding this matter.", blanks: ["getting"] },
          { text: "We would ___ to remind all families that the hall will be closed next Friday.", blanks: ["like"] },
          { text: "Please do not ___ to contact us if you have any further questions.", blanks: ["hesitate"] },
          { text: "We ___ forward to seeing you at the event.", blanks: ["look"] },
        ],
      },
      // 23
      {
        type: "multiple-choice",
        title: "Passive Voice and Formal Register",
        instruction: "The passive voice is a common feature of formal writing. Choose the passive version of each sentence.",
        parentTip: "Passive voice removes the 'doer' of the action, making writing feel more impersonal and formal. This is deliberate in formal texts.",
        questions: [
          {
            prompt: "Which is the passive version?",
            options: [
              "A. The committee approved the proposal.",
              "B. The proposal was approved by the committee.",
            ],
            answer: "B. The proposal was approved by the committee.",
          },
          {
            prompt: "Which is the passive version?",
            options: [
              "A. Mistakes were made during the process.",
              "B. We made mistakes during the process.",
            ],
            answer: "A. Mistakes were made during the process.",
          },
          {
            prompt: "Which sentence uses passive voice for formal effect?",
            options: [
              "A. They cancelled the meeting.",
              "B. The meeting has been cancelled.",
            ],
            answer: "B. The meeting has been cancelled.",
          },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Choosing the Right Register",
        instruction: "For each writing scenario below, decide what register is most appropriate and write the opening 2–3 sentences in that register.",
        parentTip: "Discuss the audience and purpose of each scenario before writing. The question is not just 'formal or informal?' but 'what does this specific reader need from this specific text?'",
        prompts: [
          { text: "Scenario: Writing to your local council asking them to add a crossing near your school.\nOpening sentences:", type: "lines", lines: 3 },
          { text: "Scenario: Writing a review of a game or book for a website aimed at other Year 7 students.\nOpening sentences:", type: "lines", lines: 3 },
          { text: "Scenario: Writing a speech to be delivered at a school assembly on a topic you care about.\nOpening sentences:", type: "lines", lines: 3 },
        ],
      },
      // 25
      {
        type: "sorting",
        title: "Sort by Purpose and Register",
        instruction: "Match each text type to its typical register by sorting into columns.",
        columns: ["Formal", "Semi-formal", "Informal"],
        items: [
          { label: "Legal contract" },
          { label: "School newsletter" },
          { label: "Personal diary" },
          { label: "Medical report" },
          { label: "Email to a teacher" },
          { label: "Text message to a sibling" },
          { label: "Parliamentary speech" },
          { label: "Community sports club website" },
          { label: "Post on a friend's social media" },
        ],
      },
      // 26
      {
        type: "true-false",
        title: "Formal Sentence Structures",
        instruction: "Mark T (true) or F (false) for each claim about formal sentence structure.",
        statements: [
          { text: "Formal writing often uses longer, more complex sentences than informal writing.", answer: true },
          { text: "Sentence fragments are a common feature of formal written texts.", answer: false },
          { text: "Formal texts often use nominalisation — turning verbs into nouns (e.g., 'to decide' → 'the decision').", answer: true },
          { text: "Exclamation marks and ellipsis are typical features of formal writing.", answer: false },
          { text: "First-person pronouns (I, we) are never used in formal writing.", answer: false },
        ],
      },
      // 27
      {
        type: "fill-in-blank",
        title: "Nominalisation — Formal Language Feature",
        instruction: "Nominalisation turns verbs or adjectives into abstract nouns — a key feature of formal register. Convert the underlined word into its nominalised form.",
        parentTip: "Nominalisation is one of the most distinctive features of academic and formal writing. Discuss how it makes writing feel more 'official'.",
        sentences: [
          { text: "The government decided to act. → The government made a ___ to act.", blanks: ["decision"] },
          { text: "Scientists discovered a new planet. → The ___ of a new planet was announced.", blanks: ["discovery"] },
          { text: "The factory polluted the river. → The ___ of the river was investigated.", blanks: ["pollution"] },
          { text: "The committee investigated the matter. → An ___ into the matter was launched.", blanks: ["investigation"] },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Analyse Register in a Real Text",
        instruction: "Find a short text (any genre) and analyse its register. Write 4–6 sentences identifying specific features and explaining what they tell us about the intended audience and purpose.",
        parentTip: "The best texts for this activity are ones your child encounters naturally — a letter from school, a packaging label, an online article. Real-world analysis is more valuable than worksheets alone.",
        prompts: [
          { text: "Text type and where you found it: ___________________________________________\nYour register analysis (4–6 sentences):", type: "box" },
        ],
      },
      // 29
      {
        type: "multiple-choice",
        title: "Register in Australian English",
        instruction: "Australian English has some distinctive informal features. Choose the most accurate answer.",
        questions: [
          {
            prompt: "Which word is distinctively Australian informal slang?",
            options: ["A. furthermore", "B. arvo (afternoon)", "C. commence", "D. accordingly"],
            answer: "B. arvo (afternoon)",
          },
          {
            prompt: "Which sentence reflects informal Australian English?",
            options: [
              "A. I shall endeavour to attend the gathering.",
              "B. Reckon I'll swing by this arvo.",
              "C. It would be my pleasure to join you.",
              "D. I intend to be present at the event.",
            ],
            answer: "B. Reckon I'll swing by this arvo.",
          },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Register Is a Spectrum, Not a Switch",
        content: "Many students think of register as a simple on/off switch — either formal or informal. In reality, register is a spectrum with many gradations. Semi-formal register, the most common in real life, is polite and clear but not stiff. Academic register is formal but also technical and precise. Legal register is highly formal and deliberately repetitive. Literary register can be formal, informal, or anywhere between, depending on the author's purpose. When you analyse any text, ask: where on the spectrum does this sit, and why?",
      },
      // 31
      {
        type: "open-response",
        title: "The Same News, Three Registers",
        instruction: "A local school has won a regional debating competition. Write 2–3 sentences reporting this news in each of the three registers below.",
        parentTip: "Read all three versions aloud when done. The differences in word choice and sentence structure should be immediately audible.",
        prompts: [
          { text: "Formal (for a council report or press release):", type: "lines", lines: 3 },
          { text: "Semi-formal (for the school newsletter):", type: "lines", lines: 3 },
          { text: "Informal (as a text to a friend who goes to the school):", type: "lines", lines: 3 },
        ],
      },
      // 32
      {
        type: "fill-in-blank",
        title: "Hedge Language in Formal Writing",
        instruction: "Formal and academic writing often uses 'hedge' language to avoid overstating claims. Fill each blank with an appropriate hedge word or phrase (may, might, appears to, suggests that, it is possible that).",
        parentTip: "Hedging is a sign of intellectual honesty — it signals that a claim is not absolute. This is important in academic and scientific writing.",
        sentences: [
          { text: "The data ___ indicate a link between diet and concentration.", blanks: ["may"] },
          { text: "It ___ that further research is required.", blanks: ["appears"] },
          { text: "___ these results are not representative of all age groups.", blanks: ["It is possible that"] },
          { text: "The findings ___ that the policy has had unintended consequences.", blanks: ["suggest"] },
        ],
      },
      // 33
      {
        type: "sorting",
        title: "Hedge vs Direct Language",
        instruction: "Sort each sentence into the correct column based on whether it uses hedge language or direct/confident language.",
        columns: ["Hedge Language (cautious)", "Direct Language (confident)"],
        items: [
          { label: "The results suggest a possible link between the two variables." },
          { label: "The experiment proves that the hypothesis is correct." },
          { label: "It appears that the trend may be related to climate change." },
          { label: "This treatment cures the disease." },
          { label: "There is evidence to indicate that exercise improves mood." },
          { label: "Exercise definitely makes you happier." },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Write a Formal Email",
        instruction: "Write a formal email (8–10 sentences) to your local library requesting permission to use their meeting room for a community book club. Include: a formal greeting, a clear purpose statement, relevant details (when, how many people, what for), a polite request, and a formal sign-off.",
        parentTip: "Help your child draft this as if it were a real email. Could they actually send it? That is the ultimate test of whether the register is appropriate.",
        prompts: [
          { text: "Write your formal email here:", type: "box" },
        ],
      },
      // 35
      {
        type: "true-false",
        title: "Register in Digital Texts",
        instruction: "Mark T (true) or F (false) for each statement about register in digital communication.",
        statements: [
          { text: "Emails to teachers should typically use semi-formal to formal register.", answer: true },
          { text: "Emoji and abbreviations like 'lol' are appropriate in all digital communication.", answer: false },
          { text: "A professional LinkedIn post would typically use semi-formal to formal register.", answer: true },
          { text: "Register in digital communication is less important than in print.", answer: false },
          { text: "The subject line of a formal email should match the formal register of the body.", answer: true },
        ],
      },
      // 36
      {
        type: "multiple-choice",
        title: "Impersonal Constructions",
        instruction: "Formal writing often avoids the first person by using impersonal constructions. Identify the best formal rewrite.",
        questions: [
          {
            prompt: "Rewrite 'I think we should change the policy' in formal, impersonal register:",
            options: [
              "A. In my opinion, changing the policy would be a good idea.",
              "B. It is recommended that the policy be reviewed and revised.",
              "C. Personally, I reckon the policy needs changing.",
              "D. We all think the policy should change.",
            ],
            answer: "B. It is recommended that the policy be reviewed and revised.",
          },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Register and Power",
        instruction: "Register is not just about politeness — it is also about power. Answer these questions about the relationship between register and social power.",
        parentTip: "This is a genuinely interesting sociological question. Share your own observations about when you adapt your language for people in positions of authority.",
        prompts: [
          { text: "Why might people in positions of power (judges, doctors, executives) use formal register in their professional roles?", type: "lines", lines: 3 },
          { text: "Why might using informal language in a formal context (e.g., casual language in a job interview) disadvantage a speaker?", type: "lines", lines: 3 },
          { text: "Is there any situation where using informal language with someone in authority might be a deliberate, strategic choice? Explain.", type: "lines", lines: 3 },
        ],
      },
      // 38
      {
        type: "fill-in-blank",
        title: "Transitional Phrases in Formal Writing",
        instruction: "Complete each formal paragraph with the most appropriate transitional phrase.",
        sentences: [
          { text: "___ the above evidence, it is clear that the current approach requires revision. [In light of / Because of / Cos of]", blanks: ["In light of"] },
          { text: "___, it should be noted that these findings are preliminary. [However / But / Still]", blanks: ["However"] },
          { text: "___, the committee recommends that the proposal be adopted. [Therefore / So / Anyway]", blanks: ["Therefore"] },
          { text: "___ the difficulties encountered, the project was completed on schedule. [Despite / Even though / Even if]", blanks: ["Despite"] },
        ],
      },
      // 39
      {
        type: "sorting",
        title: "Sort: Formal vs Informal Connectives",
        instruction: "Sort each connective into the correct column.",
        parentTip: "Connective choice is one of the fastest ways to shift register. Formal connectives are longer, more Latinate, and more precise.",
        columns: ["Formal / Academic", "Informal / Conversational"],
        items: [
          { label: "furthermore" },
          { label: "also" },
          { label: "consequently" },
          { label: "so" },
          { label: "nevertheless" },
          { label: "but" },
          { label: "in addition to this" },
          { label: "plus" },
          { label: "notwithstanding" },
          { label: "anyway" },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Write the Same Letter Twice",
        content: "Think of something you genuinely want to ask for — from a parent, a council, a business, a school. Write this request twice: once as an informal message to a friend asking for their advice on how to ask, and once as a formal letter or email to the actual person or organisation you would send it to. Both letters should contain the same core information and same request. Share both with your parent or guardian and discuss: what changed between the two versions, and why?",
      },
      // ── CONSOLIDATING 51–80 ───────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Register Shift Analysis",
        instruction: "Some texts deliberately shift register partway through for effect — a formal speech that suddenly uses informal language to connect with the audience, or a personal essay that shifts to formal language to add weight. Write 4–6 sentences analysing a text you have read that contains a register shift. What is the effect of the shift?",
        parentTip: "Political speeches, TED talks, and opinion columns often do this. If your child cannot recall an example, analyse a short section together.",
        prompts: [
          { text: "Text you are analysing: ___________________________________________\nYour register shift analysis:", type: "box" },
        ],
      },
      // 42
      {
        type: "fill-in-blank",
        title: "Academic Register — Key Phrases",
        instruction: "Academic register has distinctive phrases. Complete each academic sentence appropriately.",
        parentTip: "Academic register will be important for your child in Years 8–12 and beyond. This is good early exposure.",
        sentences: [
          { text: "This essay will ___ the relationship between climate change and food security.", blanks: ["examine / explore / analyse / discuss"] },
          { text: "As ___ by Smith (2019), the data supports this conclusion.", blanks: ["noted / argued / demonstrated"] },
          { text: "The ___ of this study is limited to Australian secondary students.", blanks: ["scope"] },
          { text: "In ___, the evidence strongly supports the initial hypothesis.", blanks: ["conclusion / summary"] },
        ],
      },
      // 43
      {
        type: "multiple-choice",
        title: "Register in Persuasive Writing",
        instruction: "Persuasive writing can use different registers. Choose the most accurate answer.",
        questions: [
          {
            prompt: "A formal persuasive essay arguing for environmental policy change would most likely use:",
            options: [
              "A. Slang and colloquialisms to connect with readers",
              "B. Formal register with evidence, statistics and academic language",
              "C. Informal register to make the reader feel comfortable",
              "D. Mixed register with no clear patterns",
            ],
            answer: "B. Formal register with evidence, statistics and academic language",
          },
          {
            prompt: "An opinion piece in a popular online magazine might use semi-formal register because:",
            options: [
              "A. The writer does not know how to write formally",
              "B. It needs to be accessible and engaging to a general audience while still being credible",
              "C. Online writing is always informal",
              "D. Semi-formal register is the only register available",
            ],
            answer: "B. It needs to be accessible and engaging to a general audience while still being credible",
          },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Rewrite as Formal Persuasive Writing",
        instruction: "The paragraph below is written in informal register. Rewrite it as a formal persuasive paragraph for a letter to a local council. Maintain all the arguments but shift the register completely.",
        parentTip: "Count the language changes your child makes — vocabulary, sentence structure, connectives. The more changes, the more thorough the register shift.",
        prompts: [
          {
            text: "Informal version: 'Honestly, the park near our school is a total mess. Like, there's rubbish everywhere and the equipment is really old and broken. Kids could get hurt! Someone should fix it up because it's not fair on us. We use it heaps and we deserve better.'\n\nFormal rewrite:",
            type: "box",
          },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Reading Register as a Critical Tool",
        content: "Register is not just something writers choose — it is something readers can analyse. When you read any text, asking 'why did the writer choose this register?' gives you insight into their assumptions about their audience and their purpose. A government document written in dense formal register may be technically public but practically inaccessible to many people — that is a political choice. An advertisement that uses informal, friendly register might be trying to disguise the persuasive intent. Register analysis is a form of critical reading.",
      },
      // 46
      {
        type: "sorting",
        title: "Register and Genre",
        instruction: "Match each genre with its typical register range by sorting into the correct column. Note: some genres may cover a range.",
        columns: ["Usually Formal", "Usually Semi-formal", "Usually Informal"],
        items: [
          { label: "Academic essay" },
          { label: "Personal blog" },
          { label: "Court judgment" },
          { label: "School report card" },
          { label: "Personal letter to a friend" },
          { label: "Newspaper editorial" },
          { label: "Scientific journal article" },
          { label: "Food review in a local paper" },
          { label: "Online forum post" },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Write Across Three Registers",
        instruction: "Write about the same topic — your experience of learning at home — in three registers: informal (as a diary entry), semi-formal (as a paragraph for a school portfolio), and formal (as a report for a government survey about home education).",
        parentTip: "This three-way comparison is one of the most powerful register exercises. Read all three versions aloud together and discuss what changed — not just in vocabulary, but in what information was included and how it was framed.",
        prompts: [
          { text: "Informal (diary entry, 3–4 sentences):", type: "lines", lines: 4 },
          { text: "Semi-formal (portfolio paragraph, 4–5 sentences):", type: "lines", lines: 5 },
          { text: "Formal (survey report paragraph, 4–5 sentences):", type: "lines", lines: 5 },
        ],
      },
      // 48
      {
        type: "true-false",
        title: "Register in Literature",
        instruction: "Mark T (true) or F (false) for each statement about register in literary texts.",
        statements: [
          { text: "Authors of literary fiction always use formal register.", answer: false },
          { text: "The register a character uses can reveal their social class, education or attitude.", answer: true },
          { text: "Shifts in register within dialogue can show power dynamics between characters.", answer: true },
          { text: "Narrative voice and character voice always use the same register in a story.", answer: false },
          { text: "Register in literature is as deliberate and meaningful as any other stylistic choice.", answer: true },
        ],
      },
      // 49
      {
        type: "fill-in-blank",
        title: "Register in Dialogue — Literary Analysis",
        instruction: "Complete the analysis of register in literary dialogue. Fill each blank with an appropriate analytical word or phrase.",
        sentences: [
          { text: "When a character uses formal register in casual conversation, this can signal that they feel ___ or uncomfortable in the situation.", blanks: ["out of place / awkward / distant"] },
          { text: "A character who shifts from formal to informal register mid-conversation may be ___ their guard or seeking connection.", blanks: ["dropping / lowering"] },
          { text: "An author may give a character highly formal language to signal that they have ___ and formal education.", blanks: ["authority / status / power"] },
          { text: "When a character deliberately uses informal language in a formal setting, this can be read as a form of ___.", blanks: ["resistance / rebellion / defiance"] },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Register Analysis: Literary Character",
        instruction: "Think of a character from a novel, film or story whose language use is distinctive. Write 5–7 sentences analysing how their register reveals their character, social position, or relationship with others.",
        parentTip: "Help your child choose a character with really distinctive speech — a villain who speaks very formally, a working-class hero who uses dialect, or a character who shifts registers in interesting ways.",
        prompts: [
          { text: "Character and text: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 51
      {
        type: "multiple-choice",
        title: "Register in Workplace Communication",
        instruction: "Choose the most appropriate register for each workplace communication scenario.",
        questions: [
          {
            prompt: "An email to a new manager you have never met should use:",
            options: ["A. Casual slang", "B. Formal or semi-formal register", "C. Abbreviations and emoji", "D. Dialect and colloquialism"],
            answer: "B. Formal or semi-formal register",
          },
          {
            prompt: "A quick message in a team chat with close work colleagues you know well might appropriately use:",
            options: ["A. Legal register", "B. Academic register", "C. Semi-formal to informal register", "D. Highly formal register"],
            answer: "C. Semi-formal to informal register",
          },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Analyse a Public Speech for Register",
        instruction: "Listen to or read a short excerpt from a public speech (a TED talk, a political speech, a school speech). Write 5–6 sentences analysing the register used: is it formal, semi-formal, or does it shift? What specific features create that register? Why might the speaker have chosen it?",
        parentTip: "YouTube has excellent Australian speeches — try the Australian Museum, Parliament House, or any TEDx talk. Watch a short excerpt together before your child analyses it.",
        prompts: [
          { text: "Speech or speaker: ___________________________________________\nYour register analysis:", type: "box" },
        ],
      },
      // 53
      {
        type: "fill-in-blank",
        title: "Register in Advertising",
        instruction: "Advertising carefully chooses register to appeal to its target audience. Complete each analysis.",
        sentences: [
          { text: "A luxury car advertisement uses formal register to signal ___ and exclusivity.", blanks: ["prestige / sophistication / status"] },
          { text: "A fast food advertisement aimed at teenagers uses informal register to feel ___ and relatable.", blanks: ["fun / friendly / approachable"] },
          { text: "A health insurance advertisement might use semi-formal register to appear ___ without seeming cold or distant.", blanks: ["professional / trustworthy / credible"] },
          { text: "When an advertisement uses informal language, it often wants the audience to feel like the brand is their ___.", blanks: ["friend / equal / peer"] },
        ],
      },
      // 54
      {
        type: "sorting",
        title: "Register Features in Advertising",
        instruction: "Sort each advertising feature into the correct column based on the register it signals.",
        columns: ["Signals Formal / Premium Register", "Signals Informal / Accessible Register"],
        items: [
          { label: "Serif font, gold colour scheme" },
          { label: "Bright colours, cartoon characters" },
          { label: "Technical specification language" },
          { label: "Slang headline ('Hungry? Sorted.')" },
          { label: "Awards and credentials prominently displayed" },
          { label: "Direct address ('You deserve a break')" },
          { label: "Classical music in the background" },
          { label: "Memes and pop culture references" },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Write a Persuasive Letter — Two Versions",
        instruction: "You want to convince your local council to create a skate park in your suburb. Write two versions of the same letter: one informal draft and one formal final version. The formal version should be ready to actually send.",
        parentTip: "Consider actually sending the formal version — this turns the exercise into genuine civic participation. Check the council website for the correct address and submission process.",
        prompts: [
          { text: "Informal draft (write freely, focus on your arguments):", type: "box" },
          { text: "Formal final version (ready to send):", type: "box" },
        ],
      },
      // 56
      {
        type: "true-false",
        title: "Register and Cultural Context",
        instruction: "Mark T (true) or F (false) for each statement about register and culture.",
        statements: [
          { text: "What counts as formal register varies between cultures and languages.", answer: true },
          { text: "Australian English formal register is identical to British English formal register.", answer: false },
          { text: "Some cultures have more distinct formal and informal registers than others.", answer: true },
          { text: "Register norms are fixed and never change over time.", answer: false },
          { text: "Understanding register in another culture can help you navigate that culture respectfully.", answer: true },
        ],
      },
      // 57
      {
        type: "multiple-choice",
        title: "Register in Media",
        instruction: "Choose the most accurate answer for each question about register in media texts.",
        questions: [
          {
            prompt: "A broadsheet newspaper editorial (e.g., The Australian or The Sydney Morning Herald) typically uses which register?",
            options: ["A. Very informal with slang", "B. Formal to semi-formal", "C. Highly casual and conversational", "D. Legal register"],
            answer: "B. Formal to semi-formal",
          },
          {
            prompt: "A tabloid newspaper headline (e.g., 'POLLIES IN PORK SCANDAL!') uses informal register primarily to:",
            options: [
              "A. Signal the seriousness of the story",
              "B. Create a sense of urgency and engage a mass audience",
              "C. Appeal to an academic readership",
              "D. Demonstrate respect for the subject",
            ],
            answer: "B. Create a sense of urgency and engage a mass audience",
          },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Critical Analysis: Register as a Political Tool",
        instruction: "Write a short analytical response (5–7 sentences) exploring this idea: 'The register a writer or speaker chooses is never neutral — it reflects assumptions about the audience and can include or exclude people.' Use an example from your own experience or a text you know.",
        parentTip: "This is a sophisticated critical literacy idea. Share your own examples — when have you felt included or excluded by the language register of a text?",
        prompts: [
          { text: "Your analytical response:", type: "box" },
        ],
      },
      // 59
      {
        type: "fill-in-blank",
        title: "Register Metalanguage",
        instruction: "Complete each sentence using the correct metalanguage term (register, formality, audience, purpose, code-switching, nominalisation, passive voice, hedge language).",
        sentences: [
          { text: "The term ___ refers to the level of formality a writer or speaker chooses based on context.", blanks: ["register"] },
          { text: "When someone changes their language style to suit a different social context, this is called ___.", blanks: ["code-switching"] },
          { text: "Turning the verb 'investigate' into the noun 'investigation' is an example of ___.", blanks: ["nominalisation"] },
          { text: "Phrases like 'may suggest' and 'appears to indicate' are examples of ___ in academic writing.", blanks: ["hedge language"] },
          { text: "In formal writing, ___ is used to avoid naming the 'doer' of an action: 'The decision was made' rather than 'We decided'.", blanks: ["passive voice"] },
        ],
      },
      // 60 — TIP AND SPARK
      {
        type: "tip",
        title: "Tip: Register in Your Own Writing",
        content: "Every time you begin a piece of writing, the first decision — even before you think about what to say — is register. Ask yourself: who is going to read this, and what relationship do I have with them? What am I trying to achieve? What context will they read this in? These three questions will tell you whether to reach for formal, semi-formal, or informal language. The most common error is not choosing the wrong register — it is not making a conscious choice at all, and defaulting to whatever feels natural, which may not serve the reader.",
      },
      // ── EXTENDING 61–100 ─────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Register Analysis Essay Plan",
        instruction: "Plan a short essay (three analytical paragraphs) arguing that register in writing reflects social power structures. Outline your three arguments (topic sentences) and identify one piece of evidence for each.",
        parentTip: "This is a pre-writing planning exercise. Discuss the three arguments together before your child writes the plan independently. What would make the most convincing case?",
        prompts: [
          { text: "Paragraph 1 topic sentence (argument 1): ___________________________________________\nEvidence: ___________________________________________", type: "lines", lines: 3 },
          { text: "Paragraph 2 topic sentence (argument 2): ___________________________________________\nEvidence: ___________________________________________", type: "lines", lines: 3 },
          { text: "Paragraph 3 topic sentence (argument 3): ___________________________________________\nEvidence: ___________________________________________", type: "lines", lines: 3 },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Write a Speech That Shifts Register",
        instruction: "Write a short speech (10–14 sentences) that deliberately shifts register at least once for effect. Choose your own topic. After writing, annotate where the register shifts and explain why the shift was a deliberate choice.",
        parentTip: "Effective public speakers shift register deliberately — often from formal to informal to create warmth or connection, then back to formal to make a serious point. Discuss examples from speeches you have heard together.",
        prompts: [
          { text: "Your speech (10–14 sentences, annotated for register shifts):", type: "box" },
          { text: "Explain your register shift choices:", type: "lines", lines: 3 },
        ],
      },
      // 63
      {
        type: "multiple-choice",
        title: "Advanced Register Analysis",
        instruction: "Choose the most analytically sophisticated answer for each question.",
        questions: [
          {
            prompt: "When a political leader uses informal language ('look, mate, let's be honest...') in a press conference, this is best described as:",
            options: [
              "A. A mistake — they should always use formal register",
              "B. A deliberate register shift to create rapport and signal authenticity",
              "C. An example of poor communication",
              "D. Semi-formal register that has no specific purpose",
            ],
            answer: "B. A deliberate register shift to create rapport and signal authenticity",
          },
          {
            prompt: "The most sophisticated register analysis goes beyond identifying the register and explains:",
            options: [
              "A. Only the vocabulary used",
              "B. The effect of the register choice on the audience and its relationship to the writer's purpose",
              "C. Whether the register is correct or incorrect",
              "D. The number of formal words counted in the text",
            ],
            answer: "B. The effect of the register choice on the audience and its relationship to the writer's purpose",
          },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Compare Register Across Two Texts",
        instruction: "Choose two texts on the same topic but written for different audiences (e.g., a scientific report and a popular science magazine article on the same discovery). Write a comparative analysis (6–8 sentences) explaining how the register differs and why.",
        parentTip: "Science communicators are particularly good at this. Compare an ABC science news article with an abstract from the same research paper. The register difference will be striking and clear.",
        prompts: [
          { text: "Text 1 (title, author, audience): ___________________________________________", type: "lines", lines: 1 },
          { text: "Text 2 (title, author, audience): ___________________________________________", type: "lines", lines: 1 },
          { text: "Comparative analysis (6–8 sentences):", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Register and Identity",
        instruction: "Write a personal reflection (6–8 sentences) exploring how register is connected to identity. Do you adapt your language for different people? Are there registers you feel more comfortable or less comfortable in, and why? What does that tell you about language and identity?",
        parentTip: "Share your own experience of code-switching and register adaptation. This is a deeply personal and sociologically interesting topic that rewards honest conversation.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 66
      {
        type: "fill-in-blank",
        title: "Register in Historical vs Contemporary Texts",
        instruction: "Complete each sentence about how register norms have changed over time.",
        sentences: [
          { text: "Formal letters in the 19th century often began with 'I have the honour to ___', a phrase rarely used today.", blanks: ["inform you / write to you"] },
          { text: "Contemporary emails have largely replaced formal letters, and the register of professional email is generally ___ formal than 19th-century correspondence.", blanks: ["less"] },
          { text: "Language change means that what was once considered ___ register may now seem unnecessarily stiff or old-fashioned.", blanks: ["formal / appropriately formal"] },
          { text: "The increasing use of digital communication has generally caused formal register norms to become ___ strict.", blanks: ["less"] },
        ],
      },
      // 67
      {
        type: "sorting",
        title: "Register Across History",
        instruction: "Sort each writing sample into the time period that best matches its likely date, based on register clues.",
        columns: ["19th Century (formal, elaborate)", "Mid 20th Century (formal, cleaner)", "Contemporary (semi-formal, plain language)"],
        items: [
          { label: "I beg to remain, Sir, your most obedient and humble servant..." },
          { label: "Thank you for your recent correspondence. We will be in touch shortly." },
          { label: "Yours faithfully, I remain most grateful for your kind and generous consideration of this matter." },
          { label: "Thanks for getting in touch — we'll follow up soon." },
          { label: "We acknowledge receipt of your communication and are currently processing your request." },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Write a Register Analysis Essay — One Paragraph",
        instruction: "Write one strong analytical paragraph (TEEL) arguing that: 'The register of a text is as important as its content in determining how it is received by its audience.' Use a specific text as your evidence.",
        parentTip: "This is a genuinely sophisticated argument. Discuss it together — can you think of a text that succeeded or failed largely because of its register choice?",
        prompts: [
          { text: "Your analytical paragraph (label T/E/E/L):", type: "box" },
        ],
      },
      // 69
      {
        type: "true-false",
        title: "Register: Advanced Concepts",
        instruction: "Mark T (true) or F (false) for each advanced statement about register.",
        statements: [
          { text: "Register is determined entirely by grammar rules, not by social norms.", answer: false },
          { text: "A writer's choice of register can signal their ideological position or values.", answer: true },
          { text: "The register of a translated text should ideally match the register of the original.", answer: true },
          { text: "Register can be used as a form of social gatekeeping — excluding those who do not know the codes.", answer: true },
          { text: "Understanding register gives readers power to critically evaluate texts rather than simply accepting them.", answer: true },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Redesign a Document for a New Audience",
        instruction: "Find any formal document — a school notice, a government information pamphlet, a legal summary — and rewrite it for an audience of Year 7 students without losing the essential information. Then write 2–3 sentences reflecting on what you had to change and why.",
        parentTip: "This is a real skill called 'plain language writing' and is highly valued in government, health and community services. Discuss with your child: what makes information accessible?",
        prompts: [
          { text: "Original document type: ___________________________________________\nRewritten version:", type: "box" },
          { text: "Reflection on what you changed and why:", type: "lines", lines: 3 },
        ],
      },
      // 71
      {
        type: "multiple-choice",
        title: "Register in Cross-Cultural Communication",
        instruction: "Choose the most accurate answer for each question.",
        questions: [
          {
            prompt: "When communicating across cultures, why is register awareness particularly important?",
            options: [
              "A. Because formal register is always appropriate in every culture",
              "B. Because register norms differ between cultures, and mismatches can cause unintended offence or confusion",
              "C. Because informal register is universally understood",
              "D. Because register does not vary between cultures",
            ],
            answer: "B. Because register norms differ between cultures, and mismatches can cause unintended offence or confusion",
          },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Create a Register Guide",
        instruction: "Create a short 'Register Guide' for a new student who has never heard the term. In 8–10 sentences, explain: what register is, why it matters, what the main types are, and give one example of each. Write it in a register appropriate for a peer (a fellow Year 7 student).",
        parentTip: "Teaching a concept is one of the best ways to consolidate understanding. Listen to your child's explanation — where is it strong and where is it unclear?",
        prompts: [
          { text: "Your Register Guide for a Year 7 peer:", type: "box" },
        ],
      },
      // 73
      {
        type: "fill-in-blank",
        title: "Register in Legal Language",
        instruction: "Legal language has a highly distinctive register. Complete each sentence about legal register features.",
        sentences: [
          { text: "Legal documents often use ___ phrases like 'hereinafter referred to as' and 'notwithstanding the foregoing'.", blanks: ["archaic / formal / technical"] },
          { text: "Legal register is deliberately precise and often ___ to reduce ambiguity.", blanks: ["repetitive / technical / detailed"] },
          { text: "The use of Latin phrases such as 'habeas corpus' and 'pro bono' is a feature of ___ register.", blanks: ["legal / formal"] },
          { text: "Legal register was historically designed to be read by ___ rather than the general public.", blanks: ["lawyers / specialists / professionals"] },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Evaluate a Writer's Register Choice",
        instruction: "Choose a piece of writing that you have read recently — any genre. Write a critical evaluation (6–8 sentences) of the writer's register choices: Were they appropriate for the audience and purpose? Were they consistent throughout? Were there any moments where the register felt jarring or effective? What would you change and why?",
        parentTip: "This is evaluative, not just descriptive analysis. Encourage your child to have and defend an opinion about the writer's choices.",
        prompts: [
          { text: "Text title and author: ___________________________________________\nYour evaluation:", type: "box" },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: The Best Register Analysts Are Also the Best Writers",
        content: "There is a direct connection between being able to analyse register and being able to control it in your own writing. Every time you read a text and ask 'why did the writer make this register choice?', you are building your own toolkit as a writer. The goal is not to memorise rules — formal uses Latinate vocabulary, informal uses contractions — but to develop the flexibility to make those choices consciously and for purpose. The most accomplished writers can move fluently across the full spectrum of register, choosing exactly the right tone for every reader, purpose and context.",
      },
      // 76
      {
        type: "open-response",
        title: "Extended Writing: A Speech to Two Audiences",
        instruction: "Write a short speech (12–15 sentences) on a topic that matters to you — it could be about your local area, a school issue, an environmental concern, or anything you care about. Then write a brief note (3–4 sentences) to two different imagined audiences — one formal (e.g., a government minister) and one informal (e.g., your peers). Explain how you would adapt the register of your speech for each audience.",
        parentTip: "Encourage a topic your child genuinely cares about — register analysis is most meaningful when the stakes feel real.",
        prompts: [
          { text: "Your speech:", type: "box" },
          { text: "How you would adapt it for a government minister:", type: "lines", lines: 3 },
          { text: "How you would adapt it for your peers:", type: "lines", lines: 3 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Register in Your Favourite Text",
        instruction: "Think about your favourite book, film, podcast or TV series. Write 5–7 sentences analysing how register is used — in the narration, in dialogue, or in the way the text addresses its audience. What register choices make this text distinctive or effective?",
        parentTip: "Connecting register analysis to texts your child loves is the best way to make it feel meaningful rather than academic. Share your own observations about the texts you enjoy.",
        prompts: [
          { text: "Text title and type: ___________________________________________\nYour register analysis:", type: "box" },
        ],
      },
      // 78
      {
        type: "multiple-choice",
        title: "Synthesising Register Knowledge",
        instruction: "Choose the most analytically sophisticated answer for each question.",
        questions: [
          {
            prompt: "A skilled writer's ability to move between registers is best described as:",
            options: [
              "A. Inconsistency that should be corrected",
              "B. Linguistic flexibility that serves different audiences and purposes",
              "C. A sign that the writer does not know the rules",
              "D. Code-switching that only happens in speech",
            ],
            answer: "B. Linguistic flexibility that serves different audiences and purposes",
          },
          {
            prompt: "The most important insight about register for a developing writer is:",
            options: [
              "A. Always use formal register to appear more educated",
              "B. Informal register is always easier and more natural",
              "C. Register should be chosen consciously to serve the reader, purpose and context",
              "D. Register rules are fixed and should never be broken",
            ],
            answer: "C. Register should be chosen consciously to serve the reader, purpose and context",
          },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Reflective Writing: Your Register Journey",
        instruction: "Write a reflective response (7–9 sentences) on what you have learned about register through these activities. What did you already know? What was new? How has this knowledge changed the way you read or think about writing? Give one specific example of a register insight you will carry forward.",
        parentTip: "Metacognitive reflection — thinking about your own learning — is one of the most powerful learning strategies. Take your child's reflections seriously and share your own as a co-learner.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: The Register Experiment",
        content: "For one full day, pay close attention to every piece of language you encounter — spoken and written — and notice its register. Keep a register log: jot down at least six examples from the day (texts you received, signs you read, conversations you had, things you watched or listened to). For each one, note: the register, the audience, and whether the register felt appropriate or surprising. At the end of the day, share your log with your parent or guardian and discuss: which register were you surrounded by most? Did any examples surprise you?",
      },
      // ── EXTENDING 81–100 ─────────────────────────────────────────────────
      // 81
      {
        type: "open-response",
        title: "Register and Systemic Inequality",
        instruction: "Read the following claim and write a response (6–8 sentences) arguing for or against it: 'Requiring formal register in academic and professional settings disadvantages people from communities where informal or non-standard English is the norm.' Use specific reasoning and at least one example.",
        parentTip: "This is a genuinely contested sociolinguistic question. There is no single right answer — the skill is in the quality of reasoning. Share your own view and be open to your child disagreeing.",
        prompts: [
          { text: "Your argument (agree, disagree, or nuanced position):", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Translating Register Across Disciplines",
        instruction: "Scientific information is often written in highly formal, technical register. Take a complex scientific concept you are studying (in any subject) and write three versions of an explanation: one for a specialist (formal/technical), one for a general adult audience (semi-formal), and one for a Year 3 student (informal/accessible). All three versions must be accurate.",
        parentTip: "This is called 'science communication' and is a genuine professional skill. Discuss with your child: what is the risk of simplifying too much? What is the cost of not simplifying enough?",
        prompts: [
          { text: "Scientific concept: ___________________________________________\nSpecialist version (3–4 sentences, formal/technical):", type: "lines", lines: 4 },
          { text: "General adult version (3–4 sentences, semi-formal):", type: "lines", lines: 4 },
          { text: "Year 3 version (3–4 sentences, accessible/informal):", type: "lines", lines: 4 },
        ],
      },
      // 83
      {
        type: "fill-in-blank",
        title: "Register in Australian Political Discourse",
        instruction: "Australian political communication has a distinctive register tradition. Complete each sentence.",
        sentences: [
          { text: "Australian politicians often deliberately use informal language to seem ___ and approachable to voters.", blanks: ["relatable / down-to-earth / ordinary"] },
          { text: "The tradition of 'plain speaking' in Australian political culture means that overly formal language can sometimes be seen as ___.", blanks: ["elitist / out of touch / pompous"] },
          { text: "Parliamentary debate in Australia uses highly formal register with specific rules, including always referring to opponents as the ___ Member.", blanks: ["honourable"] },
          { text: "The gap between how politicians speak in parliament and how they speak in media interviews demonstrates deliberate register ___.", blanks: ["shifting / code-switching / adaptation"] },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Write a Commentary on Register",
        instruction: "Write a commentary (8–10 sentences) on the following question: 'In the age of social media, have the boundaries between formal and informal register become blurred beyond repair?' Argue your position with specific evidence from texts or communication you have observed.",
        parentTip: "This is a genuine and debated question in linguistics and communication studies. What has your family noticed about language change in digital communication?",
        prompts: [
          { text: "Your commentary:", type: "box" },
        ],
      },
      // 85
      {
        type: "true-false",
        title: "Register: Synthesis and Evaluation",
        instruction: "Mark T (true) or F (false) for each sophisticated statement. Be ready to justify each answer.",
        statements: [
          { text: "The register of a text can be used to analyse the values and assumptions of the society that produced it.", answer: true },
          { text: "Formal register is always more effective than informal register for persuasion.", answer: false },
          { text: "A text that uses register appropriately for its audience is likely to be more persuasive than one that does not.", answer: true },
          { text: "Register analysis is a form of critical literacy that enables readers to question how texts position their audiences.", answer: true },
          { text: "Future technologies will likely eliminate the need for register awareness.", answer: false },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Register Analysis: Aboriginal and Torres Strait Islander English",
        instruction: "Aboriginal English is a dialect of Australian English with its own distinctive features, including vocabulary, grammar and register norms that differ from Standard Australian English. Write 5–6 sentences reflecting on: why it is important for teachers and institutions to understand that Aboriginal English has its own register system, and what the implications are for education.",
        parentTip: "This is an important and sensitive topic in Australian education. Approach it with genuine curiosity and respect. Resources from AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies) provide excellent background.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Create a Register Spectrum Model",
        instruction: "Design a visual or written model that shows register as a spectrum from most informal to most formal. For each point on your spectrum, name a text type, give an example phrase, and explain what features signal that position on the spectrum. Include at least six positions.",
        parentTip: "This is a synthesis task — your child needs to draw together everything they know about register to create a coherent model. It makes a great reference card for future writing.",
        prompts: [
          { text: "Your register spectrum model (you may draw this as a diagram or write it as a numbered scale):", type: "box" },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Extended Analytical Essay: Register and Power",
        instruction: "Write a three-paragraph analytical essay responding to this question: 'Register is never just a stylistic choice — it is always a reflection and exercise of social power.' Each paragraph should make a distinct argument supported by specific evidence from real texts you have encountered.",
        parentTip: "This is the most demanding writing task in this worksheet. Discuss the argument together before writing. What are the best three arguments? What evidence would support each? The essay does not need to be long — three focused, well-evidenced paragraphs are more valuable than six vague ones.",
        prompts: [
          { text: "Your three-paragraph essay:", type: "box" },
        ],
      },
      // 89
      {
        type: "multiple-choice",
        title: "Register: Final Mastery Check",
        instruction: "Choose the most accurate and analytically sophisticated answer for each question.",
        questions: [
          {
            prompt: "A student who can read and produce texts in multiple registers with conscious control of purpose is demonstrating:",
            options: [
              "A. Basic literacy",
              "B. Register flexibility — a key component of advanced literacy",
              "C. An inability to choose a consistent register",
              "D. Informal language habits",
            ],
            answer: "B. Register flexibility — a key component of advanced literacy",
          },
          {
            prompt: "When a writer deliberately uses informal register in a text that would conventionally be formal, this is best described as:",
            options: [
              "A. An error that should be corrected",
              "B. A deliberate stylistic choice that may create particular effects such as intimacy, subversion or humour",
              "C. Proof that the writer lacks formal language skills",
              "D. An example of code-switching gone wrong",
            ],
            answer: "B. A deliberate stylistic choice that may create particular effects such as intimacy, subversion or humour",
          },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Register as a Lifelong Skill",
        content: "Register awareness is one of the most practically valuable literacy skills you can develop. It will shape how you write job applications, professional emails, academic essays, social media posts, speeches, letters of complaint, and creative writing for the rest of your life. More than that, it will shape how you read — because every text you encounter is making register choices that signal something about who it was written for, why, and what it assumes about you as a reader. The students who develop strong register awareness early become the most versatile and effective communicators.",
      },
      // 91
      {
        type: "open-response",
        title: "Register in Your Future",
        instruction: "Think about a future role or career that interests you — any field. Write 5–6 sentences about what register demands that career would place on you. What types of documents would you write? For what audiences? What register would each require? How would you develop the skills needed?",
        parentTip: "This connects register to real-world purpose. Help your child research what communication looks like in careers they find interesting — look at actual job advertisements and professional documents together.",
        prompts: [
          { text: "Career or role: ___________________________________________\nYour response:", type: "box" },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Design a Register Task for a Younger Student",
        instruction: "Design a single register activity for a Year 5 student (about 10–11 years old). Write the activity instructions, provide the content (text to analyse or scenario to write), and write a brief explanation for the parent of what the activity teaches and how to facilitate it.",
        parentTip: "Designing a task for someone else requires a deep understanding of the concept. Evaluate your child's task together — is it clear? Is it appropriately challenging? Is the explanation accurate?",
        prompts: [
          { text: "Your Year 5 register activity:", type: "box" },
          { text: "Parent explanation:", type: "lines", lines: 3 },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Register and the Future of AI",
        instruction: "AI writing tools are increasingly used to draft emails, reports and other documents. Write a reflection (5–7 sentences) exploring: What does it mean for register awareness if AI can generate formal or informal text on demand? Does this make register literacy more or less important for humans? Why?",
        parentTip: "This is a genuinely contemporary and important question. Share your own thoughts — as someone who interacts with AI-generated text, what do you notice about its register?",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Annotated Portfolio Entry",
        instruction: "Select the piece of writing you are most proud of from these activities. Write an annotated portfolio entry for it: include the text itself, and add 4–6 annotations pointing to specific register choices you made and explaining why you made them. Conclude with a self-evaluation: what would you improve if you rewrote it?",
        parentTip: "Portfolio-style self-assessment builds metacognitive skills that transfer across all learning. Discuss your child's self-evaluation openly — do you agree with their assessment?",
        prompts: [
          { text: "Selected piece of writing:", type: "box" },
          { text: "Your annotations and self-evaluation:", type: "box" },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Peer Register Analysis",
        instruction: "Exchange a recent piece of writing with a family member or friend. Analyse their writing for register: What register have they used? Is it consistent? Is it appropriate for the audience and purpose? Write 4–5 sentences of feedback focused specifically on register.",
        parentTip: "Peer feedback is a genuine professional and academic skill. Model constructive feedback language: 'I noticed that...', 'One thing that works well is...', 'You might consider...'",
        prompts: [
          { text: "Writer's name and text type: ___________________________________________\nYour register feedback:", type: "box" },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Write a Manifesto in Formal Register",
        instruction: "Write a short manifesto (8–10 sentences) arguing for something you believe in strongly — it could be an environmental cause, a local issue, a principle of fairness, or anything else that matters to you. Write it in formal register, as if it would be published as an open letter. Then write 2–3 sentences reflecting: did the formal register feel right for this topic? Did it add or reduce the power of your argument?",
        parentTip: "A manifesto is one of the most powerful written forms — it commits to a position and argues for it publicly. Take your child's manifesto seriously and discuss its arguments.",
        prompts: [
          { text: "Your manifesto:", type: "box" },
          { text: "Reflection on register choice:", type: "lines", lines: 3 },
        ],
      },
      // 97
      {
        type: "fill-in-blank",
        title: "Register Mastery: Final Vocabulary Check",
        instruction: "Complete each sentence using the most precise and accurate term from this list: register, formal, informal, semi-formal, code-switching, nominalisation, passive voice, hedge language, audience, purpose, context.",
        sentences: [
          { text: "The ___ of a text refers to the people for whom it is written.", blanks: ["audience"] },
          { text: "The ___ of a text refers to what the writer is trying to achieve.", blanks: ["purpose"] },
          { text: "The social situation in which a text is produced and received is called the ___.", blanks: ["context"] },
          { text: "Turning the verb 'to argue' into the noun 'the argument' is called ___.", blanks: ["nominalisation"] },
          { text: "Using 'It has been suggested that' rather than 'I think' is an example of ___ and ___.", blanks: ["hedge language", "passive voice"] },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "The Register Challenge",
        instruction: "Write a single continuous text (12–15 sentences) that moves through at least three different registers deliberately. You might tell a story, write a report, or write a speech. After writing, annotate each register shift: label where it happens, name the register, and explain the purpose of the shift.",
        parentTip: "This is the most challenging and creative task in the worksheet. Read the complete text aloud together — the register shifts should be audible. Discuss: do the shifts feel purposeful or jarring?",
        prompts: [
          { text: "Your multi-register text (annotated):", type: "box" },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "What Register Will You Use?",
        instruction: "You have now completed 98 activities on register. Write a final reflective synthesis (8–10 sentences): What is register? Why does it matter? What are the three most important things you now know about register that you did not know — or did not think consciously about — before? How will this knowledge change the way you write and read?",
        parentTip: "This final synthesis is the most important activity in the worksheet. Read your child's response together and discuss it as a genuine intellectual conclusion to the work.",
        prompts: [
          { text: "Your synthesis reflection:", type: "box" },
        ],
      },
      // 100 — FINAL SPARK
      {
        type: "spark",
        title: "Spark: The Register Collection",
        content: "Over the next month, build a Register Collection — a personal archive of texts that show register at work. Aim to collect at least ten examples across the full spectrum from very formal to very informal. For each one, add a brief annotation explaining the register, the audience, the purpose, and one interesting feature of the language. At the end of the month, look back over your collection and ask: what patterns do you notice? What surprised you? Share your collection with your parent or guardian and have a final conversation about what register reveals about how language and society work together.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "multiple-choice",
        title: "What Is a Clause?",
        instruction: "Choose the best definition of a clause.",
        questions: [
          {
            prompt: "A clause is:",
            options: [
              "A. A single word that describes a noun",
              "B. A group of words containing a subject and a verb",
              "C. A group of words without a verb",
              "D. A sentence that contains exactly one idea",
            ],
            answer: "B. A group of words containing a subject and a verb",
          },
        ],
      },
      // 2
      {
        type: "true-false",
        title: "Clause Basics",
        instruction: "Mark each statement T (true) or F (false).",
        parentTip: "A main clause can stand alone. A subordinate clause depends on the main clause. This is the core distinction to consolidate early.",
        statements: [
          { text: "A main clause can stand alone as a complete sentence.", answer: true },
          { text: "A subordinate clause can always stand alone as a sentence.", answer: false },
          { text: "A complex sentence contains at least one main clause and one subordinate clause.", answer: true },
          { text: "Every sentence must contain at least one clause.", answer: true },
          { text: "An embedded clause is always placed at the beginning of a sentence.", answer: false },
        ],
      },
      // 3
      {
        type: "circle-correct",
        title: "Identify the Main Clause",
        instruction: "Circle the main clause in each sentence.",
        parentTip: "The main clause is the one that could stand alone as a sentence. Ask: if I removed everything else, would this still make sense?",
        questions: [
          {
            prompt: "Although it was raining heavily, [the match continued].",
            options: ["Although it was raining heavily", "the match continued"],
          },
          {
            prompt: "The dog that had been barking all night [finally fell silent].",
            options: ["that had been barking all night", "The dog finally fell silent"],
          },
          {
            prompt: "Because she had missed the bus, [she arrived late].",
            options: ["Because she had missed the bus", "she arrived late"],
          },
          {
            prompt: "[The scientist announced the results] after years of careful research.",
            options: ["The scientist announced the results", "after years of careful research"],
          },
        ],
      },
      // 4
      {
        type: "sorting",
        title: "Sort: Main Clause or Subordinate Clause?",
        instruction: "Sort each clause into the correct column. A main clause can stand alone; a subordinate clause cannot.",
        columns: ["Main Clause", "Subordinate Clause"],
        items: [
          { label: "she sang beautifully" },
          { label: "because the storm had knocked out the power" },
          { label: "the old bridge creaked" },
          { label: "although no one believed him" },
          { label: "they waited" },
          { label: "when the clock struck midnight" },
          { label: "since she had never been to the city before" },
          { label: "the letter arrived" },
        ],
      },
      // 5
      {
        type: "fill-in-blank",
        title: "Subordinating Conjunctions",
        instruction: "Complete each complex sentence by adding an appropriate subordinating conjunction from this list: although, because, when, while, since, unless, until, after.",
        parentTip: "Read the completed sentence aloud to check it makes sense. Different conjunctions create very different logical relationships between ideas.",
        sentences: [
          { text: "___ she had studied hard, she still found the exam difficult.", blanks: ["Although"] },
          { text: "He stayed at the hospital ___ his mother was discharged.", blanks: ["until"] },
          { text: "The team celebrated ___ they had won the championship.", blanks: ["after / because / when"] },
          { text: "___ the weather improves, the outdoor event will be postponed.", blanks: ["Unless"] },
          { text: "She was reading ___ the others were watching television.", blanks: ["while"] },
        ],
      },
      // 6
      {
        type: "multiple-choice",
        title: "Subordinating Conjunctions — Meaning",
        instruction: "Choose the subordinating conjunction that creates the logical relationship described.",
        questions: [
          {
            prompt: "Which conjunction shows a contrast or concession?",
            options: ["A. because", "B. although", "C. when", "D. after"],
            answer: "B. although",
          },
          {
            prompt: "Which conjunction shows a reason or cause?",
            options: ["A. unless", "B. while", "C. because", "D. until"],
            answer: "C. because",
          },
          {
            prompt: "Which conjunction shows a condition?",
            options: ["A. since", "B. although", "C. after", "D. unless"],
            answer: "D. unless",
          },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Identify the Clauses",
        instruction: "For each sentence, identify and label the main clause (MC), and any subordinate clause (SC) or embedded clause (EC).",
        parentTip: "Main clause = can stand alone. Subordinate clause = cannot stand alone, begins with a subordinating conjunction. Embedded clause = inserted inside the sentence, often introduced by who, which, that.",
        prompts: [
          { text: "1. Although she had studied for weeks, she still felt nervous before the exam.\nMC: ___________________________________________\nSC: ___________________________________________", type: "lines", lines: 2 },
          { text: "2. The scientist, who had spent thirty years researching the disease, announced the breakthrough at dawn.\nMC: ___________________________________________\nEC: ___________________________________________", type: "lines", lines: 2 },
          { text: "3. He decided to stay when he realised the storm had made the roads impassable.\nMC: ___________________________________________\nSC: ___________________________________________", type: "lines", lines: 2 },
          { text: "4. The letter, which had been lost in the post for six months, finally arrived on the morning of the wedding.\nMC: ___________________________________________\nEC: ___________________________________________", type: "lines", lines: 2 },
        ],
      },
      // 8
      {
        type: "true-false",
        title: "Relative Pronouns in Embedded Clauses",
        instruction: "Mark each statement T (true) or F (false).",
        statements: [
          { text: "Embedded clauses are often introduced by relative pronouns: who, which, that, whose, where.", answer: true },
          { text: "'Who' is used for people; 'which' is used for things.", answer: true },
          { text: "An embedded clause always changes the core meaning of the main clause.", answer: false },
          { text: "An embedded clause can be removed from a sentence without making the sentence grammatically incorrect.", answer: true },
          { text: "Embedded clauses always appear at the end of a sentence.", answer: false },
        ],
      },
      // 9
      {
        type: "fill-in-blank",
        title: "Add an Embedded Clause",
        instruction: "Insert an appropriate embedded clause into each sentence at the position marked with [   ].",
        parentTip: "The embedded clause should add information about the noun that immediately precedes the gap. Read the completed sentence aloud to check it flows naturally.",
        sentences: [
          { text: "The teacher [ ] gave us extra time to finish.", blanks: ["who had noticed we were struggling"] },
          { text: "The old house [ ] was finally demolished.", blanks: ["that had stood empty for thirty years"] },
          { text: "The scientist [ ] was awarded the Nobel Prize.", blanks: ["whose research changed our understanding of genetics"] },
          { text: "The park [ ] is now completely overgrown.", blanks: ["where we used to play as children"] },
        ],
      },
      // 10
      {
        type: "circle-correct",
        title: "Which Contains an Embedded Clause?",
        instruction: "Circle the sentence that contains an embedded clause.",
        questions: [
          {
            prompt: "A or B?",
            options: [
              "A. She arrived late because the traffic was terrible.",
              "B. The report, which had taken months to compile, was submitted on Friday.",
            ],
          },
          {
            prompt: "A or B?",
            options: [
              "A. He left after the film had ended.",
              "B. The boy who had been waiting for three hours finally got his turn.",
            ],
          },
        ],
      },
      // 11
      {
        type: "sorting",
        title: "Sort: Subordinate Clause or Embedded Clause?",
        instruction: "Sort each clause into the correct column.",
        parentTip: "Subordinate clauses often come before or after the main clause. Embedded clauses are inserted inside the main clause, interrupting it.",
        columns: ["Subordinate Clause", "Embedded Clause"],
        items: [
          { label: "although the day had been long and exhausting" },
          { label: "who had never spoken in public before" },
          { label: "because the answer surprised everyone" },
          { label: "which had been repaired three times already" },
          { label: "when the fog finally lifted" },
          { label: "whose family had lived in the valley for generations" },
          { label: "since no one could remember the original plan" },
          { label: "that she had found at the bottom of the box" },
        ],
      },
      // 12
      {
        type: "open-response",
        title: "Combine Sentences Using Clauses",
        instruction: "Combine each pair of simple sentences into one complex sentence using either a subordinating conjunction or an embedded clause.",
        parentTip: "Useful subordinating conjunctions: although, because, when, while, since, unless, until, after, before. Useful relative pronouns: who, which, that, whose, where.",
        prompts: [
          { text: "The old man sat on the bench. He had nowhere else to go.\nCombined: ________________________________________________", type: "lines", lines: 2 },
          { text: "The painting was stolen. It was worth over two million dollars.\nCombined: ________________________________________________", type: "lines", lines: 2 },
          { text: "She did not speak for a long time. She was choosing her words carefully.\nCombined: ________________________________________________", type: "lines", lines: 2 },
          { text: "The café had been closed for years. Everybody in town still called it Maggie's.\nCombined: ________________________________________________", type: "lines", lines: 2 },
        ],
      },
      // 13
      {
        type: "multiple-choice",
        title: "Simple, Compound, or Complex?",
        instruction: "Identify the sentence type for each example.",
        questions: [
          {
            prompt: "'The dog barked.' This is a:",
            options: ["A. Compound sentence", "B. Complex sentence", "C. Simple sentence", "D. Compound-complex sentence"],
            answer: "C. Simple sentence",
          },
          {
            prompt: "'She was tired, but she kept going.' This is a:",
            options: ["A. Simple sentence", "B. Complex sentence", "C. Compound sentence", "D. Fragment"],
            answer: "C. Compound sentence",
          },
          {
            prompt: "'Although she was tired, she kept going.' This is a:",
            options: ["A. Simple sentence", "B. Complex sentence", "C. Compound sentence", "D. Fragment"],
            answer: "B. Complex sentence",
          },
        ],
      },
      // 14
      {
        type: "fill-in-blank",
        title: "Coordinating vs Subordinating Conjunctions",
        instruction: "Complete each sentence with the correct conjunction type. Use a coordinating conjunction (for, and, nor, but, or, yet, so) or a subordinating conjunction as indicated.",
        sentences: [
          { text: "She wanted to leave early, ___ she stayed to help tidy up. [coordinating — shows contrast]", blanks: ["but"] },
          { text: "___ he had not eaten all day, he was not hungry. [subordinating — shows concession]", blanks: ["Although"] },
          { text: "The hall was full, ___ they had to stand at the back. [coordinating — shows result]", blanks: ["so"] },
          { text: "He packed his bag ___ the train was about to leave. [subordinating — shows time]", blanks: ["before / because / as / after"] },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: Three Clause Types to Know",
        content: "There are three clause types at the heart of Year 7 grammar. (1) Main clause: contains a subject and verb; can stand alone as a sentence. Example: 'The lights went out.' (2) Subordinate clause: has a subject and verb but depends on the main clause; introduced by a subordinating conjunction. Example: 'because the power had failed'. (3) Embedded clause (relative clause): inserted inside the main clause to add information about a noun; introduced by who, which, that, whose, or where. Example: 'The building, which had been condemned, finally collapsed.' Knowing these three types by name and function gives you precise tools for talking about your own writing and analysing others'.",
      },
      // 16
      {
        type: "open-response",
        title: "Annotate a Paragraph for Clause Types",
        instruction: "Read the paragraph below. Underline all main clauses, put (brackets) around all subordinate clauses, and put [square brackets] around all embedded clauses. Then count how many of each type you found.",
        parentTip: "Work through this together the first time. Clause identification in running text is harder than in isolated sentences. Read it aloud and pause at commas — these are often clause boundaries.",
        prompts: [
          {
            text: "'The old lighthouse, which had guided sailors safely through the bay for over a century, stood at the very tip of the headland. Although it had been decommissioned decades ago, the local council refused to demolish it. The lighthouse keeper who had tended it in its final years had left behind a detailed logbook, and the entries, which spanned forty years of storms and shipwrecks, had become a minor historical treasure.'\n\nMain clauses found: ___  Subordinate clauses found: ___  Embedded clauses found: ___",
            type: "lines",
            lines: 5,
          },
        ],
      },
      // 17
      {
        type: "true-false",
        title: "Compound-Complex Sentences",
        instruction: "A compound-complex sentence has at least two main clauses AND at least one subordinate or embedded clause. Mark T (true) or F (false) for each statement.",
        statements: [
          { text: "A compound-complex sentence contains both coordinating and subordinating conjunctions.", answer: true },
          { text: "'She laughed and he frowned, although neither spoke.' is a compound-complex sentence.", answer: true },
          { text: "Compound-complex sentences are always the most effective type to use.", answer: false },
          { text: "A short, simple sentence after a long complex one can create emphasis by contrast.", answer: true },
        ],
      },
      // 18
      {
        type: "fill-in-blank",
        title: "Punctuating Complex Sentences",
        instruction: "Add a comma where needed in each complex sentence. Write the complete sentence with correct punctuation.",
        parentTip: "Rule: when a subordinate clause comes before the main clause, a comma separates them. When it comes after, no comma is usually needed.",
        sentences: [
          { text: "Although the exam was difficult she felt she had done her best.[Add comma if needed]", blanks: ["Although the exam was difficult, she felt she had done her best."] },
          { text: "He locked the door before he left the building.[Add comma if needed]", blanks: ["He locked the door before he left the building."] },
          { text: "Because the road was flooded the school bus was cancelled.[Add comma if needed]", blanks: ["Because the road was flooded, the school bus was cancelled."] },
          { text: "She kept reading until the candle burned out.[Add comma if needed]", blanks: ["She kept reading until the candle burned out."] },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Sentence Variation Practice",
        instruction: "Write three sentences about the same topic, using: (1) a simple sentence, (2) a complex sentence with a subordinate clause, (3) a sentence with an embedded clause. The topic: a person waiting for important news.",
        parentTip: "Discuss how each sentence creates a different effect. The simple sentence might create tension; the complex sentence might reveal reasoning; the embedded clause might add revealing detail about the character.",
        prompts: [
          { text: "Simple sentence: ___________________________________________", type: "lines", lines: 1 },
          { text: "Complex sentence (with subordinate clause): ___________________________________________", type: "lines", lines: 2 },
          { text: "Sentence with embedded clause: ___________________________________________", type: "lines", lines: 2 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: The Clause Relay",
        content: "Try this writing game with your parent or guardian. Start with a simple sentence — for example: 'The door opened.' Take turns adding a clause each time. One person adds a subordinate clause; the other adds an embedded clause. Keep going until the sentence becomes wonderfully long and complex. Then read it aloud and decide: where does it become magnificent, and where does it become unwieldy? Try to identify the point of maximum elegance — where complexity serves the writing rather than swamping it. Write your best version down.",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Write with Deliberate Complexity",
        instruction: "Write a paragraph (6–8 sentences) describing a place — real or imagined — using at least two embedded clauses and two subordinate clauses. After writing, annotate your paragraph by labelling each clause type.",
        parentTip: "This is a genuine piece of writing, not just a grammar exercise. Read the paragraph aloud together when done and discuss: does the complexity add to the description, or does it feel forced anywhere?",
        prompts: [
          { text: "Write your paragraph here:", type: "box" },
          { text: "List the embedded clauses you used and label where they appear:", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "fill-in-blank",
        title: "Non-restrictive vs Restrictive Embedded Clauses",
        instruction: "A restrictive clause defines which person or thing is meant (no commas). A non-restrictive clause adds extra information (set off by commas). Add commas to the sentences that contain non-restrictive embedded clauses.",
        parentTip: "Test: remove the embedded clause. If the sentence still clearly identifies which person or thing, the clause is non-restrictive (add commas). If removing the clause creates ambiguity, it is restrictive (no commas).",
        sentences: [
          { text: "The boy who broke the window has apologised. [restrictive or non-restrictive?]", blanks: ["restrictive — no commas needed"] },
          { text: "My brother who lives in Brisbane is visiting next week. [there is only one brother — non-restrictive]", blanks: ["My brother, who lives in Brisbane, is visiting next week."] },
          { text: "The film that won the award was directed by an Australian. [restrictive]", blanks: ["restrictive — no commas needed"] },
          { text: "The old oak tree which had stood in the park for two centuries fell in the storm. [non-restrictive]", blanks: ["The old oak tree, which had stood in the park for two centuries, fell in the storm."] },
        ],
      },
      // 23
      {
        type: "multiple-choice",
        title: "Effect of Clause Position",
        instruction: "The position of a subordinate clause affects the rhythm and emphasis of a sentence. Choose the most accurate answer.",
        questions: [
          {
            prompt: "What effect does placing a subordinate clause at the beginning of a sentence typically create?",
            options: [
              "A. It immediately presents the main action",
              "B. It creates a sense of context or background before the main point lands",
              "C. It always makes the sentence more formal",
              "D. It weakens the sentence's impact",
            ],
            answer: "B. It creates a sense of context or background before the main point lands",
          },
          {
            prompt: "What effect does ending a sentence with the main clause (after a subordinate clause) typically create?",
            options: [
              "A. The main idea is delayed, creating anticipation",
              "B. The main idea is less important than the subordinate clause",
              "C. The sentence always needs a comma",
              "D. The subordinate clause becomes the focus",
            ],
            answer: "A. The main idea is delayed, creating anticipation",
          },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Rewrite with Clause Variation",
        instruction: "Take this paragraph and rewrite it so that no two adjacent sentences use the same clause structure. Vary between: simple, complex with front-loaded subordinate clause, complex with end-loaded subordinate clause, and sentences with embedded clauses.",
        parentTip: "Read the original and the rewrite aloud. Good clause variation is audible — the rhythm changes, and important ideas get emphasis.",
        prompts: [
          {
            text: "Original: 'The town was quiet. Everyone had left. The market was empty. The doors were locked. A cat sat on the steps.'\n\nRewrite with varied clause structures:",
            type: "box",
          },
        ],
      },
      // 25
      {
        type: "sorting",
        title: "Sort by Clause Position",
        instruction: "Sort each sentence by where the subordinate clause appears.",
        columns: ["Subordinate clause at the start", "Subordinate clause in the middle (embedded)", "Subordinate clause at the end"],
        items: [
          { label: "When the rain finally stopped, they emerged from the shelter." },
          { label: "The detective, who had solved hundreds of cases, was baffled." },
          { label: "She kept her promise, although it cost her greatly." },
          { label: "Because the lights had failed, the performance was cancelled." },
          { label: "The letter, which had been written thirty years ago, explained everything." },
          { label: "He stood perfectly still until the danger had passed." },
        ],
      },
      // 26
      {
        type: "true-false",
        title: "Clause Types in Professional Writing",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Legal writing frequently uses complex sentences with multiple embedded clauses.", answer: true },
          { text: "Journalistic writing tends to use shorter sentences with fewer embedded clauses to aid quick reading.", answer: true },
          { text: "Literary fiction always uses the most complex sentence structures possible.", answer: false },
          { text: "Academic writing typically uses complex sentences to express precise relationships between ideas.", answer: true },
          { text: "The most effective sentence is always the longest one.", answer: false },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Clause Surgery — Improving Student Writing",
        instruction: "The paragraph below contains only simple sentences. Improve it by combining some sentences using embedded clauses and subordinate clauses. Aim for varied, flowing prose.",
        parentTip: "Read both versions aloud together. The goal is not to make every sentence complex — it is to vary the structure so the writing has rhythm and flow.",
        prompts: [
          {
            text: "Original: 'The explorer had been walking for weeks. She was exhausted. Her supplies were almost gone. The mountains were still distant. She sat down on a rock. She looked at her map. The map was old. It was difficult to read.'\n\nYour improved version:",
            type: "box",
          },
        ],
      },
      // 28
      {
        type: "fill-in-blank",
        title: "Relative Pronouns — Which One?",
        instruction: "Complete each embedded clause with the correct relative pronoun (who, which, that, whose, where).",
        parentTip: "'Who' = people. 'Which' = things (non-restrictive). 'That' = things (restrictive). 'Whose' = possession. 'Where' = places.",
        sentences: [
          { text: "The student ___ essay won the competition was in Year 7.", blanks: ["whose"] },
          { text: "The museum, ___ had been renovated over three years, reopened in spring.", blanks: ["which"] },
          { text: "The town ___ she had grown up had changed beyond recognition.", blanks: ["where"] },
          { text: "The scientist ___ discovered penicillin was Alexander Fleming.", blanks: ["who"] },
          { text: "The theory ___ he had proposed was eventually proven correct.", blanks: ["that"] },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Analyse Clause Use in a Published Text",
        instruction: "Choose a paragraph from any published text you are reading — a novel, a newspaper article, or a non-fiction book. Copy the paragraph, then annotate it: label the main clauses (MC), subordinate clauses (SC), and embedded clauses (EC). Finally, write 2–3 sentences about what the clause patterns tell you about the writer's style.",
        parentTip: "This is the most authentic form of grammar analysis — examining real writing, not invented examples. Choose a paragraph your child finds interesting or beautifully written.",
        prompts: [
          { text: "Text title and author: ___________________________________________\nCopied paragraph (annotated):", type: "box" },
          { text: "What the clause patterns tell you about this writer's style:", type: "lines", lines: 3 },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Clause Surgery for Your Own Writing",
        content: "Clause surgery is one of the most powerful editing techniques. When you read a draft, look for these three problems: (1) Too many short sentences in a row — these may need combining with subordinating conjunctions or embedded clauses. (2) Too many sentences of the same length and structure — this creates a monotonous rhythm. (3) Important ideas buried in subordinate clauses that should be in main clauses. The rule of emphasis: the most important idea should usually be in the main clause, not a subordinate one. Ask: is the most important idea the one that is grammatically 'main'?",
      },
      // 31
      {
        type: "open-response",
        title: "Clause Surgery on Your Own Work",
        instruction: "Take a paragraph of your own recent writing. Copy it below, then rewrite it by: combining two pairs of short sentences using conjunctions or embedded clauses, and moving at least one subordinate clause to a different position in its sentence.",
        parentTip: "This editing work on real writing is more valuable than any grammar exercise. Discuss: does the rewrite actually sound better? Are there places where the original was better?",
        prompts: [
          { text: "Original paragraph:", type: "box" },
          { text: "Rewritten paragraph:", type: "box" },
          { text: "What specific changes did you make and why?", type: "lines", lines: 3 },
        ],
      },
      // 32
      {
        type: "multiple-choice",
        title: "Dangling and Misplaced Modifiers",
        instruction: "Embedded and subordinate clauses must be placed close to the noun they describe. A misplaced clause creates unintended meaning. Identify the sentence with the correctly placed clause.",
        questions: [
          {
            prompt: "Which sentence avoids the misplaced modifier?",
            options: [
              "A. The teacher marked the essays who had been working all day.",
              "B. The teacher, who had been working all day, marked the essays.",
              "C. Who had been working all day, the essays were marked by the teacher.",
              "D. The essays were marked by the teacher all day working.",
            ],
            answer: "B. The teacher, who had been working all day, marked the essays.",
          },
          {
            prompt: "Which sentence avoids the error?",
            options: [
              "A. I returned the book to the library which I had borrowed.",
              "B. I returned the book, which I had borrowed, to the library.",
              "C. Which I had borrowed, I returned the book to the library.",
              "D. The library had the book which I returned I had borrowed.",
            ],
            answer: "B. I returned the book, which I had borrowed, to the library.",
          },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "Build a Compound-Complex Sentence",
        instruction: "Use the elements provided to build a compound-complex sentence. Combine the ideas using appropriate conjunctions.",
        sentences: [
          { text: "[The storm had been building all day] + [AND] + [everyone could see the dark clouds] + [ALTHOUGH no rain had fallen yet] → Compound-complex sentence: ___________________________________________", blanks: ["The storm had been building all day, and everyone could see the dark clouds, although no rain had fallen yet."] },
          { text: "[She had not slept well] + [BUT] + [she arrived on time] + [BECAUSE the meeting mattered to her] → Compound-complex sentence: ___________________________________________", blanks: ["She had not slept well, but she arrived on time because the meeting mattered to her."] },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Write for Effect: Simple Sentences After Complex Ones",
        instruction: "Write a sequence of three sentences: a long compound-complex sentence, a second complex sentence, and then a short, punchy simple sentence. The topic: someone opening a mysterious letter. Analyse the effect of the short sentence after the two long ones.",
        parentTip: "The contrast between a long complex sentence and a short simple one is one of the most effective tools in a writer's kit. The short sentence hits harder precisely because of what came before it.",
        prompts: [
          { text: "Long compound-complex sentence: ___________________________________________", type: "lines", lines: 3 },
          { text: "Second complex sentence: ___________________________________________", type: "lines", lines: 2 },
          { text: "Short simple sentence: ___________________________________________", type: "lines", lines: 1 },
          { text: "What effect does the short sentence create?", type: "lines", lines: 2 },
        ],
      },
      // 35
      {
        type: "true-false",
        title: "Grammar Terminology Check",
        instruction: "Mark T (true) or F (false). These test your precise understanding of the key terms.",
        statements: [
          { text: "A relative clause is another name for an embedded clause.", answer: true },
          { text: "A subordinating conjunction joins two main clauses of equal importance.", answer: false },
          { text: "A coordinating conjunction (for, and, nor, but, or, yet, so) creates a compound sentence.", answer: true },
          { text: "The subject of a clause is always a noun or pronoun.", answer: true },
          { text: "A clause must always contain a direct object.", answer: false },
        ],
      },
      // 36
      {
        type: "sorting",
        title: "Sort: Coordinating or Subordinating Conjunction?",
        instruction: "Sort each conjunction into the correct column.",
        columns: ["Coordinating (joins equal clauses)", "Subordinating (creates dependent clause)"],
        items: [
          { label: "and" },
          { label: "because" },
          { label: "but" },
          { label: "although" },
          { label: "or" },
          { label: "when" },
          { label: "so" },
          { label: "since" },
          { label: "yet" },
          { label: "unless" },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Imitate a Professional Writer's Sentence",
        instruction: "Find a complex sentence from a novel or non-fiction book that you find beautiful or powerful. Copy it, label the clause types, and then write your own sentence that imitates its structure exactly (but uses entirely different content).",
        parentTip: "Sentence imitation is one of the oldest and most effective writing techniques — it builds syntactic flexibility by pushing writers to reproduce complex structures with new content.",
        prompts: [
          { text: "Original sentence (text title, author): ___________________________________________\nCopied sentence:", type: "lines", lines: 3 },
          { text: "Clause labels: ___________________________________________", type: "lines", lines: 2 },
          { text: "Your imitation sentence:", type: "lines", lines: 3 },
        ],
      },
      // 38
      {
        type: "fill-in-blank",
        title: "Clause Types in News Writing",
        instruction: "Journalistic writing uses clauses strategically. Complete the analysis of each news sentence.",
        sentences: [
          { text: "'The Prime Minister, who had been in office for just six months, resigned yesterday.' The embedded clause is: ___________________________________________", blanks: ["who had been in office for just six months"] },
          { text: "'Although the fire was quickly contained, three buildings were damaged.' The subordinate clause is: ___________________________________________ The main clause is: ___________________________________________", blanks: ["Although the fire was quickly contained", "three buildings were damaged"] },
          { text: "'Scientists announced a breakthrough that could change cancer treatment.' The embedded clause is: ___________________________________________", blanks: ["that could change cancer treatment"] },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Complex Sentences in Argument Writing",
        instruction: "Argument and persuasive writing uses subordinate clauses to show reasoning. Write a short argument (5–6 sentences) on whether schools should have longer breaks, using at least three complex sentences that contain reasoning clauses (because, since, given that, although, even though).",
        parentTip: "Argue either side — or deliberately argue a position your child finds difficult to support. The practice of arguing a case you do not fully believe is a valuable rhetorical exercise.",
        prompts: [
          { text: "Your argument:", type: "box" },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: The Long Sentence Challenge",
        content: "Some of the greatest sentences in literature are extraordinarily long — sentences by Marcel Proust, Henry James, and many others run to hundreds of words. Your challenge: write the longest grammatically correct and meaningful sentence you can, using multiple embedded clauses, subordinate clauses, and coordinating conjunctions. It must still be about something — not just a list of random clauses. When you are done, count the words, read it aloud, and decide: is it a masterpiece or a monster? Can you identify exactly the point where it becomes too long to follow?",
      },
      // ── CONSOLIDATING 41–80 ───────────────────────────────────────────────
      // 41
      {
        type: "multiple-choice",
        title: "Clause Analysis in Literature",
        instruction: "Choose the most analytically accurate statement about each sentence from published fiction.",
        questions: [
          {
            prompt: "'It was a bright cold day in April, and the clocks were striking thirteen.' (Orwell) — What is this sentence's structure?",
            options: ["A. Simple", "B. Compound (two main clauses joined by 'and')", "C. Complex (main clause + subordinate clause)", "D. Compound-complex"],
            answer: "B. Compound (two main clauses joined by 'and')",
          },
          {
            prompt: "Why might an author use two main clauses of equal grammatical weight in an opening sentence?",
            options: [
              "A. To suggest that both pieces of information are equally startling and connected",
              "B. To show that the author does not know how to write complex sentences",
              "C. To make the opening sentence shorter",
              "D. Because compound sentences are always more effective than complex ones",
            ],
            answer: "A. To suggest that both pieces of information are equally startling and connected",
          },
        ],
      },
      // 42
      {
        type: "open-response",
        title: "Write a Character Introduction Using Embedded Clauses",
        instruction: "Write a character introduction (5–7 sentences) for a character of your own creation. Use at least three embedded clauses to weave in details about the character's history, appearance, or personality without interrupting the narrative flow.",
        parentTip: "The embedded clause is one of the most efficient tools for character description — it allows writers to reveal backstory without interrupting the forward movement of the narrative. Discuss examples from texts your child has read.",
        prompts: [
          { text: "Your character introduction:", type: "box" },
          { text: "List the three embedded clauses you used:", type: "lines", lines: 3 },
        ],
      },
      // 43
      {
        type: "fill-in-blank",
        title: "Advanced Embedded Clauses — Reduced Relatives",
        instruction: "A reduced relative clause removes 'who is/that is' for concision. Complete each sentence by reducing the embedded clause.",
        parentTip: "Reduced relative clauses are common in sophisticated writing. Point them out in texts your child reads — they are often harder to see precisely because they read so naturally.",
        sentences: [
          { text: "The man who is standing by the door is the principal. → The man ___ by the door is the principal.", blanks: ["standing"] },
          { text: "The report that was submitted yesterday contained an error. → The report ___ yesterday contained an error.", blanks: ["submitted"] },
          { text: "The students who were waiting outside finally came in. → The students ___ outside finally came in.", blanks: ["waiting"] },
          { text: "The bridge that was built in 1920 is still in use. → The bridge ___ in 1920 is still in use.", blanks: ["built"] },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Analyse Your Own Clause Patterns",
        instruction: "Choose a paragraph of your own writing from the last month. Copy it below. Then analyse your own clause patterns: What types of clauses do you use most? Are there any types you rarely or never use? Are there any places where simpler or more complex sentences would be more effective?",
        parentTip: "Self-analysis of writing patterns is a habit that great writers and editors develop. Be honest — most writers have default patterns they need to challenge.",
        prompts: [
          { text: "Your paragraph:", type: "box" },
          { text: "Your clause pattern analysis:", type: "box" },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: When to Use Embedded Clauses — and When Not To",
        content: "Embedded clauses are powerful but they come with a risk: overloading a sentence with too many can make it hard to follow. Here are three guidelines. First, use an embedded clause when the information genuinely enriches the noun it describes — not just to add words. Second, never stack more than two embedded clauses in a single sentence unless you are writing for literary effect and know exactly what you are doing. Third, when in doubt, read it aloud. If you lose track of the main point while reading, the sentence needs surgery. The best embedded clauses are invisible — readers absorb the information without noticing the grammatical machinery.",
      },
      // 46
      {
        type: "open-response",
        title: "Describe a Setting with Varied Clause Structures",
        instruction: "Write a description (8–10 sentences) of a real place you know well — your home, your neighbourhood, a park, or a building. Use a deliberate mix of simple sentences (for impact), complex sentences with subordinate clauses (for reasoning and contrast), and sentences with embedded clauses (for detail). When done, annotate your paragraph labelling each sentence type.",
        parentTip: "Sentence variety is the mark of a developing writer's craft. Read the description aloud together and discuss: which sentences hit the hardest? Which carry the most detail?",
        prompts: [
          { text: "Your annotated description:", type: "box" },
        ],
      },
      // 47
      {
        type: "sorting",
        title: "Sort: Simple Sentence Effective or Not?",
        instruction: "In each pair, decide which version uses the short simple sentence more effectively. Sort into columns.",
        columns: ["Short simple sentence is effective here", "Short simple sentence is not effective here"],
        items: [
          { label: "A: She walked slowly, knowing what she would find at the end of the corridor, aware that everything was about to change, unable to stop herself. She opened the door. B: She walked slowly. She knew things. The door was there." },
          { label: "A: He was surprised. B: After two hours of silence, after three unanswered calls, after a sleepless night spent waiting — the phone rang. He answered. She was alive." },
        ],
      },
      // 48
      {
        type: "true-false",
        title: "Clause Mastery Check",
        instruction: "Mark T (true) or F (false) for each advanced statement.",
        statements: [
          { text: "A skilled writer chooses clause type based on what effect they want to create, not just to demonstrate grammatical knowledge.", answer: true },
          { text: "The most sophisticated writing always uses the most complex sentence structures.", answer: false },
          { text: "Varying clause structures can control pacing in narrative writing.", answer: true },
          { text: "An embedded clause always makes a sentence better.", answer: false },
          { text: "Short simple sentences can be used deliberately for emphasis, even in very sophisticated writing.", answer: true },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Comparative Clause Analysis",
        instruction: "Choose two short passages from different text types (e.g., a novel extract and a newspaper article). For each, identify the dominant clause patterns. Write a comparative analysis (5–7 sentences) explaining how each text uses clause structure differently and why, given the genre and purpose.",
        parentTip: "The comparison reveals how form follows function in language. Different genres make different clause choices for good reasons. Discuss what those reasons might be before your child writes.",
        prompts: [
          { text: "Text 1 (type and source): ___________________________________________\nText 2 (type and source): ___________________________________________\nComparative analysis:", type: "box" },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Complex Sentence Portfolio Paragraph",
        instruction: "Write a single analytical paragraph (TEEL) responding to this question: How does a writer you have read recently use complex sentences and clause structures to create a specific effect in their writing? Use a specific quoted example.",
        parentTip: "This is an analytical paragraph about grammar as a craft tool — exactly the kind of thinking that distinguishes strong NAPLAN and senior English students. Discuss the example together before writing.",
        prompts: [
          { text: "Your TEEL analytical paragraph (label T/E/E/L):", type: "box" },
        ],
      },
      // 51
      {
        type: "fill-in-blank",
        title: "Clause Patterns in Academic Writing",
        instruction: "Academic writing uses specific clause patterns. Complete each example.",
        sentences: [
          { text: "___ the evidence is limited, the findings are nonetheless significant.", blanks: ["Although / While"] },
          { text: "The study found that participants ___ had received the intervention showed greater improvement.", blanks: ["who"] },
          { text: "___ further research is conducted, it is not possible to draw definitive conclusions.", blanks: ["Until"] },
          { text: "The data ___ were collected over three years suggest a clear pattern.", blanks: ["that / which"] },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Write a Suspenseful Scene Using Clause Variation",
        instruction: "Write a short scene (8–10 sentences) in which a character discovers something unexpected. Deliberately vary your clause structure to control pace: use long complex sentences to slow time, short simple sentences for sudden revelations, and embedded clauses to add detail without stopping the action.",
        parentTip: "This is where grammar becomes craft. Read the scene aloud together and discuss: where does the pace speed up? Where does it slow? Is the pacing effective?",
        prompts: [
          { text: "Your scene:", type: "box" },
          { text: "Annotate two sentences where your clause choice controls the pace:", type: "lines", lines: 4 },
        ],
      },
      // 53
      {
        type: "multiple-choice",
        title: "Clause Structure and Genre",
        instruction: "Choose the most accurate observation about clause structure in each genre.",
        questions: [
          {
            prompt: "Which genre typically uses the most complex embedded clause structures?",
            options: ["A. Text message", "B. Picture book", "C. Legal document", "D. Sports commentary"],
            answer: "C. Legal document",
          },
          {
            prompt: "Why do sports commentators typically use short, simple sentences and clauses?",
            options: [
              "A. Because they do not know grammar",
              "B. Because complex sentences take too long to say when events are fast-moving",
              "C. Because sport is not important enough for complex sentences",
              "D. Because viewers cannot understand complex sentences",
            ],
            answer: "B. Because complex sentences take too long to say when events are fast-moving",
          },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Edit a Paragraph for Clause Variety",
        instruction: "The paragraph below uses only complex sentences. Edit it to include at least two simple sentences and at least one embedded clause, making the writing more varied and effective.",
        parentTip: "Less experienced writers often think more complex = better. The skill is knowing when to be simple. Discuss: which moment in this paragraph deserves the emphasis of a simple sentence?",
        prompts: [
          {
            text: "Original: 'Because she had not slept the night before, she arrived at school exhausted. Although she tried to concentrate, her thoughts kept drifting because she was worried about the test. When the bell rang, she felt relieved because the morning was finally over. Because her friend had saved her a seat, she sat down gratefully while the others crowded around.'\n\nEdited version:",
            type: "box",
          },
        ],
      },
      // 55
      {
        type: "fill-in-blank",
        title: "Clause Structure in Persuasive Texts",
        instruction: "Persuasive writing uses specific clause patterns to express reasoning. Complete each sentence about how clause structure functions persuasively.",
        sentences: [
          { text: "A subordinate clause beginning with 'because' or 'since' is used to provide ___ for an argument.", blanks: ["evidence / reasoning / justification"] },
          { text: "A concessive clause beginning with 'although' or 'even though' acknowledges a ___ before asserting the main argument.", blanks: ["counterargument / opposing view"] },
          { text: "An embedded clause can be used to add ___ evidence without slowing the argument.", blanks: ["supporting / additional / specific"] },
          { text: "A short simple sentence at the end of a complex argument can function as a powerful ___.", blanks: ["conclusion / punchline / emphasis"] },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Write a Persuasive Paragraph with Deliberate Clause Control",
        instruction: "Write a persuasive paragraph (7–9 sentences) arguing for more arts funding in schools. Deliberately use: at least one concessive clause (acknowledging a counterargument), at least two subordinate clauses providing reasoning (because, since, given that), and at least one embedded clause adding supporting evidence.",
        parentTip: "Discuss the argument together first. What is the strongest case for arts funding? What is the strongest objection? The concessive clause should acknowledge the objection before the argument reasserts itself.",
        prompts: [
          { text: "Your persuasive paragraph:", type: "box" },
          { text: "Label the concessive clause, one reasoning clause, and one embedded clause:", type: "lines", lines: 3 },
        ],
      },
      // 57
      {
        type: "true-false",
        title: "Clause Types in Poetry",
        instruction: "Mark T (true) or F (false) for each statement about clauses in poetry.",
        statements: [
          { text: "Poets often break grammatical rules about clauses deliberately for effect.", answer: true },
          { text: "Enjambment — running a clause over a line break — is a common poetic technique.", answer: true },
          { text: "Poems always use complete grammatical clauses.", answer: false },
          { text: "The placement of clause boundaries relative to line breaks creates different rhythmic effects.", answer: true },
          { text: "Fragment sentences are always errors in poetry.", answer: false },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Clause Patterns in a Poem",
        instruction: "Choose any poem you have read and analyse how the poet uses clauses. Write 4–6 sentences addressing: Does the poem use complete grammatical clauses or fragments? Does enjambment create interesting clause-line tensions? Does the poet use subordinate or embedded clauses for specific effects?",
        parentTip: "Poetry often stretches or breaks the clause patterns that prose follows. This analysis helps students see that grammatical rules are choices, not laws.",
        prompts: [
          { text: "Poem title and poet: ___________________________________________\nYour clause analysis:", type: "box" },
        ],
      },
      // 59
      {
        type: "fill-in-blank",
        title: "Clause Grammar Metalanguage Consolidation",
        instruction: "Complete each sentence with the correct grammatical term.",
        sentences: [
          { text: "A clause that can stand alone as a sentence is called a ___ clause.", blanks: ["main"] },
          { text: "A clause that cannot stand alone because it begins with a subordinating conjunction is a ___ clause.", blanks: ["subordinate"] },
          { text: "A clause inserted within the main clause to add information about a noun is an ___ clause.", blanks: ["embedded / relative"] },
          { text: "Words like 'who', 'which', 'that', 'whose', and 'where' that introduce embedded clauses are called ___ pronouns.", blanks: ["relative"] },
          { text: "A sentence with two or more main clauses joined by a coordinating conjunction is called a ___ sentence.", blanks: ["compound"] },
        ],
      },
      // 60 — SPARK
      {
        type: "spark",
        title: "Spark: Rewrite a Great Sentence Three Ways",
        content: "Find one sentence from a novel or non-fiction book that you think is brilliantly constructed. Copy it down. Now rewrite it three ways: (1) Break it into only simple sentences — remove all subordinate and embedded clauses. (2) Take the core idea and make it as complex as possible — add as many clauses as you can while keeping it grammatically correct. (3) Write your own 'ideal' version — the most effective sentence you can construct conveying the same idea. Compare all four versions (original + three rewrites) aloud. Which is most effective, and why?",
      },
      // ── EXTENDING 61–100 ─────────────────────────────────────────────────
      // 61
      {
        type: "open-response",
        title: "Extended Clause Analysis Essay",
        instruction: "Write a three-paragraph analytical essay responding to: 'Skilled writers choose their clause structures as deliberately as they choose their words — each type of clause creates a different relationship between ideas and a different effect on the reader.' Use three specific text examples across your three paragraphs.",
        parentTip: "This is a synthesis essay — it requires drawing together everything covered in this worksheet. Discuss the argument together first: what are the strongest three points to make?",
        prompts: [
          { text: "Your three-paragraph essay:", type: "box" },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Clause Patterns Across Two Genres",
        instruction: "Write the same scene (a character arriving at a place they have never been before) in two different genres: a literary short story and a newspaper report. After writing, write 3–4 sentences comparing the clause structures you used in each version and explaining why they differ.",
        parentTip: "This dual-genre task makes clause choices visible by contrast. The same scene demands very different clause strategies in different genres.",
        prompts: [
          { text: "Literary short story version:", type: "box" },
          { text: "Newspaper report version:", type: "box" },
          { text: "Comparative analysis of clause structures used:", type: "lines", lines: 4 },
        ],
      },
      // 63
      {
        type: "multiple-choice",
        title: "Clause Knowledge: Advanced Check",
        instruction: "Choose the most analytically accurate answer for each question.",
        questions: [
          {
            prompt: "When a writer consistently uses very short simple sentences, this most likely signals:",
            options: [
              "A. Grammatical ignorance",
              "B. A deliberate stylistic choice — possibly tension, urgency, or a character's limited perspective",
              "C. Informal register",
              "D. That the text is intended for young children",
            ],
            answer: "B. A deliberate stylistic choice — possibly tension, urgency, or a character's limited perspective",
          },
          {
            prompt: "An embedded clause that reveals character information in a single sentence is described as efficient because:",
            options: [
              "A. It makes the sentence shorter",
              "B. It adds characterisation without requiring a separate sentence or interrupting narrative forward movement",
              "C. It always uses fewer words than a separate sentence",
              "D. It is grammatically simpler than a separate sentence",
            ],
            answer: "B. It adds characterisation without requiring a separate sentence or interrupting narrative forward movement",
          },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Write a Sustained Narrative Paragraph",
        instruction: "Write a narrative paragraph (10–12 sentences) about any topic of your choosing. Your goal: demonstrate full conscious control of clause variety. Include at least one of each: a short simple sentence for emphasis, a compound sentence, a complex sentence with a front-loaded subordinate clause, a complex sentence with an end-loaded subordinate clause, and a sentence with an embedded clause. Annotate each sentence type when done.",
        parentTip: "This is a demanding synthesis task. Do not rush — plan the clause variety before writing. Which moment deserves the simple sentence? Which needs the most complex structure?",
        prompts: [
          { text: "Your annotated narrative paragraph:", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Design a Grammar Lesson",
        instruction: "Design a five-minute lesson to teach a younger student (Year 4) the difference between a main clause and a subordinate clause. Write the lesson plan including: what you would say, what example sentences you would use, and how you would check understanding.",
        parentTip: "Designing a lesson requires deep understanding. Evaluate your child's lesson together — is it clear enough for a 9-year-old? Are the examples well chosen?",
        prompts: [
          { text: "Your lesson plan:", type: "box" },
        ],
      },
      // 66
      {
        type: "fill-in-blank",
        title: "Clause Patterns in Australian Literature",
        instruction: "Australian writers often use specific clause patterns to capture voice and place. Complete each analysis.",
        sentences: [
          { text: "Henry Lawson's short stories often use short, simple sentences to capture the ___ and directness of bush characters.", blanks: ["bluntness / toughness / stoicism"] },
          { text: "Tim Winton uses long embedded clause structures to capture the ___ of memory and place in his novels.", blanks: ["complexity / layering / richness"] },
          { text: "Journalistic writing from The Australian or The Sydney Morning Herald tends to use ___ sentences with clear main clauses and precise supporting subordinate clauses.", blanks: ["well-structured / tight / focused"] },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Clause Analysis of a Speech",
        instruction: "Find the text of any speech — political, ceremonial, or TED talk. Choose one paragraph and do a detailed clause analysis: identify every clause, label its type, and write 4–6 sentences explaining how the speaker's clause choices serve their purpose.",
        parentTip: "Speeches are ideal for clause analysis because the structures must work aloud. Download a speech transcript and work through it together — it is genuinely interesting to see how much thought goes into structure.",
        prompts: [
          { text: "Speech and speaker: ___________________________________________\nChosen paragraph (annotated):", type: "box" },
          { text: "Your analysis:", type: "box" },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Clause Variation and Reader Experience",
        instruction: "Write two versions of the same paragraph — one using only complex sentences with many embedded clauses, and one using deliberately simple, short sentences throughout. Then write 3–4 sentences analysing how each version affects the reader differently.",
        parentTip: "This contrast experiment makes the effect of clause choice visceral and audible. Read both aloud and let the difference speak for itself before discussing the analysis.",
        prompts: [
          { text: "Version 1 — complex sentences throughout:", type: "box" },
          { text: "Version 2 — short simple sentences throughout:", type: "box" },
          { text: "Your analysis of the different reader experiences:", type: "lines", lines: 4 },
        ],
      },
      // 69
      {
        type: "true-false",
        title: "Final Clause Knowledge Check",
        instruction: "Mark T (true) or F (false) for each statement. Each one should be justified if challenged.",
        statements: [
          { text: "Clause structure analysis is only useful for studying grammar, not for understanding literature.", answer: false },
          { text: "A skilled editor uses clause surgery regularly — breaking, combining, and repositioning clauses to improve clarity and impact.", answer: true },
          { text: "The difference between a good sentence and a great sentence often lies in clause structure choices.", answer: true },
          { text: "Students who understand clause structure write more varied and sophisticated prose.", answer: true },
          { text: "Knowing the names of clause types is more important than understanding their effects.", answer: false },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Reflect: Grammar as Craft",
        instruction: "Write a reflection (6–8 sentences) on this idea: 'Grammar is not a set of rules to follow — it is a set of tools to use.' What does understanding clause structure give you as a writer that you did not have before? Give at least two specific examples.",
        parentTip: "This reflection is about transferable insight — connecting grammatical knowledge to the experience of writing. Share your own thoughts on language and craft.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 71–80 continue
      // 71
      {
        type: "open-response",
        title: "Edit a Paragraph for Maximum Impact",
        instruction: "Edit the paragraph below so that the most important idea is always in the main clause, and subordinate/embedded clauses carry supporting or contextual information. Rewrite and annotate your version.",
        parentTip: "The principle: the main clause carries the main point. If the most important idea ends up in a subordinate clause, the sentence buries its own lead.",
        prompts: [
          {
            text: "Original: 'Although she was the first woman to win the prize, which had been awarded for sixty years, the decision was celebrated. The fact that she had published over twenty books, which were widely read, was noted. Because her work had changed the field, the committee was unanimous.'\n\nEdited version:",
            type: "box",
          },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Write a Scene Using Only Embedded Clauses for Character",
        instruction: "Write a scene (5–7 sentences) in which every new character or object introduced is described with an embedded clause. The scene should still read naturally — the embedded clauses should not feel forced.",
        parentTip: "This is a deliberate constraint exercise. Working within constraints forces syntactic creativity. Discuss how the embedded clauses change the pace and texture of the scene.",
        prompts: [
          { text: "Your scene:", type: "box" },
        ],
      },
      // 73
      {
        type: "multiple-choice",
        title: "Clause Structure and Emphasis",
        instruction: "In each pair, which sentence places greater emphasis on the italicised information?",
        questions: [
          {
            prompt: "Which sentence emphasises the character's determination more strongly?",
            options: [
              "A. Although she was exhausted, SHE FINISHED THE RACE.",
              "B. She finished the race, although she was exhausted.",
            ],
            answer: "A. Although she was exhausted, SHE FINISHED THE RACE.",
          },
          {
            prompt: "Which sentence makes the theft more dramatic?",
            options: [
              "A. THE PAINTING WAS STOLEN, which was worth four million dollars.",
              "B. The painting, which was worth four million dollars, was stolen.",
            ],
            answer: "B. The painting, which was worth four million dollars, was stolen.",
          },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Peer Writing Analysis",
        instruction: "Exchange a recent piece of writing with a family member or friend. Analyse their clause structures — what types do they use most? Where could they vary the structure for greater effect? Write 4–5 sentences of constructive feedback focused specifically on clause variety.",
        parentTip: "Peer feedback on writing is a genuine academic and professional skill. Model the language of constructive feedback: 'I noticed that... ', 'One area to consider... ', 'A place where this works really well is... '",
        prompts: [
          { text: "Writer's name: ___________________________________________\nYour clause-focused feedback:", type: "box" },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Three Habits of a Clause-Conscious Writer",
        content: "Three habits that will make you a more clause-conscious writer: (1) Read your work aloud before submitting it. Your ear will catch awkward clause constructions that your eye misses. (2) Check that every important idea is in a main clause, not buried in a subordinate one. (3) Look for runs of three or more sentences in a row with the same structure — this is almost always a sign that variation is needed. These are not rules — they are diagnostic checks. Apply them to every significant piece of writing, and your prose will improve measurably.",
      },
      // 76
      {
        type: "open-response",
        title: "Creative Writing: A Letter Using All Clause Types",
        instruction: "Write a letter (12–15 sentences) from a character in an unusual situation of your choosing. Use all of these clause structures at least once: simple sentence, compound sentence, complex sentence with front-loaded subordinate clause, complex sentence with end-loaded subordinate clause, sentence with non-restrictive embedded clause, sentence with restrictive embedded clause. Annotate each one.",
        parentTip: "The letter format gives the writing a natural voice. Discuss the character and situation before writing — the more specific and interesting the situation, the more motivated the writing.",
        prompts: [
          { text: "Your annotated letter:", type: "box" },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Advanced Clause Analysis: A Professional Text",
        instruction: "Find a text from a professional domain you find interesting — a scientific article summary, a legal notice, a business report, or a government document. Copy one paragraph and do a full clause analysis: identify every clause, label its type, and write 5–7 sentences explaining how the clause choices serve the text's purpose and audience.",
        parentTip: "Professional domains make very specific clause choices — legal texts use highly embedded clause structures for precision; scientific texts use specific clause patterns for hedging and qualification. Discuss what you both notice.",
        prompts: [
          { text: "Text type and source: ___________________________________________\nParagraph and clause analysis:", type: "box" },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Write Your Own Grammar Guide Entry",
        instruction: "Write a grammar guide entry for 'embedded clauses' that would be useful for a Year 7 student who has never encountered the concept. It should include: a clear definition, an example sentence, an explanation of the effect embedded clauses create, and a tip for using them in writing. Write it in a semi-formal register appropriate for a guide.",
        parentTip: "Creating explanatory writing is one of the most powerful consolidation activities. Read your child's guide entry and check: is the definition accurate? Is the example clear? Would a Year 7 student understand this?",
        prompts: [
          { text: "Your grammar guide entry:", type: "box" },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Synthesis: What Clause Control Means for a Writer",
        instruction: "Write a reflective synthesis (8–10 sentences) responding to: 'Describe what you have learned about clause structures and explain specifically how this knowledge has changed or will change the way you write.' Use at least two concrete examples from your own writing in this worksheet.",
        parentTip: "This synthesis reflection is the most important writing in the worksheet. Take time with it — a thoughtful, specific reflection is far more valuable than a general one.",
        prompts: [
          { text: "Your synthesis:", type: "box" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: The Clause Collection",
        content: "For the next two weeks, keep a Clause Collection — a notebook page where you record sentences from your reading that use clauses in interesting, effective, or beautiful ways. Try to collect at least one example of each type: a sentence where the embedded clause is perfectly placed, a sentence where the subordinate clause creates perfect contrast, and a sentence where a simple sentence creates maximum impact after a long complex one. At the end of two weeks, write two or three sentences explaining what your collection reveals about how skilled writers use clause structure.",
      },
      // 81–100 extending
      // 81
      {
        type: "open-response",
        title: "Clause Control in Extended Writing",
        instruction: "Write an extended piece of narrative or descriptive writing (15–18 sentences) on any topic, demonstrating full clause control. You must use all five clause patterns from this worksheet. When done, annotate five sentences explaining your clause choice and its effect.",
        parentTip: "Extended writing with full clause consciousness is the ultimate goal of this worksheet. Read the complete piece aloud before annotating — the clause choices should serve the writing, not fight with it.",
        prompts: [
          { text: "Your extended piece (annotated):", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Clause Patterns Across a Career",
        instruction: "Think about a career that interests you. Research what kinds of writing that career requires (you can look at job advertisements and professional websites). Write 5–6 sentences about: what clause patterns would be most useful in that career, and how you would develop the skills needed.",
        parentTip: "Connecting grammar knowledge to future careers makes it feel purposeful. Look at real professional writing together — it is often surprisingly interesting.",
        prompts: [
          { text: "Career: ___________________________________________\nYour response:", type: "box" },
        ],
      },
      // 83
      {
        type: "multiple-choice",
        title: "Clause Mastery: Final Questions",
        instruction: "Choose the most analytically sophisticated answer for each question.",
        questions: [
          {
            prompt: "The most accurate description of what grammar knowledge gives a writer is:",
            options: [
              "A. A set of rules to follow to avoid errors",
              "B. A vocabulary for analysing and a toolkit for crafting language",
              "C. A way of impressing teachers with technical terms",
              "D. A list of sentence types to memorise",
            ],
            answer: "B. A vocabulary for analysing and a toolkit for crafting language",
          },
          {
            prompt: "The best evidence that a student truly understands clause structure is:",
            options: [
              "A. They can correctly label clause types in isolated sentences",
              "B. They can use varied clause structures with conscious purpose in their own extended writing",
              "C. They can define the terms accurately from memory",
              "D. They can identify errors in other students' writing",
            ],
            answer: "B. They can use varied clause structures with conscious purpose in their own extended writing",
          },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Write a Review Using Clause Analysis",
        instruction: "Write a book, film, or game review (8–10 sentences) in which you analyse at least one aspect of the language use — including clause structure — as part of your evaluation. The review should work as a genuine review (engaging, informative, evaluative) while also demonstrating analytical thinking about language.",
        parentTip: "Language analysis in a review is genuinely sophisticated writing. Real critics do this — they attend to the how of a text, not just the what.",
        prompts: [
          { text: "Your review:", type: "box" },
        ],
      },
      // 85
      {
        type: "true-false",
        title: "Clause Knowledge: Final Synthesis",
        instruction: "Mark T (true) or F (false) for each statement. These test the deepest level of your understanding.",
        statements: [
          { text: "Clause structure is an aspect of style that separates competent writers from sophisticated ones.", answer: true },
          { text: "Grammar rules about clauses are universal across all languages.", answer: false },
          { text: "A writer who understands embedded clauses can add character depth without slowing narrative pace.", answer: true },
          { text: "Understanding clause types helps readers analyse the logic and structure of arguments.", answer: true },
          { text: "The goal of studying clause structure is to write longer sentences.", answer: false },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "The Hardest Sentence You Have Written",
        instruction: "Look back through all your writing in this worksheet. Find the most complex, ambitious, or interesting sentence you wrote. Copy it here. Analyse it fully — identify every clause, explain why you placed each one where you did, and evaluate whether it achieves the effect you intended. Then revise it if needed.",
        parentTip: "Revisiting and evaluating your own best work is what professional writers and editors do. Celebrate the ambition in the attempt, whether or not the result is perfect.",
        prompts: [
          { text: "Your most ambitious sentence:", type: "lines", lines: 3 },
          { text: "Full clause analysis and evaluation:", type: "box" },
          { text: "Revised version (if needed):", type: "lines", lines: 3 },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Write a Scene from Two Perspectives Using Different Clause Patterns",
        instruction: "Write the same brief scene (someone delivering unexpected news) from two different points of view using different clause patterns. Character A is calm and reflective — use complex sentences with embedded clauses. Character B is panicked — use short, fragmented sentences. Annotate the differences.",
        parentTip: "Clause structure as characterisation is a sophisticated craft insight. Discuss: have you ever noticed this technique in a novel? Where? What was the effect?",
        prompts: [
          { text: "Character A's perspective (calm, complex sentences):", type: "box" },
          { text: "Character B's perspective (panicked, short sentences):", type: "box" },
          { text: "Annotation of the differences:", type: "lines", lines: 3 },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Grammar Research: Another Language",
        instruction: "Choose any language other than English that you are interested in. Research how that language handles subordinate and embedded clauses — are they structured the same way as in English, or differently? Write 4–6 sentences summarising what you found and what it suggests about the relationship between grammar and thought.",
        parentTip: "Cross-linguistic comparison is fascinating and valuable. Even a basic comparison reveals how different grammars carve up meaning differently. Use any resource — a speaker of that language, a grammar website, or a language learning app.",
        prompts: [
          { text: "Language researched: ___________________________________________\nYour findings:", type: "box" },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Clause Structure in Your Favourite Author",
        instruction: "Choose an author whose work you admire. Find three sentences from their writing that you think are particularly well-constructed. Copy them, analyse the clause structure of each, and write 4–6 sentences explaining what these sentences reveal about this author's signature style.",
        parentTip: "This is exactly what professional literary critics and editors do. Treat it as a genuine act of close reading — not a task to complete, but something to enjoy.",
        prompts: [
          { text: "Author: ___________________________________________\nThree sentences with clause analysis:", type: "box" },
          { text: "What these sentences reveal about the author's style:", type: "lines", lines: 4 },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Clause Knowledge Never Stops Growing",
        content: "The clause knowledge you have built in this worksheet is the foundation of a lifetime of language learning. As you read more — and more widely — you will encounter increasingly complex and creative uses of clauses: the multi-embedded sentence that somehow remains perfectly clear, the short declarative sentence that lands with the force of a closing argument, the subordinate clause that reveals an entire psychology in a subordinate position. The best grammar education does not end with a test. It continues with every book, article, speech, and conversation, if you bring curiosity to the language rather than just comprehension of the content.",
      },
      // 91
      {
        type: "open-response",
        title: "Clause Patterns in Non-Fiction",
        instruction: "Read any passage from a quality non-fiction book — history, science, biography, or essay. Analyse the clause patterns in one paragraph. Write 5–7 sentences explaining how the clause structure serves the author's purpose in this text.",
        parentTip: "Non-fiction is often overlooked in English analysis. The clause patterns in a well-written history book or science essay are just as deliberate and interesting as in a novel.",
        prompts: [
          { text: "Text title and author: ___________________________________________\nChosen paragraph:", type: "box" },
          { text: "Your clause analysis:", type: "box" },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Clause Control Self-Assessment",
        instruction: "Complete this self-assessment honestly. For each clause type, rate your confidence from 1 (not confident) to 5 (very confident), then write one sentence explaining your rating and what you still want to improve.",
        parentTip: "Honest self-assessment is a metacognitive skill that develops with practice. Discuss your child's ratings — do you agree with their self-evaluations based on the work you have seen?",
        prompts: [
          { text: "Main clauses — confidence: ___ / 5\nExplanation:", type: "lines", lines: 2 },
          { text: "Subordinate clauses — confidence: ___ / 5\nExplanation:", type: "lines", lines: 2 },
          { text: "Embedded (relative) clauses — confidence: ___ / 5\nExplanation:", type: "lines", lines: 2 },
          { text: "Using clause variation for effect in my own writing — confidence: ___ / 5\nExplanation:", type: "lines", lines: 2 },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "The Grammar of Power in a Text",
        instruction: "Find any text in which one character or group has power over another. Write 5–7 sentences analysing how clause structure reflects or creates the power dynamic. Does the powerful character use longer, more complex sentences? Are weaker characters' speech or thoughts rendered in shorter, simpler structures? What does the grammar reveal?",
        parentTip: "This is one of the most sophisticated applications of clause analysis — using grammar to read power in texts. It connects English to critical literacy and social analysis.",
        prompts: [
          { text: "Text and context: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Final Extended Writing Task",
        instruction: "Write a complete short piece of writing (15–20 sentences) in any genre — fiction, personal essay, persuasive writing, or letter. Your only constraint: demonstrate full and deliberate control of clause variety for purpose. When done, write a short author's note (4–5 sentences) explaining two or three specific clause choices you made and why.",
        parentTip: "This is the capstone task of the entire worksheet. Give it the time it deserves. Read the final piece aloud together before writing the author's note — the oral performance will often reveal things the page does not.",
        prompts: [
          { text: "Your extended piece:", type: "box" },
          { text: "Author's note on clause choices:", type: "box" },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Clause Patterns Over Time",
        instruction: "Compare a sentence from a text written more than 100 years ago with a contemporary sentence on a similar subject. Write 4–6 sentences analysing how clause patterns have changed over time — have sentences become shorter or longer? Has embedded clause use changed? What does this suggest about how English is evolving?",
        parentTip: "Historical language comparison is fascinating. Try comparing a Victorian letter or speech with a contemporary email or speech on a similar topic.",
        prompts: [
          { text: "Historical sentence (source): ___________________________________________", type: "lines", lines: 2 },
          { text: "Contemporary sentence (source): ___________________________________________", type: "lines", lines: 2 },
          { text: "Your comparative analysis:", type: "box" },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Clause Knowledge Applied to Editing",
        instruction: "Imagine you are an editor working with a Year 7 student whose writing consistently uses only simple sentences. Write an editing letter (8–10 sentences) to this student explaining: what clause variety is, why it matters, and giving them three specific strategies to improve their clause control. Write it in a warm, encouraging semi-formal register.",
        parentTip: "Writing for an audience who needs instruction requires very clear understanding. Read the editing letter together — is it accurate, clear, and encouraging?",
        prompts: [
          { text: "Your editing letter:", type: "box" },
        ],
      },
      // 97
      {
        type: "fill-in-blank",
        title: "Final Vocabulary Mastery Check",
        instruction: "Complete each sentence with the most precise grammatical term.",
        sentences: [
          { text: "A sentence that contains a main clause and one or more subordinate or embedded clauses is called a ___ sentence.", blanks: ["complex"] },
          { text: "The word that introduces a subordinate clause (because, although, when, unless) is a ___ conjunction.", blanks: ["subordinating"] },
          { text: "The word that introduces an embedded clause (who, which, that, whose, where) is a ___ pronoun.", blanks: ["relative"] },
          { text: "A non-___ embedded clause adds extra information but is not essential to identify the noun — it is set off by commas.", blanks: ["restrictive"] },
          { text: "A sentence with two main clauses joined by a coordinating conjunction and at least one subordinate clause is called a ___ sentence.", blanks: ["compound-complex"] },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Create a Clause Reference Card",
        instruction: "Create a reference card for clause structures that you could use in future writing. It should include: definitions of all five clause types, one example of each, a tip for using each effectively, and a warning about the most common error with each. Make it visually clear and useful.",
        parentTip: "A well-made reference card is a genuine study tool. Keep it with your child's writing materials and refer to it when editing future work.",
        prompts: [
          { text: "Your clause reference card:", type: "box" },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Reflective Synthesis: Grammar as Understanding",
        instruction: "Write a final reflection (8–10 sentences) responding to: 'Studying clause structure has given me new ways of reading and writing.' Be specific about what has changed in how you approach sentences, and what you will continue to notice and practise.",
        parentTip: "This synthesis reflection closes the learning loop. Read it together and discuss: what does the journey through this worksheet reveal about how language learning works?",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 100 — FINAL SPARK
      {
        type: "spark",
        title: "Spark: Write Your Finest Sentence",
        content: "Every writer has a favourite sentence they have written — the one that came out exactly right. Your challenge: write the finest single sentence you can. It must be complex, beautifully constructed, and about something that genuinely matters to you. Spend as long as you need — revise it, read it aloud, adjust. When it is done, share it with your parent or guardian and explain: what makes this sentence work? What clause choices did you make, and why? Keep it somewhere — it is the beginning of your writer's portfolio.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "multiple-choice",
        title: "What Is Analysis?",
        instruction: "Choose the best explanation of what it means to analyse a text.",
        questions: [
          {
            prompt: "Analysing a text means:",
            options: [
              "A. Retelling what happens in your own words",
              "B. Explaining how and why language choices create particular effects on the reader",
              "C. Listing all the techniques used in the text",
              "D. Writing a summary of the text's main events",
            ],
            answer: "B. Explaining how and why language choices create particular effects on the reader",
          },
        ],
      },
      // 2
      {
        type: "true-false",
        title: "Description vs Analysis",
        instruction: "Mark D (description) or A (analysis) for each statement.",
        parentTip: "Analysis always answers 'why' or 'how' or 'what effect does this have'. If the statement only answers 'what', it is probably description.",
        statements: [
          { text: "'The author uses short sentences.' — This is analysis.", answer: false },
          { text: "'The short sentences create a tense, urgent pace.' — This is analysis.", answer: true },
          { text: "'The character is angry.' — This is analysis.", answer: false },
          { text: "'The metaphor of a storm for the character's anger suggests overwhelming, uncontrollable emotion.' — This is analysis.", answer: true },
          { text: "'There is alliteration in this line.' — This is analysis.", answer: false },
        ],
      },
      // 3
      {
        type: "sorting",
        title: "Sort: Description or Analysis?",
        instruction: "Sort each statement into the correct column.",
        columns: ["Description (says what is there)", "Analysis (says how/why it works)"],
        items: [
          { label: "The writer uses the colour red throughout the story." },
          { label: "The recurring use of red creates a sense of danger that keeps the reader in a state of unease." },
          { label: "The character speaks in short sentences." },
          { label: "The protagonist's fragmented speech reveals the psychological fracture at the heart of his grief." },
          { label: "The poem has three stanzas." },
          { label: "The three-stanza structure mirrors the three stages of the speaker's grief." },
          { label: "There is a simile in line four." },
          { label: "The simile in line four creates a jarring contrast between beauty and violence." },
        ],
      },
      // 4
      {
        type: "multiple-choice",
        title: "The TEEL Structure",
        instruction: "Choose the correct definition for each part of TEEL.",
        questions: [
          {
            prompt: "What does the T in TEEL stand for?",
            options: ["A. Theme — the main idea of the text", "B. Topic sentence — your paragraph's argument in one sentence", "C. Technique — the literary device identified", "D. Title — the name of the text"],
            answer: "B. Topic sentence — your paragraph's argument in one sentence",
          },
          {
            prompt: "What does the E-E in TEEL stand for?",
            options: ["A. Examples and Explanation", "B. Evidence (a quote) and Explanation (how it proves the topic sentence)", "C. Effect and Evaluate", "D. Extract and Examine"],
            answer: "B. Evidence (a quote) and Explanation (how it proves the topic sentence)",
          },
          {
            prompt: "What does the L in TEEL stand for?",
            options: ["A. Language — identify the technique used", "B. Last sentence — always a summary", "C. Link — connect the paragraph back to the essay question or broader argument", "D. Lesson — what the reader should learn"],
            answer: "C. Link — connect the paragraph back to the essay question or broader argument",
          },
        ],
      },
      // 5
      {
        type: "circle-correct",
        title: "Which Is the Topic Sentence?",
        instruction: "Circle the sentence that would make the best topic sentence for an analytical paragraph.",
        questions: [
          {
            prompt: "About a poem on war:",
            options: [
              "A. The poem is about war.",
              "B. The poet uses imagery of darkness and decay to create a sense of hopeless desolation that reflects the psychological cost of war.",
            ],
          },
          {
            prompt: "About a novel's character:",
            options: [
              "A. The main character is brave and kind.",
              "B. The author presents the protagonist as a moral touchstone whose unwavering courage challenges the cowardice of those around her.",
            ],
          },
          {
            prompt: "About a persuasive text:",
            options: [
              "A. The author uses rhetorical questions in this speech.",
              "B. Through the repeated use of rhetorical questions, the author implicates the audience in the problem, forcing them to acknowledge their own complicity.",
            ],
          },
        ],
      },
      // 6
      {
        type: "fill-in-blank",
        title: "TEEL Parts in Order",
        instruction: "Label each sentence of this analytical paragraph with its TEEL part (T, E, E, or L).",
        sentences: [
          { text: "___ — 'The author creates a sense of menace by building detail slowly rather than revealing danger immediately.'", blanks: ["T"] },
          { text: "___ — 'When the narrator describes the door as \"not quite closed\", the deliberate vagueness creates uncertainty and dread.'", blanks: ["E"] },
          { text: "___ — 'The understated language forces the reader to fill in the gaps with their own imagination, making the threat more personal and more frightening than any direct description could achieve.'", blanks: ["E"] },
          { text: "___ — 'In this way, the author controls the reader's experience of fear rather than simply naming it, demonstrating the power of restraint in building suspense.'", blanks: ["L"] },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Rewrite Description as Analysis",
        instruction: "For each statement, decide whether it is description (D) or analysis (A). Rewrite any description statements as analysis.",
        parentTip: "Analysis always answers 'why' or 'how' or 'what effect does this have'. Description only answers 'what'. Push for the specific — 'this creates tension' is still too vague; 'this creates tension by making the reader feel the character's paralysis as their own' is analysis.",
        prompts: [
          { text: "1. 'The writer uses a lot of short sentences at the end of the chapter.'\nD or A? _____\nIf D, rewrite as analysis:", type: "lines", lines: 3 },
          { text: "2. 'The repeated use of short sentences during the climax creates a breathless, urgent pace that mirrors the character's panic and forces the reader to race through the lines.'\nD or A? _____", type: "lines", lines: 1 },
          { text: "3. 'The author uses the metaphor of a storm to describe the character's anger.'\nD or A? _____\nIf D, rewrite as analysis:", type: "lines", lines: 3 },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "What Makes a Good Topic Sentence?",
        instruction: "A good topic sentence makes an argument — it is not just a statement of fact or a description. Choose the best answer.",
        questions: [
          {
            prompt: "Which is the strongest topic sentence for an analytical paragraph?",
            options: [
              "A. In this story, the author uses first-person narration.",
              "B. The author uses first-person narration.",
              "C. The author's use of first-person narration creates an uncomfortable intimacy, forcing the reader to experience the character's self-deception from the inside.",
              "D. The first-person narration in this story makes it interesting to read.",
            ],
            answer: "C. The author's use of first-person narration creates an uncomfortable intimacy, forcing the reader to experience the character's self-deception from the inside.",
          },
        ],
      },
      // 9
      {
        type: "true-false",
        title: "Evidence in Analytical Writing",
        instruction: "Mark T (true) or F (false) for each statement about using evidence in analytical paragraphs.",
        statements: [
          { text: "The best evidence is always the longest quotation available.", answer: false },
          { text: "Evidence should be embedded smoothly into a sentence, not dropped in isolation.", answer: true },
          { text: "Every analytical paragraph must include at least one specific reference to the text.", answer: true },
          { text: "You can make analytical claims without any evidence.", answer: false },
          { text: "A short, precise quotation is often more effective than a long one.", answer: true },
        ],
      },
      // 10
      {
        type: "circle-correct",
        title: "Embedded or Dropped Quotation?",
        instruction: "Circle the version that embeds the quotation more smoothly.",
        parentTip: "The goal is to make the quotation feel like part of your sentence, not an interruption of it.",
        questions: [
          {
            prompt: "Which version embeds the quotation better?",
            options: [
              "A. The author writes: 'shattered'. This creates destruction.",
              "B. The author's choice of 'shattered' suggests violent, irreversible destruction rather than mere breakage.",
            ],
          },
          {
            prompt: "Which version embeds the quotation better?",
            options: [
              "A. The poem contains the line 'dark as despair'. This is imagery.",
              "B. The simile 'dark as despair' maps an emotional state onto physical sensation, making the speaker's grief feel tangible and inescapable.",
            ],
          },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Integrating a Quotation",
        instruction: "Rewrite each clunky quotation integration so it flows naturally into an analytical sentence.",
        parentTip: "Show your child that a well-integrated quotation is part of a sentence — subject, verb, and meaning flow through the quotation without stopping.",
        prompts: [
          { text: "Clunky: The author uses the word shattered. This creates a sense of destruction.\nImproved:", type: "lines", lines: 2 },
          { text: "Clunky: There is a metaphor in the text. The author writes that her smile was a locked door, meaning she was hiding something.\nImproved:", type: "lines", lines: 2 },
          { text: "Clunky: The poem has the line 'cold as a grave'. This is a simile.\nImproved:", type: "lines", lines: 2 },
        ],
      },
      // 12
      {
        type: "fill-in-blank",
        title: "Quotation Integration Phrases",
        instruction: "Complete each sentence stem for integrating a quotation.",
        parentTip: "These phrases are the connective tissue of analytical writing. Having them ready to hand helps students move from description to analysis quickly.",
        sentences: [
          { text: "The author's use of the phrase '___' ___ the reader a sense of ___.", blanks: ["[quoted phrase]", "gives / creates / offers", "[effect]"] },
          { text: "Through the ___ of '___', the writer suggests that ___.", blanks: ["[technique]", "[quoted phrase]", "[interpretation]"] },
          { text: "The ___ '___' is particularly effective because ___.", blanks: ["[technique]", "[quoted phrase]", "[reason]"] },
          { text: "When the author writes that '___', this creates ___.", blanks: ["[quoted phrase]", "[effect]"] },
        ],
      },
      // 13
      {
        type: "open-response",
        title: "Write a Topic Sentence",
        instruction: "For each question below, write a strong topic sentence for an analytical paragraph. Your topic sentence should make an argument — a claim about how and why something works — not just name a technique.",
        prompts: [
          { text: "Question: How does the author create sympathy for the main character?\nTopic sentence:", type: "lines", lines: 2 },
          { text: "Question: How does the setting contribute to the mood of the story?\nTopic sentence:", type: "lines", lines: 2 },
          { text: "Question: How does the author use contrast in this extract?\nTopic sentence:", type: "lines", lines: 2 },
        ],
      },
      // 14
      {
        type: "sorting",
        title: "Sort: Strong or Weak Explanation?",
        instruction: "Sort each explanation into the correct column.",
        columns: ["Strong Explanation (specific, arguable)", "Weak Explanation (vague or descriptive)"],
        items: [
          { label: "This creates a mood." },
          { label: "The fractured syntax mirrors the character's psychological disintegration, making the reader experience his confusion directly." },
          { label: "The author wants the reader to feel sad." },
          { label: "The personification of the storm as a 'hungry beast' transforms a natural event into an agent of malevolent intent, amplifying the characters' helplessness." },
          { label: "This technique is effective." },
          { label: "The repetition of 'never' creates a drumbeat of refusal that reveals the speaker's desperate attempt to convince herself as much as her audience." },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: The TEEL Test",
        content: "Here is a quick test to apply to any analytical paragraph you write. T — Does the topic sentence make an argument (not just name a topic or technique)? E — Is the evidence specific and directly relevant to the topic sentence? E — Does the explanation say something that could only be said about this specific quotation from this specific text, or could it apply to anything? If the explanation could apply anywhere, push further. L — Does the link connect back to the essay question in a way that adds something, rather than just repeating the topic sentence? If all four pass the test, the paragraph is analytically strong.",
      },
      // 16
      {
        type: "open-response",
        title: "Write a TEEL Paragraph",
        instruction: "Read the extract and write a full TEEL analytical paragraph in response to the question: How does the author create a sense of danger in this extract? Label each part T / E / E / L.",
        parentTip: "Read the extract together and discuss possible interpretations before writing. The analytical thinking should happen in conversation first — writing captures what has already been thought.",
        prompts: [
          {
            text: "Extract: 'The door at the end of the corridor was not quite closed. A thin bar of yellow light leaked from beneath it. Somewhere beyond — in the room she had promised herself she would never enter — something moved.'\n\nWrite your TEEL paragraph here (label T / E / E / L):",
            type: "box",
          },
        ],
      },
      // 17
      {
        type: "multiple-choice",
        title: "The Explanation — What Makes It Strong?",
        instruction: "A strong explanation is specific to the quotation and the text. Choose the strongest explanation for each quotation.",
        questions: [
          {
            prompt: "Quotation: 'She smiled, and it was the smile of someone who had already decided.' Which explanation is strongest?",
            options: [
              "A. This shows that the character is smiling.",
              "B. This tells us something about her character.",
              "C. The past perfect 'had already decided' reveals a character who has moved beyond the present moment — her smile is not warmth but conclusion, suggesting she is more dangerous than she appears.",
              "D. The smile creates tension because it is unexpected.",
            ],
            answer: "C. The past perfect 'had already decided' reveals a character who has moved beyond the present moment — her smile is not warmth but conclusion, suggesting she is more dangerous than she appears.",
          },
        ],
      },
      // 18
      {
        type: "fill-in-blank",
        title: "Explanation Sentence Starters",
        instruction: "Complete each explanation sentence with specific analytical reasoning.",
        sentences: [
          { text: "The word '___ ' is significant because it implies _____________________, which tells the reader that _____________________.", blanks: ["[chosen word]", "[implication]", "[significance]"] },
          { text: "This language choice is effective because it _____________________, forcing the reader to _____________________.", blanks: ["[specific effect]", "[reader response]"] },
          { text: "The connotations of '___ ' are important here: rather than simply _______________, the word suggests _____________________, which reveals _____________________.", blanks: ["[word]", "[neutral meaning]", "[deeper meaning]", "[significance]"] },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Improve an Explanation",
        instruction: "Each explanation below is too vague or descriptive. Rewrite it to be more specific and analytical.",
        parentTip: "Ask your child: could you say this about any text? If yes, it is too vague. Push for: could only say this about this specific quotation in this specific text.",
        prompts: [
          { text: "Weak: 'The metaphor creates a vivid image that makes the reader feel emotions.'\nStrong rewrite:", type: "lines", lines: 3 },
          { text: "Weak: 'The author uses repetition effectively here.'\nStrong rewrite:", type: "lines", lines: 3 },
          { text: "Weak: 'This shows that the character is going through a difficult time.'\nStrong rewrite:", type: "lines", lines: 3 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: The One-Sentence Analysis Challenge",
        content: "Challenge: write the most analytically powerful single sentence you can about any text you have read. It must: (a) identify a specific language choice, (b) quote it precisely, (c) explain what it does and why it works, all in one flowing sentence. This is genuinely hard. The best analytical sentences in published criticism do exactly this — pack technique, evidence, and insight into a single powerful statement. Try it with three different texts or techniques, then choose your best one. Share it with your parent or guardian and discuss: what makes this sentence so satisfying if it works?",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Full TEEL Paragraph — Practise the Structure",
        instruction: "Write a TEEL analytical paragraph about any text you are currently reading, responding to this question: How does the author develop a character so that the reader understands their motivation? Label each part.",
        parentTip: "Discuss the character together before writing. What does the character want? What is stopping them? Which specific moment in the text makes this clearest?",
        prompts: [
          { text: "Text and character: ___________________________________________\nYour TEEL paragraph (labelled T / E / E / L):", type: "box" },
        ],
      },
      // 22
      {
        type: "fill-in-blank",
        title: "The Link Sentence",
        instruction: "The link sentence connects the paragraph back to the essay question. It should add something — not just restate the topic sentence. Complete each link sentence.",
        parentTip: "A weak link just restates: 'This shows that the author creates danger.' A strong link connects to the bigger picture: 'In creating this persistent sense of threat, the author forces the reader to question whether safety is ever possible for characters in such a world.'",
        sentences: [
          { text: "In this way, the author's use of imagery not only ___________________ but also ___________________.", blanks: ["[immediate effect]", "[broader significance]"] },
          { text: "Ultimately, the technique reveals ___________________, which is central to the text's exploration of ___________________.", blanks: ["[what is revealed]", "[theme or argument]"] },
          { text: "This demonstrates that ___________________ is not accidental — it is the means by which the author ___________________.", blanks: ["[technique/effect]", "[achieves broader purpose]"] },
        ],
      },
      // 23
      {
        type: "multiple-choice",
        title: "Which Is the Best TEEL Paragraph?",
        instruction: "Choose the analytical paragraph that best follows TEEL structure with strong analysis.",
        questions: [
          {
            prompt: "Which paragraph is the strongest analytical response to the question 'How does the author create sympathy for the character?'",
            options: [
              "A. The author writes about the character. She is poor and her family is struggling. She has to work hard. The reader feels sorry for her.",
              "B. The author creates sympathy for the character through the repeated image of her empty hands. The detail that 'her palms were always open — always giving, never receiving' frames her as perpetually generous and perpetually overlooked, creating a powerful pathos. The open hands become a symbol of a life spent in giving without acknowledgment, which makes the reader feel not just pity but a deeper outrage at the injustice of her situation. In this way, the author transforms a simple physical image into a moral argument about how society treats those who give most.",
              "C. The author uses lots of good techniques to create sympathy. There is a simile and some imagery. This makes the reader feel sympathetic.",
              "D. Sympathy is created for the character in this text. The author describes her life in detail. She uses language to show what her life is like.",
            ],
            answer: "B. The author creates sympathy for the character through the repeated image of her empty hands. The detail that 'her palms were always open — always giving, never receiving' frames her as perpetually generous and perpetually overlooked, creating a powerful pathos. The open hands become a symbol of a life spent in giving without acknowledgment, which makes the reader feel not just pity but a deeper outrage at the injustice of her situation. In this way, the author transforms a simple physical image into a moral argument about how society treats those who give most.",
          },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Practise the Explanation — Push Deeper",
        instruction: "Write two versions of the explanation for the same evidence: one that stops at surface observation, and one that pushes deeper into what the language reveals about theme, character, or the author's purpose.",
        parentTip: "The test: could you say version 1 about any piece of writing? If yes, push to version 2. Version 2 should only be sayable about this specific text and this specific choice.",
        prompts: [
          {
            text: "Evidence: 'The silence pressed down on her like a hand.'\n\nVersion 1 (surface explanation — names the technique and basic effect):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Version 2 (deeper explanation — connects to character, theme, or author's purpose in this specific text):",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 25
      {
        type: "sorting",
        title: "Rank the Topic Sentences",
        instruction: "Sort these topic sentences from weakest to strongest by placing them in the correct column.",
        columns: ["Weakest (describes rather than argues)", "Middle (begins to argue but too general)", "Strongest (makes a precise, specific argument)"],
        items: [
          { label: "The author uses language techniques in this story." },
          { label: "The author uses contrast to create tension in the story." },
          { label: "The author's use of light and dark imagery creates a moral binary that positions the protagonist's choices as a conflict between hope and surrender." },
          { label: "There are many examples of imagery in this poem." },
          { label: "The imagery in this poem creates a powerful emotional effect." },
          { label: "The recurring imagery of water transforms the poem's landscape into an emotional mirror, reflecting the speaker's grief back at them through natural indifference." },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Two-Evidence Paragraph",
        instruction: "Write a TEEL paragraph that includes two pieces of evidence (two quotations or specific references). The two pieces of evidence should build on each other — the second should deepen or complicate the point made by the first, not just repeat it.",
        parentTip: "Two pieces of evidence can strengthen a paragraph significantly. The key is that the second should say something additional: 'Furthermore...' or 'This is reinforced by...'. Discuss what each quotation adds separately.",
        prompts: [
          { text: "Question: How does the author create a sense of isolation in the text?\nYour two-evidence TEEL paragraph:", type: "box" },
        ],
      },
      // 27
      {
        type: "true-false",
        title: "Common Analytical Paragraph Mistakes",
        instruction: "Mark T (true) or F (false) for each statement about common mistakes in analytical writing.",
        statements: [
          { text: "Retelling the plot of the story is an effective form of analysis.", answer: false },
          { text: "Using the word 'effective' without explaining what the technique is effective at is too vague.", answer: true },
          { text: "A topic sentence should always name the exact technique the paragraph will analyse.", answer: false },
          { text: "The explanation part of TEEL should be the longest and most developed part of the paragraph.", answer: true },
          { text: "The link sentence can simply be a restatement of the topic sentence in different words.", answer: false },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Rewrite a Weak Paragraph",
        instruction: "Rewrite the paragraph below to improve its analytical quality. Strengthen the topic sentence, improve the quotation integration, develop the explanation, and write a more effective link.",
        parentTip: "Work through each part systematically: T first, then E, then E, then L. Each part should be evaluated and improved before moving to the next.",
        prompts: [
          {
            text: "Weak paragraph: 'The author uses good language in this extract. He uses the words dark and cold. These are descriptive. They make the reader feel scared. The author writes this well and uses good techniques throughout.'\n\nImproved TEEL paragraph:",
            type: "box",
          },
        ],
      },
      // 29
      {
        type: "fill-in-blank",
        title: "Analytical Vocabulary",
        instruction: "Complete each analytical sentence with the most precise verb or phrase.",
        sentences: [
          { text: "The metaphor ___ the character as someone beyond normal human experience.", blanks: ["positions / presents / constructs"] },
          { text: "The repeated use of the word 'never' ___ the speaker's sense of permanence and loss.", blanks: ["reinforces / emphasises / deepens"] },
          { text: "The image ___ a connection between the character's inner state and the natural world.", blanks: ["establishes / creates / forges"] },
          { text: "The ambiguity in the final line ___ the reader to actively construct their own interpretation of the ending.", blanks: ["invites / compels / forces"] },
          { text: "The shift from past to present tense ___ the reader into the immediacy of the speaker's experience.", blanks: ["draws / pulls / immerses"] },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: The Specificity Test",
        content: "Every explanation sentence in an analytical paragraph should pass the specificity test: could you say this about any piece of writing, or only about this specific quotation in this specific text? If you wrote 'This creates tension', that could apply to almost anything. Push it further — a sentence like 'The slippage between uncertainty and certainty creates a tension that is psychological rather than physical' can only be written about this specific passage. That specificity is what distinguishes analysis from description.",
      },
      // 31
      {
        type: "open-response",
        title: "Write an Analytical Paragraph on a Poem",
        instruction: "Choose a poem you have read and write a TEEL analytical paragraph in response to this question: How does the poet use language to explore a significant idea? Label each part.",
        parentTip: "Discuss the poem's central idea before writing. What is the poem really about — not just on the surface? Which line or image most powerfully expresses that idea? That is your evidence.",
        prompts: [
          { text: "Poem title and poet: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 32
      {
        type: "multiple-choice",
        title: "The Difference Between Technique and Effect",
        instruction: "Strong analysis always connects technique to effect. Choose the most accurate answer.",
        questions: [
          {
            prompt: "Which statement correctly connects technique to effect?",
            options: [
              "A. The author uses personification.",
              "B. Personification is used to describe the storm.",
              "C. The personification of the storm as a 'searching predator' transforms a meteorological event into a moral force, implying that the characters are being hunted rather than simply caught in bad weather.",
              "D. Personification creates an interesting effect in this passage.",
            ],
            answer: "C. The personification of the storm as a 'searching predator' transforms a meteorological event into a moral force, implying that the characters are being hunted rather than simply caught in bad weather.",
          },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Practise Analytical Vocabulary",
        instruction: "Replace each vague analytical phrase with a more precise and powerful one. Use the replacement bank: constructs, subverts, juxtaposes, implies, positions, interrogates, undermines, foregrounds.",
        parentTip: "Analytical vocabulary gives students precision. These words do specific jobs — 'implies' is not the same as 'says'; 'subverts' is not the same as 'changes'. Discuss what each word means precisely.",
        prompts: [
          { text: "Vague: 'The author shows that the character is powerful.'\nPrecise (use 'constructs' or 'positions'): ___________________________________________", type: "lines", lines: 2 },
          { text: "Vague: 'The author changes what we expected.'\nPrecise (use 'subverts' or 'undermines'): ___________________________________________", type: "lines", lines: 2 },
          { text: "Vague: 'The author puts two different things next to each other.'\nPrecise (use 'juxtaposes'): ___________________________________________", type: "lines", lines: 2 },
          { text: "Vague: 'The author makes us look closely at this idea.'\nPrecise (use 'foregrounds' or 'interrogates'): ___________________________________________", type: "lines", lines: 2 },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Write on a Non-Literary Text",
        instruction: "Choose a non-literary text — an advertisement, a news article, a speech, or an opinion piece. Write a TEEL analytical paragraph responding to this question: How does the writer position the audience to accept a particular point of view?",
        parentTip: "Non-literary analytical writing is equally important. The same TEEL structure works for any text type — the technique might be different (repetition of statistics instead of a metaphor, say) but the analytical structure is the same.",
        prompts: [
          { text: "Text type and source: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 35
      {
        type: "true-false",
        title: "The Explanation Is Everything",
        instruction: "Mark T (true) or F (false) for each statement about the explanation part of a TEEL paragraph.",
        statements: [
          { text: "A good explanation repeats the quotation in different words.", answer: false },
          { text: "A good explanation connects the technique to its effect on the reader.", answer: true },
          { text: "A good explanation connects the immediate effect to the broader themes or purposes of the text.", answer: true },
          { text: "A good explanation is usually shorter than the evidence.", answer: false },
          { text: "A good explanation addresses not just what the technique does, but why it matters in this text.", answer: true },
        ],
      },
      // 36
      {
        type: "open-response",
        title: "Write Three TEEL Paragraphs on One Text",
        instruction: "Write three separate TEEL analytical paragraphs about any text you are currently reading. Each paragraph should make a different argument about a different aspect of the text. Together, the three paragraphs should build a coherent case about the text's meaning or purpose.",
        parentTip: "This is the most demanding writing task so far. Plan the three arguments together before writing — what are the three most interesting claims you could make about this text? Are they three genuinely different arguments?",
        prompts: [
          { text: "Text: ___________________________________________\nParagraph 1 (labelled T/E/E/L):", type: "box" },
          { text: "Paragraph 2 (labelled T/E/E/L):", type: "box" },
          { text: "Paragraph 3 (labelled T/E/E/L):", type: "box" },
        ],
      },
      // 37
      {
        type: "fill-in-blank",
        title: "Connecting Paragraphs",
        instruction: "When multiple analytical paragraphs are written together, the links connect them into a coherent essay. Complete each linking sentence to move from one paragraph to the next.",
        sentences: [
          { text: "While the author uses imagery to establish the setting's menace, it is through the characterisation of ___ that this threat becomes personal.", blanks: ["[character name]"] },
          { text: "This technique works in conjunction with the ___ examined in the previous paragraph to create a ___ effect.", blanks: ["[technique]", "[cumulative/reinforced]"] },
          { text: "However, the most significant example of ___ is not found in the setting or character, but in ___.", blanks: ["[theme]", "[another aspect]"] },
        ],
      },
      // 38
      {
        type: "open-response",
        title: "Practise with a Challenging Text",
        instruction: "Find the most difficult or complex text you have read recently. Choose one moment, passage, or line that most rewards analytical attention. Write a TEEL paragraph exploring it. Then write 2–3 sentences reflecting on what made this analysis challenging.",
        parentTip: "Difficulty in analysis is a sign that the text is working — it is doing something complex. The best analytical writing comes from genuinely wrestling with a text that resists easy interpretation.",
        prompts: [
          { text: "Text and chosen passage: ___________________________________________\nYour TEEL paragraph:", type: "box" },
          { text: "What made this analysis challenging:", type: "lines", lines: 3 },
        ],
      },
      // 39
      {
        type: "sorting",
        title: "Sort: Which Part of TEEL?",
        instruction: "Sort each sentence into the correct TEEL position.",
        columns: ["T (Topic sentence)", "E (Evidence)", "E (Explanation)", "L (Link)"],
        items: [
          { label: "The author constructs the protagonist as a figure of tragic inevitability whose choices are always already limited by the world she inhabits." },
          { label: "When she finally speaks — 'I always knew it would end this way' — the past tense reveals that she understood her fate long before the reader did." },
          { label: "The use of the past perfect 'always knew' creates a retrospective clarity that reframes every previous decision as a step towards a conclusion she could never escape." },
          { label: "In this way, the author interrogates the very idea of free will, positioning the reader to question whether any of the characters' choices were ever truly free." },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: The Analytical Paragraph Exchange",
        content: "Write a TEEL analytical paragraph about a text, then swap it with your parent or guardian (or a sibling or friend who has read the same text). Each of you must: (a) identify which part of TEEL each sentence belongs to, (b) mark the strongest sentence in the paragraph and explain why it is strong, (c) identify the weakest sentence and suggest a specific improvement. This is genuine peer editing — the kind that happens in universities and publishing houses. Be honest, be specific, and be kind.",
      },
      // ── CONSOLIDATING 41–80 ───────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Analyse an Author's Craft Choice",
        instruction: "Choose any craft choice made by an author — a structural decision, a narrative technique, a stylistic pattern — and write a TEEL paragraph explaining how and why this choice shapes the reader's experience. Your argument should be debatable — someone should be able to disagree with it.",
        parentTip: "A debatable argument is a sign of genuine analysis. If the argument is so obvious that no one could disagree, it is probably a description. The best analytical arguments have nuance and can be challenged.",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
        ],
      },
      // 42
      {
        type: "fill-in-blank",
        title: "Writing About Theme",
        instruction: "Analytical paragraphs about theme need to connect technique to the bigger idea. Complete each sentence connecting a technique to a theme.",
        sentences: [
          { text: "The metaphor of ___ connects to the text's broader theme of ___ by suggesting that ___.", blanks: ["[metaphor]", "[theme]", "[connection]"] },
          { text: "Through the ___ of the protagonist, the author explores what it means to ___ in a world that ___.", blanks: ["[characterisation]", "[thematic idea]", "[contextual condition]"] },
          { text: "The structural choice to ___ reinforces the theme of ___, because ___.", blanks: ["[structural decision]", "[theme]", "[reason]"] },
        ],
      },
      // 43
      {
        type: "multiple-choice",
        title: "TEEL in Different Text Types",
        instruction: "TEEL works across all text types, not just literary fiction. Choose the most accurate answer.",
        questions: [
          {
            prompt: "When writing a TEEL paragraph about a persuasive speech, the evidence would most likely be:",
            options: [
              "A. A summary of what the speech is about",
              "B. A specific quotation of a persuasive technique the speaker uses",
              "C. A description of the speaker's appearance",
              "D. A list of all the techniques in the speech",
            ],
            answer: "B. A specific quotation of a persuasive technique the speaker uses",
          },
          {
            prompt: "When writing a TEEL paragraph about a multimodal text (such as an advertisement), the evidence might be:",
            options: [
              "A. Only written quotations from the text",
              "B. A specific description of a visual feature and its positioning",
              "C. A general description of what the advertisement looks like",
              "D. The price of the product being advertised",
            ],
            answer: "B. A specific description of a visual feature and its positioning",
          },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Write a Contrasting Analytical Paragraph",
        instruction: "Write two TEEL paragraphs that argue opposing interpretations of the same quotation or moment in a text. Both must be genuinely argued from the text — neither is 'wrong'. After writing both, write 2–3 sentences discussing which you find more convincing and why.",
        parentTip: "The ability to construct and evaluate competing interpretations is one of the highest-level analytical skills. Discuss both arguments together — which do you each find more convincing?",
        prompts: [
          { text: "Text and chosen moment: ___________________________________________\nParagraph 1 (Interpretation A):", type: "box" },
          { text: "Paragraph 2 (Interpretation B):", type: "box" },
          { text: "Which do you find more convincing and why:", type: "lines", lines: 3 },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Writing About Effect on the Reader",
        content: "When you write about 'the reader', you are making a claim about how a text is designed to affect people — not necessarily how you personally feel. Phrases like 'forces the reader to', 'creates a sense of', 'positions the reader to', and 'implicates the reader in' are more analytically precise than 'makes the reader feel'. They signal that you understand reading as an active, designed experience, not a passive emotional response. That said, do not be afraid to bring in your own response as evidence — 'as a reader, I found this moment disturbing because...' is legitimate analytical evidence when it is followed by an explanation of why the text creates that effect.",
      },
      // 46
      {
        type: "open-response",
        title: "TEEL on a Visual Text",
        instruction: "Write a TEEL paragraph analysing a visual text — an advertisement, film poster, photograph, or political cartoon. Your topic sentence should make an argument about how a visual feature creates meaning or influences the audience. Your evidence should precisely describe the visual feature. Your explanation should connect it to effect and purpose.",
        parentTip: "Visual analysis uses the same TEEL structure as literary analysis — the only difference is that the evidence is a precise description of a visual feature rather than a quotation.",
        prompts: [
          { text: "Visual text: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Self-Edit a TEEL Paragraph",
        instruction: "Take any TEEL paragraph you have written in this worksheet. Run it through the full TEEL test: T — is it an argument, not a description? E — is the evidence specific and relevant? E — is the explanation specific to this text and this quotation? L — does the link add something new? Rewrite any part that does not pass the test.",
        parentTip: "Self-editing is a skill that develops with practice. Be honest — what is the weakest part of the paragraph? That is the part that needs the most attention.",
        prompts: [
          { text: "Original paragraph:", type: "box" },
          { text: "TEEL test results (which parts passed and which need work):", type: "lines", lines: 4 },
          { text: "Edited paragraph:", type: "box" },
        ],
      },
      // 48
      {
        type: "fill-in-blank",
        title: "Vocabulary for the Link Sentence",
        instruction: "Complete each link sentence with language that elevates it beyond a simple restatement.",
        sentences: [
          { text: "Ultimately, the author's use of ___ is not merely decorative — it is the ___ through which the text's central argument about ___ is constructed.", blanks: ["[technique]", "[means/vehicle]", "[theme]"] },
          { text: "In this way, ___ functions as a microcosm of the text's larger ___, demonstrating that ___.", blanks: ["[technique/moment]", "[preoccupation/argument]", "[insight]"] },
          { text: "The persistence of ___ throughout the text suggests that ___ is not incidental but essential to the author's ___.", blanks: ["[technique/motif]", "[effect]", "[purpose/meaning]"] },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Analytical Paragraph on Structure",
        instruction: "Write a TEEL paragraph analysing a structural choice in a text you have read — how the story begins, where a key revelation comes, how the ending relates to the beginning, how the narrative is sequenced. Structural analysis is as valid and rich as language analysis.",
        parentTip: "Structural analysis is often overlooked because students assume analysis means language analysis. The decision of where to begin or end a text, how to sequence information, what to reveal and when — these are all rich analytical territory.",
        prompts: [
          { text: "Text and structural feature: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Write a Mini-Essay",
        instruction: "Write a three-paragraph mini-essay (three TEEL paragraphs + a brief introduction and conclusion) responding to any question about a text you have read. The essay should have a coherent argument that builds across all three paragraphs.",
        parentTip: "This is the first complete mini-essay. The introduction should establish the argument in one or two sentences; each TEEL paragraph should develop a different aspect; the conclusion should summarise and extend the argument. Discuss the overall argument before writing.",
        prompts: [
          { text: "Text and essay question: ___________________________________________\nIntroduction (1–2 sentences):", type: "lines", lines: 2 },
          { text: "Paragraph 1:", type: "box" },
          { text: "Paragraph 2:", type: "box" },
          { text: "Paragraph 3:", type: "box" },
          { text: "Conclusion (2–3 sentences):", type: "lines", lines: 3 },
        ],
      },
      // 51–80 EXTENDING CONSOLIDATION
      // 51
      {
        type: "open-response",
        title: "Compare Two Analytical Paragraphs",
        instruction: "Find two published analytical paragraphs about the same text or author — from a journal, a review, or a study guide. Write 5–6 sentences comparing them: How does each writer approach the topic sentence? What evidence do they use? Which explanation is stronger and why?",
        parentTip: "Reading professional literary criticism alongside student analysis is highly valuable. Discuss what the professionals do that your child's writing could adopt.",
        prompts: [
          { text: "Source 1: ___________________________________________\nSource 2: ___________________________________________\nComparative analysis:", type: "box" },
        ],
      },
      // 52
      {
        type: "multiple-choice",
        title: "The Essay Question and the Argument",
        instruction: "A good analytical paragraph begins with a topic sentence that makes an argument directly responsive to the essay question. Choose the most accurate answer.",
        questions: [
          {
            prompt: "Which topic sentence is most directly responsive to the question: 'How does the author present the theme of loss?'",
            options: [
              "A. Loss is an important theme in this text.",
              "B. The author writes about characters who experience loss in different ways.",
              "C. The author presents loss not as an event but as an ongoing condition, using the recurring motif of objects left behind to suggest that the characters carry their losses with them into every new situation.",
              "D. There are many examples of loss throughout the story.",
            ],
            answer: "C. The author presents loss not as an event but as an ongoing condition, using the recurring motif of objects left behind to suggest that the characters carry their losses with them into every new situation.",
          },
        ],
      },
      // 53
      {
        type: "open-response",
        title: "Write an Argumentative Topic Sentence for a Challenging Question",
        instruction: "Write a strong topic sentence for each of these challenging analytical questions. Each topic sentence must make a specific, arguable claim.",
        parentTip: "These questions have no obvious or simple answers — that is the point. Discuss each question together before writing the topic sentence. What is the most interesting claim that can be made?",
        prompts: [
          { text: "Question: 'Is the narrator of this story reliable?' Write a topic sentence that takes a specific position:", type: "lines", lines: 2 },
          { text: "Question: 'Does the text challenge or reinforce social norms?' Write a topic sentence:", type: "lines", lines: 2 },
          { text: "Question: 'To what extent is the ending satisfying or deliberately unsatisfying?' Write a topic sentence:", type: "lines", lines: 2 },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Analyse a Character Using TEEL",
        instruction: "Write a TEEL paragraph that analyses a character's moral complexity — a character who cannot be simply labelled 'good' or 'bad'. Your topic sentence should reflect this complexity. Your evidence should show a moment where the character's ambiguity is most visible.",
        parentTip: "Morally complex characters are what distinguishes great literature from simple stories. Discuss who the most interesting character your child has read is — what makes them resist easy labelling?",
        prompts: [
          { text: "Character and text: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Analyse the Ending of a Text",
        instruction: "Write a TEEL paragraph analysing how a text ends and what the ending suggests about the author's purpose. Is the ending resolved or unresolved? Hopeful or bleak? Expected or surprising? What does the author's choice of ending reveal about what they want the reader to take away?",
        parentTip: "Endings are highly significant analytical territory — they are the last thing the reader experiences and often the most deliberately crafted part of a text. Discuss the ending together before writing.",
        prompts: [
          { text: "Text: ___________________________________________\nYour TEEL paragraph on the ending:", type: "box" },
        ],
      },
      // 56
      {
        type: "fill-in-blank",
        title: "Analytical Phrases for Different Text Types",
        instruction: "Complete each analytical sentence for the given text type.",
        sentences: [
          { text: "In this advertisement, the use of ___ positions the audience to feel ___, making the product seem ___.", blanks: ["[technique]", "[emotion]", "[quality]"] },
          { text: "In this news report, the choice to ___ rather than ___ creates an implicit argument that ___.", blanks: ["[include/foreground something]", "[exclude/background something else]", "[ideological position]"] },
          { text: "In this poem, the ___ creates a sense of ___, which reflects the speaker's ___.", blanks: ["[technique]", "[effect]", "[emotional or psychological state]"] },
          { text: "In this speech, the ___ is used to ___ the audience into accepting ___.", blanks: ["[rhetorical device]", "[implicate/position/move]", "[claim or position]"] },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "The Explanation as Argument",
        instruction: "Write three versions of an explanation for the same piece of evidence, each making a slightly different interpretive argument. Then discuss: which interpretation is most defensible and why?",
        parentTip: "Multiple interpretations of the same evidence are the hallmark of sophisticated literary analysis. There is rarely only one right reading. The skill is in choosing the most defensible one and articulating it precisely.",
        prompts: [
          {
            text: "Evidence: 'He locked the door and did not look back.'\n\nInterpretation 1 (about resolve):",
            type: "lines",
            lines: 2,
          },
          { text: "Interpretation 2 (about guilt):", type: "lines", lines: 2 },
          { text: "Interpretation 3 (about fear):", type: "lines", lines: 2 },
          { text: "Which is most defensible in the context of a specific text, and why:", type: "lines", lines: 2 },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Write a Response to a NAPLAN-Style Question",
        instruction: "Respond to this NAPLAN-style question in one well-structured TEEL paragraph: 'In the short story below, how does the author make the setting feel threatening? Use evidence from the text to support your answer.' The text: 'The forest had no name that anyone used. People went in, but not everyone came back out, and those who did return rarely spoke of what they had seen. The trees here were old enough to have their own silences.'",
        parentTip: "NAPLAN analytical writing tasks require exactly the skills practised in this worksheet. Time your child — can they produce a strong TEEL paragraph in 15 minutes? That is the real-world condition.",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
        ],
      },
      // 59
      {
        type: "true-false",
        title: "Advanced Analytical Concepts",
        instruction: "Mark T (true) or F (false) for each advanced statement about analytical writing.",
        statements: [
          { text: "An author's context (when and where they lived, what influenced them) can enrich an analytical paragraph.", answer: true },
          { text: "Every literary technique has only one possible effect and one correct analysis.", answer: false },
          { text: "The best analytical writing acknowledges complexity and avoids oversimplification.", answer: true },
          { text: "Contradicting the most obvious reading of a text can produce more interesting analysis.", answer: true },
          { text: "The TEEL structure is inflexible and must always be followed in exactly the same way.", answer: false },
        ],
      },
      // 60 — SPARK
      {
        type: "spark",
        title: "Spark: Analyse Something You Love",
        content: "Choose your absolute favourite text — a book, film, game, song, or TV series. Write two TEEL analytical paragraphs arguing what makes it brilliant. Not 'it is good because it is exciting' — but a genuine, evidence-based case for its artistic quality. Use specific moments, specific language choices, specific structural decisions as your evidence. This is the real work of criticism: making the case for why something that moves you is actually, technically, craftfully made. Share your paragraphs with your parent or guardian and discuss: do they agree? What would they add?",
      },
      // 61–80
      // 61
      {
        type: "open-response",
        title: "Analytical Writing on Australian Literature",
        instruction: "Write two TEEL analytical paragraphs on any Australian text you have read — fiction, poetry, or non-fiction. The two paragraphs should build a coherent case about what makes this text distinctively Australian in its concerns, language, or perspective.",
        parentTip: "This is a chance to discuss what 'Australian literature' means. What themes, voices, landscapes, or social concerns recur? What makes Australian writing distinctive? Discuss before writing.",
        prompts: [
          { text: "Text: ___________________________________________\nParagraph 1:", type: "box" },
          { text: "Paragraph 2:", type: "box" },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Analytical Paragraph on a Non-Fiction Text",
        instruction: "Write a TEEL analytical paragraph about a non-fiction text — a speech, an editorial, a memoir extract, or a popular science article. Analyse how the writer's choices of evidence, structure, and language serve their argument. The topic sentence should make a specific claim about how the text works rhetorically.",
        parentTip: "Non-fiction analysis is often overlooked but equally important. The TEEL structure works for any text that makes choices — and all texts make choices.",
        prompts: [
          { text: "Text type and source: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Write and Annotate an Essay Plan",
        instruction: "Plan a complete analytical essay (five paragraphs: intro + three TEEL + conclusion) on any text you have studied. Write the essay plan in full — topic sentences for all three body paragraphs, and one piece of evidence + one-sentence explanation for each. Then annotate the plan: explain how the three paragraphs build a coherent argument.",
        parentTip: "A detailed essay plan is worth more than a rushed essay. Discuss the plan together before any writing — is the argument coherent? Are the three paragraphs genuinely different from each other?",
        prompts: [
          { text: "Text and essay question: ___________________________________________\nIntroduction plan:", type: "lines", lines: 2 },
          { text: "Paragraph 1 topic sentence + evidence + explanation:", type: "lines", lines: 4 },
          { text: "Paragraph 2 topic sentence + evidence + explanation:", type: "lines", lines: 4 },
          { text: "Paragraph 3 topic sentence + evidence + explanation:", type: "lines", lines: 4 },
          { text: "Conclusion plan:", type: "lines", lines: 2 },
          { text: "Annotation — how do the three paragraphs build a coherent argument:", type: "lines", lines: 3 },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Extended Analytical Response",
        instruction: "Write a complete analytical essay (intro + three TEEL paragraphs + conclusion, approximately 400–500 words) on a text of your choosing. The essay should have a clear overall argument that each paragraph develops.",
        parentTip: "This is a major writing task. Give it real time. Read the completed essay aloud before finalising — structure, argument, and explanation quality should all be assessed. The goal is not length but analytical depth.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Identify and Correct TEEL Errors",
        instruction: "The essay excerpt below contains common TEEL errors. Identify each error and explain how to fix it, then rewrite the weak paragraph.",
        parentTip: "Error identification is a powerful learning tool — it requires knowing what a strong paragraph looks like in order to identify what a weak one is missing.",
        prompts: [
          {
            text: "Paragraph: 'The author does a lot of good things in this extract. He uses metaphors and similes and personification. The story is interesting. In conclusion, the author uses many techniques effectively.'\n\nErrors identified and how to fix them:",
            type: "box",
          },
          { text: "Rewritten paragraph:", type: "box" },
        ],
      },
      // 66
      {
        type: "fill-in-blank",
        title: "Connecting Ideas Analytically",
        instruction: "Complete each sentence that connects two analytical ideas within a paragraph.",
        sentences: [
          { text: "Furthermore, this is reinforced by ___________________, which ___________________ the reader's sense of ___________________.", blanks: ["[second piece of evidence]", "[strengthens/complicates]", "[effect]"] },
          { text: "This technique works in conjunction with the ___________________ to create a ___________________ effect that ___________________.", blanks: ["[second technique]", "[combined/cumulative]", "[effect on reader]"] },
          { text: "The contrast between ___________________ and ___________________ underscores the text's central tension between ___________________ and ___________________.", blanks: ["[first element]", "[second element]", "[theme 1]", "[theme 2]"] },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Analytical Writing on Ambiguity",
        instruction: "Write a TEEL paragraph exploring an ambiguous moment in a text — a moment that can be read in two or more significantly different ways. Your topic sentence should acknowledge the ambiguity. Your explanation should explore at least two possible readings and argue why the ambiguity itself is meaningful.",
        parentTip: "The ability to hold two competing interpretations in mind simultaneously is a mark of sophisticated reading. Discuss the ambiguous moment together — which reading do you each prefer, and why?",
        prompts: [
          { text: "Text and ambiguous moment: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Analyse a Text with a Social or Political Dimension",
        instruction: "Write two TEEL paragraphs about a text that engages with a social or political issue — racism, inequality, environmental concerns, gender, power. Your analysis should connect the text's language choices to the social or political ideas it explores or challenges.",
        parentTip: "Texts are products of their social and historical contexts. Connecting literary analysis to social analysis is one of the most intellectually rewarding forms of close reading.",
        prompts: [
          { text: "Text and social/political dimension: ___________________________________________\nParagraph 1:", type: "box" },
          { text: "Paragraph 2:", type: "box" },
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Evaluate Your Own Analytical Writing",
        instruction: "Choose the strongest TEEL paragraph you have written in this worksheet. Write a 5–6 sentence evaluation of it: What does it do well? Where is it weakest? How would you improve it if you had more time? What mark do you think it would receive in a school assessment and why?",
        parentTip: "Self-evaluation is a metacognitive skill that develops with practice. Be honest and specific — generalised self-praise or self-criticism is not useful. The goal is precise identification of strengths and areas for improvement.",
        prompts: [
          { text: "Paragraph you are evaluating:", type: "box" },
          { text: "Your evaluation:", type: "box" },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Annotated Analytical Paragraph",
        instruction: "Write a TEEL paragraph and then add detailed annotations explaining every decision you made: why this topic sentence, why this quotation, why these specific words in your explanation, why this link. The annotations should demonstrate your understanding of the craft of analytical writing.",
        parentTip: "Annotations reveal the thinking behind the writing. Read the paragraph and annotations together — do the annotations accurately describe what the paragraph is doing?",
        prompts: [
          { text: "Your annotated TEEL paragraph:", type: "box" },
        ],
      },
      // 71
      {
        type: "open-response",
        title: "Analyse a Text's Opening",
        instruction: "Write a TEEL paragraph analysing the opening of any text you have read. How does the author begin — what do they choose to foreground, and what effect does this opening create? What does the opening set up or promise for the rest of the text?",
        parentTip: "Openings are among the most deliberate parts of any text. Discuss: what does this opening tell you about what the text will be concerned with? What questions does it raise?",
        prompts: [
          { text: "Text: ___________________________________________\nYour TEEL paragraph on the opening:", type: "box" },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Analytical Writing on Dialogue",
        instruction: "Write a TEEL paragraph analysing how dialogue functions in a text. What do characters say? What do they not say? What does the language characters use reveal about their relationships, power dynamics, or inner states?",
        parentTip: "Dialogue analysis is excellent analytical territory — what is unsaid is often as revealing as what is said. Discuss: what does the gap between what characters say and what they mean tell us?",
        prompts: [
          { text: "Text and dialogue moment: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 73
      {
        type: "multiple-choice",
        title: "Analytical Writing: Advanced Concepts",
        instruction: "Choose the most analytically sophisticated answer for each question.",
        questions: [
          {
            prompt: "A truly outstanding analytical paragraph is one that:",
            options: [
              "A. Identifies the most techniques in the text",
              "B. Uses the most advanced vocabulary",
              "C. Makes a specific, defensible argument and supports it with precise evidence and deeply specific explanation",
              "D. Is the longest paragraph in the essay",
            ],
            answer: "C. Makes a specific, defensible argument and supports it with precise evidence and deeply specific explanation",
          },
          {
            prompt: "When an analytical paragraph makes a claim that not everyone would agree with, this is generally:",
            options: [
              "A. A mistake — analytical claims should always be obvious",
              "B. A sign of genuine analysis — the best analytical arguments are debatable",
              "C. Inappropriate for Year 7",
              "D. A problem that should be corrected",
            ],
            answer: "B. A sign of genuine analysis — the best analytical arguments are debatable",
          },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Write About a Text You Disagree With",
        instruction: "Write two TEEL paragraphs about a text you found unsatisfying, unconvincing, or flawed. Your analysis should identify specifically what is weak or problematic and argue why — using evidence from the text. This is negative criticism, and it requires just as much analytical precision as positive criticism.",
        parentTip: "Critical evaluation — arguing against a text as well as for it — is an important form of analysis. The goal is not to disparage but to identify specific, evidence-based weaknesses.",
        prompts: [
          { text: "Text: ___________________________________________\nParagraph 1 (negative criticism):", type: "box" },
          { text: "Paragraph 2 (negative criticism):", type: "box" },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: What Makes a TEEL Paragraph Truly Outstanding",
        content: "The difference between a competent TEEL paragraph and a truly outstanding one usually comes down to three things. First, the argument in the topic sentence is specific and debatable — not a general observation. Second, the explanation connects the local effect of the language choice to the larger meaning or purpose of the text — it does not stop at 'this creates tension' but explains why that tension matters in the context of what this text is about. Third, the link genuinely extends the argument rather than restating it. Outstanding analytical writing is rare because all three requirements must be met simultaneously. When they are, the result is unmistakably impressive.",
      },
      // 76
      {
        type: "open-response",
        title: "Complete Essay Under Time Pressure",
        instruction: "Write a complete analytical essay (intro + three TEEL paragraphs + conclusion) in 45 minutes on this question: 'Choose a text you have read this year and argue that one aspect of its craft is particularly significant.' Set a timer. The goal is to produce a complete, structured, analytically sound essay within the time limit.",
        parentTip: "Timed writing is an important skill. Discuss with your child how to allocate the 45 minutes: 5 minutes planning, 35 minutes writing, 5 minutes reviewing. Read the essay together after and evaluate it honestly.",
        prompts: [
          { text: "Your essay:", type: "box" },
          { text: "Self-assessment after finishing: what went well and what would you improve:", type: "lines", lines: 4 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Read and Respond to Professional Criticism",
        instruction: "Find a short piece of professional literary criticism or book review — from a newspaper, journal, or literary website. Read it carefully and write 5–7 sentences analysing how the critic structures their argument. Do they use TEEL-like structures? How do they integrate evidence? What makes their analysis more or less convincing?",
        parentTip: "Reading professional criticism alongside student writing is enormously valuable. Discuss what the professional does that is impressive — and whether there is anything in your child's writing that is already similar.",
        prompts: [
          { text: "Source: ___________________________________________\nYour analysis of the critic's approach:", type: "box" },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Analytical Paragraph on Context",
        instruction: "Write a TEEL paragraph that connects a text's meaning to its context — the time, place, or social conditions in which it was written. Argue that understanding the context changes or enriches the reading of a specific aspect of the text.",
        parentTip: "Contextual analysis is a more advanced skill that becomes increasingly important in Years 8–12. Introduce it gently — context should enrich analysis, not replace it.",
        prompts: [
          { text: "Text and context: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Analytical Synthesis: What Have You Learned?",
        instruction: "Write a reflective analysis (7–9 sentences) of your own development as an analytical writer across this worksheet. What can you do now that you could not do at the start? What is still difficult? What is the most important insight about analytical writing that you will carry forward?",
        parentTip: "This reflective synthesis is the most important activity — it turns individual tasks into a coherent learning narrative. Take time with it and discuss it together.",
        prompts: [
          { text: "Your reflective analysis:", type: "box" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: Write a Review for Publication",
        content: "Write a genuine review of a book, film, or other text that you would be willing to submit for real publication — to a school newsletter, a blog, a community website, or a local paper. The review should demonstrate your analytical skills: make a specific argument about the text's quality, support it with evidence, and write in a register appropriate for the publication. If you are happy with it, actually submit it. Real publication is the most meaningful audience a writer can have.",
      },
      // 81–100 EXTENDING
      // 81
      {
        type: "open-response",
        title: "Write a Complete Essay on a Challenging Text",
        instruction: "Write a complete analytical essay (intro + three TEEL + conclusion) on the most challenging text you have read this year. Choose a question that interests you genuinely. The essay should be approximately 500 words.",
        parentTip: "This is the most significant writing task in the worksheet. Give it the time, preparation, and revision it deserves. Read the complete essay aloud before finalising.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Edit a Peer's Analytical Paragraph",
        instruction: "Exchange a TEEL paragraph with a family member or friend. Read their paragraph carefully and write an editorial comment (5–6 sentences) that: identifies the strongest part, identifies the weakest part, asks one genuine question about the interpretation, and makes one specific suggestion for improvement.",
        parentTip: "Peer editing requires analytical reading as well as analytical writing. Model the language of editorial feedback: 'I wonder whether...', 'The strongest moment is...', 'One thing to consider is...'",
        prompts: [
          { text: "Paragraph you are editing:", type: "box" },
          { text: "Your editorial comment:", type: "box" },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "The Most Important Thing About TEEL",
        instruction: "Write a short explanation (5–7 sentences) of what TEEL is, what it is for, and what the most important thing to understand about it is. Write it as if explaining to a student who has never heard of TEEL. Then write one sentence about what TEEL cannot do — what its limitations are.",
        parentTip: "Understanding the limitations of a framework is as important as understanding the framework itself. TEEL is a tool, not a law.",
        prompts: [
          { text: "Your explanation of TEEL:", type: "box" },
          { text: "What TEEL cannot do:", type: "lines", lines: 2 },
        ],
      },
      // 84
      {
        type: "multiple-choice",
        title: "TEEL: Final Mastery Check",
        instruction: "Choose the most analytically sophisticated answer for each question.",
        questions: [
          {
            prompt: "The ultimate purpose of the TEEL structure is:",
            options: [
              "A. To ensure every paragraph is exactly the same length",
              "B. To provide a scaffold for making and sustaining a precise analytical argument supported by evidence",
              "C. To prevent students from writing anything outside the structure",
              "D. To make marking easier for teachers",
            ],
            answer: "B. To provide a scaffold for making and sustaining a precise analytical argument supported by evidence",
          },
          {
            prompt: "A student who truly understands analytical writing will, over time:",
            options: [
              "A. Follow TEEL exactly as written every time, forever",
              "B. Develop their own analytical voice and structure while retaining the core principles of argument, evidence, and explanation",
              "C. Abandon TEEL entirely",
              "D. Write longer and longer paragraphs",
            ],
            answer: "B. Develop their own analytical voice and structure while retaining the core principles of argument, evidence, and explanation",
          },
        ],
      },
      // 85
      {
        type: "true-false",
        title: "Analytical Writing: Final Synthesis",
        instruction: "Mark T (true) or F (false). These test your deepest understanding of analytical writing.",
        statements: [
          { text: "Analytical writing is ultimately about making arguments, not describing observations.", answer: true },
          { text: "The best analytical writers have a voice — their analysis is not just correct, it is interesting.", answer: true },
          { text: "TEEL is the only valid structure for analytical writing in English.", answer: false },
          { text: "The explanation part of TEEL can be longer than the rest of the paragraph combined.", answer: true },
          { text: "Analytical writing skills developed in English transfer to analysis in history, science, and any other subject requiring reasoned argument.", answer: true },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Teach the TEEL Structure",
        instruction: "Design a ten-minute lesson to teach TEEL to a Year 5 student. Write the lesson plan, including: what you would say to introduce the concept, what example you would use, and how you would check whether the student understood. Write it in a clear, friendly semi-formal register.",
        parentTip: "Teaching is one of the best consolidation strategies. Evaluate your child's lesson together — is it accurate, clear, and pitched at the right level?",
        prompts: [
          { text: "Your lesson plan:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Advanced Topic Sentence Workshop",
        instruction: "Write five topic sentences for five different analytical paragraphs about five different texts you have read. Each must: make a specific, debatable argument; indicate the technique being analysed; and gesture towards the effect on the reader or the broader significance. Then rank them from weakest to strongest and explain your ranking.",
        parentTip: "Topic sentences are the spine of analytical writing. This workshop produces five complete analytical starting points — any one of them could become a full paragraph or essay.",
        prompts: [
          { text: "Five topic sentences:\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________\n4. ___________________________________________\n5. ___________________________________________", type: "lines", lines: 10 },
          { text: "Your ranking (strongest to weakest) and explanation:", type: "box" },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "A Letter to a Future Year 7 Student",
        instruction: "Write a letter (8–10 sentences) to a Year 7 student who is about to begin studying analytical paragraph writing. What do you wish someone had told you at the start? What is the most important piece of advice about TEEL? What is the hardest part — and what makes it worth the effort?",
        parentTip: "Metacognitive writing — reflecting on your own learning to advise others — is one of the most powerful consolidation tasks. Read the letter together and discuss: is the advice accurate and useful?",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Analytical Portfolio Entry",
        instruction: "Select the analytical paragraph you are most proud of from this entire worksheet. Copy it here and write a 5–6 sentence self-evaluation explaining: why you selected this paragraph, what makes it your best work, and what you would improve if you were revising it one more time.",
        parentTip: "Portfolio self-evaluation is a genuine academic skill. Read the paragraph and evaluation together — do you agree with your child's self-assessment?",
        prompts: [
          { text: "Selected paragraph:", type: "box" },
          { text: "Self-evaluation:", type: "box" },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Analytical Writing as a Lifelong Skill",
        content: "The ability to make a precise, evidence-based argument is one of the most valuable intellectual skills you can develop — not just for school, but for life. In every field that requires critical thinking — law, medicine, research, journalism, policy, education — the core skill is the same: identify a position, support it with specific evidence, explain the reasoning, and connect it to the bigger picture. TEEL is a training ground for that skill. The students who take analytical paragraph writing seriously at Year 7 are building the foundations of rigorous thinking that will serve them in every demanding intellectual endeavour they undertake.",
      },
      // 91–100
      // 91
      {
        type: "open-response",
        title: "Write About a Text That Changed You",
        instruction: "Write two analytical paragraphs about a text that genuinely affected you — changed how you thought about something, or made you feel something you had not felt before. The analysis should be genuine, not performed. Use TEEL structure but let the intellectual and emotional honesty come through.",
        parentTip: "The best analytical writing is also personal — it comes from genuine engagement with a text. Share your own examples of texts that changed you and discuss them together.",
        prompts: [
          { text: "Text: ___________________________________________\nParagraph 1:", type: "box" },
          { text: "Paragraph 2:", type: "box" },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Comparative Essay: Two Texts",
        instruction: "Write three TEEL paragraphs comparing two texts — one paragraph on similarities, one on differences, one on which text you find more effective and why. Each paragraph should analyse specific language or craft choices from both texts.",
        parentTip: "Comparative analysis is a major form of analytical writing at Years 9–12. This introduction to it at Year 7 is excellent preparation. Discuss the comparison together before writing.",
        prompts: [
          { text: "Text 1 and Text 2: ___________________________________________\nSimilarities paragraph:", type: "box" },
          { text: "Differences paragraph:", type: "box" },
          { text: "Which is more effective and why:", type: "box" },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Analytical Writing on an Image",
        instruction: "Write a full TEEL analytical paragraph about any image — a photograph, artwork, or film still. The analysis should work exactly like literary analysis: specific feature as evidence, explanation of how and why it creates meaning, connection to the image's broader purpose.",
        parentTip: "Visual analytical writing uses the same core skills as literary analytical writing. If your child struggles with this, work through it together — what is the most striking feature of the image and why?",
        prompts: [
          { text: "Image description and source: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Write Your Finest Analytical Paragraph",
        instruction: "Write the most analytically powerful paragraph you are capable of — choose any text, any question, any angle. Spend time planning, drafting, and revising before you write the final version here. This is your best work.",
        parentTip: "This is the peak performance task of the worksheet. Give it the time and attention it deserves. Read it aloud together and discuss: is this genuinely the best analytical writing your child has produced?",
        prompts: [
          { text: "Text, question, and your finest TEEL paragraph:", type: "box" },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Reflect on the Journey",
        instruction: "Write a final synthesis (8–10 sentences) reflecting on what you have learned about analytical paragraph writing across all 94 previous activities. What are you now able to do that you could not do before? What remains challenging? What will you do differently in your next analytical task?",
        parentTip: "This final synthesis reflection closes the learning loop for the worksheet. Read it together and celebrate the genuine progress made — analytical writing is hard, and the ability to do it well is genuinely valuable.",
        prompts: [
          { text: "Your synthesis reflection:", type: "box" },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Create an Analytical Writing Guide",
        instruction: "Create a concise one-page analytical writing guide that you could use in future. Include: the TEEL structure with definitions, the specificity test, a list of analytical vocabulary, tips for the topic sentence, and one example of a strong TEEL paragraph. Write it as a reference tool you will actually use.",
        parentTip: "A well-designed reference guide is a genuine study tool. Make it visually organised and genuinely useful. Keep it with your writing materials.",
        prompts: [
          { text: "Your analytical writing guide:", type: "box" },
        ],
      },
      // 97
      {
        type: "fill-in-blank",
        title: "Final Analytical Vocabulary Check",
        instruction: "Complete each sentence with the most precise analytical term from this list: analyse, argument, evidence, explanation, effect, technique, construct, position, subvert, foreground, juxtapose, imply.",
        sentences: [
          { text: "A topic sentence should make an ___, not a description.", blanks: ["argument"] },
          { text: "The quotation or specific reference from the text is called the ___.", blanks: ["evidence"] },
          { text: "The ___ section of a TEEL paragraph is where you explain how and why the evidence proves the topic sentence.", blanks: ["explanation"] },
          { text: "To place two contrasting things side by side for effect is to ___ them.", blanks: ["juxtapose"] },
          { text: "To bring something to the reader's attention by giving it prominence is to ___ it.", blanks: ["foreground"] },
          { text: "When a text challenges or overturns an expected idea, it is said to ___ it.", blanks: ["subvert"] },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Extended Comparative Essay",
        instruction: "Write a complete five-paragraph comparative essay (intro + three TEEL + conclusion) comparing two texts you have studied this year. The essay should make a clear overall argument about how the two texts approach a shared theme or technique differently.",
        parentTip: "Extended comparative essays are a cornerstone of senior English. This is excellent preparation. Discuss the overall argument before writing — what is the most interesting claim you can make about how these two texts compare?",
        prompts: [
          { text: "Your comparative essay:", type: "box" },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "Publish Your Best Work",
        instruction: "Choose the analytical piece from this worksheet that you are most proud of. Prepare it for sharing — edit it carefully, ensure it is correctly structured and expressed, and write a 2–3 sentence introduction explaining what the piece is and why you chose it. Share it with someone — a family member, a friend, or post it somewhere your writing can be read.",
        parentTip: "Authentic audience is the most powerful motivation for writing quality. Even sharing with one person beyond the home education context is meaningful. Celebrate this moment — producing high-quality analytical writing is a genuine intellectual achievement.",
        prompts: [
          { text: "Your piece and introduction:", type: "box" },
          { text: "Who will you share it with:", type: "lines", lines: 1 },
        ],
      },
      // 100 — FINAL SPARK
      {
        type: "spark",
        title: "Spark: The Analysis That Changes Your Mind",
        content: "The deepest analytical work does not just describe what you already think — it changes what you think. Challenge yourself: choose a text you have previously dismissed or misunderstood. Read it again, slowly and carefully. Write two TEEL paragraphs arguing for something in the text that you now recognise as more interesting, complex, or valuable than you first thought. What changed in your reading? What does this tell you about the relationship between analytical attention and understanding? Share your paragraphs and your reflection with your parent or guardian.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "multiple-choice",
        title: "What Is a Poetic Device?",
        instruction: "Choose the best definition.",
        questions: [
          {
            prompt: "A poetic device is:",
            options: [
              "A. A rhyme at the end of every line",
              "B. A deliberate language or structural technique used by a poet to create a particular effect",
              "C. Any word that sounds unusual",
              "D. A grammatical rule that poems must follow",
            ],
            answer: "B. A deliberate language or structural technique used by a poet to create a particular effect",
          },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Match the Device to Its Definition",
        instruction: "Draw a line to match each poetic device with its definition.",
        parentTip: "These are the core devices for Year 7 poetry analysis. Knowing them precisely is the foundation of all poetry analysis.",
        left: ["Simile", "Metaphor", "Alliteration", "Personification", "Enjambment", "Assonance"],
        right: [
          "Repetition of the same consonant sound at the start of words",
          "A direct comparison that says one thing IS another",
          "Giving human qualities to a non-human thing",
          "A comparison using 'like' or 'as'",
          "A line that runs on into the next without a pause",
          "Repetition of similar vowel sounds within words",
        ],
      },
      // 3
      {
        type: "true-false",
        title: "Poetry Basics",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "All poems must rhyme.", answer: false },
          { text: "A stanza is a group of lines in a poem, equivalent to a paragraph in prose.", answer: true },
          { text: "The speaker of a poem is always the same person as the poet who wrote it.", answer: false },
          { text: "Enjambment occurs when a line of poetry ends without a pause and continues into the next line.", answer: true },
          { text: "The tone of a poem refers to the poet's attitude as expressed through language choices.", answer: true },
        ],
      },
      // 4
      {
        type: "circle-correct",
        title: "Identify the Device",
        instruction: "Circle the correct poetic device for each example.",
        questions: [
          { prompt: "'Her voice was a river — constant and cold.'", options: ["Simile", "Metaphor"] },
          { prompt: "'His heart hummed with happiness.'", options: ["Metaphor", "Alliteration"] },
          { prompt: "'The moon wept into the sea.'", options: ["Personification", "Simile"] },
          { prompt: "'Silence like a wound.' (using 'like')", options: ["Simile", "Metaphor"] },
          { prompt: "'The sea sighs, slides, and swirls.'", options: ["Alliteration", "Assonance"] },
        ],
      },
      // 5
      {
        type: "fill-in-blank",
        title: "Name the Device",
        instruction: "Name the poetic device used in each example.",
        sentences: [
          { text: "'The wind whispered warnings through the willow trees.' Device: ___________", blanks: ["alliteration"] },
          { text: "'She moved like water — effortless, inevitable.' Device: ___________", blanks: ["simile"] },
          { text: "'Hope is a feather / It never lands.' Device: ___________", blanks: ["metaphor / extended metaphor"] },
          { text: "'The old house groaned and sighed.' Device: ___________", blanks: ["personification"] },
          { text: "'The beat of her feet on the heat of the street.' Device: ___________", blanks: ["assonance / rhyme"] },
        ],
      },
      // 6
      {
        type: "sorting",
        title: "Sort: Sound Device or Image Device?",
        instruction: "Sort each device into the correct column.",
        columns: ["Sound Device", "Image / Figurative Device"],
        items: [
          { label: "Alliteration" },
          { label: "Metaphor" },
          { label: "Assonance" },
          { label: "Simile" },
          { label: "Onomatopoeia" },
          { label: "Personification" },
          { label: "Rhyme" },
          { label: "Symbolism" },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Poetic Devices — Identify and Explain",
        instruction: "Find each device in your chosen poem. Write the example from the text and explain the effect it creates.",
        parentTip: "Effect explanations should be specific: not 'it creates a mood' but 'it creates a mood of quiet resignation that makes the reader feel the futility of the speaker's situation'. Specificity is everything.",
        prompts: [
          { text: "Poem title and poet: _____________________________________________\n\nFind an example of IMAGERY. Quote it and explain its effect.", type: "lines", lines: 3 },
          { text: "Find a SOUND DEVICE (alliteration, assonance, rhyme, or onomatopoeia). Quote it and explain why the poet might have used this sound pattern here.", type: "lines", lines: 3 },
          { text: "Look at the poem's STRUCTURE — stanzas, line lengths, enjambment. What does the structure contribute to meaning or feeling?", type: "lines", lines: 3 },
          { text: "How would you describe the TONE? What specific language choices create this tone?", type: "lines", lines: 3 },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Understanding Tone",
        instruction: "Choose the most accurate answer for each question about tone.",
        questions: [
          {
            prompt: "Which words most accurately describe a mournful or elegiac tone?",
            options: ["A. Joyful, celebratory, triumphant", "B. Melancholic, sorrowful, wistful", "C. Angry, indignant, furious", "D. Ironic, sardonic, detached"],
            answer: "B. Melancholic, sorrowful, wistful",
          },
          {
            prompt: "Which set of words would be most likely to create a tense or ominous tone?",
            options: ["A. Bright, warm, golden, laughter", "B. Dark, shadow, silence, creeping", "C. Clear, direct, confident, bold", "D. Playful, light, dancing, free"],
            answer: "B. Dark, shadow, creeping, silence",
          },
        ],
      },
      // 9
      {
        type: "fill-in-blank",
        title: "Describing Tone Precisely",
        instruction: "Match the tone word to its best definition.",
        sentences: [
          { text: "___ tone: bitter and resentful, as if the speaker has been wronged.", blanks: ["Acerbic / Bitter"] },
          { text: "___ tone: gently sad, looking back at something lost.", blanks: ["Nostalgic / Wistful"] },
          { text: "___ tone: saying the opposite of what is meant for comic or critical effect.", blanks: ["Ironic"] },
          { text: "___ tone: calm and thoughtful, considering ideas carefully.", blanks: ["Contemplative / Meditative"] },
          { text: "___ tone: expressing strong admiration or reverence.", blanks: ["Reverent / Awed"] },
        ],
      },
      // 10
      {
        type: "true-false",
        title: "Speaker and Poet",
        instruction: "Mark T (true) or F (false).",
        parentTip: "The distinction between speaker and poet is important — it gives students analytical distance from the poem and prevents simplistic autobiographical readings.",
        statements: [
          { text: "The speaker of a poem is the voice through which the poem is told.", answer: true },
          { text: "The speaker and the poet are always the same person.", answer: false },
          { text: "In some poems, the speaker is a character created by the poet, not the poet themselves.", answer: true },
          { text: "We should always assume that the feelings expressed in a poem are the poet's real feelings.", answer: false },
          { text: "Understanding the speaker's perspective is an important part of poetry analysis.", answer: true },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Read a Poem Three Times",
        instruction: "Choose any poem. Read it silently, then read it aloud, then have your parent or guardian read it aloud. After the third reading, answer these questions.",
        parentTip: "Reading aloud is one of the most important poetry practices. Hearing a poem in another voice reveals things that silent reading misses. Share your own responses genuinely — do not perform certainty.",
        prompts: [
          { text: "What did you notice on the first reading that you missed on the second?", type: "lines", lines: 2 },
          { text: "What image or phrase stayed with you after three readings?", type: "lines", lines: 2 },
          { text: "What did you feel — before any analysis? Just describe your emotional response.", type: "lines", lines: 2 },
        ],
      },
      // 12
      {
        type: "sorting",
        title: "Sort: Structural Features",
        instruction: "Sort each structural term into the correct column.",
        columns: ["I know what this means", "I need to look this up"],
        items: [
          { label: "Stanza" },
          { label: "Enjambment" },
          { label: "End-stopped line" },
          { label: "Volta (a turn in argument or mood)" },
          { label: "Couplet (two-line stanza)" },
          { label: "Tercet (three-line stanza)" },
          { label: "Quatrain (four-line stanza)" },
          { label: "Free verse (no fixed rhyme or metre)" },
        ],
      },
      // 13
      {
        type: "fill-in-blank",
        title: "Structure Vocabulary",
        instruction: "Complete each definition of a structural term.",
        sentences: [
          { text: "A ___ is a group of lines in a poem, equivalent to a paragraph in prose.", blanks: ["stanza"] },
          { text: "___ occurs when a line of poetry runs into the next without a pause or punctuation stop.", blanks: ["Enjambment"] },
          { text: "An ___ line ends with a pause — usually marked by punctuation.", blanks: ["end-stopped"] },
          { text: "A ___ is a two-line stanza, often with a rhyme between the two lines.", blanks: ["couplet"] },
          { text: "A ___ or turn is a shift in argument, mood, or direction within a poem.", blanks: ["volta"] },
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Annotate a Poem",
        instruction: "Annotate your chosen poem by writing observations in the margin. Cover: imagery, sound devices, tone, speaker, structure, and any language that strikes you as interesting or unexpected. Write at least one observation per stanza.",
        parentTip: "Annotation is the practice of marking a text with observations about how it works. There are no wrong annotations — a provisional observation is better than silence. Model this by annotating aloud yourself as you read.",
        prompts: [
          { text: "Poem title and poet: ___________________________________________\nList your five most interesting annotations here (you may annotate directly on a printed copy):", type: "lines", lines: 6 },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: The Three Questions of Poetry Analysis",
        content: "When you are stuck on a poem, ask three questions. (1) Who is speaking, and what is their situation or state of mind? (The speaker is not always the poet.) (2) What is the most striking image or moment — the one that seems to contain the most feeling or meaning? (This is usually where the poem's heart is.) (3) What changes between the beginning and the end of the poem? (Something almost always shifts — in tone, understanding, feeling, or argument — and that shift is usually the poem's purpose.) These three questions will unlock almost any poem at Year 7 level.",
      },
      // 16
      {
        type: "open-response",
        title: "Explain the Effect of a Device",
        instruction: "For each device below, write two sentences: one naming the device and quoting it, and one explaining the specific effect it creates in the poem.",
        parentTip: "The explanation must be specific to this poem and this quotation. 'It creates a sad feeling' is too vague — push for: 'The alliteration of soft s-sounds creates a hushed, reverent quality that suggests the speaker approaches this memory as sacred rather than sorrowful.'",
        prompts: [
          { text: "Device 1 (find it in your poem): ___________________________________________\nEffect:", type: "lines", lines: 2 },
          { text: "Device 2 (find it in your poem): ___________________________________________\nEffect:", type: "lines", lines: 2 },
          { text: "Device 3 (find it in your poem): ___________________________________________\nEffect:", type: "lines", lines: 2 },
        ],
      },
      // 17
      {
        type: "multiple-choice",
        title: "Effect Analysis — Choose the Strongest",
        instruction: "Choose the most specific and analytically powerful explanation of effect.",
        questions: [
          {
            prompt: "The poet uses the phrase 'the world held its breath'. Which explanation is strongest?",
            options: [
              "A. This is a metaphor.",
              "B. This creates a tense mood.",
              "C. The personification of the world holding its breath transforms the entire environment into a witness to the moment, amplifying the stakes beyond the personal to the cosmic.",
              "D. The metaphor makes the moment feel important.",
            ],
            answer: "C. The personification of the world holding its breath transforms the entire environment into a witness to the moment, amplifying the stakes beyond the personal to the cosmic.",
          },
        ],
      },
      // 18
      {
        type: "true-false",
        title: "Free Verse and Blank Verse",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Free verse poetry has no fixed rhyme scheme or metre.", answer: true },
          { text: "A poem without rhyme is always a lesser achievement than one with rhyme.", answer: false },
          { text: "Blank verse has regular metre (usually iambic pentameter) but no rhyme.", answer: true },
          { text: "The absence of rhyme in a poem means the poet has made no structural choices.", answer: false },
          { text: "Free verse poets still make deliberate decisions about line breaks, rhythm, and structure.", answer: true },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Write Your First Poem Analysis Paragraph",
        instruction: "Write a TEEL analytical paragraph responding to: How does the poet use language to create a strong emotional effect? Label each part.",
        parentTip: "Discuss the question together before writing. What emotion does the poem create? Which specific technique most powerfully creates that emotion? That technique and that quote should be the focus of the paragraph.",
        prompts: [
          { text: "Write your analytical paragraph (label T / E / E / L):", type: "box" },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Read a Poem Aloud as Performance",
        content: "Choose a poem you find powerful. Prepare it as a performance — decide where to pause, where to slow down, where to speed up, where to be quiet, where to be strong. Practise until you can read it aloud without looking at the page. Then perform it to your parent or guardian. Afterwards, discuss: how did performing it change your understanding? What did you discover about the poem when you had to make every pause and emphasis a deliberate decision?",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Analyse a Poem's Structure",
        instruction: "Answer each question about the structure of your chosen poem.",
        parentTip: "Structure is as meaningful as language in poetry. The choice of stanza length, line breaks, and where the poem ends are all deliberate choices.",
        prompts: [
          { text: "How many stanzas does the poem have? Are they all the same length? What does the regularity or irregularity suggest?", type: "lines", lines: 3 },
          { text: "Find one example of enjambment. Quote the lines and explain what effect the run-on creates.", type: "lines", lines: 3 },
          { text: "Does the poem's ending feel resolved or unresolved? What does this suggest about the poem's purpose?", type: "lines", lines: 3 },
        ],
      },
      // 22
      {
        type: "fill-in-blank",
        title: "Enjambment and End-Stopped Lines — Contrast",
        instruction: "Complete each sentence about the effect of enjambment versus end-stopped lines.",
        sentences: [
          { text: "Enjambment creates a sense of ___ and forward motion, as if the poem cannot pause.", blanks: ["continuity / urgency / flow"] },
          { text: "An end-stopped line creates a sense of ___ or finality, giving the reader a moment to absorb the image or idea.", blanks: ["pause / conclusion / emphasis"] },
          { text: "When a poet uses enjambment suddenly after a series of end-stopped lines, the effect can be one of ___ or surprise.", blanks: ["acceleration / disruption / release"] },
          { text: "The strategic use of both enjambment and end-stopping gives a poem ___ — variation between flow and pause.", blanks: ["rhythm / texture / control"] },
        ],
      },
      // 23
      {
        type: "open-response",
        title: "Analyse the Volta",
        instruction: "A volta is a turn — a shift in argument, mood, or direction — that appears in many poems, often at the end of a stanza or at the beginning of the final stanza. Find the volta in your chosen poem (or identify that there is no clear volta). Explain what shifts and why it matters.",
        parentTip: "The volta is one of the most important structural features in poetry. In a sonnet it typically occurs at line 9 or 13. In other poems it may come anywhere. Discuss together: where does this poem turn, and what changes?",
        prompts: [
          { text: "Does your poem have a volta? Where does it occur?\nQuote the lines around the volta:", type: "lines", lines: 3 },
          { text: "What shifts at the volta? (mood, argument, perspective, tone?)\nWhat is the effect of this shift?", type: "lines", lines: 3 },
        ],
      },
      // 24
      {
        type: "multiple-choice",
        title: "Rhyme Scheme",
        instruction: "A rhyme scheme labels the pattern of rhymes in a poem using letters (A, B, C...). Choose the correct answer.",
        questions: [
          {
            prompt: "If lines 1 and 3 rhyme, and lines 2 and 4 rhyme, what is the rhyme scheme?",
            options: ["A. AABB", "B. ABAB", "C. ABBA", "D. AAAA"],
            answer: "B. ABAB",
          },
          {
            prompt: "If lines 1 and 2 rhyme, and lines 3 and 4 rhyme, what is the rhyme scheme?",
            options: ["A. ABAB", "B. ABBA", "C. AABB", "D. ABCD"],
            answer: "C. AABB",
          },
          {
            prompt: "What effect does a consistent rhyme scheme typically create?",
            options: [
              "A. It makes the poem harder to understand",
              "B. It can create a sense of pattern, order, control or inevitability",
              "C. It always makes the poem feel childish",
              "D. It has no effect on meaning",
            ],
            answer: "B. It can create a sense of pattern, order, control or inevitability",
          },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Identify the Rhyme Scheme",
        instruction: "Write out the first stanza of your chosen poem, labelling the rhyme scheme. If the poem uses free verse (no rhyme), analyse the rhythm and line breaks instead.",
        parentTip: "Labelling a rhyme scheme is simple: give the first end-word the letter A; every time a line ends with a word that rhymes with the first, it also gets A. New sounds get new letters.",
        prompts: [
          { text: "First stanza with rhyme scheme labels:", type: "lines", lines: 5 },
          { text: "What effect does the rhyme scheme create? Does it feel inevitable, musical, constrained, or free?", type: "lines", lines: 3 },
        ],
      },
      // 26
      {
        type: "fill-in-blank",
        title: "Connotation in Poetry",
        instruction: "Every word in a poem is chosen for its connotations as well as its denotation. Complete each sentence about word connotations.",
        parentTip: "Denotation = what a word literally means. Connotation = what a word implies or suggests beyond its literal meaning. Poetry lives in connotation.",
        sentences: [
          { text: "'House' denotes a building. 'Home' denotes the same thing, but its connotations include ___ and ___.", blanks: ["warmth / belonging / safety", "family / comfort"] },
          { text: "The word 'ancient' has connotations of ___, while 'old' is more ___.", blanks: ["grandeur / wisdom / permanence", "neutral / ordinary"] },
          { text: "Choosing 'shattered' rather than 'broken' suggests ___ destruction.", blanks: ["more violent / total / irreversible"] },
          { text: "A poet who describes a character as 'gaunt' rather than 'thin' creates connotations of ___ and ___.", blanks: ["illness / suffering / hardship", "deprivation"] },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Analyse Word Choice (Diction)",
        instruction: "Choose three words from your poem that you think are particularly deliberate and interesting. For each, explain the word's connotations and how the choice serves the poem's meaning or effect.",
        parentTip: "Diction analysis — close attention to individual word choices — is one of the most rewarding forms of poetry analysis. Discuss: why this word, and not another?",
        prompts: [
          { text: "Word 1: '___'\nConnotations:\nWhy this word in this poem:", type: "lines", lines: 3 },
          { text: "Word 2: '___'\nConnotations:\nWhy this word in this poem:", type: "lines", lines: 3 },
          { text: "Word 3: '___'\nConnotations:\nWhy this word in this poem:", type: "lines", lines: 3 },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Your Interpretation",
        instruction: "Poetry always allows for multiple interpretations. Write a response (4–5 sentences) explaining what you think this poem is about at a deeper level. What is the poet really exploring?",
        parentTip: "Share your own interpretation and be willing to have your child disagree with it. Defending an interpretation against a different one is one of the highest-level analytical skills.",
        prompts: [
          { text: "Write your interpretation here:", type: "box" },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Analytical Paragraph on the Poem",
        instruction: "Write a TEEL analytical paragraph responding to: How does the poet use language to create a strong emotional effect? Label each part.",
        parentTip: "Discuss the question together before writing. What emotion does the poem create? Which specific technique most powerfully creates that emotion? That technique and that quote should be the focus of the paragraph.",
        prompts: [
          { text: "Your analytical paragraph (label T / E / E / L):", type: "box" },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Reading a Poem for Its Silences",
        content: "One of the most advanced poetry reading skills is attending to what is not said — the silences, omissions, and evasions in a poem. What does the speaker avoid naming directly? What is implied rather than stated? Where does the poet use compressed language that leaves space for the reader to fill in? The white space on the page around the lines of a poem is not empty — it is potential meaning. The most interesting interpretations often come from asking: what is this poem not saying, and why?",
      },
      // 31
      {
        type: "open-response",
        title: "Identify the Poem's Subject and Theme",
        instruction: "There is a difference between a poem's subject (what it is literally about) and its theme (the larger idea or concern it explores). Write 3–4 sentences identifying both for your chosen poem and explaining the relationship between them.",
        parentTip: "Subject is the surface; theme is the depth. A poem about a storm might have the theme of emotional overwhelming. A poem about a bird might be about freedom. Discuss the difference before writing.",
        prompts: [
          { text: "Subject (what the poem is literally about): ___________________________________________\nTheme (larger idea explored): ___________________________________________\nHow the subject serves the theme:", type: "lines", lines: 4 },
        ],
      },
      // 32
      {
        type: "sorting",
        title: "Sort: Literal or Figurative?",
        instruction: "Sort each statement about a poem into the correct column.",
        columns: ["Literal reading (what the poem says on the surface)", "Figurative reading (what it suggests at a deeper level)"],
        items: [
          { label: "The poem is about a woman walking on a beach." },
          { label: "The poem explores how grief leaves a person exposed and without direction." },
          { label: "The poem describes an abandoned house." },
          { label: "The abandoned house symbolises a relationship that has ended." },
          { label: "The speaker watches a bird fly away." },
          { label: "The departing bird represents the freedom the speaker has lost." },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Write Two Interpretations",
        instruction: "Write two different interpretations of the same poem — one literal (what it is on the surface) and one thematic (what it is really about at a deeper level). Then discuss: which interpretation is more interesting, and why?",
        parentTip: "The goal is not to say one interpretation is right and one is wrong — both can be true simultaneously. The skill is in moving between levels of meaning.",
        prompts: [
          { text: "Literal interpretation:", type: "lines", lines: 3 },
          { text: "Thematic/symbolic interpretation:", type: "lines", lines: 3 },
          { text: "Which is more interesting and why:", type: "lines", lines: 2 },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Compare Two Poems on the Same Theme",
        instruction: "Find a second poem on the same subject or theme as your chosen poem. Write 5–7 sentences comparing how the two poets use different techniques to approach the same idea. Which do you find more effective?",
        parentTip: "Comparative poetry analysis is richer than single-poem analysis because it requires noticing what is distinctive about each. Discuss: what is each poet's unique contribution to this theme?",
        prompts: [
          { text: "Poem 1: ___________________________________________\nPoem 2: ___________________________________________\nYour comparison:", type: "box" },
        ],
      },
      // 35
      {
        type: "fill-in-blank",
        title: "Imagery Types",
        instruction: "Imagery appeals to the senses. Name the sense each type of imagery appeals to.",
        sentences: [
          { text: "Visual imagery: ___ (sight — creates a picture in the reader's mind)", blanks: ["Sight"] },
          { text: "Auditory imagery: ___ (sound — makes the reader hear something)", blanks: ["Sound / Hearing"] },
          { text: "Tactile imagery: ___ (touch — makes the reader feel something physically)", blanks: ["Touch"] },
          { text: "Olfactory imagery: ___ (smell — evokes a scent)", blanks: ["Smell"] },
          { text: "Gustatory imagery: ___ (taste — evokes a flavour or sensation on the tongue)", blanks: ["Taste"] },
        ],
      },
      // 36
      {
        type: "open-response",
        title: "Find Imagery in Your Poem",
        instruction: "Find one example of each type of imagery in your chosen poem (or explain why a particular type is absent). For each, quote the image and explain how it appeals to that sense and what effect this creates.",
        parentTip: "Not every poem uses every type of imagery. If a type is absent, that itself can be interesting — why has the poet chosen to avoid that sense?",
        prompts: [
          { text: "Visual image: Quote — ___________________________________________\nEffect:", type: "lines", lines: 2 },
          { text: "Auditory image (or note its absence): Quote — ___________________________________________\nEffect:", type: "lines", lines: 2 },
          { text: "Tactile, olfactory, or gustatory image (or note its absence): Quote — ___________________________________________\nEffect:", type: "lines", lines: 2 },
        ],
      },
      // 37
      {
        type: "true-false",
        title: "Symbolism in Poetry",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "A symbol in a poem is an object or image that represents a larger idea or concept.", answer: true },
          { text: "Symbols in poems are always explicitly named by the poet.", answer: false },
          { text: "Light and darkness are common symbols for knowledge and ignorance, or hope and despair.", answer: true },
          { text: "Every image in a poem is necessarily symbolic.", answer: false },
          { text: "Different readers may interpret the same symbol differently, and both interpretations can be valid.", answer: true },
        ],
      },
      // 38
      {
        type: "open-response",
        title: "Find and Analyse a Symbol",
        instruction: "Identify one symbol in your chosen poem. Explain what the object or image is literally, what it might symbolise, and how specific language choices in the poem support your interpretation.",
        parentTip: "Symbolism analysis requires moving between the literal and the figurative. The best symbol analyses are grounded in the text — the symbol must actually be in the poem, not imposed on it.",
        prompts: [
          { text: "Symbol identified: ___________________________________________\nLiterally: ___________________________________________\nSymbolically suggests: ___________________________________________\nLanguage evidence:", type: "lines", lines: 4 },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Annotated Poem — Full Analysis",
        instruction: "On a printed copy of your poem (or by writing here), do a full annotation: mark and label every device you can find — imagery, sound devices, structural features, tone markers, symbols, interesting word choices. Write the label and a brief observation for each.",
        parentTip: "A fully annotated poem is a complete pre-essay thinking document. Everything you need for an analytical paragraph is already in the annotations — you just need to select the best ones.",
        prompts: [
          { text: "List your fifteen best annotations (device + brief observation):\n1. ___________________________________________\n2. ___________________________________________\n3. ___________________________________________\n4. ___________________________________________\n5. ___________________________________________\n6. ___________________________________________\n7. ___________________________________________\n8. ___________________________________________\n9. ___________________________________________\n10. ___________________________________________\n11. ___________________________________________\n12. ___________________________________________\n13. ___________________________________________\n14. ___________________________________________\n15. ___________________________________________", type: "lines", lines: 18 },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Write Your Own Poem",
        content: "Write your own poem on any topic that matters to you. Before you start, make three decisions: (1) What is the subject (the literal thing the poem is about)? (2) What is the deeper theme you want the poem to explore? (3) What is one device you will definitely use — one image, one sound pattern, one structural choice — that is deliberate? After writing, annotate your own poem the way you would annotate a poem you are analysing. What did you discover about your own choices?",
      },
      // ── CONSOLIDATING 41–80 ───────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Write Three Analytical Paragraphs on One Poem",
        instruction: "Write three TEEL analytical paragraphs on your chosen poem, each addressing a different aspect: (1) imagery, (2) sound devices, (3) structure. Together they should build a coherent argument about the poem's meaning and effect.",
        parentTip: "Planning the three arguments together before writing will save time and produce more coherent results. What are the three most interesting claims you can make about this poem?",
        prompts: [
          { text: "Paragraph 1 — Imagery:", type: "box" },
          { text: "Paragraph 2 — Sound Devices:", type: "box" },
          { text: "Paragraph 3 — Structure:", type: "box" },
        ],
      },
      // 42
      {
        type: "multiple-choice",
        title: "Analysing Sound for Meaning",
        instruction: "Sound devices are not just decorative — they create meaning. Choose the most analytically accurate answer.",
        questions: [
          {
            prompt: "A poet uses heavy, slow-sounding consonants (l, m, n, s) throughout a poem about grief. What effect is this most likely to create?",
            options: [
              "A. A sense of speed and urgency",
              "B. A heavy, slow, mournful quality that physically enacts the weight of grief",
              "C. A light, celebratory tone",
              "D. A sense of confusion",
            ],
            answer: "B. A heavy, slow, mournful quality that physically enacts the weight of grief",
          },
          {
            prompt: "A poet uses plosive consonants (b, p, t, d, k) repeatedly in a poem about anger. What effect does this create?",
            options: [
              "A. A gentle, soothing quality",
              "B. An abrupt, explosive quality that mirrors the force of anger",
              "C. A musical, melodic effect",
              "D. A sense of contemplation",
            ],
            answer: "B. An abrupt, explosive quality that mirrors the force of anger",
          },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Sound Analysis — Consonants and Vowels",
        instruction: "Read a stanza of your poem aloud and pay attention to the sounds. Write 4–5 sentences analysing: Are the sounds predominantly hard or soft? Fast or slow? What mood do the sounds create? How does the sound palette serve the poem's meaning?",
        parentTip: "Reading aloud is essential for sound analysis. The sounds of a poem are not just intellectual choices — they are felt in the body when spoken. Read the stanza together several times.",
        prompts: [
          { text: "Stanza analysed: ___________________________________________\nYour sound analysis:", type: "box" },
        ],
      },
      // 44
      {
        type: "fill-in-blank",
        title: "Extended Metaphor",
        instruction: "An extended metaphor develops a comparison across several lines or the entire poem. Complete each sentence about extended metaphors.",
        sentences: [
          { text: "An extended metaphor creates ___ by sustaining a comparison across multiple lines, allowing the reader to explore a complex idea through a familiar ___.", blanks: ["depth", "image or concept"] },
          { text: "If a poem uses a journey as an extended metaphor for ___, every element of the journey — obstacles, companions, destination — gains a second, ___ meaning.", blanks: ["life / grief / recovery", "symbolic"] },
          { text: "Extended metaphors are particularly powerful because they allow the poet to ___ many aspects of a complex experience through the details of a single sustained comparison.", blanks: ["explore / illuminate / reveal"] },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Device-Effect-Purpose — The Three Levels of Poetry Analysis",
        content: "The most complete poetry analysis works on three levels. Level 1 (Device): identify the technique. 'The poet uses personification.' Level 2 (Effect): explain what the device does in this specific line. 'By personifying the wind as a grieving figure, the poet transforms the natural world into a participant in the speaker's sorrow.' Level 3 (Purpose): connect the effect to the poem's larger meaning or purpose. 'This reinforces the poem's central argument that grief is not an individual, internal experience but something that changes how the entire world is perceived.' Most students reach Level 2. Outstanding responses consistently reach Level 3.",
      },
      // 46
      {
        type: "open-response",
        title: "Three-Level Analysis",
        instruction: "For two techniques in your chosen poem, write a three-level analysis: (1) Device — name and quote it, (2) Effect — what it does in this specific context, (3) Purpose — how it serves the poem's larger meaning.",
        parentTip: "Work through the three levels together. The third level often requires stepping back from the line to consider the whole poem. What is this poem ultimately about, and how does this device serve that?",
        prompts: [
          { text: "Technique 1:\nDevice: ___________________________________________\nEffect: ___________________________________________\nPurpose: ___________________________________________", type: "lines", lines: 5 },
          { text: "Technique 2:\nDevice: ___________________________________________\nEffect: ___________________________________________\nPurpose: ___________________________________________", type: "lines", lines: 5 },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Write a Poem Response Essay",
        instruction: "Write a complete response to your chosen poem (intro + two TEEL paragraphs + conclusion, approximately 250–300 words). The essay should make a clear overall argument about what the poem is doing and how it achieves its effect.",
        parentTip: "A complete short essay is a significant achievement. Read it aloud together before finalising. The argument should be audible in the introduction and conclusion.",
        prompts: [
          { text: "Your poem response essay:", type: "box" },
        ],
      },
      // 48
      {
        type: "open-response",
        title: "Analyse an Australian Poem",
        instruction: "Read a poem by an Australian poet (suggestions: Judith Wright, Oodgeroo Noonuccal, Les Murray, Bruce Dawe, Dorothy Hewett). Write 5–6 sentences analysing what makes it distinctively Australian in its concerns, language, or landscape. What aspects of Australian experience or identity does the poem engage with?",
        parentTip: "Australian poetry has distinctive concerns — land, identity, settler history, the relationship between Indigenous and non-Indigenous Australians, the bush, the suburb. Discuss what you notice as distinctively Australian before writing.",
        prompts: [
          { text: "Poem title, poet, and source: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Poetry Analysis: Advanced Concepts",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "The most important aspect of a poem is its rhyme scheme.", answer: false },
          { text: "A poem's form (the shape it takes on the page) can itself contribute to meaning.", answer: true },
          { text: "There is always one correct interpretation of any poem.", answer: false },
          { text: "Context (when and where a poem was written) can enrich the reading of it.", answer: true },
          { text: "Reading a poem slowly and aloud is generally more productive than reading it quickly and silently.", answer: true },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Defend an Interpretation",
        instruction: "Write your most interesting, most defensible interpretation of your chosen poem. Then write a paragraph presenting an alternative interpretation that someone else might argue. Finally, write a sentence explaining why your interpretation is more convincing.",
        parentTip: "Holding two interpretations simultaneously and arguing for one is a highly sophisticated analytical skill. Discuss both interpretations together before your child writes.",
        prompts: [
          { text: "Your interpretation (4–5 sentences):", type: "box" },
          { text: "Alternative interpretation (3–4 sentences):", type: "lines", lines: 4 },
          { text: "Why your interpretation is more convincing:", type: "lines", lines: 2 },
        ],
      },
      // 51–80 CONSOLIDATING EXTENDED
      // 51
      {
        type: "open-response",
        title: "Analyse the Poem's First and Last Lines",
        instruction: "The first and last lines of a poem carry enormous weight — they are what the reader meets first and what they carry away. Write 4–6 sentences analysing the first and last lines of your poem: what do they promise, what do they deliver, and what is the relationship between them?",
        parentTip: "Comparing the opening and closing of a poem reveals the journey the poem makes. Discuss: does the ending fulfil the opening's promise, or subvert it?",
        prompts: [
          { text: "First line: ___________________________________________\nLast line: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Write a Comparative Poetry Essay",
        instruction: "Write a three-paragraph analytical essay comparing two poems you have read. Each paragraph should compare how both poets use a different technique or address a different aspect of their shared theme. Use evidence from both poems in each paragraph.",
        parentTip: "Comparative essays are a cornerstone of senior English. This early practice is highly valuable. Discuss the overall argument before writing: what is the most interesting comparison you can make?",
        prompts: [
          { text: "Poem 1: ___________________________________________\nPoem 2: ___________________________________________\nYour comparative essay:", type: "box" },
        ],
      },
      // 53
      {
        type: "multiple-choice",
        title: "What Is the Poem's Purpose?",
        instruction: "Choose the most accurate answer for each question.",
        questions: [
          {
            prompt: "Which statement best describes what a poem's purpose might be?",
            options: [
              "A. To rhyme",
              "B. To tell a story in the most efficient way possible",
              "C. To use language to create, explore, challenge, celebrate, or mourn an aspect of human experience",
              "D. To demonstrate the poet's knowledge of literary devices",
            ],
            answer: "C. To use language to create, explore, challenge, celebrate, or mourn an aspect of human experience",
          },
          {
            prompt: "A political poem that uses irony and anger might have the purpose of:",
            options: [
              "A. Entertaining the reader",
              "B. Challenging the reader to question a social or political injustice",
              "C. Demonstrating the poet's vocabulary",
              "D. Creating a sense of peace and reconciliation",
            ],
            answer: "B. Challenging the reader to question a social or political injustice",
          },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Analyse the Poem's Purpose",
        instruction: "Write 5–6 sentences explaining what you believe this poem's purpose is. What was the poet trying to achieve? How do the specific language and structural choices serve that purpose? Use at least two specific examples from the text.",
        parentTip: "Purpose analysis connects the micro (specific language choices) to the macro (what the poem is for). This is the most sophisticated level of poetry analysis. Discuss the purpose together before writing.",
        prompts: [
          { text: "Your purpose analysis:", type: "box" },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Write a Critical Introduction to a Poem",
        instruction: "Imagine you are editing an anthology of poetry. Write a short critical introduction (7–9 sentences) to a poem of your choice. The introduction should: name the poet and poem, identify the key theme, explain the most important technique, and make an argument for why this poem deserves to be in an anthology.",
        parentTip: "Writing critical introductions is what literary editors do. The constraint — make an argument for the poem's value — is a good one. What makes a poem worth preserving?",
        prompts: [
          { text: "Your critical introduction:", type: "box" },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Respond to a Poem Personally",
        instruction: "Write an honest personal response (5–7 sentences) to your chosen poem. What did it make you feel? Did any image or line stay with you? Did anything confuse or unsettle you? Be genuine — not a performance of the right feelings, but your actual response as a reader.",
        parentTip: "Personal responses to poetry are legitimate and valuable. Share your own response to the same poem — what did you feel? Agreement or disagreement with your child's response is both fine.",
        prompts: [
          { text: "Your personal response:", type: "box" },
        ],
      },
      // 57
      {
        type: "fill-in-blank",
        title: "Poem Structure and Meaning — Advanced",
        instruction: "Complete each sentence connecting structural choices to meaning.",
        sentences: [
          { text: "A poem that begins with regular stanzas and then breaks into irregular, shorter lines may be suggesting that ___ has shattered the speaker's sense of ___.", blanks: ["an event / trauma / crisis", "order / control"] },
          { text: "A poem that uses a single, continuous stanza with no breaks may create a sense of ___ or urgency.", blanks: ["breathlessness / flow / relentlessness"] },
          { text: "A poem that ends with a single isolated line creates ___ by separating this final idea from everything that came before it.", blanks: ["emphasis / isolation / weight"] },
          { text: "When enjambment occurs at a point of emotional climax, it can create a sense of ___ — the line spills over just as the feeling does.", blanks: ["overflow / release / uncontainability"] },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Analyse a Contemporary Australian Poem",
        instruction: "Find a contemporary Australian poem (published in the last 30 years). Write a complete analytical response (intro + two TEEL paragraphs + conclusion). Consider: how does it engage with contemporary Australian experience, identity, landscape, or social concerns?",
        parentTip: "Contemporary Australian poetry is rich and diverse. Suggest poets such as Ali Cobby Eckermann, Samuel Wagan Watson, Maxine Beneba Clarke, or John Kinsella. The Australian Poetry Library (australianpoetry.org) is a good starting point.",
        prompts: [
          { text: "Poem title and poet: ___________________________________________\nYour essay:", type: "box" },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Write a Poem in Response",
        instruction: "Write a response poem — a poem that answers, challenges, extends, or continues the conversation begun by your chosen poem. You do not need to use the same form, but you should use at least two deliberate poetic devices. Annotate your poem when done.",
        parentTip: "Response poems are a sophisticated form of literary engagement. Discuss: what do you want to add to or argue against in the original poem's position?",
        prompts: [
          { text: "Your response poem (annotated for devices):", type: "box" },
        ],
      },
      // 60 — SPARK
      {
        type: "spark",
        title: "Spark: The Poem You Keep Coming Back To",
        content: "Think of a poem you have read and cannot stop thinking about — or go and find one you want to keep. Write it out by hand. Then live with it for a week: read it again each day, and each day write one sentence about something you notice that you had not noticed before. At the end of the week, read all seven sentences back. What does the accumulation of observations tell you about the poem — and about what close reading over time reveals that a single reading never could?",
      },
      // 61–80 EXTENDING
      // 61
      {
        type: "open-response",
        title: "Write an Extended Poetry Analysis Essay",
        instruction: "Write a complete essay (intro + three TEEL paragraphs + conclusion, approximately 400–500 words) on a poem of your choice. The essay should make a clear, original argument about the poem's purpose and how its craft serves that purpose.",
        parentTip: "This is the most demanding writing task in this half of the worksheet. Plan the argument carefully before writing. The best essays argue something unexpected — something the reader would not have noticed without this analysis.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 62
      {
        type: "multiple-choice",
        title: "Context and Poetry",
        instruction: "Choose the most accurate answer about how context affects poetry reading.",
        questions: [
          {
            prompt: "Knowing that a poem was written during wartime would most appropriately:",
            options: [
              "A. Determine the only correct interpretation of the poem",
              "B. Provide useful context that might enrich or complicate the reading without replacing close textual analysis",
              "C. Make the poem easier to understand but less interesting",
              "D. Be irrelevant to the poem's meaning",
            ],
            answer: "B. Provide useful context that might enrich or complicate the reading without replacing close textual analysis",
          },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Contextual Reading of a Poem",
        instruction: "Research the context in which your chosen poem was written (the poet's biography, historical period, social context). Write 5–6 sentences explaining how this context enriches your reading of the poem. Does the context change, complicate, or confirm your original interpretation?",
        parentTip: "Context should enrich textual analysis, not replace it. The best contextual readings connect the biographical or historical information directly to specific language choices in the poem.",
        prompts: [
          { text: "Context researched: ___________________________________________\nYour contextual reading:", type: "box" },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Analyse Irony in a Poem",
        instruction: "Find a poem that uses irony — saying the opposite of what is meant, or creating a gap between surface meaning and deeper meaning. Write a TEEL paragraph analysing how the irony functions and what effect it creates on the reader.",
        parentTip: "Irony is one of the most sophisticated devices in poetry. It requires the reader to hold two meanings simultaneously — what the poem says and what it means. Discuss examples together before your child writes.",
        prompts: [
          { text: "Poem and poet: ___________________________________________\nYour TEEL paragraph on irony:", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Write a Poetry Anthology Introduction",
        instruction: "Imagine you are creating a small anthology of five poems on a theme that matters to you. Write an introduction (8–10 sentences) to the anthology: explain the theme, argue why these poems illuminate it, and make a case for why poetry is an appropriate form for exploring this theme.",
        parentTip: "This is an advanced creative-critical task. Discuss the theme together — what poetry genuinely matters to your child, and why? This is a chance for genuine intellectual and aesthetic engagement.",
        prompts: [
          { text: "Theme of your anthology: ___________________________________________\nFive poems you would include: ___________________________________________\nYour introduction:", type: "box" },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Write an Argument About a Poem",
        instruction: "Write a short argument (5–7 sentences) taking a position on this question: 'Is [your chosen poem] successful in achieving its purpose?' Your argument must be supported by evidence from the poem. You may argue yes, no, or a nuanced position.",
        parentTip: "Evaluative criticism — arguing whether a poem succeeds — is more demanding than descriptive analysis. The position must be argued, not just asserted.",
        prompts: [
          { text: "Your argument:", type: "box" },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Analyse a Poem's Use of Space and White Space",
        instruction: "White space — the blank space on the page around and between lines — is a meaningful feature of poetry layout. Find a poem with interesting white space use (a poem with very short lines, isolated words, or unusual spacing). Write 4–5 sentences analysing what the white space contributes to meaning or experience.",
        parentTip: "White space is one of the most visible features of poetry on the page, but students often ignore it. Discuss: what does the white space make the reader do?",
        prompts: [
          { text: "Poem: ___________________________________________\nYour white space analysis:", type: "box" },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Write About What Poetry Can Do That Prose Cannot",
        instruction: "Write a short reflection (5–7 sentences) exploring what poetry can do that prose cannot, and vice versa. Use specific examples from poems you have read to support your argument. What is the unique power of the poetic form?",
        parentTip: "This is a genuinely interesting critical question. Share your own view — what can poetry do that moves you in a way prose cannot? What are poetry's limitations compared to prose?",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 69
      {
        type: "fill-in-blank",
        title: "Poetry Analysis Vocabulary — Advanced",
        instruction: "Complete each sentence with the most precise poetry analysis term.",
        sentences: [
          { text: "The ___ of a poem refers to the pattern of stressed and unstressed syllables in each line.", blanks: ["metre / rhythm"] },
          { text: "When a poet's choice of sounds actively reinforces the meaning of the words, this is called ___.", blanks: ["phonaesthesia / sound symbolism"] },
          { text: "A ___ is a figure of speech where something is described as if it were something else, without using 'like' or 'as'.", blanks: ["metaphor"] },
          { text: "The ___ of a poem is the attitude expressed by the speaker through their language choices.", blanks: ["tone"] },
          { text: "The ___ of a poem is the larger idea or concern that the poem explores beyond its literal subject.", blanks: ["theme"] },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Poetry and Feeling — A Critical Reflection",
        instruction: "Write a reflection (6–8 sentences) on this question: 'Does analysing a poem destroy the feeling it creates, or does analysis deepen the feeling?' Use your own experience of reading and analysing poetry in this worksheet as evidence.",
        parentTip: "This is a genuine and important critical question. There is no right answer — share your own view and experience. Many people find that analysis increases rather than diminishes their appreciation of poetry.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 71–80 further extending
      // 71
      {
        type: "open-response",
        title: "Write Your Finest Poetry Analysis Paragraph",
        instruction: "Write the best analytical paragraph you are capable of about any poem. Plan it carefully, draft it, revise it. Then share it.",
        parentTip: "This is the peak performance task for poetry analysis. Give it the time and attention it deserves.",
        prompts: [
          { text: "Poem and your finest TEEL paragraph:", type: "box" },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Design a Poetry Study Unit",
        instruction: "Design a one-week study unit for a poem you love. Include: learning objectives, suggested daily activities, key questions for discussion, and the analytical paragraph you would ask students to write at the end of the week. Write it as if for a class of Year 7 students.",
        parentTip: "Designing curriculum is a form of synthesis — it requires knowing the content deeply enough to organise it for others. Evaluate the unit together: is it engaging? Are the questions genuinely interesting?",
        prompts: [
          { text: "Your one-week poetry unit:", type: "box" },
        ],
      },
      // 73
      {
        type: "multiple-choice",
        title: "Poetry Analysis: Master Level Check",
        instruction: "Choose the most analytically sophisticated answer.",
        questions: [
          {
            prompt: "The most complete poetry analysis connects:",
            options: [
              "A. Technique identification to effect identification",
              "B. Technique identification to effect to the poem's larger purpose and meaning",
              "C. Technique identification to the poet's biography",
              "D. Effect to the reader's personal emotional response",
            ],
            answer: "B. Technique identification to effect to the poem's larger purpose and meaning",
          },
          {
            prompt: "A reader who can argue for an unexpected interpretation of a poem using specific textual evidence is demonstrating:",
            options: [
              "A. That they have misread the poem",
              "B. Advanced analytical thinking — the ability to construct and defend a reading",
              "C. That poetry is subjective and anything goes",
              "D. That they disagree with the teacher",
            ],
            answer: "B. Advanced analytical thinking — the ability to construct and defend a reading",
          },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Write a Poetry Criticism Article",
        instruction: "Write a short poetry criticism article (10–12 sentences) about a poem you find significant. The article should read like something from a literary magazine: make an argument about the poem's achievement, support it with specific evidence, and write in a semi-formal, accessible register. It should be something a general educated reader would enjoy.",
        parentTip: "Writing for a public audience is the most demanding form of critical writing. Discuss: who would read this? What do they need to know? What would make them interested?",
        prompts: [
          { text: "Your poetry criticism article:", type: "box" },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Poetry Is the Most Efficient Form of Language",
        content: "Poetry does not just describe the world — it enacts it. The sound of a poem, the shape of it on the page, the weight of each syllable, the pauses between lines — all of these are part of the meaning. A poet has nothing to spare. Every word must do more work than it would in prose. This is why poetry rewards slow, repeated reading more than any other form. And it is why analysis of poetry — done well — is the most thorough training in close reading you can have. The skills you develop reading poetry carefully will make you a better reader of everything else.",
      },
      // 76
      {
        type: "open-response",
        title: "Write About a Poem That Changed You",
        instruction: "Write 6–8 sentences about a poem that has genuinely affected you — one that changed how you saw something, or made you feel something you had not felt before. Be honest and specific. Then write 2–3 sentences analysing what specific technique or moment created that effect.",
        parentTip: "The connection between analytical and personal reading is the deepest insight in literary study. Share your own experience of a poem that changed you.",
        prompts: [
          { text: "Your personal reflection:", type: "box" },
          { text: "Analytical comment on the specific technique that created the effect:", type: "lines", lines: 3 },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Write a Poem on a Difficult Subject",
        instruction: "Write a poem on a subject you find difficult to put into words — a feeling that is hard to name, an experience that resists easy description. Before writing, decide on one structural choice (line length, stanza form) and one device (a metaphor, a repeated image, a sound pattern). Annotate your poem when done.",
        parentTip: "This is the most personal and demanding creative task in the worksheet. There is no right or wrong here — the only criterion is that the poem attempts to do something real with language. Read it aloud together and listen.",
        prompts: [
          { text: "Your poem (annotated for devices):", type: "box" },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Analyse an Oodgeroo Noonuccal or Aboriginal Poem",
        instruction: "Find and read a poem by Oodgeroo Noonuccal (Kath Walker), or another Aboriginal or Torres Strait Islander poet. Write 5–7 sentences analysing how the poem uses language and form, and what it reveals about the poet's perspective, concerns, and cultural context.",
        parentTip: "Oodgeroo Noonuccal was one of Australia's most important poets and the first Aboriginal woman to publish a book of poetry. Her work is central to Australian literary heritage. Approach it with genuine respect and curiosity.",
        prompts: [
          { text: "Poem title and poet: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Poetry Analysis Synthesis",
        instruction: "Write a synthesis (8–10 sentences) of what you have learned about poetry analysis in this worksheet. What can you do now that you could not do before? What remains difficult? What is the most important insight about poetry and poetry analysis that you will carry forward?",
        parentTip: "This synthesis reflection closes the learning loop for poetry analysis. Read it together and celebrate the genuine intellectual growth.",
        prompts: [
          { text: "Your synthesis:", type: "box" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: The Poetry Collection",
        content: "Over the next month, build a personal poetry collection. Aim to find fifteen poems that matter to you — across different eras, different nationalities, different forms. For each one, copy out the line or image that most arrested you, and write one sentence about why. At the end of the month, look back over your collection and ask: what patterns do you notice in what you are drawn to? What do your choices reveal about you as a reader — and as a person?",
      },
      // 81–100 FINAL EXTENDING
      // 81
      {
        type: "open-response",
        title: "Write a Full Poetry Essay",
        instruction: "Write a complete analytical essay (intro + three TEEL paragraphs + conclusion, approximately 500 words) on any poem of your choosing. The essay should have a clear, original argument and demonstrate full analytical control.",
        parentTip: "This is the capstone essay of the poetry worksheet. Give it the time it deserves — planning, drafting, revising, and reading aloud before finalising.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Comparative Analysis: Two Poets, Same Theme",
        instruction: "Find two poems on the same theme by poets from different backgrounds or eras. Write a comparative essay (three paragraphs) arguing how each poet's unique context shapes their approach to the theme.",
        prompts: [
          { text: "Poem 1 and poet: ___________________________________________\nPoem 2 and poet: ___________________________________________\nYour comparative essay:", type: "box" },
        ],
      },
      // 83
      {
        type: "open-response",
        title: "Teach Poetry Analysis to Someone Younger",
        instruction: "Design a fifteen-minute poetry lesson for a Year 4 student. Include: one poem to read together, three questions to discuss, and one simple analytical task. Write the lesson plan and explain your choices.",
        prompts: [
          { text: "Your poetry lesson plan:", type: "box" },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Write About the Poetry of Silence",
        instruction: "Some poets argue that the most powerful thing in a poem is what is not said. Write 5–7 sentences exploring this idea with reference to specific poems you have read.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 85
      {
        type: "true-false",
        title: "Poetry Analysis: Final Synthesis Statements",
        instruction: "Mark T (true) or F (false). These test your deepest understanding.",
        statements: [
          { text: "Analysing poetry develops skills in close reading that transfer to all other forms of text.", answer: true },
          { text: "A poem can be fully understood in a single reading.", answer: false },
          { text: "The best poetry analysis connects specific technique to specific effect to broader purpose.", answer: true },
          { text: "Personal response and analytical argument are mutually exclusive in poetry criticism.", answer: false },
          { text: "Writing poetry develops different but complementary skills to analysing poetry.", answer: true },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Create a Poetry Analysis Reference Card",
        instruction: "Create a reference card for poetry analysis covering: the key devices (with definitions), the three levels of analysis (device / effect / purpose), useful analytical phrases, and a checklist for annotating a poem. Make it something you will actually use.",
        prompts: [
          { text: "Your poetry analysis reference card:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Analyse a Song Lyric as Poetry",
        instruction: "Choose a song lyric you find genuinely interesting as language. Treat it as a poem: annotate it for devices, analyse the imagery and tone, and write a TEEL paragraph about how the language works. Conclude with 2–3 sentences on whether you think song lyrics can be considered poetry.",
        parentTip: "Song lyric analysis is a legitimate and engaging form of poetry analysis. The same tools apply — and the familiarity of the material often reveals techniques the student had experienced but not consciously analysed.",
        prompts: [
          { text: "Song and artist: ___________________________________________\nYour analysis and TEEL paragraph:", type: "box" },
          { text: "Are song lyrics poetry? Your argument:", type: "lines", lines: 3 },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Portfolio: Your Best Poetry Analysis",
        instruction: "Select the best analytical paragraph or essay you have written in this worksheet. Copy it here and write a self-evaluation (4–5 sentences): what makes it your best work, and what would you improve?",
        prompts: [
          { text: "Your best work:", type: "box" },
          { text: "Self-evaluation:", type: "box" },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Write a Letter About Poetry",
        instruction: "Write a letter (8–10 sentences) to a friend who claims to hate poetry. Argue, with specific evidence from poems you have read in this worksheet, that poetry is worth engaging with. Write it in a register appropriate for a friend — honest, personal, and persuasive without being preachy.",
        parentTip: "This task connects analytical knowledge to genuine advocacy. Discuss: what is the most honest and persuasive case you can make for poetry to someone who is sceptical?",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Why Poetry Matters",
        content: "Poetry matters because it does something language rarely does: it slows everything down. In an age of speed — fast communication, instant information, constant distraction — poetry demands that you stop and pay attention to each word, each pause, each image. That practice of attention is transferable to every area of life and learning. Students who read poetry carefully become better readers of everything, more precise writers of everything, and more sensitive observers of everything. The effort of reading a difficult poem and finding your way through it is not just an academic exercise. It is a training in the practice of sustained, careful, patient attention.",
      },
      // 91
      {
        type: "open-response",
        title: "Your Poem — Revised and Published",
        instruction: "Return to the poem you wrote earlier in this worksheet. Revise it — add, cut, change the line breaks, choose better words, adjust the sounds. Then write a publication-ready version and a short author's note explaining your choices.",
        prompts: [
          { text: "Revised poem:", type: "box" },
          { text: "Author's note:", type: "lines", lines: 4 },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Comparative Reading: Poem and Prose on Same Subject",
        instruction: "Find a prose passage (from a novel, essay, or news article) and a poem on the same subject. Write 5–7 sentences comparing how the two forms handle the subject differently. What can the poem do that the prose cannot, and vice versa?",
        prompts: [
          { text: "Prose passage (source): ___________________________________________\nPoem (source): ___________________________________________\nYour comparison:", type: "box" },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Write a Poetry Manifesto",
        instruction: "Write a short manifesto (6–8 sentences) about what poetry is for — your own theory of what poetry should do, why it exists, and why it matters. Draw on the poems you have read in this worksheet as evidence.",
        parentTip: "A manifesto is a declaration of belief and intent. This is your child's own theory of poetry — take it seriously and discuss it.",
        prompts: [
          { text: "Your poetry manifesto:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Final Extended Analysis",
        instruction: "Write a complete analytical essay (500+ words) on the poem you found most rewarding in this worksheet. Argue for its significance and demonstrate the full range of your analytical skills.",
        prompts: [
          { text: "Your final essay:", type: "box" },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Reflection: The Journey Through Poetry",
        instruction: "Write a final synthesis (8–10 sentences) on what you have learned about reading, analysing, and writing poetry across this worksheet. What has changed in how you approach a poem? What will you continue to practise?",
        prompts: [
          { text: "Your synthesis:", type: "box" },
        ],
      },
      // 96
      {
        type: "multiple-choice",
        title: "Poetry Analysis: Final Mastery Questions",
        instruction: "Choose the most analytically sophisticated answer.",
        questions: [
          {
            prompt: "The goal of poetry analysis is best described as:",
            options: [
              "A. Identifying every technique in the poem",
              "B. Making a precise, evidence-based argument about how the poem creates meaning and achieves its purpose",
              "C. Deciding whether the poem is good or bad",
              "D. Summarising what the poem is about",
            ],
            answer: "B. Making a precise, evidence-based argument about how the poem creates meaning and achieves its purpose",
          },
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Create a Reading List",
        instruction: "Create an annotated reading list of ten poems you recommend — drawn from Australian and international poetry. For each, write two sentences: one summarising the poem, one explaining why you recommend it for a Year 7 student.",
        prompts: [
          { text: "Your annotated poetry reading list:", type: "box" },
        ],
      },
      // 98
      {
        type: "fill-in-blank",
        title: "Poetry Analysis Vocabulary — Final Check",
        instruction: "Complete each sentence with the most precise term.",
        sentences: [
          { text: "A ___ occurs when a line of poetry runs over into the next line without a pause.", blanks: ["enjambment"] },
          { text: "The repetition of similar vowel sounds within words is called ___.", blanks: ["assonance"] },
          { text: "The ___ of a poem is the larger idea or concern it explores beyond its literal subject.", blanks: ["theme"] },
          { text: "A shift in argument, mood, or direction within a poem is called a ___.", blanks: ["volta"] },
          { text: "The ___ is the voice through which a poem is told — not necessarily the poet themselves.", blanks: ["speaker / persona"] },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "A Letter to a Future Reader of Poetry",
        instruction: "Write a letter (8–10 sentences) to a future reader — someone who will encounter this worksheet in years to come. Tell them what to expect, what is difficult, what is rewarding, and what the most important insight about reading poetry is. Be genuine.",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 100 — FINAL SPARK
      {
        type: "spark",
        title: "Spark: The Poem That Is Yours",
        content: "This is the last activity of the poetry worksheet. Your task: find the poem that belongs to you — the one that, when you read it, feels like it was written for you. It may be one you discovered in this worksheet, or one you find in a library, online, or recommended by someone you trust. Copy it out by hand. Memorise the first stanza. Keep it. Read it again in a year and notice what has changed in your reading. Poets write for all time — which means they write for you, wherever you are when you find them.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "multiple-choice",
        title: "What Is Point of View?",
        instruction: "Choose the best definition of narrative point of view.",
        questions: [
          {
            prompt: "Narrative point of view refers to:",
            options: [
              "A. The main character's opinion on events",
              "B. The perspective from which a story is told — who tells it, and how much they know",
              "C. Whether the story is told in the past or present tense",
              "D. The author's personal beliefs expressed through the text",
            ],
            answer: "B. The perspective from which a story is told — who tells it, and how much they know",
          },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Match Point of View to Definition",
        instruction: "Draw a line to match each narrative perspective with its definition.",
        parentTip: "Understanding these three perspectives is foundational for all fiction analysis. Discuss an example of each from stories you have read together.",
        left: ["First person", "Third person limited", "Third person omniscient"],
        right: [
          "The narrator knows the inner thoughts and feelings of all characters",
          "The narrator is a character in the story, using 'I'",
          "The narrator follows one character closely and knows only that character's thoughts",
        ],
      },
      // 3
      {
        type: "true-false",
        title: "Narrative Point of View",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "A first-person narrator always tells the complete truth about events.", answer: false },
          { text: "Third person omniscient narrators can reveal the inner thoughts of multiple characters.", answer: true },
          { text: "The choice of narrative perspective has no effect on how readers experience a story.", answer: false },
          { text: "An unreliable narrator may distort or withhold information from the reader.", answer: true },
          { text: "A third person limited narrator is restricted to one character's perspective and knowledge.", answer: true },
        ],
      },
      // 4
      {
        type: "circle-correct",
        title: "Identify the Point of View",
        instruction: "Circle the correct point of view for each extract.",
        questions: [
          { prompt: "'I didn't know why she had looked at me that way, but it unsettled me for the rest of the day.'", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "'She watched him leave, and in the kitchen below, her mother was already beginning to cry.'", options: ["First person", "Third person limited", "Third person omniscient"] },
          { prompt: "'He walked to the window, wondering what she meant. He would never know — and she, across the city, was already forgetting she had said it.'", options: ["First person", "Third person limited", "Third person omniscient"] },
        ],
      },
      // 5
      {
        type: "multiple-choice",
        title: "Why Point of View Matters",
        instruction: "Choose the most accurate answer for each question.",
        questions: [
          {
            prompt: "Why might an author choose first-person narration?",
            options: [
              "A. To give the reader access to every character's thoughts",
              "B. To create intimacy and immediacy, and to potentially make the narrator unreliable",
              "C. To make the story seem more objective and reliable",
              "D. Because first-person narration is easier to write",
            ],
            answer: "B. To create intimacy and immediacy, and to potentially make the narrator unreliable",
          },
          {
            prompt: "What is the main limitation of first-person narration?",
            options: [
              "A. The narrator cannot be interesting",
              "B. The reader only knows what the narrator knows and perceives",
              "C. The story must always be told in the past tense",
              "D. The narrator cannot describe other characters",
            ],
            answer: "B. The reader only knows what the narrator knows and perceives",
          },
        ],
      },
      // 6
      {
        type: "sorting",
        title: "Sort: Features of Different Points of View",
        instruction: "Sort each feature into the correct column.",
        columns: ["First Person", "Third Person Limited", "Third Person Omniscient"],
        items: [
          { label: "Uses 'I' as the narrator" },
          { label: "Narrator knows all characters' thoughts" },
          { label: "Narrator closely follows one character" },
          { label: "Can create an unreliable narrator" },
          { label: "Uses 'he', 'she', 'they'" },
          { label: "Creates a 'god-like' perspective" },
          { label: "Reader has access only to narrator's perceptions" },
          { label: "Can shift between multiple characters' inner worlds" },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Narrative Technique Analysis",
        instruction: "Answer each question about the short story you have read, supporting your response with specific evidence from the text.",
        parentTip: "Every answer should include a quote or specific reference. Vague responses ('the setting creates atmosphere') are not analytical. Specific ones are: 'The story's setting in a remote outback town isolates the characters from any help, making the central conflict feel inescapable.'",
        prompts: [
          { text: "Short story title and author: ___________________________________________\n\nWhat point of view is used? Quote one sentence that makes this clear, and explain why this perspective might serve the author's purpose.", type: "lines", lines: 4 },
          { text: "Find one moment where the author slows the pacing (gives a lot of detail to a short period of time). What is happening in this moment, and why do you think the author slows down here?", type: "lines", lines: 3 },
          { text: "How does the setting contribute to the story's meaning? Be specific about the time, place, and how these create particular constraints or possibilities for the characters.", type: "lines", lines: 3 },
          { text: "Find one piece of dialogue and explain what it reveals about character or relationship that the narration does not say directly.", type: "lines", lines: 3 },
        ],
      },
      // 8
      {
        type: "fill-in-blank",
        title: "Narrative Pacing — Key Terms",
        instruction: "Complete each definition of pacing technique.",
        parentTip: "Pacing — how fast or slow time moves in a story — is one of the key tools of narrative control. Where the author slows down is where they are telling you something matters.",
        sentences: [
          { text: "___ occurs when the author slows time down, giving extensive detail to a short period.", blanks: ["Scene / Expansion"] },
          { text: "___ occurs when the author compresses time — summarising days, weeks, or years in a few sentences.", blanks: ["Summary / Compression"] },
          { text: "When the narrative pauses entirely to provide background information, this is called ___.", blanks: ["exposition / backstory"] },
          { text: "An ___ is a moment when the narrative jumps back in time to an earlier event.", blanks: ["flashback"] },
        ],
      },
      // 9
      {
        type: "true-false",
        title: "Setting in Short Fiction",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Setting includes both the physical place and the time period in which a story is set.", answer: true },
          { text: "In short fiction, setting is usually just background information with no effect on meaning.", answer: false },
          { text: "Setting can constrain or enable what characters are able to do.", answer: true },
          { text: "The weather or season in a story is sometimes used to reflect the characters' emotional state.", answer: true },
          { text: "A story set in a specific historical period can use that period to illuminate broader social or political themes.", answer: true },
        ],
      },
      // 10
      {
        type: "multiple-choice",
        title: "Dialogue as a Narrative Tool",
        instruction: "Choose the most accurate answer about the function of dialogue in short fiction.",
        questions: [
          {
            prompt: "What can dialogue reveal that narration cannot always achieve as efficiently?",
            options: [
              "A. The physical appearance of characters",
              "B. The exact time and place of events",
              "C. Character voice, personality, relationships, and what is unsaid or avoided",
              "D. The author's background and experience",
            ],
            answer: "C. Character voice, personality, relationships, and what is unsaid or avoided",
          },
          {
            prompt: "When a character says 'I'm fine' but the narration tells us they are shaking, this creates:",
            options: [
              "A. A grammatical error in the story",
              "B. Dramatic irony — the reader knows something the character is denying",
              "C. An inconsistency in the author's writing",
              "D. An example of first-person narration",
            ],
            answer: "B. Dramatic irony — the reader knows something the character is denying",
          },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Characterisation in Short Fiction",
        instruction: "Short stories have less space for characterisation than novels. Answer each question about how character is built in your story.",
        parentTip: "Discuss the economy of characterisation in short fiction — every detail must work hard. In a novel, a character might have twenty scenes to develop; in a short story, they might have three.",
        prompts: [
          { text: "How does the author introduce the main character? What do we learn in the first appearance?", type: "lines", lines: 3 },
          { text: "What does the character want? What is stopping them?", type: "lines", lines: 2 },
          { text: "Find one moment of characterisation that reveals something significant through action, dialogue, or thought rather than direct description.", type: "lines", lines: 3 },
        ],
      },
      // 12
      {
        type: "sorting",
        title: "Sort: Direct or Indirect Characterisation?",
        instruction: "Direct characterisation tells us what a character is like explicitly. Indirect characterisation shows us through action, dialogue, and thought. Sort each example into the correct column.",
        columns: ["Direct Characterisation", "Indirect Characterisation"],
        items: [
          { label: "'She was kind but stubborn.'" },
          { label: "She gave her last coin to the child begging at the corner, then walked home in the rain rather than ask for help." },
          { label: "'He was the sort of person who always found something wrong.'" },
          { label: "He sent back his meal twice and left no tip." },
          { label: "'The boy was frightened of everything.'" },
          { label: "The boy turned off all the lights before checking under the bed, checking the wardrobe, checking behind the door — in that order, every night." },
        ],
      },
      // 13
      {
        type: "fill-in-blank",
        title: "Conflict in Short Fiction",
        instruction: "Short stories typically turn on a central conflict. Complete each definition.",
        sentences: [
          { text: "Character vs character: a conflict between ___ people or groups.", blanks: ["two or more"] },
          { text: "Character vs self: a conflict within a character's own ___, values, or desires.", blanks: ["mind / conscience / psychology"] },
          { text: "Character vs nature: a conflict between a character and ___ forces.", blanks: ["natural / environmental"] },
          { text: "Character vs society: a conflict between a character and the ___ or ___ around them.", blanks: ["rules / expectations / norms", "community / world"] },
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Identify the Conflict",
        instruction: "Identify and describe the central conflict in your chosen short story. What type of conflict is it? How is it established? How is it developed or resolved?",
        parentTip: "Every strong short story has a central conflict that drives the action and reveals character. Discuss: what type of conflict is at the heart of this story?",
        prompts: [
          { text: "Type of conflict: ___________________________________________\nHow it is established: ___________________________________________\nHow it is developed or resolved:", type: "lines", lines: 4 },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: The Short Story Is a Form of Precision",
        content: "A short story is not a short novel — it is a completely different form. Where a novel can build over hundreds of pages, a short story must accomplish everything in a matter of pages. This means every choice is amplified: the first sentence must hook the reader immediately, every scene must earn its place, every character detail must do multiple jobs at once, and the ending must reverberate beyond the final word. When you analyse a short story, ask: what is here by accident, and what is here by choice? In a well-crafted short story, the answer is almost everything is there by choice.",
      },
      // 16
      {
        type: "open-response",
        title: "Analyse the Opening",
        instruction: "The opening of a short story is one of its most important parts — it sets up expectations, establishes voice, and makes an implicit promise to the reader. Write 4–5 sentences analysing the opening of your chosen story: what is introduced, what tone is established, what does the reader immediately want to know?",
        parentTip: "Read the opening aloud together before analysing it. How does it feel? What questions does it immediately raise in the reader's mind?",
        prompts: [
          { text: "Opening lines of the story: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 17
      {
        type: "multiple-choice",
        title: "The Ending of a Short Story",
        instruction: "Short story endings are often deliberately ambiguous or understated. Choose the most accurate answer.",
        questions: [
          {
            prompt: "A short story that ends without resolving every question raised in the narrative is likely doing this:",
            options: [
              "A. Failing to provide a satisfying conclusion",
              "B. Deliberately leaving space for the reader's imagination and reflection",
              "C. Showing that the author ran out of ideas",
              "D. Following a convention that endings must always be incomplete",
            ],
            answer: "B. Deliberately leaving space for the reader's imagination and reflection",
          },
          {
            prompt: "An 'epiphany ending' (popularised by writers like James Joyce) is one where:",
            options: [
              "A. The story ends with a dramatic plot twist",
              "B. A character or the reader has a sudden moment of insight or realisation",
              "C. The story ends with the death of the main character",
              "D. The narrative returns to where it began",
            ],
            answer: "B. A character or the reader has a sudden moment of insight or realisation",
          },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Analyse the Ending",
        instruction: "Write 4–5 sentences analysing the ending of your chosen short story. Is it resolved or unresolved? Expected or surprising? How does the final image or statement connect to the story's central concern?",
        parentTip: "Short story endings are often rich analytical territory. Discuss: does the ending feel earned? Does it reframe the story you have just read?",
        prompts: [
          { text: "Final lines of the story: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Write Your First Analytical Paragraph on a Short Story",
        instruction: "Write a TEEL analytical paragraph responding to this question: How does one specific narrative technique in this story serve the author's purpose? Label each part.",
        parentTip: "This is a complex question. Discuss it together first: what do you think the author's purpose is? Which technique most directly serves that purpose? Which quote most clearly demonstrates both the technique and its effect?",
        prompts: [
          { text: "Your TEEL paragraph (label T / E / E / L):", type: "box" },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: Rewrite the Ending",
        content: "Take the ending of your chosen short story and rewrite it three different ways: one ending that is more resolved and hopeful, one that is more bleak and final, and one that is more ambiguous and open. Then discuss with your parent or guardian: which ending do you each prefer, and why? What does the author's choice of ending reveal about their purpose? What does your preference reveal about you as a reader?",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "open-response",
        title: "Analytical Paragraph on Author's Purpose",
        instruction: "Write a TEEL analytical paragraph responding to: How does one specific narrative technique in this story serve the author's purpose?",
        parentTip: "Discuss: what do you think the author's purpose is? Which technique most directly serves that purpose? Which quote most clearly demonstrates both the technique and its effect?",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
        ],
      },
      // 22
      {
        type: "fill-in-blank",
        title: "Tone and Mood in Short Fiction",
        instruction: "Complete each sentence about tone and mood.",
        parentTip: "Tone = the narrator's or author's attitude. Mood = the emotional atmosphere created for the reader. They are related but distinct.",
        sentences: [
          { text: "Tone is the ___ or ___ conveyed through the narrative voice and language choices.", blanks: ["attitude / perspective", "manner / register"] },
          { text: "Mood is the ___ atmosphere created for the reader by the language, setting, and pacing.", blanks: ["emotional / atmospheric"] },
          { text: "A story can have a ___ tone (ironic, detached) but create a ___ mood (tense, unsettling).", blanks: ["cool / dry", "dark / ominous"] },
          { text: "Tone and mood together shape how the reader ___ the story's events and characters.", blanks: ["experiences / interprets / feels about"] },
        ],
      },
      // 23
      {
        type: "open-response",
        title: "Analyse Tone and Mood",
        instruction: "Write 4–5 sentences analysing the tone and mood of your chosen short story. What is the narrative voice's attitude? What emotional atmosphere is created? What specific language choices create these effects?",
        parentTip: "Tone and mood are connected but distinct. Discuss the difference — the tone might be wry and ironic (the narrator's attitude) while the mood might be melancholy (what the reader feels).",
        prompts: [
          { text: "Your tone and mood analysis:", type: "box" },
        ],
      },
      // 24
      {
        type: "multiple-choice",
        title: "Unreliable Narrators",
        instruction: "Choose the most accurate answer about unreliable narrators.",
        questions: [
          {
            prompt: "An unreliable narrator is one who:",
            options: [
              "A. Makes factual errors in describing events",
              "B. Cannot be fully trusted to give an accurate account — because of bias, limited knowledge, self-deception, or mental state",
              "C. Tells the story in a confusing order",
              "D. Is always a villain in disguise",
            ],
            answer: "B. Cannot be fully trusted to give an accurate account — because of bias, limited knowledge, self-deception, or mental state",
          },
          {
            prompt: "Why might an author deliberately choose to use an unreliable narrator?",
            options: [
              "A. To confuse the reader",
              "B. To create dramatic irony, to explore self-deception, or to show how perspective shapes 'truth'",
              "C. Because first-person narration is easier to write",
              "D. To make the story shorter",
            ],
            answer: "B. To create dramatic irony, to explore self-deception, or to show how perspective shapes 'truth'",
          },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Respond to the Story",
        instruction: "Write a genuine personal response (5–7 sentences): what did you think of this story? What did it make you feel or think about? Was the author's purpose achieved for you as a reader?",
        parentTip: "This response should be honest, not a performance. There is no right answer — the goal is a thoughtful, evidence-informed personal position.",
        prompts: [
          { text: "Write your response here:", type: "box" },
        ],
      },
      // 26
      {
        type: "sorting",
        title: "Sort: Plot Elements",
        instruction: "Sort each element into the correct column of the traditional narrative arc.",
        columns: ["Exposition (introduction)", "Rising action (complication)", "Climax (turning point)", "Falling action (consequence)", "Resolution (conclusion)"],
        items: [
          { label: "The setting and main characters are introduced." },
          { label: "The central conflict reaches its highest point of tension." },
          { label: "The aftermath of the climax is shown." },
          { label: "The conflict is introduced and begins to develop." },
          { label: "The conflict is resolved or addressed." },
        ],
      },
      // 27
      {
        type: "fill-in-blank",
        title: "Narrative Time",
        instruction: "Complete each sentence about how short stories manipulate time.",
        sentences: [
          { text: "A ___ returns to an earlier event in the story's timeline.", blanks: ["flashback"] },
          { text: "A ___ hints at events that will happen later in the story.", blanks: ["foreshadowing"] },
          { text: "When the narrator summarises a long period of time in a few sentences, this is called ___.", blanks: ["summary / narrative compression"] },
          { text: "When the narrative focuses on one moment in great detail, stretching its duration, this is called ___.", blanks: ["scene / expansion"] },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Identify Foreshadowing",
        instruction: "Find one example of foreshadowing in your chosen short story (a hint earlier in the story about what will happen later). Quote it, explain what it foreshadows, and explain the effect it creates — does it create anticipation, dread, irony, or something else?",
        parentTip: "Foreshadowing is one of the most satisfying devices to find because it shows the author's craft in constructing the whole story, not just the moment. On a second reading, foreshadowing is often more visible.",
        prompts: [
          { text: "Foreshadowing example: ___________________________________________\nWhat it foreshadows: ___________________________________________\nEffect created:", type: "lines", lines: 3 },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Write an Alternative Point of View",
        instruction: "Take a scene from your chosen short story and rewrite it from a different character's point of view. If it was written in first person from Character A's perspective, rewrite it in first person from Character B's perspective, or in third person limited following a different character. Write 4–6 sentences, then write 2–3 sentences analysing what changes when the perspective shifts.",
        parentTip: "Rewriting in a different perspective is one of the most illuminating exercises in fiction — it makes the original perspective's limitations and biases visible.",
        prompts: [
          { text: "Scene rewritten from a different perspective:", type: "box" },
          { text: "What changes when the perspective shifts:", type: "lines", lines: 3 },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: The Short Story as a Moment of Change",
        content: "One way to understand the short story form is this: almost every short story is about a moment when something changes. The change may be external (something happens) or internal (a character understands something they did not before), or both. The short story's job is to capture this moment of change precisely. This is why the form is ideal for exploring single, focused human experiences — a grief, a realisation, a decision, a loss, an encounter. When you are reading or writing a short story, always ask: what changes? That change is usually the story's heart.",
      },
      // 31
      {
        type: "open-response",
        title: "What Changes in the Story?",
        instruction: "Write 4–5 sentences explaining what changes in your chosen short story. Consider: does a character's understanding change? Does a relationship change? Does the reader's understanding of a character change? Is the change external or internal?",
        parentTip: "Identifying what changes — and how — is one of the core skills of fiction analysis. Discuss: is the change satisfying? Does it feel earned?",
        prompts: [
          { text: "Your analysis of change in the story:", type: "box" },
        ],
      },
      // 32
      {
        type: "fill-in-blank",
        title: "Narrative Voice",
        instruction: "Complete each sentence about narrative voice.",
        sentences: [
          { text: "Narrative voice refers to the distinctive ___ and ___ of the story's narrator.", blanks: ["personality", "style / manner / tone"] },
          { text: "A ___ narrative voice feels warm, personal, and direct; a ___ voice feels more detached and observational.", blanks: ["close / intimate", "distant / ironic"] },
          { text: "The narrative voice is created through word choice (___ ), sentence structure (___ ), and the kinds of ___ the narrator makes.", blanks: ["diction", "syntax", "observations / comments"] },
          { text: "An author's ___ voice — the voice they use across many works — can be as recognisable as a physical signature.", blanks: ["distinctive / authorial / signature"] },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Describe the Narrative Voice",
        instruction: "Write 4–5 sentences describing the narrative voice of your chosen short story. What is its tone? Is it close or distant, warm or cool, ironic or earnest? What specific language features create this voice?",
        parentTip: "Narrative voice is one of the most distinctive elements of a writer's style. Discuss: how does the voice make you feel as a reader? Does it invite you in or keep you at a distance?",
        prompts: [
          { text: "Your analysis of the narrative voice:", type: "box" },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Symbol and Theme",
        instruction: "Find one symbol in your chosen short story — an object, place, or recurring image that carries a meaning beyond its literal function. Write 4–5 sentences analysing what the symbol represents and how it connects to the story's central theme.",
        parentTip: "Short story symbols are often understated. They appear more than once, or at a significant moment. Discuss: is there any object or image in this story that keeps appearing, or appears at a key moment?",
        prompts: [
          { text: "Symbol: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 35
      {
        type: "true-false",
        title: "Theme in Short Fiction",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "A theme is a moral lesson explicitly stated at the end of a story.", answer: false },
          { text: "Theme is the larger idea or concern that a story explores through its specific events and characters.", answer: true },
          { text: "A story can explore more than one theme simultaneously.", answer: true },
          { text: "Theme and subject are the same thing.", answer: false },
          { text: "Identifying a theme requires moving from the specific events of the story to the broader ideas they suggest.", answer: true },
        ],
      },
      // 36
      {
        type: "open-response",
        title: "Identify the Theme",
        instruction: "Write 3–4 sentences identifying the central theme of your chosen short story. Distinguish between the subject (what the story is literally about) and the theme (the larger idea it explores). Give specific evidence from the story to support your theme identification.",
        parentTip: "Theme identification is one of the core skills of literary analysis. Discuss: the story might be about a specific family in a specific situation — but what is it really exploring about human experience more broadly?",
        prompts: [
          { text: "Subject: ___________________________________________\nTheme: ___________________________________________\nEvidence from the story:", type: "lines", lines: 3 },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Two TEEL Paragraphs on the Short Story",
        instruction: "Write two TEEL analytical paragraphs on your chosen short story. The first should analyse a language or technique choice; the second should analyse a structural or narrative choice. Together they should build a coherent argument about the story's meaning.",
        parentTip: "Plan the two arguments together before writing. The two paragraphs should be making different points that build on each other, not covering the same ground twice.",
        prompts: [
          { text: "Paragraph 1 — Language/technique:", type: "box" },
          { text: "Paragraph 2 — Structure/narrative:", type: "box" },
        ],
      },
      // 38
      {
        type: "fill-in-blank",
        title: "Australian Short Story Writers",
        instruction: "Complete each sentence about Australian short story writers.",
        parentTip: "Australian short fiction is rich and distinctive. If you have not read these writers, seek out one story by each.",
        sentences: [
          { text: "Henry Lawson is a celebrated early Australian short story writer known for stories about ___ life in the late 19th and early 20th centuries.", blanks: ["bush / outback / working-class"] },
          { text: "Tim Winton is a contemporary Australian author whose stories often explore themes of ___ and ___.", blanks: ["identity", "belonging / family / place / community"] },
          { text: "Melissa Lucashenko is an Australian author of ___ heritage whose work explores Indigenous experience and identity.", blanks: ["Goorie / Aboriginal / Murri"] },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Read and Analyse an Australian Short Story",
        instruction: "Read a short story by an Australian author (suggestions: Henry Lawson, Tim Winton, Kate Grenville, Peter Carey, or any contemporary Australian writer). Write 5–6 sentences analysing what is distinctively Australian about the story's concerns, setting, voice, or characters.",
        parentTip: "Australian short fiction has distinctive concerns — bush versus city, isolation, identity, the relationship between people and the land, class. Discuss what you notice as distinctively Australian.",
        prompts: [
          { text: "Story title and author: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Write Your First Short Story",
        content: "Write a short story (400–600 words). Before you begin, make three decisions: (1) Who is the narrator and what is their perspective? (2) What changes in the story — what is the story's central moment of transformation? (3) What single concrete image or detail will carry the most weight symbolically? Write the story, then annotate it: label the narrative perspective, the moment of change, and any deliberate pacing or characterisation choices you made.",
      },
      // ── CONSOLIDATING 41–80 ───────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Comparative Analysis: Two Short Stories",
        instruction: "Write three sentences comparing the narrative perspective of two short stories you have read. How does each author's choice of perspective shape what the reader knows and feels?",
        parentTip: "Short story comparison is particularly useful for seeing how different choices lead to different effects. Even two stories by the same author can make very different perspective choices.",
        prompts: [
          { text: "Story 1: ___________________________________________\nStory 2: ___________________________________________\nYour comparison (3 sentences):", type: "lines", lines: 5 },
        ],
      },
      // 42
      {
        type: "multiple-choice",
        title: "Dramatic Irony in Short Fiction",
        instruction: "Choose the most accurate answer about dramatic irony.",
        questions: [
          {
            prompt: "Dramatic irony occurs when:",
            options: [
              "A. A character says something ironic to another character",
              "B. The reader knows something that a character does not",
              "C. The author uses sarcasm in the narration",
              "D. The ending is the opposite of what was expected",
            ],
            answer: "B. The reader knows something that a character does not",
          },
          {
            prompt: "Dramatic irony can create what effect for the reader?",
            options: [
              "A. Confusion about the plot",
              "B. Tension, dread, or pathos — as the reader watches events unfold knowing something the character does not",
              "C. A sense of surprise",
              "D. Humour only",
            ],
            answer: "B. Tension, dread, or pathos — as the reader watches events unfold knowing something the character does not",
          },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Identify and Analyse Dramatic Irony",
        instruction: "Find an example of dramatic irony in your short story (or in a story you know well). Explain what the reader knows that the character does not, and analyse what effect this creates.",
        parentTip: "Dramatic irony is one of the most effective tools for creating tension and pathos. Discuss: how does knowing more than the character change your experience as a reader?",
        prompts: [
          { text: "Your analysis of dramatic irony:", type: "box" },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Write a Story Opening Using Different Techniques",
        instruction: "Write three different openings for the same story — one starting in media res (in the middle of the action), one starting with character description, and one starting with setting. Then write 2–3 sentences comparing the effect of each.",
        parentTip: "The opening of a story is one of the most important craft decisions a writer makes. Discuss: which opening would most make you want to keep reading?",
        prompts: [
          { text: "Opening 1 (in media res):", type: "lines", lines: 3 },
          { text: "Opening 2 (character description):", type: "lines", lines: 3 },
          { text: "Opening 3 (setting):", type: "lines", lines: 3 },
          { text: "Which is most effective and why:", type: "lines", lines: 2 },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: The Economy of the Short Story",
        content: "The short story is the most economical of all narrative forms. Every sentence must earn its place. This has a powerful implication for analysis: in a well-crafted short story, almost nothing is accidental. If a colour is mentioned twice, it is probably significant. If a character's name has an unusual etymology, it may be deliberate. If the story ends on a particular image, that image is almost certainly the story's symbolic centre. Short story analysis rewards the reader who notices the details that others skim past. Slow down more than you think you need to.",
      },
      // 46
      {
        type: "open-response",
        title: "Micro-Analysis: One Paragraph",
        instruction: "Choose one paragraph from your short story and do a complete micro-analysis of it: every sentence, every significant word choice, every structural decision. Write 6–8 sentences discussing what you find. This kind of close reading at the sentence level is the foundation of all literary analysis.",
        parentTip: "Paragraph-level micro-analysis is genuinely difficult and genuinely valuable. Work through it slowly together — what is every word doing here?",
        prompts: [
          { text: "Chosen paragraph: ___________________________________________\nYour micro-analysis:", type: "box" },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Write a Complete Short Story Analysis Essay",
        instruction: "Write a complete analytical essay (intro + three TEEL paragraphs + conclusion, approximately 400 words) on your chosen short story. The essay should make a clear argument about what the story is doing and how its craft serves its purpose.",
        parentTip: "This is the most demanding writing task so far in this worksheet. Plan the argument carefully — what are the three most interesting analytical claims you can make about this story?",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 48
      {
        type: "fill-in-blank",
        title: "The Short Story Tradition",
        instruction: "Complete each sentence about the history and tradition of the short story.",
        sentences: [
          { text: "The modern short story developed significantly in the 19th century, partly through the work of writers like Anton ___ (Russia) and Edgar Allan ___ (USA).", blanks: ["Chekhov", "Poe"] },
          { text: "Kate Chopin, a 19th-century American writer, is known for short stories that explored ___ and ___.", blanks: ["women's independence", "desire / identity / constraint"] },
          { text: "Henry Lawson used the short story to capture the lives of ___ Australians in the late 19th century.", blanks: ["working-class / rural / outback"] },
        ],
      },
      // 49
      {
        type: "true-false",
        title: "Short Story Analysis — Advanced Concepts",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "In short fiction, what is left out of a story can be as significant as what is included.", answer: true },
          { text: "A short story should always explain everything that happens to the reader.", answer: false },
          { text: "The narrative perspective shapes what information the reader can access.", answer: true },
          { text: "Setting is always just background in a short story.", answer: false },
          { text: "A well-crafted short story ending often makes the reader reread or reconsider earlier events.", answer: true },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Synthesis: What Makes a Great Short Story?",
        instruction: "Write a personal critical argument (6–8 sentences) about what makes a short story great. Use at least one specific short story you have read as your evidence. Your argument should be specific, defensible, and original.",
        parentTip: "This is a genuine critical argument. Share your own view — what makes a short story great? This is a real and interesting question in literary criticism.",
        prompts: [
          { text: "Your argument:", type: "box" },
        ],
      },
      // 51–80 EXTENDING
      // 51
      {
        type: "open-response",
        title: "Analyse a Morally Ambiguous Character",
        instruction: "Write a TEEL paragraph analysing a character in your short story who cannot be simply labelled good or bad. Your topic sentence should reflect the complexity. Your evidence should show a moment where the ambiguity is most visible.",
        prompts: [
          { text: "Character: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Write the Story from a Different Genre",
        instruction: "Take the core situation or events from your chosen short story and transpose them into a different genre: what would this story look like as science fiction? As a fairy tale? As a contemporary realist story set in Australia today? Write the opening paragraph (5–7 sentences) of the transposed version and then write 2–3 sentences analysing how the genre change affects the meaning.",
        prompts: [
          { text: "Transposed opening:", type: "box" },
          { text: "How genre change affects meaning:", type: "lines", lines: 3 },
        ],
      },
      // 53
      {
        type: "multiple-choice",
        title: "Narrative Structure in Short Fiction",
        instruction: "Choose the most accurate answer.",
        questions: [
          {
            prompt: "In media res means:",
            options: [
              "A. At the end of the story",
              "B. In the middle of the action — starting with events already underway",
              "C. In the narrator's memory",
              "D. In formal academic language",
            ],
            answer: "B. In the middle of the action — starting with events already underway",
          },
          {
            prompt: "A circular narrative structure is one that:",
            options: [
              "A. Has no clear resolution",
              "B. Returns to the same image, event, or setting with which it began",
              "C. Goes around in circles without making progress",
              "D. Uses flashbacks throughout",
            ],
            answer: "B. Returns to the same image, event, or setting with which it began",
          },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Analyse Narrative Structure",
        instruction: "Write 4–5 sentences analysing the narrative structure of your chosen short story. Does it follow a linear structure? Does it use flashbacks or time jumps? Does it begin in media res or with a traditional exposition? How does the structure serve the story's purpose?",
        prompts: [
          { text: "Your structural analysis:", type: "box" },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Write a Story Using a Non-Linear Structure",
        instruction: "Write a short piece (250–350 words) that tells a story using a non-linear structure — perhaps starting with the ending and working backwards, or alternating between past and present. Annotate it when done, labelling your structural choices.",
        parentTip: "Non-linear structure can create dramatic irony, suspense, and thematic resonance. Discuss: why might a story be told out of chronological order?",
        prompts: [
          { text: "Your non-linear story (annotated):", type: "box" },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Analyse Setting as Constraint",
        instruction: "Write 4–5 sentences arguing that the setting of your chosen short story functions as a constraint on the characters — that the place and time make certain outcomes more likely or certain possibilities unavailable. What would be different if the story were set elsewhere or in a different time?",
        prompts: [
          { text: "Your analysis:", type: "box" },
        ],
      },
      // 57
      {
        type: "fill-in-blank",
        title: "Chekhov's Gun",
        instruction: "Anton Chekhov's principle states that every element of a story should be necessary. Complete each sentence about this principle.",
        sentences: [
          { text: "The principle known as Chekhov's Gun states: if you introduce a ___ in the first chapter, it must be ___ by the final chapter.", blanks: ["gun / significant detail", "used / fired / resolved"] },
          { text: "Applied to short fiction, this means that every detail the author includes should serve a ___ purpose in the story.", blanks: ["narrative / thematic / structural"] },
          { text: "When a detail appears in a story and seems initially unimportant but later becomes significant, this is known as ___ the detail's significance.", blanks: ["revealing / fulfilling / paying off"] },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Apply Chekhov's Gun",
        instruction: "Identify one detail in your short story that initially seems minor but turns out to be significant later in the narrative. Write 4–5 sentences analysing how the author plants and then reveals this detail.",
        prompts: [
          { text: "The detail: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Short Story Analysis: Context",
        instruction: "Research the context in which your chosen short story was written. Write 5–6 sentences explaining how the historical, social, or biographical context enriches your reading of the story. How does knowing this context change or deepen your interpretation?",
        prompts: [
          { text: "Context: ___________________________________________\nYour contextual analysis:", type: "box" },
        ],
      },
      // 60 — SPARK
      {
        type: "spark",
        title: "Spark: Write a Short Story with a Constraint",
        content: "Write a short story (300–400 words) under one of these constraints: (A) The story must be told entirely in dialogue — no narration, no description, only what characters say. (B) The story must never name any character — refer to them only as 'she', 'he', 'the old man', 'the girl'. (C) The story must be set in one room and not leave it. Writing under constraint is one of the oldest creative exercises — limitations force creativity. After writing, discuss: what did the constraint force you to do that you would not have done otherwise?",
      },
      // 61–80
      // 61
      {
        type: "open-response",
        title: "Comparative Essay: Two Short Stories",
        instruction: "Write a three-paragraph comparative essay on two short stories you have read. Each paragraph should compare a different aspect: (1) narrative perspective, (2) setting and its function, (3) which story you find more effective and why.",
        prompts: [
          { text: "Story 1: ___________________________________________\nStory 2: ___________________________________________\nYour comparative essay:", type: "box" },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Analyse the White Space — What the Story Omits",
        instruction: "Write 4–5 sentences analysing what your chosen short story deliberately leaves out or does not explain. What gaps are there in the narrative? What is never said or shown? Why might the author have made these omissions, and what effect do they create?",
        prompts: [
          { text: "Your analysis of omission and white space:", type: "box" },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Write a Critical Review of a Short Story",
        instruction: "Write a short story review (8–10 sentences) for a literary publication. Evaluate the story: make a specific argument about its strengths and weaknesses, support it with textual evidence, and write in a register appropriate for an educated general audience.",
        prompts: [
          { text: "Your review:", type: "box" },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Design a Short Story Reading Unit",
        instruction: "Design a one-week study unit for a short story of your choice. Include: learning objectives, daily activities (Day 1: reading, Day 2: annotation, Day 3: discussion, Day 4: analysis writing, Day 5: sharing and reflection), and the key analytical question you would ask at the end of the week.",
        prompts: [
          { text: "Your unit design:", type: "box" },
        ],
      },
      // 65
      {
        type: "multiple-choice",
        title: "Short Story and Social Critique",
        instruction: "Choose the most accurate answer.",
        questions: [
          {
            prompt: "A short story that presents a struggling working-class character against an indifferent society might have the purpose of:",
            options: [
              "A. Providing entertainment only",
              "B. Critiquing social inequality and inviting the reader to feel the injustice from the inside",
              "C. Arguing for a specific political party",
              "D. Showing that poverty is inevitable",
            ],
            answer: "B. Critiquing social inequality and inviting the reader to feel the injustice from the inside",
          },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Short Story and Social Context",
        instruction: "Write 5–6 sentences arguing that your chosen short story engages with a specific social, political, or cultural concern. What does the story say about the world it depicts? Does it challenge or reinforce social norms?",
        prompts: [
          { text: "Your analysis:", type: "box" },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Write Your Own Short Story — Revised",
        instruction: "Return to the short story you wrote earlier in this worksheet. Revise it with what you have learned: improve the opening, sharpen the dialogue, strengthen the ending. Write a final polished version and an author's note explaining three specific changes you made and why.",
        prompts: [
          { text: "Revised story:", type: "box" },
          { text: "Author's note (three specific changes and reasons):", type: "lines", lines: 5 },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "The Significance of the Title",
        instruction: "The title of a short story is its first communication with the reader — and often its most compressed. Write 3–4 sentences analysing the title of your chosen short story: what does it tell the reader before the story begins? Does it change meaning on re-reading, once the story is known? Is it ironic, literal, or symbolic?",
        prompts: [
          { text: "Your analysis of the title:", type: "lines", lines: 4 },
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Analyse a Moment of Silence or Hesitation",
        instruction: "Find a moment in your story where a character does not speak, pauses, or fails to say what they seem to want to say. Write 4–5 sentences analysing what this silence or hesitation reveals about the character and the situation.",
        parentTip: "What characters do not say is often more revealing than what they do say. Silence, hesitation, and evasion are rich analytical territory in fiction.",
        prompts: [
          { text: "The moment: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Write About a Story You Disagree With",
        instruction: "Write 5–7 sentences about a short story whose perspective, argument, or values you find problematic or unconvincing. Be specific about what you object to and why, using evidence from the text.",
        parentTip: "Critical dissent is a legitimate and important form of literary engagement. Discuss: is it possible to admire the craft of a story while disagreeing with its perspective?",
        prompts: [
          { text: "Story: ___________________________________________\nYour critical response:", type: "box" },
        ],
      },
      // 71–80
      // 71
      {
        type: "true-false",
        title: "Short Story Analysis: Final Concepts",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "The best short story analysis connects close textual observation to broader claims about meaning and purpose.", answer: true },
          { text: "Every narrative choice an author makes is potentially meaningful and worth analysing.", answer: true },
          { text: "Short stories are a less important literary form than novels.", answer: false },
          { text: "The most interesting short story analyses often argue for unexpected interpretations.", answer: true },
          { text: "Reading multiple short stories by the same author reveals patterns in their concerns and techniques.", answer: true },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Extended Analysis: A Favourite Short Story",
        instruction: "Write a complete analytical essay (500+ words) on the short story you have found most rewarding in this worksheet. The essay should have a clear argument and demonstrate your full analytical range.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 73
      {
        type: "open-response",
        title: "Short Fiction and Empathy",
        instruction: "Write a reflection (5–7 sentences) on this idea: 'Reading short fiction develops empathy by placing the reader inside unfamiliar experiences and perspectives.' Use at least one specific story as evidence.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 74
      {
        type: "fill-in-blank",
        title: "Advanced Short Story Vocabulary",
        instruction: "Complete each sentence with the correct term.",
        sentences: [
          { text: "The ___ narrator is one whose account of events cannot be fully trusted.", blanks: ["unreliable"] },
          { text: "___ irony occurs when the reader knows something that a character does not.", blanks: ["Dramatic"] },
          { text: "A ___ narrative is one that returns to the same image or moment with which it began.", blanks: ["circular / cyclical"] },
          { text: "The ___ is the voice and attitude expressed through the narration.", blanks: ["narrative voice / tone"] },
          { text: "The ___ of a story refers to the rate at which events and information are revealed.", blanks: ["pacing"] },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Why Short Stories Matter",
        content: "Short stories are the ideal form for the 21st century — they can be read in a single sitting and discuss a complete human experience. The best short stories do what only literature can do: place you inside a consciousness that is not your own, and make you feel what that person feels so precisely and honestly that you carry it with you. The short story tradition is one of the richest in world literature — Chekhov, Munro, Mansfield, Carver, Lawson, Winton, Naipaul, Achebe, O'Connor. Each one of these writers has done something impossible: made you know a stranger better than many people you have met in person. That is the power of the form.",
      },
      // 76
      {
        type: "open-response",
        title: "Write a Short Story on a Social Theme",
        instruction: "Write a short story (400–600 words) that engages with a social or ethical issue you care about — inequality, environmental change, belonging, identity, family. Make the issue felt through specific characters and events, not stated directly. After writing, annotate your craft choices.",
        prompts: [
          { text: "Your story (annotated):", type: "box" },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Portfolio: Your Best Short Story Analysis",
        instruction: "Select the best piece of analytical writing you have produced in this worksheet. Copy it here, write a 4–5 sentence self-evaluation, and explain what makes it your best work.",
        prompts: [
          { text: "Your best work:", type: "box" },
          { text: "Self-evaluation:", type: "box" },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "A Letter to the Author",
        instruction: "Write a letter (8–10 sentences) to the author of the short story you have studied. Tell them what you think their story achieves, what technique you most admired, and one question you would want to ask them about a choice they made. Write in a register appropriate for correspondence with a professional author.",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Synthesis: What You Have Learned",
        instruction: "Write a synthesis (8–10 sentences) of what you have learned about reading and writing short fiction. What analytical skills do you now have that you did not have before? What will you notice differently in the next short story you read?",
        prompts: [
          { text: "Your synthesis:", type: "box" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: The Short Story Reading Habit",
        content: "Commit to reading one short story per week for the next month. Choose stories from different traditions: one Australian, one international, one by a writer whose background is different from your own, and one from a collection recommended by someone whose taste you trust. After each reading, write one sentence on: what narrative technique was most distinctive in this story? At the end of the month, share your four sentences and discuss: what patterns do you notice across the stories you read?",
      },
      // 81–100
      // 81
      {
        type: "open-response",
        title: "Final Extended Essay",
        instruction: "Write a complete analytical essay (500+ words) on any short story of your choosing. The essay should have a clear, original argument, three analytical paragraphs, and a conclusion that extends the argument.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Teach Short Story Analysis",
        instruction: "Design a fifteen-minute lesson to introduce short story analysis to a Year 5 student. Include: one story to read together, three discussion questions, and one simple analytical task. Write the lesson plan and explain your choices.",
        prompts: [
          { text: "Your lesson plan:", type: "box" },
        ],
      },
      // 83
      {
        type: "multiple-choice",
        title: "Short Story Analysis: Mastery Questions",
        instruction: "Choose the most accurate answer.",
        questions: [
          {
            prompt: "The most sophisticated short story analysis focuses on:",
            options: [
              "A. Identifying every technique used",
              "B. Connecting specific craft choices to the story's broader purpose and meaning",
              "C. Summarising the plot",
              "D. Deciding whether the story is good or bad",
            ],
            answer: "B. Connecting specific craft choices to the story's broader purpose and meaning",
          },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Write a Short Story That Surprises",
        instruction: "Write a short story (400–600 words) with a twist — an ending or revelation that reframes what came before it. The twist should be genuinely surprising but feel inevitable in retrospect. After writing, annotate the clues you planted.",
        prompts: [
          { text: "Your story (annotated):", type: "box" },
        ],
      },
      // 85
      {
        type: "true-false",
        title: "Short Story Form: Final Synthesis",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Short stories require the same analytical skills as novels, applied more precisely.", answer: true },
          { text: "The short story form is limited in what it can explore compared to the novel.", answer: false },
          { text: "Writing short stories develops the same analytical skills as reading them.", answer: true },
          { text: "What is omitted from a short story is as important as what is included.", answer: true },
          { text: "Short story analysis skills transfer directly to the analysis of other text types.", answer: true },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Create a Short Story Reading Guide",
        instruction: "Create a reading guide for a short story of your choice. The guide should include: a brief introduction to the story and its context, five discussion questions (ranging from factual to analytical to interpretive), and one analytical writing task. Write it as if it will be used by other Year 7 students.",
        prompts: [
          { text: "Your reading guide:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Short Story and the Australian Voice",
        instruction: "Write 5–7 sentences about what 'an Australian voice' in short fiction means to you, drawing on stories you have read. What concerns, settings, ways of speaking, or perspectives recur? Is there one Australian story that feels most distinctively Australian to you?",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 88
      {
        type: "fill-in-blank",
        title: "Short Story Vocabulary — Final Check",
        instruction: "Complete each sentence with the most precise term.",
        sentences: [
          { text: "The ___ refers to who is telling the story and how much they know.", blanks: ["point of view / narrative perspective"] },
          { text: "The rate at which events are revealed in a story is called its ___.", blanks: ["pacing"] },
          { text: "An ___ is a return to an earlier event in the story's timeline.", blanks: ["flashback"] },
          { text: "The ___ is the larger idea that a story explores beyond its literal events.", blanks: ["theme"] },
          { text: "A narrator whose account cannot be fully trusted is called an ___ narrator.", blanks: ["unreliable"] },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Reflective Synthesis",
        instruction: "Write a final reflection (8–10 sentences) on what you have learned about reading, analysing, and writing short fiction across this worksheet. What has changed in how you approach a story?",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Short Story Analysis as a Lifelong Skill",
        content: "The analytical skills you develop reading short fiction — attention to perspective, pacing, characterisation, setting, theme, and the relationship between form and content — are transferable to every area of critical thinking. They will make you a better reader of journalism, a more critical viewer of film, a more thoughtful listener to speeches, and a more careful analyst of arguments in any field. Short fiction is not a school subject. It is a training ground for the most important intellectual skill: the ability to pay close, patient attention to how something is made, and to understand why those choices produce particular effects.",
      },
      // 91
      {
        type: "open-response",
        title: "Write a Story That Stays With You",
        instruction: "Write the short story you want to stay with — the one that comes from something you genuinely need to write about. It may be drawn from experience, imagination, or a combination of both. Write it (400–600 words), revise it until you are proud of it, and then annotate your most deliberate craft choices.",
        prompts: [
          { text: "Your story (annotated):", type: "box" },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Compare Your Writing and a Published Story",
        instruction: "Compare a short story you have written with a published short story on a similar theme. Write 5–7 sentences identifying what the published author does that you have not yet learned to do, and one thing in your own story that you are genuinely proud of.",
        prompts: [
          { text: "Published story and your story: ___________________________________________\nYour comparison:", type: "box" },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Write a Short Story Manifesto",
        instruction: "Write a short manifesto (5–7 sentences) about what you believe the short story should do — what its purpose is, what it is uniquely suited to explore, and what makes a great short story. Draw on specific stories you have read as evidence.",
        prompts: [
          { text: "Your manifesto:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "A Reading List",
        instruction: "Create an annotated reading list of ten short stories you recommend — Australian and international. For each, write two sentences: one summarising the story, one explaining why you recommend it for a Year 7 reader.",
        prompts: [
          { text: "Your annotated reading list:", type: "box" },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Publish Your Best Story",
        instruction: "Choose the short story you are most proud of from this worksheet. Prepare it for sharing — edit it carefully, format it properly, and write a brief introduction (2–3 sentences) explaining the story and your intentions in writing it. Then share it with someone.",
        prompts: [
          { text: "Your story and introduction:", type: "box" },
          { text: "Who you shared it with and their response:", type: "lines", lines: 2 },
        ],
      },
      // 96
      {
        type: "multiple-choice",
        title: "Short Story Analysis: Final Questions",
        instruction: "Choose the most analytically sophisticated answer.",
        questions: [
          {
            prompt: "A student who truly understands short fiction analysis will:",
            options: [
              "A. Always identify the same techniques in every story",
              "B. Approach each story freshly, using analytical tools to understand its particular choices and effects",
              "C. Know which story is the best before reading it",
              "D. Focus only on plot and character",
            ],
            answer: "B. Approach each story freshly, using analytical tools to understand its particular choices and effects",
          },
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Short Story Portfolio Entry",
        instruction: "Select the strongest piece of analytical writing from this worksheet. Copy it here, add annotations pointing to three specific analytical choices you are proud of, and write a self-evaluation (4–5 sentences).",
        prompts: [
          { text: "Your annotated work:", type: "box" },
          { text: "Self-evaluation:", type: "box" },
        ],
      },
      // 98
      {
        type: "fill-in-blank",
        title: "Final Mastery Check — Short Story Terms",
        instruction: "Complete each sentence.",
        sentences: [
          { text: "When a narrator uses 'I', the story is told in ___ person.", blanks: ["first"] },
          { text: "When the narrator follows one character and knows only their thoughts, this is ___ person ___.", blanks: ["third", "limited"] },
          { text: "When the narrator can access all characters' inner lives, this is ___ person ___.", blanks: ["third", "omniscient"] },
          { text: "The term for the moment at which the narrative's central conflict is resolved or transformed is the ___.", blanks: ["climax / turning point / resolution"] },
          { text: "A recurring object or image that carries a symbolic meaning beyond its literal function is called a ___.", blanks: ["symbol / motif"] },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "A Letter to a Future Short Story Reader",
        instruction: "Write a letter (7–9 sentences) to a future reader who is about to study short fiction for the first time. Tell them what to expect, what is difficult, what is rewarding, and what the most important thing to understand about reading short stories is.",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 100 — FINAL SPARK
      {
        type: "spark",
        title: "Spark: The Story That Is Yours to Tell",
        content: "Every person has a story that belongs to them — one that only they can tell, because only they have lived it. Your final task: find that story. It does not have to be a dramatic event. It might be a small moment of understanding, a person you have observed, a place that holds something for you. Write it. Revise it until the language does what you need it to do. Then keep it. That story — genuinely told, carefully made — is the beginning of your work as a writer.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "multiple-choice",
        title: "What Is a Multimodal Text?",
        instruction: "Choose the best definition.",
        questions: [
          {
            prompt: "A multimodal text is:",
            options: [
              "A. A text written in multiple languages",
              "B. A text that combines two or more modes of communication — such as image, written text, colour, layout, and sound",
              "C. Any text that uses pictures instead of words",
              "D. A text that is presented in more than one format",
            ],
            answer: "B. A text that combines two or more modes of communication — such as image, written text, colour, layout, and sound",
          },
        ],
      },
      // 2
      {
        type: "sorting",
        title: "Sort: Multimodal or Single-Mode?",
        instruction: "Sort each text type into the correct column.",
        columns: ["Multimodal (combines modes)", "Single-mode (one mode only)"],
        items: [
          { label: "A newspaper advertisement with text and photographs" },
          { label: "A plain written letter" },
          { label: "A film poster" },
          { label: "A spoken radio advertisement (audio only)" },
          { label: "A website with text, images, and video" },
          { label: "A page of unillustrated prose" },
          { label: "A political cartoon" },
          { label: "A text message (words only)" },
        ],
      },
      // 3
      {
        type: "true-false",
        title: "Visual Literacy Basics",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Visual literacy is the ability to read, interpret, and create visual texts.", answer: true },
          { text: "Images are neutral — they do not carry a point of view.", answer: false },
          { text: "Every design choice in a multimodal text (colour, layout, image selection) is potentially meaningful.", answer: true },
          { text: "The purpose of visual literacy is only relevant to art students.", answer: false },
          { text: "The relationship between image and text in a multimodal text can reinforce, add to, or contradict each other.", answer: true },
        ],
      },
      // 4
      {
        type: "matching",
        title: "Match Visual Analysis Term to Definition",
        instruction: "Draw a line to match each term with its definition.",
        parentTip: "These terms are the core vocabulary of visual analysis. Knowing them precisely enables your child to move from 'I notice this' to 'this is called X and it works because...'",
        left: ["Salience", "Gaze", "Angle", "Vector", "Framing"],
        right: [
          "A line or shape that guides the viewer's eye through the image",
          "The most visually prominent element — what the eye goes to first",
          "The perspective from which a subject is photographed or depicted (high, low, eye-level)",
          "How the image is bordered or bounded — what is included and what is cut out",
          "Whether a subject in an image looks directly at the viewer or away",
        ],
      },
      // 5
      {
        type: "circle-correct",
        title: "Demand or Offer?",
        instruction: "A gaze that looks directly at the viewer creates 'demand' (invites engagement). A gaze that looks away creates 'offer' (invites observation). Identify each.",
        questions: [
          { prompt: "A model in an advertisement looks directly into the camera.", options: ["Demand", "Offer"] },
          { prompt: "A nature documentary photograph shows a bird looking away into the distance.", options: ["Demand", "Offer"] },
          { prompt: "A charity advertisement features a child looking straight at the camera.", options: ["Demand", "Offer"] },
          { prompt: "A landscape painting with no human or animal figures.", options: ["Demand (N/A)", "Offer"] },
        ],
      },
      // 6
      {
        type: "fill-in-blank",
        title: "Camera Angle and Meaning",
        instruction: "Complete each sentence about the effect of different camera angles.",
        parentTip: "Camera angle is one of the most powerful tools in visual communication. Discuss examples from films, advertisements, or news photographs you have seen together.",
        sentences: [
          { text: "A ___ angle (camera below the subject, looking up) makes the subject appear powerful, dominant, or impressive.", blanks: ["low"] },
          { text: "A ___ angle (camera above the subject, looking down) makes the subject appear small, vulnerable, or diminished.", blanks: ["high"] },
          { text: "An ___ angle (camera at the same height as the subject) creates a sense of equality and directness between subject and viewer.", blanks: ["eye-level"] },
          { text: "A ___ close-up of a person's face creates intimacy and emotional immediacy.", blanks: ["tight / extreme"] },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Describe Your Chosen Multimodal Text",
        instruction: "Begin with careful description before analysis. Answer each question with specific detail from your text.",
        parentTip: "Good analysis always begins with careful observation. Do not rush to interpretation — describe precisely what is there first.",
        prompts: [
          { text: "What type of multimodal text is this and what is its purpose? (advertise, inform, persuade, entertain?)\n___________________________________________", type: "lines", lines: 2 },
          { text: "What is the most salient (visually dominant) element? Why do you think it was placed in this position?", type: "lines", lines: 2 },
          { text: "Describe the gaze of any human or animal subject in the image. Are they looking at the viewer or away? What effect does this create?", type: "lines", lines: 2 },
          { text: "What colours dominate? What associations or emotions do these colours typically carry?", type: "lines", lines: 2 },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Colour and Meaning",
        instruction: "Colour choices in visual texts carry cultural associations. Choose the most accurate answer.",
        questions: [
          {
            prompt: "Red is most commonly associated with which emotions or ideas in Western visual culture?",
            options: ["A. Calm and safety", "B. Danger, passion, urgency, or importance", "C. Nature and health", "D. Sadness and distance"],
            answer: "B. Danger, passion, urgency, or importance",
          },
          {
            prompt: "Blue in advertising is most commonly used to suggest:",
            options: ["A. Excitement and impulsiveness", "B. Danger and warning", "C. Trust, calm, reliability, and professionalism", "D. Luxury and exclusivity"],
            answer: "C. Trust, calm, reliability, and professionalism",
          },
          {
            prompt: "Gold and black together in a luxury brand context most commonly suggest:",
            options: ["A. Environmental concern", "B. Youth and energy", "C. Prestige, exclusivity, and high value", "D. Friendliness and accessibility"],
            answer: "C. Prestige, exclusivity, and high value",
          },
        ],
      },
      // 9
      {
        type: "sorting",
        title: "Sort Colour Associations",
        instruction: "Sort each colour-emotion pair into the correct column.",
        parentTip: "Colour associations are partly cultural and can vary. Discuss any associations that feel different to your child from those listed.",
        columns: ["Common association (Western visual culture)", "Uncommon or contradictory association"],
        items: [
          { label: "Green = health, nature, environment" },
          { label: "Green = danger and warning" },
          { label: "White = purity, cleanliness, simplicity" },
          { label: "White = mourning (in some Western contexts)" },
          { label: "Yellow = energy, optimism, warmth" },
          { label: "Yellow = sadness and grief" },
          { label: "Black = sophistication, authority, mystery" },
          { label: "Black = celebration and joy" },
        ],
      },
      // 10
      {
        type: "fill-in-blank",
        title: "Layout and Composition",
        instruction: "Complete each sentence about visual layout principles.",
        sentences: [
          { text: "The ___ rule suggests placing important elements a third of the way in from any edge, rather than dead centre.", blanks: ["rule of thirds"] },
          { text: "In Western cultures, texts are typically read from left to right and top to bottom — so elements placed at the ___ of an image often receive the most initial attention.", blanks: ["top left / top"] },
          { text: "Negative space (empty space) in an image can create a sense of ___ or ___, drawing attention to the isolated element.", blanks: ["isolation / calm / focus", "simplicity / purity"] },
          { text: "The term ___ refers to what is deliberately left out of the frame of an image.", blanks: ["exclusion / framing / off-frame"] },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Analyse the Image-Text Relationship",
        instruction: "Examine how the written text and the image work together in your multimodal text.",
        parentTip: "Help by asking: if you covered the words, what would the image alone suggest? If you covered the image, what would the words alone suggest? What is gained by having both?",
        prompts: [
          { text: "What does the written text say or imply?", type: "lines", lines: 2 },
          { text: "Does the image reinforce, add to, or complicate what the text says? Explain with specific reference to both.", type: "lines", lines: 3 },
          { text: "Who is the target audience for this text? What specific features of the image and text make this clear?", type: "lines", lines: 3 },
        ],
      },
      // 12
      {
        type: "true-false",
        title: "The Image-Text Relationship",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Image and text in a multimodal text always say exactly the same thing.", answer: false },
          { text: "When image and text contradict each other, this is always an error.", answer: false },
          { text: "Sometimes the image and text create irony or complexity by saying different things.", answer: true },
          { text: "The absence of text in a multimodal text means the image alone creates meaning.", answer: true },
          { text: "A caption's relationship to its photograph is always straightforward and literal.", answer: false },
        ],
      },
      // 13
      {
        type: "multiple-choice",
        title: "Types of Image-Text Relationships",
        instruction: "Choose the term that best describes each image-text relationship.",
        questions: [
          {
            prompt: "An advertisement shows a glass of water in a desert, and the text reads 'Refresh.' What is the relationship?",
            options: [
              "A. Contradiction — the image and text say opposite things",
              "B. Redundancy — the image and text say exactly the same thing",
              "C. Complementary — the image and text reinforce each other",
              "D. No relationship",
            ],
            answer: "C. Complementary — the image and text reinforce each other",
          },
          {
            prompt: "A news photograph shows a smiling politician, but the caption reads 'Minister denies corruption allegations.' What is the relationship?",
            options: [
              "A. Redundancy",
              "B. Complementary",
              "C. Anchorage — the caption fixes the meaning of the ambiguous image",
              "D. No relationship between image and text",
            ],
            answer: "C. Anchorage — the caption fixes the meaning of the ambiguous image",
          },
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Write an Analytical Response",
        instruction: "Write a TEEL analytical paragraph responding to: How does this multimodal text use visual and textual features to influence its audience? Label each part.",
        parentTip: "This paragraph brings together everything observed and discussed above. Choose the single most powerful or interesting feature to build the paragraph around — the aim is depth, not a list of observations.",
        prompts: [
          { text: "Your TEEL paragraph:", type: "box" },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: Reading Images Like Sentences",
        content: "Just as written texts have grammar, images have a grammar of their own. Salience tells you what the image considers most important. Gaze tells you what relationship the image creates between subject and viewer. Angle tells you the power relationship between viewer and subject. Vectors — the lines and shapes in an image — guide your eye through the composition in a particular sequence. Colour carries emotional and cultural associations. The more consciously you read these features, the harder it becomes to look at any image passively. That critical awareness is the goal of visual literacy.",
      },
      // 16
      {
        type: "open-response",
        title: "Analyse an Advertisement",
        instruction: "Choose a print or digital advertisement. Write 5–6 sentences analysing it using all five of these features: salience, gaze, angle, colour, and image-text relationship. For each, be specific about what is present and what effect it creates.",
        parentTip: "Bring a real advertisement to the analysis session — from a magazine, website, or social media. Real-world texts are more engaging than invented examples.",
        prompts: [
          { text: "Advertisement source and product/brand: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 17
      {
        type: "multiple-choice",
        title: "Reading Photographs",
        instruction: "Choose the most accurate answer for each question about photography in multimodal texts.",
        questions: [
          {
            prompt: "A news photograph that shows a political leader from a low angle (looking up at them) is most likely to create what impression?",
            options: [
              "A. The leader appears small and vulnerable",
              "B. The leader appears powerful and imposing",
              "C. The leader appears friendly and accessible",
              "D. The leader appears ordinary and relatable",
            ],
            answer: "B. The leader appears powerful and imposing",
          },
          {
            prompt: "Why does the choice of photograph that accompanies a news story matter analytically?",
            options: [
              "A. It does not matter — photographs are objective",
              "B. Every photograph is a choice — what is included, excluded, and how the subject is framed creates a particular representation of events",
              "C. Photographs always tell the truth",
              "D. Only the written text in a news story carries meaning",
            ],
            answer: "B. Every photograph is a choice — what is included, excluded, and how the subject is framed creates a particular representation of events",
          },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Analyse a News Photograph",
        instruction: "Find a news photograph with a caption. Write 4–5 sentences analysing: the photographic choices (angle, framing, what is included and excluded), the gaze if any, the caption's relationship to the image, and what impression of the subject is created.",
        parentTip: "News photographs are rich analytical material because students often assume them to be objective. Discuss: could the same event have been photographed differently? What would change?",
        prompts: [
          { text: "Publication and photograph description: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Identify the Target Audience",
        instruction: "For three different multimodal texts (an advertisement, a website, and a social media post), identify the target audience and explain specifically which features — colour, image, typography, language — signal that audience.",
        parentTip: "Target audience identification requires looking at the text from the perspective of who it is designed for, not who you are. Discuss: what signals are in this text that tell us who it is aimed at?",
        prompts: [
          { text: "Advertisement — audience: ___________________________________________\nFeatures that signal this:", type: "lines", lines: 2 },
          { text: "Website — audience: ___________________________________________\nFeatures that signal this:", type: "lines", lines: 2 },
          { text: "Social media post — audience: ___________________________________________\nFeatures that signal this:", type: "lines", lines: 2 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: One Day of Visual Literacy",
        content: "For one full day, pay deliberate attention to every visual or multimodal text you encounter. This includes advertisements, packaging, signs, websites, social media posts, book covers, TV graphics, and anything else with designed visual elements. Keep a visual literacy log: jot down at least eight examples. For each, note: the text type, the most salient element, and one design choice that seems deliberate and meaningful. At the end of the day, share your log and discuss: which text was the most interesting? Which was the most manipulative?",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "fill-in-blank",
        title: "Typography as a Visual Element",
        instruction: "Typography — the style, size, and arrangement of type — is a visual element as much as a textual one. Complete each sentence.",
        parentTip: "Font choice is a surprisingly revealing design decision. Discuss: why does a law firm use serif fonts? Why does a tech company often use sans-serif? Why does a children's brand use rounded, playful fonts?",
        sentences: [
          { text: "___ fonts (with small extending features at the end of strokes) typically connote tradition, authority, and reliability.", blanks: ["Serif"] },
          { text: "___ fonts (clean, without extending features) typically connote modernity, simplicity, and accessibility.", blanks: ["Sans-serif"] },
          { text: "Large, bold type draws the eye and signals what the designer considers ___.", blanks: ["important / urgent / primary"] },
          { text: "Script or handwritten-style fonts typically connote ___ or ___.", blanks: ["personality / warmth / informality", "creativity / authenticity"] },
        ],
      },
      // 22
      {
        type: "sorting",
        title: "Sort: Font Associations",
        instruction: "Sort each font description to the brand type it most likely represents.",
        columns: ["Law firm or financial institution", "Children's brand or toy company", "Tech startup or app", "Luxury fashion brand"],
        items: [
          { label: "Clean sans-serif, minimal design, lots of white space" },
          { label: "Elegant serif, black and white or gold colour scheme" },
          { label: "Rounded, colourful, playful font with bright primary colours" },
          { label: "Traditional serif, dark colours, formal layout" },
        ],
      },
      // 23
      {
        type: "open-response",
        title: "Analyse Typography in a Real Text",
        instruction: "Choose a multimodal text and analyse its typography choices. Write 4–5 sentences addressing: font style (serif, sans-serif, script), font size hierarchy (what is largest?), and what the typography choices communicate about the brand or purpose.",
        prompts: [
          { text: "Text: ___________________________________________\nYour typography analysis:", type: "box" },
        ],
      },
      // 24
      {
        type: "multiple-choice",
        title: "Representation in Images",
        instruction: "Images do not just show reality — they construct it. Choose the most accurate answer.",
        questions: [
          {
            prompt: "When a text consistently represents a particular group (e.g., women, a cultural group, older people) in a limited or stereotypical way, this is called:",
            options: [
              "A. Accurate observation",
              "B. Representation bias or stereotyping",
              "C. Good photography",
              "D. Objective documentation",
            ],
            answer: "B. Representation bias or stereotyping",
          },
          {
            prompt: "Why does representation in visual texts matter?",
            options: [
              "A. It does not — images are objective",
              "B. Because the repeated representation of groups in particular ways shapes how those groups are perceived by audiences",
              "C. Only because it affects advertising revenue",
              "D. Only because it affects legal liability",
            ],
            answer: "B. Because the repeated representation of groups in particular ways shapes how those groups are perceived by audiences",
          },
        ],
      },
      // 25
      {
        type: "open-response",
        title: "Analyse Representation",
        instruction: "Find a multimodal text that represents a particular social group (by gender, age, ethnicity, or other characteristic). Write 4–5 sentences analysing: how the group is represented, what the representation implies, and whether you think the representation is fair or limited.",
        parentTip: "Representation analysis is a form of critical media literacy. Be sensitive but direct — the goal is to notice patterns and their implications, not to make accusations.",
        prompts: [
          { text: "Text and group represented: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 26
      {
        type: "open-response",
        title: "Film Posters as Multimodal Texts",
        instruction: "Choose a film poster. Write 5–6 sentences analysing it using visual literacy tools: salience, gaze, angle, colour, typography, and image-text relationship. What does the poster promise about the film? How does it target its audience?",
        parentTip: "Film posters are excellent analytical material — they are professionally designed, highly compressed communications. A poster must convey genre, tone, and appeal in a single image.",
        prompts: [
          { text: "Film poster: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 27
      {
        type: "true-false",
        title: "Social Media as Multimodal Text",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Social media posts are multimodal texts because they typically combine image, text, and other design elements.", answer: true },
          { text: "Social media content is less carefully designed than traditional advertising.", answer: false },
          { text: "The filter applied to a social media photograph is a design choice that affects meaning.", answer: true },
          { text: "Social media platforms make design choices that shape how users create and consume content.", answer: true },
          { text: "Influencer content is always clearly distinguished from advertising.", answer: false },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Analyse a Social Media Post",
        instruction: "Choose a social media post (from any platform). Write 4–5 sentences analysing its visual and textual choices: What is most salient? What does the colour palette suggest? What relationship does the image create with the viewer? What is the purpose (inform, entertain, persuade, sell)?",
        parentTip: "Social media analysis makes visual literacy immediately relevant to your child's daily life. Discuss: how does this analysis change the way you look at your own social media feed?",
        prompts: [
          { text: "Platform and post description: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 29
      {
        type: "open-response",
        title: "Write a TEEL Paragraph on a Visual Text",
        instruction: "Write a TEEL analytical paragraph on any visual or multimodal text of your choosing. Your topic sentence should make a specific argument about how a visual feature positions its audience.",
        parentTip: "The TEEL structure works for visual analysis exactly as it works for literary analysis. The evidence is a precise description of a visual feature rather than a quotation.",
        prompts: [
          { text: "Text: ___________________________________________\nYour TEEL paragraph:", type: "box" },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Every Image Is an Argument",
        content: "Every image in a multimodal text is making an argument — not with logic, but with visual choices. The decision to photograph a politician from below makes a visual argument about their power. The decision to use warm lighting in a food advertisement makes an argument about comfort and pleasure. The decision to show only certain types of people in an insurance advertisement makes an argument about who is the 'normal' customer. Once you start reading images as arguments, it becomes impossible to look at them passively. This is the goal: active, critical, questioning engagement with everything visual.",
      },
      // 31
      {
        type: "open-response",
        title: "Analyse Propaganda or Political Imagery",
        instruction: "Find an example of historical or contemporary political imagery — a poster, propaganda image, or political cartoon. Write 5–6 sentences analysing how visual choices are used to make a political argument or to create a particular impression of a political leader or cause.",
        parentTip: "Political imagery is one of the most powerful and revealing forms of visual rhetoric. Use historical examples (wartime posters, political cartoons) if contemporary examples feel too sensitive.",
        prompts: [
          { text: "Image and context: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 32
      {
        type: "sorting",
        title: "Sort: Visual Feature and Its Effect",
        instruction: "Match each visual feature to its most likely effect.",
        columns: ["Visual feature that creates power/authority", "Visual feature that creates warmth/connection", "Visual feature that creates urgency/alarm"],
        items: [
          { label: "Low camera angle, subject looks down at viewer" },
          { label: "Warm lighting, soft focus, smiling direct gaze" },
          { label: "Bright red background, large bold text, close-up" },
          { label: "Subject in business attire, centred composition, formal framing" },
          { label: "Child making eye contact, soft natural light, pastel colours" },
          { label: "Flashing text, countdown timer, urgent language" },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Critically Analyse an Advertisement",
        instruction: "Choose an advertisement and write a critical analysis (5–7 sentences): What argument does it make through its visual and textual choices? Does it rely on stereotypes? Does it make an honest or a manipulative appeal? What does it assume about its audience?",
        parentTip: "Critical analysis of advertising is one of the most practically valuable forms of media literacy. Discuss: has an advertisement ever manipulated you into wanting something you did not need?",
        prompts: [
          { text: "Advertisement: ___________________________________________\nYour critical analysis:", type: "box" },
        ],
      },
      // 34
      {
        type: "fill-in-blank",
        title: "Visual Rhetoric — Pathos, Ethos, Logos",
        instruction: "Just as written rhetoric uses ethos (credibility), pathos (emotion), and logos (logic), so does visual rhetoric. Complete each sentence.",
        parentTip: "Discuss real examples of each with your child. Which technique do they find most powerful? Which do they find most honest?",
        sentences: [
          { text: "An advertisement showing a celebrity using a product uses ___ — the appeal to ___.", blanks: ["ethos", "authority / credibility / reputation"] },
          { text: "A charity advertisement showing a suffering child in distress uses ___ — the appeal to ___.", blanks: ["pathos", "emotion / sympathy / feeling"] },
          { text: "An advertisement showing statistics about a product's effectiveness uses ___ — the appeal to ___.", blanks: ["logos", "logic / reason / evidence"] },
          { text: "Many advertisements combine all three — using a ___ (celebrity) in a ___ (emotional) situation supported by ___ (statistical claims).", blanks: ["credible figure", "moving / affecting", "logical"] },
        ],
      },
      // 35
      {
        type: "open-response",
        title: "Identify Persuasive Visual Appeals",
        instruction: "Find three advertisements — one that primarily uses pathos, one that primarily uses ethos, and one that primarily uses logos. For each, write 2–3 sentences explaining which appeal is used and how it works visually.",
        parentTip: "Real advertisements drawn from magazines, websites, or TV are much better than invented examples. Discuss which appeal each of you finds most convincing, and why.",
        prompts: [
          { text: "Pathos advertisement: ___________________________________________\nAnalysis:", type: "lines", lines: 2 },
          { text: "Ethos advertisement: ___________________________________________\nAnalysis:", type: "lines", lines: 2 },
          { text: "Logos advertisement: ___________________________________________\nAnalysis:", type: "lines", lines: 2 },
        ],
      },
      // 36
      {
        type: "open-response",
        title: "Analyse a Charity Advertisement",
        instruction: "Find a charity advertisement (from a well-known charity — animals, children, environmental, health). Write 5–6 sentences analysing: how it uses visual features to create an emotional appeal, what the image-text relationship creates, and how it positions the viewer in relation to the cause.",
        parentTip: "Charity advertisements are designed to create both emotional connection and a sense of empowered action. Discuss: is the emotional appeal honest or manipulative? What is the relationship between the viewer and the people depicted?",
        prompts: [
          { text: "Charity and advertisement: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 37
      {
        type: "true-false",
        title: "Critical Media Literacy",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "All photographs in news media are objective and unbiased.", answer: false },
          { text: "The choice of which photograph to use alongside a news story is an editorial decision that affects meaning.", answer: true },
          { text: "Consumers of media who understand visual rhetoric are harder to manipulate.", answer: true },
          { text: "Advertising always accurately represents the products it sells.", answer: false },
          { text: "Visual literacy is a skill that protects audiences from manipulation.", answer: true },
        ],
      },
      // 38
      {
        type: "open-response",
        title: "Deconstruct an Online Advertisement",
        instruction: "Find a targeted online advertisement (one that has appeared in your social media or email). Write 4–5 sentences deconstructing it: what does it seem to know about you? What assumptions does it make? How does it use visual and textual features to appeal to you specifically?",
        parentTip: "Targeted advertising is a powerful example of the intersection of visual literacy and data privacy. Discuss: what does it mean that advertisers can build a picture of your interests and target you specifically?",
        prompts: [
          { text: "Advertisement description: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Create and Annotate a Multimodal Text",
        instruction: "Design a simple multimodal text — a mock advertisement, a book cover, a poster, or a web page layout. Draw or describe your design in detail, then annotate every deliberate visual choice: colour, placement, typography, image, image-text relationship.",
        parentTip: "Creating a visual text requires the same analytical thinking as analysing one. The design process makes visual choices explicit and deliberate. Discuss your design decisions together as they are made.",
        prompts: [
          { text: "Description or sketch of your design (include all visual elements):", type: "box" },
          { text: "Your annotations (explain each deliberate visual choice):", type: "box" },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Redesign an Advertisement",
        content: "Find an advertisement for a product and completely redesign it for a different target audience. Keep the same product but change everything else — colour scheme, imagery, typography, language register, and the appeal (pathos / ethos / logos). Before redesigning, write a brief: who is the new audience, and what do they value? After redesigning, compare the two versions. What changed and why? What does this comparison reveal about how visual choices shape meaning for different audiences?",
      },
      // ── CONSOLIDATING 41–80 ───────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Write a Full Multimodal Analysis",
        instruction: "Write a complete analytical response (intro + two TEEL paragraphs + conclusion, approximately 300 words) on any multimodal text of your choice. The essay should make a clear argument about how the text uses visual and textual features to achieve its purpose.",
        prompts: [
          { text: "Text: ___________________________________________\nYour essay:", type: "box" },
        ],
      },
      // 42
      {
        type: "multiple-choice",
        title: "Website Design as Visual Rhetoric",
        instruction: "Choose the most accurate answer for each question.",
        questions: [
          {
            prompt: "What is the primary visual purpose of the 'hero image' (the large image at the top of a website homepage)?",
            options: [
              "A. To provide information about the company",
              "B. To immediately establish the brand's identity, values, and target audience",
              "C. To show the company's products in detail",
              "D. To comply with web design regulations",
            ],
            answer: "B. To immediately establish the brand's identity, values, and target audience",
          },
          {
            prompt: "Why do many e-commerce websites place a 'Buy Now' or 'Add to Cart' button in a bright colour on the page?",
            options: [
              "A. Because bright colours are always better",
              "B. Because the button is the least important element on the page",
              "C. To create high visual salience — drawing the eye to the desired action",
              "D. Because red is required by law",
            ],
            answer: "C. To create high visual salience — drawing the eye to the desired action",
          },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Analyse a Website Homepage",
        instruction: "Analyse a website homepage using visual literacy tools. Write 5–6 sentences addressing: the hero image (or most salient element), the colour palette, the typography, the placement of key elements (navigation, call-to-action), and the image-text relationship. What overall impression does the homepage create?",
        prompts: [
          { text: "Website: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Political Cartoon Analysis",
        instruction: "Find a political cartoon (from a newspaper website or news archive). Write 5–6 sentences analysing: what the cartoon is about, what visual symbols are used, what exaggeration or caricature is employed, and what argument the cartoon is making. Discuss whether you find the cartoon's argument convincing.",
        parentTip: "Political cartoons are one of the oldest forms of visual rhetoric. Discuss: what is the cartoonist's position? Do you agree with their argument?",
        prompts: [
          { text: "Cartoon source and subject: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: Multimodal Texts and the Question of Truth",
        content: "One of the most important insights of visual literacy is that no image is a transparent window onto reality. Every photograph involves choices — of angle, framing, lighting, subject, and timing. Every edited image involves further choices. And every caption or accompanying text shapes how the image is read. In an era of image editing, AI-generated images, and deliberate misinformation, the ability to ask 'how was this image made, and for what purpose?' is not just an academic skill — it is an essential form of self-protection. Visual literacy is one of the most important skills for contemporary citizenship.",
      },
      // 46
      {
        type: "open-response",
        title: "Analyse a Book Cover as Multimodal Text",
        instruction: "Find a book you have read or know well. Analyse the cover as a multimodal text: what visual choices has the designer made, what do they promise about the book's contents and tone, and how does the cover position its intended reader?",
        prompts: [
          { text: "Book title: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Create Your Own Multimodal Analysis Essay",
        instruction: "Write a complete analysis essay (intro + three TEEL paragraphs + conclusion, approximately 400 words) on a multimodal text of significant cultural importance — a famous advertisement, a memorable film poster, or an iconic news photograph. The essay should demonstrate your full visual literacy analytical toolkit.",
        prompts: [
          { text: "Text: ___________________________________________\nYour essay:", type: "box" },
        ],
      },
      // 48
      {
        type: "fill-in-blank",
        title: "Reading Graphs and Data Visualisations",
        instruction: "Data visualisations (graphs, infographics, charts) are a form of multimodal text. Complete each sentence about reading them critically.",
        sentences: [
          { text: "A graph's ___ axis labels and ___ axis labels create the basic frame of meaning.", blanks: ["x-axis / horizontal", "y-axis / vertical"] },
          { text: "Truncating the y-axis (starting from a number above zero) can make small differences appear ___.", blanks: ["larger / more dramatic"] },
          { text: "The ___ of a graph determines how the data is grouped and can emphasise or hide patterns.", blanks: ["scale / time period / granularity"] },
          { text: "An infographic that uses emotionally loaded images alongside data is combining ___ and ___ appeals.", blanks: ["logos", "pathos"] },
        ],
      },
      // 49
      {
        type: "open-response",
        title: "Analyse a Data Visualisation",
        instruction: "Find a graph, chart, or infographic on a topic that interests you. Write 4–5 sentences analysing: what the data shows, how the visual design presents it, whether the design emphasises or downplays certain aspects of the data, and whether any visual choices could be considered misleading.",
        parentTip: "Data visualisations are powerful multimodal texts precisely because they appear objective. Discuss: could the same data be presented to give a different impression?",
        prompts: [
          { text: "Visualisation source and topic: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Evaluate Your Own Multimodal Text Design",
        instruction: "Return to the multimodal text you designed earlier in this worksheet. Write 4–5 sentences evaluating your own design choices: what works? What would you change? Does your design achieve its intended effect? What have you learned since making it that would improve it?",
        prompts: [
          { text: "Your self-evaluation:", type: "box" },
        ],
      },
      // 51–80 EXTENDING CONSOLIDATION
      // 51
      {
        type: "open-response",
        title: "Comparative Analysis: Two Advertisements, Same Product",
        instruction: "Find two advertisements for the same product (or product type) from different eras (e.g., a 1950s and a contemporary advertisement). Write 5–7 sentences comparing how the visual and textual approaches differ, and what this tells us about changing social values or attitudes.",
        prompts: [
          { text: "Advertisement 1: ___________________________________________\nAdvertisement 2: ___________________________________________\nYour comparative analysis:", type: "box" },
        ],
      },
      // 52
      {
        type: "multiple-choice",
        title: "Advanced Visual Analysis: Connotation and Denotation",
        instruction: "Images, like words, have denotations (literal meanings) and connotations (implied or associated meanings). Choose the most accurate answer.",
        questions: [
          {
            prompt: "A photograph of a mother holding a baby denotes an intimate moment between two people. In an advertisement for baby products, this image most likely connotes:",
            options: [
              "A. The challenges of parenting",
              "B. Safety, love, naturalness, and the reliable appeal to parental instinct",
              "C. The product's technical specifications",
              "D. An ironic comment on domesticity",
            ],
            answer: "B. Safety, love, naturalness, and the reliable appeal to parental instinct",
          },
        ],
      },
      // 53
      {
        type: "open-response",
        title: "Analyse Denotation and Connotation in an Image",
        instruction: "Choose any image from a multimodal text. Write 3–4 sentences on what the image literally shows (denotation), then 3–4 sentences on what it implies or suggests (connotation). How do the connotations serve the text's purpose?",
        prompts: [
          { text: "Image description: ___________________________________________\nDenotation:", type: "lines", lines: 3 },
          { text: "Connotation:", type: "lines", lines: 4 },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Write a Counter-Analysis",
        instruction: "Choose a multimodal text you have previously analysed. Write a counter-analysis: argue for a reading of the text that is different from your original interpretation. What other meanings or effects might the text create for different audiences?",
        parentTip: "Counter-analysis is a sign of sophisticated thinking. Texts can be read differently by different audiences. Discuss: who might read this text very differently from you?",
        prompts: [
          { text: "Text: ___________________________________________\nYour counter-analysis:", type: "box" },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Analyse Visual Diversity and Inclusion",
        instruction: "Find three different multimodal texts (advertisements, websites, or other public texts). For each, write 2–3 sentences analysing: who is represented, who is absent, and what the pattern of representation implies about who is considered the 'normal' audience or subject.",
        parentTip: "Representation analysis requires noticing absences as well as presences. Discuss: what assumptions about 'normality' are built into these texts?",
        prompts: [
          { text: "Text 1: ___________________________________________\nRepresentation analysis:", type: "lines", lines: 3 },
          { text: "Text 2: ___________________________________________\nRepresentation analysis:", type: "lines", lines: 3 },
          { text: "Text 3: ___________________________________________\nRepresentation analysis:", type: "lines", lines: 3 },
        ],
      },
      // 56
      {
        type: "open-response",
        title: "Analyse Environmental and Sustainability Messaging",
        instruction: "Find three multimodal texts related to environmental or sustainability issues — these might be advertisements, government campaigns, or environmental advocacy materials. Write 5–6 sentences comparing how they use visual and textual features to make their case. Which do you find most effective and why?",
        prompts: [
          { text: "Three texts found: ___________________________________________\nYour comparative analysis:", type: "box" },
        ],
      },
      // 57
      {
        type: "true-false",
        title: "Screen-Based Multimodal Texts",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Film, video games, and websites are screen-based multimodal texts.", answer: true },
          { text: "Sound is a mode of communication in film and some other multimodal texts.", answer: true },
          { text: "The same visual literacy tools used for print texts apply to screen-based texts.", answer: true },
          { text: "Screen-based texts are too complex to be analysed visually.", answer: false },
          { text: "The camera movement in a film (pan, zoom, tilt) is a visual choice that affects meaning.", answer: true },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Analyse a Film Scene for Visual Rhetoric",
        instruction: "Choose any scene from a film you have watched recently. Write 5–6 sentences analysing the visual choices: camera angles, lighting, colour palette, framing, and any other deliberate visual decisions. How do these choices create meaning or affect your response to the scene?",
        parentTip: "Film analysis applies the same visual literacy tools as still image analysis. Pause a scene together and look at it frame by frame if needed.",
        prompts: [
          { text: "Film and scene: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 59
      {
        type: "fill-in-blank",
        title: "Video Game Visual Design",
        instruction: "Video games are multimodal texts with deliberately designed visual environments. Complete each sentence.",
        sentences: [
          { text: "A game designed to feel tense and threatening might use ___ colour palettes and ___ lighting.", blanks: ["dark / muted", "low / shadowy"] },
          { text: "A game designed to feel joyful and energetic might use ___ colours and ___ lighting.", blanks: ["bright / saturated", "warm / clear"] },
          { text: "User interface design in games uses ___ to direct the player's eye to important information or actions.", blanks: ["salience / bright colour / contrast"] },
          { text: "The visual design of a game's ___ character is often deliberately made to look approachable, relatable, or aspirational.", blanks: ["protagonist / player"] },
        ],
      },
      // 60 — SPARK
      {
        type: "spark",
        title: "Spark: Create and Critique a Multimodal Campaign",
        content: "Design a simple multimodal campaign (3 connected pieces) for a cause you care about — environmental, social, educational, or community-based. Each piece might be: a poster, a social media image, and a simple webpage header. For each, write a brief design rationale explaining every significant visual choice (colour, image, typography, layout). When all three are done, exchange them with your parent or guardian and ask them to critique the visual choices: what works, what is unclear, what contradicts the intended message? Revise based on the feedback.",
      },
      // 61–80
      // 61
      {
        type: "open-response",
        title: "Analyse Propaganda Technique: Bandwagon, Glittering Generalities, and Transfer",
        instruction: "Propaganda and advertising use specific visual and verbal techniques. Write 2–3 sentences on each: (1) Bandwagon — the appeal to joining the crowd; (2) Glittering generalities — using vague but positive words and images; (3) Transfer — associating a product or idea with a trusted symbol or person. Give a real example of each.",
        prompts: [
          { text: "Bandwagon example and analysis:", type: "lines", lines: 3 },
          { text: "Glittering generalities example and analysis:", type: "lines", lines: 3 },
          { text: "Transfer example and analysis:", type: "lines", lines: 3 },
        ],
      },
      // 62
      {
        type: "open-response",
        title: "Write an Essay on Visual Literacy and Citizenship",
        instruction: "Write a short essay (intro + two TEEL paragraphs + conclusion) arguing that visual literacy is an essential skill for 21st-century citizens. Use specific examples from your analysis work in this worksheet as evidence.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 63
      {
        type: "multiple-choice",
        title: "The Ethics of Manipulation in Visual Design",
        instruction: "Choose the most accurate answer.",
        questions: [
          {
            prompt: "A health supplement advertisement shows a very thin model alongside text claiming the product promotes weight loss, using an emotionally appealing image without clinical evidence. This is most accurately described as:",
            options: [
              "A. Effective advertising",
              "B. Manipulative advertising that exploits body image concerns without honest evidence",
              "C. An example of good visual composition",
              "D. Normal commercial practice with no ethical concern",
            ],
            answer: "B. Manipulative advertising that exploits body image concerns without honest evidence",
          },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Evaluate the Ethics of an Advertisement",
        instruction: "Choose an advertisement that you think raises ethical questions. Write 5–6 sentences evaluating: what claims does it make, how does it use visual or emotional appeals, are these honest or manipulative, and what harm (if any) could it do? Write a clearly argued evaluative response.",
        parentTip: "Ethical evaluation of advertising is an important critical literacy skill. Discuss: at what point does persuasion become manipulation? Where is the line?",
        prompts: [
          { text: "Advertisement: ___________________________________________\nYour ethical evaluation:", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Analyse a Government Public Information Campaign",
        instruction: "Find an example of a government public information campaign (road safety, health, environment). Write 5–6 sentences analysing how it uses visual and textual features to communicate its message and influence audience behaviour.",
        prompts: [
          { text: "Campaign: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Design a Visual Literacy Guide",
        instruction: "Create a concise visual literacy guide that explains the five core tools (salience, gaze, angle, colour, image-text relationship) to someone who has never heard of visual literacy. Include a simple example for each tool. Write it in a semi-formal register accessible to a general audience.",
        prompts: [
          { text: "Your visual literacy guide:", type: "box" },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Analyse Absent Representation",
        instruction: "Choose any prominent public multimodal text — a government campaign, a major brand advertisement, or a mainstream media image. Write 4–5 sentences analysing who is absent from the representation — which groups, experiences, or perspectives are not shown — and what this absence implies.",
        parentTip: "What is absent from a text can be as revealing as what is present. This is one of the most sophisticated forms of critical media literacy.",
        prompts: [
          { text: "Text: ___________________________________________\nYour analysis of absent representation:", type: "box" },
        ],
      },
      // 68
      {
        type: "open-response",
        title: "Multimodal Text and Cultural Context",
        instruction: "Find a multimodal text from another culture (you might find an advertisement, poster, or public image from another country). Write 4–5 sentences analysing how its visual and design choices reflect values or aesthetics that may be different from Australian or Western visual conventions.",
        parentTip: "Cross-cultural visual analysis reveals how much of our visual literacy is culturally learned rather than universal. Discuss: what seems surprising or different about the other text's visual approach?",
        prompts: [
          { text: "Text and cultural context: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 69
      {
        type: "true-false",
        title: "Visual Literacy: Final Concepts",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Visual literacy is a passive skill — it develops automatically from exposure to images.", answer: false },
          { text: "Active, analytical engagement with images is required to develop genuine visual literacy.", answer: true },
          { text: "The same image can be read differently by audiences from different cultural backgrounds.", answer: true },
          { text: "Creating multimodal texts develops the same analytical skills as analysing them.", answer: true },
          { text: "Visual literacy only matters for students who plan to work in design or media.", answer: false },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Write a Comparative Visual Analysis Essay",
        instruction: "Write a comparative essay (three analytical paragraphs) comparing two multimodal texts on the same theme (both are advertisements, or both are charity campaigns, or both are political posters). Each paragraph should compare a different aspect of visual design.",
        prompts: [
          { text: "Text 1: ___________________________________________\nText 2: ___________________________________________\nYour comparative essay:", type: "box" },
        ],
      },
      // 71–80
      // 71
      {
        type: "open-response",
        title: "Final Analysis Essay",
        instruction: "Write a complete analysis essay (intro + three TEEL paragraphs + conclusion, approximately 400 words) on the most visually sophisticated multimodal text you have encountered in this worksheet.",
        prompts: [
          { text: "Text: ___________________________________________\nYour essay:", type: "box" },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Teach Visual Literacy",
        instruction: "Design a ten-minute visual literacy lesson for a Year 5 student. Choose one specific visual literacy concept (e.g., gaze, or colour symbolism). Write the lesson plan including an example image, three discussion questions, and one simple analytical activity.",
        prompts: [
          { text: "Your lesson plan:", type: "box" },
        ],
      },
      // 73
      {
        type: "multiple-choice",
        title: "Visual Literacy Mastery Check",
        instruction: "Choose the most analytically sophisticated answer.",
        questions: [
          {
            prompt: "The most accurate description of what visual literacy enables is:",
            options: [
              "A. The ability to enjoy images more fully",
              "B. Active, critical, questioning engagement with how images construct meaning and position audiences",
              "C. The ability to create attractive images",
              "D. The ability to identify art styles",
            ],
            answer: "B. Active, critical, questioning engagement with how images construct meaning and position audiences",
          },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Analyse AI-Generated Images",
        instruction: "Find an example of an AI-generated image (from a news article, social media, or a generative AI tool). Write 4–5 sentences analysing it: How can you tell it may be AI-generated? What visual features reveal its artificial origin? What are the implications of AI-generated images for visual literacy and trust in images?",
        parentTip: "AI-generated images are an emerging and important issue in media literacy. Discuss: how does the existence of AI imagery change how we should approach all images?",
        prompts: [
          { text: "Image description and source: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Visual Literacy Is a Form of Power",
        content: "People who cannot read images critically are more easily manipulated by them. People who understand how images are constructed — how salience, gaze, angle, colour, and composition create meaning — can engage with visual media from a position of informed agency rather than passive reception. In a world increasingly dominated by visual communication — social media, video, advertising, news imagery — visual literacy is not an optional extra. It is one of the most important forms of literacy for navigating the contemporary world. Every image is an argument. Visual literacy teaches you to argue back.",
      },
      // 76
      {
        type: "open-response",
        title: "Your Most Impactful Analysis",
        instruction: "Look back through all your visual analysis work in this worksheet. Which analysis do you feel was most insightful — the one where you found something genuinely surprising or important in a text? Write 4–5 sentences explaining your choice and what makes that analysis strong.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Analyse Visual Literacy in News Media",
        instruction: "Find three news stories from the same event, from three different news sources (e.g., different newspapers or websites). Compare the photographs chosen: angle, framing, gaze, and the caption's relationship to the image. Write 5–6 sentences on what the differences reveal about each source's perspective or editorial choices.",
        prompts: [
          { text: "Event and sources: ___________________________________________\nYour comparative analysis:", type: "box" },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Portfolio: Your Best Visual Analysis",
        instruction: "Select the strongest piece of visual analysis writing from this worksheet. Copy it here, annotate three specific analytical choices, and write a self-evaluation (4–5 sentences).",
        prompts: [
          { text: "Your best work:", type: "box" },
          { text: "Self-evaluation:", type: "box" },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Synthesis: What You Have Learned",
        instruction: "Write a synthesis (8–10 sentences) of what you have learned about visual literacy and multimodal text analysis. What can you see now that you could not see before? How has this changed the way you experience visual media?",
        prompts: [
          { text: "Your synthesis:", type: "box" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: The Visual Literacy Month",
        content: "Commit to one month of active visual literacy practice. Each week, choose one multimodal text from your daily life and do a full analysis: salience, gaze, angle, colour, typography, image-text relationship, target audience, and purpose. Write 4–6 sentences on each. At the end of the month, compile your four analyses into a visual literacy portfolio and write a reflection: what patterns have you noticed? What manipulative techniques have you become more alert to? What have you begun to see differently?",
      },
      // 81–100
      // 81
      {
        type: "open-response",
        title: "Extended Visual Analysis Essay",
        instruction: "Write a complete analytical essay (500+ words) on the most significant multimodal text you have analysed in this worksheet. The essay should demonstrate your full visual literacy toolkit and make an original argument about the text's purpose and effect.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Visual Literacy and Democracy",
        instruction: "Write 5–7 sentences arguing that visual literacy is essential for democratic participation. Use specific examples from political imagery, news media, or advertising to support your argument.",
        prompts: [
          { text: "Your argument:", type: "box" },
        ],
      },
      // 83
      {
        type: "fill-in-blank",
        title: "Visual Analysis Vocabulary — Final Check",
        instruction: "Complete each sentence with the most precise term.",
        sentences: [
          { text: "The most visually prominent element in an image is called the most ___ element.", blanks: ["salient"] },
          { text: "When a subject in an image looks directly at the viewer, this is called a ___ gaze.", blanks: ["demand"] },
          { text: "A ___ angle (camera below the subject) makes the subject appear powerful.", blanks: ["low"] },
          { text: "The relationship between the image and the written text in a multimodal text is called the ___.", blanks: ["image-text relationship"] },
          { text: "The ability to read, interpret, and create visual texts is called ___.", blanks: ["visual literacy"] },
        ],
      },
      // 84
      {
        type: "open-response",
        title: "Analyse a Meme as Multimodal Text",
        instruction: "Choose an internet meme (from a current trend or historical meme format). Write 4–5 sentences analysing it as a multimodal text: what is the image, what is the text, how do they interact, what cultural knowledge does the meme require to understand, and what argument or emotion does the meme express?",
        parentTip: "Memes are one of the most interesting contemporary multimodal forms — they are compressed, culturally specific, and often highly political. Analyse one together.",
        prompts: [
          { text: "Meme description: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 85
      {
        type: "true-false",
        title: "Visual Literacy: Final Synthesis",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Visual literacy skills apply to printed texts, digital texts, film, and social media.", answer: true },
          { text: "Images can never be manipulative — they simply show reality.", answer: false },
          { text: "Creating a multimodal text requires making the same kinds of analytical choices as reading one.", answer: true },
          { text: "The most sophisticated visual analysis connects specific design choices to broader purposes and effects on audiences.", answer: true },
          { text: "Visual literacy is a skill that once learned is complete — it does not require ongoing practice.", answer: false },
        ],
      },
      // 86
      {
        type: "open-response",
        title: "Write a Visual Literacy Manifesto",
        instruction: "Write a short manifesto (5–7 sentences) about why visual literacy matters — your own argument for why everyone should learn to read images critically. Draw on specific experiences from this worksheet as evidence.",
        prompts: [
          { text: "Your manifesto:", type: "box" },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Final Design Project",
        instruction: "Create your most sophisticated multimodal text: a complete mock advertisement or campaign poster for a cause you genuinely care about. Make every visual choice deliberately and with specific intent. After creating it, write a full design rationale (6–8 sentences) explaining every significant decision.",
        prompts: [
          { text: "Design description (or attach sketch/image):", type: "box" },
          { text: "Design rationale:", type: "box" },
        ],
      },
      // 88
      {
        type: "multiple-choice",
        title: "Visual Analysis: Final Questions",
        instruction: "Choose the most accurate and analytically sophisticated answer.",
        questions: [
          {
            prompt: "A student who truly understands visual literacy will:",
            options: [
              "A. Always identify the same features in every image",
              "B. Approach each visual text with analytical tools, asking how and why specific choices create specific effects on specific audiences",
              "C. Know which images are beautiful before analysing them",
              "D. Focus only on colour and ignore other visual features",
            ],
            answer: "B. Approach each visual text with analytical tools, asking how and why specific choices create specific effects on specific audiences",
          },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "Reflective Synthesis",
        instruction: "Write a final reflection (8–10 sentences) on what you have learned about reading and creating multimodal texts. What has changed in how you look at images? What will you notice differently from now on?",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Visual Literacy Is Lifelong",
        content: "The visual literacy skills you have built in this worksheet will serve you for life — in every context where you consume visual media (which, in the contemporary world, is almost everywhere). The more you practise, the faster and more automatic the critical reading becomes. You will start to notice salience, gaze, and colour associations in seconds. You will start to ask 'who made this, and what do they want from me?' instinctively. That instinct — that analytical reflex — is one of the most important tools you can have in a visually saturated world.",
      },
      // 91
      {
        type: "open-response",
        title: "Analyse Visual Literacy in Your Favourite Media",
        instruction: "Choose your favourite visual or multimodal media — a series, a game, a brand, a social media account. Write 5–7 sentences analysing the visual choices that make it distinctive and appealing. What makes its visual identity recognisable?",
        prompts: [
          { text: "Media: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Create an Annotated Visual Reference Card",
        instruction: "Create a reference card for visual analysis covering: definitions of salience, gaze, angle, colour, and image-text relationship, with one example of each. Make it visually organised and genuinely useful for future analysis.",
        prompts: [
          { text: "Your visual analysis reference card:", type: "box" },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Analyse the Most Manipulative Text You Have Found",
        instruction: "Over the course of this worksheet, you have encountered many visual texts. Choose the one you believe is most deliberately manipulative. Write 5–7 sentences making a specific case for why — identifying the techniques used, the audience targeted, and the manipulation employed.",
        prompts: [
          { text: "Text: ___________________________________________\nYour argument:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "A Letter on Visual Literacy",
        instruction: "Write a letter (7–9 sentences) to someone who is about to start studying visual literacy for the first time. Tell them what to expect, what the most surprising insight was for you, and what the most practically useful skill you developed is.",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Publish Your Best Visual Analysis",
        instruction: "Choose your strongest visual analysis essay from this worksheet. Prepare it for sharing — edit it carefully, format it properly, and write a 2–3 sentence introduction explaining what you analysed and why it is worth analysing. Share it with someone.",
        prompts: [
          { text: "Your piece and introduction:", type: "box" },
          { text: "Who you shared it with:", type: "lines", lines: 1 },
        ],
      },
      // 96
      {
        type: "open-response",
        title: "Annotated Portfolio Entry",
        instruction: "Select the visual analysis work you are most proud of. Copy it here, add annotations pointing to your three strongest analytical moves, and write a self-evaluation (4–5 sentences).",
        prompts: [
          { text: "Your annotated work:", type: "box" },
          { text: "Self-evaluation:", type: "box" },
        ],
      },
      // 97
      {
        type: "fill-in-blank",
        title: "Multimodal Analysis — Final Vocabulary",
        instruction: "Complete each sentence.",
        sentences: [
          { text: "A text that combines image, written language, colour, and layout is called a ___ text.", blanks: ["multimodal"] },
          { text: "The ability to read, interpret, and create visual texts is called ___ literacy.", blanks: ["visual"] },
          { text: "The appeal to emotion in a visual text is called ___.", blanks: ["pathos"] },
          { text: "When a caption 'anchors' the meaning of an ambiguous photograph, the relationship is called ___.", blanks: ["anchorage"] },
          { text: "When an image and text say the same thing, the relationship is called ___.", blanks: ["redundancy / reinforcement"] },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Final Extended Design and Analysis",
        instruction: "Create a multimodal text on any topic, then write a 5–6 sentence analysis of your own design. The analysis should use the same analytical tools you have used throughout this worksheet: salience, gaze, angle, colour, typography, and image-text relationship.",
        prompts: [
          { text: "Design description:", type: "box" },
          { text: "Your analysis of your own design:", type: "box" },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "What Has Changed in How You See?",
        instruction: "Write a personal reflection (8–10 sentences) on how studying visual literacy has changed the way you experience visual media. Be specific about two or three things you now notice that you did not notice before.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 100 — FINAL SPARK
      {
        type: "spark",
        title: "Spark: The Image That Changed You",
        content: "Find an image — any image, from any source — that genuinely stops you. One that you cannot look past without having to look again. Copy or save it. Write six sentences about it: two describing exactly what you see (denotation), two analysing what it does visually (salience, angle, colour), and two on what it means — what it makes you think or feel, and why. This is the fullest form of visual reading: from observation, through analysis, to meaning. Keep the image. Return to it occasionally. Notice what changes in your reading as you change.",
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
      // ── FOUNDATIONAL 1–20 ──────────────────────────────────────────────────
      // 1
      {
        type: "multiple-choice",
        title: "What Is Cohesion?",
        instruction: "Choose the best definition of cohesion in the context of writing.",
        questions: [
          {
            prompt: "Cohesion in writing refers to:",
            options: [
              "A. The number of sentences in a paragraph",
              "B. The devices and features that hold a text together and create flow between ideas and sentences",
              "C. Using the same word throughout a text",
              "D. Writing sentences of equal length",
            ],
            answer: "B. The devices and features that hold a text together and create flow between ideas and sentences",
          },
        ],
      },
      // 2
      {
        type: "matching",
        title: "Match Cohesive Device Type to Definition",
        instruction: "Draw a line to match each type of cohesive device with its definition.",
        parentTip: "These four device types are the core vocabulary of cohesion analysis. Knowing them precisely gives students a toolkit for improving their own writing.",
        left: ["Pronoun reference", "Conjunction / Connective", "Lexical cohesion", "Ellipsis"],
        right: [
          "Using related words, synonyms, or antonyms to link ideas across sentences",
          "Using 'he', 'she', 'they', 'it' to refer back to a noun already mentioned",
          "Omitting a word or phrase that can be understood from context",
          "A word or phrase that shows a logical relationship between ideas (however, therefore, furthermore)",
        ],
      },
      // 3
      {
        type: "true-false",
        title: "Cohesion Basics",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "A text with good cohesion flows smoothly because ideas connect clearly from one sentence to the next.", answer: true },
          { text: "Repeating the same noun over and over in a paragraph always improves cohesion.", answer: false },
          { text: "Pronouns help create cohesion by referring back to nouns already introduced.", answer: true },
          { text: "Connectives like 'however', 'therefore', and 'furthermore' show logical relationships between ideas.", answer: true },
          { text: "Cohesion only matters in formal writing, not in creative or personal writing.", answer: false },
        ],
      },
      // 4
      {
        type: "circle-correct",
        title: "Which Version Has Better Cohesion?",
        instruction: "Circle the version with better cohesion.",
        questions: [
          {
            prompt: "A or B?",
            options: [
              "A. The scientist worked for thirty years. The scientist published her findings in 2019. The scientist's findings changed the field. The scientist received an award.",
              "B. The scientist worked for thirty years before publishing her findings in 2019. Her groundbreaking discoveries transformed the field, and she was subsequently awarded a major prize.",
            ],
          },
          {
            prompt: "A or B?",
            options: [
              "A. She wanted to leave. She stayed because of the rain. The rain was heavy. She waited for the rain to stop.",
              "B. She wanted to leave, but the heavy rain kept her where she was. She waited for it to stop.",
            ],
          },
        ],
      },
      // 5
      {
        type: "sorting",
        title: "Sort: Type of Cohesive Device",
        instruction: "Sort each device into the correct column.",
        columns: ["Pronoun reference", "Connective", "Lexical cohesion (synonym/related word)"],
        items: [
          { label: "however" },
          { label: "she (referring back to 'the doctor')" },
          { label: "the researcher (synonym for 'the scientist')" },
          { label: "therefore" },
          { label: "he (referring back to 'the boy')" },
          { label: "the explorer (synonym for 'she')" },
          { label: "furthermore" },
          { label: "it (referring back to 'the idea')" },
        ],
      },
      // 6
      {
        type: "fill-in-blank",
        title: "Types of Connectives",
        instruction: "Complete each sentence with the appropriate connective type. Then identify what logical relationship it creates.",
        parentTip: "Connectives are among the most important tools for creating both cohesion and logical clarity. Discuss what each type of connective signals to the reader.",
        sentences: [
          { text: "The results were positive. ___, further research is still needed. [Contrast]", blanks: ["However / Nevertheless / Yet"] },
          { text: "The company increased spending. ___, profits fell sharply. [Surprising result / contrast]", blanks: ["Nevertheless / Despite this / Nonetheless"] },
          { text: "She studied for three weeks. ___, she passed the exam with distinction. [Result]", blanks: ["As a result / Consequently / Therefore"] },
          { text: "He enjoys swimming. ___, he runs three times a week. [Addition]", blanks: ["In addition / Furthermore / Moreover / He also"] },
          { text: "The plan was ambitious. ___, it had serious flaws. [Concession]", blanks: ["Nevertheless / Despite this / Even so"] },
        ],
      },
      // 7
      {
        type: "open-response",
        title: "Identify Cohesive Devices",
        instruction: "Read the paragraph below. Find and label each cohesive device using these codes: PR (pronoun reference), CO (connective), LE (lexical cohesion/synonym).",
        parentTip: "Work through this together the first time. Reading the paragraph aloud while looking for each type is usually more effective than scanning silently.",
        prompts: [
          {
            text: "Paragraph: 'Marie Curie was one of the most remarkable scientists of the twentieth century. The Polish-born researcher became the first person to win two Nobel Prizes, in physics and in chemistry. Her groundbreaking discoveries about radioactivity transformed our understanding of atomic structure. However, despite her extraordinary achievements, the physicist faced significant discrimination as a woman in science. She persevered nonetheless, and her legacy continues to inspire scientists around the world.'\n\nList three cohesive devices you found, label their type, and explain what they connect.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      // 8
      {
        type: "multiple-choice",
        title: "Pronoun Reference",
        instruction: "Choose the most accurate answer about pronoun reference as a cohesive device.",
        questions: [
          {
            prompt: "Why do writers use pronouns to refer back to nouns already mentioned?",
            options: [
              "A. Because pronouns are shorter and easier to spell",
              "B. Because pronoun reference creates cohesion by linking sentences without the repetition that makes writing feel choppy",
              "C. Because pronouns are more formal than nouns",
              "D. Because it is grammatically required",
            ],
            answer: "B. Because pronoun reference creates cohesion by linking sentences without the repetition that makes writing feel choppy",
          },
          {
            prompt: "What problem can arise from excessive pronoun use without clear antecedents?",
            options: [
              "A. The writing becomes too formal",
              "B. Ambiguity — the reader may not know which noun the pronoun refers to",
              "C. The writing becomes too informal",
              "D. The paragraph becomes too short",
            ],
            answer: "B. Ambiguity — the reader may not know which noun the pronoun refers to",
          },
        ],
      },
      // 9
      {
        type: "true-false",
        title: "Connectives and Logical Relationships",
        instruction: "Mark T (true) or F (false) for each statement about connectives.",
        statements: [
          { text: "'However' signals a contrast or concession.", answer: true },
          { text: "'Therefore' signals an addition of a similar point.", answer: false },
          { text: "'Furthermore' signals an additional, related point.", answer: true },
          { text: "'Although' can begin a subordinate clause that concedes a point.", answer: true },
          { text: "'Consequently' signals a result or effect.", answer: true },
        ],
      },
      // 10
      {
        type: "sorting",
        title: "Sort Connectives by Logical Relationship",
        instruction: "Sort each connective into the correct column.",
        columns: ["Contrast", "Addition", "Result / Cause", "Concession"],
        items: [
          { label: "however" },
          { label: "furthermore" },
          { label: "therefore" },
          { label: "although" },
          { label: "nevertheless" },
          { label: "moreover" },
          { label: "consequently" },
          { label: "even though" },
          { label: "in addition" },
          { label: "despite this" },
        ],
      },
      // 11
      {
        type: "open-response",
        title: "Fix the Choppy Paragraph",
        instruction: "Rewrite the paragraph below to improve its cohesion. Add connectives, replace repeated nouns with pronouns or synonyms, and smooth the flow. Keep all the information.",
        parentTip: "Read the original aloud first so your child can hear where the choppiness is. Then read the revised version aloud to check whether the flow has actually improved.",
        prompts: [
          {
            text: "Choppy paragraph: 'The old lighthouse stood on the cliff. The old lighthouse was very tall. The old lighthouse was built in 1892. The old lighthouse guided ships. Ships were often wrecked on the rocks. The rocks were dangerous. The lighthouse keeper lived in the lighthouse. The lighthouse keeper was called Amos.'\n\nRewritten paragraph:",
            type: "box",
          },
        ],
      },
      // 12
      {
        type: "fill-in-blank",
        title: "Lexical Cohesion",
        instruction: "Lexical cohesion links sentences through related vocabulary — synonyms, near-synonyms, and associated words. Complete each reference chain.",
        parentTip: "A reference chain is a sequence of related words tracking the same person or thing through a paragraph. It creates cohesion by establishing what linguists call a 'lexical set'.",
        sentences: [
          { text: "The doctor entered the room. The ___ checked the patient's notes. She then spoke to the ___.", blanks: ["physician / medical professional / specialist", "patient / man / woman / child"] },
          { text: "The ancient temple was discovered in 1923. The ___ had been buried for centuries. Archaeologists spent years restoring the ___.", blanks: ["structure / monument / building / ruin", "site / artifact / relic / temple"] },
          { text: "Scientists are investigating the phenomenon. The ___ is not fully understood. Researchers hope new studies will explain the ___.", blanks: ["effect / occurrence / event", "mystery / question / puzzle"] },
        ],
      },
      // 13
      {
        type: "multiple-choice",
        title: "Cohesion vs Coherence",
        instruction: "Cohesion and coherence are related but different. Choose the most accurate definition of each.",
        questions: [
          {
            prompt: "Cohesion refers to:",
            options: [
              "A. Whether ideas make sense overall",
              "B. The linguistic devices (pronouns, connectives, lexical chains) that link sentences",
              "C. The grammatical correctness of sentences",
              "D. The length and variety of sentences",
            ],
            answer: "B. The linguistic devices (pronouns, connectives, lexical chains) that link sentences",
          },
          {
            prompt: "Coherence refers to:",
            options: [
              "A. The connectives used between sentences",
              "B. Whether the overall meaning and structure of a text makes sense to the reader",
              "C. The length of the text",
              "D. The vocabulary level of the text",
            ],
            answer: "B. Whether the overall meaning and structure of a text makes sense to the reader",
          },
        ],
      },
      // 14
      {
        type: "open-response",
        title: "Write a Cohesive Paragraph",
        instruction: "Write an original paragraph (6–8 sentences) on a topic of your choice, deliberately using at least one of each: a pronoun reference, a connective, and a lexical chain (using two or more synonyms for the same person or thing). Annotate your paragraph when finished.",
        parentTip: "The best test of a cohesive paragraph is whether it flows smoothly when read aloud. Read it together and mark any places that still feel like they need better connections.",
        prompts: [
          { text: "Write your paragraph here:", type: "box" },
          { text: "Label and list the cohesive devices you used:", type: "lines", lines: 3 },
        ],
      },
      // 15 — TIP
      {
        type: "tip",
        title: "Tip: The Three Cohesion Repairs",
        content: "Most cohesion problems in student writing can be fixed with three repairs. (1) Repetition repair: if you keep writing the same noun over and over (the scientist...the scientist...the scientist), replace some with pronouns (she, her) or synonyms (the researcher, the physicist, the expert). (2) Connection repair: if two sentences feel disconnected — as if they were written by two different people — add a connective that explains the logical relationship between them (however, therefore, furthermore, in contrast). (3) Reference repair: if you have used a pronoun but the reader might not know which noun it refers to, make the reference explicit. Apply these three repairs to your own writing whenever a paragraph feels choppy.",
      },
      // 16
      {
        type: "fill-in-blank",
        title: "Substitution as a Cohesive Device",
        instruction: "Substitution replaces a word or phrase with a pro-form (so, one, ones, do, does, did). Complete each sentence using the appropriate substitution.",
        sentences: [
          { text: "I wanted to buy the blue jacket, but I ended up buying the red ___ instead.", blanks: ["one"] },
          { text: "She has already eaten, but I have not ___ yet.", blanks: ["done so / eaten / had time"] },
          { text: "'Have you sent the report?' 'Yes, I have ___.'" , blanks: ["done so / sent it"] },
          { text: "'Which of the essays was strongest?' 'The ___ on climate policy was far superior.'", blanks: ["one"] },
        ],
      },
      // 17
      {
        type: "sorting",
        title: "Sort: Cohesive Device in Each Sentence",
        instruction: "Identify and sort the underlined cohesive device in each sentence into the correct column.",
        columns: ["Pronoun reference", "Connective", "Lexical cohesion", "Substitution / Ellipsis"],
        items: [
          { label: "'The explorer was exhausted. She sat down and did not move.' — 'She'" },
          { label: "'The results were surprising. However, they confirmed the hypothesis.' — 'However'" },
          { label: "'The scientist worked all night. The researcher published her findings the next day.' — 'researcher'" },
          { label: "'Did you finish the task?' 'Yes, I did.' — 'did'" },
          { label: "'The plan had risks. Furthermore, it was expensive.' — 'Furthermore'" },
          { label: "'The author wrote three novels. The first one was her most celebrated.' — 'one'" },
        ],
      },
      // 18
      {
        type: "open-response",
        title: "Build a Reference Chain",
        instruction: "Write a paragraph (5–7 sentences) about a well-known historical or scientific figure. Throughout the paragraph, build a complete reference chain for the person using at least four different referring expressions (their name, a pronoun, two different descriptive phrases). Label each expression in your paragraph.",
        parentTip: "A well-built reference chain is one of the marks of sophisticated writing. Discuss: what different referring expressions can you think of for this person?",
        prompts: [
          { text: "Person: ___________________________________________\nYour paragraph (reference chain labelled):", type: "box" },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Annotate a Published Paragraph",
        instruction: "Choose a paragraph from any published book, article, or quality non-fiction source. Copy it and annotate it for cohesive devices: label every pronoun reference (PR), connective (CO), and example of lexical cohesion (LE). Count how many of each type you find.",
        parentTip: "Annotation of real published text is the best way to see cohesive devices at work in genuine, professional prose. Choose a paragraph your child finds interesting.",
        prompts: [
          { text: "Text source: ___________________________________________\nCopied and annotated paragraph:", type: "box" },
          { text: "Count: Pronoun references: ___ Connectives: ___ Lexical cohesion: ___", type: "lines", lines: 1 },
        ],
      },
      // 20 — SPARK
      {
        type: "spark",
        title: "Spark: The Cohesion Experiment",
        content: "Take any paragraph you have written recently. Deliberately remove all cohesive devices — replace every pronoun with its noun, remove every connective, and eliminate any lexical variation (use only the original noun, not synonyms). Read the result aloud. Then restore the cohesive devices and read it again. Share both versions with your parent or guardian and discuss: what exactly do cohesive devices do? What would communication be like without them?",
      },
      // ── DEVELOPING 21–50 ──────────────────────────────────────────────────
      // 21
      {
        type: "fill-in-blank",
        title: "Formal Connectives in Academic Writing",
        instruction: "Academic and formal writing uses specific connectives. Complete each academic sentence with the most appropriate connective.",
        parentTip: "Formal connectives signal sophistication and analytical control. Discuss the precise meaning of each — 'nevertheless' is not quite the same as 'however'.",
        sentences: [
          { text: "The initial results were promising. ___, the sample size was too small to draw conclusions.", blanks: ["However / Nevertheless"] },
          { text: "The data supports the hypothesis. ___, further investigation is recommended.", blanks: ["Nevertheless / However"] },
          { text: "The policy has reduced costs. ___, it has increased unemployment.", blanks: ["However / Conversely / Nevertheless"] },
          { text: "Several factors contributed to the outcome. ___, the most significant was the change in leadership.", blanks: ["Of these / Nevertheless / However"] },
          { text: "The research found a clear pattern. ___, the researchers were careful to avoid overstating the significance.", blanks: ["Nevertheless / However / Even so"] },
        ],
      },
      // 22
      {
        type: "open-response",
        title: "Fix Two Choppy Paragraphs",
        instruction: "Rewrite each choppy paragraph to improve cohesion. Use pronouns, connectives, and lexical variation. Keep all information.",
        parentTip: "Read each before and after version aloud. The improvement in flow should be immediately audible.",
        prompts: [
          {
            text: "Paragraph 1: 'The river flooded. The river flooded the town. The town was unprepared. The town had no flood barriers. Residents left the town. Residents went to shelters. Shelters were crowded.'\n\nRewritten version:",
            type: "box",
          },
          {
            text: "Paragraph 2: 'Amelia Earhart was a pilot. Amelia Earhart was the first woman to fly solo across the Atlantic. Amelia Earhart disappeared in 1937. Amelia Earhart was flying around the world. No one found Amelia Earhart.'\n\nRewritten version:",
            type: "box",
          },
        ],
      },
      // 23
      {
        type: "multiple-choice",
        title: "Cohesion in Different Text Types",
        instruction: "Choose the most accurate answer.",
        questions: [
          {
            prompt: "Academic essays typically use which type of connectives most extensively?",
            options: [
              "A. Informal ones: 'also', 'plus', 'but'",
              "B. Formal ones: 'furthermore', 'consequently', 'nevertheless'",
              "C. No connectives — academic writing avoids them",
              "D. Only temporal connectives: 'first', 'then', 'finally'",
            ],
            answer: "B. Formal ones: 'furthermore', 'consequently', 'nevertheless'",
          },
          {
            prompt: "Narrative fiction uses cohesion primarily through:",
            options: [
              "A. Formal academic connectives",
              "B. Pronoun reference, temporal connectives (then, after, later), and lexical chains tracking characters",
              "C. Only lexical cohesion",
              "D. Avoiding all connectives for maximum literary effect",
            ],
            answer: "B. Pronoun reference, temporal connectives (then, after, later), and lexical chains tracking characters",
          },
        ],
      },
      // 24
      {
        type: "open-response",
        title: "Write a Cohesive Argumentative Paragraph",
        instruction: "Write an argumentative paragraph (7–9 sentences) on any topic, using at least three different formal connectives to show logical relationships between your claims. Label each connective and the relationship it signals (contrast, addition, result, concession).",
        parentTip: "Connective use in argument writing is a sign of logical organisation. Discuss: what relationship does each connective signal? Does the argument flow logically?",
        prompts: [
          { text: "Your argumentative paragraph (connectives labelled):", type: "box" },
        ],
      },
      // 25
      {
        type: "true-false",
        title: "Cohesion Problems",
        instruction: "Mark T (true) or F (false) for each statement about common cohesion problems.",
        statements: [
          { text: "Repeating the same noun in every sentence where it could be replaced by a pronoun is a cohesion problem.", answer: true },
          { text: "Using a pronoun without a clear antecedent (the noun it refers to) creates ambiguity.", answer: true },
          { text: "Using the same connective repeatedly throughout a text creates cohesion.", answer: false },
          { text: "A sudden topic shift without a transitional signal is a coherence problem.", answer: true },
          { text: "Using synonyms and near-synonyms for the same concept throughout a text improves lexical cohesion.", answer: true },
        ],
      },
      // 26
      {
        type: "fill-in-blank",
        title: "Cohesion in Narrative Writing",
        instruction: "Narrative writing uses specific cohesive devices to track characters and sequences of events. Complete each sentence.",
        sentences: [
          { text: "Temporal connectives like ___, ___, and ___ signal the sequence of events in a narrative.", blanks: ["then", "after", "eventually / later / afterwards"] },
          { text: "A reference chain tracking a character across a narrative might include their ___, a ___, and descriptive ___ that build the reader's picture of them.", blanks: ["name", "pronoun", "phrases / labels"] },
          { text: "Lexical cohesion in narrative often works through ___ — a recurring image, word, or phrase that echoes through the text.", blanks: ["motif / leitmotif / repeated imagery"] },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Write a Cohesive Narrative Paragraph",
        instruction: "Write a narrative paragraph (7–9 sentences) describing a sequence of events. Use at least four temporal connectives to signal the sequence, and build a reference chain that tracks your main character using at least three different expressions.",
        parentTip: "Temporal cohesion is the most important form of cohesion in narrative writing. Discuss: what happens when a narrative lacks temporal connectives? (It feels like a list rather than a story.)",
        prompts: [
          { text: "Your paragraph:", type: "box" },
          { text: "Temporal connectives used: ___________________________________________\nReference chain expressions: ___________________________________________", type: "lines", lines: 3 },
        ],
      },
      // 28
      {
        type: "open-response",
        title: "Analyse Cohesion in a Professionally Written Paragraph",
        instruction: "Choose a paragraph from a book, article, or essay that you find exceptionally well-written. Identify every cohesive device. Write 4–5 sentences analysing what the writer does that creates the paragraph's sense of flow and connection.",
        parentTip: "Analysing exceptional writing is one of the most effective ways to improve your own. Discuss: what specifically makes this paragraph feel like it flows?",
        prompts: [
          { text: "Source and copied paragraph: ___________________________________________", type: "box" },
          { text: "Your cohesion analysis:", type: "lines", lines: 5 },
        ],
      },
      // 29
      {
        type: "fill-in-blank",
        title: "Ellipsis as a Cohesive Device",
        instruction: "Ellipsis is the omission of words that can be understood from context — it creates cohesion by assuming shared knowledge. Fill the gap to show what was omitted.",
        sentences: [
          { text: "She can sing well, and so can ___. [What was omitted from the second clause?]", blanks: ["he"] },
          { text: "'Are you coming to the meeting?' 'I'm not sure if I ___.' [What was omitted?]", blanks: ["am / am coming"] },
          { text: "The first report was comprehensive; the second ___ [was] less ___.", blanks: ["[was]", "so / comprehensive"] },
          { text: "He arrived first, and she ___ [arrived] shortly after.", blanks: ["[arrived]"] },
        ],
      },
      // 30 — TIP
      {
        type: "tip",
        title: "Tip: Cohesion Is What Makes Writing Feel Like Writing",
        content: "Imagine communication without cohesive devices — every sentence an isolated fact, with no signal of how ideas connect to each other. The result would not just be harder to read; it would barely function as communication at all. Cohesion is the infrastructure of language — it is so fundamental that we usually notice it only when it is missing. The best writers are not consciously aware of using cohesive devices any more than an experienced driver is consciously aware of changing gears. The devices become automatic. But to get to that automatic fluency, you first need to understand them precisely — which is what this worksheet is doing.",
      },
      // 31
      {
        type: "open-response",
        title: "Cohesion in Persuasive Writing",
        instruction: "Write a persuasive paragraph (7–9 sentences) arguing for a cause of your choice. Use: at least two formal connectives (furthermore, however, therefore, consequently), one pronoun reference chain, and at least one piece of lexical cohesion. Label each device.",
        prompts: [
          { text: "Your persuasive paragraph (devices labelled):", type: "box" },
        ],
      },
      // 32
      {
        type: "multiple-choice",
        title: "Cohesion Across Paragraphs",
        instruction: "Cohesion also operates between paragraphs, not just within them. Choose the most accurate answer.",
        questions: [
          {
            prompt: "A paragraph that begins 'This perspective, however, fails to account for the historical evidence' is creating inter-paragraph cohesion by:",
            options: [
              "A. Introducing a completely new topic",
              "B. Using 'however' and 'this perspective' to create a contrast with the previous paragraph",
              "C. Repeating the same point from the previous paragraph",
              "D. Introducing the essay's conclusion",
            ],
            answer: "B. Using 'however' and 'this perspective' to create a contrast with the previous paragraph",
          },
        ],
      },
      // 33
      {
        type: "fill-in-blank",
        title: "Inter-Paragraph Cohesion",
        instruction: "Complete each opening sentence of a second paragraph to create inter-paragraph cohesion with the first paragraph.",
        sentences: [
          { text: "First paragraph argues that exercise improves mental health. Second paragraph opening: '___, the relationship between exercise and physical wellbeing is equally significant.'", blanks: ["Furthermore / In addition to this"] },
          { text: "First paragraph argues for the benefits of social media. Second paragraph opening: '___ these advantages, social media also presents significant risks.'", blanks: ["Despite / Beyond / Alongside"] },
          { text: "First paragraph describes the first stage of the process. Second paragraph opening: '___ this initial stage has been completed, the second phase begins.'", blanks: ["Once / After / When"] },
        ],
      },
      // 34
      {
        type: "open-response",
        title: "Write Two Cohesively Linked Paragraphs",
        instruction: "Write two paragraphs on any topic. The transition between them should feel seamless: use an inter-paragraph connective and a reference back to the key idea of the first paragraph. Label all cohesive devices in both paragraphs.",
        parentTip: "Read both paragraphs aloud together. The transition between them should feel natural and logical. If there is a jolt, identify what is missing.",
        prompts: [
          { text: "Your two cohesively linked paragraphs (devices labelled):", type: "box" },
        ],
      },
      // 35
      {
        type: "true-false",
        title: "Cohesion in Different Genres",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Instruction texts (recipes, how-to guides) typically use temporal connectives (first, then, next, finally).", answer: true },
          { text: "Academic essays use the same connectives as casual conversation.", answer: false },
          { text: "News reports often use cohesion through reference chains that track a named person through the article.", answer: true },
          { text: "Poems never use cohesive devices.", answer: false },
          { text: "The connectives used in a text reveal its genre and register.", answer: true },
        ],
      },
      // 36
      {
        type: "sorting",
        title: "Match Connective to Genre",
        instruction: "Sort each connective into the genre or text type where it is most commonly found.",
        columns: ["Academic essay", "Instruction text / Recipe", "News report / Feature article"],
        items: [
          { label: "furthermore" },
          { label: "first, add the flour" },
          { label: "the incident occurred when" },
          { label: "notwithstanding the above" },
          { label: "then stir for two minutes" },
          { label: "according to sources" },
          { label: "conversely" },
          { label: "once the mixture has cooled" },
          { label: "it was reported that" },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Write a Cohesive Information Text",
        instruction: "Write a short information paragraph (6–8 sentences) about any topic you are studying in another subject. Use: at least two different connectives, one reference chain, and at least one example of lexical cohesion. When done, annotate every cohesive device.",
        prompts: [
          { text: "Topic: ___________________________________________\nYour information paragraph (annotated):", type: "box" },
        ],
      },
      // 38
      {
        type: "fill-in-blank",
        title: "Thematic Progression",
        instruction: "Thematic progression refers to how the topic of each sentence connects to the topic of the previous one. Complete each sentence about thematic progression.",
        sentences: [
          { text: "In ___ progression, the new information (rheme) in one sentence becomes the topic (theme) of the next.", blanks: ["linear / chain"] },
          { text: "In ___ progression, each sentence returns to the same central topic, adding new information each time.", blanks: ["constant / parallel"] },
          { text: "When a paragraph has no clear thematic progression — when sentences seem to be in random order — the reader experiences ___.", blanks: ["confusion / disorientation / incoherence"] },
        ],
      },
      // 39
      {
        type: "open-response",
        title: "Fix Coherence as Well as Cohesion",
        instruction: "The paragraph below has cohesive devices but is still confusing because the ideas are not in a logical order (a coherence problem, not just a cohesion problem). Reorder the sentences so the paragraph makes sense, and add any cohesive devices needed.",
        prompts: [
          {
            text: "Disorganised paragraph: 'Therefore, it returned to the coast in June. The whale was first spotted off the coast in March. However, the whale had been absent for three months. Furthermore, marine biologists tagged it for tracking. In addition, it was seen again in February of the following year.'\n\nReordered and improved version:",
            type: "box",
          },
        ],
      },
      // 40 — SPARK
      {
        type: "spark",
        title: "Spark: Write Three Versions of the Same Paragraph",
        content: "Choose any topic — a person, a place, or an idea that interests you. Write the same paragraph three times, using three different dominant cohesive strategies: (1) Version 1 — rely primarily on pronoun reference; (2) Version 2 — rely primarily on formal connectives; (3) Version 3 — rely primarily on lexical cohesion and reference chains. Read all three aloud and discuss: which feels most appropriate for this topic, and why? What does the choice of dominant cohesive strategy reveal about the different 'voices' in each version?",
      },
      // ── CONSOLIDATING 41–80 ───────────────────────────────────────────────
      // 41
      {
        type: "open-response",
        title: "Comparative Cohesion Analysis",
        instruction: "Find two paragraphs from two different genres (e.g., a novel extract and an encyclopedia entry). Analyse and compare the cohesive devices in each. Write 5–6 sentences on how the cohesive device choices reflect the genre and purpose of each text.",
        prompts: [
          { text: "Source 1 (genre): ___________________________________________\nSource 2 (genre): ___________________________________________\nYour comparison:", type: "box" },
        ],
      },
      // 42
      {
        type: "fill-in-blank",
        title: "Cohesion in Extended Writing",
        instruction: "Good cohesion in a multi-paragraph text requires devices that work across the whole text, not just within paragraphs. Complete each sentence about macro-cohesion.",
        sentences: [
          { text: "A keyword or phrase that recurs throughout a long text creates ___ cohesion at the macro level.", blanks: ["lexical"] },
          { text: "An argument that returns in the conclusion to the claim made in the introduction creates ___ and ___.", blanks: ["cohesion", "closure / coherence"] },
          { text: "Headings and subheadings in non-fiction texts create a form of ___ cohesion by signalling the structure of the whole text.", blanks: ["structural / macro"] },
        ],
      },
      // 43
      {
        type: "multiple-choice",
        title: "Cohesion and Register",
        instruction: "Choose the most accurate answer about the relationship between cohesion and register.",
        questions: [
          {
            prompt: "Which set of connectives is most appropriate for a formal academic essay?",
            options: [
              "A. also, but, so, plus",
              "B. furthermore, nevertheless, consequently, notwithstanding",
              "C. and then, but also, cos, anyway",
              "D. first of all, next up, finally",
            ],
            answer: "B. furthermore, nevertheless, consequently, notwithstanding",
          },
          {
            prompt: "In informal written communication (e.g., a text message), which approach to cohesion is most common?",
            options: [
              "A. Elaborate reference chains and formal connectives",
              "B. Minimal or no explicit connectives, relying on shared context and ellipsis",
              "C. Dense academic vocabulary for lexical cohesion",
              "D. Passive voice and nominalisation",
            ],
            answer: "B. Minimal or no explicit connectives, relying on shared context and ellipsis",
          },
        ],
      },
      // 44
      {
        type: "open-response",
        title: "Write a Sustained Cohesive Essay",
        instruction: "Write a short essay (intro + two TEEL paragraphs + conclusion, approximately 350 words) on any topic. Focus on making the cohesion seamless throughout: the paragraphs should flow from one to the next, key terms should be tracked through reference chains, and connectives should signal the logical relationships between ideas.",
        parentTip: "Read the complete essay aloud before finalising. Cohesion problems are often audible — a jolt in reading aloud almost always signals a cohesion or coherence issue.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 45 — TIP
      {
        type: "tip",
        title: "Tip: The Three Levels of Cohesion",
        content: "Cohesion operates at three levels in a text. (1) Sentence level: within a sentence, cohesion comes from the grammatical relationships between words and clauses. (2) Paragraph level: between sentences, cohesion comes from pronoun reference, connectives, and lexical chains. (3) Whole-text level: across paragraphs and sections, cohesion comes from repeated key terms, the return to the central argument, and structural signals like headings and transitional paragraphs. A text that is cohesive at all three levels will feel completely unified — the reader will never lose the thread. The goal is to develop the instinct for cohesion at all three levels simultaneously.",
      },
      // 46
      {
        type: "open-response",
        title: "Analyse and Improve Your Own Writing",
        instruction: "Choose any piece of extended writing you have produced in this course — from any subject. Identify three specific cohesion problems: a repeated noun that should be a pronoun, a missing connective, and a place where lexical cohesion could be improved. Rewrite each problem area and explain what you changed and why.",
        parentTip: "Self-diagnosis and repair of cohesion problems is the skill that transfers most directly to improved writing. Be honest — every piece of writing has cohesion problems that can be improved.",
        prompts: [
          { text: "Cohesion problem 1 (repeated noun): original — ___ / improved — ___", type: "lines", lines: 2 },
          { text: "Cohesion problem 2 (missing connective): original — ___ / improved — ___", type: "lines", lines: 2 },
          { text: "Cohesion problem 3 (lexical cohesion): original — ___ / improved — ___", type: "lines", lines: 2 },
        ],
      },
      // 47
      {
        type: "open-response",
        title: "Cohesion in a TEEL Paragraph",
        instruction: "Write a TEEL analytical paragraph on any text. Then go back and annotate every cohesive device you used. Which types did you use most? Are there any places where cohesion could be strengthened?",
        prompts: [
          { text: "Your TEEL paragraph (annotated for cohesive devices):", type: "box" },
          { text: "Reflection on your cohesive device use:", type: "lines", lines: 3 },
        ],
      },
      // 48
      {
        type: "true-false",
        title: "Advanced Cohesion Concepts",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Cohesion and coherence together produce the quality of a text that makes it feel complete and unified.", answer: true },
          { text: "A text can be cohesive (lots of linking devices) but still incoherent (the ideas do not make sense together).", answer: true },
          { text: "Overusing formal connectives in informal writing creates a cohesion problem.", answer: true },
          { text: "The most sophisticated writers rarely use cohesive devices.", answer: false },
          { text: "Understanding cohesion in reading helps you to produce more cohesive writing.", answer: true },
        ],
      },
      // 49
      {
        type: "fill-in-blank",
        title: "Cohesion Across a Full Essay",
        instruction: "Complete each sentence about cohesion in extended writing.",
        sentences: [
          { text: "A thesis statement in the introduction that is ___ to in the conclusion creates textual unity.", blanks: ["returned / referred back"] },
          { text: "Each body paragraph should ___ back to the essay question or thesis through its link sentence.", blanks: ["connect / refer / circle back"] },
          { text: "Using the same ___ throughout an essay (rather than calling it different names) creates lexical consistency.", blanks: ["key term / terminology / vocabulary"] },
          { text: "The opening sentence of each new paragraph should ___ to the argument of the previous paragraph.", blanks: ["refer / connect / signal a relationship"] },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Annotate an Essay for Macro-Cohesion",
        instruction: "Take any essay you have written (from this or another worksheet). Read it as a whole and annotate it at the macro level: Does the conclusion return to the thesis? Do the paragraph openings signal how each paragraph relates to the one before? Are key terms consistent throughout? Write 4–5 sentences reflecting on the macro-cohesion of your essay.",
        parentTip: "Macro-level cohesion is what gives an essay its sense of being a unified whole rather than a collection of separate paragraphs. This is the most advanced level of cohesion analysis.",
        prompts: [
          { text: "Essay title: ___________________________________________\nYour macro-cohesion reflection:", type: "box" },
        ],
      },
      // 51–80 EXTENDING
      // 51
      {
        type: "open-response",
        title: "Cohesion in Legal and Official Language",
        instruction: "Find a short extract from a legal document, government report, or official notice. Write 4–5 sentences analysing how it uses cohesive devices — particularly its connective choices. What do the cohesive device choices tell us about the register and purpose of the text?",
        prompts: [
          { text: "Source: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 52
      {
        type: "open-response",
        title: "Write a Sustained Cohesive Argument",
        instruction: "Write a sustained argument (400–500 words) on any social or political issue. The writing must demonstrate full cohesion at all three levels: sentence, paragraph, and whole-text. After writing, annotate at least six cohesive devices and explain how each one contributes to the overall flow.",
        prompts: [
          { text: "Your argument (annotated):", type: "box" },
        ],
      },
      // 53
      {
        type: "multiple-choice",
        title: "Cohesion and Argumentation",
        instruction: "Choose the most accurate answer.",
        questions: [
          {
            prompt: "A well-written argumentative paragraph uses connectives primarily to:",
            options: [
              "A. Add words to meet a length requirement",
              "B. Show the logical relationships between claims, evidence, and explanations",
              "C. Make the writing sound more sophisticated regardless of meaning",
              "D. Separate ideas from each other",
            ],
            answer: "B. Show the logical relationships between claims, evidence, and explanations",
          },
          {
            prompt: "When a writer uses 'nevertheless' to begin a sentence, they are signalling that:",
            options: [
              "A. They are adding a point that agrees with the previous one",
              "B. Despite something just acknowledged, the argument will proceed as stated",
              "C. They are changing the topic entirely",
              "D. They are drawing a conclusion",
            ],
            answer: "B. Despite something just acknowledged, the argument will proceed as stated",
          },
        ],
      },
      // 54
      {
        type: "open-response",
        title: "Analyse Cohesion in a Political Speech",
        instruction: "Find a short extract from a political speech (any politician, any era, any country). Write 4–5 sentences analysing the cohesive devices used. How does cohesion in speech differ from cohesion in written texts? What devices does the speaker use to create flow and logical connection?",
        prompts: [
          { text: "Speech and speaker: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Write a News Article with Strong Cohesion",
        instruction: "Write a short news article (8–10 sentences) reporting on a real or fictional event. Focus on cohesion: use a clear reference chain for the main subject, appropriate temporal connectives, and at least two different formal connectives. Annotate the cohesive devices.",
        prompts: [
          { text: "Your news article (annotated):", type: "box" },
        ],
      },
      // 56
      {
        type: "fill-in-blank",
        title: "Cohesive Ties in Academic Writing",
        instruction: "Academic writing uses specific patterns of cohesive ties. Complete each sentence.",
        sentences: [
          { text: "The academic phrase 'As noted above' creates ___ cohesion by referring back to an earlier point.", blanks: ["anaphoric / backward-looking"] },
          { text: "The phrase 'As we will see in the following section' creates ___ cohesion by referring forward to a point to come.", blanks: ["cataphoric / forward-looking"] },
          { text: "The repeated use of a key term (e.g., 'sustainability') throughout an essay creates ___ cohesion.", blanks: ["lexical"] },
          { text: "When a second paragraph begins with 'This argument, however...' it creates cohesion with the ___ paragraph.", blanks: ["previous / preceding / first"] },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "Analyse Your Own Extended Writing for Cohesion",
        instruction: "Choose the longest piece of writing you have produced in this or any other worksheet. Read it through specifically looking for cohesion. Write a diagnostic report: identify three places where cohesion is strong and three places where it could be improved. Rewrite the three weaker passages.",
        prompts: [
          { text: "Strong cohesion (three examples):", type: "box" },
          { text: "Weak cohesion (three examples) and rewrites:", type: "box" },
        ],
      },
      // 58
      {
        type: "open-response",
        title: "Cohesion in Scientific Writing",
        instruction: "Find a paragraph from a scientific report or popular science article. Write 4–5 sentences analysing the cohesive devices: are the connectives formal or informal? How is lexical cohesion used to track a scientific concept through the paragraph? How is pronoun reference used?",
        prompts: [
          { text: "Source: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 59
      {
        type: "true-false",
        title: "Cohesion as a Craft Skill",
        instruction: "Mark T (true) or F (false).",
        statements: [
          { text: "Cohesion is a skill that improves with conscious practice and attention.", answer: true },
          { text: "The best writers use cohesion instinctively, without having to think about it.", answer: true },
          { text: "Understanding cohesion analytically is the first step towards using it instinctively.", answer: true },
          { text: "Cohesion problems are only present in student writing, not in professional writing.", answer: false },
          { text: "Editing specifically for cohesion is a separate, valuable stage in the writing process.", answer: true },
        ],
      },
      // 60 — SPARK
      {
        type: "spark",
        title: "Spark: The Cohesion Edit",
        content: "Choose any text of substantial length — a newspaper article, a chapter from a book, an essay you have written. Do a complete cohesion edit: read through once marking every cohesive device (PR, CO, LE); read through again identifying any cohesion problems (repeated nouns that could be pronouns, missing connectives, unclear pronoun references); write a short report summarising what you found. If it is your own writing, make the repairs. If it is a professional text, write 3–4 sentences assessing the quality of the cohesion and explaining your evaluation.",
      },
      // 61–80
      // 61
      {
        type: "open-response",
        title: "Full Cohesion Analysis Essay",
        instruction: "Write a short analytical essay (intro + two TEEL paragraphs + conclusion, approximately 300 words) on the cohesive devices used in a published text. Argue that specific cohesive choices reflect the genre, register, or purpose of the text.",
        prompts: [
          { text: "Text: ___________________________________________\nYour essay:", type: "box" },
        ],
      },
      // 62
      {
        type: "fill-in-blank",
        title: "Cohesion Vocabulary — Advanced",
        instruction: "Complete each sentence with the most precise linguistic term.",
        sentences: [
          { text: "A device that refers back to something already mentioned is called ___ reference.", blanks: ["anaphoric"] },
          { text: "A device that refers forward to something not yet mentioned is called ___ reference.", blanks: ["cataphoric"] },
          { text: "The omission of words that can be understood from context is called ___.", blanks: ["ellipsis"] },
          { text: "The use of related vocabulary to create links across a text is called ___ cohesion.", blanks: ["lexical"] },
          { text: "Words and phrases that show logical relationships between ideas are called ___ or ___.", blanks: ["connectives", "conjunctions / discourse markers"] },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Cohesion in Literary Fiction",
        instruction: "Choose a paragraph from a novel you have read and write 4–5 sentences analysing its cohesion. How does the author use pronoun reference, lexical cohesion, and connectives? How does the cohesion create the sense of a unified narrative voice?",
        prompts: [
          { text: "Novel and chosen paragraph: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 64
      {
        type: "open-response",
        title: "Create a Cohesion Teaching Resource",
        instruction: "Create a one-page teaching resource explaining cohesive devices for a Year 5 student. Include: definitions, examples, and a simple activity. The resource should be clear, visually organised, and genuinely useful.",
        prompts: [
          { text: "Your teaching resource:", type: "box" },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Cohesion in Multilingual Writing",
        instruction: "Write a reflection (4–5 sentences) on how cohesive devices might work differently in different languages. If you know or have studied another language, reflect on how cohesion is expressed in that language compared to English.",
        parentTip: "Cross-linguistic comparison reveals that cohesive devices are universal but their specific forms vary between languages. Discuss what you know or can find out about how another language handles cohesion.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 66
      {
        type: "open-response",
        title: "Extended Cohesive Writing Task",
        instruction: "Write an extended piece of writing (450–550 words) in any genre — argument, narrative, information text, personal essay. The writing must demonstrate seamless cohesion at all three levels. After writing, annotate twelve specific cohesive devices and explain the function of each.",
        prompts: [
          { text: "Your extended piece (annotated):", type: "box" },
        ],
      },
      // 67
      {
        type: "open-response",
        title: "Cohesion and Audience",
        instruction: "Write the same 5–6 sentence paragraph twice, for two different audiences. Version 1: for a specialist academic audience (use formal connectives and dense lexical cohesion). Version 2: for a general audience of Year 5 students (use simple connectives and clear pronoun reference). Annotate both.",
        prompts: [
          { text: "Version 1 (academic):", type: "box" },
          { text: "Version 2 (Year 5):", type: "box" },
        ],
      },
      // 68
      {
        type: "multiple-choice",
        title: "Cohesion in Digital Texts",
        instruction: "Choose the most accurate answer about cohesion in digital and online writing.",
        questions: [
          {
            prompt: "Hyperlinks in a webpage create a form of:",
            options: [
              "A. Grammatical cohesion",
              "B. Intertextual cohesion — linking the current text to related texts or sources",
              "C. Ellipsis",
              "D. Lexical substitution",
            ],
            answer: "B. Intertextual cohesion — linking the current text to related texts or sources",
          },
        ],
      },
      // 69
      {
        type: "open-response",
        title: "Analyse Cohesion in a Blog Post",
        instruction: "Find a blog post or online article on a topic that interests you. Write 4–5 sentences analysing its cohesive devices. How do the connectives and reference devices reflect the informal or semi-formal register of the online format?",
        prompts: [
          { text: "Blog or article source: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 70
      {
        type: "open-response",
        title: "Cohesion Across a Complete Essay",
        instruction: "Write a full five-paragraph essay (intro + three body paragraphs + conclusion, approximately 450 words) on any topic. After writing, do a complete cohesion audit: mark all inter-paragraph transitions, check that the thesis is returned to in the conclusion, and ensure every key term is consistent throughout. Write a 3–4 sentence reflection on the overall cohesion quality.",
        prompts: [
          { text: "Your essay:", type: "box" },
          { text: "Cohesion audit reflection:", type: "lines", lines: 4 },
        ],
      },
      // 71–80
      // 71
      {
        type: "true-false",
        title: "Final Cohesion Synthesis",
        instruction: "Mark T (true) or F (false). These test the deepest level of your understanding.",
        statements: [
          { text: "Cohesion is as important as vocabulary and grammar in producing high-quality writing.", answer: true },
          { text: "Sophisticated writers use cohesive devices consciously and for specific effect.", answer: true },
          { text: "Cohesion analysis is only useful for studying grammar, not for improving writing.", answer: false },
          { text: "Understanding cohesive devices in reading helps you produce more cohesive writing.", answer: true },
          { text: "The best writing feels effortless to read precisely because its cohesion is seamless and invisible.", answer: true },
        ],
      },
      // 72
      {
        type: "open-response",
        title: "Write a Guide to Cohesion for a Peer",
        instruction: "Write a concise guide (6–8 sentences) to cohesive devices for a Year 7 peer who has not studied them. Use clear, precise language, give examples of each device type, and explain why they matter for writing quality.",
        prompts: [
          { text: "Your guide:", type: "box" },
        ],
      },
      // 73
      {
        type: "fill-in-blank",
        title: "Cohesion in Examinations",
        instruction: "Complete each sentence about cohesion in examination writing.",
        sentences: [
          { text: "In examination essay writing, strong cohesion signals ___ and ___.", blanks: ["analytical control", "writing maturity / organisation"] },
          { text: "Inter-paragraph transitions that reference the previous argument show the examiner that the essay has ___ structure.", blanks: ["logical / coherent / unified"] },
          { text: "Using a variety of connective types (rather than repeating 'however' or 'furthermore') shows ___ control of cohesive vocabulary.", blanks: ["sophisticated / advanced"] },
          { text: "A consistent reference chain for a key term throughout an essay demonstrates ___ of the topic.", blanks: ["command / mastery / knowledge"] },
        ],
      },
      // 74
      {
        type: "open-response",
        title: "Peer Editing for Cohesion",
        instruction: "Exchange a piece of writing with a family member or friend. Read their writing specifically for cohesion: identify three places where it flows well and three places where it could be improved. Write 4–5 sentences of specific, constructive feedback focused on cohesive devices.",
        prompts: [
          { text: "Writer's name: ___________________________________________\nYour cohesion feedback:", type: "box" },
        ],
      },
      // 75 — TIP
      {
        type: "tip",
        title: "Tip: Cohesion Is an Editing Skill",
        content: "Most writers do not think carefully about cohesion while they are drafting — they are focused on getting ideas down. Cohesion is most effectively improved in the editing stage, when you can read the whole text with distance. Develop a cohesion editing routine: read through once looking specifically for repeated nouns that could be pronouns; read again looking for places where a connective would clarify the logical relationship; read a third time checking that the lexical chains are complete and consistent. This three-pass editing approach is not just for students — it is what professional writers and editors do.",
      },
      // 76
      {
        type: "open-response",
        title: "Final Extended Writing — Full Cohesion Control",
        instruction: "Write your most sophisticated piece of writing in this worksheet (500+ words, any genre). The only goal: demonstrate full, conscious, seamless cohesion at all three levels. After writing, annotate fifteen specific cohesive devices.",
        prompts: [
          { text: "Your piece (annotated):", type: "box" },
        ],
      },
      // 77
      {
        type: "open-response",
        title: "Annotated Portfolio Entry",
        instruction: "Select the piece of writing from this worksheet you are most proud of. Copy it here, annotate five specific cohesive devices, and write a self-evaluation (4–5 sentences).",
        prompts: [
          { text: "Your work (annotated):", type: "box" },
          { text: "Self-evaluation:", type: "box" },
        ],
      },
      // 78
      {
        type: "open-response",
        title: "Cohesion and Critical Reading",
        instruction: "Write a reflection (5–7 sentences) on how studying cohesive devices has changed the way you read. What do you notice now that you did not notice before? Give a specific example from your reading in this worksheet.",
        prompts: [
          { text: "Your reflection:", type: "box" },
        ],
      },
      // 79
      {
        type: "open-response",
        title: "Synthesis: What You Have Learned",
        instruction: "Write a final synthesis (8–10 sentences) of what you have learned about cohesive devices and text coherence. What are the three most important insights? How will you apply them in future writing?",
        prompts: [
          { text: "Your synthesis:", type: "box" },
        ],
      },
      // 80 — SPARK
      {
        type: "spark",
        title: "Spark: The Cohesion Audit Week",
        content: "For one week, every time you write something of substance — a paragraph for any subject, an email, a social media caption, a journal entry — spend two minutes doing a cohesion audit before you send or submit it. Check: Have I overused any noun when a pronoun would do? Have I signalled the logical connections between my ideas with appropriate connectives? Have I built consistent lexical chains for my key terms? Make any needed repairs. At the end of the week, reflect: has the habit of cohesion auditing changed how you write in the first place?",
      },
      // 81–100
      // 81
      {
        type: "open-response",
        title: "Cohesion in Historical Texts",
        instruction: "Find a paragraph from a historical text — a letter, speech, or document written more than 100 years ago. Write 4–5 sentences analysing its cohesive devices. How do they differ from contemporary cohesive conventions? What has changed about how cohesion is expressed in English?",
        prompts: [
          { text: "Text and source: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 82
      {
        type: "open-response",
        title: "Write Across Two Registers — Full Cohesion",
        instruction: "Write the same 200-word piece of writing twice: once in formal academic register and once in informal conversational register. Both versions must be fully cohesive but use different sets of cohesive devices appropriate to each register. Annotate both.",
        prompts: [
          { text: "Formal version (annotated):", type: "box" },
          { text: "Informal version (annotated):", type: "box" },
        ],
      },
      // 83
      {
        type: "multiple-choice",
        title: "Cohesion Mastery: Final Questions",
        instruction: "Choose the most analytically sophisticated answer.",
        questions: [
          {
            prompt: "A student who truly understands cohesion will:",
            options: [
              "A. Use 'furthermore' at the start of every paragraph",
              "B. Apply a variety of cohesive devices appropriate to the genre and register, seamlessly and for specific logical effect",
              "C. Avoid pronouns to prevent ambiguity",
              "D. Use the same connective consistently for clarity",
            ],
            answer: "B. Apply a variety of cohesive devices appropriate to the genre and register, seamlessly and for specific logical effect",
          },
          {
            prompt: "The most accurate description of what cohesion contributes to a text is:",
            options: [
              "A. It adds length and weight to the writing",
              "B. It creates the sense of a unified, flowing, logical whole in which ideas connect clearly",
              "C. It makes the writing seem more sophisticated regardless of content",
              "D. It prevents the need for good ideas",
            ],
            answer: "B. It creates the sense of a unified, flowing, logical whole in which ideas connect clearly",
          },
        ],
      },
      // 84
      {
        type: "fill-in-blank",
        title: "Cohesion Terminology — Final Check",
        instruction: "Complete each sentence with the most precise term.",
        sentences: [
          { text: "The device that uses 'he', 'she', 'they', 'it' to refer back to a previously mentioned noun is called ___ reference.", blanks: ["pronoun / anaphoric"] },
          { text: "The logical relationship of contrast is signalled by connectives such as ___ and ___.", blanks: ["however / nevertheless / yet", "although / despite this"] },
          { text: "The use of related vocabulary and synonyms to link ideas across a text is called ___ cohesion.", blanks: ["lexical"] },
          { text: "The omission of words that can be recovered from context is called ___.", blanks: ["ellipsis"] },
          { text: "The quality of a text making sense overall — its ideas being logically organised — is called ___.", blanks: ["coherence"] },
        ],
      },
      // 85
      {
        type: "open-response",
        title: "Write a Personal Essay with Strong Cohesion",
        instruction: "Write a personal essay (400–500 words) on any subject that matters to you. The essay must be not just cohesive but beautifully cohesive — the connections between ideas should feel effortless and natural. After writing, annotate your ten most effective cohesive moves.",
        prompts: [
          { text: "Your personal essay (annotated):", type: "box" },
        ],
      },
      // 86
      {
        type: "true-false",
        title: "Cohesion: Absolute Final Statements",
        instruction: "Mark T (true) or F (false). These test your most sophisticated understanding.",
        statements: [
          { text: "Cohesion is the glue of language — it is what makes connected text different from a list of disconnected sentences.", answer: true },
          { text: "A text can have perfect grammar in every sentence and still have poor cohesion.", answer: true },
          { text: "Studying cohesion develops skills that are valuable in reading, writing, and critical thinking.", answer: true },
          { text: "Cohesive devices are a mechanical feature of language with no connection to meaning.", answer: false },
          { text: "The goal of studying cohesion is to use it so well that readers never notice it — it is simply invisible flow.", answer: true },
        ],
      },
      // 87
      {
        type: "open-response",
        title: "Cohesion in Your Future",
        instruction: "Think about any career or field that interests you. Write 4–5 sentences about what role cohesion will play in the writing that career requires. What types of cohesive devices will be most important? How will you continue to develop cohesion skills beyond this worksheet?",
        prompts: [
          { text: "Career: ___________________________________________\nYour response:", type: "box" },
        ],
      },
      // 88
      {
        type: "open-response",
        title: "Design a Cohesion Reference Card",
        instruction: "Design a reference card for cohesive devices that you could use in all future writing tasks. It should include: definitions and examples of all device types, a list of connectives by logical relationship, a reminder of the three levels of cohesion, and a three-step cohesion editing routine.",
        prompts: [
          { text: "Your reference card:", type: "box" },
        ],
      },
      // 89
      {
        type: "open-response",
        title: "A Letter on Cohesion",
        instruction: "Write a letter (7–9 sentences) to a student who is frustrated with their writing because it feels 'clunky'. Explain what cohesion is, why it matters, and give three specific pieces of advice for improving it. Write in a warm, encouraging, semi-formal register.",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 90 — TIP
      {
        type: "tip",
        title: "Tip: Cohesion as a Lifelong Writing Skill",
        content: "Cohesion is not a topic you study once and then leave behind. It is a dimension of every piece of writing you will ever produce — from a quick email to a major professional report. The writers who are most sought after, most trusted, and most influential are almost always the writers whose prose flows most naturally — whose readers never have to work to follow the connections between ideas. That flow is not accidental. It is the product of unconscious mastery of cohesive devices developed over years of reading and writing. You are building that mastery now.",
      },
      // 91
      {
        type: "open-response",
        title: "Publish Your Most Cohesive Writing",
        instruction: "Choose the most cohesive piece of writing you have produced in this worksheet. Polish it, share it with at least one person, and write a 2–3 sentence introduction explaining what the piece is and why you chose it.",
        prompts: [
          { text: "Your piece and introduction:", type: "box" },
          { text: "Who you shared it with:", type: "lines", lines: 1 },
        ],
      },
      // 92
      {
        type: "open-response",
        title: "Comparative Analysis: Cohesion Across Two Essays",
        instruction: "Compare the cohesion of two essays you have written — one from this worksheet and one from any other worksheet. Write 5–6 sentences comparing: which uses more varied connectives, which has stronger reference chains, and which overall has better cohesion. Explain what accounts for the difference.",
        prompts: [
          { text: "Essay 1: ___________________________________________\nEssay 2: ___________________________________________\nYour comparison:", type: "box" },
        ],
      },
      // 93
      {
        type: "open-response",
        title: "Write a Cohesion Analysis of a News Article",
        instruction: "Find a quality newspaper or magazine article (at least 300 words). Write a full cohesion analysis: identify the dominant cohesive device types, quote three specific examples with analysis, and evaluate the overall cohesion quality of the article.",
        prompts: [
          { text: "Article source: ___________________________________________\nYour analysis:", type: "box" },
        ],
      },
      // 94
      {
        type: "open-response",
        title: "Final Essay — Cohesion as a Writer's Skill",
        instruction: "Write a short essay (intro + two TEEL paragraphs + conclusion, approximately 350 words) arguing that: 'Cohesion is not a grammatical technicality — it is one of the most important craft skills a writer can develop.' Use specific examples from your work in this worksheet as evidence.",
        prompts: [
          { text: "Your essay:", type: "box" },
        ],
      },
      // 95
      {
        type: "open-response",
        title: "Reflective Synthesis",
        instruction: "Write a final synthesis (8–10 sentences) on what you have learned about cohesive devices and text flow across this entire worksheet. What can you do now that you could not do before? What will you notice differently in everything you read and write from now on?",
        prompts: [
          { text: "Your synthesis:", type: "box" },
        ],
      },
      // 96
      {
        type: "multiple-choice",
        title: "Cohesion: Final Mastery Check",
        instruction: "Choose the most analytically sophisticated answer.",
        questions: [
          {
            prompt: "The best evidence that a student truly understands cohesion is:",
            options: [
              "A. They can name all the types of cohesive devices",
              "B. They write prose that flows seamlessly and edit their own work to repair cohesion problems",
              "C. They use 'furthermore' at the start of every paragraph",
              "D. They can identify cohesive devices in isolated sentences",
            ],
            answer: "B. They write prose that flows seamlessly and edit their own work to repair cohesion problems",
          },
        ],
      },
      // 97
      {
        type: "open-response",
        title: "Design a Cohesion Lesson",
        instruction: "Design a fifteen-minute lesson on cohesive devices for a Year 5 student. Include: what you would say to introduce the concept, what example text you would use, two activities, and how you would check for understanding.",
        prompts: [
          { text: "Your lesson plan:", type: "box" },
        ],
      },
      // 98
      {
        type: "open-response",
        title: "Write Your Best Paragraph",
        instruction: "Write the most cohesive, most analytically powerful, most beautifully written paragraph you can manage. Any topic. Take your time. Revise it. Read it aloud. Revise again. This is the paragraph that shows what you can do.",
        prompts: [
          { text: "Your paragraph:", type: "box" },
          { text: "Reflection on the cohesive choices you made:", type: "lines", lines: 3 },
        ],
      },
      // 99
      {
        type: "open-response",
        title: "A Letter to a Future Student of Cohesion",
        instruction: "Write a letter (7–9 sentences) to a student who is about to study cohesive devices for the first time. Tell them what to expect, what will click unexpectedly, and what the most practically useful insight from this worksheet is.",
        prompts: [
          { text: "Your letter:", type: "box" },
        ],
      },
      // 100 — FINAL SPARK
      {
        type: "spark",
        title: "Spark: The Invisible Craft",
        content: "The finest cohesion is invisible. When you read something that flows perfectly — where you never once lose the thread, where every idea connects naturally to the next, where the whole thing reads as if it could not have been written any other way — you are experiencing the fruit of decades of practice with cohesive devices. Your challenge for the coming year: read at least one piece of writing each week specifically for cohesion. Ask: what devices is the writer using? How are ideas connected? Where is the cohesion strongest? Over time, this habit of analytical reading will make your own cohesion instinctive. That is the goal: not thinking about cohesion, but doing it, invisibly and perfectly, every time.",
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
