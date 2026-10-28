export type Locale = "en" | "hi";

export interface BilingualText {
  en: string;
  hi: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  category: "photography" | "printing";
  priority: "primary" | "secondary";
  title: BilingualText;
  hindiAccent?: string;
  shortDescription: BilingualText;
  detailedDescription: BilingualText;
  highlights: { en: string[]; hi: string[] };
  image: string;
  imageAlt: BilingualText;
  whatsappMessage: string;
}

export interface WeddingChapter {
  number: string;
  id: string;
  title: BilingualText;
  hindiLabel: string;
  subtitle: BilingualText;
  description: BilingualText;
  image: string;
  paletteAccent: "maroon" | "gold" | "vermilion" | "ivory";
  whatsappMessage: string;
}

export interface PhotographyPackage {
  id: string;
  name: BilingualText;
  hindiSubtitle: string;
  badge: BilingualText;
  featured: boolean;
  positioning: BilingualText;
  inclusions: { en: string[]; hi: string[] };
  consultationNote: BilingualText;
  ctaLabel: BilingualText;
  whatsappMessage: string;
}

export interface InvitationStyleDirection {
  id: string;
  styleNumber: string;
  title: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  colorScheme: {
    bg: string;
    border: string;
    accent: string;
    text: string;
    label: BilingualText;
  };
  suitedFor: BilingualText;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  category:
    | "wedding"
    | "portraits"
    | "pre-wedding"
    | "ceremonies"
    | "invitations"
    | "printing";
  categoryLabel: BilingualText;
  title: BilingualText;
  caption: BilingualText;
  alt: BilingualText;
  src: string;
  aspectRatio: "portrait" | "landscape" | "square" | "wide";
  featured?: boolean;
  isPlaceholder: boolean;
  whatsappMessage: string;
}

export interface FAQItem {
  id: string;
  category: "general" | "photography" | "printing";
  question: BilingualText;
  answer: BilingualText;
}

/**
 * CENTRALIZED AUTHORITATIVE BUSINESS CONFIGURATION
 * Update phone numbers, logo path, opening hours, camera notes, packages,
 * or gallery assets in this single file to update the entire website.
 */
export const SITE_CONFIG = {
  businessName: "Anuj Studio and Graphics",
  businessNameHindi: "अनुज स्टूडियो एंड ग्राफिक्स",
  tagline: {
    en: "Wedding Photography, Cinematic Films & Invitation Printing",
    hi: "वेडिंग फोटोग्राफी, सिनेमैटिक फिल्म्स और शादी कार्ड प्रिंटिंग",
  },
  experienceYears: 12,
  location: {
    locality: "Ramganj",
    city: "Sitapur",
    state: "Uttar Pradesh",
    country: "India",
    displayShort: {
      en: "Ramganj, Sitapur, Uttar Pradesh",
      hi: "रामगंज, सीतापुर, उत्तर प्रदेश",
    },
    displayFull: {
      en: "Ramganj, Sitapur, Uttar Pradesh, India",
      hi: "रामगंज, सीतापुर, उत्तर प्रदेश, भारत",
    },
  },
  contact: {
    phoneDisplay: "+91 90054 00712",
    phoneTel: "tel:+919005400712",
    whatsappNumber: "919005400712",
  },
  openingHours: {
    isProvisional: true,
    schedule: {
      en: "9:00 AM – 9:00 PM Daily",
      hi: "प्रतिदिन सुबह 9:00 से रात 9:00 बजे तक",
    },
    note: {
      en: "Provisional timings — feel free to call or WhatsApp before visiting for wedding consultations.",
      hi: "संभावित समय — स्टूडियो आने से पहले कॉल या व्हाट्सएप द्वारा समय की पुष्टि कर सकते हैं।",
    },
  },
  /**
   * Future Logo Replacement:
   * 1. Place the official logo file at `public/images/branding/logo.png` (or `.svg`).
   * 2. Set `enabled: true` below.
   * The header and footer will automatically switch from the ornamental monogram crest to the supplied logo image.
   */
  branding: {
    logo: {
      enabled: false,
      src: "/images/branding/logo.png",
      alt: "Anuj Studio and Graphics Official Logo",
      width: 180,
      height: 56,
    },
  },
  /**
   * Editable equipment data supplied in brief:
   * Preserved here for owner reference and updates without making unverified public spec claims.
   */
  editableStudioData: {
    suppliedCameraReferences: ["Nikon Z5", "7500", "7000"],
    equipmentPolicyNote:
      "Camera references supplied in initial brief (Nikon Z5, 7500, 7000). Update with confirmed full model names and lens inventory when verified by the studio owner.",
    socialLinks: [] as { platform: string; url: string }[],
  },
  /**
   * Configurable production domain for SEO canonicals & sitemap
   */
  seo: {
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL || "https://anujstudioandgraphics.in",
    defaultTitle:
      "Anuj Studio and Graphics | Wedding Photography, Videography & Printing in Ramganj, Sitapur",
    defaultDescription:
      "Anuj Studio and Graphics in Ramganj, Sitapur, Uttar Pradesh offers 12 years of experience in Indian wedding photography, wedding videography, pre-wedding shoots, wedding invitation card printing, visiting cards, posters, pamphlets, and banners.",
  },
  /**
   * Temporary Portfolio Status Flag:
   * Set `showIllustrativeNotice: false` once all placeholder images in `GALLERY_ITEMS`
   * have been replaced with genuine studio photographs and print samples.
   */
  portfolioStatus: {
    showIllustrativeNotice: true,
    noticeBadge: {
      en: "Illustrative Visual Preview — Actual Studio Work Will Be Added Here",
      hi: "प्रतीकात्मक दृश्य झलक — स्टूडियो के वास्तविक कार्य के चित्र यहाँ जोड़े जाएंगे",
    },
    noticeDetail: {
      en: "The photographs and print mockups displayed below are bespoke illustrative previews representing our creative direction while our archive of client wedding photographs and printed cards is being curated for digital display.",
      hi: "नीचे दिखाए गए चित्र और कार्ड डिज़ाइन हमारे रचनात्मक स्तर की प्रतीकात्मक झलक हैं। स्टूडियो के वास्तविक ग्राहकों के विवाह फ़ोटो और प्रिंट नमूने जल्द ही यहाँ अपडेट किए जाएंगे।",
    },
  },
} as const;

/**
 * Helper to generate official wa.me links with URL-encoded prefilled messages
 */
export function getWhatsAppUrl(message: string): string {
  const cleanMessage = message.trim();
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(cleanMessage)}`;
}

/**
 * Predefined contextual WhatsApp messages
 */
export const WHATSAPP_MESSAGES = {
  general:
    "Hello Anuj Studio and Graphics, I would like to enquire about your photography, videography, or printing services in Ramganj, Sitapur. Please share details.",
  weddingPhotography:
    "Hello Anuj Studio and Graphics, I would like to enquire about Wedding Photography for an upcoming marriage celebration. Please share your coverage options and quotation.",
  weddingVideography:
    "Hello Anuj Studio and Graphics, I am interested in Wedding Videography and Cinematic Wedding Film coverage. Please let me know how we can discuss our wedding dates.",
  preWedding:
    "Hello Anuj Studio and Graphics, I would like to enquire about a Pre-Wedding Photography and Videography shoot. Please share the options and quotation.",
  engagementAndEvents:
    "Hello Anuj Studio and Graphics, I need photography and videography coverage for an Engagement / family celebration. Please share your availability and quotation.",
  videoEditing:
    "Hello Anuj Studio and Graphics, I would like to enquire about your Video Editing services. Please let me know how we can discuss my project requirements.",
  packageShubhMuhurat:
    "Hello Anuj Studio and Graphics, I would like to enquire about the Shubh Muhurat photography package. Please share the available options and quotation.",
  packageWeddingCelebrations:
    "Hello Anuj Studio and Graphics, I would like to enquire about the Wedding Celebrations photography package. Please share the available options and quotation.",
  packageRoyalShaadiCinema:
    "Hello Anuj Studio and Graphics, I would like to enquire about the Royal Shaadi Cinema photography package. Please share the available options and quotation.",
  weddingCards:
    "Hello Anuj Studio and Graphics, I need information about wedding invitation cards or printing services. Please help me with design options and a quotation.",
  commercialPrinting:
    "Hello Anuj Studio and Graphics, I would like to discuss a printing requirement (visiting cards, posters, pamphlets, or banners). Please share design options and a quotation.",
} as const;

export const NAVIGATION_ITEMS = [
  {
    href: "/",
    label: { en: "Home", hi: "होम" },
  },
  {
    href: "/photography-videography",
    label: { en: "Photography & Films", hi: "फोटोग्राफी व फिल्म्स" },
  },
  {
    href: "/wedding-cards-printing",
    label: { en: "Wedding Cards & Printing", hi: "शादी कार्ड व प्रिंटिंग" },
  },
  {
    href: "/gallery",
    label: { en: "Visual Gallery", hi: "गैलरी" },
  },
  {
    href: "/about",
    label: { en: "About Studio", hi: "स्टूडियो परिचय" },
  },
  {
    href: "/contact",
    label: { en: "Contact & Quote", hi: "संपर्क व कोटेशन" },
  },
] as const;

export const PHOTOGRAPHY_SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    slug: "wedding-photography",
    category: "photography",
    priority: "primary",
    title: {
      en: "Wedding Photography",
      hi: "वेडिंग फोटोग्राफी (विवाह फोटोग्राफी)",
    },
    hindiAccent: "शुभ विवाह एवं रस्में",
    shortDescription: {
      en: "Thoughtful, vibrant photography covering wedding ceremonies, bridal portraits, family emotions, and traditional rituals.",
      hi: "विवाह की पावन रस्मों, दुल्हन के पोर्ट्रेट, पारिवारिक भावनाओं और उत्सव के हर पल का जीवंत चित्रण।",
    },
    detailedDescription: {
      en: "From the quiet anticipation of bridal preparation to the grandeur of the Jaimala and the sacred warmth of the Pheras, we document the rituals, family blessings, and joyful atmosphere that make every Indian marriage unique.",
      hi: "दुल्हन के श्रृंगार से लेकर जयमाला की भव्यता और फेरों की पावन घड़ी तक, हम हर रस्म, बड़ों के आशीर्वाद और परिवार की खुशियों को खूबसूरती से संजोते हैं।",
    },
    highlights: {
      en: [
        "Bridal & groom portraits with rich colour fidelity",
        "Complete ritual coverage (Baraat, Jaimala, Mandap ceremonies, Vidaai)",
        "Family & group portraits alongside candid emotional moments",
      ],
      hi: [
        "दूल्हा-दुल्हन के आकर्षक और पारंपरिक पोर्ट्रेट",
        "बारात, जयमाला, मंडप की रस्मों और विदाई का संपूर्ण कवरेज",
        "पारिवारिक ग्रुप फोटो और भावनात्मक पलों की फोटोग्राफी",
      ],
    },
    image: "/images/wedding/bridal-portrait.png",
    imageAlt: {
      en: "Illustrative Indian bridal portrait in rich crimson and antique gold attire",
      hi: "पारंपरिक लाल और सुनहरे परिधान में भारतीय दुल्हन की प्रतीकात्मक तस्वीर",
    },
    whatsappMessage: WHATSAPP_MESSAGES.weddingPhotography,
  },
  {
    id: "wedding-videography",
    slug: "wedding-videography",
    category: "photography",
    priority: "primary",
    title: {
      en: "Wedding Videography",
      hi: "वेडिंग वीडियोग्राफी",
    },
    hindiAccent: "यादों का जीवंत दस्तावेज़",
    shortDescription: {
      en: "Comprehensive video documentation preserving the music, laughter, rituals, and family voices of your wedding celebrations.",
      hi: "विवाह के संगीत, हँसी-खुशी, मंत्रोच्चार और पारिवारिक पलों को सहेजने वाली संपूर्ण वीडियोग्राफी।",
    },
    detailedDescription: {
      en: "A wedding moves quickly, with countless moments unfolding at once. Our videography captures the progression of ceremonies, family interactions, and festive energy so you can relive your celebrations for years to come.",
      hi: "शादी के उत्सव में हर पल खास होता है। हमारी वीडियोग्राफी सभी प्रमुख रस्मों, मेहमानों के स्वागत और पारिवारिक उत्साह को स्पष्ट और व्यवस्थित रूप से रिकॉर्ड करती है।",
    },
    highlights: {
      en: [
        "Multi-ceremony documentation planned around your schedule",
        "Clear visual coverage of rituals and stage celebrations",
        "Professionally edited full-event videos based on agreed scope",
      ],
      hi: [
        "आपके कार्यक्रम के अनुसार सभी रस्मों की वीडियो रिकॉर्डिंग",
        "स्टेज कार्यक्रमों और पारंपरिक रीति-रिवाजों का स्पष्ट कवरेज",
        "तय पैकेज के अनुसार सुव्यवस्थित वीडियो एडिटिंग",
      ],
    },
    image: "/images/wedding/pheras-ceremony.png",
    imageAlt: {
      en: "Illustrative Indian wedding mandap ceremony around the sacred fire",
      hi: "मंडप में पवित्र अग्नि के चारों ओर विवाह रस्म की प्रतीकात्मक झलक",
    },
    whatsappMessage: WHATSAPP_MESSAGES.weddingVideography,
  },
  {
    id: "cinematic-wedding-films",
    slug: "cinematic-wedding-films",
    category: "photography",
    priority: "primary",
    title: {
      en: "Cinematic Wedding Films",
      hi: "सिनेमैटिक वेडिंग फिल्म्स",
    },
    hindiAccent: "दास्तान-ए-शादी",
    shortDescription: {
      en: "Artfully edited wedding highlight films combining expressive framing, music, and emotional storytelling, subject to agreed deliverables.",
      hi: "संगीत, भावनाओं और कलात्मक एडिटिंग के साथ तैयार की गई आकर्षक वेडिंग हाइलाइट फिल्म्स।",
    },
    detailedDescription: {
      en: "For couples and families who want their marriage celebration presented like a timeless story, we craft cinematic wedding highlight films and trailers tailored to the functions and deliverables agreed during consultation.",
      hi: "जो परिवार अपनी शादी की यादों को एक फिल्म की तरह संजोना चाहते हैं, उनके लिए हम तय किए गए कार्यक्रमों और विवरणों के अनुसार सिनेमैटिक हाइलाइट्स और टीज़र तैयार करते हैं।",
    },
    highlights: {
      en: [
        "Story-driven wedding highlight edits and trailers",
        "Careful pacing, music selection, and colour grading",
        "Customised around your chosen functions and package",
      ],
      hi: [
        "कहानी की तरह पिरोए गए वेडिंग हाइलाइट और टीज़र",
        "मधुर संगीत और आकर्षक कलर ग्रेडिंग का संगम",
        "आपकी पसंद और तय पैकेज के अनुरूप निर्माण",
      ],
    },
    image: "/images/hero/royal-mandap-couple.png",
    imageAlt: {
      en: "Illustrative royal Indian couple portrait beneath an ornate floral mandap",
      hi: "भव्य फूलों के मंडप के नीचे दूल्हा-दुल्हन की सिनेमैटिक झलक",
    },
    whatsappMessage: WHATSAPP_MESSAGES.weddingVideography,
  },
  {
    id: "pre-wedding-shoots",
    slug: "pre-wedding-shoots",
    category: "photography",
    priority: "primary",
    title: {
      en: "Pre-Wedding Photography & Videography",
      hi: "प्री-वेडिंग फोटोग्राफी और वीडियोग्राफी",
    },
    hindiAccent: "नए सफर की शुरुआत",
    shortDescription: {
      en: "Relaxed, creative visual storytelling for couples before the wedding celebrations begin.",
      hi: "शादी की व्यस्तता से पहले कपल्स के लिए सहज, कलात्मक और यादगार प्री-वेडिंग शूट।",
    },
    detailedDescription: {
      en: "Before the busy days of the wedding arrive, a pre-wedding shoot offers couples a calm setting for expressive portraits and short romantic video sequences that can also be shared during engagement or Sangeet celebrations.",
      hi: "शादी के मुख्य कार्यक्रमों से पहले एक शांत और खूबसूरत माहौल में कपल पोर्ट्रेट और वीडियो शूट, जिन्हें संगीत या रिसेप्शन में भी प्रदर्शित किया जा सकता है।",
    },
    highlights: {
      en: [
        "Guided posing that feels natural and comfortable",
        "Outdoor or heritage-inspired location planning",
        "Edited couple portraits and optional short video reel",
      ],
      hi: [
        "सहज और आकर्षक पोज़िंग मार्गदर्शन",
        "आउटडोर या पसंदीदा लोकेशन के अनुसार योजना",
        "एडिट किए गए कपल पोर्ट्रेट और वीडियो विकल्प",
      ],
    },
    image: "/images/pre-wedding/couple-heritage.png",
    imageAlt: {
      en: "Illustrative Indian couple pre-wedding portrait under heritage sandstone arches",
      hi: "पारंपरिक मेहराब के नीचे भारतीय कपल का प्री-वेडिंग पोर्ट्रेट",
    },
    whatsappMessage: WHATSAPP_MESSAGES.preWedding,
  },
  {
    id: "engagement-ring-ceremonies",
    slug: "engagement-ring-ceremonies",
    category: "photography",
    priority: "secondary",
    title: {
      en: "Engagement & Ring Ceremonies",
      hi: "सगाई (रिंग सेरेमनी) व तिलक उत्सव",
    },
    hindiAccent: "रिश्तों की पहली मुहर",
    shortDescription: {
      en: "Dedicated photography and video coverage for Roka, Sagai, Tilak, and ring exchange celebrations.",
      hi: "रोका, सगाई, रिंग सेरेमनी और तिलक जैसे शुभ अवसरों के लिए विशेष फोटोग्राफी व वीडियोग्राफी।",
    },
    detailedDescription: {
      en: "The formal beginning of a marriage alliance brings two families together in celebration. We capture the ring exchange, family blessings, stage portraits, and festive warmth with clarity and care.",
      hi: "दो परिवारों के मिलन के पहले बड़े उत्सव—सगाई और तिलक—के हर महत्वपूर्ण पल, अंगूठी पहनाने की रस्म और आशीर्वाद समारोह को हम पूरी निष्ठा से कवर करते हैं।",
    },
    highlights: {
      en: [
        "Ring exchange close-ups and couple stage portraits",
        "Tilak and Roka family blessing moments",
        "Flexible single-day or multi-hour booking options",
      ],
      hi: [
        "रिंग सेरेमनी और कपल स्टेज पोर्ट्रेट",
        "तिलक और रोका की पारंपरिक रस्मों का कवरेज",
        "कार्यक्रम की अवधि के अनुसार सुविधाजनक बुकिंग",
      ],
    },
    image: "/images/ceremonies/ring-engagement.png",
    imageAlt: {
      en: "Illustrative Indian engagement ring exchange ceremony with floral stage decor",
      hi: "सगाई समारोह में अंगूठी पहनाने की रस्म की प्रतीकात्मक तस्वीर",
    },
    whatsappMessage: WHATSAPP_MESSAGES.engagementAndEvents,
  },
  {
    id: "haldi-mehendi-functions",
    slug: "haldi-mehendi-functions",
    category: "photography",
    priority: "secondary",
    title: {
      en: "Haldi, Mehendi & Wedding Festivities",
      hi: "हल्दी, मेहंदी और संगीत समारोह",
    },
    hindiAccent: "खुशियों के चटख रंग",
    shortDescription: {
      en: "Vibrant coverage for colourful pre-wedding rituals including Haldi, Mehendi, Sangeet, and Ladies Sangeet.",
      hi: "हल्दी की रौनक, मेहंदी की कलाकारी और महिला संगीत के उत्साहपूर्ण पलों का रंगीन कवरेज।",
    },
    detailedDescription: {
      en: "Some of the happiest wedding memories happen during the intimate home and courtyard rituals of Haldi, Mehendi, and Sangeet. We focus on the bright colours, candid laughter, dance performances, and intricate henna details.",
      hi: "घर के आँगन में होने वाली हल्दी, मेहंदी और संगीत की रस्में सबसे आत्मीय और खुशहाल होती हैं। हम इन रस्मों के चटक रंगों, नृत्य और पारिवारिक हँसी-ठिठोली को जीवंत रूप में कैद करते हैं।",
    },
    highlights: {
      en: [
        "Intricate bridal mehendi detail shots",
        "Candid Haldi ceremony splashes and family joy",
        "Sangeet and Dholak celebration coverage",
      ],
      hi: [
        "दुल्हन की मेहंदी के बारीक और कलात्मक शॉट्स",
        "हल्दी की रस्म के स्वाभाविक और खुशनुमा पल",
        "संगीत और ढोलक कार्यक्रमों की फोटोग्राफी व वीडियो",
      ],
    },
    image: "/images/ceremonies/haldi-mehendi.png",
    imageAlt: {
      en: "Illustrative Indian Haldi and Mehendi celebration with marigold garlands",
      hi: "गेंदे के फूलों और मेहंदी से सजे भारतीय उत्सव की प्रतीकात्मक झलक",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about photography and videography for Haldi, Mehendi, or Sangeet functions. Please share details.",
  },
  {
    id: "family-functions-celebrations",
    slug: "family-functions-celebrations",
    category: "photography",
    priority: "secondary",
    title: {
      en: "Family Functions & Celebrations",
      hi: "पारिवारिक उत्सव एवं अन्य कार्यक्रम",
    },
    hindiAccent: "हर पारिवारिक खुशी",
    shortDescription: {
      en: "Photography and videography for birthdays, marriage anniversaries, Griha Pravesh, Mundan, and religious ceremonies.",
      hi: "जन्मदिन, शादी की सालगिरह, गृह प्रवेश, मुंडन और धार्मिक अनुष्ठानों के लिए फोटोग्राफी व वीडियोग्राफी।",
    },
    detailedDescription: {
      en: "Beyond weddings, families in Ramganj and Sitapur rely on us to preserve milestone celebrations—from a child's Mundan or birthday party to silver jubilee anniversaries, Griha Pravesh poojas, and community gatherings.",
      hi: "विवाह के अलावा भी परिवार के हर शुभ अवसर—जैसे बच्चों का जन्मदिन, मुंडन संस्कार, गृह प्रवेश, सालगिरह और धार्मिक आयोजनों—की यादों को संजोने के लिए हमारी सेवाएं उपलब्ध हैं।",
    },
    highlights: {
      en: [
        "Birthdays, anniversaries, and family get-togethers",
        "Griha Pravesh, Mundan, and traditional pooja coverage",
        "Local event coverage tailored to your schedule",
      ],
      hi: [
        "जन्मदिन, सालगिरह और पारिवारिक मिलन समारोह",
        "गृह प्रवेश, मुंडन और पूजा-पाठ का कवरेज",
        "आपके समय और आवश्यकता के अनुसार स्थानीय सेवा",
      ],
    },
    image: "/images/ceremonies/ring-engagement.png",
    imageAlt: {
      en: "Illustrative family celebration and ceremonial lamp lighting",
      hi: "पारिवारिक उत्सव और पारंपरिक दीप प्रज्वलन की झलक",
    },
    whatsappMessage: WHATSAPP_MESSAGES.engagementAndEvents,
  },
  {
    id: "video-editing",
    slug: "video-editing",
    category: "photography",
    priority: "secondary",
    title: {
      en: "Video Editing Services",
      hi: "वीडियो एडिटिंग सेवाएं",
    },
    hindiAccent: "कुशल संपादन",
    shortDescription: {
      en: "Custom video editing for wedding footage, family events, highlight reels, and celebration videos according to customer requirements.",
      hi: "शादी की फुटेज, पारिवारिक कार्यक्रमों, हाइलाइट रील्स और अन्य वीडियो प्रोजेक्ट्स की आवश्यकतानुसार एडिटिंग।",
    },
    detailedDescription: {
      en: "Whether you need raw event recordings shaped into a polished family film, music-backed wedding highlights, or structured ceremony chapters, we provide dedicated video editing tailored to your preferences.",
      hi: "यदि आप अपने किसी कार्यक्रम की वीडियो रिकॉर्डिंग को सुव्यवस्थित रूप से एडिट कराना चाहते हैं या संगीत व टाइटल्स के साथ हाइलाइट वीडियो बनवाना चाहते हैं, तो हम आपकी आवश्यकता के अनुसार एडिटिंग सेवा प्रदान करते हैं।",
    },
    highlights: {
      en: [
        "Wedding and event footage assembly and trimming",
        "Title cards, traditional music integration, and transitions",
        "Custom edits discussed directly with the studio",
      ],
      hi: [
        "शादी और पारिवारिक वीडियो फुटेज की व्यवस्थित एडिटिंग",
        "आकर्षक टाइटल, पारंपरिक संगीत और साफ ट्रांज़िशन",
        "आपकी पसंद के अनुसार कस्टम वीडियो संपादन",
      ],
    },
    image: "/images/hero/royal-mandap-couple.png",
    imageAlt: {
      en: "Illustrative cinematic wedding film frame",
      hi: "सिनेमैटिक वेडिंग फिल्म संपादन की प्रतीकात्मक झलक",
    },
    whatsappMessage: WHATSAPP_MESSAGES.videoEditing,
  },
  {
    id: "other-photography-requirements",
    slug: "other-photography-requirements",
    category: "photography",
    priority: "secondary",
    title: {
      en: "Custom Photography & Video Requirements",
      hi: "अन्य फोटोग्राफी एवं वीडियो आवश्यकताएं",
    },
    hindiAccent: "आपकी ज़रूरत के अनुसार",
    shortDescription: {
      en: "Enquire directly for school events, local functions, portrait sessions, or custom photography and videography needs.",
      hi: "विद्यालय कार्यक्रम, स्थानीय आयोजन, पोर्ट्रेट या किसी भी अन्य फोटोग्राफी आवश्यकता के लिए सीधा संपर्क करें।",
    },
    detailedDescription: {
      en: "Every celebration and local requirement is different. If you have a specific photography or video requirement in or around Ramganj and Sitapur, speak with us directly so we can plan the right approach.",
      hi: "हर आयोजन की अपनी अलग आवश्यकता होती है। रामगंज और सीतापुर क्षेत्र में किसी भी विशेष फोटोग्राफी या वीडियोग्राफी कार्य के लिए आप हमसे सीधे बात कर सकते हैं।",
    },
    highlights: {
      en: [
        "Direct consultation on phone or WhatsApp",
        "Flexible planning for single or multi-day events",
        "Combined photography + printing convenience",
      ],
      hi: [
        "फ़ोन या व्हाट्सएप पर सीधी और सरल बातचीत",
        "एक या अधिक दिनों के कार्यक्रमों के लिए लचीली योजना",
        "फोटोग्राफी और प्रिंटिंग दोनों की सुविधा एक ही स्थान पर",
      ],
    },
    image: "/images/pre-wedding/couple-heritage.png",
    imageAlt: {
      en: "Illustrative portrait session composition",
      hi: "विशेष फोटोग्राफी सत्र की प्रतीकात्मक झलक",
    },
    whatsappMessage: WHATSAPP_MESSAGES.general,
  },
];

export const PRINTING_SERVICES: ServiceItem[] = [
  {
    id: "wedding-invitation-cards",
    slug: "wedding-invitation-cards",
    category: "printing",
    priority: "primary",
    title: {
      en: "Wedding Invitation Card Printing",
      hi: "शादी कार्ड (विवाह निमंत्रण पत्र) प्रिंटिंग",
    },
    hindiAccent: "स्नेहिल निमंत्रण",
    shortDescription: {
      en: "Traditional and contemporary Indian marriage invitation cards designed and printed with clear typography in Hindi and English.",
      hi: "पारंपरिक और आधुनिक डिज़ाइनों में हिंदी व अंग्रेज़ी की सुंदर छपाई के साथ आकर्षक शादी कार्ड।",
    },
    detailedDescription: {
      en: "A wedding invitation is the first glimpse your relatives and guests receive of your celebration. We help families select card designs, compose accurate Hindi or English invitation wording (Mangalik Karyakram, Darshanabhilashi, Vinayavanat), and print cards with care.",
      hi: "शादी का कार्ड आपके उत्सव की पहली झलक होता है। हम परिवारों को सुंदर कार्ड चुनने, मांगलिक कार्यक्रम व दर्शनाभिलाषी का सटीक विवरण तैयार करने और साफ-सुथरी छपाई में पूरी सहायता करते हैं।",
    },
    highlights: {
      en: [
        "Wide range of traditional red, maroon, ivory, and gold designs",
        "Accurate Hindi (Devanagari) and English typesetting",
        "Cards for Weddings, Engagements, Tilak, and Receptions",
      ],
      hi: [
        "लाल, मैरून, आइवरी और गोल्डन शैड में विविध कार्ड डिज़ाइन",
        "हिंदी और अंग्रेज़ी में शुद्ध एवं सुंदर टाइपसेटिंग",
        "विवाह, सगाई, तिलक और रिसेप्शन के लिए आमंत्रण पत्र",
      ],
    },
    image: "/images/invitations/royal-wedding-cards.png",
    imageAlt: {
      en: "Illustrative luxury Indian wedding invitation cards in maroon and gold",
      hi: "मैरून और सुनहरे बॉर्डर वाले भारतीय शादी कार्ड की प्रतीकात्मक झलक",
    },
    whatsappMessage: WHATSAPP_MESSAGES.weddingCards,
  },
  {
    id: "visiting-cards",
    slug: "visiting-cards",
    category: "printing",
    priority: "primary",
    title: {
      en: "Visiting Card Printing",
      hi: "विज़िटिंग कार्ड प्रिंटिंग",
    },
    hindiAccent: "व्यावसायिक पहचान",
    shortDescription: {
      en: "Clean, well-structured visiting cards and business cards for shopkeepers, professionals, traders, and local enterprises.",
      hi: "दुकानदारों, व्यवसायियों और पेशेवरों के लिए आकर्षक एवं स्पष्ट विज़िटिंग कार्ड।",
    },
    detailedDescription: {
      en: "Make a dependable impression with custom-designed visiting cards featuring clear contact details, business branding, and readable Hindi or English typography tailored to your trade or profession.",
      hi: "अपने व्यापार या पेशे की मजबूत पहचान बनाने के लिए साफ लेआउट, सुंदर फॉन्ट और सटीक जानकारी के साथ विज़िटिंग कार्ड डिज़ाइन व प्रिंट करवाएं।",
    },
    highlights: {
      en: [
        "Custom layout design for shops, clinics, offices, and services",
        "Single-sided and double-sided layout options",
        "Bilingual Hindi and English card typesetting",
      ],
      hi: [
        "दुकान, ऑफिस और सेवाओं के लिए कस्टम कार्ड डिज़ाइन",
        "सिंगल-साइड और डबल-साइड छपाई के विकल्प",
        "हिंदी और अंग्रेज़ी दोनों भाषाओं में कार्ड निर्माण",
      ],
    },
    image: "/images/printing/commercial-print-showcase.png",
    imageAlt: {
      en: "Illustrative visiting cards and commercial print showcase",
      hi: "विज़िटिंग कार्ड और प्रिंटिंग सामग्री की प्रतीकात्मक झलक",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Visiting Card design and printing. Please share the options and quotation.",
  },
  {
    id: "poster-printing",
    slug: "poster-printing",
    category: "printing",
    priority: "secondary",
    title: {
      en: "Poster Printing",
      hi: "पोस्टर प्रिंटिंग",
    },
    hindiAccent: "प्रभावी प्रचार",
    shortDescription: {
      en: "Eye-catching posters for local events, religious functions, coaching institutes, shops, and promotional announcements.",
      hi: "स्थानीय कार्यक्रमों, धार्मिक आयोजनों, संस्थानों और दुकानों के प्रचार हेतु आकर्षक पोस्टर।",
    },
    detailedDescription: {
      en: "Whether announcing a community celebration, a seasonal shop offer, or an educational programme, we design and print posters with strong visual hierarchy and clear messaging.",
      hi: "किसी धार्मिक आयोजन, दुकान के विशेष ऑफर, स्कूल/कोचिंग या सामाजिक कार्यक्रम की जानकारी जन-जन तक पहुँचाने के लिए आकर्षक पोस्टर डिज़ाइन और प्रिंटिंग।",
    },
    highlights: {
      en: [
        "Bold typography for high street-level readability",
        "Event, devotional, educational, and retail poster designs",
        "Sizes and quantities tailored to your requirement",
      ],
      hi: [
        "दूर से स्पष्ट दिखने वाली आकर्षक टाइपोग्राफी",
        "धार्मिक, शैक्षणिक और व्यावसायिक पोस्टर डिज़ाइन",
        "आवश्यकतानुसार आकार और संख्या में छपाई",
      ],
    },
    image: "/images/printing/commercial-print-showcase.png",
    imageAlt: {
      en: "Illustrative printed posters and promotional graphics",
      hi: "पोस्टर और ग्राफिक प्रिंटिंग की प्रतीकात्मक झलक",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I need Poster design and printing services. Please share details and a quotation.",
  },
  {
    id: "pamphlet-printing",
    slug: "pamphlet-printing",
    category: "printing",
    priority: "secondary",
    title: {
      en: "Pamphlet & Handbill Printing",
      hi: "पंपलेट (हैंडबिल) प्रिंटिंग",
    },
    hindiAccent: "जन-संपर्क सामग्री",
    shortDescription: {
      en: "Informative pamphlets, flyers, and handbills for newspaper inserts, store openings, schools, and local campaigns.",
      hi: "दुकान के उद्घाटन, स्कूल प्रवेश, ऑफर्स और प्रचार के लिए पंपलेट व हैंडबिल छपाई।",
    },
    detailedDescription: {
      en: "Distribute your message clearly across Ramganj and Sitapur with well-organized pamphlets and handbills designed for easy reading and practical distribution.",
      hi: "कम शब्दों और आकर्षक लेआउट में अपनी पूरी बात ग्राहकों तक पहुँचाने के लिए पंपलेट (पर्चे) सबसे प्रभावी माध्यम हैं। हम डिज़ाइन से लेकर छपाई तक संपूर्ण सुविधा देते हैं।",
    },
    highlights: {
      en: [
        "Clear sectioning for offers, address, and contact numbers",
        "Single-colour and multi-colour design layouts",
        "Ideal for shop launches, admissions, and local awareness",
      ],
      hi: [
        "ऑफर, पता और संपर्क नंबर की स्पष्ट प्रस्तुति",
        "सिंगल-कलर और मल्टी-कलर पंपलेट विकल्प",
        "उद्घाटन, स्कूल एडमिशन और प्रचार के लिए उपयुक्त",
      ],
    },
    image: "/images/printing/commercial-print-showcase.png",
    imageAlt: {
      en: "Illustrative printed pamphlets and flyers",
      hi: "पंपलेट और प्रचार सामग्री की प्रतीकात्मक झलक",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to get a quotation for Pamphlet printing. Please share details.",
  },
  {
    id: "banner-printing",
    slug: "banner-printing",
    category: "printing",
    priority: "primary",
    title: {
      en: "Banner & Flex Design / Printing",
      hi: "बैनर डिज़ाइन एवं प्रिंटिंग",
    },
    hindiAccent: "भव्य स्वागत एवं प्रचार",
    shortDescription: {
      en: "Custom banners for wedding welcome gates, stage backdrops, shop signboards, festivals, and public celebrations.",
      hi: "शादी के स्वागत द्वार, स्टेज बैकड्रॉप, दुकान के बोर्ड और त्योहारों के लिए बैनर प्रिंटिंग।",
    },
    detailedDescription: {
      en: "From welcoming the Baraat at the wedding venue to displaying your shop's name prominently on the main road, we create custom banner graphics and arrange printing to match your required dimensions.",
      hi: "विवाह स्थल पर बारात के स्वागत बैनर से लेकर दुकान के मुख्य बोर्ड और उत्सवों के बैनर तक, हम आपके नाप और आवश्यकता के अनुसार आकर्षक डिज़ाइन व प्रिंटिंग उपलब्ध कराते हैं।",
    },
    highlights: {
      en: [
        "Wedding welcome banners & family celebration backdrops",
        "Commercial shop banners and directional signage",
        "Custom graphic layout in Hindi and English",
      ],
      hi: [
        "विवाह स्वागत बैनर और पारिवारिक उत्सव बैकड्रॉप",
        "दुकान व प्रतिष्ठान के लिए व्यावसायिक बैनर",
        "हिंदी और अंग्रेज़ी में कस्टम ग्राफिक डिज़ाइन",
      ],
    },
    image: "/images/printing/commercial-print-showcase.png",
    imageAlt: {
      en: "Illustrative banner and large-format graphic design",
      hi: "बैनर और ग्राफिक डिज़ाइन की प्रतीकात्मक झलक",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Banner design and printing. Please share size options and a quotation.",
  },
  {
    id: "custom-printing-graphics",
    slug: "custom-printing-graphics",
    category: "printing",
    priority: "secondary",
    title: {
      en: "Other Printing & Graphics Services",
      hi: "अन्य प्रिंटिंग एवं ग्राफिक डिज़ाइन कार्य",
    },
    hindiAccent: "संपूर्ण ग्राफिक्स समाधान",
    shortDescription: {
      en: "Custom graphic design, ceremony cards (Mundan, Griha Pravesh, Inauguration), bill books, and tailored print jobs.",
      hi: "मुंडन, गृह प्रवेश, उद्घाटन कार्ड, रसीद/बिल बुक और अन्य कस्टम ग्राफिक व प्रिंटिंग कार्य।",
    },
    detailedDescription: {
      en: "Have a specific printing or graphic design need? From Griha Pravesh and Mundan invitation cards to shop stationery and festive announcements, talk to us about your requirement for a tailored solution.",
      hi: "शादी कार्ड और व्यावसायिक प्रचार सामग्री के अलावा भी किसी भी प्रकार के निमंत्रण पत्र, दुकान की स्टेशनरी या कस्टम ग्राफिक डिज़ाइन के लिए आप हमसे संपर्क कर सकते हैं।",
    },
    highlights: {
      en: [
        "Griha Pravesh, Mundan, Birthday & Inauguration cards",
        "Custom graphic design & Hindi/English typesetting",
        "Personalised consultation for quantity and format",
      ],
      hi: [
        "गृह प्रवेश, मुंडन, जन्मदिन व उद्घाटन निमंत्रण पत्र",
        "कस्टम ग्राफिक डिज़ाइन और टाइपसेटिंग",
        "आपकी आवश्यकता के अनुसार मात्रा और प्रारूप का चयन",
      ],
    },
    image: "/images/invitations/royal-wedding-cards.png",
    imageAlt: {
      en: "Illustrative custom ceremonial invitation and print design",
      hi: "कस्टम निमंत्रण पत्र और ग्राफिक्स की प्रतीकात्मक झलक",
    },
    whatsappMessage: WHATSAPP_MESSAGES.commercialPrinting,
  },
];

export const WEDDING_CHAPTERS: WeddingChapter[] = [
  {
    number: "01",
    id: "roka-sagai",
    title: { en: "Roka & Engagement", hi: "रोका एवं सगाई (रिंग सेरेमनी)" },
    hindiLabel: "शगुन की शुरुआत",
    subtitle: {
      en: "Where Two Families Unite in Celebration",
      hi: "दो परिवारों के आत्मीय मिलन का प्रथम उत्सव",
    },
    description: {
      en: "Capturing the formal blessings, Tilak ceremony, exchange of rings, and the first celebratory portraits of the couple surrounded by elders.",
      hi: "तिलक, आशीर्वाद, अंगूठी पहनाने की रस्म और परिवार के बड़ों के साथ कपल के पहले यादगार पोर्ट्रेट।",
    },
    image: "/images/ceremonies/ring-engagement.png",
    paletteAccent: "gold",
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Roka / Engagement photography and videography.",
  },
  {
    number: "02",
    id: "pre-wedding",
    title: { en: "Pre-Wedding Story", hi: "प्री-वेडिंग शूट" },
    hindiLabel: "हमसफ़र की कहानी",
    subtitle: {
      en: "Editorial Portraits Before the Festive Rush",
      hi: "विवाह की रस्मों से पहले कपल के खास पल",
    },
    description: {
      en: "Thoughtfully planned couple portraits and cinematic video sequences in serene outdoor or architectural settings.",
      hi: "शांत और सुंदर वातावरण में कपल के कलात्मक फोटो और सिनेमैटिक वीडियो शूट।",
    },
    image: "/images/pre-wedding/couple-heritage.png",
    paletteAccent: "maroon",
    whatsappMessage: WHATSAPP_MESSAGES.preWedding,
  },
  {
    number: "03",
    id: "mehendi",
    title: { en: "Mehendi & Sangeet", hi: "मेहंदी एवं महिला संगीत" },
    hindiLabel: "रंग और सरगम",
    subtitle: {
      en: "Henna Artistry, Dholak Rhythms & Family Dance",
      hi: "हाथों की मेहंदी, ढोलक की थाप और पारिवारिक नृत्य",
    },
    description: {
      en: "Documenting intricate bridal henna designs, joyful folk songs, and high-energy Sangeet performances with family and friends.",
      hi: "दुल्हन की मेहंदी के बारीक डिज़ाइन, पारंपरिक गीतों और संगीत की शाम के उत्साहपूर्ण नृत्य का कवरेज।",
    },
    image: "/images/ceremonies/haldi-mehendi.png",
    paletteAccent: "vermilion",
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Mehendi and Sangeet photography and videography.",
  },
  {
    number: "04",
    id: "haldi",
    title: { en: "Haldi Utsav", hi: "हल्दी उत्सव" },
    hindiLabel: "पीले फूलों की रौनक",
    subtitle: {
      en: "Golden Turmeric, Marigold Petals & Unfiltered Joy",
      hi: "हल्दी का शगुन, गेंदे के फूल और आँगन की खुशियां",
    },
    description: {
      en: "Preserving the vibrant yellows, playful family rituals, and heartfelt emotions of the morning Haldi ceremony.",
      hi: "हल्दी की रस्म के चटक पीले रंग, फूलों की बौछार और परिवार के हँसी-खुशी भरे पलों की फोटोग्राफी।",
    },
    image: "/images/ceremonies/haldi-mehendi.png",
    paletteAccent: "gold",
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Haldi ceremony photography and videography.",
  },
  {
    number: "05",
    id: "shubh-vivah",
    title: { en: "Baraat, Jaimala & Pheras", hi: "बारात, जयमाला एवं शुभ विवाह" },
    hindiLabel: "शुभ मुहूर्त",
    subtitle: {
      en: "The Grand Procession & Sacred Mandap Vows",
      hi: "बारात का स्वागत, वरमाला की भव्यता और मंडप के सात फेरे",
    },
    description: {
      en: "From the energetic arrival of the Baraat and the grand Jaimala exchange to the quiet reverence of Kanyadaan, Saptapadi, and Vidaai.",
      hi: "बारात के उत्साह और जयमाला की भव्यता से लेकर कन्यादान, सात फेरों की पवित्रता और भावुक विदाई तक का संपूर्ण कवरेज।",
    },
    image: "/images/wedding/pheras-ceremony.png",
    paletteAccent: "maroon",
    whatsappMessage: WHATSAPP_MESSAGES.weddingPhotography,
  },
  {
    number: "06",
    id: "reception",
    title: { en: "Reception & Blessings", hi: "रिसेप्शन एवं आशीर्वाद समारोह" },
    hindiLabel: "नवदंपति अभिनंदन",
    subtitle: {
      en: "An Evening of Elegance, Portraits & Family Hospitality",
      hi: "नवविवाहित जोड़े का स्वागत और पारिवारिक अभिनंदन",
    },
    description: {
      en: "Polished stage portraits, couple editorial frames, and warm documentation of guests congratulating the newlyweds.",
      hi: "स्टेज पर नवदंपति के आकर्षक पोर्ट्रेट और मेहमानों के आशीर्वाद व शुभकामनाओं का सुव्यवस्थित चित्रण।",
    },
    image: "/images/hero/royal-mandap-couple.png",
    paletteAccent: "ivory",
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Wedding and Reception coverage.",
  },
];

export const PHOTOGRAPHY_PACKAGES: PhotographyPackage[] = [
  {
    id: "shubh-muhurat",
    name: {
      en: "Shubh Muhurat",
      hi: "शुभ मुहूर्त पैकेज",
    },
    hindiSubtitle: "सगाई, तिलक व एकल उत्सव हेतु",
    badge: {
      en: "Intimate & Single-Event Coverage",
      hi: "एकल कार्यक्रम कवरेज",
    },
    featured: false,
    positioning: {
      en: "Ideal for engagements, ring ceremonies, Tilak, Haldi/Mehendi, birthdays, or individual wedding functions.",
      hi: "सगाई, रिंग सेरेमनी, तिलक, हल्दी/मेहंदी, जन्मदिन या किसी एक विशेष वैवाहिक कार्यक्रम के लिए उपयुक्त।",
    },
    inclusions: {
      en: [
        "Photography coverage for the selected event or ceremony",
        "Professionally edited high-resolution photographs",
        "Optional event videography based on your requirements",
        "Pre-event discussion of ceremony timings and key family portraits",
        "Flexible scope tailored to single-function schedules",
      ],
      hi: [
        "चुने गए कार्यक्रम या रस्म की संपूर्ण फोटोग्राफी",
        "प्रोफेशनल रूप से एडिट किए गए स्पष्ट फ़ोटो",
        "आपकी आवश्यकता के अनुसार वीडियोग्राफी का विकल्प",
        "कार्यक्रम की समय-सारणी और मुख्य पारिवारिक फोटो की पूर्व योजना",
        "एक दिवसीय या एकल समारोह के अनुसार लचीली व्यवस्था",
      ],
    },
    consultationNote: {
      en: "Final deliverables, coverage hours, and quotation are confirmed during consultation based on your event details.",
      hi: "अंतिम डिलीवरेबल्स, समय और कोटेशन आपके कार्यक्रम के विवरण के अनुसार बातचीत में तय किए जाते हैं।",
    },
    ctaLabel: {
      en: "Request a Quote",
      hi: "कोटेशन प्राप्त करें",
    },
    whatsappMessage: WHATSAPP_MESSAGES.packageShubhMuhurat,
  },
  {
    id: "wedding-celebrations",
    name: {
      en: "Wedding Celebrations",
      hi: "वेडिंग सेलिब्रेशन्स पैकेज",
    },
    hindiSubtitle: "संपूर्ण विवाह फोटोग्राफी एवं वीडियोग्राफी",
    badge: {
      en: "Most Popular for Weddings",
      hi: "विवाह हेतु सर्वाधिक लोकप्रिय",
    },
    featured: true,
    positioning: {
      en: "Designed for couples and families seeking complete photography and videography across their core marriage celebrations.",
      hi: "शादी के मुख्य कार्यक्रमों के लिए फोटोग्राफी और वीडियोग्राफी दोनों चाहने वाले परिवारों के लिए संपूर्ण पैकेज।",
    },
    inclusions: {
      en: [
        "Complete wedding photography covering rituals, portraits & family moments",
        "Full wedding videography preserving ceremonies and celebrations",
        "Professionally edited photograph collection",
        "A wedding highlights video, subject to the agreed package scope",
        "Coverage planned around your agreed ceremony schedule (e.g., Haldi, Baraat, Jaimala, Pheras, Vidaai)",
      ],
      hi: [
        "विवाह की रस्मों, कपल पोर्ट्रेट और पारिवारिक पलों की संपूर्ण फोटोग्राफी",
        "समारोह और रीति-रिवाजों की पूर्ण वेडिंग वीडियोग्राफी",
        "प्रोफेशनल रूप से एडिट किए गए विवाह फ़ोटो का संग्रह",
        "तय किए गए पैकेज के अनुसार आकर्षक वेडिंग हाइलाइट्स वीडियो",
        "हल्दी, बारात, जयमाला, फेरे और विदाई सहित तय कार्यक्रमों के अनुसार कवरेज योजना",
      ],
    },
    consultationNote: {
      en: "Scope, number of functions covered, album preferences, and pricing are finalised transparently during your enquiry.",
      hi: "शामिल कार्यक्रमों की संख्या, एल्बम विकल्प और शुल्क आपकी आवश्यकता के अनुसार बातचीत में तय किए जाते हैं।",
    },
    ctaLabel: {
      en: "Request a Quote",
      hi: "कोटेशन प्राप्त करें",
    },
    whatsappMessage: WHATSAPP_MESSAGES.packageWeddingCelebrations,
  },
  {
    id: "royal-shaadi-cinema",
    name: {
      en: "Royal Shaadi Cinema",
      hi: "रॉयल शादी सिनेमा पैकेज",
    },
    hindiSubtitle: "सिनेमैटिक वेडिंग फिल्म एवं बहु-दिवसीय उत्सव",
    badge: {
      en: "Comprehensive & Cinematic Experience",
      hi: "सिनेमैटिक एवं विस्तृत अनुभव",
    },
    featured: false,
    positioning: {
      en: "For families who want a comprehensive, story-driven visual archive across multiple wedding functions with cinematic film editing.",
      hi: "कई दिनों के वैवाहिक कार्यक्रमों, प्री-वेडिंग और सिनेमैटिक फिल्म एडिटिंग चाहने वाले परिवारों के लिए विशेष पैकेज।",
    },
    inclusions: {
      en: [
        "Extensive photography coverage tailored to multi-day wedding celebrations",
        "Full wedding and pre-function videography",
        "A crafted cinematic wedding highlights film",
        "Optional pre-wedding shoot or engagement ceremony coverage",
        "Customised coverage across multiple functions (Mehendi, Haldi, Sangeet, Wedding, Reception) where agreed",
        "Dedicated consultation for custom video-editing & presentation requirements",
      ],
      hi: [
        "बहु-दिवसीय वैवाहिक उत्सवों के अनुरूप विस्तृत फोटोग्राफी कवरेज",
        "सभी प्रमुख रस्मों और समारोहों की वीडियोग्राफी",
        "कलात्मक रूप से एडिट की गई सिनेमैटिक वेडिंग हाइलाइट्स फिल्म",
        "प्री-वेडिंग शूट या सगाई समारोह कवरेज जोड़ने का विकल्प",
        "मेहंदी, हल्दी, संगीत, विवाह और रिसेप्शन सहित तय कार्यक्रमों का कस्टम कवरेज",
        "विशेष वीडियो एडिटिंग और प्रस्तुति के लिए व्यक्तिगत परामर्श",
      ],
    },
    consultationNote: {
      en: "All inclusions, multi-day schedules, and deliverables are custom-configured and confirmed during consultation.",
      hi: "सभी सेवाएं, दिनों की संख्या और अंतिम डिलीवरेबल्स आपके परिवार की आवश्यकतानुसार परामर्श के दौरान तय किए जाते हैं।",
    },
    ctaLabel: {
      en: "Request a Quote",
      hi: "कोटेशन प्राप्त करें",
    },
    whatsappMessage: WHATSAPP_MESSAGES.packageRoyalShaadiCinema,
  },
];

export const INVITATION_STYLE_DIRECTIONS: InvitationStyleDirection[] = [
  {
    id: "traditional-red-gold",
    styleNumber: "I",
    title: {
      en: "Traditional Vermilion & Antique Gold",
      hi: "पारंपरिक सिंदूरी लाल एवं स्वर्ण शैली",
    },
    subtitle: {
      en: "Auspicious motifs, classic borders & timeless ceremonial warmth",
      hi: "मंगल कलश, पारंपरिक बेल-बूटे और शास्त्रीय गरिमा",
    },
    description: {
      en: "Inspired by classic North Indian marriage invitations featuring rich sindoor-red and maroon tones paired with ornamental gold borders and devotional headers.",
      hi: "गहरे लाल व मैरून रंग के साथ सुनहरे पारंपरिक बॉर्डर और शुभ मांगलिक प्रतीकों से सुसज्जित सदाबहार विवाह निमंत्रण शैली।",
    },
    colorScheme: {
      bg: "#641A27",
      border: "#D9BE82",
      accent: "#E5C46A",
      text: "#FFF7E9",
      label: { en: "Sindoor Maroon & Gold", hi: "सिंदूरी मैरून व गोल्ड" },
    },
    suitedFor: {
      en: "Traditional Hindu weddings, Tilak & family-elder invitations",
      hi: "पारंपरिक विवाह, तिलक एवं पारिवारिक निमंत्रण",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to discuss Traditional Red & Gold Wedding Invitation Cards. Please share design options and a quotation.",
  },
  {
    id: "royal-ivory-gold",
    styleNumber: "II",
    title: {
      en: "Royal Ivory & Ornamental Filigree",
      hi: "रॉयल आइवरी एवं सुनहरी नक्काशी",
    },
    subtitle: {
      en: "Warm cream surfaces with delicate gold jali and lotus detailing",
      hi: "हल्के क्रीम धरातल पर बारीक सुनहरी जाली और कमल की आकृतियाँ",
    },
    description: {
      en: "An understated, regal direction where warm ivory and parchment tones let crisp Hindi or English calligraphy and fine ornamental corners shine.",
      hi: "आइवरी और क्रीम रंग के कार्ड जिन पर गहरे मैरून व गोल्डन अक्षरों में छपा निमंत्रण अत्यंत सौम्य और राजसी प्रतीत होता है।",
    },
    colorScheme: {
      bg: "#FFF7E9",
      border: "#B89555",
      accent: "#641A27",
      text: "#29201D",
      label: { en: "Warm Ivory & Antique Gold", hi: "वार्म आइवरी व एंटीक गोल्ड" },
    },
    suitedFor: {
      en: "Daytime ceremonies, Receptions & elegant bilingual invitations",
      hi: "रिसेप्शन, सगाई और द्विभाषी (हिंदी-अंग्रेज़ी) निमंत्रण",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I am interested in Ivory & Gold style Wedding Invitation Cards. Please share samples and quotation.",
  },
  {
    id: "contemporary-maroon",
    styleNumber: "III",
    title: {
      en: "Contemporary Royal Wine & Monogram",
      hi: "आधुनिक रॉयल वाइन एवं कपल मोनोग्राम",
    },
    subtitle: {
      en: "Clean editorial typography balanced with modern Indian geometry",
      hi: "आधुनिक लेआउट, कपल के नाम के आद्याक्षर और संतुलित टाइपोग्राफी",
    },
    description: {
      en: "Designed for couples who appreciate a clean, modern layout with structured itinerary cards for Haldi, Mehendi, Shaadi, and Reception.",
      hi: "उन परिवारों के लिए जो पारंपरिक गरिमा के साथ साफ-सुथरा आधुनिक लेआउट और प्रत्येक कार्यक्रम का व्यवस्थित विवरण चाहते हैं।",
    },
    colorScheme: {
      bg: "#43101B",
      border: "#E5C46A",
      accent: "#D9BE82",
      text: "#F2E3C9",
      label: { en: "Royal Wine & Champagne", hi: "रॉयल वाइन व शैंपेन गोल्ड" },
    },
    suitedFor: {
      en: "Multi-event wedding suites, Engagement & Reception invites",
      hi: "बहु-दिवसीय विवाह कार्यक्रम एवं आधुनिक सगाई कार्ड",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Contemporary Maroon Wedding Cards. Please share options.",
  },
  {
    id: "floral-festive",
    styleNumber: "IV",
    title: {
      en: "Marigold & Lotus Botanical Suite",
      hi: "कमल एवं गेंदा पुष्प उत्सव शैली",
    },
    subtitle: {
      en: "Celebratory floral garlands, botanical arches & warm parchment",
      hi: "फूलों की तोरण, वंदनवार और उत्सवधर्मी भारतीय कला",
    },
    description: {
      en: "Brings the festive warmth of marigold torans, rose petals, and botanical illustrations into joyful invitations for weddings and pre-wedding functions.",
      hi: "भारतीय विवाह मंडप के फूलों, वंदनवार और कमल की पंखुड़ियों से प्रेरित जीवंत और आकर्षक निमंत्रण पत्र।",
    },
    colorScheme: {
      bg: "#F2E3C9",
      border: "#B52632",
      accent: "#6C7C60",
      text: "#29201D",
      label: { en: "Parchment, Vermilion & Sage", hi: "पार्चमेंट, सिंदूरी व सेज" },
    },
    suitedFor: {
      en: "Weddings, Haldi/Mehendi invites, Griha Pravesh & family functions",
      hi: "विवाह, हल्दी-मेहंदी, गृह प्रवेश और पारिवारिक समारोह",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to see Floral Indian Wedding Invitation Card options and get a quotation.",
  },
  {
    id: "heritage-arch-jali",
    styleNumber: "V",
    title: {
      en: "Heritage Jharokha & Mandap Arch",
      hi: "हेरिटेज झरोखा एवं मेहराब डिज़ाइन",
    },
    subtitle: {
      en: "Architectural cusped arches inspired by royal Indian courtyards",
      hi: "राजस्थानी व अवधी स्थापत्य के झरोखों और मेहराबों से प्रेरित",
    },
    description: {
      en: "Frames the bride and groom names within an ornate cusped arch (mehrab) and traditional geometric jali latticework for an unmistakable sense of grandeur.",
      hi: "शाही महलों के झरोखों, मेहराबों और पारंपरिक जाली पैटर्न के भीतर वर-वधू के नाम और विवाह विवरण की भव्य प्रस्तुति।",
    },
    colorScheme: {
      bg: "#521420",
      border: "#D9BE82",
      accent: "#B52632",
      text: "#FFF7E9",
      label: { en: "Deep Palace Maroon & Gold", hi: "पैलेस मैरून व एंटीक गोल्ड" },
    },
    suitedFor: {
      en: "Grand wedding invitations & keepsake family cards",
      hi: "भव्य विवाह निमंत्रण एवं यादगार पारिवारिक कार्ड",
    },
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I am interested in Heritage Arch style Wedding Invitation Cards. Please share details.",
  },
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: { en: "All Previews", hi: "सभी झलकियाँ" } },
  { id: "wedding", label: { en: "Wedding Ceremonies", hi: "विवाह समारोह" } },
  { id: "portraits", label: { en: "Bridal & Couple", hi: "ब्राइडल व कपल" } },
  { id: "pre-wedding", label: { en: "Pre-Wedding", hi: "प्री-वेडिंग" } },
  { id: "ceremonies", label: { en: "Haldi, Mehendi & Sagai", hi: "हल्दी, मेहंदी व सगाई" } },
  { id: "invitations", label: { en: "Wedding Cards", hi: "शादी कार्ड" } },
  { id: "printing", label: { en: "Printing & Graphics", hi: "प्रिंटिंग व ग्राफिक्स" } },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-mandap-couple",
    category: "portraits",
    categoryLabel: { en: "Bridal & Couple Portraits", hi: "वर-वधू पोर्ट्रेट" },
    title: {
      en: "Royal Mandap Couple Portrait",
      hi: "भव्य मंडप में वर-वधू पोर्ट्रेट",
    },
    caption: {
      en: "Illustrative visual direction showcasing warm ceremonial lighting, floral mandap framing, and rich bridal colours.",
      hi: "फूलों से सजे मंडप और पारंपरिक परिधान में वर-वधू के पोर्ट्रेट की प्रतीकात्मक कलात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of an Indian bride and groom beneath a floral wedding mandap",
      hi: "मंडप के नीचे भारतीय दूल्हा-दुल्हन की प्रतीकात्मक तस्वीर",
    },
    src: "/images/hero/royal-mandap-couple.png",
    aspectRatio: "landscape",
    featured: true,
    isPlaceholder: true,
    whatsappMessage: WHATSAPP_MESSAGES.weddingPhotography,
  },
  {
    id: "gal-bridal-detail",
    category: "portraits",
    categoryLabel: { en: "Bridal Portraits", hi: "ब्राइडल पोर्ट्रेट" },
    title: {
      en: "Crimson & Zardozi Bridal Portrait",
      hi: "पारंपरिक दुल्हन श्रृंगार पोर्ट्रेट",
    },
    caption: {
      en: "Illustrative bridal portrait highlighting intricate embroidery, traditional jewellery, and henna-adorned hands.",
      hi: "पारंपरिक आभूषण, ज़री वर्क और मेहंदी से सजे हाथों के साथ दुल्हन के पोर्ट्रेट की प्रतीकात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of an Indian bride in crimson lehenga and gold jewellery",
      hi: "लाल लहंगे और पारंपरिक आभूषणों में भारतीय दुल्हन की प्रतीकात्मक तस्वीर",
    },
    src: "/images/wedding/bridal-portrait.png",
    aspectRatio: "portrait",
    featured: true,
    isPlaceholder: true,
    whatsappMessage: WHATSAPP_MESSAGES.weddingPhotography,
  },
  {
    id: "gal-pheras-ritual",
    category: "wedding",
    categoryLabel: { en: "Wedding Ceremonies", hi: "विवाह की रस्में" },
    title: {
      en: "Sacred Agni & Saptapadi Moments",
      hi: "सप्तपदी एवं मंडप की पावन रस्में",
    },
    caption: {
      en: "Illustrative ceremony composition focusing on candid emotions, petal showers, and sacred wedding rituals.",
      hi: "पवित्र अग्नि के समक्ष फेरों की रस्म और पुष्प वर्षा के भावनात्मक पलों की प्रतीकात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of an Indian wedding pheras ceremony around the sacred fire",
      hi: "विवाह में सात फेरों की रस्म की प्रतीकात्मक तस्वीर",
    },
    src: "/images/wedding/pheras-ceremony.png",
    aspectRatio: "landscape",
    featured: true,
    isPlaceholder: true,
    whatsappMessage: WHATSAPP_MESSAGES.weddingPhotography,
  },
  {
    id: "gal-wedding-cards",
    category: "invitations",
    categoryLabel: { en: "Wedding Invitations", hi: "शादी कार्ड" },
    title: {
      en: "Maroon, Ivory & Gold Invitation Suite",
      hi: "मैरून एवं गोल्डन शादी कार्ड संग्रह",
    },
    caption: {
      en: "Illustrative showcase of traditional Indian wedding invitation cards with ornate gold borders and festive detailing.",
      hi: "सुनहरे बॉर्डर, पारंपरिक आकृतियों और आकर्षक लेआउट वाले शादी कार्डों की प्रतीकात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of luxury Indian wedding invitation cards in maroon and ivory with gold borders",
      hi: "पारंपरिक भारतीय शादी कार्ड डिज़ाइन की प्रतीकात्मक झलक",
    },
    src: "/images/invitations/royal-wedding-cards.png",
    aspectRatio: "square",
    featured: true,
    isPlaceholder: true,
    whatsappMessage: WHATSAPP_MESSAGES.weddingCards,
  },
  {
    id: "gal-pre-wedding-arches",
    category: "pre-wedding",
    categoryLabel: { en: "Pre-Wedding Shoot", hi: "प्री-वेडिंग शूट" },
    title: {
      en: "Golden Hour Heritage Courtyard Shoot",
      hi: "गोल्डन आवर प्री-वेडिंग कपल शूट",
    },
    caption: {
      en: "Illustrative pre-wedding composition set beneath carved arches with warm sunset lighting.",
      hi: "सुनहरी शाम की रोशनी और पारंपरिक मेहराबों के बीच कपल पोर्ट्रेट की प्रतीकात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of an Indian couple pre-wedding shoot in a heritage courtyard",
      hi: "प्री-वेडिंग कपल फोटोग्राफी की प्रतीकात्मक तस्वीर",
    },
    src: "/images/pre-wedding/couple-heritage.png",
    aspectRatio: "portrait",
    featured: false,
    isPlaceholder: true,
    whatsappMessage: WHATSAPP_MESSAGES.preWedding,
  },
  {
    id: "gal-haldi-mehendi",
    category: "ceremonies",
    categoryLabel: { en: "Haldi & Mehendi", hi: "हल्दी व मेहंदी" },
    title: {
      en: "Marigold Garlands & Bridal Mehendi",
      hi: "हल्दी-मेहंदी के उत्सवधर्मी रंग",
    },
    caption: {
      en: "Illustrative preview celebrating the vibrant marigold yellows, henna artistry, and festive warmth of pre-wedding rituals.",
      hi: "गेंदे के फूलों, मेहंदी की बारीक कलाकारी और उत्सव के रंगों की प्रतीकात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of Indian Haldi and Mehendi wedding festivities",
      hi: "हल्दी और मेहंदी समारोह की प्रतीकात्मक तस्वीर",
    },
    src: "/images/ceremonies/haldi-mehendi.png",
    aspectRatio: "square",
    featured: false,
    isPlaceholder: true,
    whatsappMessage:
      "Hello Anuj Studio and Graphics, I would like to enquire about Haldi and Mehendi coverage.",
  },
  {
    id: "gal-ring-ceremony",
    category: "ceremonies",
    categoryLabel: { en: "Engagement & Sagai", hi: "सगाई समारोह" },
    title: {
      en: "Sagai & Ring Ceremony Celebration",
      hi: "सगाई एवं रिंग सेरेमनी कवरेज",
    },
    caption: {
      en: "Illustrative engagement coverage highlighting the ring exchange and floral stage celebration.",
      hi: "सगाई समारोह में रिंग एक्सचेंज और पारिवारिक उत्साह की प्रतीकात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of an Indian engagement ring exchange ceremony",
      hi: "रिंग सेरेमनी की प्रतीकात्मक तस्वीर",
    },
    src: "/images/ceremonies/ring-engagement.png",
    aspectRatio: "landscape",
    featured: false,
    isPlaceholder: true,
    whatsappMessage: WHATSAPP_MESSAGES.engagementAndEvents,
  },
  {
    id: "gal-commercial-print",
    category: "printing",
    categoryLabel: { en: "Printing & Graphics", hi: "प्रिंटिंग एवं ग्राफिक्स" },
    title: {
      en: "Visiting Cards, Posters, Pamphlets & Banners",
      hi: "विज़िटिंग कार्ड, पोस्टर, पंपलेट व बैनर",
    },
    caption: {
      en: "Illustrative display of commercial printing and graphic design materials for local businesses and events.",
      hi: "व्यावसायिक विज़िटिंग कार्ड, प्रचार पोस्टर, पंपलेट और बैनर डिज़ाइन की प्रतीकात्मक झलक।",
    },
    alt: {
      en: "Illustrative preview of printed visiting cards, posters, pamphlets, and banners",
      hi: "विज़िटिंग कार्ड, पोस्टर और पंपलेट प्रिंटिंग की प्रतीकात्मक झलक",
    },
    src: "/images/printing/commercial-print-showcase.png",
    aspectRatio: "landscape",
    featured: false,
    isPlaceholder: true,
    whatsappMessage: WHATSAPP_MESSAGES.commercialPrinting,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-photography-types",
    category: "photography",
    question: {
      en: "What types of photography and videography do you provide?",
      hi: "आप किस प्रकार की फोटोग्राफी और वीडियोग्राफी सेवाएं प्रदान करते हैं?",
    },
    answer: {
      en: "Anuj Studio and Graphics provides wedding photography, wedding videography, cinematic wedding films (subject to agreed package scope), pre-wedding photography and videography, engagement and ring ceremony coverage, Haldi and Mehendi coverage, family event coverage (birthdays, anniversaries, Mundan, Griha Pravesh), and standalone video editing.",
      hi: "अनुज स्टूडियो एंड ग्राफिक्स में हम वेडिंग फोटोग्राफी, वेडिंग वीडियोग्राफी, सिनेमैटिक वेडिंग फिल्म्स, प्री-वेडिंग शूट, सगाई (रिंग सेरेमनी), हल्दी-मेहंदी, जन्मदिन, सालगिरह, मुंडन, गृह प्रवेश व अन्य पारिवारिक कार्यक्रमों की फोटोग्राफी तथा वीडियो एडिटिंग सेवाएं प्रदान करते हैं।",
    },
  },
  {
    id: "faq-weddings-prewedding",
    category: "photography",
    question: {
      en: "Do you cover both full weddings and pre-wedding shoots?",
      hi: "क्या आप संपूर्ण विवाह और प्री-वेडिंग शूट दोनों कवर करते हैं?",
    },
    answer: {
      en: "Yes. Indian weddings and marriage-related functions are our primary focus. You can book us for a complete multi-function wedding celebration, a single ceremony, or a dedicated pre-wedding photography and video shoot.",
      hi: "हाँ, भारतीय विवाह और उससे जुड़े सभी कार्यक्रम हमारी प्रमुख विशेषता हैं। आप संपूर्ण विवाह उत्सव, किसी एक रस्म, या प्री-वेडिंग फोटो और वीडियो शूट के लिए बुकिंग कर सकते हैं।",
    },
  },
  {
    id: "faq-engagement-functions",
    category: "photography",
    question: {
      en: "Can we book the studio only for an engagement, Haldi, or birthday function?",
      hi: "क्या हम केवल सगाई, हल्दी, जन्मदिन या किसी छोटे पारिवारिक कार्यक्रम के लिए बुकिंग कर सकते हैं?",
    },
    answer: {
      en: "Absolutely. Our 'Shubh Muhurat' package direction and custom single-event bookings are specifically intended for engagements, Tilak, Roka, Haldi, Mehendi, birthdays, and family ceremonies.",
      hi: "जी हाँ, बिल्कुल। हमारा 'शुभ मुहूर्त' पैकेज और एकल-कार्यक्रम बुकिंग सगाई, तिलक, रोका, हल्दी, मेहंदी, जन्मदिन और पारिवारिक अनुष्ठानों के लिए ही बनाई गई है।",
    },
  },
  {
    id: "faq-video-editing",
    category: "photography",
    question: {
      en: "Do you offer video editing services for existing footage?",
      hi: "क्या आप वीडियो एडिटिंग की सेवा भी देते हैं?",
    },
    answer: {
      en: "Yes, we provide video editing services according to customer requirements—whether as part of our wedding videography packages or for editing event recordings and highlight videos. Contact us on WhatsApp or by phone to discuss your project.",
      hi: "हाँ, हम ग्राहकों की आवश्यकता के अनुसार वीडियो एडिटिंग सेवा प्रदान करते हैं—चाहे वह हमारे वेडिंग पैकेज का हिस्सा हो या किसी कार्यक्रम की फुटेज को व्यवस्थित रूप से एडिट करना हो।",
    },
  },
  {
    id: "faq-wedding-cards",
    category: "printing",
    question: {
      en: "Do you design and print wedding invitation cards?",
      hi: "क्या आपके यहाँ शादी के कार्ड (विवाह निमंत्रण पत्र) डिज़ाइन और प्रिंट किए जाते हैं?",
    },
    answer: {
      en: "Yes. Wedding invitation card printing is one of our core services. We assist you in selecting traditional or contemporary card designs, preparing accurate Hindi or English invitation wording, and printing cards for weddings, engagements, and other ceremonies.",
      hi: "जी हाँ, शादी कार्ड प्रिंटिंग हमारी मुख्य सेवाओं में से एक है। हम पारंपरिक और आधुनिक कार्ड चयन, हिंदी व अंग्रेज़ी में शुद्ध मैटर तैयार करने और साफ-सुथरी छपाई की संपूर्ण सुविधा देते हैं।",
    },
  },
  {
    id: "faq-commercial-printing",
    category: "printing",
    question: {
      en: "Can I enquire about visiting cards, posters, pamphlets, and banners?",
      hi: "क्या मैं विज़िटिंग कार्ड, पोस्टर, पंपलेट और बैनर छपवाने के लिए संपर्क कर सकता हूँ?",
    },
    answer: {
      en: "Yes. In addition to wedding invitations, we handle graphic design and printing for visiting cards, posters, pamphlets/handbills, flex/banners, and other custom printing requirements for individuals, shops, schools, and local businesses.",
      hi: "हाँ, शादी कार्ड के अतिरिक्त हम दुकानदारों, विद्यालयों, संस्थानों और आम ग्राहकों के लिए विज़िटिंग कार्ड, पोस्टर, पंपलेट (हैंडबिल), बैनर और अन्य सभी ग्राफिक्स व प्रिंटिंग कार्य करते हैं।",
    },
  },
  {
    id: "faq-quotation-process",
    category: "general",
    question: {
      en: "How do I get a quotation for photography or printing?",
      hi: "फोटोग्राफी या प्रिंटिंग के लिए कोटेशन (अनुमानित खर्च) कैसे प्राप्त करें?",
    },
    answer: {
      en: "Because every wedding schedule and printing order differs in dates, coverage scope, card style, and quantity, we provide customised quotations. Simply message us on WhatsApp at +91 90054 00712, call the studio directly, or use the enquiry form on this website with your event or printing details.",
      hi: "चूँकि हर विवाह के कार्यक्रम, दिनों की संख्या और प्रिंटिंग की मात्रा अलग होती है, इसलिए हम आपकी आवश्यकता सुनने के बाद सटीक कोटेशन देते हैं। आप +91 90054 00712 पर कॉल या व्हाट्सएप करके अथवा वेबसाइट के फॉर्म द्वारा जानकारी प्राप्त कर सकते हैं।",
    },
  },
  {
    id: "faq-custom-packages",
    category: "photography",
    question: {
      en: "Can the photography packages be customised for our family's schedule?",
      hi: "क्या फोटोग्राफी पैकेज को हमारे परिवार के कार्यक्रमों के अनुसार बदला (कस्टमाइज़) जा सकता है?",
    },
    answer: {
      en: "Yes. The three packages shown on our website—Shubh Muhurat, Wedding Celebrations, and Royal Shaadi Cinema—are flexible starting points. During consultation, we tailor the exact ceremonies covered, photography/video deliverables, and schedule around your needs.",
      hi: "जी हाँ। वेबसाइट पर दिए गए तीनों पैकेज (शुभ मुहूर्त, वेडिंग सेलिब्रेशन्स और रॉयल शादी सिनेमा) आपकी सुविधा के लिए हैं। बातचीत के दौरान हम आपके कार्यक्रमों और बजट के अनुसार इन्हें पूरी तरह कस्टमाइज़ कर सकते हैं।",
    },
  },
  {
    id: "faq-location-contact",
    category: "general",
    question: {
      en: "Where is Anuj Studio and Graphics located and how can I contact you?",
      hi: "अनुज स्टूडियो एंड ग्राफिक्स कहाँ स्थित है और संपर्क कैसे करें?",
    },
    answer: {
      en: "We are located in Ramganj, Sitapur, Uttar Pradesh, India. With 12 years of experience serving local families and businesses, you can reach us directly by calling +91 90054 00712 or messaging us on WhatsApp.",
      hi: "हमारा स्टूडियो रामगंज, सीतापुर, उत्तर प्रदेश में स्थित है। 12 वर्षों के अनुभव के साथ हम स्थानीय परिवारों और व्यापारियों की सेवा कर रहे हैं। आप हमसे +91 90054 00712 पर कॉल या व्हाट्सएप द्वारा सीधे जुड़ सकते हैं।",
    },
  },
];

