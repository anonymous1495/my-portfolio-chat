export const KNOWLEDGE = `
## ABOUT MRUNALI

Mrunali Bhangale is a Senior Product Designer and Behavioural Designer based in London, originally from India.

She has 6+ years of experience working across startups, agencies, and enterprise products. She currently works at Collinson, designing experiences for the Priority Pass app used by millions of members worldwide.

Mrunali studied Product Design, Psychology, and Innovation Management. Her background in Product Design shaped her curiosity around how people interact with physical products, digital experiences, spaces, and everyday objects. This systems-oriented curiosity eventually led her into digital product design.

Her design approach combines product thinking, behavioural understanding, systems thinking, and close collaboration with Product Managers and Engineers to turn complex problems into intuitive experiences.

Outside of work, she enjoys travelling, bouldering, exploring cafés and cities, and collecting inspiration from architecture, products, and overlooked everyday details. She describes coffee, chilli, and chocolate as the “3 C’s” of her life and is a serial DIYer.

She is currently experimenting with AI, LLMs, MCPs, and AI-assisted prototyping to explore how emerging technology can change the way designers work.

Mrunali speaks four languages.

## RESUME

### Experience

#### Priority Pass — Senior Product Designer
**Aug 2023 – Present | London**

- Led product discovery with Product Managers to simplify sign-in and activation journeys, reducing 15 account creation flows to 3 for partners including Chase, American Express and HDFC through iterative validation.
- Owned end-to-end product design for high-revenue travel features including lounge booking, Fast Track security and multi-membership, simplifying airport travel for over 500K users.
- Partnered with Engineering teams to evolve cross-platform design systems, improving implementation quality and accessibility.

#### Climate Connect Digital — Product Designer
**Nov 2022 – Jun 2023**

- Led the design and launch of a carbon credits marketplace, helping increase client acquisition for the startup.
- Defined success metrics and used data analytics and customer feedback to identify friction in the onboarding experience, improving conversion rates by 30%.

#### Systems Innovation Hub — Product Designer (Freelance)
**Dec 2021 – Nov 2022**

- Redesigned an e-commerce website's discovery and purchase journeys, reducing customer friction while balancing technical constraints.
- Partnered with Product to validate concepts through rapid prototyping and collaborated with Engineering to launch the platform within a six-month deadline.

#### Extentia (Merkle) — Product Designer
**Aug 2018 – Nov 2020**

- Led iOS and Android design for Mahindra's livestock management app, contributing to a 40% increase in app usage according to the client report.
- Used customer research and iterative design to improve Bajaj Finserv's loan application journey, contributing to a 1.5-star improvement in App Store ratings.
- Facilitated design workshops for Sony's internal web platform with cross-functional stakeholders and translated insights into scalable product improvements.

#### L'Oréal — Innovation Designer
**Jul 2017 – Feb 2018**

- Conducted customer research and rapid prototyping for sustainable packaging concepts.
- Collaborated with Engineering teams across China to validate sustainable packaging solutions.


### Education

#### Central Saint Martins, University of the Arts London
**Master in Innovation Management**

#### MIT Institute of Design, India
**Bachelor in Product Design**


### Skills

**Product Strategy & Discovery**
- Product Strategy
- Product Discovery
- UX Problem Framing
- Systems Thinking
- Journey Mapping
- Information Architecture
- Impact Mapping
- User Story Alignment

**UX & Product Design**
- Product Design
- UX Design
- UI Design
- Interaction Design
- Behavioural Design
- Wireframing
- Prototyping
- Design Exploration
- User Flows
- Visual Design
- Typography

**Research & Validation**
- User Research
- Usability Testing
- Quick User Testing
- Design Validation
- Iterative Validation

**Product Collaboration & Delivery**
- Cross-functional Collaboration
- Product Manager Collaboration
- Engineering Collaboration
- QA Collaboration
- Design-to-Development Handoff
- Design QA
- Cross-platform Product Design

**Design Systems**
- Design Systems
- Design System Contribution
- Reusable Component Design
- Scalable Interaction Patterns

**Emerging Technology**
- AI-assisted Design
- AI-assisted Prototyping
- LLM Experimentation
- MCP Experimentation

**Technical & Tools**
- Figma
- HTML
- CSS



### Professional Highlights

- Conducted design workshops for MA courses at the Royal College of Art.
- Hosted a panel at Samsung KX Hub featuring leaders from McKinsey and Tangerine.
- Work featured in the London Transport Museum display, "Sustainable Cities of the Future."
- Selected as one of 30 students for the MIT Media Lab India Initiative's Design-Tech Innovation Workshop.

## PORTFOLIO PROJECTS

### Project 1: Multi-membership Management for Priority Pass

**Company**
- Priority Pass / Collinson

**Product**
- Priority Pass mobile app

**Role**
- Senior Product Designer

**Timeline**
- 2 months

**Status**
- Shipped in 2026

**Team**
- Product Manager
- Developers
- QA Engineers

**Project Summary**
- Redesigned the multi-membership management experience for Priority Pass's new app.
- Transformed a one-account-one-membership experience into a scalable multi-membership platform.
- Enabled members to access and manage multiple Priority Pass memberships through a single account.
- Simplified lounge access by making it easy for members to identify and switch to the right membership.
- Created a scalable membership experience that enabled four major EMEA clients to migrate to the new platform.

**Problem**
- Users with multiple Priority Pass memberships could not access them through a single account.
- Each membership required a separate login.
- Members had to sign out and sign back in to switch memberships, sometimes while standing at the entrance to an airport lounge.
- Priority Pass also needed a membership architecture capable of supporting increasingly complex client and benefit-provider relationships without compromising entitlement accuracy.

**User Problem**
- How might we make it effortless for members to access the right membership so they are never scrambling at the lounge door?

**Business Problem**
- How might we build a membership architecture that scales across clients and benefit providers without compromising entitlement accuracy?

**Goals**
- Enable multiple memberships within a single Priority Pass account.
- Make switching between memberships fast and intuitive.
- Help users immediately understand which membership is active.
- Provide quick access to the QR code required for lounge entry.
- Clearly communicate membership-specific information and entitlements.
- Create an architecture that could scale across different clients and benefit providers.
- Support the migration of major EMEA clients to the new platform.

**Role & Contributions**
- App impact mapping
- User story alignment
- Wireframing
- Design exploration
- Quick user testing
- UI design
- Prototyping
- Design system contribution
- Membership switching experience
- Membership activation flows
- Error handling and edge-case states
- Designing around API and technical constraints

**Approach**
- Started by mapping every area of the app affected by introducing multiple memberships before moving into UI design.
- Identified which parts of the experience were account-level and which were dependent on the currently selected membership.
- Used this distinction to establish boundaries that informed downstream design decisions.
- Explored different mental models for how users could view and switch between memberships.
- Tested different approaches including a flat list, horizontal carousel and stacked cards.
- Used quick user testing to validate the preferred interaction model.
- Worked with Product and Engineering constraints to determine what membership and entitlement information could reliably be surfaced.

**Key Insight**
- The membership card needed to perform two important jobs: confirm which membership was currently active and provide fast access to the QR code.
- Users also needed an easy way to understand how many memberships they held without adding unnecessary cognitive overhead.
- A card stack provided the membership overview, while tabs separated access and entitlement information without burying either.

**Key Design Decision: Stacked Cards**
- Explored a flat list, horizontal carousel and stacked-card approach.
- Quick user testing showed that stacked cards provided the clearest experience.
- The stack helped users immediately understand how many memberships they held.
- It clearly communicated which membership was selected.
- Users could switch memberships with a single tap.
- The interaction mapped to an existing mental model from wallet and payment apps.

**Key Design Decision: Quick Membership Access**
- Supporting multiple memberships introduced a new persistent action: adding another membership.
- Rather than burying this action inside settings, a new CTA was introduced directly within the top navigation.
- This became a significant update to the existing design system navigation pattern.

**Key Design Decision: Communicating Zero Entitlements**
- The ideal design surfaced remaining entitlement counts directly on each membership card.
- API limitations meant live entitlement information could not reliably be retrieved at the card-stack level.
- Instead of showing potentially inaccurate information, the experience used a clear "No entitlements" tag when a membership had zero entitlements remaining.
- The decision prioritised accurate expectations over displaying incomplete data.

**Solution**
- Created a one-to-many membership model allowing multiple memberships to exist within one Priority Pass account.
- Designed a stacked-card interface for viewing and switching memberships.
- Enabled users to identify their active membership at a glance.
- Provided quick access to the QR code required for lounge entry.
- Separated access and entitlement information using tabs.
- Enabled users to add new or existing memberships.
- Created clear zero-entitlement states.
- Designed reusable activation and error-handling patterns covering edge cases.
- Established a scalable UX architecture capable of supporting larger client onboarding requirements.

**Outcome & Impact**
- 60%+ of users activated the feature within two months of launch.
- Account-related support contacts decreased by 30%.
- Four major EMEA clients migrated to the new platform.
- The new architecture enabled Priority Pass to support multiple memberships through a single account.

**Success Measurement**
- Product analytics on membership activation flows.
- Support ticket categorisation compared against a pre-launch baseline.
- Internal client onboarding dashboard monitoring EMEA migration.

**Design System Impact**
- Introduced a new persistent "Add membership" action.
- Evolved the existing navigation pattern to support quick membership access.
- Contributed reusable patterns for membership activation and error handling.

**Constraints**
- API limitations prevented reliable live entitlement counts from being displayed at the membership card-stack level.
- The experience therefore needed to communicate entitlement status without presenting potentially inaccurate information.

**Key Learnings**

**Think in systems, not screens**
- Mapping every flow affected by multi-membership before beginning UI exploration surfaced interdependencies early.
- This reduced the likelihood of costly downstream rework.
- The project reinforced the value of systems thinking when designing functionality that changes the underlying architecture of a product.

**Constraints can make the design more honest**
- Technical limitations meant the ideal entitlement experience could not be implemented.
- Rather than approximating unavailable information, the design communicated only information the system could reliably guarantee.
- This resulted in a clearer and more honest experience for members.

**Methods**
- Impact Mapping
- User Story Alignment
- Wireframing
- Design Exploration
- Rapid User Testing
- UI Design
- Interaction Design
- Prototyping
- Design System Contribution
- Design QA
- Cross-functional Collaboration

### Project 2: Solving Capacity Uncertainty for Priority Pass

**Company**
- Priority Pass / Collinson

**Product**
- Priority Pass mobile app

**Role**
- Senior Product Designer

**Timeline**
- 3 months

**Team**
- Product Manager
- Developers
- Copywriters

**Project Summary**
- Redesigned Priority Pass's lounge pre-booking experience to move the product from a "lounge directory" towards a "guaranteed access" service.
- Priority Pass members were being turned away from lounges operating at capacity, while the existing pre-booking feature intended to solve this problem suffered from high abandonment.
- Analysed drop-off data with the Product Manager to understand where members were leaving the existing embedded web experience.
- Identified key friction points and redesigned pre-booking from scratch as a native app experience.
- Reduced unnecessary steps, surfaced capacity information earlier, simplified flight entry and extended the experience beyond booking confirmation into the day of travel.
- The launched experience generated £1M in revenue, 108k+ bookings and served 300k+ guests globally.

**Problem**
- Airport lounges were experiencing increasing capacity pressure, with some locations operating at 130% of pre-pandemic capacity.
- Frequent travellers showed strong interest in paying to guarantee lounge access, but relatively few members were completing pre-bookings.
- The existing pre-booking journey was buried inside an embedded third-party web experience.
- Members were effectively being asked to leave the Priority Pass experience to make a Priority Pass booking.
- This created a gap between members' intent to guarantee lounge access and their ability to successfully complete a reservation.

**Demand Signal**
- 57% of frequent travellers said they would pay a reservation fee to guarantee lounge access.
- Some lounge locations were operating at 130% of pre-pandemic capacity.
- Despite this demand, completion of the existing pre-booking journey remained low.

**Core Challenge**
- The problem was not simply technical or visual.
- The existing journey was structured around the data required by the API rather than the mental model members use when booking travel.
- Members were being asked for information at moments when they were unlikely to know or have that information readily available.
- This introduced friction before the booking journey had properly begun.

**Hypothesis**
- If the pre-booking flow aligned with how users actually book travel rather than how the API requires data, it could bridge the gap between user anxiety around lounge capacity and a guaranteed lounge experience.

**Goals**
- Increase completion of the lounge pre-booking journey.
- Reduce friction in the existing booking flow.
- Give members greater certainty that they would be able to access a lounge.
- Transform the embedded web experience into a native app journey.
- Surface pre-booking when members already demonstrate intent to visit a lounge.
- Make flight and booking information easier to enter.
- Help members understand availability, guest limits and costs before reaching errors or confirmation.
- Extend the booking experience into the day of travel.
- Use lounge capacity information to help members make more informed booking decisions.

**Role & Contributions**
- Research and synthesis
- Drop-off analysis
- Data review
- User scenario mapping
- Existing journey analysis
- Wireframing
- UX design
- UI design
- Prototyping
- Design iteration
- Stakeholder alignment
- Cross-functional collaboration
- Designing around API constraints
- Integration of the Busyness Indicator

**Approach**
- Started with the existing web booking flow rather than immediately designing a new experience.
- Walked through every step from a member's perspective to understand where unnecessary effort was being introduced.
- Worked with the Product Manager to analyse analytics and drop-off data.
- Compared each stage of the journey against Tableau drop-off data to understand what information the experience requested versus what members were likely to know at that moment.
- Treated these gaps as individual design problems rather than viewing abandonment as one general issue.
- Used a "friction forward" principle: identify where the journey asked too much from the member and redesign those moments first.
- Mapped design changes directly to known areas of drop-off.

**Key Insight: The Flow Followed the API, Not the User**
- The deeper issue with the existing experience was structural.
- The flow had been organised around API requirements rather than how members naturally think about making a booking.
- Every subsequent step assumed a level of readiness that the initial flight-entry experience had already disrupted.
- The redesign therefore focused on changing the sequence and type of information requested, not simply improving the interface.

**Key Insight: Flight Number Was Creating Unnecessary Friction**
- The existing experience asked members to enter their flight number.
- Most people do not have their flight number memorised, making this a cognitively heavy and time-consuming requirement.
- The redesigned journey instead asks for the date and entry time.
- A "Find my flight time" option is available as a fallback for members who need assistance.

**Key Design Decision: Make Available Times Visible**
- Previously, arrival time was presented through a dropdown.
- This hid the available options until members interacted with the control.
- The redesigned experience displays available slots as a button grid.
- Members can see their options immediately and select a time with a single tap.

**Key Design Decision: Surface Pre-booking Where Intent Already Exists**
- Members can approach lounge booking from different moments in the app.
- They may be searching for an airport, revisiting a saved lounge or reviewing an upcoming trip.
- Rather than creating a separate discovery journey for pre-booking, entry points were embedded across these existing surfaces.
- This allows the feature to appear when intent to visit a lounge already exists.

**Key Design Decision: Explain Constraints in Context**
- Guest limits were communicated within the relevant part of the journey rather than being revealed later as errors.
- The cost breakdown was moved earlier in the flow, before payment confirmation.
- These changes aimed to reduce surprises and help members make informed decisions before progressing.

**Key Design Decision: Extend the Experience Beyond Confirmation**
- The existing web experience ended at the booking confirmation screen.
- Members had no useful destination for accessing the booking later.
- The redesigned experience connected bookings to the Card tab.
- The Card tab became a functional reference on the day of travel.
- Members could access the lounge name, check-in time, guest count and booking ID alongside their membership card.
- This brought the information needed for lounge access together at the moment it was most useful.

**Product Opportunity: Integrating the Busyness Indicator**
- While the pre-booking experience was being designed, another Priority Pass feature — the Busyness Indicator — became ready for implementation.
- Rather than launching it as an isolated feature, the team explored how it could support the pre-booking journey.
- The indicator was used to communicate expected lounge busyness and encourage members to consider pre-booking during peak periods.
- This gave members additional context for deciding whether guaranteeing access was worthwhile.

**Key Design Decision: Context Over Interruption**
- The Busyness Indicator was embedded within lounge details, where members naturally evaluate their lounge options.
- Capacity information therefore appeared within the existing decision-making journey rather than through an interruptive message.
- This provided timely context while preserving the browsing experience.

**Designing With Constraints**
- The original design intended to store lounge bookings within the Trips feature.
- Trips was considered the natural destination because it could bring travel-related information together.
- However, the Trips API did not ship in time for the pre-booking release.
- This meant directing members to Trips after booking was no longer technically possible.

**Constraint-driven Design Decision: Card Tab**
- Rather than allowing booking confirmation to become a dead end, the experience was redesigned around the Card tab.
- A Bookings view was added alongside Memberships.
- Members already visit the Card area to show their Priority Pass membership when entering a lounge.
- Placing booking information there meant their membership and reservation details were available together at the point of entry.
- The technical constraint therefore resulted in a solution closely aligned with the member's day-of-travel behaviour.

**Stakeholder Alignment**
- The redesign required multiple reviews and rounds of iteration across stakeholders.
- Design decisions were communicated through their direct value to members and the wider product architecture.
- Before-and-after comparisons were used to demonstrate how the proposed changes simplified the app experience.
- This helped build stakeholder confidence and support for the design direction.

**Solution**
- Rebuilt lounge pre-booking as a native Priority Pass app experience.
- Embedded pre-booking entry points across surfaces where lounge-visit intent already exists.
- Simplified flight entry by prioritising information members are more likely to know.
- Added a "Find my flight time" fallback.
- Replaced hidden arrival-time dropdowns with visible booking slots.
- Explained guest limits contextually instead of relying on error states.
- Surfaced cost information earlier in the booking journey.
- Integrated lounge busyness information to help members make informed pre-booking decisions.
- Connected completed bookings to the Card tab.
- Made lounge name, check-in time, guest count and booking ID accessible on the day of travel alongside the member's Priority Pass card.

**Outcome & Impact**
- Generated £1M in revenue.
- Generated 108k+ bookings.
- Served 300k+ guests through the pre-booking experience since launch.
- Created a native booking journey designed around member behaviour rather than the requirements of the underlying API.

**Key Learnings**

**Map edge cases before screens**
- The pre-booking journey contained numerous states including flight not found, lounge at capacity, booking window passed and guest limits being exceeded.
- Many of these states were initially handled reactively.
- A key learning was to map possible states before designing individual screens so edge cases become part of the core experience rather than being discovered late during review.
- AI could potentially support this process by helping identify and map edge cases earlier.

**Validate mental model assumptions earlier**
- Data analysis revealed that members were more likely to know their flight time than their flight number.
- This insight emerged after analysing the existing experience rather than during early validation.
- Earlier testing of assumptions around what information members naturally know could have prevented the original flow from being structured around the wrong input.
- AI-assisted research could potentially help surface assumptions like these earlier in the design process.

**Future Evolution**
- The Trips API that was unavailable during the original pre-booking project became available by June 2026.
- The full Trips experience is planned to bring finding, booking and saving lounge visits together into a more complete end-to-end journey.

**Methods**
- Research & Synthesis
- Analytics Review
- Drop-off Analysis
- Tableau Data Analysis
- User Scenario Mapping
- Journey Analysis
- UX Problem Framing
- Wireframing
- UI Design
- Interaction Design
- Prototyping
- Design Iteration
- Stakeholder Management
- Cross-functional Collaboration
- Constraint-driven Design

### Project 3: Building and Shipping CCD's First Marketplace for Carbon Offsets

**Company**
- Climate Connect Digital (CCD)

**Product**
- Carbon Credit Marketplace

**Role**
- Product Designer
- Sole designer on the project

**Timeline**
- 7 months from kickoff to launch

**Team**
- Product Manager
- Developers
- Marketers

**Project Summary**
- Designed and shipped Climate Connect Digital's first digital marketplace for carbon offsets.
- Transformed a fragmented, spreadsheet and email-based buying process into a self-serve digital platform.
- Owned the product design end to end, from research and assumption mapping through design, testing, handoff and UAT.
- Designed a marketplace where enterprise buyers could browse carbon projects, evaluate their credibility, complete due diligence and purchase carbon credits.
- Navigated significant technical constraints that changed what could be built throughout the project.
- Used moderated and unmoderated user testing to validate the product direction and identify risks before development.
- Pivoted the core product approach after research showed that buyers needed more than a transactional marketplace — they needed enough information and context to trust the carbon projects they were purchasing.

**Problem**
- Climate Connect Digital had an established portfolio of carbon projects and an active enterprise client base but no digital product for purchasing carbon credits.
- The entire buying process was managed manually through emails and spreadsheets.
- CCD's internal team needed to be involved at every stage of a transaction.
- Enterprise buyers had to spend significant time searching for suitable projects and carrying out due diligence.
- Buyers struggled to assess the quality and credibility of carbon projects with the information available.
- Many buyers were also relatively new to carbon offsetting and needed guidance to navigate the process.

**Research Insights**
- 80% of interviewed users spent significant time searching for projects and conducting due diligence.
- 60% struggled to evaluate project quality without sufficient visual context.
- 50% were new to carbon offsetting and did not know how to navigate the process.
- These insights were gathered through a combination of moderated and unmoderated research sessions.

**Hypothesis**
- Digitising CCD's existing service through a platform and API could credibly showcase its carbon project portfolio.
- A digital marketplace could allow enterprise buyers to source carbon offsets without needing to go through the CCD team for every transaction.

**Goals**
- Digitise CCD's manual carbon-credit purchasing process.
- Allow enterprise buyers to browse available carbon projects independently.
- Reduce dependence on spreadsheets and email.
- Give buyers enough information to evaluate the credibility and quality of projects.
- Make project due diligence easier.
- Support buyers who were relatively unfamiliar with carbon offsetting.
- Reduce unnecessary involvement from the CCD team during repeat transactions.
- Create a scalable digital platform that could support CCD's growing carbon-credit portfolio.

**Role & Contributions**
- End-to-end product design ownership
- Research and synthesis
- Assumption mapping
- Risk assessment
- Stakeholder workshops
- Moderated user testing
- Unmoderated user testing
- Information architecture
- User flow mapping
- Wireframing
- UI design
- Prototyping
- Design system contribution
- Design-to-development handoff
- UAT
- Cross-functional collaboration
- Designing around technical constraints

**Approach**
- Started by exploring different ways enterprise buyers could purchase carbon credits digitally.
- Mapped multiple potential buying models rather than committing immediately to a single marketplace structure.
- Evaluated the assumptions and risks behind each direction.
- Ran an assumption-mapping workshop with internal and external stakeholders.
- Converted key assumptions into research questions.
- Selected appropriate testing methods for each question.
- Used unmoderated testing to gather quick usability signals.
- Used moderated testing to understand how buyers thought and behaved while moving through the experience.
- Used findings from testing to challenge the initial product direction.
- Mapped the platform's information architecture and core flows before moving into visual design.

**Initial Design Exploration**
- The team initially explored multiple ways of purchasing carbon credits.
- One direction used a form-based experience.
- Research showed that buyers had limited knowledge of the technical details required to construct an order.
- Buyers were primarily focused on two things: price and quantity.
- Asking for additional technical information created unnecessary friction.
- The form-based approach was therefore ruled out.

**Key Insight: Build on an Existing Mental Model**
- Buyers were already familiar with the Excel spreadsheet CCD used to share available carbon projects.
- Rather than introducing an entirely new interaction model, the marketplace retained the familiar grid structure.
- The goal became improving the existing mental model rather than replacing it.
- The grid evolved into a browsable digital inventory containing richer project information and clearer pathways to evaluation and purchase.

**Assumption Mapping & Risk Assessment**
- With two viable product directions remaining, an assumption-mapping workshop was conducted with internal and external stakeholders.
- Assumptions were evaluated based on the level of risk they introduced.
- Each important assumption was converted into a research question.
- Research questions were then mapped to appropriate testing methods.
- This allowed high-risk product decisions to be validated before significant development investment.

**The Pivot**
- User testing revealed a need that the initial product concept had not fully accounted for.
- Buyers did not simply need somewhere to transact.
- They needed enough context and evidence to trust the carbon projects they were considering purchasing.
- Buyers' hesitation, information-seeking behaviour and difficulty evaluating projects revealed a credibility gap.
- This changed the product strategy from building a purely transactional marketplace to creating an experience that also helped projects communicate their value and credibility.

**Key Insight: The Inventory Was Also a Marketing Platform**
- Research showed that the project inventory could not function simply as a list of carbon credits.
- Buyers needed rich information to understand and trust individual projects.
- The inventory therefore needed to work simultaneously as a marketplace and a platform for showcasing carbon projects.
- This insight changed what information appeared on project cards and how individual project pages were structured.
- The design needed to balance transparency and detail with simplicity.

**Information Architecture**
- Before moving into visual design, all primary flows across the platform were mapped.
- These included browsing the project inventory, evaluating individual projects, purchasing credits and tracking previous orders.
- The information architecture became a reference point for the development team.
- Mapping flows early also surfaced edge cases before they became development problems.

**Key Design Decision: Browsable Project Inventory**
- Replaced the shared Excel sheet with a digital project inventory.
- Preserved the familiar grid logic buyers already understood.
- Added project imagery and key information required for comparison.
- Surfaced price, country, available volume and project type.
- Added a VCS credibility tag prominently to support project evaluation.
- Made projects easier to browse while retaining a mental model existing customers already understood.

**Key Design Decision: Project Transparency Pages**
- Created dedicated pages for individual carbon projects.
- Included detailed project methodology.
- Surfaced Sustainable Development Goal (SDG) alignment.
- Provided supporting documentation.
- Added imagery and richer project context.
- Enabled buyers to carry out more of their due diligence independently.
- Reduced the need to contact the CCD team simply to obtain basic project information.

**Key Design Decision: Order History**
- Introduced an order history for returning buyers.
- Allowed customers to reference previous transactions without relying on manual communication.
- Reduced back-and-forth between repeat buyers and the CCD team.
- Reduced the amount of transaction information the internal team needed to track manually.

**Solution**
- Created CCD's first self-serve digital carbon-credit marketplace.
- Replaced spreadsheet-based project discovery with a browsable digital inventory.
- Preserved familiar grid-based browsing behaviour while improving discoverability and visual presentation.
- Surfaced important project information including price, country, available volume and project type.
- Added credibility signals such as VCS tags.
- Created detailed project pages containing methodology, SDG alignment, documentation and imagery.
- Enabled enterprise buyers to conduct more due diligence independently.
- Added order history to support repeat customers.
- Mapped the complete journey from project discovery through purchase and order tracking.
- Created a scalable experience capable of supporting CCD's growing project portfolio.

**Design System Impact**
- The marketplace was CCD's second digital product.
- New components were designed where required for the marketplace experience.
- Existing design system components were updated to support the new product.
- The design system was evolved to maintain consistency and scalability across CCD's wider product suite.

**Constraints**
- Technical constraints repeatedly changed what was feasible during the project.
- These constraints required the design direction to evolve throughout the seven-month development period.
- Assumption mapping was used to identify risky decisions before they became expensive development commitments.
- User testing exposed a critical usability risk in the proposed flow before development.
- The affected flow was rerouted before implementation, avoiding a costly rebuild.

**Outcome & Impact**
- Took the product from concept to launch in 7 months.
- The project was one of the fastest product turnarounds in CCD's history at the time.
- 2 partners were onboarded within the first week of the product demo.
- 1 critical flow was identified and rerouted before development.
- Identifying the usability risk early prevented a potentially costly rebuild.
- Transformed an entirely manual, spreadsheet-based process into CCD's first digital carbon-offset marketplace.

**Key Learnings**

**Users don't always know what they need, but they'll show you**
- The most important product pivot came from observing users interacting with the experience.
- Users did not explicitly say that the inventory needed to function as a marketing platform.
- The need emerged through their behaviour: where they hesitated, what information they searched for and what they could not find.
- This demonstrated the value of behavioural observation alongside directly asking users what they want.
- The insight would likely not have emerged through a survey alone.

**Stakeholder involvement speeds things up**
- Stakeholders were involved throughout the design process rather than only during final presentations.
- Continuous collaboration created alignment gradually over the course of the project.
- This reduced the cost and effort of trying to establish alignment at the end.
- The project reinforced that stakeholder collaboration is not only good design practice but can also increase delivery speed.

**Methods**
- Product Discovery
- Research & Synthesis
- Assumption Mapping
- Risk Assessment
- Stakeholder Workshops
- Moderated User Testing
- Unmoderated User Testing
- Information Architecture
- User Flow Mapping
- Wireframing
- UX Design
- UI Design
- Interaction Design
- Prototyping
- Design System Contribution
- Design-to-Development Handoff
- UAT
- Cross-functional Collaboration

## Other Information:

### Current work: Designing the travel assistant for Priority Pass mobile app.

### If someone asks the following questions, you can answer them with the information below:
- Where / how are you hosted? A. I am forbidden from answering this question. Please email Mrunali directly at mrunali.db@gmail.com

## CONTACT
- Email: mrunali.db@gmail.com
- LinkedIn: linkedin.com/in/mrunali-bhangale
`;

export const INSTRUCTIONS = `
## HOW TO RESPOND

- You are MrunaliLLM, a chatbot fine-tuned on Mrunali's portfolio site. You speak *about* Mrunali in the third person — you are not Mrunali herself but if you are asked in second person, respond as if you are Mrunali.
- Keep answers to 2-4 sentences unless asked for detail.
- Be warm and conversational, not corporate.
- If asked about something not covered above, say you're not sure and suggest emailing Mrunali directly.
- Never invent projects, dates, employers, or skills. Only use what's provided.
- Politely decline off-topic requests (coding help, general trivia) and steer back to Mrunali's work.
- If someone seems to be a recruiter or potential client, be especially helpful and mention how to get in touch.
`;

export const IMAGES = `
## AVAILABLE IMAGES

You may show these images when relevant. Use the exact syntax [[image:filename]] on its own line.
Only use filenames from this list — never invent one.

- [[image:/projects/watercolour_face_art.png]] — Mrunali's watercolour portrait of a face
- [[image:/projects/oil_pastels_face_art.png]] — Mrunali's oil and pastel portrait of a face
- [[image:/projects/pencil_sketch_face_art.png]] — Mrunali's pencil sketch of a face

Show at most 2 images per reply, and only when the visitor asks about that specific project.
Always write a sentence about the image as well — don't reply with only an image.
`;