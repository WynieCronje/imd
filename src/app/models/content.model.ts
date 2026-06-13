/**
 * Typed content model for the IMD College single-page site.
 * Every piece of copy and configuration the presentational components
 * render is described here, so the page is data-driven end to end.
 */

export interface NavBrand {
  logoSrc: string;
  logoAlt: string;
  title: string;       // e.g. "COLLEGE OF MANAGEMENT"
  titleLine2: string;  // e.g. "DEVELOPMENT"
}

export interface HeroSection {
  headingLines: string[];     // ["Get Ready", "To Aim Higher", "Than Ever Before"]
  ctaLabel: string;           // "Enroll here"
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export interface QuoteSection {
  quote: string;
  attribution: string;        // "— Nelson Mandela"
  bodyHtmlLead: string;        // intro sentence with emphasis
  body: string;                // remaining paragraph
}

export interface DiscoverSection {
  imageSrc: string;
  imageAlt: string;
  heading: string;             // "Discover IMD"
  paragraphs: string[];
}

export interface QualificationLink {
  title: string;               // "Financial Accounting"
  ctaLabel: string;            // "Find out more"
  href: string;                // anchor to the matching card
}

export interface QualificationsNav {
  heading: string;             // "QUALIFICATIONS"
  links: QualificationLink[];
}

/** A detailed programme card (the orange/navy bordered panels). */
export interface ProgrammeCard {
  id: string;                  // anchor id used by QualificationLink.href
  title: string;
  intro: string;               // "The following programmes can be offered as..."
  items: string[];             // bullet list
  /** Visual variant matching the source design. */
  variant: 'orange-on-navy' | 'navy-on-orange';
  note?: string;               // e.g. "no accreditation, only certificates"
  illustrationSrc?: string;    // optional decorative image (Skills card)
  illustrationAlt?: string;
}

export interface ContactDetail {
  type: 'phone' | 'email';
  value: string;
  href: string;
}

export interface SocialLink {
  network: 'instagram' | 'facebook' | 'messenger' | 'whatsapp';
  href: string;
  label: string;
}

export interface FooterSection {
  contactHeading: string;      // "Contact Us"
  contacts: ContactDetail[];
  illustrationSrc: string;
  illustrationAlt: string;
  tagLines: string[];          // ["Unlock Your", "Potential", ...]
  accreditationHeading: string;
  accreditationText: string;
  accreditationLogoSrc: string;
  accreditationLogoAlt: string;
  socials: SocialLink[];
}

export interface SiteContent {
  brand: NavBrand;
  hero: HeroSection;
  quote: QuoteSection;
  discover: DiscoverSection;
  qualificationsNav: QualificationsNav;
  programmes: ProgrammeCard[];
  footer: FooterSection;
}
