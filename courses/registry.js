/* Every course this app can open. A course is listed here, its syllabus lives in
   courses/<id>/course.js, and its written weeks in courses/<id>/manifest.js.
   Nothing else has to change to add one. */
window.COURSES = [
  {
    id: "marketing",
    title: "The Marketing Semester",
    field: "Marketing",
    subtitle: "16 weeks · 80 lectures",
    blurb: "How demand is understood, created, priced, distributed and measured. From the exchange at the centre of it all to a complete marketing plan.",
    accent: "#184f95",
    status: "open"
  },
  {
    id: "economics",
    title: "The Economics Semester",
    field: "Economics",
    subtitle: "16 weeks · 80 lectures",
    blurb: "Micro, macro and the methods underneath both. Scarcity and choice, firms and markets, money and output, growth and crisis — and how economists know what they claim to know.",
    accent: "#1f6f52",
    status: "open"
  }
];
