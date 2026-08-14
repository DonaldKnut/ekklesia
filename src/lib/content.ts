export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
] as const;

/** Homepage carousel — Cloudinary URLs (swap anytime). */
export const carouselSlides = [
  {
    id: "gathering",
    src: "https://res.cloudinary.com/ddgzzjp4x/image/upload/v1786309941/People_in_church_gathering_2K_202608092209_za6txu.jpg",
    alt: "Congregation gathered in church during worship",
    title: "Keep people connected",
    caption: "Members, guests, and families — known and cared for in one place.",
  },
  {
    id: "worship",
    src: "https://res.cloudinary.com/ddgzzjp4x/image/upload/v1786309941/Warm_church_atmosphere_in_setting_202608092209_ionymv.jpg",
    alt: "Warm church service with prayer and worship",
    title: "Run every gathering well",
    caption: "Services, events, and reminders that help Sunday run smoothly.",
  },
  {
    id: "prayer",
    src: "https://res.cloudinary.com/ddgzzjp4x/image/upload/v1786309940/Warm_church_atmosphere_in_Nigeria_202608092211_i9tq3y.jpg",
    alt: "Woman in prayer during a church service in Nigeria",
    title: "Pray and grow together",
    caption: "Prayer, devotionals, and testimonies — for life beyond Sunday.",
  },
] as const;


export const homeHighlights = [
  {
    title: "Your people",
    body: "Members, visitors, teams, small groups, and attendance — all in one place. No more chasing spreadsheets.",
  },
  {
    title: "Your gatherings",
    body: "Plan events, sell tickets, share sermons, and post news so everyone stays informed.",
  },
  {
    title: "Your giving",
    body: "Take gifts online, set up monthly giving, and keep clear records with strong security.",
  },
  {
    title: "Your faith life",
    body: "Prayer, journals, devotionals, testimonies, counseling, and Bible — for life beyond Sunday.",
  },
] as const;

export const whyPoints = [
  {
    title: "Made for many churches",
    body: "Each church has its own private space. Leaders only see what they should. Big networks can still run the whole platform.",
  },
  {
    title: "Safe by design",
    body: "Strong logins, extra login codes (MFA), clear roles, and activity logs protect sensitive church data.",
  },
  {
    title: "Easy to set up",
    body: "Use your own file storage and payment tools (like Paystack or Stripe). Add your keys and go — no rebuild needed.",
  },
  {
    title: "Work and worship together",
    body: "Most apps only handle lists or only handle content. Ekklesia helps you run the church and grow people.",
  },
] as const;

export const featureGroups = [
  {
    id: "identity",
    title: "Accounts & access",
    intro: "Control who can sign in and what they are allowed to do.",
    items: [
      {
        name: "Many churches, one platform",
        detail: "Add churches, keep their data separate, and approve new ones when needed.",
      },
      {
        name: "Clear roles",
        detail:
          "Roles like Super Admin, Church Admin, Pastor, Worker, Member, and Visitor — people can have more than one.",
      },
      {
        name: "Secure sign-in",
        detail: "Safe login tokens with checks that keep accounts protected.",
      },
      {
        name: "Extra login protection (MFA)",
        detail: "Use an authenticator app for an added code when signing in.",
      },
      {
        name: "Invites & email checks",
        detail: "Invite members, verify email, reset passwords, and limit login spam.",
      },
    ],
  },
  {
    id: "people",
    title: "People & community",
    intro: "Know your church family and welcome new guests well.",
    items: [
      {
        name: "Members & visitors",
        detail: "Profiles, photos, import/export lists, and visitor follow-up.",
      },
      {
        name: "Departments",
        detail: "Organize ministry teams and their leaders.",
      },
      {
        name: "Small groups",
        detail: "Create groups, set leaders, and manage who belongs.",
      },
      {
        name: "Volunteers",
        detail: "Define serving roles and coordinate helpers.",
      },
      {
        name: "Attendance",
        detail: "Record who came so you can see real engagement.",
      },
    ],
  },
  {
    id: "gatherings",
    title: "Events & media",
    intro: "Plan Sundays — and keep the message going all week.",
    items: [
      {
        name: "Events",
        detail: "Create events, search them, and set repeats (daily, weekly, or monthly).",
      },
      {
        name: "Tickets & payment",
        detail: "Turn on tickets, set prices and limits, and collect payment.",
      },
      {
        name: "Sermons & media",
        detail: "Upload and manage sermons and files for your church library.",
      },
      {
        name: "Announcements",
        detail: "Share important news with the right people at the right time.",
      },
    ],
  },
  {
    id: "stewardship",
    title: "Giving & money",
    intro: "Simple giving with clear records you can trust.",
    items: [
      {
        name: "Giving records",
        detail: "Track gift types, amounts, and history for your church.",
      },
      {
        name: "Monthly giving",
        detail: "Set up recurring gifts with Paystack or Stripe.",
      },
      {
        name: "Paystack & Stripe",
        detail: "Add your payment keys. Checkout, refunds, and secure payment alerts included.",
      },
      {
        name: "Refunds",
        detail: "Refund payments and keep a clear note of why.",
      },
    ],
  },
  {
    id: "spiritual",
    title: "Spiritual life",
    intro: "Tools that help people grow — not only manage lists.",
    items: [
      {
        name: "Prayer requests",
        detail: "Share prayer needs and review them with care.",
      },
      {
        name: "Journals & devotionals",
        detail: "Private journals and shared daily devotionals.",
      },
      {
        name: "Testimonies",
        detail: "Collect stories and approve them before they go public.",
      },
      {
        name: "Counseling",
        detail: "Receive counseling requests and respond with pastoral care.",
      },
      {
        name: "Bible",
        detail: "Browse books and chapters, with optional online verse lookup.",
      },
    ],
  },
  {
    id: "comms",
    title: "Messages & oversight",
    intro: "Reach people, check content, and see what happened.",
    items: [
      {
        name: "In-app alerts",
        detail: "Notify members inside the app.",
      },
      {
        name: "Push alerts",
        detail: "Optional phone push messages when you are ready.",
      },
      {
        name: "Leadership broadcasts",
        detail: "Send news by in-app message, email, or push.",
      },
      {
        name: "Content review",
        detail: "Check testimonies, prayers, and more before they appear.",
      },
      {
        name: "Activity logs",
        detail: "See important actions for peace of mind and good governance.",
      },
      {
        name: "Reports & dashboard",
        detail: "Simple views so leaders see what matters quickly.",
      },
    ],
  },
  {
    id: "platform",
    title: "Files & tech setup",
    intro: "Works with how you host and store files.",
    items: [
      {
        name: "File uploads",
        detail: "Photos, logos, and media through one upload flow.",
      },
      {
        name: "Storage options",
        detail: "Save files on your server or Cloudflare — switch with settings.",
      },
      {
        name: "Clear API docs",
        detail: "Ready for websites and mobile apps to connect later.",
      },
    ],
  },
] as const;

export const solutions = [
  {
    audience: "Pastors & church admins",
    problem: "Work is spread across chats, files, and memory.",
    outcome:
      "One safe place for people, events, messages, and follow-up — with roles that match real church life.",
    capabilities: [
      "Member and visitor records",
      "Events, attendance, announcements",
      "Prayer, counseling, testimonies",
      "Broadcasts and content review",
    ],
  },
  {
    audience: "Finance teams",
    problem: "Giving lives in a payment site, separate from your members.",
    outcome:
      "Online gifts, refunds, and monthly giving linked to your church and people — with clear records.",
    capabilities: [
      "Paystack and Stripe",
      "One-time and monthly giving",
      "Refunds",
      "Church-only money views",
    ],
  },
  {
    audience: "Team leaders & workers",
    problem: "Teams plan in side chats while leaders lose the big picture.",
    outcome:
      "Departments, volunteers, and small groups stay in the same trusted system.",
    capabilities: [
      "Departments and leaders",
      "Volunteer roles",
      "Small group members",
      "Attendance",
    ],
  },
  {
    audience: "Members & families",
    problem: "Church life and spiritual growth feel scattered — or missing.",
    outcome:
      "Pray, read devotionals, buy event tickets, and give — without leaving your church’s home online.",
    capabilities: [
      "Daily faith tools",
      "Event tickets",
      "Giving",
      "Helpful alerts",
    ],
  },
  {
    audience: "Church networks",
    problem: "Growing to more churches means copying fragile setups.",
    outcome:
      "Run many churches on one platform, with strong admin controls and private spaces for each.",
    capabilities: [
      "Many churches, one system",
      "Platform stats",
      "Approve or activate churches",
      "Enable or disable users",
    ],
  },
] as const;

export const problemPoints = [
  {
    title: "Too many tools",
    body: "A spreadsheet for members. WhatsApp for prayer. A payment link for giving. Nothing connects.",
  },
  {
    title: "Weak security",
    body: "Pastoral and money data need strong logins and clear roles — not one shared password.",
  },
  {
    title: "Growth gets messy",
    body: "As more people come, informal habits become stress and risk.",
  },
] as const;
