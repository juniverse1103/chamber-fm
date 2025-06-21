import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // --- DEVELOPMENT MOCK ---
  // The middleware is temporarily disabled to allow for UI development without a real
  // authentication flow. It prevents the app from redirecting unauthenticated users
  // from protected routes like the dashboard.
  // To restore real authentication, uncomment the logic below.
  return NextResponse.next();

  /*
  const { nextUrl } = req;

  // Use getToken to check for a valid session. This is Edge-compatible.
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const isLoggedIn = !!token;

  const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard");

  // 1. Redirect unauthenticated users from protected routes
  if (isProtectedRoute && !isLoggedIn) {
    const redirectUrl = new URL("/signin", nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  // 2. Redirect authenticated users from auth routes
  const isAuthRoute =
    nextUrl.pathname === "/signin" || nextUrl.pathname === "/verify-request";
  if (isAuthRoute && isLoggedIn) {
    const redirectUrl = new URL("/dashboard", nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  // 3. Allow all other requests to proceed
  return NextResponse.next();
  */
}

// The matcher ensures the middleware runs on all pages except for static assets and API routes.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};


