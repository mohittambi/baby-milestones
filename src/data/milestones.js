const milestones = [
  {
    month: 1,
    title: "The Awakening",
    summary: "Your baby is adjusting to life outside the womb. Everything is new and fascinating!",
    physical: [
      { id: "p1-1", text: "Lifts head briefly during tummy time", tip: "Start with 2-3 minutes of tummy time several times a day" },
      { id: "p1-2", text: "Makes jerky, quivering arm movements", tip: "Gentle arm exercises during diaper changes" },
      { id: "p1-3", text: "Brings hands near face", tip: "Let baby explore their own face and hands" },
      { id: "p1-4", text: "Strong reflex movements (grasping, sucking)", tip: "Place your finger in baby's palm to feel their grip" }
    ],
    emotional: [
      { id: "e1-1", text: "Recognizes parent's voice", tip: "Talk and sing to your baby frequently" },
      { id: "e1-2", text: "Focuses on faces 8-12 inches away", tip: "Hold baby close and make eye contact during feeding" },
      { id: "e1-3", text: "Startles at loud sounds", tip: "Create a calm environment with soft sounds" },
      { id: "e1-4", text: "Prefers black and white patterns", tip: "Use high-contrast cards or books" }
    ],
    activities: [
      { type: "physical", name: "Tummy Time", description: "Place baby on their tummy on a firm surface for 2-3 minutes, 3-4 times daily. Stay close and talk to encourage head lifting.", icon: "cartwheel" },
      { type: "physical", name: "Gentle Bicycle Legs", description: "Gently move baby's legs in a cycling motion during diaper changes to strengthen leg muscles.", icon: "1f6b2" },
      { type: "emotional", name: "Skin-to-Skin Contact", description: "Hold baby against your bare chest. This regulates their temperature, heartbeat, and builds deep bonding.", icon: "two-hearts" },
      { type: "emotional", name: "Narrate Your Day", description: "Talk to baby about what you're doing. 'Now I'm warming your bottle.' This builds language foundations.", icon: "1f5e3" },
      { type: "emotional", name: "Gentle Massage", description: "Use baby-safe oil and gently massage arms, legs, and tummy. Helps with digestion and bonding.", icon: "raised-hand" }
    ],
    watchFor: [
      "No response to loud sounds",
      "Doesn't focus on or follow nearby objects",
      "Limbs seem unusually stiff or floppy",
      "Difficulty feeding or sucking"
    ],
    pros: [
      "Deep bonding period — baby recognizes your voice and smell",
      "Rapid brain development — every interaction matters",
      "Feeding routines start to establish",
      "Baby sleeps a lot, giving parents rest windows"
    ],
    cons: [
      "Sleep deprivation for parents — frequent night wakings",
      "Colic or excessive crying can be overwhelming",
      "Feeding challenges (latching, supply) are common",
      "Limited interaction — baby mostly eats, sleeps, cries"
    ],
    weeklyTips: [
      { week: 1, tip: "Focus on recovery and bonding. Skin-to-skin is the best activity right now." },
      { week: 2, tip: "Introduce short tummy time sessions on your chest. Baby will try to lift their head." },
      { week: 3, tip: "Start using high-contrast black and white cards during alert periods." },
      { week: 4, tip: "Begin gentle massage routines before bedtime to establish a sleep pattern." }
    ]
  },
  {
    month: 2,
    title: "First Smiles",
    summary: "The magic begins! Your baby starts smiling socially and becoming more alert and interactive.",
    physical: [
      { id: "p2-1", text: "Holds head up at 45 degrees during tummy time", tip: "Increase tummy time to 5 minutes per session" },
      { id: "p2-2", text: "Smoother arm and leg movements", tip: "Give baby space to kick freely on a play mat" },
      { id: "p2-3", text: "Opens and closes hands", tip: "Offer different textures to touch" },
      { id: "p2-4", text: "Pushes down with legs on firm surface", tip: "Hold baby upright with feet on your lap" }
    ],
    emotional: [
      { id: "e2-1", text: "First real social smile!", tip: "Smile back enthusiastically — baby learns from your reactions" },
      { id: "e2-2", text: "Begins to self-soothe briefly", tip: "Give baby a moment before responding to fussing" },
      { id: "e2-3", text: "Coos and makes gurgling sounds", tip: "Respond to baby's sounds as if having a conversation" },
      { id: "e2-4", text: "Follows objects with eyes", tip: "Slowly move a colorful toy across baby's field of vision" }
    ],
    activities: [
      { type: "physical", name: "Extended Tummy Time", description: "Increase to 5-minute sessions. Get on the floor face-to-face with baby to encourage them.", icon: "cartwheel" },
      { type: "physical", name: "Rattle Play", description: "Place a lightweight rattle in baby's hand. They'll start learning cause and effect as it makes sound.", icon: "1f3b5" },
      { type: "emotional", name: "Mirror Play", description: "Hold baby in front of a mirror. They'll be fascinated by the face looking back at them.", icon: "1fa9e" },
      { type: "emotional", name: "Conversation Time", description: "When baby coos, respond with words. Take turns like a real conversation. This teaches social interaction.", icon: "speech-bubble" },
      { type: "emotional", name: "Singing Lullabies", description: "Sing the same songs repeatedly. Repetition helps baby feel secure and learn patterns.", icon: "1f3b6" }
    ],
    watchFor: [
      "No social smiling by end of month 2",
      "Doesn't follow moving objects with eyes",
      "Doesn't bring hands to mouth",
      "Cannot hold head up when on tummy"
    ],
    pros: [
      "First social smiles make parenting feel deeply rewarding",
      "Baby becomes more interactive and responsive",
      "Sleep patterns start becoming slightly more predictable",
      "Cooing sounds mark beginning of communication"
    ],
    cons: [
      "Peak colic period — crying may increase",
      "Growth spurts cause temporary feeding frenzy",
      "Still very dependent — no independent play yet",
      "Parents may feel isolated and exhausted"
    ],
    weeklyTips: [
      { week: 1, tip: "Watch for the first social smile — it usually appears around now! Smile back big." },
      { week: 2, tip: "Try tracking exercises: slowly move a toy left to right in front of baby's eyes." },
      { week: 3, tip: "Introduce a baby gym or play mat with hanging toys for reaching practice." },
      { week: 4, tip: "Start reading simple board books. Baby loves hearing your voice with varied tones." }
    ]
  },
  {
    month: 3,
    title: "Finding Their Voice",
    summary: "Baby is becoming more social, vocal, and physically active. Expect lots of cooing and giggling!",
    physical: [
      { id: "p3-1", text: "Lifts head and chest during tummy time", tip: "Place toys just out of reach to encourage stretching" },
      { id: "p3-2", text: "Reaches for and bats at dangling objects", tip: "Use a baby gym with hanging toys" },
      { id: "p3-3", text: "Bears weight on legs when held standing", tip: "Let baby 'stand' on your lap with support" },
      { id: "p3-4", text: "Opens and closes hands, grasps toys", tip: "Offer easy-to-grip rattles and rings" }
    ],
    emotional: [
      { id: "e3-1", text: "Laughs and squeals with delight", tip: "Play peek-a-boo and make funny faces" },
      { id: "e3-2", text: "Recognizes familiar people at a distance", tip: "Let baby see visitors approach from across the room" },
      { id: "e3-3", text: "Imitates some facial expressions", tip: "Stick out your tongue — baby may copy you!" },
      { id: "e3-4", text: "Shows excitement with whole body", tip: "Notice and celebrate baby's excitement" }
    ],
    activities: [
      { type: "physical", name: "Reaching Games", description: "Hold colorful toys just within reach to encourage stretching and grasping. Celebrate when they grab it!", icon: "target" },
      { type: "physical", name: "Supported Sitting", description: "Prop baby in a seated position with pillows. This strengthens core muscles and gives a new perspective.", icon: "1fa91" },
      { type: "emotional", name: "Peek-a-Boo", description: "Cover your face with a cloth and reveal yourself. Baby is learning object permanence!", icon: "1f648" },
      { type: "emotional", name: "Sound Exploration", description: "Introduce different sounds — crinkle paper, bells, music. Watch baby react and show preferences.", icon: "1f514" },
      { type: "emotional", name: "Baby Airplane", description: "Lie on your back and hold baby above you like an airplane. Great for bonding and core strength!", icon: "airplane" }
    ],
    watchFor: [
      "Doesn't grasp or hold objects",
      "Doesn't smile at people",
      "Cannot support head well",
      "Doesn't follow moving objects with both eyes"
    ],
    pros: [
      "Baby's personality starts showing through",
      "Longer awake periods for play and interaction",
      "Night sleep stretches may lengthen",
      "Baby starts entertaining themselves briefly with toys"
    ],
    cons: [
      "May resist tummy time — persist gently",
      "Sleep regression can occur around this time",
      "Drooling begins (teething prep, not actual teeth yet)",
      "Baby becomes more demanding of attention"
    ],
    weeklyTips: [
      { week: 1, tip: "Try the airplane hold — lie on your back and lift baby above you. Great giggles guaranteed!" },
      { week: 2, tip: "Introduce a play mat with different textures for baby to feel during tummy time." },
      { week: 3, tip: "Play 'so big!' — stretch baby's arms up and say 'soooo big!' They'll love it." },
      { week: 4, tip: "Start a bedtime routine if you haven't: bath, book, song, sleep. Consistency is key." }
    ]
  },
  {
    month: 4,
    title: "The Explorer",
    summary: "Baby is discovering their hands, rolling, and becoming fascinated by everything they can reach!",
    physical: [
      { id: "p4-1", text: "Rolls from tummy to back", tip: "Give plenty of floor time on a soft mat" },
      { id: "p4-2", text: "Holds head steady without support", tip: "Try supported sitting to build core strength" },
      { id: "p4-3", text: "Pushes up on elbows during tummy time", tip: "Place interesting toys in front during tummy time" },
      { id: "p4-4", text: "Brings objects to mouth to explore", tip: "Ensure all toys are safe for mouthing" }
    ],
    emotional: [
      { id: "e4-1", text: "Enjoys playing with people", tip: "Interactive play sessions are crucial now" },
      { id: "e4-2", text: "Copies some movements and expressions", tip: "Clap, wave, and watch baby try to copy" },
      { id: "e4-3", text: "Cries in different ways for different needs", tip: "Start learning baby's different cry patterns" },
      { id: "e4-4", text: "Shows preference for certain toys", tip: "Rotate toys to keep baby interested" }
    ],
    activities: [
      { type: "physical", name: "Rolling Practice", description: "Gently help baby practice rolling by placing a toy to one side. Cheer when they roll!", icon: "1f504" },
      { type: "physical", name: "Grabbing Games", description: "Offer toys of different sizes. Baby is perfecting their grip and hand-eye coordination.", icon: "palms-up" },
      { type: "emotional", name: "Texture Books", description: "Read touchy-feely books together. Baby will love patting different textures.", icon: "books" },
      { type: "emotional", name: "Dance Party", description: "Hold baby and dance to music. They'll feel the rhythm and enjoy the movement and closeness.", icon: "1f483" },
      { type: "emotional", name: "Name That Feeling", description: "When baby is happy, sad, or frustrated, name the emotion: 'You seem frustrated!' This builds emotional vocabulary.", icon: "1f60a" }
    ],
    watchFor: [
      "Doesn't watch things as they move",
      "Doesn't smile at people",
      "Cannot hold head steady",
      "Doesn't coo or make sounds",
      "Doesn't bring things to mouth"
    ],
    pros: [
      "Baby becomes a real play partner — interactive and fun",
      "Rolling milestone is exciting for parents",
      "More predictable sleep and feeding schedules",
      "Baby can entertain themselves briefly"
    ],
    cons: [
      "4-month sleep regression is very common",
      "Everything goes in the mouth — constant vigilance needed",
      "May become frustrated when they can't reach toys",
      "Increased drooling and fussiness from pre-teething"
    ],
    weeklyTips: [
      { week: 1, tip: "Encourage rolling by placing toys just to one side during floor play." },
      { week: 2, tip: "If sleep regression hits, stay consistent with routines. It's temporary!" },
      { week: 3, tip: "Introduce a variety of textures: smooth, rough, soft, crinkly. Baby is a sensory explorer." },
      { week: 4, tip: "Read aloud daily — point to pictures and name them. Baby is absorbing language fast." }
    ]
  },
  {
    month: 5,
    title: "Getting Stronger",
    summary: "Baby is building serious strength — sitting with support, grabbing everything, and babbling away!",
    physical: [
      { id: "p5-1", text: "Rolls both ways (tummy to back, back to tummy)", tip: "Ensure safe floor space for rolling adventures" },
      { id: "p5-2", text: "Sits with support, may sit briefly alone", tip: "Use a Boppy pillow for supported sitting" },
      { id: "p5-3", text: "Transfers objects between hands", tip: "Offer blocks to encourage hand-to-hand transfer" },
      { id: "p5-4", text: "Supports weight on legs well", tip: "Let baby bounce on your lap" }
    ],
    emotional: [
      { id: "e5-1", text: "Responds to own name", tip: "Use baby's name frequently in conversation" },
      { id: "e5-2", text: "Babbles with consonant sounds (ba, ma, da)", tip: "Repeat baby's babbles back to encourage 'talking'" },
      { id: "e5-3", text: "Shows curiosity about things out of reach", tip: "Let baby problem-solve before helping" },
      { id: "e5-4", text: "Expresses displeasure when toy is taken", tip: "Offer a replacement before taking a toy away" }
    ],
    activities: [
      { type: "physical", name: "Sitting Practice", description: "Sit baby upright surrounded by pillows. Place toys in front to encourage them to stay balanced.", icon: "⬆️" },
      { type: "physical", name: "Bouncing Fun", description: "Hold baby standing on your thighs and let them bounce. Great for leg strength and lots of laughs!", icon: "1f998" },
      { type: "emotional", name: "Name Game", description: "Point to family members and say names. 'That's Daddy! That's Grandma!' Baby is learning to associate names.", icon: "1f468-200d-1f469-200d-1f467" },
      { type: "emotional", name: "Cause & Effect Toys", description: "Pop-up toys, musical buttons — baby loves learning that their actions create results!", icon: "1f518" },
      { type: "emotional", name: "Outdoor Time", description: "Take baby outside to feel grass, see trees, hear birds. Nature is the best sensory playground.", icon: "tree" }
    ],
    watchFor: [
      "Doesn't roll in either direction",
      "Seems very stiff or very floppy",
      "Doesn't reach for objects",
      "No babbling or vocal play"
    ],
    pros: [
      "Baby sits up — whole new world opens up for them",
      "Two-way babbling 'conversations' are delightful",
      "Better hand control means more independent play",
      "Baby shows genuine joy and laughter regularly"
    ],
    cons: [
      "Separation anxiety may begin to appear",
      "Rolling off surfaces becomes a real safety concern",
      "Teething pain may start — disturbs sleep and mood",
      "Baby gets frustrated trying to move but can't crawl yet"
    ],
    weeklyTips: [
      { week: 1, tip: "Set up a safe floor play area with pillows. Baby needs space to practice rolling and sitting." },
      { week: 2, tip: "Introduce cause-and-effect toys: push a button, hear a sound. Baby's mind is blown!" },
      { week: 3, tip: "Start naming body parts during bath time: 'Here are your toes! Here's your tummy!'" },
      { week: 4, tip: "If baby seems ready and your pediatrician agrees, you may start exploring purees soon." }
    ]
  },
  {
    month: 6,
    title: "Half Birthday!",
    summary: "A huge milestone month! Baby may start solids, sits independently, and is becoming wonderfully expressive.",
    physical: [
      { id: "p6-1", text: "Sits without support", tip: "Always stay nearby as baby can still topple" },
      { id: "p6-2", text: "Rocks back and forth on hands and knees", tip: "Encourage this pre-crawling motion!" },
      { id: "p6-3", text: "May begin to scoot or army crawl", tip: "Baby-proof the floor — they'll be moving soon!" },
      { id: "p6-4", text: "First teeth may appear", tip: "Offer cold teething rings and watch for signs of discomfort" }
    ],
    emotional: [
      { id: "e6-1", text: "Stranger anxiety begins", tip: "This is normal! Give baby time to warm up to new people" },
      { id: "e6-2", text: "Responds to emotions of others", tip: "If you smile, baby smiles. Model the emotions you want to see" },
      { id: "e6-3", text: "Enjoys looking at self in mirror", tip: "Play mirror games — 'Who's that baby?'" },
      { id: "e6-4", text: "Knows familiar vs unfamiliar faces", tip: "Let baby see regular caregivers frequently" }
    ],
    activities: [
      { type: "physical", name: "Pre-Crawl Encouragement", description: "Place baby on tummy with favorite toy just out of reach. They'll rock, scoot, and eventually crawl to get it!", icon: "1f3c3" },
      { type: "physical", name: "First Foods Exploration", description: "If starting solids, let baby touch, squish, and explore pureed foods. Messy eating = learning!", icon: "1f944" },
      { type: "emotional", name: "Peekaboo Variations", description: "Hide behind doors, under blankets, behind furniture. Each version teaches object permanence.", icon: "1f648" },
      { type: "emotional", name: "Clapping Games", description: "Sing 'Pat-a-Cake' and help baby clap along. Great for coordination and social joy.", icon: "1f44f" },
      { type: "emotional", name: "Read Together Daily", description: "Let baby hold and chew on board books. Point to pictures and name everything.", icon: "1f4d6" }
    ],
    watchFor: [
      "Doesn't try to get things within reach",
      "Shows no affection for caregivers",
      "Doesn't respond to sounds",
      "Cannot sit with help",
      "Doesn't laugh or squeal"
    ],
    pros: [
      "Sitting independently opens up so many play options",
      "Starting solids is exciting and fun (if messy!)",
      "Baby's personality is really shining through",
      "Pre-crawling movement shows growing independence"
    ],
    cons: [
      "Stranger anxiety can make social situations stressful",
      "Teething pain disrupts sleep and mood",
      "Starting solids requires research and preparation",
      "Baby-proofing becomes urgent as mobility increases"
    ],
    weeklyTips: [
      { week: 1, tip: "Happy half birthday! Take a milestone photo and celebrate how far you've all come." },
      { week: 2, tip: "If starting solids, try single-ingredient purees: sweet potato, avocado, banana." },
      { week: 3, tip: "Baby-proof your home! Get on hands and knees to see the world from baby's level." },
      { week: 4, tip: "Introduce a sippy cup with water during meals. No rush — just let baby explore it." }
    ]
  },
  {
    month: 7,
    title: "On the Move",
    summary: "Baby is becoming mobile! Crawling, pulling up, and getting into everything. Curiosity is at an all-time high!",
    physical: [
      { id: "p7-1", text: "Crawls or finds a way to move", tip: "Create safe spaces for exploration" },
      { id: "p7-2", text: "Picks up small objects with thumb and fingers", tip: "Offer small (safe) items to practice pincer grasp" },
      { id: "p7-3", text: "Pulls to standing using furniture", tip: "Ensure furniture is stable and anchored" },
      { id: "p7-4", text: "Bangs objects together", tip: "Give baby blocks, pots, and spoons to bang" }
    ],
    emotional: [
      { id: "e7-1", text: "Understands 'no' (may not obey!)", tip: "Use a calm, firm tone. Redirect rather than punish" },
      { id: "e7-2", text: "Plays social games like peekaboo", tip: "Let baby initiate games — follow their lead" },
      { id: "e7-3", text: "Waves bye-bye", tip: "Wave when leaving and arriving to reinforce the gesture" },
      { id: "e7-4", text: "Shows attachment to specific toys", tip: "Let baby have a comfort object (lovey)" }
    ],
    activities: [
      { type: "physical", name: "Obstacle Course", description: "Create a mini obstacle course with cushions and pillows. Baby will climb, crawl over, and explore.", icon: "1f3d4" },
      { type: "physical", name: "Container Play", description: "Give baby containers and small objects to put in and take out. Builds fine motor skills.", icon: "1f4e6" },
      { type: "emotional", name: "Wave & Clap Songs", description: "Sing songs with actions: 'Wheels on the Bus,' 'Itsy Bitsy Spider.' Baby will start copying gestures.", icon: "1f44b" },
      { type: "emotional", name: "Sensory Bins", description: "Fill a container with safe items of different textures: fabric, plastic, wood. Supervised exploration!", icon: "1f9f8" },
      { type: "emotional", name: "Follow the Leader", description: "Crawl around with baby! They'll love chasing you and being chased (gently).", icon: "1f41b" }
    ],
    watchFor: [
      "No attempts at any form of movement",
      "Cannot bear weight on legs with support",
      "Doesn't sit independently",
      "No babbling at all"
    ],
    pros: [
      "Crawling is a huge physical and cognitive milestone",
      "Baby can start to play independently for short periods",
      "Communication becomes more two-way with gestures",
      "Solid food variety increases — mealtime is more fun"
    ],
    cons: [
      "Constant supervision needed — baby gets into everything",
      "Separation anxiety may peak",
      "Falls and bumps increase with new mobility",
      "Sleep disruption as brain processes new skills"
    ],
    weeklyTips: [
      { week: 1, tip: "Set up a treasure basket with 5-6 safe household items (wooden spoon, fabric, ball). Rotate weekly." },
      { week: 2, tip: "Practice waving bye-bye — it's a key social milestone and absolutely adorable." },
      { week: 3, tip: "Introduce finger foods if baby has the pincer grasp: soft pieces of banana, avocado, cooked sweet potato." },
      { week: 4, tip: "Read lift-the-flap books together. Baby loves the surprise element!" }
    ]
  },
  {
    month: 8,
    title: "Little Communicator",
    summary: "Baby is understanding more words, pointing at things, and becoming a true communicator!",
    physical: [
      { id: "p8-1", text: "Crawls well and quickly", tip: "Let baby explore different rooms safely" },
      { id: "p8-2", text: "Pulls to stand and may cruise along furniture", tip: "Arrange furniture to create cruising paths" },
      { id: "p8-3", text: "Develops pincer grasp (thumb + index finger)", tip: "Practice with puffs or small soft foods" },
      { id: "p8-4", text: "Points at things they want", tip: "Name everything baby points at" }
    ],
    emotional: [
      { id: "e8-1", text: "Separation anxiety is strong", tip: "Practice short separations and always say goodbye" },
      { id: "e8-2", text: "Shows fear of unfamiliar situations", tip: "Stay calm and provide comfort — your reaction sets the tone" },
      { id: "e8-3", text: "Understands several common words", tip: "Use consistent words for routine items and actions" },
      { id: "e8-4", text: "Enjoys games with rules (clapping, patting)", tip: "Play structured games that repeat the same pattern" }
    ],
    activities: [
      { type: "physical", name: "Cruising Course", description: "Arrange sturdy furniture close enough for baby to cruise between pieces. They're almost walking!", icon: "1f3c4" },
      { type: "physical", name: "Stacking & Nesting", description: "Stacking cups or nesting bowls. Baby will love knocking them down and trying to rebuild.", icon: "1f3d7" },
      { type: "emotional", name: "Point & Name", description: "Walk around the house pointing at objects and naming them clearly. Baby is building a mental dictionary.", icon: "1f446" },
      { type: "emotional", name: "Goodbye Practice", description: "Practice short separations — leave the room for 30 seconds, then return smiling. Builds trust.", icon: "1f44b" },
      { type: "emotional", name: "Music & Instruments", description: "Give baby a drum, xylophone, or shaker. Making music is joyful and builds coordination.", icon: "1f941" }
    ],
    watchFor: [
      "No babbling or consonant sounds",
      "Doesn't recognize familiar people",
      "Cannot stand with support",
      "Doesn't play any back-and-forth games"
    ],
    pros: [
      "Communication leaps — baby understands so much more",
      "Cruising means walking is around the corner",
      "Pincer grasp allows self-feeding — independence growing",
      "Baby shows clear preferences and personality"
    ],
    cons: [
      "Separation anxiety makes daycare drop-offs hard",
      "Baby may refuse to be held by non-parents",
      "Increased injury risk with cruising and climbing",
      "May start testing boundaries — early limit-setting needed"
    ],
    weeklyTips: [
      { week: 1, tip: "Create a safe cruising path between couch and coffee table. Baby will love 'walking' along it." },
      { week: 2, tip: "Introduce chunky crayons and paper. Baby won't draw yet but will love the scribbling motion." },
      { week: 3, tip: "Play 'Where did it go?' — hide a toy under a blanket and let baby find it. Great for memory!" },
      { week: 4, tip: "Start teaching simple signs: 'more,' 'all done,' 'milk.' Baby can learn to sign before they can talk." }
    ]
  },
  {
    month: 9,
    title: "Problem Solver",
    summary: "Baby is becoming a thinker! They solve simple problems, understand cause and effect, and are nearly walking.",
    physical: [
      { id: "p9-1", text: "Stands holding on, may stand briefly alone", tip: "Stand a few feet away and encourage baby to come to you" },
      { id: "p9-2", text: "Climbs on low furniture", tip: "Provide safe climbing opportunities" },
      { id: "p9-3", text: "Uses pincer grasp precisely", tip: "Practice with small pieces of food during meals" },
      { id: "p9-4", text: "Sits and pivots to reach toys", tip: "Place toys in a circle around seated baby" }
    ],
    emotional: [
      { id: "e9-1", text: "Looks when you point at something", tip: "Point and name objects throughout the day" },
      { id: "e9-2", text: "May have a comfort object (blanket, stuffed toy)", tip: "Support this attachment — it helps self-soothing" },
      { id: "e9-3", text: "Understands simple commands", tip: "Use simple phrases: 'Give me the ball,' 'Come here'" },
      { id: "e9-4", text: "Plays 'give and take' games", tip: "Pass objects back and forth — builds cooperation" }
    ],
    activities: [
      { type: "physical", name: "Pull-to-Stand Games", description: "Hold toys above baby's head level while they stand. Encourages standing and reaching.", icon: "⬆️" },
      { type: "physical", name: "Puzzle Play", description: "Simple shape sorters or chunky puzzles. Baby is learning to problem-solve!", icon: "1f9e9" },
      { type: "emotional", name: "Simple Instructions", description: "Ask baby to do simple things: 'Can you give me the cup?' Celebrate when they follow through!", icon: "target" },
      { type: "emotional", name: "Social Play Dates", description: "If possible, arrange time with other babies. They may not play together yet but will observe and learn.", icon: "baby" },
      { type: "emotional", name: "Photo Album Time", description: "Show baby photos of family members and name them. 'That's Grandma!' Builds recognition and vocabulary.", icon: "1f4f7" }
    ],
    watchFor: [
      "Doesn't bear weight on legs when supported",
      "Doesn't sit without assistance",
      "Doesn't babble (mama, baba, dada)",
      "Doesn't play back-and-forth games",
      "Doesn't respond to own name"
    ],
    pros: [
      "Problem-solving ability shows incredible brain growth",
      "Following commands makes daily routines smoother",
      "Baby is nearly walking — exciting milestone ahead",
      "Self-feeding improves — meals become more independent"
    ],
    cons: [
      "Climbing creates new safety hazards",
      "Baby may resist being confined (car seat, stroller)",
      "Tantrums may begin as desires outpace abilities",
      "Sleep regression common as brain processes new skills"
    ],
    weeklyTips: [
      { week: 1, tip: "Introduce simple puzzles — take pieces out and help baby fit them back in." },
      { week: 2, tip: "Practice 'give and take' — hand baby a toy and ask for it back. Great for social skills." },
      { week: 3, tip: "Baby may start cruising faster — make sure all furniture is anchored to walls." },
      { week: 4, tip: "Introduce water play during bath time — cups, funnels, squeezable toys." }
    ]
  },
  {
    month: 10,
    title: "Almost Walking!",
    summary: "Baby stands, cruises confidently, and may take first steps. Language is exploding behind the scenes!",
    physical: [
      { id: "p10-1", text: "Cruises confidently along furniture", tip: "Create longer cruising paths with furniture arrangement" },
      { id: "p10-2", text: "May take first independent steps", tip: "Hold baby's hands and walk together" },
      { id: "p10-3", text: "Picks up tiny objects easily", tip: "Be extra careful about small choking hazards" },
      { id: "p10-4", text: "Feeds self with fingers well", tip: "Offer a variety of finger food shapes and textures" }
    ],
    emotional: [
      { id: "e10-1", text: "Tests parental reactions", tip: "Be consistent with your responses to behaviors" },
      { id: "e10-2", text: "Shows affection openly (hugs, kisses)", tip: "Accept and return affection enthusiastically" },
      { id: "e10-3", text: "May say 'mama' or 'dada' with meaning", tip: "Respond with joy when baby calls for you by name" },
      { id: "e10-4", text: "Explores cabinets, drawers, and containers", tip: "Designate one 'baby-safe' cabinet for exploration" }
    ],
    activities: [
      { type: "physical", name: "Push Toy Walking", description: "Push toys (walker wagons) help baby practice walking with support and confidence.", icon: "shopping-cart" },
      { type: "physical", name: "Ball Play", description: "Roll a ball back and forth. Baby will try to roll it back — great coordination practice!", icon: "26bd" },
      { type: "emotional", name: "Naming Everything", description: "Name every object baby touches or points at. They're understanding far more than they can say.", icon: "1f3f7" },
      { type: "emotional", name: "Hide & Seek (simple)", description: "Hide behind a curtain and call baby's name. They'll crawl to find you — peals of laughter!", icon: "1f50d" },
      { type: "emotional", name: "Kitchen Band", description: "Pots, pans, wooden spoons — make a drum set! Baby will bang away with pure joy.", icon: "1f373" }
    ],
    watchFor: [
      "Doesn't cruise or pull to stand",
      "No single words or meaningful babbling",
      "Doesn't point to show interest",
      "Loss of previously acquired skills"
    ],
    pros: [
      "First steps are one of the most exciting parenting moments",
      "First meaningful words create deep emotional connection",
      "Baby shows clear affection — hugs and kisses!",
      "Growing independence in eating and play"
    ],
    cons: [
      "House needs to be thoroughly baby-proofed",
      "Falls are frequent as baby learns to walk",
      "Baby may get frustrated when they can't do what they want",
      "Boundary testing begins — patience is essential"
    ],
    weeklyTips: [
      { week: 1, tip: "Hold both of baby's hands and walk together around the house. They're building confidence!" },
      { week: 2, tip: "Let baby help 'clean up' — putting toys in a box. They love contributing!" },
      { week: 3, tip: "Introduce stacking blocks. Baby may stack 2-3 before they topple. That's the fun part!" },
      { week: 4, tip: "Point to pictures in books and ask 'Where's the dog?' Baby may surprise you!" }
    ]
  },
  {
    month: 11,
    title: "Curious Adventurer",
    summary: "Baby is a confident explorer — walking or cruising everywhere, understanding many words, and full of personality!",
    physical: [
      { id: "p11-1", text: "Takes several steps independently", tip: "Let baby walk barefoot for better balance" },
      { id: "p11-2", text: "Squats and stands back up", tip: "Put toys at different heights for practice" },
      { id: "p11-3", text: "Tries to use a spoon (messily!)", tip: "Give baby their own spoon at meals" },
      { id: "p11-4", text: "Turns pages in a board book", tip: "Read chunky board books together daily" }
    ],
    emotional: [
      { id: "e11-1", text: "Understands many words and short phrases", tip: "Use clear, simple language throughout the day" },
      { id: "e11-2", text: "Shakes head 'no'", tip: "Respect baby's 'no' when possible to build confidence" },
      { id: "e11-3", text: "Imitates adult actions", tip: "Let baby 'help' with chores — sweeping, wiping, cooking" },
      { id: "e11-4", text: "Shows empathy — pats someone who is sad", tip: "Name emotions: 'Mommy bumped her toe, ow!'" }
    ],
    activities: [
      { type: "physical", name: "Barefoot Walking", description: "Let baby walk barefoot on different surfaces: carpet, grass, sand. Great for balance and sensory input!", icon: "1f9b6" },
      { type: "physical", name: "Scribbling Art", description: "Thick crayons and large paper. Baby's first art! Display it proudly on the fridge.", icon: "1f58d" },
      { type: "emotional", name: "Pretend Play", description: "Give baby a toy phone, pretend food, or a doll. Early pretend play develops imagination.", icon: "1f3ad" },
      { type: "emotional", name: "Helper Time", description: "Let baby 'help' with simple tasks: put laundry in basket, wipe table. Builds confidence and belonging.", icon: "1f9f9" },
      { type: "emotional", name: "Animal Sounds", description: "Point to animals in books and make their sounds. Baby will start imitating: 'Moo! Woof! Meow!'", icon: "1f404" }
    ],
    watchFor: [
      "Not pulling to stand",
      "No words at all",
      "Doesn't understand simple instructions",
      "Shows no interest in interactive games"
    ],
    pros: [
      "Baby's understanding of language grows rapidly",
      "Imitation makes learning new things easier",
      "Early empathy shows emotional development",
      "Walking (or near-walking) brings independence"
    ],
    cons: [
      "Saying 'no' to everything can be challenging",
      "Messy self-feeding requires patience",
      "Increased tantrums as autonomy needs grow",
      "Safety concerns increase with climbing and walking"
    ],
    weeklyTips: [
      { week: 1, tip: "Let baby walk barefoot on grass or sand — the sensory input helps balance development." },
      { week: 2, tip: "Start pretend play: pretend to eat from an empty spoon, drink from an empty cup. Baby will imitate!" },
      { week: 3, tip: "Teach animal sounds — they're often among baby's first 'words.' Try moo, woof, and meow." },
      { week: 4, tip: "Prepare for the first birthday! Reflect on this incredible year of growth." }
    ]
  },
  {
    month: 12,
    title: "Happy First Birthday!",
    summary: "One year old! Baby is walking (or very close), saying first words, and is a unique little person with clear preferences.",
    physical: [
      { id: "p12-1", text: "Walks with one hand held or independently", tip: "Encourage but don't force — every baby's timeline is different" },
      { id: "p12-2", text: "May climb stairs with help", tip: "Practice going up AND down stairs with supervision" },
      { id: "p12-3", text: "Uses pincer grasp to self-feed", tip: "Offer a variety of nutritious finger foods" },
      { id: "p12-4", text: "Tries to throw a ball", tip: "Play gentle throwing games outside" }
    ],
    emotional: [
      { id: "e12-1", text: "Says 1-3 words besides mama/dada", tip: "Celebrate every new word enthusiastically" },
      { id: "e12-2", text: "Follows simple directions", tip: "Give one-step instructions: 'Bring me the shoe'" },
      { id: "e12-3", text: "Shows independence — wants to do things themselves", tip: "Let baby try before helping" },
      { id: "e12-4", text: "May have a favorite book and ask for it repeatedly", tip: "Read the favorite book every time — repetition builds learning" }
    ],
    activities: [
      { type: "physical", name: "Walking Adventures", description: "Walk together outdoors holding hands. Let baby stop and explore whatever catches their eye.", icon: "1f6b6" },
      { type: "physical", name: "Stacking Towers", description: "Stack 3-4 blocks and let baby knock them down. Then encourage them to stack too!", icon: "1f3f0" },
      { type: "emotional", name: "First Birthday Party!", description: "Celebrate! Baby may not understand the party, but they'll love the attention and cake.", icon: "1f382" },
      { type: "emotional", name: "Simple Choices", description: "Offer two options: 'Red shirt or blue shirt?' This builds decision-making skills.", icon: "1f914" },
      { type: "emotional", name: "Sing Action Songs", description: "'Head, Shoulders, Knees and Toes' — baby will try to follow along. Great for body awareness!", icon: "1f3b5" }
    ],
    watchFor: [
      "No words at all",
      "Doesn't point to things",
      "Doesn't learn new gestures (wave, shake head)",
      "Loses skills they once had",
      "Cannot stand with support"
    ],
    pros: [
      "First birthday is a huge celebration milestone!",
      "Walking opens up a world of exploration",
      "First words create magical communication moments",
      "Baby's personality is fully visible and delightful"
    ],
    cons: [
      "Toddler tantrums begin as independence grows",
      "Picky eating may start — food battles ahead",
      "Sleep schedule may need adjusting again",
      "Comparison with other babies can cause unnecessary worry"
    ],
    weeklyTips: [
      { week: 1, tip: "Happy birthday to your little one! Write down your favorite memories from this first year." },
      { week: 2, tip: "Start offering choices: 'Apple or banana?' This empowers baby and reduces mealtime battles." },
      { week: 3, tip: "Begin transitioning from bottles to cups if you haven't already." },
      { week: 4, tip: "Schedule the 12-month well-child visit. Bring your milestone questions!" }
    ]
  },
  {
    month: 13,
    title: "Toddler Steps",
    summary: "Welcome to toddlerhood! Your little one is walking more confidently and starting to assert their independence.",
    physical: [
      { id: "p13-1", text: "Walks independently (most babies)", tip: "Let them walk — resist carrying unless necessary" },
      { id: "p13-2", text: "Bends over and picks things up", tip: "Ask baby to pick up toys — makes it a game" },
      { id: "p13-3", text: "Stacks 2-3 blocks", tip: "Build towers together and count the blocks" },
      { id: "p13-4", text: "Drinks from a cup with help", tip: "Use open cups with small amounts at meals" }
    ],
    emotional: [
      { id: "e13-1", text: "Uses 3-5 words regularly", tip: "Expand on their words: if they say 'ball,' say 'Yes, a big red ball!'" },
      { id: "e13-2", text: "Points to show you something interesting", tip: "Follow baby's pointing and share their excitement" },
      { id: "e13-3", text: "Hands you a book to read", tip: "Always accept the book and read it — every time" },
      { id: "e13-4", text: "Explores independently but checks back with you", tip: "Be their safe base — always be visually available" }
    ],
    activities: [
      { type: "physical", name: "Nature Walks", description: "Walk outside and let toddler lead. They'll stop for every leaf, rock, and bug. That's the point!", icon: "1f342" },
      { type: "physical", name: "Ball Kicking", description: "Place a ball and encourage toddler to kick it. Develops balance and coordination.", icon: "26bd" },
      { type: "emotional", name: "Word Expansion", description: "When toddler says a word, expand it into a sentence. 'Dog!' → 'Yes, a fluffy dog walking by!'", icon: "1f4dd" },
      { type: "emotional", name: "Sorting Games", description: "Sort toys by color or size. 'Can you find all the red ones?' Builds categorization skills.", icon: "1f534" }
    ],
    watchFor: [
      "Not walking by 15 months",
      "Fewer than 3 words",
      "Doesn't point or gesture",
      "No interest in other children"
    ],
    pros: [
      "Walking brings joy and independence to daily life",
      "Vocabulary starts growing noticeably",
      "Toddler humor emerges — genuine funny moments",
      "Can participate more in family activities"
    ],
    cons: [
      "Tantrums increase as communication frustration grows",
      "'No!' becomes a favorite word",
      "Safety risks increase with confident walking",
      "Mealtime pickiness may intensify"
    ],
    weeklyTips: [
      { week: 1, tip: "Let your toddler walk everywhere possible — to the car, around the store, through the park." },
      { week: 2, tip: "Narrate your day together. The more words they hear, the faster language develops." },
      { week: 3, tip: "Introduce simple sorting — 'Put all the blocks in this basket!'" },
      { week: 4, tip: "Have a dance party! Toddlers love music and movement together." }
    ]
  },
  {
    month: 14, title: "Little Explorer", summary: "Toddler is curious about everything — opening, closing, pouring, and figuring out how things work.",
    physical: [
      { id: "p14-1", text: "Walks well, may try to run", tip: "Provide safe spaces for running — outdoors is best" },
      { id: "p14-2", text: "Carries objects while walking", tip: "Ask toddler to help carry things (unbreakable!)" },
      { id: "p14-3", text: "Scribbles with crayons", tip: "Tape paper to the table so it doesn't slide" },
      { id: "p14-4", text: "Tries to use a fork or spoon", tip: "Pre-load the spoon and hand it over" }
    ],
    emotional: [
      { id: "e14-1", text: "Vocabulary growing — 5-10 words", tip: "Introduce new words by naming everything" },
      { id: "e14-2", text: "Shows frustration when can't communicate", tip: "Stay calm, acknowledge feelings, offer words" },
      { id: "e14-3", text: "Plays near other children (parallel play)", tip: "Arrange play dates — they learn by watching" },
      { id: "e14-4", text: "Begins pretend play with dolls/animals", tip: "Join in the pretend play — feed the doll, rock the bear" }
    ],
    activities: [
      { type: "physical", name: "Obstacle Climbing", description: "Safe climbing structures, cushion mountains, small slides. Toddlers need to climb!", icon: "1f9d7" },
      { type: "physical", name: "Pour & Scoop", description: "Water table, sand box, or rice bin. Pouring and scooping builds fine motor skills.", icon: "1faa3" },
      { type: "emotional", name: "Feelings Check-In", description: "Use feeling faces: happy, sad, angry. 'How are you feeling?' Builds emotional literacy.", icon: "1f60a" },
      { type: "emotional", name: "Story Acting", description: "Act out simple stories with stuffed animals. Toddler will join in!", icon: "1f9f8" }
    ],
    watchFor: ["Not walking independently", "No words", "Doesn't point or wave", "Loss of skills"],
    pros: ["Growing independence makes daily tasks easier", "Pretend play shows imagination developing", "Running and climbing burns energy — better naps!", "Words are emerging regularly"],
    cons: ["Frustration tantrums when they can't express needs", "Running near roads/dangers requires constant vigilance", "Picky eating peaks", "May resist nap transitions"],
    weeklyTips: [
      { week: 1, tip: "Set up a water pouring station in the tub — cups, funnels, containers. Endless fun!" },
      { week: 2, tip: "Practice naming emotions: 'You look frustrated. It's hard when the block won't stack.'" },
      { week: 3, tip: "Let toddler 'help' with cooking — stirring, pouring pre-measured ingredients." },
      { week: 4, tip: "Visit a playground with age-appropriate climbing structures." }
    ]
  },
  {
    month: 15, title: "Mini Communicator", summary: "Language is taking off! Toddler understands far more than they can say and is becoming more social.",
    physical: [
      { id: "p15-1", text: "Walks backwards", tip: "Play walking-backwards games together" },
      { id: "p15-2", text: "Stacks 3-4 blocks", tip: "Count blocks as you stack them together" },
      { id: "p15-3", text: "Climbs onto low furniture", tip: "Teach safe climbing and getting down" },
      { id: "p15-4", text: "Helps with undressing", tip: "Let toddler pull off socks and shoes" }
    ],
    emotional: [
      { id: "e15-1", text: "Uses 10+ words", tip: "Read, read, read — books are the best vocabulary builder" },
      { id: "e15-2", text: "Points to body parts when named", tip: "Play 'Where's your nose?' throughout the day" },
      { id: "e15-3", text: "Imitates household tasks", tip: "Give toddler their own broom, cloth, or toy vacuum" },
      { id: "e15-4", text: "Shows affection to familiar people", tip: "Model affectionate behavior — hug, kiss, say 'I love you'" }
    ],
    activities: [
      { type: "physical", name: "Dance & Movement", description: "Put on music and dance! Toddler will stomp, spin, and bounce. Great for gross motor skills.", icon: "1f483" },
      { type: "physical", name: "Bubble Chasing", description: "Blow bubbles and let toddler chase and pop them. Works on coordination and joy!", icon: "1fae7" },
      { type: "emotional", name: "Body Parts Song", description: "Sing 'Head, Shoulders, Knees and Toes' while touching each part. Toddler will follow along.", icon: "1f3b6" },
      { type: "emotional", name: "Phone Conversations", description: "Give toddler a toy phone and pretend to call. 'Hello! What are you doing?' Builds conversation skills.", icon: "1f4f1" }
    ],
    watchFor: ["Not walking", "Fewer than 5 words", "Doesn't imitate actions", "No pointing or gesturing", "Doesn't notice when caregiver leaves"],
    pros: ["Vocabulary explosion begins", "Body awareness grows rapidly", "Imitation makes learning natural", "Affectionate moments are deeply rewarding"],
    cons: ["Tantrums can be intense at this age", "May resist transitions (leaving park, stopping play)", "Climbing = increased fall risk", "Sleep may be disrupted by developmental leaps"],
    weeklyTips: [
      { week: 1, tip: "Play 'Where's your nose/eyes/ears?' several times a day. Toddlers love this game!" },
      { week: 2, tip: "Blow bubbles outside — toddler will chase, pop, and giggle endlessly." },
      { week: 3, tip: "Give toddler their own small broom or cloth. 'Helping' builds confidence and belonging." },
      { week: 4, tip: "15-month check-up time! Bring your milestone observations to discuss with the pediatrician." }
    ]
  },
  {
    month: 16, title: "Independent Spirit", summary: "Toddler wants to do everything alone! 'Me do it!' is the motto. Channel this independence positively.",
    physical: [
      { id: "p16-1", text: "Runs with better coordination", tip: "Find open spaces for running — fields, parks" },
      { id: "p16-2", text: "Kicks a ball forward", tip: "Practice kicking in the yard or park" },
      { id: "p16-3", text: "Turns book pages one at a time", tip: "Let toddler 'read' to you" },
      { id: "p16-4", text: "Starts to show hand preference", tip: "Offer items at midline, let toddler choose which hand" }
    ],
    emotional: [
      { id: "e16-1", text: "'Me do it!' — wants independence", tip: "Build extra time into routines for toddler to try" },
      { id: "e16-2", text: "Uses 15-20 words", tip: "Introduce new vocabulary in context daily" },
      { id: "e16-3", text: "Follows two-step directions", tip: "'Pick up the ball AND bring it to me.' Celebrate success!" },
      { id: "e16-4", text: "Engages in more complex pretend play", tip: "Provide props: play kitchen, doctor kit, tools" }
    ],
    activities: [
      { type: "physical", name: "Kicking Practice", description: "Kick a ball back and forth. Toddler may miss a lot — that's perfect practice!", icon: "26bd" },
      { type: "physical", name: "Playground Time", description: "Slides, low climbers, swings. Supervised playground play builds strength and confidence.", icon: "1f6dd" },
      { type: "emotional", name: "Choice Boards", description: "Offer 2-3 choices throughout the day: snack, shirt, activity. Empowers toddler.", icon: "clipboard" },
      { type: "emotional", name: "Play Kitchen", description: "Pretend cooking together. 'What are you making? Yum, pasta!' Builds vocabulary and imagination.", icon: "1f373" }
    ],
    watchFor: ["Can't walk steadily", "Doesn't follow simple directions", "Fewer than 10 words", "Shows no pretend play"],
    pros: ["Independence means toddler can do more self-care", "Vocabulary is growing fast", "Pretend play shows cognitive leaps", "Physical confidence brings joy"],
    cons: ["'Me do it' slows everything down — patience needed", "Tantrums peak when independence is thwarted", "Running + poor judgment = scary moments", "Power struggles over daily routines"],
    weeklyTips: [
      { week: 1, tip: "Build 10 extra minutes into routines. Let toddler try shoes, zippers, and cups independently." },
      { week: 2, tip: "Offer choices: 'Banana or apple?' 'Red cup or blue cup?' Two options max." },
      { week: 3, tip: "Practice two-step instructions: 'Get your shoes AND bring them here.'" },
      { week: 4, tip: "Set up a pretend play corner: toy kitchen, doctor kit, or tool bench." }
    ]
  },
  {
    month: 17, title: "Word Collector", summary: "New words every day! Toddler is absorbing language like a sponge and starting to combine words.",
    physical: [
      { id: "p17-1", text: "Walks up stairs with hand held", tip: "Practice stairs daily — up AND down with support" },
      { id: "p17-2", text: "Throws a ball overhand", tip: "Play catch with soft balls outside" },
      { id: "p17-3", text: "Squats to pick things up easily", tip: "Make clean-up time a squatting exercise game" },
      { id: "p17-4", text: "Feeds self with spoon (some spilling)", tip: "Celebrate effort, not perfection" }
    ],
    emotional: [
      { id: "e17-1", text: "20-50 words and growing", tip: "Expand every utterance: 'Car!' → 'Yes, a blue car is driving fast!'" },
      { id: "e17-2", text: "May start two-word phrases", tip: "'More milk,' 'Daddy go' — respond to confirm meaning" },
      { id: "e17-3", text: "Enjoys being read to for longer periods", tip: "Introduce slightly longer stories with repetitive phrases" },
      { id: "e17-4", text: "Shows possessiveness ('Mine!')", tip: "Teach turn-taking: 'First you, then me'" }
    ],
    activities: [
      { type: "physical", name: "Stair Climbing", description: "Hold hands and practice going up and down stairs. Count each step!", icon: "1fa9c" },
      { type: "physical", name: "Throwing Games", description: "Beanbags into a bucket, balls at targets. Builds arm strength and aim.", icon: "target" },
      { type: "emotional", name: "Story Time Plus", description: "Read stories and ask questions: 'Where's the dog? What color is it?' Builds comprehension.", icon: "books" },
      { type: "emotional", name: "Turn-Taking Games", description: "Take turns stacking, rolling a ball, putting puzzle pieces. 'Your turn, my turn!'", icon: "1f504" }
    ],
    watchFor: ["Fewer than 15 words", "No interest in other children", "Can't walk without help", "Doesn't follow simple directions"],
    pros: ["Language explosion is thrilling to witness", "Two-word phrases mark a cognitive leap", "Physical skills allow more outdoor adventure", "Toddler can express basic needs with words"],
    cons: ["'Mine!' and possessiveness cause conflicts", "Tantrums when words fail them", "May resist sharing with other children", "Running ahead of parents in public spaces"],
    weeklyTips: [
      { week: 1, tip: "Count everything: steps, crackers, toes. Toddler is ready for number concepts." },
      { week: 2, tip: "Read books with repetitive phrases — toddler will start filling in the words!" },
      { week: 3, tip: "Practice turn-taking with a simple game. 'My turn... your turn!' Build patience." },
      { week: 4, tip: "Let toddler scribble with thick crayons. Ask about their 'drawing' — value their creation." }
    ]
  },
  {
    month: 18, title: "Year and a Half!", summary: "Halfway to two! Toddler runs, climbs, has 50+ words, and is becoming a little person with big opinions.",
    physical: [
      { id: "p18-1", text: "Runs well", tip: "Regular outdoor running time is essential" },
      { id: "p18-2", text: "Climbs furniture and playground equipment", tip: "Teach safe climbing techniques" },
      { id: "p18-3", text: "Kicks a ball", tip: "Practice in the yard — build up to kicking while walking" },
      { id: "p18-4", text: "Stacks 4+ blocks", tip: "Challenge them: 'Can you stack FIVE?'" }
    ],
    emotional: [
      { id: "e18-1", text: "50+ words, regular two-word phrases", tip: "Have real conversations — toddler has so much to say!" },
      { id: "e18-2", text: "Follows two-step instructions well", tip: "Involve toddler in multi-step chores" },
      { id: "e18-3", text: "Begins to show defiant behavior", tip: "Stay calm, offer choices, pick your battles" },
      { id: "e18-4", text: "Shows empathy — comforts others", tip: "Model empathy: 'Your friend is sad. Should we give a hug?'" }
    ],
    activities: [
      { type: "physical", name: "Playground Adventures", description: "Regular playground visits — slides, climbers, sand. Toddler needs 60+ minutes of active play daily.", icon: "1f6dd" },
      { type: "physical", name: "Jumping Practice", description: "Hold hands and jump together! Toddler is learning to get both feet off the ground.", icon: "cartwheel" },
      { type: "emotional", name: "Emotion Naming", description: "Use emotion words all day: 'You're excited!' 'That made you angry.' Builds emotional intelligence.", icon: "1f4ad" },
      { type: "emotional", name: "Pretend Grocery Store", description: "Set up a pretend shop. 'What would you like to buy?' Builds vocabulary and social skills.", icon: "shopping-cart" }
    ],
    watchFor: ["Fewer than 20 words", "Doesn't walk independently", "Can't follow simple instructions", "No pretend play", "Loss of skills"],
    pros: ["Real conversations are possible!", "Empathy development is heartwarming", "Physical confidence allows outdoor adventures", "18-month check-up confirms progress"],
    cons: ["Defiance and tantrums can be exhausting", "Running in unsafe areas is a constant worry", "Sharing is very difficult at this age", "May resist changes to routine"],
    weeklyTips: [
      { week: 1, tip: "18-month well-child visit! An important developmental screening appointment." },
      { week: 2, tip: "Practice jumping — hold hands and jump together on soft surfaces." },
      { week: 3, tip: "Set up a 'shop' with play food. Practice buying, selling, and saying please/thank you." },
      { week: 4, tip: "Start a simple sticker chart for one behavior you want to encourage." }
    ]
  },
  {
    month: 19, title: "Creative Mind", summary: "Imagination blooms! Toddler invents games, tells mini-stories, and starts to understand concepts.",
    physical: [{ id: "p19-1", text: "Runs and stops without falling", tip: "Play 'Red Light, Green Light'" }, { id: "p19-2", text: "Kicks ball while walking", tip: "Set up mini soccer goals" }, { id: "p19-3", text: "Climbs stairs holding rail", tip: "Teach hand-on-rail habit" }, { id: "p19-4", text: "Opens containers and jars", tip: "Give safe containers to practice" }],
    emotional: [{ id: "e19-1", text: "Combines words into short sentences", tip: "Model proper sentences without correcting" }, { id: "e19-2", text: "Understands 'yours' and 'mine'", tip: "Label ownership clearly during play" }, { id: "e19-3", text: "Creates simple pretend scenarios", tip: "Join their pretend world enthusiastically" }, { id: "e19-4", text: "May start to show interest in potty", tip: "Follow toddler's lead — don't push potty training" }],
    activities: [
      { type: "physical", name: "Red Light Green Light", description: "Run on green, freeze on red! Great for impulse control and body awareness.", icon: "1f6a6" },
      { type: "physical", name: "Painting", description: "Finger painting or brush painting. Focus on the process, not the product!", icon: "1f3a8" },
      { type: "emotional", name: "Storytelling", description: "Make up simple stories about toddler's day. They'll love being the main character!", icon: "1f4d6" },
      { type: "emotional", name: "Matching Games", description: "Match socks, match colors, match pictures. Builds cognitive skills.", icon: "1f9e6" }
    ],
    watchFor: ["No two-word phrases", "Can't run", "Doesn't imitate pretend play", "Extreme separation anxiety"],
    pros: ["Imagination makes play more creative and fun", "Sentences open up real communication", "Understanding concepts shows cognitive growth", "May show potty readiness — diaper-free days ahead!"],
    cons: ["Imaginary fears may begin (monsters, dark)", "Tantrums can be louder and longer", "Defiance becomes more strategic", "Sleep battles may intensify"],
    weeklyTips: [
      { week: 1, tip: "Play 'Red Light, Green Light' — toddler learns to stop on command. Fun and educational!" },
      { week: 2, tip: "Set up finger painting — strip down to diaper, lay out paper, and let them go wild." },
      { week: 3, tip: "Tell a story where your toddler is the hero. 'Once upon a time, [name] found a magic ball...'" },
      { week: 4, tip: "If toddler shows potty interest, introduce a potty chair casually. No pressure!" }
    ]
  },
  {
    month: 20, title: "Social Butterfly", summary: "Toddler is interested in other kids, begins cooperative play, and their vocabulary is expanding rapidly.",
    physical: [{ id: "p20-1", text: "Jumps with both feet", tip: "Jump in puddles — best activity ever!" }, { id: "p20-2", text: "Walks up and down stairs", tip: "Practice with and without holding the rail" }, { id: "p20-3", text: "Stacks 5-6 blocks", tip: "Build towers and bridges together" }, { id: "p20-4", text: "Turns doorknobs", tip: "Install child-proof covers on important doors" }],
    emotional: [{ id: "e20-1", text: "Uses 50-100 words", tip: "Introduce descriptive words: big, small, hot, cold" }, { id: "e20-2", text: "Begins cooperative play with peers", tip: "Facilitate play dates with structured activities" }, { id: "e20-3", text: "Understands simple time concepts", tip: "'First lunch, then park' — use sequence words" }, { id: "e20-4", text: "Shows pride in accomplishments", tip: "Celebrate specific efforts: 'You stacked that so carefully!'" }],
    activities: [
      { type: "physical", name: "Puddle Jumping", description: "Put on rain boots and jump in every puddle! Pure joy plus great exercise.", icon: "1f4a7" },
      { type: "physical", name: "Tower Building", description: "Build the tallest tower possible together. Count blocks, discuss colors. Multiskill activity!", icon: "1f3d7" },
      { type: "emotional", name: "Play Dates", description: "Structured play with peers: blocks, play dough, sandbox. Help with sharing and turn-taking.", icon: "1f46b" },
      { type: "emotional", name: "Sequence Storytelling", description: "'First we wake up, then we eat, then we play.' Helps toddler understand routines and time.", icon: "⏰" }
    ],
    watchFor: ["Fewer than 50 words", "No interest in peers", "Can't climb stairs", "Doesn't follow two-step directions"],
    pros: ["Cooperative play starts — friendships begin!", "Large vocabulary enables self-expression", "Physical confidence is inspiring", "Toddler shows genuine pride in learning"],
    cons: ["Sharing conflicts during play dates", "May become bossy with other children", "Door-opening skills = new safety concern", "Bedtime resistance may increase"],
    weeklyTips: [
      { week: 1, tip: "Puddle jumping! Get rain boots and embrace the mess. Best gross motor activity." },
      { week: 2, tip: "Host a simple play date — have duplicate toys to reduce sharing conflicts." },
      { week: 3, tip: "Use 'first/then' language: 'First we clean up, then we read a book.'" },
      { week: 4, tip: "Let toddler help cook: washing vegetables, stirring batter (with supervision)." }
    ]
  },
  {
    month: 21, title: "Question Asker", summary: "\"What's that?\" becomes the most-asked question! Toddler's curiosity drives rapid learning in every area.",
    physical: [{ id: "p21-1", text: "Runs well and changes direction", tip: "Play chase games outside" }, { id: "p21-2", text: "Kicks ball with good aim", tip: "Set up targets to kick toward" }, { id: "p21-3", text: "Tries to balance on one foot", tip: "Practice standing on one foot together — hold hands for balance" }, { id: "p21-4", text: "Uses a spoon/fork well", tip: "Encourage self-feeding at every meal" }],
    emotional: [{ id: "e21-1", text: "Asks 'What's that?' constantly", tip: "Answer every question patiently — this builds vocabulary fast" }, { id: "e21-2", text: "Understands simple stories", tip: "Ask questions about stories: 'What happened next?'" }, { id: "e21-3", text: "Shows a wider range of emotions", tip: "Help name all emotions, not just happy/sad" }, { id: "e21-4", text: "Pretend play becomes elaborate", tip: "Provide open-ended toys: blocks, fabric, boxes" }],
    activities: [
      { type: "physical", name: "Chase & Catch", description: "Run, chase, catch, and tumble on soft grass. Best full-body exercise for toddlers!", icon: "1f3c3" },
      { type: "physical", name: "Balance Games", description: "Walk on a line, stand on one foot, walk on low balance beams. Builds coordination.", icon: "2696" },
      { type: "emotional", name: "Question Time", description: "When toddler asks 'What's that?' — answer AND ask back. 'It's a butterfly! What color is it?'", icon: "2753" },
      { type: "emotional", name: "Emotion Cards", description: "Use cards with different faces. Name and discuss each emotion. 'When do you feel angry?'", icon: "1f0cf" }
    ],
    watchFor: ["Not combining words", "Doesn't ask questions", "Can't run", "Shows no pretend play", "Extreme behavior issues"],
    pros: ["Curiosity drives incredible learning speed", "Rich pretend play shows creativity", "Physical skills allow real adventure", "Emotional vocabulary is expanding"],
    cons: ["Endless questions can be exhausting for parents", "Emotions are big and hard to regulate", "May resist nap transitions", "Power struggles intensify"],
    weeklyTips: [
      { week: 1, tip: "Answer every 'What's that?' with patience. Each answer adds to their vocabulary bank." },
      { week: 2, tip: "Try a balance beam (a low plank on the ground). Toddler walks across with arms out!" },
      { week: 3, tip: "Read a story and pause — let toddler fill in familiar words. Great for participation!" },
      { week: 4, tip: "Create an emotion chart for the wall. Point to it during big feelings." }
    ]
  },
  {
    month: 22, title: "Copy Cat", summary: "Toddler imitates everything you do — cooking, cleaning, talking on the phone. They want to be just like you!",
    physical: [{ id: "p22-1", text: "Walks down stairs holding rail", tip: "Always supervise stairs, teach hand-on-rail" }, { id: "p22-2", text: "Pedals a tricycle or ride-on toy", tip: "Practice in a safe, flat area" }, { id: "p22-3", text: "Stacks 6+ blocks", tip: "Try building specific structures: houses, bridges" }, { id: "p22-4", text: "Opens and closes zippers, lids", tip: "Let them practice on their own jackets" }],
    emotional: [{ id: "e22-1", text: "Uses 100+ words", tip: "Introduce category words: fruits, animals, vehicles" }, { id: "e22-2", text: "Sings parts of songs", tip: "Sing together often — pause and let toddler fill in words" }, { id: "e22-3", text: "Copies adult behaviors precisely", tip: "Model the behaviors you want to see — they're always watching!" }, { id: "e22-4", text: "Shows sense of humor", tip: "Laugh together! Toddler humor is the best humor" }],
    activities: [
      { type: "physical", name: "Ride-On Toys", description: "Tricycles, balance bikes, ride-on cars. Great for coordination and leg strength.", icon: "1f6b2" },
      { type: "physical", name: "Fine Motor Play", description: "Zippers, buttons, playdough, beading. Small hand muscles need practice!", icon: "1f9f5" },
      { type: "emotional", name: "Singing Sessions", description: "Sing favorite songs and pause for toddler to fill in words. 'Twinkle twinkle little...'", icon: "1f3a4" },
      { type: "emotional", name: "Mini-Me Chores", description: "Give toddler-sized tools: small broom, cloth, watering can. They'll 'help' with everything!", icon: "1f9f9" }
    ],
    watchFor: ["Doesn't use two-word phrases", "No pretend play", "Can't understand simple instructions", "Shows no interest in peers"],
    pros: ["Imitation accelerates learning across all areas", "Songs and humor create joyful family moments", "Fine motor skills improve daily tasks (dressing, eating)", "Growing vocabulary enables real conversations"],
    cons: ["They also copy bad habits and words!", "May try to imitate dangerous activities", "Singing the same song 500 times gets old", "Perfectionism in copying can lead to frustration"],
    weeklyTips: [
      { week: 1, tip: "Get a ride-on toy if you don't have one. Great for outdoor play and coordination." },
      { week: 2, tip: "Play dough time! Rolling, squishing, and cutting builds hand strength for future writing." },
      { week: 3, tip: "Pause during familiar songs and let toddler fill in words. They'll beam with pride!" },
      { week: 4, tip: "Watch your language and actions — your toddler is copying EVERYTHING right now!" }
    ]
  },
  {
    month: 23, title: "Almost Two!", summary: "The countdown to two! Toddler is speaking in short sentences, running everywhere, and showing strong preferences.",
    physical: [{ id: "p23-1", text: "Jumps off low steps", tip: "Practice jumping down from a low curb" }, { id: "p23-2", text: "Throws ball overhand with aim", tip: "Play catch with soft balls" }, { id: "p23-3", text: "Turns single pages in a book", tip: "Let toddler 'read' books independently" }, { id: "p23-4", text: "Attempts to dress/undress self", tip: "Start with easy items: pull-on pants, slip-on shoes" }],
    emotional: [{ id: "e23-1", text: "Short sentences (3-4 words)", tip: "Model longer sentences in response" }, { id: "e23-2", text: "Knows own name and age", tip: "Practice: 'What's your name? How old are you?'" }, { id: "e23-3", text: "Shows strong preferences and opinions", tip: "Respect reasonable preferences, hold firm on safety" }, { id: "e23-4", text: "Parallel play evolves into interactive play", tip: "Facilitate cooperative activities with peers" }],
    activities: [
      { type: "physical", name: "Jump & Land", description: "Practice jumping from the bottom step, landing with bent knees. Great for coordination!", icon: "⬇️" },
      { type: "physical", name: "Getting Dressed", description: "Let toddler practice putting on easy clothes. Build extra time — it takes a while!", icon: "t-shirt" },
      { type: "emotional", name: "Name & Age Practice", description: "'What's your name?' 'How old are you?' Practice for the second birthday!", icon: "1f382" },
      { type: "emotional", name: "Color Hunt", description: "'Can you find something red? Something blue?' Scavenger hunts build color recognition.", icon: "1f308" }
    ],
    watchFor: ["Not using phrases", "Fewer than 50 words", "Doesn't play with others", "Can't run", "Significant behavior concerns"],
    pros: ["Sentences make communication so much richer", "Dressing skills build toward independence", "Interactive play means real friendships", "Second birthday excitement!"],
    cons: ["Strong opinions = more conflicts", "Dressing independently takes forever", "May say 'no' to everything as default", "'Terrible twos' behaviors may start early"],
    weeklyTips: [
      { week: 1, tip: "Practice jump-and-land from the bottom step onto a soft mat. Count to three and jump!" },
      { week: 2, tip: "Go on a color scavenger hunt: 'Find three red things in this room!'" },
      { week: 3, tip: "Practice name and age for the birthday party. Show two fingers for 'I'm two!'" },
      { week: 4, tip: "Plan the second birthday! Keep it simple — toddlers are easily overwhelmed." }
    ]
  },
  {
    month: 24, title: "Happy Second Birthday!", summary: "Two years old! Running, jumping, talking in sentences, and full of personality. What an incredible journey!",
    physical: [{ id: "p24-1", text: "Runs well, rarely falls", tip: "Regular outdoor running and climbing" }, { id: "p24-2", text: "Kicks a ball with power", tip: "Soccer in the backyard!" }, { id: "p24-3", text: "Walks up/down stairs alternating feet (with help)", tip: "Practice daily, always supervised" }, { id: "p24-4", text: "Stacks 6-7 blocks", tip: "Introduce Duplo blocks for creative building" }],
    emotional: [{ id: "e24-1", text: "200-300 word vocabulary", tip: "Introduce new words through books and experiences" }, { id: "e24-2", text: "2-3 word sentences consistently", tip: "Respond with expanded sentences" }, { id: "e24-3", text: "Begins to show readiness for potty training", tip: "Watch for signs of readiness, don't force it" }, { id: "e24-4", text: "Engages in elaborate pretend play", tip: "Provide open-ended materials for imaginative play" }],
    activities: [
      { type: "physical", name: "Backyard Soccer", description: "Set up goals with cones or shoes. Kick the ball back and forth. Great family activity!", icon: "26bd" },
      { type: "physical", name: "Duplo Building", description: "Build houses, towers, and vehicles. Follow instructions or free-build — both are valuable.", icon: "1f9f1" },
      { type: "emotional", name: "Birthday Celebration!", description: "Celebrate with family and friends. Keep the party small and toddler-friendly.", icon: "party" },
      { type: "emotional", name: "Potty Introduction", description: "If showing readiness, introduce the potty as something exciting, not scary.", icon: "1f6bd" }
    ],
    watchFor: ["Doesn't use two-word phrases", "Doesn't follow simple instructions", "Doesn't walk steadily", "Loss of previously acquired skills", "Can't stack blocks"],
    pros: ["Two years of incredible growth to celebrate!", "Real conversations are happening", "Physical abilities allow for active family fun", "Potty training may begin — end of diapers in sight!"],
    cons: ["'Terrible twos' tantrums are real", "Defiance and 'no' are constant", "Potty training requires immense patience", "Sleep regressions may occur"],
    weeklyTips: [
      { week: 1, tip: "Happy 2nd birthday! Reflect on the amazing journey. You're doing great, parents!" },
      { week: 2, tip: "Schedule the 2-year well-child visit. Important developmental screening at this age." },
      { week: 3, tip: "If potty training, let toddler pick out their own underwear. Ownership helps motivation!" },
      { week: 4, tip: "Start introducing simple board games — matching games, simple card games." }
    ]
  },
  {
    month: 25, title: "Imagination Station", summary: "Post-birthday boom! Toddler's imagination is extraordinary, language is complex, and social skills are growing.",
    physical: [{ id: "p25-1", text: "Jumps forward", tip: "Practice long jumps — how far can you go?" }, { id: "p25-2", text: "Balances on one foot briefly", tip: "Play flamingo — who can stand on one foot longer?" }, { id: "p25-3", text: "Pedals a tricycle", tip: "Practice in a safe, enclosed area" }, { id: "p25-4", text: "Screws/unscrews lids", tip: "Give a jar with a lid and small toys inside" }],
    emotional: [{ id: "e25-1", text: "Uses 3-4 word sentences", tip: "Have real back-and-forth conversations" }, { id: "e25-2", text: "Creates elaborate pretend scenarios", tip: "Join in and extend their pretend worlds" }, { id: "e25-3", text: "Understands concepts: big/small, up/down", tip: "Use comparison words throughout the day" }, { id: "e25-4", text: "Shows awareness of gender", tip: "Provide diverse toys and role models" }],
    activities: [
      { type: "physical", name: "Tricycle Riding", description: "Pedaling builds leg strength and coordination. Let toddler ride in safe areas.", icon: "1f6b2" },
      { type: "physical", name: "Long Jump", description: "Mark a starting line and see how far toddler can jump! Measure and celebrate.", icon: "1f4cf" },
      { type: "emotional", name: "Imaginative Worlds", description: "Build a blanket fort and pretend it's a castle, spaceship, or animal den!", icon: "1f3f0" },
      { type: "emotional", name: "Size Sorting", description: "Sort objects by big/small. 'Which is bigger? Which is smaller?' Builds math concepts.", icon: "bar-chart" }
    ],
    watchFor: ["No phrases", "Doesn't play pretend", "Can't run or climb", "Extremely difficult behavior"],
    pros: ["Imagination makes play endlessly entertaining", "Complex language enables deeper connection", "Physical abilities allow for real sports and activities", "Concepts understanding shows cognitive growth"],
    cons: ["Imaginary fears can cause sleep disruption", "Arguments become more verbal and persistent", "May become bossy in play", "Big emotions are harder to manage"],
    weeklyTips: [
      { week: 1, tip: "Build a blanket fort together! It becomes a castle, cave, or spaceship." },
      { week: 2, tip: "Practice tricycle pedaling — it's tricky at first but builds great coordination." },
      { week: 3, tip: "Introduce big/small concepts everywhere: 'Big dog, small dog. Big tree, small flower.'" },
      { week: 4, tip: "Let toddler 'cook' real simple recipes: mix salad, spread butter, pour milk." }
    ]
  },
  {
    month: 26, title: "Friendship Builder", summary: "Toddler starts forming real friendships, sharing (sometimes!), and engaging in cooperative play.",
    physical: [{ id: "p26-1", text: "Walks on tiptoes", tip: "Play 'sneaky feet' — tiptoe around the house" }, { id: "p26-2", text: "Catches a large ball", tip: "Practice with a beach ball first" }, { id: "p26-3", text: "Threads large beads", tip: "Provide chunky beads and thick string" }, { id: "p26-4", text: "Draws circles and lines", tip: "Draw together and talk about what you see" }],
    emotional: [{ id: "e26-1", text: "Plays cooperatively with peers", tip: "Set up collaborative activities: building together, art together" }, { id: "e26-2", text: "Begins to share (with prompting)", tip: "Use a timer for turn-taking: 'In 2 minutes, it's your friend's turn'" }, { id: "e26-3", text: "Expresses ideas and preferences clearly", tip: "Listen to and validate their ideas" }, { id: "e26-4", text: "Knows full name", tip: "Practice first and last name" }],
    activities: [
      { type: "physical", name: "Sneaky Tiptoe Game", description: "Tiptoe like a mouse through the house. Who can be the quietest? Great for balance!", icon: "1f42d" },
      { type: "physical", name: "Bead Threading", description: "Thread large beads onto string. Amazing fine motor practice for hand strength.", icon: "1f4ff" },
      { type: "emotional", name: "Cooperative Art", description: "Create art together on one big paper. Each person adds something. Learn to share space.", icon: "1f3a8" },
      { type: "emotional", name: "Sharing Timer", description: "Set a visual timer. 'You play for 2 minutes, then it's [friend's] turn.' Makes sharing concrete.", icon: "⏳" }
    ],
    watchFor: ["No cooperative play attempts", "Very limited vocabulary", "Can't run or climb stairs", "Extreme aggression"],
    pros: ["Real friendships bring so much joy", "Sharing shows social-emotional growth", "Fine motor skills enable creative activities", "Clear communication reduces frustration"],
    cons: ["Friendship conflicts require mediation", "Sharing is still very hard emotionally", "Comparing your child to peers can be tempting (resist!)", "Social dynamics can be overwhelming"],
    weeklyTips: [
      { week: 1, tip: "Set up a cooperative art project with a friend — one big paper, lots of colors, create together." },
      { week: 2, tip: "Practice catching with a big, soft ball. Start with rolls, then gentle tosses." },
      { week: 3, tip: "Threading beads on string — great quiet time activity that builds hand strength." },
      { week: 4, tip: "Practice full name: first name AND last name. 'My name is [First] [Last]!'" }
    ]
  },
  {
    month: 27, title: "Why Machine", summary: "'Why?' is asked 100 times a day! Toddler's thinking deepens and they genuinely want to understand the world.",
    physical: [{ id: "p27-1", text: "Jumps with both feet leaving the ground", tip: "Jumping games: jump over a rope on the ground" }, { id: "p27-2", text: "Walks up stairs alternating feet", tip: "Encourage but always supervise" }, { id: "p27-3", text: "Uses scissors (child-safe) with help", tip: "Practice snipping paper strips" }, { id: "p27-4", text: "Draws recognizable shapes", tip: "Draw shapes together and name them" }],
    emotional: [{ id: "e27-1", text: "Asks 'why?' constantly", tip: "Answer simply and honestly, then ask 'What do you think?'" }, { id: "e27-2", text: "Understands taking turns", tip: "Board games with turn-taking are great now" }, { id: "e27-3", text: "Shows fear of specific things", tip: "Acknowledge fears without dismissing them" }, { id: "e27-4", text: "4-5 word sentences", tip: "Expand their sentences: 'Yes, the big red truck IS going fast!'" }],
    activities: [
      { type: "physical", name: "Jumping Games", description: "Jump over a rope, jump between pillows, jump and touch something high. Builds explosive strength!", icon: "1f997" },
      { type: "physical", name: "Scissor Practice", description: "Child-safe scissors and paper strips. Snip, snip! Great for hand strength and coordination.", icon: "2702" },
      { type: "emotional", name: "Why Conversations", description: "When they ask 'why?', answer simply, then ask 'What do you think?' Builds critical thinking.", icon: "1f914" },
      { type: "emotional", name: "Simple Board Games", description: "Memory matching, simple card games, Candy Land. Learning rules and taking turns!", icon: "1f3b2" }
    ],
    watchFor: ["Can't jump", "Doesn't ask questions", "Very limited sentences", "Unable to play cooperatively"],
    pros: ["Curiosity drives incredible learning", "Logical thinking is emerging", "Turn-taking shows social maturity", "Sentences are becoming complex"],
    cons: ["'Why?' on repeat can test patience", "Specific fears may disrupt routines", "May question every parental decision", "Need for explanations slows everything down"],
    weeklyTips: [
      { week: 1, tip: "When toddler asks 'why?', try answering then asking back: 'Why do YOU think it rains?'" },
      { week: 2, tip: "Introduce child-safe scissors and let toddler practice cutting paper strips." },
      { week: 3, tip: "Play a simple board game like Memory or Go Fish (simplified rules)." },
      { week: 4, tip: "If toddler has fears (dark, monsters), acknowledge them. A 'monster spray' (water bottle) can help!" }
    ]
  },
  {
    month: 28, title: "Creative Artist", summary: "Art, music, and creative expression are exploding! Toddler draws with purpose and sings whole songs.",
    physical: [{ id: "p28-1", text: "Runs smoothly, changes direction quickly", tip: "Obstacle courses in the backyard" }, { id: "p28-2", text: "Stands on one foot for 2+ seconds", tip: "Play balance challenges" }, { id: "p28-3", text: "Draws circles, attempts letters", tip: "Don't push letter writing — let it emerge naturally" }, { id: "p28-4", text: "Brushes teeth with help", tip: "Make brushing a fun routine" }],
    emotional: [{ id: "e28-1", text: "Sings whole songs", tip: "Sing together in the car, bath, and bedtime" }, { id: "e28-2", text: "Names friends", tip: "Ask about friends: 'What did you play with [friend] today?'" }, { id: "e28-3", text: "Shows awareness of daily routines", tip: "Use visual schedules if helpful" }, { id: "e28-4", text: "Begins to understand time concepts", tip: "'After nap, we go to the park.' Use sequence words" }],
    activities: [
      { type: "physical", name: "Backyard Obstacle Course", description: "Cones to weave, cushions to jump, tunnels to crawl through. Timed races!", icon: "1f3c5" },
      { type: "physical", name: "Art Studio", description: "Set up a dedicated art space: paper, crayons, paint, stickers. Let creativity flow!", icon: "1f5bc" },
      { type: "emotional", name: "Song Time Concert", description: "Let toddler perform their favorite songs. Be the enthusiastic audience!", icon: "1f3a4" },
      { type: "emotional", name: "Visual Schedule", description: "Create a picture schedule of daily routines. Toddler can move/check items as they go.", icon: "clipboard" }
    ],
    watchFor: ["Can't draw a circle", "Doesn't know any songs", "No interest in creative play", "Can't balance momentarily"],
    pros: ["Creative expression is a joy to witness", "Songs and art build confidence", "Understanding routines reduces meltdowns", "Physical skills allow real sports participation"],
    cons: ["Art supplies get everywhere", "May become a perfectionist about their creations", "Routine disruptions cause bigger meltdowns when they understand schedules", "Energy levels are exhausting"],
    weeklyTips: [
      { week: 1, tip: "Set up a backyard obstacle course — time your toddler and try to beat the record!" },
      { week: 2, tip: "Create a visual daily schedule with pictures. Toddler can 'check off' completed activities." },
      { week: 3, tip: "Have a family concert — everyone sings their favorite song. Applause required!" },
      { week: 4, tip: "Try watercolor painting — tape paper to the table and let toddler experiment with colors." }
    ]
  },
  {
    month: 29, title: "Rule Learner", summary: "Toddler begins to understand and (sometimes) follow rules. They know right from wrong and test limits.",
    physical: [{ id: "p29-1", text: "Hops on one foot", tip: "Practice hopping games" }, { id: "p29-2", text: "Catches a bounced ball", tip: "Bounce-catch is easier than air-catch" }, { id: "p29-3", text: "Uses child-safe scissors independently", tip: "Supervised cutting activities with various materials" }, { id: "p29-4", text: "Buttons large buttons", tip: "Practice on button boards or their own jackets" }],
    emotional: [{ id: "e29-1", text: "Understands rules (may not follow them!)", tip: "Keep rules simple, consistent, and fair" }, { id: "e29-2", text: "Shows guilt when breaking rules", tip: "Focus on the behavior, not the child: 'Hitting hurts' vs 'Bad boy'" }, { id: "e29-3", text: "Asks for help when needed", tip: "Celebrate when they ask — it's a sign of trust" }, { id: "e29-4", text: "Uses past tense words", tip: "Model correct grammar without correcting: 'I runned!' → 'Yes, you RAN so fast!'" }],
    activities: [
      { type: "physical", name: "Hopping Games", description: "Hop on one foot, then the other. Hop across the room. Hopscotch!", icon: "1f9a9" },
      { type: "physical", name: "Cutting Crafts", description: "Cut out shapes, make paper chains, create collages. Scissor skills are growing!", icon: "2702" },
      { type: "emotional", name: "Rule Games", description: "Simon Says, Red Light Green Light — games with rules teach self-control.", icon: "target" },
      { type: "emotional", name: "Feelings Check", description: "'How are you feeling right now?' with a feelings chart. Daily emotional check-ins.", icon: "1f4ad" }
    ],
    watchFor: ["Can't follow simple rules at all", "No multi-word sentences", "Extreme aggression", "No understanding of consequences"],
    pros: ["Understanding rules makes daily life smoother", "Guilt shows moral development", "Asking for help shows trust and intelligence", "Grammar sophistication shows language maturity"],
    cons: ["Rule-testing is constant and exhausting", "Guilt can lead to lying to avoid trouble", "May tattle on other children frequently", "Consistency is demanded — any exception causes chaos"],
    weeklyTips: [
      { week: 1, tip: "Play Simon Says — great for listening skills and following rules. Start simple!" },
      { week: 2, tip: "Practice buttoning on a button board or an old shirt. Fine motor milestone!" },
      { week: 3, tip: "Daily feelings check-in at dinner: 'What made you happy today? What made you sad?'" },
      { week: 4, tip: "When rules are broken, focus on the behavior: 'Throwing food isn't safe' not 'You're naughty.'" }
    ]
  },
  {
    month: 30, title: "Two and a Half!", summary: "Halfway to three! Toddler speaks in full sentences, runs and climbs with confidence, and has a vivid imagination.",
    physical: [{ id: "p30-1", text: "Jumps over objects", tip: "Set up small items to jump over" }, { id: "p30-2", text: "Balances on one foot for 3+ seconds", tip: "Balance challenges: yoga poses for kids" }, { id: "p30-3", text: "Draws a person (head + legs)", tip: "Ask toddler to draw family members" }, { id: "p30-4", text: "Dresses self with some help", tip: "Lay out clothes and let them try independently" }],
    emotional: [{ id: "e30-1", text: "Speaks in full sentences", tip: "Have real conversations about their day" }, { id: "e30-2", text: "Understands 'in,' 'on,' 'under'", tip: "Play position games: 'Put the ball UNDER the table'" }, { id: "e30-3", text: "Negotiates and bargains", tip: "Allow reasonable negotiation — it builds thinking skills" }, { id: "e30-4", text: "Shows strong attachment to routines", tip: "Maintain consistent routines for security" }],
    activities: [
      { type: "physical", name: "Kid Yoga", description: "Simple yoga poses: tree, cat, dog, butterfly. Builds balance, flexibility, and calm!", icon: "1f9d8" },
      { type: "physical", name: "Draw Your Family", description: "Draw family members together. Talk about who's in the picture. Frame it!", icon: "1f468-200d-1f469-200d-1f467-200d-1f466" },
      { type: "emotional", name: "Preposition Play", description: "Hide a toy and give position clues: 'It's UNDER something soft.' Scavenger hunt!", icon: "1f5fa" },
      { type: "emotional", name: "Negotiation Practice", description: "'You want 3 cookies? How about 1 now and 1 after dinner?' Teach fair negotiation.", icon: "handshake" }
    ],
    watchFor: ["Can't form sentences", "Difficult to understand speech", "Can't jump or climb", "No imaginative play", "Extreme behavior issues"],
    pros: ["Full sentences make life so much easier", "Understanding prepositions shows spatial reasoning", "Negotiation shows cognitive sophistication", "Dressing independence is a parent win"],
    cons: ["Negotiation about EVERYTHING is tiring", "Routine disruptions cause major meltdowns", "Strong opinions on everything", "May start excluding peers from play"],
    weeklyTips: [
      { week: 1, tip: "Try kid yoga together! Tree pose, cat-cow, downward dog. Great for both of you." },
      { week: 2, tip: "Play 'Hide the treasure' with position clues: 'It's IN a box ON the shelf.'" },
      { week: 3, tip: "Ask toddler to draw your family. The result will be a treasure to keep!" },
      { week: 4, tip: "2.5-year dental check-up! Make it fun — practice 'opening wide' beforehand." }
    ]
  },
  {
    month: 31, title: "Story Teller", summary: "Toddler tells stories, recounts events, and has a rich vocabulary. They're becoming a true communicator.",
    physical: [{ id: "p31-1", text: "Pedals and steers a tricycle", tip: "Ride together in safe areas" }, { id: "p31-2", text: "Catches a thrown ball (large)", tip: "Practice with big soft balls" }, { id: "p31-3", text: "Copies a circle and cross shapes", tip: "Practice shapes with chalk outside" }, { id: "p31-4", text: "Unbuttons buttons", tip: "Let them unbutton their own clothes" }],
    emotional: [{ id: "e31-1", text: "Tells simple stories about their day", tip: "Ask open-ended questions: 'Tell me about your day!'" }, { id: "e31-2", text: "Understands 'same' and 'different'", tip: "Compare and contrast everything: 'How are these the same?'" }, { id: "e31-3", text: "Uses pronouns correctly (I, you, me)", tip: "Model correct pronoun use" }, { id: "e31-4", text: "Begins to understand waiting", tip: "Use visual timers for waiting practice" }],
    activities: [
      { type: "physical", name: "Trike Riding", description: "Ride tricycles in the neighborhood or park. Practice steering and stopping.", icon: "1f6b4" },
      { type: "physical", name: "Chalk Art", description: "Sidewalk chalk drawing! Practice shapes, letters, and free drawing outside.", icon: "1f58d" },
      { type: "emotional", name: "Storytelling Time", description: "Take turns telling stories. Start with 'Once upon a time...' and let toddler continue!", icon: "1f4d6" },
      { type: "emotional", name: "Same/Different Game", description: "Show two objects. 'How are they the same? How are they different?' Builds critical thinking.", icon: "1f50d" }
    ],
    watchFor: ["Can't recount simple events", "Speech is mostly unclear", "Can't pedal", "No interest in stories"],
    pros: ["Storytelling shows incredible cognitive growth", "Comparisons build analytical thinking", "Pronoun mastery aids clear communication", "Physical skills allow bike riding fun"],
    cons: ["Stories may include lies/exaggeration — normal at this age", "Waiting is still very hard", "May become overly talkative at inappropriate times", "Comparisons may lead to competitive behavior"],
    weeklyTips: [
      { week: 1, tip: "Ask 'Tell me about your day' at dinner. Wait and let toddler narrate — don't rush!" },
      { week: 2, tip: "Take chalk outside and draw shapes together. Can they copy a circle? A square?" },
      { week: 3, tip: "Play the 'same and different' game: compare two fruits, two toys, two pictures." },
      { week: 4, tip: "Create a story together: you say one sentence, toddler says the next." }
    ]
  },
  {
    month: 32, title: "Number Explorer", summary: "Numbers and counting become fascinating! Toddler counts objects, recognizes some numbers, and loves patterns.",
    physical: [{ id: "p32-1", text: "Walks on a line", tip: "Draw lines with chalk or use tape on the floor" }, { id: "p32-2", text: "Throws a ball with aim", tip: "Set up targets for throwing practice" }, { id: "p32-3", text: "Turns faucets on and off", tip: "Practice during hand-washing routine" }, { id: "p32-4", text: "Pours from a small pitcher", tip: "Let toddler pour their own water at meals" }],
    emotional: [{ id: "e32-1", text: "Counts to 5-10 (may skip numbers)", tip: "Count everything: stairs, snacks, toys, steps" }, { id: "e32-2", text: "Sorts by shape or color", tip: "Sorting toys, blocks, or snacks by color" }, { id: "e32-3", text: "Takes turns in games", tip: "Play simple board games regularly" }, { id: "e32-4", text: "Shows preference for certain friends", tip: "Nurture those friendships with regular play dates" }],
    activities: [
      { type: "physical", name: "Balance Beam Walking", description: "Walk along a line on the ground, then try a low balance beam. Arms out for balance!", icon: "2696" },
      { type: "physical", name: "Target Throw", description: "Throw beanbags at targets — buckets, hoops, drawn circles. Keep score (more counting!).", icon: "target" },
      { type: "emotional", name: "Counting Everything", description: "Count stairs, crackers, fingers, toes, cars passing by. Numbers are everywhere!", icon: "1f522" },
      { type: "emotional", name: "Pattern Making", description: "Create patterns with blocks or beads: red, blue, red, blue. 'What comes next?'", icon: "1f534" }
    ],
    watchFor: ["No interest in numbers or counting", "Can't sort by one attribute", "Poor balance for age", "Limited social interest"],
    pros: ["Number awareness builds math foundations", "Sorting shows logical thinking", "Turn-taking is becoming natural", "Best friendships are forming"],
    cons: ["Counting errors can frustrate perfectionists", "Number obsession may lead to rigid thinking", "Friend preferences may hurt other children", "Pouring = many spills"],
    weeklyTips: [
      { week: 1, tip: "Count everything you encounter: steps, plates at dinner, socks in the drawer." },
      { week: 2, tip: "Sort toys by color: 'All red toys in this box, all blue toys in that box!'" },
      { week: 3, tip: "Create simple patterns with snacks: cheese, cracker, cheese, cracker. Eat the pattern!" },
      { week: 4, tip: "Let toddler pour their own water from a small pitcher at meals. Accept some spills!" }
    ]
  },
  {
    month: 33, title: "Confident Kid", summary: "Toddler is confident, talkative, and physically capable. They can do so many things independently!",
    physical: [{ id: "p33-1", text: "Hops on one foot several times", tip: "Hopscotch is perfect practice!" }, { id: "p33-2", text: "Climbs playground equipment confidently", tip: "Let them challenge themselves with supervision" }, { id: "p33-3", text: "Draws a person with 3+ body parts", tip: "Draw people together and add details" }, { id: "p33-4", text: "Uses fork and spoon well", tip: "Model table manners during meals" }],
    emotional: [{ id: "e33-1", text: "Talks about past and future events", tip: "'What did we do yesterday? What will we do tomorrow?'" }, { id: "e33-2", text: "Shows empathy consistently", tip: "Praise empathetic behavior: 'That was so kind of you!'" }, { id: "e33-3", text: "Understands 'mine' and 'yours' and 'theirs'", tip: "Reinforce ownership and sharing concepts" }, { id: "e33-4", text: "Plays cooperatively for extended periods", tip: "Provide cooperative games and projects" }],
    activities: [
      { type: "physical", name: "Hopscotch", description: "Draw a hopscotch grid with chalk. Classic game that builds balance and counting!", icon: "1f522" },
      { type: "physical", name: "People Drawing", description: "Draw people with more detail: arms, fingers, hair, clothes. Talk about each part.", icon: "1f9d1" },
      { type: "emotional", name: "Yesterday/Tomorrow Talk", description: "Discuss past and future daily. Builds time understanding and memory skills.", icon: "1f4c5" },
      { type: "emotional", name: "Empathy Stories", description: "Read books about kindness and feelings. Discuss: 'How did the character feel?'", icon: "heart" }
    ],
    watchFor: ["Can't have a conversation", "No empathy shown", "Can't hop or balance", "Difficult behavior that doesn't improve"],
    pros: ["Confidence is inspiring to watch", "Empathy shows emotional maturity", "Time concepts reduce anxiety about transitions", "Extended cooperative play means longer peaceful moments"],
    cons: ["Over-confidence can lead to risk-taking", "May become bossy with younger/quieter children", "Future-talk can create anxiety about upcoming events", "Independence creates power struggles"],
    weeklyTips: [
      { week: 1, tip: "Draw hopscotch with chalk and play together! Great for balance, counting, and fun." },
      { week: 2, tip: "Talk about tomorrow: 'What will we do tomorrow?' Builds anticipation and time concepts." },
      { week: 3, tip: "Read a book about kindness and discuss: 'How would you feel if that happened to you?'" },
      { week: 4, tip: "Let toddler help plan a family activity. 'What should we do this weekend?'" }
    ]
  },
  {
    month: 34, title: "Knowledge Seeker", summary: "Toddler is asking complex questions, understanding abstract concepts, and showing readiness for preschool.",
    physical: [{ id: "p34-1", text: "Gallops and skips (or tries)", tip: "Practice galloping like horses" }, { id: "p34-2", text: "Catches a small ball", tip: "Progress from big balls to smaller ones" }, { id: "p34-3", text: "Draws basic shapes intentionally", tip: "Practice circles, squares, triangles" }, { id: "p34-4", text: "Dresses independently (most items)", tip: "Only help when asked" }],
    emotional: [{ id: "e34-1", text: "Asks complex questions about the world", tip: "Answer honestly at their level" }, { id: "e34-2", text: "Understands counting to 10+", tip: "Count higher: 11, 12, 13..." }, { id: "e34-3", text: "Follows 3-step directions", tip: "'Get your shoes, put them on, and come to the door'" }, { id: "e34-4", text: "Shows pride in skills", tip: "Acknowledge specific efforts and skills" }],
    activities: [
      { type: "physical", name: "Horse Gallop", description: "Gallop like horses around the yard! Great for coordination and imaginative play.", icon: "1f434" },
      { type: "physical", name: "Shape Drawing", description: "Practice drawing shapes with purpose. 'Can you draw a house?' (triangle + square!)", icon: "1f4d0" },
      { type: "emotional", name: "Science Questions", description: "When they ask big questions, explore together: 'Let's find out!' Look it up, experiment.", icon: "1f52c" },
      { type: "emotional", name: "Multi-Step Tasks", description: "Give 3-step instructions for daily tasks. Builds memory and independence.", icon: "1f4dd" }
    ],
    watchFor: ["Can't follow multi-step directions", "Speech unclear to strangers", "Can't draw basic shapes", "No interest in counting or numbers"],
    pros: ["Complex thinking is emerging rapidly", "Following multi-step directions shows working memory growth", "Independence in dressing saves parents time", "Pride in skills builds self-esteem"],
    cons: ["Questions get harder to answer!", "May worry or overthink things", "May refuse help when they need it", "Preschool readiness pressure from others"],
    weeklyTips: [
      { week: 1, tip: "When toddler asks a big question, say 'Great question! Let's find out together!'" },
      { week: 2, tip: "Practice 3-step morning routines: brush teeth, get dressed, eat breakfast." },
      { week: 3, tip: "Draw houses (square + triangle roof), trees, and suns together. Shapes in action!" },
      { week: 4, tip: "Count past 10 together. Many toddlers are ready for higher numbers now." }
    ]
  },
  {
    month: 35, title: "Almost Three!", summary: "One month to the third birthday! Toddler is a confident, articulate, physical, and emotionally aware little person.",
    physical: [{ id: "p35-1", text: "Runs, jumps, climbs with confidence", tip: "Let them take physical risks (supervised)" }, { id: "p35-2", text: "Pedals and steers well", tip: "Bike riding in safe areas — helmet always!" }, { id: "p35-3", text: "Uses scissors to cut along a line", tip: "Practice cutting out shapes" }, { id: "p35-4", text: "Buttons and unbuttons clothes", tip: "Let them dress completely independently" }],
    emotional: [{ id: "e35-1", text: "Speaks in complex sentences", tip: "Have deep conversations — they're capable!" }, { id: "e35-2", text: "Understands and follows rules", tip: "Involve them in making family rules" }, { id: "e35-3", text: "Shows awareness of others' feelings", tip: "Discuss emotions in books, movies, and real life" }, { id: "e35-4", text: "Begins to understand 'why' behind rules", tip: "Explain reasons: 'We hold hands because the road has cars'" }],
    activities: [
      { type: "physical", name: "Adventure Hike", description: "Go on a nature walk/hike. Collect leaves, rocks, sticks. Toddler can walk long distances now!", icon: "1f97e" },
      { type: "physical", name: "Cutting Skills", description: "Practice cutting along lines, cutting out shapes. Great pre-writing skill!", icon: "2702" },
      { type: "emotional", name: "Family Rules Meeting", description: "Let toddler help make family rules. 'What rules should we have?' They'll follow rules they helped create.", icon: "1f4dc" },
      { type: "emotional", name: "Feelings Journal", description: "Draw or paste pictures about feelings each day. 'Today I felt happy because...'", icon: "1f4d3" }
    ],
    watchFor: ["Speech hard to understand", "Can't follow simple rules", "Poor coordination for age", "No interest in peers", "Significant behavior concerns"],
    pros: ["Toddler is incredibly capable and independent", "Complex conversations are deeply fulfilling", "Physical confidence allows real adventures", "Emotional awareness is impressive"],
    cons: ["Can argue and negotiate endlessly", "May become anxious about growing up", "Physical daring can be scary for parents", "Transition to preschool may cause anxiety"],
    weeklyTips: [
      { week: 1, tip: "Go on a nature hike together. Let toddler lead — they can walk surprisingly far!" },
      { week: 2, tip: "Have a family meeting: discuss rules, plans, and let toddler contribute ideas." },
      { week: 3, tip: "Start a simple feelings journal: 'Today I felt _____ because _____.'" },
      { week: 4, tip: "Plan the third birthday! Toddler can help choose theme, cake, and activities." }
    ]
  },
  {
    month: 36, title: "Happy Third Birthday!", summary: "Three years old! From a tiny newborn to a walking, talking, thinking, feeling, incredible little person. What a journey!",
    physical: [{ id: "p36-1", text: "Runs, jumps, hops, gallops, climbs", tip: "Enroll in age-appropriate sports or dance" }, { id: "p36-2", text: "Rides tricycle well, may try balance bike", tip: "Consider a balance bike for the transition to pedal bike" }, { id: "p36-3", text: "Draws recognizable pictures", tip: "Ask about their drawings — every line has meaning" }, { id: "p36-4", text: "Mostly dresses independently", tip: "Reserve help for tricky items only" }],
    emotional: [{ id: "e36-1", text: "Vocabulary of 1000+ words", tip: "Read chapter books together now!" }, { id: "e36-2", text: "Plays cooperatively with sustained focus", tip: "Group activities, classes, and play dates" }, { id: "e36-3", text: "Shows empathy, kindness, and humor", tip: "Celebrate these qualities — they're who your child is becoming" }, { id: "e36-4", text: "Ready for preschool!", tip: "Visit the preschool together, read books about school, talk positively" }],
    activities: [
      { type: "physical", name: "Sports Introduction", description: "Try soccer, swimming, dance, or gymnastics. Structured physical activity with peers!", icon: "1f3c5" },
      { type: "physical", name: "Balance Bike", description: "A balance bike teaches coordination and prepares for a pedal bike later.", icon: "1f6b2" },
      { type: "emotional", name: "Third Birthday Celebration!", description: "Celebrate this incredible milestone! Your baby is now a full-fledged kid!", icon: "1f382" },
      { type: "emotional", name: "Preschool Prep", description: "Visit the school, meet the teacher, read books about school. Make it exciting!", icon: "1f3eb" }
    ],
    watchFor: ["Significant speech delay", "Can't play with other children", "Major coordination difficulties", "Extreme behavior that disrupts daily life", "Loss of skills"],
    pros: [
      "Three full years of incredible growth — celebrate!",
      "Your child is a real conversationalist",
      "Physical skills allow participation in sports and activities",
      "Emotional maturity enables deeper relationships",
      "Preschool opens up new worlds of learning and socialization"
    ],
    cons: [
      "Preschool transition can cause anxiety for child and parents",
      "'Threenager' behavior — bigger tantrums than at two",
      "Growing independence means less parental control",
      "Comparison with peers in structured settings",
      "The baby years are over — bittersweet!"
    ],
    weeklyTips: [
      { week: 1, tip: "Happy 3rd Birthday! You've raised a wonderful little person. Celebrate yourselves too, parents!" },
      { week: 2, tip: "3-year well-child visit. Important developmental assessment at this age." },
      { week: 3, tip: "If starting preschool, visit together. Read 'The Kissing Hand' or similar school books." },
      { week: 4, tip: "Create a time capsule: drawings, hand print, favorite things list. Open it on the 5th birthday!" }
    ]
  }
];

export default milestones;
