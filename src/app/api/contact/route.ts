import { NextResponse } from "next/server";
import { contactSchema, flattenZodErrors } from "@/lib/schemas";
import { saveLead } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: flattenZodErrors(parsed.error) },
        { status: 400 },
      );
    }

    const lead = await saveLead("contact", parsed.data);
    return NextResponse.json({ ok: true, id: lead.id });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to save your request right now." },
      { status: 500 },
    );
  }
}
