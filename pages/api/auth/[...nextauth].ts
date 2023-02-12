import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

// Initialize NextAuth
export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
			clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.NEXT_AUTH_SECRET,
});
