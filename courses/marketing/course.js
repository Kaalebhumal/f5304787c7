/* The Marketing Semester — course map.
   Metadata only; lecture bodies live in lessons/wNN.js and load on demand. */
window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA.marketing = {
  title: "The Marketing Semester",
  subtitle: "A sixteen-week course",

  /* The one question the whole course answers. Every part is a step in it,
     every week a step inside that, every lecture a step inside that. */
  spine: {
    question: "How do you get someone to choose you — again, and again, and profitably?",
    parts: {
      I:   "What is actually happening when someone buys something?",
      II:  "Who is that person, and how do they really decide?",
      III: "Whom should you serve, and what should you stand for?",
      IV:  "Which levers do you actually pull?",
      V:   "How do you know whether any of it worked?",
      VI:  "How do you run it, pay for it, and not do harm?"
    }
  },
  parts: [
    { id: "I",   name: "Foundations",            weeks: [1, 2, 3] },
    { id: "II",  name: "People and markets",     weeks: [4, 5, 6] },
    { id: "III", name: "Strategy",               weeks: [7, 8, 9] },
    { id: "IV",  name: "The mix in practice",    weeks: [10, 11, 12] },
    { id: "V",   name: "Digital and data",       weeks: [13, 14] },
    { id: "VI",  name: "Command",                weeks: [15, 16] }
  ],
  weeks: [
    { n: 1, title: "What marketing actually is", question: "What is marketing, what does it actually consist of, and where is it used?", lessons: [
      { id: "w01l01", title: "The exchange at the centre of everything", blurb: "Marketing is not advertising and not selling. It is the management of exchange — and it is far older than either.", mins: 24 },
      { id: "w01l02", title: "Five orientations, and the one your rival still uses", blurb: "Production, product, selling, marketing, societal: the five default beliefs a firm can hold about its customer.", mins: 23 },
      { id: "w01l03", title: "Needs, wants, demand, value", blurb: "The working vocabulary of the next sixteen weeks, defined precisely enough to argue with.", mins: 22 },
      { id: "w01l04", title: "Marketing myopia", blurb: "Levitt's 1960 argument that industries do not die of competition. They die of how they define themselves.", mins: 24 },
      { id: "w01l05", title: "The mix: 4Ps, 7Ps and the 4Cs", blurb: "The decision surface. What a marketer actually controls, and what the framework hides.", mins: 25 }
    ]},
    { n: 2, title: "Markets and the environment", question: "Where does your market end, and what outside forces move it?", lessons: [
      { id: "w02l01", title: "Drawing the market boundary", blurb: "Market definition silently decides your share, your rivals and your growth rate. Draw it badly and every later number lies.", mins: 24 },
      { id: "w02l02", title: "PESTEL: the forces you do not control", blurb: "Six categories of external change, and how to use them without producing a useless list.", mins: 23 },
      { id: "w02l03", title: "Five Forces: where the profit actually goes", blurb: "Porter's structural question — why some industries are rich and others are a treadmill.", mins: 25 },
      { id: "w02l04", title: "Competitors: who they are and how they will respond", blurb: "Competitive sets, reaction patterns, and the competitor you forgot because they are in another category.", mins: 23 },
      { id: "w02l05", title: "SWOT that survives contact with reality", blurb: "The most abused tool in marketing, and the discipline that makes it worth doing.", mins: 22 }
    ]},
    { n: 3, title: "The consumer mind I", question: "How does a person notice, remember and decide?", lessons: [
      { id: "w03l01", title: "The decision process, and when it does not happen", blurb: "Five stages, three levels of involvement, and the uncomfortable fact that most buying skips the model entirely.", mins: 25 },
      { id: "w03l02", title: "Attention, perception and memory", blurb: "How a message physically gets into a head — selective attention, distortion, retention, and the encoding problem.", mins: 25 },
      { id: "w03l03", title: "Motivation: Maslow, and the misuse of Maslow", blurb: "What the hierarchy of needs says, what it does not say, and how to use motivation research properly.", mins: 23 },
      { id: "w03l04", title: "Attitudes and the attitude–behaviour gap", blurb: "Why people who say they will buy your product do not, and what actually predicts behaviour.", mins: 24 },
      { id: "w03l05", title: "Learning, conditioning and association", blurb: "Classical and operant conditioning, associative networks, and how brands are literally built in memory.", mins: 24 }
    ]},
    { n: 4, title: "The consumer mind II — decisions under real conditions", question: "Why do people not behave the way the models say?", lessons: [
      { id: "w04l01", title: "Heuristics: how people really decide", blurb: "System 1 and System 2, availability, representativeness, and why 'rational consumer' is a modelling convenience.", mins: 25 },
      { id: "w04l02", title: "Prospect theory: losses, anchors and frames", blurb: "Kahneman and Tversky's value function, and the four framing levers you can pull ethically.", mins: 25 },
      { id: "w04l03", title: "Social proof, norms and word of mouth", blurb: "Influence that does not come from you, measured properly — and why most 'viral' strategies are wishes.", mins: 24 },
      { id: "w04l04", title: "Culture, class and reference groups", blurb: "The slow-moving forces that decide what a product means before you say anything about it.", mins: 24 },
      { id: "w04l05", title: "Habit, loyalty and double jeopardy", blurb: "Ehrenberg's empirical laws: what repeat buying really looks like, and why loyalty programmes rarely move it.", mins: 26 }
    ]},
    { n: 5, title: "Business and institutional buying", question: "What changes when the buyer is an organisation rather than a person?", lessons: [
      { id: "w05l01", title: "The buying centre", blurb: "Six roles, one decision. Who initiates, who influences, who decides, who gates, who buys, who uses.", mins: 24 },
      { id: "w05l02", title: "The 95-5 rule and the long buying cycle", blurb: "At any moment almost none of your market is shopping. What that implies for every B2B budget.", mins: 24 },
      { id: "w05l03", title: "Account-based marketing and complex sales", blurb: "When the market is 300 companies, not 3 million people: how the discipline inverts.", mins: 23 },
      { id: "w05l04", title: "Public sector, non-profit and institutional markets", blurb: "Tenders, mandates, donors and constituents — marketing where the buyer is not the beneficiary.", mins: 23 },
      { id: "w05l05", title: "Two journeys compared: a shampoo and a CRM", blurb: "A full worked comparison, end to end, of a low-involvement consumer purchase and a six-figure B2B one.", mins: 25 }
    ]},
    { n: 6, title: "Marketing research", question: "How do you find out what is true, rather than what you hoped?", lessons: [
      { id: "w06l01", title: "Research design: what question are you asking?", blurb: "Exploratory, descriptive, causal. Choosing wrong here wastes the whole budget downstream.", mins: 24 },
      { id: "w06l02", title: "Desk research: the free data and how far to trust it", blurb: "Secondary sources, official statistics, syndicated panels — and the four questions to ask of any number.", mins: 23 },
      { id: "w06l03", title: "Qualitative: interviews, groups and observation", blurb: "How to ask questions that produce insight rather than flattery, and how to read what people do instead of say.", mins: 25 },
      { id: "w06l04", title: "Quantitative: sampling and questionnaire design", blurb: "Sampling frames, sample size, and the question wordings that quietly manufacture the answer you wanted.", mins: 26 },
      { id: "w06l05", title: "Experiments and causality", blurb: "Control groups, randomisation, validity, and why an A/B test is the most honest tool you own.", mins: 25 }
    ]},
    { n: 7, title: "Segmentation, targeting, positioning", question: "Whom do you serve, and how do you want to be recognised?", lessons: [
      { id: "w07l01", title: "Segmentation: bases that work and bases that flatter", blurb: "Demographic, geographic, psychographic, behavioural — and the test a segment must pass to be real.", mins: 25 },
      { id: "w07l02", title: "Targeting: choosing where to fight", blurb: "Evaluating segments on size, growth, fit and defensibility; undifferentiated, differentiated, concentrated, micro.", mins: 24 },
      { id: "w07l03", title: "Positioning and the perceptual map", blurb: "Building a map from real data, finding the empty space, and writing a positioning statement that constrains decisions.", mins: 25 },
      { id: "w07l04", title: "Differentiation versus distinctiveness", blurb: "The central modern argument in marketing: be different, or just be recognisable? Both sides, with the evidence.", mins: 26 },
      { id: "w07l05", title: "Category entry points and mental availability", blurb: "Buying situations as the real segmentation, and what it means to be 'thought of' rather than 'preferred'.", mins: 25 }
    ]},
    { n: 8, title: "Brand", question: "What is a brand, and what is it worth?", lessons: [
      { id: "w08l01", title: "What a brand is worth, and why", blurb: "Brand equity from three directions: the accountant's, the consumer's, and the cash-flow one that matters.", mins: 25 },
      { id: "w08l02", title: "Distinctive brand assets", blurb: "Colours, shapes, characters, sounds. How assets are built, measured on fame and uniqueness, and destroyed.", mins: 24 },
      { id: "w08l03", title: "Brand architecture and portfolios", blurb: "House of brands, branded house, endorsed, hybrid — and the cost of every extra brand you own.", mins: 24 },
      { id: "w08l04", title: "Measuring brand health", blurb: "Awareness, salience, consideration, usage, and the funnel metrics that mislead you.", mins: 24 },
      { id: "w08l05", title: "Extension, rebrand and failure", blurb: "When a brand can stretch, when it snaps, and the anatomy of the famous rebranding disasters.", mins: 25 }
    ]},
    { n: 9, title: "Product, innovation and services", question: "What are you actually selling, and how does it change over time?", lessons: [
      { id: "w09l01", title: "The product as layers", blurb: "Core benefit, actual product, augmented product — and where competition actually happens.", mins: 23 },
      { id: "w09l02", title: "New product development", blurb: "The eight-stage process, the failure rate, and why most of the value is decided in the first two stages.", mins: 25 },
      { id: "w09l03", title: "Diffusion of innovations", blurb: "Rogers' adopter categories, the five attributes that decide adoption speed, and the chasm argument.", mins: 25 },
      { id: "w09l04", title: "The product life cycle: model and myth", blurb: "A useful description and a dangerous prescription. How the PLC becomes a self-fulfilling prophecy.", mins: 23 },
      { id: "w09l05", title: "Services: intangibility and SERVQUAL", blurb: "The four service characteristics, the five gaps, and why service recovery beats service perfection.", mins: 25 }
    ]},
    { n: 10, title: "Price", question: "What should it cost, and what does a discount really cost you?", lessons: [
      { id: "w10l01", title: "What price actually is", blurb: "The only P that captures value rather than creating it. Cost floor, value ceiling, competitive middle.", mins: 24 },
      { id: "w10l02", title: "Elasticity you can actually use", blurb: "Computing and interpreting price elasticity, cross-elasticity, and what a -1.8 means for your P&L.", mins: 26 },
      { id: "w10l03", title: "Pricing strategies", blurb: "Skimming, penetration, EDLP versus high-low, cost-plus, value-based, dynamic, freemium, and good-better-best.", mins: 25 },
      { id: "w10l04", title: "Reference prices and psychological pricing", blurb: "Charm pricing, anchoring, decoys, bundling, partitioning — the evidence, not the folklore.", mins: 25 },
      { id: "w10l05", title: "The arithmetic of a discount", blurb: "Exactly how many extra units a 20 percent discount must sell to break even. Everyone should be able to do this.", mins: 24 }
    ]},
    { n: 11, title: "Place and availability", question: "How does it reach the person who wants it?", lessons: [
      { id: "w11l01", title: "Channels and intermediaries", blurb: "Why middlemen exist, the functions they perform, and channel length as an economic choice.", mins: 24 },
      { id: "w11l02", title: "Physical availability", blurb: "The other half of buying. Distribution as a growth lever rather than a logistics problem.", mins: 24 },
      { id: "w11l03", title: "Retail, e-commerce and omnichannel", blurb: "Retail formats, marketplace economics, the shelf as a medium, and what 'omnichannel' has to mean to be real.", mins: 25 },
      { id: "w11l04", title: "Channel power and conflict", blurb: "Who holds the margin, why, and what happens when a manufacturer starts selling direct.", mins: 24 },
      { id: "w11l05", title: "Where marketing meets operations", blurb: "Lead times, stockouts, forecast error and the bullwhip effect — the ways operations destroys a campaign.", mins: 24 }
    ]},
    { n: 12, title: "Promotion and integrated communications", question: "How do you become known, and does advertising work?", lessons: [
      { id: "w12l01", title: "Integrated marketing communications", blurb: "One voice across every touchpoint: the promotion mix, and why consistency is worth more than cleverness.", mins: 24 },
      { id: "w12l02", title: "How advertising works — the evidence", blurb: "Persuasion, salience, emotion, and the long and short of it. What is actually established and what is folklore.", mins: 26 },
      { id: "w12l03", title: "The brief and the creative idea", blurb: "Writing a brief that produces good work, judging creative without being an art director, and the role of a proposition.", mins: 24 },
      { id: "w12l04", title: "Media planning: reach, frequency, recency", blurb: "Reach over frequency, continuity over bursts, share of voice versus share of market — planning with arithmetic.", mins: 26 },
      { id: "w12l05", title: "PR, earned media and crisis", blurb: "Earning attention you did not buy, sponsorship valuation, and the first 24 hours of a crisis.", mins: 24 }
    ]},
    { n: 13, title: "Digital marketing", question: "What did digital genuinely change?", lessons: [
      { id: "w13l01", title: "What digital actually changed", blurb: "Addressability, measurability, interactivity — and the three things it did not change at all.", mins: 24 },
      { id: "w13l02", title: "Search: organic and paid", blurb: "How ranking works, keyword intent, the auction, quality score, and where search fits in a real funnel.", mins: 26 },
      { id: "w13l03", title: "Social platforms and creators", blurb: "Feed algorithms, organic reach decay, creator economics, and how to brief someone you do not control.", mins: 25 },
      { id: "w13l04", title: "Content, email and CRM", blurb: "Owned media that compounds, lifecycle messaging, deliverability, and segmentation that earns its keep.", mins: 25 },
      { id: "w13l05", title: "Performance advertising mechanics", blurb: "Auctions, bidding, targeting signals, creative testing at scale, and the privacy changes that broke old playbooks.", mins: 26 }
    ]},
    { n: 14, title: "Measurement and analytics", question: "How do you know it worked, and can you prove it?", lessons: [
      { id: "w14l01", title: "Metrics that matter", blurb: "Building a metric tree from cash to click, and identifying the vanity metrics that survive because they flatter.", mins: 25 },
      { id: "w14l02", title: "CAC, LTV and payback", blurb: "Unit economics done properly: contribution margin, cohort retention, discounting, and the LTV:CAC fallacy.", mins: 27 },
      { id: "w14l03", title: "Attribution, MMM and incrementality", blurb: "Three fundamentally different ways to answer 'did it work', what each can and cannot tell you.", mins: 26 },
      { id: "w14l04", title: "Reporting honestly", blurb: "Dashboards, baselines, confidence, and the professional obligation not to take credit for the sun rising.", mins: 24 },
      { id: "w14l05", title: "Running a marketing experiment", blurb: "Hypothesis, power, minimum detectable effect, runtime, and reading a result without fooling yourself.", mins: 26 }
    ]},
    { n: 15, title: "Marketing strategy and management", question: "How do you plan it, fund it and defend the budget?", lessons: [
      { id: "w15l01", title: "The marketing plan", blurb: "The document that turns analysis into commitments: structure, logic, and the sections everyone fakes.", mins: 25 },
      { id: "w15l02", title: "Budget: how much, and split how?", blurb: "Setting the total, the 60/40 argument, excess share of voice, and defending a budget to a finance director.", mins: 26 },
      { id: "w15l03", title: "Growth: Ansoff, penetration and loyalty", blurb: "Where growth actually comes from, why penetration beats loyalty arithmetically, and the four Ansoff routes.", mins: 25 },
      { id: "w15l04", title: "International and cross-cultural marketing", blurb: "Entry modes, standardisation versus adaptation, Hofstede used carefully, and the small-market problem.", mins: 25 },
      { id: "w15l05", title: "The marketing organisation and agencies", blurb: "How to structure a team, what agencies are for, how to brief and pay them, and in-housing.", mins: 24 }
    ]},
    { n: 16, title: "Ethics, frontier, and the capstone", question: "Where are the lines, and can you now do the whole job?", lessons: [
      { id: "w16l01", title: "Ethics and regulation", blurb: "Truthfulness, vulnerable audiences, dark patterns, data protection, and the professional lines you do not cross.", mins: 25 },
      { id: "w16l02", title: "Sustainability, purpose and greenwashing", blurb: "When purpose is strategy and when it is decoration; the evidence on whether it sells.", mins: 24 },
      { id: "w16l03", title: "AI in marketing", blurb: "What genuinely changes — production cost, personalisation, research, search behaviour — and what does not change at all.", mins: 25 },
      { id: "w16l04", title: "Capstone: a complete marketing plan", blurb: "You write a full plan for a real business. Brief, structure, worked example, and a rubric to mark yourself against.", mins: 30 },
      { id: "w16l05", title: "Final examination", blurb: "Sixty questions across the whole course, plus where to read next and how to keep the knowledge alive.", mins: 30 }
    ]}
  ]
};
