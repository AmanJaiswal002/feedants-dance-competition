import judgeImg from '../assets/judge.png';
import winner1Img from '../assets/winner1.png';
import winner2Img from '../assets/winner2.png';
import winner3Img from '../assets/winner3.png';
import winner4Img from '../assets/winner4.png';

export const competitionData = {
  eng: {
    backText: "Go back",
    title: "Feedants Classical Dance",
    tags: ["Dance", "Multi-Win"],
    certificateBadge: "Winners get certificate",
    statusBadge: "Registered",
    prizePoolLabel: "Prize Pool",
    prizePoolAmount: "₹ 1,500",
    entryFeeLabel: "Entry Fee",
    entryFeeAmount: "₹ 99",
    spotsLeftText: "Only 19 spots left",
    bookedText: "1 / 20 Booked",
    
    judge: {
      label: "Judge",
      name: "Manju Dubey",
      title: "Professional Kathak Dancer",
      experience: "12+ Years of Experience",
      buttonText: "Intro Video",
      avatar: judgeImg,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    timer: {
      label: "Registration closes in",
      hurryText: "Hurry up!"
    },

    importantDatesTitle: "Important Dates",
    dates: [
      {
        icon: "calendar",
        label: "Register Before",
        date: "10 Aug 26",
        time: "11:50 PM"
      },
      {
        icon: "send",
        label: "Submission Starts",
        date: "6 Aug 26",
        time: "04:00 AM"
      },
      {
        icon: "upload",
        label: "Submission Ends",
        date: "30 Aug 26",
        time: "11:55 PM"
      },
      {
        icon: "trophy",
        label: "Result Date",
        date: "1 Sept 26",
        time: "11:50 PM"
      }
    ],

    previousWinnersTitle: "Previous Winners",
    previousWinners: [
      {
        id: 1,
        name: "Riya Shah",
        rank: "1st Winner",
        image: winner1Img,
        videoTitle: "Riya Shah Bharatanatyam Solo Performance"
      },
      {
        id: 2,
        name: "Aarav Mehta",
        rank: "1st Winner",
        image: winner2Img,
        videoTitle: "Aarav Mehta Kathak Chakar Performance"
      },
      {
        id: 3,
        name: "Neha Verma",
        rank: "2nd Winner",
        image: winner3Img,
        videoTitle: "Neha Verma Odissi Dance Routine"
      },
      {
        id: 4,
        name: "Ishita Choudhury",
        rank: "3rd Winner",
        image: winner4Img,
        videoTitle: "Ishita Choudhury Classical Fusion"
      }
    ],

    tabs: [
      { id: "about", label: "About Competition" },
      { id: "parameters", label: "Judging Parameters" },
      { id: "rules", label: "Rules & Eligibility" }
    ],

    aboutContent: {
      short: "This is an online classical dance competition open for all age groups. Participate from anywhere and showcase your talent. Express your passion through traditional dance.",
      full: "This is an online classical dance competition open for all age groups. Participate from anywhere and showcase your talent. Express your passion through traditional dance. Whether you perform Kathak, Bharatanatyam, Odissi, Kuchipudi, or any Indian classical style, expert judge Manju Dubey will review each performance video with constructive feedback and certification."
    },

    parametersContent: [
      { title: "Rhythm & Timing (Taal)", weight: "30%", desc: "Precision in beat matching, footwork clarity, and rhythmic synchronization." },
      { title: "Expressions & Emotions (Abhinaya)", weight: "30%", desc: "Facial expressions, eye movements, and storytelling intensity." },
      { title: "Technique & Grace (Nritta)", weight: "25%", desc: "Posture, mudras, body balance, and smooth movement transitions." },
      { title: "Costume & Presentation (Aaharya)", weight: "15%", desc: "Traditional costume accuracy, neatness, and stage presence." }
    ],

    rulesContent: [
      "Open to participants of all age categories from any location worldwide.",
      "Video duration must be between 60 seconds and 180 seconds (1 - 3 minutes).",
      "Solo classical Indian dance forms only (Kathak, Bharatanatyam, Odissi, Kathakali, Mohiniyattam, Kuchipudi, etc.).",
      "Video must be recorded in high clarity with clear audio soundtrack.",
      "Editing or speed modulation of performance video is strictly prohibited.",
      "Judges' evaluation decisions will be final and binding for all participants."
    ],

    rewardsTitle: "Rewards",
    rewardsSubtitle: "(All Positions)",
    rewards: [
      { rank: "1st Winner", amount: "₹ 550", icon: "🏆" },
      { rank: "2nd Winner", amount: "₹ 300", icon: "🥈" },
      { rank: "3rd Winner", amount: "₹ 240", icon: "🥉" },
      { rank: "4th Winner", amount: "₹ 200", icon: "⭐" },
      { rank: "5th Winner", amount: "₹ 130", icon: "⭐" },
      { rank: "6th Winner", amount: "₹ 80", icon: "⭐" }
    ],

    disclaimer: "Disclaimer: Only contributions from paid participants will be considered for judging.",
    
    payoutCard: {
      title: "How will you receive prize money?",
      subtitle: "Watch video to know more"
    },

    trustBadges: {
      refund: "Refund policy",
      secure: "Secure payments powered by",
      gateway: "Razorpay"
    },

    referral: {
      title: "Refer & Earn more discount",
      link: "https://feedants.com/r/referral123",
      copyBtn: "Copy Link",
      referBtn: "Refer Now",
      subtext: "You earn ₹10 for every signup",
      toastSuccess: "Referral link copied to clipboard!"
    },

    reviews: {
      title: "Hear From Our Users",
      subtitle: "See what participants say about Feedants"
    },

    adBannerText: "Ad Here",

    stickyAction: {
      btnText: "Upload Submission",
      subtext: "Registered"
    },

    nav: {
      home: "Home",
      explore: "Explore",
      competitions: "Competitions",
      profile: "Profile"
    }
  },

  hi: {
    backText: "वापस जाएं",
    title: "फीडैंट्स शास्त्रीय नृत्य",
    tags: ["नृत्य", "मल्टी-विन"],
    certificateBadge: "विजेताओं को प्रमाणपत्र मिलेगा",
    statusBadge: "पंजीकृत",
    prizePoolLabel: "पुरस्कार राशि",
    prizePoolAmount: "₹ 1,500",
    entryFeeLabel: "प्रवेश शुल्क",
    entryFeeAmount: "₹ 99",
    spotsLeftText: "केवल 19 स्थान शेष",
    bookedText: "1 / 20 बुक किया गया",
    
    judge: {
      label: "जज",
      name: "मंजू दुबे",
      title: "पेशेवर कथक नर्तकी",
      experience: "12+ वर्षों का अनुभव",
      buttonText: "परिचय वीडियो",
      avatar: judgeImg,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    timer: {
      label: "पंजीकरण समाप्त होने में समय",
      hurryText: "जल्दी करें!"
    },

    importantDatesTitle: "महत्वपूर्ण तिथियां",
    dates: [
      {
        icon: "calendar",
        label: "पंजीकरण अंतिम तिथि",
        date: "10 अगस्त 26",
        time: "11:50 PM"
      },
      {
        icon: "send",
        label: "सबमिशन प्रारंभ",
        date: "6 अगस्त 26",
        time: "04:00 AM"
      },
      {
        icon: "upload",
        label: "सबमिशन समाप्त",
        date: "30 अगस्त 26",
        time: "11:55 PM"
      },
      {
        icon: "trophy",
        label: "परिणाम तिथि",
        date: "1 सितंबर 26",
        time: "11:50 PM"
      }
    ],

    previousWinnersTitle: "पिछली प्रतियोगिता के विजेता",
    previousWinners: [
      {
        id: 1,
        name: "रिया शाह",
        rank: "प्रथम विजेता",
        image: winner1Img,
        videoTitle: "रिया शाह भरतनाट्यम नृत्य प्रदर्शन"
      },
      {
        id: 2,
        name: "आरव मेहता",
        rank: "प्रथम विजेता",
        image: winner2Img,
        videoTitle: "आरव मेहता कथक चक्कर प्रदर्शन"
      },
      {
        id: 3,
        name: "नेहा वर्मा",
        rank: "द्वितीय विजेता",
        image: winner3Img,
        videoTitle: "नेहा वर्मा ओडिसी नृत्य प्रस्तुति"
      },
      {
        id: 4,
        name: "इशिता चौधरी",
        rank: "तृतीय विजेता",
        image: winner4Img,
        videoTitle: "इशिता चौधरी क्लासिकल फ्यूजन"
      }
    ],

    tabs: [
      { id: "about", label: "प्रतियोगिता के बारे में" },
      { id: "parameters", label: "मूल्यांकन मानदंड" },
      { id: "rules", label: "नियम एवं पात्रता" }
    ],

    aboutContent: {
      short: "यह एक ऑनलाइन शास्त्रीय नृत्य प्रतियोगिता है जो सभी आयु समूहों के लिए खुली है। कहीं से भी भाग लें और अपनी प्रतिभा का प्रदर्शन करें। पारंपरिक नृत्य के माध्यम से अपना जुनून व्यक्त करें।",
      full: "यह एक ऑनलाइन शास्त्रीय नृत्य प्रतियोगिता है जो सभी आयु समूहों के लिए खुली है। कहीं से भी भाग लें और अपनी प्रतिभा का प्रदर्शन करें। पारंपरिक नृत्य के माध्यम से अपना जुनून व्यक्त करें। चाहे आप कथक, भरतनाट्यम, ओडिसी, कुचिपुड़ी या किसी भी भारतीय शास्त्रीय शैली का प्रदर्शन करते हों, विशेषज्ञ जज मंजू दुबे फीडबैक और प्रमाणपत्र के साथ प्रत्येक प्रदर्शन वीडियो की समीक्षा करेंगी।"
    },

    parametersContent: [
      { title: "ताल और लय (Taal)", weight: "30%", desc: "बीट मिलान में सटीकता, पैरों के काम की स्पष्टता, और लयबद्ध तालमेल।" },
      { title: "अभिनय एवं भाव (Abhinaya)", weight: "30%", desc: "चेहरे के भाव, आंखों की हलचल, और कहानी सुनाने की कला।" },
      { title: "तकनीक एवं लालित्य (Nritta)", weight: "25%", desc: "मुद्राएं, हस्त मुद्राएं, शरीर का संतुलन और सुचारू गति।" },
      { title: "वेशभूषा एवं प्रस्तुति (Aaharya)", weight: "15%", desc: "पारंपरिक पोशाक की सटीकता, स्वच्छता और मंच पर उपस्थिति।" }
    ],

    rulesContent: [
      "भारत या विदेश के किसी भी स्थान से सभी आयु वर्गों के प्रतिभागियों के लिए खुला है।",
      "वीडियो की अवधि 60 सेकंड से 180 सेकंड (1 - 3 मिनट) के बीच होनी चाहिए।",
      "केवल एकल भारतीय शास्त्रीय नृत्य शैलियां मान्य हैं (कथक, भरतनाट्यम, ओडिसी, कथकली, मोहिनीअट्टम आदि)।",
      "स्पष्ट ऑडियो ट्रैक के साथ वीडियो उच्च गुणवत्ता में रिकॉर्ड किया जाना चाहिए।",
      "प्रदर्शन वीडियो का संपादन या गति संशोधन सख्त वर्जित है।",
      "जजों का मूल्यांकन निर्णय अंतिम होगा और सभी प्रतिभागियों पर बाध्यकारी होगा।"
    ],

    rewardsTitle: "पुरस्कार",
    rewardsSubtitle: "(सभी स्थान)",
    rewards: [
      { rank: "प्रथम विजेता", amount: "₹ 550", icon: "🏆" },
      { rank: "द्वितीय विजेता", amount: "₹ 300", icon: "🥈" },
      { rank: "तृतीय विजेता", amount: "₹ 240", icon: "🥉" },
      { rank: "चौथा स्थान", amount: "₹ 200", icon: "⭐" },
      { rank: "पांचवां स्थान", amount: "₹ 130", icon: "⭐" },
      { rank: "छठा स्थान", amount: "₹ 80", icon: "⭐" }
    ],

    disclaimer: "अस्वीकरण: केवल भुगतान करने वाले प्रतिभागियों के योगदान पर निर्णय के लिए विचार किया जाएगा।",
    
    payoutCard: {
      title: "आपको पुरस्कार राशि कैसे मिलेगी?",
      subtitle: "अधिक जानने के लिए वीडियो देखें"
    },

    trustBadges: {
      refund: "रिफंड नीति",
      secure: "सुरक्षित भुगतान द्वारा",
      gateway: "Razorpay"
    },

    referral: {
      title: "रेफर करें और अधिक छूट पाएं",
      link: "https://feedants.com/r/referral123",
      copyBtn: "लिंक कॉपी करें",
      referBtn: "अभी रेफर करें",
      subtext: "प्रत्येक साइनअप पर आप ₹10 कमाते हैं",
      toastSuccess: "रेफरल लिंक क्लिपबोर्ड पर कॉपी हो गया!"
    },

    reviews: {
      title: "हमारे उपयोगकर्ताओं की सुनें",
      subtitle: "देखें कि प्रतिभागी फीडैंट्स के बारे में क्या कहते हैं"
    },

    adBannerText: "विज्ञापन स्थान",

    stickyAction: {
      btnText: "सबमिशन अपलोड करें",
      subtext: "पंजीकृत"
    },

    nav: {
      home: "होम",
      explore: "एक्सप्लोर",
      competitions: "प्रतियोगिताएं",
      profile: "प्रोफाइल"
    }
  }
};
