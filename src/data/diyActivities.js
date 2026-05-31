// DIY Activities — 5 per month, all 36 months
// Materials are common household items. YouTube links open search results for the activity.

const diyActivities = [
  {
    month: 1,
    activities: [
      {
        id: "m1-1", name: "Black & White Vision Cards", category: "sensory",
        duration: "5–10 min", difficulty: "Easy",
        materials: ["White paper", "Black marker", "Cardboard or clipboard"],
        steps: [
          "Draw bold black patterns on white paper: thick stripes, checkerboard, spirals, bull's-eye circles",
          "Hold the card 20–30 cm (8–12 inches) from baby's face — that's exactly their focus range",
          "Hold still for 10 seconds, then slowly move it left and right",
          "Watch baby's eyes lock onto and track the pattern",
          "Change to a new pattern after 2 minutes to keep it fresh"
        ],
        benefits: ["Stimulates the visual cortex — the most underdeveloped sense at birth", "Builds focus and eye-tracking muscles", "High contrast activates 2× more brain neurons than colour"],
        whyItWorks: "Newborns can only see 20–30 cm clearly and can't yet perceive colour well. High-contrast black/white patterns fire the most neurons in the developing visual cortex.",
        videoSearch: "https://www.youtube.com/results?search_query=black+white+cards+newborn+visual+stimulation",
        illustration: "vision_cards"
      },
      {
        id: "m1-2", name: "Tummy Time with Mirror", category: "motor",
        duration: "2–3 min, 4× daily", difficulty: "Easy",
        materials: ["Firm flat surface", "Rolled towel", "Small unbreakable mirror"],
        steps: [
          "Place a small rolled towel under baby's chest to make tummy time easier",
          "Position an unbreakable mirror at baby's eye level in front of them",
          "Get on the floor face-to-face — your face is the best motivation",
          "Talk, sing, or make faces to encourage baby to lift their head",
          "Stop after 2–3 minutes or when baby fusses — build up gradually"
        ],
        benefits: ["Builds neck, shoulder, and core muscles critical for all future movement", "Prevents flat head syndrome (positional plagiocephaly)", "Mirror provides visual motivation to lift head"],
        whyItWorks: "Babies who get adequate tummy time from birth develop motor skills faster. The mirror triggers curiosity — a powerful motivator even at this age.",
        videoSearch: "https://www.youtube.com/results?search_query=newborn+tummy+time+technique+mirror",
        illustration: "tummy_time"
      },
      {
        id: "m1-3", name: "Skin-to-Skin Heartbeat Hold", category: "bonding",
        duration: "15–30 min", difficulty: "Easy",
        materials: ["Comfortable chair or bed", "Blanket for warmth"],
        steps: [
          "Unbutton your shirt and place baby on your bare chest, face turned to one side",
          "Cover both of you with a light blanket, leaving baby's face uncovered",
          "Let baby listen to your heartbeat — the same sound they heard for 9 months",
          "Talk softly or hum — your voice vibration soothes them",
          "Stay calm; your nervous system literally co-regulates baby's heart rate and temperature"
        ],
        benefits: ["Regulates baby's heartbeat, breathing, and body temperature", "Releases oxytocin in both parent and baby", "Reduces cortisol (stress hormone) in newborns by up to 45%"],
        whyItWorks: "Your body is a biological regulator for baby. Skin-to-skin activates neural pathways that form the foundation of secure attachment.",
        videoSearch: "https://www.youtube.com/results?search_query=skin+to+skin+kangaroo+care+newborn+benefits",
        illustration: "skin_to_skin"
      },
      {
        id: "m1-4", name: "Sound Tour of the House", category: "sensory",
        duration: "10 min", difficulty: "Easy",
        materials: ["Just you and baby"],
        steps: [
          "Carry baby in your arms or a carrier, walking from room to room",
          "In kitchen: open a tap, rattle a spoon in a pot, crinkle a bag",
          "Outside: let them hear wind, birds, rustling leaves",
          "Say what each sound is: 'That's water running. That's a bird!'",
          "Watch baby's expression — they'll startle, focus, or relax based on the sound"
        ],
        benefits: ["Builds auditory discrimination — the ability to tell sounds apart", "Lays foundation for language processing", "Narration introduces hundreds of vocabulary words passively"],
        whyItWorks: "The auditory cortex is highly active at birth. Varied sound exposure shapes neural pathways that directly support future language learning.",
        videoSearch: "https://www.youtube.com/results?search_query=newborn+sensory+sounds+activities+language+development",
        illustration: "sound_tour"
      },
      {
        id: "m1-5", name: "Gentle Baby Massage", category: "emotional",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["Baby-safe oil (coconut or sunflower)", "Warm room", "Soft mat or changing table"],
        steps: [
          "Warm a few drops of oil in your palms — never apply cold oil to baby",
          "Start with legs: long strokes from thigh to ankle, then gentle ankle rotations",
          "Move to arms: stroke from shoulder to wrist, open and close the fist gently",
          "Tummy: clockwise circles with two fingers — this aids digestion and colic",
          "Back: if baby is on tummy, long strokes from neck to bottom — watch them melt!"
        ],
        benefits: ["Reduces colic and improves digestion", "Improves sleep quality (longer stretches)", "Builds body awareness and trust in touch"],
        whyItWorks: "Touch triggers the release of serotonin and reduces cortisol. Studies show massaged babies cry less, sleep more, and gain weight faster.",
        videoSearch: "https://www.youtube.com/results?search_query=infant+baby+massage+technique+beginners",
        illustration: "massage"
      }
    ]
  },
  {
    month: 2,
    activities: [
      {
        id: "m2-1", name: "Smile Mirror Game", category: "emotional",
        duration: "5–10 min", difficulty: "Easy",
        materials: ["Unbreakable mirror", "Your face!"],
        steps: [
          "Hold baby facing you at 30 cm distance — this is their ideal focus range",
          "Make a big, slow smile and hold it for 3 seconds",
          "Wait patiently — baby needs up to 10 seconds to process and respond",
          "When they smile back, respond with joy: 'YES! You smiled!'",
          "Try other expressions: surprised, happy, curious — baby will try to copy"
        ],
        benefits: ["Triggers the first true social smile (a major developmental milestone)", "Builds the brain's social-emotional circuitry", "Your response teaches them that communication matters"],
        whyItWorks: "Mirror neurons fire when babies observe facial expressions. Your enthusiastic response teaches them that their actions create reactions — the foundation of communication.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+first+smile+how+to+encourage+2+months",
        illustration: "mirror_smile"
      },
      {
        id: "m2-2", name: "Rattle Discovery Box", category: "sensory",
        duration: "10 min", difficulty: "Easy",
        materials: ["Small container with lid (Tupperware)", "Dried beans or rice", "Tape to seal lid"],
        steps: [
          "Half-fill the container with dried beans/rice and seal the lid with tape",
          "Gently shake it near baby's left ear — watch their eyes move left to locate the sound",
          "Move it slowly to the right side and shake again — they'll track it",
          "Place it in baby's hand — they may grasp it and discover they can make it rattle",
          "Vary rhythm: fast shake, slow shake, two taps — baby detects the difference!"
        ],
        benefits: ["Develops auditory localisation — locating where sounds come from", "Introduces cause and effect: 'I shook this, it made a sound!'", "Builds grip strength through reflexive grasping"],
        whyItWorks: "Auditory localisation requires both ears working together — this game exercises that bilateral coordination. It also introduces the first concept of cause and effect.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+baby+rattle+sensory+activity+2+months",
        illustration: "rattle"
      },
      {
        id: "m2-3", name: "Bicycle Legs Rhyme", category: "motor",
        duration: "5 min, during diaper changes", difficulty: "Easy",
        materials: ["Changing mat or soft surface", "Your hands"],
        steps: [
          "Lay baby on their back on a soft surface",
          "Hold both feet gently and move legs in a cycling motion",
          "Sing a simple rhyme: 'Round and round the wheels go, slow and fast and fast and slow!'",
          "Try pushing both knees gently towards their tummy — pause — then extend",
          "Watch their face: this often releases gas and earns you a very grateful expression!"
        ],
        benefits: ["Strengthens leg and core muscles", "Relieves gas and reduces colic discomfort", "The rhythm and song begin associating movement with language"],
        whyItWorks: "Passive leg movement stimulates the proprioceptive system — baby's internal sense of where their body is in space. This is foundational for all future movement.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+bicycle+legs+exercise+colic+relief",
        illustration: "bicycle_legs"
      },
      {
        id: "m2-4", name: "Colourful Scarf Dance", category: "sensory",
        duration: "5–8 min", difficulty: "Easy",
        materials: ["2–3 colourful scarves or fabric pieces", "Gentle music"],
        steps: [
          "Hold baby in your arms in a semi-reclined position so they can see up",
          "Float a bright scarf slowly above them — let it drift and flutter",
          "Let the scarf gently brush their hands and face — watch the reaction",
          "Hold the scarf and move it in time with slow music",
          "Crinkle it near their ear, then float it again — multi-sense stimulation!"
        ],
        benefits: ["Stimulates vision with slow-moving colour (tracking exercise)", "Light touch on face and hands builds tactile awareness", "Music + movement begins rhythm processing"],
        whyItWorks: "By month 2, babies begin tracking slow-moving objects. Floating scarves are the perfect speed — not too fast for their developing visual system.",
        videoSearch: "https://www.youtube.com/results?search_query=sensory+scarf+activity+baby+2+months",
        illustration: "scarf_dance"
      },
      {
        id: "m2-5", name: "Conversation Copy Game", category: "emotional",
        duration: "5–10 min", difficulty: "Easy",
        materials: ["Just you!"],
        steps: [
          "Get face-to-face with baby at their focus distance (20–30 cm)",
          "Make a long, slow 'ooooh' sound and hold it for 3 seconds",
          "Wait silently — give baby 10–15 seconds to respond with their own sound",
          "When they coo or gurgle, immediately copy THEIR sound back",
          "Take turns — you copy them, they copy you. This is their first conversation!"
        ],
        benefits: ["Builds the turn-taking structure that underlies all future conversation", "Cooing exercises the voice box and tongue muscles needed for speech", "Your responsive copying tells baby their communication has value"],
        whyItWorks: "Researchers call this 'serve and return' — the back-and-forth of early communication. Each exchange builds neural connections for language faster than any toy.",
        videoSearch: "https://www.youtube.com/results?search_query=serve+and+return+baby+talk+language+development",
        illustration: "conversation"
      }
    ]
  },
  {
    month: 3,
    activities: [
      {
        id: "m3-1", name: "Hanging Mobile DIY", category: "sensory",
        duration: "Make: 20 min | Play: 10 min daily", difficulty: "Medium",
        materials: ["Wooden dowel or hanger", "String", "Foil, colourful paper, or old CDs"],
        steps: [
          "Cut 5–6 different shapes from foil or colourful card: stars, circles, spirals",
          "Attach each shape to a string at different lengths from a dowel",
          "Hang above baby's play area so pieces are within their reach (30–40 cm up)",
          "Gently set it spinning or bat one piece — baby will focus and track",
          "Let baby bat at it during tummy time or when lying on their back"
        ],
        benefits: ["Tracking a slowly moving mobile builds eye coordination and focus", "Batting at dangling objects is the first intentional reaching motor skill", "Different materials (foil, paper) provide visual contrast"],
        whyItWorks: "At 3 months, babies begin swiping at objects within reach. This is called 'pre-reaching' — the foundation of hand-eye coordination and intentional grasping.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+baby+mobile+homemade+montessori",
        illustration: "mobile"
      },
      {
        id: "m3-2", name: "Peek-a-Boo Scarf", category: "cognitive",
        duration: "5–10 min", difficulty: "Easy",
        materials: ["Light, breathable muslin or thin cloth"],
        steps: [
          "Lay baby on their back and sit face-to-face",
          "Cover YOUR face with the cloth and say 'Where's Mama/Dada?'",
          "Dramatically pull the cloth away: 'PEEK-A-BOO!'",
          "Watch baby's face: first confusion, then delight, then anticipation!",
          "Try covering baby's face lightly — they'll pull it off themselves soon"
        ],
        benefits: ["Begins teaching object permanence — things still exist when hidden", "The anticipation builds working memory and attention span", "Shared laughter is powerful bonding and emotional regulation practice"],
        whyItWorks: "Before object permanence develops (fully around 8 months), every peek-a-boo genuinely surprises baby. The anticipation-surprise-relief cycle exercises emotional regulation circuits.",
        videoSearch: "https://www.youtube.com/results?search_query=peek+a+boo+baby+3+months+development",
        illustration: "peekaboo"
      },
      {
        id: "m3-3", name: "Water Pillow Sensory Mat", category: "sensory",
        duration: "10–15 min", difficulty: "Medium",
        materials: ["Large zip-lock freezer bag", "Water", "Food colouring (optional)", "Small floating objects: buttons, glitter, small toys", "Tape"],
        steps: [
          "Fill a large zip-lock bag 1/3 with water and add food colouring",
          "Add a few small colourful items: buttons, googly eyes, glitter",
          "Seal completely and reinforce all edges with strong tape",
          "Lay flat on the floor and place baby on their tummy over it",
          "The cool, squishing sensation and moving colours will fascinate them"
        ],
        benefits: ["Tactile stimulation through cool, soft surface", "Watching objects move inside builds visual tracking", "Proprioceptive input from the unsteady surface strengthens core muscles"],
        whyItWorks: "The unpredictable surface of a water mat activates the vestibular system and challenges core muscles in a gentle, playful way.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+water+sensory+mat+baby+tummy+time",
        illustration: "water_mat"
      },
      {
        id: "m3-4", name: "Baby Aeroplane Hold", category: "motor",
        duration: "5 min", difficulty: "Easy",
        materials: ["Your arms and a sturdy grip"],
        steps: [
          "Lie on your back on the floor or bed",
          "Hold baby facing down on your forearms, their chest resting on your arms",
          "Slowly lift them up above your face ('aeroplane!')",
          "Make engine sounds and tilt them gently side to side",
          "Lower them to your chest, then lift again — build the anticipation"
        ],
        benefits: ["Vestibular stimulation from movement and position changes", "Strengthens baby's neck and back muscles as they try to hold head up", "Face-to-face position while elevated builds social connection"],
        whyItWorks: "The vestibular system (balance) is directly linked to sensory processing, attention, and even emotional regulation. Gentle movement experiences are neurologically essential.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+airplane+hold+vestibular+activity+3+months",
        illustration: "airplane"
      },
      {
        id: "m3-5", name: "Texture Touch Book", category: "sensory",
        duration: "Make: 30 min | Use: 5 min daily", difficulty: "Medium",
        materials: ["Cardboard pages", "Glue", "Fabric scraps: velvet, cotton, burlap, foil, bubble wrap"],
        steps: [
          "Cut 6 cardboard rectangles the same size (A6 is perfect)",
          "Glue a different texture to each card: smooth foil, soft velvet, rough burlap, bumpy bubble wrap, silky ribbon, fluffy cotton ball",
          "Punch a hole in the corner of each and bind together with a ring or ribbon",
          "During calm alert time, guide baby's palm across each texture in turn",
          "Name each one: 'This is SMOOTH, this is ROUGH, this is FLUFFY!'"
        ],
        benefits: ["Builds the tactile discriminative system — telling textures apart", "Vocabulary introduced in context is retained better", "Fine motor contact with varied surfaces builds sensory mapping in the brain"],
        whyItWorks: "The somatosensory cortex maps the body's sense of touch. Rich tactile experiences in infancy literally build a more detailed brain map, enhancing sensory intelligence.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+texture+book+baby+sensory+activity",
        illustration: "texture_book"
      }
    ]
  },
  {
    month: 4,
    activities: [
      {
        id: "m4-1", name: "Rolling Practice with Prop", category: "motor",
        duration: "5–10 min, several times daily", difficulty: "Easy",
        materials: ["Rolled towel or small firm pillow"],
        steps: [
          "Lay baby on their back on a soft mat",
          "Place a rolled towel under one side of their hip to prop them at 45 degrees",
          "Hold a colourful toy just beyond their reach on the higher side",
          "Their natural reach for the toy plus the prop makes rolling easier",
          "Celebrate wildly when they manage it — the reaction motivates repetition!"
        ],
        benefits: ["Teaches the body the mechanics of rolling — a complex motor sequence", "The prop provides just enough help without doing the work for them", "Reaching motivation makes rolling feel purposeful"],
        whyItWorks: "Rolling requires coordinated hip, shoulder, and neck rotation. Using a prop reduces the difficulty while baby's brain learns the motor pattern — like training wheels.",
        videoSearch: "https://www.youtube.com/results?search_query=how+to+teach+baby+to+roll+over+4+months",
        illustration: "rolling"
      },
      {
        id: "m4-2", name: "Cause & Effect Bottle", category: "cognitive",
        duration: "10 min", difficulty: "Easy",
        materials: ["Clear plastic bottle with lid", "Coloured water or glitter + water", "Tape to seal"],
        steps: [
          "Fill a clear bottle half with water, add food colouring and a pinch of glitter",
          "Seal the lid with strong tape so it can't open",
          "Hold it up for baby to see, then slowly tip it back and forth",
          "Place it in baby's hands — they'll tip it and discover the movement inside",
          "Lay it on the floor; baby on tummy can bat it and watch it roll"
        ],
        benefits: ["First cause-and-effect toy: 'I tipped this, it moved!'", "Visual tracking of liquid movement inside", "Rolling the bottle during tummy time motivates reaching and army crawl attempts"],
        whyItWorks: "Cause-and-effect understanding (around 4 months) is a cognitive leap. Every time baby makes something happen, dopamine fires — making learning feel rewarding.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+discovery+bottle+sensory+cause+effect+4+months",
        illustration: "discovery_bottle"
      },
      {
        id: "m4-3", name: "Sound Shaker Eggs", category: "sensory",
        duration: "10 min", difficulty: "Easy",
        materials: ["Plastic Easter eggs or small containers", "Rice, sand, small bells (different fillings for each)"],
        steps: [
          "Fill 3 containers with different materials: rice, sand, small bells",
          "Shake each one near baby's ear — watch them react to the different sounds",
          "Place one in each hand and let them shake simultaneously",
          "Put the shakers on a mat during tummy time — they'll try to reach them",
          "Play a 'which one is this?' game by shaking behind a cloth"
        ],
        benefits: ["Auditory discrimination — telling similar sounds apart", "Bilateral hand activation (both hands at once)", "Different weights teach proprioception through their hands"],
        whyItWorks: "Musical discrimination activates multiple brain regions simultaneously. Babies who experience varied sound in infancy show stronger auditory processing and pre-reading skills.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+baby+sensory+shakers+sound+activity",
        illustration: "shakers"
      },
      {
        id: "m4-4", name: "Baby Sit-Up Pull", category: "motor",
        duration: "5 min, during playtime", difficulty: "Easy",
        materials: ["Your hands, a firm surface"],
        steps: [
          "Lay baby on their back, holding both your thumbs out at their chest height",
          "Let baby grip your thumbs — their grasp reflex makes this natural",
          "Very slowly and gently pull until they're at a 45-degree angle",
          "Hold for 3–5 seconds, then slowly lower back",
          "Watch their head: baby should try to keep it in line with their body — a great sign!"
        ],
        benefits: ["Strengthens neck flexors and abdominal core muscles", "Head control in 'pull to sit' is a key clinical assessment milestone", "Active muscle engagement (they work too!) vs. passive carrying"],
        whyItWorks: "When babies actively engage their muscles during pull-to-sit, they're building the core strength needed for sitting, crawling, and walking. It's a preview of every future milestone.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+pull+to+sit+exercise+head+control+4+months",
        illustration: "pull_to_sit"
      },
      {
        id: "m4-5", name: "Dance & Sing Together", category: "bonding",
        duration: "5–15 min", difficulty: "Easy",
        materials: ["Music (any genre you enjoy)", "Your arms"],
        steps: [
          "Hold baby facing you or facing out, supporting their bottom and back",
          "Put on music you genuinely enjoy — your body will move naturally and authentically",
          "Sway, turn slowly, bounce gently in rhythm",
          "Sing along if you know the words — baby loves your voice above all others",
          "Watch for baby's response: big eyes, kicks, smiles — they're dancing with you!"
        ],
        benefits: ["Vestibular stimulation from movement develops balance and spatial awareness", "Rhythm processing in the brain is linked to both music and language", "Shared joy is neurologically the strongest bonding experience"],
        whyItWorks: "Babies exposed to music and rhythmic movement show enhanced neural connectivity between auditory and motor regions — the same regions used for learning to speak and read.",
        videoSearch: "https://www.youtube.com/results?search_query=dancing+with+baby+music+activity+development",
        illustration: "dancing"
      }
    ]
  },
  {
    month: 5,
    activities: [
      {
        id: "m5-1", name: "Seated Toy Reach Challenge", category: "motor",
        duration: "10 min", difficulty: "Easy",
        materials: ["Nursing pillow or cushions for support", "3–4 small colourful toys"],
        steps: [
          "Prop baby in a sitting position using a nursing pillow or arrange cushions in a U-shape",
          "Place a toy just within reach to their right — let them lean and grab",
          "Then place one to the left — they must shift their weight to reach",
          "Try placing one slightly too far — just far enough to motivate a stretch",
          "If they topple, catch and resettle with a 'whoops! let's try again!'"
        ],
        benefits: ["Builds core balance muscles needed for independent sitting", "Lateral reaching requires weight shifting — a key pre-crawling skill", "Problem-solving: choosing which toy to reach for first"],
        whyItWorks: "Supported sitting builds the deep core muscles and balance reactions that allow independent sitting (milestone at ~6 months). Every wobble and correction is core muscle training.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+5+months+sitting+practice+reaching+activity",
        illustration: "seated_reach"
      },
      {
        id: "m5-2", name: "Face Naming Photo Game", category: "emotional",
        duration: "5–10 min daily", difficulty: "Easy",
        materials: ["Printed family photos (or phone screen)", "Clear photo sleeve or lamination"],
        steps: [
          "Print or gather 5–6 photos of close family members: parents, grandparents, siblings",
          "Show each photo clearly and name the person: 'That's Nani! She loves you so much!'",
          "Watch baby's face — they'll show recognition for familiar faces with a big smile",
          "For distant relatives they rarely see, use the photo before visits to reduce stranger anxiety",
          "Make a small photo album using plastic sleeves for baby to 'read'"
        ],
        benefits: ["Builds facial recognition memory — key for developing social cognition", "Names heard repeatedly with faces form lasting associations", "Reduces stranger anxiety for less-seen relatives"],
        whyItWorks: "The fusiform face area of the brain specialises in face recognition. Training it early with diverse familiar faces expands its neural network — boosting social intelligence.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+family+photo+activity+recognition+development",
        illustration: "photo_game"
      },
      {
        id: "m5-3", name: "Crinkle Texture Tunnel", category: "sensory",
        duration: "10 min", difficulty: "Medium",
        materials: ["Large cardboard box", "Aluminium foil", "Bubble wrap", "Fabric scraps", "Tape"],
        steps: [
          "Line the inside of a large cardboard box with different textures on each wall",
          "Line one wall with foil (crinkly, reflective), one with bubble wrap, one with soft fabric",
          "Place baby inside on their tummy during tummy time",
          "Sit outside the opening, calling and showing a toy to motivate movement",
          "Let baby explore the walls by touching, pushing, and mouthing"
        ],
        benefits: ["Full sensory environment: touch, visual reflection, sound (crinkling)", "Enclosed space creates a feeling of safety while encouraging exploration", "Motivates early crawling movements as they try to reach you"],
        whyItWorks: "Enclosed sensory environments provide proprioceptive feedback from all sides, which is deeply calming and stimulating simultaneously — similar to why babies love being swaddled.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+sensory+box+DIY+tummy+time+activity",
        illustration: "sensory_box"
      },
      {
        id: "m5-4", name: "Name Calling Game", category: "cognitive",
        duration: "5 min, multiple times daily", difficulty: "Easy",
        materials: ["Just your voice"],
        steps: [
          "When baby is in a calm, alert state, move to one side of the room",
          "Call baby's name clearly and warmly: '[Name]! Hi!'",
          "Watch them turn their head to locate your voice",
          "Move to the other side and call again — they'll turn the other way",
          "When they make eye contact with you, celebrate: 'You found me!' This builds name recognition"
        ],
        benefits: ["Builds name recognition — the child hears their name 100s of times before understanding it", "Auditory localisation from different directions", "The search-and-find game builds attention and response to social cues"],
        whyItWorks: "Name recognition before 6 months predicts language development outcomes. The earlier and more frequently a baby hears their name, the faster they respond to it consistently.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+name+recognition+activity+5+months+language",
        illustration: "name_game"
      },
      {
        id: "m5-5", name: "Bouncy Lap Ride", category: "motor",
        duration: "5 min", difficulty: "Easy",
        materials: ["Your lap, seated on a firm surface"],
        steps: [
          "Sit on a firm chair and place baby facing you on your knees",
          "Support their waist — not under the arms — so they must use their core",
          "Gently bounce your knees in rhythm, singing: 'Horsey horsey, don't you stop!'",
          "Tilt them slightly side to side in rhythm — they'll engage core muscles to balance",
          "A slow tilt forward and back (supported) challenges head and neck control"
        ],
        benefits: ["Vestibular input from rhythmic movement builds balance and spatial awareness", "Core muscle activation from self-balancing on an unstable surface", "Rhythm and song together are one of the most powerful neural activators"],
        whyItWorks: "Bouncing on a lap simulates the motion of walking and horses — movements humans evolved with for thousands of years. It directly stimulates the vestibular system, improving balance and sensory integration.",
        videoSearch: "https://www.youtube.com/results?search_query=lap+bounce+baby+rhymes+horsey+vestibular+activity",
        illustration: "lap_bounce"
      }
    ]
  },
  {
    month: 6,
    activities: [
      {
        id: "m6-1", name: "First Foods Sensory Play", category: "sensory",
        duration: "15–20 min", difficulty: "Easy",
        materials: ["High chair", "Puréed food (sweet potato, banana, avocado)", "Bib and patience!"],
        steps: [
          "Place a small amount of purée directly on the high chair tray",
          "Let baby touch, smear, and explore the food with both hands before eating",
          "Don't rush to the spoon — the sensory exploration is the learning",
          "Let them bring messy hands to their mouth — this builds self-feeding instincts",
          "Name the food, its colour, and texture: 'Yellow banana! It's smooth and sweet!'"
        ],
        benefits: ["Tactile desensitisation — crucial for preventing food texture aversions later", "Self-directed mouthing builds confidence with new foods", "Naming food in context builds vocabulary 3× faster than flash cards"],
        whyItWorks: "Babies who are allowed to touch and explore food before eating it show significantly lower rates of picky eating at age 2–3. The mess is worth it.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+led+weaning+first+foods+6+months+sensory",
        illustration: "first_foods"
      },
      {
        id: "m6-2", name: "Stacking Cup Tower Topple", category: "cognitive",
        duration: "10 min", difficulty: "Easy",
        materials: ["Plastic cups (any size — even disposable cups)"],
        steps: [
          "Stack 3–4 cups into a tower while baby watches from their seat",
          "Put the tower just within baby's reach",
          "They will knock it over — celebrate this as the GOAL, not a mistake",
          "Rebuild immediately and let them topple it again",
          "Try stacking cups IN each other (nesting) — a completely different challenge"
        ],
        benefits: ["Cause and effect: reaching out and making something happen", "Arm reaching across midline (from centre to side) is a key gross motor milestone", "Object exploration — what does this do? Can I move it?"],
        whyItWorks: "The act of knocking over a tower is a baby's first act of agency — intentionally changing their environment. This is cognitively as significant as a toddler building the tower.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+stacking+cups+activity+6+months+development",
        illustration: "cup_tower"
      },
      {
        id: "m6-3", name: "Pre-Crawl Commando Challenge", category: "motor",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["Non-slip mat", "Favourite toy as motivation"],
        steps: [
          "Place baby on their tummy on a slightly grippy surface (not too smooth)",
          "Place a motivating toy just out of reach — close enough to nearly touch",
          "Position yourself behind baby, place a hand lightly on their feet as a 'push-off' surface",
          "Baby will rock, squirm, and eventually push off your hands to move forward",
          "Gradually move the toy further as baby gets better at moving"
        ],
        benefits: ["Activates the pre-crawl motor pattern: alternating arm and leg push", "Your foot as a push-off surface teaches the foot extension needed for crawling", "Motivation-based motor learning is more effective than passive practice"],
        whyItWorks: "Using the hands/feet as push-off surfaces teaches the extensor muscles needed for crawling. This simple setup replicates exactly what physiotherapists use for crawling support.",
        videoSearch: "https://www.youtube.com/results?search_query=how+to+teach+baby+to+crawl+6+months+pre+crawl",
        illustration: "pre_crawl"
      },
      {
        id: "m6-4", name: "Object Permanence Box", category: "cognitive",
        duration: "10 min", difficulty: "Medium",
        materials: ["Shoebox with hole cut in top", "Small toy (ball or block that fits through hole)"],
        steps: [
          "Cut a hole in the top of a shoebox just big enough for the toy",
          "Show baby the toy, then drop it through the hole while they watch",
          "Open the box to reveal the toy: 'It's still there!'",
          "Let baby drop the toy in themselves and then find it in the box",
          "Eventually, drop the toy in without opening the box immediately — they'll wait and look"
        ],
        benefits: ["Directly teaches object permanence — things exist when hidden", "Dropping in the hole is excellent fine motor precision practice", "Problem-solving: how to retrieve something that disappeared"],
        whyItWorks: "Object permanence boxes are the cornerstone of Montessori infant education because they directly target the most important cognitive development of this age.",
        videoSearch: "https://www.youtube.com/results?search_query=object+permanence+box+baby+6+months+montessori",
        illustration: "object_box"
      },
      {
        id: "m6-5", name: "Water Splash Bath Play", category: "sensory",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["Shallow baby bath", "Plastic cups, spoon", "Floating toys"],
        steps: [
          "Fill the bath with a few inches of comfortably warm water",
          "Give baby a plastic cup to hold and help them pour water — let them discover splashing",
          "Float a rubber duck or plastic cup nearby and let baby reach and bat it",
          "Gently splash water onto baby's hands and say 'splash! splash!'",
          "Kick and splash their feet — they WILL figure out they control the splash!"
        ],
        benefits: ["Water resistance during splashing builds arm strength", "Unpredictable water movement trains the vestibular and proprioceptive systems", "Self-generated splash teaches cause and effect in a sensory-rich way"],
        whyItWorks: "Water play engages all sensory systems simultaneously — tactile, visual, proprioceptive, auditory. Sensory-rich environments produce exponentially more neural connections per minute.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+bath+water+play+sensory+activity+6+months",
        illustration: "water_play"
      }
    ]
  },
  {
    month: 7,
    activities: [
      {
        id: "m7-1", name: "Crawling Obstacle Trail", category: "motor",
        duration: "15–20 min", difficulty: "Easy",
        materials: ["Pillows, rolled blankets, soft cushions"],
        steps: [
          "Arrange pillows in a gentle trail or simple obstacle path on the floor",
          "Get on your hands and knees and crawl through it FIRST — baby will want to copy",
          "Place a favourite toy at the end of the trail",
          "Guide baby over low cushions (over), around pillows (around), through a tunnel of your legs",
          "Narrate: 'Over the mountain! Around the hill! Through the tunnel!'"
        ],
        benefits: ["Cross-pattern crawling activates both brain hemispheres simultaneously", "Different surfaces (soft cushions) train proprioceptive adaptation", "Language during movement creates spatial vocabulary"],
        whyItWorks: "Cross-pattern crawling is one of the only activities that fully integrates the left and right brain hemispheres. Many learning disability experts consider it critical for academic readiness.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+crawling+obstacle+course+7+months+activity",
        illustration: "obstacle_course"
      },
      {
        id: "m7-2", name: "Treasure Basket Exploration", category: "sensory",
        duration: "15–20 min", difficulty: "Easy",
        materials: ["Wicker basket or bowl", "10–12 safe household objects with different properties"],
        steps: [
          "Fill a low basket with 10 interesting household objects: wooden spoon, metal spoon, natural sponge, smooth stone, fabric square, small brush, shell, cardboard tube, rubber ball",
          "Sit baby in front of the basket — they need to be sitting independently",
          "Step back and observe — don't interfere unless there's a safety issue",
          "Baby will pick up each object, mouth it, examine it, drop it, pick up another",
          "Rotate objects weekly to keep it fresh and challenging"
        ],
        benefits: ["Heuristic play builds understanding of object properties: weight, texture, taste, sound", "Self-directed exploration builds intrinsic motivation and concentration", "No demonstration needed — this is entirely baby-led learning"],
        whyItWorks: "The treasure basket was developed by Elinor Goldschmied and is now used in infant rooms worldwide. Self-directed exploration with natural/real objects builds richer neural maps than plastic toys.",
        videoSearch: "https://www.youtube.com/results?search_query=treasure+basket+baby+heuristic+play+7+months",
        illustration: "treasure_basket"
      },
      {
        id: "m7-3", name: "Pull-to-Stand Practice", category: "motor",
        duration: "5–10 min", difficulty: "Easy",
        materials: ["Low, sturdy coffee table or sofa"],
        steps: [
          "Place baby in a sitting position in front of a low table",
          "Put a motivating toy ON the table just out of reach",
          "When baby reaches up, hold the table steady (or place your hands on either side of them)",
          "They'll use the table edge to pull themselves up — assist only if truly stuck",
          "Celebrate loudly when they stand: 'YOU'RE STANDING!'",
          "Teach them how to sit back down safely — bending knees, not just falling"
        ],
        benefits: ["Builds leg strength, hip stability, and balance for standing", "Learning to sit down safely is as important as standing — prevents falls", "Achievement of standing produces powerful dopamine — motivates repetition"],
        whyItWorks: "Learning to lower safely from standing is actually harder than pulling up. Babies who are taught both simultaneously fall far less as they begin cruising and walking.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+pull+to+stand+practice+7+months+activity",
        illustration: "pull_to_stand"
      },
      {
        id: "m7-4", name: "Wave and Clap Songs", category: "emotional",
        duration: "5–10 min", difficulty: "Easy",
        materials: ["Just your hands and voice"],
        steps: [
          "Sing 'If You're Happy and You Know It' and clap baby's hands for them at first",
          "After several repetitions, pause before the clap — see if baby anticipates it",
          "Practice waving: hold baby's hand and wave it, saying 'bye-bye!' each time you leave a room",
          "Try 'Wheels on the Bus' with hand actions — baby will start attempting the movements",
          "Celebrate every attempted gesture even if imperfect"
        ],
        benefits: ["Gesture-song pairing accelerates gesture development by 3× vs. songs alone", "Anticipating the gesture in a song builds working memory", "Waving and clapping are key social communication milestones"],
        whyItWorks: "Gestures are the bridge between pre-verbal communication and words. Every wave and clap is a proto-word — babies who gesture more at 9 months have bigger vocabularies at 18 months.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+action+songs+wave+clap+7+months+development",
        illustration: "action_songs"
      },
      {
        id: "m7-5", name: "Container Drop Game", category: "cognitive",
        duration: "10 min", difficulty: "Easy",
        materials: ["Large open container (pot, bucket, bowl)", "6–8 small safe objects: blocks, spoons, cups"],
        steps: [
          "Place a pot or bowl on the floor in front of baby",
          "Drop a block in — CLUNK! — watch baby's face light up",
          "Hand baby a block and guide their hand over the pot",
          "They'll drop it in and be amazed by the sound and disappearing act",
          "Tip the pot over and out roll all the blocks — 'Where did they go? They're all here!'"
        ],
        benefits: ["In and out, cause and effect: early maths and physics concepts", "Wrist rotation needed to release and drop objects", "The sound feedback is instant and reinforcing — makes them repeat immediately"],
        whyItWorks: "Filling and emptying containers is one of the most fundamental schemas in early childhood cognition. It directly teaches volume, containment, and spatial reasoning.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+fill+and+dump+container+activity+7+months",
        illustration: "container_drop"
      }
    ]
  },
  {
    month: 8,
    activities: [
      {
        id: "m8-1", name: "Cruising Furniture Highway", category: "motor",
        duration: "15–20 min", difficulty: "Easy",
        materials: ["Coffee table + sofa or two pieces of sturdy furniture"],
        steps: [
          "Arrange two pieces of furniture about 20 cm apart — a 'step' baby must transfer across",
          "Place toys along the surface at intervals so baby has motivation to keep moving",
          "Baby will pull up, cruise sideways along one piece, then reach across the gap to the next",
          "Gradually increase the gap as baby gets braver — their stepping stride grows",
          "Cheer each step: 'One step, two steps, three steps!'"
        ],
        benefits: ["Cruising directly prepares the lateral weight-shifting needed for walking", "Crossing the gap between furniture pieces is a major bravery milestone", "Leg strengthening with full body weight — the only way to train for walking"],
        whyItWorks: "The lateral weight shift in cruising is exactly the same motion used in walking. Every cruise step is a rehearsal for independent walking.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+cruising+furniture+8+months+walking+preparation",
        illustration: "cruising"
      },
      {
        id: "m8-2", name: "Pincer Grasp Snack Challenge", category: "motor",
        duration: "10 min, at mealtimes", difficulty: "Easy",
        materials: ["High chair", "Soft, age-appropriate snack pieces (puffs, soft banana pieces)"],
        steps: [
          "Place 5–6 small soft puffs on the clean high chair tray",
          "Show baby how to pick one up using your thumb and index finger slowly",
          "Let baby practice — they'll use a whole-hand 'raking' grasp at first",
          "Don't help unless they become frustrated — struggling builds the motor pattern",
          "Celebrate each successful pincer grasp with a huge smile"
        ],
        benefits: ["Pincer grasp is a major fine motor milestone — assessed at every 9-month checkup", "Self-feeding builds independence and food confidence", "The precision of getting food to mouth is training for future writing and drawing"],
        whyItWorks: "The pincer grasp requires independent finger control that the brain isn't ready for until 8–9 months. Food is the perfect motivation because the reward (eating) is immediate.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+pincer+grasp+practice+finger+foods+8+months",
        illustration: "pincer_grasp"
      },
      {
        id: "m8-3", name: "Goodbye Wave Practice", category: "emotional",
        duration: "Throughout the day", difficulty: "Easy",
        materials: ["Just you and anyone coming and going"],
        steps: [
          "Every single time someone leaves the room, wave and say 'BYE-BYE!' clearly",
          "Take baby's hand and help them wave back",
          "When someone arrives, wave and say 'HELLO!' enthusiastically",
          "Practice in front of a mirror — wave at your reflection",
          "After a week, pause before waving and see if baby initiates the gesture themselves"
        ],
        benefits: ["Waving bye-bye is a key social-communication milestone (assessed at 9 months)", "Consistent context (always wave when leaving) teaches the social meaning of the gesture", "Pausing to see if baby initiates tests comprehension, not just imitation"],
        whyItWorks: "A wave is a symbolic gesture — it means something specific. Gestural communication is a precursor to words and is strongly predictive of vocabulary development.",
        videoSearch: "https://www.youtube.com/results?search_query=teaching+baby+to+wave+bye+bye+8+months",
        illustration: "wave"
      },
      {
        id: "m8-4", name: "Drum Circle", category: "sensory",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["Pots, pans, lids, wooden spoon, metal spoon, plastic spoon"],
        steps: [
          "Place 3–4 different 'drums' in front of baby: pot, plastic bowl, cake tin, book",
          "Demonstrate tapping each one — notice the different sounds",
          "Hand baby the spoon and encourage them to strike each surface",
          "Try different strikers: wooden spoon, metal spoon, your knuckle, the flat of your hand",
          "Create a simple pattern and repeat — baby will try to imitate it!"
        ],
        benefits: ["Beat production on surfaces builds bilateral coordination and arm force control", "Different acoustic surfaces develop auditory discrimination", "Pattern imitation is an early sign of musical intelligence and executive function"],
        whyItWorks: "Rhythm production activates the motor cortex, auditory cortex, and cerebellum simultaneously. Drumming is one of the most efficient full-brain activities for infants.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+drum+music+activity+pots+pans+8+months",
        illustration: "drumming"
      },
      {
        id: "m8-5", name: "Peek-a-Boo Hide and Find", category: "cognitive",
        duration: "10 min", difficulty: "Easy",
        materials: ["Small toy", "Cloth or small blanket"],
        steps: [
          "Show baby a small favourite toy, then hide it under a cloth while they watch",
          "Ask: 'Where did it go?' and watch what they do",
          "By 8 months, many babies will pull the cloth away — object permanence is developing!",
          "Try hiding it under a pot — slightly harder to retrieve",
          "Make it trickier: show them the toy then hide it under one of three cloths"
        ],
        benefits: ["Directly tests and develops object permanence — a key Piagetian milestone", "Searching for hidden objects requires working memory (remembering where it went)", "Three-cloth version is an early form of choice and deductive reasoning"],
        whyItWorks: "Piaget's classic object permanence experiments are essentially this activity. Babies who master it earlier show more advanced problem-solving at age 3.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+object+permanence+hide+find+game+8+months",
        illustration: "hide_find"
      }
    ]
  },
  {
    month: 9,
    activities: [
      {
        id: "m9-1", name: "Nesting & Stacking Cups", category: "cognitive",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["6–8 different-sized cups (yogurt pots work well)"],
        steps: [
          "Start with just 3 cups and demonstrate stacking biggest to smallest",
          "Knock the tower over together — then rebuild",
          "Show nesting: put the small cup INSIDE the medium, inside the large",
          "Let baby try completely independently — let them figure out why it won't fit",
          "Add more cups once they've mastered 3"
        ],
        benefits: ["Size discrimination — understanding big/medium/small", "Problem-solving when the order is wrong", "Trial and error learning builds persistence and cognitive flexibility"],
        whyItWorks: "Seriation (ordering by size) is a foundational pre-maths concept. The physical feedback when a cup doesn't fit makes the size relationship concrete and memorable.",
        videoSearch: "https://www.youtube.com/results?search_query=stacking+nesting+cups+baby+activity+9+months",
        illustration: "nesting_cups"
      },
      {
        id: "m9-2", name: "Ball Roll Track", category: "motor",
        duration: "10 min", difficulty: "Easy",
        materials: ["Cardboard tube (paper towel roll)", "Tape", "Books or box to prop at angle", "Small ball"],
        steps: [
          "Prop the cardboard tube at an angle using books, so it acts as a ramp",
          "Roll a small ball down the tube while baby watches — it comes out the bottom!",
          "Let baby hold the ball and guide it to the top opening",
          "Baby will very quickly learn to drop the ball in and wait for it to appear",
          "Try two tubes side by side — a race!"
        ],
        benefits: ["Cause and effect: input → process → output", "Fine motor skill of placing a ball in a narrow tube opening", "Spatial reasoning: the ball goes IN here and comes OUT there"],
        whyItWorks: "This is a classic Montessori object permanence and trajectory schema toy. Trajectory schema (things that move through space) is one of the dominant schemas at this age.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+ball+ramp+tube+baby+activity+9+months",
        illustration: "ball_ramp"
      },
      {
        id: "m9-3", name: "First Sign Language", category: "emotional",
        duration: "Throughout the day", difficulty: "Medium",
        materials: ["Consistency and repetition — no props needed"],
        steps: [
          "Choose 3 signs to start: 'more' (tap fingertips together), 'all done' (shake hands), 'milk' (squeeze fist)",
          "Every time you give milk, make the milk sign AND say 'milk'",
          "When baby finishes eating, make the 'all done' sign AND say 'all done'",
          "When baby wants more food, take their hands and make the 'more' sign",
          "Baby will typically use their first sign at 9–11 months — celebrate ecstatically!"
        ],
        benefits: ["Reduces frustration dramatically — baby can express needs before words develop", "Babies who sign speak earlier (not later) — signing accelerates language", "Each sign is a word — it counts as communication"],
        whyItWorks: "Indian Sign Language and ASL signs for basic needs are well-documented to reduce infant frustration by 40% and increase vocabulary development at 18–24 months.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+sign+language+basics+more+all+done+milk",
        illustration: "sign_language"
      },
      {
        id: "m9-4", name: "Cardboard Box Tunnel", category: "motor",
        duration: "15–20 min", difficulty: "Easy",
        materials: ["Large appliance box (refrigerator or washing machine box)", "Scissors"],
        steps: [
          "Cut both ends of a large cardboard box to create a tunnel",
          "Reinforce any sharp edges with tape",
          "Place baby at one end and sit at the other end, calling their name",
          "They will crawl through to reach you — enormous satisfaction when they emerge!",
          "Add a torch inside the tunnel; let baby control the light"
        ],
        benefits: ["Proprioceptive input from confined crawling space builds body awareness", "Goal-directed crawling ('I need to get to the other end') builds motor planning", "Confined space is calming for many babies — vestibular regulation"],
        whyItWorks: "Tunnel crawling requires the baby to navigate their body in 3D space — a sophisticated proprioceptive task. The enclosed space provides calming deep pressure from all sides.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+cardboard+box+tunnel+crawling+activity",
        illustration: "tunnel"
      },
      {
        id: "m9-5", name: "Emotions Puppet Show", category: "emotional",
        duration: "10 min", difficulty: "Easy",
        materials: ["2 socks", "Markers (permanent)", "Buttons or felt for eyes"],
        steps: [
          "Draw a simple face on a sock: big eyes, smile — one happy, one sad",
          "Put one on each hand and introduce them: 'This is Happy Bunny, this is Sad Bunny'",
          "Make Happy Bunny dance and jump: 'I'm SO happy today!'",
          "Make Sad Bunny droop and speak softly: 'I feel sad when...'",
          "Let baby touch and grab the puppets — the tactile play is part of the emotional learning"
        ],
        benefits: ["Named emotions become recognisable and memorable through story and character", "Puppet faces show emotion more clearly than adult faces (simpler features)", "Touch + story + emotion = multi-modal emotional learning"],
        whyItWorks: "Using puppets to model emotions is a technique used in infant mental health therapy and early childhood programmes worldwide. Stories make emotional concepts concrete.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+emotion+puppet+show+emotional+development+activity",
        illustration: "puppets"
      }
    ]
  },
  {
    month: 10,
    activities: [
      {
        id: "m10-1", name: "Walking Helper Push Toy", category: "motor",
        duration: "15–20 min", difficulty: "Medium",
        materials: ["Small cardboard box", "Tape to seal", "Fill with books to add weight"],
        steps: [
          "Fill a small sturdy box (cereal box) with books or folded clothes so it's heavy enough to not tip over",
          "Tape it closed securely",
          "Place baby standing at the box and demonstrate pushing it",
          "Baby uses it as a walking aid — the weight prevents it sliding away too fast",
          "Walk alongside them for safety, gradually let them push independently"
        ],
        benefits: ["Provides stability support for first steps without holding baby's hand", "Baby controls the pace (unlike being held) — builds independent balance", "Heavy box gives resistance — forces proper stepping and weight shift"],
        whyItWorks: "A weighted push box provides the perfect resistance: stable enough to lean on, moveable enough to require active stepping. Professional physiotherapists use this exact approach.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+baby+push+walker+toy+first+steps+activity",
        illustration: "push_walker"
      },
      {
        id: "m10-2", name: "Ball Hunt in Blankets", category: "cognitive",
        duration: "10 min", difficulty: "Easy",
        materials: ["3 different coloured balls", "3 different cloths or containers"],
        steps: [
          "Show baby a specific ball: 'The RED ball!'",
          "Hide it under a cloth while they watch",
          "Ask: 'Find the red ball!' — they'll pull the cloth off",
          "Now hide all 3 balls under 3 different cloths",
          "Ask for a specific colour: 'Where's the BLUE ball?' — they must remember where it went"
        ],
        benefits: ["Multi-location object permanence — harder than single-location hide", "Colour association: the name 'red' linked to a visual property", "Memory recall: which cloth is which ball?"],
        whyItWorks: "Multi-location hide-and-seek requires the hippocampus (memory) to store multiple 'where is X?' queries simultaneously. This is early spatial working memory.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+hide+seek+game+10+months+colour+ball",
        illustration: "ball_hunt"
      },
      {
        id: "m10-3", name: "Body Part Naming Massage", category: "emotional",
        duration: "10 min", difficulty: "Easy",
        materials: ["Changing mat, baby oil"],
        steps: [
          "During massage or nappy change, say and point to each body part clearly",
          "'Where are your TOES? Here! One, two, three, four, five toes!'",
          "'Where's your TUMMY? Here it is — I'm going to give it a raspberry!'",
          "Touch each part, name it, and make it fun — a tickle, a kiss, a raspberry",
          "After two weeks, ask: 'Where are your ears?' and watch them point!"
        ],
        benefits: ["Body awareness is foundational for proprioception and self-concept", "Words taught with physical sensation are retained fastest", "Responding to 'where is your X' is an assessed milestone at 12 months"],
        whyItWorks: "Multi-modal learning (touch + sound + social reward) creates the strongest and most lasting neural connections. Body parts learned this way are typically never forgotten.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+body+parts+activity+song+10+months",
        illustration: "body_parts"
      },
      {
        id: "m10-4", name: "Kitchen Instrument Band", category: "sensory",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["2 wooden spoons", "Pot, cake tin, plastic bowl, cardboard box"],
        steps: [
          "Place 4 different-sounding surfaces in a semi-circle around baby",
          "Hand them a wooden spoon and let them discover each surface",
          "Demonstrate: fast tapping vs. slow, hard vs. soft, alternating both hands",
          "Play a simple pattern: tap-tap-tap and see if they copy",
          "Play music in the background and try to keep time — baby will feel the beat!"
        ],
        benefits: ["Beat reproduction activates motor cortex and auditory processing simultaneously", "Discriminating between surfaces develops auditory and tactile senses", "Pattern copying is the earliest form of musical cognition — strongly linked to maths ability"],
        whyItWorks: "Rhythm and music activate more brain areas simultaneously than almost any other activity. Regular musical play at this age shows measurable improvements in language, maths, and social-emotional development.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+musical+instruments+kitchen+band+10+months",
        illustration: "kitchen_band"
      },
      {
        id: "m10-5", name: "Reading Interaction Game", category: "cognitive",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["Simple picture board book", "Your enthusiasm"],
        steps: [
          "Open a picture book and point to a clear image: 'Look, a dog!'",
          "Make the sound: 'Woof woof!'",
          "Ask a question while pointing: 'Can you find the dog?' Let them look and point",
          "On re-reads, pause before the animal sound and wait — they'll start filling it in!",
          "Let baby turn the pages (even messily) — this is them controlling the story"
        ],
        benefits: ["Interactive reading builds vocabulary 4× faster than passive reading", "Pausing for baby to fill in sounds builds anticipation and language production", "Page turning builds fine motor skills and sense of story ownership"],
        whyItWorks: "Harvard research shows that 'dialogic reading' (asking questions, pausing for responses) produces dramatically better language outcomes than simply reading text aloud.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+interactive+reading+board+books+10+months",
        illustration: "reading"
      }
    ]
  },
  {
    month: 11,
    activities: [
      {
        id: "m11-1", name: "Scribble First Art", category: "motor",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["Thick crayons (triangular baby crayons are best)", "Large paper taped to table"],
        steps: [
          "Tape a large sheet of paper to the table or floor so it can't slide",
          "Place 2–3 thick crayons within reach",
          "Demonstrate scribbling with large arm movements — not tiny movements",
          "Help baby grip if needed but let them choose the direction",
          "Narrate what they make: 'Look at all those beautiful swirls!'",
          "Display their creation — they'll look for it and feel proud"
        ],
        benefits: ["First drawings develop the same hand muscles used for writing in 4–5 years", "Child-led creation builds self-expression and confidence", "Large movements use the shoulder and arm; small use fingers — both important"],
        whyItWorks: "Scribbling precedes drawing which precedes writing. The neural pathway from mark-making to writing takes years to build. Starting early literally speeds up the timeline.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+first+art+scribbling+crayon+activity+11+months",
        illustration: "first_art"
      },
      {
        id: "m11-2", name: "Barefoot Texture Walk", category: "sensory",
        duration: "10–15 min", difficulty: "Easy",
        materials: ["Towels", "Different materials: bubble wrap, carpet square, bath mat, smooth plastic tray, grass"],
        steps: [
          "If outside: let baby walk barefoot on grass, dirt, sand, tiles in sequence",
          "If inside: create a 'sensory path' on the floor: bath mat → smooth plastic tray → bubble wrap → carpet",
          "Hold baby's hands and walk them slowly across each surface",
          "Name the sensation: 'Ooh, that's BUMPY! This one is SMOOTH!'",
          "As they get more confident, hold just one hand, then none"
        ],
        benefits: ["Bare feet on varied surfaces is the most direct proprioceptive input available", "Plantar (sole of foot) stimulation directly develops balance mechanisms", "Walking on uneven/unexpected surfaces forces constant postural micro-adjustments"],
        whyItWorks: "Bare feet on natural surfaces stimulate thousands of sensory receptors in the soles. These send vital information to the brain for developing balance, gait, and spatial awareness.",
        videoSearch: "https://www.youtube.com/results?search_query=barefoot+baby+sensory+walk+texture+activity",
        illustration: "texture_walk"
      },
      {
        id: "m11-3", name: "Helper Chore Activities", category: "emotional",
        duration: "Throughout the day", difficulty: "Easy",
        materials: ["Small child-sized brush/cloth, laundry basket, simple tasks"],
        steps: [
          "Give baby a small cloth when you're wiping surfaces — they'll imitate you",
          "When loading laundry, hand baby each item to 'help' put in the basket",
          "Hand them single items of flat laundry to 'fold' (they'll scrunch — that counts)",
          "Say clearly: 'You're such a good helper! Thank you!'",
          "Treat their participation as genuine contribution — because it is"
        ],
        benefits: ["Belonging to the family unit through contribution builds self-worth early", "Imitation of adult tasks is the earliest form of learning life skills", "Language: helper, thank you, please — social vocabulary in authentic context"],
        whyItWorks: "Research in child development shows that children who are included in household tasks (even symbolically) at under 1 year show more prosocial and cooperative behaviour at age 3.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+helping+household+chores+11+months+activity",
        illustration: "helper"
      },
      {
        id: "m11-4", name: "Two-Word Command Game", category: "cognitive",
        duration: "Throughout the day", difficulty: "Easy",
        materials: ["Familiar toys and objects around the home"],
        steps: [
          "Give clear two-part commands using objects baby knows: 'Give me the ball'",
          "Hold out your hand expectantly — gesture helps comprehension",
          "Try 'Put the cup on the table' — a spatial instruction",
          "Play 'find and bring': 'Go get your sock!' — adds movement and memory",
          "Always celebrate when they succeed: 'You understood! You're SO smart!'"
        ],
        benefits: ["Following two-part commands is a key receptive language milestone at 12 months", "Object-action pairs develop both vocabulary and grammar simultaneously", "The physical carrying/giving adds motor planning and sequencing"],
        whyItWorks: "Following instructions requires holding multiple pieces of information in working memory simultaneously. This 'language executive function' predicts school readiness.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+following+instructions+commands+11+months+language",
        illustration: "commands"
      },
      {
        id: "m11-5", name: "Pretend Phone Conversation", category: "emotional",
        duration: "5–10 min", difficulty: "Easy",
        materials: ["Two toy phones or safe objects that look phone-shaped (remote, banana)"],
        steps: [
          "Hold your 'phone' to your ear: 'Ring ring! Hello?'",
          "Have a silly conversation: 'Yes, I love biscuits too!'",
          "Hold the second phone to baby's ear: 'It's for you!'",
          "Ask baby questions with pauses: 'What did you have for breakfast?' — wait for a response",
          "When baby makes sounds, respond as if it's a real answer: 'Bananas? Yum!'"
        ],
        benefits: ["Introduces conversational structure: speaking + listening + responding", "Pretend play begins to emerge — imaginary props work", "Your responsive replies teach that their sounds have communicative meaning"],
        whyItWorks: "Pretend phone play is consistently listed by speech therapists as the most effective tool for encouraging verbal communication in 10–14 month olds.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+pretend+phone+play+language+development+11+months",
        illustration: "pretend_phone"
      }
    ]
  },
  {
    month: 12,
    activities: [
      {
        id: "m12-1", name: "Birthday Walk Adventure", category: "motor",
        duration: "20–30 min", difficulty: "Easy",
        materials: ["Outside space, shoes (or barefoot on safe surfaces)"],
        steps: [
          "Hold baby's hand and walk SLOWLY together outside",
          "Let them set the pace completely — stop whenever they want",
          "Name everything they point at: leaf, car, dog, flower, puddle",
          "Let them crouch down to examine things close up — the world is fascinating at their height",
          "Count their steps out loud: 'One, two, three!' The counting becomes familiar"
        ],
        benefits: ["Child-led walking builds confidence and independent locomotion", "Following their gaze and pointing teaches them that their interests matter", "Outdoor exposure to nature is linked to reduced anxiety and better focus"],
        whyItWorks: "The first year of walking is critical for developing the gait pattern, balance, and foot mechanics baby will use for life. Uneven outdoor surfaces train balance better than flat floors.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+first+birthday+walk+activity+outside+development",
        illustration: "first_walk"
      },
      {
        id: "m12-2", name: "Shape Sorting Homemade", category: "cognitive",
        duration: "10–15 min", difficulty: "Medium",
        materials: ["Shoebox with lid", "Scissors", "3 different shaped blocks or objects"],
        steps: [
          "Cut shapes in the box lid: a circle, a square, a triangle — slightly larger than your objects",
          "Show baby how to push the circle through the circle hole",
          "Let them try — they will rotate and try to force wrong shapes; let them figure it out",
          "When they succeed, open the box: 'All the shapes fell inside!'",
          "Gradually reduce your hints — let them solve it entirely independently"
        ],
        benefits: ["Shape recognition and matching is foundational spatial intelligence", "Problem-solving when the wrong shape doesn't fit (rotation, trying different orientations)", "Fine motor: gripping and pushing a specific shape through a specific hole"],
        whyItWorks: "Shape sorting requires simultaneous visual-spatial analysis and fine motor control. Children who solve it independently develop stronger spatial reasoning, which predicts STEM ability.",
        videoSearch: "https://www.youtube.com/results?search_query=DIY+baby+shape+sorter+12+months+activity",
        illustration: "shape_sorter"
      },
      {
        id: "m12-3", name: "First Word Celebration Book", category: "emotional",
        duration: "Make: 20 min | Use: daily", difficulty: "Medium",
        materials: ["Small photo book or folded paper", "Photos of familiar objects baby can name"],
        steps: [
          "Print or gather photos of 8–10 objects baby knows: dog, ball, cup, shoe, banana",
          "Make a small book: one photo per page",
          "Go through it daily, pointing and saying the word",
          "When baby says (or attempts) the word, celebrate ecstatically",
          "Add new words as baby learns them — the book grows with their vocabulary"
        ],
        benefits: ["Visual + verbal pairing reinforces word-to-object mapping in the brain", "A 'word book' gives baby agency — they choose which page and word to focus on", "Tracking their words gives parents a milestone record"],
        whyItWorks: "Photo books of personally relevant objects are more effective vocabulary builders than commercial flash cards because familiarity and emotional relevance strengthen neural encoding.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+first+words+photo+book+activity+12+months",
        illustration: "word_book"
      },
      {
        id: "m12-4", name: "Sand/Rice Sensory Bin", category: "sensory",
        duration: "15–20 min", difficulty: "Easy",
        materials: ["Shallow container or storage box", "Dried rice or clean sand", "Cups, spoons, small toys to hide inside"],
        steps: [
          "Fill the container with 5–8 cm of rice or sand",
          "Bury 3–4 small toys inside",
          "Sit baby in front of the bin and show them how to dig",
          "Let them scoop, pour, bury, and search freely",
          "Name what they find: 'You found the duck! Where's the ball?'"
        ],
        benefits: ["Sensory regulation through tactile grounding (rice/sand)", "Fine motor workout through scooping, pinching, pouring", "Hide-and-seek within the bin adds cognitive challenge"],
        whyItWorks: "Sensory bins are used in occupational therapy to develop tactile tolerance, fine motor skills, and focused attention. The self-directed nature builds intrinsic motivation.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+sensory+bin+rice+sand+12+months+activity",
        illustration: "sensory_bin"
      },
      {
        id: "m12-5", name: "Birthday Cake Smash Play", category: "emotional",
        duration: "15 min", difficulty: "Easy",
        materials: ["Smash cake (or mashed potato 'cake')", "High chair", "Camera ready!"],
        steps: [
          "Place a small, soft cake or shaped mashed potato on the high chair tray",
          "Let baby explore completely freely — touching, squishing, tasting",
          "Don't guide or direct — watch what they decide to do with it",
          "Talk about what they're doing: 'You're squishing it! It's so soft!'",
          "Take photos — this is a milestone moment to treasure"
        ],
        benefits: ["Full sensory exploration of texture, temperature, taste, and smell", "No rules = powerful sense of autonomy and self-expression", "The emotional memory of this day will shape their sense of celebration"],
        whyItWorks: "A cake smash is actually excellent occupational therapy — the complete sensory freedom builds tactile tolerance and self-expression. More importantly, it's joyful. Joy is the best learning state.",
        videoSearch: "https://www.youtube.com/results?search_query=baby+first+birthday+cake+smash+milestone",
        illustration: "cake_smash"
      }
    ]
  }
];

// Months 13-36: fill with structured activities
const toddlerActivities = [
  {
    month: 13,
    activities: [
      { id: "m13-1", name: "Nature Walk Collecting", category: "sensory", duration: "20–30 min", difficulty: "Easy", materials: ["Small bag or bucket", "Outdoors"], steps: ["Walk outside slowly, letting toddler lead", "Collect interesting things: leaves, pebbles, sticks", "Examine each together: 'This leaf is YELLOW. It's crunchy!'", "Take them home and sort into groups", "Glue them to paper for a nature collage"], benefits: ["Direct sensory engagement with natural world", "Classification: sorting by type, colour, texture", "Language: new vocabulary from nature"], whyItWorks: "Nature exposure reduces cortisol, improves attention, and provides the richest sensory variety available. Children who spend regular time in nature show better focus and creativity.", videoSearch: "https://www.youtube.com/results?search_query=toddler+nature+walk+collecting+activity+13+months", illustration: "nature_walk" },
      { id: "m13-2", name: "Duplo/Block Tower Build", category: "motor", duration: "10–15 min", difficulty: "Easy", materials: ["Large soft blocks or Duplo/Mega Bloks"], steps: ["Start with 2–3 blocks and stack together", "Demonstrate: put one block ON TOP of another", "Toddler will knock it down — rebuild cheerfully", "Ask: 'Can you put the block ON TOP?' — test comprehension", "Try building side by side (parallel) rather than together"], benefits: ["Stacking 2 blocks is a 12-month milestone; 4–6 blocks by 18 months", "Spatial reasoning: balance and structure", "Preposition: ON TOP is taught here"], whyItWorks: "Block building is the most researched early childhood activity. It predicts maths ability at age 5 better than any other toy or activity.", videoSearch: "https://www.youtube.com/results?search_query=toddler+block+stacking+activity+13+months", illustration: "block_tower" },
      { id: "m13-3", name: "Walk and Carry", category: "motor", duration: "Throughout the day", difficulty: "Easy", materials: ["Small basket or bag", "Light items to carry"], steps: ["Give toddler a small basket and ask them to carry it", "'Can you bring me the shoes from over there?'", "Let them carry their cup to the table", "Praise specifically: 'You walked all the way and didn't spill a drop!'", "Create errands: 'Please put this in the kitchen'"], benefits: ["Walking while carrying an object is a coordination milestone", "Purpose-driven walking (errand) motivates more steps and better balance", "Following instructions with objects builds working memory"], whyItWorks: "Carrying objects while walking requires divided attention between balance and object control. It's a significantly more complex motor task than walking alone.", videoSearch: "https://www.youtube.com/results?search_query=toddler+walk+carry+activity+independence+13+months", illustration: "walk_carry" },
      { id: "m13-4", name: "Word Expansion Narration", category: "cognitive", duration: "Throughout the day", difficulty: "Easy", materials: ["Just your voice and observation"], steps: ["When toddler says a word, repeat it back in a full sentence", "Baby: 'dog!' → You: 'Yes! A BIG brown dog is running!'", "When they point, name it AND describe it: colour, size, what it's doing", "Read slowly, pointing at each picture, waiting for their word attempt", "Count everything out loud: 'One banana. TWO bananas. THREE!'"], benefits: ["Expanding utterances is the most evidence-based language intervention known", "Rich descriptions build adjective and verb vocabulary", "Hearing their word repeated correctly (without correction) models language"], whyItWorks: "Expansion (repeating baby's word in a grammatical sentence) is used by speech therapists worldwide. Studies show it increases vocabulary growth by 60% compared to just talking AT babies.", videoSearch: "https://www.youtube.com/results?search_query=toddler+language+expansion+narration+activity", illustration: "word_expansion" },
      { id: "m13-5", name: "Musical Freeze Dance", category: "motor", duration: "10 min", difficulty: "Easy", materials: ["Music player", "Space to move"], steps: ["Play upbeat music and dance together — any style!", "When the music stops (you control this), FREEZE dramatically", "Toddler will freeze or fall over laughing — both are perfect", "Gradually they'll anticipate the stop and freeze first", "Add silliness: freeze in funny poses, freeze like a statue, freeze like a dinosaur"], benefits: ["Stop-start body control builds impulse control (executive function)", "Proprioceptive feedback from freeze position builds body awareness", "The social joy of dancing together is powerful bonding"], whyItWorks: "Freeze dance is one of the few activities that simultaneously builds gross motor skills AND impulse control. Both are strongly predictive of school success.", videoSearch: "https://www.youtube.com/results?search_query=baby+toddler+freeze+dance+musical+activity+13+months", illustration: "freeze_dance" }
    ]
  }
];

// Generate remaining months 14-36 with systematic activities
const remainingMonths = [];
for (let m = 14; m <= 36; m++) {
  remainingMonths.push({
    month: m,
    activities: [
      {
        id: `m${m}-1`, name: `Outdoor Exploration (Month ${m})`, category: "sensory",
        duration: "20–30 min", difficulty: "Easy",
        materials: ["Outdoor space", "Collection bag"],
        steps: [
          "Head outside and let your toddler lead the direction",
          "Follow their gaze and commentary — name everything they point at",
          m <= 18 ? "Let them touch leaves, bark, soil, and grass with guidance" : "Encourage them to describe what they see, hear, smell",
          m <= 24 ? "Collect 3 interesting things to bring home and examine" : "Ask: 'What do you notice? What do you hear?'",
          "Narrate what you observe: animals, weather, plants, people"
        ],
        benefits: ["Nature exposure reduces cortisol and improves focus", "Real-world vocabulary is acquired fastest in-context", "Unstructured outdoor time builds creativity and resilience"],
        whyItWorks: "Richard Louv's research shows children with regular outdoor time have 30% better attention, more creativity, and lower rates of anxiety and depression.",
        videoSearch: `https://www.youtube.com/results?search_query=toddler+outdoor+sensory+activity+${m}+months+development`,
        illustration: "nature_walk"
      },
      {
        id: `m${m}-2`, name: `Building & Construction Play`, category: "motor",
        duration: "15–20 min", difficulty: "Easy",
        materials: [m <= 18 ? "Mega Bloks or large soft blocks" : m <= 24 ? "Duplo or wooden blocks" : "Wooden unit blocks or Lego Duplo"],
        steps: [
          m <= 18 ? "Stack 3–4 large blocks, then let toddler knock them down" : m <= 24 ? "Build simple structures: tower, train, road" : "Build together: house, bridge, car park",
          "Follow their lead — ask 'What are you building?'",
          m <= 20 ? "Count blocks as you add them: 'One, TWO, three!'" : "Introduce concepts: tall/short, big/small, more/fewer",
          "When they knock it over, say 'You knocked it down! Want to build it again?'",
          m <= 24 ? "Sort blocks by colour before building" : "Create a challenge: 'Can you build something taller than this cup?'"
        ],
        benefits: ["Block play is the strongest predictor of maths ability at age 5", "Spatial reasoning: balance, structure, 3D thinking", "Persistence: rebuilding after a collapse builds resilience"],
        whyItWorks: "40+ years of research shows block play builds spatial intelligence, maths foundations, and problem-solving. The AAP lists block play as a top recommendation for 12–36 months.",
        videoSearch: `https://www.youtube.com/results?search_query=toddler+block+building+activity+${m}+months`,
        illustration: "block_tower"
      },
      {
        id: `m${m}-3`, name: `Art & Creative Expression`, category: "emotional",
        duration: "15–20 min", difficulty: "Easy",
        materials: [m <= 18 ? "Thick crayons, large paper" : m <= 24 ? "Crayons, stamps, stickers" : "Crayons, watercolour paint, scissors (safety)"],
        steps: [
          "Set up the materials with no specific goal — process over product",
          m <= 18 ? "Demonstrate large scribbling movements" : m <= 24 ? "Name colours as you draw: 'I'm making a RED line!'" : "Ask what they want to draw and support their vision",
          "Never correct or draw 'for' them — offer suggestions only",
          "Describe what you see: 'You used SO many colours! It's so bright!'",
          "Display all artwork — seeing it up builds pride and motivation to create more"
        ],
        benefits: ["Creative expression builds emotional regulation and self-expression", "Fine motor control from mark-making directly prepares for writing", "Child-led creation builds intrinsic motivation and confidence"],
        whyItWorks: "Process art (focus on doing, not outcome) is significantly more beneficial for development than product art (copying or colouring-in). The AAP recommends process art from 12 months.",
        videoSearch: `https://www.youtube.com/results?search_query=toddler+process+art+activity+${m}+months+creative`,
        illustration: "first_art"
      },
      {
        id: `m${m}-4`, name: `Language & Story Time`, category: "cognitive",
        duration: "10–15 min", difficulty: "Easy",
        materials: [m <= 18 ? "Board books with simple pictures" : m <= 24 ? "Picture books with short text" : "Picture story books"],
        steps: [
          "Sit together comfortably with the book",
          m <= 18 ? "Point to pictures and name them slowly" : m <= 24 ? "Ask: 'Where is the...? Can you find the...?'" : "Ask open questions: 'What do you think will happen next?'",
          "Let toddler turn pages and choose what to look at",
          m <= 20 ? "Make animal sounds for each animal" : "Ask about emotions: 'How does the bear feel? Why?'",
          "Re-read the same book multiple times — repetition is how language is learned"
        ],
        benefits: ["Interactive reading builds vocabulary faster than any other activity", "Questions build comprehension, prediction, and inference skills", "Shared reading is the most powerful bonding activity available"],
        whyItWorks: "Harvard research shows children read to daily have 1.4 million more word exposures by age 5 than those who aren't. Dialogic reading (with questions) multiplies the benefit.",
        videoSearch: `https://www.youtube.com/results?search_query=toddler+interactive+reading+story+time+${m}+months`,
        illustration: "reading"
      },
      {
        id: `m${m}-5`, name: `Active Movement Game`, category: "motor",
        duration: "15–20 min", difficulty: "Easy",
        materials: [m <= 18 ? "Open floor space, cushions" : m <= 24 ? "Ball, pillows, open space" : "Ball, chalk, outdoor space"],
        steps: [
          m <= 18 ? "Chase game: crawl/walk away slowly and let toddler chase you" : m <= 24 ? "Kick a ball back and forth" : "Run relay: 'Run to the tree and back!'",
          m <= 20 ? "Roll a ball and say 'Can you bring it back?'" : "Jump: hold hands and jump together, then try independently",
          "Play 'Simon Says' — start simple: 'Simon Says touch your nose!'",
          m <= 24 ? "March together in a circle singing" : "Hopscotch, jumping, skipping — whatever they're developing",
          "Always cheer effort, not just success: 'You really tried hard!'"
        ],
        benefits: ["60+ minutes of active play daily is recommended by WHO for under-5s", "Gross motor development is inseparably linked to cognitive development", "Physical play with a caregiver is the most potent bonding and learning experience"],
        whyItWorks: "Physical activity triggers BDNF (brain-derived neurotrophic factor) — literally a growth hormone for the brain. Children who are more active have measurably better attention, memory, and learning.",
        videoSearch: `https://www.youtube.com/results?search_query=toddler+active+movement+game+${m}+months+gross+motor`,
        illustration: "obstacle_course"
      }
    ]
  });
}

const allDiyActivities = [...diyActivities, ...toddlerActivities, ...remainingMonths];

export default allDiyActivities;
