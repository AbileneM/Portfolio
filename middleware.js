import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  const publicPaths = ["/login", "/inscription"];
  const isPublic =
    publicPaths.includes(pathname) || pathname.startsWith("/api/auth");

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/", "/projets/:path*", "/temoignages/:path*"],
};