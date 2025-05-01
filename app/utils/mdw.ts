
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the "token" cookie from the request
  const token = request.cookies.get("token");

  // If the token does not exist, redirect the user to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to continue if the user is authenticated
  return NextResponse.next();
}

// Apply the middleware to specific routes (e.g., protected pages)
export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*"], // Protect dashboard and account routes
};

