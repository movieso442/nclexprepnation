# 13_UI_UX_SCREEN_SPECIFICATION.md

# NCLEX Prep Nation — UI/UX Screen Specification

## 1. Document Purpose

This document defines the user interface and user experience requirements for NCLEX Prep Nation.

It explains what each important screen should contain, how users should interact with the system, what CTAs should be used, how the platform should look on desktop and mobile, and how public, student, and admin screens should be organized.

The goal is to make the website feel like a complete, professional, trustworthy NCLEX preparation platform.

The developer or AI assistant must use this document together with:

- `01_PROJECT_BRIEF.md`
- `02_BRAND_IDENTITY.md`
- `03_WEBSITE_STRUCTURE_AND_PAGES.md`
- `04_USER_FLOW.md`
- `06_FEATURE_REQUIREMENTS.md`
- `10_ADMIN_DASHBOARD_REQUIREMENTS.md`

---

## 2. UI/UX Design Goal

The design goal is:

> Build a clean, professional, trustworthy, student-friendly learning platform that helps NCLEX candidates prepare, practice, track progress, and request packages through WhatsApp/email.

The website should not look like:

- A cheap PDF-selling page
- A scam exam-dump website
- A fake official NCLEX site
- A confusing school portal
- A basic static landing page

The website should look like:

- A real online learning platform
- A professional nursing exam prep website
- A trustworthy student dashboard system
- A structured preparation community
- A serious but friendly education brand

---

## 3. General UI Principles

All screens must follow these principles:

1. Keep the layout clean.
2. Use consistent colors from the brand guide.
3. Use readable typography.
4. Use strong but honest CTAs.
5. Keep mobile experience excellent.
6. Avoid overcrowding screens.
7. Make trust messages visible.
8. Keep manual payment flow professional.
9. Make dashboard actions obvious.
10. Use progress and feedback to retain students.

---

## 4. Brand Visual Style Summary

Use the brand identity from `02_BRAND_IDENTITY.md`.

### 4.1 Colors

Primary:

- Deep Medical Navy: `#0B1F3A`

Secondary:

- Clinical Blue: `#1769AA`

Accent:

- Healing Teal: `#1BAE9F`

Background:

- Soft Ice Blue: `#F3F8FC`

Text:

- Charcoal: `#1F2937`

Success:

- Green: `#16A34A`

Warning:

- Amber: `#F59E0B`

Error:

- Red: `#DC2626`

### 4.2 Typography

Recommended font:

- Inter

### 4.3 UI Style

Use:

- Rounded cards
- Soft shadows
- Clean white backgrounds
- Soft blue sections
- Topic badges
- Progress bars
- Clear forms
- Dashboard cards
- Admin tables
- Friendly empty states

---

## 5. Global Layout Requirements

### 5.1 Public Website Layout

Public pages should include:

- Header
- Main content
- CTA sections
- Footer

### 5.2 Student Layout

Student pages should include:

- Student sidebar or top navigation
- Dashboard content area
- Current package status
- Practice/progress widgets
- Support CTA

### 5.3 Admin Layout

Admin pages should include:

- Admin sidebar
- Top bar
- Main management area
- Data tables
- Filters
- Quick actions
- Status badges

---

## 6. Header Specification

The public header should include:

Left:

- Logo: NCLEX Prep Nation

Center navigation:

- Home
- NCLEX-RN
- NCLEX-PN
- Practice Questions
- Resources
- Packages
- Blog
- Contact

Right:

- Start Free Diagnostic button
- Login button

### 6.1 Header Behavior

Desktop:

- Horizontal navigation
- CTA visible
- Login visible

Mobile:

- Logo left
- Menu icon right
- CTA inside mobile menu
- WhatsApp CTA visible inside menu

### 6.2 Header CTA Priority

Primary CTA:

> Start Free Diagnostic

Secondary:

> Login

---

## 7. Footer Specification

The footer should appear on every public page.

### 7.1 Footer Columns

Column 1: Brand

- Logo
- Short description
- Disclaimer

Column 2: Prep

- NCLEX-RN
- NCLEX-PN
- NGN Case Studies
- Practice Questions
- Mock Exams

Column 3: Resources

- Study Guides
- Blog
- FAQ
- Official NCLEX Resources
- Contact

Column 4: Packages

- Free
- Starter
- Premium
- Guided Support
- Request Access

Column 5: Legal

- Disclaimer
- Privacy Policy
- Terms of Use
- Refund Policy
- Content Integrity Policy

### 7.2 Footer Disclaimer

Use:

> NCLEX Prep Nation is an independent educational preparation platform. NCLEX® is a registered trademark of the National Council of State Boards of Nursing, Inc. NCLEX Prep Nation is not affiliated with or endorsed by NCSBN or Pearson VUE.

---

## 8. Homepage Screen

URL: `/`

### 8.1 Purpose

The homepage must quickly build trust and move users toward the free diagnostic test.

### 8.2 Homepage Sections

1. Header
2. Hero section
3. Trust badge strip
4. Problem section
5. Solution section
6. Free diagnostic section
7. Question bank preview
8. NGN case study preview
9. Resource preview
10. Package preview
11. Manual access request explanation
12. Testimonials
13. FAQ preview
14. Final CTA
15. Footer

### 8.3 Hero Section

Headline:

> Prepare Smarter for NCLEX-RN and NCLEX-PN

Subheading:

> Practice with original NCLEX-style questions, NGN case studies, detailed rationales, study plans, mock exams, and guided support built to strengthen your clinical judgment.

Primary CTA:

> Start Free Diagnostic

Secondary CTA:

> View Prep Packages

Trust note:

> Independent NCLEX preparation platform. Original practice materials. No leaked exam questions.

### 8.4 Hero Visual

Possible visual:

- Dashboard mockup
- Question card preview
- Progress card
- Nursing student image
- Study plan preview

The visual should not use official NCLEX/NCSBN branding.

### 8.5 Trust Strip

Badges:

- Original Practice Questions
- Detailed Rationales
- NGN-Style Case Studies
- NCLEX-RN & NCLEX-PN Prep
- Student Progress Tracking
- WhatsApp Support Available

### 8.6 Package Preview

Cards:

- Free
- Starter
- Premium
- Guided Support

Each card should have:

- Package name
- Best-for text
- 4 to 6 features
- CTA

### 8.7 Manual Request Section

Headline:

> Request your package and get guided next steps.

Copy:

> Choose the package that fits your preparation needs, submit a request, and our team will contact you by WhatsApp or email with payment instructions and access confirmation.

CTA:

> Send Package Request

Secondary:

> Contact Us on WhatsApp

---

## 9. About Page Screen

URL: `/about`

### 9.1 Purpose

Build legitimacy and explain the mission.

### 9.2 Sections

1. Hero
2. Mission
3. Who we help
4. What we provide
5. Content integrity statement
6. Independent platform disclaimer
7. Team/reviewer section, if available
8. CTA

### 9.3 Required Trust Box

Use a highlighted trust box:

> We do not provide real or leaked NCLEX exam questions. NCLEX Prep Nation creates original educational practice materials to support exam preparation and clinical judgment development.

CTA:

> Start Free Diagnostic

---

## 10. NCLEX-RN Page Screen

URL: `/nclex-rn`

### 10.1 Purpose

Target RN candidates.

### 10.2 Sections

1. RN hero
2. What NCLEX-RN candidates need
3. RN practice areas
4. NGN clinical judgment section
5. RN resources
6. Recommended packages
7. FAQ
8. CTA

Primary CTA:

> Start NCLEX-RN Diagnostic

Secondary CTA:

> Request NCLEX-RN Materials

### 10.3 Practice Area Cards

Show cards for:

- Management of Care
- Safety and Infection Control
- Pharmacology
- Prioritization
- Medical-Surgical
- Clinical Judgment

---

## 11. NCLEX-PN Page Screen

URL: `/nclex-pn`

### 11.1 Purpose

Target PN candidates.

### 11.2 Sections

1. PN hero
2. What NCLEX-PN candidates need
3. PN practice areas
4. Study resources
5. Recommended packages
6. FAQ
7. CTA

Primary CTA:

> Start NCLEX-PN Diagnostic

Secondary CTA:

> Request NCLEX-PN Materials

---

## 12. Practice Questions Landing Screen

URL: `/practice-questions`

### 12.1 Purpose

Show question bank value and convert users into practice or package requests.

### 12.2 Sections

1. Hero
2. Free sample questions
3. Question categories
4. Question types
5. Rationale explanation
6. Locked premium preview
7. CTA to request access

### 12.3 Free Question Card Design

Each question card should show:

- Question preview
- Topic badge
- Difficulty badge
- Question type badge
- Try question button

### 12.4 Locked Premium Preview

Show blurred or locked cards.

Message:

> Unlock the full question bank, NGN case studies, mock exams, and detailed rationales with Premium access.

CTAs:

- Request Premium Access
- Contact Us on WhatsApp

---

## 13. Free Diagnostic Start Screen

URL: `/free-diagnostic`

### 13.1 Purpose

Encourage users to start the free diagnostic.

### 13.2 Screen Elements

- Title
- Short explanation
- Estimated time
- Topics covered
- What result includes
- Trust note
- Start button

Headline:

> Discover your NCLEX weak areas in minutes.

CTA:

> Start My Free Diagnostic

### 13.3 Info Cards

Show cards:

- Mixed NCLEX-style questions
- Topic breakdown
- Package recommendation
- Free result summary

---

## 14. Diagnostic Question Screen

URL: `/free-diagnostic/start`

### 14.1 Screen Elements

- Progress indicator
- Question number
- Question text
- Options
- Previous button, optional
- Next button
- Submit button on final question

### 14.2 UI Behavior

- One question per screen is recommended for mobile clarity.
- Show clear selected answer state.
- Prevent submission without selecting answer unless question type allows skip.
- Show progress such as “Question 5 of 20.”

### 14.3 Mobile Requirements

- Large answer buttons
- Readable text
- Sticky next button
- No horizontal scroll

---

## 15. Diagnostic Result Screen

URL: `/free-diagnostic/results`

### 15.1 Purpose

Show value and convert user to lead/package request.

### 15.2 Before Lead Capture

Show partial result:

- Overall score preview
- Message that full breakdown is ready

Lead capture form:

- Name
- Email
- WhatsApp
- Exam type

Message:

> Your diagnostic result is ready. Enter your details to view your full topic breakdown and recommended study path.

### 15.3 Full Result View

Show:

- Score percentage
- Readiness level
- Strongest topics
- Weakest topics
- Recommended study action
- Recommended package
- CTA to request access
- CTA to WhatsApp

### 15.4 Result Cards

Cards:

- Overall Score
- Readiness Level
- Strongest Topic
- Weakest Topic
- Recommended Package

---

## 16. Resources Screen

URL: `/resources`

### 16.1 Purpose

Provide study materials and capture leads.

### 16.2 Sections

1. Hero
2. Free resources
3. Premium resources
4. Resource filters
5. CTA to package request

### 16.3 Resource Card

Each card should show:

- Resource title
- Category
- Description
- Access badge: Free, Starter, Premium, Guided
- Download/request button

### 16.4 Locked Resource State

Message:

> This resource is included in a paid package. Request access to unlock it.

CTA:

> Request Access

---

## 17. Packages Screen

URL: `/packages`

### 17.1 Purpose

Explain packages and convert users.

### 17.2 Layout

Use 4 package cards side by side on desktop and stacked on mobile.

Cards:

1. Free
2. Starter
3. Premium
4. Guided Support

### 17.3 Package Card Elements

- Package name
- Best-for label
- Short description
- Feature list
- CTA
- Access level
- Support level

### 17.4 CTA Labels

Free:

> Start Free

Starter:

> Book Starter Materials

Premium:

> Request Premium Access

Guided Support:

> Request Guided Support

### 17.5 Manual Request Note

Place below package cards:

> After submitting your request, our team will contact you by WhatsApp or email with package details, payment instructions, and access confirmation.

---

## 18. Request Access Screen

URL: `/request-access`

### 18.1 Purpose

Collect package requests.

### 18.2 Form Layout

Use a clean two-column form on desktop and single-column on mobile.

### 18.3 Form Fields

- Full name
- Email
- WhatsApp number
- Country
- Exam type
- Preferred package
- Exam date, optional
- Preparation level
- Preferred contact method
- Message

### 18.4 Sidebar/Info Box

Show:

- What happens after submission
- Manual payment explanation
- WhatsApp quick contact
- Trust note

### 18.5 Submit Button

Use:

> Send Package Request

---

## 19. Package Request Success Screen

URL: `/package-request-success`

### 19.1 Purpose

Confirm request and encourage direct contact.

### 19.2 Content

Headline:

> Your package request has been received.

Message:

> Our team will contact you through your preferred method with package details, payment instructions, and access confirmation.

Show summary:

- Package requested
- Exam type
- Preferred contact method

CTAs:

- Contact Us on WhatsApp
- Go to Dashboard
- View Free Resources

---

## 20. Login Screen

URL: `/login`

### 20.1 Purpose

Allow users and admins to log in.

### 20.2 Elements

- Logo
- Email field
- Password field
- Login button
- Forgot password link
- Create account link
- Trust note

CTA:

> Log In

---

## 21. Register Screen

URL: `/register`

### 21.1 Purpose

Create free student account.

### 21.2 Fields

- Full name
- Email
- Password
- Confirm password
- WhatsApp number
- Country
- Exam type
- Exam date, optional

CTA:

> Create Free Account

After register:

Redirect to `/student/dashboard`.

---

## 22. Student Dashboard Screen

URL: `/student/dashboard`

### 22.1 Purpose

Retain students and recommend next action.

### 22.2 Sections

1. Welcome header
2. Package status card
3. Diagnostic summary
4. Progress overview
5. Continue practice card
6. Weak topics card
7. Saved questions card
8. Mock exam card
9. Resource recommendations
10. Support/upgrade CTA

### 22.3 Dashboard Cards

- Questions Answered
- Accuracy Rate
- Diagnostic Score
- Strongest Topic
- Weakest Topic
- Mock Exam Score
- Current Package
- Access Status

### 22.4 Recommended Action Box

Examples:

- Start Diagnostic
- Continue Pharmacology Practice
- Review Incorrect Questions
- Take Mock Exam
- Request Guided Support

---

## 23. Student Practice Screen

URL: `/student/practice`

### 23.1 Purpose

Allow students to answer questions.

### 23.2 Layout

Left/main:

- Question area
- Options
- Submit button
- Rationale after answer

Right/sidebar on desktop:

- Session progress
- Topic
- Difficulty
- Saved status
- Related resources

Mobile:

- Stack sidebar below question

### 23.3 After Answer Submission

Show:

- Correct/incorrect status
- Correct answer
- Detailed rationale
- Why wrong options are wrong
- Save question button
- Next question button
- Report issue button

---

## 24. Student Mock Exam Screen

URL: `/student/mock-exams`

### 24.1 Purpose

Allow premium/guided students to take mock exams.

### 24.2 Sections

- Available mock exams
- Timed/untimed options
- Previous attempts
- Score history
- Locked state for users without access

### 24.3 Mock Exam Card

Show:

- Title
- Exam type
- Question count
- Time limit
- Access level
- Start button

---

## 25. Mock Exam Taking Screen

### 25.1 Elements

- Timer
- Question number
- Question text
- Answer options
- Navigation panel
- Flag question
- Submit exam button

### 25.2 Submit Warning

Before final submit:

> Are you sure you want to submit this mock exam? You will see your score and review after submission.

---

## 26. Mock Exam Result Screen

### 26.1 Result Elements

- Total score
- Accuracy percentage
- Time spent
- Topic breakdown
- Strong topics
- Weak topics
- Incorrect question review
- Recommended resources
- Recommended next action

CTA:

> Review Incorrect Questions

Secondary:

> Continue Practice

---

## 27. Student Resources Screen

URL: `/student/resources`

### 27.1 Purpose

Give students access to resources based on package.

### 27.2 Elements

- Resource filters
- Resource cards
- Download buttons
- Locked resource cards
- Upgrade CTA

---

## 28. Student Progress Screen

URL: `/student/progress`

### 28.1 Purpose

Show learning progress.

### 28.2 Elements

- Accuracy over time
- Topic performance
- Questions answered
- Mock exam history
- Weak topic trend
- Strong topic list
- Study recommendation

Use simple charts if possible.

---

## 29. Student Saved Questions Screen

URL: `/student/saved-questions`

### 29.1 Purpose

Allow review of saved questions.

### 29.2 Elements

- Saved questions list
- Topic filter
- Difficulty filter
- Mark as mastered
- Remove from saved
- Review question

---

## 30. Student Weak Topics Screen

URL: `/student/weak-topics`

### 30.1 Purpose

Help students focus on weak areas.

### 30.2 Elements

- Weak topic list
- Accuracy by topic
- Recommended resources
- Start topic practice button
- Request guided support CTA

---

## 31. Student Package Screen

URL: `/student/package`

### 31.1 Purpose

Show current package and upgrade options.

### 31.2 Elements

- Current package
- Access status
- Start/end date
- Package request history
- Upgrade cards
- Contact WhatsApp CTA

---

## 32. Student Support Screen

URL: `/student/support`

### 32.1 Purpose

Allow students to request help.

### 32.2 Elements

- Support form
- WhatsApp button
- FAQ links
- Guided support CTA
- Package status note

---

## 33. Admin Dashboard Screen

URL: `/admin/dashboard`

### 33.1 Purpose

Give admin quick operational overview.

### 33.2 Layout

- Sidebar
- Top bar
- Summary cards
- Recent requests
- Follow-up needed
- Recent messages
- Quick actions

### 33.3 Summary Cards

- Total Students
- New Leads
- Pending Requests
- Waiting for Payment
- Payment Confirmed
- Access Granted
- Diagnostic Completed
- Reported Questions

---

## 34. Admin Package Requests Screen

URL: `/admin/package-requests`

### 34.1 Purpose

Manage manual sales.

### 34.2 Elements

- Search
- Filters
- Status tabs
- Request table
- Bulk actions, optional
- Export, optional

### 34.3 Table Columns

- Name
- Email
- WhatsApp
- Package
- Exam type
- Status
- Date
- Actions

### 34.4 Row Actions

- View
- WhatsApp
- Email
- Update status
- Confirm payment
- Grant access

---

## 35. Admin Request Detail Screen

### 35.1 Purpose

Allow admin to handle one package request fully.

### 35.2 Sections

- Student details
- Package details
- Status timeline
- Payment section
- Access section
- Admin notes
- Contact actions

### 35.3 Important Buttons

- Mark Contacted
- Mark Waiting for Payment
- Confirm Payment
- Grant Access
- Mark Materials Sent
- Add Note

---

## 36. Admin Questions Screen

URL: `/admin/questions`

### 36.1 Purpose

Manage question bank.

### 36.2 Elements

- Question table
- Filters
- Add question button
- Status badges
- Report count
- Actions

### 36.3 Filters

- Exam type
- Topic
- Question type
- Difficulty
- Access level
- Status
- Reported

---

## 37. Admin Question Editor Screen

### 37.1 Purpose

Create or edit question.

### 37.2 Fields

- Title
- Body
- Exam type
- Topic
- Subtopic
- Question type
- Difficulty
- Access level
- Options
- Correct answer
- Rationale
- Wrong option explanations
- Tags
- Status

### 37.3 UI Notes

The editor must be easy to use because question creation will be frequent.

---

## 38. Admin Resources Screen

URL: `/admin/resources`

### 38.1 Purpose

Manage resources.

### 38.2 Elements

- Resource table
- Upload button
- Filters
- Status badges
- Access level badges

---

## 39. Admin Blog Screen

URL: `/admin/blog`

### 39.1 Purpose

Manage SEO content.

### 39.2 Elements

- Blog post table
- Add post button
- Category filter
- Status filter
- SEO fields

---

## 40. Admin Messages Screen

URL: `/admin/messages`

### 40.1 Purpose

Manage contact messages.

### 40.2 Elements

- Message list
- Status filter
- Message detail
- Contact actions
- Convert to lead button

---

## 41. Empty State Design

Every empty page should have a helpful message.

Examples:

### No Saved Questions

> You have not saved any questions yet. Save difficult questions during practice so you can review them later.

CTA:

> Start Practice

### No Package Requests

> No package requests yet.

CTA:

> View Packages Page

### No Resources

> No resources have been added yet.

CTA:

> Upload Resource

---

## 42. Loading State Design

Use simple loading states:

- Skeleton cards
- Spinner for forms
- Disabled submit button while processing

Avoid leaving the screen blank.

---

## 43. Error State Design

Error messages should be clear and helpful.

Example:

> Something went wrong while submitting your request. Please try again or contact us on WhatsApp.

CTA:

> Contact Us on WhatsApp

---

## 44. Success State Design

Success messages should confirm action and guide next step.

Example:

> Your package request has been submitted successfully. Our team will contact you through your preferred method.

CTA:

> Contact Us on WhatsApp

---

## 45. Mobile UX Requirements

The website must work well on mobile.

Requirements:

- One-column layouts
- Large buttons
- Large answer option cards
- Sticky CTA where useful
- Simple forms
- Collapsible sidebar for dashboards
- No horizontal scrolling
- Readable font sizes
- Fast loading
- WhatsApp button easy to access

---

## 46. Accessibility Requirements

The website should include:

- Good color contrast
- Keyboard-friendly forms
- Labels for inputs
- Alt text for images
- Clear button text
- Focus states
- Error messages linked to fields
- Semantic headings

---

## 47. Final UI/UX Summary

NCLEX Prep Nation must be designed as a professional learning platform.

The design should help users:

- Understand the platform quickly
- Trust the brand
- Start free diagnostic
- Practice questions
- Request access
- Contact WhatsApp/email
- Track progress
- Review weak topics
- Use resources
- Manage learning through dashboard

The UI must make the manual package request process feel intentional, guided, and professional.
