const sources = {
  global: [
    {
      id: "who",
      name: "World Health Organization (WHO)",
      type: "International Health Body",
      description: "WHO Multicentre Growth Reference Study (MGRS) and Child Growth Standards. The gold standard for developmental milestones used worldwide, based on a longitudinal study of 8,440 children from diverse ethnic backgrounds across 6 countries.",
      publications: [
        "WHO Motor Development Study: Windows of Achievement for Six Gross Motor Milestones (2006)",
        "WHO Child Growth Standards: Length/height-for-age, weight-for-age, weight-for-length/height (2006)",
        "WHO Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5 Years of Age (2019)"
      ],
      url: "https://www.who.int/tools/child-growth-standards",
      icon: "1f30d",
      color: "#0093D5"
    },
    {
      id: "cdc",
      name: "Centers for Disease Control and Prevention (CDC)",
      type: "US Federal Health Agency",
      description: "CDC's 'Learn the Signs. Act Early.' program provides evidence-based developmental milestone checklists reviewed by pediatric experts. Updated in 2022 with input from over 200,000 developmental screenings.",
      publications: [
        "CDC Milestone Tracker App & Checklists (Updated 2022)",
        "Developmental Milestones by Age — Birth to 5 Years",
        "Developmental Monitoring and Screening Guidelines for Healthcare Providers"
      ],
      url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
      icon: "1f1fa-1f1f8",
      color: "#0057B8"
    },
    {
      id: "aap",
      name: "American Academy of Pediatrics (AAP)",
      type: "Professional Medical Organization",
      description: "AAP's Bright Futures Guidelines provide the most comprehensive pediatric care recommendations including developmental surveillance, screening, and health promotion. Used by pediatricians globally as the standard of care.",
      publications: [
        "Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents, 4th Edition (2017)",
        "AAP Policy Statement: Identifying Infants and Young Children with Developmental Disorders in the Medical Home (2006, reaffirmed 2020)",
        "Caring for Your Baby and Young Child: Birth to Age 5, 7th Edition (2019)"
      ],
      url: "https://www.aap.org/en/practice-management/bright-futures/",
      icon: "1f468-200d-2695",
      color: "#00529B"
    },
    {
      id: "zerotothree",
      name: "Zero to Three",
      type: "Research & Advocacy Organization",
      description: "The leading US nonprofit focused exclusively on infants and toddlers. Their developmental guidelines are research-backed and widely referenced by pediatricians, early childhood educators, and parents worldwide.",
      publications: [
        "From Baby to Big Kid: Month-by-Month Development Guide",
        "Screen-Free Ways to Support Your Child's Development",
        "Social-Emotional Development Milestones: Birth to 36 Months"
      ],
      url: "https://www.zerotothree.org/",
      icon: "baby",
      color: "#E8562A"
    },
    {
      id: "unicef",
      name: "UNICEF (United Nations Children's Fund)",
      type: "International Organization",
      description: "UNICEF's Early Childhood Development framework is used globally, particularly in developing nations. Their guidelines integrate nutrition, health, stimulation, and protection for holistic child development.",
      publications: [
        "Early Moments Matter for Every Child (2017)",
        "UNICEF's Nurturing Care Framework for Early Childhood Development",
        "Care for Child Development: Improving the Care of Young Children (with WHO)"
      ],
      url: "https://www.unicef.org/early-childhood-development",
      icon: "1f310",
      color: "#1CABE2"
    },
    {
      id: "mayo",
      name: "Mayo Clinic",
      type: "Academic Medical Center",
      description: "One of the world's most respected medical institutions. Their infant and child development resources are peer-reviewed by practicing pediatricians and developmental specialists.",
      publications: [
        "Infant Development: Milestones from Birth to 12 Months",
        "Toddler Development: What to Expect from Age 1 to 3",
        "Language Development: Speech Milestones for Babies"
      ],
      url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048012",
      icon: "1f3e5",
      color: "#0057A8"
    },
    {
      id: "nih",
      name: "National Institutes of Health (NIH) — NICHD",
      type: "US Federal Research Institute",
      description: "The Eunice Kennedy Shriver National Institute of Child Health and Human Development (NICHD) conducts and funds research on child development. Their milestone data is based on longitudinal clinical studies.",
      publications: [
        "Milestones: What Most Children Can Do by a Certain Age",
        "NICHD Study of Early Child Care and Youth Development (SECCYD)",
        "Safe to Sleep® Campaign Guidelines for Infant Sleep Safety"
      ],
      url: "https://www.nichd.nih.gov/health/topics/childdevelopment",
      icon: "1f52c",
      color: "#20558A"
    },
    {
      id: "ddst",
      name: "Denver Developmental Screening Test (DDST-II)",
      type: "Clinical Screening Tool",
      description: "The Denver II is one of the most widely used developmental screening tools globally, covering gross motor, fine motor-adaptive, language, and personal-social domains from birth to 6 years. Used in 50+ countries.",
      publications: [
        "Denver Developmental Screening Test Manual, Revised (Frankenburg & Dodds)",
        "Technical Manual for the Denver II (1992, Updated 2012)"
      ],
      url: "https://denverii.com/",
      icon: "clipboard",
      color: "#6B4C9A"
    }
  ],
  indian: [
    {
      id: "iap",
      name: "Indian Academy of Pediatrics (IAP)",
      type: "Professional Medical Organization",
      description: "India's foremost pediatric body with 33,000+ members. IAP's developmental milestone guidelines are tailored to the Indian population, accounting for regional, nutritional, and socio-cultural variations. Their growth charts are the standard for Indian children.",
      publications: [
        "IAP Growth Charts for Indian Children (Revised 2015)",
        "IAP Guidelines on Developmental Assessment and Screening",
        "IAP Textbook of Pediatrics, 6th Edition — Developmental Pediatrics Section",
        "IAP Guide Book on Immunization (includes developmental milestone monitoring)",
        "IAP Position Paper on Neurodevelopmental Screening in Children (2020)"
      ],
      url: "https://www.iapindia.org/",
      icon: "1f1ee-1f1f3",
      color: "#FF9933"
    },
    {
      id: "nnf",
      name: "National Neonatology Forum (NNF) of India",
      type: "Professional Medical Organization",
      description: "NNF provides evidence-based guidelines for newborn care across India. Their developmental follow-up protocols for high-risk neonates are used in NICUs across the country.",
      publications: [
        "NNF Clinical Practice Guidelines: Follow-up of High-Risk Neonates",
        "Evidence-Based Clinical Practice Guidelines for Newborn Care (NNF)",
        "NNF Manual of Neonatal Care — Developmental Assessment Chapter"
      ],
      url: "https://www.nnfi.org/",
      icon: "baby-bottle",
      color: "#138808"
    },
    {
      id: "nimhans",
      name: "NIMHANS (National Institute of Mental Health and Neurosciences)",
      type: "Government Research Institute",
      description: "India's premier institute for mental health and neuroscience. NIMHANS has developed culturally adapted developmental screening tools widely used across Indian hospitals and primary health centers.",
      publications: [
        "NIMHANS Battery for Developmental Assessment of Indian Children",
        "Trivandrum Developmental Screening Chart (TDSC) — Validated for Indian Population",
        "Developmental Assessment Scales for Indian Infants (DASII) — Developed by NIMHANS faculty"
      ],
      url: "https://nimhans.ac.in/",
      icon: "brain",
      color: "#000080"
    },
    {
      id: "icmr",
      name: "Indian Council of Medical Research (ICMR)",
      type: "Government Research Body",
      description: "ICMR funds and conducts research on child development across India. Their studies on developmental milestones in Indian children provide population-specific normative data.",
      publications: [
        "ICMR Guidelines on Infant and Young Child Feeding (IYCF)",
        "ICMR-NIN Dietary Guidelines for Indians — Infant Nutrition Section",
        "ICMR Multicentric Study on Normal Developmental Milestones in Indian Children"
      ],
      url: "https://www.icmr.gov.in/",
      icon: "1f52c",
      color: "#003366"
    },
    {
      id: "rbsk",
      name: "Rashtriya Bal Swasthya Karyakram (RBSK)",
      type: "Government Health Program",
      description: "India's national child health screening program under the Ministry of Health and Family Welfare. RBSK screens children from birth to 18 years for developmental delays, defects, diseases, and deficiencies across all states.",
      publications: [
        "RBSK Operational Guidelines — Developmental Delay Screening Protocol",
        "Child Health Screening and Early Intervention Services (RBSK Manual)",
        "RBSK Training Module for Medical Officers: Developmental Milestones"
      ],
      url: "https://rbsk.gov.in/",
      icon: "1f3db",
      color: "#FF6600"
    },
    {
      id: "aiims",
      name: "AIIMS (All India Institute of Medical Sciences)",
      type: "Academic Medical Institution",
      description: "India's most prestigious medical institution. AIIMS Delhi's Department of Pediatrics has published extensively on developmental milestones in Indian children and their assessment.",
      publications: [
        "AIIMS Protocols in Pediatrics — Developmental Assessment Chapter",
        "Growth and Development Charts for Indian Infants (AIIMS Study)",
        "Guide to Child Development and Early Intervention — AIIMS Department of Pediatrics"
      ],
      url: "https://www.aiims.edu/",
      icon: "1f393",
      color: "#0066CC"
    },
    {
      id: "mwcd",
      name: "Ministry of Women and Child Development — ICDS",
      type: "Government Program",
      description: "The Integrated Child Development Services (ICDS) is one of the world's largest programs for early childhood care. Their developmental monitoring framework reaches 80+ million children through Anganwadi centers across India.",
      publications: [
        "ICDS Mission Guidelines — Growth Monitoring and Developmental Milestones",
        "National Early Childhood Care and Education (ECCE) Curriculum Framework",
        "Guidelines for Anganwadi Workers: Monitoring Child Development Milestones"
      ],
      url: "https://wcd.nic.in/",
      icon: "1f3d8",
      color: "#CC3333"
    }
  ],
  screeningTools: [
    {
      name: "Ages and Stages Questionnaire (ASQ-3)",
      origin: "USA — Validated globally including India",
      description: "Parent-completed screening tool covering communication, gross motor, fine motor, problem-solving, and personal-social domains. Used in 60+ countries.",
      ageRange: "1–66 months"
    },
    {
      name: "Denver Developmental Screening Test II (DDST-II)",
      origin: "USA — Used worldwide",
      description: "Clinician-administered screening covering 4 developmental domains. One of the most widely referenced screening tools globally.",
      ageRange: "0–6 years"
    },
    {
      name: "Developmental Assessment Scales for Indian Infants (DASII)",
      origin: "India — NIMHANS, Bangalore",
      description: "Indian adaptation of the Bayley Scales, specifically normed for Indian children. Covers motor and mental development. The gold standard for developmental assessment in India.",
      ageRange: "0–30 months"
    },
    {
      name: "Trivandrum Developmental Screening Chart (TDSC)",
      origin: "India — Child Development Centre, Trivandrum",
      description: "A simplified screening tool validated on Indian children, designed for use in primary health care settings and by non-specialist health workers.",
      ageRange: "0–24 months"
    },
    {
      name: "Bayley Scales of Infant Development (BSID-III)",
      origin: "USA — Used internationally",
      description: "The gold standard for diagnostic developmental assessment worldwide. Measures cognitive, language, motor, social-emotional, and adaptive behavior.",
      ageRange: "1–42 months"
    },
    {
      name: "M-CHAT-R/F (Modified Checklist for Autism in Toddlers)",
      origin: "USA — Validated globally",
      description: "Screening tool specifically for autism spectrum disorder. Recommended by AAP and IAP at 18 and 24 months well-child visits.",
      ageRange: "16–30 months"
    }
  ],
  citations: {
    physical: [
      {
        milestone: "Head control and tummy time (Month 1-3)",
        sources: ["WHO Motor Development Study (2006)", "AAP Bright Futures Guidelines", "IAP Textbook of Pediatrics"],
        note: "WHO study found 90% of children achieve head control by 3.3 months across all populations studied."
      },
      {
        milestone: "Rolling over (Month 3-5)",
        sources: ["CDC Milestone Tracker (2022)", "Denver II Screening Test Norms", "DASII Indian Norms"],
        note: "CDC revised rolling milestone to 4 months (tummy to back) in 2022 update. Indian norms (DASII) show slight variation."
      },
      {
        milestone: "Sitting without support (Month 5-7)",
        sources: ["WHO MGRS (2006)", "IAP Growth Charts", "Bayley-III Norms"],
        note: "WHO window: 3.8–9.2 months. Indian population median is 6.0 months per DASII."
      },
      {
        milestone: "Crawling (Month 6-10)",
        sources: ["WHO Motor Development Study", "Zero to Three Guidelines", "NIMHANS Developmental Battery"],
        note: "WHO notes crawling is NOT a required milestone — some babies skip directly to walking. This is normal."
      },
      {
        milestone: "Standing and walking (Month 8-15)",
        sources: ["WHO MGRS (2006)", "CDC Milestones (2022)", "IAP Developmental Guidelines"],
        note: "WHO window for walking alone: 8.2–17.6 months. CDC revised to expect walking by 18 months. IAP considers up to 18 months normal for Indian children."
      },
      {
        milestone: "Running and climbing (Month 18-24)",
        sources: ["AAP Bright Futures", "RBSK Screening Manual", "Bayley-III Motor Scales"],
        note: "Running emerges between 18-24 months with wide variation. RBSK screens for inability to run by 24 months."
      },
      {
        milestone: "Jumping, hopping, balance (Month 24-36)",
        sources: ["Denver II Norms", "AAP Guidelines", "AIIMS Pediatric Protocols"],
        note: "Jumping with both feet: expected by 24-30 months. Hopping on one foot: typically 36+ months."
      }
    ],
    emotional: [
      {
        milestone: "Social smile (Month 1-2)",
        sources: ["AAP Bright Futures", "CDC Milestones", "IAP Textbook of Pediatrics"],
        note: "First social smile typically appears at 6-8 weeks. Absence by 3 months warrants evaluation per AAP and IAP guidelines."
      },
      {
        milestone: "Stranger anxiety (Month 6-9)",
        sources: ["Zero to Three", "AAP Caring for Your Baby", "NIMHANS Developmental Battery"],
        note: "A healthy sign of secure attachment. Typically peaks at 8-10 months per developmental psychology research."
      },
      {
        milestone: "First words (Month 10-14)",
        sources: ["CDC Milestones (2022)", "AAP Bright Futures", "IAP Position Paper on Language Development"],
        note: "CDC expects first words by 12 months. IAP notes bilingual/multilingual Indian children may show slight delay in single-language milestones but are on track overall."
      },
      {
        milestone: "Vocabulary explosion (Month 18-24)",
        sources: ["AAP Bright Futures", "Mayo Clinic Guidelines", "AIIMS Pediatric Protocols"],
        note: "50+ words by 18 months, 200-300 by 24 months per AAP norms. Fewer than 20 words by 18 months warrants screening."
      },
      {
        milestone: "Pretend play and empathy (Month 18-36)",
        sources: ["Zero to Three", "Bayley-III Social-Emotional Scales", "ICDS ECCE Framework"],
        note: "Pretend play emergence at 18 months is a key cognitive milestone. Absence by 24 months is an autism screening indicator per M-CHAT guidelines."
      },
      {
        milestone: "Cooperative play and friendships (Month 24-36)",
        sources: ["AAP Bright Futures", "UNICEF Nurturing Care Framework", "IAP Guidelines"],
        note: "Parallel play (playing alongside) transitions to cooperative play (playing together) between 24-36 months."
      }
    ]
  },
  directLinks: {
    WHO: {
      label: "WHO",
      home: "https://www.who.int/tools/child-growth-standards",
      pages: {
        motor: "https://www.who.int/publications/i/item/9241563257",
        growth: "https://www.who.int/tools/child-growth-standards/standards",
        activity: "https://www.who.int/publications/i/item/9789241550536",
        milestones: "https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones"
      }
    },
    CDC: {
      label: "CDC",
      home: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
      pages: {
        "2months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html",
        "4months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html",
        "6months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html",
        "9months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html",
        "12months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-1yr.html",
        "15months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-15mo.html",
        "18months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html",
        "2years": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html",
        "30months": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html",
        "3years": "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html",
        screening: "https://www.cdc.gov/ncbddd/childdevelopment/screening.html"
      }
    },
    AAP: {
      label: "AAP",
      home: "https://www.healthychildren.org/English/ages-stages/Pages/default.aspx",
      pages: {
        newborn: "https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx",
        "1month": "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-1-Month.aspx",
        "3months": "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-3-Months.aspx",
        "7months": "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-7-Months.aspx",
        "12months": "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-12-Months.aspx",
        toddler: "https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx",
        brightFutures: "https://www.aap.org/en/practice-management/bright-futures/bright-futures-materials-and-tools/bright-futures-guidelines-and-pocket-guide/"
      }
    },
    IAP: {
      label: "IAP",
      home: "https://www.iapindia.org/",
      pages: {
        guidelines: "https://www.iapindia.org/guidelines/",
        growthCharts: "https://www.iapindia.org/iap-growth-charts/",
        immunization: "https://www.iapindia.org/iap-guidebook-on-immunization/",
        ijp: "https://www.indianpediatrics.net/"
      }
    },
    NIMHANS: {
      label: "NIMHANS",
      home: "https://nimhans.ac.in/",
      pages: {
        childPsychiatry: "https://nimhans.ac.in/child-and-adolescent-psychiatry/",
        publications: "https://nimhans.ac.in/publications/"
      }
    },
    AIIMS: {
      label: "AIIMS",
      home: "https://www.aiims.edu/",
      pages: {
        pediatrics: "https://www.aiims.edu/en/departments/clinical/pediatrics.html",
        publications: "https://www.aiims.edu/en/research/publications.html"
      }
    },
    ZeroToThree: {
      label: "Zero to Three",
      home: "https://www.zerotothree.org/",
      pages: {
        milestones: "https://www.zerotothree.org/resource/your-childs-development-age-based-tips-from-birth-to-36-months/",
        socialEmotional: "https://www.zerotothree.org/resource/social-and-emotional-development/",
        brainDev: "https://www.zerotothree.org/resource/brain-development/"
      }
    },
    UNICEF: {
      label: "UNICEF",
      home: "https://www.unicef.org/early-childhood-development",
      pages: {
        ecd: "https://www.unicef.org/early-childhood-development",
        nurturingCare: "https://nurturing-care.org/",
        parenting: "https://www.unicef.org/parenting/"
      }
    },
    MayoClinic: {
      label: "Mayo Clinic",
      home: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048012",
      pages: {
        "0to3": "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048012",
        "4to6": "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048178",
        "7to9": "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20047086",
        "10to12": "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20047380",
        speech: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/language-development/art-20045163"
      }
    },
    NNF: {
      label: "NNF",
      home: "https://www.nnfi.org/",
      pages: {
        guidelines: "https://www.nnfi.org/cpg",
        journal: "https://www.nnfi.org/journal-of-neonatology"
      }
    },
    ICMR: {
      label: "ICMR",
      home: "https://www.icmr.gov.in/",
      pages: {
        guidelines: "https://www.icmr.gov.in/guidelines.html",
        nin: "https://www.nin.res.in/"
      }
    },
    RBSK: {
      label: "RBSK",
      home: "https://rbsk.gov.in/RBSKLive/",
      pages: {
        guidelines: "https://nhm.gov.in/index1.php?lang=1&level=4&sublinkid=1190&lid=583"
      }
    },
    MWCD: {
      label: "ICDS/MWCD",
      home: "https://wcd.nic.in/",
      pages: {
        icds: "https://wcd.nic.in/integrated-child-development-services-icds-scheme",
        ecce: "https://wcd.nic.in/sites/default/files/national_ecce_curr_framework_final_03022014%20%282%29.pdf"
      }
    }
  },
  monthToLinks(month) {
    const links = [];
    if (month <= 3) {
      links.push({ label: "WHO Motor Milestones", url: "https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones" });
      links.push({ label: "CDC: 2 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html" });
      links.push({ label: "AAP: Newborn Development", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-1-Month.aspx" });
      links.push({ label: "Mayo Clinic: 0-3 Months", url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048012" });
      links.push({ label: "IAP Guidelines", url: "https://www.iapindia.org/guidelines/" });
      links.push({ label: "Zero to Three: Milestones", url: "https://www.zerotothree.org/resource/your-childs-development-age-based-tips-from-birth-to-36-months/" });
    } else if (month <= 6) {
      links.push({ label: "WHO Growth Standards", url: "https://www.who.int/tools/child-growth-standards/standards" });
      links.push({ label: "CDC: 4 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html" });
      links.push({ label: "CDC: 6 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html" });
      links.push({ label: "AAP: 3 Month Milestones", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-3-Months.aspx" });
      links.push({ label: "Mayo Clinic: 4-6 Months", url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048178" });
      links.push({ label: "IAP Growth Charts", url: "https://www.iapindia.org/iap-growth-charts/" });
    } else if (month <= 9) {
      links.push({ label: "WHO Motor Milestones", url: "https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones" });
      links.push({ label: "CDC: 9 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html" });
      links.push({ label: "AAP: 7 Month Milestones", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-7-Months.aspx" });
      links.push({ label: "Mayo Clinic: 7-9 Months", url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20047086" });
      links.push({ label: "NIMHANS Child Development", url: "https://nimhans.ac.in/child-and-adolescent-psychiatry/" });
    } else if (month <= 12) {
      links.push({ label: "CDC: 12 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-1yr.html" });
      links.push({ label: "AAP: 12 Month Milestones", url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-12-Months.aspx" });
      links.push({ label: "Mayo Clinic: 10-12 Months", url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20047380" });
      links.push({ label: "IAP Immunization Guide", url: "https://www.iapindia.org/iap-guidebook-on-immunization/" });
      links.push({ label: "AIIMS Pediatrics", url: "https://www.aiims.edu/en/departments/clinical/pediatrics.html" });
    } else if (month <= 18) {
      links.push({ label: "CDC: 15 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-15mo.html" });
      links.push({ label: "CDC: 18 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html" });
      links.push({ label: "AAP: Toddler Development", url: "https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx" });
      links.push({ label: "Mayo Clinic: Speech Milestones", url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/language-development/art-20045163" });
      links.push({ label: "RBSK Screening Guidelines", url: "https://nhm.gov.in/index1.php?lang=1&level=4&sublinkid=1190&lid=583" });
      links.push({ label: "UNICEF Parenting Tips", url: "https://www.unicef.org/parenting/" });
    } else if (month <= 24) {
      links.push({ label: "CDC: 2 Year Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html" });
      links.push({ label: "AAP: Toddler Development", url: "https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx" });
      links.push({ label: "WHO Physical Activity Guidelines", url: "https://www.who.int/publications/i/item/9789241550536" });
      links.push({ label: "Zero to Three: Social-Emotional", url: "https://www.zerotothree.org/resource/social-and-emotional-development/" });
      links.push({ label: "IAP Guidelines", url: "https://www.iapindia.org/guidelines/" });
      links.push({ label: "ICDS/ECCE Framework", url: "https://wcd.nic.in/integrated-child-development-services-icds-scheme" });
    } else if (month <= 30) {
      links.push({ label: "CDC: 30 Month Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-30mo.html" });
      links.push({ label: "AAP Bright Futures", url: "https://www.aap.org/en/practice-management/bright-futures/bright-futures-materials-and-tools/bright-futures-guidelines-and-pocket-guide/" });
      links.push({ label: "Zero to Three: Brain Development", url: "https://www.zerotothree.org/resource/brain-development/" });
      links.push({ label: "UNICEF: Nurturing Care", url: "https://nurturing-care.org/" });
      links.push({ label: "Indian Pediatrics Journal", url: "https://www.indianpediatrics.net/" });
    } else {
      links.push({ label: "CDC: 3 Year Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html" });
      links.push({ label: "AAP Bright Futures", url: "https://www.aap.org/en/practice-management/bright-futures/bright-futures-materials-and-tools/bright-futures-guidelines-and-pocket-guide/" });
      links.push({ label: "CDC: Developmental Screening", url: "https://www.cdc.gov/ncbddd/childdevelopment/screening.html" });
      links.push({ label: "Zero to Three: Milestones", url: "https://www.zerotothree.org/resource/your-childs-development-age-based-tips-from-birth-to-36-months/" });
      links.push({ label: "AIIMS Pediatrics", url: "https://www.aiims.edu/en/departments/clinical/pediatrics.html" });
      links.push({ label: "NIMHANS Publications", url: "https://nimhans.ac.in/publications/" });
    }
    return links;
  },
  disclaimer: "This application is for informational and educational purposes only. The developmental milestones presented are based on general guidelines from the medical sources listed. Every child develops at their own pace. Milestone ranges represent averages — earlier or later achievement within the normal range is perfectly healthy. If you have concerns about your child's development, please consult your pediatrician or a developmental specialist. This app is NOT a substitute for professional medical advice, diagnosis, or treatment."
};

export default sources;
