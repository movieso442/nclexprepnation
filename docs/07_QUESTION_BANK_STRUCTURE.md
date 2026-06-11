# 07_QUESTION_BANK_STRUCTURE.md

# NCLEX Prep Nation — Question Bank Structure Specification

## 1. Document Purpose

This document defines how the NCLEX Prep Nation question bank should be structured, stored, displayed, filtered, reviewed, and managed.

The question bank is one of the most important features of the platform. It must be built professionally because students will judge the quality of the platform mainly by the quality of the questions, rationales, and practice experience.

This document should guide:

- Backend developers
- Frontend developers
- Admin dashboard developers
- Content writers
- Nursing educators/reviewers
- AI coding assistants
- Future question import/export systems

The platform must not simply store questions as plain text. Each question must be structured with metadata, rationales, difficulty, topic, exam type, question type, and access level.

---

## 2. Core Question Bank Objective

The objective of the question bank is to help nursing candidates prepare through structured practice.

The question bank should help students:

1. Practice NCLEX-style questions.
2. Build clinical judgment.
3. Understand why answers are correct.
4. Understand why wrong options are wrong.
5. Track weak topics.
6. Practice by topic, difficulty, exam type, and question type.
7. Save difficult questions.
8. Review incorrect answers.
9. Take mock exams.
10. Improve readiness over time.

The question bank should also help admin:

1. Create and manage questions.
2. Assign questions to topics.
3. Mark questions as free or premium.
4. Add rationales.
5. Track question performance.
6. Identify difficult questions.
7. Review reported questions.
8. Maintain content quality.

---

## 3. Ethical Content Rule

NCLEX Prep Nation must only use original educational questions.

The platform must not use:

- Real NCLEX exam questions
- Leaked exam questions
- Exam dumps
- Copied copyrighted questions from other platforms
- Official NCLEX/NCSBN content copied without permission

Required content integrity statement:

> All questions in NCLEX Prep Nation are original educational practice questions created for exam preparation. The platform does not provide, sell, request, or claim to have access to real NCLEX exam questions.

---

## 4. Question Access Levels

Questions should have access levels.

### 4.1 Free Questions

Free questions are available to guest or free users.

Purpose:

- Build trust
- Allow students to test the platform
- Encourage signup
- Lead to package request

### 4.2 Starter Questions

Starter questions are limited paid questions for Starter package users.

Purpose:

- Give basic practice
- Support PDF/resource users
- Encourage upgrade to Premium

### 4.3 Premium Questions

Premium questions are available to Premium and Guided Support students.

Purpose:

- Full practice experience
- Topic-based practice
- Mock exams
- NGN-style practice
- Advanced rationales

### 4.4 Guided Support Questions

Guided Support users may access all Premium questions plus selected guided review sets.

Purpose:

- Tutor-led review
- Accountability
- Weak-topic correction
- Assigned practice

---

## 5. Exam Types

Each question must be assigned to one or more exam types.

### 5.1 Supported Exam Types

- NCLEX-RN
- NCLEX-PN
- Both RN and PN

### 5.2 Exam Type Field

Recommended values:

- `RN`
- `PN`
- `BOTH`

### 5.3 Use Case

A pharmacology safety question may apply to both RN and PN. A management-of-care question may be RN-focused. Some PN scope questions may be PN-focused.

---

## 6. Question Types

The question bank should support multiple question types.

### 6.1 Multiple Choice

Traditional question with one correct answer.

Fields needed:

- Question body
- Options
- One correct option
- Rationale

### 6.2 Select All That Apply

SATA questions have multiple correct answers.

Fields needed:

- Question body
- Options
- Multiple correct options
- Rationale
- Explanation for each option

### 6.3 Prioritization

Questions asking what the nurse should do first, best, priority, immediate action, or most important.

Fields needed:

- Scenario
- Options
- Correct priority action
- Rationale based on safety, ABCs, Maslow, nursing process, risk level, or clinical judgment

### 6.4 Matrix/Grid

Used for NGN-style classification.

Example:

- Indicate whether each finding is expected, unexpected, or requires follow-up.
- Match interventions to condition.
- Classify symptoms.

Fields needed:

- Rows
- Columns
- Correct selections
- Rationale

### 6.5 Bow-Tie

NGN-style bow-tie questions may require selecting:

- Condition
- Actions to take
- Parameters to monitor

Fields needed:

- Scenario
- Left-side options
- Center diagnosis/condition options
- Right-side monitoring options
- Correct selections
- Rationale

### 6.6 Case Study

A case study includes patient information and multiple questions.

Fields needed:

- Case scenario
- Nurse notes
- Vital signs
- Lab values
- Medication list
- Provider orders
- Progress notes
- Question set
- Rationales

### 6.7 Fill-in-the-Blank

Used for dosage calculations or numeric answers.

Fields needed:

- Question body
- Expected answer
- Accepted range, if applicable
- Unit
- Calculation rationale

### 6.8 Drag-and-Drop Style Simulation

If implemented digitally, this may be simulated with ordered lists or matching.

Fields needed:

- Items to order or match
- Correct order/match
- Rationale

### 6.9 Hotspot/Highlight Style Simulation

If true hotspot is not implemented, simulate with selectable phrases or sections.

Fields needed:

- Text passage
- Selectable highlights
- Correct highlights
- Rationale

---

## 7. Topic Categories

Each question must belong to a major topic.

Recommended major categories:

1. Fundamentals of Nursing
2. Medical-Surgical Nursing
3. Pharmacology
4. Maternity and Newborn
5. Pediatrics
6. Mental Health
7. Safety and Infection Control
8. Prioritization and Delegation
9. Leadership and Management
10. Lab Values
11. Nutrition
12. Emergency and Critical Care
13. Community Health
14. Ethics and Legal Nursing
15. NGN Case Studies
16. Clinical Judgment

---

## 8. Subtopic Categories

Each topic may have subtopics.

### 8.1 Fundamentals

Possible subtopics:

- Vital signs
- Nursing process
- Patient safety
- Documentation
- Hygiene
- Mobility
- Pain management
- Elimination
- Fluids and electrolytes
- Oxygenation

### 8.2 Medical-Surgical

Possible subtopics:

- Cardiovascular
- Respiratory
- Neurological
- Gastrointestinal
- Renal/urinary
- Endocrine
- Musculoskeletal
- Immune system
- Hematology
- Oncology
- Burns
- Perioperative nursing

### 8.3 Pharmacology

Possible subtopics:

- Cardiovascular drugs
- Antibiotics
- Insulin and diabetes medications
- Anticoagulants
- Analgesics
- Psychiatric medications
- Respiratory medications
- Diuretics
- High-alert medications
- Medication safety
- Side effects
- Contraindications

### 8.4 Maternity

Possible subtopics:

- Prenatal care
- Labor and delivery
- Postpartum
- Newborn care
- Pregnancy complications
- Fetal monitoring
- Maternal emergencies

### 8.5 Pediatrics

Possible subtopics:

- Growth and development
- Pediatric safety
- Immunizations
- Respiratory conditions
- Gastrointestinal conditions
- Congenital disorders
- Pediatric medications

### 8.6 Mental Health

Possible subtopics:

- Therapeutic communication
- Depression
- Anxiety
- Bipolar disorder
- Schizophrenia
- Substance abuse
- Suicide risk
- Crisis intervention

### 8.7 Safety and Infection Control

Possible subtopics:

- Standard precautions
- Transmission-based precautions
- Isolation
- PPE
- Fall prevention
- Restraints
- Fire safety
- Disaster response

### 8.8 Prioritization and Delegation

Possible subtopics:

- ABCs
- Maslow
- Nursing process
- Stable vs unstable clients
- Delegation to UAP
- LPN/LVN scope
- RN responsibility
- Emergency prioritization

---

## 9. Difficulty Levels

Each question must have a difficulty level.

Recommended values:

- Easy
- Medium
- Hard
- Advanced

### 9.1 Easy

Tests basic recall or simple application.

### 9.2 Medium

Requires application and basic prioritization.

### 9.3 Hard

Requires analysis, safety judgment, or multi-step reasoning.

### 9.4 Advanced

Requires clinical judgment, case analysis, NGN reasoning, or multiple data interpretation.

---

## 10. Clinical Judgment Skills

Questions should optionally be tagged with clinical judgment skills.

Recommended skills:

1. Recognize cues
2. Analyze cues
3. Prioritize hypotheses
4. Generate solutions
5. Take action
6. Evaluate outcomes

These tags are especially useful for NGN-style questions.

---

## 11. Question Metadata

Each question should store metadata.

### 11.1 Required Metadata

- Question ID
- Title
- Question body
- Exam type
- Topic
- Subtopic
- Question type
- Difficulty
- Access level
- Correct answer
- Rationale
- Active status
- Created date
- Updated date

### 11.2 Optional Metadata

- Clinical judgment skill
- Tags
- Estimated time
- Reference note
- Created by
- Reviewed by
- Review status
- Version number
- Image attachment
- Case study ID
- Explanation for each option
- Common mistake note
- Nursing tip
- Related resource ID

---

## 12. Question Status Workflow

Questions should have a content workflow.

### 12.1 Draft

Question is being created.

### 12.2 In Review

Question is ready for review by admin or nursing reviewer.

### 12.3 Approved

Question is approved for use.

### 12.4 Published

Question is visible to students.

### 12.5 Archived

Question is no longer active but stored for record.

### 12.6 Flagged

Question has been reported or needs correction.

---

## 13. Question Data Model Example

Recommended structure:

```json
{
  "id": "q_001",
  "title": "Priority action for shortness of breath",
  "body": "A client reports sudden shortness of breath after surgery. Which action should the nurse take first?",
  "exam_type": "RN",
  "topic": "Medical-Surgical Nursing",
  "subtopic": "Respiratory",
  "question_type": "multiple_choice",
  "difficulty": "medium",
  "access_level": "free",
  "clinical_judgment_skill": "Take action",
  "options": [
    {
      "id": "A",
      "text": "Document the finding in the chart",
      "is_correct": false,
      "explanation": "Documentation is important, but immediate assessment and intervention are the priority."
    },
    {
      "id": "B",
      "text": "Assess airway, breathing, and oxygen saturation",
      "is_correct": true,
      "explanation": "Airway and breathing are priority concerns when a client has sudden shortness of breath."
    },
    {
      "id": "C",
      "text": "Offer the client oral fluids",
      "is_correct": false,
      "explanation": "Oral fluids do not address the urgent respiratory concern."
    },
    {
      "id": "D",
      "text": "Ask the family to leave the room",
      "is_correct": false,
      "explanation": "This may be done later if needed, but it is not the priority action."
    }
  ],
  "rationale": "The nurse should first assess airway, breathing, and oxygen saturation because sudden shortness of breath may indicate a serious respiratory or circulatory complication.",
  "tags": ["priority", "respiratory", "postoperative"],
  "estimated_time_seconds": 75,
  "status": "published"
}
```

---

## 14. Option Structure

Each option should include:

- Option ID
- Option text
- Correct/incorrect status
- Explanation
- Display order

For SATA questions, multiple options can be correct.

For matrix questions, options may be stored differently using rows and columns.

---

## 15. Rationale Requirements

Every question must have a detailed rationale.

A good rationale should explain:

1. Why the correct answer is correct.
2. Why the wrong options are wrong.
3. The nursing principle behind the answer.
4. The safety or clinical judgment priority.
5. Any relevant memory tip or learning note.

### 15.1 Rationale Quality Standard

Rationales should not be one sentence only.

Bad rationale:

> B is correct because it is the right answer.

Good rationale:

> B is correct because sudden shortness of breath requires immediate assessment of airway and breathing. The nurse should assess oxygen saturation and respiratory status before documenting or performing non-priority actions. This follows the ABC priority framework.

---

## 16. Wrong Option Explanation

Each wrong option should have an explanation.

This helps students understand their mistakes.

Example:

- Option A is incorrect because documentation is done after the immediate client need is assessed.
- Option C is incorrect because oral fluids do not address respiratory distress.
- Option D is incorrect because family presence is not the immediate safety priority.

---

## 17. Question Tags

Tags allow better filtering and recommendations.

Examples:

- priority
- delegation
- infection-control
- pharmacology
- safety
- pediatric
- maternity
- respiratory
- cardiovascular
- endocrine
- insulin
- anticoagulants
- NGN
- SATA
- mock-exam
- free
- premium

---

## 18. Free vs Premium Logic

### 18.1 Free Question Rules

Free questions should:

- Be useful and high-quality
- Show detailed rationales
- Demonstrate platform value
- Be limited in quantity
- Encourage upgrade after a reasonable preview

### 18.2 Premium Question Rules

Premium questions should include:

- More depth
- More topics
- Full rationales
- NGN-style questions
- Mock exam integration
- Progress tracking
- Saved question review

---

## 19. Question Filtering Requirements

Students should be able to filter questions by:

- Exam type
- Topic
- Subtopic
- Difficulty
- Question type
- Access level
- Saved questions
- Incorrect questions
- Unanswered questions
- NGN questions
- Free questions
- Premium questions

Admin should be able to filter questions by:

- Status
- Topic
- Subtopic
- Question type
- Difficulty
- Access level
- Created by
- Reviewed by
- Reported status
- Active/inactive

---

## 20. Practice Session Structure

A practice session should store:

- Student ID
- Session ID
- Practice mode
- Question list
- Started time
- Completed time
- Score
- Correct count
- Incorrect count
- Topic performance
- Status

Practice session modes:

- Free practice
- Topic practice
- Random practice
- Saved question review
- Incorrect question review
- Mock exam
- Diagnostic test
- NGN case study

---

## 21. Student Answer Structure

Each student answer should store:

- Student ID
- Question ID
- Selected answer
- Correct/incorrect
- Time spent
- Attempt date
- Practice session ID
- Rationale viewed
- Saved status
- Confidence level, optional

This allows progress tracking.

---

## 22. Confidence Rating Feature

After answering, optionally ask:

> How confident were you?

Options:

- Not confident
- Somewhat confident
- Confident

This can help identify guessed correct answers.

---

## 23. Saved Questions

Students should be able to save questions.

Saved question features:

- Save question
- Remove from saved
- Filter saved by topic
- Review saved questions
- Mark as mastered

Saved questions help retention.

---

## 24. Incorrect Questions Review

The system should allow students to review incorrect answers.

Features:

- View all incorrect questions
- Filter incorrect questions by topic
- Retake incorrect questions
- View previous wrong answer
- View rationale again
- Mark as improved

---

## 25. Question Reporting

Students should be able to report a question.

Report reasons:

- Typo
- Incorrect answer
- Confusing rationale
- Technical issue
- Duplicate question
- Other

Admin should see reported questions in dashboard.

Reported question fields:

- Question ID
- Student ID
- Reason
- Message
- Status
- Admin response
- Created date

---

## 26. NGN Case Study Structure

An NGN case study should include:

- Case study ID
- Case title
- Patient scenario
- Patient age
- Patient gender, if relevant
- Diagnosis or presenting concern
- Nurse notes
- Vital signs
- Lab results
- Medication list
- Orders
- Progress notes
- Related questions
- Rationales
- Topic
- Difficulty
- Access level
- Status

### 26.1 NGN Case Example Structure

```json
{
  "case_id": "case_001",
  "title": "Client with worsening shortness of breath",
  "topic": "Respiratory",
  "difficulty": "advanced",
  "access_level": "premium",
  "scenario": "A client is admitted with worsening shortness of breath and productive cough.",
  "nurse_notes": "...",
  "vital_signs": [
    {"time": "0800", "temperature": "38.4 C", "pulse": "112", "respirations": "28", "spo2": "88%"}
  ],
  "labs": [
    {"name": "WBC", "value": "15,000/mm3", "flag": "high"}
  ],
  "questions": ["q_1001", "q_1002", "q_1003"]
}
```

---

## 27. Mock Exam Question Selection

Mock exams should pull questions based on:

- Exam type
- Topic distribution
- Difficulty distribution
- Question type distribution
- Student access level
- Randomization
- Avoiding repeated questions, if possible

Mock exams should include:

- Mixed topics
- Prioritization questions
- Safety questions
- Pharmacology questions
- NGN-style questions for premium exams

---

## 28. Scoring Requirements

### 28.1 Basic Scoring

For multiple choice:

- Correct = 1
- Incorrect = 0

For SATA:

- Possible scoring options:
  - All-or-nothing
  - Partial credit
  - Future NGN-style partial scoring

For platform simplicity, use all-or-nothing first unless partial scoring is intentionally implemented.

### 28.2 Diagnostic Scoring

Diagnostic scoring should calculate:

- Overall score
- Topic score
- Weakest topics
- Strongest topics
- Recommended package

### 28.3 Mock Exam Scoring

Mock exam scoring should calculate:

- Total correct
- Total incorrect
- Percentage
- Time spent
- Topic performance
- Weak topics
- Readiness level

---

## 29. Readiness Labels

Use readiness labels to guide students.

Possible labels:

- Foundation Needed
- Developing
- Improving
- Exam-Focused
- Strong Review Stage

### 29.1 Score-Based Example

- 0–39%: Foundation Needed
- 40–59%: Developing
- 60–74%: Improving
- 75–84%: Exam-Focused
- 85%+: Strong Review Stage

This should be adjustable by admin later.

---

## 30. Admin Question Management Requirements

Admin should be able to:

1. Add new question.
2. Edit existing question.
3. Delete/archive question.
4. Add options.
5. Mark correct answer.
6. Add rationale.
7. Add wrong-option explanations.
8. Select exam type.
9. Select topic and subtopic.
10. Select difficulty.
11. Select question type.
12. Select access level.
13. Attach question to NGN case study.
14. Mark as free or premium.
15. Publish or unpublish.
16. View reports.
17. Review analytics.

---

## 31. Question Import Feature

Future feature:

Admin may import questions from CSV or JSON.

CSV fields may include:

- title
- body
- option_a
- option_b
- option_c
- option_d
- correct_answer
- rationale
- topic
- subtopic
- difficulty
- exam_type
- question_type
- access_level

This is optional for version 1 but should be considered.

---

## 32. Question Analytics

The system should track:

- How many times question was answered
- Correct percentage
- Incorrect percentage
- Average time spent
- Number of times saved
- Number of reports
- Most selected wrong option
- Performance by topic

This helps improve content quality.

---

## 33. Quality Review Checklist for Questions

Before publishing a question, check:

- Is the question original?
- Is the wording clear?
- Is there only one best answer unless SATA?
- Are all options realistic?
- Is the correct answer accurate?
- Is the rationale detailed?
- Are wrong options explained?
- Is the topic correct?
- Is the difficulty correct?
- Is the access level correct?
- Is grammar correct?
- Is the question ethical and not copied?

---

## 34. Student Question Interface Requirements

The student interface should include:

- Clean question card
- Topic badge
- Difficulty badge
- Question type badge
- Progress indicator
- Answer options
- Submit button
- Rationale after submission
- Save question button
- Report issue button
- Next question button
- Request access button if locked

The interface must work well on mobile.

---

## 35. Locked Question Experience

When users reach locked content, show a professional message.

Message:

> This question is part of the Premium question bank. Request access to unlock full practice questions, NGN case studies, detailed rationales, mock exams, and progress tracking.

Buttons:

- Request Premium Access
- Contact Us on WhatsApp

---

## 36. Final Question Bank Summary

The NCLEX Prep Nation question bank must be structured, searchable, trackable, and educational.

It should support:

- Multiple question types
- Detailed rationales
- Topic tagging
- Difficulty levels
- Exam type classification
- NGN case studies
- Free and premium access
- Student progress tracking
- Admin management
- Question reporting
- Future analytics

The question bank must be built with quality and trust as top priorities.
