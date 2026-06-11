"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="rounded-md border border-success/25 bg-green-50 p-6"
        role="status"
      >
        <CheckCircle2 aria-hidden className="text-success" size={28} />
        <h3 className="mt-4 text-xl font-bold text-navy">
          Your message has been prepared.
        </h3>
        <p className="mt-2 text-sm leading-7 text-muted">
          Online delivery will be connected in a later phase. For immediate
          help, email support@nclexprepnation.com.
        </p>
        <Button
          className="mt-5"
          onClick={() => setSubmitted(false)}
          variant="outline"
        >
          Write Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className="form-label">Full name</span>
          <Input name="name" placeholder="Your full name" required />
        </label>
        <label>
          <span className="form-label">Email</span>
          <Input
            name="email"
            placeholder="Your email address"
            required
            type="email"
          />
        </label>
      </div>
      <label>
        <span className="form-label">Subject</span>
        <Input name="subject" placeholder="How can we help?" required />
      </label>
      <label>
        <span className="form-label">Message</span>
        <Textarea
          name="message"
          placeholder="Tell us about your question or preparation needs."
          required
        />
      </label>
      <Button className="w-full sm:w-fit" type="submit">
        Send Message
      </Button>
    </form>
  );
}
