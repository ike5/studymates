'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { UserCard } from '../app/userCard';

export default function Login() {
	// get session fron nextAuth
	const { data: session } = useSession();
	// if user exists => show a Sign Out button and thier information
	console.log(session);

	if (session) {
		return (
			<>
				<button
					onClick={() => signOut()}
					type='button'
					className='btn btn-primary'
				>
					Sign Out
				</button>
				{/* Pass session info to server component*/}

				<UserCard user={session?.user} />
			</>
		);
	} else {
		return (
			<>
				<button
					onClick={() => signIn()}
					type='button'
					className='btn btn-primary'
				>
					Sign In
				</button>
			</>
		);
	}
	// if user does not exist => show a Sign In button
}
