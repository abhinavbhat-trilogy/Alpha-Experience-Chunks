export const initialData = {
  parents: {
    name: "Parents",
    color: "blue",
    type: "internal",
    stages: [
      {
        id: "p1",
        name: "Learn about Alpha",
        phase: "Pre-Application",
        userIntent: "I want to understand if Alpha is the right school for my child",
        currentState: "Marketing website, word of mouth, events. Attribution and tracking difficult although systems are being built to tackle this as I understand it.",
        futureState: "-",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p2",
        name: "Inquiry and Next Steps",
        phase: "Pre-Application",
        userIntent: "I want to express interest and learn next steps",
        currentState: "Fill out web form. Wait for admissions to call/email back. No visibility into inquiry status or next steps.",
        futureState: "-",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3",
        name: "Application (Deposit, Shadow Day, Forms)",
        phase: "Post-Application",
        userIntent: "I want to apply and get my child into Alpha",
        currentState: "Fill out application via email and manual forms. Separate phone/email coordination for shadow day scheduling. Manual tracking of application status. No visibility into where they are in the process.",
        futureState: "Complete application in parent portal. Self-schedule shadow day from available slots. Track application status in real-time. Automated reminders for pending tasks. See timeline: application → shadow day → decision.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p4",
        name: "Enroll & Pay",
        phase: "Post-Application",
        userIntent: "I want to enroll my child and handle all enrollment requirements",
        currentState: "Receive offer via email. Separate payment links sent later. Sign tuition agreement via DocuSign. Manual tracking of deposit/payment status. Disconnected from application flow.",
        futureState: "See offer in parent portal immediately. Sign tuition agreement in portal (DocuSign integration). Pay deposit/tuition in portal. Real-time status updates. Automated transition to enrolled status.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p5",
        name: "Enrolled Student Experience",
        phase: "Post-Application",
        userIntent: "I want to stay informed and manage my enrolled child's school life",
        currentState: "No parent-facing view of enrolled student. Must call registrar for grades, schedules, guide info, medical updates. No way to update emergency contacts or submit forms online.",
        futureState: "View child's profile in portal: grades, guide, schedule, medical info, emergency contacts. Update information as needed. Submit forms online. Communicate with guide. View announcements and calendar.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p6",
        name: "Re-enrollment",
        phase: "Post-Application",
        userIntent: "I want to re-enroll my child for next year",
        currentState: "Receive email notification. Fill out forms via email. Manual tracking of completion. No visibility into what's required or status.",
        futureState: "Re-enrollment triggered in portal. See all required forms and deadlines. Complete forms online (pre-filled where possible). Track completion progress. Automated reminders for pending items.",
        owner: { product: "TBD", tech: "TBD" }
      }
    ]
  },
  admissions: {
    name: "Admissions Team",
    color: "purple",
    type: "internal",
    stages: [
      {
        id: "a1",
        name: "Lead Management & Initial Contact",
        userIntent: "I want to convert inquiries into qualified applications",
        currentState: "HubSpot for lead capture. Manual follow-up emails. No unified view of inquiry status across systems.",
        futureState: "-",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a2",
        name: "Application Processing",
        userIntent: "I want to guide families through the application process with as little friction as possible",
        currentState: "Manual orchestration of the entire process - collecting documents via email, entering data into HubSpot/SIS, following up on missing items, coordinating with families across multiple channels.",
        futureState: "Portal-driven workflow where families self-serve. Admissions monitors progress dashboards, receives alerts for stalled applications, and intervenes only when needed.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a3",
        name: "Shadow Day Coordination",
        userIntent: "I want to coordinate shadow days smoothly without overbooking",
        currentState: "Manual Google Calendar + spreadsheet capacity tracking. Email/phone to coordinate with parents and guides.",
        futureState: "Real-time capacity dashboard. Parents self-schedule via portal. Automated guide assignment and reminders.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a4",
        name: "Offer Management & Conversion",
        userIntent: "I want to extend offers and track conversions effectively",
        currentState: "Manual offer letters via email. Track acceptances in spreadsheets. No unified view of offer funnel.",
        futureState: "One-click extend/reject offers. Automated parent notification. Real-time dashboard of offer funnel and conversion rates.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a6",
        name: "Reporting & Analytics",
        userIntent: "I want to see pipeline metrics and conversion rates without manual tracking",
        currentState: "Track funnel in HubSpot + spreadsheets. Manual calculation of conversion rates. No real-time visibility into pipeline health.",
        futureState: "Real-time admissions dashboard. Funnel metrics (inquiry → application → shadow → offer → enrolled). Conversion rates by source, campus, grade. Automated weekly reports.",
        owner: { product: "TBD", tech: "TBD" }
      }
    ]
  },
  registrars: {
    name: "Registrars",
    color: "emerald",
    type: "internal",
    stages: [
      {
        id: "r1",
        name: "New Student Enrollment Setup",
        userIntent: "I want to set up new students quickly and accurately",
        currentState: "Receive manual notification from admissions. Create student record in legacy SIS. Manual data entry from emailed documents.",
        futureState: "Automated notification when student enrolls. Pre-populated student record from application data. Review and finalize setup.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r2",
        name: "Student Records Management",
        userIntent: "I want to access and update student records efficiently",
        currentState: "Legacy SIS (slow, buggy). Hard to find info. No visual alerts for critical information like medical conditions.",
        futureState: "Clean, fast portal. Complete student profiles with enrollment history. Color-coded medical alerts (RED/ORANGE/YELLOW).",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r3",
        name: "Medical Records & Compliance",
        userIntent: "I want to ensure all students have up-to-date medical records",
        currentState: "Email attachments + legacy SIS storage. No proactive alerts for missing/expired medical info. Hard to access in emergencies.",
        futureState: "Digital medical records with visual alerts. Automated reminders for updates. Easy access for authorized staff.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r4",
        name: "Re-enrollment Triggering & Tracking",
        userIntent: "I want to manage re-enrollment season efficiently",
        currentState: "Manual email campaigns to parents. Track completion in spreadsheets. Manual follow-ups for missing forms.",
        futureState: "One-click re-enrollment trigger. Forms auto-created in parent portal. Real-time completion dashboard.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r5",
        name: "Attendance Management",
        userIntent: "I want to access and manage attendance data without manual spreadsheet work",
        currentState: "Receive attendance data from guides via spreadsheets. Consolidate and track in Google Sheets. No centralized view. Manual effort to generate attendance reports.",
        futureState: "Real-time attendance dashboard auto-synced from guide mobile app. Attendance visible in student profiles. Easy compliance reporting. Parents see attendance in portal.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r6",
        name: "Reporting & Analytics",
        userIntent: "I want to generate compliance reports and student lists without manual data export",
        currentState: "80% of work done in Excel. Manual export from legacy SIS. Build reports by copying data into spreadsheets.",
        futureState: "One-click compliance reports (immunizations, attendance, enrollment verification). Custom student lists with filters. Automated Google Sheets sync for recurring reports.",
        owner: { product: "TBD", tech: "TBD" }
      }
    ]
  },
  guides: {
    name: "Guides",
    color: "indigo",
    type: "internal",
    stages: [
      {
        id: "g2",
        name: "Student Profile Access",
        userIntent: "I want to understand my students' backgrounds and needs",
        currentState: "Must ask registrar for student info. No direct access to medical alerts, emergency contacts, or enrollment history.",
        futureState: "View complete student profiles: academic progress, medical alerts, parent contacts, enrollment history.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g3",
        name: "Progress Tracking & Notes",
        userIntent: "I want to track and document student progress",
        currentState: "Track student progress in personal spreadsheets or notebooks. No centralized system.",
        futureState: "Log student progress notes in guide portal. Track goals, interventions, and milestones. Share with parents/admissions as needed.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g5",
        name: "Attendance Taking & Tracking",
        userIntent: "I want to take attendance quickly and ensure it's recorded accurately",
        currentState: "Take attendance via Android app. Export data to manual spreadsheet. Send to registrars via email. No visibility into attendance trends or history.",
        futureState: "Mobile attendance app with real-time sync. Attendance automatically recorded in student profiles. View attendance history and trends for assigned students.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g6",
        name: "Shadow Day Feedback",
        userIntent: "I want to provide feedback on shadow day students quickly after their visit",
        currentState: "Send feedback via email which is then entered into HubSpot, or manually enter feedback into HubSpot directly.",
        futureState: "Provide shadow day feedback directly from the guide portal. Feedback instantly available to admissions team.",
        owner: { product: "TBD", tech: "TBD" }
      }
    ]
  },
  finance: {
    name: "Finance",
    color: "green",
    type: "internal",
    stages: [
      {
        id: "f1",
        name: "Tuition Calculation & Agreements",
        userIntent: "I want to ensure tuition is calculated correctly and agreements are accurate",
        currentState: "Manual spreadsheet calculations. Different calculations in SIS, payment page, and Maxio. Frequent errors.",
        futureState: "Automated tuition calculation engine. Single source of truth. Tuition agreements auto-generated with correct amounts.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "f2",
        name: "Payment Processing & Tracking",
        userIntent: "I want to track payments reliably without manual reconciliation",
        currentState: "Check Maxio, Stripe, HubSpot separately. Manual reconciliation required. Cannot trust automated invoices.",
        futureState: "Unified payment dashboard. Real-time payment status across all families. Stripe integration. Automatic reconciliation.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "f3",
        name: "Multi-Payer & Split Billing",
        userIntent: "I want to handle complex family billing situations correctly",
        currentState: "Cannot cleanly handle divorced families with split custody. Manual workarounds, error-prone.",
        futureState: "Multi-household billing support. Split tuition between multiple payers. Each payer gets separate agreement and invoice.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "f4",
        name: "Financial Reporting & Reconciliation",
        userIntent: "I want accurate financial reports without manual work",
        currentState: "Manual export from multiple systems. Reconcile in Excel. Time-consuming, error-prone.",
        futureState: "One-click financial reports. Export to accounting software. Automatic reconciliation with Stripe charges.",
        owner: { product: "TBD", tech: "TBD" }
      }
    ]
  },
  learningPlatforms: {
    name: "Learning Platforms & External Systems",
    color: "orange",
    type: "external",
    stages: [
      {
        id: "lp1",
        name: "OneRoster API - Unified Roster Sync",
        userIntent: "I want accurate, real-time roster data so the right students have access to my platform",
        currentState: "CoachBot manually syncs data from SIS to DASH, TimeBack, Alpha Anywhere. Fragile, frequent breaks. No real-time updates.",
        futureState: "OneRoster-compliant API. Real-time roster updates. All learning platforms (DASH, TimeBack, etc.) query SIS directly for student/class data.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp2",
        name: "Student Access Provisioning",
        userIntent: "I want students to automatically have access when they enroll, and lose access when they leave",
        currentState: "Manual processes to grant/revoke platform access. Delays when students enroll or withdraw. Each platform requires separate provisioning.",
        futureState: "Automated access provisioning based on enrollment status. Students get access to all appropriate platforms immediately upon enrollment.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp3",
        name: "Alpha Anywhere Integration",
        userIntent: "I want to enroll online students and have them immediately access learning tools",
        currentState: "Alpha Anywhere manages its own enrollment. No unified view across Alpha Network Schools + Alpha Anywhere. Cannot cross-enroll.",
        futureState: "SIS tracks Alpha Anywhere enrollments (roster-only, no billing). Unified view of all Alpha students. Multi-program enrollment supported.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp4",
        name: "Third-Party Partner Schools",
        userIntent: "I want my students to use 2-Hour Learning tools without complex setup or manual data entry",
        currentState: "No integration. Partner schools cannot access 2HL learning tools for their students.",
        futureState: "Partner schools submit roster to SIS (CSV upload or API). SIS provisions access to DASH/TimeBack for partner students. Partner-specific dashboards.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp5",
        name: "Grade & Progress Data Exchange",
        userIntent: "I want to send student progress data back to the SIS and trust it will be recorded accurately",
        currentState: "One-way data flow: DASH sends grades to SIS. No validation, data quality issues. Other platforms not integrated.",
        futureState: "Bidirectional APIs with all platforms. SIS validates incoming data. Clear data contracts, error handling, and audit trails.",
        owner: { product: "TBD", tech: "TBD" }
      }
    ]
  }
};

export const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:bg-blue-100', selected: 'bg-blue-100 border-blue-300' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', hover: 'hover:bg-purple-100', selected: 'bg-purple-100 border-purple-300' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', hover: 'hover:bg-emerald-100', selected: 'bg-emerald-100 border-emerald-300' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', hover: 'hover:bg-indigo-100', selected: 'bg-indigo-100 border-indigo-300' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', hover: 'hover:bg-green-100', selected: 'bg-green-100 border-green-300' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', hover: 'hover:bg-rose-100', selected: 'bg-rose-100 border-rose-300' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', hover: 'hover:bg-orange-100', selected: 'bg-orange-100 border-orange-300' }
};
