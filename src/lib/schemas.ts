import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  church: z.string().trim().max(160).optional().or(z.literal("")),
  role: z.string().trim().min(1),
  size: z.string().trim().min(1),
  message: z
    .string()
    .trim()
    .min(12, "Please share a little more about how we can help."),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export function flattenZodErrors(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!fieldErrors[key]) fieldErrors[key] = issue.message;
  }
  return fieldErrors;
}
