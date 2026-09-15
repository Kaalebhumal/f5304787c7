/* The Economics Semester — course map. Metadata only. */
window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA.economics = {
  title: "The Economics Semester",
  subtitle: "A sixteen-week course",
  parts: [
    { id: "I",   name: "Foundations and method",   weeks: [1, 2] },
    { id: "II",  name: "Micro: markets",           weeks: [3, 4, 5, 6] },
    { id: "III", name: "Micro: failure and factors", weeks: [7, 8] },
    { id: "IV",  name: "Macro: measurement and the short run", weeks: [9, 10, 11] },
    { id: "V",   name: "Macro: the long run and the world", weeks: [12, 13, 14] },
    { id: "VI",  name: "Applied and frontier",     weeks: [15, 16] }
  ],
  weeks: [
    { n: 1, title: "What economics is", lessons: [
      { id: "w01l01", title: "Scarcity, choice and opportunity cost", blurb: "The one idea the whole subject is built on: every choice is paid for in the next-best thing you did not do.", mins: 26 },
      { id: "w01l02", title: "The production frontier and the gains from trade", blurb: "Why two parties both get richer by specialising, even when one of them is worse at everything.", mins: 26 },
      { id: "w01l03", title: "Models, assumptions and ceteris paribus", blurb: "Economic models are deliberately false. What that buys you, and when it starts lying to you instead.", mins: 25 },
      { id: "w01l04", title: "Positive and normative", blurb: "Where the economics stops and the politics begins — and how routinely the boundary is smuggled across.", mins: 24 },
      { id: "w01l05", title: "Thinking at the margin", blurb: "The single most useful habit in the subject, and the reason sunk costs should never enter a decision.", mins: 26 }
    ]},
    { n: 2, title: "How economists know things", lessons: [
      { id: "w02l01", title: "The data: what is measured, by whom, how badly", blurb: "Every macro number is an estimate built on conventions. Knowing the conventions is most of the skill.", mins: 25 },
      { id: "w02l02", title: "Correlation, causation and identification", blurb: "The central problem of empirical economics, and why it takes a decade of argument to settle one question.", mins: 27 },
      { id: "w02l03", title: "Natural experiments and randomised trials", blurb: "Difference-in-differences, instrumental variables, regression discontinuity — the credibility revolution.", mins: 27 },
      { id: "w02l04", title: "Reading a regression without being fooled", blurb: "Coefficients, standard errors, significance, R-squared — what each one does and does not entitle you to say.", mins: 26 },
      { id: "w02l05", title: "Replication, publication bias and the limits of evidence", blurb: "Which findings have survived scrutiny, which have not, and how to hold an economic claim at the right confidence.", mins: 25 }
    ]},
    { n: 3, title: "Demand, supply and price", lessons: [
      { id: "w03l01", title: "Demand: the curve and what shifts it", blurb: "Movement along versus shift of — the distinction that decides whether your analysis is right or nonsense.", mins: 25 },
      { id: "w03l02", title: "Supply and the producer's decision", blurb: "Where a supply curve comes from, and why it is really a marginal cost curve in disguise.", mins: 25 },
      { id: "w03l03", title: "Equilibrium, shortages and surpluses", blurb: "How markets clear, what happens when they are stopped from clearing, and price ceilings and floors in practice.", mins: 26 },
      { id: "w03l04", title: "Elasticity", blurb: "Price, income and cross elasticity — computing them, interpreting them, and the revenue rule everyone should know.", mins: 27 },
      { id: "w03l05", title: "Taxes, subsidies and who really pays", blurb: "Tax incidence: the side of the market that writes the cheque is almost never the side that bears the cost.", mins: 27 }
    ]},
    { n: 4, title: "The consumer", lessons: [
      { id: "w04l01", title: "Preferences, utility and indifference curves", blurb: "Representing what people want without ever measuring happiness, and the assumptions that makes necessary.", mins: 26 },
      { id: "w04l02", title: "The budget constraint and optimal choice", blurb: "Where the indifference curve meets the budget line, and what the tangency condition actually tells you.", mins: 26 },
      { id: "w04l03", title: "Income and substitution effects", blurb: "Decomposing a price change into two forces, and the Giffen good that makes the demand curve slope upward.", mins: 27 },
      { id: "w04l04", title: "Where the model breaks: behavioural economics", blurb: "Loss aversion, present bias, framing, mental accounting — and what survives of the rational-choice core.", mins: 27 },
      { id: "w04l05", title: "Risk, uncertainty and expected utility", blurb: "Insurance, gambling, diminishing marginal utility of wealth, and Knight's distinction between risk and uncertainty.", mins: 26 }
    ]},
    { n: 5, title: "The firm", lessons: [
      { id: "w05l01", title: "Production and returns to scale", blurb: "Inputs to outputs: the production function, diminishing marginal returns, and what scale really means.", mins: 25 },
      { id: "w05l02", title: "Costs: fixed, variable, marginal, average — and sunk", blurb: "The six cost curves, how they relate geometrically, and the one that must never enter a decision.", mins: 27 },
      { id: "w05l03", title: "Profit maximisation and the shutdown rule", blurb: "Why MR = MC, when to keep producing at a loss, and the difference between accounting and economic profit.", mins: 26 },
      { id: "w05l04", title: "Perfect competition, short run and long", blurb: "The benchmark model: price-taking, zero long-run profit, and why it matters even though it never quite exists.", mins: 26 },
      { id: "w05l05", title: "Economies of scale, scope and learning", blurb: "Three different reasons costs fall with size, frequently confused, with very different strategic consequences.", mins: 25 }
    ]},
    { n: 6, title: "Market power", lessons: [
      { id: "w06l01", title: "Monopoly", blurb: "Pricing with market power, the deadweight loss triangle, and the sources of durable monopoly.", mins: 27 },
      { id: "w06l02", title: "Price discrimination in three degrees", blurb: "Charging different people different prices for the same thing: when it is possible, profitable, and legal.", mins: 26 },
      { id: "w06l03", title: "Oligopoly and game theory", blurb: "Nash equilibrium, the prisoner's dilemma, Cournot and Bertrand, and why cartels are unstable from the inside.", mins: 28 },
      { id: "w06l04", title: "Monopolistic competition", blurb: "Many firms, differentiated products, free entry — the model that describes most of the economy you live in.", mins: 25 },
      { id: "w06l05", title: "Competition policy and regulation", blurb: "Merger control, abuse of dominance, natural monopoly and price regulation — economics inside the law.", mins: 26 }
    ]},
    { n: 7, title: "When markets fail", lessons: [
      { id: "w07l01", title: "Externalities and the Coase theorem", blurb: "Costs and benefits that miss the price system, Pigouvian taxes, and the conditions under which bargaining fixes it.", mins: 27 },
      { id: "w07l02", title: "Public goods and free riding", blurb: "Non-rival, non-excludable, and therefore chronically undersupplied. Why lighthouses are the wrong example.", mins: 25 },
      { id: "w07l03", title: "Asymmetric information", blurb: "Adverse selection and moral hazard: the lemons market, insurance, credit rationing, and the signalling response.", mins: 27 },
      { id: "w07l04", title: "Common-pool resources", blurb: "The tragedy of the commons, and Ostrom's evidence that communities solve it more often than the theory predicts.", mins: 26 },
      { id: "w07l05", title: "Government failure", blurb: "The other half of the argument: information problems, capture, rent-seeking and unintended consequences.", mins: 26 }
    ]},
    { n: 8, title: "Factor markets and distribution", lessons: [
      { id: "w08l01", title: "Labour supply, demand and the wage", blurb: "Where a wage comes from in theory, the labour-leisure trade-off, and the backward-bending supply curve.", mins: 26 },
      { id: "w08l02", title: "Human capital, signalling and the return to education", blurb: "Does education make you productive or merely reveal that you were? The evidence, and why it is hard to get.", mins: 27 },
      { id: "w08l03", title: "Unions, minimum wages and monopsony", blurb: "The empirical fight that changed the field: why a minimum wage need not cost jobs, and when it does.", mins: 27 },
      { id: "w08l04", title: "Capital, interest and the time value of money", blurb: "Discounting, present value, the interest rate as a price of time, and how to appraise an investment properly.", mins: 27 },
      { id: "w08l05", title: "Inequality", blurb: "Measuring it — Gini, percentile shares, mobility — the drivers behind it, and the efficiency-equity trade-off.", mins: 27 }
    ]},
    { n: 9, title: "Measuring the economy", lessons: [
      { id: "w09l01", title: "GDP: what it counts and what it misses", blurb: "Three ways to compute the same number, why they agree, and the large parts of life deliberately excluded.", mins: 27 },
      { id: "w09l02", title: "Inflation and price indices", blurb: "Building a price index, substitution and quality bias, core versus headline, and why the number is contestable.", mins: 26 },
      { id: "w09l03", title: "Unemployment and the labour statistics", blurb: "Who counts as unemployed, participation rates, underemployment, and the several definitions in daily use.", mins: 26 },
      { id: "w09l04", title: "The national accounts identity", blurb: "Y = C + I + G + (X − M), the balance of payments, and what an identity can and cannot prove.", mins: 26 },
      { id: "w09l05", title: "Real versus nominal", blurb: "The distinction that trips up more public argument than any other, applied to GDP, wages, interest and debt.", mins: 25 }
    ]},
    { n: 10, title: "Output, money and prices", lessons: [
      { id: "w10l01", title: "Aggregate demand and aggregate supply", blurb: "The workhorse diagram of short-run macro, its three supply regimes, and how to use it on a real shock.", mins: 27 },
      { id: "w10l02", title: "The multiplier and the circular flow", blurb: "Why a euro of spending raises output by more than a euro, and the leakages that limit it.", mins: 26 },
      { id: "w10l03", title: "What money is and how banks create it", blurb: "Money as a social technology, the monetary aggregates, and the loans-create-deposits account of bank money.", mins: 27 },
      { id: "w10l04", title: "Inflation: the quantity theory and the modern view", blurb: "MV = PY, its limits, cost-push versus demand-pull, expectations, and why inflation is always contested.", mins: 27 },
      { id: "w10l05", title: "Interest rates and the transmission mechanism", blurb: "The policy rate, the yield curve, and the several channels through which a rate change reaches the real economy.", mins: 27 }
    ]},
    { n: 11, title: "Policy", lessons: [
      { id: "w11l01", title: "Fiscal policy", blurb: "Automatic stabilisers, discretionary stimulus, crowding out, and the evidence on multipliers.", mins: 27 },
      { id: "w11l02", title: "Monetary policy: targets, tools, independence", blurb: "Inflation targeting, the operating framework, and the case for taking the printing press away from politicians.", mins: 27 },
      { id: "w11l03", title: "The Phillips curve and the expectations revolution", blurb: "The trade-off that broke, Friedman and Phelps, and what the natural rate hypothesis did to macroeconomics.", mins: 27 },
      { id: "w11l04", title: "Rules, discretion and credibility", blurb: "Time inconsistency, the Taylor rule, forward guidance, and why a central bank's words are a policy instrument.", mins: 26 },
      { id: "w11l05", title: "The zero lower bound and unconventional policy", blurb: "Quantitative easing, negative rates, liquidity traps — what was tried after 2008 and what the evidence shows.", mins: 27 }
    ]},
    { n: 12, title: "Growth", lessons: [
      { id: "w12l01", title: "The facts of economic growth", blurb: "Compounding, the Great Divergence, and the handful of stylised facts any growth theory has to explain.", mins: 26 },
      { id: "w12l02", title: "The Solow model", blurb: "Capital accumulation, diminishing returns, the steady state, and the conclusion that saving cannot make you grow forever.", mins: 28 },
      { id: "w12l03", title: "Technology, ideas and endogenous growth", blurb: "Ideas as non-rival goods, increasing returns, R&D, and why growth theory had to be rebuilt in the 1980s.", mins: 27 },
      { id: "w12l04", title: "Institutions and why nations differ", blurb: "Property rights, rule of law, inclusive versus extractive institutions, and the causal identification problem.", mins: 27 },
      { id: "w12l05", title: "Convergence, catch-up and the middle-income trap", blurb: "Why poor countries should grow faster, why many do not, and what the successful catch-up cases had in common.", mins: 26 }
    ]},
    { n: 13, title: "The open economy", lessons: [
      { id: "w13l01", title: "Comparative advantage", blurb: "Ricardo's argument, still the most counter-intuitive result in the subject, and its modern qualifications.", mins: 27 },
      { id: "w13l02", title: "Tariffs, quotas and the politics of protection", blurb: "The welfare arithmetic of a tariff, concentrated benefits against diffuse costs, and the infant-industry case.", mins: 27 },
      { id: "w13l03", title: "Exchange rates", blurb: "Nominal and real, purchasing power parity, interest parity, and why the short run refuses to obey either.", mins: 27 },
      { id: "w13l04", title: "Capital flows, current accounts and crises", blurb: "Sudden stops, original sin, reserve accumulation, and the trilemma of open-economy policy.", mins: 27 },
      { id: "w13l05", title: "Monetary unions: the euro as a case", blurb: "Optimum currency area theory, what it predicted, what happened, and what a common currency costs a member.", mins: 27 }
    ]},
    { n: 14, title: "Fluctuations and crisis", lessons: [
      { id: "w14l01", title: "Business cycles: facts and explanations", blurb: "What a cycle actually looks like in the data, and the competing accounts — real, monetary, financial, Keynesian.", mins: 27 },
      { id: "w14l02", title: "Financial markets, bubbles and leverage", blurb: "Efficient markets and its critics, the mechanics of leverage, and why asset prices detach from fundamentals.", mins: 27 },
      { id: "w14l03", title: "Banking crises and the lender of last resort", blurb: "Bank runs, Diamond–Dybvig, Bagehot's rule, deposit insurance and the moral hazard it creates.", mins: 27 },
      { id: "w14l04", title: "Sovereign debt and fiscal sustainability", blurb: "The debt dynamics equation, r versus g, default and restructuring, and what 'too much debt' means precisely.", mins: 27 },
      { id: "w14l05", title: "Anatomy of a modern financial crisis", blurb: "A full worked case from build-up to aftermath, using every tool from the previous thirteen weeks.", mins: 30 }
    ]},
    { n: 15, title: "Applied economics", lessons: [
      { id: "w15l01", title: "Public finance: taxation, efficiency and equity", blurb: "Optimal taxation, the excess burden, progressivity, and the trade-offs no tax system escapes.", mins: 27 },
      { id: "w15l02", title: "Health, education and the economics of the state", blurb: "Why these markets fail in characteristic ways, and what the evidence says about the fixes.", mins: 26 },
      { id: "w15l03", title: "Environmental economics and carbon pricing", blurb: "Taxes against permits, discounting the far future, and the economics underneath the climate argument.", mins: 27 },
      { id: "w15l04", title: "Development economics and what works", blurb: "Poverty traps, aid, microfinance, cash transfers — and the randomised-trial movement that reshaped the field.", mins: 27 },
      { id: "w15l05", title: "Labour in the age of automation", blurb: "Technological unemployment, skill-biased change, task-based models, and what the historical record actually shows.", mins: 26 }
    ]},
    { n: 16, title: "Method, ethics and synthesis", lessons: [
      { id: "w16l01", title: "Economics and politics: public choice", blurb: "Applying the tools to politicians, voters and bureaucrats — and what that does to the case for intervention.", mins: 26 },
      { id: "w16l02", title: "Heterodox critiques worth taking seriously", blurb: "Austrian, post-Keynesian, institutional, feminist and ecological economics: the strongest version of each.", mins: 27 },
      { id: "w16l03", title: "AI, data and the changing craft of economics", blurb: "Machine learning for prediction versus econometrics for causation, and what changes in how the work is done.", mins: 26 },
      { id: "w16l04", title: "Capstone: analyse a real policy question", blurb: "You take a live policy debate and write the economic analysis, with a rubric to mark yourself against.", mins: 32 },
      { id: "w16l05", title: "Final examination", blurb: "Sixty questions across the whole course, plus where to read next and how to keep the knowledge alive.", mins: 32 }
    ]}
  ]
};
