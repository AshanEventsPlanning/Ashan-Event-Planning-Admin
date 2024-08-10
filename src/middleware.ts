import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
export default authMiddleware({
  debug: false,

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
