window.LESSONS = window.LESSONS || {};
window.LESSONS['economics.w02'] = {
  "w02l01": {
    "standfirst": "In 2016 Ireland's statistical office announced that the country's economy had grown by 26.3% in a single year. Nothing had happened to Irish workplaces, wages or shops to match it. The number was not a mistake, and it was not a lie. Understanding how both of those can be true is most of what this lecture is for.",
    "thread": {
      "from": "Week 1 built the reasoning. Week 2 asks how anyone knows whether it is right.",
      "adds": "Where economic data comes from, what conventions are buried inside it, and how to interrogate a number before you build anything on it.",
      "toward": "2.2 to 2.5 are about extracting causal claims from data. This lecture is about whether the data says what you think it says in the first place. Week 9 measures the macroeconomy properly."
    },
    "objectives": [
      "Name the three ways economic data is produced and the characteristic weakness of each.",
      "Explain what GDP counts and what it leaves out, without reciting a list.",
      "Describe how a single accounting change moved a national growth rate by more than twenty points.",
      "Say why a price index depends on choices about a basket, and what those choices do to the answer.",
      "Ask the four questions of any economic statistic put in front of you.",
      "Distinguish a revision from an error, and treat provisional data accordingly."
    ],
    "concepts": [
      {
        "id": "where-data",
        "name": "Where economic data comes from"
      },
      {
        "id": "gdp-counts",
        "name": "What GDP counts and misses"
      },
      {
        "id": "ireland",
        "name": "When the convention moves the number"
      },
      {
        "id": "index-basket",
        "name": "Price indices and the basket"
      },
      {
        "id": "four-questions",
        "name": "The four questions"
      },
      {
        "id": "revisions",
        "name": "Revisions are not errors"
      }
    ],
    "vocab": [
      {
        "word": "convention",
        "plain": "An agreed rule for how something is counted. Not a fact about the world.",
        "et": "kokkulepe, tava"
      },
      {
        "word": "estimate",
        "plain": "A best calculation from incomplete information. Almost every macro number is one.",
        "et": "hinnang"
      },
      {
        "word": "survey",
        "plain": "Asking a sample of people or firms and scaling the answers up.",
        "et": "küsitlus, uuring"
      },
      {
        "word": "administrative",
        "plain": "Coming from records kept for another purpose — tax, benefits, customs.",
        "et": "haldusandmed"
      },
      {
        "word": "aggregate",
        "plain": "Everything added together into one number.",
        "et": "koondnäitaja"
      },
      {
        "word": "basket",
        "plain": "The fixed list of goods whose prices are tracked to measure inflation.",
        "et": "korv, tarbimiskorv"
      },
      {
        "word": "weight",
        "plain": "How much importance one item gets in an average.",
        "et": "kaal, osatähtsus"
      },
      {
        "word": "revision",
        "plain": "An updated figure published when better information arrives.",
        "et": "korrigeerimine, parandus"
      },
      {
        "word": "provisional",
        "plain": "First version, expected to change.",
        "et": "esialgne"
      },
      {
        "word": "domiciled",
        "plain": "Legally based in a country, which may have nothing to do with where the work happens.",
        "et": "registreeritud, asukohaga"
      },
      {
        "word": "intangible",
        "plain": "Something real but not physical — a patent, a brand, software.",
        "et": "immateriaalne"
      },
      {
        "word": "distort",
        "plain": "To pull a measurement away from what it is meant to show.",
        "et": "moonutama"
      }
    ],
    "tools": [
      {
        "kind": "checklist",
        "name": "The four questions",
        "answers": "Can I trust this number?",
        "when": "Before quoting, comparing or deciding on any economic statistic. Who produced it and why; what exactly is counted; what is deliberately excluded; and is it provisional. Thirty seconds, and it catches most of the damage."
      },
      {
        "kind": "test",
        "name": "Would the number move if only the rule changed?",
        "answers": "Am I looking at the world or at the convention?",
        "when": "When a figure jumps. If a change in accounting treatment alone could produce the jump, find out whether it did before writing a single sentence of explanation."
      },
      {
        "kind": "framework",
        "name": "Source, method, weakness",
        "answers": "What is this data likely to get wrong?",
        "when": "On any dataset. Surveys miss the people who do not answer; administrative records only see what the rule requires reporting; estimates inherit the assumptions of the model that produced them. Each weakness is predictable, which makes it manageable."
      }
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "Almost every macroeconomic number is an estimate",
        "say": "Almost every macroeconomic number is an estimate."
      },
      {
        "t": "p",
        "text": "People treat published economic statistics the way they treat the time: as a reading taken from an instrument. They are not. Nearly every one is an **estimate**, assembled from partial information according to rules somebody chose, and revised repeatedly afterwards.",
        "say": "People treat published economic statistics the way they treat the time. As a reading taken from an instrument. They're not. Nearly every one is an estimate, assembled from partial information, according to rules somebody chose, and revised repeatedly afterwards."
      },
      {
        "t": "p",
        "text": "That is not a scandal. Counting an economy is genuinely hard: it has no edges you can see, much of it is not recorded anywhere, and what counts as 'output' has to be decided rather than observed. But it does mean that knowing the conventions is not pedantry — it is most of the skill.",
        "say": "That isn't a scandal. Counting an economy is genuinely hard. It has no edges you can see, much of it isn't recorded anywhere, and what counts as output has to be decided rather than observed. But it does mean that knowing the conventions isn't pedantry. It's most of the skill."
      },
      {
        "t": "table",
        "head": [
          "Where data comes from",
          "How it works",
          "Its characteristic weakness"
        ],
        "rows": [
          [
            "**Surveys**",
            "Ask a sample of households or firms; scale up",
            "The people who do not answer are not like the people who do. Response rates have been falling for decades."
          ],
          [
            "**Administrative records**",
            "Reuse data collected for tax, customs, benefits",
            "You only see what the rule required somebody to report — and behaviour adapts to the rule."
          ],
          [
            "**Estimates and models**",
            "Fill gaps with assumptions and imputation",
            "The output inherits every assumption, and the assumptions are rarely in the headline."
          ]
        ],
        "say": "Data comes from three places. Surveys — ask a sample of households or firms, then scale up. Their characteristic weakness is that the people who don't answer aren't like the people who do, and response rates have been falling for decades. Administrative records — reusing data collected for tax, customs or benefits. There you only see what the rule required somebody to report, and behaviour adapts to the rule. And estimates and models, which fill the gaps with assumptions. Those inherit every assumption, and the assumptions are rarely in the headline."
      },
      {
        "t": "p",
        "text": "Each weakness is predictable, and that is the useful part. If a survey shows something surprising about a group that rarely responds, be careful. If a tax-based number changes just after the tax rule changed, suspect the rule. Knowing which of the three you are holding tells you what it is likely to get wrong.",
        "say": "Each weakness is predictable, and that's the useful part. If a survey shows something surprising about a group that rarely responds, be careful. If a tax-based number changes just after the tax rule changed, suspect the rule. Knowing which of the three you're holding tells you what it's likely to get wrong."
      },
      {
        "t": "h2",
        "text": "What GDP is, and what it is not",
        "say": "What GDP is, and what it isn't."
      },
      {
        "t": "p",
        "text": "**Gross domestic product** is the market value of all final goods and services produced within a country in a period. Each word in that sentence is a decision.",
        "say": "Gross domestic product is the market value of all final goods and services produced within a country in a period. And every word in that sentence is a decision."
      },
      {
        "t": "ul",
        "items": [
          "**Market value** — so things without a price are hard to include. Unpaid housework and childcare are enormous economic activity and appear nowhere. A country where more care is done for pay has a higher GDP than an identical one where it is done for free.",
          "**Final** — intermediate goods are excluded to avoid counting the same value twice. The flour in the bread is not counted separately from the bread.",
          "**Produced** — not sold, and not consumed. Output that goes into a warehouse still counts.",
          "**Within a country** — and this is the word that produces the case study below. It is about geography, not ownership: output made in Estonia by a foreign-owned firm is Estonian GDP.",
          "**In a period** — so GDP is a flow per unit of time, never a stock. A country's GDP is not its wealth, any more than your salary is your savings."
        ],
        "say": "Market value — so things without a price are hard to include. Unpaid housework and childcare are enormous economic activity and appear nowhere. A country where more care is done for pay has a higher GDP than an identical one where it's done for free. Final — intermediate goods are excluded, so the flour in the bread isn't counted separately from the bread. Produced — not sold and not consumed, so output sitting in a warehouse still counts. Within a country — and this is the word that produces the case study in a moment. It's about geography, not ownership. And in a period — so GDP is a flow, never a stock. A country's GDP is not its wealth, any more than your salary is your savings."
      },
      {
        "t": "p",
        "text": "Two exclusions matter more than the rest. GDP says nothing about **distribution** — a country can double its GDP with all the increase going to a hundred people. And it counts activity regardless of whether the activity is good: repairing storm damage raises GDP, and so does a long commute. That is a criticism of using GDP as a measure of welfare, which it was never designed to be, rather than of GDP itself.",
        "say": "Two exclusions matter more than the rest. GDP says nothing about distribution — a country can double its GDP with all of the increase going to a hundred people. And it counts activity regardless of whether the activity is good. Repairing storm damage raises GDP. So does a long commute. That's a criticism of using GDP as a measure of welfare, which it was never designed to be."
      },
      {
        "t": "case",
        "title": "The year Irish GDP grew 26.3% and nobody felt richer",
        "ps": [
          "In July 2016 Ireland's Central Statistics Office revised its figure for 2015 growth to **26.3%**. For comparison, a fast-growing developed economy manages 4 or 5%. The economist Paul Krugman called it **leprechaun economics**, and the name stuck because nobody could find a better explanation in a sentence.",
          "Nothing in Ireland matched it. Employment, wages, consumption and tax receipts moved at ordinary rates. The Irish people did not become a quarter richer, and they knew it.",
          "The cause was the word **within**. A small number of multinational corporations restructured, moving ownership of very large **intangible** assets — patents and intellectual property — onto Irish balance sheets, and relocating aircraft-leasing activity. Under the international rules for national accounts, output attributed to assets held by firms resident in Ireland is Irish output. The assets moved; the measured output followed; the actual production and the actual people did not move at all.",
          "The CSO had not made an error. It had applied the agreed international rules correctly to an unusual event, and those rules were written for an economy of factories and farms rather than one where a company can relocate the legal home of a patent portfolio in an afternoon.",
          "What happened next is the part worth learning from. Rather than defending the number, the CSO built a new one: **modified gross national income**, written **GNI\\***, which strips out the profits of redomiciled companies and the depreciation of foreign-owned intellectual property and leased aircraft. Ireland now has a headline measure for international comparison and a second measure for understanding its own economy, and Irish policy discussion largely uses the second.",
          "Three lessons, and they generalise well beyond Ireland. **One:** a number can be correct and useless simultaneously, and 'is it accurate?' is therefore the wrong first question. **Two:** conventions written for one kind of economy misfire when the economy changes — and intangible, mobile capital breaks measurement rules designed for physical things. **Three:** the right response to a broken measure is usually a second measure with a stated purpose, not an argument about the first."
        ],
        "say": "So here's what that produces. In July twenty sixteen Ireland's Central Statistics Office revised its figure for twenty fifteen growth to twenty-six point three percent. For comparison, a fast-growing developed economy manages four or five. The economist Paul Krugman called it leprechaun economics, and the name stuck because nobody could do better in a sentence. Nothing in Ireland matched it. Employment, wages, consumption and tax receipts all moved at ordinary rates. The Irish people did not become a quarter richer, and they knew it. The cause was that word, within. A small number of multinational corporations restructured, moving ownership of very large intangible assets — patents and intellectual property — onto Irish balance sheets, and relocating aircraft-leasing activity. Under the international rules for national accounts, output attributed to assets held by firms resident in Ireland is Irish output. The assets moved. The measured output followed. The actual production and the actual people did not move at all. And the statistical office had not made an error. It applied the agreed international rules correctly to an unusual event, and those rules were written for an economy of factories and farms — not for one where a company can relocate the legal home of a patent portfolio in an afternoon. What happened next is the part worth learning from. Rather than defending the number, they built a new one. Modified gross national income, written G-N-I star, which strips out the profits of redomiciled companies and the depreciation of foreign-owned intellectual property and leased aircraft. Ireland now has a headline measure for international comparison, and a second measure for understanding its own economy. And Irish policy discussion largely uses the second. Three lessons, and they travel well beyond Ireland. One: a number can be correct and useless at the same time, so is it accurate is the wrong first question. Two: conventions written for one kind of economy misfire when the economy changes. And three: the right response to a broken measure is usually a second measure with a stated purpose, not an argument about the first."
      },
      {
        "t": "h2",
        "text": "Inflation, and the basket somebody chose",
        "say": "Inflation, and the basket somebody chose."
      },
      {
        "t": "p",
        "text": "The same lesson appears in the other number everyone quotes. A **consumer price index** tracks the cost of a fixed basket of goods and services over time. Inflation is the rate at which that basket's cost rises.",
        "say": "The same lesson turns up in the other number everybody quotes. A consumer price index tracks the cost of a fixed basket of goods and services over time. Inflation is the rate at which that basket's cost rises."
      },
      {
        "t": "p",
        "text": "Everything therefore depends on the basket, and the basket is a set of choices.",
        "say": "So everything depends on the basket. And the basket is a set of choices."
      },
      {
        "t": "ol",
        "items": [
          "**What goes in.** Statistical offices survey household spending and include what people actually buy, in proportion to how much they spend on it. The proportions are the **weights**.",
          "**How often it is updated.** If the basket is fixed for too long it measures the cost of a lifestyle nobody leads any more. If it changes constantly, the index is no longer comparing like with like over time.",
          "**How quality changes are handled.** A phone costing the same as five years ago is a much better phone. Statisticians adjust for this, and the adjustment is a judgement that measurably affects the published inflation rate.",
          "**Whose basket.** The index describes an average household that may not exist. A pensioner who heats a home and does not drive, and a commuter with a mortgage, experience genuinely different inflation rates from the same published figure."
        ],
        "say": "What goes in — statistical offices survey household spending and include what people actually buy, in proportion to how much they spend on it. Those proportions are the weights. How often it's updated — fix the basket for too long and you're measuring the cost of a lifestyle nobody leads any more; change it constantly and you're no longer comparing like with like over time. How quality changes are handled — a phone costing the same as five years ago is a much better phone, and the adjustment for that is a judgement which measurably affects the published rate. And whose basket — the index describes an average household that may not exist. A pensioner who heats a home and doesn't drive, and a commuter with a mortgage, experience genuinely different inflation from the same published figure."
      },
      {
        "t": "p",
        "text": "None of this makes the number fake. It makes it a **measurement of a defined thing**, and the definition is available to read. The practical consequence is that 'inflation is 4%' and 'my costs rose 9%' can both be true, which is worth knowing before you conclude that somebody is lying to you.",
        "say": "None of that makes the number fake. It makes it a measurement of a defined thing, and the definition is published. The practical consequence is that inflation is four percent and my costs rose nine percent can both be true. Which is worth knowing before you conclude that somebody is lying to you."
      },
      {
        "t": "h2",
        "text": "The four questions",
        "say": "So here are the four questions."
      },
      {
        "t": "p",
        "text": "Here is the routine to run on any economic statistic. It takes about thirty seconds and prevents most of the harm.",
        "say": "This is the routine to run on any economic statistic. It takes about thirty seconds and it prevents most of the harm."
      },
      {
        "t": "table",
        "head": [
          "Question",
          "Why it matters",
          "Where to look"
        ],
        "rows": [
          [
            "**Who produced it, and why?**",
            "A statistical office, a central bank, a trade association and a campaign group have different incentives — and only some publish their method",
            "The bottom of the page, or the methodology note"
          ],
          [
            "**What exactly is counted?**",
            "'Unemployment' can mean claiming benefits, or looking for work, or wanting more hours. The three move differently",
            "The definitions section, always published"
          ],
          [
            "**What is excluded?**",
            "Ireland's GDP excluded nothing it should have included; the problem was what it included. Both directions matter",
            "Coverage notes, footnotes, the small print under a chart"
          ],
          [
            "**Is it provisional?**",
            "First estimates of GDP are routinely revised by meaningful amounts, sometimes changing the sign",
            "The release calendar and the vintage label on the series"
          ]
        ],
        "say": "One. Who produced it, and why? A statistical office, a central bank, a trade association and a campaign group have different incentives, and only some publish their method. Look at the bottom of the page. Two. What exactly is counted? Unemployment can mean claiming benefits, or looking for work, or wanting more hours, and the three move differently. Look at the definitions section. Three. What's excluded? Ireland's GDP excluded nothing it should have included — the problem was what it included. Both directions matter. And four. Is it provisional? First estimates of GDP get revised by meaningful amounts, sometimes changing the sign."
      },
      {
        "t": "p",
        "text": "You have already seen what happens when nobody asks the third one: the open banking figures in another course's material, the airline margins, the wage medians in lecture 1.1 — every one of them carries a coverage note that changes how the headline should be read.",
        "say": "You have already seen what happens when nobody asks that third question. Every figure quoted in this course so far — the open banking numbers, the airline margins, the wage medians — carries a coverage note that changes how the headline should be read."
      },
      {
        "t": "h3",
        "text": "One word, three numbers: unemployment",
        "say": "One word, three numbers. Unemployment."
      },
      {
        "t": "p",
        "text": "The fourth question — *what exactly is counted?* — is easiest to feel with a word everyone thinks they understand. There is no single unemployment rate; there are several, and they move differently.",
        "say": "That fourth question — what exactly is counted — is easiest to feel with a word everybody thinks they understand. There's no single unemployment rate. There are several, and they move differently."
      },
      {
        "t": "ul",
        "items": [
          "**Registered unemployment** counts people signed up with the state employment service, often tied to benefit eligibility. Change the benefit rules and this number moves without a single job appearing or disappearing.",
          "**Survey unemployment**, the internationally comparable measure, counts people who are without work, **available** to start, and have **actively looked** in a recent period. All three conditions must hold, and the third excludes people who have given up.",
          "**Broader measures** add the discouraged — those who want work but have stopped searching — and the underemployed, who have a job but want more hours."
        ],
        "say": "Registered unemployment counts people signed up with the state employment service, often tied to benefit eligibility. Change the benefit rules and this number moves without a single job appearing or disappearing. Survey unemployment, the internationally comparable measure, counts people who are without work, available to start, and have actively looked in a recent period. All three conditions have to hold, and the third one excludes people who've given up. And broader measures add the discouraged, and the underemployed who have a job but want more hours."
      },
      {
        "t": "p",
        "text": "In a bad downturn these diverge sharply, and in a predictable direction: as the search becomes hopeless, people stop looking, leave the survey measure, and the headline unemployment rate **falls**. Nothing improved. The definition simply stopped counting them.",
        "say": "In a bad downturn those diverge sharply, and in a predictable direction. As the search becomes hopeless, people stop looking, leave the survey measure — and the headline unemployment rate falls. Nothing improved. The definition simply stopped counting them."
      },
      {
        "t": "p",
        "text": "This is why a competent reader asks which measure before interpreting a movement, and why serious analysis quotes the **employment rate** — the share of working-age people who have a job — alongside unemployment. That one cannot be improved by people giving up.",
        "say": "Which is why a competent reader asks which measure before interpreting a movement. And why serious analysis quotes the employment rate — the share of working-age people who have a job — alongside unemployment. That one can't be improved by people giving up."
      },
      {
        "t": "h2",
        "text": "Revisions are not errors",
        "say": "Revisions are not errors."
      },
      {
        "t": "p",
        "text": "A first GDP estimate is published within weeks of the quarter ending, using partial returns. Better data arrives for months afterwards, and the figure is updated. Journalists sometimes report this as the statisticians having got it wrong. They did not; they published the best estimate available at the time and then improved it, which is what you would want.",
        "say": "A first GDP estimate gets published within weeks of the quarter ending, using partial returns. Better data arrives for months afterwards, and the figure is updated. Journalists sometimes report that as the statisticians having got it wrong. They didn't. They published the best estimate available at the time and then improved it, which is what you'd want."
      },
      {
        "t": "p",
        "text": "The practical consequences are concrete. Do not build an argument on a single provisional quarter. Expect the direction of a revision to be systematic rather than random — early estimates often miss turning points, because the information that reveals a turning point arrives late. And when comparing across years, check you are comparing the same **vintage** of the data rather than an old published figure against a revised one.",
        "say": "The practical consequences are concrete. Don't build an argument on a single provisional quarter. Expect the direction of a revision to be systematic rather than random — early estimates often miss turning points, because the information that reveals a turning point arrives late. And when comparing across years, check you're comparing the same vintage of the data, rather than an old published figure against a revised one."
      },
      {
        "t": "warn",
        "title": "The failure this lecture is trying to prevent",
        "ps": [
          "A number appears. It is striking. It gets explained — in a newspaper, in a meeting, in your own head — with a story about the world. The story is fluent and might be entirely fictional, because the number moved for a reason inside the measurement rather than out in the economy.",
          "The habit that prevents it: **before explaining a number, establish what it measures.** If a change in the counting rules alone could have produced the movement, find out whether it did. Ireland's 26.3% had a dozen confident explanations in the press within a week, and the correct one was an accounting rule."
        ],
        "say": "And here's the failure this lecture is trying to prevent. A number appears. It's striking. It gets explained — in a newspaper, in a meeting, in your own head — with a story about the world. The story is fluent, and it might be entirely fictional, because the number moved for a reason inside the measurement rather than out in the economy. The habit that prevents it: before explaining a number, establish what it measures. If a change in the counting rules alone could have produced the movement, find out whether it did. Ireland's twenty-six point three percent had a dozen confident explanations in the press within a week, and the correct one was an accounting rule."
      },
      {
        "t": "h2",
        "text": "What you should be able to do now",
        "say": "So what can you do now?"
      },
      {
        "t": "ul",
        "items": [
          "Say which of the three sources a statistic came from, and what that source tends to get wrong.",
          "State what GDP counts and the two exclusions that matter most.",
          "Explain the Irish case without calling it a mistake or a fraud.",
          "Say why a published inflation rate and your own experience can differ without anyone lying.",
          "Run the four questions before quoting a number.",
          "Treat provisional data as provisional, and check the vintage before comparing across years."
        ],
        "say": "Say which of the three sources a statistic came from, and what that source tends to get wrong. State what GDP counts and the two exclusions that matter most. Explain the Irish case without calling it a mistake or a fraud. Say why a published inflation rate and your own experience can differ without anybody lying. Run the four questions before quoting a number. And treat provisional data as provisional."
      }
    ],
    "exercises": [
      {
        "task": "**Run the four questions on a real number.** Take one economic statistic from this week's news. Answer all four questions from the source's own documentation, and note which one took longest.",
        "hint": "Statistics Estonia, Eurostat and the European Central Bank all publish methodology alongside every release. If a number's source will not tell you what it counts, that is itself the answer to question one."
      },
      {
        "task": "**Build your own basket.** Write down roughly what you spent last month by category and the weights that implies. Compare your weights with the published CPI weights for your country.",
        "hint": "Statistics Estonia publishes the consumer basket weights. If your housing or transport share differs a lot from the national average, your personal inflation rate genuinely differs from the headline — and you can now say by roughly how much."
      },
      {
        "task": "**Find a revision.** Take one GDP series and compare the first published estimate for a quarter with the current figure for the same quarter. Write the size of the revision and whether it changed the story.",
        "hint": "Statistical offices keep the release archive. Look for a quarter near a turning point — that is where revisions are largest and where the early estimate most often told a different story."
      },
      {
        "task": "**Find a number explained by a rule.** Look for a statistic that jumped and ask whether a definitional or accounting change could account for it. Write the explanation you would have given before checking, and what you found.",
        "hint": "Migration statistics, unemployment definitions and government debt measures are rich territory. Writing your pre-check explanation down first is the part that teaches you something."
      }
    ],
    "reading": [
      {
        "author": "Central Statistics Office, Ireland",
        "work": "Modified GNI (GNI*) and the national accounts",
        "where": "cso.ie",
        "year": 2024,
        "note": "A statistical office explaining, in public, why its headline number stopped being useful and what it built instead. An unusually honest document."
      },
      {
        "author": "Diane Coyle",
        "work": "GDP: A Brief but Affectionate History",
        "where": "Princeton University Press",
        "year": 2014,
        "note": "Short, readable, and the best single book on where the number came from and what it cannot do. If you read one thing alongside week 2, read this."
      },
      {
        "author": "Statistics Estonia",
        "work": "Consumer price index: methodology and basket weights",
        "where": "stat.ee",
        "year": 2026,
        "note": "The basket for your own country, published in full. Compare it with your own spending — that exercise is more instructive than any amount of reading about indices."
      },
      {
        "author": "Eurostat",
        "work": "European System of Accounts (ESA 2010)",
        "where": "ec.europa.eu",
        "year": 2013,
        "note": "The rulebook that made Ireland's 26.3% the correct answer. Not to be read through — to be consulted, so you know such a rulebook exists and who writes it."
      }
    ],
    "glossary": [
      {
        "term": "GDP",
        "def": "The market value of all final goods and services produced within a country in a period. A flow, not a stock, and silent about distribution."
      },
      {
        "term": "GNI*",
        "def": "Modified gross national income: Ireland's alternative measure, stripping out redomiciled companies' profits and depreciation on foreign-owned intangibles and leased aircraft."
      },
      {
        "term": "Intangible asset",
        "def": "A non-physical asset such as a patent or software. Mobile between countries in a way factories are not, which breaks measures built for physical capital."
      },
      {
        "term": "Consumer price index",
        "def": "The cost over time of a fixed, weighted basket of goods and services. Inflation is its rate of change."
      },
      {
        "term": "Weight",
        "def": "The share of the basket given to an item, based on how much households spend on it."
      },
      {
        "term": "Revision",
        "def": "An updated estimate published as better information arrives. Normal practice, not an admission of error."
      },
      {
        "term": "Vintage",
        "def": "Which release of a data series you are looking at. Comparing across vintages is a common and invisible mistake."
      },
      {
        "term": "Response rate",
        "def": "The share of those surveyed who answer. Falling response rates are the main long-run threat to survey-based statistics."
      }
    ],
    "quiz": [
      {
        "id": "w02l01q1",
        "concept": "where-data",
        "type": "mcq",
        "q": "What is the characteristic weakness of survey-based economic data?",
        "options": [
          "Surveys are always too small",
          "The people who do not answer are systematically different from those who do",
          "Surveys are published too slowly",
          "Respondents cannot be trusted to tell the truth"
        ],
        "answer": 1,
        "explain": "Non-response is the structural problem, and it is getting worse as response rates fall. It is not solved by a larger sample: if the missing group differs, a bigger survey of the people who answer reproduces the same bias more confidently."
      },
      {
        "id": "w02l01q2",
        "concept": "gdp-counts",
        "type": "multi",
        "q": "Which of these are counted in GDP? Select all that apply.",
        "options": [
          "A meal cooked at home for your family",
          "A meal bought in a restaurant",
          "Goods produced this quarter and stored unsold in a warehouse",
          "The flour used by a bakery to make bread it sells",
          "Repairs after a storm"
        ],
        "answer": [
          1,
          2,
          4
        ],
        "explain": "Home cooking has no market value, so it is invisible — a country that pays for care it used to do for free records growth without any change in activity. The flour is intermediate, so counting it would double-count. Storm repairs count, which is the standard illustration that GDP measures activity rather than welfare."
      },
      {
        "id": "w02l01q3",
        "concept": "gdp-counts",
        "type": "mcq",
        "q": "Which word in the GDP definition explains why output made in Estonia by a foreign-owned firm is Estonian GDP?",
        "options": [
          "Final",
          "Market value",
          "Within a country",
          "In a period"
        ],
        "answer": 2,
        "explain": "Domestic product is about geography, not ownership — and it is exactly this word that produced the Irish case, once the thing 'located' in a country was a patent portfolio rather than a factory."
      },
      {
        "id": "w02l01q4",
        "concept": "ireland",
        "type": "mcq",
        "q": "Ireland's 2015 GDP growth was revised to 26.3%. What was the cause?",
        "options": [
          "A calculation error later corrected",
          "An exceptional year of genuine economic expansion",
          "Multinationals relocating ownership of intangible assets and aircraft leasing into Ireland",
          "A change in the population estimate"
        ],
        "answer": 2,
        "explain": "The assets moved; the measured output followed; the production and the people did not. The CSO applied the international rules correctly to an event those rules were never designed for."
      },
      {
        "id": "w02l01q5",
        "concept": "ireland",
        "type": "mcq",
        "q": "What did Ireland's statistical office do in response?",
        "options": [
          "Restated the GDP figure",
          "Built a second measure, GNI*, stripping out redomiciled profits and foreign-owned intangibles",
          "Stopped publishing GDP",
          "Adopted a different international standard"
        ],
        "answer": 1,
        "explain": "The response to a broken measure is usually a second measure with a stated purpose, not an argument about the first. Ireland now uses GDP for international comparison and GNI* for understanding its own economy."
      },
      {
        "id": "w02l01q6",
        "concept": "ireland",
        "type": "short",
        "q": "Explain how Ireland's 26.3% figure could be both correct and useless, and give the general lesson for reading any statistic.",
        "must": [
          {
            "point": "correct: the international accounting rules were applied properly",
            "any": [
              "rules",
              "correct",
              "standard",
              "esa",
              "properly",
              "not an error",
              "accurate"
            ]
          },
          {
            "point": "the cause was assets relocating, not production changing",
            "any": [
              "asset",
              "intangible",
              "patent",
              "relocat",
              "moved",
              "intellectual property",
              "aircraft",
              "balance sheet"
            ]
          },
          {
            "point": "useless: nothing about Irish living standards changed",
            "any": [
              "living standard",
              "nobody",
              "not richer",
              "wages",
              "employment",
              "no change",
              "people"
            ]
          },
          {
            "point": "the rules were designed for a physical economy, not a mobile-intangible one",
            "any": [
              "designed",
              "physical",
              "factories",
              "written for",
              "intangible",
              "mobile",
              "outdated"
            ]
          },
          {
            "point": "general lesson: establish what a number measures before explaining it",
            "any": [
              "what it measures",
              "before explain",
              "establish",
              "definition",
              "convention",
              "check first"
            ]
          },
          {
            "point": "'is it accurate' is the wrong first question",
            "any": [
              "wrong question",
              "accurate",
              "accuracy",
              "not whether",
              "first question",
              "useful"
            ]
          }
        ],
        "answer": "It was **correct** because the Central Statistics Office applied the agreed international national-accounts rules to what actually happened: a small number of multinationals moved ownership of very large intangible assets — patents and intellectual property — onto Irish balance sheets and relocated aircraft-leasing activity, and under those rules output attributed to assets held by resident firms is domestic output. It was **useless** because nothing in the Irish economy matched it: employment, wages, consumption and tax receipts all moved at ordinary rates, and no Irish person was a quarter richer. The two are compatible because the rules were written for an economy of factories and farms, where what is 'within a country' is obvious, and they misfire when the capital in question can change its legal home in an afternoon. The general lesson is that **'is it accurate?' is the wrong first question**. Establish what a number measures — and what convention it applies — before explaining what it means, because a figure can move for reasons inside the measurement rather than out in the world, and any story you invent to explain such a movement will be fluent and false.",
        "explain": "Every confident press explanation of the Irish figure in the week it appeared was wrong, and the correct explanation was an accounting rule. That is the failure mode worth remembering."
      },
      {
        "id": "w02l01q7",
        "concept": "index-basket",
        "type": "mcq",
        "q": "Published inflation is 4%, but your own costs rose 9%. Which is true?",
        "options": [
          "The published figure must be wrong",
          "You are miscalculating your own spending",
          "Both can be correct — the index describes an average basket, and yours differs",
          "Inflation cannot differ between people"
        ],
        "answer": 2,
        "explain": "The index measures a defined thing: a weighted average basket. If you spend far more than average on the items that rose fastest, your experienced rate genuinely differs. The definition is published, which means the difference can be explained rather than merely resented."
      },
      {
        "id": "w02l01q8",
        "concept": "index-basket",
        "type": "multi",
        "q": "Which choices inside a price index affect the published inflation rate? Select all that apply.",
        "options": [
          "Which goods are in the basket",
          "The weights given to each item",
          "How often the basket is updated",
          "How quality improvements are adjusted for",
          "The colour of the published chart"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explain": "All four are consequential and all four are judgement calls made by statisticians and documented publicly. Quality adjustment is the most contested — a phone that costs the same as five years ago is a better phone, and how much of that counts as a price fall measurably changes the headline."
      },
      {
        "id": "w02l01q9",
        "concept": "four-questions",
        "type": "mcq",
        "q": "Which of the four questions would most likely have caught the problem with the Irish figure?",
        "options": [
          "Who produced it, and why?",
          "What exactly is counted?",
          "Is it provisional?",
          "None — the problem was undetectable"
        ],
        "answer": 1,
        "explain": "*What exactly is counted?* — output within the territory, including that attributed to assets held by resident firms. Once that is in front of you, the possibility that a balance-sheet move could produce the jump is obvious, and the question becomes checkable rather than speculative."
      },
      {
        "id": "w02l01q10",
        "concept": "revisions",
        "type": "mcq",
        "q": "A GDP figure is revised three months after first publication. What does this mean?",
        "options": [
          "The statisticians made an error",
          "Better information arrived and the estimate was updated, which is normal practice",
          "The economy changed retrospectively",
          "The original figure was politically manipulated"
        ],
        "answer": 1,
        "explain": "First estimates use partial returns because they are published within weeks. Calling a revision an error discourages exactly the behaviour you want, which is publishing the best current estimate and improving it."
      },
      {
        "id": "w02l01q11",
        "concept": "revisions",
        "type": "mcq",
        "q": "Why does the lecture warn against building an argument on a single provisional quarter?",
        "options": [
          "Provisional data is randomly wrong",
          "Revisions can be systematic, and early estimates often miss turning points because the revealing information arrives late",
          "Provisional data is not published officially",
          "Quarterly data is always less accurate than annual"
        ],
        "answer": 1,
        "explain": "The word *systematic* is the point. If the errors were random you could average them away; because they cluster at exactly the moments you most want to identify — turning points — a confident story built on one provisional quarter is most likely to be wrong precisely when it matters most."
      },
      {
        "id": "w02l01q12",
        "concept": "where-data",
        "type": "short",
        "q": "A trade association publishes a report saying its industry supports 40,000 jobs. Run the four questions and say what you would want to know before quoting it.",
        "must": [
          {
            "point": "who produced it and why — an association has an interest in a large number",
            "any": [
              "association",
              "interest",
              "incentive",
              "lobby",
              "motive",
              "produce",
              "why",
              "not neutral"
            ]
          },
          {
            "point": "what is counted — direct, indirect and induced jobs are different things",
            "any": [
              "direct",
              "indirect",
              "induced",
              "supply chain",
              "supported",
              "counted",
              "definition",
              "full-time"
            ]
          },
          {
            "point": "what is excluded — jobs that would exist anyway, or elsewhere",
            "any": [
              "exclud",
              "anyway",
              "displaced",
              "counterfactual",
              "elsewhere",
              "would still",
              "without"
            ]
          },
          {
            "point": "is it provisional or which year it refers to",
            "any": [
              "provisional",
              "year",
              "date",
              "when",
              "vintage",
              "updated",
              "current"
            ]
          },
          {
            "point": "wants the methodology published before quoting",
            "any": [
              "methodolog",
              "method",
              "how",
              "published",
              "source",
              "see the",
              "documentation"
            ]
          },
          {
            "point": "notes 'supported' is a wider claim than 'employed'",
            "any": [
              "supported",
              "employed",
              "wider",
              "broader",
              "not the same",
              "stronger claim"
            ]
          }
        ],
        "answer": "**Who and why:** a trade association exists to argue for its members, so it has an interest in the largest defensible number — that does not make it false, but it means the method matters more than usual. **What is counted:** *supports* is a much wider word than *employs*. It usually blends direct employment with indirect jobs in the supply chain and 'induced' jobs created when those workers spend their wages, and the multiplier that produces the third category is a modelling choice that can double the total. I would want the split. **What is excluded:** the crucial omission is the counterfactual — how many of those people would be employed anyway, doing something else, if the industry were smaller. A gross jobs figure with no netting-off is not a measure of the industry's contribution. **Is it provisional:** which year does it describe, and has it been updated? Before quoting it I would want the published methodology; if the association will not say how *supported* was defined and what multiplier was used, the answer to question one has effectively been given.",
        "explain": "Employment-impact numbers from interested parties are the most frequently over-quoted statistics in public life, and nearly all of the inflation happens in the word *supports*."
      }
    ]
  },
  "w02l02": {
    "standfirst": "People with more education earn more. Firms that advertise more sell more. Countries that trade more grow faster. Every one of those sentences is true, and not one of them tells you what happens if you add education, advertising or trade. The gap between those two things is the central problem of empirical economics, and it takes decades of argument to close for a single question.",
    "thread": {
      "from": "2.1 asked whether a number measures what you think it measures.",
      "adds": "Whether a relationship between two numbers means what you think it means — the three rival explanations for any correlation, and what an identification strategy is.",
      "toward": "2.3 gives the designs that solve this in practice. 2.4 reads the output. Every empirical claim in weeks 8 to 16 should be met with the question this lecture teaches."
    },
    "objectives": [
      "List the rival explanations for an observed correlation and test a claim against each.",
      "Explain the fundamental problem of causal inference in one sentence.",
      "Define a counterfactual and say why it is never observed.",
      "Identify reverse causality and confounding in concrete examples from two different fields.",
      "Explain what 'identification' means and why it is an argument rather than a statistical technique.",
      "Say why controlling for more variables does not, on its own, establish causation."
    ],
    "concepts": [
      {
        "id": "three-rivals",
        "name": "The rival explanations for a correlation"
      },
      {
        "id": "counterfactual",
        "name": "The counterfactual and why it is missing"
      },
      {
        "id": "reverse",
        "name": "Reverse causality"
      },
      {
        "id": "confounding",
        "name": "Confounding and selection"
      },
      {
        "id": "identification",
        "name": "What identification means"
      },
      {
        "id": "controls-limit",
        "name": "Why adding controls is not enough"
      }
    ],
    "vocab": [
      {
        "word": "causation",
        "plain": "One thing actually bringing another about, not just appearing alongside it.",
        "et": "põhjuslikkus"
      },
      {
        "word": "counterfactual",
        "plain": "What would have happened otherwise. Never observed, always needed.",
        "et": "vastandfakt, teisiti-stsenaarium"
      },
      {
        "word": "confounder",
        "plain": "A third thing causing both of the things you are comparing.",
        "et": "segav tegur"
      },
      {
        "word": "selection",
        "plain": "People ending up in a group for reasons connected to the outcome you are measuring.",
        "et": "valikuefekt"
      },
      {
        "word": "spurious",
        "plain": "Looking like a real relationship and not being one.",
        "et": "näiline, petlik"
      },
      {
        "word": "treatment",
        "plain": "Whatever is being done — a policy, a drug, a course. The thing whose effect you want.",
        "et": "sekkumine, mõjutus"
      },
      {
        "word": "control group",
        "plain": "The comparison group that did not get the treatment.",
        "et": "kontrollrühm"
      },
      {
        "word": "attribute",
        "plain": "To assign a cause to an effect.",
        "et": "omistama"
      },
      {
        "word": "plausible",
        "plain": "Believable — which is not the same as established.",
        "et": "usutav"
      },
      {
        "word": "ability",
        "plain": "Here, the qualities of a person that affect both their schooling and their earnings.",
        "et": "võimekus"
      },
      {
        "word": "endogenous",
        "plain": "Determined inside the system you are studying, rather than imposed from outside.",
        "et": "sisemiselt määratud"
      },
      {
        "word": "assignment",
        "plain": "How units came to be in the treated group rather than the untreated one.",
        "et": "jaotus, määramine"
      }
    ],
    "tools": [
      {
        "kind": "checklist",
        "name": "The four rivals",
        "answers": "Does this correlation mean what the headline says?",
        "when": "On every empirical claim. Could the causation run backwards? Could a third factor cause both? Could the groups differ because of how they were selected? Could it be chance? Only after all four fail is the causal reading the leading one."
      },
      {
        "kind": "test",
        "name": "Name the counterfactual",
        "answers": "What is this being compared with?",
        "when": "Whenever an effect is claimed. Say out loud what would have happened without the treatment, and who is standing in for it. If nobody is standing in for it, there is no effect estimate — only a description."
      },
      {
        "kind": "test",
        "name": "Why is this person in this group?",
        "answers": "Is assignment related to the outcome?",
        "when": "Before trusting any comparison between groups. If people chose their group, or were chosen for reasons connected to the outcome, the comparison is contaminated — and no amount of statistics fixes it afterwards."
      }
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "Two different questions",
        "say": "Two different questions."
      },
      {
        "t": "p",
        "text": "Consider a fact that is not in dispute: people with more years of education earn more. In every country, in every decade, measured every way anyone has tried, the relationship is strong and positive.",
        "say": "Consider a fact that isn't in dispute. People with more years of education earn more. In every country, in every decade, measured every way anybody has tried, the relationship is strong and positive."
      },
      {
        "t": "p",
        "text": "Now notice that two completely different questions live inside it.",
        "say": "Now notice that two completely different questions live inside it."
      },
      {
        "t": "ol",
        "items": [
          "**Descriptive:** how much more do the more-educated earn? This is a measurement, and 2.1 told you how to interrogate it.",
          "**Causal:** if a particular person got one more year of education, how much more would *they* earn? This is a question about a world that does not exist, and no amount of data about the world that does exist answers it directly."
        ],
        "say": "Descriptive: how much more do the more-educated earn? That's a measurement, and last lecture told you how to interrogate it. Causal: if a particular person got one more year of education, how much more would they earn? That's a question about a world that doesn't exist, and no amount of data about the world that does exist answers it directly."
      },
      {
        "t": "p",
        "text": "Almost every question people actually care about is the second kind. Does this policy work? Would this campaign pay for itself? Should I take this course? Each asks about the difference between what happened and what would otherwise have happened — and that second half is the problem.",
        "say": "And almost every question people actually care about is the second kind. Does this policy work? Would this campaign pay for itself? Should I take this course? Each one asks about the difference between what happened and what would otherwise have happened. And that second half is the problem."
      },
      {
        "t": "write",
        "items": [
          "**The fundamental problem of causal inference:** you can never observe the same unit both treated and untreated at the same moment.",
          "You see one branch. The other branch — the **counterfactual** — has to be constructed from somebody else, and the whole craft is in choosing who."
        ],
        "say": "The fundamental problem of causal inference: you can never observe the same unit both treated and untreated at the same moment. You see one branch. The other branch — the counterfactual — has to be constructed from somebody else. And the whole craft is in choosing who."
      },
      {
        "t": "h2",
        "text": "Four rival explanations for any correlation",
        "say": "Four rival explanations for any correlation."
      },
      {
        "t": "p",
        "text": "When two things move together, at least four explanations compete. Ruling them out one at a time is the discipline.",
        "say": "When two things move together, at least four explanations compete. And ruling them out one at a time is the discipline."
      },
      {
        "t": "table",
        "head": [
          "Explanation",
          "What it says",
          "Education and earnings"
        ],
        "rows": [
          [
            "**Causation**",
            "X causes Y",
            "Schooling teaches skills that raise productivity, which raises pay"
          ],
          [
            "**Reverse causation**",
            "Y causes X",
            "Weak here — future earnings do not cause past schooling, though *expected* earnings can affect how long you stay"
          ],
          [
            "**Confounding**",
            "Z causes both",
            "Strong here — ability, family resources and motivation raise both schooling and earnings independently"
          ],
          [
            "**Chance**",
            "Nothing causes anything; the pattern is noise",
            "Weak here — the relationship is enormous, replicated everywhere, across decades"
          ]
        ],
        "say": "Causation: X causes Y. For education, that's schooling teaching skills that raise productivity. Reverse causation: Y causes X — weak here, though expected earnings can affect how long you stay. Confounding: some third thing causes both — and here that's strong, because ability, family resources and motivation raise both schooling and earnings independently. And chance: nothing causes anything, the pattern is noise — weak here, because the relationship is enormous and replicated everywhere across decades."
      },
      {
        "t": "p",
        "text": "For education, the serious rival is **confounding**, and it has a name: **ability bias**. People who complete more schooling differ in ways that would have raised their earnings anyway — persistence, family circumstances, prior attainment, connections. Compare graduates with non-graduates and you are comparing two groups that differed before anyone entered a classroom.",
        "say": "So for education, the serious rival is confounding. And it has a name. Ability bias. People who complete more schooling differ in ways that would have raised their earnings anyway — persistence, family circumstances, prior attainment, connections. Compare graduates with non-graduates and you're comparing two groups that differed before anybody entered a classroom."
      },
      {
        "t": "p",
        "text": "The size of the problem is not a detail. If the whole earnings gap were ability, an extra year of schooling would raise nobody's pay, and public spending on education would be buying a sorting mechanism rather than a skill. If none of it were, the gap is the return. The truth is in between, and locating it is why lecture 2.3 exists.",
        "say": "And the size of that problem isn't a detail. If the whole earnings gap were ability, an extra year of schooling would raise nobody's pay, and public spending on education would be buying a sorting mechanism rather than a skill. If none of it were, the gap is the return. The truth is in between, and locating it is why the next lecture exists."
      },
      {
        "t": "h3",
        "text": "The same problem in a different field",
        "say": "Let me test the same problem in a different field."
      },
      {
        "t": "p",
        "text": "Test the reasoning somewhere else, because a method you can only run on one example is a memory rather than a skill.",
        "say": "Because a method you can only run on one example is a memory, not a skill."
      },
      {
        "t": "p",
        "text": "Firms that advertise more sell more. Does advertising cause sales? The correlation is strong, and the **reverse** explanation is unusually powerful here: advertising budgets are typically set as a percentage of expected or previous sales. A firm expecting a strong year advertises more *because* of what it expects, so high advertising and high sales appear together with the causation running from the expectation to both.",
        "say": "Firms that advertise more sell more. Does advertising cause sales? The correlation is strong, and the reverse explanation is unusually powerful here. Advertising budgets are typically set as a percentage of expected or previous sales. A firm expecting a strong year advertises more because of what it expects. So high advertising and high sales appear together, with the causation running from the expectation to both."
      },
      {
        "t": "p",
        "text": "There is also a confounder ready to hand: a genuinely good product raises sales and justifies a bigger budget. And selection: firms that advertise heavily are not a random sample of firms — they are the ones with money, confidence and something worth advertising.",
        "say": "There's a confounder ready to hand too: a genuinely good product raises sales and justifies a bigger budget. And selection: firms that advertise heavily aren't a random sample of firms. They're the ones with money, confidence, and something worth advertising."
      },
      {
        "t": "p",
        "text": "Notice what changed and what did not. The rival that mattered most switched from confounding to reverse causation, and the field switched from labour economics to marketing. The four questions were identical. That is the sign that you have the tool rather than the example.",
        "say": "Notice what changed and what didn't. The rival that mattered most switched from confounding to reverse causation, and the field switched from labour economics to marketing. The four questions were identical. That's the sign you've got the tool rather than the example."
      },
      {
        "t": "fig",
        "title": "Four structures that produce the same correlation",
        "sketch": true,
        "say": "Four diagrams. In the first, an arrow runs from X to Y: X causes Y. In the second the arrow runs from Y back to X: reverse causation. In the third, a third factor Z sends arrows to both X and Y, while nothing connects X and Y directly: confounding. In the fourth, X and Y sit apart with no arrows at all: chance. All four produce the same pattern in the data.",
        "cap": "The data cannot tell these apart. Only the **design** can — which is why lecture 2.3 exists.",
        "svg": "<svg viewBox=\"0 0 680 200\" role=\"img\" aria-label=\"Four causal structures that all produce the same correlation: causation, reverse causation, confounding, and chance\"><defs><marker id=\"ce-a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--ink-2)\"/></marker></defs><g font-family=\"system-ui, sans-serif\" font-size=\"12\" text-anchor=\"middle\"><g><text x=\"85\" y=\"24\" font-weight=\"600\" fill=\"var(--ink-2)\">Causation</text><circle cx=\"40\" cy=\"96\" r=\"20\" fill=\"var(--accent-soft)\" stroke=\"var(--accent)\"/><text x=\"40\" y=\"101\" fill=\"var(--accent-ink)\">X</text><circle cx=\"130\" cy=\"96\" r=\"20\" fill=\"var(--accent-soft)\" stroke=\"var(--accent)\"/><text x=\"130\" y=\"101\" fill=\"var(--accent-ink)\">Y</text><path d=\"M62 96 H104\" stroke=\"var(--ink-2)\" stroke-width=\"1.8\" fill=\"none\" marker-end=\"url(#ce-a)\"/><text x=\"85\" y=\"152\" font-size=\"11\" fill=\"var(--ink-3)\">X brings Y about</text></g><g><text x=\"255\" y=\"24\" font-weight=\"600\" fill=\"var(--ink-2)\">Reverse</text><circle cx=\"210\" cy=\"96\" r=\"20\" fill=\"var(--surface-2)\" stroke=\"var(--rule-strong)\"/><text x=\"210\" y=\"101\">X</text><circle cx=\"300\" cy=\"96\" r=\"20\" fill=\"var(--surface-2)\" stroke=\"var(--rule-strong)\"/><text x=\"300\" y=\"101\">Y</text><path d=\"M278 96 H236\" stroke=\"var(--ink-2)\" stroke-width=\"1.8\" fill=\"none\" marker-end=\"url(#ce-a)\"/><text x=\"255\" y=\"152\" font-size=\"11\" fill=\"var(--ink-3)\">Y brings X about</text></g><g><text x=\"440\" y=\"24\" font-weight=\"600\" fill=\"var(--ink-2)\">Confounding</text><circle cx=\"440\" cy=\"52\" r=\"19\" fill=\"var(--gold-soft)\" stroke=\"var(--gold)\"/><text x=\"440\" y=\"57\" fill=\"var(--gold-ink)\">Z</text><circle cx=\"395\" cy=\"124\" r=\"20\" fill=\"var(--surface-2)\" stroke=\"var(--rule-strong)\"/><text x=\"395\" y=\"129\">X</text><circle cx=\"485\" cy=\"124\" r=\"20\" fill=\"var(--surface-2)\" stroke=\"var(--rule-strong)\"/><text x=\"485\" y=\"129\">Y</text><path d=\"M429 69 L407 105\" stroke=\"var(--ink-2)\" stroke-width=\"1.8\" fill=\"none\" marker-end=\"url(#ce-a)\"/><path d=\"M451 69 L473 105\" stroke=\"var(--ink-2)\" stroke-width=\"1.8\" fill=\"none\" marker-end=\"url(#ce-a)\"/><text x=\"440\" y=\"168\" font-size=\"11\" fill=\"var(--ink-3)\">nothing runs between X and Y</text></g><g><text x=\"610\" y=\"24\" font-weight=\"600\" fill=\"var(--ink-2)\">Chance</text><circle cx=\"570\" cy=\"96\" r=\"20\" fill=\"var(--surface-2)\" stroke=\"var(--rule)\" stroke-dasharray=\"3 3\"/><text x=\"570\" y=\"101\" fill=\"var(--ink-3)\">X</text><circle cx=\"650\" cy=\"96\" r=\"20\" fill=\"var(--surface-2)\" stroke=\"var(--rule)\" stroke-dasharray=\"3 3\"/><text x=\"650\" y=\"101\" fill=\"var(--ink-3)\">Y</text><text x=\"610\" y=\"152\" font-size=\"11\" fill=\"var(--ink-3)\">no arrows at all</text></g></g></svg>"
      },
      {
        "t": "h2",
        "text": "Selection: the rival that looks like evidence",
        "say": "Selection. The rival that looks like evidence."
      },
      {
        "t": "p",
        "text": "One form of confounding deserves its own name because it produces conclusions that are not merely wrong but backwards.",
        "say": "One form of confounding deserves its own name, because it produces conclusions that aren't merely wrong but backwards."
      },
      {
        "t": "p",
        "text": "People who go to hospital are far more likely to die in the following year than people who do not. Nobody concludes that hospitals cause death, because the selection is obvious: you go to hospital *because* you are ill, and the illness drives both the visit and the outcome.",
        "say": "People who go to hospital are far more likely to die in the following year than people who don't. Nobody concludes that hospitals cause death, because the selection is obvious. You go to hospital because you're ill, and the illness drives both the visit and the outcome."
      },
      {
        "t": "p",
        "text": "The obviousness is entirely a function of familiarity. The identical structure appears constantly in settings where it is invisible:",
        "say": "And that obviousness is entirely a function of familiarity. The identical structure turns up constantly in settings where it's invisible."
      },
      {
        "t": "ul",
        "items": [
          "Firms that take business advice perform worse than firms that do not — because struggling firms seek advice.",
          "Regions receiving development aid grow more slowly than regions that do not — because aid goes where growth is weak.",
          "Customers who contact support are less satisfied than those who do not — because dissatisfaction causes the contact.",
          "Students who attend extra classes score below those who do not — because the classes are offered to those who are behind."
        ],
        "say": "Firms that take business advice perform worse than firms that don't — because struggling firms seek advice. Regions receiving development aid grow more slowly — because aid goes where growth is weak. Customers who contact support are less satisfied than those who don't — because dissatisfaction causes the contact. And students who attend extra classes score below those who don't — because the classes are offered to the ones who are behind."
      },
      {
        "t": "p",
        "text": "In each case a naïve comparison shows the intervention making things worse, and in each case the reason is that the treated group was already different. This is why the question *why is this person in this group?* is worth asking before any comparison at all.",
        "say": "In every case a naive comparison shows the intervention making things worse. And in every case the reason is that the treated group was already different. Which is why the question why is this unit in this group is worth asking before any comparison at all."
      },
      {
        "t": "h3",
        "text": "Say which way the bias runs",
        "say": "And here's a step beyond noticing. Say which way the bias runs."
      },
      {
        "t": "p",
        "text": "Noticing a confounder is the beginner's move. The useful move, one step further, is to say **which direction** it pushes the estimate — because that often tells you what you can still conclude.",
        "say": "Noticing a confounder is the beginner's move. The useful move, one step further, is to say which direction it pushes the estimate. Because that often tells you what you can still conclude."
      },
      {
        "t": "table",
        "head": [
          "If the confounder…",
          "Then the naïve estimate is…",
          "So you can still say…"
        ],
        "rows": [
          [
            "raises both the treatment and the outcome",
            "**too large**",
            "The true effect is smaller than reported — possibly zero"
          ],
          [
            "raises the treatment and lowers the outcome",
            "**too small**",
            "The true effect is at least as large as reported — a lower bound"
          ],
          [
            "is unrelated to the outcome",
            "unbiased on that count",
            "Nothing to adjust for here"
          ]
        ],
        "say": "If the confounder raises both the treatment and the outcome, the naive estimate is too large — so the true effect is smaller than reported, possibly zero. If it raises the treatment and lowers the outcome, the naive estimate is too small — so what you have is a lower bound. And if it's unrelated to the outcome, there's nothing to adjust for on that count."
      },
      {
        "t": "p",
        "text": "Work it on education. Ability raises both schooling and earnings, so the naïve graduate-versus-non-graduate gap is **too large** as an estimate of what schooling does. That is a real conclusion: it means the observed gap is an **upper bound**, and anyone claiming schooling causes the whole of it is overstating.",
        "say": "Work it on education. Ability raises both schooling and earnings, so the naive graduate-versus-non-graduate gap is too large as an estimate of what schooling does. And that's a real conclusion. It means the observed gap is an upper bound, and anybody claiming schooling causes all of it is overstating."
      },
      {
        "t": "p",
        "text": "Now the reverse, which is more interesting. Suppose a firm targets its retention campaign at customers it believes are about to leave. Those customers were more likely to leave anyway, so the confounder raises the treatment and lowers the outcome. The naïve comparison makes the campaign look **worse** than it is — and if it still looks good in that comparison, you have learned something despite the bias.",
        "say": "Now the reverse, which is more interesting. Suppose a firm targets its retention campaign at customers it believes are about to leave. Those customers were more likely to leave anyway, so the confounder raises the treatment and lowers the outcome. The naive comparison makes the campaign look worse than it is. And if it still looks good in that comparison, you've learned something despite the bias."
      },
      {
        "t": "p",
        "text": "This is the habit worth building: a biased estimate is not a useless one if you know which way the bias runs. *The true effect is smaller than this* and *the true effect is at least this* are both real findings, and both are available without solving the identification problem.",
        "say": "So this is the habit worth building. A biased estimate isn't a useless one if you know which way the bias runs. The true effect is smaller than this, and the true effect is at least this, are both real findings. And both are available without solving the identification problem."
      },
      {
        "t": "h2",
        "text": "Identification",
        "say": "Identification."
      },
      {
        "t": "p",
        "text": "The word economists use for the solution is **identification**, and it is worth being precise about it because it sounds like a statistical technique and is not.",
        "say": "The word economists use for the solution is identification. And it's worth being precise about it, because it sounds like a statistical technique and it isn't."
      },
      {
        "t": "write",
        "items": [
          "**An identification strategy is an argument that a particular comparison is a good stand-in for the missing counterfactual.**",
          "It is made in words, defended with evidence, and attacked by other economists. The statistics come afterwards and cannot rescue a bad one."
        ],
        "say": "An identification strategy is an argument that a particular comparison is a good stand-in for the missing counterfactual. It's made in words, defended with evidence, and attacked by other economists. The statistics come afterwards, and they can't rescue a bad one."
      },
      {
        "t": "p",
        "text": "That is why empirical papers spend most of their length on design rather than on results, and why a single question can take decades to settle: what is being argued about is whether the comparison group is a credible version of what would have happened.",
        "say": "Which is why empirical papers spend most of their length on design rather than on results. And why a single question can take decades to settle. What's being argued about is whether the comparison group is a credible version of what would have happened."
      },
      {
        "t": "p",
        "text": "Return to the minimum-wage study from lecture 1.4 and read it as an identification argument. Card and Krueger's claim was not 'employment rose in New Jersey'. It was: **eastern Pennsylvania is a credible stand-in for what New Jersey would have done without the wage rise** — same regional economy, same weather, same customers, same fast-food chains, no wage change. Every objection to that study was an attack on that claim or on the data behind it, and that is what a serious empirical dispute looks like.",
        "say": "Go back to the minimum-wage study and read it as an identification argument. Card and Krueger's claim was not employment rose in New Jersey. It was: eastern Pennsylvania is a credible stand-in for what New Jersey would have done without the wage rise. Same regional economy, same weather, same customers, same fast-food chains, and no wage change. Every objection to that study was an attack on that claim, or on the data behind it. And that's what a serious empirical dispute looks like."
      },
      {
        "t": "h2",
        "text": "Why 'we controlled for that' is not an answer",
        "say": "So why is we controlled for that not an answer?"
      },
      {
        "t": "p",
        "text": "The most common response to a confounding objection is that the analysis controlled for the variable. Sometimes that is enough. Often it is not, for three reasons worth knowing in order.",
        "say": "The most common response to a confounding objection is that the analysis controlled for the variable. Sometimes that's enough. Often it isn't, for three reasons worth knowing in order."
      },
      {
        "t": "ol",
        "items": [
          "**You can only control for what you measure.** Ability, motivation and family support are the confounders that matter for education, and they are exactly the ones with no clean measure. Controlling for the observable part of a confounder removes the observable part of the bias.",
          "**Controlling for the wrong variable makes things worse.** If a variable sits *on the path* between cause and effect — occupation, between education and earnings — controlling for it removes part of the very effect you are trying to measure. More controls is not automatically better, and this error is common.",
          "**Selection can survive every control.** If people chose their group for reasons connected to the outcome, adjusting for measured characteristics leaves the unmeasured reasons in place, and those were the reasons they chose."
        ],
        "say": "One. You can only control for what you measure. Ability, motivation and family support are the confounders that matter for education, and they're exactly the ones with no clean measure. Controlling for the observable part of a confounder removes the observable part of the bias. Two. Controlling for the wrong variable makes things worse. If a variable sits on the path between cause and effect — occupation, between education and earnings — controlling for it removes part of the very effect you're trying to measure. More controls is not automatically better. And three. Selection can survive every control. If people chose their group for reasons connected to the outcome, adjusting for measured characteristics leaves the unmeasured reasons in place. And those were the reasons they chose."
      },
      {
        "t": "warn",
        "title": "The sentence to be suspicious of",
        "ps": [
          "*'After controlling for a wide range of factors, we find that X causes Y.'* A long list of controls signals effort, not identification, and readers routinely mistake the first for the second.",
          "The question to ask is not how many variables were included but: **what makes the treated and untreated groups comparable?** If the answer is 'we adjusted for the ways we could see them differing', the unmeasured differences are still there — and the ones that drove people into the groups are precisely the ones that tend to be unmeasured."
        ],
        "say": "So here's the sentence to be suspicious of. After controlling for a wide range of factors, we find that X causes Y. A long list of controls signals effort, not identification, and readers routinely mistake the first for the second. The question to ask isn't how many variables were included. It's what makes the treated and untreated groups comparable? If the answer is we adjusted for the ways we could see them differing, then the unmeasured differences are still there. And the ones that drove people into the groups tend to be exactly the unmeasured ones."
      },
      {
        "t": "p",
        "text": "None of this means observational work is worthless. It means the burden sits on the design. The next lecture is about designs that carry it — comparisons where something outside the participants' control decided who was treated.",
        "say": "None of that means observational work is worthless. It means the burden sits on the design. And the next lecture is about designs that carry it. Comparisons where something outside the participants' control decided who was treated."
      },
      {
        "t": "h2",
        "text": "What you should be able to do now",
        "say": "So what can you do now?"
      },
      {
        "t": "ul",
        "items": [
          "Separate a descriptive question from a causal one inside the same finding.",
          "State the fundamental problem of causal inference and what a counterfactual is.",
          "Run the four rivals against a claim and say which is the serious one.",
          "Recognise selection when it is disguised, and ask why a unit is in its group.",
          "Define identification as an argument about comparability, not a technique.",
          "Explain why more controls can leave bias untouched or make it worse."
        ],
        "say": "Separate a descriptive question from a causal one inside the same finding. State the fundamental problem of causal inference, and what a counterfactual is. Run the four rivals against a claim and say which is the serious one. Recognise selection when it's disguised. Define identification as an argument about comparability, not a technique. And explain why more controls can leave bias untouched, or make it worse."
      }
    ],
    "exercises": [
      {
        "task": "**Run the four rivals.** Take one causal claim from this week's news. For each of the four explanations, write one sentence on whether it could account for the finding, and mark the serious one.",
        "hint": "Health, education and crime reporting are the richest sources. The serious rival is usually confounding or selection; chance is rarely the answer for a widely reported finding, because small noisy results are what get reported."
      },
      {
        "task": "**Name the counterfactual.** For the same claim, write who or what is standing in for what would have happened otherwise, and say why they might not be a good stand-in.",
        "hint": "If the article does not say, that is the finding. Many reported effects are before-and-after comparisons with no comparison group at all, which means everything else that changed in the period is inside the estimate."
      },
      {
        "task": "**Find a disguised selection effect.** Look for a claim where the treated group sought out the treatment. Write the naïve conclusion, then the correct reading.",
        "hint": "Look for services people opt into: training, advice, support lines, health screening. The naïve conclusion is usually that the service is harmful."
      },
      {
        "task": "**Attack a control list.** Find a study reporting that it controlled for a set of variables. Write one confounder it could not have measured, and say which direction it would bias the result.",
        "hint": "Saying the direction is the hard and valuable part. If the unmeasured confounder raises both the treatment and the outcome, the estimate is too big; if it raises one and lowers the other, too small."
      }
    ],
    "reading": [
      {
        "author": "Joshua Angrist and Jörn-Steffen Pischke",
        "work": "Mastering 'Metrics: The Path from Cause to Effect",
        "where": "Princeton University Press",
        "year": 2014,
        "note": "The best introduction to causal inference for someone without the mathematics. Chapter 1 is this lecture, done properly and with jokes."
      },
      {
        "author": "Judea Pearl and Dana Mackenzie",
        "work": "The Book of Why",
        "where": "Basic Books",
        "year": 2018,
        "note": "A different tradition, arguing that causal questions need explicit causal diagrams. Read it for the section on controlling for the wrong variable, which it explains better than anyone."
      },
      {
        "author": "David Card and Alan B. Krueger",
        "work": "Minimum Wages and Employment: A Case Study …",
        "where": "American Economic Review",
        "year": 1994,
        "note": "Read it again, this time only for the identification argument: why is Pennsylvania the right comparison? That is what the paper is really about."
      },
      {
        "author": "Tyler Vigen",
        "work": "Spurious Correlations",
        "where": "tylervigen.com",
        "year": 2024,
        "note": "A free collection of strong correlations between unrelated things. Five minutes here does more for your instincts than an hour of warnings."
      }
    ],
    "glossary": [
      {
        "term": "Correlation",
        "def": "Two variables moving together. A description, and consistent with several different causal structures."
      },
      {
        "term": "Counterfactual",
        "def": "What would have happened to the treated unit had it not been treated. Never observed; always required."
      },
      {
        "term": "Fundamental problem of causal inference",
        "def": "The same unit cannot be observed both treated and untreated at the same moment, so a comparison unit must stand in."
      },
      {
        "term": "Reverse causality",
        "def": "The outcome causing the supposed cause. Strong wherever budgets or decisions respond to expectations, as in advertising."
      },
      {
        "term": "Confounder",
        "def": "A third factor causing both variables. For education and earnings the classic one is ability."
      },
      {
        "term": "Ability bias",
        "def": "The overstatement of education's return caused by more able people obtaining more education."
      },
      {
        "term": "Selection",
        "def": "Units entering a group for reasons connected to the outcome, so that the groups differed before treatment."
      },
      {
        "term": "Identification strategy",
        "def": "The argument that a particular comparison credibly stands in for the missing counterfactual. Made in words; not fixed by statistics."
      },
      {
        "term": "Bad control",
        "def": "A variable on the causal path between treatment and outcome. Controlling for it removes part of the effect being measured."
      }
    ],
    "quiz": [
      {
        "id": "w02l02q1",
        "concept": "counterfactual",
        "type": "mcq",
        "q": "What is the fundamental problem of causal inference?",
        "options": [
          "Economic data is inaccurate",
          "The same unit cannot be observed both treated and untreated at the same moment",
          "Samples are too small to detect effects",
          "Economists disagree about methods"
        ],
        "answer": 1,
        "explain": "It is a problem of logic rather than of data quality, which is why no amount of extra data solves it. Somebody else has to stand in for the branch you did not see, and choosing who is the entire craft."
      },
      {
        "id": "w02l02q2",
        "concept": "three-rivals",
        "type": "mcq",
        "q": "People with more education earn more. Which rival explanation is the serious one here?",
        "options": [
          "Chance",
          "Reverse causality",
          "Confounding — ability and background raise both",
          "There is no rival; the relationship is causal"
        ],
        "answer": 2,
        "explain": "Ability bias. The people who complete more schooling differ in ways that would have raised their earnings anyway, so graduates and non-graduates differed before anyone entered a classroom. Chance is implausible for a relationship this large and this replicated."
      },
      {
        "id": "w02l02q3",
        "concept": "reverse",
        "type": "mcq",
        "q": "Firms that advertise more sell more. Why is reverse causality unusually strong in this case?",
        "options": [
          "Because advertising is expensive",
          "Because advertising budgets are typically set as a share of expected or previous sales",
          "Because sales are measured after advertising",
          "Because advertising agencies report the data"
        ],
        "answer": 1,
        "explain": "A firm expecting a strong year advertises more because of the expectation, so both high advertising and high sales are downstream of the same forecast. This is why serious advertising measurement uses experiments, and it is the subject of a whole week in the marketing course."
      },
      {
        "id": "w02l02q4",
        "concept": "confounding",
        "type": "mcq",
        "q": "Firms that take business advice perform worse than firms that do not. What is the most likely explanation?",
        "options": [
          "Business advice is harmful",
          "Struggling firms seek advice, so the treated group was already worse off",
          "Advisers are incompetent",
          "The measurement period is too short"
        ],
        "answer": 1,
        "explain": "Selection, in exactly the structure of 'hospitals cause death'. The obviousness of the hospital case is entirely a matter of familiarity — the identical logic becomes invisible when the setting is unfamiliar, which is why the habit of asking *why is this unit in this group?* matters."
      },
      {
        "id": "w02l02q5",
        "concept": "confounding",
        "type": "multi",
        "q": "Which of these comparisons are contaminated by selection? Select all that apply.",
        "options": [
          "Customers who contact support are less satisfied than those who do not",
          "Students attending extra classes score below those who do not",
          "Regions receiving development aid grow more slowly",
          "Two groups assigned to treatment by a coin toss",
          "People who visit hospital die more often in the next year"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explain": "A coin toss is the exception, and it is the whole point: when something outside the participants' control decides assignment, the groups do not differ systematically beforehand. That is the idea lecture 2.3 builds on."
      },
      {
        "id": "w02l02q6",
        "concept": "identification",
        "type": "mcq",
        "q": "What is an identification strategy?",
        "options": [
          "A statistical technique for removing bias",
          "An argument that a particular comparison credibly stands in for the missing counterfactual",
          "A method for collecting better data",
          "A way of choosing which variables to control for"
        ],
        "answer": 1,
        "explain": "It is made in words and defended with evidence, and the statistics come afterwards. This is why empirical papers spend most of their length on design, and why the sentence 'we used advanced methods' answers nothing."
      },
      {
        "id": "w02l02q7",
        "concept": "identification",
        "type": "short",
        "q": "State Card and Krueger's identification argument in the 1992 New Jersey study, and say what an opponent would have to attack.",
        "must": [
          {
            "point": "the claim is that Pennsylvania stands in for what New Jersey would have done",
            "any": [
              "pennsylvania",
              "stand in",
              "counterfactual",
              "comparison",
              "would have",
              "proxy",
              "control"
            ]
          },
          {
            "point": "the two are similar in relevant respects — same region, same chains, same customers",
            "any": [
              "similar",
              "same region",
              "chains",
              "customers",
              "economy",
              "nearby",
              "border",
              "comparable"
            ]
          },
          {
            "point": "and Pennsylvania had no wage change",
            "any": [
              "no change",
              "did not raise",
              "unchanged",
              "untreated",
              "stayed",
              "4.25"
            ]
          },
          {
            "point": "an opponent attacks comparability or the data",
            "any": [
              "attack",
              "comparab",
              "not similar",
              "data",
              "measurement",
              "survey",
              "payroll",
              "challenge"
            ]
          },
          {
            "point": "specifically whether the two would have moved together without the policy",
            "any": [
              "moved together",
              "parallel",
              "trend",
              "would have",
              "same path",
              "diverg"
            ]
          }
        ],
        "answer": "The claim was not 'employment rose in New Jersey' — that alone would confuse the wage rise with everything else happening in 1992. The argument was that **eastern Pennsylvania is a credible stand-in for what New Jersey would have done had it not raised its minimum wage**: the same regional economy, the same weather and customers, the same fast-food chains, and no change to its own wage floor. Given that, the difference between the two changes is attributable to the policy. An opponent therefore has two lines of attack. The first is **comparability** — an argument that the two areas would *not* have moved together even without the policy, because their economies were on different paths. The second is **the data** — which is the attack that actually came, when Neumark and Wascher argued that employment measured from telephone surveys was unreliable and should be taken from administrative payroll records. Both are attacks on the identification argument rather than on the arithmetic, and that is what a serious empirical dispute looks like.",
        "explain": "Being able to state a study's identification argument in two sentences is the single most useful reading skill in applied economics. Most papers will tell you theirs explicitly if you look for it."
      },
      {
        "id": "w02l02q8",
        "concept": "controls-limit",
        "type": "mcq",
        "q": "A study reports that it controlled for a wide range of factors. Why is that not sufficient for a causal claim?",
        "options": [
          "Because controls are always applied incorrectly",
          "Because you can only control for what you measure, and the decisive confounders are often unmeasured",
          "Because controls reduce the sample size",
          "Because controls only work in randomised studies"
        ],
        "answer": 1,
        "explain": "Controlling for the observable part of a confounder removes the observable part of the bias. For education, the confounders that matter — ability, motivation, family support — are exactly the ones without clean measures, and they are unmeasured partly because they are hard to measure."
      },
      {
        "id": "w02l02q9",
        "concept": "controls-limit",
        "type": "mcq",
        "q": "Why can controlling for occupation be a mistake when estimating the effect of education on earnings?",
        "options": [
          "Occupation is measured with error",
          "Occupation sits on the path between education and earnings, so controlling for it removes part of the effect being measured",
          "Occupation is correlated with age",
          "It is not a mistake; more controls are always better"
        ],
        "answer": 1,
        "explain": "A large part of how education raises earnings is by giving access to different occupations. Holding occupation fixed asks what education does to earnings *within* an occupation, which is a different and much smaller question. This 'bad control' error is common and silently shrinks estimates."
      },
      {
        "id": "w02l02q10",
        "concept": "three-rivals",
        "type": "mcq",
        "q": "Which of these is the best reason to doubt that a correlation is chance?",
        "options": [
          "It appears in a large, well-known dataset",
          "It is large, replicated in many settings, and stable across decades",
          "It was published in a respected journal",
          "The author reports it as statistically significant"
        ],
        "answer": 1,
        "explain": "Replication across settings is the strong signal. Statistical significance in one dataset is much weaker than it sounds, which is exactly what lecture 2.5 is about — and a respected journal has published many results that did not replicate."
      },
      {
        "id": "w02l02q11",
        "concept": "reverse",
        "type": "short",
        "q": "Take a claim from a field other than economics — for example that people who exercise are healthier — and analyse it with the four rivals. Say which is serious and what design would settle it.",
        "must": [
          {
            "point": "considers causation: exercise improves health",
            "any": [
              "exercise",
              "causes",
              "improve",
              "fitness",
              "cardio",
              "genuinely"
            ]
          },
          {
            "point": "considers reverse causality: healthy people can exercise",
            "any": [
              "reverse",
              "healthy people",
              "already",
              "able to",
              "illness prevents",
              "the other way"
            ]
          },
          {
            "point": "considers confounding: income, education or habits raise both",
            "any": [
              "confound",
              "income",
              "education",
              "wealth",
              "diet",
              "habits",
              "third",
              "background"
            ]
          },
          {
            "point": "considers chance and dismisses it for a large replicated finding",
            "any": [
              "chance",
              "noise",
              "replicat",
              "large",
              "unlikely",
              "many studies"
            ]
          },
          {
            "point": "names the serious rival",
            "any": [
              "reverse",
              "confound",
              "serious",
              "main",
              "strongest",
              "biggest"
            ]
          },
          {
            "point": "proposes a design where assignment is outside the participants' control",
            "any": [
              "random",
              "trial",
              "rct",
              "assign",
              "experiment",
              "outside their control",
              "lottery"
            ]
          }
        ],
        "answer": "**Causation:** exercise genuinely improves cardiovascular health — plausible and supported by mechanism. **Reverse causality:** healthy people are able to exercise, and illness prevents it, so the arrow can run backwards; this is serious, because early unnoticed illness reduces activity years before it is diagnosed. **Confounding:** income, education and general health habits raise both exercise and health independently, and people who exercise also tend to smoke less, sleep better and have more time and money — this is at least as serious. **Chance:** implausible, since the finding is large and replicated across many countries and decades. The serious rivals are therefore reverse causality and confounding together, and they push in the same direction, which means the naïve comparison of exercisers with non-exercisers **overstates** the benefit. What would settle it is a design where something outside the participants' control decides who exercises: a randomised trial assigning an exercise programme, or a natural experiment such as a workplace scheme introduced for some employees and not others. That is exactly the move the next lecture is about.",
        "explain": "Notice that the two serious rivals bias in the same direction here. Being able to say which way a bias runs is more useful than merely noting that it exists."
      },
      {
        "id": "w02l02q12",
        "concept": "counterfactual",
        "type": "mcq",
        "q": "A report states that after a training programme, participants' earnings rose 12%. What is missing?",
        "options": [
          "The sample size",
          "A comparison group showing what would have happened without the programme",
          "The cost of the programme",
          "Statistical significance"
        ],
        "answer": 1,
        "explain": "A before-and-after comparison contains the programme plus everything else that happened in the period — the economy, ageing, and the fact that people often enter training at a low point and would have recovered anyway. Without a comparison group there is no effect estimate, only a description."
      }
    ]
  },
  "w02l03": {
    "standfirst": "If you cannot observe the counterfactual, find a situation where something outside people's control decided who got treated. That single idea reorganised empirical economics over about thirty years, produced three designs you will meet for the rest of your life, and won the 2021 Nobel Prize.",
    "thread": {
      "from": "2.2 established that a comparison is only as good as the argument that the groups were alike.",
      "adds": "The designs that make such an argument credible — randomisation, and three ways of exploiting accidents in the world when randomisation is impossible.",
      "toward": "2.4 reads what these designs produce. 2.5 asks whether published findings survive scrutiny. Every empirical result in the rest of the course was produced by one of these."
    },
    "objectives": [
      "Explain what randomisation achieves that statistical adjustment cannot.",
      "Say why economists frequently cannot randomise, and what they do instead.",
      "Describe difference-in-differences and state the assumption it rests on.",
      "Explain what an instrument must satisfy, and test a proposed one.",
      "Describe a regression discontinuity and say where its comparison is credible.",
      "State the two main limitations of even a well-run experiment."
    ],
    "concepts": [
      {
        "id": "randomisation",
        "name": "What randomisation buys"
      },
      {
        "id": "why-not",
        "name": "Why economists often cannot randomise"
      },
      {
        "id": "did",
        "name": "Difference-in-differences"
      },
      {
        "id": "iv",
        "name": "Instrumental variables"
      },
      {
        "id": "rdd",
        "name": "Regression discontinuity"
      },
      {
        "id": "exp-limits",
        "name": "What an experiment still cannot tell you"
      }
    ],
    "vocab": [
      {
        "word": "randomise",
        "plain": "To decide by chance who gets the treatment, so the groups differ only by luck.",
        "et": "juhuslikustama"
      },
      {
        "word": "in expectation",
        "plain": "On average, over many repetitions — not guaranteed in any single case.",
        "et": "ootuses, keskmiselt"
      },
      {
        "word": "baseline",
        "plain": "The starting level, before anything happens.",
        "et": "lähtetase"
      },
      {
        "word": "trend",
        "plain": "The direction something was already moving in.",
        "et": "trend, suund"
      },
      {
        "word": "instrument",
        "plain": "Something that pushes people into treatment but has no other route to the outcome.",
        "et": "instrument"
      },
      {
        "word": "threshold",
        "plain": "A cut-off that decides who qualifies.",
        "et": "lävend, künnis"
      },
      {
        "word": "discontinuity",
        "plain": "A sudden jump at a particular point.",
        "et": "katkestus, hüpe"
      },
      {
        "word": "eligible",
        "plain": "Qualifying under the rule.",
        "et": "kõlblik, õigustatud"
      },
      {
        "word": "complier",
        "plain": "Someone whose treatment actually changed because of the instrument.",
        "et": "järgija, mõjutatu"
      },
      {
        "word": "generalise",
        "plain": "To extend a finding from where it was measured to somewhere else.",
        "et": "üldistama"
      },
      {
        "word": "arbitrary",
        "plain": "Decided by a rule rather than by any relevant difference.",
        "et": "meelevaldne, suvaline"
      },
      {
        "word": "ethics",
        "plain": "Whether it is right to do something, regardless of whether it would work.",
        "et": "eetika"
      }
    ],
    "tools": [
      {
        "kind": "framework",
        "name": "Difference-in-differences",
        "answers": "What did this policy do, when only some places got it?",
        "when": "A change hits one group and not a comparable one. Compare the *change* in the treated group with the *change* in the untreated group. The second difference removes anything that affected both."
      },
      {
        "kind": "test",
        "name": "The instrument test",
        "answers": "Is this a valid instrument?",
        "when": "Whenever someone proposes one. It must (a) genuinely shift the treatment and (b) have no other route to the outcome. The second condition cannot be proved by data — it is argued, and it is where instruments usually die."
      },
      {
        "kind": "framework",
        "name": "Regression discontinuity",
        "answers": "What does this rule do to the people it just barely includes?",
        "when": "Wherever a cut-off decides eligibility — a score, an age, a population size, an income limit. Those just above and just below are alike in everything except the rule, so compare them."
      }
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "What a coin toss does that statistics cannot",
        "say": "What a coin toss does that statistics cannot."
      },
      {
        "t": "p",
        "text": "Lecture 2.2 ended at an impasse: groups differ before treatment, and adjusting for the differences you can measure leaves the ones you cannot. There is exactly one procedure that solves this cleanly, and it is startlingly simple.",
        "say": "Last lecture ended at an impasse. Groups differ before treatment, and adjusting for the differences you can measure leaves the ones you can't. There's exactly one procedure that solves this cleanly, and it's startlingly simple."
      },
      {
        "t": "write",
        "items": [
          "**Randomly assign who gets the treatment.**",
          "Then the two groups differ only by chance — on everything, including every characteristic nobody thought of, nobody can measure, and nobody knows exists."
        ],
        "say": "Randomly assign who gets the treatment. Then the two groups differ only by chance. On everything — including every characteristic nobody thought of, nobody can measure, and nobody knows exists."
      },
      {
        "t": "p",
        "text": "That last clause is the whole value, and it is worth dwelling on because it is easy to read past. A control variable protects you from a confounder you named. Randomisation protects you from confounders you never named, because the coin does not know what it is balancing. No amount of statistical sophistication reproduces this.",
        "say": "That last clause is the whole value, and it's easy to read straight past. A control variable protects you from a confounder you named. Randomisation protects you from confounders you never named, because the coin doesn't know what it's balancing. No amount of statistical sophistication reproduces that."
      },
      {
        "t": "p",
        "text": "Two honest qualifications. It works **in expectation** — in any one trial the groups can differ by luck, which is why sample size still matters and why good studies report baseline characteristics so you can see whether the randomisation worked. And it establishes the effect **of what was actually assigned**, which may differ from what people did.",
        "say": "Two honest qualifications. It works in expectation — in any one trial the groups can differ by luck, which is why sample size still matters, and why good studies report baseline characteristics so you can check that the randomisation worked. And it establishes the effect of what was actually assigned, which may differ from what people did."
      },
      {
        "t": "h2",
        "text": "Why economists usually cannot do this",
        "say": "So why can't economists usually do this?"
      },
      {
        "t": "ul",
        "items": [
          "**Ethics.** You cannot randomly assign children to a worse school, workers to unemployment, or countries to a currency crisis.",
          "**Scale.** Many questions are about whole economies. There is one of each, and no control group.",
          "**Politics.** Governments rarely agree to give a benefit to half a population by lottery and withhold it from the rest, even when that is the only way to learn whether it works.",
          "**Time.** The interesting effects of education or institutions take decades, and few trials survive that long."
        ],
        "say": "Ethics. You can't randomly assign children to a worse school, workers to unemployment, or countries to a currency crisis. Scale. Many questions are about whole economies, and there's one of each, with no control group. Politics. Governments rarely agree to give a benefit to half a population by lottery and withhold it from the rest, even when that's the only way to learn whether it works. And time. The interesting effects of education or institutions take decades, and few trials survive that long."
      },
      {
        "t": "p",
        "text": "So the discipline did something clever. If you cannot run an experiment, look for places where the **world ran one for you** — where something outside participants' control decided who was treated. These are **natural experiments**, and finding them is now a central professional skill. Three designs dominate.",
        "say": "So the discipline did something clever. If you can't run an experiment, look for places where the world ran one for you. Where something outside the participants' control decided who got treated. Those are natural experiments, and finding them is now a central professional skill. Three designs dominate."
      },
      {
        "t": "h2",
        "text": "One: difference-in-differences",
        "say": "One. Difference-in-differences."
      },
      {
        "t": "p",
        "text": "You met this in lecture 1.4 without the name. A policy changes in one place and not in another. Compare not the levels but the **changes**.",
        "say": "You met this in lecture one point four without the name. A policy changes in one place and not in another. So compare not the levels, but the changes."
      },
      {
        "t": "math",
        "label": "Difference-in-differences, on the New Jersey minimum wage",
        "eqs": [
          "  First difference   (treated):    NJ after   −  NJ before",
          "  Second difference  (control):    PA after   −  PA before",
          "  ------------------------------------------------------------",
          "  Estimated effect  =  (NJ after − NJ before)  −  (PA after − PA before)",
          "",
          "  Why two differences and not one:",
          "     NJ after − NJ before   =   policy   +   everything else in 1992",
          "     PA after − PA before   =              everything else in 1992",
          "     subtract                =   policy"
        ],
        "terms": [
          {
            "sym": "first difference",
            "means": "the change over time in the group that got the policy. Contains the policy and everything else that happened."
          },
          {
            "sym": "second difference",
            "means": "the change over the same period in a comparable group that did not get it. Contains everything else, without the policy."
          },
          {
            "sym": "everything else",
            "means": "the regional economy, the season, the weather, national trends — anything hitting both states equally."
          },
          {
            "sym": "parallel trends",
            "means": "the assumption that, without the policy, the two groups would have moved **together**. Not that they were at the same level — that their paths would have been parallel."
          }
        ],
        "use": "Use it whenever a change hits some units and not others, and you can observe both before and after: a tax in one country, a rule in some regions, a system rolled out to some branches first.",
        "why": "The second subtraction removes every influence common to both groups, which is why it is so much stronger than a simple before-and-after. What it cannot remove is an influence that hit **only** the treated group at the same time — which is exactly what the parallel-trends assumption asserts did not happen. That assumption is the design's soft spot, and the standard way to support it is to show the two groups moving in parallel for several periods **before** the policy.",
        "say": "Here's how it runs on New Jersey. The first difference is New Jersey after, minus New Jersey before. The second difference is Pennsylvania after, minus Pennsylvania before. And the estimated effect is the first minus the second. Why two differences and not one? Because New Jersey after minus before contains the policy, and everything else that happened in nineteen ninety-two. Pennsylvania after minus before contains only everything else. Subtract, and what's left is the policy. And the assumption that makes it work is called parallel trends. It says that without the policy, the two groups would have moved together. Not that they were at the same level — that their paths would have been parallel. That's the design's soft spot, and the standard way to support it is to show the two groups moving in parallel for several periods before the policy."
      },
      {
        "t": "p",
        "text": "Note what the assumption does and does not require. The two groups may be at completely different levels: Pennsylvania restaurants could employ more or fewer people than New Jersey's and the method is untroubled. What must hold is that the **gap between them** would have stayed roughly constant. Levels are allowed to differ; paths are not.",
        "say": "Note what the assumption does and doesn't require. The two groups may be at completely different levels. Pennsylvania restaurants could employ more or fewer people than New Jersey's and the method is untroubled. What has to hold is that the gap between them would have stayed roughly constant. Levels are allowed to differ. Paths are not."
      },
      {
        "t": "fig",
        "title": "Difference-in-differences, drawn",
        "sketch": true,
        "say": "A chart with time on the horizontal axis and employment on the vertical. Two lines run in parallel before a marked policy date. After it, the control line continues on its old path while the treated line bends away from it. A dashed line continues the treated group's old path, and the vertical gap between that dashed line and the actual treated line is labelled: this is the estimated effect.",
        "cap": "The dashed line is the **counterfactual** — where the treated group would have gone. It is never observed. The control group's path is what justifies drawing it there, and that justification is the parallel-trends assumption.",
        "svg": "<svg viewBox=\"0 0 680 290\" role=\"img\" aria-label=\"Difference in differences chart: two parallel lines before a policy date, then the treated line bends away from a dashed counterfactual, with the gap labelled as the estimated effect\"><g font-family=\"system-ui, sans-serif\" font-size=\"12\"><line x1=\"64\" y1=\"22\" x2=\"64\" y2=\"236\" stroke=\"var(--ink-3)\" stroke-width=\"1.3\"/><line x1=\"64\" y1=\"236\" x2=\"640\" y2=\"236\" stroke=\"var(--ink-3)\" stroke-width=\"1.3\"/><text x=\"64\" y=\"16\" fill=\"var(--ink-2)\" font-size=\"11.5\">employment</text><text x=\"580\" y=\"260\" fill=\"var(--ink-2)\">time</text><line x1=\"352\" y1=\"22\" x2=\"352\" y2=\"236\" stroke=\"var(--gold)\" stroke-width=\"1.4\" stroke-dasharray=\"5 4\"/><text x=\"352\" y=\"16\" text-anchor=\"middle\" fill=\"var(--gold-ink)\" font-size=\"11.5\" font-weight=\"600\">the policy</text><path d=\"M96 176 L352 140\" stroke=\"var(--series-2, #eb6834)\" stroke-width=\"2.6\" fill=\"none\"/><path d=\"M352 140 L616 92\" stroke=\"var(--series-2, #eb6834)\" stroke-width=\"2.6\" fill=\"none\"/><path d=\"M352 140 L616 122\" stroke=\"var(--series-2, #eb6834)\" stroke-width=\"1.8\" fill=\"none\" stroke-dasharray=\"6 5\" opacity=\".75\"/><path d=\"M96 206 L352 170 L616 152\" stroke=\"var(--series-1, #2a78d6)\" stroke-width=\"2.6\" fill=\"none\"/><path d=\"M624 92 L624 122\" stroke=\"var(--good)\" stroke-width=\"2.4\"/><path d=\"M620 92 h8 M620 122 h8\" stroke=\"var(--good)\" stroke-width=\"2.4\"/><text x=\"636\" y=\"104\" fill=\"var(--good)\" font-size=\"11.5\" font-weight=\"600\">the</text><text x=\"636\" y=\"118\" fill=\"var(--good)\" font-size=\"11.5\" font-weight=\"600\">effect</text><text x=\"470\" y=\"80\" fill=\"var(--series-2, #eb6834)\" font-size=\"11.5\" font-weight=\"600\">treated (New Jersey)</text><text x=\"470\" y=\"138\" fill=\"var(--ink-3)\" font-size=\"11\">what they would have done</text><text x=\"470\" y=\"172\" fill=\"var(--series-1, #2a78d6)\" font-size=\"11.5\" font-weight=\"600\">control (Pennsylvania)</text><text x=\"96\" y=\"226\" fill=\"var(--ink-3)\" font-size=\"10.5\">parallel before the policy</text><text x=\"380\" y=\"226\" fill=\"var(--ink-3)\" font-size=\"10.5\">— which is the evidence for the dashed line</text></g></svg>"
      },
      {
        "t": "h2",
        "text": "Two: instrumental variables",
        "say": "Two. Instrumental variables."
      },
      {
        "t": "p",
        "text": "Sometimes nothing changes in one place and not another, but something pushes *some* people toward the treatment for reasons unrelated to the outcome. That something is an **instrument**, and the logic is indirect enough to be worth stating slowly.",
        "say": "Sometimes nothing changes in one place and not another, but something pushes some people toward the treatment for reasons unrelated to the outcome. That something is an instrument, and the logic is indirect enough to be worth taking slowly."
      },
      {
        "t": "p",
        "text": "The classic example: does an extra year of schooling raise earnings? You cannot randomise schooling. But compulsory-schooling laws let children leave at a given age, and children born in different months of the year reach that age having completed different amounts of school — so **date of birth** nudges some people into an extra year, for a reason that has nothing to do with their ability or ambition.",
        "say": "The classic example. Does an extra year of schooling raise earnings? You can't randomise schooling. But compulsory-schooling laws let children leave at a given age, and children born in different months reach that age having completed different amounts of school. So date of birth nudges some people into an extra year, for a reason that has nothing to do with their ability or their ambition."
      },
      {
        "t": "table",
        "head": [
          "An instrument must…",
          "Meaning",
          "Quarter of birth"
        ],
        "rows": [
          [
            "**Be relevant**",
            "It really does shift the treatment",
            "Testable in the data — and it does, though weakly"
          ],
          [
            "**Be as good as random**",
            "It is not related to the kind of person you are",
            "Plausible: nobody chooses their birth month to affect their career"
          ],
          [
            "**Have no other route to the outcome**",
            "It affects earnings *only* through schooling",
            "**Arguable, and this is where the fight is** — birth month may affect school starting age, health, or relative age in class"
          ]
        ],
        "say": "An instrument has to satisfy three things. It has to be relevant — it really does shift the treatment, and that's testable in the data. It has to be as good as random — not related to the kind of person you are, which for birth month is plausible, since nobody chooses their birth month to affect their career. And it has to have no other route to the outcome — it affects earnings only through schooling. That third one is arguable, and it's where the fight is. Birth month may affect school starting age, or health, or how old you are relative to your classmates."
      },
      {
        "t": "p",
        "text": "The third condition is the one that kills most instruments, and it deserves emphasis: **it cannot be proved from the data.** It is an argument about the world, defended in words, exactly as lecture 2.2 said identification always is. When you read that a study 'used an instrumental variable', the question is never whether the statistics were done properly. It is whether that third claim is believable.",
        "say": "And that third condition is the one that kills most instruments, so it deserves emphasis. It cannot be proved from the data. It's an argument about the world, defended in words, exactly as identification always is. So when you read that a study used an instrumental variable, the question is never whether the statistics were done properly. It's whether that third claim is believable."
      },
      {
        "t": "h2",
        "text": "Three: regression discontinuity",
        "say": "Three. Regression discontinuity."
      },
      {
        "t": "p",
        "text": "The most intuitive of the three. Wherever a **rule with a cut-off** decides who gets something, the people just above and just below the line are nearly identical — but one group is treated and the other is not.",
        "say": "The most intuitive of the three. Wherever a rule with a cut-off decides who gets something, the people just above and just below the line are nearly identical — but one group is treated and the other isn't."
      },
      {
        "t": "ul",
        "items": [
          "A scholarship for students scoring 60 or more. The student with 59 and the student with 60 are alike in everything that matters; a single mark decided the treatment.",
          "A grant for municipalities below a population threshold. Just-above and just-below towns are comparable.",
          "A benefit that starts at a given age, or an income limit for a subsidy.",
          "A credit rule: loans approved above a score and refused below it."
        ],
        "say": "A scholarship for students scoring sixty or more. The student with fifty-nine and the student with sixty are alike in everything that matters, and a single mark decided the treatment. A grant for municipalities below a population threshold. A benefit that starts at a given age. A credit rule where loans are approved above a score and refused below it."
      },
      {
        "t": "p",
        "text": "Near the threshold, the rule is doing something close to random assignment. Comparing across it gives a credible causal estimate — and comes with an equally clear limitation: it tells you about people **near the cut-off**. It says much less about the student who scored 90, or the town twice the threshold size.",
        "say": "Near the threshold, the rule is doing something close to random assignment. So comparing across it gives a credible causal estimate. And it comes with an equally clear limitation. It tells you about people near the cut-off. It says much less about the student who scored ninety, or the town twice the threshold size."
      },
      {
        "t": "case",
        "title": "What the profession decided about all this",
        "ps": [
          "These designs were not always mainstream. Through the 1970s and 1980s empirical economics leaned heavily on large models with many assumptions, and the arguments were about the assumptions.",
          "From the late 1980s a group of labour economists changed the emphasis: find a situation where assignment was effectively out of the participants' hands, and build the study around that. The change is usually called the **credibility revolution**, and by the 2000s it had reorganised applied economics — and spread into political science, education research, epidemiology and public health.",
          "In **October 2021** the Nobel Memorial Prize recognised it. **David Card** received one half for his empirical contributions to labour economics — the minimum-wage work you met in lecture 1.4 among them. **Joshua Angrist** and **Guido Imbens** shared the other half for their methodological contributions to the analysis of causal relationships: the work that established precisely **what quantity** these designs estimate, which turned out to be the subtle part.",
          "Two years earlier, in 2019, the prize had gone to **Abhijit Banerjee, Esther Duflo and Michael Kremer** for an experimental approach to alleviating global poverty — running actual randomised trials in development, on textbooks, deworming, microcredit and teacher incentives. Two prizes in three years for the same underlying commitment: build the study around how treatment was assigned.",
          "The honest complication, which the field argues about openly: the emphasis on credible identification pushes researchers toward questions where a natural experiment happens to exist, and those are not always the most important questions. A discipline can become very good at answering what it can answer cleanly. That criticism is taken seriously by the people who led the revolution, and it is worth carrying with you."
        ],
        "say": "Now, what the profession decided about all of this. These designs weren't always mainstream. Through the nineteen seventies and eighties, empirical economics leaned heavily on large models with many assumptions, and the arguments were about the assumptions. From the late eighties a group of labour economists changed the emphasis. Find a situation where assignment was effectively out of the participants' hands, and build the study around that. The change is usually called the credibility revolution, and by the two thousands it had reorganised applied economics, and spread into political science, education research and public health. In October twenty twenty-one the Nobel prize recognised it. David Card received one half, for his empirical contributions to labour economics — the minimum-wage work among them. Joshua Angrist and Guido Imbens shared the other half, for their methodological contributions to the analysis of causal relationships. The work that established precisely what quantity these designs estimate, which turned out to be the subtle part. And two years earlier, in twenty nineteen, the prize went to Abhijit Banerjee, Esther Duflo and Michael Kremer, for an experimental approach to alleviating global poverty. Running actual randomised trials in development — on textbooks, deworming, microcredit and teacher incentives. Two prizes in three years, for the same underlying commitment. Build the study around how treatment was assigned. And the honest complication, which the field argues about openly: the emphasis on credible identification pushes researchers toward questions where a natural experiment happens to exist. And those aren't always the most important questions. A discipline can become very good at answering what it can answer cleanly."
      },
      {
        "t": "h2",
        "text": "What even a good experiment cannot tell you",
        "say": "So what can even a good experiment not tell you?"
      },
      {
        "t": "ol",
        "items": [
          "**Whom the answer is about.** An instrument estimates the effect on **compliers** — the people whose treatment actually changed because of it. Angrist and Imbens's contribution was largely to make this precise. The effect of an extra year of schooling on those who stayed on only because of a compulsory-schooling law need not equal the effect on someone heading for a doctorate.",
          "**Whether it travels.** A programme that worked in one country, at one time, at one scale may fail elsewhere. This is **external validity**, and it is why 'it worked in a randomised trial' is the beginning of the argument about adopting something, not the end.",
          "**What happens at scale.** A trial gives free textbooks to a hundred schools. Give them to every school and prices, teacher behaviour and government budgets all respond. Effects measured small frequently shrink or reverse when the thing becomes general.",
          "**Whether it should be done.** Nothing in this lecture is a normative claim. An effect being real says nothing about whether the trade is worth making — that is lecture 1.4's boundary, and no design crosses it."
        ],
        "say": "One. Whom the answer is about. An instrument estimates the effect on compliers — the people whose treatment actually changed because of it. And the people pushed into extra schooling by a leaving-age law aren't a random slice of the population. Two. Whether it travels. A programme that worked in one country, at one time, at one scale, may fail elsewhere. That's external validity, and it's why it worked in a randomised trial is the beginning of the argument about adopting something, not the end. Three. What happens at scale. A trial gives free textbooks to a hundred schools. Give them to every school and prices, teacher behaviour and government budgets all respond. And four. Whether it should be done. Nothing here is a normative claim. An effect being real says nothing about whether the trade is worth making."
      },
      {
        "t": "warn",
        "title": "How to read a study in ninety seconds",
        "ps": [
          "Find the design first. Randomised, difference-in-differences, instrument, or discontinuity? If none of them — if it is a comparison between people who chose differently, adjusted for measured characteristics — then the identification argument is weak, whatever the statistics look like.",
          "Then find the assumption the design rests on and ask whether it is defended: parallel pre-trends for difference-in-differences, no other route for an instrument, no manipulation of the cut-off for a discontinuity. Good papers state theirs explicitly and spend pages defending it. A paper that does not mention its assumption has not stopped depending on it."
        ],
        "say": "And here's how to read a study in ninety seconds. Find the design first. Randomised, difference-in-differences, instrument, or discontinuity? If it's none of them — if it's a comparison between people who chose differently, adjusted for measured characteristics — then the identification argument is weak, whatever the statistics look like. Then find the assumption the design rests on, and ask whether it's defended. Parallel pre-trends for difference-in-differences. No other route for an instrument. No manipulation of the cut-off for a discontinuity. Good papers state theirs explicitly and spend pages defending it. A paper that doesn't mention its assumption hasn't stopped depending on it."
      },
      {
        "t": "h2",
        "text": "What you should be able to do now",
        "say": "So what can you do now?"
      },
      {
        "t": "ul",
        "items": [
          "Say what randomisation balances that a control variable cannot.",
          "Give four reasons economists often cannot randomise.",
          "Run a difference-in-differences and state the parallel-trends assumption correctly — paths, not levels.",
          "Test a proposed instrument against all three conditions and say which one usually fails.",
          "Explain why a cut-off creates a credible comparison, and whom the estimate describes.",
          "Name the compliers problem, external validity, and the scale problem."
        ],
        "say": "Say what randomisation balances that a control variable cannot. Give four reasons economists often can't randomise. Run a difference-in-differences and state the parallel-trends assumption correctly — paths, not levels. Test a proposed instrument against all three conditions. Explain why a cut-off creates a credible comparison, and whom the estimate describes. And name the compliers problem, external validity, and the scale problem."
      }
    ],
    "exercises": [
      {
        "task": "**Find a natural experiment near you.** Identify a rule, policy or system change that applied to some people and not others for reasons unconnected to the outcome. Say which design it suits.",
        "hint": "Municipal boundaries, school catchment lines, eligibility ages, staged rollouts of a service, and rules that changed on a particular date are all rich sources. Estonia's e-services rollouts are unusually well documented."
      },
      {
        "task": "**Test an instrument.** Invent or find a proposed instrument for some treatment, and check it against all three conditions. Say which one is hardest to defend and why.",
        "hint": "It is always the third — no other route to the outcome. Write the alternative route you would worry about; that sentence is what a referee would write."
      },
      {
        "task": "**Find a threshold.** Locate a real cut-off rule — a grant, a subsidy, an eligibility age, a score. Describe the comparison you could make and whom the answer would be about.",
        "hint": "Then say what the estimate would *not* tell you: the effect on people far from the threshold, which is often the group policy-makers care most about."
      },
      {
        "task": "**Check the assumption.** Take one published difference-in-differences study and find how the authors defend parallel trends. Write whether you find it convincing.",
        "hint": "Look for a figure showing both groups' paths for several periods before the policy. If there is no such figure, ask why not — its absence is informative."
      }
    ],
    "reading": [
      {
        "author": "Joshua Angrist and Jörn-Steffen Pischke",
        "work": "Mastering 'Metrics",
        "where": "Princeton University Press",
        "year": 2014,
        "note": "One chapter per design, in plain language with worked cases. The best single book behind this lecture."
      },
      {
        "author": "The Royal Swedish Academy of Sciences",
        "work": "Scientific Background: Answering Causal Questions Using Observational Data",
        "where": "nobelprize.org",
        "year": 2021,
        "note": "The committee's own explanation of the 2021 prize. Free, twenty pages, and a careful account of what these designs do and do not deliver."
      },
      {
        "author": "Abhijit Banerjee and Esther Duflo",
        "work": "Poor Economics",
        "where": "PublicAffairs",
        "year": 2011,
        "note": "Randomised trials in development, written for a general reader. Read it for what running a real experiment is like, and how often the result surprised them."
      },
      {
        "author": "Angus Deaton",
        "work": "Instruments, Randomization, and Learning about Development",
        "where": "Journal of Economic Literature",
        "year": 2010,
        "note": "The strongest serious critique of the approach, by a Nobel laureate. Read it after the others so the case for is fresh in your mind."
      }
    ],
    "glossary": [
      {
        "term": "Randomised controlled trial",
        "def": "Treatment assigned by chance, so the groups differ only by luck — on measured and unmeasured characteristics alike."
      },
      {
        "term": "Natural experiment",
        "def": "A situation where something outside participants' control decided who was treated, allowing a credible comparison without a deliberate trial."
      },
      {
        "term": "Difference-in-differences",
        "def": "Comparing the change over time in a treated group with the change in an untreated one. Removes everything common to both."
      },
      {
        "term": "Parallel trends",
        "def": "The assumption that without the treatment the two groups' paths would have stayed parallel. About paths, not levels."
      },
      {
        "term": "Instrumental variable",
        "def": "Something that shifts the treatment, is as good as random, and affects the outcome only through the treatment."
      },
      {
        "term": "Regression discontinuity",
        "def": "Using a cut-off rule as near-random assignment, comparing units just above and just below."
      },
      {
        "term": "Complier",
        "def": "A unit whose treatment actually changed because of the instrument. The group an instrumental-variable estimate describes."
      },
      {
        "term": "External validity",
        "def": "Whether a finding from one setting, time and scale holds in another."
      },
      {
        "term": "Credibility revolution",
        "def": "The shift in empirical economics from large assumption-heavy models to designs built around how treatment was assigned."
      }
    ],
    "quiz": [
      {
        "id": "w02l03q1",
        "concept": "randomisation",
        "type": "mcq",
        "q": "What does randomisation achieve that controlling for variables cannot?",
        "options": [
          "It increases the sample size",
          "It balances characteristics nobody measured or thought of",
          "It removes measurement error",
          "It makes results statistically significant"
        ],
        "answer": 1,
        "explain": "The coin does not know what it is balancing, which is precisely why it balances everything. A control variable protects you only against a confounder you named and measured, and the decisive confounders are typically the unnamed ones."
      },
      {
        "id": "w02l03q2",
        "concept": "randomisation",
        "type": "mcq",
        "q": "Why do good randomised studies report baseline characteristics of both groups?",
        "options": [
          "To prove the treatment worked",
          "Because randomisation balances groups in expectation, so a reader should be able to check that it did in this case",
          "Because regulators require it",
          "To increase the sample size"
        ],
        "answer": 1,
        "explain": "In any single trial the groups can differ by bad luck, especially in small samples. A baseline table lets the reader see whether the randomisation delivered what it promises, instead of taking it on trust."
      },
      {
        "id": "w02l03q3",
        "concept": "why-not",
        "type": "multi",
        "q": "Why can economists often not run randomised trials? Select all that apply.",
        "options": [
          "Ethics — you cannot assign people to worse schools or to unemployment",
          "Scale — many questions are about whole economies, of which there is one",
          "Politics — governments rarely allocate benefits by lottery",
          "Randomisation does not remove confounding",
          "Time — the effects of interest can take decades"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explain": "Randomisation removes confounding extremely well; that is why it is the standard. The obstacles are practical, ethical and political, which is what makes natural experiments valuable rather than second-best."
      },
      {
        "id": "w02l03q4",
        "concept": "did",
        "type": "mcq",
        "q": "In a difference-in-differences design, what does the second difference remove?",
        "options": [
          "Measurement error",
          "Everything that affected both groups over the same period",
          "Differences in the levels of the two groups",
          "The effect of the policy"
        ],
        "answer": 1,
        "explain": "The national economy, the season, the weather, common trends. That is why it is so much stronger than a before-and-after comparison, which leaves all of those inside the estimate."
      },
      {
        "id": "w02l03q5",
        "concept": "did",
        "type": "mcq",
        "q": "What exactly does the parallel trends assumption require?",
        "options": [
          "That the two groups were at the same level before the policy",
          "That without the policy the two groups' paths would have moved together",
          "That the groups were randomly assigned",
          "That the policy affected both groups equally"
        ],
        "answer": 1,
        "explain": "Levels may differ freely; it is the **gap** that must have stayed roughly constant. Mixing up levels and paths is the standard misunderstanding, and it leads people to reject valid designs and accept invalid ones."
      },
      {
        "id": "w02l03q6",
        "concept": "did",
        "type": "mcq",
        "q": "How do researchers usually support the parallel trends assumption?",
        "options": [
          "By statistical testing of the treatment effect",
          "By showing the two groups moved in parallel for several periods before the policy",
          "By increasing the sample size",
          "It cannot be supported at all"
        ],
        "answer": 1,
        "explain": "Pre-trends are evidence rather than proof — the paths could still have diverged at exactly the moment of the policy — but a paper with no pre-trend figure has left its central assumption undefended, and you should notice the absence."
      },
      {
        "id": "w02l03q7",
        "concept": "iv",
        "type": "multi",
        "q": "Which conditions must an instrument satisfy? Select all that apply.",
        "options": [
          "It genuinely shifts the treatment",
          "It is as good as randomly assigned",
          "It affects the outcome only through the treatment",
          "It is measured without error",
          "It is correlated with the outcome"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": "The third is the one that kills most candidates, and it cannot be proved from data — it is argued in words about the world. Being correlated with the outcome is not a condition; an instrument is expected to be, *through* the treatment."
      },
      {
        "id": "w02l03q8",
        "concept": "iv",
        "type": "short",
        "q": "Date of birth has been used as an instrument for years of schooling, because compulsory-schooling laws mean children born in different months complete different amounts. Explain how the instrument is supposed to work and state the strongest objection to it.",
        "must": [
          {
            "point": "compulsory-schooling laws let children leave at a given age",
            "any": [
              "compulsory",
              "leave",
              "age",
              "law",
              "school-leaving",
              "minimum age"
            ]
          },
          {
            "point": "so birth month changes how much school is completed by that age",
            "any": [
              "birth month",
              "quarter",
              "born",
              "different amount",
              "more school",
              "extra year",
              "varies"
            ]
          },
          {
            "point": "and nobody chooses their birth month for career reasons",
            "any": [
              "nobody chooses",
              "not chosen",
              "as good as random",
              "unrelated",
              "no control",
              "random"
            ]
          },
          {
            "point": "so it shifts schooling for reasons unconnected to ability or ambition",
            "any": [
              "ability",
              "ambition",
              "unconnected",
              "unrelated",
              "not the kind of person",
              "independent"
            ]
          },
          {
            "point": "the strongest objection: birth month may affect the outcome by another route",
            "any": [
              "another route",
              "other path",
              "directly",
              "school starting age",
              "relative age",
              "health",
              "season",
              "not only through"
            ]
          },
          {
            "point": "and that condition cannot be tested in the data",
            "any": [
              "cannot be tested",
              "not testable",
              "argued",
              "assumption",
              "unprovable",
              "in words"
            ]
          }
        ],
        "answer": "Compulsory-schooling laws allow a child to leave at a particular age rather than at the end of a school year. A child born in one month therefore reaches that age having completed more school than a child born in another, so **birth month nudges some people into extra schooling** — and it does so for a reason that has nothing to do with their ability, ambition or family. Comparing earnings across birth months should then isolate the effect of the extra schooling rather than the effect of being the kind of person who stays on. The strongest objection attacks the third condition: birth month may reach earnings by **some other route**. Children born at different times of year start school at different relative ages, are older or younger than their classmates throughout, and there is a literature on season-of-birth effects on health. If any of those affects earnings directly, the instrument is contaminated. Crucially, that condition **cannot be tested against the data** — it is an argument about how the world works, defended in words, which is where instruments usually live or die.",
        "explain": "This example is worth knowing in detail: it is the most famous instrument in economics and the objection to it is the standard shape of every objection to every instrument."
      },
      {
        "id": "w02l03q9",
        "concept": "rdd",
        "type": "mcq",
        "q": "A scholarship is awarded to students scoring 60 or more. Why does this create a credible comparison?",
        "options": [
          "Because test scores measure ability accurately",
          "Because students scoring 59 and 60 are alike in everything except that a single mark decided the treatment",
          "Because the scholarship is randomly allocated",
          "Because scores are normally distributed"
        ],
        "answer": 1,
        "explain": "Near the threshold the rule does something close to random assignment — the difference between 59 and 60 is mostly luck on the day. That is exactly the comparison a natural experiment needs."
      },
      {
        "id": "w02l03q10",
        "concept": "rdd",
        "type": "mcq",
        "q": "What is the built-in limitation of a regression discontinuity estimate?",
        "options": [
          "It requires a very large sample",
          "It tells you about units near the cut-off, and much less about those far from it",
          "It cannot be used for policy",
          "It requires randomisation as well"
        ],
        "answer": 1,
        "explain": "The estimate is local to the threshold. What a scholarship does for the student who scraped in tells you relatively little about what it would do for the student who scored 90 — and policy-makers frequently care about the second group."
      },
      {
        "id": "w02l03q11",
        "concept": "exp-limits",
        "type": "mcq",
        "q": "An instrumental-variable estimate describes the effect on which group?",
        "options": [
          "Everybody in the population",
          "The treated group only",
          "Compliers — those whose treatment actually changed because of the instrument",
          "The control group"
        ],
        "answer": 2,
        "explain": "Making this precise was a large part of what Angrist and Imbens were recognised for in 2021. The people pushed into extra schooling by a leaving-age law are not a random slice of the population, so the estimate need not equal the effect on anyone else."
      },
      {
        "id": "w02l03q12",
        "concept": "exp-limits",
        "type": "short",
        "q": "A randomised trial finds that free textbooks raised test scores in 100 schools. A minister proposes free textbooks nationwide. Name three reasons the national result might differ, and say what you would want before advising.",
        "must": [
          {
            "point": "external validity — the setting, time or population may differ",
            "any": [
              "external validity",
              "setting",
              "different",
              "context",
              "population",
              "elsewhere",
              "generalis"
            ]
          },
          {
            "point": "scale effects — prices, supply or behaviour respond when it becomes general",
            "any": [
              "scale",
              "price",
              "supply",
              "behaviour",
              "respond",
              "general",
              "everyone",
              "market"
            ]
          },
          {
            "point": "the effect may be concentrated in the schools that most needed it",
            "any": [
              "concentrat",
              "those who needed",
              "baseline",
              "already had",
              "some schools",
              "heterogen",
              "varies"
            ]
          },
          {
            "point": "wants replication in other settings or a staged rollout",
            "any": [
              "replicat",
              "other settings",
              "pilot",
              "staged",
              "rollout",
              "phase",
              "more evidence",
              "another trial"
            ]
          },
          {
            "point": "wants the cost and the alternative use of the money",
            "any": [
              "cost",
              "budget",
              "alternative",
              "opportunity cost",
              "compared",
              "instead",
              "value for money"
            ]
          }
        ],
        "answer": "**External validity:** the trial ran in particular schools, at a particular time, with a particular population. Whether the result travels to schools with different teachers, languages, baseline resources or curricula is a question the trial does not answer. **Scale:** a hundred schools buying textbooks does not move the market; every school doing so may raise prices, strain supply, and change how publishers, teachers and the ministry behave — effects measured small routinely shrink or reverse when a programme becomes general. **Heterogeneity:** the average effect may be concentrated among schools that had no books at all, in which case extending it to schools already adequately supplied buys much less. Before advising, I would want the effect broken down by baseline conditions rather than a single average, replication in at least one different setting, and — this is lecture 1.1's question — the **cost**, set against what the same money would buy elsewhere in the education budget. In practice the right recommendation is usually a **staged rollout** that preserves a comparison group, so that the national programme continues producing evidence rather than merely spending.",
        "explain": "The staged rollout is the practical answer worth remembering: it converts a policy into a natural experiment, at almost no extra cost, simply by choosing the order carefully."
      }
    ]
  },
  "w02l04": {
    "standfirst": "A regression table is the standard way economic evidence is presented, and almost everyone who quotes one has been fooled by it at least once. This lecture teaches you to read four numbers — the coefficient, the standard error, the p-value and the R-squared — and, more importantly, to know exactly which sentence each one entitles you to say.",
    "thread": {
      "from": "2.3 gave the designs that make a comparison credible.",
      "adds": "How the result of such a design is reported, and the four numbers you must be able to read to check it.",
      "toward": "2.5 asks whether published results survive scrutiny. From week 3 onward, every empirical claim you meet was reported in this format."
    },
    "objectives": [
      "State exactly what a regression coefficient means, including the words 'holding fixed'.",
      "Convert a coefficient into a sentence with units in it.",
      "Explain what a standard error measures and, crucially, what it does not.",
      "Say what a p-value below 0.05 does and does not establish.",
      "Distinguish statistical significance from practical importance.",
      "Read an R-squared without concluding anything about causation."
    ],
    "concepts": [
      {
        "id": "coefficient",
        "name": "What a coefficient is"
      },
      {
        "id": "units",
        "name": "Units, and why a bare number is meaningless"
      },
      {
        "id": "se-ci",
        "name": "Standard errors and confidence intervals"
      },
      {
        "id": "pvalue",
        "name": "P-values and significance"
      },
      {
        "id": "sig-vs-size",
        "name": "Significance against importance"
      },
      {
        "id": "rsq",
        "name": "R-squared and its traps"
      }
    ],
    "vocab": [
      {
        "word": "coefficient",
        "plain": "The number attached to a variable, saying how much the outcome moves with it.",
        "et": "kordaja, koefitsient"
      },
      {
        "word": "regression",
        "plain": "A method for fitting a line through data to summarise how things move together.",
        "et": "regressioon"
      },
      {
        "word": "standard error",
        "plain": "How much the estimate would bounce around if you repeated the study on a new sample.",
        "et": "standardviga"
      },
      {
        "word": "confidence interval",
        "plain": "A range of values the data is broadly consistent with.",
        "et": "usaldusvahemik"
      },
      {
        "word": "significant",
        "plain": "In statistics, unlikely to be produced by chance alone. Not the same as large or important.",
        "et": "statistiliselt oluline"
      },
      {
        "word": "precision",
        "plain": "How tightly an estimate is pinned down. High precision can still be precisely wrong.",
        "et": "täpsus"
      },
      {
        "word": "variance",
        "plain": "How spread out a set of numbers is.",
        "et": "hajuvus, dispersioon"
      },
      {
        "word": "specification",
        "plain": "The exact choice of variables and form used in an estimate.",
        "et": "mudeli täpsustus"
      },
      {
        "word": "elasticity",
        "plain": "The percentage change in one thing caused by a one-percent change in another.",
        "et": "elastsus"
      },
      {
        "word": "null",
        "plain": "The default assumption being tested against — usually that the effect is zero.",
        "et": "nullhüpotees"
      },
      {
        "word": "bias",
        "plain": "A systematic error that does not shrink when the sample grows.",
        "et": "nihe, süstemaatiline viga"
      },
      {
        "word": "noise",
        "plain": "Random variation with no meaning.",
        "et": "müra"
      }
    ],
    "tools": [
      {
        "kind": "test",
        "name": "Say the coefficient as a sentence",
        "answers": "What does this number actually claim?",
        "when": "Every time you meet one. Fill in: 'a one-[unit] increase in X is associated with a [coefficient] [unit] change in Y, holding [the other variables] fixed.' If you cannot fill in every bracket, you cannot yet use the number."
      },
      {
        "kind": "test",
        "name": "Significance against size",
        "answers": "Is this finding important, or merely detectable?",
        "when": "Whenever a result is called significant. Ask separately: is the effect distinguishable from zero, and is it big enough to matter? Large samples make trivial effects significant; small samples leave important ones undetected."
      },
      {
        "kind": "checklist",
        "name": "What the standard error does not cover",
        "answers": "How wrong could this be?",
        "when": "Before trusting a confidence interval. It measures sampling variability only. It says nothing about a bad comparison group, a mismeasured variable or a wrong specification — and those are usually the larger dangers."
      }
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "What a regression is doing",
        "say": "What a regression is doing."
      },
      {
        "t": "p",
        "text": "A regression fits a line — or a plane, with several variables — through a cloud of data, chosen to make the misses as small as possible. Everything it reports is a description of that line and of how confidently it was placed.",
        "say": "A regression fits a line — or a plane, if there are several variables — through a cloud of data, chosen to make the misses as small as possible. Everything it reports is a description of that line, and of how confidently it was placed."
      },
      {
        "t": "p",
        "text": "The headline output is the **coefficient**: one number per variable, answering a single question.",
        "say": "The headline output is the coefficient. One number per variable, answering a single question."
      },
      {
        "t": "write",
        "items": [
          "**A coefficient says: when this variable is one unit higher, the outcome is on average this much higher — among observations that are alike on the other variables included.**",
          "Three parts matter: **one unit**, **on average**, and **the other variables included**. Drop any of them and you will misread the number."
        ],
        "say": "A coefficient says: when this variable is one unit higher, the outcome is on average this much higher — among observations that are alike on the other variables included. Three parts matter. One unit. On average. And the other variables included. Drop any of them and you'll misread the number."
      },
      {
        "t": "p",
        "text": "Notice the word **included**. A regression holds fixed the variables in the model and nothing else. Everything left out is free to vary, which is the whole content of lecture 2.2's warning: the coefficient is a causal effect only if the design makes it one, and the regression itself cannot tell you whether it does.",
        "say": "Notice the word included. A regression holds fixed the variables in the model and nothing else. Everything left out is free to vary, which is the whole content of last lecture's warning. The coefficient is a causal effect only if the design makes it one, and the regression itself can't tell you whether it does."
      },
      {
        "t": "h2",
        "text": "Units, or the number means nothing",
        "say": "Units. Or the number means nothing."
      },
      {
        "t": "p",
        "text": "A bare coefficient is unreadable. Suppose a study of earnings reports a coefficient of **0.08** on years of education. Eight what?",
        "say": "A bare coefficient is unreadable. Suppose a study of earnings reports a coefficient of nought point oh eight on years of education. Eight what?"
      },
      {
        "t": "ul",
        "items": [
          "If earnings are measured in euros per month, it means €0.08 a month per extra year of education — an absurdity, and a sign you have misread the table.",
          "If earnings are measured as the **logarithm** of monthly pay, which is standard, it means roughly **8% higher pay per extra year** — a large and famous number.",
          "If education is measured in *decades* rather than years, the same 0.08 means something ten times smaller per year."
        ],
        "say": "If earnings are measured in euros per month, it means eight cents a month per extra year of education. Which is absurd, and a sign you've misread the table. If earnings are measured as the logarithm of monthly pay, which is standard, it means roughly eight percent higher pay per extra year — a large and famous number. And if education is measured in decades rather than years, the same nought point oh eight means something ten times smaller per year."
      },
      {
        "t": "p",
        "text": "Economists use logarithms so often precisely because the coefficient then reads as a percentage, which makes results comparable across countries and currencies. The practical rule: **find the units before you read anything else.** A published table states them, usually in a note underneath that nobody reads.",
        "say": "Economists use logarithms so often precisely because the coefficient then reads as a percentage, which makes results comparable across countries and currencies. So the practical rule is: find the units before you read anything else. A published table states them, usually in a note underneath that nobody reads."
      },
      {
        "t": "table",
        "head": [
          "If the model is…",
          "A coefficient of 0.08 on X means…",
          "Say it as"
        ],
        "rows": [
          [
            "Y in euros, X in years",
            "€0.08 more per extra year",
            "Almost certainly a misreading"
          ],
          [
            "**log Y**, X in years",
            "About **8% more** per extra year",
            "'An extra year of schooling is associated with about 8% higher pay'"
          ],
          [
            "log Y, log X",
            "A 1% rise in X goes with a **0.08% rise** in Y",
            "An elasticity of 0.08"
          ],
          [
            "Y in euros, X a yes/no variable",
            "€0.08 more for the 'yes' group",
            "Check the units — this one is nearly always a misreading too"
          ]
        ],
        "say": "So, with a coefficient of nought point oh eight: if Y is in euros and X in years, that's eight cents — almost certainly a misreading. If it's log Y against years, it's about eight percent more per extra year. If it's log Y against log X, it's an elasticity — a one percent rise in X goes with a nought point oh eight percent rise in Y. The specification decides how you read it."
      },
      {
        "t": "h2",
        "text": "How confident: standard errors and intervals",
        "say": "How confident? Standard errors and intervals."
      },
      {
        "t": "p",
        "text": "The coefficient is an estimate from one sample. Draw a different sample and you would get a slightly different number. The **standard error** measures how much it would bounce around.",
        "say": "The coefficient is an estimate from one sample. Draw a different sample and you'd get a slightly different number. The standard error measures how much it would bounce around."
      },
      {
        "t": "p",
        "text": "From it comes the **confidence interval**, usually reported as the estimate plus and minus about two standard errors. If a coefficient is 0.08 with a standard error of 0.02, the interval runs roughly from **0.04 to 0.12** — the data is broadly consistent with an effect anywhere in that range.",
        "say": "And from that comes the confidence interval, usually reported as the estimate plus and minus about two standard errors. So if a coefficient is nought point oh eight with a standard error of nought point oh two, the interval runs roughly from nought point oh four to nought point one two. The data is broadly consistent with an effect anywhere in that range."
      },
      {
        "t": "p",
        "text": "Now the sentence that matters more than anything else in this lecture.",
        "say": "Now the sentence that matters more than anything else in this lecture."
      },
      {
        "t": "warn",
        "title": "What a standard error does not measure",
        "ps": [
          "It measures **sampling variability only** — the luck of which observations you happened to draw. It assumes the study is otherwise correctly designed.",
          "It says nothing about a badly chosen comparison group, a mismeasured variable, a confounder left out, or a wrong specification. Those are **bias**, and bias does not shrink as the sample grows. A study with a million observations and a broken identification strategy produces a very tight confidence interval around the wrong number.",
          "So a narrow interval means precise, not correct. The design questions from 2.2 and 2.3 are asked first; the standard error is only meaningful once they have been answered."
        ],
        "say": "The standard error measures sampling variability only. The luck of which observations you happened to draw. It assumes the study is otherwise correctly designed. It says nothing about a badly chosen comparison group, a mismeasured variable, a confounder left out, or a wrong specification. Those are bias. And bias does not shrink as the sample grows. A study with a million observations and a broken identification strategy produces a very tight confidence interval around the wrong number. So a narrow interval means precise. Not correct."
      },
      {
        "t": "h2",
        "text": "The p-value, and what it is not",
        "say": "The p-value, and what it is not."
      },
      {
        "t": "p",
        "text": "A **p-value** answers one narrow question: if the true effect were exactly zero, how often would a sample produce an estimate at least as large as this one? Below 0.05 — under one time in twenty — the result is conventionally called **statistically significant**.",
        "say": "A p-value answers one narrow question. If the true effect were exactly zero, how often would a sample produce an estimate at least as large as this one? Below nought point oh five — under one time in twenty — the result is conventionally called statistically significant."
      },
      {
        "t": "p",
        "text": "The threshold is a convention, not a law of nature, and the phrase misleads almost everyone who is not trained in it. Here is what it does not mean:",
        "say": "That threshold is a convention, not a law of nature. And the phrase misleads almost everybody who isn't trained in it. So here's what it does not mean."
      },
      {
        "t": "ol",
        "items": [
          "**Not** that there is a 95% chance the effect is real. The p-value is computed *assuming* the effect is zero; it cannot also tell you the probability that assumption is false.",
          "**Not** that the effect is large. It can be minuscule and highly significant, given enough data.",
          "**Not** that the finding will replicate. Lecture 2.5 is about how often it does not.",
          "**Not** that a non-significant result means no effect. It may mean the study was too small to detect one — *absence of evidence is not evidence of absence*, and this error is committed constantly."
        ],
        "say": "Not that there's a ninety-five percent chance the effect is real. The p-value is computed assuming the effect is zero, so it can't also tell you the probability that that assumption is false. Not that the effect is large — it can be minuscule and highly significant, given enough data. Not that the finding will replicate; next lecture is about how often it doesn't. And not that a non-significant result means no effect. It may mean the study was too small to detect one. Absence of evidence is not evidence of absence, and that error gets committed constantly."
      },
      {
        "t": "p",
        "text": "There is a further problem with the 0.05 line that is structural rather than conceptual. Because journals have historically preferred significant results, a threshold creates an incentive to arrive just under it. That is the subject of the next lecture, and it is the reason many economists now report confidence intervals and de-emphasise the star next to the number.",
        "say": "There's a further problem with the nought point oh five line that's structural rather than conceptual. Because journals have historically preferred significant results, a threshold creates an incentive to arrive just under it. That's the subject of the next lecture, and it's why many economists now report confidence intervals and de-emphasise the star next to the number."
      },
      {
        "t": "h2",
        "text": "Significant and important are different words",
        "say": "Significant and important are different words."
      },
      {
        "t": "p",
        "text": "This confusion does more practical damage than all the others combined, because the statistical word has an everyday meaning that is nearly its opposite.",
        "say": "This confusion does more practical damage than all the others combined, because the statistical word has an everyday meaning that's nearly its opposite."
      },
      {
        "t": "table",
        "head": [
          "",
          "Statistically significant",
          "Not statistically significant"
        ],
        "rows": [
          [
            "**Large effect**",
            "The useful case: real and worth acting on",
            "Suggestive — the study was probably too small. Worth more data, not dismissal"
          ],
          [
            "**Tiny effect**",
            "Common in large datasets. Real, and possibly irrelevant",
            "Nothing here"
          ]
        ],
        "say": "Take the four combinations. A large effect that's statistically significant is the useful case — real, and worth acting on. A large effect that isn't significant is suggestive; the study was probably too small, so it's worth more data rather than dismissal. A tiny effect that is significant is common in large datasets — real, and possibly irrelevant. And a tiny effect that isn't significant is nothing at all."
      },
      {
        "t": "p",
        "text": "The bottom-left cell is where most modern data work goes wrong. With millions of observations, almost any difference becomes significant, and a paper can report a genuine, precisely estimated, thoroughly trivial effect. The corrective is to ask the question significance never answers: **is it big enough to change a decision?**",
        "say": "The tiny-but-significant cell is where most modern data work goes wrong. With millions of observations, almost any difference becomes significant, and a paper can report a genuine, precisely estimated, thoroughly trivial effect. The corrective is to ask the question significance never answers. Is it big enough to change a decision?"
      },
      {
        "t": "p",
        "text": "The top-right cell is the mirror error. A study of forty firms fails to find a significant effect, and somebody reports that the policy does not work. With forty firms, an effect would have to be enormous to be detectable. The honest conclusion is that the study could not tell.",
        "say": "And the large-but-not-significant cell is the mirror error. A study of forty firms fails to find a significant effect, and somebody reports that the policy doesn't work. With forty firms, an effect would have to be enormous to be detectable. The honest conclusion is that the study couldn't tell."
      },
      {
        "t": "h2",
        "text": "R-squared",
        "say": "R-squared."
      },
      {
        "t": "p",
        "text": "**R-squared** is the share of the variation in the outcome that the model accounts for — 0 for none, 1 for all. It is quoted constantly and misunderstood in both directions.",
        "say": "R-squared is the share of the variation in the outcome that the model accounts for. Zero for none, one for all. It gets quoted constantly and misunderstood in both directions."
      },
      {
        "t": "ul",
        "items": [
          "**A high R-squared does not mean causation.** Predicting today's temperature from yesterday's gives a very high R-squared and explains nothing about why the weather is what it is.",
          "**A low R-squared does not mean the finding is worthless.** Human behaviour is enormously variable, so a model of individual earnings may account for a modest share of the variation while still identifying a real and important effect of education. The R-squared is about prediction; the coefficient is about the relationship.",
          "**Adding variables always raises it.** You can raise R-squared toward 1 by adding noise. This is why adjusted measures exist, and why R-squared is a poor way to choose between models.",
          "**It says nothing about whether the effect matters.** That is the coefficient's job, read in its units."
        ],
        "say": "A high R-squared doesn't mean causation. Predicting today's temperature from yesterday's gives a very high R-squared and explains nothing about why the weather is what it is. A low R-squared doesn't mean the finding is worthless — human behaviour is enormously variable, so a model of individual earnings can account for a modest share and still identify a real and important effect. Adding variables always raises it; you can push R-squared toward one by adding noise. And it says nothing about whether the effect matters. That's the coefficient's job, read in its units."
      },
      {
        "t": "p",
        "text": "The single-sentence version: R-squared tells you how well the model predicts, and the design tells you whether the coefficient means anything. They are independent, and confusing them lets a well-fitting model launder a bad identification argument.",
        "say": "So the single-sentence version. R-squared tells you how well the model predicts. The design tells you whether the coefficient means anything. They're independent, and confusing them lets a well-fitting model launder a bad identification argument."
      },
      {
        "t": "h3",
        "text": "A whole table, read line by line",
        "say": "Let me read a whole table, line by line."
      },
      {
        "t": "p",
        "text": "Here is a small, realistic results table of the kind you will actually meet. Read it before reading the commentary underneath.",
        "say": "Here's a small, realistic results table of the kind you'll actually meet."
      },
      {
        "t": "table",
        "head": [
          "Variable",
          "Coefficient",
          "(Standard error)",
          "Reads as"
        ],
        "rows": [
          [
            "Years of schooling",
            "0.079",
            "(0.021)",
            "About **8%** more pay per year — interval roughly 3.7% to 12.1%"
          ],
          [
            "Experience (years)",
            "0.018",
            "(0.004)",
            "About 1.8% per year, tightly estimated"
          ],
          [
            "Female",
            "−0.112",
            "(0.038)",
            "About **11% lower** pay for women, among people alike on the included variables"
          ],
          [
            "Urban",
            "0.041",
            "(0.049)",
            "Point estimate 4%, interval spans zero — **not distinguishable from zero here**"
          ],
          [
            "*Observations*",
            "4,812",
            "",
            "Large enough that a non-result is informative rather than merely quiet"
          ],
          [
            "*R-squared*",
            "0.31",
            "",
            "The model accounts for 31% of the variation in log pay"
          ]
        ],
        "cap": "Illustrative figures in the standard format: outcome is log monthly pay, so every coefficient reads as a percentage.",
        "say": "Years of schooling: coefficient nought point oh seven nine, standard error nought point oh two one. Experience: nought point oh one eight, standard error nought point oh oh four. Female: minus nought point one one two, standard error nought point oh three eight. Urban: nought point oh four one, standard error nought point oh four nine. Four thousand eight hundred and twelve observations, and an R-squared of nought point three one. The outcome is log monthly pay, so every coefficient reads as a percentage."
      },
      {
        "t": "ol",
        "items": [
          "**Schooling.** The headline. 0.079 on a log outcome is about 8% per year, and the interval — the estimate plus and minus about two standard errors — runs from roughly 3.7% to 12.1%. Quote the range, not the point.",
          "**Experience.** Smaller but far more precisely estimated: the standard error is a fifth of the coefficient, so the interval is tight. Note that precision and size are separate properties.",
          "**Female.** Read it exactly: about 11% lower pay *among people alike on the variables in this model*. It is not the raw gap, and it is not 'the unexplained gap' either — it is the gap remaining after adjusting for these particular variables and no others. Adding or removing controls changes it, which is why this coefficient is argued about so fiercely.",
          "**Urban.** The point estimate is 4%, and the interval runs from about −5.7% to +13.9%. It contains zero, so the honest statement is that this study cannot distinguish the urban effect from nothing — not that there is no urban effect.",
          "**R-squared.** 31% of the variation accounted for. This is normal and healthy for individual-level data, where most variation is personal and idiosyncratic, and it implies nothing whatever about whether the schooling coefficient is causal."
        ],
        "say": "Schooling is the headline. Nought point oh seven nine on a log outcome is about eight percent per year, and the interval runs from roughly three point seven to twelve point one percent. Quote the range, not the point. Experience is smaller but far more precisely estimated — the standard error is a fifth of the coefficient, so the interval is tight. Notice that precision and size are separate properties. Female: read it exactly. About eleven percent lower pay among people alike on the variables in this model. It isn't the raw gap, and it isn't the unexplained gap either. It's the gap remaining after adjusting for these particular variables and no others — which is why this coefficient gets argued about so fiercely. Urban: the point estimate is four percent, and the interval runs from about minus five point seven to plus thirteen point nine. It contains zero, so the honest statement is that this study can't distinguish the urban effect from nothing. Not that there is no urban effect. And R-squared of thirty-one percent is normal and healthy for individual-level data, where most variation is personal and idiosyncratic. It implies nothing whatever about whether the schooling coefficient is causal."
      },
      {
        "t": "p",
        "text": "One more thing that is **not** in the table and matters more than everything in it: how were these people assigned to their years of schooling? The table cannot tell you, and without an answer every row is an association. That is the whole of lectures 2.2 and 2.3 arriving as a single question you ask of every table you ever read.",
        "say": "And one more thing that isn't in the table, and matters more than everything in it. How were these people assigned to their years of schooling? The table can't tell you. And without an answer, every row is an association. That's the whole of the last two lectures, arriving as a single question you ask of every table you ever read."
      },
      {
        "t": "h2",
        "text": "The four sentences you are entitled to",
        "say": "So here are the four sentences you're entitled to."
      },
      {
        "t": "p",
        "text": "Given a coefficient of 0.08, a standard error of 0.02 and a credible design, here is the full extent of what you may say — and it is a good template for writing up any result of your own:",
        "say": "Given a coefficient of nought point oh eight, a standard error of nought point oh two, and a credible design, this is the full extent of what you may say. And it's a good template for writing up any result of your own."
      },
      {
        "t": "ol",
        "items": [
          "**The estimate.** 'An extra year of schooling is associated with about 8% higher earnings, among people alike on the other included variables.'",
          "**The uncertainty.** 'The data is consistent with anything from roughly 4% to 12%.'",
          "**The design.** 'This is a causal estimate if the identification strategy holds — here, that [the instrument has no other route / the trends were parallel].'",
          "**The importance.** 'An 8% return per year is large: over three additional years it compounds to roughly a quarter more pay.'"
        ],
        "say": "One, the estimate. An extra year of schooling is associated with about eight percent higher earnings, among people alike on the other included variables. Two, the uncertainty. The data is consistent with anything from roughly four to twelve percent. Three, the design. This is a causal estimate if the identification strategy holds — and here's what that strategy is. And four, the importance. An eight percent return per year is large; over three additional years it compounds to roughly a quarter more pay."
      },
      {
        "t": "p",
        "text": "Anything beyond those four is an addition of your own. In particular, 'this proves' is never one of them: a well-identified, precisely estimated result raises confidence in a claim, and no single study settles a question. That is what the next lecture is about.",
        "say": "Anything beyond those four is an addition of your own. In particular, this proves is never one of them. A well-identified, precisely estimated result raises confidence in a claim. No single study settles a question. And that's what the next lecture is about."
      },
      {
        "t": "h2",
        "text": "What you should be able to do now",
        "say": "So what can you do now?"
      },
      {
        "t": "ul",
        "items": [
          "Say a coefficient aloud as a full sentence with units and the holding-fixed clause.",
          "Recognise a log specification and read the coefficient as a percentage.",
          "Build a confidence interval from an estimate and a standard error.",
          "Explain what a standard error excludes, and why a narrow interval is not reassurance about bias.",
          "State what a p-value below 0.05 does and does not establish, in four specific negations.",
          "Read an R-squared without drawing any conclusion about causation or importance."
        ],
        "say": "Say a coefficient aloud as a full sentence, with units and the holding-fixed clause. Recognise a log specification and read the coefficient as a percentage. Build a confidence interval from an estimate and a standard error. Explain what a standard error excludes. State what a p-value below nought point oh five does and doesn't establish. And read an R-squared without drawing any conclusion about causation."
      }
    ],
    "exercises": [
      {
        "task": "**Translate a real coefficient.** Find one published regression result and write the full sentence: a one-unit increase in X is associated with a change of this much in Y, holding these fixed. Note where you had to look for the units.",
        "hint": "Central bank working papers and the free NBER working-paper series are full of readable tables. The units are usually in a note under the table or in the variable definitions."
      },
      {
        "task": "**Build the interval.** For the same result, compute the confidence interval from the standard error and write what range the data is consistent with. Then say whether the bottom of that range would still change a decision.",
        "hint": "That last question is the one that matters and the one nobody asks. If the low end of the interval is too small to act on, the honest summary is 'we cannot yet tell whether this is worth doing'."
      },
      {
        "task": "**Find a significance error in the wild.** Look for a news report that treats a non-significant result as proof of no effect, or a tiny significant effect as important. Write the correct reading.",
        "hint": "Health and education reporting are the richest sources. The phrase 'no link was found' almost always deserves the question: how large an effect could that study have detected?"
      },
      {
        "task": "**Separate fit from meaning.** Find a claim supported by a high R-squared. Say what it does and does not establish, and what design question you would ask next.",
        "hint": "Economic forecasting and scoring models are good hunting. A model can predict extremely well and be useless for policy, because prediction and causation are different jobs."
      }
    ],
    "reading": [
      {
        "author": "Joshua Angrist and Jörn-Steffen Pischke",
        "work": "Mastering 'Metrics",
        "where": "Princeton University Press",
        "year": 2014,
        "note": "The appendix on regression and standard errors is the clearest short treatment available without heavy mathematics."
      },
      {
        "author": "Ronald Wasserstein and Nicole Lazar",
        "work": "The ASA Statement on p-Values: Context, Process, and Purpose",
        "where": "The American Statistician",
        "year": 2016,
        "note": "The American Statistical Association explaining, officially and in plain language, what p-values do not mean. Two pages, free, and worth reading twice."
      },
      {
        "author": "Stephen Ziliak and Deirdre McCloskey",
        "work": "The Cult of Statistical Significance",
        "where": "University of Michigan Press",
        "year": 2008,
        "note": "A long, angry and influential argument that economics confused significance with importance for decades. Overstated in places, and the core point stands."
      },
      {
        "author": "Charles Wheelan",
        "work": "Naked Statistics",
        "where": "W. W. Norton",
        "year": 2013,
        "note": "If any of this felt fast, read this first. It covers the same ground without assuming anything."
      }
    ],
    "glossary": [
      {
        "term": "Coefficient",
        "def": "The estimated change in the outcome per one-unit change in a variable, holding the other included variables fixed."
      },
      {
        "term": "Log specification",
        "def": "Using the logarithm of a variable so the coefficient reads as a percentage change. Standard for earnings and prices."
      },
      {
        "term": "Standard error",
        "def": "How much an estimate would vary across repeated samples. Measures sampling variability only."
      },
      {
        "term": "Confidence interval",
        "def": "Roughly the estimate plus or minus two standard errors. The range the data is broadly consistent with."
      },
      {
        "term": "P-value",
        "def": "The probability of seeing an estimate at least this large if the true effect were exactly zero."
      },
      {
        "term": "Statistical significance",
        "def": "A p-value below a conventional threshold, usually 0.05. Says the effect is distinguishable from zero, not that it is large or real."
      },
      {
        "term": "Bias",
        "def": "Systematic error from design, measurement or omitted variables. Does not shrink as the sample grows, and is not covered by the standard error."
      },
      {
        "term": "R-squared",
        "def": "The share of variation in the outcome accounted for by the model. About prediction; silent about causation."
      },
      {
        "term": "Absence of evidence",
        "def": "A non-significant result. It may mean no effect, or a study too small to detect one — and the two are not the same."
      }
    ],
    "quiz": [
      {
        "id": "w02l04q1",
        "concept": "coefficient",
        "type": "mcq",
        "q": "A regression of log earnings on years of education, controlling for experience and region, gives a coefficient of 0.08. What does it mean?",
        "options": [
          "Earnings are €0.08 higher per year of education",
          "An extra year of education is associated with about 8% higher earnings, among people alike on experience and region",
          "Education explains 8% of earnings",
          "There is an 8% chance the effect is real"
        ],
        "answer": 1,
        "explain": "Log outcome means the coefficient reads as a percentage. Note the three parts that must be said: one unit, on average, and holding fixed **the variables included** — everything not in the model is free to vary."
      },
      {
        "id": "w02l04q2",
        "concept": "units",
        "type": "mcq",
        "q": "Why does the lecture say a bare coefficient is unreadable?",
        "options": [
          "Because coefficients are often mistyped",
          "Because its meaning depends entirely on the units of both variables",
          "Because coefficients are only valid with a p-value",
          "Because regressions report several coefficients"
        ],
        "answer": 1,
        "explain": "The same 0.08 means €0.08, or 8%, or an elasticity of 0.08, depending on how the variables were measured. Finding the units is the first thing to do with any table, and they are nearly always in a note nobody reads."
      },
      {
        "id": "w02l04q3",
        "concept": "units",
        "type": "mcq",
        "q": "In a model where both the outcome and the variable are in logarithms, how is a coefficient of 0.08 read?",
        "options": [
          "A one-unit rise in X gives 8% more Y",
          "A 1% rise in X goes with a 0.08% rise in Y — an elasticity",
          "8% of the variation is explained",
          "Y is 0.08 units higher"
        ],
        "answer": 1,
        "explain": "Log–log gives an elasticity directly, which is why the specification is so common in demand and price work. Week 3 defines elasticity properly; here the point is only that the specification decides how the number is read."
      },
      {
        "id": "w02l04q4",
        "concept": "se-ci",
        "type": "num",
        "q": "A coefficient is 0.08 with a standard error of 0.02. Roughly what is the upper end of the 95% confidence interval?",
        "answer": 0.12,
        "tol": 0.005,
        "unit": "",
        "placeholder": "e.g. 0.10",
        "explain": "0.08 + 2 × 0.02 = 0.12, with the lower end at 0.04. The data is broadly consistent with anything in that range, and the honest summary quotes the range rather than the point."
      },
      {
        "id": "w02l04q5",
        "concept": "se-ci",
        "type": "mcq",
        "q": "A study has one million observations and a very narrow confidence interval, but its comparison group is badly chosen. What follows?",
        "options": [
          "The large sample compensates for the design flaw",
          "The estimate is precise and wrong — standard errors do not measure bias",
          "The confidence interval will be wide, revealing the problem",
          "The p-value will show the problem"
        ],
        "answer": 1,
        "explain": "Bias does not shrink with sample size. This is why the design questions from 2.2 and 2.3 come first: a tight interval around a badly identified estimate is more dangerous than a wide one, because it looks authoritative."
      },
      {
        "id": "w02l04q6",
        "concept": "pvalue",
        "type": "multi",
        "q": "Which of these does a p-value below 0.05 NOT establish? Select all that apply.",
        "options": [
          "That there is a 95% chance the effect is real",
          "That the effect is large",
          "That the finding will replicate",
          "That the estimate is distinguishable from zero in this sample",
          "That a non-significant result elsewhere means no effect"
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explain": "Only the fourth is what significance actually says. The first is the most common misreading: the p-value is computed *assuming* the effect is zero, so it cannot also report the probability that the assumption is false."
      },
      {
        "id": "w02l04q7",
        "concept": "pvalue",
        "type": "mcq",
        "q": "A study of forty firms finds no statistically significant effect of a policy. A newspaper reports that the policy does not work. What is wrong?",
        "options": [
          "Nothing — that is the correct reading",
          "With forty firms, only an enormous effect would be detectable; the honest conclusion is that the study could not tell",
          "The study should have used a lower threshold",
          "Forty firms is enough for any effect"
        ],
        "answer": 1,
        "explain": "Absence of evidence is not evidence of absence. The useful follow-up question, which almost nobody asks, is: how large would an effect have had to be for this study to detect it?"
      },
      {
        "id": "w02l04q8",
        "concept": "sig-vs-size",
        "type": "short",
        "q": "Explain the difference between a statistically significant result and an important one, give a case where a result is significant but unimportant, and give the reverse.",
        "must": [
          {
            "point": "significance means distinguishable from zero, not large",
            "any": [
              "distinguish",
              "from zero",
              "not large",
              "chance",
              "detect",
              "statistical"
            ]
          },
          {
            "point": "importance means big enough to change a decision",
            "any": [
              "important",
              "matter",
              "decision",
              "act",
              "big enough",
              "practical",
              "worth"
            ]
          },
          {
            "point": "large samples make tiny effects significant",
            "any": [
              "large sample",
              "millions",
              "big data",
              "many observations",
              "tiny",
              "small effect"
            ]
          },
          {
            "point": "gives a concrete significant-but-trivial example",
            "any": [
              "example",
              "0.1",
              "tiny",
              "fraction",
              "negligib",
              "percent",
              "seconds",
              "cents"
            ]
          },
          {
            "point": "small samples can miss important effects",
            "any": [
              "small sample",
              "too small",
              "underpowered",
              "not detect",
              "miss",
              "forty",
              "few"
            ]
          },
          {
            "point": "concludes the two questions must be asked separately",
            "any": [
              "separate",
              "two questions",
              "both",
              "different question",
              "ask both"
            ]
          }
        ],
        "answer": "**Statistical significance** says only that the estimate is distinguishable from zero — that chance alone would rarely produce a result this large if the true effect were nothing. **Importance** asks whether the effect is big enough to change a decision, and no statistical test answers it. **Significant but unimportant:** with several million observations, a study might establish beyond doubt that a website change raises average order value by two cents — real, precisely estimated, and not worth the cost of implementing. Large samples make almost any difference significant, so the modern flood of data has made this the more common error. **Important but not significant:** a trial of forty firms might find that a support programme raised turnover by 15% with a wide interval that includes zero. Reported as 'no effect found', when the correct reading is that the study was far too small to detect even a large effect, and the finding is suggestive and deserves more data rather than dismissal. The practical conclusion is that the two questions must be asked separately, every time: **is it distinguishable from zero, and is it big enough to matter?**",
        "explain": "If you remember one thing from this lecture, make it this. The everyday meaning of 'significant' is nearly the opposite of the statistical one, and the confusion is exploited constantly, sometimes deliberately."
      },
      {
        "id": "w02l04q9",
        "concept": "rsq",
        "type": "mcq",
        "q": "A model predicting tomorrow's temperature from today's has an R-squared of 0.95. What does that establish about causation?",
        "options": [
          "That today's temperature causes tomorrow's",
          "Nothing — R-squared is about prediction, not about why",
          "That the model is correctly specified",
          "That the coefficient is significant"
        ],
        "answer": 1,
        "explain": "Excellent prediction, no explanation. R-squared measures how much variation the model accounts for and is entirely silent about the causal structure behind it — which is what makes a well-fitting model such a convenient place to hide a bad identification argument."
      },
      {
        "id": "w02l04q10",
        "concept": "rsq",
        "type": "multi",
        "q": "Which of these are true of R-squared? Select all that apply.",
        "options": [
          "A low R-squared can accompany a real and important effect",
          "Adding variables, even meaningless ones, raises it",
          "A high R-squared indicates a causal relationship",
          "It measures how much of the outcome's variation the model accounts for",
          "It tells you whether the coefficient matters"
        ],
        "answer": [
          0,
          1,
          3
        ],
        "explain": "Individual behaviour is enormously variable, so a model of personal earnings can account for a modest share and still identify a real effect of education. The coefficient, read in its units, is what tells you whether something matters."
      },
      {
        "id": "w02l04q11",
        "concept": "coefficient",
        "type": "mcq",
        "q": "What does 'holding the other variables fixed' actually hold fixed?",
        "options": [
          "Everything that could affect the outcome",
          "Only the variables included in the model",
          "All observable characteristics",
          "Nothing — it is a figure of speech"
        ],
        "answer": 1,
        "explain": "Only what is in the model. Everything omitted is free to vary, which is exactly lecture 2.2's warning in the language of a regression table — and why a long control list is effort rather than identification."
      },
      {
        "id": "w02l04q12",
        "concept": "sig-vs-size",
        "type": "short",
        "q": "You are handed a result: coefficient 0.08 on years of schooling in a log-earnings regression, standard error 0.02, from a study using a credible instrument. Write the four sentences you are entitled to say.",
        "must": [
          {
            "point": "the estimate, with units and the holding-fixed clause",
            "any": [
              "8%",
              "eight percent",
              "extra year",
              "associated",
              "holding",
              "controlling"
            ]
          },
          {
            "point": "the uncertainty, as a range from the standard error",
            "any": [
              "4%",
              "12%",
              "0.04",
              "0.12",
              "range",
              "interval",
              "consistent with"
            ]
          },
          {
            "point": "the design condition under which it is causal",
            "any": [
              "causal if",
              "instrument",
              "assumption",
              "holds",
              "identification",
              "valid",
              "no other route"
            ]
          },
          {
            "point": "the importance, in terms a decision-maker would use",
            "any": [
              "large",
              "compound",
              "three years",
              "quarter",
              "matters",
              "worth",
              "substantial"
            ]
          },
          {
            "point": "does not claim proof from a single study",
            "any": [
              "not proof",
              "single study",
              "does not prove",
              "one study",
              "raises confidence",
              "settle"
            ]
          }
        ],
        "answer": "**One, the estimate:** an extra year of schooling is associated with about **8% higher earnings**, among people alike on the other variables included in the model. **Two, the uncertainty:** with a standard error of 0.02 the data is broadly consistent with anything from roughly **4% to 12%** per year, so the point estimate should not be quoted alone. **Three, the design:** this is a *causal* estimate only if the instrument is valid — in particular if it has no route to earnings other than through schooling — and that condition is argued rather than tested, so the causal reading is conditional on it. **Four, the importance:** an 8% return per year is large in practical terms; three additional years compound to roughly a quarter more pay, which is easily enough to change an individual's decision or a government's budget. What I may **not** say is that this proves anything: a single well-identified study raises confidence in a claim and does not settle it, which is the subject of the next lecture.",
        "explain": "This four-sentence template is worth keeping. It is also how to write up your own results, and it makes over-claiming visibly difficult."
      }
    ]
  },
  "w02l05": {
    "standfirst": "In 2010 two of the world's most respected economists published a finding that public debt above 90% of national income goes with negative growth. It was quoted by finance ministers across Europe to justify austerity. In 2013 a graduate student asked for the spreadsheet. What he found is the reason this lecture exists.",
    "thread": {
      "from": "2.2 to 2.4 built the machinery for producing and reading a credible empirical result.",
      "adds": "What happens to such results afterwards — whether they replicate, which ones get published, and how confidently you should hold any single finding.",
      "toward": "Every empirical claim in the remaining fourteen weeks. This lecture is the calibration dial for all of them."
    },
    "objectives": [
      "Describe what replication means and why it is not routine.",
      "Explain how three specific errors changed a famous result from −0.1% to +2.2%.",
      "Define publication bias and say why it distorts a whole literature rather than one paper.",
      "Explain researcher degrees of freedom and how they produce significance without dishonesty.",
      "Name the reforms the profession adopted and what each fixes.",
      "Hold an economic claim at a confidence proportional to the evidence, without collapsing into 'nobody knows anything'."
    ],
    "concepts": [
      {
        "id": "replication",
        "name": "Replication and why it is rare"
      },
      {
        "id": "rr-case",
        "name": "A famous result, corrected"
      },
      {
        "id": "pub-bias",
        "name": "Publication bias"
      },
      {
        "id": "degrees-freedom",
        "name": "Researcher degrees of freedom"
      },
      {
        "id": "reforms",
        "name": "What the profession changed"
      },
      {
        "id": "calibration",
        "name": "Holding a claim at the right confidence"
      }
    ],
    "vocab": [
      {
        "word": "replicate",
        "plain": "To repeat a study and see whether the same result comes out.",
        "et": "korrata, reprodutseerida"
      },
      {
        "word": "austerity",
        "plain": "Government policy of cutting spending and raising taxes to reduce debt.",
        "et": "kokkuhoiupoliitika"
      },
      {
        "word": "threshold",
        "plain": "A level at which something is claimed to change sharply.",
        "et": "lävi, künnis"
      },
      {
        "word": "spreadsheet",
        "plain": "The file the calculations were done in.",
        "et": "tabelarvutus"
      },
      {
        "word": "weighting",
        "plain": "Deciding how much each observation counts in an average.",
        "et": "kaalumine"
      },
      {
        "word": "omit",
        "plain": "To leave out.",
        "et": "välja jätma"
      },
      {
        "word": "file drawer",
        "plain": "Where studies that found nothing end up: unpublished and invisible.",
        "et": "sahtel"
      },
      {
        "word": "pre-register",
        "plain": "To state publicly what you will test before you look at the data.",
        "et": "eelregistreerima"
      },
      {
        "word": "robustness",
        "plain": "Whether a result survives reasonable changes to how it was computed.",
        "et": "vastupidavus"
      },
      {
        "word": "calibrate",
        "plain": "To match your confidence to the strength of the evidence.",
        "et": "kalibreerima"
      },
      {
        "word": "consensus",
        "plain": "Broad agreement among people who have studied the question.",
        "et": "üksmeel"
      },
      {
        "word": "audit",
        "plain": "An independent check of someone's work.",
        "et": "audit, kontroll"
      }
    ],
    "tools": [
      {
        "kind": "checklist",
        "name": "The replication questions",
        "answers": "How much weight should this finding carry?",
        "when": "Before acting on any single study. Has anyone reproduced it with the same data? With different data? Are the data and code available? Does the result survive reasonable alternative choices?"
      },
      {
        "kind": "test",
        "name": "The file-drawer question",
        "answers": "What is missing from this literature?",
        "when": "When a body of evidence looks unanimous. Ask how many studies finding nothing would have been published. If the answer is 'few', the published average overstates the effect, and the unanimity is an artefact."
      },
      {
        "kind": "framework",
        "name": "Confidence calibration",
        "answers": "How firmly should I hold this?",
        "when": "Continuously. One study is a hypothesis; several independent designs agreeing is a finding; a result that survives adversarial replication is knowledge. Say which you have."
      }
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "The study nobody had checked",
        "say": "The study nobody had checked."
      },
      {
        "t": "p",
        "text": "Science is supposed to be self-correcting through replication: someone else repeats the work and sees whether the same answer appears. In economics, until recently, this happened rarely. There was no career reward for it, journals did not want it, and the data and code were often not available to try.",
        "say": "Science is supposed to be self-correcting through replication. Somebody else repeats the work and sees whether the same answer appears. In economics, until recently, that happened rarely. There was no career reward for it, journals didn't want it, and the data and code were often not available to try."
      },
      {
        "t": "p",
        "text": "So results entered the world, were cited, shaped policy, and were almost never independently checked. What follows is what happened when one of the most influential results of its decade finally was.",
        "say": "So results entered the world, were cited, shaped policy, and were almost never independently checked. What follows is what happened when one of the most influential results of its decade finally was."
      },
      {
        "t": "case",
        "title": "Growth in a Time of Debt, and the spreadsheet",
        "ps": [
          "In 2010 Carmen Reinhart and Kenneth Rogoff — both Harvard economists of the first rank, and authors of a celebrated history of financial crises — published a short paper examining public debt and economic growth across many countries and many decades. Its headline finding was stark: in country-years where public debt exceeded **90% of GDP**, average real growth was **−0.1%**. Below that threshold, growth was clearly positive.",
          "The timing could not have been more consequential. Europe was in a debt crisis and governments were choosing between cutting deficits fast and supporting demand. A specific number attached to a specific threshold is unusually powerful in political argument, and the 90% figure was quoted repeatedly by ministers and commissioners as evidence for austerity.",
          "In 2013 **Thomas Herndon**, a graduate student at the University of Massachusetts Amherst, was set the exercise of replicating a published paper. He chose this one, and could not reproduce the result. After some correspondence, Reinhart and Rogoff did something to their credit and not universal in the profession: they sent him the actual spreadsheet.",
          "Herndon, with his supervisors **Michael Ash** and **Robert Pollin**, found three problems. **A coding error**: the spreadsheet formula averaged only a subset of the rows, omitting several countries. **Selective exclusion**: some available country-years were left out of the analysis. **Unconventional weighting**: each country counted equally regardless of how many years it contributed, so one country's single bad year could weigh as heavily as another's two decades.",
          "Correct all three and the headline changes completely. Average growth in the above-90% group is not **−0.1%** but **+2.2%** — lower than in less indebted groups, but positive, gradual, and with no cliff at 90%. The threshold, which was the whole political force of the paper, dissolved.",
          "Be careful about what this does and does not show. It does **not** show that debt is harmless, and a negative association between high debt and growth survives in much of the literature. What it shows is that the **specific dramatic claim** — a threshold at 90%, beyond which growth turns negative — was an artefact of three defensible-looking choices in a spreadsheet nobody outside the authors had ever seen.",
          "Two further honest points. First, the direction of causation was never established even in the original: slow growth raises debt ratios at least as readily as debt slows growth, which is lecture 2.2's reverse-causality problem sitting in plain sight in a paper that shaped a continent's policy. Second, Reinhart and Rogoff acknowledged the coding error while defending their broader conclusions, and the substantive debate about debt and growth continues. The lesson here is not that these two economists were careless. It is that **nobody checked for three years**, while the number was doing enormous work."
        ],
        "say": "In twenty ten Carmen Reinhart and Kenneth Rogoff — both Harvard economists of the first rank, and authors of a celebrated history of financial crises — published a short paper examining public debt and economic growth across many countries and many decades. And its headline finding was stark. In country-years where public debt exceeded ninety percent of GDP, average real growth was minus nought point one percent. Below that threshold, growth was clearly positive. The timing could not have been more consequential. Europe was in a debt crisis, and governments were choosing between cutting deficits fast and supporting demand. A specific number attached to a specific threshold is unusually powerful in political argument, and the ninety percent figure was quoted repeatedly by ministers and commissioners as evidence for austerity. Then in twenty thirteen Thomas Herndon, a graduate student at the University of Massachusetts Amherst, was set the exercise of replicating a published paper. He chose this one, and he couldn't reproduce the result. After some correspondence, Reinhart and Rogoff did something to their credit and not universal in the profession. They sent him the actual spreadsheet. Herndon, with his supervisors Michael Ash and Robert Pollin, found three problems. A coding error: the spreadsheet formula averaged only a subset of the rows, omitting several countries. Selective exclusion: some available country-years were left out of the analysis. And unconventional weighting: each country counted equally regardless of how many years it contributed, so one country's single bad year could weigh as heavily as another's two decades. Correct all three, and the headline changes completely. Average growth in the above-ninety group is not minus nought point one percent. It's plus two point two. Lower than in less indebted groups, but positive, gradual, and with no cliff at ninety. The threshold, which was the entire political force of the paper, dissolved. Now be careful about what that does and doesn't show. It does not show that debt is harmless, and a negative association between high debt and growth survives in much of the literature. What it shows is that the specific dramatic claim — a threshold at ninety percent, beyond which growth turns negative — was an artefact of three defensible-looking choices in a spreadsheet nobody outside the authors had ever seen. Two further honest points. The direction of causation was never established even in the original. Slow growth raises debt ratios at least as readily as debt slows growth, which is last-week's reverse-causality problem sitting in plain sight in a paper that shaped a continent's policy. And Reinhart and Rogoff acknowledged the coding error while defending their broader conclusions, and the substantive debate continues. So the lesson isn't that these two economists were careless. It's that nobody checked for three years, while the number was doing enormous work."
      },
      {
        "t": "h2",
        "text": "Publication bias",
        "say": "Publication bias."
      },
      {
        "t": "p",
        "text": "The second problem is larger than any single paper, because it distorts what an entire literature looks like.",
        "say": "The second problem is larger than any single paper, because it distorts what an entire literature looks like."
      },
      {
        "t": "write",
        "items": [
          "**Journals have historically preferred results that find something. Studies finding nothing are harder to publish, and often never written up at all.**",
          "The unpublished nulls sit in the **file drawer** — and because they are invisible, the published record looks far more conclusive than the research actually was."
        ],
        "say": "Journals have historically preferred results that find something. Studies finding nothing are harder to publish, and often never written up at all. The unpublished nulls sit in the file drawer. And because they're invisible, the published record looks far more conclusive than the research actually was."
      },
      {
        "t": "p",
        "text": "Work on it. Suppose twenty teams independently test a treatment that truly has no effect. By chance, about one will produce a significant result at the conventional 5% threshold. If that one is published and the nineteen are not, the literature contains a single striking finding and no contradiction — and a reader doing everything right concludes that the effect is real.",
        "say": "Work it through. Suppose twenty teams independently test a treatment that truly has no effect. By chance, about one will produce a significant result at the conventional five percent threshold. If that one gets published and the nineteen don't, the literature contains a single striking finding and no contradiction. And a reader doing everything right concludes the effect is real."
      },
      {
        "t": "p",
        "text": "This is not a hypothetical. Across several fields, studies checking the distribution of published results have found a conspicuous bunching of findings **just past** the significance threshold and a shortage just short of it — a pattern that no honest data-generating process produces, and a strong signature of selection on the way to publication.",
        "say": "And this isn't hypothetical. Across several fields, studies checking the distribution of published results have found a conspicuous bunching of findings just past the significance threshold, and a shortage just short of it. A pattern no honest data-generating process produces, and a strong signature of selection on the way to publication."
      },
      {
        "t": "h2",
        "text": "Researcher degrees of freedom",
        "say": "Researcher degrees of freedom."
      },
      {
        "t": "p",
        "text": "The third problem is the subtlest, and the one that does not require anybody to behave badly.",
        "say": "The third problem is the subtlest, and the one that doesn't require anybody to behave badly."
      },
      {
        "t": "p",
        "text": "Between a dataset and a published result lie dozens of defensible choices: which years, which countries, which outliers to drop, which controls to include, which functional form, which of several sensible outcome measures. Each is arguable. Together they define a large space of possible answers, and it is entirely possible to walk through that space honestly — trying things, keeping what looks sensible — and arrive at a significant result that would not survive a different route.",
        "say": "Between a dataset and a published result lie dozens of defensible choices. Which years. Which countries. Which outliers to drop. Which controls to include. Which functional form. Which of several sensible outcome measures. Each one is arguable. Together they define a large space of possible answers. And it's entirely possible to walk through that space honestly — trying things, keeping what looks sensible — and arrive at a significant result that wouldn't survive a different route."
      },
      {
        "t": "p",
        "text": "The term for the space is **researcher degrees of freedom**, and the reason it is so dangerous is that no individual step feels like cheating. Dropping an obviously anomalous observation is good practice. Adding a control that clearly belongs is good practice. The problem is that the decisions were taken **after seeing what they did to the result**, and once that is true the reported p-value no longer means what it claims.",
        "say": "The term for that space is researcher degrees of freedom. And the reason it's so dangerous is that no individual step feels like cheating. Dropping an obviously anomalous observation is good practice. Adding a control that clearly belongs is good practice. The problem is that the decisions were taken after seeing what they did to the result. And once that's true, the reported p-value no longer means what it claims."
      },
      {
        "t": "p",
        "text": "Reinhart and Rogoff's weighting choice is a mild example: it is arguable, it was not signalled, and it mattered enormously to the answer.",
        "say": "Reinhart and Rogoff's weighting choice is a mild example. It's arguable, it wasn't signalled, and it mattered enormously to the answer."
      },
      {
        "t": "h2",
        "text": "What the profession changed",
        "say": "So what did the profession change?"
      },
      {
        "t": "table",
        "head": [
          "Reform",
          "What it does",
          "Which problem it addresses"
        ],
        "rows": [
          [
            "**Data and code archives**",
            "Journals require the materials to reproduce every published result",
            "Makes checking possible at all — Herndon needed three years and a personal request"
          ],
          [
            "**Pre-registration**",
            "Researchers state the hypothesis and analysis before seeing the data",
            "Removes researcher degrees of freedom by fixing choices in advance"
          ],
          [
            "**Registered reports**",
            "Journals accept a study on its design, before the results exist",
            "Removes publication bias: the null gets published because publication was already agreed"
          ],
          [
            "**Replication policies and journals**",
            "Space and credit for checking others' work",
            "Makes replication a career-compatible activity rather than an unrewarded favour"
          ],
          [
            "**Reporting intervals, not stars**",
            "Emphasis on effect sizes and confidence intervals",
            "Reduces the pull of the 0.05 threshold"
          ]
        ],
        "say": "Data and code archives: journals now require the materials to reproduce every published result. That makes checking possible at all — remember Herndon needed three years and a personal request. Pre-registration: researchers state the hypothesis and analysis before seeing the data, which removes researcher degrees of freedom by fixing the choices in advance. Registered reports: journals accept a study on its design, before the results exist, which removes publication bias because the null gets published too. Replication policies and journals, which make checking a career-compatible activity. And reporting intervals rather than stars, which reduces the pull of the nought point oh five threshold."
      },
      {
        "t": "p",
        "text": "These are real changes and they are unevenly adopted. Pre-registration is now normal for randomised trials and rare for work on existing data, which is most of economics. Data archives are common at the best journals and patchy elsewhere. The situation is better than it was in 2010 and it is not solved.",
        "say": "Those are real changes and they're unevenly adopted. Pre-registration is now normal for randomised trials and rare for work on existing data, which is most of economics. Data archives are common at the best journals and patchy elsewhere. The situation is better than it was in twenty ten, and it isn't solved."
      },
      {
        "t": "h3",
        "text": "Two literatures, side by side",
        "say": "Let me put two literatures side by side."
      },
      {
        "t": "p",
        "text": "Confidence calibration sounds abstract until you apply it to two real bodies of evidence at once.",
        "say": "Confidence calibration sounds abstract until you apply it to two real bodies of evidence at once."
      },
      {
        "t": "table",
        "head": [
          "",
          "Minimum wage and employment",
          "Debt above 90% and negative growth"
        ],
        "rows": [
          [
            "Number of studies",
            "Hundreds, over thirty years",
            "One influential paper, widely quoted"
          ],
          [
            "Designs used",
            "Many — border comparisons, policy changes, administrative data, several countries",
            "One — cross-country averages"
          ],
          [
            "Independently checked?",
            "Yes, adversarially, by people who disagreed",
            "Not for three years"
          ],
          [
            "Data and code available?",
            "Increasingly, and the disputes are conducted in public",
            "Not until requested personally"
          ],
          [
            "Causal direction established?",
            "Largely, through the designs in 2.3",
            "No — reverse causality left open"
          ],
          [
            "**Where it sits on the ladder**",
            "**Level three to four** — different designs broadly agreeing, having survived hostile scrutiny",
            "**Level one** — a single study, and it did not survive"
          ]
        ],
        "say": "Minimum wage and employment: hundreds of studies, over thirty years, using many different designs — border comparisons, policy changes, administrative data, several countries. Independently checked, adversarially, by people who disagreed. Data and code increasingly available, and the disputes conducted in public. Causal direction largely established through the designs from last lecture. Now debt above ninety percent and negative growth: one influential paper, widely quoted. One design — cross-country averages. Not independently checked for three years. Data not available until requested personally. And causal direction left open."
      },
      {
        "t": "p",
        "text": "Both were quoted by politicians as established fact in the same decade. The difference between them was not visible from the confidence of the quoting — it was visible only from the questions in this lecture, and each of those questions could have been asked by a non-economist in about ten minutes.",
        "say": "Both of those were quoted by politicians as established fact in the same decade. And the difference between them was not visible from the confidence of the quoting. It was visible only from the questions in this lecture. Every one of which a non-economist could have asked in about ten minutes."
      },
      {
        "t": "p",
        "text": "That is the practical payoff of week 2, and it is why the week exists before any of the economics proper. You are not going to run these studies. You are going to be handed their conclusions, for the rest of your life, by people with an interest in what you do with them.",
        "say": "That's the practical payoff of week two, and it's why the week exists before any of the economics proper. You're not going to run these studies. You're going to be handed their conclusions, for the rest of your life, by people with an interest in what you do with them."
      },
      {
        "t": "h2",
        "text": "How firmly to hold a claim",
        "say": "So how firmly should you hold a claim?"
      },
      {
        "t": "p",
        "text": "The risk of a lecture like this is that it produces a shrug: if findings can be wrong, believe nothing. That conclusion is both lazy and false, and it disarms you exactly where you need to be sharpest. The alternative is to grade confidence deliberately.",
        "say": "The risk of a lecture like this one is that it produces a shrug. If findings can be wrong, believe nothing. That conclusion is both lazy and false, and it disarms you exactly where you need to be sharpest. The alternative is to grade your confidence deliberately."
      },
      {
        "t": "ol",
        "items": [
          "**One study, one dataset, one team.** A hypothesis worth taking seriously. Not a fact. Report it with the word *suggests*.",
          "**Several studies, same design, same kind of data.** Stronger, and still exposed to a shared blind spot — if every study uses the same flawed comparison, agreement means nothing.",
          "**Several studies, different designs, different data, agreeing.** Now you have a finding. Different designs fail in different ways, so agreement across them is evidence in a way agreement within one design is not.",
          "**A result that has survived deliberate attempts to break it.** Somebody with an incentive to find it wrong tried, and failed. This is as good as empirical economics gets, and it is what the minimum-wage literature approached through thirty years of argument."
        ],
        "say": "One study, one dataset, one team: a hypothesis worth taking seriously. Not a fact. Report it with the word suggests. Several studies, same design, same kind of data: stronger, and still exposed to a shared blind spot — if every study uses the same flawed comparison, agreement means nothing. Several studies, different designs, different data, agreeing: now you have a finding, because different designs fail in different ways. And a result that has survived deliberate attempts to break it — somebody with an incentive to find it wrong tried, and failed. That's as good as empirical economics gets."
      },
      {
        "t": "p",
        "text": "And the things worth saying out loud when you report anything: which level you are at, what would change your mind, and what the strongest contrary evidence is. That is not hedging. It is the difference between telling somebody what is known and telling them what you would like to be true.",
        "say": "And there are things worth saying out loud whenever you report anything. Which level you're at. What would change your mind. And what the strongest contrary evidence is. That isn't hedging. It's the difference between telling somebody what's known, and telling them what you'd like to be true."
      },
      {
        "t": "warn",
        "title": "What this lecture is not saying",
        "ps": [
          "It is not saying economics knows nothing. Plenty is well established: demand curves slope down, comparative advantage raises total output, hyperinflation is caused by monetary expansion, and the effects of trade adjustment are concentrated and long-lasting. These survived hostile scrutiny.",
          "It is also not saying that a corrected result means the authors were dishonest. Every finding in this course could in principle be revised, and the appropriate response is calibrated confidence, not cynicism.",
          "Cynicism is comfortable because it requires no work. Calibration requires you to hold different claims at different strengths and to update when evidence arrives, which is harder and is the entire point of week 2."
        ],
        "say": "Now let me be clear about what this lecture is not saying. It is not saying economics knows nothing. Plenty is well established. Demand curves slope down. Comparative advantage raises total output. Hyperinflation is caused by monetary expansion. The effects of trade adjustment are concentrated and long-lasting. Those survived hostile scrutiny. It's also not saying that a corrected result means the authors were dishonest. Every finding in this course could in principle be revised, and the appropriate response is calibrated confidence, not cynicism. Cynicism is comfortable because it requires no work. Calibration requires you to hold different claims at different strengths, and to update when evidence arrives. Which is harder, and it's the entire point of this week."
      },
      {
        "t": "h2",
        "text": "What you should be able to do now",
        "say": "So what can you do now?"
      },
      {
        "t": "ul",
        "items": [
          "Say what replication is and why economics did so little of it.",
          "Describe the three errors in the debt-and-growth paper and what correcting them did.",
          "Explain publication bias with the twenty-teams example.",
          "Explain researcher degrees of freedom without accusing anyone of dishonesty.",
          "Name four reforms and say which problem each addresses.",
          "Place any claim on the four-level confidence ladder, and report it accordingly."
        ],
        "say": "Say what replication is, and why economics did so little of it. Describe the three errors in the debt-and-growth paper, and what correcting them did. Explain publication bias with the twenty-teams example. Explain researcher degrees of freedom without accusing anybody of dishonesty. Name four reforms and say which problem each one addresses. And place any claim on the four-level confidence ladder."
      }
    ],
    "exercises": [
      {
        "task": "**Try a replication.** Find a published paper with its data posted, download it, and try to reproduce one number from the results table. Write how long it took and what you could not reproduce.",
        "hint": "The American Economic Association and many central banks post replication packages. Even failing quickly is instructive — you will learn how much of a published result is not actually documented."
      },
      {
        "task": "**Look for the file drawer.** Take a claim that appears unanimous in popular coverage. Search for studies that found nothing, and note how much harder they are to find.",
        "hint": "Meta-analyses and systematic reviews often discuss publication bias explicitly and sometimes estimate its size. That discussion is usually the most informative part of the paper."
      },
      {
        "task": "**Map the degrees of freedom.** Take one empirical claim and list every defensible choice the researchers had to make. Then ask which ones could plausibly have changed the answer.",
        "hint": "Sample period, country set, outlier handling, controls, functional form, and the definition of the outcome. Five binary choices already give thirty-two possible analyses."
      },
      {
        "task": "**Place three claims on the ladder.** Take three economic claims you believe and assign each to one of the four confidence levels, with your reason. Then write what would move each one down a level.",
        "hint": "Do this with claims you like. Assigning a low level to something you want to be true is the actual exercise; the rest is bookkeeping."
      }
    ],
    "reading": [
      {
        "author": "Thomas Herndon, Michael Ash and Robert Pollin",
        "work": "Does High Public Debt Consistently Stifle Economic Growth? A Critique of Reinhart and Rogoff",
        "where": "Political Economy Research Institute, UMass Amherst",
        "year": 2013,
        "note": "The replication itself, free online. Short, readable, and a model of how to do this carefully rather than triumphantly."
      },
      {
        "author": "Carmen Reinhart and Kenneth Rogoff",
        "work": "Growth in a Time of Debt",
        "where": "American Economic Review Papers and Proceedings",
        "year": 2010,
        "note": "The original. Read it and notice how modest the paper's own claims are compared with what was made of them in political argument."
      },
      {
        "author": "Brian Nosek and colleagues",
        "work": "The preregistration revolution",
        "where": "PNAS",
        "year": 2018,
        "note": "The case for pre-registration across the social sciences, by the people who built the infrastructure for it."
      },
      {
        "author": "Abel Brodeur and colleagues",
        "work": "Star Wars: The Empirics Strike Back",
        "where": "American Economic Journal: Applied Economics",
        "year": 2016,
        "note": "Measures the bunching of published results just past the significance threshold in economics journals. The evidence behind this lecture's publication-bias section."
      }
    ],
    "glossary": [
      {
        "term": "Replication",
        "def": "Repeating a study — with the same data, or with new data — to see whether the result holds. Historically rare in economics."
      },
      {
        "term": "Publication bias",
        "def": "The tendency for findings to be published and null results not, which makes a literature look more conclusive than the research was."
      },
      {
        "term": "File drawer",
        "def": "The unpublished studies that found nothing. Invisible, and therefore excluded from any reader's impression of the evidence."
      },
      {
        "term": "Researcher degrees of freedom",
        "def": "The many defensible analytical choices between data and result. Choosing among them after seeing their effect invalidates the reported p-value, without anyone being dishonest."
      },
      {
        "term": "Pre-registration",
        "def": "Publicly stating the hypothesis and analysis before seeing the data, which fixes the choices in advance."
      },
      {
        "term": "Registered report",
        "def": "A paper accepted on the basis of its design before results exist, so the null gets published too."
      },
      {
        "term": "Robustness check",
        "def": "Showing that a result survives reasonable alternative choices of sample, controls and specification."
      },
      {
        "term": "Confidence calibration",
        "def": "Holding a claim at a strength proportional to the evidence behind it, and updating when evidence changes."
      }
    ],
    "quiz": [
      {
        "id": "w02l05q1",
        "concept": "replication",
        "type": "mcq",
        "q": "Why was replication historically rare in economics?",
        "options": [
          "It is technically impossible",
          "No career reward, journals not interested, and data and code often unavailable",
          "Results were usually obviously correct",
          "It was forbidden by journals"
        ],
        "answer": 1,
        "explain": "All three barriers were structural rather than intellectual, which is why the fixes are structural too — archives, credit, and journal policy. Herndon needed a personal request to the authors to obtain a spreadsheet."
      },
      {
        "id": "w02l05q2",
        "concept": "rr-case",
        "type": "mcq",
        "q": "Reinhart and Rogoff reported average growth of −0.1% for country-years with debt above 90% of GDP. What was the corrected figure?",
        "options": [
          "−1.2%",
          "0.0%",
          "+2.2%",
          "+4.5%"
        ],
        "answer": 2,
        "explain": "Positive, and with no cliff at 90%. Growth was still lower than in less indebted groups — the correction removed the dramatic threshold, not the entire association, and saying so is part of reporting it honestly."
      },
      {
        "id": "w02l05q3",
        "concept": "rr-case",
        "type": "multi",
        "q": "Which errors did Herndon, Ash and Pollin identify? Select all that apply.",
        "options": [
          "A spreadsheet formula that averaged only some of the rows",
          "Exclusion of some available country-years",
          "Weighting each country equally regardless of how many years it contributed",
          "Use of nominal rather than real growth",
          "Fabricated data"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": "Three errors, none of them fabrication. The weighting choice is the most instructive: it is arguable rather than wrong, it was not signalled, and it mattered enormously — which is exactly the shape of a researcher degree of freedom."
      },
      {
        "id": "w02l05q4",
        "concept": "rr-case",
        "type": "mcq",
        "q": "Which problem from lecture 2.2 was present in the debt-and-growth finding even before the errors?",
        "options": [
          "Selection bias",
          "Reverse causality — slow growth raises debt ratios at least as readily as debt slows growth",
          "Measurement error in GDP",
          "Publication bias"
        ],
        "answer": 1,
        "explain": "A debt-to-GDP ratio has growth in its denominator, so a recession raises it mechanically. The direction was never established, and the number shaped a continent's fiscal policy regardless — which is why lecture 2.2 comes before this one."
      },
      {
        "id": "w02l05q5",
        "concept": "pub-bias",
        "type": "mcq",
        "q": "Twenty teams independently test a treatment that truly has no effect. About one produces a significant result by chance and is published; the rest are not. What does the literature look like?",
        "options": [
          "Balanced, with one positive and nineteen null results",
          "A single striking finding with no published contradiction",
          "Clearly inconclusive",
          "Nineteen refutations of one paper"
        ],
        "answer": 1,
        "explain": "And a reader doing everything right concludes the effect is real. This is why publication bias is worse than any single bad paper: it corrupts the evidence base a careful reader is relying on."
      },
      {
        "id": "w02l05q6",
        "concept": "pub-bias",
        "type": "mcq",
        "q": "What pattern in published results is treated as a signature of publication bias?",
        "options": [
          "Very large effect sizes",
          "Bunching of results just past the significance threshold, with a shortage just short of it",
          "Small sample sizes",
          "Frequent use of instrumental variables"
        ],
        "answer": 1,
        "explain": "No honest data-generating process produces a gap immediately below the threshold and a pile immediately above it. The pattern has been documented across several fields, economics included."
      },
      {
        "id": "w02l05q7",
        "concept": "degrees-freedom",
        "type": "mcq",
        "q": "Why are researcher degrees of freedom dangerous even when everyone is honest?",
        "options": [
          "Because researchers lack statistical training",
          "Because each individual choice is defensible, but choosing among them after seeing their effect invalidates the reported p-value",
          "Because software produces different answers",
          "Because data is usually incomplete"
        ],
        "answer": 1,
        "explain": "Dropping an anomalous observation and adding a control that belongs are both good practice. The problem is the order: once the choices were made knowing what they did to the result, the p-value no longer means what it claims — and nobody involved did anything they would recognise as cheating."
      },
      {
        "id": "w02l05q8",
        "concept": "reforms",
        "type": "mcq",
        "q": "Which reform specifically addresses publication bias rather than analytical flexibility?",
        "options": [
          "Pre-registration",
          "Registered reports — journals accepting a study on its design before results exist",
          "Data and code archives",
          "Reporting confidence intervals"
        ],
        "answer": 1,
        "explain": "Pre-registration fixes the analysis in advance, which addresses degrees of freedom. Registered reports guarantee publication regardless of the result, which is what empties the file drawer."
      },
      {
        "id": "w02l05q9",
        "concept": "calibration",
        "type": "mcq",
        "q": "Several studies agree, all using the same design and the same kind of data. How much weight does that carry?",
        "options": [
          "Maximum — agreement is agreement",
          "Limited — a shared flaw in the design would produce agreement without truth",
          "None at all",
          "The same as a single study"
        ],
        "answer": 1,
        "explain": "Different designs fail in different ways, which is what makes agreement *across* designs informative. Agreement within one design may be reproducing a common blind spot twenty times."
      },
      {
        "id": "w02l05q10",
        "concept": "calibration",
        "type": "short",
        "q": "A friend concludes from this lecture that economics knows nothing and its findings can be ignored. Answer them.",
        "must": [
          {
            "point": "rejects the conclusion as too strong",
            "any": [
              "too strong",
              "wrong",
              "overstate",
              "does not follow",
              "no",
              "lazy",
              "false"
            ]
          },
          {
            "point": "gives examples of well-established findings",
            "any": [
              "demand",
              "comparative advantage",
              "hyperinflation",
              "trade",
              "established",
              "survive",
              "well supported"
            ]
          },
          {
            "point": "the point is calibration, not rejection",
            "any": [
              "calibrat",
              "confidence",
              "proportional",
              "grade",
              "different strength",
              "how firmly"
            ]
          },
          {
            "point": "distinguishes a single study from a result surviving many designs",
            "any": [
              "single study",
              "one study",
              "different designs",
              "survived",
              "several",
              "ladder",
              "level"
            ]
          },
          {
            "point": "cynicism requires no work and disarms you",
            "any": [
              "cynic",
              "no work",
              "easy",
              "lazy",
              "disarm",
              "useless",
              "still have to decide"
            ]
          },
          {
            "point": "notes that decisions must be made anyway, so the alternative is worse evidence, not none",
            "any": [
              "decide",
              "decision",
              "anyway",
              "alternative",
              "intuition",
              "guess",
              "still act"
            ]
          }
        ],
        "answer": "The conclusion is far too strong, and adopting it would leave them worse off rather than safer. Plenty in economics has survived exactly the hostile scrutiny this lecture describes: demand curves slope down, specialisation according to comparative advantage raises total output, sustained hyperinflation is caused by monetary expansion, and the losses from trade adjustment are concentrated and long-lasting. Those are not fragile findings. What the lecture argues for is **calibration**, not rejection: hold a single study from a single team as a hypothesis worth taking seriously, hold several studies using *different* designs and different data as a finding, and hold a result that has survived deliberate attempts to break it as close to knowledge. The reason cynicism is the wrong response is that it requires no work and answers no question. Decisions about tax, education, wages and debt get made whether or not anyone trusts the evidence — so the realistic alternative to imperfect research is not certainty, it is somebody's intuition, which has no confidence interval, no replication and no data archive at all.",
        "explain": "This is the note week 2 is meant to end on. The point of learning how evidence fails is to use it better, not to stop using it."
      },
      {
        "id": "w02l05q11",
        "concept": "replication",
        "type": "multi",
        "q": "Which questions should you ask before acting on a single study? Select all that apply.",
        "options": [
          "Has anyone reproduced it with the same data?",
          "Has anyone found it with different data?",
          "Are the data and code available?",
          "Does the result survive reasonable alternative choices?",
          "Was it published in a prestigious journal?"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explain": "Prestige is the weakest signal on the list: the debt-and-growth paper appeared in a leading journal, by two of the most respected economists alive, and went unchecked for three years. The other four are about whether anyone could check, and whether anyone did."
      },
      {
        "id": "w02l05q12",
        "concept": "rr-case",
        "type": "short",
        "q": "Explain what the debt-and-growth episode does and does not show, and state the lesson you would take into your own work.",
        "must": [
          {
            "point": "shows the specific 90% threshold claim was an artefact of three choices",
            "any": [
              "threshold",
              "90",
              "artefact",
              "dissolved",
              "specific claim",
              "cliff",
              "not robust"
            ]
          },
          {
            "point": "does not show debt is harmless",
            "any": [
              "not harmless",
              "does not show",
              "still",
              "negative association",
              "lower growth",
              "survives"
            ]
          },
          {
            "point": "does not show the authors were dishonest",
            "any": [
              "not dishonest",
              "honest",
              "acknowledg",
              "careless",
              "mistake",
              "not fraud"
            ]
          },
          {
            "point": "the real failure was that nobody checked for three years",
            "any": [
              "nobody checked",
              "three years",
              "unchecked",
              "no one",
              "not verified",
              "while"
            ]
          },
          {
            "point": "and the number was shaping policy the whole time",
            "any": [
              "policy",
              "austerity",
              "ministers",
              "europe",
              "quoted",
              "decisions",
              "influenc"
            ]
          },
          {
            "point": "lesson: make work checkable and check others' before relying on it",
            "any": [
              "checkable",
              "share",
              "code",
              "data",
              "publish",
              "replicate",
              "check before",
              "verify"
            ]
          }
        ],
        "answer": "It **shows** that the paper's politically powerful claim — a threshold at 90% of GDP, beyond which average growth turns negative — was an artefact of three choices inside a spreadsheet: a formula omitting rows, some available country-years excluded, and a weighting scheme letting one country's single year count as heavily as another's two decades. Corrected, the figure moves from −0.1% to +2.2% and the cliff disappears. It does **not** show that public debt is harmless: a negative association between high debt and growth survives in much of the literature, and saying otherwise would be the same over-claiming in the opposite direction. It also does not show dishonesty — the authors supplied their spreadsheet when asked, acknowledged the coding error, and the broader debate continues. The real failure is structural: **nobody checked for three years**, while finance ministers across Europe quoted the number to justify decisions affecting millions of people. The lesson I would take into my own work is in two parts: make anything I produce checkable by default — data, code, the choices I made and why — and before relying on somebody else's number for a decision that matters, find out whether anyone has actually checked it, because the answer is much more often 'no' than its reputation suggests.",
        "explain": "The second half of that lesson is the practical one. Prestige, citations and journal quality all failed here; only somebody opening the spreadsheet worked."
      }
    ]
  }
};
