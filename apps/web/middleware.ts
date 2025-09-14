import { clerkMiddleware ,createRouteMatcher} from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)", // Sign in page
  "/sign-up(.*)", // Sign up page
]);
export default clerkMiddleware(async (auth, req) => {
  // If the user is not authenticated and is not on a public route, redirect to sign-in page
  const {userId} = await auth();

  if(!isPublicRoute(req)){
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
