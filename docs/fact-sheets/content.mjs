/**
 * Copy for the IMD qualification fact sheets.
 * Edit text here, then run `node docs/fact-sheets/build.mjs` to regenerate the PDFs.
 */

/** Shown on every sheet. */
export const shared = {
  subtitle: "Qualification",
  feesLabel: "IMD Fees",
  fees: "R1455 per month (12 months) + R700 annual registration (once off per year)",

  /** The discount callout: a large headline, then the rest of the sentence. */
  discountLead: "10% discount",
  discountRest: "if registration is paid before 15 Dec 2026",
  /** Where it shows: "header" (the white band at the top), "photo" (under the photo), "footer" — or "none" to hide it. */
  discountPlacement: "header",

  iqb: "IQB Professional International Certificate",

  /** The "studying with IMD" panel: a lead line followed by bullet points. */
  studyLead: "Study virtually online with dedicated lecturers on camera",
  studyPoints: [
    "All qualifications accredited by International Certifications for Business (ICB)",
    "Part studies can result in certificates per subject or NQF certificate per year of completion",
    "Classes run 1 hour per day (as per schedule) for 4 days and 1 day you write a test to confirm the week’s work",
    "Pay non-refundable registration fee now and first instalment by 1 Jan 2027",
    "5% discount on quarterly upfront payment (before 1 Jan 2027)",
    "10% discount on annual upfront payment (before 1 Jan 2027)",
  ],
};

export const sheets = [
  {
    file: "IMD-Financial-Accounting.pdf",
    title: "Financial Accounting",
    photo: "photo-financial-accounting.jpg",
    photoPosition: "84% 30%",
    duration: "12 - 36 months",
    entry: "Grade 10 (Std 8) or equivalent and minimum age 16",
    accreditation: "NQF 3 – 6 or IQB Professional International Certificate.",
    levels: [
      {
        name: "Foundation Level",
        role: "Bookkeeper",
        duration: "12 months",
        subjects: [
          "Bookkeeping to Trial Balance (BKTB)",
          "Payroll and Monthly SARS Returns (PMSR)",
          "Computerised Bookkeeping (CPBK)",
          "Business Literacy (BUSL)",
        ],
        accreditation: "National Certificate: Bookkeeping NQF L3 (SAQA ID: 58375)",
      },
      {
        name: "Intermediate Level",
        role: "Senior Bookkeeper",
        duration: "+ 6 months",
        subjects: ["Financial Statements (FNST)", "Cost and Management Accounting (CMGT)"],
        accreditation:
          "Further Education and Training Certificate: Bookkeeping NQF L4 (SAQA ID: 58376)",
      },
      {
        name: "Upper Intermediate Level",
        role: "Accounting Technician",
        duration: "+ 6 months",
        subjects: ["Income Tax Returns (ITRT)", "Business Law and Accounting Control (BLAC)"],
        accreditation:
          "National Diploma: Technical Financial Accounting NQF L5 (SAQA ID: 36213)",
      },
      {
        name: "Advanced Level",
        role: "Financial Accountant",
        duration: "+ 12 months",
        subjects: [
          "Corporate Strategy (CRPS)",
          "Management Accounting Control Systems (MACS)",
          "Financial Reporting and Regulatory Frameworks (FRRF)",
          "Research Theory and Practice (RTAP)",
        ],
        accreditation: "National Diploma: Financial Accounting NQF L6 (SAQA ID: 20366)",
      },
    ],
  },

  {
    file: "IMD-Business-Management.pdf",
    title: "Business Management",
    photo: "photo-business-management.jpg",
    photoPosition: "40% 20%",
    duration: "9 - 36 months",
    entry: "Grade 11 (Std 9), NQF 3 or equivalent",
    accreditation: "NQF 4 – 6 or IQB Professional International Certificate.",
    levels: [
      {
        name: "Foundation Level",
        role: "Business Administrator",
        duration: "9 months",
        subjects: [
          "Business Management 1 (BMT1)",
          "Bookkeeping to Trial Balance (BKTB)",
          "Business Literacy (BUSL)",
        ],
        accreditation:
          "National Certificate: Small Business Financial Management NQF L4 (SAQA ID: 48736)",
      },
      {
        name: "Intermediate Level",
        role: "Senior Business Administrator",
        duration: "+ 15 months",
        subjects: [
          "Office and Legal Practice (OLRP)",
          "Business Management 2 (BMT2)",
          "Marketing Management and Public Relations (MMPR)",
          "Financial Statements (FNST)",
          "Human Resource Management and Labour Relations (HRLR)",
        ],
        accreditation: "Higher Certificate: Office Administration NQF L5 (SAQA ID: 23619)",
      },
      {
        name: "Advanced Level",
        role: "Business Accountant",
        duration: "+ 12 months",
        subjects: [
          "Business Management 3 (BMT3)",
          "Financial Management and Control (FMCL)",
          "Financial Reporting and Regulatory Frameworks (FRRF)",
          "Research Theory and Practice (RTAP)",
        ],
        accreditation: "National Diploma: Financial Accounting NQF L6 (SAQA ID: 20366)",
      },
    ],
  },

  {
    file: "IMD-Office-Administration.pdf",
    title: "Office Administration",
    photo: "photo-office-administration.jpg",
    photoPosition: "100% 25%",
    duration: "18 - 36 months",
    entry: "Grade 12 (Std 10) or NQF 3 or Equivalent",
    accreditation: "NQF 5 – 6 or IQB Professional International Certificate.",
    levels: [
      {
        name: "Foundation Level",
        role: "Office Administrator",
        duration: "18 months",
        subjects: [
          "Business and Office Administration 1 (BOA1)",
          "Bookkeeping to Trial Balance (BKTB)",
          "Business Literacy (BUSL)",
          "Marketing Management and Public Relations (MMPR)",
          "Business Law and Administrative Practice (BLAP)",
          "Cost and Management Accounting (CMGT)",
        ],
        accreditation: "Certificate: Office Administration NQF L5 (SAQA ID: 23618)",
      },
      {
        name: "Intermediate Level",
        role: "Senior Office Administrator",
        duration: "+ 9 months",
        subjects: [
          "Business and Office Administration 2 (BOA2)",
          "Human Resources Management and Labour Relations (HRLR)",
          "Economics (ECON)",
        ],
        accreditation: "Higher Certificate: Office Administration NQF L5 (SAQA ID: 23619)",
      },
      {
        name: "Advanced Level",
        role: "Office Manager",
        duration: "+ 9 months",
        subjects: [
          "Business and Office Administration 3 (BOA3)",
          "Financial Statements (FNST)",
          "Management (MGMT)",
        ],
        accreditation: "Diploma: Office Administration NQF L6 (SAQA ID: 35958)",
      },
    ],
  },
];
