"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Upload, CheckCircle, AlertCircle } from "lucide-react";

// IMPORTANT: Replace with your admin email configured in Talent Pro
const ADMIN_EMAIL = "adilmunawar@nexus.com";
const API_ENDPOINT = "https://olkbhjyfpdvcovtuekzt.supabase.co/functions/v1/receive-external-resume";

interface FormState {
  candidate_name: string;
  candidate_email: string;
  candidate_phone: string;
  interested_job: string;
  resume: File | null;
}

// Job positions available - customize as needed
const JOB_POSITIONS = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Product Manager",
  "UI/UX Designer",
  "QA Engineer",
  "Other",
];

export function ResumeSubmitForm() {
  const [formData, setFormData] = useState<FormState>({
    candidate_name: "",
    candidate_email: "",
    candidate_phone: "",
    interested_job: "",
    resume: null,
  });
  const [customJob, setCustomJob] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot detection

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Please upload a PDF or Word document.");
        return;
      }
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("File size must be less than 10MB.");
        return;
      }
      setFormData({ ...formData, resume: file });
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot detection - if honeypot is filled, silently "succeed"
    if (honeypot) {
      setSubmitStatus("success");
      return;
    }

    const job = formData.interested_job === 'Other' ? customJob : formData.interested_job;

    // Validation
    if (!formData.candidate_name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!job) {
      setErrorMessage("Please select or specify a job position.");
      return;
    }
    if (!formData.resume) {
      setErrorMessage("Please upload your resume.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const submitData = new FormData();
      submitData.append("candidate_name", formData.candidate_name.trim());
      submitData.append("candidate_email", formData.candidate_email.trim());
      submitData.append("candidate_phone", formData.candidate_phone.trim());
      submitData.append("interested_job", job);
      submitData.append("admin_email", ADMIN_EMAIL);
      submitData.append("resume", formData.resume);
      submitData.append("honeypot", honeypot);

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        candidate_name: "",
        candidate_email: "",
        candidate_phone: "",
        interested_job: "",
        resume: null,
      });
      setCustomJob("");
    } catch (error: any) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(error.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12 space-y-4">
        <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
        <h3 className="text-2xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          Your resume has been submitted successfully. We&apos;ll review it and get back to you soon.
        </p>
        <Button onClick={() => setSubmitStatus("idle")} variant="outline">
          Submit Another
        </Button>
      </div>
    );
  }
  
    if (submitStatus === "error") {
    return (
      <div className="text-center py-12 space-y-4">
        <AlertCircle className="h-16 w-16 mx-auto text-red-500" />
        <h3 className="text-2xl font-bold">Submission Failed</h3>
        <p className="text-muted-foreground">
          {errorMessage || "An unexpected error occurred. Please try again later."}
        </p>
        <Button onClick={() => setSubmitStatus("idle")} variant="outline">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="John Doe"
          value={formData.candidate_name}
          onChange={(e) => setFormData({ ...formData, candidate_name: e.target.value })}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.candidate_email}
            onChange={(e) => setFormData({ ...formData, candidate_email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.candidate_phone}
            onChange={(e) => setFormData({ ...formData, candidate_phone: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="job">Position Interested In *</Label>
        <Select
          value={formData.interested_job}
          onValueChange={(value) => setFormData({ ...formData, interested_job: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a position" />
          </SelectTrigger>
          <SelectContent>
            {JOB_POSITIONS.map((job) => (
              <SelectItem key={job} value={job}>
                {job}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {formData.interested_job === 'Other' && (
        <div className="space-y-2">
          <Label htmlFor="custom-job">Please Specify *</Label>
          <Input
            id="custom-job"
            placeholder="e.g., Blockchain Developer"
            value={customJob}
            onChange={(e) => setCustomJob(e.target.value)}
            required
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="resume">Upload Resume * (PDF or DOCX, max 10MB)</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="resume" className="cursor-pointer">
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            {formData.resume ? (
              <p className="text-sm font-medium">{formData.resume.name}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Click to upload or drag and drop
              </p>
            )}
          </label>
        </div>
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="h-4 w-4" />
          {errorMessage}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}
