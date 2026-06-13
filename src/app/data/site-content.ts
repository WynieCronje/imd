import { SiteContent } from "../models/content.model";

/**
 * Single source of truth for all page content.
 * Edit copy here; presentational components render whatever this provides.
 */
export const SITE_CONTENT: SiteContent = {
  brand: {
    logoSrc: "images/imd-college-logo.svg",
    logoAlt: "IMD logo",
    title: "COLLEGE OF MANAGEMENT",
    titleLine2: "DEVELOPMENT",
  },

  hero: {
    headingLines: ["Get Ready", "To Aim Higher", "Than Ever Before"],
    ctaLabel: "Enroll here",
    ctaHref: "#enroll",
    imageSrc: "images/graduate.jpg",
    imageAlt: "Smiling graduate holding a diploma",
  },

  quote: {
    quote:
      '"Education is the most powerful weapon which you can use to change the world."',
    attribution: "— Nelson Mandela",
    bodyHtmlLead: "Discover the flexibility of our online learning options",
    body: " designed to fit your lifestyle. Whether you\u2019re balancing work or family commitments, our programs adapt to your needs, allowing you to study at your own pace from the comfort of your home. Unlock your potential and take the next step towards your future today!",
  },

  discover: {
    imageSrc: "images/laptop-hands.jpg",
    imageAlt: "Person working on a laptop",
    heading: "Discover IMD",
    paragraphs: [
      "At IMD, our goal is to be among the top professional education companies globally. We believe that, for a team to reach its fullest potential, we must equip the people behind the scenes. We want everyone to succeed; it\u2019s why we value the power of growth and development.",
      "Our Business department, at IMD, was made exactly to nurture that growth. We serve as guides and goalposts for student in their journey to becoming the best versions of themselves.",
    ],
  },

  qualificationsNav: {
    heading: "QUALIFICATIONS",
    links: [
      {
        title: "Financial\nAccounting",
        ctaLabel: "Find out more",
        href: "#financial-accounting",
      },
      {
        title: "Business\nManagement",
        ctaLabel: "Find out more",
        href: "#business-management",
      },
      {
        title: "Office\nAdministration",
        ctaLabel: "Find out more",
        href: "#office-administration",
      },
      {
        title: "Skills\nProgrammes",
        ctaLabel: "Find out more",
        href: "#skills-programmes",
      },
    ],
  },

  programmes: [
    {
      id: "financial-accounting",
      title: "Financial Accounting",
      variant: "orange-on-navy",
      intro:
        "The following programmes can be offered as Skills Programmes or as a Full qualification to be certified as a Technical Financial Accountant",
      items: [
        "Bookkeeping to Trial Balance",
        "Payroll and Monthly SARS returns",
        "Computerized Bookkeeping",
        "Business Literacy",
        "Financial Statements",
        "Cost and Management Accounting",
        "Income tax returns",
        "Business law and Accounting Control",
        "Corporate strategy",
        "Management Accounting Control Systems",
        "Financial Reporting and Regulatory Framework",
        "Research Theory and Practice",
      ],
    },
    {
      id: "business-management",
      title: "Business Management",
      variant: "navy-on-orange",
      intro:
        "The following programmes can be offered as Skills Programmes or as a Full qualification to be certified as Business Management NQF Level 4-6.",
      items: [
        "Bookkeeping to Trial Balance",
        "Payroll and Monthly SARS returns",
        "Computerized Bookkeeping",
        "Business Literacy",
        "Financial Statements",
        "Cost and Management Accounting",
        "Income tax returns",
        "Business law and Accounting Control",
        "Corporate strategy",
        "Management Accounting Control Systems",
        "Financial Reporting and Regulatory Framework",
        "Research Theory and Practice",
      ],
    },
    {
      id: "office-administration",
      title: "Office Administration",
      variant: "orange-on-navy",
      intro:
        "The following programmes can be offered as Short Programmes or as a Full qualification to be certified as Office Administration NQF Level 5-6.",
      items: [
        "Business and Office Administration 1 & 2 & 3",
        "Bookkeeping to Trial Balance",
        "Business Literacy",
        "Marketing Management and Public Relations",
        "Business law and Accounting Control",
        "Cost and Management Accounting",
        "Economics",
        "Human Resources Management and Labor Relations",
        "Financial Statements",
        "Management",
      ],
    },
    {
      id: "skills-programmes",
      title: "Skills Programmes & Services",
      variant: "navy-on-orange",
      note: "no accreditation, only certificates",
      intro: "",
      items: [
        "Microsoft applications",
        "Professional Business Management and Leadership Coaching",
        "Xero Accounting",
        "Pastel Partner",
      ],
      illustrationSrc: "images/skills-illustration.svg",
      illustrationAlt: "Illustration of books and learning tools",
    },
  ],

  footer: {
    contactHeading: "Contact Us",
    contacts: [
      { type: "phone", value: "+27 81 578 1579" },
      { type: "email", value: "info@imdcollege.co.za" },
    ],
    illustrationSrc: "images/footer-illustration.svg",
    illustrationAlt: "Illustration of a person studying online",
    tagLines: ["Unlock Your", "Potential", "Flexible Learning", "Awaits"],
    accreditationHeading: "ACCREDITATION",
    accreditationText: "INTERNATIONAL CERTIFICATIONS FOR BUSINESS",
    accreditationLogoSrc: "images/icb-logo.svg",
    accreditationLogoAlt: "ICB International accreditation logo",
    socials: [
      { network: "instagram", href: "#", label: "Instagram" },
      { network: "facebook", href: "#", label: "Facebook" },
      { network: "messenger", href: "#", label: "Messenger" },
      { network: "whatsapp", href: "#", label: "WhatsApp" },
    ],
  },
} as SiteContent;
