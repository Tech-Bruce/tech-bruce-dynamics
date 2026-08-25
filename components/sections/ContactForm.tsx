"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SERVICES, TRAINING_COURSES } from "@/data/content";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [enquiryType, setEnquiryType] = useState<"services" | "training">("services");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      // For a real production app, this would be an API call to a service like Resend or SendGrid
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-card border border-border p-8 rounded-xl text-center space-y-4 shadow-sm h-full flex flex-col justify-center items-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
        <h3 className="text-2xl font-bold">Thank You</h3>
        <p className="text-muted-foreground">
          Your enquiry has been submitted successfully. Our team will review your request and get back to you shortly.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-6">
      <div>
        <h3 className="text-2xl font-bold tracking-tight mb-4">Submit Enquiry</h3>
        
        {/* Enquiry Type Selector */}
        <div className="flex p-1 bg-muted rounded-md mb-6">
          <button
            type="button"
            onClick={() => setEnquiryType("services")}
            className={`flex-1 text-sm font-semibold py-2 rounded-sm transition-all ${
              enquiryType === "services" 
                ? "bg-background text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Engineering Services
          </button>
          <button
            type="button"
            onClick={() => setEnquiryType("training")}
            className={`flex-1 text-sm font-semibold py-2 rounded-sm transition-all ${
              enquiryType === "training" 
                ? "bg-background text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Training & Placement
          </button>
        </div>
      </div>
      
      {status === "error" && (
        <div className="bg-destructive/10 text-destructive border border-destructive/20 p-4 rounded-md flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <p className="text-sm">There was an error submitting your form. Please try again later or contact us directly via email.</p>
        </div>
      )}

      {/* Common Fields: Name, Email, Phone */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none">
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          {enquiryType === "services" ? (
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium leading-none">
                Company Name <span className="text-destructive">*</span>
              </label>
              <input
                id="company"
                name="company"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Manufacturing Co."
              />
            </div>
          ) : (
            <div className="space-y-2">
              <label htmlFor="qualification" className="text-sm font-medium leading-none">
                Qualification <span className="text-destructive">*</span>
              </label>
              <input
                id="qualification"
                name="qualification"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="e.g. B.E / B.Tech / Diploma"
              />
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Specific Fields */}
      {enquiryType === "training" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="specialization" className="text-sm font-medium leading-none">
              Specialization <span className="text-destructive">*</span>
            </label>
            <input
              id="specialization"
              name="specialization"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="e.g. Mechanical Engineering"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="graduationYear" className="text-sm font-medium leading-none">
              Graduation Year <span className="text-destructive">*</span>
            </label>
            <input
              id="graduationYear"
              name="graduationYear"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="e.g. 2024"
            />
          </div>
        </div>
      )}

      {enquiryType === "services" ? (
        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm font-medium leading-none">
            Project Type <span className="text-destructive">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="" disabled>Select a project type</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
            <option value="manufacturing-feasibility">Manufacturing Feasibility</option>
            <option value="other">Other</option>
          </select>
        </div>
      ) : (
        <div className="space-y-2">
          <label htmlFor="course" className="text-sm font-medium leading-none">
            Course Interested In <span className="text-destructive">*</span>
          </label>
          <select
            id="course"
            name="course"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="" disabled>Select a course</option>
            {TRAINING_COURSES.map((course) => (
              <option key={course.id} value={course.id}>{course.title.split("–")[0].trim()}</option>
            ))}
            <option value="multiple">Multiple Courses</option>
            <option value="career-guidance">Career Guidance</option>
          </select>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
          placeholder={enquiryType === "services" ? "Please describe your engineering requirements..." : "Please describe your career goals or any specific requirements..."}
        />
      </div>

      <Button type="submit" className="w-full h-12 text-base" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </Button>
    </form>
  );
}
