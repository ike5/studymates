'use client';
import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Dashboard from '../dashboard/page';

function Login() {
	const { data: session } = useSession();

	if (session) {
		return <Dashboard  user={session?.user}/>;
	} else {
		return (
			<>
				<div className='hero min-h-screen bg-base-200'>
					<div className='hero-content text-center'>
						<div className='max-w-md'>
							<h1 className='text-5xl font-bold'>Login Page</h1>
							<p className='py-6'>
								Provident cupiditate voluptatem et in. Quaerat
								fugiat ut assumenda excepturi exercitationem
								quasi. In deleniti eaque aut repudiandae et a id
								nisi.
							</p>
							<button
								onClick={() => signIn()}
								type='button'
								className='btn btn-primary'
							>
								Sign In with Google
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Login;
