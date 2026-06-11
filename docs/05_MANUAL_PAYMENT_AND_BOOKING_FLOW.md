# 05_MANUAL_PAYMENT_AND_BOOKING_FLOW.md

# NCLEX Prep Nation — Manual Payment and Booking Flow Specification

## 1. Document Purpose

This document defines the complete manual payment, package request, booking, and access confirmation process for NCLEX Prep Nation.

The platform will not use a payment API at launch. Instead, students will request packages and communicate with the team through WhatsApp or email.

The goal is to make this manual process feel professional, intentional, and trustworthy, not incomplete.

The developer must build the website so that payment APIs can be added later without changing the entire system.

---

## 2. Manual Payment Philosophy

NCLEX Prep Nation uses a manual access request process to provide personal guidance before package confirmation.

This is not a weakness. It is part of the trust and support experience.

The message to users should be:

> Choose your package, send a request, and our team will contact you by WhatsApp or email with the next steps for payment confirmation and access.

The website should avoid saying:

- Payment API not available
- Online payment coming soon
- We cannot accept payment here
- Checkout is disabled

Instead, the website should use language like:

- Request Access
- Book Materials
- Reserve Your NCLEX Prep Package
- Send Package Request
- Contact Us on WhatsApp
- Get Study Materials
- Request Premium Access
- Request Guided Support

---

## 3. Business Reasons for Manual Payment

Manual payment allows the business to:

1. Speak directly with students.
2. Build trust before payment.
3. Recommend the best package.
4. Handle local or international payment methods.
5. Support students who prefer WhatsApp.
6. Confirm details before granting access.
7. Avoid initial payment API costs.
8. Reduce technical complexity at launch.
9. Keep sales personal and supportive.
10. Upgrade later to automatic payment when ready.

---

## 4. Manual Payment User Experience Goals

The manual payment flow must be:

- Clear
- Professional
- Fast
- Trustworthy
- Easy to understand
- Mobile-friendly
- WhatsApp-friendly
- Email-friendly
- Trackable by admin
- Upgradeable to payment API later

The user should never feel abandoned after submitting a request.

---

## 5. Core Manual Payment Flow

The main manual payment flow is:

1. Student views packages.
2. Student selects a package.
3. Student clicks Request Access or Book Materials.
4. Student fills request form.
5. Student chooses WhatsApp or email as preferred contact.
6. System saves request.
7. System shows confirmation.
8. Admin contacts student.
9. Admin sends package details and payment instructions.
10. Student pays through agreed method.
11. Admin confirms payment manually.
12. Admin grants access or sends materials.
13. Student receives confirmation.

---

## 6. Package Request Entry Points

Users should be able to begin the manual payment/request flow from many places.

### 6.1 Website Entry Points

- Packages page
- Homepage package section
- Diagnostic result page
- Practice question locked screen
- Premium resource locked screen
- Student dashboard
- Mock exam locked page
- Blog CTA
- Contact page
- WhatsApp sticky button

### 6.2 CTA Labels by Context

#### Homepage

- Start Free Diagnostic
- View Prep Packages
- Request Access

#### Packages Page

- Book Starter Materials
- Request Premium Access
- Request Guided Support

#### Diagnostic Result Page

- Request Recommended Package
- Contact Us on WhatsApp

#### Locked Content

- Unlock Full Practice
- Request Premium Access

#### Resources Page

- Get Study Materials
- Request Premium Resources

#### Guided Support Section

- Request Guided Support
- Speak With Our Prep Team

---

## 7. Package Request Form

The package request form must collect enough information for admin to follow up properly.

### 7.1 Required Fields

- Full name
- Email address
- WhatsApp number
- Country
- Exam type
- Preferred package
- Preferred contact method

### 7.2 Optional Fields

- Exam date
- Current preparation level
- Biggest weak area
- Previous NCLEX attempt
- Best time to contact
- Message or special request

### 7.3 Exam Type Options

- NCLEX-RN
- NCLEX-PN
- Not sure yet

### 7.4 Preferred Package Options

- Starter
- Premium
- Guided Support
- Not sure, I need recommendation

### 7.5 Preparation Level Options

- Just starting
- Studying already
- Exam date is close
- Failed before and retaking
- Need help choosing a plan

### 7.6 Preferred Contact Method Options

- WhatsApp
- Email
- Both WhatsApp and email

---

## 8. Package Request Form Validation

The form should validate:

- Full name is required.
- Email must be valid.
- WhatsApp number is required.
- Country is required.
- Exam type is required.
- Preferred package is required.
- Preferred contact method is required.
- Message should not exceed a reasonable limit.

If validation fails, show clear errors.

Example:

> Please enter a valid email address.

---

## 9. Package Request Confirmation Page

After submission, redirect to:

`/package-request-success`

### 9.1 Confirmation Page Content

Headline:

> Your package request has been received.

Message:

> Thank you for requesting access to NCLEX Prep Nation. Our team will contact you through your preferred method with package details, payment instructions, and access confirmation.

Show request summary:

- Name
- Selected package
- Exam type
- Preferred contact method
- WhatsApp/email provided

### 9.2 Confirmation CTAs

- Contact Us on WhatsApp
- Return to Dashboard
- View Free Resources
- Try Free Questions

### 9.3 Confirmation Trust Note

> Access is activated after payment confirmation. NCLEX Prep Nation provides original preparation materials and does not provide real or leaked exam questions.

---

## 10. WhatsApp Flow

WhatsApp should be treated as a major conversion channel.

### 10.1 WhatsApp Button Placement

WhatsApp buttons should appear on:

- Header or floating button
- Homepage final CTA
- Packages page
- Request access page
- Contact page
- Diagnostic result page
- Locked content pages
- Student dashboard
- Package request success page

### 10.2 WhatsApp Button Labels

Use:

- Contact Us on WhatsApp
- Discuss Package on WhatsApp
- Request Guided Support on WhatsApp
- Ask About NCLEX Prep Packages
- Confirm My Package

### 10.3 Pre-Filled WhatsApp Messages

#### General Message

```text
Hello NCLEX Prep Nation, I would like to know more about your NCLEX prep packages.
```

#### Starter Package

```text
Hello NCLEX Prep Nation, I am interested in the Starter Package. I would like to know how to book the study materials.
```

#### Premium Package

```text
Hello NCLEX Prep Nation, I am interested in the Premium Package. I would like to know how to request access.
```

#### Guided Support Package

```text
Hello NCLEX Prep Nation, I am interested in the Guided Support Package. I would like to know how the WhatsApp support, lessons, and accountability work.
```

#### Diagnostic Result Message

```text
Hello NCLEX Prep Nation, I completed the free diagnostic test and would like guidance on the best package for my weak areas.
```

#### Locked Content Message

```text
Hello NCLEX Prep Nation, I tried to access premium content and would like to request access to the full question bank and resources.
```

### 10.4 WhatsApp Link Format

Use WhatsApp link format:

```text
https://wa.me/PHONE_NUMBER?text=ENCODED_MESSAGE
```

The actual phone number should be configured in the website settings or environment file.

---

## 11. Email Flow

Email should support students who prefer formal communication.

### 11.1 Email Contact Sources

Email can be triggered from:

- Package request form
- Contact form
- Admin dashboard
- Student support form

### 11.2 Email Confirmation to Student

Subject:

```text
Your NCLEX Prep Nation Package Request Has Been Received
```

Body:

```text
Hello [Student Name],

Thank you for requesting the [Package Name] package from NCLEX Prep Nation.

Our team has received your request and will contact you through your preferred method with package details, payment instructions, and access confirmation.

Request Summary:
- Exam Type: [NCLEX-RN/NCLEX-PN]
- Package: [Package Name]
- Preferred Contact: [WhatsApp/Email/Both]

NCLEX Prep Nation provides original preparation materials and does not provide real or leaked NCLEX exam questions.

Regards,
NCLEX Prep Nation Team
```

### 11.3 Email Notification to Admin

Subject:

```text
New Package Request — [Package Name]
```

Body:

```text
A new package request has been submitted.

Student Details:
- Name: [Full Name]
- Email: [Email]
- WhatsApp: [WhatsApp Number]
- Country: [Country]
- Exam Type: [Exam Type]
- Package: [Package Name]
- Preferred Contact: [Preferred Contact]
- Exam Date: [Exam Date]
- Preparation Level: [Preparation Level]
- Message: [Message]

Please follow up from the admin dashboard.
```

---

## 12. Admin Package Request Management

Admin must have a dedicated page:

`/admin/package-requests`

### 12.1 Admin Table Columns

- Request ID
- Student name
- Email
- WhatsApp
- Country
- Exam type
- Package requested
- Preferred contact method
- Request source
- Date submitted
- Status
- Assigned admin, optional
- Actions

### 12.2 Request Detail View

The admin should be able to open a request and see:

- Full student details
- Selected package
- Exam type
- Exam date
- Weak areas
- Message
- Contact history
- Payment notes
- Access status
- Admin notes
- Timeline of status changes

### 12.3 Admin Actions

Admin should be able to:

- Mark as Contacted
- Mark as Waiting for Payment
- Mark as Payment Confirmed
- Grant Access
- Mark Materials Sent
- Mark Follow-up Needed
- Cancel Request
- Add Note
- Contact on WhatsApp
- Send Email
- View student profile
- Convert lead to student

---

## 13. Request Status System

The system should use clear statuses.

### 13.1 Status List

1. New Request
2. Contacted
3. Waiting for Payment
4. Payment Confirmed
5. Access Granted
6. Materials Sent
7. Follow-up Needed
8. Cancelled
9. Refunded

### 13.2 Status Meanings

#### New Request

The student has submitted a request but admin has not contacted them yet.

#### Contacted

Admin has contacted the student through WhatsApp or email.

#### Waiting for Payment

Payment instructions have been sent and admin is waiting for payment.

#### Payment Confirmed

Admin has verified payment manually.

#### Access Granted

Student account has been given access to the selected package.

#### Materials Sent

Digital resources have been sent or made available.

#### Follow-up Needed

Admin needs to contact student again.

#### Cancelled

The request was cancelled.

#### Refunded

Payment was returned according to policy.

---

## 14. Manual Payment Record

Even without a payment API, the system must record payment information.

### 14.1 Payment Record Fields

- Request ID
- Student ID
- Package ID
- Amount expected
- Amount paid
- Currency
- Payment method
- Payment reference, optional
- Payment date
- Confirmed by admin
- Confirmation date
- Admin note
- Receipt image/file, optional
- Status

### 14.2 Payment Method Options

- Bank transfer
- Mobile money
- Cash
- PayPal manual
- Western Union
- Other manual method

The specific options can be configured based on the business.

---

## 15. Access Granting System

After payment confirmation, admin must be able to grant access.

### 15.1 Access Granting Fields

- Student ID
- Package
- Start date
- End date, optional
- Access status
- Resources allowed
- Question bank access
- Mock exam access
- Guided support status
- Admin note

### 15.2 Access Status Options

- Free
- Starter Active
- Premium Active
- Guided Support Active
- Expired
- Revoked
- Pending Payment

### 15.3 Grant Access Process

1. Admin opens request.
2. Admin marks payment confirmed.
3. Admin selects package access.
4. Admin sets access start date.
5. Admin sets access end date, if applicable.
6. Admin saves.
7. Student receives access.
8. Student is notified.

---

## 16. Material Delivery Flow

For Starter or resource-based packages, materials may be delivered through:

- Student dashboard download
- Email attachment
- Secure download link
- WhatsApp file, if business chooses
- Resource library access

### 16.1 Recommended Delivery Method

The best method is:

> Grant dashboard access and allow the student to download materials from the platform.

This keeps the user returning to the website.

### 16.2 Material Sent Status

Admin should mark:

- Materials Sent
- Date sent
- Delivery method
- Admin note

---

## 17. Student Package Status Display

The student dashboard should display package status clearly.

### 17.1 Free User

Message:

> You are currently on the Free plan. Request access to unlock premium resources, full question bank, mock exams, and NGN case studies.

CTA:

> Request Premium Access

### 17.2 Pending Request

Message:

> Your package request has been received. Our team will contact you through your preferred method.

CTA:

> Contact Us on WhatsApp

### 17.3 Waiting for Payment

Message:

> Your request is waiting for payment confirmation. Access will be activated after confirmation.

CTA:

> Contact Support

### 17.4 Access Granted

Message:

> Your [Package Name] access is active. Continue your NCLEX preparation from your dashboard.

CTA:

> Continue Practice

### 17.5 Expired Access

Message:

> Your package access is no longer active. Contact support to renew or request another package.

CTA:

> Request Renewal

---

## 18. Package Upgrade Flow

Students should be able to upgrade.

### 18.1 Upgrade Paths

- Free to Starter
- Free to Premium
- Free to Guided Support
- Starter to Premium
- Starter to Guided Support
- Premium to Guided Support

### 18.2 Upgrade Flow

1. Student clicks upgrade CTA.
2. Package request form opens with current user details prefilled.
3. Student selects new package.
4. Request is submitted.
5. Admin contacts student.
6. Payment is confirmed manually.
7. Admin updates package access.

---

## 19. Refund and Cancellation Flow

Refunds should be handled according to policy.

### 19.1 Refund Request Flow

1. Student contacts support.
2. Admin reviews request.
3. Admin checks refund policy.
4. Admin approves or denies.
5. If approved, admin records refund.
6. Admin updates request status to Refunded.
7. Admin updates access if needed.

### 19.2 Cancellation Flow

A request may be cancelled when:

- Student is no longer interested
- Duplicate request
- Invalid contact details
- Student requested cancellation
- Payment was not completed after follow-up

---

## 20. Security and Abuse Prevention

The manual payment system should include basic protections.

### 20.1 Prevent Duplicate Requests

If the same user submits multiple requests for the same package, show:

> You already have a pending request for this package. Our team will contact you soon.

### 20.2 Validate Contact Information

Email and WhatsApp fields must be validated.

### 20.3 Admin Role Protection

Only admins should be able to:

- Confirm payments
- Grant access
- Change package status
- Mark materials sent
- Edit package requests

### 20.4 Activity Logging

The system should log:

- Who confirmed payment
- Who granted access
- When status changed
- Notes added
- Materials sent

---

## 21. Future Payment API Compatibility

The manual system must be designed so automatic payment can be added later.

### 21.1 Future Payment API Fields

Keep fields like:

- Payment provider
- Transaction ID
- Payment status
- Checkout session ID
- Payment callback status
- Currency
- Amount
- Payment date

Even if they are empty now, the database should be ready.

### 21.2 Future Checkout Flow

Later, the platform can support:

1. User selects package.
2. User pays online.
3. Payment API confirms transaction.
4. System grants access automatically.
5. Admin can still override manually.

The manual flow should remain available even after API integration.

---

## 22. Recommended Database Entities

The manual payment system should use these entities:

### 22.1 Package

Stores package information.

Fields:

- id
- name
- slug
- description
- price
- currency
- features
- access_level
- is_active
- created_at
- updated_at

### 22.2 PackageRequest

Stores user requests.

Fields:

- id
- user_id
- full_name
- email
- whatsapp
- country
- exam_type
- package_id
- preferred_contact_method
- preparation_level
- exam_date
- message
- source
- status
- admin_notes
- created_at
- updated_at

### 22.3 ManualPayment

Stores manual payment records.

Fields:

- id
- package_request_id
- user_id
- package_id
- expected_amount
- amount_paid
- currency
- payment_method
- payment_reference
- payment_date
- confirmed_by
- confirmed_at
- status
- notes
- created_at
- updated_at

### 22.4 AccessGrant

Stores access permissions.

Fields:

- id
- user_id
- package_id
- access_level
- start_date
- end_date
- status
- granted_by
- notes
- created_at
- updated_at

### 22.5 AdminNote

Stores admin notes on requests.

Fields:

- id
- admin_id
- related_type
- related_id
- note
- created_at
- updated_at

---

## 23. Recommended Admin Dashboard Widgets

The admin dashboard should show:

- New package requests
- Waiting for payment
- Payment confirmed today
- Access granted today
- Follow-up needed
- Most requested package
- Recent WhatsApp leads
- Recent diagnostic leads
- Recent messages

---

## 24. Manual Payment UI Copy

### 24.1 Packages Page Note

> Payments are confirmed manually for now. After you submit a request, our team will contact you by WhatsApp or email with package details, payment instructions, and access confirmation.

### 24.2 Request Form Note

> Please provide correct contact details so our team can reach you with the next steps.

### 24.3 Success Page Note

> Your request has been received. You can contact us directly through WhatsApp for faster support.

### 24.4 Dashboard Pending Note

> Your package request is pending. Our team will contact you soon. You may also message us on WhatsApp.

---

## 25. Admin Workflow Checklist

When a new request arrives, admin should:

1. Review student details.
2. Check selected package.
3. Contact student.
4. Update status to Contacted.
5. Send payment instructions.
6. Update status to Waiting for Payment.
7. Verify payment.
8. Record payment details.
9. Mark Payment Confirmed.
10. Grant access or send materials.
11. Mark Access Granted or Materials Sent.
12. Notify student.
13. Add final note.

---

## 26. Final Manual Payment Summary

NCLEX Prep Nation will use a manual payment and booking system at launch.

This system should feel like a personalized support process, not a missing checkout system.

The website must make it easy for students to:

- Choose a package
- Request access
- Contact WhatsApp
- Receive instructions
- Get access after confirmation

The admin dashboard must make it easy to:

- Track requests
- Contact students
- Confirm payments
- Grant access
- Send materials
- Follow up with leads

The system must also be ready for future online payment integration.
