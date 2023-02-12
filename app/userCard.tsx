import { DefaultSession } from 'next-auth';
import Image from 'next/image';

export function UserCard({ user }: { user: DefaultSession['user'] }) {
	console.log(user?.image);

	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<div className='avatar online'>
					<div className='w-24 rounded-full'>
						<Image
							src={user?.image}
							width={200}
							height={200}
							alt='Avatar'
						/>
					</div>
				</div>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Current Logged In User</h2>
				<h3>{user?.name}</h3>
				<h3>{user?.email}</h3>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
}
