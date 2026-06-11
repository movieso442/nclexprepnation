# 15_AI_DEVELOPMENT_INSTRUCTIONS.md

# NCLEX Prep Nation — AI Development Instructions

## 1. Document Purpose

This document gives instructions to any AI coding assistant, developer agent, or human developer working on NCLEX Prep Nation.

The goal is to make sure the AI understands the project fully before coding and does not randomly change the direction, branding, structure, or business logic.

This document should be placed inside the project folder and shared with any AI development tool before implementation.

---

## 2. Project Identity

Project name:

> NCLEX Prep Nation

Project type:

> Full-feature NCLEX preparation website and learning platform.

Main purpose:

> Help nursing candidates prepare for NCLEX-RN and NCLEX-PN using original practice questions, diagnostic tests, study resources, NGN-style case studies, mock exams, progress tracking, and guided support.

Business model at launch:

> Manual package requests through WhatsApp and email. No payment API at launch.

---

## 3. First Rule for AI Developer

Before writing code, read these documents in order:

1. `01_PROJECT_BRIEF.md`
2. `02_BRAND_IDENTITY.md`
3. `03_WEBSITE_STRUCTURE_AND_PAGES.md`
4. `04_USER_FLOW.md`
5. `05_MANUAL_PAYMENT_AND_BOOKING_FLOW.md`
6. `06_FEATURE_REQUIREMENTS.md`
7. `07_QUESTION_BANK_STRUCTURE.md`
8. `08_CONTENT_AND_RESOURCE_PLAN.md`
9. `09_DATABASE_SCHEMA.md`
10. `10_ADMIN_DASHBOARD_REQUIREMENTS.md`
11. `11_SEO_AND_CONTENT_STRATEGY.md`
12. `12_TRUST_LEGAL_AND_DISCLAIMER.md`
13. `13_UI_UX_SCREEN_SPECIFICATION.md`
14. `14_TECHNICAL_ARCHITECTURE.md`
15. `15_AI_DEVELOPMENT_INSTRUCTIONS.md`

Do not start coding before understanding the project direction.

---

## 4. Core Product Rules

The AI developer must follow these product rules:

1. Build a full-feature NCLEX prep platform, not a simple landing page.
2. The platform must look professional and trustworthy.
3. The site must support NCLEX-RN and NCLEX-PN.
4. The site must support free and paid preparation packages.
5. Paid packages are requested manually through WhatsApp/email.
6. Do not implement fake online checkout if payment API is not configured.
7. Use “Request Access,” “Book Materials,” and “Send Package Request” instead of “Pay Now.”
8. Build a real admin dashboard.
9. Build student dashboard features.
10. Prepare the backend for future payment API integration.
11. Do not use official NCLEX/NCSBN/Pearson VUE logos.
12. Do not claim official affiliation.
13. Do not claim guaranteed pass.
14. Do not mention leaked or real exam questions except in disclaimers stating the platform does not provide them.

---

## 5. Trust and Legitimacy Rules

The AI must keep the platform legitimate.

Required footer disclaimer:

> NCLEX® is a registered trademark of the National Council of State Boards of Nursing, Inc. NCLEX Prep Nation is an independent educational preparation platform and is not affiliated with, sponsored by, or endorsed by NCSBN, Pearson VUE, or any nursing regulatory body. All practice questions and resources provided by NCLEX Prep Nation are original educational materials created for exam preparation purposes only.

Required content integrity statement:

> NCLEX Prep Nation does not provide, sell, request, or claim to have access to real NCLEX exam questions. Our practice questions, NGN-style case studies, rationales, mock exams, and study resources are original educational materials designed to support preparation and clinical judgment development.

These statements must appear on relevant pages.

---

## 6. Manual Payment Rules

At launch, do not build a normal checkout system.

Instead, build:

- Package request form
- WhatsApp contact button
- Email/contact form
- Admin package request management
- Manual payment record
- Admin payment confirmation
- Admin access granting
- Package request statuses

### 6.1 Correct CTA Language

Use:

- Request Access
- Book Materials
- Reserve Your NCLEX Prep Package
- Contact Us on WhatsApp
- Send Package Request
- Get Study Materials
- Request Premium Access
- Request Guided Support

### 6.2 Incorrect CTA Language

Avoid:

- Pay Now
- Checkout
- Buy Now
- Online payment coming soon
- Payment system unavailable
- We do not have payment API

### 6.3 Manual Payment Flow to Implement

1. User selects package.
2. User submits package request.
3. Admin sees request.
4. Admin contacts user manually.
5. Admin records payment.
6. Admin confirms payment.
7. Admin grants access.
8. Student receives access/materials.

---

## 7. Required Packages

Build these packages:

### 7.1 Free

Includes:

- Sample questions
- Free diagnostic test
- Basic study guide
- Limited NGN preview

CTA:

> Start Free

### 7.2 Starter

Includes:

- PDF resources
- Topic summaries
- Study plan
- Limited practice questions

CTA:

> Book Starter Materials

### 7.3 Premium

Includes:

- Full question bank
- NGN case studies
- Detailed rationales
- Mock exams
- Progress tracking

CTA:

> Request Premium Access

### 7.4 Guided Support

Includes:

- Premium materials
- WhatsApp support
- Study accountability
- Live or recorded lessons

CTA:

> Request Guided Support

---

## 8. Required User Roles

Build role/access logic for:

- Guest
- Free Student
- Starter Student
- Premium Student
- Guided Support Student
- Admin
- Content Admin, optional
- Support Admin, optional

Do not treat all logged-in users as premium users.

---

## 9. Required Public Pages

Build these public pages:

- Home
- About
- NCLEX-RN
- NCLEX-PN
- Practice Questions
- Free Diagnostic
- Resources
- Packages
- Request Access
- Book Materials
- Blog
- FAQ
- Testimonials
- Contact
- Official NCLEX Resources
- Disclaimer
- Privacy Policy
- Terms of Use
- Refund Policy
- Content Integrity Policy

---

## 10. Required Student Pages

Build these student pages:

- Student Dashboard
- Practice
- Mock Exams
- Resources
- Progress
- Saved Questions
- Weak Topics
- Package Status
- Support
- Profile/Settings

---

## 11. Required Admin Pages

Build these admin pages:

- Admin Dashboard
- Students
- Leads
- Package Requests
- Manual Payments
- Access Management
- Questions
- NGN Case Studies
- Mock Exams
- Resources
- Blog
- Testimonials
- FAQs
- Contact Messages
- Reports
- Settings
- Admin Users
- Activity Logs

---

## 12. UI/UX Rules

The website must follow the brand identity.

### 12.1 Colors

Use:

- Deep Medical Navy: `#0B1F3A`
- Clinical Blue: `#1769AA`
- Healing Teal: `#1BAE9F`
- Soft Ice Blue: `#F3F8FC`
- Charcoal: `#1F2937`
- Green: `#16A34A`
- Amber: `#F59E0B`
- Red: `#DC2626`

### 12.2 Visual Style

Use:

- Clean cards
- Rounded corners
- Soft shadows
- Professional spacing
- Clear badges
- Progress bars
- Mobile-first forms
- Simple dashboard layout

### 12.3 Tone

The text should be:

- Professional
- Supportive
- Clear
- Trustworthy
- Student-friendly

Avoid:

- Scam-like urgency
- Fake guarantees
- Loud sales language
- Overcrowded sections

---

## 13. Frontend Component Rules

Create reusable components.

Required components:

- Header
- Footer
- Hero section
- CTA button
- Package card
- Question card
- Resource card
- Testimonial card
- FAQ accordion
- Trust badge
- Progress bar
- Topic badge
- Difficulty badge
- WhatsApp button
- Contact form
- Package request form
- Dashboard card
- Admin table
- Status badge
- Empty state
- Loading state
- Alert message
- Modal

Do not duplicate UI code unnecessarily.

---

## 14. Backend/Data Rules

Use database tables based on `09_DATABASE_SCHEMA.md`.

Important entities:

- users
- student_profiles
- roles
- packages
- package_requests
- manual_payments
- access_grants
- questions
- question_options
- practice_sessions
- student_answers
- saved_questions
- diagnostic_tests
- diagnostic_attempts
- mock_exams
- resources
- leads
- blog_posts
- testimonials
- faqs
- contact_messages
- admin_notes
- activity_logs
- settings

---

## 15. Question Bank Rules

Each question must support:

- Question title
- Question body
- Options
- Correct answer
- Detailed rationale
- Wrong option explanations
- Exam type
- Topic
- Subtopic
- Difficulty
- Question type
- Access level
- Tags
- Status

Question types:

- Multiple choice
- SATA
- Matrix
- Bow-tie
- Case study
- Prioritization
- Fill-in-the-blank

---

## 16. Diagnostic Test Rules

The diagnostic test must:

- Be available to guests
- Capture lead information before full result, if configured
- Calculate overall score
- Identify weak topics
- Identify strong topics
- Recommend package
- Save results for registered users
- Create lead record for guests

Diagnostic result should include:

- Score
- Readiness level
- Strong topics
- Weak topics
- Recommended package
- Request access CTA
- WhatsApp CTA

---

## 17. Student Dashboard Rules

The dashboard must show:

- Current package status
- Diagnostic result
- Questions answered
- Accuracy
- Strongest topic
- Weakest topic
- Mock exam score
- Saved questions
- Recommended next action
- Upgrade/support CTA

The dashboard should not be empty after registration. Show free actions.

---

## 18. Admin Dashboard Rules

The admin dashboard must allow the business to operate manually.

Admin must be able to:

- View package requests
- Contact students
- Update request statuses
- Record manual payments
- Confirm payments
- Grant access
- Upload resources
- Create questions
- Manage blog posts
- Manage students
- View leads
- Add notes
- Track activity

---

## 19. Package Request Rules

Package request form must save:

- Full name
- Email
- WhatsApp
- Country
- Exam type
- Package
- Preferred contact method
- Preparation level
- Exam date
- Message
- Source
- Status

Status values:

- New Request
- Contacted
- Waiting for Payment
- Payment Confirmed
- Access Granted
- Materials Sent
- Follow-up Needed
- Cancelled
- Refunded

---

## 20. Access Control Rules

Access must be checked before showing premium content.

### 20.1 Free Users

Can access:

- Free diagnostic
- Free questions
- Free resources
- Blog
- Package request

### 20.2 Starter Users

Can access:

- Starter resources
- Limited paid questions
- Study plans

### 20.3 Premium Users

Can access:

- Full question bank
- Premium resources
- Mock exams
- NGN case studies
- Progress tracking

### 20.4 Guided Support Users

Can access:

- All premium features
- Guided support materials
- Support features

---

## 21. Locked Content Rules

When content is locked, show:

> This content is included in a paid package. Request access to unlock full practice, resources, mock exams, and guided support.

Buttons:

- Request Access
- Contact Us on WhatsApp

Do not show technical errors for locked content.

---

## 22. SEO Rules

Every public page must have:

- SEO title
- Meta description
- Clean URL
- H1 heading
- Structured H2 headings
- CTA
- Internal links
- Footer disclaimer

Blog posts must include:

- SEO title
- Meta description
- Slug
- Category
- CTA to diagnostic or package request

---

## 23. Content Rules

Content must be:

- Original
- Clear
- Accurate
- Ethical
- Student-friendly
- Useful
- Not copied

Do not create fake testimonials.

Do not claim official approval.

Do not use official logos without permission.

---

## 24. Security Rules

Implement:

- Password hashing
- Protected admin routes
- Role-based access
- Input validation
- CSRF protection where applicable
- File upload validation
- Premium resource protection
- Activity logs for admin actions
- Secure sessions

Sensitive admin actions must be logged:

- Payment confirmation
- Access granting
- Access revocation
- User role changes
- Settings changes

---

## 25. File Upload Rules

Admin may upload:

- PDF resources
- Images
- Blog images
- Receipt proof, optional

Validate:

- File type
- File size
- File name
- Access level

Premium files should not be publicly exposed if possible.

---

## 26. WhatsApp Rules

Use WhatsApp link format:

```text
https://wa.me/PHONE_NUMBER?text=ENCODED_MESSAGE
```

WhatsApp number should be stored in settings or `.env`.

Use pre-filled messages based on package or page context.

Example:

```text
Hello NCLEX Prep Nation, I am interested in the Premium Package and would like to know how to request access.
```

---

## 27. Email Rules

Send or prepare emails for:

- Package request confirmation
- Admin new package request
- Access granted
- Contact form confirmation
- Password reset

Use professional email copy.

---

## 28. Development Workflow Instructions

The AI developer should follow this workflow:

1. Read documentation.
2. Set up project.
3. Create database schema.
4. Seed roles, packages, categories, FAQs, and admin user.
5. Build public layout.
6. Build public pages.
7. Build authentication.
8. Build package request system.
9. Build admin dashboard.
10. Build manual payment/access system.
11. Build question bank.
12. Build student dashboard.
13. Build diagnostic test.
14. Build resources.
15. Build mock exams.
16. Build blog.
17. Build legal pages.
18. Test all flows.
19. Polish UI.
20. Prepare for deployment.

---

## 29. Recommended Build Phases

### Phase 1: Foundation

- Project setup
- Theme
- Layout
- Database migrations
- Roles
- Packages
- Public pages

### Phase 2: Business Flow

- Package request form
- Contact form
- WhatsApp links
- Admin package request management
- Manual payment confirmation
- Access granting

### Phase 3: Learning Platform

- Question bank
- Practice sessions
- Diagnostic test
- Student dashboard
- Resources

### Phase 4: Premium Features

- Mock exams
- NGN case studies
- Progress tracking
- Saved questions
- Weak topics

### Phase 5: SEO and Polish

- Blog
- SEO metadata
- Legal pages
- UI polish
- Mobile testing
- Performance optimization

---

## 30. Testing Checklist

Test these before saying the project is ready:

### Public

- Homepage loads
- Navigation works
- Mobile menu works
- Packages page works
- Request form works
- Contact form works
- WhatsApp links work
- Blog pages work
- Legal pages work

### Auth

- Register works
- Login works
- Logout works
- Password reset works

### Student

- Dashboard loads
- Free user access works
- Locked content works
- Practice questions work
- Diagnostic works
- Results display
- Resources display
- Package status displays

### Admin

- Admin login works
- Package requests display
- Status updates work
- Manual payment record works
- Access grant works
- Questions can be added
- Resources can be uploaded
- Blog posts can be managed
- Contact messages display

### Security

- Non-admin cannot access admin routes
- Free user cannot access premium content
- Premium files are protected
- Forms validate input
- Passwords are hashed

---

## 31. AI Behavior Rules

The AI developer must not:

- Remove trust disclaimers
- Replace manual payment with incomplete fake checkout
- Use fake official logos
- Use fake testimonials
- Claim guaranteed pass
- Build only a landing page
- Ignore admin dashboard
- Ignore student dashboard
- Ignore access control
- Hardcode everything
- Leave premium content publicly accessible
- Create messy folder structure
- Break mobile responsiveness

The AI developer must:

- Follow the docs
- Build clean code
- Use reusable components
- Use database models
- Add seed data
- Keep UI professional
- Keep CTAs consistent
- Make manual payment smooth
- Protect admin routes
- Prepare for future payment API

---

## 32. Final Instruction to AI Developer

You are building **NCLEX Prep Nation**, a complete NCLEX preparation platform.

Your job is to implement the project exactly according to the documentation.

The most important features are:

1. Trustworthy public website
2. Free diagnostic test
3. Student dashboard
4. Question bank
5. Resources
6. Packages
7. Manual WhatsApp/email package request
8. Admin dashboard
9. Manual payment confirmation
10. Access granting
11. SEO/blog system
12. Legal/trust pages

The project must look professional, work well on mobile, and be easy for the admin to manage.

The manual package request system is not a weakness. It is part of the personalized support experience.

Build it cleanly, securely, and in a way that can later support online payment APIs.
