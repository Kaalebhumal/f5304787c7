/* Week 1 — What marketing actually is */
window.LESSONS = window.LESSONS || {};
window.LESSONS['marketing.w01'] = {

/* ============================================================
   1.1  The exchange at the centre of everything
   ============================================================ */
"w01l01": {
  standfirst: "Before any theory: what marketing actually **is**, what it is **made of**, and **where** it is used — which turns out to include a hospital, a political campaign and a government trying to make you stop doing something.",
  thread: {
    from: "Nothing. This is where the course begins.",
    adds: "A working definition, the six activities the job is made of, and the range of places it is used.",
    toward: "Everything. The six activities in section two are the skeleton of all sixteen weeks."
  },
  objectives: [
    "Define marketing in one sentence you could defend to a sceptical accountant.",
    "Name the six activities the job is made of, and say which one advertising belongs to.",
    "Give five organisations that use marketing, only one of which is a normal company.",
    "Explain why marketing is neither advertising nor selling.",
    "Use the five conditions for exchange to diagnose a deal that is not happening.",
    "Identify the customer when the buyer, the payer and the user are three different people."
  ],
  concepts: [
    { id: "def-marketing",  name: "Defining marketing" },
    { id: "six-activities", name: "The six activities" },
    { id: "where-used",     name: "Where marketing is used" },
    { id: "mkt-vs-sell",    name: "Marketing vs selling" },
    { id: "exchange",       name: "Exchange and its conditions" },
    { id: "demand-states",  name: "Managing demand" },
    { id: "cust-roles",     name: "Buyer, payer, user" }
  ],
  vocab: [
    { word: "exchange", plain: "Two people each giving the other something, because each wants what the other has more than what they are giving up.", et: "vahetus" },
    { word: "offering", plain: "Whatever you are putting in front of someone: a product, a service, an idea, an experience.", et: "pakkumine" },
    { word: "demand", plain: "People wanting something AND being able and willing to pay for it.", et: "nõudlus" },
    { word: "discipline", plain: "A field of study and practice with its own methods — like medicine or engineering.", et: "valdkond, distsipliin" },
    { word: "sceptical", plain: "Not easily convinced; wanting proof before believing you.", et: "skeptiline, kahtlev" },
    { word: "stall", plain: "To stop making progress without anyone deciding to stop.", et: "seiskuma, takerduma" },
    { word: "deliberate", plain: "Done on purpose, after thinking about it.", et: "tahtlik, teadlik" },
    { word: "discourage", plain: "To make someone less likely to do something.", et: "pärssima, heidutama" },
    { word: "intermediary", plain: "Someone in the middle between the maker and the buyer — a shop, a distributor, an agent.", et: "vahendaja" },
    { word: "diagnose", plain: "To work out what is actually wrong, the way a doctor does.", et: "diagnoosima" }
  ],
  tools: [
    { kind: "framework", name: "The six activities",
      answers: "What does the marketing job actually consist of?",
      when: "Whenever a plan feels thin. Walk the six and find the one nobody has thought about — it is almost always place or service." },
    { kind: "test", name: "The five conditions for exchange",
      answers: "Why is this deal not happening?",
      when: "A customer will not buy and nobody can say why. Walk the five conditions and exactly one of them will be missing. Four of the five point somewhere other than ‘spend more on advertising’." },
    { kind: "framework", name: "User, buyer, payer",
      answers: "Who do I actually have to convince?",
      when: "Before writing a single word of any campaign. When a campaign fails for reasons nobody can name, the usual cause is that it gave one role another role's argument." }
  ],
  blocks: [
    { t: "h2", text: "What marketing is" },
    { t: "p", text: "Think about the last thing you bought that cost more than a coffee. A pair of shoes, a phone, a ticket. Four things had to be true before you bought it." },
    { t: "ol", items: [
      "**You knew it existed.** Somebody made sure of that.",
      "**You believed it was for someone like you.** Somebody decided who it was for, and made it look and sound that way.",
      "**You could actually get it.** It was in a shop you go to, or a site that delivers to Estonia.",
      "**The price felt about right.** Somebody chose that number, and chose what to compare it with."
    ]},
    { t: "p", text: "All four of those are marketing. Not one of them is an advertisement, although an advertisement may have been involved in the first one." },
    { t: "p", text: "So here is the working definition. Keep it; you will use it all year." },
    { t: "write", items: [
      "**Marketing is the work of making an exchange happen — profitably, repeatedly, and at scale.**",
      "*Profitably* rules out giving things away. *Repeatedly* rules out the one-off trick. *At scale* is what separates marketing from ordinary haggling in a market square."
    ]},
    { t: "p", text: "The official version, from the American Marketing Association, says the same thing in committee language: marketing is the activity and set of processes for *creating, communicating, delivering and exchanging* offerings that have value for customers, clients, partners and society at large." },
    { t: "p", text: "Four verbs, and they are worth separating, because most people only think of the second one." },
    { t: "ul", items: [
      "**Creating** — deciding what to make, for whom, at what quality. This happens *before* the product exists.",
      "**Communicating** — making it known and understood. This is the part everybody thinks is the whole job.",
      "**Delivering** — getting it to the person, at the moment they want it. A product nobody can obtain does not commercially exist.",
      "**Exchanging** — agreeing the terms, mostly price, and completing the trade."
    ]},

    { t: "h2", text: "What the job is made of" },
    { t: "p", text: "That is the definition. Now the concrete version: if you did this job, what would actually be on your desk?" },
    { t: "p", text: "Six activities. Every marketing task you will meet in sixteen weeks belongs to one of them, and this list is the skeleton of the whole course." },
    { t: "table",
      head: ["Activity", "The question it answers", "What you would actually be doing"],
      rows: [
        ["**Research**", "Who are they and what do they want?", "Surveys, interviews, watching people shop, reading sales data, running tests"],
        ["**Product**", "What should we offer?", "Deciding features, quality, range, packaging, name, warranty, what to stop making"],
        ["**Price**", "What should it cost?", "Setting the price, discounts, payment terms, what to charge extra for"],
        ["**Place**", "How does it reach them?", "Choosing shops, distributors, a website, delivery, how much stock sits where"],
        ["**Promotion**", "How do they find out?", "Advertising, PR, social, email, sales staff, events, the words on the box"],
        ["**Service**", "What happens after?", "Support, returns, complaints, repairs, whether they come back"]
      ],
      say: "Six activities. Research asks who they are and what they want. Product asks what we should offer. Price asks what it should cost. Place asks how it reaches them. Promotion asks how they find out. Service asks what happens afterwards.",
      cap: "Copy this table into your notebook now. When a marketing plan feels thin, walk these six and find the one nobody has thought about. It is almost always **place** or **service**."
    },
    { t: "p", text: "Notice where advertising sits. It is one item inside **promotion**, which is one of six activities. So the person who thinks marketing means advertising is working with roughly a thirtieth of the subject — and, as we will see, not the important thirtieth." },

    { t: "fig", title: "Where advertising actually sits", sketch: true,
      say: "The marketing function spans six activities: research, product, price, place, promotion and service. Promotion opens into five tools: advertising, public relations, sales promotion, personal selling and direct marketing. Advertising is one tool inside one activity.",
      cap: "This shows **scope, not proportion**. The boxes are equal because the real sizes vary enormously by industry — a pharmaceutical company spends most of its effort on the left, a chocolate brand on the right.",
      svg: '<svg viewBox="0 0 680 246" role="img" aria-label="Diagram showing advertising as one of five promotional tools within one of six marketing activities">' +
        '<text x="20" y="22" fill="var(--ink-3)" font-size="10.5" letter-spacing="1.4">THE SIX ACTIVITIES</text>' +
        '<g font-size="11.5" text-anchor="middle">' +
        '<rect x="20" y="32" width="102" height="42" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="71" y="58" fill="var(--ink-2)">Research</text>' +
        '<rect x="128" y="32" width="102" height="42" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="179" y="58" fill="var(--ink-2)">Product</text>' +
        '<rect x="236" y="32" width="102" height="42" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="287" y="58" fill="var(--ink-2)">Price</text>' +
        '<rect x="344" y="32" width="102" height="42" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="395" y="58" fill="var(--ink-2)">Place</text>' +
        '<rect x="452" y="32" width="102" height="42" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="503" y="58" fill="var(--accent-ink)" font-weight="600">Promotion</text>' +
        '<rect x="560" y="32" width="100" height="42" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="610" y="58" fill="var(--ink-2)">Service</text>' +
        '</g>' +
        '<path d="M503 74 L503 100 M110 100 L610 100" stroke="var(--accent)" stroke-width="1.2" fill="none"/>' +
        '<path d="M110 100 L110 128 M235 100 L235 128 M360 100 L360 128 M485 100 L485 128 M610 100 L610 128" stroke="var(--accent)" stroke-width="1.2" fill="none"/>' +
        '<text x="20" y="122" fill="var(--ink-3)" font-size="10.5" letter-spacing="1.4">INSIDE PROMOTION</text>' +
        '<g font-size="11" text-anchor="middle">' +
        '<rect x="52" y="128" width="116" height="40" rx="4" fill="var(--accent)" stroke="var(--accent)"/><text x="110" y="152" fill="var(--on-accent)" font-weight="600">Advertising</text>' +
        '<rect x="177" y="128" width="116" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="235" y="152" fill="var(--ink-2)">PR</text>' +
        '<rect x="302" y="128" width="116" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="360" y="147" fill="var(--ink-2)">Sales</text><text x="360" y="160" fill="var(--ink-2)">promotion</text>' +
        '<rect x="427" y="128" width="116" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="485" y="147" fill="var(--ink-2)">Personal</text><text x="485" y="160" fill="var(--ink-2)">selling</text>' +
        '<rect x="552" y="128" width="108" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="606" y="152" fill="var(--ink-2)">Direct</text>' +
        '</g>' +
        '<line x1="20" y1="196" x2="660" y2="196" stroke="var(--rule)" stroke-dasharray="3 3"/>' +
        '<text x="20" y="218" fill="var(--ink-3)" font-size="11">One tool, inside one activity, inside the job. Scope — not share of money or effort.</text>' +
        '</svg>' },

    { t: "h2", text: "Where it is used" },
    { t: "p", text: "Here is the part that surprises people, and the reason this is a serious subject rather than a commercial trick." },
    { t: "p", text: "Marketing is used anywhere somebody needs a voluntary exchange to happen. That includes a great many places with no product and no profit." },
    { t: "table",
      head: ["Organisation", "What is exchanged", "Who the “customer” is", "A real marketing decision it must make"],
      rows: [
        ["A bakery", "Bread for money", "The person who walks in", "Whether to open at 06:00 for commuters or 08:00 for families"],
        ["A software firm selling to hospitals", "A system for a contract", "A procurement committee, not a user", "Whether to sell on cost saved or on risk avoided"],
        ["A hospital", "Care for attendance and compliance", "The patient, and the public", "How to get people to actually attend the screening they were invited to"],
        ["A political campaign", "A promise for a vote", "The voter", "Which two issues to talk about, out of twenty it cares about"],
        ["A charity", "A cause for a donation", "The donor, who never receives the benefit", "Whether to show the problem or the solution in its appeal"],
        ["A health ministry", "Nothing — it wants you to stop", "The public", "How to reduce demand for something people enjoy"]
      ],
      say: "A bakery exchanges bread for money. A software firm sells to a procurement committee rather than a user. A hospital needs patients to attend screening. A political campaign exchanges a promise for a vote. A charity asks a donor to pay for a benefit somebody else receives. And a health ministry uses marketing to reduce demand rather than increase it.",
      cap: "Same six activities in every row. What changes is what is exchanged and who the other party is — which is why the discipline transfers between a shop and a ministry without being rewritten."
    },
    { t: "p", text: "Look at the last two rows, because they break the assumption most people carry. In a charity, **the person who pays never receives the benefit** — which makes the argument you must make completely different. And a health ministry running an anti-smoking campaign is doing marketing whose goal is to *reduce* demand. It is usually written by people from advertising agencies, using the same tools, pointed the other way." },
    { t: "p", text: "That last case has a name, and it belongs to a wider idea worth having early: marketing is really the **management of demand**, and demand is not always too low." },
    { t: "table",
      head: ["When demand is…", "The job is to…", "Example"],
      rows: [
        ["Absent — nobody wants it yet", "Connect it to a need they already feel", "A product in a category that does not exist yet"],
        ["Latent — they want it, nothing provides it", "Build the thing", "A route nobody flies; a cure that does not exist"],
        ["Irregular — swings by season or hour", "Move demand into the quiet periods", "A cinema empty on Tuesday, full on Friday"],
        ["Full — matches what you can supply", "Hold quality, watch costs, do not get bored", "A well-run business at capacity"],
        ["Excessive — more than you can serve well", "Reduce it", "A national park being worn out by visitors"],
        ["Harmful — it exists and it hurts people", "Destroy it", "Smoking, speeding, gambling"]
      ],
      say: "When demand is absent, connect the offering to a need people already feel. When it is latent, build the thing. When it is irregular, move demand into the quiet periods. When it is full, hold quality. When it is excessive, reduce it. When it is harmful, destroy it.",
      cap: "Three of these six ask you to *reduce* demand. Any definition of marketing that means “selling more” cannot account for half the table."
    },

    { t: "h2", text: "What marketing is not" },
    { t: "p", text: "Two things get confused with marketing constantly, and being precise about them will make you immediately more useful than most people in the room." },
    { t: "h3", text: "It is not advertising" },
    { t: "p", text: "Advertising is **paid, mediated communication from an identified sponsor**. Every word of that does work: *paid* separates it from press coverage, *mediated* separates it from a salesperson in a room, *identified sponsor* separates it from propaganda. It is one tool, inside promotion, inside the job." },
    { t: "h3", text: "It is not selling" },
    { t: "p", text: "Selling starts with a product you already have and looks for someone to take it. Marketing starts with a person you understand and works backwards to what should be made. **They point in opposite directions in time.**" },
    { t: "quote", text: "The aim of marketing is to make selling superfluous. The aim is to know and understand the customer so well that the product or service fits him and sells itself.", who: "Peter Drucker, 1973" },
    { t: "p", text: "Drucker is overstating for effect — selling never disappears entirely — but the direction of the claim is right, and Theodore Levitt put the same thing more usefully: *selling focuses on the needs of the seller; marketing on the needs of the buyer.* Learn that sentence." },
    { t: "warn", title: "The mistake that defines an amateur", ps: [
      "When somebody says *we need marketing*, ask what they actually mean. Nine times in ten they mean *we need someone to make the posters*.",
      "A firm that believes marketing is the poster department will put marketing at the end of the process — after the product is finished and the price is set — and then wonder why the posters are not working. The posters are not working because the three decisions that mattered were made without a marketer in the room."
    ]},

    { t: "h2", text: "The exchange underneath all of it" },
    { t: "p", text: "Now that you know what the job is and where it is done, here is the single idea that holds it together. Every row of that table was an **exchange**: two parties, each giving the other something, each free to walk away." },
    { t: "p", text: "Philip Kotler sets out five conditions. All five must hold at once, or no exchange happens — and this is your first real tool, because when a deal is not happening you can walk the list and find which one is missing." },
    { t: "ol", items: [
      "There are **at least two parties**.",
      "Each has **something of value** to the other.",
      "Each can **communicate and deliver**.",
      "Each is **free to accept or reject**.",
      "Each **believes it is appropriate** to deal with the other."
    ]},
    { t: "p", text: "Read as a list it looks obvious. Its value is that it is a **diagnostic** — it turns *we don't know why they won't buy* into a specific answer." },
    { t: "case", title: "A stalled deal, diagnosed in five questions",
      ps: [
        "A two-person software company sells appointment scheduling to dental practices. The product is good. The price is fair. Sales have flatlined for a year. The founder's instinct is to spend more on advertising. Walk the five conditions instead.",
        "**Two parties?** Yes — but *who*? The practice owner signs; the receptionist uses it. If everything the company writes speaks to the receptionist, the person with the chequebook never hears it. Condition one is about identifying the *right* second party.",
        "**Something of value each way?** The tool saves about four receptionist-hours a week. Whether that is valuable depends on whether the owner *experiences* those hours as a cost. If the receptionist is salaried and not overloaded, the saving is real and still worth nothing to the buyer.",
        "**Able to communicate and deliver?** They can deliver. Can they communicate? Dentists do not read software blogs. If every message is published where the audience is not, the condition fails on media, not on argument.",
        "**Free to accept or reject?** Usually — unless the practice is locked into a three-year contract with an existing supplier. Then nothing will work until month thirty-four, and the correct action is to *time* the approach, not to shout louder.",
        "**Believes it is appropriate to deal?** A two-person company asking a clinic to trust it with patient appointment data is asking for trust it has not earned. This is the condition that most often fails silently, and the fix is not advertising — it is references, a certification, a free trial, an insurer's endorsement.",
        "**Four of those five diagnoses lead somewhere other than *buy more advertising*.** That is what a diagnostic tool is for."
      ]},

    { t: "h2", text: "Who, exactly, is the customer?" },
    { t: "p", text: "One more tool, and it is the one you will reach for most often. Three roles come apart, and they are frequently three different people." },
    { t: "ul", items: [
      "The **user** — who gets the benefit.",
      "The **buyer** — who chooses and does the buying.",
      "The **payer** — whose money leaves the account."
    ]},
    { t: "p", text: "A children's cereal has a user of six and a buyer-payer of thirty-five — which is why the box has a cartoon on the front and a vitamin table on the side. One face argues, the other justifies. A hospital drug has a user who is ill, a buyer who is a doctor and a payer who is a state or an insurer; all three must be convinced, in three different languages. A workplace pension has a user who is an employee, a buyer who is an HR committee and a payer who is the employer." },
    { t: "p", text: "**Ask the three questions — who uses, who chooses, who pays — before writing a single word of any campaign.** When a campaign fails and nobody can say why, the most common cause is that it gave one role another role's argument." },

    { t: "write", items: [
      "Marketing = making an exchange happen, profitably, repeatedly, at scale.",
      "The six activities: research, product, price, place, promotion, service. Copy the whole table.",
      "Advertising is one tool inside promotion inside the job.",
      "Selling points forwards from the product; marketing points backwards from the person.",
      "The five conditions for exchange, in order. This is a diagnostic, not a list.",
      "User, buyer, payer — three questions before any campaign."
    ]},

    { t: "h2", text: "What you can do now" },
    { t: "p", text: "You can define marketing without saying the word advertising. You can name the six activities the job is made of and say which one a given task belongs to. You can point to five organisations that use it, only one of which is a normal company. And you have two working tools: a five-question diagnostic for a deal that has stalled, and a three-role test for who you actually have to convince." },
    { t: "p", text: "Next lecture: the five beliefs a company can hold about its customers, why most companies hold an out-of-date one without knowing, and how to tell which one you are dealing with from the outside in about ten minutes." }
  ],
  exercises: [
    { task: "**Walk the six activities.** For the company you are watching, write one line under each of the six: research, product, price, place, promotion, service. Everything you need is visible from outside — what they sell, what they charge, where you can get it, how they tell you, what happens when something goes wrong. Mark the ones you cannot answer.",
      hint: "The blanks are the point, and they are not failures. Research is nearly always invisible from outside; service you can test by asking them a question and timing the reply." },
    { task: "**Find the exchange.** Write down exactly what your company gives, and exactly what it gets back. Then write what the customer gives up *besides* money — time, effort, risk, the discomfort of admitting they need it.",
      hint: "If the only thing on the second list is money, look harder. The non-money costs are usually where the business is actually being lost, and they are the cheapest thing to fix." },
    { task: "**Diagnose a deal that did not happen — your own.** Think of something you nearly bought in the last month and did not. A subscription, a course, an appointment, a product in a shop. Walk all five conditions and name the one that actually stopped you. Write one sentence on what the seller could have changed.",
      hint: "Be honest rather than flattering to yourself. \u2018Too expensive\u2019 is usually condition two in disguise — the value was not clear enough to justify the price — and sometimes it is condition five: you did not quite trust them." },
    { task: "**Who uses, who chooses, who pays?** For your company, name all three. If they are the same person, find a situation where they would not be — a gift, a company account, a parent paying for a child, an employer paying for staff.",
      hint: "Then write the single sentence you would say to each of the three. If the three sentences are the same, one of them is wrong." },
    { task: "**Find marketing where you did not expect it.** Find one real campaign by a government, hospital or charity — a poster, a letter, a broadcast. Write which of the six demand states it is trying to move, and in which direction.",
      hint: "Estonian public-health and road-safety campaigns are the easiest to find and are usually trying to destroy demand, not create it." }
  ],
  reading: [
    { author: "Philip Kotler and Kevin Lane Keller", work: "Marketing Management", where: "Pearson", year: 2016,
      note: "The standard textbook of the field. Chapter 1 covers this lecture. You do not need to own it — any edition from the last fifteen years will do, and libraries have it." },
    { author: "Theodore Levitt", work: "Marketing Myopia", where: "Harvard Business Review", year: 1960,
      note: "Short, and you will meet it properly in lecture four. The line about selling versus marketing is in here." },
    { author: "Peter F. Drucker", work: "Management: Tasks, Responsibilities, Practices", where: "Harper & Row", year: 1973,
      note: "Where the line about making selling superfluous comes from. Drucker's chapter on the purpose of a business is worth an hour even if you read nothing else." }
  ],
  glossary: [
    { term: "Marketing", def: "The work of making an exchange happen — profitably, repeatedly and at scale." },
    { term: "The six activities", def: "Research, product, price, place, promotion, service. Every marketing task belongs to one of them." },
    { term: "Exchange", def: "Value moving in both directions between two parties, each free to refuse. The unit concept of the whole discipline." },
    { term: "Advertising", def: "Paid, mediated communication from an identified sponsor. One tool, inside promotion, inside the job." },
    { term: "Selling", def: "Starting from a product you have and finding someone to take it — the opposite direction in time from marketing." },
    { term: "Demand management", def: "The view of marketing as bringing actual demand into line with desired demand, which sometimes means reducing it." },
    { term: "Demarketing", def: "Deliberately discouraging demand, usually because serving it damages quality, the asset or the public." },
    { term: "Countermarketing", def: "Working to destroy demand for something judged harmful — public health campaigns being the standard case." },
    { term: "User / buyer / payer", def: "The three roles in a purchase, often three different people needing three different arguments." },
    { term: "Value proposition", def: "The specific reason this offering is worth more to this person than what they give up for it." }
  ],
  quiz: [
    { id: "w01l01q12", concept: "six-activities", type: "mcq",
      q: "A company decides to stop selling through independent shops and sell only from its own website. Which of the six activities is that decision?",
      options: ["Product", "Promotion", "Place", "Service"],
      answer: 2,
      explain: "Place — channel choice. It will certainly be *announced* through promotion, but announcing a decision and making it are different activities, and confusing them is how the promotions team ends up setting distribution strategy. Being able to put a decision in the right box quickly is most of the skill in a first year on the job." },

    { id: "w01l01q13", concept: "six-activities", type: "short",
      q: "A marketing plan you are handed covers the product, the price and the advertising in detail. Which two of the six activities are most likely missing, and why does it matter?",
      must: [{"point": "place is missing", "any": ["place", "distribut", "channel", "availab"]}, {"point": "service is missing", "any": ["service", "after the sale", "support", "return", "complaint"]}, {"point": "the gaps are invisible because the plan looks complete", "any": ["invisible", "looks complete", "nothing announces", "does not show", "seems finished", "no sign"]}],
      answer: "Almost certainly **place** and **service**. Place is missing because it feels like logistics rather than marketing, so it gets delegated to operations — but if the customer cannot easily obtain the thing, every other decision in the plan is wasted; availability is a growth lever, not a back-office matter. Service is missing because it happens after the sale, when the plan is considered finished — but it decides whether the customer ever returns, and repeat purchase is where the profit in most businesses actually sits. The reason it matters is that both gaps are invisible in the plan itself: the document looks complete and detailed, and nothing in it announces the two quarters of the job that were never considered.",
      explain: "This is the practical use of the six-activity list: it is a completeness check. Walk it against any plan and the blanks are the finding." },

    { id: "w01l01q14", concept: "where-used", type: "multi",
      q: "Which of these are doing marketing, in the sense used in this lecture? Select all that apply.",
      options: [
        "A health ministry campaigning to reduce smoking",
        "A charity asking for donations to help people the donor will never meet",
        "A hospital trying to get invited patients to actually attend screening",
        "A city raising a tourist tax to reduce visitor numbers in the old town",
        "A company deciding which factory to close"
      ],
      answer: [0, 1, 2, 3],
      explain: "All four of the first are marketing: each needs a *voluntary* exchange from someone who is free to refuse, and each uses the same six activities. Two of them are trying to *reduce* demand, which is why a definition of marketing as “selling more” fails. Closing a factory is an operations and finance decision — it becomes a marketing question only where it changes what customers can get." },

    { id: "w01l01q15", concept: "where-used", type: "mcq",
      q: "Why does a charity appeal need a different argument from a shop's advertisement, even when both are asking for money?",
      options: [
        "Charities have smaller budgets, so the message must be simpler",
        "The person who pays never receives the benefit, so the exchange offers something other than a product",
        "Donations are voluntary whereas purchases are not",
        "Charities are not allowed to use persuasion"
      ],
      answer: 1,
      explain: "The structure of the exchange is different. In a shop the payer is normally the user: money out, benefit back to the same person. In a charity the benefit goes to a third party, so what the donor receives is something else entirely — a sense of having acted, an identity, relief from discomfort, membership of a cause. Getting that wrong is why so many appeals describe the problem in detail and never say what the donor actually gets in return." },

    { id: "w01l01q1", concept: "def-marketing", type: "mcq",
      q: "Which of these is the best one-sentence working definition of marketing?",
      options: [
        "The activity of persuading people to buy things they would not otherwise want.",
        "The work of making exchange happen — profitably, repeatedly, and at scale.",
        "The design and placement of paid communications that build a brand.",
        "The department responsible for the company’s public image."
      ],
      answer: 1,
      explain: "Persuasion is one tactic, not the definition, and the framing in option A is the caricature you should be able to rebut. Option C defines advertising. Option D defines public relations, and badly. The working definition keeps three constraints — profitably (rules out giving things away), repeatedly (rules out the one-off con) and at scale (separates marketing from haggling)." },

    { id: "w01l01q2", concept: "exchange", type: "multi",
      q: "A start-up cannot get hospitals to adopt its patient-monitoring device. Which of Kotler’s five conditions are plausibly failing, given that hospitals agree the device works and the price is affordable? Select all that apply.",
      options: [
        "Each party has something of value to the other",
        "Each party is capable of communication and delivery",
        "Each party is free to accept or reject",
        "Each party believes it is appropriate to deal with the other"
      ],
      answer: [1, 2, 3],
      explain: "The stem tells you the device works and is affordable, so value exists — condition two is satisfied. The other three are all live: the firm may have no route to reach clinical decision-makers (communication), the hospital may be locked into a procurement framework or an existing contract (freedom to accept), and an unknown start-up asking for access to patient data faces a trust problem (appropriateness). Trust is the condition that most often fails silently, and no amount of advertising fixes it — references, certification and pilots do." },

    { id: "w01l01q3", concept: "demand-states", type: "mcq",
      q: "A national park is being degraded by visitor numbers far beyond what the trails can absorb. What is the demand state and the corresponding marketing task?",
      options: [
        "Irregular demand → synchromarketing",
        "Full demand → maintenance marketing",
        "Overfull demand → demarketing",
        "Unwholesome demand → countermarketing"
      ],
      answer: 2,
      explain: "Overfull demand is demand beyond what can be served without damage, and the task is demarketing: raise price, ration entry, redirect visitors, discourage peak visits. Be careful with the neighbours. If the problem were purely that everyone comes in July and nobody in May, that would be irregular demand and synchromarketing. Countermarketing is reserved for demand judged socially harmful in itself — walking in a forest is not." },

    { id: "w01l01q4", concept: "mkt-vs-sell", type: "mcq",
      q: "Drucker wrote that the aim of marketing is to make selling superfluous. What is the substantive claim underneath the rhetoric?",
      options: [
        "Sales teams are an unnecessary cost that good advertising can replace.",
        "Marketing works backwards from an understood customer, whereas selling works forwards from an existing product.",
        "Products that are genuinely superior do not need to be promoted.",
        "Personal selling is less effective than mass communication."
      ],
      answer: 1,
      explain: "The claim is about the direction of reasoning in time, not about headcount or media. Selling begins with the product the firm already has and searches for someone to take it; marketing begins with a person the firm understands and reasons back to what should be made. Option C is the engineer’s fallacy — better mousetraps do not sell themselves, as week nine will show in detail." },

    { id: "w01l01q5", concept: "cust-roles", type: "short",
      q: "A company sells software that schedules shifts for hospital nurses. Identify the user, the buyer and the payer, and state one way the argument you make to each must differ.",
      must: [{"point": "user = the nurse who operates it", "any": ["nurse", "ward", "staff who use", "shift manager", "user is"]}, {"point": "buyer = the director or committee that selects", "any": ["director", "committee", "manager who", "procurement", "chooses", "selects"]}, {"point": "payer = the hospital or health authority budget", "any": ["hospital", "authority", "budget", "trust", "employer pays", "health service"]}, {"point": "the arguments differ per role", "any": ["different argument", "differ", "not the same argument", "each needs", "three different"]}],
      answer: "The **user** is the ward nurse or shift manager who operates it daily; the **buyer** is typically a nursing director or IT committee that evaluates and selects; the **payer** is the hospital or health authority whose budget is charged. The arguments differ in currency: the user cares about time saved and fewer arguments over rotas; the buyer cares about implementation risk, staff resistance and integration with existing systems; the payer cares about cost per bed, overtime reduction and contract terms. A pitch that offers the payer’s cost argument to a nurse will fall flat, and a pitch that offers the nurse’s convenience argument to a finance committee will not get funded.",
      explain: "The three-role split is the most reliably useful idea in the lecture. Whenever a campaign fails for reasons nobody can name, check first whether it addressed one role with another role’s argument." },

    { id: "w01l01q6", concept: "demand-states", type: "mcq",
      q: "A ski resort is full at half-term and nearly empty in the first week of December. Which task applies?",
      options: ["Remarketing", "Synchromarketing", "Demarketing", "Stimulational marketing"],
      answer: 1,
      explain: "Irregular demand across time, with fixed capacity, is the textbook case for synchromarketing: move demand into the trough with price and promotion rather than trying to add demand at the peak, where there is no room for it. Remarketing would be the answer if skiing itself were in structural decline; demarketing if the mountain were being damaged by the half-term crowd." },

    { id: "w01l01q7", concept: "exchange", type: "mcq",
      q: "Which of the following is NOT one of Kotler’s five conditions for exchange?",
      options: [
        "Each party believes it is appropriate to deal with the other",
        "Each party is free to accept or reject the offer",
        "Each party expects to profit from the exchange in money terms",
        "Each party is capable of communication and delivery"
      ],
      answer: 2,
      explain: "Money is not required and neither is profit. A charitable donation, a vote, a blood donation and a barter of eggs for firewood are all exchanges. What is required is that each party holds something the other values — value, not currency. This is precisely what lets the same discipline cover political campaigns, non-profits and public health." },

    { id: "w01l01q8", concept: "mkt-vs-sell", type: "multi",
      q: "Which of these fall inside the promotion mix as defined in the lecture? Select all that apply.",
      options: ["Advertising", "Pricing strategy", "Public relations", "Personal selling", "Distribution agreements"],
      answer: [0, 2, 3],
      explain: "The promotion mix is advertising, public relations, sales promotion, personal selling and direct marketing. Pricing is its own P and distribution is place. The point of the figure is that advertising is one tool inside one of six activities — so the person who equates marketing with advertising is working with roughly a thirtieth of the subject." },

    { id: "w01l01q9", concept: "def-marketing", type: "short",
      q: "Explain, in your own words, why the phrase “and society at large” was added to the AMA definition of marketing, and give one consequence of taking it seriously.",
      must: [{"point": "it widens who counts beyond buyer and seller", "any": ["third part", "society", "not party", "outside the transaction", "wider", "everyone else"]}, {"point": "effects on non-buyers count (pollution, addiction, misleading)", "any": ["pollution", "addiction", "harm", "externalit", "misleading", "non-buyer"]}, {"point": "profitable and satisfying can still be bad marketing", "any": ["still bad", "even if profitable", "can be a failure", "satisfied customer", "not enough"]}],
      answer: "It widens the set of parties whose value counts beyond the buyer and the selling firm, so that effects on people who are not party to the transaction — pollution, addiction, misleading claims, congestion — are treated as part of the marketer’s responsibility rather than as someone else’s externality. A consequence of taking it seriously is that a marketing decision can be judged a failure even when it is profitable and the customer is satisfied: a highly effective campaign for a product that harms non-buyers is, on this definition, bad marketing and not merely unethical marketing.",
      explain: "This clause is the bridge to week sixteen. It is also the clause that lets you argue that countermarketing and demarketing are core marketing activity rather than an awkward exception." },

    { id: "w01l01q10", concept: "demand-states", type: "mcq",
      q: "A strong desire exists for something no product currently delivers — say, a genuinely silent aircraft cabin. What state is this, and what is the task?",
      options: [
        "No demand → stimulational marketing",
        "Latent demand → developmental marketing",
        "Negative demand → conversional marketing",
        "Declining demand → remarketing"
      ],
      answer: 1,
      explain: "Latent demand is a want that exists in people’s heads with nothing on the market to satisfy it, and the task is developmental — build the thing. This is the state new categories come from, which is why identifying latent demand is the most valuable single output of marketing research. Contrast with no demand, where the want itself does not exist yet and must be connected to something the person already cares about." },

    { id: "w01l01q11", concept: "cust-roles", type: "mcq",
      q: "A children’s cereal box carries a cartoon character on the front and a vitamin table on the side panel. What is the cleanest explanation?",
      options: [
        "Regulators require nutritional information, and the cartoon is decoration.",
        "The front persuades the user to ask; the side arms the payer with a justification.",
        "The cartoon builds brand equity while the vitamins build credibility with retailers.",
        "Children respond to images and adults respond to text."
      ],
      answer: 1,
      explain: "It is a two-audience package. The child is the user who applies pressure; the parent is the buyer and payer who needs a defensible reason to yield. Option A is true about the regulation but does not explain the design choice; option D is a shallow version of the right answer that misses the *roles* — which is the idea being tested." }
  ]
},

/* ============================================================
   1.2  Five orientations
   ============================================================ */
"w01l02": {
  standfirst: "Every firm carries an unspoken belief about why people buy from it. That belief was usually formed decades ago, it is rarely written down, and it silently decides what the firm does when sales fall. There are five of them, and you can diagnose a company’s from the outside in about ten minutes.",
  objectives: [
    "Name the five marketing orientations in the order they historically emerged, and state the core belief of each.",
    "Diagnose a firm’s orientation from observable evidence — what it measures, who is promoted, what it does when sales fall.",
    "Explain why the selling orientation persists despite being widely taught as obsolete.",
    "Distinguish the marketing concept from the societal marketing concept, and say what the latter adds.",
    "Argue the case *against* being purely customer-led."
  ],
  concepts: [
    { id: "orientations",  name: "The five orientations" },
    { id: "prod-vs-mkt",   name: "Production and product orientation" },
    { id: "selling-orient",name: "The selling orientation" },
    { id: "mkt-concept",   name: "The marketing concept" },
    { id: "societal",      name: "Societal marketing" }
  ],
  blocks: [
    { t: "h2", text: "The question every firm has already answered" },
    { t: "p", text: "Ask a company why its customers buy from it and you will get a prepared answer. Watch what the company *does* when sales fall fifteen percent, and you will get the real one." },
    { t: "p", text: "Some firms cut price. Some add features. Some hire more salespeople. Some commission research. Those four responses are not four tactics drawn from a common menu; they are four different theories of the customer, and each is so deeply embedded that the people acting on it usually cannot articulate it. This lecture gives you the five theories, in the order they appeared, so that you can name what you are looking at." },
    { t: "p", text: "A warning before we start. Textbooks present these as a march of progress, each stage superseding the last. That is tidy and partly false. All five are alive today, all five are correct under some conditions, and the interesting question is never *which era is this firm stuck in* but *does this firm’s orientation match its actual market*." },

    { t: "fig", title: "The five orientations and their core belief", sketch: true,
      say: "Five stages across the page. Production orientation believes customers want availability and low price. Product orientation believes customers want the best quality and features. Selling orientation believes customers must be persuaded. Marketing orientation believes the customer's need comes first. Societal orientation adds the long-run welfare of the customer and of society.",
      cap: "The dates are indicative of when each *dominated* Western industry, not of when it began or ended. All five are in use somewhere today, and the arrow is not a value judgement.",
      svg: '<svg viewBox="0 0 680 300" role="img" aria-label="Five marketing orientations in historical sequence with their core beliefs">' +
        '<line x1="30" y1="48" x2="650" y2="48" stroke="var(--rule-strong)" stroke-width="1"/>' +
        '<g font-size="11" text-anchor="middle">' +
        '<circle cx="82" cy="48" r="6" fill="var(--series-1)"/><text x="82" y="34" fill="var(--ink-3)" font-size="10">to ~1920s</text>' +
        '<circle cx="216" cy="48" r="6" fill="var(--series-1)"/><text x="216" y="34" fill="var(--ink-3)" font-size="10">1920s–30s</text>' +
        '<circle cx="350" cy="48" r="6" fill="var(--series-1)"/><text x="350" y="34" fill="var(--ink-3)" font-size="10">1930s–50s</text>' +
        '<circle cx="484" cy="48" r="6" fill="var(--series-1)"/><text x="484" y="34" fill="var(--ink-3)" font-size="10">1950s–90s</text>' +
        '<circle cx="618" cy="48" r="6" fill="var(--series-1)"/><text x="618" y="34" fill="var(--ink-3)" font-size="10">1970s–</text>' +
        '</g>' +
        '<g font-size="12.5" font-weight="600" text-anchor="middle" fill="var(--ink)">' +
        '<text x="82" y="80">Production</text><text x="216" y="80">Product</text><text x="350" y="80">Selling</text>' +
        '<text x="484" y="80">Marketing</text><text x="618" y="80">Societal</text>' +
        '</g>' +
        '<g font-size="10.5" text-anchor="middle" fill="var(--ink-2)">' +
        '<rect x="24" y="96" width="116" height="92" rx="4" fill="var(--surface-2)" stroke="var(--rule)"/>' +
        '<text x="82" y="118">“They want it</text><text x="82" y="133">available</text><text x="82" y="148">and cheap.”</text>' +
        '<text x="82" y="172" fill="var(--ink-3)" font-size="10">Scale, cost,</text><text x="82" y="184" fill="var(--ink-3)" font-size="10">distribution</text>' +
        '<rect x="158" y="96" width="116" height="92" rx="4" fill="var(--surface-2)" stroke="var(--rule)"/>' +
        '<text x="216" y="118">“They want</text><text x="216" y="133">the best made</text><text x="216" y="148">thing.”</text>' +
        '<text x="216" y="172" fill="var(--ink-3)" font-size="10">Quality,</text><text x="216" y="184" fill="var(--ink-3)" font-size="10">features, R and D</text>' +
        '<rect x="292" y="96" width="116" height="92" rx="4" fill="var(--surface-2)" stroke="var(--rule)"/>' +
        '<text x="350" y="118">“They won’t buy</text><text x="350" y="133">unless we</text><text x="350" y="148">push.”</text>' +
        '<text x="350" y="172" fill="var(--ink-3)" font-size="10">Sales force,</text><text x="350" y="184" fill="var(--ink-3)" font-size="10">promotion</text>' +
        '<rect x="426" y="96" width="116" height="92" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"/>' +
        '<text x="484" y="118" fill="var(--accent-ink)">“What do they</text><text x="484" y="133" fill="var(--accent-ink)">actually</text><text x="484" y="148" fill="var(--accent-ink)">need?”</text>' +
        '<text x="484" y="172" fill="var(--ink-3)" font-size="10">Research,</text><text x="484" y="184" fill="var(--ink-3)" font-size="10">segmentation</text>' +
        '<rect x="560" y="96" width="116" height="92" rx="4" fill="var(--gold-soft)" stroke="var(--gold)" stroke-width="1.4"/>' +
        '<text x="618" y="118" fill="var(--gold-ink)">“…and what</text><text x="618" y="133" fill="var(--gold-ink)">does it do to</text><text x="618" y="148" fill="var(--gold-ink)">everyone else?”</text>' +
        '<text x="618" y="172" fill="var(--ink-3)" font-size="10">Long-run</text><text x="618" y="184" fill="var(--ink-3)" font-size="10">welfare</text>' +
        '</g>' +
        '<line x1="24" y1="212" x2="656" y2="212" stroke="var(--rule)" stroke-dasharray="3 3"/>' +
        '<text x="24" y="234" fill="var(--ink-3)" font-size="11">Inward-looking: the firm starts from what it can make.</text>' +
        '<text x="24" y="252" fill="var(--ink-3)" font-size="11">Outward-looking: the firm starts from what someone needs.</text>' +
        '<path d="M330 228 L330 244" stroke="var(--rule-strong)" stroke-width="1"/>' +
        '<text x="340" y="272" fill="var(--ink-3)" font-size="11">The break falls between selling and marketing — that is the only boundary that matters.</text>' +
        '</svg>' },

    { t: "h2", text: "Production orientation" },
    { t: "p", text: "The belief: *customers want products that are available and affordable, so the job is to make more of them, more cheaply, and get them everywhere.*" },
    { t: "p", text: "This is the oldest orientation and it is the correct one under two conditions: when demand exceeds supply, and when the product is close to a commodity so that cost is genuinely the battleground. Henry Ford’s remark that the customer could have any colour so long as it was black is the standard illustration, and it is usually told as a joke about arrogance. It was not arrogance. Black enamel dried fastest, drying time set the line speed, line speed set the cost, and the cost was what put a car within reach of a farmer. For roughly fifteen years it was exactly the right answer." },
    { t: "p", text: "It stopped being the right answer the moment supply caught demand and General Motors offered colours. That is the pattern: production orientation is not a mistake, it is a correct strategy with an expiry date that firms do not notice passing." },
    { t: "p", text: "How to spot it today: the firm's key metrics are unit cost, capacity utilisation and throughput. The most powerful person outside the chief executive runs operations. When sales fall, the instinct is to cut price, because price is the lever the firm understands." },

    { t: "h2", text: "Product orientation" },
    { t: "p", text: "The belief: *customers want the best-made, highest-performing, most feature-rich product, so the job is continuous improvement.*" },
    { t: "p", text: "This one is seductive because it is the orientation of engineers, craftsmen and anybody who takes pride in their work — which is to say, of the people you would most like to employ. It produces genuinely excellent objects. It also produces the single most common failure mode in business: a superb product that nobody wants, priced for a level of quality nobody asked for." },
    { t: "warn", title: "The better mousetrap fallacy", ps: [
      "The proverb says that if you build a better mousetrap, the world will beat a path to your door. The proverb is wrong, and it is wrong in an instructive way.",
      "The world does not know your door exists. The world is not convinced your mousetrap is better, because it cannot evaluate mousetraps. The world has a mousetrap already and the switching cost is not zero. And a large part of the world does not want a better mousetrap at all — it wants no mice, which might be a cat, a sealed floor, or a landlord’s problem.",
      "Every one of those four objections is a marketing problem that superior engineering does not touch. This is why product-oriented firms so often have an excellent product and a bewildered sales meeting."
    ]},
    { t: "p", text: "How to spot it: the firm talks about specifications where customers talk about outcomes. Engineering or design holds the most internal prestige. When sales fall, the instinct is to add features, and the product roadmap grows faster than the customer's ability to use it. Watch also for the phrase *we just need to educate the market*, which is nearly always the sound of a product-oriented firm blaming the customer for its own positioning failure." },

    { t: "h2", text: "Selling orientation" },
    { t: "p", text: "The belief: *left alone, customers will not buy enough, so the job is aggressive promotion and a strong sales effort.*" },
    { t: "p", text: "This orientation emerged when mass production finally outran natural demand, and it is characterised by a particular asymmetry: the firm's effort goes into moving the stock it has already made, rather than into deciding what to make. Levitt's phrase is the sharpest summary ever written: **selling focuses on the needs of the seller; marketing on the needs of the buyer.**" },
    { t: "p", text: "Textbooks treat the selling orientation as an embarrassing historical stage. It is nothing of the sort — it is thriving, for four unglamorous reasons." },
    { t: "ol", items: [
      "**Unsought goods genuinely need it.** Nobody wakes up wanting life insurance, a burial plot, or a smoke alarm. For products people would never seek out, an active selling effort is not a symptom of bad marketing; it is the correct channel.",
      "**Overcapacity forces it.** A firm with a factory running at forty percent has a fixed cost problem this quarter, and the honest long-term answer — make something else — does not pay the wages in March.",
      "**Sales effort is measurable and fast.** Hire ten salespeople and you see the effect in a quarter. Reposition a brand and you see the effect in two years. Under pressure, managers choose the lever with the shorter feedback loop, and they are not being stupid.",
      "**It works, in the short run, at a cost that appears later.** High-pressure selling does move units. It also produces returns, churn, bad word of mouth and a reputation that takes years to repair — and none of those land in the quarter that the sales bonus is paid on."
    ]},
    { t: "p", text: "How to spot it: sales headcount is the growth plan. Commission dominates compensation. Marketing reports to sales, or is described as *sales support*. When sales fall, the instinct is to run a promotion or add salespeople. The tell-tale sentence is *we have a great product, we just need to get it in front of more people*." },

    { t: "h2", text: "The marketing concept" },
    { t: "p", text: "The belief: *achieving the firm’s goals depends on determining the needs and wants of target markets and delivering the desired satisfaction better than competitors do.*" },
    { t: "p", text: "Three things are doing the work in that sentence, and all three are easy to skim past." },
    { t: "ul", items: [
      "**Target markets** — not everyone. The marketing concept is not *give every customer what they want*, which is incoherent because customers want contradictory things. It is *choose whom to serve, then serve them properly*. The choosing is week seven.",
      "**Determining needs and wants** — an empirical activity, not an act of imagination in a meeting room. This is why marketing research is a third of a serious syllabus.",
      "**Better than competitors** — satisfaction is relative, not absolute. A customer perfectly happy with you will still leave for someone who delights them more. Your performance is always measured against an alternative."
    ]},
    { t: "p", text: "The structural change that follows is that marketing stops being a department and becomes an orientation of the whole firm. If product decisions are made from customer understanding, then the finance director, the plant manager and the person who answers the telephone are all executing marketing decisions, whatever their job titles say." },
    { t: "case", title: "Diagnosing an orientation from the outside",
      ps: [
        "Two firms make premium loudspeakers at similar prices. Same category, same price bracket, different theories of the customer.",
        "**Firm A’s** website leads with frequency response curves, driver materials and total harmonic distortion. Its founder is an acoustic engineer who gives conference talks. Its reviews are excellent in specialist magazines. When sales dipped last year it launched a model with a better tweeter. Its most common internal phrase is *people don’t understand what they’re listening to*. This is **product orientation**, and it is not a criticism of the speakers — they are probably superb.",
        "**Firm B** ran a study of how people actually use speakers at home and found the dominant use was background music while cooking and talking, at low volume, in rooms with terrible acoustics. It launched a model tuned to sound good quietly, in a bad room, and sold it on that. Its specifications are worse than Firm A’s on paper. This is **marketing orientation**: the need was determined empirically, a target was chosen, and the product was built backwards from it.",
        "Now the honest complication. If the specialist segment is large enough and loyal enough, Firm A may be more profitable than Firm B. A product orientation aimed squarely at a segment that genuinely wants maximum fidelity is not wrong — it is an unarticulated marketing orientation that happens to have chosen its target correctly. The orientation becomes dangerous only when the firm assumes the whole market shares the founder’s preferences. That assumption is the actual failure, and it is invisible from inside."
      ]},

    { t: "h2", text: "The societal marketing concept" },
    { t: "p", text: "The belief: *the firm should determine needs and wants and deliver satisfaction more effectively than competitors — in a way that preserves or enhances the long-run wellbeing of the consumer and of society.*" },
    { t: "p", text: "Two additions to the marketing concept, and it is worth being precise about which is which, because people routinely collapse them." },
    { t: "ul", items: [
      "**Long-run consumer welfare.** What the customer wants right now and what is good for them over ten years can diverge. A lender can satisfy a want for immediate credit and ruin the customer. The marketing concept alone has nothing to say about this; the societal concept does.",
      "**Society at large.** Third parties who never bought anything still bear consequences — pollution, congestion, addiction, misinformation. Their interests enter the calculation."
    ]},
    { t: "p", text: "The standard picture is a triangle: company profit, consumer wants, society’s interests, with the marketer required to balance all three rather than optimise one. Whether firms actually do this is a separate question, and week sixteen takes it seriously, including the uncomfortable evidence on whether consumers reward it." },
    { t: "p", text: "Keep one distinction clean. Societal marketing is a *concept about how to decide what to sell*. Cause-related marketing — donating a share of sales to a charity — is a *promotional tactic*. A firm can run the second while ignoring the first entirely, and many do. That gap has a name, greenwashing, and you will learn to detect it." },

    { t: "h2", text: "The case against being purely customer-led" },
    { t: "p", text: "A course that presented the marketing concept as the unambiguous right answer would be selling you a simplification. There are three serious objections, and you should be able to state them." },
    { t: "ol", items: [
      "**Customers cannot describe what does not exist.** Research tells you about the world as it is. Asked directly, people request faster horses, more storage, a slightly cheaper version of what they already use. Genuinely discontinuous innovation usually comes from a technical or design insight, and its market is discovered afterwards. The answer is not to abandon research but to use the right *kind* — observing problems people have rather than asking what products they want. Week six is largely about this distinction.",
      "**Following customers is a recipe for being second.** If every firm in a category researches the same customers with the same methods, every firm arrives at the same conclusions and the category converges. Differentiation requires somebody to make a bet that the research did not mandate.",
      "**Short-run satisfaction can destroy long-run value.** Customers reliably want lower prices, more features and faster delivery. Granting all three continuously is how firms erode their own margins into nothing. The marketing concept says serve the customer profitably; the profitably is not optional, and it is the word that gets dropped."
    ]},
    { t: "p", text: "The synthesis most working marketers arrive at is this: be **market-oriented** rather than merely customer-led. Market orientation means systematic intelligence about customers *and* competitors *and* the wider environment, spread across the whole firm, with the willingness to act on it — including acting on a conclusion no customer asked for." },

    { t: "write", items: [
      "The five orientations in order, with the core belief of each in one line.",
      "Levitt: selling focuses on the needs of the seller, marketing on the needs of the buyer.",
      "The three load-bearing words in the marketing concept: target markets, determining needs, better than competitors.",
      "The diagnostic: what does the firm do when sales fall? Cut price / add features / hire sellers / commission research.",
      "The three objections to being purely customer-led."
    ]},

    { t: "h2", text: "What you should be able to do now" },
    { t: "p", text: "Given a company — its website, its job adverts, its quarterly statement, the background of its chief executive — you can now make a defensible claim about which orientation it holds, cite the evidence, and predict what it will do next time revenue slips. That is a genuinely useful party trick and it is also the first half of a consulting diagnosis." },
    { t: "p", text: "Next lecture: needs, wants and demand. Three words used interchangeably in ordinary speech that mean sharply different things here, and the distinction settles the oldest argument about whether marketing creates desire or serves it." }
  ],
  glossary: [
    { term: "Production orientation", def: "The belief that customers want available, affordable products; the firm optimises cost, scale and distribution. Correct when demand exceeds supply or the product is near-commodity." },
    { term: "Product orientation", def: "The belief that customers want the best-made, highest-performing product; the firm optimises quality and features. Produces the better-mousetrap fallacy." },
    { term: "Selling orientation", def: "The belief that customers must be pushed to buy; the firm optimises sales effort and promotion for stock it has already made." },
    { term: "Marketing concept", def: "Achieving the firm’s goals by determining the needs of chosen target markets and satisfying them better than competitors do." },
    { term: "Societal marketing concept", def: "The marketing concept plus the long-run welfare of the consumer and of society, balanced against firm profit." },
    { term: "Market orientation", def: "Firm-wide generation of intelligence about customers, competitors and environment, disseminated across departments, with responsiveness to it. The operational version of the marketing concept." },
    { term: "Better mousetrap fallacy", def: "The false belief that a superior product will be discovered and adopted on its merits without marketing." },
    { term: "Unsought goods", def: "Products the buyer does not seek out and often prefers not to think about — insurance, funeral services, smoke alarms — for which active selling is the appropriate channel, not a symptom of failure." },
    { term: "Cause-related marketing", def: "A promotional tactic tying sales to a charitable contribution. Not the same as the societal marketing concept, and frequently substituted for it." }
  ],
  quiz: [
    { id: "w01l02q1", concept: "orientations", type: "mcq",
      q: "A firm’s revenue falls 15%. Its first action is to launch a version with more features. Which orientation does this most strongly suggest?",
      options: ["Production", "Product", "Selling", "Marketing"],
      answer: 1,
      explain: "Adding features assumes the problem is that the product is not good enough — the product orientation’s core belief. A production-oriented firm cuts price; a selling-oriented firm runs a promotion or hires salespeople; a marketing-oriented firm asks why customers left before deciding what to change. The diagnostic value of the question is that all four firms are *reacting*, and the reaction reveals the theory." },

    { id: "w01l02q2", concept: "prod-vs-mkt", type: "mcq",
      q: "Ford’s “any colour so long as it is black” is usually told as a story about arrogance. What is the more accurate reading?",
      options: [
        "Ford was indifferent to customers because he held a monopoly.",
        "Black paint dried fastest, which set line speed and therefore cost — a correct production orientation for a market where demand exceeded supply.",
        "It was an early example of distinctive brand assets: Ford owned the colour black.",
        "Ford was product-oriented, optimising build quality over customer preference."
      ],
      answer: 1,
      explain: "It was a rational cost decision under conditions where affordability was the binding constraint on the market, and it was right for roughly fifteen years. The lesson is not that production orientation is stupid but that it has an expiry date — the moment supply caught demand, General Motors offered colours and Ford lost leadership. Firms rarely notice the expiry date passing." },

    { id: "w01l02q3", concept: "selling-orient", type: "multi",
      q: "Which of these are legitimate reasons the selling orientation persists rather than signs of incompetence? Select all that apply.",
      options: [
        "Some goods are genuinely unsought and would never be bought without active selling",
        "Sales effort produces measurable results far faster than repositioning does",
        "Overcapacity creates a fixed-cost problem that must be solved this quarter",
        "Customers are fundamentally irrational and must be manipulated"
      ],
      answer: [0, 1, 2],
      explain: "The first three are real structural reasons and you should be able to argue them. The fourth is the caricature, and it is exactly what the selling orientation is wrongly accused of believing — its actual belief is narrower: that customers will not buy *enough* unaided. Note that the three legitimate reasons all describe constraints, not a superior theory of the customer." },

    { id: "w01l02q4", concept: "mkt-concept", type: "mcq",
      q: "Which statement is NOT part of the marketing concept as defined in the lecture?",
      options: [
        "The firm should determine the needs and wants of target markets.",
        "The firm should satisfy those needs better than competitors do.",
        "The firm should give every customer whatever they ask for.",
        "The firm should achieve its own objectives through that satisfaction."
      ],
      answer: 2,
      explain: "The marketing concept is explicitly about *target* markets — choosing whom to serve — and about serving them *profitably*. Serving everyone is incoherent because customers want contradictory things, and serving them unprofitably is charity. Both the choosing and the profitably get dropped when the concept is quoted loosely, which is how “customer-led” came to mean something the concept never said." },

    { id: "w01l02q5", concept: "societal", type: "short",
      q: "Distinguish the societal marketing concept from cause-related marketing, and explain why conflating them is dangerous.",
      answer: "The **societal marketing concept** is a decision rule about what the firm should offer at all: satisfy target customers better than rivals *while* preserving the long-run welfare of the consumer and of society, balancing three interests — firm profit, consumer wants, social good. **Cause-related marketing** is a promotional tactic: tie a share of revenue to a charitable cause to increase sales or improve image. The first constrains what you sell; the second decorates how you sell it. Conflating them is dangerous because a firm can run cause-related campaigns enthusiastically while its core offering harms customers or third parties — the donation becomes cover rather than correction, which is the structure of greenwashing.",
      explain: "The test of whether a firm holds the societal concept is whether it has ever *declined* to sell something profitable on welfare grounds, or changed the product itself. Donations are evidence of nothing." },

    { id: "w01l02q6", concept: "prod-vs-mkt", type: "mcq",
      q: "A start-up founder says: “The technology is clearly superior — we just need to educate the market.” What is the most likely diagnosis?",
      options: [
        "A communication budget that is too small",
        "A product orientation blaming the customer for a positioning failure",
        "A correct assessment requiring a longer sales cycle",
        "A selling orientation with insufficient sales headcount"
      ],
      answer: 1,
      explain: "“Educate the market” places the deficiency in the customer’s understanding rather than in the firm’s offer or its framing of that offer. Sometimes genuine category education is required — in a new category with latent demand, it is the actual job. But as a *first* explanation for weak sales it is the signature phrase of a product-oriented firm that has not asked what outcome the customer wants, only what specification it has built." },

    { id: "w01l02q7", concept: "orientations", type: "mcq",
      q: "Which pair of orientations is separated by the only boundary that really matters — inward-looking versus outward-looking?",
      options: ["Production and product", "Product and selling", "Selling and marketing", "Marketing and societal"],
      answer: 2,
      explain: "Production, product and selling all start from what the firm already makes and reason outward to a buyer. Marketing and societal start from a person and reason back to what should be made. The first three differ in *which* internal strength they lean on; only the fourth changes the direction of reasoning. This is why Levitt’s line — selling focuses on the needs of the seller, marketing on the needs of the buyer — is the cleanest statement of the whole taxonomy." },

    { id: "w01l02q8", concept: "mkt-concept", type: "multi",
      q: "Which are serious objections to a purely customer-led strategy? Select all that apply.",
      options: [
        "Customers cannot describe products that do not yet exist",
        "If all rivals research the same customers, the category converges and nobody differentiates",
        "Granting every stated customer preference erodes margin",
        "Customer research is usually statistically invalid"
      ],
      answer: [0, 1, 2],
      explain: "The first three are the standard objections and each has real force. The fourth is a claim about execution quality, not about the strategy — badly done research is a reason to do research better, not a reason to ignore customers. The synthesis is market orientation: intelligence about customers *and* competitors *and* environment, with the willingness to act on a conclusion no customer requested." },

    { id: "w01l02q9", concept: "selling-orient", type: "mcq",
      q: "Levitt’s distinction between selling and marketing is that:",
      options: [
        "Selling is short-term and marketing is long-term",
        "Selling focuses on the needs of the seller; marketing on the needs of the buyer",
        "Selling is personal and marketing is mass-communicated",
        "Selling captures value while marketing creates it"
      ],
      answer: 1,
      explain: "Option B is Levitt’s actual formulation and it is worth memorising verbatim. The others contain grains of truth — selling does tend to be shorter-horizon, and the value-creation framing is defensible — but they describe consequences of the distinction rather than the distinction itself, which is about *whose need the activity starts from*." },

    { id: "w01l02q10", concept: "societal", type: "mcq",
      q: "A consumer lender profitably provides credit that customers actively want but that leaves many of them in long-term difficulty. Under which concept is this a failure, and why?",
      options: [
        "The marketing concept — because the customers are dissatisfied",
        "The societal marketing concept — because long-run consumer welfare is violated even though the immediate want is met",
        "The selling orientation — because pressure was applied",
        "Neither — the customers chose freely"
      ],
      answer: 1,
      explain: "This is the precise case the societal concept was formulated to cover. The marketing concept is silent: a want was identified and satisfied, profitably, possibly better than competitors, and the customer may even report satisfaction at the point of sale. Only when long-run welfare enters the criterion does the practice become a marketing failure rather than merely a moral one — which is exactly why the added clause is not decoration." },

    { id: "w01l02q11", concept: "orientations", type: "short",
      q: "You are shown a company’s job advertisements for the last two years. What would you look for to diagnose its orientation, and what would each pattern suggest?",
      answer: "Look at which functions are being hired into and at what seniority. Heavy hiring of operations, supply chain and cost engineering suggests **production orientation**. Heavy hiring of R&D, design and specialist engineers with specification-led adverts suggests **product orientation**. A large and growing commission-based sales force, with marketing roles described as “sales support”, suggests **selling orientation**. Roles in insight, research, segmentation and customer experience — especially reporting at senior level and cutting across departments — suggest **marketing or market orientation**. Also read the language: adverts that describe the product suggest an inward orientation; adverts that describe a customer problem suggest an outward one.",
      explain: "Job adverts are unusually honest evidence because they are written to attract, not to impress analysts. Where a company spends headcount is where it believes growth comes from, and that belief *is* the orientation." }
  ]
},

/* ============================================================
   1.3  Needs, wants, demand, value
   ============================================================ */
"w01l03": {
  standfirst: "Three words that ordinary speech treats as synonyms, and that this discipline keeps sharply apart. Getting them straight settles the oldest argument about marketing — whether it creates desire or serves it — and it gives you the equation that everything from pricing to brand strategy is ultimately trying to move.",
  objectives: [
    "State the difference between a need, a want and a demand, and place any example correctly.",
    "Answer the charge that marketing creates needs, with a defensible position rather than a slogan.",
    "Write the customer perceived value equation and list what goes into each side.",
    "Explain satisfaction as a gap between expectation and perception, and derive the trap this sets for advertising.",
    "Name the five utilities and identify which of them a given business creates."
  ],
  concepts: [
    { id: "need-want-demand", name: "Need, want, demand" },
    { id: "creates-needs",    name: "Does marketing create needs?" },
    { id: "perceived-value",  name: "Customer perceived value" },
    { id: "satisfaction",     name: "Satisfaction and expectation" },
    { id: "utilities",        name: "The five utilities" }
  ],
  blocks: [
    { t: "h2", text: "Three words, three different things" },
    { t: "p", text: "A **need** is a state of felt deprivation. You are hungry, cold, bored, lonely, unsafe, or unregarded. Needs are not created by anyone. They are part of the human condition and they were fully operational long before commerce existed. There is a finite and fairly short list of them." },
    { t: "p", text: "A **want** is a need given a specific shape by culture, personality, memory and exposure. Hunger is a need; a want is *a slice of pizza*, or *rye bread and herring*, or *whatever my mother made on Sundays*. Two people with identical needs will want entirely different objects, and the same person's wants will change over a lifetime while the underlying need does not." },
    { t: "p", text: "A **demand** is a want backed by the ability and the willingness to pay for it. Wanting a Porsche is not demand. Wanting a Porsche, having sixty thousand euros, and being prepared to part with them rather than keep them — that is demand. Demand is the only one of the three that appears in a sales forecast." },
    { t: "p", text: "So the sequence runs: need is universal, want is cultural and personal, demand is economic. And the practical consequence is that these three call for three completely different responses when they go wrong." },

    { t: "fig", title: "Need, want, demand — and where marketing acts", sketch: true,
      say: "A need such as hunger is shaped by culture, personality and exposure into a want for a particular thing, which becomes demand only when ability and willingness to pay are added. Marketing acts on the two arrows — shaping the want and enabling the demand. It does not create the need.",
      cap: "Marketing operates on the arrows, not on the first box. This diagram is the whole answer to the accusation that marketing manufactures needs — and it is also the reason the accusation keeps being made, because shaping a want feels, from the inside, exactly like being given a need.",
      svg: '<svg viewBox="0 0 680 250" role="img" aria-label="Diagram: a need is shaped into a want and then into demand">' +
        '<defs><marker id="ahN3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--series-2)"/></marker></defs>' +
        '<rect x="20" y="72" width="152" height="86" rx="5" fill="var(--surface-2)" stroke="var(--rule-strong)"/>' +
        '<text x="96" y="100" text-anchor="middle" fill="var(--ink)" font-size="14" font-weight="600">NEED</text>' +
        '<text x="96" y="122" text-anchor="middle" fill="var(--ink-2)" font-size="11.5">felt deprivation</text>' +
        '<text x="96" y="140" text-anchor="middle" fill="var(--ink-3)" font-size="11">“I am hungry”</text>' +
        '<rect x="264" y="72" width="152" height="86" rx="5" fill="var(--surface-2)" stroke="var(--rule-strong)"/>' +
        '<text x="340" y="100" text-anchor="middle" fill="var(--ink)" font-size="14" font-weight="600">WANT</text>' +
        '<text x="340" y="122" text-anchor="middle" fill="var(--ink-2)" font-size="11.5">need, given a shape</text>' +
        '<text x="340" y="140" text-anchor="middle" fill="var(--ink-3)" font-size="11">“I want that pizza”</text>' +
        '<rect x="508" y="72" width="152" height="86" rx="5" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"/>' +
        '<text x="584" y="100" text-anchor="middle" fill="var(--accent-ink)" font-size="14" font-weight="600">DEMAND</text>' +
        '<text x="584" y="122" text-anchor="middle" fill="var(--ink-2)" font-size="11.5">want + ability to pay</text>' +
        '<text x="584" y="140" text-anchor="middle" fill="var(--ink-3)" font-size="11">“and I will pay €9”</text>' +
        '<line x1="180" y1="115" x2="256" y2="115" stroke="var(--series-2)" stroke-width="2" marker-end="url(#ahN3)"/>' +
        '<line x1="424" y1="115" x2="500" y2="115" stroke="var(--series-2)" stroke-width="2" marker-end="url(#ahN3)"/>' +
        '<text x="218" y="60" text-anchor="middle" fill="var(--ink-3)" font-size="10.5">culture, personality,</text>' +
        '<text x="218" y="46" text-anchor="middle" fill="var(--ink-3)" font-size="10.5">memory, exposure</text>' +
        '<text x="462" y="60" text-anchor="middle" fill="var(--ink-3)" font-size="10.5">income, price,</text>' +
        '<text x="462" y="46" text-anchor="middle" fill="var(--ink-3)" font-size="10.5">priority, access</text>' +
        '<path d="M218 128 L218 178" stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="3 3"/>' +
        '<path d="M462 128 L462 178" stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="3 3"/>' +
        '<rect x="150" y="180" width="380" height="30" rx="4" fill="var(--accent)" />' +
        '<text x="340" y="200" text-anchor="middle" fill="var(--on-accent)" font-size="12" font-weight="600">Marketing acts here — on the arrows</text>' +
        '<text x="96" y="200" text-anchor="middle" fill="var(--ink-3)" font-size="10.5">not here</text>' +
        '<text x="340" y="232" text-anchor="middle" fill="var(--ink-3)" font-size="11">Shaping a want and enabling a demand. The need was already there.</text>' +
        '</svg>' },

    { t: "table",
      head: ["Need (universal)", "Want (cultural, personal)", "Demand (economic)"],
      rows: [
        ["Hunger", "Sushi; black bread; whatever is nearest at 14:00", "Sushi, at €14, this Thursday, because payday was Tuesday"],
        ["Belonging", "A football club; a church; a Discord server", "A season ticket at €280"],
        ["Esteem", "A visible watch; a published paper; a tidy garden", "A watch at €2,400 bought on credit"],
        ["Safety", "Insurance; a locked door; savings", "A policy at €31 a month"],
        ["Mobility", "A car; a bicycle; a monthly transit pass", "A bicycle at €600, after comparing four"]
      ],
      say: "Examples across the three columns. Hunger is a need. Sushi is a want. Sushi at fourteen euros this Thursday is demand.",
      cap: "Read across each row. The need column would have looked much the same three thousand years ago; the want column is entirely a product of the last few decades; the demand column changes with every pay cheque." },

    { t: "h2", text: "Does marketing create needs?" },
    { t: "p", text: "This is the oldest charge against the discipline and you will be asked it at dinner parties for the rest of your career. It deserves a real answer rather than a defensive one." },
    { t: "p", text: "**The defence.** Marketing does not create needs; needs pre-exist marketing. What marketing does is shape wants — it proposes a particular object as the answer to a need you already had. Nobody was made to need status by an advertisement. The need for status is documented in every society we have records of. What an advertisement can do is propose *this watch* as the way to signal it." },
    { t: "p", text: "**The prosecution, put fairly.** That defence is technically correct and somewhat slippery. Three things complicate it." },
    { t: "ol", items: [
      "**The distinction is invisible from the inside.** If you did not previously experience your kitchen as inadequate, and after sustained exposure to images of other kitchens you do, the philosophical point that your underlying need for esteem was always there is not much comfort. The *felt deprivation* is new, even if the need category is old.",
      "**Wants are not costless.** Shaping a want toward an expensive, resource-intensive or harmful object has real consequences, and “we only shaped the want” does not discharge responsibility for which shape was chosen.",
      "**Some marketing does manufacture felt deprivation deliberately.** Categories built on insecurity — a considerable amount of cosmetics, some supplements, parts of the wellness industry — work by first establishing that a condition is a problem. That is closer to creating a need than the textbook defence admits."
    ]},
    { t: "p", text: "**The position worth holding.** Marketing does not create needs, but it is not innocent of them either. It has enormous influence over which objects get attached to which needs, and that influence is exactly where the ethical weight of the profession sits. A marketer who hides behind *we only satisfy existing needs* is using a true sentence to avoid a real question. Say instead: needs are given, wants are shaped, and shaping is a responsibility." },

    { t: "h2", text: "Value: the equation underneath everything" },
    { t: "p", text: "Customers do not buy products. They buy an expected improvement in their situation, and they pay for it in more than money. The concept that captures this is **customer perceived value**." },
    { t: "math", label: "Customer perceived value",
      eqs: [
        "CPV  =  Total customer benefit  −  Total customer cost",
        "",
        "benefit  =  product + service + personal + image",
        "cost     =  money + time + energy + psychological"
      ],
      say: "Customer perceived value equals total customer benefit minus total customer cost. Benefit is made of product, service, personal and image benefits. Cost is made of money, time, energy and psychological cost.",
      ps: [
        "Both sides are **perceived**, not measured. The customer's estimate is the only one that affects behaviour, and it is formed before purchase on incomplete information.",
        "Note that only one of the four cost components is money. A great deal of practical marketing consists of attacking the other three — which is why a shop that is easier to park at can beat a cheaper one."
      ]},
    { t: "p", text: "Unpack the benefit side. **Product benefit** is what the thing does. **Service benefit** is delivery, installation, support, returns, the ease of dealing with you. **Personal benefit** is the competence and warmth of the individual human the customer interacts with. **Image benefit** is what owning it says about them, to themselves and to others." },
    { t: "p", text: "Now the cost side, which is where amateurs stop early. **Monetary cost** is the price. **Time cost** is how long the customer spends acquiring, learning and maintaining. **Energy cost** is physical and mental effort — assembly, forms, decisions. **Psychological cost** is risk, anxiety, the fear of being wrong, the embarrassment of asking, the discomfort of admitting you need the product at all." },
    { t: "p", text: "This last one is routinely enormous and routinely ignored. Psychological cost is why people delay going to the doctor, why enterprise buyers choose the safe vendor over the better one, and why a free trial that requires a credit card converts far worse than one that does not — the money is the same, the risk is not." },

    { t: "case", title: "Two coffee shops, same coffee, different value",
      ps: [
        "Two cafés on the same street sell espresso from similar machines using similar beans. One charges €2.20, the other €3.40. The expensive one is busier. A production-oriented analyst concludes that the customers are irrational. Compute perceived value instead.",
        "**Benefit side.** Product benefit is roughly equal — assume it is identical. Service benefit is not: the expensive café has four seats free at 09:00 because it has more of them, opens earlier, and the queue moves faster. Personal benefit: the staff know regulars by name and start the order when they walk in, which saves ninety seconds and confers a small, real pleasure. Image benefit: it is where people from the design studio go.",
        "**Cost side.** Monetary cost is €1.20 higher. Time cost is *lower* — shorter queue, faster service, and no walk to a second place when it is full. Energy cost is lower: no decision to make, because the staff remember. Psychological cost is lower: no risk of an awkward wait, no chance of being the person who cannot find a seat while holding a cup.",
        "So the expensive café loses on one component and wins on four. A customer who values their nine o’clock minutes at more than €1.20 is behaving perfectly rationally. The cheaper café is not competing on price — it is *conceding* on everything else and pricing accordingly, which is a strategy, but it should know that is what it is doing.",
        "The general lesson: when a competitor with a higher price is winning, the answer is almost never that customers are stupid. It is that you are measuring one component of a four-plus-four equation."
      ]},

    { t: "h2", text: "Satisfaction is a gap, not a level" },
    { t: "p", text: "Satisfaction is not how good the product is. Satisfaction is **perceived performance minus expectation**. This is the expectancy-disconfirmation model, it is one of the most reliably supported findings in the field, and it has a consequence that every marketer eventually learns the hard way." },
    { t: "p", text: "If performance falls short of expectation, the customer is dissatisfied. If it matches, they are satisfied — merely. If it exceeds, they are delighted, and delight is what produces word of mouth, forgiveness of later mistakes, and a willingness to pay more." },

    { t: "fig", title: "The same performance, three different verdicts", sketch: true,
      say: "Three panels, each showing an expectation bar and a perceived performance bar. In the first, performance falls short of a high expectation and the customer is dissatisfied. In the second, performance matches expectation and the customer is merely satisfied. In the third, the same performance exceeds a modest expectation and the customer is delighted. The performance bar is identical in all three.",
      cap: "The performance bar is the **same height in all three panels**. Only the expectation moves — and expectation is set largely by your own advertising, your price, and your competitors. This is why over-promising is not merely dishonest but strategically self-defeating.",
      svg: '<svg viewBox="0 0 680 250" role="img" aria-label="Three panels showing satisfaction as the gap between expectation and perceived performance">' +
        '<g font-size="11">' +
        /* panel 1 */
        '<text x="30" y="26" fill="var(--ink-2)" font-size="12" font-weight="600">Over-promised</text>' +
        '<line class="grid-line" x1="30" y1="180" x2="210" y2="180" stroke="var(--grid)"/>' +
        '<rect x="52" y="60" width="52" height="120" rx="3" fill="var(--surface-3)" stroke="var(--rule-strong)"/>' +
        '<rect x="128" y="110" width="52" height="70" rx="3" fill="var(--series-1)"/>' +
        '<text x="78" y="196" text-anchor="middle" fill="var(--ink-3)">expected</text>' +
        '<text x="154" y="196" text-anchor="middle" fill="var(--ink-3)">got</text>' +
        '<path d="M110 60 L122 60 M116 60 L116 110 M110 110 L122 110" stroke="var(--bad)" stroke-width="1.4" fill="none"/>' +
        '<text x="120" y="228" text-anchor="middle" fill="var(--bad)" font-size="11.5" font-weight="600">Dissatisfied</text>' +
        /* panel 2 */
        '<text x="250" y="26" fill="var(--ink-2)" font-size="12" font-weight="600">Matched</text>' +
        '<line class="grid-line" x1="250" y1="180" x2="430" y2="180" stroke="var(--grid)"/>' +
        '<rect x="272" y="110" width="52" height="70" rx="3" fill="var(--surface-3)" stroke="var(--rule-strong)"/>' +
        '<rect x="348" y="110" width="52" height="70" rx="3" fill="var(--series-1)"/>' +
        '<text x="298" y="196" text-anchor="middle" fill="var(--ink-3)">expected</text>' +
        '<text x="374" y="196" text-anchor="middle" fill="var(--ink-3)">got</text>' +
        '<text x="340" y="228" text-anchor="middle" fill="var(--ink-2)" font-size="11.5" font-weight="600">Merely satisfied</text>' +
        /* panel 3 */
        '<text x="470" y="26" fill="var(--ink-2)" font-size="12" font-weight="600">Under-promised</text>' +
        '<line class="grid-line" x1="470" y1="180" x2="650" y2="180" stroke="var(--grid)"/>' +
        '<rect x="492" y="140" width="52" height="40" rx="3" fill="var(--surface-3)" stroke="var(--rule-strong)"/>' +
        '<rect x="568" y="110" width="52" height="70" rx="3" fill="var(--series-1)"/>' +
        '<text x="518" y="196" text-anchor="middle" fill="var(--ink-3)">expected</text>' +
        '<text x="594" y="196" text-anchor="middle" fill="var(--ink-3)">got</text>' +
        '<path d="M550 110 L562 110 M556 110 L556 140 M550 140 L562 140" stroke="var(--good)" stroke-width="1.4" fill="none"/>' +
        '<text x="560" y="228" text-anchor="middle" fill="var(--good)" font-size="11.5" font-weight="600">Delighted</text>' +
        '</g>' +
        '<line x1="30" y1="206" x2="650" y2="206" stroke="var(--rule)" stroke-dasharray="3 3"/>' +
        '</svg>' },

    { t: "p", text: "Now the trap. You control both terms of the equation, and they pull against each other. Raising expectation — through advertising, through price, through promises — is how you get the customer to try you in the first place. Raising it too far guarantees that trial ends in dissatisfaction, however good the product actually is." },
    { t: "warn", title: "The over-promise trap", ps: [
      "A campaign that lifts expectation by twenty percent and delivers a product that performs ten percent better than before will produce *worse* satisfaction scores than doing nothing at all. The product improved. The customers are unhappier. Both facts are true and the mechanism is the gap.",
      "This is why the classic advice is to under-promise and over-deliver — and why that advice is harder to follow than it sounds, because the person who under-promises loses the argument for the budget to the person who over-promises, and is gone before the satisfaction data arrives."
    ]},
    { t: "p", text: "One more subtlety worth having. Expectation is not set by you alone. It is set by your price — a €3.40 coffee is *expected* to be better than a €2.20 one, so the premium brand has to clear a higher bar with the same liquid. It is set by competitors, whose improvements raise the baseline for everyone. And it is set by category-adjacent experiences: once people can track a parcel to the minute, they expect to track a plumber." },

    { t: "h2", text: "The five utilities" },
    { t: "p", text: "A last piece of vocabulary, and a genuinely useful one for seeing where a business actually creates its value. Marketing creates five kinds of utility." },
    { t: "ul", items: [
      "**Form utility** — turning inputs into something more useful. Flour into bread. Usually production’s contribution, but marketing decides *which* form.",
      "**Place utility** — having it where the customer is. A bottle of water is worth more at a festival than in a warehouse eight kilometres away, and no atom of it has changed.",
      "**Time utility** — having it when the customer wants it. Open at 23:00. In stock in December. Next-day rather than next-week.",
      "**Possession utility** — making transfer of ownership easy. Credit, leasing, subscription, one-click checkout, easy returns. A great many businesses are almost entirely possession utility.",
      "**Information utility** — the customer knowing it exists, what it does, and why it fits them. Without this the other four create nothing, because the exchange never occurs."
    ]},
    { t: "p", text: "Ask of any business: which of the five is it actually selling? A convenience store sells place and time utility at a markup, and everyone understands the deal. A furniture retailer that delivers and assembles is selling form, place and possession. A comparison site sells pure information utility and nothing else — it never touches the product. Naming the utility tells you what you must protect and what you can outsource." },

    { t: "write", items: [
      "Need = felt deprivation. Want = need shaped by culture and personality. Demand = want + ability and willingness to pay.",
      "The position on “marketing creates needs”: needs are given, wants are shaped, shaping is a responsibility.",
      "CPV = total benefit (product, service, personal, image) − total cost (money, time, energy, psychological).",
      "Satisfaction = perceived performance − expectation. Draw the three-panel figure from memory.",
      "The five utilities: form, place, time, possession, information."
    ]},

    { t: "h2", text: "What you should be able to do now" },
    { t: "p", text: "You can classify any example into need, want or demand and explain why it matters which. You can answer the dinner-party accusation without either defensiveness or dishonesty. You can decompose a purchase into eight components of value and find the ones a competitor is winning on. And you can explain to a colleague why their brilliant campaign made customer satisfaction go down." },
    { t: "p", text: "Next lecture: Theodore Levitt, 1960, and the argument that industries do not die of competition — they die of how they answered the question *what business are we in?*" }
  ],
  glossary: [
    { term: "Need", def: "A state of felt deprivation. Universal, pre-existing, and not created by marketing." },
    { term: "Want", def: "A need given specific shape by culture, personality, memory and exposure. This is what marketing influences." },
    { term: "Demand", def: "A want backed by ability and willingness to pay. The only one of the three that appears in a forecast." },
    { term: "Customer perceived value (CPV)", def: "Total perceived benefit minus total perceived cost. Both sides are estimates made by the customer before purchase." },
    { term: "Psychological cost", def: "Risk, anxiety, fear of being wrong, embarrassment. Frequently the largest non-monetary cost and the most often ignored." },
    { term: "Expectancy-disconfirmation", def: "The model in which satisfaction equals perceived performance minus prior expectation, so satisfaction can fall while quality rises." },
    { term: "Customer delight", def: "Performance materially above expectation; the state that produces word of mouth and tolerance of later failures." },
    { term: "Form utility", def: "Value created by converting inputs into a more useful configuration." },
    { term: "Place utility", def: "Value created by having the offering where the customer is." },
    { term: "Time utility", def: "Value created by having the offering when the customer wants it." },
    { term: "Possession utility", def: "Value created by making the transfer of ownership easy — credit, subscription, returns, checkout." },
    { term: "Information utility", def: "Value created by the customer knowing the offering exists and understanding its fit. Without it the other four cannot be realised." }
  ],
  quiz: [
    { id: "w01l03q1", concept: "need-want-demand", type: "mcq",
      q: "“A 19-year-old student wants the new iPhone but cannot afford it.” In the technical vocabulary, this is:",
      options: ["A need", "A want but not demand", "Demand", "A want and a demand"],
      answer: 1,
      explain: "Demand requires ability *and* willingness to pay. Without the ability, it stops at a want — which is why want-based market sizing produces wildly optimistic forecasts. The underlying need here is probably some mixture of belonging, esteem and communication; the iPhone is the shape the culture has given it." },

    { id: "w01l03q2", concept: "perceived-value", type: "multi",
      q: "Which of these are components of total customer COST in the perceived-value equation? Select all that apply.",
      options: ["Monetary price", "Time spent acquiring and learning", "Image benefit", "Psychological risk and anxiety", "Physical and mental effort"],
      answer: [0, 1, 3, 4],
      explain: "Cost has four components — money, time, energy, psychological — and image sits on the *benefit* side. The reason this matters practically: three of the four costs are non-monetary, so a firm that can only think about price is trying to win a four-dimensional argument with one dimension. Reducing psychological cost (guarantees, references, trials without a card) is often cheaper than discounting and does not damage the brand." },

    { id: "w01l03q3", concept: "satisfaction", type: "mcq",
      q: "A hotel refurbishes its rooms and simultaneously runs a campaign calling itself “the finest stay in the city”. Satisfaction scores fall. What is the most likely explanation?",
      options: [
        "The refurbishment was badly executed",
        "Expectation rose further than perceived performance did, widening the gap",
        "Customers dislike change",
        "The campaign attracted price-sensitive customers"
      ],
      answer: 1,
      explain: "This is the over-promise trap. Satisfaction is a gap, not a level: performance improved but expectation was lifted higher still, so disconfirmation is negative. The rooms are genuinely better and the guests are genuinely unhappier, and both facts are compatible. It is the single most common way a successful campaign damages a business." },

    { id: "w01l03q4", concept: "creates-needs", type: "short",
      q: "Someone tells you marketing creates needs that people would not otherwise have. Give the defence, then give the strongest objection to your own defence, then state the position you would actually hold.",
      answer: "**Defence:** needs are states of felt deprivation that pre-exist commerce — hunger, safety, belonging, esteem — and the same short list appears in every documented society. Marketing shapes *wants*, proposing a particular object as the answer to a need already present; it did not invent the desire for status, only the suggestion that a watch expresses it. **Objection:** the distinction is invisible from inside the person. If sustained exposure to images of other kitchens makes you experience your own as inadequate, the felt deprivation is genuinely new even if the need category is ancient; and some categories are built precisely by first establishing that a normal condition is a problem, which is close to manufacturing a need. **Position:** needs are given, wants are shaped, and shaping carries responsibility — the defence is true but does not discharge the marketer from answering for which shape was chosen.",
      explain: "What is being marked here is whether you can hold a position under challenge rather than recite a slogan. The pure defence is technically correct and rhetorically weak precisely because it is used to dodge the real question." },

    { id: "w01l03q5", concept: "utilities", type: "mcq",
      q: "A price-comparison website never handles, stores or ships any product. Which utility is it creating?",
      options: ["Form utility", "Place utility", "Possession utility", "Information utility"],
      answer: 3,
      explain: "Pure information utility: the customer now knows what exists, what it costs and how it compares. The example is useful because it proves information utility is genuinely value-creating and not merely a support function — people pay for it, in attention and in commission, and businesses exist on nothing else." },

    { id: "w01l03q6", concept: "perceived-value", type: "mcq",
      q: "A software firm offers a free trial but requires a credit card up front. A rival offers the same trial with no card. The rival converts far better at identical price. The cleanest explanation is:",
      options: [
        "The rival’s product is better",
        "Monetary cost differs between the two offers",
        "Psychological cost differs — perceived risk of forgetting to cancel",
        "The rival has stronger brand awareness"
      ],
      answer: 2,
      explain: "Monetary cost is identical — both trials are free. What differs is perceived risk: the fear of an automatic charge, of a cancellation process designed to be difficult, of having to remember. That is psychological cost, and here it is decisive. This is the most practically useful item in the lecture, because psychological cost can usually be reduced at almost no monetary cost to the firm." },

    { id: "w01l03q7", concept: "need-want-demand", type: "multi",
      q: "Which statements about needs, wants and demands are correct? Select all that apply.",
      options: [
        "Wants vary across cultures while the underlying needs largely do not",
        "Demand is a subset of wants",
        "Marketing primarily influences needs",
        "A forecast built on wants rather than demands will overstate the market"
      ],
      answer: [0, 1, 3],
      explain: "Option C is the error the whole distinction exists to prevent. Marketing acts on the arrows — shaping wants and enabling demand — not on the first box. The others follow directly: demand is wants filtered by ability and willingness to pay, so it is a subset, and sizing a market on wants ignores that filter and inflates the number." },

    { id: "w01l03q8", concept: "satisfaction", type: "short",
      q: "Explain why a premium-priced brand must deliver more than a cheap one to achieve the same satisfaction score, even if the physical product is identical.",
      answer: "Price is itself a signal that sets expectation. A customer paying €3.40 expects more than one paying €2.20, so the same delivered performance is disconfirmed against a higher reference point and produces a smaller — possibly negative — satisfaction gap. Premium pricing therefore buys you margin and image benefit but simultaneously raises the bar you must clear, and the two effects have to be managed together. A firm that raises price without raising delivered performance or reducing non-monetary costs will see satisfaction fall even though nothing about the product changed.",
      explain: "This is the bridge between week one and week ten. Price is never only a number — it is a promise, and satisfaction is measured against it." },

    { id: "w01l03q9", concept: "utilities", type: "mcq",
      q: "A petrol-station shop sells a sandwich for twice the supermarket price at 23:00. Which utilities is it charging for?",
      options: ["Form and information", "Place and time", "Possession and form", "Information and possession"],
      answer: 1,
      explain: "The sandwich is identical — no additional form utility has been created. What the customer is buying is that it is *here* (place) and *now*, when the supermarket is shut (time). Naming the utility explains the price and also names the vulnerability: anything that erodes the place or time advantage — a 24-hour supermarket, delivery — destroys the entire basis of the premium." },

    { id: "w01l03q10", concept: "perceived-value", type: "num",
      q: "A customer values a service’s benefits at €400 in total. The price is €250, and they estimate 3 hours of setup time which they value at €20 per hour, plus €30 of perceived risk. What is the customer perceived value, in euros?",
      answer: 60, tol: 0.5, unit: "euros",
      placeholder: "e.g. 120",
      explain: "Total cost = €250 money + €60 time (3 × €20) + €30 psychological = €340. CPV = €400 − €340 = **€60**. Positive, so the purchase is rational — but only just. Note what the arithmetic shows: cutting the price by €50 and removing two hours of setup are worth almost the same to the customer (€50 versus €40), and the second one costs the firm far less than the first. That is the practical payoff of taking the non-monetary terms seriously." },

    { id: "w01l03q11", concept: "satisfaction", type: "mcq",
      q: "Which is the best statement of the expectancy-disconfirmation model?",
      options: [
        "Satisfaction rises with product quality",
        "Satisfaction is perceived performance minus prior expectation",
        "Satisfaction is the ratio of benefits to price",
        "Satisfaction is measured by repeat purchase"
      ],
      answer: 1,
      explain: "Option A is the intuitive belief the model disproves — quality can rise while satisfaction falls. Option C is closer to perceived value than to satisfaction. Option D confuses a *measure sometimes correlated with* satisfaction for the thing itself, and week four will show that repeat purchase is driven far more by availability and habit than by satisfaction." }
  ]
},

/* ============================================================
   1.4  Marketing myopia
   ============================================================ */
"w01l04": {
  standfirst: "Here is a question you can ask about any company, including the one you work for: **what business are we in?** It sounds harmless. It is the most dangerous question in this course — because the answer decides who you count as a competitor, and a competitor you do not count is one who can take your customers without you ever noticing.",
  objectives: [
    "Explain why the question “what business are we in?” decides which threats a firm can see at all.",
    "State Levitt’s argument, including the claim about growth industries that most summaries drop.",
    "Name the four self-deceptions and spot each one in a real firm.",
    "Use the crossover formula to work out how many years a small, fast-growing rival needs to overtake you.",
    "Define a business on Abell’s three dimensions, and test the definition by what it rules out.",
    "Argue the case against Levitt — hyperopia and capability — and state the synthesis."
  ],
  concepts: [
    { id: "myopia",        name: "Marketing myopia" },
    { id: "growth-fallacy",name: "The growth-industry fallacy" },
    { id: "biz-definition",name: "Defining the business" },
    { id: "abell",         name: "Abell’s three dimensions" },
    { id: "hyperopia",     name: "Over-broad definition" },
    { id: "substitutes",   name: "Substitution arithmetic" },
    { id: "capability",    name: "Capability and the counter-argument" }
  ],
  vocab: [
    { word: "myopia", plain: "Short-sightedness. You see clearly what is close to you and miss what is further away.", et: "lühinägelikkus" },
    { word: "hyperopia", plain: "Long-sightedness — the opposite error. You see the far distance and miss what is in front of you.", et: "kaugnägelikkus" },
    { word: "substitute", plain: "A different kind of product that does the same job for the customer.", et: "asendaja, aseaine" },
    { word: "incumbent", plain: "The company that already holds the market. The one being attacked, not the attacker.", et: "turgu valitsev olemasolev ettevõte" },
    { word: "complacency", plain: "Feeling safe and satisfied when you have no good reason to be.", et: "eneserahulolu" },
    { word: "self-deception", plain: "Believing something about yourself that is not true, without meaning to lie.", et: "enesepettus" },
    { word: "capability", plain: "Something a firm is genuinely able to do well, better than others can.", et: "võimekus" },
    { word: "volatile", plain: "Changes fast and unpredictably.", et: "kiiresti muutuv, kõikuv" },
    { word: "durable", plain: "Lasts a long time without changing.", et: "püsiv, kestev" },
    { word: "residual", plain: "What is left over after you subtract everything you can explain.", et: "jääk" },
    { word: "dismiss", plain: "To decide something is not worth paying attention to.", et: "kõrvale heitma" },
    { word: "crossover", plain: "The moment two lines on a chart meet and swap places.", et: "ristumiskoht" },
    { word: "prescription", plain: "The action a theory recommends you take.", et: "soovitus, ettekirjutus" }
  ],
  blocks: [
    { t: "h2", text: "A question you can ask about any company" },
    { t: "p", text: "Think of where you work, or a shop you use every week. Ask the people there what business they are in. The answer comes fast, and it is almost always the product. *We make furniture. We run a gym. We sell insurance.*" },
    { t: "p", text: "Now watch what that answer does to them. If you are a gym, your competitors are the other gyms. So you watch the other gyms. You compare prices with them. You worry when one opens nearby. You do not watch the running app, or the weights somebody bought for their spare room, or the padel court that opened last spring — because none of those is a gym." },
    { t: "p", text: "That is the trap. Your customer never wanted a gym. They wanted to be fitter, or to feel better, or to have a reason to leave the house at seven in the morning. Anything that does that job is competing with you, whether or not you count it." },
    { t: "p", text: "So this is not an academic question. **It decides which threats you are able to see at all.** Answer it badly and you will be extremely well informed about the wrong competitors, right up to the day your customers leave for somewhere you were not looking." },
    { t: "p", text: "That is what this lecture is for. You will get a name for the failure, four reasons it happens, a piece of arithmetic that tells you how much time you have, and a method for defining a business that avoids both this mistake and the opposite one — which is just as expensive and far less famous." },

    { t: "h2", text: "The firm that answered it wrong" },
    { t: "p", text: "The classic case is the American railroads. It is worth a minute, because the scale is hard to picture now." },
    { t: "p", text: "For most of the nineteenth century the railroads were the largest companies on earth. They were bigger than most governments. They were the defining industrial achievement of the age, the way that software companies are today. By 1960 they were a problem to be managed rather than a business anyone envied." },
    { t: "p", text: "Everyone had the same explanation: cars, lorries and aeroplanes took their traffic. Theodore Levitt, writing in *Harvard Business Review* in 1960, agreed with every fact in that sentence and rejected the explanation completely." },
    { t: "quote", text: "The railroads did not stop growing because the need for passenger and freight transportation declined. That grew. The railroads are in trouble today not because the need was filled by others (cars, trucks, airplanes, even telephones), but because it was not filled by the railroads themselves.", who: "Theodore Levitt, “Marketing Myopia”, Harvard Business Review, July–August 1960" },
    { t: "p", text: "Read the second sentence again, slowly. Demand for moving people and goods did not shrink. It grew enormously, across exactly the decades when the railroads were shrinking. Every one of those new journeys and new tonnes was there to be won." },
    { t: "p", text: "The railroads did not lose a fight for that business. They never turned up to it. A company that understands itself as *a railroad* watches other railroads — and a lorry is not a railroad." },
    { t: "p", text: "Levitt gave this failure a name: **marketing myopia**. Myopia is the medical word for short-sightedness. You see what is close to you perfectly well and miss what is further out." },
    { t: "p", text: "Here is the mechanism, stated as a general rule before we go near the causes. **A firm defined by what it makes can only see competitors who make the same thing.** When the customer's need gets met by something structurally different, the firm does not lose the contest. It never knew there was one." },
    { t: "h2", text: "The claim most summaries drop" },
    { t: "p", text: "Ask ten marketers what marketing myopia means and nine will say *defining your business too narrowly*. That is half of it, and the missing half is the half Levitt cared about most." },
    { t: "p", text: "His central assertion was about **growth industries** — and it was that there is no such thing." },
    { t: "quote", text: "There is no such thing as a growth industry. There are only companies organised and operated to create and capitalise on growth opportunities.", who: "Levitt, 1960" },
    { t: "p", text: "This matters because the belief in growth industries is what produces complacency. If you believe you are *in* a growth industry, growth is a property of your surroundings — something the tide does for you — and your job is to keep the ships afloat and take delivery of it. If growth is instead something firms manufacture, then a firm in a booming market that is not actively creating growth opportunities is not succeeding. It is coasting, and the difference between coasting and succeeding is invisible until the tide turns." },
    { t: "p", text: "Levitt's point is sharper still: every industry that was once a growth industry got there by satisfying a need better than the alternatives, and every one of them eventually stopped. The sequence is not accidental. Success produces confidence, confidence produces the four beliefs below, and the four beliefs produce the blindness." },

    { t: "h2", text: "The four self-deceptions" },
    { t: "p", text: "Levitt identified four beliefs that together produce myopia. They travel as a set, each one is comfortable, and each one is *partly true* — which is precisely why they are hard to dislodge. Nobody defends an obviously false belief for thirty years." },

    { t: "h3", text: "One: growth is assured by an expanding, more affluent population" },
    { t: "p", text: "If there will be more people next year, and they will be richer, there will be more customers, so demand takes care of itself. The industry's job is to keep up with it." },
    { t: "p", text: "The belief substitutes demography for strategy. And it is unusually seductive because it is often *arithmetically correct in the short run* — the population really is growing, the customers really do arrive — which means the firm receives confirming evidence every year right up until the moment it stops working." },
    { t: "case", title: "The arithmetic of coasting",
      ps: [
        "A regional bakery has held roughly the same share for a decade. The city's population grows about 1.2% a year and real incomes about 2%. Revenue rises about 3% a year without anybody doing anything, and the annual report describes this as *steady growth in a growing market*.",
        "Now decompose it. Of that 3%, roughly 1.2 points are more mouths, roughly 1.4 points are those mouths spending a little more, and the residual — about 0.4 points — is everything the firm actually did: its products, its pricing, its distribution, its advertising, its service. Four tenths of one percent.",
        "The firm is not growing. The city is growing and the firm is attached to it. Every euro of that growth would have arrived if the marketing department had spent the decade asleep, and the moment population growth turns — which municipal projections will have signalled years in advance — the 3% becomes 1.8%, then 0.4%, and nobody will be able to explain what changed.",
        "This is why the decomposition is worth doing every year on your own numbers: **growth you did not cause is not a capability, and it will not be there when you need it.**"
      ]},

    { t: "h3", text: "Two: there is no competitive substitute for the industry’s main product" },
    { t: "p", text: "This is the fatal one, and it is *always* wrong eventually. Levitt's most extended treatment is the petroleum industry, and it is worth following in full because it is the clearest case ever assembled of an industry repeatedly rescued by people who did not work in it." },
    { t: "p", text: "The industry began as a lighting business — kerosene for lamps. That demand was then largely destroyed by the incandescent electric lamp, which the oil industry had no hand in. It was rescued by the internal combustion engine, which it also had no hand in, and which created a petrol market larger than lamp oil had ever been. When that market matured, central oil heating expanded demand again. Levitt's observation was that at no point did the rescue originate inside the industry: on his account even the major improvements to petrol itself, such as tetraethyl lead as an anti-knock additive, came out of the automotive and chemical industries rather than the oil companies." },
    { t: "p", text: "Levitt's conclusion was uncomfortable and precise. An industry can be saved from outside so many times that its executives mistake survival for invulnerability. Each rescue reinforces the belief that demand for the product is permanent, when what the record actually shows is that demand for *lighting*, and later for *mobility* and *warmth*, is permanent — and that the industry has repeatedly been on the wrong side of that distinction and got lucky." },
    { t: "warn", title: "Why the substitute is invisible while it is cheap to respond to", ps: [
      "The substitute almost always arrives from outside the industry, and it almost always arrives *bad*. The first version is worse on every dimension the incumbent's customers currently care about, it is bought by people the incumbent does not consider representative, and its volumes are trivial.",
      "So the dismissal is not stupidity. It is a correct reading of the present, applied to a question about the future. Every objection an incumbent raises is true on the day it is raised — and all of them stop being true at roughly the same time, which is what makes the transition feel sudden from the inside.",
      "Clayton Christensen later built a whole theory on this observation, and gave it a name the business world adopted: disruptive innovation. His addition to Levitt was to show that the incumbents are not merely blind but *rationally* blind — serving their best customers well is precisely what stops them responding."
    ]},

    { t: "h2", text: "Making the threat numerical" },
    { t: "p", text: "Here is where this lecture asks more of you than most treatments do. *Watch for substitutes* is advice nobody can act on. The way to convert it into a decision is arithmetic, and the arithmetic is simple enough to do on the back of an envelope." },
    { t: "p", text: "Take a category where you hold 97 units of volume and a substitute holds 3. Your category is drifting down by 2% a year; the substitute is growing at 40% a year off its tiny base. Nobody in your industry is worried, and at today's numbers nobody should be — the substitute is 3% of the market." },
    { t: "math", label: "The crossover formula",
      eqs: [
        "  n  =  ln(share ratio)  ÷  ln(growth ratio)",
        "",
        "  share ratio   =  your units  ÷  their units        = 97 ÷ 3    = 32.3",
        "  growth ratio  =  their factor ÷ your factor        = 1.40 ÷ 0.98 = 1.4286",
        "",
        "  n  =  ln(32.3) ÷ ln(1.4286)  =  3.48 ÷ 0.357  ≈  9.7 years"
      ],
      terms: [
        { sym: "n", means: "the answer: how many years until they pass you." },
        { sym: "growth factor", means: "one plus the growth rate. Growing 40% a year is a factor of **1.40**. Shrinking 2% a year is a factor of **0.98**. Multiply by the factor once per year." },
        { sym: "share ratio", means: "how many times bigger you are than them, today. If you have 97 units and they have 3, you are 32.3 times bigger." },
        { sym: "growth ratio", means: "how much faster they grow than you, each year. Their factor divided by yours." },
        { sym: "ln", means: "the natural logarithm — the `ln` button on any calculator or phone. It answers: *how many times do I have to multiply by this, to get that?* You do not need to know why it works to use it." }
      ],
      use: "Use this the moment somebody in a meeting says *that competitor is tiny, ignore them*. It turns an argument about feelings into a number of years, which is something a budget can respond to. Two rough estimates are enough — the answer is far less sensitive to your guesses than your intuition is.",
      say: "The crossover formula. n equals the natural log of the share ratio, divided by the natural log of the growth ratio.",
      ps: [
        "**Why a logarithm has to appear.** Growth compounds: each year multiplies, it does not add. So the unknown — the number of years — sits up in the exponent, and you cannot get at it by ordinary arithmetic. The logarithm is the tool that brings an exponent down where you can solve for it. That is the whole reason it is here.",
        "**Reading the answer.** Just under ten years. Now notice where the danger actually sits. At year five the substitute has 16 units against your 88 — about one in six, easy to dismiss. And you have four years left, not ten."
      ]},

    { t: "fig", title: "A 3% substitute growing at 40% a year", sketch: true,
      say: "Two lines over twelve years. The incumbent starts at ninety-seven units and drifts gently down at two percent a year, ending near seventy-six. The substitute starts at three units and grows at forty percent a year: it is still only sixteen units at year five, forty-four at year eight, and crosses the incumbent line between year nine and year ten before running away.",
      cap: "The shape is the lesson. For the first five years the substitute line is flat against the axis and every executive who dismisses it is reading the chart correctly. The curve does not change behaviour at year nine — it was always this curve. Only its visibility changes.",
      svg: '<svg viewBox="0 0 680 348" role="img" aria-label="Line chart: a substitute growing 40 per cent a year overtakes a declining incumbent in under ten years">' +
        '<line class="grid-line" x1="48" y1="294" x2="580" y2="294"/>' +
        '<line class="grid-line" x1="48" y1="225.5" x2="580" y2="225.5"/>' +
        '<line class="grid-line" x1="48" y1="157" x2="580" y2="157"/>' +
        '<line class="grid-line" x1="48" y1="88.5" x2="580" y2="88.5"/>' +
        '<line class="grid-line" x1="48" y1="20" x2="580" y2="20"/>' +
        '<text class="ax-label" x="40" y="298" text-anchor="end">0</text>' +
        '<text class="ax-label" x="40" y="229" text-anchor="end">45</text>' +
        '<text class="ax-label" x="40" y="161" text-anchor="end">90</text>' +
        '<text class="ax-label" x="40" y="92" text-anchor="end">135</text>' +
        '<text class="ax-label" x="40" y="24" text-anchor="end">180</text>' +
        '<text class="ax-label" x="20" y="160" text-anchor="middle" transform="rotate(-90 20 160)">units of volume</text>' +
        '<line x1="479.8" y1="20" x2="479.8" y2="294" stroke="var(--gold)" stroke-width="1.4" stroke-dasharray="4 4"/>' +
        '<text class="ax-label" x="474" y="38" text-anchor="end" fill="var(--gold-ink)">crossover, year 10</text>' +
        '<path d="M48 146.3 L92.3 149.3 L136.7 152.2 L181 155 L225.3 157.8 L269.7 160.5 L314 163.2 L358.3 165.8 L402.7 168.4 L447 170.9 L491.3 173.3 L535.7 175.8 L580 178.1" fill="none" stroke="var(--series-1)" stroke-width="2" stroke-linejoin="round"/>' +
        '<path d="M48 289.4 L92.3 287.6 L136.7 285 L181 281.5 L225.3 276.5 L269.7 269.4 L314 259.6 L358.3 245.9 L402.7 226.6 L447 199.7 L491.3 161.9 L535.7 109.1 L580 35.1" fill="none" stroke="var(--series-2)" stroke-width="2" stroke-linejoin="round"/>' +
        '<circle cx="269.7" cy="160.5" r="4" fill="var(--series-1)" stroke="var(--surface)" stroke-width="2"/>' +
        '<circle cx="269.7" cy="269.4" r="4" fill="var(--series-2)" stroke="var(--surface)" stroke-width="2"/>' +
        '<text class="val-label" x="269.7" y="255" text-anchor="middle" fill="var(--ink-3)">16</text>' +
        '<text class="ser-label" x="588" y="182" fill="var(--series-1)">the category</text>' +
        '<text class="ser-label" x="588" y="39" fill="var(--series-2)">the substitute</text>' +
        '<line class="axis-line" x1="48" y1="20" x2="48" y2="294"/>' +
        '<text class="ax-label" x="48" y="314" text-anchor="middle">year 0</text>' +
        '<text class="ax-label" x="181" y="314" text-anchor="middle">3</text>' +
        '<text class="ax-label" x="314" y="314" text-anchor="middle">6</text>' +
        '<text class="ax-label" x="447" y="314" text-anchor="middle">9</text>' +
        '<text class="ax-label" x="580" y="314" text-anchor="middle">12</text>' +
        '<text x="48" y="338" fill="var(--ink-3)" font-size="11">At year 5 the substitute holds one unit in six — and the incumbent has four years left.</text>' +
        '</svg>' },

    { t: "table",
      head: ["Year", "Category (−2%/yr)", "Substitute (+40%/yr)", "Substitute’s share", "How it feels inside the firm"],
      rows: [
        ["0", "97.0", "3.0", "3%", "Not a competitor. A curiosity."],
        ["3", "91.3", "8.2", "8%", "Someone raises it. It is dismissed, correctly, on quality."],
        ["5", "87.7", "16.1", "16%", "A niche. “They serve customers we don’t want.”"],
        ["8", "82.5", "44.3", "35%", "Alarm. A task force. Three years too late to be cheap."],
        ["10", "79.3", "86.8", "52%", "The substitute is the market. You are the alternative."]
      ],
      say: "Year zero: ninety-seven against three, a three percent share. Year three: eight percent. Year five: sixteen percent. Year eight: thirty-five percent. Year ten: fifty-two percent, and the substitute is now the market.",
      cap: "Copy this table. The right-hand column is the part that is not arithmetic, and it is the part that decides outcomes: at every row the firm's reading of the situation is defensible, and at exactly one row — year three or five — acting would still have been cheap." },

    { t: "h2", text: "Two real cases, and how the arithmetic did" },
    { t: "p", text: "A formula you cannot check against reality is a party trick. So here are two substitutions that actually happened, with published numbers. In one the arithmetic was about right. In the other it was wrong in a way worth understanding." },

    { t: "h3", text: "Case one: Blockbuster and Netflix" },
    { t: "p", text: "In 2004 Blockbuster was at its peak: around 9,100 shops, about 84,300 staff, roughly **$6 billion** of revenue. Netflix that year did about **$500 million**, posting DVDs in red envelopes. Blockbuster was twelve times larger." },
    { t: "table",
      head: ["Year", "Blockbuster revenue", "Netflix revenue", "Netflix as % of Blockbuster"],
      rows: [
        ["2004", "$6.0bn", "$0.50bn", "8%"],
        ["2006", "$5.52bn", "$1.00bn", "18%"],
        ["2007", "$5.54bn", "$1.21bn", "22%"],
        ["2008", "$5.29bn", "$1.37bn", "26%"],
        ["2010", "$3.24bn", "$2.16bn", "67%"],
        ["2011", "gone — sold out of bankruptcy for $320m", "$3.2bn", "—"]
      ],
      say: "In 2004 Blockbuster took six billion dollars against Netflix's five hundred million. By 2008 Netflix was at twenty-six percent of Blockbuster. By 2010 it was sixty-seven percent, and Blockbuster filed for bankruptcy that September.",
      cap: "Figures as reported by the two companies and in contemporary coverage. Blockbuster filed for bankruptcy in September 2010 and was sold to Dish Network for $320m in 2011." },
    { t: "math", label: "What the formula said in 2004",
      eqs: [
        "  share ratio   =  6.0bn ÷ 0.50bn                    =  12",
        "  Netflix growth 2004→2008: (1.37 ÷ 0.50)^(1/4)      =  1.285   (+28.5%/yr)",
        "  Blockbuster   2004→2008: (5.29 ÷ 6.00)^(1/4)       =  0.969   (−3.1%/yr)",
        "",
        "  n = ln(12) ÷ ln(1.285 ÷ 0.969) = 2.485 ÷ 0.282  ≈  8.8 years",
        "  → crossover predicted for late 2012 / 2013"
      ],
      say: "The share ratio was twelve. Netflix grew twenty-eight and a half percent a year, Blockbuster shrank three point one percent a year. The formula gives eight point eight years, so a crossover in late twenty-twelve.",
      terms: [
        { sym: "^(1/4)", means: "the fourth root — the average yearly growth factor across four years, rather than the total over four years." }
      ],
      use: "Run this on any pair where you have two revenue figures four or five years apart. You do not need a forecast from anybody; the published accounts are enough.",
      ps: [
        "**What actually happened: Blockbuster filed for bankruptcy in September 2010.** Six years, not nine.",
        "**Why the formula was too kind.** It compares two lines and asks when they cross. It knows nothing about the roughly $1 billion of debt Blockbuster was carrying, or about 9,100 leases that had to be paid whether or not anybody walked in. A company with heavy fixed costs does not survive until the crossover; it fails when the *cash* runs out, which happens earlier — sometimes years earlier.",
        "**The lesson to keep:** the crossover year is a **ceiling on your remaining time, not a promise of it.** If the incumbent is heavily indebted or carries large fixed costs, subtract."
      ]},

    { t: "h3", text: "Case two: Revolut and the high-street banks" },
    { t: "p", text: "Now a case still running, in an industry that looked immovable. In February 2018 Revolut had about **1.5 million customers**. Barclays — one of the largest banks in the United Kingdom — reported **over 48 million customers worldwide** in 2025. In 2018, Barclays was more than thirty times larger by that measure." },
    { t: "table",
      head: ["Date", "Revolut customers", "What was happening on the other side"],
      rows: [
        ["Feb 2018", "1.5m", "Dismissible. An app for travel money."],
        ["Oct 2019", "7m", "Still a niche. Branch closures beginning in earnest."],
        ["Feb 2021", "15m", ""],
        ["Nov 2022", "25m", ""],
        ["Oct 2023", "35m", "Barclays has closed over a thousand branches since 2019."],
        ["Nov 2024", "50m", "Past Barclays' reported worldwide customer count."],
        ["Jan 2026", "70m+", "16 million added in 2025 alone."]
      ],
      say: "Revolut went from one and a half million customers in early twenty-eighteen to fifty million by November twenty twenty-four, and past seventy million by January twenty twenty-six.",
      cap: "Revolut figures as published by the company; Barclays customer count as reported for 2025; UK branch closure counts from industry tracking. Dates are when each milestone was announced." },
    { t: "math", label: "What the formula said in 2018",
      eqs: [
        "  share ratio   =  48m ÷ 1.5m                        =  32",
        "  Revolut growth 2018→2024: (50 ÷ 1.5)^(1/6.75)      =  1.68   (+68%/yr)",
        "  Barclays customer growth: roughly flat             =  1.00",
        "",
        "  n = ln(32) ÷ ln(1.68 ÷ 1.00) = 3.47 ÷ 0.519  ≈  6.7 years",
        "  → crossover predicted for around mid-2024"
      ],
      say: "The share ratio was thirty-two. Revolut grew sixty-eight percent a year against a flat incumbent. The formula gives six point seven years, so a crossover around mid twenty twenty-four.",
      use: "The same two estimates, in an industry where everybody agreed the incumbents could not be touched.",
      ps: [
        "**What actually happened: Revolut passed 50 million customers in November 2024.** The formula was out by a few months across nearly seven years.",
        "**But now be sceptical of your own result.** A Revolut customer and a Barclays customer are not the same thing. Many Revolut accounts are secondary — a card for travel, not a salary account — and revenue per customer differs enormously between the two. On *customers* the crossover happened in 2024. On *deposits*, or on *primary banking relationships*, it plainly has not.",
        "**The lesson to keep:** the formula answers the question you asked it, on the measure you chose. **Choosing the measure is the real work.** A crossover on a flattering metric is how an incumbent reassures itself, and how a challenger over-claims."
      ]},

    { t: "fig", title: "Revolut against a flat incumbent — prediction and outcome", sketch: true,
      say: "Revolut's customer count climbs from one and a half million in twenty-eighteen to seventy million in twenty twenty-six. A flat line marks Barclays at about forty-eight million. The formula, run in twenty-eighteen, predicted the crossing for mid twenty twenty-four; the actual crossing came in late twenty twenty-four.",
      cap: "Revolut's published milestones. Barclays is drawn as a flat reference line at its reported 2025 worldwide customer count — an approximation, since its customer base has not grown at anything like Revolut's rate. The lecture's point does not depend on that line being exact.",
      svg: '<svg viewBox="0 0 680 348" role="img" aria-label="Revolut customer growth crossing a flat incumbent line, with predicted and actual crossover marked">' +
        '<line class="grid-line" x1="52" y1="292" x2="570" y2="292"/>' +
        '<line class="grid-line" x1="52" y1="202" x2="570" y2="202"/>' +
        '<line class="grid-line" x1="52" y1="112" x2="570" y2="112"/>' +
        '<line class="grid-line" x1="52" y1="22" x2="570" y2="22"/>' +
        '<text class="ax-label" x="44" y="296" text-anchor="end">0</text>' +
        '<text class="ax-label" x="44" y="206" text-anchor="end">25m</text>' +
        '<text class="ax-label" x="44" y="116" text-anchor="end">50m</text>' +
        '<text class="ax-label" x="44" y="26" text-anchor="end">75m</text>' +
        '<text class="ax-label" x="18" y="160" text-anchor="middle" transform="rotate(-90 18 160)">customers</text>' +
        '<line x1="52" y1="119.2" x2="570" y2="119.2" stroke="var(--series-1)" stroke-width="2" stroke-dasharray="7 4"/>' +
        '<text class="ser-label" x="578" y="123" fill="var(--series-1)">Barclays ≈48m</text>' +
        '<line x1="472.9" y1="22" x2="472.9" y2="292" stroke="var(--gold)" stroke-width="1.4" stroke-dasharray="4 4"/>' +
        '<text class="ax-label" x="468" y="40" text-anchor="end" fill="var(--gold-ink)">formula said mid-2024</text>' +
        '<line x1="489.1" y1="119.2" x2="489.1" y2="292" stroke="var(--good)" stroke-width="1.4"/>' +
        '<circle cx="489.1" cy="119.2" r="5" fill="var(--good)" stroke="var(--surface)" stroke-width="2"/>' +
        '<text class="ax-label" x="495" y="280" fill="var(--good)">actual, late 2024</text>' +
        '<path d="M58.5 286.6 L168.6 266.8 L252.7 238 L369.3 202 L427.6 166 L498.8 112 L570 40" fill="none" stroke="var(--series-2)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>' +
        '<g fill="var(--series-2)" stroke="var(--surface)" stroke-width="2">' +
        '<circle cx="58.5" cy="286.6" r="4"/><circle cx="168.6" cy="266.8" r="4"/><circle cx="252.7" cy="238" r="4"/>' +
        '<circle cx="369.3" cy="202" r="4"/><circle cx="427.6" cy="166" r="4"/><circle cx="498.8" cy="112" r="4"/><circle cx="570" cy="40" r="4"/>' +
        '</g>' +
        '<text class="val-label" x="58.5" y="277" text-anchor="middle" fill="var(--ink-3)">1.5m</text>' +
        '<text class="ser-label" x="578" y="44" fill="var(--series-2)">Revolut</text>' +
        '<line class="axis-line" x1="52" y1="22" x2="52" y2="292"/>' +
        '<text class="ax-label" x="52" y="312" text-anchor="middle">2018</text>' +
        '<text class="ax-label" x="181.5" y="312" text-anchor="middle">2020</text>' +
        '<text class="ax-label" x="311" y="312" text-anchor="middle">2022</text>' +
        '<text class="ax-label" x="440.5" y="312" text-anchor="middle">2024</text>' +
        '<text class="ax-label" x="570" y="312" text-anchor="middle">2026</text>' +
        '<text x="52" y="338" fill="var(--ink-3)" font-size="11">Run in 2018 on two published numbers, the formula missed the crossing by a few months over seven years.</text>' +
        '</svg>' },

    { t: "write", items: [
      "Blockbuster 2004: $6.0bn and 9,100 shops. Netflix: $0.50bn. Bankrupt September 2010.",
      "Formula said 8.8 years. Reality was 6 — **debt and fixed costs break an incumbent before the crossover**.",
      "Revolut 2018: 1.5m customers against a bank with 48m. Formula said mid-2024. Reality: November 2024.",
      "The crossover year is a **ceiling on your time, not a promise**. Subtract if the incumbent is indebted.",
      "The formula answers the question you asked, on the measure you chose. **Choosing the measure is the real work.**"
    ]},
    { t: "h3", text: "Three: faith in mass production and falling unit costs" },
    { t: "p", text: "The belief that making more, more cheaply, is always the road to profit. Levitt's objection is not that economies of scale are unreal — they are very real — but that they create a gravitational field. A firm that has sunk capital into an efficient plant making a particular thing has enormous, continuous, entirely rational pressure to keep that plant full." },
    { t: "p", text: "The consequence is a reversal of the marketing concept from week one. Instead of finding out what people need and making it, the firm produces what the plant makes efficiently and then goes looking for demand. Every decision downstream — pricing, promotion, channel — becomes a response to the question *how do we shift this output?* rather than *what should we be making?* The firm is selling-oriented not by choice but by capital structure." },

    { t: "h3", text: "Four: preoccupation with a product that lends itself to controlled improvement" },
    { t: "p", text: "The subtlest of the four and the most relevant to well-run modern firms. Research and development produces results that are legible, measurable and attributable: a 5% efficiency gain is a fact, it has an owner, and it can be put on a slide. Customer needs are messy, contested, and resist the same treatment — two competent researchers can look at the same market and disagree." },
    { t: "p", text: "So the firm's attention drifts toward the questions it can answer rather than the questions that matter, and the drift is invisible because every individual decision is defensible. Levitt pressed this further, observing that in technically sophisticated industries the people who rise into general management are the people who did the measurable work — which means the executives least equipped by training to weigh unmeasurable customer questions are exactly the ones who end up deciding them." },
    { t: "p", text: "Notice the implication. This deception does not afflict badly run firms. It afflicts **technically excellent** ones, and the better a firm is at its measurable domain, the stronger the pull. Competence is itself a risk factor." },

    { t: "h2", text: "Defining the business: a method, not a slogan" },
    { t: "p", text: "Levitt's prescription is to define the business by the customer function it performs rather than the product it makes. Written as a pair of columns, the difference looks trivial. It is not: the two columns produce different competitor lists, different investment cases, and different answers to what counts as an opportunity." },
    { t: "table",
      head: ["Firm", "Product definition (myopic)", "Market definition (customer function)", "What the second column adds to the competitor list"],
      rows: [
        ["Railroad", "We run trains", "We move people and goods reliably over land", "Lorries, coaches, pipelines, and eventually the telephone"],
        ["Film studio", "We make films", "We provide entertainment", "Television, and every later screen"],
        ["Drill maker", "We make drills", "We help people make holes — and hang shelves", "Adhesive fixings, flat-pack furniture, a handyman service"],
        ["Newspaper", "We print a paper", "We tell you what matters today, from a source you trust", "Every feed, aggregator and newsletter"],
        ["University", "We deliver lectures", "We build capability and certify it credibly", "Professional certification, bootcamps, employer training"],
        ["Cosmetics firm", "We make lipstick", "We sell confidence in how you are seen", "Cosmetic procedures, clothing, filters on a camera app"]
      ],
      say: "Six firms defined twice. The right-hand column adds competitors that never appear in a market-share report: for the railroad, lorries and pipelines; for the drill maker, adhesive fixings and flat-pack furniture; for the university, professional certification and employer training.",
      cap: "The fourth column is the point of the exercise. A market definition is only doing work if it puts a name on the list that the product definition could not see." },
    { t: "p", text: "The classic teaching example deserves one more step than it usually gets. People do not want a quarter-inch drill; they want a quarter-inch hole. But they do not want the hole either — they want the shelf on the wall, and beneath that they want a room that is not a mess. Each step back widens the competitive set: at holes, adhesive strips compete; at shelving, flat-pack units and a handyman; at an ordered room, a storage box that needs no wall at all. **Step back until the list contains something that frightens you, then stop.**" },

    { t: "h2", text: "Abell’s three dimensions" },
    { t: "p", text: "Derek Abell gave the field a more disciplined instrument in 1980, and it is the version worth actually using because it separates what should stay fixed from what should not." },
    { t: "ul", items: [
      "**Customer groups — who is served.** Which people or organisations, named specifically enough that you could count them.",
      "**Customer functions — what need is met.** Which job the offering performs. This is the *durable* axis: people have wanted to be moved, warmed, entertained and thought well of for as long as there are records.",
      "**Technologies — how it is performed.** By what means. This is the *volatile* axis, and it turns over completely within a career."
    ]},
    { t: "p", text: "Stated that way, marketing myopia has a one-line definition: **anchoring the firm's identity on the volatile axis.** A firm that is *a railroad* has tied itself to a technology. A firm that *moves goods over land* has tied itself to a function and is free to change how." },

    { t: "fig", title: "Abell’s three dimensions, and where myopia happens", sketch: true,
      say: "Three axes from a single origin. Customer groups asks who is served. Customer functions asks what need is met — the durable axis. Technologies asks how — the volatile axis. A business is a chosen region across all three. Myopia is holding the technology axis fixed and letting the function axis drift away to somebody else's technology.",
      cap: "Draw this, then place your own employer on all three axes. The diagnostic question: if the firm had to abandon one axis to survive, which would it defend? An answer of *the technology* is the finding.",
      svg: '<svg viewBox="0 0 680 300" role="img" aria-label="Three axes of business definition: customer groups, customer functions, technologies">' +
        '<defs><marker id="ahAb4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink-3)"/></marker></defs>' +
        '<line x1="250" y1="208" x2="250" y2="44" stroke="var(--ink-3)" stroke-width="1.5" marker-end="url(#ahAb4)"/>' +
        '<line x1="250" y1="208" x2="628" y2="208" stroke="var(--good)" stroke-width="1.8" marker-end="url(#ahAb4)"/>' +
        '<line x1="250" y1="208" x2="72" y2="272" stroke="var(--bad)" stroke-width="1.8" marker-end="url(#ahAb4)"/>' +
        '<text x="258" y="38" fill="var(--ink)" font-size="12.5" font-weight="600">CUSTOMER GROUPS</text>' +
        '<text x="258" y="55" fill="var(--ink-3)" font-size="11">who is served?</text>' +
        '<text x="628" y="230" text-anchor="end" fill="var(--good)" font-size="12.5" font-weight="600">CUSTOMER FUNCTIONS</text>' +
        '<text x="628" y="247" text-anchor="end" fill="var(--ink-3)" font-size="11">what need is met? — durable, anchor here</text>' +
        '<text x="66" y="290" fill="var(--bad)" font-size="12.5" font-weight="600">TECHNOLOGIES</text>' +
        '<text x="66" y="256" fill="var(--ink-3)" font-size="11">how? — volatile, never anchor here</text>' +
        '<circle cx="250" cy="208" r="5" fill="var(--accent)"/>' +
        '<rect x="316" y="96" width="212" height="78" rx="5" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/>' +
        '<text x="422" y="122" text-anchor="middle" fill="var(--accent-ink)" font-size="12.5" font-weight="600">The business</text>' +
        '<text x="422" y="141" text-anchor="middle" fill="var(--ink-2)" font-size="11">a chosen region across</text>' +
        '<text x="422" y="157" text-anchor="middle" fill="var(--ink-2)" font-size="11">all three dimensions</text>' +
        '<path d="M316 135 L262 198" stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="3 3"/>' +
        '</svg>' },

    { t: "h2", text: "The case against Levitt" },
    { t: "p", text: "A course that presented this article as settled truth would be doing you a disservice. Levitt's advice, followed literally, has destroyed a great deal of value, and the objections are serious enough that you should be able to state them as well as you state the argument." },

    { t: "h3", text: "Objection one: hyperopia" },
    { t: "p", text: "If myopia is defining the business too narrowly, the opposite error is defining it so broadly that the definition constrains nothing. *We are in the business of human connection. We are in the mobility business. We are a technology company.* Each is true of thousands of firms and therefore tells nobody what to do on Monday." },
    { t: "p", text: "There is a worse version, in which the firm believes the broad definition and *acts* on it. The 1960s and 1970s produced a wave of conglomerates assembled on exactly this logic — a railroad that concludes it is in transportation may buy an airline, having no relevant capability whatsoever, and a decade later both businesses are worse. Richard Rumelt's formulation is the one to carry: a statement that forbids nothing decides nothing." },
    { t: "p", text: "So there is a test, and it is short: **does the definition rule anything out?** *We move people and goods reliably over land* rules out an airline while still admitting lorries. That is a usable definition. *We are in transportation* is a mood." },

    { t: "h3", text: "Objection two: the firm is a bundle of capabilities, not only a servant of needs" },
    { t: "p", text: "Levitt reasons from the customer inward. A whole tradition in strategy reasons from the firm outward: Wernerfelt's resource-based view of the firm in 1984, and most famously Prahalad and Hamel's argument in 1990 that a corporation is better understood as a portfolio of **core competences** than as a portfolio of businesses." },
    { t: "p", text: "On that account, what a firm should do next is governed by what it is distinctively good at — capabilities that are valuable, rare, hard to imitate and applicable across several markets. A firm that abandons its technology to chase a customer function it has no ability to serve has not escaped myopia; it has merely found a more expensive way to fail." },
    { t: "p", text: "Both views are partial and the failure modes are mirror images. Pure Levitt gives you a firm chasing needs it cannot meet. Pure resource-based view gives you a firm with superb capabilities in a market that is disappearing — a company that makes the world's finest mechanical typewriter." },
    { t: "p", text: "**The synthesis is the intersection.** Define the business as the customer function you serve *and* have a distinctive capability to serve. Function alone is hyperopia. Capability alone is myopia wearing a better suit. The intersection is narrow enough to rule things out, wide enough to survive a technology turning over, and it is where a usable business definition lives." },

    { t: "h3", text: "Objection three: timing" },
    { t: "p", text: "The myopia framework tells you a substitute is coming. It does not tell you when, and being early is operationally identical to being wrong. A firm that abandons a profitable business a decade before the substitute arrives has destroyed a decade of earnings to avoid a threat its successors would have had time to handle." },
    { t: "p", text: "This is why the arithmetic earlier in the lecture is not a decoration. The value of computing a crossover year — however rough — is that it converts *a threat exists* into *we have roughly six years*, and six years is a plannable quantity in a way that dread is not." },

    { t: "h2", text: "The myopia test, in five steps" },
    { t: "p", text: "This takes about half an hour and it is worth doing on your own employer. It produces a competitor list the firm's own reports do not contain." },
    { t: "ol", items: [
      "Write the firm's business as a **product definition**, in the words used internally. Not the website's words — the words used in a Tuesday meeting.",
      "Write it as a **function definition**: what job is the customer hiring this for? Push back one step further than feels natural, then stop before it becomes a platitude. Apply the rules-something-out test.",
      "List every way that function could be performed **without your product category**. Include ways that are currently bad, expensive or embarrassing. These are the real competitors and most will not be in any share report.",
      "For each one, ask what would have to become true for it to take a tenth of your customers: a price fall, a regulation, a habit change, one generation. Then estimate the two numbers and **compute the crossover year**.",
      "Check which of those conditions are **already moving** in that direction. Those are not risks. They are forecasts, and they belong in a budget rather than in a risk register."
    ]},
    { t: "p", text: "Step five is where the exercise earns its keep. Myopia is rarely a failure of imagination — ask any executive to name the thing that might replace them and most can. It is the failure to treat a visible trend as real, because the firm's structure, its incentives, its sunk assets and its best customers all argue for discounting it. The remedy is not more insight. It is writing the number down where somebody has to look at it again next year." },

    { t: "h2", text: "What you should be able to do now" },
    { t: "p", text: "You can state Levitt's argument including the growth-industry claim that most summaries lose. You can name the four self-deceptions and recognise which one a given firm is running. You can turn a vague substitution worry into a year, on an envelope, with two estimates. You can define a business on three axes and test the definition by what it forbids. And you can argue the other side — hyperopia, capabilities, timing — which is the difference between having learned the article and having been taught it." },
    { t: "p", text: "Next lecture closes week one with the marketing mix: the four Ps, the three that services added, the four Cs that turned the whole thing around to face the customer, and the question of whether a mnemonic from 1960 is still the right way to organise the work." }
  ],
  exercises: [
    { task: "**Decompose somebody else's growth.** Pick any listed company — a bank is a good choice, since they all publish detailed annual reports — and find revenue for two years five years apart. Then find how much the population or the market grew over the same period. Split the growth into: market got bigger, customers spent more, and the residual the company itself caused. Write the three numbers.",
      hint: "Annual reports are free on any listed company's investor-relations page, and Statistics Estonia publishes population and income series. You are not guessing — you are reading two public documents." },
    { task: "**Run the crossover arithmetic.** A category holds 90 units; a substitute holds 10 and grows 25% a year while the category shrinks 1% a year. Compute the crossover year with `n = ln(share ratio) / ln(growth ratio)`. Then redo it with the substitute growing at 15%, and note how far the answer moved.",
      hint: "The second calculation is the important one. It shows how sensitive the conclusion is to the estimate you are least sure about — which tells you whether refining that estimate is worth any effort." },
    { task: "**Define one business three ways.** Take the company you are watching and write its business as (a) a product definition, (b) a function definition — the job the customer is hiring it for, (c) a hyperopic definition so broad it forbids nothing. For (b), list at least four competitors that (a) cannot see.",
      hint: "If you cannot write a convincing (c), you have not made (b) narrow enough to be safe from it." },
    { task: "**Find the anchor.** Place your company on Abell's three axes — who it serves, what job it does, by what means. Then answer: if it had to give up one axis to survive, which would it defend? Support it with one thing the company has actually *done*, not something it says.",
      hint: "Evidence you can see from outside: what it has opened or closed, what it advertises hardest, what it has stopped selling, who it has hired (job adverts are public and unusually honest)." },
    { task: "**Argue the other side.** In no more than 200 words, make the strongest case that your company should *not* redefine itself along customer-function lines — that its distinctive capability is tied to how it does things today, and abandoning that would destroy value.",
      hint: "This is the resource-based view in practice. If you cannot make this argument, you will over-apply Levitt, which is the more expensive of the two errors." }
  ],
  reading: [
    { author: "Theodore Levitt", work: "Marketing Myopia", where: "Harvard Business Review", year: 1960,
      note: "The primary source, and short. Read it rather than a summary — the petroleum section and the growth-industry claim are both routinely dropped from second-hand accounts." },
    { author: "Theodore Levitt", work: "Marketing Myopia (with retrospective commentary)", where: "Harvard Business Review", year: 1975,
      note: "Levitt reissued the article fifteen years later with his own commentary on how it had been used and misused. The commentary is the best short answer to the hyperopia objection." },
    { author: "Derek F. Abell", work: "Defining the Business: The Starting Point of Strategic Planning", where: "Prentice-Hall", year: 1980,
      note: "Where the three dimensions come from. Dense, and the first two chapters carry most of the value." },
    { author: "C. K. Prahalad and Gary Hamel", work: "The Core Competence of the Corporation", where: "Harvard Business Review", year: 1990,
      note: "The strongest counterweight to Levitt: define the firm by what it is distinctively able to do. Read it directly after the 1960 article and hold both." },
    { author: "Clayton M. Christensen", work: "The Innovator's Dilemma", where: "Harvard Business School Press", year: 1997,
      note: "Why competent firms miss substitutes even when they can see them — the mechanism Levitt described but did not explain." },
    { author: "Richard P. Rumelt", work: "Good Strategy / Bad Strategy", where: "Crown Business", year: 2011,
      note: "The chapters on fluff and on bad strategic objectives are the antidote to definitions that rule nothing out." }
  ],
  glossary: [
    { term: "Marketing myopia", def: "Defining a business by the product it makes rather than the customer function it serves, so that substitutes from outside the category stay invisible until it is too late to respond cheaply." },
    { term: "Growth-industry fallacy", def: "The belief that growth is a property of the industry rather than something firms create. Levitt's central claim is that there are no growth industries, only firms organised to create growth." },
    { term: "Product definition", def: "A statement of what the firm makes. Narrow, comfortable, and blind to substitution." },
    { term: "Market definition", def: "A statement of the customer function the firm performs. Produces a wider competitor list and a different investment logic." },
    { term: "Marketing hyperopia", def: "The opposite error: a definition so broad it rules nothing out, licensing entry into markets where the firm has no advantage." },
    { term: "Abell's three dimensions", def: "Customer groups (who), customer functions (what need), technologies (how). Function is durable; technology is volatile." },
    { term: "Crossover year", def: "The year a growing substitute overtakes a declining incumbent: n = ln(share ratio) / ln(growth ratio)." },
    { term: "Core competence", def: "A capability that is valuable, rare, hard to imitate and applicable across several markets — Prahalad and Hamel's unit of strategic analysis." },
    { term: "Resource-based view", def: "The tradition that explains firm performance by the resources and capabilities it controls, reasoning from the firm outward rather than from the customer inward." },
    { term: "Disruptive innovation", def: "Christensen's account of a substitute that enters below the incumbent on the dimensions existing customers value, and improves until it takes the market." }
  ],
  quiz: [
    { id: "w01l04q1", concept: "myopia", type: "mcq",
      q: "What did Levitt actually argue was the cause of the American railroads’ decline?",
      options: [
        "Demand for transportation fell as car ownership rose",
        "They defined themselves as being in the railroad business rather than the transportation business",
        "They failed to invest in improving locomotive technology",
        "Government regulation prevented them from competing on price"
      ],
      answer: 1,
      explain: "Levitt’s specific and counter-intuitive point is that demand *grew*. The failure was one of self-definition: a firm that understands itself by its product cannot see a substitute that performs the same function by other means. Option C is close to one of the four self-deceptions — preoccupation with product improvement — but it is a symptom, not the cause." },

    { id: "w01l04q2", concept: "biz-definition", type: "mcq",
      q: "Which of these is a *market* definition rather than a product definition?",
      options: [
        "We manufacture high-efficiency gas boilers",
        "We keep homes warm affordably",
        "We are a technology company",
        "We are the leading boiler brand in the Baltics"
      ],
      answer: 1,
      explain: "Option B names the customer function and admits substitutes — heat pumps, insulation, district heating — as genuine competitors. Option A is a product definition. Option D is a market *position* claim, not a definition of the business. Option C is the hyperopic trap: true of almost any firm, and therefore useless as a guide to action." },

    { id: "w01l04q3", concept: "hyperopia", type: "mcq",
      q: "A firm redefines itself as “in the business of human connection”. What is the principal danger?",
      options: [
        "It will be seen as insincere by customers",
        "The definition rules nothing out, so it guides no decision and may license entry into markets where the firm has no advantage",
        "It is too narrow to capture substitutes",
        "Competitors will copy the positioning"
      ],
      answer: 1,
      explain: "This is hyperopia. The test of a usable definition is whether it forbids anything: a definition that admits every possible action is a mood, not a strategy. The harder version of the failure is when the firm believes it and acts — acquiring businesses where none of its actual capabilities apply." },

    { id: "w01l04q4", concept: "abell", type: "multi",
      q: "Which are Abell’s three dimensions for defining a business? Select all that apply.",
      options: ["Customer groups", "Customer functions", "Competitive intensity", "Technologies", "Geographic scope"],
      answer: [0, 1, 3],
      explain: "Groups (who), functions (what need) and technologies (how). Geography is usually treated as a qualifier on customer groups rather than a fourth axis, and competitive intensity is an output of the definition, not part of it. The reason the three axes are more useful than Levitt’s binary is that they separate the durable dimension — function — from the volatile one — technology." },

    { id: "w01l04q5", concept: "substitutes", type: "short",
      q: "A company manufactures physical padlocks for bicycles. Run steps 2 and 3 of the myopia test: state the function definition and list at least four substitutes from outside the padlock category.",
      must: [{"point": "function = confidence the bike will still be there", "any": ["not lost", "still be there", "theft", "secure", "confidence", "protect"]}, {"point": "trackers or recovery services", "any": ["track", "gps", "recover"]}, {"point": "insurance", "any": ["insur"]}, {"point": "secure parking or infrastructure", "any": ["parking", "cage", "locker", "rack", "storage", "garage"]}, {"point": "bike sharing removes ownership altogether", "any": ["shar", "rental", "rent", "hire", "subscription bike", "do not own"]}],
      answer: "**Function:** we let a cyclist leave a bicycle unattended without losing it — that is, we supply confidence against theft, not metal. **Substitutes outside the category:** GPS trackers and recovery services; insurance policies that make theft a financial rather than a practical problem; secure parking infrastructure — locked cages, staffed racks, station lockers; bicycle-sharing schemes, which remove the need to own and therefore to secure a bicycle at all; frame-integrated electronic immobilisers; component design that makes a stolen bicycle hard to resell, such as serialised registration databases. Each of these performs the function without a padlock, and none would appear in a padlock manufacturer’s market-share report.",
      explain: "Note that bicycle-sharing is the most dangerous item on the list, because it removes the customer rather than the sale — and it is the one least likely to be noticed by a firm that monitors padlock competitors." },

    { id: "w01l04q6", concept: "myopia", type: "multi",
      q: "Which were among Levitt’s four self-deceptions that produce myopia? Select all that apply.",
      options: [
        "The belief that a growing population guarantees growing demand",
        "The belief that there is no competitive substitute for the industry’s product",
        "The belief that customers are loyal to brands they trust",
        "Excessive faith in mass production and volume-driven cost reduction",
        "Preoccupation with a product that lends itself to controlled improvement"
      ],
      answer: [0, 1, 3, 4],
      explain: "Loyalty was not one of the four — it belongs to a later literature, and week four will show it is largely a myth anyway. The fourth deception is the subtlest: R&D gets prestige because its results are measurable, so a technically excellent firm drifts toward the questions it can answer rather than the ones that matter. Competence in a measurable domain is itself a risk factor." },

    { id: "w01l04q7", concept: "biz-definition", type: "mcq",
      q: "The drill-and-hole example is used to show that:",
      options: [
        "Customers are poor at describing what they want",
        "Defining the business by the customer’s job reveals competitors outside the product category",
        "Product features matter less than price",
        "Firms should always broaden their product range"
      ],
      answer: 1,
      explain: "The analytical payoff is the expanded competitive set: at the level of holes, adhesive strips compete; at the level of shelving, flat-pack furniture and a handyman; at the level of a tidy room, storage that needs no wall. Option A is true of customers generally but is the lesson of a different topic — and option D is the hyperopic misreading, since nothing here recommends making more products." },

    { id: "w01l04q8", concept: "abell", type: "mcq",
      q: "On Abell’s axes, which dimension should a firm expect to be most volatile over time, and what follows?",
      options: [
        "Customer groups — so the firm should keep changing whom it serves",
        "Customer functions — so the firm should keep redefining the need",
        "Technologies — so the firm should anchor its identity on function, not on means",
        "All three change at similar rates, so none should anchor identity"
      ],
      answer: 2,
      explain: "Functions are durable — people have wanted to be moved, entertained and reassured for as long as there are records. Technologies turn over. A firm that anchors its identity on the technology axis is holding the one thing guaranteed to be replaced, which is the precise mechanism of myopia." },

    { id: "w01l04q9", concept: "substitutes", type: "mcq",
      q: "In the five-step myopia test, which step most often distinguishes firms that survive substitution from those that do not?",
      options: [
        "Writing the product definition accurately",
        "Naming the possible substitutes",
        "Checking which enabling conditions are already trending",
        "Estimating each substitute’s market share"
      ],
      answer: 2,
      explain: "Most executives can name the substitute — myopia is rarely a failure of imagination. It is the failure to treat an already-visible trend as real, because the firm’s structure, incentives and sunk assets all argue for discounting it. Step five converts a risk into a forecast, and that is the step that gets skipped." },

    { id: "w01l04q15", concept: "substitutes", type: "short",
      q: "Explain what each part of `n = ln(share ratio) / ln(growth ratio)` means, and say why a logarithm has to appear at all.",
      must: [{"point":"n is the number of years until they overtake you","any":["year","how long","time until","n is"]},
             {"point":"share ratio = how many times bigger you are today","any":["how many times bigger","your units divided","ratio of size","divide","times larger"]},
             {"point":"growth ratio = their growth factor divided by yours","any":["growth factor","divided by","their growth over","rate divided"]},
             {"point":"a growth factor is 1 + the rate (1.40, 0.98)","any":["1 +","one plus","1.4","0.98","factor of"]},
             {"point":"the log is needed because the unknown is an exponent","any":["exponent","power","compound","multipl","raised to","brings it down"]}],
      answer: "**n** is the answer: the number of years until the substitute overtakes you. The **share ratio** is how many times bigger you are than them right now — your units divided by theirs, so 97 against 3 gives 32.3. The **growth ratio** is how much faster they grow than you each year: their growth factor divided by yours. A **growth factor** is one plus the growth rate, so growing 40% a year is a factor of 1.40 and shrinking 2% a year is 0.98 — you multiply by the factor once per year. **ln** is the natural logarithm, the `ln` button on any calculator. It has to appear because growth **compounds**: each year multiplies rather than adds, so the unknown — the number of years — sits up in the exponent, and no amount of ordinary arithmetic will get it down. The logarithm is exactly the tool that brings an exponent down to where you can solve for it.",
      explain: "You do not need to understand how logarithms are built to use one correctly, but you do need to know *why* it is the right tool here: whenever the unknown is an exponent, a logarithm is how you get at it. That single sentence covers compound interest, loan repayment and population growth as well." },

    { id: "w01l04q16", concept: "substitutes", type: "mcq",
      q: "A competitor is shrinking 4% a year. What is its growth factor?",
      options: ["−4", "0.04", "0.96", "1.04"],
      answer: 2,
      explain: "A growth factor is **1 + the rate**, so −4% gives 1 − 0.04 = **0.96**. You multiply by it once per year: after three years the size is the original × 0.96³ = 0.885, a fall of about 11.5%. Getting this one wrong is the single most common arithmetic slip in the whole calculation, because the minus sign tempts you to subtract instead of multiply." },

    { id: "w01l04q17", concept: "myopia", type: "short",
      q: "Define marketing myopia in your own words, without using the words “narrow” or “short-sighted”. Then say what the firm loses the ability to do.",
      must: [{"point":"defining the business by the product it makes","any":["product","what it makes","what they make","what it sells","the thing it produces"]},
             {"point":"rather than by the customer need or job","any":["need","job","function","what the customer wants","problem the customer"]},
             {"point":"it loses the ability to see substitutes from outside the category","any":["substitut","outside","different","other way","other categor","cannot see","invisible","does not notice"]}],
      answer: "Marketing myopia is defining your business by **the product you make** instead of by **the job the customer is hiring you to do**. A firm that understands itself as a maker of a particular thing can only recognise competitors who make that same thing. What it loses is the ability to **see substitutes arriving from outside its own category** — a different technology, a different industry, a way of meeting the same need that its market-share reports do not contain. It does not lose a fight for those customers; it never registers that there was one, until the market has already moved.",
      explain: "Being forced off the obvious words is the point: it is easy to repeat “too narrow” without knowing what is narrow about what. The definition has to name what is being substituted for what — product for customer function." },

    { id: "w01l04q11", concept: "growth-fallacy", type: "mcq",
      q: "Levitt wrote that “there is no such thing as a growth industry”. What is the operational consequence of taking that seriously?",
      options: [
        "Firms should avoid industries described as high-growth, since the label attracts competitors",
        "Growth in a booming market is not evidence of success, because it may be entirely the market's",
        "Industry growth rates are unreliable and should not be forecast",
        "Firms should diversify out of any single industry"
      ],
      answer: 1,
      explain: "The claim relocates growth from the environment to the firm. If growth is something firms create rather than something industries have, then rising revenue in a rising market tells you nothing until you have decomposed it — and the residual after population and income growth is the only part that is actually yours. A firm that cannot point to that residual is coasting, and coasting is invisible until the tide turns." },

    { id: "w01l04q12", concept: "substitutes", type: "num",
      q: "A category holds 80 units and shrinks 2% a year. A substitute holds 5 units and grows 30% a year. In roughly how many years does the substitute overtake the category? Give the answer to the nearest whole year.",
      answer: 9, tol: 0.6, unit: "years",
      placeholder: "e.g. 7",
      explain: "n = ln(80/5) ÷ ln(1.30/0.98) = ln(16) ÷ ln(1.3265) = 2.773 ÷ 0.2824 ≈ **9.8**, so about ten years — but nine is within tolerance and the point is the order of magnitude, not the decimal. Sanity-check it: at year 5 the substitute is 5 × 1.3⁵ ≈ 18.6 against the category's 72 — still under a quarter, still easy to dismiss, and only four years of room left." },

    { id: "w01l04q13", concept: "capability", type: "mcq",
      q: "A precision-optics manufacturer concludes it is really in “the business of helping people see”, and on that basis enters consumer eyewear retail, where it has no distribution, no brand and no retail experience. Which diagnosis fits best?",
      options: [
        "Correct application of Levitt: the function definition widened the opportunity",
        "Marketing myopia: it stayed too close to its existing technology",
        "Hyperopia compounded by ignoring the resource-based view: a function it cannot distinctively serve",
        "Synchromarketing: it moved demand into a trough"
      ],
      answer: 2,
      explain: "The definition is broad enough to license the move and does not rule anything out, which is hyperopia; and the move ignores the question the resource-based view exists to ask — what are we distinctively able to do? The synthesis in the lecture is the intersection: the customer function you serve **and** have a distinctive capability to serve. Function alone produces exactly this failure, and it is the more expensive of the two errors because it spends capital rather than merely missing an opportunity." },

    { id: "w01l04q14", concept: "capability", type: "short",
      q: "State the synthesis between Levitt's customer-function view and the resource-based view, and give the failure mode of each taken alone.",
      must: [{"point": "synthesis = the intersection of function and capability", "any": ["intersect", "both", "overlap", "and have", "combination", "where they meet"]}, {"point": "Levitt alone chases needs it cannot serve", "any": ["cannot serve", "no advantage", "chasing", "cannot meet", "no capability", "destroy"]}, {"point": "capability alone leaves you excellent in a dying market", "any": ["dying", "disappear", "typewriter", "shrink", "obsolete", "no longer want"]}],
      answer: "**The synthesis:** define the business as the customer function you serve *and* have a distinctive capability to serve — the intersection of the two, which is narrow enough to rule options out and wide enough to survive a technology turning over. **Levitt alone** reasons from the customer inward and produces a firm chasing needs it has no ability to meet: the definition licenses entry into markets where it holds no advantage, and capital is destroyed. **The resource-based view alone** reasons from the firm outward and produces superb capabilities aimed at a disappearing market — the company making the world's finest mechanical typewriter. The two failures are mirror images, which is why holding only one of the frameworks is worse than holding both loosely.",
      explain: "Examiners reward the mirror-image structure. The commonest weak answer states the synthesis and then describes only Levitt's failure mode, because the resource-based failure is less famous — but it is the one that afflicts technically excellent firms, which are the ones most likely to employ you." },

    { id: "w01l04q10", concept: "hyperopia", type: "short",
      q: "Give the one-line test for whether a business definition is usable, and apply it to “we are in the transportation business” as a definition for a regional railway.",
      must: [{"point": "the test is whether it rules anything out", "any": ["rule", "forbid", "exclude", "rules out", "excludes", "says no"]}, {"point": "transportation is too broad for a regional railway", "any": ["too broad", "too wide", "admits airline", "anything", "vague"]}, {"point": "a usable narrower version, e.g. over land in this region", "any": ["over land", "by land", "region", "ground", "rail and road", "lorr", "coach"]}],
      answer: "The test: **does the definition rule anything out?** A definition that forbids nothing decides nothing. Applied to “we are in the transportation business”, the answer is barely — it admits airlines, shipping, ride-hailing and freight forwarding, in none of which a regional railway has any advantage, so it licenses value-destroying entry. A usable version narrows it until the firm’s actual capabilities still bind: *we move people and goods reliably over land in this region*. That still rules out running an airline, still admits coaches and lorries as both substitutes and possible extensions, and is therefore both wide enough to see the threat and narrow enough to direct investment.",
      explain: "This question is the corrective to the usual teaching of Levitt, which stops at “define yourself broadly” and produces exactly the hyperopic definitions that destroyed conglomerates in the 1970s." }
  ]
},

/* ============================================================
   1.5  The mix: 4Ps, 7Ps and the 4Cs
   ============================================================ */
"w01l05": {
  standfirst: "A framework from 1960 that has survived every attempt to kill it. The four Ps are the decision surface of marketing — the levers you actually hold — and the single most important thing about them is not what each one contains but whether they agree with each other.",
  objectives: [
    "List the four Ps and the principal decisions under each.",
    "Explain why internal consistency of the mix matters more than the excellence of any single element.",
    "State what services marketing added in the extended 7Ps, and why.",
    "Map the 4Ps onto Lauterborn’s 4Cs and say what the reframing is for.",
    "Give three serious criticisms of the mix as a framework, and the defence."
  ],
  concepts: [
    { id: "four-ps",     name: "The four Ps" },
    { id: "mix-consist", name: "Internal consistency of the mix" },
    { id: "seven-ps",    name: "The extended 7Ps" },
    { id: "four-cs",     name: "The 4Cs reframing" },
    { id: "mix-critique",name: "Criticisms of the mix" }
  ],
  blocks: [
    { t: "h2", text: "Where the four Ps came from" },
    { t: "p", text: "In the late 1940s Neil Borden, at Harvard, began describing the marketing manager as a *mixer of ingredients* — someone who combines elements into a recipe rather than pulling a single lever. His own list ran to twelve items and nobody could remember it." },
    { t: "p", text: "In 1960 Jerome McCarthy compressed Borden's twelve into four alliterative categories, and that compression is why you have heard of it. **Product, price, place, promotion.** It is not a theory. It is a mnemonic for a checklist, and it has outlived every more sophisticated scheme proposed since, because it is short enough to use under pressure and complete enough to catch the things people forget." },
    { t: "p", text: "The four are the firm's **controllable** variables. That is the organising idea. PESTEL, which we meet next week, covers what you cannot control; the mix covers what you can. Everything a marketer actually *decides* lands in one of the four boxes." },

    { t: "table",
      head: ["The P", "What it covers", "The decisions you actually make"],
      rows: [
        ["**Product**", "The offering itself, tangible or not", "Features and quality level · design · variants and range breadth · branding and naming · packaging · warranty · support and service level · what to discontinue"],
        ["**Price**", "What the customer gives up, and how", "List price · discount structure · allowances · payment terms and credit · subscription vs one-off · price architecture across the range · psychological framing"],
        ["**Place**", "Getting it to where the customer is", "Channel type and length · coverage and intensity · retail partners · inventory and stock levels · logistics · territory · online, physical, or both"],
        ["**Promotion**", "Making it known and understood", "Advertising · public relations · sales promotion · personal selling · direct and digital · message and creative · media choice · budget and weight · timing"]
      ],
      say: "The four Ps and their decisions. Product covers features, quality, design, range, branding, packaging, warranty and service. Price covers list price, discounts, allowances, payment terms and price architecture. Place covers channel type, coverage, retail partners, inventory, logistics and territory. Promotion covers advertising, PR, sales promotion, personal selling, direct marketing, message, media, budget and timing.",
      cap: "Copy this table into your notebook and keep it. Nine tenths of practical marketing work is a decision that belongs in one of these twelve cells, and being able to say *which* cell is most of the skill in the first year of a career."
    },

    { t: "h2", text: "The thing about the mix that most courses bury" },
    { t: "p", text: "Here is the point of the whole lecture, and it is not in the list." },
    { t: "p", text: "**The mix must be internally consistent.** The four Ps are not four independent optimisation problems. They are four statements about the same thing, and if they contradict each other the customer notices — not consciously, and not in words, but as a feeling that something is off. That feeling kills more products than bad execution does." },
    { t: "p", text: "A premium product at a premium price, sold in a discount warehouse, advertised with a coupon: every element might be individually defensible and the combination is incoherent. The price says *this is fine*, the place says *this is cheap*, the promotion says *we are desperate*. A customer standing in front of it cannot articulate the contradiction and does not need to; they simply do not believe the proposition." },
    { t: "p", text: "This is why the mix is better understood as a **sentence** than a checklist. Product is the noun, price is the claim about worth, place is the setting, promotion is the tone of voice. Sentences can be grammatical or not." },

    { t: "table",
      head: ["Element", "Budget hotel — coherent", "Boutique hotel — coherent", "Incoherent mix"],
      rows: [
        ["Product", "Clean, small, consistent, no restaurant, self check-in", "18 rooms, designed, local materials, a real bar", "18 designed rooms, a real bar"],
        ["Price", "€49, non-refundable, pay online", "€210, flexible, includes breakfast", "€79, non-refundable, pay online"],
        ["Place", "Motorway junctions, airports, booking aggregators", "Own site, one curated platform, direct phone", "Discount aggregators, deal-of-the-day sites"],
        ["Promotion", "Price-led search ads, loyalty points, aggregator ranking", "Design press, photography, word of mouth, no discounting", "Flash-sale emails, 40% off banners"],
        ["What the customer concludes", "Predictable and cheap. Exactly as promised.", "Special, considered, worth it.", "Why is a beautiful hotel this desperate? What is wrong with it?"]
      ],
      say: "Three mixes compared. The budget hotel and the boutique hotel are each internally consistent. The third column has a boutique product priced and distributed like a budget one, and the customer concludes that something must be wrong with it.",
      cap: "The third column is not a bad hotel. It is a good hotel with a mix that argues with itself — and the customer resolves the contradiction by assuming the *product* claim is the false one, because price and distribution are harder to fake."
    },

    { t: "warn", title: "Which element does the customer believe?", ps: [
      "When the mix contradicts itself, customers do not split the difference. They decide which element is lying, and they almost always decide it is the product claim — because anyone can *say* their product is excellent, while a price and a distribution channel are costly commitments that are harder to fake.",
      "The practical rule that follows: **price and place are your loudest statements about quality, and they are the ones you cannot take back cheaply.** A premium brand that discounts deeply has not run a promotion; it has published a revised opinion of itself. Week ten returns to this with the arithmetic."
    ]},

    { t: "h2", text: "The extended mix: 7Ps" },
    { t: "p", text: "In 1981 Bernard Booms and Mary Jo Bitner argued that the four Ps had been built for physical goods and broke down for services, where the product is produced and consumed at the same moment, by people, in front of the customer. They added three." },
    { t: "ul", items: [
      "**People.** In a service, the staff *are* part of the product. The same haircut from two barbers is not the same service. This P covers recruitment, training, scripting, empowerment, appearance and — critically — how much discretion a front-line person has to fix a problem without asking permission.",
      "**Process.** The procedure by which the service is delivered: queuing, booking, handover, escalation, what happens when it goes wrong. For services, process is frequently *the entire experience*. Two clinics with identical doctors and different appointment systems are different products.",
      "**Physical evidence.** Because a service cannot be inspected before purchase, the customer judges it by the tangible cues surrounding it: premises, uniforms, documents, the weight of the folder, the state of the waiting room, the confirmation email. These are not decoration. They are the only evidence available before the purchase is irreversible."
    ]},
    { t: "p", text: "The three additions matter beyond services. Any business with meaningful human contact or a complicated buying process has them, and a great deal of what is now called *customer experience* is simply people, process and physical evidence under a newer name. We give services a full lecture in week nine, including the gaps model that explains precisely how service quality fails." },

    { t: "h2", text: "The 4Cs: the same thing, from the other side" },
    { t: "p", text: "Robert Lauterborn's objection in 1990 was not that the four Ps are wrong but that they are written from the seller's chair. Every P is something the firm does. He proposed a translation into the customer's terms." },

    { t: "fig", title: "Four Ps, four Cs — the same decisions, the other chair", sketch: true,
      say: "Product becomes customer solution — people buy a solution to a problem, not a product. Price becomes cost to the customer, which includes time, effort and risk, not only money. Place becomes convenience, which asks how easy it is to buy rather than where the firm chooses to sell. Promotion becomes communication, which is two-way and includes listening, rather than one-way broadcast.",
      cap: "The right-hand column is not a replacement for the left. It is a test you run on it: having made each of the four decisions as a seller, ask what it looks like from the other chair.",
      svg: '<svg viewBox="0 0 680 320" role="img" aria-label="Mapping the four Ps onto the four Cs">' +
        '<text x="140" y="30" text-anchor="middle" fill="var(--ink-3)" font-size="10.5" letter-spacing="1.4">THE SELLER’S VIEW</text>' +
        '<text x="520" y="30" text-anchor="middle" fill="var(--ink-3)" font-size="10.5" letter-spacing="1.4">THE CUSTOMER’S VIEW</text>' +
        '<g font-size="13" font-weight="600">' +
        '<rect x="34" y="48" width="212" height="52" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="140" y="79" text-anchor="middle" fill="var(--ink)">Product</text>' +
        '<rect x="34" y="112" width="212" height="52" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="140" y="143" text-anchor="middle" fill="var(--ink)">Price</text>' +
        '<rect x="34" y="176" width="212" height="52" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="140" y="207" text-anchor="middle" fill="var(--ink)">Place</text>' +
        '<rect x="34" y="240" width="212" height="52" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="140" y="271" text-anchor="middle" fill="var(--ink)">Promotion</text>' +
        '<rect x="414" y="48" width="232" height="52" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/><text x="530" y="72" text-anchor="middle" fill="var(--accent-ink)">Customer solution</text>' +
        '<rect x="414" y="112" width="232" height="52" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/><text x="530" y="136" text-anchor="middle" fill="var(--accent-ink)">Cost to the customer</text>' +
        '<rect x="414" y="176" width="232" height="52" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/><text x="530" y="200" text-anchor="middle" fill="var(--accent-ink)">Convenience</text>' +
        '<rect x="414" y="240" width="232" height="52" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/><text x="530" y="264" text-anchor="middle" fill="var(--accent-ink)">Communication</text>' +
        '</g>' +
        '<g font-size="10.5" text-anchor="middle" fill="var(--ink-2)">' +
        '<text x="530" y="90">“what problem does this solve?”</text>' +
        '<text x="530" y="154">money + time + effort + risk</text>' +
        '<text x="530" y="218">“how easy is it for me to buy?”</text>' +
        '<text x="530" y="282">two-way — including listening</text>' +
        '</g>' +
        '<g stroke="var(--accent)" stroke-width="1.4" fill="none">' +
        '<path d="M250 74 L410 74"/><path d="M250 138 L410 138"/><path d="M250 202 L410 202"/><path d="M250 266 L410 266"/>' +
        '<path d="M402 68 L410 74 L402 80"/><path d="M402 132 L410 138 L402 144"/><path d="M402 196 L410 202 L402 208"/><path d="M402 260 L410 266 L402 272"/>' +
        '</g>' +
        '<line x1="34" y1="306" x2="646" y2="306" stroke="var(--rule)" stroke-dasharray="3 3"/>' +
        '</svg>' },

    { t: "p", text: "Each translation carries a real shift, not just a rename." },
    { t: "ul", items: [
      "**Product → Customer solution.** The customer is not buying an object; they are hiring something to make progress on a problem. This anticipates the jobs-to-be-done framing and it keeps you from optimising a feature nobody uses.",
      "**Price → Cost to the customer.** Straight back to week one's value equation: the customer's cost includes time, effort and risk. A cheaper product that takes two hours to set up may cost more.",
      "**Place → Convenience.** Place asks where *we* sell. Convenience asks how hard it is for *them* to buy. Those produce different answers — a firm may be present in the right channel and still be inconvenient in it.",
      "**Promotion → Communication.** Promotion is a broadcast verb. Communication is two-way, and includes listening — reviews, complaints, service conversations, what people say to each other where you are not present."
    ]},
    { t: "p", text: "In practice, plan with the Ps and audit with the Cs. The Ps are better for organising work, because they map to budgets and departments; the Cs are better for catching the moment when an internally sensible decision is externally absurd." },

    { t: "h2", text: "Three serious criticisms, and the defence" },
    { t: "p", text: "You should be able to argue against the framework as well as with it." },
    { t: "ol", items: [
      "**It is producer-oriented.** Every element is something the firm does *to* a market. It has no natural place for relationships, for customers who co-create value, or for a community that shapes the brand without permission. The 4Cs partly patch this; relationship marketing challenges it more fundamentally.",
      "**It is static.** The mix describes a set of decisions at a moment, with no account of sequence, learning, or how the elements evolve over a product’s life. It tells you what to decide, never when or in what order.",
      "**The categories are arbitrary, and the alliteration did the deciding.** Why is packaging under product and not promotion, when its main job is often to communicate at the shelf? Why is a salesperson promotion in the 4Ps and people in the 7Ps? The boundaries are conventions, not natural joints, and they were chosen partly because they began with P."
    ]},
    { t: "p", text: "**The defence** is unfashionable and correct. Frameworks are judged by usefulness, not by elegance, and nothing proposed in sixty-five years has displaced it in practice. It is memorable under pressure. It is complete enough that walking the list catches real omissions — a marketing plan with nothing to say about place is genuinely defective, and the framework is what makes that visible. It maps cleanly onto how firms are actually organised and budgeted. And its weaknesses are known and teachable, which is more than can be said for its replacements." },
    { t: "p", text: "Use it as a checklist and a consistency test, not as a theory of how markets work. That is what it is good for, and it is very good at it." },

    { t: "case", title: "Auditing a mix in ten minutes",
      ps: [
        "A small roastery sells coffee beans. It roasts well, and it is not growing. Walk the mix.",
        "**Product.** Single-origin beans, four rotating varieties, roasted weekly, 250g bags, minimal label, roast date printed. Quality genuinely high. Range possibly too narrow for a weekly shop and the 250g size suits a household of one.",
        "**Price.** €12.50 per 250g — roughly triple supermarket coffee, at the low end of specialist. Consistent with the product claim. No subscription, so every purchase requires a fresh decision, which is a *price architecture* problem disguised as a convenience problem.",
        "**Place.** Two independent delicatessens and a market stall on Saturdays. Here is the break: the product is perishable and positioned on freshness, but the customer can buy it in only three places, one of which exists for six hours a week. The place decision contradicts the product claim — freshness is worthless if buying is inconvenient enough that people buy a fortnight’s worth or, more likely, give up.",
        "**Promotion.** An occasional post about roast profiles. The message speaks to people who already know what a roast profile is, so promotion is aimed at a narrower segment than the product needs.",
        "**The audit through the Cs.** Solution: what problem? For the enthusiast, better coffee. For everyone else, *not running out of decent coffee*, which the roastery does not address at all. Cost: €12.50 plus a Saturday morning plus the risk of a variety you dislike. Convenience: poor, and it is the binding constraint. Communication: one-way and pitched at experts.",
        "**The diagnosis.** The product is not the problem. The mix is inconsistent — a freshness claim delivered through the least convenient channel available — and the single highest-value change is a subscription with delivery, which simultaneously fixes place, price architecture and the real customer job. Note that no amount of extra promotion would have fixed this, and promotion is what the owner was about to spend money on."
      ]},

    { t: "write", items: [
      "The four Ps and the main decisions under each — copy the twelve-cell table.",
      "The mix must be internally consistent. It is a sentence, not a checklist.",
      "When the mix contradicts itself, customers disbelieve the product claim, because price and place are costlier to fake.",
      "7Ps adds people, process, physical evidence — because in services the staff and the procedure are the product.",
      "4Cs: customer solution, cost, convenience, communication. Plan with Ps, audit with Cs.",
      "Three criticisms: producer-oriented, static, arbitrary categories. And the defence: it is useful."
    ]},

    { t: "h2", text: "Week one, closed" },
    { t: "p", text: "You began the week not being able to define marketing without saying advertising. You end it able to define it, diagnose a firm's orientation from the outside, separate needs from wants from demand, compute perceived value, name the business a firm is actually in, and audit a complete marketing mix for internal contradiction." },
    { t: "p", text: "That is the vocabulary. Everything from here is depth. Next week we stop looking at the firm and look outward: how to draw the boundary of a market, the six external forces you do not control, the five structural forces that decide where the profit in an industry ends up, and how to do a SWOT that is worth the paper." },
    { t: "p", text: "Before you go: take the test, and then, on a blank page, write the four Ps from memory with three decisions under each. If you cannot, listen to section two again. That table is load-bearing for the next fifteen weeks." }
  ],
  glossary: [
    { term: "Marketing mix", def: "The set of controllable variables a firm combines to produce the response it wants from a target market." },
    { term: "Product (P)", def: "The offering itself: features, quality, design, range, branding, packaging, warranty and support." },
    { term: "Price (P)", def: "What the customer gives up and how: list price, discounts, terms, credit, and the architecture across a range." },
    { term: "Place (P)", def: "Channel and availability decisions: channel type and length, coverage, partners, inventory, logistics, territory." },
    { term: "Promotion (P)", def: "Advertising, PR, sales promotion, personal selling and direct marketing, plus message, media, budget and timing." },
    { term: "Internal consistency", def: "The requirement that the four elements make the same claim. An inconsistent mix is disbelieved even when every element is individually sound." },
    { term: "People (7Ps)", def: "Staff as part of the service product: recruitment, training, scripting, appearance, and discretion to resolve problems." },
    { term: "Process (7Ps)", def: "The procedure of delivery — booking, queuing, handover, recovery — which for many services is the experience itself." },
    { term: "Physical evidence (7Ps)", def: "Tangible cues that let a customer judge an intangible service before buying: premises, documents, uniforms, confirmations." },
    { term: "4Cs", def: "Lauterborn’s customer-side restatement: customer solution, cost to the customer, convenience, communication." }
  ],
  quiz: [
    { id: "w01l05q1", concept: "four-ps", type: "multi",
      q: "Which of these decisions belong under **Place**? Select all that apply.",
      options: ["Choosing which retailers stock the product", "Setting the warranty period", "Deciding inventory levels held in region", "Selecting the advertising media", "Deciding whether to sell direct as well as through distributors"],
      answer: [0, 2, 4],
      explain: "Warranty is product; media selection is promotion. Place covers channel type and length, coverage and intensity, retail partners, inventory, logistics and territory. Being able to assign a decision to the right P quickly is more of the first-year job than it sounds — it is how you notice that a plan has nothing to say about an entire quarter of the problem." },

    { id: "w01l05q2", concept: "mix-consist", type: "mcq",
      q: "A luxury watch brand begins selling through a deep-discount online outlet while keeping its advertising and price positioning unchanged. What does the lecture predict?",
      options: [
        "Sales rise with no strategic cost, since the brand message is unchanged",
        "Customers disbelieve the quality claim, because place is a costlier signal than advertising",
        "Customers will split the difference and see it as mid-market",
        "Nothing changes until the price is formally reduced"
      ],
      answer: 1,
      explain: "Customers do not average contradictory signals; they decide which one is lying, and they disbelieve the claim that is cheapest to fake. Anyone can assert quality in an advertisement; distributing through a discounter is a costly, visible commitment. This is why the place decision is one of the hardest to reverse — you have published a revised opinion of yourself." },

    { id: "w01l05q3", concept: "seven-ps", type: "mcq",
      q: "Why did services marketing need three additional Ps?",
      options: [
        "Services are more expensive to deliver than goods",
        "Services are produced and consumed simultaneously, by people, and cannot be inspected before purchase",
        "The original four Ps were designed for business-to-business marketing",
        "Services require more promotion than goods"
      ],
      answer: 1,
      explain: "Simultaneity makes the staff part of the product (people); the delivery procedure becomes the experience rather than a back-office matter (process); and because nothing can be inspected in advance, the customer judges the intangible by tangible cues (physical evidence). All three follow from the nature of a service, not from its cost." },

    { id: "w01l05q4", concept: "four-cs", type: "mcq",
      q: "Lauterborn’s translation of **Place** is:",
      options: ["Coverage", "Convenience", "Channel", "Contact"],
      answer: 1,
      explain: "Convenience — and the shift is substantive, not cosmetic. Place asks where *we* choose to sell; convenience asks how hard it is for *them* to buy. A firm can be present in exactly the right channel and still be inconvenient within it, and only the customer-side question surfaces that." },

    { id: "w01l05q5", concept: "mix-critique", type: "short",
      q: "State two serious criticisms of the 4Ps framework and give the strongest defence of continuing to use it.",
      answer: "**Criticism one — it is producer-oriented:** every element is something the firm does *to* a market, leaving no natural place for relationships, co-creation, or communities that shape a brand without permission. **Criticism two — it is static:** it describes a set of decisions at a moment with no account of sequence, learning or evolution over a product’s life; it says what to decide but never when or in what order. (A third: the categories are conventions chosen partly for alliteration — packaging sits under product although its main job is communication at the shelf.) **Defence:** frameworks are judged by usefulness, not elegance. Nothing proposed since has displaced it in practice. It is memorable under pressure, complete enough that walking the list exposes real omissions — a plan silent on place is genuinely defective — and it maps onto how firms are actually budgeted and organised. Its weaknesses are known and teachable, which is more than its replacements can claim.",
      explain: "Being able to argue both sides is the difference between having learned a framework and having been taught one. Examiners reward the defence more than the criticism, because everyone can criticise." },

    { id: "w01l05q6", concept: "mix-consist", type: "mcq",
      q: "A roastery sells premium fresh coffee through a Saturday-only market stall. Which description is most precise?",
      options: [
        "A promotion problem — too few people know about it",
        "A product problem — the range is too narrow",
        "A place decision that contradicts the product claim, since a freshness proposition requires frequent easy purchase",
        "A price problem — the product is too expensive for the channel"
      ],
      answer: 2,
      explain: "Freshness is a claim that only has value if the customer can buy often and easily; a six-hour weekly window makes the claim unrealisable. This is the classic inconsistency: two individually defensible decisions that argue with each other. Note that the instinct in the case was to spend on promotion, which would have bought more attention for a proposition that could not be acted on." },

    { id: "w01l05q7", concept: "seven-ps", type: "multi",
      q: "Which are among the three Ps added for services? Select all that apply.",
      options: ["People", "Positioning", "Process", "Physical evidence", "Partnership"],
      answer: [0, 2, 3],
      explain: "People, process and physical evidence — Booms and Bitner, 1981. Positioning is a strategy decision that precedes the mix rather than an element of it, and partnership belongs to relationship marketing. Note that the three extras now travel under the heading customer experience in most firms, which is largely a rebrand." },

    { id: "w01l05q8", concept: "four-ps", type: "mcq",
      q: "Under which P does the decision to offer twelve-month interest-free credit belong?",
      options: ["Product — it is part of the offering", "Price — it changes what and when the customer pays", "Place — it affects where they can buy", "Promotion — it is a sales incentive"],
      answer: 1,
      explain: "Payment terms and credit are price decisions: they alter the amount, the timing and the perceived cost of what the customer gives up. It is a good example of why the categories need care — the credit offer will certainly be *advertised*, but advertising it is the promotion decision; offering it is the price decision. Confusing the two is how firms end up letting the promotions team set pricing." },

    { id: "w01l05q9", concept: "four-cs", type: "short",
      q: "Take a gym membership priced at €40 a month. Audit it through the 4Cs, giving one specific point under each C.",
      answer: "**Customer solution:** the problem is rarely “access to equipment” — it is usually wanting to be fitter, to feel better, or to have a reliable routine, so a gym that sells access alone is answering a question nobody asked; classes, programmes and progress tracking address the actual job. **Cost to the customer:** €40 is only part of it — add travel time, the effort of packing a bag, the social risk of not knowing how to use equipment, and the psychological cost of a rolling contract that is awkward to cancel. **Convenience:** the binding constraint for most members is distance and opening hours relative to their commute; a gym eight minutes further away is used materially less often regardless of quality. **Communication:** most gym communication is one-way acquisition marketing, while the information that would retain members — what to do today, whether they are improving — is absent; listening to why people stop attending is worth more than another January campaign.",
      explain: "The gym case is worth remembering because it shows the Cs catching what the Ps miss: the price is fine, the product is fine, and the business still loses members for reasons that only appear from the customer’s chair." },

    { id: "w01l05q10", concept: "mix-critique", type: "mcq",
      q: "Which is the best statement of what the marketing mix is *for*?",
      options: [
        "A theory explaining how markets reach equilibrium",
        "A checklist of controllable decisions, and a consistency test across them",
        "A model of how customers process persuasive messages",
        "A method of allocating a marketing budget optimally"
      ],
      answer: 1,
      explain: "It is not a theory and never claimed to be. Its two jobs are completeness — walking the list catches decisions the plan forgot — and coherence — checking that the four elements make the same claim. Treating it as a theory of markets is what invites the criticisms that it is static and producer-oriented, which are fair against a theory and beside the point against a checklist." },

    { id: "w01l05q11", concept: "mix-consist", type: "mcq",
      q: "Which pair of mix elements is the strongest signal of quality to a customer who cannot inspect the product first?",
      options: ["Product and promotion", "Price and place", "Promotion and place", "Product and price"],
      answer: 1,
      explain: "Price and place, because both are costly commitments rather than assertions. A firm can claim anything in its advertising at little cost; charging a high price forgoes volume and distributing selectively forgoes reach. Customers read costly signals as more credible — an idea with deep roots in signalling theory, and one we return to in week eight when we ask what a brand is actually worth." }
  ]
}

};
