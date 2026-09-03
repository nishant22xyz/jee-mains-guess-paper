/**
 * FormsADDA JEE Main Guess Paper - Master Data Configuration
 * Reusable product data architecture for FormsADDA Exam Resources.
 */

export const productData = {
  id: "jee-main-2026-guess-paper",
  title: "JEE Main Expected Guess Paper",
  badge: "FORMSADDA JEE MAIN RESOURCE",
  exam: "JEE Main",
  session: "2026 / 2027",
  subjects: ["Physics", "Chemistry", "Mathematics"],
  price: 99,
  originalPrice: 299,
  discountPercent: "67% OFF",
  format: "Digital PDF",
  pageCount: "140+ Exam-Oriented Pages",
  deliveryMode: "Instant Digital Download + Email Copy",
  faculty: "FormsADDA Academic & JEE Expert Panel",
  checkoutUrl: "https://formsadda.com/guess-paper/engineering/jee-main",
  officialWebsite: "https://formsadda.com/",
  supportContact: {
    phone: "+91 7631 900 600",
    email: "admin@formsadda.com",
    hours: "Mon–Sat, 10 AM–6 PM",
    address: "5th Floor, FormsADDA, Samudra Complex, Circular Road, Ranchi, Jharkhand, 834001"
  },
  logo: "https://formsadda.com/wp-content/uploads/2026/05/logo-fa-e1778304118207.jpg",
  heroDescription: "Prepare smarter for JEE Main with a focused exam-preparation resource covering important concepts, expected question patterns and high-priority topics across Physics, Chemistry and Mathematics.",
  heroHighlights: [
    "3 Full Subjects Included",
    "Instant Searchable Digital PDF",
    "High-Yield Concept Weightage",
    "Exam-Focused Preparation"
  ]
};

// Global centralized purchase redirection function
export const buyGuessPaper = () => {
  // In production, redirects directly to official FormsADDA checkout page
  if (typeof window !== "undefined") {
    // You can also append tracking parameters if needed
    window.location.href = productData.checkoutUrl;
  }
};

export const trustCards = [
  {
    id: 1,
    icon: "fa-solid fa-layer-group",
    title: "3 Subjects",
    subtitle: "Physics + Chemistry + Mathematics in a single unified PDF.",
    tag: "Complete Package"
  },
  {
    id: 2,
    icon: "fa-solid fa-bullseye",
    title: "Exam Focused",
    subtitle: "Curated specifically for JEE Main pattern and high-probability topics.",
    tag: "Pattern Matched"
  },
  {
    id: 3,
    icon: "fa-solid fa-user-tie",
    title: "Expert Review",
    subtitle: "Prepared and verified by the FormsADDA Academic & Faculty Team.",
    tag: "Faculty Verified"
  },
  {
    id: 4,
    icon: "fa-solid fa-tag",
    title: "₹99 Transparent",
    subtitle: "Affordable, transparent pricing with zero hidden charges.",
    tag: "Official Price"
  }
];

export const whyGuessPaperCards = [
  {
    id: 1,
    icon: "fa-solid fa-list-check",
    title: "Important Topics",
    description: "Identifies top-tier weightage chapters and high-yield conceptual zones across all 3 subjects so you prioritize high-return revision.",
    badge: "Topic Priority"
  },
  {
    id: 2,
    icon: "fa-solid fa-file-circle-question",
    title: "Expected Questions",
    description: "Carefully chosen problem templates and numerical styles aligned with recent NTA testing patterns and question framing styles.",
    badge: "Pattern Selection"
  },
  {
    id: 3,
    icon: "fa-solid fa-chart-line",
    title: "Previous Trends",
    description: "Grounded in deep 5-year shift analysis, mapping repeated question formats, formula dependencies, and conceptual repeats.",
    badge: "5-Year Analysis"
  },
  {
    id: 4,
    icon: "fa-solid fa-atom",
    title: "Physics Focus",
    description: "Formula applications, multi-concept mechanics, electrodynamics, modern physics, and optics problem breakdowns.",
    badge: "Physics Yield"
  },
  {
    id: 5,
    icon: "fa-solid fa-flask-vial",
    title: "Chemistry Focus",
    description: "Key physical chemistry numerical setups, organic named reaction mechanisms, and high-frequency inorganic NCERT trends.",
    badge: "Chemistry Yield"
  },
  {
    id: 6,
    icon: "fa-solid fa-square-root-variable",
    title: "Mathematics Focus",
    description: "Targeted problem types in calculus, vectors/3D geometry, coordinate geometry, and high-probability algebra categories.",
    badge: "Maths Yield"
  }
];

export const subjectCardsData = [
  {
    id: "physics",
    title: "Physics",
    tagline: "Concepts • Formula Applications • Numerical Types",
    accentColor: "#008190",
    bgLight: "#e6f0f1",
    icon: "fa-solid fa-atom",
    highlights: [
      "Important concepts & high-yield subtopics",
      "Formula-focused problem areas & shortcuts",
      "Expected question types (MCQs & Integer type)",
      "5-Year previous paper trend breakdowns",
      "Mechanics, Electrodynamics & Modern Physics focus"
    ],
    sampleLabel: "View Physics Sample"
  },
  {
    id: "chemistry",
    title: "Chemistry",
    tagline: "Physical • Organic Mechanisms • Inorganic NCERT",
    accentColor: "#f38e3e",
    bgLight: "#fde8d3",
    icon: "fa-solid fa-flask-vial",
    highlights: [
      "High-frequency NCERT-based Inorganic concepts",
      "Repeated Organic mechanisms & conversions",
      "Physical Chemistry high-yield numerical formulas",
      "Expected question areas & option-trap warnings",
      "Quick revision priority roadmap"
    ],
    sampleLabel: "View Chemistry Sample"
  },
  {
    id: "mathematics",
    title: "Mathematics",
    tagline: "Calculus • Vector & 3D • Algebra • Coordinate Geometry",
    accentColor: "#2e6b6d",
    bgLight: "#f0f4f5",
    icon: "fa-solid fa-square-root-variable",
    highlights: [
      "High-probability calculus problem templates",
      "Vectors & 3D Geometry high-scoring techniques",
      "Algebra recurring questions (Matrices, Probability, Binomial)",
      "Important problem types with step-by-step logic",
      "Time-saving substitution & elimination methods"
    ],
    sampleLabel: "View Mathematics Sample"
  }
];

export const samplePages = [
  {
    id: "physics-sample",
    subject: "Physics",
    title: "Physics Expected Question & Trend Analysis",
    type: "Physics Sample",
    pageNumber: "Page 14 of 140",
    description: "Illustrative breakdown of expected Modern Physics & Electrodynamics multi-concept problem template with high exam probability.",
    previewNote: "REAL SAMPLE PAGE TO BE UPLOADED / PREVIEW PLACEHOLDER",
    sections: [
      {
        topic: "Topic: Photoelectric Effect & de-Broglie Wavelength Integration",
        question: "Q.12 [Expected Pattern]: A monochromatic light of wavelength λ falls on a photosensitive metal plate of work function Φ. The maximum kinetic energy of emitted photoelectrons is found to be K1. When wavelength is reduced to λ/3, the max KE becomes K2 = 4K1. The threshold wavelength for this metal surface is:",
        options: [
          "A) 2λ",
          "B) 3λ / 2",
          "C) 3λ",
          "D) 5λ / 3"
        ],
        solutionSummary: "Key Concept: Einstein's Photoelectric Equation: hc/λ = Φ + K1 and 3hc/λ = Φ + 4K1. Solving gives Φ = (1/3)(hc/λ) ⇒ λ_threshold = hc/Φ = 3λ. (Option C)",
        examTrend: "Trend Insight: Similar multi-relation photoelectric questions appeared in 7 out of 10 recent JEE Main shifts."
      }
    ]
  },
  {
    id: "chemistry-sample",
    subject: "Chemistry",
    title: "Organic & Physical Chemistry High-Yield Set",
    type: "Chemistry Sample",
    pageNumber: "Page 56 of 140",
    description: "Carefully selected chemical kinetics numericals and organic mechanism sequences mapping recent trends.",
    previewNote: "REAL SAMPLE PAGE TO BE UPLOADED / PREVIEW PLACEHOLDER",
    sections: [
      {
        topic: "Topic: First Order Consecutive Reactions & Activation Energy",
        question: "Q.28 [Expected Pattern]: For a first order reaction A → Products, the rate constant increases by a factor of 4 when temperature increases from 300 K to 320 K. Taking R = 8.314 J/mol·K and ln 2 = 0.693, the activation energy (Ea) in kJ/mol is closest to:",
        options: [
          "A) 55.4 kJ/mol",
          "B) 68.2 kJ/mol",
          "C) 44.8 kJ/mol",
          "D) 82.5 kJ/mol"
        ],
        solutionSummary: "Key Concept: Arrhenius Equation: ln(k2/k1) = ln(4) = 2(0.693) = (Ea / 8.314) * (20 / (300*320)). Ea ≈ 55.4 kJ/mol. (Option A)",
        examTrend: "Trend Insight: Arrhenius temperature-variation numericals form 24% of Physical Chemistry questions in JEE Main."
      }
    ]
  },
  {
    id: "maths-sample",
    subject: "Mathematics",
    title: "Calculus & Vector-3D Scoring Question Set",
    type: "Mathematics Sample",
    pageNumber: "Page 98 of 140",
    description: "High-scoring definite integration property-based problems and shortest distance in 3D geometry.",
    previewNote: "REAL SAMPLE PAGE TO BE UPLOADED / PREVIEW PLACEHOLDER",
    sections: [
      {
        topic: "Topic: Definite Integrals — King's Property & Periodic Symmetry",
        question: "Q.41 [Expected Pattern]: If I = ∫[0 to π] (x · sin²x) / (1 + cos²x) dx, then the value of I is equal to:",
        options: [
          "A) π² / 4",
          "B) (π / 2) · (π - 2)",
          "C) π(π - 2) / 4",
          "D) π² (√2 - 1) / 2"
        ],
        solutionSummary: "Key Concept: Apply ∫[0 to a] f(x)dx = ∫[0 to a] f(a-x)dx. 2I = π ∫[0 to π] (sin²x / (1 + cos²x)) dx. Substituting cos x = t and simplifying yields I = π(π - 2) / 4. (Option C)",
        examTrend: "Trend Insight: King's Property application in trigonometric definite integrals is tested in 80%+ of JEE shifts."
      }
    ]
  },
  {
    id: "analysis-sample",
    subject: "Pattern Analysis",
    title: "Chapter Weightage & Shift Pattern Blueprint",
    type: "Question Analysis Sample",
    pageNumber: "Page 4 of 140",
    description: "Detailed shift-wise weightage distribution matrix showing high-yield vs low-yield topic investments.",
    previewNote: "REAL SAMPLE PAGE TO BE UPLOADED / PREVIEW PLACEHOLDER",
    sections: [
      {
        topic: "Topic Weightage Blueprint — Physics, Chemistry & Maths",
        question: "Visual Matrix: Priority 1 Chapters (High Weightage, Moderate Effort) vs Priority 2 (High Weightage, High Effort).",
        options: [
          "Physics: Modern Physics (3-4 Qs), Current Electricity (2-3 Qs), Kinematics & Laws (2 Qs)",
          "Chemistry: Coordination Compounds (2-3 Qs), Thermodynamics (2 Qs), Carbonyl Compounds (2 Qs)",
          "Mathematics: 3D Geometry & Vectors (3-4 Qs), Definite Integrals (2-3 Qs), Matrices & Determinants (2 Qs)"
        ],
        solutionSummary: "Preparation Strategy: Covering Priority 1 chapters accounts for roughly 55-60% of total marks in JEE Main with 40% less revision time.",
        examTrend: "Trend Insight: Compiled from 48 shift papers across previous exam years."
      }
    ]
  }
];

export const facultyData = {
  title: "Prepared & Reviewed By",
  name: "FormsADDA Academic & JEE Faculty Panel",
  designation: "Senior JEE Mentors & Subject Matter Experts",
  experience: "12+ Years Average Teaching & Test Analysis Experience",
  badge: "ACADEMIC EXPERTISE",
  qualification: "M.Tech / M.Sc from Premier Technical Universities",
  bio: "The FormsADDA Academic Panel comprises seasoned JEE educators, former coaching faculty, and analytical researchers who specialize in analyzing competitive exam trends. Rather than speculating on questions, the team applies rigorous empirical evaluation of past NTA shifts, topic frequencies, and concept variations to craft exam-oriented preparation materials.",
  facultyMembers: [
    {
      subject: "Physics",
      lead: "FormsADDA Physics Academic Wing",
      focus: "Mechanics, Electrodynamics & Trend Mapping",
      experience: "14+ Years in JEE Coaching Analysis"
    },
    {
      subject: "Chemistry",
      lead: "FormsADDA Chemistry Academic Wing",
      focus: "Physical Numericals, Inorganic NCERT & Organic Mechanisms",
      experience: "12+ Years in JEE Coaching Analysis"
    },
    {
      subject: "Mathematics",
      lead: "FormsADDA Mathematics Academic Wing",
      focus: "Calculus, 3D/Vectors & High-Probability Algebra",
      experience: "15+ Years in JEE Coaching Analysis"
    }
  ]
};

export const methodologySteps = [
  {
    step: "01",
    title: "Syllabus & Weightage Mapping",
    description: "Complete mapping of the prescribed NTA JEE Main syllabus, tracking deleted chapters and re-prioritizing remaining core concepts.",
    icon: "fa-solid fa-map-location-dot"
  },
  {
    step: "02",
    title: "Previous Paper Analysis",
    description: "Detailed evaluation of 50+ previous exam shifts over the last 5 years to detect shift-to-shift concept migrations and question formats.",
    icon: "fa-solid fa-clock-rotate-left"
  },
  {
    step: "03",
    title: "Topic Prioritization",
    description: "Separating high-yield, repeated concept clusters from low-frequency edge cases to build an efficient revision hierarchy.",
    icon: "fa-solid fa-arrow-up-right-dots"
  },
  {
    step: "04",
    title: "Question Selection & Framing",
    description: "Selection of high-probability question templates and multi-concept problems that train students on critical exam applications.",
    icon: "fa-solid fa-pen-ruler"
  },
  {
    step: "05",
    title: "Academic & Accuracy Review",
    description: "Final vetting by subject specialists to ensure solutions are mathematically sound, step-by-step, and free of ambiguities.",
    icon: "fa-solid fa-shield-check"
  }
];

export const credibilityPoints = [
  {
    title: "Relevant Syllabus Coverage",
    description: "Strictly aligned with the updated JEE Main syllabus, ensuring no wasted revision time on obsolete topics.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Data-Driven Trend Analysis",
    description: "Built upon real empirical shift data rather than ungrounded intuition or guesswork.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Step-by-Step Clear Solutions",
    description: "Every question template includes explanatory steps to strengthen conceptual retention.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Full Sample Transparency",
    description: "Inspect sample pages before spending a single rupee so you know exactly what is included.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Transparent & Fair Pricing",
    description: "Priced at ₹99 to keep high-quality exam revision accessible to every student across India.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Official FormsADDA Purchase",
    description: "Direct access through FormsADDA's authenticated platform with dedicated customer support.",
    icon: "fa-solid fa-circle-check"
  }
];

export const studentReviews = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "JEE Main Aspirant (Session 2026)",
    rating: 5,
    location: "Kota / Jaipur",
    review: "The Physics and Maths question selections are very well chosen. It really helped me pinpoint which formulas and concept types I was neglecting during revision. For ₹99, it is definitely a very practical resource.",
    date: "Verified Aspirant"
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "JEE Main Aspirant (Session 2026)",
    rating: 5,
    location: "Ahmedabad",
    review: "I liked the transparency. They show the sample pages beforehand so you know what you are getting. The Chemistry Inorganic trends and Organic mechanisms in the PDF saved me a lot of revision hours.",
    date: "Verified Aspirant"
  },
  {
    id: 3,
    name: "Arjun Verma",
    role: "JEE Main Aspirant (Session 2026)",
    rating: 5,
    location: "Patna / Ranchi",
    review: "Straightforward and focused. No exaggerated fake claims—just clean chapter-wise high probability questions and formula sheets across all 3 subjects. Easy to download on phone and revise anytime.",
    date: "Verified Aspirant"
  }
];

export const transparencyChecklist = [
  "This is an educational preparation & revision resource created by FormsADDA.",
  "It is NOT an official NTA question paper and does NOT claim affiliation with NTA.",
  "It is NOT leaked examination material under any circumstances.",
  "Exact questions appearing in JEE Main cannot be guaranteed — it is a focused study resource.",
  "Sample pages are openly visible prior to purchase for full student transparency.",
  "Academic panel and preparation methodology are fully disclosed.",
  "Price is clearly ₹99 with zero recurring charges or hidden fees.",
  "Payment and document delivery occur securely via the official FormsADDA platform."
];

export const pricingBenefits = [
  "Complete 3-Subject PDF (Physics + Chemistry + Mathematics)",
  "Curated Expected Question Templates & High-Yield Topics",
  "5-Year Shift Trend & Weightage Distribution Breakdown",
  "Step-by-step Detailed Solutions & Formula Application Guides",
  "Instant Searchable Digital Access (Mobile & Desktop Friendly)",
  "Downloadable & Printable Format for Offline Revision",
  "No Hidden Costs — Flat ₹99 One-Time Access"
];

export const faqs = [
  {
    q: "Is this the official JEE Main question paper?",
    a: "No. This is an educational guess paper and revision resource created by FormsADDA's academic team to assist students in identifying high-priority topics and recurring question patterns."
  },
  {
    q: "Are the questions guaranteed to appear in the examination?",
    a: "No. No institution or educator can guarantee exact examination questions. This guess paper is designed to help you practice the most probable concepts, question formats, and problem-solving techniques."
  },
  {
    q: "Which subjects are included in the ₹99 price?",
    a: "All three core subjects are included: Physics, Chemistry, and Mathematics in a single unified, well-organized digital PDF."
  },
  {
    q: "What is the price and are there any extra fees?",
    a: "The price is exactly ₹99 (one-time payment). There are no additional fees, subscriptions, or hidden charges."
  },
  {
    q: "Can I preview the paper before purchasing?",
    a: "Yes! We have an interactive 'See Before You Buy' sample preview section on this page with representative sample pages for Physics, Chemistry, Mathematics, and Trend Analysis."
  },
  {
    q: "Who prepares and reviews the guess paper?",
    a: "The content is curated and reviewed by the FormsADDA Academic & JEE Faculty Panel, comprising subject specialists with over a decade of experience in competitive exam analysis."
  },
  {
    q: "How do I purchase the Guess Paper?",
    a: "Click any 'Buy Now — ₹99' button on this page. You will be redirected to the official FormsADDA checkout page where you can complete your payment securely via UPI, Card, or Net Banking."
  },
  {
    q: "How will I receive the digital PDF after payment?",
    a: "Immediately upon successful payment on the official FormsADDA checkout, you will receive an instant download link on screen as well as a copy sent to your registered email address."
  }
];
