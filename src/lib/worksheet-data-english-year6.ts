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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "sorting",
        title: "Sort by Connotation — Set A",
        instruction:
          "Sort each word into the correct column: Positive, Neutral, or Negative. Be ready to explain your choices.",
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
        type: "matching",
        title: "Match Word to Its Denotation",
        instruction:
          "Draw a line to match each word with its basic dictionary definition (denotation). Remember — denotation is the literal meaning only.",
        parentTip:
          "If your child is unsure, look up the definition together and compare it to what the word 'feels like' — that feeling is the connotation.",
        left: ["serpent", "cottage", "stroll", "chuckle", "elderly"],
        right: [
          "to walk slowly",
          "a large snake",
          "a small house",
          "to laugh quietly",
          "old in age",
        ],
      },
      {
        type: "true-false",
        title: "Denotation or Connotation?",
        instruction:
          "Read each statement and decide whether it is TRUE or FALSE.",
        parentTip:
          "Work through the first two together so your child understands the distinction before continuing independently.",
        statements: [
          {
            text: "The denotation of 'home' and 'house' is exactly the same.",
            answer: true,
          },
          {
            text: "Connotation refers only to the dictionary definition of a word.",
            answer: false,
          },
          {
            text: "The word 'serpent' carries a more dramatic connotation than 'snake'.",
            answer: true,
          },
          {
            text: "Two readers can sometimes respond differently to the same word's connotation.",
            answer: true,
          },
          {
            text: "Authors always choose words randomly.",
            answer: false,
          },
          {
            text: "'Slender', 'thin', and 'scrawny' all have the same denotation.",
            answer: true,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Complete the Definition",
        instruction:
          "Fill in the blank with the correct word from the box: denotation, connotation, positive, negative, neutral.",
        parentTip:
          "Have your child read each completed sentence aloud to check it sounds right before moving on.",
        sentences: [
          {
            text: "The ___ of a word is its literal dictionary meaning.",
            blanks: ["denotation"],
          },
          {
            text: "The ___ of a word includes the feelings and associations it creates.",
            blanks: ["connotation"],
          },
          {
            text: "'Thrifty' has a ___ connotation — it sounds like a compliment.",
            blanks: ["positive"],
          },
          {
            text: "'Miserly' has a ___ connotation — it sounds critical.",
            blanks: ["negative"],
          },
          {
            text: "'Frugal' sits closer to the ___ end of the connotation spectrum.",
            blanks: ["neutral"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Which Word Has a Positive Connotation?",
        instruction:
          "Circle the word in each group that carries the most positive connotation.",
        parentTip:
          "Ask your child to explain why they chose each answer — reasoning matters as much as the answer itself.",
        questions: [
          {
            prompt: "Words for a small living space:",
            options: ["hovel", "shack", "cottage", "dump"],
            answer: "cottage",
          },
          {
            prompt: "Words for someone who talks a lot:",
            options: ["chatty", "motormouth", "babbler", "windbag"],
            answer: "chatty",
          },
          {
            prompt: "Words for a determined person:",
            options: ["stubborn", "pig-headed", "tenacious", "obstinate"],
            answer: "tenacious",
          },
          {
            prompt: "Words for an old car:",
            options: ["vintage", "wreck", "rust-bucket", "clunker"],
            answer: "vintage",
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Circle the More Positive Word",
        instruction:
          "In each pair, circle the word with the more positive connotation.",
        parentTip:
          "If your child circles the same word you would not, explore the difference — regional and family usage can shape connotation.",
        questions: [
          {
            prompt: "Which feels more positive?",
            options: ["odour", "fragrance"],
          },
          {
            prompt: "Which feels more positive?",
            options: ["crowd", "gathering"],
          },
          {
            prompt: "Which feels more positive?",
            options: ["interrogate", "interview"],
          },
          {
            prompt: "Which feels more positive?",
            options: ["demand", "request"],
          },
          {
            prompt: "Which feels more positive?",
            options: ["curious", "nosy"],
          },
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
        type: "sorting",
        title: "Synonym Spectrum — Words for 'Eat'",
        instruction:
          "Arrange these words along a spectrum from most positive/polite to most negative/rude. Write them in order in the columns provided.",
        columns: ["Most Positive", "Neutral", "Most Negative"],
        items: [
          { label: "dine" },
          { label: "eat" },
          { label: "devour" },
          { label: "nibble" },
          { label: "gobble" },
          { label: "consume" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Author Intent — Which Word Did the Author Choose?",
        instruction:
          "Read each sentence and decide which word the author most likely used to create the given effect. Circle your answer.",
        parentTip:
          "Ask: what mood is the author trying to create? That will point to the right word.",
        questions: [
          {
            prompt:
              "The author wants to make a character sound sneaky. Which word fits?\n'He ___ into the room.'",
            options: ["walked", "crept", "entered", "moved"],
            answer: "crept",
          },
          {
            prompt:
              "The author wants a cosy, welcoming feel. Which fits?\n'The ___ little shop was full of warmth.'",
            options: ["poky", "cramped", "bijou", "tiny"],
            answer: "bijou",
          },
          {
            prompt:
              "The author wants urgency and danger. Which fits?\n'She ___ through the crowd.'",
            options: ["strolled", "pushed", "barged", "walked"],
            answer: "barged",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation Pairs",
        instruction:
          "Each sentence has a blank. Choose the word in brackets that better matches the connotation described in the hint.",
        sentences: [
          {
            text: "The explorer ___ into the cave. (HINT: sounds brave and purposeful) [ventured / wandered]",
            blanks: ["ventured"],
          },
          {
            text: "The politician ___ from the question. (HINT: sounds evasive) [retreated / dodged]",
            blanks: ["dodged"],
          },
          {
            text: "She had ___ amounts of courage. (HINT: sounds impressive) [enormous / excessive]",
            blanks: ["enormous"],
          },
          {
            text: "The crowd ___ the stadium. (HINT: sounds enthusiastic and positive) [packed / crammed]",
            blanks: ["packed"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Your First Connotation Spectrum",
        instruction:
          "Choose ONE of the following neutral words and write four synonyms — two with more positive connotations and two with more negative connotations: look, walk, talk, old.",
        parentTip:
          "A thesaurus (printed or online) is ideal here. Turn it into a browsing exercise — how many synonyms can you find before choosing the best two for each end of the spectrum?",
        prompts: [
          {
            text: "Neutral word chosen: ____________\nPositive synonym 1: ____________  Positive synonym 2: ____________\nNegative synonym 1: ____________  Negative synonym 2: ____________",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "Connotation in Advertising — True or False?",
        instruction:
          "Read each statement about how advertisers use connotation. Decide TRUE or FALSE.",
        parentTip:
          "Discuss real advertisements you have seen together. Which words are chosen for their positive connotations?",
        statements: [
          {
            text: "Advertisers prefer words with positive connotations to describe their products.",
            answer: true,
          },
          {
            text: "'Natural', 'pure', and 'fresh' are often used for their neutral connotations.",
            answer: false,
          },
          {
            text: "A car described as 'sporty' has a more positive connotation than one described as 'small'.",
            answer: true,
          },
          {
            text: "Connotation never influences a buyer's decision.",
            answer: false,
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Neutral Word to Its Emotional Synonyms",
        instruction:
          "Match each neutral word on the left to its positive AND negative synonym pair on the right.",
        left: ["house", "smile", "ask", "careful"],
        right: [
          "mansion / hovel",
          "beam / simper",
          "enquire / interrogate",
          "meticulous / fussy",
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
      {
        type: "tip",
        title: "Key Concept: The Connotation Spectrum",
        content:
          "Think of connotation as a sliding scale from very positive to very negative, with neutral in the middle. Most synonyms sit at different points on this scale. When you read, train yourself to notice where an author's word choices sit — and ask why. When you write, use the spectrum deliberately to guide your reader's emotional response.",
      },
      {
        type: "sorting",
        title: "Connotation Sort — Words for 'Brave'",
        instruction:
          "Sort these near-synonyms from most positive to most negative connotation. Use the three columns.",
        parentTip:
          "Some of these words are quite close on the spectrum — encourage your child to justify the order rather than worrying about a single 'right' answer.",
        columns: ["Most Positive", "Neutral / Mixed", "Most Negative"],
        items: [
          { label: "courageous" },
          { label: "bold" },
          { label: "reckless" },
          { label: "daring" },
          { label: "foolhardy" },
          { label: "fearless" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Context Changes Connotation",
        instruction:
          "Fill in the blank with the word that creates the connotation indicated in brackets.",
        sentences: [
          {
            text: "The team's ___ approach led to victory. (POSITIVE: suggests smart caution) [cunning / sneaky]",
            blanks: ["cunning"],
          },
          {
            text: "His ___ attention to detail slowed the project. (NEGATIVE: suggests unhelpful perfectionism) [obsessive / thorough]",
            blanks: ["obsessive"],
          },
          {
            text: "She gave a ___ smile and left the room. (NEUTRAL: no strong charge) [slight / sinister]",
            blanks: ["slight"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Spot the Loaded Word",
        instruction:
          "In each sentence, identify the word with the strongest connotation. Circle it.",
        questions: [
          {
            prompt: "The politician made a speech about the budget.",
            options: ["politician", "made", "speech", "budget"],
            answer: "politician",
          },
          {
            prompt: "The company's profits soared despite the difficulties.",
            options: ["soared", "profits", "company", "despite"],
            answer: "soared",
          },
          {
            prompt: "Protesters swarmed the city centre.",
            options: ["Protesters", "swarmed", "city", "centre"],
            answer: "swarmed",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Connotation Hunt in Headlines",
        instruction:
          "Over the next two days, look at newspaper or news-website headlines and find three words used for their strong connotations.",
        parentTip:
          "Do this activity together at breakfast or in the evening. The goal is simply to notice — not to judge the journalism, just to become aware of word choice.",
        suggestions: [
          "Find a headline with a word that could have been replaced by a more neutral option.",
          "Ask: does the headline make the story sound more dramatic than it might be?",
          "Write down the word, the neutral alternative, and note whether the connotation is positive or negative.",
          "Bring your three examples back to the worksheet and share them in your reading journal.",
        ],
      },
      {
        type: "open-response",
        title: "Connotation Across Cultures",
        instruction:
          "Some words carry different connotations in different cultures or time periods. Think about the word 'clever'. Answer the questions below.",
        prompts: [
          {
            text: "In what context might 'clever' be a compliment?",
            type: "lines",
            lines: 2,
          },
          {
            text: "In what context might 'clever' carry a slightly suspicious or negative tone?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Can you think of another word whose connotation might differ between people or situations?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Words as Weapons and Gifts",
        content:
          "Throughout history, the same groups of people have been described using words with very different connotations depending on who is speaking. A freedom fighter and a terrorist can describe the same person — the difference is entirely in the connotation. Discuss with your parent: can you think of a modern example where two different words are used to describe the same event or person? What does this tell us about the power of word choice?",
      },

      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "sorting",
        title: "Connotation Sort — Words for 'Old'",
        instruction:
          "Sort these synonyms for 'old' from most positive to most negative.",
        columns: ["Positive / Respectful", "Neutral", "Negative / Dismissive"],
        items: [
          { label: "vintage" },
          { label: "antique" },
          { label: "aged" },
          { label: "ancient" },
          { label: "decrepit" },
          { label: "timeworn" },
          { label: "classic" },
          { label: "obsolete" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Newspaper vs Fairy Tale — Connotation Shift",
        instruction:
          "The same event is described twice — once in a neutral news style, once in a fairy tale style. Fill in the blanks with the word that fits the register.",
        sentences: [
          {
            text: "News: 'A large wolf was spotted near the village.' Fairy tale: 'A ___ wolf prowled the edges of the village.' [vast / monstrous]",
            blanks: ["monstrous"],
          },
          {
            text: "News: 'The girl entered the forest alone.' Fairy tale: 'The girl ___ into the dark forest.' [ventured / walked]",
            blanks: ["ventured"],
          },
          {
            text: "News: 'The old woman offered her food.' Fairy tale: 'The old ___ offered her a poisoned apple.' [woman / crone]",
            blanks: ["crone"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify the Author's Intended Connotation",
        instruction:
          "Read each extract and choose the best description of the connotation created by the underlined word.",
        questions: [
          {
            prompt:
              "'The refugees FLOODED into the country.' What connotation does 'flooded' create?",
            options: [
              "Suggests a natural, welcome event",
              "Suggests an overwhelming, potentially threatening situation",
              "Is completely neutral",
              "Suggests the people were happy",
            ],
            answer:
              "Suggests an overwhelming, potentially threatening situation",
          },
          {
            prompt:
              "'The prime minister VOWED to cut taxes.' What connotation does 'vowed' create?",
            options: [
              "Suggests a formal, serious and binding promise",
              "Suggests a casual, uncertain statement",
              "Is completely neutral",
              "Suggests dishonesty",
            ],
            answer: "Suggests a formal, serious and binding promise",
          },
          {
            prompt:
              "'Protesters CLASHED with police.' What connotation does 'clashed' create?",
            options: [
              "Suggests a calm, organised meeting",
              "Suggests peaceful discussion",
              "Suggests violent conflict and opposition",
              "Is completely neutral",
            ],
            answer: "Suggests violent conflict and opposition",
          },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite for a Different Audience",
        instruction:
          "The following sentence appears in a tabloid newspaper. Rewrite it once for a broadsheet newspaper (more neutral, formal) and once for a children's book (warm, reassuring).",
        parentTip:
          "Talk about audience before writing — who are you writing for, and what reaction do you want to create? Word choice follows directly from audience awareness.",
        prompts: [
          {
            text: "Tabloid: 'Flood DEVASTATES helpless community.'\n\nBroadsheet rewrite: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Children's book rewrite: ___________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Connotation in Politics — True or False?",
        instruction:
          "Decide whether each statement is TRUE or FALSE. Be prepared to give a reason.",
        statements: [
          {
            text: "Political speeches often use words with strong positive connotations to describe the speaker's own policies.",
            answer: true,
          },
          {
            text: "The words 'investment' and 'spending' have exactly the same connotation when applied to government money.",
            answer: false,
          },
          {
            text: "Describing a policy as a 'reform' sounds more positive than calling it a 'cut'.",
            answer: true,
          },
          {
            text: "Connotation plays no role in political communication.",
            answer: false,
          },
        ],
      },
      {
        type: "sequence",
        title: "Order the Connotation Spectrum",
        instruction:
          "Place these words in order from most negative (1) to most positive (5) by numbering them.",
        parentTip:
          "There is no single correct answer for every word — the discussion about where to place ambiguous words is more valuable than the final order.",
        items: [
          { label: "residence (describe a home)" },
          { label: "mansion" },
          { label: "hovel" },
          { label: "home" },
          { label: "house" },
        ],
      },
      {
        type: "matching",
        title: "Match Connotation to Purpose",
        instruction:
          "Match each writing purpose on the left with the type of connotation most likely to be used.",
        left: [
          "Horror story opening",
          "Travel brochure",
          "Science report",
          "Political speech",
          "Protest placard",
        ],
        right: [
          "Mostly neutral, factual vocabulary",
          "Strong positive connotations",
          "Charged emotional language, often negative about opponents",
          "Dark, threatening, menacing words",
          "Short, sharp, emotionally loaded words",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation in Scientific Writing",
        instruction:
          "Scientists try to use neutral language. Fill in the blank with the more neutral option.",
        sentences: [
          {
            text: "The experiment produced ___ results. (NEUTRAL) [fascinating / significant]",
            blanks: ["significant"],
          },
          {
            text: "The animal ___ when approached. (NEUTRAL) [fled / ran away]",
            blanks: ["fled"],
          },
          {
            text: "The data ___ that temperatures are rising. (NEUTRAL) [indicates / screams]",
            blanks: ["indicates"],
          },
        ],
      },
      {
        type: "open-response",
        title: "The Same Story, Two Perspectives",
        instruction:
          "A local council has approved a new shopping centre on parkland. Write two short descriptions of this event — one from the perspective of the council (positive connotation) and one from a local resident who opposes it (negative connotation).",
        parentTip:
          "This is a great opportunity to discuss how the same facts can be framed very differently. Neither version needs to be dishonest — just selective in its word choices.",
        prompts: [
          {
            text: "Council perspective (focus on progress, investment, opportunity):",
            type: "box",
          },
          {
            text: "Opposing resident perspective (focus on loss, destruction, impact):",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Writing Tip: Use a Connotation Checklist",
        content:
          "When reviewing your own writing, try this checklist: (1) Underline every adjective and verb. (2) Ask whether each one is neutral, positive, or negative. (3) Is that the emotional effect you intended? (4) If not, swap the word. This is exactly what professional editors do when polishing a text.",
      },
      {
        type: "multiple-choice",
        title: "Which Headline Is More Positive?",
        instruction:
          "In each pair of headlines about the same event, identify which uses more positive connotations. Circle A or B.",
        questions: [
          {
            prompt:
              "A: 'Developers Bulldoze Beloved Park for Shopping Mall'\nB: 'New Community Hub to Revitalise Underused Green Space'",
            options: ["A", "B"],
            answer: "B",
          },
          {
            prompt:
              "A: 'Brave Firefighters Rescue Family from Blaze'\nB: 'Four Escape House Fire'",
            options: ["A", "B"],
            answer: "A",
          },
          {
            prompt:
              "A: 'Council Slashes Education Funding'\nB: 'Council Reallocates Education Resources'",
            options: ["A", "B"],
            answer: "B",
          },
        ],
      },
      {
        type: "open-response",
        title: "Connotation in Poetry",
        instruction:
          "Read this short poem. Identify two words with strong connotations and explain the effect of each.",
        prompts: [
          {
            text: "Poem:\n'The city blazed, a wound of light\nagainst the bruised and weeping night.\nIts towers clawed the purple sky;\nbeneuth them, tiny people sighed.'\n\nWord 1 with strong connotation: ____________\nEffect it creates:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Word 2 with strong connotation: ____________\nEffect it creates:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Overall, what emotional impression does this poem create through its word choices?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Register — Formal or Informal Connotation",
        instruction:
          "Sort these words into Formal/Neutral or Informal/Colloquial. Then note whether the informal version has a stronger connotation.",
        columns: ["Formal / Neutral", "Informal / Colloquial"],
        items: [
          { label: "deceased" },
          { label: "dead" },
          { label: "residence" },
          { label: "digs" },
          { label: "intoxicated" },
          { label: "drunk" },
          { label: "consume" },
          { label: "scoff" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation in Book Blurbs",
        instruction:
          "Book blurbs use words with strong positive connotations to attract readers. Fill in each blank with the most compelling option.",
        sentences: [
          {
            text: "A ___ adventure that will keep you turning pages all night. [good / breathtaking]",
            blanks: ["breathtaking"],
          },
          {
            text: "Meet Maya — a girl with a ___ secret and nothing to lose. [dark / bad]",
            blanks: ["dark"],
          },
          {
            text: "The ending will leave you ___ for more. [wanting / desperate]",
            blanks: ["desperate"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Product Descriptions",
        instruction:
          "A sports drink is described in two ways below. Analyse how connotation is used differently in each.",
        prompts: [
          {
            text: "Version A: 'FuelX contains water, sugar, electrolytes, and artificial flavouring.'\n\nVersion B: 'FuelX is a premium hydration formula, charged with natural electrolytes and crafted to power your peak performance.'\n\nList two words from Version B that have stronger connotations than their Version A equivalents.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which version would be used in an advertisement? Explain why.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which version gives you more accurate factual information? Explain.",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Connotation in Fiction — True or False?",
        statements: [
          {
            text: "Authors of horror fiction deliberately choose words with dark or threatening connotations.",
            answer: true,
          },
          {
            text: "A villain is usually described using words with positive connotations.",
            answer: false,
          },
          {
            text: "The same physical description can feel threatening or comforting depending solely on word choice.",
            answer: true,
          },
          {
            text: "Changing one word in a sentence can never change its overall connotation.",
            answer: false,
          },
          {
            text: "An author might give a sympathetic villain positive-connotation words to make the reader feel conflicted.",
            answer: true,
          },
        ],
        instruction:
          "Read each statement and mark TRUE or FALSE. Be ready to explain your reasoning.",
        parentTip:
          "Statement 5 is great for discussion — can your child think of a book character who is presented with some sympathy despite doing bad things?",
      },
      {
        type: "home-activity",
        title: "Connotation in Your Reading Book",
        instruction:
          "Find a page in your current reading book where the author uses words with strong connotations. Complete the tasks below.",
        parentTip:
          "Sit together for this activity. You read the page aloud so your child can listen for emotionally charged words without being distracted by decoding.",
        suggestions: [
          "Find one word with a very positive connotation. Write it down and explain the effect.",
          "Find one word with a very negative connotation. Write it down and explain the effect.",
          "Find one word that could be replaced with a more neutral synonym. Write both versions.",
          "Discuss: what mood does this page create, and how much of that comes from word choice?",
        ],
      },
      {
        type: "open-response",
        title: "Craft Your Own Connotation Sentences",
        instruction:
          "Choose ONE of the topics below and write three sentences about it: one with positive connotations, one neutral, one negative — all describing the same basic fact.",
        parentTip:
          "Topics: a busy city street, a large old tree, a powerful thunderstorm, a school cafeteria at lunchtime.",
        prompts: [
          {
            text: "Topic chosen: ________________\nPositive sentence: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Neutral sentence: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Negative sentence: ________________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Same Word, Different Ears",
        content:
          "The word 'pride' can describe a feeling of achievement, a parade celebrating identity, or a group of lions. Each use carries different connotations for different people. Think about a word that means something special to your family, your culture, or your community. Share it with your parent: what does the word mean to you beyond its dictionary definition? That personal meaning IS connotation — and it is why the same word can affect two people very differently.",
      },
      {
        type: "multiple-choice",
        title: "Connotation in Formal Letters",
        instruction:
          "Choose the word with the most appropriate connotation for a formal complaint letter.",
        questions: [
          {
            prompt: "I am writing to express my ___ regarding the recent decision.",
            options: ["annoyance", "concerns", "fury", "moaning"],
            answer: "concerns",
          },
          {
            prompt: "The customer service I received was ___.",
            options: [
              "terrible",
              "unsatisfactory",
              "horrendous",
              "pretty bad",
            ],
            answer: "unsatisfactory",
          },
          {
            prompt: "I would ___ a prompt response to this matter.",
            options: ["demand", "appreciate", "expect", "insist on"],
            answer: "appreciate",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation and Tone — Match the Register",
        instruction:
          "Fill in the blank with a word that matches the register (formal/informal) indicated.",
        sentences: [
          {
            text: "FORMAL letter: 'We ___ your attention to the enclosed document.' [draw / want]",
            blanks: ["draw"],
          },
          {
            text: "INFORMAL text message: 'That film was ___, I loved it!' [exceptional / awesome]",
            blanks: ["awesome"],
          },
          {
            text: "SCIENTIFIC report: 'The substance ___ at 100 degrees Celsius.' [vaporises / disappears]",
            blanks: ["vaporises"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse a Persuasive Paragraph",
        instruction:
          "Read the paragraph and answer the questions about how connotation is used to persuade.",
        prompts: [
          {
            text: "Paragraph: 'Our children deserve the freedom to explore the natural world without the glare of a screen. Yet corporations are flooding schools with addictive devices that steal attention and corrode creativity. We must reclaim our classrooms.'\n\nList three words or phrases with strong negative connotations.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Is there a word with a positive connotation in the paragraph? What effect does it create?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Rewrite the opening sentence using completely neutral language.",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Analytical Tip: Technique — Quote — Effect",
        content:
          "When writing about connotation in an analysis, always use the three-part formula: (1) Name what the word does — 'The word X has a ___ connotation.' (2) Quote the word in context. (3) Explain the effect on the reader — 'This creates a sense of... / positions the reader to feel...' The effect sentence is the most important and the hardest — always push to be specific rather than saying simply 'it makes it more interesting'.",
      },
      {
        type: "open-response",
        title: "Write a Connotation Analysis Sentence",
        instruction:
          "Using the Technique–Quote–Effect formula, write one analytical sentence about the connotation of a word from the paragraph below.",
        parentTip:
          "Model the first sentence together. The effect is the most important part — push for specificity: not just 'it makes it seem dangerous' but 'it creates a sense of uncontrolled threat that positions the reader to feel alarmed'.",
        prompts: [
          {
            text: "Paragraph: 'The corporation unleashed a swarm of lobbyists on parliament, suffocating debate and strangling any chance of reform.'\n\nChoose one word and write a full analytical sentence about its connotation and effect:",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Strength of Connotation",
        instruction:
          "Sort these words from weakest to strongest connotation (most emotionally charged). Use three columns.",
        columns: ["Weak / Subtle", "Moderate", "Strong / Intense"],
        items: [
          { label: "concerned" },
          { label: "terrified" },
          { label: "worried" },
          { label: "uneasy" },
          { label: "petrified" },
          { label: "anxious" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Connotation in Environmental Reporting",
        instruction:
          "Choose the word that would appear in a report seeking to create alarm about climate change, versus one that minimises concern.",
        questions: [
          {
            prompt:
              "Which word would an alarmist report use to describe rising sea levels?",
            options: ["change", "increase", "surge", "shift"],
            answer: "surge",
          },
          {
            prompt:
              "Which word would a minimising report use to describe pollution?",
            options: ["contamination", "toxin", "substance", "poison"],
            answer: "substance",
          },
          {
            prompt:
              "Which phrase suggests greater urgency about extinction?",
            options: [
              "species decline",
              "species loss",
              "biodiversity adjustment",
              "extinction crisis",
            ],
            answer: "extinction crisis",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation in Historical Texts",
        instruction:
          "Historical texts often use language that reflects the values of their time. Fill in the blank with the word that would have been used in the source text, then note what modern word we might use instead.",
        sentences: [
          {
            text: "Historical: 'The ___ natives were subdued by the settlers.' (A word with a negative connotation that was used dismissively.) [primitive / indigenous]",
            blanks: ["primitive"],
          },
          {
            text: "Historical: 'The colonial ___ brought order to the territory.' (A positive-connotation word for what would now be described critically.) [mission / occupation]",
            blanks: ["mission"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Connotation and Power",
        instruction:
          "Connotation can reinforce or challenge power structures. Read the prompt and write a thoughtful paragraph in response.",
        parentTip:
          "This is a challenging concept. Start by discussing a concrete example together before your child writes. You may want to write the first sentence jointly.",
        prompts: [
          {
            text: "Throughout history, powerful groups have chosen which words are used to describe other groups. Explain, with at least one example, how controlling word choices can affect the way people think about a group of people.",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "Advanced Connotation Concepts",
        instruction:
          "Read each statement and decide TRUE or FALSE. These statements deal with more complex aspects of connotation.",
        statements: [
          {
            text: "A word's connotation can change over time as society's values change.",
            answer: true,
          },
          {
            text: "Euphemisms are words chosen for their softer, more positive connotations.",
            answer: true,
          },
          {
            text: "The word 'passed away' is a euphemism for 'died' with a softer connotation.",
            answer: true,
          },
          {
            text: "Dog-whistle language uses words whose connotation is only understood by a specific audience.",
            answer: true,
          },
          {
            text: "Connotation is always deliberately intended by the author.",
            answer: false,
          },
        ],
        parentTip:
          "Statement 5 is worth discussing — sometimes connotation 'leaks' into writing unintentionally. Can your child think of an example?",
      },
      {
        type: "open-response",
        title: "Euphemism and Connotation",
        instruction:
          "A euphemism replaces a word with an unpleasant connotation with one that softens or obscures the meaning. Identify the euphemism in each sentence and write the more direct word it replaces.",
        prompts: [
          {
            text: "1. 'The company let go of 200 workers.'\n   Direct word: ________________  Effect of euphemism: ________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "2. 'The soldier was collateral damage in the conflict.'\n   Direct word: ________________  Effect of euphemism: ________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "3. 'The elderly patient passed away peacefully.'\n   Direct word: ________________  Effect of euphemism: ________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Why might an author or journalist choose to use euphemisms? Explain in two sentences.",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "matching",
        title: "Match Euphemism to Its Direct Meaning",
        instruction:
          "Draw a line to match each euphemism on the left to its more direct equivalent on the right.",
        parentTip:
          "Discuss why we use euphemisms in everyday life — they are not always dishonest; sometimes they show consideration for feelings.",
        left: [
          "between jobs",
          "pre-loved",
          "correctional facility",
          "enhanced interrogation",
          "downsizing",
        ],
        right: [
          "second-hand",
          "torture",
          "prison",
          "unemployed",
          "making workers redundant",
        ],
      },
      {
        type: "spark",
        title: "Spark: Could You Change the World With One Word?",
        content:
          "Campaigns for social change have often hinged on replacing one word with another. 'Disabled people' versus 'people with disabilities' puts the person first. 'Climate crisis' versus 'climate change' shifts the urgency. 'Undocumented immigrant' versus 'illegal alien' frames the same person very differently. With your parent, discuss: can you think of a word that, if changed, might shift how people think about an important issue? Draft a one-sentence argument for why the new word is better.",
      },
      {
        type: "open-response",
        title: "Analysing Connotation in a News Article",
        instruction:
          "Find a short news article (3–5 paragraphs) on a topic that interests you. Read it carefully and complete the analysis below.",
        parentTip:
          "ABC News, The Guardian, or a local newspaper are good sources. Avoid tabloid sites where heavy connotation is overwhelming — a quality news source offers more subtle examples.",
        prompts: [
          {
            text: "Article headline and source: ___________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Find three words with notable connotations. For each, write the word and its effect:",
            type: "box",
          },
          {
            text: "Does the article appear to have a particular viewpoint based on its word choices? Explain.",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Connotation in Your Own Writing",
        content:
          "The best writers revise for connotation. When you finish a first draft, go through and circle every word that could be replaced with a synonym. For each circled word, ask: is this the right emotional temperature for what I want the reader to feel? If the answer is no, look up alternatives. This revision habit is used by every professional author.",
      },
      {
        type: "fill-in-blank",
        title: "Revise for Stronger Connotation",
        instruction:
          "Each sentence is a first-draft sentence with a neutral or weak word. Replace the underlined word with a stronger option that matches the intended mood given in brackets.",
        sentences: [
          {
            text: "DARK MOOD: 'The figure moved [stronger: ___] through the shadows.' [crept / went]",
            blanks: ["crept"],
          },
          {
            text: "POSITIVE MOOD: 'The crowd made [stronger: ___] noise as she stepped onto the stage.' [erupted in / produced]",
            blanks: ["erupted in"],
          },
          {
            text: "FORMAL REPORT: 'The company got [stronger: ___] a large profit.' [acquired / made]",
            blanks: ["acquired"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Connotation in Australian Literature",
        instruction:
          "Think about an Australian story, film, or poem you know. Identify how the language used creates a sense of the Australian landscape or identity through connotation.",
        parentTip:
          "If your child is stuck, suggest Australian picture books like 'Grandad's Fishing Buddy' or 'The Very Cranky Bear', or classic poems like Dorothea Mackellar's 'My Country'.",
        prompts: [
          {
            text: "Text chosen (title and type): ___________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "One word or phrase that creates a distinctly Australian feeling through its connotation. Explain the effect:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Would the same connotation work in a text about a different country? Why or why not?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Connotation — Year 6 Assessment Style",
        instruction:
          "These questions are similar to NAPLAN-style questions about language and connotation.",
        questions: [
          {
            prompt:
              "The word 'snatched' in the sentence 'She snatched the ball from his hands' most likely creates a sense of:",
            options: [
              "Generosity and sharing",
              "Aggression and sudden force",
              "Sadness and regret",
              "Skill and elegance",
            ],
            answer: "Aggression and sudden force",
          },
          {
            prompt:
              "Which sentence creates the most negative impression of a city?",
            options: [
              "The city has a large population.",
              "The city is busy and growing.",
              "The city is overcrowded and claustrophobic.",
              "The city has many residents.",
            ],
            answer: "The city is overcrowded and claustrophobic.",
          },
          {
            prompt:
              "An author uses the word 'blazed' rather than 'shone' to describe sunlight. What effect does this create?",
            options: [
              "The sun seems gentle and pleasant.",
              "The sun seems dangerously, intensely hot.",
              "The sun is described neutrally.",
              "The sun seems dim.",
            ],
            answer: "The sun seems dangerously, intensely hot.",
          },
        ],
        parentTip:
          "These questions mirror standardised test format. Encourage your child to eliminate obviously wrong answers first, then choose between the remaining options.",
      },
      {
        type: "sorting",
        title: "Connotation Sort — Describing Weather",
        instruction:
          "Sort these weather descriptions from most ominous/threatening to most gentle/pleasant.",
        columns: ["Ominous / Threatening", "Neutral", "Gentle / Pleasant"],
        items: [
          { label: "a fresh breeze" },
          { label: "a howling gale" },
          { label: "steady wind" },
          { label: "a golden afternoon" },
          { label: "a dreary drizzle" },
          { label: "overcast skies" },
          { label: "a savage storm" },
          { label: "mild showers" },
        ],
      },
      {
        type: "open-response",
        title: "Peer Analysis — Swap and Review",
        instruction:
          "Exchange your answer from Activity 37 (Craft Your Own Connotation Sentences) with a partner if available, or re-read your own with fresh eyes after a break. Answer the questions below.",
        parentTip:
          "If working solo, this becomes a self-editing task. Leave the writing for at least an hour before returning. The distance helps your child read like a reader, not a writer.",
        prompts: [
          {
            text: "Does the positive sentence feel genuinely positive, or just neutral? Explain:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Does the negative sentence feel genuinely negative, or just neutral? Explain:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Suggest one specific improvement for any of the three sentences:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Connotation Challenge — Rewrite a Fairy Tale Opening",
        instruction:
          "Choose a well-known fairy tale opening and rewrite it in the opposite emotional register — if the original is warm and inviting, make it dark and menacing, or vice versa.",
        parentTip:
          "This is a playful activity that can be done together at the kitchen table. Read both versions aloud for the full effect of the connotation shift.",
        suggestions: [
          "Original: 'Once upon a time, in a cosy cottage deep in the forest, there lived a kind old woodcutter...'",
          "Rewrite with dark connotations: replace 'cosy' with something menacing, 'deep' with something threatening, 'kind' with something unsettling.",
          "Then try the reverse: take a famously dark opening and rewrite it as warm and welcoming.",
          "Share your rewrites with the family — it is surprising how much connotation alone can change the feel of a story.",
        ],
      },
      {
        type: "open-response",
        title: "Extended Connotation Analysis",
        instruction:
          "Write a structured analysis paragraph (6–8 sentences) about how connotation is used in the following extract to shape the reader's response.",
        parentTip:
          "Encourage your child to write at least two analytical sentences using the Technique–Quote–Effect formula. The last sentence should sum up the overall emotional impression the word choices create.",
        prompts: [
          {
            text: "Extract: 'The new highway will carve through the heart of ancient bushland, obliterating habitats that took centuries to grow. Developers have dismissed the concerns of local residents as obstacles to progress, and government officials have rubber-stamped the project without independent review.'\n\nWrite your analysis paragraph here:",
            type: "box",
          },
        ],
      },

      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Extending Tip: Connotation and Ideology",
        content:
          "At the highest level of analysis, connotation reveals ideology — the values and beliefs embedded in a text. When a text consistently uses one set of connotations for one group and another for a different group, it is not neutral. Advanced analysts ask: whose perspective does this language normalise? Whose is it treating as 'other'? This kind of ideological critique is called discourse analysis and is used in media studies, literary criticism, and social science.",
      },
      {
        type: "open-response",
        title: "Ideological Analysis: Two Reports on the Same Event",
        instruction:
          "Read both descriptions of the same protest. Write a 6–8 sentence analysis of how each text uses connotation to position the reader.",
        parentTip:
          "This is the most challenging activity on the worksheet. Work through the thinking together before your child writes independently. What is each writer's attitude to the protest, and how does connotation reveal it?",
        prompts: [
          {
            text: "Report A: 'Determined activists gathered peacefully outside parliament to raise their voices on climate policy. Thousands of citizens exercised their democratic right, calling on leaders to take urgent action.'\n\nReport B: 'Protesters swarmed parliament house, blocking traffic and disrupting normal business. The mob demanded immediate policy changes, ignoring the complex realities of economic transition.'\n\nAnalyse how connotation is used in BOTH reports. Consider: what attitude does each writer hold, and how do specific word choices reveal it?",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Advanced Connotation — Subtle Distinctions",
        instruction:
          "These questions involve subtle connotation differences. Read carefully before answering.",
        questions: [
          {
            prompt:
              "'The prime minister was accused of being shrewd.' Compared to 'cunning', the word 'shrewd' is:",
            options: [
              "More negative — suggests deception",
              "More positive — suggests clever practical wisdom",
              "Exactly the same in connotation",
              "Neutral — no connotation",
            ],
            answer: "More positive — suggests clever practical wisdom",
          },
          {
            prompt:
              "Which word has the most neutral connotation in this set?",
            options: ["destitute", "underprivileged", "impoverished", "poor"],
            answer: "poor",
          },
          {
            prompt:
              "'The team was relentless in pursuit of victory.' The word 'relentless' here carries connotations of:",
            options: [
              "Cruelty and aggression",
              "Determination and impressive focus",
              "Weakness and desperation",
              "Carelessness",
            ],
            answer: "Determination and impressive focus",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Persuasive Paragraph Using Connotation Deliberately",
        instruction:
          "Choose a position on one of the topics below. Write a persuasive paragraph that uses connotation deliberately — positive connotation for your side, negative for the opposing view. Then annotate three of your word choices.",
        parentTip:
          "Topics: should mobile phones be allowed in schools? / should zoos exist? / should homework be abolished? Encourage your child to choose whichever they feel most strongly about.",
        prompts: [
          {
            text: "Position chosen: _____________________________________________\n\nPersuasive paragraph:",
            type: "box",
          },
          {
            text: "Word 1 annotation — word: _______ connotation used: _______ effect intended: _______",
            type: "lines",
            lines: 2,
          },
          {
            text: "Word 2 annotation — word: _______ connotation used: _______ effect intended: _______",
            type: "lines",
            lines: 2,
          },
          {
            text: "Word 3 annotation — word: _______ connotation used: _______ effect intended: _______",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Abstract Nouns — Positive or Negative?",
        instruction:
          "Sort these abstract nouns into Positive, Neutral, and Negative connotation groups. Discuss any that feel ambiguous.",
        parentTip:
          "Abstract nouns are interesting because their connotation often depends entirely on context. 'Power' can be positive or negative depending on the sentence.",
        columns: ["Positive", "Context-Dependent / Neutral", "Negative"],
        items: [
          { label: "justice" },
          { label: "power" },
          { label: "ambition" },
          { label: "freedom" },
          { label: "control" },
          { label: "greed" },
          { label: "loyalty" },
          { label: "rebellion" },
          { label: "tradition" },
          { label: "progress" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation in Classic Literature",
        instruction:
          "Fill in the blank with the word that best fits the connotation of the original text.",
        sentences: [
          {
            text: "Dickens describing a villain: 'He had a ___ face, like a mask worn over something worse.' [bland / cold]",
            blanks: ["cold"],
          },
          {
            text: "A gothic novel setting: 'The moors ___ around her, empty and indifferent.' [stretched / yawned]",
            blanks: ["yawned"],
          },
          {
            text: "A hero's entrance: 'He ___ into the room, filling it with an easy confidence.' [walked / strode]",
            blanks: ["strode"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Creative Writing — Two Versions of the Same Scene",
        instruction:
          "Write the same scene twice using different connotations to create opposite moods. The scene: a person arrives at a large, old building for the first time. Write Version A as welcoming and safe; Version B as threatening and unsettling. Each version should be 4–6 sentences.",
        parentTip:
          "This is one of the most powerful writing exercises at Year 6 level. Sit together for the planning stage — brainstorm word banks for each version before writing. Swap 'door' for 'gateway'; 'shadow' for 'shade'; 'loomed' for 'rose'.",
        prompts: [
          {
            text: "Version A — welcoming and safe:",
            type: "box",
          },
          {
            text: "Version B — threatening and unsettling:",
            type: "box",
          },
          {
            text: "List three specific word swaps you made between versions and explain the connotation difference:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Write Your Own Connotation Manifesto",
        content:
          "A 'manifesto' is a public declaration of beliefs. Write a short personal manifesto (3–5 sentences) about how you will use the power of connotation as a writer. Think about: what kind of effect do you want your writing to have on readers? What kinds of words will you choose deliberately? How will you use your understanding of connotation to write with more precision and power? Share your manifesto with your parent.",
      },
      {
        type: "true-false",
        title: "Extending Connotation — Complex Statements",
        instruction:
          "Read each challenging statement and decide TRUE or FALSE. Be prepared to defend your answer.",
        statements: [
          {
            text: "A writer can use a word with negative connotations in a sentence that overall has a positive tone.",
            answer: true,
          },
          {
            text: "Irony can reverse the expected connotation of a word.",
            answer: true,
          },
          {
            text: "All readers will respond identically to the same word's connotation.",
            answer: false,
          },
          {
            text: "A skilled writer can use connotation to create sympathy for an unsympathetic character.",
            answer: true,
          },
          {
            text: "Using words with very strong connotations always makes writing better.",
            answer: false,
          },
        ],
        parentTip:
          "Statement 5 is worth discussing at length — can your child think of a time when over-loaded connotation makes writing feel manipulative or exhausting?",
      },
      {
        type: "open-response",
        title: "Final Synthesis: What Have You Learned?",
        instruction:
          "Write a 6–8 sentence reflection on what you have learned about connotation and denotation across this worksheet. Use at least three specific examples from the activities.",
        parentTip:
          "Encourage your child to reference specific examples from their own work — not just abstract statements. 'I learned that...' followed by 'For example, when I wrote...' is a strong structure.",
        prompts: [
          {
            text: "What is the most important thing you have learned about connotation?",
            type: "box",
          },
          {
            text: "How will you apply this learning to your reading and writing going forward?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Connotation Portfolio",
        instruction:
          "Over the next week, build a small connotation portfolio — a collection of 5 examples of strong connotation you notice in your reading, listening, and viewing.",
        parentTip:
          "Keep a notebook or folded paper in your child's reading spot. Examples can come from books, TV news, films, packaging, or conversations. Review the portfolio together at the end of the week.",
        suggestions: [
          "Find one example from a book you are reading.",
          "Find one example from a news headline or article.",
          "Find one example from an advertisement (TV, online, or print).",
          "Find one example from a film or TV show.",
          "Find one example from your own writing — a word you used without realising it had strong connotations.",
        ],
      },
      {
        type: "multiple-choice",
        title: "Connotation in Film Titles",
        instruction:
          "Film titles use connotation to attract audiences. Choose the answer that best explains the effect of the connotation in each title.",
        questions: [
          {
            prompt: "Film title: 'The Dark Knight' (rather than 'Batman Returns')",
            options: [
              "Removes superhero associations and creates a more serious, shadowy tone",
              "Makes the film sound lighter and more fun",
              "Creates a neutral, informational impression",
              "Uses bright, positive connotations",
            ],
            answer:
              "Removes superhero associations and creates a more serious, shadowy tone",
          },
          {
            prompt: "Film title: 'The Greatest Showman'",
            options: [
              "Creates a dark and threatening atmosphere",
              "Uses positive, celebratory connotation to promise spectacle and emotional scale",
              "Is neutral and factual",
              "Suggests a frightening experience",
            ],
            answer:
              "Uses positive, celebratory connotation to promise spectacle and emotional scale",
          },
        ],
        parentTip:
          "This is a fun extension task. Explore film titles together — what do the words promise? Does the film deliver on those connotations?",
      },
      {
        type: "fill-in-blank",
        title: "Connotation in Environmental Language",
        instruction:
          "Environmental communication uses carefully chosen connotation. Fill in each blank with the word that creates the stronger emotional impact.",
        sentences: [
          {
            text: "A campaign to protect forests: 'The ___ has been devastated by logging.' [ancient / old]",
            blanks: ["ancient"],
          },
          {
            text: "A campaign for renewable energy: 'Wind farms ___ clean energy across the landscape.' [generate / provide]",
            blanks: ["generate"],
          },
          {
            text: "An opposition message: 'Wind turbines ___ the natural beauty of the hills.' [desecrate / change]",
            blanks: ["desecrate"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Design a Connotation-Aware Campaign Slogan",
        instruction:
          "Design two slogans for a cause you care about: one using positive connotation (focusing on what will be gained), and one using negative connotation (focusing on what is at risk). Then explain which is more effective and why.",
        parentTip:
          "Marketing research consistently shows that negative connotation (loss framing) can be more motivating than positive (gain framing). Discuss whether your child's instinct matches the research.",
        prompts: [
          {
            text: "Cause: _______________________________________________________\n\nPositive slogan: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Negative slogan: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which is more effective and why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Connotation and Gender — True or False?",
        instruction:
          "Read each statement about how connotation interacts with gender in language. Decide TRUE or FALSE.",
        statements: [
          {
            text: "'Bossy' is more frequently applied to women than men to describe the same assertive behaviour.",
            answer: true,
          },
          {
            text: "Words like 'ambitious' carry exactly the same connotation whether applied to a man or a woman.",
            answer: false,
          },
          {
            text: "Language reform campaigns often focus on connotation as a way of challenging bias.",
            answer: true,
          },
          {
            text: "Connotation cannot reflect social attitudes or stereotypes.",
            answer: false,
          },
        ],
        parentTip:
          "This is a rich discussion topic. The goal is not to reach one 'right' political position but to notice that connotation can encode social assumptions.",
      },
      {
        type: "sorting",
        title: "Connotation Spectrum — Words for 'Determined'",
        instruction:
          "Sort these words from most positive to most negative connotation.",
        columns: ["Positive / Admirable", "Neutral", "Negative / Critical"],
        items: [
          { label: "resolute" },
          { label: "driven" },
          { label: "dogged" },
          { label: "persistent" },
          { label: "stubborn" },
          { label: "pig-headed" },
        ],
      },
      {
        type: "matching",
        title: "Connotation in Science Writing vs Tabloid Journalism",
        instruction:
          "Match each topic to the word that would appear in a scientific report versus a tabloid newspaper.",
        left: [
          "Risk of new medication (science)",
          "Risk of new medication (tabloid)",
          "Economic slowdown (neutral report)",
          "Economic slowdown (alarming headline)",
          "Changes to habitats (ecology report)",
          "Changes to habitats (protest flyer)",
        ],
        right: [
          "DEVASTATION of our precious wildlife",
          "possible adverse effects in a small percentage of patients",
          "The economy contracted by 0.2% last quarter",
          "A MIRACLE DRUG with terrifying side effects",
          "habitat fragmentation and associated biodiversity decline",
          "The economy is COLLAPSING",
        ],
      },
      {
        type: "open-response",
        title: "Analyse Connotation in a Speech",
        instruction:
          "Find or recall a famous speech (Martin Luther King, Greta Thunberg, Malala Yousafzai, or any memorable public address). Identify three words or phrases with strong connotations and analyse their effect.",
        parentTip:
          "Speeches are the richest source of deliberately chosen connotation in public life. Watch or read one together before your child completes this analysis.",
        prompts: [
          {
            text: "Speech, speaker, and occasion: _________________________________\n\nWord/phrase 1: ________________  Effect: ______________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Word/phrase 2: ________________  Effect: ______________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Word/phrase 3: ________________  Effect: ______________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "How do the connotation choices in this speech help the speaker achieve their purpose?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation Across Languages — Borrowed Words",
        instruction:
          "English borrows words from many languages. Fill in the blank with the borrowed word that carries a more positive or elevated connotation than the plain English equivalent.",
        sentences: [
          {
            text: "Instead of 'a used car', a dealer might say '___'. (French-derived word meaning pre-owned, elegant) [vintage / second-hand / clunker]",
            blanks: ["vintage"],
          },
          {
            text: "Instead of 'a fake name', a writer might use '___'. (French word for a pen name with a sophisticated feel) [alias / pseudonym / nickname]",
            blanks: ["pseudonym"],
          },
          {
            text: "Instead of 'starting', a report might say '___'. (Latinate word with a formal, professional feel) [beginning / commencing / kicking off]",
            blanks: ["commencing"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Connotation-Rich Description of Your Neighbourhood",
        instruction:
          "Write the same description of your neighbourhood or street twice: once as if writing for a real estate advertisement (warm, inviting, aspirational connotation), and once as if writing a gritty piece of literary fiction (honest, complex, realistic connotation).",
        parentTip:
          "Read both versions aloud. The gap between them reveals how much of our experience of place is constructed through the words used to describe it.",
        prompts: [
          {
            text: "Real estate advertisement version:",
            type: "box",
          },
          {
            text: "Literary fiction version:",
            type: "box",
          },
          {
            text: "Which version feels more true to your experience of the place? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Connotation in Legal Language",
        instruction:
          "Legal language often chooses words with specific connotation for precise effect. Choose the best description of the connotation difference in each pair.",
        questions: [
          {
            prompt: "'The defendant' versus 'the accused'",
            options: [
              "Both are completely neutral",
              "'The accused' implies guilt more strongly than 'the defendant'",
              "'The defendant' is more informal",
              "'The accused' suggests the person has not yet been found guilty; 'the defendant' is more procedurally neutral",
            ],
            answer:
              "'The accused' suggests the person has not yet been found guilty; 'the defendant' is more procedurally neutral",
          },
          {
            prompt: "'Unlawful killing' versus 'murder'",
            options: [
              "Both carry exactly the same connotation",
              "'Murder' carries the connotation of premeditation and moral condemnation; 'unlawful killing' is more legally neutral",
              "'Unlawful killing' is more dramatic",
              "'Murder' is a more neutral legal term",
            ],
            answer:
              "'Murder' carries the connotation of premeditation and moral condemnation; 'unlawful killing' is more legally neutral",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Positive, Negative, or Ambiguous Connotation?",
        instruction:
          "Sort these abstract nouns and adjectives into Positive, Negative, or Ambiguous (depends entirely on context) connotation.",
        parentTip:
          "Ambiguous words are the most interesting — discuss with your child what contexts would make each ambiguous word positive or negative.",
        columns: ["Positive", "Negative", "Ambiguous"],
        items: [
          { label: "nostalgic" },
          { label: "ruthless" },
          { label: "relentless" },
          { label: "compassionate" },
          { label: "cunning" },
          { label: "provocative" },
          { label: "idealistic" },
          { label: "calculating" },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite a News Story With Opposite Connotation",
        instruction:
          "Find a short news story (3–5 sentences). Rewrite it with the opposite connotation — if the original presents something positively, make it sound negative, or vice versa — without changing the facts.",
        parentTip:
          "This activity reveals how much framing affects our reading of news. The facts can be identical; the impression left can be completely different.",
        prompts: [
          {
            text: "Original headline and opening sentences:",
            type: "box",
          },
          {
            text: "Rewritten with opposite connotation (same facts):",
            type: "box",
          },
          {
            text: "List three specific words you swapped and explain the connotation shift:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "Extending — Connotation and Metaphor Combined",
        instruction:
          "These statements combine connotation analysis with metaphor. Decide TRUE or FALSE.",
        statements: [
          {
            text: "When a politician describes immigration as a 'flood', the metaphor's connotation suggests something overwhelming and out of control.",
            answer: true,
          },
          {
            text: "Describing the stock market as 'surging' rather than 'rising' creates a more positive and dynamic connotation.",
            answer: true,
          },
          {
            text: "Describing a new policy as a 'band-aid solution' has positive connotations.",
            answer: false,
          },
          {
            text: "Extended metaphors maintain consistent connotation throughout a passage to reinforce a single impression.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Build Your Personal Connotation Vocabulary",
        instruction:
          "Create a personal list of 10 words you want to use in your own writing — words with connotations you find powerful, interesting, or beautifully precise. For each, write what you like about its connotation.",
        parentTip:
          "Building a rich active vocabulary is a lifelong process. Encourage your child to keep this list in their writing folder and add to it continuously. The words we love to use define our voice as writers.",
        prompts: [
          {
            text: "My top 10 connotation-rich words (with notes on why):",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation in Song Lyrics",
        instruction:
          "Songwriters use connotation intensely. Fill in each blank with the word that creates a stronger connotation for the context indicated.",
        sentences: [
          {
            text: "LONGING: 'I still ___ your voice in the quiet of the night.' [hear / miss / detect]",
            blanks: ["miss"],
          },
          {
            text: "TRIUMPH: 'We ___ above every doubt and fear.' [rose / went / moved]",
            blanks: ["rose"],
          },
          {
            text: "LOSS: 'Everything we built has ___ into dust.' [gone / crumbled / changed]",
            blanks: ["crumbled"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Short Poem Using Deliberate Connotation",
        instruction:
          "Write a short poem (6–10 lines) on any topic. Your only rule: every content word must be chosen for its connotation — not just for its denotation. After writing, annotate three of your word choices.",
        parentTip:
          "This is a demanding creative task that brings together everything the worksheet has explored. Encourage your child to revise each line at least once, asking: is this word the right connotation temperature for what I am trying to express?",
        prompts: [
          {
            text: "Your poem:",
            type: "box",
          },
          {
            text: "Annotation 1 — word, connotation, why chosen:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Annotation 2 — word, connotation, why chosen:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Annotation 3 — word, connotation, why chosen:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Connotation Swap Game",
        instruction:
          "Play a word swap game with your family. One person says a sentence with a neutral word. The next person swaps the neutral word for a positive-connotation synonym. The next swaps it for a negative one. Continue for 5 rounds.",
        parentTip:
          "This is a fast-paced, enjoyable vocabulary game that can be played anywhere. It builds connotation awareness through active play rather than passive analysis.",
        suggestions: [
          "Start with a neutral sentence: 'The dog walked across the yard.'",
          "Person 1: swaps 'walked' for a positive synonym (e.g., 'bounded').",
          "Person 2: swaps it for a negative synonym (e.g., 'trudged').",
          "Person 3: chooses a new neutral sentence for the next round.",
          "After 5 rounds, discuss: which swap was the most surprising or effective?",
        ],
      },
      {
        type: "multiple-choice",
        title: "Connotation in Colour Words",
        instruction:
          "Colours carry strong cultural connotations in English. Choose the best explanation for each colour's use.",
        questions: [
          {
            prompt: "A villain in a fairy tale is described as wearing 'crimson robes'.",
            options: [
              "Crimson is a neutral descriptor",
              "Crimson suggests blood, danger, and malevolence — stronger connotation than plain 'red'",
              "Crimson sounds cheerful and warm",
              "Crimson is simply more precise than 'red'",
            ],
            answer:
              "Crimson suggests blood, danger, and malevolence — stronger connotation than plain 'red'",
          },
          {
            prompt:
              "A peaceful scene is described as bathed in 'golden light' rather than 'yellow light'.",
            options: [
              "Both words have identical connotation",
              "'Golden' carries warmth, value, and preciousness — 'yellow' is neutral",
              "'Yellow' is more positive",
              "'Golden' is simply a more technical colour description",
            ],
            answer:
              "'Golden' carries warmth, value, and preciousness — 'yellow' is neutral",
          },
        ],
      },
      {
        type: "open-response",
        title: "Connotation Revision — Improve a Classmate's Paragraph",
        instruction:
          "Read the sample paragraph. Identify five words with weak or inappropriate connotation and replace each with a better choice. Explain each replacement.",
        parentTip:
          "Editing for connotation is an advanced skill. Encourage your child to read the paragraph aloud first — flat connotation often sounds flat when spoken.",
        prompts: [
          {
            text: "Sample: 'The old house stood at the end of the road. It was big and had lots of windows. The garden was green and had flowers in it. When we went inside, it was dark. There was furniture in all the rooms.'\n\nFive word replacements with explanations:",
            type: "box",
          },
          {
            text: "Rewritten paragraph with improved connotation:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Connotation in Famous Quotes",
        instruction:
          "These famous quotes use words with strong connotations. Fill in the blank with the word that creates the intended connotation.",
        sentences: [
          {
            text: "'Ask not what your country can do for you — ask what you can do for your ___.' (Kennedy — the blank word should feel inclusive and emotionally resonant) [country / government / nation]",
            blanks: ["country"],
          },
          {
            text: "'We shall ___ on the beaches... we shall never surrender.' (Churchill — the blank should suggest forceful, determined resistance) [fight / be / stay]",
            blanks: ["fight"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Create a Connotation Reference Sheet",
        instruction:
          "Create a one-page reference sheet summarising the key concepts from this worksheet: denotation, connotation, the spectrum (positive–neutral–negative), and how connotation is used in different contexts (fiction, journalism, advertising, politics).",
        parentTip:
          "A reference sheet is a study and consolidation tool. Keep it in your child's writing folder for use in future writing tasks. The act of creating it is itself a powerful review.",
        prompts: [
          {
            text: "Denotation — definition and example:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Connotation — definition and example:",
            type: "lines",
            lines: 2,
          },
          {
            text: "The spectrum — give three synonyms for 'thin' arranged from most positive to most negative:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Connotation in fiction: one example of how authors use connotation deliberately:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Connotation in persuasion: one example of how connotation is used to influence opinion:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Extended Writing: A Letter Using Deliberate Connotation",
        instruction:
          "Write a letter (8–10 sentences) to a younger student explaining what connotation is and why it matters. Use at least three examples from real life. Make the writing engaging — remember your audience.",
        parentTip:
          "Writing to explain something to someone younger is one of the most effective consolidation techniques. The ability to explain a concept in accessible language demonstrates genuine mastery.",
        prompts: [
          {
            text: "Letter to a younger student about connotation:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Connotation in Legal and Formal Language",
        instruction:
          "Legal and formal documents use connotation very deliberately. Choose the word with the most neutral or objective connotation for each context.",
        parentTip:
          "Formal and legal registers deliberately avoid emotive connotation. This activity develops register awareness alongside connotation skills.",
        questions: [
          {
            prompt: "In a formal police report, which word is most appropriate?",
            options: ["fled", "departed", "escaped", "scarpered"],
            answer: "departed",
          },
          {
            prompt: "In a medical document, which word is most appropriate for describing someone who died?",
            options: ["passed away", "deceased", "perished", "gone"],
            answer: "deceased",
          },
          {
            prompt: "In a business contract, which word best describes a payment not made on time?",
            options: ["overdue", "forgotten", "stolen", "missing"],
            answer: "overdue",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Words for a Difficult Situation",
        instruction:
          "Sort these words for a difficult situation from the most negative connotation (left) to the most positive (right).",
        parentTip:
          "This activity reinforces connotation as a spectrum rather than a binary. There may be disagreement — that is productive.",
        columns: ["Most Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Most Positive"],
        items: [
          { label: "catastrophe" },
          { label: "disaster" },
          { label: "crisis" },
          { label: "challenge" },
          { label: "opportunity" },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Connotation Myths and Facts",
        instruction: "Mark each statement True or False.",
        parentTip:
          "These statements address common misconceptions. Discuss any that prompt disagreement — the conversation is the learning.",
        statements: [
          {
            text: "A word can have a positive connotation in one context and a negative connotation in another.",
            answer: true,
          },
          {
            text: "Connotation only matters in creative writing, not in factual texts.",
            answer: false,
          },
          {
            text: "The denotation of a word can change over time, while its connotation usually stays fixed.",
            answer: false,
          },
          {
            text: "Choosing a word with strong connotation in an argument is a rhetorical strategy.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: My Connotation Toolkit",
        instruction:
          "Write a brief reflection (5–7 sentences) on the most interesting or surprising thing you learned about connotation during this unit. What will you do differently as a reader or writer?",
        parentTip:
          "Metacognitive reflection consolidates learning more effectively than additional practice questions. Encourage genuine, specific reflection rather than a summary of activities.",
        prompts: [
          {
            text: "My reflection on connotation — what surprised me and what I will do differently:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Last Word",
        content:
          "Every word in every text you will ever read was chosen by a human being who had reasons — conscious or not — for that choice. As a reader, your job is to ask why. As a writer, your job is to choose deliberately. Connotation is not a trick or an add-on: it is the texture of language itself, the place where grammar meets emotion, where precision meets art. You now have a tool that professional writers, journalists, lawyers, and politicians use every day. Use it wisely.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "matching",
        title: "Match Modal Verb to Its Meaning",
        instruction:
          "Draw a line to match each modal verb to what it expresses.",
        parentTip:
          "Modal verbs are a closed set — there are only about 12 core ones in English. Learning them all is a useful reference task.",
        left: ["must", "might", "should", "can", "will"],
        right: [
          "Permission or ability",
          "Strong obligation or certainty",
          "Future certainty",
          "Advice or recommendation",
          "Possibility (less certain than 'may')",
        ],
      },
      {
        type: "true-false",
        title: "Modal Verb Facts — True or False?",
        instruction:
          "Read each statement and decide TRUE or FALSE.",
        parentTip:
          "Go through the first two together before your child continues. Modal verbs are one of those grammar topics where a few clear examples make the rules click.",
        statements: [
          {
            text: "Modal verbs are always followed by a base form verb (no -ing or -s).",
            answer: true,
          },
          {
            text: "'May' and 'might' express exactly the same level of certainty.",
            answer: false,
          },
          {
            text: "'Must' can express either obligation or logical certainty.",
            answer: true,
          },
          {
            text: "Modal verbs change form for third person singular (e.g., 'he mights').",
            answer: false,
          },
          {
            text: "'Could' is the past tense form of 'can' and can also express possibility.",
            answer: true,
          },
          {
            text: "'Should' is used to express strong certainty about the future.",
            answer: false,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Choose the Right Modal Verb",
        instruction:
          "Fill in each blank with the modal verb that best fits the meaning indicated in brackets.",
        parentTip:
          "Read the completed sentence aloud to check it sounds natural. Modal verbs are often better understood by feel than by rule.",
        sentences: [
          {
            text: "You ___ wear a seatbelt. (OBLIGATION — it is the law) [must / might]",
            blanks: ["must"],
          },
          {
            text: "It ___ rain later — the sky looks dark. (POSSIBILITY) [should / might]",
            blanks: ["might"],
          },
          {
            text: "She ___ speak three languages fluently. (ABILITY) [can / must]",
            blanks: ["can"],
          },
          {
            text: "You ___ check your spelling before submitting. (ADVICE) [should / would]",
            blanks: ["should"],
          },
          {
            text: "He ___ be at home — his car is in the driveway. (LOGICAL CERTAINTY) [must / could]",
            blanks: ["must"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Modal Verb — What Does It Express?",
        instruction:
          "Choose the correct description of what the modal verb expresses in each sentence.",
        questions: [
          {
            prompt: "'You must hand in your assignment by Friday.'",
            options: ["Possibility", "Advice", "Strong obligation", "Permission"],
            answer: "Strong obligation",
          },
          {
            prompt: "'She may leave early if she finishes her work.'",
            options: [
              "Logical certainty",
              "Permission",
              "Strong obligation",
              "Impossibility",
            ],
            answer: "Permission",
          },
          {
            prompt: "'The package should arrive by Thursday.'",
            options: [
              "Definite certainty",
              "Expectation / probability",
              "Obligation",
              "Impossibility",
            ],
            answer: "Expectation / probability",
          },
          {
            prompt: "'That can't be right — the answer is 42.'",
            options: [
              "Permission",
              "Logical impossibility",
              "Advice",
              "Possibility",
            ],
            answer: "Logical impossibility",
          },
        ],
      },
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
        type: "circle-correct",
        title: "Circle the Modal Verb",
        instruction:
          "Circle the modal verb in each sentence.",
        parentTip:
          "If your child finds it hard to identify the modal verb, ask them to find the main action verb first, then look for the helper verb before it.",
        questions: [
          {
            prompt: "Scientists have discovered that coral reefs could disappear by 2100.",
            options: ["have", "discovered", "could", "disappear"],
          },
          {
            prompt: "You should always read the instructions before starting.",
            options: ["should", "always", "read", "starting"],
          },
          {
            prompt: "The team will play in the final next Saturday.",
            options: ["will", "play", "final", "next"],
          },
          {
            prompt: "This medicine must be taken with food.",
            options: ["medicine", "must", "taken", "food"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort Modal Verbs by Certainty Level",
        instruction:
          "Sort these modal verbs from least certain to most certain.",
        parentTip:
          "There is no single definitive order — context matters. What matters is that your child can explain their reasoning.",
        columns: ["Least Certain", "Moderately Certain", "Most Certain"],
        items: [
          { label: "might" },
          { label: "could" },
          { label: "may" },
          { label: "should" },
          { label: "will" },
          { label: "must" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Active and Passive — Identify the Structure",
        instruction:
          "Complete each definition with the correct word from the box: subject, object, passive, active, agent.",
        sentences: [
          {
            text: "In an ___ sentence, the subject performs the action.",
            blanks: ["active"],
          },
          {
            text: "In a ___ sentence, the subject receives the action.",
            blanks: ["passive"],
          },
          {
            text: "The passive is formed using the verb 'to be' plus a past ___.",
            blanks: ["participle"],
          },
          {
            text: "The person or thing that performs the action in a passive sentence is called the ___.",
            blanks: ["agent"],
          },
        ],
      },
      {
        type: "true-false",
        title: "Active vs Passive — True or False?",
        instruction:
          "Read each statement about active and passive voice. Decide TRUE or FALSE.",
        statements: [
          {
            text: "'The dog chased the cat' is written in active voice.",
            answer: true,
          },
          {
            text: "'The cake was eaten by the children' is written in active voice.",
            answer: false,
          },
          {
            text: "In passive voice, the original object of the sentence moves to the subject position.",
            answer: true,
          },
          {
            text: "The passive voice always requires the agent ('by...') to be included.",
            answer: false,
          },
          {
            text: "Scientists frequently use passive voice to maintain an objective tone.",
            answer: true,
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
        type: "multiple-choice",
        title: "Passive to Active — Choose the Active Version",
        instruction:
          "Choose the correct active voice rewrite for each passive sentence.",
        questions: [
          {
            prompt: "PASSIVE: 'The report was written by the committee.'",
            options: [
              "The committee wrote the report.",
              "The report wrote the committee.",
              "Written was the report by the committee.",
              "The committee was written in the report.",
            ],
            answer: "The committee wrote the report.",
          },
          {
            prompt: "PASSIVE: 'The window was smashed.'",
            options: [
              "The window smashed.",
              "Someone smashed the window.",
              "Smashing was done to the window.",
              "The window is smashing.",
            ],
            answer: "Someone smashed the window.",
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Active or Passive?",
        instruction:
          "Circle whether each sentence is written in active or passive voice.",
        parentTip:
          "The 'by zombies' test: if you can add 'by zombies' after the verb and it sounds grammatical, the sentence is passive.",
        questions: [
          {
            prompt: "The ancient ruins were discovered by archaeologists.",
            options: ["Active", "Passive"],
          },
          {
            prompt: "The crowd cheered loudly when the goal was scored.",
            options: ["Active", "Passive"],
          },
          {
            prompt: "Heavy rain flooded several suburbs last night.",
            options: ["Active", "Passive"],
          },
          {
            prompt: "Three suspects have been arrested.",
            options: ["Active", "Passive"],
          },
          {
            prompt: "The committee approved the new policy last week.",
            options: ["Active", "Passive"],
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Complete the Passive Sentence",
        instruction:
          "Complete each passive sentence by filling in the correct form of the verb given.",
        sentences: [
          {
            text: "The emails ___ sent before midday. (BE + past participle of 'send')",
            blanks: ["were"],
          },
          {
            text: "The injured player ___ treated on the field. (BE + past participle of 'treat')",
            blanks: ["was"],
          },
          {
            text: "The new library ___ opened next month. (BE + past participle of 'open')",
            blanks: ["will be"],
          },
          {
            text: "The results ___ announced at the end of term. (BE + past participle of 'announce')",
            blanks: ["will be"],
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
      {
        type: "tip",
        title: "Key Concept: The 'By Zombies' Test",
        content:
          "Here is a memorable test for passive voice: try adding 'by zombies' after the verb. If it sounds grammatical, the sentence is passive. 'The cake was eaten [by zombies]' — passive. 'The zombies ate the cake' — active. This test works because passive sentences always have a slot for an agent (who did it), even when that slot is left empty.",
      },
      {
        type: "home-activity",
        title: "Modal Verb Hunt — The Weather Forecast",
        instruction:
          "Listen to or read a weather forecast and find examples of modal verbs. Weather forecasters are experts at expressing degrees of certainty.",
        parentTip:
          "This is a great activity to do during breakfast while the news is on. The task highlights how grammar is used in real-world professional communication.",
        suggestions: [
          "Listen to or read a weather forecast — TV, radio, or online.",
          "Write down three modal verbs you hear or read.",
          "For each one, write what it expresses: certain / probable / possible / advice.",
          "Discuss: why does the forecaster use 'might' rather than 'will'? What happens if they are wrong?",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Why Was Passive Used?",
        instruction:
          "Sort each passive sentence into the column that best explains WHY the passive was used.",
        parentTip:
          "Writers use passive voice for specific reasons, not randomly. Building this habit of asking 'why?' is the key analytical skill.",
        columns: [
          "Doer is unknown",
          "Doer is unimportant",
          "To hide or avoid naming responsibility",
        ],
        items: [
          { label: "'The window was broken overnight.'" },
          { label: "'The solution was heated to 100°C.'" },
          { label: "'Errors were made in the original report.'" },
          { label: "'The ancient text was written in Latin.'" },
          { label: "'The decision was not communicated clearly.'" },
          { label: "'Three people were injured in the incident.'" },
        ],
      },
      {
        type: "open-response",
        title: "Modal Verbs in Formal Writing",
        instruction:
          "Formal writing uses specific modal verbs to express obligation, possibility, and advice professionally. Rewrite each sentence using the modal verb that best fits the formal context.",
        prompts: [
          {
            text: "Informal: 'You have to fill in this form.'\n   Formal (use 'must' or 'are required to'): ___________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Informal: 'You might want to check the instructions.'\n   Formal (use 'should' or 'are advised to'): _________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Informal: 'You can ask for a refund.'\n   Formal (use 'may' or 'are entitled to'): ___________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "true-false",
        title: "Passive Voice in Science — True or False?",
        instruction:
          "These statements are about passive voice in scientific writing. Decide TRUE or FALSE.",
        statements: [
          {
            text: "Science reports often use passive voice to make the writing sound objective.",
            answer: true,
          },
          {
            text: "Passive voice in science reports ensures the focus stays on the experiment, not the experimenter.",
            answer: true,
          },
          {
            text: "'We heated the solution' is in passive voice.",
            answer: false,
          },
          {
            text: "'The solution was heated' is in passive voice.",
            answer: true,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Passive Voice — Science Report Style",
        instruction:
          "Choose the passive version that sounds most appropriate for a science report.",
        questions: [
          {
            prompt: "Which version is most suitable for a science report?",
            options: [
              "I put the water in a beaker.",
              "The water was placed in a beaker.",
              "You should put water in a beaker.",
              "Water goes in a beaker.",
            ],
            answer: "The water was placed in a beaker.",
          },
          {
            prompt: "Which version avoids naming the researcher?",
            options: [
              "We observed three separate results.",
              "I noticed three results.",
              "Three separate results were observed.",
              "The researcher saw three results.",
            ],
            answer: "Three separate results were observed.",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Who Is Missing from the Sentence?",
        content:
          "Passive voice allows the doer to vanish entirely. 'The decision was made.' By whom? 'The report was filed.' By whom? 'Mistakes were made.' By whom? This grammatical invisibility is used in politics, corporate communication, and sometimes journalism to avoid accountability. Over the next week, notice how often you encounter sentences where the doer has been removed. Keep a tally. Who tends to use this structure, and in what kinds of situations?",
      },

      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "fill-in-blank",
        title: "Modal Verbs — Degrees of Certainty",
        instruction:
          "Fill in each blank with the modal verb that expresses the correct degree of certainty indicated.",
        sentences: [
          {
            text: "90% certain: 'The results ___ be ready by Friday.' [should / might]",
            blanks: ["should"],
          },
          {
            text: "50% certain: 'It ___ rain tomorrow.' [might / must]",
            blanks: ["might"],
          },
          {
            text: "Near certain: 'That ___ be the answer — all the clues point to it.' [must / could]",
            blanks: ["must"],
          },
          {
            text: "Future certain: 'The train ___ arrive at 9:15.' [will / should]",
            blanks: ["will"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite Using Modal Verbs",
        instruction:
          "Rewrite each sentence using a modal verb to express the degree of certainty indicated in brackets.",
        parentTip:
          "Ask your child to read each version aloud. The difference in meaning becomes clear when spoken — especially the distinction between 'must' (I'm fairly sure) and 'will' (I'm certain).",
        prompts: [
          {
            text: "Original: 'She knows the answer.'\n   Express POSSIBILITY: ________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Express ADVICE: ____________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Express OBLIGATION: ________________________________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "matching",
        title: "Match Passive Sentence to Its Active Version",
        instruction:
          "Draw a line to match each passive sentence with its active equivalent.",
        left: [
          "The letter was signed by the mayor.",
          "Three medals were won by the team.",
          "The new road has been built.",
          "The cake is being decorated.",
        ],
        right: [
          "Someone is decorating the cake.",
          "The mayor signed the letter.",
          "Builders have built the new road.",
          "The team won three medals.",
        ],
      },
      {
        type: "true-false",
        title: "Modal Verbs in Formal and Informal Contexts",
        instruction:
          "Decide whether each statement about modal verbs in different contexts is TRUE or FALSE.",
        statements: [
          {
            text: "In formal writing, 'may' is preferred over 'might' to express permission.",
            answer: true,
          },
          {
            text: "'Gonna' is an informal alternative to 'going to' and expresses future certainty.",
            answer: true,
          },
          {
            text: "Legal documents often use 'shall' to express obligation.",
            answer: true,
          },
          {
            text: "In scientific writing, 'will' is always preferred over 'should' when describing expected results.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "From Science Notes to Report",
        instruction:
          "These are informal notes from a science experiment. Rewrite them as three formal report sentences using passive voice.",
        prompts: [
          {
            text: "Notes: 'We put 50mL of water in a beaker, then we heated it for two minutes, and we recorded the temperature every 30 seconds.'\n\nReport sentence 1 (passive): ____________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Report sentence 2 (passive): ____________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Report sentence 3 (passive): ____________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "tip",
        title: "Writing Tip: Passive Voice Is Not Always Wrong",
        content:
          "Many students are taught to avoid passive voice, but this advice is too simple. Passive voice is the right choice in three situations: (1) When the doer is unknown or unimportant. (2) When the object of the action is the focus of the writing. (3) When scientific or formal objectivity is required. The key is to choose your voice deliberately — not to follow one rule for all situations. A good writer knows when each voice serves the writing better.",
      },
      {
        type: "sorting",
        title: "Modal Verb — Sort by Function",
        instruction:
          "Sort these sentences into the correct column based on what the modal verb is expressing.",
        parentTip:
          "Some sentences could fit more than one category depending on interpretation — that is fine. What matters is the reasoning.",
        columns: [
          "Obligation / Necessity",
          "Possibility / Probability",
          "Permission / Ability",
          "Advice / Recommendation",
        ],
        items: [
          { label: "You must renew your passport before travelling." },
          { label: "She can speak four languages." },
          { label: "It may be too late to change the booking." },
          { label: "You should drink more water each day." },
          { label: "Students must not use phones during exams." },
          { label: "He might arrive before noon." },
          { label: "You may use the library between 8am and 5pm." },
          { label: "Children should eat a variety of vegetables." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Weather Forecast Using Modal Verbs",
        instruction:
          "Write a 5–7 sentence weather forecast for tomorrow using at least four different modal verbs. Each modal should express a different degree of certainty.",
        parentTip:
          "Listen to a real forecast together first if possible. Note how forecasters hedge their language — 'there could be showers', 'temperatures should reach', 'a cold change will arrive'.",
        prompts: [
          {
            text: "Tomorrow's weather forecast:",
            type: "box",
          },
          {
            text: "List the four modal verbs you used and what each expressed:",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Passive Voice in Headlines",
        instruction:
          "Headlines often use a shortened form of passive. Choose the full passive sentence that matches each headline.",
        questions: [
          {
            prompt: "Headline: 'Three Arrested After Bank Robbery'",
            options: [
              "Police have arrested three people after a bank robbery.",
              "Three people have been arrested after a bank robbery.",
              "Three people arrested the bank robbers.",
              "The bank robbery arrested three people.",
            ],
            answer: "Three people have been arrested after a bank robbery.",
          },
          {
            prompt: "Headline: 'Record Temperatures Expected This Weekend'",
            options: [
              "We expect record temperatures this weekend.",
              "Record temperatures were set last weekend.",
              "Record temperatures are expected this weekend.",
              "The weekend expects record temperatures.",
            ],
            answer: "Record temperatures are expected this weekend.",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Modal + Passive Combinations",
        instruction:
          "Modal verbs can be combined with passive voice. Fill in the blank with the correct form (modal + be + past participle).",
        sentences: [
          {
            text: "The results ___ announced tomorrow. (will + passive of 'announce')",
            blanks: ["will be announced"],
          },
          {
            text: "All visitors ___ checked before entering. (must + passive of 'check')",
            blanks: ["must be checked"],
          },
          {
            text: "The application ___ reviewed within ten days. (should + passive of 'review')",
            blanks: ["should be reviewed"],
          },
          {
            text: "The missing files ___ found by the end of the day. (might + passive of 'find')",
            blanks: ["might be found"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Passive to Active — Political Language",
        instruction:
          "Rewrite each passive sentence in active voice. Then explain what changes when the doer is named explicitly.",
        prompts: [
          {
            text: "Passive: 'Several schools have been closed due to budget pressures.'\n   Active: ________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "What changes — in terms of accountability and impact — when you name who closed the schools?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Passive: 'It has been decided that the park will no longer be maintained.'\n   Active: ________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Why might a government or organisation prefer the passive version?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Grammar of Hedging",
        content:
          "Scientists, lawyers, and doctors all use modal verbs as a form of 'hedging' — carefully qualifying how certain they are. A scientist says 'the data suggests this COULD cause cancer' rather than 'this CAUSES cancer' because the evidence may not yet be definitive. A doctor says 'you SHOULD take this medication' rather than 'you MUST' because patient autonomy matters. Think about a situation where being careful with your degree of certainty is important. How would you use modal verbs to communicate precisely?",
      },
      {
        type: "sorting",
        title: "Active or Passive — Sort the Sentences",
        instruction:
          "Sort these sentences into Active Voice or Passive Voice.",
        columns: ["Active Voice", "Passive Voice"],
        items: [
          { label: "The dog was chased by the children." },
          { label: "Lightning struck the old oak tree." },
          { label: "The project has been completed ahead of schedule." },
          { label: "Maria wrote three chapters before breakfast." },
          { label: "The evidence was presented carefully." },
          { label: "Both teams played brilliantly." },
          { label: "The announcement was made by the principal." },
          { label: "A rare bird was spotted near the reservoir." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Passive Science Report Paragraph",
        instruction:
          "Write a 5–6 sentence paragraph describing a science experiment in passive voice. You can invent the experiment or use one you have done.",
        parentTip:
          "Model the register shift: informal thinking versus formal report writing. The passive is not just grammatically different — it creates a completely different tone.",
        prompts: [
          {
            text: "Write your science report paragraph here, using passive voice throughout:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Modal Verbs — Formal Letter Register",
        instruction:
          "Choose the modal verb that best fits the formal register of a business letter.",
        questions: [
          {
            prompt: "To ask politely: '___ you please send the invoice by Friday?'",
            options: ["Can", "Could", "Might", "Should"],
            answer: "Could",
          },
          {
            prompt:
              "To express obligation formally: 'All applications ___ be submitted online.'",
            options: ["might", "could", "must", "will probably"],
            answer: "must",
          },
          {
            prompt:
              "To express possibility formally: 'There ___ be a delay due to the public holiday.'",
            options: ["gonna be", "may", "should be like", "has to be"],
            answer: "may",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Past Modal Verbs — Expressing Regret and Possibility",
        instruction:
          "Past modal constructions (could have, should have, might have) express retrospective possibility or regret. Fill in the blank with the correct past modal.",
        parentTip:
          "Past modals are sometimes called 'modal perfect' structures. They appear frequently in fiction and conversation to express what might have been different.",
        sentences: [
          {
            text: "She ___ won the competition if she had rehearsed more. (past possibility) [could have / can have]",
            blanks: ["could have"],
          },
          {
            text: "He ___ told us he was leaving — we had no idea. (past obligation with regret) [should have / must have]",
            blanks: ["should have"],
          },
          {
            text: "They ___ taken the wrong turn — the map is very confusing. (logical deduction about past) [might have / should have]",
            blanks: ["might have"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse Modal Verbs in a Text",
        instruction:
          "Read the extract below. Identify and analyse the modal verbs used.",
        prompts: [
          {
            text: "Extract from a school policy document:\n'All students must behave respectfully at all times. Students should resolve conflicts peacefully and may seek support from any staff member. Bullying will not be tolerated and may result in suspension. Students who witness bullying should report it immediately.'\n\nList all four modal verbs in the extract:",
            type: "lines",
            lines: 2,
          },
          {
            text: "What does the variety of modal verbs (must, should, may, will) tell you about the different levels of obligation being expressed?",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Modal Verb Diary",
        instruction:
          "For one day, notice every time you use or hear a modal verb. Keep a tally of which modal verbs appear most often in everyday conversation.",
        parentTip:
          "Do this together over dinner — ask the whole family which modals they used most today. 'Could you pass the salt?' 'We should watch that film.' Modal verbs are everywhere once you start listening.",
        suggestions: [
          "Keep a small tally sheet: will / would / can / could / may / might / should / must / shall.",
          "Mark each time you hear or use each modal verb over one day.",
          "At the end of the day, analyse: which were most common? Which were least common?",
          "Discuss what this tells you about everyday levels of certainty, obligation, and politeness.",
        ],
      },
      {
        type: "open-response",
        title: "The Effect of Voice in Storytelling",
        instruction:
          "Read the two versions of the same event. Answer the questions about how voice choice affects the reader's experience.",
        prompts: [
          {
            text: "Version A (Active): 'The knight slew the dragon. He raised his sword above his head and drove it into the creature's chest. The people cheered.'\n\nVersion B (Passive): 'The dragon was slain. A sword was driven into its chest. Cheering could be heard across the village.'\n\nWhich version puts the knight at the centre of the story? Explain.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which version creates more emotional distance? What effect does this have?",
            type: "lines",
            lines: 2,
          },
          {
            text: "When might an author choose passive voice even in an exciting action scene? Think of one reason.",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Consolidating Tip: Voice, Modality and Meaning",
        content:
          "At this stage you can use both passive voice and modal verbs as analytical tools when reading other writers' work. Ask yourself: does this passage use active or passive voice? What modals appear? Are they strong (must, will) or weak (might, could)? What does the author's grammatical choices tell you about their attitude or purpose? Grammar is not separate from meaning — it IS part of the meaning.",
      },
      {
        type: "open-response",
        title: "Analyse Grammar in a News Article",
        instruction:
          "Find a short news article (3–5 paragraphs) from a reliable source. Analyse how it uses passive voice and modal verbs.",
        parentTip:
          "ABC News, The Guardian Australia, or The Conversation are ideal sources — quality journalism with deliberate grammatical choices.",
        prompts: [
          {
            text: "Article headline and source:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Find two examples of passive voice in the article. Write each sentence and explain why passive was used:",
            type: "box",
          },
          {
            text: "Find one example of a modal verb. What does it express?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Combined Concepts — Modal + Passive",
        instruction:
          "Choose the sentence that correctly combines a modal verb with passive voice.",
        questions: [
          {
            prompt:
              "Which sentence correctly uses MUST + passive?",
            options: [
              "The form must filled in.",
              "The form must be filled in.",
              "The form must filling in.",
              "The form is must fill in.",
            ],
            answer: "The form must be filled in.",
          },
          {
            prompt:
              "Which sentence correctly uses SHOULD + passive?",
            options: [
              "The results should announced tomorrow.",
              "The results should be announced tomorrow.",
              "The results are should announced.",
              "The results should announcing tomorrow.",
            ],
            answer: "The results should be announced tomorrow.",
          },
          {
            prompt:
              "Which sentence correctly uses MIGHT + passive?",
            options: [
              "The decision might be reversed.",
              "The decision is might reversed.",
              "The decision might reversed.",
              "The decision might being reversed.",
            ],
            answer: "The decision might be reversed.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Formal Notification Using Modal + Passive",
        instruction:
          "Write a short formal notification (4–6 sentences) informing students that a school excursion has been cancelled. Use passive voice at least twice and two different modal verbs.",
        parentTip:
          "Model the register shift: ask your child how they would tell a friend the excursion is cancelled (informal), then discuss how that would change in an official letter to parents.",
        prompts: [
          {
            text: "Write your formal notification here:",
            type: "box",
          },
          {
            text: "Underline the passive constructions and circle the modal verbs in your notification.",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "sorting",
        title: "Classify Modal Verbs — Core vs Marginal",
        instruction:
          "Sort the following into Core Modal Verbs (the 'classic' nine) or Marginal / Semi-Modal (emerging or less clear-cut).",
        parentTip:
          "This distinction is more advanced — the goal is awareness, not memorisation. Semi-modals like 'need to', 'have to', 'ought to' work similarly to modals but behave slightly differently grammatically.",
        columns: ["Core Modal Verbs", "Semi-Modal / Marginal"],
        items: [
          { label: "can" },
          { label: "need to" },
          { label: "will" },
          { label: "have to" },
          { label: "must" },
          { label: "ought to" },
          { label: "shall" },
          { label: "used to" },
          { label: "may" },
          { label: "be able to" },
        ],
      },
      {
        type: "open-response",
        title: "Analyse Passive Voice in a Historical Text",
        instruction:
          "Read the extract and answer the questions about how passive voice affects its meaning and impact.",
        prompts: [
          {
            text: "Extract: 'In 1788, the land was claimed by the British Crown. Indigenous peoples were displaced from their traditional lands, and their cultures were suppressed for generations. Much was lost that could never be recovered.'\n\nList three passive constructions from the extract:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Who are the missing agents (doers) in these passive sentences? Why might the text have omitted them?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Rewrite the first sentence in active voice. How does naming the agent change the impact?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Advanced Grammar — True or False?",
        instruction:
          "These statements involve more complex grammar concepts. Read carefully and decide TRUE or FALSE.",
        statements: [
          {
            text: "A sentence can contain both a modal verb and a passive construction simultaneously.",
            answer: true,
          },
          {
            text: "Modal verbs can be used to express social distance and politeness in English.",
            answer: true,
          },
          {
            text: "The passive voice always removes the agent completely from the sentence.",
            answer: false,
          },
          {
            text: "In academic writing, passive voice is often preferred to remove the first person.",
            answer: true,
          },
          {
            text: "Using 'would' always refers to something that happened in the past.",
            answer: false,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Modal Verbs in Persuasive Writing",
        instruction:
          "Persuasive texts use modal verbs strategically. Fill in each blank with the modal that creates the intended persuasive effect.",
        sentences: [
          {
            text: "Strong call to action (obligation): 'We ___ act now before it is too late.' [must / might]",
            blanks: ["must"],
          },
          {
            text: "Softening advice (less confrontational): 'You ___ consider reducing plastic use.' [should / must]",
            blanks: ["should"],
          },
          {
            text: "Expressing a hopeful future: 'Together, we ___ create lasting change.' [can / must]",
            blanks: ["can"],
          },
          {
            text: "Warning about consequences: 'Inaction ___ lead to irreversible damage.' [could / should]",
            blanks: ["could"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Persuasive Paragraph Using Modal Verbs",
        instruction:
          "Write a persuasive paragraph (5–7 sentences) on a topic of your choice. Use at least three different modal verbs to express obligation, possibility, and ability.",
        parentTip:
          "Help your child plan by brainstorming their position and three reasons first. The modal verbs will then emerge naturally from the reasoning.",
        prompts: [
          {
            text: "Topic and position: ____________________________________________\n\nPersuasive paragraph:",
            type: "box",
          },
          {
            text: "Identify your three modal verbs and what each expresses:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Could Grammar Save a Life?",
        content:
          "In 1999, NASA lost the Mars Climate Orbiter — a spacecraft worth $327 million — because one team used metric units and another used imperial units. The data was correct; the communication system failed. Language precision matters in science, medicine, law, and engineering. Think about a situation where saying 'should' instead of 'must' could have serious consequences. Discuss one example with your parent. Then discuss: how is grammar precision an act of care for other people?",
      },
      {
        type: "open-response",
        title: "Comparative Analysis: Active vs Passive in Literature",
        instruction:
          "Find a paragraph from a novel or story that uses mostly active voice. Then find a paragraph that uses passive voice. Compare the effects of each.",
        parentTip:
          "Action scenes and dialogue are typically active. Scientific or formal descriptions, and scenes where a character feels helpless or acted-upon, tend toward passive.",
        prompts: [
          {
            text: "Active voice paragraph (title and page/chapter): _______________________\n\nCopy or summarise it here:",
            type: "box",
          },
          {
            text: "Passive voice paragraph (title and page/chapter): ____________________\n\nCopy or summarise it here:",
            type: "box",
          },
          {
            text: "Compare the effects: what does each voice achieve in its context?",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Grammar Detectives — Passive Voice in Product Labels",
        instruction:
          "Look at five product labels in your home — food packets, cleaning products, medicine bottles, electronics manuals. Count how many passive constructions you find.",
        parentTip:
          "This is a short, fun activity. Labels are rich with passive voice: 'This product should be stored...', 'Hands must be washed...', 'The contents may be recycled...'",
        suggestions: [
          "Find five labels and note any passive constructions on each.",
          "Ask: why does each label use passive voice rather than active?",
          "Find one label that uses active voice — what makes it different?",
          "Record your five best examples in your grammar journal.",
        ],
      },

      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Extending Tip: Grammar as a Stylistic Choice",
        content:
          "Professional writers, editors, and journalists think about grammar not as a set of rules to obey but as a set of tools to deploy. Voice choice (active vs passive) and modal selection are deliberate stylistic decisions that shape meaning, tone, and the reader's relationship with the subject. When you critique a text at an advanced level, grammatical analysis is part of the literary analysis toolkit.",
      },
      {
        type: "open-response",
        title: "Rewrite a Scene — Active to Passive for Effect",
        instruction:
          "Take an exciting, fast-paced scene from a book you are reading. Rewrite it using passive voice. Then explain the effect this creates and when a writer might deliberately choose this approach.",
        parentTip:
          "This reverse engineering shows your child exactly why active voice is preferred in action sequences — by experiencing what passive does to the same material.",
        prompts: [
          {
            text: "Original active scene (summarised or quoted):",
            type: "box",
          },
          {
            text: "Rewritten in passive voice:",
            type: "box",
          },
          {
            text: "What effect does the passive rewrite create? When might a writer choose this deliberately?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "NAPLAN-Style Grammar Questions",
        instruction:
          "Choose the correct answer for each grammar question.",
        questions: [
          {
            prompt:
              "Which sentence is written in passive voice?",
            options: [
              "The teacher praised every student.",
              "Every student received praise from the teacher.",
              "Every student was praised by the teacher.",
              "The teacher's praise reached every student.",
            ],
            answer: "Every student was praised by the teacher.",
          },
          {
            prompt:
              "Which modal verb expresses the STRONGEST obligation?",
            options: ["might", "could", "should", "must"],
            answer: "must",
          },
          {
            prompt:
              "Which sentence correctly uses passive voice to express a possibility?",
            options: [
              "The decision might be reversed.",
              "The decision is possibly being reversed.",
              "Maybe the decision will reversing.",
              "The decision possibly reversed.",
            ],
            answer: "The decision might be reversed.",
          },
        ],
        parentTip:
          "These questions mirror standardised test format. Encourage elimination of obviously incorrect options first.",
      },
      {
        type: "open-response",
        title: "Extended Analysis: Grammar in a Political Speech",
        instruction:
          "Read a short excerpt from a political speech (you can find one online or use the provided extract). Analyse the use of modal verbs and active/passive voice.",
        prompts: [
          {
            text: "Extract: 'We will build a stronger economy. Jobs will be created. Every family must have access to quality healthcare, and schools should be funded properly. Together, we can achieve a fairer Australia.'\n\nList all modal verbs in the extract and what each expresses:",
            type: "box",
          },
          {
            text: "Find examples of passive voice. What is the effect of each?",
            type: "lines",
            lines: 3,
          },
          {
            text: "How do the grammar choices help the speaker connect with the audience and build their argument?",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Subjunctive Mood — An Extension Concept",
        instruction:
          "The subjunctive mood is related to modal verbs and expresses hypothetical or wished-for situations. Fill in each blank with the subjunctive form.",
        parentTip:
          "The subjunctive is rare but occasionally appears in formal writing. It is related to the 'if I were you' construction. This is an extension task — treat it as exploration rather than mastery.",
        sentences: [
          {
            text: "If I ___ you, I would accept the offer. (subjunctive of 'be') [was / were]",
            blanks: ["were"],
          },
          {
            text: "The committee recommended that he ___ removed from office. (subjunctive of 'be') [was / be]",
            blanks: ["be"],
          },
          {
            text: "It is important that every student ___ heard. (subjunctive of 'be') [is / be]",
            blanks: ["be"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Create a Grammar Reference Card",
        instruction:
          "Create a one-page grammar reference card summarising what you have learned about modal verbs and passive voice. Include: definition, examples, and when to use each.",
        parentTip:
          "A reference card is both a consolidation tool and a study aid. Help your child keep it simple and visual — a table or two-column layout works well. Keep it in their writing folder.",
        prompts: [
          {
            text: "MODAL VERBS — Definition, list, and three example sentences:",
            type: "box",
          },
          {
            text: "PASSIVE VOICE — Definition, formula (structure), and when to use it:",
            type: "box",
          },
          {
            text: "COMBINED CONSTRUCTIONS — Two examples of modal + passive:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Grammar Concepts — Consolidation Sort",
        instruction:
          "Sort each example sentence into the correct category.",
        columns: [
          "Modal Verb Only",
          "Passive Voice Only",
          "Modal + Passive Combined",
        ],
        items: [
          { label: "The report should be submitted by Friday." },
          { label: "The ancient city was discovered in 1920." },
          { label: "She could have arrived earlier." },
          { label: "The package might be delayed." },
          { label: "The decision was made by the committee." },
          { label: "This medicine must be taken with food." },
        ],
      },
      {
        type: "open-response",
        title: "Synthesis Writing: Grammar in Your Own Creative Work",
        instruction:
          "Write a short creative piece (8–10 sentences) — a news report, a science report, or a short story extract — in which you deliberately and intentionally use both active and passive voice AND at least three modal verbs. Annotate three of your grammatical choices.",
        parentTip:
          "This is the capstone creative task. Allow your child to choose the form that interests them most. The goal is deliberate, reflective grammatical decision-making.",
        prompts: [
          {
            text: "Your piece (news report / science report / story extract):",
            type: "box",
          },
          {
            text: "Annotation 1 — quote the sentence, name the grammatical feature, explain why you chose it:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Annotation 2 — quote the sentence, name the grammatical feature, explain why you chose it:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Annotation 3 — quote the sentence, name the grammatical feature, explain why you chose it:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Grammar Is Never Just Grammar",
        content:
          "Every grammatical choice is also a meaning choice, a power choice, and a perspective choice. When you use 'must', you are asserting authority. When you use 'might', you are being intellectually honest about uncertainty. When you use passive voice without an agent, you are hiding who is responsible. And when you use active voice with a clear subject, you are making someone visible and accountable. As you go forward as a writer and a reader, ask this question of every text: who is speaking, with how much authority, and who are they choosing to make invisible?",
      },
      {
        type: "open-response",
        title: "Final Reflection: Grammar as a Tool",
        instruction:
          "Write a 4–6 sentence reflection on what you have learned about modal verbs and passive voice. Include at least one example from your own writing during this worksheet.",
        parentTip:
          "Encourage your child to connect the grammar learning back to their own writing. The question 'how will you use this in your own writing?' is the most important one.",
        prompts: [
          {
            text: "What is the most useful thing you have learned about modal verbs?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What is the most useful thing you have learned about passive voice?",
            type: "lines",
            lines: 2,
          },
          {
            text: "How will you apply both of these skills in your writing going forward?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Grammar in the Real World — Final Challenge",
        instruction:
          "Find one real-world text that uses passive voice and modal verbs together for a clear purpose. Bring it to your next study session and present your analysis.",
        parentTip:
          "Great sources: a medicine bottle, a legal notice, a science textbook, an insurance policy, a government information leaflet. These are all rich with deliberate grammatical choices.",
        suggestions: [
          "Find a text that uses passive voice and modal verbs together.",
          "Note: what is the text's purpose? Who wrote it? Who is the intended audience?",
          "Identify two passive constructions and explain why passive was used.",
          "Identify two modal verbs and explain what they express.",
          "Present your analysis to your parent: what do the grammar choices tell you about the text's purpose and the writer's attitude?",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Modal Verbs in Instructions and Rules",
        instruction:
          "Fill in each blank with the modal verb that fits the purpose: obligation, prohibition, permission, or advice.",
        sentences: [
          {
            text: "All passengers ___ fasten their seatbelts before takeoff. (OBLIGATION)",
            blanks: ["must"],
          },
          {
            text: "Students ___ not use calculators during this test. (PROHIBITION)",
            blanks: ["may"],
          },
          {
            text: "You ___ consult a doctor if symptoms persist. (ADVICE)",
            blanks: ["should"],
          },
          {
            text: "Visitors ___ take photographs in the gallery. (PERMISSION)",
            blanks: ["may"],
          },
          {
            text: "Athletes ___ arrive 30 minutes before competition. (OBLIGATION)",
            blanks: ["must"],
          },
        ],
      },
      {
        type: "true-false",
        title: "Passive Voice in Different Text Types",
        instruction:
          "Decide whether each statement about passive voice in different text types is TRUE or FALSE.",
        statements: [
          {
            text: "Recipes traditionally use passive voice: 'The onions are sliced finely.'",
            answer: true,
          },
          {
            text: "Action-adventure novels typically use passive voice for fight scenes.",
            answer: false,
          },
          {
            text: "Government notices and official communications frequently use passive voice.",
            answer: true,
          },
          {
            text: "First-person diary entries usually contain a lot of passive voice.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite a Recipe Using Active Voice",
        instruction:
          "Traditional recipe instructions often use passive constructions ('The vegetables are chopped', 'The sauce is stirred'). Rewrite the instructions in active voice with a clear 'you' subject.",
        prompts: [
          {
            text: "Original: '1. The potatoes are washed and peeled. 2. The onions are diced finely. 3. The butter is melted in a large pan. 4. The vegetables are added and cooked until soft. 5. The soup is blended until smooth.'\n\nActive voice rewrite (who is doing each action?):",
            type: "box",
          },
          {
            text: "Which version sounds more engaging for a reader? Explain:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Past Modals — Expressing Retrospective Thinking",
        instruction:
          "Choose the correct past modal construction for each context.",
        questions: [
          {
            prompt: "A regretful reflection: 'I ___ brought an umbrella — the forecast clearly said rain.'",
            options: ["must have", "should have", "might have", "will have"],
            answer: "should have",
          },
          {
            prompt: "A logical deduction about the past: 'The lights are on — she ___ arrived home already.'",
            options: ["could have", "might have", "must have", "should have"],
            answer: "must have",
          },
          {
            prompt: "An uncertain retrospective: 'He ___ taken the wrong exit — we haven't seen him for an hour.'",
            options: ["must have", "should have", "might have", "will have"],
            answer: "might have",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Modal Verbs by Social Function",
        instruction:
          "Sort these modal verb sentences by their social function in communication.",
        parentTip:
          "Modal verbs do social work — they manage relationships, politeness levels, and relative authority between speaker and listener.",
        columns: [
          "Making a request (polite)",
          "Expressing authority / giving orders",
          "Offering help",
          "Making a suggestion",
        ],
        items: [
          { label: "'Could you please pass the salt?'" },
          { label: "'You must submit your form by Friday.'" },
          { label: "'Shall I carry that for you?'" },
          { label: "'We should try the new restaurant this weekend.'" },
          { label: "'Would you mind closing the window?'" },
          { label: "'Students must not leave the room during the exam.'" },
          { label: "'Can I help you with that?'" },
          { label: "'You might want to reconsider that decision.'" },
        ],
      },
      {
        type: "open-response",
        title: "Compare Voice Choices in Two Genres",
        instruction:
          "Find one page from an action novel and one page from a science textbook. Compare the use of active and passive voice in each.",
        parentTip:
          "This comparison concretely demonstrates why voice choice is genre-dependent. The contrast between action prose (almost entirely active) and textbook prose (heavily passive) is striking.",
        prompts: [
          {
            text: "Action novel — title and page: _______________________________\nProportion of active vs passive sentences (estimate):\nEffect of the voice choice on the reader's experience:",
            type: "box",
          },
          {
            text: "Science textbook — title and page: ___________________________\nProportion of active vs passive sentences (estimate):\nEffect of the voice choice on the reader's experience:",
            type: "box",
          },
          {
            text: "What does this comparison confirm about the relationship between genre and grammatical voice choice?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Grammar in Formal vs Informal Emails",
        instruction:
          "Fill in each blank with the more appropriate expression for the register indicated.",
        sentences: [
          {
            text: "FORMAL EMAIL: '___ you available for a meeting on Thursday?' [Could / Can]",
            blanks: ["Could"],
          },
          {
            text: "INFORMAL TEXT: 'Can you ___ free on Thursday?' [be / possibly be]",
            blanks: ["be"],
          },
          {
            text: "FORMAL: 'I ___ be grateful if you could respond at your earliest convenience.' [would / will]",
            blanks: ["would"],
          },
          {
            text: "INFORMAL: 'Let me know ___ you can make it!' [whether / if]",
            blanks: ["if"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Formal Complaint Using Modal Verbs",
        instruction:
          "Write a formal complaint email (6–8 sentences) about a broken product. Use at least three modal verbs to express obligation, expectation, and polite request. Use passive voice at least once.",
        parentTip:
          "Model the register before writing — what tone does a polite but firm formal complaint have? Discuss: how does modal verb choice affect whether the tone sounds demanding or reasonable?",
        prompts: [
          {
            text: "Complaint email:",
            type: "box",
          },
          {
            text: "Identify the modal verbs you used and what each expresses:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Circle the More Formal Modal",
        instruction:
          "In each pair, circle the modal verb more appropriate for a formal document.",
        questions: [
          {
            prompt: "Applicants ___ submit their forms before the deadline.",
            options: ["gotta", "must"],
          },
          {
            prompt: "You ___ contact us if you require further information.",
            options: ["can", "may"],
          },
          {
            prompt: "The committee ___ review all applications within 28 days.",
            options: ["will", "is gonna"],
          },
          {
            prompt: "Participants ___ wear appropriate footwear at all times.",
            options: ["should", "oughta"],
          },
        ],
      },
      {
        type: "true-false",
        title: "Grammar Concepts Review — True or False?",
        instruction:
          "A review of all key concepts from this worksheet. Decide TRUE or FALSE.",
        statements: [
          {
            text: "Modal verbs have no -s form for third person singular.",
            answer: true,
          },
          {
            text: "Passive voice always makes writing worse.",
            answer: false,
          },
          {
            text: "Scientists use passive voice to keep the focus on the experiment rather than the experimenter.",
            answer: true,
          },
          {
            text: "Modal verbs can express certainty, obligation, permission, and advice.",
            answer: true,
          },
          {
            text: "The passive voice structure is: subject + verb 'to be' + past participle.",
            answer: true,
          },
          {
            text: "Active voice always gives more information than passive voice.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Grammar in a Science Report — Full Paragraph",
        instruction:
          "Write a complete science report paragraph (6–8 sentences) about any experiment you can recall or invent. Use passive voice throughout and include at least two modal verbs to express expected results or scientific caution.",
        parentTip:
          "The combination of passive voice and hedging modal verbs is the hallmark of genuine scientific writing. This task brings together all the key grammar learning from this worksheet.",
        prompts: [
          {
            text: "Experiment description: ____________________________________\n\nScience report paragraph:",
            type: "box",
          },
          {
            text: "Identify your passive constructions (underline or list them):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Identify your modal verbs and what each expresses:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Grammar for Precise Communication",
        instruction:
          "Choose the sentence that communicates most precisely given the context.",
        questions: [
          {
            prompt: "CONTEXT: You are a doctor advising a patient on medication.\nWhich sentence best balances obligation with respect for patient choice?",
            options: [
              "You must take this medication or you will suffer the consequences.",
              "It is recommended that you take this medication as directed — please contact us if you have concerns.",
              "Maybe take the medication if you feel like it.",
              "You might want to consider taking this medication sometimes.",
            ],
            answer:
              "It is recommended that you take this medication as directed — please contact us if you have concerns.",
          },
          {
            prompt: "CONTEXT: A scientific report discussing preliminary findings.\nWhich uses the most appropriate hedging?",
            options: [
              "The new compound definitely cures the disease.",
              "We think the compound works pretty well.",
              "The compound may offer therapeutic benefits; further controlled trials should be conducted to confirm efficacy.",
              "Obviously, the compound is the cure we needed.",
            ],
            answer:
              "The compound may offer therapeutic benefits; further controlled trials should be conducted to confirm efficacy.",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Active or Passive — Which Is Better Here?",
        instruction:
          "For each context, sort into whether active or passive voice is the better choice.",
        parentTip:
          "This task asks for genuine judgment, not just identification. Encourage your child to articulate WHY each choice is better.",
        columns: ["Active Voice Is Better", "Passive Voice Is Better"],
        items: [
          { label: "Describing a chase scene in an action story" },
          { label: "A science report describing an experimental procedure" },
          { label: "A news story where the identity of the doer matters to the reader" },
          { label: "A formal notice where the action matters more than who performed it" },
          { label: "A personal narrative where the narrator is the central figure" },
          { label: "A police report avoiding identification of a suspect" },
        ],
      },
      {
        type: "open-response",
        title: "Annotate a Passage for Voice and Modality",
        instruction:
          "Read the passage. Underline all passive constructions in one colour and circle all modal verbs in another. Then write three analytical sentences about the grammatical choices.",
        prompts: [
          {
            text: "Passage: 'Visitors should be aware that the site may be closed in extreme weather conditions. Entry fees must be paid at the kiosk upon arrival. Photography is permitted in all outdoor areas, but flash photography must not be used in the cave systems. If assistance is required, staff can be contacted at the information centre.'\n\nList all passive constructions:",
            type: "lines",
            lines: 2,
          },
          {
            text: "List all modal verbs and what each expresses:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Write three analytical sentences about why the grammatical choices in this text are appropriate for its purpose:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Polite Requests — Choosing the Right Modal",
        instruction:
          "Fill in each blank with the modal that creates the most appropriate level of politeness for the context.",
        sentences: [
          {
            text: "Very polite formal request to a stranger: '___ you possibly help me with my luggage?' [Would / Can / Will]",
            blanks: ["Would"],
          },
          {
            text: "Direct request to a close friend: '___ you help me carry this?' [Could / Can / Might]",
            blanks: ["Can"],
          },
          {
            text: "Extremely polite request in a formal letter: 'I ___ be most grateful if you could review the enclosed document.' [would / might / will]",
            blanks: ["would"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Grammar Reference Card — Modal Verbs and Voice",
        instruction:
          "Create a compact grammar reference card summarising: the core modal verbs and their meanings, the passive voice formula, and when to use each voice.",
        parentTip:
          "A reference card is a consolidation and revision tool. Help your child keep it simple and practical — it should be something they can glance at while writing to make deliberate grammatical choices.",
        prompts: [
          {
            text: "Core modal verbs (list at least 8 with their main meaning):",
            type: "box",
          },
          {
            text: "Passive voice formula: ___ + ___\nThree contexts where passive is the better choice:",
            type: "lines",
            lines: 4,
          },
          {
            text: "Active voice: three contexts where it is preferred:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a News Article Using Both Active and Passive Voice",
        instruction:
          "Write a short news article (8–10 sentences) about a fictional local event. Use active voice for the exciting action and passive voice for background information or when the doer is unknown. Use at least two modal verbs.",
        parentTip:
          "News writing is a rich model for balanced voice use. Action sentences are typically active; official statements and background facts are often passive. Discuss how this mirrors real journalism before your child writes.",
        prompts: [
          {
            text: "Fictional event: _______________________________________________\n\nNews article:",
            type: "box",
          },
          {
            text: "Highlight one active sentence and one passive sentence and explain your choice of voice for each:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "Advanced Grammar — Final Review",
        instruction:
          "A challenging final review of grammar concepts. Decide TRUE or FALSE.",
        statements: [
          {
            text: "Modal verbs cannot be used in questions.",
            answer: false,
          },
          {
            text: "'Could have been done' is an example of a passive construction combined with a past modal.",
            answer: true,
          },
          {
            text: "The passive voice is never used in creative fiction.",
            answer: false,
          },
          {
            text: "Removing the agent from a passive sentence ('the window was broken') can be a deliberate stylistic or political choice.",
            answer: true,
          },
          {
            text: "In English, there is only one correct voice (active or passive) for each sentence.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Grammar Journal — Week Reflection",
        instruction:
          "Write a week's grammar journal — one entry per day (5 entries) noting a modal verb or passive construction you encountered in your reading, viewing, or conversations. For each, note: the example, the context, and why the grammatical choice was made.",
        parentTip:
          "Keeping a grammar journal transforms abstract rules into observed language behaviour. Even three or four days of noticing real examples is more effective than additional formal exercises.",
        prompts: [
          {
            text: "Day 1: Example and analysis:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Day 2: Example and analysis:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Day 3: Example and analysis:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Day 4: Example and analysis:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Day 5: Example and analysis:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Passive Voice — Which Agent to Include?",
        instruction:
          "For each passive sentence, decide whether including or omitting the agent creates a better effect.",
        questions: [
          {
            prompt: "PASSIVE: 'The ancient manuscript was discovered in 1921.' Should we add 'by archaeologists'?",
            options: [
              "Yes — we need to know who found it",
              "It depends — if the discoverer's identity is important to the argument, add it; if only the discovery matters, omit it",
              "No — the agent is always unnecessary",
              "Passive sentences cannot include agents",
            ],
            answer:
              "It depends — if the discoverer's identity is important to the argument, add it; if only the discovery matters, omit it",
          },
          {
            prompt: "POLITICAL STATEMENT: 'Cuts to the education budget were approved.' Should the agent be named?",
            options: [
              "No — the passive hides responsibility appropriately",
              "Yes — naming who approved the cuts makes the statement more accountable and informative",
              "It makes no difference",
              "Passive voice in politics is always dishonest",
            ],
            answer:
              "Yes — naming who approved the cuts makes the statement more accountable and informative",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Grammar Detective — A Week of Observation",
        instruction:
          "Over one week, collect five examples of interesting grammar in the wild — modal verbs or passive constructions used for a clear purpose. Bring them back and discuss what each reveals about the writer's choices.",
        parentTip:
          "Model this activity by sharing your own examples at the dinner table. The goal is to make grammatical observation a shared family habit rather than a school task.",
        suggestions: [
          "Look at product packaging, government leaflets, and safety notices.",
          "Notice modal verbs in TV news broadcasts and weather forecasts.",
          "Find passive constructions in science or history textbooks.",
          "Look for passive voice in political statements and press releases.",
          "Bring your five examples to the next study session to discuss.",
        ],
      },
      {
        type: "open-response",
        title: "Final Extended Writing: Grammar in a Historical Speech",
        instruction:
          "Find a short excerpt from a famous historical speech. Analyse how modal verbs and/or passive voice are used to create authority, emotional resonance, or political effect. Write an analytical paragraph of 6–8 sentences.",
        parentTip:
          "Great sources: Churchill, Mandela, Keating's Redfern Speech, or Queen Elizabeth II. These speeches use grammar with extraordinary deliberateness.",
        prompts: [
          {
            text: "Speech, speaker, and occasion: _______________________________\n\nExcerpt (quote or summarise 3–4 sentences):",
            type: "box",
          },
          {
            text: "Analytical paragraph (grammar, context, effect):",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Teach a Grammar Concept",
        instruction:
          "Explain one grammar concept from this worksheet — either modal verbs or passive voice — to a family member. Then write a short reflection: what was hard to explain? What did explaining it reveal about your own understanding?",
        parentTip:
          "The Feynman Technique applies here: if you can explain it simply, you understand it deeply. The places where explanation falters are exactly where further practice is needed.",
        prompts: [
          {
            text: "Concept explained and to whom: _____________________________\n\nReflection on what was hard to explain and what it revealed about your understanding:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Grammar in Environmental Policy Language",
        instruction:
          "Environmental policies use modal verbs and passive voice precisely. Fill in each blank with the appropriate modal.",
        sentences: [
          {
            text: "OBLIGATION: 'All industrial emissions ___ be monitored and reported annually.' [must / might]",
            blanks: ["must"],
          },
          {
            text: "CONDITIONAL: 'Permits ___ be revoked if emissions exceed agreed limits.' [may / should]",
            blanks: ["may"],
          },
          {
            text: "RECOMMENDATION: 'Companies ___ conduct quarterly environmental audits.' [should / must]",
            blanks: ["should"],
          },
          {
            text: "POSSIBILITY: 'New regulations ___ be introduced in the coming financial year.' [could / must]",
            blanks: ["could"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Synthesise Your Grammar Learning",
        instruction:
          "Write a 5–6 sentence reflection on what you have learned across this entire worksheet. Include: the most useful concept, the most surprising thing you discovered, and one specific way you will apply this grammar knowledge in your writing.",
        parentTip:
          "Encourage specific, concrete reflection rather than general statements. 'I will use passive voice when writing science reports because...' is more useful than 'I learned a lot about grammar.'",
        prompts: [
          {
            text: "Grammar learning reflection:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Final Grammar Assessment",
        instruction:
          "Answer these assessment-style questions drawing on all concepts from this worksheet.",
        questions: [
          {
            prompt: "Why do scientists prefer passive voice in their writing?",
            options: [
              "Because active voice is incorrect in academic contexts",
              "To focus attention on the experiment and its results rather than the researcher, creating objectivity",
              "Because it makes the writing longer",
              "Because they do not know who performed the research",
            ],
            answer:
              "To focus attention on the experiment and its results rather than the researcher, creating objectivity",
          },
          {
            prompt: "Which sentence correctly combines a past modal with passive voice?",
            options: [
              "The letter should sending yesterday.",
              "The letter should have been sent yesterday.",
              "The letter yesterday was should sent.",
              "The letter was should have sent.",
            ],
            answer: "The letter should have been sent yesterday.",
          },
          {
            prompt: "What is the key difference between 'must' and 'should' in a set of instructions?",
            options: [
              "They mean exactly the same thing",
              "'Must' expresses non-negotiable obligation; 'should' expresses strong advice with some discretion",
              "'Should' is stronger than 'must'",
              "'Must' is always more polite",
            ],
            answer:
              "'Must' expresses non-negotiable obligation; 'should' expresses strong advice with some discretion",
          },
        ],
        parentTip:
          "These questions mirror standardised test format. Encourage your child to eliminate obviously wrong answers first.",
      },
      {
        type: "matching",
        title: "Match: Modal Verb to Function",
        instruction:
          "Match each modal verb on the left to its primary grammatical function on the right.",
        parentTip:
          "Understanding modal function is a metalinguistic skill. If your child struggles, encourage them to try each modal in a test sentence.",
        left: ["could", "must", "might", "should", "will"],
        right: [
          "Obligation — non-negotiable requirement",
          "Strong advice or moral expectation",
          "Past ability or present possibility",
          "Low possibility or tentative suggestion",
          "Future certainty or strong prediction",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Fill in the Blank: Passive Voice in History",
        instruction:
          "Complete each sentence with the correct passive voice form of the verb in brackets.",
        parentTip:
          "Historical texts heavily favour passive voice. This activity connects grammar to a real discipline.",
        sentences: [
          {
            text: "The treaty _____ (sign) in 1788 to mark the beginning of the colony.",
            blanks: ["was signed"],
          },
          {
            text: "Thousands of Aboriginal people _____ (displace) from their traditional lands.",
            blanks: ["were displaced"],
          },
          {
            text: "The gold rush _____ (trigger) by the discovery of gold at Bathurst in 1851.",
            blanks: ["was triggered"],
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Advanced Modal Concepts",
        instruction: "Mark each statement True or False.",
        parentTip:
          "These statements target nuanced understanding. Disagreement is a good sign — it means your child is thinking critically.",
        statements: [
          {
            text: "The sentence 'Mistakes could be made' uses passive voice to avoid assigning responsibility.",
            answer: true,
          },
          {
            text: "Modal verbs in English can always be identified by the -ing ending they take.",
            answer: false,
          },
          {
            text: "Passive voice is grammatically incorrect in formal writing.",
            answer: false,
          },
          {
            text: "The phrase 'should have been done' combines a past modal with the passive infinitive.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse: The Language of Apology",
        instruction:
          "Read these two apology statements from a fictional politician. Analyse how modal verbs and passive voice are used in each and discuss which is more genuinely accountable.",
        parentTip:
          "Political language is a rich site for grammar analysis. This connects linguistics to civics — an interdisciplinary strength of the Australian Curriculum.",
        prompts: [
          {
            text: "Statement A: 'Mistakes were made and people were hurt. We should have acted sooner. This must not happen again.' — What does the passive voice do here? Who is responsible?",
            type: "box",
          },
          {
            text: "Statement B: 'I made mistakes. I hurt people. I should have acted sooner. I will ensure this does not happen again.' — How does this differ? Which is more accountable and why?",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Modal Certainty Spectrum",
        instruction:
          "Sort these sentences from least certain (left) to most certain (right) based on the modal verb used.",
        parentTip:
          "This activity reinforces the epistemic scale of modals — a key concept in sophisticated language analysis.",
        columns: ["Least Certain", "Somewhat Uncertain", "Moderately Certain", "Most Certain"],
        items: [
          { label: "It might rain tomorrow." },
          { label: "It could rain tomorrow." },
          { label: "It should rain tomorrow." },
          { label: "It will rain tomorrow." },
        ],
      },
      {
        type: "open-response",
        title: "Write: Science Report Excerpt",
        instruction:
          "Write a short science report excerpt (4–5 sentences) describing the results of a simple experiment. Use passive voice at least twice and one modal verb.",
        parentTip:
          "Science report writing is a key ACARA English outcome. This cross-curricular activity reinforces both grammar and scientific literacy.",
        prompts: [
          {
            text: "My science report excerpt (use passive voice at least twice and one modal verb):",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Assessment: Modal Verbs and Passive Voice",
        instruction:
          "Final assessment — choose the best answer for each question to demonstrate your mastery of modal verbs and passive voice.",
        parentTip:
          "This final assessment covers the full range of skills from this worksheet. Use it diagnostically to identify any remaining gaps.",
        questions: [
          {
            prompt: "Which sentence uses passive voice correctly?",
            options: [
              "The cake ate by the children.",
              "The children was eaten the cake.",
              "The cake was eaten by the children.",
              "The children ate the cake were.",
            ],
            answer: "The cake was eaten by the children.",
          },
          {
            prompt: "Which modal verb expresses the weakest possibility?",
            options: ["must", "will", "should", "might"],
            answer: "might",
          },
          {
            prompt: "Why is passive voice common in science writing?",
            options: [
              "It makes writing shorter",
              "It focuses on the process rather than the researcher, creating objectivity",
              "It is required by grammar rules",
              "It sounds more exciting",
            ],
            answer: "It focuses on the process rather than the researcher, creating objectivity",
          },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: Grammar and Power",
        instruction:
          "Write 4–5 sentences reflecting on how understanding modal verbs and passive voice has changed the way you read or think about language.",
        parentTip:
          "Metacognitive reflection is the most powerful consolidation tool. Encourage specific examples rather than general statements.",
        prompts: [
          {
            text: "How understanding grammar has changed how I read language:",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Grammar in the Media",
        instruction:
          "Find a news article or advertisement at home this week. Highlight every passive verb and every modal verb you can find. Count them. Bring your findings to share.",
        parentTip:
          "Applying grammar analysis to authentic texts is the bridge between classroom learning and real literacy. Any news source — print, digital, or broadcast transcript — works well.",
        suggestions: [
          "Find a news article or advertisement.",
          "Highlight every passive verb form (was/were + past participle).",
          "Highlight every modal verb (can, could, may, might, must, shall, should, will, would).",
          "Count: how many passive verbs? How many modal verbs? Which type appears more often?",
          "Write one sentence about what you notice.",
        ],
      },
      {
        type: "open-response",
        title: "Mastery Check: Explain to a Younger Student",
        instruction:
          "Write a short explanation of modal verbs and passive voice for a Year 4 student who has never heard of them. Use simple language, one example of each, and explain why a writer would choose to use them.",
        parentTip:
          "The ability to explain a concept simply is one of the strongest indicators of genuine understanding. This task also develops communication skills and empathy for audience needs.",
        prompts: [
          {
            text: "My explanation of modal verbs and passive voice for a Year 4 student:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Grammar as a Window on the World",
        content:
          "Grammar is not just a set of rules about correct English — it is a system for expressing how the world is, how certain we are about it, and who is responsible for what happens in it. Modal verbs carry our epistemic state — how much we know. Passive voice carries our political choices — who we name and who we hide. Every grammatical choice is also a choice about knowledge and power. You now see grammar not just as correctness, but as meaning. That is the beginning of real linguistic awareness.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "matching",
        title: "Match Essay Parts to Their Purpose",
        instruction:
          "Draw a line to match each part of a persuasive essay to its purpose.",
        parentTip:
          "Go through the parts in order before your child attempts to match them — the sequence itself is part of the learning.",
        left: [
          "Introduction",
          "Body paragraph 1",
          "Body paragraph 2",
          "Body paragraph 3",
          "Counter-argument",
          "Conclusion",
        ],
        right: [
          "Addresses the opposing view and responds to it",
          "Third supporting argument with evidence",
          "Summarises the argument and calls the reader to act or think",
          "Opens with a hook, states the thesis, previews the argument",
          "First supporting argument with evidence",
          "Second supporting argument with evidence",
        ],
      },
      {
        type: "true-false",
        title: "Persuasive Essay Basics — True or False?",
        instruction:
          "Decide whether each statement about persuasive essays is TRUE or FALSE.",
        parentTip:
          "Work through the first two statements together as a quick check before your child continues.",
        statements: [
          {
            text: "A persuasive essay argues a single clear position.",
            answer: true,
          },
          {
            text: "A thesis statement only needs to state a topic, not a position.",
            answer: false,
          },
          {
            text: "Evidence in a persuasive essay can include facts, statistics, examples, or expert quotes.",
            answer: true,
          },
          {
            text: "A good persuasive essay ignores the opposing view completely.",
            answer: false,
          },
          {
            text: "TEEL stands for Topic, Evidence, Explanation, Link.",
            answer: true,
          },
          {
            text: "A conclusion should introduce completely new arguments.",
            answer: false,
          },
        ],
      },
      {
        type: "sorting",
        title: "Spot the Essay Part",
        instruction:
          "Sort each extract into the correct part of a persuasive essay.",
        parentTip:
          "Read each extract aloud with your child before sorting. The tone and function of each one should be audible.",
        columns: ["Introduction", "Body Paragraph", "Counter-Argument / Rebuttal", "Conclusion"],
        items: [
          { label: "Every year, millions of tonnes of plastic waste enter our oceans. This essay argues that single-use plastics should be banned immediately." },
          { label: "Some people argue that plastic bans harm low-income households who rely on cheap packaging. However, affordable alternatives already exist in most categories." },
          { label: "Firstly, plastic pollution directly harms marine life. Research from WWF shows that over 800 species are affected by ocean plastic." },
          { label: "The evidence is clear: a ban on single-use plastics is not only possible but necessary. The time for action is now." },
        ],
      },
      {
        type: "multiple-choice",
        title: "Strong Thesis or Weak Thesis?",
        instruction:
          "Choose whether each statement is a strong thesis, a weak thesis, or simply a topic.",
        questions: [
          {
            prompt: "'This essay is about homework.'",
            options: ["Strong thesis", "Weak thesis", "Topic only"],
            answer: "Topic only",
          },
          {
            prompt: "'I think zoos are bad.'",
            options: ["Strong thesis", "Weak thesis", "Topic only"],
            answer: "Weak thesis",
          },
          {
            prompt: "'Zoos, while well-intentioned, ultimately harm animals by depriving them of natural behaviours and should be replaced by habitat conservation programmes.'",
            options: ["Strong thesis", "Weak thesis", "Topic only"],
            answer: "Strong thesis",
          },
          {
            prompt: "'Renewable energy is important for the future.'",
            options: ["Strong thesis", "Weak thesis", "Topic only"],
            answer: "Weak thesis",
          },
        ],
      },
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
        type: "fill-in-blank",
        title: "TEEL Paragraph — Label the Parts",
        instruction:
          "Read the paragraph. Fill in each blank with the correct TEEL label: T (Topic sentence), E (Evidence), E (Explanation), or L (Link).",
        parentTip:
          "Have your child read the full paragraph first, then label each sentence. The topic sentence is always first; the link sentence always connects back or bridges forward.",
        sentences: [
          {
            text: "___ : 'Daily exercise improves both physical and mental health in primary-aged students.'",
            blanks: ["T"],
          },
          {
            text: "___ : 'A 2023 study by the Australian Institute of Health found that children who exercise for 60 minutes per day perform significantly better on concentration tasks.'",
            blanks: ["E"],
          },
          {
            text: "___ : 'This demonstrates that exercise does not take time away from learning — it actively enhances it.'",
            blanks: ["E"],
          },
          {
            text: "___ : 'Therefore, ensuring adequate physical activity time at school is essential for student wellbeing and academic outcomes.'",
            blanks: ["L"],
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
        type: "multiple-choice",
        title: "Identify the Hook Type",
        instruction:
          "Essays open with hooks to grab the reader's attention. Identify the type of hook used in each opening.",
        questions: [
          {
            prompt: "'Did you know that Australians throw away 6.9 million tonnes of food every year?'",
            options: [
              "Bold claim",
              "Rhetorical question",
              "Surprising statistic",
              "Anecdote",
            ],
            answer: "Rhetorical question",
          },
          {
            prompt: "'It was 11pm when Sofia finally put down her pencil, exhausted after hours of homework. She had not eaten dinner, read for pleasure, or spoken to her family.'",
            options: [
              "Surprising statistic",
              "Bold claim",
              "Anecdote",
              "Definition",
            ],
            answer: "Anecdote",
          },
          {
            prompt: "'Australia faces an extinction crisis unlike anything in recorded history — and we are its cause.'",
            options: [
              "Rhetorical question",
              "Surprising statistic",
              "Bold claim",
              "Anecdote",
            ],
            answer: "Bold claim",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Weak Evidence vs Strong Evidence",
        instruction:
          "Sort each piece of evidence into 'Strong Evidence' or 'Weak Evidence' based on how specific, verifiable, and relevant it is.",
        parentTip:
          "Strong evidence is specific (who, what, where), verifiable (you could check it), and relevant (it actually proves the point). Personal anecdotes and general statements are weak evidence in formal persuasive essays.",
        columns: ["Strong Evidence", "Weak Evidence"],
        items: [
          { label: "A 2022 WHO report found that 1.6 billion people live without adequate clean water." },
          { label: "Everyone knows that junk food is bad for you." },
          { label: "Research from the University of Melbourne found that bilingual children score higher on executive function tests." },
          { label: "My cousin tried it and said it didn't work." },
          { label: "Australia Bureau of Statistics data shows youth unemployment rose by 4.2% between 2020 and 2023." },
          { label: "Things are getting worse every year, obviously." },
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
      {
        type: "tip",
        title: "Key Concept: The TEEL Structure",
        content:
          "TEEL (Topic sentence, Evidence, Explanation, Link) is a powerful scaffold for body paragraphs — but it is a scaffold, not a cage. Each part has a job: the Topic sentence announces what this paragraph argues; Evidence proves it; Explanation shows WHY the evidence proves it; Link connects back to the thesis or bridges to the next argument. The Explanation is the part most students skip — and it is the most important part. Without it, you have a fact but not an argument.",
      },
      {
        type: "fill-in-blank",
        title: "Counter-Argument Sentence Starters",
        instruction:
          "Formal persuasive essays use specific phrases to introduce and rebut counter-arguments. Fill in each blank with the correct phrase.",
        parentTip:
          "These sentence starters are worth memorising — they are useful in formal essays, debates, and written arguments throughout secondary school.",
        sentences: [
          {
            text: "Introduce the counter-argument: '___, some people argue that...'\n[Admittedly / Obviously / Perhaps]",
            blanks: ["Admittedly"],
          },
          {
            text: "Begin the rebuttal: '___, the evidence clearly shows...'\n[However / Nonetheless / But]",
            blanks: ["However"],
          },
          {
            text: "Concede a point while maintaining your position: '___ this may be true in some cases, it does not alter the fundamental conclusion that...'\n[While / Because / If]",
            blanks: ["While"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Circle the Better Conclusion Strategy",
        instruction:
          "In each pair, circle the better conclusion strategy.",
        parentTip:
          "A strong conclusion raises the stakes — it does not simply repeat the introduction. It should leave the reader thinking or feeling compelled to act.",
        questions: [
          {
            prompt: "Which is a stronger conclusion strategy?",
            options: [
              "Restate the thesis word-for-word",
              "Connect the thesis to a broader idea or call to action",
            ],
          },
          {
            prompt: "Which conclusion is stronger?",
            options: [
              "In conclusion, I have shown that homework is bad for students.",
              "If we value childhood, creativity, and family connection, the choice is clear: it is time to rethink how we use our children's hours.",
            ],
          },
          {
            prompt: "Which approach is better for ending a persuasive essay?",
            options: [
              "Introducing new evidence the body paragraphs did not discuss",
              "Synthesising the key argument and issuing a call to action",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Plan a Persuasive Essay",
        instruction:
          "Use this planning frame to outline a full persuasive essay on a topic of your choice.",
        parentTip:
          "The planning stage is where essays are won or lost. Encourage thoroughness here — once the plan is solid, the writing is much more fluent.",
        prompts: [
          {
            text: "Topic and position: _____________________________________________\n\nHook idea: _____________________________________________________\n\nThesis statement: _______________________________________________",
            type: "lines",
            lines: 4,
          },
          {
            text: "Argument 1 (topic sentence + evidence): _________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Argument 2 (topic sentence + evidence): _________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Argument 3 (topic sentence + evidence): _________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Counter-argument and rebuttal: __________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Conclusion strategy: ___________________________________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "matching",
        title: "Match Persuasive Technique to Example",
        instruction:
          "Draw a line to match each persuasive technique to its example.",
        parentTip:
          "Persuasive techniques are the tools writers use in addition to evidence. Being able to identify them in other people's writing helps your child use them deliberately.",
        left: [
          "Rhetorical question",
          "Rule of three",
          "Appeal to authority",
          "Emotive language",
          "Inclusive pronoun ('we')",
        ],
        right: [
          "According to UNESCO, 258 million children worldwide have no access to education.",
          "We all have a responsibility to protect our planet.",
          "Do we really want our children growing up in a world without clean air?",
          "The abandoned animals huddled together, starving, frightened, and forgotten.",
          "This policy is inefficient, unfair, and ultimately unsustainable.",
        ],
      },
      {
        type: "tip",
        title: "Writing Tip: Your Hook Is Your First Impression",
        content:
          "Your opening hook is the first thing a reader encounters. It must earn their attention immediately. There are five strong hook types: (1) A surprising statistic. (2) A rhetorical question. (3) A bold or provocative claim. (4) A brief vivid anecdote. (5) A striking quotation. The weakest openings start with 'I think...' or 'This essay will discuss...' — they announce rather than engage. Choose the hook type that best suits your topic and audience.",
      },
      {
        type: "home-activity",
        title: "Persuasion in the Real World",
        instruction:
          "Find one example of persuasive writing in your environment — an editorial, opinion piece, advertisement, or charity appeal. Analyse its structure.",
        parentTip:
          "This activity works especially well with a charity fundraising letter or an opinion piece from the newspaper. Read it aloud together before analysing.",
        suggestions: [
          "Find a piece of persuasive writing (not fiction).",
          "Identify the thesis or main claim.",
          "Find at least two pieces of evidence.",
          "Find any counter-argument or acknowledgement of the opposing view.",
          "Identify the hook and the conclusion strategy.",
          "Rate the essay from 1–5 for persuasiveness and explain your rating.",
        ],
      },
      {
        type: "sorting",
        title: "Sort Persuasive Language Techniques",
        instruction:
          "Sort each phrase into the correct persuasive technique column.",
        columns: [
          "Emotive Language",
          "Statistical Evidence",
          "Rhetorical Question",
          "Rule of Three",
        ],
        items: [
          { label: "Over 400 species are at risk of extinction in Australia alone." },
          { label: "Can we truly afford to ignore this crisis?" },
          { label: "The defenceless creatures were abandoned and left to suffer." },
          { label: "This plan is bold, necessary, and long overdue." },
          { label: "Research shows that 70% of teens report feeling overwhelmed by social media." },
          { label: "How can we call ourselves a fair society when children go hungry?" },
          { label: "Our schools are underfunded, understaffed, and undervalued." },
          { label: "The floods destroyed everything — homes, livelihoods, memories." },
        ],
      },
      {
        type: "open-response",
        title: "Write a Hook",
        instruction:
          "Write three different hooks for the same essay topic. Use a different hook type each time.",
        parentTip:
          "Read all three aloud after writing. The physical experience of speaking them usually makes the strongest one obvious. Ask your child which one they would most want to keep reading after.",
        prompts: [
          {
            text: "Essay topic: ___________________________________________________\n\nHook 1 (surprising statistic): _______________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Hook 2 (rhetorical question): _______________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Hook 3 (bold claim or brief anecdote): ________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which hook do you think is most effective and why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Essay Structure — More True or False?",
        instruction:
          "Read each statement and decide TRUE or FALSE.",
        statements: [
          {
            text: "A five-paragraph essay structure is the most common form for Year 6 persuasive writing.",
            answer: true,
          },
          {
            text: "The counter-argument paragraph weakens your essay.",
            answer: false,
          },
          {
            text: "A call to action tells the reader what they should think, feel, or do.",
            answer: true,
          },
          {
            text: "Each TEEL paragraph should argue a different point from the others.",
            answer: true,
          },
          {
            text: "The introduction should contain all three pieces of evidence.",
            answer: false,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Power of One Question",
        content:
          "Some of the most powerful persuasive openings in history have been a single question. 'Why should we die for your country?' 'Is this the world we want to hand to our children?' A single, well-crafted question can do more persuasive work than a full paragraph of argument — because it invites the reader to answer it themselves, and the answer almost always supports the writer's position. Write three rhetorical questions on topics you care about. Which one feels most powerful? Why?",
      },

      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "fill-in-blank",
        title: "Argument Connectives",
        instruction:
          "Persuasive essays use specific connective words to build arguments. Fill in each blank with the best connective from the box.",
        parentTip:
          "Connectives are the signal words that show how ideas relate. They are important for paragraph cohesion and argument clarity.",
        sentences: [
          {
            text: "___, the research shows that exercise improves academic outcomes. (ADDING A FIRST POINT) [Firstly / However / Despite]",
            blanks: ["Firstly"],
          },
          {
            text: "___, critics argue that this approach is too expensive. (INTRODUCING COUNTER) [Furthermore / Admittedly / Therefore]",
            blanks: ["Admittedly"],
          },
          {
            text: "___ the initial cost, the long-term benefits far outweigh the investment. (CONCEDING BUT MAINTAINING) [Despite / Firstly / Also]",
            blanks: ["Despite"],
          },
          {
            text: "___, banning single-use plastics is the right course of action. (CONCLUDING) [Therefore / However / Although]",
            blanks: ["Therefore"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate a Sample Paragraph",
        instruction:
          "Read the sample body paragraph. Evaluate its strengths and suggest one improvement.",
        parentTip:
          "Evaluating someone else's writing is often easier than evaluating your own. This builds the critical thinking skills your child needs to self-edit.",
        prompts: [
          {
            text: "Sample: 'Secondly, mobile phones should not be in schools because they are distracting. My friend always looks at her phone in class. This is why phones should be banned.'\n\nDoes this paragraph follow TEEL structure? What is missing?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Rewrite this paragraph with stronger evidence and a proper explanation:",
            type: "box",
          },
        ],
      },
      {
        type: "matching",
        title: "Match Connective to Function",
        instruction:
          "Draw a line matching each connective to its function in a persuasive essay.",
        left: [
          "Furthermore",
          "However",
          "Therefore",
          "Admittedly",
          "In contrast",
          "In conclusion",
        ],
        right: [
          "Introduces a counter-argument or concession",
          "Adds another point in the same direction",
          "Signals a contrasting or opposing point",
          "Draws a logical conclusion from previous evidence",
          "Begins the conclusion section",
          "Compares two opposing ideas",
        ],
      },
      {
        type: "open-response",
        title: "Write Two TEEL Paragraphs",
        instruction:
          "Write two body paragraphs for your essay plan. Each should follow TEEL structure and argue a different point. Label each part.",
        parentTip:
          "If your child is stuck on evidence, pause and research together. The research habit (finding real facts before writing) is as important as the writing skill itself.",
        prompts: [
          {
            text: "Paragraph 1 — Topic sentence (T):",
            type: "lines",
            lines: 1,
          },
          {
            text: "Evidence (E):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Explanation (E):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Link (L):",
            type: "lines",
            lines: 1,
          },
          {
            text: "Paragraph 2 — Topic sentence (T):",
            type: "lines",
            lines: 1,
          },
          {
            text: "Evidence (E):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Explanation (E):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Link (L):",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Evidence Quality Matters",
        content:
          "Not all evidence is equal. In a strong persuasive essay, evidence should be: SPECIFIC (not 'research shows' but 'a 2022 WHO report shows'), VERIFIABLE (the reader could check it), and RELEVANT (it actually proves your specific claim). Anecdotes ('I know someone who...') and vague generalisations ('everyone knows...') are weak evidence. When you cannot find strong evidence for a point, that might mean the point itself needs reconsidering.",
      },
      {
        type: "multiple-choice",
        title: "Choose the Stronger Evidence",
        instruction:
          "For each argument, choose the stronger piece of evidence.",
        questions: [
          {
            prompt: "Argument: 'Physical activity improves learning.'",
            options: [
              "Everyone knows that exercise makes you feel better.",
              "A 2021 study published in Pediatrics found that students who exercised before school improved their reading comprehension scores by 14%.",
              "My PE teacher says sport is really important.",
              "Lots of research shows that sport is good for kids.",
            ],
            answer:
              "A 2021 study published in Pediatrics found that students who exercised before school improved their reading comprehension scores by 14%.",
          },
          {
            prompt: "Argument: 'Food waste is a major environmental problem.'",
            options: [
              "People throw away too much food these days.",
              "The United Nations Environment Programme estimates that one-third of all food produced globally is wasted, generating 8–10% of global greenhouse gas emissions.",
              "My family tries not to waste food.",
              "Wasting food is obviously bad for the environment.",
            ],
            answer:
              "The United Nations Environment Programme estimates that one-third of all food produced globally is wasted, generating 8–10% of global greenhouse gas emissions.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Counter-Argument Paragraph",
        instruction:
          "Write a full counter-argument paragraph for your essay. Include: introducing the opposing view, acknowledging its validity, and then rebutting it with evidence.",
        parentTip:
          "Model the structure: 'Some people argue... This view has merit because... However, the evidence clearly shows...' This three-part structure is a powerful scaffold for this paragraph type.",
        prompts: [
          {
            text: "Counter-argument paragraph (include introduction, concession, and rebuttal):",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Which Part of the Essay Does Each Sentence Belong To?",
        instruction:
          "Sort each sentence into the correct section of a persuasive essay.",
        columns: [
          "Introduction",
          "Body Paragraph",
          "Counter-Argument",
          "Conclusion",
        ],
        items: [
          { label: "Although some claim that uniforms limit self-expression, studies show that students in uniform schools report higher levels of belonging." },
          { label: "School uniforms should be mandatory in all Australian public schools." },
          { label: "The evidence presented in this essay demonstrates conclusively that uniform policies benefit students, schools, and communities." },
          { label: "Moreover, uniforms reduce visible socioeconomic inequality among students." },
          { label: "Every year, students face significant pressure around fashion choices, contributing to bullying and social anxiety." },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Best Argument You Have Ever Heard",
        content:
          "Think of a time someone genuinely changed your mind — about something small or something big. What made their argument so effective? Was it a striking fact? A question that made you think? A story that helped you see another perspective? Discuss this with your parent. Understanding what persuaded YOU is one of the best ways to understand what persuades readers. Can you reverse-engineer the technique that changed your mind?",
      },
      {
        type: "fill-in-blank",
        title: "Conclusion Sentence Starters",
        instruction:
          "Strong conclusions use specific sentence starters. Fill in each blank with the best option.",
        sentences: [
          {
            text: "Summarising the argument: '___, the evidence clearly demonstrates that...' [In conclusion / Because / While]",
            blanks: ["In conclusion"],
          },
          {
            text: "Raising the stakes: 'The choice we make ___ will determine what kind of future we leave behind.' [now / later / perhaps]",
            blanks: ["now"],
          },
          {
            text: "Call to action: 'It is time for all of us to ___ and take decisive action.' [sit back / step up / wait]",
            blanks: ["step up"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Conclusion Paragraph",
        instruction:
          "Write a conclusion paragraph for your essay. Include: a summary of your main argument (not just a list), an elevated final point, and a call to action.",
        parentTip:
          "The conclusion should feel like the logical, inevitable end of a journey — not a copy of the introduction. Read it aloud: does it feel like a strong ending?",
        prompts: [
          {
            text: "Write your conclusion paragraph here:",
            type: "box",
          },
          {
            text: "Identify your call to action (underline it in your paragraph above, then explain it here):",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Persuasive Techniques — True or False?",
        instruction:
          "Decide whether each statement is TRUE or FALSE.",
        statements: [
          {
            text: "The 'rule of three' works because groups of three feel naturally complete and memorable to readers.",
            answer: true,
          },
          {
            text: "An appeal to authority is strongest when the authority cited is a genuine expert in the relevant field.",
            answer: true,
          },
          {
            text: "Using emotive language always makes an argument stronger.",
            answer: false,
          },
          {
            text: "A rhetorical question is asked expecting the reader to answer out loud.",
            answer: false,
          },
          {
            text: "Using 'we' instead of 'you' can make a persuasive text feel less accusatory.",
            answer: true,
          },
        ],
        parentTip:
          "Statement 3 is worth discussing — overuse of emotive language can feel manipulative and actually reduce an argument's credibility with some readers.",
      },
      {
        type: "open-response",
        title: "Identify Persuasive Techniques in a Sample Essay",
        instruction:
          "Read the extract. Identify three persuasive techniques used and explain the effect of each.",
        prompts: [
          {
            text: "Extract: 'Every day, over 1,000 children in Australia go to school without enough to eat. Does that not trouble every one of us? We — parents, teachers, communities — have both the power and the responsibility to change this. The solution is clear, the evidence is overwhelming, and the time for action is now.'\n\nTechnique 1: ________________  Example: ________________  Effect: ________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technique 2: ________________  Example: ________________  Effect: ________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technique 3: ________________  Example: ________________  Effect: ________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Debate Prep: Argue Both Sides",
        instruction:
          "Choose a topic. Spend five minutes arguing one side with your parent, then swap and argue the other side for five minutes. Then discuss: which side was easier to argue? Which arguments were strongest?",
        parentTip:
          "The goal is not to win but to develop intellectual flexibility — the ability to understand and articulate a position you do not personally hold. This skill is central to strong persuasive writing.",
        suggestions: [
          "Choose a topic with two clear sides: uniforms, homework, social media, zoos, pets in schools.",
          "Parent argues Side A, child argues Side B for five minutes.",
          "Swap: now argue the opposite sides for five minutes.",
          "Discuss: which arguments were strongest on each side?",
          "Write down the strongest argument from the side you personally DISAGREE with.",
        ],
      },

      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Consolidating Tip: The Difference Between Persuading and Manipulating",
        content:
          "Persuasion uses evidence, logic, and honest emotional appeals to change minds. Manipulation uses fear, false information, incomplete data, and emotional exploitation to bypass rational thinking. The difference matters: strong persuasive writing earns agreement; manipulative writing forces it temporarily. Readers who feel manipulated stop trusting the writer. As you write, always ask: am I using this technique because it genuinely supports my argument, or am I using it to overwhelm the reader's judgement?",
      },
      {
        type: "open-response",
        title: "Draft Your Full Essay",
        instruction:
          "Using your plan from Activity 14, draft a complete persuasive essay: hook + thesis, three TEEL body paragraphs, counter-argument with rebuttal, and conclusion with call to action. This is a full first draft — write freely without stopping to perfect each sentence.",
        parentTip:
          "A first draft is meant to be messy. Encourage your child to write without stopping to fix every word — the goal is to get the whole structure down. Revision comes next.",
        prompts: [
          {
            text: "Full essay draft — use a separate sheet of lined paper or a word processor for this task. Bring your draft back to mark up in the next activity.",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Self-Edit Your Draft",
        instruction:
          "Use this checklist to evaluate your draft essay. Mark each item and then revise your draft based on what you find.",
        parentTip:
          "Read the essay aloud together. Sentences that are unclear or clunky usually stand out when spoken. Encourage your child to trust their ear.",
        prompts: [
          {
            text: "Introduction check: Does it open with a hook? Is the thesis specific and arguable? Mark YES or NO and explain any improvements needed.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Body paragraphs check: Does each paragraph follow TEEL? Is the evidence specific and relevant? Mark each paragraph and note any gaps.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Counter-argument check: Is the opposing view presented fairly? Is the rebuttal logical and evidence-based?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Conclusion check: Does it go beyond repeating the introduction? Is there a clear call to action?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify the Logical Fallacy",
        instruction:
          "A logical fallacy is a flaw in reasoning. Identify the fallacy in each argument.",
        questions: [
          {
            prompt: "'My grandfather ate red meat every day and lived to 95. Therefore, eating red meat daily is healthy.'",
            options: [
              "False dichotomy",
              "Anecdotal evidence used as general proof",
              "Appeal to authority",
              "Circular reasoning",
            ],
            answer: "Anecdotal evidence used as general proof",
          },
          {
            prompt: "'You either support the new park development, or you want this city to decline.'",
            options: [
              "Slippery slope",
              "Ad hominem",
              "False dichotomy (only two options when more exist)",
              "Circular reasoning",
            ],
            answer: "False dichotomy (only two options when more exist)",
          },
          {
            prompt: "'We can't trust Dr Smith's research on climate change — she once had a parking fine.'",
            options: [
              "Straw man",
              "Ad hominem (attacking the person, not the argument)",
              "False dichotomy",
              "Appeal to authority",
            ],
            answer: "Ad hominem (attacking the person, not the argument)",
          },
        ],
        parentTip:
          "Logical fallacies are fascinating once you start spotting them. They appear everywhere in advertising, politics, and casual argument. Make it a game: who can spot the most fallacies in one week of news-watching?",
      },
      {
        type: "open-response",
        title: "Write an Introduction with a Strong Hook",
        instruction:
          "Write a polished introduction (4–6 sentences) for your essay. Include: a hook, context that frames the issue, and a clear thesis statement.",
        parentTip:
          "The introduction sets the tone for the whole essay. Encourage your child to write at least two different opening sentences and choose the stronger one.",
        prompts: [
          {
            text: "Your polished introduction:",
            type: "box",
          },
          {
            text: "What type of hook did you choose and why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Strong vs Weak Rebuttal",
        instruction:
          "Sort each rebuttal into 'Strong Rebuttal' or 'Weak Rebuttal' based on how logically it responds to the counter-argument.",
        parentTip:
          "A strong rebuttal provides evidence or logic. A weak rebuttal simply dismisses the counter-argument or just reasserts the original position.",
        columns: ["Strong Rebuttal", "Weak Rebuttal"],
        items: [
          { label: "While critics claim uniforms are expensive, research from the Monash Institute found that uniform costs are offset within one year by reduced peer pressure on clothing spending." },
          { label: "That argument is just wrong and people who believe it clearly haven't thought about it properly." },
          { label: "Admittedly, some students feel phone bans are unfair; however, a 2022 London School of Economics study found measurable improvement in test scores in schools with bans." },
          { label: "Anyone who thinks that clearly doesn't care about the environment." },
          { label: "While zoos claim to support conservation, the World Wildlife Fund notes that less than 1% of zoo budgets fund wild habitat protection." },
        ],
      },
      {
        type: "open-response",
        title: "Revise Your Essay — Final Polish",
        instruction:
          "Make at least five specific revisions to your draft essay. Record each change below.",
        parentTip:
          "Revision is the mark of a mature writer. Help your child understand that the best professional writers spend as much time revising as drafting. The first draft is just the beginning.",
        prompts: [
          {
            text: "Revision 1 — what you changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Revision 2 — what you changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Revision 3 — what you changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Revision 4 — what you changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Revision 5 — what you changed and why:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Arguing the Opposite",
        content:
          "The philosopher John Stuart Mill argued that you do not truly understand your own position unless you can argue the opposite view at least as well as its best advocates. Take your completed essay topic and write the strongest possible one-paragraph argument for the OPPOSING position. This is not about changing your mind — it is about the intellectual discipline of understanding all sides of a question. Discuss it with your parent: does engaging with the opposing view change anything about your own argument?",
      },
      {
        type: "open-response",
        title: "Compare Two Persuasive Essays",
        instruction:
          "Find two short opinion pieces or editorials on a similar topic. Compare how effectively each one argues its position.",
        parentTip:
          "ABC Opinion, The Conversation, or The Guardian Australia all publish accessible opinion pieces suitable for this activity.",
        prompts: [
          {
            text: "Essay 1 — source and topic: ___________________________________\nMain argument: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Essay 2 — source and topic: ___________________________________\nMain argument: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which essay is more persuasive? Identify two specific reasons, referencing evidence quality and technique use:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Essay Structure — Assessment-Style Questions",
        instruction:
          "Answer these questions as if in a reading comprehension test.",
        questions: [
          {
            prompt:
              "What is the purpose of the Explanation part of a TEEL paragraph?",
            options: [
              "To repeat the topic sentence",
              "To provide a statistic or quote",
              "To show HOW the evidence proves the point",
              "To transition to the next paragraph",
            ],
            answer: "To show HOW the evidence proves the point",
          },
          {
            prompt:
              "A counter-argument paragraph should FIRST:",
            options: [
              "Immediately attack the opposing view",
              "Present the opposing view fairly and accurately",
              "Repeat your thesis",
              "Provide a new piece of evidence",
            ],
            answer: "Present the opposing view fairly and accurately",
          },
          {
            prompt:
              "Which of these is the WEAKEST conclusion strategy?",
            options: [
              "Issue a call to action",
              "Repeat the introduction word for word",
              "Connect the thesis to a broader issue",
              "Leave the reader with a thought-provoking statement",
            ],
            answer: "Repeat the introduction word for word",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Write a Letter to the Editor",
        instruction:
          "Write a 150–200 word letter to the editor of a newspaper about an issue you care about. Follow the persuasive essay structure: hook, thesis, argument with evidence, and call to action.",
        parentTip:
          "A letter to the editor is a real-world persuasive writing task that follows exactly the same structure as a formal essay but in a much shorter, more immediate form. If the letter is genuinely good, consider sending it to a local paper.",
        suggestions: [
          "Choose an issue that genuinely matters to you.",
          "Open with a hook — a question, statistic, or brief story.",
          "State your position clearly in the second or third sentence.",
          "Provide one piece of specific evidence.",
          "End with a call to action.",
          "Keep it under 200 words — letters to editors must be concise.",
        ],
      },

      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Extending Tip: Ethos, Logos, Pathos",
        content:
          "Ancient Greek rhetorician Aristotle identified three modes of persuasion that are still used today. Ethos is credibility — why should the reader trust the writer? Logos is logical reasoning — does the argument make sense? Pathos is emotional appeal — does the writing make the reader feel something? The most powerful persuasive essays use all three in balance. Too much pathos without logos becomes manipulation. All logos without ethos is sterile. Identify which mode dominates in your own essay — and deliberately strengthen the weaker ones.",
      },
      {
        type: "open-response",
        title: "Apply Ethos, Logos, Pathos",
        instruction:
          "Identify one example of ethos, logos, and pathos in the extract below. Then evaluate how effectively the three modes are balanced.",
        prompts: [
          {
            text: "Extract: 'As a marine biologist who has spent 20 years studying coral reefs (ethos/credibility), I can tell you that what I have witnessed is heartbreaking (pathos). Over 50% of Australia's Great Barrier Reef has bleached in the past decade, and rising ocean temperatures are the cause (logos). We have the science, the solutions, and the moral obligation to act.'\n\nEthos example: _________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Logos example: _________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Pathos example: _________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Are the three modes balanced effectively? Explain:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write an Essay Introduction Using All Three Modes",
        instruction:
          "Write an introduction (5–7 sentences) for a new essay topic that deliberately incorporates ethos, logos, and pathos. Label each element.",
        parentTip:
          "Discuss each mode briefly before writing: Ethos — why would the reader trust this writer? Logos — what logical evidence establishes the case? Pathos — what feeling do you want the reader to have?",
        prompts: [
          {
            text: "Essay topic: ___________________________________________________\n\nIntroduction (label ethos/logos/pathos in the margin):",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Ethos, Logos, or Pathos?",
        instruction:
          "Identify whether each sentence is primarily using ethos, logos, or pathos.",
        questions: [
          {
            prompt:
              "'According to a peer-reviewed study in Nature Climate Change, global average temperatures have risen 1.1°C since pre-industrial times.'",
            options: ["Ethos", "Logos", "Pathos"],
            answer: "Logos",
          },
          {
            prompt:
              "'Imagine your own child, unable to breathe clean air, growing up in a world we chose not to protect.'",
            options: ["Ethos", "Logos", "Pathos"],
            answer: "Pathos",
          },
          {
            prompt:
              "'As the head of the National Environmental Science Foundation, Dr Nguyen brings 30 years of direct research experience to this recommendation.'",
            options: ["Ethos", "Logos", "Pathos"],
            answer: "Ethos",
          },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate a Professional Opinion Piece",
        instruction:
          "Find a professional opinion piece (The Guardian, The Conversation, or ABC Opinion are ideal). Write a structured evaluation of its persuasive effectiveness.",
        parentTip:
          "Help your child read the piece critically rather than just receptively. The goal is to evaluate the craft, not just absorb the content.",
        prompts: [
          {
            text: "Article title, author, and source:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Thesis (in your own words):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evaluate the quality of evidence used (specific, verifiable, relevant):",
            type: "lines",
            lines: 3,
          },
          {
            text: "Identify any persuasive techniques (ethos, logos, pathos, rhetorical devices):",
            type: "lines",
            lines: 3,
          },
          {
            text: "Overall persuasiveness rating (1–5) and justification:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Persuasion Hierarchy — Sort by Persuasive Force",
        instruction:
          "Sort these evidence types from WEAKEST to STRONGEST persuasive force in a formal essay.",
        parentTip:
          "Context matters — sometimes an anecdote opens an argument more powerfully than a statistic. But for formal persuasive writing, verifiable, specific evidence always outranks personal experience.",
        columns: ["Weakest", "Moderate", "Strongest"],
        items: [
          { label: "Personal anecdote" },
          { label: "Peer-reviewed research study" },
          { label: "Vague generalisation ('everyone knows...')" },
          { label: "Official government statistics" },
          { label: "Expert quote from a recognised authority" },
          { label: "A friend's opinion" },
        ],
      },
      {
        type: "open-response",
        title: "Annotated Essay",
        instruction:
          "Take your completed essay draft. Write annotations in the margin identifying: the hook, thesis, TEEL components in each paragraph, persuasive techniques used, counter-argument, rebuttal, and call to action. Then write a reflection paragraph below.",
        parentTip:
          "This annotation task makes the essay's architecture visible. If a section is hard to annotate, it may need strengthening. The inability to label a part often reveals a structural gap.",
        prompts: [
          {
            text: "(Complete annotations on your essay draft, then answer here)\n\nReflection: What structural strengths does your essay have? What are its weaknesses?",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Final Polished Essay",
        instruction:
          "Write a final, polished version of your essay incorporating all revisions. Aim for clarity, evidence quality, and persuasive impact. Use a word processor if available.",
        parentTip:
          "The final essay should feel genuinely finished — not just 'first draft plus fixes'. Read it aloud together as the final quality check.",
        prompts: [
          {
            text: "Final word count target: 350–500 words\n\nWrite your essay on a separate page. Attach it here or record your word count and confirm it is complete:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: What Would You Fight For?",
        content:
          "The most powerful persuasive writing throughout history has come from people who genuinely believed in what they were arguing. Martin Luther King's 'Letter from Birmingham Jail'. Malala Yousafzai's address to the UN. Greta Thunberg's climate speeches. All of them used structure, evidence, and rhetoric — but none of them would have been powerful without genuine conviction. What do you care about enough to fight for with words? Write one sentence: 'I believe that... because...' Then ask yourself: would you be willing to write 500 words arguing this? That is your essay.",
      },
      {
        type: "open-response",
        title: "Peer Evaluation of a Classmate's Essay",
        instruction:
          "If possible, exchange your essay with another student. If working alone, evaluate your own essay as if you were seeing it for the first time. Use the criteria below.",
        parentTip:
          "Peer or self-evaluation with explicit criteria is one of the most powerful learning tools in writing. The criteria here mirror what standardised assessments look for at Year 6.",
        prompts: [
          {
            text: "Purpose and audience: Does the essay maintain a clear persuasive purpose throughout? Does it suit the audience? (1–5 rating and comment)",
            type: "lines",
            lines: 2,
          },
          {
            text: "Structure: Are the TEEL paragraphs complete? Is there a counter-argument? Does the conclusion go beyond repeating the introduction? (1–5 and comment)",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evidence quality: Is the evidence specific, relevant, and verifiable? (1–5 and comment)",
            type: "lines",
            lines: 2,
          },
          {
            text: "Language choices: Are persuasive techniques used effectively? Is the tone consistent and appropriate? (1–5 and comment)",
            type: "lines",
            lines: 2,
          },
          {
            text: "One specific thing that could be improved:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Oral Presentation of Your Essay",
        instruction:
          "Present your finished essay as a 2–3 minute oral presentation to your family. You may read it or speak from notes.",
        parentTip:
          "Encourage eye contact and deliberate pacing. Ask the audience to listen for: the hook, the strongest argument, and the call to action — then give feedback on those three elements specifically.",
        suggestions: [
          "Read or speak your essay in full to a real audience.",
          "Ask your audience: what was the strongest argument?",
          "Ask: was the call to action convincing?",
          "Ask: did the hook draw them in?",
          "Note: public speaking of persuasive content is a skill used throughout secondary school and beyond — this is real practice.",
        ],
      },

      // ── EXTENDING: Activities 59–100
      {
        type: "tip",
        title: "Tip: Rhetorical Devices That Persuade",
        content:
          "Beyond evidence and structure, persuasive writers use rhetorical devices: rhetorical questions (that make the reader agree without realising), rule of three (three parallel points feel complete and memorable), repetition (for emphasis), and direct address (using 'you' to involve the reader). Expert persuaders layer these deliberately.",
      },
      {
        type: "matching",
        title: "Match: Rhetorical Device to Example",
        instruction:
          "Match each rhetorical device to the example that best demonstrates it.",
        parentTip:
          "Rhetorical device recognition is a key NAPLAN skill. Encourage your child to name the device when they spot it in their reading.",
        left: [
          "Rhetorical question",
          "Rule of three",
          "Repetition",
          "Direct address",
          "Hyperbole",
        ],
        right: [
          "You deserve better than this.",
          "We must act now, act boldly, and act together.",
          "Surely no one wants our children to suffer?",
          "Every single day, every single choice, every single vote matters.",
          "This is the most important decision in the history of our school.",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Complete the Persuasive Sentence",
        instruction:
          "Fill in the blank with an appropriate rhetorical technique to complete each persuasive sentence.",
        parentTip:
          "Writing in the style of a device is harder than recognising it. This productive activity bridges analysis and composition.",
        sentences: [
          {
            text: "Can we really afford to _____? (rhetorical question — complete the question)",
            blanks: ["[student answer varies]"],
          },
          {
            text: "This plan is safe, it is affordable, and it is _____. (rule of three — add the third point)",
            blanks: ["effective"],
          },
          {
            text: "You — yes, you — have the power to _____. (direct address — complete the call to action)",
            blanks: ["[student answer varies]"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Persuasive Technique",
        instruction:
          "Circle the name of the persuasive technique used in each sentence.",
        parentTip:
          "These sentences use techniques in combination. Encourage your child to identify more than one if they can.",
        questions: [
          {
            prompt: "Sentence: 'Isn't it time we finally did the right thing?'",
            options: ["Rhetorical question", "Anecdote", "Statistics", "Counter-argument"],
          },
          {
            prompt: "Sentence: 'Studies show 87% of students improve when given proper resources.'",
            options: ["Rule of three", "Statistics", "Repetition", "Hyperbole"],
          },
          {
            prompt: "Sentence: 'Last year, my friend could not afford school supplies. She fell behind. She felt invisible. That cannot happen again.'",
            options: ["Anecdote with repetition", "Statistics", "Rhetorical question", "Counter-argument"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Persuasive Hook",
        instruction:
          "Write three different types of hooks for the same essay topic: 'Schools should have a four-day week.' Write a rhetorical question hook, a startling fact hook, and an anecdote hook.",
        parentTip:
          "Hooks are the first thing a marker reads. Practising multiple hook types for the same topic teaches flexibility and strategic choice.",
        prompts: [
          {
            text: "Rhetorical question hook:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Startling fact hook:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Anecdote hook:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Persuasion Principles",
        instruction: "Mark each statement True or False.",
        parentTip:
          "Some of these statements address persistent myths about persuasive writing. Correcting misconceptions is as valuable as reinforcing correct understanding.",
        statements: [
          {
            text: "A counter-argument weakens your essay because it gives the opposing side attention.",
            answer: false,
          },
          {
            text: "The TEEL structure stands for Topic, Evidence, Explanation, Link.",
            answer: true,
          },
          {
            text: "A call to action tells the reader what the writer believes, not what to do.",
            answer: false,
          },
          {
            text: "Using only emotional appeals (pathos) without evidence makes an argument less credible.",
            answer: true,
          },
          {
            text: "A thesis statement should appear in every body paragraph.",
            answer: false,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Architecture of Argument",
        content:
          "Think of a persuasive essay as a building. The thesis is the foundation — everything rests on it. Each body paragraph is a load-bearing wall — remove one and the structure weakens. The counter-argument is the window — it lets in light (the other view) but also frames and limits it. The conclusion is the roof — it covers everything that came before. And the hook? The hook is the front door. It decides whether anyone enters at all. You are now an architect of argument. Design well.",
      },
      {
        type: "multiple-choice",
        title: "Selecting the Strongest Evidence",
        instruction:
          "For each essay claim, choose the strongest piece of evidence to support it.",
        parentTip:
          "Evidence selection is a critical thinking skill that extends beyond English. Encourage your child to explain why rejected options are weaker.",
        questions: [
          {
            prompt: "Claim: 'Physical activity improves academic performance.'",
            options: [
              "My friend feels better after sport.",
              "A 2023 study of 10,000 students found those with daily physical activity scored 12% higher on literacy tests.",
              "Sport is fun and good for you.",
              "Many people think exercise is important.",
            ],
            answer:
              "A 2023 study of 10,000 students found those with daily physical activity scored 12% higher on literacy tests.",
          },
          {
            prompt: "Claim: 'Plastic bags cause significant environmental harm.'",
            options: [
              "I saw a plastic bag on the beach once.",
              "Everyone knows plastic is bad.",
              "Marine biologists estimate that plastic kills over one million seabirds annually.",
              "Some people think plastic is a problem.",
            ],
            answer:
              "Marine biologists estimate that plastic kills over one million seabirds annually.",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Introduction Components in Order",
        instruction:
          "Sort these components of a persuasive essay introduction into the correct order.",
        parentTip:
          "Essay structure awareness is a metacognitive skill. This activity makes implicit knowledge explicit.",
        columns: ["1st", "2nd", "3rd", "4th"],
        items: [
          { label: "Background context on the issue" },
          { label: "Hook sentence to engage the reader" },
          { label: "Brief outline of the main arguments" },
          { label: "Clear thesis statement" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Complete the TEEL Paragraph",
        instruction:
          "Fill in the blanks to complete this TEEL paragraph about school uniforms.",
        parentTip:
          "Completing a partially written paragraph is a scaffold for independent writing. The structure becomes internalised through practice.",
        sentences: [
          {
            text: "Topic sentence: School uniforms _____ inequality among students.",
            blanks: ["reduce visible"],
          },
          {
            text: "Evidence: A survey by the Australian Institute found that _____ of students reported feeling less judged about clothing when wearing uniforms.",
            blanks: ["74%"],
          },
          {
            text: "Explanation: This shows that uniforms create a _____ that focuses attention on learning rather than fashion.",
            blanks: ["level playing field"],
          },
          {
            text: "Link: Therefore, school uniforms contribute to a more _____ learning environment.",
            blanks: ["equitable"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: Your Counter-Argument and Rebuttal",
        instruction:
          "For your essay topic, write a counter-argument paragraph that includes: acknowledgement of the opposing view, a concession (something you grant to the opposition), and a strong rebuttal using evidence.",
        parentTip:
          "Counter-argument writing is one of the most cognitively demanding writing tasks. It requires understanding the opposing position well enough to articulate it fairly before refuting it.",
        prompts: [
          {
            text: "My topic and thesis:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Counter-argument paragraph (acknowledgement, concession, rebuttal with evidence):",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Conclusions That Do More Than Summarise",
        content:
          "Weak conclusions just repeat what was said. Strong conclusions: restate the thesis in new language, briefly echo the main arguments without restating them fully, issue a call to action (what should the reader DO?), and end with a memorable final sentence — often a rhetorical question or a powerful image. The last sentence is the one readers remember.",
      },
      {
        type: "open-response",
        title: "Write: A Powerful Conclusion",
        instruction:
          "Write a conclusion for your persuasive essay. Include: a restated thesis (in different words), a brief echo of your main arguments, a call to action, and a final memorable sentence.",
        parentTip:
          "The conclusion is often underdeveloped in student essays. A strong, original conclusion lifts the overall mark significantly.",
        prompts: [
          {
            text: "My conclusion (restated thesis, echo of arguments, call to action, memorable final sentence):",
            type: "box",
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Persuasive Language Function",
        instruction:
          "Match each persuasive sentence to the technique or function it demonstrates.",
        parentTip:
          "This activity reinforces metalanguage — the language we use to talk about language. Using terms like ethos, logos, and pathos gives writers a shared vocabulary.",
        left: [
          "According to marine scientist Dr Leigh Fletcher...",
          "If we do not act now, future generations will pay the price.",
          "Three-quarters of Australians agree: this must change.",
          "Surely you want your children to grow up in a clean world?",
          "First, we must acknowledge the opposing view...",
        ],
        right: [
          "Logos — statistical appeal",
          "Pathos — emotional appeal to the future",
          "Ethos — authority/expert citation",
          "Rhetorical question — direct reader engagement",
          "Counter-argument acknowledgement",
        ],
      },
      {
        type: "true-false",
        title: "True or False: Evaluating Persuasive Texts",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "A persuasive text that uses only statistics is always more credible than one that uses anecdotes.",
            answer: false,
          },
          {
            text: "A strong rebuttal concedes something to the opposing view before refuting it.",
            answer: true,
          },
          {
            text: "The word 'Furthermore' signals a counter-argument.",
            answer: false,
          },
          {
            text: "A call to action tells the reader what specific step they should take.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Peer Review: Apply the Marking Criteria",
        instruction:
          "Using the criteria below, evaluate a persuasive essay — either your own or a model essay. Give a rating (1–5) and one specific piece of feedback for each criterion.",
        parentTip:
          "Peer review and self-review using explicit criteria are among the highest-yield activities for writing development. This mirrors NAPLAN marking descriptors.",
        prompts: [
          {
            text: "Hook and introduction (1–5): rating and specific feedback:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Thesis clarity (1–5): rating and specific feedback:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evidence quality and explanation (1–5): rating and specific feedback:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Counter-argument and rebuttal (1–5): rating and specific feedback:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Conclusion and call to action (1–5): rating and specific feedback:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "TEEL: Identify the Paragraph Component",
        instruction:
          "Read each sentence from a persuasive paragraph. Identify which part of the TEEL structure it represents.",
        parentTip:
          "Breaking a paragraph into its components makes structure visible. This is particularly useful for students who write intuitively but cannot yet explain their choices.",
        questions: [
          {
            prompt:
              "Sentence: 'Reducing plastic packaging would significantly lower the amount of waste entering our waterways.'",
            options: ["Topic sentence", "Evidence", "Explanation", "Link"],
            answer: "Topic sentence",
          },
          {
            prompt:
              "Sentence: 'A 2022 government report found that 40% of ocean plastic originates from single-use packaging.'",
            options: ["Topic sentence", "Evidence", "Explanation", "Link"],
            answer: "Evidence",
          },
          {
            prompt:
              "Sentence: 'This demonstrates that packaging waste is not a minor issue but a systemic crisis requiring policy intervention.'",
            options: ["Topic sentence", "Evidence", "Explanation", "Link"],
            answer: "Explanation",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Evidence from Strongest to Weakest",
        instruction:
          "Sort these four types of evidence from most to least convincing in a formal persuasive essay.",
        parentTip:
          "Evidence hierarchies are contested, and discussing the ranking is more valuable than the ranking itself. Context matters — anecdote can be highly persuasive in the right essay.",
        columns: ["Most Convincing", "Second", "Third", "Least Convincing"],
        items: [
          { label: "Peer-reviewed research study with sample size" },
          { label: "Expert opinion from a named authority" },
          { label: "A compelling personal anecdote" },
          { label: "A general claim without a source" },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Linking Words and Persuasive Connectives",
        instruction:
          "Fill in the blank with the most appropriate persuasive connective from the choices provided.",
        parentTip:
          "Connectives and discourse markers create cohesion and signal argument structure. Using them correctly is a marker of sophisticated academic writing.",
        sentences: [
          {
            text: "My first argument is that uniforms reduce cost. _____, they also reduce social comparison.",
            blanks: ["Furthermore"],
          },
          {
            text: "Some argue that homework is beneficial. _____, research consistently shows it has diminishing returns beyond one hour.",
            blanks: ["However"],
          },
          {
            text: "The evidence is compelling. _____, it is clear that change is necessary.",
            blanks: ["Therefore"],
          },
          {
            text: "While it is true that sport takes time from study, _____ exercise is proven to improve concentration.",
            blanks: ["conversely"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Improve This Weak Paragraph",
        instruction:
          "Read this weak persuasive paragraph. Identify what is missing from the TEEL structure and rewrite it to be stronger, adding evidence, explanation, and a link.",
        parentTip:
          "Revision tasks develop editing skills alongside writing skills. Encourage your child to name the missing TEEL components before rewriting.",
        prompts: [
          {
            text: "Weak paragraph: 'Pets are good for mental health. Lots of people have pets and feel better. So everyone should be allowed to have pets at school.' What is missing?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Rewrite the paragraph with a clear TEEL structure, including specific evidence and explanation:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Plan Your Full Essay",
        instruction:
          "Using the planning template below, plan a complete five-paragraph persuasive essay on a topic of your choice. Include hook type, thesis, three body paragraph topics with evidence, counter-argument, and call to action.",
        parentTip:
          "Planning before writing is a habit that separates proficient writers from skilled ones. Reward thorough planning as highly as finished writing.",
        prompts: [
          {
            text: "Essay topic and thesis statement:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Body paragraph 1 — topic and evidence:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Body paragraph 2 — topic and evidence:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Body paragraph 3 — topic and evidence:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Counter-argument and rebuttal plan:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Call to action (what should the reader do?):",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: The Difference Between Fact, Opinion, and Judgement",
        content:
          "Good persuasive writing distinguishes three types of claim: Facts (verifiable — can be checked), Opinions (personal views — subject to disagreement), and Judgements (reasoned evaluations combining fact and opinion). The strongest arguments make their judgements explicit and support them with facts — they do not confuse opinion for fact.",
      },
      {
        type: "sorting",
        title: "Sort: Fact, Opinion, or Judgement?",
        instruction:
          "Sort each claim into the correct category: Fact, Opinion, or Judgement.",
        parentTip:
          "This activity develops critical thinking by making the epistemological status of claims visible. It is particularly valuable for argument evaluation.",
        columns: ["Fact", "Opinion", "Judgement"],
        items: [
          { label: "Australia has over 500 Aboriginal language groups." },
          { label: "Aboriginal culture is the most fascinating in the world." },
          { label: "Governments have a duty to preserve endangered languages." },
          { label: "The Great Barrier Reef spans 2,300 kilometres." },
          { label: "Climate change is the greatest challenge of our time." },
          { label: "Immediate action is needed to protect the reef from bleaching." },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify the Logical Fallacy",
        instruction:
          "Each argument below contains a logical fallacy. Choose the name of the fallacy.",
        parentTip:
          "Recognising logical fallacies is an advanced critical thinking skill. Introduce the names as useful tools, not obstacles. Year 6 students can learn three to five common ones.",
        questions: [
          {
            prompt: "'Everyone is doing it, so it must be right.'",
            options: ["Straw man", "Ad hominem", "Bandwagon fallacy", "False dichotomy"],
            answer: "Bandwagon fallacy",
          },
          {
            prompt: "'Either you support our school's sport program, or you don't care about student wellbeing.'",
            options: ["Slippery slope", "False dichotomy", "Ad hominem", "Circular reasoning"],
            answer: "False dichotomy",
          },
          {
            prompt: "'If we let students choose their own topics, next they will want to choose their own teachers, and soon there will be no education at all.'",
            options: ["Slippery slope", "Bandwagon fallacy", "Straw man", "Ad hominem"],
            answer: "Slippery slope",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Complete TEEL Paragraph",
        instruction:
          "Write a complete TEEL paragraph for one of your planned body arguments. Label each sentence with its TEEL function in brackets after the sentence.",
        parentTip:
          "Labelling TEEL components as you write is a scaffold that should be gradually removed as fluency increases. At Year 6, using it once or twice is appropriate.",
        prompts: [
          {
            text: "My complete TEEL paragraph with component labels [T], [E], [E], [L]:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Persuasion Across Text Types",
        instruction:
          "Persuasion appears in many text types beyond the formal essay: letters to the editor, speeches, advertisements, social media posts. Choose one of these text types and write a 4–5 sentence persuasive piece on the same topic as your essay.",
        parentTip:
          "Understanding how purpose and audience shape text type is a core ACARA outcome. This activity develops textual flexibility.",
        prompts: [
          {
            text: "Text type chosen and how it differs from an essay:",
            type: "lines",
            lines: 2,
          },
          {
            text: "My persuasive piece in the chosen text type:",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Advanced Persuasion",
        instruction: "Mark each statement True or False.",
        parentTip:
          "The final true-false for this section tests synthesis understanding. Discuss any incorrect answers using the reasoning behind the correct answer.",
        statements: [
          {
            text: "Pathos alone (emotional appeal) is sufficient to write a credible persuasive essay.",
            answer: false,
          },
          {
            text: "A logical fallacy is an error in reasoning that makes an argument weaker.",
            answer: true,
          },
          {
            text: "The call to action should appear at the end of each body paragraph.",
            answer: false,
          },
          {
            text: "Using hedging language like 'perhaps' or 'it seems' always weakens a persuasive text.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Final Reflection: Your Persuasive Voice",
        instruction:
          "Write a reflection (5–7 sentences) on your development as a persuasive writer during this unit. What is your strongest skill? What will you practise further?",
        parentTip:
          "Self-assessment and goal-setting are metacognitive practices. This reflection is as important as any content activity in building a student who knows how to improve.",
        prompts: [
          {
            text: "My reflection on persuasive writing development and my next goal:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Transitions Between Arguments",
        instruction:
          "Fill in the blank with the best transition word or phrase for each sentence.",
        parentTip:
          "Transitions create cohesion between paragraphs and signal argument structure to the reader. Using a range of transitions is a marker of mature academic writing.",
        sentences: [
          {
            text: "My first argument concerns cost. _____, there is also the issue of accessibility.",
            blanks: ["In addition"],
          },
          {
            text: "Some argue that school holidays are already sufficient. _____, recent research shows students experience significant learning loss over long breaks.",
            blanks: ["However"],
          },
          {
            text: "The evidence clearly shows that exercise benefits learning. _____, schools should prioritise daily physical activity.",
            blanks: ["Therefore"],
          },
          {
            text: "While the economic argument is compelling, _____ the environmental cost must also be considered.",
            blanks: ["equally"],
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Reviewing Your Own Work",
        instruction: "These statements are a self-assessment guide for your persuasive essay. Mark each True or False as you check your draft.",
        parentTip:
          "Using explicit criteria for self-assessment builds editing skills. Treat any False answers as immediate revision targets.",
        statements: [
          {
            text: "My introduction has a hook that draws the reader in.",
            answer: true,
          },
          {
            text: "My thesis clearly states my position.",
            answer: true,
          },
          {
            text: "Each body paragraph begins with a topic sentence.",
            answer: true,
          },
          {
            text: "I have included a counter-argument and rebuttal.",
            answer: true,
          },
          {
            text: "My conclusion contains a clear call to action.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Letter to the Editor",
        instruction:
          "Write a letter to the editor of a newspaper about an issue that matters to you. A letter to the editor is a short, punchy persuasive text (3–4 paragraphs) that must make its point concisely. State your position clearly, give your strongest single argument with evidence, and end with a call to action.",
        parentTip:
          "Letters to the editor are a real-world persuasive text type. Writing one helps students understand how argument structure adapts to context, purpose, and word-count constraints.",
        prompts: [
          {
            text: "My letter to the editor:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Persuasion in Different Contexts",
        instruction:
          "Different persuasive contexts require different approaches. Choose the best answer.",
        parentTip:
          "Context-sensitivity — understanding that purpose and audience shape text choices — is a core ACARA outcome from Year 3 onwards.",
        questions: [
          {
            prompt: "A speech to classmates about a school rule should use:",
            options: [
              "Highly technical academic language",
              "Language, examples, and evidence that will resonate with students of the same age",
              "The same language as a formal legal document",
              "Only statistics and no anecdotes",
            ],
            answer:
              "Language, examples, and evidence that will resonate with students of the same age",
          },
          {
            prompt: "A submission to a government inquiry should use:",
            options: [
              "Casual, friendly language",
              "Emotional appeals only",
              "Formal register, clear evidence, and a logical structure",
              "Personal opinions without supporting evidence",
            ],
            answer: "Formal register, clear evidence, and a logical structure",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Persuasive Text Types by Formality",
        instruction:
          "Sort these persuasive text types from most formal to least formal.",
        parentTip:
          "Understanding the formality spectrum of persuasive texts helps students choose appropriate register for their purpose and audience.",
        columns: ["Most Formal", "Formal", "Semi-formal", "Informal"],
        items: [
          { label: "A submission to a government inquiry" },
          { label: "A persuasive essay for school" },
          { label: "A letter to the editor" },
          { label: "A social media post arguing a point" },
        ],
      },
      {
        type: "open-response",
        title: "Persuasive Speech: Opening Statement",
        instruction:
          "Write the opening 30-second statement of a persuasive speech on a topic of your choice. You have exactly 80 words. Make every word count: include a hook, establish your position, and signal your main arguments.",
        parentTip:
          "Word-count constraints force precision and prioritisation — the same skills needed in timed writing assessments. Counting words is itself a discipline worth developing.",
        prompts: [
          {
            text: "Topic and position:",
            type: "lines",
            lines: 1,
          },
          {
            text: "My 80-word opening statement:",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Debate: Take the Opposing Side",
        instruction:
          "Choose a topic you feel strongly about. For 10 minutes, argue the other side as convincingly as possible with a family member. The goal is not to win but to understand the opposing view from the inside.",
        parentTip:
          "Arguing the opposing view is one of the most powerful tools for strengthening your own argument. It forces genuine engagement with counter-arguments rather than dismissal.",
        suggestions: [
          "Choose a topic you have a strong opinion about.",
          "For 10 minutes, argue the other side as if you believe it.",
          "After, discuss: what was the strongest point on the other side?",
          "How could you address that in your essay?",
          "This activity directly improves counter-argument and rebuttal writing.",
        ],
      },
      {
        type: "open-response",
        title: "Write: A Persuasive Advertisement",
        instruction:
          "Write a 5-sentence advertisement for a real or imaginary product that uses three different persuasive techniques (e.g. emotional appeal, statistics, direct address). After writing, label each technique.",
        parentTip:
          "Advertising is the most ubiquitous form of persuasion in everyday life. Understanding how it works — and practising writing it — develops both critical media literacy and persuasive writing skill.",
        prompts: [
          {
            text: "My persuasive advertisement:",
            type: "box",
          },
          {
            text: "Techniques labelled and where they appear:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: The Revision Mindset",
        content:
          "Professional writers do not write well — they revise well. The first draft is never the final draft. When revising a persuasive essay, ask three questions: (1) Is my thesis strong and clear? (2) Is every piece of evidence as specific and credible as possible? (3) Does my conclusion leave the reader with something to do, think, or feel? If the answer to any of these is no, revise until it is yes.",
      },
      {
        type: "open-response",
        title: "Revise: Strengthen Your Thesis",
        instruction:
          "Write your current essay thesis statement, then evaluate it: is it specific, arguable, and clear? Rewrite it at least once to make it stronger.",
        parentTip:
          "Iterative thesis revision is a graduate-level writing skill that can be introduced effectively at Year 6. A student who learns to evaluate and strengthen their own thesis is a genuinely sophisticated writer.",
        prompts: [
          {
            text: "My current thesis statement:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Is it specific? Arguable? Clear? (evaluate):",
            type: "lines",
            lines: 2,
          },
          {
            text: "My revised, stronger thesis statement:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Final Essay Assessment Checklist",
        instruction:
          "Use this multiple-choice final assessment to confirm your mastery of persuasive essay structure.",
        questions: [
          {
            prompt: "Which component belongs at the END of the introduction paragraph?",
            options: ["The first piece of evidence", "The thesis statement", "The counter-argument", "The call to action"],
            answer: "The thesis statement",
          },
          {
            prompt: "What is the function of the rebuttal in a counter-argument paragraph?",
            options: [
              "To acknowledge the opposing view without responding to it",
              "To prove the counter-argument is completely wrong",
              "To acknowledge the opposing view and then explain why your position is still stronger",
              "To introduce a new argument",
            ],
            answer:
              "To acknowledge the opposing view and then explain why your position is still stronger",
          },
          {
            prompt: "Which best describes what a call to action does?",
            options: [
              "Restates the thesis using the exact same words",
              "Introduces new evidence in the conclusion",
              "Tells the reader what specific action they should take as a result of the argument",
              "Summarises each body paragraph in detail",
            ],
            answer:
              "Tells the reader what specific action they should take as a result of the argument",
          },
        ],
      },
      {
        type: "open-response",
        title: "Essay Exchange: Read and Respond",
        instruction:
          "Share your persuasive essay with a family member. Ask them to read it and give you three pieces of feedback: (1) what was the most convincing part, (2) what was one question the essay left unanswered, and (3) was the call to action compelling? Record their responses.",
        parentTip:
          "Feedback from a real reader transforms a private writing exercise into a communication event. The responses will be more useful than any marking rubric.",
        prompts: [
          {
            text: "Most convincing part (reader response):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Question the essay left unanswered:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Was the call to action compelling? Reader's view:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Revision Plan",
        instruction:
          "Based on the feedback you received (from self-review, peer review, or a family reader), write a specific revision plan for your essay: list three concrete changes you will make and why each will strengthen the essay.",
        parentTip:
          "A revision plan is more effective than unstructured editing. Specifying what to change and why develops editorial thinking that applies to all future writing.",
        prompts: [
          {
            text: "Revision 1 (what I will change and why it will improve the essay):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Revision 2 (what I will change and why it will improve the essay):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Revision 3 (what I will change and why it will improve the essay):",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Persuasive Purpose to Text Feature",
        instruction:
          "Match each persuasive purpose to the text feature most associated with it.",
        parentTip:
          "Understanding how purpose and feature connect builds flexible, deliberate writing. This is a consolidating activity that synthesises the full range of persuasive skills.",
        left: [
          "To establish credibility with the audience",
          "To move the reader emotionally",
          "To provide logical backing for a claim",
          "To acknowledge and dismiss opposing views",
          "To compel the reader to act",
        ],
        right: [
          "A call to action",
          "Evidence with a credible source cited",
          "An emotional anecdote or vivid description",
          "A counter-argument and rebuttal paragraph",
          "Statistics and expert quotations",
        ],
      },
      {
        type: "spark",
        title: "Spark: Your Voice Matters",
        content:
          "Every persuasive essay, every letter to the editor, every speech that changed a law or a mind began as one person deciding that their argument was worth making and their voice was worth using. You now have the skills: a structure that works, the knowledge of evidence quality, an understanding of counter-arguments, and the ability to use rhetoric deliberately. The only thing left is the conviction that what you have to say matters. It does. Write something you believe in.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
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
        type: "true-false",
        title: "Literary Technique Basics — True or False?",
        instruction:
          "Decide whether each statement is TRUE or FALSE.",
        parentTip:
          "Work through the first two together. Literary technique vocabulary is best learned through examples rather than definitions alone.",
        statements: [
          {
            text: "A simile must use the words 'like' or 'as'.",
            answer: true,
          },
          {
            text: "'The classroom was a zoo' is an example of a simile.",
            answer: false,
          },
          {
            text: "Personification gives human qualities to non-human things.",
            answer: true,
          },
          {
            text: "Alliteration is the repetition of vowel sounds.",
            answer: false,
          },
          {
            text: "Imagery includes language that appeals to any of the five senses.",
            answer: true,
          },
          {
            text: "Tone refers to the punctuation pattern in a sentence.",
            answer: false,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Is It a Simile or Metaphor?",
        instruction:
          "Circle whether each example is a SIMILE or METAPHOR.",
        parentTip:
          "The key question is: does it say 'like' or 'as'? If yes, it is a simile. If it says one thing IS another (without 'like' or 'as'), it is a metaphor.",
        questions: [
          {
            prompt: "'Her laughter was music to his ears.'",
            options: ["Simile", "Metaphor"],
          },
          {
            prompt: "'He ran like the wind.'",
            options: ["Simile", "Metaphor"],
          },
          {
            prompt: "'The city is a sleeping giant at midnight.'",
            options: ["Simile", "Metaphor"],
          },
          {
            prompt: "'Her eyes were as cold as ice.'",
            options: ["Simile", "Metaphor"],
          },
          {
            prompt: "'Life is a journey without a map.'",
            options: ["Simile", "Metaphor"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify the Literary Technique",
        instruction:
          "Identify the primary literary technique used in each example.",
        questions: [
          {
            prompt: "'The wind whispered secrets through the trees.'",
            options: ["Alliteration", "Simile", "Personification", "Imagery"],
            answer: "Personification",
          },
          {
            prompt: "'Seven silver swans swam silently southward.'",
            options: [
              "Personification",
              "Alliteration",
              "Metaphor",
              "Onomatopoeia",
            ],
            answer: "Alliteration",
          },
          {
            prompt: "'The smell of baking bread, the crackle of a fire, the warmth of a wool blanket.'",
            options: [
              "Metaphor",
              "Alliteration",
              "Sensory imagery",
              "Personification",
            ],
            answer: "Sensory imagery",
          },
          {
            prompt: "'She was a lighthouse in the storm.'",
            options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
            answer: "Metaphor",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Name the Technique",
        instruction:
          "Fill in the blank with the correct literary technique: simile, metaphor, personification, alliteration, or onomatopoeia.",
        sentences: [
          {
            text: "'The brave bear bounded boldly through the bush.' — This is ___ because the same consonant sound begins nearby words.",
            blanks: ["alliteration"],
          },
          {
            text: "'The thunder grumbled overhead.' — This is ___ because weather is given a human quality.",
            blanks: ["personification"],
          },
          {
            text: "'His guilt was a stone he could not put down.' — This is a ___ because guilt is described as if it were a stone.",
            blanks: ["metaphor"],
          },
          {
            text: "'The bees buzzed and hummed around the hive.' — The words 'buzzed' and 'hummed' are examples of ___.",
            blanks: ["onomatopoeia"],
          },
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
        type: "sorting",
        title: "Sort by Tone",
        instruction:
          "Sort each extract into the column that best describes its overall tone.",
        parentTip:
          "Tone is the author's attitude. Read each extract aloud — the tone is often easier to hear than to analyse visually. Ask: what emotion does this create in you as a reader?",
        columns: ["Tense / Menacing", "Joyful / Celebratory", "Melancholy / Sad", "Formal / Objective"],
        items: [
          { label: "'She skipped down the laneway, arms wide, laughing at nothing in particular.'" },
          { label: "'Something watched from behind the trees. He could feel it.'" },
          { label: "'The mean annual rainfall in this region is 487mm, distributed unevenly across seasons.'" },
          { label: "'He had not thought about her in years. Now, in this empty house, she was everywhere.'" },
          { label: "'The door opened just a crack. Just enough.'" },
          { label: "'The whole school erupted when the final siren sounded.'" },
        ],
      },
      {
        type: "matching",
        title: "Match Technique to Its Effect",
        instruction:
          "Draw a line to match each technique to its most common effect on a reader.",
        parentTip:
          "Effects are not fixed — a good technique can achieve many things. Encourage your child to see these as tendencies, not rules.",
        left: [
          "Short, sharp sentences",
          "Long, flowing sentences",
          "Alliteration",
          "Simile",
          "Personification",
          "Rhetorical question",
        ],
        right: [
          "Slows the reader, creates atmosphere or reflection",
          "Helps readers visualise through a familiar comparison",
          "Creates urgency, tension, or impact",
          "Engages the reader by making them feel addressed",
          "Creates rhythm and draws attention to specific words",
          "Creates emotional connection to non-human things",
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
      {
        type: "fill-in-blank",
        title: "Extend the Effect Sentence",
        instruction:
          "Each sentence names a technique and quotes from the text. Fill in the blank to explain the effect on the reader. Aim for specificity — avoid 'it makes it more interesting'.",
        sentences: [
          {
            text: "The author uses personification in 'the wind howled', which creates the effect of ___.",
            blanks: ["making the storm feel aggressive and threatening, as if nature itself is attacking"],
          },
          {
            text: "The simile 'like a wounded animal' creates the effect of ___.",
            blanks: ["making the wind sound painful and desperate, building the reader's anxiety"],
          },
          {
            text: "The metaphor 'a fragile heartbeat of light' creates the effect of ___.",
            blanks: ["making the lamp seem alive and precarious, suggesting the characters are vulnerable"],
          },
        ],
      },
      {
        type: "tip",
        title: "Key Concept: Technique — Quote — Effect",
        content:
          "The three-part Technique–Quote–Effect formula is the foundation of literary analysis at Year 6 and beyond. Each part has a specific job: Technique (name what the author is doing), Quote (show where they do it — always use quotation marks), Effect (explain what it DOES for the reader — not just 'it makes it more vivid' but 'it creates a sense of... / positions the reader to feel... / reinforces the idea that...'). The Effect section is always the hardest and most important part.",
      },
      {
        type: "multiple-choice",
        title: "Choose the Best Effect Analysis",
        instruction:
          "Read each example of technique identification and choose the BEST effect explanation.",
        questions: [
          {
            prompt:
              "Technique: Simile. Quote: 'She moved like a shadow.'\nWhich is the best effect explanation?",
            options: [
              "It makes the sentence more interesting.",
              "It helps the reader picture her.",
              "It creates an impression of silent, effortless movement, suggesting secrecy or danger.",
              "The author uses a simile here.",
            ],
            answer:
              "It creates an impression of silent, effortless movement, suggesting secrecy or danger.",
          },
          {
            prompt:
              "Technique: Short sentence. Quote: 'He stopped.'\nWhich is the best effect explanation?",
            options: [
              "It's a short sentence which creates drama.",
              "The abrupt pause mimics the character's sudden halt, building tension for the reader.",
              "It makes the reader read faster.",
              "It describes what the character does.",
            ],
            answer:
              "The abrupt pause mimics the character's sudden halt, building tension for the reader.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Slow Reading — Find the Techniques",
        instruction:
          "Choose a page from a book you are currently reading. Read it slowly and list every literary technique you can find. Record the quote and identify the technique.",
        parentTip:
          "Sit together for this activity. Read the page aloud, slowly. Encourage your child to pause whenever something feels particularly vivid or unusual — that is usually a technique at work.",
        prompts: [
          {
            text: "Book title and page: _______________________________________\n\nTechnique 1 — Quote: ______________________  Technique: _______",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technique 2 — Quote: ______________________  Technique: _______",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technique 3 — Quote: ______________________  Technique: _______",
            type: "lines",
            lines: 2,
          },
          {
            text: "What is the overall tone of this page, and which technique most strongly creates it?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Literary Techniques by Category",
        instruction:
          "Sort each technique into the correct category.",
        columns: ["Figurative Language", "Sound Device", "Structural Choice"],
        items: [
          { label: "Simile" },
          { label: "Alliteration" },
          { label: "Short sentences for impact" },
          { label: "Metaphor" },
          { label: "Onomatopoeia" },
          { label: "Repetition for emphasis" },
          { label: "Personification" },
          { label: "Assonance (repetition of vowel sounds)" },
          { label: "Hyperbole" },
          { label: "Paragraph length variation" },
        ],
      },
      {
        type: "home-activity",
        title: "Author's Toolbox Hunt",
        instruction:
          "Choose a page from any book in your home and find one example of each technique listed. This is a slow-reading detective exercise.",
        parentTip:
          "Do this together as a game — who can find the example first? Picture books, novels, and poetry collections all work for this activity.",
        suggestions: [
          "Find one simile.",
          "Find one metaphor.",
          "Find one example of personification.",
          "Find one example of alliteration.",
          "Find one use of a short sentence for impact.",
          "Bonus: find one example of sensory imagery that is NOT about sight.",
        ],
      },
      {
        type: "tip",
        title: "Writing Tip: Naming the Tone Precisely",
        content:
          "Identifying tone is one of the trickiest tasks in literary analysis because 'tone' describes the author's attitude — and attitudes are complex. Avoid generic words like 'sad', 'happy', or 'scary'. Instead, reach for more precise descriptors: melancholic, unsettling, bittersweet, ironic, urgent, wistful, ominous, defiant, tender, clinical. The more precise your tone word, the more specific and insightful your analysis will be. Keep a list of tone words in your reading journal.",
      },
      {
        type: "open-response",
        title: "Analyse an Author's Tone",
        instruction:
          "Read the extract. Identify the tone and explain how three specific word choices create it.",
        prompts: [
          {
            text: "Extract: 'The old playground stood empty now, its swings hanging still in the grey afternoon. Paint peeled from the wooden horse. The roundabout had stopped years ago, and no one had thought to fix it.'\n\nOverall tone (use a precise tone word): ___________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Word/phrase 1: ________________  How it creates the tone: ________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Word/phrase 2: ________________  How it creates the tone: ________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Word/phrase 3: ________________  How it creates the tone: ________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Tone Word Match",
        instruction:
          "Choose the most precise tone word for each extract.",
        questions: [
          {
            prompt:
              "'He knew he would never see her again. The letter sat unopened on the table. Outside, rain tapped gently on the glass.'",
            options: ["Terrifying", "Joyful", "Melancholic", "Angry"],
            answer: "Melancholic",
          },
          {
            prompt:
              "'This is not a request. This is not a suggestion. This is a warning. Act now, or face the consequences.'",
            options: ["Playful", "Urgent and defiant", "Melancholic", "Calm"],
            answer: "Urgent and defiant",
          },
          {
            prompt:
              "'The puppy bounded into the room, knocked over the vase, tripped on the rug, and looked up at its owner with absolute, unashamed delight.'",
            options: ["Tense", "Ironic", "Warm and humorous", "Formal"],
            answer: "Warm and humorous",
          },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Examples",
        instruction:
          "Write your own original example of each technique listed. Make each one vivid and specific.",
        parentTip:
          "Writing your own examples is one of the most effective ways to truly understand a technique. Share examples aloud — the weak ones usually sound weak when spoken.",
        prompts: [
          {
            text: "A simile about something in nature: ___________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "A metaphor for a feeling (happiness, fear, grief, excitement): _______________",
            type: "lines",
            lines: 1,
          },
          {
            text: "A personification of a piece of technology or furniture: ____________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "An alliterative sentence about an animal: ________________________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Difference Between Seeing and Noticing",
        content:
          "Every day you look at thousands of things. You see a sky, a street, a cup of tea. But how often do you truly NOTICE? Authors are people who notice — who stop and ask 'what does this actually look like, sound like, feel like, and what does it remind me of?' This noticing habit is the foundation of all good literary technique. Choose one ordinary object in your home — a kettle, a book, a shoe — and spend two full minutes truly noticing it. Then write three sentences using three different literary techniques to describe it.",
      },
      {
        type: "true-false",
        title: "Extended Literary Technique Facts",
        instruction:
          "Read each statement and decide TRUE or FALSE.",
        statements: [
          {
            text: "Hyperbole is a deliberate exaggeration used for effect, not meant to be taken literally.",
            answer: true,
          },
          {
            text: "'I have a million things to do today' is an example of personification.",
            answer: false,
          },
          {
            text: "Onomatopoeia is a technique where words imitate the sounds they describe.",
            answer: true,
          },
          {
            text: "An author can only use one literary technique per sentence.",
            answer: false,
          },
          {
            text: "Foreshadowing is a technique where an author hints at what will happen later in the story.",
            answer: true,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: A Sentence That Does Everything",
        content:
          "Here is a challenge: write one single sentence that uses at least three literary techniques simultaneously. Here is an example: 'The old clock on the wall sighed its last slow tick, a tired soldier finally surrendering to silence.' This uses personification ('sighed', 'tired soldier'), metaphor ('a tired soldier'), and alliteration ('slow', 'silence'). Can you write a sentence that is as layered? Try it on your own first, then share with your parent and identify together every technique you used.",
      },

      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Analyse an Extract — Full Technique Analysis",
        instruction:
          "Read the extract carefully and complete a full analysis finding as many techniques as possible.",
        parentTip:
          "Read the extract aloud slowly before your child begins writing. Hearing it first activates different parts of reading comprehension.",
        prompts: [
          {
            text: "Extract: 'The market erupted every morning like a fever — voices clashing, colours screaming, the warm reek of fish and spice and rain-damp earth. Old women sat behind mountains of mangoes. Boys sprinted between tables like startled fish. And over it all, the sun beat and beat and beat, relentless as a drum.'\n\nList three techniques and their quotes:",
            type: "box",
          },
          {
            text: "For each technique, write one sentence explaining its effect:",
            type: "box",
          },
          {
            text: "What is the dominant tone of the extract? Which single word most strongly creates it?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "More Literary Technique Definitions",
        instruction:
          "Fill in each blank with the correct technique name.",
        sentences: [
          {
            text: "The repetition of a word or phrase at the start of consecutive sentences is called ___.",
            blanks: ["anaphora"],
          },
          {
            text: "A ___ is when a story pauses to give backstory or earlier events.",
            blanks: ["flashback"],
          },
          {
            text: "___ occurs when the meaning of a sentence is the opposite of what is literally stated.",
            blanks: ["Irony"],
          },
          {
            text: "___ refers to hints or clues about events that will happen later in the story.",
            blanks: ["Foreshadowing"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify Extended Techniques",
        instruction:
          "Identify the literary technique used in each example.",
        questions: [
          {
            prompt: "'Every morning she checked the door. Every morning it was locked. Every morning she walked away.'",
            options: [
              "Alliteration",
              "Anaphora (repetition at sentence starts)",
              "Hyperbole",
              "Simile",
            ],
            answer: "Anaphora (repetition at sentence starts)",
          },
          {
            prompt: "'Oh, great — another perfect day,' he muttered, staring at the flood.',",
            options: ["Simile", "Personification", "Irony / Sarcasm", "Metaphor"],
            answer: "Irony / Sarcasm",
          },
          {
            prompt:
              "'The suitcase in the corner had not been opened in twenty years. He did not know this yet — but it would change everything.'",
            options: ["Metaphor", "Foreshadowing", "Alliteration", "Simile"],
            answer: "Foreshadowing",
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse Sentence Length as a Technique",
        instruction:
          "Authors use sentence length deliberately. Read the extract. Analyse how sentence length contributes to the effect.",
        prompts: [
          {
            text: "Extract: 'She had been running for what felt like hours. The forest seemed endless, every tree the same, every shadow deeper than the last. She could hear them behind her. She stopped. Silence.'\n\nIdentify the shortest sentence in the extract:",
            type: "lines",
            lines: 1,
          },
          {
            text: "What effect does this very short sentence create? Why did the author place it at this point?",
            type: "lines",
            lines: 3,
          },
          {
            text: "How does the author use longer sentences earlier in the extract, and what does this contrast achieve?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "tip",
        title: "Craft Tip: Sentence Length Is a Technique",
        content:
          "Many students learn about figurative language but overlook the craft of sentence construction. Short sentences create tension, emphasis, and speed. Long sentences create atmosphere, movement, or complexity. One-word sentences carry maximum impact. The variation between lengths creates rhythm — the ebb and flow of the writing. When you analyse an extract, always look at sentence length variation as a deliberate authorial choice.",
      },
      {
        type: "matching",
        title: "Match Sentence Length to Its Effect",
        instruction:
          "Draw a line matching each type of sentence to its typical effect.",
        left: [
          "A long, flowing sentence with multiple clauses",
          "A sequence of short, punchy sentences",
          "A one-word or two-word sentence alone on a line",
          "Varied sentence lengths in the same paragraph",
          "An unusually long sentence followed by a short one",
        ],
        right: [
          "Maximum emphasis on the short sentence; contrast creates impact",
          "The reader feels the rhythm of natural speech; holds interest",
          "Maximum impact; creates shock or finality",
          "Creates pace and urgency; reader moves faster",
          "Creates atmosphere or a sense of movement; slows the reader",
        ],
      },
      {
        type: "open-response",
        title: "Repetition as a Technique",
        instruction:
          "Repetition can create emphasis, rhythm, and emotional intensity. Read the extract and analyse the effect of the repetition used.",
        prompts: [
          {
            text: "Extract: 'She was gone. The house was quiet. The shoes by the door were gone. The coat was gone. Everything was gone.'\n\nWhat word is repeated? How many times? ___________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "What emotion does the repetition create? Why is repeating this specific word particularly effective?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Write your own 3–4 sentence extract that uses repetition to create a strong emotional effect:",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Effect: Which Technique Creates It?",
        instruction:
          "Sort each effect into the technique most likely to create it.",
        parentTip:
          "Multiple techniques can create any given effect — encourage your child to think about which technique is the most direct route to each effect.",
        columns: [
          "Simile / Metaphor",
          "Personification",
          "Alliteration / Sound Device",
          "Short Sentences / Structure",
        ],
        items: [
          { label: "Creates urgency and tension" },
          { label: "Helps readers visualise through a familiar comparison" },
          { label: "Creates emotional connection with a non-human object" },
          { label: "Creates rhythm and musicality; draws attention to words" },
          { label: "Compresses a complex idea into a vivid image" },
          { label: "Makes natural forces feel threatening or intentional" },
          { label: "Creates a feeling of shock or finality" },
          { label: "Makes the writing feel alive and energetic" },
        ],
      },
      {
        type: "open-response",
        title: "Write an Extended Analytical Paragraph",
        instruction:
          "Write an extended analytical paragraph (6–8 sentences) about the following extract. Identify at least two techniques and analyse their combined effect on the reader.",
        parentTip:
          "Model the opening sentence together, then let your child continue. Encourage the use of sophisticated connectives between analytical sentences: 'Furthermore...', 'This is reinforced by...', 'Together, these techniques...'",
        prompts: [
          {
            text: "Extract: 'Dawn came like a blush across the desert. The dunes glowed. Birds — hundreds of them — rose from the tree line as if the earth itself were breathing out. Somewhere, a bell rang. Once. Then silence that felt like a held breath.'\n\nWrite your analytical paragraph:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The One Technique You Would Keep",
        content:
          "Imagine you could only ever use ONE literary technique in your writing for the rest of your life. Which would you choose and why? Discuss this with your parent. There is no right answer — but the discussion will tell you a lot about how you think about language and what you most value in writing. Then: write a paragraph using ONLY that technique (no others). What are the limitations of relying on just one tool?",
      },
      {
        type: "fill-in-blank",
        title: "Analysing Imagery — Senses",
        instruction:
          "Identify which sense each piece of imagery appeals to. Fill in: sight, sound, smell, taste, or touch.",
        sentences: [
          {
            text: "'The salt tang of the ocean hit her before she saw the water.' — appeals to ___.",
            blanks: ["smell"],
          },
          {
            text: "'The gravel crunched beneath his boots.' — appeals to ___.",
            blanks: ["sound"],
          },
          {
            text: "'The velvet seat was cool and smooth against his palms.' — appeals to ___.",
            blanks: ["touch"],
          },
          {
            text: "'The stars were spilled sugar against a black cloth.' — appeals to ___.",
            blanks: ["sight"],
          },
          {
            text: "'The medicine was bitter and thick at the back of her throat.' — appeals to ___.",
            blanks: ["taste"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Multi-Sensory Writing",
        instruction:
          "Write a 4–6 sentence description of a place you know well. Include imagery for at least three different senses. Label each sensory image in the margin.",
        parentTip:
          "Most students default to sight. Encourage at least one sound, one smell, and one texture. The non-visual senses often create the most vivid and memorable imagery.",
        prompts: [
          {
            text: "Place chosen: ________________________________________________\n\nDescription (label each sense in the margin):",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Authorial Purpose — Why Was This Technique Used?",
        instruction:
          "Choose the best explanation of WHY the author used the technique in each example.",
        questions: [
          {
            prompt:
              "Technique: Foreshadowing in an opening chapter.\nWhy do authors use foreshadowing?",
            options: [
              "To confuse the reader",
              "To create narrative tension and encourage the reader to keep reading",
              "To explain events that happened before the story",
              "To make the writing shorter",
            ],
            answer:
              "To create narrative tension and encourage the reader to keep reading",
          },
          {
            prompt:
              "Technique: Repetition of a character's name throughout a scene.\nWhy might an author do this?",
            options: [
              "They forgot they already used it",
              "To emphasise that character's importance or to create an incantatory, ritualistic rhythm",
              "To vary sentence structure",
              "It is a grammatical requirement",
            ],
            answer:
              "To emphasise that character's importance or to create an incantatory, ritualistic rhythm",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Author Spotlight",
        instruction:
          "Choose one author whose writing you admire. Read three consecutive pages of their writing and identify their 'signature' techniques — the ones they return to most often.",
        parentTip:
          "Every author has a style — a set of techniques they use more than others. Recognising style is a high-level reading skill. Discuss: what makes this author's writing feel distinctly theirs?",
        suggestions: [
          "Read three consecutive pages slowly, noting every technique you spot.",
          "Identify which technique appears most often.",
          "Find the most powerful single sentence on these pages.",
          "Discuss: what is distinctive about this author's voice?",
          "Write one sentence in this author's style — trying to imitate their most characteristic technique.",
        ],
      },

      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Consolidating Tip: The Difference Between 'What' and 'Why'",
        content:
          "The shift from Year 5 to Year 6 analysis is the shift from 'what' to 'why'. At Year 5: 'The author uses a simile here.' At Year 6: 'The author uses the simile like a wounded animal to create a sense of raw, animal pain — positioning the reader to feel visceral discomfort rather than distant observation.' The 'why' makes the difference between description and analysis. Every technique sentence you write should have a 'why' in it.",
      },
      {
        type: "open-response",
        title: "Upgrade Your Analysis",
        instruction:
          "Each sentence below identifies a technique but does not analyse the effect deeply enough. Rewrite each one with a stronger, more specific effect explanation.",
        parentTip:
          "Read the originals aloud — they sound flat. Push for the rewrite to answer: 'What does this technique MAKE the reader feel, think, or experience?'",
        prompts: [
          {
            text: "Original: 'The author uses a metaphor to describe the city.'\n\nUpgraded version:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Original: 'There is personification in this paragraph.'\n\nUpgraded version:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Original: 'The short sentence at the end creates drama.'\n\nUpgraded version:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Authors' Use of the Same Technique",
        instruction:
          "Find two different authors who use the same literary technique. Compare how each uses it and what different effects they create.",
        parentTip:
          "Comparing techniques across texts is one of the most sophisticated analysis skills. Even if the technique is the same, the effect can be radically different depending on context, word choice, and purpose.",
        prompts: [
          {
            text: "Author 1 and text: _____________________  Technique: _____________\nQuote: ___________________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Effect of Author 1's use: _______________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Author 2 and text: _____________________  Technique: _____________\nQuote: ___________________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Effect of Author 2's use: _______________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "What does the comparison reveal about the flexibility of this technique?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sorting",
        title: "Classify Techniques: Creating Character vs Creating Setting",
        instruction:
          "Sort each technique example into whether it is primarily used to create character or setting. Some may belong to both.",
        columns: [
          "Creates Character",
          "Creates Setting",
          "Both / Could Be Either",
        ],
        items: [
          { label: "'She moved like a storm — sudden, unstoppable, leaving everything changed.'" },
          { label: "'The alley was a wound between two buildings, oozing with old rain and shadow.'" },
          { label: "'He spoke in short, precise sentences, each one a closed door.'" },
          { label: "'The forest watched them with a thousand silent eyes.'" },
          { label: "'Her laugh was the sound of a music box winding down.'" },
        ],
      },
      {
        type: "open-response",
        title: "Analyse the Opening of a Novel",
        instruction:
          "Read the opening paragraph of any novel. Analyse how the author uses at least three craft techniques to establish atmosphere, character, or setting.",
        parentTip:
          "The opening of a novel is where author's craft is most deliberate — every word choice matters. Read the opening aloud together before analysis begins.",
        prompts: [
          {
            text: "Novel title and author: _________________________________________\n\nOpening paragraph (summarised or quoted):",
            type: "box",
          },
          {
            text: "Craft analysis (three techniques, quotes, and effects):",
            type: "box",
          },
          {
            text: "What atmosphere or impression does the opening create, and how do the techniques work together to build it?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "Advanced Craft Concepts — True or False?",
        instruction:
          "Read each statement about advanced craft concepts and decide TRUE or FALSE.",
        statements: [
          {
            text: "An omniscient narrator knows the thoughts of all characters.",
            answer: true,
          },
          {
            text: "First-person narration always creates more emotional intimacy than third-person.",
            answer: false,
          },
          {
            text: "Pacing refers to how fast or slow the action of a story moves.",
            answer: true,
          },
          {
            text: "A narrative hook at the beginning of a story is designed to create immediate engagement.",
            answer: true,
          },
          {
            text: "Dialogue can be used as a craft technique to reveal character without telling the reader directly.",
            answer: true,
          },
        ],
        parentTip:
          "Statement 2 is worth discussing — third-person limited (staying close to one character's perspective) can be just as intimate as first person. Can your child think of an example?",
      },
      {
        type: "open-response",
        title: "Analyse Dialogue as Craft",
        instruction:
          "Read the exchange of dialogue. Analyse what it reveals about each character without being stated directly.",
        prompts: [
          {
            text: "Dialogue:\nMother: 'You don't have to go.'\nDaughter: 'I know.' (Pause.) 'I do though.'\nMother: 'I'll drive you.'\nDaughter: 'I'll walk.'\n\nWhat does this dialogue reveal about the daughter's character WITHOUT stating it directly?",
            type: "lines",
            lines: 3,
          },
          {
            text: "What does it reveal about the relationship between mother and daughter?",
            type: "lines",
            lines: 3,
          },
          {
            text: "What craft techniques do you notice in the dialogue? (Think about: what is NOT said, sentence length, repetition)",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Narrative Perspective — Match the Term",
        instruction:
          "Fill in the blank with the correct term: first person, third person limited, third person omniscient, or unreliable narrator.",
        sentences: [
          {
            text: "The narrator knows the thoughts of ALL characters and can see events anywhere in the story. This is ___.",
            blanks: ["third person omniscient"],
          },
          {
            text: "The narrator uses 'I' and tells the story from their own perspective. This is ___.",
            blanks: ["first person"],
          },
          {
            text: "The narrator follows closely behind one character, accessing only that character's thoughts. This is ___.",
            blanks: ["third person limited"],
          },
          {
            text: "The narrator's account cannot be fully trusted — they may be mistaken, dishonest, or biased. This is an ___.",
            blanks: ["unreliable narrator"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Change the Perspective — Same Event, Different Narrator",
        instruction:
          "Write the same event from two different narrative perspectives. Notice what changes about the reader's experience.",
        parentTip:
          "This exercise reveals how profoundly perspective shapes meaning. The same event can be sympathetic, frightening, or comic depending on who is telling it.",
        prompts: [
          {
            text: "Event: A new student arrives at school for the first time.\n\nFirst person (the new student's perspective):",
            type: "box",
          },
          {
            text: "Third person limited (from a student watching from across the room):",
            type: "box",
          },
          {
            text: "What changes between the two versions? Which creates more empathy for the new student?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Author Is Always Present",
        content:
          "Whenever you read a story, a real human being is sitting just behind the words — making choices, shaping your response, deciding what to show you and what to hide. We call this the 'implied author'. Even when the narrator says 'I', the author is always there, pulling the strings. This is why we say 'the AUTHOR uses personification' rather than 'the narrator uses personification'. As you read from now on, try to feel the author's presence — the deliberate mind behind the story. What decisions did they make? What could they have done differently? And why didn't they?",
      },
      {
        type: "open-response",
        title: "Write a Scene Using Deliberate Craft",
        instruction:
          "Write a scene (6–8 sentences) that uses at least four named craft techniques deliberately. List the techniques before writing.",
        parentTip:
          "Plan the techniques before writing — this models a professional writing habit. The list becomes an intentional toolkit for the draft.",
        prompts: [
          {
            text: "Four techniques I will use: 1) _______ 2) _______ 3) _______ 4) _______\n\nScene (label each technique in the margin as you write it):",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Craft Journal — Weekly Log",
        instruction:
          "For one week, keep a craft journal. Every day, write down one example of an author's craft technique from your reading — the quote, the technique name, and one sentence on its effect.",
        parentTip:
          "The discipline of daily noticing builds the habit of close reading faster than any single exercise. Even three minutes a day over a week creates genuine skill development.",
        suggestions: [
          "Keep the journal next to your reading book.",
          "Each day: one quote, one technique name, one effect sentence.",
          "Try to vary the techniques you record across the week.",
          "At the end of the week, review: which technique appeared most often in your reading?",
          "Share your best entry with your parent.",
        ],
      },

      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Extending Tip: Reading Like a Writer",
        content:
          "There are two ways to read a text. Reading THROUGH the text: you follow the story, absorb the ideas, respond emotionally. Reading AT the text: you slow down and examine how the effect was created. Skilled literary analysis requires both — you must first respond as a reader, then interrogate as a writer. The best critics move fluidly between these two modes. As you work through the extending activities, practise switching deliberately: first, what do you FEEL? Second, HOW was that feeling created?",
      },
      {
        type: "open-response",
        title: "Full Analytical Essay — One Paragraph",
        instruction:
          "Write one fully developed analytical paragraph (8–10 sentences) about an extract from your current reading. Include: two named techniques with quotes, two effect explanations, and a linking sentence that connects the techniques to the author's overall purpose.",
        parentTip:
          "This is the most demanding writing task on the worksheet. Allow plenty of time and do not rush. If stuck, start by writing bullet points, then expand each into a full sentence.",
        prompts: [
          {
            text: "Text and page/chapter: __________________________________________\n\nAnalytical paragraph:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Assessment-Style Craft Questions",
        instruction:
          "Answer these questions as in a standardised assessment context.",
        questions: [
          {
            prompt:
              "An author uses very short, fragmented sentences in the final paragraph of a chapter. The most likely reason is:",
            options: [
              "The author ran out of ideas",
              "To create urgency and emotional impact as the scene reaches a climax",
              "To save paper",
              "Because the character is speaking slowly",
            ],
            answer:
              "To create urgency and emotional impact as the scene reaches a climax",
          },
          {
            prompt:
              "Which of these is the best description of the author's CRAFT?",
            options: [
              "The story events and characters",
              "The setting of the novel",
              "The deliberate choices an author makes in language, structure, and technique to shape the reader's response",
              "The themes explored in the text",
            ],
            answer:
              "The deliberate choices an author makes in language, structure, and technique to shape the reader's response",
          },
          {
            prompt:
              "'The crowd surged like a rising tide.' The author most likely used this simile to:",
            options: [
              "Tell us the crowd was near the ocean",
              "Create an impression of unstoppable force and collective momentum",
              "Describe the weather",
              "Introduce a new character",
            ],
            answer:
              "Create an impression of unstoppable force and collective momentum",
          },
        ],
      },
      {
        type: "open-response",
        title: "The Author's Overall Craft — A Holistic Analysis",
        instruction:
          "Think about a text you know well. Write a 6–8 sentence analysis of the author's overall craft — not just individual techniques, but how the techniques work TOGETHER to create a unified effect or to serve the text's purpose.",
        parentTip:
          "This is a synthesis task. Encourage your child to move from 'list of techniques' thinking to 'how do they work together?' thinking. The strongest analysis considers how meaning is made holistically.",
        prompts: [
          {
            text: "Text chosen (title, author, genre): ________________________________\n\nHolistic craft analysis:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Literary Review",
        instruction:
          "Write a short literary review (8–10 sentences) of a book you have recently read. Include evaluation of the author's craft — what techniques work well, and why.",
        parentTip:
          "A literary review is different from a book report (which just summarises). It evaluates the writing itself. Help your child understand that criticism can be positive — a review is not just a complaint, it is an analysis of what the writer achieved.",
        prompts: [
          {
            text: "Book title and author: _________________________________________\n\nLiterary review:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Imitation — Write in an Author's Style",
        instruction:
          "Choose a short extract from a favourite author. Analyse the main craft techniques. Then write a completely different scene using the same techniques in the same proportions.",
        parentTip:
          "Imitation is how all writers learn. Writers from Shakespeare to Toni Morrison and Tim Winton developed their styles by consciously imitating writers they admired, then gradually diverging. This is serious craft work.",
        prompts: [
          {
            text: "Original extract (short — 3–5 sentences):",
            type: "box",
          },
          {
            text: "Techniques identified: ___________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Your imitation (different content, same techniques):",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Techniques by Their Effect on Pace",
        instruction:
          "Sort these techniques and structural choices by whether they SLOW DOWN, SPEED UP, or have a VARIABLE effect on narrative pace.",
        columns: ["Slows Pace", "Speeds Pace", "Variable / Depends on Context"],
        items: [
          { label: "Long descriptive sentences" },
          { label: "Short, staccato sentences" },
          { label: "Detailed internal monologue" },
          { label: "Rapid-fire dialogue with no description" },
          { label: "Repetition" },
          { label: "A single one-word sentence" },
          { label: "A long list of sensory details" },
        ],
      },
      {
        type: "open-response",
        title: "Craft Manifesto — Your Writing Identity",
        instruction:
          "Write a short manifesto (5–7 sentences) about your own craft as a writer. Which techniques will you use most? What effects do you most want to create in your readers? What kind of writer do you want to become?",
        parentTip:
          "This is a creative and reflective task. Share your own manifesto as a reader if you wish — what effects do you most value in the writing you love?",
        prompts: [
          {
            text: "My writing craft manifesto:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Craft Behind the Feeling",
        content:
          "Think of a moment in a book, film, or piece of music that made you feel something strongly — moved you, frightened you, made you laugh unexpectedly. Now ask: HOW was that effect created? What specific choices — of language, structure, timing, or technique — produced that response in you? This question is the heart of all literary analysis. You are never just a passive recipient of a feeling. You are always the product of craft. Understanding that craft gives you the power to create those moments for others.",
      },
      {
        type: "open-response",
        title: "Final Project: Craft Analysis of Your Favourite Chapter",
        instruction:
          "Choose your favourite chapter or scene from any book you have read this year. Write a structured craft analysis: identify the techniques used, quote from the text, explain the effects, and evaluate why this section of writing is particularly effective.",
        parentTip:
          "This is the capstone task for the whole worksheet. Allow at least 30 minutes. The goal is a genuine piece of literary analysis that your child is proud of — not a perfect formula but a real encounter with a text they love.",
        prompts: [
          {
            text: "Text and chapter/scene: _________________________________________\n\nCraft analysis:",
            type: "box",
          },
          {
            text: "What makes this section particularly effective in your view?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Read Aloud — Hear the Craft",
        instruction:
          "Choose a page of writing you love. Read it aloud to someone in your family, then discuss: which sentence was the most beautifully crafted? What technique made it work?",
        parentTip:
          "Reading great writing aloud is the oldest form of literary appreciation. The physical experience of shaping those sentences in your mouth reveals craft in a way that silent reading cannot. This is a habit worth building for life.",
        suggestions: [
          "Choose any page from a book you love.",
          "Read it aloud slowly and with expression.",
          "Ask your audience: which sentence struck you most?",
          "Discuss: what technique made it work?",
          "Discuss: could you write something like it? What would you choose to write about?",
        ],
      },

      // ── EXTENDING: Activities 60–100
      {
        type: "tip",
        title: "Tip: The Author Behind the Choices",
        content:
          "Every authorial craft choice reflects both a skill and a world view. When an author describes a storm as angry, they are not just using personification — they are making the storm feel morally charged, as though nature itself is reacting to events. Asking 'what does this choice reveal about the author's perspective?' moves your analysis from identification to interpretation.",
      },
      {
        type: "multiple-choice",
        title: "Effect of Sentence Length",
        instruction:
          "Authors deliberately vary sentence length for effect. Choose the best explanation for each example.",
        parentTip:
          "Sentence length is one of the most underanalysed craft elements. Short sentences create urgency, long sentences create immersion. Help your child feel this rather than just know it.",
        questions: [
          {
            prompt: "He ran. He hid. He waited.",
            options: [
              "Long sentences create a sense of calm",
              "Short sentences create pace, tension, and urgency",
              "Short sentences show the character is happy",
              "Long sentences help with description",
            ],
            answer: "Short sentences create pace, tension, and urgency",
          },
          {
            prompt: "She moved through the corridors of the old house slowly, letting her fingers trail across the dusty wallpaper, breathing in the smell of time and memory, of all the people who had once lived here and loved here and left.",
            options: [
              "The long sentence creates confusion",
              "Short sentences would be better here",
              "The long sentence immerses the reader in the character's wandering, meditative experience",
              "Long sentences are always harder to understand",
            ],
            answer:
              "The long sentence immerses the reader in the character's wandering, meditative experience",
          },
        ],
      },
      {
        type: "open-response",
        title: "Experiment: Rewrite with Different Sentence Lengths",
        instruction:
          "Take this medium-length description and rewrite it twice: once using only very short sentences (2–5 words each) to create urgency, and once as a single long flowing sentence.",
        parentTip:
          "Productive experimentation with sentence structure is one of the best craft-development activities. The act of rewriting reveals why the original was written as it was.",
        prompts: [
          {
            text: "Original: 'The bird landed on the branch. It looked around cautiously. Then it flew away.'",
            type: "lines",
            lines: 1,
          },
          {
            text: "Rewrite 1 — very short sentences for urgency:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Rewrite 2 — one long flowing sentence:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Identify the Literary Device",
        instruction:
          "Fill in the blank with the name of the literary device used in each sentence.",
        parentTip:
          "Device identification becomes automatic with practice. Encourage your child to read each sentence aloud — the device often becomes more audible than visible.",
        sentences: [
          {
            text: "The thunder growled like a waking giant. This is a _____.",
            blanks: ["simile"],
          },
          {
            text: "The stars were tiny diamonds scattered across dark velvet. This is a _____.",
            blanks: ["metaphor"],
          },
          {
            text: "The wind whispered its secrets through the trees. This is _____.",
            blanks: ["personification"],
          },
          {
            text: "The icy, indifferent, invisible cold crept under the door. This is _____.",
            blanks: ["alliteration"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Craft Technique to Its Effect",
        instruction:
          "Match each craft technique to its most common effect. Drag each technique to the correct effect column.",
        parentTip:
          "Understanding why a device is used (its effect) is more valuable than simply naming it. This activity focuses on purpose rather than identification.",
        columns: ["Creates tension", "Creates imagery/visualisation", "Creates rhythm", "Creates character voice"],
        items: [
          { label: "Short, fragmented sentences" },
          { label: "Detailed sensory description" },
          { label: "Repetition and parallel structure" },
          { label: "Colloquial dialogue and dialect" },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Advanced Author's Craft",
        instruction: "Mark each statement True or False.",
        parentTip:
          "These statements address nuanced craft concepts. Aim for discussion rather than simple marking — the reasoning matters more than the answer.",
        statements: [
          {
            text: "A metaphor always compares two things using the word 'like' or 'as'.",
            answer: false,
          },
          {
            text: "The choice of first-person narrator ('I') limits what the reader knows to what the narrator knows.",
            answer: true,
          },
          {
            text: "Repetition in literary writing is always an error that should be corrected.",
            answer: false,
          },
          {
            text: "Foreshadowing is when an author hints at future events earlier in the text.",
            answer: true,
          },
          {
            text: "An omniscient narrator knows the inner thoughts of all characters.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: Imitate a Master",
        instruction:
          "Choose a single sentence from a book you love — one that uses craft deliberately. Copy it out, analyse the technique, then write your own sentence imitating the style.",
        parentTip:
          "Imitation is the oldest method of learning to write well. Shakespeare imitated the ancients. Dickens imitated Shakespeare. Imitating a specific sentence from a specific author teaches more than any general exercise.",
        prompts: [
          {
            text: "The sentence I chose (with author and book):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technique(s) identified:",
            type: "lines",
            lines: 1,
          },
          {
            text: "My imitation sentence:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Descriptive Paragraph Using Three Devices",
        instruction:
          "Write a descriptive paragraph (6–8 sentences) about a place that matters to you. Deliberately use at least three different literary devices. After writing, annotate each device in the margin.",
        parentTip:
          "Purposeful descriptive writing with annotation is a high-yield task. The annotation proves conscious craft — which is what examiners look for.",
        prompts: [
          {
            text: "My descriptive paragraph with three literary devices:",
            type: "box",
          },
          {
            text: "Devices I used and where:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Narrative Point of View",
        instruction:
          "Choose the best answer about narrative point of view.",
        parentTip:
          "Point of view is one of the most significant craft choices an author makes. Changing perspective entirely changes what a story can reveal.",
        questions: [
          {
            prompt: "Which point of view gives the narrator access to all characters' thoughts?",
            options: [
              "First person limited",
              "Second person",
              "Third person omniscient",
              "Third person limited",
            ],
            answer: "Third person omniscient",
          },
          {
            prompt: "What is the effect of writing in second person ('you walked into the room')?",
            options: [
              "Creates emotional distance",
              "Draws the reader directly into the story as a participant",
              "Makes the story easier to write",
              "Allows access to all characters' thoughts",
            ],
            answer: "Draws the reader directly into the story as a participant",
          },
          {
            prompt: "An unreliable narrator is one who:",
            options: [
              "Uses too much description",
              "Cannot be fully trusted to tell the truth as presented in the story",
              "Always tells the story from a first-person perspective",
              "Is always the main character",
            ],
            answer: "Cannot be fully trusted to tell the truth as presented in the story",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Setting as More Than Background",
        content:
          "In skilled literary writing, setting does more than describe where events happen. It creates atmosphere (the emotional feel of a scene), reflects theme (a broken landscape can reflect a broken society), and can itself be a character — with agency, personality, and effect on plot. When you analyse setting, ask: what does this place DO to the story?",
      },
      {
        type: "open-response",
        title: "Analyse: What Does This Setting Do?",
        instruction:
          "Think of a setting from a book you have read that felt significant — not just a backdrop but a presence. Analyse how the author created that setting and what it contributed to meaning.",
        parentTip:
          "Setting analysis is often skipped in favour of character and plot. Redirecting attention to place creates more sophisticated readings.",
        prompts: [
          {
            text: "Book and setting I am analysing:",
            type: "lines",
            lines: 1,
          },
          {
            text: "How the author describes the setting (techniques used):",
            type: "lines",
            lines: 3,
          },
          {
            text: "What the setting contributes to theme, character, or atmosphere:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Vocabulary: Technical Literary Terms",
        instruction:
          "Fill in the blank with the correct literary term for each definition.",
        parentTip:
          "Technical vocabulary allows precise discussion of literature. These terms are introduced in the Australian Curriculum from Year 5–6.",
        sentences: [
          {
            text: "The leading character of a story, typically the one the reader follows most closely, is called the _____.",
            blanks: ["protagonist"],
          },
          {
            text: "A character, force, or situation that opposes the protagonist is called the _____.",
            blanks: ["antagonist"],
          },
          {
            text: "The turning point or moment of greatest tension in a narrative is called the _____.",
            blanks: ["climax"],
          },
          {
            text: "When an earlier event in a narrative is revealed after the main timeline, this is called _____.",
            blanks: ["flashback"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Circle the Example of Foreshadowing",
        instruction:
          "In each set, circle the sentence that uses foreshadowing.",
        questions: [
          {
            prompt: "Which sentence uses foreshadowing?",
            options: [
              "She was happy every day of her life.",
              "She had no idea that by morning, everything would be different.",
              "The sun rose slowly over the hills.",
            ],
          },
          {
            prompt: "Which sentence uses foreshadowing?",
            options: [
              "The door slammed shut behind him.",
              "He had always loved the sea — but not for much longer.",
              "The boat was painted bright blue.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Scene With Atmosphere",
        instruction:
          "Write a short scene (6–8 sentences) that creates a strong atmosphere of your choice — eerie, joyful, tense, or melancholy. Use setting description, sensory details, and at least one literary device.",
        parentTip:
          "Creating atmosphere through craft (rather than just telling the reader how to feel) is an advanced writing skill. Encourage your child to show, not tell.",
        prompts: [
          {
            text: "Atmosphere chosen:",
            type: "lines",
            lines: 1,
          },
          {
            text: "My scene with deliberate atmosphere:",
            type: "box",
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Author's Craft in Non-Fiction",
        instruction:
          "Author's craft applies to non-fiction too. Match each non-fiction craft technique to its purpose.",
        parentTip:
          "Students often assume craft is only for fiction. Non-fiction writers make equally deliberate choices about structure, tone, and language.",
        left: [
          "Using subheadings and bullet points",
          "Opening with a surprising statistic",
          "Including a personal anecdote",
          "Ending with a call to action",
          "Using the second person 'you'",
        ],
        right: [
          "Engages the reader immediately with contrast",
          "Structures information for easy navigation",
          "Makes abstract information personal and relatable",
          "Creates direct engagement with the reader",
          "Compels the reader to respond or act",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Figurative vs Literal Language",
        instruction:
          "Sort these sentences into Figurative Language or Literal Language.",
        columns: ["Figurative Language", "Literal Language"],
        items: [
          { label: "The city never sleeps." },
          { label: "The population of Sydney is 5.3 million." },
          { label: "Her words cut him like a blade." },
          { label: "He ate three slices of toast for breakfast." },
          { label: "The exam loomed over her like a storm cloud." },
          { label: "The test was scheduled for Tuesday at 9 am." },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Figurative Language",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "Personification gives human qualities to non-human things or ideas.",
            answer: true,
          },
          {
            text: "A simile uses the verb 'to be' to create a comparison ('The moon is a silver coin').",
            answer: false,
          },
          {
            text: "Onomatopoeia refers to words that sound like what they describe (e.g., 'buzz', 'crash').",
            answer: true,
          },
          {
            text: "Alliteration is the repetition of the same vowel sound at the start of words.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: An Analytical Paragraph About Craft",
        instruction:
          "Write a formal analytical paragraph about an author's craft choice in a text you have read. Use the TEEL structure: Topic (craft claim), Evidence (quotation or example), Explanation (why it works), Link (to theme or author purpose).",
        parentTip:
          "Analytical writing about literature is a key ACARA outcome for Year 6. Using TEEL here reinforces cross-genre writing skills — the same structure works for persuasion and literary analysis.",
        prompts: [
          {
            text: "My analytical paragraph (T–E–E–L):",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Author Study: Compare Two Authors",
        instruction:
          "Choose two authors whose style you know. Compare their craft choices in three areas: use of language, narrative voice, and how they create setting.",
        parentTip:
          "Author comparison is a sophisticated analytical task that appears in senior English assessments. Beginning at Year 6 builds a powerful habit of cross-text thinking.",
        prompts: [
          {
            text: "Author 1 and Author 2:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Comparing their use of language:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Comparing their narrative voice:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Comparing how they create setting:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Final Assessment: Author's Craft",
        instruction:
          "Final assessment — choose the best answer for each question.",
        parentTip:
          "Use this as a diagnostic tool to identify any concepts that need revisiting.",
        questions: [
          {
            prompt: "What is the primary purpose of using a simile in descriptive writing?",
            options: [
              "To make writing shorter",
              "To create a comparison that helps the reader visualise or feel something more vividly",
              "To show the character is intelligent",
              "To replace literal description",
            ],
            answer:
              "To create a comparison that helps the reader visualise or feel something more vividly",
          },
          {
            prompt: "When analysing author's craft, which question is most useful?",
            options: [
              "What happens in the story?",
              "How long is the text?",
              "Why did the author make this specific choice and what is its effect?",
              "Is the story interesting?",
            ],
            answer: "Why did the author make this specific choice and what is its effect?",
          },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: Becoming a Craft-Aware Reader and Writer",
        instruction:
          "Write a reflection (5–6 sentences) on how studying author's craft has changed the way you read and write.",
        parentTip:
          "The deepest learning in English happens when students begin to see themselves as both reader and writer — as someone who both receives and makes craft choices.",
        prompts: [
          {
            text: "My reflection on author's craft and how it has changed my reading and writing:",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Mood vs Tone — What Is the Difference?",
        content:
          "Tone is the author's attitude toward the subject (serious, ironic, playful, melancholy). Mood is the feeling created in the reader by the text (eerie, joyful, tense). An author creates mood deliberately through word choice, setting, pacing, and imagery. Tone and mood can be the same or different — a text with a playful, ironic tone might create an unsettling mood if the subject is serious.",
      },
      {
        type: "matching",
        title: "Match: Tone and Mood Words",
        instruction:
          "Match each sentence to the tone or mood it creates.",
        left: [
          "The shadows lengthened and the wind dropped to nothing.",
          "He wrote the obituary with a small, wry smile.",
          "She burst through the door, arms full of flowers and laughter.",
          "The document detailed every loss with cold, clinical precision.",
        ],
        right: [
          "Exuberant / joyful",
          "Eerie / foreboding",
          "Clinical / detached",
          "Wry / ironic",
        ],
      },
      {
        type: "open-response",
        title: "Identify Mood and Tone in a Text You Love",
        instruction:
          "Choose a scene from a book you love. Identify the mood it creates in the reader and the tone the author uses. Quote one sentence that particularly captures these qualities and explain how it works.",
        prompts: [
          {
            text: "Book, scene, mood, and tone:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Quoted sentence and explanation of how it creates that mood/tone:",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Mood and Tone",
        instruction: "Mark each statement True or False.",
        parentTip:
          "These statements address persistent confusions between related concepts. Taking time to explore the distinctions is more valuable than simply correcting errors.",
        statements: [
          {
            text: "An author's tone is always obvious from the first sentence.",
            answer: false,
          },
          {
            text: "The same words can create a different mood in different contexts.",
            answer: true,
          },
          {
            text: "Tone refers to the feeling created in the reader; mood refers to the author's attitude.",
            answer: false,
          },
          {
            text: "An author can shift tone deliberately within a single text.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: Two Versions of the Same Scene",
        instruction:
          "Write the same scene twice: once with an eerie, foreboding mood and once with a warm, joyful mood. The scene: a child enters an old house for the first time. Use identical events but different word choices to create opposite moods.",
        parentTip:
          "Writing the same scene in two different moods powerfully demonstrates that mood is a craft choice, not an accident. This activity is memorable and highly effective.",
        prompts: [
          {
            text: "Eerie, foreboding version:",
            type: "box",
          },
          {
            text: "Warm, joyful version:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Identify the Narrative Technique",
        instruction:
          "Fill in the blank with the narrative technique being described.",
        sentences: [
          {
            text: "When a narrator can see into all characters' minds and knows all events, this is called _____ narration.",
            blanks: ["omniscient"],
          },
          {
            text: "When a novel chapter ends on an unresolved tension to encourage the reader to continue, this is called a _____.",
            blanks: ["cliffhanger"],
          },
          {
            text: "When an author hints at a coming event without revealing it fully, this technique is called _____.",
            blanks: ["foreshadowing"],
          },
          {
            text: "When the story interrupts its timeline to show a past event, this is called a _____.",
            blanks: ["flashback"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Use a Narrative Technique Deliberately",
        instruction:
          "Write a short paragraph (4–6 sentences) that uses one of these narrative techniques deliberately: cliffhanger, foreshadowing, or flashback. Label which technique you used and explain why you made that choice.",
        prompts: [
          {
            text: "Technique used and reason for choosing it:",
            type: "lines",
            lines: 2,
          },
          {
            text: "My paragraph using the technique:",
            type: "box",
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Narrative Technique in Context",
        instruction:
          "Circle the name of the narrative technique used in each excerpt.",
        questions: [
          {
            prompt: "Excerpt: 'She did not know, as she walked through the door that night, that it was the last time she would see the house.'",
            options: ["Flashback", "Foreshadowing", "Cliffhanger", "Omniscient narration"],
          },
          {
            prompt: "Excerpt: 'The door swung shut. The lights went out. Then the screaming began.'",
            options: ["Flashback", "Foreshadowing", "Cliffhanger", "Simile"],
          },
          {
            prompt: "Excerpt: 'He remembered the summer he turned nine, when the world had still seemed simple.'",
            options: ["Omniscient narration", "Flashback", "Cliffhanger", "Direct address"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Craft in Non-Fiction: Features of Effective Journalism",
        instruction:
          "Journalistic writing uses craft deliberately. Choose the best answer about craft in non-fiction.",
        questions: [
          {
            prompt: "Why do newspaper articles often begin with the most important information?",
            options: [
              "Because the writer is lazy",
              "Because readers may stop reading at any point — the inverted pyramid structure ensures key information is communicated first",
              "Because the end of an article is always cut",
              "Because grammar rules require it",
            ],
            answer:
              "Because readers may stop reading at any point — the inverted pyramid structure ensures key information is communicated first",
          },
          {
            prompt: "What is the purpose of an anecdote in a feature article?",
            options: [
              "To replace statistics",
              "To show off the journalist's personal experience",
              "To make abstract issues personal and emotionally relatable to the reader",
              "Because anecdotes are always more accurate than data",
            ],
            answer:
              "To make abstract issues personal and emotionally relatable to the reader",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Literary Devices by Category",
        instruction:
          "Sort each literary device into its category: Figurative Language, Sound Device, or Structural Device.",
        columns: ["Figurative Language", "Sound Device", "Structural Device"],
        items: [
          { label: "Metaphor" },
          { label: "Alliteration" },
          { label: "Cliffhanger" },
          { label: "Simile" },
          { label: "Onomatopoeia" },
          { label: "Flashback" },
          { label: "Personification" },
          { label: "Repetition" },
          { label: "Foreshadowing" },
        ],
      },
      {
        type: "open-response",
        title: "Write: Your Best Descriptive Paragraph (Final Craft Task)",
        instruction:
          "Write what you believe is your best descriptive paragraph — a paragraph you are proud of. Use at least three literary devices, create a clear mood, and use a variety of sentence lengths. After writing, annotate each device and name the mood.",
        parentTip:
          "This is an aspirational task. Celebrate the effort and the choices, not just the result. Ask your child to read it aloud and explain what they were trying to create.",
        prompts: [
          {
            text: "My best descriptive paragraph:",
            type: "box",
          },
          {
            text: "Annotations — devices used, mood created, sentence length choices:",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Reading Journal Entry: Analysing a Favourite Scene",
        instruction:
          "Choose your absolute favourite scene from any book you have ever read. Write a reading journal entry that analyses the craft choices in that scene — what the author did, how they did it, and why it works so powerfully on you as a reader.",
        parentTip:
          "Literary analysis of a personally beloved text is one of the most authentic and powerful reading activities possible. There is no wrong answer — only stronger or weaker evidence.",
        prompts: [
          {
            text: "Book and scene:",
            type: "lines",
            lines: 1,
          },
          {
            text: "My reading journal analysis of the craft in this scene:",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Craft Hunt: A Week of Close Reading",
        instruction:
          "For one week, carry a small notebook. Every day, find one example of excellent craft in anything you read — a book, a cereal box, a news article, a sign. Write the example, name the technique, and explain the effect.",
        parentTip:
          "The craft hunt habit transforms ordinary reading into active craft apprenticeship. After one week, review the collection together — the range and quality of examples will reveal how much your child has absorbed.",
        suggestions: [
          "Day 1: Find an example of metaphor or simile.",
          "Day 2: Find an example of an interesting sentence length choice.",
          "Day 3: Find an example of word choice that creates strong connotation.",
          "Day 4: Find an example of tone — ironic, playful, or solemn.",
          "Day 5: Find any craft technique you have not yet seen this week.",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Terminology Review: Author's Craft",
        instruction:
          "Fill in the blank with the correct literary or craft term.",
        parentTip:
          "A final vocabulary review consolidates the terminology of this unit. Fluency with these terms enables precise analytical writing in English assessments.",
        sentences: [
          {
            text: "A figure of speech that describes one thing as if it were another without using 'like' or 'as' is called a _____.",
            blanks: ["metaphor"],
          },
          {
            text: "The author's attitude toward the subject of their text is called the _____.",
            blanks: ["tone"],
          },
          {
            text: "The emotional quality or feeling created in the reader by a text is called the _____.",
            blanks: ["mood"],
          },
          {
            text: "When an author gives human qualities to a non-human thing, this is called _____.",
            blanks: ["personification"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Short Review Using Craft Analysis",
        instruction:
          "Write a short review (5–7 sentences) of a book, film, or game you have experienced recently. In your review, comment specifically on the craft choices made by the creator — not just whether you liked it, but how it was made.",
        parentTip:
          "Reviews that analyse craft rather than simply express preference demonstrate sophisticated thinking. This task bridges personal response and analytical writing.",
        prompts: [
          {
            text: "My craft-informed review:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Craft Analysis in Australian Texts",
        instruction:
          "Choose the best answer about craft in Australian literature and media.",
        parentTip:
          "ACARA emphasises Australian literature as a context for literary study. Connecting craft analysis to Australian texts creates culturally relevant engagement.",
        questions: [
          {
            prompt: "Why do many Australian authors use the landscape as a central character or presence?",
            options: [
              "Because grammar rules require it",
              "Because the Australian landscape is relatively unexplored in world literature",
              "Because place is deeply connected to identity and belonging in Australian culture and Indigenous traditions",
              "Because landscape description is easier to write than character development",
            ],
            answer:
              "Because place is deeply connected to identity and belonging in Australian culture and Indigenous traditions",
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Author's Craft — Final Review",
        instruction: "Mark each statement True or False as a final review.",
        statements: [
          {
            text: "Similes use 'like' or 'as' to make comparisons; metaphors do not.",
            answer: true,
          },
          {
            text: "An author's tone and the reader's mood are always identical.",
            answer: false,
          },
          {
            text: "The structure of a text (chapter divisions, flashbacks, pacing) is a craft choice.",
            answer: true,
          },
          {
            text: "Analysing why an author made a craft choice is more valuable than simply naming the technique.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Final Craft Challenge: Write With Intention",
        instruction:
          "Write a 6–8 sentence paragraph on any topic. Before writing, choose three craft techniques you will use deliberately. After writing, write a brief author's note explaining each choice you made and its intended effect.",
        parentTip:
          "Writing with deliberate intention — choosing craft before writing — is the hallmark of a skilled writer. This final task synthesises the entire unit's learning.",
        prompts: [
          {
            text: "Three craft techniques I will use and my intended effect for each:",
            type: "lines",
            lines: 4,
          },
          {
            text: "My paragraph:",
            type: "box",
          },
          {
            text: "My author's note — explaining the choices I made:",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identifying Craft Purpose",
        instruction: "For each craft technique, choose the primary purpose it serves.",
        parentTip: "Discuss how a single technique can achieve multiple effects simultaneously.",
        questions: [
          {
            prompt: "An author describes a storm in great detail before a character receives bad news. This technique is called:",
            options: ["Foreshadowing through pathetic fallacy", "Simile", "Direct characterisation", "Alliteration"],
            answer: "Foreshadowing through pathetic fallacy",
          },
          {
            prompt: "A character narrates events using 'I', sharing private thoughts the other characters cannot hear. This is called:",
            options: ["Third-person omniscient", "First-person narrative", "Dramatic irony", "Free indirect discourse"],
            answer: "First-person narrative",
          },
          {
            prompt: "Short, abrupt sentences during a chase scene speed up the reader's pace. This is an example of:",
            options: ["Sentence length for effect", "Hyperbole", "Personification", "Extended metaphor"],
            answer: "Sentence length for effect",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Every Reader Is a Co-Author",
        content:
          "When you read a novel, you do not simply receive it — you co-create it. The author gives you words; your imagination, your experience, and your sensitivity give those words their full life. The craft choices a writer makes are invitations: to feel this, to see that, to wonder about this. As you develop your awareness of craft, you become a more complete reader — one who accepts every invitation the author extends. And as a writer, you begin to extend your own. Every sentence you write is an invitation to a reader. What do you want them to feel?",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "matching",
        title: "Match the Term to Its Definition",
        instruction:
          "Draw a line to match each term to its correct definition.",
        parentTip:
          "The most important distinction here is topic vs theme. A topic is a noun; a theme is a sentence — a claim about life. Make sure your child can articulate this difference clearly.",
        left: [
          "Theme",
          "Topic",
          "Central idea",
          "Moral",
          "Symbol",
        ],
        right: [
          "An object, person, or place that represents something beyond itself",
          "What a story is 'about' on the surface — a noun",
          "An explicit lesson the author intends the reader to take away",
          "The main idea or recurring concern that a text explores, expressed as a statement",
          "The dominant idea in a non-fiction text, similar to theme in fiction",
        ],
      },
      {
        type: "true-false",
        title: "Theme Basics — True or False?",
        instruction:
          "Read each statement and decide TRUE or FALSE.",
        parentTip:
          "Work through the first two together before your child continues independently.",
        statements: [
          {
            text: "A theme is always expressed as a single noun like 'friendship' or 'courage'.",
            answer: false,
          },
          {
            text: "A theme should make a claim about people or life, not just name a subject.",
            answer: true,
          },
          {
            text: "A text can have only one theme.",
            answer: false,
          },
          {
            text: "Authors usually state their theme explicitly at the end of a novel.",
            answer: false,
          },
          {
            text: "The same theme can be explored very differently by different authors.",
            answer: true,
          },
          {
            text: "'The story is about war' is an example of a theme statement.",
            answer: false,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Topic or Theme?",
        instruction:
          "Decide whether each statement is a topic or a full theme statement.",
        questions: [
          {
            prompt: "'Belonging.'",
            options: ["Topic", "Theme statement"],
            answer: "Topic",
          },
          {
            prompt: "'True belonging requires the courage to be imperfect and vulnerable.'",
            options: ["Topic", "Theme statement"],
            answer: "Theme statement",
          },
          {
            prompt: "'The story is about a family during the Second World War.'",
            options: ["Topic", "Theme statement"],
            answer: "Topic",
          },
          {
            prompt: "'War forces ordinary people to make impossible moral choices.'",
            options: ["Topic", "Theme statement"],
            answer: "Theme statement",
          },
        ],
      },
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
        type: "fill-in-blank",
        title: "Upgrade the Theme Statement",
        instruction:
          "Each statement is a topic, not a theme. Fill in the blank to transform it into a full theme statement.",
        parentTip:
          "Discuss each one before completing the blank. The transformation from noun to sentence is the key skill here.",
        sentences: [
          {
            text: "Topic: 'Justice.'\nTheme statement: 'True justice requires ___, not just punishment.' [compassion / money]",
            blanks: ["compassion"],
          },
          {
            text: "Topic: 'Family.'\nTheme statement: 'Families ___ when they communicate honestly, even when the truth is painful.' [grow stronger / fall apart]",
            blanks: ["grow stronger"],
          },
          {
            text: "Topic: 'Identity.'\nTheme statement: 'A person's identity is ___ by the choices they make under pressure.' [revealed / hidden]",
            blanks: ["revealed"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Common Universal Themes",
        instruction:
          "Sort these theme statements into the correct broad theme category.",
        parentTip:
          "Universal themes appear across cultures and centuries because they deal with experiences that all humans share. Recognising these categories helps when tracking themes across different texts.",
        columns: ["Identity and Belonging", "Courage and Fear", "Justice and Fairness", "Growing Up / Coming of Age"],
        items: [
          { label: "Learning who you are often requires leaving behind who you were." },
          { label: "Doing the right thing is hardest when everyone around you is doing wrong." },
          { label: "Fear is not the absence of courage — it is courage's precondition." },
          { label: "To grow up is to discover that the world does not fit the rules you were taught." },
          { label: "Finding where you belong sometimes means accepting where you don't." },
          { label: "Justice demands that we see the full human being, not just the crime." },
          { label: "Growing up means taking responsibility for things you did not choose." },
          { label: "Genuine belonging cannot be faked — it requires authenticity." },
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
        type: "multiple-choice",
        title: "How Is Theme Developed?",
        instruction:
          "Themes are communicated through specific elements. Choose the best answer.",
        questions: [
          {
            prompt:
              "Which of these is the MOST effective way for an author to develop a theme?",
            options: [
              "Having a character state the theme directly in dialogue",
              "Through character choices, consequences, and key turning-point events",
              "By repeating the theme word on every page",
              "Through the title alone",
            ],
            answer: "Through character choices, consequences, and key turning-point events",
          },
          {
            prompt:
              "A character who chooses sacrifice over self-interest most likely develops which theme?",
            options: [
              "Selflessness shows the true measure of love or loyalty",
              "Technology is dangerous",
              "Hard work always leads to success",
              "The natural world is beautiful",
            ],
            answer: "Selflessness shows the true measure of love or loyalty",
          },
        ],
      },
      {
        type: "open-response",
        title: "How the Ending Reveals the Theme",
        instruction:
          "The ending of a story almost always expresses its central theme most directly. Think about the ending of a book you have read.",
        prompts: [
          {
            text: "Book title: _____________________________________________________\n\nBriefly describe the ending (2–3 sentences):",
            type: "lines",
            lines: 3,
          },
          {
            text: "What theme does this ending most clearly express?",
            type: "lines",
            lines: 2,
          },
          {
            text: "How does the ending confirm or complicate the theme? Does it offer a simple moral, or is the theme more complex?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "tip",
        title: "Key Concept: Theme Is a Full Sentence",
        content:
          "The single most common error in theme analysis is stating a topic instead of a theme. 'This story is about friendship' is a topic. 'This story argues that true friendship demands honesty, even at the cost of comfort' is a theme. The distinction matters because a theme makes a claim — and claims can be discussed, agreed with, or challenged. When you express a theme as a full sentence, you are entering into a genuine conversation with the text.",
      },
      {
        type: "matching",
        title: "Match the Symbol to Its Theme",
        instruction:
          "Draw a line to match each literary symbol to the theme it most commonly represents.",
        parentTip:
          "Symbols are not fixed — they depend on context. Discuss any that feel ambiguous.",
        left: [
          "A bird in a cage",
          "A journey or road",
          "Winter or darkness",
          "Spring or sunrise",
          "A broken mirror",
          "A wall or fence",
        ],
        right: [
          "Lost identity or distorted self-image",
          "Division, exclusion, or barriers to belonging",
          "Trapped identity; denied freedom",
          "Renewal, hope, or a new beginning",
          "Personal growth, self-discovery, coming of age",
          "Death, grief, despair, or the unknown",
        ],
      },
      {
        type: "open-response",
        title: "Identify a Symbol and Its Theme",
        instruction:
          "Find a symbol in a book you know. Explain what it represents and how it connects to a theme in the text.",
        prompts: [
          {
            text: "Book and symbol: ________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "What does this symbol represent in this text? Use at least one example from the story:",
            type: "lines",
            lines: 3,
          },
          {
            text: "What theme does this symbol help to build?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Themes Across Texts — Comparison Concepts",
        instruction:
          "Decide whether each statement about comparing themes across texts is TRUE or FALSE.",
        statements: [
          {
            text: "Two texts can share a theme but reach completely opposite conclusions about it.",
            answer: true,
          },
          {
            text: "The same theme is always expressed with the same tone in different texts.",
            answer: false,
          },
          {
            text: "Comparing how two texts treat the same theme can reveal differences in cultural or historical perspective.",
            answer: true,
          },
          {
            text: "When comparing themes, you should only look at texts from the same genre.",
            answer: false,
          },
          {
            text: "A poem and a novel can explore the same theme.",
            answer: true,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Theme Hunt — Books and Films",
        instruction:
          "Choose one book and one film that share a common theme. Note how each medium treats the theme differently.",
        parentTip:
          "This activity can be done over an evening — watch the film together, then discuss the shared theme. Different media communicate theme through different techniques: film uses music, visual symbolism, and performance; books use language, interiority, and structure.",
        suggestions: [
          "Identify a theme you are interested in: belonging, courage, friendship, justice, identity.",
          "Find a book AND a film that explore this theme.",
          "For the film: what visual or musical choices communicate the theme?",
          "For the book: what language choices communicate the theme?",
          "Discuss: which medium communicates this theme more powerfully, and why?",
        ],
      },
      {
        type: "sorting",
        title: "Sort Theme Evidence",
        instruction:
          "Sort each piece of evidence into the type of theme development it represents.",
        columns: [
          "Character Action / Choice",
          "Character Consequence / Change",
          "Language / Symbolism",
          "Plot Structure",
        ],
        items: [
          { label: "A character sacrifices their own safety to protect a stranger." },
          { label: "The recurring image of a locked door throughout the novel." },
          { label: "A character who was once selfish ends the story by giving everything away." },
          { label: "The climax occurs when the protagonist must choose between loyalty and honesty." },
          { label: "The author's repeated use of the word 'silence' at key emotional moments." },
          { label: "A character's decision to speak the truth despite the consequences." },
        ],
      },
      {
        type: "tip",
        title: "Writing Tip: Theme Discussion Before Writing",
        content:
          "Before writing about theme, always talk about it first. Verbal articulation of theme ideas — 'What is this story really about?' — is almost always easier than writing it cold. Many students know what they think but cannot access that thinking directly in writing. Spend five minutes talking through the theme with your parent before picking up a pen. Use the conversation to find your central insight, then write it down as your opening statement.",
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
      {
        type: "open-response",
        title: "Theme Across Genre — Same Theme, Different Form",
        instruction:
          "Find a poem and a novel or story that share a common theme. Compare how each form communicates the theme.",
        parentTip:
          "Comparing across genres is a sophisticated skill. Poems compress meaning into very few words; novels develop it over time. Each approach has strengths and limitations.",
        prompts: [
          {
            text: "Poem title and author: _____________________________________________\nNovel/story title and author: _______________________________________\nShared theme: ____________________________________________________",
            type: "lines",
            lines: 3,
          },
          {
            text: "How does the poem communicate the theme? (What specific poetic techniques contribute?)",
            type: "lines",
            lines: 3,
          },
          {
            text: "How does the novel/story communicate the theme? (Which moments, characters, or language choices?)",
            type: "lines",
            lines: 3,
          },
          {
            text: "Which form communicates the theme most powerfully for you personally, and why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: What Does Literature Know That You Don't?",
        content:
          "Stories have been told for as long as humans have existed. Before there were textbooks or experts, there were stories — because stories carry themes: truths about what it means to be human, how to survive loss, why people betray each other, what love costs, what courage looks like when it is inconvenient. Think about a theme from a book that genuinely changed how you think about something. Discuss it with your parent: what did the story know that you did not know before reading it?",
      },
      {
        type: "multiple-choice",
        title: "Theme — Assessment Style Questions",
        instruction:
          "Answer these questions as in a reading comprehension assessment.",
        questions: [
          {
            prompt:
              "In a story, a character gradually learns to trust others after being betrayed. What theme is most likely being explored?",
            options: [
              "Trust must be rebuilt slowly and cannot be rushed",
              "Betrayal is always unforgivable",
              "The natural world is unpredictable",
              "Hard work leads to success",
            ],
            answer: "Trust must be rebuilt slowly and cannot be rushed",
          },
          {
            prompt:
              "A recurring symbol in a novel is an empty bird cage. What theme is the author most likely developing?",
            options: [
              "Birds are beautiful creatures",
              "The main character likes animals",
              "Something or someone is trapped and yearning for freedom",
              "The story is set in the countryside",
            ],
            answer: "Something or someone is trapped and yearning for freedom",
          },
        ],
      },
      {
        type: "true-false",
        title: "Theme and Character — True or False?",
        instruction:
          "Read each statement about how character and theme connect. Decide TRUE or FALSE.",
        statements: [
          {
            text: "A character's fatal flaw often directly relates to the text's central theme.",
            answer: true,
          },
          {
            text: "A villain in a story has nothing to do with the text's themes.",
            answer: false,
          },
          {
            text: "How a character changes (or fails to change) from the beginning to the end of a story is a key carrier of theme.",
            answer: true,
          },
          {
            text: "All characters in a story develop the same theme.",
            answer: false,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Story That Changed Your Mind",
        content:
          "Has a book ever genuinely changed the way you think about something? Not just informed you — but actually shifted how you see the world or a type of person? This is theme working at its highest level. The author has built an argument about life through character and story rather than through facts and essays — and it has reached you more deeply than any textbook. Discuss with your parent: what was the book? What was the theme? And how did the story make the theme convincing in a way that a direct argument might not have?",
      },

      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Theme Statement for a Well-Known Story",
        instruction:
          "Write a full theme statement for each well-known story. Go beyond the surface topic.",
        parentTip:
          "If your child has not read one of these, choose together from books they know. The aim is to practise the skill of converting a topic into a theme claim.",
        prompts: [
          {
            text: "Charlotte's Web (topic: friendship on a farm):\nTheme statement: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Matilda (topic: a girl with special abilities):\nTheme statement: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "A book you know well (title: _______________):\nTheme statement: ________________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "matching",
        title: "Match Author to Their Typical Themes",
        instruction:
          "Draw a line to match each Australian author to a theme strongly associated with their work. (Use your knowledge of books you have read or ask your parent for help.)",
        parentTip:
          "If your child has not read books by all of these authors, choose Australian authors whose work they do know and adapt the activity. The aim is to connect authors with themes, not to test knowledge of specific texts.",
        left: [
          "John Marsden (Tomorrow series)",
          "Mem Fox (Wilfrid Gordon McDonald Partridge)",
          "Shaun Tan (The Arrival)",
          "Sally Morgan (My Place)",
          "Morris Gleitzman (Once)",
        ],
        right: [
          "The immigrant experience and the search for belonging",
          "Memory connects us to who we are across time",
          "Survival requires moral courage and the willingness to question authority",
          "Indigenous identity and the importance of knowing your own history",
          "The injustice of war seen through innocent eyes",
        ],
      },
      {
        type: "fill-in-blank",
        title: "Theme Development Through Character Arc",
        instruction:
          "A character arc traces how a character changes. Fill in the blank to show how each arc develops a theme.",
        sentences: [
          {
            text: "Character arc: A selfish child learns to share and becomes happier as a result.\nTheme: 'Generosity brings ___ than selfishness ever can.' [more joy / more hardship]",
            blanks: ["more joy"],
          },
          {
            text: "Character arc: A brave soldier becomes disillusioned after seeing the reality of war.\nTheme: 'War ___ the idealism of those who believed in it.' [destroys / strengthens]",
            blanks: ["destroys"],
          },
          {
            text: "Character arc: An outcast discovers their uniqueness is actually a strength.\nTheme: 'What makes us ___ is often what makes us powerful.' [different / popular]",
            blanks: ["different"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Multi-Theme Analysis",
        instruction:
          "Most texts explore more than one theme. Identify TWO themes in a text you know well and explain how they relate to each other.",
        parentTip:
          "This is a more advanced task. Themes in complex texts often complement or complicate each other. For example, a novel might explore both 'belonging' and 'identity' as themes that are inseparable — you cannot belong if you do not know who you are.",
        prompts: [
          {
            text: "Text chosen: __________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Theme 1 (full statement): ______________________________________\nHow it is developed:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Theme 2 (full statement): ______________________________________\nHow it is developed:",
            type: "lines",
            lines: 3,
          },
          {
            text: "How do these two themes relate to each other? Do they reinforce, complicate, or contradict each other?",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Theme Is Not the Moral",
        content:
          "A moral is a simple, direct lesson: 'Be honest.' 'Treat others as you wish to be treated.' Morals are the territory of fables. Themes in complex literary fiction are rarely so simple — they raise questions as often as they answer them. A theme might be: 'Honesty between people is essential, but there are moments when the truth causes more damage than it prevents.' This is a theme — it wrestles with the complexity of life. If your theme sounds like a fortune cookie, push yourself to make it more nuanced.",
      },
      {
        type: "open-response",
        title: "Theme in Australian Literature",
        instruction:
          "Australian literature often explores specific national themes: the landscape as character, Indigenous experience, the 'Australian identity', migration, and belonging. Identify one of these themes in a text by an Australian author.",
        parentTip:
          "If your child is unfamiliar with Australian literature beyond school readers, explore together. The Australian Curriculum specifically emphasises Australian texts — this is a meaningful cultural literacy goal.",
        prompts: [
          {
            text: "Text, author, and format (novel / picture book / poem / film): ____________\n\nAustralian theme identified (as a full statement): ______________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "How does the text develop this theme? Use one specific example (a moment, character, or line of text):",
            type: "box",
          },
          {
            text: "Does this theme feel distinctly Australian? Why or why not?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Theme Evidence — Choose the Best Support",
        instruction:
          "For each theme, choose the textual evidence that BEST supports it.",
        questions: [
          {
            prompt:
              "Theme: 'True belonging requires the courage to be vulnerable.'\nWhich evidence best supports this?",
            options: [
              "The character has many friends at school.",
              "The character finally shares their deepest secret, and for the first time feels truly known.",
              "The character lives in a nice house with a big family.",
              "The character is popular at school.",
            ],
            answer:
              "The character finally shares their deepest secret, and for the first time feels truly known.",
          },
          {
            prompt:
              "Theme: 'Power corrupts even well-intentioned people.'\nWhich evidence best supports this?",
            options: [
              "The king rules a large kingdom.",
              "A once-generous leader begins making increasingly self-serving decisions after gaining absolute authority.",
              "The main character dislikes their boss.",
              "The protagonist wins an election.",
            ],
            answer:
              "A once-generous leader begins making increasingly self-serving decisions after gaining absolute authority.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Theme Analysis Paragraph",
        instruction:
          "Write a paragraph (5–7 sentences) analysing how ONE theme is developed in a text you know well. Use the structure: state the theme, provide textual evidence, explain how the evidence develops the theme.",
        parentTip:
          "Model the structure before your child writes: 'The theme of... is developed when the character..., which shows that...' This scaffolding makes the writing task much more accessible.",
        prompts: [
          {
            text: "Write your theme analysis paragraph here:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Theme as Argument",
        content:
          "A theme is really an argument that an author is making about life — not with facts and logic, but with story and character. When George Orwell wrote Animal Farm, he was arguing something about political power and corruption. When Mem Fox wrote Wilfrid Gordon McDonald Partridge, she was arguing something about memory and what it means to truly know another person. Think about the books you love: what argument is each one making? Do you agree with it? Discuss one example with your parent, defending or challenging the author's 'argument'.",
      },
      {
        type: "sorting",
        title: "Sort: How Is This Theme Communicated?",
        instruction:
          "Sort each technique into how it communicates theme — directly or indirectly.",
        parentTip:
          "Most good literary theme communication is indirect — the reader arrives at the theme through experience rather than instruction.",
        columns: [
          "Direct Theme Communication",
          "Indirect Theme Communication",
        ],
        items: [
          { label: "A character says explicitly: 'I've learned that family comes first.'" },
          { label: "A character who valued wealth dies alone and unmourned." },
          { label: "The narrator tells us: 'This story is about the importance of kindness.'" },
          { label: "A recurring image of a locked door that is never opened." },
          { label: "A character discovers happiness only after giving something precious away." },
          { label: "The story ends with a lesson written below the final illustration." },
        ],
      },
      {
        type: "open-response",
        title: "Theme in a Poem",
        instruction:
          "Choose a poem (any length) and identify its central theme. Analyse how the poet communicates the theme in just a few lines.",
        parentTip:
          "Poetry compresses meaning intensely. A theme that takes a novel 300 pages to explore might be communicated in a poem in 14 lines. This compression is worth marvelling at — and analysing.",
        prompts: [
          {
            text: "Poem title and poet: ______________________________________________\n\nTheme (as a full statement): _______________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which line or image most powerfully communicates the theme? Quote it and explain:",
            type: "lines",
            lines: 3,
          },
          {
            text: "How does the poem's structure (length, line breaks, form) contribute to the theme?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Comparative Theme Analysis — Sentence Starters",
        instruction:
          "Fill in each blank with the best word or phrase to complete a comparative theme analysis sentence.",
        sentences: [
          {
            text: "Both texts explore the theme of identity; ___, they reach very different conclusions. [however / therefore / because]",
            blanks: ["however"],
          },
          {
            text: "While Text 1 presents courage as a public act, Text 2 ___ it as a deeply private, internal struggle. [portrays / ignores / removes]",
            blanks: ["portrays"],
          },
          {
            text: "___ both texts share a theme of belonging, the cultural contexts in which they are set lead to very different expressions of this theme. [Although / Because / Since]",
            blanks: ["Although"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Theme Discussion — Family Dinner Conversation",
        instruction:
          "Use a book, film, or TV show everyone in your family has experienced. As a family dinner conversation, discuss: what is the central theme? Does everyone agree?",
        parentTip:
          "Theme discussions are most valuable as genuine conversations where parents share their own interpretations and respond to their child's. Disagreement is productive — there is rarely one right answer.",
        suggestions: [
          "Choose a film, book, or TV show the whole family knows.",
          "Each person states what they think the central theme is — as a full sentence, not a single word.",
          "Discuss: which moments in the text most strongly support each view?",
          "Discuss: can a text have two equally valid central themes?",
          "What does the text's ending reveal about its central theme?",
        ],
      },

      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Consolidating Tip: How to Write a Strong Theme Comparison",
        content:
          "A strong comparative theme analysis does three things: (1) States the shared theme clearly. (2) Shows how EACH text develops the theme — with specific evidence. (3) Analyses the DIFFERENCE in treatment — not just 'they are different' but HOW and WHY they approach the same idea differently. The most insightful comparisons usually find a significant difference: one text sees hope where the other sees tragedy; one presents courage as individual, the other as collective; one questions whether the theme is achievable at all.",
      },
      {
        type: "open-response",
        title: "Extended Comparative Analysis",
        instruction:
          "Write an extended comparative analysis (8–10 sentences) of how the theme of identity is treated in two texts. Use specific evidence from each.",
        parentTip:
          "This is one of the most demanding tasks on the worksheet. Help your child plan it verbally first — point, evidence, analysis for Text 1, then the same structure for Text 2, then comparison.",
        prompts: [
          {
            text: "Text 1 and Text 2: _____________________________________________\n\nTheme of identity (as a specific statement): ________________________\n\nAnalysis:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "How Setting Develops Theme",
        instruction:
          "Setting is often more than just a backdrop — it can be a powerful carrier of theme. Choose a text where the setting actively develops the theme.",
        prompts: [
          {
            text: "Text and setting: ______________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Theme: ________________________________________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "How does the setting embody or develop the theme? Use one specific example:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Would the theme be as effectively communicated in a different setting? Explain:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Comparing Theme Treatments — Assessment Style",
        instruction:
          "Choose the best description of how two texts might treat the same theme differently.",
        questions: [
          {
            prompt:
              "Two texts both explore the theme 'courage requires sacrifice'. How might they treat this differently?",
            options: [
              "One text might celebrate sacrifice as heroic while the other questions whether it was necessary.",
              "Both texts would say exactly the same thing about sacrifice.",
              "They could not treat the theme differently if they share it.",
              "One text would ignore sacrifice entirely.",
            ],
            answer:
              "One text might celebrate sacrifice as heroic while the other questions whether it was necessary.",
          },
          {
            prompt:
              "What is the key skill in a comparative theme analysis?",
            options: [
              "Summarising both plots",
              "Identifying similar themes",
              "Analysing HOW and WHY two texts treat the same theme differently",
              "Listing the main characters",
            ],
            answer:
              "Analysing HOW and WHY two texts treat the same theme differently",
          },
        ],
      },
      {
        type: "open-response",
        title: "Theme and Cultural Context",
        instruction:
          "The same theme can be expressed very differently depending on the cultural context of a text. Compare how belonging is explored in an Australian text and a text from another culture.",
        parentTip:
          "This is one of the most meaningful conversations you can have with your child. The goal is to recognise that ideas about belonging, family, identity, and justice are shaped by culture — and that literature is one of the best ways to encounter perspectives different from your own.",
        prompts: [
          {
            text: "Australian text (title and any cultural context): ____________________\nHow belonging is explored:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Text from another culture (title, origin): _________________________\nHow belonging is explored:",
            type: "lines",
            lines: 3,
          },
          {
            text: "What differences in HOW belonging is understood can you identify between the two texts?",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "Complex Theme Concepts — True or False?",
        instruction:
          "These statements deal with more advanced aspects of theme analysis. Decide TRUE or FALSE.",
        statements: [
          {
            text: "An author's theme can contradict their character's beliefs — characters do not always represent the author's view.",
            answer: true,
          },
          {
            text: "Irony in a text always indicates the opposite of what the theme appears to be.",
            answer: false,
          },
          {
            text: "A text can subvert (undermine or challenge) a widely accepted theme by showing its limitations.",
            answer: true,
          },
          {
            text: "Reading historical texts through a modern lens can reveal themes that the original author may not have intended.",
            answer: true,
          },
          {
            text: "A text's theme is always the author's personal belief.",
            answer: false,
          },
        ],
        parentTip:
          "Statements 4 and 5 are worth discussing in depth — the idea that readers can find meanings in texts beyond the author's intention is central to modern literary theory.",
      },
      {
        type: "open-response",
        title: "Theme in Non-Fiction",
        instruction:
          "Non-fiction texts also develop themes. Find a non-fiction text — a documentary, essay, article, or memoir — and identify its central theme.",
        parentTip:
          "In non-fiction, 'theme' is more often called the 'central idea' or 'argument'. The same analytical skills apply: what claim about the world or human experience is this text making?",
        prompts: [
          {
            text: "Non-fiction text (title, format, subject): _________________________",
            type: "lines",
            lines: 1,
          },
          {
            text: "Central idea / theme (as a full statement): ________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "How does the text communicate this theme? (Through facts, personal stories, expert voices, structure?)",
            type: "lines",
            lines: 3,
          },
          {
            text: "How does comparing this to a fiction text on the same theme change your understanding of the theme?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Themes That Follow You",
        content:
          "Most readers find that the same one or two themes recur in the books they love most — the themes that matter most to them personally. For some readers it is belonging; for others it is justice or survival or love or identity. Think about the books you have loved most in your life so far. Is there a theme that keeps appearing? Discuss this with your parent. And then ask: why does this theme matter to you? What in your own life makes it resonate?",
      },
      {
        type: "open-response",
        title: "Design a Theme-Based Reading List",
        instruction:
          "Choose one theme. Design a reading list of five texts (books, poems, films, or picture books) that explore this theme from different angles. Explain why each text was chosen.",
        parentTip:
          "This is a creative and curatorial task. Help your child think across genres and forms — a picture book, a novel, a poem, a film, and a non-fiction text would make for a rich and varied list.",
        prompts: [
          {
            text: "Theme chosen (full statement): _________________________________\n\nText 1 (title, format, and brief reason): _______________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Text 2: ________________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Text 3: ________________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Text 4: ________________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Text 5: ________________________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "The Theme Conversation — A Family Activity",
        instruction:
          "Choose a book everyone in the family has read (even a picture book from childhood works well). Have each person express the theme as a full sentence. Then vote on which statement best captures the theme and discuss why.",
        parentTip:
          "This activity is rich with genuine literary thinking when parents participate fully, sharing their own readings. The act of disagreeing about theme and defending your interpretation is exactly what literary discussion should look like.",
        suggestions: [
          "Everyone reads or re-reads the chosen text independently (even if just for a few minutes).",
          "Each person writes their theme statement privately first.",
          "Share statements aloud — no judgement at this stage.",
          "Discuss: which statement is most precise? Most insightful? Most debatable?",
          "Agree on the best version together, or agree that two readings are both valid.",
        ],
      },

      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Extending Tip: Theme and Ideology",
        content:
          "At the most advanced level of analysis, themes reveal ideology — the value systems embedded in texts. A story that consistently rewards individual effort and punishes communal dependence is making an ideological claim about how society works. A story that presents the natural world as a source of spiritual renewal is making a claim about humanity's relationship with nature. As you analyse themes in extending tasks, ask: whose values does this theme reflect? And who might read this theme differently, based on their own culture or experience?",
      },
      {
        type: "open-response",
        title: "Ideological Analysis Through Theme",
        instruction:
          "Choose a classic text (any text widely considered part of the literary canon). Identify its central theme and then examine whose values or worldview this theme reflects.",
        parentTip:
          "This is a genuinely challenging task that many adults find difficult. Start by discussing: who wrote the text? When? From what cultural position? Whose stories are centred, and whose are marginalised?",
        prompts: [
          {
            text: "Text chosen: __________________________________________________\n\nCentral theme: _________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Whose values or worldview does this theme reflect? (Consider: the author's cultural background, historical period, and social position)",
            type: "box",
          },
          {
            text: "Who might read this theme differently? (Consider: readers from different cultures, historical periods, or social positions)",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Comparative Essay Introduction",
        instruction:
          "Write an essay introduction (5–7 sentences) for a comparative theme analysis of two texts you know well. Include: the shared theme, the texts' titles and authors, and a clear thesis about how they treat the theme differently.",
        parentTip:
          "This models the structure of secondary school literary essays. The introduction should not summarise the plots — it should set up the analytical argument.",
        prompts: [
          {
            text: "Two texts: ___________________________________________\nShared theme: ________________________________________________\n\nIntroduction:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Extended Theme Analysis — Assessment Style",
        instruction:
          "Choose the best answer for each question about advanced theme analysis.",
        questions: [
          {
            prompt:
              "What is the most important skill in advanced theme analysis?",
            options: [
              "Identifying which themes are in a text",
              "Explaining how theme is developed AND why the author's treatment is significant",
              "Summarising the plot",
              "Listing all the characters",
            ],
            answer:
              "Explaining how theme is developed AND why the author's treatment is significant",
          },
          {
            prompt:
              "A text can be described as 'subverting' a theme when:",
            options: [
              "The theme is stated clearly at the end",
              "The text challenges or undermines the expected version of a theme",
              "The theme is expressed through a symbol",
              "The theme matches the author's personal beliefs exactly",
            ],
            answer:
              "The text challenges or undermines the expected version of a theme",
          },
          {
            prompt:
              "When comparing how two authors treat the same theme, the most valuable insight is:",
            options: [
              "That both authors chose to write about it",
              "That both texts use the same techniques",
              "How the differences in treatment reveal different assumptions about human experience",
              "That the theme is universal",
            ],
            answer:
              "How the differences in treatment reveal different assumptions about human experience",
          },
        ],
      },
      {
        type: "open-response",
        title: "Subverting a Theme — Reading Against the Grain",
        instruction:
          "Sometimes texts challenge the expected version of a theme rather than confirming it. Find an example of a text that subverts or complicates a common theme.",
        parentTip:
          "Examples: a story about war that refuses to celebrate heroism; a story about family that shows family as a source of damage rather than support; a romance that argues love is not enough. This kind of reading requires intellectual bravery.",
        prompts: [
          {
            text: "Text and conventional theme it subverts: _______________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "How does the text subvert or complicate the expected version of this theme? Use specific evidence:",
            type: "box",
          },
          {
            text: "What does the text argue instead? What is its actual theme?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Full Comparative Essay — Two Paragraphs",
        instruction:
          "Write the two body paragraphs of a comparative theme essay (8–10 sentences each). Each paragraph should discuss one text's treatment of the shared theme. Use specific evidence and the Technique–Quote–Effect structure where relevant.",
        parentTip:
          "This is a substantial writing task. Help your child plan each paragraph before writing — a five-point dot-point plan for each paragraph will make the writing much more fluent.",
        prompts: [
          {
            text: "Body paragraph 1 (Text 1's treatment of the theme):",
            type: "box",
          },
          {
            text: "Body paragraph 2 (Text 2's treatment — with comparison to Text 1):",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: What Makes a Great Theme?",
        instruction:
          "Sort each description into 'Feature of a Strong Theme Statement' or 'Feature of a Weak Theme Statement'.",
        columns: ["Strong Theme Statement", "Weak Theme Statement"],
        items: [
          { label: "Makes a specific claim about human experience" },
          { label: "Is just a single word like 'love'" },
          { label: "Could be debated or challenged" },
          { label: "Summarises the plot" },
          { label: "Acknowledges complexity or nuance" },
          { label: "States an obvious, uncontroversial truth" },
          { label: "Connects to a universal human concern" },
          { label: "Is stated as a simple moral lesson" },
        ],
      },
      {
        type: "open-response",
        title: "Final Project: Theme Log Reflection",
        instruction:
          "Review all the texts you have discussed in this worksheet. Write a 6–8 sentence reflection: which theme has appeared most across different texts? What does this suggest about universal human concerns?",
        parentTip:
          "This synthesis reflection is the most mature task on the worksheet. Support your child in looking back across ALL the texts discussed and finding patterns, not just analysing one text in isolation.",
        prompts: [
          {
            text: "Reflection on recurring themes across the texts I have discussed:",
            type: "box",
          },
          {
            text: "What does the recurrence of this theme in texts from different times and cultures suggest about human experience?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Theme Journal — One Month Challenge",
        instruction:
          "For one month, keep a theme journal. For every book, film, poem, or significant TV episode you encounter, write one theme statement. At the end of the month, look for patterns.",
        parentTip:
          "The habit of articulating themes in everything you encounter is one of the most powerful reading and thinking habits that can be developed at Year 6. Help your child maintain the journal by asking once a week: what did you add this week?",
        suggestions: [
          "Keep the journal beside your reading books.",
          "For every text encountered, write: title, type, and theme statement.",
          "At the end of the month, count how many different themes appeared.",
          "Identify the theme that appeared most often.",
          "Discuss: what does your personal theme log reveal about the stories our culture tells and values?",
        ],
      },

      // ── EXTENDING: Activities 56–100
      {
        type: "tip",
        title: "Tip: Theme Statements vs Topic Labels",
        content:
          "A topic label is just a word: love, loss, courage. A theme statement is a complete sentence that makes a claim: 'Love requires sacrifice.' The difference matters because only a theme statement can be supported with evidence and discussed with depth. Always push from topic to theme statement.",
      },
      {
        type: "fill-in-blank",
        title: "Turn Topic Labels into Theme Statements",
        instruction:
          "Complete each sentence to turn the topic label into a full theme statement.",
        parentTip:
          "This is a foundational literacy skill that transforms vague responses into analytical claims. Resist accepting one-word theme answers.",
        sentences: [
          {
            text: "Topic: Belonging. Theme statement: True belonging requires _____.",
            blanks: ["[student answer varies — e.g. accepting others as they are]"],
          },
          {
            text: "Topic: Power. Theme statement: Power corrupts those who _____.",
            blanks: ["[student answer varies — e.g. prioritise it over people]"],
          },
          {
            text: "Topic: Identity. Theme statement: Identity is shaped more by _____ than by where you were born.",
            blanks: ["[student answer varies — e.g. choices and community]"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Which is a Theme Statement?",
        instruction:
          "Choose the option that is a proper theme statement (not just a topic label or plot summary).",
        parentTip:
          "Distinguishing theme from plot and from topic is a Year 6 benchmark skill in the Australian Curriculum.",
        questions: [
          {
            prompt: "Which is a theme statement?",
            options: [
              "Friendship",
              "The boy had a best friend.",
              "True friendship is tested and proven in moments of difficulty.",
              "The story is about two friends.",
            ],
            answer: "True friendship is tested and proven in moments of difficulty.",
          },
          {
            prompt: "Which is a theme statement?",
            options: [
              "Courage and fear",
              "Courage is not the absence of fear but the decision to act despite it.",
              "The character was afraid but continued anyway.",
              "The theme of the book is bravery.",
            ],
            answer: "Courage is not the absence of fear but the decision to act despite it.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Support a Theme Statement with Evidence",
        instruction:
          "Choose a theme statement from a text you know well. Write a paragraph that supports it with three pieces of evidence from the text — events, character choices, or quotations.",
        parentTip:
          "Evidence-based theme discussion is the bridge between reading comprehension and literary analysis. Encourage your child to name specific events rather than describing them vaguely.",
        prompts: [
          {
            text: "Theme statement and text:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Supporting evidence paragraph (three pieces of evidence):",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Universal Themes by Category",
        instruction:
          "Sort these theme statements under the broad category they best represent.",
        parentTip:
          "Categorising themes builds conceptual organisation — an important analytical skill. There may be legitimate disagreement about placement; value the discussion.",
        columns: ["Identity and Belonging", "Power and Justice", "Love and Loss", "Courage and Fear"],
        items: [
          { label: "Those who hold power are often blind to its effects on others." },
          { label: "We do not know who we are until we are tested." },
          { label: "Love is most meaningful when it requires sacrifice." },
          { label: "To belong is to risk losing the self that makes belonging worth wanting." },
          { label: "Fear is a teacher, not an enemy." },
          { label: "Justice delayed is justice denied." },
          { label: "Grief is love with nowhere to go." },
          { label: "Identity is not fixed but continuously made." },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Themes Across Texts",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "A text can have more than one theme.",
            answer: true,
          },
          {
            text: "If two texts share the same theme, they must be in the same genre.",
            answer: false,
          },
          {
            text: "Theme is always explicitly stated by a character or narrator.",
            answer: false,
          },
          {
            text: "A reader's own experience can influence how they interpret a theme.",
            answer: true,
          },
          {
            text: "Themes in ancient stories are irrelevant to modern readers.",
            answer: false,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Symbols and How They Carry Theme",
        content:
          "A symbol is an object, place, or event that represents something beyond itself. Symbols are one of the most powerful ways authors communicate theme without stating it. A key in a story might represent freedom, a storm might represent conflict, water might represent change or birth. Noticing symbols is an advanced reading skill — and using them in your own writing is a craft skill.",
      },
      {
        type: "matching",
        title: "Match: Symbol to Its Likely Theme",
        instruction:
          "Match each symbol to the theme it most commonly represents in literature.",
        parentTip:
          "Symbols are not fixed — the same symbol can represent different things in different contexts. Use this activity to open discussion rather than establish rigid rules.",
        left: ["A locked door", "A rising sun", "A decaying house", "A journey", "A bridge"],
        right: [
          "Personal growth, self-discovery, or transformation",
          "Connection, transition between two states or worlds",
          "The past haunting the present, decline",
          "Hope, new beginning, or renewal",
          "Restriction, secrecy, or unresolved conflict",
        ],
      },
      {
        type: "open-response",
        title: "Identify and Interpret a Symbol",
        instruction:
          "From a book you have read, identify one symbol (an object, place, or recurring image). Explain what it represents and how it connects to the text's theme.",
        parentTip:
          "Symbol identification requires inference beyond the literal text. If your child struggles, guide them to notice what appears repeatedly or at significant moments.",
        prompts: [
          {
            text: "Symbol identified (text and symbol):",
            type: "lines",
            lines: 2,
          },
          {
            text: "What the symbol represents and how it connects to theme:",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Theme in Poetry",
        instruction:
          "Themes appear powerfully in poetry, often in a very compressed form. Answer these questions about theme in poetry.",
        parentTip:
          "Poetry is a compact and intense vehicle for theme. Reading poetry for theme builds close-reading skills that strengthen all literary analysis.",
        questions: [
          {
            prompt: "How is theme typically communicated in a short poem compared to a novel?",
            options: [
              "More explicitly, because poems are shorter",
              "Through imagery, word choice, and structure in a more concentrated way",
              "Through plot events and character development",
              "Through dialogue between characters",
            ],
            answer:
              "Through imagery, word choice, and structure in a more concentrated way",
          },
          {
            prompt: "A poem that describes a dead tree in winter to communicate the theme of grief is using:",
            options: [
              "A logical fallacy",
              "An extended metaphor",
              "Onomatopoeia",
              "A rhetorical question",
            ],
            answer: "An extended metaphor",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Themed Short Story Opening",
        instruction:
          "Choose one of these theme statements and write the opening paragraph of a story that will explore it. DO NOT state the theme — communicate it through character, setting, or event.",
        parentTip:
          "Showing theme without stating it is one of the highest craft achievements. Encourage your child to resist the urge to write: the theme of this story is...",
        prompts: [
          {
            text: "Theme statements to choose from: (a) Home is where you choose to return. (b) The things we cannot say are often the most important. (c) The cost of silence is paid by others.",
            type: "lines",
            lines: 1,
          },
          {
            text: "My story opening that communicates the theme without stating it:",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Direct vs Implied Theme",
        instruction:
          "Some texts state their theme explicitly; others communicate it indirectly. Sort these into Direct or Implied Theme.",
        columns: ["Theme Stated Directly", "Theme Implied (Indirect)"],
        items: [
          { label: "The moral of the fable: 'Slow and steady wins the race.'" },
          { label: "A novel in which a refugee's difficult journey ends in a new home — no theme stated." },
          { label: "An essay that concludes: 'Democracy requires participation to survive.'" },
          { label: "A poem that describes the sea's relentlessness — theme inferred by the reader." },
        ],
      },
      {
        type: "open-response",
        title: "Compare Theme in Two Texts",
        instruction:
          "Choose two texts you have read this year (they can be from any subject). Write a short paragraph comparing how they explore a shared theme, identifying what each text reveals that the other does not.",
        parentTip:
          "Cross-text comparison is a skill that appears in NAPLAN and high school assessments. Building this capacity at Year 6 creates a strong advantage.",
        prompts: [
          {
            text: "The two texts and the shared theme:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Comparison paragraph — what each text reveals about the theme that the other does not:",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Symbols and Themes",
        instruction: "Mark each statement True or False.",
        parentTip:
          "These statements address misconceptions about symbolic reading. Aim for discussion — students should be able to explain why each answer is correct.",
        statements: [
          {
            text: "A symbol must be explicitly labelled in the text for it to function as a symbol.",
            answer: false,
          },
          {
            text: "Different readers can legitimately interpret the same symbol in different ways.",
            answer: true,
          },
          {
            text: "A recurring image in a text is more likely to be significant than one that appears only once.",
            answer: true,
          },
          {
            text: "A theme statement should be a question, not a sentence.",
            answer: false,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Theme Analysis Vocabulary",
        instruction:
          "Fill in the blank with the correct analytical term.",
        parentTip:
          "Metalanguage for theme analysis allows students to write with precision in literary essays. These terms are introduced in Years 5–6 in the Australian Curriculum.",
        sentences: [
          {
            text: "A recurring idea or message that an author develops throughout a text is called a _____.",
            blanks: ["theme"],
          },
          {
            text: "When an author uses an object to represent an abstract idea, the object is called a _____.",
            blanks: ["symbol"],
          },
          {
            text: "A story in which the surface narrative also represents a deeper moral or political meaning is called an _____.",
            blanks: ["allegory"],
          },
          {
            text: "The overall feeling or emotional quality of a text is called its _____.",
            blanks: ["mood"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Analytical Paragraph: Theme and Evidence",
        instruction:
          "Write a formal analytical paragraph about theme in a text of your choice. Use TEEL structure: Topic sentence (theme claim), Evidence (specific reference to the text), Explanation (how the evidence supports the theme), Link (to the author's broader purpose).",
        parentTip:
          "This task integrates theme analysis with formal writing structure — a high-level synthesis task. Take time to read the completed paragraph together.",
        prompts: [
          {
            text: "My analytical paragraph about theme:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Personal Connection: A Theme That Resonates",
        instruction:
          "Choose a theme you have encountered in your reading that connects to your own experience or values. Write a reflection (5–7 sentences) on why this theme matters to you personally.",
        parentTip:
          "Personal connection to theme is the deepest form of literary engagement. A student who can articulate why a theme matters to them personally has become a genuine reader.",
        prompts: [
          {
            text: "Theme chosen and the text it comes from:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Why this theme resonates with me personally:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Final Assessment: Themes Across Texts",
        instruction:
          "Final assessment — choose the best answer to demonstrate your mastery of thematic analysis.",
        questions: [
          {
            prompt: "What is the best definition of a theme in literature?",
            options: [
              "The main character's problem",
              "A recurring universal idea or message about human experience explored through the text",
              "The setting and time period of the story",
              "A summary of the plot",
            ],
            answer:
              "A recurring universal idea or message about human experience explored through the text",
          },
          {
            prompt: "Why do authors use symbols to communicate themes?",
            options: [
              "Because they have run out of words",
              "Because symbols are decorative",
              "Because symbols allow abstract ideas to be communicated through concrete images, making them more powerful and resonant",
              "Because symbols are required by grammar rules",
            ],
            answer:
              "Because symbols allow abstract ideas to be communicated through concrete images, making them more powerful and resonant",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Themes in Non-Fiction",
        content:
          "Themes are not just for stories. Non-fiction texts — documentaries, essays, speeches, memoirs — also explore themes. A documentary about climate change might explore themes of responsibility, short-term thinking versus long-term consequence, or the relationship between humans and nature. When you read non-fiction, ask: what recurring idea is this text wrestling with?",
      },
      {
        type: "open-response",
        title: "Find a Theme in Non-Fiction",
        instruction:
          "Choose a documentary, essay, memoir, or non-fiction book you have encountered. Identify and articulate its central theme in a theme statement, then give two specific examples from the text that support it.",
        parentTip:
          "Extending theme analysis to non-fiction broadens the skill beyond literature. This also connects English to History, Science, and Geography — all of which involve thematic non-fiction texts.",
        prompts: [
          {
            text: "Non-fiction text and medium (documentary, essay, etc.):",
            type: "lines",
            lines: 1,
          },
          {
            text: "Theme statement:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Two specific examples from the text that develop the theme:",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Theme in Different Text Types",
        instruction:
          "Sort these text types by how explicitly they typically state their theme.",
        columns: ["States theme explicitly", "Implies theme through narrative", "Theme emerges through argument"],
        items: [
          { label: "A fable ('The moral of the story is...')" },
          { label: "A fantasy novel exploring chosen family" },
          { label: "A persuasive essay arguing for environmental action" },
          { label: "A realistic fiction novel about grief" },
          { label: "A TED Talk on the importance of belonging" },
          { label: "A poem about nature and loss" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Theme in Australian Literature",
        instruction:
          "Australian literature has distinctive recurring themes. Choose the best answer.",
        parentTip:
          "Connecting theme analysis to Australian literature is an ACARA priority. Australian texts provide culturally relevant contexts for exploring identity, belonging, and place.",
        questions: [
          {
            prompt: "Which theme is particularly prominent in Australian Indigenous stories and literature?",
            options: [
              "The importance of industrial progress",
              "The deep connection between people and Country (land, culture, and spiritual life)",
              "The superiority of urban over rural life",
              "The rejection of tradition",
            ],
            answer:
              "The deep connection between people and Country (land, culture, and spiritual life)",
          },
          {
            prompt: "Australian literature often explores the theme of belonging in relation to:",
            options: [
              "Only city life",
              "A sense of place — the physical landscape and its relationship to identity",
              "Exclusively European heritage",
              "Technology and the future",
            ],
            answer:
              "A sense of place — the physical landscape and its relationship to identity",
          },
        ],
      },
      {
        type: "open-response",
        title: "Thematic Discussion: A Story About Your Place",
        instruction:
          "Think about the place where you live — the landscape, the community, the culture. If you were to write a story set in this place, what theme would emerge naturally from that setting? Discuss and write 4–5 sentences.",
        parentTip:
          "Place-based thematic thinking connects English to the student's lived experience. This conversation often yields genuine and moving insights about what it means to be at home somewhere.",
        prompts: [
          {
            text: "The theme that would emerge from a story set in my place, and why:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Theme in Famous Texts",
        instruction:
          "Fill in the blank with the theme most commonly associated with each famous text.",
        parentTip:
          "Knowledge of canonical texts and their themes is part of cultural literacy. These examples also show that great themes are universal.",
        sentences: [
          {
            text: "Romeo and Juliet by Shakespeare explores the theme of _____ overcoming social barriers — and its tragic consequences.",
            blanks: ["love"],
          },
          {
            text: "The Wizard of Oz explores the theme that _____ is found within, not in any distant magical place.",
            blanks: ["what we seek"],
          },
          {
            text: "Charlotte's Web by E. B. White explores the theme of _____ and the lengths it leads us to for those we love.",
            blanks: ["selfless friendship"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: The Opening of a Story About a Universal Theme",
        instruction:
          "Choose a universal theme: courage, fairness, belonging, or the power of kindness. Write the opening two paragraphs of a story that will explore this theme — without naming the theme. Set the scene and introduce a character in a situation that will develop the theme.",
        parentTip:
          "Writing to explore a theme — rather than to demonstrate technique — is the highest form of creative engagement with this unit's content. Encourage genuine investment in the story.",
        prompts: [
          {
            text: "Theme chosen (do not name it in the story itself):",
            type: "lines",
            lines: 1,
          },
          {
            text: "Opening two paragraphs of my story:",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Deeper Theme Analysis",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "A text with a sad ending can have an optimistic theme.",
            answer: true,
          },
          {
            text: "Themes in children's books are always simpler than themes in adult literature.",
            answer: false,
          },
          {
            text: "A reader can identify a theme even when the author did not consciously intend it.",
            answer: true,
          },
          {
            text: "If two critics identify different themes in the same text, one of them must be wrong.",
            answer: false,
          },
          {
            text: "The setting of a story can itself become a vehicle for theme.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Theme Across Cultures: Comparing Two Different Traditions",
        instruction:
          "Compare how two different cultural traditions tell stories about the same theme — for example, belonging, loss, or the relationship between humans and nature. These can be stories you have read, films you have seen, or oral traditions you know.",
        parentTip:
          "Cross-cultural theme comparison is an enriching activity that builds intercultural understanding alongside literary analysis skills. Both traditions should be approached with equal respect.",
        prompts: [
          {
            text: "Theme chosen and two cultural traditions being compared:",
            type: "lines",
            lines: 2,
          },
          {
            text: "How each tradition approaches this theme — similarities and differences:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Year Review: Themes in Everything I Have Read",
        instruction:
          "Look back over everything you have read this year — books, articles, stories, poems. Identify the three themes that appeared most often across your reading. What does this tell you about the stories our culture tells?",
        parentTip:
          "A thematic year review synthesises reading across all subjects and formats. This is one of the most powerful metacognitive activities in the curriculum.",
        prompts: [
          {
            text: "The three themes that appeared most in my reading this year:",
            type: "lines",
            lines: 3,
          },
          {
            text: "What the recurrence of these themes might suggest about our culture:",
            type: "box",
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Theme to a Text That Explores It",
        instruction:
          "Match each theme to a well-known text that explores it. (Use whatever texts you know best — these are examples.)",
        parentTip:
          "This matching activity can be adapted to texts the student knows personally. Adjust the right column to reflect texts your child has actually encountered.",
        left: [
          "The corrupting effect of absolute power",
          "The importance of chosen family over biological family",
          "Resilience in the face of injustice",
          "The relationship between humans and the natural world",
          "Growing up and losing innocence",
        ],
        right: [
          "My Side of the Mountain or Hatchet",
          "A novel or film about refugees or civil rights struggles",
          "Lord of the Flies or a political allegory",
          "Any coming-of-age story",
          "Roald Dahl's Charlie and the Chocolate Factory or a found-family story",
        ],
      },
      {
        type: "open-response",
        title: "Final Reflection: What Themes Have Taught Me",
        instruction:
          "Write a final reflection (6–8 sentences) on what studying themes across texts has taught you — about reading, about literature, and about the world.",
        parentTip:
          "This final reflection is the culmination of the entire unit. Value depth and honesty over correct answers. A student who can articulate what they have learned about the world through literature is a genuine reader.",
        prompts: [
          {
            text: "My final reflection on themes and what they have taught me:",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Reading for Theme vs Reading for Plot",
        content:
          "Most readers read for plot — what happens next? Mature literary readers also read for theme — what is this story really about? Both modes are valuable, and the best reading experiences involve both. When you have finished a book, resist putting it down immediately. Sit for a moment and ask: what did this author want me to think or feel about being human? That moment of reflection is when theme becomes real.",
      },
      {
        type: "open-response",
        title: "Develop a Theme: From Statement to Essay",
        instruction:
          "Choose one theme statement from your work in this unit. Develop it into a short essay plan: an introduction with a thesis (your theme statement), three pieces of evidence from different texts or text types, and a conclusion. You do not need to write the essay — just the plan.",
        parentTip:
          "Planning a thematic essay brings together literary analysis, argument structure, and cross-text comparison — all key Year 6 English outcomes. The plan itself is valuable whether or not the essay is written.",
        prompts: [
          {
            text: "Theme statement (essay thesis):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evidence from text 1 (with text name):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evidence from text 2 (with text name):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evidence from text 3 (with text name):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Conclusion approach:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Theme Development Through a Story",
        instruction:
          "Sort these moments from a story about the theme of courage into the order in which the theme is most likely to develop.",
        parentTip:
          "Understanding how theme develops through narrative structure (not just at the end) is a sophisticated reading skill.",
        columns: ["Theme Introduced", "Theme Tested", "Theme Complicated", "Theme Resolved"],
        items: [
          { label: "Character faces a choice that requires them to act despite fear" },
          { label: "Character appears brave on the surface but we sense hidden doubt" },
          { label: "Character's courageous act has unexpected consequences" },
          { label: "Character understands what courage truly meant in their experience" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Theme vs Message: What Is the Difference?",
        instruction:
          "A theme is a complex, nuanced idea. A moral or message is a simple instructional lesson. Choose the best answer.",
        questions: [
          {
            prompt: "Which best describes the difference between theme and moral/message?",
            options: [
              "They are the same thing — different words for the same concept",
              "A moral tells you what to do; a theme invites you to explore a complex idea",
              "A theme is found in children's books; a moral is found in adult literature",
              "A moral is more sophisticated than a theme",
            ],
            answer:
              "A moral tells you what to do; a theme invites you to explore a complex idea",
          },
          {
            prompt: "Which is a theme statement (rather than a moral)?",
            options: [
              "Be kind to others.",
              "Do not judge a book by its cover.",
              "Prejudice blinds us to the humanity of those we fear.",
              "Work hard and you will succeed.",
            ],
            answer: "Prejudice blinds us to the humanity of those we fear.",
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Themes in Australian Stories",
        instruction: "Mark each statement True or False.",
        parentTip:
          "These statements connect thematic study to the Australian context — an ACARA priority. Discuss any that prompt curiosity — they are invitations to deeper reading.",
        statements: [
          {
            text: "Australian children's literature often explores themes of belonging, identity, and the relationship with the land.",
            answer: true,
          },
          {
            text: "Indigenous Australian storytelling traditions do not address universal themes like loss, courage, and belonging.",
            answer: false,
          },
          {
            text: "A theme identified in a text from another culture cannot be relevant to Australian readers.",
            answer: false,
          },
          {
            text: "Reading texts from multiple cultural traditions broadens our understanding of universal themes.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Poem That Expresses a Theme",
        instruction:
          "Write a short poem (6–10 lines, any style) that expresses a theme without naming it directly. Use imagery, metaphor, and careful word choice to let the theme emerge.",
        parentTip:
          "Poetry is the most compressed vehicle for theme. This creative task integrates thematic thinking with poetic craft — one of the most enriching activities in the English curriculum.",
        prompts: [
          {
            text: "Theme I am expressing (keep this to yourself — see if a reader can identify it):",
            type: "lines",
            lines: 1,
          },
          {
            text: "My poem:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Thematic Reading Recommendation",
        instruction:
          "Write a 4–5 sentence reading recommendation for a book you loved, focusing entirely on its theme rather than its plot. Do not give away what happens — focus on the idea the book explores and why a reader might want to grapple with that idea.",
        parentTip:
          "A theme-focused book recommendation requires your child to articulate the book's significance beyond entertainment. This is a genuine literary skill.",
        prompts: [
          {
            text: "My thematic reading recommendation:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Theme Vocabulary Final Review",
        instruction:
          "Fill in the blank with the correct term to complete each sentence about theme.",
        sentences: [
          {
            text: "A theme statement is a complete sentence that makes a claim about human experience, rather than just a topic _____.",
            blanks: ["label"],
          },
          {
            text: "An object in a text that represents an abstract idea beyond itself is called a _____.",
            blanks: ["symbol"],
          },
          {
            text: "A story in which the narrative functions on a literal level and a deeper symbolic level is called an _____.",
            blanks: ["allegory"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Discussion: What Is Literature For?",
        instruction:
          "In 5–6 sentences, give your view on this question: what is literature for? Why do humans tell stories? How does studying theme help answer this question?",
        parentTip:
          "This open philosophical question invites genuine reflection. There is no right answer. Value the reasoning and the authenticity of the response.",
        prompts: [
          {
            text: "My view on what literature is for and the role of theme:",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Family Theme Mapping",
        instruction:
          "As a family, list three films or stories everyone has seen or read. For each, write a theme statement. Discuss: do the themes say anything about what your family values or finds meaningful?",
        parentTip:
          "Family theme mapping is a simple but rich activity that reveals shared literary experiences and values. It also shows students that theme awareness is a life skill, not just a school task.",
        suggestions: [
          "List three films or stories everyone knows.",
          "Each person writes a theme statement for each.",
          "Compare your theme statements — are they the same or different?",
          "Discuss: which theme meant the most to you personally? Why?",
          "Discuss: does the recurrence of certain themes tell you something about your family?",
        ],
      },
      {
        type: "true-false",
        title: "True or False: What Makes a Great Theme?",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "A great theme is one that only applies to a specific time period or culture.",
            answer: false,
          },
          {
            text: "The best themes are complex enough to allow multiple valid interpretations.",
            answer: true,
          },
          {
            text: "A theme must be explicitly stated to be a theme.",
            answer: false,
          },
          {
            text: "A reader's personal connection to a theme can make a text more meaningful to them.",
            answer: true,
          },
          {
            text: "Short texts like poems and fables cannot contain complex themes.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "My Most Important Reading This Year",
        instruction:
          "Write a paragraph about the most significant text you have read this year — not necessarily your favourite, but the one that made you think the most. What theme did it explore? What did it make you think about?",
        parentTip:
          "This final reflection is a genuine act of literary appreciation. A student who can articulate what a text made them think, and why, has developed a reading life. That is the deepest outcome of this unit.",
        prompts: [
          {
            text: "The most significant text I read this year and why it mattered:",
            type: "box",
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Theme to Its Expression in Different Genres",
        instruction:
          "The theme of loss appears in many genres. Match each genre to how it typically expresses this theme.",
        parentTip:
          "Understanding how genre shapes the expression of theme is an advanced literary concept. This activity prepares students for the genre analysis work of secondary English.",
        left: ["Elegy (poem of mourning)", "Fantasy novel", "Memoir", "Documentary film"],
        right: [
          "Personal loss is explored directly through the narrator's own remembered experience",
          "Loss is explored through the death of a beloved character and its effect on a community",
          "Loss is expressed through imagery, rhythm, and highly compressed emotional language",
          "Loss is explored through real people's stories, often paired with archival footage",
        ],
      },
      {
        type: "circle-correct",
        title: "Circle: Which Sentence Best Expresses a Theme?",
        instruction:
          "Circle the sentence that best functions as a theme statement for a story about identity.",
        questions: [
          {
            prompt: "Which best expresses a theme about identity?",
            options: [
              "The main character changes her hairstyle.",
              "Identity is not something we are born with but something we constantly make through choice.",
              "She had a difficult time at school.",
            ],
          },
          {
            prompt: "Which best expresses a theme about belonging?",
            options: [
              "The boy moved to a new school.",
              "True belonging requires accepting the risk of rejection.",
              "He eventually made some friends.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Masterclass Reflection: Choosing Your Theme",
        instruction:
          "Think about a novel, film or story that affected you deeply. In 4–5 sentences, describe what you believe its central theme is and explain precisely how the author communicated it — naming at least two specific story elements (character, event, setting, or symbol) that carried the theme.",
        parentTip:
          "The ability to articulate a theme's delivery mechanism is a higher-order skill. Encourage the student to be specific rather than vague ('the theme is friendship' → 'the theme is that friendship built on honesty survives hardship, shown through X and Y').",
        prompts: [
          {
            text: "The work I am reflecting on and its central theme:",
            type: "lines",
            lines: 2,
          },
          {
            text: "The two story elements that carry the theme and how they work:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: What Story Would You Tell?",
        content:
          "If you could write one story — any length, any genre, any form — what theme would you want to explore? Not what you think would sell or what sounds impressive, but what truth about being alive do you most urgently want to communicate through character and story? Discuss this with your parent. Then, if you are ready: write the first paragraph of that story.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "matching",
        title: "Match the Argument Component to Its Definition",
        instruction:
          "Draw a line to match each argument component to its correct definition.",
        parentTip:
          "These three components — claim, evidence, reasoning — are the building blocks of all arguments. Make sure your child can explain each one in their own words before proceeding.",
        left: ["Claim", "Evidence", "Reasoning", "Counter-argument", "Rebuttal"],
        right: [
          "The logical explanation connecting evidence to the claim",
          "The main position or assertion the writer is arguing",
          "Facts, statistics, examples, or expert opinions used to support the claim",
          "A response that refutes or challenges the counter-argument",
          "An opposing view that challenges the writer's position",
        ],
      },
      {
        type: "true-false",
        title: "Argument Evaluation Basics — True or False?",
        instruction:
          "Decide whether each statement is TRUE or FALSE.",
        parentTip:
          "Work through the first two together before your child continues. These foundations are important — argument evaluation is a skill that takes time to develop.",
        statements: [
          {
            text: "A claim is something the writer states as true and expects the reader to accept.",
            answer: true,
          },
          {
            text: "An unsupported claim is as convincing as a supported one.",
            answer: false,
          },
          {
            text: "Strong evidence should be specific, verifiable, and relevant to the claim.",
            answer: true,
          },
          {
            text: "Even if the evidence is strong, the reasoning connecting it to the claim can still be flawed.",
            answer: true,
          },
          {
            text: "An argument that uses only emotional language is always highly convincing.",
            answer: false,
          },
          {
            text: "A good argument acknowledges and addresses the opposing view.",
            answer: true,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Is This a Claim or a Fact?",
        instruction:
          "Distinguish between verifiable facts and claims (which require argument and evidence).",
        questions: [
          {
            prompt: "'Australia has the world's largest coral reef system.'",
            options: [
              "Claim — this is an opinion",
              "Fact — this is verifiable",
            ],
            answer: "Fact — this is verifiable",
          },
          {
            prompt: "'Australia should do more to protect the Great Barrier Reef.'",
            options: [
              "Claim — this is an opinion that requires argument",
              "Fact — this is verifiable",
            ],
            answer: "Claim — this is an opinion that requires argument",
          },
          {
            prompt: "'Year 6 students learn better with at least 60 minutes of outdoor play per day.'",
            options: [
              "Claim — this needs evidence to be convincing",
              "Fact — everyone knows this",
            ],
            answer: "Claim — this needs evidence to be convincing",
          },
          {
            prompt: "'The Earth orbits the Sun once every 365.25 days.'",
            options: ["Claim", "Fact — verifiable by measurement"],
            answer: "Fact — verifiable by measurement",
          },
        ],
      },
      {
        type: "sorting",
        title: "Strong Evidence vs Weak Evidence",
        instruction:
          "Sort each piece of evidence into 'Strong' or 'Weak' based on how specific, verifiable, and relevant it is.",
        parentTip:
          "Strong evidence can be checked: it names a source, a date, a number, or an expert. Weak evidence is vague, personal, or unverifiable.",
        columns: ["Strong Evidence", "Weak Evidence"],
        items: [
          { label: "A 2023 WHO report found that 1.6 billion people lack access to clean water." },
          { label: "Everyone knows that exercise is important." },
          { label: "The CSIRO estimates Australian CO2 emissions rose 2.5% in 2022–23." },
          { label: "My dad says homework is pointless." },
          { label: "A peer-reviewed study in The Lancet linked processed sugar to increased ADHD symptoms." },
          { label: "It is obvious that social media is harmful to teenagers." },
          { label: "ABS data shows youth unemployment reached 11.2% in Q3 2023." },
          { label: "I heard that phones make you dumber." },
        ],
      },
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
        type: "multiple-choice",
        title: "What Type of Evidence Is This?",
        instruction:
          "Identify the type of evidence used in each example.",
        questions: [
          {
            prompt: "'According to Professor Jane Smith, plastic pollution kills over one million seabirds annually.'",
            options: [
              "Personal anecdote",
              "Expert opinion with statistic",
              "General claim",
              "Emotional appeal",
            ],
            answer: "Expert opinion with statistic",
          },
          {
            prompt: "'When I was young, we walked to school every day and we were all healthier for it.'",
            options: [
              "Statistical data",
              "Expert opinion",
              "Personal anecdote",
              "Peer-reviewed research",
            ],
            answer: "Personal anecdote",
          },
          {
            prompt: "'A 2022 Australian Bureau of Statistics survey found that 68% of adults exercise less than the recommended weekly amount.'",
            options: [
              "Emotional appeal",
              "Vague generalisation",
              "Personal opinion",
              "Verified statistical data",
            ],
            answer: "Verified statistical data",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "The Argument Chain",
        instruction:
          "Fill in each blank with the correct label: claim, evidence, or reasoning.",
        sentences: [
          {
            text: "'We need more parks in our suburb.' — This is the ___.",
            blanks: ["claim"],
          },
          {
            text: "'A 2021 local council report found that our suburb has 40% fewer green spaces per resident than the state average.' — This is the ___.",
            blanks: ["evidence"],
          },
          {
            text: "'This means our community has far less access to the proven mental and physical health benefits of outdoor space than it should.' — This is the ___.",
            blanks: ["reasoning"],
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
        type: "true-false",
        title: "Types of Evidence — True or False?",
        instruction:
          "Read each statement about evidence types and decide TRUE or FALSE.",
        statements: [
          {
            text: "Anecdotal evidence (a personal story) can never be used in an argument.",
            answer: false,
          },
          {
            text: "Statistical evidence is strongest when it comes from a named, credible source.",
            answer: true,
          },
          {
            text: "A celebrity endorsing a product is an example of appeal to authority.",
            answer: true,
          },
          {
            text: "An appeal to authority is strongest when the authority is an expert in the relevant field.",
            answer: true,
          },
          {
            text: "An emotional appeal can be used honestly or as a manipulation technique.",
            answer: true,
          },
        ],
        parentTip:
          "Statement 1 is worth discussing — personal stories can open an argument or make it relatable, but they cannot stand alone as proof of a general claim.",
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
      {
        type: "tip",
        title: "Key Concept: The Three-Question Test",
        content:
          "When evaluating any argument — in reading, listening, or viewing — apply the three-question test: (1) WHAT is the writer claiming? (State the claim in your own words.) (2) WHAT evidence is offered? (Is it specific, verifiable, and relevant?) (3) DOES the evidence actually prove the claim? (Is the reasoning sound, or is there a logical gap?) A strong argument passes all three tests. A weak argument fails at least one. Practising this test on everything you read is the foundation of critical thinking.",
      },
      {
        type: "circle-correct",
        title: "Circle the Stronger Argument",
        instruction:
          "In each pair, circle the argument that is better supported.",
        parentTip:
          "Ask your child to explain WHY the stronger one is stronger — naming the specific quality of evidence that makes it better.",
        questions: [
          {
            prompt: "Which argument about exercise is better supported?",
            options: [
              "Exercise is important because it makes you feel good.",
              "The Australian Department of Health recommends 60 minutes of physical activity daily for children aged 5–17, citing improved mental health, bone density, and academic performance.",
            ],
          },
          {
            prompt: "Which argument about reading is better supported?",
            options: [
              "Reading books makes you smarter — everyone knows that.",
              "A Stanford University study found that reading literary fiction increases empathy and social cognition, as measured by the Reading the Mind in the Eyes test.",
            ],
          },
        ],
      },
      {
        type: "sorting",
        title: "Classify: Good Reasoning or Logical Fallacy?",
        instruction:
          "Sort each statement into 'Sound Reasoning' or 'Logical Fallacy'.",
        parentTip:
          "Logical fallacies are errors in reasoning. They appear frequently in advertising, politics, and everyday argument. Building the habit of spotting them is a lifelong critical thinking skill.",
        columns: ["Sound Reasoning", "Logical Fallacy"],
        items: [
          { label: "'Studies show that diets high in saturated fat correlate with increased heart disease rates — therefore, reducing saturated fat may reduce this risk.'" },
          { label: "'My grandfather smoked for 70 years and was healthy, so smoking can't be that bad.'" },
          { label: "'Three independent studies have reached the same conclusion — this increases confidence in the finding.'" },
          { label: "'You either support this policy, or you want crime to increase.'" },
          { label: "'This argument must be wrong — the person making it was once found lying about something else.'" },
          { label: "'The data shows a correlation; however, more research is needed to establish causation.'" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Name the Logical Fallacy",
        instruction:
          "Choose the correct name for the logical fallacy in each example.",
        questions: [
          {
            prompt: "'If we allow students to use phones at lunch, next they'll be using them all day, then in exams, then they'll never be able to function without them.'",
            options: [
              "Ad hominem",
              "False dichotomy",
              "Slippery slope",
              "Appeal to authority",
            ],
            answer: "Slippery slope",
          },
          {
            prompt: "'We shouldn't listen to Dr Chen's environmental research — she drives a petrol car.'",
            options: [
              "Slippery slope",
              "Ad hominem",
              "Straw man",
              "Circular reasoning",
            ],
            answer: "Ad hominem",
          },
          {
            prompt: "'This must be true because it has been shared a million times online.'",
            options: [
              "Appeal to popularity",
              "Ad hominem",
              "False dichotomy",
              "Slippery slope",
            ],
            answer: "Appeal to popularity",
          },
        ],
        parentTip:
          "Logical fallacies have formal names but the most important thing is recognising the PATTERN. Once your child can describe why a fallacy is wrong, the name is secondary.",
      },
      {
        type: "open-response",
        title: "Evaluate an Argument in Full",
        instruction:
          "Read a short argument text (your own choice or any provided extract) and complete a full three-question evaluation.",
        prompts: [
          {
            text: "Source and topic: ______________________________________________\n\nQ1 — What is the main CLAIM? (State it in your own words)",
            type: "lines",
            lines: 2,
          },
          {
            text: "Q2 — What EVIDENCE is offered? Is it specific, verifiable, and relevant?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Q3 — Does the evidence actually PROVE the claim? Is the reasoning sound?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Convincingness rating (1–5) and justification:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Correlation Is Not Causation",
        content:
          "One of the most common reasoning errors is confusing correlation with causation. Correlation means two things happen together or at the same time. Causation means one thing directly causes the other. Example: ice cream sales and drowning rates both rise in summer — but eating ice cream does not cause drowning. Both are caused by a third factor: hot weather. Whenever you read an argument that says 'X is linked to Y, therefore X causes Y,' apply this test: could both X and Y be caused by something else?",
      },
      {
        type: "home-activity",
        title: "Fact-Check the News",
        instruction:
          "Find one news story that makes a strong claim. Spend 10 minutes trying to verify the key facts using another source. Report back on what you found.",
        parentTip:
          "This activity develops real-world media literacy. Use credible sources: ABC News, The Guardian, BBC, or an official government site for comparison. The goal is not to find that the article is wrong — it is to practise the habit of checking.",
        suggestions: [
          "Find a news article that makes a specific factual claim (a statistic, a study result, a scientific finding).",
          "Search for the original source of the statistic or study.",
          "Does the secondary article accurately represent the original?",
          "Are there other reliable sources that agree or disagree?",
          "Report your findings: is the original claim well-supported?",
        ],
      },
      {
        type: "multiple-choice",
        title: "Identifying the Logical Gap",
        instruction:
          "In each argument, identify the logical gap — where the reasoning fails to connect the evidence to the claim.",
        questions: [
          {
            prompt:
              "Claim: 'Our school should have more sports time.'\nEvidence: 'Exercise improves fitness.'\nLogical gap:",
            options: [
              "No gap — the evidence clearly proves the claim.",
              "The evidence doesn't show that MORE school sports time specifically improves outcomes — many factors affect fitness.",
              "The claim is about a different topic than the evidence.",
              "There is no evidence at all.",
            ],
            answer:
              "The evidence doesn't show that MORE school sports time specifically improves outcomes — many factors affect fitness.",
          },
          {
            prompt:
              "Claim: 'Eating chocolate makes people happy.'\nEvidence: 'A study found people who eat chocolate report higher life satisfaction.'\nLogical gap:",
            options: [
              "The evidence directly proves the claim.",
              "Happier people might be MORE likely to eat chocolate — the causation could run the other way.",
              "There is no gap.",
              "The study is definitely wrong.",
            ],
            answer:
              "Happier people might be MORE likely to eat chocolate — the causation could run the other way.",
          },
        ],
      },
      {
        type: "true-false",
        title: "Evaluating Online Information — True or False?",
        instruction:
          "Decide whether each statement about evaluating online information is TRUE or FALSE.",
        statements: [
          {
            text: "A website with a professional appearance is always a reliable source.",
            answer: false,
          },
          {
            text: "The number of social media shares is a reliable indicator of whether a claim is true.",
            answer: false,
          },
          {
            text: "Academic journals and peer-reviewed research are generally more reliable than random websites.",
            answer: true,
          },
          {
            text: "A URL ending in .edu or .gov.au is more likely to represent an authoritative source.",
            answer: true,
          },
          {
            text: "If multiple unreliable sources repeat the same false claim, it becomes more true.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse a Social Media Argument",
        instruction:
          "Find an example of an argument made on social media (a post, a tweet, or a comment thread). Apply the three-question test to evaluate it.",
        parentTip:
          "This is one of the most relevant real-world applications of argument evaluation. Work through a real example together — the learning is richer with actual examples from your child's experience.",
        prompts: [
          {
            text: "Describe the claim being made: ___________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "What evidence (if any) is offered? Is it credible?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Is there a logical gap? Identify any fallacy or weakness in the reasoning:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Why might social media be a particularly risky place for weak arguments to spread?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Argument You Cannot Escape",
        content:
          "Every day you are presented with dozens of arguments you cannot escape: advertisements, news headlines, recommendations from algorithms, social media posts. Each one is trying to persuade you of something. Now that you know the three-question test, you have a tool to push back — not with anger or cynicism, but with clarity. Over the next week, notice three arguments you encounter that you would not normally stop to evaluate. Apply the three questions. What do you find?",
      },
      {
        type: "sorting",
        title: "Sort by Source Reliability",
        instruction:
          "Sort these sources from MOST reliable to LEAST reliable for evidence in a formal argument.",
        columns: ["Most Reliable", "Moderately Reliable", "Least Reliable"],
        items: [
          { label: "Peer-reviewed research published in an academic journal" },
          { label: "A Wikipedia article (no sources cited)" },
          { label: "An official government health department report" },
          { label: "A celebrity's tweet about health" },
          { label: "A news article from a reputable outlet citing expert sources" },
          { label: "An anonymous social media post with no sources" },
        ],
      },

      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Spot the Fallacy — Explain the Error",
        instruction:
          "Identify the logical fallacy in each argument and explain WHY it is a fallacy — what error of reasoning does it make?",
        prompts: [
          {
            text: "Argument: 'Politicians are all the same — they only care about themselves. So there's no point voting.'\n\nFallacy type and explanation:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Argument: 'This vaccine must be dangerous — the government is telling everyone to take it.'\n\nFallacy type and explanation:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Argument: 'Nine out of ten dentists recommend this toothpaste, so it must be best for your teeth.'\n\nFallacy type and explanation (consider: what questions should we ask about this statistic?):",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Argument Evaluation Vocabulary",
        instruction:
          "Fill in each blank with the correct term from the box: fallacy, premise, inference, assumption, bias.",
        sentences: [
          {
            text: "An argument that seems logical but contains an error in reasoning is called a logical ___.",
            blanks: ["fallacy"],
          },
          {
            text: "A conclusion drawn from evidence or reasoning is called an ___.",
            blanks: ["inference"],
          },
          {
            text: "An unstated belief that the argument depends on but does not prove is an ___.",
            blanks: ["assumption"],
          },
          {
            text: "When a writer consistently favours one viewpoint over another without acknowledging it, this is called ___.",
            blanks: ["bias"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify Bias in a Text",
        instruction:
          "Read each example and choose the best description of the bias present.",
        questions: [
          {
            prompt:
              "An article about the environmental impacts of mining only quotes mining company executives.",
            options: [
              "No bias — companies are the most reliable sources",
              "Source bias — only one perspective is represented",
              "Statistical bias",
              "No evidence of bias",
            ],
            answer: "Source bias — only one perspective is represented",
          },
          {
            prompt:
              "A health article describes the 'crisis' of obesity using photographs only of overweight people in isolated, unflattering poses.",
            options: [
              "No bias — photographs are neutral",
              "Confirmation bias",
              "Framing and selection bias — using visuals to reinforce a negative message",
              "Expert bias",
            ],
            answer:
              "Framing and selection bias — using visuals to reinforce a negative message",
          },
        ],
      },
      {
        type: "open-response",
        title: "Identify Hidden Assumptions",
        instruction:
          "Every argument rests on hidden assumptions — unstated beliefs the argument assumes are true. Identify the hidden assumption in each argument.",
        parentTip:
          "Hidden assumptions are the hardest part of argument analysis for students at this level. Work through the first example together, then let your child attempt the remaining ones.",
        prompts: [
          {
            text: "Argument: 'We need to make schools start later because teenagers need more sleep.'\n\nHidden assumption: _____________________________________________\n(Hint: what does the argument assume is in schools' power, and what does it assume about sleep and school start times?)",
            type: "lines",
            lines: 3,
          },
          {
            text: "Argument: 'If people just worked harder, they would not be in poverty.'\n\nHidden assumption: _____________________________________________",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Look for What Is Missing",
        content:
          "A strong evaluator of arguments does not just assess what is present in the text — they ask what is MISSING. Whose voice is absent? Which perspective has not been considered? What evidence was not cited? What alternative explanations were not explored? The gap in an argument is often where its real weakness lives. When you rate an argument, always include 'what is missing' as part of your evaluation.",
      },
      {
        type: "open-response",
        title: "What Is Missing From This Argument?",
        instruction:
          "Read each argument. Identify what perspective, evidence, or consideration is missing that would weaken or complicate the claim.",
        prompts: [
          {
            text: "Argument: 'Banning junk food advertising to children will reduce childhood obesity. Countries that have introduced such bans have seen obesity rates fall.'\n\nWhat is missing from this argument? What other factors should be considered?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Argument: 'Our new teaching approach has improved exam results by 15%. This proves it is superior to the old approach.'\n\nWhat is missing? What questions should we ask before accepting this conclusion?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Strong, Moderate, or Weak Argument?",
        instruction:
          "Sort each argument into Strong, Moderate, or Weak based on the quality of its claim, evidence, and reasoning.",
        parentTip:
          "Encourage your child to explain each placement — the classification itself is less important than the quality of reasoning behind it.",
        columns: ["Strong Argument", "Moderate Argument", "Weak Argument"],
        items: [
          { label: "'Everyone should exercise more.' (No evidence, no specific claim about who or what.)" },
          { label: "'A 2023 meta-analysis in The BMJ, reviewing 94 studies, found that 150 minutes of weekly moderate exercise reduces all-cause mortality by 31% in adults over 40.'" },
          { label: "'Exercise is good because it makes you healthier, and being healthier is good because you exercise more.'" },
          { label: "'Regular exercise reduces depression symptoms. In a controlled trial at UNSW, participants who exercised three times weekly reported 40% lower depression scores after 8 weeks.'" },
          { label: "'My personal trainer says exercise is the most important thing for health, and he looks great.'" },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Arguments on the Same Topic",
        instruction:
          "Find two short arguments on the same topic (for example, two opinion pieces or two letters to the editor). Evaluate and compare them using the three-question test.",
        parentTip:
          "ABC Opinion, letters to the editor in local newspapers, or The Conversation are ideal sources for pairs of opinion pieces on the same topic.",
        prompts: [
          {
            text: "Topic: ___________________________________________\nArgument 1 — source: _____ Claim: _____ Evidence quality: _____ Reasoning: _____",
            type: "box",
          },
          {
            text: "Argument 2 — source: _____ Claim: _____ Evidence quality: _____ Reasoning: _____",
            type: "box",
          },
          {
            text: "Which argument is stronger, and why? Be specific:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Argument You Changed Your Mind About",
        content:
          "Has an argument ever genuinely changed your mind? Not just given you new information, but actually shifted your position? Think about what made that argument convincing. Was it the evidence? The logic? A perspective you had not considered? Or an emotional appeal that made you feel something different about the issue? Discuss this with your parent. Understanding what changed YOUR mind is one of the most powerful ways to understand how arguments work — and how to evaluate them more critically in future.",
      },
      {
        type: "open-response",
        title: "Evaluate a Classic Logical Fallacy",
        instruction:
          "For each logical fallacy, explain the error in simple language that a Year 4 student could understand. Then give a real-world example.",
        prompts: [
          {
            text: "Slippery slope fallacy — simple explanation: _______________________\nReal-world example: ____________________________________________",
            type: "lines",
            lines: 3,
          },
          {
            text: "Ad hominem fallacy — simple explanation: _______________________\nReal-world example: ____________________________________________",
            type: "lines",
            lines: 3,
          },
          {
            text: "False dichotomy — simple explanation: _________________________\nReal-world example: ____________________________________________",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "Advanced Argument Evaluation — True or False?",
        instruction:
          "Read each statement and decide TRUE or FALSE.",
        statements: [
          {
            text: "Correlation between two events proves that one causes the other.",
            answer: false,
          },
          {
            text: "A text can contain both strong evidence AND flawed reasoning.",
            answer: true,
          },
          {
            text: "Identifying what an argument DOES NOT say is part of evaluating it critically.",
            answer: true,
          },
          {
            text: "An emotionally compelling argument is always a logically strong one.",
            answer: false,
          },
          {
            text: "The most reliable arguments use a variety of evidence types, not just one.",
            answer: true,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Writing About Argument Weaknesses",
        instruction:
          "Fill in each blank to complete a sentence that critiques an argument's weakness.",
        sentences: [
          {
            text: "The argument uses only one study as evidence, which ___ the claim because a single study may not be representative. [weakens / strengthens]",
            blanks: ["weakens"],
          },
          {
            text: "While the statistic is striking, the author fails to ___ whether other factors could explain the result. [consider / ignore]",
            blanks: ["consider"],
          },
          {
            text: "The argument assumes that all students learn best in the same way, which is an ___ assumption that is not supported by evidence. [unreasonable / obvious]",
            blanks: ["unreasonable"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Argument Audit — A Week of Critical Reading",
        instruction:
          "For one week, keep a log of three arguments you encounter each day (from news, social media, advertisements, or conversations). For each, note: the claim, the evidence offered (if any), and any logical flaws.",
        parentTip:
          "Do this together each evening — it becomes a shared critical thinking habit. The goal is not to be sceptical of everything but to engage consciously with arguments rather than absorbing them passively.",
        suggestions: [
          "Use a small notebook or a phone note for your log.",
          "Note: where did the argument come from? What was the claim?",
          "Did the argument use evidence? What kind?",
          "Did you spot any logical fallacies?",
          "At the end of the week, discuss: which was the strongest argument you encountered? Which was the weakest?",
        ],
      },

      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Consolidating Tip: Evaluating Arguments in Formal Writing",
        content:
          "When you write a formal evaluation of an argument — in a school task, a debate, or a critical essay — structure your evaluation around three sections: (1) What the argument does well (claim clarity, evidence quality, logical structure). (2) What the argument's weaknesses are (missing perspectives, logical gaps, fallacies, unsupported assumptions). (3) Your overall verdict with a justified rating. This structure ensures your evaluation is comprehensive and demonstrates genuine critical thinking, not just summary.",
      },
      {
        type: "open-response",
        title: "Write a Formal Argument Evaluation",
        instruction:
          "Find a short opinion piece (4–8 paragraphs) and write a structured evaluation following the three-section format: strengths, weaknesses, verdict.",
        parentTip:
          "This is the most demanding evaluation task so far. Help your child read the piece twice: first for understanding, second for analytical assessment. Then draft the three sections in order.",
        prompts: [
          {
            text: "Article title and source: _______________________________________\n\nSection 1 — Strengths of the argument:",
            type: "box",
          },
          {
            text: "Section 2 — Weaknesses of the argument:",
            type: "box",
          },
          {
            text: "Section 3 — Overall verdict (rating 1–5) and justification:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Assessment-Style Argument Questions",
        instruction:
          "Answer these questions as in a reading comprehension assessment.",
        questions: [
          {
            prompt:
              "An argument claims 'school uniforms reduce bullying' and provides a statistic that bullying reports fell by 20% at three schools after uniforms were introduced. What additional evidence would MOST strengthen this claim?",
            options: [
              "A famous person agreeing that uniforms are a good idea",
              "A comparison with schools that did not introduce uniforms, to rule out other factors",
              "More schools that also reported a fall in bullying after introducing uniforms",
              "A survey asking students whether they like uniforms",
            ],
            answer:
              "A comparison with schools that did not introduce uniforms, to rule out other factors",
          },
          {
            prompt:
              "Which of the following best describes a 'logical fallacy'?",
            options: [
              "A piece of evidence that is very specific",
              "An error in reasoning that makes an argument seem logical but is actually flawed",
              "A fact that has not been verified",
              "A very strong piece of evidence",
            ],
            answer:
              "An error in reasoning that makes an argument seem logical but is actually flawed",
          },
          {
            prompt:
              "What is the main purpose of evaluating an argument critically?",
            options: [
              "To prove the argument is wrong",
              "To agree with everything the author says",
              "To assess whether the claim is well-supported by evidence and sound reasoning",
              "To find the most emotional words",
            ],
            answer:
              "To assess whether the claim is well-supported by evidence and sound reasoning",
          },
        ],
      },
      {
        type: "open-response",
        title: "Construct Your Own Argument and Evaluate It",
        instruction:
          "Write a short argument (3–4 sentences: claim, evidence, reasoning) on a topic of your choice. Then evaluate its own strengths and weaknesses from a critic's perspective.",
        parentTip:
          "Evaluating your own argument is one of the hardest critical thinking tasks. Encourage genuine self-critique — the goal is to model the habit of stepping back from your own writing.",
        prompts: [
          {
            text: "Your argument:\n\nClaim: ___________________________________________________________\n\nEvidence: ________________________________________________________\n\nReasoning: ______________________________________________________",
            type: "box",
          },
          {
            text: "Self-evaluation — Strength of your argument:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Self-evaluation — Weakness or limitation of your argument:",
            type: "lines",
            lines: 2,
          },
          {
            text: "How would you improve it?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Classify Argument Weaknesses",
        instruction:
          "Sort each argument weakness into the correct category.",
        columns: [
          "Evidence Problem",
          "Reasoning Problem",
          "Missing Perspective",
        ],
        items: [
          { label: "The only evidence cited is a personal anecdote." },
          { label: "The argument assumes correlation equals causation." },
          { label: "Only pro-technology sources are quoted in an article about screen time." },
          { label: "The statistic comes from an unnamed source." },
          { label: "The argument leaps from one specific case to a universal conclusion." },
          { label: "The viewpoints of the people most affected by the policy are not included." },
        ],
      },
      {
        type: "open-response",
        title: "The Steelman Argument",
        instruction:
          "A 'steelman' is the strongest possible version of an argument you disagree with. Choose a position you personally disagree with and construct the strongest possible argument for it.",
        parentTip:
          "This is one of the most intellectually demanding tasks in argument education. The ability to argue positions you personally reject — charitably and rigorously — is a mark of genuine intellectual maturity.",
        prompts: [
          {
            text: "Position you personally disagree with: _____________________________\n\nYour steelman argument for this position (strongest possible case):",
            type: "box",
          },
          {
            text: "What did constructing this argument reveal about the complexity of the issue?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "Media Literacy — True or False?",
        instruction:
          "These statements deal with argument evaluation in the media. Decide TRUE or FALSE.",
        statements: [
          {
            text: "All media sources have some perspective or bias, even quality journalism.",
            answer: true,
          },
          {
            text: "Reading multiple sources on the same topic is a good way to identify possible bias in each.",
            answer: true,
          },
          {
            text: "Sponsored content (paid advertisements) and independent journalism carry the same level of editorial independence.",
            answer: false,
          },
          {
            text: "A headline is designed to accurately represent the full nuance of an article.",
            answer: false,
          },
          {
            text: "Confirmation bias makes us more likely to accept arguments that already agree with our existing beliefs.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate an Advertisement as an Argument",
        instruction:
          "Choose a television, online, or print advertisement. Evaluate it as an argument: what is the claim? What evidence is offered? What is the reasoning? What logical fallacies or manipulation techniques are used?",
        parentTip:
          "Advertisements are arguments in disguise. Analysing them using the same framework as a formal text reveals how much of their persuasive power comes from technique rather than evidence. This is one of the most practically valuable applications of argument literacy.",
        prompts: [
          {
            text: "Product and advertisement description: ____________________________\n\nClaim (what the advertisement is trying to convince you of): _____________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evidence offered (if any): _______________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Persuasive techniques or fallacies used: ____________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "If this advertisement were held to the same standards as a formal argument, would it be convincing? Why or why not?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: Who Benefits From This Argument?",
        content:
          "One of the sharpest critical questions you can ask of any argument is: who benefits if I believe this? Advertising tries to sell products. Political arguments seek power or votes. Scientific research seeks truth — but scientists can also have funding sources that create conflicts of interest. Even a charity appeal has a goal. This does not mean all arguments are dishonest — most are made in good faith. But understanding the motivation behind an argument is part of evaluating it honestly. Ask this question of three different arguments this week.",
      },
      {
        type: "open-response",
        title: "Argument Evaluation Essay",
        instruction:
          "Write a short evaluative essay (5–6 sentences) evaluating the strength of a real argument you have found. Include: a brief summary of the argument, an evaluation of the evidence, an identification of any logical flaws, and an overall verdict.",
        parentTip:
          "This mini-essay format — summary, evaluation, verdict — is the structure used in academic essays, book reviews, and critical journalism. It is worth practising as a complete piece.",
        prompts: [
          {
            text: "Write your evaluative essay here:",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Debate Night — Formal Argument Evaluation",
        instruction:
          "Watch a formal debate (try Intelligence Squared or ABC's Q&A on YouTube) with your parent. As you watch, take notes on the strongest and weakest arguments made by each side.",
        parentTip:
          "Watching real debate teaches argument evaluation in context. Pause and discuss together: was that a logical fallacy? Was that good evidence? Was that a strong rebuttal?",
        suggestions: [
          "Choose a topic that interests you both — education, environment, technology, justice.",
          "Take one side each and note the strongest arguments made for your side.",
          "Identify the best piece of evidence in the whole debate.",
          "Identify one logical fallacy you heard.",
          "After the debate, vote on which side argued better — regardless of which position you personally agree with.",
        ],
      },

      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Extending Tip: Epistemology — How Do We Know What We Know?",
        content:
          "Argument evaluation ultimately asks an epistemological question: how do we know if something is true? There are different ways of knowing: empirical evidence (what we observe), logical reasoning (what follows from what), expert consensus (what most specialists believe), testimony (what witnesses say), and intuition (what feels right). The strongest arguments combine multiple sources of knowledge. The weakest rely on only one — especially intuition. As you extend your argument analysis, ask: what kind of knowing is this argument using?",
      },
      {
        type: "open-response",
        title: "Extended Critical Analysis — A Long-Form Argument",
        instruction:
          "Find a long-form opinion article (600+ words) on a topic you care about. Write an extended critical analysis of it (8–10 sentences): claim, evidence types, reasoning quality, fallacies, missing perspectives, and your overall verdict.",
        parentTip:
          "The Conversation, ABC Opinion, or The Guardian Australia are ideal sources for long-form, accessible opinion pieces. Choose a topic your child feels strongly about — the engagement is higher.",
        prompts: [
          {
            text: "Article title, author, and source: _____________________________\n\nExtended critical analysis:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write and Evaluate Two Opposing Arguments",
        instruction:
          "Choose a debatable topic. Write one paragraph arguing FOR the position, and one paragraph arguing AGAINST it. Then evaluate which paragraph you constructed more convincingly and why.",
        parentTip:
          "Writing arguments you personally disagree with — at the same quality as arguments you believe — is one of the highest forms of intellectual discipline. This task should be genuinely challenging.",
        prompts: [
          {
            text: "Topic: _________________________________________________________\n\nFor: ____________________________________________________________",
            type: "box",
          },
          {
            text: "Against: _______________________________________________________",
            type: "box",
          },
          {
            text: "Self-evaluation: which paragraph is more convincing? Why?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Advanced Argument Concepts — Assessment Style",
        instruction:
          "Choose the best answer for each advanced question.",
        questions: [
          {
            prompt:
              "What does it mean to 'steelman' an opposing argument?",
            options: [
              "Dismiss it as wrong without engaging with it",
              "Repeat it exactly as stated",
              "Present the strongest possible version of it, even if you disagree",
              "Find the weakest version to make it easier to refute",
            ],
            answer:
              "Present the strongest possible version of it, even if you disagree",
          },
          {
            prompt:
              "Confirmation bias is when:",
            options: [
              "We confirm our own arguments are always correct",
              "We are more likely to accept evidence that agrees with what we already believe",
              "We seek out opposing evidence to test our beliefs",
              "We use emotion rather than logic",
            ],
            answer:
              "We are more likely to accept evidence that agrees with what we already believe",
          },
          {
            prompt:
              "The main difference between a strong and a weak argument is:",
            options: [
              "Length — longer arguments are stronger",
              "Emotional content — more emotion makes it stronger",
              "Evidence quality and the soundness of the reasoning connecting evidence to claim",
              "Whether the writer agrees with the majority opinion",
            ],
            answer:
              "Evidence quality and the soundness of the reasoning connecting evidence to claim",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Formal Argument Evaluation of a Political Statement",
        instruction:
          "Find a political statement, speech excerpt, or campaign claim. Apply the highest level of critical analysis: claim, evidence, reasoning, assumptions, missing perspectives, and ideological bias.",
        parentTip:
          "Political language is one of the richest contexts for argument evaluation. The goal is not to teach your child a particular political view but to equip them to think independently about claims from any political position.",
        prompts: [
          {
            text: "Source and statement: _________________________________________\n\nFull analysis:",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Final Consolidation Sort: Argument Elements",
        instruction:
          "Sort each element into the correct category of argument quality.",
        columns: [
          "Makes Argument Stronger",
          "Makes Argument Weaker",
          "Neutral / Depends on Context",
        ],
        items: [
          { label: "Specific, verifiable statistics from credible sources" },
          { label: "Emotional language without supporting evidence" },
          { label: "Acknowledging and rebutting counter-arguments fairly" },
          { label: "Personal anecdotes as the sole evidence" },
          { label: "Citing peer-reviewed research" },
          { label: "Using a logical fallacy to dismiss opposing views" },
          { label: "Varying evidence types (statistics, examples, expert quotes)" },
          { label: "Appealing to authority on an unrelated topic" },
        ],
      },
      {
        type: "open-response",
        title: "Final Reflection: Your Argument Evaluation Framework",
        instruction:
          "Write a personal argument evaluation framework — a list of 5–7 questions you will now ask of any argument you encounter. This becomes your critical thinking toolkit.",
        parentTip:
          "Help your child think of this as a tool they will use for life. The questions should be practical, memorable, and genuinely useful in everyday encounters with persuasive language.",
        prompts: [
          {
            text: "My argument evaluation framework — the questions I will ask of any argument:",
            type: "box",
          },
          {
            text: "Which of these questions do you find most useful? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Teach It to Someone Else",
        instruction:
          "Explain argument evaluation — the three-question test plus two logical fallacies — to a family member who has not done this worksheet. The act of teaching consolidates your own understanding.",
        parentTip:
          "The Feynman Technique: if you can explain something to someone else simply, you truly understand it. This activity reveals exactly where your child's understanding is still uncertain.",
        suggestions: [
          "Choose a family member to teach — a sibling, grandparent, or the other parent.",
          "Explain the three-question test using a real example.",
          "Show two logical fallacies and explain why they are errors in reasoning.",
          "Ask your 'student' to test you with an argument of their own.",
          "Reflect: which part was hardest to explain? That is what you need to practise more.",
        ],
      },

      // ── EXTENDING: Activities 56–100
      {
        type: "tip",
        title: "Tip: Bias — Deliberate and Unconscious",
        content:
          "Every argument is made by someone with a perspective. Bias can be deliberate (the writer chooses to emphasise certain evidence to persuade) or unconscious (the writer genuinely believes they are being fair but their perspective still shapes their choices). Recognising bias does not mean dismissing an argument — it means reading it with appropriate awareness.",
      },
      {
        type: "sorting",
        title: "Sort: Types of Bias",
        instruction:
          "Sort each example into the type of bias it represents.",
        parentTip:
          "Understanding different types of bias is a media literacy skill with significant real-world applications. Encourage your child to bring examples from news they encounter.",
        columns: ["Selection bias", "Confirmation bias", "Language bias", "Source bias"],
        items: [
          { label: "A newspaper only interviews people who agree with its editorial position." },
          { label: "A reader only shares articles that confirm what they already believe." },
          { label: "A report calls protestors 'agitators' but police 'officers'." },
          { label: "A health study is funded by a company that sells the health product being tested." },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Evaluating Sources",
        instruction: "Mark each statement True or False.",
        parentTip:
          "Source evaluation is a foundational information literacy skill. These statements address common misconceptions about what makes a source trustworthy.",
        statements: [
          {
            text: "A source published recently is always more reliable than an older source.",
            answer: false,
          },
          {
            text: "A source that is clearly trying to persuade you is automatically unreliable.",
            answer: false,
          },
          {
            text: "A peer-reviewed academic source has been assessed by experts in the field before publication.",
            answer: true,
          },
          {
            text: "An author's qualifications and institutional affiliation are irrelevant to assessing their argument.",
            answer: false,
          },
          {
            text: "An argument can be logically valid but still contain false premises.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate a Real Advertisement",
        instruction:
          "Find an advertisement — in a magazine, online, or on television. Evaluate it as an argument: what is the claim, what is the evidence, are there any emotional appeals or logical fallacies?",
        parentTip:
          "Applying critical evaluation skills to advertising is one of the most immediately practical literacy outcomes. Media literacy begins with questioning commercial persuasion.",
        prompts: [
          {
            text: "Advertisement described (product, medium, main claim):",
            type: "lines",
            lines: 2,
          },
          {
            text: "What evidence or proof does it offer?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Emotional appeals identified:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Any logical fallacies present? If so, name them:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Overall: is this an honest, credible argument? Why or why not?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Recognise: Claims, Evidence, and Reasoning",
        instruction:
          "Identify whether each sentence is a Claim, Evidence, or Reasoning.",
        parentTip:
          "Breaking an argument into its structural components (claim, evidence, reasoning) is an analytical skill used in critical thinking, debate, and academic writing.",
        questions: [
          {
            prompt: "'According to the WHO, air pollution causes 7 million premature deaths annually.'",
            options: ["Claim", "Evidence", "Reasoning", "Counter-argument"],
            answer: "Evidence",
          },
          {
            prompt: "'Therefore, urgent government action to reduce emissions is morally required.'",
            options: ["Claim", "Evidence", "Reasoning", "Counter-argument"],
            answer: "Reasoning",
          },
          {
            prompt: "'Cities should ban single-use plastic packaging by 2030.'",
            options: ["Claim", "Evidence", "Reasoning", "Counter-argument"],
            answer: "Claim",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Complete the Argument Evaluation",
        instruction:
          "Fill in the blanks to complete this argument evaluation.",
        parentTip:
          "Scaffolded evaluation templates help students internalise the evaluation process before attempting it independently.",
        sentences: [
          {
            text: "The author's main claim is that _____.",
            blanks: ["[student identifies the central claim of a chosen text]"],
          },
          {
            text: "The strongest piece of evidence offered is _____, which is credible because _____.",
            blanks: ["[specific evidence]", "[reason for credibility]"],
          },
          {
            text: "A potential weakness in the argument is that _____, because _____.",
            blanks: ["[weakness identified]", "[reason it weakens the argument]"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Critical Response",
        instruction:
          "Write a short critical response (5–7 sentences) to this claim: 'Social media should be banned for children under 16.' Evaluate the claim, suggest what evidence would be needed to support or refute it, and state your own view with reasons.",
        parentTip:
          "Critical response writing combines argument evaluation with persuasive writing. This is an integrative task that tests multiple Year 6 English outcomes simultaneously.",
        prompts: [
          {
            text: "My critical response:",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Correlation vs Causation",
        content:
          "Two of the most important words in argument evaluation: correlation (two things happen together) and causation (one thing CAUSES another). These are not the same. Ice cream sales and drowning rates both rise in summer — but ice cream does not cause drowning. Both are caused by hot weather. Arguments that confuse correlation with causation are making a logical error. Always ask: does the evidence show a connection or a cause?",
      },
      {
        type: "true-false",
        title: "True or False: Correlation and Causation",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "If two things happen together regularly, one must be causing the other.",
            answer: false,
          },
          {
            text: "A controlled experiment is one of the best ways to test for causation.",
            answer: true,
          },
          {
            text: "'Children who read more score higher on tests' proves that reading causes higher test scores.",
            answer: false,
          },
          {
            text: "A third factor can cause both observed events, creating a false appearance of a causal link.",
            answer: true,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Circle: Which Argument Uses Better Evidence?",
        instruction:
          "Circle the argument that uses stronger, more credible evidence in each pair.",
        questions: [
          {
            prompt: "Choose the stronger argument:",
            options: [
              "Everyone knows that exercise makes you smarter.",
              "A meta-analysis of 29 studies found that regular aerobic exercise significantly improves executive function in children aged 6–12.",
            ],
          },
          {
            prompt: "Choose the stronger argument:",
            options: [
              "My neighbour's child got sick after getting vaccinated, which proves vaccines are dangerous.",
              "The Australian Immunisation Register shows vaccine-preventable diseases have decreased by 95% since the introduction of the national program.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Steelman the Opposing View",
        instruction:
          "Choose a topic you have a strong opinion about. Instead of arguing for your view, write the strongest possible version of the opposing argument — giving it the best evidence and most reasonable interpretation. This is called steelmanning.",
        parentTip:
          "Steelmanning (the opposite of strawmanning) is an advanced intellectual skill: understanding the strongest version of a view you disagree with. This builds genuine open-mindedness.",
        prompts: [
          {
            text: "My topic and my personal view:",
            type: "lines",
            lines: 2,
          },
          {
            text: "The strongest possible opposing argument (steelman version):",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Strong vs Weak Evidence",
        instruction:
          "Sort these pieces of evidence from strongest to weakest for use in a formal written argument.",
        columns: ["Strongest", "Strong", "Moderate", "Weak"],
        items: [
          { label: "Peer-reviewed study with large sample size and methodology explained" },
          { label: "Government report from a relevant department" },
          { label: "Expert quote from a named professional in the field" },
          { label: "Personal anecdote from a friend of the author" },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate: A Spoken Argument",
        instruction:
          "Listen to a speech, podcast, or debate — even a family discussion about a decision. Evaluate the argument you heard: identify the claim, assess the evidence, and note any logical fallacies or emotional appeals.",
        parentTip:
          "Extending critical evaluation into spoken language makes the skill truly transferable. Everyday conversations about family decisions are legitimate evaluation contexts.",
        prompts: [
          {
            text: "Context (what was spoken, who by):",
            type: "lines",
            lines: 1,
          },
          {
            text: "Main claim:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Evidence offered:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Fallacies, emotional appeals, or weaknesses noticed:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Argument Evaluation Vocabulary",
        instruction:
          "Fill in the blank with the correct critical thinking term.",
        parentTip:
          "Precise vocabulary for argument analysis empowers students to discuss reasoning clearly. These terms appear in Year 7–12 English and Philosophy courses.",
        sentences: [
          {
            text: "A _____ is an error in reasoning that makes an argument logically invalid.",
            blanks: ["logical fallacy"],
          },
          {
            text: "A _____ argument is one that uses only emotional appeals and no evidence.",
            blanks: ["purely emotive"],
          },
          {
            text: "When a writer presents only evidence that supports their view and ignores contrary evidence, this is called _____ bias.",
            blanks: ["selection"],
          },
          {
            text: "The _____ test asks: is the claim credible, is the evidence reliable, and does the evidence support the claim?",
            blanks: ["three-question"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: An Evaluated Opinion Piece",
        instruction:
          "Write a short opinion piece (5–7 sentences) on any topic, being deliberately careful to: state a clear claim, provide specific credible evidence, explain the logical connection (reasoning), and avoid logical fallacies.",
        parentTip:
          "Writing an argument that can withstand evaluation requires applying critical thinking criteria to your own writing. This is the highest level of this skill set.",
        prompts: [
          {
            text: "My opinion piece with explicit claim, evidence, reasoning, and no fallacies:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify: Fallacy or Sound Argument?",
        instruction:
          "Decide whether each argument contains a logical fallacy or is a sound argument.",
        questions: [
          {
            prompt: "'Our school's best students all drink orange juice at breakfast. Therefore, orange juice must cause high achievement.'",
            options: [
              "Sound argument — good correlation evidence",
              "Fallacy — confuses correlation with causation",
              "Sound argument — logical conclusion",
              "Fallacy — ad hominem attack",
            ],
            answer: "Fallacy — confuses correlation with causation",
          },
          {
            prompt: "'Three independent studies across 12 countries found that class sizes below 20 students correlate with significantly higher reading outcomes. Smaller classes appear to support better literacy.'",
            options: [
              "Fallacy — appeal to authority",
              "Fallacy — hasty generalisation",
              "Sound argument — credible evidence with appropriately cautious claim",
              "Fallacy — confirmation bias",
            ],
            answer:
              "Sound argument — credible evidence with appropriately cautious claim",
          },
        ],
      },
      {
        type: "open-response",
        title: "Build Your Critical Thinker's Toolkit",
        instruction:
          "Create your own reference guide: list the five most important questions you should ask when evaluating any argument, and give a brief explanation of why each question matters.",
        parentTip:
          "Creating a personalised reference guide is a metacognitive consolidation activity. The act of selecting and explaining the five most important questions reveals the depth of understanding.",
        prompts: [
          {
            text: "My five critical evaluation questions (with explanations):",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Final Assessment: Evaluating Arguments",
        instruction:
          "Final assessment — choose the best answer to demonstrate your mastery of argument evaluation.",
        parentTip:
          "Use this as a final diagnostic. Review any incorrect answers together — they indicate where consolidation is still needed.",
        questions: [
          {
            prompt: "What is the most important question to ask about evidence in an argument?",
            options: [
              "Is it interesting?",
              "Is it long?",
              "Is it specific, credible, and relevant to the claim being made?",
              "Does it come from a well-known person?",
            ],
            answer: "Is it specific, credible, and relevant to the claim being made?",
          },
          {
            prompt: "A logical fallacy is best described as:",
            options: [
              "A statement with which you personally disagree",
              "An error in reasoning that makes an argument logically weaker",
              "The use of emotional language",
              "A claim made without a conclusion",
            ],
            answer: "An error in reasoning that makes an argument logically weaker",
          },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: Thinking More Clearly",
        instruction:
          "Write a reflection (5–6 sentences) on how the skills in this unit have changed the way you read, watch, or listen to arguments in everyday life.",
        parentTip:
          "The ultimate goal of this unit is transferable critical thinking — not just passing a test. A reflection that connects classroom learning to everyday experience demonstrates genuine understanding.",
        prompts: [
          {
            text: "My reflection on how argument evaluation has changed how I engage with the world:",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: The Burden of Proof",
        content:
          "In argument, the burden of proof rests with the person making the claim. If someone claims X is true, they must provide evidence for X — the listener does not need to prove X is false. This is especially important when someone asks you to disprove something: you do not have to. Ask instead: what is your evidence that it is true?",
      },
      {
        type: "true-false",
        title: "True or False: Advanced Argument Concepts",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "The burden of proof lies with the person making the claim.",
            answer: true,
          },
          {
            text: "Absence of evidence is the same as evidence of absence.",
            answer: false,
          },
          {
            text: "An argument can be logically valid even if its premises are false.",
            answer: true,
          },
          {
            text: "A counter-argument that is not supported by evidence automatically fails.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Construct: A Strong Argument from Scratch",
        instruction:
          "Choose any topic you care about. Construct a strong argument from scratch: write a clear claim, provide three pieces of specific evidence (no vague generalisations), explain the logical connection between evidence and claim, and acknowledge one counter-argument.",
        parentTip:
          "Constructing an original argument using the full framework demonstrates genuine mastery. This is the most demanding single task in this worksheet.",
        prompts: [
          {
            text: "My claim:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Three pieces of specific evidence:",
            type: "box",
          },
          {
            text: "My reasoning — how the evidence supports the claim:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Counter-argument I acknowledge:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Argument Components in Logical Order",
        instruction:
          "Sort these components into the most logical order for a written argument.",
        columns: ["1st", "2nd", "3rd", "4th", "5th"],
        items: [
          { label: "Claim — state your position" },
          { label: "Conclusion — restate position and issue call to action" },
          { label: "Evidence — provide specific, credible evidence" },
          { label: "Counter-argument — acknowledge and rebut opposing view" },
          { label: "Reasoning — explain how evidence supports the claim" },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate Two Competing Arguments",
        instruction:
          "Choose a topic that has two clear sides (e.g. homework: helpful or harmful?). Find or construct one argument for each side. Evaluate both arguments using the three-question test and decide which is stronger — with reasons.",
        parentTip:
          "Evaluating two competing arguments simultaneously is a cognitively demanding task. It is also the foundational skill of informed citizenship.",
        prompts: [
          {
            text: "Topic chosen:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Argument A (for one position) — with evaluation:",
            type: "box",
          },
          {
            text: "Argument B (for the opposing position) — with evaluation:",
            type: "box",
          },
          {
            text: "Which argument is stronger and why:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Evaluate: Which Is a Stronger Argument?",
        instruction:
          "In each pair, choose the stronger argument and explain why (mentally or in writing).",
        parentTip:
          "Argument comparison builds the nuanced judgement that evaluation skills are ultimately aimed at developing.",
        questions: [
          {
            prompt: "Which is a stronger argument for reducing screen time in schools?",
            options: [
              "Screens are bad for children and everyone knows it.",
              "A 2023 study published in the Journal of Educational Psychology found that students in low-screen environments showed 15% higher reading comprehension scores after six weeks.",
            ],
            answer:
              "A 2023 study published in the Journal of Educational Psychology found that students in low-screen environments showed 15% higher reading comprehension scores after six weeks.",
          },
          {
            prompt: "Which is a stronger counter-argument to the claim that school uniforms reduce bullying?",
            options: [
              "Some students don't like wearing uniforms.",
              "Research by Dr. David Brunsma found no significant relationship between uniform policies and bullying rates — suggesting that underlying social factors, not clothing, drive bullying behaviour.",
            ],
            answer:
              "Research by Dr. David Brunsma found no significant relationship between uniform policies and bullying rates — suggesting that underlying social factors, not clothing, drive bullying behaviour.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Media Literacy: Analyse a Social Media Post",
        instruction:
          "Find a social media post (with a parent's help) that makes a claim or argument. Evaluate it: is the claim clearly stated? Is evidence provided? Are there logical fallacies? Is it attempting to persuade you, and how?",
        parentTip:
          "Social media is the most prevalent source of arguments in contemporary life. Applying critical evaluation tools to social media is a vital 21st-century literacy skill.",
        prompts: [
          {
            text: "Post described (topic, platform, what it claims):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Claim identified:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Evidence provided (or lack of evidence):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Any logical fallacies or emotional manipulation:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Overall evaluation — credible argument or not? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Logical Fallacy Names and Definitions",
        instruction:
          "Fill in the blank with the name of the logical fallacy.",
        sentences: [
          {
            text: "Attacking the person making an argument rather than the argument itself is called an _____ attack.",
            blanks: ["ad hominem"],
          },
          {
            text: "Misrepresenting an opponent's argument to make it easier to attack is called a _____ fallacy.",
            blanks: ["straw man"],
          },
          {
            text: "Arguing that because something happened after another thing, the first thing caused it is called _____ fallacy.",
            blanks: ["post hoc"],
          },
          {
            text: "Claiming that everyone believes something therefore it must be true is called the _____ fallacy.",
            blanks: ["bandwagon"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Spot and Explain a Logical Fallacy in the Wild",
        instruction:
          "Over the next week, listen for a logical fallacy in everyday conversation, a news program, or an advertisement. Write down the argument, name the fallacy, and explain why it is a fallacy rather than a sound argument.",
        parentTip:
          "Real-world fallacy spotting is both fun and powerful. Keep it light and curious rather than adversarial — the goal is observation, not winning arguments at the dinner table.",
        prompts: [
          {
            text: "Context (where and when you heard it):",
            type: "lines",
            lines: 1,
          },
          {
            text: "The argument as it was made:",
            type: "lines",
            lines: 2,
          },
          {
            text: "The fallacy and why it makes the argument weaker:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Evaluating Arguments — Final Mastery Check",
        instruction: "Mark each statement True or False as a final mastery check.",
        parentTip:
          "This final true-false covers the full range of this worksheet. Review any incorrect answers together using specific examples.",
        statements: [
          {
            text: "An argument that uses emotional language cannot also contain strong evidence.",
            answer: false,
          },
          {
            text: "Evaluating an argument does not mean agreeing or disagreeing with it — it means assessing the quality of the reasoning.",
            answer: true,
          },
          {
            text: "A straw man fallacy involves attacking the argument rather than the person.",
            answer: false,
          },
          {
            text: "Critical thinking requires suspending judgement until sufficient evidence has been assessed.",
            answer: true,
          },
          {
            text: "A peer-reviewed source has been independently assessed by experts before publication.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: An Evaluative Report on a Debate",
        instruction:
          "Watch, listen to, or participate in a structured debate (even a family discussion counts). Write a short evaluative report: summarise each side's main argument, evaluate the quality of evidence presented, and state which argument you found more convincing and why.",
        parentTip:
          "Evaluative reporting on a live argument is the most authentic transfer task for this unit. It brings together listening, critical analysis, and formal writing.",
        prompts: [
          {
            text: "Debate context and topic:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Side A — main argument and evidence quality:",
            type: "box",
          },
          {
            text: "Side B — main argument and evidence quality:",
            type: "box",
          },
          {
            text: "Which was more convincing and why:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Critical Thinker's Manifesto",
        instruction:
          "Write a short personal manifesto (5–7 sentences) about how you will think critically for the rest of your life. What do you commit to doing when you encounter an argument or claim?",
        parentTip:
          "A personal manifesto is a commitment that helps internalise values. The act of writing it makes the student articulate their own standards — which is one of the most powerful learning outcomes of this unit.",
        prompts: [
          {
            text: "My Critical Thinker's Manifesto:",
            type: "box",
          },
        ],
      },
      {
        type: "home-activity",
        title: "Family Argument Analysis",
        instruction:
          "At dinner or during a family activity, bring up a topic that everyone has an opinion about. Each person presents their view as a proper argument: claim, evidence, reasoning. Afterwards, analyse together: whose argument was strongest? What would have made each argument better?",
        parentTip:
          "This home activity turns a family discussion into a genuine critical thinking practice. Keep it playful. The goal is not to win but to reason well together.",
        suggestions: [
          "Choose a topic: what should the family do next weekend? Is a particular rule fair?",
          "Each person has 60 seconds to make their argument (claim, evidence, reasoning).",
          "Ask: what was the strongest piece of evidence anyone offered?",
          "Ask: did anyone use an emotional appeal? Was it effective?",
          "Ask: what would have made your own argument stronger?",
        ],
      },
      {
        type: "tip",
        title: "Tip: Arguments and Democracy",
        content:
          "The ability to make, evaluate, and respond to arguments is not just an English skill — it is the foundation of democratic life. Every vote, every policy debate, every community decision involves people making arguments and others evaluating them. When you develop critical thinking skills, you are not just becoming a better student. You are becoming a more capable citizen.",
      },
      {
        type: "open-response",
        title: "Write: An Argument That Could Change Something",
        instruction:
          "Think of something in your community, school, or family life that you believe should change. Write a short but complete argument (claim, evidence, reasoning, call to action) that could genuinely persuade someone with decision-making power.",
        parentTip:
          "A real-world argument for a real change is the most authentic application of this unit's skills. Even if the argument is never delivered, the exercise of writing it for a real purpose develops genuine civic capacity.",
        prompts: [
          {
            text: "What I want to change and who I am addressing:",
            type: "lines",
            lines: 2,
          },
          {
            text: "My argument (claim, evidence, reasoning, call to action):",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Fact-Checking: What Would Help Verify This Claim?",
        instruction:
          "For each claim, choose the best way to fact-check whether it is true.",
        parentTip:
          "Fact-checking methodology is a 21st-century literacy skill. Understanding where to look and what to look for is more valuable than simply knowing facts.",
        questions: [
          {
            prompt: "Claim: 'Australia is the largest country in the Southern Hemisphere.'",
            options: [
              "Ask a friend",
              "Check a geographical reference source or atlas",
              "Search social media",
              "Assume it is true because it sounds right",
            ],
            answer: "Check a geographical reference source or atlas",
          },
          {
            prompt: "Claim: 'Studies show that students who sleep more than 9 hours perform better at school.'",
            options: [
              "Accept it — studies usually tell the truth",
              "Look for the specific study cited, check its source and methodology",
              "Check if any friends have heard this",
              "Dismiss it — statistics are always misleading",
            ],
            answer:
              "Look for the specific study cited, check its source and methodology",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Critical Thinking Vocabulary Review",
        instruction:
          "Fill in the blank with the correct critical thinking or argument term.",
        sentences: [
          {
            text: "The main point an argument is trying to prove is called the _____.",
            blanks: ["claim"],
          },
          {
            text: "Information used to support a claim is called _____.",
            blanks: ["evidence"],
          },
          {
            text: "The explanation of how evidence connects to the claim is called the _____.",
            blanks: ["reasoning"],
          },
          {
            text: "A reasoning error that makes an argument logically weaker is called a logical _____.",
            blanks: ["fallacy"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Argument Strength — Best to Weakest",
        instruction:
          "Sort these four arguments about the same topic from strongest to weakest based on evidence quality and reasoning.",
        columns: ["Strongest", "Strong", "Moderate", "Weakest"],
        items: [
          { label: "Everyone I know thinks cats are better pets than dogs." },
          { label: "My cat is very affectionate, which shows cats make better pets." },
          { label: "A 2024 survey of 50,000 pet owners found that cat owners reported higher satisfaction rates than dog owners in three of five wellbeing measures." },
          { label: "Animal welfare researchers at the University of Melbourne found that cats require significantly less daily care time while maintaining comparable owner wellbeing outcomes." },
        ],
      },
      {
        type: "open-response",
        title: "Synthesis: What Makes an Argument Worth Taking Seriously?",
        instruction:
          "Write a 5–6 sentence synthesis paragraph that answers this question: what makes an argument worth taking seriously? Draw on everything you have learned in this unit about claims, evidence, reasoning, logical fallacies, and bias.",
        parentTip:
          "Synthesis writing — drawing together multiple concepts into a coherent argument — is a high-level academic task. This question asks your child to think about thinking.",
        prompts: [
          {
            text: "My synthesis paragraph on what makes an argument worth taking seriously:",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Critical Thinking in Daily Life",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "Critical thinking only applies to academic or formal arguments, not to everyday decisions.",
            answer: false,
          },
          {
            text: "Being sceptical of a claim is not the same as dismissing it without consideration.",
            answer: true,
          },
          {
            text: "A strong argument for one side always means the other side has no valid points.",
            answer: false,
          },
          {
            text: "The ability to change your mind when presented with good evidence is a strength, not a weakness.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Letter: Respond to a Public Argument",
        instruction:
          "Write a letter to the editor (3–4 paragraphs) responding to a news article, editorial, or public statement you have encountered recently. Evaluate the original argument and offer your own evidence-based response.",
        parentTip:
          "The letter to the editor is the most direct form of civic argument participation. Writing one — even if never sent — develops both critical thinking and persuasive writing simultaneously.",
        prompts: [
          {
            text: "The article or statement I am responding to:",
            type: "lines",
            lines: 2,
          },
          {
            text: "My letter to the editor:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Design: A Critical Thinking Poster",
        instruction:
          "Describe the design of a poster that you would put on your wall to remind yourself to think critically. What would the key questions be? What would the visual look like? Write the text of the poster and describe the image.",
        parentTip:
          "Designing a poster requires distilling the unit's key ideas into their most essential, memorable form. It also develops visual literacy and concision.",
        prompts: [
          {
            text: "Poster title and key questions or reminders (the text of the poster):",
            type: "box",
          },
          {
            text: "Description of the visual element (what image or design would accompany the text?):",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Argument Weakness to Its Name",
        instruction:
          "Match each description of an argument weakness to its correct name.",
        left: [
          "Attacking the person instead of the argument",
          "Claiming that if A happens, B, C, and D will inevitably follow",
          "Misrepresenting the opponent's view to make it easier to refute",
          "Assuming that because two things occurred together, one caused the other",
          "Arguing that something must be true because many people believe it",
        ],
        right: [
          "Post hoc (false causation)",
          "Straw man",
          "Bandwagon fallacy",
          "Ad hominem",
          "Slippery slope",
        ],
      },
      {
        type: "open-response",
        title: "Evaluator's Journal: One Week of Argument Spotting",
        instruction:
          "For one week, keep a brief daily journal of arguments you encountered (in news, conversation, advertising, social media). Rate each argument 1–3 for evidence quality. What patterns do you notice?",
        parentTip:
          "An evaluator's journal is a metacognitive habit-forming activity. Even a brief journal kept for one week significantly increases argument awareness in everyday life.",
        prompts: [
          {
            text: "Day-by-day argument log (argument, context, evidence quality rating 1-3):",
            type: "box",
          },
          {
            text: "Patterns noticed — which contexts produced the strongest/weakest arguments?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "true-false",
        title: "Evaluating Argument Quality",
        instruction: "Decide whether each statement about evaluating arguments is true or false.",
        parentTip: "Strong critical thinkers apply consistent standards regardless of whether they agree with the argument's conclusion.",
        statements: [
          {
            text: "An argument supported by anecdotal evidence alone is as strong as one supported by peer-reviewed research.",
            answer: false,
          },
          {
            text: "A logical fallacy weakens an argument even if the conclusion happens to be correct.",
            answer: true,
          },
          {
            text: "Acknowledging a counter-argument always weakens a writer's position.",
            answer: false,
          },
          {
            text: "The strength of an argument depends on the quality of its evidence and the validity of its reasoning.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Final Self-Assessment: My Critical Thinking Skills",
        instruction:
          "Write a self-assessment (5–6 sentences) of your critical thinking skills after completing this unit. What can you now do that you could not do before? What is the most valuable skill you have developed?",
        parentTip:
          "Self-assessment closes the learning loop. A student who can accurately assess their own progress is better positioned to continue improving independently.",
        prompts: [
          {
            text: "My self-assessment of my critical thinking development:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Examined Life",
        content:
          "The ancient Greek philosopher Socrates reportedly said: 'The unexamined life is not worth living.' He was famous for questioning arguments — including arguments made by powerful people — until the truth was found or the weakness was revealed. This habit of questioning, of applying standards of evidence and reasoning to everything you encounter, is at the heart of intellectual life. You now have the tools Socrates was describing. Use them: not to be difficult or dismissive, but to think clearly, to pursue what is actually true, and to build a mind that cannot be easily fooled.",
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
      // ── FOUNDATIONAL (1–20) ──────────────────────────────────────────────
      {
        type: "matching",
        title: "Match Report Features to Their Purpose",
        instruction:
          "Draw a line to match each feature of an information report to its purpose.",
        parentTip:
          "Go through the features in order before your child matches them. Understanding the purpose of each feature is the foundation for writing a successful report.",
        left: [
          "Heading structure",
          "Present tense",
          "Technical vocabulary",
          "Third person ('it', 'they')",
          "Introduction paragraph",
          "Conclusion paragraph",
        ],
        right: [
          "Creates objectivity — removes the personal perspective of the writer",
          "Organises information into categories for easy navigation",
          "Summarises the key information and reflects on significance",
          "Signals that this is a subject-specific text for an informed reader",
          "Suggests that the information is generally true, not just at one moment",
          "Defines the topic, previews the sections, and hooks the reader",
        ],
      },
      {
        type: "true-false",
        title: "Report vs Story — True or False?",
        instruction:
          "Decide whether each statement about information reports is TRUE or FALSE.",
        parentTip:
          "Work through the first two together. The distinction between narrative and report style is fundamental, and it is worth taking time to solidify.",
        statements: [
          {
            text: "A report tells you about one specific sequence of events.",
            answer: false,
          },
          {
            text: "A report uses present tense to describe how things generally are.",
            answer: true,
          },
          {
            text: "A report written in first person ('I think...') sounds more authoritative.",
            answer: false,
          },
          {
            text: "An information report should be organised into clear categories.",
            answer: true,
          },
          {
            text: "A report can include the author's personal opinions throughout.",
            answer: false,
          },
          {
            text: "Technical vocabulary is appropriate in a report because it signals expertise.",
            answer: true,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Narrative vs Report Features",
        instruction:
          "Sort each feature into NARRATIVE (story) or INFORMATION REPORT.",
        parentTip:
          "Some students find this distinction harder than expected — particularly the move to general nouns and present tense. Reading examples aloud together helps the difference click.",
        columns: ["Narrative / Story", "Information Report"],
        items: [
          { label: "Past tense: 'The lion chased the zebra.'" },
          { label: "Present tense: 'Lions typically prey on zebras during dry season.'" },
          { label: "Specific individual: 'Maya ran all the way home.'" },
          { label: "General class noun: 'Mammals are warm-blooded vertebrates.'" },
          { label: "First person: 'I was frightened when I saw the snake.'" },
          { label: "Third person objective: 'Snakes are ectothermic reptiles.'" },
          { label: "Plot and conflict: 'The hero discovered the villain's plan.'" },
          { label: "Classification: 'There are over 3,500 species of snake worldwide.'" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Identify the Report Language Feature",
        instruction:
          "Identify the language feature being demonstrated in each example.",
        questions: [
          {
            prompt: "'The greater bilby is a marsupial native to arid and semi-arid regions of Australia.'",
            options: [
              "First person narrative",
              "Classification and technical vocabulary in present tense",
              "Past tense storytelling",
              "Personal opinion",
            ],
            answer: "Classification and technical vocabulary in present tense",
          },
          {
            prompt: "'This report will explore three key aspects of ocean pollution: causes, impacts on marine life, and potential solutions.'",
            options: [
              "Conclusion sentence",
              "Thesis statement",
              "Introduction overview sentence — previews the report structure",
              "A body paragraph topic sentence",
            ],
            answer: "Introduction overview sentence — previews the report structure",
          },
          {
            prompt: "'In conclusion, the Great Barrier Reef faces significant threats from climate change and pollution, making conservation efforts more urgent than ever.'",
            options: [
              "Introduction sentence",
              "Body paragraph sentence",
              "Conclusion sentence that summarises and raises significance",
              "A topic sentence",
            ],
            answer: "Conclusion sentence that summarises and raises significance",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Report Language — Formal Vocabulary",
        instruction:
          "Replace the informal word in each sentence with a more appropriate report-style word.",
        parentTip:
          "Read the completed sentences aloud to check they sound like encyclopedia language.",
        sentences: [
          {
            text: "Informal: 'Sharks eat fish and stuff.' Report: 'Sharks ___ a varied diet of fish, marine mammals, and crustaceans.' [consume / gobble]",
            blanks: ["consume"],
          },
          {
            text: "Informal: 'The rainforest is really old and has heaps of layers.' Report: 'The rainforest is estimated to be millions of years old and ___ four distinct canopy layers.' [possesses / has got]",
            blanks: ["possesses"],
          },
          {
            text: "Informal: 'People are cutting down trees which is bad for animals.' Report: 'Deforestation ___ habitat loss for thousands of species.' [causes / makes]",
            blanks: ["causes"],
          },
        ],
      },
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
        type: "true-false",
        title: "Research Skills — True or False?",
        instruction:
          "Decide whether each statement about research skills is TRUE or FALSE.",
        statements: [
          {
            text: "Copying text directly from a website and putting it in your report is acceptable if you found the information there.",
            answer: false,
          },
          {
            text: "Paraphrasing means rewriting information in your own words after closing the source.",
            answer: true,
          },
          {
            text: "Using only one source for a research report is sufficient.",
            answer: false,
          },
          {
            text: "A bibliography or reference list at the end of a report shows which sources were used.",
            answer: true,
          },
          {
            text: "All websites provide equally reliable information.",
            answer: false,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Circle the Better Report Opening",
        instruction:
          "In each pair, circle the better report opening.",
        parentTip:
          "Ask your child to explain why the better option is better — the explanation is more valuable than the identification.",
        questions: [
          {
            prompt: "Which is a stronger opening for a report on sharks?",
            options: [
              "This report is about sharks. I am going to tell you about them.",
              "Sharks have existed for over 450 million years — predating the dinosaurs by 200 million years — making them one of Earth's most successful and ancient predators.",
            ],
          },
          {
            prompt: "Which is stronger for a report on renewable energy?",
            options: [
              "In my opinion, renewable energy is really important and we should use more of it.",
              "Australia generates approximately 35% of its electricity from renewable sources, a figure that has tripled over the past decade as solar and wind technology has become more affordable.",
            ],
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
      {
        type: "tip",
        title: "Key Concept: Read, Close, Recall, Write",
        content:
          "The single most important research habit to develop is 'read-close-recall-write': (1) Read a paragraph from your source carefully. (2) Close the source (or scroll away from the screen). (3) Recall what you understood from it. (4) Write it in your own words from memory. This four-step process prevents copying, builds real understanding, and produces genuinely paraphrased notes. It feels slower than copy-and-paste, but it is actually the most efficient path to a report you truly understand.",
      },
      {
        type: "fill-in-blank",
        title: "Choosing the Right Section Heading",
        instruction:
          "For a report on the Great Barrier Reef, fill in each blank with the most appropriate section heading from the box.",
        parentTip:
          "Section headings should be specific enough to be informative but broad enough to cover a whole section. They often use noun phrases rather than full sentences.",
        sentences: [
          {
            text: "Section 1 covers what the reef is and where it is located: ___ [Location and Overview / The Reef's History / How to Protect It]",
            blanks: ["Location and Overview"],
          },
          {
            text: "Section 2 covers the plants and animals that live there: ___ [Biodiversity and Marine Life / The Coral / Tourist Attractions]",
            blanks: ["Biodiversity and Marine Life"],
          },
          {
            text: "Section 3 covers rising temperatures, pollution, and crown-of-thorns starfish: ___ [Interesting Facts / Threats and Environmental Pressures / History of Discovery]",
            blanks: ["Threats and Environmental Pressures"],
          },
          {
            text: "Section 4 covers what individuals and governments can do: ___ [Conservation and Future Outlook / Types of Fish / Diving Tours]",
            blanks: ["Conservation and Future Outlook"],
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Paraphrase or Plagiarism?",
        instruction:
          "Decide whether each example is acceptable paraphrasing or plagiarism.",
        questions: [
          {
            prompt:
              "Original: 'The platypus is one of the few mammals that lays eggs.'\nStudent version: 'The platypus is one of the few mammals that lays eggs.'",
            options: ["Acceptable paraphrase", "Plagiarism — copied word for word"],
            answer: "Plagiarism — copied word for word",
          },
          {
            prompt:
              "Original: 'The platypus is one of the few egg-laying mammals, a group known as monotremes.'\nStudent version: 'Unlike most mammals, which give birth to live young, platypuses lay eggs. They belong to a small group called monotremes.'",
            options: ["Acceptable paraphrase", "Plagiarism"],
            answer: "Acceptable paraphrase",
          },
          {
            prompt:
              "Original: 'Coral reefs support approximately 25% of all marine species.'\nStudent version: 'Coral reefs support approximately 25% of all marine species.'",
            options: [
              "Acceptable — statistics can be cited directly",
              "This should still include a citation with the source",
            ],
            answer: "This should still include a citation with the source",
          },
        ],
        parentTip:
          "The rule of thumb: statistics always need a citation (even when paraphrased), but the surrounding language should be in the student's own words.",
      },
      {
        type: "open-response",
        title: "Practise Paraphrasing",
        instruction:
          "Read each passage, then close the source (cover the text) and write the information in your own words. Do not look back at the original until you have finished writing.",
        parentTip:
          "This read-and-cover technique is the foundation of genuine note-taking. It is harder than it looks — but after two or three tries it becomes natural. Watch for phrases that have been half-copied rather than truly paraphrased.",
        prompts: [
          {
            text: "Passage: 'The Uluru-Kata Tjuta National Park covers approximately 1,326 square kilometres in the Northern Territory of Australia. The park is of deep spiritual significance to the Anangu people, the traditional custodians of the land, who have lived in this region for at least 30,000 years.'\n\nYour paraphrase (write from memory after covering the passage):",
            type: "box",
          },
          {
            text: "Passage: 'Southern right whales migrate from Antarctic feeding grounds to the warmer waters of southern Australia each year to give birth and breed. The whales were once hunted to near extinction and are now a protected species.'\n\nYour paraphrase:",
            type: "box",
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Which Section Does This Information Belong In?",
        instruction:
          "You are writing a report on sea turtles. Sort each piece of information into the correct section.",
        columns: [
          "Classification and Habitat",
          "Diet and Behaviour",
          "Threats and Conservation",
        ],
        items: [
          { label: "Seven species of sea turtle exist, all classified under the family Cheloniidae or Dermochelyidae." },
          { label: "Many sea turtles are caught accidentally in fishing nets, a process called bycatch." },
          { label: "Sea turtles are found in all tropical and subtropical oceans around the world." },
          { label: "Leatherback turtles feed almost exclusively on jellyfish." },
          { label: "Sea turtle populations have declined by over 80% in some species due to hunting and habitat loss." },
          { label: "Sea turtles are air-breathing reptiles and must surface regularly despite spending most of their lives underwater." },
          { label: "Protecting nesting beaches is one of the most effective conservation strategies." },
          { label: "Green turtles travel thousands of kilometres between feeding and nesting grounds." },
        ],
      },
      {
        type: "tip",
        title: "Writing Tip: Every Section Needs a Topic Sentence",
        content:
          "Just like body paragraphs in a persuasive essay, every section in a report needs to begin with a clear topic sentence that tells the reader what this section will cover. 'The Great Barrier Reef faces numerous significant threats from both climate change and direct human impact.' This sentence tells the reader the scope of the section. It also ensures you stay on topic — if a piece of information does not connect to the topic sentence, it belongs in a different section.",
      },
      {
        type: "home-activity",
        title: "Research Session — Note-Taking Practice",
        instruction:
          "Spend 20–30 minutes researching your report topic. Use at least two different sources. Take notes using the read-close-recall-write method.",
        parentTip:
          "Sit with your child during this research session, especially the first time. Model the read-close-recall process aloud. The tendency to copy is strong — gentle reminders to close the tab before writing are very helpful.",
        suggestions: [
          "Choose a topic for your report (if you haven't already).",
          "Find two credible sources (Australian Museum, National Geographic, CSIRO, government sites).",
          "Read one paragraph at a time, then close the source and write notes in your own words.",
          "Record the source title and URL for your reference list.",
          "Bring your notes back to the worksheet for the next activities.",
        ],
      },
      {
        type: "open-response",
        title: "Write a Section Paragraph",
        instruction:
          "Using your research notes, write one section of your report (4–6 sentences). Begin with a clear topic sentence.",
        parentTip:
          "Remind your child that all notes should now be in their own words — they should not be looking at the original sources while writing the report paragraph.",
        prompts: [
          {
            text: "Section heading: ______________________________________________\n\nSection paragraph:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Report Structure — What Goes Where?",
        instruction:
          "Choose the correct placement for each piece of content in a report.",
        questions: [
          {
            prompt: "An engaging fact and an overview of what the report will cover.",
            options: [
              "Section heading",
              "Introduction",
              "Conclusion",
              "Body section",
            ],
            answer: "Introduction",
          },
          {
            prompt: "'Blue whales are the largest animals ever to have existed on Earth, reaching lengths of up to 33 metres.'",
            options: [
              "Introduction",
              "Body section — Classification and Size",
              "Conclusion",
              "Bibliography",
            ],
            answer: "Body section — Classification and Size",
          },
          {
            prompt: "A list of all websites and books used in the research process.",
            options: [
              "Introduction",
              "Conclusion",
              "Bibliography / Reference List",
              "Section heading",
            ],
            answer: "Bibliography / Reference List",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Conclusion Paragraph",
        instruction:
          "Write a conclusion for your report (3–5 sentences). Summarise the key information, reflect on why the topic matters or what you found most surprising, and close strongly.",
        parentTip:
          "The conclusion should not introduce new facts. It should synthesise what the reader has learned and leave them with a sense of the topic's significance.",
        prompts: [
          {
            text: "Write your conclusion here:",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "Referencing and Citations — True or False?",
        instruction:
          "Decide whether each statement about references is TRUE or FALSE.",
        statements: [
          {
            text: "You only need to cite direct quotes, not paraphrased information.",
            answer: false,
          },
          {
            text: "A bibliography appears at the end of a report and lists all sources used.",
            answer: true,
          },
          {
            text: "You do not need to cite information that is considered 'common knowledge'.",
            answer: true,
          },
          {
            text: "Citing sources makes a report more credible because the reader can verify the information.",
            answer: true,
          },
          {
            text: "It is fine to use a Wikipedia article as your only source for a formal report.",
            answer: false,
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: From Curious to Expert",
        content:
          "Every expert was once a complete beginner who was curious about something. The research process — the act of asking a question, finding reliable sources, evaluating information, and synthesising it into a clear explanation — is how curiosity becomes expertise. Every scientist, historian, and journalist uses this same process. What you are practising in this worksheet is not just 'how to write a report' — it is how to become genuinely knowledgeable about anything you are curious about for the rest of your life.",
      },
      {
        type: "fill-in-blank",
        title: "Simple Citation Format",
        instruction:
          "Fill in the blank to complete each citation in the format: Author (Year). Title. Website name. URL.",
        sentences: [
          {
            text: "Name of the person or organisation who wrote the article: ___",
            blanks: ["Author"],
          },
          {
            text: "The year the article was published or last updated: ___",
            blanks: ["Year"],
          },
          {
            text: "The full address of the webpage: ___",
            blanks: ["URL"],
          },
        ],
      },

      // ── DEVELOPING (21–50) ──────────────────────────────────────────────
      {
        type: "open-response",
        title: "Evaluate Your Sources",
        instruction:
          "For each source you are using in your report, evaluate its reliability using the SIFT method: Source (who created it?), Information (is it accurate and current?), Footprint (does it link to primary sources?), Tone (is it objective or biased?).",
        parentTip:
          "Source evaluation is one of the most important research skills for secondary school and beyond. Work through the first source together using SIFT before your child evaluates the second independently.",
        prompts: [
          {
            text: "Source 1 URL or title: _____________________________________________\nWho created it? _________________________________________________\nIs the information accurate and current? _____________________________\nDoes it cite primary sources? ______________________________________\nTone (objective or biased)? _______________________________________\nOverall reliability (1–5): ___",
            type: "box",
          },
          {
            text: "Source 2 URL or title: _____________________________________________\nSIFT evaluation:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Report Connectives and Transitions",
        instruction:
          "Fill in each blank with the correct reporting connective.",
        sentences: [
          {
            text: "To introduce a second section: '___, coral bleaching has accelerated dramatically since 2016.' [Furthermore / However / Because]",
            blanks: ["Furthermore"],
          },
          {
            text: "To introduce a contrasting point: '___, not all human activities are harmful to reef systems.' [However / Therefore / Additionally]",
            blanks: ["However"],
          },
          {
            text: "To draw a conclusion: '___, conservation efforts will need to scale significantly to offset the pace of environmental change.' [Therefore / Although / While]",
            blanks: ["Therefore"],
          },
          {
            text: "To introduce an example: '___ example is the successful recovery of humpback whale populations after hunting was banned.' [One / Any / Every]",
            blanks: ["One"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Two More Section Paragraphs",
        instruction:
          "Using your research notes, write two more body section paragraphs for your report. Each should begin with a topic sentence and contain 4–6 sentences of relevant information.",
        parentTip:
          "Remind your child to write from their notes, not from the original sources. Each paragraph should cover only the information relevant to its heading — information that belongs elsewhere should be saved for the right section.",
        prompts: [
          {
            text: "Section 2 heading: _____________________________________________\n\nParagraph:",
            type: "box",
          },
          {
            text: "Section 3 heading: _____________________________________________\n\nParagraph:",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Technical Vocabulary Signals Expertise",
        content:
          "One of the most important features of a high-quality information report is precise technical vocabulary. Compare: 'Sharks have a special sense organ that helps them find things underwater' versus 'Sharks possess lateral line sensory systems and electroreceptors called ampullae of Lorenzini, which detect pressure changes and electrical fields.' The second version requires the reader to look up some terms — but it signals that the writer has genuinely engaged with the subject at an expert level. Look up and use at least three technical terms in your report.",
      },
      {
        type: "sorting",
        title: "Sort: Formal Report Language vs Informal Language",
        instruction:
          "Sort each phrase into FORMAL (suitable for a report) or INFORMAL (not appropriate).",
        parentTip:
          "Read each phrase aloud. The ones that sound out of place in an encyclopedia are informal.",
        columns: ["Formal Report Language", "Informal Language"],
        items: [
          { label: "heaps of" },
          { label: "a significant proportion of" },
          { label: "totally amazing" },
          { label: "particularly notable" },
          { label: "you know what I mean" },
          { label: "this demonstrates that" },
          { label: "it's really bad" },
          { label: "poses a significant environmental risk" },
          { label: "I reckon" },
          { label: "research indicates that" },
        ],
      },
      {
        type: "open-response",
        title: "Improve a Draft Section",
        instruction:
          "Read the draft section paragraph. Identify three problems (informal language, missing technical vocabulary, unsupported claims) and rewrite it at a higher quality.",
        parentTip:
          "Improving someone else's writing is often easier than improving your own. This builds the editing skills your child needs for self-revision.",
        prompts: [
          {
            text: "Draft: 'Dingoes are really cool Australian animals. They eat lots of different stuff like kangaroos and rabbits. Dingoes are getting rarer because of farmers who don't like them. It's actually pretty sad because they were here first.'\n\nThree problems identified:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Rewritten version (use formal language, add one specific fact, remove opinion):",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Select the Best Topic Sentence for Each Section",
        instruction:
          "Choose the best topic sentence for each section of a report on climate change.",
        questions: [
          {
            prompt: "Section: 'Causes of Climate Change'",
            options: [
              "Climate change is happening and it is really bad.",
              "Human activities, particularly the burning of fossil fuels, are the primary driver of accelerating climate change.",
              "I think climate change is caused by people.",
              "This section will talk about what causes climate change.",
            ],
            answer:
              "Human activities, particularly the burning of fossil fuels, are the primary driver of accelerating climate change.",
          },
          {
            prompt: "Section: 'Impact on Australian Wildlife'",
            options: [
              "Animals are affected by climate change.",
              "Australian wildlife is really suffering.",
              "Climate change is disrupting the habitats, migration patterns, and breeding cycles of numerous species unique to Australia.",
              "This section is about how animals in Australia are affected.",
            ],
            answer:
              "Climate change is disrupting the habitats, migration patterns, and breeding cycles of numerous species unique to Australia.",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: What You Don't Know Yet",
        content:
          "One of the joys of genuine research is discovering that your topic is far more interesting — and far more complex — than you expected. Every good research report uncovers at least one genuinely surprising fact, one unanswered question, and one aspect of the topic that the researcher wishes they could explore further. As you work on your report, keep a 'Things I Didn't Expect' list. These surprises are not distractions — they are signs that you are genuinely engaging with the material, not just collecting facts.",
      },
      {
        type: "open-response",
        title: "Add Technical Vocabulary",
        instruction:
          "Choose three technical terms relevant to your report topic. For each one, write a sentence that uses the term correctly in context.",
        parentTip:
          "Look up definitions together if needed. Encourage your child to verify the meaning by looking at the term in context in a reliable source before writing their own sentence.",
        prompts: [
          {
            text: "Technical term 1: _____________  Definition: _______________________\nSentence using the term in context:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technical term 2: _____________  Definition: _______________________\nSentence:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technical term 3: _____________  Definition: _______________________\nSentence:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "Advanced Report Features — True or False?",
        instruction:
          "Read each statement about advanced features of information reports. Decide TRUE or FALSE.",
        statements: [
          {
            text: "A well-designed report may include diagrams, maps, or tables to support the written information.",
            answer: true,
          },
          {
            text: "A glossary at the end of a report defines key technical terms for the reader.",
            answer: true,
          },
          {
            text: "An abstract (brief summary) is typically found at the beginning of formal research reports.",
            answer: true,
          },
          {
            text: "The conclusion of an information report can include the writer's recommendations.",
            answer: true,
          },
          {
            text: "Font choices and heading hierarchy are irrelevant to the quality of a report.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write a Glossary Entry",
        instruction:
          "Write a glossary entry for three technical terms in your report. A glossary entry defines the term in plain language suitable for the reader.",
        parentTip:
          "A glossary entry should be clear enough for a reader who has never encountered the term before. This is genuinely hard — it requires understanding the term deeply enough to explain it simply.",
        prompts: [
          {
            text: "Term 1: ________________\nDefinition: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Term 2: ________________\nDefinition: ________________________________________________",
            type: "lines",
            lines: 2,
          },
          {
            text: "Term 3: ________________\nDefinition: ________________________________________________",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Report Structure Labels",
        instruction:
          "A report has a conventional structure. Fill in each blank with the correct structural element.",
        sentences: [
          {
            text: "The section that defines the topic and previews what the report will cover: ___.",
            blanks: ["Introduction"],
          },
          {
            text: "The main sections of the report, each covering a different aspect of the topic: ___.",
            blanks: ["Body sections"],
          },
          {
            text: "The section that summarises key information and reflects on significance: ___.",
            blanks: ["Conclusion"],
          },
          {
            text: "The list of all sources consulted, usually at the end of the report: ___.",
            blanks: ["Bibliography / Reference list"],
          },
          {
            text: "An optional section defining technical terms, usually at the end: ___.",
            blanks: ["Glossary"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Find an Expert Source",
        instruction:
          "For your report topic, find and read one source from a genuinely expert organisation: a government department, a university research page, a museum, or a scientific body.",
        parentTip:
          "Expert sources often use technical language that requires extra work to understand. This is actually a positive sign — the effort of understanding a primary or expert source produces deeper knowledge than reading only second-hand summaries.",
        suggestions: [
          "For science topics: CSIRO, Australian Museum, BOM (Bureau of Meteorology).",
          "For environment: Australian Department of Climate Change, WWF Australia.",
          "For history: State Library of NSW, National Library of Australia, AIATSIS.",
          "For health: NHMRC, Australian Institute of Health and Welfare.",
          "Read 2–3 paragraphs from your expert source and add one fact to your notes.",
        ],
      },

      // ── CONSOLIDATING (51–80) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Consolidating Tip: The Difference Between Summary and Synthesis",
        content:
          "Summarising is repeating, in shorter form, what one source says. Synthesising is combining information from multiple sources to create a new, integrated understanding. A high-quality research report does not just summarise each source in sequence. It synthesises: 'Source A establishes X; Source B refines this by showing Y; together, they suggest Z.' This is the shift from a report that shows you collected information to a report that shows you understood and integrated it.",
      },
      {
        type: "open-response",
        title: "Write Your Full Report — First Draft",
        instruction:
          "Write a complete first draft of your report: introduction, three or four body sections, and conclusion. Use all your planning and research notes. Aim for approximately 400–500 words.",
        parentTip:
          "A first draft is not meant to be perfect — it is meant to be complete. Encourage your child to write without stopping for too long on any single sentence. The revision stage comes next.",
        prompts: [
          {
            text: "Write your full first draft on a separate page. When complete, record your word count here: _____ words.",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Self-Edit Your Report",
        instruction:
          "Read your draft report and evaluate it using the checklist below. Make notes on what needs improvement.",
        parentTip:
          "Read the draft aloud together — sentences that are unclear or informal usually stand out when spoken. Encourage your child to trust their ear.",
        prompts: [
          {
            text: "Introduction check: Does it open with something engaging? Does it preview all sections? YES / NO — what needs improvement?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Report language check: Is it written in third person, present tense, formal vocabulary throughout? Identify any informal language and note it here:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Evidence and accuracy check: Are all facts supported by your research? Are there any unsupported claims?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Technical vocabulary check: Have you used at least three technical terms correctly?",
            type: "lines",
            lines: 1,
          },
          {
            text: "Conclusion check: Does it synthesise rather than just repeat? Does it reflect on significance?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort Report Revision Priorities",
        instruction:
          "Sort these revision tasks by priority: High Priority (fix before anything else), Medium Priority (important but after high), Low Priority (polish only after other issues are resolved).",
        parentTip:
          "Teaching your child to prioritise revision tasks models professional editing practice. Structure and accuracy always take priority over style and polish.",
        columns: ["High Priority", "Medium Priority", "Low Priority"],
        items: [
          { label: "Fixing factual errors" },
          { label: "Improving sentence variety for rhythm" },
          { label: "Ensuring all sections have topic sentences" },
          { label: "Choosing slightly more precise synonyms" },
          { label: "Removing informal language" },
          { label: "Adjusting font size for consistency" },
          { label: "Checking that the conclusion synthesises rather than just summarises" },
          { label: "Adding a more engaging opening to the introduction" },
        ],
      },
      {
        type: "multiple-choice",
        title: "Report Assessment Style Questions",
        instruction:
          "Answer these questions as in a standardised assessment context.",
        questions: [
          {
            prompt:
              "Which of these is a feature of a high-quality information report?",
            options: [
              "First-person opinion throughout",
              "Technical vocabulary, present tense, third person, and organised sections",
              "A single long paragraph with no headings",
              "Personal stories and emotional language",
            ],
            answer:
              "Technical vocabulary, present tense, third person, and organised sections",
          },
          {
            prompt:
              "What is the main purpose of the introduction in an information report?",
            options: [
              "To give all the most important facts first",
              "To express the writer's opinion on the topic",
              "To define the topic, preview the sections, and engage the reader",
              "To list all the sources used",
            ],
            answer: "To define the topic, preview the sections, and engage the reader",
          },
          {
            prompt:
              "What is the difference between summarising and synthesising sources?",
            options: [
              "They mean the same thing",
              "Summarising repeats one source; synthesising integrates multiple sources into a new understanding",
              "Synthesising copies the sources directly",
              "Summarising means rewriting in your own words; synthesising means copying",
            ],
            answer:
              "Summarising repeats one source; synthesising integrates multiple sources into a new understanding",
          },
        ],
      },
      {
        type: "open-response",
        title: "Revise Your Draft — Make Five Improvements",
        instruction:
          "Make at least five specific improvements to your draft report. Record each change below.",
        parentTip:
          "Each improvement should be justified — 'I changed this because...'. This habit of explaining revision decisions is a mark of genuine writing development.",
        prompts: [
          {
            text: "Improvement 1 — what changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Improvement 2 — what changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Improvement 3 — what changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Improvement 4 — what changed and why:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Improvement 5 — what changed and why:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Plan a Visual Aid",
        instruction:
          "Every good report benefits from at least one visual element. Plan a diagram, table, or illustration that would enhance your report.",
        parentTip:
          "Visual aids in reports serve a specific informational purpose — they clarify, organise, or illustrate information that is harder to communicate in prose. Encourage the design to serve the content, not just decorate the page.",
        prompts: [
          {
            text: "What type of visual would best suit your report? (Table, diagram, map, timeline, labelled illustration)",
            type: "lines",
            lines: 1,
          },
          {
            text: "What information would it show, and which section of the report would it accompany?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Sketch or describe your planned visual aid here:",
            type: "box",
          },
        ],
      },
      {
        type: "true-false",
        title: "Quality Report Checklist — True or False?",
        instruction:
          "Rate your own report against these quality indicators. TRUE means your report achieves this; FALSE means it needs improvement.",
        statements: [
          {
            text: "My introduction opens with an engaging fact or question that earns the reader's attention.",
            answer: true,
          },
          {
            text: "All body sections have a clear topic sentence.",
            answer: true,
          },
          {
            text: "I have used at least three pieces of evidence drawn from credible sources.",
            answer: true,
          },
          {
            text: "My report is written consistently in third person and present tense.",
            answer: true,
          },
          {
            text: "My conclusion synthesises the key information and reflects on its significance.",
            answer: true,
          },
        ],
        parentTip:
          "Use this as a genuine self-assessment. Any FALSE ratings become the revision priority list.",
      },
      {
        type: "spark",
        title: "Spark: The Report That Could Matter",
        content:
          "Research reports are not just school exercises. Every major policy decision, scientific advance, and social change has been supported by someone writing up what they found and why it matters. Environmental reports influenced the creation of national parks. Medical reports changed public health policy. Economic reports reshaped how governments manage crises. The skills you are practising right now — asking a question, finding reliable information, organising it clearly, and communicating it persuasively — are the skills that change the world. Take your own report seriously.",
      },
      {
        type: "open-response",
        title: "Add a Synthesis Sentence",
        instruction:
          "A synthesis sentence draws together information from multiple parts of your report to make a bigger point. Write one synthesis sentence for your conclusion that connects at least two of your body sections.",
        parentTip:
          "Model this together: 'The combination of [fact from Section 1] and [fact from Section 2] suggests that...' or 'What both [Section 1] and [Section 2] reveal is...' This is the hardest writing task in the report process.",
        prompts: [
          {
            text: "Synthesis sentence connecting two sections of your report:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Present Your Report Orally",
        instruction:
          "Present the key findings of your report as a 3–4 minute oral presentation to your family. Use your written report as notes, but try to speak rather than simply read.",
        parentTip:
          "Oral presentation of written material consolidates learning and develops a different but related skill. Ask the audience to listen for: the most interesting fact, and one question the report makes them want to research further.",
        suggestions: [
          "Structure your presentation: introduction (30 sec), three key findings (2 min), conclusion (30 sec).",
          "Try to speak from memory of the content, glancing at notes rather than reading.",
          "Ask your audience: what was the most surprising fact?",
          "Ask: what question does your report make them want to answer?",
          "Record feedback for any revisions to the written report.",
        ],
      },

      // ── EXTENDING (81–100) ──────────────────────────────────────────────
      {
        type: "tip",
        title: "Extending Tip: Reports as Arguments",
        content:
          "Even information reports are not entirely neutral — every decision about what to include, what to exclude, how to categorise, and what to emphasise reflects a perspective. A report on climate change that focuses only on economic costs of action (not the costs of inaction) reflects a particular framing. A history report that only names European explorers and not the First Nations peoples they encountered reflects a perspective. As you extend your report-writing skills, ask: whose perspective does my report reflect? What am I not including, and why?",
      },
      {
        type: "open-response",
        title: "Critical Reflection on Your Report's Perspective",
        instruction:
          "Read your draft report critically. Identify one perspective, group, or consideration that is underrepresented or absent from your report. Discuss what you would add if you were to write a more complete account.",
        parentTip:
          "This is a genuinely mature task. The goal is not to rewrite the report but to develop the habit of asking 'who is missing?' in any account of the world.",
        prompts: [
          {
            text: "What perspective, group, or consideration is underrepresented in your report?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What additional information or source would you add to give a more complete picture?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Does this absence change the overall impression your report gives? Explain:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Final Polished Report",
        instruction:
          "Produce a final, polished version of your report incorporating all revisions. If possible, type it and use headings, font hierarchy, and a bibliography. Aim for 450–600 words.",
        parentTip:
          "The final report should feel genuinely finished. Reading it aloud together is the best final quality check — clunky sentences, informal language, and structural problems are all more obvious when spoken.",
        prompts: [
          {
            text: "Write your final report on a separate page. When complete, record your word count and confirm all sections are present:\n\nWord count: _____ Title: _____ Introduction: _____ Sections: _____ Conclusion: _____ Bibliography: _____",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Advanced Report Quality — Assessment Style",
        instruction:
          "Choose the best answer for each question about high-quality report writing.",
        questions: [
          {
            prompt:
              "What distinguishes a synthesising conclusion from a summarising one?",
            options: [
              "The synthesising conclusion is shorter",
              "The synthesising conclusion integrates findings from across the report into a larger insight",
              "A summarising conclusion is always better",
              "They are the same thing",
            ],
            answer:
              "The synthesising conclusion integrates findings from across the report into a larger insight",
          },
          {
            prompt:
              "What is the most important reason to use multiple sources in a research report?",
            options: [
              "It makes the report longer",
              "One source may be biased, inaccurate, or incomplete — multiple sources increase reliability",
              "It looks more impressive",
              "Teachers require it",
            ],
            answer:
              "One source may be biased, inaccurate, or incomplete — multiple sources increase reliability",
          },
          {
            prompt:
              "A writer notices that their report's body sections are uneven — Section 2 has twice as many sentences as Sections 1 and 3. The best revision approach is:",
            options: [
              "Delete Section 2 entirely",
              "Review whether Section 2 is attempting to cover too much, and split it if needed",
              "Pad Sections 1 and 3 with extra sentences",
              "Delete the shorter sections",
            ],
            answer:
              "Review whether Section 2 is attempting to cover too much, and split it if needed",
          },
        ],
      },
      {
        type: "open-response",
        title: "Extend Your Report — Add a Fourth Section",
        instruction:
          "Identify a fourth aspect of your topic that your report has not yet covered. Research it briefly and write an additional section paragraph.",
        parentTip:
          "As knowledge grows, reports often need to expand. This extension task mirrors the real experience of writing longer documents — once you think you are done, there is always more to explore.",
        prompts: [
          {
            text: "New section heading: ___________________________________________\n\nNew section paragraph (using research notes):",
            type: "box",
          },
          {
            text: "Source used for this section: _____________________________________",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Convert Your Report to a Different Format",
        instruction:
          "Using the same research, rewrite a brief version of your report in a different format: a news article (200–250 words), a documentary script (short), or an infographic plan. Discuss how the format changes the way you present the information.",
        parentTip:
          "Different formats for the same information — this is a sophisticated literacy task that reveals how form shapes content. A news article has different priorities to a report; a documentary script uses voice and visuals. Discuss what is gained and lost in each format.",
        prompts: [
          {
            text: "Format chosen: ________________________________________________\n\nYour version:",
            type: "box",
          },
          {
            text: "What changed when you used this format instead of a report? What did you have to leave out?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Report Writing Quality Criteria",
        instruction:
          "Sort each criterion by how critical it is to report quality.",
        columns: ["Essential", "Important", "Desirable"],
        items: [
          { label: "Factual accuracy" },
          { label: "Decorative borders on each page" },
          { label: "Use of credible, cited sources" },
          { label: "Consistent font across the document" },
          { label: "Third-person, present-tense language" },
          { label: "At least one photograph or diagram" },
          { label: "Clear section headings and topic sentences" },
          { label: "A glossary of technical terms" },
        ],
      },
      {
        type: "open-response",
        title: "Annotated Bibliography",
        instruction:
          "Write an annotated bibliography for your report — a list of your sources with a one-sentence note on why each is reliable and relevant.",
        parentTip:
          "An annotated bibliography is used in secondary and tertiary education. Introducing it here builds an important academic literacy habit.",
        prompts: [
          {
            text: "Source 1: Title, author, URL or publication, year.\nAnnotation (one sentence on reliability and relevance):",
            type: "lines",
            lines: 3,
          },
          {
            text: "Source 2: Title, author, URL or publication, year.\nAnnotation:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Source 3 (if used): Title, author, URL or publication, year.\nAnnotation:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Peer Evaluation of Your Report",
        instruction:
          "If possible, ask a parent, sibling, or study partner to read your report and give structured feedback. Record their responses below.",
        parentTip:
          "Read the report aloud to the reviewer rather than asking them to read silently — it is faster and the listener is more likely to notice where the writing is unclear. Ask specific questions rather than open-ended ones.",
        prompts: [
          {
            text: "Reviewer: ______________________\n\nWhat did the reviewer say was the strongest part of the report?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What did the reviewer say was the most interesting fact?",
            type: "lines",
            lines: 1,
          },
          {
            text: "What did the reviewer say could be improved?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What revision will you make based on this feedback?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // ── EXTENDING: Activities 59–100
      {
        type: "tip",
        title: "Tip: The Purpose of Each Report Section",
        content:
          "A well-structured research report has a clear purpose for each section: the Introduction establishes topic, scope, and why it matters; body sections each address ONE aspect in depth; the Conclusion synthesises key findings and reflects on significance; the Reference List demonstrates your research process and gives readers sources to follow. Every sentence in the report should belong to one of these purposes.",
      },
      {
        type: "matching",
        title: "Match: Section to Its Purpose",
        instruction:
          "Match each report section to its main purpose.",
        parentTip:
          "Understanding the purpose of each report section enables students to make deliberate structural choices rather than following a template mechanically.",
        left: ["Introduction", "Body section", "Conclusion", "Reference list"],
        right: [
          "Credits sources and allows readers to verify or explore further",
          "Provides in-depth information on one specific aspect of the topic",
          "Establishes topic, scope, and significance; orients the reader",
          "Synthesises key findings and reflects on the topic's importance",
        ],
      },
      {
        type: "true-false",
        title: "True or False: Research Report Language",
        instruction: "Mark each statement True or False.",
        parentTip:
          "These statements address specific register features of information report writing. Discussing why each is true or false is more valuable than the answers themselves.",
        statements: [
          {
            text: "Research reports should use first person throughout to show the writer's perspective.",
            answer: false,
          },
          {
            text: "Technical vocabulary specific to the topic is appropriate in a research report.",
            answer: true,
          },
          {
            text: "Subheadings help readers navigate the report and locate specific information.",
            answer: true,
          },
          {
            text: "A research report conclusion should introduce new information not covered in the body.",
            answer: false,
          },
          {
            text: "Paraphrasing means copying a source word for word.",
            answer: false,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: Your Report Introduction",
        instruction:
          "Write a formal introduction for your research report (4–5 sentences). Include: what the topic is, why it matters or is interesting, and what aspects the report will cover.",
        parentTip:
          "The introduction is often the hardest paragraph to write because it requires knowing the whole report before you can introduce it accurately. Encourage revision after the body sections are drafted.",
        prompts: [
          {
            text: "My research report introduction:",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Paraphrasing Practice",
        instruction:
          "The sentence below is a direct quotation from a source. Paraphrase it (rewrite in your own words without copying the original) in the space provided.",
        parentTip:
          "Paraphrasing is a fundamental research skill. Students who cannot paraphrase effectively resort to copying, which is plagiarism. Practise until paraphrasing feels natural.",
        sentences: [
          {
            text: "Original: 'The Great Barrier Reef, stretching over 2,300 kilometres along the Queensland coast, is the world's largest coral reef system and is visible from space.' My paraphrase: _____",
            blanks: ["[student paraphrase — e.g. Located off the Queensland coast and spanning more than 2,300 km, the Great Barrier Reef is the largest coral ecosystem on Earth and can even be seen from orbit.]"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Information Report vs Persuasive Text Features",
        instruction:
          "Sort each feature into whether it is typical of an information report, a persuasive text, or both.",
        parentTip:
          "Understanding genre differences prevents students from accidentally importing persuasive features into reports and vice versa. This distinction appears in NAPLAN writing assessments.",
        columns: ["Information Report", "Persuasive Text", "Both"],
        items: [
          { label: "Uses subheadings to organise sections" },
          { label: "Presents evidence to support a specific viewpoint" },
          { label: "Uses third person and formal language" },
          { label: "Includes facts and statistics" },
          { label: "Contains a call to action" },
          { label: "Aims to inform the reader" },
        ],
      },
      {
        type: "open-response",
        title: "Write: One Body Section",
        instruction:
          "Write one body section of your research report. Include: a subheading, 4–6 sentences of factual information using formal language, and at least one specific fact, statistic, or expert detail.",
        parentTip:
          "Body sections are the core of the report. Encourage your child to write each section as if explaining the topic to someone who is intelligent but knows nothing about it.",
        prompts: [
          {
            text: "Subheading:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Body section content:",
            type: "box",
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Evaluating Research Sources",
        instruction:
          "Choose the best answer about evaluating sources for a research report.",
        parentTip:
          "Source evaluation is a key information literacy skill aligned to the Australian Curriculum's General Capabilities (Critical and Creative Thinking, Information and Communication Technology).",
        questions: [
          {
            prompt: "Which source is generally most reliable for a Year 6 research report?",
            options: [
              "An anonymous blog post about the topic",
              "A Wikipedia article (as a starting point, not the only source)",
              "An article from a recognised scientific organisation or government website",
              "A social media post with many likes",
            ],
            answer:
              "An article from a recognised scientific organisation or government website",
          },
          {
            prompt: "What does it mean to evaluate a source's credibility?",
            options: [
              "Checking if it has a colourful layout",
              "Checking who wrote it, when, why, and whether it is based on evidence",
              "Checking if it is easy to read",
              "Checking if it agrees with what you already believe",
            ],
            answer:
              "Checking who wrote it, when, why, and whether it is based on evidence",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Notetaking That Avoids Plagiarism",
        content:
          "When taking notes for research, the most effective technique is: read a passage, close the source, and write in your own words from memory. This forces paraphrasing and prevents the accidental copying that can become plagiarism. If you need a direct quote, write it in quotation marks and note the source immediately. Notes that look exactly like the source are not notes — they are copying.",
      },
      {
        type: "open-response",
        title: "Research Notes Template",
        instruction:
          "Use this template to record notes from one source for your report. Paraphrase all information except any direct quotations (which should be in quotation marks).",
        parentTip:
          "Structured notetaking templates scaffold the research process. This template mirrors professional research practice and prevents plagiarism.",
        prompts: [
          {
            text: "Source (title, author/organisation, date, URL if digital):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Key information — paraphrased in my own words:",
            type: "box",
          },
          {
            text: "Any direct quotation I may use (in quotation marks, with page number or URL section):",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Circle: Formal or Informal Language?",
        instruction:
          "Circle the more formal option in each pair. The formal option is appropriate for a research report.",
        questions: [
          {
            prompt: "Which is more formal?",
            options: [
              "The platypus is a really weird animal.",
              "The platypus is a remarkable and highly unusual mammal.",
            ],
          },
          {
            prompt: "Which is more formal?",
            options: [
              "Scientists have found that coral bleaching is getting worse.",
              "Research conducted by marine scientists indicates that coral bleaching events are increasing in frequency.",
            ],
          },
          {
            prompt: "Which is more formal?",
            options: [
              "Lots of Australians live in cities.",
              "The majority of Australia's population resides in urban centres.",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite for Formal Register",
        instruction:
          "Rewrite these informal sentences in formal report language.",
        parentTip:
          "Register shifting — adjusting language formality for purpose and audience — is a key ACARA Year 6 outcome. This task makes the difference between registers explicit.",
        prompts: [
          {
            text: "Informal: 'Koalas sleep a lot because their food doesn't give them much energy.' Formal rewrite:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Informal: 'Climate change is a really big problem and we need to do something about it.' Formal rewrite:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Report Language Features",
        instruction:
          "Fill in the blank with the correct report language term or example.",
        sentences: [
          {
            text: "Instead of writing 'I think', in a formal report you write '_____'.",
            blanks: ["Evidence suggests / Research indicates"],
          },
          {
            text: "Instead of using second person 'you', reports use _____ person ('the species', 'scientists', 'research').",
            blanks: ["third"],
          },
          {
            text: "To introduce a definition in a report: 'The _____ is defined as...'",
            blanks: ["[relevant technical term]"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Report Conclusion",
        instruction:
          "Write a conclusion for your research report (4–5 sentences). Include: a brief summary of the main findings, a reflection on why the topic matters, and possibly a final observation or forward-looking statement.",
        parentTip:
          "Report conclusions are often underdeveloped. A conclusion that synthesises rather than repeats, and that shows the writer's engagement with the significance of the topic, is the mark of a mature researcher.",
        prompts: [
          {
            text: "My report conclusion:",
            type: "box",
          },
        ],
      },
      {
        type: "matching",
        title: "Match: Reference Format to Source Type",
        instruction:
          "A reference list records your sources. Match each source type to the information you need to record for it.",
        parentTip:
          "Introducing basic referencing at Year 6 establishes a habit that will serve students throughout secondary school and beyond. The format matters less than the practice of recording sources.",
        left: ["Website article", "Printed book", "Documentary film"],
        right: [
          "Author/Director, Year, Title, Studio/Channel",
          "Author, Year, Title, Publisher, City",
          "Author, Date accessed, Title of article, Website name, URL",
        ],
      },
      {
        type: "true-false",
        title: "True or False: Research Process",
        instruction: "Mark each statement True or False.",
        statements: [
          {
            text: "Copying text directly from a source without quotation marks is plagiarism.",
            answer: true,
          },
          {
            text: "You only need to reference sources that you quote directly; paraphrased information does not need referencing.",
            answer: false,
          },
          {
            text: "A reference list should be placed at the end of the report.",
            answer: true,
          },
          {
            text: "Using only one source for a research report is generally sufficient.",
            answer: false,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Report Writing Steps in Order",
        instruction:
          "Sort these steps in the research report writing process into the correct order.",
        parentTip:
          "Understanding the full process — not just the writing — is important. Many students skip planning and research, which leads to thin or inaccurate reports.",
        columns: ["1st", "2nd", "3rd", "4th", "5th"],
        items: [
          { label: "Research: find and evaluate sources, take paraphrased notes" },
          { label: "Draft: write introduction, body sections, conclusion" },
          { label: "Select topic and formulate key questions" },
          { label: "Revise and proofread; compile reference list" },
          { label: "Plan: organise information into sections with subheadings" },
        ],
      },
      {
        type: "open-response",
        title: "Self-Edit Your Report Draft",
        instruction:
          "Use this checklist to self-edit one section of your report. For each item, mark yes or no, then make corrections.",
        parentTip:
          "Self-editing against explicit criteria is more effective than general re-reading. This checklist mirrors the kind of criteria used in formal writing assessments.",
        prompts: [
          {
            text: "Checklist: Does my section have a clear subheading? (yes/no and note)",
            type: "lines",
            lines: 1,
          },
          {
            text: "Is every sentence factual and in formal language? (yes/no and note any informal language to fix)",
            type: "lines",
            lines: 2,
          },
          {
            text: "Have I included at least one specific detail (fact, statistic, example)? (yes/no and note)",
            type: "lines",
            lines: 1,
          },
          {
            text: "Is the information in my own words (not copied from a source)? (yes/no)",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Report Structure Assessment",
        instruction:
          "Choose the best answer about research report structure.",
        questions: [
          {
            prompt: "What is the purpose of subheadings in a research report?",
            options: [
              "To make the report look longer",
              "To help readers navigate and locate specific sections",
              "To introduce new topics that were not planned",
              "To replace the need for an introduction",
            ],
            answer: "To help readers navigate and locate specific sections",
          },
          {
            prompt: "Which feature belongs in an information report but NOT in a persuasive essay?",
            options: [
              "A call to action",
              "Emotive language",
              "Factual information organised under subheadings with third-person language",
              "A counter-argument",
            ],
            answer:
              "Factual information organised under subheadings with third-person language",
          },
        ],
      },
      {
        type: "open-response",
        title: "Interview a Subject Expert",
        instruction:
          "If possible, identify someone in your community or family who knows about your research topic (a farmer, nurse, builder, naturalist, etc.). Prepare three interview questions and record their responses to use in your report.",
        parentTip:
          "Primary research — gathering information from a real person — is a powerful extension of report writing. It connects the academic task to the real world and teaches interviewing as a research method.",
        prompts: [
          {
            text: "Expert I will interview (name and their connection to my topic):",
            type: "lines",
            lines: 1,
          },
          {
            text: "Interview question 1 and response:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Interview question 2 and response:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Interview question 3 and response:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: What Makes a Report Introduction Excellent?",
        content:
          "An excellent report introduction does five things: (1) Hooks the reader with a striking fact or question. (2) Defines the topic clearly. (3) Explains why the topic is important or interesting. (4) Indicates the scope — what aspects the report will cover. (5) Uses formal, third-person language throughout. A weak introduction simply announces the topic. An excellent one makes the reader want to continue.",
      },
      {
        type: "open-response",
        title: "Improve This Weak Introduction",
        instruction:
          "Read this weak report introduction, then rewrite it to be excellent — using all five elements from the tip above.",
        parentTip:
          "Revision of weak writing is often more instructive than writing from scratch. The comparison between weak and improved versions reveals exactly what quality means.",
        prompts: [
          {
            text: "Weak introduction: 'This report is about sharks. Sharks are interesting. I will write about where they live, what they eat, and their behaviour. I hope you find it interesting.'",
            type: "lines",
            lines: 1,
          },
          {
            text: "My improved introduction (using all five excellence elements):",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: Your Full Report Plan",
        instruction:
          "Create a complete plan for your research report. Include: topic, key question, three or four section topics with notes on what each will cover, and your reference list (sources found so far).",
        parentTip:
          "A complete plan before writing is the single most effective way to improve report quality. Research shows that planning time is not wasted — it dramatically improves both the writing speed and the quality of the final product.",
        prompts: [
          {
            text: "Topic and key question:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Section 1 topic and key points to cover:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Section 2 topic and key points to cover:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Section 3 topic and key points to cover:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Sources found so far (title, author/organisation, URL):",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Choose the Best Report Sentence",
        instruction:
          "In each pair, choose the sentence that is better suited to a formal research report.",
        questions: [
          {
            prompt: "Which sentence is better for a report?",
            options: [
              "Wombats are so cute and I love them!",
              "The common wombat (Vombatus ursinus) is a herbivorous marsupial native to the forested regions of south-eastern Australia.",
            ],
            answer:
              "The common wombat (Vombatus ursinus) is a herbivorous marsupial native to the forested regions of south-eastern Australia.",
          },
          {
            prompt: "Which sentence is better for a conclusion?",
            options: [
              "That's the end of my report. I hope you liked it.",
              "The evidence presented demonstrates that sustainable fishing practices are essential for the long-term preservation of marine biodiversity.",
            ],
            answer:
              "The evidence presented demonstrates that sustainable fishing practices are essential for the long-term preservation of marine biodiversity.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Cross-Curricular Connection: Report on a STEM Topic",
        instruction:
          "Choose a STEM topic related to something you have studied this year (in science, geography, or mathematics). Plan a two-paragraph report excerpt on that topic, applying your report writing skills to another subject area.",
        parentTip:
          "Cross-curricular transfer is the highest-order application of a skill. A student who can apply report writing skills across subjects is developing the genuine academic literacy needed for secondary school.",
        prompts: [
          {
            text: "STEM topic chosen and its subject area connection:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Two-paragraph report excerpt on the STEM topic:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Glossary for Your Report",
        instruction:
          "Research reports on technical topics often include a glossary — a list of key terms with definitions. Write a glossary of 5–8 technical terms from your research topic.",
        parentTip:
          "Creating a glossary requires students to understand terms well enough to define them accurately in their own words. It also makes reports more accessible to readers.",
        prompts: [
          {
            text: "Glossary (5–8 terms with precise definitions in formal language):",
            type: "box",
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Report Vocabulary — Reporting Verbs",
        instruction:
          "Research reports use specific verbs to introduce findings. Fill in the blank with the most appropriate reporting verb.",
        parentTip:
          "Reporting verbs are an important feature of academic writing. Using a variety of them (rather than always writing 'says') is a sign of sophisticated writing.",
        sentences: [
          {
            text: "The study _____ that exercise improves cognitive function. (stronger than 'says')",
            blanks: ["demonstrates"],
          },
          {
            text: "Scientists _____ that the species evolved from a common ancestor. (sharing a reasoned view)",
            blanks: ["suggest"],
          },
          {
            text: "The data _____ a significant increase in ocean temperatures over the past decade. (showing clearly)",
            blanks: ["reveals"],
          },
          {
            text: "Research _____ a strong link between diet and long-term health outcomes. (establishing a connection)",
            blanks: ["indicates"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Proofread and Revise",
        instruction:
          "Proofreading is different from editing. Proofreading looks for surface errors: spelling, punctuation, grammar. Take one page of your draft and proofread it carefully. List every error you find and how you corrected it.",
        parentTip:
          "Proofreading is a discipline separate from writing. Many students write well but proofread poorly. Encouraging slow, word-by-word reading builds this skill.",
        prompts: [
          {
            text: "Errors found and corrections made:",
            type: "box",
          },
          {
            text: "Which type of error appeared most often? What will I watch for in future writing?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Final Report Check",
        instruction: "Use these statements as a final self-check for your completed research report.",
        parentTip:
          "This final true-false serves as a completion checklist — a practical application of the skills learned. Review any false answers together as revision targets.",
        statements: [
          {
            text: "My report has an introduction, clearly organised body sections with subheadings, and a conclusion.",
            answer: true,
          },
          {
            text: "I have used formal, third-person language throughout.",
            answer: true,
          },
          {
            text: "All information has been paraphrased in my own words (or placed in quotation marks if directly quoted).",
            answer: true,
          },
          {
            text: "My reference list includes at least three different sources.",
            answer: true,
          },
        ],
      },
      {
        type: "open-response",
        title: "Reflection: What I Learned About Research",
        instruction:
          "Write a reflection (5–6 sentences) on what you have learned about the research report writing process. What was the most difficult step? What will you do differently next time?",
        parentTip:
          "Process reflection builds metacognitive awareness — the ability to monitor and direct one's own learning. This is one of the most powerful skills developed in the Australian Curriculum's General Capabilities.",
        prompts: [
          {
            text: "My reflection on the research and report writing process:",
            type: "box",
          },
        ],
      },
      {
        type: "tip",
        title: "Tip: Adding Value Beyond Facts",
        content:
          "A good report informs. An excellent report goes further: it helps the reader understand why the facts matter. In your conclusion and throughout your writing, look for places to add analytical value — to say not just what happened or what is true, but what it means, why it matters, or what it might mean for the future. This is the difference between a reference document and a piece of writing worth reading.",
      },
      {
        type: "open-response",
        title: "Add Analysis: Why Does This Fact Matter?",
        instruction:
          "Choose three facts from your research report. For each fact, write one additional sentence that analyses its significance — why it matters, what it suggests, or what it means for the broader topic.",
        parentTip:
          "The habit of asking 'so what?' after every fact is a core academic thinking skill. Encouraging it at Year 6 builds the analytical muscle needed for secondary school.",
        prompts: [
          {
            text: "Fact 1 and its significance:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Fact 2 and its significance:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Fact 3 and its significance:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Research Skills: Evaluating Search Results",
        instruction:
          "When researching online, not all results are equal. Choose the best answer for each question about evaluating search results.",
        parentTip:
          "Digital information literacy is a General Capability in the Australian Curriculum. These questions build practical research skills applicable across all subjects.",
        questions: [
          {
            prompt: "Which domain ending generally indicates the most reliable source for factual research?",
            options: [".com", ".gov.au or .edu.au", ".net", ".info"],
            answer: ".gov.au or .edu.au",
          },
          {
            prompt: "When should you use Wikipedia as a research source?",
            options: [
              "As your only source — it is always accurate",
              "Never — it is always unreliable",
              "As a starting point to understand a topic and find links to primary sources",
              "Only for non-academic topics",
            ],
            answer:
              "As a starting point to understand a topic and find links to primary sources",
          },
        ],
      },
      {
        type: "open-response",
        title: "Create a Visual Aid for Your Report",
        instruction:
          "Create or describe a visual aid (diagram, map, table, or graph) that would enhance your research report. Write a caption for it that explains what it shows and why it is relevant to your topic.",
        parentTip:
          "Visual literacy — the ability to create and interpret visual information — is a key component of multimodal literacy in the Australian Curriculum. Even a hand-drawn diagram or a described table builds this skill.",
        prompts: [
          {
            text: "Type of visual aid and what it would show:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Caption (what the visual shows and why it matters):",
            type: "lines",
            lines: 2,
          },
          {
            text: "Where in the report would this visual appear, and why there?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "fill-in-blank",
        title: "Academic Vocabulary for Research Reports",
        instruction:
          "Fill in the blank with the correct academic vocabulary word or phrase.",
        parentTip:
          "Academic vocabulary — the tier 3 vocabulary of formal writing — is one of the most powerful accelerators of educational achievement. Building it explicitly at Year 6 has significant long-term benefits.",
        sentences: [
          {
            text: "A list of all sources consulted during research is called a _____ list or bibliography.",
            blanks: ["reference"],
          },
          {
            text: "When you use someone's ideas without crediting them, this is called _____.",
            blanks: ["plagiarism"],
          },
          {
            text: "Information collected by the researcher directly (through observation, experiment, or interview) is called _____ data.",
            blanks: ["primary"],
          },
          {
            text: "Information gathered from existing sources such as books and articles is called _____ data.",
            blanks: ["secondary"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write: A Strong Final Sentence for Each Section",
        instruction:
          "The final sentence of each section is its most important — it synthesises and links. Write a strong final sentence for each of your body sections. Each should summarise the section's contribution to the overall topic.",
        parentTip:
          "Section-closing sentences are often the weakest part of student reports. Training explicit attention on them improves structural coherence significantly.",
        prompts: [
          {
            text: "Final sentence for body section 1:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Final sentence for body section 2:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Final sentence for body section 3:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Report Language Features — Formal vs Informal",
        instruction:
          "Sort each language feature into Formal (appropriate for a report) or Informal (not appropriate for a report).",
        columns: ["Formal — use in report", "Informal — avoid in report"],
        items: [
          { label: "Third person ('Scientists have found...')" },
          { label: "Contractions ('don't', 'can't', 'it's')" },
          { label: "Precise technical vocabulary" },
          { label: "Slang or colloquial expressions" },
          { label: "Hedging language ('research suggests...')" },
          { label: "First person ('I think...')" },
          { label: "Passive voice ('It was found that...')" },
          { label: "Direct address ('You can see that...')" },
        ],
      },
      {
        type: "open-response",
        title: "Present: Explain Your Report to Your Parent",
        instruction:
          "Verbally explain your research report to a parent or family member — without reading from it. Explain your topic, why it matters, the three main things you found, and one thing that surprised you. Then ask: what question did my explanation raise for you?",
        parentTip:
          "Oral presentation of written work builds fluency, consolidates understanding, and develops the very different skill of explaining versus writing. The question your audience raises often becomes the most valuable feedback.",
        prompts: [
          {
            text: "What question did your listener have after your explanation?",
            type: "lines",
            lines: 2,
          },
          {
            text: "How would you address that question in a future version of your report?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "true-false",
        title: "True or False: Final Research Report Assessment",
        instruction: "Mark each statement True or False as a final check of your report knowledge.",
        statements: [
          {
            text: "A well-structured research report has an introduction, body sections with subheadings, and a conclusion.",
            answer: true,
          },
          {
            text: "Using informal language like 'loads of' instead of 'many' is appropriate in a formal report.",
            answer: false,
          },
          {
            text: "A reference list is optional in a research report.",
            answer: false,
          },
          {
            text: "Technical vocabulary specific to your topic can be used if readers may not know it (provide definitions if needed).",
            answer: true,
          },
          {
            text: "A conclusion that introduces new, unrelated information is well-structured.",
            answer: false,
          },
        ],
      },
      {
        type: "multiple-choice",
        title: "Final Assessment: Research Report Writing",
        instruction:
          "Final assessment — choose the best answer for each question to demonstrate mastery of research report writing.",
        questions: [
          {
            prompt: "What is the main purpose of a research report?",
            options: [
              "To persuade the reader to agree with an opinion",
              "To entertain the reader with a story",
              "To present well-researched, factual information about a topic in an organised way",
              "To summarise what the writer already knew",
            ],
            answer:
              "To present well-researched, factual information about a topic in an organised way",
          },
          {
            prompt: "Which of these is the best opening sentence for a research report introduction?",
            options: [
              "This report is about sharks.",
              "I chose sharks because I think they are cool.",
              "Sharks, which have existed for over 450 million years, are among the most ecologically important predators in marine ecosystems.",
              "Everyone knows about sharks.",
            ],
            answer:
              "Sharks, which have existed for over 450 million years, are among the most ecologically important predators in marine ecosystems.",
          },
        ],
      },
      {
        type: "open-response",
        title: "Your Research Journey: From Question to Report",
        instruction:
          "Write a 5–6 sentence account of your research journey for this report: what question started you off, what was the most surprising thing you discovered, what was the hardest part of the research or writing process, and what would you do differently next time?",
        parentTip:
          "Process narration — telling the story of how you completed a task — is a metacognitive skill that builds learning awareness. It helps students understand not just what they learned but how they learn.",
        prompts: [
          {
            text: "My research journey — from question to completed report:",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "What I Now Know About Research and Writing",
        instruction:
          "Write a final paragraph (5–7 sentences) on what this unit has taught you about research, academic writing, and the value of writing to communicate genuine knowledge.",
        parentTip:
          "This final reflection marks the completion of the full research report writing cycle. Celebrate this genuinely — completing a research report is a significant academic achievement at Year 6.",
        prompts: [
          {
            text: "What I now know about research and writing that I did not know before:",
            type: "box",
          },
        ],
      },
      {
        type: "spark",
        title: "Spark: The Report Worth Writing",
        content:
          "The best reports are written by people who are genuinely curious about their topic — who found things that surprised them, who wanted to understand something better, and who care about communicating what they discovered clearly to others. Every scientific paper, every historical analysis, every environmental assessment started this way: one person who wanted to know, and then wanted to share. You have now practised the entire process, from question to research to draft to final version. The question is: what do you want to know next?",
      },
      {
        type: "home-activity",
        title: "Publish Your Report",
        instruction:
          "Find an audience for your finished report. This could mean: sharing it with grandparents, presenting it to the local library, contributing it to a family newsletter, or submitting it to a school or community competition.",
        parentTip:
          "Writing for a real audience changes everything about the quality of effort. Even the modest act of sharing the report with a grandparent who is genuinely interested in the topic transforms the writing from a school task into a communication.",
        suggestions: [
          "Share the finished report with one interested reader outside your immediate family.",
          "If the topic is relevant, contact the organisation responsible for it (a national park, a zoo, a council) and share your findings.",
          "Consider entering a school writing competition or submitting to a student publication.",
          "Discuss: how does knowing someone will really read your work affect how carefully you write?",
          "Record the response — what did your audience find most interesting?",
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
