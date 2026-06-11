# 14_TECHNICAL_ARCHITECTURE.md

# NCLEX Prep Nation — Technical Architecture Specification

## 1. Document Purpose

This document defines the recommended technical architecture for NCLEX Prep Nation.

It explains the system structure, frontend, backend, database, authentication, admin dashboard, manual payment workflow, file storage, SEO requirements, security requirements, deployment direction, and future scalability.

This document is written for developers and AI coding assistants.

The goal is to build the platform properly from the beginning so it can support:

- Public marketing pages
- Student accounts
- Student dashboard
- Question bank
- Diagnostic tests
- Mock exams
- Resource downloads
- Manual package requests
- Manual payment confirmation
- Admin dashboard
- Blog/SEO system
- Future payment API integration

---

## 2. Architecture Goal

The technical goal is:

> Build a secure, scalable, maintainable NCLEX preparation platform that supports manual package requests now and automatic payment integration later.

The system should not be hardcoded or built as static pages only.

It should be developed as a real web application.

---

## 3. Recommended Architecture Options

There are three possible architecture options.

---

## 4. Option A: Laravel + MySQL

### 4.1 Description

Laravel handles:

- Public pages
- Authentication
- Student dashboard
- Admin dashboard
- Question bank
- Resources
- Package requests
- Manual payments
- Blog
- Database operations

MySQL stores all data.

### 4.2 Best For

This option is best if:

- The developer wants strong backend control.
- The project may be hosted on cPanel/shared hosting.
- The business wants a strong admin dashboard.
- Manual payment workflow is important.
- XAMPP/local development is preferred.
- The site should be easier to migrate to common hosting.

### 4.3 Recommended For This Project?

Yes. Laravel + MySQL is a strong option for this project because manual admin workflows are very important.

---

## 5. Option B: Next.js + Supabase

### 5.1 Description

Next.js handles:

- Public pages
- SEO
- Frontend UI
- Student interface
- API routes, if needed

Supabase handles:

- PostgreSQL database
- Authentication
- File storage
- Row-level security
- Realtime updates, if needed

### 5.2 Best For

This option is best if:

- SEO and modern frontend are top priorities.
- Deployment will be on Vercel.
- The developer wants a modern stack.
- Supabase will handle backend features.
- The project may later need realtime features.

### 5.3 Recommended For This Project?

Also acceptable. This is a modern and clean option, but admin workflow must be carefully built.

---

## 6. Option C: Next.js Frontend + Laravel API Backend

### 6.1 Description

Next.js handles:

- Public website
- SEO
- Frontend screens
- Student UI

Laravel handles:

- Backend API
- Admin dashboard
- Authentication or API authentication
- Database
- Manual payments
- Access control

### 6.2 Best For

This option is best if:

- The project is larger.
- Frontend and backend teams are separate.
- The business wants modern frontend and strong backend.
- Long-term scalability is important.

### 6.3 Recommended For This Project?

This is powerful but more complex. Use only if the developer can manage both stacks well.

---

## 7. Final Recommended Stack

For practical development and strong admin control, use:

## Recommended Stack: Laravel + MySQL

### 7.1 Backend

- Laravel
- PHP 8.2+
- MySQL
- Laravel migrations
- Laravel seeders
- Laravel validation
- Laravel authentication
- Laravel policies/middleware
- Laravel mail

### 7.2 Frontend

Choose one:

- Laravel Blade + Tailwind CSS
- Laravel + Inertia.js + React/Vue
- Laravel API + React frontend

Recommended simple approach:

> Laravel Blade + Tailwind CSS for fastest full-platform build.

Recommended modern approach:

> Laravel + Inertia.js + React for a more app-like dashboard experience.

### 7.3 Styling

- Tailwind CSS
- Inter font
- Brand color system from `02_BRAND_IDENTITY.md`

### 7.4 Database

- MySQL for XAMPP/shared hosting compatibility
- PostgreSQL also acceptable if hosting supports it

### 7.5 Storage

- Local storage for development
- Public/private storage separation
- Future S3-compatible storage if needed

---

## 8. High-Level System Modules

The application should be divided into modules.

### 8.1 Public Website Module

Handles:

- Homepage
- About
- NCLEX-RN
- NCLEX-PN
- Practice questions landing
- Resources landing
- Packages
- Blog
- Contact
- Legal pages

### 8.2 Authentication Module

Handles:

- Registration
- Login
- Logout
- Password reset
- Role-based access
- Student/admin separation

### 8.3 Student Module

Handles:

- Dashboard
- Practice sessions
- Diagnostic results
- Mock exams
- Saved questions
- Weak topics
- Resources
- Package status
- Support

### 8.4 Admin Module

Handles:

- Dashboard
- Students
- Leads
- Package requests
- Manual payments
- Access grants
- Questions
- Resources
- Blog
- Testimonials
- FAQs
- Messages
- Settings

### 8.5 Question Bank Module

Handles:

- Question storage
- Answer options
- Rationales
- Practice sessions
- Student answers
- Saved questions
- Reports
- Filtering

### 8.6 Diagnostic Module

Handles:

- Diagnostic test templates
- Attempts
- Scoring
- Weak-topic analysis
- Package recommendations
- Lead capture

### 8.7 Package Request Module

Handles:

- Packages
- Request forms
- Request statuses
- Admin follow-up
- Manual payment connection
- Access granting

### 8.8 Content Module

Handles:

- Resources
- Blog posts
- FAQs
- Testimonials
- Legal content

---

## 9. Suggested Folder Structure for Laravel

Example Laravel structure:

```text
app/
  Http/
    Controllers/
      Public/
      Student/
      Admin/
      Auth/
    Middleware/
    Requests/
  Models/
  Services/
  Policies/
  ViewModels/

database/
  migrations/
  seeders/
  factories/

resources/
  views/
    public/
    auth/
    student/
    admin/
    components/
  css/
  js/

routes/
  web.php
  auth.php
  admin.php
  student.php

storage/
  app/
    private/
    public/

public/
  assets/
```

---

## 10. Route Structure

### 10.1 Public Routes

```text
/
 /about
 /nclex-rn
 /nclex-pn
 /practice-questions
 /resources
 /packages
 /request-access
 /contact
 /blog
 /blog/{slug}
 /faq
 /disclaimer
 /privacy-policy
 /terms-of-use
 /refund-policy
 /content-integrity-policy
 /official-nclex-resources
```

### 10.2 Auth Routes

```text
/register
/login
/logout
/forgot-password
/reset-password
```

### 10.3 Student Routes

```text
/student/dashboard
/student/practice
/student/mock-exams
/student/resources
/student/progress
/student/saved-questions
/student/weak-topics
/student/package
/student/support
/student/settings
```

### 10.4 Admin Routes

```text
/admin/dashboard
/admin/students
/admin/leads
/admin/package-requests
/admin/manual-payments
/admin/access-management
/admin/questions
/admin/ngn-case-studies
/admin/mock-exams
/admin/resources
/admin/blog
/admin/testimonials
/admin/faqs
/admin/messages
/admin/reports
/admin/settings
/admin/admin-users
/admin/activity-logs
```

---

## 11. Database Architecture

Use the schema in `09_DATABASE_SCHEMA.md`.

Core tables:

- users
- student_profiles
- roles
- user_roles
- packages
- package_requests
- manual_payments
- access_grants
- question_categories
- question_subcategories
- questions
- question_options
- practice_sessions
- student_answers
- saved_questions
- diagnostic_tests
- diagnostic_attempts
- mock_exams
- mock_exam_attempts
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

## 12. Authentication Architecture

### 12.1 User Authentication

The system should support:

- Email/password login
- Password hashing
- Password reset
- Secure logout
- Email verification, optional

### 12.2 Roles

Required roles:

- admin
- student
- content_editor
- support_admin

### 12.3 Access Levels

Access levels are different from roles.

Access levels:

- free
- starter
- premium
- guided

A user can be a student role and have one of these access levels.

---

## 13. Authorization Architecture

### 13.1 Public Users

Can access:

- Public pages
- Free sample questions
- Free diagnostic
- Package request form
- Contact form

### 13.2 Free Students

Can access:

- Student dashboard
- Free questions
- Free resources
- Diagnostic result
- Package request

### 13.3 Starter Students

Can access:

- Starter resources
- Limited questions
- Basic progress

### 13.4 Premium Students

Can access:

- Full question bank
- Mock exams
- NGN case studies
- Premium resources
- Progress tracking

### 13.5 Guided Students

Can access:

- All premium features
- Guided support resources
- Support features

### 13.6 Admins

Can access admin dashboard based on permissions.

---

## 14. Manual Payment Architecture

The payment system at launch is manual.

### 14.1 Flow

1. User submits package request.
2. System creates package_request record.
3. Admin contacts user manually.
4. Admin records payment.
5. Admin confirms payment.
6. Admin grants access.
7. Student can access paid content.

### 14.2 Required Tables

- packages
- package_requests
- manual_payments
- access_grants
- admin_notes
- activity_logs

### 14.3 Future Payment API Compatibility

Do not hardcode payment logic in a way that prevents future payment API.

Future support should include:

- Stripe
- PayPal
- Flutterwave
- Mobile Money
- Coupons
- Subscriptions

---

## 15. Question Bank Architecture

### 15.1 Question Storage

Questions should be stored separately from options.

Tables:

- questions
- question_options
- question_categories
- question_subcategories

### 15.2 Student Practice Tracking

Use:

- practice_sessions
- student_answers
- saved_questions

### 15.3 Question Access

Question access should check:

- question.access_level
- user access_grant
- package status

### 15.4 Locked Content

If no access:

- Show locked screen
- Show request access CTA
- Show WhatsApp CTA

---

## 16. Diagnostic Test Architecture

### 16.1 Diagnostic Test Data

Use:

- diagnostic_tests
- diagnostic_test_questions
- diagnostic_attempts
- student_answers or separate diagnostic answers

### 16.2 Scoring

The scoring service should calculate:

- total score
- topic score
- strongest topics
- weakest topics
- readiness level
- recommended package

### 16.3 Lead Capture

Guest diagnostic attempts should collect:

- name
- email
- WhatsApp
- exam type

Then create:

- diagnostic_attempt
- lead record

---

## 17. Mock Exam Architecture

### 17.1 Mock Exam Data

Use:

- mock_exams
- mock_exam_questions
- mock_exam_attempts
- student_answers

### 17.2 Timed Exams

Store:

- start time
- end time
- time spent
- completed status

### 17.3 Review

After submission, student should review:

- incorrect questions
- rationales
- topic breakdown
- weak topics

---

## 18. Resource Architecture

### 18.1 Resource Storage

Resources may be:

- PDF
- Article
- Video link
- Checklist
- Study plan

Use table:

- resources

Track downloads:

- resource_downloads

### 18.2 File Storage

Development:

- local storage

Production:

- private storage preferred for premium resources
- public storage only for free assets

### 18.3 Access Protection

Premium PDFs should not be publicly accessible by direct URL if possible.

Use authenticated download routes.

---

## 19. Blog Architecture

Use:

- blog_categories
- blog_posts

Blog posts should support:

- slug
- SEO title
- meta description
- featured image
- body
- category
- status
- published date

Blog pages must be SEO-friendly.

---

## 20. Notification Architecture

At first, notifications can be dashboard-based.

Notification events:

- package request submitted
- payment confirmed
- access granted
- materials sent
- message received
- question reported

Later, add email and WhatsApp automation.

---

## 21. Email Architecture

The system should support email for:

- Account registration
- Password reset
- Package request confirmation
- Admin new request alert
- Access granted
- Contact form confirmation

Use Laravel Mail or equivalent.

Configure email settings in `.env`.

---

## 22. WhatsApp Architecture

At launch, WhatsApp can use link-based communication.

Use:

```text
https://wa.me/PHONE_NUMBER?text=ENCODED_MESSAGE
```

Store phone number in settings or environment variable.

Possible future upgrade:

- WhatsApp Business API
- Automated templates
- Admin messaging dashboard

---

## 23. File Upload Architecture

Admin may upload:

- PDF resources
- Images
- Blog featured images
- Receipt proof, optional
- Lesson files, optional

Requirements:

- Validate file type
- Limit file size
- Store premium files privately
- Avoid executable uploads
- Rename files safely
- Track uploaded_by

---

## 24. Security Architecture

### 24.1 Authentication Security

- Hash passwords
- Use secure sessions
- Provide logout
- Protect password reset flow

### 24.2 Admin Security

- Admin routes protected
- Role-based permissions
- Confirm sensitive actions
- Log payment/access actions

### 24.3 Input Security

- Validate form inputs
- Sanitize user content
- Prevent SQL injection through ORM/query builder
- CSRF protection for forms

### 24.4 File Security

- Validate file types
- Store private files outside public root when possible
- Prevent direct access to premium materials

### 24.5 Data Protection

Protect:

- Student email
- WhatsApp number
- Payment notes
- Diagnostic results
- Progress data

---

## 25. Performance Architecture

The site should be fast.

Requirements:

- Optimize images
- Cache public pages if possible
- Use pagination for admin tables
- Index database fields
- Avoid loading too much data at once
- Use lazy loading for heavy pages
- Minimize JavaScript if using Blade

---

## 26. SEO Architecture

The platform should support:

- SEO title per page
- Meta description per page
- Clean URLs
- XML sitemap
- Robots.txt
- Open Graph tags
- Image alt text
- Blog slugs
- Canonical URLs
- FAQ sections
- Fast page loading

---

## 27. Analytics Architecture

Track important events:

- Diagnostic started
- Diagnostic completed
- Package request submitted
- WhatsApp clicked
- Resource downloaded
- Account created
- Question answered
- Mock exam completed
- Premium locked content viewed

At first, store internal analytics in database where needed.

Later, add Google Analytics or privacy-friendly analytics.

---

## 28. Environment Configuration

Use `.env` for:

- App name
- App URL
- Database connection
- Mail settings
- WhatsApp number
- Support email
- File storage settings
- Admin default email
- Future payment keys

Example:

```text
APP_NAME="NCLEX Prep Nation"
APP_URL=http://localhost:8000

SUPPORT_EMAIL=support@nclexprepnation.com
WHATSAPP_NUMBER=1234567890

DB_DATABASE=nclex_prep_nation
DB_USERNAME=root
DB_PASSWORD=
```

---

## 29. Seeder Requirements

The project should include seeders for:

- Admin user
- Roles
- Packages
- Question categories
- Question subcategories
- Sample questions
- Sample resources
- FAQs
- Settings

Default admin should be changeable through environment variables.

---

## 30. Testing Requirements

The developer should test:

- Registration
- Login
- Package request form
- Admin package request management
- Manual payment confirmation
- Access granting
- Locked content logic
- Question answering
- Diagnostic scoring
- Resource downloads
- Blog pages
- Contact form
- Mobile responsiveness
- Admin permissions

---

## 31. Deployment Requirements

### 31.1 Local Development

Use:

- XAMPP/Laragon for Laravel + MySQL
- Composer
- Node/NPM for frontend assets
- Migration and seed commands

### 31.2 Production Deployment

Possible hosting:

- cPanel/shared hosting for Laravel
- VPS
- Managed Laravel hosting
- Cloud platform

Production checklist:

- Set production `.env`
- Run migrations
- Run seeders
- Configure mail
- Configure storage link
- Set file permissions
- Set HTTPS
- Set admin account
- Test forms
- Test WhatsApp links
- Test access control

---

## 32. Backup Strategy

Back up:

- Database
- Uploaded resources
- Blog images
- Receipt files, if used
- Configuration, where needed

Recommended:

- Daily database backup
- Weekly full backup
- Manual backup before major update

---

## 33. Future Features Architecture

Prepare for:

- Payment API
- Coupon codes
- Subscriptions
- Live classes
- Lesson videos
- WhatsApp Business API
- Email automation
- AI recommendations
- Certificates
- Mobile app
- Instructor dashboard
- Cohort management

Do not build the first version in a way that blocks these features.

---

## 34. Development Priority Order

Recommended build order:

1. Project setup
2. Authentication
3. Public pages
4. Packages
5. Package request form
6. Admin dashboard
7. Manual payment and access granting
8. Question bank
9. Student dashboard
10. Diagnostic test
11. Resources
12. Mock exams
13. Blog
14. Legal pages
15. Reports and analytics
16. UI polish and mobile testing

---

## 35. Final Architecture Summary

NCLEX Prep Nation should be built as a real full-stack learning platform.

The architecture must support:

- Public website
- Student accounts
- Question bank
- Diagnostics
- Mock exams
- Resources
- Packages
- Manual payment workflow
- Admin dashboard
- Blog/SEO
- Legal/trust pages
- Future payment API

The recommended practical stack is Laravel + MySQL, with Blade/Tailwind or Inertia/React depending on developer skill.

The most important technical requirement is:

> Build the manual package request, payment confirmation, and access granting system properly from the beginning.
