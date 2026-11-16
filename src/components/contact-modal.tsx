"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactInput } from "@/lib/validations/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        setServerError(data.error || "Gagal mengirim pesan.");
        return;
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setServerError("Koneksi terputus. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleResetAndClose() {
    setIsSuccess(false);
    setFieldErrors({});
    setServerError(null);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-xs transition-opacity"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg rounded-md border border-hairline bg-elevated p-6 shadow-sm md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-start justify-between border-b border-hairline pb-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
              Direct Inquiry
            </span>
            <h2 className="mt-1 font-serif text-2xl text-ink">
              Start a Conversation
            </h2>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="rounded-sm p-1.5 text-ink-muted transition-colors hover:bg-surface hover:text-ink cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body Modal */}
        {isSuccess ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-live" />
            <h3 className="mt-4 font-serif text-2xl text-ink">
              Message Received
            </h3>
            <p className="mt-2 text-sm text-ink-secondary">
              Terima kasih sudah menghubungi. Pesan lo sudah masuk dan akan
              segera gw balas lewat email.
            </p>
            <Button
              variant="primary"
              className="mt-6"
              onClick={handleResetAndClose}
            >
              Back to Portfolio
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Honeypot tersembunyi untuk anti-spam */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              className="hidden"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-ink-secondary">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-11 w-full rounded-sm border border-hairline bg-canvas px-3 text-sm text-ink transition-colors focus:border-strong focus:outline-none"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-xs text-accent">
                    {fieldErrors.name[0]}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs text-ink-secondary">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-11 w-full rounded-sm border border-hairline bg-canvas px-3 text-sm text-ink transition-colors focus:border-strong focus:outline-none"
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-xs text-accent">
                    {fieldErrors.email[0]}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs text-ink-secondary">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Engineering Role / Project Collaboration"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="h-11 w-full rounded-sm border border-hairline bg-canvas px-3 text-sm text-ink transition-colors focus:border-strong focus:outline-none"
              />
              {fieldErrors.subject && (
                <p className="mt-1 text-xs text-accent">
                  {fieldErrors.subject[0]}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs text-ink-secondary">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Ceritakan sedikit tentang tim, proyek, atau kebutuhan teknis lo..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-sm border border-hairline bg-canvas p-3 text-sm text-ink transition-colors focus:border-strong focus:outline-none"
              />
              {fieldErrors.message && (
                <p className="mt-1 text-xs text-accent">
                  {fieldErrors.message[0]}
                </p>
              )}
            </div>

            {serverError && (
              <p className="rounded-sm bg-accent-subtle px-3 py-2 text-xs text-accent">
                {serverError}
              </p>
            )}

            <div className="flex items-center justify-end gap-3 border-t border-hairline pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={handleResetAndClose}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}