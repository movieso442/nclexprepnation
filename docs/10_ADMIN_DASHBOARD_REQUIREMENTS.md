# 10_ADMIN_DASHBOARD_REQUIREMENTS.md

# NCLEX Prep Nation — Admin Dashboard Requirements

## 1. Document Purpose

This document defines the full admin dashboard requirements for NCLEX Prep Nation.

The admin dashboard is a very important part of the project because the website will use a manual package request and manual payment confirmation system at launch.

The admin dashboard must allow the business owner or admin team to manage:

- Students
- Leads
- Package requests
- Manual payment confirmations
- Access granting
- Questions
- Rationales
- NGN case studies
- Mock exams
- Study resources
- Blog posts
- Testimonials
- FAQs
- Contact messages
- Website settings
- Reports and analytics

The admin dashboard must be simple, clean, secure, and easy to use.

---

## 2. Admin Dashboard Goal

The goal of the admin dashboard is to make the business manageable from one place.

The admin should be able to answer these questions quickly:

1. Who requested a package today?
2. Who is waiting for payment?
3. Who has paid and needs access?
4. Who has access to Starter, Premium, or Guided Support?
5. Which students are active?
6. Which leads need follow-up?
7. Which questions are published?
8. Which resources are available?
9. Which topics are students struggling with?
10. Which package is most requested?

---

## 3. Admin User Types

The system should support different admin-level users.

### 3.1 Super Admin

The Super Admin has full control.

Can manage:

- All users
- Admin accounts
- Packages
- Payments
- Access grants
- Questions
- Resources
- Blog
- Settings
- Legal pages
- Reports

### 3.2 Content Admin

The Content Admin manages learning content.

Can manage:

- Questions
- Rationales
- NGN case studies
- Mock exams
- Resources
- Blog posts
- FAQs

Cannot confirm payments unless permission is granted.

### 3.3 Sales/Support Admin

The Sales/Support Admin manages leads and package requests.

Can manage:

- Leads
- Package requests
- Contact messages
- WhatsApp follow-up
- Admin notes
- Student support messages

May not edit questions or website settings.

### 3.4 Viewer/Admin Assistant

Can view data but cannot make important changes.

Useful for assistants or temporary staff.

---

## 4. Admin Dashboard Navigation

The admin dashboard should have a left sidebar navigation.

Recommended navigation:

1. Dashboard
2. Students
3. Leads
4. Package Requests
5. Manual Payments
6. Access Management
7. Questions
8. NGN Case Studies
9. Mock Exams
10. Resources
11. Blog
12. Testimonials
13. FAQs
14. Contact Messages
15. Reports
16. Settings
17. Admin Users
18. Activity Logs

The sidebar should be collapsible on desktop and mobile-friendly.

---

## 5. Admin Dashboard Home

URL: `/admin/dashboard`

### 5.1 Dashboard Overview Cards

The admin homepage should show important summary cards.

Recommended cards:

- Total Students
- New Leads
- New Package Requests
- Waiting for Payment
- Payment Confirmed
- Access Granted
- Active Premium Students
- Active Guided Support Students
- Diagnostic Tests Completed
- Contact Messages
- Reported Questions
- Resources Published

### 5.2 Quick Action Buttons

The dashboard should include quick buttons:

- Add Question
- Upload Resource
- View New Requests
- Confirm Payment
- Grant Access
- Add Blog Post
- Add Testimonial
- View Messages

### 5.3 Recent Activity Section

Show:

- Recent package requests
- Recent payments
- Recent student signups
- Recent diagnostic completions
- Recent contact messages
- Recent question reports

### 5.4 Follow-Up Section

Show students/leads needing action:

- New request not contacted
- Waiting for payment
- Follow-up needed
- Paid but access not granted
- Contact message not replied
- Guided support request pending

---

## 6. Students Management

URL: `/admin/students`

### 6.1 Purpose

The Students page allows admin to view and manage registered users.

### 6.2 Student Table Columns

- Student name
- Email
- WhatsApp
- Country
- Exam type
- Current package
- Access status
- Questions answered
- Last active
- Created date
- Actions

### 6.3 Filters

Admin should be able to filter by:

- Package
- Access status
- Exam type
- Country
- Registration date
- Last active
- Has pending request
- Has completed diagnostic
- Guided Support student

### 6.4 Student Profile View

Each student profile should show:

- Full name
- Email
- WhatsApp number
- Country
- Exam type
- Exam date
- Preparation level
- Current package
- Access status
- Package requests
- Payment history
- Diagnostic results
- Practice history
- Mock exam results
- Weak topics
- Saved questions count
- Admin notes
- Activity timeline

### 6.5 Student Actions

Admin should be able to:

- View profile
- Edit profile
- Grant access
- Revoke access
- Change package
- Add admin note
- Contact on WhatsApp
- Send email
- View progress
- Reset password manually, if needed
- Suspend account
- Reactivate account

---

## 7. Leads Management

URL: `/admin/leads`

### 7.1 Purpose

The Leads page stores potential customers from:

- Diagnostic test
- Resource download
- Package request
- Contact form
- Blog CTA
- WhatsApp click record, if implemented
- Newsletter signup

### 7.2 Lead Table Columns

- Lead name
- Email
- WhatsApp
- Country
- Source
- Exam type
- Interest
- Preferred package
- Status
- Created date
- Actions

### 7.3 Lead Sources

Possible sources:

- diagnostic
- resource_download
- package_request
- contact_form
- blog
- whatsapp
- newsletter
- guided_support_request

### 7.4 Lead Statuses

Use these statuses:

- New Lead
- Contacted
- Interested
- Waiting for Payment
- Converted
- Not Interested
- Follow-up Needed
- Closed

### 7.5 Lead Actions

Admin can:

- View lead
- Contact on WhatsApp
- Send email
- Add note
- Update status
- Convert to student
- Link to package request
- Mark follow-up needed
- Archive lead

---

## 8. Package Requests Management

URL: `/admin/package-requests`

### 8.1 Purpose

This is one of the most important admin pages because payments are manual.

Admin must be able to manage the full request-to-access process.

### 8.2 Package Request Table Columns

- Request ID
- Student/lead name
- Email
- WhatsApp
- Country
- Exam type
- Package requested
- Preferred contact method
- Source
- Status
- Request date
- Assigned admin
- Actions

### 8.3 Statuses

Use these statuses:

1. New Request
2. Contacted
3. Waiting for Payment
4. Payment Confirmed
5. Access Granted
6. Materials Sent
7. Follow-up Needed
8. Cancelled
9. Refunded

### 8.4 Request Detail Page

Each request detail page should show:

- Student information
- Package requested
- Exam type
- Exam date
- Preparation level
- Weak areas
- Message
- Preferred contact method
- Source page
- Current status
- Payment records
- Access grants
- Admin notes
- Timeline/history

### 8.5 Package Request Actions

Admin should be able to:

- Mark as Contacted
- Mark as Waiting for Payment
- Confirm Payment
- Grant Access
- Mark Materials Sent
- Mark Follow-up Needed
- Cancel Request
- Add Admin Note
- Contact via WhatsApp
- Send Email
- Convert guest request to registered student
- Link request to existing student

### 8.6 Important Automation Logic

If admin marks payment as confirmed, the system should remind admin to grant access.

If admin grants access, the package request status should update to Access Granted.

If admin marks materials sent, the request should show Materials Sent.

---

## 9. Manual Payments Management

URL: `/admin/manual-payments`

### 9.1 Purpose

This page tracks manual payment confirmations.

### 9.2 Manual Payment Table Columns

- Payment ID
- Student name
- Package
- Expected amount
- Amount paid
- Currency
- Payment method
- Payment date
- Status
- Confirmed by
- Confirmed date
- Actions

### 9.3 Payment Statuses

- Pending
- Confirmed
- Rejected
- Refunded

### 9.4 Payment Methods

Possible payment methods:

- Bank transfer
- Mobile money
- PayPal manual
- Cash
- Western Union
- Other

### 9.5 Manual Payment Actions

Admin should be able to:

- Add payment record
- Edit payment record
- Confirm payment
- Reject payment
- Upload receipt proof, optional
- Add note
- Link payment to package request
- Grant access after confirmation

### 9.6 Payment Confirmation Warning

Before confirming payment, show:

> Confirming payment may allow this student to receive package access. Please verify payment details before continuing.

---

## 10. Access Management

URL: `/admin/access-management`

### 10.1 Purpose

This page controls what content each student can access.

### 10.2 Access Table Columns

- Student name
- Email
- Package
- Access level
- Status
- Start date
- End date
- Granted by
- Actions

### 10.3 Access Levels

- Free
- Starter
- Premium
- Guided Support

### 10.4 Access Statuses

- Active
- Pending
- Expired
- Revoked

### 10.5 Admin Actions

Admin can:

- Grant access
- Extend access
- Revoke access
- Change package
- Set expiry date
- Add note
- View access history

### 10.6 Access Granting Rules

When granting access, admin should select:

- Student
- Package
- Access level
- Start date
- End date, optional
- Related package request, optional
- Note

---

## 11. Question Management

URL: `/admin/questions`

### 11.1 Purpose

The Questions page allows admin to create and manage the question bank.

### 11.2 Question Table Columns

- Question title
- Exam type
- Topic
- Subtopic
- Question type
- Difficulty
- Access level
- Status
- Reports
- Created date
- Actions

### 11.3 Filters

Admin should filter by:

- Exam type
- Topic
- Subtopic
- Question type
- Difficulty
- Access level
- Status
- Reported questions
- Created by
- Review status

### 11.4 Question Editor

The question editor should include:

- Title
- Question body
- Exam type
- Category
- Subcategory
- Question type
- Difficulty
- Access level
- Clinical judgment skill
- Options
- Correct answer
- Rationale
- Wrong option explanations
- Tags
- Estimated time
- Status
- Active/inactive toggle

### 11.5 Question Actions

Admin can:

- Add question
- Edit question
- Duplicate question
- Archive question
- Delete question, if allowed
- Publish/unpublish
- Mark as free or premium
- Add to mock exam
- Add to diagnostic test
- Add to NGN case study
- View reports
- View performance analytics

---

## 12. NGN Case Study Management

URL: `/admin/ngn-case-studies`

### 12.1 Purpose

This page manages NGN-style case studies.

### 12.2 Case Study Fields

- Title
- Scenario
- Patient age
- Patient gender
- Presenting problem
- Nurse notes
- Vital signs
- Lab results
- Medication list
- Provider orders
- Progress notes
- Related questions
- Topic
- Difficulty
- Access level
- Status

### 12.3 Admin Actions

Admin can:

- Create case study
- Edit case study
- Add case questions
- Reorder case questions
- Publish/unpublish
- Archive
- Preview as student

---

## 13. Mock Exam Management

URL: `/admin/mock-exams`

### 13.1 Purpose

Admin can create and manage mock exams.

### 13.2 Mock Exam Fields

- Title
- Description
- Exam type
- Access level
- Total questions
- Time limit
- Status
- Questions included

### 13.3 Admin Actions

Admin can:

- Create mock exam
- Add questions manually
- Generate question set by filter, if implemented
- Edit mock exam
- Publish/unpublish
- View student attempts
- View average scores
- Archive exam

---

## 14. Resource Management

URL: `/admin/resources`

### 14.1 Purpose

Admin can manage study resources and downloadable materials.

### 14.2 Resource Table Columns

- Title
- Category
- Resource type
- Access level
- Downloads
- Status
- Created date
- Actions

### 14.3 Resource Fields

- Title
- Slug
- Description
- Category
- Resource type
- File upload
- Content body
- Access level
- Downloadable status
- Status

### 14.4 Admin Actions

Admin can:

- Upload resource
- Edit resource
- Delete/archive resource
- Mark free/premium
- Assign to package
- View downloads
- Preview resource

---

## 15. Blog Management

URL: `/admin/blog`

### 15.1 Purpose

The blog helps SEO and student acquisition.

### 15.2 Blog Table Columns

- Title
- Category
- Author
- Status
- Published date
- Views, if tracked
- Actions

### 15.3 Blog Editor Fields

- Title
- Slug
- Excerpt
- Body
- Featured image
- Category
- Tags
- SEO title
- Meta description
- CTA block
- Status
- Published date

### 15.4 Admin Actions

Admin can:

- Add blog post
- Edit blog post
- Publish/unpublish
- Archive post
- Preview post
- Add internal links
- Add CTA to diagnostic/package

---

## 16. Testimonials Management

URL: `/admin/testimonials`

### 16.1 Purpose

Admin manages real testimonials.

### 16.2 Fields

- Student name or initials
- Country
- Exam type
- Package used
- Testimonial text
- Rating
- Permission confirmed
- Status

### 16.3 Important Rule

Do not publish testimonials without permission.

### 16.4 Admin Actions

- Add testimonial
- Edit testimonial
- Publish/unpublish
- Archive
- Mark permission confirmed

---

## 17. FAQ Management

URL: `/admin/faqs`

### 17.1 Purpose

Admin manages frequently asked questions.

### 17.2 Fields

- Question
- Answer
- Category
- Display order
- Active status

### 17.3 FAQ Categories

- General
- NCLEX-RN
- NCLEX-PN
- Packages
- Manual Payment
- Student Dashboard
- Resources
- Legal/Disclaimer

---

## 18. Contact Messages Management

URL: `/admin/messages`

### 18.1 Purpose

Admin manages messages sent through the contact form.

### 18.2 Message Table Columns

- Name
- Email
- WhatsApp
- Subject
- Interest area
- Status
- Date
- Actions

### 18.3 Statuses

- New
- Replied
- Resolved
- Archived

### 18.4 Admin Actions

- View message
- Reply manually
- Contact via WhatsApp
- Add note
- Convert to lead
- Mark resolved

---

## 19. Reports and Analytics

URL: `/admin/reports`

### 19.1 Purpose

Reports help admin understand business and learning performance.

### 19.2 Business Reports

Track:

- Total leads
- Package requests
- Conversion rate
- Most requested package
- Waiting for payment
- Confirmed payments
- Access granted
- WhatsApp clicks, if tracked
- Contact messages

### 19.3 Learning Reports

Track:

- Diagnostic completions
- Average diagnostic score
- Most common weak topics
- Questions answered
- Average accuracy
- Mock exam attempts
- Most difficult questions
- Reported questions

### 19.4 Content Reports

Track:

- Most downloaded resources
- Most viewed blog posts
- Most practiced topics
- Most saved questions
- Most reported questions

---

## 20. Settings Management

URL: `/admin/settings`

### 20.1 Purpose

Admin can configure basic website settings.

### 20.2 Settings

- Site name
- Support email
- WhatsApp number
- Default currency
- Footer disclaimer
- Registration open/closed
- Maintenance mode
- Default package prices
- Social links
- SEO defaults

Only Super Admin should manage settings.

---

## 21. Admin Users Management

URL: `/admin/admin-users`

### 21.1 Purpose

Super Admin can manage admin accounts.

### 21.2 Admin User Fields

- Full name
- Email
- Role
- Status
- Last login
- Created date

### 21.3 Actions

- Create admin
- Edit admin
- Suspend admin
- Reset password
- Assign role
- Remove role

---

## 22. Activity Logs

URL: `/admin/activity-logs`

### 22.1 Purpose

Logs track important admin actions.

### 22.2 Actions to Log

- Admin login
- Payment confirmed
- Access granted
- Access revoked
- Package request status changed
- Question published
- Resource uploaded
- Blog published
- Admin user created
- Settings changed

### 22.3 Log Fields

- Admin/user
- Action
- Related record
- Date/time
- IP address, optional
- Metadata, optional

---

## 23. Admin Dashboard UI Requirements

The admin dashboard should be:

- Clean
- Fast
- Mobile-friendly
- Table-based where needed
- Easy to filter
- Easy to search
- Easy to update statuses
- Clear with color-coded badges
- Secure

### 23.1 Status Badge Colors

Recommended:

- New Request: Blue
- Contacted: Teal
- Waiting for Payment: Amber
- Payment Confirmed: Green
- Access Granted: Green
- Materials Sent: Green
- Follow-up Needed: Orange/Amber
- Cancelled: Gray
- Refunded: Purple/Gray
- Rejected: Red

---

## 24. Admin Security Requirements

Admin dashboard must be protected.

Requirements:

- Admin login required
- Role-based access control
- Password hashing
- CSRF protection, if applicable
- Input validation
- File upload validation
- Admin action logging
- Restrict payment confirmation to authorized admins
- Restrict settings to Super Admin
- Prevent public access to admin routes

---

## 25. Admin Workflow Summary

A normal package request workflow:

1. Admin sees New Request.
2. Admin opens request detail.
3. Admin contacts student through WhatsApp/email.
4. Admin marks request as Contacted.
5. Admin sends payment instructions.
6. Admin marks Waiting for Payment.
7. Admin receives payment proof.
8. Admin records and confirms payment.
9. Admin grants access.
10. Admin marks Access Granted or Materials Sent.
11. Student receives confirmation.
12. Admin adds final note.

---

## 26. Final Admin Dashboard Summary

The admin dashboard is the operational heart of NCLEX Prep Nation.

It must allow the team to manage:

- Students
- Leads
- Manual sales
- Manual payment confirmation
- Access control
- Learning content
- SEO content
- Support messages
- Reports
- Settings

Because the website starts without payment API, the admin dashboard must make manual sales and access granting very smooth, trackable, and professional.
