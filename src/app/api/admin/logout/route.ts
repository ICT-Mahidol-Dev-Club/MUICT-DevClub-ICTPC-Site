import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "../login/route";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: ADMIN_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0, // delete immediately
  });
  return res;
}
