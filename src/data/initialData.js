export const BUCKETS = ['Marketing', 'Admissions', 'Re-enrollment', 'Roster', 'Academics', 'After School'];
export const LEVELS = ['Today', '26/27', 'End State'];
export const SYSTEMS = ['HubSpot', 'Legacy SIS', 'FinalSite', 'Unified Student Platform', 'AfterSchool HQ'];
export const USER_ORDER = ['parents', 'admissions', 'registrars', 'guides', 'finance', 'afterSchool', 'learningPlatforms'];
export const AUTOMATION_LEVELS = ['Human Driven', 'Software 1.0', 'Software 3.0', 'Hybrid'];

export const initialData = {
  parents: {
    name: "Parents",
    color: "blue",
    type: "internal",
    stages: [
      // ── Pre-Application / Marketing ──────────────────────────
      {
        id: "p1",
        name: "Learn about Alpha",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to understand if Alpha is the right school for my child",
        entryPoint: "Arrives at website / hears about school",
        exitPoint: "Understands Alpha's model and differentiators",
        evolution: {
          "Today": { description: "Marketing website, word of mouth, events, social media, community website.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p1-browse-events",
        name: "Browse upcoming events",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to see what events are coming up that I can attend",
        entryPoint: "Visits events page",
        exitPoint: "Sees relevant events filtered to their stage",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p1-register-event",
        name: "Register for event",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to sign up for an upcoming event",
        entryPoint: "Clicks \"Register\" on an event",
        exitPoint: "Registration confirmed, calendar invite sent",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p1b",
        name: "Attend event",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to attend events to learn more about Alpha and see if it's the right fit",
        entryPoint: "Shows up on event day",
        exitPoint: "Attendance recorded (sign-in)",
        evolution: {
          "Today": { description: "Hear about events and sign up via website events calendar, word of mouth, social media, email. Soon also via community site, and through the MacKenzie voice bot.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p1-post-event",
        name: "Complete post-event survey",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to share my feedback after attending an event",
        entryPoint: "Receives feedback survey (next day)",
        exitPoint: "Survey submitted",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p2",
        name: "Submit inquiry",
        phase: "Pre-Application",
        bucket: "Marketing",
        userIntent: "I want to express interest and learn next steps",
        entryPoint: "Fills out inquiry form on website",
        exitPoint: "Confirmation received, enters admissions pipeline",
        evolution: {
          "Today": { description: "Fill out web form. Wait for admissions to call/email back. Parent receives a confirmation via email. Expansion team follows-up. Option to schedule a call. But no visibility into inquiry status.\n\nAdmissions process on website, soon on the communities site, and via MacKenzie voice bot.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Application ──────────────────────────────────────────
      {
        id: "p3",
        name: "Admissions & Enrollment",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to apply, get accepted, and complete everything needed to enroll my child at Alpha",
        entryPoint: "Clicks \"Apply\" in parent portal",
        exitPoint: "Child fully enrolled — all forms signed, payments set up, ready for first day",
        evolution: {
          "Today": { description: "1) Apply via HubSpot Forms with no status tracking.\n2) Book shadow day via phone/email coordination.\n- A call from admissions after an application is a part of the process.\n3) Receive offer via email, accept by paying the deposit (and optionally replying, but the registrar will follow-up after deposit is paid)\n4) Pay deposit via a payment link (in offer email), which sets up billing.\n5) Submit child data (medical, emergency contacts) SIS forms.\n6) Sign legal agreements as SIS Forms.", systems: ["HubSpot", "Legacy SIS"] },
          "26/27": { description: "1) Apply in parent portal with real-time status tracking.\n2) Self-schedule shadow day from available slots.\n3) View and accept offer in portal with one click.\n4) Sign contract, pay deposit and set up billing in portal.\n5) Complete all required forms in portal with checklist.\n6) Sign all agreements electronically in portal.\nUnexciting experience. Doesn't advise / sell. No AI agent to answer questions about the application process. No information re next steps and the first day of school.", systems: ["FinalSite"] },
          "End State": { description: "1) Apply in parent portal with real-time status tracking.\n2) Self-schedule shadow day from available slots.\n3) View and accept offer in portal with one click.\n4) Pay deposit and set up billing in portal.\n5) Complete all required forms in portal with checklist and reminders.\n6) Sign all agreements electronically in portal. Entire flow is unified, trackable, and automated.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3-create-app",
        name: "Create application",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to start an application for my child",
        entryPoint: "Clicks \"Apply\" in parent portal",
        exitPoint: "Application created with child info submitted",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3-pay-fee",
        name: "Pay application fee",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to pay the application fee to proceed",
        entryPoint: "Navigates to payment section",
        exitPoint: "$100 fee paid, receipt received",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Shadow Day ───────────────────────────────────────────
      {
        id: "p3-shadow",
        name: "Schedule shadow day",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to book a shadow day visit for my child",
        entryPoint: "Opens shadow day scheduler",
        exitPoint: "Slot selected from available dates by campus/grade, confirmed, guide assigned, reminders set",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3-shadow-forms",
        name: "Sign shadow day forms",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to complete the required forms before the shadow day",
        entryPoint: "Forms assigned (auto or manual)",
        exitPoint: "All required shadow forms signed",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Offer ────────────────────────────────────────────────
      {
        id: "p3-offer",
        name: "Review & respond to offer",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to review the offer and decide whether to enroll my child",
        entryPoint: "Offer notification received from admissions",
        exitPoint: "Parent reviews offer details + tuition preview, then accepts (proceeds to enrollment) or declines",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Enrollment ───────────────────────────────────────────
      {
        id: "p3-deposit",
        name: "Pay enrollment deposit",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to secure my child's spot by paying the enrollment deposit",
        entryPoint: "Navigates to deposit payment",
        exitPoint: "$1,000 deposit paid, enrollment initiated",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3-enroll-forms",
        name: "Sign enrollment forms",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to complete all required enrollment paperwork",
        entryPoint: "Enrollment forms assigned",
        exitPoint: "All enrollment forms (emergency, medical, directory, etc.) signed",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3-tuition",
        name: "Review & sign tuition contract",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to understand and sign the tuition agreement including any financial aid",
        entryPoint: "Admin releases contract with tuition/discounts/financial aid",
        exitPoint: "Contract signed with full breakdown confirmed",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p3-payment-plan",
        name: "Set up payment plan & co-payers",
        phase: "Post-Application",
        bucket: "Admissions",
        userIntent: "I want to configure how and when tuition payments are made",
        entryPoint: "Selects payment plan (monthly/quarterly/annual)",
        exitPoint: "Autopay configured, co-payers invited and accepted, split amounts set",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Enrolled Student Experience ──────────────────────────
      {
        id: "p5",
        name: "Enrolled Student Experience",
        phase: "Post-Application",
        bucket: "Roster",
        userIntent: "I want to stay informed and manage my enrolled child's school life",
        entryPoint: "Logs into parent portal",
        exitPoint: "Student info viewed/updated, school communications reviewed",
        evolution: {
          "Today": { description: "Hard to use parent-facing view of enrolled student. Parent Portal exists, but it's very low quality. No agent to answer day-to-day question and assist with parent needs. Must email registrar for grades, schedules, guide info, or to update medical info, emergency contacts. Parent communications are done in yet another system - ParentSquare. Afterschool programs are yet in another system.", systems: ["Legacy SIS"] },
          "26/27": { description: "View child's profile in portal: grades, guide, schedule, medical info, emergency contacts. Update information as needed. Submit forms online. Communicate with guide. View announcements and calendar.", systems: ["Unified Student Platform"] },
          "End State": { description: "View child's profile in portal: grades, guide, schedule, medical info, emergency contacts. Update information as needed. Submit forms online. Communicate with guide. View announcements and calendar.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p5-view-student",
        name: "View & update student information",
        phase: "Post-Application",
        bucket: "Roster",
        userIntent: "I want to see and update my child's profile, contacts, and documents",
        entryPoint: "Logs into portal",
        exitPoint: "Profile, contact info, medical info, attendance, or documents viewed/updated",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p5-billing",
        name: "View billing & payment history",
        phase: "Post-Application",
        bucket: "Roster",
        userIntent: "I want to check my payment schedule, balance, and past invoices",
        entryPoint: "Opens billing section",
        exitPoint: "Payment schedule, balance, and invoices reviewed",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p5-message",
        name: "Message school staff",
        phase: "Post-Application",
        bucket: "Roster",
        userIntent: "I want to communicate with my child's guide or school staff",
        entryPoint: "Opens messages",
        exitPoint: "Message sent, conversation started",
        evolution: {
          "Today": { description: "-", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Re-enrollment ────────────────────────────────────────
      {
        id: "p6-confirm-info",
        name: "Confirm/update info for next year",
        phase: "Post-Application",
        bucket: "Re-enrollment",
        userIntent: "I want to verify and update my family's information for the new school year",
        entryPoint: "Opens re-enrollment flow",
        exitPoint: "Family and student info confirmed or updated for next year",
        evolution: {
          "Today": { description: "View and accept re-enrollment offer in portal.", systems: ["FinalSite"] },
          "26/27": { description: "View and accept re-enrollment offer in portal.", systems: ["FinalSite"] },
          "End State": { description: "View and accept re-enrollment offer in portal.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p6-forms",
        name: "Sign re-enrollment forms",
        phase: "Post-Application",
        bucket: "Re-enrollment",
        userIntent: "I want to sign the required re-enrollment forms for next year",
        entryPoint: "3 forms presented (intent, tuition agreement, medical confirmation)",
        exitPoint: "All re-enrollment forms signed",
        evolution: {
          "Today": { description: "Update forms pre-filled from last year with checklist and reminders. Sign all updated agreements electronically in portal.", systems: ["FinalSite"] },
          "26/27": { description: "Update forms pre-filled from last year with checklist and reminders. Sign all updated agreements electronically in portal.", systems: ["FinalSite"] },
          "End State": { description: "Update forms pre-filled from last year with checklist and reminders. Sign all updated agreements electronically in portal.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p6-payment",
        name: "Set up re-enrollment payment",
        phase: "Post-Application",
        bucket: "Re-enrollment",
        userIntent: "I want to set up payment for next year's tuition",
        entryPoint: "Payment section in re-enrollment flow",
        exitPoint: "Payment for next year configured and confirmed",
        evolution: {
          "Today": { description: "Pay deposit and set up next year's billing in portal.", systems: ["FinalSite"] },
          "26/27": { description: "Pay deposit and set up next year's billing in portal.", systems: ["FinalSite"] },
          "End State": { description: "Pay deposit and set up next year's billing in portal.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── After School Programs ────────────────────────────────
      {
        id: "p7-register",
        name: "Register for after school program",
        bucket: "After School",
        userIntent: "I want to sign my child up for an after school program",
        entryPoint: "Browses program catalog, selects a program",
        exitPoint: "Registration confirmed, payment set up",
        evolution: {
          "Today": { description: "After school programs managed in a separate system (afterschoolhq.com). Separate registration and payment from the main school experience. No connection to student profile.", systems: ["AfterSchool HQ"] },
          "26/27": { description: "-", systems: ["AfterSchool HQ"] },
          "End State": { description: "-", systems: ["AfterSchool HQ"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "p7-manage",
        name: "Manage program enrollment",
        bucket: "After School",
        userIntent: "I want to view or change my child's after school program enrollments",
        entryPoint: "Views current after school programs",
        exitPoint: "Schedule viewed, or program dropped",
        evolution: {
          "Today": { description: "Managed in afterschoolhq.com. No connection to student profile or school communications.", systems: ["AfterSchool HQ"] },
          "26/27": { description: "-", systems: ["AfterSchool HQ"] },
          "End State": { description: "-", systems: ["AfterSchool HQ"] }
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
      // ── Marketing & Events ───────────────────────────────────
      {
        id: "a0a",
        name: "Manage event",
        bucket: "Marketing",
        userIntent: "I want to organize events that help prospective families learn about Alpha and drive enrollment interest",
        entryPoint: "Creates event with date, venue, capacity, description",
        exitPoint: "Event published on website with registration link, registrations tracked, logistics confirmed",
        evolution: {
          "Today": { description: "Events managed via HubSpot. Standard events have landing pages and registration forms automatically created and published on the website. Promotion through website, email, social media, word of mouth. Attendance, lead source, and conversion tracking via HubSpot and the QuickSight dashboard.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a0a-followup",
        name: "Post-event follow-up",
        bucket: "Marketing",
        userIntent: "I want to capture event outcomes and follow up with attendees",
        entryPoint: "Event concludes",
        exitPoint: "Attendance recorded, lead sources tagged, surveys sent and results collected",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a0b",
        name: "Set up camp/tournament",
        bucket: "After School",
        userIntent: "I want to run camps, tournaments, and other student-facing events that build brand awareness and attract prospective families",
        entryPoint: "Creates program in AfterSchool HQ",
        exitPoint: "Program live, registration open",
        evolution: {
          "Today": { description: "Camps set up in a dedicated system - afterschoolhq.com. Separate registration processes. No connection between event attendance and admissions pipeline. Currently hard to track which event participants later apply, but will be added to the Dashboard in February.", systems: ["AfterSchool HQ"] },
          "26/27": { description: "-", systems: ["AfterSchool HQ"] },
          "End State": { description: "-", systems: ["AfterSchool HQ"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Lead Management ──────────────────────────────────────
      {
        id: "a1",
        name: "Receive & qualify inquiry",
        bucket: "Marketing",
        userIntent: "I want to convert inquiries into qualified applications",
        entryPoint: "Parent submits inquiry form",
        exitPoint: "Lead created in pipeline, tagged (hot/warm/cold), follow-up scheduled",
        evolution: {
          "Today": { description: "HubSpot for lead capture. Follow-up sequences. Leads and conversion showing in QS Dashboard.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a1-followup",
        name: "Run follow-up sequence",
        bucket: "Marketing",
        userIntent: "I want to nurture leads through automated and manual follow-ups until they respond",
        entryPoint: "Lead enters nurture flow",
        exitPoint: "Parent responds or sequence completes",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: [] },
          "End State": { description: "-", systems: [] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Application Processing ───────────────────────────────
      {
        id: "a2",
        name: "Review & manage application",
        bucket: "Admissions",
        userIntent: "I want to guide families through the application process with as little friction as possible",
        entryPoint: "New application arrives in pipeline",
        exitPoint: "Application reviewed, notes added, missing info requested if needed, status updated",
        evolution: {
          "Today": { description: "Manual shadow day coordination. Manual follow-up on missing items with parents. Manual parent assistance via email and calls. Mistakes updating records and perception of complexity with HubSpot.", systems: ["HubSpot", "Legacy SIS"] },
          "26/27": { description: "End-to-end self-serve workflow for parents. No AI agents. Admissions still has to provide manual assistance. Several steps are still manual for admissions (e.g. contract generation, form validation).", systems: ["FinalSite"] },
          "End State": { description: "Portal-driven workflow where families self-serve. Admissions monitors progress dashboards, receives alerts for stalled applications, and intervenes only when needed. AI agents monitor, remind, and provide assistance.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Shadow Day Operations ────────────────────────────────
      {
        id: "a3-slots",
        name: "Create shadow day event slots",
        bucket: "Admissions",
        userIntent: "I want to define when shadow days are available for booking",
        entryPoint: "Defines available dates, capacity, and campus",
        exitPoint: "Slots published, available for parent booking",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a3",
        name: "Manage shadow day",
        bucket: "Admissions",
        userIntent: "I want to coordinate shadow days smoothly without overbooking",
        entryPoint: "Student books a shadow day slot",
        exitPoint: "Guide assigned and notified, attendance marked on event day",
        evolution: {
          "Today": { description: "Manual Google Calendar + spreadsheet capacity tracking. Email/phone to coordinate with parents and guides.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Real-time capacity dashboard. Parents self-schedule via portal. Automated guide assignment and reminders.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Offer Management ─────────────────────────────────────
      {
        id: "a4",
        name: "Make & track offer decision",
        bucket: "Admissions",
        userIntent: "I want to extend offers and track conversions effectively",
        entryPoint: "Reviews complete application + guide feedback",
        exitPoint: "Offer extended or rejected, tracks whether parent accepted or declined",
        evolution: {
          "Today": { description: "Manual offer letters via email. Track acceptances in spreadsheets. No unified view of offer funnel.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "One-click extend/reject offers. Automated parent notification. Real-time dashboard of offer funnel and conversion rates.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Forms ────────────────────────────────────────────────
      {
        id: "a-forms",
        name: "Manage forms & track completion",
        bucket: "Admissions",
        userIntent: "I want to assign forms to applicants and track who has signed what",
        entryPoint: "Opens forms dashboard",
        exitPoint: "Forms assigned to students, signing progress tracked across all applicants, follow-ups sent for unsigned forms",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Enrollment Conversion ────────────────────────────────
      {
        id: "a-contract",
        name: "Prepare & release tuition contract",
        bucket: "Admissions",
        userIntent: "I want to prepare an accurate tuition contract with all discounts and financial aid applied",
        entryPoint: "Calculates tuition + discounts + financial aid",
        exitPoint: "Contract released to parent in portal",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a-monitor-enroll",
        name: "Monitor & complete enrollment",
        bucket: "Admissions",
        userIntent: "I want to track each accepted student's progress through enrollment steps and mark them enrolled when done",
        entryPoint: "Offer accepted by parent",
        exitPoint: "Tracks form/payment completion progress, marks student as enrolled when all steps done",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot", "Legacy SIS"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Reporting & Analytics ────────────────────────────────
      {
        id: "a6",
        name: "View pipeline dashboard",
        bucket: "Admissions",
        userIntent: "I want to see pipeline metrics and conversion rates without manual tracking",
        entryPoint: "Opens admissions dashboard",
        exitPoint: "Sees funnel metrics (inquiry → application → shadow → offer → enrolled), conversion rates by source/event",
        evolution: {
          "Today": { description: "Track funnel in HubSpot + spreadsheets. Manual calculation of conversion rates. No real-time visibility into pipeline health.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Real-time admissions dashboard. Funnel metrics (inquiry → application → shadow → offer → enrolled). Conversion rates by source, campus, grade. Automated weekly reports.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "a6-report",
        name: "Generate admissions report",
        bucket: "Admissions",
        userIntent: "I want to generate a filtered admissions report for stakeholders",
        entryPoint: "Selects report parameters and filters",
        exitPoint: "Report generated and exported",
        evolution: {
          "Today": { description: "-", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
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
      // ── Student Records ──────────────────────────────────────
      {
        id: "r1",
        name: "New Student Enrollment Setup",
        bucket: "Roster",
        userIntent: "I want to set up new students quickly and accurately",
        entryPoint: "Receives notification that a new student has enrolled",
        exitPoint: "Student record created and verified in SIS",
        evolution: {
          "Today": { description: "Receive manual notification from admissions. Create student record in legacy SIS. Manual data entry from emailed documents.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Automated notification when student enrolls. Pre-populated student record from application data. Review and finalize setup.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r2",
        name: "View & manage student record",
        bucket: "Roster",
        userIntent: "I want to access and update student records efficiently",
        entryPoint: "Searches for student by name/ID/grade",
        exitPoint: "Contact info, emergency contacts, family info, and enrollment history viewed or updated; parent notified of changes",
        evolution: {
          "Today": { description: "Legacy SIS (slow, buggy). Hard to find info. No visual alerts for critical information like medical conditions.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Clean, fast portal. Complete student profiles with enrollment history. Color-coded medical alerts (RED/ORANGE/YELLOW).", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Medical & Health ─────────────────────────────────────
      {
        id: "r3",
        name: "Manage student medical records",
        bucket: "Roster",
        userIntent: "I want to ensure all students have up-to-date medical records",
        entryPoint: "Opens medical tab for a student",
        exitPoint: "Medications, allergies, immunizations, and health alerts viewed or updated; compliance status current",
        evolution: {
          "Today": { description: "Email attachments + legacy SIS storage. No proactive alerts for missing/expired medical info. Hard to access in emergencies.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Digital medical records with visual alerts. Automated reminders for updates. Easy access for authorized staff.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r3-accommodation",
        name: "Manage accommodation plan",
        bucket: "Roster",
        userIntent: "I want to document and track IEP/504/IAP plans for students who need accommodations",
        entryPoint: "Creates or opens IEP/504/IAP for a student",
        exitPoint: "Plan documented with effective dates, review schedule, and supporting documents attached",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Attendance ───────────────────────────────────────────
      {
        id: "r5",
        name: "Monitor student attendance",
        bucket: "Roster",
        userIntent: "I want to access and manage attendance data without manual spreadsheet work",
        entryPoint: "Opens attendance view (per-student or campus-wide)",
        exitPoint: "Attendance records and patterns reviewed, concerns flagged for follow-up",
        evolution: {
          "Today": { description: "Tracked via 3rd party mobile app: Alora. Receive attendance data from guides via spreadsheets. Consolidate and track in Google Sheets. No centralized view. Manual effort to generate attendance reports.", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Real-time attendance dashboard auto-synced from guide mobile app. Attendance visible in student profiles. Easy compliance reporting. Parents see attendance in portal.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Forms & Documents ────────────────────────────────────
      {
        id: "r-forms",
        name: "Manage student forms & documents",
        bucket: "Roster",
        userIntent: "I want to assign forms to students and manage their documents",
        entryPoint: "Opens forms/files tab for a student",
        exitPoint: "Forms assigned and signing status tracked; documents uploaded, categorized, or downloaded",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Financial ────────────────────────────────────────────
      {
        id: "r-finances",
        name: "Manage student finances",
        bucket: "Roster",
        userIntent: "I want to review and adjust a student's tuition, balance, and payment schedule",
        entryPoint: "Opens finances tab for a student",
        exitPoint: "Tuition, balance, and payment schedule reviewed; adjustments (discounts/credits) applied if needed",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Re-enrollment ────────────────────────────────────────
      {
        id: "r4",
        name: "Manage re-enrollment",
        bucket: "Admissions",
        userIntent: "I want to manage re-enrollment season efficiently",
        entryPoint: "Selects enrolled student or opens re-enrollment dashboard",
        exitPoint: "Re-enrollment triggered, progress monitored across students, completed when parent finishes (grade advanced, new enrollment created)",
        evolution: {
          "Today": { description: "Manual email campaigns to parents. Track completion in spreadsheets. Manual follow-ups for missing forms.", systems: ["FinalSite"] },
          "26/27": { description: "FinalSite Re-Enrollment. Self-Serve for parents. Still a few manual steps for Registrar (update discounts/financial aid and issue contract).", systems: ["FinalSite"] },
          "End State": { description: "One-click re-enrollment trigger. Forms auto-created in parent portal. Real-time completion dashboard.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Withdrawal & Transfer ────────────────────────────────
      {
        id: "r-withdrawal",
        name: "Process student withdrawal",
        bucket: "Roster",
        userIntent: "I want to properly withdraw a student and preserve their records",
        entryPoint: "Initiates withdrawal for a student",
        exitPoint: "Student withdrawn, records preserved, app access revoked",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "r-transfer",
        name: "Process campus transfer",
        bucket: "Roster",
        userIntent: "I want to move a student to a different campus while keeping their history intact",
        entryPoint: "Initiates transfer for a student",
        exitPoint: "Student moved to new campus, enrollment history updated, guide reassigned",
        evolution: {
          "Today": { description: "-", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Reporting ────────────────────────────────────────────
      {
        id: "r6",
        name: "Generate reports & queries",
        bucket: "Roster",
        userIntent: "I want to generate compliance reports and student lists without manual data export",
        entryPoint: "Selects report type, applies filters, or asks question in AI chat",
        exitPoint: "Compliance reports exported, filtered student lists generated, or natural language query answered",
        evolution: {
          "Today": { description: "80% of work done in GSheets. SIS has a feature to dynamically sync reports to GSheets, but the experience is clunky. Most people don't understand how to run a reports.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Agent-based reporting. Ask agent in plain English.\nAlso, one-click compliance reports (immunizations, attendance, enrollment verification). Custom student lists with filters. Automated Google Sheets sync for recurring reports.", systems: ["Unified Student Platform"] }
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
      // ── Daily Operations ─────────────────────────────────────
      {
        id: "g5",
        name: "Take daily attendance",
        bucket: "Academics",
        userIntent: "I want to take attendance quickly and ensure it's recorded accurately",
        entryPoint: "Opens attendance for today's roster",
        exitPoint: "All assigned students marked (present/absent/late/excused), records synced",
        evolution: {
          "Today": { description: "Take attendance via Android app. Export data to manual spreadsheet. Send to registrars via email. No visibility into attendance trends or history.", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Mobile attendance app with real-time sync. Attendance automatically recorded in student profiles. View attendance history and trends for assigned students.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Shadow Day ───────────────────────────────────────────
      {
        id: "g5c",
        name: "Prepare for & manage shadow day",
        bucket: "Admissions",
        userIntent: "I want to see which students are shadowing with me today and understand their background before they arrive",
        entryPoint: "Views today's shadow day schedule",
        exitPoint: "Shadow student backgrounds reviewed, attendance marked (attended or no-show)",
        evolution: {
          "Today": { description: "Find out about shadow students via email or verbal heads-up from admissions. Little to no background info provided. Often surprised by shadow students showing up.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "See daily shadow day schedule in guide portal with student name, age, background notes, and any special considerations. Notified in advance with all relevant context.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g6",
        name: "Submit shadow day feedback",
        bucket: "Admissions",
        userIntent: "I want to provide feedback on shadow day students quickly after their visit",
        entryPoint: "Shadow day attended by student",
        exitPoint: "Recommendation (accept/reject) and observation notes submitted to admissions",
        evolution: {
          "Today": { description: "Send feedback via email which is then entered into HubSpot, or manually enter feedback into HubSpot directly.", systems: ["HubSpot"] },
          "26/27": { description: "-", systems: ["FinalSite"] },
          "End State": { description: "Provide shadow day feedback directly from the guide portal. Feedback instantly available to admissions team.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Student Support ──────────────────────────────────────
      {
        id: "g2",
        name: "View & track student progress",
        bucket: "Academics",
        userIntent: "I want to understand my students' backgrounds, needs, and track their progress",
        entryPoint: "Opens student profile or progress view",
        exitPoint: "Student info reviewed, progress notes logged, goals/milestones documented",
        evolution: {
          "Today": { description: "Must ask registrar for student info. No direct access to medical alerts, emergency contacts, or enrollment history. Track student progress in personal spreadsheets or notebooks. No centralized system.", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "View complete student profiles: academic progress, medical alerts, parent contacts, enrollment history. Log progress notes in guide portal. Track goals, interventions, and milestones. Share with parents/admissions as needed.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "g5b",
        name: "Report student incident",
        bucket: "Academics",
        userIntent: "I want to report and document student incidents quickly and ensure the right people are notified",
        entryPoint: "Incident occurs",
        exitPoint: "Incident documented (what, when, who, severity), relevant staff and parents notified",
        evolution: {
          "Today": { description: "Report incidents via email or verbal communication. No standardized process. Hard to track incident history or patterns for a student.", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Submit incident reports from guide portal or mobile app. Automated notifications to relevant staff and parents. Incident history tracked in student profile.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },

      // ── Communication ────────────────────────────────────────
      {
        id: "g-message",
        name: "Message parents & staff",
        bucket: "Academics",
        userIntent: "I want to communicate with parents and other staff members",
        entryPoint: "Opens messages",
        exitPoint: "Message sent, conversation started",
        evolution: {
          "Today": { description: "-", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "-", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      }
    ]
  },
  afterSchool: {
    name: "After School Coordinators",
    color: "rose",
    type: "internal",
    stages: [
      {
        id: "as1",
        name: "Program Management",
        bucket: "After School",
        userIntent: "I want to create and manage after school programs, camps, and tournaments efficiently",
        entryPoint: "Creates or edits a program in AfterSchool HQ",
        exitPoint: "Program published with schedule, capacity, and pricing configured",
        evolution: {
          "Today": { description: "Programs set up and managed in AfterSchool HQ. Registration, scheduling, and communication handled within the platform.", systems: ["AfterSchool HQ"] },
          "26/27": { description: "-", systems: ["AfterSchool HQ"] },
          "End State": { description: "-", systems: ["AfterSchool HQ"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "as2",
        name: "Student Registration & Attendance",
        bucket: "After School",
        userIntent: "I want to track which students are registered for and attending my programs",
        entryPoint: "Opens registration or attendance view for a program",
        exitPoint: "Registrations reviewed, attendance marked",
        evolution: {
          "Today": { description: "Registration and attendance tracked in AfterSchool HQ. No connection to SIS student records.", systems: ["AfterSchool HQ"] },
          "26/27": { description: "-", systems: ["AfterSchool HQ"] },
          "End State": { description: "-", systems: ["AfterSchool HQ"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "as3",
        name: "Parent Communication & Billing",
        bucket: "After School",
        userIntent: "I want to communicate with parents and handle billing for after school programs",
        entryPoint: "Opens communication or billing section",
        exitPoint: "Messages sent, invoices generated or payments tracked",
        evolution: {
          "Today": { description: "Communication and billing managed through AfterSchool HQ. Separate from main school billing and communication channels.", systems: ["AfterSchool HQ"] },
          "26/27": { description: "-", systems: ["AfterSchool HQ"] },
          "End State": { description: "-", systems: ["AfterSchool HQ"] }
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
        entryPoint: "Opens tuition calculation for a student",
        exitPoint: "Tuition calculated, agreement generated with correct amounts",
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
        entryPoint: "Opens payment dashboard or receives payment notification",
        exitPoint: "Payment status verified, reconciliation complete",
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
        entryPoint: "Sets up billing for a family with multiple payers",
        exitPoint: "Split billing configured, each payer has separate agreement and invoice",
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
        entryPoint: "Selects report parameters or opens reconciliation view",
        exitPoint: "Reports generated, reconciliation verified",
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
        entryPoint: "Queries SIS API for current roster",
        exitPoint: "Roster data received, student access updated",
        evolution: {
          "Today": { description: "Synchronization through endpoints that expose database entities directly, with no high-level contract or consistent data model.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "OneRoster-compliant API. Real-time roster updates. All learning platforms (DASH, TimeBack, etc.) must register in the SIS. Students are assigned to each app based on current enrollment. Platforms query SIS directly for student/class data.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp2",
        name: "Student Access Provisioning",
        bucket: "Roster",
        userIntent: "I want students to automatically have access when they enroll, and lose access when they leave",
        entryPoint: "Student enrollment status changes",
        exitPoint: "Platform access granted or revoked automatically",
        evolution: {
          "Today": { description: "Manual processes to grant/revoke platform access. Delays when students enroll or withdraw. Each platform requires separate provisioning.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Automated access provisioning based on enrollment status. Students get access to all appropriate platforms immediately upon enrollment.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp3",
        name: "Alpha Anywhere Integration",
        bucket: "Roster",
        userIntent: "I want to enroll online students and have them immediately access learning tools",
        entryPoint: "Online student enrolls in Alpha Anywhere",
        exitPoint: "Student appears in SIS, learning tool access provisioned",
        evolution: {
          "Today": { description: "Alpha Anywhere manages its own enrollment. No unified view across Alpha Network Schools + Alpha Anywhere. Cannot cross-enroll.", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "SIS tracks Alpha Anywhere enrollments (roster-only, no billing). Unified view of all Alpha students. Multi-program enrollment supported.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp4",
        name: "Third-Party Partner Schools",
        bucket: "Roster",
        userIntent: "I want my students to use 2-Hour Learning tools without complex setup or manual data entry",
        entryPoint: "Partner school submits roster (CSV or API)",
        exitPoint: "Partner students provisioned in DASH/TimeBack with appropriate access",
        evolution: {
          "Today": { description: "No integration. Partner schools cannot access 2HL learning tools for their students.", systems: [] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
          "End State": { description: "Partner schools submit roster to SIS (CSV upload or API). SIS provisions access to DASH/TimeBack for partner students. Partner-specific dashboards.", systems: ["Unified Student Platform"] }
        },
        owner: { product: "TBD", tech: "TBD" }
      },
      {
        id: "lp5",
        name: "Grade & Progress Data Exchange",
        bucket: "Academics",
        userIntent: "I want to send student progress data back to the SIS and trust it will be recorded accurately",
        entryPoint: "Learning platform sends progress/grade data to SIS",
        exitPoint: "Grades recorded in student transcript",
        evolution: {
          "Today": { description: "SIS doesn't record any progress data.", systems: ["Legacy SIS"] },
          "26/27": { description: "-", systems: ["Unified Student Platform"] },
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
