// One catalog powers both the home-page cards and their detail pages.
// Keep each service's English and Nepali copy together; add an article pair only
// after Dr. Santosh has reviewed the longer content.
window.SERVICES = [
  {
    id: "general-medical-concerns",
    featured: true,
    en: { title: "General medical concerns", summary: "Assessment of new symptoms, fatigue and complex adult health concerns.", topics: ["New or persistent symptoms", "Fatigue and concerns involving more than one part of the body", "A practical plan for examination, tests or follow-up when needed"] },
    ne: { title: "सामान्य स्वास्थ्य समस्या", summary: "नयाँ लक्षण, थकान र जटिल वयस्क स्वास्थ्य समस्याको मूल्याङ्कन।", topics: ["नयाँ वा लामो समयदेखि रहेका लक्षण", "थकान र शरीरका धेरै भागसँग सम्बन्धित समस्या", "आवश्यक परे परीक्षण, जाँच वा फलो-अपको व्यावहारिक योजना"] },
  },
  {
    id: "diabetes-metabolic-health",
    featured: true,
    en: { title: "Diabetes & metabolic health", summary: "Blood-sugar review, treatment monitoring and practical daily-life plans.", topics: ["Understanding blood-glucose and HbA1c results", "Reviewing treatment and follow-up needs", "Building a realistic food, activity and monitoring plan"] },
    ne: { title: "मधुमेह र मेटाबोलिक स्वास्थ्य", summary: "रगतमा चिनीको मात्रा जाँच, उपचारको अनुगमन र दैनिक जीवनका लागि व्यावहारिक योजना।", topics: ["रक्तचिनी र HbA1c रिपोर्टको अर्थ बुझ्ने", "उपचार र फलो-अपको आवश्यकता समीक्षा गर्ने", "खानपान, गतिविधि र जाँचको व्यावहारिक योजना बनाउने"] },
    article: { en: "articles/diabetes.en.md", ne: "articles/diabetes.ne.md" },
    updated: { en: "September 2026", ne: "सेप्टेम्बर २०२६" },
  },
  {
    id: "blood-pressure-heart-risk",
    featured: true,
    en: { title: "Blood pressure & heart risk", summary: "Hypertension review, risk assessment, medicine monitoring and prevention guidance.", topics: ["Reviewing blood-pressure readings", "Considering heart and blood-vessel risk", "Discussing medicines, monitoring and prevention"] },
    ne: { title: "रक्तचाप र मुटुको जोखिम", summary: "उच्च रक्तचापको समीक्षा, जोखिम मूल्याङ्कन, औषधि अनुगमन र रोकथामसम्बन्धी सल्लाह।", topics: ["रक्तचापको रेकर्ड समीक्षा गर्ने", "मुटु र रक्तनलीसम्बन्धी जोखिम बुझ्ने", "औषधि, अनुगमन र रोकथामबारे छलफल गर्ने"] },
  },
  {
    id: "thyroid-hormonal-concerns",
    featured: true,
    en: { title: "Thyroid & hormonal concerns", summary: "Interpretation of thyroid tests, symptom review and ongoing treatment monitoring.", topics: ["Understanding thyroid test results", "Reviewing symptoms in context", "Monitoring treatment and deciding when further assessment is needed"] },
    ne: { title: "थाइराइड र हर्मोनसम्बन्धी समस्या", summary: "थाइराइड जाँचको व्याख्या, लक्षणको समीक्षा र उपचारको निरन्तर अनुगमन।", topics: ["थाइराइड जाँचको नतिजा बुझ्ने", "लक्षणलाई समग्र अवस्थासँग जोडेर समीक्षा गर्ने", "उपचारको अनुगमन र थप मूल्याङ्कनको आवश्यकता बुझ्ने"] },
  },
  {
    id: "respiratory-health",
    featured: true,
    en: { title: "Respiratory health", summary: "Evaluation of cough, breathing concerns and common long-term respiratory conditions.", topics: ["Cough and breathing symptoms", "Long-term respiratory concerns", "Deciding when an in-person examination or referral is appropriate"] },
    ne: { title: "श्वासप्रश्वास स्वास्थ्य", summary: "खोकी, श्वासप्रश्वास समस्या तथा दीर्घकालीन फोक्सोसम्बन्धी अवस्थाको मूल्याङ्कन।", topics: ["खोकी र सास फेर्नेसम्बन्धी लक्षण", "दीर्घकालीन श्वासप्रश्वास समस्या", "प्रत्यक्ष परीक्षण वा रेफरल कहिले आवश्यक हुन्छ भन्ने निर्णय"] },
  },
  {
    id: "fever-infections",
    featured: true,
    en: { title: "Fever & infections", summary: "Assessment of fever and infections, with in-person evaluation when needed.", topics: ["Fever and possible infection symptoms", "Reviewing relevant tests and recent history", "Arranging an in-person assessment when needed"] },
    ne: { title: "ज्वरो र संक्रमण", summary: "ज्वरो र संक्रमणको मूल्याङ्कन; आवश्यक परे प्रत्यक्ष परीक्षण।", topics: ["ज्वरो र संक्रमण हुन सक्ने लक्षण", "सम्बन्धित जाँच र हालको स्वास्थ्य इतिहास", "आवश्यक परे प्रत्यक्ष परीक्षणको व्यवस्था"] },
  },
  {
    id: "digestive-liver-concerns",
    featured: true,
    en: { title: "Digestive & liver concerns", summary: "Review of common digestive symptoms, fatty liver and related test results.", topics: ["Digestive symptoms", "Fatty-liver concerns", "Understanding related reports and follow-up needs"] },
    ne: { title: "पाचन र कलेजोसम्बन्धी समस्या", summary: "सामान्य पाचन लक्षण, फ्याटी लिभर र सम्बन्धित जाँच नतिजाको समीक्षा।", topics: ["पाचनसम्बन्धी लक्षण", "फ्याटी लिभरसम्बन्धी चिन्ता", "सम्बन्धित रिपोर्ट र फलो-अपको आवश्यकता बुझ्ने"] },
  },
  {
    id: "long-term-follow-up",
    featured: true,
    en: { title: "Long-term follow-up", summary: "Ongoing review of chronic conditions, progress and treatment plans.", topics: ["Changes since the previous consultation", "Treatment progress and medicines", "A clear plan for the next review"] },
    ne: { title: "दीर्घकालीन फलो-अप", summary: "दीर्घकालीन रोग, प्रगति र उपचार योजनाको निरन्तर समीक्षा।", topics: ["अघिल्लो परामर्शपछि भएका परिवर्तन", "उपचारको प्रगति र प्रयोग गरिरहेका औषधि", "अर्को समीक्षाका लागि स्पष्ट योजना"] },
  },
  {
    id: "cholesterol-heart-prevention",
    en: { title: "Cholesterol & heart prevention", summary: "Lipid-result review and cardiovascular risk-reduction guidance.", topics: ["Reviewing cholesterol and lipid results", "Understanding overall heart risk", "Discussing practical risk-reduction steps"] },
    ne: { title: "कोलेस्ट्रोल र मुटुरोग रोकथाम", summary: "कोलेस्ट्रोल जाँचको समीक्षा र मुटुरोग जोखिम घटाउने मार्गदर्शन।", topics: ["कोलेस्ट्रोल र लिपिड रिपोर्टको समीक्षा", "समग्र मुटुरोग जोखिम बुझ्ने", "जोखिम घटाउने व्यावहारिक उपायबारे छलफल"] },
  },
  {
    id: "kidney-health",
    en: { title: "Kidney health", summary: "Review of kidney-related symptoms, test results and medicine safety.", topics: ["Kidney-related symptoms and concerns", "Understanding relevant test results", "Reviewing medicines in the context of kidney health"] },
    ne: { title: "मिर्गौला स्वास्थ्य", summary: "मिर्गौलासम्बन्धी लक्षण, जाँच नतिजा र औषधि सुरक्षाको समीक्षा।", topics: ["मिर्गौलासम्बन्धी लक्षण र चिन्ता", "सम्बन्धित जाँचको नतिजा बुझ्ने", "मिर्गौलाको अवस्थाअनुसार औषधिको समीक्षा"] },
  },
  {
    id: "weight-lifestyle",
    en: { title: "Weight & lifestyle", summary: "Sustainable advice on activity, nutrition and metabolic risk.", topics: ["Current eating and activity patterns", "Weight and metabolic-health concerns", "Changes that can be maintained in everyday life"] },
    ne: { title: "तौल र जीवनशैली", summary: "शारीरिक गतिविधि, पोषण र मेटाबोलिक जोखिमबारे दिगो सल्लाह।", topics: ["हालको खानपान र शारीरिक गतिविधि", "तौल र मेटाबोलिक स्वास्थ्यसम्बन्धी चिन्ता", "दैनिक जीवनमा टिकाउन सकिने परिवर्तन"] },
  },
  {
    id: "screening-prevention",
    en: { title: "Screening & prevention", summary: "Age- and risk-appropriate health checks and prevention planning.", topics: ["Health checks appropriate to age and risk", "Reviewing relevant family and personal history", "Planning sensible prevention and follow-up"] },
    ne: { title: "स्क्रिनिङ र रोकथाम", summary: "उमेर र जोखिमअनुसार स्वास्थ्य जाँच तथा रोकथाम योजना।", topics: ["उमेर र जोखिमअनुसार उपयुक्त स्वास्थ्य जाँच", "आफ्नो र परिवारको सम्बन्धित स्वास्थ्य इतिहास", "रोकथाम र फलो-अपको उपयुक्त योजना"] },
  },
  {
    id: "investigation-report-review",
    en: { title: "Investigation & report review", summary: "Clear explanations of relevant lab and investigation results in clinical context.", topics: ["Understanding laboratory and other reports", "Connecting results with symptoms and history", "Deciding whether follow-up tests or examination are needed"] },
    ne: { title: "जाँच र रिपोर्ट समीक्षा", summary: "चिकित्सकीय अवस्थाअनुसार प्रयोगशाला तथा अन्य जाँच नतिजाको स्पष्ट व्याख्या।", topics: ["प्रयोगशाला र अन्य रिपोर्ट बुझ्ने", "नतिजालाई लक्षण र इतिहाससँग जोडेर हेर्ने", "थप जाँच वा परीक्षण आवश्यक छ कि छैन बुझ्ने"] },
  },
  {
    id: "medication-review",
    en: { title: "Medication review", summary: "Review of treatment progress, side effects and medicine-use questions.", topics: ["Medicines currently being used", "Treatment progress and possible side effects", "Questions about safe and practical medicine use"] },
    ne: { title: "औषधि समीक्षा", summary: "उपचार प्रगति, सम्भावित असर र औषधि प्रयोगसम्बन्धी प्रश्नहरूको समीक्षा।", topics: ["हाल प्रयोग गरिरहेका औषधि", "उपचारको प्रगति र सम्भावित असर", "औषधिको सुरक्षित र व्यावहारिक प्रयोगबारे प्रश्न"] },
  },
  {
    id: "anaemia-blood-health",
    en: { title: "Anaemia & blood health", summary: "Assessment of common blood-count abnormalities and related symptoms.", topics: ["Blood-count results", "Symptoms that may be related to anaemia", "Whether further assessment or follow-up is needed"] },
    ne: { title: "रक्तअल्पता र रगतको स्वास्थ्य", summary: "सामान्य रक्त जाँच असामान्यता र सम्बन्धित लक्षणहरूको मूल्याङ्कन।", topics: ["रगत जाँचको नतिजा", "रक्तअल्पतासँग सम्बन्धित हुन सक्ने लक्षण", "थप मूल्याङ्कन वा फलो-अपको आवश्यकता"] },
  },
  {
    id: "adult-vaccination-guidance",
    en: { title: "Adult vaccination guidance", summary: "Discussion of age- and risk-appropriate vaccines during routine care.", topics: ["Vaccination history", "Vaccines that may be appropriate for age and risk", "Questions about timing and follow-up"] },
    ne: { title: "वयस्क खोपसम्बन्धी मार्गदर्शन", summary: "नियमित सेवामा उमेर र जोखिमअनुसार उपयुक्त खोपबारे परामर्श।", topics: ["पहिले लगाएका खोपको जानकारी", "उमेर र जोखिमअनुसार उपयुक्त हुन सक्ने खोप", "खोपको समय र फलो-अपबारे प्रश्न"] },
  },
];
