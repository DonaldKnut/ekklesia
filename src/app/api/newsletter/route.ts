import { NextResponse } from "next/server";
import { flattenZodErrors, newsletterSchema } from "@/lib/schemas";
import { saveLead } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: flattenZodErrors(parsed.error) },
        { status: 400 },
      );
    }

    const lead = await saveLead("newsletter", parsed.data);
    return NextResponse.json({ ok: true, id: lead.id });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to subscribe right now." },
      { status: 500 },
    );
  }
}
