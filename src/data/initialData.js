export const BUCKETS = ['Marketing', 'Admissions', 'Roster', 'Academics'];
export const LEVELS = ['Today', '26/27', 'End State'];
export const SYSTEMS = ['HubSpot', 'Legacy SIS', 'FinalSite', 'Unified Student Platform'];

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
        bucket: "Marketing",
        userIntent: "I want to understand if Alpha is the right school for my child",
        evolution: {
          "Today": { description: "Marketing website, word of mouth, events. Attribution and tracking difficult although systems are being built to tackle this as I understand it.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p1b",
        name: "Attend Events",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to attend events to learn more about Alpha and see if it's the right fit",
        evolution: {
          "Today": { description: "Hear about events through word of mouth, social media, or email. Sign up via various links. No centralized event calendar or registration experience.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p2",
        name: "Inquiry and Next Steps",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to express interest and learn next steps",
        evolution: {
          "Today": { description: "Fill out web form. Wait for admissions to call/email back. No visibility into inquiry status or next steps.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3",
        name: "Enrollment",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to apply, get accepted, and complete everything needed to enroll my child at Alpha",
        evolution: {
          "Today": { description: "Steps: 1) Apply via HubSpot Forms with no status tracking. 2) Book shadow day via phone/email coordination. 3) Receive offer via email, accept by replying. 4) Pay deposit via separate payment links, set up billing manually. 5) Submit child data (medical, emergency contacts) via email/paper with no visibility into what's missing. 6) Sign legal agreements via DocuSign sent separately. Each step is disconnected, manual, and hard to track.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Steps: 1) Apply in parent portal with real-time status tracking. 2) Self-schedule shadow day from available slots. 3) View and accept offer in portal with one click. 4) Pay deposit and set up billing in portal. 5) Complete all required forms in portal with checklist and reminders. 6) Sign all agreements electronically in portal. Entire flow is unified, trackable, and automated.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p5",
        name: "Enrolled Student Experience",
        phase: "Post-Application",
        bucket: "Roster",
        userIntent: "I want to stay informed and manage my enrolled child's school life",
        evolution: {
          "Today": { description: "No parent-facing view of enrolled student. Must call registrar for grades, schedules, guide info, medical updates. No way to update emergency contacts or submit forms online.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "View child's profile in portal: grades, guide, schedule, medical info, emergency contacts. Update information as needed. Submit forms online. Communicate with guide. View announcements and calendar.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p6",
        name: "Re-enrollment",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to re-enroll my child for next year and complete all required steps",
        evolution: {
          "Today": { description: "Steps: 1) Receive re-enrollment offer via email, accept by replying. 2) Pay deposit via separate payment links, no connection to re-enrollment flow. 3) Update child data via emailed forms with no tracking. 4) Sign new tuition agreement via DocuSign sent separately. Each step is manual and disconnected.", systems: ["FinalSite"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Steps: 1) View and accept re-enrollment offer in portal. 2) Pay deposit and set up next year's billing in portal. 3) Update forms pre-filled from last year with checklist and reminders. 4) Sign all updated agreements electronically in portal. Entire flow is unified and trackable.", systems: ["Unified Student Platform"] }
        },
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
        id: "a0a",
        name: "Parent-Facing Events",
        bucket: "Marketing",
        userIntent: "I want to organize events that help prospective families learn about Alpha and drive enrollment interest",
        evolution: {
          "Today": { description: "Events organized manually. Promotion through email, social media, word of mouth. Registration via various tools. No centralized tracking of event attendance or conversion to inquiries.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a0b",
        name: "Student-Facing Events (Camps & Tournaments)",
        bucket: "Marketing",
        userIntent: "I want to run camps, tournaments, and other student-facing events that build brand awareness and attract prospective families",
        evolution: {
          "Today": { description: "Events set up manually. Separate registration processes. No connection between event attendance and admissions pipeline. Hard to track which event participants later apply.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a1",
        name: "Lead Management & Initial Contact",
        bucket: "Marketing",
        userIntent: "I want to convert inquiries into qualified applications",
        evolution: {
          "Today": { description: "HubSpot for lead capture. Manual follow-up emails. No unified view of inquiry status across systems.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a2",
        name: "Application Processing",
        bucket: "Admissions",
        userIntent: "I want to guide families through the application process with as little friction as possible",
        evolution: {
          "Today": { description: "Manual orchestration of the entire process - collecting documents via email, entering data into HubSpot/SIS, following up on missing items, coordinating with families across multiple channels.", systems: ["HubSpot", "Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Portal-driven workflow where families self-serve. Admissions monitors progress dashboards, receives alerts for stalled applications, and intervenes only when needed.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a3",
        name: "Shadow Day Coordination",
        bucket: "Admissions",
        userIntent: "I want to coordinate shadow days smoothly without overbooking",
        evolution: {
          "Today": { description: "Manual Google Calendar + spreadsheet capacity tracking. Email/phone to coordinate with parents and guides.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Real-time capacity dashboard. Parents self-schedule via portal. Automated guide assignment and reminders.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a4",
        name: "Offer Management & Conversion",
        bucket: "Admissions",
        userIntent: "I want to extend offers and track conversions effectively",
        evolution: {
          "Today": { description: "Manual offer letters via email. Track acceptances in spreadsheets. No unified view of offer funnel.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "One-click extend/reject offers. Automated parent notification. Real-time dashboard of offer funnel and conversion rates.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a6",
        name: "Reporting & Analytics",
        bucket: "Admissions",
        userIntent: "I want to see pipeline metrics and conversion rates without manual tracking",
        evolution: {
          "Today": { description: "Track funnel in HubSpot + spreadsheets. Manual calculation of conversion rates. No real-time visibility into pipeline health.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Real-time admissions dashboard. Funnel metrics (inquiry → application → shadow → offer → enrolled). Conversion rates by source, campus, grade. Automated weekly reports.", systems: ["Unified Student Platform"] }
        },
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
        bucket: "Roster",
        userIntent: "I want to set up new students quickly and accurately",
        evolution: {
          "Today": { description: "Receive manual notification from admissions. Create student record in legacy SIS. Manual data entry from emailed documents.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Automated notification when student enrolls. Pre-populated student record from application data. Review and finalize setup.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r2",
        name: "Student Records Management",
        bucket: "Roster",
        userIntent: "I want to access and update student records efficiently",
        evolution: {
          "Today": { description: "Legacy SIS (slow, buggy). Hard to find info. No visual alerts for critical information like medical conditions.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Clean, fast portal. Complete student profiles with enrollment history. Color-coded medical alerts (RED/ORANGE/YELLOW).", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r3",
        name: "Medical Records & Compliance",
        bucket: "Roster",
        userIntent: "I want to ensure all students have up-to-date medical records",
        evolution: {
          "Today": { description: "Email attachments + legacy SIS storage. No proactive alerts for missing/expired medical info. Hard to access in emergencies.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Digital medical records with visual alerts. Automated reminders for updates. Easy access for authorized staff.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r4",
        name: "Re-enrollment Triggering & Tracking",
        bucket: "Admissions",
        userIntent: "I want to manage re-enrollment season efficiently",
        evolution: {
          "Today": { description: "Manual email campaigns to parents. Track completion in spreadsheets. Manual follow-ups for missing forms.", systems: ["FinalSite"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "One-click re-enrollment trigger. Forms auto-created in parent portal. Real-time completion dashboard.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r5",
        name: "Attendance Management",
        bucket: "Roster",
        userIntent: "I want to access and manage attendance data without manual spreadsheet work",
        evolution: {
          "Today": { description: "Receive attendance data from guides via spreadsheets. Consolidate and track in Google Sheets. No centralized view. Manual effort to generate attendance reports.", systems: [] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Real-time attendance dashboard auto-synced from guide mobile app. Attendance visible in student profiles. Easy compliance reporting. Parents see attendance in portal.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r6",
        name: "Reporting & Analytics",
        bucket: "Roster",
        userIntent: "I want to generate compliance reports and student lists without manual data export",
        evolution: {
          "Today": { description: "80% of work done in Excel. Manual export from legacy SIS. Build reports by copying data into spreadsheets.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "One-click compliance reports (immunizations, attendance, enrollment verification). Custom student lists with filters. Automated Google Sheets sync for recurring reports.", systems: ["Unified Student Platform"] }
        },
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
        bucket: "Academics",
        userIntent: "I want to understand my students' backgrounds and needs",
        evolution: {
          "Today": { description: "Must ask registrar for student info. No direct access to medical alerts, emergency contacts, or enrollment history.", systems: [] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "View complete student profiles: academic progress, medical alerts, parent contacts, enrollment history.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g3",
        name: "Progress Tracking & Notes",
        bucket: "Academics",
        userIntent: "I want to track and document student progress",
        evolution: {
          "Today": { description: "Track student progress in personal spreadsheets or notebooks. No centralized system.", systems: [] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Log student progress notes in guide portal. Track goals, interventions, and milestones. Share with parents/admissions as needed.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g5",
        name: "Attendance Taking & Tracking",
        bucket: "Academics",
        userIntent: "I want to take attendance quickly and ensure it's recorded accurately",
        evolution: {
          "Today": { description: "Take attendance via Android app. Export data to manual spreadsheet. Send to registrars via email. No visibility into attendance trends or history.", systems: [] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Mobile attendance app with real-time sync. Attendance automatically recorded in student profiles. View attendance history and trends for assigned students.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g5b",
        name: "Incident Reporting",
        bucket: "Academics",
        userIntent: "I want to report and document student incidents quickly and ensure the right people are notified",
        evolution: {
          "Today": { description: "Report incidents via email or verbal communication. No standardized process. Hard to track incident history or patterns for a student.", systems: [] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Submit incident reports from guide portal or mobile app. Automated notifications to relevant staff and parents. Incident history tracked in student profile.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g5c",
        name: "Shadow Day Preparation",
        bucket: "Admissions",
        userIntent: "I want to see which students are shadowing with me today and understand their background before they arrive",
        evolution: {
          "Today": { description: "Find out about shadow students via email or verbal heads-up from admissions. Little to no background info provided. Often surprised by shadow students showing up.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "See daily shadow day schedule in guide portal with student name, age, background notes, and any special considerations. Notified in advance with all relevant context.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g6",
        name: "Shadow Day Feedback",
        bucket: "Admissions",
        userIntent: "I want to provide feedback on shadow day students quickly after their visit",
        evolution: {
          "Today": { description: "Send feedback via email which is then entered into HubSpot, or manually enter feedback into HubSpot directly.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Provide shadow day feedback directly from the guide portal. Feedback instantly available to admissions team.", systems: ["Unified Student Platform"] }
        },
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
        bucket: "Admissions",
        userIntent: "I want to ensure tuition is calculated correctly and agreements are accurate",
        evolution: {
          "Today": { description: "Manual spreadsheet calculations. Different calculations in SIS, payment page, and Maxio. Frequent errors.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Automated tuition calculation engine. Single source of truth. Tuition agreements auto-generated with correct amounts.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "f2",
        name: "Payment Processing & Tracking",
        bucket: "Admissions",
        userIntent: "I want to track payments reliably without manual reconciliation",
        evolution: {
          "Today": { description: "Check Maxio, Stripe, HubSpot separately. Manual reconciliation required. Cannot trust automated invoices.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Unified payment dashboard. Real-time payment status across all families. Stripe integration. Automatic reconciliation.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "f3",
        name: "Multi-Payer & Split Billing",
        bucket: "Admissions",
        userIntent: "I want to handle complex family billing situations correctly",
        evolution: {
          "Today": { description: "Cannot cleanly handle divorced families with split custody. Manual workarounds, error-prone.", systems: [] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Multi-household billing support. Split tuition between multiple payers. Each payer gets separate agreement and invoice.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "f4",
        name: "Financial Reporting & Reconciliation",
        bucket: "Admissions",
        userIntent: "I want accurate financial reports without manual work",
        evolution: {
          "Today": { description: "Manual export from multiple systems. Reconcile in Excel. Time-consuming, error-prone.", systems: [] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "One-click financial reports. Export to accounting software. Automatic reconciliation with Stripe charges.", systems: ["Unified Student Platform"] }
        },
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
        name: "Accurate, Real-Time Roster Data",
        bucket: "Roster",
        userIntent: "I want accurate, real-time roster data so the right students have access to my platform",
        evolution: {
          "Today": { description: "Synchronization through endpoints that expose database entities directly, with no high-level contract or consistent data model.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "OneRoster-compliant API. Real-time roster updates. All learning platforms (DASH, TimeBack, etc.) must register in the SIS. Students are assigned to each app based on current enrollment. Platforms query SIS directly for student/class data.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp2",
        name: "Student Access Provisioning",
        bucket: "Roster",
        userIntent: "I want students to automatically have access when they enroll, and lose access when they leave",
        evolution: {
          "Today": { description: "Manual processes to grant/revoke platform access. Delays when students enroll or withdraw. Each platform requires separate provisioning.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Automated access provisioning based on enrollment status. Students get access to all appropriate platforms immediately upon enrollment.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp3",
        name: "Alpha Anywhere Integration",
        bucket: "Roster",
        userIntent: "I want to enroll online students and have them immediately access learning tools",
        evolution: {
          "Today": { description: "Alpha Anywhere manages its own enrollment. No unified view across Alpha Network Schools + Alpha Anywhere. Cannot cross-enroll.", systems: [] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "SIS tracks Alpha Anywhere enrollments (roster-only, no billing). Unified view of all Alpha students. Multi-program enrollment supported.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp4",
        name: "Third-Party Partner Schools",
        bucket: "Roster",
        userIntent: "I want my students to use 2-Hour Learning tools without complex setup or manual data entry",
        evolution: {
          "Today": { description: "No integration. Partner schools cannot access 2HL learning tools for their students.", systems: [] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Partner schools submit roster to SIS (CSV upload or API). SIS provisions access to DASH/TimeBack for partner students. Partner-specific dashboards.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp5",
        name: "Grade & Progress Data Exchange",
        bucket: "Academics",
        userIntent: "I want to send student progress data back to the SIS and trust it will be recorded accurately",
        evolution: {
          "Today": { description: "SIS doesn't record any progress data.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "Registered apps/platforms send progress data back to SIS for automatic grade transcripts.", systems: ["Unified Student Platform"] }
        },
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
