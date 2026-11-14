// English content — all editable text lives here, NOT in components.
const en = {
  nav: {
    home: "Home",
    about: "About",
    rules: "Rules",
    schedule: "Schedule",
    register: "Register",
    teams: "Teams",
    contact: "Contact",
    organizers: "Organizers",
    developers: "Developers",
    scores: "Scoreboard",
    problems: "Problems",
    practice: "Practice",
    admin: "Admin",
  },
  home: {
    hero: {
      tagline: "Faculty of ICT Annual Competitive Programming Contest",
      subtitle:
        "Open to ICT and DST students at Mahidol University. Organized by SMO MUICT & Dev Club.",
      ctaRegister: "Register Now",
      ctaLearnMore: "Learn More",
    },
    about: {
      heading: "About ICTPC",
      body: "ICTPC is the annual competitive programming contest hosted by the Faculty of ICT, Mahidol University. Teams of up to 3 students compete to solve algorithmic problems within a fixed time limit.",
    },
    countdown: {
      label: "Contest starts in",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    whatWhy: {
      badge: "Overview",
      whatHeading: "What is ICTPC?",
      whatBody:
        "ICTPC is the annual competitive programming contest of the Faculty of ICT, Mahidol University. Open exclusively to currently enrolled ICT and DST students, teams solve challenging algorithmic problems on an automated online judge within a strict time limit. Practice sessions and problem archives are provided beforehand to help all participants prepare.",
      ctaRegister: "Register your team",
      whyHeading: "Why you should join",
      whySubtitle: "Four great reasons to challenge yourself in this year's contest:",
      benefits: [
        {
          title: "Sharpen Problem-Solving Skills",
          description:
            "Tackle real algorithmic challenges and refine your analytical thinking, data structures, and debugging under timed pressure.",
        },
        {
          title: "Compete as a Team",
          description:
            "Collaborate in teams of 1 to 3 members to divide problems, strategize under pressure, and achieve victory together.",
        },
        {
          title: "Practice Before the Contest",
          description:
            "Get comfortable with the contest platform and problem formats through pre-contest warm-up sessions.",
        },
        {
          title: "Meet the ICT Community",
          description:
            "Connect with fellow peers, senior programmers, and developer leaders across the Faculty of ICT.",
        },
      ],
    },
    whenWhere: {
      badge: "Timetable & Venue",
      heading: "When and Where",
      description: "Contest itinerary and on-campus location details for contest day.",
      venueTitle: "Contest Venue",
      dateTitle: "Contest Date",
      mapHint: "Faculty of ICT Building, Mahidol University Salaya Campus",
    },
  },
  about: {
    heading: "About ICTPC",
    mission:
      "To foster algorithmic thinking and competitive programming skills among ICT and DST students at Mahidol University.",
    coOrganizers: "Co-organized by SMO MUICT and Dev Club MUICT.",
    eligibility: "Open to currently enrolled ICT and DST students at Mahidol University.",
    format:
      "Teams of 1–3 members compete by solving a set of algorithmic problems within a 3-hour contest window.",
  },
  rules: {
    heading: "Contest Rules",
    sections: [
      {
        title: "Eligibility",
        items: [
          "Participants must be currently enrolled ICT or DST students at Mahidol University.",
          "Each team may have 1–3 members.",
          "A student may only join one team.",
        ],
      },
      {
        title: "Contest Format",
        items: [
          "Problems are scored by number solved, then by total penalty time.",
          "A correct submission earns +0 penalty. An incorrect submission earns +20 minutes penalty.",
          "The contest duration is 3 hours.",
        ],
      },
      {
        title: "Code of Conduct",
        items: [
          "All submitted code must be original work by the team.",
          "Plagiarism results in immediate disqualification.",
          "Participants must follow the instructions of contest staff.",
        ],
      },
    ],
  },
  schedule: {
    heading: "Event Schedule",
    events: [
      { time: "08:30", label: "Registration & Check-in" },
      { time: "09:00", label: "Opening Ceremony" },
      { time: "09:30", label: "Contest Start" },
      { time: "12:30", label: "Contest End" },
      { time: "13:00", label: "Lunch Break" },
      { time: "14:00", label: "Awards Ceremony" },
    ],
  },
  register: {
    heading: "Team Registration",
    description:
      "Register your team for ICTPC. All fields are required. Only ICT and DST students may register.",
    form: {
      teamName: "Team Name",
      member: "Member",
      nickname: "Nickname",
      fullName: "Full Name",
      studentId: "Student ID",
      email: "Email",
      faculty: "Faculty",
      year: "Academic Year",
      addMember: "Add Member",
      removeMember: "Remove",
      consent:
        "I consent to the collection and use of my personal information for the purposes of ICTPC registration, and confirm that all information provided is accurate.",
      submit: "Submit Registration",
      success: "Registration submitted successfully! We will contact you via email.",
      error: "An error occurred. Please try again.",
    },
    registrationClosed: "Registration is currently closed.",
  },
  teams: {
    heading: "Registered Teams",
    empty: "No teams have been confirmed yet. Check back soon!",
    memberCount: "{count} member(s)",
    status: {
      pending: "Pending",
      confirmed: "Confirmed",
      rejected: "Rejected",
    },
  },
  contact: {
    heading: "Contact Us",
    description: "Have a question? Send us a message and we will get back to you.",
    form: {
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      submit: "Send Message",
      success: "Message sent! We will reply within 1–2 business days.",
      error: "Failed to send. Please try again.",
    },
    line: "Or join our LINE OpenChat for quick answers:",
    lineButton: "Join LINE OpenChat",
  },
  organizers: {
    heading: "Organizers",
    smo: {
      name: "SMO MUICT",
      description: "Student Management Organization of the Faculty of ICT, Mahidol University.",
    },
    devclub: {
      name: "Dev Club MUICT",
      description:
        "The developer community club of MUICT, focused on software engineering and competitive programming.",
    },
    team: "Organizing Team",
  },
  developers: {
    heading: "Website Developers",
    description: "This website was built by members of Dev Club MUICT.",
  },
  scores: {
    heading: "Scoreboard",
    notPublished: "The scoreboard will be published after the contest.",
    columns: {
      rank: "Rank",
      team: "Team",
      solved: "Solved",
      time: "Time (min)",
    },
  },
  problems: {
    heading: "Problems",
    empty: "Problems will be published here after the contest.",
    difficulty: {
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
    },
  },
  practice: {
    heading: "Practice Sessions",
    description: "Past and upcoming practice sessions organized by Dev Club MUICT.",
    empty: "No practice sessions yet. Stay tuned!",
    register: "Register",
    materialsLabel: "Materials",
    past: "Past Sessions",
    upcoming: "Upcoming Sessions",
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "Who can participate?",
        a: "Currently enrolled ICT and DST students at Mahidol University.",
      },
      {
        q: "How large can a team be?",
        a: "Teams may have 1 to 3 members.",
      },
      {
        q: "What programming languages are allowed?",
        a: "C, C++, Java, and Python are supported on the judge.",
      },
      {
        q: "Is there a registration fee?",
        a: "No. ICTPC is free to participate.",
      },
    ],
  },
  admin: {
    nav: {
      dashboard: "Dashboard",
      registrations: "Registrations",
      inquiries: "Inquiries",
      toPublic: "Back to Public Site",
      signOut: "Sign Out",
      back: "Back",
    },
    login: {
      heading: "Admin Login",
      description: "Sign in to access registrations and inquiries.",
      email: "Email",
      password: "Password",
      submit: "Login",
      error: "Invalid credentials.",
      errorTitle: "Access Denied",
      toPublic: "Back to Public Site",
    },
    dashboard: {
      heading: "Admin Dashboard",
      registrations: "Registrations",
      pendingReview: "Pending Review",
      confirmedTeams: "Confirmed Teams",
      inquiries: "Inquiries",
    },
    registrations: {
      heading: "Registrations",
      header: {
        id: "ID",
        teamName: "Team Name",
        members: "Members",
        status: "Status",
        submitted: "Submitted",
        actions: "Actions",
      },
      badge: {
        confirmed: "Confirmed",
        rejected: "Rejected",
        pending: "Pending",
      },
      empty: {
        title: "No Registrations",
        message: "No team registrations have been submitted yet.",
      },
      infoCard: {
        submitted: "Submitted",
        studentId: "Student ID",
        teamMembers: "Team Members",
        email: "Email",
        program: "Program",
        year: "Year",
        consentGiven: "Consent Given",
        consentMissing: "Consent Missing",
      },
      statusAction: {
        title: "Review & Status Actions",
        description: "Update the registration decision or leave an internal committee note.",
        notePlaceholder: "Internal notes (e.g., student verified on central registrar)",
        current: "Current",
      },
      error: "Failed to load registrations. Please try again.",
      view: "View",
      confirm: "Confirm",
      reject: "Reject",
      note: "Note",
      save: "Save",
    },
    inquiries: {
      heading: "Inquiries",
      resolve: "Mark Resolved",
      open: "Open",
      resolved: "Resolved",
      header: {
        sender: "Sender",
        email: "Email",
        message: "Message",
        date: "Date",
        status: "Status",
        action: "Action",
      },
      empty: {
        title: "No Inquiries",
        message: "No user messages or inquiries have been received yet.",
      },
      error: "Failed to load inquiries. Please try again.",
      done: "Done",
    },
  },
  errors: {
    notFound: {
      heading: "404 — Page Not Found",
      body: "The page you are looking for does not exist.",
      back: "Go Home",
    },
    generic: {
      heading: "Something went wrong",
      body: "An unexpected error occurred. Please try again.",
      retry: "Retry",
    },
  },
  common: {
    loading: "Loading…",
    backToHome: "Back to Home",
    viewAll: "View All",
  },
} as const;

export default en;
export type Messages = typeof en;
