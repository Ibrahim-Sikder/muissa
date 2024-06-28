import { jwtDecode } from "jwt-decode";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AuthRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  user: [/^\/profile(\/.*)?$/, /^\/membership(\/.*)?$/],
  admin: [
    /^\/profile(\/.*)?$/,
    /^\/dashboard(\/.*)?$/,
    /^\/membership(\/.*)?$/,
  ],
};

type Role = keyof typeof roleBasedPrivateRoutes;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("mui-token")?.value ?? null;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedData = null;
  try {
    decodedData = jwtDecode(accessToken) as any;
  } catch (error) {
    console.error("Error decoding token:", error);
 window.location.href = "/membership"
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role as Role;
  if (role && roleBasedPrivateRoutes[role]) {
    const routes = roleBasedPrivateRoutes[role];
    if (routes.some((route) => route.test(pathname))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile/:path*",
    "/dashboard/:path*",
    "/membership/:path*",
  ],
};
