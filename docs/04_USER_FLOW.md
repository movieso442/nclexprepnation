# 04_USER_FLOW.md

# NCLEX Prep Nation — Complete User Flow Specification

## 1. Document Purpose

This document explains how each type of user moves through the NCLEX Prep Nation website.

It is written to guide developers, UI/UX designers, and AI coding assistants so that the website is not built as disconnected pages, but as one complete user journey.

The flows in this document cover:

- First-time visitor flow
- Free diagnostic test flow
- Free account flow
- Package request flow
- Manual WhatsApp/email conversion flow
- Student learning flow
- Resource download flow
- Practice question flow
- Mock exam flow
- Guided support flow
- Admin management flow
- Lead follow-up flow
- User retention flow

The most important principle is:

> Every page should move the visitor closer to trust, engagement, account creation, package request, or continued study.

---

## 2. User Types

NCLEX Prep Nation will have different user types.

### 2.1 Guest Visitor

A guest visitor is someone who visits the website without logging in.

Guest visitors can:

- View public pages
- Read blog posts
- View package descriptions
- Try free questions
- Start a free diagnostic test
- Submit contact forms
- Submit package requests
- Contact through WhatsApp
- Create an account

Guest visitors cannot:

- Access full question bank
- Track progress
- Save questions permanently
- Access premium resources
- Take full mock exams
- View student dashboard

---

### 2.2 Free Student

A free student is a registered user with free access.

Free students can:

- Log into dashboard
- Take free diagnostic test
- View free result summary
- Access free questions
- Access basic resources
- Save limited questions
- View limited progress
- Request a package upgrade
- Contact support through WhatsApp/email

Free students cannot:

- Access full question bank
- Access all NGN case studies
- Access premium resources
- Take full premium mock exams
- Receive guided support unless they upgrade

---

### 2.3 Starter Student

A Starter student has requested and been granted Starter package access.

Starter students can:

- Access PDF resources
- Access topic summaries
- Access study plans
- Answer limited paid practice questions
- View basic rationales
- Download selected materials
- View basic progress
- Request Premium upgrade

Starter students may not have:

- Full question bank
- Full NGN case studies
- Full mock exams
- Advanced progress analytics
- Guided support

---

### 2.4 Premium Student

A Premium student has full self-paced preparation access.

Premium students can:

- Access full question bank
- Access NGN-style case studies
- View detailed rationales
- Take mock exams
- Track progress
- View weak-topic dashboard
- Save questions
- Access premium resources
- Review incorrect answers
- View practice history
- Request guided support upgrade

---

### 2.5 Guided Support Student

A Guided Support student has the highest support level.

Guided Support students can:

- Access all Premium features
- Receive WhatsApp support
- Receive study accountability
- Join live or recorded lessons
- Receive weekly check-ins
- Receive personalized study direction
- Receive mock exam review support
- Receive weak-topic correction plan

---

### 2.6 Admin

Admin manages the entire platform.

Admin can:

- View students
- View leads
- View package requests
- Contact students
- Update request statuses
- Confirm manual payments
- Grant package access
- Upload resources
- Add/edit/delete questions
- Manage blog posts
- Manage testimonials
- Manage FAQs
- Track diagnostics and weak areas
- Manage site settings

---

## 3. Main Visitor Journey

The main visitor journey should be designed around this path:

1. Visitor lands on the website.
2. Visitor immediately understands the website is for NCLEX preparation.
3. Visitor sees trust signals and ethical disclaimers.
4. Visitor is encouraged to start a free diagnostic test.
5. Visitor answers free diagnostic questions.
6. Visitor receives a partial result.
7. Visitor enters email/WhatsApp to unlock deeper results.
8. Visitor receives personalized weak-area feedback.
9. Website recommends a suitable package.
10. Visitor submits a package request.
11. Admin contacts visitor by WhatsApp/email.
12. Visitor completes payment manually.
13. Admin confirms payment.
14. Admin grants access or sends materials.
15. Visitor becomes a student and continues learning through dashboard.

This is the most important conversion journey.

---

## 4. First-Time Visitor Flow

### 4.1 Entry Points

A first-time visitor may arrive through:

- Google search
- Blog article
- Social media link
- WhatsApp shared link
- Direct URL
- Referral from another student
- Paid advertisement, if used later

### 4.2 First Page Experience

The visitor must quickly see:

- Brand name: NCLEX Prep Nation
- What the website does
- Who it is for
- Free diagnostic CTA
- Package CTA
- Trust note
- WhatsApp/contact option

### 4.3 First-Time Visitor Decision Points

The visitor may choose to:

1. Start Free Diagnostic
2. Try Free Questions
3. View Packages
4. Read About page
5. Contact WhatsApp
6. Browse Resources
7. Read Blog
8. Create Account

### 4.4 Desired Action

The desired first action is:

> Start Free Diagnostic

Secondary actions:

- Try Free Questions
- View Packages
- Contact Us on WhatsApp

### 4.5 First-Time Visitor Flow Diagram

```text
Visitor lands on website
        |
        v
Reads hero + trust message
        |
        v
Chooses an action
        |
        +--> Start Free Diagnostic --> Diagnostic Flow
        |
        +--> Try Free Questions --> Practice Preview Flow
        |
        +--> View Packages --> Package Request Flow
        |
        +--> Contact WhatsApp --> Manual Sales Flow
        |
        +--> Read Blog/Resources --> Lead Capture Flow
```

---

## 5. Free Diagnostic Test Flow

The diagnostic test is the strongest lead capture and conversion feature.

### 5.1 Diagnostic Goal

The diagnostic test should:

- Give students immediate value
- Identify weak areas
- Encourage account creation or lead submission
- Recommend packages
- Move serious students toward package request

### 5.2 Diagnostic Entry Points

Users can enter the diagnostic from:

- Homepage hero
- Header CTA
- Blog CTA
- Resources page
- Packages page
- Free account dashboard
- Practice questions page

### 5.3 Diagnostic Start Page

The start page should explain:

- What the diagnostic is
- Estimated time
- Number of questions
- Topics covered
- What result the user will receive
- That it is not an official NCLEX exam
- That it is for preparation guidance only

Recommended CTA:

> Start My Free Diagnostic

### 5.4 Diagnostic Question Flow

The diagnostic should include questions across key areas such as:

- Fundamentals
- Pharmacology
- Medical-surgical nursing
- Safety and infection control
- Prioritization
- Delegation
- Maternity
- Pediatrics
- Mental health
- NGN-style clinical judgment

### 5.5 Question Screen Should Show

- Current question number
- Progress indicator
- Question text
- Options
- Question type
- Topic, optional
- Next button
- Previous button, optional
- Submit button at the end

### 5.6 After Submission

When the user submits, the system calculates:

- Total score
- Topic performance
- Strong areas
- Weak areas
- Recommended next step
- Recommended package

### 5.7 Lead Capture Moment

Before displaying the full report, the system may show a partial report and request:

- Name
- Email
- WhatsApp number
- Exam type
- Exam date, optional

Suggested message:

> Your diagnostic result is ready. Enter your email or WhatsApp number to view your full topic breakdown and recommended study path.

### 5.8 Diagnostic Result Page

The result page should show:

- Overall score
- Readiness level
- Strongest topics
- Weakest topics
- Suggested study plan
- Recommended package
- CTA to request access
- CTA to contact WhatsApp

### 5.9 Readiness Levels

Possible readiness labels:

- Beginner: Needs structured foundation
- Developing: Needs more topic-based practice
- Improving: Needs rationales and mock exams
- Exam-Focused: Needs timed practice and review
- Strong: Needs final review and readiness check

### 5.10 Package Recommendation Logic

The platform can recommend packages like this:

- Very low score: Guided Support
- Low score: Premium or Guided Support
- Average score: Premium
- Good score: Premium or Starter
- High score: Mock exams/Premium final review

### 5.11 Diagnostic Flow Diagram

```text
Start Diagnostic
        |
        v
Answer Questions
        |
        v
Submit Answers
        |
        v
System Calculates Score
        |
        v
Partial Result Displayed
        |
        v
Collect Email/WhatsApp
        |
        v
Full Result Displayed
        |
        v
Recommend Package
        |
        v
User Requests Access or Contacts WhatsApp
```

---

## 6. Free Account Flow

### 6.1 Account Creation Entry Points

Users can create an account from:

- Header login/signup
- Diagnostic result page
- Practice questions page
- Package request confirmation
- Free resources page
- Blog CTA

### 6.2 Sign Up Fields

Minimum fields:

- Full name
- Email
- Password
- WhatsApp number, optional but recommended
- Exam type: NCLEX-RN or NCLEX-PN
- Country
- Exam date, optional

### 6.3 Sign Up Success

After signup, redirect to:

> `/student/dashboard`

Display:

> Welcome to NCLEX Prep Nation. Start with your diagnostic test or continue with free practice questions.

### 6.4 Free Dashboard First Experience

The dashboard should show:

- Start diagnostic
- Try free questions
- View basic resources
- Request access to full materials
- Contact WhatsApp

### 6.5 Account Flow Diagram

```text
User clicks Create Account
        |
        v
Completes signup form
        |
        v
Email/Password account created
        |
        v
Redirect to dashboard
        |
        v
Show free plan status
        |
        v
Recommend diagnostic or free practice
```

---

## 7. Practice Question Flow

### 7.1 Practice Entry Points

Students can enter practice from:

- Homepage
- Practice Questions page
- Student dashboard
- Diagnostic results
- Topic pages
- Blog CTAs

### 7.2 Practice Modes

The system should support:

- Free practice
- Topic-based practice
- Random practice
- NCLEX-RN practice
- NCLEX-PN practice
- NGN case study practice
- Incorrect question review
- Saved question review
- Timed practice, optional

### 7.3 Question Screen Flow

1. Student selects practice mode.
2. System loads question.
3. Student selects answer.
4. Student submits answer.
5. System shows correct/incorrect.
6. System shows detailed rationale.
7. Student can save question.
8. Student moves to next question.
9. Progress is recorded.

### 7.4 Rationale Display

After answer submission, show:

- Correct answer
- Why it is correct
- Why other options are wrong
- Related topic
- Learning tip
- Recommended resource

### 7.5 Locked Premium Questions

If free user reaches locked questions:

Show message:

> This question is part of the Premium question bank. Request access to unlock full practice, NGN case studies, detailed rationales, and mock exams.

CTAs:

- Request Premium Access
- Contact Us on WhatsApp

### 7.6 Practice Flow Diagram

```text
Student selects practice mode
        |
        v
Question loads
        |
        v
Student answers
        |
        v
Submit answer
        |
        v
Show result + rationale
        |
        v
Save/review/continue
        |
        v
Progress updated
```

---

## 8. Resource Download Flow

### 8.1 Resource Types

Resources may include:

- Study plans
- Pharmacology guides
- Lab values guide
- Infection control guide
- Prioritization guide
- NGN guide
- Exam day checklist
- Topic summaries

### 8.2 Free Resource Flow

1. User opens Resources page.
2. User selects free resource.
3. System asks for email/WhatsApp, if lead capture is required.
4. User submits details.
5. Resource becomes downloadable.
6. Lead is saved.
7. User is encouraged to create account or request package.

### 8.3 Premium Resource Flow

1. Student opens premium resource.
2. System checks access level.
3. If student has access, resource downloads.
4. If no access, show upgrade message.
5. Student clicks request access.
6. Package request flow begins.

### 8.4 Resource Flow Diagram

```text
User selects resource
        |
        +--> Free Resource
        |       |
        |       v
        |   Capture lead or download directly
        |
        +--> Premium Resource
                |
                v
          Check access level
                |
                +--> Access granted --> Download
                |
                +--> No access --> Request Access
```

---

## 9. Package Request Flow

### 9.1 Package Entry Points

Users can request a package from:

- Packages page
- Diagnostic results
- Locked premium question
- Locked premium resource
- Student dashboard
- Blog CTA
- WhatsApp CTA
- Contact page

### 9.2 Package Options

Available packages:

1. Free
2. Starter
3. Premium
4. Guided Support

### 9.3 Package Request Form Fields

Required fields:

- Full name
- Email
- WhatsApp number
- Country
- Exam type
- Preferred package
- Preferred contact method

Optional fields:

- Exam date
- Current preparation level
- Message
- Weak areas
- Previous NCLEX attempt
- Best time to contact

### 9.4 Submission Result

After submission, show:

> Your package request has been received. Our team will contact you by WhatsApp or email with package details, payment instructions, and access confirmation.

CTAs:

- Contact Us on WhatsApp
- Return to Dashboard
- View Free Resources

### 9.5 Package Request Flow Diagram

```text
User selects package
        |
        v
Clicks Request Access
        |
        v
Completes package request form
        |
        v
Request saved in database
        |
        v
Admin sees new request
        |
        v
User sees confirmation
        |
        v
Admin contacts user manually
```

---

## 10. Manual WhatsApp/Email Sales Flow

### 10.1 Manual Sales Purpose

Manual sales through WhatsApp/email allows the team to:

- Answer student questions
- Build trust
- Recommend best package
- Confirm payment manually
- Provide personalized support
- Reduce friction for students who prefer direct communication

### 10.2 WhatsApp Flow

1. User clicks WhatsApp button.
2. WhatsApp opens with pre-filled message.
3. Message includes package interest and user context.
4. Admin replies manually.
5. Admin explains package.
6. Admin provides payment instructions.
7. User pays.
8. Admin confirms payment.
9. Admin grants access or sends material.

### 10.3 Pre-Filled WhatsApp Message

Example:

```text
Hello NCLEX Prep Nation, I am interested in the Premium Package. I am preparing for NCLEX-RN and would like to know how to get access.
```

For diagnostic result:

```text
Hello NCLEX Prep Nation, I just completed the free diagnostic test. I would like guidance on the best package for my weak areas.
```

### 10.4 Email Flow

1. User submits package request or contact form.
2. Admin receives request.
3. Admin replies with package details.
4. Admin sends payment instructions.
5. User confirms payment.
6. Admin verifies payment.
7. Admin grants access or sends materials.

### 10.5 Manual Sales Flow Diagram

```text
User requests package
        |
        v
Admin reviews request
        |
        v
Admin contacts user
        |
        v
User asks questions
        |
        v
Admin recommends package
        |
        v
Payment instructions sent
        |
        v
User pays manually
        |
        v
Admin confirms payment
        |
        v
Access granted/materials sent
```

---

## 11. Student Access Granting Flow

### 11.1 After Payment Confirmation

Admin should:

1. Open package request.
2. Mark payment as confirmed.
3. Select package access level.
4. Grant access to student account.
5. Add admin note.
6. Mark status as Access Granted or Materials Sent.
7. Notify student by email/WhatsApp.

### 11.2 Student Notification Message

Example:

> Your NCLEX Prep Nation access has been activated. You can now log in to your dashboard and begin using your package materials.

### 11.3 Access Flow Diagram

```text
Payment confirmed
        |
        v
Admin updates request status
        |
        v
Admin grants package access
        |
        v
Student notified
        |
        v
Student logs in
        |
        v
Student accesses resources/practice
```

---

## 12. Student Learning Flow

### 12.1 Learning Journey

After access, student should follow this path:

1. Open dashboard.
2. Review diagnostic result.
3. Follow recommended study plan.
4. Practice weak topics.
5. Review rationales.
6. Save difficult questions.
7. Download resources.
8. Take mock exam.
9. Review mock exam results.
10. Continue weak-topic correction.
11. Request guided support if needed.

### 12.2 Dashboard Should Recommend Next Step

Examples:

- “Continue Pharmacology Practice”
- “Review Incorrect Questions”
- “Take Your First Mock Exam”
- “Download Your Study Plan”
- “Request Guided Support”

### 12.3 Learning Flow Diagram

```text
Student logs in
        |
        v
Dashboard recommends next action
        |
        v
Student practices/downloads/takes mock exam
        |
        v
System records progress
        |
        v
Weak topics updated
        |
        v
Student continues recommended study
```

---

## 13. Mock Exam Flow

### 13.1 Mock Exam Entry Points

Students can access mock exams from:

- Dashboard
- Student navigation
- Premium package page
- Practice section
- Diagnostic recommendations

### 13.2 Mock Exam Options

Possible mock exam modes:

- Full mixed mock exam
- Topic-based mock exam
- Timed exam
- Untimed exam
- NCLEX-RN mock exam
- NCLEX-PN mock exam
- NGN case-based mock exam

### 13.3 Mock Exam Flow

1. Student selects mock exam.
2. Student chooses mode.
3. System starts timer, if timed.
4. Student answers all questions.
5. Student submits exam.
6. System calculates score.
7. System shows breakdown.
8. Student reviews incorrect answers.
9. System recommends weak-topic resources.

### 13.4 Mock Exam Result Should Show

- Total score
- Accuracy percentage
- Topic performance
- Time spent
- Strong topics
- Weak topics
- Incorrect questions
- Recommended next actions

---

## 14. Guided Support Flow

### 14.1 Entry Points

Users can request Guided Support from:

- Packages page
- Diagnostic result page
- Dashboard
- Mock exam result
- WhatsApp button
- Contact page

### 14.2 Guided Support Request Fields

- Full name
- Email
- WhatsApp
- Exam type
- Exam date
- Current preparation level
- Biggest challenge
- Preferred support type
- Preferred meeting time
- Message

### 14.3 Guided Support Process

1. Student submits request.
2. Admin reviews request.
3. Admin contacts student.
4. Admin explains support details.
5. Student confirms payment manually.
6. Admin activates Guided Support access.
7. Student receives support schedule or instructions.

---

## 15. Blog-to-Lead Flow

### 15.1 Blog Purpose

Blog posts should attract Google traffic and convert readers.

### 15.2 Blog CTA Flow

Each blog post should include:

- CTA near middle: Start Free Diagnostic
- CTA near end: Request Study Materials
- CTA in sidebar: Contact WhatsApp
- Related resources
- Related practice questions

### 15.3 Blog Conversion Flow

```text
User reads blog
        |
        v
Sees useful content
        |
        v
Clicks diagnostic/resource CTA
        |
        v
Submits email/WhatsApp
        |
        v
Becomes lead
        |
        v
Receives package recommendation
```

---

## 16. Admin Lead Management Flow

### 16.1 Admin Lead Sources

Leads come from:

- Diagnostic test
- Package request form
- Resource download
- Contact form
- WhatsApp click record, if trackable
- Newsletter signup
- Guided support request

### 16.2 Admin Lead Actions

Admin can:

- View lead details
- Filter by source
- Filter by package interest
- Filter by exam type
- Add notes
- Contact by WhatsApp
- Contact by email
- Convert lead to student
- Mark lead as followed up
- Mark as not interested
- Delete or archive lead

### 16.3 Lead Statuses

- New Lead
- Contacted
- Interested
- Not Interested
- Waiting for Payment
- Converted
- Follow-up Needed
- Closed

---

## 17. Admin Package Request Flow

### 17.1 Package Request Statuses

- New Request
- Contacted
- Waiting for Payment
- Payment Confirmed
- Access Granted
- Materials Sent
- Follow-up Needed
- Cancelled
- Refunded

### 17.2 Admin Steps

1. Open package request.
2. Review student details.
3. Contact student.
4. Update status to Contacted.
5. Send payment instructions.
6. Update status to Waiting for Payment.
7. Confirm payment manually.
8. Update status to Payment Confirmed.
9. Grant access or send resources.
10. Update status to Access Granted or Materials Sent.
11. Add admin note.

---

## 18. Error and Edge Case Flows

### 18.1 User Submits Form Without Required Fields

Show:

> Please complete all required fields before submitting.

### 18.2 User Already Has Pending Request

Show:

> You already have a pending package request. Our team will contact you soon. You can also contact us directly through WhatsApp.

### 18.3 Student Tries to Access Locked Content

Show:

> This content is included in a paid package. Request access to unlock this material.

### 18.4 Payment Not Confirmed Yet

Show:

> Your package request is being processed. Access will be activated after payment confirmation.

### 18.5 Expired or Revoked Access

Show:

> Your current access is not active. Please contact support to renew or resolve your access.

---

## 19. Notification Flow

### 19.1 User Notifications

The platform should notify users for:

- Package request submitted
- Payment confirmed
- Access granted
- Materials sent
- Admin message received
- Mock exam completed
- New resource available
- Guided support update

### 19.2 Admin Notifications

Admin should be notified for:

- New package request
- New diagnostic lead
- New contact message
- New guided support request
- New student signup
- New payment awaiting confirmation

Notifications can be implemented first inside the admin dashboard, then later through email.

---

## 20. Retention Flow

### 20.1 Retention Goal

The website should keep students returning.

### 20.2 Retention Features

- Dashboard progress
- Continue practice button
- Weak-topic reminders
- Saved questions
- Mock exam history
- Recommended next steps
- New resources
- Email/WhatsApp follow-up, manual or automated later

### 20.3 Retention Flow

```text
Student logs in
        |
        v
Sees current progress
        |
        v
Receives next recommended action
        |
        v
Practices or downloads resource
        |
        v
Progress improves
        |
        v
Student returns to continue
```

---

## 21. Recommended Global CTAs by User Type

### Guest Visitor

- Start Free Diagnostic
- Try Free Questions
- View Packages
- Contact Us on WhatsApp

### Free Student

- Continue Free Practice
- Request Premium Access
- Download Free Guide
- View Weak Topics

### Starter Student

- View Starter Materials
- Continue Practice
- Upgrade to Premium
- Contact Support

### Premium Student

- Continue Practice
- Take Mock Exam
- Review Weak Topics
- Request Guided Support

### Guided Support Student

- View Study Plan
- Join Support Session
- Review Mock Exam
- Contact WhatsApp Support

### Admin

- View New Requests
- Confirm Payment
- Grant Access
- Add Question
- Upload Resource

---

## 22. Final User Flow Summary

NCLEX Prep Nation must be built around a clear user journey:

1. Attract user.
2. Build trust.
3. Give free value.
4. Capture lead.
5. Recommend package.
6. Use WhatsApp/email to close manually.
7. Grant access.
8. Retain student through dashboard and progress tracking.
9. Encourage upgrade where needed.
10. Support student until exam readiness.

Every page and feature should support this journey.
