import type { WorksheetItem } from "./worksheet-types";

export const foundationEnglishWorksheets: WorksheetItem[] = [
  // ── WS 1: Rhyme Time ──────────────────────────────────────
  {
    slug: "rhyme-time",
    title: "Rhyme Time",
    strand: "Language",
    description:
      "Listen for and identify rhyming word pairs — a key building block for phonological awareness and early reading.",
    learningGuide: {
      concept:
        "Rhyme is when two words share the same ending sound (cat/hat, dog/log). Noticing rhyme trains young ears to hear sound patterns within words — the first step in learning to read.",
      activation:
        "Say a short rhyming poem or nursery rhyme together (e.g. Hairy Maclary). Ask: Did you notice any words that sound the same at the end?",
      check:
        "Can your child clap or tap every time they hear a rhyme? Can they supply a rhyming word when you say the first one?",
    },
    lesson: {
      title: "Can You Hear the Rhyme?",
      objective:
        "Identify and produce rhyming words by listening carefully to ending sounds.",
      materials: [
        "A picture book or nursery rhyme book (any you have at home)",
        "Pencil and crayons",
        "Small pieces of paper for rhyme cards (optional)",
      ],
      intro: {
        title: "The Rhyming Game",
        script:
          "Let us play a listening game. I am going to say two words, and I want you to tell me if they rhyme — that means they sound the same at the END. Ready? Cat... hat. Do they rhyme? Listen again: cat... hat. Yes! Now try this one: sun... bus. Hmm, do those rhyme? No, they do not quite match at the end, do they?",
        action:
          "Say 5 to 6 word pairs aloud — some rhyming, some not. Tap the table for each word to make the rhythm feel fun. Let your child give a thumbs up for rhyme, thumbs down for no rhyme.",
      },
      mainActivity: {
        title: "Draw the Rhyme",
        script:
          "Now it is your turn to be the artist. I am going to say a word, and you are going to draw a picture of it AND a picture of a word that rhymes with it. So if I say star, you might draw a star and then a car, because star and car rhyme! Let us try together first.",
        action:
          "Call out words one at a time: cat, sun, hat, log, bee, tree. Let your child draw both words in the activity boxes. Encourage invented spelling for labels.",
      },
      wrapUp: {
        title: "Rhyme Hunt",
        script:
          "Brilliant listening today! Before we finish, let us do a quick rhyme hunt around the room. I will say a word and you find something nearby that rhymes with it. Ready? Find something that rhymes with chair... wall... rug. Well done!",
        action:
          "Point to objects in the room and say rhyming words aloud. Let your child run to touch the rhyming object if they find it.",
      },
      parentTip:
        "Rhyming games are perfect in the car or at bath time — no materials needed. Simply take turns adding rhyming words. Do not worry about nonsense words; made-up rhymes show strong phonological thinking.",
      extension:
        "Read a rhyming picture book (e.g. Hairy Maclary by Lynley Dodd) together and pause before each rhyming word, letting your child predict what comes next. This aligns with AC V9 Foundation English — Language: listening for rhymes and sound patterns.",
      resources: [
        {
          title: "ABC Education — Phonological Awareness",
          url: "https://www.abc.net.au/education/learn-english/phonological-awareness/",
          description:
            "Short video clips and games focused on rhyme, syllables and beginning sounds for early learners.",
        },
        {
          title: "Starfall — Rhyming Activities",
          url: "https://www.starfall.com/",
          description:
            "Free interactive phonics and rhyming activities with friendly audio support for Foundation-age children.",
        },
        {
          title: "Khan Academy Kids — Phonological Awareness",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Playful app-based activities covering rhyme, beginning sounds and syllables, free for early learners.",
        },
      ],
    },
    activities: [
      {
        type: "matching" as const,
        title: "Match the Rhymes",
        instruction:
          "Draw a line to join each word on the left to the word it rhymes with on the right.",
        parentTip:
          "Say each word aloud clearly and slowly — the child matches by sound, not meaning.",
        left: ["cat", "sun", "log", "bee", "hat", "tree"],
        right: ["tree", "hat", "sun", "log", "bee", "cat"],
      },
      {
        type: "circle-correct" as const,
        title: "Does it Rhyme?",
        instruction:
          "Circle YES or NO to show whether the two words rhyme.",
        parentTip:
          "Read each word pair aloud. If your child is unsure, stretch out the ending sound.",
        questions: [
          { prompt: "cat — hat", options: ["YES", "NO"] },
          { prompt: "dog — log", options: ["YES", "NO"] },
          { prompt: "sun — bus", options: ["YES", "NO"] },
          { prompt: "red — bed", options: ["YES", "NO"] },
          { prompt: "fish — dish", options: ["YES", "NO"] },
          { prompt: "star — ball", options: ["YES", "NO"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Draw Your Own Rhyme",
        instruction:
          "Draw a picture of each word. Then draw a picture of a word that rhymes with it.",
        parentTip:
          "Encourage your child to say the ending sound aloud before drawing. Accept any rhyming word — real or made-up!",
        prompts: [
          { text: "Draw: star. Then draw something that rhymes with star.", type: "box" as const },
          { text: "Draw: bee. Then draw something that rhymes with bee.", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Rhyme All Day",
        instruction:
          "Try these fun rhyming activities at home — no paper needed!",
        parentTip:
          "Keep it playful. The goal is for your child to enjoy listening to the sounds in words.",
        suggestions: [
          "Play I Spy a Rhyme: I spy something that rhymes with door (floor, more, etc.)",
          "Read a nursery rhyme together. Pause before the rhyming word and let your child fill it in.",
          "Make up a silly rhyming sentence using your child's name.",
          "Clap once for each syllable in a word, then find a rhyme for it.",
        ],
      },
    ],
  },

  // ── WS 2: Beginning Sounds ────────────────────────────────
  {
    slug: "beginning-sounds",
    title: "Beginning Sounds",
    strand: "Language",
    description:
      "Listen for and identify the first sound (phoneme) in spoken words — a critical phonics and phonological awareness skill.",
    learningGuide: {
      concept:
        "A phoneme is the smallest unit of sound in a word. The first phoneme (beginning sound) of 'cat' is /k/. Isolating beginning sounds helps children link letters to the sounds they represent — the core of phonics.",
      activation:
        "Play I-Spy using beginning sounds: I spy something beginning with /s/... (sun, sock, seat). This warms up phonological awareness before written work.",
      check:
        "Ask your child: What sound does this word start with? using familiar objects around the home. Can they isolate the first sound independently?",
    },
    lesson: {
      title: "What's the First Sound?",
      objective:
        "Isolate and say the first phoneme in spoken single-syllable words.",
      materials: [
        "Old magazines or catalogues (for picture cutting, optional)",
        "Pencil and crayons",
        "A set of household objects: sock, book, cup, pen, apple",
      ],
      intro: {
        title: "Sound Detectives",
        script:
          "We are going to be sound detectives today! A detective listens very, very carefully. I am going to say a word and I want you to tell me the VERY FIRST sound you hear — just the first little sound. Listen: mmmoon. What is the first sound? Yes, /m/! Now try this one: sssun. What is the first sound? Great, /s/!",
        action:
          "Hold up objects or point to pictures and stretch the first sound out slightly to help your child isolate it. Do 4 to 5 examples together before the written activity.",
      },
      mainActivity: {
        title: "Sort by Beginning Sound",
        script:
          "I am going to say some words, and you are going to sort them into groups based on their beginning sound. I will say the word, you say the beginning sound, and then put it in the right group. Let us try: sun starts with /s/. Mum starts with /m/. Banana — what does banana start with?",
        action:
          "Use the sorting activity on the worksheet. Say each word aloud before your child writes or draws in the correct column.",
      },
      wrapUp: {
        title: "Beginning Sound I-Spy",
        script:
          "Let us finish with a round of Sound I-Spy. I will pick a beginning sound and you find as many things in the room as you can that start with that sound. I spy with my little eye... everything starting with /b/!",
        action:
          "Take turns choosing a beginning sound. The child who finds the most objects wins a high-five.",
      },
      parentTip:
        "The key is to say the SOUND, not the letter name — say /s/ not 'ess'. Stretch the first sound slightly: sssun, mmmoon. This makes it much easier for young children to hear and identify.",
      extension:
        "Help your child make an alphabet sound book: fold 3 pieces of paper in half to make a booklet. Assign one letter per page and draw or paste pictures of things beginning with that sound. This covers AC V9 Foundation — naming letters and knowing the sounds they represent.",
      resources: [
        {
          title: "Starfall — Letter Sounds",
          url: "https://www.starfall.com/h/abcs/",
          description:
            "Interactive letter-sound activities where children can hear and practise each phoneme.",
        },
        {
          title: "ABC Education — Phonics",
          url: "https://www.abc.net.au/education/learn-english/phonics/",
          description:
            "Video resources and activities for Foundation phonics, aligned to the Australian Curriculum.",
        },
        {
          title: "Reading Eggs — Phonics Lessons",
          url: "https://readingeggs.com.au/",
          description:
            "Structured phonics program with engaging games covering letter-sound relationships from Foundation level.",
        },
      ],
    },
    activities: [
      {
        type: "sorting" as const,
        title: "Sort by Beginning Sound",
        instruction:
          "Listen to each word. Write it in the column that matches its beginning sound.",
        parentTip:
          "Say each word clearly: sun, mat, pig, bus, sock, man, pan, bat. Stretch the first sound slightly.",
        columns: ["/s/ sound", "/m/ sound", "/p/ sound", "/b/ sound"],
        items: [
          { label: "sun" },
          { label: "mat" },
          { label: "pig" },
          { label: "bus" },
          { label: "sock" },
          { label: "man" },
          { label: "pan" },
          { label: "bat" },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Same Beginning Sound?",
        instruction:
          "Circle YES if the two words start with the same sound. Circle NO if they do not.",
        parentTip:
          "Emphasise the first sound: sssun... sssock — do they start the same? Let your child listen before looking.",
        questions: [
          { prompt: "sun — sock", options: ["YES", "NO"] },
          { prompt: "cat — dog", options: ["YES", "NO"] },
          { prompt: "man — mop", options: ["YES", "NO"] },
          { prompt: "bed — bus", options: ["YES", "NO"] },
          { prompt: "fish — fan", options: ["YES", "NO"] },
          { prompt: "hat — hen", options: ["YES", "NO"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Draw It — Beginning Sound /a/",
        instruction:
          "Draw two things that begin with the sound /a/ (like apple or ant). Write the first letter next to each drawing.",
        parentTip:
          "If your child cannot think of words, prompt gently: What about something you see in the garden? An ant! What sound does ant start with?",
        prompts: [
          { text: "My first /a/ drawing:", type: "box" as const },
          { text: "My second /a/ drawing:", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Beginning Sound I-Spy",
        instruction: "Play these beginning sound games throughout the day.",
        parentTip:
          "These games are perfect during mealtimes, shopping trips or car rides.",
        suggestions: [
          "Play I-Spy with beginning sounds: I spy something starting with /t/.",
          "Go on a /b/ hunt around the house — find everything that starts with /b/.",
          "Say a beginning sound and take turns adding a word that starts with it.",
          "Sing the alphabet song and pause at a letter — ask what sound that letter makes.",
        ],
      },
    ],
  },

  // ── WS 3: Letter Recognition ──────────────────────────────
  {
    slug: "letter-recognition",
    title: "Letters Big and Small",
    strand: "Language",
    description:
      "Match uppercase and lowercase letters — building the letter recognition needed for reading and writing.",
    learningGuide: {
      concept:
        "Every letter has two forms: uppercase (capital) and lowercase. Recognising both forms is essential because books and texts use both. Children also need to know the name AND sound of each letter.",
      activation:
        "Write your child's name in uppercase letters and then again in lowercase. Point out: Did you know your name can be written two ways? Both say the same thing! Compare the two and discuss what looks the same and different.",
      check:
        "Hold up a letter card and ask: What letter is this? What sound does it make? Do this with both uppercase and lowercase forms.",
    },
    lesson: {
      title: "Big and Small Letter Match",
      objective:
        "Recognise and match uppercase and lowercase letter pairs, and name their sounds.",
      materials: [
        "Small pieces of paper or card (torn from cereal boxes)",
        "Pencil or marker",
        "Old magazines or catalogues (optional, for letter hunts)",
      ],
      intro: {
        title: "Meet the Letter Twins",
        script:
          "Did you know every letter in the alphabet has a twin? One twin is BIG (uppercase) and one is small (lowercase). They are the same letter, just dressed differently! Look at this: A and a. Same letter — different outfit! Can you find any uppercase or lowercase letters around the room right now?",
        action:
          "Look at books, cereal boxes, or other printed materials. Point out uppercase and lowercase letter pairs together.",
      },
      mainActivity: {
        title: "Letter Pair Snap",
        script:
          "I have written some letters on these cards. We are going to make pairs — matching the big letter to its small twin. When you find a match, say the letter name AND its sound. Ready? Let us go!",
        action:
          "Write 8 to 10 uppercase and matching lowercase letters on small cards. Shuffle them and play a matching game — or lay them out and draw lines between pairs.",
      },
      wrapUp: {
        title: "Write Your Letters",
        script:
          "You have been amazing at matching today! Now let us practise forming some of these letters ourselves. I will say a letter name and you write it — both the big and small version. We will take it slow and make each letter as neat as we can.",
        action:
          "Dictate 5 letters for your child to write in both forms. Praise effort and correct letter formation gently.",
      },
      parentTip:
        "When your child forms letters, watch the starting point and direction — most letters start at the top. Correct habits early as they are harder to undo later, but always keep the tone encouraging.",
      extension:
        "Go on a letter hunt in a newspaper or magazine. Circle every uppercase A in red and every lowercase a in blue. Count how many you find. This covers AC V9 Foundation — naming letters of the English alphabet.",
      resources: [
        {
          title: "Starfall — ABC Letters",
          url: "https://www.starfall.com/h/abcs/",
          description:
            "Interactive activities for recognising and sounding out each letter of the alphabet.",
        },
        {
          title: "ABC Education — Writing Letters",
          url: "https://www.abc.net.au/education/learn-english/letters/",
          description:
            "Video guides showing correct letter formation for Foundation students.",
        },
        {
          title: "Reading Eggs — Alphabet Activities",
          url: "https://readingeggs.com.au/",
          description:
            "Structured letter recognition and formation activities matched to Foundation level.",
        },
      ],
    },
    activities: [
      {
        type: "matching" as const,
        title: "Match Uppercase to Lowercase",
        instruction:
          "Draw a line to join the uppercase letter on the left to its lowercase twin on the right.",
        parentTip:
          "After matching, ask your child to say the letter name and its sound for each pair.",
        left: ["A", "B", "C", "D", "E", "F", "G", "H"],
        right: ["f", "b", "h", "a", "g", "c", "e", "d"],
      },
      {
        type: "circle-correct" as const,
        title: "Spot the Lowercase",
        instruction:
          "Circle the lowercase version of the letter shown at the start of each row.",
        parentTip:
          "Some children confuse b/d and p/q — name the letter and say its sound together to reinforce.",
        questions: [
          { prompt: "A —", options: ["a", "A", "e"] },
          { prompt: "B —", options: ["d", "b", "p"] },
          { prompt: "S —", options: ["S", "s", "z"] },
          { prompt: "M —", options: ["n", "m", "w"] },
          { prompt: "T —", options: ["T", "f", "t"] },
          { prompt: "G —", options: ["g", "q", "p"] },
        ],
      },
      {
        type: "open-response" as const,
        title: "Practise Writing Your Letters",
        instruction:
          "Write the uppercase AND lowercase version of each letter in the spaces below.",
        parentTip:
          "Check that your child starts each letter at the correct point — most letters begin at the top.",
        prompts: [
          { text: "Write uppercase letters A B C D E (write each 3 times)", type: "lines" as const, lines: 4 },
          { text: "Write lowercase letters a b c d e (write each 3 times)", type: "lines" as const, lines: 4 },
          { text: "Write the first letter of your name — big AND small version:", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Letters Everywhere",
        instruction: "Spot and practise letters in everyday life.",
        parentTip:
          "Environmental print (signs, food packaging, books) is a wonderful free resource for letter recognition.",
        suggestions: [
          "Go on a letter hunt in a magazine. Find the uppercase and lowercase for the first letter of your name.",
          "Write a letter in the air with your finger and ask your child to guess which letter.",
          "Trace letters in a tray of flour, sand or salt for a tactile experience.",
          "Look at food packaging and spot uppercase and lowercase letters together.",
        ],
      },
    ],
  },

  // ── WS 4: CVC Words ───────────────────────────────────────
  {
    slug: "cvc-words",
    title: "Short Word Sounds (CVC)",
    strand: "Language",
    description:
      "Blend consonant-vowel-consonant (CVC) words by saying each sound and blending them together — foundational decoding for reading.",
    learningGuide: {
      concept:
        "CVC words have three phonemes: a consonant, a short vowel, then another consonant — e.g. cat = /k/ /a/ /t/. Blending these sounds together is the heart of phonics-based reading. Segmenting (breaking words apart) is the reverse skill, used for spelling.",
      activation:
        "Demonstrate blending by saying the three sounds slowly then speeding up: /k/ ... /a/ ... /t/ ... kat ... cat! Compare it to a train starting slowly and then moving faster as the sounds join together.",
      check:
        "Say a CVC word stretched out (/c/ /u/ /p/) and ask your child to blend it into one word. Then say a whole word and ask them to stretch it out into three separate sounds.",
    },
    lesson: {
      title: "Blending Sounds to Read Words",
      objective:
        "Blend three phonemes (CVC) to read and write simple three-letter words.",
      materials: [
        "Pencil and crayons",
        "Strips of paper cut into three pieces (for sound boxes)",
        "Small objects that are 3-letter words: cup, pen, hat, bed, tin",
      ],
      intro: {
        title: "The Blending Train",
        script:
          "Reading is like driving a train! The train starts slowly and then gets faster as the carriages join up. Let us try it: I will say the sounds slowly — /h/ ... /a/ ... /t/ — and then we will speed the train up to make the word. Ready? /h/ /a/ /t/ ... hat! Let us try another: /c/ /u/ /p/. Can you speed the train up? Cup! Excellent!",
        action:
          "Use your fingers or small objects as carriages — one for each sound. Push them together as you blend.",
      },
      mainActivity: {
        title: "Sound Boxes",
        script:
          "Now we are going to use sound boxes. Each box holds one sound. I will say a word and you write one letter in each box — one letter per sound. Let us try sun. What is the first sound? /s/ — write it in the first box. Middle sound? /u/ — second box. Last sound? /n/ — third box. Now say it all together: sun!",
        action:
          "Draw three connected boxes on paper for each word: sun, hat, cat, pen, big, dog, mop, run. Say the word and have your child write one phoneme per box.",
      },
      wrapUp: {
        title: "Read and Match",
        script:
          "You have done so well blending and segmenting today! Now let us see if you can read some of these words on your own and match them to the right picture. Take your time — remember the blending train!",
        action:
          "Point to the written words in the matching activity and let your child blend each one independently.",
      },
      parentTip:
        "Keep blending sessions short — 10 minutes is plenty for Foundation children. Always start with words using known sounds and build up. Never skip the blending step by showing pictures before the child has a chance to decode the word.",
      extension:
        "Write 5 CVC words on cards and hide them around the house. When your child finds a card, they must blend the word and run to find an object that matches. This aligns with AC V9 Foundation — reading consonant-vowel-consonant words.",
      resources: [
        {
          title: "Starfall — Learn to Read",
          url: "https://www.starfall.com/h/learn-to-read/",
          description:
            "Structured phonics activities practising CVC words with audio support.",
        },
        {
          title: "ABC Reading Eggs — Phonics",
          url: "https://readingeggs.com.au/",
          description:
            "Blending and segmenting practice through engaging reading lessons for early learners.",
        },
        {
          title: "Khan Academy Kids — Reading",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Foundation reading activities including letter sounds and simple word blending.",
        },
      ],
    },
    activities: [
      {
        type: "matching" as const,
        title: "Match the Word to the Picture",
        instruction:
          "Draw a line to match each CVC word on the left to the correct label on the right. Sound out each word first!",
        parentTip:
          "Cover the right column while your child sounds out the left-hand words — this keeps it a true reading exercise.",
        left: ["cat", "sun", "hat", "dog", "cup", "pen"],
        right: ["cup", "dog", "pen", "hat", "cat", "sun"],
      },
      {
        type: "open-response" as const,
        title: "Sound Boxes — Write the Word",
        instruction:
          "Listen to each word. Write one letter in each box (one sound per box). Then write the whole word.",
        parentTip:
          "Say the word slowly so your child can hear each phoneme. Tap the boxes as you say each sound.",
        prompts: [
          { text: "Word: sun     [ _ ] [ _ ] [ _ ]     Full word: ______", type: "lines" as const, lines: 1 },
          { text: "Word: hat     [ _ ] [ _ ] [ _ ]     Full word: ______", type: "lines" as const, lines: 1 },
          { text: "Word: big     [ _ ] [ _ ] [ _ ]     Full word: ______", type: "lines" as const, lines: 1 },
          { text: "Word: mop    [ _ ] [ _ ] [ _ ]     Full word: ______", type: "lines" as const, lines: 1 },
          { text: "Word: run     [ _ ] [ _ ] [ _ ]     Full word: ______", type: "lines" as const, lines: 1 },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Which Word Matches?",
        instruction: "Read the clue. Circle the word that matches.",
        parentTip:
          "Let your child sound out all three options before circling — do not tell them the answer.",
        questions: [
          { prompt: "A thing you put on your head", options: ["hat", "hit", "hot"] },
          { prompt: "Man's best friend", options: ["dig", "dog", "dug"] },
          { prompt: "You drink from it", options: ["cop", "cap", "cup"] },
          { prompt: "Bright in the sky", options: ["son", "sun", "sin"] },
          { prompt: "A small insect", options: ["ant", "int", "ont"] },
        ],
      },
      {
        type: "home-activity" as const,
        title: "CVC Word Hunt",
        instruction: "Practise blending CVC words in real life.",
        parentTip:
          "Short daily bursts of 5 to 10 minutes of CVC practice are much more effective than one long session.",
        suggestions: [
          "Write 3 CVC words on sticky notes and hide them. Your child blends the word and finds the matching object.",
          "Play robot talk: say a word in robot sounds (/c/-/u/-/p/) and your child says the real word.",
          "Take turns being the robot — your child segments words into sounds for you to blend.",
          "Use bath letters or fridge magnets to build and blend CVC words together.",
        ],
      },
    ],
  },

  // ── WS 5: Syllables ───────────────────────────────────────
  {
    slug: "syllables",
    title: "Clapping Syllables",
    strand: "Language",
    description:
      "Break spoken words into syllables by clapping the beats — building phonological awareness and supporting spelling.",
    learningGuide: {
      concept:
        "A syllable is a beat or chunk of sound in a word. Every syllable has one vowel sound. 'Cat' has 1 syllable, 'rabbit' has 2, 'crocodile' has 3. Hearing syllables helps children spell longer words by breaking them into manageable chunks.",
      activation:
        "Say your child's name and clap each syllable. Then do the same with family members' names. This instantly shows syllables are real and everywhere.",
      check:
        "Say a word and ask: How many beats? Clap it out. Can your child clap and count syllables in 2- and 3-syllable words without your help?",
    },
    lesson: {
      title: "How Many Beats?",
      objective: "Clap and count syllables in words of 1 to 3 syllables.",
      materials: [
        "Pencil and paper",
        "A drum, pot lid, or clapping hands",
        "Small counting objects (blocks, coins, pasta pieces)",
      ],
      intro: {
        title: "Words Have Beats!",
        script:
          "Did you know that words are a bit like music? They have beats, just like a song! We call those beats syllables. Put your hand under your chin and say apple — feel how your chin drops twice? App-le. Two beats! Try cat — just one drop. One beat! Now try butterfly — but-ter-fly. Three drops! Can you feel it?",
        action:
          "Practise with your child's hand under their chin for several words. The chin-drop trick is more reliable than clapping for some children.",
      },
      mainActivity: {
        title: "Clap and Count",
        script:
          "Now let us clap the beats! I will say a word, you clap and count the syllables, then write the number. Ready? Crocodile — clap it with me: croc-o-dile. How many? Three! Great. Now fish... just one clap. Write the number!",
        action:
          "Work through the sorting and counting activities together. Use small objects (blocks) to represent each syllable.",
      },
      wrapUp: {
        title: "Syllable Sort",
        script:
          "Let us sort these animal names by how many syllables they have. One-syllable animals go here, two-syllable animals there, and three-syllable animals over here. Say each one slowly — ant, penguin, elephant...",
        action: "Sort animal name cards or spoken words into groups by syllable count.",
      },
      parentTip:
        "The chin-drop trick is the most reliable method for young children because it is physical and they can feel it clearly. If clapping is confusing, always go back to placing a hand under the chin.",
      extension:
        "Use your child's favourite toys or stuffed animals. How many syllables in each name? Sort them into 1, 2 or 3-syllable groups. This aligns with AC V9 Foundation — orally blending and segmenting phonemes in single-syllable words.",
      resources: [
        {
          title: "ABC Education — Syllables",
          url: "https://www.abc.net.au/education/learn-english/phonological-awareness/",
          description:
            "Audio-visual activities demonstrating syllable awareness for Foundation learners.",
        },
        {
          title: "Khan Academy Kids — Syllables",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive syllable counting activities for young learners.",
        },
        {
          title: "Starfall — Phonological Awareness",
          url: "https://www.starfall.com/",
          description:
            "Syllable and sound activities with playful, child-friendly presentation.",
        },
      ],
    },
    activities: [
      {
        type: "sorting" as const,
        title: "Sort by Number of Syllables",
        instruction:
          "Clap out each word. Write it in the column that shows how many syllables it has.",
        parentTip:
          "Say each word aloud at a moderate pace. Rushing makes syllable boundaries harder to hear.",
        columns: ["1 syllable", "2 syllables", "3 syllables"],
        items: [
          { label: "cat" },
          { label: "rabbit" },
          { label: "elephant" },
          { label: "dog" },
          { label: "penguin" },
          { label: "butterfly" },
          { label: "sun" },
          { label: "monkey" },
          { label: "crocodile" },
        ],
      },
      {
        type: "open-response" as const,
        title: "Clap and Count",
        instruction:
          "Clap the syllables in each word. Write the number of syllables you clapped.",
        parentTip:
          "Let your child clap before they write the number — the physical action makes syllables concrete.",
        prompts: [
          { text: "apple: _____ syllables", type: "lines" as const, lines: 1 },
          { text: "dinosaur: _____ syllables", type: "lines" as const, lines: 1 },
          { text: "hat: _____ syllables", type: "lines" as const, lines: 1 },
          { text: "umbrella: _____ syllables", type: "lines" as const, lines: 1 },
          { text: "my name (___________): _____ syllables", type: "lines" as const, lines: 1 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Syllable Clapping Games",
        instruction: "Practise counting syllables in everyday words.",
        parentTip:
          "Do these during transitions — getting dressed, eating breakfast, going for a walk.",
        suggestions: [
          "Clap the syllables in every person's name in your family.",
          "Choose 5 items from the pantry and clap their syllables together.",
          "Walk around the house clapping the syllables in everything you see.",
          "Listen to a favourite song and clap along to the syllable beats in the lyrics.",
        ],
      },
    ],
  },

  // ── WS 6: Vocabulary ──────────────────────────────────────
  {
    slug: "describing-my-world",
    title: "Describing My World",
    strand: "Language",
    description:
      "Build vocabulary by naming and describing familiar objects using colour, size and shape — linking spoken language to written labels.",
    learningGuide: {
      concept:
        "Vocabulary is the foundation of all language learning. At Foundation level, children extend their word knowledge by describing familiar things using attributes: colour, size, shape, and purpose. Strong vocabulary supports both comprehension and writing.",
      activation:
        "Hold up a common object (e.g. a red ball) and ask: Can you tell me about this? What colour is it? Is it big or small? What do you use it for? Model a full description: It is a small, red, round ball. We use it to play.",
      check:
        "Point to an object and ask: Can you describe this using at least two describing words? The child should use adjectives (colour, size, shape, texture) without prompting.",
    },
    lesson: {
      title: "Words That Describe",
      objective:
        "Use describing words (adjectives) to name and describe familiar objects, and write simple labels.",
      materials: [
        "5 to 6 objects from around the home (e.g. pencil, cup, book, apple, sock, ball)",
        "Pencil and crayons",
        "Plain paper for drawing",
      ],
      intro: {
        title: "The Describing Game",
        script:
          "I am thinking of something in this room. I am going to describe it and you have to guess what it is. Ready? It is big, flat, and brown. You read it. What is it? Yes — a book! Now it is your turn. Think of something in the room and describe it using colours, sizes and shapes. Do not say what it is — just describe it!",
        action:
          "Take turns describing and guessing objects. Encourage your child to use as many describing words as possible: colour, size, texture, shape.",
      },
      mainActivity: {
        title: "Draw and Label",
        script:
          "Now let us be writers! You are going to draw one of these objects and then write labels — the word AND a describing word. So if you draw the cup, you might write blue cup or small cup. Let us see how many describing words you can use!",
        action:
          "Your child draws 3 objects from the selection and labels them with at least one noun and one adjective. Encourage invented spelling.",
      },
      wrapUp: {
        title: "Describing Word Collection",
        script:
          "What a wonderful word collection we have built today! Let us write all our favourite describing words in a list — we could call it our word wall. Which was your favourite describing word today?",
        action:
          "Write a family word wall together on a large piece of paper. Stick it on the fridge as a reference.",
      },
      parentTip:
        "Encourage your child to use describing words in everyday speech. When they use a vague word like thing, gently ask: Can you describe it more so I know exactly which one? This builds precision in language.",
      extension:
        "Make a describing book: fold 5 pages together, draw one object per page, and write a full describing sentence underneath. Read it together as a finished book. This aligns with AC V9 Foundation — using words and phrases in spoken and written communication.",
      resources: [
        {
          title: "ABC Education — Vocabulary",
          url: "https://www.abc.net.au/education/learn-english/",
          description:
            "Vocabulary-building resources and video read-alouds for Foundation students.",
        },
        {
          title: "Khan Academy Kids — Language Arts",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Vocabulary and describing activities for early learners.",
        },
        {
          title: "Starfall — Words and Reading",
          url: "https://www.starfall.com/",
          description:
            "Word recognition and vocabulary activities for Foundation-age children.",
        },
      ],
    },
    activities: [
      {
        type: "open-response" as const,
        title: "Draw and Label",
        instruction:
          "Draw each object. Write its name AND one describing word (colour, size or shape).",
        parentTip:
          "Encourage your child to say the describing sentence aloud before writing it.",
        prompts: [
          { text: "Draw: a cup. Write a label with a describing word:", type: "box" as const },
          { text: "Draw: a book. Write a label with a describing word:", type: "box" as const },
          { text: "Draw: a ball. Write a label with a describing word:", type: "box" as const },
        ],
      },
      {
        type: "circle-correct" as const,
        title: "Choose the Best Describing Word",
        instruction:
          "Circle the describing word that best fits each object.",
        parentTip:
          "Discuss why the other options do not fit — this builds vocabulary precision.",
        questions: [
          { prompt: "The elephant is very...", options: ["tiny", "huge", "pointy"] },
          { prompt: "The sun is very...", options: ["cold", "wet", "bright"] },
          { prompt: "The ice cream is...", options: ["hot", "cold", "heavy"] },
          { prompt: "The rock is...", options: ["soft", "fluffy", "hard"] },
          { prompt: "The feather is...", options: ["heavy", "light", "loud"] },
        ],
      },
      {
        type: "home-activity" as const,
        title: "The Describing Game",
        instruction: "Use describing words in everyday activities at home.",
        parentTip:
          "Model rich describing language in your own speech — children absorb vocabulary through hearing it used naturally.",
        suggestions: [
          "Play I am thinking of something: describe an object and take turns guessing.",
          "At dinner, describe each food item: The carrot is long, orange and crunchy.",
          "Read a picture book together and collect all the describing words on the pages.",
          "Go on a texture walk — touch things and describe them: rough, smooth, bumpy, soft.",
        ],
      },
    ],
  },

  // ── WS 7: Story Retell ────────────────────────────────────
  {
    slug: "story-retell",
    title: "Retelling a Story",
    strand: "Literature",
    description:
      "Listen to a short story, then retell it using beginning, middle and end — building comprehension and oral language.",
    learningGuide: {
      concept:
        "Story retelling requires a child to understand, organise and communicate narrative. It is one of the strongest predictors of reading comprehension. At Foundation, we focus on characters, setting and three key events: beginning, middle and end.",
      activation:
        "Ask: Can you remember a book we read recently? Who was in it? Where did it happen? What happened first? This activates schema and shows your child that you want them to do the thinking.",
      check:
        "After your child retells a story, ask: What happened at the beginning? What happened at the end? How did the character feel? Good retelling includes characters, setting and key events in order.",
    },
    lesson: {
      title: "Tell Me the Story",
      objective:
        "Retell a familiar story in sequence using beginning, middle and end.",
      materials: [
        "A picture book your child loves (e.g. The Very Hungry Caterpillar, Owl Babies, or any favourite)",
        "Pencil and crayons",
        "3 pieces of paper folded to make a simple booklet",
      ],
      intro: {
        title: "Three Parts of a Story",
        script:
          "Every story has three parts — like a sandwich! The beginning is the top piece of bread. Something important happens in the middle — that is the filling. And then the end wraps it all up — the bottom piece of bread. Today we are going to read a story together and then YOU are going to be the storyteller. Are you ready to tell the story back to me?",
        action:
          "Read the chosen picture book together. As you read, pause and ask: Is this the beginning, middle or end? Let your child identify each part.",
      },
      mainActivity: {
        title: "My Story Booklet",
        script:
          "Now it is your turn to retell the story. You are going to draw and write what happened in the beginning, middle and end. For each part, draw a picture and write or tell me a sentence about what happened. Take your time — storytellers always think before they speak!",
        action:
          "Fold 3 pieces of paper to make a booklet. Label three pages: Beginning, Middle, End. Your child draws and writes one event per page.",
      },
      wrapUp: {
        title: "Be the Storyteller",
        script:
          "Now put away the book — we are going to close our eyes and retell the story from memory. Ready? Once upon a time... You start! I will help if you get stuck, but I bet you remember more than you think.",
        action:
          "Your child retells the story orally from their booklet or from memory. Praise any attempt at sequencing.",
      },
      parentTip:
        "The goal is oral storytelling — confident speech. If your child's written response is brief, that is fine. What matters is whether they can tell you the story orally. Writing develops later; comprehension and oral fluency come first.",
      extension:
        "Act out the story with soft toys or paper puppets. Perform the story for another family member. This covers AC V9 Foundation Literature — listening to texts and retelling stories.",
      resources: [
        {
          title: "ABC Education — Stories and Texts",
          url: "https://www.abc.net.au/education/learn-english/stories/",
          description:
            "Video read-alouds and comprehension activities for Foundation students.",
        },
        {
          title: "Khan Academy Kids — Stories",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive story-based activities supporting comprehension and retelling.",
        },
        {
          title: "Storyline Online",
          url: "https://storylineonline.net/",
          description:
            "Free video read-alouds of picture books — excellent for comprehension discussions.",
        },
      ],
    },
    activities: [
      {
        type: "sequence" as const,
        title: "Put the Story in Order",
        instruction:
          "Number these story events 1, 2, and 3 to show the correct order (beginning, middle, end).",
        parentTip:
          "After ordering, ask your child to tell the story in their own words using the prompts.",
        items: [
          { label: "The character reaches their goal or the problem is solved." },
          { label: "We meet the characters and find out where the story happens." },
          { label: "Something exciting or tricky happens in the story." },
        ],
      },
      {
        type: "open-response" as const,
        title: "My Story Retell",
        instruction:
          "Draw and write about the beginning, middle and end of a story you have read or heard.",
        parentTip:
          "Let your child choose their favourite story to retell — personal choice increases engagement and recall.",
        prompts: [
          { text: "The story is called: ___________________________", type: "lines" as const, lines: 1 },
          { text: "BEGINNING — Draw and write what happened first:", type: "box" as const },
          { text: "MIDDLE — Draw and write what happened next:", type: "box" as const },
          { text: "END — Draw and write how the story finished:", type: "box" as const },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Story Time at Home",
        instruction: "Build story retelling skills through everyday reading.",
        parentTip:
          "Reading aloud to your child for 10 to 15 minutes every day is the single most powerful thing you can do for their literacy. Always follow up with 2 to 3 questions.",
        suggestions: [
          "After reading, ask: Who was the story about? Where did it happen? What was the problem?",
          "Take turns adding one sentence each to retell a story you both know.",
          "Use soft toys to act out a familiar story — who plays each character?",
          "Ask your child to read the pictures in a wordless picture book and make up a story.",
        ],
      },
    ],
  },

  // ── WS 8: Communicating Ideas ─────────────────────────────
  {
    slug: "communicating-ideas",
    title: "Share Your Ideas",
    strand: "Literacy",
    description:
      "Express thoughts, feelings and ideas through drawing and early writing — including writing your name and simple labels.",
    learningGuide: {
      concept:
        "At Foundation level, drawing is writing. Children communicate ideas through images and move towards labelling, then sentences. This progression — from picture to label to sentence — is a natural and important developmental path. All attempts at writing should be celebrated.",
      activation:
        "Ask: What is your favourite thing to do? Could you draw a picture that shows me exactly what it looks like? Talk about the drawing before writing begins — strong oral preparation improves written output.",
      check:
        "Can your child write their name? Can they label a drawing with a beginning sound or a whole word? Can they attempt a simple sentence (even with invented spelling)?",
    },
    lesson: {
      title: "I Can Share My Ideas",
      objective:
        "Communicate ideas and feelings through drawing and early writing, including writing their own name.",
      materials: [
        "Pencil and crayons",
        "Plain paper",
        "A photograph or familiar object as a writing prompt (optional)",
      ],
      intro: {
        title: "My Ideas Are Important",
        script:
          "Your ideas are wonderful and we want to write them down so everyone can read them! Today you are going to draw and write about something YOU love — something that makes you happy. Before we start, tell me about it: what do you love? Where does it happen? How does it make you feel? Good — now we have lots of ideas ready to write!",
        action:
          "Have a 3 to 4 minute conversation about the chosen topic before any writing. The richer the discussion, the better the writing.",
      },
      mainActivity: {
        title: "Draw, Label and Write",
        script:
          "Step 1: draw your idea. Step 2: label the most important things in your picture — write the word or even just the first letter. Step 3: write a sentence about your picture. It might start with I love... or My favourite... Ready? Off you go — you are a writer!",
        action:
          "Prompt: What is happening here in your picture? Can you write that? Celebrate every attempt. Accept invented spelling as valid.",
      },
      wrapUp: {
        title: "Author's Chair",
        script:
          "Now it is sharing time! Sit in the special Author's Chair (any chair will do!) and share your writing with me. Read your words or tell me about your picture. You are a real author now!",
        action:
          "Let your child read their writing to you. Ask one question about their work to show genuine interest.",
      },
      parentTip:
        "Never correct invented spelling in a negative way — it can shut down the writing process entirely. Instead, celebrate the attempt and model the correct spelling naturally in your response.",
      extension:
        "Create a simple book about your child's favourite thing: fold 4 to 5 pieces of paper in half and staple. One idea per page. Add a title page with your child's name as the author. This covers AC V9 Foundation Literacy — creating short written texts using words and images.",
      resources: [
        {
          title: "ABC Education — Early Writing",
          url: "https://www.abc.net.au/education/learn-english/writing/",
          description:
            "Video guidance and activities supporting early writing development for Foundation students.",
        },
        {
          title: "Khan Academy Kids — Writing",
          url: "https://learn.khanacademy.org/khan-academy-kids/",
          description:
            "Interactive writing activities for young learners including tracing, labelling and simple sentence writing.",
        },
        {
          title: "Reading Eggs — Writing",
          url: "https://readingeggs.com.au/",
          description:
            "Writing activities and lessons integrated with reading for Foundation-level children.",
        },
      ],
    },
    activities: [
      {
        type: "open-response" as const,
        title: "My Favourite Thing",
        instruction:
          "Draw your favourite thing. Label the picture. Then write a sentence about it.",
        parentTip:
          "Prompt your child to say their sentence aloud before writing it — oral rehearsal improves written output significantly.",
        prompts: [
          { text: "Draw your favourite thing:", type: "box" as const },
          { text: "Write labels on your drawing (try to write the first letter or the whole word).", type: "lines" as const, lines: 2 },
          { text: "Write a sentence about your picture: I love ________________________", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "open-response" as const,
        title: "Write Your Name",
        instruction:
          "Practise writing your full name. Then write your name in uppercase AND lowercase letters.",
        parentTip:
          "Your child's name is the most motivating word for them to write. Practise it daily until it is automatic.",
        prompts: [
          { text: "Write your name here:", type: "lines" as const, lines: 2 },
          { text: "Write your name in UPPERCASE letters:", type: "lines" as const, lines: 2 },
          { text: "Write your name in lowercase letters:", type: "lines" as const, lines: 2 },
        ],
      },
      {
        type: "home-activity" as const,
        title: "Writers at Home",
        instruction:
          "Encourage early writing through meaningful, real-life activities.",
        parentTip:
          "Make writing purposeful — write real things for real reasons. This motivates far more than worksheets alone.",
        suggestions: [
          "Write a shopping list together — your child writes the first letter of each item.",
          "Write a birthday card or letter to a family member or friend.",
          "Keep a drawing and writing journal — draw one thing each day and write one word or sentence about it.",
          "Leave notes for each other around the house — draw pictures and write labels.",
        ],
      },
    ],
  },
];

export function getFoundationEnglishWorksheet(
  slug: string
): WorksheetItem | undefined {
  return foundationEnglishWorksheets.find((ws) => ws.slug === slug);
}
