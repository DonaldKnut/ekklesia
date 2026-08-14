import type { ContactInput, NewsletterInput } from "@/lib/schemas";

export type LeadKind = "contact" | "newsletter";

export type StoredLead = {
  id: string;
  kind: LeadKind;
  createdAt: string;
  payload: ContactInput | NewsletterInput;
};

const memoryStore: StoredLead[] = [];

function newId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Persistence stub. When DATABASE_URL is set, swap this for a real insert.
 * On Vercel the in-memory list resets between invocations — that is expected for now.
 */
export async function saveLead(kind: LeadKind, payload: ContactInput | NewsletterInput) {
  const lead: StoredLead = {
    id: newId(),
    kind,
    createdAt: new Date().toISOString(),
    payload,
  };

  const databaseUrl = process.env.DATABASE_URL;
  if (databaseUrl) {
    // Plug-in point: insert into Postgres / Neon / etc.
    console.info("[leads] DATABASE_URL present — persist here", lead.id);
  }

  memoryStore.push(lead);
  console.info(`[leads] ${kind} saved`, {
    id: lead.id,
    email: "email" in payload ? payload.email : undefined,
  });

  return lead;
}

export function listLeads() {
  return memoryStore.slice();
}
