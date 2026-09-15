/* Week 1 — What marketing actually is */
window.LESSONS = window.LESSONS || {};
window.LESSONS['marketing.w01'] = {

/* ============================================================
   1.1  The exchange at the centre of everything
   ============================================================ */
"w01l01": {
  standfirst: "Before there was advertising, before there were brands, before anyone held a job title with the word marketing in it, there was **exchange**. Everything in this course is an elaboration of one idea: two parties, each holding something the other wants more.",
  objectives: [
    "Define marketing in one sentence you could defend to a sceptical accountant.",
    "List the five conditions that must hold before an exchange can happen at all, and spot which one is missing when a deal stalls.",
    "Explain, with an example, why marketing is neither advertising nor selling.",
    "Name the eight states of demand and the marketing task each one calls for.",
    "Identify the customer in a case where the buyer, the payer and the user are three different people."
  ],
  concepts: [
    { id: "exchange",      name: "Exchange and its conditions" },
    { id: "def-marketing", name: "Defining marketing" },
    { id: "mkt-vs-sell",   name: "Marketing vs selling" },
    { id: "demand-states", name: "The eight demand states" },
    { id: "cust-roles",    name: "Buyer, payer, user" }
  ],
  blocks: [
    { t: "h2", text: "Two people and a want" },
    { t: "p", text: "Picture a market square on a cold Saturday. A woman has brought thirty eggs. Her hens have been productive and her family cannot eat thirty eggs. Across from her a man has a cart of split birch, more than his stove will burn before spring. She wants firewood. He wants eggs. In ten minutes they have traded, and both of them walk home believing they got the better end of it." },
    { t: "p", text: "Notice what did **not** happen. No new eggs were laid. No new tree was felled. Nothing was manufactured, nothing was added to the physical stock of the world. And yet both parties are better off — genuinely, not as a figure of speech — because a thing of low value to its holder moved to somebody who valued it more. Economists call this the *gains from trade*. It is the only kind of value creation that requires no raw material at all." },
    { t: "p", text: "Here is the uncomfortable part, and the reason this course exists. Those gains do not happen by themselves. Somebody had to know the other person existed. Somebody had to carry eggs to a place where a man with firewood might plausibly be. Somebody had to make the eggs look fresh enough to be worth the risk. Somebody had to name a rate — six eggs a bundle, or eight — and somebody had to believe the other was not a fraud. Every one of those is a marketing problem, and every one of them can fail." },
    { t: "p", text: "That is the whole subject. Not posters. Not slogans. The unglamorous, permanent work of getting an exchange to occur when it otherwise would not have." },

    { t: "fig", title: "An exchange is two flows, not one", sketch: true,
      say: "Two boxes face each other. From party A to party B runs the offering — a good, a service, an idea or an experience. From party B back to party A runs the value received — money, but also time, attention, a vote or a donation. Both parties can walk away at any moment.",
      cap: "The second arrow is the one beginners forget. Marketing is not the art of pushing the top arrow harder; it is the management of both, including the price attached to the lower one.",
      svg: '<svg viewBox="0 0 680 235" role="img" aria-label="Diagram: an exchange runs in two directions between two parties">' +
        '<defs>' +
        '<marker id="ahA1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--series-1)"/></marker>' +
        '<marker id="ahB1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--series-2)"/></marker>' +
        '</defs>' +
        '<rect x="20" y="66" width="164" height="96" rx="5" fill="var(--surface-2)" stroke="var(--rule-strong)" stroke-width="1"/>' +
        '<text x="102" y="104" text-anchor="middle" fill="var(--ink)" font-size="15" font-weight="600">Party A</text>' +
        '<text x="102" y="124" text-anchor="middle" fill="var(--ink-3)" font-size="11">a firm, a charity,</text>' +
        '<text x="102" y="139" text-anchor="middle" fill="var(--ink-3)" font-size="11">a candidate, a neighbour</text>' +
        '<rect x="496" y="66" width="164" height="96" rx="5" fill="var(--surface-2)" stroke="var(--rule-strong)" stroke-width="1"/>' +
        '<text x="578" y="104" text-anchor="middle" fill="var(--ink)" font-size="15" font-weight="600">Party B</text>' +
        '<text x="578" y="124" text-anchor="middle" fill="var(--ink-3)" font-size="11">a customer, a donor,</text>' +
        '<text x="578" y="139" text-anchor="middle" fill="var(--ink-3)" font-size="11">a voter, a neighbour</text>' +
        '<text x="340" y="80" text-anchor="middle" fill="var(--ink-2)" font-size="11.5">Offering — good, service, idea, experience</text>' +
        '<line x1="192" y1="94" x2="484" y2="94" stroke="var(--series-1)" stroke-width="2" marker-end="url(#ahA1)"/>' +
        '<text x="340" y="121" text-anchor="middle" fill="var(--ink-3)" font-size="10.5" letter-spacing="1.6">EXCHANGE</text>' +
        '<line x1="484" y1="140" x2="192" y2="140" stroke="var(--series-2)" stroke-width="2" marker-end="url(#ahB1)"/>' +
        '<text x="340" y="160" text-anchor="middle" fill="var(--ink-2)" font-size="11.5">Value back — money, time, attention, a vote</text>' +
        '<line x1="20" y1="192" x2="660" y2="192" stroke="var(--rule)" stroke-width="1" stroke-dasharray="3 3"/>' +
        '<text x="340" y="212" text-anchor="middle" fill="var(--ink-3)" font-size="11">Either party may refuse. That freedom is what makes it marketing and not taxation.</text>' +
        '</svg>' },

    { t: "h2", text: "A definition worth defending" },
    { t: "p", text: "The American Marketing Association has revised its official definition several times, which tells you something about how contested the ground is. The current wording runs: *marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large*." },
    { t: "p", text: "It is a committee sentence and it reads like one, but it earns its keep, because four verbs are doing real work." },
    { t: "ul", lead: "Take them one at a time.", items: [
      "**Creating.** Marketing is upstream of the product, not downstream of it. The decision about what to make — which features, for whom, at what quality — is a marketing decision informed by research, even when an engineer executes it.",
      "**Communicating.** Making the offering known and understood. This is the part everyone thinks is the whole job.",
      "**Delivering.** Getting the thing into the hands of the person who wants it, at the moment they want it. A product nobody can physically obtain does not exist commercially.",
      "**Exchanging.** Agreeing terms — chiefly price — and completing the trade. This is where the firm captures some of the value it created."
    ]},
    { t: "p", text: "Note also who the value is for: *customers, clients, partners, and society at large*. That last clause is not decoration. It is the hook on which the entire week sixteen discussion of ethics and sustainability hangs, and it was added deliberately." },
    { t: "p", text: "For working purposes, carry this compressed version in your head: **marketing is the work of making exchange happen — profitably, repeatedly, and at scale.** *Profitably* rules out giving things away. *Repeatedly* rules out the one-off con. *At scale* is what separates marketing from ordinary haggling." },

    { t: "write", items: [
      "AMA definition, all four verbs: creating, communicating, delivering, exchanging.",
      "Working definition: making exchange happen — profitably, repeatedly, at scale.",
      "Gains from trade: value is created by movement, not only by manufacture."
    ]},

    { t: "h2", text: "The five conditions for an exchange" },
    { t: "p", text: "Philip Kotler, whose textbook has taught more marketers than any other, sets out five conditions. All five must hold, simultaneously, or no exchange occurs." },
    { t: "ol", items: [
      "There are **at least two parties**.",
      "Each party has **something of value** to the other.",
      "Each party is **capable of communication and delivery**.",
      "Each party is **free to accept or reject** the offer.",
      "Each party **believes it is appropriate** to deal with the other."
    ]},
    { t: "p", text: "Read as a list it is almost insultingly obvious. Its value is diagnostic. When a deal is not happening and nobody can say why, one of those five is missing, and the discipline of walking the list tells you which — and therefore which lever to pull." },
    { t: "case", title: "A stalled deal, diagnosed in five questions",
      ps: [
        "A small software firm sells a scheduling tool to dental practices. The product is good. The price is fair. Sales have flatlined. The founder’s instinct is to spend more on advertising. Walk the list instead.",
        "**Two parties?** Yes — but *who*, exactly? The practice owner signs, the receptionist uses it. If the marketing speaks to the receptionist, the person with the chequebook never hears it. Condition one is about identifying the *right* second party.",
        "**Something of value each way?** The tool saves perhaps four receptionist-hours a week. Whether that is *of value* depends on whether the owner experiences those hours as a cost. If the receptionist is salaried and not overloaded, the saving may be real and still not valuable.",
        "**Capable of communication and delivery?** The firm can deliver. But can it communicate? Dentists do not read software blogs. If every message is published where the audience is not, the condition fails on a technicality of media, not of argument.",
        "**Free to accept or reject?** Usually yes — unless the practice is locked into a three-year contract with an incumbent. Then no marketing will work until month thirty-four, and the correct action is to time the approach, not to shout louder.",
        "**Believes it appropriate to deal?** A two-person company asking a clinic to trust it with patient appointment data is asking for trust it has not yet earned. This is the condition that most often fails silently, and the remedy is not advertising — it is references, certification, a trial, an insurer’s endorsement.",
        "Four of those five diagnoses lead somewhere other than *buy more advertising*. That is the point of the list."
      ]},

    { t: "h2", text: "Marketing is not advertising, and not selling" },
    { t: "quote", text: "The aim of marketing is to make selling superfluous. The aim is to know and understand the customer so well that the product or service fits him and sells itself.", who: "Peter Drucker, 1973" },
    { t: "p", text: "Drucker is overstating for effect — selling never becomes entirely superfluous — but the direction of the claim is right. Selling starts with a product the firm already has and looks for someone to take it. Marketing starts with a person the firm understands and works backwards to what should be made. They point in opposite directions in time." },
    { t: "p", text: "Advertising is narrower still. Advertising is *paid, mediated communication from an identified sponsor*. Every word of that is load-bearing: paid distinguishes it from public relations, mediated distinguishes it from a salesperson in a room, identified sponsor distinguishes it from propaganda and from undeclared influence. It is one tool among five in promotion, and promotion is one of four Ps." },

    { t: "fig", title: "Where advertising actually sits", sketch: true,
      say: "The marketing function spans six activities: research, product, price, place, promotion and service. Promotion opens into five tools: advertising, public relations, sales promotion, personal selling and direct marketing. Advertising is one tool inside one activity.",
      cap: "This diagram shows **scope, not proportion**. The boxes are equal because the relative sizes vary enormously by industry, not because the work divides evenly. A pharmaceutical firm spends most of its effort on the left; a confectionery brand on the right.",
      svg: '<svg viewBox="0 0 680 246" role="img" aria-label="Diagram showing advertising as one of five promotional tools within one of six marketing activities">' +
        '<text x="20" y="22" fill="var(--ink-3)" font-size="10.5" letter-spacing="1.4">THE MARKETING FUNCTION</text>' +
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
        '<text x="20" y="122" fill="var(--ink-3)" font-size="10.5" letter-spacing="1.4">THE PROMOTION MIX</text>' +
        '<g font-size="11" text-anchor="middle">' +
        '<rect x="52" y="128" width="116" height="40" rx="4" fill="var(--accent)" stroke="var(--accent)"/><text x="110" y="152" fill="var(--on-accent)" font-weight="600">Advertising</text>' +
        '<rect x="177" y="128" width="116" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="235" y="152" fill="var(--ink-2)">PR</text>' +
        '<rect x="302" y="128" width="116" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="360" y="147" fill="var(--ink-2)">Sales</text><text x="360" y="160" fill="var(--ink-2)">promotion</text>' +
        '<rect x="427" y="128" width="116" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="485" y="147" fill="var(--ink-2)">Personal</text><text x="485" y="160" fill="var(--ink-2)">selling</text>' +
        '<rect x="552" y="128" width="108" height="40" rx="4" fill="var(--surface-2)" stroke="var(--rule-strong)"/><text x="606" y="152" fill="var(--ink-2)">Direct</text>' +
        '</g>' +
        '<line x1="20" y1="196" x2="660" y2="196" stroke="var(--rule)" stroke-dasharray="3 3"/>' +
        '<text x="20" y="218" fill="var(--ink-3)" font-size="11">One tool, inside one activity, inside the function. Scope — not proportion of spend or effort.</text>' +
        '</svg>' },

    { t: "warn", title: "The mistake that defines an amateur", ps: [
      "If you take one habit from this lecture, take this one: when someone says *we need marketing*, ask them what they actually mean. Nine times in ten they mean *we need someone to make the posters*.",
      "A firm that believes marketing is the poster department will locate marketing at the end of the process, after the product is finished and the price is set, and then wonder why the posters are not working. The posters are not working because the three decisions that mattered were made without a marketer in the room."
    ]},

    { t: "h2", text: "Transaction, exchange, relationship" },
    { t: "p", text: "Three words that are not synonyms, and the distinction pays rent later." },
    { t: "p", text: "An **exchange** is the concept: value moving both ways between two willing parties. A **transaction** is a single instance of it, with agreed terms, a time and a place — eggs for firewood, on Saturday, at six-to-a-bundle. A **relationship** is a durable arrangement in which repeated transactions are expected, and in which both parties invest in the expectation." },
    { t: "p", text: "The shift from transactional to relationship marketing is one of the genuine intellectual movements of the last forty years. The arithmetic behind it is simple: if a customer will trade with you fifteen times rather than once, the value of acquiring that customer is fifteen times larger, and it becomes rational to spend far more to acquire them and far more to keep them happy. That single idea produced loyalty schemes, customer relationship management systems, subscription business models, and the metric — customer lifetime value — that we will compute properly in week fourteen." },
    { t: "p", text: "It also produced a great deal of nonsense, which we will examine in week four, because the empirical evidence on how loyal customers actually are is much less flattering than the consultants' slides suggest." },

    { t: "h2", text: "Marketing as the management of demand" },
    { t: "p", text: "Here is the framework that most first-year courses skip and that will make you immediately more useful than someone who has not seen it. Marketing is often described as *demand management*, and demand can be in eight distinct states. Each state calls for a different task. Crucially, in three of the eight the correct task is to **reduce** demand — which is impossible to see if you believe marketing means selling more." },
    { t: "table",
      head: ["State of demand", "What it looks like", "The marketing task"],
      rows: [
        ["Negative", "People actively dislike the product and would pay to avoid it — dentistry, vaccination for some, insurance paperwork.", "**Conversional.** Find the source of the aversion and redesign or reframe the offer."],
        ["None", "The target is indifferent or unaware — a new category nobody has a word for yet.", "**Stimulational.** Connect the product to an existing need the person already recognises."],
        ["Latent", "A strong want exists that no current product satisfies — a cure that does not exist, a route nobody flies.", "**Developmental.** Build the product. This is where new categories come from."],
        ["Declining", "Demand is falling, for the category or the brand — printed newspapers, landlines.", "**Remarketing.** Find new segments, new uses, or new channels; or harvest gracefully."],
        ["Irregular", "Demand swings by season, day or hour — ski resorts, restaurants at 20:00, buses at 08:00.", "**Synchromarketing.** Flex price and promotion to move demand into the troughs."],
        ["Full", "Demand matches what the firm can supply and wants to supply.", "**Maintenance.** Hold quality, watch costs, defend against entrants. Do not get bored."],
        ["Overfull", "More demand than can be served, and serving it damages quality or the asset — an overcrowded national park.", "**Demarketing.** Raise price, ration, discourage. Genuine marketing work."],
        ["Unwholesome", "Demand exists for something socially harmful — tobacco, gambling, speeding.", "**Countermarketing.** Destroy the demand. Public health campaigns are marketing."]
      ],
      say: "The eight states of demand. Negative demand calls for conversional marketing. No demand calls for stimulational marketing. Latent demand calls for developmental marketing. Declining demand calls for remarketing. Irregular demand calls for synchromarketing. Full demand calls for maintenance marketing. Overfull demand calls for demarketing. And unwholesome demand calls for countermarketing.",
      cap: "Learn the left column and the right column together. An examiner — and a job interviewer — will give you the middle column and ask for the other two."
    },
    { t: "p", text: "The two that surprise people are **demarketing** and **countermarketing**. A city that raises a tourist tax to protect its old town is doing marketing. A health ministry running a campaign against smoking is doing marketing — in fact it is doing marketing against marketing, which is why those campaigns are often written by people from advertising agencies." },
    { t: "case", title: "Synchromarketing, worked",
      ps: [
        "A cinema has 200 seats and seven screenings a week. Friday and Saturday evenings sell out; Tuesday afternoon runs at perhaps a tenth full. The seats are identical. The film is identical. The cost of running the Tuesday screening is almost entirely fixed — the projector, the heat, one member of staff.",
        "Selling *more tickets* is the wrong framing. The Friday screening cannot hold more people. The task is to **move** demand, not to add it: a cheaper Tuesday ticket, a parent-and-baby screening, a pensioners’ club, a student card that is valid only before 17:00.",
        "Every one of those is a price or promotion decision aimed at a trough. None of them is an attempt to persuade the world that films are good. And note the trap: if the Tuesday discount is advertised loudly enough, some of the Friday audience will simply shift to Tuesday, and the cinema will have converted full-price customers into discount ones. Synchromarketing works only when the discount is **fenced** — restricted to a group that would not otherwise have come at all. We will do the arithmetic of that fence in week ten."
      ]},

    { t: "h2", text: "Who, exactly, is the customer?" },
    { t: "p", text: "One more distinction and the lecture is done. In the egg-and-firewood trade, one person wanted, paid and consumed. Almost no commercially interesting exchange is that simple. Three roles come apart, and they are frequently three different people:" },
    { t: "ul", items: [
      "The **user** — who consumes the benefit.",
      "The **buyer** — who makes the choice and executes the purchase.",
      "The **payer** — whose money leaves the account."
    ]},
    { t: "p", text: "A breakfast cereal aimed at children has a user of six and a buyer-payer of thirty-five, which is why the box is designed to be argued for by the child and justified by the parent — cartoon on the front, vitamins on the side. A hospital drug has a user who is ill, a buyer who is a physician, and a payer who is an insurer or a state; all three must be marketed to, in three entirely different languages. A workplace pension has a user who is the employee, a buyer who is an HR committee, and a payer who is the employer." },
    { t: "p", text: "Ask the three questions — who uses, who chooses, who pays — before you write a single word of any campaign. When a campaign fails for reasons nobody can identify, the most common cause is that it addressed the user with an argument only the payer cares about, or the reverse." },

    { t: "write", items: [
      "The five conditions for exchange — all five, in order.",
      "Marketing points backwards from the customer; selling points forwards from the product.",
      "Advertising = paid, mediated communication from an identified sponsor.",
      "The eight demand states with their eight tasks. Copy the table.",
      "User, buyer, payer — three questions to ask before any campaign."
    ]},

    { t: "h2", text: "What you should be able to do now" },
    { t: "p", text: "You can define marketing without saying the word advertising. You can diagnose a stalled deal by walking five conditions instead of guessing. You know that reducing demand is sometimes the correct marketing objective, and you have a name for it. And you know that the customer is often three people wearing one word." },
    { t: "p", text: "Next lecture: the five beliefs a firm can hold about its customer, why most firms hold an outdated one without knowing it, and how to tell from the outside which one you are dealing with." }
  ],
  glossary: [
    { term: "Exchange", def: "Value moving in both directions between two parties, each free to refuse. The unit concept of the entire discipline." },
    { term: "Transaction", def: "One instance of an exchange, with agreed terms, a time and a place." },
    { term: "Relationship marketing", def: "Managing a customer for repeated transactions over time rather than optimising each sale in isolation." },
    { term: "Gains from trade", def: "The increase in total value created when a good moves from someone who values it less to someone who values it more, without anything new being produced." },
    { term: "Advertising", def: "Paid, mediated communication from an identified sponsor. One of five promotional tools." },
    { term: "Demand management", def: "The view of marketing as bringing actual demand into line with desired demand — which sometimes means reducing it." },
    { term: "Demarketing", def: "Deliberately discouraging demand, usually because serving it damages quality, the asset, or the wider public." },
    { term: "Countermarketing", def: "Working to destroy demand for something judged harmful — public health campaigns being the standard case." },
    { term: "Synchromarketing", def: "Shifting demand in time to match capacity, typically with price and promotion aimed at troughs." },
    { term: "User / buyer / payer", def: "The three roles in a purchase, which are often three different people and need three different arguments." }
  ],
  quiz: [
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
  standfirst: "In 1960 a Harvard professor published an article arguing that great industries do not die because demand disappeared or because a competitor out-fought them. They die because of the answer they gave to one deceptively simple question: **what business are we in?** Sixty-five years later it is still the most cited article the field has produced, and firms are still making the mistake.",
  objectives: [
    "State Levitt’s central argument and the four self-deceptions he identified.",
    "Define a business in customer-need terms rather than product terms, and show why the difference changes decisions.",
    "Use Abell’s three dimensions to define a business precisely enough to be useful.",
    "Recognise the opposite error — a definition so broad it guides nothing.",
    "Apply the myopia test to a firm and predict which substitute will take its market."
  ],
  concepts: [
    { id: "myopia",        name: "Marketing myopia" },
    { id: "biz-definition",name: "Defining the business" },
    { id: "abell",         name: "Abell’s three dimensions" },
    { id: "hyperopia",     name: "Over-broad definition" },
    { id: "substitutes",   name: "Substitutes and competitive sets" }
  ],
  blocks: [
    { t: "h2", text: "The railroads did not run out of passengers" },
    { t: "p", text: "Theodore Levitt opened his 1960 article with the American railroads, which had been among the largest and most powerful enterprises on earth and had, within a few decades, become marginal. The conventional explanation was that cars, lorries and aeroplanes had taken their business." },
    { t: "p", text: "Levitt's argument was that this explanation is backwards. Demand for moving people and goods did not fall — it grew enormously. The railroads lost that growth to others because, in his words, they assumed themselves to be in the *railroad business* rather than the *transportation business*. They were product-oriented rather than customer-oriented." },
    { t: "quote", text: "The railroads did not stop growing because the need for passenger and freight transportation declined. That grew. The railroads are in trouble today not because the need was filled by others… but because it was not filled by the railroads themselves.", who: "Theodore Levitt, “Marketing Myopia”, Harvard Business Review, 1960" },
    { t: "p", text: "Say that slowly, because the structure of the claim is the whole lesson. A firm defined by *what it makes* can only see competitors who make the same thing. When the customer's need gets met by something structurally different, the firm does not even register it as competition until the market has gone." },
    { t: "p", text: "Levitt's second example was Hollywood, which he said had nearly destroyed itself by defining its business as *movies* rather than *entertainment*. Television arrived, and the studios treated it as an enemy rather than as an opportunity — a new way to deliver the thing they were actually in the business of providing. The ones that survived were the ones that eventually redefined themselves." },

    { t: "h2", text: "The four self-deceptions" },
    { t: "p", text: "Levitt identified four beliefs that together produce myopia. They travel as a set, and each one is comfortable, which is why they are hard to dislodge." },
    { t: "ol", items: [
      "**The belief that growth is assured by an expanding population.** If there will be more people next year, there will be more customers, and the firm need not work for them. This substitutes demographics for strategy and encourages a firm to coast.",
      "**The belief that there is no competitive substitute for the industry’s main product.** This is the fatal one. It is *always* wrong, eventually, and it is invisible precisely because the substitute usually comes from outside the industry and looks like a toy when it arrives.",
      "**Excessive faith in mass production, and in the cost reductions that come with volume.** Efficiency is a virtue that becomes a trap: a firm with a very efficient plant making a particular thing has enormous incentive to keep making that thing.",
      "**Preoccupation with a product that lends itself to controlled experiment and improvement.** R&D gets prestige because its results are legible and measurable — a five percent efficiency gain is a fact. Customer needs are messy and contested. So the firm drifts toward the questions it can answer rather than the ones that matter."
    ]},
    { t: "p", text: "The fourth is the subtlest and the most modern. It explains why highly technical, well-managed, genuinely excellent firms are *especially* vulnerable. Competence in a measurable domain pulls attention away from an unmeasurable one, and the better you are at the first, the stronger the pull." },

    { t: "h2", text: "Product definition against market definition" },
    { t: "p", text: "The practical instrument Levitt gives you is the pair of definitions. Take any firm and write its business two ways." },
    { t: "table",
      head: ["Firm", "Product definition (myopic)", "Market definition (customer need)"],
      rows: [
        ["Railroad", "We run trains", "We move people and goods reliably"],
        ["Film studio", "We make films", "We provide entertainment"],
        ["Cosmetics firm", "We make lipstick", "We sell hope and self-confidence"],
        ["Oil company", "We sell petrol", "We supply energy"],
        ["Drill manufacturer", "We make drills", "We help people make holes"],
        ["University", "We deliver lectures", "We develop capability and signal it credibly"],
        ["Newspaper", "We print a paper", "We tell you what matters today, and who to trust"]
      ],
      say: "Seven firms, each defined twice. A railroad runs trains, or it moves people and goods. A studio makes films, or it provides entertainment. A drill manufacturer makes drills, or it helps people make holes.",
      cap: "The right-hand column is not a slogan exercise. It changes what counts as a competitor, what counts as an opportunity, and what the firm should invest in. A drill company that believes it sells holes will take an interest in adhesives." },
    { t: "p", text: "The classic teaching example is the drill. *People do not want a quarter-inch drill; they want a quarter-inch hole.* And they do not really want the hole either — they want a shelf on the wall, and underneath that they want a tidy room. Each step back opens the competitive set: at the level of holes, your rivals include adhesive strips; at the level of shelving, flat-pack furniture and a handyman service; at the level of a tidy room, a storage box that needs no wall at all." },
    { t: "p", text: "This is the analytical payoff. Market definition is not a feel-good reframing. It is a method for discovering the competitors who will take your business and who currently do not appear in any of your market-share reports." },

    { t: "h2", text: "The opposite error, which nobody warns you about" },
    { t: "warn", title: "Marketing hyperopia", ps: [
      "If myopia is defining the business too narrowly, the opposite — sometimes called marketing hyperopia — is defining it so broadly that the definition guides nothing.",
      "*We are in the business of human happiness.* *We are in the business of connection.* *We are a technology company.* Every one of these is true of almost any firm, and therefore none of them tells anybody what to do on Monday morning. A definition that admits every possible action is not a strategy, it is a mood.",
      "There is also a harder version of the error, in which the firm believes the broad definition and *acts* on it, entering markets where it has no advantage at all. The railroads would not have been saved by buying an airline — they had no relevant capability. A definition must be broad enough to see the substitute coming and narrow enough that the firm's actual strengths still apply."
    ]},
    { t: "p", text: "The test for a usable definition is simple: does it rule anything out? A definition that forbids nothing decides nothing. *We move people and goods reliably over land* rules out running an airline while still admitting lorries — which is roughly where a sensible railroad executive should have landed in 1955." },

    { t: "h2", text: "Abell’s three dimensions" },
    { t: "p", text: "Derek Abell gave the field a more disciplined instrument in 1980. Define a business along three axes, and answer all three explicitly." },
    { t: "ul", items: [
      "**Customer groups — who is being served.** Which people or organisations, specifically.",
      "**Customer functions — what need is being met.** Which job the offering does for them.",
      "**Technologies — how it is met.** By what means the function is performed."
    ]},
    { t: "p", text: "The power of the three axes is that they separate the dimension that *should* be stable from the dimensions that should not be. Customer functions are the durable axis — the need to move goods, to be entertained, to look competent. Technologies are the volatile axis. Myopia is what happens when a firm holds its technology fixed and lets the function drift away to someone else's technology." },

    { t: "fig", title: "Abell’s three dimensions of a business definition", sketch: true,
      say: "Three axes radiate from a single point. Customer groups asks who is served. Customer functions asks what need is met. Technologies asks how it is met. A business is a chosen region across all three. Marketing myopia is fixing the technology axis and letting the function axis escape.",
      cap: "Draw this one. Then place a business you know on all three axes, and ask which axis your firm would defend if forced to choose. If the answer is the technology axis, you have found a myopic firm.",
      svg: '<svg viewBox="0 0 680 290" role="img" aria-label="Three axes of business definition: customer groups, customer functions, technologies">' +
        '<defs><marker id="ahAb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink-3)"/></marker></defs>' +
        '<line x1="240" y1="200" x2="240" y2="44" stroke="var(--ink-3)" stroke-width="1.5" marker-end="url(#ahAb)"/>' +
        '<line x1="240" y1="200" x2="620" y2="200" stroke="var(--ink-3)" stroke-width="1.5" marker-end="url(#ahAb)"/>' +
        '<line x1="240" y1="200" x2="66" y2="266" stroke="var(--ink-3)" stroke-width="1.5" marker-end="url(#ahAb)"/>' +
        '<text x="248" y="38" fill="var(--ink)" font-size="12.5" font-weight="600">CUSTOMER GROUPS</text>' +
        '<text x="248" y="55" fill="var(--ink-3)" font-size="11">who is served?</text>' +
        '<text x="620" y="222" text-anchor="end" fill="var(--ink)" font-size="12.5" font-weight="600">CUSTOMER FUNCTIONS</text>' +
        '<text x="620" y="239" text-anchor="end" fill="var(--ink-3)" font-size="11">what need is met? — the durable axis</text>' +
        '<text x="60" y="284" fill="var(--ink)" font-size="12.5" font-weight="600">TECHNOLOGIES</text>' +
        '<text x="60" y="252" fill="var(--ink-3)" font-size="11">how? — the volatile axis</text>' +
        '<circle cx="240" cy="200" r="5" fill="var(--accent)"/>' +
        '<rect x="300" y="96" width="200" height="74" rx="5" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/>' +
        '<text x="400" y="120" text-anchor="middle" fill="var(--accent-ink)" font-size="12" font-weight="600">The business</text>' +
        '<text x="400" y="139" text-anchor="middle" fill="var(--ink-2)" font-size="11">a chosen region across</text>' +
        '<text x="400" y="155" text-anchor="middle" fill="var(--ink-2)" font-size="11">all three dimensions</text>' +
        '<path d="M300 133 L252 190" stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="3 3"/>' +
        '<text x="66" y="150" fill="var(--bad)" font-size="11" font-weight="600">Myopia:</text>' +
        '<text x="66" y="167" fill="var(--ink-2)" font-size="11">hold the technology</text>' +
        '<text x="66" y="182" fill="var(--ink-2)" font-size="11">axis fixed, and let the</text>' +
        '<text x="66" y="197" fill="var(--ink-2)" font-size="11">function axis escape.</text>' +
        '</svg>' },

    { t: "case", title: "Three definitions of one small business",
      ps: [
        "A driving school in a mid-sized city. Fifteen instructors, a fleet of cars, forty years of trading. Bookings have fallen for three straight years and the owner blames the economy.",
        "**Product definition:** *we teach people to drive cars.* Competitors are the other four driving schools in town. The strategy that follows is to be cheaper or to advertise harder than them — and this is exactly what the owner has been doing, with diminishing returns.",
        "**Market definition — the function:** *we get young adults to independent mobility, credibly certified.* Now the competitive set includes things the owner has never counted: excellent public transport, cheap ride-hailing, a city where a licence is no longer socially necessary at eighteen, and parents who no longer assume a car at nineteen. Fewer people want the *function* at all. That is a market contraction, and no amount of price competition addresses it. It is also, crucially, *knowable in advance* — the licence-taking rate among nineteen-year-olds is a published statistic the owner could have watched falling for a decade.",
        "**Abell’s three axes, done properly.** Groups: currently seventeen- to twenty-year-olds, almost exclusively. Functions: obtaining a licence; but also confidence behind the wheel, refresher training after a long gap, hazard training for company fleets, and licence conversion for people who have moved to the country. Technologies: in-car instruction; but also simulator time, app-based theory training, and intensive residential courses.",
        "Written out, the strategy is visible. The *function* axis has more room than the owner thought — corporate fleet training and licence conversion are growing where teenage first licences are shrinking — and those functions reach different *groups* using largely the same *technology* and the same fleet. That is a business definition broad enough to see the contraction and narrow enough that the existing cars and instructors still matter.",
        "Notice what the exercise did *not* produce: a recommendation to become a technology company, or to enter the business of human mobility in general. Hyperopia would have suggested both."
      ]},

    { t: "h2", text: "Applying the myopia test" },
    { t: "p", text: "Here is the routine. It takes ten minutes and it is worth doing on your own employer." },
    { t: "ol", items: [
      "Write the firm’s business as a **product** definition, in the words the firm actually uses internally.",
      "Write it as a **function** definition: what job is the customer hiring this for? Push back one further step than feels natural, then stop before it becomes a platitude.",
      "List every way that function could be performed **without** your product category. These are your real competitors, and most will not be in your market-share report.",
      "For each one, ask what would have to become true for it to take ten percent of your customers — a price fall, a regulation, a habit change, a generation.",
      "Check which of those conditions are **already trending** in that direction. Those are not risks; they are forecasts."
    ]},
    { t: "p", text: "Step five is where it earns its keep. Myopia is not usually a failure to imagine the substitute — most executives can name it. It is the failure to treat an already-visible trend as real because the firm's structure, incentives and sunk assets all argue for ignoring it." },

    { t: "write", items: [
      "Levitt’s claim: industries decline because of how they define themselves, not because demand fell.",
      "The four self-deceptions: population growth, no substitute, faith in mass production, preoccupation with product R&D.",
      "Product definition vs market definition — copy four rows of the table.",
      "Abell’s three axes: customer groups (who), customer functions (what), technologies (how). Function is durable, technology is volatile.",
      "Hyperopia: a definition that rules nothing out decides nothing.",
      "The five-step myopia test."
    ]},

    { t: "h2", text: "What you should be able to do now" },
    { t: "p", text: "You can state Levitt's argument accurately, including the part people misquote — he did not say *define yourself broadly*, he said define yourself by the customer's function. You can run the five-step test on any firm and produce a list of competitors that its own reports do not contain. And you know the failure mode on the other side, which most courses never mention." },
    { t: "p", text: "Next lecture, the last of week one: the marketing mix. The four Ps, the three that services added, the four Cs that reframed the whole thing from the customer's side — and the question of whether a framework from 1960 is still the right way to organise the work." }
  ],
  glossary: [
    { term: "Marketing myopia", def: "Defining the business by the product it makes rather than the customer need it serves, so that substitutes from outside the category are invisible until it is too late." },
    { term: "Product definition", def: "A statement of what the firm makes. Narrow, comfortable, and blind to substitution." },
    { term: "Market definition", def: "A statement of the customer function the firm performs. Wider competitive set, and a different investment logic." },
    { term: "Marketing hyperopia", def: "The opposite error: a definition so broad that it rules nothing out and therefore guides nothing." },
    { term: "Abell’s three dimensions", def: "Defining a business by customer groups (who), customer functions (what need) and technologies (how) — treating function as durable and technology as volatile." },
    { term: "Substitute", def: "Any alternative means of performing the customer’s function, including means from outside the industry. Usually the thing that kills a category." },
    { term: "Competitive set", def: "The alternatives a customer actually considers. Defined by the customer’s function, not by the firm’s product classification." }
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

    { id: "w01l04q10", concept: "hyperopia", type: "short",
      q: "Give the one-line test for whether a business definition is usable, and apply it to “we are in the transportation business” as a definition for a regional railway.",
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
