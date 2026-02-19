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
