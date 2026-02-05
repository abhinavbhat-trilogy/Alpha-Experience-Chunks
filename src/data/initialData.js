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
        currentState: "Marketing website, word of mouth, events. No way to track interest or engagement. Parents must proactively reach out.",
        futureState: "Marketing site with embedded lead capture. Track engagement (page views, downloads). Automated nurture campaigns based on interest signals.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p2",
        name: "Inquiry",
        phase: "Pre-Application",
        userIntent: "I want to express interest and learn next steps",
        currentState: "Fill out web form. Wait for admissions to call/email back. No visibility into inquiry status or next steps.",
        futureState: "Inquiry form creates lead in system. Automated confirmation email with next steps. Parent can see inquiry status in portal.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3",
        name: "Application (Deposit, Shadow Day, Forms)",
        phase: "Post-Application",
        userIntent: "I want to apply and get my child into Alpha",
        currentState: "Fill out application via email/paper forms. Separate phone/email coordination for shadow day scheduling. Manual tracking of application status. No visibility into where they are in the process.",
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
        currentState: "Receive email notification. Fill out forms via email/paper. Manual tracking of completion. No visibility into what's required or status.",
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
        futureState: "Unified dashboard showing all leads/inquiries. Automated drip campaigns. Real-time lead scoring and prioritization.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a2",
        name: "Application Review & Decision",
        userIntent: "I want to review applications and make admission decisions efficiently",
        currentState: "Jump between HubSpot, SIS, spreadsheets to review applications. Manual data entry in multiple systems.",
        futureState: "Single operational cockpit. View all applications with complete context. Make decisions in one place, instantly reflected in parent portal.",
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
        id: "a5",
        name: "Enrollment Processing & Handoff",
        userIntent: "I want to seamlessly hand off enrolled students to registrars",
        currentState: "Manual data entry into SIS after enrollment. Email registrar about new student. Paper form collection.",
        futureState: "Automated handoff to registrar portal when enrollment complete. All data flows from parent portal to student record.",
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
        currentState: "Receive manual notification from admissions. Create student record in legacy SIS. Manual data entry from paper forms.",
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
        currentState: "Paper forms + legacy SIS storage. No proactive alerts for missing/expired medical info. Hard to access in emergencies.",
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
        name: "Grade Progression & Year-End Processing",
        userIntent: "I want to transition students to the next year smoothly",
        currentState: "Manual updates in legacy SIS. Promote students to next grade. Paper records archived.",
        futureState: "Automated grade progression workflow. Complete historical records maintained. Alumni status tracking.",
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
        id: "g1",
        name: "Student Assignment & Roster",
        userIntent: "I want to know which students I'm responsible for",
        currentState: "Guides get student assignments via email or Slack. No centralized view of their roster.",
        futureState: "Guide portal shows all assigned students. Real-time updates when students enroll or withdraw.",
        owner: { product: "TBD", tech: "TBD" }
      },
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
        id: "g4",
        name: "Communication with Parents",
        userIntent: "I want to communicate effectively with parents",
        currentState: "Email/phone only. No record of communication history in one place.",
        futureState: "In-portal messaging with parents. Full communication history attached to student record.",
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
  leadership: {
    name: "School Leadership",
    color: "rose",
    type: "internal",
    stages: [
      {
        id: "l1",
        name: "Enrollment & Capacity Planning",
        userIntent: "I want to understand enrollment trends and plan capacity",
        currentState: "Pull data from multiple systems (SIS, HubSpot, spreadsheets). Manual aggregation across campuses. No real-time visibility.",
        futureState: "Real-time enrollment dashboard across all campuses. Capacity planning tools. Projections based on pipeline data.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "l2",
        name: "School Performance & Operations",
        userIntent: "I want to monitor operational health across schools",
        currentState: "Spreadsheets and disconnected reports. No unified view of operational metrics. Data often stale.",
        futureState: "Unified operational dashboard. Enrollment trends, retention rates, financial metrics, staff utilization. Real-time KPIs.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "l3",
        name: "Cross-Campus Reporting",
        userIntent: "I want to compare performance across campuses",
        currentState: "Manual aggregation of data from each campus. Time-consuming, error-prone. Cannot easily compare campuses.",
        futureState: "Automated cross-campus reports. Compare performance, identify best practices. Drill down by campus, grade, or cohort.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "l4",
        name: "Strategic Planning & Forecasting",
        userIntent: "I want to make data-driven strategic decisions",
        currentState: "Historical data difficult to access. Forecasting done in separate spreadsheets with manual inputs.",
        futureState: "Historical trend analysis. Predictive models for enrollment, retention, revenue. Scenario planning tools.",
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "l5",
        name: "Reporting & Analytics",
        userIntent: "I want real-time, accurate reports across all schools without manual data gathering",
        currentState: "80+ Google Sheets manually maintained. Data copied from SIS, often stale. Manual aggregation across campuses required.",
        futureState: "Unified reporting layer. Real-time executive dashboards. Automated Google Sheets sync. Compliance reports with one click. Network-wide KPIs.",
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
