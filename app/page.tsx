import { Inter } from '@next/font/google';
import Login from './Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main style={{ width: '500px', margin: '0 auto', paddingTop: '30px' }}>
      <Login />
		</main>
	);
}
