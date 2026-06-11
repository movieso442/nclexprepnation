# 09_DATABASE_SCHEMA.md

# NCLEX Prep Nation — Database Schema Specification

## 1. Document Purpose

This document defines the recommended database structure for NCLEX Prep Nation.

The database must support:

- Users and roles
- Student profiles
- Questions
- Answer options
- Rationales
- Diagnostic tests
- Practice sessions
- Mock exams
- NGN case studies
- Study resources
- Packages
- Manual package requests
- Manual payment records
- Access control
- Blog posts
- Testimonials
- Contact messages
- Admin notes
- Analytics
- Future payment API integration

This document is written to guide backend developers and AI coding assistants.

The database can be implemented in MySQL, PostgreSQL, or another relational database. The structure below is relational-database friendly.

---

## 2. Database Design Principles

The database should follow these principles:

1. Use clear table names.
2. Use consistent primary keys.
3. Use foreign keys where possible.
4. Keep user roles separate from package access.
5. Store manual payment data even without payment API.
6. Support future online payments.
7. Track student progress.
8. Track admin actions.
9. Support free and premium content.
10. Keep content organized by category and access level.

---

## 3. Recommended Core Tables

Main tables:

1. `users`
2. `student_profiles`
3. `roles`
4. `user_roles`
5. `packages`
6. `package_requests`
7. `manual_payments`
8. `access_grants`
9. `question_categories`
10. `question_subcategories`
11. `questions`
12. `question_options`
13. `question_reports`
14. `practice_sessions`
15. `student_answers`
16. `saved_questions`
17. `diagnostic_tests`
18. `diagnostic_attempts`
19. `mock_exams`
20. `mock_exam_attempts`
21. `ngn_case_studies`
22. `resources`
23. `resource_downloads`
24. `blog_posts`
25. `blog_categories`
26. `testimonials`
27. `faqs`
28. `contact_messages`
29. `leads`
30. `admin_notes`
31. `notifications`
32. `settings`
33. `activity_logs`

---

## 4. Users Table

Table: `users`

Purpose:

Stores login account information.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| full_name | varchar | User full name |
| email | varchar | Unique |
| password_hash | varchar | Hashed password |
| whatsapp_number | varchar | Optional but recommended |
| country | varchar | Optional |
| email_verified_at | timestamp | Nullable |
| status | enum | active, inactive, suspended |
| last_login_at | timestamp | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

### Notes

- Passwords must never be stored as plain text.
- Email should be unique.
- Users can be students or admins depending on role.

---

## 5. Student Profiles Table

Table: `student_profiles`

Purpose:

Stores student-specific information separate from login data.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | References users.id |
| exam_type | enum | RN, PN, BOTH, NOT_SURE |
| exam_date | date | Nullable |
| preparation_level | enum | just_starting, studying, exam_close, retaking, not_sure |
| previous_attempts | integer | Default 0 |
| strongest_topic | varchar | Nullable |
| weakest_topic | varchar | Nullable |
| current_package_status | varchar | Free, Starter, Premium, Guided |
| notes | text | Optional |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 6. Roles Table

Table: `roles`

Purpose:

Stores system roles.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| name | varchar | admin, student, content_editor |
| description | text | Optional |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 7. User Roles Table

Table: `user_roles`

Purpose:

Allows users to have roles.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | References users.id |
| role_id | foreign key | References roles.id |
| created_at | timestamp | Required |

---

## 8. Packages Table

Table: `packages`

Purpose:

Stores preparation packages.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| name | varchar | Free, Starter, Premium, Guided Support |
| slug | varchar | Unique |
| short_description | text | Required |
| full_description | text | Required |
| price | decimal | Can be 0 for Free |
| currency | varchar | Example: USD |
| access_level | enum | free, starter, premium, guided |
| features | json/text | Feature list |
| cta_label | varchar | Example: Request Premium Access |
| is_active | boolean | Default true |
| display_order | integer | For sorting |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 9. Package Requests Table

Table: `package_requests`

Purpose:

Stores manual package requests from users or guests.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | Nullable for guest requests |
| full_name | varchar | Required |
| email | varchar | Required |
| whatsapp_number | varchar | Required |
| country | varchar | Required |
| exam_type | enum | RN, PN, BOTH, NOT_SURE |
| package_id | foreign key | References packages.id |
| preferred_contact_method | enum | whatsapp, email, both |
| preparation_level | enum | Nullable |
| exam_date | date | Nullable |
| weak_areas | text | Nullable |
| message | text | Nullable |
| source | varchar | homepage, diagnostic, packages, locked_content, blog |
| status | enum | See status list |
| assigned_admin_id | foreign key | Nullable |
| admin_notes | text | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

### Status Values

- new_request
- contacted
- waiting_for_payment
- payment_confirmed
- access_granted
- materials_sent
- follow_up_needed
- cancelled
- refunded

---

## 10. Manual Payments Table

Table: `manual_payments`

Purpose:

Stores manually confirmed payments.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| package_request_id | foreign key | References package_requests.id |
| user_id | foreign key | Nullable |
| package_id | foreign key | References packages.id |
| expected_amount | decimal | Required |
| amount_paid | decimal | Required |
| currency | varchar | Required |
| payment_method | varchar | bank_transfer, mobile_money, paypal_manual, other |
| payment_reference | varchar | Nullable |
| payment_date | date | Nullable |
| receipt_file_path | varchar | Nullable |
| status | enum | pending, confirmed, rejected, refunded |
| confirmed_by | foreign key | Admin user ID |
| confirmed_at | timestamp | Nullable |
| notes | text | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

### Future API Compatibility Fields

Optional fields to add now or later:

- payment_provider
- transaction_id
- checkout_session_id
- provider_status
- webhook_verified_at

---

## 11. Access Grants Table

Table: `access_grants`

Purpose:

Controls what package access a student has.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | References users.id |
| package_id | foreign key | References packages.id |
| access_level | enum | free, starter, premium, guided |
| status | enum | active, pending, expired, revoked |
| start_date | date | Required |
| end_date | date | Nullable |
| granted_by | foreign key | Admin user ID |
| package_request_id | foreign key | Nullable |
| notes | text | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 12. Question Categories Table

Table: `question_categories`

Purpose:

Stores major question topics.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| name | varchar | Example: Pharmacology |
| slug | varchar | Unique |
| description | text | Optional |
| display_order | integer | Optional |
| is_active | boolean | Default true |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

Examples:

- Fundamentals
- Medical-Surgical Nursing
- Pharmacology
- Maternity
- Pediatrics
- Mental Health
- Safety and Infection Control
- Prioritization and Delegation
- Lab Values
- NGN Case Studies

---

## 13. Question Subcategories Table

Table: `question_subcategories`

Purpose:

Stores subtopics.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| category_id | foreign key | References question_categories.id |
| name | varchar | Example: Anticoagulants |
| slug | varchar | Unique |
| description | text | Optional |
| is_active | boolean | Default true |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 14. Questions Table

Table: `questions`

Purpose:

Stores question content and metadata.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| title | varchar | Short admin title |
| body | text | Question text |
| exam_type | enum | RN, PN, BOTH |
| category_id | foreign key | References question_categories.id |
| subcategory_id | foreign key | Nullable |
| question_type | enum | multiple_choice, sata, matrix, bow_tie, case_study, fill_blank, prioritization |
| difficulty | enum | easy, medium, hard, advanced |
| access_level | enum | free, starter, premium, guided |
| clinical_judgment_skill | varchar | Nullable |
| rationale | text | Required |
| learning_tip | text | Nullable |
| estimated_time_seconds | integer | Nullable |
| tags | json/text | Optional |
| status | enum | draft, in_review, published, archived, flagged |
| is_active | boolean | Default true |
| created_by | foreign key | Admin user ID |
| reviewed_by | foreign key | Nullable |
| reviewed_at | timestamp | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 15. Question Options Table

Table: `question_options`

Purpose:

Stores answer options.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| question_id | foreign key | References questions.id |
| option_label | varchar | A, B, C, D |
| option_text | text | Required |
| is_correct | boolean | Required |
| explanation | text | Explanation for this option |
| display_order | integer | Required |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

### Notes

For SATA questions, multiple options can have `is_correct = true`.

---

## 16. NGN Case Studies Table

Table: `ngn_case_studies`

Purpose:

Stores NGN case study scenarios.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| title | varchar | Required |
| scenario | text | Required |
| patient_age | varchar | Nullable |
| patient_gender | varchar | Nullable |
| presenting_problem | text | Nullable |
| nurse_notes | text/json | Nullable |
| vital_signs | json | Nullable |
| lab_results | json | Nullable |
| medication_list | json | Nullable |
| provider_orders | json | Nullable |
| progress_notes | json | Nullable |
| category_id | foreign key | Nullable |
| difficulty | enum | medium, hard, advanced |
| access_level | enum | free, premium, guided |
| status | enum | draft, published, archived |
| created_by | foreign key | Admin user ID |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 17. Case Study Questions Table

Table: `case_study_questions`

Purpose:

Links questions to NGN case studies.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| case_study_id | foreign key | References ngn_case_studies.id |
| question_id | foreign key | References questions.id |
| display_order | integer | Required |
| created_at | timestamp | Required |

---

## 18. Practice Sessions Table

Table: `practice_sessions`

Purpose:

Stores a student's practice session.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | References users.id |
| session_type | enum | free_practice, topic_practice, random, diagnostic, mock_exam, saved_review, incorrect_review |
| exam_type | enum | RN, PN, BOTH |
| category_id | foreign key | Nullable |
| total_questions | integer | Required |
| correct_count | integer | Default 0 |
| incorrect_count | integer | Default 0 |
| score_percentage | decimal | Nullable |
| started_at | timestamp | Required |
| completed_at | timestamp | Nullable |
| status | enum | in_progress, completed, abandoned |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 19. Student Answers Table

Table: `student_answers`

Purpose:

Stores each answer a student submits.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | References users.id |
| question_id | foreign key | References questions.id |
| practice_session_id | foreign key | Nullable |
| selected_answer | json/text | Supports single or multiple answers |
| is_correct | boolean | Required |
| time_spent_seconds | integer | Nullable |
| rationale_viewed | boolean | Default false |
| confidence_level | enum | low, medium, high, nullable |
| answered_at | timestamp | Required |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 20. Saved Questions Table

Table: `saved_questions`

Purpose:

Allows students to save questions.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | References users.id |
| question_id | foreign key | References questions.id |
| notes | text | Nullable |
| mastered | boolean | Default false |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 21. Question Reports Table

Table: `question_reports`

Purpose:

Allows students to report question issues.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | Nullable |
| question_id | foreign key | References questions.id |
| reason | enum | typo, wrong_answer, confusing_rationale, duplicate, technical_issue, other |
| message | text | Nullable |
| status | enum | new, reviewing, resolved, dismissed |
| admin_response | text | Nullable |
| resolved_by | foreign key | Nullable |
| resolved_at | timestamp | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 22. Diagnostic Tests Table

Table: `diagnostic_tests`

Purpose:

Stores diagnostic test templates.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| title | varchar | Required |
| description | text | Required |
| exam_type | enum | RN, PN, BOTH |
| total_questions | integer | Required |
| is_active | boolean | Default true |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 23. Diagnostic Test Questions Table

Table: `diagnostic_test_questions`

Purpose:

Links questions to diagnostic tests.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| diagnostic_test_id | foreign key | References diagnostic_tests.id |
| question_id | foreign key | References questions.id |
| display_order | integer | Required |
| created_at | timestamp | Required |

---

## 24. Diagnostic Attempts Table

Table: `diagnostic_attempts`

Purpose:

Stores diagnostic results.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | Nullable for guest |
| diagnostic_test_id | foreign key | References diagnostic_tests.id |
| full_name | varchar | Nullable |
| email | varchar | Nullable |
| whatsapp_number | varchar | Nullable |
| exam_type | enum | RN, PN, BOTH, NOT_SURE |
| total_questions | integer | Required |
| correct_count | integer | Required |
| score_percentage | decimal | Required |
| readiness_level | varchar | Required |
| strongest_topics | json/text | Nullable |
| weakest_topics | json/text | Nullable |
| recommended_package_id | foreign key | Nullable |
| lead_captured | boolean | Default false |
| completed_at | timestamp | Required |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 25. Mock Exams Table

Table: `mock_exams`

Purpose:

Stores mock exam templates.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| title | varchar | Required |
| description | text | Required |
| exam_type | enum | RN, PN, BOTH |
| access_level | enum | premium, guided |
| total_questions | integer | Required |
| time_limit_minutes | integer | Nullable |
| status | enum | draft, published, archived |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 26. Mock Exam Questions Table

Table: `mock_exam_questions`

Purpose:

Links questions to mock exams.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| mock_exam_id | foreign key | References mock_exams.id |
| question_id | foreign key | References questions.id |
| display_order | integer | Required |
| created_at | timestamp | Required |

---

## 27. Mock Exam Attempts Table

Table: `mock_exam_attempts`

Purpose:

Stores student mock exam results.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | References users.id |
| mock_exam_id | foreign key | References mock_exams.id |
| total_questions | integer | Required |
| correct_count | integer | Required |
| incorrect_count | integer | Required |
| score_percentage | decimal | Required |
| time_spent_minutes | integer | Nullable |
| topic_breakdown | json/text | Nullable |
| weakest_topics | json/text | Nullable |
| strongest_topics | json/text | Nullable |
| completed_at | timestamp | Required |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 28. Resources Table

Table: `resources`

Purpose:

Stores study resources and downloadable materials.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| title | varchar | Required |
| slug | varchar | Unique |
| description | text | Required |
| category | varchar | Example: Pharmacology |
| resource_type | enum | pdf, article, video, checklist, study_plan |
| file_path | varchar | Nullable |
| content_body | longtext | Nullable |
| access_level | enum | free, starter, premium, guided |
| is_downloadable | boolean | Default true |
| download_count | integer | Default 0 |
| status | enum | draft, published, archived |
| created_by | foreign key | Admin user ID |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 29. Resource Downloads Table

Table: `resource_downloads`

Purpose:

Tracks resource downloads.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | Nullable |
| resource_id | foreign key | References resources.id |
| full_name | varchar | Nullable for guest lead |
| email | varchar | Nullable |
| whatsapp_number | varchar | Nullable |
| downloaded_at | timestamp | Required |
| created_at | timestamp | Required |

---

## 30. Leads Table

Table: `leads`

Purpose:

Stores potential customers from forms, diagnostics, downloads, and WhatsApp interest.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| full_name | varchar | Required |
| email | varchar | Nullable |
| whatsapp_number | varchar | Nullable |
| country | varchar | Nullable |
| exam_type | enum | RN, PN, BOTH, NOT_SURE |
| source | varchar | diagnostic, resource, contact, package, blog |
| interest | varchar | package/resource/support |
| preferred_package_id | foreign key | Nullable |
| status | enum | new, contacted, interested, waiting_for_payment, converted, not_interested, closed |
| notes | text | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 31. Blog Categories Table

Table: `blog_categories`

Purpose:

Stores blog categories.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| name | varchar | Required |
| slug | varchar | Unique |
| description | text | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 32. Blog Posts Table

Table: `blog_posts`

Purpose:

Stores SEO blog posts.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| category_id | foreign key | References blog_categories.id |
| title | varchar | Required |
| slug | varchar | Unique |
| excerpt | text | Required |
| body | longtext | Required |
| featured_image | varchar | Nullable |
| seo_title | varchar | Required |
| meta_description | varchar | Required |
| status | enum | draft, published, archived |
| author_id | foreign key | Admin user ID |
| published_at | timestamp | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 33. Testimonials Table

Table: `testimonials`

Purpose:

Stores real student testimonials.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| student_name | varchar | Can be initials |
| country | varchar | Nullable |
| exam_type | enum | RN, PN, BOTH, nullable |
| package_name | varchar | Nullable |
| testimonial_text | text | Required |
| rating | integer | Nullable |
| permission_confirmed | boolean | Required |
| status | enum | draft, published, archived |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 34. FAQs Table

Table: `faqs`

Purpose:

Stores frequently asked questions.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| question | text | Required |
| answer | text | Required |
| category | varchar | Nullable |
| display_order | integer | Optional |
| is_active | boolean | Default true |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 35. Contact Messages Table

Table: `contact_messages`

Purpose:

Stores contact form submissions.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| full_name | varchar | Required |
| email | varchar | Required |
| whatsapp_number | varchar | Nullable |
| subject | varchar | Required |
| message | text | Required |
| interest_area | varchar | Nullable |
| status | enum | new, replied, resolved, archived |
| admin_notes | text | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 36. Admin Notes Table

Table: `admin_notes`

Purpose:

Stores admin notes on students, leads, requests, or payments.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| admin_id | foreign key | References users.id |
| related_type | varchar | student, lead, package_request, payment |
| related_id | bigint / uuid | ID of related record |
| note | text | Required |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 37. Notifications Table

Table: `notifications`

Purpose:

Stores system notifications.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | Nullable |
| title | varchar | Required |
| message | text | Required |
| type | varchar | package, payment, access, diagnostic, system |
| is_read | boolean | Default false |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

---

## 38. Settings Table

Table: `settings`

Purpose:

Stores website-level settings.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| key | varchar | Unique |
| value | text/json | Required |
| description | text | Nullable |
| created_at | timestamp | Required |
| updated_at | timestamp | Required |

Example settings:

- site_name
- support_email
- whatsapp_number
- default_currency
- footer_disclaimer
- maintenance_mode
- allow_registration

---

## 39. Activity Logs Table

Table: `activity_logs`

Purpose:

Tracks important admin and system actions.

### Fields

| Field | Type | Notes |
|---|---|---|
| id | bigint / uuid | Primary key |
| user_id | foreign key | Nullable |
| action | varchar | Required |
| related_type | varchar | Nullable |
| related_id | bigint / uuid | Nullable |
| ip_address | varchar | Nullable |
| user_agent | text | Nullable |
| metadata | json/text | Nullable |
| created_at | timestamp | Required |

Important actions to log:

- Admin login
- Payment confirmed
- Access granted
- Access revoked
- Question published
- Resource uploaded
- Package request status changed

---

## 40. Important Relationships

### User Relationships

- A user has one student profile.
- A user can have many practice sessions.
- A user can have many student answers.
- A user can have many saved questions.
- A user can have many package requests.
- A user can have many access grants.

### Package Relationships

- A package can have many package requests.
- A package can have many access grants.
- A package can be linked to manual payments.

### Question Relationships

- A question belongs to a category.
- A question may belong to a subcategory.
- A question has many options.
- A question can appear in many practice sessions.
- A question can be linked to diagnostic tests.
- A question can be linked to mock exams.
- A question can be linked to NGN case studies.

### Resource Relationships

- A resource can be downloaded many times.
- A resource has an access level.
- A resource can be recommended after diagnostic results.

---

## 41. Recommended Indexes

Add indexes on:

- users.email
- package_requests.email
- package_requests.status
- package_requests.package_id
- manual_payments.status
- access_grants.user_id
- access_grants.status
- questions.category_id
- questions.exam_type
- questions.question_type
- questions.access_level
- questions.status
- student_answers.user_id
- student_answers.question_id
- practice_sessions.user_id
- diagnostic_attempts.email
- leads.email
- leads.whatsapp_number
- blog_posts.slug

---

## 42. Access Control Logic

### 42.1 Free User

Can access:

- Free questions
- Free resources
- Free diagnostic
- Blog
- Package request

### 42.2 Starter User

Can access:

- Free content
- Starter resources
- Limited paid questions

### 42.3 Premium User

Can access:

- Full question bank
- Premium resources
- Mock exams
- NGN case studies
- Progress dashboard

### 42.4 Guided Support User

Can access:

- All premium features
- Guided support content
- Support scheduling or instructions
- Guided worksheets

---

## 43. Example Package Access Logic

Pseudo-logic:

```text
If user has active access_grant with access_level = premium:
    allow premium resources and questions
Else if question.access_level = free:
    allow question
Else:
    show locked content message and request access CTA
```

---

## 44. Manual Payment to Access Flow

Database flow:

1. Create `package_requests` record.
2. Admin contacts student.
3. Admin creates or updates `manual_payments` record.
4. Admin marks payment as confirmed.
5. Admin creates `access_grants` record.
6. Student package status becomes active.
7. Student can access package content.

---

## 45. Data Security Requirements

The database should protect:

- Passwords
- Student contact information
- Payment notes
- Admin actions
- Student progress data

Security requirements:

- Hash passwords
- Validate inputs
- Protect admin routes
- Use role-based access
- Limit file upload types
- Avoid exposing private data publicly
- Log sensitive admin actions
- Back up database regularly

---

## 46. Seed Data Recommendations

The project should include seed data for development.

Seed:

- Admin user
- Default roles
- Four packages
- Question categories
- Question subcategories
- Sample questions
- Sample resources
- Sample blog categories
- Sample FAQs
- Default settings

### 46.1 Default Packages

- Free
- Starter
- Premium
- Guided Support

### 46.2 Default Roles

- admin
- student
- content_editor

---

## 47. Future Payment API Compatibility

The schema should support future automatic payments.

Future tables or fields may include:

- payment_provider
- payment_transactions
- coupons
- invoices
- subscriptions
- webhook_events

Do not design the manual payment system in a way that blocks future API integration.

---

## 48. Suggested Future Tables

Future optional tables:

1. `payment_transactions`
2. `coupons`
3. `subscriptions`
4. `live_classes`
5. `lesson_videos`
6. `support_sessions`
7. `student_study_plans`
8. `certificates`
9. `referrals`
10. `email_campaigns`

---

## 49. Database Build Priority

Build tables in this order:

1. users
2. roles
3. user_roles
4. student_profiles
5. packages
6. package_requests
7. manual_payments
8. access_grants
9. question_categories
10. question_subcategories
11. questions
12. question_options
13. practice_sessions
14. student_answers
15. diagnostic_tests
16. diagnostic_attempts
17. resources
18. blog tables
19. contact/leads
20. admin notes/logs

---

## 50. Final Database Summary

The NCLEX Prep Nation database must support a complete preparation platform.

It must store:

- Students
- Admins
- Packages
- Manual requests
- Manual payments
- Access levels
- Questions
- Rationales
- Practice attempts
- Diagnostic results
- Mock exams
- Resources
- Blog content
- Leads
- Messages
- Admin notes
- Logs

The most important backend requirement is that the manual payment flow must be properly stored and trackable, while still allowing future payment API integration.
